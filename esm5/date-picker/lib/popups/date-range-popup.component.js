/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3BvcHVwcy9kYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFZN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFdkQ7SUFBQTtRQUFBLGlCQStaQztRQW5Zb0Isb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUM5RCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ3JELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDbEQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVsRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQyxDQUFDLHdDQUF3Qzs7UUFDN0UsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDLENBQUMsMkNBQTJDOztRQUV0RyxjQUFTLEdBQVcsY0FBYyxDQUFDO1FBQ25DLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBY3hCLGdCQUFXLEdBQThCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUE0THZFLHNCQUFpQjs7OztRQUFHLFVBQUMsS0FBb0I7WUFDdkMsT0FBTyxLQUFJLENBQUMsWUFBWSxJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hF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QUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7b0NBQ0wsS0FBSzs0QkFFTCxLQUFLO3dCQUNMLEtBQUs7a0NBRUwsTUFBTTtpQ0FDTixNQUFNOzhCQUNOLE1BQU07OEJBQ04sTUFBTTsyQkFFTixNQUFNOzhCQUNOLE1BQU07O0lBNlhULDhCQUFDO0NBQUEsQUEvWkQsSUErWkM7U0F2WlksdUJBQXVCOzs7SUFDbEMsMENBQTBCOztJQUMxQiwyQ0FBMkI7O0lBRTNCLHlDQUF5Qzs7SUFDekMseUNBQXdCOztJQUN4Qiw4Q0FBd0M7O0lBQ3hDLCtDQUFzQzs7SUFDdEMsK0NBQXNDOztJQUN0Qyw0Q0FBNEI7O0lBQzVCLDJDQUFnRDs7SUFDaEQsOENBQWlEOztJQUNqRCx5Q0FBOEI7O0lBQzlCLDZDQUE4RDs7SUFDOUQsNkNBQTRCOztJQUM1QixvREFBbUM7O0lBRW5DLDRDQUE0Qzs7SUFDNUMsd0NBQWdDOztJQUVoQyxrREFBaUY7O0lBQ2pGLGlEQUF3RTs7SUFDeEUsOENBQXFFOztJQUNyRSw4Q0FBcUU7O0lBRXJFLDJDQUF1RDs7SUFDdkQsOENBQTBEOztJQUUxRCw0Q0FBbUM7O0lBQ25DLGlEQUFnQzs7SUFDaEMsOENBQThEOztJQUM5RCxvREFBK0I7O0lBQy9CLGdEQUEyQjs7SUFDM0IsNkNBQXdCOzs7OztJQVV4Qiw4Q0FBdUU7O0lBNEx2RSxvREFFRTs7SUFFRixrREFFRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHNvcnRSYW5nZVZhbHVlLCBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHtcclxuICBDb21wYXRpYmxlVmFsdWUsXHJcbiAgRGlzYWJsZWREYXRlRm4sXHJcbiAgRGlzYWJsZWRUaW1lQ29uZmlnLFxyXG4gIERpc2FibGVkVGltZUZuLFxyXG4gIERpc2FibGVkVGltZVBhcnRpYWwsXHJcbiAgUGFuZWxNb2RlLFxyXG4gIFByZXNldFJhbmdlcyxcclxuICBTdXBwb3J0VGltZU9wdGlvbnNcclxufSBmcm9tICcuLi8uLi9zdGFuZGFyZC10eXBlcyc7XHJcbmltcG9ydCB7IGdldFRpbWVDb25maWcsIGlzQWxsb3dlZERhdGUgfSBmcm9tICcuLi91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGF0ZS1yYW5nZS1wb3B1cCcsXHJcbiAgZXhwb3J0QXM6ICdkYXRlUmFuZ2VQb3B1cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgaXNSYW5nZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93V2VlazogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiBEaXNhYmxlZERhdGVGbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuOyAvLyBUaGlzIHdpbGwgbGVhZCB0byByZWJ1aWxkIHRpbWUgb3B0aW9uc1xyXG4gIEBJbnB1dCgpIHNob3dUb2RheTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93VGltZTogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbjtcclxuICBASW5wdXQoKSBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmFuZ2VzOiBQcmVzZXRSYW5nZXM7XHJcbiAgQElucHV0KCkgZGF0ZVJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBwb3B1cFN0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgZHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcGFuZWxNb2RlOiBQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXTtcclxuICBASW5wdXQoKSB2YWx1ZTogQ29tcGF0aWJsZVZhbHVlO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBhdGlibGVWYWx1ZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBhdGlibGVWYWx1ZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBhdGlibGVWYWx1ZT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlc3VsdE9rID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBFbWl0dGVkIHdoZW4gZG9uZSB3aXRoIGRhdGUgc2VsZWN0aW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlUGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBOb3RpZnkgb3V0c2lkZSB0byBjbG9zZSB0aGUgcGlja2VyIHBhbmVsXHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0aW1lT3B0aW9uczogU3VwcG9ydFRpbWVPcHRpb25zIHwgU3VwcG9ydFRpbWVPcHRpb25zW10gfCBudWxsO1xyXG4gIHZhbHVlRm9yUmFuZ2VTaG93OiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIHNlbGVjdGVkVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcbiAgaG92ZXJWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuXHJcbiAgZ2V0IGhhc1RpbWVQaWNrZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLnNob3dUaW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0Zvb3RlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNob3dUb2RheSB8fCB0aGlzLmhhc1RpbWVQaWNrZXIgfHwgISF0aGlzLmV4dHJhRm9vdGVyIHx8ICEhdGhpcy5yYW5nZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhcnRUeXBlTWFwOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0geyBsZWZ0OiAwLCByaWdodDogMSB9O1xyXG5cclxuICBbcHJvcGVydHk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBJbml0aWFsaXphdGlvbiBmb3IgcmFuZ2UgcHJvcGVydGllcyB0byBwcmV2ZW50IGVycm9ycyB3aGlsZSBsYXRlciBhc3NpZ25tZW50XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIFsncGxhY2Vob2xkZXInLCAncGFuZWxNb2RlJywgJ3NlbGVjdGVkVmFsdWUnLCAnaG92ZXJWYWx1ZSddLmZvckVhY2gocHJvcCA9PiB0aGlzLmluaXRpYWxBcnJheShwcm9wKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLnZhbHVlKSB7XHJcbiAgICAgICAgLy8gUmUtaW5pdGlhbGl6ZSBhbGwgcmVsYXRlZCB2YWx1ZXNcclxuICAgICAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHNob3dUaW1lIG9wdGlvbnNcclxuICAgIGlmIChjaGFuZ2VzLnNob3dUaW1lIHx8IGNoYW5nZXMuZGlzYWJsZWRUaW1lKSB7XHJcbiAgICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTaG93IHRpbWUgcGlja2VyIHdoZW4gYXNzaWduZWQgcGFuZWwgbW9kZSBhcyBcInRpbWVcIlxyXG4gICAgaWYgKGNoYW5nZXMucGFuZWxNb2RlICYmIHRoaXMuaGFzVGltZVBpY2tlcikge1xyXG4gICAgICB0aGlzLnNob3dUaW1lUGlja2VyID0gdGhpcy5wYW5lbE1vZGUgPT09ICd0aW1lJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2hvd1RpbWVQaWNrZXJDaGFuZ2Uoc2hvdzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5wYW5lbE1vZGUgPSBzaG93ID8gJ3RpbWUnIDogJ2RhdGUnO1xyXG4gICAgLy8gdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhbmVsTW9kZSk7XHJcbiAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KHNob3cgPyAndGltZScgOiAnZGF0ZScpO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja09rKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMucmVzdWx0T2suZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1RvZGF5KHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIC8vIGlmICh0aGlzLmlzUmFuZ2UpIHsgLy8gU2hvdyB0b2RheSBpcyBub3Qgc3VwcG9ydCBieSByYW5nZVxyXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ1wibnpTaG93VG9kYXlcIiBpcyBub3Qgc3VwcG9ydCBmb3IgXCJSYW5nZVBpY2tlclwiIScpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIGlmICghdGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsIGFzIGFueTsgLy8gQ2xlYXIgY3VycmVudCB2YWx1ZSB0byBub3Qgc3luYyB0aW1lIGJ5IG5leHQgc3RlcFxyXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbVNlbGVjdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsb3NlUGlja2VyUGFuZWwoKTtcclxuICB9XHJcblxyXG4gIG9uRGF5SG92ZXIodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSAmJiB0aGlzLnNlbGVjdGVkVmFsdWVbMF0gJiYgIXRoaXMuc2VsZWN0ZWRWYWx1ZVsxXSkge1xyXG4gICAgICAvLyBXaGVuIHJpZ2h0IHZhbHVlIGlzIHNlbGVjdGVkLCBkb24ndCBkbyBob3ZlclxyXG4gICAgICBjb25zdCBiYXNlID0gdGhpcy5zZWxlY3RlZFZhbHVlWzBdOyAvLyBVc2UgdGhlIGxlZnQgb2Ygc2VsZWN0ZWQgdmFsdWUgYXMgdGhlIGJhc2UgdG8gZGVjaWRlIGxhdGVyIGhvdmVyVmFsdWVcclxuICAgICAgaWYgKGJhc2UuaXNCZWZvcmVEYXkodmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gW2Jhc2UsIHZhbHVlXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhvdmVyVmFsdWUgPSBbdmFsdWUsIGJhc2VdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBhbmVsTW9kZUNoYW5nZShtb2RlOiBQYW5lbE1vZGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICAodGhpcy5wYW5lbE1vZGUgYXMgUGFuZWxNb2RlW10pW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldID0gbW9kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFuZWxNb2RlID0gbW9kZTtcclxuICAgIH1cclxuICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQodGhpcy5wYW5lbE1vZGUpO1xyXG4gIH1cclxuXHJcbiAgb25IZWFkZXJDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3dbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV0gPSB2YWx1ZTtcclxuICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZSh0aGlzLnZhbHVlRm9yUmFuZ2VTaG93KTsgLy8gU2hvdWxkIGFsd2F5cyB0YWtlIGNhcmUgb2Ygc3RhcnQvZW5kXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdFRpbWUodmFsdWU6IENhbmR5RGF0ZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdKTtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpO1xyXG4gICAgICBuZXdWYWx1ZVtpbmRleF0gPSB0aGlzLm92ZXJyaWRlSG1zKHZhbHVlLCBuZXdWYWx1ZVtpbmRleF0pITtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMub3ZlcnJpZGVIbXModmFsdWUsICh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSkgfHwgbmV3IENhbmR5RGF0ZSgpKSEpOyAvLyBJZiBub3Qgc2VsZWN0IGEgZGF0ZSBjdXJyZW50bHksIHVzZSB0b2RheVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVmFsdWVGcm9tSW5wdXQodmFsdWU6IHsgZGF0ZTogQ2FuZHlEYXRlOyBpc0VudGVyOiBib29sZWFuIH0sIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBkYXRlLCBpc0VudGVyIH0gPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgbGV0IG5ld1JhbmdlVmFsdWUgPSBwYXJ0VHlwZSA9PT0gJ2xlZnQnID8gW2RhdGUsIHRoaXMuc2VsZWN0ZWRWYWx1ZVsxXV0gOiBbdGhpcy5zZWxlY3RlZFZhbHVlWzBdLCBkYXRlXTtcclxuICAgICAgY29uc3QgaXNWYWxpZFJhbmdlID0gdGhpcy5pc1ZhbGlkUmFuZ2UobmV3UmFuZ2VWYWx1ZSk7XHJcbiAgICAgIGlmIChpc1ZhbGlkUmFuZ2UpIHtcclxuICAgICAgICBuZXdSYW5nZVZhbHVlID0gc29ydFJhbmdlVmFsdWUobmV3UmFuZ2VWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZShuZXdSYW5nZVZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyA/IFdoeSBDYW4gbm90IHVzZSBmb2xsb3cgY29kZVxyXG4gICAgICAvLyB0aGlzLnNlbGVjdGVkVmFsdWVbaW5kZXhdID0gZGF0ZTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5jbG9uZVJhbmdlRGF0ZShuZXdSYW5nZVZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZUZyb21JbnB1dCh0aGlzLmNsb25lUmFuZ2VEYXRlKG5ld1JhbmdlVmFsdWUpLCBpc0VudGVyICYmIGlzVmFsaWRSYW5nZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGRhdGUsIGlzRW50ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVmFsdWVGcm9tU2VsZWN0KHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZSBhcyBDYW5keURhdGVbXTsgLy8gTk9URTogdGhlIGxlZnQvcmlnaHQgbWF5YmUgbm90IHRoZSBzZXF1ZW5jZSBpdCBzZWxlY3QgYXQgdGhlIGRhdGUgcGFuZWxzXHJcblxyXG4gICAgICBpZiAoKCFsZWZ0ICYmICFyaWdodCkgfHwgKGxlZnQgJiYgcmlnaHQpKSB7XHJcbiAgICAgICAgLy8gSWYgdG90YWxseSBmdWxsIG9yIGVtcHR5LCBjbGVhbiB1cCAmJiByZS1hc3NpZ24gbGVmdCBmaXJzdFxyXG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IFt2YWx1ZV07XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhckNoYW5nZS5lbWl0KFt2YWx1ZS5jbG9uZSgpXSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobGVmdCAmJiAhcmlnaHQpIHtcclxuICAgICAgICAvLyBJZiBvbmUgb2YgdGhlbSBpcyBlbXB0eSwgYXNzaWduIHRoZSBvdGhlciBvbmUgYW5kIHNvcnQsIHRoZW4gc2V0IHRoZSBmaW5hbCB2YWx1ZXNcclxuICAgICAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpOyAvLyBDbGVhbiB1cFxyXG4gICAgICAgIHRoaXMuc2V0UmFuZ2VWYWx1ZSgncmlnaHQnLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gc29ydFJhbmdlVmFsdWUodGhpcy5zZWxlY3RlZFZhbHVlKTsgLy8gU29ydFxyXG4gICAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUodGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuY2xvbmVSYW5nZURhdGUodGhpcy5zZWxlY3RlZFZhbHVlKSk7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhckNoYW5nZS5lbWl0KHRoaXMuY2xvbmVSYW5nZURhdGUodGhpcy5zZWxlY3RlZFZhbHVlKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5zZWxlY3REYXRlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlUHJldk5leHQoZGlyZWN0aW9uOiAncHJldicgfCAnbmV4dCcsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93O1xyXG4gICAgICBjb25zdCBzaG93TWlkZGxlID0gIXN0YXJ0LmFkZE1vbnRocygxKS5pc1NhbWUoZW5kLCAnbW9udGgnKTsgLy8gT25lIG1vbnRoIGRpZmYgdGhlbiBkb24ndCBzaG93IG1pZGRsZSBwcmV2L25leHRcclxuICAgICAgaWYgKChwYXJ0VHlwZSA9PT0gJ2xlZnQnICYmIGRpcmVjdGlvbiA9PT0gJ25leHQnKSB8fCAocGFydFR5cGUgPT09ICdyaWdodCcgJiYgZGlyZWN0aW9uID09PSAncHJldicpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNob3dNaWRkbGU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFBhbmVsTW9kZShwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBQYW5lbE1vZGUge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wYW5lbE1vZGVbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV0gYXMgUGFuZWxNb2RlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGFuZWxNb2RlIGFzIFBhbmVsTW9kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdldCBzaW5nbGUgdmFsdWUgb3IgcGFydCB2YWx1ZSBvZiBhIHJhbmdlXHJcbiAgZ2V0VmFsdWUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdKVt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZhbHVlQnlTZWxlY3RvcihwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBDYW5keURhdGUge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCB2YWx1ZVNob3cgPSB0aGlzLnNob3dUaW1lUGlja2VyID8gdGhpcy52YWx1ZSA6IHRoaXMudmFsdWVGb3JSYW5nZVNob3c7IC8vIFVzZSB0aGUgcmVhbCB0aW1lIHZhbHVlIHRoYXQgd2l0aG91dCBkZWNvcmF0aW9ucyB3aGVuIHRpbWVwaWNrZXIgaXMgc2hvd24gdXBcclxuICAgICAgcmV0dXJuICh2YWx1ZVNob3cgYXMgQ2FuZHlEYXRlW10pW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFydFR5cGVNYXBbcGFydFR5cGUhXTtcclxuICB9XHJcblxyXG4gIGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1JhbmdlID8gdGhpcy5wbGFjZWhvbGRlclt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSA6ICh0aGlzLnBsYWNlaG9sZGVyIGFzIHN0cmluZyk7XHJcbiAgfVxyXG5cclxuICBoYXNTZWxlY3RlZFZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWYWx1ZSAmJiAhIXRoaXMuc2VsZWN0ZWRWYWx1ZVsxXSAmJiAhIXRoaXMuc2VsZWN0ZWRWYWx1ZVswXTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVkU3RhcnRUaW1lID0gKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKTogRGlzYWJsZWRUaW1lQ29uZmlnID0+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVGltZSAmJiB0aGlzLmRpc2FibGVkVGltZSh2YWx1ZSwgJ3N0YXJ0Jyk7XHJcbiAgfTtcclxuXHJcbiAgZGlzYWJsZWRFbmRUaW1lID0gKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKTogRGlzYWJsZWRUaW1lQ29uZmlnID0+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVGltZSAmJiB0aGlzLmRpc2FibGVkVGltZSh2YWx1ZSwgJ2VuZCcpO1xyXG4gIH07XHJcblxyXG4gIGlzQWxsb3dlZFNlbGVjdGVkVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlO1xyXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZVswXSAmJiBzZWxlY3RlZFZhbHVlWzFdKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlWzBdLCB0aGlzLmRpc2FibGVkRGF0ZSwgdGhpcy5kaXNhYmxlZFN0YXJ0VGltZSkgJiZcclxuICAgICAgICBpc0FsbG93ZWREYXRlKHNlbGVjdGVkVmFsdWVbMV0sIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkRW5kVGltZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHRpbWVQaWNrZXJEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5oYXNUaW1lUGlja2VyKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICF0aGlzLmhhc1NlbGVjdGVkVmFsdWUoKSB8fCAhIXRoaXMuaG92ZXJWYWx1ZS5sZW5ndGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBva0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmhhc1RpbWVQaWNrZXIpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICByZXR1cm4gIXRoaXMuaXNBbGxvd2VkU2VsZWN0ZWRWYWx1ZSgpIHx8ICF0aGlzLmhhc1NlbGVjdGVkVmFsdWUoKSB8fCAhIXRoaXMuaG92ZXJWYWx1ZS5sZW5ndGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSA/ICFpc0FsbG93ZWREYXRlKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlLCB0aGlzLmRpc2FibGVkRGF0ZSwgdGhpcy5kaXNhYmxlZFRpbWUpIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lT3B0aW9ucyhwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBudWxsIHtcclxuICAgIGlmICh0aGlzLnNob3dUaW1lICYmIHRoaXMudGltZU9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGltZU9wdGlvbnMgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMudGltZU9wdGlvbnNbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV0gOiB0aGlzLnRpbWVPcHRpb25zO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrUHJlc2V0UmFuZ2UodmFsOiBQcmVzZXRSYW5nZXNba2V5b2YgUHJlc2V0UmFuZ2VzXSk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nID8gdmFsKCkgOiB2YWw7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShbbmV3IENhbmR5RGF0ZSh2YWx1ZVswXSksIG5ldyBDYW5keURhdGUodmFsdWVbMV0pXSk7XHJcbiAgICAgIHRoaXMucmVzdWx0T2suZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QcmVzZXRSYW5nZU1vdXNlTGVhdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Ib3ZlclByZXNldFJhbmdlKHZhbDogUHJlc2V0UmFuZ2VzW2tleW9mIFByZXNldFJhbmdlc10pOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtuZXcgQ2FuZHlEYXRlKHZhbFswXSksIG5ldyBDYW5keURhdGUodmFsWzFdKV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRPYmplY3RLZXlzKG9iajogb2JqZWN0KTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIG9iaiA/IE9iamVjdC5rZXlzKG9iaikgOiBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvc2VQaWNrZXJQYW5lbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2VQaWNrZXIuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckhvdmVyVmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRUaW1lT3B0aW9ucygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgIGNvbnN0IHNob3dUaW1lID0gdHlwZW9mIHRoaXMuc2hvd1RpbWUgPT09ICdvYmplY3QnID8gdGhpcy5zaG93VGltZSA6IHt9O1xyXG4gICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgICAgIHRoaXMudGltZU9wdGlvbnMgPSBbXHJcbiAgICAgICAgICB0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHZhbHVlWzBdLCAnc3RhcnQnKSxcclxuICAgICAgICAgIHRoaXMub3ZlcnJpZGVUaW1lT3B0aW9ucyhzaG93VGltZSwgdmFsdWVbMV0sICdlbmQnKVxyXG4gICAgICAgIF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IHRoaXMub3ZlcnJpZGVUaW1lT3B0aW9ucyhzaG93VGltZSwgdGhpcy52YWx1ZSBhcyBDYW5keURhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRpbWVPcHRpb25zID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3ZlcnJpZGVUaW1lT3B0aW9ucyhcclxuICAgIG9yaWdpbjogU3VwcG9ydFRpbWVPcHRpb25zLFxyXG4gICAgdmFsdWU6IENhbmR5RGF0ZSxcclxuICAgIHBhcnRpYWw/OiBEaXNhYmxlZFRpbWVQYXJ0aWFsXHJcbiAgKTogU3VwcG9ydFRpbWVPcHRpb25zIHtcclxuICAgIGxldCBkaXNhYmxlZFRpbWVGbjtcclxuICAgIGlmIChwYXJ0aWFsKSB7XHJcbiAgICAgIGRpc2FibGVkVGltZUZuID0gcGFydGlhbCA9PT0gJ3N0YXJ0JyA/IHRoaXMuZGlzYWJsZWRTdGFydFRpbWUgOiB0aGlzLmRpc2FibGVkRW5kVGltZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc2FibGVkVGltZUZuID0gdGhpcy5kaXNhYmxlZFRpbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyAuLi5vcmlnaW4sIC4uLmdldFRpbWVDb25maWcodmFsdWUsIGRpc2FibGVkVGltZUZuKSB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZUZyb21JbnB1dCh2YWx1ZTogQ29tcGF0aWJsZVZhbHVlLCBlbWl0VmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAoZW1pdFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0IHZhbHVlIGFuZCB0cmlnZ2VyIGNoYW5nZSBldmVudFxyXG4gIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xyXG4gICAgLy8gVE9ETzogU3luYyBvcmlnaW5hbCB0aW1lIChOT1RFOiB0aGlzIHNob3VsZCB0YWtlIG1vcmUgY2FyZSBvZiBiZWNhdXNlIGl0IG1heSBkZXBlbmQgb24gbWFueSBjaGFuZ2Ugc291cmNlcylcclxuICAgIC8vIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgIC8vICAgLy8gVE9ETzogU3luYyB0aW1lXHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBpZiAodGhpcy52YWx1ZSkgeyAvLyBTeW5jIHRpbWUgZnJvbSB0aGUgb3JpZ2luYWwgb25lIGlmIGl0J3MgYXZhaWxhYmxlXHJcbiAgICAvLyAgICAgbmV3VmFsdWUgPSB0aGlzLm92ZXJyaWRlSG1zKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlLCBuZXdWYWx1ZSBhcyBDYW5keURhdGUpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmJ1aWxkVGltZU9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3ZlcnJpZGVIbXMoZnJvbTogQ2FuZHlEYXRlLCB0bzogQ2FuZHlEYXRlKTogQ2FuZHlEYXRlIHwgbnVsbCB7XHJcbiAgICBpZiAoIWZyb20gfHwgIXRvKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLnNldEhtcyhmcm9tLmdldEhvdXJzKCksIGZyb20uZ2V0TWludXRlcygpLCBmcm9tLmdldFNlY29uZHMoKSk7XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBpdCdzIGEgdmFsaWQgcmFuZ2UgdmFsdWVcclxuICBwcml2YXRlIGlzVmFsaWRSYW5nZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBib29sZWFuIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuICEhKHN0YXJ0ICYmIGVuZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5vcm1hbGl6ZVJhbmdlVmFsdWUodmFsdWU6IENhbmR5RGF0ZVtdKTogQ2FuZHlEYXRlW10ge1xyXG4gICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdmFsdWU7XHJcbiAgICBjb25zdCBuZXdTdGFydCA9IHN0YXJ0IHx8IG5ldyBDYW5keURhdGUoKTtcclxuICAgIGNvbnN0IG5ld0VuZCA9IGVuZCAmJiBlbmQuaXNTYW1lTW9udGgobmV3U3RhcnQpID8gZW5kLmFkZE1vbnRocygxKSA6IGVuZCB8fCBuZXdTdGFydC5hZGRNb250aHMoMSk7XHJcbiAgICByZXR1cm4gW25ld1N0YXJ0LCBuZXdFbmRdO1xyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBpc0VtcHR5UmFuZ2VWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBib29sZWFuIHtcclxuICAvLyAgIHJldHVybiAhdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmV2ZXJ5KCh2YWwpID0+ICF2YWwpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gUmVuZXcgYW5kIHNldCBhIHJhbmdlIHZhbHVlIHRvIHRyaWdnZXIgc3ViLWNvbXBvbmVudCdzIGNoYW5nZSBkZXRlY3Rpb25cclxuICBwcml2YXRlIHNldFJhbmdlVmFsdWUocGFydFR5cGU6IFJhbmdlUGFydFR5cGUsIHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMuc2VsZWN0ZWRWYWx1ZSBhcyBDYW5keURhdGVbXSkpO1xyXG4gICAgcmVmW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb25lUmFuZ2VEYXRlKHZhbHVlOiBDYW5keURhdGVbXSk6IENhbmR5RGF0ZVtdIHtcclxuICAgIHJldHVybiBbdmFsdWVbMF0gJiYgdmFsdWVbMF0uY2xvbmUoKSwgdmFsdWVbMV0gJiYgdmFsdWVbMV0uY2xvbmUoKV0gYXMgQ2FuZHlEYXRlW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxBcnJheShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzW2tleV0gfHwgIUFycmF5LmlzQXJyYXkodGhpc1trZXldKSkge1xyXG4gICAgICB0aGlzW2tleV0gPSBbXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJhbmdlUGFydFR5cGUgPSAnbGVmdCcgfCAncmlnaHQnO1xyXG4iXX0=