/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core';
import { NzCollapseComponent } from './nz-collapse.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzCollapsePanelComponent implements OnInit, OnDestroy {
    nzConfigService: NzConfigService;
    private cdr;
    private nzCollapseComponent;
    nzActive: boolean;
    nzDisabled: boolean;
    nzShowArrow: boolean;
    nzExtra: string | TemplateRef<void>;
    nzHeader: string | TemplateRef<void>;
    nzHeadingAriaLabel: string | null;
    nzExpandedIcon: string | TemplateRef<void>;
    nzRole: string;
    readonly nzActiveChange: EventEmitter<boolean>;
    private _focusableHeader;
    clickHeader(): void;
    focusOnHeader(): void;
    markForCheck(): void;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, nzCollapseComponent: NzCollapseComponent, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCollapsePanelComponent, [null, null, { host: true; }, null, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCollapsePanelComponent, "nz-collapse-panel", ["nzCollapsePanel"], { "nzActive": "nzActive"; "nzDisabled": "nzDisabled"; "nzHeadingAriaLabel": "nzHeadingAriaLabel"; "nzRole": "nzRole"; "nzShowArrow": "nzShowArrow"; "nzExtra": "nzExtra"; "nzHeader": "nzHeader"; "nzExpandedIcon": "nzExpandedIcon"; }, { "nzActiveChange": "nzActiveChange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL256LWNvbGxhcHNlLmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIG56Q29sbGFwc2VDb21wb25lbnQ7XHJcbiAgICBuekFjdGl2ZTogYm9vbGVhbjtcclxuICAgIG56RGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBuelNob3dBcnJvdzogYm9vbGVhbjtcclxuICAgIG56RXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpIZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpIZWFkaW5nQXJpYUxhYmVsOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgbnpFeHBhbmRlZEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpSb2xlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBuekFjdGl2ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgcHJpdmF0ZSBfZm9jdXNhYmxlSGVhZGVyO1xyXG4gICAgY2xpY2tIZWFkZXIoKTogdm9pZDtcclxuICAgIGZvY3VzT25IZWFkZXIoKTogdm9pZDtcclxuICAgIG1hcmtGb3JDaGVjaygpOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IobnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG56Q29sbGFwc2VDb21wb25lbnQ6IE56Q29sbGFwc2VDb21wb25lbnQsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19