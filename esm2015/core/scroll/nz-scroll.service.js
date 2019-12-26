/**
 * @fileoverview added by tsickle
 * Generated from: scroll/nz-scroll.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    /** @type {?} */
    const cc = c - b;
    /** @type {?} */
    let tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
export class NzScrollService {
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    setScrollTop(el, topValue = 0) {
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            (/** @type {?} */ (this.doc.documentElement)).scrollTop = topValue;
        }
        else {
            ((/** @type {?} */ (el))).scrollTop = topValue;
        }
    }
    /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    getOffset(el) {
        /** @type {?} */
        const ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        /** @type {?} */
        const rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            const doc = (/** @type {?} */ (el.ownerDocument)).documentElement;
            ret.top = rect.top - (/** @type {?} */ (doc)).clientTop;
            ret.left = rect.left - (/** @type {?} */ (doc)).clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    }
    /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    getScroll(el, top = true) {
        /** @type {?} */
        const target = el ? el : window;
        /** @type {?} */
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        const method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        const isWindow = target === window;
        // @ts-ignore
        /** @type {?} */
        let ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = (/** @type {?} */ (this.doc.documentElement))[method];
        }
        return ret;
    }
    /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    scrollTo(containerEl, targetTopValue = 0, easing, callback) {
        /** @type {?} */
        const target = containerEl ? containerEl : window;
        /** @type {?} */
        const scrollTop = this.getScroll(target);
        /** @type {?} */
        const startTime = Date.now();
        /** @type {?} */
        const frameFunc = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const timestamp = Date.now();
            /** @type {?} */
            const time = timestamp - startTime;
            this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback) {
                    callback();
                }
            }
        });
        reqAnimFrame(frameFunc);
    }
}
NzScrollService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzScrollService.prototype.doc;
}
/**
 * @param {?} doc
 * @param {?} scrollService
 * @return {?}
 */
export function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
/** @type {?} */
export const SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7OztBQUk3RCxTQUFTLGNBQWMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTOztVQUMxRCxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7O1FBQ1osRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDcEM7U0FBTTtRQUNMLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUM7QUFHRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFJMUIsWUFBOEIsR0FBUTtRQUNwQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDOzs7Ozs7O0lBR0QsWUFBWSxDQUFDLEVBQW9CLEVBQUUsV0FBbUIsQ0FBQztRQUNyRCxJQUFJLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdB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YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxFQUFFLENBQUM7aUJBQ1o7YUFDRjtRQUNILENBQUMsQ0FBQTtRQUNELFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUFsRkYsVUFBVTs7Ozs0Q0FLSSxNQUFNLFNBQUMsUUFBUTs7Ozs7OztJQUg1Qiw4QkFBc0I7Ozs7Ozs7QUFtRnhCLE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxHQUFhLEVBQUUsYUFBOEI7SUFDM0YsT0FBTyxhQUFhLElBQUksSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkQsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sdUJBQXVCLEdBQWE7SUFDL0MsT0FBTyxFQUFFLGVBQWU7SUFDeEIsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7Q0FDcEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyByZXFBbmltRnJhbWUgfSBmcm9tICcuLi9wb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbic7XHJcblxyXG5leHBvcnQgdHlwZSBFYXN5aW5nRm4gPSAodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKSA9PiBudW1iZXI7XHJcblxyXG5mdW5jdGlvbiBlYXNlSW5PdXRDdWJpYyh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGNvbnN0IGNjID0gYyAtIGI7XHJcbiAgbGV0IHR0ID0gdCAvIChkIC8gMik7XHJcbiAgaWYgKHR0IDwgMSkge1xyXG4gICAgcmV0dXJuIChjYyAvIDIpICogdHQgKiB0dCAqIHR0ICsgYjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChjYyAvIDIpICogKCh0dCAtPSAyKSAqIHR0ICogdHQgKyAyKSArIGI7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelNjcm9sbFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZG9jOiBEb2N1bWVudDtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvYzogYW55KSB7XHJcbiAgICB0aGlzLmRvYyA9IGRvYztcclxuICB9XHJcblxyXG4gIC8qKiBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzY3JvbGwgYmFyIG9mIGBlbGAuICovXHJcbiAgc2V0U2Nyb2xsVG9wKGVsOiBFbGVtZW50IHwgV2luZG93LCB0b3BWYWx1ZTogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgaWYgKGVsID09PSB3aW5kb3cpIHtcclxuICAgICAgdGhpcy5kb2MuYm9keS5zY3JvbGxUb3AgPSB0b3BWYWx1ZTtcclxuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50IS5zY3JvbGxUb3AgPSB0b3BWYWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIChlbCBhcyBFbGVtZW50KS5zY3JvbGxUb3AgPSB0b3BWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBHZXQgcG9zaXRpb24gb2YgYGVsYCBhZ2FpbnN0IHdpbmRvdy4gKi9cclxuICBnZXRPZmZzZXQoZWw6IEVsZW1lbnQpOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XHJcbiAgICBjb25zdCByZXQgPSB7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMFxyXG4gICAgfTtcclxuICAgIGlmICghZWwgfHwgIWVsLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKHJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQpIHtcclxuICAgICAgY29uc3QgZG9jID0gZWwub3duZXJEb2N1bWVudCEuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgICByZXQudG9wID0gcmVjdC50b3AgLSBkb2MhLmNsaWVudFRvcDtcclxuICAgICAgcmV0LmxlZnQgPSByZWN0LmxlZnQgLSBkb2MhLmNsaWVudExlZnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXQudG9wID0gcmVjdC50b3A7XHJcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc2NvbGwgYmFyIG9mIGBlbGAuICovXHJcbiAgLy8gVE9ETzogcmVtb3ZlICd8IFdpbmRvdycgYXMgdGhlIGZhbGxiYWNrIGFscmVhZHkgaGFwcGVucyBoZXJlXHJcbiAgZ2V0U2Nyb2xsKGVsPzogRWxlbWVudCB8IFdpbmRvdywgdG9wOiBib29sZWFuID0gdHJ1ZSk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlbCA/IGVsIDogd2luZG93O1xyXG4gICAgY29uc3QgcHJvcCA9IHRvcCA/ICdwYWdlWU9mZnNldCcgOiAncGFnZVhPZmZzZXQnO1xyXG4gICAgY29uc3QgbWV0aG9kID0gdG9wID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XHJcbiAgICBjb25zdCBpc1dpbmRvdyA9IHRhcmdldCA9PT0gd2luZG93O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IHJldCA9IGlzV2luZG93ID8gdGFyZ2V0W3Byb3BdIDogdGFyZ2V0W21ldGhvZF07XHJcbiAgICBpZiAoaXNXaW5kb3cgJiYgdHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0ID0gdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50IVttZXRob2RdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjcm9sbCBgZWxgIHRvIHNvbWUgcG9zaXRpb24gd2l0aCBhbmltYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29udGFpbmVyRWwgY29udGFpbmVyLCBgd2luZG93YCBieSBkZWZhdWx0XHJcbiAgICogQHBhcmFtIHRhcmdldFRvcFZhbHVlIFNjcm9sbCB0byBgdG9wYCwgMCBieSBkZWZhdWx0XHJcbiAgICogQHBhcmFtIGVhc2luZyBUcmFuc2l0aW9uIGN1cnZlLCBgZWFzZUluT3V0Q3ViaWNgIGJ5IGRlZmF1bHRcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sgY2FsbGJhY2sgaW52b2tlZCB3aGVuIHRyYW5zaXRpb24gaXMgZG9uZVxyXG4gICAqL1xyXG4gIHNjcm9sbFRvKGNvbnRhaW5lckVsOiBFbGVtZW50IHwgV2luZG93LCB0YXJnZXRUb3BWYWx1ZTogbnVtYmVyID0gMCwgZWFzaW5nPzogRWFzeWluZ0ZuLCBjYWxsYmFjaz86ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGNvbnRhaW5lckVsID8gY29udGFpbmVyRWwgOiB3aW5kb3c7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbCh0YXJnZXQpO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IGZyYW1lRnVuYyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgY29uc3QgdGltZSA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcclxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3AodGFyZ2V0LCAoZWFzaW5nIHx8IGVhc2VJbk91dEN1YmljKSh0aW1lLCBzY3JvbGxUb3AsIHRhcmdldFRvcFZhbHVlLCA0NTApKTtcclxuICAgICAgaWYgKHRpbWUgPCA0NTApIHtcclxuICAgICAgICByZXFBbmltRnJhbWUoZnJhbWVGdW5jKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxQW5pbUZyYW1lKGZyYW1lRnVuYyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU0NST0xMX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShkb2M6IERvY3VtZW50LCBzY3JvbGxTZXJ2aWNlOiBOelNjcm9sbFNlcnZpY2UpOiBOelNjcm9sbFNlcnZpY2Uge1xyXG4gIHJldHVybiBzY3JvbGxTZXJ2aWNlIHx8IG5ldyBOelNjcm9sbFNlcnZpY2UoZG9jKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOelNjcm9sbFNlcnZpY2UsXHJcbiAgdXNlRmFjdG9yeTogU0NST0xMX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcclxuICBkZXBzOiBbRE9DVU1FTlQsIFtuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE56U2Nyb2xsU2VydmljZV1dXHJcbn07XHJcbiJdfQ==