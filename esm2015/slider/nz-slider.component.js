/**
 * @fileoverview added by tsickle
 * Generated from: nz-slider.component.ts
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
import { Platform } from '@angular/cdk/platform';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { arraysEqual, ensureNumberInRange, getElementOffset, getPercent, getPrecision, shallowCopyArray, silentEvent, InputBoolean } from 'ng-zorro-antd/core';
import { isValueARange } from './nz-slider-definitions';
import { getValueTypeNotMatchError } from './nz-slider-error';
export class NzSliderComponent {
    /**
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.nzDisabled = false;
        this.nzDots = false;
        this.nzIncluded = true;
        this.nzRange = false;
        this.nzVertical = false;
        this.nzDefaultValue = null;
        this.nzMarks = null;
        this.nzMax = 100;
        this.nzMin = 0;
        this.nzStep = 1;
        this.nzTooltipVisible = 'default';
        this.nzTooltipPlacement = 'top';
        this.nzOnAfterChange = new EventEmitter();
        this.value = null;
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
        // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        // "steps" in array type with more data & FILTER out the invalid mark
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
        // now for nz-slider-step
        this.isDragging = false; // Current dragging state
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.handles = this.generateHandles(this.nzRange ? 2 : 1);
        this.sliderDOM = this.slider.nativeElement;
        this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        if (this.platform.isBrowser) {
            this.createDraggingObservables();
        }
        this.toggleDragDisabled(this.nzDisabled);
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzDisabled, nzMarks, nzRange } = changes;
        if (nzDisabled && !nzDisabled.firstChange) {
            this.toggleDragDisabled(nzDisabled.currentValue);
        }
        else if (nzMarks && !nzMarks.firstChange) {
            this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        }
        else if (nzRange && !nzRange.firstChange) {
            this.setValue(this.formatValue(null));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeDrag();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.setValue(val, true);
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    onValueChange(_value) { }
    /**
     * @return {?}
     */
    onTouched() { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onValueChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    }
    /**
     * @private
     * @param {?} value
     * @param {?=} isWriteValue
     * @return {?}
     */
    setValue(value, isWriteValue = false) {
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!this.valuesEqual((/** @type {?} */ (this.value)), (/** @type {?} */ (value)))) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    }
    /**
     * @private
     * @param {?=} cloneAndSort
     * @return {?}
     */
    getValue(cloneAndSort = false) {
        if (cloneAndSort && this.value && isValueARange(this.value)) {
            return shallowCopyArray(this.value).sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a - b));
        }
        return (/** @type {?} */ (this.value));
    }
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     * @private
     * @param {?=} value
     * @return {?}
     */
    getValueToOffset(value) {
        /** @type {?} */
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueARange(normalizedValue)
            ? normalizedValue.map((/**
             * @param {?} val
             * @return {?}
             */
            val => this.valueToOffset(val)))
            : this.valueToOffset(normalizedValue);
    }
    /**
     * Find the closest value to be activated (only for range = true).
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValueIndex(pointerValue) {
        /** @type {?} */
        const value = this.getValue();
        if (isValueARange(value)) {
            /** @type {?} */
            let minimal = null;
            /** @type {?} */
            let gap;
            /** @type {?} */
            let activeIndex = -1;
            value.forEach((/**
             * @param {?} val
             * @param {?} index
             * @return {?}
             */
            (val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < (/** @type {?} */ (minimal))) {
                    minimal = gap;
                    activeIndex = index;
                }
            }));
            this.activeValueIndex = activeIndex;
        }
    }
    /**
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValue(pointerValue) {
        if (isValueARange((/** @type {?} */ (this.value)))) {
            /** @type {?} */
            const newValue = shallowCopyArray((/** @type {?} */ (this.value)));
            newValue[(/** @type {?} */ (this.activeValueIndex))] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
     * Update track and handles' position and length.
     * @private
     * @return {?}
     */
    updateTrackAndHandles() {
        /** @type {?} */
        const value = this.getValue();
        /** @type {?} */
        const offset = this.getValueToOffset(value);
        /** @type {?} */
        const valueSorted = this.getValue(true);
        /** @type {?} */
        const offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        const boundParts = isValueARange(valueSorted) ? valueSorted : [0, valueSorted];
        /** @type {?} */
        const trackParts = isValueARange(offsetSorted)
            ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]]
            : [0, offsetSorted];
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        (handle, index) => {
            handle.offset = isValueARange(offset) ? offset[index] : offset;
            handle.value = isValueARange(value) ? value[index] : value || 0;
        }));
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    onDragStart(value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    onDragMove(value) {
        this.setActiveValue(value);
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    onDragEnd() {
        this.nzOnAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    }
    /**
     * Create user interactions handles.
     * @private
     * @return {?}
     */
    createDraggingObservables() {
        /** @type {?} */
        const sliderDOM = this.sliderDOM;
        /** @type {?} */
        const orientField = this.nzVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        const mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        const touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (/**
             * @param {?} e
             * @return {?}
             */
            (e) => e instanceof TouchEvent)
        };
        [mouse, touch].forEach((/**
         * @param {?} source
         * @return {?}
         */
        source => {
            const { start, move, end, pluckKey, filter: filterFunc = (/**
             * @return {?}
             */
            () => true) } = source;
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), map((/**
             * @param {?} position
             * @return {?}
             */
            (position) => this.findClosestValue(position))));
            source.end$ = fromEvent(document, end);
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), distinctUntilChanged(), map((/**
             * @param {?} position
             * @return {?}
             */
            (position) => this.findClosestValue(position))), distinctUntilChanged(), takeUntil(source.end$));
        }));
        this.dragStart$ = merge((/** @type {?} */ (mouse.startPlucked$)), (/** @type {?} */ (touch.startPlucked$)));
        this.dragMove$ = merge((/** @type {?} */ (mouse.moveResolved$)), (/** @type {?} */ (touch.moveResolved$)));
        this.dragEnd$ = merge((/** @type {?} */ (mouse.end$)), (/** @type {?} */ (touch.end$)));
    }
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    subscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
            this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
            this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
            this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
        }
    }
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    unsubscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart_) {
            this.dragStart_.unsubscribe();
            this.dragStart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragMove_) {
            this.dragMove_.unsubscribe();
            this.dragMove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd_) {
            this.dragEnd_.unsubscribe();
            this.dragEnd_ = null;
        }
    }
    /**
     * @private
     * @param {?} movable
     * @return {?}
     */
    toggleDragMoving(movable) {
        /** @type {?} */
        const periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    }
    /**
     * @private
     * @param {?} disabled
     * @return {?}
     */
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    findClosestValue(position) {
        /** @type {?} */
        const sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        const sliderLength = this.getSliderLength();
        /** @type {?} */
        const ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        /** @type {?} */
        const points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat);
        if (this.nzStep !== null && !this.nzDots) {
            /** @type {?} */
            const closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        /** @type {?} */
        const gaps = points.map((/**
         * @param {?} point
         * @return {?}
         */
        point => Math.abs(val - point)));
        /** @type {?} */
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        return this.nzStep === null ? closest : parseFloat(closest.toFixed(getPrecision(this.nzStep)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    valueToOffset(value) {
        return getPercent(this.nzMin, this.nzMax, value);
    }
    /**
     * @private
     * @return {?}
     */
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        const offset = getElementOffset(this.sliderDOM);
        return this.nzVertical ? offset.top : offset.left;
    }
    /**
     * @private
     * @return {?}
     */
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        const sliderDOM = this.sliderDOM;
        return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     * @private
     * @param {?=} remove
     * @return {?}
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        /** @type {?} */
        let res = value;
        if (!this.assertValueValid((/** @type {?} */ (value)))) {
            res = this.nzDefaultValue === null ? (this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin) : this.nzDefaultValue;
        }
        else {
            res = isValueARange((/** @type {?} */ (value)))
                ? ((/** @type {?} */ (value))).map((/**
                 * @param {?} val
                 * @return {?}
                 */
                val => ensureNumberInRange(val, this.nzMin, this.nzMax)))
                : ensureNumberInRange((/** @type {?} */ (value)), this.nzMin, this.nzMax);
        }
        return res;
    }
    /**
     * Check if value is valid and throw error if value-type/range not match.
     * @private
     * @param {?} value
     * @return {?}
     */
    assertValueValid(value) {
        if (!Array.isArray(value) && isNaN(typeof value !== 'number' ? parseFloat(value) : value)) {
            return false;
        }
        return this.assertValueTypeMatch(value);
    }
    /**
     * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
     * @private
     * @param {?} value
     * @return {?}
     */
    assertValueTypeMatch(value) {
        if (!value) {
            return true;
        }
        else if (isValueARange(value) !== this.nzRange) {
            throw getValueTypeNotMatchError();
        }
        else {
            return true;
        }
    }
    /**
     * @private
     * @param {?} valA
     * @param {?} valB
     * @return {?}
     */
    valuesEqual(valA, valB) {
        if (typeof valA !== typeof valB) {
            return false;
        }
        return isValueARange(valA) && isValueARange(valB) ? arraysEqual(valA, valB) : valA === valB;
    }
    /**
     * Show one handle's tooltip and hide others'.
     * @private
     * @param {?=} handleIndex
     * @return {?}
     */
    showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        (handle, index) => {
            handle.active = index === handleIndex;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    hideAllHandleTooltip() {
        this.handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        handle => (handle.active = false)));
    }
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    generateHandles(amount) {
        return Array(amount)
            .fill(0)
            .map((/**
         * @return {?}
         */
        () => ({ offset: null, value: null, active: false })));
    }
    /**
     * @private
     * @param {?} marks
     * @return {?}
     */
    generateMarkItems(marks) {
        /** @type {?} */
        const marksArray = [];
        for (const key in marks) {
            /** @type {?} */
            const mark = marks[key];
            /** @type {?} */
            const val = typeof key === 'number' ? key : parseFloat(key);
            if (val >= this.nzMin && val <= this.nzMax) {
                marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
            }
        }
        return marksArray.length ? marksArray : null;
    }
}
NzSliderComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider',
                exportAs: 'nzSlider',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzSliderComponent)),
                        multi: true
                    }
                ],
                template: "<div #slider\r\n  class=\"ant-slider\"\r\n  [class.ant-slider-disabled]=\"nzDisabled\"\r\n  [class.ant-slider-vertical]=\"nzVertical\"\r\n  [class.ant-slider-with-marks]=\"marksArray\">\r\n  <div class=\"ant-slider-rail\"></div>\r\n  <nz-slider-track\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzIncluded]=\"nzIncluded\"\r\n    [nzOffset]=\"track.offset\"\r\n    [nzLength]=\"track.length\"></nz-slider-track>\r\n  <nz-slider-step\r\n    *ngIf=\"marksArray\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzLowerBound]=\"bounds.lower\"\r\n    [nzUpperBound]=\"bounds.upper\"\r\n    [nzMarksArray]=\"marksArray\"\r\n    [nzIncluded]=\"nzIncluded\"></nz-slider-step>\r\n  <nz-slider-handle\r\n    *ngFor=\"let handle of handles\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzOffset]=\"handle.offset\"\r\n    [nzValue]=\"handle.value\"\r\n    [nzActive]=\"handle.active\"\r\n    [nzTipFormatter]=\"nzTipFormatter\"\r\n    [nzTooltipVisible]=\"nzTooltipVisible\"\r\n    [nzTooltipPlacement]=\"nzTooltipPlacement\"\r\n    ></nz-slider-handle>\r\n  <nz-slider-marks\r\n    *ngIf=\"marksArray\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzMin]=\"nzMin\"\r\n    [nzMax]=\"nzMax\"\r\n    [nzLowerBound]=\"bounds.lower\"\r\n    [nzUpperBound]=\"bounds.upper\"\r\n    [nzMarksArray]=\"marksArray\"\r\n    [nzIncluded]=\"nzIncluded\"></nz-slider-marks>\r\n</div>"
            }] }
];
/** @nocollapse */
NzSliderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Platform }
];
NzSliderComponent.propDecorators = {
    slider: [{ type: ViewChild, args: ['slider', { static: true },] }],
    nzDisabled: [{ type: Input }],
    nzDots: [{ type: Input }],
    nzIncluded: [{ type: Input }],
    nzRange: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzDefaultValue: [{ type: Input }],
    nzMarks: [{ type: Input }],
    nzMax: [{ type: Input }],
    nzMin: [{ type: Input }],
    nzStep: [{ type: Input }],
    nzTooltipVisible: [{ type: Input }],
    nzTooltipPlacement: [{ type: Input }],
    nzTipFormatter: [{ type: Input }],
    nzOnAfterChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSliderComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzDots", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzIncluded", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzRange", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzVertical", void 0);
if (false) {
    /** @type {?} */
    NzSliderComponent.prototype.slider;
    /** @type {?} */
    NzSliderComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSliderComponent.prototype.nzDots;
    /** @type {?} */
    NzSliderComponent.prototype.nzIncluded;
    /** @type {?} */
    NzSliderComponent.prototype.nzRange;
    /** @type {?} */
    NzSliderComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderComponent.prototype.nzDefaultValue;
    /** @type {?} */
    NzSliderComponent.prototype.nzMarks;
    /** @type {?} */
    NzSliderComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderComponent.prototype.nzStep;
    /** @type {?} */
    NzSliderComponent.prototype.nzTooltipVisible;
    /** @type {?} */
    NzSliderComponent.prototype.nzTooltipPlacement;
    /** @type {?} */
    NzSliderComponent.prototype.nzTipFormatter;
    /** @type {?} */
    NzSliderComponent.prototype.nzOnAfterChange;
    /** @type {?} */
    NzSliderComponent.prototype.value;
    /** @type {?} */
    NzSliderComponent.prototype.sliderDOM;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderStart;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderLength;
    /** @type {?} */
    NzSliderComponent.prototype.activeValueIndex;
    /** @type {?} */
    NzSliderComponent.prototype.track;
    /** @type {?} */
    NzSliderComponent.prototype.handles;
    /** @type {?} */
    NzSliderComponent.prototype.marksArray;
    /** @type {?} */
    NzSliderComponent.prototype.bounds;
    /** @type {?} */
    NzSliderComponent.prototype.isDragging;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragStart$;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragMove$;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragEnd$;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragStart_;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragMove_;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragEnd_;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFGLE9BQU8sRUFDTCxXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsWUFBWSxFQUViLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUNMLGFBQWEsRUFNZCxNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBaUI5RCxNQUFNLE9BQU8saUJBQWlCOzs7OztJQXFDNUIsWUFBb0IsR0FBc0IsRUFBVSxRQUFrQjtRQUFsRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFsQzdDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFZLEtB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LCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBwbHVjaywgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGFycmF5c0VxdWFsLFxyXG4gIGVuc3VyZU51bWJlckluUmFuZ2UsXHJcbiAgZ2V0RWxlbWVudE9mZnNldCxcclxuICBnZXRQZXJjZW50LFxyXG4gIGdldFByZWNpc2lvbixcclxuICBzaGFsbG93Q29weUFycmF5LFxyXG4gIHNpbGVudEV2ZW50LFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc1ZhbHVlQVJhbmdlLFxyXG4gIEV4dGVuZGVkTWFyayxcclxuICBOek1hcmtzLFxyXG4gIFNsaWRlckhhbmRsZXIsXHJcbiAgU2xpZGVyU2hvd1Rvb2x0aXAsXHJcbiAgU2xpZGVyVmFsdWVcclxufSBmcm9tICcuL256LXNsaWRlci1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IGdldFZhbHVlVHlwZU5vdE1hdGNoRXJyb3IgfSBmcm9tICcuL256LXNsaWRlci1lcnJvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyJyxcclxuICBleHBvcnRBczogJ256U2xpZGVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56U2xpZGVyQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zbGlkZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdzbGlkZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBzbGlkZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRvdHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmNsdWRlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56UmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGVmYXVsdFZhbHVlOiBTbGlkZXJWYWx1ZSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56TWFya3M6IE56TWFya3MgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuek1heCA9IDEwMDtcclxuICBASW5wdXQoKSBuek1pbiA9IDA7XHJcbiAgQElucHV0KCkgbnpTdGVwID0gMTtcclxuICBASW5wdXQoKSBuelRvb2x0aXBWaXNpYmxlOiBTbGlkZXJTaG93VG9vbHRpcCA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpIG56VGlwRm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTbGlkZXJWYWx1ZT4oKTtcclxuXHJcbiAgdmFsdWU6IFNsaWRlclZhbHVlIHwgbnVsbCA9IG51bGw7XHJcbiAgc2xpZGVyRE9NOiBIVE1MRGl2RWxlbWVudDtcclxuICBjYWNoZVNsaWRlclN0YXJ0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBjYWNoZVNsaWRlckxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgYWN0aXZlVmFsdWVJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkOyAvLyBDdXJyZW50IGFjdGl2YXRlZCBoYW5kbGUncyBpbmRleCBPTkxZIGZvciByYW5nZT10cnVlXHJcbiAgdHJhY2s6IHsgb2Zmc2V0OiBudWxsIHwgbnVtYmVyOyBsZW5ndGg6IG51bGwgfCBudW1iZXIgfSA9IHsgb2Zmc2V0OiBudWxsLCBsZW5ndGg6IG51bGwgfTsgLy8gVHJhY2sncyBvZmZzZXQgYW5kIGxlbmd0aFxyXG4gIGhhbmRsZXM6IFNsaWRlckhhbmRsZXJbXTsgLy8gSGFuZGxlcycgb2Zmc2V0XHJcbiAgbWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW10gfCBudWxsOyAvLyBcInN0ZXBzXCIgaW4gYXJyYXkgdHlwZSB3aXRoIG1vcmUgZGF0YSAmIEZJTFRFUiBvdXQgdGhlIGludmFsaWQgbWFya1xyXG4gIGJvdW5kczogeyBsb3dlcjogU2xpZGVyVmFsdWUgfCBudWxsOyB1cHBlcjogU2xpZGVyVmFsdWUgfCBudWxsIH0gPSB7IGxvd2VyOiBudWxsLCB1cHBlcjogbnVsbCB9OyAvLyBub3cgZm9yIG56LXNsaWRlci1zdGVwXHJcbiAgaXNEcmFnZ2luZyA9IGZhbHNlOyAvLyBDdXJyZW50IGRyYWdnaW5nIHN0YXRlXHJcblxyXG4gIHByaXZhdGUgZHJhZ1N0YXJ0JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gIHByaXZhdGUgZHJhZ01vdmUkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgcHJpdmF0ZSBkcmFnRW5kJDogT2JzZXJ2YWJsZTxFdmVudD47XHJcbiAgcHJpdmF0ZSBkcmFnU3RhcnRfOiBTdWJzY3JpcHRpb24gfCBudWxsO1xyXG4gIHByaXZhdGUgZHJhZ01vdmVfOiBTdWJzY3JpcHRpb24gfCBudWxsO1xyXG4gIHByaXZhdGUgZHJhZ0VuZF86IFN1YnNjcmlwdGlvbiB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVzID0gdGhpcy5nZW5lcmF0ZUhhbmRsZXModGhpcy5uelJhbmdlID8gMiA6IDEpO1xyXG4gICAgdGhpcy5zbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5tYXJrc0FycmF5ID0gdGhpcy5uek1hcmtzID8gdGhpcy5nZW5lcmF0ZU1hcmtJdGVtcyh0aGlzLm56TWFya3MpIDogbnVsbDtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLmNyZWF0ZURyYWdnaW5nT2JzZXJ2YWJsZXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKHRoaXMubnpEaXNhYmxlZCk7XHJcbiAgICBpZiAodGhpcy5nZXRWYWx1ZSgpID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5mb3JtYXRWYWx1ZShudWxsKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56RGlzYWJsZWQsIG56TWFya3MsIG56UmFuZ2UgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56RGlzYWJsZWQgJiYgIW56RGlzYWJsZWQuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQobnpEaXNhYmxlZC5jdXJyZW50VmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChuek1hcmtzICYmICFuek1hcmtzLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubnpNYXJrcyA/IHRoaXMuZ2VuZXJhdGVNYXJrSXRlbXModGhpcy5uek1hcmtzKSA6IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKG56UmFuZ2UgJiYgIW56UmFuZ2UuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsOiBTbGlkZXJWYWx1ZSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG9uVmFsdWVDaGFuZ2UoX3ZhbHVlOiBTbGlkZXJWYWx1ZSk6IHZvaWQge31cclxuXHJcbiAgb25Ub3VjaGVkKCk6IHZvaWQge31cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBTbGlkZXJWYWx1ZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKGlzRGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogU2xpZGVyVmFsdWUgfCBudWxsLCBpc1dyaXRlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKGlzV3JpdGVWYWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbHVlc0VxdWFsKHRoaXMudmFsdWUhLCB2YWx1ZSEpKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGVUcmFja0FuZEhhbmRsZXMoKTtcclxuICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWYWx1ZShjbG9uZUFuZFNvcnQ6IGJvb2xlYW4gPSBmYWxzZSk6IFNsaWRlclZhbHVlIHtcclxuICAgIGlmIChjbG9uZUFuZFNvcnQgJiYgdGhpcy52YWx1ZSAmJiBpc1ZhbHVlQVJhbmdlKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBzaGFsbG93Q29weUFycmF5KHRoaXMudmFsdWUpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnZhbHVlITtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb25lICYgc29ydCBjdXJyZW50IHZhbHVlIGFuZCBjb252ZXJ0IHRoZW0gdG8gb2Zmc2V0cywgdGhlbiByZXR1cm4gdGhlIG5ldyBvbmUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlPzogU2xpZGVyVmFsdWUpOiBTbGlkZXJWYWx1ZSB7XHJcbiAgICBsZXQgbm9ybWFsaXplZFZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBub3JtYWxpemVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIG5vcm1hbGl6ZWRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsdWVBUmFuZ2Uobm9ybWFsaXplZFZhbHVlKVxyXG4gICAgICA/IG5vcm1hbGl6ZWRWYWx1ZS5tYXAodmFsID0+IHRoaXMudmFsdWVUb09mZnNldCh2YWwpKVxyXG4gICAgICA6IHRoaXMudmFsdWVUb09mZnNldChub3JtYWxpemVkVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCB0aGUgY2xvc2VzdCB2YWx1ZSB0byBiZSBhY3RpdmF0ZWQgKG9ubHkgZm9yIHJhbmdlID0gdHJ1ZSkuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRBY3RpdmVWYWx1ZUluZGV4KHBvaW50ZXJWYWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuICAgIGlmIChpc1ZhbHVlQVJhbmdlKHZhbHVlKSkge1xyXG4gICAgICBsZXQgbWluaW1hbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgIGxldCBnYXA6IG51bWJlcjtcclxuICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gLTE7XHJcbiAgICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBnYXAgPSBNYXRoLmFicyhwb2ludGVyVmFsdWUgLSB2YWwpO1xyXG4gICAgICAgIGlmIChtaW5pbWFsID09PSBudWxsIHx8IGdhcCA8IG1pbmltYWwhKSB7XHJcbiAgICAgICAgICBtaW5pbWFsID0gZ2FwO1xyXG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggPSBhY3RpdmVJbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QWN0aXZlVmFsdWUocG9pbnRlclZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChpc1ZhbHVlQVJhbmdlKHRoaXMudmFsdWUhKSkge1xyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHNoYWxsb3dDb3B5QXJyYXkodGhpcy52YWx1ZSBhcyBudW1iZXJbXSk7XHJcbiAgICAgIG5ld1ZhbHVlW3RoaXMuYWN0aXZlVmFsdWVJbmRleCFdID0gcG9pbnRlclZhbHVlO1xyXG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUocG9pbnRlclZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0cmFjayBhbmQgaGFuZGxlcycgcG9zaXRpb24gYW5kIGxlbmd0aC5cclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlKTtcclxuICAgIGNvbnN0IHZhbHVlU29ydGVkID0gdGhpcy5nZXRWYWx1ZSh0cnVlKTtcclxuICAgIGNvbnN0IG9mZnNldFNvcnRlZCA9IHRoaXMuZ2V0VmFsdWVUb09mZnNldCh2YWx1ZVNvcnRlZCk7XHJcbiAgICBjb25zdCBib3VuZFBhcnRzID0gaXNWYWx1ZUFSYW5nZSh2YWx1ZVNvcnRlZCkgPyB2YWx1ZVNvcnRlZCA6IFswLCB2YWx1ZVNvcnRlZF07XHJcbiAgICBjb25zdCB0cmFja1BhcnRzID0gaXNWYWx1ZUFSYW5nZShvZmZzZXRTb3J0ZWQpXHJcbiAgICAgID8gW29mZnNldFNvcnRlZFswXSwgb2Zmc2V0U29ydGVkWzFdIC0gb2Zmc2V0U29ydGVkWzBdXVxyXG4gICAgICA6IFswLCBvZmZzZXRTb3J0ZWRdO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGhhbmRsZS5vZmZzZXQgPSBpc1ZhbHVlQVJhbmdlKG9mZnNldCkgPyBvZmZzZXRbaW5kZXhdIDogb2Zmc2V0O1xyXG4gICAgICBoYW5kbGUudmFsdWUgPSBpc1ZhbHVlQVJhbmdlKHZhbHVlKSA/IHZhbHVlW2luZGV4XSA6IHZhbHVlIHx8IDA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBbdGhpcy5ib3VuZHMubG93ZXIsIHRoaXMuYm91bmRzLnVwcGVyXSA9IGJvdW5kUGFydHM7XHJcbiAgICBbdGhpcy50cmFjay5vZmZzZXQsIHRoaXMudHJhY2subGVuZ3RoXSA9IHRyYWNrUGFydHM7XHJcblxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRHJhZ1N0YXJ0KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyh0cnVlKTtcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSgpO1xyXG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZUluZGV4KHZhbHVlKTtcclxuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5zaG93SGFuZGxlVG9vbHRpcCh0aGlzLm56UmFuZ2UgPyB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggOiAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25EcmFnTW92ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkRyYWdFbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25BZnRlckNoYW5nZS5lbWl0KHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xyXG4gICAgdGhpcy50b2dnbGVEcmFnTW92aW5nKGZhbHNlKTtcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSh0cnVlKTtcclxuICAgIHRoaXMuaGlkZUFsbEhhbmRsZVRvb2x0aXAoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIHVzZXIgaW50ZXJhY3Rpb25zIGhhbmRsZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVEcmFnZ2luZ09ic2VydmFibGVzKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXJET007XHJcbiAgICBjb25zdCBvcmllbnRGaWVsZCA9IHRoaXMubnpWZXJ0aWNhbCA/ICdwYWdlWScgOiAncGFnZVgnO1xyXG4gICAgY29uc3QgbW91c2U6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcclxuICAgICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxyXG4gICAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcclxuICAgICAgZW5kOiAnbW91c2V1cCcsXHJcbiAgICAgIHBsdWNrS2V5OiBbb3JpZW50RmllbGRdXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdG91Y2g6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcclxuICAgICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcclxuICAgICAgbW92ZTogJ3RvdWNobW92ZScsXHJcbiAgICAgIGVuZDogJ3RvdWNoZW5kJyxcclxuICAgICAgcGx1Y2tLZXk6IFsndG91Y2hlcycsICcwJywgb3JpZW50RmllbGRdLFxyXG4gICAgICBmaWx0ZXI6IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnRcclxuICAgIH07XHJcblxyXG4gICAgW21vdXNlLCB0b3VjaF0uZm9yRWFjaChzb3VyY2UgPT4ge1xyXG4gICAgICBjb25zdCB7IHN0YXJ0LCBtb3ZlLCBlbmQsIHBsdWNrS2V5LCBmaWx0ZXI6IGZpbHRlckZ1bmMgPSAoKSA9PiB0cnVlIH0gPSBzb3VyY2U7XHJcblxyXG4gICAgICBzb3VyY2Uuc3RhcnRQbHVja2VkJCA9IGZyb21FdmVudChzbGlkZXJET00sIHN0YXJ0KS5waXBlKFxyXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcclxuICAgICAgICB0YXAoc2lsZW50RXZlbnQpLFxyXG4gICAgICAgIHBsdWNrPEV2ZW50LCBudW1iZXI+KC4uLnBsdWNrS2V5KSxcclxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpXHJcbiAgICAgICk7XHJcbiAgICAgIHNvdXJjZS5lbmQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCBlbmQpO1xyXG4gICAgICBzb3VyY2UubW92ZVJlc29sdmVkJCA9IGZyb21FdmVudChkb2N1bWVudCwgbW92ZSkucGlwZShcclxuICAgICAgICBmaWx0ZXIoZmlsdGVyRnVuYyksXHJcbiAgICAgICAgdGFwKHNpbGVudEV2ZW50KSxcclxuICAgICAgICBwbHVjazxFdmVudCwgbnVtYmVyPiguLi5wbHVja0tleSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFrZVVudGlsKHNvdXJjZS5lbmQkKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kcmFnU3RhcnQkID0gbWVyZ2UobW91c2Uuc3RhcnRQbHVja2VkJCEsIHRvdWNoLnN0YXJ0UGx1Y2tlZCQhKTtcclxuICAgIHRoaXMuZHJhZ01vdmUkID0gbWVyZ2UobW91c2UubW92ZVJlc29sdmVkJCEsIHRvdWNoLm1vdmVSZXNvbHZlZCQhKTtcclxuICAgIHRoaXMuZHJhZ0VuZCQgPSBtZXJnZShtb3VzZS5lbmQkISwgdG91Y2guZW5kJCEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWydzdGFydCcsICdtb3ZlJywgJ2VuZCddKTogdm9pZCB7XHJcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdTdGFydCQgJiYgIXRoaXMuZHJhZ1N0YXJ0Xykge1xyXG4gICAgICB0aGlzLmRyYWdTdGFydF8gPSB0aGlzLmRyYWdTdGFydCQuc3Vic2NyaWJlKHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlJCAmJiAhdGhpcy5kcmFnTW92ZV8pIHtcclxuICAgICAgdGhpcy5kcmFnTW92ZV8gPSB0aGlzLmRyYWdNb3ZlJC5zdWJzY3JpYmUodGhpcy5vbkRyYWdNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ2VuZCcpICE9PSAtMSAmJiB0aGlzLmRyYWdFbmQkICYmICF0aGlzLmRyYWdFbmRfKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0VuZF8gPSB0aGlzLmRyYWdFbmQkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ0VuZC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWydzdGFydCcsICdtb3ZlJywgJ2VuZCddKTogdm9pZCB7XHJcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdTdGFydF8pIHtcclxuICAgICAgdGhpcy5kcmFnU3RhcnRfLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0XyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlXykge1xyXG4gICAgICB0aGlzLmRyYWdNb3ZlXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRyYWdNb3ZlXyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ0VuZF8pIHtcclxuICAgICAgdGhpcy5kcmFnRW5kXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRyYWdFbmRfID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlRHJhZ01vdmluZyhtb3ZhYmxlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBwZXJpb2RzID0gWydtb3ZlJywgJ2VuZCddO1xyXG4gICAgaWYgKG1vdmFibGUpIHtcclxuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVEcmFnRGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKFsnc3RhcnQnXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb246IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBzbGlkZXJTdGFydCA9IHRoaXMuZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpO1xyXG4gICAgY29uc3Qgc2xpZGVyTGVuZ3RoID0gdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcclxuICAgIGNvbnN0IHJhdGlvID0gZW5zdXJlTnVtYmVySW5SYW5nZSgocG9zaXRpb24gLSBzbGlkZXJTdGFydCkgLyBzbGlkZXJMZW5ndGgsIDAsIDEpO1xyXG4gICAgY29uc3QgdmFsID0gKHRoaXMubnpNYXggLSB0aGlzLm56TWluKSAqICh0aGlzLm56VmVydGljYWwgPyAxIC0gcmF0aW8gOiByYXRpbykgKyB0aGlzLm56TWluO1xyXG4gICAgY29uc3QgcG9pbnRzID0gdGhpcy5uek1hcmtzID09PSBudWxsID8gW10gOiBPYmplY3Qua2V5cyh0aGlzLm56TWFya3MpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgIGlmICh0aGlzLm56U3RlcCAhPT0gbnVsbCAmJiAhdGhpcy5uekRvdHMpIHtcclxuICAgICAgY29uc3QgY2xvc2VzdE9uZSA9IE1hdGgucm91bmQodmFsIC8gdGhpcy5uelN0ZXApICogdGhpcy5uelN0ZXA7XHJcbiAgICAgIHBvaW50cy5wdXNoKGNsb3Nlc3RPbmUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2FwcyA9IHBvaW50cy5tYXAocG9pbnQgPT4gTWF0aC5hYnModmFsIC0gcG9pbnQpKTtcclxuICAgIGNvbnN0IGNsb3Nlc3QgPSBwb2ludHNbZ2Fwcy5pbmRleE9mKE1hdGgubWluKC4uLmdhcHMpKV07XHJcbiAgICByZXR1cm4gdGhpcy5uelN0ZXAgPT09IG51bGwgPyBjbG9zZXN0IDogcGFyc2VGbG9hdChjbG9zZXN0LnRvRml4ZWQoZ2V0UHJlY2lzaW9uKHRoaXMubnpTdGVwKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWx1ZVRvT2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGdldFBlcmNlbnQodGhpcy5uek1pbiwgdGhpcy5uek1heCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5jYWNoZVNsaWRlclN0YXJ0ICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyU3RhcnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvZmZzZXQgPSBnZXRFbGVtZW50T2Zmc2V0KHRoaXMuc2xpZGVyRE9NKTtcclxuICAgIHJldHVybiB0aGlzLm56VmVydGljYWwgPyBvZmZzZXQudG9wIDogb2Zmc2V0LmxlZnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNsaWRlckxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGg7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlckRPTTtcclxuICAgIHJldHVybiB0aGlzLm56VmVydGljYWwgPyBzbGlkZXJET00uY2xpZW50SGVpZ2h0IDogc2xpZGVyRE9NLmNsaWVudFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9ucyBmb3IgcGVyZm9ybWFuY2UgKG1heSBub3QgbmVjZXNzYXJ5PylcclxuICAgKi9cclxuICBwcml2YXRlIGNhY2hlU2xpZGVyUHJvcGVydHkocmVtb3ZlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJTdGFydCA9IHJlbW92ZSA/IG51bGwgOiB0aGlzLmdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTtcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0VmFsdWUodmFsdWU6IFNsaWRlclZhbHVlIHwgbnVsbCk6IFNsaWRlclZhbHVlIHtcclxuICAgIGxldCByZXMgPSB2YWx1ZTtcclxuICAgIGlmICghdGhpcy5hc3NlcnRWYWx1ZVZhbGlkKHZhbHVlISkpIHtcclxuICAgICAgcmVzID0gdGhpcy5uekRlZmF1bHRWYWx1ZSA9PT0gbnVsbCA/ICh0aGlzLm56UmFuZ2UgPyBbdGhpcy5uek1pbiwgdGhpcy5uek1heF0gOiB0aGlzLm56TWluKSA6IHRoaXMubnpEZWZhdWx0VmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMgPSBpc1ZhbHVlQVJhbmdlKHZhbHVlISlcclxuICAgICAgICA/ICh2YWx1ZSBhcyBudW1iZXJbXSkubWFwKHZhbCA9PiBlbnN1cmVOdW1iZXJJblJhbmdlKHZhbCwgdGhpcy5uek1pbiwgdGhpcy5uek1heCkpXHJcbiAgICAgICAgOiBlbnN1cmVOdW1iZXJJblJhbmdlKHZhbHVlIGFzIG51bWJlciwgdGhpcy5uek1pbiwgdGhpcy5uek1heCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHZhbHVlIGlzIHZhbGlkIGFuZCB0aHJvdyBlcnJvciBpZiB2YWx1ZS10eXBlL3JhbmdlIG5vdCBtYXRjaC5cclxuICAgKi9cclxuICBwcml2YXRlIGFzc2VydFZhbHVlVmFsaWQodmFsdWU6IFNsaWRlclZhbHVlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIGlzTmFOKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5hc3NlcnRWYWx1ZVR5cGVNYXRjaCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NlcnQgdGhhdCBpZiBgdGhpcy5uelJhbmdlYCBpcyBgdHJ1ZWAsIHZhbHVlIGlzIGFsc28gYSByYW5nZSwgdmljZSB2ZXJzYS5cclxuICAgKi9cclxuICBwcml2YXRlIGFzc2VydFZhbHVlVHlwZU1hdGNoKHZhbHVlOiBTbGlkZXJWYWx1ZSB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKGlzVmFsdWVBUmFuZ2UodmFsdWUpICE9PSB0aGlzLm56UmFuZ2UpIHtcclxuICAgICAgdGhyb3cgZ2V0VmFsdWVUeXBlTm90TWF0Y2hFcnJvcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbHVlc0VxdWFsKHZhbEE6IFNsaWRlclZhbHVlLCB2YWxCOiBTbGlkZXJWYWx1ZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiB2YWxBICE9PSB0eXBlb2YgdmFsQikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWx1ZUFSYW5nZSh2YWxBKSAmJiBpc1ZhbHVlQVJhbmdlKHZhbEIpID8gYXJyYXlzRXF1YWw8bnVtYmVyPih2YWxBLCB2YWxCKSA6IHZhbEEgPT09IHZhbEI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IG9uZSBoYW5kbGUncyB0b29sdGlwIGFuZCBoaWRlIG90aGVycycuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzaG93SGFuZGxlVG9vbHRpcChoYW5kbGVJbmRleDogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcclxuICAgICAgaGFuZGxlLmFjdGl2ZSA9IGluZGV4ID09PSBoYW5kbGVJbmRleDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlQWxsSGFuZGxlVG9vbHRpcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKGhhbmRsZSA9PiAoaGFuZGxlLmFjdGl2ZSA9IGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlSGFuZGxlcyhhbW91bnQ6IG51bWJlcik6IFNsaWRlckhhbmRsZXJbXSB7XHJcbiAgICByZXR1cm4gQXJyYXkoYW1vdW50KVxyXG4gICAgICAuZmlsbCgwKVxyXG4gICAgICAubWFwKCgpID0+ICh7IG9mZnNldDogbnVsbCwgdmFsdWU6IG51bGwsIGFjdGl2ZTogZmFsc2UgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZU1hcmtJdGVtcyhtYXJrczogTnpNYXJrcyk6IEV4dGVuZGVkTWFya1tdIHwgbnVsbCB7XHJcbiAgICBjb25zdCBtYXJrc0FycmF5OiBFeHRlbmRlZE1hcmtbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gbWFya3MpIHtcclxuICAgICAgY29uc3QgbWFyayA9IG1hcmtzW2tleV07XHJcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiBrZXkgPT09ICdudW1iZXInID8ga2V5IDogcGFyc2VGbG9hdChrZXkpO1xyXG4gICAgICBpZiAodmFsID49IHRoaXMubnpNaW4gJiYgdmFsIDw9IHRoaXMubnpNYXgpIHtcclxuICAgICAgICBtYXJrc0FycmF5LnB1c2goeyB2YWx1ZTogdmFsLCBvZmZzZXQ6IHRoaXMudmFsdWVUb09mZnNldCh2YWwpLCBjb25maWc6IG1hcmsgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXJrc0FycmF5Lmxlbmd0aCA/IG1hcmtzQXJyYXkgOiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=