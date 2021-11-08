/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { valueFunctionProp, CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
/** @type {?} */
var DATE_ROW_NUM = 6;
/** @type {?} */
var DATE_COL_NUM = 7;
var DateTableComponent = /** @class */ (function () {
    function DateTableComponent(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.prefixCls = 'ant-calendar';
        this.showWeek = false;
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        // Emitted when hover on a day by mouse enter
        this.valueChange = new EventEmitter();
    }
    Object.defineProperty(DateTableComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: 
        // Range ONLY
        /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            // Show today by default
            this._value = this.activeDate = date || new CandyDate();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.render();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    };
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    DateTableComponent.prototype.isDateRealChange = /**
     * @private
     * @param {?} change
     * @return {?}
     */
    function (change) {
        if (change) {
            /** @type {?} */
            var previousValue_1 = change.previousValue;
            /** @type {?} */
            var currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue_1) ||
                    currentValue.length !== previousValue_1.length ||
                    currentValue.some((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    function (value, index) {
                        /** @type {?} */
                        var previousCandyDate = previousValue_1[index];
                        return previousCandyDate instanceof CandyDate
                            ? previousCandyDate.isSameDay(value)
                            : previousCandyDate !== value;
                    })));
            }
            else {
                return !this.isSameDate((/** @type {?} */ (previousValue_1)), currentValue);
            }
        }
        return false;
    };
    /**
     * @private
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    DateTableComponent.prototype.isSameDate = /**
     * @private
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    function (left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    };
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateTableComponent.prototype.changeValueFromInside = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // Only change date not change time
        /** @type {?} */
        var newValue = this.value
            .setYear(value.getYear())
            .setMonth(value.getMonth())
            .setDate(value.getDate());
        this.valueChange.emit(newValue);
    };
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.makeHeadWeekDays = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var weekDays = [];
        /** @type {?} */
        var start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            /** @type {?} */
            var day = start.addDays(colIndex);
            weekDays[colIndex] = {
                short: this.dateHelper.format(day.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                // eg. Tue
                veryShort: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    };
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.getVeryShortWeekFormat = /**
     * @private
     * @return {?}
     */
    function () {
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
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.makeWeekRows = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        var _this = this;
        /** @type {?} */
        var weekRows = [];
        /** @type {?} */
        var firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var week = 0; week < DATE_ROW_NUM; week++) {
            /** @type {?} */
            var weekStart = firstDayOfMonth.addDays(week * 7);
            /** @type {?} */
            var row = {
                isActive: false,
                isCurrent: false,
                dateCells: [],
                year: weekStart.getYear()
            };
            var _loop_1 = function (day) {
                var _a;
                /** @type {?} */
                var date = weekStart.addDays(day);
                /** @type {?} */
                var dateFormat = this_1.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this_1.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                /** @type {?} */
                var title = this_1.dateHelper.format(date.nativeDate, dateFormat);
                /** @type {?} */
                var label = this_1.dateHelper.format(date.nativeDate, this_1.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                /** @type {?} */
                var cell = {
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    dateCellRender: valueFunctionProp(this_1.dateCellRender, date),
                    // Customized content
                    dateFullCellRender: valueFunctionProp(this_1.dateFullCellRender, date),
                    content: "" + date.getDate(),
                    onClick: (/**
                     * @return {?}
                     */
                    function () { return _this.changeValueFromInside(date); }),
                    onMouseEnter: (/**
                     * @return {?}
                     */
                    function () { return _this.dayHover.emit(date); })
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
                    /** @type {?} */
                    var rangeValue = this_1.hoverValue && this_1.hoverValue.length ? this_1.hoverValue : this_1.selectedValue;
                    /** @type {?} */
                    var start = rangeValue[0];
                    /** @type {?} */
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
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    DateTableComponent.prototype.trackByDateFn = /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    function (_index, item) {
        return "" + item.title;
    };
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    DateTableComponent.prototype.trackByWeekFn = /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    function (_index, item) {
        return item.year + "-" + item.weekNum;
    };
    DateTableComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'date-table',
                    exportAs: 'dateTable',
                    template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n  <thead>\r\n    <tr role=\"row\">\r\n      <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\">\r\n        <span class=\"{{ prefixCls }}-column-header-inner\">x</span>\r\n      </th>\r\n      <th *ngFor=\"let cell of headWeekDays\" role=\"columnheader\" title=\"{{ cell.short }}\"\r\n        class=\"{{ prefixCls }}-column-header\">\r\n        <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody class=\"{{ prefixCls }}-tbody\">\r\n    <tr *ngFor=\"let row of weekRows;trackBy:trackByWeekFn\" [ngClass]=\"row.classMap\" role=\"row\">\r\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\">\r\n        {{ row.weekNum }}\r\n      </td>\r\n      <td *ngFor=\"let cell of row.dateCells;trackBy:trackByDateFn\" title=\"{{ cell.title }}\" role=\"gridcell\" [ngClass]=\"cell.classMap\"\r\n        (click)=\"cell.isDisabled ? null : cell.onClick()\" (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\"\r\n        date-table-cell [prefixCls]=\"prefixCls\" [cell]=\"cell\">\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"
                }] }
    ];
    /** @nocollapse */
    DateTableComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: DateHelperService }
    ]; };
    DateTableComponent.propDecorators = {
        prefixCls: [{ type: Input }],
        locale: [{ type: Input }],
        selectedValue: [{ type: Input }],
        hoverValue: [{ type: Input }],
        value: [{ type: Input }],
        activeDate: [{ type: Input }],
        showWeek: [{ type: Input }],
        disabledDate: [{ type: Input }],
        dateCellRender: [{ type: Input }],
        dateFullCellRender: [{ type: Input }],
        dayHover: [{ type: Output }],
        valueChange: [{ type: Output }]
    };
    return DateTableComponent;
}());
export { DateTableComponent };
if (false) {
    /** @type {?} */
    DateTableComponent.prototype._value;
    /** @type {?} */
    DateTableComponent.prototype.headWeekDays;
    /** @type {?} */
    DateTableComponent.prototype.weekRows;
    /** @type {?} */
    DateTableComponent.prototype.prefixCls;
    /** @type {?} */
    DateTableComponent.prototype.locale;
    /** @type {?} */
    DateTableComponent.prototype.selectedValue;
    /** @type {?} */
    DateTableComponent.prototype.hoverValue;
    /** @type {?} */
    DateTableComponent.prototype.activeDate;
    /** @type {?} */
    DateTableComponent.prototype.showWeek;
    /** @type {?} */
    DateTableComponent.prototype.disabledDate;
    /** @type {?} */
    DateTableComponent.prototype.dateCellRender;
    /** @type {?} */
    DateTableComponent.prototype.dateFullCellRender;
    /** @type {?} */
    DateTableComponent.prototype.dayHover;
    /** @type {?} */
    DateTableComponent.prototype.valueChange;
    /**
     * @type {?}
     * @private
     */
    DateTableComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    DateTableComponent.prototype.dateHelper;
}
/**
 * @record
 */
export function WeekDayLabel() { }
if (false) {
    /** @type {?} */
    WeekDayLabel.prototype.short;
    /** @type {?} */
    WeekDayLabel.prototype.veryShort;
}
/**
 * @record
 */
export function DateCell() { }
if (false) {
    /** @type {?} */
    DateCell.prototype.value;
    /** @type {?} */
    DateCell.prototype.label;
    /** @type {?} */
    DateCell.prototype.title;
    /** @type {?} */
    DateCell.prototype.dateCellRender;
    /** @type {?} */
    DateCell.prototype.dateFullCellRender;
    /** @type {?} */
    DateCell.prototype.content;
    /** @type {?|undefined} */
    DateCell.prototype.isSelected;
    /** @type {?|undefined} */
    DateCell.prototype.isToday;
    /** @type {?|undefined} */
    DateCell.prototype.isDisabled;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedStartDate;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedEndDate;
    /** @type {?|undefined} */
    DateCell.prototype.isInRange;
    /** @type {?|undefined} */
    DateCell.prototype.classMap;
    /**
     * @param {?} date
     * @return {?}
     */
    DateCell.prototype.onClick = function (date) { };
    /**
     * @return {?}
     */
    DateCell.prototype.onMouseEnter = function () { };
}
/**
 * @record
 */
export function WeekRow() { }
if (false) {
    /** @type {?|undefined} */
    WeekRow.prototype.isCurrent;
    /** @type {?|undefined} */
    WeekRow.prototype.isActive;
    /** @type {?|undefined} */
    WeekRow.prototype.weekNum;
    /** @type {?|undefined} */
    WeekRow.prototype.year;
    /** @type {?|undefined} */
    WeekRow.prototype.classMap;
    /** @type {?} */
    WeekRow.prototype.dateCells;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsiZGF0ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFJTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBZ0IsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQTJCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQUV6RixZQUFZLEdBQUcsQ0FBQzs7SUFDaEIsWUFBWSxHQUFHLENBQUM7QUFFdEI7SUFxQ0UsNEJBQW9CLElBQW1CLEVBQVUsVUFBNkI7UUFBMUQsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBeEJyRSxjQUFTLEdBQVcsY0FBYyxDQUFDO1FBZ0JuQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBS2hCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDLENBQUMsNkNBQTZDOztRQUN2RixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFFa0IsQ0FBQztJQW5CbEYsc0JBQ0kscUNBQUs7Ozs7UUFLVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7Ozs7O1FBUkQsVUFDVSxJQUFlO1lBQ3ZCLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLElBQUksU0FBUyxFQUFFLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7Ozs7SUFpQkQscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFD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TCxLQUFLO3FDQUNMLEtBQUs7MkJBRUwsTUFBTTs4QkFDTixNQUFNOztJQWlNVCx5QkFBQztDQUFBLEFBcE9ELElBb09DO1NBNU5ZLGtCQUFrQjs7O0lBQzdCLG9DQUFrQjs7SUFDbEIsMENBQTZCOztJQUM3QixzQ0FBb0I7O0lBRXBCLHVDQUE0Qzs7SUFDNUMsb0NBQXlDOztJQUN6QywyQ0FBb0M7O0lBQ3BDLHdDQUFpQzs7SUFZakMsd0NBQStCOztJQUMvQixzQ0FBbUM7O0lBQ25DLDBDQUE0Qzs7SUFDNUMsNENBQWtFOztJQUNsRSxnREFBc0U7O0lBRXRFLHNDQUE0RDs7SUFDNUQseUNBQStEOzs7OztJQUVuRCxrQ0FBMkI7Ozs7O0lBQUUsd0NBQXFDOzs7OztBQWlNaEYsa0NBR0M7OztJQUZDLDZCQUFjOztJQUNkLGlDQUFrQjs7Ozs7QUFHcEIsOEJBZ0JDOzs7SUFmQyx5QkFBWTs7SUFDWix5QkFBYzs7SUFDZCx5QkFBYzs7SUFDZCxrQ0FBMkM7O0lBQzNDLHNDQUErQzs7SUFDL0MsMkJBQWdCOztJQUNoQiw4QkFBcUI7O0lBQ3JCLDJCQUFrQjs7SUFDbEIsOEJBQXFCOztJQUNyQix1Q0FBOEI7O0lBQzlCLHFDQUE0Qjs7SUFDNUIsNkJBQW9COztJQUNwQiw0QkFBa0I7Ozs7O0lBQ2xCLGlEQUErQjs7OztJQUMvQixrREFBcUI7Ozs7O0FBR3ZCLDZCQU9DOzs7SUFOQyw0QkFBb0I7O0lBQ3BCLDJCQUFtQjs7SUFDbkIsMEJBQWlCOztJQUNqQix1QkFBYzs7SUFDZCwyQkFBa0I7O0lBQ2xCLDRCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB2YWx1ZUZ1bmN0aW9uUHJvcCwgQ2FuZHlEYXRlLCBGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuY29uc3QgREFURV9ST1dfTlVNID0gNjtcclxuY29uc3QgREFURV9DT0xfTlVNID0gNztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGF0ZS10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdkYXRlVGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS10YWJsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBfdmFsdWU6IENhbmR5RGF0ZTtcclxuICBoZWFkV2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdO1xyXG4gIHdlZWtSb3dzOiBXZWVrUm93W107XHJcblxyXG4gIEBJbnB1dCgpIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIEBJbnB1dCgpIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHZhbHVlKGRhdGU6IENhbmR5RGF0ZSkge1xyXG4gICAgLy8gU2hvdyB0b2RheSBieSBkZWZhdWx0XHJcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGUgfHwgbmV3IENhbmR5RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBhY3RpdmVEYXRlOiBDYW5keURhdGU7XHJcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRhdGVDZWxsUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIGRhdGVGdWxsQ2VsbFJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuYWN0aXZlRGF0ZSkgfHxcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMudmFsdWUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnNlbGVjdGVkVmFsdWUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLmhvdmVyVmFsdWUpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEYXRlUmVhbENoYW5nZShjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5wcmV2aW91c1ZhbHVlO1xyXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheShwcmV2aW91c1ZhbHVlKSB8fFxyXG4gICAgICAgICAgY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gcHJldmlvdXNWYWx1ZS5sZW5ndGggfHxcclxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5zb21lKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDYW5keURhdGUgPSBwcmV2aW91c1ZhbHVlW2luZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzQ2FuZHlEYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlXHJcbiAgICAgICAgICAgICAgPyBwcmV2aW91c0NhbmR5RGF0ZS5pc1NhbWVEYXkodmFsdWUpXHJcbiAgICAgICAgICAgICAgOiBwcmV2aW91c0NhbmR5RGF0ZSAhPT0gdmFsdWU7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzU2FtZURhdGUocHJldmlvdXNWYWx1ZSBhcyBDYW5keURhdGUsIGN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNTYW1lRGF0ZShsZWZ0OiBDYW5keURhdGUsIHJpZ2h0OiBDYW5keURhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIWxlZnQgJiYgIXJpZ2h0KSB8fCAobGVmdCAmJiByaWdodCAmJiByaWdodC5pc1NhbWVEYXkobGVmdCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLmhlYWRXZWVrRGF5cyA9IHRoaXMubWFrZUhlYWRXZWVrRGF5cygpO1xyXG4gICAgICB0aGlzLndlZWtSb3dzID0gdGhpcy5tYWtlV2Vla1Jvd3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIC8vIE9ubHkgY2hhbmdlIGRhdGUgbm90IGNoYW5nZSB0aW1lXHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMudmFsdWVcclxuICAgICAgLnNldFllYXIodmFsdWUuZ2V0WWVhcigpKVxyXG4gICAgICAuc2V0TW9udGgodmFsdWUuZ2V0TW9udGgoKSlcclxuICAgICAgLnNldERhdGUodmFsdWUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VIZWFkV2Vla0RheXMoKTogV2Vla0RheUxhYmVsW10ge1xyXG4gICAgY29uc3Qgd2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdID0gW107XHJcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuYWN0aXZlRGF0ZS5jYWxlbmRhclN0YXJ0KHsgd2Vla1N0YXJ0c09uOiB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKSB9KTtcclxuICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBEQVRFX0NPTF9OVU07IGNvbEluZGV4KyspIHtcclxuICAgICAgY29uc3QgZGF5ID0gc3RhcnQuYWRkRGF5cyhjb2xJbmRleCk7XHJcbiAgICAgIHdlZWtEYXlzW2NvbEluZGV4XSA9IHtcclxuICAgICAgICBzaG9ydDogdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXkubmF0aXZlRGF0ZSwgdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ0UnIDogJ2RkZCcpLCAvLyBlZy4gVHVlXHJcbiAgICAgICAgdmVyeVNob3J0OiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRheS5uYXRpdmVEYXRlLCB0aGlzLmdldFZlcnlTaG9ydFdlZWtGb3JtYXQoKSkgLy8gZWcuIFR1XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2Vla0RheXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFZlcnlTaG9ydFdlZWtGb3JtYXQoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaTE4blxyXG4gICAgICAgIC5nZXRMb2NhbGVJZCgpXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAuaW5kZXhPZignemgnKSA9PT0gMFxyXG4gICAgICAgID8gJ0VFRUVFJ1xyXG4gICAgICAgIDogJ0VFRUVFRSc7IC8vIFVzZSBleHRyZW1lIHNob3J0IGZvciBjaGluZXNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ2RkJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVdlZWtSb3dzKCk6IFdlZWtSb3dbXSB7XHJcbiAgICBjb25zdCB3ZWVrUm93czogV2Vla1Jvd1tdID0gW107XHJcbiAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSB0aGlzLmFjdGl2ZURhdGUuY2FsZW5kYXJTdGFydCh7IHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKCkgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgd2VlayA9IDA7IHdlZWsgPCBEQVRFX1JPV19OVU07IHdlZWsrKykge1xyXG4gICAgICBjb25zdCB3ZWVrU3RhcnQgPSBmaXJzdERheU9mTW9udGguYWRkRGF5cyh3ZWVrICogNyk7XHJcbiAgICAgIGNvbnN0IHJvdzogV2Vla1JvdyA9IHtcclxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgaXNDdXJyZW50OiBmYWxzZSxcclxuICAgICAgICBkYXRlQ2VsbHM6IFtdLFxyXG4gICAgICAgIHllYXI6IHdlZWtTdGFydC5nZXRZZWFyKClcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZvciAobGV0IGRheSA9IDA7IGRheSA8IDc7IGRheSsrKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHdlZWtTdGFydC5hZGREYXlzKGRheSk7XHJcbiAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9IHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZVxyXG4gICAgICAgICAgPyAnbG9uZ0RhdGUnXHJcbiAgICAgICAgICA6IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdEYXRlUGlja2VyLmxhbmcuZGF0ZUZvcm1hdCcsICdZWVlZLU1NLUREJyk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUubmF0aXZlRGF0ZSwgZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUubmF0aXZlRGF0ZSwgdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ2RkJyA6ICdERCcpO1xyXG5cclxuICAgICAgICBjb25zdCBjZWxsOiBEYXRlQ2VsbCA9IHtcclxuICAgICAgICAgIHZhbHVlOiBkYXRlLm5hdGl2ZURhdGUsXHJcbiAgICAgICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNUb2RheTogZmFsc2UsXHJcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICBkYXRlQ2VsbFJlbmRlcjogdmFsdWVGdW5jdGlvblByb3AodGhpcy5kYXRlQ2VsbFJlbmRlciwgZGF0ZSksIC8vIEN1c3RvbWl6ZWQgY29udGVudFxyXG4gICAgICAgICAgZGF0ZUZ1bGxDZWxsUmVuZGVyOiB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmRhdGVGdWxsQ2VsbFJlbmRlciwgZGF0ZSksXHJcbiAgICAgICAgICBjb250ZW50OiBgJHtkYXRlLmdldERhdGUoKX1gLFxyXG4gICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUoZGF0ZSksXHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IHRoaXMuZGF5SG92ZXIuZW1pdChkYXRlKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dXZWVrICYmICFyb3cud2Vla051bSkge1xyXG4gICAgICAgICAgcm93LndlZWtOdW0gPSB0aGlzLmRhdGVIZWxwZXIuZ2V0SVNPV2VlayhkYXRlLm5hdGl2ZURhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGUuaXNUb2RheSgpKSB7XHJcbiAgICAgICAgICBjZWxsLmlzVG9kYXkgPSB0cnVlO1xyXG4gICAgICAgICAgcm93LmlzQ3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnNlbGVjdGVkVmFsdWUpICYmIGRhdGUuaXNTYW1lTW9udGgodGhpcy5hY3RpdmVEYXRlKSkge1xyXG4gICAgICAgICAgLy8gUmFuZ2Ugc2VsZWN0aW9uc1xyXG4gICAgICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHRoaXMuaG92ZXJWYWx1ZSAmJiB0aGlzLmhvdmVyVmFsdWUubGVuZ3RoID8gdGhpcy5ob3ZlclZhbHVlIDogdGhpcy5zZWxlY3RlZFZhbHVlO1xyXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSByYW5nZVZhbHVlWzBdO1xyXG4gICAgICAgICAgY29uc3QgZW5kID0gcmFuZ2VWYWx1ZVsxXTtcclxuICAgICAgICAgIGlmIChzdGFydCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnQuaXNTYW1lRGF5KGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHJvdy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVuZCkge1xyXG4gICAgICAgICAgICAgIGlmIChlbmQuaXNTYW1lRGF5KGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWRFbmREYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByb3cuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZS5pc0FmdGVyRGF5KHN0YXJ0KSAmJiBkYXRlLmlzQmVmb3JlRGF5KGVuZCkpIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNJblJhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGUuaXNTYW1lRGF5KHRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgcm93LmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkRGF0ZSAmJiB0aGlzLmRpc2FibGVkRGF0ZShkYXRlLm5hdGl2ZURhdGUpKSB7XHJcbiAgICAgICAgICBjZWxsLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbGBdOiB0cnVlLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10b2RheWBdOiBjZWxsLmlzVG9kYXksXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxhc3QtbW9udGgtY2VsbGBdOiBkYXRlLmlzQmVmb3JlTW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbmV4dC1tb250aC1idG4tZGF5YF06IGRhdGUuaXNBZnRlck1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWRheWBdOiBjZWxsLmlzU2VsZWN0ZWQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkLWNlbGxgXTogY2VsbC5pc0Rpc2FibGVkLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1zdGFydC1kYXRlYF06ICEhY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1lbmQtZGF0ZWBdOiAhIWNlbGwuaXNTZWxlY3RlZEVuZERhdGUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWluLXJhbmdlLWNlbGxgXTogISFjZWxsLmlzSW5SYW5nZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJvdy5kYXRlQ2VsbHMucHVzaChjZWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcm93LmNsYXNzTWFwID0ge1xyXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY3VycmVudC13ZWVrYF06IHJvdy5pc0N1cnJlbnQsXHJcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1hY3RpdmUtd2Vla2BdOiByb3cuaXNBY3RpdmVcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHdlZWtSb3dzLnB1c2gocm93KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2Vla1Jvd3M7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5RGF0ZUZuKF9pbmRleDogbnVtYmVyLCBpdGVtOiBEYXRlQ2VsbCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7aXRlbS50aXRsZX1gO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeVdlZWtGbihfaW5kZXg6IG51bWJlciwgaXRlbTogV2Vla1Jvdyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7aXRlbS55ZWFyfS0ke2l0ZW0ud2Vla051bX1gO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWVrRGF5TGFiZWwge1xyXG4gIHNob3J0OiBzdHJpbmc7XHJcbiAgdmVyeVNob3J0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUNlbGwge1xyXG4gIHZhbHVlOiBEYXRlO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkYXRlQ2VsbFJlbmRlcjogVGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc7XHJcbiAgZGF0ZUZ1bGxDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgaXNUb2RheT86IGJvb2xlYW47XHJcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgaXNTZWxlY3RlZFN0YXJ0RGF0ZT86IGJvb2xlYW47XHJcbiAgaXNTZWxlY3RlZEVuZERhdGU/OiBib29sZWFuO1xyXG4gIGlzSW5SYW5nZT86IGJvb2xlYW47XHJcbiAgY2xhc3NNYXA/OiBvYmplY3Q7XHJcbiAgb25DbGljayhkYXRlOiBDYW5keURhdGUpOiB2b2lkO1xyXG4gIG9uTW91c2VFbnRlcigpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtSb3cge1xyXG4gIGlzQ3VycmVudD86IGJvb2xlYW47IC8vIElzIHRoZSB3ZWVrIHRoYXQgdG9kYXkgc3RheXMgaW5cclxuICBpc0FjdGl2ZT86IGJvb2xlYW47IC8vIElzIHRoZSB3ZWVrIHRoYXQgY3VycmVudCBzZXR0aW5nIGRhdGUgc3RheXMgaW5cclxuICB3ZWVrTnVtPzogbnVtYmVyO1xyXG4gIHllYXI/OiBudW1iZXI7XHJcbiAgY2xhc3NNYXA/OiBvYmplY3Q7XHJcbiAgZGF0ZUNlbGxzOiBEYXRlQ2VsbFtdO1xyXG59XHJcbiJdfQ==