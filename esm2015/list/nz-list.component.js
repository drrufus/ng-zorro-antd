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
const _c0 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzListComponent_ng_template_0_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzListComponent_ng_template_0_div_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1134 = ctx.$implicit;
    const index_r1135 = ctx.index;
    const ctx_r1133 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1133.nzRenderItem)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, item_r1134, index_r1135));
} }
function NzListComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, NzListComponent_ng_template_0_div_0_ng_container_1_Template, 2, 5, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1132 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1132.nzDataSource);
} }
function NzListComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzListComponent_ng_template_0_div_0_Template, 2, 1, "div", 7);
} if (rf & 2) {
    const ctx_r1126 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1126.nzDataSource.length > 0);
} }
function NzListComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1137 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1137.nzHeader);
} }
function NzListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, NzListComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1127 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1127.nzHeader);
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
    const item_r1142 = ctx.$implicit;
    const index_r1143 = ctx.index;
    const ctx_r1141 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzSpan", ctx_r1141.nzGrid.span)("nzXs", ctx_r1141.nzGrid.xs)("nzSm", ctx_r1141.nzGrid.sm)("nzMd", ctx_r1141.nzGrid.md)("nzLg", ctx_r1141.nzGrid.lg)("nzXl", ctx_r1141.nzGrid.xl)("nzXXl", ctx_r1141.nzGrid.xxl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1141.nzRenderItem)("ngTemplateOutletContext", i0.ɵɵpureFunction2(9, _c0, item_r1142, index_r1143));
} }
function NzListComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, NzListComponent_ng_container_4_div_2_div_1_Template, 2, 12, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1139 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzGutter", ctx_r1139.nzGrid.gutter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1139.nzDataSource);
} }
function NzListComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "nz-embed-empty", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1140 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzComponentName", "list")("specificContent", ctx_r1140.nzNoResult);
} }
function NzListComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzListComponent_ng_container_4_div_1_Template, 1, 1, "div", 13);
    i0.ɵɵtemplate(2, NzListComponent_ng_container_4_div_2_Template, 2, 2, "div", 14);
    i0.ɵɵtemplate(3, NzListComponent_ng_container_4_div_3_Template, 2, 2, "div", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1128 = i0.ɵɵnextContext();
    const _r1125 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1128.nzLoading && ctx_r1128.nzDataSource.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1128.nzGrid)("ngIfElse", _r1125);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1128.nzLoading && ctx_r1128.nzDataSource.length === 0);
} }
function NzListComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1145 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1145.nzFooter);
} }
function NzListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, NzListComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1129 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1129.nzFooter);
} }
function NzListComponent_ng_template_7_Template(rf, ctx) { }
function NzListComponent_div_8_ng_template_1_Template(rf, ctx) { }
function NzListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, NzListComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1131 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1131.nzPagination);
} }
const _c1 = ["*"];
export class NzListComponent {
    constructor(el, updateHostClassService) {
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
    _setClassMap() {
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-vertical`]: this.nzItemLayout === 'vertical',
            [`${this.prefixCls}-lg`]: this.nzSize === 'large',
            [`${this.prefixCls}-sm`]: this.nzSize === 'small',
            [`${this.prefixCls}-split`]: this.nzSplit,
            [`${this.prefixCls}-bordered`]: this.nzBordered,
            [`${this.prefixCls}-loading`]: this.nzLoading,
            [`${this.prefixCls}-grid`]: this.nzGrid,
            [`${this.prefixCls}-something-after-last-item`]: !!(this.nzLoadMore || this.nzPagination || this.nzFooter)
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    get itemLayoutNotify$() {
        return this.itemLayoutNotifySource.asObservable();
    }
    ngOnInit() {
        this._setClassMap();
    }
    ngOnChanges(changes) {
        this._setClassMap();
        if (changes.nzItemLayout) {
            this.itemLayoutNotifySource.next(this.nzItemLayout);
        }
    }
    ngOnDestroy() {
        this.itemLayoutNotifySource.unsubscribe();
    }
}
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
                    `
      nz-list,
      nz-list nz-spin {
        display: block;
      }
    `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2xpc3QvIiwic291cmNlcyI6WyJuei1saXN0LmNvbXBvbmVudC50cyIsIm56LWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBS0wsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFvQyx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlHLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7SUNyQi9DLDZCQUNFO0lBQUEsb0hBR0M7SUFDSCwwQkFBZTs7Ozs7SUFIWCxlQUFpQztJQUFqQyx5REFBaUMsZ0ZBQUE7OztJQUh2Qyw4QkFDRTtJQUFBLHNHQUNFO0lBS0osaUJBQU07OztJQU5VLGVBQW9EO0lBQXBELGdEQUFvRDs7O0lBRHBFLDhFQUNFOzs7SUFEMEIsd0RBQStCOzs7SUFVM0QsNkJBQWlEO0lBQUEsWUFBYztJQUFBLDBCQUFlOzs7SUFBN0IsZUFBYztJQUFkLHdDQUFjOzs7SUFEakUsK0JBQ0U7SUFBQSx5RkFBaUQ7SUFDbkQsaUJBQU07OztJQURVLGVBQWtDO0lBQWxDLDJEQUFrQzs7O0lBSTlDLHNCQUFxRjs7SUFBakMsc0NBQTBCOzs7O0lBRTVFLCtCQVdFO0lBQUEsNEdBR0M7SUFDSCxpQkFBTTs7Ozs7SUFiSiw4Q0FBc0IsNkJBQUEsNkJBQUEsNkJBQUEsNkJBQUEsNkJBQUEsK0JBQUE7SUFVcEIsZUFBaUM7SUFBakMseURBQWlDLGdGQUFBOzs7SUFidkMsK0JBQ0U7SUFBQSx1RkFXRTtJQUtKLGlCQUFNOzs7SUFqQm9DLGtEQUEwQjtJQVVoRSxlQUFvRDtJQUFwRCxnREFBb0Q7OztJQVF4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cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpEaXJlY3Rpb25WSFR5cGUsIE56U2l6ZUxEU1R5cGUsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpMaXN0R3JpZCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotbGlzdCwgW256LWxpc3RdJyxcclxuICBleHBvcnRBczogJ256TGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotbGlzdCxcclxuICAgICAgbnotbGlzdCBuei1zcGluIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogYW55W107XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56R3JpZDogTnpMaXN0R3JpZDtcclxuXHJcbiAgQElucHV0KCkgbnpIZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuekZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIG56SXRlbUxheW91dDogTnpEaXJlY3Rpb25WSFR5cGUgPSAnaG9yaXpvbnRhbCc7XHJcblxyXG4gIEBJbnB1dCgpIG56UmVuZGVySXRlbTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbnpMb2FkTW9yZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIG56UGFnaW5hdGlvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U3BsaXQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBuek5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHN0eWxlc1xyXG5cclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtbGlzdCc7XHJcblxyXG4gIHByaXZhdGUgX3NldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdmVydGljYWxgXTogdGhpcy5uekl0ZW1MYXlvdXQgPT09ICd2ZXJ0aWNhbCcsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGdgXTogdGhpcy5uelNpemUgPT09ICdsYXJnZScsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc21gXTogdGhpcy5uelNpemUgPT09ICdzbWFsbCcsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3BsaXRgXTogdGhpcy5uelNwbGl0LFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWJvcmRlcmVkYF06IHRoaXMubnpCb3JkZXJlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sb2FkaW5nYF06IHRoaXMubnpMb2FkaW5nLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWdyaWRgXTogdGhpcy5uekdyaWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc29tZXRoaW5nLWFmdGVyLWxhc3QtaXRlbWBdOiAhISh0aGlzLm56TG9hZE1vcmUgfHwgdGhpcy5uelBhZ2luYXRpb24gfHwgdGhpcy5uekZvb3RlcilcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBwcml2YXRlIGl0ZW1MYXlvdXROb3RpZnlTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56RGlyZWN0aW9uVkhUeXBlPih0aGlzLm56SXRlbUxheW91dCk7XHJcblxyXG4gIGdldCBpdGVtTGF5b3V0Tm90aWZ5JCgpOiBPYnNlcnZhYmxlPE56RGlyZWN0aW9uVkhUeXBlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtTGF5b3V0Tm90aWZ5U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NldENsYXNzTWFwKCk7XHJcbiAgICBpZiAoY2hhbmdlcy5uekl0ZW1MYXlvdXQpIHtcclxuICAgICAgdGhpcy5pdGVtTGF5b3V0Tm90aWZ5U291cmNlLm5leHQodGhpcy5uekl0ZW1MYXlvdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1MYXlvdXROb3RpZnlTb3VyY2UudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNpdGVtc1RwbD5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWxpc3QtaXRlbXNcIiAqbmdJZj1cIm56RGF0YVNvdXJjZS5sZW5ndGggPiAwXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIG56RGF0YVNvdXJjZTsgbGV0IGluZGV4ID0gaW5kZXhcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpSZW5kZXJJdGVtXCJcclxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0sIGluZGV4OiBpbmRleCB9XCJcclxuICAgICAgPjwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPGRpdiAqbmdJZj1cIm56SGVhZGVyXCIgY2xhc3M9XCJhbnQtbGlzdC1oZWFkZXJcIj5cclxuICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpIZWFkZXJcIj57eyBuekhlYWRlciB9fTwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPG56LXNwaW4gW256U3Bpbm5pbmddPVwibnpMb2FkaW5nXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56RGF0YVNvdXJjZVwiPlxyXG4gICAgPGRpdiAqbmdJZj1cIm56TG9hZGluZyAmJiBuekRhdGFTb3VyY2UubGVuZ3RoID09PSAwXCIgW3N0eWxlLm1pbi1oZWlnaHQucHhdPVwiNTNcIj48L2Rpdj5cclxuICAgIDxkaXYgKm5nSWY9XCJuekdyaWQ7IGVsc2UgaXRlbXNUcGxcIiBuei1yb3cgW256R3V0dGVyXT1cIm56R3JpZC5ndXR0ZXJcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIG56LWNvbFxyXG4gICAgICAgIFtuelNwYW5dPVwibnpHcmlkLnNwYW5cIlxyXG4gICAgICAgIFtuelhzXT1cIm56R3JpZC54c1wiXHJcbiAgICAgICAgW256U21dPVwibnpHcmlkLnNtXCJcclxuICAgICAgICBbbnpNZF09XCJuekdyaWQubWRcIlxyXG4gICAgICAgIFtuekxnXT1cIm56R3JpZC5sZ1wiXHJcbiAgICAgICAgW256WGxdPVwibnpHcmlkLnhsXCJcclxuICAgICAgICBbbnpYWGxdPVwibnpHcmlkLnh4bFwiXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbnpEYXRhU291cmNlOyBsZXQgaW5kZXggPSBpbmRleFwiXHJcbiAgICAgID5cclxuICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56UmVuZGVySXRlbVwiXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0sIGluZGV4OiBpbmRleCB9XCJcclxuICAgICAgICA+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nSWY9XCIhbnpMb2FkaW5nICYmIG56RGF0YVNvdXJjZS5sZW5ndGggPT09IDBcIiBjbGFzcz1cImFudC1saXN0LWVtcHR5LXRleHRcIj5cclxuICAgICAgPG56LWVtYmVkLWVtcHR5IFtuekNvbXBvbmVudE5hbWVdPVwiJ2xpc3QnXCIgW3NwZWNpZmljQ29udGVudF09XCJuek5vUmVzdWx0XCI+PC9uei1lbWJlZC1lbXB0eT5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9uei1zcGluPlxyXG48ZGl2ICpuZ0lmPVwibnpGb290ZXJcIiBjbGFzcz1cImFudC1saXN0LWZvb3RlclwiPlxyXG4gIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekZvb3RlclwiPnt7IG56Rm9vdGVyIH19PC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG48bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpMb2FkTW9yZVwiPjwvbmctdGVtcGxhdGU+XHJcbjxkaXYgKm5nSWY9XCJuelBhZ2luYXRpb25cIiBjbGFzcz1cImFudC1saXN0LXBhZ2luYXRpb25cIj5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpQYWdpbmF0aW9uXCI+PC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbiJdfQ==