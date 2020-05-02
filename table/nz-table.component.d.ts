/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef, TrackByFunction } from '@angular/core';
import { NzConfigService, NzSizeMDSType } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { PaginationItemRenderContext } from 'ng-zorro-antd/pagination';
import { NzThComponent } from './nz-th.component';
import { NzTheadComponent } from './nz-thead.component';
import { NzVirtualScrollDirective } from './nz-virtual-scroll.directive';
import * as ɵngcc0 from '@angular/core';
export declare class NzTableComponent<T = any> implements OnInit, AfterViewInit, OnDestroy, OnChanges, AfterContentInit {
    nzConfigService: NzConfigService;
    private renderer;
    private ngZone;
    private cdr;
    private i18n;
    private platform;
    /** public data for ngFor tr */
    data: T[];
    locale: any;
    nzTheadComponent: NzTheadComponent;
    lastScrollLeft: number;
    headerBottomStyle: {};
    private destroy$;
    listOfNzThComponent: QueryList<NzThComponent>;
    tableHeaderElement: ElementRef;
    tableBodyElement: ElementRef;
    tableMainElement: ElementRef;
    cdkVirtualScrollElement: ElementRef;
    cdkVirtualScrollViewport: CdkVirtualScrollViewport;
    nzVirtualScrollDirective: NzVirtualScrollDirective;
    nzSize: NzSizeMDSType;
    nzShowTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }>;
    nzPageSizeOptions: number[];
    nzVirtualScroll: boolean;
    nzVirtualItemSize: number;
    nzVirtualMaxBufferPx: number;
    nzVirtualMinBufferPx: number;
    nzVirtualForTrackBy: TrackByFunction<T> | undefined;
    nzLoadingDelay: number;
    nzLoadingIndicator: TemplateRef<void>;
    nzTotal: number;
    nzTitle: string | TemplateRef<void>;
    nzFooter: string | TemplateRef<void>;
    nzNoResult: string | TemplateRef<void>;
    nzWidthConfig: string[];
    nzPageIndex: number;
    nzPageSize: number;
    nzData: T[];
    nzPaginationPosition: 'top' | 'bottom' | 'both';
    nzScroll: {
        x?: string | null;
        y?: string | null;
    };
    nzItemRender: TemplateRef<PaginationItemRenderContext>;
    itemRenderChild: TemplateRef<PaginationItemRenderContext>;
    readonly itemRender: TemplateRef<PaginationItemRenderContext>;
    nzFrontPagination: boolean;
    nzTemplateMode: boolean;
    nzBordered: boolean;
    nzShowPagination: boolean;
    nzLoading: boolean;
    nzShowSizeChanger: boolean;
    nzHideOnSinglePage: boolean;
    nzShowQuickJumper: boolean;
    nzSimple: boolean;
    readonly nzPageSizeChange: EventEmitter<number>;
    readonly nzPageIndexChange: EventEmitter<number>;
    readonly nzCurrentPageDataChange: EventEmitter<any[]>;
    readonly tableBodyNativeElement: HTMLElement;
    readonly tableHeaderNativeElement: HTMLElement;
    readonly cdkVirtualScrollNativeElement: HTMLElement;
    readonly mixTableBodyNativeElement: HTMLElement;
    emitPageSizeOrIndex(size: number, index: number): void;
    syncScrollTable(e: MouseEvent): void;
    setScrollPositionClassName(): void;
    setScrollName(position?: string): void;
    fitScrollBar(): void;
    updateFrontPaginationDataIfNeeded(isPageSizeOrDataChange?: boolean): void;
    constructor(nzConfigService: NzConfigService, renderer: Renderer2, ngZone: NgZone, cdr: ChangeDetectorRef, i18n: NzI18nService, platform: Platform, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTableComponent<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTableComponent<any>, "nz-table", ["nzTable"], { "nzPageSizeOptions": "nzPageSizeOptions"; "nzVirtualScroll": "nzVirtualScroll"; "nzVirtualItemSize": "nzVirtualItemSize"; "nzVirtualMaxBufferPx": "nzVirtualMaxBufferPx"; "nzVirtualMinBufferPx": "nzVirtualMinBufferPx"; "nzLoadingDelay": "nzLoadingDelay"; "nzTotal": "nzTotal"; "nzWidthConfig": "nzWidthConfig"; "nzPageIndex": "nzPageIndex"; "nzPageSize": "nzPageSize"; "nzData": "nzData"; "nzPaginationPosition": "nzPaginationPosition"; "nzScroll": "nzScroll"; "nzFrontPagination": "nzFrontPagination"; "nzTemplateMode": "nzTemplateMode"; "nzShowPagination": "nzShowPagination"; "nzLoading": "nzLoading"; "nzSize": "nzSize"; "nzShowTotal": "nzShowTotal"; "nzVirtualForTrackBy": "nzVirtualForTrackBy"; "nzLoadingIndicator": "nzLoadingIndicator"; "nzTitle": "nzTitle"; "nzFooter": "nzFooter"; "nzNoResult": "nzNoResult"; "nzItemRender": "nzItemRender"; "nzBordered": "nzBordered"; "nzShowSizeChanger": "nzShowSizeChanger"; "nzHideOnSinglePage": "nzHideOnSinglePage"; "nzShowQuickJumper": "nzShowQuickJumper"; "nzSimple": "nzSimple"; }, { "nzPageSizeChange": "nzPageSizeChange"; "nzPageIndexChange": "nzPageIndexChange"; "nzCurrentPageDataChange": "nzCurrentPageDataChange"; }, ["nzVirtualScrollDirective", "listOfNzThComponent"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXRhYmxlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIE56U2l6ZU1EU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgTnpUaENvbXBvbmVudCB9IGZyb20gJy4vbnotdGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vbnotdGhlYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlIH0gZnJvbSAnLi9uei12aXJ0dWFsLXNjcm9sbC5kaXJlY3RpdmUnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelRhYmxlQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZTtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIG5nWm9uZTtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgcHJpdmF0ZSBpMThuO1xyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTtcclxuICAgIC8qKiBwdWJsaWMgZGF0YSBmb3IgbmdGb3IgdHIgKi9cclxuICAgIGRhdGE6IFRbXTtcclxuICAgIGxvY2FsZTogYW55O1xyXG4gICAgbnpUaGVhZENvbXBvbmVudDogTnpUaGVhZENvbXBvbmVudDtcclxuICAgIGxhc3RTY3JvbGxMZWZ0OiBudW1iZXI7XHJcbiAgICBoZWFkZXJCb3R0b21TdHlsZToge307XHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkO1xyXG4gICAgbGlzdE9mTnpUaENvbXBvbmVudDogUXVlcnlMaXN0PE56VGhDb21wb25lbnQ+O1xyXG4gICAgdGFibGVIZWFkZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gICAgdGFibGVCb2R5RWxlbWVudDogRWxlbWVudFJlZjtcclxuICAgIHRhYmxlTWFpbkVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgICBjZGtWaXJ0dWFsU2Nyb2xsRWxlbWVudDogRWxlbWVudFJlZjtcclxuICAgIGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xyXG4gICAgbnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlOiBOelZpcnR1YWxTY3JvbGxEaXJlY3RpdmU7XHJcbiAgICBuelNpemU6IE56U2l6ZU1EU1R5cGU7XHJcbiAgICBuelNob3dUb3RhbDogVGVtcGxhdGVSZWY8e1xyXG4gICAgICAgICRpbXBsaWNpdDogbnVtYmVyO1xyXG4gICAgICAgIHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgfT47XHJcbiAgICBuelBhZ2VTaXplT3B0aW9uczogbnVtYmVyW107XHJcbiAgICBuelZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XHJcbiAgICBuelZpcnR1YWxJdGVtU2l6ZTogbnVtYmVyO1xyXG4gICAgbnpWaXJ0dWFsTWF4QnVmZmVyUHg6IG51bWJlcjtcclxuICAgIG56VmlydHVhbE1pbkJ1ZmZlclB4OiBudW1iZXI7XHJcbiAgICBuelZpcnR1YWxGb3JUcmFja0J5OiBUcmFja0J5RnVuY3Rpb248VD4gfCB1bmRlZmluZWQ7XHJcbiAgICBuekxvYWRpbmdEZWxheTogbnVtYmVyO1xyXG4gICAgbnpMb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56VG90YWw6IG51bWJlcjtcclxuICAgIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpOb1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBueldpZHRoQ29uZmlnOiBzdHJpbmdbXTtcclxuICAgIG56UGFnZUluZGV4OiBudW1iZXI7XHJcbiAgICBuelBhZ2VTaXplOiBudW1iZXI7XHJcbiAgICBuekRhdGE6IFRbXTtcclxuICAgIG56UGFnaW5hdGlvblBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2JvdGgnO1xyXG4gICAgbnpTY3JvbGw6IHtcclxuICAgICAgICB4Pzogc3RyaW5nIHwgbnVsbDtcclxuICAgICAgICB5Pzogc3RyaW5nIHwgbnVsbDtcclxuICAgIH07XHJcbiAgICBuekl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dD47XHJcbiAgICBpdGVtUmVuZGVyQ2hpbGQ6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dD47XHJcbiAgICByZWFkb25seSBpdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+O1xyXG4gICAgbnpGcm9udFBhZ2luYXRpb246IGJvb2xlYW47XHJcbiAgICBuelRlbXBsYXRlTW9kZTogYm9vbGVhbjtcclxuICAgIG56Qm9yZGVyZWQ6IGJvb2xlYW47XHJcbiAgICBuelNob3dQYWdpbmF0aW9uOiBib29sZWFuO1xyXG4gICAgbnpMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgbnpTaG93U2l6ZUNoYW5nZXI6IGJvb2xlYW47XHJcbiAgICBuekhpZGVPblNpbmdsZVBhZ2U6IGJvb2xlYW47XHJcbiAgICBuelNob3dRdWlja0p1bXBlcjogYm9vbGVhbjtcclxuICAgIG56U2ltcGxlOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgbnpQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcbiAgICByZWFkb25seSBuelBhZ2VJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcbiAgICByZWFkb25seSBuekN1cnJlbnRQYWdlRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueVtdPjtcclxuICAgIHJlYWRvbmx5IHRhYmxlQm9keU5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcmVhZG9ubHkgdGFibGVIZWFkZXJOYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHJlYWRvbmx5IGNka1ZpcnR1YWxTY3JvbGxOYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHJlYWRvbmx5IG1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZW1pdFBhZ2VTaXplT3JJbmRleChzaXplOiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgc3luY1Njcm9sbFRhYmxlKGU6IE1vdXNlRXZlbnQpOiB2b2lkO1xyXG4gICAgc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTogdm9pZDtcclxuICAgIHNldFNjcm9sbE5hbWUocG9zaXRpb24/OiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgZml0U2Nyb2xsQmFyKCk6IHZvaWQ7XHJcbiAgICB1cGRhdGVGcm9udFBhZ2luYXRpb25EYXRhSWZOZWVkZWQoaXNQYWdlU2l6ZU9yRGF0YUNoYW5nZT86IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IobnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBpMThuOiBOekkxOG5TZXJ2aWNlLCBwbGF0Zm9ybTogUGxhdGZvcm0sIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19