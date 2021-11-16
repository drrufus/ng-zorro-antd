/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgClassType, NzConfigService } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzRateComponent implements OnInit, OnDestroy, ControlValueAccessor, AfterViewInit, OnChanges {
    nzConfigService: NzConfigService;
    private renderer;
    private cdr;
    private ulElement;
    nzAllowClear: boolean;
    nzAllowHalf: boolean;
    nzDisabled: boolean;
    nzAutoFocus: boolean;
    nzCharacter: TemplateRef<void>;
    nzTooltips: string[];
    readonly nzOnBlur: EventEmitter<FocusEvent>;
    readonly nzOnFocus: EventEmitter<FocusEvent>;
    readonly nzOnHoverChange: EventEmitter<number>;
    readonly nzOnKeyDown: EventEmitter<KeyboardEvent>;
    classMap: NgClassType;
    hasHalf: boolean;
    hoverValue: number;
    prefixCls: string;
    innerPrefixCls: string;
    isFocused: boolean;
    isInit: boolean;
    starArray: number[];
    private destroy$;
    private _count;
    private _value;
    nzCount: number;
    nzValue: number;
    constructor(nzConfigService: NzConfigService, renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    onItemClick(index: number, isHalf: boolean): void;
    onItemHover(index: number, isHalf: boolean): void;
    onRateLeave(): void;
    onFocus(e: FocusEvent): void;
    onBlur(e: FocusEvent): void;
    focus(): void;
    blur(): void;
    onKeyDown(e: KeyboardEvent): void;
    setClasses(i: number): object;
    private updateStarArray;
    writeValue(value: number | null): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: number) => void): void;
    registerOnTouched(fn: () => void): void;
    onChange: (value: number) => void;
    onTouched: () => void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzRateComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzRateComponent, "nz-rate", ["nzRate"], { "nzDisabled": "nzDisabled"; "nzAutoFocus": "nzAutoFocus"; "nzTooltips": "nzTooltips"; "nzCount": "nzCount"; "nzAllowClear": "nzAllowClear"; "nzAllowHalf": "nzAllowHalf"; "nzCharacter": "nzCharacter"; }, { "nzOnBlur": "nzOnBlur"; "nzOnFocus": "nzOnFocus"; "nzOnHoverChange": "nzOnHoverChange"; "nzOnKeyDown": "nzOnKeyDown"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotcmF0ZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaURBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nQ2xhc3NUeXBlLCBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelJhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZTtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgdWxFbGVtZW50O1xyXG4gICAgbnpBbGxvd0NsZWFyOiBib29sZWFuO1xyXG4gICAgbnpBbGxvd0hhbGY6IGJvb2xlYW47XHJcbiAgICBuekRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgbnpBdXRvRm9jdXM6IGJvb2xlYW47XHJcbiAgICBuekNoYXJhY3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuelRvb2x0aXBzOiBzdHJpbmdbXTtcclxuICAgIHJlYWRvbmx5IG56T25CbHVyOiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD47XHJcbiAgICByZWFkb25seSBuek9uRm9jdXM6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PjtcclxuICAgIHJlYWRvbmx5IG56T25Ib3ZlckNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcbiAgICByZWFkb25seSBuek9uS2V5RG93bjogRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+O1xyXG4gICAgY2xhc3NNYXA6IE5nQ2xhc3NUeXBlO1xyXG4gICAgaGFzSGFsZjogYm9vbGVhbjtcclxuICAgIGhvdmVyVmFsdWU6IG51bWJlcjtcclxuICAgIHByZWZpeENsczogc3RyaW5nO1xyXG4gICAgaW5uZXJQcmVmaXhDbHM6IHN0cmluZztcclxuICAgIGlzRm9jdXNlZDogYm9vbGVhbjtcclxuICAgIGlzSW5pdDogYm9vbGVhbjtcclxuICAgIHN0YXJBcnJheTogbnVtYmVyW107XHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkO1xyXG4gICAgcHJpdmF0ZSBfY291bnQ7XHJcbiAgICBwcml2YXRlIF92YWx1ZTtcclxuICAgIG56Q291bnQ6IG51bWJlcjtcclxuICAgIG56VmFsdWU6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIG9uSXRlbUNsaWNrKGluZGV4OiBudW1iZXIsIGlzSGFsZjogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBvbkl0ZW1Ib3ZlcihpbmRleDogbnVtYmVyLCBpc0hhbGY6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgb25SYXRlTGVhdmUoKTogdm9pZDtcclxuICAgIG9uRm9jdXMoZTogRm9jdXNFdmVudCk6IHZvaWQ7XHJcbiAgICBvbkJsdXIoZTogRm9jdXNFdmVudCk6IHZvaWQ7XHJcbiAgICBmb2N1cygpOiB2b2lkO1xyXG4gICAgYmx1cigpOiB2b2lkO1xyXG4gICAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xyXG4gICAgc2V0Q2xhc3NlcyhpOiBudW1iZXIpOiBvYmplY3Q7XHJcbiAgICBwcml2YXRlIHVwZGF0ZVN0YXJBcnJheTtcclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlciB8IG51bGwpOiB2b2lkO1xyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xyXG59XHJcbiJdfQ==