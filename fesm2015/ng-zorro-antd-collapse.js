import { __decorate, __metadata } from 'tslib';
import { ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵɵclassProp, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ɵɵelementContainerStart, ɵɵelement, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵproperty, ɵɵtemplate, ɵɵtext, ɵɵtextInterpolate, EventEmitter, ChangeDetectorRef, ElementRef, Renderer2, ɵɵallocHostVars, ɵɵlistener, ɵɵattribute, Host, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzConfigService, WithConfig, InputBoolean, NzStringTemplateOutletDirective, collapseMotion, NzAddOnModule } from 'ng-zorro-antd/core';
import { NgIf, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

const _c0 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'collapse';
class NzCollapseComponent {
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.listOfNzCollapsePanelComponent = [];
    }
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    click(collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent
                .filter(item => item !== collapse)
                .forEach(item => {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            });
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    }
}
/** @nocollapse */ NzCollapseComponent.ɵfac = function NzCollapseComponent_Factory(t) { return new (t || NzCollapseComponent)(ɵɵdirectiveInject(NzConfigService)); };
/** @nocollapse */ NzCollapseComponent.ɵcmp = ɵɵdefineComponent({ type: NzCollapseComponent, selectors: [["nz-collapse"]], inputs: { nzAccordion: "nzAccordion", nzBordered: "nzBordered" }, exportAs: ["nzCollapse"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "ant-collapse"]], template: function NzCollapseComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("ant-collapse-borderless", !ctx.nzBordered);
    } }, styles: ["\n      nz-collapse {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzAccordion", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    __metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzBordered", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCollapseComponent, [{
        type: Component,
        args: [{
                selector: 'nz-collapse',
                exportAs: 'nzCollapse',
                templateUrl: './nz-collapse.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [
                    `
      nz-collapse {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: NzConfigService }]; }, { nzAccordion: [{
            type: Input
        }], nzBordered: [{
            type: Input
        }] }); })();

function NzCollapsePanelComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "i", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r385 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzType", ctx_r385.nzExpandedIcon || "right")("nzRotate", ctx_r385.nzActive ? 90 : 0);
} }
function NzCollapsePanelComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzCollapsePanelComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r382 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r382.nzExpandedIcon);
} }
function NzCollapsePanelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r383 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r383.nzHeader);
} }
function NzCollapsePanelComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r386 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r386.nzExtra);
} }
function NzCollapsePanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, NzCollapsePanelComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r384 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r384.nzExtra);
} }
const _c0$1 = ["*"];
const NZ_CONFIG_COMPONENT_NAME$1 = 'collapsePanel';
class NzCollapsePanelComponent {
    constructor(nzConfigService, cdr, nzCollapseComponent, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzCollapseComponent = nzCollapseComponent;
        this.nzActive = false;
        this.nzDisabled = false;
        this.nzActiveChange = new EventEmitter();
        this.nzRole = "tab";
        renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
    }
    clickHeader() {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.nzCollapseComponent.addPanel(this);
    }
    ngOnDestroy() {
        this.nzCollapseComponent.removePanel(this);
    }
}
/** @nocollapse */ NzCollapsePanelComponent.ɵfac = function NzCollapsePanelComponent_Factory(t) { return new (t || NzCollapsePanelComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzCollapseComponent, 1), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzCollapsePanelComponent.ɵcmp = ɵɵdefineComponent({ type: NzCollapsePanelComponent, selectors: [["nz-collapse-panel"]], hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(3);
    } if (rf & 2) {
        ɵɵclassProp("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
    } }, inputs: { nzActive: "nzActive", nzDisabled: "nzDisabled", nzShowArrow: "nzShowArrow", nzExtra: "nzExtra", nzHeader: "nzHeader", nzExpandedIcon: "nzExpandedIcon", nzRole: "nzRole" }, outputs: { nzActiveChange: "nzActiveChange" }, exportAs: ["nzCollapsePanel"], ngContentSelectors: _c0$1, decls: 7, vars: 7, consts: [[1, "ant-collapse-header", 3, "click"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-collapse-extra", 4, "ngIf"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"], [1, "ant-collapse-extra"]], template: function NzCollapsePanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function NzCollapsePanelComponent_Template_div_click_0_listener($event) { return ctx.clickHeader(); });
        ɵɵtemplate(1, NzCollapsePanelComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵɵtemplate(2, NzCollapsePanelComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        ɵɵtemplate(3, NzCollapsePanelComponent_div_3_Template, 2, 1, "div", 3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵprojection(6);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵattribute("role", ctx.nzRole)("aria-expanded", ctx.nzActive);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzShowArrow);
        ɵɵadvance(1);
        ɵɵproperty("nzStringTemplateOutlet", ctx.nzHeader);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzExtra);
        ɵɵadvance(1);
        ɵɵclassProp("ant-collapse-content-active", ctx.nzActive);
        ɵɵproperty("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
    } }, directives: [NgIf, NzStringTemplateOutletDirective, NzIconDirective], styles: ["\n      nz-collapse-panel {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [collapseMotion] }, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCollapsePanelComponent, [{
        type: Component,
        args: [{
                selector: 'nz-collapse-panel',
                exportAs: 'nzCollapsePanel',
                templateUrl: './nz-collapse-panel.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [collapseMotion],
                styles: [
                    `
      nz-collapse-panel {
        display: block;
      }
    `
                ],
                host: {
                    '[class.ant-collapse-no-arrow]': '!nzShowArrow',
                    '[class.ant-collapse-item-active]': 'nzActive',
                    '[class.ant-collapse-item-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: NzConfigService }, { type: ChangeDetectorRef }, { type: NzCollapseComponent, decorators: [{
                type: Host
            }] }, { type: ElementRef }, { type: Renderer2 }]; }, { nzActive: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzShowArrow: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], nzHeader: [{
            type: Input
        }], nzExpandedIcon: [{
            type: Input
        }], nzActiveChange: [{
            type: Output
        }], nzRole: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCollapseModule {
}
/** @nocollapse */ NzCollapseModule.ɵmod = ɵɵdefineNgModule({ type: NzCollapseModule });
/** @nocollapse */ NzCollapseModule.ɵinj = ɵɵdefineInjector({ factory: function NzCollapseModule_Factory(t) { return new (t || NzCollapseModule)(); }, imports: [[CommonModule, NzIconModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzCollapseModule, { declarations: [NzCollapsePanelComponent, NzCollapseComponent], imports: [CommonModule, NzIconModule, NzAddOnModule], exports: [NzCollapsePanelComponent, NzCollapseComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCollapseModule, [{
        type: NgModule,
        args: [{
                declarations: [NzCollapsePanelComponent, NzCollapseComponent],
                exports: [NzCollapsePanelComponent, NzCollapseComponent],
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

export { NzCollapseComponent, NzCollapseModule, NzCollapsePanelComponent };
//# sourceMappingURL=ng-zorro-antd-collapse.js.map
