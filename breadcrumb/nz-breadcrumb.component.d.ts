/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, Injector, NgZone, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Params } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
export interface BreadcrumbOption {
    label: string;
    params: Params;
    url: string;
}
export declare class NzBreadCrumbComponent implements OnInit, OnDestroy {
    private injector;
    private ngZone;
    private cdr;
    nzAutoGenerate: boolean;
    nzSeparator: string | TemplateRef<void>;
    nzRouteLabel: string;
    breadcrumbs: BreadcrumbOption[] | undefined;
    private destroy$;
    constructor(injector: Injector, ngZone: NgZone, cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    navigate(url: string, e: MouseEvent): void;
    private registerRouterChange;
    private getBreadcrumbs;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzBreadCrumbComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzBreadCrumbComponent, "nz-breadcrumb", ["nzBreadcrumb"], { "nzAutoGenerate": "nzAutoGenerate"; "nzSeparator": "nzSeparator"; "nzRouteLabel": "nzRouteLabel"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotYnJlYWRjcnVtYi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBJbmplY3RvciwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFkY3J1bWJPcHRpb24ge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHBhcmFtczogUGFyYW1zO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpCcmVhZENydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjtcclxuICAgIHByaXZhdGUgbmdab25lO1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBuekF1dG9HZW5lcmF0ZTogYm9vbGVhbjtcclxuICAgIG56U2VwYXJhdG9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56Um91dGVMYWJlbDogc3RyaW5nO1xyXG4gICAgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJPcHRpb25bXSB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IsIG5nWm9uZTogTmdab25lLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgbmF2aWdhdGUodXJsOiBzdHJpbmcsIGU6IE1vdXNlRXZlbnQpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSByZWdpc3RlclJvdXRlckNoYW5nZTtcclxuICAgIHByaXZhdGUgZ2V0QnJlYWRjcnVtYnM7XHJcbn1cclxuIl19