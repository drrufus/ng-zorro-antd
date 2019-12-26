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
function makeRange(length, step = 1, start = 0) {
    return new Array(Math.ceil(length / step)).fill(0).map((/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    (_, i) => (i + start) * step));
}
export class NzTimePickerPanelComponent {
    /**
     * @param {?} element
     * @param {?} updateCls
     * @param {?} cdr
     */
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAllowEmpty(value) {
        if (isNotNil(value)) {
            this._allowEmpty = value;
        }
    }
    /**
     * @return {?}
     */
    get nzAllowEmpty() {
        return this._allowEmpty;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledHours(value) {
        this._disabledHours = value;
        if (this._disabledHours) {
            this.buildHours();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledHours() {
        return this._disabledHours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledMinutes(value) {
        if (isNotNil(value)) {
            this._disabledMinutes = value;
            this.buildMinutes();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledMinutes() {
        return this._disabledMinutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledSeconds(value) {
        if (isNotNil(value)) {
            this._disabledSeconds = value;
            this.buildSeconds();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledSeconds() {
        return this._disabledSeconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set format(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.enabledColumns = 0;
            /** @type {?} */
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
    /**
     * @return {?}
     */
    get format() {
        return this._format;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHourStep(value) {
        if (isNotNil(value)) {
            this._nzHourStep = value;
            this.buildHours();
        }
    }
    /**
     * @return {?}
     */
    get nzHourStep() {
        return this._nzHourStep;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMinuteStep(value) {
        if (isNotNil(value)) {
            this._nzMinuteStep = value;
            this.buildMinutes();
        }
    }
    /**
     * @return {?}
     */
    get nzMinuteStep() {
        return this._nzMinuteStep;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSecondStep(value) {
        if (isNotNil(value)) {
            this._nzSecondStep = value;
            this.buildSeconds();
        }
    }
    /**
     * @return {?}
     */
    get nzSecondStep() {
        return this._nzSecondStep;
    }
    /**
     * @return {?}
     */
    selectInputRange() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.nzTimeValueAccessorDirective) {
                this.nzTimeValueAccessorDirective.setRange();
            }
        }));
    }
    /**
     * @return {?}
     */
    buildHours() {
        /** @type {?} */
        let hourRanges = 24;
        /** @type {?} */
        let disabledHours = this.nzDisabledHours && this.nzDisabledHours();
        /** @type {?} */
        let startIndex = 0;
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
                    i => i >= 12)).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => (i > 12 ? i - 12 : i)));
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
                    i => i < 12 || i === 24)).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => (i === 24 || i === 0 ? 12 : i)));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: this.nzDisabledHours && disabledHours.indexOf(r) !== -1
            };
        }));
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            /** @type {?} */
            const temp = [...this.hourRange];
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    }
    /**
     * @return {?}
     */
    buildMinutes() {
        this.minuteRange = makeRange(60, this.nzMinuteStep).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: this.nzDisabledMinutes && this.nzDisabledMinutes((/** @type {?} */ (this.time.hours))).indexOf(r) !== -1
            };
        }));
    }
    /**
     * @return {?}
     */
    buildSeconds() {
        this.secondRange = makeRange(60, this.nzSecondStep).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: this.nzDisabledSeconds && this.nzDisabledSeconds((/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes))).indexOf(r) !== -1
            };
        }));
    }
    /**
     * @return {?}
     */
    build12Hours() {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    buildTimes() {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    }
    /**
     * @param {?} hour
     * @return {?}
     */
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
    /**
     * @param {?} minute
     * @return {?}
     */
    selectMinute(minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
    }
    /**
     * @param {?} second
     * @return {?}
     */
    selectSecond(second) {
        this.time.setSeconds(second.index, second.disabled);
        this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
    }
    /**
     * @param {?} value
     * @return {?}
     */
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
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    scrollToSelected(instance, index, duration = 0, unit) {
        /** @type {?} */
        const transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        const currentOption = (/** @type {?} */ ((instance.children[0].children[transIndex] ||
            instance.children[0].children[0])));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    }
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    translateIndex(index, unit) {
        if (unit === 'hour') {
            /** @type {?} */
            const disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            return this.calcIndex(disabledHours, this.hourRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else if (unit === 'minute') {
            /** @type {?} */
            const disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes((/** @type {?} */ (this.time.hours)));
            return this.calcIndex(disabledMinutes, this.minuteRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            /** @type {?} */
            const disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds((/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes)));
            return this.calcIndex(disabledSeconds, this.secondRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
    }
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    scrollTo(element, to, duration) {
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        const difference = to - element.scrollTop;
        /** @type {?} */
        const perTick = (difference / duration) * 10;
        reqAnimFrame((/**
         * @return {?}
         */
        () => {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            this.scrollTo(element, to, duration - 10);
        }));
    }
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    calcIndex(array, index) {
        if (array && array.length && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((/**
                 * @param {?} pre
                 * @param {?} value
                 * @return {?}
                 */
                (pre, value) => {
                    return pre + (value < index ? 1 : 0);
                }), 0));
        }
        else {
            return index;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    changed() {
        if (this.onChange) {
            this.onChange((/** @type {?} */ (this.time.value)));
        }
    }
    /**
     * @protected
     * @return {?}
     */
    touched() {
        if (this.onTouch) {
            this.onTouch();
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        this.updateCls.updateHostClass(this.element.nativeElement, {
            [`${this.prefixCls}`]: true,
            [`${this.prefixCls}-column-${this.enabledColumns}`]: this.nzInDatePicker ? false : true,
            [`${this.prefixCls}-narrow`]: this.enabledColumns < 3,
            [`${this.prefixCls}-placement-bottomLeft`]: this.nzInDatePicker ? false : true
        });
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    isSelectedHour(hour) {
        return (hour.index === this.time.viewHours ||
            (!isNotNil(this.time.viewHours) && hour.index === this.time.defaultViewHours));
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    isSelectedMinute(minute) {
        return (minute.index === this.time.minutes || (!isNotNil(this.time.minutes) && minute.index === this.time.defaultMinutes));
    }
    /**
     * @param {?} second
     * @return {?}
     */
    isSelectedSecond(second) {
        return (second.index === this.time.seconds || (!isNotNil(this.time.seconds) && second.index === this.time.defaultSeconds));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isSelected12Hours(value) {
        return (value.value.toUpperCase() === this.time.selected12Hours ||
            (!isNotNil(this.time.selected12Hours) && value.value.toUpperCase() === this.time.default12Hours));
    }
    /**
     * @return {?}
     */
    initPosition() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.hourEnabled && this.hourListElement) {
                if (isNotNil(this.time.viewHours)) {
                    this.scrollToSelected(this.hourListElement.nativeElement, (/** @type {?} */ (this.time.viewHours)), 0, 'hour');
                }
                else {
                    this.scrollToSelected(this.hourListElement.nativeElement, this.time.defaultViewHours, 0, 'hour');
                }
            }
            if (this.minuteEnabled && this.minuteListElement) {
                if (isNotNil(this.time.minutes)) {
                    this.scrollToSelected(this.minuteListElement.nativeElement, (/** @type {?} */ (this.time.minutes)), 0, 'minute');
                }
                else {
                    this.scrollToSelected(this.minuteListElement.nativeElement, this.time.defaultMinutes, 0, 'minute');
                }
            }
            if (this.secondEnabled && this.secondListElement) {
                if (isNotNil(this.time.seconds)) {
                    this.scrollToSelected(this.secondListElement.nativeElement, (/** @type {?} */ (this.time.seconds)), 0, 'second');
                }
                else {
                    this.scrollToSelected(this.secondListElement.nativeElement, this.time.defaultSeconds, 0, 'second');
                }
            }
            if (this.nzUse12Hours && this.use12HoursListElement) {
                /** @type {?} */
                const selectedHours = isNotNil(this.time.selected12Hours)
                    ? this.time.selected12Hours
                    : this.time.default12Hours;
                /** @type {?} */
                const index = selectedHours === 'AM' ? 0 : 1;
                this.scrollToSelected(this.use12HoursListElement.nativeElement, index, 0, '12-hour');
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzInDatePicker) {
            this.prefixCls = 'ant-calendar-time-picker';
        }
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.changed();
            this.touched();
        }));
        this.buildTimes();
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
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
            /** @type {?} */
            const value = nzDefaultOpenValue.currentValue;
            if (isNotNil(value)) {
                this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
}
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
NzTimePickerPanelComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: UpdateCls },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUtMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsd0JBQXdCLElBQUksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUUzQyxTQUFTLFNBQVMsQ0FBQyxNQUFjLEVBQUUsT0FBZSxDQUFDLEVBQUUsUUFBZ0IsQ0FBQztJQUNwRSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUMsQ0FBQztBQUN2RixDQUFDO0FBWUQsTUFBTSxPQUFP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b0RBQXVDOzs7OztJQUN2QyxzREFBcUQ7Ozs7O0lBQ3JELHNEQUFxRTs7Ozs7SUFDckUsaURBQTJCOztJQUMzQiwrQ0FBNEM7O0lBQzVDLDBDQUF3Qjs7SUFDeEIsaURBQW1COztJQUNuQixtREFBcUI7O0lBQ3JCLG1EQUFxQjs7SUFDckIsb0RBQW1COztJQUNuQiwrQ0FBK0Q7O0lBQy9ELGlEQUFpRTs7SUFDakUsaURBQWlFOztJQUNqRSxxREFBaUU7O0lBRWpFLGtFQUMyRDs7SUFDM0QscURBQzhCOztJQUM5Qix1REFBbUY7O0lBQ25GLHVEQUFtRjs7SUFDbkYsMkRBQTJGOztJQUUzRixvREFBeUM7O0lBQ3pDLDZDQUFvQzs7SUFDcEMsMkRBQXVDOztJQUN2QyxpREFBNkI7O0lBQzdCLG1EQUErQjs7SUFDL0Isa0RBQThDOztJQUM5Qyw0Q0FBd0I7O0lBQ3hCLHdEQUF5Qzs7Ozs7SUFtWDdCLDZDQUEyQjs7Ozs7SUFBRSwrQ0FBNEI7Ozs7O0lBQUUseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBEZWJ1Z0VsZW1lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsLCByZXFBbmltRnJhbWUsIElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10aW1lLXZhbHVlLWFjY2Vzc29yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRpbWVIb2xkZXIgfSBmcm9tICcuL3RpbWUtaG9sZGVyJztcclxuXHJcbmZ1bmN0aW9uIG1ha2VSYW5nZShsZW5ndGg6IG51bWJlciwgc3RlcDogbnVtYmVyID0gMSwgc3RhcnQ6IG51bWJlciA9IDApOiBudW1iZXJbXSB7XHJcbiAgcmV0dXJuIG5ldyBBcnJheShNYXRoLmNlaWwobGVuZ3RoIC8gc3RlcCkpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoaSArIHN0YXJ0KSAqIHN0ZXApO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOelRpbWVQaWNrZXJVbml0ID0gJ2hvdXInIHwgJ21pbnV0ZScgfCAnc2Vjb25kJyB8ICcxMi1ob3VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICduei10aW1lLXBpY2tlci1wYW5lbCcsXHJcbiAgZXhwb3J0QXM6ICduelRpbWVQaWNrZXJQYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtVcGRhdGVDbHMsIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCwgbXVsdGk6IHRydWUgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGltZVBpY2tlclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgX256SG91clN0ZXAgPSAxO1xyXG4gIHByaXZhdGUgX256TWludXRlU3RlcCA9IDE7XHJcbiAgcHJpdmF0ZSBfbnpTZWNvbmRTdGVwID0gMTtcclxuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgb25Ub3VjaDogKCkgPT4gdm9pZDtcclxuICBwcml2YXRlIF9mb3JtYXQgPSAnSEg6bW06c3MnO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkSG91cnM6ICgpID0+IG51bWJlcltdO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkTWludXRlczogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWRTZWNvbmRzOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgcHJpdmF0ZSBfYWxsb3dFbXB0eSA9IHRydWU7XHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LXRpbWUtcGlja2VyLXBhbmVsJztcclxuICB0aW1lID0gbmV3IFRpbWVIb2xkZXIoKTtcclxuICBob3VyRW5hYmxlZCA9IHRydWU7XHJcbiAgbWludXRlRW5hYmxlZCA9IHRydWU7XHJcbiAgc2Vjb25kRW5hYmxlZCA9IHRydWU7XHJcbiAgZW5hYmxlZENvbHVtbnMgPSAzO1xyXG4gIGhvdXJSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xyXG4gIG1pbnV0ZVJhbmdlOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XHJcbiAgc2Vjb25kUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcclxuICB1c2UxMkhvdXJzUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0+O1xyXG5cclxuICBAVmlld0NoaWxkKE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIG56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmU6IE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmU7XHJcbiAgQFZpZXdDaGlsZCgnaG91ckxpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgaG91ckxpc3RFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnbWludXRlTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWludXRlTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcclxuICBAVmlld0NoaWxkKCdzZWNvbmRMaXN0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBzZWNvbmRMaXN0RWxlbWVudDogRGVidWdFbGVtZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ3VzZTEySG91cnNMaXN0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSB1c2UxMkhvdXJzTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcclxuXHJcbiAgQElucHV0KCkgbnpJbkRhdGVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSWYgaW5zaWRlIGEgZGF0ZS1waWNrZXIsIG1vcmUgZGlmZiB3b3JrcyBuZWVkIHRvIGJlIGRvbmVcclxuICBASW5wdXQoKSBuekFkZE9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekhpZGVEaXNhYmxlZE9wdGlvbnMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekNsZWFyVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpVc2UxMkhvdXJzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgb3BlbmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpEZWZhdWx0T3BlblZhbHVlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpBbGxvd0VtcHR5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2FsbG93RW1wdHkgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekFsbG93RW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dFbXB0eTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGlzYWJsZWRIb3Vycyh2YWx1ZTogKCkgPT4gbnVtYmVyW10pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkSG91cnMgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZEhvdXJzKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGlzYWJsZWRIb3VycygpOiAoKSA9PiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRIb3VycztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGlzYWJsZWRNaW51dGVzKHZhbHVlOiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXSkge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9kaXNhYmxlZE1pbnV0ZXMgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekRpc2FibGVkTWludXRlcygpOiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRNaW51dGVzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEaXNhYmxlZFNlY29uZHModmFsdWU6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXSkge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9kaXNhYmxlZFNlY29uZHMgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekRpc2FibGVkU2Vjb25kcygpOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkU2Vjb25kcztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2Zvcm1hdCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zID0gMDtcclxuICAgICAgY29uc3QgY2hhclNldCA9IG5ldyBTZXQodmFsdWUpO1xyXG4gICAgICB0aGlzLmhvdXJFbmFibGVkID0gY2hhclNldC5oYXMoJ0gnKSB8fCBjaGFyU2V0LmhhcygnaCcpO1xyXG4gICAgICB0aGlzLm1pbnV0ZUVuYWJsZWQgPSBjaGFyU2V0LmhhcygnbScpO1xyXG4gICAgICB0aGlzLnNlY29uZEVuYWJsZWQgPSBjaGFyU2V0LmhhcygncycpO1xyXG4gICAgICBpZiAodGhpcy5ob3VyRW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5taW51dGVFbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNlY29uZEVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubnpVc2UxMkhvdXJzKSB7XHJcbiAgICAgICAgdGhpcy5idWlsZDEySG91cnMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1hdCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SG91clN0ZXAodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9uekhvdXJTdGVwID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56SG91clN0ZXAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9uekhvdXJTdGVwO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpNaW51dGVTdGVwKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fbnpNaW51dGVTdGVwID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpNaW51dGVTdGVwKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbnpNaW51dGVTdGVwO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTZWNvbmRTdGVwKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fbnpTZWNvbmRTdGVwID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTZWNvbmRTdGVwKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbnpTZWNvbmRTdGVwO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SW5wdXRSYW5nZSgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5uelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5uelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLnNldFJhbmdlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRIb3VycygpOiB2b2lkIHtcclxuICAgIGxldCBob3VyUmFuZ2VzID0gMjQ7XHJcbiAgICBsZXQgZGlzYWJsZWRIb3VycyA9IHRoaXMubnpEaXNhYmxlZEhvdXJzICYmIHRoaXMubnpEaXNhYmxlZEhvdXJzKCk7XHJcbiAgICBsZXQgc3RhcnRJbmRleCA9IDA7XHJcbiAgICBpZiAodGhpcy5uelVzZTEySG91cnMpIHtcclxuICAgICAgaG91clJhbmdlcyA9IDEyO1xyXG4gICAgICBpZiAoZGlzYWJsZWRIb3Vycykge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzID09PSAnUE0nKSB7XHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIEZpbHRlciBhbmQgdHJhbnNmb3JtIGhvdXJzIHdoaWNoIGdyZWF0ZXIgb3IgZXF1YWwgdG8gMTJcclxuICAgICAgICAgICAqIFswLCAxLCAyLCAuLi4sIDEyLCAxMywgMTQsIDE1LCAuLi4sIDIzXSA9PiBbMTIsIDEsIDIsIDMsIC4uLiwgMTFdXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGRpc2FibGVkSG91cnMgPSBkaXNhYmxlZEhvdXJzLmZpbHRlcihpID0+IGkgPj0gMTIpLm1hcChpID0+IChpID4gMTIgPyBpIC0gMTIgOiBpKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogRmlsdGVyIGFuZCB0cmFuc2Zvcm0gaG91cnMgd2hpY2ggbGVzcyB0aGFuIDEyXHJcbiAgICAgICAgICAgKiBbMCwgMSwgMiwuLi4sIDEyLCAxMywgMTQsIDE1LCAuLi4yM10gPT4gWzEyLCAxLCAyLCAzLCAuLi4sIDExXVxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBkaXNhYmxlZEhvdXJzID0gZGlzYWJsZWRIb3Vycy5maWx0ZXIoaSA9PiBpIDwgMTIgfHwgaSA9PT0gMjQpLm1hcChpID0+IChpID09PSAyNCB8fCBpID09PSAwID8gMTIgOiBpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHN0YXJ0SW5kZXggPSAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3VyUmFuZ2UgPSBtYWtlUmFuZ2UoaG91clJhbmdlcywgdGhpcy5uekhvdXJTdGVwLCBzdGFydEluZGV4KS5tYXAociA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5kZXg6IHIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMubnpEaXNhYmxlZEhvdXJzICYmIGRpc2FibGVkSG91cnMuaW5kZXhPZihyKSAhPT0gLTFcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMubnpVc2UxMkhvdXJzICYmIHRoaXMuaG91clJhbmdlW3RoaXMuaG91clJhbmdlLmxlbmd0aCAtIDFdLmluZGV4ID09PSAxMikge1xyXG4gICAgICBjb25zdCB0ZW1wID0gWy4uLnRoaXMuaG91clJhbmdlXTtcclxuICAgICAgdGVtcC51bnNoaWZ0KHRlbXBbdGVtcC5sZW5ndGggLSAxXSk7XHJcbiAgICAgIHRlbXAuc3BsaWNlKHRlbXAubGVuZ3RoIC0gMSwgMSk7XHJcbiAgICAgIHRoaXMuaG91clJhbmdlID0gdGVtcDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1aWxkTWludXRlcygpOiB2b2lkIHtcclxuICAgIHRoaXMubWludXRlUmFuZ2UgPSBtYWtlUmFuZ2UoNjAsIHRoaXMubnpNaW51dGVTdGVwKS5tYXAociA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5kZXg6IHIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMubnpEaXNhYmxlZE1pbnV0ZXMgJiYgdGhpcy5uekRpc2FibGVkTWludXRlcyh0aGlzLnRpbWUuaG91cnMhKS5pbmRleE9mKHIpICE9PSAtMVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBidWlsZFNlY29uZHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlY29uZFJhbmdlID0gbWFrZVJhbmdlKDYwLCB0aGlzLm56U2Vjb25kU3RlcCkubWFwKHIgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGluZGV4OiByLFxyXG4gICAgICAgIGRpc2FibGVkOlxyXG4gICAgICAgICAgdGhpcy5uekRpc2FibGVkU2Vjb25kcyAmJiB0aGlzLm56RGlzYWJsZWRTZWNvbmRzKHRoaXMudGltZS5ob3VycyEsIHRoaXMudGltZS5taW51dGVzISkuaW5kZXhPZihyKSAhPT0gLTFcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYnVpbGQxMkhvdXJzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNVcHBlckZvcmFtdCA9IHRoaXMuX2Zvcm1hdC5pbmNsdWRlcygnQScpO1xyXG4gICAgdGhpcy51c2UxMkhvdXJzUmFuZ2UgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBpbmRleDogMCxcclxuICAgICAgICB2YWx1ZTogaXNVcHBlckZvcmFtdCA/ICdBTScgOiAnYW0nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbmRleDogMSxcclxuICAgICAgICB2YWx1ZTogaXNVcHBlckZvcmFtdCA/ICdQTScgOiAncG0nXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBidWlsZFRpbWVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5idWlsZEhvdXJzKCk7XHJcbiAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIHRoaXMuYnVpbGQxMkhvdXJzKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RIb3VyKGhvdXI6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xyXG4gICAgdGhpcy50aW1lLnNldEhvdXJzKGhvdXIuaW5kZXgsIGhvdXIuZGlzYWJsZWQpO1xyXG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGhvdXIuaW5kZXgsIDEyMCwgJ2hvdXInKTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRNaW51dGVzKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRTZWNvbmRzIHx8IHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0TWludXRlKG1pbnV0ZTogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2V0TWludXRlcyhtaW51dGUuaW5kZXgsIG1pbnV0ZS5kaXNhYmxlZCk7XHJcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBtaW51dGUuaW5kZXgsIDEyMCwgJ21pbnV0ZScpO1xyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcykge1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0U2Vjb25kKHNlY29uZDogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2V0U2Vjb25kcyhzZWNvbmQuaW5kZXgsIHNlY29uZC5kaXNhYmxlZCk7XHJcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5zZWNvbmRMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBzZWNvbmQuaW5kZXgsIDEyMCwgJ3NlY29uZCcpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0MTJIb3Vycyh2YWx1ZTogeyBpbmRleDogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgIHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMgPSB2YWx1ZS52YWx1ZTtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZEhvdXJzKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xyXG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcykge1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMudXNlMTJIb3Vyc0xpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHZhbHVlLmluZGV4LCAxMjAsICcxMi1ob3VyJyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb1NlbGVjdGVkKGluc3RhbmNlOiBIVE1MRWxlbWVudCwgaW5kZXg6IG51bWJlciwgZHVyYXRpb246IG51bWJlciA9IDAsIHVuaXQ6IE56VGltZVBpY2tlclVuaXQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRyYW5zSW5kZXggPSB0aGlzLnRyYW5zbGF0ZUluZGV4KGluZGV4LCB1bml0KTtcclxuICAgIGNvbnN0IGN1cnJlbnRPcHRpb24gPSAoaW5zdGFuY2UuY2hpbGRyZW5bMF0uY2hpbGRyZW5bdHJhbnNJbmRleF0gfHxcclxuICAgICAgaW5zdGFuY2UuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0pIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgdGhpcy5zY3JvbGxUbyhpbnN0YW5jZSwgY3VycmVudE9wdGlvbi5vZmZzZXRUb3AsIGR1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHRyYW5zbGF0ZUluZGV4KGluZGV4OiBudW1iZXIsIHVuaXQ6IE56VGltZVBpY2tlclVuaXQpOiBudW1iZXIge1xyXG4gICAgaWYgKHVuaXQgPT09ICdob3VyJykge1xyXG4gICAgICBjb25zdCBkaXNhYmxlZEhvdXJzID0gdGhpcy5uekRpc2FibGVkSG91cnMgJiYgdGhpcy5uekRpc2FibGVkSG91cnMoKTtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkSG91cnMsIHRoaXMuaG91clJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcclxuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21pbnV0ZScpIHtcclxuICAgICAgY29uc3QgZGlzYWJsZWRNaW51dGVzID0gdGhpcy5uekRpc2FibGVkTWludXRlcyAmJiB0aGlzLm56RGlzYWJsZWRNaW51dGVzKHRoaXMudGltZS5ob3VycyEpO1xyXG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgoZGlzYWJsZWRNaW51dGVzLCB0aGlzLm1pbnV0ZVJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcclxuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3NlY29uZCcpIHtcclxuICAgICAgLy8gc2Vjb25kXHJcbiAgICAgIGNvbnN0IGRpc2FibGVkU2Vjb25kcyA9IHRoaXMubnpEaXNhYmxlZFNlY29uZHMgJiYgdGhpcy5uekRpc2FibGVkU2Vjb25kcyh0aGlzLnRpbWUuaG91cnMhLCB0aGlzLnRpbWUubWludXRlcyEpO1xyXG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgoZGlzYWJsZWRTZWNvbmRzLCB0aGlzLnNlY29uZFJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIDEyLWhvdXJcclxuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KFtdLCB0aGlzLnVzZTEySG91cnNSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUbyhlbGVtZW50OiBIVE1MRWxlbWVudCwgdG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGR1cmF0aW9uIDw9IDApIHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSB0bztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IHRvIC0gZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBjb25zdCBwZXJUaWNrID0gKGRpZmZlcmVuY2UgLyBkdXJhdGlvbikgKiAxMDtcclxuXHJcbiAgICByZXFBbmltRnJhbWUoKCkgPT4ge1xyXG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wICsgcGVyVGljaztcclxuICAgICAgaWYgKGVsZW1lbnQuc2Nyb2xsVG9wID09PSB0bykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiAtIDEwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FsY0luZGV4KGFycmF5OiBudW1iZXJbXSwgaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoICYmIHRoaXMubnpIaWRlRGlzYWJsZWRPcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgaW5kZXggLVxyXG4gICAgICAgIGFycmF5LnJlZHVjZSgocHJlLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHByZSArICh2YWx1ZSA8IGluZGV4ID8gMSA6IDApO1xyXG4gICAgICAgIH0sIDApXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy50aW1lLnZhbHVlISk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdG91Y2hlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9uVG91Y2gpIHtcclxuICAgICAgdGhpcy5vblRvdWNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDbHMudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc31gXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jb2x1bW4tJHt0aGlzLmVuYWJsZWRDb2x1bW5zfWBdOiB0aGlzLm56SW5EYXRlUGlja2VyID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5hcnJvd2BdOiB0aGlzLmVuYWJsZWRDb2x1bW5zIDwgMyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1wbGFjZW1lbnQtYm90dG9tTGVmdGBdOiB0aGlzLm56SW5EYXRlUGlja2VyID8gZmFsc2UgOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRIb3VyKGhvdXI6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgaG91ci5pbmRleCA9PT0gdGhpcy50aW1lLnZpZXdIb3VycyB8fFxyXG4gICAgICAoIWlzTm90TmlsKHRoaXMudGltZS52aWV3SG91cnMpICYmIGhvdXIuaW5kZXggPT09IHRoaXMudGltZS5kZWZhdWx0Vmlld0hvdXJzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRNaW51dGUobWludXRlOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG1pbnV0ZS5pbmRleCA9PT0gdGhpcy50aW1lLm1pbnV0ZXMgfHwgKCFpc05vdE5pbCh0aGlzLnRpbWUubWludXRlcykgJiYgbWludXRlLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdE1pbnV0ZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZFNlY29uZChzZWNvbmQ6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgc2Vjb25kLmluZGV4ID09PSB0aGlzLnRpbWUuc2Vjb25kcyB8fCAoIWlzTm90TmlsKHRoaXMudGltZS5zZWNvbmRzKSAmJiBzZWNvbmQuaW5kZXggPT09IHRoaXMudGltZS5kZWZhdWx0U2Vjb25kcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkMTJIb3Vycyh2YWx1ZTogeyBpbmRleDogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHZhbHVlLnZhbHVlLnRvVXBwZXJDYXNlKCkgPT09IHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMgfHxcclxuICAgICAgKCFpc05vdE5pbCh0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzKSAmJiB2YWx1ZS52YWx1ZS50b1VwcGVyQ2FzZSgpID09PSB0aGlzLnRpbWUuZGVmYXVsdDEySG91cnMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaW5pdFBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmhvdXJFbmFibGVkICYmIHRoaXMuaG91ckxpc3RFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMudGltZS52aWV3SG91cnMpKSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLnZpZXdIb3VycyEsIDAsICdob3VyJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLmhvdXJMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuZGVmYXVsdFZpZXdIb3VycywgMCwgJ2hvdXInKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubWludXRlRW5hYmxlZCAmJiB0aGlzLm1pbnV0ZUxpc3RFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMudGltZS5taW51dGVzKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMubWludXRlTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLm1pbnV0ZXMhLCAwLCAnbWludXRlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5kZWZhdWx0TWludXRlcywgMCwgJ21pbnV0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zZWNvbmRFbmFibGVkICYmIHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy50aW1lLnNlY29uZHMpKSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5zZWNvbmRMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuc2Vjb25kcyEsIDAsICdzZWNvbmQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLmRlZmF1bHRTZWNvbmRzLCAwLCAnc2Vjb25kJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm56VXNlMTJIb3VycyAmJiB0aGlzLnVzZTEySG91cnNMaXN0RWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSG91cnMgPSBpc05vdE5pbCh0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzKVxyXG4gICAgICAgICAgPyB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzXHJcbiAgICAgICAgICA6IHRoaXMudGltZS5kZWZhdWx0MTJIb3VycztcclxuICAgICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkSG91cnMgPT09ICdBTScgPyAwIDogMTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgaW5kZXgsIDAsICcxMi1ob3VyJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHVwZGF0ZUNsczogVXBkYXRlQ2xzLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpJbkRhdGVQaWNrZXIpIHtcclxuICAgICAgdGhpcy5wcmVmaXhDbHMgPSAnYW50LWNhbGVuZGFyLXRpbWUtcGlja2VyJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRpbWUuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hhbmdlZCgpO1xyXG4gICAgICB0aGlzLnRvdWNoZWQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5idWlsZFRpbWVzKCk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56VXNlMTJIb3Vycywgb3BlbmVkLCBuekRlZmF1bHRPcGVuVmFsdWUgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAobnpVc2UxMkhvdXJzICYmICFuelVzZTEySG91cnMucHJldmlvdXNWYWx1ZSAmJiBuelVzZTEySG91cnMuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYnVpbGQxMkhvdXJzKCk7XHJcbiAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcclxuICAgIH1cclxuICAgIGlmIChvcGVuZWQgJiYgb3BlbmVkLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmluaXRQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLnNlbGVjdElucHV0UmFuZ2UoKTtcclxuICAgIH1cclxuICAgIGlmIChuekRlZmF1bHRPcGVuVmFsdWUpIHtcclxuICAgICAgY29uc3QgdmFsdWU6IERhdGUgPSBuekRlZmF1bHRPcGVuVmFsdWUuY3VycmVudFZhbHVlO1xyXG4gICAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLnNldERlZmF1bHRPcGVuVmFsdWUodGhpcy5uekRlZmF1bHRPcGVuVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2V0VmFsdWUodmFsdWUsIHRoaXMubnpVc2UxMkhvdXJzKTtcclxuICAgIHRoaXMuYnVpbGRUaW1lcygpO1xyXG5cclxuICAgIC8vIE1hcmsgdGhpcyBjb21wb25lbnQgdG8gYmUgY2hlY2tlZCBtYW51YWxseSB3aXRoIGludGVybmFsIHByb3BlcnRpZXMgY2hhbmdpbmcgKHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA4MTYpXHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xyXG4gIH1cclxufVxyXG4iXX0=