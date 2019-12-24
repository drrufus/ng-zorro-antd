/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate, valueFunctionProp } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
function DateTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 5);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "x");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1954 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("", ctx_r1954.prefixCls, "-column-header ", ctx_r1954.prefixCls, "-week-number-header");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r1954.prefixCls, "-column-header-inner");
} }
function DateTableComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 6);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r1957 = ctx.$implicit;
    const ctx_r1955 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r1955.prefixCls, "-column-header");
    i0.ɵɵpropertyInterpolate("title", cell_r1957.short);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r1955.prefixCls, "-column-header-inner");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cell_r1957.veryShort);
} }
function DateTableComponent_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r1958 = i0.ɵɵnextContext().$implicit;
    const ctx_r1959 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r1959.prefixCls, "-week-number-cell");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r1958.weekNum, " ");
} }
function DateTableComponent_tr_6_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵlistener("click", function DateTableComponent_tr_6_td_2_Template_td_click_0_listener($event) { const cell_r1962 = ctx.$implicit; return cell_r1962.isDisabled ? null : cell_r1962.onClick(); })("mouseenter", function DateTableComponent_tr_6_td_2_Template_td_mouseenter_0_listener($event) { const cell_r1962 = ctx.$implicit; return cell_r1962.isDisabled ? null : cell_r1962.onMouseEnter(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r1962 = ctx.$implicit;
    const ctx_r1960 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", cell_r1962.title);
    i0.ɵɵproperty("ngClass", cell_r1962.classMap)("prefixCls", ctx_r1960.prefixCls)("cell", cell_r1962);
} }
function DateTableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 7);
    i0.ɵɵtemplate(1, DateTableComponent_tr_6_td_1_Template, 2, 4, "td", 8);
    i0.ɵɵtemplate(2, DateTableComponent_tr_6_td_2_Template, 1, 4, "td", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r1958 = ctx.$implicit;
    const ctx_r1956 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", row_r1958.classMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r1958.weekNum);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r1958.dateCells)("ngForTrackBy", ctx_r1956.trackByDateFn);
} }
const DATE_ROW_NUM = 6;
const DATE_COL_NUM = 7;
export class DateTableComponent {
    constructor(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.prefixCls = 'ant-calendar';
        this.showWeek = false;
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.valueChange = new EventEmitter();
    }
    set value(date) {
        // Show today by default
        this._value = this.activeDate = date || new CandyDate();
    }
    get value() {
        return this._value;
    }
    ngOnInit() {
        this.render();
    }
    ngOnChanges(changes) {
        if (this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    }
    isDateRealChange(change) {
        if (change) {
            const previousValue = change.previousValue;
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((value, index) => {
                        const previousCandyDate = previousValue[index];
                        return previousCandyDate instanceof CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                    }));
            }
            else {
                return !this.isSameDate(previousValue, currentValue);
            }
        }
        return false;
    }
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    }
    render() {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    }
    changeValueFromInside(value) {
        // Only change date not change time
        const newValue = this.value
            .setYear(value.getYear())
            .setMonth(value.getMonth())
            .setDate(value.getDate());
        this.valueChange.emit(newValue);
    }
    makeHeadWeekDays() {
        const weekDays = [];
        const start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            const day = start.addDays(colIndex);
            weekDays[colIndex] = {
                short: this.dateHelper.format(day.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                veryShort: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    }
    getVeryShortWeekFormat() {
        if (this.dateHelper.relyOnDatePipe) {
            return this.i18n
                .getLocaleId()
                .toLowerCase()
                .indexOf('zh') === 0
                ? 'EEEEE'
                : 'EEEEEE'; // Use extreme short for chinese
        }
        return 'dd';
    }
    makeWeekRows() {
        const weekRows = [];
        const firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let week = 0; week < DATE_ROW_NUM; week++) {
            const weekStart = firstDayOfMonth.addDays(week * 7);
            const row = {
                isActive: false,
                isCurrent: false,
                dateCells: [],
                year: weekStart.getYear()
            };
            for (let day = 0; day < 7; day++) {
                const date = weekStart.addDays(day);
                const dateFormat = this.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                const title = this.dateHelper.format(date.nativeDate, dateFormat);
                const label = this.dateHelper.format(date.nativeDate, this.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                const cell = {
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    dateCellRender: valueFunctionProp(this.dateCellRender, date),
                    dateFullCellRender: valueFunctionProp(this.dateFullCellRender, date),
                    content: `${date.getDate()}`,
                    onClick: () => this.changeValueFromInside(date),
                    onMouseEnter: () => this.dayHover.emit(date)
                };
                if (this.showWeek && !row.weekNum) {
                    row.weekNum = this.dateHelper.getISOWeek(date.nativeDate);
                }
                if (date.isToday()) {
                    cell.isToday = true;
                    row.isCurrent = true;
                }
                if (Array.isArray(this.selectedValue) && date.isSameMonth(this.activeDate)) {
                    // Range selections
                    const rangeValue = this.hoverValue && this.hoverValue.length ? this.hoverValue : this.selectedValue;
                    const start = rangeValue[0];
                    const end = rangeValue[1];
                    if (start) {
                        if (start.isSameDay(date)) {
                            cell.isSelectedStartDate = true;
                            cell.isSelected = true;
                            row.isActive = true;
                        }
                        if (end) {
                            if (end.isSameDay(date)) {
                                cell.isSelectedEndDate = true;
                                cell.isSelected = true;
                                row.isActive = true;
                            }
                            else if (date.isAfterDay(start) && date.isBeforeDay(end)) {
                                cell.isInRange = true;
                            }
                        }
                    }
                }
                else if (date.isSameDay(this.value)) {
                    cell.isSelected = true;
                    row.isActive = true;
                }
                if (this.disabledDate && this.disabledDate(date.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-today`]: cell.isToday,
                    [`${this.prefixCls}-last-month-cell`]: date.isBeforeMonth(this.activeDate),
                    [`${this.prefixCls}-next-month-btn-day`]: date.isAfterMonth(this.activeDate),
                    [`${this.prefixCls}-selected-day`]: cell.isSelected,
                    [`${this.prefixCls}-disabled-cell`]: cell.isDisabled,
                    [`${this.prefixCls}-selected-start-date`]: !!cell.isSelectedStartDate,
                    [`${this.prefixCls}-selected-end-date`]: !!cell.isSelectedEndDate,
                    [`${this.prefixCls}-in-range-cell`]: !!cell.isInRange
                };
                row.dateCells.push(cell);
            }
            row.classMap = {
                [`${this.prefixCls}-current-week`]: row.isCurrent,
                [`${this.prefixCls}-active-week`]: row.isActive
            };
            weekRows.push(row);
        }
        return weekRows;
    }
    trackByDateFn(_index, item) {
        return `${item.title}`;
    }
    trackByWeekFn(_index, item) {
        return `${item.year}-${item.weekNum}`;
    }
}
/** @nocollapse */ DateTableComponent.ɵfac = function DateTableComponent_Factory(t) { return new (t || DateTableComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i1.DateHelperService)); };
/** @nocollapse */ DateTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateTableComponent, selectors: [["date-table"]], inputs: { prefixCls: "prefixCls", locale: "locale", selectedValue: "selectedValue", hoverValue: "hoverValue", value: "value", activeDate: "activeDate", showWeek: "showWeek", disabledDate: "disabledDate", dateCellRender: "dateCellRender", dateFullCellRender: "dateFullCellRender" }, outputs: { dayHover: "dayHover", valueChange: "valueChange" }, exportAs: ["dateTable"], features: [i0.ɵɵNgOnChangesFeature()], decls: 7, vars: 10, consts: [["cellSpacing", "0", "role", "grid"], ["role", "row"], ["role", "columnheader", 3, "class", 4, "ngIf"], ["role", "columnheader", 3, "title", "class", 4, "ngFor", "ngForOf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", "date-table-cell", "", 3, "title", "ngClass", "prefixCls", "cell", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", "date-table-cell", "", 3, "title", "ngClass", "prefixCls", "cell", "click", "mouseenter"]], template: function DateTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementStart(1, "thead");
        i0.ɵɵelementStart(2, "tr", 1);
        i0.ɵɵtemplate(3, DateTableComponent_th_3_Template, 3, 7, "th", 2);
        i0.ɵɵtemplate(4, DateTableComponent_th_4_Template, 3, 8, "th", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "tbody");
        i0.ɵɵtemplate(6, DateTableComponent_tr_6_Template, 3, 4, "tr", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-table");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.showWeek);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.headWeekDays);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-tbody");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.weekRows)("ngForTrackBy", ctx.trackByWeekFn);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateTableComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-table',
                exportAs: 'dateTable',
                templateUrl: 'date-table.component.html'
            }]
    }], function () { return [{ type: i1.NzI18nService }, { type: i1.DateHelperService }]; }, { prefixCls: [{
            type: Input
        }], locale: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], hoverValue: [{
            type: Input
        }], value: [{
            type: Input
        }], activeDate: [{
            type: Input
        }], showWeek: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], dateCellRender: [{
            type: Input
        }], dateFullCellRender: [{
            type: Input
        }], dayHover: [{
            type: Output
        }], valueChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsiZGF0ZS10YWJsZS5jb21wb25lbnQudHMiLCJkYXRlLXRhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUlOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBMkIsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7SUNwQnpGLDZCQUtFO0lBQUEsNEJBQWtEO0lBQUEsaUJBQUM7SUFBQSxpQkFBTztJQUM1RCxpQkFBSzs7O0lBSEgsaUhBQXdFO0lBRWxFLGVBQTJDO0lBQTNDLDBFQUEyQzs7O0lBRW5ELDZCQU1FO0lBQUEsNEJBQWtEO0lBQUEsWUFBb0I7SUFBQSxpQkFBTztJQUMvRSxpQkFBSzs7OztJQUhILG9FQUFxQztJQURyQyxtREFBd0I7SUFHbEIsZUFBMkM7SUFBM0MsMEVBQTJDO0lBQUMsZUFBb0I7SUFBcEIsMENBQW9COzs7SUFNeEUsOEJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFGbUMsdUVBQXdDO0lBQzlFLGVBQ0Y7SUFERSxrREFDRjs7O0lBQ0EsOEJBVU07SUFMSixxS0FBMkIsSUFBSyxHQUFFLG9CQUFjLElBQUMsa0tBQ2pCLElBQUssR0FBRSx5QkFBbUIsSUFEVDtJQUtsRCxpQkFBSzs7OztJQVJKLG1EQUF3QjtJQUV4Qiw2Q0FBeUIsa0NBQUEsb0JBQUE7OztJQVI3Qiw2QkFDRTtJQUFBLHNFQUNFO0lBRUYsc0VBVUM7SUFDSCxpQkFBSzs7OztJQWZvRCw0Q0FB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QUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLDJCQUEyQjthQUN6Qzs7a0JBTUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBVUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCwgdmFsdWVGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuY29uc3QgREFURV9ST1dfTlVNID0gNjtcclxuY29uc3QgREFURV9DT0xfTlVNID0gNztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGF0ZS10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdkYXRlVGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS10YWJsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBfdmFsdWU6IENhbmR5RGF0ZTtcclxuICBoZWFkV2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdO1xyXG4gIHdlZWtSb3dzOiBXZWVrUm93W107XHJcblxyXG4gIEBJbnB1dCgpIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIEBJbnB1dCgpIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHZhbHVlKGRhdGU6IENhbmR5RGF0ZSkge1xyXG4gICAgLy8gU2hvdyB0b2RheSBieSBkZWZhdWx0XHJcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGUgfHwgbmV3IENhbmR5RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBhY3RpdmVEYXRlOiBDYW5keURhdGU7XHJcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRhdGVDZWxsUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIGRhdGVGdWxsQ2VsbFJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuYWN0aXZlRGF0ZSkgfHxcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMudmFsdWUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnNlbGVjdGVkVmFsdWUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLmhvdmVyVmFsdWUpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEYXRlUmVhbENoYW5nZShjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5wcmV2aW91c1ZhbHVlO1xyXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheShwcmV2aW91c1ZhbHVlKSB8fFxyXG4gICAgICAgICAgY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gcHJldmlvdXNWYWx1ZS5sZW5ndGggfHxcclxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5zb21lKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDYW5keURhdGUgPSBwcmV2aW91c1ZhbHVlW2luZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzQ2FuZHlEYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gcHJldmlvdXNDYW5keURhdGUuaXNTYW1lRGF5KHZhbHVlKSA6IHByZXZpb3VzQ2FuZHlEYXRlICE9PSB2YWx1ZTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNTYW1lRGF0ZShwcmV2aW91c1ZhbHVlIGFzIENhbmR5RGF0ZSwgY3VycmVudFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NhbWVEYXRlKGxlZnQ6IENhbmR5RGF0ZSwgcmlnaHQ6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghbGVmdCAmJiAhcmlnaHQpIHx8IChsZWZ0ICYmIHJpZ2h0ICYmIHJpZ2h0LmlzU2FtZURheShsZWZ0KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaGVhZFdlZWtEYXlzID0gdGhpcy5tYWtlSGVhZFdlZWtEYXlzKCk7XHJcbiAgICAgIHRoaXMud2Vla1Jvd3MgPSB0aGlzLm1ha2VXZWVrUm93cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VWYWx1ZUZyb21JbnNpZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgLy8gT25seSBjaGFuZ2UgZGF0ZSBub3QgY2hhbmdlIHRpbWVcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy52YWx1ZVxyXG4gICAgICAuc2V0WWVhcih2YWx1ZS5nZXRZZWFyKCkpXHJcbiAgICAgIC5zZXRNb250aCh2YWx1ZS5nZXRNb250aCgpKVxyXG4gICAgICAuc2V0RGF0ZSh2YWx1ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUhlYWRXZWVrRGF5cygpOiBXZWVrRGF5TGFiZWxbXSB7XHJcbiAgICBjb25zdCB3ZWVrRGF5czogV2Vla0RheUxhYmVsW10gPSBbXTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5hY3RpdmVEYXRlLmNhbGVuZGFyU3RhcnQoeyB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIH0pO1xyXG4gICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IERBVEVfQ09MX05VTTsgY29sSW5kZXgrKykge1xyXG4gICAgICBjb25zdCBkYXkgPSBzdGFydC5hZGREYXlzKGNvbEluZGV4KTtcclxuICAgICAgd2Vla0RheXNbY29sSW5kZXhdID0ge1xyXG4gICAgICAgIHNob3J0OiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRheS5uYXRpdmVEYXRlLCB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUgPyAnRScgOiAnZGRkJyksIC8vIGVnLiBUdWVcclxuICAgICAgICB2ZXJ5U2hvcnQ6IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF5Lm5hdGl2ZURhdGUsIHRoaXMuZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpKSAvLyBlZy4gVHVcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB3ZWVrRGF5cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pMThuXHJcbiAgICAgICAgLmdldExvY2FsZUlkKClcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5pbmRleE9mKCd6aCcpID09PSAwXHJcbiAgICAgICAgPyAnRUVFRUUnXHJcbiAgICAgICAgOiAnRUVFRUVFJzsgLy8gVXNlIGV4dHJlbWUgc2hvcnQgZm9yIGNoaW5lc2VcclxuICAgIH1cclxuICAgIHJldHVybiAnZGQnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlV2Vla1Jvd3MoKTogV2Vla1Jvd1tdIHtcclxuICAgIGNvbnN0IHdlZWtSb3dzOiBXZWVrUm93W10gPSBbXTtcclxuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5jYWxlbmRhclN0YXJ0KHsgd2Vla1N0YXJ0c09uOiB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKSB9KTtcclxuXHJcbiAgICBmb3IgKGxldCB3ZWVrID0gMDsgd2VlayA8IERBVEVfUk9XX05VTTsgd2VlaysrKSB7XHJcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IGZpcnN0RGF5T2ZNb250aC5hZGREYXlzKHdlZWsgKiA3KTtcclxuICAgICAgY29uc3Qgcm93OiBXZWVrUm93ID0ge1xyXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gICAgICAgIGRhdGVDZWxsczogW10sXHJcbiAgICAgICAgeWVhcjogd2Vla1N0YXJ0LmdldFllYXIoKVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgNzsgZGF5KyspIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gd2Vla1N0YXJ0LmFkZERheXMoZGF5KTtcclxuICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlXHJcbiAgICAgICAgICA/ICdsb25nRGF0ZSdcclxuICAgICAgICAgIDogdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ0RhdGVQaWNrZXIubGFuZy5kYXRlRm9ybWF0JywgJ1lZWVktTU0tREQnKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZS5uYXRpdmVEYXRlLCBkYXRlRm9ybWF0KTtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZS5uYXRpdmVEYXRlLCB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUgPyAnZGQnIDogJ0REJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGw6IERhdGVDZWxsID0ge1xyXG4gICAgICAgICAgdmFsdWU6IGRhdGUubmF0aXZlRGF0ZSxcclxuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcclxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICBpc1RvZGF5OiBmYWxzZSxcclxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgIGRhdGVDZWxsUmVuZGVyOiB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmRhdGVDZWxsUmVuZGVyLCBkYXRlKSwgLy8gQ3VzdG9taXplZCBjb250ZW50XHJcbiAgICAgICAgICBkYXRlRnVsbENlbGxSZW5kZXI6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZGF0ZUZ1bGxDZWxsUmVuZGVyLCBkYXRlKSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGAke2RhdGUuZ2V0RGF0ZSgpfWAsXHJcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZShkYXRlKSxcclxuICAgICAgICAgIG9uTW91c2VFbnRlcjogKCkgPT4gdGhpcy5kYXlIb3Zlci5lbWl0KGRhdGUpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1dlZWsgJiYgIXJvdy53ZWVrTnVtKSB7XHJcbiAgICAgICAgICByb3cud2Vla051bSA9IHRoaXMuZGF0ZUhlbHBlci5nZXRJU09XZWVrKGRhdGUubmF0aXZlRGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0ZS5pc1RvZGF5KCkpIHtcclxuICAgICAgICAgIGNlbGwuaXNUb2RheSA9IHRydWU7XHJcbiAgICAgICAgICByb3cuaXNDdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuc2VsZWN0ZWRWYWx1ZSkgJiYgZGF0ZS5pc1NhbWVNb250aCh0aGlzLmFjdGl2ZURhdGUpKSB7XHJcbiAgICAgICAgICAvLyBSYW5nZSBzZWxlY3Rpb25zXHJcbiAgICAgICAgICBjb25zdCByYW5nZVZhbHVlID0gdGhpcy5ob3ZlclZhbHVlICYmIHRoaXMuaG92ZXJWYWx1ZS5sZW5ndGggPyB0aGlzLmhvdmVyVmFsdWUgOiB0aGlzLnNlbGVjdGVkVmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBzdGFydCA9IHJhbmdlVmFsdWVbMF07XHJcbiAgICAgICAgICBjb25zdCBlbmQgPSByYW5nZVZhbHVlWzFdO1xyXG4gICAgICAgICAgaWYgKHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydC5pc1NhbWVEYXkoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWRTdGFydERhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgcm93LmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW5kKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVuZC5pc1NhbWVEYXkoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZEVuZERhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJvdy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlLmlzQWZ0ZXJEYXkoc3RhcnQpICYmIGRhdGUuaXNCZWZvcmVEYXkoZW5kKSkge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pc0luUmFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZS5pc1NhbWVEYXkodGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICByb3cuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKGRhdGUubmF0aXZlRGF0ZSkpIHtcclxuICAgICAgICAgIGNlbGwuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjZWxsLmNsYXNzTWFwID0ge1xyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRvZGF5YF06IGNlbGwuaXNUb2RheSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1tb250aC1jZWxsYF06IGRhdGUuaXNCZWZvcmVNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LW1vbnRoLWJ0bi1kYXlgXTogZGF0ZS5pc0FmdGVyTW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtZGF5YF06IGNlbGwuaXNTZWxlY3RlZCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWQtY2VsbGBdOiBjZWxsLmlzRGlzYWJsZWQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLXN0YXJ0LWRhdGVgXTogISFjZWxsLmlzU2VsZWN0ZWRTdGFydERhdGUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWVuZC1kYXRlYF06ICEhY2VsbC5pc1NlbGVjdGVkRW5kRGF0ZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taW4tcmFuZ2UtY2VsbGBdOiAhIWNlbGwuaXNJblJhbmdlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcm93LmRhdGVDZWxscy5wdXNoKGNlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByb3cuY2xhc3NNYXAgPSB7XHJcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jdXJyZW50LXdlZWtgXTogcm93LmlzQ3VycmVudCxcclxuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWFjdGl2ZS13ZWVrYF06IHJvdy5pc0FjdGl2ZVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgd2Vla1Jvd3MucHVzaChyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3ZWVrUm93cztcclxuICB9XHJcblxyXG4gIHRyYWNrQnlEYXRlRm4oX2luZGV4OiBudW1iZXIsIGl0ZW06IERhdGVDZWxsKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtpdGVtLnRpdGxlfWA7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5V2Vla0ZuKF9pbmRleDogbnVtYmVyLCBpdGVtOiBXZWVrUm93KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtpdGVtLnllYXJ9LSR7aXRlbS53ZWVrTnVtfWA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtEYXlMYWJlbCB7XHJcbiAgc2hvcnQ6IHN0cmluZztcclxuICB2ZXJ5U2hvcnQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlQ2VsbCB7XHJcbiAgdmFsdWU6IERhdGU7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRhdGVDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZztcclxuICBkYXRlRnVsbENlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcclxuICBpc1RvZGF5PzogYm9vbGVhbjtcclxuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICBpc1NlbGVjdGVkU3RhcnREYXRlPzogYm9vbGVhbjtcclxuICBpc1NlbGVjdGVkRW5kRGF0ZT86IGJvb2xlYW47XHJcbiAgaXNJblJhbmdlPzogYm9vbGVhbjtcclxuICBjbGFzc01hcD86IG9iamVjdDtcclxuICBvbkNsaWNrKGRhdGU6IENhbmR5RGF0ZSk6IHZvaWQ7XHJcbiAgb25Nb3VzZUVudGVyKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1JvdyB7XHJcbiAgaXNDdXJyZW50PzogYm9vbGVhbjsgLy8gSXMgdGhlIHdlZWsgdGhhdCB0b2RheSBzdGF5cyBpblxyXG4gIGlzQWN0aXZlPzogYm9vbGVhbjsgLy8gSXMgdGhlIHdlZWsgdGhhdCBjdXJyZW50IHNldHRpbmcgZGF0ZSBzdGF5cyBpblxyXG4gIHdlZWtOdW0/OiBudW1iZXI7XHJcbiAgeWVhcj86IG51bWJlcjtcclxuICBjbGFzc01hcD86IG9iamVjdDtcclxuICBkYXRlQ2VsbHM6IERhdGVDZWxsW107XHJcbn1cclxuIiwiPHRhYmxlIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXRhYmxlXCIgY2VsbFNwYWNpbmc9XCIwXCIgcm9sZT1cImdyaWRcIj5cclxuICA8dGhlYWQ+XHJcbiAgICA8dHIgcm9sZT1cInJvd1wiPlxyXG4gICAgICA8dGhcclxuICAgICAgICAqbmdJZj1cInNob3dXZWVrXCJcclxuICAgICAgICByb2xlPVwiY29sdW1uaGVhZGVyXCJcclxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jb2x1bW4taGVhZGVyIHt7IHByZWZpeENscyB9fS13ZWVrLW51bWJlci1oZWFkZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY29sdW1uLWhlYWRlci1pbm5lclwiPng8L3NwYW4+XHJcbiAgICAgIDwvdGg+XHJcbiAgICAgIDx0aFxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBjZWxsIG9mIGhlYWRXZWVrRGF5c1wiXHJcbiAgICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXHJcbiAgICAgICAgdGl0bGU9XCJ7eyBjZWxsLnNob3J0IH19XCJcclxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jb2x1bW4taGVhZGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNvbHVtbi1oZWFkZXItaW5uZXJcIj57eyBjZWxsLnZlcnlTaG9ydCB9fTwvc3Bhbj5cclxuICAgICAgPC90aD5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHkgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tdGJvZHlcIj5cclxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIHdlZWtSb3dzOyB0cmFja0J5OiB0cmFja0J5V2Vla0ZuXCIgW25nQ2xhc3NdPVwicm93LmNsYXNzTWFwXCIgcm9sZT1cInJvd1wiPlxyXG4gICAgICA8dGQgKm5nSWY9XCJyb3cud2Vla051bVwiIHJvbGU9XCJncmlkY2VsbFwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXdlZWstbnVtYmVyLWNlbGxcIj5cclxuICAgICAgICB7eyByb3cud2Vla051bSB9fVxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGRcclxuICAgICAgICAqbmdGb3I9XCJsZXQgY2VsbCBvZiByb3cuZGF0ZUNlbGxzOyB0cmFja0J5OiB0cmFja0J5RGF0ZUZuXCJcclxuICAgICAgICB0aXRsZT1cInt7IGNlbGwudGl0bGUgfX1cIlxyXG4gICAgICAgIHJvbGU9XCJncmlkY2VsbFwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiY2VsbC5jbGFzc01hcFwiXHJcbiAgICAgICAgKGNsaWNrKT1cImNlbGwuaXNEaXNhYmxlZCA/IG51bGwgOiBjZWxsLm9uQ2xpY2soKVwiXHJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwiY2VsbC5pc0Rpc2FibGVkID8gbnVsbCA6IGNlbGwub25Nb3VzZUVudGVyKClcIlxyXG4gICAgICAgIGRhdGUtdGFibGUtY2VsbFxyXG4gICAgICAgIFtwcmVmaXhDbHNdPVwicHJlZml4Q2xzXCJcclxuICAgICAgICBbY2VsbF09XCJjZWxsXCJcclxuICAgICAgPjwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbiJdfQ==