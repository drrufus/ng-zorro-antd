/**
 * @fileoverview added by tsickle
 * Generated from: lib/popups/date-range-popup.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3BvcHVwcy9kYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFZN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFVdkQsTUFBTSxPQUFPLHVCQUF1QjtJQVJwQztRQTRCcUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUM5RCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ3JELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDbEQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVsRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQyxDQUFDLHdDQUF3Qzs7UUFDN0UsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDLENBQUMsMkNBQTJDOztRQUV0RyxjQUFTLEdBQVcsY0FBYyxDQUFDO1FBQ25DLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBY3hCLGdCQUFXLEdBQThCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUE0THZFLHNCQUFpQjs7OztRQUFHLENBQUMsS0FBb0IsRUFBc0IsRUFBRTtZQUMvRCxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FB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OENBQXFFOztJQUNyRSw4Q0FBcUU7O0lBRXJFLDJDQUF1RDs7SUFDdkQsOENBQTBEOztJQUUxRCw0Q0FBbUM7O0lBQ25DLGlEQUFnQzs7SUFDaEMsOENBQThEOztJQUM5RCxvREFBK0I7O0lBQy9CLGdEQUEyQjs7SUFDM0IsNkNBQXdCOzs7OztJQVV4Qiw4Q0FBdUU7O0lBNEx2RSxvREFFRTs7SUFFRixrREFFRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHNvcnRSYW5nZVZhbHVlLCBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHtcclxuICBDb21wYXRpYmxlVmFsdWUsXHJcbiAgRGlzYWJsZWREYXRlRm4sXHJcbiAgRGlzYWJsZWRUaW1lQ29uZmlnLFxyXG4gIERpc2FibGVkVGltZUZuLFxyXG4gIERpc2FibGVkVGltZVBhcnRpYWwsXHJcbiAgUGFuZWxNb2RlLFxyXG4gIFByZXNldFJhbmdlcyxcclxuICBTdXBwb3J0VGltZU9wdGlvbnNcclxufSBmcm9tICcuLi8uLi9zdGFuZGFyZC10eXBlcyc7XHJcbmltcG9ydCB7IGdldFRpbWVDb25maWcsIGlzQWxsb3dlZERhdGUgfSBmcm9tICcuLi91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGF0ZS1yYW5nZS1wb3B1cCcsXHJcbiAgZXhwb3J0QXM6ICdkYXRlUmFuZ2VQb3B1cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgaXNSYW5nZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93V2VlazogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiBEaXNhYmxlZERhdGVGbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuOyAvLyBUaGlzIHdpbGwgbGVhZCB0byByZWJ1aWxkIHRpbWUgb3B0aW9uc1xyXG4gIEBJbnB1dCgpIHNob3dUb2RheTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93VGltZTogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbjtcclxuICBASW5wdXQoKSBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmFuZ2VzOiBQcmVzZXRSYW5nZXM7XHJcbiAgQElucHV0KCkgZGF0ZVJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBwb3B1cFN0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgZHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcGFuZWxNb2RlOiBQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXTtcclxuICBASW5wdXQoKSB2YWx1ZTogQ29tcGF0aWJsZVZhbHVlO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBhdGlibGVWYWx1ZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBhdGlibGVWYWx1ZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBhdGlibGVWYWx1ZT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlc3VsdE9rID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBFbWl0dGVkIHdoZW4gZG9uZSB3aXRoIGRhdGUgc2VsZWN0aW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlUGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBOb3RpZnkgb3V0c2lkZSB0byBjbG9zZSB0aGUgcGlja2VyIHBhbmVsXHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0aW1lT3B0aW9uczogU3VwcG9ydFRpbWVPcHRpb25zIHwgU3VwcG9ydFRpbWVPcHRpb25zW10gfCBudWxsO1xyXG4gIHZhbHVlRm9yUmFuZ2VTaG93OiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIHNlbGVjdGVkVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcbiAgaG92ZXJWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuXHJcbiAgZ2V0IGhhc1RpbWVQaWNrZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLnNob3dUaW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0Zvb3RlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNob3dUb2RheSB8fCB0aGlzLmhhc1RpbWVQaWNrZXIgfHwgISF0aGlzLmV4dHJhRm9vdGVyIHx8ICEhdGhpcy5yYW5nZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhcnRUeXBlTWFwOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0geyBsZWZ0OiAwLCByaWdodDogMSB9O1xyXG5cclxuICBbcHJvcGVydHk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBJbml0aWFsaXphdGlvbiBmb3IgcmFuZ2UgcHJvcGVydGllcyB0byBwcmV2ZW50IGVycm9ycyB3aGlsZSBsYXRlciBhc3NpZ25tZW50XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIFsncGxhY2Vob2xkZXInLCAncGFuZWxNb2RlJywgJ3NlbGVjdGVkVmFsdWUnLCAnaG92ZXJWYWx1ZSddLmZvckVhY2gocHJvcCA9PiB0aGlzLmluaXRpYWxBcnJheShwcm9wKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLnZhbHVlKSB7XHJcbiAgICAgICAgLy8gUmUtaW5pdGlhbGl6ZSBhbGwgcmVsYXRlZCB2YWx1ZXNcclxuICAgICAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHNob3dUaW1lIG9wdGlvbnNcclxuICAgIGlmIChjaGFuZ2VzLnNob3dUaW1lIHx8IGNoYW5nZXMuZGlzYWJsZWRUaW1lKSB7XHJcbiAgICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTaG93IHRpbWUgcGlja2VyIHdoZW4gYXNzaWduZWQgcGFuZWwgbW9kZSBhcyBcInRpbWVcIlxyXG4gICAgaWYgKGNoYW5nZXMucGFuZWxNb2RlICYmIHRoaXMuaGFzVGltZVBpY2tlcikge1xyXG4gICAgICB0aGlzLnNob3dUaW1lUGlja2VyID0gdGhpcy5wYW5lbE1vZGUgPT09ICd0aW1lJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2hvd1RpbWVQaWNrZXJDaGFuZ2Uoc2hvdzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5wYW5lbE1vZGUgPSBzaG93ID8gJ3RpbWUnIDogJ2RhdGUnO1xyXG4gICAgLy8gdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhbmVsTW9kZSk7XHJcbiAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KHNob3cgPyAndGltZScgOiAnZGF0ZScpO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja09rKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMucmVzdWx0T2suZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1RvZGF5KHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIC8vIGlmICh0aGlzLmlzUmFuZ2UpIHsgLy8gU2hvdyB0b2RheSBpcyBub3Qgc3VwcG9ydCBieSByYW5nZVxyXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ1wibnpTaG93VG9kYXlcIiBpcyBub3Qgc3VwcG9ydCBmb3IgXCJSYW5nZVBpY2tlclwiIScpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIGlmICghdGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsIGFzIGFueTsgLy8gQ2xlYXIgY3VycmVudCB2YWx1ZSB0byBub3Qgc3luYyB0aW1lIGJ5IG5leHQgc3RlcFxyXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbVNlbGVjdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsb3NlUGlja2VyUGFuZWwoKTtcclxuICB9XHJcblxyXG4gIG9uRGF5SG92ZXIodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSAmJiB0aGlzLnNlbGVjdGVkVmFsdWVbMF0gJiYgIXRoaXMuc2VsZWN0ZWRWYWx1ZVsxXSkge1xyXG4gICAgICAvLyBXaGVuIHJpZ2h0IHZhbHVlIGlzIHNlbGVjdGVkLCBkb24ndCBkbyBob3ZlclxyXG4gICAgICBjb25zdCBiYXNlID0gdGhpcy5zZWxlY3RlZFZhbHVlWzBdOyAvLyBVc2UgdGhlIGxlZnQgb2Ygc2VsZWN0ZWQgdmFsdWUgYXMgdGhlIGJhc2UgdG8gZGVjaWRlIGxhdGVyIGhvdmVyVmFsdWVcclxuICAgICAgaWYgKGJhc2UuaXNCZWZvcmVEYXkodmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gW2Jhc2UsIHZhbHVlXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhvdmVyVmFsdWUgPSBbdmFsdWUsIGJhc2VdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBhbmVsTW9kZUNoYW5nZShtb2RlOiBQYW5lbE1vZGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICAodGhpcy5wYW5lbE1vZGUgYXMgUGFuZWxNb2RlW10pW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldID0gbW9kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFuZWxNb2RlID0gbW9kZTtcclxuICAgIH1cclxuICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQodGhpcy5wYW5lbE1vZGUpO1xyXG4gIH1cclxuXHJcbiAgb25IZWFkZXJDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3dbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV0gPSB2YWx1ZTtcclxuICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZSh0aGlzLnZhbHVlRm9yUmFuZ2VTaG93KTsgLy8gU2hvdWxkIGFsd2F5cyB0YWtlIGNhcmUgb2Ygc3RhcnQvZW5kXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdFRpbWUodmFsdWU6IENhbmR5RGF0ZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdKTtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpO1xyXG4gICAgICBuZXdWYWx1ZVtpbmRleF0gPSB0aGlzLm92ZXJyaWRlSG1zKHZhbHVlLCBuZXdWYWx1ZVtpbmRleF0pITtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMub3ZlcnJpZGVIbXModmFsdWUsICh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSkgfHwgbmV3IENhbmR5RGF0ZSgpKSEpOyAvLyBJZiBub3Qgc2VsZWN0IGEgZGF0ZSBjdXJyZW50bHksIHVzZSB0b2RheVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVmFsdWVGcm9tSW5wdXQodmFsdWU6IHsgZGF0ZTogQ2FuZHlEYXRlOyBpc0VudGVyOiBib29sZWFuIH0sIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBkYXRlLCBpc0VudGVyIH0gPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgbGV0IG5ld1JhbmdlVmFsdWUgPSBwYXJ0VHlwZSA9PT0gJ2xlZnQnID8gW2RhdGUsIHRoaXMuc2VsZWN0ZWRWYWx1ZVsxXV0gOiBbdGhpcy5zZWxlY3RlZFZhbHVlWzBdLCBkYXRlXTtcclxuICAgICAgY29uc3QgaXNWYWxpZFJhbmdlID0gdGhpcy5pc1ZhbGlkUmFuZ2UobmV3UmFuZ2VWYWx1ZSk7XHJcbiAgICAgIGlmIChpc1ZhbGlkUmFuZ2UpIHtcclxuICAgICAgICBuZXdSYW5nZVZhbHVlID0gc29ydFJhbmdlVmFsdWUobmV3UmFuZ2VWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZShuZXdSYW5nZVZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyA/IFdoeSBDYW4gbm90IHVzZSBmb2xsb3cgY29kZVxyXG4gICAgICAvLyB0aGlzLnNlbGVjdGVkVmFsdWVbaW5kZXhdID0gZGF0ZTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5jbG9uZVJhbmdlRGF0ZShuZXdSYW5nZVZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZUZyb21JbnB1dCh0aGlzLmNsb25lUmFuZ2VEYXRlKG5ld1JhbmdlVmFsdWUpLCBpc0VudGVyICYmIGlzVmFsaWRSYW5nZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGRhdGUsIGlzRW50ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVmFsdWVGcm9tU2VsZWN0KHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZSBhcyBDYW5keURhdGVbXTsgLy8gTk9URTogdGhlIGxlZnQvcmlnaHQgbWF5YmUgbm90IHRoZSBzZXF1ZW5jZSBpdCBzZWxlY3QgYXQgdGhlIGRhdGUgcGFuZWxzXHJcblxyXG4gICAgICBpZiAoKCFsZWZ0ICYmICFyaWdodCkgfHwgKGxlZnQgJiYgcmlnaHQpKSB7XHJcbiAgICAgICAgLy8gSWYgdG90YWxseSBmdWxsIG9yIGVtcHR5LCBjbGVhbiB1cCAmJiByZS1hc3NpZ24gbGVmdCBmaXJzdFxyXG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IFt2YWx1ZV07XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhckNoYW5nZS5lbWl0KFt2YWx1ZS5jbG9uZSgpXSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobGVmdCAmJiAhcmlnaHQpIHtcclxuICAgICAgICAvLyBJZiBvbmUgb2YgdGhlbSBpcyBlbXB0eSwgYXNzaWduIHRoZSBvdGhlciBvbmUgYW5kIHNvcnQsIHRoZW4gc2V0IHRoZSBmaW5hbCB2YWx1ZXNcclxuICAgICAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpOyAvLyBDbGVhbiB1cFxyXG4gICAgICAgIHRoaXMuc2V0UmFuZ2VWYWx1ZSgncmlnaHQnLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gc29ydFJhbmdlVmFsdWUodGhpcy5zZWxlY3RlZFZhbHVlKTsgLy8gU29ydFxyXG4gICAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUodGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuY2xvbmVSYW5nZURhdGUodGhpcy5zZWxlY3RlZFZhbHVlKSk7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhckNoYW5nZS5lbWl0KHRoaXMuY2xvbmVSYW5nZURhdGUodGhpcy5zZWxlY3RlZFZhbHVlKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5zZWxlY3REYXRlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlUHJldk5leHQoZGlyZWN0aW9uOiAncHJldicgfCAnbmV4dCcsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93O1xyXG4gICAgICBjb25zdCBzaG93TWlkZGxlID0gIXN0YXJ0LmFkZE1vbnRocygxKS5pc1NhbWUoZW5kLCAnbW9udGgnKTsgLy8gT25lIG1vbnRoIGRpZmYgdGhlbiBkb24ndCBzaG93IG1pZGRsZSBwcmV2L25leHRcclxuICAgICAgaWYgKChwYXJ0VHlwZSA9PT0gJ2xlZnQnICYmIGRpcmVjdGlvbiA9PT0gJ25leHQnKSB8fCAocGFydFR5cGUgPT09ICdyaWdodCcgJiYgZGlyZWN0aW9uID09PSAncHJldicpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNob3dNaWRkbGU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFBhbmVsTW9kZShwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBQYW5lbE1vZGUge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wYW5lbE1vZGVbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV0gYXMgUGFuZWxNb2RlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGFuZWxNb2RlIGFzIFBhbmVsTW9kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdldCBzaW5nbGUgdmFsdWUgb3IgcGFydCB2YWx1ZSBvZiBhIHJhbmdlXHJcbiAgZ2V0VmFsdWUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdKVt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZhbHVlQnlTZWxlY3RvcihwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBDYW5keURhdGUge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCB2YWx1ZVNob3cgPSB0aGlzLnNob3dUaW1lUGlja2VyID8gdGhpcy52YWx1ZSA6IHRoaXMudmFsdWVGb3JSYW5nZVNob3c7IC8vIFVzZSB0aGUgcmVhbCB0aW1lIHZhbHVlIHRoYXQgd2l0aG91dCBkZWNvcmF0aW9ucyB3aGVuIHRpbWVwaWNrZXIgaXMgc2hvd24gdXBcclxuICAgICAgcmV0dXJuICh2YWx1ZVNob3cgYXMgQ2FuZHlEYXRlW10pW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFydFR5cGVNYXBbcGFydFR5cGUhXTtcclxuICB9XHJcblxyXG4gIGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1JhbmdlID8gdGhpcy5wbGFjZWhvbGRlclt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSA6ICh0aGlzLnBsYWNlaG9sZGVyIGFzIHN0cmluZyk7XHJcbiAgfVxyXG5cclxuICBoYXNTZWxlY3RlZFZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWYWx1ZSAmJiAhIXRoaXMuc2VsZWN0ZWRWYWx1ZVsxXSAmJiAhIXRoaXMuc2VsZWN0ZWRWYWx1ZVswXTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVkU3RhcnRUaW1lID0gKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKTogRGlzYWJsZWRUaW1lQ29uZmlnID0+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVGltZSAmJiB0aGlzLmRpc2FibGVkVGltZSh2YWx1ZSwgJ3N0YXJ0Jyk7XHJcbiAgfTtcclxuXHJcbiAgZGlzYWJsZWRFbmRUaW1lID0gKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKTogRGlzYWJsZWRUaW1lQ29uZmlnID0+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVGltZSAmJiB0aGlzLmRpc2FibGVkVGltZSh2YWx1ZSwgJ2VuZCcpO1xyXG4gIH07XHJcblxyXG4gIGlzQWxsb3dlZFNlbGVjdGVkVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlO1xyXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZVswXSAmJiBzZWxlY3RlZFZhbHVlWzFdKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlWzBdLCB0aGlzLmRpc2FibGVkRGF0ZSwgdGhpcy5kaXNhYmxlZFN0YXJ0VGltZSkgJiZcclxuICAgICAgICBpc0FsbG93ZWREYXRlKHNlbGVjdGVkVmFsdWVbMV0sIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkRW5kVGltZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHRpbWVQaWNrZXJEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5oYXNUaW1lUGlja2VyKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICF0aGlzLmhhc1NlbGVjdGVkVmFsdWUoKSB8fCAhIXRoaXMuaG92ZXJWYWx1ZS5sZW5ndGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBva0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmhhc1RpbWVQaWNrZXIpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICByZXR1cm4gIXRoaXMuaXNBbGxvd2VkU2VsZWN0ZWRWYWx1ZSgpIHx8ICF0aGlzLmhhc1NlbGVjdGVkVmFsdWUoKSB8fCAhIXRoaXMuaG92ZXJWYWx1ZS5sZW5ndGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSA/ICFpc0FsbG93ZWREYXRlKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlLCB0aGlzLmRpc2FibGVkRGF0ZSwgdGhpcy5kaXNhYmxlZFRpbWUpIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lT3B0aW9ucyhwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBudWxsIHtcclxuICAgIGlmICh0aGlzLnNob3dUaW1lICYmIHRoaXMudGltZU9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGltZU9wdGlvbnMgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMudGltZU9wdGlvbnNbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV0gOiB0aGlzLnRpbWVPcHRpb25zO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrUHJlc2V0UmFuZ2UodmFsOiBQcmVzZXRSYW5nZXNba2V5b2YgUHJlc2V0UmFuZ2VzXSk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nID8gdmFsKCkgOiB2YWw7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShbbmV3IENhbmR5RGF0ZSh2YWx1ZVswXSksIG5ldyBDYW5keURhdGUodmFsdWVbMV0pXSk7XHJcbiAgICAgIHRoaXMucmVzdWx0T2suZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QcmVzZXRSYW5nZU1vdXNlTGVhdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Ib3ZlclByZXNldFJhbmdlKHZhbDogUHJlc2V0UmFuZ2VzW2tleW9mIFByZXNldFJhbmdlc10pOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtuZXcgQ2FuZHlEYXRlKHZhbFswXSksIG5ldyBDYW5keURhdGUodmFsWzFdKV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRPYmplY3RLZXlzKG9iajogb2JqZWN0KTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIG9iaiA/IE9iamVjdC5rZXlzKG9iaikgOiBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvc2VQaWNrZXJQYW5lbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2VQaWNrZXIuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckhvdmVyVmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRUaW1lT3B0aW9ucygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgIGNvbnN0IHNob3dUaW1lID0gdHlwZW9mIHRoaXMuc2hvd1RpbWUgPT09ICdvYmplY3QnID8gdGhpcy5zaG93VGltZSA6IHt9O1xyXG4gICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgICAgIHRoaXMudGltZU9wdGlvbnMgPSBbXHJcbiAgICAgICAgICB0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHZhbHVlWzBdLCAnc3RhcnQnKSxcclxuICAgICAgICAgIHRoaXMub3ZlcnJpZGVUaW1lT3B0aW9ucyhzaG93VGltZSwgdmFsdWVbMV0sICdlbmQnKVxyXG4gICAgICAgIF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IHRoaXMub3ZlcnJpZGVUaW1lT3B0aW9ucyhzaG93VGltZSwgdGhpcy52YWx1ZSBhcyBDYW5keURhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRpbWVPcHRpb25zID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3ZlcnJpZGVUaW1lT3B0aW9ucyhcclxuICAgIG9yaWdpbjogU3VwcG9ydFRpbWVPcHRpb25zLFxyXG4gICAgdmFsdWU6IENhbmR5RGF0ZSxcclxuICAgIHBhcnRpYWw/OiBEaXNhYmxlZFRpbWVQYXJ0aWFsXHJcbiAgKTogU3VwcG9ydFRpbWVPcHRpb25zIHtcclxuICAgIGxldCBkaXNhYmxlZFRpbWVGbjtcclxuICAgIGlmIChwYXJ0aWFsKSB7XHJcbiAgICAgIGRpc2FibGVkVGltZUZuID0gcGFydGlhbCA9PT0gJ3N0YXJ0JyA/IHRoaXMuZGlzYWJsZWRTdGFydFRpbWUgOiB0aGlzLmRpc2FibGVkRW5kVGltZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc2FibGVkVGltZUZuID0gdGhpcy5kaXNhYmxlZFRpbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyAuLi5vcmlnaW4sIC4uLmdldFRpbWVDb25maWcodmFsdWUsIGRpc2FibGVkVGltZUZuKSB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZUZyb21JbnB1dCh2YWx1ZTogQ29tcGF0aWJsZVZhbHVlLCBlbWl0VmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAoZW1pdFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0IHZhbHVlIGFuZCB0cmlnZ2VyIGNoYW5nZSBldmVudFxyXG4gIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xyXG4gICAgLy8gVE9ETzogU3luYyBvcmlnaW5hbCB0aW1lIChOT1RFOiB0aGlzIHNob3VsZCB0YWtlIG1vcmUgY2FyZSBvZiBiZWNhdXNlIGl0IG1heSBkZXBlbmQgb24gbWFueSBjaGFuZ2Ugc291cmNlcylcclxuICAgIC8vIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgIC8vICAgLy8gVE9ETzogU3luYyB0aW1lXHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBpZiAodGhpcy52YWx1ZSkgeyAvLyBTeW5jIHRpbWUgZnJvbSB0aGUgb3JpZ2luYWwgb25lIGlmIGl0J3MgYXZhaWxhYmxlXHJcbiAgICAvLyAgICAgbmV3VmFsdWUgPSB0aGlzLm92ZXJyaWRlSG1zKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlLCBuZXdWYWx1ZSBhcyBDYW5keURhdGUpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmJ1aWxkVGltZU9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3ZlcnJpZGVIbXMoZnJvbTogQ2FuZHlEYXRlLCB0bzogQ2FuZHlEYXRlKTogQ2FuZHlEYXRlIHwgbnVsbCB7XHJcbiAgICBpZiAoIWZyb20gfHwgIXRvKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLnNldEhtcyhmcm9tLmdldEhvdXJzKCksIGZyb20uZ2V0TWludXRlcygpLCBmcm9tLmdldFNlY29uZHMoKSk7XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBpdCdzIGEgdmFsaWQgcmFuZ2UgdmFsdWVcclxuICBwcml2YXRlIGlzVmFsaWRSYW5nZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBib29sZWFuIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuICEhKHN0YXJ0ICYmIGVuZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5vcm1hbGl6ZVJhbmdlVmFsdWUodmFsdWU6IENhbmR5RGF0ZVtdKTogQ2FuZHlEYXRlW10ge1xyXG4gICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdmFsdWU7XHJcbiAgICBjb25zdCBuZXdTdGFydCA9IHN0YXJ0IHx8IG5ldyBDYW5keURhdGUoKTtcclxuICAgIGNvbnN0IG5ld0VuZCA9IGVuZCAmJiBlbmQuaXNTYW1lTW9udGgobmV3U3RhcnQpID8gZW5kLmFkZE1vbnRocygxKSA6IGVuZCB8fCBuZXdTdGFydC5hZGRNb250aHMoMSk7XHJcbiAgICByZXR1cm4gW25ld1N0YXJ0LCBuZXdFbmRdO1xyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBpc0VtcHR5UmFuZ2VWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBib29sZWFuIHtcclxuICAvLyAgIHJldHVybiAhdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmV2ZXJ5KCh2YWwpID0+ICF2YWwpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gUmVuZXcgYW5kIHNldCBhIHJhbmdlIHZhbHVlIHRvIHRyaWdnZXIgc3ViLWNvbXBvbmVudCdzIGNoYW5nZSBkZXRlY3Rpb25cclxuICBwcml2YXRlIHNldFJhbmdlVmFsdWUocGFydFR5cGU6IFJhbmdlUGFydFR5cGUsIHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMuc2VsZWN0ZWRWYWx1ZSBhcyBDYW5keURhdGVbXSkpO1xyXG4gICAgcmVmW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb25lUmFuZ2VEYXRlKHZhbHVlOiBDYW5keURhdGVbXSk6IENhbmR5RGF0ZVtdIHtcclxuICAgIHJldHVybiBbdmFsdWVbMF0gJiYgdmFsdWVbMF0uY2xvbmUoKSwgdmFsdWVbMV0gJiYgdmFsdWVbMV0uY2xvbmUoKV0gYXMgQ2FuZHlEYXRlW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxBcnJheShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzW2tleV0gfHwgIUFycmF5LmlzQXJyYXkodGhpc1trZXldKSkge1xyXG4gICAgICB0aGlzW2tleV0gPSBbXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJhbmdlUGFydFR5cGUgPSAnbGVmdCcgfCAncmlnaHQnO1xyXG4iXX0=