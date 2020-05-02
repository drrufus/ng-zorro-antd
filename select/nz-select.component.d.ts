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
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSelectComponent, "nz-select", ["nzSelect"], { "nzSize": "nzSize"; "nzDropdownMatchSelectWidth": "nzDropdownMatchSelectWidth"; "nzAllowClear": "nzAllowClear"; "nzShowSearch": "nzShowSearch"; "nzLoading": "nzLoading"; "nzAutoFocus": "nzAutoFocus"; "nzShowArrow": "nzShowArrow"; "nzTokenSeparators": "nzTokenSeparators"; "nzAutoClearSearchValue": "nzAutoClearSearchValue"; "nzMaxMultipleCount": "nzMaxMultipleCount"; "nzServerSearch": "nzServerSearch"; "nzMode": "nzMode"; "nzFilterOption": "nzFilterOption"; "compareWith": "compareWith"; "nzOpen": "nzOpen"; "nzDisabled": "nzDisabled"; "nzDropdownClassName": "nzDropdownClassName"; "nzDropdownStyle": "nzDropdownStyle"; "nzNotFoundContent": "nzNotFoundContent"; "nzPlaceHolder": "nzPlaceHolder"; "nzMaxTagCount": "nzMaxTagCount"; "nzDropdownRender": "nzDropdownRender"; "nzCustomTemplate": "nzCustomTemplate"; "nzSuffixIcon": "nzSuffixIcon"; "nzClearIcon": "nzClearIcon"; "nzRemoveIcon": "nzRemoveIcon"; "nzMenuItemSelectedIcon": "nzMenuItemSelectedIcon"; "nzMaxTagPlaceholder": "nzMaxTagPlaceholder"; }, { "nzOnSearch": "nzOnSearch"; "nzScrollToBottom": "nzScrollToBottom"; "nzOpenChange": "nzOpenChange"; "nzBlur": "nzBlur"; "nzFocus": "nzFocus"; }, ["listOfNzOptionComponent", "listOfNzOptionGroupComponent"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1zZWxlY3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0ZBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVEZpbHRlck9wdGlvbiB9IGZyb20gJy4vbnotb3B0aW9uLnBpcGUnO1xyXG5pbXBvcnQgeyBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL256LXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelNlbGVjdFNlcnZpY2UgfSBmcm9tICcuL256LXNlbGVjdC5zZXJ2aWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gICAgbnpTZWxlY3RTZXJ2aWNlOiBOelNlbGVjdFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgcGxhdGZvcm07XHJcbiAgICBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCB1bmRlZmluZWQ7XHJcbiAgICBvcGVuOiBib29sZWFuO1xyXG4gICAgdmFsdWU6IGFueSB8IGFueVtdO1xyXG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQ7XHJcbiAgICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XHJcbiAgICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbSc7XHJcbiAgICB0cmlnZ2VyV2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2Rpc2FibGVkO1xyXG4gICAgcHJpdmF0ZSBpc0luaXQ7XHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkO1xyXG4gICAgY2RrT3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICAgIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgICBuelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ6IE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDtcclxuICAgIG56U2VsZWN0VG9wQ29udHJvbEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgICAvKiogc2hvdWxkIG1vdmUgdG8gbnotb3B0aW9uLWNvbnRhaW5lciB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwODEwIHJlc29sdmVkICoqL1xyXG4gICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD47XHJcbiAgICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Hcm91cENvbXBvbmVudD47XHJcbiAgICByZWFkb25seSBuek9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuICAgIHJlYWRvbmx5IG56U2Nyb2xsVG9Cb3R0b206IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IG56T3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgcmVhZG9ubHkgbnpCbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBuekZvY3VzOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICBuelNpemU6IE56U2l6ZUxEU1R5cGU7XHJcbiAgICBuekRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogYm9vbGVhbjtcclxuICAgIG56RHJvcGRvd25TdHlsZToge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICAgIH07XHJcbiAgICBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gICAgbnpBbGxvd0NsZWFyOiBib29sZWFuO1xyXG4gICAgbnpTaG93U2VhcmNoOiBib29sZWFuO1xyXG4gICAgbnpMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgbnpBdXRvRm9jdXM6IGJvb2xlYW47XHJcbiAgICBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgICBuek1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgICBuekRyb3Bkb3duUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHtcclxuICAgICAgICAkaW1wbGljaXQ6IE56T3B0aW9uQ29tcG9uZW50O1xyXG4gICAgfT47XHJcbiAgICBuelN1ZmZpeEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpDbGVhckljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpSZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56TWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpTaG93QXJyb3c6IGJvb2xlYW47XHJcbiAgICBuelRva2VuU2VwYXJhdG9yczogc3RyaW5nW107XHJcbiAgICBuek1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBhbnlbXTtcclxuICAgIH0+O1xyXG4gICAgbnpBdXRvQ2xlYXJTZWFyY2hWYWx1ZTogYm9vbGVhbjtcclxuICAgIG56TWF4TXVsdGlwbGVDb3VudDogbnVtYmVyO1xyXG4gICAgbnpTZXJ2ZXJTZWFyY2g6IGJvb2xlYW47XHJcbiAgICBuek1vZGU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncyc7XHJcbiAgICBuekZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbjtcclxuICAgIGNvbXBhcmVXaXRoOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbjtcclxuICAgIG56T3BlbjogYm9vbGVhbjtcclxuICAgIG56RGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBuelNlbGVjdFRvcENvbnRyb2xET006IEhUTUxFbGVtZW50O1xyXG4gICAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQ7XHJcbiAgICBmb2N1cygpOiB2b2lkO1xyXG4gICAgYmx1cigpOiB2b2lkO1xyXG4gICAgb25Gb2N1cygpOiB2b2lkO1xyXG4gICAgb25CbHVyKCk6IHZvaWQ7XHJcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xyXG4gICAgdG9nZ2xlRHJvcERvd24oKTogdm9pZDtcclxuICAgIGNsb3NlRHJvcERvd24oKTogdm9pZDtcclxuICAgIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQ7XHJcbiAgICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQ7XHJcbiAgICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBuelNlbGVjdFNlcnZpY2U6IE56U2VsZWN0U2VydmljZSwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcGxhdGZvcm06IFBsYXRmb3JtLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCB1bmRlZmluZWQpO1xyXG4gICAgLyoqIHVwZGF0ZSBuZ01vZGVsIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlICoqL1xyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==