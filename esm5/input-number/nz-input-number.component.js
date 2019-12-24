import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "@angular/forms";
var _c0 = ["inputElement"];
var NzInputNumberComponent = /** @class */ (function () {
    function NzInputNumberComponent(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.nzSize = 'default';
        this.nzMin = -Infinity;
        this.nzMax = Infinity;
        this.nzParser = function (value) { return value; }; // tslint:disable-line:no-any
        this.nzPlaceHolder = '';
        this.nzStep = 1;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzFormatter = function (value) { return value; };
        renderer.addClass(elementRef.nativeElement, 'ant-input-number');
    }
    NzInputNumberComponent.prototype.updateAutoFocus = function () {
        if (this.nzAutoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    };
    NzInputNumberComponent.prototype.onModelChange = function (value) {
        this.actualValue = this.nzParser(value
            .trim()
            .replace(/。/g, '.')
            .replace(/[^\w\.-]+/g, ''));
        this.inputElement.nativeElement.value = "" + this.actualValue;
    };
    NzInputNumberComponent.prototype.getCurrentValidValue = function (value) {
        var val = value;
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
    };
    // '1.' '1x' 'xx' '' => are not complete numbers
    NzInputNumberComponent.prototype.isNotCompleteNumber = function (num) {
        return isNaN(num) || num === '' || num === null || !!(num && num.toString().indexOf('.') === num.toString().length - 1);
    };
    NzInputNumberComponent.prototype.getValidValue = function (value) {
        var val = parseFloat(value);
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
    };
    NzInputNumberComponent.prototype.toNumber = function (num) {
        if (this.isNotCompleteNumber(num)) {
            return num;
        }
        if (isNotNil(this.nzPrecision)) {
            return Number(Number(num).toFixed(this.nzPrecision));
        }
        return Number(num);
    };
    NzInputNumberComponent.prototype.setValidateValue = function () {
        var value = this.getCurrentValidValue(this.actualValue);
        this.setValue(value, "" + this.value !== "" + value);
    };
    NzInputNumberComponent.prototype.onBlur = function () {
        this.isFocused = false;
        this.setValidateValue();
    };
    NzInputNumberComponent.prototype.onFocus = function () {
        this.isFocused = true;
    };
    NzInputNumberComponent.prototype.getRatio = function (e) {
        var ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    };
    NzInputNumberComponent.prototype.down = function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    };
    NzInputNumberComponent.prototype.up = function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    };
    NzInputNumberComponent.prototype.getPrecision = function (value) {
        var valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        var precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    };
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    NzInputNumberComponent.prototype.getMaxPrecision = function (currentValue, ratio) {
        if (isNotNil(this.nzPrecision)) {
            return this.nzPrecision;
        }
        var ratioPrecision = this.getPrecision(ratio);
        var stepPrecision = this.getPrecision(this.nzStep);
        var currentValuePrecision = this.getPrecision(currentValue);
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    };
    NzInputNumberComponent.prototype.getPrecisionFactor = function (currentValue, ratio) {
        var precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    };
    NzInputNumberComponent.prototype.upStep = function (val, rat) {
        var precisionFactor = this.getPrecisionFactor(val, rat);
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        var result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    };
    NzInputNumberComponent.prototype.downStep = function (val, rat) {
        var precisionFactor = this.getPrecisionFactor(val, rat);
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        var result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? -this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    };
    NzInputNumberComponent.prototype.step = function (type, e, ratio) {
        var _this = this;
        if (ratio === void 0) { ratio = 1; }
        this.stop();
        e.preventDefault();
        if (this.nzDisabled) {
            return;
        }
        var value = this.getCurrentValidValue(this.actualValue) || 0;
        var val = 0;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        var outOfRange = val > this.nzMax || val < this.nzMin;
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
        this.autoStepTimer = setTimeout(function () {
            _this[type](e, ratio, true);
        }, 600);
    };
    NzInputNumberComponent.prototype.stop = function () {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    };
    NzInputNumberComponent.prototype.setValue = function (value, emit) {
        if (emit && "" + this.value !== "" + value) {
            this.onChange(value);
        }
        this.value = value;
        this.actualValue = value;
        var displayValue = isNotNil(this.nzFormatter(this.value)) ? this.nzFormatter(this.value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = "" + displayValue;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            var val = Number(value);
            if (val >= this.nzMax) {
                this.disabledUp = true;
            }
            if (val <= this.nzMin) {
                this.disabledDown = true;
            }
        }
    };
    NzInputNumberComponent.prototype.onKeyDown = function (e) {
        if (e.code === 'ArrowUp' || e.keyCode === UP_ARROW) {
            var ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
        }
        else if (e.code === 'ArrowDown' || e.keyCode === DOWN_ARROW) {
            var ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
        }
        else if (e.keyCode === ENTER) {
            this.setValidateValue();
        }
    };
    NzInputNumberComponent.prototype.onKeyUp = function () {
        this.stop();
    };
    NzInputNumberComponent.prototype.writeValue = function (value) {
        this.setValue(value, false);
        this.cdr.markForCheck();
    };
    NzInputNumberComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzInputNumberComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzInputNumberComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzInputNumberComponent.prototype.focus = function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    NzInputNumberComponent.prototype.blur = function () {
        this.inputElement.nativeElement.blur();
    };
    NzInputNumberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
            if (!focusOrigin) {
                _this.onBlur();
                _this.nzBlur.emit();
                Promise.resolve().then(function () { return _this.onTouched(); });
            }
            else {
                _this.onFocus();
                _this.nzFocus.emit();
            }
        });
    };
    NzInputNumberComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
        if (changes.nzFormatter) {
            var value = this.getCurrentValidValue(this.actualValue);
            this.setValue(value, true);
        }
    };
    NzInputNumberComponent.prototype.ngAfterViewInit = function () {
        if (this.nzAutoFocus) {
            this.focus();
        }
    };
    NzInputNumberComponent.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    /** @nocollapse */ NzInputNumberComponent.ɵfac = function NzInputNumberComponent_Factory(t) { return new (t || NzInputNumberComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FocusMonitor)); };
    /** @nocollapse */ NzInputNumberComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzInputNumberComponent, selectors: [["nz-input-number"]], viewQuery: function NzInputNumberComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, hostBindings: function NzInputNumberComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(4);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-input-number-focused", ctx.isFocused)("ant-input-number-lg", ctx.nzSize === "large")("ant-input-number-sm", ctx.nzSize === "small")("ant-input-number-disabled", ctx.nzDisabled);
        } }, inputs: { nzSize: "nzSize", nzMin: "nzMin", nzMax: "nzMax", nzParser: "nzParser", nzPrecision: "nzPrecision", nzPlaceHolder: "nzPlaceHolder", nzStep: "nzStep", nzId: "nzId", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus", nzFormatter: "nzFormatter" }, outputs: { nzBlur: "nzBlur", nzFocus: "nzFocus" }, exportAs: ["nzInputNumber"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzInputNumberComponent; })),
                    multi: true
                }
            ]), i0.ɵɵNgOnChangesFeature()], decls: 8, vars: 9, consts: [[1, "ant-input-number-handler-wrap"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-up", 3, "mousedown", "mouseup", "mouseleave"], ["nz-icon", "", "nzType", "up", 1, "ant-input-number-handler-up-inner"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-down", 3, "mousedown", "mouseup", "mouseleave"], ["nz-icon", "", "nzType", "down", 1, "ant-input-number-handler-down-inner"], [1, "ant-input-number-input-wrap"], ["autocomplete", "off", 1, "ant-input-number-input", 3, "disabled", "placeholder", "ngModel", "keydown", "keyup", "ngModelChange"], ["inputElement", ""]], template: function NzInputNumberComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵlistener("mousedown", function NzInputNumberComponent_Template_span_mousedown_1_listener($event) { return ctx.up($event); })("mouseup", function NzInputNumberComponent_Template_span_mouseup_1_listener($event) { return ctx.stop(); })("mouseleave", function NzInputNumberComponent_Template_span_mouseleave_1_listener($event) { return ctx.stop(); });
            i0.ɵɵelement(2, "i", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span", 3);
            i0.ɵɵlistener("mousedown", function NzInputNumberComponent_Template_span_mousedown_3_listener($event) { return ctx.down($event); })("mouseup", function NzInputNumberComponent_Template_span_mouseup_3_listener($event) { return ctx.stop(); })("mouseleave", function NzInputNumberComponent_Template_span_mouseleave_3_listener($event) { return ctx.stop(); });
            i0.ɵɵelement(4, "i", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 5);
            i0.ɵɵelementStart(6, "input", 6, 7);
            i0.ɵɵlistener("keydown", function NzInputNumberComponent_Template_input_keydown_6_listener($event) { return ctx.onKeyDown($event); })("keyup", function NzInputNumberComponent_Template_input_keyup_6_listener($event) { return ctx.onKeyUp(); })("ngModelChange", function NzInputNumberComponent_Template_input_ngModelChange_6_listener($event) { return ctx.onModelChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("ant-input-number-handler-up-disabled", ctx.disabledUp);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("ant-input-number-handler-down-disabled", ctx.disabledDown);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.nzDisabled)("placeholder", ctx.nzPlaceHolder)("ngModel", ctx.displayValue);
            i0.ɵɵattribute("id", ctx.nzId)("min", ctx.nzMin)("max", ctx.nzMax)("step", ctx.nzStep);
        } }, directives: [i2.NzIconDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzInputNumberComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzInputNumberComponent.prototype, "nzAutoFocus", void 0);
    return NzInputNumberComponent;
}());
export { NzInputNumberComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzInputNumberComponent, [{
        type: Component,
        args: [{
                selector: 'nz-input-number',
                exportAs: 'nzInputNumber',
                templateUrl: './nz-input-number.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzInputNumberComponent; })),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-input-number-focused]': 'isFocused',
                    '[class.ant-input-number-lg]': "nzSize === 'large'",
                    '[class.ant-input-number-sm]': "nzSize === 'small'",
                    '[class.ant-input-number-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }]; }, { nzBlur: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaW5wdXQtbnVtYmVyLyIsInNvdXJjZXMiOlsibnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC50cyIsIm56LWlucHV0LW51bWJlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BFLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBRTNFO0lBZ1RFLGdDQUNVLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFlBQTBCO1FBSDFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQTNScEMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGFBQVEsR0FBNEIsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDL0MsY0FBUyxHQUFlLGNBQU0sT0FBQSxJQUFJLEVB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QkFBQTs7SUQ4Q087UUFBZixZQUFZLEVBQUU7OzhEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7K0RBQXFCO2lDQTFFL0M7Q0F5WEMsQUF6VkQsSUF5VkM7U0FyVVksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FwQmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLEVBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixFQUFDO3dCQUNyRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixrQ0FBa0MsRUFBRSxXQUFXO29CQUMvQyw2QkFBNkIsRUFBRSxvQkFBb0I7b0JBQ25ELDZCQUE2QixFQUFFLG9CQUFvQjtvQkFDbkQsbUNBQW1DLEVBQUUsWUFBWTtpQkFDbEQ7YUFDRjs7a0JBV0UsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFDMUMsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzTm90TmlsLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotaW5wdXQtbnVtYmVyJyxcclxuICBleHBvcnRBczogJ256SW5wdXROdW1iZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1pbnB1dC1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpJbnB1dE51bWJlckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1mb2N1c2VkXSc6ICdpc0ZvY3VzZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWxnXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLXNtXSc6IGBuelNpemUgPT09ICdzbWFsbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56SW5wdXROdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBhdXRvU3RlcFRpbWVyOiBudW1iZXI7XHJcbiAgcHVibGljIGFjdHVhbFZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGRpc3BsYXlWYWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIGRpc2FibGVkVXAgPSBmYWxzZTtcclxuICBkaXNhYmxlZERvd24gPSBmYWxzZTtcclxuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Qmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56TWluOiBudW1iZXIgPSAtSW5maW5pdHk7XHJcbiAgQElucHV0KCkgbnpNYXg6IG51bWJlciA9IEluZmluaXR5O1xyXG4gIEBJbnB1dCgpIG56UGFyc2VyID0gKHZhbHVlOiBhbnkpID0+IHZhbHVlOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG56UHJlY2lzaW9uOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIG56U3RlcCA9IDE7XHJcbiAgQElucHV0KCkgbnpJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpGb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcclxuXHJcbiAgW3Byb3BlcnR5OiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1vZGVsQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0dWFsVmFsdWUgPSB0aGlzLm56UGFyc2VyKFxyXG4gICAgICB2YWx1ZVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAucmVwbGFjZSgv44CCL2csICcuJylcclxuICAgICAgICAucmVwbGFjZSgvW15cXHdcXC4tXSsvZywgJycpXHJcbiAgICApO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGAke3RoaXMuYWN0dWFsVmFsdWV9YDtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRWYWxpZFZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHZhbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbCA9PT0gJycpIHtcclxuICAgICAgdmFsID0gJyc7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzTm90Q29tcGxldGVOdW1iZXIodmFsKSkge1xyXG4gICAgICB2YWwgPSB0aGlzLmdldFZhbGlkVmFsdWUodmFsKSBhcyBzdHJpbmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgPSB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIodmFsKTtcclxuICB9XHJcblxyXG4gIC8vICcxLicgJzF4JyAneHgnICcnID0+IGFyZSBub3QgY29tcGxldGUgbnVtYmVyc1xyXG4gIGlzTm90Q29tcGxldGVOdW1iZXIobnVtOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc05hTihudW0gYXMgbnVtYmVyKSB8fCBudW0gPT09ICcnIHx8IG51bSA9PT0gbnVsbCB8fCAhIShudW0gJiYgbnVtLnRvU3RyaW5nKCkuaW5kZXhPZignLicpID09PSBudW0udG9TdHJpbmcoKS5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIGdldFZhbGlkVmFsdWUodmFsdWU/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQodmFsdWUgYXMgc3RyaW5nKTtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzczNThcclxuICAgIGlmIChpc05hTih2YWwpKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh2YWwgPCB0aGlzLm56TWluKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnpNaW47XHJcbiAgICB9XHJcbiAgICBpZiAodmFsID4gdGhpcy5uek1heCkge1xyXG4gICAgICB2YWwgPSB0aGlzLm56TWF4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIHRvTnVtYmVyKG51bTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmlzTm90Q29tcGxldGVOdW1iZXIobnVtKSkge1xyXG4gICAgICByZXR1cm4gbnVtIGFzIG51bWJlcjtcclxuICAgIH1cclxuICAgIGlmIChpc05vdE5pbCh0aGlzLm56UHJlY2lzaW9uKSkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKE51bWJlcihudW0pLnRvRml4ZWQodGhpcy5uelByZWNpc2lvbikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE51bWJlcihudW0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsaWRhdGVWYWx1ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsaWRWYWx1ZSh0aGlzLmFjdHVhbFZhbHVlKTtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIGAke3RoaXMudmFsdWV9YCAhPT0gYCR7dmFsdWV9YCk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRWYWxpZGF0ZVZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmF0aW8oZTogS2V5Ym9hcmRFdmVudCk6IG51bWJlciB7XHJcbiAgICBsZXQgcmF0aW8gPSAxO1xyXG4gICAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpIHtcclxuICAgICAgcmF0aW8gPSAwLjE7XHJcbiAgICB9IGVsc2UgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgcmF0aW8gPSAxMDtcclxuICAgIH1cclxuICAgIHJldHVybiByYXRpbztcclxuICB9XHJcblxyXG4gIGRvd24oZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RlcCgnZG93bicsIGUsIHJhdGlvKTtcclxuICB9XHJcblxyXG4gIHVwKGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50LCByYXRpbz86IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0ZXAoJ3VwJywgZSwgcmF0aW8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJlY2lzaW9uKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgaWYgKHZhbHVlU3RyaW5nLmluZGV4T2YoJ2UtJykgPj0gMCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWVTdHJpbmcuc2xpY2UodmFsdWVTdHJpbmcuaW5kZXhPZignZS0nKSArIDIpLCAxMCk7XHJcbiAgICB9XHJcbiAgICBsZXQgcHJlY2lzaW9uID0gMDtcclxuICAgIGlmICh2YWx1ZVN0cmluZy5pbmRleE9mKCcuJykgPj0gMCkge1xyXG4gICAgICBwcmVjaXNpb24gPSB2YWx1ZVN0cmluZy5sZW5ndGggLSB2YWx1ZVN0cmluZy5pbmRleE9mKCcuJykgLSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZWNpc2lvbjtcclxuICB9XHJcblxyXG4gIC8vIHN0ZXA9ezEuMH0gdmFsdWU9ezEuNTF9XHJcbiAgLy8gcHJlc3MgK1xyXG4gIC8vIHRoZW4gdmFsdWUgc2hvdWxkIGJlIDIuNTEsIHJhdGhlciB0aGFuIDIuNVxyXG4gIC8vIGlmIHRoaXMucHJvcHMucHJlY2lzaW9uIGlzIHVuZGVmaW5lZFxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvaW5wdXQtbnVtYmVyL2lzc3Vlcy8zOVxyXG4gIGdldE1heFByZWNpc2lvbihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoaXNOb3ROaWwodGhpcy5uelByZWNpc2lvbikpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpQcmVjaXNpb247XHJcbiAgICB9XHJcbiAgICBjb25zdCByYXRpb1ByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKHJhdGlvKTtcclxuICAgIGNvbnN0IHN0ZXBQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbih0aGlzLm56U3RlcCk7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWVQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbihjdXJyZW50VmFsdWUgYXMgbnVtYmVyKTtcclxuICAgIGlmICghY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHJldHVybiByYXRpb1ByZWNpc2lvbiArIHN0ZXBQcmVjaXNpb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoY3VycmVudFZhbHVlUHJlY2lzaW9uLCByYXRpb1ByZWNpc2lvbiArIHN0ZXBQcmVjaXNpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJlY2lzaW9uRmFjdG9yKGN1cnJlbnRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyLCByYXRpbzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHByZWNpc2lvbiA9IHRoaXMuZ2V0TWF4UHJlY2lzaW9uKGN1cnJlbnRWYWx1ZSwgcmF0aW8pO1xyXG4gICAgcmV0dXJuIE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xyXG4gIH1cclxuXHJcbiAgdXBTdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBwcmVjaXNpb25GYWN0b3IgPSB0aGlzLmdldFByZWNpc2lvbkZhY3Rvcih2YWwsIHJhdCk7XHJcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCArIHByZWNpc2lvbkZhY3RvciAqIHRoaXMubnpTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5uek1pbiA9PT0gLUluZmluaXR5ID8gdGhpcy5uelN0ZXAgOiB0aGlzLm56TWluO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGRvd25TdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBwcmVjaXNpb25GYWN0b3IgPSB0aGlzLmdldFByZWNpc2lvbkZhY3Rvcih2YWwsIHJhdCk7XHJcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCAtIHByZWNpc2lvbkZhY3RvciAqIHRoaXMubnpTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5uek1pbiA9PT0gLUluZmluaXR5ID8gLXRoaXMubnpTdGVwIDogdGhpcy5uek1pbjtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBzdGVwKHR5cGU6IHN0cmluZywgZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvOiBudW1iZXIgPSAxKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMuYWN0dWFsVmFsdWUpIHx8IDA7XHJcbiAgICBsZXQgdmFsID0gMDtcclxuICAgIGlmICh0eXBlID09PSAndXAnKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMudXBTdGVwKHZhbHVlLCByYXRpbyk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkb3duJykge1xyXG4gICAgICB2YWwgPSB0aGlzLmRvd25TdGVwKHZhbHVlLCByYXRpbyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvdXRPZlJhbmdlID0gdmFsID4gdGhpcy5uek1heCB8fCB2YWwgPCB0aGlzLm56TWluO1xyXG4gICAgaWYgKHZhbCA+IHRoaXMubnpNYXgpIHtcclxuICAgICAgdmFsID0gdGhpcy5uek1heDtcclxuICAgIH0gZWxzZSBpZiAodmFsIDwgdGhpcy5uek1pbikge1xyXG4gICAgICB2YWwgPSB0aGlzLm56TWluO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwsIHRydWUpO1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgaWYgKG91dE9mUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdXRvU3RlcFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXNbdHlwZV0oZSwgcmF0aW8sIHRydWUpO1xyXG4gICAgfSwgNjAwKTtcclxuICB9XHJcblxyXG4gIHN0b3AoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvU3RlcFRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmF1dG9TdGVwVGltZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IG51bWJlciwgZW1pdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGVtaXQgJiYgYCR7dGhpcy52YWx1ZX1gICE9PSBgJHt2YWx1ZX1gKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5hY3R1YWxWYWx1ZSA9IHZhbHVlO1xyXG4gICAgY29uc3QgZGlzcGxheVZhbHVlID0gaXNOb3ROaWwodGhpcy5uekZvcm1hdHRlcih0aGlzLnZhbHVlKSkgPyB0aGlzLm56Rm9ybWF0dGVyKHRoaXMudmFsdWUpIDogJyc7XHJcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IGRpc3BsYXlWYWx1ZTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBgJHtkaXNwbGF5VmFsdWV9YDtcclxuICAgIHRoaXMuZGlzYWJsZWRVcCA9IHRoaXMuZGlzYWJsZWREb3duID0gZmFsc2U7XHJcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcclxuICAgICAgY29uc3QgdmFsID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgaWYgKHZhbCA+PSB0aGlzLm56TWF4KSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZFVwID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsIDw9IHRoaXMubnpNaW4pIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkRG93biA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dVcCcgfHwgZS5rZXlDb2RlID09PSBVUF9BUlJPVykge1xyXG4gICAgICBjb25zdCByYXRpbyA9IHRoaXMuZ2V0UmF0aW8oZSk7XHJcbiAgICAgIHRoaXMudXAoZSwgcmF0aW8pO1xyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnQXJyb3dEb3duJyB8fCBlLmtleUNvZGUgPT09IERPV05fQVJST1cpIHtcclxuICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLmdldFJhdGlvKGUpO1xyXG4gICAgICB0aGlzLmRvd24oZSwgcmF0aW8pO1xyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICB0aGlzLnNldFZhbGlkYXRlVmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5VXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3JcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1pbnB1dC1udW1iZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICB0aGlzLm9uQmx1cigpO1xyXG4gICAgICAgIHRoaXMubnpCbHVyLmVtaXQoKTtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25Gb2N1cygpO1xyXG4gICAgICAgIHRoaXMubnpGb2N1cy5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpBdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56Rm9ybWF0dGVyKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsaWRWYWx1ZSh0aGlzLmFjdHVhbFZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXItd3JhcFwiPlxyXG4gIDxzcGFuXHJcbiAgICB1bnNlbGVjdGFibGU9XCJ1bnNlbGVjdGFibGVcIlxyXG4gICAgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXIgYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXVwXCJcclxuICAgIChtb3VzZWRvd24pPVwidXAoJGV2ZW50KVwiXHJcbiAgICAobW91c2V1cCk9XCJzdG9wKClcIlxyXG4gICAgKG1vdXNlbGVhdmUpPVwic3RvcCgpXCJcclxuICAgIFtjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXItdXAtZGlzYWJsZWRdPVwiZGlzYWJsZWRVcFwiXHJcbiAgPlxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJ1cFwiIGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXVwLWlubmVyXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuICA8c3BhblxyXG4gICAgdW5zZWxlY3RhYmxlPVwidW5zZWxlY3RhYmxlXCJcclxuICAgIGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1oYW5kbGVyIGFudC1pbnB1dC1udW1iZXItaGFuZGxlci1kb3duXCJcclxuICAgIChtb3VzZWRvd24pPVwiZG93bigkZXZlbnQpXCJcclxuICAgIChtb3VzZXVwKT1cInN0b3AoKVwiXHJcbiAgICAobW91c2VsZWF2ZSk9XCJzdG9wKClcIlxyXG4gICAgW2NsYXNzLmFudC1pbnB1dC1udW1iZXItaGFuZGxlci1kb3duLWRpc2FibGVkXT1cImRpc2FibGVkRG93blwiXHJcbiAgPlxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJkb3duXCIgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXItZG93bi1pbm5lclwiPjwvaT5cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1pbnB1dC13cmFwXCI+XHJcbiAgPGlucHV0XHJcbiAgICAjaW5wdXRFbGVtZW50XHJcbiAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWlucHV0XCJcclxuICAgIFthdHRyLmlkXT1cIm56SWRcIlxyXG4gICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4gICAgW2F0dHIubWluXT1cIm56TWluXCJcclxuICAgIFthdHRyLm1heF09XCJuek1heFwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwibnpQbGFjZUhvbGRlclwiXHJcbiAgICBbYXR0ci5zdGVwXT1cIm56U3RlcFwiXHJcbiAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgICAoa2V5dXApPVwib25LZXlVcCgpXCJcclxuICAgIFtuZ01vZGVsXT1cImRpc3BsYXlWYWx1ZVwiXHJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJvbk1vZGVsQ2hhbmdlKCRldmVudClcIlxyXG4gIC8+XHJcbjwvZGl2PlxyXG4iXX0=