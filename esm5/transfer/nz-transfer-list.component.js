/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/checkbox";
import * as i4 from "ng-zorro-antd/empty";
import * as i5 from "./nz-transfer-search.component";
function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r1597 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1597.title);
} }
function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_template_3_Template(rf, ctx) { }
var _c0 = function (a0) { return { "ant-transfer-list-content-item-disabled": a0 }; };
var _c1 = function (a0) { return { $implicit: a0 }; };
function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r1605 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵlistener("click", function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r1605); var item_r1597 = i0.ɵɵnextContext().$implicit; var ctx_r1603 = i0.ɵɵnextContext(3); return ctx_r1603.onItemSelect(item_r1597); });
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵlistener("nzCheckedChange", function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template_label_nzCheckedChange_1_listener($event) { i0.ɵɵrestoreView(_r1605); var item_r1597 = i0.ɵɵnextContext().$implicit; var ctx_r1606 = i0.ɵɵnextContext(3); return ctx_r1606.onItemSelect(item_r1597); })("click", function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template_label_click_1_listener($event) { i0.ɵɵrestoreView(_r1605); return $event.stopPropagation(); });
    i0.ɵɵtemplate(2, NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_container_2_Template, 2, 1, "ng-container", 7);
    i0.ɵɵtemplate(3, NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_template_3_Template, 0, 0, "ng-template", 17, 18, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r1600 = i0.ɵɵreference(4);
    var item_r1597 = i0.ɵɵnextContext().$implicit;
    var ctx_r1598 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx_r1598.disabled || item_r1597.disabled));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzChecked", item_r1597.checked)("nzDisabled", ctx_r1598.disabled || item_r1597.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1598.render)("ngIfElse", _r1600);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1598.render)("ngTemplateOutletContext", i0.ɵɵpureFunction1(9, _c1, item_r1597));
} }
function NzTransferListComponent_ng_template_0_ul_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template, 5, 11, "li", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1597 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r1597.hide);
} }
function NzTransferListComponent_ng_template_0_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 11);
    i0.ɵɵtemplate(1, NzTransferListComponent_ng_template_0_ul_0_div_1_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1594 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1594.dataSource);
} }
function NzTransferListComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "nz-embed-empty", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1595 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzComponentName", "transfer")("specificContent", ctx_r1595.notFoundContent);
} }
function NzTransferListComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzTransferListComponent_ng_template_0_ul_0_Template, 2, 1, "ul", 9);
    i0.ɵɵtemplate(1, NzTransferListComponent_ng_template_0_div_1_Template, 2, 2, "div", 10);
} if (rf & 2) {
    var ctx_r1588 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1588.stat.shownCount > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1588.stat.shownCount === 0);
} }
function NzTransferListComponent_label_3_Template(rf, ctx) { if (rf & 1) {
    var _r1611 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 21);
    i0.ɵɵlistener("nzCheckedChange", function NzTransferListComponent_label_3_Template_label_nzCheckedChange_0_listener($event) { i0.ɵɵrestoreView(_r1611); var ctx_r1610 = i0.ɵɵnextContext(); return ctx_r1610.onItemSelectAll($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1589 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzChecked", ctx_r1589.stat.checkAll)("nzIndeterminate", ctx_r1589.stat.checkHalf)("nzDisabled", ctx_r1589.stat.shownCount == 0 || ctx_r1589.disabled);
} }
function NzTransferListComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1590 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1590.titleText);
} }
function NzTransferListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r1613 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵlistener("valueChanged", function NzTransferListComponent_div_9_Template_div_valueChanged_1_listener($event) { i0.ɵɵrestoreView(_r1613); var ctx_r1612 = i0.ɵɵnextContext(); return ctx_r1612.handleFilter($event); })("valueClear", function NzTransferListComponent_div_9_Template_div_valueClear_1_listener($event) { i0.ɵɵrestoreView(_r1613); var ctx_r1614 = i0.ɵɵnextContext(); return ctx_r1614.handleClear(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1591 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", ctx_r1591.searchPlaceholder)("disabled", ctx_r1591.disabled)("value", ctx_r1591.filter);
} }
function NzTransferListComponent_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c2 = function (a0, a1, a2, a3, a4, a5) { return { $implicit: a0, direction: a1, disabled: a2, onItemSelectAll: a3, onItemSelect: a4, stat: a5 }; };
function NzTransferListComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵtemplate(2, NzTransferListComponent_ng_container_10_ng_container_2_Template, 1, 0, "ng-container", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1592 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1592.renderList)("ngTemplateOutletContext", i0.ɵɵpureFunction6(2, _c2, ctx_r1592.dataSource, ctx_r1592.direction, ctx_r1592.disabled, ctx_r1592.onItemSelectAll, ctx_r1592.onItemSelect, ctx_r1592.stat));
} }
function NzTransferListComponent_div_11_ng_template_1_Template(rf, ctx) { }
function NzTransferListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, NzTransferListComponent_div_11_ng_template_1_Template, 0, 0, "ng-template", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1593 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1593.footer)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r1593.direction));
} }
var _c3 = function (a0) { return { "ant-transfer__nodata": a0 }; };
var NzTransferListComponent = /** @class */ (function () {
    // #endregion
    function NzTransferListComponent(el, updateHostClassService, cdr) {
        var _this = this;
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.cdr = cdr;
        // #region fields
        this.direction = '';
        this.titleText = '';
        this.showSelectAll = true;
        this.dataSource = [];
        this.itemUnit = '';
        this.itemsUnit = '';
        this.filter = '';
        // events
        this.handleSelectAll = new EventEmitter();
        this.handleSelect = new EventEmitter();
        this.filterChange = new EventEmitter();
        // #endregion
        // #region styles
        this.prefixCls = 'ant-transfer-list';
        // #endregion
        // #region select all
        this.stat = {
            checkAll: false,
            checkHalf: false,
            checkCount: 0,
            shownCount: 0
        };
        this.onItemSelect = function (item) {
            if (_this.disabled || item.disabled) {
                return;
            }
            item.checked = !item.checked;
            _this.updateCheckStatus();
            _this.handleSelect.emit(item);
        };
        this.onItemSelectAll = function (status) {
            _this.dataSource.forEach(function (item) {
                if (!item.disabled && !item.hide) {
                    item.checked = status;
                }
            });
            _this.updateCheckStatus();
            _this.handleSelectAll.emit(status);
        };
    }
    NzTransferListComponent.prototype.setClassMap = function () {
        var _a;
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-with-footer"] = !!this.footer,
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    NzTransferListComponent.prototype.updateCheckStatus = function () {
        var validCount = this.dataSource.filter(function (w) { return !w.disabled; }).length;
        this.stat.checkCount = this.dataSource.filter(function (w) { return w.checked && !w.disabled; }).length;
        this.stat.shownCount = this.dataSource.filter(function (w) { return !w.hide; }).length;
        this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
        this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    };
    // #endregion
    // #region search
    NzTransferListComponent.prototype.handleFilter = function (value) {
        var _this = this;
        this.filter = value;
        this.dataSource.forEach(function (item) {
            item.hide = value.length > 0 && !_this.matchFilter(value, item);
        });
        this.stat.shownCount = this.dataSource.filter(function (w) { return !w.hide; }).length;
        this.filterChange.emit({ direction: this.direction, value: value });
    };
    NzTransferListComponent.prototype.handleClear = function () {
        this.handleFilter('');
    };
    NzTransferListComponent.prototype.matchFilter = function (text, item) {
        if (this.filterOption) {
            return this.filterOption(text, item);
        }
        return item.title.includes(text);
    };
    NzTransferListComponent.prototype.ngOnChanges = function (changes) {
        if ('footer' in changes) {
            this.setClassMap();
        }
    };
    NzTransferListComponent.prototype.ngOnInit = function () {
        this.setClassMap();
    };
    NzTransferListComponent.prototype.markForCheck = function () {
        this.updateCheckStatus();
        this.cdr.markForCheck();
    };
    /** @nocollapse */ NzTransferListComponent.ɵfac = function NzTransferListComponent_Factory(t) { return new (t || NzTransferListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzTransferListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTransferListComponent, selectors: [["nz-transfer-list"]], inputs: { direction: "direction", titleText: "titleText", showSelectAll: "showSelectAll", dataSource: "dataSource", itemUnit: "itemUnit", itemsUnit: "itemsUnit", filter: "filter", disabled: "disabled", showSearch: "showSearch", searchPlaceholder: "searchPlaceholder", notFoundContent: "notFoundContent", filterOption: "filterOption", renderList: "renderList", render: "render", footer: "footer" }, outputs: { handleSelectAll: "handleSelectAll", handleSelect: "handleSelect", filterChange: "filterChange" }, exportAs: ["nzTransferList"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], decls: 12, vars: 14, consts: [["defaultRenderList", ""], [1, "ant-transfer-list-header"], ["nz-checkbox", "", 3, "nzChecked", "nzIndeterminate", "nzDisabled", "nzCheckedChange", 4, "ngIf"], [1, "ant-transfer-list-header-selected"], ["class", "ant-transfer-list-header-title", 4, "ngIf"], [3, "ngClass"], ["class", "ant-transfer-list-body-search-wrapper", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "ant-transfer-list-footer", 4, "ngIf"], ["class", "ant-transfer-list-content", 4, "ngIf"], ["class", "ant-transfer-list-body-not-found", 4, "ngIf"], [1, "ant-transfer-list-content"], ["class", "LazyLoad", 4, "ngFor", "ngForOf"], [1, "LazyLoad"], ["class", "ant-transfer-list-content-item", 3, "ngClass", "click", 4, "ngIf"], [1, "ant-transfer-list-content-item", 3, "ngClass", "click"], ["nz-checkbox", "", 3, "nzChecked", "nzDisabled", "nzCheckedChange", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["renderContainer", ""], [1, "ant-transfer-list-body-not-found"], [3, "nzComponentName", "specificContent"], ["nz-checkbox", "", 3, "nzChecked", "nzIndeterminate", "nzDisabled", "nzCheckedChange"], [1, "ant-transfer-list-header-title"], [1, "ant-transfer-list-body-search-wrapper"], ["nz-transfer-search", "", 3, "placeholder", "disabled", "value", "valueChanged", "valueClear"], [1, "ant-transfer-list-body-customize-wrapper"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-transfer-list-footer"]], template: function NzTransferListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzTransferListComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵtemplate(3, NzTransferListComponent_label_3_Template, 1, 3, "label", 2);
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, NzTransferListComponent_span_7_Template, 2, 1, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵtemplate(9, NzTransferListComponent_div_9_Template, 2, 3, "div", 6);
            i0.ɵɵtemplate(10, NzTransferListComponent_ng_container_10_Template, 3, 9, "ng-container", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, NzTransferListComponent_div_11_Template, 2, 4, "div", 8);
        } if (rf & 2) {
            var _r1587 = i0.ɵɵreference(1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.showSelectAll);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("", (ctx.stat.checkCount > 0 ? ctx.stat.checkCount + "/" : "") + ctx.stat.shownCount, " ", ctx.dataSource.length > 1 ? ctx.itemsUnit : ctx.itemUnit, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.titleText);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(ctx.showSearch ? "ant-transfer-list-body ant-transfer-list-body-with-search" : "ant-transfer-list-body");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c3, ctx.stat.shownCount === 0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showSearch);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.renderList)("ngIfElse", _r1587);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.footer);
        } }, directives: [i2.NgIf, i2.NgClass, i2.NgForOf, i3.NzCheckboxComponent, i2.NgTemplateOutlet, i4.NzEmbedEmptyComponent, i5.NzTransferSearchComponent], encapsulation: 2, changeDetection: 0 });
    return NzTransferListComponent;
}());
export { NzTransferListComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTransferListComponent, [{
        type: Component,
        args: [{
                selector: 'nz-transfer-list',
                exportAs: 'nzTransferList',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                templateUrl: './nz-transfer-list.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzUpdateHostClassService }, { type: i0.ChangeDetectorRef }]; }, { direction: [{
            type: Input
        }], titleText: [{
            type: Input
        }], showSelectAll: [{
            type: Input
        }], dataSource: [{
            type: Input
        }], itemUnit: [{
            type: Input
        }], itemsUnit: [{
            type: Input
        }], filter: [{
            type: Input
        }], disabled: [{
            type: Input
        }], showSearch: [{
            type: Input
        }], searchPlaceholder: [{
            type: Input
        }], notFoundContent: [{
            type: Input
        }], filterOption: [{
            type: Input
        }], renderList: [{
            type: Input
        }], render: [{
            type: Input
        }], footer: [{
            type: Input
        }], handleSelectAll: [{
            type: Output
        }], handleSelect: [{
            type: Output
        }], filterChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyYW5zZmVyLyIsInNvdXJjZXMiOlsibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQudHMiLCJuei10cmFuc2Zlci1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7SUNQcEQsNkJBQW9EO0lBQUEsWUFBZ0I7SUFBQSwwQkFBZTs7O0lBQS9CLGVBQWdCO0lBQWhCLHNDQUFnQjs7Ozs7OztJQWJ4RSw4QkFNRTtJQUpBLHdSQUE0QjtJQUk1QixpQ0FPRTtJQUpBLCtTQUFzQyxvSkFDN0Isd0JBQXdCLElBREs7SUFJdEMsd0hBQW9EO0lBQ3BELHNKQUlDO0lBQ0gsaUJBQVE7SUFDVixpQkFBSzs7Ozs7SUFoQkgsK0ZBQW9GO0lBSWxGLGVBQTBCO0lBQTFCLDhDQUEwQix5REFBQTtJQUtaLGVBQXFDO0lBQXJDLHdDQUFxQyxvQkFBQTtJQUdqRCxlQUEyQjtJQUEzQixtREFBMkIsbUVBQUE7OztJQWpCbkMsK0JBQ0U7SUFBQSxpR0FNRTtJQWVKLGlCQUFNOzs7SUFwQkYsZUFBa0I7SUFBbEIsdUNBQWtCOzs7SUFIeEIsOEJBQ0U7SUFBQSw0RkFDRTtJQXNCSixpQkFBSzs7O0lBdkJtQixlQUErQjtJQUEvQiw4Q0FBK0I7OztJQXdCdkQsK0JBQ0U7SUFBQSxxQ0FHa0I7SUFDcEIsaUJBQU07OztJQUhGLGVBQThCO0lBQTlCLDRDQUE4Qiw4Q0FBQTs7O0lBM0JsQyxvRkFDRTtJ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dGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUcmFuc2Zlckl0ZW0gfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXRyYW5zZmVyLWxpc3QnLFxyXG4gIGV4cG9ydEFzOiAnbnpUcmFuc2Zlckxpc3QnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRyYW5zZmVyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VHJhbnNmZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbiA9ICcnO1xyXG4gIEBJbnB1dCgpIHRpdGxlVGV4dCA9ICcnO1xyXG4gIEBJbnB1dCgpIHNob3dTZWxlY3RBbGwgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBkYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xyXG5cclxuICBASW5wdXQoKSBpdGVtVW5pdCA9ICcnO1xyXG4gIEBJbnB1dCgpIGl0ZW1zVW5pdCA9ICcnO1xyXG4gIEBJbnB1dCgpIGZpbHRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dTZWFyY2g6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBmaWx0ZXJPcHRpb246IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgcmVuZGVyTGlzdDogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgcmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBmb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICAvLyBldmVudHNcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaGFuZGxlU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGhhbmRsZVNlbGVjdDogRXZlbnRFbWl0dGVyPFRyYW5zZmVySXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgZGlyZWN0aW9uOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBzdHlsZXNcclxuXHJcbiAgcHJlZml4Q2xzID0gJ2FudC10cmFuc2Zlci1saXN0JztcclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS13aXRoLWZvb3RlcmBdOiAhIXRoaXMuZm9vdGVyXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBzZWxlY3QgYWxsXHJcblxyXG4gIHN0YXQgPSB7XHJcbiAgICBjaGVja0FsbDogZmFsc2UsXHJcbiAgICBjaGVja0hhbGY6IGZhbHNlLFxyXG4gICAgY2hlY2tDb3VudDogMCxcclxuICAgIHNob3duQ291bnQ6IDBcclxuICB9O1xyXG5cclxuICBvbkl0ZW1TZWxlY3QgPSAoaXRlbTogVHJhbnNmZXJJdGVtKSA9PiB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBpdGVtLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XHJcbiAgICB0aGlzLnVwZGF0ZUNoZWNrU3RhdHVzKCk7XHJcbiAgICB0aGlzLmhhbmRsZVNlbGVjdC5lbWl0KGl0ZW0pO1xyXG4gIH07XHJcblxyXG4gIG9uSXRlbVNlbGVjdEFsbCA9IChzdGF0dXM6IGJvb2xlYW4pID0+IHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQgJiYgIWl0ZW0uaGlkZSkge1xyXG4gICAgICAgIGl0ZW0uY2hlY2tlZCA9IHN0YXR1cztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xyXG4gICAgdGhpcy5oYW5kbGVTZWxlY3RBbGwuZW1pdChzdGF0dXMpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ2hlY2tTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWxpZENvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5sZW5ndGg7XHJcbiAgICB0aGlzLnN0YXQuY2hlY2tDb3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgJiYgIXcuZGlzYWJsZWQpLmxlbmd0aDtcclxuICAgIHRoaXMuc3RhdC5zaG93bkNvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3LmhpZGUpLmxlbmd0aDtcclxuICAgIHRoaXMuc3RhdC5jaGVja0FsbCA9IHZhbGlkQ291bnQgPiAwICYmIHZhbGlkQ291bnQgPT09IHRoaXMuc3RhdC5jaGVja0NvdW50O1xyXG4gICAgdGhpcy5zdGF0LmNoZWNrSGFsZiA9IHRoaXMuc3RhdC5jaGVja0NvdW50ID4gMCAmJiAhdGhpcy5zdGF0LmNoZWNrQWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHNlYXJjaFxyXG5cclxuICBoYW5kbGVGaWx0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5maWx0ZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpdGVtLmhpZGUgPSB2YWx1ZS5sZW5ndGggPiAwICYmICF0aGlzLm1hdGNoRmlsdGVyKHZhbHVlLCBpdGVtKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0LnNob3duQ291bnQgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHcgPT4gIXcuaGlkZSkubGVuZ3RoO1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7IGRpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb24sIHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZUZpbHRlcignJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1hdGNoRmlsdGVyKHRleHQ6IHN0cmluZywgaXRlbTogVHJhbnNmZXJJdGVtKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5maWx0ZXJPcHRpb24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyT3B0aW9uKHRleHQsIGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW0udGl0bGUuaW5jbHVkZXModGV4dCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICgnZm9vdGVyJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFJlbmRlckxpc3Q+XHJcbiAgPHVsICpuZ0lmPVwic3RhdC5zaG93bkNvdW50ID4gMFwiIGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3QtY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIkxhenlMb2FkXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVNvdXJjZVwiPlxyXG4gICAgICA8bGlcclxuICAgICAgICAqbmdJZj1cIiFpdGVtLmhpZGVcIlxyXG4gICAgICAgIChjbGljayk9XCJvbkl0ZW1TZWxlY3QoaXRlbSlcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3QtY29udGVudC1pdGVtXCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7ICdhbnQtdHJhbnNmZXItbGlzdC1jb250ZW50LWl0ZW0tZGlzYWJsZWQnOiBkaXNhYmxlZCB8fCBpdGVtLmRpc2FibGVkIH1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICBuei1jaGVja2JveFxyXG4gICAgICAgICAgW256Q2hlY2tlZF09XCJpdGVtLmNoZWNrZWRcIlxyXG4gICAgICAgICAgKG56Q2hlY2tlZENoYW5nZSk9XCJvbkl0ZW1TZWxlY3QoaXRlbSlcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBpdGVtLmRpc2FibGVkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJlbmRlcjsgZWxzZSByZW5kZXJDb250YWluZXJcIj57eyBpdGVtLnRpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgI3JlbmRlckNvbnRhaW5lclxyXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJyZW5kZXJcIlxyXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0gfVwiXHJcbiAgICAgICAgICA+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9kaXY+XHJcbiAgPC91bD5cclxuICA8ZGl2ICpuZ0lmPVwic3RhdC5zaG93bkNvdW50ID09PSAwXCIgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1ib2R5LW5vdC1mb3VuZFwiPlxyXG4gICAgPG56LWVtYmVkLWVtcHR5XHJcbiAgICAgIFtuekNvbXBvbmVudE5hbWVdPVwiJ3RyYW5zZmVyJ1wiXHJcbiAgICAgIFtzcGVjaWZpY0NvbnRlbnRdPVwibm90Rm91bmRDb250ZW50XCJcclxuICAgID48L256LWVtYmVkLWVtcHR5PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3QtaGVhZGVyXCI+XHJcbiAgPGxhYmVsXHJcbiAgICAqbmdJZj1cInNob3dTZWxlY3RBbGxcIlxyXG4gICAgbnotY2hlY2tib3hcclxuICAgIFtuekNoZWNrZWRdPVwic3RhdC5jaGVja0FsbFwiXHJcbiAgICAobnpDaGVja2VkQ2hhbmdlKT1cIm9uSXRlbVNlbGVjdEFsbCgkZXZlbnQpXCJcclxuICAgIFtuekluZGV0ZXJtaW5hdGVdPVwic3RhdC5jaGVja0hhbGZcIlxyXG4gICAgW256RGlzYWJsZWRdPVwic3RhdC5zaG93bkNvdW50ID09IDAgfHwgZGlzYWJsZWRcIlxyXG4gID5cclxuICA8L2xhYmVsPlxyXG4gIDxzcGFuIGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3QtaGVhZGVyLXNlbGVjdGVkXCI+XHJcbiAgICA8c3BhblxyXG4gICAgICA+e3sgKHN0YXQuY2hlY2tDb3VudCA+IDAgPyBzdGF0LmNoZWNrQ291bnQgKyAnLycgOiAnJykgKyBzdGF0LnNob3duQ291bnQgfX1cclxuICAgICAge3sgZGF0YVNvdXJjZS5sZW5ndGggPiAxID8gaXRlbXNVbml0IDogaXRlbVVuaXQgfX08L3NwYW5cclxuICAgID5cclxuICAgIDxzcGFuICpuZ0lmPVwidGl0bGVUZXh0XCIgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1oZWFkZXItdGl0bGVcIj57eyB0aXRsZVRleHQgfX08L3NwYW4+XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj5cclxuPGRpdlxyXG4gIGNsYXNzPVwie3tcclxuICAgIHNob3dTZWFyY2hcclxuICAgICAgPyAnYW50LXRyYW5zZmVyLWxpc3QtYm9keSBhbnQtdHJhbnNmZXItbGlzdC1ib2R5LXdpdGgtc2VhcmNoJ1xyXG4gICAgICA6ICdhbnQtdHJhbnNmZXItbGlzdC1ib2R5J1xyXG4gIH19XCJcclxuICBbbmdDbGFzc109XCJ7ICdhbnQtdHJhbnNmZXJfX25vZGF0YSc6IHN0YXQuc2hvd25Db3VudCA9PT0gMCB9XCJcclxuPlxyXG4gIDxkaXYgKm5nSWY9XCJzaG93U2VhcmNoXCIgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1ib2R5LXNlYXJjaC13cmFwcGVyXCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIG56LXRyYW5zZmVyLXNlYXJjaFxyXG4gICAgICAodmFsdWVDaGFuZ2VkKT1cImhhbmRsZUZpbHRlcigkZXZlbnQpXCJcclxuICAgICAgKHZhbHVlQ2xlYXIpPVwiaGFuZGxlQ2xlYXIoKVwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJzZWFyY2hQbGFjZWhvbGRlclwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFt2YWx1ZV09XCJmaWx0ZXJcIlxyXG4gICAgPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZW5kZXJMaXN0OyBlbHNlIGRlZmF1bHRSZW5kZXJMaXN0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3QtYm9keS1jdXN0b21pemUtd3JhcHBlclwiPlxyXG4gICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcclxuICAgICAgICAgIHJlbmRlckxpc3Q7XHJcbiAgICAgICAgICBjb250ZXh0OiB7XHJcbiAgICAgICAgICAgICRpbXBsaWNpdDogZGF0YVNvdXJjZSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcclxuICAgICAgICAgICAgb25JdGVtU2VsZWN0QWxsOiBvbkl0ZW1TZWxlY3RBbGwsXHJcbiAgICAgICAgICAgIG9uSXRlbVNlbGVjdDogb25JdGVtU2VsZWN0LFxyXG4gICAgICAgICAgICBzdGF0OiBzdGF0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXCJcclxuICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwiZm9vdGVyXCIgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1mb290ZXJcIj5cclxuICA8bmctdGVtcGxhdGVcclxuICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZvb3RlclwiXHJcbiAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGRpcmVjdGlvbiB9XCJcclxuICA+PC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbiJdfQ==