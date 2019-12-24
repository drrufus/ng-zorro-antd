import { __extends } from "tslib";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, Injectable, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Mock synchronous NgZone implementation that can be used
 * to flush out `onStable` subscriptions in tests.
 *
 * via: https://github.com/angular/angular/blob/master/packages/core/testing/src/ng_zone_mock.ts
 * @docs-private
 */
var MockNgZone = /** @class */ (function (_super) {
    __extends(MockNgZone, _super);
    function MockNgZone() {
        var _this = _super.call(this, { enableLongStackTrace: false }) || this;
        _this.onStable = new EventEmitter(false);
        return _this;
    }
    MockNgZone.prototype.run = function (fn) {
        return fn();
    };
    MockNgZone.prototype.runOutsideAngular = function (fn) {
        return fn();
    };
    MockNgZone.prototype.simulateZoneExit = function () {
        this.onStable.emit(null);
    };
    /** @nocollapse */ MockNgZone.ɵfac = function MockNgZone_Factory(t) { return new (t || MockNgZone)(); };
    /** @nocollapse */ MockNgZone.ɵprov = i0.ɵɵdefineInjectable({ token: MockNgZone, factory: MockNgZone.ɵfac });
    return MockNgZone;
}(NgZone));
export { MockNgZone };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MockNgZone, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1uZy16b25lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy9tb2NrLW5nLXpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFakU7Ozs7OztHQU1HO0FBQ0g7SUFDZ0MsOEJBQU07SUFHcEM7UUFBQSxZQUNFLGtCQUFNLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLENBQUMsU0FDdkM7UUFKRCxjQUFRLEdBQXNCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUl0RCxDQUFDO0lBRUQsd0JBQUcsR0FBSCxVQUFJLEVBQVk7UUFDZCxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNDQUFpQixHQUFqQixVQUFrQixFQUFZO1FBQzVCLE9BQU8sRUFBRSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQscUNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzt3RUFqQlUsVUFBVTtzREFBVixVQUFVLFdBQVYsVUFBVTtxQkFsQnZCO0NBb0NDLEFBbkJELENBQ2dDLE1BQU0sR0FrQnJDO1NBbEJZLFVBQVU7a0RBQVYsVUFBVTtjQUR0QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIE1vY2sgc3luY2hyb25vdXMgTmdab25lIGltcGxlbWVudGF0aW9uIHRoYXQgY2FuIGJlIHVzZWRcclxuICogdG8gZmx1c2ggb3V0IGBvblN0YWJsZWAgc3Vic2NyaXB0aW9ucyBpbiB0ZXN0cy5cclxuICpcclxuICogdmlhOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2NvcmUvdGVzdGluZy9zcmMvbmdfem9uZV9tb2NrLnRzXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vY2tOZ1pvbmUgZXh0ZW5kcyBOZ1pvbmUge1xyXG4gIG9uU3RhYmxlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHsgZW5hYmxlTG9uZ1N0YWNrVHJhY2U6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgcnVuKGZuOiBGdW5jdGlvbik6IGFueSB7XHJcbiAgICByZXR1cm4gZm4oKTtcclxuICB9XHJcblxyXG4gIHJ1bk91dHNpZGVBbmd1bGFyKGZuOiBGdW5jdGlvbik6IGFueSB7XHJcbiAgICByZXR1cm4gZm4oKTtcclxuICB9XHJcblxyXG4gIHNpbXVsYXRlWm9uZUV4aXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uU3RhYmxlLmVtaXQobnVsbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==