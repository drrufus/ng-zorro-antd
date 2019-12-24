import { __extends, __spread } from 'tslib';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { ɵɵprojection, ɵɵdefineDirective, ɵsetClassMetadata, Directive, ɵɵelementHostAttrs, ɵɵdirectiveInject, ComponentFactoryResolver, ViewContainerRef, ɵɵInheritDefinitionFeature, Input, ɵɵdefineComponent, ɵɵstaticViewQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵprojectionDef, ɵɵtemplate, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵelementStart, ɵɵelementEnd, ɵɵproperty, ɵɵcontentQuery, ContentChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzStringTemplateOutletDirective, NzAddOnModule } from 'ng-zorro-antd/core';
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';

var _c0 = [1, "ant-comment-content-detail"];
function NzCommentActionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
var _c1 = ["*"];
var NzCommentAvatarDirective = /** @class */ (function () {
    function NzCommentAvatarDirective() {
    }
    /** @nocollapse */ NzCommentAvatarDirective.ɵfac = function NzCommentAvatarDirective_Factory(t) { return new (t || NzCommentAvatarDirective)(); };
    /** @nocollapse */ NzCommentAvatarDirective.ɵdir = ɵɵdefineDirective({ type: NzCommentAvatarDirective, selectors: [["nz-avatar", "nz-comment-avatar", ""]], exportAs: ["nzCommentAvatar"] });
    return NzCommentAvatarDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCommentAvatarDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-avatar[nz-comment-avatar]',
                exportAs: 'nzCommentAvatar'
            }]
    }], null, null); })();
var NzCommentContentDirective = /** @class */ (function () {
    function NzCommentContentDirective() {
    }
    /** @nocollapse */ NzCommentContentDirective.ɵfac = function NzCommentContentDirective_Factory(t) { return new (t || NzCommentContentDirective)(); };
    /** @nocollapse */ NzCommentContentDirective.ɵdir = ɵɵdefineDirective({ type: NzCommentContentDirective, selectors: [["nz-comment-content"], ["", "nz-comment-content", ""]], hostBindings: function NzCommentContentDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵelementHostAttrs(_c0);
        } }, exportAs: ["nzCommentContent"] });
    return NzCommentContentDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCommentContentDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-comment-content, [nz-comment-content]',
                exportAs: 'nzCommentContent',
                host: { class: 'ant-comment-content-detail' }
            }]
    }], null, null); })();
var NzCommentActionHostDirective = /** @class */ (function (_super) {
    __extends(NzCommentActionHostDirective, _super);
    function NzCommentActionHostDirective(componentFactoryResolver, viewContainerRef) {
        return _super.call(this, componentFactoryResolver, viewContainerRef) || this;
    }
    NzCommentActionHostDirective.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    NzCommentActionHostDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    NzCommentActionHostDirective.prototype.ngAfterViewInit = function () {
        this.attach(this.nzCommentActionHost);
    };
    /** @nocollapse */ NzCommentActionHostDirective.ɵfac = function NzCommentActionHostDirective_Factory(t) { return new (t || NzCommentActionHostDirective)(ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(ViewContainerRef)); };
    /** @nocollapse */ NzCommentActionHostDirective.ɵdir = ɵɵdefineDirective({ type: NzCommentActionHostDirective, selectors: [["", "nzCommentActionHost", ""]], inputs: { nzCommentActionHost: "nzCommentActionHost" }, exportAs: ["nzCommentActionHost"], features: [ɵɵInheritDefinitionFeature] });
    return NzCommentActionHostDirective;
}(CdkPortalOutlet));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCommentActionHostDirective, [{
        type: Directive,
        args: [{
                selector: '[nzCommentActionHost]',
                exportAs: 'nzCommentActionHost'
            }]
    }], function () { return [{ type: ComponentFactoryResolver }, { type: ViewContainerRef }]; }, { nzCommentActionHost: [{
            type: Input
        }] }); })();
var NzCommentActionComponent = /** @class */ (function () {
    function NzCommentActionComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    Object.defineProperty(NzCommentActionComponent.prototype, "content", {
        get: function () {
            return this.contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    NzCommentActionComponent.prototype.ngOnInit = function () {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    };
    /** @nocollapse */ NzCommentActionComponent.ɵfac = function NzCommentActionComponent_Factory(t) { return new (t || NzCommentActionComponent)(ɵɵdirectiveInject(ViewContainerRef)); };
    /** @nocollapse */ NzCommentActionComponent.ɵcmp = ɵɵdefineComponent({ type: NzCommentActionComponent, selectors: [["nz-comment-action"]], viewQuery: function NzCommentActionComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(TemplateRef, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.implicitContent = _t.first);
        } }, exportAs: ["nzCommentAction"], ngContentSelectors: _c1, decls: 1, vars: 0, template: function NzCommentActionComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzCommentActionComponent_ng_template_0_Template, 1, 0, "ng-template");
        } }, encapsulation: 2, changeDetection: 0 });
    return NzCommentActionComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCommentActionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-comment-action',
                exportAs: 'nzCommentAction',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-template><ng-content></ng-content></ng-template>'
            }]
    }], function () { return [{ type: ViewContainerRef }]; }, { implicitContent: [{
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
var _c0$1 = [1, "ant-comment"];
function NzCommentComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r163 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r163.nzAuthor);
} }
function NzCommentComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtemplate(1, NzCommentComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r160 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r160.nzAuthor);
} }
function NzCommentComponent_span_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r164 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r164.nzDatetime);
} }
function NzCommentComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtemplate(1, NzCommentComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r161 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r161.nzDatetime);
} }
function NzCommentComponent_ul_8_li_1_ng_template_2_Template(rf, ctx) { }
function NzCommentComponent_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelementStart(1, "span");
    ɵɵtemplate(2, NzCommentComponent_ul_8_li_1_ng_template_2_Template, 0, 0, "ng-template", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var action_r166 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("nzCommentActionHost", action_r166.content);
} }
function NzCommentComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 11);
    ɵɵtemplate(1, NzCommentComponent_ul_8_li_1_Template, 3, 1, "li", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r162 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r162.actions);
} }
var _c1$1 = [[["nz-avatar", "nz-comment-avatar", ""]], [["nz-comment-content"]], "*"];
var _c2 = ["nz-avatar[nz-comment-avatar]", "nz-comment-content", "*"];
var NzCommentComponent = /** @class */ (function () {
    function NzCommentComponent() {
    }
    /** @nocollapse */ NzCommentComponent.ɵfac = function NzCommentComponent_Factory(t) { return new (t || NzCommentComponent)(); };
    /** @nocollapse */ NzCommentComponent.ɵcmp = ɵɵdefineComponent({ type: NzCommentComponent, selectors: [["nz-comment"]], contentQueries: function NzCommentComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzCommentActionComponent, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actions = _t);
        } }, hostBindings: function NzCommentComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵelementHostAttrs(_c0$1);
        } }, inputs: { nzAuthor: "nzAuthor", nzDatetime: "nzDatetime" }, exportAs: ["nzComment"], ngContentSelectors: _c2, decls: 11, vars: 3, consts: [[1, "ant-comment-inner"], [1, "ant-comment-avatar"], [1, "ant-comment-content"], [1, "ant-comment-content-author"], ["class", "ant-comment-content-author-name", 4, "ngIf"], ["class", "ant-comment-content-author-time", 4, "ngIf"], ["class", "ant-comment-actions", 4, "ngIf"], [1, "ant-comment-nested"], [1, "ant-comment-content-author-name"], [4, "nzStringTemplateOutlet"], [1, "ant-comment-content-author-time"], [1, "ant-comment-actions"], [4, "ngFor", "ngForOf"], [3, "nzCommentActionHost"]], template: function NzCommentComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c1$1);
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵprojection(2);
            ɵɵelementEnd();
            ɵɵelementStart(3, "div", 2);
            ɵɵelementStart(4, "div", 3);
            ɵɵtemplate(5, NzCommentComponent_span_5_Template, 2, 1, "span", 4);
            ɵɵtemplate(6, NzCommentComponent_span_6_Template, 2, 1, "span", 5);
            ɵɵelementEnd();
            ɵɵprojection(7, 1);
            ɵɵtemplate(8, NzCommentComponent_ul_8_Template, 2, 1, "ul", 6);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(9, "div", 7);
            ɵɵprojection(10, 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(5);
            ɵɵproperty("ngIf", ctx.nzAuthor);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzDatetime);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.actions == null ? null : ctx.actions.length);
        } }, directives: [NgIf, NzStringTemplateOutletDirective, NgForOf, NzCommentActionHostDirective], styles: ["\n      nz-comment {\n        display: block;\n      }\n\n      nz-comment-content {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    return NzCommentComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCommentComponent, [{
        type: Component,
        args: [{
                selector: 'nz-comment',
                exportAs: 'nzComment',
                templateUrl: './nz-comment.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ant-comment'
                },
                styles: [
                    "\n      nz-comment {\n        display: block;\n      }\n\n      nz-comment-content {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return []; }, { nzAuthor: [{
            type: Input
        }], nzDatetime: [{
            type: Input
        }], actions: [{
            type: ContentChildren,
            args: [NzCommentActionComponent]
        }] }); })();

var NZ_COMMENT_CELLS = [NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective];
var NzCommentModule = /** @class */ (function () {
    function NzCommentModule() {
    }
    /** @nocollapse */ NzCommentModule.ɵmod = ɵɵdefineNgModule({ type: NzCommentModule });
    /** @nocollapse */ NzCommentModule.ɵinj = ɵɵdefineInjector({ factory: function NzCommentModule_Factory(t) { return new (t || NzCommentModule)(); }, imports: [[CommonModule, NzAddOnModule]] });
    return NzCommentModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzCommentModule, { declarations: [NzCommentComponent,
        NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective], imports: [CommonModule, NzAddOnModule], exports: [NzCommentComponent,
        NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCommentModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule],
                exports: __spread([NzCommentComponent], NZ_COMMENT_CELLS),
                declarations: __spread([NzCommentComponent], NZ_COMMENT_CELLS)
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

export { NzCommentActionComponent, NzCommentActionHostDirective, NzCommentAvatarDirective, NzCommentComponent, NzCommentContentDirective, NzCommentModule };
//# sourceMappingURL=ng-zorro-antd-comment.js.map
