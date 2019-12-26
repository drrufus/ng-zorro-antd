/**
 * @fileoverview added by tsickle
 * Generated from: lib/popups/date-range-popup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var DateRangePopupComponent = /** @class */ (function () {
    function DateRangePopupComponent() {
        var _this = this;
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
        function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'start');
        });
        this.disabledEndTime = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'end');
        });
    }
    Object.defineProperty(DateRangePopupComponent.prototype, "hasTimePicker", {
        get: 
        // Range ONLY
        /**
         * @return {?}
         */
        function () {
            return !!this.showTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePopupComponent.prototype, "hasFooter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.ngOnInit = 
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Initialization for range properties to prevent errors while later assignment
        if (this.isRange) {
            ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach((/**
             * @param {?} prop
             * @return {?}
             */
            function (prop) { return _this.initialArray(prop); }));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateRangePopupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    /**
     * @param {?} show
     * @return {?}
     */
    DateRangePopupComponent.prototype.onShowTimePickerChange = /**
     * @param {?} show
     * @return {?}
     */
    function (show) {
        // this.panelMode = show ? 'time' : 'date';
        // this.panelModeChange.emit(this.panelMode);
        this.panelModeChange.emit(show ? 'time' : 'date');
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.onClickOk = /**
     * @return {?}
     */
    function () {
        this.setValue(this.value);
        this.resultOk.emit();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.onClickToday = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // if (this.isRange) { // Show today is not support by range
        //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
        // } else {
        if (!this.isRange) {
            // tslint:disable-next-line: no-any
            this.value = (/** @type {?} */ (null)); // Clear current value to not sync time by next step
            this.changeValueFromSelect(value);
        }
        this.closePickerPanel();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.onDayHover = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) {
            // When right value is selected, don't do hover
            /** @type {?} */
            var base = this.selectedValue[0];
            if (base.isBeforeDay(value)) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    };
    /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onPanelModeChange = /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    function (mode, partType) {
        if (this.isRange) {
            ((/** @type {?} */ (this.panelMode)))[this.getPartTypeIndex(partType)] = mode;
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onHeaderChange = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
            this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
        }
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onSelectTime = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            /** @type {?} */
            var newValue = this.cloneRangeDate((/** @type {?} */ (this.value)));
            /** @type {?} */
            var index = this.getPartTypeIndex(partType);
            newValue[index] = (/** @type {?} */ (this.overrideHms(value, newValue[index])));
            this.setValue(newValue);
        }
        else {
            this.setValue((/** @type {?} */ (this.overrideHms(value, ((/** @type {?} */ (this.value))) || new CandyDate())))); // If not select a date currently, use today
        }
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.changeValueFromInput = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        var date = value.date, isEnter = value.isEnter;
        if (this.isRange) {
            /** @type {?} */
            var newRangeValue = partType === 'left' ? [date, this.selectedValue[1]] : [this.selectedValue[0], date];
            /** @type {?} */
            var isValidRange = this.isValidRange(newRangeValue);
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.changeValueFromSelect = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            var _a = tslib_1.__read((/** @type {?} */ (this.selectedValue)), 2), left = _a[0], right = _a[1];
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
    };
    /**
     * @param {?} direction
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.enablePrevNext = /**
     * @param {?} direction
     * @param {?=} partType
     * @return {?}
     */
    function (direction, partType) {
        if (this.isRange) {
            var _a = tslib_1.__read(this.valueForRangeShow, 2), start = _a[0], end = _a[1];
            /** @type {?} */
            var showMiddle = !start.addMonths(1).isSame(end, 'month');
            if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                return showMiddle;
            }
            return true;
        }
        else {
            return true;
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPanelMode = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            return (/** @type {?} */ (this.panelMode[this.getPartTypeIndex(partType)]));
        }
        else {
            return (/** @type {?} */ (this.panelMode));
        }
    };
    // Get single value or part value of a range
    // Get single value or part value of a range
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getValue = 
    // Get single value or part value of a range
    /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            return ((/** @type {?} */ (this.value)))[this.getPartTypeIndex(partType)];
        }
        else {
            return (/** @type {?} */ (this.value));
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getValueBySelector = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            /** @type {?} */
            var valueShow = this.showTimePicker ? this.value : this.valueForRangeShow;
            return ((/** @type {?} */ (valueShow)))[this.getPartTypeIndex(partType)];
        }
        else {
            return (/** @type {?} */ (this.value));
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPartTypeIndex = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        return this.partTypeMap[(/** @type {?} */ (partType))];
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPlaceholder = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : ((/** @type {?} */ (this.placeholder)));
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.hasSelectedValue = /**
     * @return {?}
     */
    function () {
        return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.isAllowedSelectedValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedValue = this.selectedValue;
        if (selectedValue && selectedValue[0] && selectedValue[1]) {
            return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
        }
        return false;
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.timePickerDisabled = /**
     * @return {?}
     */
    function () {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.okDisabled = /**
     * @return {?}
     */
    function () {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return this.value ? !isAllowedDate((/** @type {?} */ (this.value)), this.disabledDate, this.disabledTime) : false;
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getTimeOptions = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.showTime && this.timeOptions) {
            return this.timeOptions instanceof Array ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
        }
        return null;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DateRangePopupComponent.prototype.onClickPresetRange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var value = typeof val === 'function' ? val() : val;
        if (value) {
            this.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
            this.resultOk.emit();
        }
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.onPresetRangeMouseLeave = /**
     * @return {?}
     */
    function () {
        this.clearHoverValue();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DateRangePopupComponent.prototype.onHoverPresetRange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (typeof val !== 'function') {
            this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    DateRangePopupComponent.prototype.getObjectKeys = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj ? Object.keys(obj) : [];
    };
    /**
     * @private
     * @return {?}
     */
    DateRangePopupComponent.prototype.closePickerPanel = /**
     * @private
     * @return {?}
     */
    function () {
        this.closePicker.emit();
    };
    /**
     * @private
     * @return {?}
     */
    DateRangePopupComponent.prototype.clearHoverValue = /**
     * @private
     * @return {?}
     */
    function () {
        this.hoverValue = [];
    };
    /**
     * @private
     * @return {?}
     */
    DateRangePopupComponent.prototype.buildTimeOptions = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.showTime) {
            /** @type {?} */
            var showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                /** @type {?} */
                var value = (/** @type {?} */ (this.value));
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
    };
    /**
     * @private
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    DateRangePopupComponent.prototype.overrideTimeOptions = /**
     * @private
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    function (origin, value, partial) {
        /** @type {?} */
        var disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return tslib_1.__assign({}, origin, getTimeConfig(value, disabledTimeFn));
    };
    /**
     * @private
     * @param {?} value
     * @param {?=} emitValue
     * @return {?}
     */
    DateRangePopupComponent.prototype.setValueFromInput = /**
     * @private
     * @param {?} value
     * @param {?=} emitValue
     * @return {?}
     */
    function (value, emitValue) {
        if (emitValue === void 0) { emitValue = true; }
        this.value = value;
        if (emitValue) {
            this.inputChange.emit(this.value);
        }
        this.buildTimeOptions();
    };
    // Set value and trigger change event
    // Set value and trigger change event
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.setValue = 
    // Set value and trigger change event
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
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
    };
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    DateRangePopupComponent.prototype.overrideHms = /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        if (!from || !to) {
            return null;
        }
        return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
    };
    // Check if it's a valid range value
    // Check if it's a valid range value
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.isValidRange = 
    // Check if it's a valid range value
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Array.isArray(value)) {
            var _a = tslib_1.__read(value, 2), start = _a[0], end = _a[1];
            return !!(start && end);
        }
        return false;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.normalizeRangeValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a = tslib_1.__read(value, 2), start = _a[0], end = _a[1];
        /** @type {?} */
        var newStart = start || new CandyDate();
        /** @type {?} */
        var newEnd = end && end.isSameMonth(newStart) ? end.addMonths(1) : end || newStart.addMonths(1);
        return [newStart, newEnd];
    };
    // private isEmptyRangeValue(value: CandyDate[]): boolean {
    //   return !value || !Array.isArray(value) || value.every((val) => !val);
    // }
    // Renew and set a range value to trigger sub-component's change detection
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
    DateRangePopupComponent.prototype.setRangeValue = 
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
    function (partType, value) {
        /** @type {?} */
        var ref = (this.selectedValue = this.cloneRangeDate((/** @type {?} */ (this.selectedValue))));
        ref[this.getPartTypeIndex(partType)] = value;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.cloneRangeDate = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (/** @type {?} */ ([value[0] && value[0].clone(), value[1] && value[1].clone()]));
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    DateRangePopupComponent.prototype.initialArray = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this[key] || !Array.isArray(this[key])) {
            this[key] = [];
        }
    };
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
    return DateRangePopupComponent;
}());
export { DateRangePopupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3BvcHVwcy9kYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFnQixNQUFNLG9CQUFvQixDQUFDO0FBWTdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXZEO0lBQUE7UUFBQSxpQkErWkM7UUFuWW9CLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFDOUQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNyRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ2xELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFbEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUMsQ0FBQyx3Q0FBd0M7O1FBQzdFLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQyxDQUFDLDJDQUEyQzs7UUFFdEcsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQUNuQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQWN4QixnQkFBVyxHQUE4QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBNEx2RSxzQkFBaUI7Ozs7UUFBRyxVQUFDLEtBQW9CO1lBQ3ZDLE9BQU8sS0FBSSxDQUFDLFlBQVksSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNo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QUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLO29DQUNMLEtBQUs7NEJBRUwsS0FBSzt3QkFDTCxLQUFLO2tDQUVMLE1BQU07aUNBQ04sTUFBTTs4QkFDTixNQUFNOzhCQUNOLE1BQU07MkJBRU4sTUFBTTs4QkFDTixNQUFNOztJQTZYVCw4QkFBQztDQUFBLEFBL1pELElBK1pDO1NBdlpZLHVCQUF1Qjs7O0lBQ2xDLDBDQUEwQjs7SUFDMUIsMkNBQTJCOztJQUUzQix5Q0FBeUM7O0lBQ3pDLHlDQUF3Qjs7SUFDeEIsOENBQXdDOztJQUN4QywrQ0FBc0M7O0lBQ3RDLCtDQUFzQzs7SUFDdEMsNENBQTRCOztJQUM1QiwyQ0FBZ0Q7O0lBQ2hELDhDQUFpRDs7SUFDakQseUNBQThCOztJQUM5Qiw2Q0FBOEQ7O0lBQzlELDZDQUE0Qjs7SUFDNUIsb0RBQW1DOztJQUVuQyw0Q0FBNEM7O0lBQzVDLHdDQUFnQzs7SUFFaEMsa0RBQWlGOztJQUNqRixpREFBd0U7O0lBQ3hFLDhDQUFxRTs7SUFDckUsOENBQXFFOztJQUVyRSwyQ0FBdUQ7O0lBQ3ZELDhDQUEwRDs7SUFFMUQsNENBQW1DOztJQUNuQyxpREFBZ0M7O0lBQ2hDLDhDQUE4RDs7SUFDOUQsb0RBQStCOztJQUMvQixnREFBMkI7O0lBQzNCLDZDQUF3Qjs7Ozs7SUFVeEIsOENBQXVFOztJQTRMdkUsb0RBRUU7O0lBRUYsa0RBRUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBzb3J0UmFuZ2VWYWx1ZSwgQ2FuZHlEYXRlLCBGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7XHJcbiAgQ29tcGF0aWJsZVZhbHVlLFxyXG4gIERpc2FibGVkRGF0ZUZuLFxyXG4gIERpc2FibGVkVGltZUNvbmZpZyxcclxuICBEaXNhYmxlZFRpbWVGbixcclxuICBEaXNhYmxlZFRpbWVQYXJ0aWFsLFxyXG4gIFBhbmVsTW9kZSxcclxuICBQcmVzZXRSYW5nZXMsXHJcbiAgU3VwcG9ydFRpbWVPcHRpb25zXHJcbn0gZnJvbSAnLi4vLi4vc3RhbmRhcmQtdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRUaW1lQ29uZmlnLCBpc0FsbG93ZWREYXRlIH0gZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RhdGUtcmFuZ2UtcG9wdXAnLFxyXG4gIGV4cG9ydEFzOiAnZGF0ZVJhbmdlUG9wdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGlzUmFuZ2U6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogRGlzYWJsZWREYXRlRm47XHJcbiAgQElucHV0KCkgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjsgLy8gVGhpcyB3aWxsIGxlYWQgdG8gcmVidWlsZCB0aW1lIG9wdGlvbnNcclxuICBASW5wdXQoKSBzaG93VG9kYXk6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1RpbWU6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJhbmdlczogUHJlc2V0UmFuZ2VzO1xyXG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgcG9wdXBTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHBhbmVsTW9kZTogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XHJcbiAgQElucHV0KCkgdmFsdWU6IENvbXBhdGlibGVWYWx1ZTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBhbmVsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlIHwgUGFuZWxNb2RlW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNhbGVuZGFyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlVmFsdWU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlVmFsdWU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGlucHV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlVmFsdWU+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSByZXN1bHRPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbG9zZVBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gTm90aWZ5IG91dHNpZGUgdG8gY2xvc2UgdGhlIHBpY2tlciBwYW5lbFxyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG4gIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgdGltZU9wdGlvbnM6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IFN1cHBvcnRUaW1lT3B0aW9uc1tdIHwgbnVsbDtcclxuICB2YWx1ZUZvclJhbmdlU2hvdzogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuICBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcblxyXG4gIGdldCBoYXNUaW1lUGlja2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5zaG93VGltZTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNGb290ZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93VG9kYXkgfHwgdGhpcy5oYXNUaW1lUGlja2VyIHx8ICEhdGhpcy5leHRyYUZvb3RlciB8fCAhIXRoaXMucmFuZ2VzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwYXJ0VHlwZU1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHsgbGVmdDogMCwgcmlnaHQ6IDEgfTtcclxuXHJcbiAgW3Byb3BlcnR5OiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSW5pdGlhbGl6YXRpb24gZm9yIHJhbmdlIHByb3BlcnRpZXMgdG8gcHJldmVudCBlcnJvcnMgd2hpbGUgbGF0ZXIgYXNzaWdubWVudFxyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBbJ3BsYWNlaG9sZGVyJywgJ3BhbmVsTW9kZScsICdzZWxlY3RlZFZhbHVlJywgJ2hvdmVyVmFsdWUnXS5mb3JFYWNoKHByb3AgPT4gdGhpcy5pbml0aWFsQXJyYXkocHJvcCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBpZiAoY2hhbmdlcy52YWx1ZSkge1xyXG4gICAgICAgIC8vIFJlLWluaXRpYWxpemUgYWxsIHJlbGF0ZWQgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVmFsdWUoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUodGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSBzaG93VGltZSBvcHRpb25zXHJcbiAgICBpZiAoY2hhbmdlcy5zaG93VGltZSB8fCBjaGFuZ2VzLmRpc2FibGVkVGltZSkge1xyXG4gICAgICBpZiAodGhpcy5zaG93VGltZSkge1xyXG4gICAgICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2hvdyB0aW1lIHBpY2tlciB3aGVuIGFzc2lnbmVkIHBhbmVsIG1vZGUgYXMgXCJ0aW1lXCJcclxuICAgIGlmIChjaGFuZ2VzLnBhbmVsTW9kZSAmJiB0aGlzLmhhc1RpbWVQaWNrZXIpIHtcclxuICAgICAgdGhpcy5zaG93VGltZVBpY2tlciA9IHRoaXMucGFuZWxNb2RlID09PSAndGltZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNob3dUaW1lUGlja2VyQ2hhbmdlKHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIHRoaXMucGFuZWxNb2RlID0gc2hvdyA/ICd0aW1lJyA6ICdkYXRlJztcclxuICAgIC8vIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQodGhpcy5wYW5lbE1vZGUpO1xyXG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdChzaG93ID8gJ3RpbWUnIDogJ2RhdGUnKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tPaygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLnJlc3VsdE9rLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tUb2RheSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICAvLyBpZiAodGhpcy5pc1JhbmdlKSB7IC8vIFNob3cgdG9kYXkgaXMgbm90IHN1cHBvcnQgYnkgcmFuZ2VcclxuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdcIm56U2hvd1RvZGF5XCIgaXMgbm90IHN1cHBvcnQgZm9yIFwiUmFuZ2VQaWNrZXJcIiEnKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICBpZiAoIXRoaXMuaXNSYW5nZSkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gICAgICB0aGlzLnZhbHVlID0gbnVsbCBhcyBhbnk7IC8vIENsZWFyIGN1cnJlbnQgdmFsdWUgdG8gbm90IHN5bmMgdGltZSBieSBuZXh0IHN0ZXBcclxuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21TZWxlY3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbG9zZVBpY2tlclBhbmVsKCk7XHJcbiAgfVxyXG5cclxuICBvbkRheUhvdmVyKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgdGhpcy5zZWxlY3RlZFZhbHVlWzBdICYmICF0aGlzLnNlbGVjdGVkVmFsdWVbMV0pIHtcclxuICAgICAgLy8gV2hlbiByaWdodCB2YWx1ZSBpcyBzZWxlY3RlZCwgZG9uJ3QgZG8gaG92ZXJcclxuICAgICAgY29uc3QgYmFzZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZVswXTsgLy8gVXNlIHRoZSBsZWZ0IG9mIHNlbGVjdGVkIHZhbHVlIGFzIHRoZSBiYXNlIHRvIGRlY2lkZSBsYXRlciBob3ZlclZhbHVlXHJcbiAgICAgIGlmIChiYXNlLmlzQmVmb3JlRGF5KHZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtiYXNlLCB2YWx1ZV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gW3ZhbHVlLCBiYXNlXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QYW5lbE1vZGVDaGFuZ2UobW9kZTogUGFuZWxNb2RlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgKHRoaXMucGFuZWxNb2RlIGFzIFBhbmVsTW9kZVtdKVt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSA9IG1vZGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBhbmVsTW9kZSA9IG1vZGU7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KHRoaXMucGFuZWxNb2RlKTtcclxuICB9XHJcblxyXG4gIG9uSGVhZGVyQ2hhbmdlKHZhbHVlOiBDYW5keURhdGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93W3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUodGhpcy52YWx1ZUZvclJhbmdlU2hvdyk7IC8vIFNob3VsZCBhbHdheXMgdGFrZSBjYXJlIG9mIHN0YXJ0L2VuZFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RUaW1lKHZhbHVlOiBDYW5keURhdGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuY2xvbmVSYW5nZURhdGUodGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXSk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKTtcclxuICAgICAgbmV3VmFsdWVbaW5kZXhdID0gdGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgbmV3VmFsdWVbaW5kZXhdKSE7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLm92ZXJyaWRlSG1zKHZhbHVlLCAodGhpcy52YWx1ZSBhcyBDYW5keURhdGUpIHx8IG5ldyBDYW5keURhdGUoKSkhKTsgLy8gSWYgbm90IHNlbGVjdCBhIGRhdGUgY3VycmVudGx5LCB1c2UgdG9kYXlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVZhbHVlRnJvbUlucHV0KHZhbHVlOiB7IGRhdGU6IENhbmR5RGF0ZTsgaXNFbnRlcjogYm9vbGVhbiB9LCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgZGF0ZSwgaXNFbnRlciB9ID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGxldCBuZXdSYW5nZVZhbHVlID0gcGFydFR5cGUgPT09ICdsZWZ0JyA/IFtkYXRlLCB0aGlzLnNlbGVjdGVkVmFsdWVbMV1dIDogW3RoaXMuc2VsZWN0ZWRWYWx1ZVswXSwgZGF0ZV07XHJcbiAgICAgIGNvbnN0IGlzVmFsaWRSYW5nZSA9IHRoaXMuaXNWYWxpZFJhbmdlKG5ld1JhbmdlVmFsdWUpO1xyXG4gICAgICBpZiAoaXNWYWxpZFJhbmdlKSB7XHJcbiAgICAgICAgbmV3UmFuZ2VWYWx1ZSA9IHNvcnRSYW5nZVZhbHVlKG5ld1JhbmdlVmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUobmV3UmFuZ2VWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPyBXaHkgQ2FuIG5vdCB1c2UgZm9sbG93IGNvZGVcclxuICAgICAgLy8gdGhpcy5zZWxlY3RlZFZhbHVlW2luZGV4XSA9IGRhdGU7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuY2xvbmVSYW5nZURhdGUobmV3UmFuZ2VWYWx1ZSk7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQodGhpcy5jbG9uZVJhbmdlRGF0ZShuZXdSYW5nZVZhbHVlKSwgaXNFbnRlciAmJiBpc1ZhbGlkUmFuZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZUZyb21JbnB1dChkYXRlLCBpc0VudGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVZhbHVlRnJvbVNlbGVjdCh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSB0aGlzLnNlbGVjdGVkVmFsdWUgYXMgQ2FuZHlEYXRlW107IC8vIE5PVEU6IHRoZSBsZWZ0L3JpZ2h0IG1heWJlIG5vdCB0aGUgc2VxdWVuY2UgaXQgc2VsZWN0IGF0IHRoZSBkYXRlIHBhbmVsc1xyXG5cclxuICAgICAgaWYgKCghbGVmdCAmJiAhcmlnaHQpIHx8IChsZWZ0ICYmIHJpZ2h0KSkge1xyXG4gICAgICAgIC8vIElmIHRvdGFsbHkgZnVsbCBvciBlbXB0eSwgY2xlYW4gdXAgJiYgcmUtYXNzaWduIGxlZnQgZmlyc3RcclxuICAgICAgICB0aGlzLmhvdmVyVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWUgPSBbdmFsdWVdO1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJDaGFuZ2UuZW1pdChbdmFsdWUuY2xvbmUoKV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGxlZnQgJiYgIXJpZ2h0KSB7XHJcbiAgICAgICAgLy8gSWYgb25lIG9mIHRoZW0gaXMgZW1wdHksIGFzc2lnbiB0aGUgb3RoZXIgb25lIGFuZCBzb3J0LCB0aGVuIHNldCB0aGUgZmluYWwgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVmFsdWUoKTsgLy8gQ2xlYW4gdXBcclxuICAgICAgICB0aGlzLnNldFJhbmdlVmFsdWUoJ3JpZ2h0JywgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHNvcnRSYW5nZVZhbHVlKHRoaXMuc2VsZWN0ZWRWYWx1ZSk7IC8vIFNvcnRcclxuICAgICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93ID0gdGhpcy5ub3JtYWxpemVSYW5nZVZhbHVlKHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMuc2VsZWN0ZWRWYWx1ZSkpO1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJDaGFuZ2UuZW1pdCh0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMuc2VsZWN0ZWRWYWx1ZSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVByZXZOZXh0KGRpcmVjdGlvbjogJ3ByZXYnIHwgJ25leHQnLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdGhpcy52YWx1ZUZvclJhbmdlU2hvdztcclxuICAgICAgY29uc3Qgc2hvd01pZGRsZSA9ICFzdGFydC5hZGRNb250aHMoMSkuaXNTYW1lKGVuZCwgJ21vbnRoJyk7IC8vIE9uZSBtb250aCBkaWZmIHRoZW4gZG9uJ3Qgc2hvdyBtaWRkbGUgcHJldi9uZXh0XHJcbiAgICAgIGlmICgocGFydFR5cGUgPT09ICdsZWZ0JyAmJiBkaXJlY3Rpb24gPT09ICduZXh0JykgfHwgKHBhcnRUeXBlID09PSAncmlnaHQnICYmIGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSkge1xyXG4gICAgICAgIHJldHVybiBzaG93TWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQYW5lbE1vZGUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogUGFuZWxNb2RlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGFuZWxNb2RlW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldIGFzIFBhbmVsTW9kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhbmVsTW9kZSBhcyBQYW5lbE1vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgc2luZ2xlIHZhbHVlIG9yIHBhcnQgdmFsdWUgb2YgYSByYW5nZVxyXG4gIGdldFZhbHVlKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IENhbmR5RGF0ZSB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXSlbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZUJ5U2VsZWN0b3IocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgdmFsdWVTaG93ID0gdGhpcy5zaG93VGltZVBpY2tlciA/IHRoaXMudmFsdWUgOiB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93OyAvLyBVc2UgdGhlIHJlYWwgdGltZSB2YWx1ZSB0aGF0IHdpdGhvdXQgZGVjb3JhdGlvbnMgd2hlbiB0aW1lcGlja2VyIGlzIHNob3duIHVwXHJcbiAgICAgIHJldHVybiAodmFsdWVTaG93IGFzIENhbmR5RGF0ZVtdKVt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFBhcnRUeXBlSW5kZXgocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhcnRUeXBlTWFwW3BhcnRUeXBlIV07XHJcbiAgfVxyXG5cclxuICBnZXRQbGFjZWhvbGRlcihwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNSYW5nZSA/IHRoaXMucGxhY2Vob2xkZXJbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV0gOiAodGhpcy5wbGFjZWhvbGRlciBhcyBzdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0ZWRWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmFsdWUgJiYgISF0aGlzLnNlbGVjdGVkVmFsdWVbMV0gJiYgISF0aGlzLnNlbGVjdGVkVmFsdWVbMF07XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlZFN0YXJ0VGltZSA9ICh2YWx1ZTogRGF0ZSB8IERhdGVbXSk6IERpc2FibGVkVGltZUNvbmZpZyA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZFRpbWUgJiYgdGhpcy5kaXNhYmxlZFRpbWUodmFsdWUsICdzdGFydCcpO1xyXG4gIH07XHJcblxyXG4gIGRpc2FibGVkRW5kVGltZSA9ICh2YWx1ZTogRGF0ZSB8IERhdGVbXSk6IERpc2FibGVkVGltZUNvbmZpZyA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZFRpbWUgJiYgdGhpcy5kaXNhYmxlZFRpbWUodmFsdWUsICdlbmQnKTtcclxuICB9O1xyXG5cclxuICBpc0FsbG93ZWRTZWxlY3RlZFZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcclxuICAgIGlmIChzZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkVmFsdWVbMF0gJiYgc2VsZWN0ZWRWYWx1ZVsxXSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVswXSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRTdGFydFRpbWUpICYmXHJcbiAgICAgICAgaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlWzFdLCB0aGlzLmRpc2FibGVkRGF0ZSwgdGhpcy5kaXNhYmxlZEVuZFRpbWUpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0aW1lUGlja2VyRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuaGFzVGltZVBpY2tlcikge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiAhdGhpcy5oYXNTZWxlY3RlZFZhbHVlKCkgfHwgISF0aGlzLmhvdmVyVmFsdWUubGVuZ3RoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb2tEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5oYXNUaW1lUGlja2VyKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICF0aGlzLmlzQWxsb3dlZFNlbGVjdGVkVmFsdWUoKSB8fCAhdGhpcy5oYXNTZWxlY3RlZFZhbHVlKCkgfHwgISF0aGlzLmhvdmVyVmFsdWUubGVuZ3RoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPyAhaXNBbGxvd2VkRGF0ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRUaW1lKSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGltZU9wdGlvbnMocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogU3VwcG9ydFRpbWVPcHRpb25zIHwgbnVsbCB7XHJcbiAgICBpZiAodGhpcy5zaG93VGltZSAmJiB0aGlzLnRpbWVPcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRpbWVPcHRpb25zIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLnRpbWVPcHRpb25zW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldIDogdGhpcy50aW1lT3B0aW9ucztcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1ByZXNldFJhbmdlKHZhbDogUHJlc2V0UmFuZ2VzW2tleW9mIFByZXNldFJhbmdlc10pOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHZhbCgpIDogdmFsO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUoW25ldyBDYW5keURhdGUodmFsdWVbMF0pLCBuZXcgQ2FuZHlEYXRlKHZhbHVlWzFdKV0pO1xyXG4gICAgICB0aGlzLnJlc3VsdE9rLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUHJlc2V0UmFuZ2VNb3VzZUxlYXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckhvdmVyVmFsdWUoKTtcclxuICB9XHJcblxyXG4gIG9uSG92ZXJQcmVzZXRSYW5nZSh2YWw6IFByZXNldFJhbmdlc1trZXlvZiBQcmVzZXRSYW5nZXNdKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLmhvdmVyVmFsdWUgPSBbbmV3IENhbmR5RGF0ZSh2YWxbMF0pLCBuZXcgQ2FuZHlEYXRlKHZhbFsxXSldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0T2JqZWN0S2V5cyhvYmo6IG9iamVjdCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopIDogW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb3NlUGlja2VyUGFuZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsb3NlUGlja2VyLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJIb3ZlclZhbHVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkVGltZU9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaG93VGltZSkge1xyXG4gICAgICBjb25zdCBzaG93VGltZSA9IHR5cGVvZiB0aGlzLnNob3dUaW1lID09PSAnb2JqZWN0JyA/IHRoaXMuc2hvd1RpbWUgOiB7fTtcclxuICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXTtcclxuICAgICAgICB0aGlzLnRpbWVPcHRpb25zID0gW1xyXG4gICAgICAgICAgdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB2YWx1ZVswXSwgJ3N0YXJ0JyksXHJcbiAgICAgICAgICB0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHZhbHVlWzFdLCAnZW5kJylcclxuICAgICAgICBdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGltZU9wdGlvbnMgPSB0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG92ZXJyaWRlVGltZU9wdGlvbnMoXHJcbiAgICBvcmlnaW46IFN1cHBvcnRUaW1lT3B0aW9ucyxcclxuICAgIHZhbHVlOiBDYW5keURhdGUsXHJcbiAgICBwYXJ0aWFsPzogRGlzYWJsZWRUaW1lUGFydGlhbFxyXG4gICk6IFN1cHBvcnRUaW1lT3B0aW9ucyB7XHJcbiAgICBsZXQgZGlzYWJsZWRUaW1lRm47XHJcbiAgICBpZiAocGFydGlhbCkge1xyXG4gICAgICBkaXNhYmxlZFRpbWVGbiA9IHBhcnRpYWwgPT09ICdzdGFydCcgPyB0aGlzLmRpc2FibGVkU3RhcnRUaW1lIDogdGhpcy5kaXNhYmxlZEVuZFRpbWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNhYmxlZFRpbWVGbiA9IHRoaXMuZGlzYWJsZWRUaW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgLi4ub3JpZ2luLCAuLi5nZXRUaW1lQ29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWVGbikgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmFsdWVGcm9tSW5wdXQodmFsdWU6IENvbXBhdGlibGVWYWx1ZSwgZW1pdFZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKGVtaXRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmJ1aWxkVGltZU9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIC8vIFNldCB2YWx1ZSBhbmQgdHJpZ2dlciBjaGFuZ2UgZXZlbnRcclxuICBwcml2YXRlIHNldFZhbHVlKHZhbHVlOiBDb21wYXRpYmxlVmFsdWUpOiB2b2lkIHtcclxuICAgIC8vIFRPRE86IFN5bmMgb3JpZ2luYWwgdGltZSAoTk9URTogdGhpcyBzaG91bGQgdGFrZSBtb3JlIGNhcmUgb2YgYmVjYXVzZSBpdCBtYXkgZGVwZW5kIG9uIG1hbnkgY2hhbmdlIHNvdXJjZXMpXHJcbiAgICAvLyBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAvLyAgIC8vIFRPRE86IFN5bmMgdGltZVxyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgaWYgKHRoaXMudmFsdWUpIHsgLy8gU3luYyB0aW1lIGZyb20gdGhlIG9yaWdpbmFsIG9uZSBpZiBpdCdzIGF2YWlsYWJsZVxyXG4gICAgLy8gICAgIG5ld1ZhbHVlID0gdGhpcy5vdmVycmlkZUhtcyh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSwgbmV3VmFsdWUgYXMgQ2FuZHlEYXRlKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG92ZXJyaWRlSG1zKGZyb206IENhbmR5RGF0ZSwgdG86IENhbmR5RGF0ZSk6IENhbmR5RGF0ZSB8IG51bGwge1xyXG4gICAgaWYgKCFmcm9tIHx8ICF0bykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiB0by5zZXRIbXMoZnJvbS5nZXRIb3VycygpLCBmcm9tLmdldE1pbnV0ZXMoKSwgZnJvbS5nZXRTZWNvbmRzKCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgaXQncyBhIHZhbGlkIHJhbmdlIHZhbHVlXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkUmFuZ2UodmFsdWU6IENhbmR5RGF0ZVtdKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdmFsdWU7XHJcbiAgICAgIHJldHVybiAhIShzdGFydCAmJiBlbmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3JtYWxpemVSYW5nZVZhbHVlKHZhbHVlOiBDYW5keURhdGVbXSk6IENhbmR5RGF0ZVtdIHtcclxuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHZhbHVlO1xyXG4gICAgY29uc3QgbmV3U3RhcnQgPSBzdGFydCB8fCBuZXcgQ2FuZHlEYXRlKCk7XHJcbiAgICBjb25zdCBuZXdFbmQgPSBlbmQgJiYgZW5kLmlzU2FtZU1vbnRoKG5ld1N0YXJ0KSA/IGVuZC5hZGRNb250aHMoMSkgOiBlbmQgfHwgbmV3U3RhcnQuYWRkTW9udGhzKDEpO1xyXG4gICAgcmV0dXJuIFtuZXdTdGFydCwgbmV3RW5kXTtcclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgaXNFbXB0eVJhbmdlVmFsdWUodmFsdWU6IENhbmR5RGF0ZVtdKTogYm9vbGVhbiB7XHJcbiAgLy8gICByZXR1cm4gIXZhbHVlIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5ldmVyeSgodmFsKSA9PiAhdmFsKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIFJlbmV3IGFuZCBzZXQgYSByYW5nZSB2YWx1ZSB0byB0cmlnZ2VyIHN1Yi1jb21wb25lbnQncyBjaGFuZ2UgZGV0ZWN0aW9uXHJcbiAgcHJpdmF0ZSBzZXRSYW5nZVZhbHVlKHBhcnRUeXBlOiBSYW5nZVBhcnRUeXBlLCB2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBjb25zdCByZWYgPSAodGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnNlbGVjdGVkVmFsdWUgYXMgQ2FuZHlEYXRlW10pKTtcclxuICAgIHJlZlt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9uZVJhbmdlRGF0ZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBDYW5keURhdGVbXSB7XHJcbiAgICByZXR1cm4gW3ZhbHVlWzBdICYmIHZhbHVlWzBdLmNsb25lKCksIHZhbHVlWzFdICYmIHZhbHVlWzFdLmNsb25lKCldIGFzIENhbmR5RGF0ZVtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsQXJyYXkoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghdGhpc1trZXldIHx8ICFBcnJheS5pc0FycmF5KHRoaXNba2V5XSkpIHtcclxuICAgICAgdGhpc1trZXldID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSYW5nZVBhcnRUeXBlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcclxuIl19