import { __decorate, __metadata } from 'tslib';
import { ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵtext, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵproperty, ɵɵgetCurrentView, ɵɵelementContainerStart, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵelementContainerEnd, ɵɵclassProp, ɵɵattribute, ɵɵpureFunction0, ɵɵtextInterpolate1, ɵɵpureFunction2, ɵɵpureFunction1, ɵɵtemplateRefExtractor, EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, Output, Input, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toNumber, isInteger, InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NgIf, NgTemplateOutlet, NgForOf, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectComponent, NzOptionComponent, NzSelectModule } from 'ng-zorro-antd/select';
import { NgControlStatus, NgModel, FormsModule } from '@angular/forms';

const _c0 = ["renderItemTemplate"];
function NzPaginationComponent_ng_template_0_a_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 3);
    ɵɵelement(1, "i", 4);
    ɵɵelementEnd();
} }
function NzPaginationComponent_ng_template_0_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 3);
    ɵɵelement(1, "i", 5);
    ɵɵelementEnd();
} }
function NzPaginationComponent_ng_template_0_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const page_r2080 = ɵɵnextContext().page;
    ɵɵadvance(1);
    ɵɵtextInterpolate(page_r2080);
} }
function NzPaginationComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzPaginationComponent_ng_template_0_a_0_Template, 2, 0, "a", 2);
    ɵɵtemplate(1, NzPaginationComponent_ng_template_0_a_1_Template, 2, 0, "a", 2);
    ɵɵtemplate(2, NzPaginationComponent_ng_template_0_a_2_Template, 2, 1, "a", 1);
} if (rf & 2) {
    const type_r2079 = ctx.$implicit;
    ɵɵproperty("ngIf", type_r2079 === "pre");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", type_r2079 === "next");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", type_r2079 == "page");
} }
function NzPaginationComponent_ng_container_2_ng_container_2_ng_template_2_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_container_2_ng_template_10_Template(rf, ctx) { }
const _c1 = function () { return { $implicit: "pre" }; };
const _c2 = function () { return { $implicit: "next" }; };
function NzPaginationComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r2092 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 9);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_container_2_Template_li_click_1_listener($event) { ɵɵrestoreView(_r2092); const ctx_r2091 = ɵɵnextContext(2); return ctx_r2091.jumpDiff(0 - 1); });
    ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_container_2_ng_template_2_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
    ɵɵelementStart(3, "li", 11);
    ɵɵelementStart(4, "input", 12, 13);
    ɵɵlistener("keydown.enter", function NzPaginationComponent_ng_container_2_ng_container_2_Template_input_keydown_enter_4_listener($event) { ɵɵrestoreView(_r2092); const _r2089 = ɵɵreference(5); const ctx_r2093 = ɵɵnextContext(2); return ctx_r2093.handleKeyDown($event, _r2089, false); });
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 14);
    ɵɵtext(7, "/");
    ɵɵelementEnd();
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "li", 15);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_container_2_Template_li_click_9_listener($event) { ɵɵrestoreView(_r2092); const ctx_r2094 = ɵɵnextContext(2); return ctx_r2094.jumpDiff(1); });
    ɵɵtemplate(10, NzPaginationComponent_ng_container_2_ng_container_2_ng_template_10_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2085 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassProp("ant-pagination-disabled", ctx_r2085.isFirstIndex);
    ɵɵattribute("title", ctx_r2085.locale.prev_page);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2085.itemRender)("ngTemplateOutletContext", ɵɵpureFunction0(12, _c1));
    ɵɵadvance(1);
    ɵɵattribute("title", ctx_r2085.nzPageIndex + "/" + ctx_r2085.lastIndex);
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r2085.nzDisabled)("value", ctx_r2085.nzPageIndex);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r2085.lastIndex, " ");
    ɵɵadvance(1);
    ɵɵclassProp("ant-pagination-disabled", ctx_r2085.isLastIndex);
    ɵɵattribute("title", ctx_r2085.locale.next_page);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2085.itemRender)("ngTemplateOutletContext", ɵɵpureFunction0(13, _c2));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_0_ng_template_1_Template(rf, ctx) { }
const _c3 = function (a0, a1) { return { $implicit: a0, range: a1 }; };
function NzPaginationComponent_ng_container_2_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 24);
    ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_0_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2095 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2095.nzShowTotal)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c3, ctx_r2095.nzTotal, ctx_r2095.ranges));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_2_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_4_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r2106 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 25);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template_li_click_0_listener($event) { ɵɵrestoreView(_r2106); const ctx_r2105 = ɵɵnextContext(3); return ctx_r2105.jumpDiff(0 - 5); });
    ɵɵelementStart(1, "a", 3);
    ɵɵelementStart(2, "div", 26);
    ɵɵelement(3, "i", 27);
    ɵɵelementStart(4, "span", 28);
    ɵɵtext(5, "\u2022\u2022\u2022");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2098 = ɵɵnextContext(3);
    ɵɵattribute("title", ctx_r2098.locale.prev_5);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_6_ng_template_1_Template(rf, ctx) { }
const _c4 = function (a1) { return { $implicit: "page", page: a1 }; };
function NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r2110 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 17);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template_li_click_0_listener($event) { ɵɵrestoreView(_r2110); const page_r2107 = ctx.$implicit; const ctx_r2109 = ɵɵnextContext(3); return ctx_r2109.jumpPage(page_r2107); });
    ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_6_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const page_r2107 = ctx.$implicit;
    const ctx_r2099 = ɵɵnextContext(3);
    ɵɵclassProp("ant-pagination-item-active", ctx_r2099.nzPageIndex === page_r2107);
    ɵɵattribute("title", page_r2107);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2099.itemRender)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c4, page_r2107));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r2112 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 29);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template_li_click_0_listener($event) { ɵɵrestoreView(_r2112); const ctx_r2111 = ɵɵnextContext(3); return ctx_r2111.jumpDiff(5); });
    ɵɵelementStart(1, "a", 3);
    ɵɵelementStart(2, "div", 26);
    ɵɵelement(3, "i", 30);
    ɵɵelementStart(4, "span", 28);
    ɵɵtext(5, "\u2022\u2022\u2022");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2100 = ɵɵnextContext(3);
    ɵɵattribute("title", ctx_r2100.locale.next_5);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_8_ng_template_1_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r2115 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 17);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template_li_click_0_listener($event) { ɵɵrestoreView(_r2115); const ctx_r2114 = ɵɵnextContext(3); return ctx_r2114.jumpPage(ctx_r2114.lastIndex); });
    ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_8_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2101 = ɵɵnextContext(3);
    ɵɵclassProp("ant-pagination-item-active", ctx_r2101.isLastIndex);
    ɵɵattribute("title", ctx_r2101.lastIndex);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2101.itemRender)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c4, ctx_r2101.lastIndex));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_10_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-option", 37);
} if (rf & 2) {
    const option_r2120 = ctx.$implicit;
    const ctx_r2118 = ɵɵnextContext(5);
    ɵɵproperty("nzLabel", option_r2120 + " " + ctx_r2118.locale.items_per_page)("nzValue", option_r2120);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-option", 37);
} if (rf & 2) {
    const ctx_r2119 = ɵɵnextContext(5);
    ɵɵproperty("nzLabel", ctx_r2119.nzPageSize + " " + ctx_r2119.locale.items_per_page)("nzValue", ctx_r2119.nzPageSize);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template(rf, ctx) { if (rf & 1) {
    const _r2122 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select", 34);
    ɵɵlistener("ngModelChange", function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template_nz_select_ngModelChange_0_listener($event) { ɵɵrestoreView(_r2122); const ctx_r2121 = ɵɵnextContext(4); return ctx_r2121.onPageSizeChange($event); });
    ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_1_Template, 1, 2, "nz-option", 35);
    ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_2_Template, 1, 2, "nz-option", 36);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2116 = ɵɵnextContext(4);
    ɵɵproperty("nzDisabled", ctx_r2116.nzDisabled)("nzSize", ctx_r2116.nzSize)("ngModel", ctx_r2116.nzPageSize);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2116.nzPageSizeOptions);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2116.showAddOption);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2125 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 38);
    ɵɵtext(1);
    ɵɵelementStart(2, "input", 39, 40);
    ɵɵlistener("keydown.enter", function NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template_input_keydown_enter_2_listener($event) { ɵɵrestoreView(_r2125); const _r2123 = ɵɵreference(3); const ctx_r2124 = ɵɵnextContext(4); return ctx_r2124.handleKeyDown($event, _r2123, true); });
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2117 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r2117.locale.jump_to, " ");
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r2117.nzDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2117.locale.page, " ");
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template, 3, 5, "nz-select", 32);
    ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template, 5, 3, "div", 33);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2103 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2103.nzShowSizeChanger);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2103.nzShowQuickJumper);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r2127 = ɵɵgetCurrentView();
    ɵɵtemplate(0, NzPaginationComponent_ng_container_2_ng_template_3_li_0_Template, 2, 5, "li", 16);
    ɵɵelementStart(1, "li", 9);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_1_listener($event) { ɵɵrestoreView(_r2127); const ctx_r2126 = ɵɵnextContext(2); return ctx_r2126.jumpDiff(0 - 1); });
    ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_2_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
    ɵɵelementStart(3, "li", 17);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_3_listener($event) { ɵɵrestoreView(_r2127); const ctx_r2128 = ɵɵnextContext(2); return ctx_r2128.jumpPage(ctx_r2128.firstIndex); });
    ɵɵtemplate(4, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_4_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
    ɵɵtemplate(5, NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template, 6, 1, "li", 18);
    ɵɵtemplate(6, NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template, 2, 6, "li", 19);
    ɵɵtemplate(7, NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template, 6, 1, "li", 20);
    ɵɵtemplate(8, NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template, 2, 6, "li", 21);
    ɵɵelementStart(9, "li", 22);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_9_listener($event) { ɵɵrestoreView(_r2127); const ctx_r2129 = ɵɵnextContext(2); return ctx_r2129.jumpDiff(1); });
    ɵɵtemplate(10, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_10_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
    ɵɵtemplate(11, NzPaginationComponent_ng_container_2_ng_template_3_div_11_Template, 3, 2, "div", 23);
} if (rf & 2) {
    const ctx_r2087 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r2087.nzShowTotal);
    ɵɵadvance(1);
    ɵɵclassProp("ant-pagination-disabled", ctx_r2087.isFirstIndex);
    ɵɵattribute("title", ctx_r2087.locale.prev_page);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2087.itemRender)("ngTemplateOutletContext", ɵɵpureFunction0(18, _c1));
    ɵɵadvance(1);
    ɵɵclassProp("ant-pagination-item-active", ctx_r2087.isFirstIndex);
    ɵɵattribute("title", ctx_r2087.firstIndex);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2087.itemRender)("ngTemplateOutletContext", ɵɵpureFunction1(19, _c4, ctx_r2087.firstIndex));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2087.lastIndex > 9 && ctx_r2087.nzPageIndex - 3 > ctx_r2087.firstIndex);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2087.pages);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2087.lastIndex > 9 && ctx_r2087.nzPageIndex + 3 < ctx_r2087.lastIndex);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2087.lastIndex > 0 && ctx_r2087.lastIndex !== ctx_r2087.firstIndex);
    ɵɵadvance(1);
    ɵɵclassProp("ant-pagination-disabled", ctx_r2087.isLastIndex);
    ɵɵproperty("title", ctx_r2087.locale.next_page);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2087.itemRender)("ngTemplateOutletContext", ɵɵpureFunction0(21, _c2));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2087.nzShowQuickJumper || ctx_r2087.nzShowSizeChanger);
} }
function NzPaginationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "ul", 6);
    ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_container_2_Template, 11, 14, "ng-container", 7);
    ɵɵtemplate(3, NzPaginationComponent_ng_container_2_ng_template_3_Template, 12, 22, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r2086 = ɵɵreference(4);
    const ctx_r2078 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassProp("ant-table-pagination", ctx_r2078.nzInTable)("ant-pagination-simple", ctx_r2078.nzSimple)("ant-pagination-disabled", ctx_r2078.nzDisabled)("mini", ctx_r2078.nzSize === "small" && !ctx_r2078.nzSimple);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2078.nzSimple)("ngIfElse", _r2086);
} }
class NzPaginationComponent {
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.firstIndex = 1;
        this.pages = [];
        this.$destroy = new Subject();
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        this.nzInTable = false;
        this.nzSize = 'default';
        this.nzPageSizeOptions = [10, 20, 30, 40];
        this.nzDisabled = false;
        this.nzShowSizeChanger = false;
        this.nzHideOnSinglePage = false;
        this.nzShowQuickJumper = false;
        this.nzSimple = false;
        this.nzTotal = 0;
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
    }
    get itemRender() {
        return this.nzItemRender || this.nzItemRenderChild;
    }
    validatePageIndex(value) {
        if (value > this.lastIndex) {
            return this.lastIndex;
        }
        else if (value < this.firstIndex) {
            return this.firstIndex;
        }
        else {
            return value;
        }
    }
    updatePageIndexValue(page) {
        this.nzPageIndex = page;
        this.nzPageIndexChange.emit(this.nzPageIndex);
        this.buildIndexes();
    }
    isPageIndexValid(value) {
        return this.validatePageIndex(value) === value;
    }
    jumpPage(index) {
        if (index !== this.nzPageIndex && !this.nzDisabled) {
            const pageIndex = this.validatePageIndex(index);
            if (pageIndex !== this.nzPageIndex) {
                this.updatePageIndexValue(pageIndex);
            }
        }
    }
    jumpDiff(diff) {
        this.jumpPage(this.nzPageIndex + diff);
    }
    onPageSizeChange($event) {
        this.nzPageSize = $event;
        this.nzPageSizeChange.emit($event);
        this.buildIndexes();
        if (this.nzPageIndex > this.lastIndex) {
            this.updatePageIndexValue(this.lastIndex);
        }
    }
    handleKeyDown(_, input, clearInputValue) {
        const target = input;
        const page = toNumber(target.value, this.nzPageIndex);
        if (isInteger(page) && this.isPageIndexValid(page) && page !== this.nzPageIndex) {
            this.updatePageIndexValue(page);
        }
        if (clearInputValue) {
            target.value = '';
        }
        else {
            target.value = `${this.nzPageIndex}`;
        }
    }
    /** generate indexes list */
    buildIndexes() {
        const pages = [];
        if (this.lastIndex <= 9) {
            for (let i = 2; i <= this.lastIndex - 1; i++) {
                pages.push(i);
            }
        }
        else {
            const current = +this.nzPageIndex;
            let left = Math.max(2, current - 2);
            let right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (let i = left; i <= right; i++) {
                pages.push(i);
            }
        }
        this.pages = pages;
        this.cdr.markForCheck();
    }
    get lastIndex() {
        return Math.ceil(this.nzTotal / this.nzPageSize);
    }
    get isLastIndex() {
        return this.nzPageIndex === this.lastIndex;
    }
    get isFirstIndex() {
        return this.nzPageIndex === this.firstIndex;
    }
    get ranges() {
        return [(this.nzPageIndex - 1) * this.nzPageSize + 1, Math.min(this.nzPageIndex * this.nzPageSize, this.nzTotal)];
    }
    get showAddOption() {
        return this.nzPageSizeOptions.indexOf(this.nzPageSize) === -1;
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.$destroy)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Pagination');
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete();
    }
    ngOnChanges(changes) {
        if (changes.nzTotal || changes.nzPageSize || changes.nzPageIndex) {
            this.buildIndexes();
        }
    }
}
/** @nocollapse */ NzPaginationComponent.ɵfac = function NzPaginationComponent_Factory(t) { return new (t || NzPaginationComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzPaginationComponent.ɵcmp = ɵɵdefineComponent({ type: NzPaginationComponent, selectors: [["nz-pagination"]], viewQuery: function NzPaginationComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzItemRenderChild = _t.first);
    } }, inputs: { nzShowTotal: "nzShowTotal", nzInTable: "nzInTable", nzSize: "nzSize", nzPageSizeOptions: "nzPageSizeOptions", nzItemRender: "nzItemRender", nzDisabled: "nzDisabled", nzShowSizeChanger: "nzShowSizeChanger", nzHideOnSinglePage: "nzHideOnSinglePage", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple", nzTotal: "nzTotal", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange" }, exportAs: ["nzPagination"], features: [ɵɵNgOnChangesFeature()], decls: 3, vars: 1, consts: [["renderItemTemplate", ""], [4, "ngIf"], ["class", "ant-pagination-item-link", 4, "ngIf"], [1, "ant-pagination-item-link"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "right"], [1, "ant-pagination"], [4, "ngIf", "ngIfElse"], ["normalTemplate", ""], [1, "ant-pagination-prev", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "disabled", "value", "keydown.enter"], ["simplePagerInput", ""], [1, "ant-pagination-slash"], [1, "ant-pagination-next", 3, "click"], ["class", "ant-pagination-total-text", 4, "ngIf"], [1, "ant-pagination-item", 3, "click"], ["class", "ant-pagination-jump-prev", 3, "click", 4, "ngIf"], ["class", "ant-pagination-item", 3, "ant-pagination-item-active", "click", 4, "ngFor", "ngForOf"], ["class", "ant-pagination-jump-next ant-pagination-item-link-icon", 3, "click", 4, "ngIf"], ["class", "ant-pagination-item", 3, "ant-pagination-item-active", "click", 4, "ngIf"], [1, "ant-pagination-next", 3, "title", "click"], ["class", "ant-pagination-options", 4, "ngIf"], [1, "ant-pagination-total-text"], [1, "ant-pagination-jump-prev", 3, "click"], [1, "ant-pagination-item-container"], ["nz-icon", "", "nzType", "double-left", 1, "ant-pagination-item-link-icon"], [1, "ant-pagination-item-ellipsis"], [1, "ant-pagination-jump-next", "ant-pagination-item-link-icon", 3, "click"], ["nz-icon", "", "nzType", "double-right", 1, "ant-pagination-item-link-icon"], [1, "ant-pagination-options"], ["class", "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "ant-pagination-options-quick-jumper", 4, "ngIf"], [1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue", 4, "ngIf"], [3, "nzLabel", "nzValue"], [1, "ant-pagination-options-quick-jumper"], [3, "disabled", "keydown.enter"], ["quickJumperInput", ""]], template: function NzPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NzPaginationComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, NzPaginationComponent_ng_container_2_Template, 5, 6, "ng-container", 1);
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.nzHideOnSinglePage && ctx.nzTotal > ctx.nzPageSize || ctx.nzTotal && !ctx.nzHideOnSinglePage);
    } }, directives: [NgIf, NzIconDirective, NgTemplateOutlet, NgForOf, NzSelectComponent, NgControlStatus, NgModel, NzOptionComponent], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzSimple", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzTotal", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzPageIndex", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzPageSize", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPaginationComponent, [{
        type: Component,
        args: [{
                selector: 'nz-pagination',
                exportAs: 'nzPagination',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-pagination.component.html'
            }]
    }], function () { return [{ type: NzI18nService }, { type: ChangeDetectorRef }]; }, { nzPageSizeChange: [{
            type: Output
        }], nzPageIndexChange: [{
            type: Output
        }], nzShowTotal: [{
            type: Input
        }], nzInTable: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzPageSizeOptions: [{
            type: Input
        }], nzItemRender: [{
            type: Input
        }], nzItemRenderChild: [{
            type: ViewChild,
            args: ['renderItemTemplate', { static: true }]
        }], nzDisabled: [{
            type: Input
        }], nzShowSizeChanger: [{
            type: Input
        }], nzHideOnSinglePage: [{
            type: Input
        }], nzShowQuickJumper: [{
            type: Input
        }], nzSimple: [{
            type: Input
        }], nzTotal: [{
            type: Input
        }], nzPageIndex: [{
            type: Input
        }], nzPageSize: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzPaginationModule {
}
/** @nocollapse */ NzPaginationModule.ɵmod = ɵɵdefineNgModule({ type: NzPaginationModule });
/** @nocollapse */ NzPaginationModule.ɵinj = ɵɵdefineInjector({ factory: function NzPaginationModule_Factory(t) { return new (t || NzPaginationModule)(); }, imports: [[CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzPaginationModule, { declarations: [NzPaginationComponent], imports: [CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule], exports: [NzPaginationComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPaginationModule, [{
        type: NgModule,
        args: [{
                declarations: [NzPaginationComponent],
                exports: [NzPaginationComponent],
                imports: [CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule]
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

export { NzPaginationComponent, NzPaginationModule };
//# sourceMappingURL=ng-zorro-antd-pagination.js.map
