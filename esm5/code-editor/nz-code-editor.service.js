/**
 * @fileoverview added by tsickle
 * Generated from: nz-code-editor.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { of as observableOf, BehaviorSubject, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { warn, warnDeprecation, NzConfigService, PREFIX } from 'ng-zorro-antd/core';
import { NzCodeEditorLoadingStatus, NZ_CODE_EDITOR_CONFIG } from './nz-code-editor.definitions';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "./nz-code-editor.definitions";
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'codeEditor';
// tslint:disable no-any
/**
 * @param {?=} fn
 * @return {?}
 */
function tryTriggerFunc(fn) {
    return (/**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (fn) {
            fn.apply(void 0, tslib_1.__spread(args));
        }
    });
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
        /** @type {?} */
        var globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
        if (config) {
            warnDeprecation("'NZ_CODE_EDITOR_CONFIG' is deprecated and will be removed in next minor version. Please use 'NzConfigService' instead.");
        }
        this.document = _document;
        this.config = tslib_1.__assign({}, config, globalConfig);
        this.option = this.config.defaultEditorOption || {};
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var newGlobalConfig = _this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
            if (newGlobalConfig) {
                _this._updateDefaultOption(newGlobalConfig.defaultEditorOption);
            }
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    NzCodeEditorService.prototype.updateDefaultOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        warnDeprecation("'updateDefaultOption' is deprecated and will be removed in next minor version. Please use 'set' of 'NzConfigService' instead.");
        this._updateDefaultOption(option);
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    NzCodeEditorService.prototype._updateDefaultOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.option = tslib_1.__assign({}, this.option, option);
        this.option$.next(this.option);
        if (option.theme) {
            monaco.editor.setTheme(option.theme);
        }
    };
    /**
     * @return {?}
     */
    NzCodeEditorService.prototype.requestToInit = /**
     * @return {?}
     */
    function () {
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
        return this.loaded$.asObservable().pipe(tap((/**
         * @return {?}
         */
        function () { return _this.onInit(); })), map((/**
         * @return {?}
         */
        function () { return _this.getLatestOption(); })));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorService.prototype.loadMonacoScript = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.useStaticLoading) {
            this.onLoad();
            return;
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADING) {
            return;
        }
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADING;
        /** @type {?} */
        var assetsRoot = this.config.assetsRoot;
        /** @type {?} */
        var vs = assetsRoot ? assetsRoot + "/vs" : 'assets/vs';
        /** @type {?} */
        var windowAsAny = (/** @type {?} */ (window));
        // tslint:disable-line no-any
        /** @type {?} */
        var loadScript = this.document.createElement('script');
        loadScript.type = 'text/javascript';
        loadScript.src = vs + "/loader.js";
        loadScript.onload = (/**
         * @return {?}
         */
        function () {
            windowAsAny.require.config({
                paths: { vs: vs }
            });
            windowAsAny.require(['vs/editor/editor.main'], (/**
             * @return {?}
             */
            function () {
                _this.onLoad();
            }));
        });
        loadScript.onerror = (/**
         * @return {?}
         */
        function () {
            throw new Error(PREFIX + " cannot load assets of monaco editor from source \"" + vs + "\".");
        });
        this.document.documentElement.appendChild(loadScript);
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorService.prototype.onLoad = /**
     * @private
     * @return {?}
     */
    function () {
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADED;
        this.loaded$.next(true);
        this.loaded$.complete();
        tryTriggerFunc(this.config.onLoad)();
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorService.prototype.onInit = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.firstEditorInitialized) {
            this.firstEditorInitialized = true;
            tryTriggerFunc(this.config.onFirstEditorInit)();
        }
        tryTriggerFunc(this.config.onInit)();
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorService.prototype.getLatestOption = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__assign({}, this.option);
    };
    NzCodeEditorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzCodeEditorService.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [NZ_CODE_EDITOR_CONFIG,] }, { type: Optional }] }
    ]; };
    /** @nocollapse */ NzCodeEditorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzCodeEditorService_Factory() { return new NzCodeEditorService(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i3.NZ_CODE_EDITOR_CONFIG, 8)); }, token: NzCodeEditorService, providedIn: "root" });
    return NzCodeEditorService;
}());
export { NzCodeEditorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.firstEditorInitialized;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.loaded$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.loadingStatus;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.option;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.config;
    /** @type {?} */
    NzCodeEditorService.prototype.option$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29kZS1lZGl0b3IvIiwic291cmNlcyI6WyJuei1jb2RlLWVkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLGVBQWUsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEYsT0FBTyxFQUdMLHlCQUF5QixFQUN6QixxQkFBcUIsRUFDdEIsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0lBS2hDLHdCQUF3QixHQUFHLFlBQVk7Ozs7OztBQUc3QyxTQUFTLGNBQWMsQ0FBQyxFQUE0QjtJQUNsRDs7OztJQUFPO1FBQUMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDcEIsSUFBSSxFQUFFLEVBQUU7WUFDTixFQUFFLGdDQUFJLElBQUksR0FBRTtTQUNiO0lBQ0gsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFHRDtJQWFFLDZCQUNtQixlQUFnQyxFQUMvQixTQUFjLEVBQUUsNkJBQTZCO0lBQ3BCLE1BQTJCO1FBSHhFLGlCQXVCQztRQXRCa0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVDNDLDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUMvQixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztR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QVEsRUFBRSxDQUFDO1FBRXhCLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTyxvQ0FBTTs7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUNoQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1lBQ25DLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztTQUNqRDtRQUVELGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTyw2Q0FBZTs7OztJQUF2QjtRQUNFLDRCQUFZLElBQUksQ0FBQyxNQUFNLEVBQUc7SUFDNUIsQ0FBQzs7Z0JBcElGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBekIrQixlQUFlO2dEQXNDMUMsTUFBTSxTQUFDLFFBQVE7Z0RBQ2YsTUFBTSxTQUFDLHFCQUFxQixjQUFHLFFBQVE7Ozs4QkFwRDVDO0NBeUtDLEFBcklELElBcUlDO1NBbElZLG1CQUFtQjs7Ozs7O0lBQzlCLHVDQUEyQjs7Ozs7SUFDM0IscURBQXVDOzs7OztJQUN2QyxzQ0FBeUM7Ozs7O0lBQ3pDLDRDQUF5RDs7Ozs7SUFDekQscUNBQW9DOzs7OztJQUNwQyxxQ0FBbUM7O0lBRW5DLHNDQUFnRTs7Ozs7SUFHOUQsOENBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyB3YXJuLCB3YXJuRGVwcmVjYXRpb24sIE56Q29uZmlnU2VydmljZSwgUFJFRklYIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBKb2luZWRFZGl0b3JPcHRpb25zLFxyXG4gIE56Q29kZUVkaXRvckNvbmZpZyxcclxuICBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLFxyXG4gIE5aX0NPREVfRURJVE9SX0NPTkZJR1xyXG59IGZyb20gJy4vbnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMnO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG5kZWNsYXJlIGNvbnN0IG1vbmFjbzogYW55O1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2NvZGVFZGl0b3InO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUgbm8tYW55XHJcbmZ1bmN0aW9uIHRyeVRyaWdnZXJGdW5jKGZuPzogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpOiAoLi4uYXJnczogYW55KSA9PiB2b2lkIHtcclxuICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICBpZiAoZm4pIHtcclxuICAgICAgZm4oLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4vLyB0c2xpbnQ6ZW5hYmxlIG5vLWFueVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb2RlRWRpdG9yU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XHJcbiAgcHJpdmF0ZSBmaXJzdEVkaXRvckluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBsb2FkZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBwcml2YXRlIGxvYWRpbmdTdGF0dXMgPSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLlVOTE9BRDtcclxuICBwcml2YXRlIG9wdGlvbjogSm9pbmVkRWRpdG9yT3B0aW9ucztcclxuICBwcml2YXRlIGNvbmZpZzogTnpDb2RlRWRpdG9yQ29uZmlnO1xyXG5cclxuICBvcHRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxKb2luZWRFZGl0b3JPcHRpb25zPih0aGlzLm9wdGlvbik7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55LCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWFueVxyXG4gICAgQEluamVjdChOWl9DT0RFX0VESVRPUl9DT05GSUcpIEBPcHRpb25hbCgpIGNvbmZpZz86IE56Q29kZUVkaXRvckNvbmZpZ1xyXG4gICkge1xyXG4gICAgY29uc3QgZ2xvYmFsQ29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSk7XHJcblxyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCdOWl9DT0RFX0VESVRPUl9DT05GSUcnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1pbm9yIHZlcnNpb24uIFBsZWFzZSB1c2UgJ056Q29uZmlnU2VydmljZScgaW5zdGVhZC5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kb2N1bWVudCA9IF9kb2N1bWVudDtcclxuICAgIHRoaXMuY29uZmlnID0geyAuLi5jb25maWcsIC4uLmdsb2JhbENvbmZpZyB9O1xyXG4gICAgdGhpcy5vcHRpb24gPSB0aGlzLmNvbmZpZy5kZWZhdWx0RWRpdG9yT3B0aW9uIHx8IHt9O1xyXG5cclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3QgbmV3R2xvYmFsQ29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSk7XHJcbiAgICAgIGlmIChuZXdHbG9iYWxDb25maWcpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVEZWZhdWx0T3B0aW9uKG5ld0dsb2JhbENvbmZpZy5kZWZhdWx0RWRpdG9yT3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEZWZhdWx0T3B0aW9uKG9wdGlvbjogSm9pbmVkRWRpdG9yT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICBgJ3VwZGF0ZURlZmF1bHRPcHRpb24nIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1pbm9yIHZlcnNpb24uIFBsZWFzZSB1c2UgJ3NldCcgb2YgJ056Q29uZmlnU2VydmljZScgaW5zdGVhZC5gXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX3VwZGF0ZURlZmF1bHRPcHRpb24ob3B0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZURlZmF1bHRPcHRpb24ob3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbiA9IHsgLi4udGhpcy5vcHRpb24sIC4uLm9wdGlvbiB9O1xyXG4gICAgdGhpcy5vcHRpb24kLm5leHQodGhpcy5vcHRpb24pO1xyXG5cclxuICAgIGlmIChvcHRpb24udGhlbWUpIHtcclxuICAgICAgbW9uYWNvLmVkaXRvci5zZXRUaGVtZShvcHRpb24udGhlbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdFRvSW5pdCgpOiBPYnNlcnZhYmxlPEpvaW5lZEVkaXRvck9wdGlvbnM+IHtcclxuICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0dXMgPT09IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuTE9BREVEKSB7XHJcbiAgICAgIHRoaXMub25Jbml0KCk7XHJcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5nZXRMYXRlc3RPcHRpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5VTkxPQUQpIHtcclxuICAgICAgaWYgKHRoaXMuY29uZmlnLnVzZVN0YXRpY0xvYWRpbmcgJiYgdHlwZW9mIG1vbmFjbyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB3YXJuKFxyXG4gICAgICAgICAgJ1lvdSBjaG9vc2UgdG8gdXNlIHN0YXRpYyBsb2FkaW5nIGJ1dCBpdCBzZWVtcyB0aGF0IHlvdSBmb3JnZXQgJyArXHJcbiAgICAgICAgICAgICd0byBjb25maWcgd2VicGFjayBwbHVnaW4gY29ycmVjdGx5LiBQbGVhc2UgcmVmZXIgdG8gb3VyIG9mZmljaWFsIHdlYnNpdGUnICtcclxuICAgICAgICAgICAgJ2ZvciBtb3JlIGRldGFpbHMgYWJvdXQgc3RhdGljIGxvYWRpbmcuJ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTW9uYWNvU2NyaXB0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5sb2FkZWQkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB0aGlzLm9uSW5pdCgpKSxcclxuICAgICAgbWFwKCgpID0+IHRoaXMuZ2V0TGF0ZXN0T3B0aW9uKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkTW9uYWNvU2NyaXB0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLnVzZVN0YXRpY0xvYWRpbmcpIHtcclxuICAgICAgdGhpcy5vbkxvYWQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0dXMgPT09IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuTE9BRElORykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkaW5nU3RhdHVzID0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5MT0FESU5HO1xyXG5cclxuICAgIGNvbnN0IGFzc2V0c1Jvb3QgPSB0aGlzLmNvbmZpZy5hc3NldHNSb290O1xyXG4gICAgY29uc3QgdnMgPSBhc3NldHNSb290ID8gYCR7YXNzZXRzUm9vdH0vdnNgIDogJ2Fzc2V0cy92cyc7XHJcbiAgICBjb25zdCB3aW5kb3dBc0FueSA9IHdpbmRvdyBhcyBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tYW55XHJcbiAgICBjb25zdCBsb2FkU2NyaXB0ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcbiAgICBsb2FkU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgIGxvYWRTY3JpcHQuc3JjID0gYCR7dnN9L2xvYWRlci5qc2A7XHJcbiAgICBsb2FkU2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgd2luZG93QXNBbnkucmVxdWlyZS5jb25maWcoe1xyXG4gICAgICAgIHBhdGhzOiB7IHZzIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvd0FzQW55LnJlcXVpcmUoWyd2cy9lZGl0b3IvZWRpdG9yLm1haW4nXSwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25Mb2FkKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGxvYWRTY3JpcHQub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0gY2Fubm90IGxvYWQgYXNzZXRzIG9mIG1vbmFjbyBlZGl0b3IgZnJvbSBzb3VyY2UgXCIke3ZzfVwiLmApO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChsb2FkU2NyaXB0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nU3RhdHVzID0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5MT0FERUQ7XHJcbiAgICB0aGlzLmxvYWRlZCQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMubG9hZGVkJC5jb21wbGV0ZSgpO1xyXG5cclxuICAgIHRyeVRyaWdnZXJGdW5jKHRoaXMuY29uZmlnLm9uTG9hZCkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmZpcnN0RWRpdG9ySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5maXJzdEVkaXRvckluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgdHJ5VHJpZ2dlckZ1bmModGhpcy5jb25maWcub25GaXJzdEVkaXRvckluaXQpKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5VHJpZ2dlckZ1bmModGhpcy5jb25maWcub25Jbml0KSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRMYXRlc3RPcHRpb24oKTogSm9pbmVkRWRpdG9yT3B0aW9ucyB7XHJcbiAgICByZXR1cm4geyAuLi50aGlzLm9wdGlvbiB9O1xyXG4gIH1cclxufVxyXG4iXX0=