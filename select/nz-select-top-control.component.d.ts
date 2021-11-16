/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzOptionComponent } from './nz-option.component';
import { NzSelectService } from './nz-select.service';
import * as ɵngcc0 from '@angular/core';
export declare class NzSelectTopControlComponent implements OnInit, OnDestroy {
    private renderer;
    nzSelectService: NzSelectService;
    private cdr;
    noAnimation?: NzNoAnimationDirective | undefined;
    inputValue: string;
    isComposing: boolean;
    private destroy$;
    inputElement: ElementRef;
    mirrorElement: ElementRef;
    nzShowSearch: boolean;
    nzPlaceHolder: string;
    nzOpen: boolean;
    nzMaxTagCount: number;
    nzAllowClear: boolean;
    nzShowArrow: boolean;
    nzLoading: boolean;
    nzCustomTemplate: TemplateRef<{
        $implicit: NzOptionComponent;
    }>;
    nzSuffixIcon: TemplateRef<void>;
    nzClearIcon: TemplateRef<void>;
    nzRemoveIcon: TemplateRef<void>;
    nzMaxTagPlaceholder: TemplateRef<{
        $implicit: any[];
    }>;
    nzTokenSeparators: string[];
    onClearSelection(e: MouseEvent): void;
    setInputValue(value: string): void;
    readonly mirrorDOM: HTMLElement;
    readonly inputDOM: HTMLInputElement;
    readonly placeHolderDisplay: string;
    readonly selectedValueStyle: {
        [key: string]: string;
    };
    trackValue(_index: number, option: NzOptionComponent): any;
    updateWidth(): void;
    removeSelectedValue(option: NzOptionComponent, e: MouseEvent): void;
    animationEnd(): void;
    constructor(renderer: Renderer2, nzSelectService: NzSelectService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSelectTopControlComponent, [null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSelectTopControlComponent, "[nz-select-top-control]", ["nzSelectTopControl"], { "nzShowSearch": "nzShowSearch"; "nzOpen": "nzOpen"; "nzAllowClear": "nzAllowClear"; "nzShowArrow": "nzShowArrow"; "nzLoading": "nzLoading"; "nzTokenSeparators": "nzTokenSeparators"; "nzPlaceHolder": "nzPlaceHolder"; "nzMaxTagCount": "nzMaxTagCount"; "nzCustomTemplate": "nzCustomTemplate"; "nzSuffixIcon": "nzSuffixIcon"; "nzClearIcon": "nzClearIcon"; "nzRemoveIcon": "nzRemoveIcon"; "nzMaxTagPlaceholder": "nzMaxTagPlaceholder"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9uei1zZWxlY3Quc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI7XHJcbiAgICBuelNlbGVjdFNlcnZpY2U6IE56U2VsZWN0U2VydmljZTtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xyXG4gICAgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gICAgaXNDb21wb3Npbmc6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkO1xyXG4gICAgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gICAgbWlycm9yRWxlbWVudDogRWxlbWVudFJlZjtcclxuICAgIG56U2hvd1NlYXJjaDogYm9vbGVhbjtcclxuICAgIG56UGxhY2VIb2xkZXI6IHN0cmluZztcclxuICAgIG56T3BlbjogYm9vbGVhbjtcclxuICAgIG56TWF4VGFnQ291bnQ6IG51bWJlcjtcclxuICAgIG56QWxsb3dDbGVhcjogYm9vbGVhbjtcclxuICAgIG56U2hvd0Fycm93OiBib29sZWFuO1xyXG4gICAgbnpMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgbnpDdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8e1xyXG4gICAgICAgICRpbXBsaWNpdDogTnpPcHRpb25Db21wb25lbnQ7XHJcbiAgICB9PjtcclxuICAgIG56U3VmZml4SWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuekNsZWFySWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuelJlbW92ZUljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpNYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8e1xyXG4gICAgICAgICRpbXBsaWNpdDogYW55W107XHJcbiAgICB9PjtcclxuICAgIG56VG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXTtcclxuICAgIG9uQ2xlYXJTZWxlY3Rpb24oZTogTW91c2VFdmVudCk6IHZvaWQ7XHJcbiAgICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgcmVhZG9ubHkgbWlycm9yRE9NOiBIVE1MRWxlbWVudDtcclxuICAgIHJlYWRvbmx5IGlucHV0RE9NOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgcmVhZG9ubHkgcGxhY2VIb2xkZXJEaXNwbGF5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBzZWxlY3RlZFZhbHVlU3R5bGU6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IGFueTtcclxuICAgIHVwZGF0ZVdpZHRoKCk6IHZvaWQ7XHJcbiAgICByZW1vdmVTZWxlY3RlZFZhbHVlKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQsIGU6IE1vdXNlRXZlbnQpOiB2b2lkO1xyXG4gICAgYW5pbWF0aW9uRW5kKCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBuelNlbGVjdFNlcnZpY2U6IE56U2VsZWN0U2VydmljZSwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==