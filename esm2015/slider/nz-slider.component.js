import { __decorate, __metadata } from "tslib";
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
const _c0 = ["slider"];
function NzSliderComponent_nz_slider_step_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-slider-step", 7);
} if (rf & 2) {
    const ctx_r741 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzVertical", ctx_r741.nzVertical)("nzLowerBound", ctx_r741.bounds.lower)("nzUpperBound", ctx_r741.bounds.upper)("nzMarksArray", ctx_r741.marksArray)("nzIncluded", ctx_r741.nzIncluded);
} }
function NzSliderComponent_nz_slider_handle_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-slider-handle", 8);
} if (rf & 2) {
    const handle_r744 = ctx.$implicit;
    const ctx_r742 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzVertical", ctx_r742.nzVertical)("nzOffset", handle_r744.offset)("nzValue", handle_r744.value)("nzActive", handle_r744.active)("nzTipFormatter", ctx_r742.nzTipFormatter)("nzTooltipVisible", ctx_r742.nzTooltipVisible)("nzTooltipPlacement", ctx_r742.nzTooltipPlacement);
} }
function NzSliderComponent_nz_slider_marks_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-slider-marks", 9);
} if (rf & 2) {
    const ctx_r743 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzVertical", ctx_r743.nzVertical)("nzMin", ctx_r743.nzMin)("nzMax", ctx_r743.nzMax)("nzLowerBound", ctx_r743.bounds.lower)("nzUpperBound", ctx_r743.bounds.upper)("nzMarksArray", ctx_r743.marksArray)("nzIncluded", ctx_r743.nzIncluded);
} }
export class NzSliderComponent {
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
        this.track = { offset: null, length: null }; // Track's offset and length
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
        this.isDragging = false; // Current dragging state
    }
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
    ngOnDestroy() {
        this.unsubscribeDrag();
    }
    writeValue(val) {
        this.setValue(val, true);
    }
    onValueChange(_value) { }
    onTouched() { }
    registerOnChange(fn) {
        this.onValueChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    }
    setValue(value, isWriteValue = false) {
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!this.valuesEqual(this.value, value)) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    }
    getValue(cloneAndSort = false) {
        if (cloneAndSort && this.value && isValueARange(this.value)) {
            return shallowCopyArray(this.value).sort((a, b) => a - b);
        }
        return this.value;
    }
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    getValueToOffset(value) {
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueARange(normalizedValue) ? normalizedValue.map(val => this.valueToOffset(val)) : this.valueToOffset(normalizedValue);
    }
    /**
     * Find the closest value to be activated (only for range = true).
     */
    setActiveValueIndex(pointerValue) {
        const value = this.getValue();
        if (isValueARange(value)) {
            let minimal = null;
            let gap;
            let activeIndex = -1;
            value.forEach((val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < minimal) {
                    minimal = gap;
                    activeIndex = index;
                }
            });
            this.activeValueIndex = activeIndex;
        }
    }
    setActiveValue(pointerValue) {
        if (isValueARange(this.value)) {
            const newValue = shallowCopyArray(this.value);
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
     * Update track and handles' position and length.
     */
    updateTrackAndHandles() {
        const value = this.getValue();
        const offset = this.getValueToOffset(value);
        const valueSorted = this.getValue(true);
        const offsetSorted = this.getValueToOffset(valueSorted);
        const boundParts = isValueARange(valueSorted) ? valueSorted : [0, valueSorted];
        const trackParts = isValueARange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach((handle, index) => {
            handle.offset = isValueARange(offset) ? offset[index] : offset;
            handle.value = isValueARange(value) ? value[index] : value || 0;
        });
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
        this.cdr.markForCheck();
    }
    onDragStart(value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    }
    onDragMove(value) {
        this.setActiveValue(value);
        this.cdr.markForCheck();
    }
    onDragEnd() {
        this.nzOnAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    }
    /**
     * Create user interactions handles.
     */
    createDraggingObservables() {
        const sliderDOM = this.sliderDOM;
        const orientField = this.nzVertical ? 'pageY' : 'pageX';
        const mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        const touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (e) => e instanceof TouchEvent
        };
        [mouse, touch].forEach(source => {
            const { start, move, end, pluckKey, filter: filterFunc = () => true } = source;
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), map((position) => this.findClosestValue(position)));
            source.end$ = fromEvent(document, end);
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), distinctUntilChanged(), map((position) => this.findClosestValue(position)), distinctUntilChanged(), takeUntil(source.end$));
        });
        this.dragStart$ = merge(mouse.startPlucked$, touch.startPlucked$);
        this.dragMove$ = merge(mouse.moveResolved$, touch.moveResolved$);
        this.dragEnd$ = merge(mouse.end$, touch.end$);
    }
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
    toggleDragMoving(movable) {
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
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    findClosestValue(position) {
        const sliderStart = this.getSliderStartPosition();
        const sliderLength = this.getSliderLength();
        const ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
        const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        const points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat);
        if (this.nzStep !== null && !this.nzDots) {
            const closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        const gaps = points.map(point => Math.abs(val - point));
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        return this.nzStep === null ? closest : parseFloat(closest.toFixed(getPrecision(this.nzStep)));
    }
    valueToOffset(value) {
        return getPercent(this.nzMin, this.nzMax, value);
    }
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        const offset = getElementOffset(this.sliderDOM);
        return this.nzVertical ? offset.top : offset.left;
    }
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        const sliderDOM = this.sliderDOM;
        return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    formatValue(value) {
        let res = value;
        if (!this.assertValueValid(value)) {
            res = this.nzDefaultValue === null ? (this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin) : this.nzDefaultValue;
        }
        else {
            res = isValueARange(value)
                ? value.map(val => ensureNumberInRange(val, this.nzMin, this.nzMax))
                : ensureNumberInRange(value, this.nzMin, this.nzMax);
        }
        return res;
    }
    /**
     * Check if value is valid and throw error if value-type/range not match.
     */
    assertValueValid(value) {
        if (!Array.isArray(value) && isNaN(typeof value !== 'number' ? parseFloat(value) : value)) {
            return false;
        }
        return this.assertValueTypeMatch(value);
    }
    /**
     * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
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
    valuesEqual(valA, valB) {
        if (typeof valA !== typeof valB) {
            return false;
        }
        return isValueARange(valA) && isValueARange(valB) ? arraysEqual(valA, valB) : valA === valB;
    }
    /**
     * Show one handle's tooltip and hide others'.
     */
    showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((handle, index) => {
            handle.active = index === handleIndex;
        });
    }
    hideAllHandleTooltip() {
        this.handles.forEach(handle => (handle.active = false));
    }
    generateHandles(amount) {
        return Array(amount)
            .fill(0)
            .map(() => ({ offset: null, value: null, active: false }));
    }
    generateMarkItems(marks) {
        const marksArray = [];
        for (const key in marks) {
            const mark = marks[key];
            const val = typeof key === 'number' ? key : parseFloat(key);
            if (val >= this.nzMin && val <= this.nzMax) {
                marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
            }
        }
        return marksArray.length ? marksArray : null;
    }
}
/** @nocollapse */ NzSliderComponent.ɵfac = function NzSliderComponent_Factory(t) { return new (t || NzSliderComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Platform)); };
/** @nocollapse */ NzSliderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSliderComponent, selectors: [["nz-slider"]], viewQuery: function NzSliderComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slider = _t.first);
    } }, inputs: { nzDisabled: "nzDisabled", nzDots: "nzDots", nzIncluded: "nzIncluded", nzRange: "nzRange", nzVertical: "nzVertical", nzDefaultValue: "nzDefaultValue", nzMarks: "nzMarks", nzMax: "nzMax", nzMin: "nzMin", nzStep: "nzStep", nzTooltipVisible: "nzTooltipVisible", nzTooltipPlacement: "nzTooltipPlacement", nzTipFormatter: "nzTipFormatter" }, outputs: { nzOnAfterChange: "nzOnAfterChange" }, exportAs: ["nzSlider"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzSliderComponent)),
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
                        useExisting: forwardRef((() => NzSliderComponent)),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLmNvbXBvbmVudC50cyIsIm56LXNsaWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFGLE9BQU8sRUFDTCxXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFFWixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNaLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFnQixhQUFhLEVBQTBELE1BQU0seUJBQXlCLENBQUM7QUFDOUgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0lDNUI1RCxvQ0FPa0I7OztJQUxoQixnREFBeUIsdUNBQUEsdUNBQUEscUNBQUEsbUNBQUE7OztJQU0zQixzQ0FTb0I7Ozs7SUFQbEIsZ0RBQXlCLGdDQUFBLDhCQUFBLGdDQUFBLDJDQUFBLCtDQUFBLG1EQUFB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QkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgcGx1Y2ssIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBhcnJheXNFcXVhbCxcclxuICBlbnN1cmVOdW1iZXJJblJhbmdlLFxyXG4gIGdldEVsZW1lbnRPZmZzZXQsXHJcbiAgZ2V0UGVyY2VudCxcclxuICBnZXRQcmVjaXNpb24sXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyxcclxuICBzaGFsbG93Q29weUFycmF5LFxyXG4gIHNpbGVudEV2ZW50XHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IEV4dGVuZGVkTWFyaywgaXNWYWx1ZUFSYW5nZSwgTnpNYXJrcywgU2xpZGVySGFuZGxlciwgU2xpZGVyU2hvd1Rvb2x0aXAsIFNsaWRlclZhbHVlIH0gZnJvbSAnLi9uei1zbGlkZXItZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRWYWx1ZVR5cGVOb3RNYXRjaEVycm9yIH0gZnJvbSAnLi9uei1zbGlkZXItZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LXNsaWRlcicsXHJcbiAgZXhwb3J0QXM6ICduelNsaWRlcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelNsaWRlckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2xpZGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnc2xpZGVyJywgeyBzdGF0aWM6IHRydWUgfSkgc2xpZGVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEb3RzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SW5jbHVkZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelJhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekRlZmF1bHRWYWx1ZTogU2xpZGVyVmFsdWUgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuek1hcmtzOiBOek1hcmtzIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbnpNYXggPSAxMDA7XHJcbiAgQElucHV0KCkgbnpNaW4gPSAwO1xyXG4gIEBJbnB1dCgpIG56U3RlcCA9IDE7XHJcbiAgQElucHV0KCkgbnpUb29sdGlwVmlzaWJsZTogU2xpZGVyU2hvd1Rvb2x0aXAgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpUb29sdGlwUGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcclxuICBASW5wdXQoKSBuelRpcEZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25BZnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2xpZGVyVmFsdWU+KCk7XHJcblxyXG4gIHZhbHVlOiBTbGlkZXJWYWx1ZSB8IG51bGwgPSBudWxsO1xyXG4gIHNsaWRlckRPTTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgY2FjaGVTbGlkZXJTdGFydDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgY2FjaGVTbGlkZXJMZW5ndGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIGFjdGl2ZVZhbHVlSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDsgLy8gQ3VycmVudCBhY3RpdmF0ZWQgaGFuZGxlJ3MgaW5kZXggT05MWSBmb3IgcmFuZ2U9dHJ1ZVxyXG4gIHRyYWNrOiB7IG9mZnNldDogbnVsbCB8IG51bWJlcjsgbGVuZ3RoOiBudWxsIHwgbnVtYmVyIH0gPSB7IG9mZnNldDogbnVsbCwgbGVuZ3RoOiBudWxsIH07IC8vIFRyYWNrJ3Mgb2Zmc2V0IGFuZCBsZW5ndGhcclxuICBoYW5kbGVzOiBTbGlkZXJIYW5kbGVyW107IC8vIEhhbmRsZXMnIG9mZnNldFxyXG4gIG1hcmtzQXJyYXk6IEV4dGVuZGVkTWFya1tdIHwgbnVsbDsgLy8gXCJzdGVwc1wiIGluIGFycmF5IHR5cGUgd2l0aCBtb3JlIGRhdGEgJiBGSUxURVIgb3V0IHRoZSBpbnZhbGlkIG1hcmtcclxuICBib3VuZHM6IHsgbG93ZXI6IFNsaWRlclZhbHVlIHwgbnVsbDsgdXBwZXI6IFNsaWRlclZhbHVlIHwgbnVsbCB9ID0geyBsb3dlcjogbnVsbCwgdXBwZXI6IG51bGwgfTsgLy8gbm93IGZvciBuei1zbGlkZXItc3RlcFxyXG4gIGlzRHJhZ2dpbmcgPSBmYWxzZTsgLy8gQ3VycmVudCBkcmFnZ2luZyBzdGF0ZVxyXG5cclxuICBwcml2YXRlIGRyYWdTdGFydCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuICBwcml2YXRlIGRyYWdNb3ZlJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gIHByaXZhdGUgZHJhZ0VuZCQ6IE9ic2VydmFibGU8RXZlbnQ+O1xyXG4gIHByaXZhdGUgZHJhZ1N0YXJ0XzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcclxuICBwcml2YXRlIGRyYWdNb3ZlXzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcclxuICBwcml2YXRlIGRyYWdFbmRfOiBTdWJzY3JpcHRpb24gfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlcyA9IHRoaXMuZ2VuZXJhdGVIYW5kbGVzKHRoaXMubnpSYW5nZSA/IDIgOiAxKTtcclxuICAgIHRoaXMuc2xpZGVyRE9NID0gdGhpcy5zbGlkZXIubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubnpNYXJrcyA/IHRoaXMuZ2VuZXJhdGVNYXJrSXRlbXModGhpcy5uek1hcmtzKSA6IG51bGw7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5jcmVhdGVEcmFnZ2luZ09ic2VydmFibGVzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZCh0aGlzLm56RGlzYWJsZWQpO1xyXG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZm9ybWF0VmFsdWUobnVsbCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuekRpc2FibGVkLCBuek1hcmtzLCBuelJhbmdlIH0gPSBjaGFuZ2VzO1xyXG5cclxuICAgIGlmIChuekRpc2FibGVkICYmICFuekRpc2FibGVkLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKG56RGlzYWJsZWQuY3VycmVudFZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAobnpNYXJrcyAmJiAhbnpNYXJrcy5maXJzdENoYW5nZSkge1xyXG4gICAgICB0aGlzLm1hcmtzQXJyYXkgPSB0aGlzLm56TWFya3MgPyB0aGlzLmdlbmVyYXRlTWFya0l0ZW1zKHRoaXMubnpNYXJrcykgOiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChuelJhbmdlICYmICFuelJhbmdlLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5mb3JtYXRWYWx1ZShudWxsKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbDogU2xpZGVyVmFsdWUgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBvblZhbHVlQ2hhbmdlKF92YWx1ZTogU2xpZGVyVmFsdWUpOiB2b2lkIHt9XHJcblxyXG4gIG9uVG91Y2hlZCgpOiB2b2lkIHt9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogU2xpZGVyVmFsdWUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25WYWx1ZUNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZChpc0Rpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IFNsaWRlclZhbHVlIHwgbnVsbCwgaXNXcml0ZVZhbHVlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGlmIChpc1dyaXRlVmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy52YWx1ZXNFcXVhbCh0aGlzLnZhbHVlISwgdmFsdWUhKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XHJcbiAgICAgIHRoaXMub25WYWx1ZUNoYW5nZSh0aGlzLmdldFZhbHVlKHRydWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VmFsdWUoY2xvbmVBbmRTb3J0OiBib29sZWFuID0gZmFsc2UpOiBTbGlkZXJWYWx1ZSB7XHJcbiAgICBpZiAoY2xvbmVBbmRTb3J0ICYmIHRoaXMudmFsdWUgJiYgaXNWYWx1ZUFSYW5nZSh0aGlzLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gc2hhbGxvd0NvcHlBcnJheSh0aGlzLnZhbHVlKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9uZSAmIHNvcnQgY3VycmVudCB2YWx1ZSBhbmQgY29udmVydCB0aGVtIHRvIG9mZnNldHMsIHRoZW4gcmV0dXJuIHRoZSBuZXcgb25lLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0VmFsdWVUb09mZnNldCh2YWx1ZT86IFNsaWRlclZhbHVlKTogU2xpZGVyVmFsdWUge1xyXG4gICAgbGV0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh0eXBlb2Ygbm9ybWFsaXplZFZhbHVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBub3JtYWxpemVkVmFsdWUgPSB0aGlzLmdldFZhbHVlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc1ZhbHVlQVJhbmdlKG5vcm1hbGl6ZWRWYWx1ZSkgPyBub3JtYWxpemVkVmFsdWUubWFwKHZhbCA9PiB0aGlzLnZhbHVlVG9PZmZzZXQodmFsKSkgOiB0aGlzLnZhbHVlVG9PZmZzZXQobm9ybWFsaXplZFZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgdGhlIGNsb3Nlc3QgdmFsdWUgdG8gYmUgYWN0aXZhdGVkIChvbmx5IGZvciByYW5nZSA9IHRydWUpLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0QWN0aXZlVmFsdWVJbmRleChwb2ludGVyVmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcbiAgICBpZiAoaXNWYWx1ZUFSYW5nZSh2YWx1ZSkpIHtcclxuICAgICAgbGV0IG1pbmltYWw6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gICAgICBsZXQgZ2FwOiBudW1iZXI7XHJcbiAgICAgIGxldCBhY3RpdmVJbmRleCA9IC0xO1xyXG4gICAgICB2YWx1ZS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZ2FwID0gTWF0aC5hYnMocG9pbnRlclZhbHVlIC0gdmFsKTtcclxuICAgICAgICBpZiAobWluaW1hbCA9PT0gbnVsbCB8fCBnYXAgPCBtaW5pbWFsISkge1xyXG4gICAgICAgICAgbWluaW1hbCA9IGdhcDtcclxuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5hY3RpdmVWYWx1ZUluZGV4ID0gYWN0aXZlSW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEFjdGl2ZVZhbHVlKHBvaW50ZXJWYWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoaXNWYWx1ZUFSYW5nZSh0aGlzLnZhbHVlISkpIHtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBzaGFsbG93Q29weUFycmF5KHRoaXMudmFsdWUgYXMgbnVtYmVyW10pO1xyXG4gICAgICBuZXdWYWx1ZVt0aGlzLmFjdGl2ZVZhbHVlSW5kZXghXSA9IHBvaW50ZXJWYWx1ZTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHBvaW50ZXJWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdHJhY2sgYW5kIGhhbmRsZXMnIHBvc2l0aW9uIGFuZCBsZW5ndGguXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB1cGRhdGVUcmFja0FuZEhhbmRsZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0VmFsdWVUb09mZnNldCh2YWx1ZSk7XHJcbiAgICBjb25zdCB2YWx1ZVNvcnRlZCA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XHJcbiAgICBjb25zdCBvZmZzZXRTb3J0ZWQgPSB0aGlzLmdldFZhbHVlVG9PZmZzZXQodmFsdWVTb3J0ZWQpO1xyXG4gICAgY29uc3QgYm91bmRQYXJ0cyA9IGlzVmFsdWVBUmFuZ2UodmFsdWVTb3J0ZWQpID8gdmFsdWVTb3J0ZWQgOiBbMCwgdmFsdWVTb3J0ZWRdO1xyXG4gICAgY29uc3QgdHJhY2tQYXJ0cyA9IGlzVmFsdWVBUmFuZ2Uob2Zmc2V0U29ydGVkKSA/IFtvZmZzZXRTb3J0ZWRbMF0sIG9mZnNldFNvcnRlZFsxXSAtIG9mZnNldFNvcnRlZFswXV0gOiBbMCwgb2Zmc2V0U29ydGVkXTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4ge1xyXG4gICAgICBoYW5kbGUub2Zmc2V0ID0gaXNWYWx1ZUFSYW5nZShvZmZzZXQpID8gb2Zmc2V0W2luZGV4XSA6IG9mZnNldDtcclxuICAgICAgaGFuZGxlLnZhbHVlID0gaXNWYWx1ZUFSYW5nZSh2YWx1ZSkgPyB2YWx1ZVtpbmRleF0gOiB2YWx1ZSB8fCAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgW3RoaXMuYm91bmRzLmxvd2VyLCB0aGlzLmJvdW5kcy51cHBlcl0gPSBib3VuZFBhcnRzO1xyXG4gICAgW3RoaXMudHJhY2sub2Zmc2V0LCB0aGlzLnRyYWNrLmxlbmd0aF0gPSB0cmFja1BhcnRzO1xyXG5cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkRyYWdTdGFydCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvZ2dsZURyYWdNb3ZpbmcodHJ1ZSk7XHJcbiAgICB0aGlzLmNhY2hlU2xpZGVyUHJvcGVydHkoKTtcclxuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWVJbmRleCh2YWx1ZSk7XHJcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuc2hvd0hhbmRsZVRvb2x0aXAodGhpcy5uelJhbmdlID8gdGhpcy5hY3RpdmVWYWx1ZUluZGV4IDogMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRHJhZ01vdmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25EcmFnRW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek9uQWZ0ZXJDaGFuZ2UuZW1pdCh0aGlzLmdldFZhbHVlKHRydWUpKTtcclxuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyhmYWxzZSk7XHJcbiAgICB0aGlzLmNhY2hlU2xpZGVyUHJvcGVydHkodHJ1ZSk7XHJcbiAgICB0aGlzLmhpZGVBbGxIYW5kbGVUb29sdGlwKCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSB1c2VyIGludGVyYWN0aW9ucyBoYW5kbGVzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgY3JlYXRlRHJhZ2dpbmdPYnNlcnZhYmxlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNsaWRlckRPTSA9IHRoaXMuc2xpZGVyRE9NO1xyXG4gICAgY29uc3Qgb3JpZW50RmllbGQgPSB0aGlzLm56VmVydGljYWwgPyAncGFnZVknIDogJ3BhZ2VYJztcclxuICAgIGNvbnN0IG1vdXNlOiBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcgPSB7XHJcbiAgICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcclxuICAgICAgbW92ZTogJ21vdXNlbW92ZScsXHJcbiAgICAgIGVuZDogJ21vdXNldXAnLFxyXG4gICAgICBwbHVja0tleTogW29yaWVudEZpZWxkXVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRvdWNoOiBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcgPSB7XHJcbiAgICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXHJcbiAgICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxyXG4gICAgICBlbmQ6ICd0b3VjaGVuZCcsXHJcbiAgICAgIHBsdWNrS2V5OiBbJ3RvdWNoZXMnLCAnMCcsIG9yaWVudEZpZWxkXSxcclxuICAgICAgZmlsdGVyOiAoZTogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50XHJcbiAgICB9O1xyXG5cclxuICAgIFttb3VzZSwgdG91Y2hdLmZvckVhY2goc291cmNlID0+IHtcclxuICAgICAgY29uc3QgeyBzdGFydCwgbW92ZSwgZW5kLCBwbHVja0tleSwgZmlsdGVyOiBmaWx0ZXJGdW5jID0gKCkgPT4gdHJ1ZSB9ID0gc291cmNlO1xyXG5cclxuICAgICAgc291cmNlLnN0YXJ0UGx1Y2tlZCQgPSBmcm9tRXZlbnQoc2xpZGVyRE9NLCBzdGFydCkucGlwZShcclxuICAgICAgICBmaWx0ZXIoZmlsdGVyRnVuYyksXHJcbiAgICAgICAgdGFwKHNpbGVudEV2ZW50KSxcclxuICAgICAgICBwbHVjazxFdmVudCwgbnVtYmVyPiguLi5wbHVja0tleSksXHJcbiAgICAgICAgbWFwKChwb3NpdGlvbjogbnVtYmVyKSA9PiB0aGlzLmZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb24pKVxyXG4gICAgICApO1xyXG4gICAgICBzb3VyY2UuZW5kJCA9IGZyb21FdmVudChkb2N1bWVudCwgZW5kKTtcclxuICAgICAgc291cmNlLm1vdmVSZXNvbHZlZCQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsIG1vdmUpLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKGZpbHRlckZ1bmMpLFxyXG4gICAgICAgIHRhcChzaWxlbnRFdmVudCksXHJcbiAgICAgICAgcGx1Y2s8RXZlbnQsIG51bWJlcj4oLi4ucGx1Y2tLZXkpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgbWFwKChwb3NpdGlvbjogbnVtYmVyKSA9PiB0aGlzLmZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb24pKSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgIHRha2VVbnRpbChzb3VyY2UuZW5kJClcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZHJhZ1N0YXJ0JCA9IG1lcmdlKG1vdXNlLnN0YXJ0UGx1Y2tlZCQhLCB0b3VjaC5zdGFydFBsdWNrZWQkISk7XHJcbiAgICB0aGlzLmRyYWdNb3ZlJCA9IG1lcmdlKG1vdXNlLm1vdmVSZXNvbHZlZCQhLCB0b3VjaC5tb3ZlUmVzb2x2ZWQkISk7XHJcbiAgICB0aGlzLmRyYWdFbmQkID0gbWVyZ2UobW91c2UuZW5kJCEsIHRvdWNoLmVuZCQhKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsnc3RhcnQnLCAnbW92ZScsICdlbmQnXSk6IHZvaWQge1xyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignc3RhcnQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnU3RhcnQkICYmICF0aGlzLmRyYWdTdGFydF8pIHtcclxuICAgICAgdGhpcy5kcmFnU3RhcnRfID0gdGhpcy5kcmFnU3RhcnQkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ21vdmUnKSAhPT0gLTEgJiYgdGhpcy5kcmFnTW92ZSQgJiYgIXRoaXMuZHJhZ01vdmVfKSB7XHJcbiAgICAgIHRoaXMuZHJhZ01vdmVfID0gdGhpcy5kcmFnTW92ZSQuc3Vic2NyaWJlKHRoaXMub25EcmFnTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnRW5kJCAmJiAhdGhpcy5kcmFnRW5kXykge1xyXG4gICAgICB0aGlzLmRyYWdFbmRfID0gdGhpcy5kcmFnRW5kJC5zdWJzY3JpYmUodGhpcy5vbkRyYWdFbmQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVuc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsnc3RhcnQnLCAnbW92ZScsICdlbmQnXSk6IHZvaWQge1xyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignc3RhcnQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnU3RhcnRfKSB7XHJcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0Xy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRyYWdTdGFydF8gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ21vdmUnKSAhPT0gLTEgJiYgdGhpcy5kcmFnTW92ZV8pIHtcclxuICAgICAgdGhpcy5kcmFnTW92ZV8udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5kcmFnTW92ZV8gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ2VuZCcpICE9PSAtMSAmJiB0aGlzLmRyYWdFbmRfKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0VuZF8udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5kcmFnRW5kXyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZURyYWdNb3ZpbmcobW92YWJsZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgcGVyaW9kcyA9IFsnbW92ZScsICdlbmQnXTtcclxuICAgIGlmIChtb3ZhYmxlKSB7XHJcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlRHJhZyhwZXJpb2RzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZyhwZXJpb2RzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlRHJhZ0Rpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlRHJhZyhbJ3N0YXJ0J10pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc2xpZGVyU3RhcnQgPSB0aGlzLmdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTtcclxuICAgIGNvbnN0IHNsaWRlckxlbmd0aCA9IHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCk7XHJcbiAgICBjb25zdCByYXRpbyA9IGVuc3VyZU51bWJlckluUmFuZ2UoKHBvc2l0aW9uIC0gc2xpZGVyU3RhcnQpIC8gc2xpZGVyTGVuZ3RoLCAwLCAxKTtcclxuICAgIGNvbnN0IHZhbCA9ICh0aGlzLm56TWF4IC0gdGhpcy5uek1pbikgKiAodGhpcy5uelZlcnRpY2FsID8gMSAtIHJhdGlvIDogcmF0aW8pICsgdGhpcy5uek1pbjtcclxuICAgIGNvbnN0IHBvaW50cyA9IHRoaXMubnpNYXJrcyA9PT0gbnVsbCA/IFtdIDogT2JqZWN0LmtleXModGhpcy5uek1hcmtzKS5tYXAocGFyc2VGbG9hdCk7XHJcbiAgICBpZiAodGhpcy5uelN0ZXAgIT09IG51bGwgJiYgIXRoaXMubnpEb3RzKSB7XHJcbiAgICAgIGNvbnN0IGNsb3Nlc3RPbmUgPSBNYXRoLnJvdW5kKHZhbCAvIHRoaXMubnpTdGVwKSAqIHRoaXMubnpTdGVwO1xyXG4gICAgICBwb2ludHMucHVzaChjbG9zZXN0T25lKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdhcHMgPSBwb2ludHMubWFwKHBvaW50ID0+IE1hdGguYWJzKHZhbCAtIHBvaW50KSk7XHJcbiAgICBjb25zdCBjbG9zZXN0ID0gcG9pbnRzW2dhcHMuaW5kZXhPZihNYXRoLm1pbiguLi5nYXBzKSldO1xyXG4gICAgcmV0dXJuIHRoaXMubnpTdGVwID09PSBudWxsID8gY2xvc2VzdCA6IHBhcnNlRmxvYXQoY2xvc2VzdC50b0ZpeGVkKGdldFByZWNpc2lvbih0aGlzLm56U3RlcCkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsdWVUb09mZnNldCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBnZXRQZXJjZW50KHRoaXMubnpNaW4sIHRoaXMubnpNYXgsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJTdGFydCAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVNsaWRlclN0YXJ0O1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb2Zmc2V0ID0gZ2V0RWxlbWVudE9mZnNldCh0aGlzLnNsaWRlckRPTSk7XHJcbiAgICByZXR1cm4gdGhpcy5uelZlcnRpY2FsID8gb2Zmc2V0LnRvcCA6IG9mZnNldC5sZWZ0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTbGlkZXJMZW5ndGgoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXJET007XHJcbiAgICByZXR1cm4gdGhpcy5uelZlcnRpY2FsID8gc2xpZGVyRE9NLmNsaWVudEhlaWdodCA6IHNsaWRlckRPTS5jbGllbnRXaWR0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhY2hlIERPTSBsYXlvdXQvcmVmbG93IG9wZXJhdGlvbnMgZm9yIHBlcmZvcm1hbmNlIChtYXkgbm90IG5lY2Vzc2FyeT8pXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjYWNoZVNsaWRlclByb3BlcnR5KHJlbW92ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhY2hlU2xpZGVyU3RhcnQgPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoID0gcmVtb3ZlID8gbnVsbCA6IHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdFZhbHVlKHZhbHVlOiBTbGlkZXJWYWx1ZSB8IG51bGwpOiBTbGlkZXJWYWx1ZSB7XHJcbiAgICBsZXQgcmVzID0gdmFsdWU7XHJcbiAgICBpZiAoIXRoaXMuYXNzZXJ0VmFsdWVWYWxpZCh2YWx1ZSEpKSB7XHJcbiAgICAgIHJlcyA9IHRoaXMubnpEZWZhdWx0VmFsdWUgPT09IG51bGwgPyAodGhpcy5uelJhbmdlID8gW3RoaXMubnpNaW4sIHRoaXMubnpNYXhdIDogdGhpcy5uek1pbikgOiB0aGlzLm56RGVmYXVsdFZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzID0gaXNWYWx1ZUFSYW5nZSh2YWx1ZSEpXHJcbiAgICAgICAgPyAodmFsdWUgYXMgbnVtYmVyW10pLm1hcCh2YWwgPT4gZW5zdXJlTnVtYmVySW5SYW5nZSh2YWwsIHRoaXMubnpNaW4sIHRoaXMubnpNYXgpKVxyXG4gICAgICAgIDogZW5zdXJlTnVtYmVySW5SYW5nZSh2YWx1ZSBhcyBudW1iZXIsIHRoaXMubnpNaW4sIHRoaXMubnpNYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiB2YWx1ZSBpcyB2YWxpZCBhbmQgdGhyb3cgZXJyb3IgaWYgdmFsdWUtdHlwZS9yYW5nZSBub3QgbWF0Y2guXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhc3NlcnRWYWx1ZVZhbGlkKHZhbHVlOiBTbGlkZXJWYWx1ZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBpc05hTih0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYXNzZXJ0VmFsdWVUeXBlTWF0Y2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXNzZXJ0IHRoYXQgaWYgYHRoaXMubnpSYW5nZWAgaXMgYHRydWVgLCB2YWx1ZSBpcyBhbHNvIGEgcmFuZ2UsIHZpY2UgdmVyc2EuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhc3NlcnRWYWx1ZVR5cGVNYXRjaCh2YWx1ZTogU2xpZGVyVmFsdWUgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChpc1ZhbHVlQVJhbmdlKHZhbHVlKSAhPT0gdGhpcy5uelJhbmdlKSB7XHJcbiAgICAgIHRocm93IGdldFZhbHVlVHlwZU5vdE1hdGNoRXJyb3IoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWx1ZXNFcXVhbCh2YWxBOiBTbGlkZXJWYWx1ZSwgdmFsQjogU2xpZGVyVmFsdWUpOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2YgdmFsQSAhPT0gdHlwZW9mIHZhbEIpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzVmFsdWVBUmFuZ2UodmFsQSkgJiYgaXNWYWx1ZUFSYW5nZSh2YWxCKSA/IGFycmF5c0VxdWFsPG51bWJlcj4odmFsQSwgdmFsQikgOiB2YWxBID09PSB2YWxCO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBvbmUgaGFuZGxlJ3MgdG9vbHRpcCBhbmQgaGlkZSBvdGhlcnMnLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2hvd0hhbmRsZVRvb2x0aXAoaGFuZGxlSW5kZXg6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGhhbmRsZS5hY3RpdmUgPSBpbmRleCA9PT0gaGFuZGxlSW5kZXg7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZUFsbEhhbmRsZVRvb2x0aXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaChoYW5kbGUgPT4gKGhhbmRsZS5hY3RpdmUgPSBmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUhhbmRsZXMoYW1vdW50OiBudW1iZXIpOiBTbGlkZXJIYW5kbGVyW10ge1xyXG4gICAgcmV0dXJuIEFycmF5KGFtb3VudClcclxuICAgICAgLmZpbGwoMClcclxuICAgICAgLm1hcCgoKSA9PiAoeyBvZmZzZXQ6IG51bGwsIHZhbHVlOiBudWxsLCBhY3RpdmU6IGZhbHNlIH0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVNYXJrSXRlbXMobWFya3M6IE56TWFya3MpOiBFeHRlbmRlZE1hcmtbXSB8IG51bGwge1xyXG4gICAgY29uc3QgbWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG1hcmtzKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSBtYXJrc1trZXldO1xyXG4gICAgICBjb25zdCB2YWwgPSB0eXBlb2Yga2V5ID09PSAnbnVtYmVyJyA/IGtleSA6IHBhcnNlRmxvYXQoa2V5KTtcclxuICAgICAgaWYgKHZhbCA+PSB0aGlzLm56TWluICYmIHZhbCA8PSB0aGlzLm56TWF4KSB7XHJcbiAgICAgICAgbWFya3NBcnJheS5wdXNoKHsgdmFsdWU6IHZhbCwgb2Zmc2V0OiB0aGlzLnZhbHVlVG9PZmZzZXQodmFsKSwgY29uZmlnOiBtYXJrIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFya3NBcnJheS5sZW5ndGggPyBtYXJrc0FycmF5IDogbnVsbDtcclxuICB9XHJcbn1cclxuIiwiPGRpdlxyXG4gICNzbGlkZXJcclxuICBjbGFzcz1cImFudC1zbGlkZXJcIlxyXG4gIFtjbGFzcy5hbnQtc2xpZGVyLWRpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4gIFtjbGFzcy5hbnQtc2xpZGVyLXZlcnRpY2FsXT1cIm56VmVydGljYWxcIlxyXG4gIFtjbGFzcy5hbnQtc2xpZGVyLXdpdGgtbWFya3NdPVwibWFya3NBcnJheVwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXNsaWRlci1yYWlsXCI+PC9kaXY+XHJcbiAgPG56LXNsaWRlci10cmFja1xyXG4gICAgW256VmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXHJcbiAgICBbbnpJbmNsdWRlZF09XCJuekluY2x1ZGVkXCJcclxuICAgIFtuek9mZnNldF09XCJ0cmFjay5vZmZzZXRcIlxyXG4gICAgW256TGVuZ3RoXT1cInRyYWNrLmxlbmd0aFwiXHJcbiAgPjwvbnotc2xpZGVyLXRyYWNrPlxyXG4gIDxuei1zbGlkZXItc3RlcFxyXG4gICAgKm5nSWY9XCJtYXJrc0FycmF5XCJcclxuICAgIFtuelZlcnRpY2FsXT1cIm56VmVydGljYWxcIlxyXG4gICAgW256TG93ZXJCb3VuZF09XCJib3VuZHMubG93ZXJcIlxyXG4gICAgW256VXBwZXJCb3VuZF09XCJib3VuZHMudXBwZXJcIlxyXG4gICAgW256TWFya3NBcnJheV09XCJtYXJrc0FycmF5XCJcclxuICAgIFtuekluY2x1ZGVkXT1cIm56SW5jbHVkZWRcIlxyXG4gID48L256LXNsaWRlci1zdGVwPlxyXG4gIDxuei1zbGlkZXItaGFuZGxlXHJcbiAgICAqbmdGb3I9XCJsZXQgaGFuZGxlIG9mIGhhbmRsZXNcIlxyXG4gICAgW256VmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXHJcbiAgICBbbnpPZmZzZXRdPVwiaGFuZGxlLm9mZnNldFwiXHJcbiAgICBbbnpWYWx1ZV09XCJoYW5kbGUudmFsdWVcIlxyXG4gICAgW256QWN0aXZlXT1cImhhbmRsZS5hY3RpdmVcIlxyXG4gICAgW256VGlwRm9ybWF0dGVyXT1cIm56VGlwRm9ybWF0dGVyXCJcclxuICAgIFtuelRvb2x0aXBWaXNpYmxlXT1cIm56VG9vbHRpcFZpc2libGVcIlxyXG4gICAgW256VG9vbHRpcFBsYWNlbWVudF09XCJuelRvb2x0aXBQbGFjZW1lbnRcIlxyXG4gID48L256LXNsaWRlci1oYW5kbGU+XHJcbiAgPG56LXNsaWRlci1tYXJrc1xyXG4gICAgKm5nSWY9XCJtYXJrc0FycmF5XCJcclxuICAgIFtuelZlcnRpY2FsXT1cIm56VmVydGljYWxcIlxyXG4gICAgW256TWluXT1cIm56TWluXCJcclxuICAgIFtuek1heF09XCJuek1heFwiXHJcbiAgICBbbnpMb3dlckJvdW5kXT1cImJvdW5kcy5sb3dlclwiXHJcbiAgICBbbnpVcHBlckJvdW5kXT1cImJvdW5kcy51cHBlclwiXHJcbiAgICBbbnpNYXJrc0FycmF5XT1cIm1hcmtzQXJyYXlcIlxyXG4gICAgW256SW5jbHVkZWRdPVwibnpJbmNsdWRlZFwiXHJcbiAgPjwvbnotc2xpZGVyLW1hcmtzPlxyXG48L2Rpdj5cclxuIl19