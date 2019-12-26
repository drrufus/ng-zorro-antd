/**
 * @fileoverview added by tsickle
 * Generated from: nz-time-picker-panel.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DebugElement, ElementRef, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, reqAnimFrame, InputBoolean, NzUpdateHostClassService as UpdateCls } from 'ng-zorro-antd/core';
import { NzTimeValueAccessorDirective } from './nz-time-value-accessor.directive';
import { TimeHolder } from './time-holder';
/**
 * @param {?} length
 * @param {?=} step
 * @param {?=} start
 * @return {?}
 */
function makeRange(length, step, start) {
    if (step === void 0) { step = 1; }
    if (start === void 0) { start = 0; }
    return new Array(Math.ceil(length / step)).fill(0).map((/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    function (_, i) { return (i + start) * step; }));
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
        get: /**
         * @return {?}
         */
        function () {
            return this._allowEmpty;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._allowEmpty = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledHours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledHours;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabledHours = value;
            if (this._disabledHours) {
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledMinutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledMinutes = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledSeconds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledSeconds = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.enabledColumns = 0;
                /** @type {?} */
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
        get: /**
         * @return {?}
         */
        function () {
            return this._nzHourStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzHourStep = value;
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzMinuteStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzMinuteStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzMinuteStep = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzSecondStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzSecondStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzSecondStep = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectInputRange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.nzTimeValueAccessorDirective) {
                _this.nzTimeValueAccessorDirective.setRange();
            }
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildHours = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var hourRanges = 24;
        /** @type {?} */
        var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
        /** @type {?} */
        var startIndex = 0;
        if (this.nzUse12Hours) {
            hourRanges = 12;
            if (disabledHours) {
                if (this.time.selected12Hours === 'PM') {
                    /**
                     * Filter and transform hours which greater or equal to 12
                     * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return i >= 12; })).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return (i > 12 ? i - 12 : i); }));
                }
                else {
                    /**
                     * Filter and transform hours which less than 12
                     * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return i < 12 || i === 24; })).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return (i === 24 || i === 0 ? 12 : i); }));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledHours && disabledHours.indexOf(r) !== -1
            };
        }));
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            /** @type {?} */
            var temp = tslib_1.__spread(this.hourRange);
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildMinutes = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.minuteRange = makeRange(60, this.nzMinuteStep).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledMinutes && _this.nzDisabledMinutes((/** @type {?} */ (_this.time.hours))).indexOf(r) !== -1
            };
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildSeconds = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.secondRange = makeRange(60, this.nzSecondStep).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledSeconds && _this.nzDisabledSeconds((/** @type {?} */ (_this.time.hours)), (/** @type {?} */ (_this.time.minutes))).indexOf(r) !== -1
            };
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.build12Hours = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildTimes = /**
     * @return {?}
     */
    function () {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.time.setHours(hour.index, hour.disabled);
        this.scrollToSelected(this.hourListElement.nativeElement, hour.index, 120, 'hour');
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        this.time.setSeconds(second.index, second.disabled);
        this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.select12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
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
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollToSelected = /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    function (instance, index, duration, unit) {
        if (duration === void 0) { duration = 0; }
        /** @type {?} */
        var transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        var currentOption = (/** @type {?} */ ((instance.children[0].children[transIndex] ||
            instance.children[0].children[0])));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    };
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.translateIndex = /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    function (index, unit) {
        if (unit === 'hour') {
            /** @type {?} */
            var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            return this.calcIndex(disabledHours, this.hourRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else if (unit === 'minute') {
            /** @type {?} */
            var disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes((/** @type {?} */ (this.time.hours)));
            return this.calcIndex(disabledMinutes, this.minuteRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            /** @type {?} */
            var disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds((/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes)));
            return this.calcIndex(disabledSeconds, this.secondRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
    };
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollTo = /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    function (element, to, duration) {
        var _this = this;
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        var difference = to - element.scrollTop;
        /** @type {?} */
        var perTick = (difference / duration) * 10;
        reqAnimFrame((/**
         * @return {?}
         */
        function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        }));
    };
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.calcIndex = /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    function (array, index) {
        if (array && array.length && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((/**
                 * @param {?} pre
                 * @param {?} value
                 * @return {?}
                 */
                function (pre, value) {
                    return pre + (value < index ? 1 : 0);
                }), 0));
        }
        else {
            return index;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.changed = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.onChange) {
            this.onChange((/** @type {?} */ (this.time.value)));
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.touched = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.onTouch) {
            this.onTouch();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
            _a["" + this.prefixCls] = true,
            _a[this.prefixCls + "-column-" + this.enabledColumns] = this.nzInDatePicker ? false : true,
            _a[this.prefixCls + "-narrow"] = this.enabledColumns < 3,
            _a[this.prefixCls + "-placement-bottomLeft"] = this.nzInDatePicker ? false : true,
            _a));
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        return (hour.index === this.time.viewHours ||
            (!isNotNil(this.time.viewHours) && hour.index === this.time.defaultViewHours));
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        return (minute.index === this.time.minutes || (!isNotNil(this.time.minutes) && minute.index === this.time.defaultMinutes));
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        return (second.index === this.time.seconds || (!isNotNil(this.time.seconds) && second.index === this.time.defaultSeconds));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelected12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (value.value.toUpperCase() === this.time.selected12Hours ||
            (!isNotNil(this.time.selected12Hours) && value.value.toUpperCase() === this.time.default12Hours));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.initPosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.hourEnabled && _this.hourListElement) {
                if (isNotNil(_this.time.viewHours)) {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, (/** @type {?} */ (_this.time.viewHours)), 0, 'hour');
                }
                else {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, _this.time.defaultViewHours, 0, 'hour');
                }
            }
            if (_this.minuteEnabled && _this.minuteListElement) {
                if (isNotNil(_this.time.minutes)) {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, (/** @type {?} */ (_this.time.minutes)), 0, 'minute');
                }
                else {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, _this.time.defaultMinutes, 0, 'minute');
                }
            }
            if (_this.secondEnabled && _this.secondListElement) {
                if (isNotNil(_this.time.seconds)) {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, (/** @type {?} */ (_this.time.seconds)), 0, 'second');
                }
                else {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, _this.time.defaultSeconds, 0, 'second');
                }
            }
            if (_this.nzUse12Hours && _this.use12HoursListElement) {
                /** @type {?} */
                var selectedHours = isNotNil(_this.time.selected12Hours)
                    ? _this.time.selected12Hours
                    : _this.time.default12Hours;
                /** @type {?} */
                var index = selectedHours === 'AM' ? 0 : 1;
                _this.scrollToSelected(_this.use12HoursListElement.nativeElement, index, 0, '12-hour');
            }
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzInDatePicker) {
            this.prefixCls = 'ant-calendar-time-picker';
        }
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.changed();
            _this.touched();
        }));
        this.buildTimes();
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
            /** @type {?} */
            var value = nzDefaultOpenValue.currentValue;
            if (isNotNil(value)) {
                this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    NzTimePickerPanelComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-time-picker-panel',
                    exportAs: 'nzTimePickerPanel',
                    template: "<div class=\"{{ nzInDatePicker ? prefixCls + '-panel' : '' }}\">\r\n  <div\r\n    class=\"{{ prefixCls }}-inner {{ nzInDatePicker ? prefixCls + '-column-' + enabledColumns : '' }}\"\r\n    [style.width.px]=\"nzInDatePicker ? null : enabledColumns * 56\">\r\n    <div class=\"{{ prefixCls }}-input-wrap\">\r\n      <input\r\n        type=\"text\"\r\n        class=\"{{ prefixCls }}-input\"\r\n        [placeholder]=\"nzPlaceHolder\"\r\n        [nzTime]=\"format\"\r\n        [(ngModel)]=\"time.value\"\r\n        (blur)=\"time.changed()\">\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-combobox\">\r\n      <div\r\n        *ngIf=\"hourEnabled\"\r\n        #hourListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let hour of hourRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && hour.disabled)\"\r\n              (click)=\"selectHour(hour)\"\r\n              class=\"\r\n                {{ isSelectedHour(hour) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ hour.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ hour.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"minuteEnabled\"\r\n        #minuteListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let minute of minuteRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && minute.disabled)\"\r\n              (click)=\"selectMinute(minute)\"\r\n              class=\"\r\n                {{ isSelectedMinute(minute) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ minute.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ minute.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"secondEnabled\"\r\n        #secondListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let second of secondRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && second.disabled)\"\r\n              (click)=\"selectSecond(second)\"\r\n              class=\"\r\n                {{ isSelectedSecond(second) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ second.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ second.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"nzUse12Hours\"\r\n        #use12HoursListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let range of use12HoursRange \">\r\n            <li\r\n              *ngIf=\"!nzHideDisabledOptions\"\r\n              (click)=\"select12Hours(range)\"\r\n              class=\"\r\n                {{ isSelected12Hours(range) ? prefixCls + '-select-option-selected' : '' }}\r\n              \"\r\n            >\r\n              {{ range.value }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-addon\" *ngIf=\"nzAddOn\">\r\n      <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\r\n    </div>\r\n  </div>\r\n</div>",
                    providers: [UpdateCls, { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    NzTimePickerPanelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: UpdateCls },
        { type: ChangeDetectorRef }
    ]; };
    NzTimePickerPanelComponent.propDecorators = {
        nzTimeValueAccessorDirective: [{ type: ViewChild, args: [NzTimeValueAccessorDirective, { static: false },] }],
        hourListElement: [{ type: ViewChild, args: ['hourListElement', { static: false },] }],
        minuteListElement: [{ type: ViewChild, args: ['minuteListElement', { static: false },] }],
        secondListElement: [{ type: ViewChild, args: ['secondListElement', { static: false },] }],
        use12HoursListElement: [{ type: ViewChild, args: ['use12HoursListElement', { static: false },] }],
        nzInDatePicker: [{ type: Input }],
        nzAddOn: [{ type: Input }],
        nzHideDisabledOptions: [{ type: Input }],
        nzClearText: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzUse12Hours: [{ type: Input }],
        opened: [{ type: Input }],
        nzDefaultOpenValue: [{ type: Input }],
        nzAllowEmpty: [{ type: Input }],
        nzDisabledHours: [{ type: Input }],
        nzDisabledMinutes: [{ type: Input }],
        nzDisabledSeconds: [{ type: Input }],
        format: [{ type: Input }],
        nzHourStep: [{ type: Input }],
        nzMinuteStep: [{ type: Input }],
        nzSecondStep: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
    return NzTimePickerPanelComponent;
}());
export { NzTimePickerPanelComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzHourStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzMinuteStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzSecondStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.onTouch;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._format;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledHours;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledMinutes;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledSeconds;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._allowEmpty;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.prefixCls;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.time;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.enabledColumns;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.use12HoursRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzTimeValueAccessorDirective;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.use12HoursListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzInDatePicker;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzHideDisabledOptions;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzUse12Hours;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.opened;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzDefaultOpenValue;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.updateCls;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUtMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsd0JBQXdCLElBQUksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUUzQyxTQUFTLFNBQVMsQ0FBQyxNQUFjLEVBQUUsSUFBZ0IsRUFBRSxLQUFpQjtJQUFuQyxxQkFBQSxFQUFBLFFBQWdCO0lBQUUsc0JBQUEsRUFBQSxTQUFpQjtJQUNwRSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O0lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFs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ZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRGVidWdFbGVtZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgcmVxQW5pbUZyYW1lLCBJbnB1dEJvb2xlYW4sIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBhcyBVcGRhdGVDbHMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUaW1lSG9sZGVyIH0gZnJvbSAnLi90aW1lLWhvbGRlcic7XHJcblxyXG5mdW5jdGlvbiBtYWtlUmFuZ2UobGVuZ3RoOiBudW1iZXIsIHN0ZXA6IG51bWJlciA9IDEsIHN0YXJ0OiBudW1iZXIgPSAwKTogbnVtYmVyW10ge1xyXG4gIHJldHVybiBuZXcgQXJyYXkoTWF0aC5jZWlsKGxlbmd0aCAvIHN0ZXApKS5maWxsKDApLm1hcCgoXywgaSkgPT4gKGkgKyBzdGFydCkgKiBzdGVwKTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTnpUaW1lUGlja2VyVW5pdCA9ICdob3VyJyB8ICdtaW51dGUnIHwgJ3NlY29uZCcgfCAnMTItaG91cic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnbnotdGltZS1waWNrZXItcGFuZWwnLFxyXG4gIGV4cG9ydEFzOiAnbnpUaW1lUGlja2VyUGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbVXBkYXRlQ2xzLCB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogTnpUaW1lUGlja2VyUGFuZWxDb21wb25lbnQsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIF9uekhvdXJTdGVwID0gMTtcclxuICBwcml2YXRlIF9uek1pbnV0ZVN0ZXAgPSAxO1xyXG4gIHByaXZhdGUgX256U2Vjb25kU3RlcCA9IDE7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgb25DaGFuZ2U6ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZDtcclxuICBwcml2YXRlIG9uVG91Y2g6ICgpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBfZm9ybWF0ID0gJ0hIOm1tOnNzJztcclxuICBwcml2YXRlIF9kaXNhYmxlZEhvdXJzOiAoKSA9PiBudW1iZXJbXTtcclxuICBwcml2YXRlIF9kaXNhYmxlZE1pbnV0ZXM6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkU2Vjb25kczogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdO1xyXG4gIHByaXZhdGUgX2FsbG93RW1wdHkgPSB0cnVlO1xyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC10aW1lLXBpY2tlci1wYW5lbCc7XHJcbiAgdGltZSA9IG5ldyBUaW1lSG9sZGVyKCk7XHJcbiAgaG91ckVuYWJsZWQgPSB0cnVlO1xyXG4gIG1pbnV0ZUVuYWJsZWQgPSB0cnVlO1xyXG4gIHNlY29uZEVuYWJsZWQgPSB0cnVlO1xyXG4gIGVuYWJsZWRDb2x1bW5zID0gMztcclxuICBob3VyUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcclxuICBtaW51dGVSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xyXG4gIHNlY29uZFJhbmdlOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XHJcbiAgdXNlMTJIb3Vyc1JhbmdlOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9PjtcclxuXHJcbiAgQFZpZXdDaGlsZChOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBuelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlOiBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlO1xyXG4gIEBWaWV3Q2hpbGQoJ2hvdXJMaXN0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIGhvdXJMaXN0RWxlbWVudDogRGVidWdFbGVtZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ21pbnV0ZUxpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG1pbnV0ZUxpc3RFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnc2Vjb25kTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgc2Vjb25kTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcclxuICBAVmlld0NoaWxkKCd1c2UxMkhvdXJzTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgdXNlMTJIb3Vyc0xpc3RFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XHJcblxyXG4gIEBJbnB1dCgpIG56SW5EYXRlUGlja2VyOiBib29sZWFuID0gZmFsc2U7IC8vIElmIGluc2lkZSBhIGRhdGUtcGlja2VyLCBtb3JlIGRpZmYgd29ya3MgbmVlZCB0byBiZSBkb25lXHJcbiAgQElucHV0KCkgbnpBZGRPbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpIaWRlRGlzYWJsZWRPcHRpb25zID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpDbGVhclRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VXNlMTJIb3VycyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG9wZW5lZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGVmYXVsdE9wZW5WYWx1ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56QWxsb3dFbXB0eSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9hbGxvd0VtcHR5ID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpBbGxvd0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FsbG93RW1wdHk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkSG91cnModmFsdWU6ICgpID0+IG51bWJlcltdKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZEhvdXJzID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRIb3Vycykge1xyXG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekRpc2FibGVkSG91cnMoKTogKCkgPT4gbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkSG91cnM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkTWludXRlcyh2YWx1ZTogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10pIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZWRNaW51dGVzID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZE1pbnV0ZXMoKTogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkTWludXRlcztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGlzYWJsZWRTZWNvbmRzKHZhbHVlOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW10pIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZWRTZWNvbmRzID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZFNlY29uZHMoKTogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZFNlY29uZHM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmb3JtYXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucyA9IDA7XHJcbiAgICAgIGNvbnN0IGNoYXJTZXQgPSBuZXcgU2V0KHZhbHVlKTtcclxuICAgICAgdGhpcy5ob3VyRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdIJykgfHwgY2hhclNldC5oYXMoJ2gnKTtcclxuICAgICAgdGhpcy5taW51dGVFbmFibGVkID0gY2hhclNldC5oYXMoJ20nKTtcclxuICAgICAgdGhpcy5zZWNvbmRFbmFibGVkID0gY2hhclNldC5oYXMoJ3MnKTtcclxuICAgICAgaWYgKHRoaXMuaG91ckVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubWludXRlRW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zZWNvbmRFbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm56VXNlMTJIb3Vycykge1xyXG4gICAgICAgIHRoaXMuYnVpbGQxMkhvdXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBmb3JtYXQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekhvdXJTdGVwKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fbnpIb3VyU3RlcCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekhvdXJTdGVwKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbnpIb3VyU3RlcDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56TWludXRlU3RlcCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX256TWludXRlU3RlcCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56TWludXRlU3RlcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX256TWludXRlU3RlcDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2Vjb25kU3RlcCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX256U2Vjb25kU3RlcCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2Vjb25kU3RlcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX256U2Vjb25kU3RlcDtcclxuICB9XHJcblxyXG4gIHNlbGVjdElucHV0UmFuZ2UoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMubnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZS5zZXRSYW5nZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJ1aWxkSG91cnMoKTogdm9pZCB7XHJcbiAgICBsZXQgaG91clJhbmdlcyA9IDI0O1xyXG4gICAgbGV0IGRpc2FibGVkSG91cnMgPSB0aGlzLm56RGlzYWJsZWRIb3VycyAmJiB0aGlzLm56RGlzYWJsZWRIb3VycygpO1xyXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwO1xyXG4gICAgaWYgKHRoaXMubnpVc2UxMkhvdXJzKSB7XHJcbiAgICAgIGhvdXJSYW5nZXMgPSAxMjtcclxuICAgICAgaWYgKGRpc2FibGVkSG91cnMpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycyA9PT0gJ1BNJykge1xyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBGaWx0ZXIgYW5kIHRyYW5zZm9ybSBob3VycyB3aGljaCBncmVhdGVyIG9yIGVxdWFsIHRvIDEyXHJcbiAgICAgICAgICAgKiBbMCwgMSwgMiwgLi4uLCAxMiwgMTMsIDE0LCAxNSwgLi4uLCAyM10gPT4gWzEyLCAxLCAyLCAzLCAuLi4sIDExXVxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBkaXNhYmxlZEhvdXJzID0gZGlzYWJsZWRIb3Vycy5maWx0ZXIoaSA9PiBpID49IDEyKS5tYXAoaSA9PiAoaSA+IDEyID8gaSAtIDEyIDogaSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIEZpbHRlciBhbmQgdHJhbnNmb3JtIGhvdXJzIHdoaWNoIGxlc3MgdGhhbiAxMlxyXG4gICAgICAgICAgICogWzAsIDEsIDIsLi4uLCAxMiwgMTMsIDE0LCAxNSwgLi4uMjNdID0+IFsxMiwgMSwgMiwgMywgLi4uLCAxMV1cclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgZGlzYWJsZWRIb3VycyA9IGRpc2FibGVkSG91cnMuZmlsdGVyKGkgPT4gaSA8IDEyIHx8IGkgPT09IDI0KS5tYXAoaSA9PiAoaSA9PT0gMjQgfHwgaSA9PT0gMCA/IDEyIDogaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzdGFydEluZGV4ID0gMTtcclxuICAgIH1cclxuICAgIHRoaXMuaG91clJhbmdlID0gbWFrZVJhbmdlKGhvdXJSYW5nZXMsIHRoaXMubnpIb3VyU3RlcCwgc3RhcnRJbmRleCkubWFwKHIgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGluZGV4OiByLFxyXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLm56RGlzYWJsZWRIb3VycyAmJiBkaXNhYmxlZEhvdXJzLmluZGV4T2YocikgIT09IC0xXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLm56VXNlMTJIb3VycyAmJiB0aGlzLmhvdXJSYW5nZVt0aGlzLmhvdXJSYW5nZS5sZW5ndGggLSAxXS5pbmRleCA9PT0gMTIpIHtcclxuICAgICAgY29uc3QgdGVtcCA9IFsuLi50aGlzLmhvdXJSYW5nZV07XHJcbiAgICAgIHRlbXAudW5zaGlmdCh0ZW1wW3RlbXAubGVuZ3RoIC0gMV0pO1xyXG4gICAgICB0ZW1wLnNwbGljZSh0ZW1wLmxlbmd0aCAtIDEsIDEpO1xyXG4gICAgICB0aGlzLmhvdXJSYW5nZSA9IHRlbXA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidWlsZE1pbnV0ZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1pbnV0ZVJhbmdlID0gbWFrZVJhbmdlKDYwLCB0aGlzLm56TWludXRlU3RlcCkubWFwKHIgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGluZGV4OiByLFxyXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLm56RGlzYWJsZWRNaW51dGVzICYmIHRoaXMubnpEaXNhYmxlZE1pbnV0ZXModGhpcy50aW1lLmhvdXJzISkuaW5kZXhPZihyKSAhPT0gLTFcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRTZWNvbmRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWNvbmRSYW5nZSA9IG1ha2VSYW5nZSg2MCwgdGhpcy5uelNlY29uZFN0ZXApLm1hcChyID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbmRleDogcixcclxuICAgICAgICBkaXNhYmxlZDpcclxuICAgICAgICAgIHRoaXMubnpEaXNhYmxlZFNlY29uZHMgJiYgdGhpcy5uekRpc2FibGVkU2Vjb25kcyh0aGlzLnRpbWUuaG91cnMhLCB0aGlzLnRpbWUubWludXRlcyEpLmluZGV4T2YocikgIT09IC0xXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJ1aWxkMTJIb3VycygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzVXBwZXJGb3JhbXQgPSB0aGlzLl9mb3JtYXQuaW5jbHVkZXMoJ0EnKTtcclxuICAgIHRoaXMudXNlMTJIb3Vyc1JhbmdlID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgdmFsdWU6IGlzVXBwZXJGb3JhbXQgPyAnQU0nIDogJ2FtJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW5kZXg6IDEsXHJcbiAgICAgICAgdmFsdWU6IGlzVXBwZXJGb3JhbXQgPyAnUE0nIDogJ3BtJ1xyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRUaW1lcygpOiB2b2lkIHtcclxuICAgIHRoaXMuYnVpbGRIb3VycygpO1xyXG4gICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcclxuICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XHJcbiAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SG91cihob3VyOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcclxuICAgIHRoaXMudGltZS5zZXRIb3Vycyhob3VyLmluZGV4LCBob3VyLmRpc2FibGVkKTtcclxuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLmhvdXJMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBob3VyLmluZGV4LCAxMjAsICdob3VyJyk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xyXG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcyB8fCB0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcclxuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdE1pbnV0ZShtaW51dGU6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xyXG4gICAgdGhpcy50aW1lLnNldE1pbnV0ZXMobWludXRlLmluZGV4LCBtaW51dGUuZGlzYWJsZWQpO1xyXG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMubWludXRlTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgbWludXRlLmluZGV4LCAxMjAsICdtaW51dGUnKTtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZFNlY29uZHMpIHtcclxuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFNlY29uZChzZWNvbmQ6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xyXG4gICAgdGhpcy50aW1lLnNldFNlY29uZHMoc2Vjb25kLmluZGV4LCBzZWNvbmQuZGlzYWJsZWQpO1xyXG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgc2Vjb25kLmluZGV4LCAxMjAsICdzZWNvbmQnKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdDEySG91cnModmFsdWU6IHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzID0gdmFsdWUudmFsdWU7XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRIb3Vycykge1xyXG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcclxuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZFNlY29uZHMpIHtcclxuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnVzZTEySG91cnNMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB2YWx1ZS5pbmRleCwgMTIwLCAnMTItaG91cicpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9TZWxlY3RlZChpbnN0YW5jZTogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAwLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmFuc0luZGV4ID0gdGhpcy50cmFuc2xhdGVJbmRleChpbmRleCwgdW5pdCk7XHJcbiAgICBjb25zdCBjdXJyZW50T3B0aW9uID0gKGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuW3RyYW5zSW5kZXhdIHx8XHJcbiAgICAgIGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuc2Nyb2xsVG8oaW5zdGFuY2UsIGN1cnJlbnRPcHRpb24ub2Zmc2V0VG9wLCBkdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICB0cmFuc2xhdGVJbmRleChpbmRleDogbnVtYmVyLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogbnVtYmVyIHtcclxuICAgIGlmICh1bml0ID09PSAnaG91cicpIHtcclxuICAgICAgY29uc3QgZGlzYWJsZWRIb3VycyA9IHRoaXMubnpEaXNhYmxlZEhvdXJzICYmIHRoaXMubnpEaXNhYmxlZEhvdXJzKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChkaXNhYmxlZEhvdXJzLCB0aGlzLmhvdXJSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtaW51dGUnKSB7XHJcbiAgICAgIGNvbnN0IGRpc2FibGVkTWludXRlcyA9IHRoaXMubnpEaXNhYmxlZE1pbnV0ZXMgJiYgdGhpcy5uekRpc2FibGVkTWludXRlcyh0aGlzLnRpbWUuaG91cnMhKTtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkTWludXRlcywgdGhpcy5taW51dGVSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdzZWNvbmQnKSB7XHJcbiAgICAgIC8vIHNlY29uZFxyXG4gICAgICBjb25zdCBkaXNhYmxlZFNlY29uZHMgPSB0aGlzLm56RGlzYWJsZWRTZWNvbmRzICYmIHRoaXMubnpEaXNhYmxlZFNlY29uZHModGhpcy50aW1lLmhvdXJzISwgdGhpcy50aW1lLm1pbnV0ZXMhKTtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkU2Vjb25kcywgdGhpcy5zZWNvbmRSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAxMi1ob3VyXHJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChbXSwgdGhpcy51c2UxMkhvdXJzUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG8oZWxlbWVudDogSFRNTEVsZW1lbnQsIHRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG87XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgY29uc3QgcGVyVGljayA9IChkaWZmZXJlbmNlIC8gZHVyYXRpb24pICogMTA7XHJcblxyXG4gICAgcmVxQW5pbUZyYW1lKCgpID0+IHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCArIHBlclRpY2s7XHJcbiAgICAgIGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PT0gdG8pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhbGNJbmRleChhcnJheTogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKGFycmF5ICYmIGFycmF5Lmxlbmd0aCAmJiB0aGlzLm56SGlkZURpc2FibGVkT3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGluZGV4IC1cclxuICAgICAgICBhcnJheS5yZWR1Y2UoKHByZSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiBwcmUgKyAodmFsdWUgPCBpbmRleCA/IDEgOiAwKTtcclxuICAgICAgICB9LCAwKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudGltZS52YWx1ZSEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHRvdWNoZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vblRvdWNoKSB7XHJcbiAgICAgIHRoaXMub25Ub3VjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xzLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9YF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY29sdW1uLSR7dGhpcy5lbmFibGVkQ29sdW1uc31gXTogdGhpcy5uekluRGF0ZVBpY2tlciA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uYXJyb3dgXTogdGhpcy5lbmFibGVkQ29sdW1ucyA8IDMsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tcGxhY2VtZW50LWJvdHRvbUxlZnRgXTogdGhpcy5uekluRGF0ZVBpY2tlciA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkSG91cihob3VyOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGhvdXIuaW5kZXggPT09IHRoaXMudGltZS52aWV3SG91cnMgfHxcclxuICAgICAgKCFpc05vdE5pbCh0aGlzLnRpbWUudmlld0hvdXJzKSAmJiBob3VyLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdFZpZXdIb3VycylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkTWludXRlKG1pbnV0ZTogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBtaW51dGUuaW5kZXggPT09IHRoaXMudGltZS5taW51dGVzIHx8ICghaXNOb3ROaWwodGhpcy50aW1lLm1pbnV0ZXMpICYmIG1pbnV0ZS5pbmRleCA9PT0gdGhpcy50aW1lLmRlZmF1bHRNaW51dGVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRTZWNvbmQoc2Vjb25kOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHNlY29uZC5pbmRleCA9PT0gdGhpcy50aW1lLnNlY29uZHMgfHwgKCFpc05vdE5pbCh0aGlzLnRpbWUuc2Vjb25kcykgJiYgc2Vjb25kLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdFNlY29uZHMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZDEySG91cnModmFsdWU6IHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB2YWx1ZS52YWx1ZS50b1VwcGVyQ2FzZSgpID09PSB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzIHx8XHJcbiAgICAgICghaXNOb3ROaWwodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycykgJiYgdmFsdWUudmFsdWUudG9VcHBlckNhc2UoKSA9PT0gdGhpcy50aW1lLmRlZmF1bHQxMkhvdXJzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGluaXRQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5ob3VyRW5hYmxlZCAmJiB0aGlzLmhvdXJMaXN0RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUudmlld0hvdXJzKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS52aWV3SG91cnMhLCAwLCAnaG91cicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLmRlZmF1bHRWaWV3SG91cnMsIDAsICdob3VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQgJiYgdGhpcy5taW51dGVMaXN0RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUubWludXRlcykpIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5taW51dGVzISwgMCwgJ21pbnV0ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuZGVmYXVsdE1pbnV0ZXMsIDAsICdtaW51dGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCAmJiB0aGlzLnNlY29uZExpc3RFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMudGltZS5zZWNvbmRzKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLnNlY29uZHMhLCAwLCAnc2Vjb25kJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5kZWZhdWx0U2Vjb25kcywgMCwgJ3NlY29uZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uelVzZTEySG91cnMgJiYgdGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEhvdXJzID0gaXNOb3ROaWwodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycylcclxuICAgICAgICAgID8gdGhpcy50aW1lLnNlbGVjdGVkMTJIb3Vyc1xyXG4gICAgICAgICAgOiB0aGlzLnRpbWUuZGVmYXVsdDEySG91cnM7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZEhvdXJzID09PSAnQU0nID8gMCA6IDE7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMudXNlMTJIb3Vyc0xpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGluZGV4LCAwLCAnMTItaG91cicpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVDbHM6IFVwZGF0ZUNscywgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56SW5EYXRlUGlja2VyKSB7XHJcbiAgICAgIHRoaXMucHJlZml4Q2xzID0gJ2FudC1jYWxlbmRhci10aW1lLXBpY2tlcic7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoYW5nZWQoKTtcclxuICAgICAgdGhpcy50b3VjaGVkKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYnVpbGRUaW1lcygpO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuelVzZTEySG91cnMsIG9wZW5lZCwgbnpEZWZhdWx0T3BlblZhbHVlIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKG56VXNlMTJIb3VycyAmJiAhbnpVc2UxMkhvdXJzLnByZXZpb3VzVmFsdWUgJiYgbnpVc2UxMkhvdXJzLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xyXG4gICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XHJcbiAgICB9XHJcbiAgICBpZiAob3BlbmVkICYmIG9wZW5lZC5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5pbml0UG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5zZWxlY3RJbnB1dFJhbmdlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnpEZWZhdWx0T3BlblZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlOiBEYXRlID0gbnpEZWZhdWx0T3BlblZhbHVlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMudGltZS5zZXREZWZhdWx0T3BlblZhbHVlKHRoaXMubnpEZWZhdWx0T3BlblZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy50aW1lLnNldFZhbHVlKHZhbHVlLCB0aGlzLm56VXNlMTJIb3Vycyk7XHJcbiAgICB0aGlzLmJ1aWxkVGltZXMoKTtcclxuXHJcbiAgICAvLyBNYXJrIHRoaXMgY29tcG9uZW50IHRvIGJlIGNoZWNrZWQgbWFudWFsbHkgd2l0aCBpbnRlcm5hbCBwcm9wZXJ0aWVzIGNoYW5naW5nIChzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODE2KVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcclxuICB9XHJcbn1cclxuIl19