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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsiZGF0ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFJTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBZ0IsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQTJCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztNQUV6RixZQUFZLEdBQUcsQ0FBQzs7TUFDaEIsWUFBWSxHQUFHLENBQUM7QUFVdEIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUE2QjdCLFlBQW9CLElBQW1CLEVBQVUsVUFBNkI7UUFBMUQsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBeEJyRSxjQUFTLEdBQVcsY0FBYyxDQUFDO1FBZ0JuQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBS2hCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDLENBQUMsNkNBQTZDOztRQUN2RixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFFa0IsQ0FBQzs7Ozs7O0lBbkJsRixJQUNJLEtBQUssQ0FBQyxJQUFlO1FBQ3ZCLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLElBQUksU0FBUyxFQUFFLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBYUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVB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VztnQkFDckIsMHhDQUF3QzthQUN6Qzs7OztZQVpvRCxhQUFhO1lBQXpELGlCQUFpQjs7O3dCQWtCdkIsS0FBSztxQkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSztvQkFFTCxLQUFLO3lCQVVMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7aUNBQ0wsS0FBSzt1QkFFTCxNQUFNOzBCQUNOLE1BQU07Ozs7SUExQlAsb0NBQWtCOztJQUNsQiwwQ0FBNkI7O0lBQzdCLHNDQUFvQjs7SUFFcEIsdUNBQTRDOztJQUM1QyxvQ0FBeUM7O0lBQ3pDLDJDQUFvQzs7SUFDcEMsd0NBQWlDOztJQVlqQyx3Q0FBK0I7O0lBQy9CLHNDQUFtQzs7SUFDbkMsMENBQTRDOztJQUM1Qyw0Q0FBa0U7O0lBQ2xFLGdEQUFzRTs7SUFFdEUsc0NBQTREOztJQUM1RCx5Q0FBK0Q7Ozs7O0lBRW5ELGtDQUEyQjs7Ozs7SUFBRSx3Q0FBcUM7Ozs7O0FBaU1oRixrQ0FHQzs7O0lBRkMsNkJBQWM7O0lBQ2QsaUNBQWtCOzs7OztBQUdwQiw4QkFnQkM7OztJQWZDLHlCQUFZOztJQUNaLHlCQUFjOztJQUNkLHlCQUFjOztJQUNkLGtDQUEyQzs7SUFDM0Msc0NBQStDOztJQUMvQywyQkFBZ0I7O0lBQ2hCLDhCQUFxQjs7SUFDckIsMkJBQWtCOztJQUNsQiw4QkFBcUI7O0lBQ3JCLHVDQUE4Qjs7SUFDOUIscUNBQTRCOztJQUM1Qiw2QkFBb0I7O0lBQ3BCLDRCQUFrQjs7Ozs7SUFDbEIsaURBQStCOzs7O0lBQy9CLGtEQUFxQjs7Ozs7QUFHdkIsNkJBT0M7OztJQU5DLDRCQUFvQjs7SUFDcEIsMkJBQW1COztJQUNuQiwwQkFBaUI7O0lBQ2pCLHVCQUFjOztJQUNkLDJCQUFrQjs7SUFDbEIsNEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wLCBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekNhbGVuZGFySTE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5jb25zdCBEQVRFX1JPV19OVU0gPSA2O1xyXG5jb25zdCBEQVRFX0NPTF9OVU0gPSA3O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkYXRlLXRhYmxlJyxcclxuICBleHBvcnRBczogJ2RhdGVUYWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXRhYmxlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIF92YWx1ZTogQ2FuZHlEYXRlO1xyXG4gIGhlYWRXZWVrRGF5czogV2Vla0RheUxhYmVsW107XHJcbiAgd2Vla1Jvd3M6IFdlZWtSb3dbXTtcclxuXHJcbiAgQElucHV0KCkgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcbiAgQElucHV0KCkgaG92ZXJWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdmFsdWUoZGF0ZTogQ2FuZHlEYXRlKSB7XHJcbiAgICAvLyBTaG93IHRvZGF5IGJ5IGRlZmF1bHRcclxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5hY3RpdmVEYXRlID0gZGF0ZSB8fCBuZXcgQ2FuZHlEYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGFjdGl2ZURhdGU6IENhbmR5RGF0ZTtcclxuICBASW5wdXQoKSBzaG93V2VlazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGF0ZUNlbGxSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgZGF0ZUZ1bGxDZWxsUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGF5SG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTsgLy8gRW1pdHRlZCB3aGVuIGhvdmVyIG9uIGEgZGF5IGJ5IG1vdXNlIGVudGVyXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSwgcHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5hY3RpdmVEYXRlKSB8fFxyXG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy52YWx1ZSkgfHxcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuc2VsZWN0ZWRWYWx1ZSkgfHxcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuaG92ZXJWYWx1ZSlcclxuICAgICkge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoY2hhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLnByZXZpb3VzVmFsdWU7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50VmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICFBcnJheS5pc0FycmF5KHByZXZpb3VzVmFsdWUpIHx8XHJcbiAgICAgICAgICBjdXJyZW50VmFsdWUubGVuZ3RoICE9PSBwcmV2aW91c1ZhbHVlLmxlbmd0aCB8fFxyXG4gICAgICAgICAgY3VycmVudFZhbHVlLnNvbWUoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0NhbmR5RGF0ZSA9IHByZXZpb3VzVmFsdWVbaW5kZXhdO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNDYW5keURhdGUgaW5zdGFuY2VvZiBDYW5keURhdGVcclxuICAgICAgICAgICAgICA/IHByZXZpb3VzQ2FuZHlEYXRlLmlzU2FtZURheSh2YWx1ZSlcclxuICAgICAgICAgICAgICA6IHByZXZpb3VzQ2FuZHlEYXRlICE9PSB2YWx1ZTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNTYW1lRGF0ZShwcmV2aW91c1ZhbHVlIGFzIENhbmR5RGF0ZSwgY3VycmVudFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NhbWVEYXRlKGxlZnQ6IENhbmR5RGF0ZSwgcmlnaHQ6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghbGVmdCAmJiAhcmlnaHQpIHx8IChsZWZ0ICYmIHJpZ2h0ICYmIHJpZ2h0LmlzU2FtZURheShsZWZ0KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaGVhZFdlZWtEYXlzID0gdGhpcy5tYWtlSGVhZFdlZWtEYXlzKCk7XHJcbiAgICAgIHRoaXMud2Vla1Jvd3MgPSB0aGlzLm1ha2VXZWVrUm93cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VWYWx1ZUZyb21JbnNpZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgLy8gT25seSBjaGFuZ2UgZGF0ZSBub3QgY2hhbmdlIHRpbWVcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy52YWx1ZVxyXG4gICAgICAuc2V0WWVhcih2YWx1ZS5nZXRZZWFyKCkpXHJcbiAgICAgIC5zZXRNb250aCh2YWx1ZS5nZXRNb250aCgpKVxyXG4gICAgICAuc2V0RGF0ZSh2YWx1ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUhlYWRXZWVrRGF5cygpOiBXZWVrRGF5TGFiZWxbXSB7XHJcbiAgICBjb25zdCB3ZWVrRGF5czogV2Vla0RheUxhYmVsW10gPSBbXTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5hY3RpdmVEYXRlLmNhbGVuZGFyU3RhcnQoeyB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIH0pO1xyXG4gICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IERBVEVfQ09MX05VTTsgY29sSW5kZXgrKykge1xyXG4gICAgICBjb25zdCBkYXkgPSBzdGFydC5hZGREYXlzKGNvbEluZGV4KTtcclxuICAgICAgd2Vla0RheXNbY29sSW5kZXhdID0ge1xyXG4gICAgICAgIHNob3J0OiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRheS5uYXRpdmVEYXRlLCB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUgPyAnRScgOiAnZGRkJyksIC8vIGVnLiBUdWVcclxuICAgICAgICB2ZXJ5U2hvcnQ6IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF5Lm5hdGl2ZURhdGUsIHRoaXMuZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpKSAvLyBlZy4gVHVcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB3ZWVrRGF5cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pMThuXHJcbiAgICAgICAgLmdldExvY2FsZUlkKClcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5pbmRleE9mKCd6aCcpID09PSAwXHJcbiAgICAgICAgPyAnRUVFRUUnXHJcbiAgICAgICAgOiAnRUVFRUVFJzsgLy8gVXNlIGV4dHJlbWUgc2hvcnQgZm9yIGNoaW5lc2VcclxuICAgIH1cclxuICAgIHJldHVybiAnZGQnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlV2Vla1Jvd3MoKTogV2Vla1Jvd1tdIHtcclxuICAgIGNvbnN0IHdlZWtSb3dzOiBXZWVrUm93W10gPSBbXTtcclxuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5jYWxlbmRhclN0YXJ0KHsgd2Vla1N0YXJ0c09uOiB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKSB9KTtcclxuXHJcbiAgICBmb3IgKGxldCB3ZWVrID0gMDsgd2VlayA8IERBVEVfUk9XX05VTTsgd2VlaysrKSB7XHJcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IGZpcnN0RGF5T2ZNb250aC5hZGREYXlzKHdlZWsgKiA3KTtcclxuICAgICAgY29uc3Qgcm93OiBXZWVrUm93ID0ge1xyXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gICAgICAgIGRhdGVDZWxsczogW10sXHJcbiAgICAgICAgeWVhcjogd2Vla1N0YXJ0LmdldFllYXIoKVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgNzsgZGF5KyspIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gd2Vla1N0YXJ0LmFkZERheXMoZGF5KTtcclxuICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlXHJcbiAgICAgICAgICA/ICdsb25nRGF0ZSdcclxuICAgICAgICAgIDogdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ0RhdGVQaWNrZXIubGFuZy5kYXRlRm9ybWF0JywgJ1lZWVktTU0tREQnKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZS5uYXRpdmVEYXRlLCBkYXRlRm9ybWF0KTtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZS5uYXRpdmVEYXRlLCB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUgPyAnZGQnIDogJ0REJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGw6IERhdGVDZWxsID0ge1xyXG4gICAgICAgICAgdmFsdWU6IGRhdGUubmF0aXZlRGF0ZSxcclxuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcclxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICBpc1RvZGF5OiBmYWxzZSxcclxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgIGRhdGVDZWxsUmVuZGVyOiB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmRhdGVDZWxsUmVuZGVyLCBkYXRlKSwgLy8gQ3VzdG9taXplZCBjb250ZW50XHJcbiAgICAgICAgICBkYXRlRnVsbENlbGxSZW5kZXI6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZGF0ZUZ1bGxDZWxsUmVuZGVyLCBkYXRlKSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGAke2RhdGUuZ2V0RGF0ZSgpfWAsXHJcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZShkYXRlKSxcclxuICAgICAgICAgIG9uTW91c2VFbnRlcjogKCkgPT4gdGhpcy5kYXlIb3Zlci5lbWl0KGRhdGUpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1dlZWsgJiYgIXJvdy53ZWVrTnVtKSB7XHJcbiAgICAgICAgICByb3cud2Vla051bSA9IHRoaXMuZGF0ZUhlbHBlci5nZXRJU09XZWVrKGRhdGUubmF0aXZlRGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0ZS5pc1RvZGF5KCkpIHtcclxuICAgICAgICAgIGNlbGwuaXNUb2RheSA9IHRydWU7XHJcbiAgICAgICAgICByb3cuaXNDdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuc2VsZWN0ZWRWYWx1ZSkgJiYgZGF0ZS5pc1NhbWVNb250aCh0aGlzLmFjdGl2ZURhdGUpKSB7XHJcbiAgICAgICAgICAvLyBSYW5nZSBzZWxlY3Rpb25zXHJcbiAgICAgICAgICBjb25zdCByYW5nZVZhbHVlID0gdGhpcy5ob3ZlclZhbHVlICYmIHRoaXMuaG92ZXJWYWx1ZS5sZW5ndGggPyB0aGlzLmhvdmVyVmFsdWUgOiB0aGlzLnNlbGVjdGVkVmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBzdGFydCA9IHJhbmdlVmFsdWVbMF07XHJcbiAgICAgICAgICBjb25zdCBlbmQgPSByYW5nZVZhbHVlWzFdO1xyXG4gICAgICAgICAgaWYgKHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydC5pc1NhbWVEYXkoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWRTdGFydERhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgcm93LmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW5kKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVuZC5pc1NhbWVEYXkoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZEVuZERhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJvdy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlLmlzQWZ0ZXJEYXkoc3RhcnQpICYmIGRhdGUuaXNCZWZvcmVEYXkoZW5kKSkge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pc0luUmFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZS5pc1NhbWVEYXkodGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICByb3cuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKGRhdGUubmF0aXZlRGF0ZSkpIHtcclxuICAgICAgICAgIGNlbGwuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjZWxsLmNsYXNzTWFwID0ge1xyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRvZGF5YF06IGNlbGwuaXNUb2RheSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1tb250aC1jZWxsYF06IGRhdGUuaXNCZWZvcmVNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LW1vbnRoLWJ0bi1kYXlgXTogZGF0ZS5pc0FmdGVyTW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtZGF5YF06IGNlbGwuaXNTZWxlY3RlZCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWQtY2VsbGBdOiBjZWxsLmlzRGlzYWJsZWQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLXN0YXJ0LWRhdGVgXTogISFjZWxsLmlzU2VsZWN0ZWRTdGFydERhdGUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWVuZC1kYXRlYF06ICEhY2VsbC5pc1NlbGVjdGVkRW5kRGF0ZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taW4tcmFuZ2UtY2VsbGBdOiAhIWNlbGwuaXNJblJhbmdlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcm93LmRhdGVDZWxscy5wdXNoKGNlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByb3cuY2xhc3NNYXAgPSB7XHJcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jdXJyZW50LXdlZWtgXTogcm93LmlzQ3VycmVudCxcclxuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWFjdGl2ZS13ZWVrYF06IHJvdy5pc0FjdGl2ZVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgd2Vla1Jvd3MucHVzaChyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3ZWVrUm93cztcclxuICB9XHJcblxyXG4gIHRyYWNrQnlEYXRlRm4oX2luZGV4OiBudW1iZXIsIGl0ZW06IERhdGVDZWxsKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtpdGVtLnRpdGxlfWA7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5V2Vla0ZuKF9pbmRleDogbnVtYmVyLCBpdGVtOiBXZWVrUm93KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtpdGVtLnllYXJ9LSR7aXRlbS53ZWVrTnVtfWA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtEYXlMYWJlbCB7XHJcbiAgc2hvcnQ6IHN0cmluZztcclxuICB2ZXJ5U2hvcnQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlQ2VsbCB7XHJcbiAgdmFsdWU6IERhdGU7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRhdGVDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZztcclxuICBkYXRlRnVsbENlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcclxuICBpc1RvZGF5PzogYm9vbGVhbjtcclxuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICBpc1NlbGVjdGVkU3RhcnREYXRlPzogYm9vbGVhbjtcclxuICBpc1NlbGVjdGVkRW5kRGF0ZT86IGJvb2xlYW47XHJcbiAgaXNJblJhbmdlPzogYm9vbGVhbjtcclxuICBjbGFzc01hcD86IG9iamVjdDtcclxuICBvbkNsaWNrKGRhdGU6IENhbmR5RGF0ZSk6IHZvaWQ7XHJcbiAgb25Nb3VzZUVudGVyKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1JvdyB7XHJcbiAgaXNDdXJyZW50PzogYm9vbGVhbjsgLy8gSXMgdGhlIHdlZWsgdGhhdCB0b2RheSBzdGF5cyBpblxyXG4gIGlzQWN0aXZlPzogYm9vbGVhbjsgLy8gSXMgdGhlIHdlZWsgdGhhdCBjdXJyZW50IHNldHRpbmcgZGF0ZSBzdGF5cyBpblxyXG4gIHdlZWtOdW0/OiBudW1iZXI7XHJcbiAgeWVhcj86IG51bWJlcjtcclxuICBjbGFzc01hcD86IG9iamVjdDtcclxuICBkYXRlQ2VsbHM6IERhdGVDZWxsW107XHJcbn1cclxuIl19