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
 * When running in test, singletons should not be destroyed. So we keep references of singletons
 * in this global variable.
 */
var testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
var NzSingletonService = /** @class */ (function () {
    function NzSingletonService() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    Object.defineProperty(NzSingletonService.prototype, "singletonRegistry", {
        get: function () {
            return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
        },
        enumerable: true,
        configurable: true
    });
    NzSingletonService.prototype.registerSingletonWithKey = function (key, target) {
        var alreadyHave = this.singletonRegistry.has(key);
        var item = alreadyHave ? this.singletonRegistry.get(key) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    };
    NzSingletonService.prototype.getSingletonWithKey = function (key) {
        return this.singletonRegistry.has(key) ? this.singletonRegistry.get(key).target : null;
    };
    NzSingletonService.prototype.withNewTarget = function (target) {
        return {
            target: target
        };
    };
    /** @nocollapse */ NzSingletonService.ɵfac = function NzSingletonService_Factory(t) { return new (t || NzSingletonService)(); };
    /** @nocollapse */ NzSingletonService.ɵprov = i0.ɵɵdefineInjectable({ token: NzSingletonService, factory: NzSingletonService.ɵfac, providedIn: 'root' });
    return NzSingletonService;
}());
export { NzSingletonService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSingletonService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2luZ2xldG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1zaW5nbGV0b24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCx3QkFBd0I7QUFFeEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBTTFEOzs7R0FHRztBQUNILElBQU0sa0JBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQWlDLENBQUM7QUFFcEU7OztHQUdHO0FBQ0g7SUFBQTtRQVFFOzs7OztXQUtHO1FBQ0ssdUJBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQWlDLENBQUM7S0FvQnZFO0lBOUJDLHNCQUFZLGlEQUFpQjthQUE3QjtZQUNFLE9BQU8sV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUMvRSxDQUFDOzs7T0FBQTtJQVVELHFEQUF3QixHQUF4QixVQUF5QixHQUFXLEVBQUUsTUFBVztRQUMvQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELElBQU0sSUFBSSxHQUEwQixXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEgsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxnREFBbUIsR0FBbkIsVUFBdUIsR0FBVztRQUNoQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUMsTUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDakcsQ0FBQztJQUVPLDBDQUFhLEdBQXJCLFVBQXNCLE1BQVc7UUFDL0IsT0FBTztZQUNMLE1BQU0sUUFBQTtTQUNQLENBQUM7SUFDSixDQUFDO3dGQTlCVSxrQkFBa0I7OERBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmpCLE1BQU07NkJBN0JwQjtDQThEQyxBQWxDRCxJQWtDQztTQS9CWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIG5vLWFueVxyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5cclxuaW50ZXJmYWNlIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbSB7XHJcbiAgdGFyZ2V0OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXaGVuIHJ1bm5pbmcgaW4gdGVzdCwgc2luZ2xldG9ucyBzaG91bGQgbm90IGJlIGRlc3Ryb3llZC4gU28gd2Uga2VlcCByZWZlcmVuY2VzIG9mIHNpbmdsZXRvbnNcclxuICogaW4gdGhpcyBnbG9iYWwgdmFyaWFibGUuXHJcbiAqL1xyXG5jb25zdCB0ZXN0U2luZ2xlUmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZywgU2luZ2xldG9uUmVnaXN0cnlJdGVtPigpO1xyXG5cclxuLyoqXHJcbiAqIFNvbWUgc2luZ2xldG9ucyBzaG91bGQgaGF2ZSBsaWZlIGN5Y2xlIHRoYXQgaXMgc2FtZSB0byBBbmd1bGFyJ3MuIFRoaXMgc2VydmljZSBtYWtlIHN1cmUgdGhhdFxyXG4gKiB0aG9zZSBzaW5nbGV0b25zIGdldCBkZXN0cm95ZWQgaW4gSE1SLlxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTaW5nbGV0b25TZXJ2aWNlIHtcclxuICBwcml2YXRlIGdldCBzaW5nbGV0b25SZWdpc3RyeSgpOiBNYXA8c3RyaW5nLCBTaW5nbGV0b25SZWdpc3RyeUl0ZW0+IHtcclxuICAgIHJldHVybiBlbnZpcm9ubWVudC5pc1Rlc3RNb2RlID8gdGVzdFNpbmdsZVJlZ2lzdHJ5IDogdGhpcy5fc2luZ2xldG9uUmVnaXN0cnk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIHJlZ2lzdHJ5IGlzIHVzZWQgdG8gcmVnaXN0ZXIgc2luZ2xldG9uIGluIGRldiBtb2RlLlxyXG4gICAqIFNvIHRoYXQgc2luZ2xldG9ucyBnZXQgZGVzdHJveWVkIHdoZW4gaG90IG1vZHVsZSByZWxvYWQgaGFwcGVucy5cclxuICAgKlxyXG4gICAqIFRoaXMgd29ya3MgaW4gcHJvZCBtb2RlIHRvbyBidXQgd2l0aCBubyBzcGVjaWZpYyBlZmZlY3QuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc2luZ2xldG9uUmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZywgU2luZ2xldG9uUmVnaXN0cnlJdGVtPigpO1xyXG5cclxuICByZWdpc3RlclNpbmdsZXRvbldpdGhLZXkoa2V5OiBzdHJpbmcsIHRhcmdldDogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBhbHJlYWR5SGF2ZSA9IHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuaGFzKGtleSk7XHJcbiAgICBjb25zdCBpdGVtOiBTaW5nbGV0b25SZWdpc3RyeUl0ZW0gPSBhbHJlYWR5SGF2ZSA/IHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuZ2V0KGtleSkhIDogdGhpcy53aXRoTmV3VGFyZ2V0KHRhcmdldCk7XHJcblxyXG4gICAgaWYgKCFhbHJlYWR5SGF2ZSkge1xyXG4gICAgICB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LnNldChrZXksIGl0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xldG9uV2l0aEtleTxUPihrZXk6IHN0cmluZyk6IFQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmhhcyhrZXkpID8gKHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuZ2V0KGtleSkhLnRhcmdldCBhcyBUKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHdpdGhOZXdUYXJnZXQodGFyZ2V0OiBhbnkpOiBTaW5nbGV0b25SZWdpc3RyeUl0ZW0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGFyZ2V0XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=