/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { CandyDate, FunctionProp } from 'ng-zorro-antd/core';
import { DateHelperService, NzCalendarI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
export declare class DateTableComponent implements OnChanges, OnInit {
    private i18n;
    private dateHelper;
    _value: CandyDate;
    headWeekDays: WeekDayLabel[];
    weekRows: WeekRow[];
    prefixCls: string;
    locale: NzCalendarI18nInterface;
    selectedValue: CandyDate[];
    hoverValue: CandyDate[];
    value: CandyDate;
    activeDate: CandyDate;
    showWeek: boolean;
    disabledDate: (d: Date) => boolean;
    dateCellRender: FunctionProp<TemplateRef<Date> | string>;
    dateFullCellRender: FunctionProp<TemplateRef<Date> | string>;
    readonly dayHover: EventEmitter<CandyDate>;
    readonly valueChange: EventEmitter<CandyDate>;
    constructor(i18n: NzI18nService, dateHelper: DateHelperService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private isDateRealChange;
    private isSameDate;
    private render;
    private changeValueFromInside;
    private makeHeadWeekDays;
    private getVeryShortWeekFormat;
    private makeWeekRows;
    trackByDateFn(_index: number, item: DateCell): string;
    trackByWeekFn(_index: number, item: WeekRow): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DateTableComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DateTableComponent, "date-table", ["dateTable"], { "prefixCls": "prefixCls"; "showWeek": "showWeek"; "value": "value"; "activeDate": "activeDate"; "locale": "locale"; "selectedValue": "selectedValue"; "hoverValue": "hoverValue"; "disabledDate": "disabledDate"; "dateCellRender": "dateCellRender"; "dateFullCellRender": "dateFullCellRender"; }, { "dayHover": "dayHover"; "valueChange": "valueChange"; }, never, never>;
}
export interface WeekDayLabel {
    short: string;
    veryShort: string;
}
export interface DateCell {
    value: Date;
    label: string;
    title: string;
    dateCellRender: TemplateRef<Date> | string;
    dateFullCellRender: TemplateRef<Date> | string;
    content: string;
    isSelected?: boolean;
    isToday?: boolean;
    isDisabled?: boolean;
    isSelectedStartDate?: boolean;
    isSelectedEndDate?: boolean;
    isInRange?: boolean;
    classMap?: object;
    onClick(date: CandyDate): void;
    onMouseEnter(): void;
}
export interface WeekRow {
    isCurrent?: boolean;
    isActive?: boolean;
    weekNum?: number;
    year?: number;
    classMap?: object;
    dateCells: DateCell[];
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZGF0ZS10YWJsZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlLCBGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEYXRlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIGkxOG47XHJcbiAgICBwcml2YXRlIGRhdGVIZWxwZXI7XHJcbiAgICBfdmFsdWU6IENhbmR5RGF0ZTtcclxuICAgIGhlYWRXZWVrRGF5czogV2Vla0RheUxhYmVsW107XHJcbiAgICB3ZWVrUm93czogV2Vla1Jvd1tdO1xyXG4gICAgcHJlZml4Q2xzOiBzdHJpbmc7XHJcbiAgICBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gICAgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107XHJcbiAgICBob3ZlclZhbHVlOiBDYW5keURhdGVbXTtcclxuICAgIHZhbHVlOiBDYW5keURhdGU7XHJcbiAgICBhY3RpdmVEYXRlOiBDYW5keURhdGU7XHJcbiAgICBzaG93V2VlazogYm9vbGVhbjtcclxuICAgIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgICBkYXRlQ2VsbFJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICAgIGRhdGVGdWxsQ2VsbFJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICAgIHJlYWRvbmx5IGRheUhvdmVyOiBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPjtcclxuICAgIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPjtcclxuICAgIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UsIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIHByaXZhdGUgaXNEYXRlUmVhbENoYW5nZTtcclxuICAgIHByaXZhdGUgaXNTYW1lRGF0ZTtcclxuICAgIHByaXZhdGUgcmVuZGVyO1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VWYWx1ZUZyb21JbnNpZGU7XHJcbiAgICBwcml2YXRlIG1ha2VIZWFkV2Vla0RheXM7XHJcbiAgICBwcml2YXRlIGdldFZlcnlTaG9ydFdlZWtGb3JtYXQ7XHJcbiAgICBwcml2YXRlIG1ha2VXZWVrUm93cztcclxuICAgIHRyYWNrQnlEYXRlRm4oX2luZGV4OiBudW1iZXIsIGl0ZW06IERhdGVDZWxsKTogc3RyaW5nO1xyXG4gICAgdHJhY2tCeVdlZWtGbihfaW5kZXg6IG51bWJlciwgaXRlbTogV2Vla1Jvdyk6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtEYXlMYWJlbCB7XHJcbiAgICBzaG9ydDogc3RyaW5nO1xyXG4gICAgdmVyeVNob3J0OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlQ2VsbCB7XHJcbiAgICB2YWx1ZTogRGF0ZTtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGF0ZUNlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nO1xyXG4gICAgZGF0ZUZ1bGxDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIGlzU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgaXNUb2RheT86IGJvb2xlYW47XHJcbiAgICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIGlzU2VsZWN0ZWRTdGFydERhdGU/OiBib29sZWFuO1xyXG4gICAgaXNTZWxlY3RlZEVuZERhdGU/OiBib29sZWFuO1xyXG4gICAgaXNJblJhbmdlPzogYm9vbGVhbjtcclxuICAgIGNsYXNzTWFwPzogb2JqZWN0O1xyXG4gICAgb25DbGljayhkYXRlOiBDYW5keURhdGUpOiB2b2lkO1xyXG4gICAgb25Nb3VzZUVudGVyKCk6IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBXZWVrUm93IHtcclxuICAgIGlzQ3VycmVudD86IGJvb2xlYW47XHJcbiAgICBpc0FjdGl2ZT86IGJvb2xlYW47XHJcbiAgICB3ZWVrTnVtPzogbnVtYmVyO1xyXG4gICAgeWVhcj86IG51bWJlcjtcclxuICAgIGNsYXNzTWFwPzogb2JqZWN0O1xyXG4gICAgZGF0ZUNlbGxzOiBEYXRlQ2VsbFtdO1xyXG59XHJcbiJdfQ==