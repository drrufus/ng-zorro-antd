/**
 * @fileoverview added by tsickle
 * Generated from: testing/mock-ng-zone.ts
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
    MockNgZone.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MockNgZone.ctorParameters = function () { return []; };
    return MockNgZone;
}(NgZone));
export { MockNgZone };
if (false) {
    /** @type {?} */
    MockNgZone.prototype.onStable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1uZy16b25lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy9tb2NrLW5nLXpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFTakU7SUFDZ0Msc0NBQU07SUFHcEM7UUFBQSxZQUNFLGtCQUFNLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLENBQUMsU0FDdkM7UUFKRCxjQUFRLEdBQXNCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUl0RCxDQUFDOzs7OztJQUVELHdCQUFHOzs7O0lBQUgsVUFBSSxFQUFZO1FBQ2QsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsc0NBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQVk7UUFDNUIsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxxQ0FBZ0I7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQWxCRixVQUFVOzs7O0lBbUJYLGlCQUFDO0NBQUEsQUFuQkQsQ0FDZ0MsTUFBTSxHQWtCckM7U0FsQlksVUFBVTs7O0lBQ3JCLDhCQUFzRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBNb2NrIHN5bmNocm9ub3VzIE5nWm9uZSBpbXBsZW1lbnRhdGlvbiB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqIHRvIGZsdXNoIG91dCBgb25TdGFibGVgIHN1YnNjcmlwdGlvbnMgaW4gdGVzdHMuXHJcbiAqXHJcbiAqIHZpYTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iL21hc3Rlci9wYWNrYWdlcy9jb3JlL3Rlc3Rpbmcvc3JjL25nX3pvbmVfbW9jay50c1xyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNb2NrTmdab25lIGV4dGVuZHMgTmdab25lIHtcclxuICBvblN0YWJsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGVuYWJsZUxvbmdTdGFja1RyYWNlOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIHJ1bihmbjogRnVuY3Rpb24pOiBhbnkge1xyXG4gICAgcmV0dXJuIGZuKCk7XHJcbiAgfVxyXG5cclxuICBydW5PdXRzaWRlQW5ndWxhcihmbjogRnVuY3Rpb24pOiBhbnkge1xyXG4gICAgcmV0dXJuIGZuKCk7XHJcbiAgfVxyXG5cclxuICBzaW11bGF0ZVpvbmVFeGl0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblN0YWJsZS5lbWl0KG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=