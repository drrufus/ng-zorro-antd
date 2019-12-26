/**
 * @fileoverview added by tsickle
 * Generated from: strategies/base-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
NzCarouselBaseStrategy = /** @class */ (function () {
    function NzCarouselBaseStrategy(carouselComponent, cdr, renderer) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.carouselComponent = carouselComponent;
    }
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "maxIndex", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "firstEl", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.contents[0].el;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "lastEl", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.contents[this.maxIndex].el;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize dragging sequences.
     * @param contents
     */
    /**
     * Initialize dragging sequences.
     * @param {?} contents
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.withCarouselContents = /**
     * Initialize dragging sequences.
     * @param {?} contents
     * @return {?}
     */
    function (contents) {
        // TODO: carousel and its contents should be separated.
        /** @type {?} */
        var carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        var rect = carousel.el.getBoundingClientRect();
        this.slickListEl = carousel.slickListEl;
        this.slickTrackEl = carousel.slickTrackEl;
        this.unitWidth = rect.width;
        this.unitHeight = rect.height;
        this.contents = contents ? contents.toArray() : [];
        this.length = this.contents.length;
    };
    /**
     * When user drag the carousel component.
     * @optional
     */
    /**
     * When user drag the carousel component.
     * \@optional
     * @param {?} _vector
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.dragging = /**
     * When user drag the carousel component.
     * \@optional
     * @param {?} _vector
     * @return {?}
     */
    function (_vector) { };
    /**
     * Destroy a scroll strategy.
     */
    /**
     * Destroy a scroll strategy.
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.dispose = /**
     * Destroy a scroll strategy.
     * @return {?}
     */
    function () { };
    /**
     * @protected
     * @param {?} f
     * @param {?} t
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.getFromToInBoundary = /**
     * @protected
     * @param {?} f
     * @param {?} t
     * @return {?}
     */
    function (f, t) {
        /** @type {?} */
        var length = this.maxIndex + 1;
        return { from: (f + length) % length, to: (t + length) % length };
    };
    return NzCarouselBaseStrategy;
}());
/**
 * @abstract
 */
export { NzCarouselBaseStrategy };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.carouselComponent;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.contents;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.slickListEl;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.slickTrackEl;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.length;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.unitWidth;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.unitHeight;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.renderer;
    /**
     * Trigger transition.
     * @abstract
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.switch = function (_f, _t) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL2Jhc2Utc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7SUFzQkUsZ0NBQ0UsaUJBQThDLEVBQ3BDLEdBQXNCLEVBQ3RCLFFBQW1CO1FBRG5CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFFN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQzdDLENBQUM7SUFsQkQsc0JBQWMsNENBQVE7Ozs7O1FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFjLDJDQUFPOzs7OztRQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYywwQ0FBTTs7Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQVVEOzs7T0FHRzs7Ozs7O0lBQ0gscURBQW9COzs7OztJQUFwQixVQUFxQixRQUFzRDs7O1lBRW5FLFFBQVEsR0FBRyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLEVBQUM7O1lBQ2xDLElBQUksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDO0lBT0Q7OztPQUdHOzs7Ozs7O0lBQ0gseUNBQVE7Ozs7OztJQUFSLFVBQVMsT0FBc0IsSUFBUyxDQUFDO0lBRXpDOztPQUVHOzs7OztJQUNILHdDQUFPOzs7O0lBQVAsY0FBaUIsQ0FBQzs7Ozs7OztJQUVSLG9EQUFtQjs7Ozs7O0lBQTdCLFVBQThCLENBQVMsRUFBRSxDQUFTOztZQUMxQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBQ2hDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBbEVELElBa0VDOzs7Ozs7Ozs7O0lBaEVDLG1EQUFnRTs7Ozs7SUFDaEUsMENBQWlEOzs7OztJQUNqRCw2Q0FBbUM7Ozs7O0lBQ25DLDhDQUFvQzs7Ozs7SUFDcEMsd0NBQXlCOzs7OztJQUN6QiwyQ0FBNEI7Ozs7O0lBQzVCLDRDQUE2Qjs7Ozs7SUFnQjNCLHFDQUFnQzs7Ozs7SUFDaEMsMENBQTZCOzs7Ozs7OztJQXdCL0IsZ0VBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgUXVlcnlMaXN0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi9uei1jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZyb21Ub0ludGVyZmFjZSwgTnpDYXJvdXNlbENvbXBvbmVudEFzU291cmNlLCBQb2ludGVyVmVjdG9yIH0gZnJvbSAnLi4vbnotY2Fyb3VzZWwtZGVmaW5pdGlvbnMnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kge1xyXG4gIC8vIFByb3BlcnRpZXMgdGhhdCBzdHJhdGVnaWVzIG1heSB3YW50IHRvIHVzZS5cclxuICBwcm90ZWN0ZWQgY2Fyb3VzZWxDb21wb25lbnQ6IE56Q2Fyb3VzZWxDb21wb25lbnRBc1NvdXJjZSB8IG51bGw7XHJcbiAgcHJvdGVjdGVkIGNvbnRlbnRzOiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZVtdO1xyXG4gIHByb3RlY3RlZCBzbGlja0xpc3RFbDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJvdGVjdGVkIHNsaWNrVHJhY2tFbDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJvdGVjdGVkIGxlbmd0aDogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCB1bml0V2lkdGg6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgdW5pdEhlaWdodDogbnVtYmVyO1xyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IG1heEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggLSAxO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBmaXJzdEVsKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzWzBdLmVsO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBsYXN0RWwoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudHNbdGhpcy5tYXhJbmRleF0uZWw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNhcm91c2VsQ29tcG9uZW50OiBOekNhcm91c2VsQ29tcG9uZW50QXNTb3VyY2UsXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNhcm91c2VsQ29tcG9uZW50ID0gY2Fyb3VzZWxDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGRyYWdnaW5nIHNlcXVlbmNlcy5cclxuICAgKiBAcGFyYW0gY29udGVudHNcclxuICAgKi9cclxuICB3aXRoQ2Fyb3VzZWxDb250ZW50cyhjb250ZW50czogUXVlcnlMaXN0PE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlPiB8IG51bGwpOiB2b2lkIHtcclxuICAgIC8vIFRPRE86IGNhcm91c2VsIGFuZCBpdHMgY29udGVudHMgc2hvdWxkIGJlIHNlcGFyYXRlZC5cclxuICAgIGNvbnN0IGNhcm91c2VsID0gdGhpcy5jYXJvdXNlbENvbXBvbmVudCE7XHJcbiAgICBjb25zdCByZWN0ID0gY2Fyb3VzZWwuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB0aGlzLnNsaWNrTGlzdEVsID0gY2Fyb3VzZWwuc2xpY2tMaXN0RWw7XHJcbiAgICB0aGlzLnNsaWNrVHJhY2tFbCA9IGNhcm91c2VsLnNsaWNrVHJhY2tFbDtcclxuICAgIHRoaXMudW5pdFdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgIHRoaXMudW5pdEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzID8gY29udGVudHMudG9BcnJheSgpIDogW107XHJcbiAgICB0aGlzLmxlbmd0aCA9IHRoaXMuY29udGVudHMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciB0cmFuc2l0aW9uLlxyXG4gICAqL1xyXG4gIGFic3RyYWN0IHN3aXRjaChfZjogbnVtYmVyLCBfdDogbnVtYmVyKTogT2JzZXJ2YWJsZTx2b2lkPjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiB1c2VyIGRyYWcgdGhlIGNhcm91c2VsIGNvbXBvbmVudC5cclxuICAgKiBAb3B0aW9uYWxcclxuICAgKi9cclxuICBkcmFnZ2luZyhfdmVjdG9yOiBQb2ludGVyVmVjdG9yKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95IGEgc2Nyb2xsIHN0cmF0ZWd5LlxyXG4gICAqL1xyXG4gIGRpc3Bvc2UoKTogdm9pZCB7fVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0RnJvbVRvSW5Cb3VuZGFyeShmOiBudW1iZXIsIHQ6IG51bWJlcik6IEZyb21Ub0ludGVyZmFjZSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLm1heEluZGV4ICsgMTtcclxuICAgIHJldHVybiB7IGZyb206IChmICsgbGVuZ3RoKSAlIGxlbmd0aCwgdG86ICh0ICsgbGVuZ3RoKSAlIGxlbmd0aCB9O1xyXG4gIH1cclxufVxyXG4iXX0=