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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL2Jhc2Utc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQSxNQUFNLE9BQWdCLHNCQUFzQjs7Ozs7O0lBc0IxQyxZQUNFLGlCQUE4QyxFQUNwQyxHQUFzQixFQUN0QixRQUFtQjtRQURuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBRTdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUM3QyxDQUFDOzs7OztJQWxCRCxJQUFjLFFBQVE7UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQWMsT0FBTztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsSUFBYyxNQUFNO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQWNELG9CQUFvQixDQUFDLFFBQXNEOzs7Y0FFbkUsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQzs7Y0FDbEMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUU7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7SUFXRCxRQUFRLENBQUMsT0FBc0IsSUFBUyxDQUFDOzs7OztJQUt6QyxPQUFPLEtBQVUsQ0FBQzs7Ozs7OztJQUVSLG1CQUFtQixDQUFDLENBQVMsRUFBRSxDQUFTOztjQUMxQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBQ2hDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0NBQ0Y7Ozs7OztJQWhFQyxtREFBZ0U7Ozs7O0lBQ2hFLDBDQUFpRDs7Ozs7SUFDakQsNkNBQW1DOzs7OztJQUNuQyw4Q0FBb0M7Ozs7O0lBQ3BDLHdDQUF5Qjs7Ozs7SUFDekIsMkNBQTRCOzs7OztJQUM1Qiw0Q0FBNkI7Ozs7O0lBZ0IzQixxQ0FBZ0M7Ozs7O0lBQ2hDLDBDQUE2Qjs7Ozs7Ozs7SUF3Qi9CLGdFQUEwRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGcm9tVG9JbnRlcmZhY2UsIE56Q2Fyb3VzZWxDb21wb25lbnRBc1NvdXJjZSwgUG9pbnRlclZlY3RvciB9IGZyb20gJy4uL256LWNhcm91c2VsLWRlZmluaXRpb25zJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOekNhcm91c2VsQmFzZVN0cmF0ZWd5IHtcclxuICAvLyBQcm9wZXJ0aWVzIHRoYXQgc3RyYXRlZ2llcyBtYXkgd2FudCB0byB1c2UuXHJcbiAgcHJvdGVjdGVkIGNhcm91c2VsQ29tcG9uZW50OiBOekNhcm91c2VsQ29tcG9uZW50QXNTb3VyY2UgfCBudWxsO1xyXG4gIHByb3RlY3RlZCBjb250ZW50czogTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmVbXTtcclxuICBwcm90ZWN0ZWQgc2xpY2tMaXN0RWw6IEhUTUxFbGVtZW50O1xyXG4gIHByb3RlY3RlZCBzbGlja1RyYWNrRWw6IEhUTUxFbGVtZW50O1xyXG4gIHByb3RlY3RlZCBsZW5ndGg6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgdW5pdFdpZHRoOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIHVuaXRIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgcHJvdGVjdGVkIGdldCBtYXhJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoIC0gMTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgZmlyc3RFbCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50c1swXS5lbDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgbGFzdEVsKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzW3RoaXMubWF4SW5kZXhdLmVsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjYXJvdXNlbENvbXBvbmVudDogTnpDYXJvdXNlbENvbXBvbmVudEFzU291cmNlLFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgdGhpcy5jYXJvdXNlbENvbXBvbmVudCA9IGNhcm91c2VsQ29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBkcmFnZ2luZyBzZXF1ZW5jZXMuXHJcbiAgICogQHBhcmFtIGNvbnRlbnRzXHJcbiAgICovXHJcbiAgd2l0aENhcm91c2VsQ29udGVudHMoY29udGVudHM6IFF1ZXJ5TGlzdDxOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZT4gfCBudWxsKTogdm9pZCB7XHJcbiAgICAvLyBUT0RPOiBjYXJvdXNlbCBhbmQgaXRzIGNvbnRlbnRzIHNob3VsZCBiZSBzZXBhcmF0ZWQuXHJcbiAgICBjb25zdCBjYXJvdXNlbCA9IHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhO1xyXG4gICAgY29uc3QgcmVjdCA9IGNhcm91c2VsLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdGhpcy5zbGlja0xpc3RFbCA9IGNhcm91c2VsLnNsaWNrTGlzdEVsO1xyXG4gICAgdGhpcy5zbGlja1RyYWNrRWwgPSBjYXJvdXNlbC5zbGlja1RyYWNrRWw7XHJcbiAgICB0aGlzLnVuaXRXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICB0aGlzLnVuaXRIZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cyA/IGNvbnRlbnRzLnRvQXJyYXkoKSA6IFtdO1xyXG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmNvbnRlbnRzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgdHJhbnNpdGlvbi5cclxuICAgKi9cclxuICBhYnN0cmFjdCBzd2l0Y2goX2Y6IG51bWJlciwgX3Q6IG51bWJlcik6IE9ic2VydmFibGU8dm9pZD47XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gdXNlciBkcmFnIHRoZSBjYXJvdXNlbCBjb21wb25lbnQuXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICovXHJcbiAgZHJhZ2dpbmcoX3ZlY3RvcjogUG9pbnRlclZlY3Rvcik6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzdHJveSBhIHNjcm9sbCBzdHJhdGVneS5cclxuICAgKi9cclxuICBkaXNwb3NlKCk6IHZvaWQge31cclxuXHJcbiAgcHJvdGVjdGVkIGdldEZyb21Ub0luQm91bmRhcnkoZjogbnVtYmVyLCB0OiBudW1iZXIpOiBGcm9tVG9JbnRlcmZhY2Uge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5tYXhJbmRleCArIDE7XHJcbiAgICByZXR1cm4geyBmcm9tOiAoZiArIGxlbmd0aCkgJSBsZW5ndGgsIHRvOiAodCArIGxlbmd0aCkgJSBsZW5ndGggfTtcclxuICB9XHJcbn1cclxuIl19