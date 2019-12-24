import { __decorate, __metadata } from 'tslib';
import { FocusMonitor } from '@angular/cdk/a11y';
import { EventEmitter, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Output, ChangeDetectorRef, ɵɵstaticViewQuery, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵlistener, ɵɵProvidersFeature, forwardRef, ɵɵNgOnChangesFeature, ɵɵelementStart, ɵɵelementEnd, ɵɵelement, ɵɵclassProp, ɵɵadvance, ɵɵproperty, Optional, ViewChild, Input, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵtextInterpolate, ɵɵtemplate, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, CheckboxControlValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { isEmpty, InputBoolean } from 'ng-zorro-antd/core';
import { CdkObserveContent, ObserversModule } from '@angular/cdk/observers';
import { NgForOf, CommonModule } from '@angular/common';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["*"];
class NzCheckboxWrapperComponent {
    constructor(renderer, elementRef) {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    outputValue() {
        const checkedList = this.checkboxList.filter(item => item.nzChecked);
        return checkedList.map(item => item.nzValue);
    }
    onChange() {
        this.nzOnChange.emit(this.outputValue());
    }
}
/** @nocollapse */ NzCheckboxWrapperComponent.ɵfac = function NzCheckboxWrapperComponent_Factory(t) { return new (t || NzCheckboxWrapperComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
/** @nocollapse */ NzCheckboxWrapperComponent.ɵcmp = ɵɵdefineComponent({ type: NzCheckboxWrapperComponent, selectors: [["nz-checkbox-wrapper"]], outputs: { nzOnChange: "nzOnChange" }, exportAs: ["nzCheckboxWrapper"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCheckboxWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCheckboxWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'nz-checkbox-wrapper',
                exportAs: 'nzCheckboxWrapper',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-checkbox-wrapper.component.html'
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, { nzOnChange: [{
            type: Output
        }] }); })();

const _c0$1 = ["inputElement"];
const _c1 = ["contentElement"];
const _c2 = ["nz-checkbox", ""];
const _c3 = ["*"];
class NzCheckboxComponent {
    constructor(elementRef, renderer, nzCheckboxWrapperComponent, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        // tslint:disable-next-line:no-any
        this.onChange = () => null;
        // tslint:disable-next-line:no-any
        this.onTouched = () => null;
        this.nzCheckedChange = new EventEmitter();
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzChecked = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-wrapper');
    }
    hostClick(e) {
        e.preventDefault();
        this.focus();
        this.innerCheckedChange(!this.nzChecked);
    }
    innerCheckedChange(checked) {
        if (!this.nzDisabled) {
            this.nzChecked = checked;
            this.onChange(this.nzChecked);
            this.nzCheckedChange.emit(this.nzChecked);
            if (this.nzCheckboxWrapperComponent) {
                this.nzCheckboxWrapperComponent.onChange();
            }
        }
    }
    updateAutoFocus() {
        if (this.inputElement && this.nzAutoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    }
    writeValue(value) {
        this.nzChecked = value;
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
    checkContent() {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        }
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.addCheckbox(this);
        }
    }
    ngOnChanges(changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
    }
    ngAfterViewInit() {
        this.updateAutoFocus();
        this.checkContent();
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.removeCheckbox(this);
        }
    }
}
/** @nocollapse */ NzCheckboxComponent.ɵfac = function NzCheckboxComponent_Factory(t) { return new (t || NzCheckboxComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzCheckboxWrapperComponent, 8), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor)); };
/** @nocollapse */ NzCheckboxComponent.ɵcmp = ɵɵdefineComponent({ type: NzCheckboxComponent, selectors: [["", "nz-checkbox", ""]], viewQuery: function NzCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$1, true);
        ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentElement = _t.first);
    } }, hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵlistener("click", function NzCheckboxComponent_click_HostBindingHandler($event) { return ctx.hostClick($event); });
    } }, inputs: { nzValue: "nzValue", nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzChecked: "nzChecked" }, outputs: { nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzCheckbox"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzCheckboxComponent)),
                multi: true
            }
        ]), ɵɵNgOnChangesFeature()], attrs: _c2, ngContentSelectors: _c3, decls: 7, vars: 6, consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-checkbox-inner"], [3, "cdkObserveContent"], ["contentElement", ""]], template: function NzCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "span", 0);
        ɵɵelementStart(1, "input", 1, 2);
        ɵɵlistener("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.innerCheckedChange($event); })("click", function NzCheckboxComponent_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
        ɵɵelementEnd();
        ɵɵelement(3, "span", 3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "span", 4, 5);
        ɵɵlistener("cdkObserveContent", function NzCheckboxComponent_Template_span_cdkObserveContent_4_listener($event) { return ctx.checkContent(); });
        ɵɵprojection(6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled)("ant-checkbox-indeterminate", ctx.nzIndeterminate);
        ɵɵadvance(1);
        ɵɵproperty("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled);
    } }, directives: [CheckboxControlValueAccessor, NgControlStatus, NgModel, CdkObserveContent], encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCheckboxComponent, [{
        type: Component,
        args: [{
                selector: '[nz-checkbox]',
                exportAs: 'nzCheckbox',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-checkbox.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((() => NzCheckboxComponent)),
                        multi: true
                    }
                ],
                host: {
                    '(click)': 'hostClick($event)'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: NzCheckboxWrapperComponent, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef }, { type: FocusMonitor }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement', { static: false }]
        }], nzCheckedChange: [{
            type: Output
        }], nzValue: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzIndeterminate: [{
            type: Input
        }], nzChecked: [{
            type: Input
        }] }); })();

function NzCheckboxGroupComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r141 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 1);
    ɵɵlistener("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener($event) { ɵɵrestoreView(_r141); const option_r139 = ctx.$implicit; return option_r139.checked = $event; })("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener($event) { ɵɵrestoreView(_r141); const ctx_r142 = ɵɵnextContext(); return ctx_r142.onOptionChange(); });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r139 = ctx.$implicit;
    const ctx_r138 = ɵɵnextContext();
    ɵɵproperty("nzDisabled", option_r139.disabled || ctx_r138.nzDisabled)("nzChecked", option_r139.checked);
    ɵɵadvance(2);
    ɵɵtextInterpolate(option_r139.label);
} }
class NzCheckboxGroupComponent {
    constructor(elementRef, focusMonitor, cdr, renderer) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.onChange = () => null;
        // tslint:disable-next-line:no-any
        this.onTouched = () => null;
        this.options = [];
        this.nzDisabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    onOptionChange() {
        this.onChange(this.options);
    }
    trackByOption(_index, option) {
        return option.value;
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
    writeValue(value) {
        this.options = value;
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
/** @nocollapse */ NzCheckboxGroupComponent.ɵfac = function NzCheckboxGroupComponent_Factory(t) { return new (t || NzCheckboxGroupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzCheckboxGroupComponent.ɵcmp = ɵɵdefineComponent({ type: NzCheckboxGroupComponent, selectors: [["nz-checkbox-group"]], inputs: { nzDisabled: "nzDisabled" }, exportAs: ["nzCheckboxGroup"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzCheckboxGroupComponent)),
                multi: true
            }
        ])], decls: 1, vars: 2, consts: [["nz-checkbox", "", "class", "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange"]], template: function NzCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NzCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
    } }, directives: [NgForOf, NzCheckboxComponent], encapsulation: 2 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCheckboxGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-checkbox-group',
                exportAs: 'nzCheckboxGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-checkbox-group.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((() => NzCheckboxGroupComponent)),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: FocusMonitor }, { type: ChangeDetectorRef }, { type: Renderer2 }]; }, { nzDisabled: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCheckboxModule {
}
/** @nocollapse */ NzCheckboxModule.ɵmod = ɵɵdefineNgModule({ type: NzCheckboxModule });
/** @nocollapse */ NzCheckboxModule.ɵinj = ɵɵdefineInjector({ factory: function NzCheckboxModule_Factory(t) { return new (t || NzCheckboxModule)(); }, imports: [[CommonModule, FormsModule, ObserversModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzCheckboxModule, { declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent], imports: [CommonModule, FormsModule, ObserversModule], exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, ObserversModule],
                declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
                exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
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

export { NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxModule, NzCheckboxWrapperComponent };
//# sourceMappingURL=ng-zorro-antd-checkbox.js.map
