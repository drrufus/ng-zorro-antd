/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NzConfigService, NzSizeDSType } from 'ng-zorro-antd/core';
import { NzCardGridDirective } from './nz-card-grid.directive';
import { NzCardTabComponent } from './nz-card-tab.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzCardComponent {
    nzConfigService: NzConfigService;
    nzBordered: boolean;
    nzLoading: boolean;
    nzHoverable: boolean;
    nzBodyStyle: {
        [key: string]: string;
    };
    nzCover: TemplateRef<void>;
    nzActions: Array<TemplateRef<void>>;
    nzType: string;
    nzSize: NzSizeDSType;
    nzTitle: string | TemplateRef<void>;
    nzExtra: string | TemplateRef<void>;
    nzHeadingAriaLabel: string | null;
    tab: NzCardTabComponent;
    grids: QueryList<NzCardGridDirective>;
    constructor(nzConfigService: NzConfigService, renderer: Renderer2, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCardComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCardComponent, "nz-card", ["nzCard"], { "nzLoading": "nzLoading"; "nzActions": "nzActions"; "nzHeadingAriaLabel": "nzHeadingAriaLabel"; "nzBordered": "nzBordered"; "nzHoverable": "nzHoverable"; "nzBodyStyle": "nzBodyStyle"; "nzCover": "nzCover"; "nzType": "nzType"; "nzSize": "nzSize"; "nzTitle": "nzTitle"; "nzExtra": "nzExtra"; }, {}, ["tab", "grids"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotY2FyZC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIE56U2l6ZURTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FyZEdyaWREaXJlY3RpdmUgfSBmcm9tICcuL256LWNhcmQtZ3JpZC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOekNhcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL256LWNhcmQtdGFiLmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Q2FyZENvbXBvbmVudCB7XHJcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZTtcclxuICAgIG56Qm9yZGVyZWQ6IGJvb2xlYW47XHJcbiAgICBuekxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBuekhvdmVyYWJsZTogYm9vbGVhbjtcclxuICAgIG56Qm9keVN0eWxlOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIG56Q292ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj47XHJcbiAgICBuelR5cGU6IHN0cmluZztcclxuICAgIG56U2l6ZTogTnpTaXplRFNUeXBlO1xyXG4gICAgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuekV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56SGVhZGluZ0FyaWFMYWJlbDogc3RyaW5nIHwgbnVsbDtcclxuICAgIHRhYjogTnpDYXJkVGFiQ29tcG9uZW50O1xyXG4gICAgZ3JpZHM6IFF1ZXJ5TGlzdDxOekNhcmRHcmlkRGlyZWN0aXZlPjtcclxuICAgIGNvbnN0cnVjdG9yKG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKTtcclxufVxyXG4iXX0=