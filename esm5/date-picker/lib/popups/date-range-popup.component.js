import { __assign, __read } from "tslib";
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
    var _r2417 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2417);
} }
function DateRangePopupComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c0 = function () { return { partType: "left" }; };
var _c1 = function () { return { partType: "right" }; };
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
    var _r2425 = i0.ɵɵreference(17);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2425)("ngTemplateOutletContext", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r2425)("ngTemplateOutletContext", i0.ɵɵpureFunction0(5, _c1));
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
    var _r2421 = i0.ɵɵreference(13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2421);
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
    var _r2421 = i0.ɵɵreference(13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2421);
} }
function DateRangePopupComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    var _r2436 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "calendar-input", 13);
    i0.ɵɵlistener("valueChange", function DateRangePopupComponent_ng_template_8_Template_calendar_input_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r2436); var partType_r2434 = ctx.partType; var ctx_r2435 = i0.ɵɵnextContext(); return ctx_r2435.changeValueFromInput($event, partType_r2434); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var partType_r2434 = ctx.partType;
    var ctx_r2418 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r2418.getValue(partType_r2434))("locale", ctx_r2418.locale)("disabledDate", ctx_r2418.disabledDate)("format", ctx_r2418.format)("autoFocus", partType_r2434 !== "right")("placeholder", ctx_r2418.getPlaceholder(partType_r2434));
} }
function DateRangePopupComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    var _r2439 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "inner-popup", 14);
    i0.ɵɵlistener("panelModeChange", function DateRangePopupComponent_ng_template_10_Template_inner_popup_panelModeChange_0_listener($event) { i0.ɵɵrestoreView(_r2439); var partType_r2437 = ctx.partType; var ctx_r2438 = i0.ɵɵnextContext(); return ctx_r2438.onPanelModeChange($event, partType_r2437); })("dayHover", function DateRangePopupComponent_ng_template_10_Template_inner_popup_dayHover_0_listener($event) { i0.ɵɵrestoreView(_r2439); var ctx_r2440 = i0.ɵɵnextContext(); return ctx_r2440.onDayHover($event); })("selectDate", function DateRangePopupComponent_ng_template_10_Template_inner_popup_selectDate_0_listener($event) { i0.ɵɵrestoreView(_r2439); var ctx_r2441 = i0.ɵɵnextContext(); return ctx_r2441.changeValueFromSelect($event); })("selectTime", function DateRangePopupComponent_ng_template_10_Template_inner_popup_selectTime_0_listener($event) { i0.ɵɵrestoreView(_r2439); var partType_r2437 = ctx.partType; var ctx_r2442 = i0.ɵɵnextContext(); return ctx_r2442.onSelectTime($event, partType_r2437); })("headerChange", function DateRangePopupComponent_ng_template_10_Template_inner_popup_headerChange_0_listener($event) { i0.ɵɵrestoreView(_r2439); var partType_r2437 = ctx.partType; var ctx_r2443 = i0.ɵɵnextContext(); return ctx_r2443.onHeaderChange($event, partType_r2437); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var partType_r2437 = ctx.partType;
    var ctx_r2420 = i0.ɵɵnextContext();
    i0.ɵɵproperty("showWeek", ctx_r2420.showWeek)("locale", ctx_r2420.locale)("showTimePicker", ctx_r2420.hasTimePicker && ctx_r2420.showTimePicker)("timeOptions", ctx_r2420.getTimeOptions(partType_r2437))("panelMode", ctx_r2420.getPanelMode(partType_r2437))("value", ctx_r2420.getValueBySelector(partType_r2437))("disabledDate", ctx_r2420.disabledDate)("dateRender", ctx_r2420.dateRender)("selectedValue", ctx_r2420.selectedValue)("hoverValue", ctx_r2420.hoverValue)("enablePrev", ctx_r2420.enablePrevNext("prev", partType_r2437))("enableNext", ctx_r2420.enablePrevNext("next", partType_r2437));
} }
function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template(rf, ctx) { if (rf & 1) {
    var _r2446 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "calendar-footer", 16);
    i0.ɵɵlistener("showTimePickerChange", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_showTimePickerChange_0_listener($event) { i0.ɵɵrestoreView(_r2446); var ctx_r2445 = i0.ɵɵnextContext(2); return ctx_r2445.showTimePicker = $event; })("showTimePickerChange", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_showTimePickerChange_0_listener($event) { i0.ɵɵrestoreView(_r2446); var ctx_r2447 = i0.ɵɵnextContext(2); return ctx_r2447.onShowTimePickerChange($event); })("clickOk", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_clickOk_0_listener($event) { i0.ɵɵrestoreView(_r2446); var ctx_r2448 = i0.ɵɵnextContext(2); return ctx_r2448.onClickOk(); })("clickToday", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_clickToday_0_listener($event) { i0.ɵɵrestoreView(_r2446); var ctx_r2449 = i0.ɵɵnextContext(2); return ctx_r2449.onClickToday($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2444 = i0.ɵɵnextContext(2);
    var _r2427 = i0.ɵɵreference(19);
    i0.ɵɵproperty("locale", ctx_r2444.locale)("showToday", ctx_r2444.showToday)("hasTimePicker", ctx_r2444.hasTimePicker)("timePickerDisabled", ctx_r2444.timePickerDisabled())("okDisabled", ctx_r2444.okDisabled())("extraFooter", ctx_r2444.extraFooter)("rangeQuickSelector", ctx_r2444.ranges ? _r2427 : null)("showTimePicker", ctx_r2444.showTimePicker);
} }
function DateRangePopupComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_12_calendar_footer_0_Template, 1, 8, "calendar-footer", 15);
} if (rf & 2) {
    var ctx_r2422 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2422.hasFooter);
} }
function DateRangePopupComponent_ng_template_14_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_14_ng_container_0_Template, 1, 0, "ng-container", 10);
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r2419 = i0.ɵɵreference(11);
    i0.ɵɵproperty("ngTemplateOutlet", _r2419);
} }
function DateRangePopupComponent_ng_template_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_template_16_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c2 = function (a0) { return { partType: a0 }; };
function DateRangePopupComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, DateRangePopupComponent_ng_template_16_ng_container_1_Template, 1, 0, "ng-container", 11);
    i0.ɵɵelementStart(2, "div", 17);
    i0.ɵɵtemplate(3, DateRangePopupComponent_ng_template_16_ng_container_3_Template, 1, 0, "ng-container", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var partType_r2451 = ctx.partType;
    var ctx_r2426 = i0.ɵɵnextContext();
    var _r2417 = i0.ɵɵreference(9);
    var _r2419 = i0.ɵɵreference(11);
    i0.ɵɵclassMapInterpolate3("", ctx_r2426.prefixCls, "-range-part ", ctx_r2426.prefixCls, "-range-", partType_r2451, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2417)("ngTemplateOutletContext", i0.ɵɵpureFunction1(9, _c2, partType_r2451));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2419)("ngTemplateOutletContext", i0.ɵɵpureFunction1(11, _c2, partType_r2451));
} }
function DateRangePopupComponent_ng_template_18_a_0_Template(rf, ctx) { if (rf & 1) {
    var _r2457 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵlistener("click", function DateRangePopupComponent_ng_template_18_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2457); var name_r2455 = ctx.$implicit; var ctx_r2456 = i0.ɵɵnextContext(2); return ctx_r2456.onClickPresetRange(ctx_r2456.ranges[name_r2455]); })("mouseenter", function DateRangePopupComponent_ng_template_18_a_0_Template_a_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r2457); var name_r2455 = ctx.$implicit; var ctx_r2458 = i0.ɵɵnextContext(2); return ctx_r2458.onHoverPresetRange(ctx_r2458.ranges[name_r2455]); })("mouseleave", function DateRangePopupComponent_ng_template_18_a_0_Template_a_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r2457); var ctx_r2459 = i0.ɵɵnextContext(2); return ctx_r2459.onPresetRangeMouseLeave(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var name_r2455 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(name_r2455);
} }
function DateRangePopupComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_18_a_0_Template, 2, 1, "a", 18);
} if (rf & 2) {
    var ctx_r2428 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r2428.getObjectKeys(ctx_r2428.ranges));
} }
var DateRangePopupComponent = /** @class */ (function () {
    function DateRangePopupComponent() {
        var _this = this;
        this.panelModeChange = new EventEmitter();
        this.calendarChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.resultOk = new EventEmitter(); // Emitted when done with date selecting
        this.closePicker = new EventEmitter(); // Notify outside to close the picker panel
        this.prefixCls = 'ant-calendar';
        this.showTimePicker = false;
        this.partTypeMap = { left: 0, right: 1 };
        this.disabledStartTime = function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'start');
        };
        this.disabledEndTime = function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'end');
        };
    }
    Object.defineProperty(DateRangePopupComponent.prototype, "hasTimePicker", {
        get: function () {
            return !!this.showTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePopupComponent.prototype, "hasFooter", {
        get: function () {
            return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
        },
        enumerable: true,
        configurable: true
    });
    DateRangePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Initialization for range properties to prevent errors while later assignment
        if (this.isRange) {
            ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach(function (prop) { return _this.initialArray(prop); });
        }
    };
    DateRangePopupComponent.prototype.ngOnChanges = function (changes) {
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
    };
    DateRangePopupComponent.prototype.onShowTimePickerChange = function (show) {
        // this.panelMode = show ? 'time' : 'date';
        // this.panelModeChange.emit(this.panelMode);
        this.panelModeChange.emit(show ? 'time' : 'date');
    };
    DateRangePopupComponent.prototype.onClickOk = function () {
        this.setValue(this.value);
        this.resultOk.emit();
    };
    DateRangePopupComponent.prototype.onClickToday = function (value) {
        // if (this.isRange) { // Show today is not support by range
        //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
        // } else {
        if (!this.isRange) {
            // tslint:disable-next-line: no-any
            this.value = null; // Clear current value to not sync time by next step
            this.changeValueFromSelect(value);
        }
        this.closePickerPanel();
    };
    DateRangePopupComponent.prototype.onDayHover = function (value) {
        if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) {
            // When right value is selected, don't do hover
            var base = this.selectedValue[0]; // Use the left of selected value as the base to decide later hoverValue
            if (base.isBeforeDay(value)) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    };
    DateRangePopupComponent.prototype.onPanelModeChange = function (mode, partType) {
        if (this.isRange) {
            this.panelMode[this.getPartTypeIndex(partType)] = mode;
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    };
    DateRangePopupComponent.prototype.onHeaderChange = function (value, partType) {
        if (this.isRange) {
            this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
            this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
        }
    };
    DateRangePopupComponent.prototype.onSelectTime = function (value, partType) {
        if (this.isRange) {
            var newValue = this.cloneRangeDate(this.value);
            var index = this.getPartTypeIndex(partType);
            newValue[index] = this.overrideHms(value, newValue[index]);
            this.setValue(newValue);
        }
        else {
            this.setValue(this.overrideHms(value, this.value || new CandyDate())); // If not select a date currently, use today
        }
    };
    DateRangePopupComponent.prototype.changeValueFromInput = function (value, partType) {
        var date = value.date, isEnter = value.isEnter;
        if (this.isRange) {
            var newRangeValue = partType === 'left' ? [date, this.selectedValue[1]] : [this.selectedValue[0], date];
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
    DateRangePopupComponent.prototype.changeValueFromSelect = function (value) {
        if (this.isRange) {
            var _a = __read(this.selectedValue, 2), left = _a[0], right = _a[1]; // NOTE: the left/right maybe not the sequence it select at the date panels
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
    DateRangePopupComponent.prototype.enablePrevNext = function (direction, partType) {
        if (this.isRange) {
            var _a = __read(this.valueForRangeShow, 2), start = _a[0], end = _a[1];
            var showMiddle = !start.addMonths(1).isSame(end, 'month'); // One month diff then don't show middle prev/next
            if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                return showMiddle;
            }
            return true;
        }
        else {
            return true;
        }
    };
    DateRangePopupComponent.prototype.getPanelMode = function (partType) {
        if (this.isRange) {
            return this.panelMode[this.getPartTypeIndex(partType)];
        }
        else {
            return this.panelMode;
        }
    };
    // Get single value or part value of a range
    DateRangePopupComponent.prototype.getValue = function (partType) {
        if (this.isRange) {
            return this.value[this.getPartTypeIndex(partType)];
        }
        else {
            return this.value;
        }
    };
    DateRangePopupComponent.prototype.getValueBySelector = function (partType) {
        if (this.isRange) {
            var valueShow = this.showTimePicker ? this.value : this.valueForRangeShow; // Use the real time value that without decorations when timepicker is shown up
            return valueShow[this.getPartTypeIndex(partType)];
        }
        else {
            return this.value;
        }
    };
    DateRangePopupComponent.prototype.getPartTypeIndex = function (partType) {
        return this.partTypeMap[partType];
    };
    DateRangePopupComponent.prototype.getPlaceholder = function (partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : this.placeholder;
    };
    DateRangePopupComponent.prototype.hasSelectedValue = function () {
        return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
    };
    DateRangePopupComponent.prototype.isAllowedSelectedValue = function () {
        var selectedValue = this.selectedValue;
        if (selectedValue && selectedValue[0] && selectedValue[1]) {
            return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
        }
        return false;
    };
    DateRangePopupComponent.prototype.timePickerDisabled = function () {
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
    DateRangePopupComponent.prototype.okDisabled = function () {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return this.value ? !isAllowedDate(this.value, this.disabledDate, this.disabledTime) : false;
        }
    };
    DateRangePopupComponent.prototype.getTimeOptions = function (partType) {
        if (this.showTime && this.timeOptions) {
            return this.timeOptions instanceof Array ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
        }
        return null;
    };
    DateRangePopupComponent.prototype.onClickPresetRange = function (val) {
        var value = typeof val === 'function' ? val() : val;
        if (value) {
            this.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
            this.resultOk.emit();
        }
    };
    DateRangePopupComponent.prototype.onPresetRangeMouseLeave = function () {
        this.clearHoverValue();
    };
    DateRangePopupComponent.prototype.onHoverPresetRange = function (val) {
        if (typeof val !== 'function') {
            this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
        }
    };
    DateRangePopupComponent.prototype.getObjectKeys = function (obj) {
        return obj ? Object.keys(obj) : [];
    };
    DateRangePopupComponent.prototype.closePickerPanel = function () {
        this.closePicker.emit();
    };
    DateRangePopupComponent.prototype.clearHoverValue = function () {
        this.hoverValue = [];
    };
    DateRangePopupComponent.prototype.buildTimeOptions = function () {
        if (this.showTime) {
            var showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                var value = this.value;
                this.timeOptions = [this.overrideTimeOptions(showTime, value[0], 'start'), this.overrideTimeOptions(showTime, value[1], 'end')];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, this.value);
            }
        }
        else {
            this.timeOptions = null;
        }
    };
    DateRangePopupComponent.prototype.overrideTimeOptions = function (origin, value, partial) {
        var disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return __assign(__assign({}, origin), getTimeConfig(value, disabledTimeFn));
    };
    DateRangePopupComponent.prototype.setValueFromInput = function (value, emitValue) {
        if (emitValue === void 0) { emitValue = true; }
        this.value = value;
        if (emitValue) {
            this.inputChange.emit(this.value);
        }
        this.buildTimeOptions();
    };
    // Set value and trigger change event
    DateRangePopupComponent.prototype.setValue = function (value) {
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
    DateRangePopupComponent.prototype.overrideHms = function (from, to) {
        if (!from || !to) {
            return null;
        }
        return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
    };
    // Check if it's a valid range value
    DateRangePopupComponent.prototype.isValidRange = function (value) {
        if (Array.isArray(value)) {
            var _a = __read(value, 2), start = _a[0], end = _a[1];
            return !!(start && end);
        }
        return false;
    };
    DateRangePopupComponent.prototype.normalizeRangeValue = function (value) {
        var _a = __read(value, 2), start = _a[0], end = _a[1];
        var newStart = start || new CandyDate();
        var newEnd = end && end.isSameMonth(newStart) ? end.addMonths(1) : end || newStart.addMonths(1);
        return [newStart, newEnd];
    };
    // private isEmptyRangeValue(value: CandyDate[]): boolean {
    //   return !value || !Array.isArray(value) || value.every((val) => !val);
    // }
    // Renew and set a range value to trigger sub-component's change detection
    DateRangePopupComponent.prototype.setRangeValue = function (partType, value) {
        var ref = (this.selectedValue = this.cloneRangeDate(this.selectedValue));
        ref[this.getPartTypeIndex(partType)] = value;
    };
    DateRangePopupComponent.prototype.cloneRangeDate = function (value) {
        return [value[0] && value[0].clone(), value[1] && value[1].clone()];
    };
    DateRangePopupComponent.prototype.initialArray = function (key) {
        if (!this[key] || !Array.isArray(this[key])) {
            this[key] = [];
        }
    };
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
            var _r2423 = i0.ɵɵreference(15);
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
            i0.ɵɵproperty("ngIf", ctx.isRange)("ngIfElse", _r2423);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isRange);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isRange);
        } }, directives: [i1.NgStyle, i1.NgIf, i1.NgTemplateOutlet, i2.CalendarInputComponent, i3.InnerPopupComponent, i4.CalendarFooterComponent, i1.NgForOf], encapsulation: 2, changeDetection: 0 });
    return DateRangePopupComponent;
}());
export { DateRangePopupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3BvcHVwcy9kYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC50cyIsImxpYi9wb3B1cHMvZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWTdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7O0lDbEIvQyx3QkFBa0U7OztJQUZwRSw2QkFDRTtJQUNBLDBHQUFtRDtJQUNyRCwwQkFBZTs7OztJQURDLGVBQW9DO0lBQXBDLHlDQUFvQzs7O0lBS2hELHdCQUVnQjs7O0lBRWhCLHdCQUVnQjs7Ozs7SUFSbEIsNkJBQ0U7SUFDQSwwR0FFQztJQUNELCtCQUF1QztJQUFBLGlCQUFDO0lBQUEsaUJBQU07SUFDOUMsMEdBRUM7SUFDSCwwQkFBZTs7OztJQU5YLGVBQStEO0lBQS9ELHlDQUErRCx1REFBQTtJQUkvRCxlQUFnRTtJQUFoRSx5Q0FBZ0UsdURBQUE7OztJQU1sRSx3QkFBMkQ7OztJQUY3RCw2QkFDRTtJQUNBLDBHQUE0QztJQUM5QywwQkFBZTs7OztJQURDLGVBQTZCO0lBQTdCLHlDQUE2Qjs7O0lBSzdDLHdCQUEyRDs7O0lBRjdELDZCQUNFO0lBQ0EsMEdBQTRDO0lBQzlDLDBCQUFlOzs7O0lBREMsZUFBNkI7SUFBN0IseUNBQTZCOzs7O0lBT2pELDBDQVFrQjtJQU5oQix1U0FBc0Q7SUFNdkQsaUJB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N0Isc0RBQTZCO1lBQ2xCLGVBQWdCO1lBQWhCLG1DQUFnQjtZQUl6QixlQUFrQztZQUFsQywyREFBa0M7WUFDdkIsZUFBbUM7WUFBbkMsa0NBQW1DLG9CQUFBO1lBV25DLGVBQWdCO1lBQWhCLG1DQUFnQjtZQUtsQixlQUFlO1lBQWYsa0NBQWU7O2tDRGxDbkM7Q0EyYkMsQUF4WkQsSUF3WkM7U0FoWlksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FSbkMsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsaUNBQWlDO2FBQy9DOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFFTixNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlLCBGdW5jdGlvblByb3AsIHNvcnRSYW5nZVZhbHVlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQge1xyXG4gIENvbXBhdGlibGVWYWx1ZSxcclxuICBEaXNhYmxlZERhdGVGbixcclxuICBEaXNhYmxlZFRpbWVDb25maWcsXHJcbiAgRGlzYWJsZWRUaW1lRm4sXHJcbiAgRGlzYWJsZWRUaW1lUGFydGlhbCxcclxuICBQYW5lbE1vZGUsXHJcbiAgUHJlc2V0UmFuZ2VzLFxyXG4gIFN1cHBvcnRUaW1lT3B0aW9uc1xyXG59IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcclxuaW1wb3J0IHsgZ2V0VGltZUNvbmZpZywgaXNBbGxvd2VkRGF0ZSB9IGZyb20gJy4uL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkYXRlLXJhbmdlLXBvcHVwJyxcclxuICBleHBvcnRBczogJ2RhdGVSYW5nZVBvcHVwJyxcclxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtcmFuZ2UtcG9wdXAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBpc1JhbmdlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dXZWVrOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IERpc2FibGVkRGF0ZUZuO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm47IC8vIFRoaXMgd2lsbCBsZWFkIHRvIHJlYnVpbGQgdGltZSBvcHRpb25zXHJcbiAgQElucHV0KCkgc2hvd1RvZGF5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dUaW1lOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcclxuICBASW5wdXQoKSByYW5nZXM6IFByZXNldFJhbmdlcztcclxuICBASW5wdXQoKSBkYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIHBvcHVwU3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBkcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwYW5lbE1vZGU6IFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBDb21wYXRpYmxlVmFsdWU7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBwYW5lbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjYWxlbmRhckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZVZhbHVlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZVZhbHVlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZVZhbHVlPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVzdWx0T2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7IC8vIEVtaXR0ZWQgd2hlbiBkb25lIHdpdGggZGF0ZSBzZWxlY3RpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xvc2VQaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7IC8vIE5vdGlmeSBvdXRzaWRlIHRvIGNsb3NlIHRoZSBwaWNrZXIgcGFuZWxcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcclxuICBzaG93VGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHRpbWVPcHRpb25zOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBTdXBwb3J0VGltZU9wdGlvbnNbXSB8IG51bGw7XHJcbiAgdmFsdWVGb3JSYW5nZVNob3c6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcbiAgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuICBob3ZlclZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG5cclxuICBnZXQgaGFzVGltZVBpY2tlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMuc2hvd1RpbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzRm9vdGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvd1RvZGF5IHx8IHRoaXMuaGFzVGltZVBpY2tlciB8fCAhIXRoaXMuZXh0cmFGb290ZXIgfHwgISF0aGlzLnJhbmdlcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFydFR5cGVNYXA6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7IGxlZnQ6IDAsIHJpZ2h0OiAxIH07XHJcblxyXG4gIFtwcm9wZXJ0eTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIEluaXRpYWxpemF0aW9uIGZvciByYW5nZSBwcm9wZXJ0aWVzIHRvIHByZXZlbnQgZXJyb3JzIHdoaWxlIGxhdGVyIGFzc2lnbm1lbnRcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgWydwbGFjZWhvbGRlcicsICdwYW5lbE1vZGUnLCAnc2VsZWN0ZWRWYWx1ZScsICdob3ZlclZhbHVlJ10uZm9yRWFjaChwcm9wID0+IHRoaXMuaW5pdGlhbEFycmF5KHByb3ApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgaWYgKGNoYW5nZXMudmFsdWUpIHtcclxuICAgICAgICAvLyBSZS1pbml0aWFsaXplIGFsbCByZWxhdGVkIHZhbHVlc1xyXG4gICAgICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXTtcclxuICAgICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93ID0gdGhpcy5ub3JtYWxpemVSYW5nZVZhbHVlKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFyc2Ugc2hvd1RpbWUgb3B0aW9uc1xyXG4gICAgaWYgKGNoYW5nZXMuc2hvd1RpbWUgfHwgY2hhbmdlcy5kaXNhYmxlZFRpbWUpIHtcclxuICAgICAgaWYgKHRoaXMuc2hvd1RpbWUpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkVGltZU9wdGlvbnMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNob3cgdGltZSBwaWNrZXIgd2hlbiBhc3NpZ25lZCBwYW5lbCBtb2RlIGFzIFwidGltZVwiXHJcbiAgICBpZiAoY2hhbmdlcy5wYW5lbE1vZGUgJiYgdGhpcy5oYXNUaW1lUGlja2VyKSB7XHJcbiAgICAgIHRoaXMuc2hvd1RpbWVQaWNrZXIgPSB0aGlzLnBhbmVsTW9kZSA9PT0gJ3RpbWUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TaG93VGltZVBpY2tlckNoYW5nZShzaG93OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLnBhbmVsTW9kZSA9IHNob3cgPyAndGltZScgOiAnZGF0ZSc7XHJcbiAgICAvLyB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KHRoaXMucGFuZWxNb2RlKTtcclxuICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQoc2hvdyA/ICd0aW1lJyA6ICdkYXRlJyk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrT2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5yZXN1bHRPay5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrVG9kYXkodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgLy8gaWYgKHRoaXMuaXNSYW5nZSkgeyAvLyBTaG93IHRvZGF5IGlzIG5vdCBzdXBwb3J0IGJ5IHJhbmdlXHJcbiAgICAvLyAgIHRocm93IG5ldyBFcnJvcignXCJuelNob3dUb2RheVwiIGlzIG5vdCBzdXBwb3J0IGZvciBcIlJhbmdlUGlja2VyXCIhJyk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgaWYgKCF0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICAgICAgdGhpcy52YWx1ZSA9IG51bGwgYXMgYW55OyAvLyBDbGVhciBjdXJyZW50IHZhbHVlIHRvIG5vdCBzeW5jIHRpbWUgYnkgbmV4dCBzdGVwXHJcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tU2VsZWN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xvc2VQaWNrZXJQYW5lbCgpO1xyXG4gIH1cclxuXHJcbiAgb25EYXlIb3Zlcih2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlICYmIHRoaXMuc2VsZWN0ZWRWYWx1ZVswXSAmJiAhdGhpcy5zZWxlY3RlZFZhbHVlWzFdKSB7XHJcbiAgICAgIC8vIFdoZW4gcmlnaHQgdmFsdWUgaXMgc2VsZWN0ZWQsIGRvbid0IGRvIGhvdmVyXHJcbiAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLnNlbGVjdGVkVmFsdWVbMF07IC8vIFVzZSB0aGUgbGVmdCBvZiBzZWxlY3RlZCB2YWx1ZSBhcyB0aGUgYmFzZSB0byBkZWNpZGUgbGF0ZXIgaG92ZXJWYWx1ZVxyXG4gICAgICBpZiAoYmFzZS5pc0JlZm9yZURheSh2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLmhvdmVyVmFsdWUgPSBbYmFzZSwgdmFsdWVdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFt2YWx1ZSwgYmFzZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUGFuZWxNb2RlQ2hhbmdlKG1vZGU6IFBhbmVsTW9kZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgICh0aGlzLnBhbmVsTW9kZSBhcyBQYW5lbE1vZGVbXSlbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV0gPSBtb2RlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYW5lbE1vZGUgPSBtb2RlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhbmVsTW9kZSk7XHJcbiAgfVxyXG5cclxuICBvbkhlYWRlckNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvd1t0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93ID0gdGhpcy5ub3JtYWxpemVSYW5nZVZhbHVlKHRoaXMudmFsdWVGb3JSYW5nZVNob3cpOyAvLyBTaG91bGQgYWx3YXlzIHRha2UgY2FyZSBvZiBzdGFydC9lbmRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0VGltZSh2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW10pO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSk7XHJcbiAgICAgIG5ld1ZhbHVlW2luZGV4XSA9IHRoaXMub3ZlcnJpZGVIbXModmFsdWUsIG5ld1ZhbHVlW2luZGV4XSkhO1xyXG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlKSB8fCBuZXcgQ2FuZHlEYXRlKCkpISk7IC8vIElmIG5vdCBzZWxlY3QgYSBkYXRlIGN1cnJlbnRseSwgdXNlIHRvZGF5XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWYWx1ZUZyb21JbnB1dCh2YWx1ZTogeyBkYXRlOiBDYW5keURhdGU7IGlzRW50ZXI6IGJvb2xlYW4gfSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGRhdGUsIGlzRW50ZXIgfSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBsZXQgbmV3UmFuZ2VWYWx1ZSA9IHBhcnRUeXBlID09PSAnbGVmdCcgPyBbZGF0ZSwgdGhpcy5zZWxlY3RlZFZhbHVlWzFdXSA6IFt0aGlzLnNlbGVjdGVkVmFsdWVbMF0sIGRhdGVdO1xyXG4gICAgICBjb25zdCBpc1ZhbGlkUmFuZ2UgPSB0aGlzLmlzVmFsaWRSYW5nZShuZXdSYW5nZVZhbHVlKTtcclxuICAgICAgaWYgKGlzVmFsaWRSYW5nZSkge1xyXG4gICAgICAgIG5ld1JhbmdlVmFsdWUgPSBzb3J0UmFuZ2VWYWx1ZShuZXdSYW5nZVZhbHVlKTtcclxuICAgICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93ID0gdGhpcy5ub3JtYWxpemVSYW5nZVZhbHVlKG5ld1JhbmdlVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID8gV2h5IENhbiBub3QgdXNlIGZvbGxvdyBjb2RlXHJcbiAgICAgIC8vIHRoaXMuc2VsZWN0ZWRWYWx1ZVtpbmRleF0gPSBkYXRlO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLmNsb25lUmFuZ2VEYXRlKG5ld1JhbmdlVmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KHRoaXMuY2xvbmVSYW5nZURhdGUobmV3UmFuZ2VWYWx1ZSksIGlzRW50ZXIgJiYgaXNWYWxpZFJhbmdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZGF0ZSwgaXNFbnRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWYWx1ZUZyb21TZWxlY3QodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBbbGVmdCwgcmlnaHRdID0gdGhpcy5zZWxlY3RlZFZhbHVlIGFzIENhbmR5RGF0ZVtdOyAvLyBOT1RFOiB0aGUgbGVmdC9yaWdodCBtYXliZSBub3QgdGhlIHNlcXVlbmNlIGl0IHNlbGVjdCBhdCB0aGUgZGF0ZSBwYW5lbHNcclxuXHJcbiAgICAgIGlmICgoIWxlZnQgJiYgIXJpZ2h0KSB8fCAobGVmdCAmJiByaWdodCkpIHtcclxuICAgICAgICAvLyBJZiB0b3RhbGx5IGZ1bGwgb3IgZW1wdHksIGNsZWFuIHVwICYmIHJlLWFzc2lnbiBsZWZ0IGZpcnN0XHJcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlID0gW3ZhbHVlXTtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyQ2hhbmdlLmVtaXQoW3ZhbHVlLmNsb25lKCldKTtcclxuICAgICAgfSBlbHNlIGlmIChsZWZ0ICYmICFyaWdodCkge1xyXG4gICAgICAgIC8vIElmIG9uZSBvZiB0aGVtIGlzIGVtcHR5LCBhc3NpZ24gdGhlIG90aGVyIG9uZSBhbmQgc29ydCwgdGhlbiBzZXQgdGhlIGZpbmFsIHZhbHVlc1xyXG4gICAgICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7IC8vIENsZWFuIHVwXHJcbiAgICAgICAgdGhpcy5zZXRSYW5nZVZhbHVlKCdyaWdodCcsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSBzb3J0UmFuZ2VWYWx1ZSh0aGlzLnNlbGVjdGVkVmFsdWUpOyAvLyBTb3J0XHJcbiAgICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZSh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnNlbGVjdGVkVmFsdWUpKTtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyQ2hhbmdlLmVtaXQodGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnNlbGVjdGVkVmFsdWUpKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVQcmV2TmV4dChkaXJlY3Rpb246ICdwcmV2JyB8ICduZXh0JywgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHRoaXMudmFsdWVGb3JSYW5nZVNob3c7XHJcbiAgICAgIGNvbnN0IHNob3dNaWRkbGUgPSAhc3RhcnQuYWRkTW9udGhzKDEpLmlzU2FtZShlbmQsICdtb250aCcpOyAvLyBPbmUgbW9udGggZGlmZiB0aGVuIGRvbid0IHNob3cgbWlkZGxlIHByZXYvbmV4dFxyXG4gICAgICBpZiAoKHBhcnRUeXBlID09PSAnbGVmdCcgJiYgZGlyZWN0aW9uID09PSAnbmV4dCcpIHx8IChwYXJ0VHlwZSA9PT0gJ3JpZ2h0JyAmJiBkaXJlY3Rpb24gPT09ICdwcmV2JykpIHtcclxuICAgICAgICByZXR1cm4gc2hvd01pZGRsZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UGFuZWxNb2RlKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IFBhbmVsTW9kZSB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhbmVsTW9kZVt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSBhcyBQYW5lbE1vZGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5wYW5lbE1vZGUgYXMgUGFuZWxNb2RlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gR2V0IHNpbmdsZSB2YWx1ZSBvciBwYXJ0IHZhbHVlIG9mIGEgcmFuZ2VcclxuICBnZXRWYWx1ZShwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBDYW5keURhdGUge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICByZXR1cm4gKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW10pW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWVCeVNlbGVjdG9yKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IENhbmR5RGF0ZSB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlU2hvdyA9IHRoaXMuc2hvd1RpbWVQaWNrZXIgPyB0aGlzLnZhbHVlIDogdGhpcy52YWx1ZUZvclJhbmdlU2hvdzsgLy8gVXNlIHRoZSByZWFsIHRpbWUgdmFsdWUgdGhhdCB3aXRob3V0IGRlY29yYXRpb25zIHdoZW4gdGltZXBpY2tlciBpcyBzaG93biB1cFxyXG4gICAgICByZXR1cm4gKHZhbHVlU2hvdyBhcyBDYW5keURhdGVbXSlbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJ0VHlwZU1hcFtwYXJ0VHlwZSFdO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlzUmFuZ2UgPyB0aGlzLnBsYWNlaG9sZGVyW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldIDogKHRoaXMucGxhY2Vob2xkZXIgYXMgc3RyaW5nKTtcclxuICB9XHJcblxyXG4gIGhhc1NlbGVjdGVkVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZhbHVlICYmICEhdGhpcy5zZWxlY3RlZFZhbHVlWzFdICYmICEhdGhpcy5zZWxlY3RlZFZhbHVlWzBdO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZWRTdGFydFRpbWUgPSAodmFsdWU6IERhdGUgfCBEYXRlW10pOiBEaXNhYmxlZFRpbWVDb25maWcgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRUaW1lICYmIHRoaXMuZGlzYWJsZWRUaW1lKHZhbHVlLCAnc3RhcnQnKTtcclxuICB9O1xyXG5cclxuICBkaXNhYmxlZEVuZFRpbWUgPSAodmFsdWU6IERhdGUgfCBEYXRlW10pOiBEaXNhYmxlZFRpbWVDb25maWcgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRUaW1lICYmIHRoaXMuZGlzYWJsZWRUaW1lKHZhbHVlLCAnZW5kJyk7XHJcbiAgfTtcclxuXHJcbiAgaXNBbGxvd2VkU2VsZWN0ZWRWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWU7XHJcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiBzZWxlY3RlZFZhbHVlWzBdICYmIHNlbGVjdGVkVmFsdWVbMV0pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBpc0FsbG93ZWREYXRlKHNlbGVjdGVkVmFsdWVbMF0sIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkU3RhcnRUaW1lKSAmJlxyXG4gICAgICAgIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVsxXSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRFbmRUaW1lKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdGltZVBpY2tlckRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmhhc1RpbWVQaWNrZXIpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICByZXR1cm4gIXRoaXMuaGFzU2VsZWN0ZWRWYWx1ZSgpIHx8ICEhdGhpcy5ob3ZlclZhbHVlLmxlbmd0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9rRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuaGFzVGltZVBpY2tlcikge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiAhdGhpcy5pc0FsbG93ZWRTZWxlY3RlZFZhbHVlKCkgfHwgIXRoaXMuaGFzU2VsZWN0ZWRWYWx1ZSgpIHx8ICEhdGhpcy5ob3ZlclZhbHVlLmxlbmd0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlID8gIWlzQWxsb3dlZERhdGUodGhpcy52YWx1ZSBhcyBDYW5keURhdGUsIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkVGltZSkgOiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRpbWVPcHRpb25zKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IG51bGwge1xyXG4gICAgaWYgKHRoaXMuc2hvd1RpbWUgJiYgdGhpcy50aW1lT3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gdGhpcy50aW1lT3B0aW9ucyBpbnN0YW5jZW9mIEFycmF5ID8gdGhpcy50aW1lT3B0aW9uc1t0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSA6IHRoaXMudGltZU9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tQcmVzZXRSYW5nZSh2YWw6IFByZXNldFJhbmdlc1trZXlvZiBQcmVzZXRSYW5nZXNdKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicgPyB2YWwoKSA6IHZhbDtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKFtuZXcgQ2FuZHlEYXRlKHZhbHVlWzBdKSwgbmV3IENhbmR5RGF0ZSh2YWx1ZVsxXSldKTtcclxuICAgICAgdGhpcy5yZXN1bHRPay5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblByZXNldFJhbmdlTW91c2VMZWF2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBvbkhvdmVyUHJlc2V0UmFuZ2UodmFsOiBQcmVzZXRSYW5nZXNba2V5b2YgUHJlc2V0UmFuZ2VzXSk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5ob3ZlclZhbHVlID0gW25ldyBDYW5keURhdGUodmFsWzBdKSwgbmV3IENhbmR5RGF0ZSh2YWxbMV0pXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE9iamVjdEtleXMob2JqOiBvYmplY3QpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9zZVBpY2tlclBhbmVsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbG9zZVBpY2tlci5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFySG92ZXJWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZFRpbWVPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2hvd1RpbWUpIHtcclxuICAgICAgY29uc3Qgc2hvd1RpbWUgPSB0eXBlb2YgdGhpcy5zaG93VGltZSA9PT0gJ29iamVjdCcgPyB0aGlzLnNob3dUaW1lIDoge307XHJcbiAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IFt0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHZhbHVlWzBdLCAnc3RhcnQnKSwgdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB2YWx1ZVsxXSwgJ2VuZCcpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRpbWVPcHRpb25zID0gdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGltZU9wdGlvbnMgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvdmVycmlkZVRpbWVPcHRpb25zKG9yaWdpbjogU3VwcG9ydFRpbWVPcHRpb25zLCB2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0aWFsPzogRGlzYWJsZWRUaW1lUGFydGlhbCk6IFN1cHBvcnRUaW1lT3B0aW9ucyB7XHJcbiAgICBsZXQgZGlzYWJsZWRUaW1lRm47XHJcbiAgICBpZiAocGFydGlhbCkge1xyXG4gICAgICBkaXNhYmxlZFRpbWVGbiA9IHBhcnRpYWwgPT09ICdzdGFydCcgPyB0aGlzLmRpc2FibGVkU3RhcnRUaW1lIDogdGhpcy5kaXNhYmxlZEVuZFRpbWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNhYmxlZFRpbWVGbiA9IHRoaXMuZGlzYWJsZWRUaW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgLi4ub3JpZ2luLCAuLi5nZXRUaW1lQ29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWVGbikgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmFsdWVGcm9tSW5wdXQodmFsdWU6IENvbXBhdGlibGVWYWx1ZSwgZW1pdFZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKGVtaXRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmJ1aWxkVGltZU9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIC8vIFNldCB2YWx1ZSBhbmQgdHJpZ2dlciBjaGFuZ2UgZXZlbnRcclxuICBwcml2YXRlIHNldFZhbHVlKHZhbHVlOiBDb21wYXRpYmxlVmFsdWUpOiB2b2lkIHtcclxuICAgIC8vIFRPRE86IFN5bmMgb3JpZ2luYWwgdGltZSAoTk9URTogdGhpcyBzaG91bGQgdGFrZSBtb3JlIGNhcmUgb2YgYmVjYXVzZSBpdCBtYXkgZGVwZW5kIG9uIG1hbnkgY2hhbmdlIHNvdXJjZXMpXHJcbiAgICAvLyBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAvLyAgIC8vIFRPRE86IFN5bmMgdGltZVxyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgaWYgKHRoaXMudmFsdWUpIHsgLy8gU3luYyB0aW1lIGZyb20gdGhlIG9yaWdpbmFsIG9uZSBpZiBpdCdzIGF2YWlsYWJsZVxyXG4gICAgLy8gICAgIG5ld1ZhbHVlID0gdGhpcy5vdmVycmlkZUhtcyh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSwgbmV3VmFsdWUgYXMgQ2FuZHlEYXRlKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG92ZXJyaWRlSG1zKGZyb206IENhbmR5RGF0ZSwgdG86IENhbmR5RGF0ZSk6IENhbmR5RGF0ZSB8IG51bGwge1xyXG4gICAgaWYgKCFmcm9tIHx8ICF0bykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiB0by5zZXRIbXMoZnJvbS5nZXRIb3VycygpLCBmcm9tLmdldE1pbnV0ZXMoKSwgZnJvbS5nZXRTZWNvbmRzKCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgaXQncyBhIHZhbGlkIHJhbmdlIHZhbHVlXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkUmFuZ2UodmFsdWU6IENhbmR5RGF0ZVtdKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdmFsdWU7XHJcbiAgICAgIHJldHVybiAhIShzdGFydCAmJiBlbmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3JtYWxpemVSYW5nZVZhbHVlKHZhbHVlOiBDYW5keURhdGVbXSk6IENhbmR5RGF0ZVtdIHtcclxuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHZhbHVlO1xyXG4gICAgY29uc3QgbmV3U3RhcnQgPSBzdGFydCB8fCBuZXcgQ2FuZHlEYXRlKCk7XHJcbiAgICBjb25zdCBuZXdFbmQgPSBlbmQgJiYgZW5kLmlzU2FtZU1vbnRoKG5ld1N0YXJ0KSA/IGVuZC5hZGRNb250aHMoMSkgOiBlbmQgfHwgbmV3U3RhcnQuYWRkTW9udGhzKDEpO1xyXG4gICAgcmV0dXJuIFtuZXdTdGFydCwgbmV3RW5kXTtcclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgaXNFbXB0eVJhbmdlVmFsdWUodmFsdWU6IENhbmR5RGF0ZVtdKTogYm9vbGVhbiB7XHJcbiAgLy8gICByZXR1cm4gIXZhbHVlIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5ldmVyeSgodmFsKSA9PiAhdmFsKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIFJlbmV3IGFuZCBzZXQgYSByYW5nZSB2YWx1ZSB0byB0cmlnZ2VyIHN1Yi1jb21wb25lbnQncyBjaGFuZ2UgZGV0ZWN0aW9uXHJcbiAgcHJpdmF0ZSBzZXRSYW5nZVZhbHVlKHBhcnRUeXBlOiBSYW5nZVBhcnRUeXBlLCB2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBjb25zdCByZWYgPSAodGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnNlbGVjdGVkVmFsdWUgYXMgQ2FuZHlEYXRlW10pKTtcclxuICAgIHJlZlt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9uZVJhbmdlRGF0ZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBDYW5keURhdGVbXSB7XHJcbiAgICByZXR1cm4gW3ZhbHVlWzBdICYmIHZhbHVlWzBdLmNsb25lKCksIHZhbHVlWzFdICYmIHZhbHVlWzFdLmNsb25lKCldIGFzIENhbmR5RGF0ZVtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsQXJyYXkoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghdGhpc1trZXldIHx8ICFBcnJheS5pc0FycmF5KHRoaXNba2V5XSkpIHtcclxuICAgICAgdGhpc1trZXldID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSYW5nZVBhcnRUeXBlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcclxuIiwiPGRpdlxyXG4gIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXBpY2tlci1jb250YWluZXIge3sgZHJvcGRvd25DbGFzc05hbWUgfX0ge3tcclxuICAgIHByZWZpeENsc1xyXG4gIH19LXBpY2tlci1jb250YWluZXItcGxhY2VtZW50LWJvdHRvbUxlZnRcIlxyXG4gIFtuZ1N0eWxlXT1cInBvcHVwU3R5bGVcIlxyXG4+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0ge3sgc2hvd1dlZWsgPyBwcmVmaXhDbHMgKyAnLXdlZWstbnVtYmVyJyA6ICcnIH19IHt7XHJcbiAgICAgIGhhc1RpbWVQaWNrZXIgPyBwcmVmaXhDbHMgKyAnLXRpbWUnIDogJydcclxuICAgIH19IHt7IGlzUmFuZ2UgPyBwcmVmaXhDbHMgKyAnLXJhbmdlJyA6ICcnIH19XCJcclxuICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wYW5lbFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzUmFuZ2VcIj5cclxuICAgICAgICA8IS0tIFNpbmdsZSBPTkxZIC0tPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxDYWxlbmRhcklucHV0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUtcGFuZWxcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNSYW5nZTsgZWxzZSB0cGxTaW5nbGVQYXJ0XCI+XHJcbiAgICAgICAgICA8IS0tIFJhbmdlIFNlbGVjdG9ycyAtLT5cclxuICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSYW5nZVBhcnQ7IGNvbnRleHQ6IHsgcGFydFR5cGU6ICdsZWZ0JyB9XCJcclxuICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FsZW5kYXItcmFuZ2UtbWlkZGxlXCI+fjwvZGl2PlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJhbmdlUGFydDsgY29udGV4dDogeyBwYXJ0VHlwZTogJ3JpZ2h0JyB9XCJcclxuICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1JhbmdlXCI+XHJcbiAgICAgICAgICA8IS0tIFNpbmdsZSBPTkxZIC0tPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbEZvb3RlclwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzUmFuZ2VcIj5cclxuICAgICAgICA8IS0tIFJhbmdlIE9OTFkgLS0+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbEZvb3RlclwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjdHBsQ2FsZW5kYXJJbnB1dCBsZXQtcGFydFR5cGU9XCJwYXJ0VHlwZVwiPlxyXG4gIDxjYWxlbmRhci1pbnB1dFxyXG4gICAgW3ZhbHVlXT1cImdldFZhbHVlKHBhcnRUeXBlKVwiXHJcbiAgICAodmFsdWVDaGFuZ2UpPVwiY2hhbmdlVmFsdWVGcm9tSW5wdXQoJGV2ZW50LCBwYXJ0VHlwZSlcIlxyXG4gICAgW2xvY2FsZV09XCJsb2NhbGVcIlxyXG4gICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxyXG4gICAgW2Zvcm1hdF09XCJmb3JtYXRcIlxyXG4gICAgW2F1dG9Gb2N1c109XCJwYXJ0VHlwZSAhPT0gJ3JpZ2h0J1wiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwiZ2V0UGxhY2Vob2xkZXIocGFydFR5cGUpXCJcclxuICA+PC9jYWxlbmRhci1pbnB1dD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjdHBsSW5uZXJQb3B1cCBsZXQtcGFydFR5cGU9XCJwYXJ0VHlwZVwiPlxyXG4gIDxpbm5lci1wb3B1cFxyXG4gICAgW3Nob3dXZWVrXT1cInNob3dXZWVrXCJcclxuICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcclxuICAgIFtzaG93VGltZVBpY2tlcl09XCJoYXNUaW1lUGlja2VyICYmIHNob3dUaW1lUGlja2VyXCJcclxuICAgIFt0aW1lT3B0aW9uc109XCJnZXRUaW1lT3B0aW9ucyhwYXJ0VHlwZSlcIlxyXG4gICAgW3BhbmVsTW9kZV09XCJnZXRQYW5lbE1vZGUocGFydFR5cGUpXCJcclxuICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwib25QYW5lbE1vZGVDaGFuZ2UoJGV2ZW50LCBwYXJ0VHlwZSlcIlxyXG4gICAgW3ZhbHVlXT1cImdldFZhbHVlQnlTZWxlY3RvcihwYXJ0VHlwZSlcIlxyXG4gICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxyXG4gICAgW2RhdGVSZW5kZXJdPVwiZGF0ZVJlbmRlclwiXHJcbiAgICBbc2VsZWN0ZWRWYWx1ZV09XCJzZWxlY3RlZFZhbHVlXCJcclxuICAgIFtob3ZlclZhbHVlXT1cImhvdmVyVmFsdWVcIlxyXG4gICAgW2VuYWJsZVByZXZdPVwiZW5hYmxlUHJldk5leHQoJ3ByZXYnLCBwYXJ0VHlwZSlcIlxyXG4gICAgW2VuYWJsZU5leHRdPVwiZW5hYmxlUHJldk5leHQoJ25leHQnLCBwYXJ0VHlwZSlcIlxyXG4gICAgKGRheUhvdmVyKT1cIm9uRGF5SG92ZXIoJGV2ZW50KVwiXHJcbiAgICAoc2VsZWN0RGF0ZSk9XCJjaGFuZ2VWYWx1ZUZyb21TZWxlY3QoJGV2ZW50KVwiXHJcbiAgICAoc2VsZWN0VGltZSk9XCJvblNlbGVjdFRpbWUoJGV2ZW50LCBwYXJ0VHlwZSlcIlxyXG4gICAgKGhlYWRlckNoYW5nZSk9XCJvbkhlYWRlckNoYW5nZSgkZXZlbnQsIHBhcnRUeXBlKVwiXHJcbiAgPjwvaW5uZXItcG9wdXA+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI3RwbEZvb3Rlcj5cclxuICA8Y2FsZW5kYXItZm9vdGVyXHJcbiAgICAqbmdJZj1cImhhc0Zvb3RlclwiXHJcbiAgICBbbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICBbc2hvd1RvZGF5XT1cInNob3dUb2RheVwiXHJcbiAgICBbaGFzVGltZVBpY2tlcl09XCJoYXNUaW1lUGlja2VyXCJcclxuICAgIFt0aW1lUGlja2VyRGlzYWJsZWRdPVwidGltZVBpY2tlckRpc2FibGVkKClcIlxyXG4gICAgW29rRGlzYWJsZWRdPVwib2tEaXNhYmxlZCgpXCJcclxuICAgIFtleHRyYUZvb3Rlcl09XCJleHRyYUZvb3RlclwiXHJcbiAgICBbcmFuZ2VRdWlja1NlbGVjdG9yXT1cInJhbmdlcyA/IHRwbFJhbmdlUXVpY2tTZWxlY3RvciA6IG51bGxcIlxyXG4gICAgWyhzaG93VGltZVBpY2tlcildPVwic2hvd1RpbWVQaWNrZXJcIlxyXG4gICAgKHNob3dUaW1lUGlja2VyQ2hhbmdlKT1cIm9uU2hvd1RpbWVQaWNrZXJDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAoY2xpY2tPayk9XCJvbkNsaWNrT2soKVwiXHJcbiAgICAoY2xpY2tUb2RheSk9XCJvbkNsaWNrVG9kYXkoJGV2ZW50KVwiXHJcbiAgPjwvY2FsZW5kYXItZm9vdGVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPCEtLSBTaW5nbGUgT05MWSAtLT5cclxuPG5nLXRlbXBsYXRlICN0cGxTaW5nbGVQYXJ0PlxyXG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxJbm5lclBvcHVwXCI+PC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48IS0tIFJhbmdlIE9OTFkgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsUmFuZ2VQYXJ0IGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XHJcbiAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1yYW5nZS1wYXJ0IHt7IHByZWZpeENscyB9fS1yYW5nZS17eyBwYXJ0VHlwZSB9fVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAqbmdUZW1wbGF0ZU91dGxldD1cInRwbENhbGVuZGFySW5wdXQ7IGNvbnRleHQ6IHsgcGFydFR5cGU6IHBhcnRUeXBlIH1cIlxyXG4gICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgPGRpdiBzdHlsZT1cIm91dGxpbmU6IG5vbmU7XCI+XHJcbiAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cInRwbElubmVyUG9wdXA7IGNvbnRleHQ6IHsgcGFydFR5cGU6IHBhcnRUeXBlIH1cIlxyXG4gICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwhLS0gUmFuZ2UgT05MWTogUmFuZ2UgUXVpY2sgU2VsZWN0b3IgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsUmFuZ2VRdWlja1NlbGVjdG9yPlxyXG4gIDxhXHJcbiAgICAqbmdGb3I9XCJsZXQgbmFtZSBvZiBnZXRPYmplY3RLZXlzKHJhbmdlcylcIlxyXG4gICAgKGNsaWNrKT1cIm9uQ2xpY2tQcmVzZXRSYW5nZShyYW5nZXNbbmFtZV0pXCJcclxuICAgIChtb3VzZWVudGVyKT1cIm9uSG92ZXJQcmVzZXRSYW5nZShyYW5nZXNbbmFtZV0pXCJcclxuICAgIChtb3VzZWxlYXZlKT1cIm9uUHJlc2V0UmFuZ2VNb3VzZUxlYXZlKClcIlxyXG4gICAgPnt7IG5hbWUgfX08L2FcclxuICA+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==