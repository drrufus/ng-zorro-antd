/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzNoAnimationDirective, NzSizeLDSType } from 'ng-zorro-antd/core';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
import { TFilterOption } from './nz-option.pipe';
import { NzSelectTopControlComponent } from './nz-select-top-control.component';
import { NzSelectService } from './nz-select.service';
import * as ɵngcc0 from '@angular/core';
export declare class NzSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy, AfterContentInit {
    nzSelectService: NzSelectService;
    private cdr;
    private platform;
    noAnimation?: NzNoAnimationDirective | undefined;
    open: boolean;
    value: any | any[];
    onChange: (value: string | string[]) => void;
    onTouched: () => void;
    dropDownPosition: 'top' | 'center' | 'bottom';
    triggerWidth: number;
    private _disabled;
    private isInit;
    private destroy$;
    cdkOverlayOrigin: CdkOverlayOrigin;
    cdkConnectedOverlay: CdkConnectedOverlay;
    nzSelectTopControlComponent: NzSelectTopControlComponent;
    nzSelectTopControlElement: ElementRef;
    /** should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved **/
    listOfNzOptionComponent: QueryList<NzOptionComponent>;
    listOfNzOptionGroupComponent: QueryList<NzOptionGroupComponent>;
    readonly nzOnSearch: EventEmitter<string>;
    readonly nzScrollToBottom: EventEmitter<void>;
    readonly nzOpenChange: EventEmitter<boolean>;
    readonly nzBlur: EventEmitter<void>;
    readonly nzFocus: EventEmitter<void>;
    nzSize: NzSizeLDSType;
    nzDropdownClassName: string;
    nzDropdownMatchSelectWidth: boolean;
    nzDropdownStyle: {
        [key: string]: string;
    };
    nzNotFoundContent: string;
    nzAllowClear: boolean;
    nzShowSearch: boolean;
    nzLoading: boolean;
    nzAutoFocus: boolean;
    nzPlaceHolder: string;
    nzMaxTagCount: number;
    nzDropdownRender: TemplateRef<void>;
    nzCustomTemplate: TemplateRef<{
        $implicit: NzOptionComponent;
    }>;
    nzSuffixIcon: TemplateRef<void>;
    nzClearIcon: TemplateRef<void>;
    nzRemoveIcon: TemplateRef<void>;
    nzMenuItemSelectedIcon: TemplateRef<void>;
    nzShowArrow: boolean;
    nzTokenSeparators: string[];
    nzMaxTagPlaceholder: TemplateRef<{
        $implicit: any[];
    }>;
    nzAutoClearSearchValue: boolean;
    nzMaxMultipleCount: number;
    nzServerSearch: boolean;
    nzMode: 'default' | 'multiple' | 'tags';
    nzFilterOption: TFilterOption;
    compareWith: (o1: any, o2: any) => boolean;
    nzOpen: boolean;
    nzDisabled: boolean;
    nzAriaLabel: string | null;
    readonly nzSelectTopControlDOM: HTMLElement;
    updateAutoFocus(): void;
    focus(): void;
    blur(): void;
    onFocus(): void;
    onBlur(): void;
    onKeyDown(event: KeyboardEvent): void;
    toggleDropDown(): void;
    closeDropDown(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    updateCdkConnectedOverlayStatus(): void;
    updateCdkConnectedOverlayPositions(): void;
    constructor(renderer: Renderer2, nzSelectService: NzSelectService, cdr: ChangeDetectorRef, platform: Platform, elementRef: ElementRef, noAnimation?: NzNoAnimationDirective | undefined);
    /** update ngModel -> update listOfSelectedValue **/
    writeValue(value: any | any[]): void;
    registerOnChange(fn: (value: string | string[]) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSelectComponent, [null, null, null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSelectComponent, "nz-select", ["nzSelect"], { "nzSize": "nzSize"; "nzDropdownMatchSelectWidth": "nzDropdownMatchSelectWidth"; "nzAllowClear": "nzAllowClear"; "nzShowSearch": "nzShowSearch"; "nzLoading": "nzLoading"; "nzAutoFocus": "nzAutoFocus"; "nzShowArrow": "nzShowArrow"; "nzTokenSeparators": "nzTokenSeparators"; "nzAriaLabel": "nzAriaLabel"; "nzAutoClearSearchValue": "nzAutoClearSearchValue"; "nzMaxMultipleCount": "nzMaxMultipleCount"; "nzServerSearch": "nzServerSearch"; "nzMode": "nzMode"; "nzFilterOption": "nzFilterOption"; "compareWith": "compareWith"; "nzOpen": "nzOpen"; "nzDisabled": "nzDisabled"; "nzDropdownClassName": "nzDropdownClassName"; "nzDropdownStyle": "nzDropdownStyle"; "nzNotFoundContent": "nzNotFoundContent"; "nzPlaceHolder": "nzPlaceHolder"; "nzMaxTagCount": "nzMaxTagCount"; "nzDropdownRender": "nzDropdownRender"; "nzCustomTemplate": "nzCustomTemplate"; "nzSuffixIcon": "nzSuffixIcon"; "nzClearIcon": "nzClearIcon"; "nzRemoveIcon": "nzRemoveIcon"; "nzMenuItemSelectedIcon": "nzMenuItemSelectedIcon"; "nzMaxTagPlaceholder": "nzMaxTagPlaceholder"; }, { "nzOnSearch": "nzOnSearch"; "nzScrollToBottom": "nzScrollToBottom"; "nzOpenChange": "nzOpenChange"; "nzBlur": "nzBlur"; "nzFocus": "nzFocus"; }, ["listOfNzOptionComponent", "listOfNzOptionGroupComponent"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1zZWxlY3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1GQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRGaWx0ZXJPcHRpb24gfSBmcm9tICcuL256LW9wdGlvbi5waXBlJztcclxuaW1wb3J0IHsgTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9uei1zZWxlY3Quc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56U2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICAgIG56U2VsZWN0U2VydmljZTogTnpTZWxlY3RTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIHBsYXRmb3JtO1xyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuICAgIHZhbHVlOiBhbnkgfCBhbnlbXTtcclxuICAgIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkO1xyXG4gICAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xyXG4gICAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nO1xyXG4gICAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kaXNhYmxlZDtcclxuICAgIHByaXZhdGUgaXNJbml0O1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDtcclxuICAgIGNka092ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgICBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gICAgbnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50OiBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ7XHJcbiAgICBuelNlbGVjdFRvcENvbnRyb2xFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gICAgLyoqIHNob3VsZCBtb3ZlIHRvIG56LW9wdGlvbi1jb250YWluZXIgd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDgxMCByZXNvbHZlZCAqKi9cclxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Db21wb25lbnQ+O1xyXG4gICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uR3JvdXBDb21wb25lbnQ+O1xyXG4gICAgcmVhZG9ubHkgbnpPblNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcbiAgICByZWFkb25seSBuelNjcm9sbFRvQm90dG9tOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBuek9wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIHJlYWRvbmx5IG56Qmx1cjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgcmVhZG9ubHkgbnpGb2N1czogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgbnpTaXplOiBOelNpemVMRFNUeXBlO1xyXG4gICAgbnpEcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IGJvb2xlYW47XHJcbiAgICBuekRyb3Bkb3duU3R5bGU6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuICAgIG56QWxsb3dDbGVhcjogYm9vbGVhbjtcclxuICAgIG56U2hvd1NlYXJjaDogYm9vbGVhbjtcclxuICAgIG56TG9hZGluZzogYm9vbGVhbjtcclxuICAgIG56QXV0b0ZvY3VzOiBib29sZWFuO1xyXG4gICAgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gICAgbnpNYXhUYWdDb3VudDogbnVtYmVyO1xyXG4gICAgbnpEcm9wZG93blJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuekN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBOek9wdGlvbkNvbXBvbmVudDtcclxuICAgIH0+O1xyXG4gICAgbnpTdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56Q2xlYXJJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56UmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuek1lbnVJdGVtU2VsZWN0ZWRJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56U2hvd0Fycm93OiBib29sZWFuO1xyXG4gICAgbnpUb2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdO1xyXG4gICAgbnpNYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8e1xyXG4gICAgICAgICRpbXBsaWNpdDogYW55W107XHJcbiAgICB9PjtcclxuICAgIG56QXV0b0NsZWFyU2VhcmNoVmFsdWU6IGJvb2xlYW47XHJcbiAgICBuek1heE11bHRpcGxlQ291bnQ6IG51bWJlcjtcclxuICAgIG56U2VydmVyU2VhcmNoOiBib29sZWFuO1xyXG4gICAgbnpNb2RlOiAnZGVmYXVsdCcgfCAnbXVsdGlwbGUnIHwgJ3RhZ3MnO1xyXG4gICAgbnpGaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb247XHJcbiAgICBjb21wYXJlV2l0aDogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XHJcbiAgICBuek9wZW46IGJvb2xlYW47XHJcbiAgICBuekRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgbnpBcmlhTGFiZWw6IHN0cmluZyB8IG51bGw7XHJcbiAgICByZWFkb25seSBuelNlbGVjdFRvcENvbnRyb2xET006IEhUTUxFbGVtZW50O1xyXG4gICAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQ7XHJcbiAgICBmb2N1cygpOiB2b2lkO1xyXG4gICAgYmx1cigpOiB2b2lkO1xyXG4gICAgb25Gb2N1cygpOiB2b2lkO1xyXG4gICAgb25CbHVyKCk6IHZvaWQ7XHJcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xyXG4gICAgdG9nZ2xlRHJvcERvd24oKTogdm9pZDtcclxuICAgIGNsb3NlRHJvcERvd24oKTogdm9pZDtcclxuICAgIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQ7XHJcbiAgICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQ7XHJcbiAgICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBuelNlbGVjdFNlcnZpY2U6IE56U2VsZWN0U2VydmljZSwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcGxhdGZvcm06IFBsYXRmb3JtLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCB1bmRlZmluZWQpO1xyXG4gICAgLyoqIHVwZGF0ZSBuZ01vZGVsIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlICoqL1xyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==