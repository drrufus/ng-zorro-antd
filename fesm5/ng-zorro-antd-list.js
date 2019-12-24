import { ɵɵelementContainerStart, ɵɵelement, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵproperty, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵtext, ɵɵtextInterpolate, TemplateRef, ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineComponent, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ɵɵpureFunction2, ɵɵstyleProp, ɵɵreference, ɵɵProvidersFeature, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵtemplateRefExtractor, ɵɵprojection, ChangeDetectorRef, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵclassProp, ContentChildren, HostBinding, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgTemplateOutlet, NgForOf, CommonModule } from '@angular/common';
import { NzAvatarComponent, NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzStringTemplateOutletDirective, NzUpdateHostClassService, InputBoolean, NzAddOnModule } from 'ng-zorro-antd/core';
import { __decorate, __metadata } from 'tslib';
import { BehaviorSubject } from 'rxjs';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { NzRowDirective, NzColDirective, NzGridModule } from 'ng-zorro-antd/grid';
import { NzEmbedEmptyComponent, NzEmptyModule } from 'ng-zorro-antd/empty';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzListItemMetaComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "nz-avatar", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1170 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzSrc", ctx_r1170.avatarStr);
} }
function NzListItemMetaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, NzListItemMetaComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1168 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1168.avatarStr)("ngIfElse", ctx_r1168.avatarTpl);
} }
function NzListItemMetaComponent_div_1_h4_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1173 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1173.nzTitle);
} }
function NzListItemMetaComponent_div_1_h4_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h4", 8);
    ɵɵtemplate(1, NzListItemMetaComponent_div_1_h4_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1171 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1171.nzTitle);
} }
function NzListItemMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1174 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1174.nzDescription);
} }
function NzListItemMetaComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, NzListItemMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1172 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1172.nzDescription);
} }
function NzListItemMetaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, NzListItemMetaComponent_div_1_h4_1_Template, 2, 1, "h4", 6);
    ɵɵtemplate(2, NzListItemMetaComponent_div_1_div_2_Template, 2, 1, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1169 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1169.nzTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1169.nzDescription);
} }
var NzListItemMetaComponent = /** @class */ (function () {
    function NzListItemMetaComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    Object.defineProperty(NzListItemMetaComponent.prototype, "nzAvatar", {
        set: function (value) {
            if (value instanceof TemplateRef) {
                this.avatarStr = '';
                this.avatarTpl = value;
            }
            else {
                this.avatarStr = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ NzListItemMetaComponent.ɵfac = function NzListItemMetaComponent_Factory(t) { return new (t || NzListItemMetaComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzListItemMetaComponent.ɵcmp = ɵɵdefineComponent({ type: NzListItemMetaComponent, selectors: [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], inputs: { nzAvatar: "nzAvatar", nzTitle: "nzTitle", nzDescription: "nzDescription" }, exportAs: ["nzListItemMeta"], decls: 2, vars: 2, consts: [["class", "ant-list-item-meta-avatar", 4, "ngIf"], ["class", "ant-list-item-meta-content", 4, "ngIf"], [1, "ant-list-item-meta-avatar"], [4, "ngIf", "ngIfElse"], [3, "nzSrc"], [1, "ant-list-item-meta-content"], ["class", "ant-list-item-meta-title", 4, "ngIf"], ["class", "ant-list-item-meta-description", 4, "ngIf"], [1, "ant-list-item-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-meta-description"]], template: function NzListItemMetaComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzListItemMetaComponent_div_0_Template, 2, 2, "div", 0);
            ɵɵtemplate(1, NzListItemMetaComponent_div_1_Template, 3, 2, "div", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.avatarStr || ctx.avatarTpl);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzDescription);
        } }, directives: [NgIf, NzAvatarComponent, NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
    return NzListItemMetaComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzListItemMetaComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-meta, [nz-list-item-meta]',
                exportAs: 'nzListItemMeta',
                templateUrl: './nz-list-item-meta.component.html',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { nzAvatar: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzDescription: [{
            type: Input
        }] }); })();

function NzListComponent_ng_template_0_div_0_ng_container_1_ng_template_1_Template(rf, ctx) { }
var _c0 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzListComponent_ng_template_0_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzListComponent_ng_template_0_div_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r1184 = ctx.$implicit;
    var index_r1185 = ctx.index;
    var ctx_r1183 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1183.nzRenderItem)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c0, item_r1184, index_r1185));
} }
function NzListComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, NzListComponent_ng_template_0_div_0_ng_container_1_Template, 2, 5, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1182 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1182.nzDataSource);
} }
function NzListComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzListComponent_ng_template_0_div_0_Template, 2, 1, "div", 7);
} if (rf & 2) {
    var ctx_r1176 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1176.nzDataSource.length > 0);
} }
function NzListComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1187 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1187.nzHeader);
} }
function NzListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, NzListComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1177 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1177.nzHeader);
} }
function NzListComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div");
} if (rf & 2) {
    ɵɵstyleProp("min-height", 53, "px");
} }
function NzListComponent_ng_container_4_div_2_div_1_ng_template_1_Template(rf, ctx) { }
function NzListComponent_ng_container_4_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, NzListComponent_ng_container_4_div_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r1192 = ctx.$implicit;
    var index_r1193 = ctx.index;
    var ctx_r1191 = ɵɵnextContext(3);
    ɵɵproperty("nzSpan", ctx_r1191.nzGrid.span)("nzXs", ctx_r1191.nzGrid.xs)("nzSm", ctx_r1191.nzGrid.sm)("nzMd", ctx_r1191.nzGrid.md)("nzLg", ctx_r1191.nzGrid.lg)("nzXl", ctx_r1191.nzGrid.xl)("nzXXl", ctx_r1191.nzGrid.xxl);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1191.nzRenderItem)("ngTemplateOutletContext", ɵɵpureFunction2(9, _c0, item_r1192, index_r1193));
} }
function NzListComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtemplate(1, NzListComponent_ng_container_4_div_2_div_1_Template, 2, 12, "div", 17);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1189 = ɵɵnextContext(2);
    ɵɵproperty("nzGutter", ctx_r1189.nzGrid.gutter);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1189.nzDataSource);
} }
function NzListComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵelement(1, "nz-embed-empty", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1190 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzComponentName", "list")("specificContent", ctx_r1190.nzNoResult);
} }
function NzListComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzListComponent_ng_container_4_div_1_Template, 1, 1, "div", 13);
    ɵɵtemplate(2, NzListComponent_ng_container_4_div_2_Template, 2, 2, "div", 14);
    ɵɵtemplate(3, NzListComponent_ng_container_4_div_3_Template, 2, 2, "div", 15);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1178 = ɵɵnextContext();
    var _r1175 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1178.nzLoading && ctx_r1178.nzDataSource.length === 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1178.nzGrid)("ngIfElse", _r1175);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1178.nzLoading && ctx_r1178.nzDataSource.length === 0);
} }
function NzListComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1195 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1195.nzFooter);
} }
function NzListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, NzListComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1179 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1179.nzFooter);
} }
function NzListComponent_ng_template_7_Template(rf, ctx) { }
function NzListComponent_div_8_ng_template_1_Template(rf, ctx) { }
function NzListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtemplate(1, NzListComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1181 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1181.nzPagination);
} }
var _c1 = ["*"];
var NzListComponent = /** @class */ (function () {
    function NzListComponent(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.nzBordered = false;
        this.nzItemLayout = 'horizontal';
        this.nzLoading = false;
        this.nzSize = 'default';
        this.nzSplit = true;
        // #endregion
        // #region styles
        this.prefixCls = 'ant-list';
        // #endregion
        this.itemLayoutNotifySource = new BehaviorSubject(this.nzItemLayout);
    }
    NzListComponent.prototype._setClassMap = function () {
        var _a;
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-vertical"] = this.nzItemLayout === 'vertical',
            _a[this.prefixCls + "-lg"] = this.nzSize === 'large',
            _a[this.prefixCls + "-sm"] = this.nzSize === 'small',
            _a[this.prefixCls + "-split"] = this.nzSplit,
            _a[this.prefixCls + "-bordered"] = this.nzBordered,
            _a[this.prefixCls + "-loading"] = this.nzLoading,
            _a[this.prefixCls + "-grid"] = this.nzGrid,
            _a[this.prefixCls + "-something-after-last-item"] = !!(this.nzLoadMore || this.nzPagination || this.nzFooter),
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    Object.defineProperty(NzListComponent.prototype, "itemLayoutNotify$", {
        get: function () {
            return this.itemLayoutNotifySource.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NzListComponent.prototype.ngOnInit = function () {
        this._setClassMap();
    };
    NzListComponent.prototype.ngOnChanges = function (changes) {
        this._setClassMap();
        if (changes.nzItemLayout) {
            this.itemLayoutNotifySource.next(this.nzItemLayout);
        }
    };
    NzListComponent.prototype.ngOnDestroy = function () {
        this.itemLayoutNotifySource.unsubscribe();
    };
    /** @nocollapse */ NzListComponent.ɵfac = function NzListComponent_Factory(t) { return new (t || NzListComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzUpdateHostClassService)); };
    /** @nocollapse */ NzListComponent.ɵcmp = ɵɵdefineComponent({ type: NzListComponent, selectors: [["nz-list"], ["", "nz-list", ""]], inputs: { nzDataSource: "nzDataSource", nzBordered: "nzBordered", nzGrid: "nzGrid", nzHeader: "nzHeader", nzFooter: "nzFooter", nzItemLayout: "nzItemLayout", nzRenderItem: "nzRenderItem", nzLoading: "nzLoading", nzLoadMore: "nzLoadMore", nzPagination: "nzPagination", nzSize: "nzSize", nzSplit: "nzSplit", nzNoResult: "nzNoResult" }, exportAs: ["nzList"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 9, vars: 6, consts: [["itemsTpl", ""], ["class", "ant-list-header", 4, "ngIf"], [3, "nzSpinning"], [4, "ngIf"], ["class", "ant-list-footer", 4, "ngIf"], [3, "ngTemplateOutlet"], ["class", "ant-list-pagination", 4, "ngIf"], ["class", "ant-list-items", 4, "ngIf"], [1, "ant-list-items"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-list-header"], [4, "nzStringTemplateOutlet"], [3, "min-height", 4, "ngIf"], ["nz-row", "", 3, "nzGutter", 4, "ngIf", "ngIfElse"], ["class", "ant-list-empty-text", 4, "ngIf"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [1, "ant-list-empty-text"], [3, "nzComponentName", "specificContent"], [1, "ant-list-footer"], [1, "ant-list-pagination"]], template: function NzListComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzListComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
            ɵɵtemplate(2, NzListComponent_div_2_Template, 2, 1, "div", 1);
            ɵɵelementStart(3, "nz-spin", 2);
            ɵɵtemplate(4, NzListComponent_ng_container_4_Template, 4, 4, "ng-container", 3);
            ɵɵprojection(5);
            ɵɵelementEnd();
            ɵɵtemplate(6, NzListComponent_div_6_Template, 2, 1, "div", 4);
            ɵɵtemplate(7, NzListComponent_ng_template_7_Template, 0, 0, "ng-template", 5);
            ɵɵtemplate(8, NzListComponent_div_8_Template, 2, 1, "div", 6);
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.nzHeader);
            ɵɵadvance(1);
            ɵɵproperty("nzSpinning", ctx.nzLoading);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzDataSource);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.nzFooter);
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.nzLoadMore);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzPagination);
        } }, directives: [NgIf, NzSpinComponent, NgTemplateOutlet, NgForOf, NzStringTemplateOutletDirective, NzRowDirective, NzColDirective, NzEmbedEmptyComponent], styles: ["\n      nz-list,\n      nz-list nz-spin {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzListComponent.prototype, "nzBordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzListComponent.prototype, "nzLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzListComponent.prototype, "nzSplit", void 0);
    return NzListComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzListComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list, [nz-list]',
                exportAs: 'nzList',
                templateUrl: './nz-list.component.html',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [
                    "\n      nz-list,\n      nz-list nz-spin {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: NzUpdateHostClassService }]; }, { nzDataSource: [{
            type: Input
        }], nzBordered: [{
            type: Input
        }], nzGrid: [{
            type: Input
        }], nzHeader: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzItemLayout: [{
            type: Input
        }], nzRenderItem: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzLoadMore: [{
            type: Input
        }], nzPagination: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzSplit: [{
            type: Input
        }], nzNoResult: [{
            type: Input
        }] }); })();

function NzListItemComponent_ng_template_0_ul_0_li_1_ng_template_1_Template(rf, ctx) { }
function NzListItemComponent_ng_template_0_ul_0_li_1_em_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "em", 9);
} }
function NzListItemComponent_ng_template_0_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, NzListItemComponent_ng_template_0_ul_0_li_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵtemplate(2, NzListItemComponent_ng_template_0_ul_0_li_1_em_2_Template, 1, 0, "em", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    var i_r1206 = ctx.$implicit;
    var last_r1207 = ctx.last;
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", i_r1206);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !last_r1207);
} }
function NzListItemComponent_ng_template_0_ul_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 5);
    ɵɵtemplate(1, NzListItemComponent_ng_template_0_ul_0_li_1_Template, 3, 2, "li", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1204 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1204.nzActions);
} }
function NzListItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzListItemComponent_ng_template_0_ul_0_Template, 2, 1, "ul", 4);
} if (rf & 2) {
    var ctx_r1198 = ɵɵnextContext();
    ɵɵproperty("ngIf", (ctx_r1198.nzActions == null ? null : ctx_r1198.nzActions.length) > 0);
} }
function NzListItemComponent_ng_template_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1211 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1211.nzContent);
} }
function NzListItemComponent_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzListItemComponent_ng_template_2_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1210 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1210.nzContent);
} }
function NzListItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
    ɵɵtemplate(1, NzListItemComponent_ng_template_2_ng_container_1_Template, 2, 1, "ng-container", 10);
} if (rf & 2) {
    var ctx_r1200 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1200.nzContent);
} }
function NzListItemComponent_ng_template_4_ng_template_0_Template(rf, ctx) { }
function NzListItemComponent_ng_template_4_ng_template_1_Template(rf, ctx) { }
function NzListItemComponent_ng_template_4_ng_template_2_Template(rf, ctx) { }
function NzListItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzListItemComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 7);
    ɵɵtemplate(1, NzListItemComponent_ng_template_4_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵtemplate(2, NzListItemComponent_ng_template_4_ng_template_2_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    var ctx_r1202 = ɵɵnextContext();
    var _r1199 = ɵɵreference(3);
    var _r1197 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", _r1199);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1202.nzExtra);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1197);
} }
function NzListItemComponent_ng_container_6_ng_template_2_Template(rf, ctx) { }
function NzListItemComponent_ng_container_6_ng_template_3_Template(rf, ctx) { }
function NzListItemComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
function NzListItemComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 12);
    ɵɵtemplate(2, NzListItemComponent_ng_container_6_ng_template_2_Template, 0, 0, "ng-template", 7);
    ɵɵtemplate(3, NzListItemComponent_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 13);
    ɵɵtemplate(5, NzListItemComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1203 = ɵɵnextContext();
    var _r1199 = ɵɵreference(3);
    var _r1197 = ɵɵreference(1);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r1199);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1197);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1203.nzExtra);
} }
var _c0$1 = ["*"];
var NzListItemComponent = /** @class */ (function () {
    function NzListItemComponent(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this.nzActions = [];
        this.nzNoFlex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    Object.defineProperty(NzListItemComponent.prototype, "isVerticalAndExtra", {
        get: function () {
            return this.itemLayout === 'vertical' && !!this.nzExtra;
        },
        enumerable: true,
        configurable: true
    });
    NzListItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(function (val) {
            _this.itemLayout = val;
            _this.cdr.detectChanges();
        });
    };
    NzListItemComponent.prototype.ngOnDestroy = function () {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    };
    /** @nocollapse */ NzListItemComponent.ɵfac = function NzListItemComponent_Factory(t) { return new (t || NzListItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzListComponent), ɵɵdirectiveInject(ChangeDetectorRef)); };
    /** @nocollapse */ NzListItemComponent.ɵcmp = ɵɵdefineComponent({ type: NzListItemComponent, selectors: [["nz-list-item"], ["", "nz-list-item", ""]], contentQueries: function NzListItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzListItemMetaComponent, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.metas = _t);
        } }, hostBindings: function NzListItemComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-list-item-no-flex", ctx.nzNoFlex);
        } }, inputs: { nzActions: "nzActions", nzContent: "nzContent", nzExtra: "nzExtra", nzNoFlex: "nzNoFlex" }, exportAs: ["nzListItem"], ngContentSelectors: _c0$1, decls: 7, vars: 2, consts: [["actionsTpl", ""], ["contentTpl", ""], ["simpleTpl", ""], [4, "ngIf", "ngIfElse"], ["class", "ant-list-item-action", 4, "ngIf"], [1, "ant-list-item-action"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-list-item-action-split", 4, "ngIf"], [1, "ant-list-item-action-split"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-main"], [1, "ant-list-item-extra"]], template: function NzListItemComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzListItemComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
            ɵɵtemplate(2, NzListItemComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(4, NzListItemComponent_ng_template_4_Template, 3, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵtemplate(6, NzListItemComponent_ng_container_6_Template, 6, 3, "ng-container", 3);
        } if (rf & 2) {
            var _r1201 = ɵɵreference(5);
            ɵɵadvance(6);
            ɵɵproperty("ngIf", ctx.isVerticalAndExtra)("ngIfElse", _r1201);
        } }, directives: [NgIf, NgForOf, NgTemplateOutlet, NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzListItemComponent.prototype, "nzNoFlex", void 0);
    return NzListItemComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzListItemComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item, [nz-list-item]',
                exportAs: 'nzListItem',
                templateUrl: './nz-list-item.component.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: NzListComponent }, { type: ChangeDetectorRef }]; }, { metas: [{
            type: ContentChildren,
            args: [NzListItemMetaComponent]
        }], nzActions: [{
            type: Input
        }], nzContent: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], nzNoFlex: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.ant-list-item-no-flex']
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzListModule = /** @class */ (function () {
    function NzListModule() {
    }
    /** @nocollapse */ NzListModule.ɵmod = ɵɵdefineNgModule({ type: NzListModule });
    /** @nocollapse */ NzListModule.ɵinj = ɵɵdefineInjector({ factory: function NzListModule_Factory(t) { return new (t || NzListModule)(); }, imports: [[CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzAddOnModule, NzEmptyModule]] });
    return NzListModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzListModule, { declarations: [NzListComponent, NzListItemComponent, NzListItemMetaComponent], imports: [CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzAddOnModule, NzEmptyModule], exports: [NzListComponent, NzListItemComponent, NzListItemMetaComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzListModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzAddOnModule, NzEmptyModule],
                declarations: [NzListComponent, NzListItemComponent, NzListItemMetaComponent],
                exports: [NzListComponent, NzListItemComponent, NzListItemMetaComponent]
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

export { NzListComponent, NzListItemComponent, NzListItemMetaComponent, NzListModule };
//# sourceMappingURL=ng-zorro-antd-list.js.map
