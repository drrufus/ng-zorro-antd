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
import { sortRangeValue, CandyDate } from 'ng-zorro-antd/core';
import { getTimeConfig, isAllowedDate } from '../util';
export class DateRangePopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        this.calendarChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.resultOk = new EventEmitter(); // Emitted when done with date selecting
        // Emitted when done with date selecting
        this.closePicker = new EventEmitter(); // Notify outside to close the picker panel
        // Notify outside to close the picker panel
        this.prefixCls = 'ant-calendar';
        this.showTimePicker = false;
        this.partTypeMap = { left: 0, right: 1 };
        this.disabledStartTime = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return this.disabledTime && this.disabledTime(value, 'start');
        });
        this.disabledEndTime = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return this.disabledTime && this.disabledTime(value, 'end');
        });
    }
    // Range ONLY
    /**
     * @return {?}
     */
    get hasTimePicker() {
        return !!this.showTime;
    }
    /**
     * @return {?}
     */
    get hasFooter() {
        return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
    }
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    ngOnInit() {
        // Initialization for range properties to prevent errors while later assignment
        if (this.isRange) {
            ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => this.initialArray(prop)));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isRange) {
            if (changes.value) {
                // Re-initialize all related values
                this.clearHoverValue();
                this.selectedValue = (/** @type {?} */ (this.value));
                this.valueForRangeShow = this.normalizeRangeValue((/** @type {?} */ (this.value)));
            }
        }
        // Parse showTime options
        if (changes.showTime || changes.disabledTime) {
            if (this.showTime) {
                this.buildTimeOptions();
            }
        }
        // Show time picker when assigned panel mode as "time"
        if (changes.panelMode && this.hasTimePicker) {
            this.showTimePicker = this.panelMode === 'time';
        }
    }
    /**
     * @param {?} show
     * @return {?}
     */
    onShowTimePickerChange(show) {
        // this.panelMode = show ? 'time' : 'date';
        // this.panelModeChange.emit(this.panelMode);
        this.panelModeChange.emit(show ? 'time' : 'date');
    }
    /**
     * @return {?}
     */
    onClickOk() {
        this.setValue(this.value);
        this.resultOk.emit();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onClickToday(value) {
        // if (this.isRange) { // Show today is not support by range
        //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
        // } else {
        if (!this.isRange) {
            // tslint:disable-next-line: no-any
            this.value = (/** @type {?} */ (null)); // Clear current value to not sync time by next step
            this.changeValueFromSelect(value);
        }
        this.closePickerPanel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onDayHover(value) {
        if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) {
            // When right value is selected, don't do hover
            /** @type {?} */
            const base = this.selectedValue[0];
            if (base.isBeforeDay(value)) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    }
    /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    onPanelModeChange(mode, partType) {
        if (this.isRange) {
            ((/** @type {?} */ (this.panelMode)))[this.getPartTypeIndex(partType)] = mode;
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    }
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    onHeaderChange(value, partType) {
        if (this.isRange) {
            this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
            this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
        }
    }
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    onSelectTime(value, partType) {
        if (this.isRange) {
            /** @type {?} */
            const newValue = this.cloneRangeDate((/** @type {?} */ (this.value)));
            /** @type {?} */
            const index = this.getPartTypeIndex(partType);
            newValue[index] = (/** @type {?} */ (this.overrideHms(value, newValue[index])));
            this.setValue(newValue);
        }
        else {
            this.setValue((/** @type {?} */ (this.overrideHms(value, ((/** @type {?} */ (this.value))) || new CandyDate())))); // If not select a date currently, use today
        }
    }
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    changeValueFromInput(value, partType) {
        const { date, isEnter } = value;
        if (this.isRange) {
            /** @type {?} */
            let newRangeValue = partType === 'left' ? [date, this.selectedValue[1]] : [this.selectedValue[0], date];
            /** @type {?} */
            const isValidRange = this.isValidRange(newRangeValue);
            if (isValidRange) {
                newRangeValue = sortRangeValue(newRangeValue);
                this.valueForRangeShow = this.normalizeRangeValue(newRangeValue);
            }
            // ? Why Can not use follow code
            // this.selectedValue[index] = date;
            this.selectedValue = this.cloneRangeDate(newRangeValue);
            this.setValueFromInput(this.cloneRangeDate(newRangeValue), isEnter && isValidRange);
        }
        else {
            this.setValueFromInput(date, isEnter);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    changeValueFromSelect(value) {
        if (this.isRange) {
            const [left, right] = (/** @type {?} */ (this.selectedValue));
            if ((!left && !right) || (left && right)) {
                // If totally full or empty, clean up && re-assign left first
                this.hoverValue = this.selectedValue = [value];
                this.calendarChange.emit([value.clone()]);
            }
            else if (left && !right) {
                // If one of them is empty, assign the other one and sort, then set the final values
                this.clearHoverValue(); // Clean up
                this.setRangeValue('right', value);
                this.selectedValue = sortRangeValue(this.selectedValue); // Sort
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
                this.calendarChange.emit(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
        // this.selectDate.emit(value);
    }
    /**
     * @param {?} direction
     * @param {?=} partType
     * @return {?}
     */
    enablePrevNext(direction, partType) {
        if (this.isRange) {
            const [start, end] = this.valueForRangeShow;
            /** @type {?} */
            const showMiddle = !start.addMonths(1).isSame(end, 'month');
            if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                return showMiddle;
            }
            return true;
        }
        else {
            return true;
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPanelMode(partType) {
        if (this.isRange) {
            return (/** @type {?} */ (this.panelMode[this.getPartTypeIndex(partType)]));
        }
        else {
            return (/** @type {?} */ (this.panelMode));
        }
    }
    // Get single value or part value of a range
    /**
     * @param {?=} partType
     * @return {?}
     */
    getValue(partType) {
        if (this.isRange) {
            return ((/** @type {?} */ (this.value)))[this.getPartTypeIndex(partType)];
        }
        else {
            return (/** @type {?} */ (this.value));
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getValueBySelector(partType) {
        if (this.isRange) {
            /** @type {?} */
            const valueShow = this.showTimePicker ? this.value : this.valueForRangeShow;
            return ((/** @type {?} */ (valueShow)))[this.getPartTypeIndex(partType)];
        }
        else {
            return (/** @type {?} */ (this.value));
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPartTypeIndex(partType) {
        return this.partTypeMap[(/** @type {?} */ (partType))];
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPlaceholder(partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : ((/** @type {?} */ (this.placeholder)));
    }
    /**
     * @return {?}
     */
    hasSelectedValue() {
        return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
    }
    /**
     * @return {?}
     */
    isAllowedSelectedValue() {
        /** @type {?} */
        const selectedValue = this.selectedValue;
        if (selectedValue && selectedValue[0] && selectedValue[1]) {
            return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
        }
        return false;
    }
    /**
     * @return {?}
     */
    timePickerDisabled() {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    okDisabled() {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return this.value ? !isAllowedDate((/** @type {?} */ (this.value)), this.disabledDate, this.disabledTime) : false;
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getTimeOptions(partType) {
        if (this.showTime && this.timeOptions) {
            return this.timeOptions instanceof Array ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
        }
        return null;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onClickPresetRange(val) {
        /** @type {?} */
        const value = typeof val === 'function' ? val() : val;
        if (value) {
            this.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
            this.resultOk.emit();
        }
    }
    /**
     * @return {?}
     */
    onPresetRangeMouseLeave() {
        this.clearHoverValue();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onHoverPresetRange(val) {
        if (typeof val !== 'function') {
            this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
        }
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getObjectKeys(obj) {
        return obj ? Object.keys(obj) : [];
    }
    /**
     * @private
     * @return {?}
     */
    closePickerPanel() {
        this.closePicker.emit();
    }
    /**
     * @private
     * @return {?}
     */
    clearHoverValue() {
        this.hoverValue = [];
    }
    /**
     * @private
     * @return {?}
     */
    buildTimeOptions() {
        if (this.showTime) {
            /** @type {?} */
            const showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                /** @type {?} */
                const value = (/** @type {?} */ (this.value));
                this.timeOptions = [
                    this.overrideTimeOptions(showTime, value[0], 'start'),
                    this.overrideTimeOptions(showTime, value[1], 'end')
                ];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, (/** @type {?} */ (this.value)));
            }
        }
        else {
            this.timeOptions = null;
        }
    }
    /**
     * @private
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    overrideTimeOptions(origin, value, partial) {
        /** @type {?} */
        let disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return Object.assign({}, origin, getTimeConfig(value, disabledTimeFn));
    }
    /**
     * @private
     * @param {?} value
     * @param {?=} emitValue
     * @return {?}
     */
    setValueFromInput(value, emitValue = true) {
        this.value = value;
        if (emitValue) {
            this.inputChange.emit(this.value);
        }
        this.buildTimeOptions();
    }
    // Set value and trigger change event
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        // TODO: Sync original time (NOTE: this should take more care of because it may depend on many change sources)
        // if (this.isRange) {
        //   // TODO: Sync time
        // } else {
        //   if (this.value) { // Sync time from the original one if it's available
        //     newValue = this.overrideHms(this.value as CandyDate, newValue as CandyDate);
        //   }
        // }
        this.value = value;
        this.valueChange.emit(this.value);
        this.buildTimeOptions();
    }
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    overrideHms(from, to) {
        if (!from || !to) {
            return null;
        }
        return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
    }
    // Check if it's a valid range value
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isValidRange(value) {
        if (Array.isArray(value)) {
            const [start, end] = value;
            return !!(start && end);
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    normalizeRangeValue(value) {
        const [start, end] = value;
        /** @type {?} */
        const newStart = start || new CandyDate();
        /** @type {?} */
        const newEnd = end && end.isSameMonth(newStart) ? end.addMonths(1) : end || newStart.addMonths(1);
        return [newStart, newEnd];
    }
    // private isEmptyRangeValue(value: CandyDate[]): boolean {
    //   return !value || !Array.isArray(value) || value.every((val) => !val);
    // }
    // Renew and set a range value to trigger sub-component's change detection
    /**
     * @private
     * @param {?} partType
     * @param {?} value
     * @return {?}
     */
    setRangeValue(partType, value) {
        /** @type {?} */
        const ref = (this.selectedValue = this.cloneRangeDate((/** @type {?} */ (this.selectedValue))));
        ref[this.getPartTypeIndex(partType)] = value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    cloneRangeDate(value) {
        return (/** @type {?} */ ([value[0] && value[0].clone(), value[1] && value[1].clone()]));
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    initialArray(key) {
        if (!this[key] || !Array.isArray(this[key])) {
            this[key] = [];
        }
    }
}
DateRangePopupComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-range-popup',
                exportAs: 'dateRangePopup',
                template: "<div\r\n  class=\"{{ prefixCls }}-picker-container {{ dropdownClassName }} {{ prefixCls }}-picker-container-placement-bottomLeft\"\r\n  [ngStyle]=\"popupStyle\">\r\n\r\n  <div class=\"{{ prefixCls }} {{ showWeek ? prefixCls + '-week-number': '' }} {{ hasTimePicker ? prefixCls + '-time' : '' }} {{ isRange ? prefixCls + '-range' : '' }}\" tabindex=\"0\">\r\n    <div class=\"{{ prefixCls }}-panel\">\r\n      <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\r\n        <ng-container *ngTemplateOutlet=\"tplCalendarInput\"></ng-container>\r\n      </ng-container>\r\n      <div class=\"{{ prefixCls }}-date-panel\">\r\n        <ng-container *ngIf=\"isRange; else tplSinglePart\">\r\n          <!-- Range Selectors -->\r\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'left' }\"></ng-container>\r\n          <div class=\"ant-calendar-range-middle\">~</div>\r\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'right' }\"></ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\r\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n      <ng-container *ngIf=\"isRange\"> <!-- Range ONLY -->\r\n        <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #tplCalendarInput let-partType=\"partType\">\r\n  <calendar-input\r\n    [value]=\"getValue(partType)\"\r\n    (valueChange)=\"changeValueFromInput($event, partType)\"\r\n    [locale]=\"locale\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [format]=\"format\"\r\n    [autoFocus]=\"partType !== 'right'\"\r\n    [placeholder]=\"getPlaceholder(partType)\"\r\n  ></calendar-input>\r\n</ng-template>\r\n\r\n<ng-template #tplInnerPopup let-partType=\"partType\">\r\n  <inner-popup\r\n    [showWeek]=\"showWeek\"\r\n    [locale]=\"locale\"\r\n    [showTimePicker]=\"hasTimePicker && showTimePicker\"\r\n    [timeOptions]=\"getTimeOptions(partType)\"\r\n    [panelMode]=\"getPanelMode(partType)\"\r\n    (panelModeChange)=\"onPanelModeChange($event, partType)\"\r\n    [value]=\"getValueBySelector(partType)\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [dateRender]=\"dateRender\"\r\n    [selectedValue]=\"selectedValue\"\r\n    [hoverValue]=\"hoverValue\"\r\n    [enablePrev]=\"enablePrevNext('prev', partType)\"\r\n    [enableNext]=\"enablePrevNext('next', partType)\"\r\n    (dayHover)=\"onDayHover($event)\"\r\n    (selectDate)=\"changeValueFromSelect($event)\"\r\n    (selectTime)=\"onSelectTime($event, partType)\"\r\n    (headerChange)=\"onHeaderChange($event, partType)\"\r\n  ></inner-popup>\r\n</ng-template>\r\n\r\n<ng-template #tplFooter>\r\n  <calendar-footer\r\n    *ngIf=\"hasFooter\"\r\n    [locale]=\"locale\"\r\n    [showToday]=\"showToday\"\r\n    [hasTimePicker]=\"hasTimePicker\"\r\n    [timePickerDisabled]=\"timePickerDisabled()\"\r\n    [okDisabled]=\"okDisabled()\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\"\r\n    [(showTimePicker)]=\"showTimePicker\"\r\n    (showTimePickerChange)=\"onShowTimePickerChange($event)\"\r\n    (clickOk)=\"onClickOk()\"\r\n    (clickToday)=\"onClickToday($event)\"\r\n  ></calendar-footer>\r\n</ng-template>\r\n\r\n<!-- Single ONLY -->\r\n<ng-template #tplSinglePart>\r\n  <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container>\r\n</ng-template>\r\n\r\n<!-- Range ONLY -->\r\n<ng-template #tplRangePart let-partType=\"partType\">\r\n  <div class=\"{{ prefixCls }}-range-part {{ prefixCls }}-range-{{ partType }}\">\r\n    <ng-container *ngTemplateOutlet=\"tplCalendarInput; context: { partType: partType }\"></ng-container>\r\n    <div style=\"outline: none;\">\r\n      <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: partType }\"></ng-container>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Range ONLY: Range Quick Selector -->\r\n<ng-template #tplRangeQuickSelector>\r\n  <a *ngFor=\"let name of getObjectKeys(ranges)\"\r\n    (click)=\"onClickPresetRange(ranges[name])\"\r\n    (mouseenter)=\"onHoverPresetRange(ranges[name])\"\r\n    (mouseleave)=\"onPresetRangeMouseLeave()\"\r\n  >{{ name }}</a>\r\n</ng-template>"
            }] }
];
DateRangePopupComponent.propDecorators = {
    isRange: [{ type: Input }],
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    format: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabledDate: [{ type: Input }],
    disabledTime: [{ type: Input }],
    showToday: [{ type: Input }],
    showTime: [{ type: Input }],
    extraFooter: [{ type: Input }],
    ranges: [{ type: Input }],
    dateRender: [{ type: Input }],
    popupStyle: [{ type: Input }],
    dropdownClassName: [{ type: Input }],
    panelMode: [{ type: Input }],
    value: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    calendarChange: [{ type: Output }],
    valueChange: [{ type: Output }],
    inputChange: [{ type: Output }],
    resultOk: [{ type: Output }],
    closePicker: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DateRangePopupComponent.prototype.isRange;
    /** @type {?} */
    DateRangePopupComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePopupComponent.prototype.locale;
    /** @type {?} */
    DateRangePopupComponent.prototype.format;
    /** @type {?} */
    DateRangePopupComponent.prototype.placeholder;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledDate;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.showToday;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.extraFooter;
    /** @type {?} */
    DateRangePopupComponent.prototype.ranges;
    /** @type {?} */
    DateRangePopupComponent.prototype.dateRender;
    /** @type {?} */
    DateRangePopupComponent.prototype.popupStyle;
    /** @type {?} */
    DateRangePopupComponent.prototype.dropdownClassName;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelMode;
    /** @type {?} */
    DateRangePopupComponent.prototype.value;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelModeChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.calendarChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.valueChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.inputChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.resultOk;
    /** @type {?} */
    DateRangePopupComponent.prototype.closePicker;
    /** @type {?} */
    DateRangePopupComponent.prototype.prefixCls;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTimePicker;
    /** @type {?} */
    DateRangePopupComponent.prototype.timeOptions;
    /** @type {?} */
    DateRangePopupComponent.prototype.valueForRangeShow;
    /** @type {?} */
    DateRangePopupComponent.prototype.selectedValue;
    /** @type {?} */
    DateRangePopupComponent.prototype.hoverValue;
    /**
     * @type {?}
     * @private
     */
    DateRangePopupComponent.prototype.partTypeMap;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledStartTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledEndTime;
    /* Skipping unhandled member: [property: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3BvcHVwcy9kYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxvQkFBb0IsQ0FBQztBQVk3RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQVV2RCxNQUFNLE9BQU8sdUJBQXVCO0lBUnBDO1FBNEJxQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQzlELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDckQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNsRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRWxELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDLENBQUMsd0NBQXdDOztRQUM3RSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUMsQ0FBQywyQ0FBMkM7O1FBRXRHLGNBQVMsR0FBVyxjQUFjLENBQUM7UUFDbkMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFjeEIsZ0JBQVcsR0FBOEIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQTRMdkUsc0JBQWlCOzs7O1FBQUcsQ0FBQyxLQUFvQixFQUFzQixFQUFFO1lBQy9ELE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFP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Q0FBcUU7O0lBQ3JFLDhDQUFxRTs7SUFFckUsMkNBQXVEOztJQUN2RCw4Q0FBMEQ7O0lBRTFELDRDQUFtQzs7SUFDbkMsaURBQWdDOztJQUNoQyw4Q0FBOEQ7O0lBQzlELG9EQUErQjs7SUFDL0IsZ0RBQTJCOztJQUMzQiw2Q0FBd0I7Ozs7O0lBVXhCLDhDQUF1RTs7SUE0THZFLG9EQUVFOztJQUVGLGtEQUVFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgc29ydFJhbmdlVmFsdWUsIENhbmR5RGF0ZSwgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQge1xyXG4gIENvbXBhdGlibGVWYWx1ZSxcclxuICBEaXNhYmxlZERhdGVGbixcclxuICBEaXNhYmxlZFRpbWVDb25maWcsXHJcbiAgRGlzYWJsZWRUaW1lRm4sXHJcbiAgRGlzYWJsZWRUaW1lUGFydGlhbCxcclxuICBQYW5lbE1vZGUsXHJcbiAgUHJlc2V0UmFuZ2VzLFxyXG4gIFN1cHBvcnRUaW1lT3B0aW9uc1xyXG59IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcclxuaW1wb3J0IHsgZ2V0VGltZUNvbmZpZywgaXNBbGxvd2VkRGF0ZSB9IGZyb20gJy4uL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkYXRlLXJhbmdlLXBvcHVwJyxcclxuICBleHBvcnRBczogJ2RhdGVSYW5nZVBvcHVwJyxcclxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtcmFuZ2UtcG9wdXAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBpc1JhbmdlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dXZWVrOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IERpc2FibGVkRGF0ZUZuO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm47IC8vIFRoaXMgd2lsbCBsZWFkIHRvIHJlYnVpbGQgdGltZSBvcHRpb25zXHJcbiAgQElucHV0KCkgc2hvd1RvZGF5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dUaW1lOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcclxuICBASW5wdXQoKSByYW5nZXM6IFByZXNldFJhbmdlcztcclxuICBASW5wdXQoKSBkYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIHBvcHVwU3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBkcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwYW5lbE1vZGU6IFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBDb21wYXRpYmxlVmFsdWU7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBwYW5lbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjYWxlbmRhckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZVZhbHVlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZVZhbHVlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZVZhbHVlPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVzdWx0T2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7IC8vIEVtaXR0ZWQgd2hlbiBkb25lIHdpdGggZGF0ZSBzZWxlY3RpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xvc2VQaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7IC8vIE5vdGlmeSBvdXRzaWRlIHRvIGNsb3NlIHRoZSBwaWNrZXIgcGFuZWxcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcclxuICBzaG93VGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHRpbWVPcHRpb25zOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBTdXBwb3J0VGltZU9wdGlvbnNbXSB8IG51bGw7XHJcbiAgdmFsdWVGb3JSYW5nZVNob3c6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcbiAgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuICBob3ZlclZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG5cclxuICBnZXQgaGFzVGltZVBpY2tlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMuc2hvd1RpbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzRm9vdGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvd1RvZGF5IHx8IHRoaXMuaGFzVGltZVBpY2tlciB8fCAhIXRoaXMuZXh0cmFGb290ZXIgfHwgISF0aGlzLnJhbmdlcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFydFR5cGVNYXA6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7IGxlZnQ6IDAsIHJpZ2h0OiAxIH07XHJcblxyXG4gIFtwcm9wZXJ0eTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIEluaXRpYWxpemF0aW9uIGZvciByYW5nZSBwcm9wZXJ0aWVzIHRvIHByZXZlbnQgZXJyb3JzIHdoaWxlIGxhdGVyIGFzc2lnbm1lbnRcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgWydwbGFjZWhvbGRlcicsICdwYW5lbE1vZGUnLCAnc2VsZWN0ZWRWYWx1ZScsICdob3ZlclZhbHVlJ10uZm9yRWFjaChwcm9wID0+IHRoaXMuaW5pdGlhbEFycmF5KHByb3ApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgaWYgKGNoYW5nZXMudmFsdWUpIHtcclxuICAgICAgICAvLyBSZS1pbml0aWFsaXplIGFsbCByZWxhdGVkIHZhbHVlc1xyXG4gICAgICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXTtcclxuICAgICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93ID0gdGhpcy5ub3JtYWxpemVSYW5nZVZhbHVlKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFyc2Ugc2hvd1RpbWUgb3B0aW9uc1xyXG4gICAgaWYgKGNoYW5nZXMuc2hvd1RpbWUgfHwgY2hhbmdlcy5kaXNhYmxlZFRpbWUpIHtcclxuICAgICAgaWYgKHRoaXMuc2hvd1RpbWUpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkVGltZU9wdGlvbnMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNob3cgdGltZSBwaWNrZXIgd2hlbiBhc3NpZ25lZCBwYW5lbCBtb2RlIGFzIFwidGltZVwiXHJcbiAgICBpZiAoY2hhbmdlcy5wYW5lbE1vZGUgJiYgdGhpcy5oYXNUaW1lUGlja2VyKSB7XHJcbiAgICAgIHRoaXMuc2hvd1RpbWVQaWNrZXIgPSB0aGlzLnBhbmVsTW9kZSA9PT0gJ3RpbWUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TaG93VGltZVBpY2tlckNoYW5nZShzaG93OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLnBhbmVsTW9kZSA9IHNob3cgPyAndGltZScgOiAnZGF0ZSc7XHJcbiAgICAvLyB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KHRoaXMucGFuZWxNb2RlKTtcclxuICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQoc2hvdyA/ICd0aW1lJyA6ICdkYXRlJyk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrT2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5yZXN1bHRPay5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrVG9kYXkodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgLy8gaWYgKHRoaXMuaXNSYW5nZSkgeyAvLyBTaG93IHRvZGF5IGlzIG5vdCBzdXBwb3J0IGJ5IHJhbmdlXHJcbiAgICAvLyAgIHRocm93IG5ldyBFcnJvcignXCJuelNob3dUb2RheVwiIGlzIG5vdCBzdXBwb3J0IGZvciBcIlJhbmdlUGlja2VyXCIhJyk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgaWYgKCF0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICAgICAgdGhpcy52YWx1ZSA9IG51bGwgYXMgYW55OyAvLyBDbGVhciBjdXJyZW50IHZhbHVlIHRvIG5vdCBzeW5jIHRpbWUgYnkgbmV4dCBzdGVwXHJcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tU2VsZWN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xvc2VQaWNrZXJQYW5lbCgpO1xyXG4gIH1cclxuXHJcbiAgb25EYXlIb3Zlcih2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlICYmIHRoaXMuc2VsZWN0ZWRWYWx1ZVswXSAmJiAhdGhpcy5zZWxlY3RlZFZhbHVlWzFdKSB7XHJcbiAgICAgIC8vIFdoZW4gcmlnaHQgdmFsdWUgaXMgc2VsZWN0ZWQsIGRvbid0IGRvIGhvdmVyXHJcbiAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLnNlbGVjdGVkVmFsdWVbMF07IC8vIFVzZSB0aGUgbGVmdCBvZiBzZWxlY3RlZCB2YWx1ZSBhcyB0aGUgYmFzZSB0byBkZWNpZGUgbGF0ZXIgaG92ZXJWYWx1ZVxyXG4gICAgICBpZiAoYmFzZS5pc0JlZm9yZURheSh2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLmhvdmVyVmFsdWUgPSBbYmFzZSwgdmFsdWVdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFt2YWx1ZSwgYmFzZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUGFuZWxNb2RlQ2hhbmdlKG1vZGU6IFBhbmVsTW9kZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgICh0aGlzLnBhbmVsTW9kZSBhcyBQYW5lbE1vZGVbXSlbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV0gPSBtb2RlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYW5lbE1vZGUgPSBtb2RlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhbmVsTW9kZSk7XHJcbiAgfVxyXG5cclxuICBvbkhlYWRlckNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvd1t0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93ID0gdGhpcy5ub3JtYWxpemVSYW5nZVZhbHVlKHRoaXMudmFsdWVGb3JSYW5nZVNob3cpOyAvLyBTaG91bGQgYWx3YXlzIHRha2UgY2FyZSBvZiBzdGFydC9lbmRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0VGltZSh2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW10pO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSk7XHJcbiAgICAgIG5ld1ZhbHVlW2luZGV4XSA9IHRoaXMub3ZlcnJpZGVIbXModmFsdWUsIG5ld1ZhbHVlW2luZGV4XSkhO1xyXG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlKSB8fCBuZXcgQ2FuZHlEYXRlKCkpISk7IC8vIElmIG5vdCBzZWxlY3QgYSBkYXRlIGN1cnJlbnRseSwgdXNlIHRvZGF5XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWYWx1ZUZyb21JbnB1dCh2YWx1ZTogeyBkYXRlOiBDYW5keURhdGU7IGlzRW50ZXI6IGJvb2xlYW4gfSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGRhdGUsIGlzRW50ZXIgfSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBsZXQgbmV3UmFuZ2VWYWx1ZSA9IHBhcnRUeXBlID09PSAnbGVmdCcgPyBbZGF0ZSwgdGhpcy5zZWxlY3RlZFZhbHVlWzFdXSA6IFt0aGlzLnNlbGVjdGVkVmFsdWVbMF0sIGRhdGVdO1xyXG4gICAgICBjb25zdCBpc1ZhbGlkUmFuZ2UgPSB0aGlzLmlzVmFsaWRSYW5nZShuZXdSYW5nZVZhbHVlKTtcclxuICAgICAgaWYgKGlzVmFsaWRSYW5nZSkge1xyXG4gICAgICAgIG5ld1JhbmdlVmFsdWUgPSBzb3J0UmFuZ2VWYWx1ZShuZXdSYW5nZVZhbHVlKTtcclxuICAgICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93ID0gdGhpcy5ub3JtYWxpemVSYW5nZVZhbHVlKG5ld1JhbmdlVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID8gV2h5IENhbiBub3QgdXNlIGZvbGxvdyBjb2RlXHJcbiAgICAgIC8vIHRoaXMuc2VsZWN0ZWRWYWx1ZVtpbmRleF0gPSBkYXRlO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLmNsb25lUmFuZ2VEYXRlKG5ld1JhbmdlVmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KHRoaXMuY2xvbmVSYW5nZURhdGUobmV3UmFuZ2VWYWx1ZSksIGlzRW50ZXIgJiYgaXNWYWxpZFJhbmdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZGF0ZSwgaXNFbnRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWYWx1ZUZyb21TZWxlY3QodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBbbGVmdCwgcmlnaHRdID0gdGhpcy5zZWxlY3RlZFZhbHVlIGFzIENhbmR5RGF0ZVtdOyAvLyBOT1RFOiB0aGUgbGVmdC9yaWdodCBtYXliZSBub3QgdGhlIHNlcXVlbmNlIGl0IHNlbGVjdCBhdCB0aGUgZGF0ZSBwYW5lbHNcclxuXHJcbiAgICAgIGlmICgoIWxlZnQgJiYgIXJpZ2h0KSB8fCAobGVmdCAmJiByaWdodCkpIHtcclxuICAgICAgICAvLyBJZiB0b3RhbGx5IGZ1bGwgb3IgZW1wdHksIGNsZWFuIHVwICYmIHJlLWFzc2lnbiBsZWZ0IGZpcnN0XHJcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlID0gW3ZhbHVlXTtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyQ2hhbmdlLmVtaXQoW3ZhbHVlLmNsb25lKCldKTtcclxuICAgICAgfSBlbHNlIGlmIChsZWZ0ICYmICFyaWdodCkge1xyXG4gICAgICAgIC8vIElmIG9uZSBvZiB0aGVtIGlzIGVtcHR5LCBhc3NpZ24gdGhlIG90aGVyIG9uZSBhbmQgc29ydCwgdGhlbiBzZXQgdGhlIGZpbmFsIHZhbHVlc1xyXG4gICAgICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7IC8vIENsZWFuIHVwXHJcbiAgICAgICAgdGhpcy5zZXRSYW5nZVZhbHVlKCdyaWdodCcsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSBzb3J0UmFuZ2VWYWx1ZSh0aGlzLnNlbGVjdGVkVmFsdWUpOyAvLyBTb3J0XHJcbiAgICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZSh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnNlbGVjdGVkVmFsdWUpKTtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyQ2hhbmdlLmVtaXQodGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnNlbGVjdGVkVmFsdWUpKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVQcmV2TmV4dChkaXJlY3Rpb246ICdwcmV2JyB8ICduZXh0JywgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHRoaXMudmFsdWVGb3JSYW5nZVNob3c7XHJcbiAgICAgIGNvbnN0IHNob3dNaWRkbGUgPSAhc3RhcnQuYWRkTW9udGhzKDEpLmlzU2FtZShlbmQsICdtb250aCcpOyAvLyBPbmUgbW9udGggZGlmZiB0aGVuIGRvbid0IHNob3cgbWlkZGxlIHByZXYvbmV4dFxyXG4gICAgICBpZiAoKHBhcnRUeXBlID09PSAnbGVmdCcgJiYgZGlyZWN0aW9uID09PSAnbmV4dCcpIHx8IChwYXJ0VHlwZSA9PT0gJ3JpZ2h0JyAmJiBkaXJlY3Rpb24gPT09ICdwcmV2JykpIHtcclxuICAgICAgICByZXR1cm4gc2hvd01pZGRsZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UGFuZWxNb2RlKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IFBhbmVsTW9kZSB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhbmVsTW9kZVt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSBhcyBQYW5lbE1vZGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5wYW5lbE1vZGUgYXMgUGFuZWxNb2RlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gR2V0IHNpbmdsZSB2YWx1ZSBvciBwYXJ0IHZhbHVlIG9mIGEgcmFuZ2VcclxuICBnZXRWYWx1ZShwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBDYW5keURhdGUge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICByZXR1cm4gKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW10pW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWVCeVNlbGVjdG9yKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IENhbmR5RGF0ZSB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlU2hvdyA9IHRoaXMuc2hvd1RpbWVQaWNrZXIgPyB0aGlzLnZhbHVlIDogdGhpcy52YWx1ZUZvclJhbmdlU2hvdzsgLy8gVXNlIHRoZSByZWFsIHRpbWUgdmFsdWUgdGhhdCB3aXRob3V0IGRlY29yYXRpb25zIHdoZW4gdGltZXBpY2tlciBpcyBzaG93biB1cFxyXG4gICAgICByZXR1cm4gKHZhbHVlU2hvdyBhcyBDYW5keURhdGVbXSlbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJ0VHlwZU1hcFtwYXJ0VHlwZSFdO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlzUmFuZ2UgPyB0aGlzLnBsYWNlaG9sZGVyW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldIDogKHRoaXMucGxhY2Vob2xkZXIgYXMgc3RyaW5nKTtcclxuICB9XHJcblxyXG4gIGhhc1NlbGVjdGVkVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZhbHVlICYmICEhdGhpcy5zZWxlY3RlZFZhbHVlWzFdICYmICEhdGhpcy5zZWxlY3RlZFZhbHVlWzBdO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZWRTdGFydFRpbWUgPSAodmFsdWU6IERhdGUgfCBEYXRlW10pOiBEaXNhYmxlZFRpbWVDb25maWcgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRUaW1lICYmIHRoaXMuZGlzYWJsZWRUaW1lKHZhbHVlLCAnc3RhcnQnKTtcclxuICB9O1xyXG5cclxuICBkaXNhYmxlZEVuZFRpbWUgPSAodmFsdWU6IERhdGUgfCBEYXRlW10pOiBEaXNhYmxlZFRpbWVDb25maWcgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRUaW1lICYmIHRoaXMuZGlzYWJsZWRUaW1lKHZhbHVlLCAnZW5kJyk7XHJcbiAgfTtcclxuXHJcbiAgaXNBbGxvd2VkU2VsZWN0ZWRWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWU7XHJcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiBzZWxlY3RlZFZhbHVlWzBdICYmIHNlbGVjdGVkVmFsdWVbMV0pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBpc0FsbG93ZWREYXRlKHNlbGVjdGVkVmFsdWVbMF0sIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkU3RhcnRUaW1lKSAmJlxyXG4gICAgICAgIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVsxXSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRFbmRUaW1lKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdGltZVBpY2tlckRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmhhc1RpbWVQaWNrZXIpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICByZXR1cm4gIXRoaXMuaGFzU2VsZWN0ZWRWYWx1ZSgpIHx8ICEhdGhpcy5ob3ZlclZhbHVlLmxlbmd0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9rRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuaGFzVGltZVBpY2tlcikge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiAhdGhpcy5pc0FsbG93ZWRTZWxlY3RlZFZhbHVlKCkgfHwgIXRoaXMuaGFzU2VsZWN0ZWRWYWx1ZSgpIHx8ICEhdGhpcy5ob3ZlclZhbHVlLmxlbmd0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlID8gIWlzQWxsb3dlZERhdGUodGhpcy52YWx1ZSBhcyBDYW5keURhdGUsIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkVGltZSkgOiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRpbWVPcHRpb25zKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IG51bGwge1xyXG4gICAgaWYgKHRoaXMuc2hvd1RpbWUgJiYgdGhpcy50aW1lT3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gdGhpcy50aW1lT3B0aW9ucyBpbnN0YW5jZW9mIEFycmF5ID8gdGhpcy50aW1lT3B0aW9uc1t0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSA6IHRoaXMudGltZU9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tQcmVzZXRSYW5nZSh2YWw6IFByZXNldFJhbmdlc1trZXlvZiBQcmVzZXRSYW5nZXNdKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicgPyB2YWwoKSA6IHZhbDtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKFtuZXcgQ2FuZHlEYXRlKHZhbHVlWzBdKSwgbmV3IENhbmR5RGF0ZSh2YWx1ZVsxXSldKTtcclxuICAgICAgdGhpcy5yZXN1bHRPay5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblByZXNldFJhbmdlTW91c2VMZWF2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBvbkhvdmVyUHJlc2V0UmFuZ2UodmFsOiBQcmVzZXRSYW5nZXNba2V5b2YgUHJlc2V0UmFuZ2VzXSk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5ob3ZlclZhbHVlID0gW25ldyBDYW5keURhdGUodmFsWzBdKSwgbmV3IENhbmR5RGF0ZSh2YWxbMV0pXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE9iamVjdEtleXMob2JqOiBvYmplY3QpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9zZVBpY2tlclBhbmVsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbG9zZVBpY2tlci5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFySG92ZXJWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZFRpbWVPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2hvd1RpbWUpIHtcclxuICAgICAgY29uc3Qgc2hvd1RpbWUgPSB0eXBlb2YgdGhpcy5zaG93VGltZSA9PT0gJ29iamVjdCcgPyB0aGlzLnNob3dUaW1lIDoge307XHJcbiAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IFtcclxuICAgICAgICAgIHRoaXMub3ZlcnJpZGVUaW1lT3B0aW9ucyhzaG93VGltZSwgdmFsdWVbMF0sICdzdGFydCcpLFxyXG4gICAgICAgICAgdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB2YWx1ZVsxXSwgJ2VuZCcpXHJcbiAgICAgICAgXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRpbWVPcHRpb25zID0gdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGltZU9wdGlvbnMgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvdmVycmlkZVRpbWVPcHRpb25zKFxyXG4gICAgb3JpZ2luOiBTdXBwb3J0VGltZU9wdGlvbnMsXHJcbiAgICB2YWx1ZTogQ2FuZHlEYXRlLFxyXG4gICAgcGFydGlhbD86IERpc2FibGVkVGltZVBhcnRpYWxcclxuICApOiBTdXBwb3J0VGltZU9wdGlvbnMge1xyXG4gICAgbGV0IGRpc2FibGVkVGltZUZuO1xyXG4gICAgaWYgKHBhcnRpYWwpIHtcclxuICAgICAgZGlzYWJsZWRUaW1lRm4gPSBwYXJ0aWFsID09PSAnc3RhcnQnID8gdGhpcy5kaXNhYmxlZFN0YXJ0VGltZSA6IHRoaXMuZGlzYWJsZWRFbmRUaW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzYWJsZWRUaW1lRm4gPSB0aGlzLmRpc2FibGVkVGltZTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IC4uLm9yaWdpbiwgLi4uZ2V0VGltZUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lRm4pIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFZhbHVlRnJvbUlucHV0KHZhbHVlOiBDb21wYXRpYmxlVmFsdWUsIGVtaXRWYWx1ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIGlmIChlbWl0VmFsdWUpIHtcclxuICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICAvLyBTZXQgdmFsdWUgYW5kIHRyaWdnZXIgY2hhbmdlIGV2ZW50XHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogQ29tcGF0aWJsZVZhbHVlKTogdm9pZCB7XHJcbiAgICAvLyBUT0RPOiBTeW5jIG9yaWdpbmFsIHRpbWUgKE5PVEU6IHRoaXMgc2hvdWxkIHRha2UgbW9yZSBjYXJlIG9mIGJlY2F1c2UgaXQgbWF5IGRlcGVuZCBvbiBtYW55IGNoYW5nZSBzb3VyY2VzKVxyXG4gICAgLy8gaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgLy8gICAvLyBUT0RPOiBTeW5jIHRpbWVcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIGlmICh0aGlzLnZhbHVlKSB7IC8vIFN5bmMgdGltZSBmcm9tIHRoZSBvcmlnaW5hbCBvbmUgaWYgaXQncyBhdmFpbGFibGVcclxuICAgIC8vICAgICBuZXdWYWx1ZSA9IHRoaXMub3ZlcnJpZGVIbXModGhpcy52YWx1ZSBhcyBDYW5keURhdGUsIG5ld1ZhbHVlIGFzIENhbmR5RGF0ZSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvdmVycmlkZUhtcyhmcm9tOiBDYW5keURhdGUsIHRvOiBDYW5keURhdGUpOiBDYW5keURhdGUgfCBudWxsIHtcclxuICAgIGlmICghZnJvbSB8fCAhdG8pIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uc2V0SG1zKGZyb20uZ2V0SG91cnMoKSwgZnJvbS5nZXRNaW51dGVzKCksIGZyb20uZ2V0U2Vjb25kcygpKTtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGl0J3MgYSB2YWxpZCByYW5nZSB2YWx1ZVxyXG4gIHByaXZhdGUgaXNWYWxpZFJhbmdlKHZhbHVlOiBDYW5keURhdGVbXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gISEoc3RhcnQgJiYgZW5kKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm9ybWFsaXplUmFuZ2VWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBDYW5keURhdGVbXSB7XHJcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB2YWx1ZTtcclxuICAgIGNvbnN0IG5ld1N0YXJ0ID0gc3RhcnQgfHwgbmV3IENhbmR5RGF0ZSgpO1xyXG4gICAgY29uc3QgbmV3RW5kID0gZW5kICYmIGVuZC5pc1NhbWVNb250aChuZXdTdGFydCkgPyBlbmQuYWRkTW9udGhzKDEpIDogZW5kIHx8IG5ld1N0YXJ0LmFkZE1vbnRocygxKTtcclxuICAgIHJldHVybiBbbmV3U3RhcnQsIG5ld0VuZF07XHJcbiAgfVxyXG5cclxuICAvLyBwcml2YXRlIGlzRW1wdHlSYW5nZVZhbHVlKHZhbHVlOiBDYW5keURhdGVbXSk6IGJvb2xlYW4ge1xyXG4gIC8vICAgcmV0dXJuICF2YWx1ZSB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUuZXZlcnkoKHZhbCkgPT4gIXZhbCk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBSZW5ldyBhbmQgc2V0IGEgcmFuZ2UgdmFsdWUgdG8gdHJpZ2dlciBzdWItY29tcG9uZW50J3MgY2hhbmdlIGRldGVjdGlvblxyXG4gIHByaXZhdGUgc2V0UmFuZ2VWYWx1ZShwYXJ0VHlwZTogUmFuZ2VQYXJ0VHlwZSwgdmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVmID0gKHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuY2xvbmVSYW5nZURhdGUodGhpcy5zZWxlY3RlZFZhbHVlIGFzIENhbmR5RGF0ZVtdKSk7XHJcbiAgICByZWZbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV0gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvbmVSYW5nZURhdGUodmFsdWU6IENhbmR5RGF0ZVtdKTogQ2FuZHlEYXRlW10ge1xyXG4gICAgcmV0dXJuIFt2YWx1ZVswXSAmJiB2YWx1ZVswXS5jbG9uZSgpLCB2YWx1ZVsxXSAmJiB2YWx1ZVsxXS5jbG9uZSgpXSBhcyBDYW5keURhdGVbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbEFycmF5KGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXNba2V5XSB8fCAhQXJyYXkuaXNBcnJheSh0aGlzW2tleV0pKSB7XHJcbiAgICAgIHRoaXNba2V5XSA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmFuZ2VQYXJ0VHlwZSA9ICdsZWZ0JyB8ICdyaWdodCc7XHJcbiJdfQ==