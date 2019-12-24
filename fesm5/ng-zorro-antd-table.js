import { __decorate, __metadata, __spread } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { CdkVirtualScrollViewport, ScrollingModule, CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf } from '@angular/cdk/scrolling';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵclassProp, ɵɵproperty, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵreference, ɵɵadvance, ɵɵtext, ɵɵtextInterpolate1, ɵɵelement, ɵɵtextInterpolate, EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵstyleProp, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵtemplateRefExtractor, ɵɵprojection, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, Input, Output, TemplateRef, ɵɵdefineDirective, Directive, ɵɵpureFunction2, Renderer2, NgZone, ElementRef, ɵɵcontentQuery, ɵɵstaticViewQuery, ContentChildren, ContentChild, Host, Optional, ɵɵProvidersFeature, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { Subject, merge, fromEvent, EMPTY } from 'rxjs';
import { takeUntil, startWith, flatMap, switchMap } from 'rxjs/operators';
import { isNotNil, InputBoolean, measureScrollbar, NzConfigService, WithConfig, InputNumber, NzUpdateHostClassService, toBoolean, NzAddOnModule, NzStringTemplateOutletDirective, NzClassListAddDirective } from 'ng-zorro-antd/core';
import { NzI18nService, NzI18nModule, NzI18nPipe } from 'ng-zorro-antd/i18n';
import { NzDropdownMenuComponent, NzDropDownDirective, NzDropDownModule, NzDropDownADirective } from 'ng-zorro-antd/dropdown';
import { NgIf, NgTemplateOutlet, NgForOf, CommonModule, NgClass, NgComponentOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { NzCheckboxComponent, NzCheckboxModule, NzCheckboxGroupComponent, NzCheckboxWrapperComponent } from 'ng-zorro-antd/checkbox';
import { NgControlStatus, NgModel, FormsModule, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModelGroup, NgForm } from '@angular/forms';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuDirective, NzMenuItemDirective, NzMenuModule, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent } from 'ng-zorro-antd/menu';
import { NzRadioComponent, NzRadioModule, NzRadioButtonComponent, NzRadioGroupComponent } from 'ng-zorro-antd/radio';
import { NzEmptyModule, NzEmptyComponent, NzEmbedEmptyComponent } from 'ng-zorro-antd/empty';
import { NzPaginationModule, NzPaginationComponent } from 'ng-zorro-antd/pagination';
import { NzSpinModule, NzSpinComponent } from 'ng-zorro-antd/spin';
import { Dir } from '@angular/cdk/bidi';

function NzThComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r2632 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 7);
    ɵɵlistener("ngModelChange", function NzThComponent_ng_template_0_Template_label_ngModelChange_0_listener($event) { ɵɵrestoreView(_r2632); var ctx_r2631 = ɵɵnextContext(); return ctx_r2631.nzChecked = $event; })("ngModelChange", function NzThComponent_ng_template_0_Template_label_ngModelChange_0_listener($event) { ɵɵrestoreView(_r2632); var ctx_r2633 = ɵɵnextContext(); return ctx_r2633.nzCheckedChange.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2626 = ɵɵnextContext();
    ɵɵclassProp("ant-table-selection-select-all-custom", ctx_r2626.nzShowRowSelection);
    ɵɵproperty("ngModel", ctx_r2626.nzChecked)("nzDisabled", ctx_r2626.nzDisabled)("nzIndeterminate", ctx_r2626.nzIndeterminate);
} }
function NzThComponent_ng_container_5_ng_template_1_Template(rf, ctx) { }
function NzThComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzThComponent_ng_container_5_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    var _r2625 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2625);
} }
function NzThComponent_div_6_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzThComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzThComponent_div_6_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext(2);
    var _r2625 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2625);
} }
function NzThComponent_div_6_li_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 15);
    ɵɵlistener("click", function NzThComponent_div_6_li_7_Template_li_click_0_listener($event) { var selection_r2639 = ctx.$implicit; return selection_r2639.onSelect(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var selection_r2639 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", selection_r2639.text, " ");
} }
function NzThComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, NzThComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵɵelementStart(2, "div", 10);
    ɵɵelement(3, "i", 11);
    ɵɵelementEnd();
    ɵɵelementStart(4, "nz-dropdown-menu", null, 12);
    ɵɵelementStart(6, "ul", 13);
    ɵɵtemplate(7, NzThComponent_div_6_li_7_Template, 2, 1, "li", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var _r2636 = ɵɵreference(5);
    var ctx_r2628 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2628.nzShowCheckbox);
    ɵɵadvance(1);
    ɵɵproperty("nzDropdownMenu", _r2636);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r2628.nzSelections);
} }
function NzThComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelementStart(1, "div", 17);
    ɵɵelement(2, "i", 18);
    ɵɵelement(3, "i", 19);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2629 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassProp("on", ctx_r2629.nzSort == "ascend")("off", ctx_r2629.nzSort != "ascend");
    ɵɵadvance(1);
    ɵɵclassProp("on", ctx_r2629.nzSort == "descend")("off", ctx_r2629.nzSort != "descend");
} }
function NzThComponent_ng_container_12_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r2647 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15);
    ɵɵlistener("click", function NzThComponent_ng_container_12_ng_container_5_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r2647); var filter_r2645 = ctx.$implicit; var ctx_r2646 = ɵɵnextContext(3); return ctx_r2646.checkMultiple(filter_r2645); });
    ɵɵelementStart(1, "label", 26);
    ɵɵlistener("ngModelChange", function NzThComponent_ng_container_12_ng_container_5_li_1_Template_label_ngModelChange_1_listener($event) { ɵɵrestoreView(_r2647); var filter_r2645 = ctx.$implicit; var ctx_r2648 = ɵɵnextContext(3); return ctx_r2648.checkMultiple(filter_r2645); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var filter_r2645 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngModel", filter_r2645.checked);
    ɵɵadvance(2);
    ɵɵtextInterpolate(filter_r2645.text);
} }
function NzThComponent_ng_container_12_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzThComponent_ng_container_12_ng_container_5_li_1_Template, 4, 2, "li", 14);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2642 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2642.multipleFilterList);
} }
function NzThComponent_ng_container_12_ng_container_6_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r2652 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15);
    ɵɵlistener("click", function NzThComponent_ng_container_12_ng_container_6_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r2652); var filter_r2650 = ctx.$implicit; var ctx_r2651 = ɵɵnextContext(3); return ctx_r2651.checkSingle(filter_r2650); });
    ɵɵelementStart(1, "label", 27);
    ɵɵlistener("ngModelChange", function NzThComponent_ng_container_12_ng_container_6_li_1_Template_label_ngModelChange_1_listener($event) { ɵɵrestoreView(_r2652); var filter_r2650 = ctx.$implicit; var ctx_r2653 = ɵɵnextContext(3); return ctx_r2653.checkSingle(filter_r2650); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var filter_r2650 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngModel", filter_r2650.checked);
    ɵɵadvance(1);
    ɵɵtextInterpolate(filter_r2650.text);
} }
function NzThComponent_ng_container_12_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzThComponent_ng_container_12_ng_container_6_li_1_Template, 3, 2, "li", 14);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2643 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2643.singleFilterList);
} }
function NzThComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    var _r2655 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "i", 20);
    ɵɵlistener("nzVisibleChange", function NzThComponent_ng_container_12_Template_i_nzVisibleChange_1_listener($event) { ɵɵrestoreView(_r2655); var ctx_r2654 = ɵɵnextContext(); return ctx_r2654.dropDownVisibleChange($event); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "nz-dropdown-menu", null, 21);
    ɵɵelementStart(4, "ul", 22);
    ɵɵtemplate(5, NzThComponent_ng_container_12_ng_container_5_Template, 2, 1, "ng-container", 4);
    ɵɵtemplate(6, NzThComponent_ng_container_12_ng_container_6_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 23);
    ɵɵelementStart(8, "a", 24);
    ɵɵlistener("click", function NzThComponent_ng_container_12_Template_a_click_8_listener($event) { ɵɵrestoreView(_r2655); var ctx_r2656 = ɵɵnextContext(); return ctx_r2656.hideDropDown(); });
    ɵɵelementStart(9, "span");
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "a", 25);
    ɵɵlistener("click", function NzThComponent_ng_container_12_Template_a_click_11_listener($event) { ɵɵrestoreView(_r2655); var ctx_r2657 = ɵɵnextContext(); ctx_r2657.reset(); return ctx_r2657.hideDropDown(); });
    ɵɵelementStart(12, "span");
    ɵɵtext(13);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r2641 = ɵɵreference(3);
    var ctx_r2630 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassProp("ant-table-filter-selected", ctx_r2630.hasFilterValue)("ant-table-filter-open", ctx_r2630.filterVisible);
    ɵɵproperty("nzClickHide", false)("nzDropdownMenu", _r2641);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r2630.nzFilterMultiple);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2630.nzFilterMultiple);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r2630.locale.filterConfirm);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r2630.locale.filterReset);
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
    /** @nocollapse */ NzThComponent.ɵfac = function NzThComponent_Factory(t) { return new (t || NzThComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService)); };
    /** @nocollapse */ NzThComponent.ɵcmp = ɵɵdefineComponent({ type: NzThComponent, selectors: [["th", 9, "nz-disable-th", 3, "mat-sort-header", "", 3, "mat-header-cell", ""]], viewQuery: function NzThComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(NzDropdownMenuComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzDropdownMenuComponent = _t.first);
        } }, hostBindings: function NzThComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(12);
        } if (rf & 2) {
            ɵɵstyleProp("left", ctx.nzLeft)("right", ctx.nzRight)("text-align", ctx.nzAlign);
            ɵɵclassProp("ant-table-column-has-actions", ctx.nzShowFilter || ctx.nzShowSort || ctx.nzCustomFilter)("ant-table-column-has-filters", ctx.nzShowFilter || ctx.nzCustomFilter)("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-selection-column-custom", ctx.nzShowRowSelection)("ant-table-selection-column", ctx.nzShowCheckbox)("ant-table-expand-icon-th", ctx.nzExpand)("ant-table-th-left-sticky", ctx.nzLeft)("ant-table-th-right-sticky", ctx.nzRight)("ant-table-column-sort", ctx.nzSort === "descend" || ctx.nzSort === "ascend");
        } }, inputs: { nzSelections: "nzSelections", nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzSortKey: "nzSortKey", nzFilterMultiple: "nzFilterMultiple", nzWidth: "nzWidth", nzLeft: "nzLeft", nzRight: "nzRight", nzAlign: "nzAlign", nzSort: "nzSort", nzFilters: "nzFilters", nzExpand: "nzExpand", nzShowCheckbox: "nzShowCheckbox", nzCustomFilter: "nzCustomFilter", nzShowSort: "nzShowSort", nzShowFilter: "nzShowFilter", nzShowRowSelection: "nzShowRowSelection" }, outputs: { nzCheckedChange: "nzCheckedChange", nzSortChange: "nzSortChange", nzSortChangeWithKey: "nzSortChangeWithKey", nzFilterChange: "nzFilterChange" }, features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 13, vars: 5, consts: [["checkboxTemplate", ""], [1, "ant-table-header-column"], [3, "click"], [1, "ant-table-column-title"], [4, "ngIf"], ["class", "ant-table-selection", 4, "ngIf"], ["class", "ant-table-column-sorter", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange"], [3, "ngTemplateOutlet"], [1, "ant-table-selection"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["selectionMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner", "ant-table-column-sorter-inner-full"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down"], ["nz-icon", "", "nz-dropdown", "", "nzType", "filter", "nzTheme", "fill", "nzTrigger", "click", "nzTableFilter", "", 3, "nzClickHide", "nzDropdownMenu", "nzVisibleChange"], ["filterMenu", "nzDropdownMenu"], ["nz-menu", ""], [1, "ant-table-filter-dropdown-btns"], [1, "ant-table-filter-dropdown-link", "confirm", 3, "click"], [1, "ant-table-filter-dropdown-link", "clear", 3, "click"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "ngModel", "ngModelChange"]], template: function NzThComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0);
            ɵɵtemplate(0, NzThComponent_ng_template_0_Template, 1, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
            ɵɵelementStart(2, "span", 1);
            ɵɵelementStart(3, "div", 2);
            ɵɵlistener("click", function NzThComponent_Template_div_click_3_listener($event) { return ctx.updateSortValue(); });
            ɵɵelementStart(4, "span", 3);
            ɵɵtemplate(5, NzThComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
            ɵɵtemplate(6, NzThComponent_div_6_Template, 8, 3, "div", 5);
            ɵɵprojection(7);
            ɵɵelementEnd();
            ɵɵprojection(8, 1);
            ɵɵtemplate(9, NzThComponent_div_9_Template, 4, 4, "div", 6);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵprojection(10, 2);
            ɵɵprojection(11, 3);
            ɵɵtemplate(12, NzThComponent_ng_container_12_Template, 14, 8, "ng-container", 4);
        } if (rf & 2) {
            ɵɵadvance(3);
            ɵɵclassProp("ant-table-column-sorters", ctx.nzShowSort);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.nzShowCheckbox && !ctx.nzShowRowSelection);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzShowRowSelection);
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.nzShowSort);
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.nzShowFilter);
        } }, directives: [NgIf, NzCheckboxComponent, NgControlStatus, NgModel, NgTemplateOutlet, NzDropDownDirective, NzIconDirective, NzDropdownMenuComponent, NzMenuDirective, NgForOf, NzMenuItemDirective, NzRadioComponent], encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzThComponent, [{
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
    }], function () { return [{ type: ChangeDetectorRef }, { type: NzI18nService }]; }, { nzDropdownMenuComponent: [{
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzVirtualScrollDirective = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzVirtualScrollDirective(templateRef) {
        this.templateRef = templateRef;
    }
    /** @nocollapse */ NzVirtualScrollDirective.ɵfac = function NzVirtualScrollDirective_Factory(t) { return new (t || NzVirtualScrollDirective)(ɵɵdirectiveInject(TemplateRef)); };
    /** @nocollapse */ NzVirtualScrollDirective.ɵdir = ɵɵdefineDirective({ type: NzVirtualScrollDirective, selectors: [["", "nz-virtual-scroll", ""]], exportAs: ["nzVirtualScroll"] });
    return NzVirtualScrollDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzVirtualScrollDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-virtual-scroll]',
                exportAs: 'nzVirtualScroll'
            }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

var _c0$1 = ["tableHeaderElement"];
var _c1$1 = ["tableBodyElement"];
var _c2 = ["tableMainElement"];
var _c3 = ["renderItemTemplate"];
function NzTableComponent_ng_template_0_a_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 13);
    ɵɵelement(1, "i", 14);
    ɵɵelementEnd();
} }
function NzTableComponent_ng_template_0_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 13);
    ɵɵelement(1, "i", 15);
    ɵɵelementEnd();
} }
function NzTableComponent_ng_template_0_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var page_r2678 = ɵɵnextContext().page;
    ɵɵadvance(1);
    ɵɵtextInterpolate(page_r2678);
} }
function NzTableComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzTableComponent_ng_template_0_a_0_Template, 2, 0, "a", 12);
    ɵɵtemplate(1, NzTableComponent_ng_template_0_a_1_Template, 2, 0, "a", 12);
    ɵɵtemplate(2, NzTableComponent_ng_template_0_a_2_Template, 2, 1, "a", 6);
} if (rf & 2) {
    var type_r2677 = ctx.$implicit;
    ɵɵproperty("ngIf", type_r2677 === "pre");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", type_r2677 === "next");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", type_r2677 == "page");
} }
function NzTableComponent_ng_template_2_col_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "col");
} if (rf & 2) {
    var width_r2685 = ctx.$implicit;
    ɵɵstyleProp("width", width_r2685)("min-width", width_r2685);
} }
function NzTableComponent_ng_template_2_ng_container_2_col_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "col");
} if (rf & 2) {
    var th_r2687 = ctx.$implicit;
    ɵɵstyleProp("width", th_r2687.nzWidth)("min-width", th_r2687.nzWidth);
} }
function NzTableComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTableComponent_ng_template_2_ng_container_2_col_1_Template, 1, 2, "col", 16);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2684 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2684.listOfNzThComponent);
} }
function NzTableComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "colgroup");
    ɵɵtemplate(1, NzTableComponent_ng_template_2_col_1_Template, 1, 2, "col", 16);
    ɵɵtemplate(2, NzTableComponent_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2665 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2665.nzWidthConfig);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2665.nzWidthConfig && !ctx_r2665.nzWidthConfig.length || !ctx_r2665.nzWidthConfig);
} }
function NzTableComponent_ng_template_4_ng_template_0_Template(rf, ctx) { }
function NzTableComponent_ng_template_4_thead_1_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_template_4_thead_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "thead", 19);
    ɵɵtemplate(1, NzTableComponent_ng_template_4_thead_1_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2689 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2689.nzTheadComponent == null ? null : ctx_r2689.nzTheadComponent.templateRef);
} }
function NzTableComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzTableComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 17);
    ɵɵtemplate(1, NzTableComponent_ng_template_4_thead_1_Template, 2, 1, "thead", 18);
} if (rf & 2) {
    var ctx_r2667 = ɵɵnextContext();
    var _r2664 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", _r2664);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2667.nzScroll.y);
} }
function NzTableComponent_ng_template_6_div_0_ng_template_3_Template(rf, ctx) { }
function NzTableComponent_ng_template_6_div_0_thead_4_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_template_6_div_0_thead_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "thead", 19);
    ɵɵtemplate(1, NzTableComponent_ng_template_6_div_0_thead_4_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2699 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2699.nzTheadComponent == null ? null : ctx_r2699.nzTheadComponent.templateRef);
} }
function NzTableComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 25, 26);
    ɵɵelementStart(2, "table");
    ɵɵtemplate(3, NzTableComponent_ng_template_6_div_0_ng_template_3_Template, 0, 0, "ng-template", 17);
    ɵɵtemplate(4, NzTableComponent_ng_template_6_div_0_thead_4_Template, 2, 1, "thead", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2691 = ɵɵnextContext(2);
    var _r2664 = ɵɵreference(3);
    ɵɵproperty("ngStyle", ctx_r2691.headerBottomStyle);
    ɵɵadvance(2);
    ɵɵstyleProp("width", ctx_r2691.nzScroll.x);
    ɵɵclassProp("ant-table-fixed", ctx_r2691.nzScroll.x);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2664);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2691.nzScroll.y);
} }
function NzTableComponent_ng_template_6_div_1_ng_template_3_Template(rf, ctx) { }
function NzTableComponent_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 27, 28);
    ɵɵelementStart(2, "table");
    ɵɵtemplate(3, NzTableComponent_ng_template_6_div_1_ng_template_3_Template, 0, 0, "ng-template", 29);
    ɵɵprojection(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2692 = ɵɵnextContext(2);
    var _r2666 = ɵɵreference(5);
    ɵɵstyleProp("max-height", ctx_r2692.nzScroll.y)("overflow-y", ctx_r2692.nzScroll.y ? "scroll" : "")("overflow-x", ctx_r2692.nzScroll.x ? "auto" : "");
    ɵɵadvance(2);
    ɵɵstyleProp("width", ctx_r2692.nzScroll.x);
    ɵɵclassProp("ant-table-fixed", ctx_r2692.nzScroll.x);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2692.nzVirtualScroll)("ngTemplateOutlet", _r2666);
} }
function NzTableComponent_ng_template_6_ng_template_2_ng_template_2_Template(rf, ctx) { }
function NzTableComponent_ng_template_6_ng_template_2_ng_container_4_ng_template_1_Template(rf, ctx) { }
var _c4 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzTableComponent_ng_template_6_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTableComponent_ng_template_6_ng_template_2_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 32);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r2705 = ctx.$implicit;
    var i_r2706 = ctx.index;
    var ctx_r2704 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2704.nzVirtualScrollDirective == null ? null : ctx_r2704.nzVirtualScrollDirective.templateRef)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c4, item_r2705, i_r2706));
} }
function NzTableComponent_ng_template_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 30);
    ɵɵelementStart(1, "table");
    ɵɵtemplate(2, NzTableComponent_ng_template_6_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 29);
    ɵɵelementStart(3, "tbody");
    ɵɵtemplate(4, NzTableComponent_ng_template_6_ng_template_2_ng_container_4_Template, 2, 5, "ng-container", 31);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2694 = ɵɵnextContext(2);
    var _r2666 = ɵɵreference(5);
    ɵɵstyleProp("height", ctx_r2694.nzScroll.y);
    ɵɵproperty("hidden", !ctx_r2694.data.length)("itemSize", ctx_r2694.nzVirtualItemSize)("maxBufferPx", ctx_r2694.nzVirtualMaxBufferPx)("minBufferPx", ctx_r2694.nzVirtualMinBufferPx);
    ɵɵadvance(1);
    ɵɵstyleProp("width", ctx_r2694.nzScroll.x);
    ɵɵclassProp("ant-table-fixed", ctx_r2694.nzScroll.x);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2694.nzVirtualScroll)("ngTemplateOutlet", _r2666);
    ɵɵadvance(2);
    ɵɵproperty("cdkVirtualForOf", ctx_r2694.data)("cdkVirtualForTrackBy", ctx_r2694.nzVirtualForTrackBy);
} }
function NzTableComponent_ng_template_6_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 33);
    ɵɵelement(1, "nz-embed-empty", 34);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2695 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzComponentName", "table")("specificContent", ctx_r2695.nzNoResult);
} }
function NzTableComponent_ng_template_6_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2708 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2708.nzFooter);
} }
function NzTableComponent_ng_template_6_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtemplate(1, NzTableComponent_ng_template_6_div_5_ng_container_1_Template, 2, 1, "ng-container", 36);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2696 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2696.nzFooter);
} }
function NzTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzTableComponent_ng_template_6_div_0_Template, 5, 5, "div", 20);
    ɵɵtemplate(1, NzTableComponent_ng_template_6_div_1_Template, 5, 7, "div", 21);
    ɵɵtemplate(2, NzTableComponent_ng_template_6_ng_template_2_Template, 5, 11, "ng-template", null, 22, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, NzTableComponent_ng_template_6_div_4_Template, 2, 2, "div", 23);
    ɵɵtemplate(5, NzTableComponent_ng_template_6_div_5_Template, 2, 1, "div", 24);
} if (rf & 2) {
    var _r2693 = ɵɵreference(3);
    var ctx_r2669 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2669.nzScroll.y);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2669.nzVirtualScroll)("ngIfElse", _r2693);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2669.data.length === 0 && !ctx_r2669.nzLoading && !ctx_r2669.nzTemplateMode);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2669.nzFooter);
} }
function NzTableComponent_ng_template_8_nz_pagination_0_Template(rf, ctx) { if (rf & 1) {
    var _r2711 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-pagination", 38);
    ɵɵlistener("nzPageSizeChange", function NzTableComponent_ng_template_8_nz_pagination_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) { ɵɵrestoreView(_r2711); var ctx_r2710 = ɵɵnextContext(2); return ctx_r2710.emitPageSizeOrIndex($event, ctx_r2710.nzPageIndex); })("nzPageIndexChange", function NzTableComponent_ng_template_8_nz_pagination_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) { ɵɵrestoreView(_r2711); var ctx_r2712 = ɵɵnextContext(2); return ctx_r2712.emitPageSizeOrIndex(ctx_r2712.nzPageSize, $event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2709 = ɵɵnextContext(2);
    ɵɵproperty("nzInTable", true)("nzShowSizeChanger", ctx_r2709.nzShowSizeChanger)("nzPageSizeOptions", ctx_r2709.nzPageSizeOptions)("nzItemRender", ctx_r2709.itemRender)("nzShowQuickJumper", ctx_r2709.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r2709.nzHideOnSinglePage)("nzShowTotal", ctx_r2709.nzShowTotal)("nzSize", ctx_r2709.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r2709.nzPageSize)("nzTotal", ctx_r2709.nzTotal)("nzSimple", ctx_r2709.nzSimple)("nzPageIndex", ctx_r2709.nzPageIndex);
} }
function NzTableComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzTableComponent_ng_template_8_nz_pagination_0_Template, 1, 12, "nz-pagination", 37);
} if (rf & 2) {
    var ctx_r2671 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2671.nzShowPagination && ctx_r2671.data.length);
} }
function NzTableComponent_ng_container_11_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTableComponent_ng_container_11_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    var _r2670 = ɵɵreference(9);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2670);
} }
function NzTableComponent_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2714 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2714.nzTitle);
} }
function NzTableComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 39);
    ɵɵtemplate(1, NzTableComponent_div_14_ng_container_1_Template, 2, 1, "ng-container", 36);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2674 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2674.nzTitle);
} }
function NzTableComponent_ng_container_16_ng_template_2_Template(rf, ctx) { }
function NzTableComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 40);
    ɵɵtemplate(2, NzTableComponent_ng_container_16_ng_template_2_Template, 0, 0, "ng-template", 17);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    var _r2668 = ɵɵreference(7);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r2668);
} }
function NzTableComponent_ng_container_17_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTableComponent_ng_container_17_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    var _r2670 = ɵɵreference(9);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2670);
} }
var _c5 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'table';
var NzTableComponent = /** @class */ (function () {
    function NzTableComponent(nzConfigService, renderer, ngZone, cdr, i18n, platform, elementRef) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.i18n = i18n;
        this.platform = platform;
        /** public data for ngFor tr */
        this.data = [];
        this.locale = {}; // tslint:disable-line:no-any
        this.lastScrollLeft = 0;
        this.headerBottomStyle = {};
        this.destroy$ = new Subject();
        this.nzPageSizeOptions = [10, 20, 30, 40, 50];
        this.nzVirtualScroll = false;
        this.nzVirtualItemSize = 0;
        this.nzVirtualMaxBufferPx = 200;
        this.nzVirtualMinBufferPx = 100;
        this.nzLoadingDelay = 0;
        this.nzTotal = 0;
        this.nzWidthConfig = [];
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.nzData = [];
        this.nzPaginationPosition = 'bottom';
        this.nzScroll = { x: null, y: null };
        this.nzFrontPagination = true;
        this.nzTemplateMode = false;
        this.nzShowPagination = true;
        this.nzLoading = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzCurrentPageDataChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
    }
    Object.defineProperty(NzTableComponent.prototype, "itemRender", {
        get: function () {
            return this.nzItemRender || this.itemRenderChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "tableBodyNativeElement", {
        get: function () {
            return this.tableBodyElement && this.tableBodyElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "tableHeaderNativeElement", {
        get: function () {
            return this.tableHeaderElement && this.tableHeaderElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "cdkVirtualScrollNativeElement", {
        get: function () {
            return this.cdkVirtualScrollElement && this.cdkVirtualScrollElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "mixTableBodyNativeElement", {
        get: function () {
            return this.tableBodyNativeElement || this.cdkVirtualScrollNativeElement;
        },
        enumerable: true,
        configurable: true
    });
    NzTableComponent.prototype.emitPageSizeOrIndex = function (size, index) {
        if (this.nzPageSize !== size || this.nzPageIndex !== index) {
            if (this.nzPageSize !== size) {
                this.nzPageSize = size;
                this.nzPageSizeChange.emit(this.nzPageSize);
            }
            if (this.nzPageIndex !== index) {
                this.nzPageIndex = index;
                this.nzPageIndexChange.emit(this.nzPageIndex);
            }
            this.updateFrontPaginationDataIfNeeded(this.nzPageSize !== size);
        }
    };
    NzTableComponent.prototype.syncScrollTable = function (e) {
        if (e.currentTarget === e.target) {
            var target = e.target;
            if (target.scrollLeft !== this.lastScrollLeft && this.nzScroll && this.nzScroll.x) {
                if (target === this.mixTableBodyNativeElement && this.tableHeaderNativeElement) {
                    this.tableHeaderNativeElement.scrollLeft = target.scrollLeft;
                }
                else if (target === this.tableHeaderNativeElement && this.mixTableBodyNativeElement) {
                    this.mixTableBodyNativeElement.scrollLeft = target.scrollLeft;
                }
                this.setScrollPositionClassName();
            }
            this.lastScrollLeft = target.scrollLeft;
        }
    };
    NzTableComponent.prototype.setScrollPositionClassName = function () {
        if (this.mixTableBodyNativeElement && this.nzScroll && this.nzScroll.x) {
            if (this.mixTableBodyNativeElement.scrollWidth === this.mixTableBodyNativeElement.clientWidth &&
                this.mixTableBodyNativeElement.scrollWidth !== 0) {
                this.setScrollName();
            }
            else if (this.mixTableBodyNativeElement.scrollLeft === 0) {
                this.setScrollName('left');
            }
            else if (this.mixTableBodyNativeElement.scrollWidth ===
                this.mixTableBodyNativeElement.scrollLeft + this.mixTableBodyNativeElement.clientWidth) {
                this.setScrollName('right');
            }
            else {
                this.setScrollName('middle');
            }
        }
    };
    NzTableComponent.prototype.setScrollName = function (position) {
        var _this = this;
        var prefix = 'ant-table-scroll-position';
        var classList = ['left', 'right', 'middle'];
        classList.forEach(function (name) {
            _this.renderer.removeClass(_this.tableMainElement.nativeElement, prefix + "-" + name);
        });
        if (position) {
            this.renderer.addClass(this.tableMainElement.nativeElement, prefix + "-" + position);
        }
    };
    NzTableComponent.prototype.fitScrollBar = function () {
        if (this.nzScroll.y) {
            var scrollbarWidth = measureScrollbar('vertical');
            var scrollbarWidthOfHeader = measureScrollbar('horizontal', 'ant-table');
            // Add negative margin bottom for scroll bar overflow bug
            if (scrollbarWidthOfHeader > 0) {
                this.headerBottomStyle = {
                    marginBottom: "-" + scrollbarWidthOfHeader + "px",
                    paddingBottom: '0px',
                    overflowX: 'scroll',
                    overflowY: "" + (scrollbarWidth === 0 ? 'hidden' : 'scroll')
                };
                this.cdr.markForCheck();
            }
        }
    };
    NzTableComponent.prototype.updateFrontPaginationDataIfNeeded = function (isPageSizeOrDataChange) {
        var _this = this;
        if (isPageSizeOrDataChange === void 0) { isPageSizeOrDataChange = false; }
        var data = this.nzData || [];
        if (this.nzFrontPagination) {
            this.nzTotal = data.length;
            if (isPageSizeOrDataChange) {
                var maxPageIndex = Math.ceil(data.length / this.nzPageSize) || 1;
                var pageIndex_1 = this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex;
                if (pageIndex_1 !== this.nzPageIndex) {
                    this.nzPageIndex = pageIndex_1;
                    Promise.resolve().then(function () { return _this.nzPageIndexChange.emit(pageIndex_1); });
                }
            }
            data = data.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
        }
        this.data = __spread(data);
        this.nzCurrentPageDataChange.emit(this.data);
    };
    NzTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Table');
            _this.cdr.markForCheck();
        });
    };
    NzTableComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.nzScroll) {
            if (changes.nzScroll.currentValue) {
                this.nzScroll = changes.nzScroll.currentValue;
            }
            else {
                this.nzScroll = { x: null, y: null };
            }
            this.fitScrollBar();
            this.setScrollPositionClassName();
        }
        if (changes.nzData) {
            if (this.platform.isBrowser) {
                setTimeout(function () { return _this.setScrollPositionClassName(); });
            }
        }
        if (changes.nzPageIndex || changes.nzPageSize || changes.nzFrontPagination || changes.nzData) {
            this.updateFrontPaginationDataIfNeeded(!!(changes.nzPageSize || changes.nzData));
        }
    };
    NzTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        setTimeout(function () { return _this.setScrollPositionClassName(); });
        this.ngZone.runOutsideAngular(function () {
            merge(_this.tableHeaderNativeElement ? fromEvent(_this.tableHeaderNativeElement, 'scroll') : EMPTY, _this.mixTableBodyNativeElement ? fromEvent(_this.mixTableBodyNativeElement, 'scroll') : EMPTY)
                .pipe(takeUntil(_this.destroy$))
                .subscribe(function (data) {
                _this.syncScrollTable(data);
            });
            fromEvent(window, 'resize')
                .pipe(startWith(true), takeUntil(_this.destroy$))
                .subscribe(function () {
                _this.fitScrollBar();
                _this.setScrollPositionClassName();
            });
        });
    };
    NzTableComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.listOfNzThComponent.changes
            .pipe(startWith(true), flatMap(function () { return merge.apply(void 0, __spread([_this.listOfNzThComponent.changes], _this.listOfNzThComponent.map(function (th) { return th.nzWidthChange$; }))); }), takeUntil(this.destroy$))
            .subscribe(function () {
            _this.cdr.markForCheck();
        });
    };
    NzTableComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzTableComponent.ɵfac = function NzTableComponent_Factory(t) { return new (t || NzTableComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ElementRef)); };
    /** @nocollapse */ NzTableComponent.ɵcmp = ɵɵdefineComponent({ type: NzTableComponent, selectors: [["nz-table"]], contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzVirtualScrollDirective, true);
            ɵɵcontentQuery(dirIndex, NzThComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzVirtualScrollDirective = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzThComponent = _t);
        } }, viewQuery: function NzTableComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0$1, true, ElementRef);
            ɵɵviewQuery(_c1$1, true, ElementRef);
            ɵɵviewQuery(_c2, true, ElementRef);
            ɵɵviewQuery(CdkVirtualScrollViewport, true, ElementRef);
            ɵɵviewQuery(CdkVirtualScrollViewport, true, CdkVirtualScrollViewport);
            ɵɵstaticViewQuery(_c3, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableHeaderElement = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableBodyElement = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableMainElement = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkVirtualScrollElement = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemRenderChild = _t.first);
        } }, hostBindings: function NzTableComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-table-empty", ctx.data.length === 0 && !ctx.nzTemplateMode);
        } }, inputs: { nzSize: "nzSize", nzShowTotal: "nzShowTotal", nzPageSizeOptions: "nzPageSizeOptions", nzVirtualScroll: "nzVirtualScroll", nzVirtualItemSize: "nzVirtualItemSize", nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx", nzVirtualMinBufferPx: "nzVirtualMinBufferPx", nzVirtualForTrackBy: "nzVirtualForTrackBy", nzLoadingDelay: "nzLoadingDelay", nzLoadingIndicator: "nzLoadingIndicator", nzTotal: "nzTotal", nzTitle: "nzTitle", nzFooter: "nzFooter", nzNoResult: "nzNoResult", nzWidthConfig: "nzWidthConfig", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize", nzData: "nzData", nzPaginationPosition: "nzPaginationPosition", nzScroll: "nzScroll", nzItemRender: "nzItemRender", nzFrontPagination: "nzFrontPagination", nzTemplateMode: "nzTemplateMode", nzBordered: "nzBordered", nzShowPagination: "nzShowPagination", nzLoading: "nzLoading", nzShowSizeChanger: "nzShowSizeChanger", nzHideOnSinglePage: "nzHideOnSinglePage", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange", nzCurrentPageDataChange: "nzCurrentPageDataChange" }, exportAs: ["nzTable"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c5, decls: 18, vars: 13, consts: [["renderItemTemplate", ""], ["colGroupTemplate", ""], ["headerTemplate", ""], ["tableInnerTemplate", ""], ["paginationTemplate", ""], [3, "nzDelay", "nzSpinning", "nzIndicator"], [4, "ngIf"], [1, "ant-table"], ["tableMainElement", ""], ["class", "ant-table-title", 4, "ngIf"], [1, "ant-table-content"], [4, "ngIf", "ngIfElse"], ["class", "ant-pagination-item-link", 4, "ngIf"], [1, "ant-pagination-item-link"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "right"], [3, "width", "minWidth", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-table-thead", 4, "ngIf"], [1, "ant-table-thead"], ["class", "ant-table-header ant-table-hide-scrollbar", 3, "ngStyle", 4, "ngIf"], ["class", "ant-table-body", 3, "maxHeight", "overflow-y", "overflow-x", 4, "ngIf", "ngIfElse"], ["scrollViewTpl", ""], ["class", "ant-table-placeholder", 4, "ngIf"], ["class", "ant-table-footer", 4, "ngIf"], [1, "ant-table-header", "ant-table-hide-scrollbar", 3, "ngStyle"], ["tableHeaderElement", ""], [1, "ant-table-body"], ["tableBodyElement", ""], [3, "ngIf", "ngTemplateOutlet"], [1, "ant-table-body", 3, "hidden", "itemSize", "maxBufferPx", "minBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-table-placeholder"], [3, "nzComponentName", "specificContent"], [1, "ant-table-footer"], [4, "nzStringTemplateOutlet"], [3, "nzInTable", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange", 4, "ngIf"], [3, "nzInTable", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange"], [1, "ant-table-title"], [1, "ant-table-scroll"]], template: function NzTableComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzTableComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
            ɵɵtemplate(2, NzTableComponent_ng_template_2_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(4, NzTableComponent_ng_template_4_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵtemplate(6, NzTableComponent_ng_template_6_Template, 6, 5, "ng-template", null, 3, ɵɵtemplateRefExtractor);
            ɵɵtemplate(8, NzTableComponent_ng_template_8_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
            ɵɵelementStart(10, "nz-spin", 5);
            ɵɵtemplate(11, NzTableComponent_ng_container_11_Template, 2, 1, "ng-container", 6);
            ɵɵelementStart(12, "div", 7, 8);
            ɵɵtemplate(14, NzTableComponent_div_14_Template, 2, 1, "div", 9);
            ɵɵelementStart(15, "div", 10);
            ɵɵtemplate(16, NzTableComponent_ng_container_16_Template, 3, 1, "ng-container", 11);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(17, NzTableComponent_ng_container_17_Template, 2, 1, "ng-container", 6);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r2668 = ɵɵreference(7);
            ɵɵadvance(10);
            ɵɵproperty("nzDelay", ctx.nzLoadingDelay)("nzSpinning", ctx.nzLoading)("nzIndicator", ctx.nzLoadingIndicator);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "top");
            ɵɵadvance(1);
            ɵɵclassProp("ant-table-fixed-header", ctx.nzScroll.x || ctx.nzScroll.y)("ant-table-bordered", ctx.nzBordered)("ant-table-default", ctx.nzSize === "default")("ant-table-middle", ctx.nzSize === "middle")("ant-table-small", ctx.nzSize === "small");
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.nzTitle);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.nzScroll.x || ctx.nzScroll.y)("ngIfElse", _r2668);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "bottom");
        } }, styles: ["\n      nz-table {\n        display: block;\n      }\n\n      cdk-virtual-scroll-viewport.ant-table-body {\n        overflow-y: scroll;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", String)
    ], NzTableComponent.prototype, "nzSize", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualScroll", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualItemSize", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualMaxBufferPx", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualMinBufferPx", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzFrontPagination", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzTemplateMode", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzBordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzShowPagination", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzLoading", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzSimple", void 0);
    return NzTableComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTableComponent, [{
        type: Component,
        args: [{
                selector: 'nz-table',
                exportAs: 'nzTable',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-table.component.html',
                host: {
                    '[class.ant-table-empty]': 'data.length === 0 && !nzTemplateMode'
                },
                styles: [
                    "\n      nz-table {\n        display: block;\n      }\n\n      cdk-virtual-scroll-viewport.ant-table-body {\n        overflow-y: scroll;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: NzConfigService }, { type: Renderer2 }, { type: NgZone }, { type: ChangeDetectorRef }, { type: NzI18nService }, { type: Platform }, { type: ElementRef }]; }, { listOfNzThComponent: [{
            type: ContentChildren,
            args: [NzThComponent, { descendants: true }]
        }], tableHeaderElement: [{
            type: ViewChild,
            args: ['tableHeaderElement', { static: false, read: ElementRef }]
        }], tableBodyElement: [{
            type: ViewChild,
            args: ['tableBodyElement', { static: false, read: ElementRef }]
        }], tableMainElement: [{
            type: ViewChild,
            args: ['tableMainElement', { static: false, read: ElementRef }]
        }], cdkVirtualScrollElement: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport, { static: false, read: ElementRef }]
        }], cdkVirtualScrollViewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport, { static: false, read: CdkVirtualScrollViewport }]
        }], nzVirtualScrollDirective: [{
            type: ContentChild,
            args: [NzVirtualScrollDirective, { static: false }]
        }], nzSize: [{
            type: Input
        }], nzShowTotal: [{
            type: Input
        }], nzPageSizeOptions: [{
            type: Input
        }], nzVirtualScroll: [{
            type: Input
        }], nzVirtualItemSize: [{
            type: Input
        }], nzVirtualMaxBufferPx: [{
            type: Input
        }], nzVirtualMinBufferPx: [{
            type: Input
        }], nzVirtualForTrackBy: [{
            type: Input
        }], nzLoadingDelay: [{
            type: Input
        }], nzLoadingIndicator: [{
            type: Input
        }], nzTotal: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzNoResult: [{
            type: Input
        }], nzWidthConfig: [{
            type: Input
        }], nzPageIndex: [{
            type: Input
        }], nzPageSize: [{
            type: Input
        }], nzData: [{
            type: Input
        }], nzPaginationPosition: [{
            type: Input
        }], nzScroll: [{
            type: Input
        }], nzItemRender: [{
            type: Input
        }], itemRenderChild: [{
            type: ViewChild,
            args: ['renderItemTemplate', { static: true }]
        }], nzFrontPagination: [{
            type: Input
        }], nzTemplateMode: [{
            type: Input
        }], nzBordered: [{
            type: Input
        }], nzShowPagination: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzShowSizeChanger: [{
            type: Input
        }], nzHideOnSinglePage: [{
            type: Input
        }], nzShowQuickJumper: [{
            type: Input
        }], nzSimple: [{
            type: Input
        }], nzPageSizeChange: [{
            type: Output
        }], nzPageIndexChange: [{
            type: Output
        }], nzCurrentPageDataChange: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzTbodyDirective = /** @class */ (function () {
    function NzTbodyDirective(nzTableComponent) {
        this.nzTableComponent = nzTableComponent;
    }
    /** @nocollapse */ NzTbodyDirective.ɵfac = function NzTbodyDirective_Factory(t) { return new (t || NzTbodyDirective)(ɵɵdirectiveInject(NzTableComponent, 9)); };
    /** @nocollapse */ NzTbodyDirective.ɵdir = ɵɵdefineDirective({ type: NzTbodyDirective, selectors: [["tbody"]], hostBindings: function NzTbodyDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-table-tbody", ctx.nzTableComponent);
        } } });
    return NzTbodyDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTbodyDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'tbody',
                host: {
                    '[class.ant-table-tbody]': 'nzTableComponent'
                }
            }]
    }], function () { return [{ type: NzTableComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();

function NzTdComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 4);
} if (rf & 2) {
    var ctx_r2717 = ɵɵnextContext();
    ɵɵstyleProp("padding-left", ctx_r2717.nzIndentSize, "px");
} }
function NzTdComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    var _r2722 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 5);
    ɵɵlistener("ngModelChange", function NzTdComponent_label_1_Template_label_ngModelChange_0_listener($event) { ɵɵrestoreView(_r2722); var ctx_r2721 = ɵɵnextContext(); return ctx_r2721.nzChecked = $event; })("ngModelChange", function NzTdComponent_label_1_Template_label_ngModelChange_0_listener($event) { ɵɵrestoreView(_r2722); var ctx_r2723 = ɵɵnextContext(); return ctx_r2723.nzCheckedChange.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2718 = ɵɵnextContext();
    ɵɵproperty("nzDisabled", ctx_r2718.nzDisabled)("ngModel", ctx_r2718.nzChecked)("nzIndeterminate", ctx_r2718.nzIndeterminate);
} }
function NzTdComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 6);
} }
function NzTdComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    var _r2725 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 7);
    ɵɵlistener("click", function NzTdComponent_span_3_Template_span_click_0_listener($event) { ɵɵrestoreView(_r2725); var ctx_r2724 = ɵɵnextContext(); return ctx_r2724.expandChange($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2720 = ɵɵnextContext();
    ɵɵclassProp("ant-table-row-expanded", ctx_r2720.nzExpand)("ant-table-row-collapsed", !ctx_r2720.nzExpand);
} }
var _c0$2 = ["*"];
var NzTdComponent = /** @class */ (function () {
    function NzTdComponent(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzExpand = false;
        this.nzShowExpand = false;
        this.nzShowCheckbox = false;
        this.nzBreakWord = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
    }
    NzTdComponent.prototype.expandChange = function (e) {
        e.stopPropagation();
        this.nzExpand = !this.nzExpand;
        this.nzExpandChange.emit(this.nzExpand);
    };
    NzTdComponent.prototype.setClassMap = function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["ant-table-row-expand-icon-cell"] = this.nzShowExpand && !isNotNil(this.nzIndentSize),
            _a["ant-table-selection-column"] = this.nzShowCheckbox,
            _a["ant-table-td-left-sticky"] = isNotNil(this.nzLeft),
            _a["ant-table-td-right-sticky"] = isNotNil(this.nzRight),
            _a));
    };
    NzTdComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzIndentSize || changes.nzShowExpand || changes.nzShowCheckbox || changes.nzRight || changes.nzLeft) {
            this.setClassMap();
        }
    };
    /** @nocollapse */ NzTdComponent.ɵfac = function NzTdComponent_Factory(t) { return new (t || NzTdComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzUpdateHostClassService)); };
    /** @nocollapse */ NzTdComponent.ɵcmp = ɵɵdefineComponent({ type: NzTdComponent, selectors: [["td", 9, "nz-disable-td", 3, "mat-cell", ""]], hostBindings: function NzTdComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(4);
        } if (rf & 2) {
            ɵɵstyleProp("left", ctx.nzLeft)("right", ctx.nzRight)("text-align", ctx.nzAlign)("word-break", ctx.nzBreakWord ? "break-all" : "");
        } }, inputs: { nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzLeft: "nzLeft", nzRight: "nzRight", nzAlign: "nzAlign", nzIndentSize: "nzIndentSize", nzExpand: "nzExpand", nzShowExpand: "nzShowExpand", nzShowCheckbox: "nzShowCheckbox", nzBreakWord: "nzBreakWord" }, outputs: { nzCheckedChange: "nzCheckedChange", nzExpandChange: "nzExpandChange" }, features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()], ngContentSelectors: _c0$2, decls: 5, vars: 4, consts: [["class", "ant-table-row-indent", 3, "padding-left", 4, "ngIf"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange", 4, "ngIf"], ["class", "ant-table-row-expand-icon ant-table-row-spaced", 4, "ngIf"], ["class", "ant-table-row-expand-icon", 3, "ant-table-row-expanded", "ant-table-row-collapsed", "click", 4, "ngIf"], [1, "ant-table-row-indent"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange"], [1, "ant-table-row-expand-icon", "ant-table-row-spaced"], [1, "ant-table-row-expand-icon", 3, "click"]], template: function NzTdComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzTdComponent_span_0_Template, 1, 1, "span", 0);
            ɵɵtemplate(1, NzTdComponent_label_1_Template, 1, 3, "label", 1);
            ɵɵtemplate(2, NzTdComponent_span_2_Template, 1, 0, "span", 2);
            ɵɵtemplate(3, NzTdComponent_span_3_Template, 1, 2, "span", 3);
            ɵɵprojection(4);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.nzIndentSize >= 0);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzShowCheckbox);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.nzShowExpand && ctx.nzIndentSize >= 0);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzShowExpand);
        } }, directives: [NgIf, NzCheckboxComponent, NgControlStatus, NgModel], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzExpand", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzShowExpand", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzShowCheckbox", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzBreakWord", void 0);
    return NzTdComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTdComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'td:not(.nz-disable-td):not([mat-cell])',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-td.component.html',
                host: {
                    '[style.left]': 'nzLeft',
                    '[style.right]': 'nzRight',
                    '[style.text-align]': 'nzAlign',
                    '[style.word-break]': "nzBreakWord ? 'break-all' : ''"
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: NzUpdateHostClassService }]; }, { nzChecked: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzIndeterminate: [{
            type: Input
        }], nzLeft: [{
            type: Input
        }], nzRight: [{
            type: Input
        }], nzAlign: [{
            type: Input
        }], nzIndentSize: [{
            type: Input
        }], nzExpand: [{
            type: Input
        }], nzShowExpand: [{
            type: Input
        }], nzShowCheckbox: [{
            type: Input
        }], nzBreakWord: [{
            type: Input
        }], nzCheckedChange: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }] }); })();

var _c0$3 = ["contentTemplate"];
function NzTheadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
function NzTheadComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzTheadComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTheadComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    var _r2658 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2658);
} }
var _c1$2 = ["*"];
var NzTheadComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzTheadComponent(nzTableComponent, elementRef, renderer) {
        this.nzTableComponent = nzTableComponent;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.destroy$ = new Subject();
        this.nzSingleSort = false;
        this.nzSortChange = new EventEmitter();
        if (this.nzTableComponent) {
            this.nzTableComponent.nzTheadComponent = this;
        }
    }
    NzTheadComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.listOfNzThComponent.changes
            .pipe(startWith(true), switchMap(function () { return merge.apply(void 0, __spread(_this.listOfNzThComponent.map(function (th) { return th.nzSortChangeWithKey; }))); }), takeUntil(this.destroy$))
            .subscribe(function (data) {
            _this.nzSortChange.emit(data);
            if (_this.nzSingleSort) {
                _this.listOfNzThComponent.forEach(function (th) {
                    th.nzSort = th.nzSortKey === data.key ? th.nzSort : null;
                    th.marForCheck();
                });
            }
        });
    };
    NzTheadComponent.prototype.ngAfterViewInit = function () {
        if (this.nzTableComponent) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    };
    NzTheadComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzTheadComponent.ɵfac = function NzTheadComponent_Factory(t) { return new (t || NzTheadComponent)(ɵɵdirectiveInject(NzTableComponent, 9), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzTheadComponent.ɵcmp = ɵɵdefineComponent({ type: NzTheadComponent, selectors: [["thead", 9, "ant-table-thead"]], contentQueries: function NzTheadComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzThComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzThComponent = _t);
        } }, viewQuery: function NzTheadComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0$3, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
        } }, inputs: { nzSingleSort: "nzSingleSort" }, outputs: { nzSortChange: "nzSortChange" }, ngContentSelectors: _c1$2, decls: 3, vars: 1, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTheadComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzTheadComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
            ɵɵtemplate(2, NzTheadComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("ngIf", !ctx.nzTableComponent);
        } }, directives: [NgIf, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTheadComponent.prototype, "nzSingleSort", void 0);
    return NzTheadComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTheadComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'thead:not(.ant-table-thead)',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-thead.component.html'
            }]
    }], function () { return [{ type: NzTableComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: ElementRef }, { type: Renderer2 }]; }, { templateRef: [{
            type: ViewChild,
            args: ['contentTemplate', { static: true }]
        }], listOfNzThComponent: [{
            type: ContentChildren,
            args: [NzThComponent, { descendants: true }]
        }], nzSingleSort: [{
            type: Input
        }], nzSortChange: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzTrDirective = /** @class */ (function () {
    function NzTrDirective(elementRef, renderer, nzTableComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzTableComponent = nzTableComponent;
    }
    Object.defineProperty(NzTrDirective.prototype, "nzExpand", {
        set: function (value) {
            if (toBoolean(value)) {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
            }
            else {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ NzTrDirective.ɵfac = function NzTrDirective_Factory(t) { return new (t || NzTrDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzTableComponent, 9)); };
    /** @nocollapse */ NzTrDirective.ɵdir = ɵɵdefineDirective({ type: NzTrDirective, selectors: [["tr", 3, "mat-row", "", 3, "mat-header-row", ""]], hostBindings: function NzTrDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-table-row", ctx.nzTableComponent);
        } }, inputs: { nzExpand: "nzExpand" } });
    return NzTrDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTrDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'tr:not([mat-row]):not([mat-header-row])',
                host: {
                    '[class.ant-table-row]': 'nzTableComponent'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: NzTableComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzExpand: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzTableModule = /** @class */ (function () {
    function NzTableModule() {
    }
    /** @nocollapse */ NzTableModule.ɵmod = ɵɵdefineNgModule({ type: NzTableModule });
    /** @nocollapse */ NzTableModule.ɵinj = ɵɵdefineInjector({ factory: function NzTableModule_Factory(t) { return new (t || NzTableModule)(); }, imports: [[
                NzMenuModule,
                FormsModule,
                NzAddOnModule,
                NzRadioModule,
                NzCheckboxModule,
                NzDropDownModule,
                CommonModule,
                PlatformModule,
                NzPaginationModule,
                NzSpinModule,
                NzI18nModule,
                NzIconModule,
                NzEmptyModule,
                ScrollingModule
            ]] });
    return NzTableModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzTableModule, { declarations: [NzTableComponent,
        NzThComponent,
        NzTdComponent,
        NzTheadComponent,
        NzTbodyDirective,
        NzTrDirective,
        NzVirtualScrollDirective], imports: [NzMenuModule,
        FormsModule,
        NzAddOnModule,
        NzRadioModule,
        NzCheckboxModule,
        NzDropDownModule,
        CommonModule,
        PlatformModule,
        NzPaginationModule,
        NzSpinModule,
        NzI18nModule,
        NzIconModule,
        NzEmptyModule,
        ScrollingModule], exports: [NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective, NzVirtualScrollDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTableModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzTableComponent,
                    NzThComponent,
                    NzTdComponent,
                    NzTheadComponent,
                    NzTbodyDirective,
                    NzTrDirective,
                    NzVirtualScrollDirective
                ],
                exports: [NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective, NzVirtualScrollDirective],
                imports: [
                    NzMenuModule,
                    FormsModule,
                    NzAddOnModule,
                    NzRadioModule,
                    NzCheckboxModule,
                    NzDropDownModule,
                    CommonModule,
                    PlatformModule,
                    NzPaginationModule,
                    NzSpinModule,
                    NzI18nModule,
                    NzIconModule,
                    NzEmptyModule,
                    ScrollingModule
                ]
            }]
    }], null, null); })();
ɵɵsetComponentScope(NzTableComponent, [NzTableComponent,
    NzThComponent,
    NzTdComponent,
    NzTheadComponent,
    NzTbodyDirective,
    NzTrDirective,
    NzVirtualScrollDirective, NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, NzStringTemplateOutletDirective, NzClassListAddDirective, NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent, NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, NzPaginationComponent, NzSpinComponent, NzIconDirective, NzEmptyComponent, NzEmbedEmptyComponent, Dir, CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, NzI18nPipe]);

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

export { NzTableComponent, NzTableModule, NzTbodyDirective, NzTdComponent, NzThComponent, NzTheadComponent, NzTrDirective, NzVirtualScrollDirective };
//# sourceMappingURL=ng-zorro-antd-table.js.map
