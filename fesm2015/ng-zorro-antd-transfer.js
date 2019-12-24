import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelement, ɵɵelementEnd, EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵproperty, ɵɵpureFunction1, ɵɵadvance, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵtextInterpolate, ɵɵelementContainer, ɵɵpureFunction6, ElementRef, ɵɵProvidersFeature, ɵɵtextInterpolate2, ɵɵclassMap, Renderer2, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵclassProp, ViewChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzUpdateHostClassService, InputBoolean } from 'ng-zorro-antd/core';
import { NgClass, NgIf, NgForOf, NgTemplateOutlet, NgStyle, CommonModule } from '@angular/common';
import { NzCheckboxComponent, NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmbedEmptyComponent, NzEmptyModule } from 'ng-zorro-antd/empty';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { __decorate, __metadata } from 'tslib';
import { Subject, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["nz-transfer-search", ""];
function NzTransferSearchComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r1584 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function NzTransferSearchComponent_a_1_Template_a_click_0_listener($event) { ɵɵrestoreView(_r1584); const ctx_r1583 = ɵɵnextContext(); return ctx_r1583._clear(); });
    ɵɵelement(1, "i", 4);
    ɵɵelementEnd();
} }
function NzTransferSearchComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "i", 6);
    ɵɵelementEnd();
} }
const _c1 = function (a0) { return { "ant-input-disabled": a0 }; };
class NzTransferSearchComponent {
    // endregion
    constructor(cdr) {
        this.cdr = cdr;
        this.valueChanged = new EventEmitter();
        this.valueClear = new EventEmitter();
    }
    _handle() {
        this.valueChanged.emit(this.value);
    }
    _clear() {
        if (this.disabled) {
            return;
        }
        this.value = '';
        this.valueClear.emit();
    }
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
/** @nocollapse */ NzTransferSearchComponent.ɵfac = function NzTransferSearchComponent_Factory(t) { return new (t || NzTransferSearchComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzTransferSearchComponent.ɵcmp = ɵɵdefineComponent({ type: NzTransferSearchComponent, selectors: [["", "nz-transfer-search", ""]], inputs: { placeholder: "placeholder", value: "value", disabled: "disabled" }, outputs: { valueChanged: "valueChanged", valueClear: "valueClear" }, exportAs: ["nzTransferSearch"], features: [ɵɵNgOnChangesFeature()], attrs: _c0, decls: 4, vars: 8, consts: [[1, "ant-input", "ant-transfer-list-search", 3, "ngModel", "disabled", "placeholder", "ngClass", "ngModelChange"], ["class", "ant-transfer-list-search-action", 3, "click", 4, "ngIf", "ngIfElse"], ["def", ""], [1, "ant-transfer-list-search-action", 3, "click"], ["nz-icon", "", "nzType", "close-circle"], [1, "ant-transfer-list-search-action"], ["nz-icon", "", "nzType", "search"]], template: function NzTransferSearchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "input", 0);
        ɵɵlistener("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; })("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx._handle(); });
        ɵɵelementEnd();
        ɵɵtemplate(1, NzTransferSearchComponent_a_1_Template, 2, 0, "a", 1);
        ɵɵtemplate(2, NzTransferSearchComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1581 = ɵɵreference(3);
        ɵɵproperty("ngModel", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("ngClass", ɵɵpureFunction1(6, _c1, ctx.disabled));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.value && ctx.value.length > 0)("ngIfElse", _r1581);
    } }, directives: [DefaultValueAccessor, NgControlStatus, NgModel, NgClass, NgIf, NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTransferSearchComponent, [{
        type: Component,
        args: [{
                selector: '[nz-transfer-search]',
                exportAs: 'nzTransferSearch',
                preserveWhitespaces: false,
                templateUrl: './nz-transfer-search.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { placeholder: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }], valueClear: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1560 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r1560.title);
} }
function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_template_3_Template(rf, ctx) { }
const _c0$1 = function (a0) { return { "ant-transfer-list-content-item-disabled": a0 }; };
const _c1$1 = function (a0) { return { $implicit: a0 }; };
function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r1568 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15);
    ɵɵlistener("click", function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r1568); const item_r1560 = ɵɵnextContext().$implicit; const ctx_r1566 = ɵɵnextContext(3); return ctx_r1566.onItemSelect(item_r1560); });
    ɵɵelementStart(1, "label", 16);
    ɵɵlistener("nzCheckedChange", function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template_label_nzCheckedChange_1_listener($event) { ɵɵrestoreView(_r1568); const item_r1560 = ɵɵnextContext().$implicit; const ctx_r1569 = ɵɵnextContext(3); return ctx_r1569.onItemSelect(item_r1560); })("click", function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template_label_click_1_listener($event) { ɵɵrestoreView(_r1568); return $event.stopPropagation(); });
    ɵɵtemplate(2, NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_container_2_Template, 2, 1, "ng-container", 7);
    ɵɵtemplate(3, NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_template_3_Template, 0, 0, "ng-template", 17, 18, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r1563 = ɵɵreference(4);
    const item_r1560 = ɵɵnextContext().$implicit;
    const ctx_r1561 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c0$1, ctx_r1561.disabled || item_r1560.disabled));
    ɵɵadvance(1);
    ɵɵproperty("nzChecked", item_r1560.checked)("nzDisabled", ctx_r1561.disabled || item_r1560.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1561.render)("ngIfElse", _r1563);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1561.render)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c1$1, item_r1560));
} }
function NzTransferListComponent_ng_template_0_ul_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template, 5, 11, "li", 14);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r1560 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !item_r1560.hide);
} }
function NzTransferListComponent_ng_template_0_ul_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 11);
    ɵɵtemplate(1, NzTransferListComponent_ng_template_0_ul_0_div_1_Template, 2, 1, "div", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1557 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1557.dataSource);
} }
function NzTransferListComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵelement(1, "nz-embed-empty", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1558 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzComponentName", "transfer")("specificContent", ctx_r1558.notFoundContent);
} }
function NzTransferListComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzTransferListComponent_ng_template_0_ul_0_Template, 2, 1, "ul", 9);
    ɵɵtemplate(1, NzTransferListComponent_ng_template_0_div_1_Template, 2, 2, "div", 10);
} if (rf & 2) {
    const ctx_r1551 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1551.stat.shownCount > 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1551.stat.shownCount === 0);
} }
function NzTransferListComponent_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r1574 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 21);
    ɵɵlistener("nzCheckedChange", function NzTransferListComponent_label_3_Template_label_nzCheckedChange_0_listener($event) { ɵɵrestoreView(_r1574); const ctx_r1573 = ɵɵnextContext(); return ctx_r1573.onItemSelectAll($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1552 = ɵɵnextContext();
    ɵɵproperty("nzChecked", ctx_r1552.stat.checkAll)("nzIndeterminate", ctx_r1552.stat.checkHalf)("nzDisabled", ctx_r1552.stat.shownCount == 0 || ctx_r1552.disabled);
} }
function NzTransferListComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1553 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1553.titleText);
} }
function NzTransferListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r1576 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 23);
    ɵɵelementStart(1, "div", 24);
    ɵɵlistener("valueChanged", function NzTransferListComponent_div_9_Template_div_valueChanged_1_listener($event) { ɵɵrestoreView(_r1576); const ctx_r1575 = ɵɵnextContext(); return ctx_r1575.handleFilter($event); })("valueClear", function NzTransferListComponent_div_9_Template_div_valueClear_1_listener($event) { ɵɵrestoreView(_r1576); const ctx_r1577 = ɵɵnextContext(); return ctx_r1577.handleClear(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1554 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("placeholder", ctx_r1554.searchPlaceholder)("disabled", ctx_r1554.disabled)("value", ctx_r1554.filter);
} }
function NzTransferListComponent_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2 = function (a0, a1, a2, a3, a4, a5) { return { $implicit: a0, direction: a1, disabled: a2, onItemSelectAll: a3, onItemSelect: a4, stat: a5 }; };
function NzTransferListComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 25);
    ɵɵtemplate(2, NzTransferListComponent_ng_container_10_ng_container_2_Template, 1, 0, "ng-container", 26);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1555 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1555.renderList)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c2, ctx_r1555.dataSource, ctx_r1555.direction, ctx_r1555.disabled, ctx_r1555.onItemSelectAll, ctx_r1555.onItemSelect, ctx_r1555.stat));
} }
function NzTransferListComponent_div_11_ng_template_1_Template(rf, ctx) { }
function NzTransferListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, NzTransferListComponent_div_11_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1556 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1556.footer)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1$1, ctx_r1556.direction));
} }
const _c3 = function (a0) { return { "ant-transfer__nodata": a0 }; };
class NzTransferListComponent {
    // #endregion
    constructor(el, updateHostClassService, cdr) {
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
        this.onItemSelect = (item) => {
            if (this.disabled || item.disabled) {
                return;
            }
            item.checked = !item.checked;
            this.updateCheckStatus();
            this.handleSelect.emit(item);
        };
        this.onItemSelectAll = (status) => {
            this.dataSource.forEach(item => {
                if (!item.disabled && !item.hide) {
                    item.checked = status;
                }
            });
            this.updateCheckStatus();
            this.handleSelectAll.emit(status);
        };
    }
    setClassMap() {
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-with-footer`]: !!this.footer
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    updateCheckStatus() {
        const validCount = this.dataSource.filter(w => !w.disabled).length;
        this.stat.checkCount = this.dataSource.filter(w => w.checked && !w.disabled).length;
        this.stat.shownCount = this.dataSource.filter(w => !w.hide).length;
        this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
        this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    }
    // #endregion
    // #region search
    handleFilter(value) {
        this.filter = value;
        this.dataSource.forEach(item => {
            item.hide = value.length > 0 && !this.matchFilter(value, item);
        });
        this.stat.shownCount = this.dataSource.filter(w => !w.hide).length;
        this.filterChange.emit({ direction: this.direction, value });
    }
    handleClear() {
        this.handleFilter('');
    }
    matchFilter(text, item) {
        if (this.filterOption) {
            return this.filterOption(text, item);
        }
        return item.title.includes(text);
    }
    ngOnChanges(changes) {
        if ('footer' in changes) {
            this.setClassMap();
        }
    }
    ngOnInit() {
        this.setClassMap();
    }
    markForCheck() {
        this.updateCheckStatus();
        this.cdr.markForCheck();
    }
}
/** @nocollapse */ NzTransferListComponent.ɵfac = function NzTransferListComponent_Factory(t) { return new (t || NzTransferListComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzTransferListComponent.ɵcmp = ɵɵdefineComponent({ type: NzTransferListComponent, selectors: [["nz-transfer-list"]], inputs: { direction: "direction", titleText: "titleText", showSelectAll: "showSelectAll", dataSource: "dataSource", itemUnit: "itemUnit", itemsUnit: "itemsUnit", filter: "filter", disabled: "disabled", showSearch: "showSearch", searchPlaceholder: "searchPlaceholder", notFoundContent: "notFoundContent", filterOption: "filterOption", renderList: "renderList", render: "render", footer: "footer" }, outputs: { handleSelectAll: "handleSelectAll", handleSelect: "handleSelect", filterChange: "filterChange" }, exportAs: ["nzTransferList"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()], decls: 12, vars: 14, consts: [["defaultRenderList", ""], [1, "ant-transfer-list-header"], ["nz-checkbox", "", 3, "nzChecked", "nzIndeterminate", "nzDisabled", "nzCheckedChange", 4, "ngIf"], [1, "ant-transfer-list-header-selected"], ["class", "ant-transfer-list-header-title", 4, "ngIf"], [3, "ngClass"], ["class", "ant-transfer-list-body-search-wrapper", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "ant-transfer-list-footer", 4, "ngIf"], ["class", "ant-transfer-list-content", 4, "ngIf"], ["class", "ant-transfer-list-body-not-found", 4, "ngIf"], [1, "ant-transfer-list-content"], ["class", "LazyLoad", 4, "ngFor", "ngForOf"], [1, "LazyLoad"], ["class", "ant-transfer-list-content-item", 3, "ngClass", "click", 4, "ngIf"], [1, "ant-transfer-list-content-item", 3, "ngClass", "click"], ["nz-checkbox", "", 3, "nzChecked", "nzDisabled", "nzCheckedChange", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["renderContainer", ""], [1, "ant-transfer-list-body-not-found"], [3, "nzComponentName", "specificContent"], ["nz-checkbox", "", 3, "nzChecked", "nzIndeterminate", "nzDisabled", "nzCheckedChange"], [1, "ant-transfer-list-header-title"], [1, "ant-transfer-list-body-search-wrapper"], ["nz-transfer-search", "", 3, "placeholder", "disabled", "value", "valueChanged", "valueClear"], [1, "ant-transfer-list-body-customize-wrapper"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-transfer-list-footer"]], template: function NzTransferListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NzTransferListComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵelementStart(2, "div", 1);
        ɵɵtemplate(3, NzTransferListComponent_label_3_Template, 1, 3, "label", 2);
        ɵɵelementStart(4, "span", 3);
        ɵɵelementStart(5, "span");
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵtemplate(7, NzTransferListComponent_span_7_Template, 2, 1, "span", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 5);
        ɵɵtemplate(9, NzTransferListComponent_div_9_Template, 2, 3, "div", 6);
        ɵɵtemplate(10, NzTransferListComponent_ng_container_10_Template, 3, 9, "ng-container", 7);
        ɵɵelementEnd();
        ɵɵtemplate(11, NzTransferListComponent_div_11_Template, 2, 4, "div", 8);
    } if (rf & 2) {
        const _r1550 = ɵɵreference(1);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.showSelectAll);
        ɵɵadvance(3);
        ɵɵtextInterpolate2("", (ctx.stat.checkCount > 0 ? ctx.stat.checkCount + "/" : "") + ctx.stat.shownCount, " ", ctx.dataSource.length > 1 ? ctx.itemsUnit : ctx.itemUnit, "");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.titleText);
        ɵɵadvance(1);
        ɵɵclassMap(ctx.showSearch ? "ant-transfer-list-body ant-transfer-list-body-with-search" : "ant-transfer-list-body");
        ɵɵproperty("ngClass", ɵɵpureFunction1(12, _c3, ctx.stat.shownCount === 0));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showSearch);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.renderList)("ngIfElse", _r1550);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.footer);
    } }, directives: [NgIf, NgClass, NgForOf, NzCheckboxComponent, NgTemplateOutlet, NzEmbedEmptyComponent, NzTransferSearchComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTransferListComponent, [{
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
    }], function () { return [{ type: ElementRef }, { type: NzUpdateHostClassService }, { type: ChangeDetectorRef }]; }, { direction: [{
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

function NzTransferComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1585 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1585.nzOperations[1]);
} }
function NzTransferComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1586 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1586.nzOperations[0]);
} }
class NzTransferComponent {
    // #endregion
    constructor(cdr, i18n, nzUpdateHostClassService, elementRef, renderer) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.leftFilter = '';
        this.rightFilter = '';
        // #region fields
        this.nzDisabled = false;
        this.nzDataSource = [];
        this.nzTitles = ['', ''];
        this.nzOperations = [];
        this.nzShowSelectAll = true;
        this.nzCanMove = (arg) => of(arg.list);
        this.nzRenderList = [null, null];
        this.nzShowSearch = false;
        // events
        this.nzChange = new EventEmitter();
        this.nzSearchChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        // #endregion
        // #region process data
        // left
        this.leftDataSource = [];
        // right
        this.rightDataSource = [];
        this.handleLeftSelectAll = (checked) => this.handleSelect('left', checked);
        this.handleRightSelectAll = (checked) => this.handleSelect('right', checked);
        this.handleLeftSelect = (item) => this.handleSelect('left', !!item.checked, item);
        this.handleRightSelect = (item) => this.handleSelect('right', !!item.checked, item);
        // #endregion
        // #region operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = () => this.moveTo('left');
        this.moveToRight = () => this.moveTo('right');
        renderer.addClass(elementRef.nativeElement, 'ant-transfer');
    }
    splitDataSource() {
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach(record => {
            if (record.direction === 'right') {
                record.direction = 'right';
                this.rightDataSource.push(record);
            }
            else {
                record.direction = 'left';
                this.leftDataSource.push(record);
            }
        });
    }
    getCheckedData(direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(w => w.checked);
    }
    handleSelect(direction, checked, item) {
        const list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction, checked, list, item });
    }
    handleFilterChange(ret) {
        this.nzSearchChange.emit(ret);
    }
    updateOperationStatus(direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] =
            (typeof count === 'undefined' ? this.getCheckedData(direction).filter(w => !w.disabled).length : count) > 0;
    }
    moveTo(direction) {
        const oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        const moveList = datasource.filter(item => item.checked === true && !item.disabled);
        this.nzCanMove({ direction, list: moveList }).subscribe(newMoveList => this.truthMoveTo(direction, newMoveList.filter(i => !!i)), () => moveList.forEach(i => (i.checked = false)));
    }
    truthMoveTo(direction, list) {
        const oppositeDirection = direction === 'left' ? 'right' : 'left';
        const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        const targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        for (const item of list) {
            item.checked = false;
            item.hide = false;
            item.direction = direction;
            datasource.splice(datasource.indexOf(item), 1);
        }
        targetDatasource.splice(0, 0, ...list);
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list
        });
        this.markForCheckAllList();
    }
    setClassMap() {
        const prefixCls = 'ant-transfer';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefixCls}-disabled`]: this.nzDisabled,
            [`${prefixCls}-customize-list`]: this.nzRenderList.some(i => !!i)
        });
    }
    markForCheckAllList() {
        if (!this.lists) {
            return;
        }
        this.lists.forEach(i => i.markForCheck());
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Transfer');
            this.markForCheckAllList();
        });
        this.setClassMap();
    }
    ngOnChanges(changes) {
        this.setClassMap();
        if (changes.nzDataSource || changes.nzTargetKeys) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
            this.cdr.detectChanges();
            this.markForCheckAllList();
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
/** @nocollapse */ NzTransferComponent.ɵfac = function NzTransferComponent_Factory(t) { return new (t || NzTransferComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzTransferComponent.ɵcmp = ɵɵdefineComponent({ type: NzTransferComponent, selectors: [["nz-transfer"]], viewQuery: function NzTransferComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(NzTransferListComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lists = _t);
    } }, hostBindings: function NzTransferComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(1);
    } if (rf & 2) {
        ɵɵclassProp("ant-transfer-disabled", ctx.nzDisabled);
    } }, inputs: { nzDisabled: "nzDisabled", nzDataSource: "nzDataSource", nzTitles: "nzTitles", nzOperations: "nzOperations", nzListStyle: "nzListStyle", nzShowSelectAll: "nzShowSelectAll", nzItemUnit: "nzItemUnit", nzItemsUnit: "nzItemsUnit", nzCanMove: "nzCanMove", nzRenderList: "nzRenderList", nzRender: "nzRender", nzFooter: "nzFooter", nzShowSearch: "nzShowSearch", nzFilterOption: "nzFilterOption", nzSearchPlaceholder: "nzSearchPlaceholder", nzNotFoundContent: "nzNotFoundContent" }, outputs: { nzChange: "nzChange", nzSearchChange: "nzSearchChange", nzSelectChange: "nzSelectChange" }, exportAs: ["nzTransfer"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()], decls: 9, vars: 38, consts: [["data-direction", "left", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"], [1, "ant-transfer-operation"], ["nz-button", "", 3, "disabled", "nzType", "nzSize", "click"], ["nz-icon", "", "nzType", "left"], [4, "ngIf"], ["nz-icon", "", "nzType", "right"], ["data-direction", "right", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"]], template: function NzTransferComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-transfer-list", 0);
        ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_0_listener($event) { return ctx.handleFilterChange($event); })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_0_listener($event) { return ctx.handleLeftSelect($event); })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_0_listener($event) { return ctx.handleLeftSelectAll($event); });
        ɵɵelementEnd();
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "button", 2);
        ɵɵlistener("click", function NzTransferComponent_Template_button_click_2_listener($event) { return ctx.moveToLeft(); });
        ɵɵelement(3, "i", 3);
        ɵɵtemplate(4, NzTransferComponent_span_4_Template, 2, 1, "span", 4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 2);
        ɵɵlistener("click", function NzTransferComponent_Template_button_click_5_listener($event) { return ctx.moveToRight(); });
        ɵɵelement(6, "i", 5);
        ɵɵtemplate(7, NzTransferComponent_span_7_Template, 2, 1, "span", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "nz-transfer-list", 6);
        ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_8_listener($event) { return ctx.handleFilterChange($event); })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_8_listener($event) { return ctx.handleRightSelect($event); })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_8_listener($event) { return ctx.handleRightSelectAll($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[0])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.leftDataSource)("filter", ctx.leftFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList[0])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || ctx.locale.searchPlaceholder)("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || ctx.locale.itemUnit)("itemsUnit", ctx.nzItemsUnit || ctx.locale.itemsUnit)("footer", ctx.nzFooter);
        ɵɵadvance(2);
        ɵɵproperty("disabled", ctx.nzDisabled || !ctx.leftActive)("nzType", "primary")("nzSize", "small");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.nzOperations[1]);
        ɵɵadvance(1);
        ɵɵproperty("disabled", ctx.nzDisabled || !ctx.rightActive)("nzType", "primary")("nzSize", "small");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.nzOperations[0]);
        ɵɵadvance(1);
        ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[1])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.rightDataSource)("filter", ctx.rightFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList[1])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || ctx.locale.searchPlaceholder)("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || ctx.locale.itemUnit)("itemsUnit", ctx.nzItemsUnit || ctx.locale.itemsUnit)("footer", ctx.nzFooter);
    } }, directives: [NzTransferListComponent, NgStyle, NzButtonComponent, NzIconDirective, NgIf], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTransferComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTransferComponent.prototype, "nzShowSelectAll", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTransferComponent.prototype, "nzShowSearch", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTransferComponent, [{
        type: Component,
        args: [{
                selector: 'nz-transfer',
                exportAs: 'nzTransfer',
                preserveWhitespaces: false,
                templateUrl: './nz-transfer.component.html',
                host: {
                    '[class.ant-transfer-disabled]': 'nzDisabled'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService]
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: NzI18nService }, { type: NzUpdateHostClassService }, { type: ElementRef }, { type: Renderer2 }]; }, { lists: [{
            type: ViewChildren,
            args: [NzTransferListComponent]
        }], nzDisabled: [{
            type: Input
        }], nzDataSource: [{
            type: Input
        }], nzTitles: [{
            type: Input
        }], nzOperations: [{
            type: Input
        }], nzListStyle: [{
            type: Input
        }], nzShowSelectAll: [{
            type: Input
        }], nzItemUnit: [{
            type: Input
        }], nzItemsUnit: [{
            type: Input
        }], nzCanMove: [{
            type: Input
        }], nzRenderList: [{
            type: Input
        }], nzRender: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzShowSearch: [{
            type: Input
        }], nzFilterOption: [{
            type: Input
        }], nzSearchPlaceholder: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzChange: [{
            type: Output
        }], nzSearchChange: [{
            type: Output
        }], nzSelectChange: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTransferModule {
}
/** @nocollapse */ NzTransferModule.ɵmod = ɵɵdefineNgModule({ type: NzTransferModule });
/** @nocollapse */ NzTransferModule.ɵinj = ɵɵdefineInjector({ factory: function NzTransferModule_Factory(t) { return new (t || NzTransferModule)(); }, imports: [[CommonModule, FormsModule, NzCheckboxModule, NzButtonModule, NzInputModule, NzI18nModule, NzIconModule, NzEmptyModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzTransferModule, { declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent], imports: [CommonModule, FormsModule, NzCheckboxModule, NzButtonModule, NzInputModule, NzI18nModule, NzIconModule, NzEmptyModule], exports: [NzTransferComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTransferModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzCheckboxModule, NzButtonModule, NzInputModule, NzI18nModule, NzIconModule, NzEmptyModule],
                declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
                exports: [NzTransferComponent]
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

export { NzTransferComponent, NzTransferListComponent, NzTransferModule, NzTransferSearchComponent };
//# sourceMappingURL=ng-zorro-antd-transfer.js.map
