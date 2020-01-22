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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJwb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBU00saUJBQWlCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQzs7OztBQUVqRCxTQUFTLDZCQUE2Qjs7UUFDaEMsUUFBUSxHQUFHLENBQUM7SUFDaEI7Ozs7SUFBTyxVQUFTLFFBQThCOztZQUN0QyxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBQy9CLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUM7O1lBQ3BELEVBQUUsR0FBRyxVQUFVOzs7UUFBQztZQUNwQixRQUFRLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsR0FBRSxVQUFVLENBQUM7UUFDZCxRQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7QUFFRCxTQUFTLHdCQUF3QjtJQUMvQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQzs7O1FBQU8sY0FBTSxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUM7S0FDaEI7SUFDRCxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTtRQUNoQywyQ0FBMkM7UUFDM0MsT0FBTyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xEOztRQUVLLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxHQUFHLElBQUksT0FBRyxHQUFHLDBCQUF1QixJQUFJLE1BQU0sRUFBdkMsQ0FBdUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUUxRixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFJLE1BQU0sMEJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztBQUN0RyxDQUFDOzs7OztBQUNELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxFQUFVO0lBQ3BELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7UUFDSyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7OztJQUNyQyxVQUFBLEdBQUcsSUFBSSxPQUFHLEdBQUcseUJBQXNCLElBQUksTUFBTSxJQUFPLEdBQUcsZ0NBQTZCLElBQUksTUFBTSxFQUF2RixDQUF1RixFQUMvRixDQUFDLENBQUMsQ0FBQztJQUVKLE9BQU8sTUFBTTtRQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBSSxNQUFNLHlCQUFzQixDQUFDLElBQUksQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFJLE1BQU0sZ0NBQTZCLENBQUMsQ0FBQztZQUMzRyxhQUFhO2FBQ1osSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQUcsd0JBQXdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueSB0eXBlZGVmIG5vLWludmFsaWQtdGhpc1xyXG5jb25zdCBhdmFpbGFibGVQcmVmaXhlcyA9IFsnbW96JywgJ21zJywgJ3dlYmtpdCddO1xyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwoKTogdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSB7XHJcbiAgbGV0IGxhc3RUaW1lID0gMDtcclxuICByZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xyXG4gICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcclxuICAgIH0sIHRpbWVUb0NhbGwpO1xyXG4gICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk6IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuICgpID0+IDA7XHJcbiAgfVxyXG4gIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy80NDY1XHJcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmVmaXggPSBhdmFpbGFibGVQcmVmaXhlcy5maWx0ZXIoa2V5ID0+IGAke2tleX1SZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvdylbMF07XHJcblxyXG4gIHJldHVybiBwcmVmaXggPyAod2luZG93IGFzIGFueSlbYCR7cHJlZml4fVJlcXVlc3RBbmltYXRpb25GcmFtZWBdIDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGlkOiBudW1iZXIpOiBhbnkge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGlmICh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcclxuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xyXG4gIH1cclxuICBjb25zdCBwcmVmaXggPSBhdmFpbGFibGVQcmVmaXhlcy5maWx0ZXIoXHJcbiAgICBrZXkgPT4gYCR7a2V5fUNhbmNlbEFuaW1hdGlvbkZyYW1lYCBpbiB3aW5kb3cgfHwgYCR7a2V5fUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZWAgaW4gd2luZG93XHJcbiAgKVswXTtcclxuXHJcbiAgcmV0dXJuIHByZWZpeFxyXG4gICAgPyAoKHdpbmRvdyBhcyBhbnkpW2Ake3ByZWZpeH1DYW5jZWxBbmltYXRpb25GcmFtZWBdIHx8ICh3aW5kb3cgYXMgYW55KVtgJHtwcmVmaXh9Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lYF0pXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIC5jYWxsKHRoaXMsIGlkKVxyXG4gICAgOiBjbGVhclRpbWVvdXQoaWQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVxQW5pbUZyYW1lID0gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XHJcbiJdfQ==