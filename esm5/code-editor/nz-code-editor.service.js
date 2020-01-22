/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29kZS1lZGl0b3IvIiwic291cmNlcyI6WyJuei1jb2RlLWVkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRixPQUFPLEVBR0wseUJBQXlCLEVBQ3pCLHFCQUFxQixFQUN0QixNQUFNLDhCQUE4QixDQUFDOzs7Ozs7SUFLaEMsd0JBQXdCLEdBQUcsWUFBWTs7Ozs7O0FBRzdDLFNBQVMsY0FBYyxDQUFDLEVBQTRCO0lBQ2xEOzs7O0lBQU87UUFBQyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNwQixJQUFJLEVBQUUsRUFBRTtZQUNOLEVBQUUsZ0NBQUksSUFBSSxHQUFFO1NBQ2I7SUFDSCxDQUFDLEVBQUM7QUFDSixDQUFDOztBQUdEO0lBYUUsNkJBQ21CLGVBQWdDLEVBQy9CLFNBQWMsRUFBRSw2QkFBNkI7SUFDcEIsTUFBMkI7UUFIeEUsaUJBdUJDO1FBdEJrQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFUM0MsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FB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USxFQUFFLENBQUM7UUFFeEIsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVPLG9DQUFNOzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ2hDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7WUFDbkMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1NBQ2pEO1FBRUQsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVPLDZDQUFlOzs7O0lBQXZCO1FBQ0UsNEJBQVksSUFBSSxDQUFDLE1BQU0sRUFBRztJQUM1QixDQUFDOztnQkFwSUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkF6QitCLGVBQWU7Z0RBc0MxQyxNQUFNLFNBQUMsUUFBUTtnREFDZixNQUFNLFNBQUMscUJBQXFCLGNBQUcsUUFBUTs7OzhCQXBENUM7Q0F5S0MsQUFySUQsSUFxSUM7U0FsSVksbUJBQW1COzs7Ozs7SUFDOUIsdUNBQTJCOzs7OztJQUMzQixxREFBdUM7Ozs7O0lBQ3ZDLHNDQUF5Qzs7Ozs7SUFDekMsNENBQXlEOzs7OztJQUN6RCxxQ0FBb0M7Ozs7O0lBQ3BDLHFDQUFtQzs7SUFFbkMsc0NBQWdFOzs7OztJQUc5RCw4Q0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsIEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHdhcm4sIHdhcm5EZXByZWNhdGlvbiwgTnpDb25maWdTZXJ2aWNlLCBQUkVGSVggfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEpvaW5lZEVkaXRvck9wdGlvbnMsXHJcbiAgTnpDb2RlRWRpdG9yQ29uZmlnLFxyXG4gIE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMsXHJcbiAgTlpfQ09ERV9FRElUT1JfQ09ORklHXHJcbn0gZnJvbSAnLi9uei1jb2RlLWVkaXRvci5kZWZpbml0aW9ucyc7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmRlY2xhcmUgY29uc3QgbW9uYWNvOiBhbnk7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnY29kZUVkaXRvcic7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZSBuby1hbnlcclxuZnVuY3Rpb24gdHJ5VHJpZ2dlckZ1bmMoZm4/OiAoLi4uYXJnczogYW55W10pID0+IGFueSk6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQge1xyXG4gIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgIGlmIChmbikge1xyXG4gICAgICBmbiguLi5hcmdzKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbi8vIHRzbGludDplbmFibGUgbm8tYW55XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvZGVFZGl0b3JTZXJ2aWNlIHtcclxuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcclxuICBwcml2YXRlIGZpcnN0RWRpdG9ySW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGxvYWRlZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIHByaXZhdGUgbG9hZGluZ1N0YXR1cyA9IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuVU5MT0FEO1xyXG4gIHByaXZhdGUgb3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zO1xyXG4gIHByaXZhdGUgY29uZmlnOiBOekNvZGVFZGl0b3JDb25maWc7XHJcblxyXG4gIG9wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEpvaW5lZEVkaXRvck9wdGlvbnM+KHRoaXMub3B0aW9uKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tYW55XHJcbiAgICBASW5qZWN0KE5aX0NPREVfRURJVE9SX0NPTkZJRykgQE9wdGlvbmFsKCkgY29uZmlnPzogTnpDb2RlRWRpdG9yQ29uZmlnXHJcbiAgKSB7XHJcbiAgICBjb25zdCBnbG9iYWxDb25maWcgPSB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKTtcclxuXHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgJ05aX0NPREVfRURJVE9SX0NPTkZJRycgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIG5leHQgbWlub3IgdmVyc2lvbi4gUGxlYXNlIHVzZSAnTnpDb25maWdTZXJ2aWNlJyBpbnN0ZWFkLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRvY3VtZW50ID0gX2RvY3VtZW50O1xyXG4gICAgdGhpcy5jb25maWcgPSB7IC4uLmNvbmZpZywgLi4uZ2xvYmFsQ29uZmlnIH07XHJcbiAgICB0aGlzLm9wdGlvbiA9IHRoaXMuY29uZmlnLmRlZmF1bHRFZGl0b3JPcHRpb24gfHwge307XHJcblxyXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdHbG9iYWxDb25maWcgPSB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKTtcclxuICAgICAgaWYgKG5ld0dsb2JhbENvbmZpZykge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZURlZmF1bHRPcHRpb24obmV3R2xvYmFsQ29uZmlnLmRlZmF1bHRFZGl0b3JPcHRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURlZmF1bHRPcHRpb24ob3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zKTogdm9pZCB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgIGAndXBkYXRlRGVmYXVsdE9wdGlvbicgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIG5leHQgbWlub3IgdmVyc2lvbi4gUGxlYXNlIHVzZSAnc2V0JyBvZiAnTnpDb25maWdTZXJ2aWNlJyBpbnN0ZWFkLmBcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlRGVmYXVsdE9wdGlvbihvcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXBkYXRlRGVmYXVsdE9wdGlvbihvcHRpb246IEpvaW5lZEVkaXRvck9wdGlvbnMpOiB2b2lkIHtcclxuICAgIHRoaXMub3B0aW9uID0geyAuLi50aGlzLm9wdGlvbiwgLi4ub3B0aW9uIH07XHJcbiAgICB0aGlzLm9wdGlvbiQubmV4dCh0aGlzLm9wdGlvbik7XHJcblxyXG4gICAgaWYgKG9wdGlvbi50aGVtZSkge1xyXG4gICAgICBtb25hY28uZWRpdG9yLnNldFRoZW1lKG9wdGlvbi50aGVtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0VG9Jbml0KCk6IE9ic2VydmFibGU8Sm9pbmVkRWRpdG9yT3B0aW9ucz4ge1xyXG4gICAgaWYgKHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5MT0FERUQpIHtcclxuICAgICAgdGhpcy5vbkluaXQoKTtcclxuICAgICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmdldExhdGVzdE9wdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sb2FkaW5nU3RhdHVzID09PSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLlVOTE9BRCkge1xyXG4gICAgICBpZiAodGhpcy5jb25maWcudXNlU3RhdGljTG9hZGluZyAmJiB0eXBlb2YgbW9uYWNvID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHdhcm4oXHJcbiAgICAgICAgICAnWW91IGNob29zZSB0byB1c2Ugc3RhdGljIGxvYWRpbmcgYnV0IGl0IHNlZW1zIHRoYXQgeW91IGZvcmdldCAnICtcclxuICAgICAgICAgICAgJ3RvIGNvbmZpZyB3ZWJwYWNrIHBsdWdpbiBjb3JyZWN0bHkuIFBsZWFzZSByZWZlciB0byBvdXIgb2ZmaWNpYWwgd2Vic2l0ZScgK1xyXG4gICAgICAgICAgICAnZm9yIG1vcmUgZGV0YWlscyBhYm91dCBzdGF0aWMgbG9hZGluZy4nXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxvYWRNb25hY29TY3JpcHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmxvYWRlZCQuYXNPYnNlcnZhYmxlKCkucGlwZShcclxuICAgICAgdGFwKCgpID0+IHRoaXMub25Jbml0KCkpLFxyXG4gICAgICBtYXAoKCkgPT4gdGhpcy5nZXRMYXRlc3RPcHRpb24oKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRNb25hY29TY3JpcHQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jb25maWcudXNlU3RhdGljTG9hZGluZykge1xyXG4gICAgICB0aGlzLm9uTG9hZCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5MT0FESU5HKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvYWRpbmdTdGF0dXMgPSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLkxPQURJTkc7XHJcblxyXG4gICAgY29uc3QgYXNzZXRzUm9vdCA9IHRoaXMuY29uZmlnLmFzc2V0c1Jvb3Q7XHJcbiAgICBjb25zdCB2cyA9IGFzc2V0c1Jvb3QgPyBgJHthc3NldHNSb290fS92c2AgOiAnYXNzZXRzL3ZzJztcclxuICAgIGNvbnN0IHdpbmRvd0FzQW55ID0gd2luZG93IGFzIGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1hbnlcclxuICAgIGNvbnN0IGxvYWRTY3JpcHQgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuICAgIGxvYWRTY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgbG9hZFNjcmlwdC5zcmMgPSBgJHt2c30vbG9hZGVyLmpzYDtcclxuICAgIGxvYWRTY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICB3aW5kb3dBc0FueS5yZXF1aXJlLmNvbmZpZyh7XHJcbiAgICAgICAgcGF0aHM6IHsgdnMgfVxyXG4gICAgICB9KTtcclxuICAgICAgd2luZG93QXNBbnkucmVxdWlyZShbJ3ZzL2VkaXRvci9lZGl0b3IubWFpbiddLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkxvYWQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgbG9hZFNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7UFJFRklYfSBjYW5ub3QgbG9hZCBhc3NldHMgb2YgbW9uYWNvIGVkaXRvciBmcm9tIHNvdXJjZSBcIiR7dnN9XCIuYCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGxvYWRTY3JpcHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmdTdGF0dXMgPSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLkxPQURFRDtcclxuICAgIHRoaXMubG9hZGVkJC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5sb2FkZWQkLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgdHJ5VHJpZ2dlckZ1bmModGhpcy5jb25maWcub25Mb2FkKSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZmlyc3RFZGl0b3JJbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmZpcnN0RWRpdG9ySW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICB0cnlUcmlnZ2VyRnVuYyh0aGlzLmNvbmZpZy5vbkZpcnN0RWRpdG9ySW5pdCkoKTtcclxuICAgIH1cclxuXHJcbiAgICB0cnlUcmlnZ2VyRnVuYyh0aGlzLmNvbmZpZy5vbkluaXQpKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldExhdGVzdE9wdGlvbigpOiBKb2luZWRFZGl0b3JPcHRpb25zIHtcclxuICAgIHJldHVybiB7IC4uLnRoaXMub3B0aW9uIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==