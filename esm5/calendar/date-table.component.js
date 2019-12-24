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
    var ctx_r2010 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("", ctx_r2010.prefixCls, "-column-header ", ctx_r2010.prefixCls, "-week-number-header");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2010.prefixCls, "-column-header-inner");
} }
function DateTableComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 6);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r2013 = ctx.$implicit;
    var ctx_r2011 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2011.prefixCls, "-column-header");
    i0.ɵɵpropertyInterpolate("title", cell_r2013.short);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2011.prefixCls, "-column-header-inner");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cell_r2013.veryShort);
} }
function DateTableComponent_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r2014 = i0.ɵɵnextContext().$implicit;
    var ctx_r2015 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2015.prefixCls, "-week-number-cell");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r2014.weekNum, " ");
} }
function DateTableComponent_tr_6_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵlistener("click", function DateTableComponent_tr_6_td_2_Template_td_click_0_listener($event) { var cell_r2018 = ctx.$implicit; return cell_r2018.isDisabled ? null : cell_r2018.onClick(); })("mouseenter", function DateTableComponent_tr_6_td_2_Template_td_mouseenter_0_listener($event) { var cell_r2018 = ctx.$implicit; return cell_r2018.isDisabled ? null : cell_r2018.onMouseEnter(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r2018 = ctx.$implicit;
    var ctx_r2016 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", cell_r2018.title);
    i0.ɵɵproperty("ngClass", cell_r2018.classMap)("prefixCls", ctx_r2016.prefixCls)("cell", cell_r2018);
} }
function DateTableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 7);
    i0.ɵɵtemplate(1, DateTableComponent_tr_6_td_1_Template, 2, 4, "td", 8);
    i0.ɵɵtemplate(2, DateTableComponent_tr_6_td_2_Template, 1, 4, "td", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r2014 = ctx.$implicit;
    var ctx_r2012 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", row_r2014.classMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r2014.weekNum);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r2014.dateCells)("ngForTrackBy", ctx_r2012.trackByDateFn);
} }
var DATE_ROW_NUM = 6;
var DATE_COL_NUM = 7;
var DateTableComponent = /** @class */ (function () {
    function DateTableComponent(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.prefixCls = 'ant-calendar';
        this.showWeek = false;
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.valueChange = new EventEmitter();
    }
    Object.defineProperty(DateTableComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (date) {
            // Show today by default
            this._value = this.activeDate = date || new CandyDate();
        },
        enumerable: true,
        configurable: true
    });
    DateTableComponent.prototype.ngOnInit = function () {
        this.render();
    };
    DateTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    };
    DateTableComponent.prototype.isDateRealChange = function (change) {
        if (change) {
            var previousValue_1 = change.previousValue;
            var currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue_1) ||
                    currentValue.length !== previousValue_1.length ||
                    currentValue.some(function (value, index) {
                        var previousCandyDate = previousValue_1[index];
                        return previousCandyDate instanceof CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                    }));
            }
            else {
                return !this.isSameDate(previousValue_1, currentValue);
            }
        }
        return false;
    };
    DateTableComponent.prototype.isSameDate = function (left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    };
    DateTableComponent.prototype.render = function () {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    };
    DateTableComponent.prototype.changeValueFromInside = function (value) {
        // Only change date not change time
        var newValue = this.value
            .setYear(value.getYear())
            .setMonth(value.getMonth())
            .setDate(value.getDate());
        this.valueChange.emit(newValue);
    };
    DateTableComponent.prototype.makeHeadWeekDays = function () {
        var weekDays = [];
        var start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            var day = start.addDays(colIndex);
            weekDays[colIndex] = {
                short: this.dateHelper.format(day.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                veryShort: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    };
    DateTableComponent.prototype.getVeryShortWeekFormat = function () {
        if (this.dateHelper.relyOnDatePipe) {
            return this.i18n
                .getLocaleId()
                .toLowerCase()
                .indexOf('zh') === 0
                ? 'EEEEE'
                : 'EEEEEE'; // Use extreme short for chinese
        }
        return 'dd';
    };
    DateTableComponent.prototype.makeWeekRows = function () {
        var _a;
        var _this = this;
        var weekRows = [];
        var firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var week = 0; week < DATE_ROW_NUM; week++) {
            var weekStart = firstDayOfMonth.addDays(week * 7);
            var row = {
                isActive: false,
                isCurrent: false,
                dateCells: [],
                year: weekStart.getYear()
            };
            var _loop_1 = function (day) {
                var _a;
                var date = weekStart.addDays(day);
                var dateFormat = this_1.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this_1.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                var title = this_1.dateHelper.format(date.nativeDate, dateFormat);
                var label = this_1.dateHelper.format(date.nativeDate, this_1.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                var cell = {
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    dateCellRender: valueFunctionProp(this_1.dateCellRender, date),
                    dateFullCellRender: valueFunctionProp(this_1.dateFullCellRender, date),
                    content: "" + date.getDate(),
                    onClick: function () { return _this.changeValueFromInside(date); },
                    onMouseEnter: function () { return _this.dayHover.emit(date); }
                };
                if (this_1.showWeek && !row.weekNum) {
                    row.weekNum = this_1.dateHelper.getISOWeek(date.nativeDate);
                }
                if (date.isToday()) {
                    cell.isToday = true;
                    row.isCurrent = true;
                }
                if (Array.isArray(this_1.selectedValue) && date.isSameMonth(this_1.activeDate)) {
                    // Range selections
                    var rangeValue = this_1.hoverValue && this_1.hoverValue.length ? this_1.hoverValue : this_1.selectedValue;
                    var start = rangeValue[0];
                    var end = rangeValue[1];
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
                else if (date.isSameDay(this_1.value)) {
                    cell.isSelected = true;
                    row.isActive = true;
                }
                if (this_1.disabledDate && this_1.disabledDate(date.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-today"] = cell.isToday,
                    _a[this_1.prefixCls + "-last-month-cell"] = date.isBeforeMonth(this_1.activeDate),
                    _a[this_1.prefixCls + "-next-month-btn-day"] = date.isAfterMonth(this_1.activeDate),
                    _a[this_1.prefixCls + "-selected-day"] = cell.isSelected,
                    _a[this_1.prefixCls + "-disabled-cell"] = cell.isDisabled,
                    _a[this_1.prefixCls + "-selected-start-date"] = !!cell.isSelectedStartDate,
                    _a[this_1.prefixCls + "-selected-end-date"] = !!cell.isSelectedEndDate,
                    _a[this_1.prefixCls + "-in-range-cell"] = !!cell.isInRange,
                    _a);
                row.dateCells.push(cell);
            };
            var this_1 = this;
            for (var day = 0; day < 7; day++) {
                _loop_1(day);
            }
            row.classMap = (_a = {},
                _a[this.prefixCls + "-current-week"] = row.isCurrent,
                _a[this.prefixCls + "-active-week"] = row.isActive,
                _a);
            weekRows.push(row);
        }
        return weekRows;
    };
    DateTableComponent.prototype.trackByDateFn = function (_index, item) {
        return "" + item.title;
    };
    DateTableComponent.prototype.trackByWeekFn = function (_index, item) {
        return item.year + "-" + item.weekNum;
    };
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
    return DateTableComponent;
}());
export { DateTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsiZGF0ZS10YWJsZS5jb21wb25lbnQudHMiLCJkYXRlLXRhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUlOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBMkIsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7SUNwQnpGLDZCQUtFO0lBQUEsNEJBQWtEO0lBQUEsaUJBQUM7SUFBQSxpQkFBTztJQUM1RCxpQkFBSzs7O0lBSEgsaUhBQXdFO0lBRWxFLGVBQTJDO0lBQTNDLDBFQUEyQzs7O0lBRW5ELDZCQU1FO0lBQUEsNEJBQWtEO0lBQUEsWUFBb0I7SUFBQSxpQkFBTztJQUMvRSxpQkFBSzs7OztJQUhILG9FQUFxQztJQURyQyxtREFBd0I7SUFHbEIsZUFBMkM7SUFBM0MsMEVBQTJDO0lBQUMsZUFBb0I7SUFBcEIsMENBQW9COzs7SUFNeEUsOEJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFGbUMsdUVBQXdDO0lBQzlFLGVBQ0Y7SUFERSxrREFDRjs7O0lBQ0EsOEJBVU07SUFMSixtS0FBMkIsSUFBSyxHQUFFLG9CQUFjLElBQUMsZ0tBQ2pCLElBQUssR0FBRSx5QkFBbUIsSUFEVDtJQUtsRCxpQkFBSzs7OztJQVJKLG1EQUF3QjtJQUV4Qiw2Q0FBeUIsa0NBQUEsb0JBQUE7OztJQVI3Qiw2QkFDRTtJQUFBLHNFQUNFO0lBRUYsc0VBVUM7SUFDSCxpQkFBSzs7OztJQWZvRCw0Q0FB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Q0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBVUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCwgdmFsdWVGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuY29uc3QgREFURV9ST1dfTlVNID0gNjtcclxuY29uc3QgREFURV9DT0xfTlVNID0gNztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGF0ZS10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdkYXRlVGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS10YWJsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBfdmFsdWU6IENhbmR5RGF0ZTtcclxuICBoZWFkV2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdO1xyXG4gIHdlZWtSb3dzOiBXZWVrUm93W107XHJcblxyXG4gIEBJbnB1dCgpIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIEBJbnB1dCgpIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHZhbHVlKGRhdGU6IENhbmR5RGF0ZSkge1xyXG4gICAgLy8gU2hvdyB0b2RheSBieSBkZWZhdWx0XHJcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGUgfHwgbmV3IENhbmR5RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBhY3RpdmVEYXRlOiBDYW5keURhdGU7XHJcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRhdGVDZWxsUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIGRhdGVGdWxsQ2VsbFJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuYWN0aXZlRGF0ZSkgfHxcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMudmFsdWUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnNlbGVjdGVkVmFsdWUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLmhvdmVyVmFsdWUpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEYXRlUmVhbENoYW5nZShjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5wcmV2aW91c1ZhbHVlO1xyXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheShwcmV2aW91c1ZhbHVlKSB8fFxyXG4gICAgICAgICAgY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gcHJldmlvdXNWYWx1ZS5sZW5ndGggfHxcclxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5zb21lKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDYW5keURhdGUgPSBwcmV2aW91c1ZhbHVlW2luZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzQ2FuZHlEYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gcHJldmlvdXNDYW5keURhdGUuaXNTYW1lRGF5KHZhbHVlKSA6IHByZXZpb3VzQ2FuZHlEYXRlICE9PSB2YWx1ZTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNTYW1lRGF0ZShwcmV2aW91c1ZhbHVlIGFzIENhbmR5RGF0ZSwgY3VycmVudFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NhbWVEYXRlKGxlZnQ6IENhbmR5RGF0ZSwgcmlnaHQ6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghbGVmdCAmJiAhcmlnaHQpIHx8IChsZWZ0ICYmIHJpZ2h0ICYmIHJpZ2h0LmlzU2FtZURheShsZWZ0KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaGVhZFdlZWtEYXlzID0gdGhpcy5tYWtlSGVhZFdlZWtEYXlzKCk7XHJcbiAgICAgIHRoaXMud2Vla1Jvd3MgPSB0aGlzLm1ha2VXZWVrUm93cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VWYWx1ZUZyb21JbnNpZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgLy8gT25seSBjaGFuZ2UgZGF0ZSBub3QgY2hhbmdlIHRpbWVcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy52YWx1ZVxyXG4gICAgICAuc2V0WWVhcih2YWx1ZS5nZXRZZWFyKCkpXHJcbiAgICAgIC5zZXRNb250aCh2YWx1ZS5nZXRNb250aCgpKVxyXG4gICAgICAuc2V0RGF0ZSh2YWx1ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUhlYWRXZWVrRGF5cygpOiBXZWVrRGF5TGFiZWxbXSB7XHJcbiAgICBjb25zdCB3ZWVrRGF5czogV2Vla0RheUxhYmVsW10gPSBbXTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5hY3RpdmVEYXRlLmNhbGVuZGFyU3RhcnQoeyB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIH0pO1xyXG4gICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IERBVEVfQ09MX05VTTsgY29sSW5kZXgrKykge1xyXG4gICAgICBjb25zdCBkYXkgPSBzdGFydC5hZGREYXlzKGNvbEluZGV4KTtcclxuICAgICAgd2Vla0RheXNbY29sSW5kZXhdID0ge1xyXG4gICAgICAgIHNob3J0OiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRheS5uYXRpdmVEYXRlLCB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUgPyAnRScgOiAnZGRkJyksIC8vIGVnLiBUdWVcclxuICAgICAgICB2ZXJ5U2hvcnQ6IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF5Lm5hdGl2ZURhdGUsIHRoaXMuZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpKSAvLyBlZy4gVHVcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB3ZWVrRGF5cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pMThuXHJcbiAgICAgICAgLmdldExvY2FsZUlkKClcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5pbmRleE9mKCd6aCcpID09PSAwXHJcbiAgICAgICAgPyAnRUVFRUUnXHJcbiAgICAgICAgOiAnRUVFRUVFJzsgLy8gVXNlIGV4dHJlbWUgc2hvcnQgZm9yIGNoaW5lc2VcclxuICAgIH1cclxuICAgIHJldHVybiAnZGQnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlV2Vla1Jvd3MoKTogV2Vla1Jvd1tdIHtcclxuICAgIGNvbnN0IHdlZWtSb3dzOiBXZWVrUm93W10gPSBbXTtcclxuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5jYWxlbmRhclN0YXJ0KHsgd2Vla1N0YXJ0c09uOiB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKSB9KTtcclxuXHJcbiAgICBmb3IgKGxldCB3ZWVrID0gMDsgd2VlayA8IERBVEVfUk9XX05VTTsgd2VlaysrKSB7XHJcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IGZpcnN0RGF5T2ZNb250aC5hZGREYXlzKHdlZWsgKiA3KTtcclxuICAgICAgY29uc3Qgcm93OiBXZWVrUm93ID0ge1xyXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gICAgICAgIGRhdGVDZWxsczogW10sXHJcbiAgICAgICAgeWVhcjogd2Vla1N0YXJ0LmdldFllYXIoKVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgNzsgZGF5KyspIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gd2Vla1N0YXJ0LmFkZERheXMoZGF5KTtcclxuICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlXHJcbiAgICAgICAgICA/ICdsb25nRGF0ZSdcclxuICAgICAgICAgIDogdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ0RhdGVQaWNrZXIubGFuZy5kYXRlRm9ybWF0JywgJ1lZWVktTU0tREQnKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZS5uYXRpdmVEYXRlLCBkYXRlRm9ybWF0KTtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZS5uYXRpdmVEYXRlLCB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUgPyAnZGQnIDogJ0REJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGw6IERhdGVDZWxsID0ge1xyXG4gICAgICAgICAgdmFsdWU6IGRhdGUubmF0aXZlRGF0ZSxcclxuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcclxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICBpc1RvZGF5OiBmYWxzZSxcclxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgIGRhdGVDZWxsUmVuZGVyOiB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmRhdGVDZWxsUmVuZGVyLCBkYXRlKSwgLy8gQ3VzdG9taXplZCBjb250ZW50XHJcbiAgICAgICAgICBkYXRlRnVsbENlbGxSZW5kZXI6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZGF0ZUZ1bGxDZWxsUmVuZGVyLCBkYXRlKSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGAke2RhdGUuZ2V0RGF0ZSgpfWAsXHJcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZShkYXRlKSxcclxuICAgICAgICAgIG9uTW91c2VFbnRlcjogKCkgPT4gdGhpcy5kYXlIb3Zlci5lbWl0KGRhdGUpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1dlZWsgJiYgIXJvdy53ZWVrTnVtKSB7XHJcbiAgICAgICAgICByb3cud2Vla051bSA9IHRoaXMuZGF0ZUhlbHBlci5nZXRJU09XZWVrKGRhdGUubmF0aXZlRGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0ZS5pc1RvZGF5KCkpIHtcclxuICAgICAgICAgIGNlbGwuaXNUb2RheSA9IHRydWU7XHJcbiAgICAgICAgICByb3cuaXNDdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuc2VsZWN0ZWRWYWx1ZSkgJiYgZGF0ZS5pc1NhbWVNb250aCh0aGlzLmFjdGl2ZURhdGUpKSB7XHJcbiAgICAgICAgICAvLyBSYW5nZSBzZWxlY3Rpb25zXHJcbiAgICAgICAgICBjb25zdCByYW5nZVZhbHVlID0gdGhpcy5ob3ZlclZhbHVlICYmIHRoaXMuaG92ZXJWYWx1ZS5sZW5ndGggPyB0aGlzLmhvdmVyVmFsdWUgOiB0aGlzLnNlbGVjdGVkVmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBzdGFydCA9IHJhbmdlVmFsdWVbMF07XHJcbiAgICAgICAgICBjb25zdCBlbmQgPSByYW5nZVZhbHVlWzFdO1xyXG4gICAgICAgICAgaWYgKHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydC5pc1NhbWVEYXkoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWRTdGFydERhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgcm93LmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW5kKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVuZC5pc1NhbWVEYXkoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZEVuZERhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJvdy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlLmlzQWZ0ZXJEYXkoc3RhcnQpICYmIGRhdGUuaXNCZWZvcmVEYXkoZW5kKSkge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pc0luUmFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZS5pc1NhbWVEYXkodGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICByb3cuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKGRhdGUubmF0aXZlRGF0ZSkpIHtcclxuICAgICAgICAgIGNlbGwuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjZWxsLmNsYXNzTWFwID0ge1xyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRvZGF5YF06IGNlbGwuaXNUb2RheSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1tb250aC1jZWxsYF06IGRhdGUuaXNCZWZvcmVNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LW1vbnRoLWJ0bi1kYXlgXTogZGF0ZS5pc0FmdGVyTW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtZGF5YF06IGNlbGwuaXNTZWxlY3RlZCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWQtY2VsbGBdOiBjZWxsLmlzRGlzYWJsZWQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLXN0YXJ0LWRhdGVgXTogISFjZWxsLmlzU2VsZWN0ZWRTdGFydERhdGUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWVuZC1kYXRlYF06ICEhY2VsbC5pc1NlbGVjdGVkRW5kRGF0ZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taW4tcmFuZ2UtY2VsbGBdOiAhIWNlbGwuaXNJblJhbmdlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcm93LmRhdGVDZWxscy5wdXNoKGNlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByb3cuY2xhc3NNYXAgPSB7XHJcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jdXJyZW50LXdlZWtgXTogcm93LmlzQ3VycmVudCxcclxuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWFjdGl2ZS13ZWVrYF06IHJvdy5pc0FjdGl2ZVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgd2Vla1Jvd3MucHVzaChyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3ZWVrUm93cztcclxuICB9XHJcblxyXG4gIHRyYWNrQnlEYXRlRm4oX2luZGV4OiBudW1iZXIsIGl0ZW06IERhdGVDZWxsKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtpdGVtLnRpdGxlfWA7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5V2Vla0ZuKF9pbmRleDogbnVtYmVyLCBpdGVtOiBXZWVrUm93KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtpdGVtLnllYXJ9LSR7aXRlbS53ZWVrTnVtfWA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtEYXlMYWJlbCB7XHJcbiAgc2hvcnQ6IHN0cmluZztcclxuICB2ZXJ5U2hvcnQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlQ2VsbCB7XHJcbiAgdmFsdWU6IERhdGU7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRhdGVDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZztcclxuICBkYXRlRnVsbENlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcclxuICBpc1RvZGF5PzogYm9vbGVhbjtcclxuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICBpc1NlbGVjdGVkU3RhcnREYXRlPzogYm9vbGVhbjtcclxuICBpc1NlbGVjdGVkRW5kRGF0ZT86IGJvb2xlYW47XHJcbiAgaXNJblJhbmdlPzogYm9vbGVhbjtcclxuICBjbGFzc01hcD86IG9iamVjdDtcclxuICBvbkNsaWNrKGRhdGU6IENhbmR5RGF0ZSk6IHZvaWQ7XHJcbiAgb25Nb3VzZUVudGVyKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1JvdyB7XHJcbiAgaXNDdXJyZW50PzogYm9vbGVhbjsgLy8gSXMgdGhlIHdlZWsgdGhhdCB0b2RheSBzdGF5cyBpblxyXG4gIGlzQWN0aXZlPzogYm9vbGVhbjsgLy8gSXMgdGhlIHdlZWsgdGhhdCBjdXJyZW50IHNldHRpbmcgZGF0ZSBzdGF5cyBpblxyXG4gIHdlZWtOdW0/OiBudW1iZXI7XHJcbiAgeWVhcj86IG51bWJlcjtcclxuICBjbGFzc01hcD86IG9iamVjdDtcclxuICBkYXRlQ2VsbHM6IERhdGVDZWxsW107XHJcbn1cclxuIiwiPHRhYmxlIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXRhYmxlXCIgY2VsbFNwYWNpbmc9XCIwXCIgcm9sZT1cImdyaWRcIj5cclxuICA8dGhlYWQ+XHJcbiAgICA8dHIgcm9sZT1cInJvd1wiPlxyXG4gICAgICA8dGhcclxuICAgICAgICAqbmdJZj1cInNob3dXZWVrXCJcclxuICAgICAgICByb2xlPVwiY29sdW1uaGVhZGVyXCJcclxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jb2x1bW4taGVhZGVyIHt7IHByZWZpeENscyB9fS13ZWVrLW51bWJlci1oZWFkZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY29sdW1uLWhlYWRlci1pbm5lclwiPng8L3NwYW4+XHJcbiAgICAgIDwvdGg+XHJcbiAgICAgIDx0aFxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBjZWxsIG9mIGhlYWRXZWVrRGF5c1wiXHJcbiAgICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXHJcbiAgICAgICAgdGl0bGU9XCJ7eyBjZWxsLnNob3J0IH19XCJcclxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jb2x1bW4taGVhZGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNvbHVtbi1oZWFkZXItaW5uZXJcIj57eyBjZWxsLnZlcnlTaG9ydCB9fTwvc3Bhbj5cclxuICAgICAgPC90aD5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHkgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tdGJvZHlcIj5cclxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIHdlZWtSb3dzOyB0cmFja0J5OiB0cmFja0J5V2Vla0ZuXCIgW25nQ2xhc3NdPVwicm93LmNsYXNzTWFwXCIgcm9sZT1cInJvd1wiPlxyXG4gICAgICA8dGQgKm5nSWY9XCJyb3cud2Vla051bVwiIHJvbGU9XCJncmlkY2VsbFwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXdlZWstbnVtYmVyLWNlbGxcIj5cclxuICAgICAgICB7eyByb3cud2Vla051bSB9fVxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGRcclxuICAgICAgICAqbmdGb3I9XCJsZXQgY2VsbCBvZiByb3cuZGF0ZUNlbGxzOyB0cmFja0J5OiB0cmFja0J5RGF0ZUZuXCJcclxuICAgICAgICB0aXRsZT1cInt7IGNlbGwudGl0bGUgfX1cIlxyXG4gICAgICAgIHJvbGU9XCJncmlkY2VsbFwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiY2VsbC5jbGFzc01hcFwiXHJcbiAgICAgICAgKGNsaWNrKT1cImNlbGwuaXNEaXNhYmxlZCA/IG51bGwgOiBjZWxsLm9uQ2xpY2soKVwiXHJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwiY2VsbC5pc0Rpc2FibGVkID8gbnVsbCA6IGNlbGwub25Nb3VzZUVudGVyKClcIlxyXG4gICAgICAgIGRhdGUtdGFibGUtY2VsbFxyXG4gICAgICAgIFtwcmVmaXhDbHNdPVwicHJlZml4Q2xzXCJcclxuICAgICAgICBbY2VsbF09XCJjZWxsXCJcclxuICAgICAgPjwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbiJdfQ==