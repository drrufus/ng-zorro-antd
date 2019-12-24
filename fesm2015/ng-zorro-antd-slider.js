import { __decorate, __metadata } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { ɵɵelement, ɵɵnextContext, ɵɵproperty, EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, forwardRef, ɵɵNgOnChangesFeature, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵclassProp, ɵɵadvance, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Input, Output, ɵɵviewQuery, ɵɵlistener, ɵɵsanitizeHtml, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge, Subscription } from 'rxjs';
import { filter, tap, pluck, map, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { shallowCopyArray, silentEvent, ensureNumberInRange, getPrecision, getPercent, getElementOffset, arraysEqual, InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { NgIf, NgStyle, NgForOf, CommonModule, NgClass, NgComponentOutlet, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { NzTooltipDirective, NzToolTipModule, NzToolTipComponent } from 'ng-zorro-antd/tooltip';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class Marks {
}
function isValueARange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
function isConfigAObject(config) {
    return config instanceof Object;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function getValueTypeNotMatchError() {
    return new Error(`The "nzRange" can't match the "ngModel"'s type, please check these properties: "nzRange", "ngModel", "nzDefaultValue".`);
}

const _c0 = ["slider"];
function NzSliderComponent_nz_slider_step_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-slider-step", 7);
} if (rf & 2) {
    const ctx_r741 = ɵɵnextContext();
    ɵɵproperty("nzVertical", ctx_r741.nzVertical)("nzLowerBound", ctx_r741.bounds.lower)("nzUpperBound", ctx_r741.bounds.upper)("nzMarksArray", ctx_r741.marksArray)("nzIncluded", ctx_r741.nzIncluded);
} }
function NzSliderComponent_nz_slider_handle_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-slider-handle", 8);
} if (rf & 2) {
    const handle_r744 = ctx.$implicit;
    const ctx_r742 = ɵɵnextContext();
    ɵɵproperty("nzVertical", ctx_r742.nzVertical)("nzOffset", handle_r744.offset)("nzValue", handle_r744.value)("nzActive", handle_r744.active)("nzTipFormatter", ctx_r742.nzTipFormatter)("nzTooltipVisible", ctx_r742.nzTooltipVisible)("nzTooltipPlacement", ctx_r742.nzTooltipPlacement);
} }
function NzSliderComponent_nz_slider_marks_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-slider-marks", 9);
} if (rf & 2) {
    const ctx_r743 = ɵɵnextContext();
    ɵɵproperty("nzVertical", ctx_r743.nzVertical)("nzMin", ctx_r743.nzMin)("nzMax", ctx_r743.nzMax)("nzLowerBound", ctx_r743.bounds.lower)("nzUpperBound", ctx_r743.bounds.upper)("nzMarksArray", ctx_r743.marksArray)("nzIncluded", ctx_r743.nzIncluded);
} }
class NzSliderComponent {
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
/** @nocollapse */ NzSliderComponent.ɵfac = function NzSliderComponent_Factory(t) { return new (t || NzSliderComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform)); };
/** @nocollapse */ NzSliderComponent.ɵcmp = ɵɵdefineComponent({ type: NzSliderComponent, selectors: [["nz-slider"]], viewQuery: function NzSliderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slider = _t.first);
    } }, inputs: { nzDisabled: "nzDisabled", nzDots: "nzDots", nzIncluded: "nzIncluded", nzRange: "nzRange", nzVertical: "nzVertical", nzDefaultValue: "nzDefaultValue", nzMarks: "nzMarks", nzMax: "nzMax", nzMin: "nzMin", nzStep: "nzStep", nzTooltipVisible: "nzTooltipVisible", nzTooltipPlacement: "nzTooltipPlacement", nzTipFormatter: "nzTipFormatter" }, outputs: { nzOnAfterChange: "nzOnAfterChange" }, exportAs: ["nzSlider"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzSliderComponent)),
                multi: true
            }
        ]), ɵɵNgOnChangesFeature()], decls: 7, vars: 10, consts: [[1, "ant-slider"], ["slider", ""], [1, "ant-slider-rail"], [3, "nzVertical", "nzIncluded", "nzOffset", "nzLength"], [3, "nzVertical", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded", 4, "ngIf"], [3, "nzVertical", "nzOffset", "nzValue", "nzActive", "nzTipFormatter", "nzTooltipVisible", "nzTooltipPlacement", 4, "ngFor", "ngForOf"], [3, "nzVertical", "nzMin", "nzMax", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded", 4, "ngIf"], [3, "nzVertical", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded"], [3, "nzVertical", "nzOffset", "nzValue", "nzActive", "nzTipFormatter", "nzTooltipVisible", "nzTooltipPlacement"], [3, "nzVertical", "nzMin", "nzMax", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded"]], template: function NzSliderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelement(2, "div", 2);
        ɵɵelement(3, "nz-slider-track", 3);
        ɵɵtemplate(4, NzSliderComponent_nz_slider_step_4_Template, 1, 5, "nz-slider-step", 4);
        ɵɵtemplate(5, NzSliderComponent_nz_slider_handle_5_Template, 1, 7, "nz-slider-handle", 5);
        ɵɵtemplate(6, NzSliderComponent_nz_slider_marks_6_Template, 1, 7, "nz-slider-marks", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("ant-slider-disabled", ctx.nzDisabled)("ant-slider-vertical", ctx.nzVertical)("ant-slider-with-marks", ctx.marksArray);
        ɵɵadvance(3);
        ɵɵproperty("nzVertical", ctx.nzVertical)("nzIncluded", ctx.nzIncluded)("nzOffset", ctx.track.offset)("nzLength", ctx.track.length);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.marksArray);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.handles);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.marksArray);
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSliderComponent, [{
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
    }], function () { return [{ type: ChangeDetectorRef }, { type: Platform }]; }, { slider: [{
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

function NzSliderHandleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const ctx_r745 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r745.style)("nzTitle", ctx_r745.tooltipTitle)("nzTrigger", null)("nzPlacement", ctx_r745.nzTooltipPlacement);
} }
function NzSliderHandleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r746 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r746.style);
} }
class NzSliderHandleComponent {
    constructor(sliderComponent, cdr) {
        this.sliderComponent = sliderComponent;
        this.cdr = cdr;
        this.nzTooltipVisible = 'default';
        this.nzActive = false;
        this.style = {};
        this.hovers_ = new Subscription();
        this.enterHandle = () => {
            if (!this.sliderComponent.isDragging) {
                this.toggleTooltip(true);
                this.updateTooltipPosition();
                this.cdr.detectChanges();
            }
        };
        this.leaveHandle = () => {
            if (!this.sliderComponent.isDragging) {
                this.toggleTooltip(false);
                this.cdr.detectChanges();
            }
        };
    }
    ngOnChanges(changes) {
        const { nzOffset, nzValue, nzActive, nzTooltipVisible } = changes;
        if (nzOffset) {
            this.updateStyle();
        }
        if (nzValue) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (nzActive) {
            if (nzActive.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if (nzTooltipVisible && nzTooltipVisible.currentValue === 'always') {
            Promise.resolve().then(() => this.toggleTooltip(true, true));
        }
    }
    ngOnDestroy() {
        this.hovers_.unsubscribe();
    }
    toggleTooltip(show, force = false) {
        if (!force && (this.nzTooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            this.tooltip.show();
        }
        else {
            this.tooltip.hide();
        }
    }
    updateTooltipTitle() {
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : `${this.nzValue}`;
    }
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then(() => this.tooltip.updatePosition());
        }
    }
    updateStyle() {
        this.style[this.nzVertical ? 'bottom' : 'left'] = `${this.nzOffset}%`;
        this.cdr.markForCheck();
    }
}
/** @nocollapse */ NzSliderHandleComponent.ɵfac = function NzSliderHandleComponent_Factory(t) { return new (t || NzSliderHandleComponent)(ɵɵdirectiveInject(NzSliderComponent), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzSliderHandleComponent.ɵcmp = ɵɵdefineComponent({ type: NzSliderHandleComponent, selectors: [["nz-slider-handle"]], viewQuery: function NzSliderHandleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(NzTooltipDirective, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltip = _t.first);
    } }, hostBindings: function NzSliderHandleComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵlistener("mouseenter", function NzSliderHandleComponent_mouseenter_HostBindingHandler($event) { return ctx.enterHandle(); })("mouseleave", function NzSliderHandleComponent_mouseleave_HostBindingHandler($event) { return ctx.leaveHandle(); });
    } }, inputs: { nzVertical: "nzVertical", nzOffset: "nzOffset", nzValue: "nzValue", nzTooltipVisible: "nzTooltipVisible", nzTooltipPlacement: "nzTooltipPlacement", nzTipFormatter: "nzTipFormatter", nzActive: "nzActive" }, exportAs: ["nzSliderHandle"], features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["nz-tooltip", "", "class", "ant-slider-handle", 3, "ngStyle", "nzTitle", "nzTrigger", "nzPlacement", 4, "ngIf"], ["class", "ant-slider-handle", 3, "ngStyle", 4, "ngIf"], ["nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTitle", "nzTrigger", "nzPlacement"], [1, "ant-slider-handle", 3, "ngStyle"]], template: function NzSliderHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NzSliderHandleComponent_div_0_Template, 1, 4, "div", 0);
        ɵɵtemplate(1, NzSliderHandleComponent_div_1_Template, 1, 1, "div", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.nzTipFormatter !== null && ctx.nzTooltipVisible !== "never");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzTipFormatter === null || ctx.nzTooltipVisible === "never");
    } }, directives: [NgIf, NzTooltipDirective, NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderHandleComponent.prototype, "nzActive", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSliderHandleComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-handle',
                exportAs: 'nzSliderHandle',
                preserveWhitespaces: false,
                templateUrl: './nz-slider-handle.component.html',
                host: {
                    '(mouseenter)': 'enterHandle()',
                    '(mouseleave)': 'leaveHandle()'
                }
            }]
    }], function () { return [{ type: NzSliderComponent }, { type: ChangeDetectorRef }]; }, { tooltip: [{
            type: ViewChild,
            args: [NzTooltipDirective, { static: false }]
        }], nzVertical: [{
            type: Input
        }], nzOffset: [{
            type: Input
        }], nzValue: [{
            type: Input
        }], nzTooltipVisible: [{
            type: Input
        }], nzTooltipPlacement: [{
            type: Input
        }], nzTipFormatter: [{
            type: Input
        }], nzActive: [{
            type: Input
        }] }); })();

function NzSliderMarksComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const attr_r748 = ctx.$implicit;
    ɵɵclassProp("ant-slider-mark-active", attr_r748.active);
    ɵɵproperty("ngStyle", attr_r748.style)("innerHTML", attr_r748.label, ɵɵsanitizeHtml);
} }
class NzSliderMarksComponent {
    constructor() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    ngOnChanges(changes) {
        if (changes.nzMarksArray) {
            this.buildMarks();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    }
    trackById(_index, mark) {
        return mark.value;
    }
    buildMarks() {
        const range = this.nzMax - this.nzMin;
        this.marks = this.nzMarksArray.map(mark => {
            const { value, offset, config } = mark;
            const style = this.getMarkStyles(value, range, config);
            const label = isConfigAObject(config) ? config.label : config;
            return {
                label,
                offset,
                style,
                value,
                config,
                active: false
            };
        });
    }
    getMarkStyles(value, range, config) {
        let style;
        if (this.nzVertical) {
            style = {
                marginBottom: '-50%',
                bottom: `${((value - this.nzMin) / range) * 100}%`
            };
        }
        else {
            style = {
                transform: `translate3d(-50%, 0, 0)`,
                left: `${((value - this.nzMin) / range) * 100}%`
            };
        }
        if (isConfigAObject(config) && config.style) {
            style = Object.assign(Object.assign({}, style), config.style);
        }
        return style;
    }
    togglePointActive() {
        if (this.marks && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.marks.forEach(mark => {
                const value = mark.value;
                const isActive = (!this.nzIncluded && value === this.nzUpperBound) ||
                    (this.nzIncluded && value <= this.nzUpperBound && value >= this.nzLowerBound);
                mark.active = isActive;
            });
        }
    }
}
/** @nocollapse */ NzSliderMarksComponent.ɵfac = function NzSliderMarksComponent_Factory(t) { return new (t || NzSliderMarksComponent)(); };
/** @nocollapse */ NzSliderMarksComponent.ɵcmp = ɵɵdefineComponent({ type: NzSliderMarksComponent, selectors: [["nz-slider-marks"]], inputs: { nzLowerBound: "nzLowerBound", nzUpperBound: "nzUpperBound", nzMarksArray: "nzMarksArray", nzMin: "nzMin", nzMax: "nzMax", nzVertical: "nzVertical", nzIncluded: "nzIncluded" }, exportAs: ["nzSliderMarks"], features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function NzSliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, NzSliderMarksComponent_span_1_Template, 1, 3, "span", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
    } }, directives: [NgForOf, NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderMarksComponent.prototype, "nzVertical", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderMarksComponent.prototype, "nzIncluded", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSliderMarksComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-slider-marks',
                exportAs: 'nzSliderMarks',
                templateUrl: './nz-slider-marks.component.html'
            }]
    }], null, { nzLowerBound: [{
            type: Input
        }], nzUpperBound: [{
            type: Input
        }], nzMarksArray: [{
            type: Input
        }], nzMin: [{
            type: Input
        }], nzMax: [{
            type: Input
        }], nzVertical: [{
            type: Input
        }], nzIncluded: [{
            type: Input
        }] }); })();

function NzSliderStepComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const mark_r750 = ctx.$implicit;
    ɵɵclassProp("ant-slider-dot-active", mark_r750.active);
    ɵɵproperty("ngStyle", mark_r750.style);
} }
class NzSliderStepComponent {
    constructor() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    ngOnChanges(changes) {
        if (changes.nzMarksArray) {
            this.buildSteps();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    }
    trackById(_index, step) {
        return step.value;
    }
    buildSteps() {
        const orient = this.nzVertical ? 'bottom' : 'left';
        this.steps = this.nzMarksArray.map(mark => {
            const { value, offset, config } = mark;
            return {
                value,
                offset,
                config,
                active: false,
                style: {
                    [orient]: `${offset}%`
                }
            };
        });
    }
    togglePointActive() {
        if (this.steps && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.steps.forEach(step => {
                const value = step.value;
                const isActive = (!this.nzIncluded && value === this.nzUpperBound) ||
                    (this.nzIncluded && value <= this.nzUpperBound && value >= this.nzLowerBound);
                step.active = isActive;
            });
        }
    }
}
/** @nocollapse */ NzSliderStepComponent.ɵfac = function NzSliderStepComponent_Factory(t) { return new (t || NzSliderStepComponent)(); };
/** @nocollapse */ NzSliderStepComponent.ɵcmp = ɵɵdefineComponent({ type: NzSliderStepComponent, selectors: [["nz-slider-step"]], inputs: { nzLowerBound: "nzLowerBound", nzUpperBound: "nzUpperBound", nzMarksArray: "nzMarksArray", nzVertical: "nzVertical", nzIncluded: "nzIncluded" }, exportAs: ["nzSliderStep"], features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [[1, "ant-slider-step"], ["class", "ant-slider-dot", 3, "ant-slider-dot-active", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-dot", 3, "ngStyle"]], template: function NzSliderStepComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, NzSliderStepComponent_span_1_Template, 1, 2, "span", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackById);
    } }, directives: [NgForOf, NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderStepComponent.prototype, "nzVertical", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderStepComponent.prototype, "nzIncluded", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSliderStepComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-step',
                exportAs: 'nzSliderStep',
                preserveWhitespaces: false,
                templateUrl: './nz-slider-step.component.html'
            }]
    }], null, { nzLowerBound: [{
            type: Input
        }], nzUpperBound: [{
            type: Input
        }], nzMarksArray: [{
            type: Input
        }], nzVertical: [{
            type: Input
        }], nzIncluded: [{
            type: Input
        }] }); })();

class NzSliderTrackComponent {
    constructor() {
        this.nzVertical = false;
        this.nzIncluded = false;
        this.style = {};
    }
    ngOnChanges(changes) {
        if (changes.nzIncluded) {
            this.style.visibility = this.nzIncluded ? 'visible' : 'hidden';
        }
        if (changes.nzVertical || changes.nzOffset || changes.nzLength) {
            if (this.nzVertical) {
                this.style.bottom = `${this.nzOffset}%`;
                this.style.height = `${this.nzLength}%`;
                this.style.left = null;
                this.style.width = null;
            }
            else {
                this.style.left = `${this.nzOffset}%`;
                this.style.width = `${this.nzLength}%`;
                this.style.bottom = null;
                this.style.height = null;
            }
        }
    }
}
/** @nocollapse */ NzSliderTrackComponent.ɵfac = function NzSliderTrackComponent_Factory(t) { return new (t || NzSliderTrackComponent)(); };
/** @nocollapse */ NzSliderTrackComponent.ɵcmp = ɵɵdefineComponent({ type: NzSliderTrackComponent, selectors: [["nz-slider-track"]], inputs: { nzOffset: "nzOffset", nzLength: "nzLength", nzVertical: "nzVertical", nzIncluded: "nzIncluded" }, exportAs: ["nzSliderTrack"], features: [ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function NzSliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngStyle", ctx.style);
    } }, directives: [NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NzSliderTrackComponent.prototype, "nzOffset", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NzSliderTrackComponent.prototype, "nzLength", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderTrackComponent.prototype, "nzVertical", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderTrackComponent.prototype, "nzIncluded", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSliderTrackComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-track',
                exportAs: 'nzSliderTrack',
                preserveWhitespaces: false,
                templateUrl: './nz-slider-track.component.html'
            }]
    }], null, { nzOffset: [{
            type: Input
        }], nzLength: [{
            type: Input
        }], nzVertical: [{
            type: Input
        }], nzIncluded: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderModule {
}
/** @nocollapse */ NzSliderModule.ɵmod = ɵɵdefineNgModule({ type: NzSliderModule });
/** @nocollapse */ NzSliderModule.ɵinj = ɵɵdefineInjector({ factory: function NzSliderModule_Factory(t) { return new (t || NzSliderModule)(); }, imports: [[CommonModule, PlatformModule, NzToolTipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzSliderModule, { declarations: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent], imports: [CommonModule, PlatformModule, NzToolTipModule], exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSliderModule, [{
        type: NgModule,
        args: [{
                exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                declarations: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                imports: [CommonModule, PlatformModule, NzToolTipModule]
            }]
    }], null, null); })();
ɵɵsetComponentScope(NzSliderComponent, [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, NzToolTipComponent, NzTooltipDirective], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);

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

export { Marks, NzSliderComponent, NzSliderHandleComponent, NzSliderMarksComponent, NzSliderModule, NzSliderStepComponent, NzSliderTrackComponent, isConfigAObject, isValueARange };
//# sourceMappingURL=ng-zorro-antd-slider.js.map
