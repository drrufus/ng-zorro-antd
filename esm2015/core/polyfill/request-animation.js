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
// tslint:disable:no-any typedef no-invalid-this
/** @type {?} */
const availablePrefixes = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    let lastTime = 0;
    return (/**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        /** @type {?} */
        const currTime = new Date().getTime();
        /** @type {?} */
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        const id = setTimeout((/**
         * @return {?}
         */
        () => {
            callback(currTime + timeToCall);
        }), timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    });
}
/**
 * @return {?}
 */
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return (/**
         * @return {?}
         */
        () => 0);
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    const prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    key => `${key}RequestAnimationFrame` in window))[0];
    return prefix ? ((/** @type {?} */ (window)))[`${prefix}RequestAnimationFrame`] : requestAnimationFramePolyfill();
}
/**
 * @param {?} id
 * @return {?}
 */
export function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    /** @type {?} */
    const prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    key => `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window))[0];
    return prefix
        ? (((/** @type {?} */ (window)))[`${prefix}CancelAnimationFrame`] || ((/** @type {?} */ (window)))[`${prefix}CancelRequestAnimationFrame`])
            // @ts-ignore
            .call(this, id)
        : clearTimeout(id);
}
/** @type {?} */
export const reqAnimFrame = getRequestAnimationFrame();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJwb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BU00saUJBQWlCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQzs7OztBQUVqRCxTQUFTLDZCQUE2Qjs7UUFDaEMsUUFBUSxHQUFHLENBQUM7SUFDaEI7Ozs7SUFBTyxVQUFTLFFBQThCOztjQUN0QyxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O2NBQy9CLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUM7O2NBQ3BELEVBQUUsR0FBRyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDekIsUUFBUSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNsQyxDQUFDLEdBQUUsVUFBVSxDQUFDO1FBQ2QsUUFBUSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDLEVBQUM7QUFDSixDQUFDOzs7O0FBRUQsU0FBUyx3QkFBd0I7SUFDL0IsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDakM7OztRQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQztLQUNoQjtJQUNELElBQUksTUFBTSxDQUFDLHFCQUFxQixFQUFFO1FBQ2hDLDJDQUEyQztRQUMzQyxPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbEQ7O1VBRUssTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU07Ozs7SUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyx1QkFBdUIsSUFBSSxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUYsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztBQUN0RyxDQUFDOzs7OztBQUNELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxFQUFVO0lBQ3BELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7VUFDSyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7OztJQUNyQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxzQkFBc0IsSUFBSSxNQUFNLElBQUksR0FBRyxHQUFHLDZCQUE2QixJQUFJLE1BQU0sRUFDL0YsQ0FBQyxDQUFDLENBQUM7SUFFSixPQUFPLE1BQU07UUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsR0FBRyxNQUFNLHNCQUFzQixDQUFDLElBQUksQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSw2QkFBNkIsQ0FBQyxDQUFDO1lBQzNHLGFBQWE7YUFDWixJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7O0FBRUQsTUFBTSxPQUFPLFlBQVksR0FBRyx3QkFBd0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55IHR5cGVkZWYgbm8taW52YWxpZC10aGlzXHJcbmNvbnN0IGF2YWlsYWJsZVByZWZpeGVzID0gWydtb3onLCAnbXMnLCAnd2Via2l0J107XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCgpOiB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHtcclxuICBsZXQgbGFzdFRpbWUgPSAwO1xyXG4gIHJldHVybiBmdW5jdGlvbihjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spOiBudW1iZXIge1xyXG4gICAgY29uc3QgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XHJcbiAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xyXG4gICAgfSwgdGltZVRvQ2FsbCk7XHJcbiAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcclxuICAgIHJldHVybiBpZDtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTogdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gKCkgPT4gMDtcclxuICB9XHJcbiAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvaXNzdWVzLzQ0NjVcclxuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByZWZpeCA9IGF2YWlsYWJsZVByZWZpeGVzLmZpbHRlcihrZXkgPT4gYCR7a2V5fVJlcXVlc3RBbmltYXRpb25GcmFtZWAgaW4gd2luZG93KVswXTtcclxuXHJcbiAgcmV0dXJuIHByZWZpeCA/ICh3aW5kb3cgYXMgYW55KVtgJHtwcmVmaXh9UmVxdWVzdEFuaW1hdGlvbkZyYW1lYF0gOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaWQ6IG51bWJlcik6IGFueSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgaWYgKHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XHJcbiAgfVxyXG4gIGNvbnN0IHByZWZpeCA9IGF2YWlsYWJsZVByZWZpeGVzLmZpbHRlcihcclxuICAgIGtleSA9PiBgJHtrZXl9Q2FuY2VsQW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvdyB8fCBgJHtrZXl9Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBpbiB3aW5kb3dcclxuICApWzBdO1xyXG5cclxuICByZXR1cm4gcHJlZml4XHJcbiAgICA/ICgod2luZG93IGFzIGFueSlbYCR7cHJlZml4fUNhbmNlbEFuaW1hdGlvbkZyYW1lYF0gfHwgKHdpbmRvdyBhcyBhbnkpW2Ake3ByZWZpeH1DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVgXSlcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgLmNhbGwodGhpcywgaWQpXHJcbiAgICA6IGNsZWFyVGltZW91dChpZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXFBbmltRnJhbWUgPSBnZXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcclxuIl19