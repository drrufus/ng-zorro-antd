import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber, isInteger, toNumber } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "ng-zorro-antd/select";
import * as i5 from "@angular/forms";
var _c0 = ["renderItemTemplate"];
function NzPaginationComponent_ng_template_0_a_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵelement(1, "i", 4);
    i0.ɵɵelementEnd();
} }
function NzPaginationComponent_ng_template_0_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵelement(1, "i", 5);
    i0.ɵɵelementEnd();
} }
function NzPaginationComponent_ng_template_0_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r2134 = i0.ɵɵnextContext().page;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(page_r2134);
} }
function NzPaginationComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzPaginationComponent_ng_template_0_a_0_Template, 2, 0, "a", 2);
    i0.ɵɵtemplate(1, NzPaginationComponent_ng_template_0_a_1_Template, 2, 0, "a", 2);
    i0.ɵɵtemplate(2, NzPaginationComponent_ng_template_0_a_2_Template, 2, 1, "a", 1);
} if (rf & 2) {
    var type_r2133 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", type_r2133 === "pre");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", type_r2133 === "next");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", type_r2133 == "page");
} }
function NzPaginationComponent_ng_container_2_ng_container_2_ng_template_2_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_container_2_ng_template_10_Template(rf, ctx) { }
var _c1 = function () { return { $implicit: "pre" }; };
var _c2 = function () { return { $implicit: "next" }; };
function NzPaginationComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r2146 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 9);
    i0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_container_2_Template_li_click_1_listener($event) { i0.ɵɵrestoreView(_r2146); var ctx_r2145 = i0.ɵɵnextContext(2); return ctx_r2145.jumpDiff(0 - 1); });
    i0.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_container_2_ng_template_2_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "li", 11);
    i0.ɵɵelementStart(4, "input", 12, 13);
    i0.ɵɵlistener("keydown.enter", function NzPaginationComponent_ng_container_2_ng_container_2_Template_input_keydown_enter_4_listener($event) { i0.ɵɵrestoreView(_r2146); var _r2143 = i0.ɵɵreference(5); var ctx_r2147 = i0.ɵɵnextContext(2); return ctx_r2147.handleKeyDown($event, _r2143, false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 14);
    i0.ɵɵtext(7, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "li", 15);
    i0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_container_2_Template_li_click_9_listener($event) { i0.ɵɵrestoreView(_r2146); var ctx_r2148 = i0.ɵɵnextContext(2); return ctx_r2148.jumpDiff(1); });
    i0.ɵɵtemplate(10, NzPaginationComponent_ng_container_2_ng_container_2_ng_template_10_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2139 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-pagination-disabled", ctx_r2139.isFirstIndex);
    i0.ɵɵattribute("title", ctx_r2139.locale.prev_page);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2139.itemRender)("ngTemplateOutletContext", i0.ɵɵpureFunction0(12, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("title", ctx_r2139.nzPageIndex + "/" + ctx_r2139.lastIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r2139.nzDisabled)("value", ctx_r2139.nzPageIndex);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2139.lastIndex, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-pagination-disabled", ctx_r2139.isLastIndex);
    i0.ɵɵattribute("title", ctx_r2139.locale.next_page);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2139.itemRender)("ngTemplateOutletContext", i0.ɵɵpureFunction0(13, _c2));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_0_ng_template_1_Template(rf, ctx) { }
var _c3 = function (a0, a1) { return { $implicit: a0, range: a1 }; };
function NzPaginationComponent_ng_container_2_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 24);
    i0.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_0_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2149 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2149.nzShowTotal)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c3, ctx_r2149.nzTotal, ctx_r2149.ranges));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_2_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_4_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template(rf, ctx) { if (rf & 1) {
    var _r2160 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 25);
    i0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r2160); var ctx_r2159 = i0.ɵɵnextContext(3); return ctx_r2159.jumpDiff(0 - 5); });
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵelementStart(2, "div", 26);
    i0.ɵɵelement(3, "i", 27);
    i0.ɵɵelementStart(4, "span", 28);
    i0.ɵɵtext(5, "\u2022\u2022\u2022");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2152 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("title", ctx_r2152.locale.prev_5);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_6_ng_template_1_Template(rf, ctx) { }
var _c4 = function (a1) { return { $implicit: "page", page: a1 }; };
function NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r2164 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17);
    i0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r2164); var page_r2161 = ctx.$implicit; var ctx_r2163 = i0.ɵɵnextContext(3); return ctx_r2163.jumpPage(page_r2161); });
    i0.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_6_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r2161 = ctx.$implicit;
    var ctx_r2153 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("ant-pagination-item-active", ctx_r2153.nzPageIndex === page_r2161);
    i0.ɵɵattribute("title", page_r2161);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2153.itemRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c4, page_r2161));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r2166 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 29);
    i0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r2166); var ctx_r2165 = i0.ɵɵnextContext(3); return ctx_r2165.jumpDiff(5); });
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵelementStart(2, "div", 26);
    i0.ɵɵelement(3, "i", 30);
    i0.ɵɵelementStart(4, "span", 28);
    i0.ɵɵtext(5, "\u2022\u2022\u2022");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2154 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("title", ctx_r2154.locale.next_5);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_8_ng_template_1_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template(rf, ctx) { if (rf & 1) {
    var _r2169 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17);
    i0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r2169); var ctx_r2168 = i0.ɵɵnextContext(3); return ctx_r2168.jumpPage(ctx_r2168.lastIndex); });
    i0.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_8_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2155 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("ant-pagination-item-active", ctx_r2155.isLastIndex);
    i0.ɵɵattribute("title", ctx_r2155.lastIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2155.itemRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c4, ctx_r2155.lastIndex));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_10_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 37);
} if (rf & 2) {
    var option_r2174 = ctx.$implicit;
    var ctx_r2172 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("nzLabel", option_r2174 + " " + ctx_r2172.locale.items_per_page)("nzValue", option_r2174);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 37);
} if (rf & 2) {
    var ctx_r2173 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("nzLabel", ctx_r2173.nzPageSize + " " + ctx_r2173.locale.items_per_page)("nzValue", ctx_r2173.nzPageSize);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template(rf, ctx) { if (rf & 1) {
    var _r2176 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-select", 34);
    i0.ɵɵlistener("ngModelChange", function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template_nz_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2176); var ctx_r2175 = i0.ɵɵnextContext(4); return ctx_r2175.onPageSizeChange($event); });
    i0.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_1_Template, 1, 2, "nz-option", 35);
    i0.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_2_Template, 1, 2, "nz-option", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2170 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzDisabled", ctx_r2170.nzDisabled)("nzSize", ctx_r2170.nzSize)("ngModel", ctx_r2170.nzPageSize);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2170.nzPageSizeOptions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2170.showAddOption);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r2179 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "input", 39, 40);
    i0.ɵɵlistener("keydown.enter", function NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template_input_keydown_enter_2_listener($event) { i0.ɵɵrestoreView(_r2179); var _r2177 = i0.ɵɵreference(3); var ctx_r2178 = i0.ɵɵnextContext(4); return ctx_r2178.handleKeyDown($event, _r2177, true); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2171 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2171.locale.jump_to, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r2171.nzDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2171.locale.page, " ");
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template, 3, 5, "nz-select", 32);
    i0.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template, 5, 3, "div", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2157 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2157.nzShowSizeChanger);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2157.nzShowQuickJumper);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    var _r2181 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, NzPaginationComponent_ng_container_2_ng_template_3_li_0_Template, 2, 5, "li", 16);
    i0.ɵɵelementStart(1, "li", 9);
    i0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_1_listener($event) { i0.ɵɵrestoreView(_r2181); var ctx_r2180 = i0.ɵɵnextContext(2); return ctx_r2180.jumpDiff(0 - 1); });
    i0.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_2_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "li", 17);
    i0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_3_listener($event) { i0.ɵɵrestoreView(_r2181); var ctx_r2182 = i0.ɵɵnextContext(2); return ctx_r2182.jumpPage(ctx_r2182.firstIndex); });
    i0.ɵɵtemplate(4, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_4_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template, 6, 1, "li", 18);
    i0.ɵɵtemplate(6, NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template, 2, 6, "li", 19);
    i0.ɵɵtemplate(7, NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template, 6, 1, "li", 20);
    i0.ɵɵtemplate(8, NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template, 2, 6, "li", 21);
    i0.ɵɵelementStart(9, "li", 22);
    i0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_9_listener($event) { i0.ɵɵrestoreView(_r2181); var ctx_r2183 = i0.ɵɵnextContext(2); return ctx_r2183.jumpDiff(1); });
    i0.ɵɵtemplate(10, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_10_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, NzPaginationComponent_ng_container_2_ng_template_3_div_11_Template, 3, 2, "div", 23);
} if (rf & 2) {
    var ctx_r2141 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r2141.nzShowTotal);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-pagination-disabled", ctx_r2141.isFirstIndex);
    i0.ɵɵattribute("title", ctx_r2141.locale.prev_page);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2141.itemRender)("ngTemplateOutletContext", i0.ɵɵpureFunction0(18, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-pagination-item-active", ctx_r2141.isFirstIndex);
    i0.ɵɵattribute("title", ctx_r2141.firstIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2141.itemRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(19, _c4, ctx_r2141.firstIndex));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2141.lastIndex > 9 && ctx_r2141.nzPageIndex - 3 > ctx_r2141.firstIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2141.pages);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2141.lastIndex > 9 && ctx_r2141.nzPageIndex + 3 < ctx_r2141.lastIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2141.lastIndex > 0 && ctx_r2141.lastIndex !== ctx_r2141.firstIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-pagination-disabled", ctx_r2141.isLastIndex);
    i0.ɵɵproperty("title", ctx_r2141.locale.next_page);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2141.itemRender)("ngTemplateOutletContext", i0.ɵɵpureFunction0(21, _c2));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2141.nzShowQuickJumper || ctx_r2141.nzShowSizeChanger);
} }
function NzPaginationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 6);
    i0.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_container_2_Template, 11, 14, "ng-container", 7);
    i0.ɵɵtemplate(3, NzPaginationComponent_ng_container_2_ng_template_3_Template, 12, 22, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r2140 = i0.ɵɵreference(4);
    var ctx_r2132 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-table-pagination", ctx_r2132.nzInTable)("ant-pagination-simple", ctx_r2132.nzSimple)("ant-pagination-disabled", ctx_r2132.nzDisabled)("mini", ctx_r2132.nzSize === "small" && !ctx_r2132.nzSimple);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2132.nzSimple)("ngIfElse", _r2140);
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
    /** @nocollapse */ NzPaginationComponent.ɵfac = function NzPaginationComponent_Factory(t) { return new (t || NzPaginationComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzPaginationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzPaginationComponent, selectors: [["nz-pagination"]], viewQuery: function NzPaginationComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzItemRenderChild = _t.first);
        } }, inputs: { nzShowTotal: "nzShowTotal", nzInTable: "nzInTable", nzSize: "nzSize", nzPageSizeOptions: "nzPageSizeOptions", nzItemRender: "nzItemRender", nzDisabled: "nzDisabled", nzShowSizeChanger: "nzShowSizeChanger", nzHideOnSinglePage: "nzHideOnSinglePage", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple", nzTotal: "nzTotal", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange" }, exportAs: ["nzPagination"], features: [i0.ɵɵNgOnChangesFeature()], decls: 3, vars: 1, consts: [["renderItemTemplate", ""], [4, "ngIf"], ["class", "ant-pagination-item-link", 4, "ngIf"], [1, "ant-pagination-item-link"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "right"], [1, "ant-pagination"], [4, "ngIf", "ngIfElse"], ["normalTemplate", ""], [1, "ant-pagination-prev", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "disabled", "value", "keydown.enter"], ["simplePagerInput", ""], [1, "ant-pagination-slash"], [1, "ant-pagination-next", 3, "click"], ["class", "ant-pagination-total-text", 4, "ngIf"], [1, "ant-pagination-item", 3, "click"], ["class", "ant-pagination-jump-prev", 3, "click", 4, "ngIf"], ["class", "ant-pagination-item", 3, "ant-pagination-item-active", "click", 4, "ngFor", "ngForOf"], ["class", "ant-pagination-jump-next ant-pagination-item-link-icon", 3, "click", 4, "ngIf"], ["class", "ant-pagination-item", 3, "ant-pagination-item-active", "click", 4, "ngIf"], [1, "ant-pagination-next", 3, "title", "click"], ["class", "ant-pagination-options", 4, "ngIf"], [1, "ant-pagination-total-text"], [1, "ant-pagination-jump-prev", 3, "click"], [1, "ant-pagination-item-container"], ["nz-icon", "", "nzType", "double-left", 1, "ant-pagination-item-link-icon"], [1, "ant-pagination-item-ellipsis"], [1, "ant-pagination-jump-next", "ant-pagination-item-link-icon", 3, "click"], ["nz-icon", "", "nzType", "double-right", 1, "ant-pagination-item-link-icon"], [1, "ant-pagination-options"], ["class", "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "ant-pagination-options-quick-jumper", 4, "ngIf"], [1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue", 4, "ngIf"], [3, "nzLabel", "nzValue"], [1, "ant-pagination-options-quick-jumper"], [3, "disabled", "keydown.enter"], ["quickJumperInput", ""]], template: function NzPaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzPaginationComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_Template, 5, 6, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.nzHideOnSinglePage && ctx.nzTotal > ctx.nzPageSize || ctx.nzTotal && !ctx.nzHideOnSinglePage);
        } }, directives: [i2.NgIf, i3.NzIconDirective, i2.NgTemplateOutlet, i2.NgForOf, i4.NzSelectComponent, i5.NgControlStatus, i5.NgModel, i4.NzOptionComponent], encapsulation: 2, changeDetection: 0 });
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
export { NzPaginationComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzPaginationComponent, [{
        type: Component,
        args: [{
                selector: 'nz-pagination',
                exportAs: 'nzPagination',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-pagination.component.html'
            }]
    }], function () { return [{ type: i1.NzI18nService }, { type: i0.ChangeDetectorRef }]; }, { nzPageSizeChange: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJuei1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIm56LXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7SUMxQmpELDRCQUNFO0lBQUEsdUJBQTZCO0lBQy9CLGlCQUFJOzs7SUFDSiw0QkFDRTtJQUFBLHVCQUE4QjtJQUNoQyxpQkFBSTs7O0lBQ0oseUJBQTBCO0lBQUEsWUFBVTtJQUFBLGlCQUFJOzs7SUFBZCxlQUFVO0lBQVYsZ0NBQVU7OztJQU5wQyxnRkFDRTtJQUVGLGdGQUNFO0lBRUYsZ0ZBQTBCOzs7SUFOVSwyQ0FBc0I7SUFHdEIsZUFBdUI7SUFBdkIsNENBQXVCO0lBR3hELGVBQXNCO0lBQXRCLDJDQUFzQjs7Ozs7Ozs7SUFZdkIsNkJBQ0U7SUFBQSw2QkFNRTtJQUZBLG9OQUFrQixDQUFBLEdBQUMsQ0FBQyxLQUFFO0lBRXRCLHFIQUdDO0lBQ0gsaUJBQUs7SUFDTCw4QkFDRTtJQUFBLHFDQU9BO0lBSEUsNFJBQXlELEtBQUss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QUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBpc0ludGVnZXIsIHRvTnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dCB7XHJcbiAgJGltcGxpY2l0OiAncGFnZScgfCAncHJldicgfCAnbmV4dCc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXBhZ2luYXRpb24nLFxyXG4gIGV4cG9ydEFzOiAnbnpQYWdpbmF0aW9uJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxvY2FsZTogYW55ID0ge307XHJcbiAgZmlyc3RJbmRleCA9IDE7XHJcbiAgcGFnZXM6IG51bWJlcltdID0gW107XHJcbiAgcHJpdmF0ZSAkZGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZVNpemVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhZ2VJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgbnpTaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xyXG4gIEBJbnB1dCgpIG56SW5UYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56U2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MF07XHJcblxyXG4gIEBJbnB1dCgpIG56SXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PjtcclxuICBAVmlld0NoaWxkKCdyZW5kZXJJdGVtVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuekl0ZW1SZW5kZXJDaGlsZDogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PjtcclxuICBnZXQgaXRlbVJlbmRlcigpOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+IHtcclxuICAgIHJldHVybiB0aGlzLm56SXRlbVJlbmRlciB8fCB0aGlzLm56SXRlbVJlbmRlckNoaWxkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2ltcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpUb3RhbCA9IDA7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpQYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56UGFnZVNpemUgPSAxMDtcclxuXHJcbiAgdmFsaWRhdGVQYWdlSW5kZXgodmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAodmFsdWUgPiB0aGlzLmxhc3RJbmRleCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5sYXN0SW5kZXg7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlIDwgdGhpcy5maXJzdEluZGV4KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpcnN0SW5kZXg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQYWdlSW5kZXhWYWx1ZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubnpQYWdlSW5kZXggPSBwYWdlO1xyXG4gICAgdGhpcy5uelBhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMubnpQYWdlSW5kZXgpO1xyXG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcclxuICB9XHJcblxyXG4gIGlzUGFnZUluZGV4VmFsaWQodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQYWdlSW5kZXgodmFsdWUpID09PSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGp1bXBQYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChpbmRleCAhPT0gdGhpcy5uelBhZ2VJbmRleCAmJiAhdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2VJbmRleCA9IHRoaXMudmFsaWRhdGVQYWdlSW5kZXgoaW5kZXgpO1xyXG4gICAgICBpZiAocGFnZUluZGV4ICE9PSB0aGlzLm56UGFnZUluZGV4KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlSW5kZXhWYWx1ZShwYWdlSW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBqdW1wRGlmZihkaWZmOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuanVtcFBhZ2UodGhpcy5uelBhZ2VJbmRleCArIGRpZmYpO1xyXG4gIH1cclxuXHJcbiAgb25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5uelBhZ2VTaXplID0gJGV2ZW50O1xyXG4gICAgdGhpcy5uelBhZ2VTaXplQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICAgIHRoaXMuYnVpbGRJbmRleGVzKCk7XHJcbiAgICBpZiAodGhpcy5uelBhZ2VJbmRleCA+IHRoaXMubGFzdEluZGV4KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUGFnZUluZGV4VmFsdWUodGhpcy5sYXN0SW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5RG93bihfOiBLZXlib2FyZEV2ZW50LCBpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY2xlYXJJbnB1dFZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBpbnB1dDtcclxuICAgIGNvbnN0IHBhZ2UgPSB0b051bWJlcih0YXJnZXQudmFsdWUsIHRoaXMubnpQYWdlSW5kZXgpO1xyXG4gICAgaWYgKGlzSW50ZWdlcihwYWdlKSAmJiB0aGlzLmlzUGFnZUluZGV4VmFsaWQocGFnZSkgJiYgcGFnZSAhPT0gdGhpcy5uelBhZ2VJbmRleCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBhZ2VJbmRleFZhbHVlKHBhZ2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNsZWFySW5wdXRWYWx1ZSkge1xyXG4gICAgICB0YXJnZXQudmFsdWUgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhcmdldC52YWx1ZSA9IGAke3RoaXMubnpQYWdlSW5kZXh9YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBnZW5lcmF0ZSBpbmRleGVzIGxpc3QgKi9cclxuICBidWlsZEluZGV4ZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYWdlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGlmICh0aGlzLmxhc3RJbmRleCA8PSA5KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHRoaXMubGFzdEluZGV4IC0gMTsgaSsrKSB7XHJcbiAgICAgICAgcGFnZXMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY3VycmVudCA9ICt0aGlzLm56UGFnZUluZGV4O1xyXG4gICAgICBsZXQgbGVmdCA9IE1hdGgubWF4KDIsIGN1cnJlbnQgLSAyKTtcclxuICAgICAgbGV0IHJpZ2h0ID0gTWF0aC5taW4oY3VycmVudCArIDIsIHRoaXMubGFzdEluZGV4IC0gMSk7XHJcbiAgICAgIGlmIChjdXJyZW50IC0gMSA8PSAyKSB7XHJcbiAgICAgICAgcmlnaHQgPSA1O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmxhc3RJbmRleCAtIGN1cnJlbnQgPD0gMikge1xyXG4gICAgICAgIGxlZnQgPSB0aGlzLmxhc3RJbmRleCAtIDQ7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xyXG4gICAgICAgIHBhZ2VzLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMucGFnZXMgPSBwYWdlcztcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhc3RJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLm56VG90YWwgLyB0aGlzLm56UGFnZVNpemUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGFzdEluZGV4KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpQYWdlSW5kZXggPT09IHRoaXMubGFzdEluZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRmlyc3RJbmRleCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56UGFnZUluZGV4ID09PSB0aGlzLmZpcnN0SW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXQgcmFuZ2VzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbKHRoaXMubnpQYWdlSW5kZXggLSAxKSAqIHRoaXMubnpQYWdlU2l6ZSArIDEsIE1hdGgubWluKHRoaXMubnpQYWdlSW5kZXggKiB0aGlzLm56UGFnZVNpemUsIHRoaXMubnpUb3RhbCldO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dBZGRPcHRpb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelBhZ2VTaXplT3B0aW9ucy5pbmRleE9mKHRoaXMubnpQYWdlU2l6ZSkgPT09IC0xO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnUGFnaW5hdGlvbicpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLiRkZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuJGRlc3Ryb3kuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56VG90YWwgfHwgY2hhbmdlcy5uelBhZ2VTaXplIHx8IGNoYW5nZXMubnpQYWdlSW5kZXgpIHtcclxuICAgICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNyZW5kZXJJdGVtVGVtcGxhdGUgbGV0LXR5cGUgbGV0LXBhZ2U9XCJwYWdlXCI+XHJcbiAgPGEgY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi1pdGVtLWxpbmtcIiAqbmdJZj1cInR5cGUgPT09ICdwcmUnXCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImxlZnRcIj48L2k+XHJcbiAgPC9hPlxyXG4gIDxhIGNsYXNzPVwiYW50LXBhZ2luYXRpb24taXRlbS1saW5rXCIgKm5nSWY9XCJ0eXBlID09PSAnbmV4dCdcIj5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwicmlnaHRcIj48L2k+XHJcbiAgPC9hPlxyXG4gIDxhICpuZ0lmPVwidHlwZSA9PSAncGFnZSdcIj57eyBwYWdlIH19PC9hPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctY29udGFpbmVyXHJcbiAgKm5nSWY9XCIobnpIaWRlT25TaW5nbGVQYWdlICYmIG56VG90YWwgPiBuelBhZ2VTaXplKSB8fCAobnpUb3RhbCAmJiAhbnpIaWRlT25TaW5nbGVQYWdlKVwiXHJcbj5cclxuICA8dWxcclxuICAgIGNsYXNzPVwiYW50LXBhZ2luYXRpb25cIlxyXG4gICAgW2NsYXNzLmFudC10YWJsZS1wYWdpbmF0aW9uXT1cIm56SW5UYWJsZVwiXHJcbiAgICBbY2xhc3MuYW50LXBhZ2luYXRpb24tc2ltcGxlXT1cIm56U2ltcGxlXCJcclxuICAgIFtjbGFzcy5hbnQtcGFnaW5hdGlvbi1kaXNhYmxlZF09XCJuekRpc2FibGVkXCJcclxuICAgIFtjbGFzcy5taW5pXT1cIm56U2l6ZSA9PT0gJ3NtYWxsJyAmJiAhbnpTaW1wbGVcIlxyXG4gID5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelNpbXBsZTsgZWxzZSBub3JtYWxUZW1wbGF0ZVwiPlxyXG4gICAgICA8bGlcclxuICAgICAgICBjbGFzcz1cImFudC1wYWdpbmF0aW9uLXByZXZcIlxyXG4gICAgICAgIFthdHRyLnRpdGxlXT1cImxvY2FsZS5wcmV2X3BhZ2VcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtcGFnaW5hdGlvbi1kaXNhYmxlZF09XCJpc0ZpcnN0SW5kZXhcIlxyXG4gICAgICAgIChjbGljayk9XCJqdW1wRGlmZigtMSlcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtUmVuZGVyXCJcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogJ3ByZScgfVwiXHJcbiAgICAgICAgPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBbYXR0ci50aXRsZV09XCJuelBhZ2VJbmRleCArICcvJyArIGxhc3RJbmRleFwiIGNsYXNzPVwiYW50LXBhZ2luYXRpb24tc2ltcGxlLXBhZ2VyXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAjc2ltcGxlUGFnZXJJbnB1dFxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cIm56UGFnZUluZGV4XCJcclxuICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cImhhbmRsZUtleURvd24oJGV2ZW50LCBzaW1wbGVQYWdlcklucHV0LCBmYWxzZSlcIlxyXG4gICAgICAgICAgc2l6ZT1cIjNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi1zbGFzaFwiPi88L3NwYW4+XHJcbiAgICAgICAge3sgbGFzdEluZGV4IH19XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIGNsYXNzPVwiYW50LXBhZ2luYXRpb24tbmV4dFwiXHJcbiAgICAgICAgW2F0dHIudGl0bGVdPVwibG9jYWxlLm5leHRfcGFnZVwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1wYWdpbmF0aW9uLWRpc2FibGVkXT1cImlzTGFzdEluZGV4XCJcclxuICAgICAgICAoY2xpY2spPVwianVtcERpZmYoMSlcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtUmVuZGVyXCJcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogJ25leHQnIH1cIlxyXG4gICAgICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGUgI25vcm1hbFRlbXBsYXRlPlxyXG4gICAgICA8bGkgY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi10b3RhbC10ZXh0XCIgKm5nSWY9XCJuelNob3dUb3RhbFwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpTaG93VG90YWxcIlxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBuelRvdGFsLCByYW5nZTogcmFuZ2VzIH1cIlxyXG4gICAgICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGlcclxuICAgICAgICBjbGFzcz1cImFudC1wYWdpbmF0aW9uLXByZXZcIlxyXG4gICAgICAgIFthdHRyLnRpdGxlXT1cImxvY2FsZS5wcmV2X3BhZ2VcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtcGFnaW5hdGlvbi1kaXNhYmxlZF09XCJpc0ZpcnN0SW5kZXhcIlxyXG4gICAgICAgIChjbGljayk9XCJqdW1wRGlmZigtMSlcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtUmVuZGVyXCJcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogJ3ByZScgfVwiXHJcbiAgICAgICAgPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIGNsYXNzPVwiYW50LXBhZ2luYXRpb24taXRlbVwiXHJcbiAgICAgICAgW2F0dHIudGl0bGVdPVwiZmlyc3RJbmRleFwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZlXT1cImlzRmlyc3RJbmRleFwiXHJcbiAgICAgICAgKGNsaWNrKT1cImp1bXBQYWdlKGZpcnN0SW5kZXgpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbVJlbmRlclwiXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6ICdwYWdlJywgcGFnZTogZmlyc3RJbmRleCB9XCJcclxuICAgICAgICA+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi1qdW1wLXByZXZcIlxyXG4gICAgICAgICpuZ0lmPVwibGFzdEluZGV4ID4gOSAmJiBuelBhZ2VJbmRleCAtIDMgPiBmaXJzdEluZGV4XCJcclxuICAgICAgICBbYXR0ci50aXRsZV09XCJsb2NhbGUucHJldl81XCJcclxuICAgICAgICAoY2xpY2spPVwianVtcERpZmYoLTUpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhIGNsYXNzPVwiYW50LXBhZ2luYXRpb24taXRlbS1saW5rXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBhZ2luYXRpb24taXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJkb3VibGUtbGVmdFwiIGNsYXNzPVwiYW50LXBhZ2luYXRpb24taXRlbS1saW5rLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXBhZ2luYXRpb24taXRlbS1lbGxpcHNpc1wiPuKAouKAouKAojwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi1pdGVtXCJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlc1wiXHJcbiAgICAgICAgW2F0dHIudGl0bGVdPVwicGFnZVwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZlXT1cIm56UGFnZUluZGV4ID09PSBwYWdlXCJcclxuICAgICAgICAoY2xpY2spPVwianVtcFBhZ2UocGFnZSlcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtUmVuZGVyXCJcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogJ3BhZ2UnLCBwYWdlOiBwYWdlIH1cIlxyXG4gICAgICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGlcclxuICAgICAgICBjbGFzcz1cImFudC1wYWdpbmF0aW9uLWp1bXAtbmV4dCBhbnQtcGFnaW5hdGlvbi1pdGVtLWxpbmstaWNvblwiXHJcbiAgICAgICAgW2F0dHIudGl0bGVdPVwibG9jYWxlLm5leHRfNVwiXHJcbiAgICAgICAgKGNsaWNrKT1cImp1bXBEaWZmKDUpXCJcclxuICAgICAgICAqbmdJZj1cImxhc3RJbmRleCA+IDkgJiYgbnpQYWdlSW5kZXggKyAzIDwgbGFzdEluZGV4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhIGNsYXNzPVwiYW50LXBhZ2luYXRpb24taXRlbS1saW5rXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBhZ2luYXRpb24taXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJkb3VibGUtcmlnaHRcIiBjbGFzcz1cImFudC1wYWdpbmF0aW9uLWl0ZW0tbGluay1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1wYWdpbmF0aW9uLWl0ZW0tZWxsaXBzaXNcIj7igKLigKLigKI8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIGNsYXNzPVwiYW50LXBhZ2luYXRpb24taXRlbVwiXHJcbiAgICAgICAgW2F0dHIudGl0bGVdPVwibGFzdEluZGV4XCJcclxuICAgICAgICAoY2xpY2spPVwianVtcFBhZ2UobGFzdEluZGV4KVwiXHJcbiAgICAgICAgKm5nSWY9XCJsYXN0SW5kZXggPiAwICYmIGxhc3RJbmRleCAhPT0gZmlyc3RJbmRleFwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZlXT1cImlzTGFzdEluZGV4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbVJlbmRlclwiXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6ICdwYWdlJywgcGFnZTogbGFzdEluZGV4IH1cIlxyXG4gICAgICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGlcclxuICAgICAgICBjbGFzcz1cImFudC1wYWdpbmF0aW9uLW5leHRcIlxyXG4gICAgICAgIFt0aXRsZV09XCJsb2NhbGUubmV4dF9wYWdlXCJcclxuICAgICAgICBbY2xhc3MuYW50LXBhZ2luYXRpb24tZGlzYWJsZWRdPVwiaXNMYXN0SW5kZXhcIlxyXG4gICAgICAgIChjbGljayk9XCJqdW1wRGlmZigxKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW1SZW5kZXJcIlxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiAnbmV4dCcgfVwiXHJcbiAgICAgICAgPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi1vcHRpb25zXCIgKm5nSWY9XCJuelNob3dRdWlja0p1bXBlciB8fCBuelNob3dTaXplQ2hhbmdlclwiPlxyXG4gICAgICAgIDxuei1zZWxlY3RcclxuICAgICAgICAgIGNsYXNzPVwiYW50LXBhZ2luYXRpb24tb3B0aW9ucy1zaXplLWNoYW5nZXJcIlxyXG4gICAgICAgICAgKm5nSWY9XCJuelNob3dTaXplQ2hhbmdlclwiXHJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJuekRpc2FibGVkXCJcclxuICAgICAgICAgIFtuelNpemVdPVwibnpTaXplXCJcclxuICAgICAgICAgIFtuZ01vZGVsXT1cIm56UGFnZVNpemVcIlxyXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bnotb3B0aW9uXHJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgbnpQYWdlU2l6ZU9wdGlvbnNcIlxyXG4gICAgICAgICAgICBbbnpMYWJlbF09XCJvcHRpb24gKyAnICcgKyBsb2NhbGUuaXRlbXNfcGVyX3BhZ2VcIlxyXG4gICAgICAgICAgICBbbnpWYWx1ZV09XCJvcHRpb25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9uei1vcHRpb24+XHJcbiAgICAgICAgICA8bnotb3B0aW9uXHJcbiAgICAgICAgICAgICpuZ0lmPVwic2hvd0FkZE9wdGlvblwiXHJcbiAgICAgICAgICAgIFtuekxhYmVsXT1cIm56UGFnZVNpemUgKyAnICcgKyBsb2NhbGUuaXRlbXNfcGVyX3BhZ2VcIlxyXG4gICAgICAgICAgICBbbnpWYWx1ZV09XCJuelBhZ2VTaXplXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvbnotb3B0aW9uPlxyXG4gICAgICAgIDwvbnotc2VsZWN0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi1vcHRpb25zLXF1aWNrLWp1bXBlclwiICpuZ0lmPVwibnpTaG93UXVpY2tKdW1wZXJcIj5cclxuICAgICAgICAgIHt7IGxvY2FsZS5qdW1wX3RvIH19XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgI3F1aWNrSnVtcGVySW5wdXRcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJoYW5kbGVLZXlEb3duKCRldmVudCwgcXVpY2tKdW1wZXJJbnB1dCwgdHJ1ZSlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt7IGxvY2FsZS5wYWdlIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICA8L3VsPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19