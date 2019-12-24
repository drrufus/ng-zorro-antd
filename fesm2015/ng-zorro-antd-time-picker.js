import { __decorate, __metadata } from 'tslib';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, ɵɵlistener, ɵɵProvidersFeature, ɵsetClassMetadata, Directive, Input, HostListener, ɵɵgetCurrentView, ɵɵelementStart, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵpipe, ɵɵelementEnd, ɵɵclassMapInterpolate2, ɵɵadvance, ɵɵtextInterpolate1, ɵɵpipeBind2, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵproperty, ɵɵclassMapInterpolate1, ChangeDetectorRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵclassMap, ɵɵstyleProp, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ɵɵattribute, ɵɵpipeBind1, EventEmitter, Renderer2, ɵɵstaticViewQuery, ɵɵelement, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { isNotNil, reqAnimFrame, NzUpdateHostClassService, InputBoolean, NzConfigService, NzConnectedOverlayDirective, slideMotion, WithConfig, NzOverlayModule } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nPipe, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NgIf, NgForOf, NgTemplateOutlet, DecimalPipe, NgClass, CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTimeValueAccessorDirective {
    constructor(dateHelper, elementRef) {
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
    }
    keyup() {
        this.changed();
    }
    blur() {
        this.touched();
    }
    changed() {
        if (this._onChange) {
            const value = this.dateHelper.parseTime(this.elementRef.nativeElement.value);
            this._onChange(value);
        }
    }
    touched() {
        if (this._onTouch) {
            this._onTouch();
        }
    }
    setRange() {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    }
    writeValue(value) {
        this.elementRef.nativeElement.value = this.dateHelper.format(value, this.nzTime);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouch = fn;
    }
}
/** @nocollapse */ NzTimeValueAccessorDirective.ɵfac = function NzTimeValueAccessorDirective_Factory(t) { return new (t || NzTimeValueAccessorDirective)(ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(ElementRef)); };
/** @nocollapse */ NzTimeValueAccessorDirective.ɵdir = ɵɵdefineDirective({ type: NzTimeValueAccessorDirective, selectors: [["input", "nzTime", ""]], hostBindings: function NzTimeValueAccessorDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵlistener("keyup", function NzTimeValueAccessorDirective_keyup_HostBindingHandler($event) { return ctx.keyup(); })("blur", function NzTimeValueAccessorDirective_blur_HostBindingHandler($event) { return ctx.blur(); });
    } }, inputs: { nzTime: "nzTime" }, exportAs: ["nzTime"], features: [ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimeValueAccessorDirective, multi: true }])] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTimeValueAccessorDirective, [{
        type: Directive,
        args: [{
                selector: 'input[nzTime]',
                exportAs: 'nzTime',
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimeValueAccessorDirective, multi: true }]
            }]
    }], function () { return [{ type: DateHelperService }, { type: ElementRef }]; }, { nzTime: [{
            type: Input
        }], keyup: [{
            type: HostListener,
            args: ['keyup']
        }], blur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class TimeHolder {
    constructor() {
        this._seconds = undefined;
        this._hours = undefined;
        this._minutes = undefined;
        this._selected12Hours = undefined;
        this._use12Hours = false;
        this._defaultOpenValue = new Date();
        this._changes = new Subject();
    }
    setDefaultValueIfNil() {
        if (!isNotNil(this._value)) {
            this._value = new Date(this.defaultOpenValue);
        }
    }
    setMinutes(value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.minutes = value;
        return this;
    }
    setHours(value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.hours = value;
        return this;
    }
    setSeconds(value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.seconds = value;
        return this;
    }
    setUse12Hours(value) {
        this._use12Hours = value;
        return this;
    }
    get changes() {
        return this._changes.asObservable();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (value !== this._value) {
            this._value = value;
            if (isNotNil(this._value)) {
                this._hours = this._value.getHours();
                this._minutes = this._value.getMinutes();
                this._seconds = this._value.getSeconds();
                if (this._use12Hours && isNotNil(this._hours)) {
                    this._selected12Hours = this._hours >= 12 ? 'PM' : 'AM';
                }
            }
            else {
                this._clear();
            }
        }
    }
    setValue(value, use12Hours) {
        if (isNotNil(use12Hours)) {
            this._use12Hours = use12Hours;
        }
        this.value = value;
        return this;
    }
    clear() {
        this._clear();
        this.update();
    }
    get isEmpty() {
        return !(isNotNil(this._hours) || isNotNil(this._minutes) || isNotNil(this._seconds));
    }
    _clear() {
        this._hours = undefined;
        this._minutes = undefined;
        this._seconds = undefined;
        this._selected12Hours = undefined;
    }
    update() {
        if (this.isEmpty) {
            this._value = undefined;
        }
        else {
            if (!isNotNil(this._hours)) {
                this._hours = this.defaultHours;
            }
            else {
                this._value.setHours(this.hours);
            }
            if (!isNotNil(this._minutes)) {
                this._minutes = this.defaultMinutes;
            }
            else {
                this._value.setMinutes(this.minutes);
            }
            if (!isNotNil(this._seconds)) {
                this._seconds = this.defaultSeconds;
            }
            else {
                this._value.setSeconds(this.seconds);
            }
            if (this._use12Hours) {
                if (!isNotNil(this._selected12Hours)) {
                    this._selected12Hours = this.default12Hours;
                }
                if (this.selected12Hours === 'PM' && this._hours < 12) {
                    this._hours += 12;
                    this._value.setHours(this._hours);
                }
                if (this.selected12Hours === 'AM' && this._hours >= 12) {
                    this._hours -= 12;
                    this._value.setHours(this._hours);
                }
            }
            this._value = new Date(this._value);
        }
        this.changed();
    }
    changed() {
        this._changes.next(this._value);
    }
    /**
     * @description
     * UI view hours
     * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
     */
    get viewHours() {
        return this._use12Hours && isNotNil(this._hours) ? this.calculateViewHour(this._hours) : this._hours;
    }
    /**
     * @description
     * Value hours
     * Get realHours and its range is [0, 1, 2, ..., 22, 23]
     */
    get realHours() {
        return this._hours;
    }
    /**
     * @description
     * Same as realHours
     * @see realHours
     */
    get hours() {
        return this._hours;
    }
    /**
     * @description
     * Set viewHours to realHours
     */
    set hours(value) {
        if (value !== this._hours) {
            if (this._use12Hours) {
                if (this.selected12Hours === 'PM' && value !== 12) {
                    this._hours = value + 12;
                }
                else if (this.selected12Hours === 'AM' && value === 12) {
                    this._hours = 0;
                }
                else {
                    this._hours = value;
                }
            }
            else {
                this._hours = value;
            }
            this.update();
        }
    }
    get minutes() {
        return this._minutes;
    }
    set minutes(value) {
        if (value !== this._minutes) {
            this._minutes = value;
            this.update();
        }
    }
    get seconds() {
        return this._seconds;
    }
    set seconds(value) {
        if (value !== this._seconds) {
            this._seconds = value;
            this.update();
        }
    }
    get selected12Hours() {
        return this._selected12Hours;
    }
    set selected12Hours(value) {
        if (value.toUpperCase() !== this._selected12Hours) {
            this._selected12Hours = value.toUpperCase();
            this.update();
        }
    }
    get defaultOpenValue() {
        return this._defaultOpenValue;
    }
    set defaultOpenValue(value) {
        if (this._defaultOpenValue !== value) {
            this._defaultOpenValue = value;
            this.update();
        }
    }
    setDefaultOpenValue(value) {
        this.defaultOpenValue = value;
        return this;
    }
    /**
     * @description
     * Get deafultViewHours when defaultOpenValue is setted
     * @see viewHours
     */
    get defaultViewHours() {
        const hours = this._defaultOpenValue.getHours();
        return this._use12Hours && isNotNil(hours) ? this.calculateViewHour(hours) : hours;
    }
    /**
     * @description
     * Get defaultRealHours when defaultOpenValue is setted
     * @see realHours
     */
    get defaultRealHours() {
        return this._defaultOpenValue.getHours();
    }
    /**
     * @description
     * Same as defaultRealHours
     */
    get defaultHours() {
        return this._defaultOpenValue.getHours();
    }
    get defaultMinutes() {
        return this._defaultOpenValue.getMinutes();
    }
    get defaultSeconds() {
        return this._defaultOpenValue.getSeconds();
    }
    get default12Hours() {
        return this._defaultOpenValue.getHours() >= 12 ? 'PM' : 'AM';
    }
    calculateViewHour(value) {
        const selected12Hours = this._selected12Hours || this.default12Hours;
        if (selected12Hours === 'PM' && value > 12) {
            return value - 12;
        }
        if (selected12Hours === 'AM' && value === 0) {
            return 12;
        }
        return value;
    }
}

const _c0 = ["hourListElement"];
const _c1 = ["minuteListElement"];
const _c2 = ["secondListElement"];
const _c3 = ["use12HoursListElement"];
function NzTimePickerPanelComponent_div_5_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r886 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 5);
    ɵɵlistener("click", function NzTimePickerPanelComponent_div_5_ng_container_3_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r886); const hour_r882 = ɵɵnextContext().$implicit; const ctx_r884 = ɵɵnextContext(2); return ctx_r884.selectHour(hour_r882); });
    ɵɵtext(1);
    ɵɵpipe(2, "number");
    ɵɵelementEnd();
} if (rf & 2) {
    const hour_r882 = ɵɵnextContext().$implicit;
    const ctx_r883 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("\n                ", ctx_r883.isSelectedHour(hour_r882) ? ctx_r883.prefixCls + "-select-option-selected" : "", "\n                ", hour_r882.disabled ? ctx_r883.prefixCls + "-select-option-disabled" : "", "\n              ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 5, hour_r882.index, "2.0-0"), " ");
} }
function NzTimePickerPanelComponent_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTimePickerPanelComponent_div_5_ng_container_3_li_1_Template, 3, 8, "li", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const hour_r882 = ctx.$implicit;
    const ctx_r881 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r881.nzHideDisabledOptions && hour_r882.disabled));
} }
function NzTimePickerPanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", null, 2);
    ɵɵelementStart(2, "ul");
    ɵɵtemplate(3, NzTimePickerPanelComponent_div_5_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r875 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r875.prefixCls, "-select");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r875.hourRange);
} }
function NzTimePickerPanelComponent_div_6_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r894 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 5);
    ɵɵlistener("click", function NzTimePickerPanelComponent_div_6_ng_container_3_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r894); const minute_r890 = ɵɵnextContext().$implicit; const ctx_r892 = ɵɵnextContext(2); return ctx_r892.selectMinute(minute_r890); });
    ɵɵtext(1);
    ɵɵpipe(2, "number");
    ɵɵelementEnd();
} if (rf & 2) {
    const minute_r890 = ɵɵnextContext().$implicit;
    const ctx_r891 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("\n                ", ctx_r891.isSelectedMinute(minute_r890) ? ctx_r891.prefixCls + "-select-option-selected" : "", "\n                ", minute_r890.disabled ? ctx_r891.prefixCls + "-select-option-disabled" : "", "\n              ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 5, minute_r890.index, "2.0-0"), " ");
} }
function NzTimePickerPanelComponent_div_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTimePickerPanelComponent_div_6_ng_container_3_li_1_Template, 3, 8, "li", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const minute_r890 = ctx.$implicit;
    const ctx_r889 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r889.nzHideDisabledOptions && minute_r890.disabled));
} }
function NzTimePickerPanelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", null, 6);
    ɵɵelementStart(2, "ul");
    ɵɵtemplate(3, NzTimePickerPanelComponent_div_6_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r876 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r876.prefixCls, "-select");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r876.minuteRange);
} }
function NzTimePickerPanelComponent_div_7_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r902 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 5);
    ɵɵlistener("click", function NzTimePickerPanelComponent_div_7_ng_container_3_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r902); const second_r898 = ɵɵnextContext().$implicit; const ctx_r900 = ɵɵnextContext(2); return ctx_r900.selectSecond(second_r898); });
    ɵɵtext(1);
    ɵɵpipe(2, "number");
    ɵɵelementEnd();
} if (rf & 2) {
    const second_r898 = ɵɵnextContext().$implicit;
    const ctx_r899 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("\n                ", ctx_r899.isSelectedSecond(second_r898) ? ctx_r899.prefixCls + "-select-option-selected" : "", "\n                ", second_r898.disabled ? ctx_r899.prefixCls + "-select-option-disabled" : "", "\n              ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 5, second_r898.index, "2.0-0"), " ");
} }
function NzTimePickerPanelComponent_div_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTimePickerPanelComponent_div_7_ng_container_3_li_1_Template, 3, 8, "li", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const second_r898 = ctx.$implicit;
    const ctx_r897 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r897.nzHideDisabledOptions && second_r898.disabled));
} }
function NzTimePickerPanelComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", null, 7);
    ɵɵelementStart(2, "ul");
    ɵɵtemplate(3, NzTimePickerPanelComponent_div_7_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r877 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r877.prefixCls, "-select");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r877.secondRange);
} }
function NzTimePickerPanelComponent_div_8_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r910 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 5);
    ɵɵlistener("click", function NzTimePickerPanelComponent_div_8_ng_container_3_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r910); const range_r906 = ɵɵnextContext().$implicit; const ctx_r908 = ɵɵnextContext(2); return ctx_r908.select12Hours(range_r906); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const range_r906 = ɵɵnextContext().$implicit;
    const ctx_r907 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("\n                ", ctx_r907.isSelected12Hours(range_r906) ? ctx_r907.prefixCls + "-select-option-selected" : "", "\n              ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", range_r906.value, " ");
} }
function NzTimePickerPanelComponent_div_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTimePickerPanelComponent_div_8_ng_container_3_li_1_Template, 2, 4, "li", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r905 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r905.nzHideDisabledOptions);
} }
function NzTimePickerPanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", null, 8);
    ɵɵelementStart(2, "ul");
    ɵɵtemplate(3, NzTimePickerPanelComponent_div_8_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r878 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r878.prefixCls, "-select");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r878.use12HoursRange);
} }
function NzTimePickerPanelComponent_div_9_ng_template_1_Template(rf, ctx) { }
function NzTimePickerPanelComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzTimePickerPanelComponent_div_9_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r879 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r879.prefixCls, "-addon");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r879.nzAddOn);
} }
function makeRange(length, step = 1, start = 0) {
    return new Array(Math.ceil(length / step)).fill(0).map((_, i) => (i + start) * step);
}
class NzTimePickerPanelComponent {
    constructor(element, updateCls, cdr) {
        this.element = element;
        this.updateCls = updateCls;
        this.cdr = cdr;
        this._nzHourStep = 1;
        this._nzMinuteStep = 1;
        this._nzSecondStep = 1;
        this.unsubscribe$ = new Subject();
        this._format = 'HH:mm:ss';
        this._allowEmpty = true;
        this.prefixCls = 'ant-time-picker-panel';
        this.time = new TimeHolder();
        this.hourEnabled = true;
        this.minuteEnabled = true;
        this.secondEnabled = true;
        this.enabledColumns = 3;
        this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
        this.nzHideDisabledOptions = false;
        this.nzUse12Hours = false;
        this.opened = false;
        this.nzDefaultOpenValue = new Date();
    }
    set nzAllowEmpty(value) {
        if (isNotNil(value)) {
            this._allowEmpty = value;
        }
    }
    get nzAllowEmpty() {
        return this._allowEmpty;
    }
    set nzDisabledHours(value) {
        this._disabledHours = value;
        if (this._disabledHours) {
            this.buildHours();
        }
    }
    get nzDisabledHours() {
        return this._disabledHours;
    }
    set nzDisabledMinutes(value) {
        if (isNotNil(value)) {
            this._disabledMinutes = value;
            this.buildMinutes();
        }
    }
    get nzDisabledMinutes() {
        return this._disabledMinutes;
    }
    set nzDisabledSeconds(value) {
        if (isNotNil(value)) {
            this._disabledSeconds = value;
            this.buildSeconds();
        }
    }
    get nzDisabledSeconds() {
        return this._disabledSeconds;
    }
    set format(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.enabledColumns = 0;
            const charSet = new Set(value);
            this.hourEnabled = charSet.has('H') || charSet.has('h');
            this.minuteEnabled = charSet.has('m');
            this.secondEnabled = charSet.has('s');
            if (this.hourEnabled) {
                this.enabledColumns++;
            }
            if (this.minuteEnabled) {
                this.enabledColumns++;
            }
            if (this.secondEnabled) {
                this.enabledColumns++;
            }
            if (this.nzUse12Hours) {
                this.build12Hours();
            }
        }
    }
    get format() {
        return this._format;
    }
    set nzHourStep(value) {
        if (isNotNil(value)) {
            this._nzHourStep = value;
            this.buildHours();
        }
    }
    get nzHourStep() {
        return this._nzHourStep;
    }
    set nzMinuteStep(value) {
        if (isNotNil(value)) {
            this._nzMinuteStep = value;
            this.buildMinutes();
        }
    }
    get nzMinuteStep() {
        return this._nzMinuteStep;
    }
    set nzSecondStep(value) {
        if (isNotNil(value)) {
            this._nzSecondStep = value;
            this.buildSeconds();
        }
    }
    get nzSecondStep() {
        return this._nzSecondStep;
    }
    selectInputRange() {
        setTimeout(() => {
            if (this.nzTimeValueAccessorDirective) {
                this.nzTimeValueAccessorDirective.setRange();
            }
        });
    }
    buildHours() {
        let hourRanges = 24;
        let disabledHours = this.nzDisabledHours && this.nzDisabledHours();
        let startIndex = 0;
        if (this.nzUse12Hours) {
            hourRanges = 12;
            if (disabledHours) {
                if (this.time.selected12Hours === 'PM') {
                    /**
                     * Filter and transform hours which greater or equal to 12
                     * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter(i => i >= 12).map(i => (i > 12 ? i - 12 : i));
                }
                else {
                    /**
                     * Filter and transform hours which less than 12
                     * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter(i => i < 12 || i === 24).map(i => (i === 24 || i === 0 ? 12 : i));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map(r => {
            return {
                index: r,
                disabled: this.nzDisabledHours && disabledHours.indexOf(r) !== -1
            };
        });
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            const temp = [...this.hourRange];
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    }
    buildMinutes() {
        this.minuteRange = makeRange(60, this.nzMinuteStep).map(r => {
            return {
                index: r,
                disabled: this.nzDisabledMinutes && this.nzDisabledMinutes(this.time.hours).indexOf(r) !== -1
            };
        });
    }
    buildSeconds() {
        this.secondRange = makeRange(60, this.nzSecondStep).map(r => {
            return {
                index: r,
                disabled: this.nzDisabledSeconds && this.nzDisabledSeconds(this.time.hours, this.time.minutes).indexOf(r) !== -1
            };
        });
    }
    build12Hours() {
        const isUpperForamt = this._format.includes('A');
        this.use12HoursRange = [
            {
                index: 0,
                value: isUpperForamt ? 'AM' : 'am'
            },
            {
                index: 1,
                value: isUpperForamt ? 'PM' : 'pm'
            }
        ];
    }
    buildTimes() {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    }
    selectHour(hour) {
        this.time.setHours(hour.index, hour.disabled);
        this.scrollToSelected(this.hourListElement.nativeElement, hour.index, 120, 'hour');
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    }
    selectMinute(minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
    }
    selectSecond(second) {
        this.time.setSeconds(second.index, second.disabled);
        this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
    }
    select12Hours(value) {
        this.time.selected12Hours = value.value;
        if (this._disabledHours) {
            this.buildHours();
        }
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
        this.scrollToSelected(this.use12HoursListElement.nativeElement, value.index, 120, '12-hour');
    }
    scrollToSelected(instance, index, duration = 0, unit) {
        const transIndex = this.translateIndex(index, unit);
        const currentOption = (instance.children[0].children[transIndex] || instance.children[0].children[0]);
        this.scrollTo(instance, currentOption.offsetTop, duration);
    }
    translateIndex(index, unit) {
        if (unit === 'hour') {
            const disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            return this.calcIndex(disabledHours, this.hourRange.map(item => item.index).indexOf(index));
        }
        else if (unit === 'minute') {
            const disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes(this.time.hours);
            return this.calcIndex(disabledMinutes, this.minuteRange.map(item => item.index).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            const disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds(this.time.hours, this.time.minutes);
            return this.calcIndex(disabledSeconds, this.secondRange.map(item => item.index).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map(item => item.index).indexOf(index));
        }
    }
    scrollTo(element, to, duration) {
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        const difference = to - element.scrollTop;
        const perTick = (difference / duration) * 10;
        reqAnimFrame(() => {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            this.scrollTo(element, to, duration - 10);
        });
    }
    calcIndex(array, index) {
        if (array && array.length && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((pre, value) => {
                    return pre + (value < index ? 1 : 0);
                }, 0));
        }
        else {
            return index;
        }
    }
    changed() {
        if (this.onChange) {
            this.onChange(this.time.value);
        }
    }
    touched() {
        if (this.onTouch) {
            this.onTouch();
        }
    }
    setClassMap() {
        this.updateCls.updateHostClass(this.element.nativeElement, {
            [`${this.prefixCls}`]: true,
            [`${this.prefixCls}-column-${this.enabledColumns}`]: this.nzInDatePicker ? false : true,
            [`${this.prefixCls}-narrow`]: this.enabledColumns < 3,
            [`${this.prefixCls}-placement-bottomLeft`]: this.nzInDatePicker ? false : true
        });
    }
    isSelectedHour(hour) {
        return hour.index === this.time.viewHours || (!isNotNil(this.time.viewHours) && hour.index === this.time.defaultViewHours);
    }
    isSelectedMinute(minute) {
        return minute.index === this.time.minutes || (!isNotNil(this.time.minutes) && minute.index === this.time.defaultMinutes);
    }
    isSelectedSecond(second) {
        return second.index === this.time.seconds || (!isNotNil(this.time.seconds) && second.index === this.time.defaultSeconds);
    }
    isSelected12Hours(value) {
        return (value.value.toUpperCase() === this.time.selected12Hours ||
            (!isNotNil(this.time.selected12Hours) && value.value.toUpperCase() === this.time.default12Hours));
    }
    initPosition() {
        setTimeout(() => {
            if (this.hourEnabled && this.hourListElement) {
                if (isNotNil(this.time.viewHours)) {
                    this.scrollToSelected(this.hourListElement.nativeElement, this.time.viewHours, 0, 'hour');
                }
                else {
                    this.scrollToSelected(this.hourListElement.nativeElement, this.time.defaultViewHours, 0, 'hour');
                }
            }
            if (this.minuteEnabled && this.minuteListElement) {
                if (isNotNil(this.time.minutes)) {
                    this.scrollToSelected(this.minuteListElement.nativeElement, this.time.minutes, 0, 'minute');
                }
                else {
                    this.scrollToSelected(this.minuteListElement.nativeElement, this.time.defaultMinutes, 0, 'minute');
                }
            }
            if (this.secondEnabled && this.secondListElement) {
                if (isNotNil(this.time.seconds)) {
                    this.scrollToSelected(this.secondListElement.nativeElement, this.time.seconds, 0, 'second');
                }
                else {
                    this.scrollToSelected(this.secondListElement.nativeElement, this.time.defaultSeconds, 0, 'second');
                }
            }
            if (this.nzUse12Hours && this.use12HoursListElement) {
                const selectedHours = isNotNil(this.time.selected12Hours) ? this.time.selected12Hours : this.time.default12Hours;
                const index = selectedHours === 'AM' ? 0 : 1;
                this.scrollToSelected(this.use12HoursListElement.nativeElement, index, 0, '12-hour');
            }
        });
    }
    ngOnInit() {
        if (this.nzInDatePicker) {
            this.prefixCls = 'ant-calendar-time-picker';
        }
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.changed();
            this.touched();
        });
        this.buildTimes();
        this.setClassMap();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    ngOnChanges(changes) {
        const { nzUse12Hours, opened, nzDefaultOpenValue } = changes;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue) {
            this.build12Hours();
            this.enabledColumns++;
        }
        if (opened && opened.currentValue) {
            this.initPosition();
            this.selectInputRange();
        }
        if (nzDefaultOpenValue) {
            const value = nzDefaultOpenValue.currentValue;
            if (isNotNil(value)) {
                this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
            }
        }
    }
    writeValue(value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
}
/** @nocollapse */ NzTimePickerPanelComponent.ɵfac = function NzTimePickerPanelComponent_Factory(t) { return new (t || NzTimePickerPanelComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzTimePickerPanelComponent.ɵcmp = ɵɵdefineComponent({ type: NzTimePickerPanelComponent, selectors: [["nz-time-picker-panel"]], viewQuery: function NzTimePickerPanelComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(NzTimeValueAccessorDirective, true);
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
        ɵɵviewQuery(_c2, true);
        ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTimeValueAccessorDirective = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hourListElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.minuteListElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.secondListElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.use12HoursListElement = _t.first);
    } }, inputs: { nzInDatePicker: "nzInDatePicker", nzAddOn: "nzAddOn", nzHideDisabledOptions: "nzHideDisabledOptions", nzClearText: "nzClearText", nzPlaceHolder: "nzPlaceHolder", nzUse12Hours: "nzUse12Hours", opened: "opened", nzDefaultOpenValue: "nzDefaultOpenValue", nzAllowEmpty: "nzAllowEmpty", nzDisabledHours: "nzDisabledHours", nzDisabledMinutes: "nzDisabledMinutes", nzDisabledSeconds: "nzDisabledSeconds", format: "format", nzHourStep: "nzHourStep", nzMinuteStep: "nzMinuteStep", nzSecondStep: "nzSecondStep" }, exportAs: ["nzTimePickerPanel"], features: [ɵɵProvidersFeature([NzUpdateHostClassService, { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]), ɵɵNgOnChangesFeature()], decls: 10, vars: 25, consts: [["type", "text", 3, "placeholder", "nzTime", "ngModel", "ngModelChange", "blur"], [3, "class", 4, "ngIf"], ["hourListElement", ""], [4, "ngFor", "ngForOf"], [3, "class", "click", 4, "ngIf"], [3, "click"], ["minuteListElement", ""], ["secondListElement", ""], ["use12HoursListElement", ""], [3, "ngTemplateOutlet"]], template: function NzTimePickerPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div");
        ɵɵelementStart(2, "div");
        ɵɵelementStart(3, "input", 0);
        ɵɵlistener("ngModelChange", function NzTimePickerPanelComponent_Template_input_ngModelChange_3_listener($event) { return ctx.time.value = $event; })("blur", function NzTimePickerPanelComponent_Template_input_blur_3_listener($event) { return ctx.time.changed(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "div");
        ɵɵtemplate(5, NzTimePickerPanelComponent_div_5_Template, 4, 4, "div", 1);
        ɵɵtemplate(6, NzTimePickerPanelComponent_div_6_Template, 4, 4, "div", 1);
        ɵɵtemplate(7, NzTimePickerPanelComponent_div_7_Template, 4, 4, "div", 1);
        ɵɵtemplate(8, NzTimePickerPanelComponent_div_8_Template, 4, 4, "div", 1);
        ɵɵelementEnd();
        ɵɵtemplate(9, NzTimePickerPanelComponent_div_9_Template, 2, 4, "div", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap(ctx.nzInDatePicker ? ctx.prefixCls + "-panel" : "");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate2("", ctx.prefixCls, "-inner ", ctx.nzInDatePicker ? ctx.prefixCls + "-column-" + ctx.enabledColumns : "", "");
        ɵɵstyleProp("width", ctx.nzInDatePicker ? null : ctx.enabledColumns * 56, "px");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input-wrap");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input");
        ɵɵproperty("placeholder", ctx.nzPlaceHolder)("nzTime", ctx.format)("ngModel", ctx.time.value);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-combobox");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.hourEnabled);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.minuteEnabled);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.secondEnabled);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzUse12Hours);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzAddOn);
    } }, directives: [NzTimeValueAccessorDirective, DefaultValueAccessor, NgControlStatus, NgModel, NgIf, NgForOf, NgTemplateOutlet], pipes: [DecimalPipe], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTimePickerPanelComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-time-picker-panel',
                exportAs: 'nzTimePickerPanel',
                templateUrl: './nz-time-picker-panel.component.html',
                providers: [NzUpdateHostClassService, { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]
            }]
    }], function () { return [{ type: ElementRef }, { type: NzUpdateHostClassService }, { type: ChangeDetectorRef }]; }, { nzTimeValueAccessorDirective: [{
            type: ViewChild,
            args: [NzTimeValueAccessorDirective, { static: false }]
        }], hourListElement: [{
            type: ViewChild,
            args: ['hourListElement', { static: false }]
        }], minuteListElement: [{
            type: ViewChild,
            args: ['minuteListElement', { static: false }]
        }], secondListElement: [{
            type: ViewChild,
            args: ['secondListElement', { static: false }]
        }], use12HoursListElement: [{
            type: ViewChild,
            args: ['use12HoursListElement', { static: false }]
        }], nzInDatePicker: [{
            type: Input
        }], nzAddOn: [{
            type: Input
        }], nzHideDisabledOptions: [{
            type: Input
        }], nzClearText: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzUse12Hours: [{
            type: Input
        }], opened: [{
            type: Input
        }], nzDefaultOpenValue: [{
            type: Input
        }], nzAllowEmpty: [{
            type: Input
        }], nzDisabledHours: [{
            type: Input
        }], nzDisabledMinutes: [{
            type: Input
        }], nzDisabledSeconds: [{
            type: Input
        }], format: [{
            type: Input
        }], nzHourStep: [{
            type: Input
        }], nzMinuteStep: [{
            type: Input
        }], nzSecondStep: [{
            type: Input
        }] }); })();

const _c0$1 = ["inputElement"];
function NzTimePickerComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r872 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 6);
    ɵɵlistener("click", function NzTimePickerComponent_i_5_Template_i_click_0_listener($event) { ɵɵrestoreView(_r872); const ctx_r871 = ɵɵnextContext(); return ctx_r871.onClickClearBtn(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r869 = ɵɵnextContext();
    ɵɵattribute("aria-label", ctx_r869.nzClearText)("title", ctx_r869.nzClearText);
} }
function NzTimePickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r874 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-time-picker-panel", 7);
    ɵɵlistener("ngModelChange", function NzTimePickerComponent_ng_template_6_Template_nz_time_picker_panel_ngModelChange_0_listener($event) { ɵɵrestoreView(_r874); const ctx_r873 = ɵɵnextContext(); return ctx_r873.value = $event; });
    ɵɵpipe(1, "nzI18n");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r870 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r870.nzPopupClassName)("@slideMotion", "bottom")("format", ctx_r870.nzFormat)("nzHourStep", ctx_r870.nzHourStep)("nzMinuteStep", ctx_r870.nzMinuteStep)("nzSecondStep", ctx_r870.nzSecondStep)("nzDisabledHours", ctx_r870.nzDisabledHours)("nzDisabledMinutes", ctx_r870.nzDisabledMinutes)("nzDisabledSeconds", ctx_r870.nzDisabledSeconds)("nzPlaceHolder", ctx_r870.nzPlaceHolder || ɵɵpipeBind1(1, 18, "TimePicker.placeholder"))("nzHideDisabledOptions", ctx_r870.nzHideDisabledOptions)("nzUse12Hours", ctx_r870.nzUse12Hours)("nzDefaultOpenValue", ctx_r870.nzDefaultOpenValue)("nzAddOn", ctx_r870.nzAddOn)("opened", ctx_r870.nzOpen)("nzClearText", ctx_r870.nzClearText)("nzAllowEmpty", ctx_r870.nzAllowEmpty)("ngModel", ctx_r870.value);
} }
const NZ_CONFIG_COMPONENT_NAME = 'timePicker';
class NzTimePickerComponent {
    constructor(nzConfigService, element, renderer, updateCls, cdr) {
        this.nzConfigService = nzConfigService;
        this.element = element;
        this.renderer = renderer;
        this.updateCls = updateCls;
        this.cdr = cdr;
        this._value = null;
        this.isInit = false;
        this.overlayPositions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 0
            }
        ];
        this.nzSize = null;
        this.nzPlaceHolder = '';
        this.nzDefaultOpenValue = new Date();
        this.nzOpen = false;
        this.nzOpenChange = new EventEmitter();
        this.nzHideDisabledOptions = false;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
    }
    set value(value) {
        this._value = value;
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    }
    get value() {
        return this._value;
    }
    open() {
        if (this.nzDisabled) {
            return;
        }
        this.nzOpen = true;
        this.nzOpenChange.emit(this.nzOpen);
    }
    close() {
        this.nzOpen = false;
        this.cdr.markForCheck();
        this.nzOpenChange.emit(this.nzOpen);
    }
    updateAutoFocus() {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    }
    onClickClearBtn() {
        this.value = null;
    }
    setClassMap() {
        this.updateCls.updateHostClass(this.element.nativeElement, {
            [`ant-time-picker`]: true,
            [`ant-time-picker-${this.nzSize}`]: isNotNil(this.nzSize)
        });
    }
    focus() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    }
    blur() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    }
    ngOnInit() {
        this.setClassMap();
        this.origin = new CdkOverlayOrigin(this.element);
    }
    ngOnChanges(changes) {
        const { nzUse12Hours, nzFormat, nzDisabled, nzAutoFocus } = changes;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
            this.nzFormat = 'h:mm:ss a';
        }
        if (nzDisabled) {
            const value = nzDisabled.currentValue;
            const input = this.inputRef.nativeElement;
            if (value) {
                this.renderer.setAttribute(input, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(input, 'disabled');
            }
        }
        if (nzAutoFocus) {
            this.updateAutoFocus();
        }
    }
    ngAfterViewInit() {
        this.isInit = true;
        this.updateAutoFocus();
    }
    writeValue(time) {
        this._value = time;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
}
/** @nocollapse */ NzTimePickerComponent.ɵfac = function NzTimePickerComponent_Factory(t) { return new (t || NzTimePickerComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzTimePickerComponent.ɵcmp = ɵɵdefineComponent({ type: NzTimePickerComponent, selectors: [["nz-time-picker"]], viewQuery: function NzTimePickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputRef = _t.first);
    } }, inputs: { nzSize: "nzSize", nzHourStep: "nzHourStep", nzMinuteStep: "nzMinuteStep", nzSecondStep: "nzSecondStep", nzClearText: "nzClearText", nzPopupClassName: "nzPopupClassName", nzPlaceHolder: "nzPlaceHolder", nzAddOn: "nzAddOn", nzDefaultOpenValue: "nzDefaultOpenValue", nzDisabledHours: "nzDisabledHours", nzDisabledMinutes: "nzDisabledMinutes", nzDisabledSeconds: "nzDisabledSeconds", nzFormat: "nzFormat", nzOpen: "nzOpen", nzUse12Hours: "nzUse12Hours", nzHideDisabledOptions: "nzHideDisabledOptions", nzAllowEmpty: "nzAllowEmpty", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzTimePicker"], features: [ɵɵProvidersFeature([NzUpdateHostClassService, { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }]), ɵɵNgOnChangesFeature()], decls: 7, vars: 10, consts: [["nzType", "text", "readonly", "readonly", 1, "ant-time-picker-input", 3, "nzTime", "placeholder", "ngModel", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-time-picker-icon"], ["nz-icon", "", "nzType", "clock-circle"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "anticon anticon-close-circle ant-time-picker-clear", "tabindex", "-1", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", "cdkConnectedOverlayHasBackdrop", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayOffsetY", "detach", "backdropClick"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "tabindex", "-1", 1, "anticon", "anticon-close-circle", "ant-time-picker-clear", 3, "click"], [3, "ngClass", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "opened", "nzClearText", "nzAllowEmpty", "ngModel", "ngModelChange"]], template: function NzTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "input", 0, 1);
        ɵɵlistener("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; })("click", function NzTimePickerComponent_Template_input_click_0_listener($event) { return ctx.open(); });
        ɵɵpipe(2, "nzI18n");
        ɵɵelementEnd();
        ɵɵelementStart(3, "span", 2);
        ɵɵelement(4, "i", 3);
        ɵɵelementEnd();
        ɵɵtemplate(5, NzTimePickerComponent_i_5_Template, 1, 2, "i", 4);
        ɵɵtemplate(6, NzTimePickerComponent_ng_template_6_Template, 2, 20, "ng-template", 5);
        ɵɵlistener("detach", function NzTimePickerComponent_Template_ng_template_detach_6_listener($event) { return ctx.close(); })("backdropClick", function NzTimePickerComponent_Template_ng_template_backdropClick_6_listener($event) { return ctx.close(); });
    } if (rf & 2) {
        ɵɵproperty("nzTime", ctx.nzFormat)("placeholder", ctx.nzPlaceHolder || ɵɵpipeBind1(2, 8, "TimePicker.placeholder"))("ngModel", ctx.value);
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.nzAllowEmpty && ctx.value);
        ɵɵadvance(1);
        ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayOffsetY", 0 - 2);
    } }, directives: [NzTimeValueAccessorDirective, DefaultValueAccessor, NgControlStatus, NgModel, NzIconDirective, NgIf, CdkConnectedOverlay, NzConnectedOverlayDirective, NzTimePickerPanelComponent, NgClass], pipes: [NzI18nPipe], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 1),
    __metadata("design:type", Number)
], NzTimePickerComponent.prototype, "nzHourStep", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 1),
    __metadata("design:type", Number)
], NzTimePickerComponent.prototype, "nzMinuteStep", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 1),
    __metadata("design:type", Number)
], NzTimePickerComponent.prototype, "nzSecondStep", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'clear'),
    __metadata("design:type", String)
], NzTimePickerComponent.prototype, "nzClearText", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", String)
], NzTimePickerComponent.prototype, "nzPopupClassName", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'HH:mm:ss'),
    __metadata("design:type", String)
], NzTimePickerComponent.prototype, "nzFormat", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzTimePickerComponent.prototype, "nzUse12Hours", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTimePickerComponent.prototype, "nzHideDisabledOptions", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    __metadata("design:type", Boolean)
], NzTimePickerComponent.prototype, "nzAllowEmpty", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTimePickerComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTimePickerComponent.prototype, "nzAutoFocus", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTimePickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-time-picker',
                exportAs: 'nzTimePicker',
                templateUrl: './nz-time-picker.component.html',
                animations: [slideMotion],
                providers: [NzUpdateHostClassService, { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }]
            }]
    }], function () { return [{ type: NzConfigService }, { type: ElementRef }, { type: Renderer2 }, { type: NzUpdateHostClassService }, { type: ChangeDetectorRef }]; }, { inputRef: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], nzSize: [{
            type: Input
        }], nzHourStep: [{
            type: Input
        }], nzMinuteStep: [{
            type: Input
        }], nzSecondStep: [{
            type: Input
        }], nzClearText: [{
            type: Input
        }], nzPopupClassName: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzAddOn: [{
            type: Input
        }], nzDefaultOpenValue: [{
            type: Input
        }], nzDisabledHours: [{
            type: Input
        }], nzDisabledMinutes: [{
            type: Input
        }], nzDisabledSeconds: [{
            type: Input
        }], nzFormat: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzUse12Hours: [{
            type: Input
        }], nzOpenChange: [{
            type: Output
        }], nzHideDisabledOptions: [{
            type: Input
        }], nzAllowEmpty: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTimePickerModule {
}
/** @nocollapse */ NzTimePickerModule.ɵmod = ɵɵdefineNgModule({ type: NzTimePickerModule });
/** @nocollapse */ NzTimePickerModule.ɵinj = ɵɵdefineInjector({ factory: function NzTimePickerModule_Factory(t) { return new (t || NzTimePickerModule)(); }, imports: [[CommonModule, FormsModule, NzI18nModule, OverlayModule, NzIconModule, NzOverlayModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzTimePickerModule, { declarations: [NzTimePickerComponent, NzTimePickerPanelComponent, NzTimeValueAccessorDirective], imports: [CommonModule, FormsModule, NzI18nModule, OverlayModule, NzIconModule, NzOverlayModule], exports: [NzTimePickerPanelComponent, NzTimePickerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTimePickerModule, [{
        type: NgModule,
        args: [{
                declarations: [NzTimePickerComponent, NzTimePickerPanelComponent, NzTimeValueAccessorDirective],
                exports: [NzTimePickerPanelComponent, NzTimePickerComponent],
                imports: [CommonModule, FormsModule, NzI18nModule, OverlayModule, NzIconModule, NzOverlayModule]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzTimePickerComponent, NzTimePickerModule, NzTimePickerPanelComponent, NzTimeValueAccessorDirective };
//# sourceMappingURL=ng-zorro-antd-time-picker.js.map
