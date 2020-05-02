/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import { NgStyleInterface, NzConfigService, NzScrollService } from 'ng-zorro-antd/core';
import { NzAnchorLinkComponent } from './nz-anchor-link.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzAnchorComponent implements OnDestroy, AfterViewInit {
    nzConfigService: NzConfigService;
    private scrollSrv;
    private doc;
    private cdr;
    private platform;
    private ink;
    nzAffix: boolean;
    nzShowInkInFixed: boolean;
    nzBounds: number;
    nzOffsetTop: number;
    private _offsetTop;
    nzTarget: string | Element;
    readonly nzClick: EventEmitter<string>;
    readonly nzScroll: EventEmitter<NzAnchorLinkComponent>;
    visible: boolean;
    wrapperStyle: NgStyleInterface;
    private links;
    private animating;
    private target;
    private scroll$;
    private destroyed;
    constructor(nzConfigService: NzConfigService, scrollSrv: NzScrollService, doc: any, cdr: ChangeDetectorRef, platform: Platform);
    registerLink(link: NzAnchorLinkComponent): void;
    unregisterLink(link: NzAnchorLinkComponent): void;
    private getTarget;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private registerScrollEvent;
    private removeListen;
    private getOffsetTop;
    handleScroll(): void;
    private clearActive;
    private handleActive;
    handleScrollTo(linkComp: NzAnchorLinkComponent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzAnchorComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzAnchorComponent, "nz-anchor", ["nzAnchor"], { "nzAffix": "nzAffix"; "nzOffsetTop": "nzOffsetTop"; "nzTarget": "nzTarget"; "nzShowInkInFixed": "nzShowInkInFixed"; "nzBounds": "nzBounds"; }, { "nzClick": "nzClick"; "nzScroll": "nzScroll"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1hbmNob3IuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nU3R5bGVJbnRlcmZhY2UsIE56Q29uZmlnU2VydmljZSwgTnpTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpBbmNob3JMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hbmNob3ItbGluay5jb21wb25lbnQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekFuY2hvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZTtcclxuICAgIHByaXZhdGUgc2Nyb2xsU3J2O1xyXG4gICAgcHJpdmF0ZSBkb2M7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgcGxhdGZvcm07XHJcbiAgICBwcml2YXRlIGluaztcclxuICAgIG56QWZmaXg6IGJvb2xlYW47XHJcbiAgICBuelNob3dJbmtJbkZpeGVkOiBib29sZWFuO1xyXG4gICAgbnpCb3VuZHM6IG51bWJlcjtcclxuICAgIG56T2Zmc2V0VG9wOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9vZmZzZXRUb3A7XHJcbiAgICBuelRhcmdldDogc3RyaW5nIHwgRWxlbWVudDtcclxuICAgIHJlYWRvbmx5IG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG4gICAgcmVhZG9ubHkgbnpTY3JvbGw6IEV2ZW50RW1pdHRlcjxOekFuY2hvckxpbmtDb21wb25lbnQ+O1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcclxuICAgIHdyYXBwZXJTdHlsZTogTmdTdHlsZUludGVyZmFjZTtcclxuICAgIHByaXZhdGUgbGlua3M7XHJcbiAgICBwcml2YXRlIGFuaW1hdGluZztcclxuICAgIHByaXZhdGUgdGFyZ2V0O1xyXG4gICAgcHJpdmF0ZSBzY3JvbGwkO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95ZWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsIGRvYzogYW55LCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwbGF0Zm9ybTogUGxhdGZvcm0pO1xyXG4gICAgcmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQ7XHJcbiAgICB1bnJlZ2lzdGVyTGluayhsaW5rOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBnZXRUYXJnZXQ7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyU2Nyb2xsRXZlbnQ7XHJcbiAgICBwcml2YXRlIHJlbW92ZUxpc3RlbjtcclxuICAgIHByaXZhdGUgZ2V0T2Zmc2V0VG9wO1xyXG4gICAgaGFuZGxlU2Nyb2xsKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGNsZWFyQWN0aXZlO1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVBY3RpdmU7XHJcbiAgICBoYW5kbGVTY3JvbGxUbyhsaW5rQ29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZDtcclxufVxyXG4iXX0=