import { __decorate, __metadata } from 'tslib';
import { FocusMonitor } from '@angular/cdk/a11y';
import { UP_ARROW, DOWN_ARROW, ENTER } from '@angular/cdk/keycodes';
import { EventEmitter, ɵɵdirectiveInject, ElementRef, Renderer2, ChangeDetectorRef, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵclassProp, ɵɵProvidersFeature, forwardRef, ɵɵNgOnChangesFeature, ɵɵelementStart, ɵɵlistener, ɵɵelement, ɵɵelementEnd, ɵɵadvance, ɵɵproperty, ɵɵattribute, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Output, ViewChild, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { isNotNil, InputBoolean } from 'ng-zorro-antd/core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

const _c0 = ["inputElement"];
class NzInputNumberComponent {
    constructor(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = () => null;
        this.onTouched = () => null;
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.nzSize = 'default';
        this.nzMin = -Infinity;
        this.nzMax = Infinity;
        this.nzParser = (value) => value; // tslint:disable-line:no-any
        this.nzPlaceHolder = '';
        this.nzStep = 1;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzFormatter = value => value;
        renderer.addClass(elementRef.nativeElement, 'ant-input-number');
    }
    updateAutoFocus() {
        if (this.nzAutoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    }
    onModelChange(value) {
        this.actualValue = this.nzParser(value
            .trim()
            .replace(/。/g, '.')
            .replace(/[^\w\.-]+/g, ''));
        this.inputElement.nativeElement.value = `${this.actualValue}`;
    }
    getCurrentValidValue(value) {
        let val = value;
        if (val === '') {
            val = '';
        }
        else if (!this.isNotCompleteNumber(val)) {
            val = this.getValidValue(val);
        }
        else {
            val = this.value;
        }
        return this.toNumber(val);
    }
    // '1.' '1x' 'xx' '' => are not complete numbers
    isNotCompleteNumber(num) {
        return isNaN(num) || num === '' || num === null || !!(num && num.toString().indexOf('.') === num.toString().length - 1);
    }
    getValidValue(value) {
        let val = parseFloat(value);
        // https://github.com/ant-design/ant-design/issues/7358
        if (isNaN(val)) {
            return value;
        }
        if (val < this.nzMin) {
            val = this.nzMin;
        }
        if (val > this.nzMax) {
            val = this.nzMax;
        }
        return val;
    }
    toNumber(num) {
        if (this.isNotCompleteNumber(num)) {
            return num;
        }
        if (isNotNil(this.nzPrecision)) {
            return Number(Number(num).toFixed(this.nzPrecision));
        }
        return Number(num);
    }
    setValidateValue() {
        const value = this.getCurrentValidValue(this.actualValue);
        this.setValue(value, `${this.value}` !== `${value}`);
    }
    onBlur() {
        this.isFocused = false;
        this.setValidateValue();
    }
    onFocus() {
        this.isFocused = true;
    }
    getRatio(e) {
        let ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    }
    down(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    }
    up(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    }
    getPrecision(value) {
        const valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        let precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    }
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    getMaxPrecision(currentValue, ratio) {
        if (isNotNil(this.nzPrecision)) {
            return this.nzPrecision;
        }
        const ratioPrecision = this.getPrecision(ratio);
        const stepPrecision = this.getPrecision(this.nzStep);
        const currentValuePrecision = this.getPrecision(currentValue);
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    }
    getPrecisionFactor(currentValue, ratio) {
        const precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    }
    upStep(val, rat) {
        const precisionFactor = this.getPrecisionFactor(val, rat);
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    }
    downStep(val, rat) {
        const precisionFactor = this.getPrecisionFactor(val, rat);
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? -this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    }
    step(type, e, ratio = 1) {
        this.stop();
        e.preventDefault();
        if (this.nzDisabled) {
            return;
        }
        const value = this.getCurrentValidValue(this.actualValue) || 0;
        let val = 0;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        const outOfRange = val > this.nzMax || val < this.nzMin;
        if (val > this.nzMax) {
            val = this.nzMax;
        }
        else if (val < this.nzMin) {
            val = this.nzMin;
        }
        this.setValue(val, true);
        this.isFocused = true;
        if (outOfRange) {
            return;
        }
        this.autoStepTimer = setTimeout(() => {
            this[type](e, ratio, true);
        }, 600);
    }
    stop() {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    }
    setValue(value, emit) {
        if (emit && `${this.value}` !== `${value}`) {
            this.onChange(value);
        }
        this.value = value;
        this.actualValue = value;
        const displayValue = isNotNil(this.nzFormatter(this.value)) ? this.nzFormatter(this.value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = `${displayValue}`;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            const val = Number(value);
            if (val >= this.nzMax) {
                this.disabledUp = true;
            }
            if (val <= this.nzMin) {
                this.disabledDown = true;
            }
        }
    }
    onKeyDown(e) {
        if (e.code === 'ArrowUp' || e.keyCode === UP_ARROW) {
            const ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
        }
        else if (e.code === 'ArrowDown' || e.keyCode === DOWN_ARROW) {
            const ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
        }
        else if (e.keyCode === ENTER) {
            this.setValidateValue();
        }
    }
    onKeyUp() {
        this.stop();
    }
    writeValue(value) {
        this.setValue(value, false);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                this.onBlur();
                this.nzBlur.emit();
                Promise.resolve().then(() => this.onTouched());
            }
            else {
                this.onFocus();
                this.nzFocus.emit();
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
        if (changes.nzFormatter) {
            const value = this.getCurrentValidValue(this.actualValue);
            this.setValue(value, true);
        }
    }
    ngAfterViewInit() {
        if (this.nzAutoFocus) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
}
/** @nocollapse */ NzInputNumberComponent.ɵfac = function NzInputNumberComponent_Factory(t) { return new (t || NzInputNumberComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor)); };
/** @nocollapse */ NzInputNumberComponent.ɵcmp = ɵɵdefineComponent({ type: NzInputNumberComponent, selectors: [["nz-input-number"]], viewQuery: function NzInputNumberComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, hostBindings: function NzInputNumberComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(4);
    } if (rf & 2) {
        ɵɵclassProp("ant-input-number-focused", ctx.isFocused)("ant-input-number-lg", ctx.nzSize === "large")("ant-input-number-sm", ctx.nzSize === "small")("ant-input-number-disabled", ctx.nzDisabled);
    } }, inputs: { nzSize: "nzSize", nzMin: "nzMin", nzMax: "nzMax", nzParser: "nzParser", nzPrecision: "nzPrecision", nzPlaceHolder: "nzPlaceHolder", nzStep: "nzStep", nzId: "nzId", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus", nzFormatter: "nzFormatter" }, outputs: { nzBlur: "nzBlur", nzFocus: "nzFocus" }, exportAs: ["nzInputNumber"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzInputNumberComponent)),
                multi: true
            }
        ]), ɵɵNgOnChangesFeature()], decls: 8, vars: 9, consts: [[1, "ant-input-number-handler-wrap"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-up", 3, "mousedown", "mouseup", "mouseleave"], ["nz-icon", "", "nzType", "up", 1, "ant-input-number-handler-up-inner"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-down", 3, "mousedown", "mouseup", "mouseleave"], ["nz-icon", "", "nzType", "down", 1, "ant-input-number-handler-down-inner"], [1, "ant-input-number-input-wrap"], ["autocomplete", "off", 1, "ant-input-number-input", 3, "disabled", "placeholder", "ngModel", "keydown", "keyup", "ngModelChange"], ["inputElement", ""]], template: function NzInputNumberComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "span", 1);
        ɵɵlistener("mousedown", function NzInputNumberComponent_Template_span_mousedown_1_listener($event) { return ctx.up($event); })("mouseup", function NzInputNumberComponent_Template_span_mouseup_1_listener($event) { return ctx.stop(); })("mouseleave", function NzInputNumberComponent_Template_span_mouseleave_1_listener($event) { return ctx.stop(); });
        ɵɵelement(2, "i", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "span", 3);
        ɵɵlistener("mousedown", function NzInputNumberComponent_Template_span_mousedown_3_listener($event) { return ctx.down($event); })("mouseup", function NzInputNumberComponent_Template_span_mouseup_3_listener($event) { return ctx.stop(); })("mouseleave", function NzInputNumberComponent_Template_span_mouseleave_3_listener($event) { return ctx.stop(); });
        ɵɵelement(4, "i", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 5);
        ɵɵelementStart(6, "input", 6, 7);
        ɵɵlistener("keydown", function NzInputNumberComponent_Template_input_keydown_6_listener($event) { return ctx.onKeyDown($event); })("keyup", function NzInputNumberComponent_Template_input_keyup_6_listener($event) { return ctx.onKeyUp(); })("ngModelChange", function NzInputNumberComponent_Template_input_ngModelChange_6_listener($event) { return ctx.onModelChange($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵclassProp("ant-input-number-handler-up-disabled", ctx.disabledUp);
        ɵɵadvance(2);
        ɵɵclassProp("ant-input-number-handler-down-disabled", ctx.disabledDown);
        ɵɵadvance(3);
        ɵɵproperty("disabled", ctx.nzDisabled)("placeholder", ctx.nzPlaceHolder)("ngModel", ctx.displayValue);
        ɵɵattribute("id", ctx.nzId)("min", ctx.nzMin)("max", ctx.nzMax)("step", ctx.nzStep);
    } }, directives: [NzIconDirective, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzInputNumberComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzInputNumberComponent.prototype, "nzAutoFocus", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzInputNumberComponent, [{
        type: Component,
        args: [{
                selector: 'nz-input-number',
                exportAs: 'nzInputNumber',
                templateUrl: './nz-input-number.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((() => NzInputNumberComponent)),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-input-number-focused]': 'isFocused',
                    '[class.ant-input-number-lg]': `nzSize === 'large'`,
                    '[class.ant-input-number-sm]': `nzSize === 'small'`,
                    '[class.ant-input-number-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: ChangeDetectorRef }, { type: FocusMonitor }]; }, { nzBlur: [{
            type: Output
        }], nzFocus: [{
            type: Output
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], nzSize: [{
            type: Input
        }], nzMin: [{
            type: Input
        }], nzMax: [{
            type: Input
        }], nzParser: [{
            type: Input
        }], nzPrecision: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzStep: [{
            type: Input
        }], nzId: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzFormatter: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzInputNumberModule {
}
/** @nocollapse */ NzInputNumberModule.ɵmod = ɵɵdefineNgModule({ type: NzInputNumberModule });
/** @nocollapse */ NzInputNumberModule.ɵinj = ɵɵdefineInjector({ factory: function NzInputNumberModule_Factory(t) { return new (t || NzInputNumberModule)(); }, imports: [[CommonModule, FormsModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzInputNumberModule, { declarations: [NzInputNumberComponent], imports: [CommonModule, FormsModule, NzIconModule], exports: [NzInputNumberComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzInputNumberModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzIconModule],
                declarations: [NzInputNumberComponent],
                exports: [NzInputNumberComponent]
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

export { NzInputNumberComponent, NzInputNumberModule };
//# sourceMappingURL=ng-zorro-antd-input-number.js.map
