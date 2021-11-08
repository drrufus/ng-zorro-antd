(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/i18n'),require('@angular/common'),require('ng-zorro-antd/icon'),require('ng-zorro-antd/select'),require('@angular/forms'),exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/i18n'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/select')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/pagination', ['@angular/core','ng-zorro-antd/i18n','@angular/common','ng-zorro-antd/icon','ng-zorro-antd/select','@angular/forms','exports', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/i18n', '@angular/common', '@angular/forms', 'ng-zorro-antd/icon', 'ng-zorro-antd/select'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.i18n,global.ng.common,global.ngZorroAntd.icon,global.ngZorroAntd.select,global.ng.forms,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].pagination = {}), global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].i18n, global.ng.common, global.ng.forms, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].select));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,exports, core, rxjs, operators, core$1, i18n, common, forms, icon, select) { 
var _c0 = ["renderItemTemplate"];
function NzPaginationComponent_ng_template_0_a_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 3);
    ɵngcc0.ɵɵelement(1, "i", 4);
    ɵngcc0.ɵɵelementEnd();
} }
function NzPaginationComponent_ng_template_0_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 3);
    ɵngcc0.ɵɵelement(1, "i", 5);
    ɵngcc0.ɵɵelementEnd();
} }
function NzPaginationComponent_ng_template_0_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r4 = ɵngcc0.ɵɵnextContext().page;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(page_r4);
} }
function NzPaginationComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzPaginationComponent_ng_template_0_a_0_Template, 2, 0, "a", 2);
    ɵngcc0.ɵɵtemplate(1, NzPaginationComponent_ng_template_0_a_1_Template, 2, 0, "a", 2);
    ɵngcc0.ɵɵtemplate(2, NzPaginationComponent_ng_template_0_a_2_Template, 2, 1, "a", 1);
} if (rf & 2) {
    var type_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", type_r3 === "pre");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", type_r3 === "next");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", type_r3 == "page");
} }
function NzPaginationComponent_ng_container_2_ng_container_2_ng_template_2_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_container_2_ng_template_10_Template(rf, ctx) { }
var _c1 = function () { return { $implicit: "pre" }; };
var _c2 = function () { return { $implicit: "next" }; };
function NzPaginationComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "li", 9);
    ɵngcc0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_container_2_Template_li_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.jumpDiff(0 - 1); });
    ɵngcc0.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_container_2_ng_template_2_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "li", 11);
    ɵngcc0.ɵɵelementStart(4, "input", 12, 13);
    ɵngcc0.ɵɵlistener("keydown.enter", function NzPaginationComponent_ng_container_2_ng_container_2_Template_input_keydown_enter_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var _r13 = ɵngcc0.ɵɵreference(5); var ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.handleKeyDown($event, _r13, false); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "span", 14);
    ɵngcc0.ɵɵtext(7, "/");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "li", 15);
    ɵngcc0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_container_2_Template_li_click_9_listener() { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r18 = ɵngcc0.ɵɵnextContext(2); return ctx_r18.jumpDiff(1); });
    ɵngcc0.ɵɵtemplate(10, NzPaginationComponent_ng_container_2_ng_container_2_ng_template_10_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-pagination-disabled", ctx_r9.isFirstIndex);
    ɵngcc0.ɵɵattribute("title", ctx_r9.locale.prev_page);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r9.itemRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(14, _c1));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("title", ctx_r9.nzPageIndex + "/" + ctx_r9.lastIndex);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r9.nzDisabled)("value", ctx_r9.nzPageIndex);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r9.lastIndex, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-pagination-disabled", ctx_r9.isLastIndex);
    ɵngcc0.ɵɵattribute("title", ctx_r9.locale.next_page);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r9.itemRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(15, _c2));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_0_ng_template_1_Template(rf, ctx) { }
var _c3 = function (a0, a1) { return { $implicit: a0, range: a1 }; };
function NzPaginationComponent_ng_container_2_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 24);
    ɵngcc0.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_0_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r19 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r19.nzShowTotal)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c3, ctx_r19.nzTotal, ctx_r19.ranges));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_2_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_4_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template(rf, ctx) { if (rf & 1) {
    var _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 25);
    ɵngcc0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r30); var ctx_r29 = ɵngcc0.ɵɵnextContext(3); return ctx_r29.jumpDiff(0 - 5); });
    ɵngcc0.ɵɵelementStart(1, "a", 3);
    ɵngcc0.ɵɵelementStart(2, "div", 26);
    ɵngcc0.ɵɵelement(3, "i", 27);
    ɵngcc0.ɵɵelementStart(4, "span", 28);
    ɵngcc0.ɵɵtext(5, "\u2022\u2022\u2022");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r22 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("title", ctx_r22.locale.prev_5);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_6_ng_template_1_Template(rf, ctx) { }
var _c4 = function (a1) { return { $implicit: "page", page: a1 }; };
function NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 17);
    ɵngcc0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); var page_r31 = ctx.$implicit; var ctx_r33 = ɵngcc0.ɵɵnextContext(3); return ctx_r33.jumpPage(page_r31); });
    ɵngcc0.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_6_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r31 = ctx.$implicit;
    var ctx_r23 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassProp("ant-pagination-item-active", ctx_r23.nzPageIndex === page_r31);
    ɵngcc0.ɵɵattribute("title", page_r31);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r23.itemRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c4, page_r31));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r36 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 29);
    ɵngcc0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r36); var ctx_r35 = ɵngcc0.ɵɵnextContext(3); return ctx_r35.jumpDiff(5); });
    ɵngcc0.ɵɵelementStart(1, "a", 3);
    ɵngcc0.ɵɵelementStart(2, "div", 26);
    ɵngcc0.ɵɵelement(3, "i", 30);
    ɵngcc0.ɵɵelementStart(4, "span", 28);
    ɵngcc0.ɵɵtext(5, "\u2022\u2022\u2022");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r24 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("title", ctx_r24.locale.next_5);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_li_8_ng_template_1_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template(rf, ctx) { if (rf & 1) {
    var _r39 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 17);
    ɵngcc0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r39); var ctx_r38 = ɵngcc0.ɵɵnextContext(3); return ctx_r38.jumpPage(ctx_r38.lastIndex); });
    ɵngcc0.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_8_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r25 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassProp("ant-pagination-item-active", ctx_r25.isLastIndex);
    ɵngcc0.ɵɵattribute("title", ctx_r25.lastIndex);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r25.itemRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c4, ctx_r25.lastIndex));
} }
function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_10_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-option", 37);
} if (rf & 2) {
    var option_r44 = ctx.$implicit;
    var ctx_r42 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵproperty("nzLabel", option_r44 + " " + ctx_r42.locale.items_per_page)("nzValue", option_r44);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-option", 37);
} if (rf & 2) {
    var ctx_r43 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵproperty("nzLabel", ctx_r43.nzPageSize + " " + ctx_r43.locale.items_per_page)("nzValue", ctx_r43.nzPageSize);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template(rf, ctx) { if (rf & 1) {
    var _r46 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-select", 34);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template_nz_select_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r46); var ctx_r45 = ɵngcc0.ɵɵnextContext(4); return ctx_r45.onPageSizeChange($event); });
    ɵngcc0.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_1_Template, 1, 2, "nz-option", 35);
    ɵngcc0.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_2_Template, 1, 2, "nz-option", 36);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r40 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("nzDisabled", ctx_r40.nzDisabled)("nzSize", ctx_r40.nzSize)("ngModel", ctx_r40.nzPageSize);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r40.nzPageSizeOptions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r40.showAddOption);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r49 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 38);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "input", 39, 40);
    ɵngcc0.ɵɵlistener("keydown.enter", function NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template_input_keydown_enter_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r49); var _r47 = ɵngcc0.ɵɵreference(3); var ctx_r48 = ɵngcc0.ɵɵnextContext(4); return ctx_r48.handleKeyDown($event, _r47, true); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r41 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r41.locale.jump_to, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r41.nzDisabled);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r41.locale.page, " ");
} }
function NzPaginationComponent_ng_container_2_ng_template_3_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 31);
    ɵngcc0.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template, 3, 5, "nz-select", 32);
    ɵngcc0.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template, 5, 3, "div", 33);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r27 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.nzShowSizeChanger);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.nzShowQuickJumper);
} }
function NzPaginationComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    var _r51 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵtemplate(0, NzPaginationComponent_ng_container_2_ng_template_3_li_0_Template, 2, 5, "li", 16);
    ɵngcc0.ɵɵelementStart(1, "li", 9);
    ɵngcc0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r51); var ctx_r50 = ɵngcc0.ɵɵnextContext(2); return ctx_r50.jumpDiff(0 - 1); });
    ɵngcc0.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_2_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "li", 17);
    ɵngcc0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r51); var ctx_r52 = ɵngcc0.ɵɵnextContext(2); return ctx_r52.jumpPage(ctx_r52.firstIndex); });
    ɵngcc0.ɵɵtemplate(4, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_4_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template, 6, 1, "li", 18);
    ɵngcc0.ɵɵtemplate(6, NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template, 2, 7, "li", 19);
    ɵngcc0.ɵɵtemplate(7, NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template, 6, 1, "li", 20);
    ɵngcc0.ɵɵtemplate(8, NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template, 2, 7, "li", 21);
    ɵngcc0.ɵɵelementStart(9, "li", 22);
    ɵngcc0.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_9_listener() { ɵngcc0.ɵɵrestoreView(_r51); var ctx_r53 = ɵngcc0.ɵɵnextContext(2); return ctx_r53.jumpDiff(1); });
    ɵngcc0.ɵɵtemplate(10, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_10_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(11, NzPaginationComponent_ng_container_2_ng_template_3_div_11_Template, 3, 2, "div", 23);
} if (rf & 2) {
    var ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r11.nzShowTotal);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-pagination-disabled", ctx_r11.isFirstIndex);
    ɵngcc0.ɵɵattribute("title", ctx_r11.locale.prev_page);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r11.itemRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(21, _c1));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-pagination-item-active", ctx_r11.isFirstIndex);
    ɵngcc0.ɵɵattribute("title", ctx_r11.firstIndex);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r11.itemRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(22, _c4, ctx_r11.firstIndex));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r11.lastIndex > 9 && ctx_r11.nzPageIndex - 3 > ctx_r11.firstIndex);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r11.pages);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r11.lastIndex > 9 && ctx_r11.nzPageIndex + 3 < ctx_r11.lastIndex);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r11.lastIndex > 0 && ctx_r11.lastIndex !== ctx_r11.firstIndex);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-pagination-disabled", ctx_r11.isLastIndex);
    ɵngcc0.ɵɵproperty("title", ctx_r11.locale.next_page);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r11.itemRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(24, _c2));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r11.nzShowQuickJumper || ctx_r11.nzShowSizeChanger);
} }
function NzPaginationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "ul", 6);
    ɵngcc0.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_container_2_Template, 11, 16, "ng-container", 7);
    ɵngcc0.ɵɵtemplate(3, NzPaginationComponent_ng_container_2_ng_template_3_Template, 12, 25, "ng-template", null, 8, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r10 = ɵngcc0.ɵɵreference(4);
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-table-pagination", ctx_r2.nzInTable)("ant-pagination-simple", ctx_r2.nzSimple)("ant-pagination-disabled", ctx_r2.nzDisabled)("mini", ctx_r2.nzSize === "small" && !ctx_r2.nzSimple);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzSimple)("ngIfElse", _r10);
} }
'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function PaginationItemRenderContext() { }
    if (false) {
        /** @type {?} */
        PaginationItemRenderContext.prototype.$implicit;
        /** @type {?} */
        PaginationItemRenderContext.prototype.page;
    }
    var NzPaginationComponent = /** @class */ (function () {
        function NzPaginationComponent(i18n, cdr) {
            this.i18n = i18n;
            this.cdr = cdr;
            // tslint:disable-next-line:no-any
            this.locale = {};
            this.firstIndex = 1;
            this.pages = [];
            this.$destroy = new rxjs.Subject();
            this.nzPageSizeChange = new core.EventEmitter();
            this.nzPageIndexChange = new core.EventEmitter();
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
            get: /**
             * @return {?}
             */
            function () {
                return this.nzItemRender || this.nzItemRenderChild;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        NzPaginationComponent.prototype.validatePageIndex = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        /**
         * @param {?} page
         * @return {?}
         */
        NzPaginationComponent.prototype.updatePageIndexValue = /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            this.nzPageIndex = page;
            this.nzPageIndexChange.emit(this.nzPageIndex);
            this.buildIndexes();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzPaginationComponent.prototype.isPageIndexValid = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return this.validatePageIndex(value) === value;
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NzPaginationComponent.prototype.jumpPage = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (index !== this.nzPageIndex && !this.nzDisabled) {
                /** @type {?} */
                var pageIndex = this.validatePageIndex(index);
                if (pageIndex !== this.nzPageIndex) {
                    this.updatePageIndexValue(pageIndex);
                }
            }
        };
        /**
         * @param {?} diff
         * @return {?}
         */
        NzPaginationComponent.prototype.jumpDiff = /**
         * @param {?} diff
         * @return {?}
         */
        function (diff) {
            this.jumpPage(this.nzPageIndex + diff);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NzPaginationComponent.prototype.onPageSizeChange = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.nzPageSize = $event;
            this.nzPageSizeChange.emit($event);
            this.buildIndexes();
            if (this.nzPageIndex > this.lastIndex) {
                this.updatePageIndexValue(this.lastIndex);
            }
        };
        /**
         * @param {?} _
         * @param {?} input
         * @param {?} clearInputValue
         * @return {?}
         */
        NzPaginationComponent.prototype.handleKeyDown = /**
         * @param {?} _
         * @param {?} input
         * @param {?} clearInputValue
         * @return {?}
         */
        function (_, input, clearInputValue) {
            /** @type {?} */
            var target = input;
            /** @type {?} */
            var page = core$1.toNumber(target.value, this.nzPageIndex);
            if (core$1.isInteger(page) && this.isPageIndexValid(page) && page !== this.nzPageIndex) {
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
        /**
         * generate indexes list
         * @return {?}
         */
        NzPaginationComponent.prototype.buildIndexes = /**
         * generate indexes list
         * @return {?}
         */
        function () {
            /** @type {?} */
            var pages = [];
            if (this.lastIndex <= 9) {
                for (var i = 2; i <= this.lastIndex - 1; i++) {
                    pages.push(i);
                }
            }
            else {
                /** @type {?} */
                var current = +this.nzPageIndex;
                /** @type {?} */
                var left = Math.max(2, current - 2);
                /** @type {?} */
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
            get: /**
             * @return {?}
             */
            function () {
                return Math.ceil(this.nzTotal / this.nzPageSize);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "isLastIndex", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzPageIndex === this.lastIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "isFirstIndex", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzPageIndex === this.firstIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "ranges", {
            get: /**
             * @return {?}
             */
            function () {
                return [(this.nzPageIndex - 1) * this.nzPageSize + 1, Math.min(this.nzPageIndex * this.nzPageSize, this.nzTotal)];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "showAddOption", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzPageSizeOptions.indexOf(this.nzPageSize) === -1;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzPaginationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.$destroy)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.i18n.getLocaleData('Pagination');
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NzPaginationComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.$destroy.next();
            this.$destroy.complete();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzPaginationComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzTotal || changes.nzPageSize || changes.nzPageIndex) {
                this.buildIndexes();
            }
        };
        /** @nocollapse */
        NzPaginationComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef }
        ]; };
        NzPaginationComponent.propDecorators = {
            nzPageSizeChange: [{ type: core.Output }],
            nzPageIndexChange: [{ type: core.Output }],
            nzShowTotal: [{ type: core.Input }],
            nzInTable: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzPageSizeOptions: [{ type: core.Input }],
            nzItemRender: [{ type: core.Input }],
            nzItemRenderChild: [{ type: core.ViewChild, args: ['renderItemTemplate', { static: true },] }],
            nzDisabled: [{ type: core.Input }],
            nzShowSizeChanger: [{ type: core.Input }],
            nzHideOnSinglePage: [{ type: core.Input }],
            nzShowQuickJumper: [{ type: core.Input }],
            nzSimple: [{ type: core.Input }],
            nzTotal: [{ type: core.Input }],
            nzPageIndex: [{ type: core.Input }],
            nzPageSize: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzSimple", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzTotal", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzPageIndex", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzPageSize", void 0);
NzPaginationComponent.ɵfac = function NzPaginationComponent_Factory(t) { return new (t || NzPaginationComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzPaginationComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPaginationComponent, selectors: [["nz-pagination"]], viewQuery: function NzPaginationComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzItemRenderChild = _t.first);
    } }, inputs: { nzInTable: "nzInTable", nzSize: "nzSize", nzPageSizeOptions: "nzPageSizeOptions", nzDisabled: "nzDisabled", nzShowSizeChanger: "nzShowSizeChanger", nzHideOnSinglePage: "nzHideOnSinglePage", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple", nzTotal: "nzTotal", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize", nzShowTotal: "nzShowTotal", nzItemRender: "nzItemRender" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange" }, exportAs: ["nzPagination"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 1, consts: [["renderItemTemplate", ""], [4, "ngIf"], ["class", "ant-pagination-item-link", 4, "ngIf"], [1, "ant-pagination-item-link"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "right"], [1, "ant-pagination"], [4, "ngIf", "ngIfElse"], ["normalTemplate", ""], [1, "ant-pagination-prev", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "disabled", "value", "keydown.enter"], ["simplePagerInput", ""], [1, "ant-pagination-slash"], [1, "ant-pagination-next", 3, "click"], ["class", "ant-pagination-total-text", 4, "ngIf"], [1, "ant-pagination-item", 3, "click"], ["class", "ant-pagination-jump-prev", 3, "click", 4, "ngIf"], ["class", "ant-pagination-item", 3, "ant-pagination-item-active", "click", 4, "ngFor", "ngForOf"], ["class", "ant-pagination-jump-next ant-pagination-item-link-icon", 3, "click", 4, "ngIf"], ["class", "ant-pagination-item", 3, "ant-pagination-item-active", "click", 4, "ngIf"], [1, "ant-pagination-next", 3, "title", "click"], ["class", "ant-pagination-options", 4, "ngIf"], [1, "ant-pagination-total-text"], [1, "ant-pagination-jump-prev", 3, "click"], [1, "ant-pagination-item-container"], ["nz-icon", "", "nzType", "double-left", 1, "ant-pagination-item-link-icon"], [1, "ant-pagination-item-ellipsis"], [1, "ant-pagination-jump-next", "ant-pagination-item-link-icon", 3, "click"], ["nz-icon", "", "nzType", "double-right", 1, "ant-pagination-item-link-icon"], [1, "ant-pagination-options"], ["class", "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "ant-pagination-options-quick-jumper", 4, "ngIf"], [1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue", 4, "ngIf"], [3, "nzLabel", "nzValue"], [1, "ant-pagination-options-quick-jumper"], [3, "disabled", "keydown.enter"], ["quickJumperInput", ""]], template: function NzPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzPaginationComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_Template, 5, 10, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzHideOnSinglePage && ctx.nzTotal > ctx.nzPageSize || ctx.nzTotal && !ctx.nzHideOnSinglePage);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzIconDirective, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf, ɵngcc4.NzSelectComponent, ɵngcc5.NgControlStatus, ɵngcc5.NgModel, ɵngcc4.NzOptionComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPaginationComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-pagination',
                exportAs: 'nzPagination',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\">\r\n    <i nz-icon nzType=\"left\"></i>\r\n  </a>\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\">\r\n    <i nz-icon nzType=\"right\"></i>\r\n  </a>\r\n  <a *ngIf=\"type=='page'\">{{ page }}</a>\r\n</ng-template>\r\n<ng-container *ngIf=\"(nzHideOnSinglePage && (nzTotal > nzPageSize)) || (nzTotal && !nzHideOnSinglePage)\">\r\n  <ul class=\"ant-pagination\"\r\n      [class.ant-table-pagination]=\"nzInTable\"\r\n      [class.ant-pagination-simple]=\"nzSimple\"\r\n      [class.ant-pagination-disabled]=\"nzDisabled\"\r\n      [class.mini]=\"(nzSize === 'small') && !nzSimple\">\r\n    <ng-container *ngIf=\"nzSimple; else normalTemplate\">\r\n      <li class=\"ant-pagination-prev\"\r\n          [attr.title]=\"locale.prev_page\"\r\n          [class.ant-pagination-disabled]=\"isFirstIndex\"\r\n          (click)=\"jumpDiff(-1)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\r\n      </li>\r\n      <li [attr.title]=\"nzPageIndex+'/'+lastIndex\" class=\"ant-pagination-simple-pager\">\r\n        <input #simplePagerInput\r\n               [disabled]=\"nzDisabled\"\r\n               [value]=\"nzPageIndex\"\r\n               (keydown.enter)=\"handleKeyDown($event,simplePagerInput,false)\"\r\n               size=\"3\">\r\n        <span class=\"ant-pagination-slash\">/</span>\r\n        {{ lastIndex }}\r\n      </li>\r\n      <li class=\"ant-pagination-next\"\r\n          [attr.title]=\"locale.next_page\"\r\n          [class.ant-pagination-disabled]=\"isLastIndex\"\r\n          (click)=\"jumpDiff(1)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\r\n      </li>\r\n    </ng-container>\r\n    <ng-template #normalTemplate>\r\n      <li class=\"ant-pagination-total-text\" *ngIf=\"nzShowTotal\">\r\n        <ng-template [ngTemplateOutlet]=\"nzShowTotal\"\r\n                     [ngTemplateOutletContext]=\"{ $implicit: nzTotal,range:ranges }\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-prev\"\r\n          [attr.title]=\"locale.prev_page\"\r\n          [class.ant-pagination-disabled]=\"isFirstIndex\"\r\n          (click)=\"jumpDiff(-1)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-item\"\r\n          [attr.title]=\"firstIndex\"\r\n          [class.ant-pagination-item-active]=\"isFirstIndex\"\r\n          (click)=\"jumpPage(firstIndex)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\"\r\n                     [ngTemplateOutletContext]=\"{ $implicit: 'page',page: firstIndex }\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-jump-prev\"\r\n          *ngIf=\"(lastIndex > 9) && (nzPageIndex - 3 > firstIndex)\"\r\n          [attr.title]=\"locale.prev_5\"\r\n          (click)=\"jumpDiff(-5)\">\r\n        <a class=\"ant-pagination-item-link\">\r\n          <div class=\"ant-pagination-item-container\">\r\n            <i nz-icon nzType=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\r\n            <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li class=\"ant-pagination-item\"\r\n          *ngFor=\"let page of pages\"\r\n          [attr.title]=\"page\"\r\n          [class.ant-pagination-item-active]=\"nzPageIndex === page\"\r\n          (click)=\"jumpPage(page)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\"\r\n                     [ngTemplateOutletContext]=\"{ $implicit: 'page',page: page }\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-jump-next ant-pagination-item-link-icon\"\r\n          [attr.title]=\"locale.next_5\"\r\n          (click)=\"jumpDiff(5)\"\r\n          *ngIf=\"(lastIndex > 9) && (nzPageIndex + 3 < lastIndex)\">\r\n        <a class=\"ant-pagination-item-link\">\r\n          <div class=\"ant-pagination-item-container\">\r\n            <i nz-icon nzType=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\r\n            <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li class=\"ant-pagination-item\"\r\n          [attr.title]=\"lastIndex\"\r\n          (click)=\"jumpPage(lastIndex)\"\r\n          *ngIf=\"(lastIndex > 0) && (lastIndex !== firstIndex)\"\r\n          [class.ant-pagination-item-active]=\"isLastIndex\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\"\r\n                     [ngTemplateOutletContext]=\"{ $implicit: 'page',page: lastIndex }\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-next\"\r\n          [title]=\"locale.next_page\"\r\n          [class.ant-pagination-disabled]=\"isLastIndex\"\r\n          (click)=\"jumpDiff(1)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\r\n      </li>\r\n      <div class=\"ant-pagination-options\" *ngIf=\"nzShowQuickJumper || nzShowSizeChanger\">\r\n        <nz-select class=\"ant-pagination-options-size-changer\"\r\n                   *ngIf=\"nzShowSizeChanger\"\r\n                   [nzDisabled]=\"nzDisabled\"\r\n                   [nzSize]=\"nzSize\"\r\n                   [ngModel]=\"nzPageSize\"\r\n                   (ngModelChange)=\"onPageSizeChange($event)\">\r\n          <nz-option *ngFor=\"let option of nzPageSizeOptions\"\r\n                     [nzLabel]=\"option + ' ' + locale.items_per_page\"\r\n                     [nzValue]=\"option\">\r\n          </nz-option>\r\n          <nz-option *ngIf=\"showAddOption\"\r\n                     [nzLabel]=\"nzPageSize + ' ' + locale.items_per_page\"\r\n                     [nzValue]=\"nzPageSize\">\r\n          </nz-option>\r\n        </nz-select>\r\n        <div class=\"ant-pagination-options-quick-jumper\" *ngIf=\"nzShowQuickJumper\">\r\n          {{ locale.jump_to }}\r\n          <input #quickJumperInput\r\n                 [disabled]=\"nzDisabled\"\r\n                 (keydown.enter)=\"handleKeyDown($event,quickJumperInput,true)\">\r\n          {{ locale.page }}\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ul>\r\n</ng-container>\r\n"
            }]
    }], function () { return [{ type: ɵngcc1.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzPageSizeChange: [{
            type: core.Output
        }], nzPageIndexChange: [{
            type: core.Output
        }], nzInTable: [{
            type: core.Input
        }], nzSize: [{
            type: core.Input
        }], nzPageSizeOptions: [{
            type: core.Input
        }], nzDisabled: [{
            type: core.Input
        }], nzShowSizeChanger: [{
            type: core.Input
        }], nzHideOnSinglePage: [{
            type: core.Input
        }], nzShowQuickJumper: [{
            type: core.Input
        }], nzSimple: [{
            type: core.Input
        }], nzTotal: [{
            type: core.Input
        }], nzPageIndex: [{
            type: core.Input
        }], nzPageSize: [{
            type: core.Input
        }], nzShowTotal: [{
            type: core.Input
        }], nzItemRender: [{
            type: core.Input
        }], nzItemRenderChild: [{
            type: core.ViewChild,
            args: ['renderItemTemplate', { static: true }]
        }] }); })();
        return NzPaginationComponent;
    }());
    if (false) {
        /** @type {?} */
        NzPaginationComponent.prototype.locale;
        /** @type {?} */
        NzPaginationComponent.prototype.firstIndex;
        /** @type {?} */
        NzPaginationComponent.prototype.pages;
        /**
         * @type {?}
         * @private
         */
        NzPaginationComponent.prototype.$destroy;
        /** @type {?} */
        NzPaginationComponent.prototype.nzPageSizeChange;
        /** @type {?} */
        NzPaginationComponent.prototype.nzPageIndexChange;
        /** @type {?} */
        NzPaginationComponent.prototype.nzShowTotal;
        /** @type {?} */
        NzPaginationComponent.prototype.nzInTable;
        /** @type {?} */
        NzPaginationComponent.prototype.nzSize;
        /** @type {?} */
        NzPaginationComponent.prototype.nzPageSizeOptions;
        /** @type {?} */
        NzPaginationComponent.prototype.nzItemRender;
        /** @type {?} */
        NzPaginationComponent.prototype.nzItemRenderChild;
        /** @type {?} */
        NzPaginationComponent.prototype.nzDisabled;
        /** @type {?} */
        NzPaginationComponent.prototype.nzShowSizeChanger;
        /** @type {?} */
        NzPaginationComponent.prototype.nzHideOnSinglePage;
        /** @type {?} */
        NzPaginationComponent.prototype.nzShowQuickJumper;
        /** @type {?} */
        NzPaginationComponent.prototype.nzSimple;
        /** @type {?} */
        NzPaginationComponent.prototype.nzTotal;
        /** @type {?} */
        NzPaginationComponent.prototype.nzPageIndex;
        /** @type {?} */
        NzPaginationComponent.prototype.nzPageSize;
        /**
         * @type {?}
         * @private
         */
        NzPaginationComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        NzPaginationComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPaginationModule = /** @class */ (function () {
        function NzPaginationModule() {
        }
NzPaginationModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzPaginationModule });
NzPaginationModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzPaginationModule_Factory(t) { return new (t || NzPaginationModule)(); }, imports: [[common.CommonModule, forms.FormsModule, select.NzSelectModule, i18n.NzI18nModule, icon.NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzPaginationModule, { declarations: [NzPaginationComponent], imports: [ɵngcc2.CommonModule, ɵngcc5.FormsModule, ɵngcc4.NzSelectModule, ɵngcc1.NzI18nModule, ɵngcc3.NzIconModule], exports: [NzPaginationComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPaginationModule, [{
        type: core.NgModule,
        args: [{
                declarations: [NzPaginationComponent],
                exports: [NzPaginationComponent],
                imports: [common.CommonModule, forms.FormsModule, select.NzSelectModule, i18n.NzI18nModule, icon.NzIconModule]
            }]
    }], function () { return []; }, null); })();
        return NzPaginationModule;
    }());

    exports.NzPaginationComponent = NzPaginationComponent;
    exports.NzPaginationModule = NzPaginationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


//# sourceMappingURL=ng-zorro-antd-pagination.umd.js.map