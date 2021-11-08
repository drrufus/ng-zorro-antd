import { __decorate, __metadata } from 'tslib';
import { FocusMonitor } from '@angular/cdk/a11y';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Renderer2, ElementRef, Output, forwardRef, Optional, ChangeDetectorRef, ViewChild, Input, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { isEmpty, InputBoolean } from 'ng-zorro-antd/core';
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/forms';
import * as ɵngcc3 from '@angular/cdk/observers';
import * as ɵngcc4 from '@angular/common';

var _c0 = ["*"];
var _c1 = ["inputElement"];
var _c2 = ["contentElement"];
var _c3 = ["nz-checkbox", ""];
function NzCheckboxGroupComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 1);
    ɵngcc0.ɵɵlistener("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var option_r1 = ctx.$implicit; return option_r1.checked = $event; })("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onOptionChange(); });
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzDisabled", option_r1.disabled || ctx_r0.nzDisabled)("nzChecked", option_r1.checked);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(option_r1.label);
} }
var NzCheckboxWrapperComponent = /** @class */ (function () {
    function NzCheckboxWrapperComponent(renderer, elementRef) {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.addCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.removeCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    };
    /**
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.outputValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkedList = this.checkboxList.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzChecked; }));
        return checkedList.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzValue; }));
    };
    /**
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.onChange = /**
     * @return {?}
     */
    function () {
        this.nzOnChange.emit(this.outputValue());
    };
    /** @nocollapse */
    NzCheckboxWrapperComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzCheckboxWrapperComponent.propDecorators = {
        nzOnChange: [{ type: Output }]
    };
NzCheckboxWrapperComponent.ɵfac = function NzCheckboxWrapperComponent_Factory(t) { return new (t || NzCheckboxWrapperComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzCheckboxWrapperComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCheckboxWrapperComponent, selectors: [["nz-checkbox-wrapper"]], outputs: { nzOnChange: "nzOnChange" }, exportAs: ["nzCheckboxWrapper"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCheckboxWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCheckboxWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'nz-checkbox-wrapper',
                exportAs: 'nzCheckboxWrapper',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-content></ng-content>"
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { nzOnChange: [{
            type: Output
        }] }); })();
    return NzCheckboxWrapperComponent;
}());
if (false) {
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.nzOnChange;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxWrapperComponent.prototype.checkboxList;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCheckboxComponent = /** @class */ (function () {
    function NzCheckboxComponent(elementRef, renderer, nzCheckboxWrapperComponent, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        // tslint:disable-next-line:no-any
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        // tslint:disable-next-line:no-any
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.nzCheckedChange = new EventEmitter();
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzChecked = false;
        this.nzAriaLabel = null;
        this.nzLabelledById = null;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-wrapper');
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzCheckboxComponent.prototype.hostClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        this.focus();
        this.innerCheckedChange(!this.nzChecked);
    };
    /**
     * @param {?} checked
     * @return {?}
     */
    NzCheckboxComponent.prototype.innerCheckedChange = /**
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        if (!this.nzDisabled) {
            this.nzChecked = checked;
            this.onChange(this.nzChecked);
            this.nzCheckedChange.emit(this.nzChecked);
            if (this.nzCheckboxWrapperComponent) {
                this.nzCheckboxWrapperComponent.onChange();
            }
        }
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.inputElement && this.nzAutoFocus) {
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
    NzCheckboxComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzChecked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCheckboxComponent.prototype.registerOnChange = /**
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
    NzCheckboxComponent.prototype.registerOnTouched = /**
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
    NzCheckboxComponent.prototype.setDisabledState = /**
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
    NzCheckboxComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        }
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.ngOnInit = /**
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
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
        }));
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.addCheckbox(this);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzCheckboxComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateAutoFocus();
        this.checkContent();
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.removeCheckbox(this);
        }
    };
    /** @nocollapse */
    NzCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzCheckboxWrapperComponent, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    NzCheckboxComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
        contentElement: [{ type: ViewChild, args: ['contentElement', { static: false },] }],
        nzCheckedChange: [{ type: Output }],
        nzValue: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzIndeterminate: [{ type: Input }],
        nzChecked: [{ type: Input }],
        nzAriaLabel: [{ type: Input }],
        nzLabelledById: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCheckboxComponent.prototype, "nzAutoFocus", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCheckboxComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCheckboxComponent.prototype, "nzIndeterminate", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCheckboxComponent.prototype, "nzChecked", void 0);
NzCheckboxComponent.ɵfac = function NzCheckboxComponent_Factory(t) { return new (t || NzCheckboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzCheckboxWrapperComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor)); };
NzCheckboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCheckboxComponent, selectors: [["", "nz-checkbox", ""]], viewQuery: function NzCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
    } }, hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzCheckboxComponent_click_HostBindingHandler($event) { return ctx.hostClick($event); });
    } }, inputs: { nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzChecked: "nzChecked", nzAriaLabel: "nzAriaLabel", nzLabelledById: "nzLabelledById", nzValue: "nzValue" }, outputs: { nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzCheckbox"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(( /**
                 * @return {?}
                 */function () { return NzCheckboxComponent; })),
                multi: true
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c3, ngContentSelectors: _c0, decls: 7, vars: 12, consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-checkbox-inner"], [3, "cdkObserveContent"], ["contentElement", ""]], template: function NzCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.innerCheckedChange($event); })("click", function NzCheckboxComponent_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(3, "span", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "span", 4, 5);
        ɵngcc0.ɵɵlistener("cdkObserveContent", function NzCheckboxComponent_Template_span_cdkObserveContent_4_listener() { return ctx.checkContent(); });
        ɵngcc0.ɵɵprojection(6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled)("ant-checkbox-indeterminate", ctx.nzIndeterminate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled);
        ɵngcc0.ɵɵattribute("aria-label", ctx.nzAriaLabel)("aria-checked", ctx.nzIndeterminate ? "mixed" : ctx.nzChecked)("aria-labelledby", ctx.nzLabelledById);
    } }, directives: [ɵngcc2.CheckboxControlValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel, ɵngcc3.CdkObserveContent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCheckboxComponent, [{
        type: Component,
        args: [{
                selector: '[nz-checkbox]',
                exportAs: 'nzCheckbox',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<span class=\"ant-checkbox\" [class.ant-checkbox-checked]=\"nzChecked && !nzIndeterminate\"\r\n  [class.ant-checkbox-disabled]=\"nzDisabled\" [class.ant-checkbox-indeterminate]=\"nzIndeterminate\">\r\n  <input #inputElement [checked]=\"nzChecked\" [ngModel]=\"nzChecked\" [disabled]=\"nzDisabled\"\r\n    (ngModelChange)=\"innerCheckedChange($event)\" (click)=\"$event.stopPropagation();\" [attr.aria-label]=\"nzAriaLabel\"\r\n    [attr.aria-checked]=\"nzIndeterminate ? 'mixed' : nzChecked\" [attr.aria-labelledby]=\"nzLabelledById\"\r\n    type=\"checkbox\" class=\"ant-checkbox-input\">\r\n  <span class=\"ant-checkbox-inner\"></span>\r\n</span>\r\n<span #contentElement (cdkObserveContent)=\"checkContent()\">\r\n  <ng-content></ng-content>\r\n</span>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(( /**
                         * @return {?}
                         */function () { return NzCheckboxComponent; })),
                        multi: true
                    }
                ],
                host: {
                    '(click)': 'hostClick($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: NzCheckboxWrapperComponent, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FocusMonitor }]; }, { nzCheckedChange: [{
            type: Output
        }], nzAutoFocus: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzIndeterminate: [{
            type: Input
        }], nzChecked: [{
            type: Input
        }], nzAriaLabel: [{
            type: Input
        }], nzLabelledById: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement', { static: false }]
        }], nzValue: [{
            type: Input
        }] }); })();
    return NzCheckboxComponent;
}());
if (false) {
    /** @type {?} */
    NzCheckboxComponent.prototype.onChange;
    /** @type {?} */
    NzCheckboxComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.inputElement;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.contentElement;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzValue;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzChecked;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzAriaLabel;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzLabelledById;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.nzCheckboxWrapperComponent;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.focusMonitor;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzCheckBoxOptionInterface() { }
if (false) {
    /** @type {?} */
    NzCheckBoxOptionInterface.prototype.label;
    /** @type {?} */
    NzCheckBoxOptionInterface.prototype.value;
    /** @type {?|undefined} */
    NzCheckBoxOptionInterface.prototype.checked;
    /** @type {?|undefined} */
    NzCheckBoxOptionInterface.prototype.disabled;
}
var NzCheckboxGroupComponent = /** @class */ (function () {
    function NzCheckboxGroupComponent(elementRef, focusMonitor, cdr, renderer) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        // tslint:disable-next-line:no-any
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.options = [];
        this.nzDisabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.onOptionChange = /**
     * @return {?}
     */
    function () {
        this.onChange(this.options);
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.trackByOption = /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.value;
    };
    /**
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.ngOnInit = /**
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
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
        }));
    };
    /**
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.options = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.registerOnChange = /**
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
    NzCheckboxGroupComponent.prototype.registerOnTouched = /**
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
    NzCheckboxGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /** @nocollapse */
    NzCheckboxGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FocusMonitor },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    NzCheckboxGroupComponent.propDecorators = {
        nzDisabled: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
NzCheckboxGroupComponent.ɵfac = function NzCheckboxGroupComponent_Factory(t) { return new (t || NzCheckboxGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzCheckboxGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCheckboxGroupComponent, selectors: [["nz-checkbox-group"]], inputs: { nzDisabled: "nzDisabled" }, exportAs: ["nzCheckboxGroup"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(( /**
                 * @return {?}
                 */function () { return NzCheckboxGroupComponent; })),
                multi: true
            }
        ])], decls: 1, vars: 2, consts: [["nz-checkbox", "", "class", "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange"]], template: function NzCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
    } }, directives: [ɵngcc4.NgForOf, NzCheckboxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCheckboxGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-checkbox-group',
                exportAs: 'nzCheckboxGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                template: "<label nz-checkbox\r\n       class=\"ant-checkbox-group-item\"\r\n       *ngFor=\"let option of options; trackBy:trackByOption\"\r\n       [nzDisabled]=\"option.disabled || nzDisabled\"\r\n       [(nzChecked)]=\"option.checked\"\r\n       (nzCheckedChange)=\"onOptionChange()\">\r\n  <span>{{ option.label }}</span>\r\n</label>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(( /**
                         * @return {?}
                         */function () { return NzCheckboxGroupComponent; })),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }]; }, { nzDisabled: [{
            type: Input
        }] }); })();
    return NzCheckboxGroupComponent;
}());
if (false) {
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.onChange;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.onTouched;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.options;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.nzDisabled;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxGroupComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxGroupComponent.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxGroupComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCheckboxModule = /** @class */ (function () {
    function NzCheckboxModule() {
    }
NzCheckboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCheckboxModule });
NzCheckboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCheckboxModule_Factory(t) { return new (t || NzCheckboxModule)(); }, imports: [[CommonModule, FormsModule, ObserversModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCheckboxModule, { declarations: function () { return [NzCheckboxComponent,
        NzCheckboxGroupComponent,
        NzCheckboxWrapperComponent]; }, imports: function () { return [CommonModule, FormsModule, ObserversModule]; }, exports: function () { return [NzCheckboxComponent,
        NzCheckboxGroupComponent,
        NzCheckboxWrapperComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, ObserversModule],
                declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
                exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
            }]
    }], function () { return []; }, null); })();
    return NzCheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxModule, NzCheckboxWrapperComponent };


//# sourceMappingURL=ng-zorro-antd-checkbox.js.map