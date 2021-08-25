(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('ng-zorro-antd/i18n'),require('ng-zorro-antd/select'),require('@angular/forms'),require('ng-zorro-antd/radio'),exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/select'), require('ng-zorro-antd/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/calendar', ['@angular/core','@angular/common','ng-zorro-antd/i18n','ng-zorro-antd/select','@angular/forms','ng-zorro-antd/radio','exports', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/i18n', 'ng-zorro-antd/radio', 'ng-zorro-antd/select', 'ng-zorro-antd/core'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.common,global.ngZorroAntd.i18n,global.ngZorroAntd.select,global.ng.forms,global.ngZorroAntd.radio,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].calendar = {}), global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].radio, global['ng-zorro-antd'].select, global['ng-zorro-antd'].core));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,exports, common, core, forms, i18n, radio, select, core$1) { 
var _c0 = ["date-table-cell", ""];
function DateTableCellComponent_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c1 = function (a0) { return { $implicit: a0 }; };
function DateTableCellComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DateTableCellComponent_ng_container_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.cell.dateCellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r2.cell.value));
} }
function DateTableCellComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r3.cell.dateCellRender, ɵngcc0.ɵɵsanitizeHtml);
} }
function DateTableCellComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-date");
    ɵngcc0.ɵɵattribute("aria-selected", ctx_r4.cell.isSelected)("aria-disabled", ctx_r4.cell.isDisabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.cell.content, " ");
} }
function DateTableCellComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementContainerStart(1, 0);
    ɵngcc0.ɵɵtemplate(2, DateTableCellComponent_ng_container_1_ng_container_2_Template, 2, 4, "ng-container", 1);
    ɵngcc0.ɵɵtemplate(3, DateTableCellComponent_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵtemplate(4, DateTableCellComponent_ng_container_1_ng_container_4_Template, 3, 6, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r0.isTemplateRef(ctx_r0.cell.dateCellRender));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r0.isNonEmptyString(ctx_r0.cell.dateCellRender));
} }
function DateTableCellComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateTableCellComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DateTableCellComponent_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.cell.dateFullCellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r6.cell.value));
} }
function DateTableCellComponent_ng_container_2_ng_template_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateTableCellComponent_ng_container_2_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, DateTableCellComponent_ng_container_2_ng_template_3_div_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r10.prefixCls, "-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r10.cell.dateCellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c1, ctx_r10.cell.value));
} }
function DateTableCellComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(2, DateTableCellComponent_ng_container_2_ng_template_3_div_2_Template, 2, 7, "div", 8);
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r8.prefixCls, "-value");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.cell.content);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.cell.dateCellRender);
} }
function DateTableCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵtemplate(2, DateTableCellComponent_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 6);
    ɵngcc0.ɵɵtemplate(3, DateTableCellComponent_ng_container_2_ng_template_3_Template, 3, 5, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r7 = ɵngcc0.ɵɵreference(4);
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.cell.dateFullCellRender)("ngIfElse", _r7);
} }
function DateTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 5);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2, "x");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-column-header ", ctx_r0.prefixCls, "-week-number-header");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-column-header-inner");
} }
function DateTableComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 6);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r3 = ctx.$implicit;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-column-header");
    ɵngcc0.ɵɵpropertyInterpolate("title", cell_r3.short);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-column-header-inner");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(cell_r3.veryShort);
} }
function DateTableComponent_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r5.prefixCls, "-week-number-cell");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", row_r4.weekNum, " ");
} }
function DateTableComponent_tr_6_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 11);
    ɵngcc0.ɵɵlistener("click", function DateTableComponent_tr_6_td_2_Template_td_click_0_listener() { var cell_r8 = ctx.$implicit; return cell_r8.isDisabled ? null : cell_r8.onClick(); })("mouseenter", function DateTableComponent_tr_6_td_2_Template_td_mouseenter_0_listener() { var cell_r8 = ctx.$implicit; return cell_r8.isDisabled ? null : cell_r8.onMouseEnter(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r8 = ctx.$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵpropertyInterpolate("title", cell_r8.title);
    ɵngcc0.ɵɵproperty("ngClass", cell_r8.classMap)("prefixCls", ctx_r6.prefixCls)("cell", cell_r8);
} }
function DateTableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 7);
    ɵngcc0.ɵɵtemplate(1, DateTableComponent_tr_6_td_1_Template, 2, 4, "td", 8);
    ɵngcc0.ɵɵtemplate(2, DateTableComponent_tr_6_td_2_Template, 1, 4, "td", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r4 = ctx.$implicit;
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", row_r4.classMap);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", row_r4.weekNum);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r4.dateCells)("ngForTrackBy", ctx_r2.trackByDateFn);
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var monthCell_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.monthFullCellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, monthCell_r3.value));
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var monthCell_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    var ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r11.prefixCls, "-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r11.monthCellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c1, monthCell_r3.value));
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_Template, 2, 7, "div", 10);
} if (rf & 2) {
    var monthCell_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r8.prefixCls, "-value");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(monthCell_r3.content);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.monthCellRender);
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 7);
    ɵngcc0.ɵɵtemplate(3, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_Template, 3, 5, "ng-template", null, 8, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r7 = ɵngcc0.ɵɵreference(4);
    var ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-month");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.monthFullCellRender)("ngIfElse", _r7);
} }
function MonthTableComponent_tr_2_td_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "a");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var monthCell_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r5.prefixCls, "-month-panel-month");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(monthCell_r3.content);
} }
function MonthTableComponent_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 4);
    ɵngcc0.ɵɵlistener("click", function MonthTableComponent_tr_2_td_1_Template_td_click_0_listener() { var monthCell_r3 = ctx.$implicit; return monthCell_r3.disabled ? null : monthCell_r3.onClick(); });
    ɵngcc0.ɵɵelementContainerStart(1, 5);
    ɵngcc0.ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_Template, 5, 5, "ng-container", 6);
    ɵngcc0.ɵɵtemplate(3, MonthTableComponent_tr_2_td_1_ng_container_3_Template, 3, 4, "ng-container", 6);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var monthCell_r3 = ctx.$implicit;
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵpropertyInterpolate("title", monthCell_r3.title);
    ɵngcc0.ɵɵproperty("ngClass", monthCell_r3.classMap);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r2.prefixCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "ant-fullcalendar");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "ant-calendar");
} }
function MonthTableComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 2);
    ɵngcc0.ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_Template, 4, 5, "td", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r1)("ngForTrackBy", ctx_r0.trackPanelMonth);
} }
function NzCalendarHeaderComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-option", 6);
} if (rf & 2) {
    var year_r2 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzLabel", year_r2.label)("nzValue", year_r2.value);
} }
function NzCalendarHeaderComponent_nz_select_2_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-option", 6);
} if (rf & 2) {
    var month_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzLabel", month_r4.label)("nzValue", month_r4.value);
} }
function NzCalendarHeaderComponent_nz_select_2_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-select", 7);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_nz_select_2_Template_nz_select_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.monthChange.emit($event); });
    ɵngcc0.ɵɵtemplate(1, NzCalendarHeaderComponent_nz_select_2_nz_option_1_Template, 1, 2, "nz-option", 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzSize", ctx_r1.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r1.activeMonth);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.months);
} }
function NzCalendarComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzCalendarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "date-table", 4);
    ɵngcc0.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_4_Template_date_table_valueChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onDateSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prefixCls", ctx_r2.prefixCls)("value", ctx_r2.activeDate)("dateCellRender", ctx_r2.dateCell)("dateFullCellRender", ctx_r2.dateFullCell);
} }
function NzCalendarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "month-table", 5);
    ɵngcc0.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_6_Template_month_table_valueChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onDateSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prefixCls", ctx_r4.prefixCls)("value", ctx_r4.activeDate)("monthCellRender", ctx_r4.monthCell)("monthFullCellRender", ctx_r4.monthFullCell);
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
    var DateTableCellComponent = /** @class */ (function () {
        function DateTableCellComponent() {
            this.isTemplateRef = core$1.isTemplateRef;
            this.isNonEmptyString = core$1.isNonEmptyString;
        }
        DateTableCellComponent.propDecorators = {
            prefixCls: [{ type: core.Input }],
            cell: [{ type: core.Input }]
        };
DateTableCellComponent.ɵfac = function DateTableCellComponent_Factory(t) { return new (t || DateTableCellComponent)(); };
DateTableCellComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DateTableCellComponent, selectors: [["", "date-table-cell", ""]], inputs: { prefixCls: "prefixCls", cell: "cell" }, exportAs: ["dateTableCell"], attrs: _c0, decls: 3, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [1, "ant-fullcalendar-date"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""], [3, "class", 4, "ngIf"]], template: function DateTableCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainerStart(0, 0);
        ɵngcc0.ɵɵtemplate(1, DateTableCellComponent_ng_container_1_Template, 5, 3, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, DateTableCellComponent_ng_container_2_Template, 5, 2, "ng-container", 1);
        ɵngcc0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.prefixCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "ant-calendar");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "ant-fullcalendar");
    } }, directives: [ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, ɵngcc1.NgSwitchDefault, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateTableCellComponent, [{
        type: core.Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: '[date-table-cell]',
                exportAs: 'dateTableCell',
                template: "<ng-container [ngSwitch]=\"prefixCls\">\r\n  <ng-container *ngSwitchCase=\"'ant-calendar'\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(cell.dateCellRender)\">\r\n        <ng-container *ngTemplateOutlet=\"cell.dateCellRender; context: { $implicit: cell.value }\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(cell.dateCellRender)\">\r\n        <span [innerHTML]=\"cell.dateCellRender\"></span>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <div class=\"{{ prefixCls }}-date\" [attr.aria-selected]=\"cell.isSelected\" [attr.aria-disabled]=\"cell.isDisabled\">\r\n          {{ cell.content }}\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'ant-fullcalendar'\">\r\n    <div class=\"ant-fullcalendar-date\">\r\n      <ng-container *ngIf=\"cell.dateFullCellRender else defaultCell\">\r\n        <ng-container *ngTemplateOutlet=\"cell.dateFullCellRender; context: {$implicit: cell.value}\"></ng-container>\r\n      </ng-container>\r\n      <ng-template #defaultCell>\r\n        <div class=\"{{ prefixCls }}-value\">{{ cell.content }}</div>\r\n        <div *ngIf=\"cell.dateCellRender\" class=\"{{ prefixCls }}-content\">\r\n          <ng-container *ngTemplateOutlet=\"cell.dateCellRender; context: {$implicit: cell.value}\"></ng-container>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </ng-container>\r\n</ng-container>"
            }]
    }], function () { return []; }, { prefixCls: [{
            type: core.Input
        }], cell: [{
            type: core.Input
        }] }); })();
        return DateTableCellComponent;
    }());
    if (false) {
        /** @type {?} */
        DateTableCellComponent.prototype.isTemplateRef;
        /** @type {?} */
        DateTableCellComponent.prototype.isNonEmptyString;
        /** @type {?} */
        DateTableCellComponent.prototype.prefixCls;
        /** @type {?} */
        DateTableCellComponent.prototype.cell;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DATE_ROW_NUM = 6;
    /** @type {?} */
    var DATE_COL_NUM = 7;
    var DateTableComponent = /** @class */ (function () {
        function DateTableComponent(i18n, dateHelper) {
            this.i18n = i18n;
            this.dateHelper = dateHelper;
            this.prefixCls = 'ant-calendar';
            this.showWeek = false;
            this.dayHover = new core.EventEmitter(); // Emitted when hover on a day by mouse enter
            // Emitted when hover on a day by mouse enter
            this.valueChange = new core.EventEmitter();
        }
        Object.defineProperty(DateTableComponent.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            set: 
            // Range ONLY
            /**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                // Show today by default
                this._value = this.activeDate = date || new core$1.CandyDate();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DateTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.render();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        DateTableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (this.isDateRealChange(changes.activeDate) ||
                this.isDateRealChange(changes.value) ||
                this.isDateRealChange(changes.selectedValue) ||
                this.isDateRealChange(changes.hoverValue)) {
                this.render();
            }
        };
        /**
         * @private
         * @param {?} change
         * @return {?}
         */
        DateTableComponent.prototype.isDateRealChange = /**
         * @private
         * @param {?} change
         * @return {?}
         */
        function (change) {
            if (change) {
                /** @type {?} */
                var previousValue_1 = change.previousValue;
                /** @type {?} */
                var currentValue = change.currentValue;
                if (Array.isArray(currentValue)) {
                    return (!Array.isArray(previousValue_1) ||
                        currentValue.length !== previousValue_1.length ||
                        currentValue.some((/**
                         * @param {?} value
                         * @param {?} index
                         * @return {?}
                         */
                        function (value, index) {
                            /** @type {?} */
                            var previousCandyDate = previousValue_1[index];
                            return previousCandyDate instanceof core$1.CandyDate
                                ? previousCandyDate.isSameDay(value)
                                : previousCandyDate !== value;
                        })));
                }
                else {
                    return !this.isSameDate((/** @type {?} */ (previousValue_1)), currentValue);
                }
            }
            return false;
        };
        /**
         * @private
         * @param {?} left
         * @param {?} right
         * @return {?}
         */
        DateTableComponent.prototype.isSameDate = /**
         * @private
         * @param {?} left
         * @param {?} right
         * @return {?}
         */
        function (left, right) {
            return (!left && !right) || (left && right && right.isSameDay(left));
        };
        /**
         * @private
         * @return {?}
         */
        DateTableComponent.prototype.render = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.value) {
                this.headWeekDays = this.makeHeadWeekDays();
                this.weekRows = this.makeWeekRows();
            }
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateTableComponent.prototype.changeValueFromInside = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Only change date not change time
            /** @type {?} */
            var newValue = this.value
                .setYear(value.getYear())
                .setMonth(value.getMonth())
                .setDate(value.getDate());
            this.valueChange.emit(newValue);
        };
        /**
         * @private
         * @return {?}
         */
        DateTableComponent.prototype.makeHeadWeekDays = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var weekDays = [];
            /** @type {?} */
            var start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
            for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                /** @type {?} */
                var day = start.addDays(colIndex);
                weekDays[colIndex] = {
                    short: this.dateHelper.format(day.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                    // eg. Tue
                    veryShort: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
                };
            }
            return weekDays;
        };
        /**
         * @private
         * @return {?}
         */
        DateTableComponent.prototype.getVeryShortWeekFormat = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.dateHelper.relyOnDatePipe) {
                return this.i18n
                    .getLocaleId()
                    .toLowerCase()
                    .indexOf('zh') === 0
                    ? 'EEEEE'
                    : 'EEEEEE'; // Use extreme short for chinese
            }
            return 'dd';
        };
        /**
         * @private
         * @return {?}
         */
        DateTableComponent.prototype.makeWeekRows = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
            var _this = this;
            /** @type {?} */
            var weekRows = [];
            /** @type {?} */
            var firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
            for (var week = 0; week < DATE_ROW_NUM; week++) {
                /** @type {?} */
                var weekStart = firstDayOfMonth.addDays(week * 7);
                /** @type {?} */
                var row = {
                    isActive: false,
                    isCurrent: false,
                    dateCells: [],
                    year: weekStart.getYear()
                };
                var _loop_1 = function (day) {
                    var _a;
                    /** @type {?} */
                    var date = weekStart.addDays(day);
                    /** @type {?} */
                    var dateFormat = this_1.dateHelper.relyOnDatePipe
                        ? 'longDate'
                        : this_1.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                    /** @type {?} */
                    var title = this_1.dateHelper.format(date.nativeDate, dateFormat);
                    /** @type {?} */
                    var label = this_1.dateHelper.format(date.nativeDate, this_1.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                    /** @type {?} */
                    var cell = {
                        value: date.nativeDate,
                        label: label,
                        isSelected: false,
                        isDisabled: false,
                        isToday: false,
                        title: title,
                        dateCellRender: core$1.valueFunctionProp(this_1.dateCellRender, date),
                        // Customized content
                        dateFullCellRender: core$1.valueFunctionProp(this_1.dateFullCellRender, date),
                        content: "" + date.getDate(),
                        onClick: (/**
                         * @return {?}
                         */
                        function () { return _this.changeValueFromInside(date); }),
                        onMouseEnter: (/**
                         * @return {?}
                         */
                        function () { return _this.dayHover.emit(date); })
                    };
                    if (this_1.showWeek && !row.weekNum) {
                        row.weekNum = this_1.dateHelper.getISOWeek(date.nativeDate);
                    }
                    if (date.isToday()) {
                        cell.isToday = true;
                        row.isCurrent = true;
                    }
                    if (Array.isArray(this_1.selectedValue) && date.isSameMonth(this_1.activeDate)) {
                        // Range selections
                        /** @type {?} */
                        var rangeValue = this_1.hoverValue && this_1.hoverValue.length ? this_1.hoverValue : this_1.selectedValue;
                        /** @type {?} */
                        var start = rangeValue[0];
                        /** @type {?} */
                        var end = rangeValue[1];
                        if (start) {
                            if (start.isSameDay(date)) {
                                cell.isSelectedStartDate = true;
                                cell.isSelected = true;
                                row.isActive = true;
                            }
                            if (end) {
                                if (end.isSameDay(date)) {
                                    cell.isSelectedEndDate = true;
                                    cell.isSelected = true;
                                    row.isActive = true;
                                }
                                else if (date.isAfterDay(start) && date.isBeforeDay(end)) {
                                    cell.isInRange = true;
                                }
                            }
                        }
                    }
                    else if (date.isSameDay(this_1.value)) {
                        cell.isSelected = true;
                        row.isActive = true;
                    }
                    if (this_1.disabledDate && this_1.disabledDate(date.nativeDate)) {
                        cell.isDisabled = true;
                    }
                    cell.classMap = (_a = {},
                        _a[this_1.prefixCls + "-cell"] = true,
                        _a[this_1.prefixCls + "-today"] = cell.isToday,
                        _a[this_1.prefixCls + "-last-month-cell"] = date.isBeforeMonth(this_1.activeDate),
                        _a[this_1.prefixCls + "-next-month-btn-day"] = date.isAfterMonth(this_1.activeDate),
                        _a[this_1.prefixCls + "-selected-day"] = cell.isSelected,
                        _a[this_1.prefixCls + "-disabled-cell"] = cell.isDisabled,
                        _a[this_1.prefixCls + "-selected-start-date"] = !!cell.isSelectedStartDate,
                        _a[this_1.prefixCls + "-selected-end-date"] = !!cell.isSelectedEndDate,
                        _a[this_1.prefixCls + "-in-range-cell"] = !!cell.isInRange,
                        _a);
                    row.dateCells.push(cell);
                };
                var this_1 = this;
                for (var day = 0; day < 7; day++) {
                    _loop_1(day);
                }
                row.classMap = (_a = {},
                    _a[this.prefixCls + "-current-week"] = row.isCurrent,
                    _a[this.prefixCls + "-active-week"] = row.isActive,
                    _a);
                weekRows.push(row);
            }
            return weekRows;
        };
        /**
         * @param {?} _index
         * @param {?} item
         * @return {?}
         */
        DateTableComponent.prototype.trackByDateFn = /**
         * @param {?} _index
         * @param {?} item
         * @return {?}
         */
        function (_index, item) {
            return "" + item.title;
        };
        /**
         * @param {?} _index
         * @param {?} item
         * @return {?}
         */
        DateTableComponent.prototype.trackByWeekFn = /**
         * @param {?} _index
         * @param {?} item
         * @return {?}
         */
        function (_index, item) {
            return item.year + "-" + item.weekNum;
        };
        /** @nocollapse */
        DateTableComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: i18n.DateHelperService }
        ]; };
        DateTableComponent.propDecorators = {
            prefixCls: [{ type: core.Input }],
            locale: [{ type: core.Input }],
            selectedValue: [{ type: core.Input }],
            hoverValue: [{ type: core.Input }],
            value: [{ type: core.Input }],
            activeDate: [{ type: core.Input }],
            showWeek: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            dateCellRender: [{ type: core.Input }],
            dateFullCellRender: [{ type: core.Input }],
            dayHover: [{ type: core.Output }],
            valueChange: [{ type: core.Output }]
        };
DateTableComponent.ɵfac = function DateTableComponent_Factory(t) { return new (t || DateTableComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService)); };
DateTableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DateTableComponent, selectors: [["date-table"]], inputs: { prefixCls: "prefixCls", showWeek: "showWeek", value: "value", locale: "locale", selectedValue: "selectedValue", hoverValue: "hoverValue", activeDate: "activeDate", disabledDate: "disabledDate", dateCellRender: "dateCellRender", dateFullCellRender: "dateFullCellRender" }, outputs: { dayHover: "dayHover", valueChange: "valueChange" }, exportAs: ["dateTable"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 7, vars: 10, consts: [["cellSpacing", "0", "role", "grid"], ["role", "row"], ["role", "columnheader", 3, "class", 4, "ngIf"], ["role", "columnheader", 3, "title", "class", 4, "ngFor", "ngForOf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", "date-table-cell", "", 3, "title", "ngClass", "prefixCls", "cell", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", "date-table-cell", "", 3, "title", "ngClass", "prefixCls", "cell", "click", "mouseenter"]], template: function DateTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table", 0);
        ɵngcc0.ɵɵelementStart(1, "thead");
        ɵngcc0.ɵɵelementStart(2, "tr", 1);
        ɵngcc0.ɵɵtemplate(3, DateTableComponent_th_3_Template, 3, 7, "th", 2);
        ɵngcc0.ɵɵtemplate(4, DateTableComponent_th_4_Template, 3, 8, "th", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "tbody");
        ɵngcc0.ɵɵtemplate(6, DateTableComponent_tr_6_Template, 3, 4, "tr", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-table");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showWeek);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.headWeekDays);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-tbody");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.weekRows)("ngForTrackBy", ctx.trackByWeekFn);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgClass, DateTableCellComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateTableComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-table',
                exportAs: 'dateTable',
                template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n  <thead>\r\n    <tr role=\"row\">\r\n      <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\">\r\n        <span class=\"{{ prefixCls }}-column-header-inner\">x</span>\r\n      </th>\r\n      <th *ngFor=\"let cell of headWeekDays\" role=\"columnheader\" title=\"{{ cell.short }}\"\r\n        class=\"{{ prefixCls }}-column-header\">\r\n        <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody class=\"{{ prefixCls }}-tbody\">\r\n    <tr *ngFor=\"let row of weekRows;trackBy:trackByWeekFn\" [ngClass]=\"row.classMap\" role=\"row\">\r\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\">\r\n        {{ row.weekNum }}\r\n      </td>\r\n      <td *ngFor=\"let cell of row.dateCells;trackBy:trackByDateFn\" title=\"{{ cell.title }}\" role=\"gridcell\" [ngClass]=\"cell.classMap\"\r\n        (click)=\"cell.isDisabled ? null : cell.onClick()\" (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\"\r\n        date-table-cell [prefixCls]=\"prefixCls\" [cell]=\"cell\">\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"
            }]
    }], function () { return [{ type: ɵngcc2.NzI18nService }, { type: ɵngcc2.DateHelperService }]; }, { prefixCls: [{
            type: core.Input
        }], showWeek: [{
            type: core.Input
        }], dayHover: [{
            type: core.Output
        }], valueChange: [{
            type: core.Output
        }], value: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], selectedValue: [{
            type: core.Input
        }], hoverValue: [{
            type: core.Input
        }], activeDate: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }], dateCellRender: [{
            type: core.Input
        }], dateFullCellRender: [{
            type: core.Input
        }] }); })();
        return DateTableComponent;
    }());
    if (false) {
        /** @type {?} */
        DateTableComponent.prototype._value;
        /** @type {?} */
        DateTableComponent.prototype.headWeekDays;
        /** @type {?} */
        DateTableComponent.prototype.weekRows;
        /** @type {?} */
        DateTableComponent.prototype.prefixCls;
        /** @type {?} */
        DateTableComponent.prototype.locale;
        /** @type {?} */
        DateTableComponent.prototype.selectedValue;
        /** @type {?} */
        DateTableComponent.prototype.hoverValue;
        /** @type {?} */
        DateTableComponent.prototype.activeDate;
        /** @type {?} */
        DateTableComponent.prototype.showWeek;
        /** @type {?} */
        DateTableComponent.prototype.disabledDate;
        /** @type {?} */
        DateTableComponent.prototype.dateCellRender;
        /** @type {?} */
        DateTableComponent.prototype.dateFullCellRender;
        /** @type {?} */
        DateTableComponent.prototype.dayHover;
        /** @type {?} */
        DateTableComponent.prototype.valueChange;
        /**
         * @type {?}
         * @private
         */
        DateTableComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        DateTableComponent.prototype.dateHelper;
    }
    /**
     * @record
     */
    function WeekDayLabel() { }
    if (false) {
        /** @type {?} */
        WeekDayLabel.prototype.short;
        /** @type {?} */
        WeekDayLabel.prototype.veryShort;
    }
    /**
     * @record
     */
    function DateCell() { }
    if (false) {
        /** @type {?} */
        DateCell.prototype.value;
        /** @type {?} */
        DateCell.prototype.label;
        /** @type {?} */
        DateCell.prototype.title;
        /** @type {?} */
        DateCell.prototype.dateCellRender;
        /** @type {?} */
        DateCell.prototype.dateFullCellRender;
        /** @type {?} */
        DateCell.prototype.content;
        /** @type {?|undefined} */
        DateCell.prototype.isSelected;
        /** @type {?|undefined} */
        DateCell.prototype.isToday;
        /** @type {?|undefined} */
        DateCell.prototype.isDisabled;
        /** @type {?|undefined} */
        DateCell.prototype.isSelectedStartDate;
        /** @type {?|undefined} */
        DateCell.prototype.isSelectedEndDate;
        /** @type {?|undefined} */
        DateCell.prototype.isInRange;
        /** @type {?|undefined} */
        DateCell.prototype.classMap;
        /**
         * @param {?} date
         * @return {?}
         */
        DateCell.prototype.onClick = function (date) { };
        /**
         * @return {?}
         */
        DateCell.prototype.onMouseEnter = function () { };
    }
    /**
     * @record
     */
    function WeekRow() { }
    if (false) {
        /** @type {?|undefined} */
        WeekRow.prototype.isCurrent;
        /** @type {?|undefined} */
        WeekRow.prototype.isActive;
        /** @type {?|undefined} */
        WeekRow.prototype.weekNum;
        /** @type {?|undefined} */
        WeekRow.prototype.year;
        /** @type {?|undefined} */
        WeekRow.prototype.classMap;
        /** @type {?} */
        WeekRow.prototype.dateCells;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAX_ROW = 4;
    /** @type {?} */
    var MAX_COL = 3;
    var MonthTableComponent = /** @class */ (function () {
        function MonthTableComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.value = new core$1.CandyDate();
            this.prefixCls = 'ant-fullcalendar';
            this.valueChange = new core.EventEmitter();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        MonthTableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.value || changes.disabledDate) {
                this.render();
            }
        };
        /**
         * @param {?} _index
         * @return {?}
         */
        MonthTableComponent.prototype.trackYear = /**
         * @param {?} _index
         * @return {?}
         */
        function (_index) {
            return this.value ? this.value.getYear() : _index;
        };
        /**
         * @param {?} _index
         * @param {?} monthData
         * @return {?}
         */
        MonthTableComponent.prototype.trackPanelMonth = /**
         * @param {?} _index
         * @param {?} monthData
         * @return {?}
         */
        function (_index, monthData) {
            return monthData.content;
        };
        /**
         * @private
         * @return {?}
         */
        MonthTableComponent.prototype.render = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.value) {
                this.panelMonths = this.makePanelMonths();
            }
        };
        /**
         * @private
         * @return {?}
         */
        MonthTableComponent.prototype.makePanelMonths = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var months = [];
            /** @type {?} */
            var currentMonth = this.value.getMonth();
            /** @type {?} */
            var today = new core$1.CandyDate();
            /** @type {?} */
            var monthValue = 0;
            for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
                months[rowIndex] = [];
                var _loop_1 = function (colIndex) {
                    var _a;
                    /** @type {?} */
                    var month = this_1.value.setMonth(monthValue);
                    /** @type {?} */
                    var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setMonth(monthValue).nativeDate) : false;
                    /** @type {?} */
                    var content = this_1.dateHelper.format(month.nativeDate, 'MMM');
                    /** @type {?} */
                    var cell = (months[rowIndex][colIndex] = {
                        value: month.nativeDate,
                        disabled: disabled,
                        content: content,
                        month: monthValue,
                        title: content,
                        classMap: null,
                        onClick: (/**
                         * @return {?}
                         */
                        function () { return _this.chooseMonth(cell.month); }) // don't use monthValue here
                    });
                    cell.classMap = (_a = {},
                        _a[this_1.prefixCls + "-month-panel-cell"] = true,
                        _a[this_1.prefixCls + "-month-panel-cell-disabled"] = disabled,
                        _a[this_1.prefixCls + "-month-panel-selected-cell"] = monthValue === currentMonth,
                        _a[this_1.prefixCls + "-month-panel-current-cell"] = today.getYear() === this_1.value.getYear() && monthValue === today.getMonth(),
                        _a);
                    monthValue++;
                };
                var this_1 = this;
                for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                    _loop_1(colIndex);
                }
            }
            return months;
        };
        /**
         * @private
         * @param {?} month
         * @return {?}
         */
        MonthTableComponent.prototype.chooseMonth = /**
         * @private
         * @param {?} month
         * @return {?}
         */
        function (month) {
            this.value = this.value.setMonth(month);
            this.valueChange.emit(this.value);
            this.render();
        };
        /** @nocollapse */
        MonthTableComponent.ctorParameters = function () { return [
            { type: i18n.DateHelperService }
        ]; };
        MonthTableComponent.propDecorators = {
            value: [{ type: core.Input }],
            prefixCls: [{ type: core.Input }],
            monthCellRender: [{ type: core.Input }],
            monthFullCellRender: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            disabledDate: [{ type: core.Input }]
        };
MonthTableComponent.ɵfac = function MonthTableComponent_Factory(t) { return new (t || MonthTableComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService)); };
MonthTableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MonthTableComponent, selectors: [["month-table"]], inputs: { value: "value", prefixCls: "prefixCls", monthCellRender: "monthCellRender", monthFullCellRender: "monthFullCellRender", disabledDate: "disabledDate" }, outputs: { valueChange: "valueChange" }, exportAs: ["monthTable"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 8, consts: [["cellSpacing", "0", "role", "grid"], ["role", "row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "gridcell", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell", 3, "title", "ngClass", "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", 4, "ngIf"]], template: function MonthTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table", 0);
        ɵngcc0.ɵɵelementStart(1, "tbody");
        ɵngcc0.ɵɵtemplate(2, MonthTableComponent_tr_2_Template, 2, 2, "tr", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-month-panel-table");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-month-panel-tbody");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.panelMonths)("ngForTrackBy", ctx.trackYear);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MonthTableComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'month-table',
                exportAs: 'monthTable',
                template: "<table class=\"{{ prefixCls }}-month-panel-table\" cellSpacing=\"0\" role=\"grid\">\r\n  <tbody class=\"{{ prefixCls }}-month-panel-tbody\">\r\n    <tr *ngFor=\"let row of panelMonths; trackBy: trackYear\" role=\"row\">\r\n      <td *ngFor=\"let monthCell of row; trackBy: trackPanelMonth\" role=\"gridcell\" title=\"{{ monthCell.title }}\"\r\n        (click)=\"monthCell.disabled ? null : monthCell.onClick()\" [ngClass]=\"monthCell.classMap\">\r\n        <ng-container [ngSwitch]=\"prefixCls\">\r\n          <ng-container *ngSwitchCase=\"'ant-fullcalendar'\">\r\n            <div class=\"{{ prefixCls }}-month\">\r\n              <ng-container *ngIf=\"monthFullCellRender else defaultCell\">\r\n                <ng-container *ngTemplateOutlet=\"monthFullCellRender; context: { $implicit: monthCell.value }\">\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-template #defaultCell>\r\n                <div class=\"{{prefixCls}}-value\">{{ monthCell.content }}</div>\r\n                <div *ngIf=\"monthCellRender\" class=\"{{prefixCls}}-content\">\r\n                  <ng-container *ngTemplateOutlet=\"monthCellRender; context: { $implicit: monthCell.value }\">\r\n                  </ng-container>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'ant-calendar'\">\r\n            <a class=\"{{ prefixCls }}-month-panel-month\">{{ monthCell.content }}</a>\r\n          </ng-container>\r\n        </ng-container>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"
            }]
    }], function () { return [{ type: ɵngcc2.DateHelperService }]; }, { value: [{
            type: core.Input
        }], prefixCls: [{
            type: core.Input
        }], valueChange: [{
            type: core.Output
        }], monthCellRender: [{
            type: core.Input
        }], monthFullCellRender: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }] }); })();
        return MonthTableComponent;
    }());
    if (false) {
        /** @type {?} */
        MonthTableComponent.prototype.value;
        /** @type {?} */
        MonthTableComponent.prototype.prefixCls;
        /** @type {?} */
        MonthTableComponent.prototype.monthCellRender;
        /** @type {?} */
        MonthTableComponent.prototype.monthFullCellRender;
        /** @type {?} */
        MonthTableComponent.prototype.valueChange;
        /** @type {?} */
        MonthTableComponent.prototype.disabledDate;
        /** @type {?} */
        MonthTableComponent.prototype.panelMonths;
        /**
         * @type {?}
         * @private
         */
        MonthTableComponent.prototype.dateHelper;
    }
    /**
     * @record
     */
    function PanelMonthData() { }
    if (false) {
        /** @type {?} */
        PanelMonthData.prototype.disabled;
        /** @type {?} */
        PanelMonthData.prototype.content;
        /** @type {?} */
        PanelMonthData.prototype.month;
        /** @type {?} */
        PanelMonthData.prototype.title;
        /** @type {?} */
        PanelMonthData.prototype.classMap;
        /** @type {?} */
        PanelMonthData.prototype.onClick;
        /** @type {?} */
        PanelMonthData.prototype.value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDateCellDirective = /** @class */ (function () {
        function NzDateCellDirective() {
        }
NzDateCellDirective.ɵfac = function NzDateCellDirective_Factory(t) { return new (t || NzDateCellDirective)(); };
NzDateCellDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzDateCellDirective, selectors: [["", "nzDateCell", ""]], exportAs: ["nzDateCell"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDateCellDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzDateCell]',
                exportAs: 'nzDateCell'
            }]
    }], function () { return []; }, null); })();
        return NzDateCellDirective;
    }());
    var NzMonthCellDirective = /** @class */ (function () {
        function NzMonthCellDirective() {
        }
NzMonthCellDirective.ɵfac = function NzMonthCellDirective_Factory(t) { return new (t || NzMonthCellDirective)(); };
NzMonthCellDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMonthCellDirective, selectors: [["", "nzMonthCell", ""]], exportAs: ["nzMonthCell"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMonthCellDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzMonthCell]',
                exportAs: 'nzMonthCell'
            }]
    }], function () { return []; }, null); })();
        return NzMonthCellDirective;
    }());
    var NzDateFullCellDirective = /** @class */ (function () {
        function NzDateFullCellDirective() {
        }
NzDateFullCellDirective.ɵfac = function NzDateFullCellDirective_Factory(t) { return new (t || NzDateFullCellDirective)(); };
NzDateFullCellDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzDateFullCellDirective, selectors: [["", "nzDateFullCell", ""]], exportAs: ["nzDateFullCell"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDateFullCellDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzDateFullCell]',
                exportAs: 'nzDateFullCell'
            }]
    }], function () { return []; }, null); })();
        return NzDateFullCellDirective;
    }());
    var NzMonthFullCellDirective = /** @class */ (function () {
        function NzMonthFullCellDirective() {
        }
NzMonthFullCellDirective.ɵfac = function NzMonthFullCellDirective_Factory(t) { return new (t || NzMonthFullCellDirective)(); };
NzMonthFullCellDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMonthFullCellDirective, selectors: [["", "nzMonthFullCell", ""]], exportAs: ["nzMonthFullCell"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMonthFullCellDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzMonthFullCell]',
                exportAs: 'nzMonthFullCell'
            }]
    }], function () { return []; }, null); })();
        return NzMonthFullCellDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCalendarHeaderComponent = /** @class */ (function () {
        function NzCalendarHeaderComponent(i18n, dateHelper) {
            this.i18n = i18n;
            this.dateHelper = dateHelper;
            this.mode = 'month';
            this.fullscreen = true;
            this.modeChange = new core.EventEmitter();
            this.activeDate = new core$1.CandyDate();
            this.yearChange = new core.EventEmitter();
            this.monthChange = new core.EventEmitter();
            // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
            this.yearOffset = 10;
            this.yearTotal = 20;
        }
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeYear", {
            get: /**
             * @return {?}
             */
            function () {
                return this.activeDate.getYear();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeMonth", {
            get: /**
             * @return {?}
             */
            function () {
                return this.activeDate.getMonth();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "size", {
            get: /**
             * @return {?}
             */
            function () {
                return this.fullscreen ? 'default' : 'small';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "yearTypeText", {
            get: /**
             * @return {?}
             */
            function () {
                return this.i18n.getLocale().Calendar.year;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "monthTypeText", {
            get: /**
             * @return {?}
             */
            function () {
                return this.i18n.getLocale().Calendar.month;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzCalendarHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setUpYears();
            this.setUpMonths();
        };
        /**
         * @param {?} year
         * @return {?}
         */
        NzCalendarHeaderComponent.prototype.updateYear = /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            this.yearChange.emit(year);
            this.setUpYears(year);
        };
        /**
         * @private
         * @param {?=} year
         * @return {?}
         */
        NzCalendarHeaderComponent.prototype.setUpYears = /**
         * @private
         * @param {?=} year
         * @return {?}
         */
        function (year) {
            /** @type {?} */
            var start = (year || this.activeYear) - this.yearOffset;
            /** @type {?} */
            var end = start + this.yearTotal;
            this.years = [];
            for (var i = start; i < end; i++) {
                this.years.push({ label: "" + i, value: i });
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzCalendarHeaderComponent.prototype.setUpMonths = /**
         * @private
         * @return {?}
         */
        function () {
            this.months = [];
            for (var i = 0; i < 12; i++) {
                /** @type {?} */
                var dateInMonth = this.activeDate.setMonth(i);
                /** @type {?} */
                var monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
                this.months.push({ label: monthText, value: i });
            }
        };
        /** @nocollapse */
        NzCalendarHeaderComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: i18n.DateHelperService }
        ]; };
        NzCalendarHeaderComponent.propDecorators = {
            mode: [{ type: core.Input }],
            fullscreen: [{ type: core.Input }],
            modeChange: [{ type: core.Output }],
            activeDate: [{ type: core.Input }],
            yearChange: [{ type: core.Output }],
            monthChange: [{ type: core.Output }]
        };
NzCalendarHeaderComponent.ɵfac = function NzCalendarHeaderComponent_Factory(t) { return new (t || NzCalendarHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService)); };
NzCalendarHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCalendarHeaderComponent, selectors: [["nz-calendar-header"]], hostVars: 4, hostBindings: function NzCalendarHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("display", "block");
        ɵngcc0.ɵɵclassProp("ant-fullcalendar-header", true);
    } }, inputs: { mode: "mode", fullscreen: "fullscreen", activeDate: "activeDate" }, outputs: { modeChange: "modeChange", yearChange: "yearChange", monthChange: "monthChange" }, exportAs: ["nzCalendarHeader"], decls: 8, vars: 9, consts: [[1, "ant-fullcalendar-year-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["class", "ant-fullcalendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange", 4, "ngIf"], [3, "ngModel", "nzSize", "ngModelChange"], ["nz-radio-button", "", "nzValue", "month"], ["nz-radio-button", "", "nzValue", "year"], [3, "nzLabel", "nzValue"], [1, "ant-fullcalendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"]], template: function NzCalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-select", 0);
        ɵngcc0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.updateYear($event); });
        ɵngcc0.ɵɵtemplate(1, NzCalendarHeaderComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, NzCalendarHeaderComponent_nz_select_2_Template, 2, 4, "nz-select", 2);
        ɵngcc0.ɵɵelementStart(3, "nz-radio-group", 3);
        ɵngcc0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_3_listener($event) { return ctx.mode = $event; })("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_3_listener($event) { return ctx.modeChange.emit($event); });
        ɵngcc0.ɵɵelementStart(4, "label", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "label", 5);
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("nzSize", ctx.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx.activeYear);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.years);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "month");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.mode)("nzSize", ctx.size);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.monthTypeText);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.yearTypeText);
    } }, directives: [ɵngcc3.NzSelectComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc5.NzRadioGroupComponent, ɵngcc5.NzRadioButtonComponent, ɵngcc3.NzOptionComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCalendarHeaderComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar-header',
                exportAs: 'nzCalendarHeader',
                template: "<nz-select class=\"ant-fullcalendar-year-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\r\n           [ngModel]=\"activeYear\" (ngModelChange)=\"updateYear($event)\"> \r\n  <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\r\n</nz-select>\r\n\r\n<nz-select *ngIf=\"mode === 'month'\" class=\"ant-fullcalendar-month-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\r\n           [ngModel]=\"activeMonth\" (ngModelChange)=\"monthChange.emit($event)\">\r\n  <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\r\n</nz-select>\r\n\r\n<nz-radio-group [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\r\n  <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\r\n  <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\r\n</nz-radio-group>\r\n",
                host: {
                    '[style.display]': "'block'",
                    '[class.ant-fullcalendar-header]': "true"
                }
            }]
    }], function () { return [{ type: ɵngcc2.NzI18nService }, { type: ɵngcc2.DateHelperService }]; }, { mode: [{
            type: core.Input
        }], fullscreen: [{
            type: core.Input
        }], modeChange: [{
            type: core.Output
        }], activeDate: [{
            type: core.Input
        }], yearChange: [{
            type: core.Output
        }], monthChange: [{
            type: core.Output
        }] }); })();
        return NzCalendarHeaderComponent;
    }());
    if (false) {
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.mode;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.fullscreen;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.modeChange;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.activeDate;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.yearChange;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.monthChange;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.yearOffset;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.yearTotal;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.years;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.months;
        /**
         * @type {?}
         * @private
         */
        NzCalendarHeaderComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        NzCalendarHeaderComponent.prototype.dateHelper;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCalendarComponent = /** @class */ (function () {
        function NzCalendarComponent(cdr) {
            this.cdr = cdr;
            this.activeDate = new core$1.CandyDate();
            this.prefixCls = 'ant-fullcalendar';
            this.onChangeFn = (/**
             * @return {?}
             */
            function () { });
            this.onTouchFn = (/**
             * @return {?}
             */
            function () { });
            this.nzMode = 'month';
            this.nzModeChange = new core.EventEmitter();
            this.nzPanelChange = new core.EventEmitter();
            this.nzSelectChange = new core.EventEmitter();
            this.nzValueChange = new core.EventEmitter();
            this.nzFullscreen = true;
        }
        Object.defineProperty(NzCalendarComponent.prototype, "nzValue", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.updateDate(new core$1.CandyDate(value), false);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "dateCell", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzDateCell || this.nzDateCellChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "dateFullCell", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzDateFullCell || this.nzDateFullCellChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "monthCell", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzMonthCell || this.nzMonthCellChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "monthFullCell", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzMonthFullCell || this.nzMonthFullCellChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "nzCard", {
            get: /**
             * @return {?}
             */
            function () {
                return !this.nzFullscreen;
            },
            /**
             * @deprecated use `[nzFullscreen]` instead.
             */
            set: /**
             * @deprecated use `[nzFullscreen]` instead.
             * @param {?} value
             * @return {?}
             */
            function (value) {
                core$1.warnDeprecation("'nzCard' is going to be removed in 9.0.0. Please use 'nzFullscreen' instead.");
                this.nzFullscreen = !core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} mode
         * @return {?}
         */
        NzCalendarComponent.prototype.onModeChange = /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            this.nzModeChange.emit(mode);
            this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode: mode });
        };
        /**
         * @param {?} year
         * @return {?}
         */
        NzCalendarComponent.prototype.onYearSelect = /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            /** @type {?} */
            var date = this.activeDate.setYear(year);
            this.updateDate(date);
        };
        /**
         * @param {?} month
         * @return {?}
         */
        NzCalendarComponent.prototype.onMonthSelect = /**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            /** @type {?} */
            var date = this.activeDate.setMonth(month);
            this.updateDate(date);
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NzCalendarComponent.prototype.onDateSelect = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            // Only activeDate is enough in calendar
            // this.value = date;
            this.updateDate(date);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzCalendarComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.updateDate(new core$1.CandyDate((/** @type {?} */ (value))), false);
            this.cdr.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzCalendarComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeFn = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzCalendarComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchFn = fn;
        };
        /**
         * @private
         * @param {?} date
         * @param {?=} touched
         * @return {?}
         */
        NzCalendarComponent.prototype.updateDate = /**
         * @private
         * @param {?} date
         * @param {?=} touched
         * @return {?}
         */
        function (date, touched) {
            if (touched === void 0) { touched = true; }
            this.activeDate = date;
            if (touched) {
                this.onChangeFn(date.nativeDate);
                this.onTouchFn();
                this.nzSelectChange.emit(date.nativeDate);
                this.nzValueChange.emit(date.nativeDate);
            }
        };
        /** @nocollapse */
        NzCalendarComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        NzCalendarComponent.propDecorators = {
            nzMode: [{ type: core.Input }],
            nzModeChange: [{ type: core.Output }],
            nzPanelChange: [{ type: core.Output }],
            nzSelectChange: [{ type: core.Output }],
            nzValue: [{ type: core.Input }],
            nzValueChange: [{ type: core.Output }],
            nzDateCell: [{ type: core.Input }],
            nzDateCellChild: [{ type: core.ContentChild, args: [NzDateCellDirective, { static: false, read: core.TemplateRef },] }],
            nzDateFullCell: [{ type: core.Input }],
            nzDateFullCellChild: [{ type: core.ContentChild, args: [NzDateFullCellDirective, { static: false, read: core.TemplateRef },] }],
            nzMonthCell: [{ type: core.Input }],
            nzMonthCellChild: [{ type: core.ContentChild, args: [NzMonthCellDirective, { static: false, read: core.TemplateRef },] }],
            nzMonthFullCell: [{ type: core.Input }],
            nzMonthFullCellChild: [{ type: core.ContentChild, args: [NzMonthFullCellDirective, { static: false, read: core.TemplateRef },] }],
            nzFullscreen: [{ type: core.Input }, { type: core.HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }],
            nzCard: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCalendarComponent.prototype, "nzFullscreen", void 0);
NzCalendarComponent.ɵfac = function NzCalendarComponent_Factory(t) { return new (t || NzCalendarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzCalendarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCalendarComponent, selectors: [["nz-calendar"]], contentQueries: function NzCalendarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzDateCellDirective, true, core.TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzDateFullCellDirective, true, core.TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMonthCellDirective, true, core.TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMonthFullCellDirective, true, core.TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzDateCellChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzDateFullCellChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzMonthCellChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzMonthFullCellChild = _t.first);
    } }, hostVars: 2, hostBindings: function NzCalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-fullcalendar--fullscreen", ctx.nzFullscreen);
    } }, inputs: { nzMode: "nzMode", nzFullscreen: "nzFullscreen", nzValue: "nzValue", nzCard: "nzCard", nzDateCell: "nzDateCell", nzDateFullCell: "nzDateFullCell", nzMonthCell: "nzMonthCell", nzMonthFullCell: "nzMonthFullCell" }, outputs: { nzModeChange: "nzModeChange", nzPanelChange: "nzPanelChange", nzSelectChange: "nzSelectChange", nzValueChange: "nzValueChange" }, exportAs: ["nzCalendar"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(( /**
                         * @return {?}
                         */function () { return NzCalendarComponent; })), multi: true }])], decls: 8, vars: 15, consts: [[3, "fullscreen", "activeDate", "mode", "modeChange", "yearChange", "monthChange"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["monthModeTable", ""], ["yearModeTable", ""], [3, "prefixCls", "value", "dateCellRender", "dateFullCellRender", "valueChange"], [3, "prefixCls", "value", "monthCellRender", "monthFullCellRender", "valueChange"]], template: function NzCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-calendar-header", 0);
        ɵngcc0.ɵɵlistener("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.nzMode = $event; })("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.onModeChange($event); })("yearChange", function NzCalendarComponent_Template_nz_calendar_header_yearChange_0_listener($event) { return ctx.onYearSelect($event); })("monthChange", function NzCalendarComponent_Template_nz_calendar_header_monthChange_0_listener($event) { return ctx.onMonthSelect($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "div");
        ɵngcc0.ɵɵtemplate(3, NzCalendarComponent_ng_container_3_Template, 1, 0, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NzCalendarComponent_ng_template_4_Template, 1, 4, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(6, NzCalendarComponent_ng_template_6_Template, 1, 4, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(5);
        var _r3 = ɵngcc0.ɵɵreference(7);
        ɵngcc0.ɵɵproperty("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("mode", ctx.nzMode);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.prefixCls, " ", ctx.prefixCls, "-full");
        ɵngcc0.ɵɵclassProp("ant-fullcalendar-fullscreen", ctx.nzFullscreen);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-calendar-body");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzMode === "month")("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [NzCalendarHeaderComponent, ɵngcc1.NgIf, DateTableComponent,
        MonthTableComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCalendarComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar',
                exportAs: 'nzCalendar',
                template: "<nz-calendar-header [fullscreen]=\"nzFullscreen\" [activeDate]=\"activeDate\" [(mode)]=\"nzMode\"\r\n  (modeChange)=\"onModeChange($event)\" (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\r\n</nz-calendar-header>\r\n\r\n<div class=\"{{prefixCls}} {{prefixCls}}-full\" [class.ant-fullcalendar-fullscreen]=\"nzFullscreen\">\r\n  <div class=\"{{prefixCls}}-calendar-body\">\r\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #monthModeTable>\r\n  <date-table [prefixCls]=\"prefixCls\" [value]=\"activeDate\" [dateCellRender]=\"dateCell\"\r\n    [dateFullCellRender]=\"dateFullCell\" (valueChange)=\"onDateSelect($event)\"></date-table>\r\n</ng-template>\r\n\r\n<ng-template #yearModeTable>\r\n  <month-table [prefixCls]=\"prefixCls\" [value]=\"activeDate\" [monthCellRender]=\"monthCell\"\r\n    [monthFullCellRender]=\"monthFullCell\" (valueChange)=\"onDateSelect($event)\"></month-table>\r\n</ng-template>",
                providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NzCalendarComponent; })), multi: true }]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { nzMode: [{
            type: core.Input
        }], nzModeChange: [{
            type: core.Output
        }], nzPanelChange: [{
            type: core.Output
        }], nzSelectChange: [{
            type: core.Output
        }], nzValueChange: [{
            type: core.Output
        }], nzFullscreen: [{
            type: core.Input
        }, {
            type: core.HostBinding,
            args: ['class.ant-fullcalendar--fullscreen']
        }], nzValue: [{
            type: core.Input
        }], nzCard: [{
            type: core.Input
        }], nzDateCell: [{
            type: core.Input
        }], nzDateCellChild: [{
            type: core.ContentChild,
            args: [NzDateCellDirective, { static: false, read: core.TemplateRef }]
        }], nzDateFullCell: [{
            type: core.Input
        }], nzDateFullCellChild: [{
            type: core.ContentChild,
            args: [NzDateFullCellDirective, { static: false, read: core.TemplateRef }]
        }], nzMonthCell: [{
            type: core.Input
        }], nzMonthCellChild: [{
            type: core.ContentChild,
            args: [NzMonthCellDirective, { static: false, read: core.TemplateRef }]
        }], nzMonthFullCell: [{
            type: core.Input
        }], nzMonthFullCellChild: [{
            type: core.ContentChild,
            args: [NzMonthFullCellDirective, { static: false, read: core.TemplateRef }]
        }] }); })();
        return NzCalendarComponent;
    }());
    if (false) {
        /** @type {?} */
        NzCalendarComponent.prototype.activeDate;
        /** @type {?} */
        NzCalendarComponent.prototype.prefixCls;
        /**
         * @type {?}
         * @private
         */
        NzCalendarComponent.prototype.onChangeFn;
        /**
         * @type {?}
         * @private
         */
        NzCalendarComponent.prototype.onTouchFn;
        /** @type {?} */
        NzCalendarComponent.prototype.nzMode;
        /** @type {?} */
        NzCalendarComponent.prototype.nzModeChange;
        /** @type {?} */
        NzCalendarComponent.prototype.nzPanelChange;
        /** @type {?} */
        NzCalendarComponent.prototype.nzSelectChange;
        /** @type {?} */
        NzCalendarComponent.prototype.nzValueChange;
        /**
         * Cannot use \@Input and \@ContentChild on one variable
         * because { static: false } will make \@Input property get delayed
         *
         * @type {?}
         */
        NzCalendarComponent.prototype.nzDateCell;
        /** @type {?} */
        NzCalendarComponent.prototype.nzDateCellChild;
        /** @type {?} */
        NzCalendarComponent.prototype.nzDateFullCell;
        /** @type {?} */
        NzCalendarComponent.prototype.nzDateFullCellChild;
        /** @type {?} */
        NzCalendarComponent.prototype.nzMonthCell;
        /** @type {?} */
        NzCalendarComponent.prototype.nzMonthCellChild;
        /** @type {?} */
        NzCalendarComponent.prototype.nzMonthFullCell;
        /** @type {?} */
        NzCalendarComponent.prototype.nzMonthFullCellChild;
        /** @type {?} */
        NzCalendarComponent.prototype.nzFullscreen;
        /**
         * @type {?}
         * @private
         */
        NzCalendarComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCalendarModule = /** @class */ (function () {
        function NzCalendarModule() {
        }
NzCalendarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCalendarModule });
NzCalendarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCalendarModule_Factory(t) { return new (t || NzCalendarModule)(); }, imports: [[common.CommonModule, forms.FormsModule, i18n.NzI18nModule, radio.NzRadioModule, select.NzSelectModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCalendarModule, { declarations: [NzCalendarHeaderComponent,
        NzCalendarComponent,
        NzDateCellDirective,
        NzDateFullCellDirective,
        NzMonthCellDirective,
        NzMonthFullCellDirective,
        DateTableComponent,
        DateTableCellComponent,
        MonthTableComponent], imports: [ɵngcc1.CommonModule, ɵngcc4.FormsModule, ɵngcc2.NzI18nModule, ɵngcc5.NzRadioModule, ɵngcc3.NzSelectModule], exports: [NzCalendarComponent,
        NzDateCellDirective,
        NzDateFullCellDirective,
        NzMonthCellDirective,
        NzMonthFullCellDirective,
        DateTableComponent,
        MonthTableComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCalendarModule, [{
        type: core.NgModule,
        args: [{
                declarations: [
                    NzCalendarHeaderComponent,
                    NzCalendarComponent,
                    NzDateCellDirective,
                    NzDateFullCellDirective,
                    NzMonthCellDirective,
                    NzMonthFullCellDirective,
                    DateTableComponent,
                    DateTableCellComponent,
                    MonthTableComponent
                ],
                exports: [
                    NzCalendarComponent,
                    NzDateCellDirective,
                    NzDateFullCellDirective,
                    NzMonthCellDirective,
                    NzMonthFullCellDirective,
                    DateTableComponent,
                    MonthTableComponent
                ],
                imports: [common.CommonModule, forms.FormsModule, i18n.NzI18nModule, radio.NzRadioModule, select.NzSelectModule]
            }]
    }], function () { return []; }, null); })();
        return NzCalendarModule;
    }());

    exports.DateTableCellComponent = DateTableCellComponent;
    exports.DateTableComponent = DateTableComponent;
    exports.MonthTableComponent = MonthTableComponent;
    exports.NzCalendarComponent = NzCalendarComponent;
    exports.NzCalendarHeaderComponent = NzCalendarHeaderComponent;
    exports.NzCalendarModule = NzCalendarModule;
    exports.NzDateCellDirective = NzDateCellDirective;
    exports.NzDateFullCellDirective = NzDateFullCellDirective;
    exports.NzMonthCellDirective = NzMonthCellDirective;
    exports.NzMonthFullCellDirective = NzMonthFullCellDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-calendar.umd.js.map