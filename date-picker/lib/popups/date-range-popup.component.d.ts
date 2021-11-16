/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { CandyDate, FunctionProp } from 'ng-zorro-antd/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { CompatibleValue, DisabledDateFn, DisabledTimeConfig, DisabledTimeFn, PanelMode, PresetRanges, SupportTimeOptions } from '../../standard-types';
import * as ɵngcc0 from '@angular/core';
export declare class DateRangePopupComponent implements OnInit, OnChanges {
    isRange: boolean;
    showWeek: boolean;
    locale: NzCalendarI18nInterface;
    format: string;
    placeholder: string | string[];
    disabledDate: DisabledDateFn;
    disabledTime: DisabledTimeFn;
    showToday: boolean;
    showTime: SupportTimeOptions | boolean;
    extraFooter: TemplateRef<void> | string;
    ranges: PresetRanges;
    dateRender: FunctionProp<TemplateRef<Date> | string>;
    popupStyle: object;
    dropdownClassName: string;
    panelMode: PanelMode | PanelMode[];
    value: CompatibleValue;
    readonly panelModeChange: EventEmitter<"decade" | "year" | "month" | "date" | "time" | PanelMode[]>;
    readonly calendarChange: EventEmitter<CompatibleValue>;
    readonly valueChange: EventEmitter<CompatibleValue>;
    readonly inputChange: EventEmitter<CompatibleValue>;
    readonly resultOk: EventEmitter<void>;
    readonly closePicker: EventEmitter<void>;
    prefixCls: string;
    showTimePicker: boolean;
    timeOptions: SupportTimeOptions | SupportTimeOptions[] | null;
    valueForRangeShow: CandyDate[];
    selectedValue: CandyDate[];
    hoverValue: CandyDate[];
    readonly hasTimePicker: boolean;
    readonly hasFooter: boolean;
    private partTypeMap;
    [property: string]: any;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onShowTimePickerChange(show: boolean): void;
    onClickOk(): void;
    onClickToday(value: CandyDate): void;
    onDayHover(value: CandyDate): void;
    onPanelModeChange(mode: PanelMode, partType?: RangePartType): void;
    onHeaderChange(value: CandyDate, partType?: RangePartType): void;
    onSelectTime(value: CandyDate, partType?: RangePartType): void;
    changeValueFromInput(value: {
        date: CandyDate;
        isEnter: boolean;
    }, partType?: RangePartType): void;
    changeValueFromSelect(value: CandyDate): void;
    enablePrevNext(direction: 'prev' | 'next', partType?: RangePartType): boolean;
    getPanelMode(partType?: RangePartType): PanelMode;
    getValue(partType?: RangePartType): CandyDate;
    getValueBySelector(partType?: RangePartType): CandyDate;
    getPartTypeIndex(partType?: RangePartType): number;
    getPlaceholder(partType?: RangePartType): string;
    hasSelectedValue(): boolean;
    disabledStartTime: (value: Date | Date[]) => DisabledTimeConfig;
    disabledEndTime: (value: Date | Date[]) => DisabledTimeConfig;
    isAllowedSelectedValue(): boolean;
    timePickerDisabled(): boolean;
    okDisabled(): boolean;
    getTimeOptions(partType?: RangePartType): SupportTimeOptions | null;
    onClickPresetRange(val: PresetRanges[keyof PresetRanges]): void;
    onPresetRangeMouseLeave(): void;
    onHoverPresetRange(val: PresetRanges[keyof PresetRanges]): void;
    getObjectKeys(obj: object): string[];
    private closePickerPanel;
    private clearHoverValue;
    private buildTimeOptions;
    private overrideTimeOptions;
    private setValueFromInput;
    private setValue;
    private overrideHms;
    private isValidRange;
    private normalizeRangeValue;
    private setRangeValue;
    private cloneRangeDate;
    private initialArray;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DateRangePopupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DateRangePopupComponent, "date-range-popup", ["dateRangePopup"], { "value": "value"; "panelMode": "panelMode"; "isRange": "isRange"; "showWeek": "showWeek"; "locale": "locale"; "format": "format"; "placeholder": "placeholder"; "disabledDate": "disabledDate"; "disabledTime": "disabledTime"; "showToday": "showToday"; "showTime": "showTime"; "extraFooter": "extraFooter"; "ranges": "ranges"; "dateRender": "dateRender"; "popupStyle": "popupStyle"; "dropdownClassName": "dropdownClassName"; }, { "panelModeChange": "panelModeChange"; "calendarChange": "calendarChange"; "valueChange": "valueChange"; "inputChange": "inputChange"; "resultOk": "resultOk"; "closePicker": "closePicker"; }, never, never>;
}
export declare type RangePartType = 'left' | 'right';

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRFQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgQ29tcGF0aWJsZVZhbHVlLCBEaXNhYmxlZERhdGVGbiwgRGlzYWJsZWRUaW1lQ29uZmlnLCBEaXNhYmxlZFRpbWVGbiwgUGFuZWxNb2RlLCBQcmVzZXRSYW5nZXMsIFN1cHBvcnRUaW1lT3B0aW9ucyB9IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBpc1JhbmdlOiBib29sZWFuO1xyXG4gICAgc2hvd1dlZWs6IGJvb2xlYW47XHJcbiAgICBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gICAgZm9ybWF0OiBzdHJpbmc7XHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICBkaXNhYmxlZERhdGU6IERpc2FibGVkRGF0ZUZuO1xyXG4gICAgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjtcclxuICAgIHNob3dUb2RheTogYm9vbGVhbjtcclxuICAgIHNob3dUaW1lOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuO1xyXG4gICAgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xyXG4gICAgcmFuZ2VzOiBQcmVzZXRSYW5nZXM7XHJcbiAgICBkYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gICAgcG9wdXBTdHlsZTogb2JqZWN0O1xyXG4gICAgZHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcclxuICAgIHBhbmVsTW9kZTogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XHJcbiAgICB2YWx1ZTogQ29tcGF0aWJsZVZhbHVlO1xyXG4gICAgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8XCJkZWNhZGVcIiB8IFwieWVhclwiIHwgXCJtb250aFwiIHwgXCJkYXRlXCIgfCBcInRpbWVcIiB8IFBhbmVsTW9kZVtdPjtcclxuICAgIHJlYWRvbmx5IGNhbGVuZGFyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZVZhbHVlPjtcclxuICAgIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZVZhbHVlPjtcclxuICAgIHJlYWRvbmx5IGlucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZVZhbHVlPjtcclxuICAgIHJlYWRvbmx5IHJlc3VsdE9rOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBjbG9zZVBpY2tlcjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgcHJlZml4Q2xzOiBzdHJpbmc7XHJcbiAgICBzaG93VGltZVBpY2tlcjogYm9vbGVhbjtcclxuICAgIHRpbWVPcHRpb25zOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBTdXBwb3J0VGltZU9wdGlvbnNbXSB8IG51bGw7XHJcbiAgICB2YWx1ZUZvclJhbmdlU2hvdzogQ2FuZHlEYXRlW107XHJcbiAgICBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTtcclxuICAgIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdO1xyXG4gICAgcmVhZG9ubHkgaGFzVGltZVBpY2tlcjogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IGhhc0Zvb3RlcjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgcGFydFR5cGVNYXA7XHJcbiAgICBbcHJvcGVydHk6IHN0cmluZ106IGFueTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG9uU2hvd1RpbWVQaWNrZXJDaGFuZ2Uoc2hvdzogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBvbkNsaWNrT2soKTogdm9pZDtcclxuICAgIG9uQ2xpY2tUb2RheSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZDtcclxuICAgIG9uRGF5SG92ZXIodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQ7XHJcbiAgICBvblBhbmVsTW9kZUNoYW5nZShtb2RlOiBQYW5lbE1vZGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQ7XHJcbiAgICBvbkhlYWRlckNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkO1xyXG4gICAgb25TZWxlY3RUaW1lKHZhbHVlOiBDYW5keURhdGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQ7XHJcbiAgICBjaGFuZ2VWYWx1ZUZyb21JbnB1dCh2YWx1ZToge1xyXG4gICAgICAgIGRhdGU6IENhbmR5RGF0ZTtcclxuICAgICAgICBpc0VudGVyOiBib29sZWFuO1xyXG4gICAgfSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZDtcclxuICAgIGNoYW5nZVZhbHVlRnJvbVNlbGVjdCh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZDtcclxuICAgIGVuYWJsZVByZXZOZXh0KGRpcmVjdGlvbjogJ3ByZXYnIHwgJ25leHQnLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBib29sZWFuO1xyXG4gICAgZ2V0UGFuZWxNb2RlKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IFBhbmVsTW9kZTtcclxuICAgIGdldFZhbHVlKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IENhbmR5RGF0ZTtcclxuICAgIGdldFZhbHVlQnlTZWxlY3RvcihwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBDYW5keURhdGU7XHJcbiAgICBnZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IG51bWJlcjtcclxuICAgIGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZztcclxuICAgIGhhc1NlbGVjdGVkVmFsdWUoKTogYm9vbGVhbjtcclxuICAgIGRpc2FibGVkU3RhcnRUaW1lOiAodmFsdWU6IERhdGUgfCBEYXRlW10pID0+IERpc2FibGVkVGltZUNvbmZpZztcclxuICAgIGRpc2FibGVkRW5kVGltZTogKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKSA9PiBEaXNhYmxlZFRpbWVDb25maWc7XHJcbiAgICBpc0FsbG93ZWRTZWxlY3RlZFZhbHVlKCk6IGJvb2xlYW47XHJcbiAgICB0aW1lUGlja2VyRGlzYWJsZWQoKTogYm9vbGVhbjtcclxuICAgIG9rRGlzYWJsZWQoKTogYm9vbGVhbjtcclxuICAgIGdldFRpbWVPcHRpb25zKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IG51bGw7XHJcbiAgICBvbkNsaWNrUHJlc2V0UmFuZ2UodmFsOiBQcmVzZXRSYW5nZXNba2V5b2YgUHJlc2V0UmFuZ2VzXSk6IHZvaWQ7XHJcbiAgICBvblByZXNldFJhbmdlTW91c2VMZWF2ZSgpOiB2b2lkO1xyXG4gICAgb25Ib3ZlclByZXNldFJhbmdlKHZhbDogUHJlc2V0UmFuZ2VzW2tleW9mIFByZXNldFJhbmdlc10pOiB2b2lkO1xyXG4gICAgZ2V0T2JqZWN0S2V5cyhvYmo6IG9iamVjdCk6IHN0cmluZ1tdO1xyXG4gICAgcHJpdmF0ZSBjbG9zZVBpY2tlclBhbmVsO1xyXG4gICAgcHJpdmF0ZSBjbGVhckhvdmVyVmFsdWU7XHJcbiAgICBwcml2YXRlIGJ1aWxkVGltZU9wdGlvbnM7XHJcbiAgICBwcml2YXRlIG92ZXJyaWRlVGltZU9wdGlvbnM7XHJcbiAgICBwcml2YXRlIHNldFZhbHVlRnJvbUlucHV0O1xyXG4gICAgcHJpdmF0ZSBzZXRWYWx1ZTtcclxuICAgIHByaXZhdGUgb3ZlcnJpZGVIbXM7XHJcbiAgICBwcml2YXRlIGlzVmFsaWRSYW5nZTtcclxuICAgIHByaXZhdGUgbm9ybWFsaXplUmFuZ2VWYWx1ZTtcclxuICAgIHByaXZhdGUgc2V0UmFuZ2VWYWx1ZTtcclxuICAgIHByaXZhdGUgY2xvbmVSYW5nZURhdGU7XHJcbiAgICBwcml2YXRlIGluaXRpYWxBcnJheTtcclxufVxyXG5leHBvcnQgZGVjbGFyZSB0eXBlIFJhbmdlUGFydFR5cGUgPSAnbGVmdCcgfCAncmlnaHQnO1xyXG4iXX0=