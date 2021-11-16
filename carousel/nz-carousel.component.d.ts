/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, QueryList, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NzConfigService, NzDomEventService, NzDragService } from 'ng-zorro-antd/core';
import { NzCarouselContentDirective } from './nz-carousel-content.directive';
import { FromToInterface, NzCarouselDotPosition, NzCarouselEffects, NzCarouselStrategyRegistryItem } from './nz-carousel-definitions';
import { NzCarouselBaseStrategy } from './strategies/base-strategy';
import * as ɵngcc0 from '@angular/core';
export declare class NzCarouselComponent implements AfterContentInit, AfterViewInit, OnDestroy, OnChanges {
    readonly nzConfigService: NzConfigService;
    private readonly renderer;
    private readonly cdr;
    private readonly platform;
    private readonly nzDomEventService;
    private readonly nzDragService;
    private customStrategies;
    carouselContents: QueryList<NzCarouselContentDirective>;
    slickList: ElementRef;
    slickTrack: ElementRef;
    nzDotRender: TemplateRef<{
        $implicit: number;
    }>;
    nzEffect: NzCarouselEffects;
    nzEnableSwipe: boolean;
    nzDots: boolean;
    nzAutoPlay: boolean;
    nzAutoPlaySpeed: number;
    nzTransitionSpeed: number;
    nzVertical: boolean;
    nzDotPosition: NzCarouselDotPosition;
    private _dotPosition;
    readonly nzBeforeChange: EventEmitter<FromToInterface>;
    readonly nzAfterChange: EventEmitter<number>;
    activeIndex: number;
    el: HTMLElement;
    slickListEl: HTMLElement;
    slickTrackEl: HTMLElement;
    strategy: NzCarouselBaseStrategy;
    vertical: boolean;
    transitionInProgress: number | null;
    private destroy$;
    private gestureRect;
    private pointerDelta;
    private isTransiting;
    private isDragging;
    constructor(elementRef: ElementRef, nzConfigService: NzConfigService, renderer: Renderer2, cdr: ChangeDetectorRef, platform: Platform, nzDomEventService: NzDomEventService, nzDragService: NzDragService, customStrategies: NzCarouselStrategyRegistryItem[]);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onKeyDown(e: KeyboardEvent): void;
    next(): void;
    pre(): void;
    goTo(index: number): void;
    private switchStrategy;
    private scheduleNextTransition;
    private clearScheduledTransition;
    private markContentActive;
    /**
     * Drag carousel.
     * @param event
     */
    pointerDown: (event: TouchEvent | MouseEvent) => void;
    private syncStrategy;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCarouselComponent, [null, null, null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCarouselComponent, "nz-carousel", ["nzCarousel"], { "nzTransitionSpeed": "nzTransitionSpeed"; "nzVertical": "nzVertical"; "nzDotPosition": "nzDotPosition"; "nzDotRender": "nzDotRender"; "nzEffect": "nzEffect"; "nzEnableSwipe": "nzEnableSwipe"; "nzDots": "nzDots"; "nzAutoPlay": "nzAutoPlay"; "nzAutoPlaySpeed": "nzAutoPlaySpeed"; }, { "nzBeforeChange": "nzBeforeChange"; "nzAfterChange": "nzAfterChange"; }, ["carouselContents"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWNhcm91c2VsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIE56RG9tRXZlbnRTZXJ2aWNlLCBOekRyYWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL256LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRnJvbVRvSW50ZXJmYWNlLCBOekNhcm91c2VsRG90UG9zaXRpb24sIE56Q2Fyb3VzZWxFZmZlY3RzLCBOekNhcm91c2VsU3RyYXRlZ3lSZWdpc3RyeUl0ZW0gfSBmcm9tICcuL256LWNhcm91c2VsLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9iYXNlLXN0cmF0ZWd5JztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAgIHJlYWRvbmx5IG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbnpEb21FdmVudFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG56RHJhZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGN1c3RvbVN0cmF0ZWdpZXM7XHJcbiAgICBjYXJvdXNlbENvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+O1xyXG4gICAgc2xpY2tMaXN0OiBFbGVtZW50UmVmO1xyXG4gICAgc2xpY2tUcmFjazogRWxlbWVudFJlZjtcclxuICAgIG56RG90UmVuZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBudW1iZXI7XHJcbiAgICB9PjtcclxuICAgIG56RWZmZWN0OiBOekNhcm91c2VsRWZmZWN0cztcclxuICAgIG56RW5hYmxlU3dpcGU6IGJvb2xlYW47XHJcbiAgICBuekRvdHM6IGJvb2xlYW47XHJcbiAgICBuekF1dG9QbGF5OiBib29sZWFuO1xyXG4gICAgbnpBdXRvUGxheVNwZWVkOiBudW1iZXI7XHJcbiAgICBuelRyYW5zaXRpb25TcGVlZDogbnVtYmVyO1xyXG4gICAgbnpWZXJ0aWNhbDogYm9vbGVhbjtcclxuICAgIG56RG90UG9zaXRpb246IE56Q2Fyb3VzZWxEb3RQb3NpdGlvbjtcclxuICAgIHByaXZhdGUgX2RvdFBvc2l0aW9uO1xyXG4gICAgcmVhZG9ubHkgbnpCZWZvcmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGcm9tVG9JbnRlcmZhY2U+O1xyXG4gICAgcmVhZG9ubHkgbnpBZnRlckNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcbiAgICBhY3RpdmVJbmRleDogbnVtYmVyO1xyXG4gICAgZWw6IEhUTUxFbGVtZW50O1xyXG4gICAgc2xpY2tMaXN0RWw6IEhUTUxFbGVtZW50O1xyXG4gICAgc2xpY2tUcmFja0VsOiBIVE1MRWxlbWVudDtcclxuICAgIHN0cmF0ZWd5OiBOekNhcm91c2VsQmFzZVN0cmF0ZWd5O1xyXG4gICAgdmVydGljYWw6IGJvb2xlYW47XHJcbiAgICB0cmFuc2l0aW9uSW5Qcm9ncmVzczogbnVtYmVyIHwgbnVsbDtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBwcml2YXRlIGdlc3R1cmVSZWN0O1xyXG4gICAgcHJpdmF0ZSBwb2ludGVyRGVsdGE7XHJcbiAgICBwcml2YXRlIGlzVHJhbnNpdGluZztcclxuICAgIHByaXZhdGUgaXNEcmFnZ2luZztcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwbGF0Zm9ybTogUGxhdGZvcm0sIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZSwgbnpEcmFnU2VydmljZTogTnpEcmFnU2VydmljZSwgY3VzdG9tU3RyYXRlZ2llczogTnpDYXJvdXNlbFN0cmF0ZWd5UmVnaXN0cnlJdGVtW10pO1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZDtcclxuICAgIG5leHQoKTogdm9pZDtcclxuICAgIHByZSgpOiB2b2lkO1xyXG4gICAgZ29UbyhpbmRleDogbnVtYmVyKTogdm9pZDtcclxuICAgIHByaXZhdGUgc3dpdGNoU3RyYXRlZ3k7XHJcbiAgICBwcml2YXRlIHNjaGVkdWxlTmV4dFRyYW5zaXRpb247XHJcbiAgICBwcml2YXRlIGNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbjtcclxuICAgIHByaXZhdGUgbWFya0NvbnRlbnRBY3RpdmU7XHJcbiAgICAvKipcclxuICAgICAqIERyYWcgY2Fyb3VzZWwuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgcG9pbnRlckRvd246IChldmVudDogVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIHN5bmNTdHJhdGVneTtcclxufVxyXG4iXX0=