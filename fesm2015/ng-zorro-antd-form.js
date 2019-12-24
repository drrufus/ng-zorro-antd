import { MediaMatcher, LayoutModule } from '@angular/cdk/layout';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { NgClass, NgIf, CommonModule } from '@angular/common';
import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵɵproperty, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, NgZone, ChangeDetectorRef, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵclassProp, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, Input, ContentChildren, ɵɵelement, ɵɵnextContext, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵpureFunction1, Optional, Host, ContentChild, ɵɵattribute, ɵɵdefineDirective, Directive, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzRowDirective, NzColDirective, NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { warnDeprecation, helpMotion, NzUpdateHostClassService, NzDomEventService, InputBoolean, toBoolean, NzStringTemplateOutletDirective, NzConfigService, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { FormControl, NgModel, FormControlName, FormControlDirective, NgControl } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["*"];
/**
 * @deprecated Use `[nzSuccessTip] | [nzWarningTip] | [nzErrorTip] | [nzValidatingTip]` in `NzFormControlComponent` instead, will remove in 9.0.0.
 */
class NzFormExplainComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
        warnDeprecation(`'nz-form-explain' is going to be removed in 9.0.0. Use [nzSuccessTip] | [nzWarningTip] | [nzErrorTip] | [nzValidatingTip] in nz-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
}
/** @nocollapse */ NzFormExplainComponent.ɵfac = function NzFormExplainComponent_Factory(t) { return new (t || NzFormExplainComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzFormExplainComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormExplainComponent, selectors: [["nz-form-explain"]], exportAs: ["nzFormExplain"], ngContentSelectors: _c0, decls: 2, vars: 1, template: function NzFormExplainComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div");
        ɵɵprojection(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("@helpMotion", undefined);
    } }, styles: ["\n      nz-form-explain {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormExplainComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-explain',
                exportAs: 'nzFormExplain',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [helpMotion],
                templateUrl: './nz-form-explain.component.html',
                styles: [
                    `
      nz-form-explain {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

const _c0$1 = ["*"];
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
class NzFormItemComponent extends NzRowDirective {
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
        super(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService);
        this.cdr = cdr;
        this.nzFlex = false;
        this.withHelpClass = false;
        this.tipsMode = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
    }
    updateFlexStyle() {
        if (this.nzFlex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    }
    setWithHelpViaTips(value) {
        this.tipsMode = true;
        this.withHelpClass = value;
        this.cdr.markForCheck();
    }
    ngAfterContentInit() {
        if (!this.tipsMode) {
            this.listOfNzFormExplainComponent.changes.pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
                this.withHelpClass = this.listOfNzFormExplainComponent && this.listOfNzFormExplainComponent.length > 0;
                this.cdr.markForCheck();
            });
        }
    }
    ngOnInit() {
        super.ngOnInit();
        this.updateFlexStyle();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.hasOwnProperty('nzFlex')) {
            this.updateFlexStyle();
        }
    }
}
/** @nocollapse */ NzFormItemComponent.ɵfac = function NzFormItemComponent_Factory(t) { return new (t || NzFormItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(MediaMatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzDomEventService), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzFormItemComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormItemComponent, selectors: [["nz-form-item"]], contentQueries: function NzFormItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzFormExplainComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzFormExplainComponent = _t);
    } }, hostBindings: function NzFormItemComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(1);
    } if (rf & 2) {
        ɵɵclassProp("ant-form-item-with-help", ctx.withHelpClass);
    } }, inputs: { nzFlex: "nzFlex" }, exportAs: ["nzFormItem"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function NzFormItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, styles: ["\n      nz-form-item {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzFormItemComponent.prototype, "nzFlex", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormItemComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-item',
                exportAs: 'nzFormItem',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [NzUpdateHostClassService],
                templateUrl: './nz-form-item.component.html',
                host: {
                    '[class.ant-form-item-with-help]': 'withHelpClass'
                },
                styles: [
                    `
      nz-form-item {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: NzUpdateHostClassService }, { type: MediaMatcher }, { type: NgZone }, { type: Platform }, { type: NzDomEventService }, { type: ChangeDetectorRef }]; }, { nzFlex: [{
            type: Input
        }], listOfNzFormExplainComponent: [{
            type: ContentChildren,
            args: [NzFormExplainComponent, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzFormControlComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 7);
} if (rf & 2) {
    const ctx_r446 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r446.iconType);
} }
function NzFormControlComponent_div_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r455 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r455.nzSuccessTip);
} }
const _c0$2 = function (a0) { return { $implicit: a0 }; };
function NzFormControlComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r451 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r451.nzSuccessTip)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0$2, ctx_r451.validateControl));
} }
function NzFormControlComponent_div_5_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r456 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r456.nzWarningTip);
} }
function NzFormControlComponent_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r452 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r452.nzWarningTip)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0$2, ctx_r452.validateControl));
} }
function NzFormControlComponent_div_5_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r457 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r457.nzErrorTip);
} }
function NzFormControlComponent_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r453 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r453.nzErrorTip)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0$2, ctx_r453.validateControl));
} }
function NzFormControlComponent_div_5_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r458 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r458.nzValidatingTip);
} }
function NzFormControlComponent_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r454 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r454.nzValidatingTip)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0$2, ctx_r454.validateControl));
} }
function NzFormControlComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "div");
    ɵɵtemplate(2, NzFormControlComponent_div_5_ng_container_2_Template, 2, 4, "ng-container", 5);
    ɵɵtemplate(3, NzFormControlComponent_div_5_ng_container_3_Template, 2, 4, "ng-container", 5);
    ɵɵtemplate(4, NzFormControlComponent_div_5_ng_container_4_Template, 2, 4, "ng-container", 5);
    ɵɵtemplate(5, NzFormControlComponent_div_5_ng_container_5_Template, 2, 4, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r447 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("@helpMotion", undefined);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r447.showSuccessTip);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r447.showWarningTip);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r447.showErrorTip);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r447.showValidatingTip);
} }
function NzFormControlComponent_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 1, ["*ngIf", "!hasTips"]);
} }
function NzFormControlComponent_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 2, ["*ngIf", "!nzExtra"]);
} }
function NzFormControlComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r459 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r459.nzExtra);
} }
function NzFormControlComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, NzFormControlComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r450 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r450.nzExtra);
} }
const _c1 = ["*", [["nz-form-explain"]], [["nz-form-extra"]]];
const _c2 = ["*", "nz-form-explain", "nz-form-extra"];
class NzFormControlComponent extends NzColDirective {
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer);
        this.nzFormItemComponent = nzFormItemComponent;
        this.cdr = cdr;
        this._hasFeedback = false;
        this.validateChanges = Subscription.EMPTY;
        this.status = null;
        this.controlClassMap = {};
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
    }
    set nzHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        this.setControlClassMap();
    }
    get nzHasFeedback() {
        return this._hasFeedback;
    }
    set nzValidateStatus(value) {
        if (value instanceof FormControl || value instanceof NgModel) {
            this.validateControl = value;
            this.validateString = null;
            this.watchControl();
        }
        else if (value instanceof FormControlName) {
            this.validateControl = value.control;
            this.validateString = null;
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.setControlClassMap();
        }
    }
    removeSubscribe() {
        this.validateChanges.unsubscribe();
    }
    watchControl() {
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe(() => {
                this.setControlClassMap();
                this.cdr.markForCheck();
            });
        }
    }
    validateControlStatus(status) {
        return (!!this.validateControl &&
            (this.validateControl.dirty || this.validateControl.touched) &&
            this.validateControl.status === status);
    }
    setControlClassMap() {
        if (this.validateString === 'warning') {
            this.status = 'warning';
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.validateString === 'validating' || this.validateString === 'pending' || this.validateControlStatus('PENDING')) {
            this.status = 'validating';
            this.iconType = 'loading';
        }
        else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
            this.status = 'error';
            this.iconType = 'close-circle-fill';
        }
        else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
            this.status = 'success';
            this.iconType = 'check-circle-fill';
        }
        else {
            this.status = null;
            this.iconType = '';
        }
        if (this.hasTips) {
            this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
        }
        this.controlClassMap = {
            [`has-warning`]: this.status === 'warning',
            [`is-validating`]: this.status === 'validating',
            [`has-error`]: this.status === 'error',
            [`has-success`]: this.status === 'success',
            [`has-feedback`]: this.nzHasFeedback && this.status
        };
    }
    get hasTips() {
        return !!(this.nzSuccessTip || this.nzWarningTip || this.nzErrorTip || this.nzValidatingTip);
    }
    get showSuccessTip() {
        return this.status === 'success' && !!this.nzSuccessTip;
    }
    get showWarningTip() {
        return this.status === 'warning' && !!this.nzWarningTip;
    }
    get showErrorTip() {
        return this.status === 'error' && !!this.nzErrorTip;
    }
    get showValidatingTip() {
        return this.status === 'validating' && !!this.nzValidatingTip;
    }
    get showInnerTip() {
        return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
    }
    ngOnInit() {
        super.ngOnInit();
        this.setControlClassMap();
    }
    ngOnDestroy() {
        this.removeSubscribe();
        super.ngOnDestroy();
    }
    ngAfterContentInit() {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.nzValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.nzValidateStatus = this.defaultValidateControl;
            }
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
}
/** @nocollapse */ NzFormControlComponent.ɵfac = function NzFormControlComponent_Factory(t) { return new (t || NzFormControlComponent)(ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzFormItemComponent, 9), ɵɵdirectiveInject(NzRowDirective, 9), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzFormControlComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormControlComponent, selectors: [["nz-form-control"]], contentQueries: function NzFormControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgControl, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultValidateControl = _t.first);
    } }, inputs: { nzSuccessTip: "nzSuccessTip", nzWarningTip: "nzWarningTip", nzErrorTip: "nzErrorTip", nzValidatingTip: "nzValidatingTip", nzExtra: "nzExtra", nzHasFeedback: "nzHasFeedback", nzValidateStatus: "nzValidateStatus" }, exportAs: ["nzFormControl"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 9, vars: 6, consts: [[1, "ant-form-item-control", 3, "ngClass"], [1, "ant-form-item-children"], [1, "ant-form-item-children-icon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["class", "ant-form-explain", 4, "ngIf"], [4, "ngIf"], ["class", "ant-form-extra", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [1, "ant-form-explain"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-form-extra"], [4, "nzStringTemplateOutlet"]], template: function NzFormControlComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c1);
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "span", 1);
        ɵɵprojection(2);
        ɵɵelementStart(3, "span", 2);
        ɵɵtemplate(4, NzFormControlComponent_i_4_Template, 1, 1, "i", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(5, NzFormControlComponent_div_5_Template, 6, 5, "div", 4);
        ɵɵtemplate(6, NzFormControlComponent_6_Template, 1, 0, undefined, 5);
        ɵɵtemplate(7, NzFormControlComponent_7_Template, 1, 0, undefined, 5);
        ɵɵtemplate(8, NzFormControlComponent_div_8_Template, 2, 1, "div", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ctx.controlClassMap);
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.nzHasFeedback && ctx.iconType);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showSuccessTip || ctx.showWarningTip || ctx.showErrorTip || ctx.showValidatingTip);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.hasTips);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.nzExtra);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzExtra);
    } }, directives: [NgClass, NgIf, NzIconDirective, NzStringTemplateOutletDirective], styles: ["\n      nz-form-control {\n        display: block;\n      }\n      form .has-feedback .ant-input-suffix i {\n        margin-right: 18px;\n      }\n    "], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormControlComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-control',
                exportAs: 'nzFormControl',
                preserveWhitespaces: false,
                animations: [helpMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                templateUrl: './nz-form-control.component.html',
                styles: [
                    `
      nz-form-control {
        display: block;
      }
      form .has-feedback .ant-input-suffix i {
        margin-right: 18px;
      }
    `
                ]
            }]
    }], function () { return [{ type: NzUpdateHostClassService }, { type: ElementRef }, { type: NzFormItemComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: ChangeDetectorRef }, { type: Renderer2 }]; }, { defaultValidateControl: [{
            type: ContentChild,
            args: [NgControl, { static: false }]
        }], nzSuccessTip: [{
            type: Input
        }], nzWarningTip: [{
            type: Input
        }], nzErrorTip: [{
            type: Input
        }], nzValidatingTip: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], nzHasFeedback: [{
            type: Input
        }], nzValidateStatus: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$3 = ["*"];
/**
 * @deprecated Use `[nzExtra]` in `NzFormControlComponent` instead, will remove in 9.0.0.
 */
class NzFormExtraComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-extra');
        warnDeprecation(`'nz-form-extra' is going to be removed in 9.0.0. Use [nzExtra] in nz-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
}
/** @nocollapse */ NzFormExtraComponent.ɵfac = function NzFormExtraComponent_Factory(t) { return new (t || NzFormExtraComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzFormExtraComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormExtraComponent, selectors: [["nz-form-extra"]], exportAs: ["nzFormExtra"], ngContentSelectors: _c0$3, decls: 1, vars: 0, template: function NzFormExtraComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, styles: ["\n      nz-form-extra {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormExtraComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-extra',
                exportAs: 'nzFormExtra',
                templateUrl: './nz-form-extra.component.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [
                    `
      nz-form-extra {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

const _c0$4 = ["*"];
class NzFormLabelComponent extends NzColDirective {
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer);
        this.cdr = cdr;
        this.nzRequired = false;
        this.defaultNoColon = false;
        this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
    }
    set nzNoColon(value) {
        this.noColon = toBoolean(value);
    }
    get nzNoColon() {
        return !!this.noColon;
    }
    setDefaultNoColon(value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
}
/** @nocollapse */ NzFormLabelComponent.ɵfac = function NzFormLabelComponent_Factory(t) { return new (t || NzFormLabelComponent)(ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzFormItemComponent, 9), ɵɵdirectiveInject(NzRowDirective, 9), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzFormLabelComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormLabelComponent, selectors: [["nz-form-label"]], inputs: { nzFor: "nzFor", nzRequired: "nzRequired", nzNoColon: "nzNoColon" }, exportAs: ["nzFormLabel"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$4, decls: 2, vars: 3, template: function NzFormLabelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "label");
        ɵɵprojection(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("ant-form-item-no-colon", ctx.noColon === "default" ? ctx.defaultNoColon : ctx.nzNoColon)("ant-form-item-required", ctx.nzRequired);
        ɵɵattribute("for", ctx.nzFor);
    } }, encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzFormLabelComponent.prototype, "nzRequired", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormLabelComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-label',
                exportAs: 'nzFormLabel',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-form-label.component.html'
            }]
    }], function () { return [{ type: NzUpdateHostClassService }, { type: ElementRef }, { type: NzFormItemComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: Renderer2 }, { type: ChangeDetectorRef }]; }, { nzFor: [{
            type: Input
        }], nzRequired: [{
            type: Input
        }], nzNoColon: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$5 = ["*"];
class NzFormSplitComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
    }
}
/** @nocollapse */ NzFormSplitComponent.ɵfac = function NzFormSplitComponent_Factory(t) { return new (t || NzFormSplitComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzFormSplitComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormSplitComponent, selectors: [["nz-form-split"]], exportAs: ["nzFormSplit"], ngContentSelectors: _c0$5, decls: 1, vars: 0, template: function NzFormSplitComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormSplitComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-split',
                exportAs: 'nzFormSplit',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-form-split.component.html'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$6 = ["*"];
class NzFormTextComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
    }
}
/** @nocollapse */ NzFormTextComponent.ɵfac = function NzFormTextComponent_Factory(t) { return new (t || NzFormTextComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzFormTextComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormTextComponent, selectors: [["nz-form-text"]], exportAs: ["nzFormText"], ngContentSelectors: _c0$6, decls: 1, vars: 0, template: function NzFormTextComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormTextComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-text',
                exportAs: 'nzFormText',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-form-text.component.html'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

const NZ_CONFIG_COMPONENT_NAME = 'form';
class NzFormDirective {
    constructor(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzLayout = 'horizontal';
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`ant-form-${this.nzLayout}`]: this.nzLayout
        });
    }
    updateItemsDefaultColon() {
        if (this.nzFormLabelComponent) {
            this.nzFormLabelComponent.forEach(item => item.setDefaultNoColon(this.nzNoColon));
        }
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngOnChanges(changes) {
        this.setClassMap();
        if (changes.hasOwnProperty('nzNoColon')) {
            this.updateItemsDefaultColon();
        }
    }
    ngAfterContentInit() {
        this.nzFormLabelComponent.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(() => {
            this.updateItemsDefaultColon();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzFormDirective.ɵfac = function NzFormDirective_Factory(t) { return new (t || NzFormDirective)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzUpdateHostClassService)); };
/** @nocollapse */ NzFormDirective.ɵdir = ɵɵdefineDirective({ type: NzFormDirective, selectors: [["", "nz-form", ""]], contentQueries: function NzFormDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzFormLabelComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzFormLabelComponent = _t);
    } }, inputs: { nzLayout: "nzLayout", nzNoColon: "nzNoColon" }, exportAs: ["nzForm"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()] });
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzFormDirective.prototype, "nzNoColon", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-form]',
                exportAs: 'nzForm',
                providers: [NzUpdateHostClassService]
            }]
    }], function () { return [{ type: NzConfigService }, { type: ElementRef }, { type: Renderer2 }, { type: NzUpdateHostClassService }]; }, { nzLayout: [{
            type: Input
        }], nzNoColon: [{
            type: Input
        }], nzFormLabelComponent: [{
            type: ContentChildren,
            args: [NzFormLabelComponent, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzFormModule {
}
/** @nocollapse */ NzFormModule.ɵmod = ɵɵdefineNgModule({ type: NzFormModule });
/** @nocollapse */ NzFormModule.ɵinj = ɵɵdefineInjector({ factory: function NzFormModule_Factory(t) { return new (t || NzFormModule)(); }, imports: [[CommonModule, NzGridModule, NzIconModule, LayoutModule, PlatformModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzFormModule, { declarations: [NzFormExtraComponent,
        NzFormLabelComponent,
        NzFormDirective,
        NzFormItemComponent,
        NzFormControlComponent,
        NzFormExplainComponent,
        NzFormTextComponent,
        NzFormSplitComponent], imports: [CommonModule, NzGridModule, NzIconModule, LayoutModule, PlatformModule, NzAddOnModule], exports: [NzFormExtraComponent,
        NzFormLabelComponent,
        NzFormDirective,
        NzFormItemComponent,
        NzFormControlComponent,
        NzFormExplainComponent,
        NzFormTextComponent,
        NzFormSplitComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzFormExtraComponent,
                    NzFormLabelComponent,
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormControlComponent,
                    NzFormExplainComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                exports: [
                    NzFormExtraComponent,
                    NzFormLabelComponent,
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormControlComponent,
                    NzFormExplainComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                imports: [CommonModule, NzGridModule, NzIconModule, LayoutModule, PlatformModule, NzAddOnModule]
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

export { NzFormControlComponent, NzFormDirective, NzFormExplainComponent, NzFormExtraComponent, NzFormItemComponent, NzFormLabelComponent, NzFormModule, NzFormSplitComponent, NzFormTextComponent };
//# sourceMappingURL=ng-zorro-antd-form.js.map
