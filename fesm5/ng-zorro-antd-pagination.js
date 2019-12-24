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

var _c0 = ["renderItemTemplate"];
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
    var page_r2134 = ɵɵnextContext().page;
    ɵɵadvance(1);
    ɵɵtextInterpolate(page_r2134);
} }
function NzPaginationComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzPaginationComponent_ng_template_0_a_0_Template, 2, 0, "a", 2);
    ɵɵtemplate(1, NzPaginationComponent_ng_template_0_a_1_Template, 2, 0, "a", 2);
    ɵɵtemplate(2, NzPaginationComponent_ng_template_0_a_2_Template, 2, 1, "a", 1);
} if (rf & 2) {
    var type_r2133 = ctx.$implicit;
    ɵɵproperty("ngIf", type_r2133 === "pre");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", type_r2133 === "next");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", type_r2133 == "page");
} }
function NzPaginationComponent_ng_container_2_ng_container_2_ng_template_2_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_container_2_ng_template_10_Template(rf, ctx) { }
var _c1 = function () { return { $implicit: "pre" }; };
var _c2 = function () { return { $implicit: "next" }; };
function NzPaginationComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r2146 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 9);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_container_2_Template_li_click_1_listener($event) { ɵɵrestoreView(_r2146); var ctx_r2145 = ɵɵnextContext(2); return ctx_r2145.jumpDiff(0 - 1); });
    ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_container_2_ng_template_2_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
    ɵɵelementStart(3, "li", 11);
    ɵɵelementStart(4, "input", 12, 13);
    ɵɵlistener("keydown.enter", function NzPaginationComponent_ng_container_2_ng_container_2_Template_input_keydown_enter_4_listener($event) { ɵɵrestoreView(_r2146); var _r2143 = ɵɵreference(5); var ctx_r2147 = ɵɵnextContext(2); return ctx_r2147.handleKeyDown($event, _r2143, false); });
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 14);
    ɵɵtext(7, "/");
    ɵɵelementEnd();
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "li", 15);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_container_2_Template_li_click_9_listener($event) { ɵɵrestoreView(_r2146); var ctx_r2148 = ɵɵnextContext(2); return ctx_r2148.jumpDiff(1); });
    ɵɵtemplate(10, NzPaginationComponent_ng_container_2_ng_container_2_ng_template_10_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2139 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassProp("ant-pagination-disabled", ctx_r2139.isFirstIndex);
    ɵɵattribute("title", ctx_r2139.locale.prev_page);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2139.itemRender)("ngTemplateOutletContext", ɵɵpureFunction0(12, _c1));
    ɵɵadvance(1);
    ɵɵattribute("title", ctx_r2139.nzPageIndex + "/" + ctx_r2139.lastIndex);
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r2139.nzDisabled)("value", ctx_r2139.nzPageIndex);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r2139.lastIndex, " ");
    ɵɵadvance(1);
    ɵɵclassProp("ant-pagination-disabled", ctx_r2139.isLastIndex);
    ɵɵattribute("title", ctx_r2139.locale.next_page);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2139.itemRender)("ngTemplateOutletContext", ɵɵpureFunction0(13, _c2));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_0_ng_template_1_Template(rf, ctx) { }
var _c3 = function (a0, a1) { return { $implicit: a0, range: a1 }; };
function NzPaginationComponent_ng_container_2_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 24);
    ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_0_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2149 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2149.nzShowTotal)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c3, ctx_r2149.nzTotal, ctx_r2149.ranges));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_2_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_4_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template(rf, ctx) { if (rf & 1) {
    var _r2160 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 25);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template_li_click_0_listener($event) { ɵɵrestoreView(_r2160); var ctx_r2159 = ɵɵnextContext(3); return ctx_r2159.jumpDiff(0 - 5); });
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
    var ctx_r2152 = ɵɵnextContext(3);
    ɵɵattribute("title", ctx_r2152.locale.prev_5);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_6_ng_template_1_Template(rf, ctx) { }
var _c4 = function (a1) { return { $implicit: "page", page: a1 }; };
function NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r2164 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 17);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template_li_click_0_listener($event) { ɵɵrestoreView(_r2164); var page_r2161 = ctx.$implicit; var ctx_r2163 = ɵɵnextContext(3); return ctx_r2163.jumpPage(page_r2161); });
    ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_6_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    var page_r2161 = ctx.$implicit;
    var ctx_r2153 = ɵɵnextContext(3);
    ɵɵclassProp("ant-pagination-item-active", ctx_r2153.nzPageIndex === page_r2161);
    ɵɵattribute("title", page_r2161);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2153.itemRender)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c4, page_r2161));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r2166 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 29);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template_li_click_0_listener($event) { ɵɵrestoreView(_r2166); var ctx_r2165 = ɵɵnextContext(3); return ctx_r2165.jumpDiff(5); });
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
    var ctx_r2154 = ɵɵnextContext(3);
    ɵɵattribute("title", ctx_r2154.locale.next_5);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_8_ng_template_1_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template(rf, ctx) { if (rf & 1) {
    var _r2169 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 17);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template_li_click_0_listener($event) { ɵɵrestoreView(_r2169); var ctx_r2168 = ɵɵnextContext(3); return ctx_r2168.jumpPage(ctx_r2168.lastIndex); });
    ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_8_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2155 = ɵɵnextContext(3);
    ɵɵclassProp("ant-pagination-item-active", ctx_r2155.isLastIndex);
    ɵɵattribute("title", ctx_r2155.lastIndex);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2155.itemRender)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c4, ctx_r2155.lastIndex));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_10_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-option", 37);
} if (rf & 2) {
    var option_r2174 = ctx.$implicit;
    var ctx_r2172 = ɵɵnextContext(5);
    ɵɵproperty("nzLabel", option_r2174 + " " + ctx_r2172.locale.items_per_page)("nzValue", option_r2174);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-option", 37);
} if (rf & 2) {
    var ctx_r2173 = ɵɵnextContext(5);
    ɵɵproperty("nzLabel", ctx_r2173.nzPageSize + " " + ctx_r2173.locale.items_per_page)("nzValue", ctx_r2173.nzPageSize);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template(rf, ctx) { if (rf & 1) {
    var _r2176 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select", 34);
    ɵɵlistener("ngModelChange", function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template_nz_select_ngModelChange_0_listener($event) { ɵɵrestoreView(_r2176); var ctx_r2175 = ɵɵnextContext(4); return ctx_r2175.onPageSizeChange($event); });
    ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_1_Template, 1, 2, "nz-option", 35);
    ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_2_Template, 1, 2, "nz-option", 36);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2170 = ɵɵnextContext(4);
    ɵɵproperty("nzDisabled", ctx_r2170.nzDisabled)("nzSize", ctx_r2170.nzSize)("ngModel", ctx_r2170.nzPageSize);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2170.nzPageSizeOptions);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2170.showAddOption);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r2179 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 38);
    ɵɵtext(1);
    ɵɵelementStart(2, "input", 39, 40);
    ɵɵlistener("keydown.enter", function NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template_input_keydown_enter_2_listener($event) { ɵɵrestoreView(_r2179); var _r2177 = ɵɵreference(3); var ctx_r2178 = ɵɵnextContext(4); return ctx_r2178.handleKeyDown($event, _r2177, true); });
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2171 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r2171.locale.jump_to, " ");
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r2171.nzDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2171.locale.page, " ");
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template, 3, 5, "nz-select", 32);
    ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template, 5, 3, "div", 33);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2157 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2157.nzShowSizeChanger);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2157.nzShowQuickJumper);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    var _r2181 = ɵɵgetCurrentView();
    ɵɵtemplate(0, NzPaginationComponent_ng_container_2_ng_template_3_li_0_Template, 2, 5, "li", 16);
    ɵɵelementStart(1, "li", 9);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_1_listener($event) { ɵɵrestoreView(_r2181); var ctx_r2180 = ɵɵnextContext(2); return ctx_r2180.jumpDiff(0 - 1); });
    ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_2_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
    ɵɵelementStart(3, "li", 17);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_3_listener($event) { ɵɵrestoreView(_r2181); var ctx_r2182 = ɵɵnextContext(2); return ctx_r2182.jumpPage(ctx_r2182.firstIndex); });
    ɵɵtemplate(4, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_4_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
    ɵɵtemplate(5, NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template, 6, 1, "li", 18);
    ɵɵtemplate(6, NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template, 2, 6, "li", 19);
    ɵɵtemplate(7, NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template, 6, 1, "li", 20);
    ɵɵtemplate(8, NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template, 2, 6, "li", 21);
    ɵɵelementStart(9, "li", 22);
    ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_9_listener($event) { ɵɵrestoreView(_r2181); var ctx_r2183 = ɵɵnextContext(2); return ctx_r2183.jumpDiff(1); });
    ɵɵtemplate(10, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_10_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
    ɵɵtemplate(11, NzPaginationComponent_ng_container_2_ng_template_3_div_11_Template, 3, 2, "div", 23);
} if (rf & 2) {
    var ctx_r2141 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r2141.nzShowTotal);
    ɵɵadvance(1);
    ɵɵclassProp("ant-pagination-disabled", ctx_r2141.isFirstIndex);
    ɵɵattribute("title", ctx_r2141.locale.prev_page);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2141.itemRender)("ngTemplateOutletContext", ɵɵpureFunction0(18, _c1));
    ɵɵadvance(1);
    ɵɵclassProp("ant-pagination-item-active", ctx_r2141.isFirstIndex);
    ɵɵattribute("title", ctx_r2141.firstIndex);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2141.itemRender)("ngTemplateOutletContext", ɵɵpureFunction1(19, _c4, ctx_r2141.firstIndex));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2141.lastIndex > 9 && ctx_r2141.nzPageIndex - 3 > ctx_r2141.firstIndex);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2141.pages);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2141.lastIndex > 9 && ctx_r2141.nzPageIndex + 3 < ctx_r2141.lastIndex);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2141.lastIndex > 0 && ctx_r2141.lastIndex !== ctx_r2141.firstIndex);
    ɵɵadvance(1);
    ɵɵclassProp("ant-pagination-disabled", ctx_r2141.isLastIndex);
    ɵɵproperty("title", ctx_r2141.locale.next_page);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2141.itemRender)("ngTemplateOutletContext", ɵɵpureFunction0(21, _c2));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2141.nzShowQuickJumper || ctx_r2141.nzShowSizeChanger);
} }
function NzPaginationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "ul", 6);
    ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_container_2_Template, 11, 14, "ng-container", 7);
    ɵɵtemplate(3, NzPaginationComponent_ng_container_2_ng_template_3_Template, 12, 22, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r2140 = ɵɵreference(4);
    var ctx_r2132 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassProp("ant-table-pagination", ctx_r2132.nzInTable)("ant-pagination-simple", ctx_r2132.nzSimple)("ant-pagination-disabled", ctx_r2132.nzDisabled)("mini", ctx_r2132.nzSize === "small" && !ctx_r2132.nzSimple);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2132.nzSimple)("ngIfElse", _r2140);
} }
var NzPaginationComponent = /** @class */ (function () {
    function NzPaginationComponent(i18n, cdr) {
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
    Object.defineProperty(NzPaginationComponent.prototype, "itemRender", {
        get: function () {
            return this.nzItemRender || this.nzItemRenderChild;
        },
        enumerable: true,
        configurable: true
    });
    NzPaginationComponent.prototype.validatePageIndex = function (value) {
        if (value > this.lastIndex) {
            return this.lastIndex;
        }
        else if (value < this.firstIndex) {
            return this.firstIndex;
        }
        else {
            return value;
        }
    };
    NzPaginationComponent.prototype.updatePageIndexValue = function (page) {
        this.nzPageIndex = page;
        this.nzPageIndexChange.emit(this.nzPageIndex);
        this.buildIndexes();
    };
    NzPaginationComponent.prototype.isPageIndexValid = function (value) {
        return this.validatePageIndex(value) === value;
    };
    NzPaginationComponent.prototype.jumpPage = function (index) {
        if (index !== this.nzPageIndex && !this.nzDisabled) {
            var pageIndex = this.validatePageIndex(index);
            if (pageIndex !== this.nzPageIndex) {
                this.updatePageIndexValue(pageIndex);
            }
        }
    };
    NzPaginationComponent.prototype.jumpDiff = function (diff) {
        this.jumpPage(this.nzPageIndex + diff);
    };
    NzPaginationComponent.prototype.onPageSizeChange = function ($event) {
        this.nzPageSize = $event;
        this.nzPageSizeChange.emit($event);
        this.buildIndexes();
        if (this.nzPageIndex > this.lastIndex) {
            this.updatePageIndexValue(this.lastIndex);
        }
    };
    NzPaginationComponent.prototype.handleKeyDown = function (_, input, clearInputValue) {
        var target = input;
        var page = toNumber(target.value, this.nzPageIndex);
        if (isInteger(page) && this.isPageIndexValid(page) && page !== this.nzPageIndex) {
            this.updatePageIndexValue(page);
        }
        if (clearInputValue) {
            target.value = '';
        }
        else {
            target.value = "" + this.nzPageIndex;
        }
    };
    /** generate indexes list */
    NzPaginationComponent.prototype.buildIndexes = function () {
        var pages = [];
        if (this.lastIndex <= 9) {
            for (var i = 2; i <= this.lastIndex - 1; i++) {
                pages.push(i);
            }
        }
        else {
            var current = +this.nzPageIndex;
            var left = Math.max(2, current - 2);
            var right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (var i = left; i <= right; i++) {
                pages.push(i);
            }
        }
        this.pages = pages;
        this.cdr.markForCheck();
    };
    Object.defineProperty(NzPaginationComponent.prototype, "lastIndex", {
        get: function () {
            return Math.ceil(this.nzTotal / this.nzPageSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "isLastIndex", {
        get: function () {
            return this.nzPageIndex === this.lastIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "isFirstIndex", {
        get: function () {
            return this.nzPageIndex === this.firstIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "ranges", {
        get: function () {
            return [(this.nzPageIndex - 1) * this.nzPageSize + 1, Math.min(this.nzPageIndex * this.nzPageSize, this.nzTotal)];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "showAddOption", {
        get: function () {
            return this.nzPageSizeOptions.indexOf(this.nzPageSize) === -1;
        },
        enumerable: true,
        configurable: true
    });
    NzPaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.$destroy)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Pagination');
            _this.cdr.markForCheck();
        });
    };
    NzPaginationComponent.prototype.ngOnDestroy = function () {
        this.$destroy.next();
        this.$destroy.complete();
    };
    NzPaginationComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzTotal || changes.nzPageSize || changes.nzPageIndex) {
            this.buildIndexes();
        }
    };
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
    return NzPaginationComponent;
}());
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
var NzPaginationModule = /** @class */ (function () {
    function NzPaginationModule() {
    }
    /** @nocollapse */ NzPaginationModule.ɵmod = ɵɵdefineNgModule({ type: NzPaginationModule });
    /** @nocollapse */ NzPaginationModule.ɵinj = ɵɵdefineInjector({ factory: function NzPaginationModule_Factory(t) { return new (t || NzPaginationModule)(); }, imports: [[CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule]] });
    return NzPaginationModule;
}());
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
