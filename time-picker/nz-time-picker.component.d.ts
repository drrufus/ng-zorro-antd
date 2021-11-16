/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzConfigService, NzUpdateHostClassService as UpdateCls } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzTimePickerComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges {
    nzConfigService: NzConfigService;
    private element;
    private renderer;
    private updateCls;
    cdr: ChangeDetectorRef;
    private _value;
    private _onChange;
    private _onTouched;
    isInit: boolean;
    origin: CdkOverlayOrigin;
    overlayPositions: ConnectionPositionPair[];
    inputRef: ElementRef<HTMLInputElement>;
    nzSize: string | null;
    nzHourStep: number;
    nzMinuteStep: number;
    nzSecondStep: number;
    nzClearText: string;
    nzPopupClassName: string;
    nzPlaceHolder: string;
    nzAddOn: TemplateRef<void>;
    nzDefaultOpenValue: Date;
    nzDisabledHours: () => number[];
    nzDisabledMinutes: (hour: number) => number[];
    nzDisabledSeconds: (hour: number, minute: number) => number[];
    nzFormat: string;
    nzOpen: boolean;
    nzUse12Hours: boolean;
    readonly nzOpenChange: EventEmitter<boolean>;
    nzHideDisabledOptions: boolean;
    nzAllowEmpty: boolean;
    nzDisabled: boolean;
    nzAutoFocus: boolean;
    value: Date | null;
    open(): void;
    close(): void;
    updateAutoFocus(): void;
    onClickClearBtn(): void;
    private setClassMap;
    focus(): void;
    blur(): void;
    constructor(nzConfigService: NzConfigService, element: ElementRef, renderer: Renderer2, updateCls: UpdateCls, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    writeValue(time: Date | null): void;
    registerOnChange(fn: (time: Date | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTimePickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTimePickerComponent, "nz-time-picker", ["nzTimePicker"], { "nzSize": "nzSize"; "nzPlaceHolder": "nzPlaceHolder"; "nzDefaultOpenValue": "nzDefaultOpenValue"; "nzOpen": "nzOpen"; "nzHideDisabledOptions": "nzHideDisabledOptions"; "nzDisabled": "nzDisabled"; "nzAutoFocus": "nzAutoFocus"; "nzFormat": "nzFormat"; "nzHourStep": "nzHourStep"; "nzMinuteStep": "nzMinuteStep"; "nzSecondStep": "nzSecondStep"; "nzClearText": "nzClearText"; "nzPopupClassName": "nzPopupClassName"; "nzAddOn": "nzAddOn"; "nzDisabledHours": "nzDisabledHours"; "nzDisabledMinutes": "nzDisabledMinutes"; "nzDisabledSeconds": "nzDisabledSeconds"; "nzUse12Hours": "nzUse12Hours"; "nzAllowEmpty": "nzAllowEmpty"; }, { "nzOpenChange": "nzOpenChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXRpbWUtcGlja2VyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaURBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4sIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBhcyBVcGRhdGVDbHMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDbHM7XHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmO1xyXG4gICAgcHJpdmF0ZSBfdmFsdWU7XHJcbiAgICBwcml2YXRlIF9vbkNoYW5nZTtcclxuICAgIHByaXZhdGUgX29uVG91Y2hlZDtcclxuICAgIGlzSW5pdDogYm9vbGVhbjtcclxuICAgIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICAgIG92ZXJsYXlQb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXTtcclxuICAgIGlucHV0UmVmOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gICAgbnpTaXplOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgbnpIb3VyU3RlcDogbnVtYmVyO1xyXG4gICAgbnpNaW51dGVTdGVwOiBudW1iZXI7XHJcbiAgICBuelNlY29uZFN0ZXA6IG51bWJlcjtcclxuICAgIG56Q2xlYXJUZXh0OiBzdHJpbmc7XHJcbiAgICBuelBvcHVwQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgICBuekFkZE9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56RGVmYXVsdE9wZW5WYWx1ZTogRGF0ZTtcclxuICAgIG56RGlzYWJsZWRIb3VyczogKCkgPT4gbnVtYmVyW107XHJcbiAgICBuekRpc2FibGVkTWludXRlczogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgICBuekRpc2FibGVkU2Vjb25kczogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdO1xyXG4gICAgbnpGb3JtYXQ6IHN0cmluZztcclxuICAgIG56T3BlbjogYm9vbGVhbjtcclxuICAgIG56VXNlMTJIb3VyczogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IG56T3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgbnpIaWRlRGlzYWJsZWRPcHRpb25zOiBib29sZWFuO1xyXG4gICAgbnpBbGxvd0VtcHR5OiBib29sZWFuO1xyXG4gICAgbnpEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG56QXV0b0ZvY3VzOiBib29sZWFuO1xyXG4gICAgdmFsdWU6IERhdGUgfCBudWxsO1xyXG4gICAgb3BlbigpOiB2b2lkO1xyXG4gICAgY2xvc2UoKTogdm9pZDtcclxuICAgIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkO1xyXG4gICAgb25DbGlja0NsZWFyQnRuKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIHNldENsYXNzTWFwO1xyXG4gICAgZm9jdXMoKTogdm9pZDtcclxuICAgIGJsdXIoKTogdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCBlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCB1cGRhdGVDbHM6IFVwZGF0ZUNscywgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIHdyaXRlVmFsdWUodGltZTogRGF0ZSB8IG51bGwpOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHRpbWU6IERhdGUgfCBudWxsKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuIl19