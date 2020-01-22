/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1uZy16b25lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy9tb2NrLW5nLXpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBVWpFLE1BQU0sT0FBTyxVQUFXLFNBQVEsTUFBTTtJQUdwQztRQUNFLEtBQUssQ0FBQyxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFIekMsYUFBUSxHQUFzQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUl0RCxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxFQUFZO1FBQ2QsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixPQUFPLEVBQUUsRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQWxCRixVQUFVOzs7Ozs7SUFFVCw4QkFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogTW9jayBzeW5jaHJvbm91cyBOZ1pvbmUgaW1wbGVtZW50YXRpb24gdGhhdCBjYW4gYmUgdXNlZFxyXG4gKiB0byBmbHVzaCBvdXQgYG9uU3RhYmxlYCBzdWJzY3JpcHRpb25zIGluIHRlc3RzLlxyXG4gKlxyXG4gKiB2aWE6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi9tYXN0ZXIvcGFja2FnZXMvY29yZS90ZXN0aW5nL3NyYy9uZ196b25lX21vY2sudHNcclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9ja05nWm9uZSBleHRlbmRzIE5nWm9uZSB7XHJcbiAgb25TdGFibGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoeyBlbmFibGVMb25nU3RhY2tUcmFjZTogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBydW4oZm46IEZ1bmN0aW9uKTogYW55IHtcclxuICAgIHJldHVybiBmbigpO1xyXG4gIH1cclxuXHJcbiAgcnVuT3V0c2lkZUFuZ3VsYXIoZm46IEZ1bmN0aW9uKTogYW55IHtcclxuICAgIHJldHVybiBmbigpO1xyXG4gIH1cclxuXHJcbiAgc2ltdWxhdGVab25lRXhpdCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25TdGFibGUuZW1pdChudWxsKTtcclxuICB9XHJcbn1cclxuIl19