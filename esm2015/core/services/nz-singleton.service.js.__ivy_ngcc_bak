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
NzSingletonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ NzSingletonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzSingletonService_Factory() { return new NzSingletonService(); }, token: NzSingletonService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2luZ2xldG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1zaW5nbGV0b24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFFMUQsb0NBRUM7OztJQURDLHVDQUFZOzs7Ozs7O01BT1Isa0JBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQWlDOzs7OztBQVNuRSxNQUFNLE9BQU8sa0JBQWtCO0lBSC9COzs7Ozs7O1FBY1UsdUJBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQWlDLENBQUM7S0FvQnZFOzs7OztJQTlCQyxJQUFZLGlCQUFpQjtRQUMzQixPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDL0UsQ0FBQzs7Ozs7O0lBVUQsd0JBQXdCLENBQUMsR0FBVyxFQUFFLE1BQVc7O2NBQ3pDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7Y0FDN0MsSUFBSSxHQUEwQixXQUFXLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFFL0csSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFJLEdBQVc7UUFDaEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxNQUFNLEVBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDakcsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLE1BQVc7UUFDL0IsT0FBTztZQUNMLE1BQU07U0FDUCxDQUFDO0lBQ0osQ0FBQzs7O1lBakNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7Ozs7O0lBWUMsZ0RBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZSBuby1hbnlcclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuXHJcbmludGVyZmFjZSBTaW5nbGV0b25SZWdpc3RyeUl0ZW0ge1xyXG4gIHRhcmdldDogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogV2hlbiBydW5uaW5nIGluIHRlc3QsIHNpbmdsZXRvbnMgc2hvdWxkIG5vdCBiZSBkZXN0cm95ZWQuIFNvIHdlIGtlZXAgcmVmZXJlbmNlcyBvZiBzaW5nbGV0b25zXHJcbiAqIGluIHRoaXMgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gKi9cclxuY29uc3QgdGVzdFNpbmdsZVJlZ2lzdHJ5ID0gbmV3IE1hcDxzdHJpbmcsIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbT4oKTtcclxuXHJcbi8qKlxyXG4gKiBTb21lIHNpbmdsZXRvbnMgc2hvdWxkIGhhdmUgbGlmZSBjeWNsZSB0aGF0IGlzIHNhbWUgdG8gQW5ndWxhcidzLiBUaGlzIHNlcnZpY2UgbWFrZSBzdXJlIHRoYXRcclxuICogdGhvc2Ugc2luZ2xldG9ucyBnZXQgZGVzdHJveWVkIGluIEhNUi5cclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U2luZ2xldG9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBnZXQgc2luZ2xldG9uUmVnaXN0cnkoKTogTWFwPHN0cmluZywgU2luZ2xldG9uUmVnaXN0cnlJdGVtPiB7XHJcbiAgICByZXR1cm4gZW52aXJvbm1lbnQuaXNUZXN0TW9kZSA/IHRlc3RTaW5nbGVSZWdpc3RyeSA6IHRoaXMuX3NpbmdsZXRvblJlZ2lzdHJ5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyByZWdpc3RyeSBpcyB1c2VkIHRvIHJlZ2lzdGVyIHNpbmdsZXRvbiBpbiBkZXYgbW9kZS5cclxuICAgKiBTbyB0aGF0IHNpbmdsZXRvbnMgZ2V0IGRlc3Ryb3llZCB3aGVuIGhvdCBtb2R1bGUgcmVsb2FkIGhhcHBlbnMuXHJcbiAgICpcclxuICAgKiBUaGlzIHdvcmtzIGluIHByb2QgbW9kZSB0b28gYnV0IHdpdGggbm8gc3BlY2lmaWMgZWZmZWN0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NpbmdsZXRvblJlZ2lzdHJ5ID0gbmV3IE1hcDxzdHJpbmcsIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbT4oKTtcclxuXHJcbiAgcmVnaXN0ZXJTaW5nbGV0b25XaXRoS2V5KGtleTogc3RyaW5nLCB0YXJnZXQ6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgYWxyZWFkeUhhdmUgPSB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmhhcyhrZXkpO1xyXG4gICAgY29uc3QgaXRlbTogU2luZ2xldG9uUmVnaXN0cnlJdGVtID0gYWxyZWFkeUhhdmUgPyB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmdldChrZXkpISA6IHRoaXMud2l0aE5ld1RhcmdldCh0YXJnZXQpO1xyXG5cclxuICAgIGlmICghYWxyZWFkeUhhdmUpIHtcclxuICAgICAgdGhpcy5zaW5nbGV0b25SZWdpc3RyeS5zZXQoa2V5LCBpdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNpbmdsZXRvbldpdGhLZXk8VD4oa2V5OiBzdHJpbmcpOiBUIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zaW5nbGV0b25SZWdpc3RyeS5oYXMoa2V5KSA/ICh0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmdldChrZXkpIS50YXJnZXQgYXMgVCkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3aXRoTmV3VGFyZ2V0KHRhcmdldDogYW55KTogU2luZ2xldG9uUmVnaXN0cnlJdGVtIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRhcmdldFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19