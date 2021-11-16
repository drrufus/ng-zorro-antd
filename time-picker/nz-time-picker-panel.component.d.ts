/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, DebugElement, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzUpdateHostClassService as UpdateCls } from 'ng-zorro-antd/core';
import { NzTimeValueAccessorDirective } from './nz-time-value-accessor.directive';
import { TimeHolder } from './time-holder';
import * as ɵngcc0 from '@angular/core';
export declare type NzTimePickerUnit = 'hour' | 'minute' | 'second' | '12-hour';
export declare class NzTimePickerPanelComponent implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {
    private element;
    private updateCls;
    private cdr;
    private _nzHourStep;
    private _nzMinuteStep;
    private _nzSecondStep;
    private unsubscribe$;
    private onChange;
    private onTouch;
    private _format;
    private _disabledHours;
    private _disabledMinutes;
    private _disabledSeconds;
    private _allowEmpty;
    prefixCls: string;
    time: TimeHolder;
    hourEnabled: boolean;
    minuteEnabled: boolean;
    secondEnabled: boolean;
    enabledColumns: number;
    hourRange: ReadonlyArray<{
        index: number;
        disabled: boolean;
    }>;
    minuteRange: ReadonlyArray<{
        index: number;
        disabled: boolean;
    }>;
    secondRange: ReadonlyArray<{
        index: number;
        disabled: boolean;
    }>;
    use12HoursRange: ReadonlyArray<{
        index: number;
        value: string;
    }>;
    nzTimeValueAccessorDirective: NzTimeValueAccessorDirective;
    hourListElement: DebugElement;
    minuteListElement: DebugElement;
    secondListElement: DebugElement;
    use12HoursListElement: DebugElement;
    nzInDatePicker: boolean;
    nzAddOn: TemplateRef<void>;
    nzHideDisabledOptions: boolean;
    nzClearText: string;
    nzPlaceHolder: string;
    nzUse12Hours: boolean;
    opened: boolean;
    nzDefaultOpenValue: Date;
    nzAllowEmpty: boolean;
    nzDisabledHours: () => number[];
    nzDisabledMinutes: (hour: number) => number[];
    nzDisabledSeconds: (hour: number, minute: number) => number[];
    format: string;
    nzHourStep: number;
    nzMinuteStep: number;
    nzSecondStep: number;
    selectInputRange(): void;
    buildHours(): void;
    buildMinutes(): void;
    buildSeconds(): void;
    build12Hours(): void;
    buildTimes(): void;
    selectHour(hour: {
        index: number;
        disabled: boolean;
    }): void;
    selectMinute(minute: {
        index: number;
        disabled: boolean;
    }): void;
    selectSecond(second: {
        index: number;
        disabled: boolean;
    }): void;
    select12Hours(value: {
        index: number;
        value: string;
    }): void;
    scrollToSelected(instance: HTMLElement, index: number, duration: number | undefined, unit: NzTimePickerUnit): void;
    translateIndex(index: number, unit: NzTimePickerUnit): number;
    scrollTo(element: HTMLElement, to: number, duration: number): void;
    calcIndex(array: number[], index: number): number;
    protected changed(): void;
    protected touched(): void;
    private setClassMap;
    isSelectedHour(hour: {
        index: number;
        disabled: boolean;
    }): boolean;
    isSelectedMinute(minute: {
        index: number;
        disabled: boolean;
    }): boolean;
    isSelectedSecond(second: {
        index: number;
        disabled: boolean;
    }): boolean;
    isSelected12Hours(value: {
        index: number;
        value: string;
    }): boolean;
    initPosition(): void;
    constructor(element: ElementRef, updateCls: UpdateCls, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: Date): void;
    registerOnChange(fn: (value: Date) => void): void;
    registerOnTouched(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTimePickerPanelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTimePickerPanelComponent, "nz-time-picker-panel", ["nzTimePickerPanel"], { "nzInDatePicker": "nzInDatePicker"; "nzHideDisabledOptions": "nzHideDisabledOptions"; "nzUse12Hours": "nzUse12Hours"; "opened": "opened"; "nzDefaultOpenValue": "nzDefaultOpenValue"; "nzAllowEmpty": "nzAllowEmpty"; "nzDisabledHours": "nzDisabledHours"; "nzDisabledMinutes": "nzDisabledMinutes"; "nzDisabledSeconds": "nzDisabledSeconds"; "format": "format"; "nzHourStep": "nzHourStep"; "nzMinuteStep": "nzMinuteStep"; "nzSecondStep": "nzSecondStep"; "nzAddOn": "nzAddOn"; "nzClearText": "nzClearText"; "nzPlaceHolder": "nzPlaceHolder"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdIQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGVidWdFbGVtZW50LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuL256LXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGltZUhvbGRlciB9IGZyb20gJy4vdGltZS1ob2xkZXInO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE56VGltZVBpY2tlclVuaXQgPSAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnIHwgJzEyLWhvdXInO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAgIHByaXZhdGUgZWxlbWVudDtcclxuICAgIHByaXZhdGUgdXBkYXRlQ2xzO1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIF9uekhvdXJTdGVwO1xyXG4gICAgcHJpdmF0ZSBfbnpNaW51dGVTdGVwO1xyXG4gICAgcHJpdmF0ZSBfbnpTZWNvbmRTdGVwO1xyXG4gICAgcHJpdmF0ZSB1bnN1YnNjcmliZSQ7XHJcbiAgICBwcml2YXRlIG9uQ2hhbmdlO1xyXG4gICAgcHJpdmF0ZSBvblRvdWNoO1xyXG4gICAgcHJpdmF0ZSBfZm9ybWF0O1xyXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWRIb3VycztcclxuICAgIHByaXZhdGUgX2Rpc2FibGVkTWludXRlcztcclxuICAgIHByaXZhdGUgX2Rpc2FibGVkU2Vjb25kcztcclxuICAgIHByaXZhdGUgX2FsbG93RW1wdHk7XHJcbiAgICBwcmVmaXhDbHM6IHN0cmluZztcclxuICAgIHRpbWU6IFRpbWVIb2xkZXI7XHJcbiAgICBob3VyRW5hYmxlZDogYm9vbGVhbjtcclxuICAgIG1pbnV0ZUVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBzZWNvbmRFbmFibGVkOiBib29sZWFuO1xyXG4gICAgZW5hYmxlZENvbHVtbnM6IG51bWJlcjtcclxuICAgIGhvdXJSYW5nZTogUmVhZG9ubHlBcnJheTx7XHJcbiAgICAgICAgaW5kZXg6IG51bWJlcjtcclxuICAgICAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIH0+O1xyXG4gICAgbWludXRlUmFuZ2U6IFJlYWRvbmx5QXJyYXk8e1xyXG4gICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICB9PjtcclxuICAgIHNlY29uZFJhbmdlOiBSZWFkb25seUFycmF5PHtcclxuICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgfT47XHJcbiAgICB1c2UxMkhvdXJzUmFuZ2U6IFJlYWRvbmx5QXJyYXk8e1xyXG4gICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgdmFsdWU6IHN0cmluZztcclxuICAgIH0+O1xyXG4gICAgbnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZTogTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZTtcclxuICAgIGhvdXJMaXN0RWxlbWVudDogRGVidWdFbGVtZW50O1xyXG4gICAgbWludXRlTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcclxuICAgIHNlY29uZExpc3RFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XHJcbiAgICB1c2UxMkhvdXJzTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcclxuICAgIG56SW5EYXRlUGlja2VyOiBib29sZWFuO1xyXG4gICAgbnpBZGRPbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuekhpZGVEaXNhYmxlZE9wdGlvbnM6IGJvb2xlYW47XHJcbiAgICBuekNsZWFyVGV4dDogc3RyaW5nO1xyXG4gICAgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gICAgbnpVc2UxMkhvdXJzOiBib29sZWFuO1xyXG4gICAgb3BlbmVkOiBib29sZWFuO1xyXG4gICAgbnpEZWZhdWx0T3BlblZhbHVlOiBEYXRlO1xyXG4gICAgbnpBbGxvd0VtcHR5OiBib29sZWFuO1xyXG4gICAgbnpEaXNhYmxlZEhvdXJzOiAoKSA9PiBudW1iZXJbXTtcclxuICAgIG56RGlzYWJsZWRNaW51dGVzOiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXTtcclxuICAgIG56RGlzYWJsZWRTZWNvbmRzOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgICBmb3JtYXQ6IHN0cmluZztcclxuICAgIG56SG91clN0ZXA6IG51bWJlcjtcclxuICAgIG56TWludXRlU3RlcDogbnVtYmVyO1xyXG4gICAgbnpTZWNvbmRTdGVwOiBudW1iZXI7XHJcbiAgICBzZWxlY3RJbnB1dFJhbmdlKCk6IHZvaWQ7XHJcbiAgICBidWlsZEhvdXJzKCk6IHZvaWQ7XHJcbiAgICBidWlsZE1pbnV0ZXMoKTogdm9pZDtcclxuICAgIGJ1aWxkU2Vjb25kcygpOiB2b2lkO1xyXG4gICAgYnVpbGQxMkhvdXJzKCk6IHZvaWQ7XHJcbiAgICBidWlsZFRpbWVzKCk6IHZvaWQ7XHJcbiAgICBzZWxlY3RIb3VyKGhvdXI6IHtcclxuICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgfSk6IHZvaWQ7XHJcbiAgICBzZWxlY3RNaW51dGUobWludXRlOiB7XHJcbiAgICAgICAgaW5kZXg6IG51bWJlcjtcclxuICAgICAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIH0pOiB2b2lkO1xyXG4gICAgc2VsZWN0U2Vjb25kKHNlY29uZDoge1xyXG4gICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICB9KTogdm9pZDtcclxuICAgIHNlbGVjdDEySG91cnModmFsdWU6IHtcclxuICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICB9KTogdm9pZDtcclxuICAgIHNjcm9sbFRvU2VsZWN0ZWQoaW5zdGFuY2U6IEhUTUxFbGVtZW50LCBpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyIHwgdW5kZWZpbmVkLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogdm9pZDtcclxuICAgIHRyYW5zbGF0ZUluZGV4KGluZGV4OiBudW1iZXIsIHVuaXQ6IE56VGltZVBpY2tlclVuaXQpOiBudW1iZXI7XHJcbiAgICBzY3JvbGxUbyhlbGVtZW50OiBIVE1MRWxlbWVudCwgdG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IHZvaWQ7XHJcbiAgICBjYWxjSW5kZXgoYXJyYXk6IG51bWJlcltdLCBpbmRleDogbnVtYmVyKTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGNoYW5nZWQoKTogdm9pZDtcclxuICAgIHByb3RlY3RlZCB0b3VjaGVkKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIHNldENsYXNzTWFwO1xyXG4gICAgaXNTZWxlY3RlZEhvdXIoaG91cjoge1xyXG4gICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICB9KTogYm9vbGVhbjtcclxuICAgIGlzU2VsZWN0ZWRNaW51dGUobWludXRlOiB7XHJcbiAgICAgICAgaW5kZXg6IG51bWJlcjtcclxuICAgICAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIH0pOiBib29sZWFuO1xyXG4gICAgaXNTZWxlY3RlZFNlY29uZChzZWNvbmQ6IHtcclxuICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgfSk6IGJvb2xlYW47XHJcbiAgICBpc1NlbGVjdGVkMTJIb3Vycyh2YWx1ZToge1xyXG4gICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgdmFsdWU6IHN0cmluZztcclxuICAgIH0pOiBib29sZWFuO1xyXG4gICAgaW5pdFBvc2l0aW9uKCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCB1cGRhdGVDbHM6IFVwZGF0ZUNscywgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IERhdGUpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG59XHJcbiJdfQ==