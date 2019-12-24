import { __decorate, __metadata, __read, __spread } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { arraysEqual, ensureNumberInRange, getElementOffset, getPercent, getPrecision, InputBoolean, shallowCopyArray, silentEvent } from 'ng-zorro-antd/core';
import { isValueARange } from './nz-slider-definitions';
import { getValueTypeNotMatchError } from './nz-slider-error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
var _c0 = ["slider"];
function NzSliderComponent_nz_slider_step_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-slider-step", 7);
} if (rf & 2) {
    var ctx_r752 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzVertical", ctx_r752.nzVertical)("nzLowerBound", ctx_r752.bounds.lower)("nzUpperBound", ctx_r752.bounds.upper)("nzMarksArray", ctx_r752.marksArray)("nzIncluded", ctx_r752.nzIncluded);
} }
function NzSliderComponent_nz_slider_handle_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-slider-handle", 8);
} if (rf & 2) {
    var handle_r755 = ctx.$implicit;
    var ctx_r753 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzVertical", ctx_r753.nzVertical)("nzOffset", handle_r755.offset)("nzValue", handle_r755.value)("nzActive", handle_r755.active)("nzTipFormatter", ctx_r753.nzTipFormatter)("nzTooltipVisible", ctx_r753.nzTooltipVisible)("nzTooltipPlacement", ctx_r753.nzTooltipPlacement);
} }
function NzSliderComponent_nz_slider_marks_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-slider-marks", 9);
} if (rf & 2) {
    var ctx_r754 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzVertical", ctx_r754.nzVertical)("nzMin", ctx_r754.nzMin)("nzMax", ctx_r754.nzMax)("nzLowerBound", ctx_r754.bounds.lower)("nzUpperBound", ctx_r754.bounds.upper)("nzMarksArray", ctx_r754.marksArray)("nzIncluded", ctx_r754.nzIncluded);
} }
var NzSliderComponent = /** @class */ (function () {
    function NzSliderComponent(cdr, platform) {
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
        this.track = { offset: null, length: null }; // Track's offset and length
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
        this.isDragging = false; // Current dragging state
    }
    NzSliderComponent.prototype.ngOnInit = function () {
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
    };
    NzSliderComponent.prototype.ngOnChanges = function (changes) {
        var nzDisabled = changes.nzDisabled, nzMarks = changes.nzMarks, nzRange = changes.nzRange;
        if (nzDisabled && !nzDisabled.firstChange) {
            this.toggleDragDisabled(nzDisabled.currentValue);
        }
        else if (nzMarks && !nzMarks.firstChange) {
            this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        }
        else if (nzRange && !nzRange.firstChange) {
            this.setValue(this.formatValue(null));
        }
    };
    NzSliderComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeDrag();
    };
    NzSliderComponent.prototype.writeValue = function (val) {
        this.setValue(val, true);
    };
    NzSliderComponent.prototype.onValueChange = function (_value) { };
    NzSliderComponent.prototype.onTouched = function () { };
    NzSliderComponent.prototype.registerOnChange = function (fn) {
        this.onValueChange = fn;
    };
    NzSliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzSliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    };
    NzSliderComponent.prototype.setValue = function (value, isWriteValue) {
        if (isWriteValue === void 0) { isWriteValue = false; }
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!this.valuesEqual(this.value, value)) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    };
    NzSliderComponent.prototype.getValue = function (cloneAndSort) {
        if (cloneAndSort === void 0) { cloneAndSort = false; }
        if (cloneAndSort && this.value && isValueARange(this.value)) {
            return shallowCopyArray(this.value).sort(function (a, b) { return a - b; });
        }
        return this.value;
    };
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    NzSliderComponent.prototype.getValueToOffset = function (value) {
        var _this = this;
        var normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueARange(normalizedValue) ? normalizedValue.map(function (val) { return _this.valueToOffset(val); }) : this.valueToOffset(normalizedValue);
    };
    /**
     * Find the closest value to be activated (only for range = true).
     */
    NzSliderComponent.prototype.setActiveValueIndex = function (pointerValue) {
        var value = this.getValue();
        if (isValueARange(value)) {
            var minimal_1 = null;
            var gap_1;
            var activeIndex_1 = -1;
            value.forEach(function (val, index) {
                gap_1 = Math.abs(pointerValue - val);
                if (minimal_1 === null || gap_1 < minimal_1) {
                    minimal_1 = gap_1;
                    activeIndex_1 = index;
                }
            });
            this.activeValueIndex = activeIndex_1;
        }
    };
    NzSliderComponent.prototype.setActiveValue = function (pointerValue) {
        if (isValueARange(this.value)) {
            var newValue = shallowCopyArray(this.value);
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    };
    /**
     * Update track and handles' position and length.
     */
    NzSliderComponent.prototype.updateTrackAndHandles = function () {
        var _a, _b;
        var value = this.getValue();
        var offset = this.getValueToOffset(value);
        var valueSorted = this.getValue(true);
        var offsetSorted = this.getValueToOffset(valueSorted);
        var boundParts = isValueARange(valueSorted) ? valueSorted : [0, valueSorted];
        var trackParts = isValueARange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach(function (handle, index) {
            handle.offset = isValueARange(offset) ? offset[index] : offset;
            handle.value = isValueARange(value) ? value[index] : value || 0;
        });
        _a = __read(boundParts, 2), this.bounds.lower = _a[0], this.bounds.upper = _a[1];
        _b = __read(trackParts, 2), this.track.offset = _b[0], this.track.length = _b[1];
        this.cdr.markForCheck();
    };
    NzSliderComponent.prototype.onDragStart = function (value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    };
    NzSliderComponent.prototype.onDragMove = function (value) {
        this.setActiveValue(value);
        this.cdr.markForCheck();
    };
    NzSliderComponent.prototype.onDragEnd = function () {
        this.nzOnAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    };
    /**
     * Create user interactions handles.
     */
    NzSliderComponent.prototype.createDraggingObservables = function () {
        var _this = this;
        var sliderDOM = this.sliderDOM;
        var orientField = this.nzVertical ? 'pageY' : 'pageX';
        var mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        var touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: function (e) { return e instanceof TouchEvent; }
        };
        [mouse, touch].forEach(function (source) {
            var start = source.start, move = source.move, end = source.end, pluckKey = source.pluckKey, _a = source.filter, filterFunc = _a === void 0 ? function () { return true; } : _a;
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), pluck.apply(void 0, __spread(pluckKey)), map(function (position) { return _this.findClosestValue(position); }));
            source.end$ = fromEvent(document, end);
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), pluck.apply(void 0, __spread(pluckKey)), distinctUntilChanged(), map(function (position) { return _this.findClosestValue(position); }), distinctUntilChanged(), takeUntil(source.end$));
        });
        this.dragStart$ = merge(mouse.startPlucked$, touch.startPlucked$);
        this.dragMove$ = merge(mouse.moveResolved$, touch.moveResolved$);
        this.dragEnd$ = merge(mouse.end$, touch.end$);
    };
    NzSliderComponent.prototype.subscribeDrag = function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
            this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
            this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
            this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
        }
    };
    NzSliderComponent.prototype.unsubscribeDrag = function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
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
    };
    NzSliderComponent.prototype.toggleDragMoving = function (movable) {
        var periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    };
    NzSliderComponent.prototype.toggleDragDisabled = function (disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    };
    NzSliderComponent.prototype.findClosestValue = function (position) {
        var sliderStart = this.getSliderStartPosition();
        var sliderLength = this.getSliderLength();
        var ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
        var val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        var points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat);
        if (this.nzStep !== null && !this.nzDots) {
            var closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        var gaps = points.map(function (point) { return Math.abs(val - point); });
        var closest = points[gaps.indexOf(Math.min.apply(Math, __spread(gaps)))];
        return this.nzStep === null ? closest : parseFloat(closest.toFixed(getPrecision(this.nzStep)));
    };
    NzSliderComponent.prototype.valueToOffset = function (value) {
        return getPercent(this.nzMin, this.nzMax, value);
    };
    NzSliderComponent.prototype.getSliderStartPosition = function () {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        var offset = getElementOffset(this.sliderDOM);
        return this.nzVertical ? offset.top : offset.left;
    };
    NzSliderComponent.prototype.getSliderLength = function () {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        var sliderDOM = this.sliderDOM;
        return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    };
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    NzSliderComponent.prototype.cacheSliderProperty = function (remove) {
        if (remove === void 0) { remove = false; }
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    };
    NzSliderComponent.prototype.formatValue = function (value) {
        var _this = this;
        var res = value;
        if (!this.assertValueValid(value)) {
            res = this.nzDefaultValue === null ? (this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin) : this.nzDefaultValue;
        }
        else {
            res = isValueARange(value)
                ? value.map(function (val) { return ensureNumberInRange(val, _this.nzMin, _this.nzMax); })
                : ensureNumberInRange(value, this.nzMin, this.nzMax);
        }
        return res;
    };
    /**
     * Check if value is valid and throw error if value-type/range not match.
     */
    NzSliderComponent.prototype.assertValueValid = function (value) {
        if (!Array.isArray(value) && isNaN(typeof value !== 'number' ? parseFloat(value) : value)) {
            return false;
        }
        return this.assertValueTypeMatch(value);
    };
    /**
     * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
     */
    NzSliderComponent.prototype.assertValueTypeMatch = function (value) {
        if (!value) {
            return true;
        }
        else if (isValueARange(value) !== this.nzRange) {
            throw getValueTypeNotMatchError();
        }
        else {
            return true;
        }
    };
    NzSliderComponent.prototype.valuesEqual = function (valA, valB) {
        if (typeof valA !== typeof valB) {
            return false;
        }
        return isValueARange(valA) && isValueARange(valB) ? arraysEqual(valA, valB) : valA === valB;
    };
    /**
     * Show one handle's tooltip and hide others'.
     */
    NzSliderComponent.prototype.showHandleTooltip = function (handleIndex) {
        if (handleIndex === void 0) { handleIndex = 0; }
        this.handles.forEach(function (handle, index) {
            handle.active = index === handleIndex;
        });
    };
    NzSliderComponent.prototype.hideAllHandleTooltip = function () {
        this.handles.forEach(function (handle) { return (handle.active = false); });
    };
    NzSliderComponent.prototype.generateHandles = function (amount) {
        return Array(amount)
            .fill(0)
            .map(function () { return ({ offset: null, value: null, active: false }); });
    };
    NzSliderComponent.prototype.generateMarkItems = function (marks) {
        var marksArray = [];
        for (var key in marks) {
            var mark = marks[key];
            var val = typeof key === 'number' ? key : parseFloat(key);
            if (val >= this.nzMin && val <= this.nzMax) {
                marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
            }
        }
        return marksArray.length ? marksArray : null;
    };
    /** @nocollapse */ NzSliderComponent.ɵfac = function NzSliderComponent_Factory(t) { return new (t || NzSliderComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Platform)); };
    /** @nocollapse */ NzSliderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSliderComponent, selectors: [["nz-slider"]], viewQuery: function NzSliderComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slider = _t.first);
        } }, inputs: { nzDisabled: "nzDisabled", nzDots: "nzDots", nzIncluded: "nzIncluded", nzRange: "nzRange", nzVertical: "nzVertical", nzDefaultValue: "nzDefaultValue", nzMarks: "nzMarks", nzMax: "nzMax", nzMin: "nzMin", nzStep: "nzStep", nzTooltipVisible: "nzTooltipVisible", nzTooltipPlacement: "nzTooltipPlacement", nzTipFormatter: "nzTipFormatter" }, outputs: { nzOnAfterChange: "nzOnAfterChange" }, exportAs: ["nzSlider"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzSliderComponent; })),
                    multi: true
                }
            ]), i0.ɵɵNgOnChangesFeature()], decls: 7, vars: 10, consts: [[1, "ant-slider"], ["slider", ""], [1, "ant-slider-rail"], [3, "nzVertical", "nzIncluded", "nzOffset", "nzLength"], [3, "nzVertical", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded", 4, "ngIf"], [3, "nzVertical", "nzOffset", "nzValue", "nzActive", "nzTipFormatter", "nzTooltipVisible", "nzTooltipPlacement", 4, "ngFor", "ngForOf"], [3, "nzVertical", "nzMin", "nzMax", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded", 4, "ngIf"], [3, "nzVertical", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded"], [3, "nzVertical", "nzOffset", "nzValue", "nzActive", "nzTipFormatter", "nzTooltipVisible", "nzTooltipPlacement"], [3, "nzVertical", "nzMin", "nzMax", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded"]], template: function NzSliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelement(3, "nz-slider-track", 3);
            i0.ɵɵtemplate(4, NzSliderComponent_nz_slider_step_4_Template, 1, 5, "nz-slider-step", 4);
            i0.ɵɵtemplate(5, NzSliderComponent_nz_slider_handle_5_Template, 1, 7, "nz-slider-handle", 5);
            i0.ɵɵtemplate(6, NzSliderComponent_nz_slider_marks_6_Template, 1, 7, "nz-slider-marks", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-slider-disabled", ctx.nzDisabled)("ant-slider-vertical", ctx.nzVertical)("ant-slider-with-marks", ctx.marksArray);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzVertical", ctx.nzVertical)("nzIncluded", ctx.nzIncluded)("nzOffset", ctx.track.offset)("nzLength", ctx.track.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.marksArray);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.handles);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.marksArray);
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSliderComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzSliderComponent.prototype, "nzDots", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzSliderComponent.prototype, "nzIncluded", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzSliderComponent.prototype, "nzRange", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzSliderComponent.prototype, "nzVertical", void 0);
    return NzSliderComponent;
}());
export { NzSliderComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSliderComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider',
                exportAs: 'nzSlider',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzSliderComponent; })),
                        multi: true
                    }
                ],
                templateUrl: './nz-slider.component.html'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.Platform }]; }, { slider: [{
            type: ViewChild,
            args: ['slider', { static: true }]
        }], nzDisabled: [{
            type: Input
        }], nzDots: [{
            type: Input
        }], nzIncluded: [{
            type: Input
        }], nzRange: [{
            type: Input
        }], nzVertical: [{
            type: Input
        }], nzDefaultValue: [{
            type: Input
        }], nzMarks: [{
            type: Input
        }], nzMax: [{
            type: Input
        }], nzMin: [{
            type: Input
        }], nzStep: [{
            type: Input
        }], nzTooltipVisible: [{
            type: Input
        }], nzTooltipPlacement: [{
            type: Input
        }], nzTipFormatter: [{
            type: Input
        }], nzOnAfterChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLmNvbXBvbmVudC50cyIsIm56LXNsaWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFGLE9BQU8sRUFDTCxXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFFWixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNaLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFnQixhQUFhLEVBQTBELE1BQU0seUJBQXlCLENBQUM7QUFDOUgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0lDNUI1RCxvQ0FPa0I7OztJQUxoQixnREFBeUIsdUNBQUEsdUNBQUEscUNBQUEsbUNBQUE7OztJQU0zQixzQ0FTb0I7Ozs7SUFQbEIsZ0RBQXlCLGdDQUFBLDhCQUFBLGdDQUFBLDJDQUFBLCtDQUFBLG1EQUFBOzs7SUFRM0IscUNBU21COzs7SUFQakIsZ0RBQXlCLHlCQUFBLHlCQUFBLHVDQUFBLHVDQUFBLHFDQUFBLG1DQUFBOztBRFU3QjtJQW9ERSwyQkFBb0IsR0FBc0IsRUFBVSxRQUFrQjtRQUFsRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFsQzdDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QyxtQkFBYyxHQUF1QixJQUFJLENBQUM7UUFDMUMsWUFBTyxHQUFtQixJQUFJLENBQUM7UUFDL0IsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gscUJBQWdCLEdBQXNCLFNBQVMsQ0FBQztRQUNoRCx1QkFBa0IsR0FBVyxLQUFLLENBQUM7UUFHekIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRXJFLFVBQUssR0FBdUIsSUFBSSxDQUFDO1FBRWpDLHFCQUFnQixHQUFrQixJQUFJLENBQUM7UUFDdkMsc0JBQWlCLEdBQWtCLElBQUksQ0FBQztRQUN4QyxxQkFBZ0IsR0FBdUIsU0FBUyxDQUFDLENBQUMsdURBQXVEO1FBQ3pHLFVBQUssR0FBcUQsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLDRCQUE0QjtRQUd0SCxXQUFNLEdBQTZELEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyx5QkFBeUI7UUFDMUgsZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLHlCQUF5QjtJQVM0QixDQUFDO0lBRTFFLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDeEIsSUFBQSwrQkFBVSxFQUFFLHlCQUFPLEVBQUUseUJBQU8sQ0FBYTtRQUVqRCxJQUFJLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRDthQUFNLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUM5RTthQUFNLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsR0FBdUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxNQUFtQixJQUFTLENBQUM7SUFFM0MscUNBQVMsR0FBVCxjQUFtQixDQUFDO0lBRXBCLDRDQUFnQixHQUFoQixVQUFpQixFQUFnQztRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUFpQixVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVPLG9DQUFRLEdBQWhCLFVBQWlCLEtBQXlCLEVBQUUsWUFBNkI7UUFBN0IsNkJBQUEsRUFBQSxvQkFBNkI7UUFDdkUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQzlCO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQU0sRUFBRSxLQUFNLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFTyxvQ0FBUSxHQUFoQixVQUFpQixZQUE2QjtRQUE3Qiw2QkFBQSxFQUFBLG9CQUE2QjtRQUM1QyxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0QsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFNLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssNENBQWdCLEdBQXhCLFVBQXlCLEtBQW1CO1FBQTVDLGlCQVFDO1FBUEMsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRTVCLElBQUksT0FBTyxlQUFlLEtBQUssV0FBVyxFQUFFO1lBQzFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEksQ0FBQztJQUVEOztPQUVHO0lBQ0ssK0NBQW1CLEdBQTNCLFVBQTRCLFlBQW9CO1FBQzlDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLFNBQU8sR0FBa0IsSUFBSSxDQUFDO1lBQ2xDLElBQUksS0FBVyxDQUFDO1lBQ2hCLElBQUksYUFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSztnQkFDdkIsS0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLFNBQU8sS0FBSyxJQUFJLElBQUksS0FBRyxHQUFHLFNBQVEsRUFBRTtvQkFDdEMsU0FBTyxHQUFHLEtBQUcsQ0FBQztvQkFDZCxhQUFXLEdBQUcsS0FBSyxDQUFDO2lCQUNyQjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQVcsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFTywwQ0FBYyxHQUF0QixVQUF1QixZQUFvQjtRQUN6QyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBTSxDQUFDLEVBQUU7WUFDOUIsSUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQWlCLENBQUMsQ0FBQztZQUMxRCxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFpQixDQUFDLEdBQUcsWUFBWSxDQUFDO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxpREFBcUIsR0FBN0I7O1FBQ0UsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxJQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDL0UsSUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTFILElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFFLEtBQUs7WUFDakMsTUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7UUFFSCwwQkFBbUQsRUFBbEQseUJBQWlCLEVBQUUseUJBQWlCLENBQWU7UUFDcEQsMEJBQW1ELEVBQWxELHlCQUFpQixFQUFFLHlCQUFpQixDQUFlO1FBRXBELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLHVDQUFXLEdBQW5CLFVBQW9CLEtBQWE7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFTyxzQ0FBVSxHQUFsQixVQUFtQixLQUFhO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8scUNBQVMsR0FBakI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUNLLHFEQUF5QixHQUFqQztRQUFBLGlCQXlDQztRQXhDQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3hELElBQU0sS0FBSyxHQUE2QjtZQUN0QyxLQUFLLEVBQUUsV0FBVztZQUNsQixJQUFJLEVBQUUsV0FBVztZQUNqQixHQUFHLEVBQUUsU0FBUztZQUNkLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQztTQUN4QixDQUFDO1FBQ0YsSUFBTSxLQUFLLEdBQTZCO1lBQ3RDLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxXQUFXO1lBQ2pCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUM7WUFDdkMsTUFBTSxFQUFFLFVBQUMsQ0FBMEIsSUFBSyxPQUFBLENBQUMsWUFBWSxVQUFVLEVBQXZCLENBQXVCO1NBQ2hFLENBQUM7UUFFRixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO1lBQ25CLElBQUEsb0JBQUssRUFBRSxrQkFBSSxFQUFFLGdCQUFHLEVBQUUsMEJBQVEsRUFBRSxrQkFBK0IsRUFBL0IsOERBQStCLENBQVk7WUFFL0UsTUFBTSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDckQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUNsQixHQUFHLENBQUMsV0FBVyxDQUFDLEVBQ2hCLEtBQUssd0JBQW1CLFFBQVEsSUFDaEMsR0FBRyxDQUFDLFVBQUMsUUFBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUMzRCxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ25ELE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFDbEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUNoQixLQUFLLHdCQUFtQixRQUFRLElBQ2hDLG9CQUFvQixFQUFFLEVBQ3RCLEdBQUcsQ0FBQyxVQUFDLFFBQWdCLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQS9CLENBQStCLENBQUMsRUFDMUQsb0JBQW9CLEVBQUUsRUFDdEIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FDdkIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWMsRUFBRSxLQUFLLENBQUMsYUFBYyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWMsRUFBRSxLQUFLLENBQUMsYUFBYyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUssRUFBRSxLQUFLLENBQUMsSUFBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLHlDQUFhLEdBQXJCLFVBQXNCLE9BQTRDO1FBQTVDLHdCQUFBLEVBQUEsV0FBcUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7UUFDaEUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUVELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQztJQUVPLDJDQUFlLEdBQXZCLFVBQXdCLE9BQTRDO1FBQTVDLHdCQUFBLEVBQUEsV0FBcUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7UUFDbEUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUVELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7UUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVPLDRDQUFnQixHQUF4QixVQUF5QixPQUFnQjtRQUN2QyxJQUFNLE9BQU8sR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRU8sOENBQWtCLEdBQTFCLFVBQTJCLFFBQWlCO1FBQzFDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFTyw0Q0FBZ0IsR0FBeEIsVUFBeUIsUUFBZ0I7UUFDdkMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDbEQsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVDLElBQU0sS0FBSyxHQUFHLG1CQUFtQixDQUFDLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0YsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RGLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUN4RCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFSLElBQUksV0FBUSxJQUFJLEdBQUUsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVPLHlDQUFhLEdBQXJCLFVBQXNCLEtBQWE7UUFDakMsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxrREFBc0IsR0FBOUI7UUFDRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDOUI7UUFDRCxJQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3BELENBQUM7SUFFTywyQ0FBZSxHQUF2QjtRQUNFLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUksRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUMvQjtRQUNELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7T0FFRztJQUNLLCtDQUFtQixHQUEzQixVQUE0QixNQUF1QjtRQUF2Qix1QkFBQSxFQUFBLGNBQXVCO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQUVPLHVDQUFXLEdBQW5CLFVBQW9CLEtBQXlCO1FBQTdDLGlCQVdDO1FBVkMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBTSxDQUFDLEVBQUU7WUFDbEMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUNuSDthQUFNO1lBQ0wsR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFNLENBQUM7Z0JBQ3pCLENBQUMsQ0FBRSxLQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQztnQkFDbEYsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEtBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsRTtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOztPQUVHO0lBQ0ssNENBQWdCLEdBQXhCLFVBQXlCLEtBQWtCO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekYsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7T0FFRztJQUNLLGdEQUFvQixHQUE1QixVQUE2QixLQUF5QjtRQUNwRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEQsTUFBTSx5QkFBeUIsRUFBRSxDQUFDO1NBQ25DO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVPLHVDQUFXLEdBQW5CLFVBQW9CLElBQWlCLEVBQUUsSUFBaUI7UUFDdEQsSUFBSSxPQUFPLElBQUksS0FBSyxPQUFPLElBQUksRUFBRTtZQUMvQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQVMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQ3RHLENBQUM7SUFFRDs7T0FFRztJQUNLLDZDQUFpQixHQUF6QixVQUEwQixXQUF1QjtRQUF2Qiw0QkFBQSxFQUFBLGVBQXVCO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFFLEtBQUs7WUFDakMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEtBQUssV0FBVyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGdEQUFvQixHQUE1QjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVPLDJDQUFlLEdBQXZCLFVBQXdCLE1BQWM7UUFDcEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDUCxHQUFHLENBQUMsY0FBTSxPQUFBLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sNkNBQWlCLEdBQXpCLFVBQTBCLEtBQWM7UUFDdEMsSUFBTSxVQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUN0QyxLQUFLLElBQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtZQUN2QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBTSxHQUFHLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1RCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUMxQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNoRjtTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvQyxDQUFDO3NGQXBaVSxpQkFBaUI7MERBQWpCLGlCQUFpQjs7Ozs7aWRBVGpCO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLEVBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixFQUFDO29CQUNoRCxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1lDeERILGlDQU9FO1lBQUEseUJBQW1DO1lBQ25DLHFDQUttQjtZQUNuQix3RkFPQztZQUNELDRGQVNDO1lBQ0QsMEZBU0M7WUFDSCxpQkFBTTs7WUF2Q0oscURBQXdDLHVDQUFBLHlDQUFBO1lBTXRDLGVBQXlCO1lBQXpCLDJDQUF5Qiw4QkFBQSw4QkFBQSw4QkFBQTtZQU16QixlQUFrQjtZQUFsQixxQ0FBa0I7WUFRbEIsZUFBOEI7WUFBOUIscUNBQThCO1lBVTlCLGVBQWtCO1lBQWxCLHFDQUFrQjs7SUQ2Qks7UUFBZixZQUFZLEVBQUU7O3lEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7cURBQXlCO0lBQ3hCO1FBQWYsWUFBWSxFQUFFOzt5REFBNEI7SUFDM0I7UUFBZixZQUFZLEVBQUU7O3NEQUEwQjtJQUN6QjtRQUFmLFlBQVksRUFBRTs7eURBQTZCOzRCQWxFdkQ7Q0FnZEMsQUFwYUQsSUFvYUM7U0FyWlksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FmN0IsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsRUFBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLEVBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2dCQUNELFdBQVcsRUFBRSw0QkFBNEI7YUFDMUM7O2tCQUVFLFNBQVM7bUJBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRXBDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBwbHVjaywgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGFycmF5c0VxdWFsLFxyXG4gIGVuc3VyZU51bWJlckluUmFuZ2UsXHJcbiAgZ2V0RWxlbWVudE9mZnNldCxcclxuICBnZXRQZXJjZW50LFxyXG4gIGdldFByZWNpc2lvbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnLFxyXG4gIHNoYWxsb3dDb3B5QXJyYXksXHJcbiAgc2lsZW50RXZlbnRcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRXh0ZW5kZWRNYXJrLCBpc1ZhbHVlQVJhbmdlLCBOek1hcmtzLCBTbGlkZXJIYW5kbGVyLCBTbGlkZXJTaG93VG9vbHRpcCwgU2xpZGVyVmFsdWUgfSBmcm9tICcuL256LXNsaWRlci1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IGdldFZhbHVlVHlwZU5vdE1hdGNoRXJyb3IgfSBmcm9tICcuL256LXNsaWRlci1lcnJvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyJyxcclxuICBleHBvcnRBczogJ256U2xpZGVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56U2xpZGVyQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zbGlkZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdzbGlkZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBzbGlkZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRvdHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmNsdWRlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56UmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGVmYXVsdFZhbHVlOiBTbGlkZXJWYWx1ZSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56TWFya3M6IE56TWFya3MgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuek1heCA9IDEwMDtcclxuICBASW5wdXQoKSBuek1pbiA9IDA7XHJcbiAgQElucHV0KCkgbnpTdGVwID0gMTtcclxuICBASW5wdXQoKSBuelRvb2x0aXBWaXNpYmxlOiBTbGlkZXJTaG93VG9vbHRpcCA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpIG56VGlwRm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTbGlkZXJWYWx1ZT4oKTtcclxuXHJcbiAgdmFsdWU6IFNsaWRlclZhbHVlIHwgbnVsbCA9IG51bGw7XHJcbiAgc2xpZGVyRE9NOiBIVE1MRGl2RWxlbWVudDtcclxuICBjYWNoZVNsaWRlclN0YXJ0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBjYWNoZVNsaWRlckxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgYWN0aXZlVmFsdWVJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkOyAvLyBDdXJyZW50IGFjdGl2YXRlZCBoYW5kbGUncyBpbmRleCBPTkxZIGZvciByYW5nZT10cnVlXHJcbiAgdHJhY2s6IHsgb2Zmc2V0OiBudWxsIHwgbnVtYmVyOyBsZW5ndGg6IG51bGwgfCBudW1iZXIgfSA9IHsgb2Zmc2V0OiBudWxsLCBsZW5ndGg6IG51bGwgfTsgLy8gVHJhY2sncyBvZmZzZXQgYW5kIGxlbmd0aFxyXG4gIGhhbmRsZXM6IFNsaWRlckhhbmRsZXJbXTsgLy8gSGFuZGxlcycgb2Zmc2V0XHJcbiAgbWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW10gfCBudWxsOyAvLyBcInN0ZXBzXCIgaW4gYXJyYXkgdHlwZSB3aXRoIG1vcmUgZGF0YSAmIEZJTFRFUiBvdXQgdGhlIGludmFsaWQgbWFya1xyXG4gIGJvdW5kczogeyBsb3dlcjogU2xpZGVyVmFsdWUgfCBudWxsOyB1cHBlcjogU2xpZGVyVmFsdWUgfCBudWxsIH0gPSB7IGxvd2VyOiBudWxsLCB1cHBlcjogbnVsbCB9OyAvLyBub3cgZm9yIG56LXNsaWRlci1zdGVwXHJcbiAgaXNEcmFnZ2luZyA9IGZhbHNlOyAvLyBDdXJyZW50IGRyYWdnaW5nIHN0YXRlXHJcblxyXG4gIHByaXZhdGUgZHJhZ1N0YXJ0JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gIHByaXZhdGUgZHJhZ01vdmUkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgcHJpdmF0ZSBkcmFnRW5kJDogT2JzZXJ2YWJsZTxFdmVudD47XHJcbiAgcHJpdmF0ZSBkcmFnU3RhcnRfOiBTdWJzY3JpcHRpb24gfCBudWxsO1xyXG4gIHByaXZhdGUgZHJhZ01vdmVfOiBTdWJzY3JpcHRpb24gfCBudWxsO1xyXG4gIHByaXZhdGUgZHJhZ0VuZF86IFN1YnNjcmlwdGlvbiB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVzID0gdGhpcy5nZW5lcmF0ZUhhbmRsZXModGhpcy5uelJhbmdlID8gMiA6IDEpO1xyXG4gICAgdGhpcy5zbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5tYXJrc0FycmF5ID0gdGhpcy5uek1hcmtzID8gdGhpcy5nZW5lcmF0ZU1hcmtJdGVtcyh0aGlzLm56TWFya3MpIDogbnVsbDtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLmNyZWF0ZURyYWdnaW5nT2JzZXJ2YWJsZXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKHRoaXMubnpEaXNhYmxlZCk7XHJcbiAgICBpZiAodGhpcy5nZXRWYWx1ZSgpID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5mb3JtYXRWYWx1ZShudWxsKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56RGlzYWJsZWQsIG56TWFya3MsIG56UmFuZ2UgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56RGlzYWJsZWQgJiYgIW56RGlzYWJsZWQuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQobnpEaXNhYmxlZC5jdXJyZW50VmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChuek1hcmtzICYmICFuek1hcmtzLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubnpNYXJrcyA/IHRoaXMuZ2VuZXJhdGVNYXJrSXRlbXModGhpcy5uek1hcmtzKSA6IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKG56UmFuZ2UgJiYgIW56UmFuZ2UuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsOiBTbGlkZXJWYWx1ZSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG9uVmFsdWVDaGFuZ2UoX3ZhbHVlOiBTbGlkZXJWYWx1ZSk6IHZvaWQge31cclxuXHJcbiAgb25Ub3VjaGVkKCk6IHZvaWQge31cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBTbGlkZXJWYWx1ZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKGlzRGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogU2xpZGVyVmFsdWUgfCBudWxsLCBpc1dyaXRlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKGlzV3JpdGVWYWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbHVlc0VxdWFsKHRoaXMudmFsdWUhLCB2YWx1ZSEpKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGVUcmFja0FuZEhhbmRsZXMoKTtcclxuICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWYWx1ZShjbG9uZUFuZFNvcnQ6IGJvb2xlYW4gPSBmYWxzZSk6IFNsaWRlclZhbHVlIHtcclxuICAgIGlmIChjbG9uZUFuZFNvcnQgJiYgdGhpcy52YWx1ZSAmJiBpc1ZhbHVlQVJhbmdlKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBzaGFsbG93Q29weUFycmF5KHRoaXMudmFsdWUpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnZhbHVlITtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb25lICYgc29ydCBjdXJyZW50IHZhbHVlIGFuZCBjb252ZXJ0IHRoZW0gdG8gb2Zmc2V0cywgdGhlbiByZXR1cm4gdGhlIG5ldyBvbmUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlPzogU2xpZGVyVmFsdWUpOiBTbGlkZXJWYWx1ZSB7XHJcbiAgICBsZXQgbm9ybWFsaXplZFZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBub3JtYWxpemVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIG5vcm1hbGl6ZWRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsdWVBUmFuZ2Uobm9ybWFsaXplZFZhbHVlKSA/IG5vcm1hbGl6ZWRWYWx1ZS5tYXAodmFsID0+IHRoaXMudmFsdWVUb09mZnNldCh2YWwpKSA6IHRoaXMudmFsdWVUb09mZnNldChub3JtYWxpemVkVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCB0aGUgY2xvc2VzdCB2YWx1ZSB0byBiZSBhY3RpdmF0ZWQgKG9ubHkgZm9yIHJhbmdlID0gdHJ1ZSkuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRBY3RpdmVWYWx1ZUluZGV4KHBvaW50ZXJWYWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuICAgIGlmIChpc1ZhbHVlQVJhbmdlKHZhbHVlKSkge1xyXG4gICAgICBsZXQgbWluaW1hbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgIGxldCBnYXA6IG51bWJlcjtcclxuICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gLTE7XHJcbiAgICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBnYXAgPSBNYXRoLmFicyhwb2ludGVyVmFsdWUgLSB2YWwpO1xyXG4gICAgICAgIGlmIChtaW5pbWFsID09PSBudWxsIHx8IGdhcCA8IG1pbmltYWwhKSB7XHJcbiAgICAgICAgICBtaW5pbWFsID0gZ2FwO1xyXG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggPSBhY3RpdmVJbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QWN0aXZlVmFsdWUocG9pbnRlclZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChpc1ZhbHVlQVJhbmdlKHRoaXMudmFsdWUhKSkge1xyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHNoYWxsb3dDb3B5QXJyYXkodGhpcy52YWx1ZSBhcyBudW1iZXJbXSk7XHJcbiAgICAgIG5ld1ZhbHVlW3RoaXMuYWN0aXZlVmFsdWVJbmRleCFdID0gcG9pbnRlclZhbHVlO1xyXG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUocG9pbnRlclZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0cmFjayBhbmQgaGFuZGxlcycgcG9zaXRpb24gYW5kIGxlbmd0aC5cclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlKTtcclxuICAgIGNvbnN0IHZhbHVlU29ydGVkID0gdGhpcy5nZXRWYWx1ZSh0cnVlKTtcclxuICAgIGNvbnN0IG9mZnNldFNvcnRlZCA9IHRoaXMuZ2V0VmFsdWVUb09mZnNldCh2YWx1ZVNvcnRlZCk7XHJcbiAgICBjb25zdCBib3VuZFBhcnRzID0gaXNWYWx1ZUFSYW5nZSh2YWx1ZVNvcnRlZCkgPyB2YWx1ZVNvcnRlZCA6IFswLCB2YWx1ZVNvcnRlZF07XHJcbiAgICBjb25zdCB0cmFja1BhcnRzID0gaXNWYWx1ZUFSYW5nZShvZmZzZXRTb3J0ZWQpID8gW29mZnNldFNvcnRlZFswXSwgb2Zmc2V0U29ydGVkWzFdIC0gb2Zmc2V0U29ydGVkWzBdXSA6IFswLCBvZmZzZXRTb3J0ZWRdO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGhhbmRsZS5vZmZzZXQgPSBpc1ZhbHVlQVJhbmdlKG9mZnNldCkgPyBvZmZzZXRbaW5kZXhdIDogb2Zmc2V0O1xyXG4gICAgICBoYW5kbGUudmFsdWUgPSBpc1ZhbHVlQVJhbmdlKHZhbHVlKSA/IHZhbHVlW2luZGV4XSA6IHZhbHVlIHx8IDA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBbdGhpcy5ib3VuZHMubG93ZXIsIHRoaXMuYm91bmRzLnVwcGVyXSA9IGJvdW5kUGFydHM7XHJcbiAgICBbdGhpcy50cmFjay5vZmZzZXQsIHRoaXMudHJhY2subGVuZ3RoXSA9IHRyYWNrUGFydHM7XHJcblxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRHJhZ1N0YXJ0KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyh0cnVlKTtcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSgpO1xyXG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZUluZGV4KHZhbHVlKTtcclxuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5zaG93SGFuZGxlVG9vbHRpcCh0aGlzLm56UmFuZ2UgPyB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggOiAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25EcmFnTW92ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkRyYWdFbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25BZnRlckNoYW5nZS5lbWl0KHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xyXG4gICAgdGhpcy50b2dnbGVEcmFnTW92aW5nKGZhbHNlKTtcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSh0cnVlKTtcclxuICAgIHRoaXMuaGlkZUFsbEhhbmRsZVRvb2x0aXAoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIHVzZXIgaW50ZXJhY3Rpb25zIGhhbmRsZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVEcmFnZ2luZ09ic2VydmFibGVzKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXJET007XHJcbiAgICBjb25zdCBvcmllbnRGaWVsZCA9IHRoaXMubnpWZXJ0aWNhbCA/ICdwYWdlWScgOiAncGFnZVgnO1xyXG4gICAgY29uc3QgbW91c2U6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcclxuICAgICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxyXG4gICAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcclxuICAgICAgZW5kOiAnbW91c2V1cCcsXHJcbiAgICAgIHBsdWNrS2V5OiBbb3JpZW50RmllbGRdXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdG91Y2g6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcclxuICAgICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcclxuICAgICAgbW92ZTogJ3RvdWNobW92ZScsXHJcbiAgICAgIGVuZDogJ3RvdWNoZW5kJyxcclxuICAgICAgcGx1Y2tLZXk6IFsndG91Y2hlcycsICcwJywgb3JpZW50RmllbGRdLFxyXG4gICAgICBmaWx0ZXI6IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnRcclxuICAgIH07XHJcblxyXG4gICAgW21vdXNlLCB0b3VjaF0uZm9yRWFjaChzb3VyY2UgPT4ge1xyXG4gICAgICBjb25zdCB7IHN0YXJ0LCBtb3ZlLCBlbmQsIHBsdWNrS2V5LCBmaWx0ZXI6IGZpbHRlckZ1bmMgPSAoKSA9PiB0cnVlIH0gPSBzb3VyY2U7XHJcblxyXG4gICAgICBzb3VyY2Uuc3RhcnRQbHVja2VkJCA9IGZyb21FdmVudChzbGlkZXJET00sIHN0YXJ0KS5waXBlKFxyXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcclxuICAgICAgICB0YXAoc2lsZW50RXZlbnQpLFxyXG4gICAgICAgIHBsdWNrPEV2ZW50LCBudW1iZXI+KC4uLnBsdWNrS2V5KSxcclxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpXHJcbiAgICAgICk7XHJcbiAgICAgIHNvdXJjZS5lbmQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCBlbmQpO1xyXG4gICAgICBzb3VyY2UubW92ZVJlc29sdmVkJCA9IGZyb21FdmVudChkb2N1bWVudCwgbW92ZSkucGlwZShcclxuICAgICAgICBmaWx0ZXIoZmlsdGVyRnVuYyksXHJcbiAgICAgICAgdGFwKHNpbGVudEV2ZW50KSxcclxuICAgICAgICBwbHVjazxFdmVudCwgbnVtYmVyPiguLi5wbHVja0tleSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFrZVVudGlsKHNvdXJjZS5lbmQkKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kcmFnU3RhcnQkID0gbWVyZ2UobW91c2Uuc3RhcnRQbHVja2VkJCEsIHRvdWNoLnN0YXJ0UGx1Y2tlZCQhKTtcclxuICAgIHRoaXMuZHJhZ01vdmUkID0gbWVyZ2UobW91c2UubW92ZVJlc29sdmVkJCEsIHRvdWNoLm1vdmVSZXNvbHZlZCQhKTtcclxuICAgIHRoaXMuZHJhZ0VuZCQgPSBtZXJnZShtb3VzZS5lbmQkISwgdG91Y2guZW5kJCEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWydzdGFydCcsICdtb3ZlJywgJ2VuZCddKTogdm9pZCB7XHJcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdTdGFydCQgJiYgIXRoaXMuZHJhZ1N0YXJ0Xykge1xyXG4gICAgICB0aGlzLmRyYWdTdGFydF8gPSB0aGlzLmRyYWdTdGFydCQuc3Vic2NyaWJlKHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlJCAmJiAhdGhpcy5kcmFnTW92ZV8pIHtcclxuICAgICAgdGhpcy5kcmFnTW92ZV8gPSB0aGlzLmRyYWdNb3ZlJC5zdWJzY3JpYmUodGhpcy5vbkRyYWdNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ2VuZCcpICE9PSAtMSAmJiB0aGlzLmRyYWdFbmQkICYmICF0aGlzLmRyYWdFbmRfKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0VuZF8gPSB0aGlzLmRyYWdFbmQkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ0VuZC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWydzdGFydCcsICdtb3ZlJywgJ2VuZCddKTogdm9pZCB7XHJcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdTdGFydF8pIHtcclxuICAgICAgdGhpcy5kcmFnU3RhcnRfLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0XyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlXykge1xyXG4gICAgICB0aGlzLmRyYWdNb3ZlXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRyYWdNb3ZlXyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ0VuZF8pIHtcclxuICAgICAgdGhpcy5kcmFnRW5kXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRyYWdFbmRfID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlRHJhZ01vdmluZyhtb3ZhYmxlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBwZXJpb2RzID0gWydtb3ZlJywgJ2VuZCddO1xyXG4gICAgaWYgKG1vdmFibGUpIHtcclxuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVEcmFnRGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKFsnc3RhcnQnXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb246IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBzbGlkZXJTdGFydCA9IHRoaXMuZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpO1xyXG4gICAgY29uc3Qgc2xpZGVyTGVuZ3RoID0gdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcclxuICAgIGNvbnN0IHJhdGlvID0gZW5zdXJlTnVtYmVySW5SYW5nZSgocG9zaXRpb24gLSBzbGlkZXJTdGFydCkgLyBzbGlkZXJMZW5ndGgsIDAsIDEpO1xyXG4gICAgY29uc3QgdmFsID0gKHRoaXMubnpNYXggLSB0aGlzLm56TWluKSAqICh0aGlzLm56VmVydGljYWwgPyAxIC0gcmF0aW8gOiByYXRpbykgKyB0aGlzLm56TWluO1xyXG4gICAgY29uc3QgcG9pbnRzID0gdGhpcy5uek1hcmtzID09PSBudWxsID8gW10gOiBPYmplY3Qua2V5cyh0aGlzLm56TWFya3MpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgIGlmICh0aGlzLm56U3RlcCAhPT0gbnVsbCAmJiAhdGhpcy5uekRvdHMpIHtcclxuICAgICAgY29uc3QgY2xvc2VzdE9uZSA9IE1hdGgucm91bmQodmFsIC8gdGhpcy5uelN0ZXApICogdGhpcy5uelN0ZXA7XHJcbiAgICAgIHBvaW50cy5wdXNoKGNsb3Nlc3RPbmUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2FwcyA9IHBvaW50cy5tYXAocG9pbnQgPT4gTWF0aC5hYnModmFsIC0gcG9pbnQpKTtcclxuICAgIGNvbnN0IGNsb3Nlc3QgPSBwb2ludHNbZ2Fwcy5pbmRleE9mKE1hdGgubWluKC4uLmdhcHMpKV07XHJcbiAgICByZXR1cm4gdGhpcy5uelN0ZXAgPT09IG51bGwgPyBjbG9zZXN0IDogcGFyc2VGbG9hdChjbG9zZXN0LnRvRml4ZWQoZ2V0UHJlY2lzaW9uKHRoaXMubnpTdGVwKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWx1ZVRvT2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGdldFBlcmNlbnQodGhpcy5uek1pbiwgdGhpcy5uek1heCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5jYWNoZVNsaWRlclN0YXJ0ICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyU3RhcnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvZmZzZXQgPSBnZXRFbGVtZW50T2Zmc2V0KHRoaXMuc2xpZGVyRE9NKTtcclxuICAgIHJldHVybiB0aGlzLm56VmVydGljYWwgPyBvZmZzZXQudG9wIDogb2Zmc2V0LmxlZnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNsaWRlckxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGg7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlckRPTTtcclxuICAgIHJldHVybiB0aGlzLm56VmVydGljYWwgPyBzbGlkZXJET00uY2xpZW50SGVpZ2h0IDogc2xpZGVyRE9NLmNsaWVudFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9ucyBmb3IgcGVyZm9ybWFuY2UgKG1heSBub3QgbmVjZXNzYXJ5PylcclxuICAgKi9cclxuICBwcml2YXRlIGNhY2hlU2xpZGVyUHJvcGVydHkocmVtb3ZlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJTdGFydCA9IHJlbW92ZSA/IG51bGwgOiB0aGlzLmdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTtcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0VmFsdWUodmFsdWU6IFNsaWRlclZhbHVlIHwgbnVsbCk6IFNsaWRlclZhbHVlIHtcclxuICAgIGxldCByZXMgPSB2YWx1ZTtcclxuICAgIGlmICghdGhpcy5hc3NlcnRWYWx1ZVZhbGlkKHZhbHVlISkpIHtcclxuICAgICAgcmVzID0gdGhpcy5uekRlZmF1bHRWYWx1ZSA9PT0gbnVsbCA/ICh0aGlzLm56UmFuZ2UgPyBbdGhpcy5uek1pbiwgdGhpcy5uek1heF0gOiB0aGlzLm56TWluKSA6IHRoaXMubnpEZWZhdWx0VmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMgPSBpc1ZhbHVlQVJhbmdlKHZhbHVlISlcclxuICAgICAgICA/ICh2YWx1ZSBhcyBudW1iZXJbXSkubWFwKHZhbCA9PiBlbnN1cmVOdW1iZXJJblJhbmdlKHZhbCwgdGhpcy5uek1pbiwgdGhpcy5uek1heCkpXHJcbiAgICAgICAgOiBlbnN1cmVOdW1iZXJJblJhbmdlKHZhbHVlIGFzIG51bWJlciwgdGhpcy5uek1pbiwgdGhpcy5uek1heCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHZhbHVlIGlzIHZhbGlkIGFuZCB0aHJvdyBlcnJvciBpZiB2YWx1ZS10eXBlL3JhbmdlIG5vdCBtYXRjaC5cclxuICAgKi9cclxuICBwcml2YXRlIGFzc2VydFZhbHVlVmFsaWQodmFsdWU6IFNsaWRlclZhbHVlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIGlzTmFOKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5hc3NlcnRWYWx1ZVR5cGVNYXRjaCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NlcnQgdGhhdCBpZiBgdGhpcy5uelJhbmdlYCBpcyBgdHJ1ZWAsIHZhbHVlIGlzIGFsc28gYSByYW5nZSwgdmljZSB2ZXJzYS5cclxuICAgKi9cclxuICBwcml2YXRlIGFzc2VydFZhbHVlVHlwZU1hdGNoKHZhbHVlOiBTbGlkZXJWYWx1ZSB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKGlzVmFsdWVBUmFuZ2UodmFsdWUpICE9PSB0aGlzLm56UmFuZ2UpIHtcclxuICAgICAgdGhyb3cgZ2V0VmFsdWVUeXBlTm90TWF0Y2hFcnJvcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbHVlc0VxdWFsKHZhbEE6IFNsaWRlclZhbHVlLCB2YWxCOiBTbGlkZXJWYWx1ZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiB2YWxBICE9PSB0eXBlb2YgdmFsQikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWx1ZUFSYW5nZSh2YWxBKSAmJiBpc1ZhbHVlQVJhbmdlKHZhbEIpID8gYXJyYXlzRXF1YWw8bnVtYmVyPih2YWxBLCB2YWxCKSA6IHZhbEEgPT09IHZhbEI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IG9uZSBoYW5kbGUncyB0b29sdGlwIGFuZCBoaWRlIG90aGVycycuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzaG93SGFuZGxlVG9vbHRpcChoYW5kbGVJbmRleDogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcclxuICAgICAgaGFuZGxlLmFjdGl2ZSA9IGluZGV4ID09PSBoYW5kbGVJbmRleDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlQWxsSGFuZGxlVG9vbHRpcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKGhhbmRsZSA9PiAoaGFuZGxlLmFjdGl2ZSA9IGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlSGFuZGxlcyhhbW91bnQ6IG51bWJlcik6IFNsaWRlckhhbmRsZXJbXSB7XHJcbiAgICByZXR1cm4gQXJyYXkoYW1vdW50KVxyXG4gICAgICAuZmlsbCgwKVxyXG4gICAgICAubWFwKCgpID0+ICh7IG9mZnNldDogbnVsbCwgdmFsdWU6IG51bGwsIGFjdGl2ZTogZmFsc2UgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZU1hcmtJdGVtcyhtYXJrczogTnpNYXJrcyk6IEV4dGVuZGVkTWFya1tdIHwgbnVsbCB7XHJcbiAgICBjb25zdCBtYXJrc0FycmF5OiBFeHRlbmRlZE1hcmtbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gbWFya3MpIHtcclxuICAgICAgY29uc3QgbWFyayA9IG1hcmtzW2tleV07XHJcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiBrZXkgPT09ICdudW1iZXInID8ga2V5IDogcGFyc2VGbG9hdChrZXkpO1xyXG4gICAgICBpZiAodmFsID49IHRoaXMubnpNaW4gJiYgdmFsIDw9IHRoaXMubnpNYXgpIHtcclxuICAgICAgICBtYXJrc0FycmF5LnB1c2goeyB2YWx1ZTogdmFsLCBvZmZzZXQ6IHRoaXMudmFsdWVUb09mZnNldCh2YWwpLCBjb25maWc6IG1hcmsgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXJrc0FycmF5Lmxlbmd0aCA/IG1hcmtzQXJyYXkgOiBudWxsO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgI3NsaWRlclxyXG4gIGNsYXNzPVwiYW50LXNsaWRlclwiXHJcbiAgW2NsYXNzLmFudC1zbGlkZXItZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXHJcbiAgW2NsYXNzLmFudC1zbGlkZXItdmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXHJcbiAgW2NsYXNzLmFudC1zbGlkZXItd2l0aC1tYXJrc109XCJtYXJrc0FycmF5XCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtc2xpZGVyLXJhaWxcIj48L2Rpdj5cclxuICA8bnotc2xpZGVyLXRyYWNrXHJcbiAgICBbbnpWZXJ0aWNhbF09XCJuelZlcnRpY2FsXCJcclxuICAgIFtuekluY2x1ZGVkXT1cIm56SW5jbHVkZWRcIlxyXG4gICAgW256T2Zmc2V0XT1cInRyYWNrLm9mZnNldFwiXHJcbiAgICBbbnpMZW5ndGhdPVwidHJhY2subGVuZ3RoXCJcclxuICA+PC9uei1zbGlkZXItdHJhY2s+XHJcbiAgPG56LXNsaWRlci1zdGVwXHJcbiAgICAqbmdJZj1cIm1hcmtzQXJyYXlcIlxyXG4gICAgW256VmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXHJcbiAgICBbbnpMb3dlckJvdW5kXT1cImJvdW5kcy5sb3dlclwiXHJcbiAgICBbbnpVcHBlckJvdW5kXT1cImJvdW5kcy51cHBlclwiXHJcbiAgICBbbnpNYXJrc0FycmF5XT1cIm1hcmtzQXJyYXlcIlxyXG4gICAgW256SW5jbHVkZWRdPVwibnpJbmNsdWRlZFwiXHJcbiAgPjwvbnotc2xpZGVyLXN0ZXA+XHJcbiAgPG56LXNsaWRlci1oYW5kbGVcclxuICAgICpuZ0Zvcj1cImxldCBoYW5kbGUgb2YgaGFuZGxlc1wiXHJcbiAgICBbbnpWZXJ0aWNhbF09XCJuelZlcnRpY2FsXCJcclxuICAgIFtuek9mZnNldF09XCJoYW5kbGUub2Zmc2V0XCJcclxuICAgIFtuelZhbHVlXT1cImhhbmRsZS52YWx1ZVwiXHJcbiAgICBbbnpBY3RpdmVdPVwiaGFuZGxlLmFjdGl2ZVwiXHJcbiAgICBbbnpUaXBGb3JtYXR0ZXJdPVwibnpUaXBGb3JtYXR0ZXJcIlxyXG4gICAgW256VG9vbHRpcFZpc2libGVdPVwibnpUb29sdGlwVmlzaWJsZVwiXHJcbiAgICBbbnpUb29sdGlwUGxhY2VtZW50XT1cIm56VG9vbHRpcFBsYWNlbWVudFwiXHJcbiAgPjwvbnotc2xpZGVyLWhhbmRsZT5cclxuICA8bnotc2xpZGVyLW1hcmtzXHJcbiAgICAqbmdJZj1cIm1hcmtzQXJyYXlcIlxyXG4gICAgW256VmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXHJcbiAgICBbbnpNaW5dPVwibnpNaW5cIlxyXG4gICAgW256TWF4XT1cIm56TWF4XCJcclxuICAgIFtuekxvd2VyQm91bmRdPVwiYm91bmRzLmxvd2VyXCJcclxuICAgIFtuelVwcGVyQm91bmRdPVwiYm91bmRzLnVwcGVyXCJcclxuICAgIFtuek1hcmtzQXJyYXldPVwibWFya3NBcnJheVwiXHJcbiAgICBbbnpJbmNsdWRlZF09XCJuekluY2x1ZGVkXCJcclxuICA+PC9uei1zbGlkZXItbWFya3M+XHJcbjwvZGl2PlxyXG4iXX0=