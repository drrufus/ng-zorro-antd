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
    const _r2531 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 7);
    i0.ɵɵlistener("ngModelChange", function NzThComponent_ng_template_0_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2531); const ctx_r2530 = i0.ɵɵnextContext(); return ctx_r2530.nzChecked = $event; })("ngModelChange", function NzThComponent_ng_template_0_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2531); const ctx_r2532 = i0.ɵɵnextContext(); return ctx_r2532.nzCheckedChange.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2525 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-table-selection-select-all-custom", ctx_r2525.nzShowRowSelection);
    i0.ɵɵproperty("ngModel", ctx_r2525.nzChecked)("nzDisabled", ctx_r2525.nzDisabled)("nzIndeterminate", ctx_r2525.nzIndeterminate);
} }
function NzThComponent_ng_container_5_ng_template_1_Template(rf, ctx) { }
function NzThComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzThComponent_ng_container_5_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2524 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2524);
} }
function NzThComponent_div_6_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzThComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzThComponent_div_6_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r2524 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2524);
} }
function NzThComponent_div_6_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵlistener("click", function NzThComponent_div_6_li_7_Template_li_click_0_listener($event) { const selection_r2538 = ctx.$implicit; return selection_r2538.onSelect(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selection_r2538 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", selection_r2538.text, " ");
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
    const _r2535 = i0.ɵɵreference(5);
    const ctx_r2527 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2527.nzShowCheckbox);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzDropdownMenu", _r2535);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r2527.nzSelections);
} }
function NzThComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵelement(2, "i", 18);
    i0.ɵɵelement(3, "i", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2528 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("on", ctx_r2528.nzSort == "ascend")("off", ctx_r2528.nzSort != "ascend");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("on", ctx_r2528.nzSort == "descend")("off", ctx_r2528.nzSort != "descend");
} }
function NzThComponent_ng_container_12_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r2546 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵlistener("click", function NzThComponent_ng_container_12_ng_container_5_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r2546); const filter_r2544 = ctx.$implicit; const ctx_r2545 = i0.ɵɵnextContext(3); return ctx_r2545.checkMultiple(filter_r2544); });
    i0.ɵɵelementStart(1, "label", 26);
    i0.ɵɵlistener("ngModelChange", function NzThComponent_ng_container_12_ng_container_5_li_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2546); const filter_r2544 = ctx.$implicit; const ctx_r2547 = i0.ɵɵnextContext(3); return ctx_r2547.checkMultiple(filter_r2544); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r2544 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", filter_r2544.checked);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(filter_r2544.text);
} }
function NzThComponent_ng_container_12_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzThComponent_ng_container_12_ng_container_5_li_1_Template, 4, 2, "li", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2541 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2541.multipleFilterList);
} }
function NzThComponent_ng_container_12_ng_container_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r2551 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵlistener("click", function NzThComponent_ng_container_12_ng_container_6_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r2551); const filter_r2549 = ctx.$implicit; const ctx_r2550 = i0.ɵɵnextContext(3); return ctx_r2550.checkSingle(filter_r2549); });
    i0.ɵɵelementStart(1, "label", 27);
    i0.ɵɵlistener("ngModelChange", function NzThComponent_ng_container_12_ng_container_6_li_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2551); const filter_r2549 = ctx.$implicit; const ctx_r2552 = i0.ɵɵnextContext(3); return ctx_r2552.checkSingle(filter_r2549); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r2549 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", filter_r2549.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(filter_r2549.text);
} }
function NzThComponent_ng_container_12_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzThComponent_ng_container_12_ng_container_6_li_1_Template, 3, 2, "li", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2542 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2542.singleFilterList);
} }
function NzThComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r2554 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "i", 20);
    i0.ɵɵlistener("nzVisibleChange", function NzThComponent_ng_container_12_Template_i_nzVisibleChange_1_listener($event) { i0.ɵɵrestoreView(_r2554); const ctx_r2553 = i0.ɵɵnextContext(); return ctx_r2553.dropDownVisibleChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "nz-dropdown-menu", null, 21);
    i0.ɵɵelementStart(4, "ul", 22);
    i0.ɵɵtemplate(5, NzThComponent_ng_container_12_ng_container_5_Template, 2, 1, "ng-container", 4);
    i0.ɵɵtemplate(6, NzThComponent_ng_container_12_ng_container_6_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 23);
    i0.ɵɵelementStart(8, "a", 24);
    i0.ɵɵlistener("click", function NzThComponent_ng_container_12_Template_a_click_8_listener($event) { i0.ɵɵrestoreView(_r2554); const ctx_r2555 = i0.ɵɵnextContext(); return ctx_r2555.hideDropDown(); });
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 25);
    i0.ɵɵlistener("click", function NzThComponent_ng_container_12_Template_a_click_11_listener($event) { i0.ɵɵrestoreView(_r2554); const ctx_r2556 = i0.ɵɵnextContext(); ctx_r2556.reset(); return ctx_r2556.hideDropDown(); });
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r2540 = i0.ɵɵreference(3);
    const ctx_r2529 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-table-filter-selected", ctx_r2529.hasFilterValue)("ant-table-filter-open", ctx_r2529.filterVisible);
    i0.ɵɵproperty("nzClickHide", false)("nzDropdownMenu", _r2540);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2529.nzFilterMultiple);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2529.nzFilterMultiple);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2529.locale.filterConfirm);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2529.locale.filterReset);
} }
const _c0 = ["*", [["nz-dropdown"]], [["", "nz-dropdown", ""]], [["", "nz-th-extra", ""]]];
const _c1 = ["*", "nz-dropdown", "[nz-dropdown]", "[nz-th-extra]"];
export class NzThComponent {
    constructor(cdr, i18n) {
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
    updateSortValue() {
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
    }
    setSortValue(value) {
        this.nzSort = value;
        this.nzSortChangeWithKey.emit({ key: this.nzSortKey, value: this.nzSort });
        this.nzSortChange.emit(this.nzSort);
    }
    get filterList() {
        return this.multipleFilterList.filter(item => item.checked).map(item => item.value);
    }
    /* tslint:disable-next-line:no-any */
    get filterValue() {
        const checkedFilter = this.singleFilterList.find(item => item.checked);
        return checkedFilter ? checkedFilter.value : null;
    }
    updateFilterStatus() {
        if (this.nzFilterMultiple) {
            this.hasFilterValue = this.filterList.length > 0;
        }
        else {
            this.hasFilterValue = isNotNil(this.filterValue);
        }
    }
    search() {
        this.updateFilterStatus();
        if (this.nzFilterMultiple) {
            this.nzFilterChange.emit(this.filterList);
        }
        else {
            this.nzFilterChange.emit(this.filterValue);
        }
    }
    reset() {
        this.initMultipleFilterList(true);
        this.initSingleFilterList(true);
        this.hasFilterValue = false;
    }
    checkMultiple(filter) {
        filter.checked = !filter.checked;
    }
    checkSingle(filter) {
        this.singleFilterList.forEach(item => (item.checked = item === filter));
    }
    hideDropDown() {
        this.nzDropdownMenuComponent.setVisibleStateWhen(false);
        this.filterVisible = false;
    }
    dropDownVisibleChange(value) {
        this.filterVisible = value;
        if (!value) {
            this.search();
        }
    }
    initMultipleFilterList(force) {
        this.multipleFilterList = this.nzFilters.map(item => {
            const checked = force ? false : !!item.byDefault;
            if (checked) {
                this.hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked };
        });
        this.checkDefaultFilters();
    }
    initSingleFilterList(force) {
        this.singleFilterList = this.nzFilters.map(item => {
            const checked = force ? false : !!item.byDefault;
            if (checked) {
                this.hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked };
        });
        this.checkDefaultFilters();
    }
    checkDefaultFilters() {
        if (!this.nzFilters || this.nzFilters.length === 0 || !this.hasDefaultFilter) {
            return;
        }
        this.updateFilterStatus();
    }
    marForCheck() {
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        if (changes.nzFilters) {
            this.initMultipleFilterList();
            this.initSingleFilterList();
            this.updateFilterStatus();
        }
        if (changes.nzWidth) {
            this.nzWidthChange$.next(this.nzWidth);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
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
                    '[class.ant-table-column-sort]': `nzSort === 'descend' || nzSort === 'ascend'`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRoLmNvbXBvbmVudC50cyIsIm56LXRoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pFLE9BQU8sRUFBbUIsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7OztJQzFCbEUsZ0NBUVE7SUFMTiw2TkFBdUIsZ0xBR04sc0NBQTRCLElBSHRCO0lBS3pCLGlCQUFROzs7SUFOTixxRkFBa0U7SUFDbEUsNkNBQXVCLG9DQUFBLDhDQUFBOzs7O0lBVXJCLDZCQUNFO0lBQUEsNkZBQW1EO0lBQ3JELDBCQUFlOzs7O0lBREEsZUFBcUM7SUFBckMseUNBQXFDOzs7O0lBR2xELDZCQUNFO0lBQUEsbUdBQW1EO0lBQ3JELDBCQUFlOzs7O0lBREEsZUFBcUM7SUFBckMseUNBQXFDOzs7SUFZaEQsOEJBQ0U7SUFEc0QsOElBQVMsMEJBQW9CLElBQUM7SUFDcEYsWUFDRjtJQUFBLGlCQUFLOzs7SUFESCxlQUNGO0lBREUscURBQ0Y7OztJQWhCTiw4QkFDRTtJQUFBLHNGQUNFO0lBRUYsK0JBTUU7SUFBQSx3QkFBNkI7SUFDL0IsaUJB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QWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsSUFBSSxFQUFFO29CQUNKLHNDQUFzQyxFQUFFLDhDQUE4QztvQkFDdEYsc0NBQXNDLEVBQUUsZ0NBQWdDO29CQUN4RSxzQ0FBc0MsRUFBRSxZQUFZO29CQUNwRCwyQ0FBMkMsRUFBRSxvQkFBb0I7b0JBQ2pFLG9DQUFvQyxFQUFFLGdCQUFnQjtvQkFDdEQsa0NBQWtDLEVBQUUsVUFBVTtvQkFDOUMsa0NBQWtDLEVBQUUsUUFBUTtvQkFDNUMsbUNBQW1DLEVBQUUsU0FBUztvQkFDOUMsK0JBQStCLEVBQUUsNkNBQTZDO29CQUM5RSxjQUFjLEVBQUUsUUFBUTtvQkFDeEIsZUFBZSxFQUFFLFNBQVM7b0JBQzFCLG9CQUFvQixFQUFFLFNBQVM7aUJBQ2hDO2FBQ0Y7O2tCQVdFLFNBQVM7bUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFFcEQsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBRU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBOekkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG5leHBvcnQgdHlwZSBOelRoRmlsdGVyVHlwZSA9IEFycmF5PHsgdGV4dDogc3RyaW5nOyB2YWx1ZTogYW55OyBieURlZmF1bHQ/OiBib29sZWFuIH0+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOelRoSXRlbUludGVyZmFjZSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICB2YWx1ZTogYW55O1xyXG4gIGNoZWNrZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3RoOm5vdCgubnotZGlzYWJsZS10aCk6bm90KFttYXQtc29ydC1oZWFkZXJdKTpub3QoW21hdC1oZWFkZXItY2VsbF0pJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtY29sdW1uLWhhcy1hY3Rpb25zXSc6ICduelNob3dGaWx0ZXIgfHwgbnpTaG93U29ydCB8fCBuekN1c3RvbUZpbHRlcicsXHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jb2x1bW4taGFzLWZpbHRlcnNdJzogJ256U2hvd0ZpbHRlciB8fCBuekN1c3RvbUZpbHRlcicsXHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jb2x1bW4taGFzLXNvcnRlcnNdJzogJ256U2hvd1NvcnQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbi1jdXN0b21dJzogJ256U2hvd1Jvd1NlbGVjdGlvbicsXHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uXSc6ICduelNob3dDaGVja2JveCcsXHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS1leHBhbmQtaWNvbi10aF0nOiAnbnpFeHBhbmQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtdGgtbGVmdC1zdGlja3ldJzogJ256TGVmdCcsXHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS10aC1yaWdodC1zdGlja3ldJzogJ256UmlnaHQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtY29sdW1uLXNvcnRdJzogYG56U29ydCA9PT0gJ2Rlc2NlbmQnIHx8IG56U29ydCA9PT0gJ2FzY2VuZCdgLFxyXG4gICAgJ1tzdHlsZS5sZWZ0XSc6ICduekxlZnQnLFxyXG4gICAgJ1tzdHlsZS5yaWdodF0nOiAnbnpSaWdodCcsXHJcbiAgICAnW3N0eWxlLnRleHQtYWxpZ25dJzogJ256QWxpZ24nXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGhhc0ZpbHRlclZhbHVlID0gZmFsc2U7XHJcbiAgZmlsdGVyVmlzaWJsZSA9IGZhbHNlO1xyXG4gIG11bHRpcGxlRmlsdGVyTGlzdDogTnpUaEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIHNpbmdsZUZpbHRlckxpc3Q6IE56VGhJdGVtSW50ZXJmYWNlW10gPSBbXTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgbG9jYWxlOiBOekkxOG5JbnRlcmZhY2VbJ1RhYmxlJ10gPSB7fSBhcyBOekkxOG5JbnRlcmZhY2VbJ1RhYmxlJ107XHJcbiAgbnpXaWR0aENoYW5nZSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgaGFzRGVmYXVsdEZpbHRlciA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoTnpEcm9wZG93bk1lbnVDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBuekRyb3Bkb3duTWVudUNvbXBvbmVudDogTnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBJbnB1dCgpIG56U2VsZWN0aW9uczogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IG9uU2VsZWN0KC4uLmFyZ3M6IGFueVtdKTogYW55IH0+ID0gW107XHJcbiAgQElucHV0KCkgbnpDaGVja2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56SW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56U29ydEtleTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56RmlsdGVyTXVsdGlwbGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56V2lkdGg6IHN0cmluZztcclxuICBASW5wdXQoKSBuekxlZnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelJpZ2h0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpBbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInO1xyXG4gIEBJbnB1dCgpIG56U29ydDogJ2FzY2VuZCcgfCAnZGVzY2VuZCcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuekZpbHRlcnM6IE56VGhGaWx0ZXJUeXBlID0gW107XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RXhwYW5kID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0NoZWNrYm94ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q3VzdG9tRmlsdGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NvcnQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RmlsdGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1Jvd1NlbGVjdGlvbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTb3J0Q2hhbmdlV2l0aEtleSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB8IG51bGwgfT4oKTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXSB8IGFueT4oKTtcclxuXHJcbiAgdXBkYXRlU29ydFZhbHVlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTaG93U29ydCkge1xyXG4gICAgICBpZiAodGhpcy5uelNvcnQgPT09ICdhc2NlbmQnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTb3J0VmFsdWUoJ2Rlc2NlbmQnKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm56U29ydCA9PT0gJ2Rlc2NlbmQnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTb3J0VmFsdWUobnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTb3J0VmFsdWUoJ2FzY2VuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTb3J0VmFsdWUodmFsdWU6ICdhc2NlbmQnIHwgJ2Rlc2NlbmQnIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNvcnQgPSB2YWx1ZTtcclxuICAgIHRoaXMubnpTb3J0Q2hhbmdlV2l0aEtleS5lbWl0KHsga2V5OiB0aGlzLm56U29ydEtleSwgdmFsdWU6IHRoaXMubnpTb3J0IH0pO1xyXG4gICAgdGhpcy5uelNvcnRDaGFuZ2UuZW1pdCh0aGlzLm56U29ydCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZmlsdGVyTGlzdCgpOiBOelRoSXRlbUludGVyZmFjZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm11bHRpcGxlRmlsdGVyTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGdldCBmaWx0ZXJWYWx1ZSgpOiBhbnkge1xyXG4gICAgY29uc3QgY2hlY2tlZEZpbHRlciA9IHRoaXMuc2luZ2xlRmlsdGVyTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5jaGVja2VkKTtcclxuICAgIHJldHVybiBjaGVja2VkRmlsdGVyID8gY2hlY2tlZEZpbHRlci52YWx1ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGaWx0ZXJTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekZpbHRlck11bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMuaGFzRmlsdGVyVmFsdWUgPSB0aGlzLmZpbHRlckxpc3QubGVuZ3RoID4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzRmlsdGVyVmFsdWUgPSBpc05vdE5pbCh0aGlzLmZpbHRlclZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlRmlsdGVyU3RhdHVzKCk7XHJcbiAgICBpZiAodGhpcy5uekZpbHRlck11bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMubnpGaWx0ZXJDaGFuZ2UuZW1pdCh0aGlzLmZpbHRlckxpc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uekZpbHRlckNoYW5nZS5lbWl0KHRoaXMuZmlsdGVyVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRNdWx0aXBsZUZpbHRlckxpc3QodHJ1ZSk7XHJcbiAgICB0aGlzLmluaXRTaW5nbGVGaWx0ZXJMaXN0KHRydWUpO1xyXG4gICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tNdWx0aXBsZShmaWx0ZXI6IE56VGhJdGVtSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBmaWx0ZXIuY2hlY2tlZCA9ICFmaWx0ZXIuY2hlY2tlZDtcclxuICB9XHJcblxyXG4gIGNoZWNrU2luZ2xlKGZpbHRlcjogTnpUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIHRoaXMuc2luZ2xlRmlsdGVyTGlzdC5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IGl0ZW0gPT09IGZpbHRlcikpO1xyXG4gIH1cclxuXHJcbiAgaGlkZURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekRyb3Bkb3duTWVudUNvbXBvbmVudC5zZXRWaXNpYmxlU3RhdGVXaGVuKGZhbHNlKTtcclxuICAgIHRoaXMuZmlsdGVyVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZHJvcERvd25WaXNpYmxlQ2hhbmdlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpbHRlclZpc2libGUgPSB2YWx1ZTtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRNdWx0aXBsZUZpbHRlckxpc3QoZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm11bHRpcGxlRmlsdGVyTGlzdCA9IHRoaXMubnpGaWx0ZXJzLm1hcChpdGVtID0+IHtcclxuICAgICAgY29uc3QgY2hlY2tlZCA9IGZvcmNlID8gZmFsc2UgOiAhIWl0ZW0uYnlEZWZhdWx0O1xyXG4gICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuaGFzRGVmYXVsdEZpbHRlciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgdGV4dDogaXRlbS50ZXh0LCB2YWx1ZTogaXRlbS52YWx1ZSwgY2hlY2tlZCB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNoZWNrRGVmYXVsdEZpbHRlcnMoKTtcclxuICB9XHJcblxyXG4gIGluaXRTaW5nbGVGaWx0ZXJMaXN0KGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJMaXN0ID0gdGhpcy5uekZpbHRlcnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBjaGVja2VkID0gZm9yY2UgPyBmYWxzZSA6ICEhaXRlbS5ieURlZmF1bHQ7XHJcbiAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5oYXNEZWZhdWx0RmlsdGVyID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyB0ZXh0OiBpdGVtLnRleHQsIHZhbHVlOiBpdGVtLnZhbHVlLCBjaGVja2VkIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hlY2tEZWZhdWx0RmlsdGVycygpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tEZWZhdWx0RmlsdGVycygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekZpbHRlcnMgfHwgdGhpcy5uekZpbHRlcnMubGVuZ3RoID09PSAwIHx8ICF0aGlzLmhhc0RlZmF1bHRGaWx0ZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJTdGF0dXMoKTtcclxuICB9XHJcblxyXG4gIG1hckZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpGaWx0ZXJzKSB7XHJcbiAgICAgIHRoaXMuaW5pdE11bHRpcGxlRmlsdGVyTGlzdCgpO1xyXG4gICAgICB0aGlzLmluaXRTaW5nbGVGaWx0ZXJMaXN0KCk7XHJcbiAgICAgIHRoaXMudXBkYXRlRmlsdGVyU3RhdHVzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5ueldpZHRoKSB7XHJcbiAgICAgIHRoaXMubnpXaWR0aENoYW5nZSQubmV4dCh0aGlzLm56V2lkdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNjaGVja2JveFRlbXBsYXRlPlxyXG4gIDxsYWJlbFxyXG4gICAgbnotY2hlY2tib3hcclxuICAgIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0aW9uLXNlbGVjdC1hbGwtY3VzdG9tXT1cIm56U2hvd1Jvd1NlbGVjdGlvblwiXHJcbiAgICBbKG5nTW9kZWwpXT1cIm56Q2hlY2tlZFwiXHJcbiAgICBbbnpEaXNhYmxlZF09XCJuekRpc2FibGVkXCJcclxuICAgIFtuekluZGV0ZXJtaW5hdGVdPVwibnpJbmRldGVybWluYXRlXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIm56Q2hlY2tlZENoYW5nZS5lbWl0KCRldmVudClcIlxyXG4gID5cclxuICA8L2xhYmVsPlxyXG48L25nLXRlbXBsYXRlPlxyXG48c3BhbiBjbGFzcz1cImFudC10YWJsZS1oZWFkZXItY29sdW1uXCI+XHJcbiAgPGRpdiBbY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXJzXT1cIm56U2hvd1NvcnRcIiAoY2xpY2spPVwidXBkYXRlU29ydFZhbHVlKClcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXRhYmxlLWNvbHVtbi10aXRsZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpTaG93Q2hlY2tib3ggJiYgIW56U2hvd1Jvd1NlbGVjdGlvblwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjaGVja2JveFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uXCIgKm5nSWY9XCJuelNob3dSb3dTZWxlY3Rpb25cIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpTaG93Q2hlY2tib3hcIj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjaGVja2JveFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBuei1kcm9wZG93blxyXG4gICAgICAgICAgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uLWRvd25cIlxyXG4gICAgICAgICAgbnpQbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCJcclxuICAgICAgICAgIFtuekRyb3Bkb3duTWVudV09XCJzZWxlY3Rpb25NZW51XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIj48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG56LWRyb3Bkb3duLW1lbnUgI3NlbGVjdGlvbk1lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxyXG4gICAgICAgICAgPHVsIG56LW1lbnUgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uLW1lbnVcIj5cclxuICAgICAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgc2VsZWN0aW9uIG9mIG56U2VsZWN0aW9uc1wiIChjbGljayk9XCJzZWxlY3Rpb24ub25TZWxlY3QoKVwiPlxyXG4gICAgICAgICAgICAgIHt7IHNlbGVjdGlvbi50ZXh0IH19XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbnotZHJvcGRvd24tbWVudT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LWRyb3Bkb3duXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1jb2x1bW4tc29ydGVyXCIgKm5nSWY9XCJuelNob3dTb3J0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtY29sdW1uLXNvcnRlci1pbm5lciBhbnQtdGFibGUtY29sdW1uLXNvcnRlci1pbm5lci1mdWxsXCI+XHJcbiAgICAgICAgPGlcclxuICAgICAgICAgIG56LWljb25cclxuICAgICAgICAgIG56VHlwZT1cImNhcmV0LXVwXCJcclxuICAgICAgICAgIGNsYXNzPVwiYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXItdXBcIlxyXG4gICAgICAgICAgW2NsYXNzLm9uXT1cIm56U29ydCA9PSAnYXNjZW5kJ1wiXHJcbiAgICAgICAgICBbY2xhc3Mub2ZmXT1cIm56U29ydCAhPSAnYXNjZW5kJ1wiXHJcbiAgICAgICAgPjwvaT5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgbnotaWNvblxyXG4gICAgICAgICAgbnpUeXBlPVwiY2FyZXQtZG93blwiXHJcbiAgICAgICAgICBjbGFzcz1cImFudC10YWJsZS1jb2x1bW4tc29ydGVyLWRvd25cIlxyXG4gICAgICAgICAgW2NsYXNzLm9uXT1cIm56U29ydCA9PSAnZGVzY2VuZCdcIlxyXG4gICAgICAgICAgW2NsYXNzLm9mZl09XCJuelNvcnQgIT0gJ2Rlc2NlbmQnXCJcclxuICAgICAgICA+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3NwYW4+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIltuei1kcm9wZG93bl1cIj48L25nLWNvbnRlbnQ+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIltuei10aC1leHRyYV1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibnpTaG93RmlsdGVyXCI+XHJcbiAgPGlcclxuICAgIG56LWljb25cclxuICAgIG56LWRyb3Bkb3duXHJcbiAgICBuelR5cGU9XCJmaWx0ZXJcIlxyXG4gICAgbnpUaGVtZT1cImZpbGxcIlxyXG4gICAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgbnpUYWJsZUZpbHRlclxyXG4gICAgW256Q2xpY2tIaWRlXT1cImZhbHNlXCJcclxuICAgIFtuekRyb3Bkb3duTWVudV09XCJmaWx0ZXJNZW51XCJcclxuICAgIFtjbGFzcy5hbnQtdGFibGUtZmlsdGVyLXNlbGVjdGVkXT1cImhhc0ZpbHRlclZhbHVlXCJcclxuICAgIFtjbGFzcy5hbnQtdGFibGUtZmlsdGVyLW9wZW5dPVwiZmlsdGVyVmlzaWJsZVwiXHJcbiAgICAobnpWaXNpYmxlQ2hhbmdlKT1cImRyb3BEb3duVmlzaWJsZUNoYW5nZSgkZXZlbnQpXCJcclxuICA+PC9pPlxyXG4gIDxuei1kcm9wZG93bi1tZW51ICNmaWx0ZXJNZW51PVwibnpEcm9wZG93bk1lbnVcIj5cclxuICAgIDx1bCBuei1tZW51PlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpGaWx0ZXJNdWx0aXBsZVwiPlxyXG4gICAgICAgIDxsaSBuei1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IGZpbHRlciBvZiBtdWx0aXBsZUZpbHRlckxpc3RcIiAoY2xpY2spPVwiY2hlY2tNdWx0aXBsZShmaWx0ZXIpXCI+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgbnotY2hlY2tib3hcclxuICAgICAgICAgICAgW25nTW9kZWxdPVwiZmlsdGVyLmNoZWNrZWRcIlxyXG4gICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGVja011bHRpcGxlKGZpbHRlcilcIlxyXG4gICAgICAgICAgPjwvbGFiZWw+XHJcbiAgICAgICAgICA8c3Bhbj57eyBmaWx0ZXIudGV4dCB9fTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuekZpbHRlck11bHRpcGxlXCI+XHJcbiAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgZmlsdGVyIG9mIHNpbmdsZUZpbHRlckxpc3RcIiAoY2xpY2spPVwiY2hlY2tTaW5nbGUoZmlsdGVyKVwiPlxyXG4gICAgICAgICAgPGxhYmVsIG56LXJhZGlvIFtuZ01vZGVsXT1cImZpbHRlci5jaGVja2VkXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hlY2tTaW5nbGUoZmlsdGVyKVwiPnt7XHJcbiAgICAgICAgICAgIGZpbHRlci50ZXh0XHJcbiAgICAgICAgICB9fTwvbGFiZWw+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L3VsPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd24tYnRuc1wiPlxyXG4gICAgICA8YSBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd24tbGluayBjb25maXJtXCIgKGNsaWNrKT1cImhpZGVEcm9wRG93bigpXCI+XHJcbiAgICAgICAgPHNwYW4+e3sgbG9jYWxlLmZpbHRlckNvbmZpcm0gfX08L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLWRyb3Bkb3duLWxpbmsgY2xlYXJcIiAoY2xpY2spPVwicmVzZXQoKTsgaGlkZURyb3BEb3duKClcIj5cclxuICAgICAgICA8c3Bhbj57eyBsb2NhbGUuZmlsdGVyUmVzZXQgfX08L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gIDwvbnotZHJvcGRvd24tbWVudT5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==