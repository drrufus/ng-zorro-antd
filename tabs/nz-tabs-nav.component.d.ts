/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** code from https://github.com/angular/material2 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NzDomEventService } from 'ng-zorro-antd/core';
import { Subscription } from 'rxjs';
import { NzTabLabelDirective } from './nz-tab-label.directive';
import { NzTabsInkBarDirective } from './nz-tabs-ink-bar.directive';
import { NzTabPositionMode } from './nz-tabset.component';
import * as ɵngcc0 from '@angular/core';
export declare type ScrollDirection = 'after' | 'before';
export declare class NzTabsNavComponent implements AfterContentChecked, AfterContentInit, OnDestroy {
    elementRef: ElementRef;
    private ngZone;
    private renderer;
    private cdr;
    private platform;
    private nzDomEventService;
    private dir;
    private _tabPositionMode;
    private _scrollDistance;
    private _selectedIndex;
    /** Cached text content of the header. */
    private currentTextContent;
    private destroy$;
    showPaginationControls: boolean;
    disableScrollAfter: boolean;
    disableScrollBefore: boolean;
    selectedIndexChanged: boolean;
    realignInkBar: Subscription | null;
    tabLabelCount: number;
    scrollDistanceChanged: boolean;
    listOfNzTabLabelDirective: QueryList<NzTabLabelDirective>;
    nzTabsInkBarDirective: NzTabsInkBarDirective;
    navContainerElement: ElementRef<HTMLDivElement>;
    navListElement: ElementRef<HTMLDivElement>;
    scrollListElement: ElementRef<HTMLDivElement>;
    readonly nzOnNextClick: EventEmitter<void>;
    readonly nzOnPrevClick: EventEmitter<void>;
    nzTabBarExtraContent: TemplateRef<void>;
    nzAnimated: boolean;
    nzHideBar: boolean;
    nzShowPagination: boolean;
    nzType: string;
    nzPositionMode: NzTabPositionMode;
    selectedIndex: number;
    constructor(elementRef: ElementRef, ngZone: NgZone, renderer: Renderer2, cdr: ChangeDetectorRef, platform: Platform, nzDomEventService: NzDomEventService, dir: Directionality);
    onContentChanges(): void;
    scrollHeader(scrollDir: ScrollDirection): void;
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    updateTabScrollPosition(): void;
    updatePagination(): void;
    checkPaginationEnabled(): void;
    scrollToLabel(labelIndex: number): void;
    checkScrollingControls(): void;
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    getMaxScrollDistance(): number;
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
    scrollDistance: number;
    readonly viewWidthHeightPix: number;
    readonly navContainerScrollPaddingPix: number;
    readonly tabListScrollWidthHeightPix: number;
    readonly tabListScrollOffSetWidthHeight: number;
    getLayoutDirection(): Direction;
    alignInkBarToSelectedTab(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTabsNavComponent, [null, null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTabsNavComponent, "[nz-tabs-nav]", ["nzTabsNav"], { "nzAnimated": "nzAnimated"; "nzHideBar": "nzHideBar"; "nzShowPagination": "nzShowPagination"; "nzType": "nzType"; "nzPositionMode": "nzPositionMode"; "selectedIndex": "selectedIndex"; "nzTabBarExtraContent": "nzTabBarExtraContent"; }, { "nzOnNextClick": "nzOnNextClick"; "nzOnPrevClick": "nzOnPrevClick"; }, ["listOfNzTabLabelDirective"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy1uYXYuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXRhYnMtbmF2LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuLyoqIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIgKi9cclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUsIE9uRGVzdHJveSwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56RG9tRXZlbnRTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56VGFiTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL256LXRhYi1sYWJlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelRhYnNJbmtCYXJEaXJlY3RpdmUgfSBmcm9tICcuL256LXRhYnMtaW5rLWJhci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelRhYlBvc2l0aW9uTW9kZSB9IGZyb20gJy4vbnotdGFic2V0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgU2Nyb2xsRGlyZWN0aW9uID0gJ2FmdGVyJyB8ICdiZWZvcmUnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelRhYnNOYXZDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgbmdab25lO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTtcclxuICAgIHByaXZhdGUgbnpEb21FdmVudFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRpcjtcclxuICAgIHByaXZhdGUgX3RhYlBvc2l0aW9uTW9kZTtcclxuICAgIHByaXZhdGUgX3Njcm9sbERpc3RhbmNlO1xyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDtcclxuICAgIC8qKiBDYWNoZWQgdGV4dCBjb250ZW50IG9mIHRoZSBoZWFkZXIuICovXHJcbiAgICBwcml2YXRlIGN1cnJlbnRUZXh0Q29udGVudDtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBzaG93UGFnaW5hdGlvbkNvbnRyb2xzOiBib29sZWFuO1xyXG4gICAgZGlzYWJsZVNjcm9sbEFmdGVyOiBib29sZWFuO1xyXG4gICAgZGlzYWJsZVNjcm9sbEJlZm9yZTogYm9vbGVhbjtcclxuICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2VkOiBib29sZWFuO1xyXG4gICAgcmVhbGlnbklua0JhcjogU3Vic2NyaXB0aW9uIHwgbnVsbDtcclxuICAgIHRhYkxhYmVsQ291bnQ6IG51bWJlcjtcclxuICAgIHNjcm9sbERpc3RhbmNlQ2hhbmdlZDogYm9vbGVhbjtcclxuICAgIGxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmU6IFF1ZXJ5TGlzdDxOelRhYkxhYmVsRGlyZWN0aXZlPjtcclxuICAgIG56VGFic0lua0JhckRpcmVjdGl2ZTogTnpUYWJzSW5rQmFyRGlyZWN0aXZlO1xyXG4gICAgbmF2Q29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgICBuYXZMaXN0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgICBzY3JvbGxMaXN0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgICByZWFkb25seSBuek9uTmV4dENsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBuek9uUHJldkNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICBuelRhYkJhckV4dHJhQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuekFuaW1hdGVkOiBib29sZWFuO1xyXG4gICAgbnpIaWRlQmFyOiBib29sZWFuO1xyXG4gICAgbnpTaG93UGFnaW5hdGlvbjogYm9vbGVhbjtcclxuICAgIG56VHlwZTogc3RyaW5nO1xyXG4gICAgbnpQb3NpdGlvbk1vZGU6IE56VGFiUG9zaXRpb25Nb2RlO1xyXG4gICAgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHBsYXRmb3JtOiBQbGF0Zm9ybSwgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlLCBkaXI6IERpcmVjdGlvbmFsaXR5KTtcclxuICAgIG9uQ29udGVudENoYW5nZXMoKTogdm9pZDtcclxuICAgIHNjcm9sbEhlYWRlcihzY3JvbGxEaXI6IFNjcm9sbERpcmVjdGlvbik6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIHVwZGF0ZVRhYlNjcm9sbFBvc2l0aW9uKCk6IHZvaWQ7XHJcbiAgICB1cGRhdGVQYWdpbmF0aW9uKCk6IHZvaWQ7XHJcbiAgICBjaGVja1BhZ2luYXRpb25FbmFibGVkKCk6IHZvaWQ7XHJcbiAgICBzY3JvbGxUb0xhYmVsKGxhYmVsSW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBjaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgd2hhdCBpcyB0aGUgbWF4aW11bSBsZW5ndGggaW4gcGl4ZWxzIHRoYXQgY2FuIGJlIHNldCBmb3IgdGhlIHNjcm9sbCBkaXN0YW5jZS4gVGhpc1xyXG4gICAgICogaXMgZXF1YWwgdG8gdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0aGUgdGFiIGxpc3QgY29udGFpbmVyIGFuZCB0YWIgaGVhZGVyIGNvbnRhaW5lci5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGlzIGFuIGV4cGVuc2l2ZSBjYWxsIHRoYXQgZm9yY2VzIGEgbGF5b3V0IHJlZmxvdyB0byBjb21wdXRlIGJveCBhbmQgc2Nyb2xsIG1ldHJpY3MgYW5kXHJcbiAgICAgKiBzaG91bGQgYmUgY2FsbGVkIHNwYXJpbmdseS5cclxuICAgICAqL1xyXG4gICAgZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTogbnVtYmVyO1xyXG4gICAgLyoqIFNldHMgdGhlIGRpc3RhbmNlIGluIHBpeGVscyB0aGF0IHRoZSB0YWIgaGVhZGVyIHNob3VsZCBiZSB0cmFuc2Zvcm1lZCBpbiB0aGUgWC1heGlzLiAqL1xyXG4gICAgc2Nyb2xsRGlzdGFuY2U6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHZpZXdXaWR0aEhlaWdodFBpeDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbmF2Q29udGFpbmVyU2Nyb2xsUGFkZGluZ1BpeDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGFiTGlzdFNjcm9sbFdpZHRoSGVpZ2h0UGl4OiBudW1iZXI7XHJcbiAgICByZWFkb25seSB0YWJMaXN0U2Nyb2xsT2ZmU2V0V2lkdGhIZWlnaHQ6IG51bWJlcjtcclxuICAgIGdldExheW91dERpcmVjdGlvbigpOiBEaXJlY3Rpb247XHJcbiAgICBhbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTogdm9pZDtcclxufVxyXG4iXX0=