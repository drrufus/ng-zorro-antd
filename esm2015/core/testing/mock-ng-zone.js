/**
 * @fileoverview added by tsickle
 * Generated from: testing/mock-ng-zone.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class MockNgZone extends NgZone {
    constructor() {
        super({ enableLongStackTrace: false });
        this.onStable = new EventEmitter(false);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    run(fn) {
        return fn();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    runOutsideAngular(fn) {
        return fn();
    }
    /**
     * @return {?}
     */
    simulateZoneExit() {
        this.onStable.emit(null);
    }
}
MockNgZone.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MockNgZone.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    MockNgZone.prototype.onStable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1uZy16b25lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy9tb2NrLW5nLXpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVVqRSxNQUFNLE9BQU8sVUFBVyxTQUFRLE1BQU07SUFHcEM7UUFDRSxLQUFLLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBSHpDLGFBQVEsR0FBc0IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFJdEQsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsRUFBWTtRQUNkLE9BQU8sRUFBRSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFsQkYsVUFBVTs7Ozs7O0lBRVQsOEJBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIE1vY2sgc3luY2hyb25vdXMgTmdab25lIGltcGxlbWVudGF0aW9uIHRoYXQgY2FuIGJlIHVzZWRcclxuICogdG8gZmx1c2ggb3V0IGBvblN0YWJsZWAgc3Vic2NyaXB0aW9ucyBpbiB0ZXN0cy5cclxuICpcclxuICogdmlhOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2NvcmUvdGVzdGluZy9zcmMvbmdfem9uZV9tb2NrLnRzXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vY2tOZ1pvbmUgZXh0ZW5kcyBOZ1pvbmUge1xyXG4gIG9uU3RhYmxlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHsgZW5hYmxlTG9uZ1N0YWNrVHJhY2U6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgcnVuKGZuOiBGdW5jdGlvbik6IGFueSB7XHJcbiAgICByZXR1cm4gZm4oKTtcclxuICB9XHJcblxyXG4gIHJ1bk91dHNpZGVBbmd1bGFyKGZuOiBGdW5jdGlvbik6IGFueSB7XHJcbiAgICByZXR1cm4gZm4oKTtcclxuICB9XHJcblxyXG4gIHNpbXVsYXRlWm9uZUV4aXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uU3RhYmxlLmVtaXQobnVsbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==