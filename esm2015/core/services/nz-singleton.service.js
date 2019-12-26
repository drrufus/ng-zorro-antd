/**
 * @fileoverview added by tsickle
 * Generated from: services/nz-singleton.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2luZ2xldG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1zaW5nbGV0b24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBRTFELG9DQUVDOzs7SUFEQyx1Q0FBWTs7Ozs7OztNQU9SLGtCQUFrQixHQUFHLElBQUksR0FBRyxFQUFpQzs7Ozs7QUFTbkUsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjs7Ozs7OztRQWNVLHVCQUFrQixHQUFHLElBQUksR0FBRyxFQUFpQyxDQUFDO0tBb0J2RTs7Ozs7SUE5QkMsSUFBWSxpQkFBaUI7UUFDM0IsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQy9FLENBQUM7Ozs7OztJQVVELHdCQUF3QixDQUFDLEdBQVcsRUFBRSxNQUFXOztjQUN6QyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7O2NBQzdDLElBQUksR0FBMEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBRS9HLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBSSxHQUFXO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsTUFBTSxFQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pHLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxNQUFXO1FBQy9CLE9BQU87WUFDTCxNQUFNO1NBQ1AsQ0FBQztJQUNKLENBQUM7OztZQWpDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7OztJQVlDLGdEQUFzRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUgbm8tYW55XHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcblxyXG5pbnRlcmZhY2UgU2luZ2xldG9uUmVnaXN0cnlJdGVtIHtcclxuICB0YXJnZXQ6IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdoZW4gcnVubmluZyBpbiB0ZXN0LCBzaW5nbGV0b25zIHNob3VsZCBub3QgYmUgZGVzdHJveWVkLiBTbyB3ZSBrZWVwIHJlZmVyZW5jZXMgb2Ygc2luZ2xldG9uc1xyXG4gKiBpbiB0aGlzIGdsb2JhbCB2YXJpYWJsZS5cclxuICovXHJcbmNvbnN0IHRlc3RTaW5nbGVSZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBTaW5nbGV0b25SZWdpc3RyeUl0ZW0+KCk7XHJcblxyXG4vKipcclxuICogU29tZSBzaW5nbGV0b25zIHNob3VsZCBoYXZlIGxpZmUgY3ljbGUgdGhhdCBpcyBzYW1lIHRvIEFuZ3VsYXIncy4gVGhpcyBzZXJ2aWNlIG1ha2Ugc3VyZSB0aGF0XHJcbiAqIHRob3NlIHNpbmdsZXRvbnMgZ2V0IGRlc3Ryb3llZCBpbiBITVIuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNpbmdsZXRvblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZ2V0IHNpbmdsZXRvblJlZ2lzdHJ5KCk6IE1hcDxzdHJpbmcsIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbT4ge1xyXG4gICAgcmV0dXJuIGVudmlyb25tZW50LmlzVGVzdE1vZGUgPyB0ZXN0U2luZ2xlUmVnaXN0cnkgOiB0aGlzLl9zaW5nbGV0b25SZWdpc3RyeTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgcmVnaXN0cnkgaXMgdXNlZCB0byByZWdpc3RlciBzaW5nbGV0b24gaW4gZGV2IG1vZGUuXHJcbiAgICogU28gdGhhdCBzaW5nbGV0b25zIGdldCBkZXN0cm95ZWQgd2hlbiBob3QgbW9kdWxlIHJlbG9hZCBoYXBwZW5zLlxyXG4gICAqXHJcbiAgICogVGhpcyB3b3JrcyBpbiBwcm9kIG1vZGUgdG9vIGJ1dCB3aXRoIG5vIHNwZWNpZmljIGVmZmVjdC5cclxuICAgKi9cclxuICBwcml2YXRlIF9zaW5nbGV0b25SZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBTaW5nbGV0b25SZWdpc3RyeUl0ZW0+KCk7XHJcblxyXG4gIHJlZ2lzdGVyU2luZ2xldG9uV2l0aEtleShrZXk6IHN0cmluZywgdGFyZ2V0OiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGFscmVhZHlIYXZlID0gdGhpcy5zaW5nbGV0b25SZWdpc3RyeS5oYXMoa2V5KTtcclxuICAgIGNvbnN0IGl0ZW06IFNpbmdsZXRvblJlZ2lzdHJ5SXRlbSA9IGFscmVhZHlIYXZlID8gdGhpcy5zaW5nbGV0b25SZWdpc3RyeS5nZXQoa2V5KSEgOiB0aGlzLndpdGhOZXdUYXJnZXQodGFyZ2V0KTtcclxuXHJcbiAgICBpZiAoIWFscmVhZHlIYXZlKSB7XHJcbiAgICAgIHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuc2V0KGtleSwgaXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTaW5nbGV0b25XaXRoS2V5PFQ+KGtleTogc3RyaW5nKTogVCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuaGFzKGtleSkgPyAodGhpcy5zaW5nbGV0b25SZWdpc3RyeS5nZXQoa2V5KSEudGFyZ2V0IGFzIFQpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2l0aE5ld1RhcmdldCh0YXJnZXQ6IGFueSk6IFNpbmdsZXRvblJlZ2lzdHJ5SXRlbSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0YXJnZXRcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==