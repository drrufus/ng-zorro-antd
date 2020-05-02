/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName, NgModel } from '@angular/forms';
import { NgClassType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormItemComponent } from './nz-form-item.component';
import * as ɵngcc0 from '@angular/core';
export declare type NzFormControlStatusType = 'warning' | 'validating' | 'error' | 'success' | null;
export declare class NzFormControlComponent extends NzColDirective implements OnDestroy, OnInit, AfterContentInit, AfterViewInit, OnDestroy {
    private nzFormItemComponent;
    private cdr;
    private _hasFeedback;
    private validateChanges;
    private validateString;
    validateControl: FormControl | NgModel | null;
    status: NzFormControlStatusType;
    controlClassMap: NgClassType;
    iconType: string;
    defaultValidateControl: FormControlName | FormControlDirective;
    nzSuccessTip: string | TemplateRef<{
        $implicit: FormControl | NgModel;
    }>;
    nzWarningTip: string | TemplateRef<{
        $implicit: FormControl | NgModel;
    }>;
    nzErrorTip: string | TemplateRef<{
        $implicit: FormControl | NgModel;
    }>;
    nzValidatingTip: string | TemplateRef<{
        $implicit: FormControl | NgModel;
    }>;
    nzExtra: string | TemplateRef<void>;
    nzHasFeedback: boolean;
    nzValidateStatus: string | FormControl | FormControlName | NgModel;
    removeSubscribe(): void;
    watchControl(): void;
    validateControlStatus(status: string): boolean;
    setControlClassMap(): void;
    readonly hasTips: boolean;
    readonly showSuccessTip: boolean;
    readonly showWarningTip: boolean;
    readonly showErrorTip: boolean;
    readonly showValidatingTip: boolean;
    readonly showInnerTip: boolean;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzFormItemComponent: NzFormItemComponent, nzRowDirective: NzRowDirective, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzFormControlComponent, [null, null, { optional: true; host: true; }, { optional: true; host: true; }, null, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzFormControlComponent, "nz-form-control", ["nzFormControl"], { "nzHasFeedback": "nzHasFeedback"; "nzValidateStatus": "nzValidateStatus"; "nzSuccessTip": "nzSuccessTip"; "nzWarningTip": "nzWarningTip"; "nzErrorTip": "nzErrorTip"; "nzValidatingTip": "nzValidatingTip"; "nzExtra": "nzExtra"; }, {}, ["defaultValidateControl"], ["*", "nz-form-explain", "nz-form-extra"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1jb250cm9sLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1mb3JtLWNvbnRyb2wuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ0NsYXNzVHlwZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpDb2xEaXJlY3RpdmUsIE56Um93RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ncmlkJztcclxuaW1wb3J0IHsgTnpGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS1pdGVtLmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUgPSAnd2FybmluZycgfCAndmFsaWRhdGluZycgfCAnZXJyb3InIHwgJ3N1Y2Nlc3MnIHwgbnVsbDtcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpGb3JtQ29udHJvbENvbXBvbmVudCBleHRlbmRzIE56Q29sRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIG56Rm9ybUl0ZW1Db21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgX2hhc0ZlZWRiYWNrO1xyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUNoYW5nZXM7XHJcbiAgICBwcml2YXRlIHZhbGlkYXRlU3RyaW5nO1xyXG4gICAgdmFsaWRhdGVDb250cm9sOiBGb3JtQ29udHJvbCB8IE5nTW9kZWwgfCBudWxsO1xyXG4gICAgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZTtcclxuICAgIGNvbnRyb2xDbGFzc01hcDogTmdDbGFzc1R5cGU7XHJcbiAgICBpY29uVHlwZTogc3RyaW5nO1xyXG4gICAgZGVmYXVsdFZhbGlkYXRlQ29udHJvbDogRm9ybUNvbnRyb2xOYW1lIHwgRm9ybUNvbnRyb2xEaXJlY3RpdmU7XHJcbiAgICBuelN1Y2Nlc3NUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHtcclxuICAgICAgICAkaW1wbGljaXQ6IEZvcm1Db250cm9sIHwgTmdNb2RlbDtcclxuICAgIH0+O1xyXG4gICAgbnpXYXJuaW5nVGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBGb3JtQ29udHJvbCB8IE5nTW9kZWw7XHJcbiAgICB9PjtcclxuICAgIG56RXJyb3JUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHtcclxuICAgICAgICAkaW1wbGljaXQ6IEZvcm1Db250cm9sIHwgTmdNb2RlbDtcclxuICAgIH0+O1xyXG4gICAgbnpWYWxpZGF0aW5nVGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBGb3JtQ29udHJvbCB8IE5nTW9kZWw7XHJcbiAgICB9PjtcclxuICAgIG56RXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpIYXNGZWVkYmFjazogYm9vbGVhbjtcclxuICAgIG56VmFsaWRhdGVTdGF0dXM6IHN0cmluZyB8IEZvcm1Db250cm9sIHwgRm9ybUNvbnRyb2xOYW1lIHwgTmdNb2RlbDtcclxuICAgIHJlbW92ZVN1YnNjcmliZSgpOiB2b2lkO1xyXG4gICAgd2F0Y2hDb250cm9sKCk6IHZvaWQ7XHJcbiAgICB2YWxpZGF0ZUNvbnRyb2xTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgc2V0Q29udHJvbENsYXNzTWFwKCk6IHZvaWQ7XHJcbiAgICByZWFkb25seSBoYXNUaXBzOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgc2hvd1N1Y2Nlc3NUaXA6IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBzaG93V2FybmluZ1RpcDogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IHNob3dFcnJvclRpcDogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IHNob3dWYWxpZGF0aW5nVGlwOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgc2hvd0lubmVyVGlwOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IobnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG56Rm9ybUl0ZW1Db21wb25lbnQ6IE56Rm9ybUl0ZW1Db21wb25lbnQsIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMik7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbn1cclxuIl19