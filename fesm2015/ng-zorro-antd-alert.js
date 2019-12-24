import { __decorate, __metadata } from 'tslib';
import { ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵelementContainerStart, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵelementContainerEnd, ɵɵreference, ɵɵadvance, ɵɵtext, ɵɵtextInterpolate, ɵɵelementStart, ɵɵelementEnd, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵclassProp, EventEmitter, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzConfigService, NzStringTemplateOutletDirective, slideAlertMotion, WithConfig, InputBoolean, NzAddOnModule } from 'ng-zorro-antd/core';
import { NgIf, NgClass, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

function NzAlertComponent_div_0_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const ctx_r323 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r323.nzIconType);
} }
function NzAlertComponent_div_0_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 9);
} if (rf & 2) {
    const ctx_r325 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r325.iconType)("nzTheme", ctx_r325.iconTheme);
} }
function NzAlertComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzAlertComponent_div_0_ng_container_1_i_1_Template, 1, 1, "i", 6);
    ɵɵtemplate(2, NzAlertComponent_div_0_ng_container_1_ng_template_2_Template, 1, 2, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r324 = ɵɵreference(3);
    const ctx_r319 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r319.isIconTypeObject)("ngIfElse", _r324);
} }
function NzAlertComponent_div_0_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r326 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r326.nzMessage);
} }
function NzAlertComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtemplate(1, NzAlertComponent_div_0_span_2_ng_container_1_Template, 2, 1, "ng-container", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r320 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r320.nzMessage);
} }
function NzAlertComponent_div_0_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r327 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r327.nzDescription);
} }
function NzAlertComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, NzAlertComponent_div_0_span_3_ng_container_1_Template, 2, 1, "ng-container", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r321 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r321.nzDescription);
} }
function NzAlertComponent_div_0_a_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 16);
} }
function NzAlertComponent_div_0_a_4_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r331 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r331.nzCloseText);
} }
function NzAlertComponent_div_0_a_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzAlertComponent_div_0_a_4_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r330 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r330.nzCloseText);
} }
function NzAlertComponent_div_0_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r333 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 13);
    ɵɵlistener("click", function NzAlertComponent_div_0_a_4_Template_a_click_0_listener($event) { ɵɵrestoreView(_r333); const ctx_r332 = ɵɵnextContext(2); return ctx_r332.closeAlert(); });
    ɵɵtemplate(1, NzAlertComponent_div_0_a_4_ng_template_1_Template, 1, 0, "ng-template", null, 14, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, NzAlertComponent_div_0_a_4_ng_container_3_Template, 2, 1, "ng-container", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r328 = ɵɵreference(2);
    const ctx_r322 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r322.nzCloseText)("ngIfElse", _r328);
} }
function NzAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r335 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("@slideAlertMotion.done", function NzAlertComponent_div_0_Template_div_animation_slideAlertMotion_done_0_listener($event) { ɵɵrestoreView(_r335); const ctx_r334 = ɵɵnextContext(); return ctx_r334.onFadeAnimationDone(); });
    ɵɵtemplate(1, NzAlertComponent_div_0_ng_container_1_Template, 4, 2, "ng-container", 2);
    ɵɵtemplate(2, NzAlertComponent_div_0_span_2_Template, 2, 1, "span", 3);
    ɵɵtemplate(3, NzAlertComponent_div_0_span_3_Template, 2, 1, "span", 4);
    ɵɵtemplate(4, NzAlertComponent_div_0_a_4_Template, 4, 2, "a", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r318 = ɵɵnextContext();
    ɵɵclassProp("ant-alert-success", ctx_r318.nzType === "success")("ant-alert-info", ctx_r318.nzType === "info")("ant-alert-warning", ctx_r318.nzType === "warning")("ant-alert-error", ctx_r318.nzType === "error")("ant-alert-no-icon", !ctx_r318.nzShowIcon)("ant-alert-banner", ctx_r318.nzBanner)("ant-alert-closable", ctx_r318.nzCloseable)("ant-alert-with-description", !!ctx_r318.nzDescription);
    ɵɵproperty("@slideAlertMotion", undefined);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r318.nzShowIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r318.nzMessage);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r318.nzDescription);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r318.nzCloseable || ctx_r318.nzCloseText);
} }
const NZ_CONFIG_COMPONENT_NAME = 'alert';
class NzAlertComponent {
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzType = 'info';
        this.nzBanner = false;
        this.nzOnClose = new EventEmitter();
        this.destroy = false;
        this.iconTheme = 'fill';
        this.isIconTypeObject = false;
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.inferredIconType = 'info-circle';
    }
    get iconType() {
        return this.nzIconType || this.inferredIconType;
    }
    closeAlert() {
        this.destroy = true;
    }
    onFadeAnimationDone() {
        if (this.destroy) {
            this.nzOnClose.emit(true);
        }
    }
    updateIconClassMap() {
        switch (this.nzType) {
            case 'error':
                this.inferredIconType = 'close-circle';
                break;
            case 'success':
                this.inferredIconType = 'check-circle';
                break;
            case 'info':
                this.inferredIconType = 'info-circle';
                break;
            case 'warning':
                this.inferredIconType = 'exclamation-circle';
                break;
        }
        this.iconTheme = this.nzDescription ? 'outline' : 'fill';
    }
    ngOnChanges(changes) {
        const { nzShowIcon, nzDescription, nzType, nzBanner, nzIconType } = changes;
        if (nzShowIcon) {
            this.isShowIconSet = true;
        }
        if (nzDescription || nzType) {
            this.updateIconClassMap();
        }
        if (nzType) {
            this.isTypeSet = true;
        }
        if (nzBanner) {
            if (!this.isTypeSet) {
                this.nzType = 'warning';
            }
            if (!this.isShowIconSet) {
                this.nzShowIcon = true;
            }
        }
        if (nzIconType) {
            this.isIconTypeObject = typeof nzIconType.currentValue === 'object';
        }
    }
}
/** @nocollapse */ NzAlertComponent.ɵfac = function NzAlertComponent_Factory(t) { return new (t || NzAlertComponent)(ɵɵdirectiveInject(NzConfigService)); };
/** @nocollapse */ NzAlertComponent.ɵcmp = ɵɵdefineComponent({ type: NzAlertComponent, selectors: [["nz-alert"]], inputs: { nzCloseText: "nzCloseText", nzIconType: "nzIconType", nzMessage: "nzMessage", nzDescription: "nzDescription", nzType: "nzType", nzCloseable: "nzCloseable", nzShowIcon: "nzShowIcon", nzBanner: "nzBanner" }, outputs: { nzOnClose: "nzOnClose" }, exportAs: ["nzAlert"], features: [ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [["class", "ant-alert", 3, "ant-alert-success", "ant-alert-info", "ant-alert-warning", "ant-alert-error", "ant-alert-no-icon", "ant-alert-banner", "ant-alert-closable", "ant-alert-with-description", 4, "ngIf"], [1, "ant-alert"], [4, "ngIf"], ["class", "ant-alert-message", 4, "ngIf"], ["class", "ant-alert-description", 4, "ngIf"], ["class", "ant-alert-close-icon", 3, "click", 4, "ngIf"], ["class", "ant-alert-icon", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["iconTemplate", ""], [1, "ant-alert-icon", 3, "ngClass"], ["nz-icon", "", 1, "ant-alert-icon", 3, "nzType", "nzTheme"], [1, "ant-alert-message"], [4, "nzStringTemplateOutlet"], [1, "ant-alert-description"], [1, "ant-alert-close-icon", 3, "click"], ["closeDefaultTemplate", ""], [4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]], template: function NzAlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NzAlertComponent_div_0_Template, 5, 13, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.destroy);
    } }, directives: [NgIf, NgClass, NzIconDirective, NzStringTemplateOutletDirective], styles: ["\n      nz-alert {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [slideAlertMotion] }, changeDetection: 0 });
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzAlertComponent.prototype, "nzCloseable", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzAlertComponent.prototype, "nzShowIcon", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAlertComponent.prototype, "nzBanner", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAlertComponent, [{
        type: Component,
        args: [{
                selector: 'nz-alert',
                exportAs: 'nzAlert',
                animations: [slideAlertMotion],
                templateUrl: './nz-alert.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [
                    `
      nz-alert {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: NzConfigService }]; }, { nzCloseText: [{
            type: Input
        }], nzIconType: [{
            type: Input
        }], nzMessage: [{
            type: Input
        }], nzDescription: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzCloseable: [{
            type: Input
        }], nzShowIcon: [{
            type: Input
        }], nzBanner: [{
            type: Input
        }], nzOnClose: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzAlertModule {
}
/** @nocollapse */ NzAlertModule.ɵmod = ɵɵdefineNgModule({ type: NzAlertModule });
/** @nocollapse */ NzAlertModule.ɵinj = ɵɵdefineInjector({ factory: function NzAlertModule_Factory(t) { return new (t || NzAlertModule)(); }, imports: [[CommonModule, NzIconModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzAlertModule, { declarations: [NzAlertComponent], imports: [CommonModule, NzIconModule, NzAddOnModule], exports: [NzAlertComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAlertModule, [{
        type: NgModule,
        args: [{
                declarations: [NzAlertComponent],
                exports: [NzAlertComponent],
                imports: [CommonModule, NzIconModule, NzAddOnModule]
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

export { NzAlertComponent, NzAlertModule };
//# sourceMappingURL=ng-zorro-antd-alert.js.map
