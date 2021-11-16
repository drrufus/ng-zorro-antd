/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DateHelperService, NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { CandyDate } from 'ng-zorro-antd/core';
import { PanelMode } from '../../standard-types';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarHeaderComponent implements OnInit, OnChanges {
    private dateHelper;
    locale: NzCalendarI18nInterface;
    enablePrev: boolean;
    enableNext: boolean;
    disabledMonth: (date: Date) => boolean;
    disabledYear: (date: Date) => boolean;
    showTimePicker: boolean;
    value: CandyDate;
    readonly valueChange: EventEmitter<CandyDate>;
    panelMode: PanelMode;
    readonly panelModeChange: EventEmitter<PanelMode>;
    readonly chooseDecade: EventEmitter<CandyDate>;
    readonly chooseYear: EventEmitter<CandyDate>;
    readonly chooseMonth: EventEmitter<CandyDate>;
    prefixCls: string;
    yearMonthDaySelectors: YearMonthDaySelector[];
    private yearToMonth;
    constructor(dateHelper: DateHelperService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    previousYear(): void;
    nextYear(): void;
    previousMonth(): void;
    nextMonth(): void;
    changePanel(mode: PanelMode, value?: CandyDate): void;
    onChooseDecade(value: CandyDate): void;
    onChooseYear(value: CandyDate): void;
    onChooseMonth(value: CandyDate): void;
    changeToMonthPanel(): void;
    private render;
    private gotoMonth;
    private gotoYear;
    private changeValueFromInside;
    private formatDateTime;
    private createYearMonthDaySelectors;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarHeaderComponent, "calendar-header", ["calendarHeader"], { "enablePrev": "enablePrev"; "enableNext": "enableNext"; "showTimePicker": "showTimePicker"; "value": "value"; "locale": "locale"; "disabledMonth": "disabledMonth"; "disabledYear": "disabledYear"; "panelMode": "panelMode"; }, { "valueChange": "valueChange"; "panelModeChange": "panelModeChange"; "chooseDecade": "chooseDecade"; "chooseYear": "chooseYear"; "chooseMonth": "chooseMonth"; }, never, never>;
}
export interface YearMonthDaySelector {
    className: string;
    title?: string;
    label: string;
    onClick?(): void;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYWxlbmRhci1oZWFkZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFBhbmVsTW9kZSB9IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBwcml2YXRlIGRhdGVIZWxwZXI7XHJcbiAgICBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gICAgZW5hYmxlUHJldjogYm9vbGVhbjtcclxuICAgIGVuYWJsZU5leHQ6IGJvb2xlYW47XHJcbiAgICBkaXNhYmxlZE1vbnRoOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICAgIGRpc2FibGVkWWVhcjogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgICBzaG93VGltZVBpY2tlcjogYm9vbGVhbjtcclxuICAgIHZhbHVlOiBDYW5keURhdGU7XHJcbiAgICByZWFkb25seSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT47XHJcbiAgICBwYW5lbE1vZGU6IFBhbmVsTW9kZTtcclxuICAgIHJlYWRvbmx5IHBhbmVsTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPFBhbmVsTW9kZT47XHJcbiAgICByZWFkb25seSBjaG9vc2VEZWNhZGU6IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+O1xyXG4gICAgcmVhZG9ubHkgY2hvb3NlWWVhcjogRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT47XHJcbiAgICByZWFkb25seSBjaG9vc2VNb250aDogRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT47XHJcbiAgICBwcmVmaXhDbHM6IHN0cmluZztcclxuICAgIHllYXJNb250aERheVNlbGVjdG9yczogWWVhck1vbnRoRGF5U2VsZWN0b3JbXTtcclxuICAgIHByaXZhdGUgeWVhclRvTW9udGg7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSk7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBwcmV2aW91c1llYXIoKTogdm9pZDtcclxuICAgIG5leHRZZWFyKCk6IHZvaWQ7XHJcbiAgICBwcmV2aW91c01vbnRoKCk6IHZvaWQ7XHJcbiAgICBuZXh0TW9udGgoKTogdm9pZDtcclxuICAgIGNoYW5nZVBhbmVsKG1vZGU6IFBhbmVsTW9kZSwgdmFsdWU/OiBDYW5keURhdGUpOiB2b2lkO1xyXG4gICAgb25DaG9vc2VEZWNhZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQ7XHJcbiAgICBvbkNob29zZVllYXIodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQ7XHJcbiAgICBvbkNob29zZU1vbnRoKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkO1xyXG4gICAgY2hhbmdlVG9Nb250aFBhbmVsKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIHJlbmRlcjtcclxuICAgIHByaXZhdGUgZ290b01vbnRoO1xyXG4gICAgcHJpdmF0ZSBnb3RvWWVhcjtcclxuICAgIHByaXZhdGUgY2hhbmdlVmFsdWVGcm9tSW5zaWRlO1xyXG4gICAgcHJpdmF0ZSBmb3JtYXREYXRlVGltZTtcclxuICAgIHByaXZhdGUgY3JlYXRlWWVhck1vbnRoRGF5U2VsZWN0b3JzO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgWWVhck1vbnRoRGF5U2VsZWN0b3Ige1xyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBvbkNsaWNrPygpOiB2b2lkO1xyXG59XHJcbiJdfQ==