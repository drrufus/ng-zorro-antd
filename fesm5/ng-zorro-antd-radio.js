import { __decorate, __metadata, __extends, __spread } from 'tslib';
import { ɵɵdirectiveInject, ElementRef, Renderer2, ChangeDetectorRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵlistener, ɵɵclassProp, ɵɵProvidersFeature, forwardRef, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵprojection, ɵɵadvance, ɵɵproperty, ɵɵattribute, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, Input, HostListener, ɵɵInheritDefinitionFeature, ɵɵcontentQuery, ContentChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { Subject, merge } from 'rxjs';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core';
import { startWith, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

var _c0 = ["inputElement"];
var _c1 = ["nz-radio", ""];
var _c2 = ["*"];
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
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.renderer.addClass(elementRef.nativeElement, 'ant-radio-wrapper');
    }
    NzRadioComponent.prototype.updateAutoFocus = function () {
        if (this.inputElement) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    NzRadioComponent.prototype.onClick = function (event) {
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
    NzRadioComponent.prototype.focus = function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    NzRadioComponent.prototype.blur = function () {
        this.inputElement.nativeElement.blur();
    };
    NzRadioComponent.prototype.markForCheck = function () {
        this.cdr.markForCheck();
    };
    NzRadioComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzRadioComponent.prototype.writeValue = function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    NzRadioComponent.prototype.registerOnChange = function (fn) {
        this.isNgModel = true;
        this.onChange = fn;
    };
    NzRadioComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzRadioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then(function () { return _this.onTouched(); });
                _this.touched$.next();
            }
        });
        this.updateAutoFocus();
    };
    NzRadioComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
    };
    NzRadioComponent.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    /** @nocollapse */ NzRadioComponent.ɵfac = function NzRadioComponent_Factory(t) { return new (t || NzRadioComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor)); };
    /** @nocollapse */ NzRadioComponent.ɵcmp = ɵɵdefineComponent({ type: NzRadioComponent, selectors: [["", "nz-radio", ""]], viewQuery: function NzRadioComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, hostBindings: function NzRadioComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(2);
            ɵɵlistener("click", function NzRadioComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } if (rf & 2) {
            ɵɵclassProp("ant-radio-wrapper-checked", ctx.checked)("ant-radio-wrapper-disabled", ctx.nzDisabled);
        } }, inputs: { nzValue: "nzValue", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus" }, exportAs: ["nzRadio"], features: [ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzRadioComponent; })),
                    multi: true
                }
            ]), ɵɵNgOnChangesFeature()], attrs: _c1, ngContentSelectors: _c2, decls: 6, vars: 5, consts: [[1, "ant-radio"], ["type", "radio", 1, "ant-radio-input", 3, "disabled", "checked"], ["inputElement", ""], [1, "ant-radio-inner"]], template: function NzRadioComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "span", 0);
            ɵɵelement(1, "input", 1, 2);
            ɵɵelement(3, "span", 3);
            ɵɵelementEnd();
            ɵɵelementStart(4, "span");
            ɵɵprojection(5);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassProp("ant-radio-checked", ctx.checked)("ant-radio-disabled", ctx.nzDisabled);
            ɵɵadvance(1);
            ɵɵproperty("disabled", ctx.nzDisabled)("checked", ctx.checked);
            ɵɵattribute("name", ctx.name);
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzRadioComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzRadioComponent.prototype, "nzAutoFocus", void 0);
    return NzRadioComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzRadioComponent, [{
        type: Component,
        args: [{
                selector: '[nz-radio]',
                exportAs: 'nzRadio',
                preserveWhitespaces: false,
                templateUrl: './nz-radio.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzRadioComponent; })),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-wrapper-checked]': 'checked',
                    '[class.ant-radio-wrapper-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: ChangeDetectorRef }, { type: FocusMonitor }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: false }]
        }], nzValue: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

var _c0$1 = ["nz-radio-button", ""];
var _c1$1 = ["*"];
var NzRadioButtonComponent = /** @class */ (function (_super) {
    __extends(NzRadioButtonComponent, _super);
    /* tslint:disable-next-line:no-any */
    function NzRadioButtonComponent(elementRef, renderer, cdr, focusMonitor) {
        var _this = _super.call(this, elementRef, renderer, cdr, focusMonitor) || this;
        renderer.removeClass(elementRef.nativeElement, 'ant-radio-wrapper');
        renderer.addClass(elementRef.nativeElement, 'ant-radio-button-wrapper');
        return _this;
    }
    /** @nocollapse */ NzRadioButtonComponent.ɵfac = function NzRadioButtonComponent_Factory(t) { return new (t || NzRadioButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor)); };
    /** @nocollapse */ NzRadioButtonComponent.ɵcmp = ɵɵdefineComponent({ type: NzRadioButtonComponent, selectors: [["", "nz-radio-button", ""]], hostBindings: function NzRadioButtonComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(2);
        } if (rf & 2) {
            ɵɵclassProp("ant-radio-button-wrapper-checked", ctx.checked)("ant-radio-button-wrapper-disabled", ctx.nzDisabled);
        } }, exportAs: ["nzRadioButton"], features: [ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzRadioComponent; })),
                    multi: true
                },
                {
                    provide: NzRadioComponent,
                    useExisting: forwardRef((function () { return NzRadioButtonComponent; }))
                }
            ]), ɵɵInheritDefinitionFeature], attrs: _c0$1, ngContentSelectors: _c1$1, decls: 6, vars: 5, consts: [[1, "ant-radio-button"], ["type", "radio", 1, "ant-radio-button-input", 3, "disabled", "checked"], ["inputElement", ""], [1, "ant-radio-button-inner"]], template: function NzRadioButtonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "span", 0);
            ɵɵelement(1, "input", 1, 2);
            ɵɵelement(3, "span", 3);
            ɵɵelementEnd();
            ɵɵelementStart(4, "span");
            ɵɵprojection(5);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassProp("ant-radio-button-checked", ctx.checked)("ant-radio-button-disabled", ctx.nzDisabled);
            ɵɵadvance(1);
            ɵɵproperty("disabled", ctx.nzDisabled)("checked", ctx.checked);
            ɵɵattribute("name", ctx.name);
        } }, encapsulation: 2, changeDetection: 0 });
    return NzRadioButtonComponent;
}(NzRadioComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzRadioButtonComponent, [{
        type: Component,
        args: [{
                selector: '[nz-radio-button]',
                exportAs: 'nzRadioButton',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzRadioComponent; })),
                        multi: true
                    },
                    {
                        provide: NzRadioComponent,
                        useExisting: forwardRef((function () { return NzRadioButtonComponent; }))
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                templateUrl: './nz-radio-button.component.html',
                host: {
                    '[class.ant-radio-button-wrapper-checked]': 'checked',
                    '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: ChangeDetectorRef }, { type: FocusMonitor }]; }, null); })();

var _c0$2 = ["*"];
var NzRadioGroupComponent = /** @class */ (function () {
    function NzRadioGroupComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.nzButtonStyle = 'outline';
        this.nzSize = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
    }
    NzRadioGroupComponent.prototype.updateChildrenStatus = function () {
        var _this = this;
        if (this.radios) {
            Promise.resolve().then(function () {
                _this.radios.forEach(function (radio) {
                    radio.checked = radio.nzValue === _this.value;
                    if (isNotNil(_this.nzDisabled)) {
                        radio.nzDisabled = _this.nzDisabled;
                    }
                    if (_this.nzName) {
                        radio.name = _this.nzName;
                    }
                    radio.markForCheck();
                });
            });
        }
    };
    NzRadioGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.radios.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(function () {
            _this.updateChildrenStatus();
            if (_this.selectSubscription) {
                _this.selectSubscription.unsubscribe();
            }
            _this.selectSubscription = merge.apply(void 0, __spread(_this.radios.map(function (radio) { return radio.select$; }))).pipe(takeUntil(_this.destroy$))
                .subscribe(function (radio) {
                if (_this.value !== radio.nzValue) {
                    _this.value = radio.nzValue;
                    _this.updateChildrenStatus();
                    _this.onChange(_this.value);
                }
            });
            if (_this.touchedSubscription) {
                _this.touchedSubscription.unsubscribe();
            }
            _this.touchedSubscription = merge.apply(void 0, __spread(_this.radios.map(function (radio) { return radio.touched$; }))).pipe(takeUntil(_this.destroy$))
                .subscribe(function () {
                Promise.resolve().then(function () { return _this.onTouched(); });
            });
        });
    };
    NzRadioGroupComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzDisabled || changes.nzName) {
            this.updateChildrenStatus();
        }
    };
    NzRadioGroupComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /* tslint:disable-next-line:no-any */
    NzRadioGroupComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.updateChildrenStatus();
        this.cdr.markForCheck();
    };
    NzRadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzRadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzRadioGroupComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /** @nocollapse */ NzRadioGroupComponent.ɵfac = function NzRadioGroupComponent_Factory(t) { return new (t || NzRadioGroupComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
    /** @nocollapse */ NzRadioGroupComponent.ɵcmp = ɵɵdefineComponent({ type: NzRadioGroupComponent, selectors: [["nz-radio-group"]], contentQueries: function NzRadioGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzRadioComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.radios = _t);
        } }, hostBindings: function NzRadioGroupComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(3);
        } if (rf & 2) {
            ɵɵclassProp("ant-radio-group-large", ctx.nzSize === "large")("ant-radio-group-small", ctx.nzSize === "small")("ant-radio-group-solid", ctx.nzButtonStyle === "solid");
        } }, inputs: { nzDisabled: "nzDisabled", nzButtonStyle: "nzButtonStyle", nzSize: "nzSize", nzName: "nzName" }, exportAs: ["nzRadioGroup"], features: [ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzRadioGroupComponent; })),
                    multi: true
                }
            ]), ɵɵNgOnChangesFeature()], ngContentSelectors: _c0$2, decls: 1, vars: 0, template: function NzRadioGroupComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzRadioGroupComponent.prototype, "nzDisabled", void 0);
    return NzRadioGroupComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzRadioGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-radio-group',
                exportAs: 'nzRadioGroup',
                preserveWhitespaces: false,
                templateUrl: './nz-radio-group.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzRadioGroupComponent; })),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-group-large]': "nzSize === 'large'",
                    '[class.ant-radio-group-small]': "nzSize === 'small'",
                    '[class.ant-radio-group-solid]': "nzButtonStyle === 'solid'"
                }
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: Renderer2 }, { type: ElementRef }]; }, { radios: [{
            type: ContentChildren,
            args: [forwardRef(function () { return NzRadioComponent; }),
                { descendants: true }]
        }], nzDisabled: [{
            type: Input
        }], nzButtonStyle: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzName: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzRadioModule = /** @class */ (function () {
    function NzRadioModule() {
    }
    /** @nocollapse */ NzRadioModule.ɵmod = ɵɵdefineNgModule({ type: NzRadioModule });
    /** @nocollapse */ NzRadioModule.ɵinj = ɵɵdefineInjector({ factory: function NzRadioModule_Factory(t) { return new (t || NzRadioModule)(); }, imports: [[CommonModule, FormsModule]] });
    return NzRadioModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzRadioModule, { declarations: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent], imports: [CommonModule, FormsModule], exports: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzRadioModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule],
                exports: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent],
                declarations: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent]
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

export { NzRadioButtonComponent, NzRadioComponent, NzRadioGroupComponent, NzRadioModule };
//# sourceMappingURL=ng-zorro-antd-radio.js.map
