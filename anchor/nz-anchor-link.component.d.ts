/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NzAnchorComponent } from './nz-anchor.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzAnchorLinkComponent implements OnInit, OnDestroy {
    elementRef: ElementRef;
    private anchorComp;
    private cdr;
    private platform;
    nzHref: string;
    titleStr: string | null;
    titleTpl: TemplateRef<void>;
    active: boolean;
    nzTitle: string | TemplateRef<void>;
    nzTemplate: TemplateRef<void>;
    constructor(elementRef: ElementRef, anchorComp: NzAnchorComponent, cdr: ChangeDetectorRef, platform: Platform, renderer: Renderer2);
    ngOnInit(): void;
    goToClick(e: Event): void;
    markForCheck(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzAnchorLinkComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzAnchorLinkComponent, "nz-link", ["nzLink"], { "nzHref": "nzHref"; "nzTitle": "nzTitle"; }, {}, ["nzTemplate"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLWxpbmsuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWFuY2hvci1saW5rLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpBbmNob3JDb21wb25lbnQgfSBmcm9tICcuL256LWFuY2hvci5jb21wb25lbnQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekFuY2hvckxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSBhbmNob3JDb21wO1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIHBsYXRmb3JtO1xyXG4gICAgbnpIcmVmOiBzdHJpbmc7XHJcbiAgICB0aXRsZVN0cjogc3RyaW5nIHwgbnVsbDtcclxuICAgIHRpdGxlVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIGFjdGl2ZTogYm9vbGVhbjtcclxuICAgIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBhbmNob3JDb21wOiBOekFuY2hvckNvbXBvbmVudCwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcGxhdGZvcm06IFBsYXRmb3JtLCByZW5kZXJlcjogUmVuZGVyZXIyKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBnb1RvQ2xpY2soZTogRXZlbnQpOiB2b2lkO1xyXG4gICAgbWFya0ZvckNoZWNrKCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==