/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, Injectable, NgZone } from '@angular/core';
/**
 * Mock synchronous NgZone implementation that can be used
 * to flush out `onStable` subscriptions in tests.
 *
 * via: https://github.com/angular/angular/blob/master/packages/core/testing/src/ng_zone_mock.ts
 * \@docs-private
 */
import * as ɵngcc0 from '@angular/core';
var MockNgZone = /** @class */ (function (_super) {
    tslib_1.__extends(MockNgZone, _super);
    function MockNgZone() {
        var _this = _super.call(this, { enableLongStackTrace: false }) || this;
        _this.onStable = new EventEmitter(false);
        return _this;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    MockNgZone.prototype.run = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        return fn();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MockNgZone.prototype.runOutsideAngular = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        return fn();
    };
    /**
     * @return {?}
     */
    MockNgZone.prototype.simulateZoneExit = /**
     * @return {?}
     */
    function () {
        this.onStable.emit(null);
    };
    /** @nocollapse */
    MockNgZone.ctorParameters = function () { return []; };
MockNgZone.ɵfac = function MockNgZone_Factory(t) { return new (t || MockNgZone)(); };
MockNgZone.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: MockNgZone, factory: function (t) { return MockNgZone.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MockNgZone, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return MockNgZone;
}(NgZone));
export { MockNgZone };
if (false) {
    /** @type {?} */
    MockNgZone.prototype.onStable;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1uZy16b25lLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9jb3JlL3Rlc3RpbmcvbW9jay1uZy16b25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBU2pFO0lBQ2dDLHNDQUFNO0lBR3BDO1FBQUEsWUFDRSxrQkFBTSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxDQUFDLFNBQ3ZDO1FBSkQsY0FBUSxHQUFzQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFJdEQsQ0FBQzs7Ozs7SUFFRCx3QkFBRzs7OztJQUFILFVBQUksRUFBWTtRQUNkLE9BQU8sRUFBRSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELHNDQUFpQjs7OztJQUFqQixVQUFrQixFQUFZO1FBQzVCLE9BQU8sRUFBRSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQscUNBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQ0gsQUFsQk07O3VCQURMLFVBQVU7Ozs7O2dEQUVxQztJQWlCaEQsaUJBQUM7Q0FBQSxBQW5CRCxDQUNnQyxNQUFNLEdBa0JyQztTQWxCWSxVQUFVOzs7SUFDckIsOEJBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIE1vY2sgc3luY2hyb25vdXMgTmdab25lIGltcGxlbWVudGF0aW9uIHRoYXQgY2FuIGJlIHVzZWRcclxuICogdG8gZmx1c2ggb3V0IGBvblN0YWJsZWAgc3Vic2NyaXB0aW9ucyBpbiB0ZXN0cy5cclxuICpcclxuICogdmlhOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2NvcmUvdGVzdGluZy9zcmMvbmdfem9uZV9tb2NrLnRzXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vY2tOZ1pvbmUgZXh0ZW5kcyBOZ1pvbmUge1xyXG4gIG9uU3RhYmxlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHsgZW5hYmxlTG9uZ1N0YWNrVHJhY2U6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgcnVuKGZuOiBGdW5jdGlvbik6IGFueSB7XHJcbiAgICByZXR1cm4gZm4oKTtcclxuICB9XHJcblxyXG4gIHJ1bk91dHNpZGVBbmd1bGFyKGZuOiBGdW5jdGlvbik6IGFueSB7XHJcbiAgICByZXR1cm4gZm4oKTtcclxuICB9XHJcblxyXG4gIHNpbXVsYXRlWm9uZUV4aXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uU3RhYmxlLmVtaXQobnVsbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==