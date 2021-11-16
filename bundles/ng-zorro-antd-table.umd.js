(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/i18n'),require('@angular/common'),require('ng-zorro-antd/checkbox'),require('@angular/forms'),require('ng-zorro-antd/dropdown'),require('ng-zorro-antd/icon'),require('ng-zorro-antd/menu'),require('ng-zorro-antd/radio'),require('ng-zorro-antd/core'),require('@angular/cdk/platform'),require('ng-zorro-antd/spin'),require('@angular/cdk/scrolling'),require('ng-zorro-antd/empty'),require('ng-zorro-antd/pagination'),exports, require('@angular/cdk/platform'), require('@angular/cdk/scrolling'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/dropdown'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/pagination'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/spin')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/table', ['@angular/core','ng-zorro-antd/i18n','@angular/common','ng-zorro-antd/checkbox','@angular/forms','ng-zorro-antd/dropdown','ng-zorro-antd/icon','ng-zorro-antd/menu','ng-zorro-antd/radio','ng-zorro-antd/core','@angular/cdk/platform','ng-zorro-antd/spin','@angular/cdk/scrolling','ng-zorro-antd/empty','ng-zorro-antd/pagination','exports', '@angular/cdk/platform', '@angular/cdk/scrolling', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/i18n', 'ng-zorro-antd/dropdown', '@angular/common', '@angular/forms', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/empty', 'ng-zorro-antd/icon', 'ng-zorro-antd/menu', 'ng-zorro-antd/pagination', 'ng-zorro-antd/radio', 'ng-zorro-antd/spin'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.i18n,global.ng.common,global.ngZorroAntd.checkbox,global.ng.forms,global.ngZorroAntd.dropdown,global.ngZorroAntd.icon,global.ngZorroAntd.menu,global.ngZorroAntd.radio,global.ngZorroAntd.core,global.ng.cdk.platform,global.ngZorroAntd.spin,global.ng.cdk.scrolling,global.ngZorroAntd.empty,global.ngZorroAntd.pagination,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].table = {}), global.ng.cdk.platform, global.ng.cdk.scrolling, global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].dropdown, global.ng.common, global.ng.forms, global['ng-zorro-antd'].checkbox, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].menu, global['ng-zorro-antd'].pagination, global['ng-zorro-antd'].radio, global['ng-zorro-antd'].spin));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,ɵngcc9,ɵngcc10,ɵngcc11,ɵngcc12,ɵngcc13,ɵngcc14,exports, platform, scrolling, core, rxjs, operators, core$1, i18n, dropdown, common, forms, checkbox, empty, icon, menu, pagination, radio, spin) { 
function NzThComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 7);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzThComponent_ng_template_0_Template_label_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.nzChecked = $event; })("ngModelChange", function NzThComponent_ng_template_0_Template_label_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.nzCheckedChange.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-table-selection-select-all-custom", ctx_r1.nzShowRowSelection);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r1.nzChecked)("nzDisabled", ctx_r1.nzDisabled)("nzIndeterminate", ctx_r1.nzIndeterminate);
} }
function NzThComponent_ng_container_5_ng_template_1_Template(rf, ctx) { }
function NzThComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzThComponent_ng_container_5_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function NzThComponent_div_6_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzThComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzThComponent_div_6_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function NzThComponent_div_6_li_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 15);
    ɵngcc0.ɵɵlistener("click", function NzThComponent_div_6_li_7_Template_li_click_0_listener() { var selection_r14 = ctx.$implicit; return selection_r14.onSelect(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var selection_r14 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(selection_r14.text);
} }
function NzThComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, NzThComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementStart(2, "div", 10);
    ɵngcc0.ɵɵelement(3, "i", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "nz-dropdown-menu", null, 12);
    ɵngcc0.ɵɵelementStart(6, "ul", 13);
    ɵngcc0.ɵɵtemplate(7, NzThComponent_div_6_li_7_Template, 2, 1, "li", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r11 = ɵngcc0.ɵɵreference(5);
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzShowCheckbox);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzDropdownMenu", _r11);
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.nzSelections);
} }
function NzThComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "div", 17);
    ɵngcc0.ɵɵelement(2, "i", 18);
    ɵngcc0.ɵɵelement(3, "i", 19);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassProp("on", ctx_r4.nzSort == "ascend")("off", ctx_r4.nzSort != "ascend");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("on", ctx_r4.nzSort == "descend")("off", ctx_r4.nzSort != "descend");
} }
function NzThComponent_ng_container_12_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 15);
    ɵngcc0.ɵɵlistener("click", function NzThComponent_ng_container_12_ng_container_5_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); var filter_r20 = ctx.$implicit; var ctx_r21 = ɵngcc0.ɵɵnextContext(3); return ctx_r21.checkMultiple(filter_r20); });
    ɵngcc0.ɵɵelementStart(1, "label", 26);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzThComponent_ng_container_12_ng_container_5_li_1_Template_label_ngModelChange_1_listener() { ɵngcc0.ɵɵrestoreView(_r22); var filter_r20 = ctx.$implicit; var ctx_r23 = ɵngcc0.ɵɵnextContext(3); return ctx_r23.checkMultiple(filter_r20); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var filter_r20 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", filter_r20.checked);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(filter_r20.text);
} }
function NzThComponent_ng_container_12_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzThComponent_ng_container_12_ng_container_5_li_1_Template, 4, 2, "li", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r17.multipleFilterList);
} }
function NzThComponent_ng_container_12_ng_container_6_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 15);
    ɵngcc0.ɵɵlistener("click", function NzThComponent_ng_container_12_ng_container_6_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r27); var filter_r25 = ctx.$implicit; var ctx_r26 = ɵngcc0.ɵɵnextContext(3); return ctx_r26.checkSingle(filter_r25); });
    ɵngcc0.ɵɵelementStart(1, "label", 27);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzThComponent_ng_container_12_ng_container_6_li_1_Template_label_ngModelChange_1_listener() { ɵngcc0.ɵɵrestoreView(_r27); var filter_r25 = ctx.$implicit; var ctx_r28 = ɵngcc0.ɵɵnextContext(3); return ctx_r28.checkSingle(filter_r25); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var filter_r25 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", filter_r25.checked);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(filter_r25.text);
} }
function NzThComponent_ng_container_12_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzThComponent_ng_container_12_ng_container_6_li_1_Template, 3, 2, "li", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r18.singleFilterList);
} }
function NzThComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    var _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "i", 20);
    ɵngcc0.ɵɵlistener("nzVisibleChange", function NzThComponent_ng_container_12_Template_i_nzVisibleChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); var ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.dropDownVisibleChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "nz-dropdown-menu", null, 21);
    ɵngcc0.ɵɵelementStart(4, "ul", 22);
    ɵngcc0.ɵɵtemplate(5, NzThComponent_ng_container_12_ng_container_5_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(6, NzThComponent_ng_container_12_ng_container_6_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "div", 23);
    ɵngcc0.ɵɵelementStart(8, "a", 24);
    ɵngcc0.ɵɵlistener("click", function NzThComponent_ng_container_12_Template_a_click_8_listener() { ɵngcc0.ɵɵrestoreView(_r30); var ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.hideDropDown(); });
    ɵngcc0.ɵɵelementStart(9, "span");
    ɵngcc0.ɵɵtext(10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(11, "a", 25);
    ɵngcc0.ɵɵlistener("click", function NzThComponent_ng_container_12_Template_a_click_11_listener() { ɵngcc0.ɵɵrestoreView(_r30); var ctx_r32 = ɵngcc0.ɵɵnextContext(); ctx_r32.reset(); return ctx_r32.hideDropDown(); });
    ɵngcc0.ɵɵelementStart(12, "span");
    ɵngcc0.ɵɵtext(13);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r16 = ɵngcc0.ɵɵreference(3);
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-table-filter-selected", ctx_r5.hasFilterValue)("ant-table-filter-open", ctx_r5.filterVisible);
    ɵngcc0.ɵɵproperty("nzClickHide", false)("nzDropdownMenu", _r16);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.nzFilterMultiple);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r5.nzFilterMultiple);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.locale.filterConfirm);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.locale.filterReset);
} }
var _c0 = ["*", [["nz-dropdown"]], [["", "nz-dropdown", ""]], [["", "nz-th-extra", ""]]];
var _c1 = ["*", "nz-dropdown", "[nz-dropdown]", "[nz-th-extra]"];
var _c2 = ["tableHeaderElement"];
var _c3 = ["tableBodyElement"];
var _c4 = ["tableMainElement"];
var _c5 = ["renderItemTemplate"];
function NzTableComponent_ng_template_0_a_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 13);
    ɵngcc0.ɵɵelement(1, "i", 14);
    ɵngcc0.ɵɵelementEnd();
} }
function NzTableComponent_ng_template_0_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 13);
    ɵngcc0.ɵɵelement(1, "i", 15);
    ɵngcc0.ɵɵelementEnd();
} }
function NzTableComponent_ng_template_0_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r16 = ɵngcc0.ɵɵnextContext().page;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(page_r16);
} }
function NzTableComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzTableComponent_ng_template_0_a_0_Template, 2, 0, "a", 12);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_template_0_a_1_Template, 2, 0, "a", 12);
    ɵngcc0.ɵɵtemplate(2, NzTableComponent_ng_template_0_a_2_Template, 2, 1, "a", 6);
} if (rf & 2) {
    var type_r15 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", type_r15 === "pre");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", type_r15 === "next");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", type_r15 == "page");
} }
function NzTableComponent_ng_template_2_col_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "col");
} if (rf & 2) {
    var width_r23 = ctx.$implicit;
    ɵngcc0.ɵɵstyleProp("width", width_r23)("min-width", width_r23);
} }
function NzTableComponent_ng_template_2_ng_container_2_col_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "col");
} if (rf & 2) {
    var th_r25 = ctx.$implicit;
    ɵngcc0.ɵɵstyleProp("width", th_r25.nzWidth)("min-width", th_r25.nzWidth);
} }
function NzTableComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_template_2_ng_container_2_col_1_Template, 1, 4, "col", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r22.listOfNzThComponent);
} }
function NzTableComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "colgroup");
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_template_2_col_1_Template, 1, 4, "col", 16);
    ɵngcc0.ɵɵtemplate(2, NzTableComponent_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.nzWidthConfig);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzWidthConfig && !ctx_r3.nzWidthConfig.length || !ctx_r3.nzWidthConfig);
} }
function NzTableComponent_ng_template_4_ng_template_0_Template(rf, ctx) { }
function NzTableComponent_ng_template_4_thead_1_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_template_4_thead_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "thead", 19);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_template_4_thead_1_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r27 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r27.nzTheadComponent == null ? null : ctx_r27.nzTheadComponent.templateRef);
} }
function NzTableComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzTableComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 17);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_template_4_thead_1_Template, 2, 1, "thead", 18);
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    var _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r5.nzScroll.y);
} }
function NzTableComponent_ng_template_6_div_0_ng_template_3_Template(rf, ctx) { }
function NzTableComponent_ng_template_6_div_0_thead_4_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_template_6_div_0_thead_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "thead", 19);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_template_6_div_0_thead_4_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r37 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r37.nzTheadComponent == null ? null : ctx_r37.nzTheadComponent.templateRef);
} }
function NzTableComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 25, 26);
    ɵngcc0.ɵɵelementStart(2, "table");
    ɵngcc0.ɵɵtemplate(3, NzTableComponent_ng_template_6_div_0_ng_template_3_Template, 0, 0, "ng-template", 17);
    ɵngcc0.ɵɵtemplate(4, NzTableComponent_ng_template_6_div_0_thead_4_Template, 2, 1, "thead", 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r29 = ɵngcc0.ɵɵnextContext(2);
    var _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r29.headerBottomStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵstyleProp("width", ctx_r29.nzScroll.x);
    ɵngcc0.ɵɵclassProp("ant-table-fixed", ctx_r29.nzScroll.x);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r29.nzScroll.y);
} }
function NzTableComponent_ng_template_6_div_1_ng_template_3_Template(rf, ctx) { }
function NzTableComponent_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 27, 28);
    ɵngcc0.ɵɵelementStart(2, "table");
    ɵngcc0.ɵɵtemplate(3, NzTableComponent_ng_template_6_div_1_ng_template_3_Template, 0, 0, "ng-template", 29);
    ɵngcc0.ɵɵprojection(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r30 = ɵngcc0.ɵɵnextContext(2);
    var _r4 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵstyleProp("max-height", ctx_r30.nzScroll.y)("overflow-y", ctx_r30.nzScroll.y ? "scroll" : "")("overflow-x", ctx_r30.nzScroll.x ? "auto" : "");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵstyleProp("width", ctx_r30.nzScroll.x);
    ɵngcc0.ɵɵclassProp("ant-table-fixed", ctx_r30.nzScroll.x);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r30.nzVirtualScroll)("ngTemplateOutlet", _r4);
} }
function NzTableComponent_ng_template_6_ng_template_2_ng_template_2_Template(rf, ctx) { }
function NzTableComponent_ng_template_6_ng_template_2_ng_container_4_ng_template_1_Template(rf, ctx) { }
var _c6 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzTableComponent_ng_template_6_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_template_6_ng_template_2_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 32);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r43 = ctx.$implicit;
    var i_r44 = ctx.index;
    var ctx_r42 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r42.nzVirtualScrollDirective == null ? null : ctx_r42.nzVirtualScrollDirective.templateRef)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c6, item_r43, i_r44));
} }
function NzTableComponent_ng_template_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 30);
    ɵngcc0.ɵɵelementStart(1, "table");
    ɵngcc0.ɵɵtemplate(2, NzTableComponent_ng_template_6_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 29);
    ɵngcc0.ɵɵelementStart(3, "tbody");
    ɵngcc0.ɵɵtemplate(4, NzTableComponent_ng_template_6_ng_template_2_ng_container_4_Template, 2, 5, "ng-container", 31);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r32 = ɵngcc0.ɵɵnextContext(2);
    var _r4 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵstyleProp("height", ctx_r32.nzScroll.y);
    ɵngcc0.ɵɵproperty("hidden", !ctx_r32.data.length)("itemSize", ctx_r32.nzVirtualItemSize)("maxBufferPx", ctx_r32.nzVirtualMaxBufferPx)("minBufferPx", ctx_r32.nzVirtualMinBufferPx);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r32.nzScroll.x);
    ɵngcc0.ɵɵclassProp("ant-table-fixed", ctx_r32.nzScroll.x);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r32.nzVirtualScroll)("ngTemplateOutlet", _r4);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx_r32.data)("cdkVirtualForTrackBy", ctx_r32.nzVirtualForTrackBy);
} }
function NzTableComponent_ng_template_6_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 33);
    ɵngcc0.ɵɵelement(1, "nz-embed-empty", 34);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r33 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzComponentName", "table")("specificContent", ctx_r33.nzNoResult);
} }
function NzTableComponent_ng_template_6_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r46 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r46.nzFooter);
} }
function NzTableComponent_ng_template_6_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 35);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_template_6_div_5_ng_container_1_Template, 2, 1, "ng-container", 36);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r34 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r34.nzFooter);
} }
function NzTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzTableComponent_ng_template_6_div_0_Template, 5, 7, "div", 20);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_template_6_div_1_Template, 5, 12, "div", 21);
    ɵngcc0.ɵɵtemplate(2, NzTableComponent_ng_template_6_ng_template_2_Template, 5, 14, "ng-template", null, 22, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(4, NzTableComponent_ng_template_6_div_4_Template, 2, 2, "div", 23);
    ɵngcc0.ɵɵtemplate(5, NzTableComponent_ng_template_6_div_5_Template, 2, 1, "div", 24);
} if (rf & 2) {
    var _r31 = ɵngcc0.ɵɵreference(3);
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.nzScroll.y);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r7.nzVirtualScroll)("ngIfElse", _r31);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.data.length === 0 && !ctx_r7.nzLoading && !ctx_r7.nzTemplateMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.nzFooter);
} }
function NzTableComponent_ng_template_8_nz_pagination_0_Template(rf, ctx) { if (rf & 1) {
    var _r49 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-pagination", 38);
    ɵngcc0.ɵɵlistener("nzPageSizeChange", function NzTableComponent_ng_template_8_nz_pagination_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r49); var ctx_r48 = ɵngcc0.ɵɵnextContext(2); return ctx_r48.emitPageSizeOrIndex($event, ctx_r48.nzPageIndex); })("nzPageIndexChange", function NzTableComponent_ng_template_8_nz_pagination_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r49); var ctx_r50 = ɵngcc0.ɵɵnextContext(2); return ctx_r50.emitPageSizeOrIndex(ctx_r50.nzPageSize, $event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r47 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzInTable", true)("nzShowSizeChanger", ctx_r47.nzShowSizeChanger)("nzPageSizeOptions", ctx_r47.nzPageSizeOptions)("nzItemRender", ctx_r47.itemRender)("nzShowQuickJumper", ctx_r47.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r47.nzHideOnSinglePage)("nzShowTotal", ctx_r47.nzShowTotal)("nzSize", ctx_r47.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r47.nzPageSize)("nzTotal", ctx_r47.nzTotal)("nzSimple", ctx_r47.nzSimple)("nzPageIndex", ctx_r47.nzPageIndex);
} }
function NzTableComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzTableComponent_ng_template_8_nz_pagination_0_Template, 1, 12, "nz-pagination", 37);
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.nzShowPagination && ctx_r9.data.length);
} }
function NzTableComponent_ng_container_11_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_container_11_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r8 = ɵngcc0.ɵɵreference(9);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function NzTableComponent_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r52 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r52.nzTitle);
} }
function NzTableComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 39);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_div_14_ng_container_1_Template, 2, 1, "ng-container", 36);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r12.nzTitle);
} }
function NzTableComponent_ng_container_16_ng_template_2_Template(rf, ctx) { }
function NzTableComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 40);
    ɵngcc0.ɵɵtemplate(2, NzTableComponent_ng_container_16_ng_template_2_Template, 0, 0, "ng-template", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r6 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function NzTableComponent_ng_container_17_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_container_17_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r8 = ɵngcc0.ɵɵreference(9);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
var _c7 = ["*"];
function NzTdComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("padding-left", ctx_r0.nzIndentSize, "px");
} }
function NzTdComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 5);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzTdComponent_label_1_Template_label_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.nzChecked = $event; })("ngModelChange", function NzTdComponent_label_1_Template_label_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.nzCheckedChange.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzDisabled", ctx_r1.nzDisabled)("ngModel", ctx_r1.nzChecked)("nzIndeterminate", ctx_r1.nzIndeterminate);
} }
function NzTdComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 6);
} }
function NzTdComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵlistener("click", function NzTdComponent_span_3_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.expandChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-table-row-expanded", ctx_r3.nzExpand)("ant-table-row-collapsed", !ctx_r3.nzExpand);
} }
var _c8 = ["contentTemplate"];
function NzTheadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
function NzTheadComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzTheadComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTheadComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
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
    function NzThItemInterface() { }
    if (false) {
        /** @type {?} */
        NzThItemInterface.prototype.text;
        /** @type {?} */
        NzThItemInterface.prototype.value;
        /** @type {?} */
        NzThItemInterface.prototype.checked;
    }
    var NzThComponent = /** @class */ (function () {
        function NzThComponent(cdr, i18n) {
            this.cdr = cdr;
            this.i18n = i18n;
            this.hasFilterValue = false;
            this.filterVisible = false;
            this.multipleFilterList = [];
            this.singleFilterList = [];
            /* tslint:disable-next-line:no-any */
            this.locale = (/** @type {?} */ ({}));
            this.nzWidthChange$ = new rxjs.Subject();
            this.destroy$ = new rxjs.Subject();
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
            this.nzCheckedChange = new core.EventEmitter();
            this.nzSortChange = new core.EventEmitter();
            this.nzSortChangeWithKey = new core.EventEmitter();
            /* tslint:disable-next-line:no-any */
            this.nzFilterChange = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        NzThComponent.prototype.updateSortValue = /**
         * @return {?}
         */
        function () {
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
        /**
         * @param {?} value
         * @return {?}
         */
        NzThComponent.prototype.setSortValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSort = value;
            this.nzSortChangeWithKey.emit({ key: this.nzSortKey, value: this.nzSort });
            this.nzSortChange.emit(this.nzSort);
        };
        Object.defineProperty(NzThComponent.prototype, "filterList", {
            get: /**
             * @return {?}
             */
            function () {
                return this.multipleFilterList.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.checked; })).map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.value; }));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzThComponent.prototype, "filterValue", {
            /* tslint:disable-next-line:no-any */
            get: /* tslint:disable-next-line:no-any */
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var checkedFilter = this.singleFilterList.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.checked; }));
                return checkedFilter ? checkedFilter.value : null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzThComponent.prototype.updateFilterStatus = /**
         * @return {?}
         */
        function () {
            if (this.nzFilterMultiple) {
                this.hasFilterValue = this.filterList.length > 0;
            }
            else {
                this.hasFilterValue = core$1.isNotNil(this.filterValue);
            }
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.search = /**
         * @return {?}
         */
        function () {
            this.updateFilterStatus();
            if (this.nzFilterMultiple) {
                this.nzFilterChange.emit(this.filterList);
            }
            else {
                this.nzFilterChange.emit(this.filterValue);
            }
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.reset = /**
         * @return {?}
         */
        function () {
            this.initMultipleFilterList(true);
            this.initSingleFilterList(true);
            this.hasFilterValue = false;
        };
        /**
         * @param {?} filter
         * @return {?}
         */
        NzThComponent.prototype.checkMultiple = /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            filter.checked = !filter.checked;
        };
        /**
         * @param {?} filter
         * @return {?}
         */
        NzThComponent.prototype.checkSingle = /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            this.singleFilterList.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item.checked = item === filter); }));
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.hideDropDown = /**
         * @return {?}
         */
        function () {
            this.nzDropdownMenuComponent.setVisibleStateWhen(false);
            this.filterVisible = false;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzThComponent.prototype.dropDownVisibleChange = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.filterVisible = value;
            if (!value) {
                this.search();
            }
        };
        /**
         * @param {?=} force
         * @return {?}
         */
        NzThComponent.prototype.initMultipleFilterList = /**
         * @param {?=} force
         * @return {?}
         */
        function (force) {
            var _this = this;
            this.multipleFilterList = this.nzFilters.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var checked = force ? false : !!item.byDefault;
                if (checked) {
                    _this.hasDefaultFilter = true;
                }
                return { text: item.text, value: item.value, checked: checked };
            }));
            this.checkDefaultFilters();
        };
        /**
         * @param {?=} force
         * @return {?}
         */
        NzThComponent.prototype.initSingleFilterList = /**
         * @param {?=} force
         * @return {?}
         */
        function (force) {
            var _this = this;
            this.singleFilterList = this.nzFilters.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var checked = force ? false : !!item.byDefault;
                if (checked) {
                    _this.hasDefaultFilter = true;
                }
                return { text: item.text, value: item.value, checked: checked };
            }));
            this.checkDefaultFilters();
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.checkDefaultFilters = /**
         * @return {?}
         */
        function () {
            if (!this.nzFilters || this.nzFilters.length === 0 || !this.hasDefaultFilter) {
                return;
            }
            this.updateFilterStatus();
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.marForCheck = /**
         * @return {?}
         */
        function () {
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.i18n.getLocaleData('Table');
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzThComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzFilters) {
                this.initMultipleFilterList();
                this.initSingleFilterList();
                this.updateFilterStatus();
            }
            if (changes.nzWidth) {
                this.nzWidthChange$.next(this.nzWidth);
            }
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */
        NzThComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: i18n.NzI18nService }
        ]; };
        NzThComponent.propDecorators = {
            nzDropdownMenuComponent: [{ type: core.ViewChild, args: [dropdown.NzDropdownMenuComponent, { static: false },] }],
            nzSelections: [{ type: core.Input }],
            nzChecked: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzIndeterminate: [{ type: core.Input }],
            nzSortKey: [{ type: core.Input }],
            nzFilterMultiple: [{ type: core.Input }],
            nzWidth: [{ type: core.Input }],
            nzLeft: [{ type: core.Input }],
            nzRight: [{ type: core.Input }],
            nzAlign: [{ type: core.Input }],
            nzSort: [{ type: core.Input }],
            nzFilters: [{ type: core.Input }],
            nzExpand: [{ type: core.Input }],
            nzShowCheckbox: [{ type: core.Input }],
            nzCustomFilter: [{ type: core.Input }],
            nzShowSort: [{ type: core.Input }],
            nzShowFilter: [{ type: core.Input }],
            nzShowRowSelection: [{ type: core.Input }],
            nzCheckedChange: [{ type: core.Output }],
            nzSortChange: [{ type: core.Output }],
            nzSortChangeWithKey: [{ type: core.Output }],
            nzFilterChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzShowCheckbox", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzCustomFilter", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzShowSort", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzShowFilter", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzShowRowSelection", void 0);
NzThComponent.ɵfac = function NzThComponent_Factory(t) { return new (t || NzThComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService)); };
NzThComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzThComponent, selectors: [["th", 9, "nz-disable-th", 3, "mat-sort-header", "", 3, "mat-header-cell", ""]], viewQuery: function NzThComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(dropdown.NzDropdownMenuComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzDropdownMenuComponent = _t.first);
    } }, hostVars: 24, hostBindings: function NzThComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("left", ctx.nzLeft)("right", ctx.nzRight)("text-align", ctx.nzAlign);
        ɵngcc0.ɵɵclassProp("ant-table-column-has-actions", ctx.nzShowFilter || ctx.nzShowSort || ctx.nzCustomFilter)("ant-table-column-has-filters", ctx.nzShowFilter || ctx.nzCustomFilter)("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-selection-column-custom", ctx.nzShowRowSelection)("ant-table-selection-column", ctx.nzShowCheckbox)("ant-table-expand-icon-th", ctx.nzExpand)("ant-table-th-left-sticky", ctx.nzLeft)("ant-table-th-right-sticky", ctx.nzRight)("ant-table-column-sort", ctx.nzSort === "descend" || ctx.nzSort === "ascend");
    } }, inputs: { nzSelections: "nzSelections", nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzFilterMultiple: "nzFilterMultiple", nzSort: "nzSort", nzFilters: "nzFilters", nzExpand: "nzExpand", nzShowCheckbox: "nzShowCheckbox", nzCustomFilter: "nzCustomFilter", nzShowSort: "nzShowSort", nzShowFilter: "nzShowFilter", nzShowRowSelection: "nzShowRowSelection", nzSortKey: "nzSortKey", nzWidth: "nzWidth", nzLeft: "nzLeft", nzRight: "nzRight", nzAlign: "nzAlign" }, outputs: { nzCheckedChange: "nzCheckedChange", nzSortChange: "nzSortChange", nzSortChangeWithKey: "nzSortChangeWithKey", nzFilterChange: "nzFilterChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 13, vars: 6, consts: [["checkboxTemplate", ""], [1, "ant-table-header-column"], [3, "click"], [1, "ant-table-column-title"], [4, "ngIf"], ["class", "ant-table-selection", 4, "ngIf"], ["class", "ant-table-column-sorter", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange"], [3, "ngTemplateOutlet"], [1, "ant-table-selection"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["selectionMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner", "ant-table-column-sorter-inner-full"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down"], ["nz-icon", "", "nz-dropdown", "", "nzType", "filter", "nzTheme", "fill", "nzTrigger", "click", "nzTableFilter", "", 3, "nzClickHide", "nzDropdownMenu", "nzVisibleChange"], ["filterMenu", "nzDropdownMenu"], ["nz-menu", ""], [1, "ant-table-filter-dropdown-btns"], [1, "ant-table-filter-dropdown-link", "confirm", 3, "click"], [1, "ant-table-filter-dropdown-link", "clear", 3, "click"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "ngModel", "ngModelChange"]], template: function NzThComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵtemplate(0, NzThComponent_ng_template_0_Template, 1, 5, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(2, "span", 1);
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵlistener("click", function NzThComponent_Template_div_click_3_listener() { return ctx.updateSortValue(); });
        ɵngcc0.ɵɵelementStart(4, "span", 3);
        ɵngcc0.ɵɵtemplate(5, NzThComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
        ɵngcc0.ɵɵtemplate(6, NzThComponent_div_6_Template, 8, 3, "div", 5);
        ɵngcc0.ɵɵprojection(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(8, 1);
        ɵngcc0.ɵɵtemplate(9, NzThComponent_div_9_Template, 4, 8, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(10, 2);
        ɵngcc0.ɵɵprojection(11, 3);
        ɵngcc0.ɵɵtemplate(12, NzThComponent_ng_container_12_Template, 14, 10, "ng-container", 4);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵclassProp("ant-table-column-sorters", ctx.nzShowSort);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowCheckbox && !ctx.nzShowRowSelection);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowRowSelection);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowSort);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowFilter);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzCheckboxComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel, ɵngcc2.NgTemplateOutlet, ɵngcc5.NzDropDownDirective, ɵngcc6.NzIconDirective, ɵngcc5.NzDropdownMenuComponent, ɵngcc7.NzMenuDirective, ɵngcc2.NgForOf, ɵngcc7.NzMenuItemDirective, ɵngcc8.NzRadioComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzThComponent, [{
        type: core.Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'th:not(.nz-disable-th):not([mat-sort-header]):not([mat-header-cell])',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "<ng-template #checkboxTemplate>\r\n  <label nz-checkbox\r\n         [class.ant-table-selection-select-all-custom]=\"nzShowRowSelection\"\r\n         [(ngModel)]=\"nzChecked\"\r\n         [nzDisabled]=\"nzDisabled\"\r\n         [nzIndeterminate]=\"nzIndeterminate\"\r\n         (ngModelChange)=\"nzCheckedChange.emit($event)\">\r\n  </label>\r\n</ng-template>\r\n<span class=\"ant-table-header-column\">\r\n  <div [class.ant-table-column-sorters]=\"nzShowSort\" (click)=\"updateSortValue()\">\r\n    <span class=\"ant-table-column-title\">\r\n      <ng-container *ngIf=\"nzShowCheckbox && !nzShowRowSelection\">\r\n        <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\r\n      </ng-container>\r\n      <div class=\"ant-table-selection\" *ngIf=\"nzShowRowSelection\">\r\n        <ng-container *ngIf=\"nzShowCheckbox\">\r\n          <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\r\n        </ng-container>\r\n        <div nz-dropdown class=\"ant-table-selection-down\" nzPlacement=\"bottomLeft\" [nzDropdownMenu]=\"selectionMenu\">\r\n          <i nz-icon nzType=\"down\"></i>\r\n        </div>\r\n        <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\r\n          <ul nz-menu class=\"ant-table-selection-menu\">\r\n            <li nz-menu-item\r\n                *ngFor=\"let selection of nzSelections\"\r\n                (click)=\"selection.onSelect()\">{{selection.text}}</li>\r\n          </ul>\r\n        </nz-dropdown-menu>\r\n      </div>\r\n      <ng-content></ng-content>\r\n    </span>\r\n    <ng-content select=\"nz-dropdown\"></ng-content>\r\n    <div class=\"ant-table-column-sorter\" *ngIf=\"nzShowSort\">\r\n      <div class=\"ant-table-column-sorter-inner ant-table-column-sorter-inner-full\">\r\n        <i nz-icon\r\n           nzType=\"caret-up\"\r\n           class=\"ant-table-column-sorter-up\"\r\n           [class.on]=\"nzSort == 'ascend'\"\r\n           [class.off]=\"nzSort != 'ascend'\"></i>\r\n        <i nz-icon\r\n           nzType=\"caret-down\"\r\n           class=\"ant-table-column-sorter-down\"\r\n           [class.on]=\"nzSort == 'descend'\"\r\n           [class.off]=\"nzSort != 'descend'\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</span>\r\n<ng-content select=\"[nz-dropdown]\"></ng-content>\r\n<ng-content select=\"[nz-th-extra]\"></ng-content>\r\n\r\n<ng-container *ngIf=\"nzShowFilter\">\r\n  <i nz-icon\r\n     nz-dropdown\r\n     nzType=\"filter\"\r\n     nzTheme=\"fill\"\r\n     nzTrigger=\"click\"\r\n     nzTableFilter\r\n     [nzClickHide]=\"false\"\r\n     [nzDropdownMenu]=\"filterMenu\"\r\n     [class.ant-table-filter-selected]=\"hasFilterValue\"\r\n     [class.ant-table-filter-open]=\"filterVisible\"\r\n     (nzVisibleChange)=\"dropDownVisibleChange($event)\"></i>\r\n  <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\r\n    <ul nz-menu>\r\n      <ng-container *ngIf=\"nzFilterMultiple\">\r\n        <li nz-menu-item *ngFor=\"let filter of multipleFilterList\" (click)=\"checkMultiple(filter)\">\r\n          <label nz-checkbox [ngModel]=\"filter.checked\" (ngModelChange)=\"checkMultiple(filter)\"></label>\r\n          <span>{{filter.text}}</span>\r\n        </li>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!nzFilterMultiple\">\r\n        <li nz-menu-item *ngFor=\"let filter of singleFilterList\" (click)=\"checkSingle(filter)\">\r\n          <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"checkSingle(filter)\">{{filter.text}}</label>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n    <div class=\"ant-table-filter-dropdown-btns\">\r\n      <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"hideDropDown()\">\r\n        <span>{{ locale.filterConfirm }}</span>\r\n      </a>\r\n      <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"reset();hideDropDown()\">\r\n        <span>{{ locale.filterReset }}</span>\r\n      </a>\r\n    </div>\r\n  </nz-dropdown-menu>\r\n</ng-container>\r\n",
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
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzI18nService }]; }, { nzSelections: [{
            type: core.Input
        }], nzChecked: [{
            type: core.Input
        }], nzDisabled: [{
            type: core.Input
        }], nzIndeterminate: [{
            type: core.Input
        }], nzFilterMultiple: [{
            type: core.Input
        }], nzSort: [{
            type: core.Input
        }], nzFilters: [{
            type: core.Input
        }], nzExpand: [{
            type: core.Input
        }], nzShowCheckbox: [{
            type: core.Input
        }], nzCustomFilter: [{
            type: core.Input
        }], nzShowSort: [{
            type: core.Input
        }], nzShowFilter: [{
            type: core.Input
        }], nzShowRowSelection: [{
            type: core.Input
        }], nzCheckedChange: [{
            type: core.Output
        }], nzSortChange: [{
            type: core.Output
        }], nzSortChangeWithKey: [{
            type: core.Output
        }], nzFilterChange: [{
            type: core.Output
        }], nzDropdownMenuComponent: [{
            type: core.ViewChild,
            args: [dropdown.NzDropdownMenuComponent, { static: false }]
        }], nzSortKey: [{
            type: core.Input
        }], nzWidth: [{
            type: core.Input
        }], nzLeft: [{
            type: core.Input
        }], nzRight: [{
            type: core.Input
        }], nzAlign: [{
            type: core.Input
        }] }); })();
        return NzThComponent;
    }());
    if (false) {
        /** @type {?} */
        NzThComponent.prototype.hasFilterValue;
        /** @type {?} */
        NzThComponent.prototype.filterVisible;
        /** @type {?} */
        NzThComponent.prototype.multipleFilterList;
        /** @type {?} */
        NzThComponent.prototype.singleFilterList;
        /** @type {?} */
        NzThComponent.prototype.locale;
        /** @type {?} */
        NzThComponent.prototype.nzWidthChange$;
        /**
         * @type {?}
         * @private
         */
        NzThComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzThComponent.prototype.hasDefaultFilter;
        /** @type {?} */
        NzThComponent.prototype.nzDropdownMenuComponent;
        /** @type {?} */
        NzThComponent.prototype.nzSelections;
        /** @type {?} */
        NzThComponent.prototype.nzChecked;
        /** @type {?} */
        NzThComponent.prototype.nzDisabled;
        /** @type {?} */
        NzThComponent.prototype.nzIndeterminate;
        /** @type {?} */
        NzThComponent.prototype.nzSortKey;
        /** @type {?} */
        NzThComponent.prototype.nzFilterMultiple;
        /** @type {?} */
        NzThComponent.prototype.nzWidth;
        /** @type {?} */
        NzThComponent.prototype.nzLeft;
        /** @type {?} */
        NzThComponent.prototype.nzRight;
        /** @type {?} */
        NzThComponent.prototype.nzAlign;
        /** @type {?} */
        NzThComponent.prototype.nzSort;
        /** @type {?} */
        NzThComponent.prototype.nzFilters;
        /** @type {?} */
        NzThComponent.prototype.nzExpand;
        /** @type {?} */
        NzThComponent.prototype.nzShowCheckbox;
        /** @type {?} */
        NzThComponent.prototype.nzCustomFilter;
        /** @type {?} */
        NzThComponent.prototype.nzShowSort;
        /** @type {?} */
        NzThComponent.prototype.nzShowFilter;
        /** @type {?} */
        NzThComponent.prototype.nzShowRowSelection;
        /** @type {?} */
        NzThComponent.prototype.nzCheckedChange;
        /** @type {?} */
        NzThComponent.prototype.nzSortChange;
        /** @type {?} */
        NzThComponent.prototype.nzSortChangeWithKey;
        /** @type {?} */
        NzThComponent.prototype.nzFilterChange;
        /**
         * @type {?}
         * @private
         */
        NzThComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzThComponent.prototype.i18n;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzVirtualScrollDirective = /** @class */ (function () {
        /* tslint:disable-next-line:no-any */
        function NzVirtualScrollDirective(templateRef) {
            this.templateRef = templateRef;
        }
        /** @nocollapse */
        NzVirtualScrollDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
NzVirtualScrollDirective.ɵfac = function NzVirtualScrollDirective_Factory(t) { return new (t || NzVirtualScrollDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NzVirtualScrollDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzVirtualScrollDirective, selectors: [["", "nz-virtual-scroll", ""]], exportAs: ["nzVirtualScroll"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzVirtualScrollDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nz-virtual-scroll]',
                exportAs: 'nzVirtualScroll'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
        return NzVirtualScrollDirective;
    }());
    if (false) {
        /** @type {?} */
        NzVirtualScrollDirective.prototype.templateRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'table';
    /**
     * @template T
     */
    var NzTableComponent = /** @class */ (function () {
        function NzTableComponent(nzConfigService, renderer, ngZone, cdr, i18n, platform, elementRef) {
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.cdr = cdr;
            this.i18n = i18n;
            this.platform = platform;
            /**
             * public data for ngFor tr
             */
            this.data = [];
            this.locale = {}; // tslint:disable-line:no-any
            this.lastScrollLeft = 0;
            this.headerBottomStyle = {};
            this.destroy$ = new rxjs.Subject();
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
            this.nzPageSizeChange = new core.EventEmitter();
            this.nzPageIndexChange = new core.EventEmitter();
            /* tslint:disable-next-line:no-any */
            this.nzCurrentPageDataChange = new core.EventEmitter();
            renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
        }
        Object.defineProperty(NzTableComponent.prototype, "itemRender", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzItemRender || this.itemRenderChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTableComponent.prototype, "tableBodyNativeElement", {
            get: /**
             * @return {?}
             */
            function () {
                return this.tableBodyElement && this.tableBodyElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTableComponent.prototype, "tableHeaderNativeElement", {
            get: /**
             * @return {?}
             */
            function () {
                return this.tableHeaderElement && this.tableHeaderElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTableComponent.prototype, "cdkVirtualScrollNativeElement", {
            get: /**
             * @return {?}
             */
            function () {
                return this.cdkVirtualScrollElement && this.cdkVirtualScrollElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTableComponent.prototype, "mixTableBodyNativeElement", {
            get: /**
             * @return {?}
             */
            function () {
                return this.tableBodyNativeElement || this.cdkVirtualScrollNativeElement;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} size
         * @param {?} index
         * @return {?}
         */
        NzTableComponent.prototype.emitPageSizeOrIndex = /**
         * @param {?} size
         * @param {?} index
         * @return {?}
         */
        function (size, index) {
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
        /**
         * @param {?} e
         * @return {?}
         */
        NzTableComponent.prototype.syncScrollTable = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.currentTarget === e.target) {
                /** @type {?} */
                var target = (/** @type {?} */ (e.target));
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
        /**
         * @return {?}
         */
        NzTableComponent.prototype.setScrollPositionClassName = /**
         * @return {?}
         */
        function () {
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
        /**
         * @param {?=} position
         * @return {?}
         */
        NzTableComponent.prototype.setScrollName = /**
         * @param {?=} position
         * @return {?}
         */
        function (position) {
            var _this = this;
            /** @type {?} */
            var prefix = 'ant-table-scroll-position';
            /** @type {?} */
            var classList = ['left', 'right', 'middle'];
            classList.forEach((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                _this.renderer.removeClass(_this.tableMainElement.nativeElement, prefix + "-" + name);
            }));
            if (position) {
                this.renderer.addClass(this.tableMainElement.nativeElement, prefix + "-" + position);
            }
        };
        /**
         * @return {?}
         */
        NzTableComponent.prototype.fitScrollBar = /**
         * @return {?}
         */
        function () {
            if (this.nzScroll.y) {
                /** @type {?} */
                var scrollbarWidth = core$1.measureScrollbar('vertical');
                /** @type {?} */
                var scrollbarWidthOfHeader = core$1.measureScrollbar('horizontal', 'ant-table');
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
        /**
         * @param {?=} isPageSizeOrDataChange
         * @return {?}
         */
        NzTableComponent.prototype.updateFrontPaginationDataIfNeeded = /**
         * @param {?=} isPageSizeOrDataChange
         * @return {?}
         */
        function (isPageSizeOrDataChange) {
            var _this = this;
            if (isPageSizeOrDataChange === void 0) { isPageSizeOrDataChange = false; }
            /** @type {?} */
            var data = this.nzData || [];
            if (this.nzFrontPagination) {
                this.nzTotal = data.length;
                if (isPageSizeOrDataChange) {
                    /** @type {?} */
                    var maxPageIndex = Math.ceil(data.length / this.nzPageSize) || 1;
                    /** @type {?} */
                    var pageIndex_1 = this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex;
                    if (pageIndex_1 !== this.nzPageIndex) {
                        this.nzPageIndex = pageIndex_1;
                        Promise.resolve().then((/**
                         * @return {?}
                         */
                        function () { return _this.nzPageIndexChange.emit(pageIndex_1); }));
                    }
                }
                data = data.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
            }
            this.data = __spread(data);
            this.nzCurrentPageDataChange.emit(this.data);
        };
        /**
         * @return {?}
         */
        NzTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.i18n.getLocaleData('Table');
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
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
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return _this.setScrollPositionClassName(); }));
                }
            }
            if (changes.nzPageIndex || changes.nzPageSize || changes.nzFrontPagination || changes.nzData) {
                this.updateFrontPaginationDataIfNeeded(!!(changes.nzPageSize || changes.nzData));
            }
        };
        /**
         * @return {?}
         */
        NzTableComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.setScrollPositionClassName(); }));
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                rxjs.merge(_this.tableHeaderNativeElement ? rxjs.fromEvent(_this.tableHeaderNativeElement, 'scroll') : rxjs.EMPTY, _this.mixTableBodyNativeElement ? rxjs.fromEvent(_this.mixTableBodyNativeElement, 'scroll') : rxjs.EMPTY)
                    .pipe(operators.takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.syncScrollTable(data);
                }));
                rxjs.fromEvent(window, 'resize')
                    .pipe(operators.startWith(true), operators.takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.fitScrollBar();
                    _this.setScrollPositionClassName();
                }));
            }));
        };
        /**
         * @return {?}
         */
        NzTableComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.listOfNzThComponent.changes
                .pipe(operators.startWith(true), operators.flatMap((/**
             * @return {?}
             */
            function () {
                return rxjs.merge.apply(void 0, __spread([_this.listOfNzThComponent.changes], _this.listOfNzThComponent.map((/**
                 * @param {?} th
                 * @return {?}
                 */
                function (th) { return th.nzWidthChange$; }))));
            })), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NzTableComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */
        NzTableComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.Renderer2 },
            { type: core.NgZone },
            { type: core.ChangeDetectorRef },
            { type: i18n.NzI18nService },
            { type: platform.Platform },
            { type: core.ElementRef }
        ]; };
        NzTableComponent.propDecorators = {
            listOfNzThComponent: [{ type: core.ContentChildren, args: [NzThComponent, { descendants: true },] }],
            tableHeaderElement: [{ type: core.ViewChild, args: ['tableHeaderElement', { static: false, read: core.ElementRef },] }],
            tableBodyElement: [{ type: core.ViewChild, args: ['tableBodyElement', { static: false, read: core.ElementRef },] }],
            tableMainElement: [{ type: core.ViewChild, args: ['tableMainElement', { static: false, read: core.ElementRef },] }],
            cdkVirtualScrollElement: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport, { static: false, read: core.ElementRef },] }],
            cdkVirtualScrollViewport: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport, { static: false, read: scrolling.CdkVirtualScrollViewport },] }],
            nzVirtualScrollDirective: [{ type: core.ContentChild, args: [NzVirtualScrollDirective, { static: false },] }],
            nzSize: [{ type: core.Input }],
            nzShowTotal: [{ type: core.Input }],
            nzPageSizeOptions: [{ type: core.Input }],
            nzVirtualScroll: [{ type: core.Input }],
            nzVirtualItemSize: [{ type: core.Input }],
            nzVirtualMaxBufferPx: [{ type: core.Input }],
            nzVirtualMinBufferPx: [{ type: core.Input }],
            nzVirtualForTrackBy: [{ type: core.Input }],
            nzLoadingDelay: [{ type: core.Input }],
            nzLoadingIndicator: [{ type: core.Input }],
            nzTotal: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }],
            nzFooter: [{ type: core.Input }],
            nzNoResult: [{ type: core.Input }],
            nzWidthConfig: [{ type: core.Input }],
            nzPageIndex: [{ type: core.Input }],
            nzPageSize: [{ type: core.Input }],
            nzData: [{ type: core.Input }],
            nzPaginationPosition: [{ type: core.Input }],
            nzScroll: [{ type: core.Input }],
            nzItemRender: [{ type: core.Input }],
            itemRenderChild: [{ type: core.ViewChild, args: ['renderItemTemplate', { static: true },] }],
            nzFrontPagination: [{ type: core.Input }],
            nzTemplateMode: [{ type: core.Input }],
            nzBordered: [{ type: core.Input }],
            nzShowPagination: [{ type: core.Input }],
            nzLoading: [{ type: core.Input }],
            nzShowSizeChanger: [{ type: core.Input }],
            nzHideOnSinglePage: [{ type: core.Input }],
            nzShowQuickJumper: [{ type: core.Input }],
            nzSimple: [{ type: core.Input }],
            nzPageSizeChange: [{ type: core.Output }],
            nzPageIndexChange: [{ type: core.Output }],
            nzCurrentPageDataChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", String)
        ], NzTableComponent.prototype, "nzSize", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzVirtualScroll", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzVirtualItemSize", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzVirtualMaxBufferPx", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzVirtualMinBufferPx", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzFrontPagination", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzTemplateMode", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzBordered", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzShowPagination", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzLoading", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzSimple", void 0);
NzTableComponent.ɵfac = function NzTableComponent_Factory(t) { return new (t || NzTableComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc9.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc10.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTableComponent, selectors: [["nz-table"]], contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzVirtualScrollDirective, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzThComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzVirtualScrollDirective = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzThComponent = _t);
    } }, viewQuery: function NzTableComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c2, true, core.ElementRef);
        ɵngcc0.ɵɵviewQuery(_c3, true, core.ElementRef);
        ɵngcc0.ɵɵviewQuery(_c4, true, core.ElementRef);
        ɵngcc0.ɵɵviewQuery(scrolling.CdkVirtualScrollViewport, true, core.ElementRef);
        ɵngcc0.ɵɵviewQuery(scrolling.CdkVirtualScrollViewport, true, scrolling.CdkVirtualScrollViewport);
        ɵngcc0.ɵɵstaticViewQuery(_c5, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tableHeaderElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tableBodyElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tableMainElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkVirtualScrollElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.itemRenderChild = _t.first);
    } }, hostVars: 2, hostBindings: function NzTableComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-table-empty", ctx.data.length === 0 && !ctx.nzTemplateMode);
    } }, inputs: { nzPageSizeOptions: "nzPageSizeOptions", nzVirtualScroll: "nzVirtualScroll", nzVirtualItemSize: "nzVirtualItemSize", nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx", nzVirtualMinBufferPx: "nzVirtualMinBufferPx", nzLoadingDelay: "nzLoadingDelay", nzTotal: "nzTotal", nzWidthConfig: "nzWidthConfig", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize", nzData: "nzData", nzPaginationPosition: "nzPaginationPosition", nzScroll: "nzScroll", nzFrontPagination: "nzFrontPagination", nzTemplateMode: "nzTemplateMode", nzShowPagination: "nzShowPagination", nzLoading: "nzLoading", nzSize: "nzSize", nzShowTotal: "nzShowTotal", nzVirtualForTrackBy: "nzVirtualForTrackBy", nzLoadingIndicator: "nzLoadingIndicator", nzTitle: "nzTitle", nzFooter: "nzFooter", nzNoResult: "nzNoResult", nzItemRender: "nzItemRender", nzBordered: "nzBordered", nzShowSizeChanger: "nzShowSizeChanger", nzHideOnSinglePage: "nzHideOnSinglePage", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange", nzCurrentPageDataChange: "nzCurrentPageDataChange" }, exportAs: ["nzTable"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c7, decls: 18, vars: 18, consts: [["renderItemTemplate", ""], ["colGroupTemplate", ""], ["headerTemplate", ""], ["tableInnerTemplate", ""], ["paginationTemplate", ""], [3, "nzDelay", "nzSpinning", "nzIndicator"], [4, "ngIf"], [1, "ant-table"], ["tableMainElement", ""], ["class", "ant-table-title", 4, "ngIf"], [1, "ant-table-content"], [4, "ngIf", "ngIfElse"], ["class", "ant-pagination-item-link", 4, "ngIf"], [1, "ant-pagination-item-link"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "right"], [3, "width", "minWidth", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-table-thead", 4, "ngIf"], [1, "ant-table-thead"], ["class", "ant-table-header ant-table-hide-scrollbar", 3, "ngStyle", 4, "ngIf"], ["class", "ant-table-body", 3, "maxHeight", "overflow-y", "overflow-x", 4, "ngIf", "ngIfElse"], ["scrollViewTpl", ""], ["class", "ant-table-placeholder", 4, "ngIf"], ["class", "ant-table-footer", 4, "ngIf"], [1, "ant-table-header", "ant-table-hide-scrollbar", 3, "ngStyle"], ["tableHeaderElement", ""], [1, "ant-table-body"], ["tableBodyElement", ""], [3, "ngIf", "ngTemplateOutlet"], [1, "ant-table-body", 3, "hidden", "itemSize", "maxBufferPx", "minBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-table-placeholder"], [3, "nzComponentName", "specificContent"], [1, "ant-table-footer"], [4, "nzStringTemplateOutlet"], [3, "nzInTable", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange", 4, "ngIf"], [3, "nzInTable", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange"], [1, "ant-table-title"], [1, "ant-table-scroll"]], template: function NzTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzTableComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzTableComponent_ng_template_2_Template, 3, 2, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(4, NzTableComponent_ng_template_4_Template, 2, 2, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(6, NzTableComponent_ng_template_6_Template, 6, 5, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(8, NzTableComponent_ng_template_8_Template, 1, 1, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(10, "nz-spin", 5);
        ɵngcc0.ɵɵtemplate(11, NzTableComponent_ng_container_11_Template, 2, 1, "ng-container", 6);
        ɵngcc0.ɵɵelementStart(12, "div", 7, 8);
        ɵngcc0.ɵɵtemplate(14, NzTableComponent_div_14_Template, 2, 1, "div", 9);
        ɵngcc0.ɵɵelementStart(15, "div", 10);
        ɵngcc0.ɵɵtemplate(16, NzTableComponent_ng_container_16_Template, 3, 1, "ng-container", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(17, NzTableComponent_ng_container_17_Template, 2, 1, "ng-container", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r6 = ɵngcc0.ɵɵreference(7);
        ɵngcc0.ɵɵadvance(10);
        ɵngcc0.ɵɵproperty("nzDelay", ctx.nzLoadingDelay)("nzSpinning", ctx.nzLoading)("nzIndicator", ctx.nzLoadingIndicator);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "top");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ant-table-fixed-header", ctx.nzScroll.x || ctx.nzScroll.y)("ant-table-bordered", ctx.nzBordered)("ant-table-default", ctx.nzSize === "default")("ant-table-middle", ctx.nzSize === "middle")("ant-table-small", ctx.nzSize === "small");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzScroll.x || ctx.nzScroll.y)("ngIfElse", _r6);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "bottom");
    } }, directives: function () { return [ɵngcc11.NzSpinComponent, ɵngcc2.NgIf, ɵngcc6.NzIconDirective, ɵngcc2.NgForOf, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgStyle, ɵngcc12.CdkVirtualScrollViewport, ɵngcc12.CdkFixedSizeVirtualScroll, NzTbodyDirective, ɵngcc12.CdkVirtualForOf, ɵngcc13.NzEmbedEmptyComponent, ɵngcc9.NzStringTemplateOutletDirective, ɵngcc14.NzPaginationComponent]; }, styles: ["\n      nz-table {\n        display: block;\n      }\n\n      cdk-virtual-scroll-viewport.ant-table-body {\n        overflow-y: scroll;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTableComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-table',
                exportAs: 'nzTable',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\"><i nz-icon nzType=\"left\"></i></a>\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\"><i nz-icon nzType=\"right\"></i></a>\r\n  <a *ngIf=\"type=='page'\">{{ page }}</a>\r\n</ng-template>\r\n<ng-template #colGroupTemplate>\r\n  <colgroup>\r\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of nzWidthConfig\">\r\n    <ng-container *ngIf=\"(nzWidthConfig && !nzWidthConfig.length) || !nzWidthConfig\">\r\n      <col [style.width]=\"th.nzWidth\" [style.minWidth]=\"th.nzWidth\" *ngFor=\"let th of listOfNzThComponent\">\r\n    </ng-container>\r\n  </colgroup>\r\n</ng-template>\r\n<ng-template #headerTemplate>\r\n  <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\r\n  <thead class=\"ant-table-thead\" *ngIf=\"!nzScroll.y\">\r\n    <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.templateRef\"></ng-template>\r\n  </thead>\r\n</ng-template>\r\n<ng-template #tableInnerTemplate>\r\n  <div #tableHeaderElement\r\n    *ngIf=\"nzScroll.y\"\r\n    [ngStyle]=\"headerBottomStyle\"\r\n    class=\"ant-table-header ant-table-hide-scrollbar\">\r\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\r\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\r\n      <thead class=\"ant-table-thead\" *ngIf=\"nzScroll.y\">\r\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.templateRef\"></ng-template>\r\n      </thead>\r\n    </table>\r\n  </div>\r\n  <div #tableBodyElement *ngIf=\"!nzVirtualScroll;else scrollViewTpl\"\r\n    class=\"ant-table-body\"\r\n    [style.maxHeight]=\"nzScroll.y\"\r\n    [style.overflow-y]=\"nzScroll.y ? 'scroll' : ''\"\r\n    [style.overflow-x]=\"nzScroll.x ? 'auto' : ''\">\r\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\r\n      <ng-template [ngIf]=\"!nzVirtualScroll\" [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\r\n      <ng-content></ng-content>\r\n    </table>\r\n  </div>\r\n  <ng-template #scrollViewTpl>\r\n    <cdk-virtual-scroll-viewport\r\n      class=\"ant-table-body\"\r\n      [hidden]=\"!data.length\"\r\n      [itemSize]=\"nzVirtualItemSize\"\r\n      [maxBufferPx]=\"nzVirtualMaxBufferPx\"\r\n      [minBufferPx]=\"nzVirtualMinBufferPx\"\r\n      [style.height]=\"nzScroll.y\">\r\n      <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\r\n        <ng-template [ngIf]=\"nzVirtualScroll\" [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\r\n        <tbody>\r\n          <ng-container *cdkVirtualFor=\"let item of data; let i = index; trackBy:nzVirtualForTrackBy;\">\r\n            <ng-template [ngTemplateOutlet]=\"nzVirtualScrollDirective?.templateRef\" [ngTemplateOutletContext]=\"{$implicit:item, index:i}\"></ng-template>\r\n          </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </cdk-virtual-scroll-viewport>\r\n  </ng-template>\r\n  <div class=\"ant-table-placeholder\" *ngIf=\"data.length === 0 && !nzLoading && !nzTemplateMode\">\r\n    <nz-embed-empty [nzComponentName]=\"'table'\" [specificContent]=\"nzNoResult\"></nz-embed-empty>\r\n  </div>\r\n  <div class=\"ant-table-footer\" *ngIf=\"nzFooter\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\r\n  </div>\r\n</ng-template>\r\n<ng-template #paginationTemplate>\r\n  <nz-pagination *ngIf=\"nzShowPagination && data.length\"\r\n    [nzInTable]=\"true\"\r\n    [nzShowSizeChanger]=\"nzShowSizeChanger\"\r\n    [nzPageSizeOptions]=\"nzPageSizeOptions\"\r\n    [nzItemRender]=\"itemRender\"\r\n    [nzShowQuickJumper]=\"nzShowQuickJumper\"\r\n    [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\r\n    [nzShowTotal]=\"nzShowTotal\"\r\n    [nzSize]=\"nzSize === 'default' ? 'default' : 'small'\"\r\n    [nzPageSize]=\"nzPageSize\"\r\n    [nzTotal]=\"nzTotal\"\r\n    [nzSimple]=\"nzSimple\"\r\n    [nzPageIndex]=\"nzPageIndex\"\r\n    (nzPageSizeChange)=\"emitPageSizeOrIndex($event,nzPageIndex)\"\r\n    (nzPageIndexChange)=\"emitPageSizeOrIndex(nzPageSize,$event)\">\r\n  </nz-pagination>\r\n</ng-template>\r\n<nz-spin [nzDelay]=\"nzLoadingDelay\" [nzSpinning]=\"nzLoading\" [nzIndicator]=\"nzLoadingIndicator\">\r\n  <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'top'\">\r\n    <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\r\n  </ng-container>\r\n  <div #tableMainElement\r\n    class=\"ant-table\"\r\n    [class.ant-table-fixed-header]=\"nzScroll.x || nzScroll.y\"\r\n    [class.ant-table-bordered]=\"nzBordered\"\r\n    [class.ant-table-default]=\"nzSize === 'default'\"\r\n    [class.ant-table-middle]=\"nzSize === 'middle'\"\r\n    [class.ant-table-small]=\"nzSize === 'small'\">\r\n    <div class=\"ant-table-title\" *ngIf=\"nzTitle\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-table-content\">\r\n      <ng-container *ngIf=\"nzScroll.x || nzScroll.y; else tableInnerTemplate\">\r\n        <div class=\"ant-table-scroll\">\r\n          <ng-template [ngTemplateOutlet]=\"tableInnerTemplate\"></ng-template>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'\">\r\n    <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\r\n  </ng-container>\r\n</nz-spin>\r\n",
                host: {
                    '[class.ant-table-empty]': 'data.length === 0 && !nzTemplateMode'
                },
                styles: ["\n      nz-table {\n        display: block;\n      }\n\n      cdk-virtual-scroll-viewport.ant-table-body {\n        overflow-y: scroll;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc9.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzI18nService }, { type: ɵngcc10.Platform }, { type: ɵngcc0.ElementRef }]; }, { nzPageSizeOptions: [{
            type: core.Input
        }], nzVirtualScroll: [{
            type: core.Input
        }], nzVirtualItemSize: [{
            type: core.Input
        }], nzVirtualMaxBufferPx: [{
            type: core.Input
        }], nzVirtualMinBufferPx: [{
            type: core.Input
        }], nzLoadingDelay: [{
            type: core.Input
        }], nzTotal: [{
            type: core.Input
        }], nzWidthConfig: [{
            type: core.Input
        }], nzPageIndex: [{
            type: core.Input
        }], nzPageSize: [{
            type: core.Input
        }], nzData: [{
            type: core.Input
        }], nzPaginationPosition: [{
            type: core.Input
        }], nzScroll: [{
            type: core.Input
        }], nzFrontPagination: [{
            type: core.Input
        }], nzTemplateMode: [{
            type: core.Input
        }], nzShowPagination: [{
            type: core.Input
        }], nzLoading: [{
            type: core.Input
        }], nzPageSizeChange: [{
            type: core.Output
        }], nzPageIndexChange: [{
            type: core.Output
        }], nzCurrentPageDataChange: [{
            type: core.Output
        }], listOfNzThComponent: [{
            type: core.ContentChildren,
            args: [NzThComponent, { descendants: true }]
        }], tableHeaderElement: [{
            type: core.ViewChild,
            args: ['tableHeaderElement', { static: false, read: core.ElementRef }]
        }], tableBodyElement: [{
            type: core.ViewChild,
            args: ['tableBodyElement', { static: false, read: core.ElementRef }]
        }], tableMainElement: [{
            type: core.ViewChild,
            args: ['tableMainElement', { static: false, read: core.ElementRef }]
        }], cdkVirtualScrollElement: [{
            type: core.ViewChild,
            args: [scrolling.CdkVirtualScrollViewport, { static: false, read: core.ElementRef }]
        }], cdkVirtualScrollViewport: [{
            type: core.ViewChild,
            args: [scrolling.CdkVirtualScrollViewport, { static: false, read: scrolling.CdkVirtualScrollViewport }]
        }], nzVirtualScrollDirective: [{
            type: core.ContentChild,
            args: [NzVirtualScrollDirective, { static: false }]
        }], nzSize: [{
            type: core.Input
        }], nzShowTotal: [{
            type: core.Input
        }], nzVirtualForTrackBy: [{
            type: core.Input
        }], nzLoadingIndicator: [{
            type: core.Input
        }], nzTitle: [{
            type: core.Input
        }], nzFooter: [{
            type: core.Input
        }], nzNoResult: [{
            type: core.Input
        }], nzItemRender: [{
            type: core.Input
        }], itemRenderChild: [{
            type: core.ViewChild,
            args: ['renderItemTemplate', { static: true }]
        }], nzBordered: [{
            type: core.Input
        }], nzShowSizeChanger: [{
            type: core.Input
        }], nzHideOnSinglePage: [{
            type: core.Input
        }], nzShowQuickJumper: [{
            type: core.Input
        }], nzSimple: [{
            type: core.Input
        }] }); })();
        return NzTableComponent;
    }());
    if (false) {
        /**
         * public data for ngFor tr
         * @type {?}
         */
        NzTableComponent.prototype.data;
        /** @type {?} */
        NzTableComponent.prototype.locale;
        /** @type {?} */
        NzTableComponent.prototype.nzTheadComponent;
        /** @type {?} */
        NzTableComponent.prototype.lastScrollLeft;
        /** @type {?} */
        NzTableComponent.prototype.headerBottomStyle;
        /**
         * @type {?}
         * @private
         */
        NzTableComponent.prototype.destroy$;
        /** @type {?} */
        NzTableComponent.prototype.listOfNzThComponent;
        /** @type {?} */
        NzTableComponent.prototype.tableHeaderElement;
        /** @type {?} */
        NzTableComponent.prototype.tableBodyElement;
        /** @type {?} */
        NzTableComponent.prototype.tableMainElement;
        /** @type {?} */
        NzTableComponent.prototype.cdkVirtualScrollElement;
        /** @type {?} */
        NzTableComponent.prototype.cdkVirtualScrollViewport;
        /** @type {?} */
        NzTableComponent.prototype.nzVirtualScrollDirective;
        /** @type {?} */
        NzTableComponent.prototype.nzSize;
        /** @type {?} */
        NzTableComponent.prototype.nzShowTotal;
        /** @type {?} */
        NzTableComponent.prototype.nzPageSizeOptions;
        /** @type {?} */
        NzTableComponent.prototype.nzVirtualScroll;
        /** @type {?} */
        NzTableComponent.prototype.nzVirtualItemSize;
        /** @type {?} */
        NzTableComponent.prototype.nzVirtualMaxBufferPx;
        /** @type {?} */
        NzTableComponent.prototype.nzVirtualMinBufferPx;
        /** @type {?} */
        NzTableComponent.prototype.nzVirtualForTrackBy;
        /** @type {?} */
        NzTableComponent.prototype.nzLoadingDelay;
        /** @type {?} */
        NzTableComponent.prototype.nzLoadingIndicator;
        /** @type {?} */
        NzTableComponent.prototype.nzTotal;
        /** @type {?} */
        NzTableComponent.prototype.nzTitle;
        /** @type {?} */
        NzTableComponent.prototype.nzFooter;
        /** @type {?} */
        NzTableComponent.prototype.nzNoResult;
        /** @type {?} */
        NzTableComponent.prototype.nzWidthConfig;
        /** @type {?} */
        NzTableComponent.prototype.nzPageIndex;
        /** @type {?} */
        NzTableComponent.prototype.nzPageSize;
        /** @type {?} */
        NzTableComponent.prototype.nzData;
        /** @type {?} */
        NzTableComponent.prototype.nzPaginationPosition;
        /** @type {?} */
        NzTableComponent.prototype.nzScroll;
        /** @type {?} */
        NzTableComponent.prototype.nzItemRender;
        /** @type {?} */
        NzTableComponent.prototype.itemRenderChild;
        /** @type {?} */
        NzTableComponent.prototype.nzFrontPagination;
        /** @type {?} */
        NzTableComponent.prototype.nzTemplateMode;
        /** @type {?} */
        NzTableComponent.prototype.nzBordered;
        /** @type {?} */
        NzTableComponent.prototype.nzShowPagination;
        /** @type {?} */
        NzTableComponent.prototype.nzLoading;
        /** @type {?} */
        NzTableComponent.prototype.nzShowSizeChanger;
        /** @type {?} */
        NzTableComponent.prototype.nzHideOnSinglePage;
        /** @type {?} */
        NzTableComponent.prototype.nzShowQuickJumper;
        /** @type {?} */
        NzTableComponent.prototype.nzSimple;
        /** @type {?} */
        NzTableComponent.prototype.nzPageSizeChange;
        /** @type {?} */
        NzTableComponent.prototype.nzPageIndexChange;
        /** @type {?} */
        NzTableComponent.prototype.nzCurrentPageDataChange;
        /** @type {?} */
        NzTableComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzTableComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzTableComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        NzTableComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzTableComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        NzTableComponent.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTbodyDirective = /** @class */ (function () {
        function NzTbodyDirective(nzTableComponent) {
            this.nzTableComponent = nzTableComponent;
        }
        /** @nocollapse */
        NzTbodyDirective.ctorParameters = function () { return [
            { type: NzTableComponent, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
NzTbodyDirective.ɵfac = function NzTbodyDirective_Factory(t) { return new (t || NzTbodyDirective)(ɵngcc0.ɵɵdirectiveInject(NzTableComponent, 9)); };
NzTbodyDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTbodyDirective, selectors: [["tbody"]], hostVars: 2, hostBindings: function NzTbodyDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-table-tbody", ctx.nzTableComponent);
    } } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTbodyDirective, [{
        type: core.Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'tbody',
                host: {
                    '[class.ant-table-tbody]': 'nzTableComponent'
                }
            }]
    }], function () { return [{ type: NzTableComponent, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, null); })();
        return NzTbodyDirective;
    }());
    if (false) {
        /** @type {?} */
        NzTbodyDirective.prototype.nzTableComponent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.nzCheckedChange = new core.EventEmitter();
            this.nzExpandChange = new core.EventEmitter();
        }
        /**
         * @param {?} e
         * @return {?}
         */
        NzTdComponent.prototype.expandChange = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            this.nzExpand = !this.nzExpand;
            this.nzExpandChange.emit(this.nzExpand);
        };
        /**
         * @return {?}
         */
        NzTdComponent.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a["ant-table-row-expand-icon-cell"] = this.nzShowExpand && !core$1.isNotNil(this.nzIndentSize),
                _a["ant-table-selection-column"] = this.nzShowCheckbox,
                _a["ant-table-td-left-sticky"] = core$1.isNotNil(this.nzLeft),
                _a["ant-table-td-right-sticky"] = core$1.isNotNil(this.nzRight),
                _a));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTdComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzIndentSize || changes.nzShowExpand || changes.nzShowCheckbox || changes.nzRight || changes.nzLeft) {
                this.setClassMap();
            }
        };
        /** @nocollapse */
        NzTdComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core$1.NzUpdateHostClassService }
        ]; };
        NzTdComponent.propDecorators = {
            nzChecked: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzIndeterminate: [{ type: core.Input }],
            nzLeft: [{ type: core.Input }],
            nzRight: [{ type: core.Input }],
            nzAlign: [{ type: core.Input }],
            nzIndentSize: [{ type: core.Input }],
            nzExpand: [{ type: core.Input }],
            nzShowExpand: [{ type: core.Input }],
            nzShowCheckbox: [{ type: core.Input }],
            nzBreakWord: [{ type: core.Input }],
            nzCheckedChange: [{ type: core.Output }],
            nzExpandChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTdComponent.prototype, "nzExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTdComponent.prototype, "nzShowExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTdComponent.prototype, "nzShowCheckbox", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTdComponent.prototype, "nzBreakWord", void 0);
NzTdComponent.ɵfac = function NzTdComponent_Factory(t) { return new (t || NzTdComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc9.NzUpdateHostClassService)); };
NzTdComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTdComponent, selectors: [["td", 9, "nz-disable-td", 3, "mat-cell", ""]], hostVars: 8, hostBindings: function NzTdComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("left", ctx.nzLeft)("right", ctx.nzRight)("text-align", ctx.nzAlign)("word-break", ctx.nzBreakWord ? "break-all" : "");
    } }, inputs: { nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzExpand: "nzExpand", nzShowExpand: "nzShowExpand", nzShowCheckbox: "nzShowCheckbox", nzBreakWord: "nzBreakWord", nzLeft: "nzLeft", nzRight: "nzRight", nzAlign: "nzAlign", nzIndentSize: "nzIndentSize" }, outputs: { nzCheckedChange: "nzCheckedChange", nzExpandChange: "nzExpandChange" }, features: [ɵngcc0.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c7, decls: 5, vars: 4, consts: [["class", "ant-table-row-indent", 3, "padding-left", 4, "ngIf"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange", 4, "ngIf"], ["class", "ant-table-row-expand-icon ant-table-row-spaced", 4, "ngIf"], ["class", "ant-table-row-expand-icon", 3, "ant-table-row-expanded", "ant-table-row-collapsed", "click", 4, "ngIf"], [1, "ant-table-row-indent"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange"], [1, "ant-table-row-expand-icon", "ant-table-row-spaced"], [1, "ant-table-row-expand-icon", 3, "click"]], template: function NzTdComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzTdComponent_span_0_Template, 1, 2, "span", 0);
        ɵngcc0.ɵɵtemplate(1, NzTdComponent_label_1_Template, 1, 3, "label", 1);
        ɵngcc0.ɵɵtemplate(2, NzTdComponent_span_2_Template, 1, 0, "span", 2);
        ɵngcc0.ɵɵtemplate(3, NzTdComponent_span_3_Template, 1, 4, "span", 3);
        ɵngcc0.ɵɵprojection(4);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzIndentSize >= 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowCheckbox);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzShowExpand && ctx.nzIndentSize >= 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowExpand);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzCheckboxComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTdComponent, [{
        type: core.Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'td:not(.nz-disable-td):not([mat-cell])',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [core$1.NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                template: "<span class=\"ant-table-row-indent\" *ngIf=\"nzIndentSize >= 0\" [style.padding-left.px]=\"nzIndentSize\"></span>\r\n<label *ngIf=\"nzShowCheckbox\"\r\n  nz-checkbox\r\n  [nzDisabled]=\"nzDisabled\"\r\n  [(ngModel)]=\"nzChecked\"\r\n  [nzIndeterminate]=\"nzIndeterminate\"\r\n  (ngModelChange)=\"nzCheckedChange.emit($event)\">\r\n</label>\r\n<span *ngIf=\"!nzShowExpand && nzIndentSize >= 0\"\r\n  class=\"ant-table-row-expand-icon ant-table-row-spaced\">\r\n</span>\r\n<span *ngIf=\"nzShowExpand\"\r\n  class=\"ant-table-row-expand-icon\"\r\n  [class.ant-table-row-expanded]=\"nzExpand\"\r\n  [class.ant-table-row-collapsed]=\"!nzExpand\"\r\n  (click)=\"expandChange($event)\">\r\n</span>\r\n<ng-content></ng-content>",
                host: {
                    '[style.left]': 'nzLeft',
                    '[style.right]': 'nzRight',
                    '[style.text-align]': 'nzAlign',
                    '[style.word-break]': "nzBreakWord ? 'break-all' : ''"
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc9.NzUpdateHostClassService }]; }, { nzChecked: [{
            type: core.Input
        }], nzDisabled: [{
            type: core.Input
        }], nzIndeterminate: [{
            type: core.Input
        }], nzExpand: [{
            type: core.Input
        }], nzShowExpand: [{
            type: core.Input
        }], nzShowCheckbox: [{
            type: core.Input
        }], nzBreakWord: [{
            type: core.Input
        }], nzCheckedChange: [{
            type: core.Output
        }], nzExpandChange: [{
            type: core.Output
        }], nzLeft: [{
            type: core.Input
        }], nzRight: [{
            type: core.Input
        }], nzAlign: [{
            type: core.Input
        }], nzIndentSize: [{
            type: core.Input
        }] }); })();
        return NzTdComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTdComponent.prototype.nzChecked;
        /** @type {?} */
        NzTdComponent.prototype.nzDisabled;
        /** @type {?} */
        NzTdComponent.prototype.nzIndeterminate;
        /** @type {?} */
        NzTdComponent.prototype.nzLeft;
        /** @type {?} */
        NzTdComponent.prototype.nzRight;
        /** @type {?} */
        NzTdComponent.prototype.nzAlign;
        /** @type {?} */
        NzTdComponent.prototype.nzIndentSize;
        /** @type {?} */
        NzTdComponent.prototype.nzExpand;
        /** @type {?} */
        NzTdComponent.prototype.nzShowExpand;
        /** @type {?} */
        NzTdComponent.prototype.nzShowCheckbox;
        /** @type {?} */
        NzTdComponent.prototype.nzBreakWord;
        /** @type {?} */
        NzTdComponent.prototype.nzCheckedChange;
        /** @type {?} */
        NzTdComponent.prototype.nzExpandChange;
        /**
         * @type {?}
         * @private
         */
        NzTdComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzTdComponent.prototype.nzUpdateHostClassService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTheadComponent = /** @class */ (function () {
        // tslint:disable-next-line:no-any
        function NzTheadComponent(nzTableComponent, elementRef, renderer) {
            this.nzTableComponent = nzTableComponent;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.destroy$ = new rxjs.Subject();
            this.nzSingleSort = false;
            this.nzSortChange = new core.EventEmitter();
            if (this.nzTableComponent) {
                this.nzTableComponent.nzTheadComponent = this;
            }
        }
        /**
         * @return {?}
         */
        NzTheadComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.listOfNzThComponent.changes
                .pipe(operators.startWith(true), operators.switchMap((/**
             * @return {?}
             */
            function () {
                return rxjs.merge.apply(void 0, __spread(_this.listOfNzThComponent.map((/**
                 * @param {?} th
                 * @return {?}
                 */
                function (th) { return th.nzSortChangeWithKey; }))));
            })), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.nzSortChange.emit(data);
                if (_this.nzSingleSort) {
                    _this.listOfNzThComponent.forEach((/**
                     * @param {?} th
                     * @return {?}
                     */
                    function (th) {
                        th.nzSort = th.nzSortKey === data.key ? th.nzSort : null;
                        th.marForCheck();
                    }));
                }
            }));
        };
        /**
         * @return {?}
         */
        NzTheadComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (this.nzTableComponent) {
                this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
            }
        };
        /**
         * @return {?}
         */
        NzTheadComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */
        NzTheadComponent.ctorParameters = function () { return [
            { type: NzTableComponent, decorators: [{ type: core.Host }, { type: core.Optional }] },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        NzTheadComponent.propDecorators = {
            templateRef: [{ type: core.ViewChild, args: ['contentTemplate', { static: true },] }],
            listOfNzThComponent: [{ type: core.ContentChildren, args: [NzThComponent, { descendants: true },] }],
            nzSingleSort: [{ type: core.Input }],
            nzSortChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTheadComponent.prototype, "nzSingleSort", void 0);
NzTheadComponent.ɵfac = function NzTheadComponent_Factory(t) { return new (t || NzTheadComponent)(ɵngcc0.ɵɵdirectiveInject(NzTableComponent, 9), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzTheadComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTheadComponent, selectors: [["thead", 9, "ant-table-thead"]], contentQueries: function NzTheadComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzThComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzThComponent = _t);
    } }, viewQuery: function NzTheadComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c8, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, inputs: { nzSingleSort: "nzSingleSort" }, outputs: { nzSortChange: "nzSortChange" }, ngContentSelectors: _c7, decls: 3, vars: 1, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTheadComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzTheadComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzTheadComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzTableComponent);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTheadComponent, [{
        type: core.Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'thead:not(.ant-table-thead)',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<ng-template #contentTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n<ng-container *ngIf=\"!nzTableComponent\">\r\n  <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\r\n</ng-container>"
            }]
    }], function () { return [{ type: NzTableComponent, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzSingleSort: [{
            type: core.Input
        }], nzSortChange: [{
            type: core.Output
        }], templateRef: [{
            type: core.ViewChild,
            args: ['contentTemplate', { static: true }]
        }], listOfNzThComponent: [{
            type: core.ContentChildren,
            args: [NzThComponent, { descendants: true }]
        }] }); })();
        return NzTheadComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzTheadComponent.prototype.destroy$;
        /** @type {?} */
        NzTheadComponent.prototype.templateRef;
        /** @type {?} */
        NzTheadComponent.prototype.listOfNzThComponent;
        /** @type {?} */
        NzTheadComponent.prototype.nzSingleSort;
        /** @type {?} */
        NzTheadComponent.prototype.nzSortChange;
        /** @type {?} */
        NzTheadComponent.prototype.nzTableComponent;
        /**
         * @type {?}
         * @private
         */
        NzTheadComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzTheadComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTrDirective = /** @class */ (function () {
        function NzTrDirective(elementRef, renderer, nzTableComponent) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.nzTableComponent = nzTableComponent;
        }
        Object.defineProperty(NzTrDirective.prototype, "nzExpand", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (core$1.toBoolean(value)) {
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
        /** @nocollapse */
        NzTrDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: NzTableComponent, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzTrDirective.propDecorators = {
            nzExpand: [{ type: core.Input }]
        };
NzTrDirective.ɵfac = function NzTrDirective_Factory(t) { return new (t || NzTrDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzTableComponent, 9)); };
NzTrDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTrDirective, selectors: [["tr", 3, "mat-row", "", 3, "mat-header-row", ""]], hostVars: 2, hostBindings: function NzTrDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-table-row", ctx.nzTableComponent);
    } }, inputs: { nzExpand: "nzExpand" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTrDirective, [{
        type: core.Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'tr:not([mat-row]):not([mat-header-row])',
                host: {
                    '[class.ant-table-row]': 'nzTableComponent'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: NzTableComponent, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, { nzExpand: [{
            type: core.Input
        }] }); })();
        return NzTrDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzTrDirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzTrDirective.prototype.renderer;
        /** @type {?} */
        NzTrDirective.prototype.nzTableComponent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTableModule = /** @class */ (function () {
        function NzTableModule() {
        }
NzTableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTableModule });
NzTableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTableModule_Factory(t) { return new (t || NzTableModule)(); }, imports: [[
            menu.NzMenuModule,
            forms.FormsModule,
            core$1.NzAddOnModule,
            radio.NzRadioModule,
            checkbox.NzCheckboxModule,
            dropdown.NzDropDownModule,
            common.CommonModule,
            platform.PlatformModule,
            pagination.NzPaginationModule,
            spin.NzSpinModule,
            i18n.NzI18nModule,
            icon.NzIconModule,
            empty.NzEmptyModule,
            scrolling.ScrollingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTableModule, { declarations: [NzTableComponent,
        NzThComponent,
        NzTdComponent,
        NzTheadComponent,
        NzTbodyDirective,
        NzTrDirective,
        NzVirtualScrollDirective], imports: [ɵngcc7.NzMenuModule, ɵngcc4.FormsModule, ɵngcc9.NzAddOnModule, ɵngcc8.NzRadioModule, ɵngcc3.NzCheckboxModule, ɵngcc5.NzDropDownModule, ɵngcc2.CommonModule, ɵngcc10.PlatformModule, ɵngcc14.NzPaginationModule, ɵngcc11.NzSpinModule, ɵngcc1.NzI18nModule, ɵngcc6.NzIconModule, ɵngcc13.NzEmptyModule, ɵngcc12.ScrollingModule], exports: [NzTableComponent,
        NzThComponent,
        NzTdComponent,
        NzTheadComponent,
        NzTbodyDirective,
        NzTrDirective,
        NzVirtualScrollDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTableModule, [{
        type: core.NgModule,
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
                exports: [
                    NzTableComponent,
                    NzThComponent,
                    NzTdComponent,
                    NzTheadComponent,
                    NzTbodyDirective,
                    NzTrDirective,
                    NzVirtualScrollDirective
                ],
                imports: [
                    menu.NzMenuModule,
                    forms.FormsModule,
                    core$1.NzAddOnModule,
                    radio.NzRadioModule,
                    checkbox.NzCheckboxModule,
                    dropdown.NzDropDownModule,
                    common.CommonModule,
                    platform.PlatformModule,
                    pagination.NzPaginationModule,
                    spin.NzSpinModule,
                    i18n.NzI18nModule,
                    icon.NzIconModule,
                    empty.NzEmptyModule,
                    scrolling.ScrollingModule
                ]
            }]
    }], function () { return []; }, null); })();
        return NzTableModule;
    }());

    exports.NzTableComponent = NzTableComponent;
    exports.NzTableModule = NzTableModule;
    exports.NzTbodyDirective = NzTbodyDirective;
    exports.NzTdComponent = NzTdComponent;
    exports.NzThComponent = NzThComponent;
    exports.NzTheadComponent = NzTheadComponent;
    exports.NzTrDirective = NzTrDirective;
    exports.NzVirtualScrollDirective = NzVirtualScrollDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-table.umd.js.map