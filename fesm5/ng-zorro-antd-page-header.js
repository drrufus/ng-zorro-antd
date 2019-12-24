import { Location, NgIf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { ɵɵdefineDirective, ɵɵelementHostAttrs, ɵsetClassMetadata, Directive, ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵelementContainer, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵtemplate, ɵɵelementEnd, ɵɵadvance, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵtextInterpolate, ɵɵprojection, EventEmitter, TemplateRef, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵclassProp, ɵɵNgOnChangesFeature, ɵɵprojectionDef, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ContentChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzConfigService, NzStringTemplateOutletDirective, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { __decorate, __metadata } from 'tslib';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0 = [1, "ant-page-header-heading-title"];
var _c1 = [1, "ant-page-header-heading-sub-title"];
var _c2 = [1, "ant-page-header-content"];
var _c3 = [1, "ant-page-header-heading-tags"];
var _c4 = [1, "ant-page-header-heading-extra"];
var _c5 = [1, "ant-page-header-footer"];
var NzPageHeaderTitleDirective = /** @class */ (function () {
    function NzPageHeaderTitleDirective() {
    }
    /** @nocollapse */ NzPageHeaderTitleDirective.ɵfac = function NzPageHeaderTitleDirective_Factory(t) { return new (t || NzPageHeaderTitleDirective)(); };
    /** @nocollapse */ NzPageHeaderTitleDirective.ɵdir = ɵɵdefineDirective({ type: NzPageHeaderTitleDirective, selectors: [["nz-page-header-title"], ["", "nz-page-header-title", ""]], hostBindings: function NzPageHeaderTitleDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵelementHostAttrs(_c0);
        } }, exportAs: ["nzPageHeaderTitle"] });
    return NzPageHeaderTitleDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPageHeaderTitleDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-page-header-title, [nz-page-header-title]',
                exportAs: 'nzPageHeaderTitle',
                host: {
                    class: 'ant-page-header-heading-title'
                }
            }]
    }], null, null); })();
var NzPageHeaderSubtitleDirective = /** @class */ (function () {
    function NzPageHeaderSubtitleDirective() {
    }
    /** @nocollapse */ NzPageHeaderSubtitleDirective.ɵfac = function NzPageHeaderSubtitleDirective_Factory(t) { return new (t || NzPageHeaderSubtitleDirective)(); };
    /** @nocollapse */ NzPageHeaderSubtitleDirective.ɵdir = ɵɵdefineDirective({ type: NzPageHeaderSubtitleDirective, selectors: [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]], hostBindings: function NzPageHeaderSubtitleDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵelementHostAttrs(_c1);
        } }, exportAs: ["nzPageHeaderSubtitle"] });
    return NzPageHeaderSubtitleDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPageHeaderSubtitleDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-page-header-subtitle, [nz-page-header-subtitle]',
                exportAs: 'nzPageHeaderSubtitle',
                host: {
                    class: 'ant-page-header-heading-sub-title'
                }
            }]
    }], null, null); })();
var NzPageHeaderContentDirective = /** @class */ (function () {
    function NzPageHeaderContentDirective() {
    }
    /** @nocollapse */ NzPageHeaderContentDirective.ɵfac = function NzPageHeaderContentDirective_Factory(t) { return new (t || NzPageHeaderContentDirective)(); };
    /** @nocollapse */ NzPageHeaderContentDirective.ɵdir = ɵɵdefineDirective({ type: NzPageHeaderContentDirective, selectors: [["nz-page-header-content"], ["", "nz-page-header-content", ""]], hostBindings: function NzPageHeaderContentDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵelementHostAttrs(_c2);
        } }, exportAs: ["nzPageHeaderContent"] });
    return NzPageHeaderContentDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPageHeaderContentDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-page-header-content, [nz-page-header-content]',
                exportAs: 'nzPageHeaderContent',
                host: {
                    class: 'ant-page-header-content'
                }
            }]
    }], null, null); })();
var NzPageHeaderTagDirective = /** @class */ (function () {
    function NzPageHeaderTagDirective() {
    }
    /** @nocollapse */ NzPageHeaderTagDirective.ɵfac = function NzPageHeaderTagDirective_Factory(t) { return new (t || NzPageHeaderTagDirective)(); };
    /** @nocollapse */ NzPageHeaderTagDirective.ɵdir = ɵɵdefineDirective({ type: NzPageHeaderTagDirective, selectors: [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], hostBindings: function NzPageHeaderTagDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵelementHostAttrs(_c3);
        } }, exportAs: ["nzPageHeaderTags"] });
    return NzPageHeaderTagDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPageHeaderTagDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-page-header-tags, [nz-page-header-tags]',
                exportAs: 'nzPageHeaderTags',
                host: {
                    class: 'ant-page-header-heading-tags'
                }
            }]
    }], null, null); })();
var NzPageHeaderExtraDirective = /** @class */ (function () {
    function NzPageHeaderExtraDirective() {
    }
    /** @nocollapse */ NzPageHeaderExtraDirective.ɵfac = function NzPageHeaderExtraDirective_Factory(t) { return new (t || NzPageHeaderExtraDirective)(); };
    /** @nocollapse */ NzPageHeaderExtraDirective.ɵdir = ɵɵdefineDirective({ type: NzPageHeaderExtraDirective, selectors: [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], hostBindings: function NzPageHeaderExtraDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵelementHostAttrs(_c4);
        } }, exportAs: ["nzPageHeaderExtra"] });
    return NzPageHeaderExtraDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPageHeaderExtraDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-page-header-extra, [nz-page-header-extra]',
                exportAs: 'nzPageHeaderExtra',
                host: {
                    class: 'ant-page-header-heading-extra'
                }
            }]
    }], null, null); })();
var NzPageHeaderFooterDirective = /** @class */ (function () {
    function NzPageHeaderFooterDirective() {
    }
    /** @nocollapse */ NzPageHeaderFooterDirective.ɵfac = function NzPageHeaderFooterDirective_Factory(t) { return new (t || NzPageHeaderFooterDirective)(); };
    /** @nocollapse */ NzPageHeaderFooterDirective.ɵdir = ɵɵdefineDirective({ type: NzPageHeaderFooterDirective, selectors: [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], hostBindings: function NzPageHeaderFooterDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵelementHostAttrs(_c5);
        } }, exportAs: ["nzPageHeaderFooter"] });
    return NzPageHeaderFooterDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPageHeaderFooterDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-page-header-footer, [nz-page-header-footer]',
                exportAs: 'nzPageHeaderFooter',
                host: {
                    class: 'ant-page-header-footer'
                }
            }]
    }], null, null); })();
var NzPageHeaderBreadcrumbDirective = /** @class */ (function () {
    function NzPageHeaderBreadcrumbDirective() {
    }
    /** @nocollapse */ NzPageHeaderBreadcrumbDirective.ɵfac = function NzPageHeaderBreadcrumbDirective_Factory(t) { return new (t || NzPageHeaderBreadcrumbDirective)(); };
    /** @nocollapse */ NzPageHeaderBreadcrumbDirective.ɵdir = ɵɵdefineDirective({ type: NzPageHeaderBreadcrumbDirective, selectors: [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], exportAs: ["nzPageHeaderBreadcrumb"] });
    return NzPageHeaderBreadcrumbDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPageHeaderBreadcrumbDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-breadcrumb[nz-page-header-breadcrumb]',
                exportAs: 'nzPageHeaderBreadcrumb'
            }]
    }], null, null); })();
var NzPageHeaderAvatarDirective = /** @class */ (function () {
    function NzPageHeaderAvatarDirective() {
    }
    /** @nocollapse */ NzPageHeaderAvatarDirective.ɵfac = function NzPageHeaderAvatarDirective_Factory(t) { return new (t || NzPageHeaderAvatarDirective)(); };
    /** @nocollapse */ NzPageHeaderAvatarDirective.ɵdir = ɵɵdefineDirective({ type: NzPageHeaderAvatarDirective, selectors: [["nz-avatar", "nz-page-header-avatar", ""]], exportAs: ["nzPageHeaderAvatar"] });
    return NzPageHeaderAvatarDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPageHeaderAvatarDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-avatar[nz-page-header-avatar]',
                exportAs: 'nzPageHeaderAvatar'
            }]
    }], null, null); })();

var _c0$1 = [1, "ant-page-header"];
function NzPageHeaderComponent_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 9);
} if (rf & 2) {
    var ctx_r634 = ɵɵnextContext(2);
    ɵɵproperty("nzType", ctx_r634.nzBackIcon ? ctx_r634.nzBackIcon : "arrow-left");
} }
function NzPageHeaderComponent_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 10);
} if (rf & 2) {
    var ctx_r635 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r635.nzBackIcon);
} }
function NzPageHeaderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r637 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("click", function NzPageHeaderComponent_div_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r637); var ctx_r636 = ɵɵnextContext(); return ctx_r636.onBack(); });
    ɵɵelementStart(1, "div", 6);
    ɵɵtemplate(2, NzPageHeaderComponent_div_2_i_2_Template, 1, 1, "i", 7);
    ɵɵtemplate(3, NzPageHeaderComponent_div_2_ng_container_3_Template, 1, 1, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r629 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r629.isStringBackIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r629.isTemplateRefBackIcon);
} }
function NzPageHeaderComponent_span_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r638 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r638.nzTitle);
} }
function NzPageHeaderComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, NzPageHeaderComponent_span_4_ng_container_1_Template, 2, 1, "ng-container", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r630 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r630.nzTitle);
} }
function NzPageHeaderComponent_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 6, ["*ngIf", "!nzTitle"]);
} }
function NzPageHeaderComponent_span_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r639 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r639.nzSubtitle);
} }
function NzPageHeaderComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtemplate(1, NzPageHeaderComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r632 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r632.nzSubtitle);
} }
function NzPageHeaderComponent_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 7, ["*ngIf", "!nzSubtitle"]);
} }
var _c1$1 = [[["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], [["nz-avatar", "nz-page-header-avatar", ""]], [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], [["nz-page-header-content"], ["", "nz-page-header-content", ""]], [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], [["nz-page-header-title"], ["", "nz-page-header-title", ""]], [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]]];
var _c2$1 = ["nz-breadcrumb[nz-page-header-breadcrumb]", "nz-avatar[nz-page-header-avatar]", "nz-page-header-tags, [nz-page-header-tags]", "nz-page-header-extra, [nz-page-header-extra]", "nz-page-header-content, [nz-page-header-content]", "nz-page-header-footer, [nz-page-header-footer]", "nz-page-header-title, [nz-page-header-title]", "nz-page-header-subtitle, [nz-page-header-subtitle]"];
var NZ_CONFIG_COMPONENT_NAME = 'pageHeader';
var NzPageHeaderComponent = /** @class */ (function () {
    function NzPageHeaderComponent(location, nzConfigService) {
        this.location = location;
        this.nzConfigService = nzConfigService;
        this.isTemplateRefBackIcon = false;
        this.isStringBackIcon = false;
        this.nzBackIcon = null;
        this.nzBack = new EventEmitter();
    }
    NzPageHeaderComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('nzBackIcon')) {
            this.isTemplateRefBackIcon = changes.nzBackIcon.currentValue instanceof TemplateRef;
            this.isStringBackIcon = typeof changes.nzBackIcon.currentValue === 'string';
        }
    };
    NzPageHeaderComponent.prototype.onBack = function () {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            this.location.back();
        }
    };
    /** @nocollapse */ NzPageHeaderComponent.ɵfac = function NzPageHeaderComponent_Factory(t) { return new (t || NzPageHeaderComponent)(ɵɵdirectiveInject(Location), ɵɵdirectiveInject(NzConfigService)); };
    /** @nocollapse */ NzPageHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: NzPageHeaderComponent, selectors: [["nz-page-header"]], contentQueries: function NzPageHeaderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzPageHeaderFooterDirective, true);
            ɵɵcontentQuery(dirIndex, NzPageHeaderBreadcrumbDirective, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzPageHeaderFooter = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzPageHeaderBreadcrumb = _t.first);
        } }, hostBindings: function NzPageHeaderComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(3);
            ɵɵelementHostAttrs(_c0$1);
        } if (rf & 2) {
            ɵɵclassProp("has-footer", ctx.nzPageHeaderFooter)("ant-page-header-ghost", ctx.nzGhost)("has-breadcrumb", ctx.nzPageHeaderBreadcrumb);
        } }, inputs: { nzBackIcon: "nzBackIcon", nzTitle: "nzTitle", nzSubtitle: "nzSubtitle", nzGhost: "nzGhost" }, outputs: { nzBack: "nzBack" }, exportAs: ["nzPageHeader"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c2$1, decls: 12, vars: 5, consts: [[1, "ant-page-header-heading"], ["class", "ant-page-header-back", 3, "click", 4, "ngIf"], ["class", "ant-page-header-heading-title", 4, "ngIf"], [4, "ngIf"], ["class", "ant-page-header-heading-sub-title", 4, "ngIf"], [1, "ant-page-header-back", 3, "click"], ["role", "button", "tabindex", "0", 1, "ant-page-header-back-button"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [3, "ngTemplateOutlet"], [1, "ant-page-header-heading-title"], [4, "nzStringTemplateOutlet"], [1, "ant-page-header-heading-sub-title"]], template: function NzPageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c1$1);
            ɵɵprojection(0);
            ɵɵelementStart(1, "div", 0);
            ɵɵtemplate(2, NzPageHeaderComponent_div_2_Template, 4, 2, "div", 1);
            ɵɵprojection(3, 1);
            ɵɵtemplate(4, NzPageHeaderComponent_span_4_Template, 2, 1, "span", 2);
            ɵɵtemplate(5, NzPageHeaderComponent_5_Template, 1, 0, undefined, 3);
            ɵɵtemplate(6, NzPageHeaderComponent_span_6_Template, 2, 1, "span", 4);
            ɵɵtemplate(7, NzPageHeaderComponent_7_Template, 1, 0, undefined, 3);
            ɵɵprojection(8, 2);
            ɵɵprojection(9, 3);
            ɵɵelementEnd();
            ɵɵprojection(10, 4);
            ɵɵprojection(11, 5);
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.nzBackIcon !== null);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.nzTitle);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.nzTitle);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzSubtitle);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.nzSubtitle);
        } }, directives: [NgIf, NzIconDirective, NgTemplateOutlet, NzStringTemplateOutletDirective], styles: ["nz-page-header,nz-page-header-content,nz-page-header-footer{display:block}", "\n      .ant-page-header-back-button {\n        border: 0px;\n        background: transparent;\n        padding: 0px;\n        line-height: inherit;\n        display: inline-block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        __metadata("design:type", Boolean)
    ], NzPageHeaderComponent.prototype, "nzGhost", void 0);
    return NzPageHeaderComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPageHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'nz-page-header',
                exportAs: 'nzPageHeader',
                templateUrl: './nz-page-header.component.html',
                styleUrls: ['./nz-page-header.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ant-page-header',
                    '[class.has-footer]': 'nzPageHeaderFooter',
                    '[class.ant-page-header-ghost]': 'nzGhost',
                    '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb'
                },
                styles: [
                    "\n      .ant-page-header-back-button {\n        border: 0px;\n        background: transparent;\n        padding: 0px;\n        line-height: inherit;\n        display: inline-block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: Location }, { type: NzConfigService }]; }, { nzBackIcon: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzSubtitle: [{
            type: Input
        }], nzGhost: [{
            type: Input
        }], nzBack: [{
            type: Output
        }], nzPageHeaderFooter: [{
            type: ContentChild,
            args: [NzPageHeaderFooterDirective, { static: false }]
        }], nzPageHeaderBreadcrumb: [{
            type: ContentChild,
            args: [NzPageHeaderBreadcrumbDirective, { static: false }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzPageHeaderCells = [
    NzPageHeaderTitleDirective,
    NzPageHeaderSubtitleDirective,
    NzPageHeaderContentDirective,
    NzPageHeaderTagDirective,
    NzPageHeaderExtraDirective,
    NzPageHeaderFooterDirective,
    NzPageHeaderBreadcrumbDirective,
    NzPageHeaderAvatarDirective
];
var NzPageHeaderModule = /** @class */ (function () {
    function NzPageHeaderModule() {
    }
    /** @nocollapse */ NzPageHeaderModule.ɵmod = ɵɵdefineNgModule({ type: NzPageHeaderModule });
    /** @nocollapse */ NzPageHeaderModule.ɵinj = ɵɵdefineInjector({ factory: function NzPageHeaderModule_Factory(t) { return new (t || NzPageHeaderModule)(); }, imports: [[CommonModule, NzAddOnModule, NzIconModule]] });
    return NzPageHeaderModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzPageHeaderModule, { declarations: [NzPageHeaderComponent,
        NzPageHeaderTitleDirective,
        NzPageHeaderSubtitleDirective,
        NzPageHeaderContentDirective,
        NzPageHeaderTagDirective,
        NzPageHeaderExtraDirective,
        NzPageHeaderFooterDirective,
        NzPageHeaderBreadcrumbDirective,
        NzPageHeaderAvatarDirective], imports: [CommonModule, NzAddOnModule, NzIconModule], exports: [NzPageHeaderComponent,
        NzPageHeaderTitleDirective,
        NzPageHeaderSubtitleDirective,
        NzPageHeaderContentDirective,
        NzPageHeaderTagDirective,
        NzPageHeaderExtraDirective,
        NzPageHeaderFooterDirective,
        NzPageHeaderBreadcrumbDirective,
        NzPageHeaderAvatarDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPageHeaderModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule, NzIconModule],
                exports: [NzPageHeaderComponent, NzPageHeaderCells],
                declarations: [NzPageHeaderComponent, NzPageHeaderCells]
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

export { NzPageHeaderAvatarDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderComponent, NzPageHeaderContentDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderModule, NzPageHeaderSubtitleDirective, NzPageHeaderTagDirective, NzPageHeaderTitleDirective };
//# sourceMappingURL=ng-zorro-antd-page-header.js.map
