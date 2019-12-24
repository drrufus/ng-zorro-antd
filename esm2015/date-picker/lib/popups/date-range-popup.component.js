/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate, sortRangeValue } from 'ng-zorro-antd/core';
import { getTimeConfig, isAllowedDate } from '../util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../calendar/calendar-input.component";
import * as i3 from "./inner-popup.component";
import * as i4 from "../calendar/calendar-footer.component";
function DateRangePopupComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DateRangePopupComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2258 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2258);
} }
function DateRangePopupComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function () { return { partType: "left" }; };
const _c1 = function () { return { partType: "right" }; };
function DateRangePopupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DateRangePopupComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 11);
    i0.ɵɵelementStart(2, "div", 12);
    i0.ɵɵtext(3, "~");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DateRangePopupComponent_ng_container_5_ng_container_4_Template, 1, 0, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2266 = i0.ɵɵreference(17);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2266)("ngTemplateOutletContext", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r2266)("ngTemplateOutletContext", i0.ɵɵpureFunction0(5, _c1));
} }
function DateRangePopupComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DateRangePopupComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2262 = i0.ɵɵreference(13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2262);
} }
function DateRangePopupComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DateRangePopupComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2262 = i0.ɵɵreference(13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2262);
} }
function DateRangePopupComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r2277 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "calendar-input", 13);
    i0.ɵɵlistener("valueChange", function DateRangePopupComponent_ng_template_8_Template_calendar_input_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r2277); const partType_r2275 = ctx.partType; const ctx_r2276 = i0.ɵɵnextContext(); return ctx_r2276.changeValueFromInput($event, partType_r2275); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const partType_r2275 = ctx.partType;
    const ctx_r2259 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r2259.getValue(partType_r2275))("locale", ctx_r2259.locale)("disabledDate", ctx_r2259.disabledDate)("format", ctx_r2259.format)("autoFocus", partType_r2275 !== "right")("placeholder", ctx_r2259.getPlaceholder(partType_r2275));
} }
function DateRangePopupComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r2280 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "inner-popup", 14);
    i0.ɵɵlistener("panelModeChange", function DateRangePopupComponent_ng_template_10_Template_inner_popup_panelModeChange_0_listener($event) { i0.ɵɵrestoreView(_r2280); const partType_r2278 = ctx.partType; const ctx_r2279 = i0.ɵɵnextContext(); return ctx_r2279.onPanelModeChange($event, partType_r2278); })("dayHover", function DateRangePopupComponent_ng_template_10_Template_inner_popup_dayHover_0_listener($event) { i0.ɵɵrestoreView(_r2280); const ctx_r2281 = i0.ɵɵnextContext(); return ctx_r2281.onDayHover($event); })("selectDate", function DateRangePopupComponent_ng_template_10_Template_inner_popup_selectDate_0_listener($event) { i0.ɵɵrestoreView(_r2280); const ctx_r2282 = i0.ɵɵnextContext(); return ctx_r2282.changeValueFromSelect($event); })("selectTime", function DateRangePopupComponent_ng_template_10_Template_inner_popup_selectTime_0_listener($event) { i0.ɵɵrestoreView(_r2280); const partType_r2278 = ctx.partType; const ctx_r2283 = i0.ɵɵnextContext(); return ctx_r2283.onSelectTime($event, partType_r2278); })("headerChange", function DateRangePopupComponent_ng_template_10_Template_inner_popup_headerChange_0_listener($event) { i0.ɵɵrestoreView(_r2280); const partType_r2278 = ctx.partType; const ctx_r2284 = i0.ɵɵnextContext(); return ctx_r2284.onHeaderChange($event, partType_r2278); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const partType_r2278 = ctx.partType;
    const ctx_r2261 = i0.ɵɵnextContext();
    i0.ɵɵproperty("showWeek", ctx_r2261.showWeek)("locale", ctx_r2261.locale)("showTimePicker", ctx_r2261.hasTimePicker && ctx_r2261.showTimePicker)("timeOptions", ctx_r2261.getTimeOptions(partType_r2278))("panelMode", ctx_r2261.getPanelMode(partType_r2278))("value", ctx_r2261.getValueBySelector(partType_r2278))("disabledDate", ctx_r2261.disabledDate)("dateRender", ctx_r2261.dateRender)("selectedValue", ctx_r2261.selectedValue)("hoverValue", ctx_r2261.hoverValue)("enablePrev", ctx_r2261.enablePrevNext("prev", partType_r2278))("enableNext", ctx_r2261.enablePrevNext("next", partType_r2278));
} }
function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template(rf, ctx) { if (rf & 1) {
    const _r2287 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "calendar-footer", 16);
    i0.ɵɵlistener("showTimePickerChange", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_showTimePickerChange_0_listener($event) { i0.ɵɵrestoreView(_r2287); const ctx_r2286 = i0.ɵɵnextContext(2); return ctx_r2286.showTimePicker = $event; })("showTimePickerChange", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_showTimePickerChange_0_listener($event) { i0.ɵɵrestoreView(_r2287); const ctx_r2288 = i0.ɵɵnextContext(2); return ctx_r2288.onShowTimePickerChange($event); })("clickOk", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_clickOk_0_listener($event) { i0.ɵɵrestoreView(_r2287); const ctx_r2289 = i0.ɵɵnextContext(2); return ctx_r2289.onClickOk(); })("clickToday", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_clickToday_0_listener($event) { i0.ɵɵrestoreView(_r2287); const ctx_r2290 = i0.ɵɵnextContext(2); return ctx_r2290.onClickToday($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2285 = i0.ɵɵnextContext(2);
    const _r2268 = i0.ɵɵreference(19);
    i0.ɵɵproperty("locale", ctx_r2285.locale)("showToday", ctx_r2285.showToday)("hasTimePicker", ctx_r2285.hasTimePicker)("timePickerDisabled", ctx_r2285.timePickerDisabled())("okDisabled", ctx_r2285.okDisabled())("extraFooter", ctx_r2285.extraFooter)("rangeQuickSelector", ctx_r2285.ranges ? _r2268 : null)("showTimePicker", ctx_r2285.showTimePicker);
} }
function DateRangePopupComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_12_calendar_footer_0_Template, 1, 8, "calendar-footer", 15);
} if (rf & 2) {
    const ctx_r2263 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2263.hasFooter);
} }
function DateRangePopupComponent_ng_template_14_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_14_ng_container_0_Template, 1, 0, "ng-container", 10);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2260 = i0.ɵɵreference(11);
    i0.ɵɵproperty("ngTemplateOutlet", _r2260);
} }
function DateRangePopupComponent_ng_template_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_template_16_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0) { return { partType: a0 }; };
function DateRangePopupComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, DateRangePopupComponent_ng_template_16_ng_container_1_Template, 1, 0, "ng-container", 11);
    i0.ɵɵelementStart(2, "div", 17);
    i0.ɵɵtemplate(3, DateRangePopupComponent_ng_template_16_ng_container_3_Template, 1, 0, "ng-container", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const partType_r2292 = ctx.partType;
    const ctx_r2267 = i0.ɵɵnextContext();
    const _r2258 = i0.ɵɵreference(9);
    const _r2260 = i0.ɵɵreference(11);
    i0.ɵɵclassMapInterpolate3("", ctx_r2267.prefixCls, "-range-part ", ctx_r2267.prefixCls, "-range-", partType_r2292, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2258)("ngTemplateOutletContext", i0.ɵɵpureFunction1(9, _c2, partType_r2292));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2260)("ngTemplateOutletContext", i0.ɵɵpureFunction1(11, _c2, partType_r2292));
} }
function DateRangePopupComponent_ng_template_18_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r2298 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵlistener("click", function DateRangePopupComponent_ng_template_18_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2298); const name_r2296 = ctx.$implicit; const ctx_r2297 = i0.ɵɵnextContext(2); return ctx_r2297.onClickPresetRange(ctx_r2297.ranges[name_r2296]); })("mouseenter", function DateRangePopupComponent_ng_template_18_a_0_Template_a_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r2298); const name_r2296 = ctx.$implicit; const ctx_r2299 = i0.ɵɵnextContext(2); return ctx_r2299.onHoverPresetRange(ctx_r2299.ranges[name_r2296]); })("mouseleave", function DateRangePopupComponent_ng_template_18_a_0_Template_a_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r2298); const ctx_r2300 = i0.ɵɵnextContext(2); return ctx_r2300.onPresetRangeMouseLeave(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const name_r2296 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(name_r2296);
} }
function DateRangePopupComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_18_a_0_Template, 2, 1, "a", 18);
} if (rf & 2) {
    const ctx_r2269 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r2269.getObjectKeys(ctx_r2269.ranges));
} }
export class DateRangePopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        this.calendarChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.resultOk = new EventEmitter(); // Emitted when done with date selecting
        this.closePicker = new EventEmitter(); // Notify outside to close the picker panel
        this.prefixCls = 'ant-calendar';
        this.showTimePicker = false;
        this.partTypeMap = { left: 0, right: 1 };
        this.disabledStartTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'start');
        };
        this.disabledEndTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'end');
        };
    }
    get hasTimePicker() {
        return !!this.showTime;
    }
    get hasFooter() {
        return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
    }
    ngOnInit() {
        // Initialization for range properties to prevent errors while later assignment
        if (this.isRange) {
            ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach(prop => this.initialArray(prop));
        }
    }
    ngOnChanges(changes) {
        if (this.isRange) {
            if (changes.value) {
                // Re-initialize all related values
                this.clearHoverValue();
                this.selectedValue = this.value;
                this.valueForRangeShow = this.normalizeRangeValue(this.value);
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
    onShowTimePickerChange(show) {
        // this.panelMode = show ? 'time' : 'date';
        // this.panelModeChange.emit(this.panelMode);
        this.panelModeChange.emit(show ? 'time' : 'date');
    }
    onClickOk() {
        this.setValue(this.value);
        this.resultOk.emit();
    }
    onClickToday(value) {
        // if (this.isRange) { // Show today is not support by range
        //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
        // } else {
        if (!this.isRange) {
            // tslint:disable-next-line: no-any
            this.value = null; // Clear current value to not sync time by next step
            this.changeValueFromSelect(value);
        }
        this.closePickerPanel();
    }
    onDayHover(value) {
        if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) {
            // When right value is selected, don't do hover
            const base = this.selectedValue[0]; // Use the left of selected value as the base to decide later hoverValue
            if (base.isBeforeDay(value)) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    }
    onPanelModeChange(mode, partType) {
        if (this.isRange) {
            this.panelMode[this.getPartTypeIndex(partType)] = mode;
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    }
    onHeaderChange(value, partType) {
        if (this.isRange) {
            this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
            this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
        }
    }
    onSelectTime(value, partType) {
        if (this.isRange) {
            const newValue = this.cloneRangeDate(this.value);
            const index = this.getPartTypeIndex(partType);
            newValue[index] = this.overrideHms(value, newValue[index]);
            this.setValue(newValue);
        }
        else {
            this.setValue(this.overrideHms(value, this.value || new CandyDate())); // If not select a date currently, use today
        }
    }
    changeValueFromInput(value, partType) {
        const { date, isEnter } = value;
        if (this.isRange) {
            let newRangeValue = partType === 'left' ? [date, this.selectedValue[1]] : [this.selectedValue[0], date];
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
    changeValueFromSelect(value) {
        if (this.isRange) {
            const [left, right] = this.selectedValue; // NOTE: the left/right maybe not the sequence it select at the date panels
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
    enablePrevNext(direction, partType) {
        if (this.isRange) {
            const [start, end] = this.valueForRangeShow;
            const showMiddle = !start.addMonths(1).isSame(end, 'month'); // One month diff then don't show middle prev/next
            if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                return showMiddle;
            }
            return true;
        }
        else {
            return true;
        }
    }
    getPanelMode(partType) {
        if (this.isRange) {
            return this.panelMode[this.getPartTypeIndex(partType)];
        }
        else {
            return this.panelMode;
        }
    }
    // Get single value or part value of a range
    getValue(partType) {
        if (this.isRange) {
            return this.value[this.getPartTypeIndex(partType)];
        }
        else {
            return this.value;
        }
    }
    getValueBySelector(partType) {
        if (this.isRange) {
            const valueShow = this.showTimePicker ? this.value : this.valueForRangeShow; // Use the real time value that without decorations when timepicker is shown up
            return valueShow[this.getPartTypeIndex(partType)];
        }
        else {
            return this.value;
        }
    }
    getPartTypeIndex(partType) {
        return this.partTypeMap[partType];
    }
    getPlaceholder(partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : this.placeholder;
    }
    hasSelectedValue() {
        return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
    }
    isAllowedSelectedValue() {
        const selectedValue = this.selectedValue;
        if (selectedValue && selectedValue[0] && selectedValue[1]) {
            return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
        }
        return false;
    }
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
    okDisabled() {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return this.value ? !isAllowedDate(this.value, this.disabledDate, this.disabledTime) : false;
        }
    }
    getTimeOptions(partType) {
        if (this.showTime && this.timeOptions) {
            return this.timeOptions instanceof Array ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
        }
        return null;
    }
    onClickPresetRange(val) {
        const value = typeof val === 'function' ? val() : val;
        if (value) {
            this.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
            this.resultOk.emit();
        }
    }
    onPresetRangeMouseLeave() {
        this.clearHoverValue();
    }
    onHoverPresetRange(val) {
        if (typeof val !== 'function') {
            this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
        }
    }
    getObjectKeys(obj) {
        return obj ? Object.keys(obj) : [];
    }
    closePickerPanel() {
        this.closePicker.emit();
    }
    clearHoverValue() {
        this.hoverValue = [];
    }
    buildTimeOptions() {
        if (this.showTime) {
            const showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                const value = this.value;
                this.timeOptions = [this.overrideTimeOptions(showTime, value[0], 'start'), this.overrideTimeOptions(showTime, value[1], 'end')];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, this.value);
            }
        }
        else {
            this.timeOptions = null;
        }
    }
    overrideTimeOptions(origin, value, partial) {
        let disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return Object.assign(Object.assign({}, origin), getTimeConfig(value, disabledTimeFn));
    }
    setValueFromInput(value, emitValue = true) {
        this.value = value;
        if (emitValue) {
            this.inputChange.emit(this.value);
        }
        this.buildTimeOptions();
    }
    // Set value and trigger change event
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
    overrideHms(from, to) {
        if (!from || !to) {
            return null;
        }
        return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
    }
    // Check if it's a valid range value
    isValidRange(value) {
        if (Array.isArray(value)) {
            const [start, end] = value;
            return !!(start && end);
        }
        return false;
    }
    normalizeRangeValue(value) {
        const [start, end] = value;
        const newStart = start || new CandyDate();
        const newEnd = end && end.isSameMonth(newStart) ? end.addMonths(1) : end || newStart.addMonths(1);
        return [newStart, newEnd];
    }
    // private isEmptyRangeValue(value: CandyDate[]): boolean {
    //   return !value || !Array.isArray(value) || value.every((val) => !val);
    // }
    // Renew and set a range value to trigger sub-component's change detection
    setRangeValue(partType, value) {
        const ref = (this.selectedValue = this.cloneRangeDate(this.selectedValue));
        ref[this.getPartTypeIndex(partType)] = value;
    }
    cloneRangeDate(value) {
        return [value[0] && value[0].clone(), value[1] && value[1].clone()];
    }
    initialArray(key) {
        if (!this[key] || !Array.isArray(this[key])) {
            this[key] = [];
        }
    }
}
/** @nocollapse */ DateRangePopupComponent.ɵfac = function DateRangePopupComponent_Factory(t) { return new (t || DateRangePopupComponent)(); };
/** @nocollapse */ DateRangePopupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePopupComponent, selectors: [["date-range-popup"]], inputs: { isRange: "isRange", showWeek: "showWeek", locale: "locale", format: "format", placeholder: "placeholder", disabledDate: "disabledDate", disabledTime: "disabledTime", showToday: "showToday", showTime: "showTime", extraFooter: "extraFooter", ranges: "ranges", dateRender: "dateRender", popupStyle: "popupStyle", dropdownClassName: "dropdownClassName", panelMode: "panelMode", value: "value" }, outputs: { panelModeChange: "panelModeChange", calendarChange: "calendarChange", valueChange: "valueChange", inputChange: "inputChange", resultOk: "resultOk", closePicker: "closePicker" }, exportAs: ["dateRangePopup"], features: [i0.ɵɵNgOnChangesFeature()], decls: 20, vars: 23, consts: [[3, "ngStyle"], ["tabindex", "0"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["tplCalendarInput", ""], ["tplInnerPopup", ""], ["tplFooter", ""], ["tplSinglePart", ""], ["tplRangePart", ""], ["tplRangeQuickSelector", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-calendar-range-middle"], [3, "value", "locale", "disabledDate", "format", "autoFocus", "placeholder", "valueChange"], [3, "showWeek", "locale", "showTimePicker", "timeOptions", "panelMode", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue", "enablePrev", "enableNext", "panelModeChange", "dayHover", "selectDate", "selectTime", "headerChange"], [3, "locale", "showToday", "hasTimePicker", "timePickerDisabled", "okDisabled", "extraFooter", "rangeQuickSelector", "showTimePicker", "showTimePickerChange", "clickOk", "clickToday", 4, "ngIf"], [3, "locale", "showToday", "hasTimePicker", "timePickerDisabled", "okDisabled", "extraFooter", "rangeQuickSelector", "showTimePicker", "showTimePickerChange", "clickOk", "clickToday"], [2, "outline", "none"], [3, "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"]], template: function DateRangePopupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵtemplate(3, DateRangePopupComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵtemplate(5, DateRangePopupComponent_ng_container_5_Template, 5, 6, "ng-container", 3);
        i0.ɵɵtemplate(6, DateRangePopupComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, DateRangePopupComponent_ng_container_7_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, DateRangePopupComponent_ng_template_8_Template, 1, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(10, DateRangePopupComponent_ng_template_10_Template, 1, 12, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(12, DateRangePopupComponent_ng_template_12_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(14, DateRangePopupComponent_ng_template_14_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(16, DateRangePopupComponent_ng_template_16_Template, 4, 13, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(18, DateRangePopupComponent_ng_template_18_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2264 = i0.ɵɵreference(15);
        i0.ɵɵclassMapInterpolate3("", ctx.prefixCls, "-picker-container ", ctx.dropdownClassName, " ", ctx.prefixCls, "-picker-container-placement-bottomLeft");
        i0.ɵɵproperty("ngStyle", ctx.popupStyle);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate4("", ctx.prefixCls, " ", ctx.showWeek ? ctx.prefixCls + "-week-number" : "", " ", ctx.hasTimePicker ? ctx.prefixCls + "-time" : "", " ", ctx.isRange ? ctx.prefixCls + "-range" : "", "");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-panel");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isRange);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-date-panel");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isRange)("ngIfElse", _r2264);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isRange);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isRange);
    } }, directives: [i1.NgStyle, i1.NgIf, i1.NgTemplateOutlet, i2.CalendarInputComponent, i3.InnerPopupComponent, i4.CalendarFooterComponent, i1.NgForOf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateRangePopupComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-range-popup',
                exportAs: 'dateRangePopup',
                templateUrl: 'date-range-popup.component.html'
            }]
    }], null, { isRange: [{
            type: Input
        }], showWeek: [{
            type: Input
        }], locale: [{
            type: Input
        }], format: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], disabledTime: [{
            type: Input
        }], showToday: [{
            type: Input
        }], showTime: [{
            type: Input
        }], extraFooter: [{
            type: Input
        }], ranges: [{
            type: Input
        }], dateRender: [{
            type: Input
        }], popupStyle: [{
            type: Input
        }], dropdownClassName: [{
            type: Input
        }], panelMode: [{
            type: Input
        }], value: [{
            type: Input
        }], panelModeChange: [{
            type: Output
        }], calendarChange: [{
            type: Output
        }], valueChange: [{
            type: Output
        }], inputChange: [{
            type: Output
        }], resultOk: [{
            type: Output
        }], closePicker: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3BvcHVwcy9kYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC50cyIsImxpYi9wb3B1cHMvZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7SUNsQi9DLHdCQUFrRTs7O0lBRnBFLDZCQUNFO0lBQ0EsMEdBQW1EO0lBQ3JELDBCQUFlOzs7O0lBREMsZUFBb0M7SUFBcEMseUNBQW9DOzs7SUFLaEQsd0JBRWdCOzs7SUFFaEIsd0JBRWdCOzs7OztJQVJsQiw2QkFDRTtJQUNBLDBHQUVDO0lBQ0QsK0JBQXVDO0lBQUEsaUJBQUM7SUFBQSxpQkFBTTtJQUM5QywwR0FFQztJQUNILDBCQUFlOzs7O0lBTlgsZUFBK0Q7SUFBL0QseUNBQStELHVEQUFBO0lBSS9ELGVBQWdFO0lBQWhFLHlDQUFnRSx1REFBQTs7O0lBTWxFLHdCQUEyRDs7O0lBRjdELDZCQUNFO0lBQ0EsMEdBQTRDO0lBQzlDLDBCQUFlOzs7O0lBREMsZUFBNkI7SUFBN0IseUNBQTZCOzs7SUFLN0Msd0JBQTJEOzs7SUFGN0QsNkJBQ0U7SUFDQSwwR0FBNEM7SUFDOUMsMEJBQWU7Ozs7SUFEQyxlQUE2QjtJQUE3Qix5Q0FBNkI7Ozs7SUFPakQsMENBUWtCO0lBTmhCLDJTQUFzRDtJQU12RCxpQkFB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QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSxpQ0FBaUM7YUFDL0M7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUVOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCwgc29ydFJhbmdlVmFsdWUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7XHJcbiAgQ29tcGF0aWJsZVZhbHVlLFxyXG4gIERpc2FibGVkRGF0ZUZuLFxyXG4gIERpc2FibGVkVGltZUNvbmZpZyxcclxuICBEaXNhYmxlZFRpbWVGbixcclxuICBEaXNhYmxlZFRpbWVQYXJ0aWFsLFxyXG4gIFBhbmVsTW9kZSxcclxuICBQcmVzZXRSYW5nZXMsXHJcbiAgU3VwcG9ydFRpbWVPcHRpb25zXHJcbn0gZnJvbSAnLi4vLi4vc3RhbmRhcmQtdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRUaW1lQ29uZmlnLCBpc0FsbG93ZWREYXRlIH0gZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RhdGUtcmFuZ2UtcG9wdXAnLFxyXG4gIGV4cG9ydEFzOiAnZGF0ZVJhbmdlUG9wdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGlzUmFuZ2U6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogRGlzYWJsZWREYXRlRm47XHJcbiAgQElucHV0KCkgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjsgLy8gVGhpcyB3aWxsIGxlYWQgdG8gcmVidWlsZCB0aW1lIG9wdGlvbnNcclxuICBASW5wdXQoKSBzaG93VG9kYXk6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1RpbWU6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJhbmdlczogUHJlc2V0UmFuZ2VzO1xyXG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgcG9wdXBTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHBhbmVsTW9kZTogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XHJcbiAgQElucHV0KCkgdmFsdWU6IENvbXBhdGlibGVWYWx1ZTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBhbmVsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlIHwgUGFuZWxNb2RlW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNhbGVuZGFyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlVmFsdWU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlVmFsdWU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGlucHV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlVmFsdWU+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSByZXN1bHRPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbG9zZVBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gTm90aWZ5IG91dHNpZGUgdG8gY2xvc2UgdGhlIHBpY2tlciBwYW5lbFxyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG4gIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgdGltZU9wdGlvbnM6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IFN1cHBvcnRUaW1lT3B0aW9uc1tdIHwgbnVsbDtcclxuICB2YWx1ZUZvclJhbmdlU2hvdzogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuICBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcblxyXG4gIGdldCBoYXNUaW1lUGlja2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5zaG93VGltZTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNGb290ZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93VG9kYXkgfHwgdGhpcy5oYXNUaW1lUGlja2VyIHx8ICEhdGhpcy5leHRyYUZvb3RlciB8fCAhIXRoaXMucmFuZ2VzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwYXJ0VHlwZU1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHsgbGVmdDogMCwgcmlnaHQ6IDEgfTtcclxuXHJcbiAgW3Byb3BlcnR5OiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSW5pdGlhbGl6YXRpb24gZm9yIHJhbmdlIHByb3BlcnRpZXMgdG8gcHJldmVudCBlcnJvcnMgd2hpbGUgbGF0ZXIgYXNzaWdubWVudFxyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBbJ3BsYWNlaG9sZGVyJywgJ3BhbmVsTW9kZScsICdzZWxlY3RlZFZhbHVlJywgJ2hvdmVyVmFsdWUnXS5mb3JFYWNoKHByb3AgPT4gdGhpcy5pbml0aWFsQXJyYXkocHJvcCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBpZiAoY2hhbmdlcy52YWx1ZSkge1xyXG4gICAgICAgIC8vIFJlLWluaXRpYWxpemUgYWxsIHJlbGF0ZWQgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVmFsdWUoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUodGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSBzaG93VGltZSBvcHRpb25zXHJcbiAgICBpZiAoY2hhbmdlcy5zaG93VGltZSB8fCBjaGFuZ2VzLmRpc2FibGVkVGltZSkge1xyXG4gICAgICBpZiAodGhpcy5zaG93VGltZSkge1xyXG4gICAgICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2hvdyB0aW1lIHBpY2tlciB3aGVuIGFzc2lnbmVkIHBhbmVsIG1vZGUgYXMgXCJ0aW1lXCJcclxuICAgIGlmIChjaGFuZ2VzLnBhbmVsTW9kZSAmJiB0aGlzLmhhc1RpbWVQaWNrZXIpIHtcclxuICAgICAgdGhpcy5zaG93VGltZVBpY2tlciA9IHRoaXMucGFuZWxNb2RlID09PSAndGltZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNob3dUaW1lUGlja2VyQ2hhbmdlKHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIHRoaXMucGFuZWxNb2RlID0gc2hvdyA/ICd0aW1lJyA6ICdkYXRlJztcclxuICAgIC8vIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQodGhpcy5wYW5lbE1vZGUpO1xyXG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdChzaG93ID8gJ3RpbWUnIDogJ2RhdGUnKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tPaygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLnJlc3VsdE9rLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tUb2RheSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICAvLyBpZiAodGhpcy5pc1JhbmdlKSB7IC8vIFNob3cgdG9kYXkgaXMgbm90IHN1cHBvcnQgYnkgcmFuZ2VcclxuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdcIm56U2hvd1RvZGF5XCIgaXMgbm90IHN1cHBvcnQgZm9yIFwiUmFuZ2VQaWNrZXJcIiEnKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICBpZiAoIXRoaXMuaXNSYW5nZSkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gICAgICB0aGlzLnZhbHVlID0gbnVsbCBhcyBhbnk7IC8vIENsZWFyIGN1cnJlbnQgdmFsdWUgdG8gbm90IHN5bmMgdGltZSBieSBuZXh0IHN0ZXBcclxuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21TZWxlY3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbG9zZVBpY2tlclBhbmVsKCk7XHJcbiAgfVxyXG5cclxuICBvbkRheUhvdmVyKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgdGhpcy5zZWxlY3RlZFZhbHVlWzBdICYmICF0aGlzLnNlbGVjdGVkVmFsdWVbMV0pIHtcclxuICAgICAgLy8gV2hlbiByaWdodCB2YWx1ZSBpcyBzZWxlY3RlZCwgZG9uJ3QgZG8gaG92ZXJcclxuICAgICAgY29uc3QgYmFzZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZVswXTsgLy8gVXNlIHRoZSBsZWZ0IG9mIHNlbGVjdGVkIHZhbHVlIGFzIHRoZSBiYXNlIHRvIGRlY2lkZSBsYXRlciBob3ZlclZhbHVlXHJcbiAgICAgIGlmIChiYXNlLmlzQmVmb3JlRGF5KHZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtiYXNlLCB2YWx1ZV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gW3ZhbHVlLCBiYXNlXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QYW5lbE1vZGVDaGFuZ2UobW9kZTogUGFuZWxNb2RlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgKHRoaXMucGFuZWxNb2RlIGFzIFBhbmVsTW9kZVtdKVt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSA9IG1vZGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBhbmVsTW9kZSA9IG1vZGU7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KHRoaXMucGFuZWxNb2RlKTtcclxuICB9XHJcblxyXG4gIG9uSGVhZGVyQ2hhbmdlKHZhbHVlOiBDYW5keURhdGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93W3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUodGhpcy52YWx1ZUZvclJhbmdlU2hvdyk7IC8vIFNob3VsZCBhbHdheXMgdGFrZSBjYXJlIG9mIHN0YXJ0L2VuZFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RUaW1lKHZhbHVlOiBDYW5keURhdGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuY2xvbmVSYW5nZURhdGUodGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXSk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKTtcclxuICAgICAgbmV3VmFsdWVbaW5kZXhdID0gdGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgbmV3VmFsdWVbaW5kZXhdKSE7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLm92ZXJyaWRlSG1zKHZhbHVlLCAodGhpcy52YWx1ZSBhcyBDYW5keURhdGUpIHx8IG5ldyBDYW5keURhdGUoKSkhKTsgLy8gSWYgbm90IHNlbGVjdCBhIGRhdGUgY3VycmVudGx5LCB1c2UgdG9kYXlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVZhbHVlRnJvbUlucHV0KHZhbHVlOiB7IGRhdGU6IENhbmR5RGF0ZTsgaXNFbnRlcjogYm9vbGVhbiB9LCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgZGF0ZSwgaXNFbnRlciB9ID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGxldCBuZXdSYW5nZVZhbHVlID0gcGFydFR5cGUgPT09ICdsZWZ0JyA/IFtkYXRlLCB0aGlzLnNlbGVjdGVkVmFsdWVbMV1dIDogW3RoaXMuc2VsZWN0ZWRWYWx1ZVswXSwgZGF0ZV07XHJcbiAgICAgIGNvbnN0IGlzVmFsaWRSYW5nZSA9IHRoaXMuaXNWYWxpZFJhbmdlKG5ld1JhbmdlVmFsdWUpO1xyXG4gICAgICBpZiAoaXNWYWxpZFJhbmdlKSB7XHJcbiAgICAgICAgbmV3UmFuZ2VWYWx1ZSA9IHNvcnRSYW5nZVZhbHVlKG5ld1JhbmdlVmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUobmV3UmFuZ2VWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPyBXaHkgQ2FuIG5vdCB1c2UgZm9sbG93IGNvZGVcclxuICAgICAgLy8gdGhpcy5zZWxlY3RlZFZhbHVlW2luZGV4XSA9IGRhdGU7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuY2xvbmVSYW5nZURhdGUobmV3UmFuZ2VWYWx1ZSk7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQodGhpcy5jbG9uZVJhbmdlRGF0ZShuZXdSYW5nZVZhbHVlKSwgaXNFbnRlciAmJiBpc1ZhbGlkUmFuZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZUZyb21JbnB1dChkYXRlLCBpc0VudGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVZhbHVlRnJvbVNlbGVjdCh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSB0aGlzLnNlbGVjdGVkVmFsdWUgYXMgQ2FuZHlEYXRlW107IC8vIE5PVEU6IHRoZSBsZWZ0L3JpZ2h0IG1heWJlIG5vdCB0aGUgc2VxdWVuY2UgaXQgc2VsZWN0IGF0IHRoZSBkYXRlIHBhbmVsc1xyXG5cclxuICAgICAgaWYgKCghbGVmdCAmJiAhcmlnaHQpIHx8IChsZWZ0ICYmIHJpZ2h0KSkge1xyXG4gICAgICAgIC8vIElmIHRvdGFsbHkgZnVsbCBvciBlbXB0eSwgY2xlYW4gdXAgJiYgcmUtYXNzaWduIGxlZnQgZmlyc3RcclxuICAgICAgICB0aGlzLmhvdmVyVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWUgPSBbdmFsdWVdO1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJDaGFuZ2UuZW1pdChbdmFsdWUuY2xvbmUoKV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGxlZnQgJiYgIXJpZ2h0KSB7XHJcbiAgICAgICAgLy8gSWYgb25lIG9mIHRoZW0gaXMgZW1wdHksIGFzc2lnbiB0aGUgb3RoZXIgb25lIGFuZCBzb3J0LCB0aGVuIHNldCB0aGUgZmluYWwgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVmFsdWUoKTsgLy8gQ2xlYW4gdXBcclxuICAgICAgICB0aGlzLnNldFJhbmdlVmFsdWUoJ3JpZ2h0JywgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHNvcnRSYW5nZVZhbHVlKHRoaXMuc2VsZWN0ZWRWYWx1ZSk7IC8vIFNvcnRcclxuICAgICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93ID0gdGhpcy5ub3JtYWxpemVSYW5nZVZhbHVlKHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMuc2VsZWN0ZWRWYWx1ZSkpO1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJDaGFuZ2UuZW1pdCh0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMuc2VsZWN0ZWRWYWx1ZSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVByZXZOZXh0KGRpcmVjdGlvbjogJ3ByZXYnIHwgJ25leHQnLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdGhpcy52YWx1ZUZvclJhbmdlU2hvdztcclxuICAgICAgY29uc3Qgc2hvd01pZGRsZSA9ICFzdGFydC5hZGRNb250aHMoMSkuaXNTYW1lKGVuZCwgJ21vbnRoJyk7IC8vIE9uZSBtb250aCBkaWZmIHRoZW4gZG9uJ3Qgc2hvdyBtaWRkbGUgcHJldi9uZXh0XHJcbiAgICAgIGlmICgocGFydFR5cGUgPT09ICdsZWZ0JyAmJiBkaXJlY3Rpb24gPT09ICduZXh0JykgfHwgKHBhcnRUeXBlID09PSAncmlnaHQnICYmIGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSkge1xyXG4gICAgICAgIHJldHVybiBzaG93TWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQYW5lbE1vZGUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogUGFuZWxNb2RlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGFuZWxNb2RlW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldIGFzIFBhbmVsTW9kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhbmVsTW9kZSBhcyBQYW5lbE1vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgc2luZ2xlIHZhbHVlIG9yIHBhcnQgdmFsdWUgb2YgYSByYW5nZVxyXG4gIGdldFZhbHVlKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IENhbmR5RGF0ZSB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXSlbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZUJ5U2VsZWN0b3IocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgdmFsdWVTaG93ID0gdGhpcy5zaG93VGltZVBpY2tlciA/IHRoaXMudmFsdWUgOiB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93OyAvLyBVc2UgdGhlIHJlYWwgdGltZSB2YWx1ZSB0aGF0IHdpdGhvdXQgZGVjb3JhdGlvbnMgd2hlbiB0aW1lcGlja2VyIGlzIHNob3duIHVwXHJcbiAgICAgIHJldHVybiAodmFsdWVTaG93IGFzIENhbmR5RGF0ZVtdKVt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFBhcnRUeXBlSW5kZXgocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhcnRUeXBlTWFwW3BhcnRUeXBlIV07XHJcbiAgfVxyXG5cclxuICBnZXRQbGFjZWhvbGRlcihwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNSYW5nZSA/IHRoaXMucGxhY2Vob2xkZXJbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV0gOiAodGhpcy5wbGFjZWhvbGRlciBhcyBzdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0ZWRWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmFsdWUgJiYgISF0aGlzLnNlbGVjdGVkVmFsdWVbMV0gJiYgISF0aGlzLnNlbGVjdGVkVmFsdWVbMF07XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlZFN0YXJ0VGltZSA9ICh2YWx1ZTogRGF0ZSB8IERhdGVbXSk6IERpc2FibGVkVGltZUNvbmZpZyA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZFRpbWUgJiYgdGhpcy5kaXNhYmxlZFRpbWUodmFsdWUsICdzdGFydCcpO1xyXG4gIH07XHJcblxyXG4gIGRpc2FibGVkRW5kVGltZSA9ICh2YWx1ZTogRGF0ZSB8IERhdGVbXSk6IERpc2FibGVkVGltZUNvbmZpZyA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZFRpbWUgJiYgdGhpcy5kaXNhYmxlZFRpbWUodmFsdWUsICdlbmQnKTtcclxuICB9O1xyXG5cclxuICBpc0FsbG93ZWRTZWxlY3RlZFZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcclxuICAgIGlmIChzZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkVmFsdWVbMF0gJiYgc2VsZWN0ZWRWYWx1ZVsxXSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVswXSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRTdGFydFRpbWUpICYmXHJcbiAgICAgICAgaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlWzFdLCB0aGlzLmRpc2FibGVkRGF0ZSwgdGhpcy5kaXNhYmxlZEVuZFRpbWUpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0aW1lUGlja2VyRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuaGFzVGltZVBpY2tlcikge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiAhdGhpcy5oYXNTZWxlY3RlZFZhbHVlKCkgfHwgISF0aGlzLmhvdmVyVmFsdWUubGVuZ3RoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb2tEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5oYXNUaW1lUGlja2VyKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICF0aGlzLmlzQWxsb3dlZFNlbGVjdGVkVmFsdWUoKSB8fCAhdGhpcy5oYXNTZWxlY3RlZFZhbHVlKCkgfHwgISF0aGlzLmhvdmVyVmFsdWUubGVuZ3RoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPyAhaXNBbGxvd2VkRGF0ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRUaW1lKSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGltZU9wdGlvbnMocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogU3VwcG9ydFRpbWVPcHRpb25zIHwgbnVsbCB7XHJcbiAgICBpZiAodGhpcy5zaG93VGltZSAmJiB0aGlzLnRpbWVPcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRpbWVPcHRpb25zIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLnRpbWVPcHRpb25zW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldIDogdGhpcy50aW1lT3B0aW9ucztcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1ByZXNldFJhbmdlKHZhbDogUHJlc2V0UmFuZ2VzW2tleW9mIFByZXNldFJhbmdlc10pOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHZhbCgpIDogdmFsO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUoW25ldyBDYW5keURhdGUodmFsdWVbMF0pLCBuZXcgQ2FuZHlEYXRlKHZhbHVlWzFdKV0pO1xyXG4gICAgICB0aGlzLnJlc3VsdE9rLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUHJlc2V0UmFuZ2VNb3VzZUxlYXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckhvdmVyVmFsdWUoKTtcclxuICB9XHJcblxyXG4gIG9uSG92ZXJQcmVzZXRSYW5nZSh2YWw6IFByZXNldFJhbmdlc1trZXlvZiBQcmVzZXRSYW5nZXNdKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLmhvdmVyVmFsdWUgPSBbbmV3IENhbmR5RGF0ZSh2YWxbMF0pLCBuZXcgQ2FuZHlEYXRlKHZhbFsxXSldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0T2JqZWN0S2V5cyhvYmo6IG9iamVjdCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopIDogW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb3NlUGlja2VyUGFuZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsb3NlUGlja2VyLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJIb3ZlclZhbHVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkVGltZU9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaG93VGltZSkge1xyXG4gICAgICBjb25zdCBzaG93VGltZSA9IHR5cGVvZiB0aGlzLnNob3dUaW1lID09PSAnb2JqZWN0JyA/IHRoaXMuc2hvd1RpbWUgOiB7fTtcclxuICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXTtcclxuICAgICAgICB0aGlzLnRpbWVPcHRpb25zID0gW3RoaXMub3ZlcnJpZGVUaW1lT3B0aW9ucyhzaG93VGltZSwgdmFsdWVbMF0sICdzdGFydCcpLCB0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHZhbHVlWzFdLCAnZW5kJyldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGltZU9wdGlvbnMgPSB0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG92ZXJyaWRlVGltZU9wdGlvbnMob3JpZ2luOiBTdXBwb3J0VGltZU9wdGlvbnMsIHZhbHVlOiBDYW5keURhdGUsIHBhcnRpYWw/OiBEaXNhYmxlZFRpbWVQYXJ0aWFsKTogU3VwcG9ydFRpbWVPcHRpb25zIHtcclxuICAgIGxldCBkaXNhYmxlZFRpbWVGbjtcclxuICAgIGlmIChwYXJ0aWFsKSB7XHJcbiAgICAgIGRpc2FibGVkVGltZUZuID0gcGFydGlhbCA9PT0gJ3N0YXJ0JyA/IHRoaXMuZGlzYWJsZWRTdGFydFRpbWUgOiB0aGlzLmRpc2FibGVkRW5kVGltZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc2FibGVkVGltZUZuID0gdGhpcy5kaXNhYmxlZFRpbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyAuLi5vcmlnaW4sIC4uLmdldFRpbWVDb25maWcodmFsdWUsIGRpc2FibGVkVGltZUZuKSB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZUZyb21JbnB1dCh2YWx1ZTogQ29tcGF0aWJsZVZhbHVlLCBlbWl0VmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAoZW1pdFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0IHZhbHVlIGFuZCB0cmlnZ2VyIGNoYW5nZSBldmVudFxyXG4gIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xyXG4gICAgLy8gVE9ETzogU3luYyBvcmlnaW5hbCB0aW1lIChOT1RFOiB0aGlzIHNob3VsZCB0YWtlIG1vcmUgY2FyZSBvZiBiZWNhdXNlIGl0IG1heSBkZXBlbmQgb24gbWFueSBjaGFuZ2Ugc291cmNlcylcclxuICAgIC8vIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgIC8vICAgLy8gVE9ETzogU3luYyB0aW1lXHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBpZiAodGhpcy52YWx1ZSkgeyAvLyBTeW5jIHRpbWUgZnJvbSB0aGUgb3JpZ2luYWwgb25lIGlmIGl0J3MgYXZhaWxhYmxlXHJcbiAgICAvLyAgICAgbmV3VmFsdWUgPSB0aGlzLm92ZXJyaWRlSG1zKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlLCBuZXdWYWx1ZSBhcyBDYW5keURhdGUpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmJ1aWxkVGltZU9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3ZlcnJpZGVIbXMoZnJvbTogQ2FuZHlEYXRlLCB0bzogQ2FuZHlEYXRlKTogQ2FuZHlEYXRlIHwgbnVsbCB7XHJcbiAgICBpZiAoIWZyb20gfHwgIXRvKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLnNldEhtcyhmcm9tLmdldEhvdXJzKCksIGZyb20uZ2V0TWludXRlcygpLCBmcm9tLmdldFNlY29uZHMoKSk7XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBpdCdzIGEgdmFsaWQgcmFuZ2UgdmFsdWVcclxuICBwcml2YXRlIGlzVmFsaWRSYW5nZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBib29sZWFuIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuICEhKHN0YXJ0ICYmIGVuZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5vcm1hbGl6ZVJhbmdlVmFsdWUodmFsdWU6IENhbmR5RGF0ZVtdKTogQ2FuZHlEYXRlW10ge1xyXG4gICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdmFsdWU7XHJcbiAgICBjb25zdCBuZXdTdGFydCA9IHN0YXJ0IHx8IG5ldyBDYW5keURhdGUoKTtcclxuICAgIGNvbnN0IG5ld0VuZCA9IGVuZCAmJiBlbmQuaXNTYW1lTW9udGgobmV3U3RhcnQpID8gZW5kLmFkZE1vbnRocygxKSA6IGVuZCB8fCBuZXdTdGFydC5hZGRNb250aHMoMSk7XHJcbiAgICByZXR1cm4gW25ld1N0YXJ0LCBuZXdFbmRdO1xyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBpc0VtcHR5UmFuZ2VWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBib29sZWFuIHtcclxuICAvLyAgIHJldHVybiAhdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmV2ZXJ5KCh2YWwpID0+ICF2YWwpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gUmVuZXcgYW5kIHNldCBhIHJhbmdlIHZhbHVlIHRvIHRyaWdnZXIgc3ViLWNvbXBvbmVudCdzIGNoYW5nZSBkZXRlY3Rpb25cclxuICBwcml2YXRlIHNldFJhbmdlVmFsdWUocGFydFR5cGU6IFJhbmdlUGFydFR5cGUsIHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMuc2VsZWN0ZWRWYWx1ZSBhcyBDYW5keURhdGVbXSkpO1xyXG4gICAgcmVmW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb25lUmFuZ2VEYXRlKHZhbHVlOiBDYW5keURhdGVbXSk6IENhbmR5RGF0ZVtdIHtcclxuICAgIHJldHVybiBbdmFsdWVbMF0gJiYgdmFsdWVbMF0uY2xvbmUoKSwgdmFsdWVbMV0gJiYgdmFsdWVbMV0uY2xvbmUoKV0gYXMgQ2FuZHlEYXRlW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxBcnJheShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzW2tleV0gfHwgIUFycmF5LmlzQXJyYXkodGhpc1trZXldKSkge1xyXG4gICAgICB0aGlzW2tleV0gPSBbXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJhbmdlUGFydFR5cGUgPSAnbGVmdCcgfCAncmlnaHQnO1xyXG4iLCI8ZGl2XHJcbiAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcGlja2VyLWNvbnRhaW5lciB7eyBkcm9wZG93bkNsYXNzTmFtZSB9fSB7e1xyXG4gICAgcHJlZml4Q2xzXHJcbiAgfX0tcGlja2VyLWNvbnRhaW5lci1wbGFjZW1lbnQtYm90dG9tTGVmdFwiXHJcbiAgW25nU3R5bGVdPVwicG9wdXBTdHlsZVwiXHJcbj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fSB7eyBzaG93V2VlayA/IHByZWZpeENscyArICctd2Vlay1udW1iZXInIDogJycgfX0ge3tcclxuICAgICAgaGFzVGltZVBpY2tlciA/IHByZWZpeENscyArICctdGltZScgOiAnJ1xyXG4gICAgfX0ge3sgaXNSYW5nZSA/IHByZWZpeENscyArICctcmFuZ2UnIDogJycgfX1cIlxyXG4gICAgdGFiaW5kZXg9XCIwXCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXBhbmVsXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNSYW5nZVwiPlxyXG4gICAgICAgIDwhLS0gU2luZ2xlIE9OTFkgLS0+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbENhbGVuZGFySW5wdXRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZGF0ZS1wYW5lbFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1JhbmdlOyBlbHNlIHRwbFNpbmdsZVBhcnRcIj5cclxuICAgICAgICAgIDwhLS0gUmFuZ2UgU2VsZWN0b3JzIC0tPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJhbmdlUGFydDsgY29udGV4dDogeyBwYXJ0VHlwZTogJ2xlZnQnIH1cIlxyXG4gICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1jYWxlbmRhci1yYW5nZS1taWRkbGVcIj5+PC9kaXY+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsUmFuZ2VQYXJ0OyBjb250ZXh0OiB7IHBhcnRUeXBlOiAncmlnaHQnIH1cIlxyXG4gICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzUmFuZ2VcIj5cclxuICAgICAgICAgIDwhLS0gU2luZ2xlIE9OTFkgLS0+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsRm9vdGVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNSYW5nZVwiPlxyXG4gICAgICAgIDwhLS0gUmFuZ2UgT05MWSAtLT5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsRm9vdGVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICN0cGxDYWxlbmRhcklucHV0IGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XHJcbiAgPGNhbGVuZGFyLWlucHV0XHJcbiAgICBbdmFsdWVdPVwiZ2V0VmFsdWUocGFydFR5cGUpXCJcclxuICAgICh2YWx1ZUNoYW5nZSk9XCJjaGFuZ2VWYWx1ZUZyb21JbnB1dCgkZXZlbnQsIHBhcnRUeXBlKVwiXHJcbiAgICBbbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICBbZGlzYWJsZWREYXRlXT1cImRpc2FibGVkRGF0ZVwiXHJcbiAgICBbZm9ybWF0XT1cImZvcm1hdFwiXHJcbiAgICBbYXV0b0ZvY3VzXT1cInBhcnRUeXBlICE9PSAncmlnaHQnXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJnZXRQbGFjZWhvbGRlcihwYXJ0VHlwZSlcIlxyXG4gID48L2NhbGVuZGFyLWlucHV0PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICN0cGxJbm5lclBvcHVwIGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XHJcbiAgPGlubmVyLXBvcHVwXHJcbiAgICBbc2hvd1dlZWtdPVwic2hvd1dlZWtcIlxyXG4gICAgW2xvY2FsZV09XCJsb2NhbGVcIlxyXG4gICAgW3Nob3dUaW1lUGlja2VyXT1cImhhc1RpbWVQaWNrZXIgJiYgc2hvd1RpbWVQaWNrZXJcIlxyXG4gICAgW3RpbWVPcHRpb25zXT1cImdldFRpbWVPcHRpb25zKHBhcnRUeXBlKVwiXHJcbiAgICBbcGFuZWxNb2RlXT1cImdldFBhbmVsTW9kZShwYXJ0VHlwZSlcIlxyXG4gICAgKHBhbmVsTW9kZUNoYW5nZSk9XCJvblBhbmVsTW9kZUNoYW5nZSgkZXZlbnQsIHBhcnRUeXBlKVwiXHJcbiAgICBbdmFsdWVdPVwiZ2V0VmFsdWVCeVNlbGVjdG9yKHBhcnRUeXBlKVwiXHJcbiAgICBbZGlzYWJsZWREYXRlXT1cImRpc2FibGVkRGF0ZVwiXHJcbiAgICBbZGF0ZVJlbmRlcl09XCJkYXRlUmVuZGVyXCJcclxuICAgIFtzZWxlY3RlZFZhbHVlXT1cInNlbGVjdGVkVmFsdWVcIlxyXG4gICAgW2hvdmVyVmFsdWVdPVwiaG92ZXJWYWx1ZVwiXHJcbiAgICBbZW5hYmxlUHJldl09XCJlbmFibGVQcmV2TmV4dCgncHJldicsIHBhcnRUeXBlKVwiXHJcbiAgICBbZW5hYmxlTmV4dF09XCJlbmFibGVQcmV2TmV4dCgnbmV4dCcsIHBhcnRUeXBlKVwiXHJcbiAgICAoZGF5SG92ZXIpPVwib25EYXlIb3ZlcigkZXZlbnQpXCJcclxuICAgIChzZWxlY3REYXRlKT1cImNoYW5nZVZhbHVlRnJvbVNlbGVjdCgkZXZlbnQpXCJcclxuICAgIChzZWxlY3RUaW1lKT1cIm9uU2VsZWN0VGltZSgkZXZlbnQsIHBhcnRUeXBlKVwiXHJcbiAgICAoaGVhZGVyQ2hhbmdlKT1cIm9uSGVhZGVyQ2hhbmdlKCRldmVudCwgcGFydFR5cGUpXCJcclxuICA+PC9pbm5lci1wb3B1cD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjdHBsRm9vdGVyPlxyXG4gIDxjYWxlbmRhci1mb290ZXJcclxuICAgICpuZ0lmPVwiaGFzRm9vdGVyXCJcclxuICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcclxuICAgIFtzaG93VG9kYXldPVwic2hvd1RvZGF5XCJcclxuICAgIFtoYXNUaW1lUGlja2VyXT1cImhhc1RpbWVQaWNrZXJcIlxyXG4gICAgW3RpbWVQaWNrZXJEaXNhYmxlZF09XCJ0aW1lUGlja2VyRGlzYWJsZWQoKVwiXHJcbiAgICBbb2tEaXNhYmxlZF09XCJva0Rpc2FibGVkKClcIlxyXG4gICAgW2V4dHJhRm9vdGVyXT1cImV4dHJhRm9vdGVyXCJcclxuICAgIFtyYW5nZVF1aWNrU2VsZWN0b3JdPVwicmFuZ2VzID8gdHBsUmFuZ2VRdWlja1NlbGVjdG9yIDogbnVsbFwiXHJcbiAgICBbKHNob3dUaW1lUGlja2VyKV09XCJzaG93VGltZVBpY2tlclwiXHJcbiAgICAoc2hvd1RpbWVQaWNrZXJDaGFuZ2UpPVwib25TaG93VGltZVBpY2tlckNoYW5nZSgkZXZlbnQpXCJcclxuICAgIChjbGlja09rKT1cIm9uQ2xpY2tPaygpXCJcclxuICAgIChjbGlja1RvZGF5KT1cIm9uQ2xpY2tUb2RheSgkZXZlbnQpXCJcclxuICA+PC9jYWxlbmRhci1mb290ZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48IS0tIFNpbmdsZSBPTkxZIC0tPlxyXG48bmctdGVtcGxhdGUgI3RwbFNpbmdsZVBhcnQ+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbElubmVyUG9wdXBcIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwhLS0gUmFuZ2UgT05MWSAtLT5cclxuPG5nLXRlbXBsYXRlICN0cGxSYW5nZVBhcnQgbGV0LXBhcnRUeXBlPVwicGFydFR5cGVcIj5cclxuICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXJhbmdlLXBhcnQge3sgcHJlZml4Q2xzIH19LXJhbmdlLXt7IHBhcnRUeXBlIH19XCI+XHJcbiAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsQ2FsZW5kYXJJbnB1dDsgY29udGV4dDogeyBwYXJ0VHlwZTogcGFydFR5cGUgfVwiXHJcbiAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICA8ZGl2IHN0eWxlPVwib3V0bGluZTogbm9uZTtcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsSW5uZXJQb3B1cDsgY29udGV4dDogeyBwYXJ0VHlwZTogcGFydFR5cGUgfVwiXHJcbiAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPCEtLSBSYW5nZSBPTkxZOiBSYW5nZSBRdWljayBTZWxlY3RvciAtLT5cclxuPG5nLXRlbXBsYXRlICN0cGxSYW5nZVF1aWNrU2VsZWN0b3I+XHJcbiAgPGFcclxuICAgICpuZ0Zvcj1cImxldCBuYW1lIG9mIGdldE9iamVjdEtleXMocmFuZ2VzKVwiXHJcbiAgICAoY2xpY2spPVwib25DbGlja1ByZXNldFJhbmdlKHJhbmdlc1tuYW1lXSlcIlxyXG4gICAgKG1vdXNlZW50ZXIpPVwib25Ib3ZlclByZXNldFJhbmdlKHJhbmdlc1tuYW1lXSlcIlxyXG4gICAgKG1vdXNlbGVhdmUpPVwib25QcmVzZXRSYW5nZU1vdXNlTGVhdmUoKVwiXHJcbiAgICA+e3sgbmFtZSB9fTwvYVxyXG4gID5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19