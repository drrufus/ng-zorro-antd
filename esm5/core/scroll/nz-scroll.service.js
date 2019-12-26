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
    var cc = c - b;
    /** @type {?} */
    var tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
var NzScrollService = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzScrollService(doc) {
        this.doc = doc;
    }
    /** Set the position of the scroll bar of `el`. */
    /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    NzScrollService.prototype.setScrollTop = /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    function (el, topValue) {
        if (topValue === void 0) { topValue = 0; }
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            (/** @type {?} */ (this.doc.documentElement)).scrollTop = topValue;
        }
        else {
            ((/** @type {?} */ (el))).scrollTop = topValue;
        }
    };
    /** Get position of `el` against window. */
    /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    NzScrollService.prototype.getOffset = /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        /** @type {?} */
        var rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            var doc = (/** @type {?} */ (el.ownerDocument)).documentElement;
            ret.top = rect.top - (/** @type {?} */ (doc)).clientTop;
            ret.left = rect.left - (/** @type {?} */ (doc)).clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    };
    /** Get the position of the scoll bar of `el`. */
    // TODO: remove '| Window' as the fallback already happens here
    /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    NzScrollService.prototype.getScroll = /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    function (el, top) {
        if (top === void 0) { top = true; }
        /** @type {?} */
        var target = el ? el : window;
        /** @type {?} */
        var prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        var method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        var isWindow = target === window;
        // @ts-ignore
        /** @type {?} */
        var ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = (/** @type {?} */ (this.doc.documentElement))[method];
        }
        return ret;
    };
    /**
     * Scroll `el` to some position with animation.
     *
     * @param containerEl container, `window` by default
     * @param targetTopValue Scroll to `top`, 0 by default
     * @param easing Transition curve, `easeInOutCubic` by default
     * @param callback callback invoked when transition is done
     */
    /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    NzScrollService.prototype.scrollTo = /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    function (containerEl, targetTopValue, easing, callback) {
        var _this = this;
        if (targetTopValue === void 0) { targetTopValue = 0; }
        /** @type {?} */
        var target = containerEl ? containerEl : window;
        /** @type {?} */
        var scrollTop = this.getScroll(target);
        /** @type {?} */
        var startTime = Date.now();
        /** @type {?} */
        var frameFunc = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var timestamp = Date.now();
            /** @type {?} */
            var time = timestamp - startTime;
            _this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
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
    };
    NzScrollService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return NzScrollService;
}());
export { NzScrollService };
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
export var SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7OztBQUk3RCxTQUFTLGNBQWMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTOztRQUMxRCxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7O1FBQ1osRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDcEM7U0FBTTtRQUNMLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUM7QUFFRDtJQUlFLHFDQUFxQztJQUNyQyx5QkFBOEIsR0FBUTtRQUNwQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsa0RBQWtEOzs7Ozs7O0lBQ2xELHNDQUFZOzs7Ozs7SUFBWixVQUFhLEVBQW9CLEVBQUUsUUFBb0I7UUFBcEIseUJBQUEsRUFBQSxZQUFvQjtRQUNyRCxJQUFJLEVB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LENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sSUFBSSxjQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVGLElBQUksSUFBSSxHQUFHLEdBQUcsRUFBRTtnQkFDZCxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxFQUFFLENBQUM7aUJBQ1o7YUFDRjtRQUNILENBQUMsQ0FBQTtRQUNELFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkFsRkYsVUFBVTs7OztnREFLSSxNQUFNLFNBQUMsUUFBUTs7SUE4RTlCLHNCQUFDO0NBQUEsQUFuRkQsSUFtRkM7U0FsRlksZUFBZTs7Ozs7O0lBQzFCLDhCQUFzQjs7Ozs7OztBQW1GeEIsTUFBTSxVQUFVLCtCQUErQixDQUFDLEdBQWEsRUFBRSxhQUE4QjtJQUMzRixPQUFPLGFBQWEsSUFBSSxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxDQUFDOztBQUVELE1BQU0sS0FBTyx1QkFBdUIsR0FBYTtJQUMvQyxPQUFPLEVBQUUsZUFBZTtJQUN4QixVQUFVLEVBQUUsK0JBQStCO0lBQzNDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztDQUNwRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBQcm92aWRlciwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHJlcUFuaW1GcmFtZSB9IGZyb20gJy4uL3BvbHlmaWxsL3JlcXVlc3QtYW5pbWF0aW9uJztcclxuXHJcbmV4cG9ydCB0eXBlIEVhc3lpbmdGbiA9ICh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpID0+IG51bWJlcjtcclxuXHJcbmZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgY29uc3QgY2MgPSBjIC0gYjtcclxuICBsZXQgdHQgPSB0IC8gKGQgLyAyKTtcclxuICBpZiAodHQgPCAxKSB7XHJcbiAgICByZXR1cm4gKGNjIC8gMikgKiB0dCAqIHR0ICogdHQgKyBiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKGNjIC8gMikgKiAoKHR0IC09IDIpICogdHQgKiB0dCArIDIpICsgYjtcclxuICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE56U2Nyb2xsU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBkb2M6IERvY3VtZW50O1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnkpIHtcclxuICAgIHRoaXMuZG9jID0gZG9jO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbCBiYXIgb2YgYGVsYC4gKi9cclxuICBzZXRTY3JvbGxUb3AoZWw6IEVsZW1lbnQgfCBXaW5kb3csIHRvcFZhbHVlOiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICBpZiAoZWwgPT09IHdpbmRvdykge1xyXG4gICAgICB0aGlzLmRvYy5ib2R5LnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xyXG4gICAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQhLnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgKGVsIGFzIEVsZW1lbnQpLnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEdldCBwb3NpdGlvbiBvZiBgZWxgIGFnYWluc3Qgd2luZG93LiAqL1xyXG4gIGdldE9mZnNldChlbDogRWxlbWVudCk6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcclxuICAgIGNvbnN0IHJldCA9IHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwXHJcbiAgICB9O1xyXG4gICAgaWYgKCFlbCB8fCAhZWwuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAocmVjdC53aWR0aCB8fCByZWN0LmhlaWdodCkge1xyXG4gICAgICBjb25zdCBkb2MgPSBlbC5vd25lckRvY3VtZW50IS5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgIHJldC50b3AgPSByZWN0LnRvcCAtIGRvYyEuY2xpZW50VG9wO1xyXG4gICAgICByZXQubGVmdCA9IHJlY3QubGVmdCAtIGRvYyEuY2xpZW50TGVmdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldC50b3AgPSByZWN0LnRvcDtcclxuICAgICAgcmV0LmxlZnQgPSByZWN0LmxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIC8qKiBHZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzY29sbCBiYXIgb2YgYGVsYC4gKi9cclxuICAvLyBUT0RPOiByZW1vdmUgJ3wgV2luZG93JyBhcyB0aGUgZmFsbGJhY2sgYWxyZWFkeSBoYXBwZW5zIGhlcmVcclxuICBnZXRTY3JvbGwoZWw/OiBFbGVtZW50IHwgV2luZG93LCB0b3A6IGJvb2xlYW4gPSB0cnVlKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGVsID8gZWwgOiB3aW5kb3c7XHJcbiAgICBjb25zdCBwcm9wID0gdG9wID8gJ3BhZ2VZT2Zmc2V0JyA6ICdwYWdlWE9mZnNldCc7XHJcbiAgICBjb25zdCBtZXRob2QgPSB0b3AgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcclxuICAgIGNvbnN0IGlzV2luZG93ID0gdGFyZ2V0ID09PSB3aW5kb3c7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgcmV0ID0gaXNXaW5kb3cgPyB0YXJnZXRbcHJvcF0gOiB0YXJnZXRbbWV0aG9kXTtcclxuICAgIGlmIChpc1dpbmRvdyAmJiB0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xyXG4gICAgICByZXQgPSB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQhW21ldGhvZF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2Nyb2xsIGBlbGAgdG8gc29tZSBwb3NpdGlvbiB3aXRoIGFuaW1hdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb250YWluZXJFbCBjb250YWluZXIsIGB3aW5kb3dgIGJ5IGRlZmF1bHRcclxuICAgKiBAcGFyYW0gdGFyZ2V0VG9wVmFsdWUgU2Nyb2xsIHRvIGB0b3BgLCAwIGJ5IGRlZmF1bHRcclxuICAgKiBAcGFyYW0gZWFzaW5nIFRyYW5zaXRpb24gY3VydmUsIGBlYXNlSW5PdXRDdWJpY2AgYnkgZGVmYXVsdFxyXG4gICAqIEBwYXJhbSBjYWxsYmFjayBjYWxsYmFjayBpbnZva2VkIHdoZW4gdHJhbnNpdGlvbiBpcyBkb25lXHJcbiAgICovXHJcbiAgc2Nyb2xsVG8oY29udGFpbmVyRWw6IEVsZW1lbnQgfCBXaW5kb3csIHRhcmdldFRvcFZhbHVlOiBudW1iZXIgPSAwLCBlYXNpbmc/OiBFYXN5aW5nRm4sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gY29udGFpbmVyRWwgPyBjb250YWluZXJFbCA6IHdpbmRvdztcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsKHRhcmdldCk7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgZnJhbWVGdW5jID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBjb25zdCB0aW1lID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xyXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcCh0YXJnZXQsIChlYXNpbmcgfHwgZWFzZUluT3V0Q3ViaWMpKHRpbWUsIHNjcm9sbFRvcCwgdGFyZ2V0VG9wVmFsdWUsIDQ1MCkpO1xyXG4gICAgICBpZiAodGltZSA8IDQ1MCkge1xyXG4gICAgICAgIHJlcUFuaW1GcmFtZShmcmFtZUZ1bmMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXFBbmltRnJhbWUoZnJhbWVGdW5jKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTQ1JPTExfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZKGRvYzogRG9jdW1lbnQsIHNjcm9sbFNlcnZpY2U6IE56U2Nyb2xsU2VydmljZSk6IE56U2Nyb2xsU2VydmljZSB7XHJcbiAgcmV0dXJuIHNjcm9sbFNlcnZpY2UgfHwgbmV3IE56U2Nyb2xsU2VydmljZShkb2MpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU0NST0xMX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE56U2Nyb2xsU2VydmljZSxcclxuICB1c2VGYWN0b3J5OiBTQ1JPTExfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxyXG4gIGRlcHM6IFtET0NVTUVOVCwgW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTnpTY3JvbGxTZXJ2aWNlXV1cclxufTtcclxuIl19