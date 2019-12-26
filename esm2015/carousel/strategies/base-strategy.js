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
export class NzCarouselBaseStrategy {
    /**
     * @param {?} carouselComponent
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(carouselComponent, cdr, renderer) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.carouselComponent = carouselComponent;
    }
    /**
     * @protected
     * @return {?}
     */
    get maxIndex() {
        return this.length - 1;
    }
    /**
     * @protected
     * @return {?}
     */
    get firstEl() {
        return this.contents[0].el;
    }
    /**
     * @protected
     * @return {?}
     */
    get lastEl() {
        return this.contents[this.maxIndex].el;
    }
    /**
     * Initialize dragging sequences.
     * @param {?} contents
     * @return {?}
     */
    withCarouselContents(contents) {
        // TODO: carousel and its contents should be separated.
        /** @type {?} */
        const carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        const rect = carousel.el.getBoundingClientRect();
        this.slickListEl = carousel.slickListEl;
        this.slickTrackEl = carousel.slickTrackEl;
        this.unitWidth = rect.width;
        this.unitHeight = rect.height;
        this.contents = contents ? contents.toArray() : [];
        this.length = this.contents.length;
    }
    /**
     * When user drag the carousel component.
     * \@optional
     * @param {?} _vector
     * @return {?}
     */
    dragging(_vector) { }
    /**
     * Destroy a scroll strategy.
     * @return {?}
     */
    dispose() { }
    /**
     * @protected
     * @param {?} f
     * @param {?} t
     * @return {?}
     */
    getFromToInBoundary(f, t) {
        /** @type {?} */
        const length = this.maxIndex + 1;
        return { from: (f + length) % length, to: (t + length) % length };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL2Jhc2Utc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsTUFBTSxPQUFnQixzQkFBc0I7Ozs7OztJQXNCMUMsWUFDRSxpQkFBOEMsRUFDcEMsR0FBc0IsRUFDdEIsUUFBbUI7UUFEbkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUU3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFsQkQsSUFBYyxRQUFRO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFjLE9BQU87UUFDbkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELElBQWMsTUFBTTtRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFjRCxvQkFBb0IsQ0FBQyxRQUFzRDs7O2NBRW5FLFFBQVEsR0FBRyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLEVBQUM7O2NBQ2xDLElBQUksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7Ozs7O0lBV0QsUUFBUSxDQUFDLE9BQXNCLElBQVMsQ0FBQzs7Ozs7SUFLekMsT0FBTyxLQUFVLENBQUM7Ozs7Ozs7SUFFUixtQkFBbUIsQ0FBQyxDQUFTLEVBQUUsQ0FBUzs7Y0FDMUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztRQUNoQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDcEUsQ0FBQztDQUNGOzs7Ozs7SUFoRUMsbURBQWdFOzs7OztJQUNoRSwwQ0FBaUQ7Ozs7O0lBQ2pELDZDQUFtQzs7Ozs7SUFDbkMsOENBQW9DOzs7OztJQUNwQyx3Q0FBeUI7Ozs7O0lBQ3pCLDJDQUE0Qjs7Ozs7SUFDNUIsNENBQTZCOzs7OztJQWdCM0IscUNBQWdDOzs7OztJQUNoQywwQ0FBNkI7Ozs7Ozs7O0lBd0IvQixnRUFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBRdWVyeUxpc3QsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uL256LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRnJvbVRvSW50ZXJmYWNlLCBOekNhcm91c2VsQ29tcG9uZW50QXNTb3VyY2UsIFBvaW50ZXJWZWN0b3IgfSBmcm9tICcuLi9uei1jYXJvdXNlbC1kZWZpbml0aW9ucyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB7XHJcbiAgLy8gUHJvcGVydGllcyB0aGF0IHN0cmF0ZWdpZXMgbWF5IHdhbnQgdG8gdXNlLlxyXG4gIHByb3RlY3RlZCBjYXJvdXNlbENvbXBvbmVudDogTnpDYXJvdXNlbENvbXBvbmVudEFzU291cmNlIHwgbnVsbDtcclxuICBwcm90ZWN0ZWQgY29udGVudHM6IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlW107XHJcbiAgcHJvdGVjdGVkIHNsaWNrTGlzdEVsOiBIVE1MRWxlbWVudDtcclxuICBwcm90ZWN0ZWQgc2xpY2tUcmFja0VsOiBIVE1MRWxlbWVudDtcclxuICBwcm90ZWN0ZWQgbGVuZ3RoOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIHVuaXRXaWR0aDogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCB1bml0SGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgbWF4SW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmxlbmd0aCAtIDE7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IGZpcnN0RWwoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudHNbMF0uZWw7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IGxhc3RFbCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50c1t0aGlzLm1heEluZGV4XS5lbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2Fyb3VzZWxDb21wb25lbnQ6IE56Q2Fyb3VzZWxDb21wb25lbnRBc1NvdXJjZSxcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHRoaXMuY2Fyb3VzZWxDb21wb25lbnQgPSBjYXJvdXNlbENvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgZHJhZ2dpbmcgc2VxdWVuY2VzLlxyXG4gICAqIEBwYXJhbSBjb250ZW50c1xyXG4gICAqL1xyXG4gIHdpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+IHwgbnVsbCk6IHZvaWQge1xyXG4gICAgLy8gVE9ETzogY2Fyb3VzZWwgYW5kIGl0cyBjb250ZW50cyBzaG91bGQgYmUgc2VwYXJhdGVkLlxyXG4gICAgY29uc3QgY2Fyb3VzZWwgPSB0aGlzLmNhcm91c2VsQ29tcG9uZW50ITtcclxuICAgIGNvbnN0IHJlY3QgPSBjYXJvdXNlbC5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHRoaXMuc2xpY2tMaXN0RWwgPSBjYXJvdXNlbC5zbGlja0xpc3RFbDtcclxuICAgIHRoaXMuc2xpY2tUcmFja0VsID0gY2Fyb3VzZWwuc2xpY2tUcmFja0VsO1xyXG4gICAgdGhpcy51bml0V2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgdGhpcy51bml0SGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHMgPyBjb250ZW50cy50b0FycmF5KCkgOiBbXTtcclxuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5jb250ZW50cy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIHRyYW5zaXRpb24uXHJcbiAgICovXHJcbiAgYWJzdHJhY3Qgc3dpdGNoKF9mOiBudW1iZXIsIF90OiBudW1iZXIpOiBPYnNlcnZhYmxlPHZvaWQ+O1xyXG5cclxuICAvKipcclxuICAgKiBXaGVuIHVzZXIgZHJhZyB0aGUgY2Fyb3VzZWwgY29tcG9uZW50LlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqL1xyXG4gIGRyYWdnaW5nKF92ZWN0b3I6IFBvaW50ZXJWZWN0b3IpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3kgYSBzY3JvbGwgc3RyYXRlZ3kuXHJcbiAgICovXHJcbiAgZGlzcG9zZSgpOiB2b2lkIHt9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRGcm9tVG9JbkJvdW5kYXJ5KGY6IG51bWJlciwgdDogbnVtYmVyKTogRnJvbVRvSW50ZXJmYWNlIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubWF4SW5kZXggKyAxO1xyXG4gICAgcmV0dXJuIHsgZnJvbTogKGYgKyBsZW5ndGgpICUgbGVuZ3RoLCB0bzogKHQgKyBsZW5ndGgpICUgbGVuZ3RoIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==