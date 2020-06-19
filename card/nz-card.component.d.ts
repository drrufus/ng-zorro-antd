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
    nzHeadingAriaLevel: number;
    tab: NzCardTabComponent;
    grids: QueryList<NzCardGridDirective>;
    constructor(nzConfigService: NzConfigService, renderer: Renderer2, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCardComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCardComponent, "nz-card", ["nzCard"], { "nzLoading": "nzLoading"; "nzActions": "nzActions"; "nzHeadingAriaLabel": "nzHeadingAriaLabel"; "nzHeadingAriaLevel": "nzHeadingAriaLevel"; "nzBordered": "nzBordered"; "nzHoverable": "nzHoverable"; "nzBodyStyle": "nzBodyStyle"; "nzCover": "nzCover"; "nzType": "nzType"; "nzSize": "nzSize"; "nzTitle": "nzTitle"; "nzExtra": "nzExtra"; }, {}, ["tab", "grids"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotY2FyZC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBOelNpemVEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNhcmRHcmlkRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jYXJkLWdyaWQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpDYXJkVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYXJkLXRhYi5jb21wb25lbnQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekNhcmRDb21wb25lbnQge1xyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2U7XHJcbiAgICBuekJvcmRlcmVkOiBib29sZWFuO1xyXG4gICAgbnpMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgbnpIb3ZlcmFibGU6IGJvb2xlYW47XHJcbiAgICBuekJvZHlTdHlsZToge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICAgIH07XHJcbiAgICBuekNvdmVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56QWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+O1xyXG4gICAgbnpUeXBlOiBzdHJpbmc7XHJcbiAgICBuelNpemU6IE56U2l6ZURTVHlwZTtcclxuICAgIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpFeHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuekhlYWRpbmdBcmlhTGFiZWw6IHN0cmluZyB8IG51bGw7XHJcbiAgICBuekhlYWRpbmdBcmlhTGV2ZWw6IG51bWJlcjtcclxuICAgIHRhYjogTnpDYXJkVGFiQ29tcG9uZW50O1xyXG4gICAgZ3JpZHM6IFF1ZXJ5TGlzdDxOekNhcmRHcmlkRGlyZWN0aXZlPjtcclxuICAgIGNvbnN0cnVjdG9yKG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKTtcclxufVxyXG4iXX0=