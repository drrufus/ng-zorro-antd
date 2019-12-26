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
const DATE_ROW_NUM = 6;
/** @type {?} */
const DATE_COL_NUM = 7;
export class DateTableComponent {
    /**
     * @param {?} i18n
     * @param {?} dateHelper
     */
    constructor(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.prefixCls = 'ant-calendar';
        this.showWeek = false;
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        // Emitted when hover on a day by mouse enter
        this.valueChange = new EventEmitter();
    }
    // Range ONLY
    /**
     * @param {?} date
     * @return {?}
     */
    set value(date) {
        // Show today by default
        this._value = this.activeDate = date || new CandyDate();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.render();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    }
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    isDateRealChange(change) {
        if (change) {
            /** @type {?} */
            const previousValue = change.previousValue;
            /** @type {?} */
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    (value, index) => {
                        /** @type {?} */
                        const previousCandyDate = previousValue[index];
                        return previousCandyDate instanceof CandyDate
                            ? previousCandyDate.isSameDay(value)
                            : previousCandyDate !== value;
                    })));
            }
            else {
                return !this.isSameDate((/** @type {?} */ (previousValue)), currentValue);
            }
        }
        return false;
    }
    /**
     * @private
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    changeValueFromInside(value) {
        // Only change date not change time
        /** @type {?} */
        const newValue = this.value
            .setYear(value.getYear())
            .setMonth(value.getMonth())
            .setDate(value.getDate());
        this.valueChange.emit(newValue);
    }
    /**
     * @private
     * @return {?}
     */
    makeHeadWeekDays() {
        /** @type {?} */
        const weekDays = [];
        /** @type {?} */
        const start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            /** @type {?} */
            const day = start.addDays(colIndex);
            weekDays[colIndex] = {
                short: this.dateHelper.format(day.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                // eg. Tue
                veryShort: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    }
    /**
     * @private
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
    makeWeekRows() {
        /** @type {?} */
        const weekRows = [];
        /** @type {?} */
        const firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let week = 0; week < DATE_ROW_NUM; week++) {
            /** @type {?} */
            const weekStart = firstDayOfMonth.addDays(week * 7);
            /** @type {?} */
            const row = {
                isActive: false,
                isCurrent: false,
                dateCells: [],
                year: weekStart.getYear()
            };
            for (let day = 0; day < 7; day++) {
                /** @type {?} */
                const date = weekStart.addDays(day);
                /** @type {?} */
                const dateFormat = this.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                /** @type {?} */
                const title = this.dateHelper.format(date.nativeDate, dateFormat);
                /** @type {?} */
                const label = this.dateHelper.format(date.nativeDate, this.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                /** @type {?} */
                const cell = {
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    dateCellRender: valueFunctionProp(this.dateCellRender, date),
                    // Customized content
                    dateFullCellRender: valueFunctionProp(this.dateFullCellRender, date),
                    content: `${date.getDate()}`,
                    onClick: (/**
                     * @return {?}
                     */
                    () => this.changeValueFromInside(date)),
                    onMouseEnter: (/**
                     * @return {?}
                     */
                    () => this.dayHover.emit(date))
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
                    /** @type {?} */
                    const rangeValue = this.hoverValue && this.hoverValue.length ? this.hoverValue : this.selectedValue;
                    /** @type {?} */
                    const start = rangeValue[0];
                    /** @type {?} */
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
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    trackByDateFn(_index, item) {
        return `${item.title}`;
    }
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    trackByWeekFn(_index, item) {
        return `${item.year}-${item.weekNum}`;
    }
}
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
DateTableComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: DateHelperService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsiZGF0ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBSU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUEyQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFFekYsWUFBWSxHQUFHLENBQUM7O01BQ2hCLFlBQVksR0FBRyxDQUFDO0FBVXRCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBNkI3QixZQUFvQixJQUFtQixFQUFVLFVBQTZCO1FBQTFELFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQXhCckUsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQWdCbkMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUtoQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQyxDQUFDLDZDQUE2Qzs7UUFDdkYsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBRWtCLENBQUM7Ozs7OztJQW5CbEYsSUFDSSxLQUFLLENBQUMsSUFBZTtRQUN2Qix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQWFELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxF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QVc7Z0JBQ3JCLDB4Q0FBd0M7YUFDekM7Ozs7WUFab0QsYUFBYTtZQUF6RCxpQkFBaUI7Ozt3QkFrQnZCLEtBQUs7cUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7b0JBRUwsS0FBSzt5QkFVTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLO2lDQUNMLEtBQUs7dUJBRUwsTUFBTTswQkFDTixNQUFNOzs7O0lBMUJQLG9DQUFrQjs7SUFDbEIsMENBQTZCOztJQUM3QixzQ0FBb0I7O0lBRXBCLHVDQUE0Qzs7SUFDNUMsb0NBQXlDOztJQUN6QywyQ0FBb0M7O0lBQ3BDLHdDQUFpQzs7SUFZakMsd0NBQStCOztJQUMvQixzQ0FBbUM7O0lBQ25DLDBDQUE0Qzs7SUFDNUMsNENBQWtFOztJQUNsRSxnREFBc0U7O0lBRXRFLHNDQUE0RDs7SUFDNUQseUNBQStEOzs7OztJQUVuRCxrQ0FBMkI7Ozs7O0lBQUUsd0NBQXFDOzs7OztBQWlNaEYsa0NBR0M7OztJQUZDLDZCQUFjOztJQUNkLGlDQUFrQjs7Ozs7QUFHcEIsOEJBZ0JDOzs7SUFmQyx5QkFBWTs7SUFDWix5QkFBYzs7SUFDZCx5QkFBYzs7SUFDZCxrQ0FBMkM7O0lBQzNDLHNDQUErQzs7SUFDL0MsMkJBQWdCOztJQUNoQiw4QkFBcUI7O0lBQ3JCLDJCQUFrQjs7SUFDbEIsOEJBQXFCOztJQUNyQix1Q0FBOEI7O0lBQzlCLHFDQUE0Qjs7SUFDNUIsNkJBQW9COztJQUNwQiw0QkFBa0I7Ozs7O0lBQ2xCLGlEQUErQjs7OztJQUMvQixrREFBcUI7Ozs7O0FBR3ZCLDZCQU9DOzs7SUFOQyw0QkFBb0I7O0lBQ3BCLDJCQUFtQjs7SUFDbkIsMEJBQWlCOztJQUNqQix1QkFBYzs7SUFDZCwyQkFBa0I7O0lBQ2xCLDRCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB2YWx1ZUZ1bmN0aW9uUHJvcCwgQ2FuZHlEYXRlLCBGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuY29uc3QgREFURV9ST1dfTlVNID0gNjtcclxuY29uc3QgREFURV9DT0xfTlVNID0gNztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGF0ZS10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdkYXRlVGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS10YWJsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBfdmFsdWU6IENhbmR5RGF0ZTtcclxuICBoZWFkV2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdO1xyXG4gIHdlZWtSb3dzOiBXZWVrUm93W107XHJcblxyXG4gIEBJbnB1dCgpIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIEBJbnB1dCgpIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHZhbHVlKGRhdGU6IENhbmR5RGF0ZSkge1xyXG4gICAgLy8gU2hvdyB0b2RheSBieSBkZWZhdWx0XHJcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGUgfHwgbmV3IENhbmR5RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBhY3RpdmVEYXRlOiBDYW5keURhdGU7XHJcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRhdGVDZWxsUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIGRhdGVGdWxsQ2VsbFJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuYWN0aXZlRGF0ZSkgfHxcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMudmFsdWUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnNlbGVjdGVkVmFsdWUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLmhvdmVyVmFsdWUpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEYXRlUmVhbENoYW5nZShjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5wcmV2aW91c1ZhbHVlO1xyXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheShwcmV2aW91c1ZhbHVlKSB8fFxyXG4gICAgICAgICAgY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gcHJldmlvdXNWYWx1ZS5sZW5ndGggfHxcclxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5zb21lKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDYW5keURhdGUgPSBwcmV2aW91c1ZhbHVlW2luZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzQ2FuZHlEYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlXHJcbiAgICAgICAgICAgICAgPyBwcmV2aW91c0NhbmR5RGF0ZS5pc1NhbWVEYXkodmFsdWUpXHJcbiAgICAgICAgICAgICAgOiBwcmV2aW91c0NhbmR5RGF0ZSAhPT0gdmFsdWU7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzU2FtZURhdGUocHJldmlvdXNWYWx1ZSBhcyBDYW5keURhdGUsIGN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNTYW1lRGF0ZShsZWZ0OiBDYW5keURhdGUsIHJpZ2h0OiBDYW5keURhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIWxlZnQgJiYgIXJpZ2h0KSB8fCAobGVmdCAmJiByaWdodCAmJiByaWdodC5pc1NhbWVEYXkobGVmdCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLmhlYWRXZWVrRGF5cyA9IHRoaXMubWFrZUhlYWRXZWVrRGF5cygpO1xyXG4gICAgICB0aGlzLndlZWtSb3dzID0gdGhpcy5tYWtlV2Vla1Jvd3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIC8vIE9ubHkgY2hhbmdlIGRhdGUgbm90IGNoYW5nZSB0aW1lXHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMudmFsdWVcclxuICAgICAgLnNldFllYXIodmFsdWUuZ2V0WWVhcigpKVxyXG4gICAgICAuc2V0TW9udGgodmFsdWUuZ2V0TW9udGgoKSlcclxuICAgICAgLnNldERhdGUodmFsdWUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VIZWFkV2Vla0RheXMoKTogV2Vla0RheUxhYmVsW10ge1xyXG4gICAgY29uc3Qgd2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdID0gW107XHJcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuYWN0aXZlRGF0ZS5jYWxlbmRhclN0YXJ0KHsgd2Vla1N0YXJ0c09uOiB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKSB9KTtcclxuICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBEQVRFX0NPTF9OVU07IGNvbEluZGV4KyspIHtcclxuICAgICAgY29uc3QgZGF5ID0gc3RhcnQuYWRkRGF5cyhjb2xJbmRleCk7XHJcbiAgICAgIHdlZWtEYXlzW2NvbEluZGV4XSA9IHtcclxuICAgICAgICBzaG9ydDogdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXkubmF0aXZlRGF0ZSwgdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ0UnIDogJ2RkZCcpLCAvLyBlZy4gVHVlXHJcbiAgICAgICAgdmVyeVNob3J0OiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRheS5uYXRpdmVEYXRlLCB0aGlzLmdldFZlcnlTaG9ydFdlZWtGb3JtYXQoKSkgLy8gZWcuIFR1XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2Vla0RheXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFZlcnlTaG9ydFdlZWtGb3JtYXQoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaTE4blxyXG4gICAgICAgIC5nZXRMb2NhbGVJZCgpXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAuaW5kZXhPZignemgnKSA9PT0gMFxyXG4gICAgICAgID8gJ0VFRUVFJ1xyXG4gICAgICAgIDogJ0VFRUVFRSc7IC8vIFVzZSBleHRyZW1lIHNob3J0IGZvciBjaGluZXNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ2RkJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVdlZWtSb3dzKCk6IFdlZWtSb3dbXSB7XHJcbiAgICBjb25zdCB3ZWVrUm93czogV2Vla1Jvd1tdID0gW107XHJcbiAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSB0aGlzLmFjdGl2ZURhdGUuY2FsZW5kYXJTdGFydCh7IHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKCkgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgd2VlayA9IDA7IHdlZWsgPCBEQVRFX1JPV19OVU07IHdlZWsrKykge1xyXG4gICAgICBjb25zdCB3ZWVrU3RhcnQgPSBmaXJzdERheU9mTW9udGguYWRkRGF5cyh3ZWVrICogNyk7XHJcbiAgICAgIGNvbnN0IHJvdzogV2Vla1JvdyA9IHtcclxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgaXNDdXJyZW50OiBmYWxzZSxcclxuICAgICAgICBkYXRlQ2VsbHM6IFtdLFxyXG4gICAgICAgIHllYXI6IHdlZWtTdGFydC5nZXRZZWFyKClcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZvciAobGV0IGRheSA9IDA7IGRheSA8IDc7IGRheSsrKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHdlZWtTdGFydC5hZGREYXlzKGRheSk7XHJcbiAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9IHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZVxyXG4gICAgICAgICAgPyAnbG9uZ0RhdGUnXHJcbiAgICAgICAgICA6IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdEYXRlUGlja2VyLmxhbmcuZGF0ZUZvcm1hdCcsICdZWVlZLU1NLUREJyk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUubmF0aXZlRGF0ZSwgZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUubmF0aXZlRGF0ZSwgdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ2RkJyA6ICdERCcpO1xyXG5cclxuICAgICAgICBjb25zdCBjZWxsOiBEYXRlQ2VsbCA9IHtcclxuICAgICAgICAgIHZhbHVlOiBkYXRlLm5hdGl2ZURhdGUsXHJcbiAgICAgICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNUb2RheTogZmFsc2UsXHJcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICBkYXRlQ2VsbFJlbmRlcjogdmFsdWVGdW5jdGlvblByb3AodGhpcy5kYXRlQ2VsbFJlbmRlciwgZGF0ZSksIC8vIEN1c3RvbWl6ZWQgY29udGVudFxyXG4gICAgICAgICAgZGF0ZUZ1bGxDZWxsUmVuZGVyOiB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmRhdGVGdWxsQ2VsbFJlbmRlciwgZGF0ZSksXHJcbiAgICAgICAgICBjb250ZW50OiBgJHtkYXRlLmdldERhdGUoKX1gLFxyXG4gICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUoZGF0ZSksXHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IHRoaXMuZGF5SG92ZXIuZW1pdChkYXRlKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dXZWVrICYmICFyb3cud2Vla051bSkge1xyXG4gICAgICAgICAgcm93LndlZWtOdW0gPSB0aGlzLmRhdGVIZWxwZXIuZ2V0SVNPV2VlayhkYXRlLm5hdGl2ZURhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGUuaXNUb2RheSgpKSB7XHJcbiAgICAgICAgICBjZWxsLmlzVG9kYXkgPSB0cnVlO1xyXG4gICAgICAgICAgcm93LmlzQ3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnNlbGVjdGVkVmFsdWUpICYmIGRhdGUuaXNTYW1lTW9udGgodGhpcy5hY3RpdmVEYXRlKSkge1xyXG4gICAgICAgICAgLy8gUmFuZ2Ugc2VsZWN0aW9uc1xyXG4gICAgICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHRoaXMuaG92ZXJWYWx1ZSAmJiB0aGlzLmhvdmVyVmFsdWUubGVuZ3RoID8gdGhpcy5ob3ZlclZhbHVlIDogdGhpcy5zZWxlY3RlZFZhbHVlO1xyXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSByYW5nZVZhbHVlWzBdO1xyXG4gICAgICAgICAgY29uc3QgZW5kID0gcmFuZ2VWYWx1ZVsxXTtcclxuICAgICAgICAgIGlmIChzdGFydCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnQuaXNTYW1lRGF5KGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHJvdy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVuZCkge1xyXG4gICAgICAgICAgICAgIGlmIChlbmQuaXNTYW1lRGF5KGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWRFbmREYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByb3cuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZS5pc0FmdGVyRGF5KHN0YXJ0KSAmJiBkYXRlLmlzQmVmb3JlRGF5KGVuZCkpIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNJblJhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGUuaXNTYW1lRGF5KHRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgcm93LmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkRGF0ZSAmJiB0aGlzLmRpc2FibGVkRGF0ZShkYXRlLm5hdGl2ZURhdGUpKSB7XHJcbiAgICAgICAgICBjZWxsLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbGBdOiB0cnVlLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10b2RheWBdOiBjZWxsLmlzVG9kYXksXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxhc3QtbW9udGgtY2VsbGBdOiBkYXRlLmlzQmVmb3JlTW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbmV4dC1tb250aC1idG4tZGF5YF06IGRhdGUuaXNBZnRlck1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWRheWBdOiBjZWxsLmlzU2VsZWN0ZWQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkLWNlbGxgXTogY2VsbC5pc0Rpc2FibGVkLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1zdGFydC1kYXRlYF06ICEhY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1lbmQtZGF0ZWBdOiAhIWNlbGwuaXNTZWxlY3RlZEVuZERhdGUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWluLXJhbmdlLWNlbGxgXTogISFjZWxsLmlzSW5SYW5nZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJvdy5kYXRlQ2VsbHMucHVzaChjZWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcm93LmNsYXNzTWFwID0ge1xyXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY3VycmVudC13ZWVrYF06IHJvdy5pc0N1cnJlbnQsXHJcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1hY3RpdmUtd2Vla2BdOiByb3cuaXNBY3RpdmVcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHdlZWtSb3dzLnB1c2gocm93KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2Vla1Jvd3M7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5RGF0ZUZuKF9pbmRleDogbnVtYmVyLCBpdGVtOiBEYXRlQ2VsbCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7aXRlbS50aXRsZX1gO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeVdlZWtGbihfaW5kZXg6IG51bWJlciwgaXRlbTogV2Vla1Jvdyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7aXRlbS55ZWFyfS0ke2l0ZW0ud2Vla051bX1gO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWVrRGF5TGFiZWwge1xyXG4gIHNob3J0OiBzdHJpbmc7XHJcbiAgdmVyeVNob3J0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUNlbGwge1xyXG4gIHZhbHVlOiBEYXRlO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkYXRlQ2VsbFJlbmRlcjogVGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc7XHJcbiAgZGF0ZUZ1bGxDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgaXNUb2RheT86IGJvb2xlYW47XHJcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgaXNTZWxlY3RlZFN0YXJ0RGF0ZT86IGJvb2xlYW47XHJcbiAgaXNTZWxlY3RlZEVuZERhdGU/OiBib29sZWFuO1xyXG4gIGlzSW5SYW5nZT86IGJvb2xlYW47XHJcbiAgY2xhc3NNYXA/OiBvYmplY3Q7XHJcbiAgb25DbGljayhkYXRlOiBDYW5keURhdGUpOiB2b2lkO1xyXG4gIG9uTW91c2VFbnRlcigpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtSb3cge1xyXG4gIGlzQ3VycmVudD86IGJvb2xlYW47IC8vIElzIHRoZSB3ZWVrIHRoYXQgdG9kYXkgc3RheXMgaW5cclxuICBpc0FjdGl2ZT86IGJvb2xlYW47IC8vIElzIHRoZSB3ZWVrIHRoYXQgY3VycmVudCBzZXR0aW5nIGRhdGUgc3RheXMgaW5cclxuICB3ZWVrTnVtPzogbnVtYmVyO1xyXG4gIHllYXI/OiBudW1iZXI7XHJcbiAgY2xhc3NNYXA/OiBvYmplY3Q7XHJcbiAgZGF0ZUNlbGxzOiBEYXRlQ2VsbFtdO1xyXG59XHJcbiJdfQ==