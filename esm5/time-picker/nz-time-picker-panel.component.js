import { __decorate, __metadata, __read, __spread } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DebugElement, ElementRef, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, isNotNil, NzUpdateHostClassService as UpdateCls, reqAnimFrame } from 'ng-zorro-antd/core';
import { NzTimeValueAccessorDirective } from './nz-time-value-accessor.directive';
import { TimeHolder } from './time-holder';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "./nz-time-value-accessor.directive";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
var _c0 = ["hourListElement"];
var _c1 = ["minuteListElement"];
var _c2 = ["secondListElement"];
var _c3 = ["use12HoursListElement"];
function NzTimePickerPanelComponent_div_5_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r931 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵlistener("click", function NzTimePickerPanelComponent_div_5_ng_container_3_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r931); var hour_r927 = i0.ɵɵnextContext().$implicit; var ctx_r929 = i0.ɵɵnextContext(2); return ctx_r929.selectHour(hour_r927); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var hour_r927 = i0.ɵɵnextContext().$implicit;
    var ctx_r928 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("\n                ", ctx_r928.isSelectedHour(hour_r927) ? ctx_r928.prefixCls + "-select-option-selected" : "", "\n                ", hour_r927.disabled ? ctx_r928.prefixCls + "-select-option-disabled" : "", "\n              ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 5, hour_r927.index, "2.0-0"), " ");
} }
function NzTimePickerPanelComponent_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTimePickerPanelComponent_div_5_ng_container_3_li_1_Template, 3, 8, "li", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var hour_r927 = ctx.$implicit;
    var ctx_r926 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r926.nzHideDisabledOptions && hour_r927.disabled));
} }
function NzTimePickerPanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 2);
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵtemplate(3, NzTimePickerPanelComponent_div_5_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r920 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r920.prefixCls, "-select");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r920.hourRange);
} }
function NzTimePickerPanelComponent_div_6_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r939 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵlistener("click", function NzTimePickerPanelComponent_div_6_ng_container_3_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r939); var minute_r935 = i0.ɵɵnextContext().$implicit; var ctx_r937 = i0.ɵɵnextContext(2); return ctx_r937.selectMinute(minute_r935); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var minute_r935 = i0.ɵɵnextContext().$implicit;
    var ctx_r936 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("\n                ", ctx_r936.isSelectedMinute(minute_r935) ? ctx_r936.prefixCls + "-select-option-selected" : "", "\n                ", minute_r935.disabled ? ctx_r936.prefixCls + "-select-option-disabled" : "", "\n              ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 5, minute_r935.index, "2.0-0"), " ");
} }
function NzTimePickerPanelComponent_div_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTimePickerPanelComponent_div_6_ng_container_3_li_1_Template, 3, 8, "li", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var minute_r935 = ctx.$implicit;
    var ctx_r934 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r934.nzHideDisabledOptions && minute_r935.disabled));
} }
function NzTimePickerPanelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 6);
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵtemplate(3, NzTimePickerPanelComponent_div_6_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r921 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r921.prefixCls, "-select");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r921.minuteRange);
} }
function NzTimePickerPanelComponent_div_7_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r947 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵlistener("click", function NzTimePickerPanelComponent_div_7_ng_container_3_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r947); var second_r943 = i0.ɵɵnextContext().$implicit; var ctx_r945 = i0.ɵɵnextContext(2); return ctx_r945.selectSecond(second_r943); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var second_r943 = i0.ɵɵnextContext().$implicit;
    var ctx_r944 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("\n                ", ctx_r944.isSelectedSecond(second_r943) ? ctx_r944.prefixCls + "-select-option-selected" : "", "\n                ", second_r943.disabled ? ctx_r944.prefixCls + "-select-option-disabled" : "", "\n              ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 5, second_r943.index, "2.0-0"), " ");
} }
function NzTimePickerPanelComponent_div_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTimePickerPanelComponent_div_7_ng_container_3_li_1_Template, 3, 8, "li", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var second_r943 = ctx.$implicit;
    var ctx_r942 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r942.nzHideDisabledOptions && second_r943.disabled));
} }
function NzTimePickerPanelComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 7);
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵtemplate(3, NzTimePickerPanelComponent_div_7_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r922 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r922.prefixCls, "-select");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r922.secondRange);
} }
function NzTimePickerPanelComponent_div_8_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r955 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵlistener("click", function NzTimePickerPanelComponent_div_8_ng_container_3_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r955); var range_r951 = i0.ɵɵnextContext().$implicit; var ctx_r953 = i0.ɵɵnextContext(2); return ctx_r953.select12Hours(range_r951); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var range_r951 = i0.ɵɵnextContext().$implicit;
    var ctx_r952 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("\n                ", ctx_r952.isSelected12Hours(range_r951) ? ctx_r952.prefixCls + "-select-option-selected" : "", "\n              ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", range_r951.value, " ");
} }
function NzTimePickerPanelComponent_div_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTimePickerPanelComponent_div_8_ng_container_3_li_1_Template, 2, 4, "li", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r950 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r950.nzHideDisabledOptions);
} }
function NzTimePickerPanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 8);
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵtemplate(3, NzTimePickerPanelComponent_div_8_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r923 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r923.prefixCls, "-select");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r923.use12HoursRange);
} }
function NzTimePickerPanelComponent_div_9_ng_template_1_Template(rf, ctx) { }
function NzTimePickerPanelComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NzTimePickerPanelComponent_div_9_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r924 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r924.prefixCls, "-addon");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r924.nzAddOn);
} }
function makeRange(length, step, start) {
    if (step === void 0) { step = 1; }
    if (start === void 0) { start = 0; }
    return new Array(Math.ceil(length / step)).fill(0).map(function (_, i) { return (i + start) * step; });
}
var NzTimePickerPanelComponent = /** @class */ (function () {
    function NzTimePickerPanelComponent(element, updateCls, cdr) {
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
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzAllowEmpty", {
        get: function () {
            return this._allowEmpty;
        },
        set: function (value) {
            if (isNotNil(value)) {
                this._allowEmpty = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledHours", {
        get: function () {
            return this._disabledHours;
        },
        set: function (value) {
            this._disabledHours = value;
            if (this._disabledHours) {
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledMinutes", {
        get: function () {
            return this._disabledMinutes;
        },
        set: function (value) {
            if (isNotNil(value)) {
                this._disabledMinutes = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledSeconds", {
        get: function () {
            return this._disabledSeconds;
        },
        set: function (value) {
            if (isNotNil(value)) {
                this._disabledSeconds = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.enabledColumns = 0;
                var charSet = new Set(value);
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzHourStep", {
        get: function () {
            return this._nzHourStep;
        },
        set: function (value) {
            if (isNotNil(value)) {
                this._nzHourStep = value;
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzMinuteStep", {
        get: function () {
            return this._nzMinuteStep;
        },
        set: function (value) {
            if (isNotNil(value)) {
                this._nzMinuteStep = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzSecondStep", {
        get: function () {
            return this._nzSecondStep;
        },
        set: function (value) {
            if (isNotNil(value)) {
                this._nzSecondStep = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    NzTimePickerPanelComponent.prototype.selectInputRange = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.nzTimeValueAccessorDirective) {
                _this.nzTimeValueAccessorDirective.setRange();
            }
        });
    };
    NzTimePickerPanelComponent.prototype.buildHours = function () {
        var _this = this;
        var hourRanges = 24;
        var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
        var startIndex = 0;
        if (this.nzUse12Hours) {
            hourRanges = 12;
            if (disabledHours) {
                if (this.time.selected12Hours === 'PM') {
                    /**
                     * Filter and transform hours which greater or equal to 12
                     * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter(function (i) { return i >= 12; }).map(function (i) { return (i > 12 ? i - 12 : i); });
                }
                else {
                    /**
                     * Filter and transform hours which less than 12
                     * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter(function (i) { return i < 12 || i === 24; }).map(function (i) { return (i === 24 || i === 0 ? 12 : i); });
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map(function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledHours && disabledHours.indexOf(r) !== -1
            };
        });
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            var temp = __spread(this.hourRange);
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    };
    NzTimePickerPanelComponent.prototype.buildMinutes = function () {
        var _this = this;
        this.minuteRange = makeRange(60, this.nzMinuteStep).map(function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledMinutes && _this.nzDisabledMinutes(_this.time.hours).indexOf(r) !== -1
            };
        });
    };
    NzTimePickerPanelComponent.prototype.buildSeconds = function () {
        var _this = this;
        this.secondRange = makeRange(60, this.nzSecondStep).map(function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledSeconds && _this.nzDisabledSeconds(_this.time.hours, _this.time.minutes).indexOf(r) !== -1
            };
        });
    };
    NzTimePickerPanelComponent.prototype.build12Hours = function () {
        var isUpperForamt = this._format.includes('A');
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
    };
    NzTimePickerPanelComponent.prototype.buildTimes = function () {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    };
    NzTimePickerPanelComponent.prototype.selectHour = function (hour) {
        this.time.setHours(hour.index, hour.disabled);
        this.scrollToSelected(this.hourListElement.nativeElement, hour.index, 120, 'hour');
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    };
    NzTimePickerPanelComponent.prototype.selectMinute = function (minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
    };
    NzTimePickerPanelComponent.prototype.selectSecond = function (second) {
        this.time.setSeconds(second.index, second.disabled);
        this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
    };
    NzTimePickerPanelComponent.prototype.select12Hours = function (value) {
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
    };
    NzTimePickerPanelComponent.prototype.scrollToSelected = function (instance, index, duration, unit) {
        if (duration === void 0) { duration = 0; }
        var transIndex = this.translateIndex(index, unit);
        var currentOption = (instance.children[0].children[transIndex] || instance.children[0].children[0]);
        this.scrollTo(instance, currentOption.offsetTop, duration);
    };
    NzTimePickerPanelComponent.prototype.translateIndex = function (index, unit) {
        if (unit === 'hour') {
            var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            return this.calcIndex(disabledHours, this.hourRange.map(function (item) { return item.index; }).indexOf(index));
        }
        else if (unit === 'minute') {
            var disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes(this.time.hours);
            return this.calcIndex(disabledMinutes, this.minuteRange.map(function (item) { return item.index; }).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            var disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds(this.time.hours, this.time.minutes);
            return this.calcIndex(disabledSeconds, this.secondRange.map(function (item) { return item.index; }).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map(function (item) { return item.index; }).indexOf(index));
        }
    };
    NzTimePickerPanelComponent.prototype.scrollTo = function (element, to, duration) {
        var _this = this;
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        var difference = to - element.scrollTop;
        var perTick = (difference / duration) * 10;
        reqAnimFrame(function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        });
    };
    NzTimePickerPanelComponent.prototype.calcIndex = function (array, index) {
        if (array && array.length && this.nzHideDisabledOptions) {
            return (index -
                array.reduce(function (pre, value) {
                    return pre + (value < index ? 1 : 0);
                }, 0));
        }
        else {
            return index;
        }
    };
    NzTimePickerPanelComponent.prototype.changed = function () {
        if (this.onChange) {
            this.onChange(this.time.value);
        }
    };
    NzTimePickerPanelComponent.prototype.touched = function () {
        if (this.onTouch) {
            this.onTouch();
        }
    };
    NzTimePickerPanelComponent.prototype.setClassMap = function () {
        var _a;
        this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
            _a["" + this.prefixCls] = true,
            _a[this.prefixCls + "-column-" + this.enabledColumns] = this.nzInDatePicker ? false : true,
            _a[this.prefixCls + "-narrow"] = this.enabledColumns < 3,
            _a[this.prefixCls + "-placement-bottomLeft"] = this.nzInDatePicker ? false : true,
            _a));
    };
    NzTimePickerPanelComponent.prototype.isSelectedHour = function (hour) {
        return hour.index === this.time.viewHours || (!isNotNil(this.time.viewHours) && hour.index === this.time.defaultViewHours);
    };
    NzTimePickerPanelComponent.prototype.isSelectedMinute = function (minute) {
        return minute.index === this.time.minutes || (!isNotNil(this.time.minutes) && minute.index === this.time.defaultMinutes);
    };
    NzTimePickerPanelComponent.prototype.isSelectedSecond = function (second) {
        return second.index === this.time.seconds || (!isNotNil(this.time.seconds) && second.index === this.time.defaultSeconds);
    };
    NzTimePickerPanelComponent.prototype.isSelected12Hours = function (value) {
        return (value.value.toUpperCase() === this.time.selected12Hours ||
            (!isNotNil(this.time.selected12Hours) && value.value.toUpperCase() === this.time.default12Hours));
    };
    NzTimePickerPanelComponent.prototype.initPosition = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.hourEnabled && _this.hourListElement) {
                if (isNotNil(_this.time.viewHours)) {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, _this.time.viewHours, 0, 'hour');
                }
                else {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, _this.time.defaultViewHours, 0, 'hour');
                }
            }
            if (_this.minuteEnabled && _this.minuteListElement) {
                if (isNotNil(_this.time.minutes)) {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, _this.time.minutes, 0, 'minute');
                }
                else {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, _this.time.defaultMinutes, 0, 'minute');
                }
            }
            if (_this.secondEnabled && _this.secondListElement) {
                if (isNotNil(_this.time.seconds)) {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, _this.time.seconds, 0, 'second');
                }
                else {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, _this.time.defaultSeconds, 0, 'second');
                }
            }
            if (_this.nzUse12Hours && _this.use12HoursListElement) {
                var selectedHours = isNotNil(_this.time.selected12Hours) ? _this.time.selected12Hours : _this.time.default12Hours;
                var index = selectedHours === 'AM' ? 0 : 1;
                _this.scrollToSelected(_this.use12HoursListElement.nativeElement, index, 0, '12-hour');
            }
        });
    };
    NzTimePickerPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nzInDatePicker) {
            this.prefixCls = 'ant-calendar-time-picker';
        }
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
            _this.changed();
            _this.touched();
        });
        this.buildTimes();
        this.setClassMap();
    };
    NzTimePickerPanelComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTimePickerPanelComponent.prototype.ngOnChanges = function (changes) {
        var nzUse12Hours = changes.nzUse12Hours, opened = changes.opened, nzDefaultOpenValue = changes.nzDefaultOpenValue;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue) {
            this.build12Hours();
            this.enabledColumns++;
        }
        if (opened && opened.currentValue) {
            this.initPosition();
            this.selectInputRange();
        }
        if (nzDefaultOpenValue) {
            var value = nzDefaultOpenValue.currentValue;
            if (isNotNil(value)) {
                this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
            }
        }
    };
    NzTimePickerPanelComponent.prototype.writeValue = function (value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    };
    NzTimePickerPanelComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzTimePickerPanelComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    /** @nocollapse */ NzTimePickerPanelComponent.ɵfac = function NzTimePickerPanelComponent_Factory(t) { return new (t || NzTimePickerPanelComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzTimePickerPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTimePickerPanelComponent, selectors: [["nz-time-picker-panel"]], viewQuery: function NzTimePickerPanelComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(NzTimeValueAccessorDirective, true);
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
            i0.ɵɵviewQuery(_c2, true);
            i0.ɵɵviewQuery(_c3, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzTimeValueAccessorDirective = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.hourListElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.minuteListElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.secondListElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.use12HoursListElement = _t.first);
        } }, inputs: { nzInDatePicker: "nzInDatePicker", nzAddOn: "nzAddOn", nzHideDisabledOptions: "nzHideDisabledOptions", nzClearText: "nzClearText", nzPlaceHolder: "nzPlaceHolder", nzUse12Hours: "nzUse12Hours", opened: "opened", nzDefaultOpenValue: "nzDefaultOpenValue", nzAllowEmpty: "nzAllowEmpty", nzDisabledHours: "nzDisabledHours", nzDisabledMinutes: "nzDisabledMinutes", nzDisabledSeconds: "nzDisabledSeconds", format: "format", nzHourStep: "nzHourStep", nzMinuteStep: "nzMinuteStep", nzSecondStep: "nzSecondStep" }, exportAs: ["nzTimePickerPanel"], features: [i0.ɵɵProvidersFeature([UpdateCls, { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]), i0.ɵɵNgOnChangesFeature()], decls: 10, vars: 25, consts: [["type", "text", 3, "placeholder", "nzTime", "ngModel", "ngModelChange", "blur"], [3, "class", 4, "ngIf"], ["hourListElement", ""], [4, "ngFor", "ngForOf"], [3, "class", "click", 4, "ngIf"], [3, "click"], ["minuteListElement", ""], ["secondListElement", ""], ["use12HoursListElement", ""], [3, "ngTemplateOutlet"]], template: function NzTimePickerPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div");
            i0.ɵɵelementStart(2, "div");
            i0.ɵɵelementStart(3, "input", 0);
            i0.ɵɵlistener("ngModelChange", function NzTimePickerPanelComponent_Template_input_ngModelChange_3_listener($event) { return ctx.time.value = $event; })("blur", function NzTimePickerPanelComponent_Template_input_blur_3_listener($event) { return ctx.time.changed(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div");
            i0.ɵɵtemplate(5, NzTimePickerPanelComponent_div_5_Template, 4, 4, "div", 1);
            i0.ɵɵtemplate(6, NzTimePickerPanelComponent_div_6_Template, 4, 4, "div", 1);
            i0.ɵɵtemplate(7, NzTimePickerPanelComponent_div_7_Template, 4, 4, "div", 1);
            i0.ɵɵtemplate(8, NzTimePickerPanelComponent_div_8_Template, 4, 4, "div", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, NzTimePickerPanelComponent_div_9_Template, 2, 4, "div", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.nzInDatePicker ? ctx.prefixCls + "-panel" : "");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-inner ", ctx.nzInDatePicker ? ctx.prefixCls + "-column-" + ctx.enabledColumns : "", "");
            i0.ɵɵstyleProp("width", ctx.nzInDatePicker ? null : ctx.enabledColumns * 56, "px");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input-wrap");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input");
            i0.ɵɵproperty("placeholder", ctx.nzPlaceHolder)("nzTime", ctx.format)("ngModel", ctx.time.value);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-combobox");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hourEnabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.minuteEnabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.secondEnabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzUse12Hours);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzAddOn);
        } }, directives: [i2.NzTimeValueAccessorDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.NgIf, i4.NgForOf, i4.NgTemplateOutlet], pipes: [i4.DecimalPipe], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
    return NzTimePickerPanelComponent;
}());
export { NzTimePickerPanelComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTimePickerPanelComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-time-picker-panel',
                exportAs: 'nzTimePickerPanel',
                templateUrl: './nz-time-picker-panel.component.html',
                providers: [UpdateCls, { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzUpdateHostClassService }, { type: i0.ChangeDetectorRef }]; }, { nzTimeValueAccessorDirective: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC50cyIsIm56LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBS0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixJQUFJLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7SUNWL0IsNkJBUUU7SUFOQSxnUkFBMEI7SUFNMUIsWUFDRjs7SUFBQSxpQkFBSzs7OztJQU5ILDZQQUdDO0lBRUQsZUFDRjtJQURFLCtFQUNGOzs7SUFWRiw2QkFDRTtJQUFBLDhGQVFFO0lBRUosMEJBQWU7Ozs7SUFUWCxlQUFpRDtJQUFqRCw4RUFBaUQ7OztJQUp6RCxvQ0FDRTtJQUFBLDBCQUNFO0lBQUEsbUdBQ0U7SUFXSixpQkFBSztJQUNQLGlCQUFNOzs7SUFmb0MsNERBQThCO0lBRXRELGVBQThCO0lB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REMzQjtRQUFmLFlBQVksRUFBRTs7b0VBQXNCO3FDQW5GaEQ7Q0FrZkMsQUEzY0QsSUEyY0M7U0FuY1ksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FSdEMsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSwwQkFBMEIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDN0c7O2tCQXdCRSxTQUFTO21CQUFDLDRCQUE0QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBRXpELFNBQVM7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFFOUMsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUNoRCxTQUFTO21CQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBQ2hELFNBQVM7bUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFFcEQsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBV0wsS0FBSzs7a0JBWUwsS0FBSzs7a0JBWUwsS0FBSzs7a0JBWUwsS0FBSzs7a0JBNEJMLEtBQUs7O2tCQVlMLEtBQUs7O2tCQVlMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIERlYnVnRWxlbWVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc05vdE5pbCwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscywgcmVxQW5pbUZyYW1lIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuL256LXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGltZUhvbGRlciB9IGZyb20gJy4vdGltZS1ob2xkZXInO1xyXG5cclxuZnVuY3Rpb24gbWFrZVJhbmdlKGxlbmd0aDogbnVtYmVyLCBzdGVwOiBudW1iZXIgPSAxLCBzdGFydDogbnVtYmVyID0gMCk6IG51bWJlcltdIHtcclxuICByZXR1cm4gbmV3IEFycmF5KE1hdGguY2VpbChsZW5ndGggLyBzdGVwKSkuZmlsbCgwKS5tYXAoKF8sIGkpID0+IChpICsgc3RhcnQpICogc3RlcCk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE56VGltZVBpY2tlclVuaXQgPSAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnIHwgJzEyLWhvdXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ256LXRpbWUtcGlja2VyLXBhbmVsJyxcclxuICBleHBvcnRBczogJ256VGltZVBpY2tlclBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1VwZGF0ZUNscywgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IE56VGltZVBpY2tlclBhbmVsQ29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUaW1lUGlja2VyUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBfbnpIb3VyU3RlcCA9IDE7XHJcbiAgcHJpdmF0ZSBfbnpNaW51dGVTdGVwID0gMTtcclxuICBwcml2YXRlIF9uelNlY29uZFN0ZXAgPSAxO1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIG9uQ2hhbmdlOiAodmFsdWU6IERhdGUpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBvblRvdWNoOiAoKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgX2Zvcm1hdCA9ICdISDptbTpzcyc7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWRIb3VyczogKCkgPT4gbnVtYmVyW107XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWRNaW51dGVzOiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXTtcclxuICBwcml2YXRlIF9kaXNhYmxlZFNlY29uZHM6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXTtcclxuICBwcml2YXRlIF9hbGxvd0VtcHR5ID0gdHJ1ZTtcclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtdGltZS1waWNrZXItcGFuZWwnO1xyXG4gIHRpbWUgPSBuZXcgVGltZUhvbGRlcigpO1xyXG4gIGhvdXJFbmFibGVkID0gdHJ1ZTtcclxuICBtaW51dGVFbmFibGVkID0gdHJ1ZTtcclxuICBzZWNvbmRFbmFibGVkID0gdHJ1ZTtcclxuICBlbmFibGVkQ29sdW1ucyA9IDM7XHJcbiAgaG91clJhbmdlOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XHJcbiAgbWludXRlUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcclxuICBzZWNvbmRSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xyXG4gIHVzZTEySG91cnNSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IHZhbHVlOiBzdHJpbmcgfT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgbnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZTogTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZTtcclxuICBAVmlld0NoaWxkKCdob3VyTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBob3VyTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcclxuICBAVmlld0NoaWxkKCdtaW51dGVMaXN0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtaW51dGVMaXN0RWxlbWVudDogRGVidWdFbGVtZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ3NlY29uZExpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHNlY29uZExpc3RFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XHJcbiAgQFZpZXdDaGlsZCgndXNlMTJIb3Vyc0xpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHVzZTEySG91cnNMaXN0RWxlbWVudDogRGVidWdFbGVtZW50O1xyXG5cclxuICBASW5wdXQoKSBuekluRGF0ZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyBJZiBpbnNpZGUgYSBkYXRlLXBpY2tlciwgbW9yZSBkaWZmIHdvcmtzIG5lZWQgdG8gYmUgZG9uZVxyXG4gIEBJbnB1dCgpIG56QWRkT246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56SGlkZURpc2FibGVkT3B0aW9ucyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q2xlYXJUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelVzZTEySG91cnMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBvcGVuZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekRlZmF1bHRPcGVuVmFsdWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekFsbG93RW1wdHkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fYWxsb3dFbXB0eSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56QWxsb3dFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hbGxvd0VtcHR5O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEaXNhYmxlZEhvdXJzKHZhbHVlOiAoKSA9PiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5fZGlzYWJsZWRIb3VycyA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkSG91cnMpIHtcclxuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZEhvdXJzKCk6ICgpID0+IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZEhvdXJzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEaXNhYmxlZE1pbnV0ZXModmFsdWU6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkTWludXRlcyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGlzYWJsZWRNaW51dGVzKCk6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZE1pbnV0ZXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkU2Vjb25kcyh2YWx1ZTogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkU2Vjb25kcyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGlzYWJsZWRTZWNvbmRzKCk6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRTZWNvbmRzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMgPSAwO1xyXG4gICAgICBjb25zdCBjaGFyU2V0ID0gbmV3IFNldCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuaG91ckVuYWJsZWQgPSBjaGFyU2V0LmhhcygnSCcpIHx8IGNoYXJTZXQuaGFzKCdoJyk7XHJcbiAgICAgIHRoaXMubWludXRlRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdtJyk7XHJcbiAgICAgIHRoaXMuc2Vjb25kRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdzJyk7XHJcbiAgICAgIGlmICh0aGlzLmhvdXJFbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uelVzZTEySG91cnMpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZm9ybWF0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpIb3VyU3RlcCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX256SG91clN0ZXAgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpIb3VyU3RlcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX256SG91clN0ZXA7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuek1pbnV0ZVN0ZXAodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9uek1pbnV0ZVN0ZXAgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuek1pbnV0ZVN0ZXAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9uek1pbnV0ZVN0ZXA7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNlY29uZFN0ZXAodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9uelNlY29uZFN0ZXAgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelNlY29uZFN0ZXAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9uelNlY29uZFN0ZXA7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJbnB1dFJhbmdlKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLm56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUuc2V0UmFuZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBidWlsZEhvdXJzKCk6IHZvaWQge1xyXG4gICAgbGV0IGhvdXJSYW5nZXMgPSAyNDtcclxuICAgIGxldCBkaXNhYmxlZEhvdXJzID0gdGhpcy5uekRpc2FibGVkSG91cnMgJiYgdGhpcy5uekRpc2FibGVkSG91cnMoKTtcclxuICAgIGxldCBzdGFydEluZGV4ID0gMDtcclxuICAgIGlmICh0aGlzLm56VXNlMTJIb3Vycykge1xyXG4gICAgICBob3VyUmFuZ2VzID0gMTI7XHJcbiAgICAgIGlmIChkaXNhYmxlZEhvdXJzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMgPT09ICdQTScpIHtcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogRmlsdGVyIGFuZCB0cmFuc2Zvcm0gaG91cnMgd2hpY2ggZ3JlYXRlciBvciBlcXVhbCB0byAxMlxyXG4gICAgICAgICAgICogWzAsIDEsIDIsIC4uLiwgMTIsIDEzLCAxNCwgMTUsIC4uLiwgMjNdID0+IFsxMiwgMSwgMiwgMywgLi4uLCAxMV1cclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgZGlzYWJsZWRIb3VycyA9IGRpc2FibGVkSG91cnMuZmlsdGVyKGkgPT4gaSA+PSAxMikubWFwKGkgPT4gKGkgPiAxMiA/IGkgLSAxMiA6IGkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBGaWx0ZXIgYW5kIHRyYW5zZm9ybSBob3VycyB3aGljaCBsZXNzIHRoYW4gMTJcclxuICAgICAgICAgICAqIFswLCAxLCAyLC4uLiwgMTIsIDEzLCAxNCwgMTUsIC4uLjIzXSA9PiBbMTIsIDEsIDIsIDMsIC4uLiwgMTFdXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGRpc2FibGVkSG91cnMgPSBkaXNhYmxlZEhvdXJzLmZpbHRlcihpID0+IGkgPCAxMiB8fCBpID09PSAyNCkubWFwKGkgPT4gKGkgPT09IDI0IHx8IGkgPT09IDAgPyAxMiA6IGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc3RhcnRJbmRleCA9IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvdXJSYW5nZSA9IG1ha2VSYW5nZShob3VyUmFuZ2VzLCB0aGlzLm56SG91clN0ZXAsIHN0YXJ0SW5kZXgpLm1hcChyID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbmRleDogcixcclxuICAgICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkSG91cnMgJiYgZGlzYWJsZWRIb3Vycy5pbmRleE9mKHIpICE9PSAtMVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5uelVzZTEySG91cnMgJiYgdGhpcy5ob3VyUmFuZ2VbdGhpcy5ob3VyUmFuZ2UubGVuZ3RoIC0gMV0uaW5kZXggPT09IDEyKSB7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBbLi4udGhpcy5ob3VyUmFuZ2VdO1xyXG4gICAgICB0ZW1wLnVuc2hpZnQodGVtcFt0ZW1wLmxlbmd0aCAtIDFdKTtcclxuICAgICAgdGVtcC5zcGxpY2UodGVtcC5sZW5ndGggLSAxLCAxKTtcclxuICAgICAgdGhpcy5ob3VyUmFuZ2UgPSB0ZW1wO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnVpbGRNaW51dGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5taW51dGVSYW5nZSA9IG1ha2VSYW5nZSg2MCwgdGhpcy5uek1pbnV0ZVN0ZXApLm1hcChyID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbmRleDogcixcclxuICAgICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkTWludXRlcyAmJiB0aGlzLm56RGlzYWJsZWRNaW51dGVzKHRoaXMudGltZS5ob3VycyEpLmluZGV4T2YocikgIT09IC0xXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJ1aWxkU2Vjb25kcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2Vjb25kUmFuZ2UgPSBtYWtlUmFuZ2UoNjAsIHRoaXMubnpTZWNvbmRTdGVwKS5tYXAociA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5kZXg6IHIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMubnpEaXNhYmxlZFNlY29uZHMgJiYgdGhpcy5uekRpc2FibGVkU2Vjb25kcyh0aGlzLnRpbWUuaG91cnMhLCB0aGlzLnRpbWUubWludXRlcyEpLmluZGV4T2YocikgIT09IC0xXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJ1aWxkMTJIb3VycygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzVXBwZXJGb3JhbXQgPSB0aGlzLl9mb3JtYXQuaW5jbHVkZXMoJ0EnKTtcclxuICAgIHRoaXMudXNlMTJIb3Vyc1JhbmdlID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgdmFsdWU6IGlzVXBwZXJGb3JhbXQgPyAnQU0nIDogJ2FtJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW5kZXg6IDEsXHJcbiAgICAgICAgdmFsdWU6IGlzVXBwZXJGb3JhbXQgPyAnUE0nIDogJ3BtJ1xyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRUaW1lcygpOiB2b2lkIHtcclxuICAgIHRoaXMuYnVpbGRIb3VycygpO1xyXG4gICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcclxuICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XHJcbiAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SG91cihob3VyOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcclxuICAgIHRoaXMudGltZS5zZXRIb3Vycyhob3VyLmluZGV4LCBob3VyLmRpc2FibGVkKTtcclxuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLmhvdXJMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBob3VyLmluZGV4LCAxMjAsICdob3VyJyk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xyXG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcyB8fCB0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcclxuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdE1pbnV0ZShtaW51dGU6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xyXG4gICAgdGhpcy50aW1lLnNldE1pbnV0ZXMobWludXRlLmluZGV4LCBtaW51dGUuZGlzYWJsZWQpO1xyXG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMubWludXRlTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgbWludXRlLmluZGV4LCAxMjAsICdtaW51dGUnKTtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZFNlY29uZHMpIHtcclxuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFNlY29uZChzZWNvbmQ6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xyXG4gICAgdGhpcy50aW1lLnNldFNlY29uZHMoc2Vjb25kLmluZGV4LCBzZWNvbmQuZGlzYWJsZWQpO1xyXG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgc2Vjb25kLmluZGV4LCAxMjAsICdzZWNvbmQnKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdDEySG91cnModmFsdWU6IHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzID0gdmFsdWUudmFsdWU7XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRIb3Vycykge1xyXG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcclxuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZFNlY29uZHMpIHtcclxuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnVzZTEySG91cnNMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB2YWx1ZS5pbmRleCwgMTIwLCAnMTItaG91cicpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9TZWxlY3RlZChpbnN0YW5jZTogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAwLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmFuc0luZGV4ID0gdGhpcy50cmFuc2xhdGVJbmRleChpbmRleCwgdW5pdCk7XHJcbiAgICBjb25zdCBjdXJyZW50T3B0aW9uID0gKGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuW3RyYW5zSW5kZXhdIHx8IGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuc2Nyb2xsVG8oaW5zdGFuY2UsIGN1cnJlbnRPcHRpb24ub2Zmc2V0VG9wLCBkdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICB0cmFuc2xhdGVJbmRleChpbmRleDogbnVtYmVyLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogbnVtYmVyIHtcclxuICAgIGlmICh1bml0ID09PSAnaG91cicpIHtcclxuICAgICAgY29uc3QgZGlzYWJsZWRIb3VycyA9IHRoaXMubnpEaXNhYmxlZEhvdXJzICYmIHRoaXMubnpEaXNhYmxlZEhvdXJzKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChkaXNhYmxlZEhvdXJzLCB0aGlzLmhvdXJSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtaW51dGUnKSB7XHJcbiAgICAgIGNvbnN0IGRpc2FibGVkTWludXRlcyA9IHRoaXMubnpEaXNhYmxlZE1pbnV0ZXMgJiYgdGhpcy5uekRpc2FibGVkTWludXRlcyh0aGlzLnRpbWUuaG91cnMhKTtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkTWludXRlcywgdGhpcy5taW51dGVSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdzZWNvbmQnKSB7XHJcbiAgICAgIC8vIHNlY29uZFxyXG4gICAgICBjb25zdCBkaXNhYmxlZFNlY29uZHMgPSB0aGlzLm56RGlzYWJsZWRTZWNvbmRzICYmIHRoaXMubnpEaXNhYmxlZFNlY29uZHModGhpcy50aW1lLmhvdXJzISwgdGhpcy50aW1lLm1pbnV0ZXMhKTtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkU2Vjb25kcywgdGhpcy5zZWNvbmRSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAxMi1ob3VyXHJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChbXSwgdGhpcy51c2UxMkhvdXJzUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG8oZWxlbWVudDogSFRNTEVsZW1lbnQsIHRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG87XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgY29uc3QgcGVyVGljayA9IChkaWZmZXJlbmNlIC8gZHVyYXRpb24pICogMTA7XHJcblxyXG4gICAgcmVxQW5pbUZyYW1lKCgpID0+IHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCArIHBlclRpY2s7XHJcbiAgICAgIGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PT0gdG8pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhbGNJbmRleChhcnJheTogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKGFycmF5ICYmIGFycmF5Lmxlbmd0aCAmJiB0aGlzLm56SGlkZURpc2FibGVkT3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGluZGV4IC1cclxuICAgICAgICBhcnJheS5yZWR1Y2UoKHByZSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiBwcmUgKyAodmFsdWUgPCBpbmRleCA/IDEgOiAwKTtcclxuICAgICAgICB9LCAwKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudGltZS52YWx1ZSEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHRvdWNoZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vblRvdWNoKSB7XHJcbiAgICAgIHRoaXMub25Ub3VjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xzLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9YF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY29sdW1uLSR7dGhpcy5lbmFibGVkQ29sdW1uc31gXTogdGhpcy5uekluRGF0ZVBpY2tlciA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uYXJyb3dgXTogdGhpcy5lbmFibGVkQ29sdW1ucyA8IDMsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tcGxhY2VtZW50LWJvdHRvbUxlZnRgXTogdGhpcy5uekluRGF0ZVBpY2tlciA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkSG91cihob3VyOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBob3VyLmluZGV4ID09PSB0aGlzLnRpbWUudmlld0hvdXJzIHx8ICghaXNOb3ROaWwodGhpcy50aW1lLnZpZXdIb3VycykgJiYgaG91ci5pbmRleCA9PT0gdGhpcy50aW1lLmRlZmF1bHRWaWV3SG91cnMpO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZE1pbnV0ZShtaW51dGU6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG1pbnV0ZS5pbmRleCA9PT0gdGhpcy50aW1lLm1pbnV0ZXMgfHwgKCFpc05vdE5pbCh0aGlzLnRpbWUubWludXRlcykgJiYgbWludXRlLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdE1pbnV0ZXMpO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZFNlY29uZChzZWNvbmQ6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHNlY29uZC5pbmRleCA9PT0gdGhpcy50aW1lLnNlY29uZHMgfHwgKCFpc05vdE5pbCh0aGlzLnRpbWUuc2Vjb25kcykgJiYgc2Vjb25kLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdFNlY29uZHMpO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZDEySG91cnModmFsdWU6IHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB2YWx1ZS52YWx1ZS50b1VwcGVyQ2FzZSgpID09PSB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzIHx8XHJcbiAgICAgICghaXNOb3ROaWwodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycykgJiYgdmFsdWUudmFsdWUudG9VcHBlckNhc2UoKSA9PT0gdGhpcy50aW1lLmRlZmF1bHQxMkhvdXJzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGluaXRQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5ob3VyRW5hYmxlZCAmJiB0aGlzLmhvdXJMaXN0RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUudmlld0hvdXJzKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS52aWV3SG91cnMhLCAwLCAnaG91cicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLmRlZmF1bHRWaWV3SG91cnMsIDAsICdob3VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQgJiYgdGhpcy5taW51dGVMaXN0RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUubWludXRlcykpIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5taW51dGVzISwgMCwgJ21pbnV0ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuZGVmYXVsdE1pbnV0ZXMsIDAsICdtaW51dGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCAmJiB0aGlzLnNlY29uZExpc3RFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMudGltZS5zZWNvbmRzKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLnNlY29uZHMhLCAwLCAnc2Vjb25kJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5kZWZhdWx0U2Vjb25kcywgMCwgJ3NlY29uZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uelVzZTEySG91cnMgJiYgdGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEhvdXJzID0gaXNOb3ROaWwodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycykgPyB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzIDogdGhpcy50aW1lLmRlZmF1bHQxMkhvdXJzO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWRIb3VycyA9PT0gJ0FNJyA/IDAgOiAxO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnVzZTEySG91cnNMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBpbmRleCwgMCwgJzEyLWhvdXInKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlQ2xzOiBVcGRhdGVDbHMsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekluRGF0ZVBpY2tlcikge1xyXG4gICAgICB0aGlzLnByZWZpeENscyA9ICdhbnQtY2FsZW5kYXItdGltZS1waWNrZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGltZS5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jaGFuZ2VkKCk7XHJcbiAgICAgIHRoaXMudG91Y2hlZCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJ1aWxkVGltZXMoKTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpVc2UxMkhvdXJzLCBvcGVuZWQsIG56RGVmYXVsdE9wZW5WYWx1ZSB9ID0gY2hhbmdlcztcclxuICAgIGlmIChuelVzZTEySG91cnMgJiYgIW56VXNlMTJIb3Vycy5wcmV2aW91c1ZhbHVlICYmIG56VXNlMTJIb3Vycy5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5idWlsZDEySG91cnMoKTtcclxuICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wZW5lZCAmJiBvcGVuZWQuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0SW5wdXRSYW5nZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG56RGVmYXVsdE9wZW5WYWx1ZSkge1xyXG4gICAgICBjb25zdCB2YWx1ZTogRGF0ZSA9IG56RGVmYXVsdE9wZW5WYWx1ZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLnRpbWUuc2V0RGVmYXVsdE9wZW5WYWx1ZSh0aGlzLm56RGVmYXVsdE9wZW5WYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZS5zZXRWYWx1ZSh2YWx1ZSwgdGhpcy5uelVzZTEySG91cnMpO1xyXG4gICAgdGhpcy5idWlsZFRpbWVzKCk7XHJcblxyXG4gICAgLy8gTWFyayB0aGlzIGNvbXBvbmVudCB0byBiZSBjaGVja2VkIG1hbnVhbGx5IHdpdGggaW50ZXJuYWwgcHJvcGVydGllcyBjaGFuZ2luZyAoc2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDgxNilcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoID0gZm47XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJ7eyBuekluRGF0ZVBpY2tlciA/IHByZWZpeENscyArICctcGFuZWwnIDogJycgfX1cIj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1pbm5lciB7e1xyXG4gICAgICBuekluRGF0ZVBpY2tlciA/IHByZWZpeENscyArICctY29sdW1uLScgKyBlbmFibGVkQ29sdW1ucyA6ICcnXHJcbiAgICB9fVwiXHJcbiAgICBbc3R5bGUud2lkdGgucHhdPVwibnpJbkRhdGVQaWNrZXIgPyBudWxsIDogZW5hYmxlZENvbHVtbnMgKiA1NlwiXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1pbnB1dC13cmFwXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1pbnB1dFwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIm56UGxhY2VIb2xkZXJcIlxyXG4gICAgICAgIFtuelRpbWVdPVwiZm9ybWF0XCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cInRpbWUudmFsdWVcIlxyXG4gICAgICAgIChibHVyKT1cInRpbWUuY2hhbmdlZCgpXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jb21ib2JveFwiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiaG91ckVuYWJsZWRcIiAjaG91ckxpc3RFbGVtZW50IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXNlbGVjdFwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGhvdXIgb2YgaG91clJhbmdlXCI+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICpuZ0lmPVwiIShuekhpZGVEaXNhYmxlZE9wdGlvbnMgJiYgaG91ci5kaXNhYmxlZClcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RIb3VyKGhvdXIpXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAge3sgaXNTZWxlY3RlZEhvdXIoaG91cikgPyBwcmVmaXhDbHMgKyAnLXNlbGVjdC1vcHRpb24tc2VsZWN0ZWQnIDogJycgfX1cclxuICAgICAgICAgICAgICAgIHt7IGhvdXIuZGlzYWJsZWQgPyBwcmVmaXhDbHMgKyAnLXNlbGVjdC1vcHRpb24tZGlzYWJsZWQnIDogJycgfX1cclxuICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3sgaG91ci5pbmRleCB8IG51bWJlcjogJzIuMC0wJyB9fVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJtaW51dGVFbmFibGVkXCIgI21pbnV0ZUxpc3RFbGVtZW50IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXNlbGVjdFwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1pbnV0ZSBvZiBtaW51dGVSYW5nZVwiPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAqbmdJZj1cIiEobnpIaWRlRGlzYWJsZWRPcHRpb25zICYmIG1pbnV0ZS5kaXNhYmxlZClcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RNaW51dGUobWludXRlKVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgIHt7IGlzU2VsZWN0ZWRNaW51dGUobWludXRlKSA/IHByZWZpeENscyArICctc2VsZWN0LW9wdGlvbi1zZWxlY3RlZCcgOiAnJyB9fVxyXG4gICAgICAgICAgICAgICAge3sgbWludXRlLmRpc2FibGVkID8gcHJlZml4Q2xzICsgJy1zZWxlY3Qtb3B0aW9uLWRpc2FibGVkJyA6ICcnIH19XHJcbiAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt7IG1pbnV0ZS5pbmRleCB8IG51bWJlcjogJzIuMC0wJyB9fVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJzZWNvbmRFbmFibGVkXCIgI3NlY29uZExpc3RFbGVtZW50IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXNlbGVjdFwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNlY29uZCBvZiBzZWNvbmRSYW5nZVwiPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAqbmdJZj1cIiEobnpIaWRlRGlzYWJsZWRPcHRpb25zICYmIHNlY29uZC5kaXNhYmxlZClcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RTZWNvbmQoc2Vjb25kKVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgIHt7IGlzU2VsZWN0ZWRTZWNvbmQoc2Vjb25kKSA/IHByZWZpeENscyArICctc2VsZWN0LW9wdGlvbi1zZWxlY3RlZCcgOiAnJyB9fVxyXG4gICAgICAgICAgICAgICAge3sgc2Vjb25kLmRpc2FibGVkID8gcHJlZml4Q2xzICsgJy1zZWxlY3Qtb3B0aW9uLWRpc2FibGVkJyA6ICcnIH19XHJcbiAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt7IHNlY29uZC5pbmRleCB8IG51bWJlcjogJzIuMC0wJyB9fVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJuelVzZTEySG91cnNcIiAjdXNlMTJIb3Vyc0xpc3RFbGVtZW50IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXNlbGVjdFwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHJhbmdlIG9mIHVzZTEySG91cnNSYW5nZVwiPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAqbmdJZj1cIiFuekhpZGVEaXNhYmxlZE9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QxMkhvdXJzKHJhbmdlKVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgIHt7IGlzU2VsZWN0ZWQxMkhvdXJzKHJhbmdlKSA/IHByZWZpeENscyArICctc2VsZWN0LW9wdGlvbi1zZWxlY3RlZCcgOiAnJyB9fVxyXG4gICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7eyByYW5nZS52YWx1ZSB9fVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tYWRkb25cIiAqbmdJZj1cIm56QWRkT25cIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56QWRkT25cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=