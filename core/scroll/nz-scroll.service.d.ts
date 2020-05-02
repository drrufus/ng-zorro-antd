/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Provider } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare type EasyingFn = (t: number, b: number, c: number, d: number) => number;
export declare class NzScrollService {
    private doc;
    constructor(doc: any);
    /** Set the position of the scroll bar of `el`. */
    setScrollTop(el: Element | Window, topValue?: number): void;
    /** Get position of `el` against window. */
    getOffset(el: Element): {
        top: number;
        left: number;
    };
    /** Get the position of the scoll bar of `el`. */
    getScroll(el?: Element | Window, top?: boolean): number;
    /**
     * Scroll `el` to some position with animation.
     *
     * @param containerEl container, `window` by default
     * @param targetTopValue Scroll to `top`, 0 by default
     * @param easing Transition curve, `easeInOutCubic` by default
     * @param callback callback invoked when transition is done
     */
    scrollTo(containerEl: Element | Window, targetTopValue?: number, easing?: EasyingFn, callback?: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzScrollService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzScrollService>;
}
export declare function SCROLL_SERVICE_PROVIDER_FACTORY(doc: Document, scrollService: NzScrollService): NzScrollService;
export declare const SCROLL_SERVICE_PROVIDER: Provider;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibnotc2Nyb2xsLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIEVhc3lpbmdGbiA9ICh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpID0+IG51bWJlcjtcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpTY3JvbGxTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgZG9jO1xyXG4gICAgY29uc3RydWN0b3IoZG9jOiBhbnkpO1xyXG4gICAgLyoqIFNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbCBiYXIgb2YgYGVsYC4gKi9cclxuICAgIHNldFNjcm9sbFRvcChlbDogRWxlbWVudCB8IFdpbmRvdywgdG9wVmFsdWU/OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgLyoqIEdldCBwb3NpdGlvbiBvZiBgZWxgIGFnYWluc3Qgd2luZG93LiAqL1xyXG4gICAgZ2V0T2Zmc2V0KGVsOiBFbGVtZW50KToge1xyXG4gICAgICAgIHRvcDogbnVtYmVyO1xyXG4gICAgICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIH07XHJcbiAgICAvKiogR2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc2NvbGwgYmFyIG9mIGBlbGAuICovXHJcbiAgICBnZXRTY3JvbGwoZWw/OiBFbGVtZW50IHwgV2luZG93LCB0b3A/OiBib29sZWFuKTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTY3JvbGwgYGVsYCB0byBzb21lIHBvc2l0aW9uIHdpdGggYW5pbWF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb250YWluZXJFbCBjb250YWluZXIsIGB3aW5kb3dgIGJ5IGRlZmF1bHRcclxuICAgICAqIEBwYXJhbSB0YXJnZXRUb3BWYWx1ZSBTY3JvbGwgdG8gYHRvcGAsIDAgYnkgZGVmYXVsdFxyXG4gICAgICogQHBhcmFtIGVhc2luZyBUcmFuc2l0aW9uIGN1cnZlLCBgZWFzZUluT3V0Q3ViaWNgIGJ5IGRlZmF1bHRcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBjYWxsYmFjayBpbnZva2VkIHdoZW4gdHJhbnNpdGlvbiBpcyBkb25lXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbFRvKGNvbnRhaW5lckVsOiBFbGVtZW50IHwgV2luZG93LCB0YXJnZXRUb3BWYWx1ZT86IG51bWJlciwgZWFzaW5nPzogRWFzeWluZ0ZuLCBjYWxsYmFjaz86ICgpID0+IHZvaWQpOiB2b2lkO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZG9jOiBEb2N1bWVudCwgc2Nyb2xsU2VydmljZTogTnpTY3JvbGxTZXJ2aWNlKTogTnpTY3JvbGxTZXJ2aWNlO1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBTQ1JPTExfU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXI7XHJcbiJdfQ==