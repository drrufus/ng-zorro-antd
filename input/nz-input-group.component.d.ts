/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import { NgClassType, NzSizeLDSType } from 'ng-zorro-antd/core';
import { NzInputDirective } from './nz-input.directive';
import * as ɵngcc0 from '@angular/core';
export declare class NzInputGroupComponent implements AfterContentInit {
    listOfNzInputDirective: QueryList<NzInputDirective>;
    private _size;
    nzAddOnBeforeIcon: NgClassType;
    nzAddOnAfterIcon: NgClassType;
    nzPrefixIcon: NgClassType;
    nzSuffixIcon: NgClassType;
    nzAddOnBefore: string | TemplateRef<void>;
    nzAddOnAfter: string | TemplateRef<void>;
    nzPrefix: string | TemplateRef<void>;
    nzSuffix: string | TemplateRef<void>;
    nzSearch: boolean;
    nzCompact: boolean;
    nzSize: NzSizeLDSType;
    readonly isLarge: boolean;
    readonly isSmall: boolean;
    readonly isAffix: boolean;
    readonly isAddOn: boolean;
    readonly isAffixWrapper: boolean;
    readonly isGroup: boolean;
    readonly isLargeGroup: boolean;
    readonly isLargeGroupWrapper: boolean;
    readonly isLargeAffix: boolean;
    readonly isLargeSearch: boolean;
    readonly isSmallGroup: boolean;
    readonly isSmallAffix: boolean;
    readonly isSmallGroupWrapper: boolean;
    readonly isSmallSearch: boolean;
    updateChildrenInputSize(): void;
    ngAfterContentInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzInputGroupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzInputGroupComponent, "nz-input-group", ["nzInputGroup"], { "nzSearch": "nzSearch"; "nzCompact": "nzCompact"; "nzSize": "nzSize"; "nzAddOnBeforeIcon": "nzAddOnBeforeIcon"; "nzAddOnAfterIcon": "nzAddOnAfterIcon"; "nzPrefixIcon": "nzPrefixIcon"; "nzSuffixIcon": "nzSuffixIcon"; "nzAddOnBefore": "nzAddOnBefore"; "nzAddOnAfter": "nzAddOnAfter"; "nzPrefix": "nzPrefix"; "nzSuffix": "nzSuffix"; }, {}, ["listOfNzInputDirective"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtZ3JvdXAuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWlucHV0LWdyb3VwLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ2xhc3NUeXBlLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vbnotaW5wdXQuZGlyZWN0aXZlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICBsaXN0T2ZOeklucHV0RGlyZWN0aXZlOiBRdWVyeUxpc3Q8TnpJbnB1dERpcmVjdGl2ZT47XHJcbiAgICBwcml2YXRlIF9zaXplO1xyXG4gICAgbnpBZGRPbkJlZm9yZUljb246IE5nQ2xhc3NUeXBlO1xyXG4gICAgbnpBZGRPbkFmdGVySWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgICBuelByZWZpeEljb246IE5nQ2xhc3NUeXBlO1xyXG4gICAgbnpTdWZmaXhJY29uOiBOZ0NsYXNzVHlwZTtcclxuICAgIG56QWRkT25CZWZvcmU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpBZGRPbkFmdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56UHJlZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56U3VmZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56U2VhcmNoOiBib29sZWFuO1xyXG4gICAgbnpDb21wYWN0OiBib29sZWFuO1xyXG4gICAgbnpTaXplOiBOelNpemVMRFNUeXBlO1xyXG4gICAgcmVhZG9ubHkgaXNMYXJnZTogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IGlzU21hbGw6IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBpc0FmZml4OiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgaXNBZGRPbjogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IGlzQWZmaXhXcmFwcGVyOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgaXNHcm91cDogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IGlzTGFyZ2VHcm91cDogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IGlzTGFyZ2VHcm91cFdyYXBwZXI6IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBpc0xhcmdlQWZmaXg6IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBpc0xhcmdlU2VhcmNoOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgaXNTbWFsbEdyb3VwOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgaXNTbWFsbEFmZml4OiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgaXNTbWFsbEdyb3VwV3JhcHBlcjogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IGlzU21hbGxTZWFyY2g6IGJvb2xlYW47XHJcbiAgICB1cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpOiB2b2lkO1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbn1cclxuIl19