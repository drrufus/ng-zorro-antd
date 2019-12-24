import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/spin";
import * as i4 from "ng-zorro-antd/grid";
import * as i5 from "ng-zorro-antd/empty";
function NzListComponent_ng_template_0_div_0_ng_container_1_ng_template_1_Template(rf, ctx) { }
var _c0 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzListComponent_ng_template_0_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzListComponent_ng_template_0_div_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r1184 = ctx.$implicit;
    var index_r1185 = ctx.index;
    var ctx_r1183 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1183.nzRenderItem)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, item_r1184, index_r1185));
} }
function NzListComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, NzListComponent_ng_template_0_div_0_ng_container_1_Template, 2, 5, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1182 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1182.nzDataSource);
} }
function NzListComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzListComponent_ng_template_0_div_0_Template, 2, 1, "div", 7);
} if (rf & 2) {
    var ctx_r1176 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1176.nzDataSource.length > 0);
} }
function NzListComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1187 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1187.nzHeader);
} }
function NzListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, NzListComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1177 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1177.nzHeader);
} }
function NzListComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    i0.ɵɵstyleProp("min-height", 53, "px");
} }
function NzListComponent_ng_container_4_div_2_div_1_ng_template_1_Template(rf, ctx) { }
function NzListComponent_ng_container_4_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, NzListComponent_ng_container_4_div_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1192 = ctx.$implicit;
    var index_r1193 = ctx.index;
    var ctx_r1191 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzSpan", ctx_r1191.nzGrid.span)("nzXs", ctx_r1191.nzGrid.xs)("nzSm", ctx_r1191.nzGrid.sm)("nzMd", ctx_r1191.nzGrid.md)("nzLg", ctx_r1191.nzGrid.lg)("nzXl", ctx_r1191.nzGrid.xl)("nzXXl", ctx_r1191.nzGrid.xxl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1191.nzRenderItem)("ngTemplateOutletContext", i0.ɵɵpureFunction2(9, _c0, item_r1192, index_r1193));
} }
function NzListComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, NzListComponent_ng_container_4_div_2_div_1_Template, 2, 12, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1189 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzGutter", ctx_r1189.nzGrid.gutter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1189.nzDataSource);
} }
function NzListComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "nz-embed-empty", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1190 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzComponentName", "list")("specificContent", ctx_r1190.nzNoResult);
} }
function NzListComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzListComponent_ng_container_4_div_1_Template, 1, 1, "div", 13);
    i0.ɵɵtemplate(2, NzListComponent_ng_container_4_div_2_Template, 2, 2, "div", 14);
    i0.ɵɵtemplate(3, NzListComponent_ng_container_4_div_3_Template, 2, 2, "div", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1178 = i0.ɵɵnextContext();
    var _r1175 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1178.nzLoading && ctx_r1178.nzDataSource.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1178.nzGrid)("ngIfElse", _r1175);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1178.nzLoading && ctx_r1178.nzDataSource.length === 0);
} }
function NzListComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1195 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1195.nzFooter);
} }
function NzListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, NzListComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1179 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1179.nzFooter);
} }
function NzListComponent_ng_template_7_Template(rf, ctx) { }
function NzListComponent_div_8_ng_template_1_Template(rf, ctx) { }
function NzListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, NzListComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1181 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1181.nzPagination);
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
    /** @nocollapse */ NzListComponent.ɵfac = function NzListComponent_Factory(t) { return new (t || NzListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService)); };
    /** @nocollapse */ NzListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzListComponent, selectors: [["nz-list"], ["", "nz-list", ""]], inputs: { nzDataSource: "nzDataSource", nzBordered: "nzBordered", nzGrid: "nzGrid", nzHeader: "nzHeader", nzFooter: "nzFooter", nzItemLayout: "nzItemLayout", nzRenderItem: "nzRenderItem", nzLoading: "nzLoading", nzLoadMore: "nzLoadMore", nzPagination: "nzPagination", nzSize: "nzSize", nzSplit: "nzSplit", nzNoResult: "nzNoResult" }, exportAs: ["nzList"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 9, vars: 6, consts: [["itemsTpl", ""], ["class", "ant-list-header", 4, "ngIf"], [3, "nzSpinning"], [4, "ngIf"], ["class", "ant-list-footer", 4, "ngIf"], [3, "ngTemplateOutlet"], ["class", "ant-list-pagination", 4, "ngIf"], ["class", "ant-list-items", 4, "ngIf"], [1, "ant-list-items"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-list-header"], [4, "nzStringTemplateOutlet"], [3, "min-height", 4, "ngIf"], ["nz-row", "", 3, "nzGutter", 4, "ngIf", "ngIfElse"], ["class", "ant-list-empty-text", 4, "ngIf"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [1, "ant-list-empty-text"], [3, "nzComponentName", "specificContent"], [1, "ant-list-footer"], [1, "ant-list-pagination"]], template: function NzListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, NzListComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, NzListComponent_div_2_Template, 2, 1, "div", 1);
            i0.ɵɵelementStart(3, "nz-spin", 2);
            i0.ɵɵtemplate(4, NzListComponent_ng_container_4_Template, 4, 4, "ng-container", 3);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, NzListComponent_div_6_Template, 2, 1, "div", 4);
            i0.ɵɵtemplate(7, NzListComponent_ng_template_7_Template, 0, 0, "ng-template", 5);
            i0.ɵɵtemplate(8, NzListComponent_div_8_Template, 2, 1, "div", 6);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.nzHeader);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSpinning", ctx.nzLoading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzDataSource);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.nzFooter);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.nzLoadMore);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzPagination);
        } }, directives: [i2.NgIf, i3.NzSpinComponent, i2.NgTemplateOutlet, i2.NgForOf, i1.NzStringTemplateOutletDirective, i4.NzRowDirective, i4.NzColDirective, i5.NzEmbedEmptyComponent], styles: ["\n      nz-list,\n      nz-list nz-spin {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
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
export { NzListComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzListComponent, [{
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
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzUpdateHostClassService }]; }, { nzDataSource: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2xpc3QvIiwic291cmNlcyI6WyJuei1saXN0LmNvbXBvbmVudC50cyIsIm56LWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBS0wsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFvQyx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlHLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7SUNyQi9DLDZCQUNFO0lBQUEsb0hBR0M7SUFDSCwwQkFBZTs7Ozs7SUFIWCxlQUFpQztJQUFqQyx5REFBaUMsZ0ZBQUE7OztJQUh2Qyw4QkFDRTtJQUFBLHNHQUNFO0lBS0osaUJBQU07OztJQU5VLGVBQW9EO0lBQXBELGdEQUFvRDs7O0lBRHBFLDhFQUNFOzs7SUFEMEIsd0RBQStCOzs7SUFVM0QsNkJBQWlEO0lBQUEsWUFBYztJQUFBLDBCQUFlOzs7SUFBN0IsZUFBYztJQUFkLHdDQUFjOzs7SUFEakUsK0JBQ0U7SUFBQSx5RkFBaUQ7SUFDbkQsaUJBQU07OztJQURVLGVBQWtDO0lBQWxDLDJEQUFrQzs7O0lBSTlDLHNCQUFxRjs7SUFBakMsc0NBQTBCOzs7O0lBRTVFLCtCQVdFO0lBQUEsNEdBR0M7SUFDSCxpQkFBTTs7Ozs7SUFiSiw4Q0FBc0IsNkJBQUEsNkJBQUEsNkJBQUEsNkJBQUEsNkJBQUEsK0JBQUE7SUFVcEIsZUFBaUM7SUFBakMseURBQWlDLGdGQUFBOzs7SUFidkMsK0JBQ0U7SUFBQSx1RkFXRTtJQUtKLGlCQUFNOzs7SUFqQm9DLGtEQUEwQjtJQVVoRSxlQUFvRDtJQUFwRCxnREFBb0Q7OztJQVF4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XG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56RGlyZWN0aW9uVkhUeXBlLCBOelNpemVMRFNUeXBlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TGlzdEdyaWQgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWxpc3QsIFtuei1saXN0XScsXHJcbiAgZXhwb3J0QXM6ICduekxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWxpc3QsXHJcbiAgICAgIG56LWxpc3Qgbnotc3BpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBuekRhdGFTb3VyY2U6IGFueVtdO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCb3JkZXJlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBuekdyaWQ6IE56TGlzdEdyaWQ7XHJcblxyXG4gIEBJbnB1dCgpIG56SGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgbnpGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuekl0ZW1MYXlvdXQ6IE56RGlyZWN0aW9uVkhUeXBlID0gJ2hvcml6b250YWwnO1xyXG5cclxuICBASW5wdXQoKSBuelJlbmRlckl0ZW06IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56TG9hZE1vcmU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuelBhZ2luYXRpb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNwbGl0ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgbnpOb1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBzdHlsZXNcclxuXHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWxpc3QnO1xyXG5cclxuICBwcml2YXRlIF9zZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXZlcnRpY2FsYF06IHRoaXMubnpJdGVtTGF5b3V0ID09PSAndmVydGljYWwnLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxnYF06IHRoaXMubnpTaXplID09PSAnbGFyZ2UnLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNtYF06IHRoaXMubnpTaXplID09PSAnc21hbGwnLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNwbGl0YF06IHRoaXMubnpTcGxpdCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ib3JkZXJlZGBdOiB0aGlzLm56Qm9yZGVyZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbG9hZGluZ2BdOiB0aGlzLm56TG9hZGluZyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ncmlkYF06IHRoaXMubnpHcmlkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNvbWV0aGluZy1hZnRlci1sYXN0LWl0ZW1gXTogISEodGhpcy5uekxvYWRNb3JlIHx8IHRoaXMubnpQYWdpbmF0aW9uIHx8IHRoaXMubnpGb290ZXIpXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgcHJpdmF0ZSBpdGVtTGF5b3V0Tm90aWZ5U291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOekRpcmVjdGlvblZIVHlwZT4odGhpcy5uekl0ZW1MYXlvdXQpO1xyXG5cclxuICBnZXQgaXRlbUxheW91dE5vdGlmeSQoKTogT2JzZXJ2YWJsZTxOekRpcmVjdGlvblZIVHlwZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbUxheW91dE5vdGlmeVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zZXRDbGFzc01hcCgpO1xyXG4gICAgaWYgKGNoYW5nZXMubnpJdGVtTGF5b3V0KSB7XHJcbiAgICAgIHRoaXMuaXRlbUxheW91dE5vdGlmeVNvdXJjZS5uZXh0KHRoaXMubnpJdGVtTGF5b3V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pdGVtTGF5b3V0Tm90aWZ5U291cmNlLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjaXRlbXNUcGw+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1saXN0LWl0ZW1zXCIgKm5nSWY9XCJuekRhdGFTb3VyY2UubGVuZ3RoID4gMFwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBuekRhdGFTb3VyY2U7IGxldCBpbmRleCA9IGluZGV4XCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56UmVuZGVySXRlbVwiXHJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpdGVtLCBpbmRleDogaW5kZXggfVwiXHJcbiAgICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxkaXYgKm5nSWY9XCJuekhlYWRlclwiIGNsYXNzPVwiYW50LWxpc3QtaGVhZGVyXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56SGVhZGVyXCI+e3sgbnpIZWFkZXIgfX08L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbjxuei1zcGluIFtuelNwaW5uaW5nXT1cIm56TG9hZGluZ1wiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekRhdGFTb3VyY2VcIj5cclxuICAgIDxkaXYgKm5nSWY9XCJuekxvYWRpbmcgJiYgbnpEYXRhU291cmNlLmxlbmd0aCA9PT0gMFwiIFtzdHlsZS5taW4taGVpZ2h0LnB4XT1cIjUzXCI+PC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibnpHcmlkOyBlbHNlIGl0ZW1zVHBsXCIgbnotcm93IFtuekd1dHRlcl09XCJuekdyaWQuZ3V0dGVyXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBuei1jb2xcclxuICAgICAgICBbbnpTcGFuXT1cIm56R3JpZC5zcGFuXCJcclxuICAgICAgICBbbnpYc109XCJuekdyaWQueHNcIlxyXG4gICAgICAgIFtuelNtXT1cIm56R3JpZC5zbVwiXHJcbiAgICAgICAgW256TWRdPVwibnpHcmlkLm1kXCJcclxuICAgICAgICBbbnpMZ109XCJuekdyaWQubGdcIlxyXG4gICAgICAgIFtuelhsXT1cIm56R3JpZC54bFwiXHJcbiAgICAgICAgW256WFhsXT1cIm56R3JpZC54eGxcIlxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIG56RGF0YVNvdXJjZTsgbGV0IGluZGV4ID0gaW5kZXhcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJuelJlbmRlckl0ZW1cIlxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpdGVtLCBpbmRleDogaW5kZXggfVwiXHJcbiAgICAgICAgPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiIW56TG9hZGluZyAmJiBuekRhdGFTb3VyY2UubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJhbnQtbGlzdC1lbXB0eS10ZXh0XCI+XHJcbiAgICAgIDxuei1lbWJlZC1lbXB0eSBbbnpDb21wb25lbnROYW1lXT1cIidsaXN0J1wiIFtzcGVjaWZpY0NvbnRlbnRdPVwibnpOb1Jlc3VsdFwiPjwvbnotZW1iZWQtZW1wdHk+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbnotc3Bpbj5cclxuPGRpdiAqbmdJZj1cIm56Rm9vdGVyXCIgY2xhc3M9XCJhbnQtbGlzdC1mb290ZXJcIj5cclxuICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpGb290ZXJcIj57eyBuekZvb3RlciB9fTwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56TG9hZE1vcmVcIj48L25nLXRlbXBsYXRlPlxyXG48ZGl2ICpuZ0lmPVwibnpQYWdpbmF0aW9uXCIgY2xhc3M9XCJhbnQtbGlzdC1wYWdpbmF0aW9uXCI+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56UGFnaW5hdGlvblwiPjwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG4iXX0=