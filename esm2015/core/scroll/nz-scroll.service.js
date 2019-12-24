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
    const cc = c - b;
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
    constructor(doc) {
        this.doc = doc;
    }
    /** Set the position of the scroll bar of `el`. */
    setScrollTop(el, topValue = 0) {
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            el.scrollTop = topValue;
        }
    }
    /** Get position of `el` against window. */
    getOffset(el) {
        const ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        const rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            const doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    }
    /** Get the position of the scoll bar of `el`. */
    // TODO: remove '| Window' as the fallback already happens here
    getScroll(el, top = true) {
        const target = el ? el : window;
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        const method = top ? 'scrollTop' : 'scrollLeft';
        const isWindow = target === window;
        // @ts-ignore
        let ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = this.doc.documentElement[method];
        }
        return ret;
    }
    /**
     * Scroll `el` to some position with animation.
     *
     * @param containerEl container, `window` by default
     * @param targetTopValue Scroll to `top`, 0 by default
     * @param easing Transition curve, `easeInOutCubic` by default
     * @param callback callback invoked when transition is done
     */
    scrollTo(containerEl, targetTopValue = 0, easing, callback) {
        const target = containerEl ? containerEl : window;
        const scrollTop = this.getScroll(target);
        const startTime = Date.now();
        const frameFunc = () => {
            const timestamp = Date.now();
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
        };
        reqAnimFrame(frameFunc);
    }
}
/** @nocollapse */ NzScrollService.ɵfac = function NzScrollService_Factory(t) { return new (t || NzScrollService)(i0.ɵɵinject(DOCUMENT)); };
/** @nocollapse */ NzScrollService.ɵprov = i0.ɵɵdefineInjectable({ token: NzScrollService, factory: NzScrollService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzScrollService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
export function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
export const SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUk3RCxTQUFTLGNBQWMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO0lBQ2hFLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3BDO1NBQU07UUFDTCxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDO0FBR0QsTUFBTSxPQUFPLGVBQWU7SUFHMUIscUNBQXFDO0lBQ3JDLFlBQThCLEdBQVE7UUFDcEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELGtEQUFrRDtJQUNsRCxZQUFZLENBQUMsRUFBb0IsRUFBRSxXQUFtQixDQUFDO1FBQ3JELElBQUksRUFBRSxL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QyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUYsSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFO2dCQUNkLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsRUFBRTtvQkFDWixRQUFRLEVBQUUsQ0FBQztpQkFDWjthQUNGO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OzhFQWpGVSxlQUFlLGNBSU4sUUFBUTt1REFKakIsZUFBZSxXQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUQzQixVQUFVOztzQkFLSSxNQUFNO3VCQUFDLFFBQVE7O0FBZ0Y5QixNQUFNLFVBQVUsK0JBQStCLENBQUMsR0FBYSxFQUFFLGFBQThCO0lBQzNGLE9BQU8sYUFBYSxJQUFJLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBYTtJQUMvQyxPQUFPLEVBQUUsZUFBZTtJQUN4QixVQUFVLEVBQUUsK0JBQStCO0lBQzNDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztDQUNwRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFByb3ZpZGVyLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgcmVxQW5pbUZyYW1lIH0gZnJvbSAnLi4vcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xyXG5cclxuZXhwb3J0IHR5cGUgRWFzeWluZ0ZuID0gKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gbnVtYmVyO1xyXG5cclxuZnVuY3Rpb24gZWFzZUluT3V0Q3ViaWModDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcclxuICBjb25zdCBjYyA9IGMgLSBiO1xyXG4gIGxldCB0dCA9IHQgLyAoZCAvIDIpO1xyXG4gIGlmICh0dCA8IDEpIHtcclxuICAgIHJldHVybiAoY2MgLyAyKSAqIHR0ICogdHQgKiB0dCArIGI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoY2MgLyAyKSAqICgodHQgLT0gMikgKiB0dCAqIHR0ICsgMikgKyBiO1xyXG4gIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTnpTY3JvbGxTZXJ2aWNlIHtcclxuICBwcml2YXRlIGRvYzogRG9jdW1lbnQ7XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2M6IGFueSkge1xyXG4gICAgdGhpcy5kb2MgPSBkb2M7XHJcbiAgfVxyXG5cclxuICAvKiogU2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc2Nyb2xsIGJhciBvZiBgZWxgLiAqL1xyXG4gIHNldFNjcm9sbFRvcChlbDogRWxlbWVudCB8IFdpbmRvdywgdG9wVmFsdWU6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgIGlmIChlbCA9PT0gd2luZG93KSB7XHJcbiAgICAgIHRoaXMuZG9jLmJvZHkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XHJcbiAgICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudCEuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAoZWwgYXMgRWxlbWVudCkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IHBvc2l0aW9uIG9mIGBlbGAgYWdhaW5zdCB3aW5kb3cuICovXHJcbiAgZ2V0T2Zmc2V0KGVsOiBFbGVtZW50KTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xyXG4gICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDBcclxuICAgIH07XHJcbiAgICBpZiAoIWVsIHx8ICFlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmIChyZWN0LndpZHRoIHx8IHJlY3QuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGRvYyA9IGVsLm93bmVyRG9jdW1lbnQhLmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgcmV0LnRvcCA9IHJlY3QudG9wIC0gZG9jIS5jbGllbnRUb3A7XHJcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0IC0gZG9jIS5jbGllbnRMZWZ0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0LnRvcCA9IHJlY3QudG9wO1xyXG4gICAgICByZXQubGVmdCA9IHJlY3QubGVmdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldCB0aGUgcG9zaXRpb24gb2YgdGhlIHNjb2xsIGJhciBvZiBgZWxgLiAqL1xyXG4gIC8vIFRPRE86IHJlbW92ZSAnfCBXaW5kb3cnIGFzIHRoZSBmYWxsYmFjayBhbHJlYWR5IGhhcHBlbnMgaGVyZVxyXG4gIGdldFNjcm9sbChlbD86IEVsZW1lbnQgfCBXaW5kb3csIHRvcDogYm9vbGVhbiA9IHRydWUpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZWwgPyBlbCA6IHdpbmRvdztcclxuICAgIGNvbnN0IHByb3AgPSB0b3AgPyAncGFnZVlPZmZzZXQnIDogJ3BhZ2VYT2Zmc2V0JztcclxuICAgIGNvbnN0IG1ldGhvZCA9IHRvcCA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xyXG4gICAgY29uc3QgaXNXaW5kb3cgPSB0YXJnZXQgPT09IHdpbmRvdztcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGxldCByZXQgPSBpc1dpbmRvdyA/IHRhcmdldFtwcm9wXSA6IHRhcmdldFttZXRob2RdO1xyXG4gICAgaWYgKGlzV2luZG93ICYmIHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJldCA9IHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudCFbbWV0aG9kXTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY3JvbGwgYGVsYCB0byBzb21lIHBvc2l0aW9uIHdpdGggYW5pbWF0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbnRhaW5lckVsIGNvbnRhaW5lciwgYHdpbmRvd2AgYnkgZGVmYXVsdFxyXG4gICAqIEBwYXJhbSB0YXJnZXRUb3BWYWx1ZSBTY3JvbGwgdG8gYHRvcGAsIDAgYnkgZGVmYXVsdFxyXG4gICAqIEBwYXJhbSBlYXNpbmcgVHJhbnNpdGlvbiBjdXJ2ZSwgYGVhc2VJbk91dEN1YmljYCBieSBkZWZhdWx0XHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIGNhbGxiYWNrIGludm9rZWQgd2hlbiB0cmFuc2l0aW9uIGlzIGRvbmVcclxuICAgKi9cclxuICBzY3JvbGxUbyhjb250YWluZXJFbDogRWxlbWVudCB8IFdpbmRvdywgdGFyZ2V0VG9wVmFsdWU6IG51bWJlciA9IDAsIGVhc2luZz86IEVhc3lpbmdGbiwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBjb250YWluZXJFbCA/IGNvbnRhaW5lckVsIDogd2luZG93O1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGwodGFyZ2V0KTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICBjb25zdCBmcmFtZUZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSB0aW1lc3RhbXAgLSBzdGFydFRpbWU7XHJcbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHRhcmdldCwgKGVhc2luZyB8fCBlYXNlSW5PdXRDdWJpYykodGltZSwgc2Nyb2xsVG9wLCB0YXJnZXRUb3BWYWx1ZSwgNDUwKSk7XHJcbiAgICAgIGlmICh0aW1lIDwgNDUwKSB7XHJcbiAgICAgICAgcmVxQW5pbUZyYW1lKGZyYW1lRnVuYyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJlcUFuaW1GcmFtZShmcmFtZUZ1bmMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZG9jOiBEb2N1bWVudCwgc2Nyb2xsU2VydmljZTogTnpTY3JvbGxTZXJ2aWNlKTogTnpTY3JvbGxTZXJ2aWNlIHtcclxuICByZXR1cm4gc2Nyb2xsU2VydmljZSB8fCBuZXcgTnpTY3JvbGxTZXJ2aWNlKGRvYyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTQ1JPTExfU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTnpTY3JvbGxTZXJ2aWNlLFxyXG4gIHVzZUZhY3Rvcnk6IFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXHJcbiAgZGVwczogW0RPQ1VNRU5ULCBbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBOelNjcm9sbFNlcnZpY2VdXVxyXG59O1xyXG4iXX0=