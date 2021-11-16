/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable no-any
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as i0 from "@angular/core";
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
function SingletonRegistryItem() { }
if (false) {
    /** @type {?} */
    SingletonRegistryItem.prototype.target;
}
/**
 * When running in test, singletons should not be destroyed. So we keep references of singletons
 * in this global variable.
 * @type {?}
 */
const testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
export class NzSingletonService {
    constructor() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    /**
     * @private
     * @return {?}
     */
    get singletonRegistry() {
        return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
    }
    /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    registerSingletonWithKey(key, target) {
        /** @type {?} */
        const alreadyHave = this.singletonRegistry.has(key);
        /** @type {?} */
        const item = alreadyHave ? (/** @type {?} */ (this.singletonRegistry.get(key))) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    getSingletonWithKey(key) {
        return this.singletonRegistry.has(key) ? ((/** @type {?} */ ((/** @type {?} */ (this.singletonRegistry.get(key))).target))) : null;
    }
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    withNewTarget(target) {
        return {
            target
        };
    }
}
NzSingletonService.ɵfac = function NzSingletonService_Factory(t) { return new (t || NzSingletonService)(); };
NzSingletonService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzSingletonService, factory: NzSingletonService.ɵfac, providedIn: 'root' });
/** @nocollapse */ NzSingletonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzSingletonService_Factory() { return new NzSingletonService(); }, token: NzSingletonService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSingletonService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {
    /**
     * This registry is used to register singleton in dev mode.
     * So that singletons get destroyed when hot module reload happens.
     *
     * This works in prod mode too but with no specific effect.
     * @type {?}
     * @private
     */
    NzSingletonService.prototype._singletonRegistry;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2luZ2xldG9uLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMvbnotc2luZ2xldG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7OztBQUUxRCxvQ0FFQzs7O0lBREMsdUNBQVk7Ozs7Ozs7TUFPUixrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBaUM7Ozs7O0FBU25FLE1BQU0sT0FBTyxrQkFBa0I7SUFIL0I7Ozs7Ozs7UUFjVSx1QkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztLQW9CdkU7Ozs7O0lBOUJDLElBQVksaUJBQWlCO1FBQzNCLE9BQU8sV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7SUFVRCx3QkFBd0IsQ0FBQyxHQUFXLEVBQUUsTUFBVzs7Y0FDekMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDOztjQUM3QyxJQUFJLEdBQTBCLFdBQVcsQ0FBQyxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUUvRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUksR0FBVztRQUNoQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLE1BQU0sRUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRyxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsTUFBVztRQUMvQixPQUFPO1lBQ0wsTUFBTTtTQUNQLENBQUM7SUFDSixDQUFDOzs7Q0FDRiwrQ0FsQ0EsVUFBVSxTQUFDLGtCQUNWLFVBQVUsRUFBRSxNQUFNLGNBQ25CLHFCQUNJOzs7Ozs7O2dEQU1nQjs7Ozs7Ozs7OztJQUtuQixnREFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIG5vLWFueVxyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5cclxuaW50ZXJmYWNlIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbSB7XHJcbiAgdGFyZ2V0OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXaGVuIHJ1bm5pbmcgaW4gdGVzdCwgc2luZ2xldG9ucyBzaG91bGQgbm90IGJlIGRlc3Ryb3llZC4gU28gd2Uga2VlcCByZWZlcmVuY2VzIG9mIHNpbmdsZXRvbnNcclxuICogaW4gdGhpcyBnbG9iYWwgdmFyaWFibGUuXHJcbiAqL1xyXG5jb25zdCB0ZXN0U2luZ2xlUmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZywgU2luZ2xldG9uUmVnaXN0cnlJdGVtPigpO1xyXG5cclxuLyoqXHJcbiAqIFNvbWUgc2luZ2xldG9ucyBzaG91bGQgaGF2ZSBsaWZlIGN5Y2xlIHRoYXQgaXMgc2FtZSB0byBBbmd1bGFyJ3MuIFRoaXMgc2VydmljZSBtYWtlIHN1cmUgdGhhdFxyXG4gKiB0aG9zZSBzaW5nbGV0b25zIGdldCBkZXN0cm95ZWQgaW4gSE1SLlxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTaW5nbGV0b25TZXJ2aWNlIHtcclxuICBwcml2YXRlIGdldCBzaW5nbGV0b25SZWdpc3RyeSgpOiBNYXA8c3RyaW5nLCBTaW5nbGV0b25SZWdpc3RyeUl0ZW0+IHtcclxuICAgIHJldHVybiBlbnZpcm9ubWVudC5pc1Rlc3RNb2RlID8gdGVzdFNpbmdsZVJlZ2lzdHJ5IDogdGhpcy5fc2luZ2xldG9uUmVnaXN0cnk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIHJlZ2lzdHJ5IGlzIHVzZWQgdG8gcmVnaXN0ZXIgc2luZ2xldG9uIGluIGRldiBtb2RlLlxyXG4gICAqIFNvIHRoYXQgc2luZ2xldG9ucyBnZXQgZGVzdHJveWVkIHdoZW4gaG90IG1vZHVsZSByZWxvYWQgaGFwcGVucy5cclxuICAgKlxyXG4gICAqIFRoaXMgd29ya3MgaW4gcHJvZCBtb2RlIHRvbyBidXQgd2l0aCBubyBzcGVjaWZpYyBlZmZlY3QuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc2luZ2xldG9uUmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZywgU2luZ2xldG9uUmVnaXN0cnlJdGVtPigpO1xyXG5cclxuICByZWdpc3RlclNpbmdsZXRvbldpdGhLZXkoa2V5OiBzdHJpbmcsIHRhcmdldDogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBhbHJlYWR5SGF2ZSA9IHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuaGFzKGtleSk7XHJcbiAgICBjb25zdCBpdGVtOiBTaW5nbGV0b25SZWdpc3RyeUl0ZW0gPSBhbHJlYWR5SGF2ZSA/IHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuZ2V0KGtleSkhIDogdGhpcy53aXRoTmV3VGFyZ2V0KHRhcmdldCk7XHJcblxyXG4gICAgaWYgKCFhbHJlYWR5SGF2ZSkge1xyXG4gICAgICB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LnNldChrZXksIGl0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xldG9uV2l0aEtleTxUPihrZXk6IHN0cmluZyk6IFQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmhhcyhrZXkpID8gKHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuZ2V0KGtleSkhLnRhcmdldCBhcyBUKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHdpdGhOZXdUYXJnZXQodGFyZ2V0OiBhbnkpOiBTaW5nbGV0b25SZWdpc3RyeUl0ZW0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGFyZ2V0XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=