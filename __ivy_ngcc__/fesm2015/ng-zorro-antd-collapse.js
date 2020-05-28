import { __decorate, __metadata } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, EventEmitter, ChangeDetectorRef, Host, ElementRef, Renderer2, Output, NgModule } from '@angular/core';
import { NzConfigService, WithConfig, InputBoolean, collapseMotion, NzAddOnModule } from 'ng-zorro-antd/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/icon';

const _c0 = ["*"];
function NzCollapsePanelComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵelement(2, "i", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzType", ctx_r3.nzExpandedIcon || "right")("nzRotate", ctx_r3.nzActive ? 90 : 0);
} }
function NzCollapsePanelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzCollapsePanelComponent_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzExpandedIcon);
} }
function NzCollapsePanelComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.nzHeader, " ");
} }
function NzCollapsePanelComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.nzExtra);
} }
function NzCollapsePanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, NzCollapsePanelComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzExtra);
} }
const NZ_CONFIG_COMPONENT_NAME = 'collapse';
class NzCollapseComponent {
    /**
     * @param {?} nzConfigService
     */
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.listOfNzCollapsePanelComponent = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    click(collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item !== collapse))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            }));
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    }
}
NzCollapseComponent.ɵfac = function NzCollapseComponent_Factory(t) { return new (t || NzCollapseComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService)); };
NzCollapseComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCollapseComponent, selectors: [["nz-collapse"]], inputs: { nzAccordion: "nzAccordion", nzBordered: "nzBordered" }, exportAs: ["nzCollapse"], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "ant-collapse"]], template: function NzCollapseComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-collapse-borderless", !ctx.nzBordered);
    } }, styles: ["\n      nz-collapse {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzCollapseComponent.ctorParameters = () => [
    { type: NzConfigService }
];
NzCollapseComponent.propDecorators = {
    nzAccordion: [{ type: Input }],
    nzBordered: [{ type: Input }]
};
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzAccordion", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    __metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzBordered", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCollapseComponent.prototype.listOfNzCollapsePanelComponent;
    /** @type {?} */
    NzCollapseComponent.prototype.nzAccordion;
    /** @type {?} */
    NzCollapseComponent.prototype.nzBordered;
    /** @type {?} */
    NzCollapseComponent.prototype.nzConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME$1 = 'collapsePanel';
class NzCollapsePanelComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} nzCollapseComponent
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(nzConfigService, cdr, nzCollapseComponent, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzCollapseComponent = nzCollapseComponent;
        this.nzActive = false;
        this.nzDisabled = false;
        this.nzHeadingAriaLabel = null;
        this.nzRole = 'tab';
        this.nzActiveChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
    }
    /**
     * @return {?}
     */
    clickHeader() {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzCollapseComponent.addPanel(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nzCollapseComponent.removePanel(this);
    }
}
NzCollapsePanelComponent.ɵfac = function NzCollapsePanelComponent_Factory(t) { return new (t || NzCollapsePanelComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(NzCollapseComponent, 1), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzCollapsePanelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCollapsePanelComponent, selectors: [["nz-collapse-panel"]], hostVars: 6, hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
    } }, inputs: { nzActive: "nzActive", nzDisabled: "nzDisabled", nzHeadingAriaLabel: "nzHeadingAriaLabel", nzRole: "nzRole", nzShowArrow: "nzShowArrow", nzExtra: "nzExtra", nzHeader: "nzHeader", nzExpandedIcon: "nzExpandedIcon" }, outputs: { nzActiveChange: "nzActiveChange" }, exportAs: ["nzCollapsePanel"], ngContentSelectors: _c0, decls: 8, vars: 13, consts: [[1, "ant-collapse-header", 2, "display", "flex", "justify-content", "space-between"], [2, "flex", "1", 3, "tabindex", "keyup.enter", "keyup.Space", "click"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-collapse-extra", 4, "ngIf"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box", 3, "hidden"], ["aria-hidden", "true", 1, "ant-collapse-arrow-link"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"], [1, "ant-collapse-extra"]], template: function NzCollapsePanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵlistener("keyup.enter", function NzCollapsePanelComponent_Template_div_keyup_enter_1_listener() { return ctx.clickHeader(); })("keyup.Space", function NzCollapsePanelComponent_Template_div_keyup_Space_1_listener() { return ctx.clickHeader(); })("click", function NzCollapsePanelComponent_Template_div_click_1_listener() { return ctx.clickHeader(); });
        ɵngcc0.ɵɵtemplate(2, NzCollapsePanelComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(3, NzCollapsePanelComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NzCollapsePanelComponent_div_4_Template, 2, 1, "div", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵprojection(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("role", ctx.nzHeadingAriaLabel ? "heading" : null)("aria-label", ctx.nzHeadingAriaLabel)("aria-level", ctx.nzHeadingAriaLabel ? 4 : null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("tabindex", ctx.nzDisabled ? 0 - 1 : 0);
        ɵngcc0.ɵɵattribute("role", ctx.nzRole)("aria-expanded", ctx.nzActive);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowArrow);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzHeader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzExtra);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ant-collapse-content-active", ctx.nzActive);
        ɵngcc0.ɵɵproperty("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("hidden", !ctx.nzActive);
    } }, directives: [ɵngcc2.NgIf, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc3.NzIconDirective], styles: ["\n      nz-collapse-panel {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [collapseMotion] }, changeDetection: 0 });
/** @nocollapse */
NzCollapsePanelComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: NzCollapseComponent, decorators: [{ type: Host }] },
    { type: ElementRef },
    { type: Renderer2 }
];
NzCollapsePanelComponent.propDecorators = {
    nzActive: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzShowArrow: [{ type: Input }],
    nzExtra: [{ type: Input }],
    nzHeader: [{ type: Input }],
    nzHeadingAriaLabel: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzRole: [{ type: Input }],
    nzActiveChange: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzActive", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME$1, true), InputBoolean(),
    __metadata("design:type", Boolean)
], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCollapseComponent, [{
        type: Component,
        args: [{
                selector: 'nz-collapse',
                exportAs: 'nzCollapse',
                template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!nzBordered\">\r\n  <ng-content></ng-content>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [`
      nz-collapse {
        display: block;
      }
    `]
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }]; }, { nzAccordion: [{
            type: Input
        }], nzBordered: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCollapsePanelComponent, [{
        type: Component,
        args: [{
                selector: 'nz-collapse-panel',
                exportAs: 'nzCollapsePanel',
                template: "<div class=\"ant-collapse-header\" style=\"display: flex; justify-content: space-between;\" \r\n  [attr.role]=\"nzHeadingAriaLabel ? 'heading' : null\" [attr.aria-label]=\"nzHeadingAriaLabel\"\r\n  [attr.aria-level]=\"nzHeadingAriaLabel ? 4 : null\">\r\n  <div [attr.role]=\"nzRole\" [attr.aria-expanded]=\"nzActive\" style=\"flex: 1;\" (keyup.enter)=\"clickHeader()\" (keyup.Space)=\"clickHeader()\" (click)=\"clickHeader()\" [tabindex]=\"nzDisabled ? -1 : 0\">\r\n    <ng-container *ngIf=\"nzShowArrow\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzExpandedIcon\">\r\n        <a class=\"ant-collapse-arrow-link\" aria-hidden=\"true\">\r\n          <i nz-icon [nzType]=\"nzExpandedIcon || 'right'\" class=\"ant-collapse-arrow\" [nzRotate]=\"nzActive ? 90 : 0\"></i>\r\n        </a>\r\n      </ng-container>\r\n    </ng-container>\r\n    <ng-container *nzStringTemplateOutlet=\"nzHeader\">\r\n      {{ nzHeader }}\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"ant-collapse-extra\" *ngIf=\"nzExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ant-collapse-content\" [class.ant-collapse-content-active]=\"nzActive\"\r\n  [@collapseMotion]=\"nzActive ? 'expanded' : 'hidden' \">\r\n  <div class=\"ant-collapse-content-box\" [hidden]=\"!nzActive\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [collapseMotion],
                host: {
                    '[class.ant-collapse-no-arrow]': '!nzShowArrow',
                    '[class.ant-collapse-item-active]': 'nzActive',
                    '[class.ant-collapse-item-disabled]': 'nzDisabled'
                },
                styles: [`
      nz-collapse-panel {
        display: block;
      }
    `]
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: NzCollapseComponent, decorators: [{
                type: Host
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzActive: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzHeadingAriaLabel: [{
            type: Input
        }], nzRole: [{
            type: Input
        }], nzActiveChange: [{
            type: Output
        }], nzShowArrow: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], nzHeader: [{
            type: Input
        }], nzExpandedIcon: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActive;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzExtra;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzHeader;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzHeadingAriaLabel;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzRole;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActiveChange;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCollapsePanelComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCollapsePanelComponent.prototype.nzCollapseComponent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCollapseModule {
}
NzCollapseModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCollapseModule });
NzCollapseModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCollapseModule_Factory(t) { return new (t || NzCollapseModule)(); }, imports: [[CommonModule, NzIconModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCollapseModule, { declarations: function () { return [NzCollapsePanelComponent,
        NzCollapseComponent]; }, imports: function () { return [CommonModule, NzIconModule, NzAddOnModule]; }, exports: function () { return [NzCollapsePanelComponent,
        NzCollapseComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCollapseModule, [{
        type: NgModule,
        args: [{
                declarations: [NzCollapsePanelComponent, NzCollapseComponent],
                exports: [NzCollapsePanelComponent, NzCollapseComponent],
                imports: [CommonModule, NzIconModule, NzAddOnModule]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzCollapseComponent, NzCollapseModule, NzCollapsePanelComponent };

//# sourceMappingURL=ng-zorro-antd-collapse.js.map