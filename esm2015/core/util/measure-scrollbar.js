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
let scrollbarVerticalSize;
/** @type {?} */
let scrollbarHorizontalSize;
// Measure scrollbar width for padding body during modal show/hide
/** @type {?} */
const scrollbarMeasure = {
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
export function measureScrollbar(direction = 'vertical', prefix = 'ant') {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
        return 0;
    }
    /** @type {?} */
    const isVertical = direction === 'vertical';
    if (isVertical && scrollbarVerticalSize) {
        return scrollbarVerticalSize;
    }
    else if (!isVertical && scrollbarHorizontalSize) {
        return scrollbarHorizontalSize;
    }
    /** @type {?} */
    const scrollDiv = document.createElement('div');
    Object.keys(scrollbarMeasure).forEach((/**
     * @param {?} scrollProp
     * @return {?}
     */
    scrollProp => {
        // @ts-ignore
        scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
    }));
    // apply hide scrollbar className ahead
    scrollDiv.className = `${prefix}-hide-scrollbar scroll-div-append-to-body`;
    // Append related overflow style
    if (isVertical) {
        scrollDiv.style.overflowY = 'scroll';
    }
    else {
        scrollDiv.style.overflowX = 'scroll';
    }
    document.body.appendChild(scrollDiv);
    /** @type {?} */
    let size = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZS1zY3JvbGxiYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL21lYXN1cmUtc2Nyb2xsYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9JLHFCQUE2Qjs7SUFDN0IsdUJBQStCOzs7TUFHN0IsZ0JBQWdCLEdBQUc7SUFDdkIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsR0FBRyxFQUFFLFNBQVM7SUFDZCxLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0NBQ2Y7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxZQUF1QyxVQUFVLEVBQUUsU0FBaUIsS0FBSztJQUN4RyxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDcEUsT0FBTyxDQUFDLENBQUM7S0FDVjs7VUFDSyxVQUFVLEdBQUcsU0FBUyxLQUFLLFVBQVU7SUFDM0MsSUFBSSxVQUFVLElBQUkscUJBQXFCLEVBQUU7UUFDdkMsT0FBTyxxQkFBcUIsQ0FBQztLQUM5QjtTQUFNLElBQUksQ0FBQyxVQUFVLElBQUksdUJBQXVCLEVBQUU7UUFDakQsT0FBTyx1QkFBdUIsQ0FBQztLQUNoQzs7VUFDSyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU87Ozs7SUFBQyxVQUFVLENBQUMsRUFBRTtRQUNqRCxhQUFhO1FBQ2IsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDLEVBQUMsQ0FBQztJQUNILHVDQUF1QztJQUN2QyxTQUFTLENBQUMsU0FBUyxHQUFHLEdBQUcsTUFBTSwyQ0FBMkMsQ0FBQztJQUMzRSxnQ0FBZ0M7SUFDaEMsSUFBSSxVQUFVLEVBQUU7UUFDZCxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7S0FDdEM7U0FBTTtRQUNMLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUN0QztJQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUNqQyxJQUFJLEdBQUcsQ0FBQztJQUNaLElBQUksVUFBVSxFQUFFO1FBQ2QsSUFBSSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUNyRCxxQkFBcUIsR0FBRyxJQUFJLENBQUM7S0FDOUI7U0FBTTtRQUNMLElBQUksR0FBRyxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDdkQsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0tBQ2hDO0lBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmxldCBzY3JvbGxiYXJWZXJ0aWNhbFNpemU6IG51bWJlcjtcclxubGV0IHNjcm9sbGJhckhvcml6b250YWxTaXplOiBudW1iZXI7XHJcblxyXG4vLyBNZWFzdXJlIHNjcm9sbGJhciB3aWR0aCBmb3IgcGFkZGluZyBib2R5IGR1cmluZyBtb2RhbCBzaG93L2hpZGVcclxuY29uc3Qgc2Nyb2xsYmFyTWVhc3VyZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICctOTk5OXB4JyxcclxuICB3aWR0aDogJzUwcHgnLFxyXG4gIGhlaWdodDogJzUwcHgnXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcihkaXJlY3Rpb246ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgPSAndmVydGljYWwnLCBwcmVmaXg6IHN0cmluZyA9ICdhbnQnKTogbnVtYmVyIHtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIGNvbnN0IGlzVmVydGljYWwgPSBkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCc7XHJcbiAgaWYgKGlzVmVydGljYWwgJiYgc2Nyb2xsYmFyVmVydGljYWxTaXplKSB7XHJcbiAgICByZXR1cm4gc2Nyb2xsYmFyVmVydGljYWxTaXplO1xyXG4gIH0gZWxzZSBpZiAoIWlzVmVydGljYWwgJiYgc2Nyb2xsYmFySG9yaXpvbnRhbFNpemUpIHtcclxuICAgIHJldHVybiBzY3JvbGxiYXJIb3Jpem9udGFsU2l6ZTtcclxuICB9XHJcbiAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgT2JqZWN0LmtleXMoc2Nyb2xsYmFyTWVhc3VyZSkuZm9yRWFjaChzY3JvbGxQcm9wID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHNjcm9sbERpdi5zdHlsZVtzY3JvbGxQcm9wXSA9IHNjcm9sbGJhck1lYXN1cmVbc2Nyb2xsUHJvcF07XHJcbiAgfSk7XHJcbiAgLy8gYXBwbHkgaGlkZSBzY3JvbGxiYXIgY2xhc3NOYW1lIGFoZWFkXHJcbiAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IGAke3ByZWZpeH0taGlkZS1zY3JvbGxiYXIgc2Nyb2xsLWRpdi1hcHBlbmQtdG8tYm9keWA7XHJcbiAgLy8gQXBwZW5kIHJlbGF0ZWQgb3ZlcmZsb3cgc3R5bGVcclxuICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3dYID0gJ3Njcm9sbCc7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcclxuICBsZXQgc2l6ZSA9IDA7XHJcbiAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgIHNpemUgPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XHJcbiAgICBzY3JvbGxiYXJWZXJ0aWNhbFNpemUgPSBzaXplO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaXplID0gc2Nyb2xsRGl2Lm9mZnNldEhlaWdodCAtIHNjcm9sbERpdi5jbGllbnRIZWlnaHQ7XHJcbiAgICBzY3JvbGxiYXJIb3Jpem9udGFsU2l6ZSA9IHNpemU7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XHJcbiAgcmV0dXJuIHNpemU7XHJcbn1cclxuIl19