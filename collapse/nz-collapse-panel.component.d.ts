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
    nzHeadingAriaLevel: number;
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
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCollapsePanelComponent, "nz-collapse-panel", ["nzCollapsePanel"], { "nzActive": "nzActive"; "nzDisabled": "nzDisabled"; "nzHeadingAriaLabel": "nzHeadingAriaLabel"; "nzHeadingAriaLevel": "nzHeadingAriaLevel"; "nzRole": "nzRole"; "nzShowArrow": "nzShowArrow"; "nzExtra": "nzExtra"; "nzHeader": "nzHeader"; "nzExpandedIcon": "nzExpandedIcon"; }, { "nzActiveChange": "nzActiveChange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbGxhcHNlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jb2xsYXBzZS5jb21wb25lbnQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZTtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgcHJpdmF0ZSBuekNvbGxhcHNlQ29tcG9uZW50O1xyXG4gICAgbnpBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBuekRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgbnpTaG93QXJyb3c6IGJvb2xlYW47XHJcbiAgICBuekV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56SGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56SGVhZGluZ0FyaWFMYWJlbDogc3RyaW5nIHwgbnVsbDtcclxuICAgIG56SGVhZGluZ0FyaWFMZXZlbDogbnVtYmVyO1xyXG4gICAgbnpFeHBhbmRlZEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpSb2xlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBuekFjdGl2ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgcHJpdmF0ZSBfZm9jdXNhYmxlSGVhZGVyO1xyXG4gICAgY2xpY2tIZWFkZXIoKTogdm9pZDtcclxuICAgIGZvY3VzT25IZWFkZXIoKTogdm9pZDtcclxuICAgIG1hcmtGb3JDaGVjaygpOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IobnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG56Q29sbGFwc2VDb21wb25lbnQ6IE56Q29sbGFwc2VDb21wb25lbnQsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19