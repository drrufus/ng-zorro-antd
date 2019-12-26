/**
 * @fileoverview added by tsickle
 * Generated from: nz-input-number.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaW5wdXQtbnVtYmVyLyIsInNvdXJjZXMiOlsibnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxVQUFVLEVBRVYsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRTtJQXFURSxnQ0FDVSxVQUFzQixFQUN0QixRQUFtQixFQUNuQixHQUFzQixFQUN0QixZQUEwQjtRQUgxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFoU3BDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixhQUFROzs7UUFBNEIsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7UUFDL0MsY0FBUzs7O1FBQWUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7UUFDaEIsV0FBTSxHQUFHLElBQUksWUFB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RUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lCQUMxQyxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBRm1CO1FBQWYsWUFBWSxFQUFFOzs4REFBb0I7SUFDbkI7UUFBZixZQUFZLEVBQUU7OytEQUFxQjtJQW9UL0MsNkJBQUM7Q0FBQSxBQTlWRCxJQThWQztTQTFVWSxzQkFBc0I7Ozs7OztJQUNqQywrQ0FBOEI7Ozs7O0lBQzlCLDZDQUFxQzs7Ozs7SUFDckMsdUNBQStCOztJQUMvQiw4Q0FBOEI7O0lBQzlCLDJDQUFrQjs7SUFDbEIsNENBQW1COztJQUNuQiw4Q0FBcUI7O0lBQ3JCLDBDQUErQzs7SUFDL0MsMkNBQW1DOztJQUNuQyx3Q0FBK0M7O0lBQy9DLHlDQUFnRDs7SUFDaEQsOENBQXdGOztJQUN4Rix3Q0FBMkM7O0lBQzNDLHVDQUFtQzs7SUFDbkMsdUNBQWtDOztJQUNsQywwQ0FBMEM7O0lBQzFDLDZDQUE2Qjs7SUFDN0IsK0NBQTRCOztJQUM1Qix3Q0FBb0I7O0lBQ3BCLHNDQUFzQjs7SUFDdEIsNENBQTRDOztJQUM1Qyw2Q0FBNkM7O0lBQzdDLDZDQUEwRTs7Ozs7SUEyUXhFLDRDQUE4Qjs7Ozs7SUFDOUIsMENBQTJCOzs7OztJQUMzQixxQ0FBOEI7Ozs7O0lBQzlCLDhDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgSW5wdXRCb29sZWFuLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotaW5wdXQtbnVtYmVyJyxcclxuICBleHBvcnRBczogJ256SW5wdXROdW1iZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1pbnB1dC1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpJbnB1dE51bWJlckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1mb2N1c2VkXSc6ICdpc0ZvY3VzZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWxnXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLXNtXSc6IGBuelNpemUgPT09ICdzbWFsbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56SW5wdXROdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBhdXRvU3RlcFRpbWVyOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBhY3R1YWxWYWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIHByaXZhdGUgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBkaXNwbGF5VmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBpc0ZvY3VzZWQgPSBmYWxzZTtcclxuICBkaXNhYmxlZFVwID0gZmFsc2U7XHJcbiAgZGlzYWJsZWREb3duID0gZmFsc2U7XHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Rm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuek1pbjogbnVtYmVyID0gLUluZmluaXR5O1xyXG4gIEBJbnB1dCgpIG56TWF4OiBudW1iZXIgPSBJbmZpbml0eTtcclxuICBASW5wdXQoKSBuelBhcnNlciA9ICh2YWx1ZTogYW55KSA9PiB2YWx1ZTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBuelByZWNpc2lvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBuelN0ZXAgPSAxO1xyXG4gIEBJbnB1dCgpIG56SWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Rm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nIHwgbnVtYmVyID0gdmFsdWUgPT4gdmFsdWU7XHJcblxyXG4gIFtwcm9wZXJ0eTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdHVhbFZhbHVlID0gdGhpcy5uelBhcnNlcihcclxuICAgICAgdmFsdWVcclxuICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgLnJlcGxhY2UoL+OAgi9nLCAnLicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1teXFx3XFwuLV0rL2csICcnKVxyXG4gICAgKTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBgJHt0aGlzLmFjdHVhbFZhbHVlfWA7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50VmFsaWRWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCB2YWwgPSB2YWx1ZTtcclxuICAgIGlmICh2YWwgPT09ICcnKSB7XHJcbiAgICAgIHZhbCA9ICcnO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5pc05vdENvbXBsZXRlTnVtYmVyKHZhbCkpIHtcclxuICAgICAgdmFsID0gdGhpcy5nZXRWYWxpZFZhbHVlKHZhbCkgYXMgc3RyaW5nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsID0gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKHZhbCk7XHJcbiAgfVxyXG5cclxuICAvLyAnMS4nICcxeCcgJ3h4JyAnJyA9PiBhcmUgbm90IGNvbXBsZXRlIG51bWJlcnNcclxuICBpc05vdENvbXBsZXRlTnVtYmVyKG51bTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBpc05hTihudW0gYXMgbnVtYmVyKSB8fFxyXG4gICAgICBudW0gPT09ICcnIHx8XHJcbiAgICAgIG51bSA9PT0gbnVsbCB8fFxyXG4gICAgICAhIShudW0gJiYgbnVtLnRvU3RyaW5nKCkuaW5kZXhPZignLicpID09PSBudW0udG9TdHJpbmcoKS5sZW5ndGggLSAxKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFZhbGlkVmFsdWUodmFsdWU/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQodmFsdWUgYXMgc3RyaW5nKTtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzczNThcclxuICAgIGlmIChpc05hTih2YWwpKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh2YWwgPCB0aGlzLm56TWluKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnpNaW47XHJcbiAgICB9XHJcbiAgICBpZiAodmFsID4gdGhpcy5uek1heCkge1xyXG4gICAgICB2YWwgPSB0aGlzLm56TWF4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIHRvTnVtYmVyKG51bTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmlzTm90Q29tcGxldGVOdW1iZXIobnVtKSkge1xyXG4gICAgICByZXR1cm4gbnVtIGFzIG51bWJlcjtcclxuICAgIH1cclxuICAgIGlmIChpc05vdE5pbCh0aGlzLm56UHJlY2lzaW9uKSkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKE51bWJlcihudW0pLnRvRml4ZWQodGhpcy5uelByZWNpc2lvbikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE51bWJlcihudW0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsaWRhdGVWYWx1ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsaWRWYWx1ZSh0aGlzLmFjdHVhbFZhbHVlKTtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIGAke3RoaXMudmFsdWV9YCAhPT0gYCR7dmFsdWV9YCk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRWYWxpZGF0ZVZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmF0aW8oZTogS2V5Ym9hcmRFdmVudCk6IG51bWJlciB7XHJcbiAgICBsZXQgcmF0aW8gPSAxO1xyXG4gICAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpIHtcclxuICAgICAgcmF0aW8gPSAwLjE7XHJcbiAgICB9IGVsc2UgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgcmF0aW8gPSAxMDtcclxuICAgIH1cclxuICAgIHJldHVybiByYXRpbztcclxuICB9XHJcblxyXG4gIGRvd24oZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RlcCgnZG93bicsIGUsIHJhdGlvKTtcclxuICB9XHJcblxyXG4gIHVwKGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50LCByYXRpbz86IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0ZXAoJ3VwJywgZSwgcmF0aW8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJlY2lzaW9uKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgaWYgKHZhbHVlU3RyaW5nLmluZGV4T2YoJ2UtJykgPj0gMCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWVTdHJpbmcuc2xpY2UodmFsdWVTdHJpbmcuaW5kZXhPZignZS0nKSArIDIpLCAxMCk7XHJcbiAgICB9XHJcbiAgICBsZXQgcHJlY2lzaW9uID0gMDtcclxuICAgIGlmICh2YWx1ZVN0cmluZy5pbmRleE9mKCcuJykgPj0gMCkge1xyXG4gICAgICBwcmVjaXNpb24gPSB2YWx1ZVN0cmluZy5sZW5ndGggLSB2YWx1ZVN0cmluZy5pbmRleE9mKCcuJykgLSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZWNpc2lvbjtcclxuICB9XHJcblxyXG4gIC8vIHN0ZXA9ezEuMH0gdmFsdWU9ezEuNTF9XHJcbiAgLy8gcHJlc3MgK1xyXG4gIC8vIHRoZW4gdmFsdWUgc2hvdWxkIGJlIDIuNTEsIHJhdGhlciB0aGFuIDIuNVxyXG4gIC8vIGlmIHRoaXMucHJvcHMucHJlY2lzaW9uIGlzIHVuZGVmaW5lZFxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvaW5wdXQtbnVtYmVyL2lzc3Vlcy8zOVxyXG4gIGdldE1heFByZWNpc2lvbihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoaXNOb3ROaWwodGhpcy5uelByZWNpc2lvbikpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpQcmVjaXNpb247XHJcbiAgICB9XHJcbiAgICBjb25zdCByYXRpb1ByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKHJhdGlvKTtcclxuICAgIGNvbnN0IHN0ZXBQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbih0aGlzLm56U3RlcCk7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWVQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbihjdXJyZW50VmFsdWUgYXMgbnVtYmVyKTtcclxuICAgIGlmICghY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHJldHVybiByYXRpb1ByZWNpc2lvbiArIHN0ZXBQcmVjaXNpb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoY3VycmVudFZhbHVlUHJlY2lzaW9uLCByYXRpb1ByZWNpc2lvbiArIHN0ZXBQcmVjaXNpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJlY2lzaW9uRmFjdG9yKGN1cnJlbnRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyLCByYXRpbzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHByZWNpc2lvbiA9IHRoaXMuZ2V0TWF4UHJlY2lzaW9uKGN1cnJlbnRWYWx1ZSwgcmF0aW8pO1xyXG4gICAgcmV0dXJuIE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xyXG4gIH1cclxuXHJcbiAgdXBTdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBwcmVjaXNpb25GYWN0b3IgPSB0aGlzLmdldFByZWNpc2lvbkZhY3Rvcih2YWwsIHJhdCk7XHJcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCArIHByZWNpc2lvbkZhY3RvciAqIHRoaXMubnpTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5uek1pbiA9PT0gLUluZmluaXR5ID8gdGhpcy5uelN0ZXAgOiB0aGlzLm56TWluO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGRvd25TdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBwcmVjaXNpb25GYWN0b3IgPSB0aGlzLmdldFByZWNpc2lvbkZhY3Rvcih2YWwsIHJhdCk7XHJcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCAtIHByZWNpc2lvbkZhY3RvciAqIHRoaXMubnpTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5uek1pbiA9PT0gLUluZmluaXR5ID8gLXRoaXMubnpTdGVwIDogdGhpcy5uek1pbjtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBzdGVwKHR5cGU6IHN0cmluZywgZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvOiBudW1iZXIgPSAxKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMuYWN0dWFsVmFsdWUpIHx8IDA7XHJcbiAgICBsZXQgdmFsID0gMDtcclxuICAgIGlmICh0eXBlID09PSAndXAnKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMudXBTdGVwKHZhbHVlLCByYXRpbyk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkb3duJykge1xyXG4gICAgICB2YWwgPSB0aGlzLmRvd25TdGVwKHZhbHVlLCByYXRpbyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvdXRPZlJhbmdlID0gdmFsID4gdGhpcy5uek1heCB8fCB2YWwgPCB0aGlzLm56TWluO1xyXG4gICAgaWYgKHZhbCA+IHRoaXMubnpNYXgpIHtcclxuICAgICAgdmFsID0gdGhpcy5uek1heDtcclxuICAgIH0gZWxzZSBpZiAodmFsIDwgdGhpcy5uek1pbikge1xyXG4gICAgICB2YWwgPSB0aGlzLm56TWluO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwsIHRydWUpO1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgaWYgKG91dE9mUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdXRvU3RlcFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXNbdHlwZV0oZSwgcmF0aW8sIHRydWUpO1xyXG4gICAgfSwgNjAwKTtcclxuICB9XHJcblxyXG4gIHN0b3AoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvU3RlcFRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmF1dG9TdGVwVGltZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IG51bWJlciwgZW1pdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGVtaXQgJiYgYCR7dGhpcy52YWx1ZX1gICE9PSBgJHt2YWx1ZX1gKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5hY3R1YWxWYWx1ZSA9IHZhbHVlO1xyXG4gICAgY29uc3QgZGlzcGxheVZhbHVlID0gaXNOb3ROaWwodGhpcy5uekZvcm1hdHRlcih0aGlzLnZhbHVlKSkgPyB0aGlzLm56Rm9ybWF0dGVyKHRoaXMudmFsdWUpIDogJyc7XHJcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IGRpc3BsYXlWYWx1ZTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBgJHtkaXNwbGF5VmFsdWV9YDtcclxuICAgIHRoaXMuZGlzYWJsZWRVcCA9IHRoaXMuZGlzYWJsZWREb3duID0gZmFsc2U7XHJcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcclxuICAgICAgY29uc3QgdmFsID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgaWYgKHZhbCA+PSB0aGlzLm56TWF4KSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZFVwID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsIDw9IHRoaXMubnpNaW4pIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkRG93biA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dVcCcgfHwgZS5rZXlDb2RlID09PSBVUF9BUlJPVykge1xyXG4gICAgICBjb25zdCByYXRpbyA9IHRoaXMuZ2V0UmF0aW8oZSk7XHJcbiAgICAgIHRoaXMudXAoZSwgcmF0aW8pO1xyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnQXJyb3dEb3duJyB8fCBlLmtleUNvZGUgPT09IERPV05fQVJST1cpIHtcclxuICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLmdldFJhdGlvKGUpO1xyXG4gICAgICB0aGlzLmRvd24oZSwgcmF0aW8pO1xyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICB0aGlzLnNldFZhbGlkYXRlVmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5VXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3JcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1pbnB1dC1udW1iZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICB0aGlzLm9uQmx1cigpO1xyXG4gICAgICAgIHRoaXMubnpCbHVyLmVtaXQoKTtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25Gb2N1cygpO1xyXG4gICAgICAgIHRoaXMubnpGb2N1cy5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpBdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56Rm9ybWF0dGVyKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsaWRWYWx1ZSh0aGlzLmFjdHVhbFZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XHJcbiAgfVxyXG59XHJcbiJdfQ==