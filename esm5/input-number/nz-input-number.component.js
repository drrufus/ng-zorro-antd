/**
 * @fileoverview added by tsickle
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
import { FocusMonitor } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil, InputBoolean } from 'ng-zorro-antd/core';
var NzInputNumberComponent = /** @class */ (function () {
    function NzInputNumberComponent(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.nzSize = 'default';
        this.nzMin = -Infinity;
        this.nzMax = Infinity;
        this.nzParser = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; }); // tslint:disable-line:no-any
        this.nzPlaceHolder = '';
        this.nzStep = 1;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzFormatter = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; });
        renderer.addClass(elementRef.nativeElement, 'ant-input-number');
    }
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.updateAutoFocus = 
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    function () {
        if (this.nzAutoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.onModelChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.actualValue = this.nzParser(value
            .trim()
            .replace(/。/g, '.')
            .replace(/[^\w\.-]+/g, ''));
        this.inputElement.nativeElement.value = "" + this.actualValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.getCurrentValidValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var val = value;
        if (val === '') {
            val = '';
        }
        else if (!this.isNotCompleteNumber(val)) {
            val = (/** @type {?} */ (this.getValidValue(val)));
        }
        else {
            val = this.value;
        }
        return this.toNumber(val);
    };
    // '1.' '1x' 'xx' '' => are not complete numbers
    // '1.' '1x' 'xx' '' => are not complete numbers
    /**
     * @param {?} num
     * @return {?}
     */
    NzInputNumberComponent.prototype.isNotCompleteNumber = 
    // '1.' '1x' 'xx' '' => are not complete numbers
    /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return (isNaN((/** @type {?} */ (num))) ||
            num === '' ||
            num === null ||
            !!(num && num.toString().indexOf('.') === num.toString().length - 1));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.getValidValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var val = parseFloat((/** @type {?} */ (value)));
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
    /**
     * @param {?} num
     * @return {?}
     */
    NzInputNumberComponent.prototype.toNumber = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        if (this.isNotCompleteNumber(num)) {
            return (/** @type {?} */ (num));
        }
        if (isNotNil(this.nzPrecision)) {
            return Number(Number(num).toFixed(this.nzPrecision));
        }
        return Number(num);
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.setValidateValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.getCurrentValidValue(this.actualValue);
        this.setValue(value, "" + this.value !== "" + value);
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.isFocused = false;
        this.setValidateValue();
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.isFocused = true;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzInputNumberComponent.prototype.getRatio = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    };
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.down = /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    };
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.up = /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.getPrecision = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        /** @type {?} */
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
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.getMaxPrecision = 
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    function (currentValue, ratio) {
        if (isNotNil(this.nzPrecision)) {
            return this.nzPrecision;
        }
        /** @type {?} */
        var ratioPrecision = this.getPrecision(ratio);
        /** @type {?} */
        var stepPrecision = this.getPrecision(this.nzStep);
        /** @type {?} */
        var currentValuePrecision = this.getPrecision((/** @type {?} */ (currentValue)));
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    };
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.getPrecisionFactor = /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    function (currentValue, ratio) {
        /** @type {?} */
        var precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    };
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    NzInputNumberComponent.prototype.upStep = /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    function (val, rat) {
        /** @type {?} */
        var precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        var result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    };
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    NzInputNumberComponent.prototype.downStep = /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    function (val, rat) {
        /** @type {?} */
        var precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        var result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? -this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    };
    /**
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.step = /**
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (type, e, ratio) {
        var _this = this;
        if (ratio === void 0) { ratio = 1; }
        this.stop();
        e.preventDefault();
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        var value = this.getCurrentValidValue(this.actualValue) || 0;
        /** @type {?} */
        var val = 0;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        /** @type {?} */
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
        this.autoStepTimer = setTimeout((/**
         * @return {?}
         */
        function () {
            _this[type](e, ratio, true);
        }), 600);
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.stop = /**
     * @return {?}
     */
    function () {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzInputNumberComponent.prototype.setValue = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        if (emit && "" + this.value !== "" + value) {
            this.onChange(value);
        }
        this.value = value;
        this.actualValue = value;
        /** @type {?} */
        var displayValue = isNotNil(this.nzFormatter(this.value)) ? this.nzFormatter(this.value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = "" + displayValue;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            /** @type {?} */
            var val = Number(value);
            if (val >= this.nzMax) {
                this.disabledUp = true;
            }
            if (val <= this.nzMin) {
                this.disabledDown = true;
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzInputNumberComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.code === 'ArrowUp' || e.keyCode === UP_ARROW) {
            /** @type {?} */
            var ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
        }
        else if (e.code === 'ArrowDown' || e.keyCode === DOWN_ARROW) {
            /** @type {?} */
            var ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
        }
        else if (e.keyCode === ENTER) {
            this.setValidateValue();
        }
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.onKeyUp = /**
     * @return {?}
     */
    function () {
        this.stop();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value, false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzInputNumberComponent.prototype.registerOnChange = /**
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
    NzInputNumberComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzInputNumberComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                _this.onBlur();
                _this.nzBlur.emit();
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
            else {
                _this.onFocus();
                _this.nzFocus.emit();
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
        if (changes.nzFormatter) {
            /** @type {?} */
            var value = this.getCurrentValidValue(this.actualValue);
            this.setValue(value, true);
        }
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.nzAutoFocus) {
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    NzInputNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-input-number',
                    exportAs: 'nzInputNumber',
                    template: "<div class=\"ant-input-number-handler-wrap\">\r\n  <span unselectable=\"unselectable\"\r\n        class=\"ant-input-number-handler ant-input-number-handler-up\"\r\n        (mousedown)=\"up($event)\"\r\n        (mouseup)=\"stop()\"\r\n        (mouseleave)=\"stop()\"\r\n        [class.ant-input-number-handler-up-disabled]=\"disabledUp\">\r\n    <i nz-icon nzType=\"up\" class=\"ant-input-number-handler-up-inner\"></i>\r\n  </span>\r\n  <span unselectable=\"unselectable\"\r\n        class=\"ant-input-number-handler ant-input-number-handler-down\"\r\n        (mousedown)=\"down($event)\"\r\n        (mouseup)=\"stop()\"\r\n        (mouseleave)=\"stop()\"\r\n        [class.ant-input-number-handler-down-disabled]=\"disabledDown\">\r\n    <i nz-icon nzType=\"down\" class=\"ant-input-number-handler-down-inner\"></i>\r\n  </span>\r\n</div>\r\n<div class=\"ant-input-number-input-wrap\">\r\n  <input #inputElement\r\n         autocomplete=\"off\"\r\n         class=\"ant-input-number-input\"\r\n         [attr.id]=\"nzId\"\r\n         [disabled]=\"nzDisabled\"\r\n         [attr.min]=\"nzMin\"\r\n         [attr.max]=\"nzMax\"\r\n         [placeholder]=\"nzPlaceHolder\"\r\n         [attr.step]=\"nzStep\"\r\n         (keydown)=\"onKeyDown($event)\"\r\n         (keyup)=\"onKeyUp()\"\r\n         [ngModel]=\"displayValue\"\r\n         (ngModelChange)=\"onModelChange($event)\">\r\n</div>\r\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzInputNumberComponent; })),
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
                }] }
    ];
    /** @nocollapse */
    NzInputNumberComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    NzInputNumberComponent.propDecorators = {
        nzBlur: [{ type: Output }],
        nzFocus: [{ type: Output }],
        inputElement: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
        nzSize: [{ type: Input }],
        nzMin: [{ type: Input }],
        nzMax: [{ type: Input }],
        nzParser: [{ type: Input }],
        nzPrecision: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzStep: [{ type: Input }],
        nzId: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzFormatter: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzInputNumberComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzInputNumberComponent.prototype, "nzAutoFocus", void 0);
    return NzInputNumberComponent;
}());
export { NzInputNumberComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.autoStepTimer;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.value;
    /** @type {?} */
    NzInputNumberComponent.prototype.displayValue;
    /** @type {?} */
    NzInputNumberComponent.prototype.isFocused;
    /** @type {?} */
    NzInputNumberComponent.prototype.disabledUp;
    /** @type {?} */
    NzInputNumberComponent.prototype.disabledDown;
    /** @type {?} */
    NzInputNumberComponent.prototype.onChange;
    /** @type {?} */
    NzInputNumberComponent.prototype.onTouched;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzBlur;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzFocus;
    /** @type {?} */
    NzInputNumberComponent.prototype.inputElement;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzSize;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzMin;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzMax;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzParser;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzPrecision;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzStep;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzId;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzDisabled;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzFormatter;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.focusMonitor;
    /* Skipping unhandled member: [property: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaW5wdXQtbnVtYmVyLyIsInNvdXJjZXMiOlsibnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBRTNFO0lBcVRFLGdDQUNVLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFlBQTBCO1FBSDFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWhTcEMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGFBQVE7OztRQUE0QixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztRQUMvQyxjQUFTOzs7UUFBZSxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztRQUNoQixXQUFNLEdBQUcsSUFBSSxZQUFZ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QUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7eUJBQzFDLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFGbUI7UUFBZixZQUFZLEVBQUU7OzhEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7K0RBQXFCO0lBb1QvQyw2QkFBQztDQUFBLEFBOVZELElBOFZDO1NBMVVZLHNCQUFzQjs7Ozs7O0lBQ2pDLCtDQUE4Qjs7Ozs7SUFDOUIsNkNBQXFDOzs7OztJQUNyQyx1Q0FBK0I7O0lBQy9CLDhDQUE4Qjs7SUFDOUIsMkNBQWtCOztJQUNsQiw0Q0FBbUI7O0lBQ25CLDhDQUFxQjs7SUFDckIsMENBQStDOztJQUMvQywyQ0FBbUM7O0lBQ25DLHdDQUErQzs7SUFDL0MseUNBQWdEOztJQUNoRCw4Q0FBd0Y7O0lBQ3hGLHdDQUEyQzs7SUFDM0MsdUNBQW1DOztJQUNuQyx1Q0FBa0M7O0lBQ2xDLDBDQUEwQzs7SUFDMUMsNkNBQTZCOztJQUM3QiwrQ0FBNEI7O0lBQzVCLHdDQUFvQjs7SUFDcEIsc0NBQXNCOztJQUN0Qiw0Q0FBNEM7O0lBQzVDLDZDQUE2Qzs7SUFDN0MsNkNBQTBFOzs7OztJQTJReEUsNENBQThCOzs7OztJQUM5QiwwQ0FBMkI7Ozs7O0lBQzNCLHFDQUE4Qjs7Ozs7SUFDOUIsOENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dEJvb2xlYW4sIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1pbnB1dC1udW1iZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpJbnB1dE51bWJlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWlucHV0LW51bWJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOeklucHV0TnVtYmVyQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWZvY3VzZWRdJzogJ2lzRm9jdXNlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItbGddJzogYG56U2l6ZSA9PT0gJ2xhcmdlJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItc21dJzogYG56U2l6ZSA9PT0gJ3NtYWxsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJbnB1dE51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGF1dG9TdGVwVGltZXI6IG51bWJlcjtcclxuICBwcml2YXRlIGFjdHVhbFZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGRpc3BsYXlWYWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIGRpc2FibGVkVXAgPSBmYWxzZTtcclxuICBkaXNhYmxlZERvd24gPSBmYWxzZTtcclxuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Qmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56TWluOiBudW1iZXIgPSAtSW5maW5pdHk7XHJcbiAgQElucHV0KCkgbnpNYXg6IG51bWJlciA9IEluZmluaXR5O1xyXG4gIEBJbnB1dCgpIG56UGFyc2VyID0gKHZhbHVlOiBhbnkpID0+IHZhbHVlOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG56UHJlY2lzaW9uOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIG56U3RlcCA9IDE7XHJcbiAgQElucHV0KCkgbnpJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpGb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcclxuXHJcbiAgW3Byb3BlcnR5OiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1vZGVsQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0dWFsVmFsdWUgPSB0aGlzLm56UGFyc2VyKFxyXG4gICAgICB2YWx1ZVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAucmVwbGFjZSgv44CCL2csICcuJylcclxuICAgICAgICAucmVwbGFjZSgvW15cXHdcXC4tXSsvZywgJycpXHJcbiAgICApO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGAke3RoaXMuYWN0dWFsVmFsdWV9YDtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRWYWxpZFZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHZhbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbCA9PT0gJycpIHtcclxuICAgICAgdmFsID0gJyc7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzTm90Q29tcGxldGVOdW1iZXIodmFsKSkge1xyXG4gICAgICB2YWwgPSB0aGlzLmdldFZhbGlkVmFsdWUodmFsKSBhcyBzdHJpbmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgPSB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIodmFsKTtcclxuICB9XHJcblxyXG4gIC8vICcxLicgJzF4JyAneHgnICcnID0+IGFyZSBub3QgY29tcGxldGUgbnVtYmVyc1xyXG4gIGlzTm90Q29tcGxldGVOdW1iZXIobnVtOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGlzTmFOKG51bSBhcyBudW1iZXIpIHx8XHJcbiAgICAgIG51bSA9PT0gJycgfHxcclxuICAgICAgbnVtID09PSBudWxsIHx8XHJcbiAgICAgICEhKG51bSAmJiBudW0udG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IG51bS50b1N0cmluZygpLmxlbmd0aCAtIDEpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsaWRWYWx1ZSh2YWx1ZT86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZSBhcyBzdHJpbmcpO1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNzM1OFxyXG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbCA8IHRoaXMubnpNaW4pIHtcclxuICAgICAgdmFsID0gdGhpcy5uek1pbjtcclxuICAgIH1cclxuICAgIGlmICh2YWwgPiB0aGlzLm56TWF4KSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnpNYXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcbiAgdG9OdW1iZXIobnVtOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuaXNOb3RDb21wbGV0ZU51bWJlcihudW0pKSB7XHJcbiAgICAgIHJldHVybiBudW0gYXMgbnVtYmVyO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTm90TmlsKHRoaXMubnpQcmVjaXNpb24pKSB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIoTnVtYmVyKG51bSkudG9GaXhlZCh0aGlzLm56UHJlY2lzaW9uKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTnVtYmVyKG51bSk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWxpZGF0ZVZhbHVlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMuYWN0dWFsVmFsdWUpO1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgYCR7dGhpcy52YWx1ZX1gICE9PSBgJHt2YWx1ZX1gKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldFZhbGlkYXRlVmFsdWUoKTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXRSYXRpbyhlOiBLZXlib2FyZEV2ZW50KTogbnVtYmVyIHtcclxuICAgIGxldCByYXRpbyA9IDE7XHJcbiAgICBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkge1xyXG4gICAgICByYXRpbyA9IDAuMTtcclxuICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICByYXRpbyA9IDEwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJhdGlvO1xyXG4gIH1cclxuXHJcbiAgZG93bihlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW8/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGVwKCdkb3duJywgZSwgcmF0aW8pO1xyXG4gIH1cclxuXHJcbiAgdXAoZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RlcCgndXAnLCBlLCByYXRpbyk7XHJcbiAgfVxyXG5cclxuICBnZXRQcmVjaXNpb24odmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAodmFsdWVTdHJpbmcuaW5kZXhPZignZS0nKSA+PSAwKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZVN0cmluZy5zbGljZSh2YWx1ZVN0cmluZy5pbmRleE9mKCdlLScpICsgMiksIDEwKTtcclxuICAgIH1cclxuICAgIGxldCBwcmVjaXNpb24gPSAwO1xyXG4gICAgaWYgKHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSA+PSAwKSB7XHJcbiAgICAgIHByZWNpc2lvbiA9IHZhbHVlU3RyaW5nLmxlbmd0aCAtIHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSAtIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJlY2lzaW9uO1xyXG4gIH1cclxuXHJcbiAgLy8gc3RlcD17MS4wfSB2YWx1ZT17MS41MX1cclxuICAvLyBwcmVzcyArXHJcbiAgLy8gdGhlbiB2YWx1ZSBzaG91bGQgYmUgMi41MSwgcmF0aGVyIHRoYW4gMi41XHJcbiAgLy8gaWYgdGhpcy5wcm9wcy5wcmVjaXNpb24gaXMgdW5kZWZpbmVkXHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9pbnB1dC1udW1iZXIvaXNzdWVzLzM5XHJcbiAgZ2V0TWF4UHJlY2lzaW9uKGN1cnJlbnRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyLCByYXRpbzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmIChpc05vdE5pbCh0aGlzLm56UHJlY2lzaW9uKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uelByZWNpc2lvbjtcclxuICAgIH1cclxuICAgIGNvbnN0IHJhdGlvUHJlY2lzaW9uID0gdGhpcy5nZXRQcmVjaXNpb24ocmF0aW8pO1xyXG4gICAgY29uc3Qgc3RlcFByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKHRoaXMubnpTdGVwKTtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZVByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKGN1cnJlbnRWYWx1ZSBhcyBudW1iZXIpO1xyXG4gICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHJhdGlvUHJlY2lzaW9uICsgc3RlcFByZWNpc2lvbjtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLm1heChjdXJyZW50VmFsdWVQcmVjaXNpb24sIHJhdGlvUHJlY2lzaW9uICsgc3RlcFByZWNpc2lvbik7XHJcbiAgfVxyXG5cclxuICBnZXRQcmVjaXNpb25GYWN0b3IoY3VycmVudFZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJhdGlvOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5nZXRNYXhQcmVjaXNpb24oY3VycmVudFZhbHVlLCByYXRpbyk7XHJcbiAgICByZXR1cm4gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XHJcbiAgfVxyXG5cclxuICB1cFN0ZXAodmFsOiBzdHJpbmcgfCBudW1iZXIsIHJhdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHByZWNpc2lvbkZhY3RvciA9IHRoaXMuZ2V0UHJlY2lzaW9uRmFjdG9yKHZhbCwgcmF0KTtcclxuICAgIGNvbnN0IHByZWNpc2lvbiA9IE1hdGguYWJzKHRoaXMuZ2V0TWF4UHJlY2lzaW9uKHZhbCwgcmF0KSk7XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJlc3VsdCA9ICgocHJlY2lzaW9uRmFjdG9yICogdmFsICsgcHJlY2lzaW9uRmFjdG9yICogdGhpcy5uelN0ZXAgKiByYXQpIC8gcHJlY2lzaW9uRmFjdG9yKS50b0ZpeGVkKHByZWNpc2lvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLm56TWluID09PSAtSW5maW5pdHkgPyB0aGlzLm56U3RlcCA6IHRoaXMubnpNaW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b051bWJlcihyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgZG93blN0ZXAodmFsOiBzdHJpbmcgfCBudW1iZXIsIHJhdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHByZWNpc2lvbkZhY3RvciA9IHRoaXMuZ2V0UHJlY2lzaW9uRmFjdG9yKHZhbCwgcmF0KTtcclxuICAgIGNvbnN0IHByZWNpc2lvbiA9IE1hdGguYWJzKHRoaXMuZ2V0TWF4UHJlY2lzaW9uKHZhbCwgcmF0KSk7XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJlc3VsdCA9ICgocHJlY2lzaW9uRmFjdG9yICogdmFsIC0gcHJlY2lzaW9uRmFjdG9yICogdGhpcy5uelN0ZXAgKiByYXQpIC8gcHJlY2lzaW9uRmFjdG9yKS50b0ZpeGVkKHByZWNpc2lvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLm56TWluID09PSAtSW5maW5pdHkgPyAtdGhpcy5uelN0ZXAgOiB0aGlzLm56TWluO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIHN0ZXAodHlwZTogc3RyaW5nLCBlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW86IG51bWJlciA9IDEpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbGlkVmFsdWUodGhpcy5hY3R1YWxWYWx1ZSkgfHwgMDtcclxuICAgIGxldCB2YWwgPSAwO1xyXG4gICAgaWYgKHR5cGUgPT09ICd1cCcpIHtcclxuICAgICAgdmFsID0gdGhpcy51cFN0ZXAodmFsdWUsIHJhdGlvKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Rvd24nKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMuZG93blN0ZXAodmFsdWUsIHJhdGlvKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG91dE9mUmFuZ2UgPSB2YWwgPiB0aGlzLm56TWF4IHx8IHZhbCA8IHRoaXMubnpNaW47XHJcbiAgICBpZiAodmFsID4gdGhpcy5uek1heCkge1xyXG4gICAgICB2YWwgPSB0aGlzLm56TWF4O1xyXG4gICAgfSBlbHNlIGlmICh2YWwgPCB0aGlzLm56TWluKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnpNaW47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbCwgdHJ1ZSk7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICBpZiAob3V0T2ZSYW5nZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmF1dG9TdGVwVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpc1t0eXBlXShlLCByYXRpbywgdHJ1ZSk7XHJcbiAgICB9LCA2MDApO1xyXG4gIH1cclxuXHJcbiAgc3RvcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF1dG9TdGVwVGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXV0b1N0ZXBUaW1lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoZW1pdCAmJiBgJHt0aGlzLnZhbHVlfWAgIT09IGAke3ZhbHVlfWApIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmFjdHVhbFZhbHVlID0gdmFsdWU7XHJcbiAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSBpc05vdE5pbCh0aGlzLm56Rm9ybWF0dGVyKHRoaXMudmFsdWUpKSA/IHRoaXMubnpGb3JtYXR0ZXIodGhpcy52YWx1ZSkgOiAnJztcclxuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gZGlzcGxheVZhbHVlO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGAke2Rpc3BsYXlWYWx1ZX1gO1xyXG4gICAgdGhpcy5kaXNhYmxlZFVwID0gdGhpcy5kaXNhYmxlZERvd24gPSBmYWxzZTtcclxuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xyXG4gICAgICBjb25zdCB2YWwgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICBpZiAodmFsID49IHRoaXMubnpNYXgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkVXAgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWwgPD0gdGhpcy5uek1pbikge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWREb3duID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd1VwJyB8fCBlLmtleUNvZGUgPT09IFVQX0FSUk9XKSB7XHJcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcclxuICAgICAgdGhpcy51cChlLCByYXRpbyk7XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgfSBlbHNlIGlmIChlLmNvZGUgPT09ICdBcnJvd0Rvd24nIHx8IGUua2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xyXG4gICAgICBjb25zdCByYXRpbyA9IHRoaXMuZ2V0UmF0aW8oZSk7XHJcbiAgICAgIHRoaXMuZG93bihlLCByYXRpbyk7XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEVOVEVSKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsaWRhdGVWYWx1ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlVcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuaW5wdXRFbGVtZW50LCAna2V5Ym9hcmQnKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvclxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWlucHV0LW51bWJlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcclxuICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xyXG4gICAgICAgIHRoaXMub25CbHVyKCk7XHJcbiAgICAgICAgdGhpcy5uekJsdXIuZW1pdCgpO1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vbkZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5uekZvY3VzLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpGb3JtYXR0ZXIpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMuYWN0dWFsVmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKTtcclxuICB9XHJcbn1cclxuIl19