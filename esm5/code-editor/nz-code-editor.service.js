import { __assign, __read, __spread } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, of as observableOf, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NzConfigService, PREFIX, warn, warnDeprecation } from 'ng-zorro-antd/core';
import { NZ_CODE_EDITOR_CONFIG, NzCodeEditorLoadingStatus } from './nz-code-editor.definitions';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
var NZ_CONFIG_COMPONENT_NAME = 'codeEditor';
// tslint:disable no-any
function tryTriggerFunc(fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (fn) {
            fn.apply(void 0, __spread(args));
        }
    };
}
// tslint:enable no-any
var NzCodeEditorService = /** @class */ (function () {
    function NzCodeEditorService(nzConfigService, _document, // tslint:disable-line no-any
    config) {
        var _this = this;
        this.nzConfigService = nzConfigService;
        this.firstEditorInitialized = false;
        this.loaded$ = new Subject();
        this.loadingStatus = NzCodeEditorLoadingStatus.UNLOAD;
        this.option$ = new BehaviorSubject(this.option);
        var globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
        if (config) {
            warnDeprecation("'NZ_CODE_EDITOR_CONFIG' is deprecated and will be removed in next minor version. Please use 'NzConfigService' instead.");
        }
        this.document = _document;
        this.config = __assign(__assign({}, config), globalConfig);
        this.option = this.config.defaultEditorOption || {};
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe(function () {
            var newGlobalConfig = _this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
            if (newGlobalConfig) {
                _this._updateDefaultOption(newGlobalConfig.defaultEditorOption);
            }
        });
    }
    NzCodeEditorService.prototype.updateDefaultOption = function (option) {
        warnDeprecation("'updateDefaultOption' is deprecated and will be removed in next minor version. Please use 'set' of 'NzConfigService' instead.");
        this._updateDefaultOption(option);
    };
    NzCodeEditorService.prototype._updateDefaultOption = function (option) {
        this.option = __assign(__assign({}, this.option), option);
        this.option$.next(this.option);
        if (option.theme) {
            monaco.editor.setTheme(option.theme);
        }
    };
    NzCodeEditorService.prototype.requestToInit = function () {
        var _this = this;
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADED) {
            this.onInit();
            return observableOf(this.getLatestOption());
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.UNLOAD) {
            if (this.config.useStaticLoading && typeof monaco === 'undefined') {
                warn('You choose to use static loading but it seems that you forget ' +
                    'to config webpack plugin correctly. Please refer to our official website' +
                    'for more details about static loading.');
            }
            else {
                this.loadMonacoScript();
            }
        }
        return this.loaded$.asObservable().pipe(tap(function () { return _this.onInit(); }), map(function () { return _this.getLatestOption(); }));
    };
    NzCodeEditorService.prototype.loadMonacoScript = function () {
        var _this = this;
        if (this.config.useStaticLoading) {
            this.onLoad();
            return;
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADING) {
            return;
        }
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADING;
        var assetsRoot = this.config.assetsRoot;
        var vs = assetsRoot ? assetsRoot + "/vs" : 'assets/vs';
        var windowAsAny = window; // tslint:disable-line no-any
        var loadScript = this.document.createElement('script');
        loadScript.type = 'text/javascript';
        loadScript.src = vs + "/loader.js";
        loadScript.onload = function () {
            windowAsAny.require.config({
                paths: { vs: vs }
            });
            windowAsAny.require(['vs/editor/editor.main'], function () {
                _this.onLoad();
            });
        };
        loadScript.onerror = function () {
            throw new Error(PREFIX + " cannot load assets of monaco editor from source \"" + vs + "\".");
        };
        this.document.documentElement.appendChild(loadScript);
    };
    NzCodeEditorService.prototype.onLoad = function () {
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADED;
        this.loaded$.next(true);
        this.loaded$.complete();
        tryTriggerFunc(this.config.onLoad)();
    };
    NzCodeEditorService.prototype.onInit = function () {
        if (!this.firstEditorInitialized) {
            this.firstEditorInitialized = true;
            tryTriggerFunc(this.config.onFirstEditorInit)();
        }
        tryTriggerFunc(this.config.onInit)();
    };
    NzCodeEditorService.prototype.getLatestOption = function () {
        return __assign({}, this.option);
    };
    /** @nocollapse */ NzCodeEditorService.ɵfac = function NzCodeEditorService_Factory(t) { return new (t || NzCodeEditorService)(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(NZ_CODE_EDITOR_CONFIG, 8)); };
    /** @nocollapse */ NzCodeEditorService.ɵprov = i0.ɵɵdefineInjectable({ token: NzCodeEditorService, factory: NzCodeEditorService.ɵfac, providedIn: 'root' });
    return NzCodeEditorService;
}());
export { NzCodeEditorService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCodeEditorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [NZ_CODE_EDITOR_CONFIG]
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29kZS1lZGl0b3IvIiwic291cmNlcyI6WyJuei1jb2RlLWVkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxJQUFJLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEYsT0FBTyxFQUF1QixxQkFBcUIsRUFBc0IseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBS3pJLElBQU0sd0JBQXdCLEdBQUcsWUFBWSxDQUFDO0FBRTlDLHdCQUF3QjtBQUN4QixTQUFTLGNBQWMsQ0FBQyxFQUE0QjtJQUNsRCxPQUFPO1FBQUMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDcEIsSUFBSSxFQUFFLEVBQUU7WUFDTixFQUFFLHdCQUFJLElBQUksR0FBRTtTQUNiO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUNELHVCQUF1QjtBQUV2QjtJQWFFLDZCQUNtQixlQUFnQyxFQUMvQixTQUFjLEVBQUUsNkJBQTZCO0lBQ3BCLE1BQTJCO1FBSHhFLGlCQXVCQztRQXRCa0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVDNDLDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUMvQixZQUFP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LElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFeEIsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU8sb0NBQU0sR0FBZDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztZQUNuQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7U0FDakQ7UUFFRCxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFTyw2Q0FBZSxHQUF2QjtRQUNFLG9CQUFZLElBQUksQ0FBQyxNQUFNLEVBQUc7SUFDNUIsQ0FBQzswRkFqSVUsbUJBQW1CLCtDQVlwQixRQUFRLGVBQ1IscUJBQXFCOytEQWJwQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNOzhCQWhDcEI7Q0FvS0MsQUFySUQsSUFxSUM7U0FsSVksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFhSSxNQUFNO3VCQUFDLFFBQVE7O3NCQUNmLE1BQU07dUJBQUMscUJBQXFCOztzQkFBRyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFBSRUZJWCwgd2Fybiwgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgSm9pbmVkRWRpdG9yT3B0aW9ucywgTlpfQ09ERV9FRElUT1JfQ09ORklHLCBOekNvZGVFZGl0b3JDb25maWcsIE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMgfSBmcm9tICcuL256LWNvZGUtZWRpdG9yLmRlZmluaXRpb25zJztcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuZGVjbGFyZSBjb25zdCBtb25hY286IGFueTtcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjb2RlRWRpdG9yJztcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIG5vLWFueVxyXG5mdW5jdGlvbiB0cnlUcmlnZ2VyRnVuYyhmbj86ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55KTogKC4uLmFyZ3M6IGFueSkgPT4gdm9pZCB7XHJcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgaWYgKGZuKSB7XHJcbiAgICAgIGZuKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuLy8gdHNsaW50OmVuYWJsZSBuby1hbnlcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29kZUVkaXRvclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xyXG4gIHByaXZhdGUgZmlyc3RFZGl0b3JJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbG9hZGVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSBsb2FkaW5nU3RhdHVzID0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5VTkxPQUQ7XHJcbiAgcHJpdmF0ZSBvcHRpb246IEpvaW5lZEVkaXRvck9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBjb25maWc6IE56Q29kZUVkaXRvckNvbmZpZztcclxuXHJcbiAgb3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Sm9pbmVkRWRpdG9yT3B0aW9ucz4odGhpcy5vcHRpb24pO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1hbnlcclxuICAgIEBJbmplY3QoTlpfQ09ERV9FRElUT1JfQ09ORklHKSBAT3B0aW9uYWwoKSBjb25maWc/OiBOekNvZGVFZGl0b3JDb25maWdcclxuICApIHtcclxuICAgIGNvbnN0IGdsb2JhbENvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpO1xyXG5cclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgIGAnTlpfQ09ERV9FRElUT1JfQ09ORklHJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCBtaW5vciB2ZXJzaW9uLiBQbGVhc2UgdXNlICdOekNvbmZpZ1NlcnZpY2UnIGluc3RlYWQuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZG9jdW1lbnQgPSBfZG9jdW1lbnQ7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4uY29uZmlnLCAuLi5nbG9iYWxDb25maWcgfTtcclxuICAgIHRoaXMub3B0aW9uID0gdGhpcy5jb25maWcuZGVmYXVsdEVkaXRvck9wdGlvbiB8fCB7fTtcclxuXHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0dsb2JhbENvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpO1xyXG4gICAgICBpZiAobmV3R2xvYmFsQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRGVmYXVsdE9wdGlvbihuZXdHbG9iYWxDb25maWcuZGVmYXVsdEVkaXRvck9wdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGVmYXVsdE9wdGlvbihvcHRpb246IEpvaW5lZEVkaXRvck9wdGlvbnMpOiB2b2lkIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgYCd1cGRhdGVEZWZhdWx0T3B0aW9uJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCBtaW5vciB2ZXJzaW9uLiBQbGVhc2UgdXNlICdzZXQnIG9mICdOekNvbmZpZ1NlcnZpY2UnIGluc3RlYWQuYFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLl91cGRhdGVEZWZhdWx0T3B0aW9uKG9wdGlvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVEZWZhdWx0T3B0aW9uKG9wdGlvbjogSm9pbmVkRWRpdG9yT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgdGhpcy5vcHRpb24gPSB7IC4uLnRoaXMub3B0aW9uLCAuLi5vcHRpb24gfTtcclxuICAgIHRoaXMub3B0aW9uJC5uZXh0KHRoaXMub3B0aW9uKTtcclxuXHJcbiAgICBpZiAob3B0aW9uLnRoZW1lKSB7XHJcbiAgICAgIG1vbmFjby5lZGl0b3Iuc2V0VGhlbWUob3B0aW9uLnRoZW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3RUb0luaXQoKTogT2JzZXJ2YWJsZTxKb2luZWRFZGl0b3JPcHRpb25zPiB7XHJcbiAgICBpZiAodGhpcy5sb2FkaW5nU3RhdHVzID09PSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLkxPQURFRCkge1xyXG4gICAgICB0aGlzLm9uSW5pdCgpO1xyXG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuZ2V0TGF0ZXN0T3B0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0dXMgPT09IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuVU5MT0FEKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbmZpZy51c2VTdGF0aWNMb2FkaW5nICYmIHR5cGVvZiBtb25hY28gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgd2FybihcclxuICAgICAgICAgICdZb3UgY2hvb3NlIHRvIHVzZSBzdGF0aWMgbG9hZGluZyBidXQgaXQgc2VlbXMgdGhhdCB5b3UgZm9yZ2V0ICcgK1xyXG4gICAgICAgICAgICAndG8gY29uZmlnIHdlYnBhY2sgcGx1Z2luIGNvcnJlY3RseS4gUGxlYXNlIHJlZmVyIHRvIG91ciBvZmZpY2lhbCB3ZWJzaXRlJyArXHJcbiAgICAgICAgICAgICdmb3IgbW9yZSBkZXRhaWxzIGFib3V0IHN0YXRpYyBsb2FkaW5nLidcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9hZE1vbmFjb1NjcmlwdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubG9hZGVkJC5hc09ic2VydmFibGUoKS5waXBlKFxyXG4gICAgICB0YXAoKCkgPT4gdGhpcy5vbkluaXQoKSksXHJcbiAgICAgIG1hcCgoKSA9PiB0aGlzLmdldExhdGVzdE9wdGlvbigpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZE1vbmFjb1NjcmlwdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZy51c2VTdGF0aWNMb2FkaW5nKSB7XHJcbiAgICAgIHRoaXMub25Mb2FkKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sb2FkaW5nU3RhdHVzID09PSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLkxPQURJTkcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9hZGluZ1N0YXR1cyA9IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuTE9BRElORztcclxuXHJcbiAgICBjb25zdCBhc3NldHNSb290ID0gdGhpcy5jb25maWcuYXNzZXRzUm9vdDtcclxuICAgIGNvbnN0IHZzID0gYXNzZXRzUm9vdCA/IGAke2Fzc2V0c1Jvb3R9L3ZzYCA6ICdhc3NldHMvdnMnO1xyXG4gICAgY29uc3Qgd2luZG93QXNBbnkgPSB3aW5kb3cgYXMgYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWFueVxyXG4gICAgY29uc3QgbG9hZFNjcmlwdCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG4gICAgbG9hZFNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICBsb2FkU2NyaXB0LnNyYyA9IGAke3ZzfS9sb2FkZXIuanNgO1xyXG4gICAgbG9hZFNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvd0FzQW55LnJlcXVpcmUuY29uZmlnKHtcclxuICAgICAgICBwYXRoczogeyB2cyB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB3aW5kb3dBc0FueS5yZXF1aXJlKFsndnMvZWRpdG9yL2VkaXRvci5tYWluJ10sICgpID0+IHtcclxuICAgICAgICB0aGlzLm9uTG9hZCgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBsb2FkU2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtQUkVGSVh9IGNhbm5vdCBsb2FkIGFzc2V0cyBvZiBtb25hY28gZWRpdG9yIGZyb20gc291cmNlIFwiJHt2c31cIi5gKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobG9hZFNjcmlwdCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZ1N0YXR1cyA9IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuTE9BREVEO1xyXG4gICAgdGhpcy5sb2FkZWQkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmxvYWRlZCQuY29tcGxldGUoKTtcclxuXHJcbiAgICB0cnlUcmlnZ2VyRnVuYyh0aGlzLmNvbmZpZy5vbkxvYWQpKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5maXJzdEVkaXRvckluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuZmlyc3RFZGl0b3JJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIHRyeVRyaWdnZXJGdW5jKHRoaXMuY29uZmlnLm9uRmlyc3RFZGl0b3JJbml0KSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeVRyaWdnZXJGdW5jKHRoaXMuY29uZmlnLm9uSW5pdCkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TGF0ZXN0T3B0aW9uKCk6IEpvaW5lZEVkaXRvck9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHsgLi4udGhpcy5vcHRpb24gfTtcclxuICB9XHJcbn1cclxuIl19