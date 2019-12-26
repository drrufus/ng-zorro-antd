/**
 * @fileoverview added by tsickle
 * Generated from: date-table.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsiZGF0ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBSU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUEyQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFFekYsWUFBWSxHQUFHLENBQUM7O0lBQ2hCLFlBQVksR0FBRyxDQUFDO0FBRXRCO0lBcUNFLDRCQUFvQixJQUFtQixFQUFVLFVBQTZCO1FBQTFELFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQXhCckUsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQWdCbkMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUtoQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQyxDQUFDLDZDQUE2Qzs7UUFDdkYsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBRWtCLENBQUM7SUFuQmxGLHNCQUNJLHFDQUFLOzs7O1FBS1Q7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7OztRQVJELFVBQ1UsSUFBZTtZQUN2Qix3QkFBd0I7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQzFELENBQUM7OztPQUFBOzs7O0lBaUJELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQ3pDO1lBQ0EsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7Ozs7SUFFTyw2Q0FBZ0I7Ozs7O0lBQXhCLFVBQXlCLE1BQW9CO1FBQzNDLElBQUksTUFBTSxFQUFFOztnQkFDSixlQUFhLEdBQTRCLE1BQU0sQ0FBQyxhQUFhOztnQkFDN0QsWUFBWSxHQUE0QixNQUFNLENBQUMsWUFBWTtZQUNqRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sQ0FDTCxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBYSxDQUFDO29CQUM3QixZQUFZLENBQUMsTUFBTSxLQUFLLGVBQWEsQ0FBQyxNQUFNO29CQUM1QyxZQUFZLENBQUMsSUFBSTs7Ozs7b0JBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSzs7NEJBQ3ZCLGlCQUFpQixHQUFHLGVBQWEsQ0FBQyxLQUFLLENBQUM7d0JBQzlDLE9BQU8saUJBQWlCLFlBQVksU0FBUzs0QkFDM0MsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7NEJBQ3BDLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUM7b0JBQ2xDLENBQUMsRUFBQyxDQUNILENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBQSxlQUFhLEVBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNuRTtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7O0lBRU8sdUNBQVU7Ozs7OztJQUFsQixVQUFtQixJQUFlLEVBQUUsS0FBZ0I7UUFDbEQsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7OztJQUVPLG1DQUFNOzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sa0RBQXFCOzs7OztJQUE3QixVQUE4QixLQUFnQjs7O1lBRXRDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSzthQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3hCLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVPLDZDQUFnQjs7OztJQUF4Qjs7WUFDUSxRQUFRLEdBQW1CLEVBQUU7O1lBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQztRQUNsRyxLQUFLLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsWUFBWSxFQUFFLFFBQVEsRUFBRSxFQUFFOztnQkFDcEQsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ25DLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRztnQkFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOztnQkFDM0YsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxTQUFTO2FBQzNGLENBQUM7U0FDSDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRU8sbURBQXNCOzs7O0lBQTlCO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJO2lCQUNiLFdBQVcsRUFBRTtpQkFDYixXQUFXLEVBQUU7aUJBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxPQUFPO2dCQUNULENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQ0FBZ0M7U0FDL0M7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU8seUNBQVk7Ozs7SUFBcEI7O1FBQUEsaUJBa0dDOztZQWpHTyxRQUFRLEdBQWMsRUFBRTs7WUFDeEIsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO1FBRTVHLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUU7O2dCQUN4QyxTQUFTLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDOztnQkFDN0MsR0FBRyxHQUFZO2dCQUNuQixRQUFRLEVBQUUsS0FBSztnQkFDZixTQUFTLEVBQUUsS0FBSztnQkFDaEIsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUU7YUFDMUI7b0NBRVEsR0FBRzs7O29CQUNKLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzs7b0JBQzdCLFVBQVUsR0FBRyxPQUFLLFVBQVUsQ0FBQyxjQUFjO29CQUMvQyxDQUFDLENBQUMsVUFBVTtvQkFDWixDQUFDLENBQUMsT0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLDRCQUE0QixFQUFFLFlBQVksQ0FBQzs7b0JBQ2pFLEtBQUssR0FBRyxPQUFLLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7O29CQUMzRCxLQUFLLEdBQUcsT0FBSyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBSyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7b0JBRTdGLElBQUksR0FBYTtvQkFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUN0QixLQUFLLEVBQUUsS0FBSztvQkFDWixVQUFVLEVBQUUsS0FBSztvQkFDakIsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLE9BQU8sRUFBRSxLQUFLO29CQUNkLEtBQUssRUFBRSxLQUFLO29CQUNaLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxPQUFLLGNBQWMsRUFBRSxJQUFJLENBQUM7O29CQUM1RCxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxPQUFLLGtCQUFrQixFQUFFLElBQUksQ0FBQztvQkFDcEUsT0FBTyxFQUFFLEtBQUcsSUFBSSxDQUFDLE9BQU8sRUFBSTtvQkFDNUIsT0FBTzs7O29CQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQWhDLENBQWdDLENBQUE7b0JBQy9DLFlBQVk7OztvQkFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXhCLENBQXdCLENBQUE7aUJBQzdDO2dCQUVELElBQUksT0FBSyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO29CQUNqQyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQUssVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzNEO2dCQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDcEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQ3RCO2dCQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFLLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBSyxVQUFVLENBQUMsRUFBRTs7O3dCQUVwRSxVQUFVLEdBQUcsT0FBSyxVQUFVLElBQUksT0FBSyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBSyxhQUFhOzt3QkFDN0YsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7O3dCQUNyQixHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDekIsSUFBSSxLQUFLLEVBQUU7d0JBQ1QsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUN6QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDOzRCQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs0QkFDdkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7eUJBQ3JCO3dCQUNELElBQUksR0FBRyxFQUFFOzRCQUNQLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQ0FDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztnQ0FDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0NBQ3ZCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzZCQUNyQjtpQ0FBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQ0FDMUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7NkJBQ3ZCO3lCQUNGO3FCQUNGO2lCQUNGO3FCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFLLEtBQUssQ0FBQyxFQUFFO29CQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDdkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ3JCO2dCQUVELElBQUksT0FBSyxZQUFZLElBQUksT0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFDeEI7Z0JBRUQsSUFBSSxDQUFDLFFBQVE7b0JBQ1gsR0FBSSxPQUFLLFNBQVMsVUFBTyxJQUFHLElBQUk7b0JBQ2hDLEdBQUksT0FBSyxTQUFTLFdBQVEsSUFBRyxJQUFJLENBQUMsT0FBTztvQkFDekMsR0FBSSxPQUFLLFNBQVMscUJBQWtCLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFLLFVBQVUsQ0FBQztvQkFDMUUsR0FBSSxPQUFLLFNBQVMsd0JBQXFCLElBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFLLFVBQVUsQ0FBQztvQkFDNUUsR0FBSSxPQUFLLFNBQVMsa0JBQWUsSUFBRyxJQUFJLENBQUMsVUFBVTtvQkFDbkQsR0FBSSxPQUFLLFNBQVMsbUJBQWdCLElBQUcsSUFBSSxDQUFDLFVBQVU7b0JBQ3BELEdBQUksT0FBSyxTQUFTLHlCQUFzQixJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CO29CQUNyRSxHQUFJLE9BQUssU0FBUyx1QkFBb0IsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtvQkFDakUsR0FBSSxPQUFLLFNBQVMsbUJBQWdCLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO3VCQUN0RCxDQUFDO2dCQUVGLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7WUF6RTNCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFO3dCQUF2QixHQUFHO2FBMEVYO1lBRUQsR0FBRyxDQUFDLFFBQVE7Z0JBQ1YsR0FBSSxJQUFJLENBQUMsU0FBUyxrQkFBZSxJQUFHLEdBQUcsQ0FBQyxTQUFTO2dCQUNqRCxHQUFJLElBQUksQ0FBQyxTQUFTLGlCQUFjLElBQUcsR0FBRyxDQUFDLFFBQVE7bUJBQ2hELENBQUM7WUFFRixRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBRUQsMENBQWE7Ozs7O0lBQWIsVUFBYyxNQUFjLEVBQUUsSUFBYztRQUMxQyxPQUFPLEtBQUcsSUFBSSxDQUFDLEtBQU8sQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCwwQ0FBYTs7Ozs7SUFBYixVQUFjLE1BQWMsRUFBRSxJQUFhO1FBQ3pDLE9BQVUsSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsT0FBUyxDQUFDO0lBQ3hDLENBQUM7O2dCQW5PRixTQUFTLFNBQUM7b0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztvQkFFL0MsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO29CQUNyQiwweENBQXdDO2lCQUN6Qzs7OztnQkFab0QsYUFBYTtnQkFBekQsaUJBQWlCOzs7NEJBa0J2QixLQUFLO3lCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFDTCxLQUFLO3dCQUVMLEtBQUs7NkJBVUwsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztxQ0FDTCxLQUFLOzJCQUVMLE1BQU07OEJBQ04sTUFBTTs7SUFpTVQseUJBQUM7Q0FBQSxBQXBPRCxJQW9PQztTQTVOWSxrQkFBa0I7OztJQUM3QixvQ0FBa0I7O0lBQ2xCLDBDQUE2Qjs7SUFDN0Isc0NBQW9COztJQUVwQix1Q0FBNEM7O0lBQzVDLG9DQUF5Qzs7SUFDekMsMkNBQW9DOztJQUNwQyx3Q0FBaUM7O0lBWWpDLHdDQUErQjs7SUFDL0Isc0NBQW1DOztJQUNuQywwQ0FBNEM7O0lBQzVDLDRDQUFrRTs7SUFDbEUsZ0RBQXNFOztJQUV0RSxzQ0FBNEQ7O0lBQzVELHlDQUErRDs7Ozs7SUFFbkQsa0NBQTJCOzs7OztJQUFFLHdDQUFxQzs7Ozs7QUFpTWhGLGtDQUdDOzs7SUFGQyw2QkFBYzs7SUFDZCxpQ0FBa0I7Ozs7O0FBR3BCLDhCQWdCQzs7O0lBZkMseUJBQVk7O0lBQ1oseUJBQWM7O0lBQ2QseUJBQWM7O0lBQ2Qsa0NBQTJDOztJQUMzQyxzQ0FBK0M7O0lBQy9DLDJCQUFnQjs7SUFDaEIsOEJBQXFCOztJQUNyQiwyQkFBa0I7O0lBQ2xCLDhCQUFxQjs7SUFDckIsdUNBQThCOztJQUM5QixxQ0FBNEI7O0lBQzVCLDZCQUFvQjs7SUFDcEIsNEJBQWtCOzs7OztJQUNsQixpREFBK0I7Ozs7SUFDL0Isa0RBQXFCOzs7OztBQUd2Qiw2QkFPQzs7O0lBTkMsNEJBQW9COztJQUNwQiwyQkFBbUI7O0lBQ25CLDBCQUFpQjs7SUFDakIsdUJBQWM7O0lBQ2QsMkJBQWtCOztJQUNsQiw0QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdmFsdWVGdW5jdGlvblByb3AsIENhbmR5RGF0ZSwgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmNvbnN0IERBVEVfUk9XX05VTSA9IDY7XHJcbmNvbnN0IERBVEVfQ09MX05VTSA9IDc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RhdGUtdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnZGF0ZVRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtdGFibGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgX3ZhbHVlOiBDYW5keURhdGU7XHJcbiAgaGVhZFdlZWtEYXlzOiBXZWVrRGF5TGFiZWxbXTtcclxuICB3ZWVrUm93czogV2Vla1Jvd1tdO1xyXG5cclxuICBASW5wdXQoKSBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuICBASW5wdXQoKSBob3ZlclZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB2YWx1ZShkYXRlOiBDYW5keURhdGUpIHtcclxuICAgIC8vIFNob3cgdG9kYXkgYnkgZGVmYXVsdFxyXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlIHx8IG5ldyBDYW5keURhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgYWN0aXZlRGF0ZTogQ2FuZHlEYXRlO1xyXG4gIEBJbnB1dCgpIHNob3dXZWVrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBkYXRlQ2VsbFJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBkYXRlRnVsbENlbGxSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBkYXlIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gaG92ZXIgb24gYSBkYXkgYnkgbW91c2UgZW50ZXJcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLmFjdGl2ZURhdGUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnZhbHVlKSB8fFxyXG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5zZWxlY3RlZFZhbHVlKSB8fFxyXG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5ob3ZlclZhbHVlKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlOiBTaW1wbGVDaGFuZ2UpOiBib29sZWFuIHtcclxuICAgIGlmIChjaGFuZ2UpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gPSBjaGFuZ2UucHJldmlvdXNWYWx1ZTtcclxuICAgICAgY29uc3QgY3VycmVudFZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgIUFycmF5LmlzQXJyYXkocHJldmlvdXNWYWx1ZSkgfHxcclxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5sZW5ndGggIT09IHByZXZpb3VzVmFsdWUubGVuZ3RoIHx8XHJcbiAgICAgICAgICBjdXJyZW50VmFsdWUuc29tZSgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQ2FuZHlEYXRlID0gcHJldmlvdXNWYWx1ZVtpbmRleF07XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c0NhbmR5RGF0ZSBpbnN0YW5jZW9mIENhbmR5RGF0ZVxyXG4gICAgICAgICAgICAgID8gcHJldmlvdXNDYW5keURhdGUuaXNTYW1lRGF5KHZhbHVlKVxyXG4gICAgICAgICAgICAgIDogcHJldmlvdXNDYW5keURhdGUgIT09IHZhbHVlO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc1NhbWVEYXRlKHByZXZpb3VzVmFsdWUgYXMgQ2FuZHlEYXRlLCBjdXJyZW50VmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzU2FtZURhdGUobGVmdDogQ2FuZHlEYXRlLCByaWdodDogQ2FuZHlEYXRlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKCFsZWZ0ICYmICFyaWdodCkgfHwgKGxlZnQgJiYgcmlnaHQgJiYgcmlnaHQuaXNTYW1lRGF5KGxlZnQpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy5oZWFkV2Vla0RheXMgPSB0aGlzLm1ha2VIZWFkV2Vla0RheXMoKTtcclxuICAgICAgdGhpcy53ZWVrUm93cyA9IHRoaXMubWFrZVdlZWtSb3dzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZVZhbHVlRnJvbUluc2lkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICAvLyBPbmx5IGNoYW5nZSBkYXRlIG5vdCBjaGFuZ2UgdGltZVxyXG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLnZhbHVlXHJcbiAgICAgIC5zZXRZZWFyKHZhbHVlLmdldFllYXIoKSlcclxuICAgICAgLnNldE1vbnRoKHZhbHVlLmdldE1vbnRoKCkpXHJcbiAgICAgIC5zZXREYXRlKHZhbHVlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQobmV3VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlSGVhZFdlZWtEYXlzKCk6IFdlZWtEYXlMYWJlbFtdIHtcclxuICAgIGNvbnN0IHdlZWtEYXlzOiBXZWVrRGF5TGFiZWxbXSA9IFtdO1xyXG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmFjdGl2ZURhdGUuY2FsZW5kYXJTdGFydCh7IHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKCkgfSk7XHJcbiAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgREFURV9DT0xfTlVNOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGRheSA9IHN0YXJ0LmFkZERheXMoY29sSW5kZXgpO1xyXG4gICAgICB3ZWVrRGF5c1tjb2xJbmRleF0gPSB7XHJcbiAgICAgICAgc2hvcnQ6IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF5Lm5hdGl2ZURhdGUsIHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSA/ICdFJyA6ICdkZGQnKSwgLy8gZWcuIFR1ZVxyXG4gICAgICAgIHZlcnlTaG9ydDogdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXkubmF0aXZlRGF0ZSwgdGhpcy5nZXRWZXJ5U2hvcnRXZWVrRm9ybWF0KCkpIC8vIGVnLiBUdVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdlZWtEYXlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWZXJ5U2hvcnRXZWVrRm9ybWF0KCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmkxOG5cclxuICAgICAgICAuZ2V0TG9jYWxlSWQoKVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLmluZGV4T2YoJ3poJykgPT09IDBcclxuICAgICAgICA/ICdFRUVFRSdcclxuICAgICAgICA6ICdFRUVFRUUnOyAvLyBVc2UgZXh0cmVtZSBzaG9ydCBmb3IgY2hpbmVzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICdkZCc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VXZWVrUm93cygpOiBXZWVrUm93W10ge1xyXG4gICAgY29uc3Qgd2Vla1Jvd3M6IFdlZWtSb3dbXSA9IFtdO1xyXG4gICAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLmNhbGVuZGFyU3RhcnQoeyB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIH0pO1xyXG5cclxuICAgIGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgREFURV9ST1dfTlVNOyB3ZWVrKyspIHtcclxuICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gZmlyc3REYXlPZk1vbnRoLmFkZERheXMod2VlayAqIDcpO1xyXG4gICAgICBjb25zdCByb3c6IFdlZWtSb3cgPSB7XHJcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIGlzQ3VycmVudDogZmFsc2UsXHJcbiAgICAgICAgZGF0ZUNlbGxzOiBbXSxcclxuICAgICAgICB5ZWFyOiB3ZWVrU3RhcnQuZ2V0WWVhcigpXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCA3OyBkYXkrKykge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSB3ZWVrU3RhcnQuYWRkRGF5cyhkYXkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVGb3JtYXQgPSB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGVcclxuICAgICAgICAgID8gJ2xvbmdEYXRlJ1xyXG4gICAgICAgICAgOiB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRGF0ZVBpY2tlci5sYW5nLmRhdGVGb3JtYXQnLCAnWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLm5hdGl2ZURhdGUsIGRhdGVGb3JtYXQpO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLm5hdGl2ZURhdGUsIHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSA/ICdkZCcgOiAnREQnKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbDogRGF0ZUNlbGwgPSB7XHJcbiAgICAgICAgICB2YWx1ZTogZGF0ZS5uYXRpdmVEYXRlLFxyXG4gICAgICAgICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICAgIGlzVG9kYXk6IGZhbHNlLFxyXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgZGF0ZUNlbGxSZW5kZXI6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZGF0ZUNlbGxSZW5kZXIsIGRhdGUpLCAvLyBDdXN0b21pemVkIGNvbnRlbnRcclxuICAgICAgICAgIGRhdGVGdWxsQ2VsbFJlbmRlcjogdmFsdWVGdW5jdGlvblByb3AodGhpcy5kYXRlRnVsbENlbGxSZW5kZXIsIGRhdGUpLFxyXG4gICAgICAgICAgY29udGVudDogYCR7ZGF0ZS5nZXREYXRlKCl9YCxcclxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKGRhdGUpLFxyXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiB0aGlzLmRheUhvdmVyLmVtaXQoZGF0ZSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93V2VlayAmJiAhcm93LndlZWtOdW0pIHtcclxuICAgICAgICAgIHJvdy53ZWVrTnVtID0gdGhpcy5kYXRlSGVscGVyLmdldElTT1dlZWsoZGF0ZS5uYXRpdmVEYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRlLmlzVG9kYXkoKSkge1xyXG4gICAgICAgICAgY2VsbC5pc1RvZGF5ID0gdHJ1ZTtcclxuICAgICAgICAgIHJvdy5pc0N1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zZWxlY3RlZFZhbHVlKSAmJiBkYXRlLmlzU2FtZU1vbnRoKHRoaXMuYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgICAgIC8vIFJhbmdlIHNlbGVjdGlvbnNcclxuICAgICAgICAgIGNvbnN0IHJhbmdlVmFsdWUgPSB0aGlzLmhvdmVyVmFsdWUgJiYgdGhpcy5ob3ZlclZhbHVlLmxlbmd0aCA/IHRoaXMuaG92ZXJWYWx1ZSA6IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcclxuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcmFuZ2VWYWx1ZVswXTtcclxuICAgICAgICAgIGNvbnN0IGVuZCA9IHJhbmdlVmFsdWVbMV07XHJcbiAgICAgICAgICBpZiAoc3RhcnQpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0LmlzU2FtZURheShkYXRlKSkge1xyXG4gICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZFN0YXJ0RGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICByb3cuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbmQpIHtcclxuICAgICAgICAgICAgICBpZiAoZW5kLmlzU2FtZURheShkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkRW5kRGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcm93LmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGUuaXNBZnRlckRheShzdGFydCkgJiYgZGF0ZS5pc0JlZm9yZURheShlbmQpKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmlzSW5SYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRlLmlzU2FtZURheSh0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHJvdy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZERhdGUgJiYgdGhpcy5kaXNhYmxlZERhdGUoZGF0ZS5uYXRpdmVEYXRlKSkge1xyXG4gICAgICAgICAgY2VsbC5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdG9kYXlgXTogY2VsbC5pc1RvZGF5LFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYXN0LW1vbnRoLWNlbGxgXTogZGF0ZS5pc0JlZm9yZU1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5leHQtbW9udGgtYnRuLWRheWBdOiBkYXRlLmlzQWZ0ZXJNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1kYXlgXTogY2VsbC5pc1NlbGVjdGVkLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZC1jZWxsYF06IGNlbGwuaXNEaXNhYmxlZCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtc3RhcnQtZGF0ZWBdOiAhIWNlbGwuaXNTZWxlY3RlZFN0YXJ0RGF0ZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtZW5kLWRhdGVgXTogISFjZWxsLmlzU2VsZWN0ZWRFbmREYXRlLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pbi1yYW5nZS1jZWxsYF06ICEhY2VsbC5pc0luUmFuZ2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByb3cuZGF0ZUNlbGxzLnB1c2goY2VsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdy5jbGFzc01hcCA9IHtcclxuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWN1cnJlbnQtd2Vla2BdOiByb3cuaXNDdXJyZW50LFxyXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYWN0aXZlLXdlZWtgXTogcm93LmlzQWN0aXZlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB3ZWVrUm93cy5wdXNoKHJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdlZWtSb3dzO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeURhdGVGbihfaW5kZXg6IG51bWJlciwgaXRlbTogRGF0ZUNlbGwpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke2l0ZW0udGl0bGV9YDtcclxuICB9XHJcblxyXG4gIHRyYWNrQnlXZWVrRm4oX2luZGV4OiBudW1iZXIsIGl0ZW06IFdlZWtSb3cpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke2l0ZW0ueWVhcn0tJHtpdGVtLndlZWtOdW19YDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2Vla0RheUxhYmVsIHtcclxuICBzaG9ydDogc3RyaW5nO1xyXG4gIHZlcnlTaG9ydDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGVDZWxsIHtcclxuICB2YWx1ZTogRGF0ZTtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGF0ZUNlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nO1xyXG4gIGRhdGVGdWxsQ2VsbFJlbmRlcjogVGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIGlzU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gIGlzVG9kYXk/OiBib29sZWFuO1xyXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGlzU2VsZWN0ZWRTdGFydERhdGU/OiBib29sZWFuO1xyXG4gIGlzU2VsZWN0ZWRFbmREYXRlPzogYm9vbGVhbjtcclxuICBpc0luUmFuZ2U/OiBib29sZWFuO1xyXG4gIGNsYXNzTWFwPzogb2JqZWN0O1xyXG4gIG9uQ2xpY2soZGF0ZTogQ2FuZHlEYXRlKTogdm9pZDtcclxuICBvbk1vdXNlRW50ZXIoKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWVrUm93IHtcclxuICBpc0N1cnJlbnQ/OiBib29sZWFuOyAvLyBJcyB0aGUgd2VlayB0aGF0IHRvZGF5IHN0YXlzIGluXHJcbiAgaXNBY3RpdmU/OiBib29sZWFuOyAvLyBJcyB0aGUgd2VlayB0aGF0IGN1cnJlbnQgc2V0dGluZyBkYXRlIHN0YXlzIGluXHJcbiAgd2Vla051bT86IG51bWJlcjtcclxuICB5ZWFyPzogbnVtYmVyO1xyXG4gIGNsYXNzTWFwPzogb2JqZWN0O1xyXG4gIGRhdGVDZWxsczogRGF0ZUNlbGxbXTtcclxufVxyXG4iXX0=