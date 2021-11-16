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
import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NzRadioComponent implements ControlValueAccessor, AfterViewInit, OnChanges, OnDestroy {
    private elementRef;
    private renderer;
    private cdr;
    private focusMonitor;
    select$: Subject<NzRadioComponent>;
    touched$: Subject<void>;
    checked: boolean;
    name: string;
    isNgModel: boolean;
    onChange: (_: boolean) => void;
    onTouched: () => void;
    inputElement: ElementRef;
    nzValue: any;
    nzDisabled: boolean;
    nzAutoFocus: boolean;
    nzLabelledById: string | null;
    nzTabIndex: number | null;
    updateAutoFocus(): void;
    onClick(event: MouseEvent): void;
    focus(): void;
    blur(): void;
    markForCheck(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => {}): void;
    registerOnTouched(fn: () => {}): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzRadioComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzRadioComponent, "[nz-radio]", ["nzRadio"], { "nzDisabled": "nzDisabled"; "nzAutoFocus": "nzAutoFocus"; "nzLabelledById": "nzLabelledById"; "nzTabIndex": "nzTabIndex"; "nzValue": "nzValue"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXJhZGlvLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjtcclxuICAgIHNlbGVjdCQ6IFN1YmplY3Q8TnpSYWRpb0NvbXBvbmVudD47XHJcbiAgICB0b3VjaGVkJDogU3ViamVjdDx2b2lkPjtcclxuICAgIGNoZWNrZWQ6IGJvb2xlYW47XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpc05nTW9kZWw6IGJvb2xlYW47XHJcbiAgICBvbkNoYW5nZTogKF86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XHJcbiAgICBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgICBuelZhbHVlOiBhbnk7XHJcbiAgICBuekRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgbnpBdXRvRm9jdXM6IGJvb2xlYW47XHJcbiAgICBuekxhYmVsbGVkQnlJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIG56VGFiSW5kZXg6IG51bWJlciB8IG51bGw7XHJcbiAgICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZDtcclxuICAgIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xyXG4gICAgZm9jdXMoKTogdm9pZDtcclxuICAgIGJsdXIoKTogdm9pZDtcclxuICAgIG1hcmtGb3JDaGVjaygpOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IpO1xyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGJvb2xlYW4pID0+IHt9KTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=