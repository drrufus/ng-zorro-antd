import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/checkbox";
import * as i4 from "@angular/forms";
import * as i5 from "ng-zorro-antd/dropdown";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/menu";
import * as i8 from "ng-zorro-antd/radio";
function NzThComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r2632 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 7);
    i0.ɵɵlistener("ngModelChange", function NzThComponent_ng_template_0_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2632); var ctx_r2631 = i0.ɵɵnextContext(); return ctx_r2631.nzChecked = $event; })("ngModelChange", function NzThComponent_ng_template_0_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2632); var ctx_r2633 = i0.ɵɵnextContext(); return ctx_r2633.nzCheckedChange.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2626 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-table-selection-select-all-custom", ctx_r2626.nzShowRowSelection);
    i0.ɵɵproperty("ngModel", ctx_r2626.nzChecked)("nzDisabled", ctx_r2626.nzDisabled)("nzIndeterminate", ctx_r2626.nzIndeterminate);
} }
function NzThComponent_ng_container_5_ng_template_1_Template(rf, ctx) { }
function NzThComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzThComponent_ng_container_5_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r2625 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2625);
} }
function NzThComponent_div_6_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzThComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzThComponent_div_6_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    var _r2625 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2625);
} }
function NzThComponent_div_6_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵlistener("click", function NzThComponent_div_6_li_7_Template_li_click_0_listener($event) { var selection_r2639 = ctx.$implicit; return selection_r2639.onSelect(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var selection_r2639 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", selection_r2639.text, " ");
} }
function NzThComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, NzThComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementStart(2, "div", 10);
    i0.ɵɵelement(3, "i", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nz-dropdown-menu", null, 12);
    i0.ɵɵelementStart(6, "ul", 13);
    i0.ɵɵtemplate(7, NzThComponent_div_6_li_7_Template, 2, 1, "li", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r2636 = i0.ɵɵreference(5);
    var ctx_r2628 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2628.nzShowCheckbox);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzDropdownMenu", _r2636);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r2628.nzSelections);
} }
function NzThComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵelement(2, "i", 18);
    i0.ɵɵelement(3, "i", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2629 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("on", ctx_r2629.nzSort == "ascend")("off", ctx_r2629.nzSort != "ascend");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("on", ctx_r2629.nzSort == "descend")("off", ctx_r2629.nzSort != "descend");
} }
function NzThComponent_ng_container_12_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r2647 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵlistener("click", function NzThComponent_ng_container_12_ng_container_5_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r2647); var filter_r2645 = ctx.$implicit; var ctx_r2646 = i0.ɵɵnextContext(3); return ctx_r2646.checkMultiple(filter_r2645); });
    i0.ɵɵelementStart(1, "label", 26);
    i0.ɵɵlistener("ngModelChange", function NzThComponent_ng_container_12_ng_container_5_li_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2647); var filter_r2645 = ctx.$implicit; var ctx_r2648 = i0.ɵɵnextContext(3); return ctx_r2648.checkMultiple(filter_r2645); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var filter_r2645 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", filter_r2645.checked);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(filter_r2645.text);
} }
function NzThComponent_ng_container_12_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzThComponent_ng_container_12_ng_container_5_li_1_Template, 4, 2, "li", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2642 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2642.multipleFilterList);
} }
function NzThComponent_ng_container_12_ng_container_6_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r2652 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵlistener("click", function NzThComponent_ng_container_12_ng_container_6_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r2652); var filter_r2650 = ctx.$implicit; var ctx_r2651 = i0.ɵɵnextContext(3); return ctx_r2651.checkSingle(filter_r2650); });
    i0.ɵɵelementStart(1, "label", 27);
    i0.ɵɵlistener("ngModelChange", function NzThComponent_ng_container_12_ng_container_6_li_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2652); var filter_r2650 = ctx.$implicit; var ctx_r2653 = i0.ɵɵnextContext(3); return ctx_r2653.checkSingle(filter_r2650); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var filter_r2650 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", filter_r2650.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(filter_r2650.text);
} }
function NzThComponent_ng_container_12_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzThComponent_ng_container_12_ng_container_6_li_1_Template, 3, 2, "li", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2643 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2643.singleFilterList);
} }
function NzThComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    var _r2655 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "i", 20);
    i0.ɵɵlistener("nzVisibleChange", function NzThComponent_ng_container_12_Template_i_nzVisibleChange_1_listener($event) { i0.ɵɵrestoreView(_r2655); var ctx_r2654 = i0.ɵɵnextContext(); return ctx_r2654.dropDownVisibleChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "nz-dropdown-menu", null, 21);
    i0.ɵɵelementStart(4, "ul", 22);
    i0.ɵɵtemplate(5, NzThComponent_ng_container_12_ng_container_5_Template, 2, 1, "ng-container", 4);
    i0.ɵɵtemplate(6, NzThComponent_ng_container_12_ng_container_6_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 23);
    i0.ɵɵelementStart(8, "a", 24);
    i0.ɵɵlistener("click", function NzThComponent_ng_container_12_Template_a_click_8_listener($event) { i0.ɵɵrestoreView(_r2655); var ctx_r2656 = i0.ɵɵnextContext(); return ctx_r2656.hideDropDown(); });
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 25);
    i0.ɵɵlistener("click", function NzThComponent_ng_container_12_Template_a_click_11_listener($event) { i0.ɵɵrestoreView(_r2655); var ctx_r2657 = i0.ɵɵnextContext(); ctx_r2657.reset(); return ctx_r2657.hideDropDown(); });
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r2641 = i0.ɵɵreference(3);
    var ctx_r2630 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-table-filter-selected", ctx_r2630.hasFilterValue)("ant-table-filter-open", ctx_r2630.filterVisible);
    i0.ɵɵproperty("nzClickHide", false)("nzDropdownMenu", _r2641);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2630.nzFilterMultiple);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2630.nzFilterMultiple);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2630.locale.filterConfirm);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2630.locale.filterReset);
} }
var _c0 = ["*", [["nz-dropdown"]], [["", "nz-dropdown", ""]], [["", "nz-th-extra", ""]]];
var _c1 = ["*", "nz-dropdown", "[nz-dropdown]", "[nz-th-extra]"];
var NzThComponent = /** @class */ (function () {
    function NzThComponent(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.hasFilterValue = false;
        this.filterVisible = false;
        this.multipleFilterList = [];
        this.singleFilterList = [];
        /* tslint:disable-next-line:no-any */
        this.locale = {};
        this.nzWidthChange$ = new Subject();
        this.destroy$ = new Subject();
        this.hasDefaultFilter = false;
        /* tslint:disable-next-line:no-any */
        this.nzSelections = [];
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzFilterMultiple = true;
        this.nzSort = null;
        this.nzFilters = [];
        this.nzExpand = false;
        this.nzShowCheckbox = false;
        this.nzCustomFilter = false;
        this.nzShowSort = false;
        this.nzShowFilter = false;
        this.nzShowRowSelection = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzSortChange = new EventEmitter();
        this.nzSortChangeWithKey = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzFilterChange = new EventEmitter();
    }
    NzThComponent.prototype.updateSortValue = function () {
        if (this.nzShowSort) {
            if (this.nzSort === 'ascend') {
                this.setSortValue('descend');
            }
            else if (this.nzSort === 'descend') {
                this.setSortValue(null);
            }
            else {
                this.setSortValue('ascend');
            }
        }
    };
    NzThComponent.prototype.setSortValue = function (value) {
        this.nzSort = value;
        this.nzSortChangeWithKey.emit({ key: this.nzSortKey, value: this.nzSort });
        this.nzSortChange.emit(this.nzSort);
    };
    Object.defineProperty(NzThComponent.prototype, "filterList", {
        get: function () {
            return this.multipleFilterList.filter(function (item) { return item.checked; }).map(function (item) { return item.value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "filterValue", {
        /* tslint:disable-next-line:no-any */
        get: function () {
            var checkedFilter = this.singleFilterList.find(function (item) { return item.checked; });
            return checkedFilter ? checkedFilter.value : null;
        },
        enumerable: true,
        configurable: true
    });
    NzThComponent.prototype.updateFilterStatus = function () {
        if (this.nzFilterMultiple) {
            this.hasFilterValue = this.filterList.length > 0;
        }
        else {
            this.hasFilterValue = isNotNil(this.filterValue);
        }
    };
    NzThComponent.prototype.search = function () {
        this.updateFilterStatus();
        if (this.nzFilterMultiple) {
            this.nzFilterChange.emit(this.filterList);
        }
        else {
            this.nzFilterChange.emit(this.filterValue);
        }
    };
    NzThComponent.prototype.reset = function () {
        this.initMultipleFilterList(true);
        this.initSingleFilterList(true);
        this.hasFilterValue = false;
    };
    NzThComponent.prototype.checkMultiple = function (filter) {
        filter.checked = !filter.checked;
    };
    NzThComponent.prototype.checkSingle = function (filter) {
        this.singleFilterList.forEach(function (item) { return (item.checked = item === filter); });
    };
    NzThComponent.prototype.hideDropDown = function () {
        this.nzDropdownMenuComponent.setVisibleStateWhen(false);
        this.filterVisible = false;
    };
    NzThComponent.prototype.dropDownVisibleChange = function (value) {
        this.filterVisible = value;
        if (!value) {
            this.search();
        }
    };
    NzThComponent.prototype.initMultipleFilterList = function (force) {
        var _this = this;
        this.multipleFilterList = this.nzFilters.map(function (item) {
            var checked = force ? false : !!item.byDefault;
            if (checked) {
                _this.hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked: checked };
        });
        this.checkDefaultFilters();
    };
    NzThComponent.prototype.initSingleFilterList = function (force) {
        var _this = this;
        this.singleFilterList = this.nzFilters.map(function (item) {
            var checked = force ? false : !!item.byDefault;
            if (checked) {
                _this.hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked: checked };
        });
        this.checkDefaultFilters();
    };
    NzThComponent.prototype.checkDefaultFilters = function () {
        if (!this.nzFilters || this.nzFilters.length === 0 || !this.hasDefaultFilter) {
            return;
        }
        this.updateFilterStatus();
    };
    NzThComponent.prototype.marForCheck = function () {
        this.cdr.markForCheck();
    };
    NzThComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Table');
            _this.cdr.markForCheck();
        });
    };
    NzThComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzFilters) {
            this.initMultipleFilterList();
            this.initSingleFilterList();
            this.updateFilterStatus();
        }
        if (changes.nzWidth) {
            this.nzWidthChange$.next(this.nzWidth);
        }
    };
    NzThComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzThComponent.ɵfac = function NzThComponent_Factory(t) { return new (t || NzThComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService)); };
    /** @nocollapse */ NzThComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzThComponent, selectors: [["th", 9, "nz-disable-th", 3, "mat-sort-header", "", 3, "mat-header-cell", ""]], viewQuery: function NzThComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(NzDropdownMenuComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzDropdownMenuComponent = _t.first);
        } }, hostBindings: function NzThComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(12);
        } if (rf & 2) {
            i0.ɵɵstyleProp("left", ctx.nzLeft)("right", ctx.nzRight)("text-align", ctx.nzAlign);
            i0.ɵɵclassProp("ant-table-column-has-actions", ctx.nzShowFilter || ctx.nzShowSort || ctx.nzCustomFilter)("ant-table-column-has-filters", ctx.nzShowFilter || ctx.nzCustomFilter)("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-selection-column-custom", ctx.nzShowRowSelection)("ant-table-selection-column", ctx.nzShowCheckbox)("ant-table-expand-icon-th", ctx.nzExpand)("ant-table-th-left-sticky", ctx.nzLeft)("ant-table-th-right-sticky", ctx.nzRight)("ant-table-column-sort", ctx.nzSort === "descend" || ctx.nzSort === "ascend");
        } }, inputs: { nzSelections: "nzSelections", nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzSortKey: "nzSortKey", nzFilterMultiple: "nzFilterMultiple", nzWidth: "nzWidth", nzLeft: "nzLeft", nzRight: "nzRight", nzAlign: "nzAlign", nzSort: "nzSort", nzFilters: "nzFilters", nzExpand: "nzExpand", nzShowCheckbox: "nzShowCheckbox", nzCustomFilter: "nzCustomFilter", nzShowSort: "nzShowSort", nzShowFilter: "nzShowFilter", nzShowRowSelection: "nzShowRowSelection" }, outputs: { nzCheckedChange: "nzCheckedChange", nzSortChange: "nzSortChange", nzSortChangeWithKey: "nzSortChangeWithKey", nzFilterChange: "nzFilterChange" }, features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 13, vars: 5, consts: [["checkboxTemplate", ""], [1, "ant-table-header-column"], [3, "click"], [1, "ant-table-column-title"], [4, "ngIf"], ["class", "ant-table-selection", 4, "ngIf"], ["class", "ant-table-column-sorter", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange"], [3, "ngTemplateOutlet"], [1, "ant-table-selection"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["selectionMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner", "ant-table-column-sorter-inner-full"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down"], ["nz-icon", "", "nz-dropdown", "", "nzType", "filter", "nzTheme", "fill", "nzTrigger", "click", "nzTableFilter", "", 3, "nzClickHide", "nzDropdownMenu", "nzVisibleChange"], ["filterMenu", "nzDropdownMenu"], ["nz-menu", ""], [1, "ant-table-filter-dropdown-btns"], [1, "ant-table-filter-dropdown-link", "confirm", 3, "click"], [1, "ant-table-filter-dropdown-link", "clear", 3, "click"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "ngModel", "ngModelChange"]], template: function NzThComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵtemplate(0, NzThComponent_ng_template_0_Template, 1, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "span", 1);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵlistener("click", function NzThComponent_Template_div_click_3_listener($event) { return ctx.updateSortValue(); });
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵtemplate(5, NzThComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
            i0.ɵɵtemplate(6, NzThComponent_div_6_Template, 8, 3, "div", 5);
            i0.ɵɵprojection(7);
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(8, 1);
            i0.ɵɵtemplate(9, NzThComponent_div_9_Template, 4, 4, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(10, 2);
            i0.ɵɵprojection(11, 3);
            i0.ɵɵtemplate(12, NzThComponent_ng_container_12_Template, 14, 8, "ng-container", 4);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("ant-table-column-sorters", ctx.nzShowSort);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.nzShowCheckbox && !ctx.nzShowRowSelection);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzShowRowSelection);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.nzShowSort);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.nzShowFilter);
        } }, directives: [i2.NgIf, i3.NzCheckboxComponent, i4.NgControlStatus, i4.NgModel, i2.NgTemplateOutlet, i5.NzDropDownDirective, i6.NzIconDirective, i5.NzDropdownMenuComponent, i7.NzMenuDirective, i2.NgForOf, i7.NzMenuItemDirective, i8.NzRadioComponent], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzThComponent.prototype, "nzExpand", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzThComponent.prototype, "nzShowCheckbox", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzThComponent.prototype, "nzCustomFilter", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzThComponent.prototype, "nzShowSort", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzThComponent.prototype, "nzShowFilter", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzThComponent.prototype, "nzShowRowSelection", void 0);
    return NzThComponent;
}());
export { NzThComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzThComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'th:not(.nz-disable-th):not([mat-sort-header]):not([mat-header-cell])',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-th.component.html',
                host: {
                    '[class.ant-table-column-has-actions]': 'nzShowFilter || nzShowSort || nzCustomFilter',
                    '[class.ant-table-column-has-filters]': 'nzShowFilter || nzCustomFilter',
                    '[class.ant-table-column-has-sorters]': 'nzShowSort',
                    '[class.ant-table-selection-column-custom]': 'nzShowRowSelection',
                    '[class.ant-table-selection-column]': 'nzShowCheckbox',
                    '[class.ant-table-expand-icon-th]': 'nzExpand',
                    '[class.ant-table-th-left-sticky]': 'nzLeft',
                    '[class.ant-table-th-right-sticky]': 'nzRight',
                    '[class.ant-table-column-sort]': "nzSort === 'descend' || nzSort === 'ascend'",
                    '[style.left]': 'nzLeft',
                    '[style.right]': 'nzRight',
                    '[style.text-align]': 'nzAlign'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }]; }, { nzDropdownMenuComponent: [{
            type: ViewChild,
            args: [NzDropdownMenuComponent, { static: false }]
        }], nzSelections: [{
            type: Input
        }], nzChecked: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzIndeterminate: [{
            type: Input
        }], nzSortKey: [{
            type: Input
        }], nzFilterMultiple: [{
            type: Input
        }], nzWidth: [{
            type: Input
        }], nzLeft: [{
            type: Input
        }], nzRight: [{
            type: Input
        }], nzAlign: [{
            type: Input
        }], nzSort: [{
            type: Input
        }], nzFilters: [{
            type: Input
        }], nzExpand: [{
            type: Input
        }], nzShowCheckbox: [{
            type: Input
        }], nzCustomFilter: [{
            type: Input
        }], nzShowSort: [{
            type: Input
        }], nzShowFilter: [{
            type: Input
        }], nzShowRowSelection: [{
            type: Input
        }], nzCheckedChange: [{
            type: Output
        }], nzSortChange: [{
            type: Output
        }], nzSortChangeWithKey: [{
            type: Output
        }], nzFilterChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRoLmNvbXBvbmVudC50cyIsIm56LXRoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pFLE9BQU8sRUFBbUIsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7OztJQzFCbEUsZ0NBUVE7SUFMTiwyTkFBdUIsOEtBR04sc0NBQTRCLElBSHRCO0lBS3pCLGlCQUFROzs7SUFOTixxRkFBa0U7SUFDbEUsNkNBQXVCLG9DQUFBLDhDQUFBOzs7O0lBVXJCLDZCQUNFO0lBQUEsNkZBQW1EO0lBQ3JELDBCQUFlOzs7O0lBREEsZUFBcUM7SUFBckMseUNBQXFDOzs7O0lBR2xELDZCQUNFO0lBQUEsbUdBQW1EO0lBQ3JELDBCQUFlOzs7O0lBREEsZUFBcUM7SUFBckMseUNBQXFDOzs7SUFZaEQsOEJBQ0U7SUFEc0QsNElBQVMsMEJBQW9CLElBQUM7SUFDcEYsWUFDRjtJQUFBLGlCQUFLOzs7SUFESCxlQUNGO0lBREUscURBQ0Y7OztJQWhCTiw4QkFDRTtJQUFBLHNGQUNFO0lBRUYsK0JBTUU7SUFBQSx3QkFBNkI7SUFDL0IsaUJBQU07SUFDTixrREFDRTtJQUFBLDhCQUNFO0lBQUEsbUVBQ0U7SUFFSixpQkFBSztJQUNQLGlCQUFtQjtJQUNyQixpQkFBTTs7OztJQWxCVSxlQUFzQjtJQUF0QiwrQ0FBc0I7SUFPbEMsZUFBZ0M7SUFBaEMsdUNBQWdDO0lBTWIsZUFBc0M7SUFBdEMsZ0RBQXNDOzs7SUFTL0QsK0JBQ0U7SUFBQSwrQkFDRTtJQUFBLHdCQU1LO0lBQ0wsd0JBTUs7SUFDUCxpQkFBTTtJQUNSLGlCQUFNOzs7SUFYQSxlQUErQjtJQUEvQixrREFBK0IscUNBQUE7SUFPL0IsZUFBZ0M7SUFBaEMsbURBQWdDLHNDQUFBOzs7O0lBMkJsQyw4QkFDRTtJQUR5RCwwUUFBK0I7SUFDeEYsaUNBSVM7SUFEUCw2UkFBdUM7SUFDeEMsaUJBQVE7SUFDVCw0QkFBTTtJQUFBLFlBQWlCO0lBQUEsaUJBQU87SUFDaEMsaUJBQUs7OztJQUpELGVBQTBCO0lBQTFCLDhDQUEwQjtJQUd0QixlQUFpQjtJQUFqQix1Q0FBaUI7OztJQVAzQiw2QkFDRTtJQUFBLDRGQUNFO0lBT0osMEJBQWU7OztJQVJJLGVBQXlDO0lBQXpDLHNEQUF5Qzs7OztJQVUxRCw4QkFDRTtJQUR1RCx3UUFBNkI7SUFDcEYsaUNBQWlGO0lBQXRDLDJSQUFxQztJQUFDLFlBRS9FO0lBQUEsaUJBQVE7SUFDWixpQkFBSzs7O0lBSGEsZUFBMEI7SUFBMUIsOENBQTBCO0lBQXVDLGVBRS9FO0lBRitFLHVDQUUvRTs7O0lBSk4sNkJBQ0U7SUFBQSw0RkFDRTtJQUlKLDBCQUFlOzs7SUFMSSxlQUF1QztJQUF2QyxvREFBdUM7Ozs7SUEzQmhFLDZCQUNFO0lBQUEsNkJBWUs7SUFESCx3T0FBaUQ7SUFDbEQsaUJBQUk7SUFDTCxrREFDRTtJQUFBLDhCQUNFO0lBQUEsZ0dBQ0U7SUFTRixnR0FDRTtJQU1KLGlCQUFLO0lBQ0wsK0JBQ0U7SUFBQSw2QkFDRTtJQURnRCxxTUFBd0I7SUFDeEUsNEJBQU07SUFBQSxhQUEwQjtJQUFBLGlCQUFPO0lBQ3pDLGlCQUFJO0lBQ0osOEJBQ0U7SUFEOEMseU5BQWlDO0lBQy9FLDZCQUFNO0lBQUEsYUFBd0I7SUFBQSxpQkFBTztJQUN2QyxpQkFBSTtJQUNOLGlCQUFNO0lBQ1IsaUJBQW1CO0lBQ3JCLDBCQUFlOzs7O0lBakNYLGVBQWtEO0lBQWxELHFFQUFrRCxrREFBQTtJQUZsRCxtQ0FBcUIsMEJBQUE7SUFRTCxlQUF3QjtJQUF4QixpREFBd0I7SUFVeEIsZUFBeUI7SUFBekIsa0RBQXlCO0lBVS9CLGVBQTBCO0lBQTFCLG9EQUEwQjtJQUcxQixlQUF3QjtJQUF4QixrREFBd0I7Ozs7QUQvRHRDO0lBa0tFLHVCQUFvQixHQUFzQixFQUFVLElBQW1CO1FBQW5ELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTtRQTNJdkUsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztRQUM3QyxxQkFBZ0IsR0FBd0IsRUFBRSxDQUFDO1FBQzNDLHFDQUFxQztRQUNyQyxXQUFNLEdBQTZCLEVBQThCLENBQUM7UUFDbEUsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVqQyxxQ0FBcUM7UUFDNUIsaUJBQVksR0FBMkQsRUFBRSxDQUFDO1FBQzFFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFLeEIsV0FBTSxHQUFnQyxJQUFJLENBQUM7UUFDM0MsY0FBUyxHQUFtQixFQUFFLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUM5QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ2pELHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUF5QyxDQUFDO1FBQ25HLHFDQUFxQztRQUNsQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7SUEwR00sQ0FBQztJQXhHM0UsdUNBQWUsR0FBZjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO2dCQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM3QjtTQUNGO0lBQ0gsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxLQUFrQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsc0JBQUkscUNBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUMsQ0FBQztRQUN0RixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHNDQUFXO1FBRGYscUNBQXFDO2FBQ3JDO1lBQ0UsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxDQUFDLENBQUM7WUFDdkUsT0FBTyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUVELDBDQUFrQixHQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsTUFBeUI7UUFDckMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkMsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxNQUF5QjtRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxNQUFNLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2Q0FBcUIsR0FBckIsVUFBc0IsS0FBYztRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRUQsOENBQXNCLEdBQXRCLFVBQXVCLEtBQWU7UUFBdEMsaUJBU0M7UUFSQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQy9DLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNqRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2FBQzlCO1lBQ0QsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsNENBQW9CLEdBQXBCLFVBQXFCLEtBQWU7UUFBcEMsaUJBU0M7UUFSQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQzdDLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNqRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2FBQzlCO1lBQ0QsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsMkNBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzVFLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBSUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDOUQsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDckIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs4RUFuS1UsYUFBYTtzREFBYixhQUFhOzJCQVViLHVCQUF1Qjs7Ozs7Ozs7Ozs7WUN2RXBDLCtHQUNFO1lBVUYsK0JBQ0U7WUFBQSw4QkFDRTtZQURpRCw2RkFBUyxxQkFBaUIsSUFBQztZQUM1RSwrQkFDRTtZQUFBLGdGQUNFO1lBRUYsOERBQ0U7WUFtQkYsa0JBQVk7WUFDZCxpQkFBTztZQUNQLHFCQUFpQztZQUNqQyw4REFDRTtZQWlCSixpQkFBTTtZQUNSLGlCQUFPO1lBQ1Asc0JBQW1DO1lBQ25DLHNCQUFtQztZQUVuQyxtRkFDRTs7WUFwREssZUFBNkM7WUFBN0MsMERBQTZDO1lBRWhDLGVBQTZDO1lBQTdDLG9FQUE2QztZQUcxQixlQUEwQjtZQUExQiw2Q0FBMEI7WUF1QnhCLGVBQWtCO1lBQWxCLHFDQUFrQjtZQXVCN0MsZUFBb0I7WUFBcEIsdUNBQW9COztJRHNCUDtRQUFmLFlBQVksRUFBRTs7bURBQWtCO0lBQ2pCO1FBQWYsWUFBWSxFQUFFOzt5REFBd0I7SUFDdkI7UUFBZixZQUFZLEVBQUU7O3lEQUF3QjtJQUN2QjtRQUFmLFlBQVksRUFBRTs7cURBQW9CO0lBQ25CO1FBQWYsWUFBWSxFQUFFOzt1REFBc0I7SUFDckI7UUFBZixZQUFZLEVBQUU7OzZEQUE0Qjt3QkExRnREO0NBaU9DLEFBMUxELElBMExDO1NBcEtZLGFBQWE7a0RBQWIsYUFBYTtjQXRCekIsU0FBUztlQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLHNFQUFzRTtnQkFDaEYsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osc0NBQXNDLEVBQUUsOENBQThDO29CQUN0RixzQ0FBc0MsRUFBRSxnQ0FBZ0M7b0JBQ3hFLHNDQUFzQyxFQUFFLFlBQVk7b0JBQ3BELDJDQUEyQyxFQUFFLG9CQUFvQjtvQkFDakUsb0NBQW9DLEVBQUUsZ0JBQWdCO29CQUN0RCxrQ0FBa0MsRUFBRSxVQUFVO29CQUM5QyxrQ0FBa0MsRUFBRSxRQUFRO29CQUM1QyxtQ0FBbUMsRUFBRSxTQUFTO29CQUM5QywrQkFBK0IsRUFBRSw2Q0FBNkM7b0JBQzlFLGNBQWMsRUFBRSxRQUFRO29CQUN4QixlQUFlLEVBQUUsU0FBUztvQkFDMUIsb0JBQW9CLEVBQUUsU0FBUztpQkFDaEM7YUFDRjs7a0JBV0UsU0FBUzttQkFBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUVwRCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56RHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XHJcbmltcG9ydCB7IE56STE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbmV4cG9ydCB0eXBlIE56VGhGaWx0ZXJUeXBlID0gQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBhbnk7IGJ5RGVmYXVsdD86IGJvb2xlYW4gfT47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56VGhJdGVtSW50ZXJmYWNlIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHZhbHVlOiBhbnk7XHJcbiAgY2hlY2tlZDogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAndGg6bm90KC5uei1kaXNhYmxlLXRoKTpub3QoW21hdC1zb3J0LWhlYWRlcl0pOm5vdChbbWF0LWhlYWRlci1jZWxsXSknLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRoLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jb2x1bW4taGFzLWFjdGlvbnNdJzogJ256U2hvd0ZpbHRlciB8fCBuelNob3dTb3J0IHx8IG56Q3VzdG9tRmlsdGVyJyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1oYXMtZmlsdGVyc10nOiAnbnpTaG93RmlsdGVyIHx8IG56Q3VzdG9tRmlsdGVyJyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1oYXMtc29ydGVyc10nOiAnbnpTaG93U29ydCcsXHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uLWN1c3RvbV0nOiAnbnpTaG93Um93U2VsZWN0aW9uJyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW5dJzogJ256U2hvd0NoZWNrYm94JyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLWV4cGFuZC1pY29uLXRoXSc6ICduekV4cGFuZCcsXHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS10aC1sZWZ0LXN0aWNreV0nOiAnbnpMZWZ0JyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLXRoLXJpZ2h0LXN0aWNreV0nOiAnbnpSaWdodCcsXHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jb2x1bW4tc29ydF0nOiBgbnpTb3J0ID09PSAnZGVzY2VuZCcgfHwgbnpTb3J0ID09PSAnYXNjZW5kJ2AsXHJcbiAgICAnW3N0eWxlLmxlZnRdJzogJ256TGVmdCcsXHJcbiAgICAnW3N0eWxlLnJpZ2h0XSc6ICduelJpZ2h0JyxcclxuICAgICdbc3R5bGUudGV4dC1hbGlnbl0nOiAnbnpBbGlnbidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRoQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaGFzRmlsdGVyVmFsdWUgPSBmYWxzZTtcclxuICBmaWx0ZXJWaXNpYmxlID0gZmFsc2U7XHJcbiAgbXVsdGlwbGVGaWx0ZXJMaXN0OiBOelRoSXRlbUludGVyZmFjZVtdID0gW107XHJcbiAgc2luZ2xlRmlsdGVyTGlzdDogTnpUaEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBsb2NhbGU6IE56STE4bkludGVyZmFjZVsnVGFibGUnXSA9IHt9IGFzIE56STE4bkludGVyZmFjZVsnVGFibGUnXTtcclxuICBueldpZHRoQ2hhbmdlJCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBoYXNEZWZhdWx0RmlsdGVyID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZChOekRyb3Bkb3duTWVudUNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIG56RHJvcGRvd25NZW51Q29tcG9uZW50OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudDtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgQElucHV0KCkgbnpTZWxlY3Rpb25zOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgb25TZWxlY3QoLi4uYXJnczogYW55W10pOiBhbnkgfT4gPSBbXTtcclxuICBASW5wdXQoKSBuekNoZWNrZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTb3J0S2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpGaWx0ZXJNdWx0aXBsZSA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpXaWR0aDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56TGVmdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56UmlnaHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuekFsaWduOiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcic7XHJcbiAgQElucHV0KCkgbnpTb3J0OiAnYXNjZW5kJyB8ICdkZXNjZW5kJyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56RmlsdGVyczogTnpUaEZpbHRlclR5cGUgPSBbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFeHBhbmQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93Q2hlY2tib3ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDdXN0b21GaWx0ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U29ydCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dGaWx0ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93Um93U2VsZWN0aW9uID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRDaGFuZ2VXaXRoS2V5ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIHwgbnVsbCB9PigpO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpGaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdIHwgYW55PigpO1xyXG5cclxuICB1cGRhdGVTb3J0VmFsdWUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelNob3dTb3J0KSB7XHJcbiAgICAgIGlmICh0aGlzLm56U29ydCA9PT0gJ2FzY2VuZCcpIHtcclxuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZSgnZGVzY2VuZCcpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubnpTb3J0ID09PSAnZGVzY2VuZCcpIHtcclxuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZShudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZSgnYXNjZW5kJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNvcnRWYWx1ZSh2YWx1ZTogJ2FzY2VuZCcgfCAnZGVzY2VuZCcgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U29ydCA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelNvcnRDaGFuZ2VXaXRoS2V5LmVtaXQoeyBrZXk6IHRoaXMubnpTb3J0S2V5LCB2YWx1ZTogdGhpcy5uelNvcnQgfSk7XHJcbiAgICB0aGlzLm56U29ydENoYW5nZS5lbWl0KHRoaXMubnpTb3J0KTtcclxuICB9XHJcblxyXG4gIGdldCBmaWx0ZXJMaXN0KCk6IE56VGhJdGVtSW50ZXJmYWNlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbGVGaWx0ZXJMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uY2hlY2tlZCkubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgZ2V0IGZpbHRlclZhbHVlKCk6IGFueSB7XHJcbiAgICBjb25zdCBjaGVja2VkRmlsdGVyID0gdGhpcy5zaW5nbGVGaWx0ZXJMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLmNoZWNrZWQpO1xyXG4gICAgcmV0dXJuIGNoZWNrZWRGaWx0ZXIgPyBjaGVja2VkRmlsdGVyLnZhbHVlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUZpbHRlclN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RmlsdGVyTXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IHRoaXMuZmlsdGVyTGlzdC5sZW5ndGggPiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IGlzTm90TmlsKHRoaXMuZmlsdGVyVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJTdGF0dXMoKTtcclxuICAgIGlmICh0aGlzLm56RmlsdGVyTXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5uekZpbHRlckNoYW5nZS5lbWl0KHRoaXMuZmlsdGVyTGlzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56RmlsdGVyQ2hhbmdlLmVtaXQodGhpcy5maWx0ZXJWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdE11bHRpcGxlRmlsdGVyTGlzdCh0cnVlKTtcclxuICAgIHRoaXMuaW5pdFNpbmdsZUZpbHRlckxpc3QodHJ1ZSk7XHJcbiAgICB0aGlzLmhhc0ZpbHRlclZhbHVlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjaGVja011bHRpcGxlKGZpbHRlcjogTnpUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGZpbHRlci5jaGVja2VkID0gIWZpbHRlci5jaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tTaW5nbGUoZmlsdGVyOiBOelRoSXRlbUludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJMaXN0LmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gaXRlbSA9PT0gZmlsdGVyKSk7XHJcbiAgfVxyXG5cclxuICBoaWRlRHJvcERvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RHJvcGRvd25NZW51Q29tcG9uZW50LnNldFZpc2libGVTdGF0ZVdoZW4oZmFsc2UpO1xyXG4gICAgdGhpcy5maWx0ZXJWaXNpYmxlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkcm9wRG93blZpc2libGVDaGFuZ2UodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZmlsdGVyVmlzaWJsZSA9IHZhbHVlO1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNlYXJjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdE11bHRpcGxlRmlsdGVyTGlzdChmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubXVsdGlwbGVGaWx0ZXJMaXN0ID0gdGhpcy5uekZpbHRlcnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBjaGVja2VkID0gZm9yY2UgPyBmYWxzZSA6ICEhaXRlbS5ieURlZmF1bHQ7XHJcbiAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5oYXNEZWZhdWx0RmlsdGVyID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyB0ZXh0OiBpdGVtLnRleHQsIHZhbHVlOiBpdGVtLnZhbHVlLCBjaGVja2VkIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hlY2tEZWZhdWx0RmlsdGVycygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFNpbmdsZUZpbHRlckxpc3QoZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnNpbmdsZUZpbHRlckxpc3QgPSB0aGlzLm56RmlsdGVycy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBmb3JjZSA/IGZhbHNlIDogISFpdGVtLmJ5RGVmYXVsdDtcclxuICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLmhhc0RlZmF1bHRGaWx0ZXIgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IHRleHQ6IGl0ZW0udGV4dCwgdmFsdWU6IGl0ZW0udmFsdWUsIGNoZWNrZWQgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGVja0RlZmF1bHRGaWx0ZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja0RlZmF1bHRGaWx0ZXJzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm56RmlsdGVycyB8fCB0aGlzLm56RmlsdGVycy5sZW5ndGggPT09IDAgfHwgIXRoaXMuaGFzRGVmYXVsdEZpbHRlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUZpbHRlclN0YXR1cygpO1xyXG4gIH1cclxuXHJcbiAgbWFyRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekZpbHRlcnMpIHtcclxuICAgICAgdGhpcy5pbml0TXVsdGlwbGVGaWx0ZXJMaXN0KCk7XHJcbiAgICAgIHRoaXMuaW5pdFNpbmdsZUZpbHRlckxpc3QoKTtcclxuICAgICAgdGhpcy51cGRhdGVGaWx0ZXJTdGF0dXMoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56V2lkdGgpIHtcclxuICAgICAgdGhpcy5ueldpZHRoQ2hhbmdlJC5uZXh0KHRoaXMubnpXaWR0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI2NoZWNrYm94VGVtcGxhdGU+XHJcbiAgPGxhYmVsXHJcbiAgICBuei1jaGVja2JveFxyXG4gICAgW2NsYXNzLmFudC10YWJsZS1zZWxlY3Rpb24tc2VsZWN0LWFsbC1jdXN0b21dPVwibnpTaG93Um93U2VsZWN0aW9uXCJcclxuICAgIFsobmdNb2RlbCldPVwibnpDaGVja2VkXCJcclxuICAgIFtuekRpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4gICAgW256SW5kZXRlcm1pbmF0ZV09XCJuekluZGV0ZXJtaW5hdGVcIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwibnpDaGVja2VkQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgPlxyXG4gIDwvbGFiZWw+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxzcGFuIGNsYXNzPVwiYW50LXRhYmxlLWhlYWRlci1jb2x1bW5cIj5cclxuICA8ZGl2IFtjbGFzcy5hbnQtdGFibGUtY29sdW1uLXNvcnRlcnNdPVwibnpTaG93U29ydFwiIChjbGljayk9XCJ1cGRhdGVTb3J0VmFsdWUoKVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtdGFibGUtY29sdW1uLXRpdGxlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelNob3dDaGVja2JveCAmJiAhbnpTaG93Um93U2VsZWN0aW9uXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNoZWNrYm94VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1zZWxlY3Rpb25cIiAqbmdJZj1cIm56U2hvd1Jvd1NlbGVjdGlvblwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelNob3dDaGVja2JveFwiPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNoZWNrYm94VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG56LWRyb3Bkb3duXHJcbiAgICAgICAgICBjbGFzcz1cImFudC10YWJsZS1zZWxlY3Rpb24tZG93blwiXHJcbiAgICAgICAgICBuelBsYWNlbWVudD1cImJvdHRvbUxlZnRcIlxyXG4gICAgICAgICAgW256RHJvcGRvd25NZW51XT1cInNlbGVjdGlvbk1lbnVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bnotZHJvcGRvd24tbWVudSAjc2VsZWN0aW9uTWVudT1cIm56RHJvcGRvd25NZW51XCI+XHJcbiAgICAgICAgICA8dWwgbnotbWVudSBjbGFzcz1cImFudC10YWJsZS1zZWxlY3Rpb24tbWVudVwiPlxyXG4gICAgICAgICAgICA8bGkgbnotbWVudS1pdGVtICpuZ0Zvcj1cImxldCBzZWxlY3Rpb24gb2YgbnpTZWxlY3Rpb25zXCIgKGNsaWNrKT1cInNlbGVjdGlvbi5vblNlbGVjdCgpXCI+XHJcbiAgICAgICAgICAgICAge3sgc2VsZWN0aW9uLnRleHQgfX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uei1kcm9wZG93bi1tZW51PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotZHJvcGRvd25cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXJcIiAqbmdJZj1cIm56U2hvd1NvcnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1jb2x1bW4tc29ydGVyLWlubmVyIGFudC10YWJsZS1jb2x1bW4tc29ydGVyLWlubmVyLWZ1bGxcIj5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgbnotaWNvblxyXG4gICAgICAgICAgbnpUeXBlPVwiY2FyZXQtdXBcIlxyXG4gICAgICAgICAgY2xhc3M9XCJhbnQtdGFibGUtY29sdW1uLXNvcnRlci11cFwiXHJcbiAgICAgICAgICBbY2xhc3Mub25dPVwibnpTb3J0ID09ICdhc2NlbmQnXCJcclxuICAgICAgICAgIFtjbGFzcy5vZmZdPVwibnpTb3J0ICE9ICdhc2NlbmQnXCJcclxuICAgICAgICA+PC9pPlxyXG4gICAgICAgIDxpXHJcbiAgICAgICAgICBuei1pY29uXHJcbiAgICAgICAgICBuelR5cGU9XCJjYXJldC1kb3duXCJcclxuICAgICAgICAgIGNsYXNzPVwiYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXItZG93blwiXHJcbiAgICAgICAgICBbY2xhc3Mub25dPVwibnpTb3J0ID09ICdkZXNjZW5kJ1wiXHJcbiAgICAgICAgICBbY2xhc3Mub2ZmXT1cIm56U29ydCAhPSAnZGVzY2VuZCdcIlxyXG4gICAgICAgID48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvc3Bhbj5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW256LWRyb3Bkb3duXVwiPjwvbmctY29udGVudD5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW256LXRoLWV4dHJhXVwiPjwvbmctY29udGVudD5cclxuXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJuelNob3dGaWx0ZXJcIj5cclxuICA8aVxyXG4gICAgbnotaWNvblxyXG4gICAgbnotZHJvcGRvd25cclxuICAgIG56VHlwZT1cImZpbHRlclwiXHJcbiAgICBuelRoZW1lPVwiZmlsbFwiXHJcbiAgICBuelRyaWdnZXI9XCJjbGlja1wiXHJcbiAgICBuelRhYmxlRmlsdGVyXHJcbiAgICBbbnpDbGlja0hpZGVdPVwiZmFsc2VcIlxyXG4gICAgW256RHJvcGRvd25NZW51XT1cImZpbHRlck1lbnVcIlxyXG4gICAgW2NsYXNzLmFudC10YWJsZS1maWx0ZXItc2VsZWN0ZWRdPVwiaGFzRmlsdGVyVmFsdWVcIlxyXG4gICAgW2NsYXNzLmFudC10YWJsZS1maWx0ZXItb3Blbl09XCJmaWx0ZXJWaXNpYmxlXCJcclxuICAgIChuelZpc2libGVDaGFuZ2UpPVwiZHJvcERvd25WaXNpYmxlQ2hhbmdlKCRldmVudClcIlxyXG4gID48L2k+XHJcbiAgPG56LWRyb3Bkb3duLW1lbnUgI2ZpbHRlck1lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxyXG4gICAgPHVsIG56LW1lbnU+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekZpbHRlck11bHRpcGxlXCI+XHJcbiAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgZmlsdGVyIG9mIG11bHRpcGxlRmlsdGVyTGlzdFwiIChjbGljayk9XCJjaGVja011bHRpcGxlKGZpbHRlcilcIj5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBuei1jaGVja2JveFxyXG4gICAgICAgICAgICBbbmdNb2RlbF09XCJmaWx0ZXIuY2hlY2tlZFwiXHJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoZWNrTXVsdGlwbGUoZmlsdGVyKVwiXHJcbiAgICAgICAgICA+PC9sYWJlbD5cclxuICAgICAgICAgIDxzcGFuPnt7IGZpbHRlci50ZXh0IH19PC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW56RmlsdGVyTXVsdGlwbGVcIj5cclxuICAgICAgICA8bGkgbnotbWVudS1pdGVtICpuZ0Zvcj1cImxldCBmaWx0ZXIgb2Ygc2luZ2xlRmlsdGVyTGlzdFwiIChjbGljayk9XCJjaGVja1NpbmdsZShmaWx0ZXIpXCI+XHJcbiAgICAgICAgICA8bGFiZWwgbnotcmFkaW8gW25nTW9kZWxdPVwiZmlsdGVyLmNoZWNrZWRcIiAobmdNb2RlbENoYW5nZSk9XCJjaGVja1NpbmdsZShmaWx0ZXIpXCI+e3tcclxuICAgICAgICAgICAgZmlsdGVyLnRleHRcclxuICAgICAgICAgIH19PC9sYWJlbD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvdWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bi1idG5zXCI+XHJcbiAgICAgIDxhIGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bi1saW5rIGNvbmZpcm1cIiAoY2xpY2spPVwiaGlkZURyb3BEb3duKClcIj5cclxuICAgICAgICA8c3Bhbj57eyBsb2NhbGUuZmlsdGVyQ29uZmlybSB9fTwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd24tbGluayBjbGVhclwiIChjbGljayk9XCJyZXNldCgpOyBoaWRlRHJvcERvd24oKVwiPlxyXG4gICAgICAgIDxzcGFuPnt7IGxvY2FsZS5maWx0ZXJSZXNldCB9fTwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uei1kcm9wZG93bi1tZW51PlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19