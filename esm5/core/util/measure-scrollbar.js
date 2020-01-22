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
 * @type {?}
 */
var scrollbarVerticalSize;
/** @type {?} */
var scrollbarHorizontalSize;
// Measure scrollbar width for padding body during modal show/hide
/** @type {?} */
var scrollbarMeasure = {
    position: 'absolute',
    top: '-9999px',
    width: '50px',
    height: '50px'
};
/**
 * @param {?=} direction
 * @param {?=} prefix
 * @return {?}
 */
export function measureScrollbar(direction, prefix) {
    if (direction === void 0) { direction = 'vertical'; }
    if (prefix === void 0) { prefix = 'ant'; }
    if (typeof document === 'undefined' || typeof window === 'undefined') {
        return 0;
    }
    /** @type {?} */
    var isVertical = direction === 'vertical';
    if (isVertical && scrollbarVerticalSize) {
        return scrollbarVerticalSize;
    }
    else if (!isVertical && scrollbarHorizontalSize) {
        return scrollbarHorizontalSize;
    }
    /** @type {?} */
    var scrollDiv = document.createElement('div');
    Object.keys(scrollbarMeasure).forEach((/**
     * @param {?} scrollProp
     * @return {?}
     */
    function (scrollProp) {
        // @ts-ignore
        scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
    }));
    // apply hide scrollbar className ahead
    scrollDiv.className = prefix + "-hide-scrollbar scroll-div-append-to-body";
    // Append related overflow style
    if (isVertical) {
        scrollDiv.style.overflowY = 'scroll';
    }
    else {
        scrollDiv.style.overflowX = 'scroll';
    }
    document.body.appendChild(scrollDiv);
    /** @type {?} */
    var size = 0;
    if (isVertical) {
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        scrollbarVerticalSize = size;
    }
    else {
        size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        scrollbarHorizontalSize = size;
    }
    document.body.removeChild(scrollDiv);
    return size;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZS1zY3JvbGxiYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL21lYXN1cmUtc2Nyb2xsYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9JLHFCQUE2Qjs7SUFDN0IsdUJBQStCOzs7SUFHN0IsZ0JBQWdCLEdBQUc7SUFDdkIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsR0FBRyxFQUFFLFNBQVM7SUFDZCxLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0NBQ2Y7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxTQUFpRCxFQUFFLE1BQXNCO0lBQXpFLDBCQUFBLEVBQUEsc0JBQWlEO0lBQUUsdUJBQUEsRUFBQSxjQUFzQjtJQUN4RyxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDcEUsT0FBTyxDQUFDLENBQUM7S0FDVjs7UUFDSyxVQUFVLEdBQUcsU0FBUyxLQUFLLFVBQVU7SUFDM0MsSUFBSSxVQUFVLElBQUkscUJBQXFCLEVBQUU7UUFDdkMsT0FBTyxxQkFBcUIsQ0FBQztLQUM5QjtTQUFNLElBQUksQ0FBQyxVQUFVLElBQUksdUJBQXVCLEVBQUU7UUFDakQsT0FBTyx1QkFBdUIsQ0FBQztLQUNoQzs7UUFDSyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU87Ozs7SUFBQyxVQUFBLFVBQVU7UUFDOUMsYUFBYTtRQUNiLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0QsQ0FBQyxFQUFDLENBQUM7SUFDSCx1Q0FBdUM7SUFDdkMsU0FBUyxDQUFDLFNBQVMsR0FBTSxNQUFNLDhDQUEyQyxDQUFDO0lBQzNFLGdDQUFnQztJQUNoQyxJQUFJLFVBQVUsRUFBRTtRQUNkLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUN0QztTQUFNO1FBQ0wsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0tBQ3RDO0lBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7O1FBQ2pDLElBQUksR0FBRyxDQUFDO0lBQ1osSUFBSSxVQUFVLEVBQUU7UUFDZCxJQUFJLEdBQUcsU0FBUyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO1FBQ3JELHFCQUFxQixHQUFHLElBQUksQ0FBQztLQUM5QjtTQUFNO1FBQ0wsSUFBSSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUN2RCx1QkFBdUIsR0FBRyxJQUFJLENBQUM7S0FDaEM7SUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxubGV0IHNjcm9sbGJhclZlcnRpY2FsU2l6ZTogbnVtYmVyO1xyXG5sZXQgc2Nyb2xsYmFySG9yaXpvbnRhbFNpemU6IG51bWJlcjtcclxuXHJcbi8vIE1lYXN1cmUgc2Nyb2xsYmFyIHdpZHRoIGZvciBwYWRkaW5nIGJvZHkgZHVyaW5nIG1vZGFsIHNob3cvaGlkZVxyXG5jb25zdCBzY3JvbGxiYXJNZWFzdXJlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJy05OTk5cHgnLFxyXG4gIHdpZHRoOiAnNTBweCcsXHJcbiAgaGVpZ2h0OiAnNTBweCdcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyA9ICd2ZXJ0aWNhbCcsIHByZWZpeDogc3RyaW5nID0gJ2FudCcpOiBudW1iZXIge1xyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcclxuICBpZiAoaXNWZXJ0aWNhbCAmJiBzY3JvbGxiYXJWZXJ0aWNhbFNpemUpIHtcclxuICAgIHJldHVybiBzY3JvbGxiYXJWZXJ0aWNhbFNpemU7XHJcbiAgfSBlbHNlIGlmICghaXNWZXJ0aWNhbCAmJiBzY3JvbGxiYXJIb3Jpem9udGFsU2l6ZSkge1xyXG4gICAgcmV0dXJuIHNjcm9sbGJhckhvcml6b250YWxTaXplO1xyXG4gIH1cclxuICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBPYmplY3Qua2V5cyhzY3JvbGxiYXJNZWFzdXJlKS5mb3JFYWNoKHNjcm9sbFByb3AgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgc2Nyb2xsRGl2LnN0eWxlW3Njcm9sbFByb3BdID0gc2Nyb2xsYmFyTWVhc3VyZVtzY3JvbGxQcm9wXTtcclxuICB9KTtcclxuICAvLyBhcHBseSBoaWRlIHNjcm9sbGJhciBjbGFzc05hbWUgYWhlYWRcclxuICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gYCR7cHJlZml4fS1oaWRlLXNjcm9sbGJhciBzY3JvbGwtZGl2LWFwcGVuZC10by1ib2R5YDtcclxuICAvLyBBcHBlbmQgcmVsYXRlZCBvdmVyZmxvdyBzdHlsZVxyXG4gIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvd1ggPSAnc2Nyb2xsJztcclxuICB9XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xyXG4gIGxldCBzaXplID0gMDtcclxuICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgc2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcclxuICAgIHNjcm9sbGJhclZlcnRpY2FsU2l6ZSA9IHNpemU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNpemUgPSBzY3JvbGxEaXYub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRGl2LmNsaWVudEhlaWdodDtcclxuICAgIHNjcm9sbGJhckhvcml6b250YWxTaXplID0gc2l6ZTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcclxuICByZXR1cm4gc2l6ZTtcclxufVxyXG4iXX0=