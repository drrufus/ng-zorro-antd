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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL2Jhc2Utc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7OztJQXNCRSxnQ0FDRSxpQkFBOEMsRUFDcEMsR0FBc0IsRUFDdEIsUUFBbUI7UUFEbkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUU3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7SUFDN0MsQ0FBQztJQWxCRCxzQkFBYyw0Q0FBUTs7Ozs7UUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQWMsMkNBQU87Ozs7O1FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELHNCQUFjLDBDQUFNOzs7OztRQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBVUQ7OztPQUdHOzs7Ozs7SUFDSCxxREFBb0I7Ozs7O0lBQXBCLFVBQXFCLFFBQXNEOzs7WUFFbkUsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQzs7WUFDbEMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUU7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7SUFPRDs7O09BR0c7Ozs7Ozs7SUFDSCx5Q0FBUTs7Ozs7O0lBQVIsVUFBUyxPQUFzQixJQUFTLENBQUM7SUFFekM7O09BRUc7Ozs7O0lBQ0gsd0NBQU87Ozs7SUFBUCxjQUFpQixDQUFDOzs7Ozs7O0lBRVIsb0RBQW1COzs7Ozs7SUFBN0IsVUFBOEIsQ0FBUyxFQUFFLENBQVM7O1lBQzFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7UUFDaEMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUM7Ozs7Ozs7Ozs7SUFoRUMsbURBQWdFOzs7OztJQUNoRSwwQ0FBaUQ7Ozs7O0lBQ2pELDZDQUFtQzs7Ozs7SUFDbkMsOENBQW9DOzs7OztJQUNwQyx3Q0FBeUI7Ozs7O0lBQ3pCLDJDQUE0Qjs7Ozs7SUFDNUIsNENBQTZCOzs7OztJQWdCM0IscUNBQWdDOzs7OztJQUNoQywwQ0FBNkI7Ozs7Ozs7O0lBd0IvQixnRUFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBRdWVyeUxpc3QsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uL256LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRnJvbVRvSW50ZXJmYWNlLCBOekNhcm91c2VsQ29tcG9uZW50QXNTb3VyY2UsIFBvaW50ZXJWZWN0b3IgfSBmcm9tICcuLi9uei1jYXJvdXNlbC1kZWZpbml0aW9ucyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB7XHJcbiAgLy8gUHJvcGVydGllcyB0aGF0IHN0cmF0ZWdpZXMgbWF5IHdhbnQgdG8gdXNlLlxyXG4gIHByb3RlY3RlZCBjYXJvdXNlbENvbXBvbmVudDogTnpDYXJvdXNlbENvbXBvbmVudEFzU291cmNlIHwgbnVsbDtcclxuICBwcm90ZWN0ZWQgY29udGVudHM6IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlW107XHJcbiAgcHJvdGVjdGVkIHNsaWNrTGlzdEVsOiBIVE1MRWxlbWVudDtcclxuICBwcm90ZWN0ZWQgc2xpY2tUcmFja0VsOiBIVE1MRWxlbWVudDtcclxuICBwcm90ZWN0ZWQgbGVuZ3RoOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIHVuaXRXaWR0aDogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCB1bml0SGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgbWF4SW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmxlbmd0aCAtIDE7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IGZpcnN0RWwoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudHNbMF0uZWw7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IGxhc3RFbCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50c1t0aGlzLm1heEluZGV4XS5lbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2Fyb3VzZWxDb21wb25lbnQ6IE56Q2Fyb3VzZWxDb21wb25lbnRBc1NvdXJjZSxcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHRoaXMuY2Fyb3VzZWxDb21wb25lbnQgPSBjYXJvdXNlbENvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgZHJhZ2dpbmcgc2VxdWVuY2VzLlxyXG4gICAqIEBwYXJhbSBjb250ZW50c1xyXG4gICAqL1xyXG4gIHdpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+IHwgbnVsbCk6IHZvaWQge1xyXG4gICAgLy8gVE9ETzogY2Fyb3VzZWwgYW5kIGl0cyBjb250ZW50cyBzaG91bGQgYmUgc2VwYXJhdGVkLlxyXG4gICAgY29uc3QgY2Fyb3VzZWwgPSB0aGlzLmNhcm91c2VsQ29tcG9uZW50ITtcclxuICAgIGNvbnN0IHJlY3QgPSBjYXJvdXNlbC5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHRoaXMuc2xpY2tMaXN0RWwgPSBjYXJvdXNlbC5zbGlja0xpc3RFbDtcclxuICAgIHRoaXMuc2xpY2tUcmFja0VsID0gY2Fyb3VzZWwuc2xpY2tUcmFja0VsO1xyXG4gICAgdGhpcy51bml0V2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgdGhpcy51bml0SGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHMgPyBjb250ZW50cy50b0FycmF5KCkgOiBbXTtcclxuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5jb250ZW50cy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIHRyYW5zaXRpb24uXHJcbiAgICovXHJcbiAgYWJzdHJhY3Qgc3dpdGNoKF9mOiBudW1iZXIsIF90OiBudW1iZXIpOiBPYnNlcnZhYmxlPHZvaWQ+O1xyXG5cclxuICAvKipcclxuICAgKiBXaGVuIHVzZXIgZHJhZyB0aGUgY2Fyb3VzZWwgY29tcG9uZW50LlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqL1xyXG4gIGRyYWdnaW5nKF92ZWN0b3I6IFBvaW50ZXJWZWN0b3IpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3kgYSBzY3JvbGwgc3RyYXRlZ3kuXHJcbiAgICovXHJcbiAgZGlzcG9zZSgpOiB2b2lkIHt9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRGcm9tVG9JbkJvdW5kYXJ5KGY6IG51bWJlciwgdDogbnVtYmVyKTogRnJvbVRvSW50ZXJmYWNlIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubWF4SW5kZXggKyAxO1xyXG4gICAgcmV0dXJuIHsgZnJvbTogKGYgKyBsZW5ndGgpICUgbGVuZ3RoLCB0bzogKHQgKyBsZW5ndGgpICUgbGVuZ3RoIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==