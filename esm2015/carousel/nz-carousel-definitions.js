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
import { InjectionToken } from '@angular/core';
/**
 * @record
 */
export function NzCarouselComponentAsSource() { }
if (false) {
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.carouselContents;
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.el;
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.nzTransitionSpeed;
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.vertical;
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.slickListEl;
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.slickTrackEl;
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.activeIndex;
}
/**
 * @record
 */
export function NzCarouselStrategyRegistryItem() { }
if (false) {
    /** @type {?} */
    NzCarouselStrategyRegistryItem.prototype.name;
    /** @type {?} */
    NzCarouselStrategyRegistryItem.prototype.strategy;
}
/** @type {?} */
export const NZ_CAROUSEL_CUSTOM_STRATEGIES = new InjectionToken('nz-carousel-custom-strategies');
/**
 * @record
 */
export function PointerVector() { }
if (false) {
    /** @type {?} */
    PointerVector.prototype.x;
    /** @type {?} */
    PointerVector.prototype.y;
}
/**
 * @record
 */
export function FromToInterface() { }
if (false) {
    /** @type {?} */
    FromToInterface.prototype.from;
    /** @type {?} */
    FromToInterface.prototype.to;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwtZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Nhcm91c2VsLyIsInNvdXJjZXMiOlsibnotY2Fyb3VzZWwtZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsY0FBYyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7O0FBTzFELGlEQVFDOzs7SUFQQyx1REFBd0Q7O0lBQ3hELHlDQUFnQjs7SUFDaEIsd0RBQTBCOztJQUMxQiwrQ0FBa0I7O0lBQ2xCLGtEQUF5Qjs7SUFDekIsbURBQTBCOztJQUMxQixrREFBb0I7Ozs7O0FBR3RCLG9EQUdDOzs7SUFGQyw4Q0FBYTs7SUFDYixrREFBaUM7OztBQUduQyxNQUFNLE9BQU8sNkJBQTZCLEdBQUcsSUFBSSxjQUFjLENBQzdELCtCQUErQixDQUNoQzs7OztBQUVELG1DQUdDOzs7SUFGQywwQkFBVTs7SUFDViwwQkFBVTs7Ozs7QUFHWixxQ0FHQzs7O0lBRkMsK0JBQWE7O0lBQ2IsNkJBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL256LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9iYXNlLXN0cmF0ZWd5JztcclxuXHJcbmV4cG9ydCB0eXBlIE56Q2Fyb3VzZWxFZmZlY3RzID0gJ2ZhZGUnIHwgJ3Njcm9sbHgnIHwgc3RyaW5nO1xyXG5leHBvcnQgdHlwZSBOekNhcm91c2VsRG90UG9zaXRpb24gPSAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8IHN0cmluZztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpDYXJvdXNlbENvbXBvbmVudEFzU291cmNlIHtcclxuICBjYXJvdXNlbENvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+O1xyXG4gIGVsOiBIVE1MRWxlbWVudDtcclxuICBuelRyYW5zaXRpb25TcGVlZDogbnVtYmVyO1xyXG4gIHZlcnRpY2FsOiBib29sZWFuO1xyXG4gIHNsaWNrTGlzdEVsOiBIVE1MRWxlbWVudDtcclxuICBzbGlja1RyYWNrRWw6IEhUTUxFbGVtZW50O1xyXG4gIGFjdGl2ZUluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpDYXJvdXNlbFN0cmF0ZWd5UmVnaXN0cnlJdGVtIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc3RyYXRlZ3k6IE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3k7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOWl9DQVJPVVNFTF9DVVNUT01fU1RSQVRFR0lFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOekNhcm91c2VsU3RyYXRlZ3lSZWdpc3RyeUl0ZW1bXT4oXHJcbiAgJ256LWNhcm91c2VsLWN1c3RvbS1zdHJhdGVnaWVzJ1xyXG4pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludGVyVmVjdG9yIHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZyb21Ub0ludGVyZmFjZSB7XHJcbiAgZnJvbTogbnVtYmVyO1xyXG4gIHRvOiBudW1iZXI7XHJcbn1cclxuIl19