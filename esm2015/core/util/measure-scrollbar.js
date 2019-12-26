/**
 * @fileoverview added by tsickle
 * Generated from: util/measure-scrollbar.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZS1zY3JvbGxiYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL21lYXN1cmUtc2Nyb2xsYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFPSSxxQkFBNkI7O0lBQzdCLHVCQUErQjs7O01BRzdCLGdCQUFnQixHQUFHO0lBQ3ZCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLEdBQUcsRUFBRSxTQUFTO0lBQ2QsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtDQUNmOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsWUFBdUMsVUFBVSxFQUFFLFNBQWlCLEtBQUs7SUFDeEcsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ3BFLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7O1VBQ0ssVUFBVSxHQUFHLFNBQVMsS0FBSyxVQUFVO0lBQzNDLElBQUksVUFBVSxJQUFJLHFCQUFxQixFQUFFO1FBQ3ZDLE9BQU8scUJBQXFCLENBQUM7S0FDOUI7U0FBTSxJQUFJLENBQUMsVUFBVSxJQUFJLHVCQUF1QixFQUFFO1FBQ2pELE9BQU8sdUJBQXVCLENBQUM7S0FDaEM7O1VBQ0ssU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPOzs7O0lBQUMsVUFBVSxDQUFDLEVBQUU7UUFDakQsYUFBYTtRQUNiLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0QsQ0FBQyxFQUFDLENBQUM7SUFDSCx1Q0FBdUM7SUFDdkMsU0FBUyxDQUFDLFNBQVMsR0FBRyxHQUFHLE1BQU0sMkNBQTJDLENBQUM7SUFDM0UsZ0NBQWdDO0lBQ2hDLElBQUksVUFBVSxFQUFFO1FBQ2QsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0tBQ3RDO1NBQU07UUFDTCxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7S0FDdEM7SUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7UUFDakMsSUFBSSxHQUFHLENBQUM7SUFDWixJQUFJLFVBQVUsRUFBRTtRQUNkLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDckQscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0tBQzlCO1NBQU07UUFDTCxJQUFJLEdBQUcsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBQ3ZELHVCQUF1QixHQUFHLElBQUksQ0FBQztLQUNoQztJQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5sZXQgc2Nyb2xsYmFyVmVydGljYWxTaXplOiBudW1iZXI7XHJcbmxldCBzY3JvbGxiYXJIb3Jpem9udGFsU2l6ZTogbnVtYmVyO1xyXG5cclxuLy8gTWVhc3VyZSBzY3JvbGxiYXIgd2lkdGggZm9yIHBhZGRpbmcgYm9keSBkdXJpbmcgbW9kYWwgc2hvdy9oaWRlXHJcbmNvbnN0IHNjcm9sbGJhck1lYXN1cmUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnLTk5OTlweCcsXHJcbiAgd2lkdGg6ICc1MHB4JyxcclxuICBoZWlnaHQ6ICc1MHB4J1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoZGlyZWN0aW9uOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnID0gJ3ZlcnRpY2FsJywgcHJlZml4OiBzdHJpbmcgPSAnYW50Jyk6IG51bWJlciB7XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICBjb25zdCBpc1ZlcnRpY2FsID0gZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xyXG4gIGlmIChpc1ZlcnRpY2FsICYmIHNjcm9sbGJhclZlcnRpY2FsU2l6ZSkge1xyXG4gICAgcmV0dXJuIHNjcm9sbGJhclZlcnRpY2FsU2l6ZTtcclxuICB9IGVsc2UgaWYgKCFpc1ZlcnRpY2FsICYmIHNjcm9sbGJhckhvcml6b250YWxTaXplKSB7XHJcbiAgICByZXR1cm4gc2Nyb2xsYmFySG9yaXpvbnRhbFNpemU7XHJcbiAgfVxyXG4gIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIE9iamVjdC5rZXlzKHNjcm9sbGJhck1lYXN1cmUpLmZvckVhY2goc2Nyb2xsUHJvcCA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBzY3JvbGxEaXYuc3R5bGVbc2Nyb2xsUHJvcF0gPSBzY3JvbGxiYXJNZWFzdXJlW3Njcm9sbFByb3BdO1xyXG4gIH0pO1xyXG4gIC8vIGFwcGx5IGhpZGUgc2Nyb2xsYmFyIGNsYXNzTmFtZSBhaGVhZFxyXG4gIHNjcm9sbERpdi5jbGFzc05hbWUgPSBgJHtwcmVmaXh9LWhpZGUtc2Nyb2xsYmFyIHNjcm9sbC1kaXYtYXBwZW5kLXRvLWJvZHlgO1xyXG4gIC8vIEFwcGVuZCByZWxhdGVkIG92ZXJmbG93IHN0eWxlXHJcbiAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcclxuICB9IGVsc2Uge1xyXG4gICAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93WCA9ICdzY3JvbGwnO1xyXG4gIH1cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XHJcbiAgbGV0IHNpemUgPSAwO1xyXG4gIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICBzaXplID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xyXG4gICAgc2Nyb2xsYmFyVmVydGljYWxTaXplID0gc2l6ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRIZWlnaHQgLSBzY3JvbGxEaXYuY2xpZW50SGVpZ2h0O1xyXG4gICAgc2Nyb2xsYmFySG9yaXpvbnRhbFNpemUgPSBzaXplO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xyXG4gIHJldHVybiBzaXplO1xyXG59XHJcbiJdfQ==