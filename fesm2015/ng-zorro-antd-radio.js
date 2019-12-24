import { ɵɵdirectiveInject, ElementRef, Renderer2, ChangeDetectorRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵlistener, ɵɵclassProp, ɵɵProvidersFeature, forwardRef, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵprojection, ɵɵadvance, ɵɵproperty, ɵɵattribute, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, Input, HostListener, ɵɵInheritDefinitionFeature, ɵɵcontentQuery, ContentChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { __decorate, __metadata } from 'tslib';
import { Subject, merge } from 'rxjs';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core';
import { startWith, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

const _c0 = ["inputElement"];
const _c1 = ["nz-radio", ""];
const _c2 = ["*"];
class NzRadioComponent {
    /* tslint:disable-next-line:no-any */
    constructor(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.select$ = new Subject();
        this.touched$ = new Subject();
        this.checked = false;
        this.isNgModel = false;
        this.onChange = () => null;
        this.onTouched = () => null;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.renderer.addClass(elementRef.nativeElement, 'ant-radio-wrapper');
    }
    updateAutoFocus() {
        if (this.inputElement) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        }
    }
    onClick(event) {
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
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
    writeValue(value) {
        this.checked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.isNgModel = true;
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
                this.touched$.next();
            }
        });
        this.updateAutoFocus();
    }
    ngOnChanges(changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
}
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
                useExisting: forwardRef((() => NzRadioComponent)),
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
                        useExisting: forwardRef((() => NzRadioComponent)),
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$1 = ["nz-radio-button", ""];
const _c1$1 = ["*"];
class NzRadioButtonComponent extends NzRadioComponent {
    /* tslint:disable-next-line:no-any */
    constructor(elementRef, renderer, cdr, focusMonitor) {
        super(elementRef, renderer, cdr, focusMonitor);
        renderer.removeClass(elementRef.nativeElement, 'ant-radio-wrapper');
        renderer.addClass(elementRef.nativeElement, 'ant-radio-button-wrapper');
    }
}
/** @nocollapse */ NzRadioButtonComponent.ɵfac = function NzRadioButtonComponent_Factory(t) { return new (t || NzRadioButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor)); };
/** @nocollapse */ NzRadioButtonComponent.ɵcmp = ɵɵdefineComponent({ type: NzRadioButtonComponent, selectors: [["", "nz-radio-button", ""]], hostBindings: function NzRadioButtonComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(2);
    } if (rf & 2) {
        ɵɵclassProp("ant-radio-button-wrapper-checked", ctx.checked)("ant-radio-button-wrapper-disabled", ctx.nzDisabled);
    } }, exportAs: ["nzRadioButton"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzRadioComponent)),
                multi: true
            },
            {
                provide: NzRadioComponent,
                useExisting: forwardRef((() => NzRadioButtonComponent))
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzRadioButtonComponent, [{
        type: Component,
        args: [{
                selector: '[nz-radio-button]',
                exportAs: 'nzRadioButton',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((() => NzRadioComponent)),
                        multi: true
                    },
                    {
                        provide: NzRadioComponent,
                        useExisting: forwardRef((() => NzRadioButtonComponent))
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

const _c0$2 = ["*"];
class NzRadioGroupComponent {
    constructor(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = () => null;
        this.onTouched = () => null;
        this.nzButtonStyle = 'outline';
        this.nzSize = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
    }
    updateChildrenStatus() {
        if (this.radios) {
            Promise.resolve().then(() => {
                this.radios.forEach(radio => {
                    radio.checked = radio.nzValue === this.value;
                    if (isNotNil(this.nzDisabled)) {
                        radio.nzDisabled = this.nzDisabled;
                    }
                    if (this.nzName) {
                        radio.name = this.nzName;
                    }
                    radio.markForCheck();
                });
            });
        }
    }
    ngAfterContentInit() {
        this.radios.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(() => {
            this.updateChildrenStatus();
            if (this.selectSubscription) {
                this.selectSubscription.unsubscribe();
            }
            this.selectSubscription = merge(...this.radios.map(radio => radio.select$))
                .pipe(takeUntil(this.destroy$))
                .subscribe(radio => {
                if (this.value !== radio.nzValue) {
                    this.value = radio.nzValue;
                    this.updateChildrenStatus();
                    this.onChange(this.value);
                }
            });
            if (this.touchedSubscription) {
                this.touchedSubscription.unsubscribe();
            }
            this.touchedSubscription = merge(...this.radios.map(radio => radio.touched$))
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                Promise.resolve().then(() => this.onTouched());
            });
        });
    }
    ngOnChanges(changes) {
        if (changes.nzDisabled || changes.nzName) {
            this.updateChildrenStatus();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /* tslint:disable-next-line:no-any */
    writeValue(value) {
        this.value = value;
        this.updateChildrenStatus();
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
}
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
                useExisting: forwardRef((() => NzRadioGroupComponent)),
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
                        useExisting: forwardRef((() => NzRadioGroupComponent)),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-group-large]': `nzSize === 'large'`,
                    '[class.ant-radio-group-small]': `nzSize === 'small'`,
                    '[class.ant-radio-group-solid]': `nzButtonStyle === 'solid'`
                }
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: Renderer2 }, { type: ElementRef }]; }, { radios: [{
            type: ContentChildren,
            args: [forwardRef(() => NzRadioComponent),
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
class NzRadioModule {
}
/** @nocollapse */ NzRadioModule.ɵmod = ɵɵdefineNgModule({ type: NzRadioModule });
/** @nocollapse */ NzRadioModule.ɵinj = ɵɵdefineInjector({ factory: function NzRadioModule_Factory(t) { return new (t || NzRadioModule)(); }, imports: [[CommonModule, FormsModule]] });
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
