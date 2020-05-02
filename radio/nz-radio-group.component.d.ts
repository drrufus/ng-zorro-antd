/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core';
import { NzRadioComponent } from './nz-radio.component';
import * as ɵngcc0 from '@angular/core';
export declare type NzRadioButtonStyle = 'outline' | 'solid';
export declare class NzRadioGroupComponent implements AfterContentInit, ControlValueAccessor, OnDestroy, OnChanges {
    private cdr;
    private value;
    private destroy$;
    private selectSubscription;
    private touchedSubscription;
    onChange: (_: string) => void;
    onTouched: () => void;
    radios: QueryList<NzRadioComponent>;
    nzDisabled: boolean;
    nzButtonStyle: NzRadioButtonStyle;
    nzSize: NzSizeLDSType;
    nzName: string;
    nzLabelledById: string | null;
    updateChildrenStatus(): void;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzRadioGroupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzRadioGroupComponent, "nz-radio-group", ["nzRadioGroup"], { "nzButtonStyle": "nzButtonStyle"; "nzSize": "nzSize"; "nzLabelledById": "nzLabelledById"; "nzDisabled": "nzDisabled"; "nzName": "nzName"; }, {}, ["radios"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tZ3JvdXAuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXJhZGlvLWdyb3VwLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56UmFkaW9Db21wb25lbnQgfSBmcm9tICcuL256LXJhZGlvLmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTnpSYWRpb0J1dHRvblN0eWxlID0gJ291dGxpbmUnIHwgJ3NvbGlkJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpSYWRpb0dyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgcHJpdmF0ZSB2YWx1ZTtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBwcml2YXRlIHNlbGVjdFN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgdG91Y2hlZFN1YnNjcmlwdGlvbjtcclxuICAgIG9uQ2hhbmdlOiAoXzogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xyXG4gICAgcmFkaW9zOiBRdWVyeUxpc3Q8TnpSYWRpb0NvbXBvbmVudD47XHJcbiAgICBuekRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgbnpCdXR0b25TdHlsZTogTnpSYWRpb0J1dHRvblN0eWxlO1xyXG4gICAgbnpTaXplOiBOelNpemVMRFNUeXBlO1xyXG4gICAgbnpOYW1lOiBzdHJpbmc7XHJcbiAgICBuekxhYmVsbGVkQnlJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIHVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKTtcclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcclxufVxyXG4iXX0=