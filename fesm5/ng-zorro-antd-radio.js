import { __decorate, __metadata, __extends, __spread } from 'tslib';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, ElementRef, Renderer2, ChangeDetectorRef, ViewChild, Input, HostListener, ContentChildren, NgModule } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { Subject, merge } from 'rxjs';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core';
import { startWith, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';

var _c0 = ["inputElement"];
var _c1 = ["nz-radio", ""];
var _c2 = ["*"];
var _c3 = ["nz-radio-button", ""];
var NzRadioComponent = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzRadioComponent(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.select$ = new Subject();
        this.touched$ = new Subject();
        this.checked = false;
        this.isNgModel = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzLabelledById = null;
        this.nzTabIndex = null;
        this.renderer.addClass(elementRef.nativeElement, 'ant-radio-wrapper');
    }
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.inputElement) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzRadioComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Prevent label click triggered twice.
        event.stopPropagation();
        event.preventDefault();
        if (!this.nzDisabled && !this.checked) {
            this.select$.next(this);
            if (this.isNgModel) {
                this.checked = true;
                this.onChange(true);
            }
        }
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzRadioComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.isNgModel = true;
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.ngAfterViewInit = /**
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
                _this.touched$.next();
            }
        }));
        this.updateAutoFocus();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRadioComponent.prototype.ngOnChanges = /**
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
    NzRadioComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    /** @nocollapse */
    NzRadioComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    NzRadioComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement', { static: false },] }],
        nzValue: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzLabelledById: [{ type: Input }],
        nzTabIndex: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzRadioComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzRadioComponent.prototype, "nzAutoFocus", void 0);
NzRadioComponent.ɵfac = function NzRadioComponent_Factory(t) { return new (t || NzRadioComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor)); };
NzRadioComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzRadioComponent, selectors: [["", "nz-radio", ""]], viewQuery: function NzRadioComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, hostVars: 6, hostBindings: function NzRadioComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzRadioComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-radio-wrapper-checked", ctx.checked)("ant-radio-wrapper-disabled", ctx.nzDisabled)("ant-radio-wrapper-labelledBy", ctx.nzLabelledById);
    } }, inputs: { nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus", nzLabelledById: "nzLabelledById", nzTabIndex: "nzTabIndex", nzValue: "nzValue" }, exportAs: ["nzRadio"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(( /**
                 * @return {?}
                 */function () { return NzRadioComponent; })),
                multi: true
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c1, ngContentSelectors: _c2, decls: 6, vars: 10, consts: [[1, "ant-radio"], ["type", "radio", 1, "ant-radio-input", 3, "disabled", "checked"], ["inputElement", ""], [1, "ant-radio-inner"]], template: function NzRadioComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵelement(1, "input", 1, 2);
        ɵngcc0.ɵɵelement(3, "span", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "span");
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-radio-checked", ctx.checked)("ant-radio-disabled", ctx.nzDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.nzDisabled)("checked", ctx.checked);
        ɵngcc0.ɵɵattribute("name", ctx.name)("aria-checked", ctx.checked)("aria-labelledby", ctx.nzLabelledById)("tabindex", ctx.nzTabIndex);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRadioComponent, [{
        type: Component,
        args: [{
                selector: '[nz-radio]',
                exportAs: 'nzRadio',
                preserveWhitespaces: false,
                template: "<span class=\"ant-radio\" [class.ant-radio-checked]=\"checked\" [class.ant-radio-disabled]=\"nzDisabled\">\r\n  <input #inputElement type=\"radio\" class=\"ant-radio-input\" [disabled]=\"nzDisabled\" [checked]=\"checked\"\r\n    [attr.name]=\"name\" [attr.aria-checked]=\"checked\" [attr.aria-labelledby]=\"nzLabelledById\"\r\n    [attr.tabindex]=\"nzTabIndex\">\r\n  <span class=\"ant-radio-inner\"></span>\r\n</span>\r\n<span>\r\n  <ng-content></ng-content>\r\n</span>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(( /**
                         * @return {?}
                         */function () { return NzRadioComponent; })),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-wrapper-checked]': 'checked',
                    '[class.ant-radio-wrapper-disabled]': 'nzDisabled',
                    '[class.ant-radio-wrapper-labelledBy]': 'nzLabelledById'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FocusMonitor }]; }, { nzDisabled: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzLabelledById: [{
            type: Input
        }], nzTabIndex: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: false }]
        }], nzValue: [{
            type: Input
        }] }); })();
    return NzRadioComponent;
}());
if (false) {
    /** @type {?} */
    NzRadioComponent.prototype.select$;
    /** @type {?} */
    NzRadioComponent.prototype.touched$;
    /** @type {?} */
    NzRadioComponent.prototype.checked;
    /** @type {?} */
    NzRadioComponent.prototype.name;
    /** @type {?} */
    NzRadioComponent.prototype.isNgModel;
    /** @type {?} */
    NzRadioComponent.prototype.onChange;
    /** @type {?} */
    NzRadioComponent.prototype.onTouched;
    /** @type {?} */
    NzRadioComponent.prototype.inputElement;
    /** @type {?} */
    NzRadioComponent.prototype.nzValue;
    /** @type {?} */
    NzRadioComponent.prototype.nzDisabled;
    /** @type {?} */
    NzRadioComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzRadioComponent.prototype.nzLabelledById;
    /** @type {?} */
    NzRadioComponent.prototype.nzTabIndex;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.focusMonitor;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzRadioButtonComponent = /** @class */ (function (_super) {
    __extends(NzRadioButtonComponent, _super);
    /* tslint:disable-next-line:no-any */
    function NzRadioButtonComponent(elementRef, renderer, cdr, focusMonitor) {
        var _this = _super.call(this, elementRef, renderer, cdr, focusMonitor) || this;
        renderer.removeClass(elementRef.nativeElement, 'ant-radio-wrapper');
        renderer.addClass(elementRef.nativeElement, 'ant-radio-button-wrapper');
        return _this;
    }
    /** @nocollapse */
    NzRadioButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
NzRadioButtonComponent.ɵfac = function NzRadioButtonComponent_Factory(t) { return new (t || NzRadioButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor)); };
NzRadioButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzRadioButtonComponent, selectors: [["", "nz-radio-button", ""]], hostVars: 6, hostBindings: function NzRadioButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-radio-button-wrapper-checked", ctx.checked)("ant-radio-button-wrapper-disabled", ctx.nzDisabled)("ant-radio-wrapper-labelledBy", ctx.nzLabelledById);
    } }, exportAs: ["nzRadioButton"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(( /**
                 * @return {?}
                 */function () { return NzRadioComponent; })),
                multi: true
            },
            {
                provide: NzRadioComponent,
                useExisting: forwardRef(( /**
                 * @return {?}
                 */function () { return NzRadioButtonComponent; }))
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], attrs: _c3, ngContentSelectors: _c2, decls: 6, vars: 9, consts: [[1, "ant-radio-button"], ["type", "radio", 1, "ant-radio-button-input", 3, "disabled", "checked"], ["inputElement", ""], [1, "ant-radio-button-inner"]], template: function NzRadioButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵelement(1, "input", 1, 2);
        ɵngcc0.ɵɵelement(3, "span", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "span");
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-radio-button-checked", ctx.checked)("ant-radio-button-disabled", ctx.nzDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.nzDisabled)("checked", ctx.checked);
        ɵngcc0.ɵɵattribute("name", ctx.name)("aria-checked", ctx.checked)("aria-labelledby", ctx.nzLabelledById);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRadioButtonComponent, [{
        type: Component,
        args: [{
                selector: '[nz-radio-button]',
                exportAs: 'nzRadioButton',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(( /**
                         * @return {?}
                         */function () { return NzRadioComponent; })),
                        multi: true
                    },
                    {
                        provide: NzRadioComponent,
                        useExisting: forwardRef(( /**
                         * @return {?}
                         */function () { return NzRadioButtonComponent; }))
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: "<span class=\"ant-radio-button\" [class.ant-radio-button-checked]=\"checked\"\r\n  [class.ant-radio-button-disabled]=\"nzDisabled\">\r\n  <input type=\"radio\" #inputElement class=\"ant-radio-button-input\" [disabled]=\"nzDisabled\" [checked]=\"checked\"\r\n    [attr.name]=\"name\" [attr.aria-checked]=\"checked\" [attr.aria-labelledby]=\"nzLabelledById\">\r\n  <span class=\"ant-radio-button-inner\"></span>\r\n</span>\r\n<span>\r\n  <ng-content></ng-content>\r\n</span>",
                host: {
                    '[class.ant-radio-button-wrapper-checked]': 'checked',
                    '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled',
                    '[class.ant-radio-wrapper-labelledBy]': 'nzLabelledById'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FocusMonitor }]; }, null); })();
    return NzRadioButtonComponent;
}(NzRadioComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzRadioGroupComponent = /** @class */ (function () {
    function NzRadioGroupComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.nzButtonStyle = 'outline';
        this.nzSize = 'default';
        this.nzGroupLabelledById = null;
        renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
    }
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.updateChildrenStatus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.radios) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.radios.forEach((/**
                 * @param {?} radio
                 * @return {?}
                 */
                function (radio) {
                    radio.checked = radio.nzValue === _this.value;
                    if (isNotNil(_this.nzDisabled)) {
                        radio.nzDisabled = _this.nzDisabled;
                    }
                    if (_this.nzName) {
                        radio.name = _this.nzName;
                    }
                    /*if (this.nzGroupLabelledById) {
                      radio.nzLabelledById = this.nzGroupLabelledById;
                    }*/
                    radio.markForCheck();
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.radios.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateChildrenStatus();
            if (_this.selectSubscription) {
                _this.selectSubscription.unsubscribe();
            }
            _this.selectSubscription = merge.apply(void 0, __spread(_this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) { return radio.select$; })))).pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                if (_this.value !== radio.nzValue) {
                    _this.value = radio.nzValue;
                    _this.updateChildrenStatus();
                    _this.onChange(_this.value);
                }
            }));
            if (_this.touchedSubscription) {
                _this.touchedSubscription.unsubscribe();
            }
            _this.touchedSubscription = merge.apply(void 0, __spread(_this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) { return radio.touched$; })))).pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }));
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzDisabled || changes.nzName) {
            this.updateChildrenStatus();
        }
    };
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /* tslint:disable-next-line:no-any */
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioGroupComponent.prototype.writeValue = /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.updateChildrenStatus();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioGroupComponent.prototype.registerOnChange = /**
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
    NzRadioGroupComponent.prototype.registerOnTouched = /**
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
    NzRadioGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /** @nocollapse */
    NzRadioGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzRadioGroupComponent.propDecorators = {
        radios: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return NzRadioComponent; })),
                    { descendants: true },] }],
        nzDisabled: [{ type: Input }],
        nzButtonStyle: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzName: [{ type: Input }],
        nzGroupLabelledById: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzRadioGroupComponent.prototype, "nzDisabled", void 0);
NzRadioGroupComponent.ɵfac = function NzRadioGroupComponent_Factory(t) { return new (t || NzRadioGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzRadioGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzRadioGroupComponent, selectors: [["nz-radio-group"]], contentQueries: function NzRadioGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzRadioComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.radios = _t);
    } }, hostVars: 6, hostBindings: function NzRadioGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-radio-group-large", ctx.nzSize === "large")("ant-radio-group-small", ctx.nzSize === "small")("ant-radio-group-solid", ctx.nzButtonStyle === "solid");
    } }, inputs: { nzButtonStyle: "nzButtonStyle", nzSize: "nzSize", nzGroupLabelledById: "nzGroupLabelledById", nzDisabled: "nzDisabled", nzName: "nzName" }, exportAs: ["nzRadioGroup"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(( /**
                 * @return {?}
                 */function () { return NzRadioGroupComponent; })),
                multi: true
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 2, vars: 1, consts: [["role", "radiogroup"]], template: function NzRadioGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-labelledby", ctx.nzGroupLabelledById);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRadioGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-radio-group',
                exportAs: 'nzRadioGroup',
                preserveWhitespaces: false,
                template: "<div role=\"radiogroup\" [attr.aria-labelledby]=\"nzGroupLabelledById\">\r\n    <ng-content></ng-content>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(( /**
                         * @return {?}
                         */function () { return NzRadioGroupComponent; })),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-group-large]': "nzSize === 'large'",
                    '[class.ant-radio-group-small]': "nzSize === 'small'",
                    '[class.ant-radio-group-solid]': "nzButtonStyle === 'solid'"
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { nzButtonStyle: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzGroupLabelledById: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], radios: [{
            type: ContentChildren,
            args: [forwardRef(( /**
                             * @return {?}
                             */function () { return NzRadioComponent; })),
                { descendants: true }]
        }], nzName: [{
            type: Input
        }] }); })();
    return NzRadioGroupComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.selectSubscription;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.touchedSubscription;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onChange;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onTouched;
    /** @type {?} */
    NzRadioGroupComponent.prototype.radios;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzDisabled;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzButtonStyle;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzSize;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzName;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzGroupLabelledById;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzRadioModule = /** @class */ (function () {
    function NzRadioModule() {
    }
NzRadioModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzRadioModule });
NzRadioModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzRadioModule_Factory(t) { return new (t || NzRadioModule)(); }, imports: [[CommonModule, FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzRadioModule, { declarations: function () { return [NzRadioComponent,
        NzRadioButtonComponent,
        NzRadioGroupComponent]; }, imports: function () { return [CommonModule, FormsModule]; }, exports: function () { return [NzRadioComponent,
        NzRadioButtonComponent,
        NzRadioGroupComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRadioModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule],
                exports: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent],
                declarations: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent]
            }]
    }], function () { return []; }, null); })();
    return NzRadioModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzRadioButtonComponent, NzRadioComponent, NzRadioGroupComponent, NzRadioModule };


//# sourceMappingURL=ng-zorro-antd-radio.js.map