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
import * as i0 from "@angular/core";
function easeInOutCubic(t, b, c, d) {
    var cc = c - b;
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
    NzScrollService.prototype.setScrollTop = function (el, topValue) {
        if (topValue === void 0) { topValue = 0; }
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            el.scrollTop = topValue;
        }
    };
    /** Get position of `el` against window. */
    NzScrollService.prototype.getOffset = function (el) {
        var ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        var rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            var doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    };
    /** Get the position of the scoll bar of `el`. */
    // TODO: remove '| Window' as the fallback already happens here
    NzScrollService.prototype.getScroll = function (el, top) {
        if (top === void 0) { top = true; }
        var target = el ? el : window;
        var prop = top ? 'pageYOffset' : 'pageXOffset';
        var method = top ? 'scrollTop' : 'scrollLeft';
        var isWindow = target === window;
        // @ts-ignore
        var ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = this.doc.documentElement[method];
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
    NzScrollService.prototype.scrollTo = function (containerEl, targetTopValue, easing, callback) {
        var _this = this;
        if (targetTopValue === void 0) { targetTopValue = 0; }
        var target = containerEl ? containerEl : window;
        var scrollTop = this.getScroll(target);
        var startTime = Date.now();
        var frameFunc = function () {
            var timestamp = Date.now();
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
        };
        reqAnimFrame(frameFunc);
    };
    /** @nocollapse */ NzScrollService.ɵfac = function NzScrollService_Factory(t) { return new (t || NzScrollService)(i0.ɵɵinject(DOCUMENT)); };
    /** @nocollapse */ NzScrollService.ɵprov = i0.ɵɵdefineInjectable({ token: NzScrollService, factory: NzScrollService.ɵfac });
    return NzScrollService;
}());
export { NzScrollService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzScrollService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
export function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
export var SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUk3RCxTQUFTLGNBQWMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO0lBQ2hFLElBQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3BDO1NBQU07UUFDTCxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDO0FBRUQ7SUFJRSxxQ0FBcUM7SUFDckMseUJBQThCLEdBQVE7UUFDcEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELGtEQUFrRDtJQUNsRCxzQ0FBWSxHQUFaLFVBQWEsRUFBb0IsRUFBRSxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW9CO1FBQ3JELElB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QUFTLENBQUM7WUFDbkMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLElBQUksY0FBYyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1RixJQUFJLElBQUksR0FBRyxHQUFHLEVBQUU7Z0JBQ2QsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLElBQUksUUFBUSxFQUFFO29CQUNaLFFBQVEsRUFBRSxDQUFDO2lCQUNaO2FBQ0Y7UUFDSCxDQUFDLENBQUM7UUFDRixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUIsQ0FBQztrRkFqRlUsZUFBZSxjQUlOLFFBQVE7MkRBSmpCLGVBQWUsV0FBZixlQUFlOzBCQTFCNUI7Q0E0R0MsQUFuRkQsSUFtRkM7U0FsRlksZUFBZTtrREFBZixlQUFlO2NBRDNCLFVBQVU7O3NCQUtJLE1BQU07dUJBQUMsUUFBUTs7QUFnRjlCLE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxHQUFhLEVBQUUsYUFBOEI7SUFDM0YsT0FBTyxhQUFhLElBQUksSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFhO0lBQy9DLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLFVBQVUsRUFBRSwrQkFBK0I7SUFDM0MsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0NBQ3BFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyByZXFBbmltRnJhbWUgfSBmcm9tICcuLi9wb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbic7XHJcblxyXG5leHBvcnQgdHlwZSBFYXN5aW5nRm4gPSAodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKSA9PiBudW1iZXI7XHJcblxyXG5mdW5jdGlvbiBlYXNlSW5PdXRDdWJpYyh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGNvbnN0IGNjID0gYyAtIGI7XHJcbiAgbGV0IHR0ID0gdCAvIChkIC8gMik7XHJcbiAgaWYgKHR0IDwgMSkge1xyXG4gICAgcmV0dXJuIChjYyAvIDIpICogdHQgKiB0dCAqIHR0ICsgYjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChjYyAvIDIpICogKCh0dCAtPSAyKSAqIHR0ICogdHQgKyAyKSArIGI7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelNjcm9sbFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZG9jOiBEb2N1bWVudDtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvYzogYW55KSB7XHJcbiAgICB0aGlzLmRvYyA9IGRvYztcclxuICB9XHJcblxyXG4gIC8qKiBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzY3JvbGwgYmFyIG9mIGBlbGAuICovXHJcbiAgc2V0U2Nyb2xsVG9wKGVsOiBFbGVtZW50IHwgV2luZG93LCB0b3BWYWx1ZTogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgaWYgKGVsID09PSB3aW5kb3cpIHtcclxuICAgICAgdGhpcy5kb2MuYm9keS5zY3JvbGxUb3AgPSB0b3BWYWx1ZTtcclxuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50IS5zY3JvbGxUb3AgPSB0b3BWYWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIChlbCBhcyBFbGVtZW50KS5zY3JvbGxUb3AgPSB0b3BWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBHZXQgcG9zaXRpb24gb2YgYGVsYCBhZ2FpbnN0IHdpbmRvdy4gKi9cclxuICBnZXRPZmZzZXQoZWw6IEVsZW1lbnQpOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XHJcbiAgICBjb25zdCByZXQgPSB7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMFxyXG4gICAgfTtcclxuICAgIGlmICghZWwgfHwgIWVsLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKHJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQpIHtcclxuICAgICAgY29uc3QgZG9jID0gZWwub3duZXJEb2N1bWVudCEuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgICByZXQudG9wID0gcmVjdC50b3AgLSBkb2MhLmNsaWVudFRvcDtcclxuICAgICAgcmV0LmxlZnQgPSByZWN0LmxlZnQgLSBkb2MhLmNsaWVudExlZnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXQudG9wID0gcmVjdC50b3A7XHJcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc2NvbGwgYmFyIG9mIGBlbGAuICovXHJcbiAgLy8gVE9ETzogcmVtb3ZlICd8IFdpbmRvdycgYXMgdGhlIGZhbGxiYWNrIGFscmVhZHkgaGFwcGVucyBoZXJlXHJcbiAgZ2V0U2Nyb2xsKGVsPzogRWxlbWVudCB8IFdpbmRvdywgdG9wOiBib29sZWFuID0gdHJ1ZSk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlbCA/IGVsIDogd2luZG93O1xyXG4gICAgY29uc3QgcHJvcCA9IHRvcCA/ICdwYWdlWU9mZnNldCcgOiAncGFnZVhPZmZzZXQnO1xyXG4gICAgY29uc3QgbWV0aG9kID0gdG9wID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XHJcbiAgICBjb25zdCBpc1dpbmRvdyA9IHRhcmdldCA9PT0gd2luZG93O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IHJldCA9IGlzV2luZG93ID8gdGFyZ2V0W3Byb3BdIDogdGFyZ2V0W21ldGhvZF07XHJcbiAgICBpZiAoaXNXaW5kb3cgJiYgdHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0ID0gdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50IVttZXRob2RdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjcm9sbCBgZWxgIHRvIHNvbWUgcG9zaXRpb24gd2l0aCBhbmltYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29udGFpbmVyRWwgY29udGFpbmVyLCBgd2luZG93YCBieSBkZWZhdWx0XHJcbiAgICogQHBhcmFtIHRhcmdldFRvcFZhbHVlIFNjcm9sbCB0byBgdG9wYCwgMCBieSBkZWZhdWx0XHJcbiAgICogQHBhcmFtIGVhc2luZyBUcmFuc2l0aW9uIGN1cnZlLCBgZWFzZUluT3V0Q3ViaWNgIGJ5IGRlZmF1bHRcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sgY2FsbGJhY2sgaW52b2tlZCB3aGVuIHRyYW5zaXRpb24gaXMgZG9uZVxyXG4gICAqL1xyXG4gIHNjcm9sbFRvKGNvbnRhaW5lckVsOiBFbGVtZW50IHwgV2luZG93LCB0YXJnZXRUb3BWYWx1ZTogbnVtYmVyID0gMCwgZWFzaW5nPzogRWFzeWluZ0ZuLCBjYWxsYmFjaz86ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGNvbnRhaW5lckVsID8gY29udGFpbmVyRWwgOiB3aW5kb3c7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbCh0YXJnZXQpO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IGZyYW1lRnVuYyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgY29uc3QgdGltZSA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcclxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3AodGFyZ2V0LCAoZWFzaW5nIHx8IGVhc2VJbk91dEN1YmljKSh0aW1lLCBzY3JvbGxUb3AsIHRhcmdldFRvcFZhbHVlLCA0NTApKTtcclxuICAgICAgaWYgKHRpbWUgPCA0NTApIHtcclxuICAgICAgICByZXFBbmltRnJhbWUoZnJhbWVGdW5jKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxQW5pbUZyYW1lKGZyYW1lRnVuYyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU0NST0xMX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShkb2M6IERvY3VtZW50LCBzY3JvbGxTZXJ2aWNlOiBOelNjcm9sbFNlcnZpY2UpOiBOelNjcm9sbFNlcnZpY2Uge1xyXG4gIHJldHVybiBzY3JvbGxTZXJ2aWNlIHx8IG5ldyBOelNjcm9sbFNlcnZpY2UoZG9jKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOelNjcm9sbFNlcnZpY2UsXHJcbiAgdXNlRmFjdG9yeTogU0NST0xMX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcclxuICBkZXBzOiBbRE9DVU1FTlQsIFtuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE56U2Nyb2xsU2VydmljZV1dXHJcbn07XHJcbiJdfQ==