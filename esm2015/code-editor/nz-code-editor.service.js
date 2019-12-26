/**
 * @fileoverview added by tsickle
 * Generated from: nz-code-editor.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const NZ_CONFIG_COMPONENT_NAME = 'codeEditor';
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
    (...args) => {
        if (fn) {
            fn(...args);
        }
    });
}
// tslint:enable no-any
export class NzCodeEditorService {
    /**
     * @param {?} nzConfigService
     * @param {?} _document
     * @param {?=} config
     */
    constructor(nzConfigService, _document, // tslint:disable-line no-any
    config) {
        this.nzConfigService = nzConfigService;
        this.firstEditorInitialized = false;
        this.loaded$ = new Subject();
        this.loadingStatus = NzCodeEditorLoadingStatus.UNLOAD;
        this.option$ = new BehaviorSubject(this.option);
        /** @type {?} */
        const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
        if (config) {
            warnDeprecation(`'NZ_CODE_EDITOR_CONFIG' is deprecated and will be removed in next minor version. Please use 'NzConfigService' instead.`);
        }
        this.document = _document;
        this.config = Object.assign({}, config, globalConfig);
        this.option = this.config.defaultEditorOption || {};
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const newGlobalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
            if (newGlobalConfig) {
                this._updateDefaultOption(newGlobalConfig.defaultEditorOption);
            }
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    updateDefaultOption(option) {
        warnDeprecation(`'updateDefaultOption' is deprecated and will be removed in next minor version. Please use 'set' of 'NzConfigService' instead.`);
        this._updateDefaultOption(option);
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    _updateDefaultOption(option) {
        this.option = Object.assign({}, this.option, option);
        this.option$.next(this.option);
        if (option.theme) {
            monaco.editor.setTheme(option.theme);
        }
    }
    /**
     * @return {?}
     */
    requestToInit() {
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
        () => this.onInit())), map((/**
         * @return {?}
         */
        () => this.getLatestOption())));
    }
    /**
     * @private
     * @return {?}
     */
    loadMonacoScript() {
        if (this.config.useStaticLoading) {
            this.onLoad();
            return;
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADING) {
            return;
        }
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADING;
        /** @type {?} */
        const assetsRoot = this.config.assetsRoot;
        /** @type {?} */
        const vs = assetsRoot ? `${assetsRoot}/vs` : 'assets/vs';
        /** @type {?} */
        const windowAsAny = (/** @type {?} */ (window));
        // tslint:disable-line no-any
        /** @type {?} */
        const loadScript = this.document.createElement('script');
        loadScript.type = 'text/javascript';
        loadScript.src = `${vs}/loader.js`;
        loadScript.onload = (/**
         * @return {?}
         */
        () => {
            windowAsAny.require.config({
                paths: { vs }
            });
            windowAsAny.require(['vs/editor/editor.main'], (/**
             * @return {?}
             */
            () => {
                this.onLoad();
            }));
        });
        loadScript.onerror = (/**
         * @return {?}
         */
        () => {
            throw new Error(`${PREFIX} cannot load assets of monaco editor from source "${vs}".`);
        });
        this.document.documentElement.appendChild(loadScript);
    }
    /**
     * @private
     * @return {?}
     */
    onLoad() {
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADED;
        this.loaded$.next(true);
        this.loaded$.complete();
        tryTriggerFunc(this.config.onLoad)();
    }
    /**
     * @private
     * @return {?}
     */
    onInit() {
        if (!this.firstEditorInitialized) {
            this.firstEditorInitialized = true;
            tryTriggerFunc(this.config.onFirstEditorInit)();
        }
        tryTriggerFunc(this.config.onInit)();
    }
    /**
     * @private
     * @return {?}
     */
    getLatestOption() {
        return Object.assign({}, this.option);
    }
}
NzCodeEditorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzCodeEditorService.ctorParameters = () => [
    { type: NzConfigService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NZ_CODE_EDITOR_CONFIG,] }, { type: Optional }] }
];
/** @nocollapse */ NzCodeEditorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzCodeEditorService_Factory() { return new NzCodeEditorService(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i3.NZ_CODE_EDITOR_CONFIG, 8)); }, token: NzCodeEditorService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29kZS1lZGl0b3IvIiwic291cmNlcyI6WyJuei1jb2RlLWVkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRixPQUFPLEVBR0wseUJBQXlCLEVBQ3pCLHFCQUFxQixFQUN0QixNQUFNLDhCQUE4QixDQUFDOzs7Ozs7TUFLaEMsd0JBQXdCLEdBQUcsWUFBWTs7Ozs7O0FBRzdDLFNBQVMsY0FBYyxDQUFDLEVBQTRCO0lBQ2xEOzs7O0lBQU8sQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1FBQ3hCLElBQUksRUFBRSxFQUFFO1lBQ04sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDYjtJQUNILENBQUMsRUFBQztBQUNKLENBQUM7O0FBTUQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBVTlCLFlBQ21CLGVBQWdDLEVBQy9CLFNBQWMsRUFBRSw2QkFBNkI7SUFDcEIsTUFBMkI7UUFGckQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVDNDLDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUMvQixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUNqQyxrQkFBYSxH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QUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVPLE1BQU07UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ2hDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7WUFDbkMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1NBQ2pEO1FBRUQsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVPLGVBQWU7UUFDckIseUJBQVksSUFBSSxDQUFDLE1BQU0sRUFBRztJQUM1QixDQUFDOzs7WUFwSUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBekIrQixlQUFlOzRDQXNDMUMsTUFBTSxTQUFDLFFBQVE7NENBQ2YsTUFBTSxTQUFDLHFCQUFxQixjQUFHLFFBQVE7Ozs7Ozs7O0lBWjFDLHVDQUEyQjs7Ozs7SUFDM0IscURBQXVDOzs7OztJQUN2QyxzQ0FBeUM7Ozs7O0lBQ3pDLDRDQUF5RDs7Ozs7SUFDekQscUNBQW9DOzs7OztJQUNwQyxxQ0FBbUM7O0lBRW5DLHNDQUFnRTs7Ozs7SUFHOUQsOENBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyB3YXJuLCB3YXJuRGVwcmVjYXRpb24sIE56Q29uZmlnU2VydmljZSwgUFJFRklYIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBKb2luZWRFZGl0b3JPcHRpb25zLFxyXG4gIE56Q29kZUVkaXRvckNvbmZpZyxcclxuICBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLFxyXG4gIE5aX0NPREVfRURJVE9SX0NPTkZJR1xyXG59IGZyb20gJy4vbnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMnO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG5kZWNsYXJlIGNvbnN0IG1vbmFjbzogYW55O1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2NvZGVFZGl0b3InO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUgbm8tYW55XHJcbmZ1bmN0aW9uIHRyeVRyaWdnZXJGdW5jKGZuPzogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpOiAoLi4uYXJnczogYW55KSA9PiB2b2lkIHtcclxuICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICBpZiAoZm4pIHtcclxuICAgICAgZm4oLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4vLyB0c2xpbnQ6ZW5hYmxlIG5vLWFueVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb2RlRWRpdG9yU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XHJcbiAgcHJpdmF0ZSBmaXJzdEVkaXRvckluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBsb2FkZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBwcml2YXRlIGxvYWRpbmdTdGF0dXMgPSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLlVOTE9BRDtcclxuICBwcml2YXRlIG9wdGlvbjogSm9pbmVkRWRpdG9yT3B0aW9ucztcclxuICBwcml2YXRlIGNvbmZpZzogTnpDb2RlRWRpdG9yQ29uZmlnO1xyXG5cclxuICBvcHRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxKb2luZWRFZGl0b3JPcHRpb25zPih0aGlzLm9wdGlvbik7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55LCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWFueVxyXG4gICAgQEluamVjdChOWl9DT0RFX0VESVRPUl9DT05GSUcpIEBPcHRpb25hbCgpIGNvbmZpZz86IE56Q29kZUVkaXRvckNvbmZpZ1xyXG4gICkge1xyXG4gICAgY29uc3QgZ2xvYmFsQ29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSk7XHJcblxyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCdOWl9DT0RFX0VESVRPUl9DT05GSUcnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1pbm9yIHZlcnNpb24uIFBsZWFzZSB1c2UgJ056Q29uZmlnU2VydmljZScgaW5zdGVhZC5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kb2N1bWVudCA9IF9kb2N1bWVudDtcclxuICAgIHRoaXMuY29uZmlnID0geyAuLi5jb25maWcsIC4uLmdsb2JhbENvbmZpZyB9O1xyXG4gICAgdGhpcy5vcHRpb24gPSB0aGlzLmNvbmZpZy5kZWZhdWx0RWRpdG9yT3B0aW9uIHx8IHt9O1xyXG5cclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3QgbmV3R2xvYmFsQ29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSk7XHJcbiAgICAgIGlmIChuZXdHbG9iYWxDb25maWcpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVEZWZhdWx0T3B0aW9uKG5ld0dsb2JhbENvbmZpZy5kZWZhdWx0RWRpdG9yT3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEZWZhdWx0T3B0aW9uKG9wdGlvbjogSm9pbmVkRWRpdG9yT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICBgJ3VwZGF0ZURlZmF1bHRPcHRpb24nIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1pbm9yIHZlcnNpb24uIFBsZWFzZSB1c2UgJ3NldCcgb2YgJ056Q29uZmlnU2VydmljZScgaW5zdGVhZC5gXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX3VwZGF0ZURlZmF1bHRPcHRpb24ob3B0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZURlZmF1bHRPcHRpb24ob3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbiA9IHsgLi4udGhpcy5vcHRpb24sIC4uLm9wdGlvbiB9O1xyXG4gICAgdGhpcy5vcHRpb24kLm5leHQodGhpcy5vcHRpb24pO1xyXG5cclxuICAgIGlmIChvcHRpb24udGhlbWUpIHtcclxuICAgICAgbW9uYWNvLmVkaXRvci5zZXRUaGVtZShvcHRpb24udGhlbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdFRvSW5pdCgpOiBPYnNlcnZhYmxlPEpvaW5lZEVkaXRvck9wdGlvbnM+IHtcclxuICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0dXMgPT09IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuTE9BREVEKSB7XHJcbiAgICAgIHRoaXMub25Jbml0KCk7XHJcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5nZXRMYXRlc3RPcHRpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5VTkxPQUQpIHtcclxuICAgICAgaWYgKHRoaXMuY29uZmlnLnVzZVN0YXRpY0xvYWRpbmcgJiYgdHlwZW9mIG1vbmFjbyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB3YXJuKFxyXG4gICAgICAgICAgJ1lvdSBjaG9vc2UgdG8gdXNlIHN0YXRpYyBsb2FkaW5nIGJ1dCBpdCBzZWVtcyB0aGF0IHlvdSBmb3JnZXQgJyArXHJcbiAgICAgICAgICAgICd0byBjb25maWcgd2VicGFjayBwbHVnaW4gY29ycmVjdGx5LiBQbGVhc2UgcmVmZXIgdG8gb3VyIG9mZmljaWFsIHdlYnNpdGUnICtcclxuICAgICAgICAgICAgJ2ZvciBtb3JlIGRldGFpbHMgYWJvdXQgc3RhdGljIGxvYWRpbmcuJ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTW9uYWNvU2NyaXB0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5sb2FkZWQkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB0aGlzLm9uSW5pdCgpKSxcclxuICAgICAgbWFwKCgpID0+IHRoaXMuZ2V0TGF0ZXN0T3B0aW9uKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkTW9uYWNvU2NyaXB0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLnVzZVN0YXRpY0xvYWRpbmcpIHtcclxuICAgICAgdGhpcy5vbkxvYWQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0dXMgPT09IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuTE9BRElORykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkaW5nU3RhdHVzID0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5MT0FESU5HO1xyXG5cclxuICAgIGNvbnN0IGFzc2V0c1Jvb3QgPSB0aGlzLmNvbmZpZy5hc3NldHNSb290O1xyXG4gICAgY29uc3QgdnMgPSBhc3NldHNSb290ID8gYCR7YXNzZXRzUm9vdH0vdnNgIDogJ2Fzc2V0cy92cyc7XHJcbiAgICBjb25zdCB3aW5kb3dBc0FueSA9IHdpbmRvdyBhcyBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tYW55XHJcbiAgICBjb25zdCBsb2FkU2NyaXB0ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcbiAgICBsb2FkU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgIGxvYWRTY3JpcHQuc3JjID0gYCR7dnN9L2xvYWRlci5qc2A7XHJcbiAgICBsb2FkU2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgd2luZG93QXNBbnkucmVxdWlyZS5jb25maWcoe1xyXG4gICAgICAgIHBhdGhzOiB7IHZzIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvd0FzQW55LnJlcXVpcmUoWyd2cy9lZGl0b3IvZWRpdG9yLm1haW4nXSwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25Mb2FkKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGxvYWRTY3JpcHQub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0gY2Fubm90IGxvYWQgYXNzZXRzIG9mIG1vbmFjbyBlZGl0b3IgZnJvbSBzb3VyY2UgXCIke3ZzfVwiLmApO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChsb2FkU2NyaXB0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nU3RhdHVzID0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5MT0FERUQ7XHJcbiAgICB0aGlzLmxvYWRlZCQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMubG9hZGVkJC5jb21wbGV0ZSgpO1xyXG5cclxuICAgIHRyeVRyaWdnZXJGdW5jKHRoaXMuY29uZmlnLm9uTG9hZCkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmZpcnN0RWRpdG9ySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5maXJzdEVkaXRvckluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgdHJ5VHJpZ2dlckZ1bmModGhpcy5jb25maWcub25GaXJzdEVkaXRvckluaXQpKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5VHJpZ2dlckZ1bmModGhpcy5jb25maWcub25Jbml0KSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRMYXRlc3RPcHRpb24oKTogSm9pbmVkRWRpdG9yT3B0aW9ucyB7XHJcbiAgICByZXR1cm4geyAuLi50aGlzLm9wdGlvbiB9O1xyXG4gIH1cclxufVxyXG4iXX0=