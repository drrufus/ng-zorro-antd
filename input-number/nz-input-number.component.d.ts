/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzInputNumberComponent implements ControlValueAccessor, AfterViewInit, OnChanges, OnInit, OnDestroy {
    private elementRef;
    private renderer;
    private cdr;
    private focusMonitor;
    private autoStepTimer;
    private actualValue;
    private value;
    displayValue: string | number;
    isFocused: boolean;
    disabledUp: boolean;
    disabledDown: boolean;
    onChange: (value: number) => void;
    onTouched: () => void;
    readonly nzBlur: EventEmitter<any>;
    readonly nzFocus: EventEmitter<any>;
    inputElement: ElementRef<HTMLInputElement>;
    nzSize: NzSizeLDSType;
    nzMin: number;
    nzMax: number;
    nzParser: (value: any) => any;
    nzPrecision: number;
    nzPlaceHolder: string;
    nzStep: number;
    nzId: string;
    nzDisabled: boolean;
    nzAutoFocus: boolean;
    nzFormatter: (value: number) => string | number;
    [property: string]: any;
    updateAutoFocus(): void;
    onModelChange(value: string): void;
    getCurrentValidValue(value: string | number): number;
    isNotCompleteNumber(num: string | number): boolean;
    getValidValue(value?: string | number): string | number | undefined;
    toNumber(num: string | number): number;
    setValidateValue(): void;
    onBlur(): void;
    onFocus(): void;
    getRatio(e: KeyboardEvent): number;
    down(e: MouseEvent | KeyboardEvent, ratio?: number): void;
    up(e: MouseEvent | KeyboardEvent, ratio?: number): void;
    getPrecision(value: number): number;
    getMaxPrecision(currentValue: string | number, ratio: number): number;
    getPrecisionFactor(currentValue: string | number, ratio: number): number;
    upStep(val: string | number, rat: number): number;
    downStep(val: string | number, rat: number): number;
    step(type: string, e: MouseEvent | KeyboardEvent, ratio?: number): void;
    stop(): void;
    setValue(value: number, emit: boolean): void;
    onKeyDown(e: KeyboardEvent): void;
    onKeyUp(): void;
    writeValue(value: number): void;
    registerOnChange(fn: (_: number) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    focus(): void;
    blur(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzInputNumberComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzInputNumberComponent, "nz-input-number", ["nzInputNumber"], { "nzSize": "nzSize"; "nzMin": "nzMin"; "nzMax": "nzMax"; "nzParser": "nzParser"; "nzPlaceHolder": "nzPlaceHolder"; "nzStep": "nzStep"; "nzDisabled": "nzDisabled"; "nzAutoFocus": "nzAutoFocus"; "nzFormatter": "nzFormatter"; "nzPrecision": "nzPrecision"; "nzId": "nzId"; }, { "nzBlur": "nzBlur"; "nzFocus": "nzFocus"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1pbnB1dC1udW1iZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpJbnB1dE51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yO1xyXG4gICAgcHJpdmF0ZSBhdXRvU3RlcFRpbWVyO1xyXG4gICAgcHJpdmF0ZSBhY3R1YWxWYWx1ZTtcclxuICAgIHByaXZhdGUgdmFsdWU7XHJcbiAgICBkaXNwbGF5VmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICAgIGlzRm9jdXNlZDogYm9vbGVhbjtcclxuICAgIGRpc2FibGVkVXA6IGJvb2xlYW47XHJcbiAgICBkaXNhYmxlZERvd246IGJvb2xlYW47XHJcbiAgICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XHJcbiAgICByZWFkb25seSBuekJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAgcmVhZG9ubHkgbnpGb2N1czogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgICBuelNpemU6IE56U2l6ZUxEU1R5cGU7XHJcbiAgICBuek1pbjogbnVtYmVyO1xyXG4gICAgbnpNYXg6IG51bWJlcjtcclxuICAgIG56UGFyc2VyOiAodmFsdWU6IGFueSkgPT4gYW55O1xyXG4gICAgbnpQcmVjaXNpb246IG51bWJlcjtcclxuICAgIG56UGxhY2VIb2xkZXI6IHN0cmluZztcclxuICAgIG56U3RlcDogbnVtYmVyO1xyXG4gICAgbnpJZDogc3RyaW5nO1xyXG4gICAgbnpEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG56QXV0b0ZvY3VzOiBib29sZWFuO1xyXG4gICAgbnpGb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICBbcHJvcGVydHk6IHN0cmluZ106IGFueTtcclxuICAgIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkO1xyXG4gICAgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZDtcclxuICAgIGdldEN1cnJlbnRWYWxpZFZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXI7XHJcbiAgICBpc05vdENvbXBsZXRlTnVtYmVyKG51bTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbjtcclxuICAgIGdldFZhbGlkVmFsdWUodmFsdWU/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICB0b051bWJlcihudW06IHN0cmluZyB8IG51bWJlcik6IG51bWJlcjtcclxuICAgIHNldFZhbGlkYXRlVmFsdWUoKTogdm9pZDtcclxuICAgIG9uQmx1cigpOiB2b2lkO1xyXG4gICAgb25Gb2N1cygpOiB2b2lkO1xyXG4gICAgZ2V0UmF0aW8oZTogS2V5Ym9hcmRFdmVudCk6IG51bWJlcjtcclxuICAgIGRvd24oZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvPzogbnVtYmVyKTogdm9pZDtcclxuICAgIHVwKGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50LCByYXRpbz86IG51bWJlcik6IHZvaWQ7XHJcbiAgICBnZXRQcmVjaXNpb24odmFsdWU6IG51bWJlcik6IG51bWJlcjtcclxuICAgIGdldE1heFByZWNpc2lvbihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlcjtcclxuICAgIGdldFByZWNpc2lvbkZhY3RvcihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlcjtcclxuICAgIHVwU3RlcCh2YWw6IHN0cmluZyB8IG51bWJlciwgcmF0OiBudW1iZXIpOiBudW1iZXI7XHJcbiAgICBkb3duU3RlcCh2YWw6IHN0cmluZyB8IG51bWJlciwgcmF0OiBudW1iZXIpOiBudW1iZXI7XHJcbiAgICBzdGVwKHR5cGU6IHN0cmluZywgZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvPzogbnVtYmVyKTogdm9pZDtcclxuICAgIHN0b3AoKTogdm9pZDtcclxuICAgIHNldFZhbHVlKHZhbHVlOiBudW1iZXIsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xyXG4gICAgb25LZXlVcCgpOiB2b2lkO1xyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcclxuICAgIGZvY3VzKCk6IHZvaWQ7XHJcbiAgICBibHVyKCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcik7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19