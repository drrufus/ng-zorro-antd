/**
 * @fileoverview added by tsickle
 * Generated from: polyfill/request-animation.ts
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
var availablePrefixes = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    var lastTime = 0;
    return (/**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        /** @type {?} */
        var currTime = new Date().getTime();
        /** @type {?} */
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        var id = setTimeout((/**
         * @return {?}
         */
        function () {
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
        function () { return 0; });
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    var prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return key + "RequestAnimationFrame" in window; }))[0];
    return prefix ? ((/** @type {?} */ (window)))[prefix + "RequestAnimationFrame"] : requestAnimationFramePolyfill();
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
    var prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return key + "CancelAnimationFrame" in window || key + "CancelRequestAnimationFrame" in window; }))[0];
    return prefix
        ? (((/** @type {?} */ (window)))[prefix + "CancelAnimationFrame"] || ((/** @type {?} */ (window)))[prefix + "CancelRequestAnimationFrame"])
            // @ts-ignore
            .call(this, id)
        : clearTimeout(id);
}
/** @type {?} */
export var reqAnimFrame = getRequestAnimationFrame();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJwb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQVNNLGlCQUFpQixHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7Ozs7QUFFakQsU0FBUyw2QkFBNkI7O1FBQ2hDLFFBQVEsR0FBRyxDQUFDO0lBQ2hCOzs7O0lBQU8sVUFBUyxRQUE4Qjs7WUFDdEMsUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFOztZQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDOztZQUNwRCxFQUFFLEdBQUcsVUFBVTs7O1FBQUM7WUFDcEIsUUFBUSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNsQyxDQUFDLEdBQUUsVUFBVSxDQUFDO1FBQ2QsUUFBUSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDLEVBQUM7QUFDSixDQUFDOzs7O0FBRUQsU0FBUyx3QkFBd0I7SUFDL0IsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDakM7OztRQUFPLGNBQU0sT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDO0tBQ2hCO0lBQ0QsSUFBSSxNQUFNLENBQUMscUJBQXFCLEVBQUU7UUFDaEMsMkNBQTJDO1FBQzNDLE9BQU8sTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsRDs7UUFFSyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7OztJQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUcsR0FBRywwQkFBdUIsSUFBSSxNQUFNLEVBQXZDLENBQXVDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUYsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBSSxNQUFNLDBCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixFQUFFLENBQUM7QUFDdEcsQ0FBQzs7Ozs7QUFDRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsRUFBVTtJQUNwRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEVBQUU7UUFDL0IsT0FBTyxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDeEM7O1FBQ0ssTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU07Ozs7SUFDckMsVUFBQSxHQUFHLElBQUksT0FBRyxHQUFHLHlCQUFzQixJQUFJLE1BQU0sSUFBTyxHQUFHLGdDQUE2QixJQUFJLE1BQU0sRUFBdkYsQ0FBdUYsRUFDL0YsQ0FBQyxDQUFDLENBQUM7SUFFSixPQUFPLE1BQU07UUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUksTUFBTSx5QkFBc0IsQ0FBQyxJQUFJLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBSSxNQUFNLGdDQUE2QixDQUFDLENBQUM7WUFDM0csYUFBYTthQUNaLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkIsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sWUFBWSxHQUFHLHdCQUF3QixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgdHlwZWRlZiBuby1pbnZhbGlkLXRoaXNcclxuY29uc3QgYXZhaWxhYmxlUHJlZml4ZXMgPSBbJ21veicsICdtcycsICd3ZWJraXQnXTtcclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsKCk6IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUge1xyXG4gIGxldCBsYXN0VGltZSA9IDA7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjayk6IG51bWJlciB7XHJcbiAgICBjb25zdCBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcclxuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XHJcbiAgICB9LCB0aW1lVG9DYWxsKTtcclxuICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpOiB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiAoKSA9PiAwO1xyXG4gIH1cclxuICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS9pc3N1ZXMvNDQ2NVxyXG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJlZml4ID0gYXZhaWxhYmxlUHJlZml4ZXMuZmlsdGVyKGtleSA9PiBgJHtrZXl9UmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBpbiB3aW5kb3cpWzBdO1xyXG5cclxuICByZXR1cm4gcHJlZml4ID8gKHdpbmRvdyBhcyBhbnkpW2Ake3ByZWZpeH1SZXF1ZXN0QW5pbWF0aW9uRnJhbWVgXSA6IHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShpZDogbnVtYmVyKTogYW55IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBpZiAod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTtcclxuICB9XHJcbiAgY29uc3QgcHJlZml4ID0gYXZhaWxhYmxlUHJlZml4ZXMuZmlsdGVyKFxyXG4gICAga2V5ID0+IGAke2tleX1DYW5jZWxBbmltYXRpb25GcmFtZWAgaW4gd2luZG93IHx8IGAke2tleX1DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvd1xyXG4gIClbMF07XHJcblxyXG4gIHJldHVybiBwcmVmaXhcclxuICAgID8gKCh3aW5kb3cgYXMgYW55KVtgJHtwcmVmaXh9Q2FuY2VsQW5pbWF0aW9uRnJhbWVgXSB8fCAod2luZG93IGFzIGFueSlbYCR7cHJlZml4fUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZWBdKVxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAuY2FsbCh0aGlzLCBpZClcclxuICAgIDogY2xlYXJUaW1lb3V0KGlkKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcUFuaW1GcmFtZSA9IGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xyXG4iXX0=