import { __decorate, __metadata } from 'tslib';
import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵallocHostVars, ɵɵclassProp, ɵsetClassMetadata, Directive, Input, ɵɵprojection, ɵɵdefineComponent, ɵɵstaticViewQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵprojectionDef, ɵɵtemplate, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵproperty, ɵɵstyleProp, ɵɵcontentQuery, ContentChild, ContentChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { InputBoolean, NzConfigService, NzStringTemplateOutletDirective, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { NgIf, NgStyle, NgTemplateOutlet, NgForOf, CommonModule } from '@angular/common';

var NzCardGridDirective = /** @class */ (function () {
    function NzCardGridDirective(elementRef, renderer) {
        this.nzHoverable = true;
        renderer.addClass(elementRef.nativeElement, 'ant-card-grid');
    }
    /** @nocollapse */ NzCardGridDirective.ɵfac = function NzCardGridDirective_Factory(t) { return new (t || NzCardGridDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzCardGridDirective.ɵdir = ɵɵdefineDirective({ type: NzCardGridDirective, selectors: [["", "nz-card-grid", ""]], hostBindings: function NzCardGridDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-card-hoverable", ctx.nzHoverable);
        } }, inputs: { nzHoverable: "nzHoverable" }, exportAs: ["nzCardGrid"] });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardGridDirective.prototype, "nzHoverable", void 0);
    return NzCardGridDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCardGridDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-card-grid]',
                exportAs: 'nzCardGrid',
                host: {
                    '[class.ant-card-hoverable]': 'nzHoverable'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { nzHoverable: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzCardTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
var _c0 = ["*"];
var NzCardTabComponent = /** @class */ (function () {
    function NzCardTabComponent() {
    }
    /** @nocollapse */ NzCardTabComponent.ɵfac = function NzCardTabComponent_Factory(t) { return new (t || NzCardTabComponent)(); };
    /** @nocollapse */ NzCardTabComponent.ɵcmp = ɵɵdefineComponent({ type: NzCardTabComponent, selectors: [["nz-card-tab"]], viewQuery: function NzCardTabComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(TemplateRef, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        } }, exportAs: ["nzCardTab"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCardTabComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzCardTabComponent_ng_template_0_Template, 1, 0, "ng-template");
        } }, encapsulation: 2, changeDetection: 0 });
    return NzCardTabComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCardTabComponent, [{
        type: Component,
        args: [{
                selector: 'nz-card-tab',
                exportAs: 'nzCardTab',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-card-tab.component.html'
            }]
    }], null, { template: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzCardLoadingComponent = /** @class */ (function () {
    function NzCardLoadingComponent(elementRef, renderer) {
        renderer.addClass(elementRef.nativeElement, 'ant-card-loading-content');
    }
    /** @nocollapse */ NzCardLoadingComponent.ɵfac = function NzCardLoadingComponent_Factory(t) { return new (t || NzCardLoadingComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzCardLoadingComponent.ɵcmp = ɵɵdefineComponent({ type: NzCardLoadingComponent, selectors: [["nz-card-loading"]], exportAs: ["nzCardLoading"], decls: 33, vars: 0, consts: [[1, "ant-card-loading-content"], [1, "ant-row", 2, "margin-left", "-4px", "margin-right", "-4px"], [1, "ant-col-22", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-card-loading-block"], [1, "ant-col-8", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-15", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-6", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-18", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-13", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-9", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-4", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-3", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-16", 2, "padding-left", "4px", "padding-right", "4px"]], template: function NzCardLoadingComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵelement(3, "div", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(4, "div", 1);
            ɵɵelementStart(5, "div", 4);
            ɵɵelement(6, "div", 3);
            ɵɵelementEnd();
            ɵɵelementStart(7, "div", 5);
            ɵɵelement(8, "div", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(9, "div", 1);
            ɵɵelementStart(10, "div", 6);
            ɵɵelement(11, "div", 3);
            ɵɵelementEnd();
            ɵɵelementStart(12, "div", 7);
            ɵɵelement(13, "div", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(14, "div", 1);
            ɵɵelementStart(15, "div", 8);
            ɵɵelement(16, "div", 3);
            ɵɵelementEnd();
            ɵɵelementStart(17, "div", 9);
            ɵɵelement(18, "div", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(19, "div", 1);
            ɵɵelementStart(20, "div", 10);
            ɵɵelement(21, "div", 3);
            ɵɵelementEnd();
            ɵɵelementStart(22, "div", 11);
            ɵɵelement(23, "div", 3);
            ɵɵelementEnd();
            ɵɵelementStart(24, "div", 12);
            ɵɵelement(25, "div", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(26, "div", 1);
            ɵɵelementStart(27, "div", 4);
            ɵɵelement(28, "div", 3);
            ɵɵelementEnd();
            ɵɵelementStart(29, "div", 6);
            ɵɵelement(30, "div", 3);
            ɵɵelementEnd();
            ɵɵelementStart(31, "div", 4);
            ɵɵelement(32, "div", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, styles: ["\n      nz-card-loading {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    return NzCardLoadingComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCardLoadingComponent, [{
        type: Component,
        args: [{
                selector: 'nz-card-loading',
                exportAs: 'nzCardLoading',
                templateUrl: './nz-card-loading.component.html',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [
                    "\n      nz-card-loading {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

function NzCardComponent_div_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r98 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r98.nzTitle);
} }
function NzCardComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, NzCardComponent_div_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r95 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r95.nzTitle);
} }
function NzCardComponent_div_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r99 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r99.nzExtra);
} }
function NzCardComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, NzCardComponent_div_0_div_3_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r96 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r96.nzExtra);
} }
function NzCardComponent_div_0_ng_container_4_ng_template_1_Template(rf, ctx) { }
function NzCardComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzCardComponent_div_0_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 12);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r97 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r97.tab.template);
} }
function NzCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelementStart(1, "div", 6);
    ɵɵtemplate(2, NzCardComponent_div_0_div_2_Template, 2, 1, "div", 7);
    ɵɵtemplate(3, NzCardComponent_div_0_div_3_Template, 2, 1, "div", 8);
    ɵɵelementEnd();
    ɵɵtemplate(4, NzCardComponent_div_0_ng_container_4_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r90 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r90.nzTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r90.nzExtra);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r90.tab);
} }
function NzCardComponent_div_1_ng_template_1_Template(rf, ctx) { }
function NzCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, NzCardComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r91 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r91.nzCover);
} }
function NzCardComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
} }
function NzCardComponent_nz_card_loading_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-card-loading");
} }
function NzCardComponent_ul_5_li_1_ng_template_2_Template(rf, ctx) { }
function NzCardComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelementStart(1, "span");
    ɵɵtemplate(2, NzCardComponent_ul_5_li_1_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var action_r103 = ctx.$implicit;
    var ctx_r102 = ɵɵnextContext(2);
    ɵɵstyleProp("width", 100 / ctx_r102.nzActions.length, "%");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", action_r103);
} }
function NzCardComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 14);
    ɵɵtemplate(1, NzCardComponent_ul_5_li_1_Template, 3, 2, "li", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r94 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r94.nzActions);
} }
var _c0$1 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'card';
var NzCardComponent = /** @class */ (function () {
    function NzCardComponent(nzConfigService, renderer, elementRef) {
        this.nzConfigService = nzConfigService;
        this.nzLoading = false;
        this.nzActions = [];
        renderer.addClass(elementRef.nativeElement, 'ant-card');
    }
    /** @nocollapse */ NzCardComponent.ɵfac = function NzCardComponent_Factory(t) { return new (t || NzCardComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
    /** @nocollapse */ NzCardComponent.ɵcmp = ɵɵdefineComponent({ type: NzCardComponent, selectors: [["nz-card"]], contentQueries: function NzCardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzCardTabComponent, true);
            ɵɵcontentQuery(dirIndex, NzCardGridDirective, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tab = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.grids = _t);
        } }, hostBindings: function NzCardComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(7);
        } if (rf & 2) {
            ɵɵclassProp("ant-card-loading", ctx.nzLoading)("ant-card-bordered", ctx.nzBordered)("ant-card-hoverable", ctx.nzHoverable)("ant-card-small", ctx.nzSize === "small")("ant-card-contain-grid", ctx.grids && ctx.grids.length)("ant-card-type-inner", ctx.nzType === "inner")("ant-card-contain-tabs", !!ctx.tab);
        } }, inputs: { nzBordered: "nzBordered", nzLoading: "nzLoading", nzHoverable: "nzHoverable", nzBodyStyle: "nzBodyStyle", nzCover: "nzCover", nzActions: "nzActions", nzType: "nzType", nzSize: "nzSize", nzTitle: "nzTitle", nzExtra: "nzExtra" }, exportAs: ["nzCard"], ngContentSelectors: _c0$1, decls: 6, vars: 6, consts: [["class", "ant-card-head", 4, "ngIf"], ["class", "ant-card-cover", 4, "ngIf"], [1, "ant-card-body", 3, "ngStyle"], [4, "ngIf"], ["class", "ant-card-actions", 4, "ngIf"], [1, "ant-card-head"], [1, "ant-card-head-wrapper"], ["class", "ant-card-head-title", 4, "ngIf"], ["class", "ant-card-extra", 4, "ngIf"], [1, "ant-card-head-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-extra"], [3, "ngTemplateOutlet"], [1, "ant-card-cover"], [1, "ant-card-actions"], [3, "width", 4, "ngFor", "ngForOf"]], template: function NzCardComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzCardComponent_div_0_Template, 5, 3, "div", 0);
            ɵɵtemplate(1, NzCardComponent_div_1_Template, 2, 1, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵtemplate(3, NzCardComponent_ng_container_3_Template, 2, 0, "ng-container", 3);
            ɵɵtemplate(4, NzCardComponent_nz_card_loading_4_Template, 1, 0, "nz-card-loading", 3);
            ɵɵelementEnd();
            ɵɵtemplate(5, NzCardComponent_ul_5_Template, 2, 1, "ul", 4);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzExtra || ctx.tab);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzCover);
            ɵɵadvance(1);
            ɵɵproperty("ngStyle", ctx.nzBodyStyle);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.nzLoading);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzLoading);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzActions.length);
        } }, directives: [NgIf, NgStyle, NzStringTemplateOutletDirective, NgTemplateOutlet, NzCardLoadingComponent, NgForOf], styles: ["\n      nz-card {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzBordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCardComponent.prototype, "nzLoading", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzHoverable", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", String)
    ], NzCardComponent.prototype, "nzSize", void 0);
    return NzCardComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCardComponent, [{
        type: Component,
        args: [{
                selector: 'nz-card',
                exportAs: 'nzCard',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-card.component.html',
                styles: [
                    "\n      nz-card {\n        display: block;\n      }\n    "
                ],
                host: {
                    '[class.ant-card-loading]': 'nzLoading',
                    '[class.ant-card-bordered]': 'nzBordered',
                    '[class.ant-card-hoverable]': 'nzHoverable',
                    '[class.ant-card-small]': 'nzSize === "small"',
                    '[class.ant-card-contain-grid]': 'grids && grids.length',
                    '[class.ant-card-type-inner]': 'nzType === "inner"',
                    '[class.ant-card-contain-tabs]': '!!tab'
                }
            }]
    }], function () { return [{ type: NzConfigService }, { type: Renderer2 }, { type: ElementRef }]; }, { nzBordered: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzHoverable: [{
            type: Input
        }], nzBodyStyle: [{
            type: Input
        }], nzCover: [{
            type: Input
        }], nzActions: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], tab: [{
            type: ContentChild,
            args: [NzCardTabComponent, { static: false }]
        }], grids: [{
            type: ContentChildren,
            args: [NzCardGridDirective]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzCardMetaComponent_div_0_ng_template_1_Template(rf, ctx) { }
function NzCardMetaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, NzCardMetaComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r105 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r105.nzAvatar);
} }
function NzCardMetaComponent_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r110 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r110.nzTitle);
} }
function NzCardMetaComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, NzCardMetaComponent_div_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r108 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r108.nzTitle);
} }
function NzCardMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r111 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r111.nzDescription);
} }
function NzCardMetaComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, NzCardMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r109 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r109.nzDescription);
} }
function NzCardMetaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, NzCardMetaComponent_div_1_div_1_Template, 2, 1, "div", 5);
    ɵɵtemplate(2, NzCardMetaComponent_div_1_div_2_Template, 2, 1, "div", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r106 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r106.nzTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r106.nzDescription);
} }
var NzCardMetaComponent = /** @class */ (function () {
    function NzCardMetaComponent(elementRef, renderer) {
        renderer.addClass(elementRef.nativeElement, 'ant-card-meta');
    }
    /** @nocollapse */ NzCardMetaComponent.ɵfac = function NzCardMetaComponent_Factory(t) { return new (t || NzCardMetaComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzCardMetaComponent.ɵcmp = ɵɵdefineComponent({ type: NzCardMetaComponent, selectors: [["nz-card-meta"]], inputs: { nzTitle: "nzTitle", nzDescription: "nzDescription", nzAvatar: "nzAvatar" }, exportAs: ["nzCardMeta"], decls: 2, vars: 2, consts: [["class", "ant-card-meta-avatar", 4, "ngIf"], ["class", "ant-card-meta-detail", 4, "ngIf"], [1, "ant-card-meta-avatar"], [3, "ngTemplateOutlet"], [1, "ant-card-meta-detail"], ["class", "ant-card-meta-title", 4, "ngIf"], ["class", "ant-card-meta-description", 4, "ngIf"], [1, "ant-card-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-meta-description"]], template: function NzCardMetaComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzCardMetaComponent_div_0_Template, 2, 1, "div", 0);
            ɵɵtemplate(1, NzCardMetaComponent_div_1_Template, 3, 2, "div", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.nzAvatar);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzDescription);
        } }, directives: [NgIf, NgTemplateOutlet, NzStringTemplateOutletDirective], styles: ["\n      nz-card-meta {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    return NzCardMetaComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCardMetaComponent, [{
        type: Component,
        args: [{
                selector: 'nz-card-meta',
                exportAs: 'nzCardMeta',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-card-meta.component.html',
                styles: [
                    "\n      nz-card-meta {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { nzTitle: [{
            type: Input
        }], nzDescription: [{
            type: Input
        }], nzAvatar: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzCardModule = /** @class */ (function () {
    function NzCardModule() {
    }
    /** @nocollapse */ NzCardModule.ɵmod = ɵɵdefineNgModule({ type: NzCardModule });
    /** @nocollapse */ NzCardModule.ɵinj = ɵɵdefineInjector({ factory: function NzCardModule_Factory(t) { return new (t || NzCardModule)(); }, imports: [[CommonModule, NzAddOnModule]] });
    return NzCardModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzCardModule, { declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent], imports: [CommonModule, NzAddOnModule], exports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCardModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule],
                declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent],
                exports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent]
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

export { NzCardComponent, NzCardGridDirective, NzCardLoadingComponent, NzCardMetaComponent, NzCardModule, NzCardTabComponent };
//# sourceMappingURL=ng-zorro-antd-card.js.map
