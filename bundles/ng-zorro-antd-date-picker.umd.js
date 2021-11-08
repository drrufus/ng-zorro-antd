(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('ng-zorro-antd/i18n'),require('ng-zorro-antd/calendar'),require('ng-zorro-antd/time-picker'),require('@angular/forms'),require('@angular/cdk/overlay'),require('ng-zorro-antd/core'),require('ng-zorro-antd/icon'),exports, require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/icon'), require('@angular/forms'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/time-picker'), require('ng-zorro-antd/calendar'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/date-picker', ['@angular/core','@angular/common','ng-zorro-antd/i18n','ng-zorro-antd/calendar','ng-zorro-antd/time-picker','@angular/forms','@angular/cdk/overlay','ng-zorro-antd/core','ng-zorro-antd/icon','exports', '@angular/cdk/overlay', '@angular/common', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/icon', '@angular/forms', 'ng-zorro-antd/i18n', 'ng-zorro-antd/time-picker', 'ng-zorro-antd/calendar', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.common,global.ngZorroAntd.i18n,global.ngZorroAntd.calendar,global.ngZorroAntd.timePicker,global.ng.forms,global.ng.cdk.overlay,global.ngZorroAntd.core,global.ngZorroAntd.icon,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['date-picker'] = {}), global.ng.cdk.overlay, global.ng.common, global.ng.core, global['ng-zorro-antd'].core, global['ng-zorro-antd'].icon, global.ng.forms, global['ng-zorro-antd'].i18n, global['ng-zorro-antd']['time-picker'], global['ng-zorro-antd'].calendar, global.rxjs, global.rxjs.operators));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,exports, overlay, common, core, core$1, icon, forms, i18n, timePicker, calendar, rxjs, operators) { 
function CalendarFooterComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function CalendarFooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, CalendarFooterComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-footer-extra ", ctx_r0.prefixCls, "-range-quick-selector");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.rangeQuickSelector);
} }
function CalendarFooterComponent_div_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function CalendarFooterComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, CalendarFooterComponent_div_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.extraFooter);
} }
function CalendarFooterComponent_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r5.extraFooter, ɵngcc0.ɵɵsanitizeHtml);
} }
function CalendarFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementContainerStart(1, 2);
    ɵngcc0.ɵɵtemplate(2, CalendarFooterComponent_div_2_ng_container_2_Template, 2, 1, "ng-container", 3);
    ɵngcc0.ɵɵtemplate(3, CalendarFooterComponent_div_2_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r1.prefixCls, "-footer-extra ", ctx_r1.isRange ? ctx_r1.prefixCls + "-range-quick-selector" : "", "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r1.isTemplateRef(ctx_r1.extraFooter));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r1.isNonEmptyString(ctx_r1.extraFooter));
} }
function CalendarFooterComponent_span_3_today_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "today-button", 8);
    ɵngcc0.ɵɵlistener("clickToday", function CalendarFooterComponent_span_3_today_button_1_Template_today_button_clickToday_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.clickToday.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("locale", ctx_r7.locale)("disabledDate", ctx_r7.disabledDate)("hasTimePicker", ctx_r7.hasTimePicker);
} }
function CalendarFooterComponent_span_3_time_picker_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "time-picker-button", 9);
    ɵngcc0.ɵɵlistener("showTimePickerChange", function CalendarFooterComponent_span_3_time_picker_button_2_Template_time_picker_button_showTimePickerChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.showTimePickerChange.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("locale", ctx_r8.locale)("timePickerDisabled", ctx_r8.timePickerDisabled)("showTimePicker", ctx_r8.showTimePicker);
} }
function CalendarFooterComponent_span_3_ok_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ok-button", 10);
    ɵngcc0.ɵɵlistener("clickOk", function CalendarFooterComponent_span_3_ok_button_3_Template_ok_button_clickOk_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.clickOk.emit(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("okDisabled", ctx_r9.okDisabled)("locale", ctx_r9.locale);
} }
function CalendarFooterComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtemplate(1, CalendarFooterComponent_span_3_today_button_1_Template, 1, 3, "today-button", 5);
    ɵngcc0.ɵɵtemplate(2, CalendarFooterComponent_span_3_time_picker_button_2_Template, 1, 3, "time-picker-button", 6);
    ɵngcc0.ɵɵtemplate(3, CalendarFooterComponent_span_3_ok_button_3_Template, 1, 2, "ok-button", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-footer-btn");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.showToday);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.hasTimePicker);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.hasTimePicker);
} }
function CalendarHeaderComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_a_2_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.previousYear(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-prev-year-btn");
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r0.locale.previousYear);
} }
function CalendarHeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_a_3_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.previousMonth(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-prev-month-btn");
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r1.locale.previousMonth);
} }
function CalendarHeaderComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "a", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_ng_container_5_Template_a_click_1_listener() { var selector_r12 = ctx.$implicit; return selector_r12.onClick ? selector_r12.onClick() : null; });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var selector_r12 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(selector_r12.className);
    ɵngcc0.ɵɵpropertyInterpolate("title", selector_r12.title || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", selector_r12.label, " ");
} }
function CalendarHeaderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_a_6_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.nextMonth(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-next-month-btn");
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r3.locale.nextMonth);
} }
function CalendarHeaderComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_a_7_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r17); var ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.nextYear(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-next-year-btn");
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r4.locale.nextYear);
} }
function CalendarHeaderComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "decade-panel", 6);
    ɵngcc0.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_9_Template_decade_panel_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onChooseDecade($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("locale", ctx_r5.locale)("value", ctx_r5.value);
} }
function CalendarHeaderComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    var _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "year-panel", 7);
    ɵngcc0.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_10_Template_year_panel_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r21); var ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.onChooseYear($event); })("decadePanelShow", function CalendarHeaderComponent_ng_container_10_Template_year_panel_decadePanelShow_1_listener() { ɵngcc0.ɵɵrestoreView(_r21); var ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.changePanel("decade"); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("locale", ctx_r6.locale)("value", ctx_r6.value)("disabledDate", ctx_r6.disabledYear);
} }
function CalendarHeaderComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    var _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "month-panel", 8);
    ɵngcc0.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_11_Template_month_panel_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r24); var ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.onChooseMonth($event); })("yearPanelShow", function CalendarHeaderComponent_ng_container_11_Template_month_panel_yearPanelShow_1_listener() { ɵngcc0.ɵɵrestoreView(_r24); var ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.changePanel("year"); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("locale", ctx_r7.locale)("value", ctx_r7.value)("disabledDate", ctx_r7.disabledMonth);
} }
var _c0 = ["inputElement"];
function DecadePanelComponent_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 5);
    ɵngcc0.ɵɵlistener("click", function DecadePanelComponent_tr_9_td_1_Template_td_click_0_listener() { var cell_r3 = ctx.$implicit; return cell_r3.onClick(); });
    ɵngcc0.ɵɵelementStart(1, "a");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r3 = ctx.$implicit;
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵpropertyInterpolate("title", cell_r3.title);
    ɵngcc0.ɵɵproperty("ngClass", cell_r3.classMap);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-decade");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(cell_r3.content);
} }
function DecadePanelComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 3);
    ɵngcc0.ɵɵtemplate(1, DecadePanelComponent_tr_9_td_1_Template, 3, 6, "td", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r1)("ngForTrackBy", ctx_r0.trackPanelDecade);
} }
function DateRangePopupComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DateRangePopupComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r4 = ɵngcc0.ɵɵreference(9);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function DateRangePopupComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c1 = function () { return { partType: "left" }; };
var _c2 = function () { return { partType: "right" }; };
function DateRangePopupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DateRangePopupComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementStart(2, "div", 12);
    ɵngcc0.ɵɵtext(3, "~");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, DateRangePopupComponent_ng_container_5_ng_container_4_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r12 = ɵngcc0.ɵɵreference(17);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r12)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(4, _c1));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r12)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(5, _c2));
} }
function DateRangePopupComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DateRangePopupComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r8 = ɵngcc0.ɵɵreference(13);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function DateRangePopupComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DateRangePopupComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r8 = ɵngcc0.ɵɵreference(13);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function DateRangePopupComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    var _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "calendar-input", 13);
    ɵngcc0.ɵɵlistener("valueChange", function DateRangePopupComponent_ng_template_8_Template_calendar_input_valueChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var partType_r21 = ctx.partType; var ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.changeValueFromInput($event, partType_r21); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var partType_r21 = ctx.partType;
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", ctx_r5.getValue(partType_r21))("locale", ctx_r5.locale)("disabledDate", ctx_r5.disabledDate)("format", ctx_r5.format)("autoFocus", partType_r21 !== "right")("placeholder", ctx_r5.getPlaceholder(partType_r21));
} }
function DateRangePopupComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    var _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "inner-popup", 14);
    ɵngcc0.ɵɵlistener("panelModeChange", function DateRangePopupComponent_ng_template_10_Template_inner_popup_panelModeChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); var partType_r24 = ctx.partType; var ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.onPanelModeChange($event, partType_r24); })("dayHover", function DateRangePopupComponent_ng_template_10_Template_inner_popup_dayHover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); var ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.onDayHover($event); })("selectDate", function DateRangePopupComponent_ng_template_10_Template_inner_popup_selectDate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); var ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.changeValueFromSelect($event); })("selectTime", function DateRangePopupComponent_ng_template_10_Template_inner_popup_selectTime_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); var partType_r24 = ctx.partType; var ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onSelectTime($event, partType_r24); })("headerChange", function DateRangePopupComponent_ng_template_10_Template_inner_popup_headerChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); var partType_r24 = ctx.partType; var ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.onHeaderChange($event, partType_r24); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var partType_r24 = ctx.partType;
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("showWeek", ctx_r7.showWeek)("locale", ctx_r7.locale)("showTimePicker", ctx_r7.hasTimePicker && ctx_r7.showTimePicker)("timeOptions", ctx_r7.getTimeOptions(partType_r24))("panelMode", ctx_r7.getPanelMode(partType_r24))("value", ctx_r7.getValueBySelector(partType_r24))("disabledDate", ctx_r7.disabledDate)("dateRender", ctx_r7.dateRender)("selectedValue", ctx_r7.selectedValue)("hoverValue", ctx_r7.hoverValue)("enablePrev", ctx_r7.enablePrevNext("prev", partType_r24))("enableNext", ctx_r7.enablePrevNext("next", partType_r24));
} }
function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template(rf, ctx) { if (rf & 1) {
    var _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "calendar-footer", 16);
    ɵngcc0.ɵɵlistener("showTimePickerChange", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_showTimePickerChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); var ctx_r32 = ɵngcc0.ɵɵnextContext(2); return ctx_r32.showTimePicker = $event; })("showTimePickerChange", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_showTimePickerChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); var ctx_r34 = ɵngcc0.ɵɵnextContext(2); return ctx_r34.onShowTimePickerChange($event); })("clickOk", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_clickOk_0_listener() { ɵngcc0.ɵɵrestoreView(_r33); var ctx_r35 = ɵngcc0.ɵɵnextContext(2); return ctx_r35.onClickOk(); })("clickToday", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_clickToday_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); var ctx_r36 = ɵngcc0.ɵɵnextContext(2); return ctx_r36.onClickToday($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r31 = ɵngcc0.ɵɵnextContext(2);
    var _r14 = ɵngcc0.ɵɵreference(19);
    ɵngcc0.ɵɵproperty("locale", ctx_r31.locale)("showToday", ctx_r31.showToday)("hasTimePicker", ctx_r31.hasTimePicker)("timePickerDisabled", ctx_r31.timePickerDisabled())("okDisabled", ctx_r31.okDisabled())("extraFooter", ctx_r31.extraFooter)("rangeQuickSelector", ctx_r31.ranges ? _r14 : null)("showTimePicker", ctx_r31.showTimePicker);
} }
function DateRangePopupComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_12_calendar_footer_0_Template, 1, 8, "calendar-footer", 15);
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.hasFooter);
} }
function DateRangePopupComponent_ng_template_14_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_14_ng_container_0_Template, 1, 0, "ng-container", 10);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r6 = ɵngcc0.ɵɵreference(11);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function DateRangePopupComponent_ng_template_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_template_16_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c3 = function (a0) { return { partType: a0 }; };
function DateRangePopupComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, DateRangePopupComponent_ng_template_16_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementStart(2, "div", 17);
    ɵngcc0.ɵɵtemplate(3, DateRangePopupComponent_ng_template_16_ng_container_3_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var partType_r38 = ctx.partType;
    var ctx_r13 = ɵngcc0.ɵɵnextContext();
    var _r4 = ɵngcc0.ɵɵreference(9);
    var _r6 = ɵngcc0.ɵɵreference(11);
    ɵngcc0.ɵɵclassMapInterpolate3("", ctx_r13.prefixCls, "-range-part ", ctx_r13.prefixCls, "-range-", partType_r38, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c3, partType_r38));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(11, _c3, partType_r38));
} }
function DateRangePopupComponent_ng_template_18_a_0_Template(rf, ctx) { if (rf & 1) {
    var _r44 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 19);
    ɵngcc0.ɵɵlistener("click", function DateRangePopupComponent_ng_template_18_a_0_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r44); var name_r42 = ctx.$implicit; var ctx_r43 = ɵngcc0.ɵɵnextContext(2); return ctx_r43.onClickPresetRange(ctx_r43.ranges[name_r42]); })("mouseenter", function DateRangePopupComponent_ng_template_18_a_0_Template_a_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r44); var name_r42 = ctx.$implicit; var ctx_r45 = ɵngcc0.ɵɵnextContext(2); return ctx_r45.onHoverPresetRange(ctx_r45.ranges[name_r42]); })("mouseleave", function DateRangePopupComponent_ng_template_18_a_0_Template_a_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r44); var ctx_r46 = ɵngcc0.ɵɵnextContext(2); return ctx_r46.onPresetRangeMouseLeave(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var name_r42 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(name_r42);
} }
function DateRangePopupComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_18_a_0_Template, 2, 1, "a", 18);
} if (rf & 2) {
    var ctx_r15 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r15.getObjectKeys(ctx_r15.ranges));
} }
function InnerPopupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "nz-time-picker-panel", 3);
    ɵngcc0.ɵɵlistener("ngModelChange", function InnerPopupComponent_ng_container_1_Template_nz_time_picker_panel_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.onSelectTime($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzInDatePicker", true)("ngModel", ctx_r0.value == null ? null : ctx_r0.value.nativeDate)("format", ctx_r0.timeOptions.nzFormat)("nzHourStep", ctx_r0.timeOptions.nzHourStep)("nzMinuteStep", ctx_r0.timeOptions.nzMinuteStep)("nzSecondStep", ctx_r0.timeOptions.nzSecondStep)("nzDisabledHours", ctx_r0.timeOptions.nzDisabledHours)("nzDisabledMinutes", ctx_r0.timeOptions.nzDisabledMinutes)("nzDisabledSeconds", ctx_r0.timeOptions.nzDisabledSeconds)("nzHideDisabledOptions", ctx_r0.timeOptions.nzHideDisabledOptions)("nzDefaultOpenValue", ctx_r0.timeOptions.nzDefaultOpenValue)("nzUse12Hours", ctx_r0.timeOptions.nzUse12Hours)("nzAddOn", ctx_r0.timeOptions.nzAddOn)("opened", true);
} }
function YearPanelComponent_tr_13_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 5);
    ɵngcc0.ɵɵlistener("click", function YearPanelComponent_tr_13_td_1_Template_td_click_0_listener() { var yearCell_r3 = ctx.$implicit; return yearCell_r3.disabled ? null : yearCell_r3.onClick(); });
    ɵngcc0.ɵɵelementStart(1, "a");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var yearCell_r3 = ctx.$implicit;
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵpropertyInterpolate("title", yearCell_r3.title);
    ɵngcc0.ɵɵproperty("ngClass", yearCell_r3.classMap);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-year");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(yearCell_r3.content);
} }
function YearPanelComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 3);
    ɵngcc0.ɵɵtemplate(1, YearPanelComponent_tr_13_td_1_Template, 3, 6, "td", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r1)("ngForTrackBy", ctx_r0.trackPanelYear);
} }
var _c4 = ["origin"];
var _c5 = ["pickerInput"];
function NzPickerComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzPickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "input", 6, 7);
    ɵngcc0.ɵɵtemplate(3, NzPickerComponent_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    var _r5 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-picker-input ant-input");
    ɵngcc0.ɵɵclassProp("ant-input-lg", ctx_r1.size === "large")("ant-input-sm", ctx_r1.size === "small")("ant-input-disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵpropertyInterpolate("value", ctx_r1.getReadableValue());
    ɵngcc0.ɵɵpropertyInterpolate("placeholder", ctx_r1.getPlaceholder());
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function NzPickerComponent_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzPickerComponent_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzPickerComponent_ng_container_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzPickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span", null, 7);
    ɵngcc0.ɵɵtemplate(3, NzPickerComponent_ng_container_3_ng_container_3_Template, 1, 0, "ng-container", 9);
    ɵngcc0.ɵɵelementStart(4, "span");
    ɵngcc0.ɵɵtext(5, " ~ ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, NzPickerComponent_ng_container_3_ng_container_6_Template, 1, 0, "ng-container", 9);
    ɵngcc0.ɵɵtemplate(7, NzPickerComponent_ng_container_3_ng_container_7_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    var _r3 = ɵngcc0.ɵɵreference(5);
    var _r5 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-picker-input ant-input");
    ɵngcc0.ɵɵclassProp("ant-input-lg", ctx_r2.size === "large")("ant-input-sm", ctx_r2.size === "small")("ant-input-disabled", ctx_r2.disabled);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(17, _c1));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-range-picker-separator");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(18, _c2));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function NzPickerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "input", 6);
} if (rf & 2) {
    var partType_r14 = ctx.partType;
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-range-picker-input");
    ɵngcc0.ɵɵpropertyInterpolate("value", ctx_r4.getReadableValue(partType_r14));
    ɵngcc0.ɵɵpropertyInterpolate("placeholder", ctx_r4.getPlaceholder(partType_r14));
    ɵngcc0.ɵɵproperty("disabled", ctx_r4.disabled);
} }
function NzPickerComponent_ng_template_6_i_0_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 12);
    ɵngcc0.ɵɵlistener("click", function NzPickerComponent_ng_template_6_i_0_Template_i_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var ctx_r16 = ɵngcc0.ɵɵnextContext(2); return ctx_r16.onClickClear($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r15.prefixCls, "-picker-clear");
} }
function NzPickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzPickerComponent_ng_template_6_i_0_Template, 1, 3, "i", 10);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵelement(2, "i", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r6.disabled && !ctx_r6.isEmptyValue(ctx_r6.value) && ctx_r6.allowClear);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r6.prefixCls, "-picker-icon");
} }
function NzPickerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("@slideMotion.done", function NzPickerComponent_ng_template_8_Template_div_animation_slideMotion_done_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.animationDone(); });
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("left", ctx_r7.currentPositionX === "start" ? "-2px" : "2px")("top", ctx_r7.currentPositionY === "top" ? "-2px" : "2px");
    ɵngcc0.ɵɵproperty("nzNoAnimation", ctx_r7.noAnimation)("@slideMotion", ctx_r7.dropdownAnimation);
} }
var _c6 = ["*"];
function NzDatePickerComponent_date_range_popup_1_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "date-range-popup", 2);
    ɵngcc0.ɵɵlistener("panelModeChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_panelModeChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.nzOnPanelChange.emit($event); })("valueChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_valueChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onValueChange($event); })("inputChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_inputChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onValueChange($event, true); })("calendarChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_calendarChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onCalendarChange($event); })("resultOk", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_resultOk_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onResultOk(); })("closePicker", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_closePicker_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.closeOverlay(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("isRange", ctx_r0.isRange)("showWeek", ctx_r0.showWeek)("panelMode", ctx_r0.nzMode)("value", ctx_r0.nzValue)("locale", ctx_r0.nzLocale == null ? null : ctx_r0.nzLocale.lang)("showToday", ctx_r0.realShowToday)("showTime", ctx_r0.nzShowTime)("format", ctx_r0.nzFormat)("dateRender", ctx_r0.nzDateRender)("disabledDate", ctx_r0.nzDisabledDate)("disabledTime", ctx_r0.nzDisabledTime)("placeholder", ctx_r0.nzPlaceHolder)("dropdownClassName", ctx_r0.nzDropdownClassName)("popupStyle", ctx_r0.nzPopupStyle)("extraFooter", ctx_r0.extraFooter)("ranges", ctx_r0.nzRanges);
} }
function NzMonthPickerComponent_div_1_calendar_footer_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "calendar-footer", 8);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("extraFooter", ctx_r1.extraFooter);
} }
function NzMonthPickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelementStart(4, "div", 5);
    ɵngcc0.ɵɵelementStart(5, "calendar-header", 6);
    ɵngcc0.ɵɵlistener("panelModeChange", function NzMonthPickerComponent_div_1_Template_calendar_header_panelModeChange_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onPanelModeChange($event); })("chooseYear", function NzMonthPickerComponent_div_1_Template_calendar_header_chooseYear_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onChooseValue("year", $event); })("chooseMonth", function NzMonthPickerComponent_div_1_Template_calendar_header_chooseMonth_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onChooseValue("month", $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, NzMonthPickerComponent_div_1_calendar_footer_6_Template, 1, 1, "calendar-footer", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("ant-calendar-picker-container ", ctx_r0.nzDropdownClassName, " ant-calendar-picker-container-placement-bottomLeft");
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.nzPopupStyle);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("disabledMonth", ctx_r0.nzDisabledDate)("disabledYear", ctx_r0.nzDisabledDate)("panelMode", ctx_r0.panelMode)("value", ctx_r0.nzValue)("locale", ctx_r0.nzLocale.lang)("enablePrev", true)("enableNext", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.extraFooter);
} }
function NzRangePickerComponent_date_range_popup_1_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "date-range-popup", 2);
    ɵngcc0.ɵɵlistener("panelModeChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_panelModeChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.nzOnPanelChange.emit($event); })("valueChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_valueChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onValueChange($event); })("inputChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_inputChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onValueChange($event, true); })("calendarChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_calendarChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onCalendarChange($event); })("resultOk", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_resultOk_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onResultOk(); })("closePicker", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_closePicker_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.closeOverlay(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("isRange", ctx_r0.isRange)("showWeek", ctx_r0.showWeek)("panelMode", ctx_r0.nzMode)("value", ctx_r0.nzValue)("locale", ctx_r0.nzLocale == null ? null : ctx_r0.nzLocale.lang)("showToday", ctx_r0.realShowToday)("showTime", ctx_r0.nzShowTime)("format", ctx_r0.nzFormat)("dateRender", ctx_r0.nzDateRender)("disabledDate", ctx_r0.nzDisabledDate)("disabledTime", ctx_r0.nzDisabledTime)("placeholder", ctx_r0.nzPlaceHolder)("dropdownClassName", ctx_r0.nzDropdownClassName)("popupStyle", ctx_r0.nzPopupStyle)("extraFooter", ctx_r0.extraFooter)("ranges", ctx_r0.nzRanges);
} }
function NzWeekPickerComponent_date_range_popup_1_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "date-range-popup", 2);
    ɵngcc0.ɵɵlistener("panelModeChange", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_panelModeChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.nzOnPanelChange.emit($event); })("valueChange", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_valueChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onValueChange($event); })("inputChange", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_inputChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onValueChange($event, true); })("calendarChange", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_calendarChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onCalendarChange($event); })("resultOk", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_resultOk_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onResultOk(); })("closePicker", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_closePicker_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.closeOverlay(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("isRange", ctx_r0.isRange)("showWeek", ctx_r0.showWeek)("panelMode", ctx_r0.nzMode)("value", ctx_r0.nzValue)("locale", ctx_r0.nzLocale == null ? null : ctx_r0.nzLocale.lang)("showToday", ctx_r0.realShowToday)("showTime", ctx_r0.nzShowTime)("format", ctx_r0.nzFormat)("dateRender", ctx_r0.nzDateRender)("disabledDate", ctx_r0.nzDisabledDate)("disabledTime", ctx_r0.nzDisabledTime)("placeholder", ctx_r0.nzPlaceHolder)("dropdownClassName", ctx_r0.nzDropdownClassName)("popupStyle", ctx_r0.nzPopupStyle)("extraFooter", ctx_r0.extraFooter)("ranges", ctx_r0.nzRanges);
} }
function NzYearPickerComponent_div_1_calendar_footer_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "calendar-footer", 8);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("extraFooter", ctx_r1.extraFooter);
} }
function NzYearPickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelementStart(4, "div", 5);
    ɵngcc0.ɵɵelementStart(5, "calendar-header", 6);
    ɵngcc0.ɵɵlistener("panelModeChange", function NzYearPickerComponent_div_1_Template_calendar_header_panelModeChange_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onPanelModeChange($event); })("chooseYear", function NzYearPickerComponent_div_1_Template_calendar_header_chooseYear_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onChooseValue("year", $event); })("chooseMonth", function NzYearPickerComponent_div_1_Template_calendar_header_chooseMonth_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onChooseValue("month", $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, NzYearPickerComponent_div_1_calendar_footer_6_Template, 1, 1, "calendar-footer", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("ant-calendar-picker-container ", ctx_r0.nzDropdownClassName, " ant-calendar-picker-container-placement-bottomLeft");
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.nzPopupStyle);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("disabledMonth", ctx_r0.nzDisabledDate)("disabledYear", ctx_r0.nzDisabledDate)("panelMode", ctx_r0.panelMode)("value", ctx_r0.nzValue)("locale", ctx_r0.nzLocale.lang)("enablePrev", true)("enableNext", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.extraFooter);
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
    var CalendarFooterComponent = /** @class */ (function () {
        function CalendarFooterComponent() {
            this.showToday = false;
            this.hasTimePicker = false;
            this.isRange = false;
            this.showTimePicker = false;
            this.showTimePickerChange = new core.EventEmitter();
            this.timePickerDisabled = false;
            this.okDisabled = false;
            this.clickOk = new core.EventEmitter();
            this.clickToday = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.isTemplateRef = core$1.isTemplateRef;
            this.isNonEmptyString = core$1.isNonEmptyString;
        }
        CalendarFooterComponent.propDecorators = {
            locale: [{ type: core.Input }],
            showToday: [{ type: core.Input }],
            hasTimePicker: [{ type: core.Input }],
            isRange: [{ type: core.Input }],
            showTimePicker: [{ type: core.Input }],
            showTimePickerChange: [{ type: core.Output }],
            timePickerDisabled: [{ type: core.Input }],
            okDisabled: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            extraFooter: [{ type: core.Input }],
            rangeQuickSelector: [{ type: core.Input }],
            clickOk: [{ type: core.Output }],
            clickToday: [{ type: core.Output }]
        };
CalendarFooterComponent.ɵfac = function CalendarFooterComponent_Factory(t) { return new (t || CalendarFooterComponent)(); };
CalendarFooterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarFooterComponent, selectors: [["calendar-footer"]], inputs: { showToday: "showToday", hasTimePicker: "hasTimePicker", isRange: "isRange", showTimePicker: "showTimePicker", timePickerDisabled: "timePickerDisabled", okDisabled: "okDisabled", locale: "locale", disabledDate: "disabledDate", extraFooter: "extraFooter", rangeQuickSelector: "rangeQuickSelector" }, outputs: { showTimePickerChange: "showTimePickerChange", clickOk: "clickOk", clickToday: "clickToday" }, exportAs: ["calendarFooter"], decls: 4, vars: 8, consts: [[3, "class", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "innerHTML"], [3, "locale", "disabledDate", "hasTimePicker", "clickToday", 4, "ngIf"], [3, "locale", "timePickerDisabled", "showTimePicker", "showTimePickerChange", 4, "ngIf"], [3, "okDisabled", "locale", "clickOk", 4, "ngIf"], [3, "locale", "disabledDate", "hasTimePicker", "clickToday"], [3, "locale", "timePickerDisabled", "showTimePicker", "showTimePickerChange"], [3, "okDisabled", "locale", "clickOk"]], template: function CalendarFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, CalendarFooterComponent_div_1_Template, 2, 5, "div", 0);
        ɵngcc0.ɵɵtemplate(2, CalendarFooterComponent_div_2_Template, 4, 7, "div", 0);
        ɵngcc0.ɵɵtemplate(3, CalendarFooterComponent_span_3_Template, 4, 6, "span", 0);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate3("", ctx.prefixCls, "-footer ", ctx.isRange ? ctx.prefixCls + "-range-bottom" : "", " ", ctx.hasTimePicker ? ctx.prefixCls + "-footer-show-ok" : "", "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.rangeQuickSelector);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.extraFooter);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showToday || ctx.hasTimePicker);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, TodayButtonComponent,
        TimePickerButtonComponent,
        OkButtonComponent]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarFooterComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-footer',
                exportAs: 'calendarFooter',
                template: "<div class=\"{{ prefixCls }}-footer {{ isRange ? prefixCls + '-range-bottom' : '' }} {{ hasTimePicker ? prefixCls + '-footer-show-ok' : '' }}\">\r\n  <div *ngIf=\"rangeQuickSelector\" class=\"{{ prefixCls }}-footer-extra {{ prefixCls }}-range-quick-selector\">\r\n    <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container>\r\n  </div>\r\n  <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra {{ isRange ? prefixCls + '-range-quick-selector' : '' }}\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\">\r\n        <ng-container *ngTemplateOutlet=\"extraFooter\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\">\r\n        <span [innerHTML]=\"extraFooter\"></span>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <span *ngIf=\"showToday || hasTimePicker\" class=\"{{ prefixCls }}-footer-btn\">\r\n    <today-button\r\n      *ngIf=\"showToday\"\r\n      [locale]=\"locale\"\r\n      [disabledDate]=\"disabledDate\"\r\n      [hasTimePicker]=\"hasTimePicker\"\r\n      (clickToday)=\"clickToday.emit($event)\"\r\n    ></today-button>\r\n    <time-picker-button\r\n      *ngIf=\"hasTimePicker\"\r\n      [locale]=\"locale\"\r\n      [timePickerDisabled]=\"timePickerDisabled\"\r\n      [showTimePicker]=\"showTimePicker\"\r\n      (showTimePickerChange)=\"showTimePickerChange.emit($event)\"\r\n    ></time-picker-button>\r\n    <ok-button\r\n      *ngIf=\"hasTimePicker\"\r\n      [okDisabled]=\"okDisabled\"\r\n      [locale]=\"locale\"\r\n      (clickOk)=\"clickOk.emit()\"\r\n    ></ok-button>\r\n  </span>\r\n</div>"
            }]
    }], function () { return []; }, { showToday: [{
            type: core.Input
        }], hasTimePicker: [{
            type: core.Input
        }], isRange: [{
            type: core.Input
        }], showTimePicker: [{
            type: core.Input
        }], showTimePickerChange: [{
            type: core.Output
        }], timePickerDisabled: [{
            type: core.Input
        }], okDisabled: [{
            type: core.Input
        }], clickOk: [{
            type: core.Output
        }], clickToday: [{
            type: core.Output
        }], locale: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }], extraFooter: [{
            type: core.Input
        }], rangeQuickSelector: [{
            type: core.Input
        }] }); })();
        return CalendarFooterComponent;
    }());
    if (false) {
        /** @type {?} */
        CalendarFooterComponent.prototype.locale;
        /** @type {?} */
        CalendarFooterComponent.prototype.showToday;
        /** @type {?} */
        CalendarFooterComponent.prototype.hasTimePicker;
        /** @type {?} */
        CalendarFooterComponent.prototype.isRange;
        /** @type {?} */
        CalendarFooterComponent.prototype.showTimePicker;
        /** @type {?} */
        CalendarFooterComponent.prototype.showTimePickerChange;
        /** @type {?} */
        CalendarFooterComponent.prototype.timePickerDisabled;
        /** @type {?} */
        CalendarFooterComponent.prototype.okDisabled;
        /** @type {?} */
        CalendarFooterComponent.prototype.disabledDate;
        /** @type {?} */
        CalendarFooterComponent.prototype.extraFooter;
        /** @type {?} */
        CalendarFooterComponent.prototype.rangeQuickSelector;
        /** @type {?} */
        CalendarFooterComponent.prototype.clickOk;
        /** @type {?} */
        CalendarFooterComponent.prototype.clickToday;
        /** @type {?} */
        CalendarFooterComponent.prototype.prefixCls;
        /** @type {?} */
        CalendarFooterComponent.prototype.isTemplateRef;
        /** @type {?} */
        CalendarFooterComponent.prototype.isNonEmptyString;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarHeaderComponent = /** @class */ (function () {
        function CalendarHeaderComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.enablePrev = true;
            this.enableNext = true;
            this.showTimePicker = false;
            this.valueChange = new core.EventEmitter();
            this.panelModeChange = new core.EventEmitter();
            this.chooseDecade = new core.EventEmitter();
            this.chooseYear = new core.EventEmitter();
            this.chooseMonth = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.yearToMonth = false; // Indicate whether should change to month panel when current is year panel (if referer=month, it should show month panel when choosed a year)
        }
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.value) {
                this.value = new core$1.CandyDate(); // Show today by default
            }
            this.render();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        CalendarHeaderComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.value || changes.showTimePicker || changes.panelMode) {
                this.render();
            }
        };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.previousYear = /**
         * @return {?}
         */
        function () {
            this.gotoYear(-1);
        };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.nextYear = /**
         * @return {?}
         */
        function () {
            this.gotoYear(1);
        };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.previousMonth = /**
         * @return {?}
         */
        function () {
            this.gotoMonth(-1);
        };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.nextMonth = /**
         * @return {?}
         */
        function () {
            this.gotoMonth(1);
        };
        /**
         * @param {?} mode
         * @param {?=} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.changePanel = /**
         * @param {?} mode
         * @param {?=} value
         * @return {?}
         */
        function (mode, value) {
            this.panelModeChange.emit(mode);
            if (value) {
                this.changeValueFromInside(value);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.onChooseDecade = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changePanel('year', value);
            this.chooseDecade.emit(value);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.onChooseYear = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changePanel(this.yearToMonth ? 'month' : 'date', value);
            this.yearToMonth = false; // Clear
            this.chooseYear.emit(value);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.onChooseMonth = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changePanel('date', value);
            this.yearToMonth = false; // Clear
            this.chooseMonth.emit(value);
        };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.changeToMonthPanel = /**
         * @return {?}
         */
        function () {
            this.changePanel('month');
            this.yearToMonth = true;
        };
        /**
         * @private
         * @return {?}
         */
        CalendarHeaderComponent.prototype.render = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.value) {
                this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
            }
        };
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        CalendarHeaderComponent.prototype.gotoMonth = /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        function (amount) {
            this.changeValueFromInside(this.value.addMonths(amount));
        };
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        CalendarHeaderComponent.prototype.gotoYear = /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        function (amount) {
            this.changeValueFromInside(this.value.addYears(amount));
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.changeValueFromInside = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.value !== value) {
                this.value = value;
                this.valueChange.emit(this.value);
                this.render();
            }
        };
        /**
         * @private
         * @param {?} localeFormat
         * @return {?}
         */
        CalendarHeaderComponent.prototype.formatDateTime = /**
         * @private
         * @param {?} localeFormat
         * @return {?}
         */
        function (localeFormat) {
            return this.dateHelper.format(this.value.nativeDate, localeFormat);
        };
        /**
         * @private
         * @return {?}
         */
        CalendarHeaderComponent.prototype.createYearMonthDaySelectors = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var year;
            /** @type {?} */
            var month;
            /** @type {?} */
            var day;
            // NOTE: Compat for DatePipe formatting rules
            /** @type {?} */
            var yearFormat = this.locale.yearFormat;
            if (this.dateHelper.relyOnDatePipe) {
                yearFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(yearFormat);
            }
            year = {
                className: this.prefixCls + "-year-select",
                title: this.locale.yearSelect,
                onClick: (/**
                 * @return {?}
                 */
                function () { return (_this.showTimePicker ? null : _this.changePanel('year')); }),
                label: this.formatDateTime(yearFormat)
            };
            month = {
                className: this.prefixCls + "-month-select",
                title: this.locale.monthSelect,
                onClick: (/**
                 * @return {?}
                 */
                function () { return (_this.showTimePicker ? null : _this.changeToMonthPanel()); }),
                label: this.formatDateTime(this.locale.monthFormat || 'MMM')
            };
            // NOTE: Compat for DatePipe formatting rules
            /** @type {?} */
            var dayFormat = this.locale.dayFormat;
            if (this.dateHelper.relyOnDatePipe) {
                dayFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dayFormat);
            }
            if (this.showTimePicker) {
                day = {
                    className: this.prefixCls + "-day-select",
                    label: this.formatDateTime(dayFormat)
                };
            }
            /** @type {?} */
            var result;
            if (this.locale.monthBeforeYear) {
                result = [month, (/** @type {?} */ (day)), year];
            }
            else {
                result = [year, month, (/** @type {?} */ (day))];
            }
            return result.filter((/**
             * @param {?} selector
             * @return {?}
             */
            function (selector) { return !!selector; }));
        };
        /** @nocollapse */
        CalendarHeaderComponent.ctorParameters = function () { return [
            { type: i18n.DateHelperService }
        ]; };
        CalendarHeaderComponent.propDecorators = {
            locale: [{ type: core.Input }],
            enablePrev: [{ type: core.Input }],
            enableNext: [{ type: core.Input }],
            disabledMonth: [{ type: core.Input }],
            disabledYear: [{ type: core.Input }],
            showTimePicker: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            panelMode: [{ type: core.Input }],
            panelModeChange: [{ type: core.Output }],
            chooseDecade: [{ type: core.Output }],
            chooseYear: [{ type: core.Output }],
            chooseMonth: [{ type: core.Output }]
        };
CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) { return new (t || CalendarHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService)); };
CalendarHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarHeaderComponent, selectors: [["calendar-header"]], inputs: { enablePrev: "enablePrev", enableNext: "enableNext", showTimePicker: "showTimePicker", value: "value", locale: "locale", disabledMonth: "disabledMonth", disabledYear: "disabledYear", panelMode: "panelMode" }, outputs: { valueChange: "valueChange", panelModeChange: "panelModeChange", chooseDecade: "chooseDecade", chooseYear: "chooseYear", chooseMonth: "chooseMonth" }, exportAs: ["calendarHeader"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 12, vars: 16, consts: [[2, "position", "relative"], ["role", "button", 3, "class", "title", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["role", "button", 3, "title", "click"], [3, "locale", "value", "valueChange"], [3, "locale", "value", "disabledDate", "valueChange", "decadePanelShow"], [3, "locale", "value", "disabledDate", "valueChange", "yearPanelShow"]], template: function CalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵtemplate(2, CalendarHeaderComponent_a_2_Template, 1, 4, "a", 1);
        ɵngcc0.ɵɵtemplate(3, CalendarHeaderComponent_a_3_Template, 1, 4, "a", 1);
        ɵngcc0.ɵɵelementStart(4, "span");
        ɵngcc0.ɵɵtemplate(5, CalendarHeaderComponent_ng_container_5_Template, 3, 5, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, CalendarHeaderComponent_a_6_Template, 1, 4, "a", 1);
        ɵngcc0.ɵɵtemplate(7, CalendarHeaderComponent_a_7_Template, 1, 4, "a", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementContainerStart(8, 3);
        ɵngcc0.ɵɵtemplate(9, CalendarHeaderComponent_ng_container_9_Template, 2, 2, "ng-container", 4);
        ɵngcc0.ɵɵtemplate(10, CalendarHeaderComponent_ng_container_10_Template, 2, 3, "ng-container", 4);
        ɵngcc0.ɵɵtemplate(11, CalendarHeaderComponent_ng_container_11_Template, 2, 3, "ng-container", 4);
        ɵngcc0.ɵɵelementContainerEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.enablePrev && !ctx.showTimePicker);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.enablePrev && !ctx.showTimePicker);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-", ctx.locale.monthBeforeYear ? "my-select" : "ym-select", "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.yearMonthDaySelectors);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.enableNext && !ctx.showTimePicker);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.enableNext && !ctx.showTimePicker);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.panelMode);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "decade");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "year");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "month");
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, DecadePanelComponent,
        YearPanelComponent,
        MonthPanelComponent]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarHeaderComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-header',
                exportAs: 'calendarHeader',
                template: "<div class=\"{{ prefixCls }}-header\">\r\n  <div style=\"position: relative;\">\r\n    <a *ngIf=\"enablePrev && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-prev-year-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousYear()\"\r\n      title=\"{{ locale.previousYear }}\"\r\n    ></a>\r\n    <a *ngIf=\"enablePrev && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-prev-month-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousMonth()\"\r\n      title=\"{{ locale.previousMonth }}\"\r\n    ></a>\r\n\r\n    <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\">\r\n      <ng-container *ngFor=\"let selector of yearMonthDaySelectors\">\r\n        <a class=\"{{ selector.className }}\"\r\n          role=\"button\"\r\n          (click)=\"selector.onClick ? selector.onClick() : null\"\r\n          title=\"{{ selector.title || null }}\"\r\n        >\r\n          {{ selector.label }}\r\n        </a>\r\n      </ng-container>\r\n    </span>\r\n\r\n    <a *ngIf=\"enableNext && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-next-month-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextMonth()\"\r\n      title=\"{{ locale.nextMonth }}\"\r\n    ></a>\r\n    <a *ngIf=\"enableNext && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-next-year-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextYear()\"\r\n      title=\"{{ locale.nextYear }}\"\r\n    ></a>\r\n  </div>\r\n\r\n  <ng-container [ngSwitch]=\"panelMode\">\r\n    <ng-container *ngSwitchCase=\"'decade'\">\r\n      <decade-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        (valueChange)=\"onChooseDecade($event)\"\r\n      ></decade-panel>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'year'\">\r\n      <year-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        [disabledDate]=\"disabledYear\"\r\n        (valueChange)=\"onChooseYear($event)\"\r\n        (decadePanelShow)=\"changePanel('decade')\"\r\n      ></year-panel>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'month'\">\r\n      <month-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        [disabledDate]=\"disabledMonth\"\r\n        (valueChange)=\"onChooseMonth($event)\"\r\n        (yearPanelShow)=\"changePanel('year')\"\r\n      ></month-panel>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>"
            }]
    }], function () { return [{ type: ɵngcc2.DateHelperService }]; }, { enablePrev: [{
            type: core.Input
        }], enableNext: [{
            type: core.Input
        }], showTimePicker: [{
            type: core.Input
        }], valueChange: [{
            type: core.Output
        }], panelModeChange: [{
            type: core.Output
        }], chooseDecade: [{
            type: core.Output
        }], chooseYear: [{
            type: core.Output
        }], chooseMonth: [{
            type: core.Output
        }], value: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], disabledMonth: [{
            type: core.Input
        }], disabledYear: [{
            type: core.Input
        }], panelMode: [{
            type: core.Input
        }] }); })();
        return CalendarHeaderComponent;
    }());
    if (false) {
        /** @type {?} */
        CalendarHeaderComponent.prototype.locale;
        /** @type {?} */
        CalendarHeaderComponent.prototype.enablePrev;
        /** @type {?} */
        CalendarHeaderComponent.prototype.enableNext;
        /** @type {?} */
        CalendarHeaderComponent.prototype.disabledMonth;
        /** @type {?} */
        CalendarHeaderComponent.prototype.disabledYear;
        /** @type {?} */
        CalendarHeaderComponent.prototype.showTimePicker;
        /** @type {?} */
        CalendarHeaderComponent.prototype.value;
        /** @type {?} */
        CalendarHeaderComponent.prototype.valueChange;
        /** @type {?} */
        CalendarHeaderComponent.prototype.panelMode;
        /** @type {?} */
        CalendarHeaderComponent.prototype.panelModeChange;
        /** @type {?} */
        CalendarHeaderComponent.prototype.chooseDecade;
        /** @type {?} */
        CalendarHeaderComponent.prototype.chooseYear;
        /** @type {?} */
        CalendarHeaderComponent.prototype.chooseMonth;
        /** @type {?} */
        CalendarHeaderComponent.prototype.prefixCls;
        /** @type {?} */
        CalendarHeaderComponent.prototype.yearMonthDaySelectors;
        /**
         * @type {?}
         * @private
         */
        CalendarHeaderComponent.prototype.yearToMonth;
        /**
         * @type {?}
         * @private
         */
        CalendarHeaderComponent.prototype.dateHelper;
    }
    /**
     * @record
     */
    function YearMonthDaySelector() { }
    if (false) {
        /** @type {?} */
        YearMonthDaySelector.prototype.className;
        /** @type {?|undefined} */
        YearMonthDaySelector.prototype.title;
        /** @type {?} */
        YearMonthDaySelector.prototype.label;
        /**
         * @return {?}
         */
        YearMonthDaySelector.prototype.onClick = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarInputComponent = /** @class */ (function () {
        function CalendarInputComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.valueChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.invalidInputClass = '';
        }
        /**
         * @return {?}
         */
        CalendarInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.autoFocus) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.inputRef.nativeElement.focus(); }));
            }
        };
        /**
         * @param {?} event
         * @param {?=} isEnter
         * @return {?}
         */
        CalendarInputComponent.prototype.onInputKeyup = /**
         * @param {?} event
         * @param {?=} isEnter
         * @return {?}
         */
        function (event, isEnter) {
            if (isEnter === void 0) { isEnter = false; }
            /** @type {?} */
            var date = this.checkValidInputDate(event);
            if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
                return;
            }
            this.value = date;
            this.valueChange.emit({ date: date, isEnter: isEnter });
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarInputComponent.prototype.toReadableInput = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value ? this.dateHelper.format(value.nativeDate, this.format) : '';
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        CalendarInputComponent.prototype.checkValidInputDate = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var input = ((/** @type {?} */ (event.target))).value;
            /** @type {?} */
            var date = new core$1.CandyDate(input);
            this.invalidInputClass = '';
            if (!date.isValid() || input !== this.toReadableInput(date)) {
                // Should also match the input format exactly
                this.invalidInputClass = this.prefixCls + "-input-invalid";
                return null;
            }
            return date;
        };
        /** @nocollapse */
        CalendarInputComponent.ctorParameters = function () { return [
            { type: i18n.DateHelperService }
        ]; };
        CalendarInputComponent.propDecorators = {
            locale: [{ type: core.Input }],
            format: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            value: [{ type: core.Input }],
            autoFocus: [{ type: core.Input }],
            inputRef: [{ type: core.ViewChild, args: ['inputElement', { static: true },] }],
            valueChange: [{ type: core.Output }]
        };
CalendarInputComponent.ɵfac = function CalendarInputComponent_Factory(t) { return new (t || CalendarInputComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService)); };
CalendarInputComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarInputComponent, selectors: [["calendar-input"]], viewQuery: function CalendarInputComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
    } }, inputs: { value: "value", locale: "locale", format: "format", placeholder: "placeholder", disabledDate: "disabledDate", autoFocus: "autoFocus" }, outputs: { valueChange: "valueChange" }, exportAs: ["calendarInput"], decls: 5, vars: 16, consts: [[3, "placeholder", "value", "input", "keyup.enter"], ["inputElement", ""], ["role", "button", 3, "title"]], template: function CalendarInputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "input", 0, 1);
        ɵngcc0.ɵɵlistener("input", function CalendarInputComponent_Template_input_input_2_listener($event) { return ctx.onInputKeyup($event); })("keyup.enter", function CalendarInputComponent_Template_input_keyup_enter_2_listener($event) { return ctx.onInputKeyup($event, true); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "a", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input-wrap");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-date-input-wrap");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-input ", ctx.invalidInputClass, "");
        ɵngcc0.ɵɵpropertyInterpolate("placeholder", ctx.placeholder || ctx.locale.dateSelect);
        ɵngcc0.ɵɵpropertyInterpolate("value", ctx.toReadableInput(ctx.value));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-clear-btn");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.locale.clear);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarInputComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-input',
                exportAs: 'calendarInput',
                template: "<div class=\"{{ prefixCls }}-input-wrap\">\r\n  <div class=\"{{ prefixCls }}-date-input-wrap\">\r\n    <input\r\n      class=\"{{ prefixCls }}-input {{ invalidInputClass }}\"\r\n      placeholder=\"{{ placeholder || locale.dateSelect }}\"\r\n      value=\"{{ toReadableInput(value) }}\"\r\n      (input)=\"onInputKeyup($event)\"\r\n      (keyup.enter)=\"onInputKeyup($event, true)\"\r\n      #inputElement\r\n    />\r\n  </div>\r\n  <a class=\"{{ prefixCls }}-clear-btn\" role=\"button\" title=\"{{ locale.clear }}\"></a>\r\n</div>\r\n"
            }]
    }], function () { return [{ type: ɵngcc2.DateHelperService }]; }, { valueChange: [{
            type: core.Output
        }], value: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], format: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }], autoFocus: [{
            type: core.Input
        }], inputRef: [{
            type: core.ViewChild,
            args: ['inputElement', { static: true }]
        }] }); })();
        return CalendarInputComponent;
    }());
    if (false) {
        /** @type {?} */
        CalendarInputComponent.prototype.locale;
        /** @type {?} */
        CalendarInputComponent.prototype.format;
        /** @type {?} */
        CalendarInputComponent.prototype.placeholder;
        /** @type {?} */
        CalendarInputComponent.prototype.disabledDate;
        /** @type {?} */
        CalendarInputComponent.prototype.value;
        /** @type {?} */
        CalendarInputComponent.prototype.autoFocus;
        /** @type {?} */
        CalendarInputComponent.prototype.inputRef;
        /** @type {?} */
        CalendarInputComponent.prototype.valueChange;
        /** @type {?} */
        CalendarInputComponent.prototype.prefixCls;
        /** @type {?} */
        CalendarInputComponent.prototype.invalidInputClass;
        /**
         * @type {?}
         * @private
         */
        CalendarInputComponent.prototype.dateHelper;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OkButtonComponent = /** @class */ (function () {
        function OkButtonComponent() {
            this.okDisabled = false;
            this.clickOk = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
        }
        OkButtonComponent.propDecorators = {
            locale: [{ type: core.Input }],
            okDisabled: [{ type: core.Input }],
            clickOk: [{ type: core.Output }]
        };
OkButtonComponent.ɵfac = function OkButtonComponent_Factory(t) { return new (t || OkButtonComponent)(); };
OkButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: OkButtonComponent, selectors: [["ok-button"]], inputs: { okDisabled: "okDisabled", locale: "locale" }, outputs: { clickOk: "clickOk" }, exportAs: ["okButton"], decls: 2, vars: 5, consts: [["role", "button", 3, "click"]], template: function OkButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "a", 0);
        ɵngcc0.ɵɵlistener("click", function OkButtonComponent_Template_a_click_0_listener() { return ctx.okDisabled ? null : ctx.clickOk.emit(); });
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-ok-btn ", ctx.okDisabled ? ctx.prefixCls + "-ok-btn-disabled" : "", "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.locale.ok, " ");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OkButtonComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'ok-button',
                exportAs: 'okButton',
                template: "<a\r\n    class=\"{{ prefixCls }}-ok-btn {{ okDisabled ? prefixCls + '-ok-btn-disabled' : '' }}\"\r\n    role=\"button\"\r\n    (click)=\"okDisabled ? null : clickOk.emit()\"\r\n  >\r\n    {{ locale.ok }}\r\n  </a>"
            }]
    }], function () { return []; }, { okDisabled: [{
            type: core.Input
        }], clickOk: [{
            type: core.Output
        }], locale: [{
            type: core.Input
        }] }); })();
        return OkButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        OkButtonComponent.prototype.locale;
        /** @type {?} */
        OkButtonComponent.prototype.okDisabled;
        /** @type {?} */
        OkButtonComponent.prototype.clickOk;
        /** @type {?} */
        OkButtonComponent.prototype.prefixCls;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TimePickerButtonComponent = /** @class */ (function () {
        function TimePickerButtonComponent() {
            this.timePickerDisabled = false;
            this.showTimePicker = false;
            this.showTimePickerChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
        }
        /**
         * @return {?}
         */
        TimePickerButtonComponent.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this.showTimePicker = !this.showTimePicker;
            this.showTimePickerChange.emit(this.showTimePicker);
        };
        TimePickerButtonComponent.propDecorators = {
            locale: [{ type: core.Input }],
            timePickerDisabled: [{ type: core.Input }],
            showTimePicker: [{ type: core.Input }],
            showTimePickerChange: [{ type: core.Output }]
        };
TimePickerButtonComponent.ɵfac = function TimePickerButtonComponent_Factory(t) { return new (t || TimePickerButtonComponent)(); };
TimePickerButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TimePickerButtonComponent, selectors: [["time-picker-button"]], inputs: { timePickerDisabled: "timePickerDisabled", showTimePicker: "showTimePicker", locale: "locale" }, outputs: { showTimePickerChange: "showTimePickerChange" }, exportAs: ["timePickerButton"], decls: 2, vars: 5, consts: [["role", "button", 3, "click"]], template: function TimePickerButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "a", 0);
        ɵngcc0.ɵɵlistener("click", function TimePickerButtonComponent_Template_a_click_0_listener() { return ctx.timePickerDisabled ? null : ctx.onClick(); });
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-time-picker-btn ", ctx.timePickerDisabled ? ctx.prefixCls + "-time-picker-btn-disabled" : "", "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.showTimePicker ? ctx.locale.dateSelect : ctx.locale.timeSelect, "\n");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TimePickerButtonComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'time-picker-button',
                exportAs: 'timePickerButton',
                template: "<a\r\n  class=\"{{ prefixCls }}-time-picker-btn {{ timePickerDisabled ? prefixCls + '-time-picker-btn-disabled' : '' }}\"\r\n  role=\"button\"\r\n  (click)=\"timePickerDisabled ? null : onClick()\"\r\n>\r\n  {{ showTimePicker ? locale.dateSelect : locale.timeSelect }}\r\n</a>"
            }]
    }], function () { return []; }, { timePickerDisabled: [{
            type: core.Input
        }], showTimePicker: [{
            type: core.Input
        }], showTimePickerChange: [{
            type: core.Output
        }], locale: [{
            type: core.Input
        }] }); })();
        return TimePickerButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        TimePickerButtonComponent.prototype.locale;
        /** @type {?} */
        TimePickerButtonComponent.prototype.timePickerDisabled;
        /** @type {?} */
        TimePickerButtonComponent.prototype.showTimePicker;
        /** @type {?} */
        TimePickerButtonComponent.prototype.showTimePickerChange;
        /** @type {?} */
        TimePickerButtonComponent.prototype.prefixCls;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TodayButtonComponent = /** @class */ (function () {
        function TodayButtonComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.hasTimePicker = false;
            this.clickToday = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.isDisabled = false;
            this.now = new core$1.CandyDate();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        TodayButtonComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.disabledDate) {
                this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
            }
            if (changes.locale) {
                // NOTE: Compat for DatePipe formatting rules
                /** @type {?} */
                var dateFormat = this.locale.dateFormat;
                if (this.dateHelper.relyOnDatePipe) {
                    dateFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dateFormat);
                }
                this.title = this.dateHelper.format(this.now.nativeDate, dateFormat);
            }
        };
        /**
         * @return {?}
         */
        TodayButtonComponent.prototype.onClickToday = /**
         * @return {?}
         */
        function () {
            this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
        };
        /** @nocollapse */
        TodayButtonComponent.ctorParameters = function () { return [
            { type: i18n.DateHelperService }
        ]; };
        TodayButtonComponent.propDecorators = {
            locale: [{ type: core.Input }],
            hasTimePicker: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            clickToday: [{ type: core.Output }]
        };
TodayButtonComponent.ɵfac = function TodayButtonComponent_Factory(t) { return new (t || TodayButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService)); };
TodayButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TodayButtonComponent, selectors: [["today-button"]], inputs: { hasTimePicker: "hasTimePicker", locale: "locale", disabledDate: "disabledDate" }, outputs: { clickToday: "clickToday" }, exportAs: ["todayButton"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [["role", "button", 3, "title", "click"]], template: function TodayButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "a", 0);
        ɵngcc0.ɵɵlistener("click", function TodayButtonComponent_Template_a_click_0_listener() { return ctx.isDisabled ? null : ctx.onClickToday(); });
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-today-btn ", ctx.isDisabled ? ctx.prefixCls + "-today-btn-disabled" : "", "");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.hasTimePicker ? ctx.locale.now : ctx.locale.today, "\n");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TodayButtonComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'today-button',
                exportAs: 'todayButton',
                template: "<a\r\n  class=\"{{ prefixCls }}-today-btn {{ isDisabled ? prefixCls + '-today-btn-disabled' : '' }}\"\r\n  role=\"button\"\r\n  (click)=\"isDisabled ? null : onClickToday()\"\r\n  title=\"{{ title }}\"\r\n>\r\n  {{ hasTimePicker ? locale.now : locale.today }}\r\n</a>"
            }]
    }], function () { return [{ type: ɵngcc2.DateHelperService }]; }, { hasTimePicker: [{
            type: core.Input
        }], clickToday: [{
            type: core.Output
        }], locale: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }] }); })();
        return TodayButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        TodayButtonComponent.prototype.locale;
        /** @type {?} */
        TodayButtonComponent.prototype.hasTimePicker;
        /** @type {?} */
        TodayButtonComponent.prototype.disabledDate;
        /** @type {?} */
        TodayButtonComponent.prototype.clickToday;
        /** @type {?} */
        TodayButtonComponent.prototype.prefixCls;
        /** @type {?} */
        TodayButtonComponent.prototype.isDisabled;
        /** @type {?} */
        TodayButtonComponent.prototype.title;
        /**
         * @type {?}
         * @private
         */
        TodayButtonComponent.prototype.now;
        /**
         * @type {?}
         * @private
         */
        TodayButtonComponent.prototype.dateHelper;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAX_ROW = 4;
    /** @type {?} */
    var MAX_COL = 3;
    var DecadePanelComponent = /** @class */ (function () {
        function DecadePanelComponent() {
            this.valueChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-decade-panel';
        }
        Object.defineProperty(DecadePanelComponent.prototype, "startYear", {
            get: /**
             * @return {?}
             */
            function () {
                return parseInt("" + this.value.getYear() / 100, 10) * 100;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DecadePanelComponent.prototype, "endYear", {
            get: /**
             * @return {?}
             */
            function () {
                return this.startYear + 99;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        DecadePanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.value) {
                this.render();
            }
        };
        /**
         * @return {?}
         */
        DecadePanelComponent.prototype.previousCentury = /**
         * @return {?}
         */
        function () {
            this.gotoYear(-100);
        };
        /**
         * @return {?}
         */
        DecadePanelComponent.prototype.nextCentury = /**
         * @return {?}
         */
        function () {
            this.gotoYear(100);
        };
        /**
         * @param {?} _index
         * @param {?} decadeData
         * @return {?}
         */
        DecadePanelComponent.prototype.trackPanelDecade = /**
         * @param {?} _index
         * @param {?} decadeData
         * @return {?}
         */
        function (_index, decadeData) {
            return decadeData.content;
        };
        /**
         * @private
         * @return {?}
         */
        DecadePanelComponent.prototype.render = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.value) {
                this.panelDecades = this.makePanelDecades();
            }
        };
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        DecadePanelComponent.prototype.gotoYear = 
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        function (amount) {
            this.value = this.value.addYears(amount);
            // this.valueChange.emit(this.value); // Do not try to trigger final value change
            this.render();
        };
        /**
         * @private
         * @param {?} startYear
         * @return {?}
         */
        DecadePanelComponent.prototype.chooseDecade = /**
         * @private
         * @param {?} startYear
         * @return {?}
         */
        function (startYear) {
            this.value = this.value.setYear(startYear);
            this.valueChange.emit(this.value);
        };
        /**
         * @private
         * @return {?}
         */
        DecadePanelComponent.prototype.makePanelDecades = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var decades = [];
            /** @type {?} */
            var currentYear = this.value.getYear();
            /** @type {?} */
            var startYear = this.startYear;
            /** @type {?} */
            var endYear = this.endYear;
            /** @type {?} */
            var previousYear = startYear - 10;
            /** @type {?} */
            var index = 0;
            for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
                decades[rowIndex] = [];
                var _loop_1 = function (colIndex) {
                    var _a;
                    /** @type {?} */
                    var start = previousYear + index * 10;
                    /** @type {?} */
                    var end = previousYear + index * 10 + 9;
                    /** @type {?} */
                    var content = start + "-" + end;
                    /** @type {?} */
                    var cell = (decades[rowIndex][colIndex] = {
                        content: content,
                        title: content,
                        isCurrent: currentYear >= start && currentYear <= end,
                        isLowerThanStart: end < startYear,
                        isBiggerThanEnd: start > endYear,
                        classMap: null,
                        onClick: null
                    });
                    cell.classMap = (_a = {},
                        _a[this_1.prefixCls + "-cell"] = true,
                        _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                        _a[this_1.prefixCls + "-last-century-cell"] = cell.isLowerThanStart,
                        _a[this_1.prefixCls + "-next-century-cell"] = cell.isBiggerThanEnd,
                        _a);
                    if (cell.isLowerThanStart) {
                        cell.onClick = (/**
                         * @return {?}
                         */
                        function () { return _this.previousCentury(); });
                    }
                    else if (cell.isBiggerThanEnd) {
                        cell.onClick = (/**
                         * @return {?}
                         */
                        function () { return _this.nextCentury(); });
                    }
                    else {
                        cell.onClick = (/**
                         * @return {?}
                         */
                        function () { return _this.chooseDecade(start); });
                    }
                    index++;
                };
                var this_1 = this;
                for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                    _loop_1(colIndex);
                }
            }
            return decades;
        };
        /** @nocollapse */
        DecadePanelComponent.ctorParameters = function () { return []; };
        DecadePanelComponent.propDecorators = {
            locale: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }]
        };
DecadePanelComponent.ɵfac = function DecadePanelComponent_Factory(t) { return new (t || DecadePanelComponent)(); };
DecadePanelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DecadePanelComponent, selectors: [["decade-panel"]], inputs: { value: "value", locale: "locale" }, outputs: { valueChange: "valueChange" }, exportAs: ["decadePanel"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 10, vars: 29, consts: [["role", "button", 3, "title", "click"], ["cellSpacing", "0", "role", "grid"], ["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], ["role", "gridcell", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell", 3, "title", "ngClass", "click"]], template: function DecadePanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "a", 0);
        ɵngcc0.ɵɵlistener("click", function DecadePanelComponent_Template_a_click_2_listener() { return ctx.previousCentury(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div");
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "a", 0);
        ɵngcc0.ɵɵlistener("click", function DecadePanelComponent_Template_a_click_5_listener() { return ctx.nextCentury(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div");
        ɵngcc0.ɵɵelementStart(7, "table", 1);
        ɵngcc0.ɵɵelementStart(8, "tbody");
        ɵngcc0.ɵɵtemplate(9, DecadePanelComponent_tr_9_Template, 2, 2, "tr", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.prefixCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-century-btn");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.locale.previousCentury);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-century");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate2(" ", ctx.startYear, "-", ctx.endYear, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-century-btn");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.locale.nextCentury);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-table");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-tbody");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.panelDecades);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DecadePanelComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'decade-panel',
                exportAs: 'decadePanel',
                template: "<div class=\"{{ prefixCls }}\">\r\n  <div class=\"{{ prefixCls }}-header\">\r\n    <a\r\n      class=\"{{ prefixCls }}-prev-century-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousCentury()\"\r\n      title=\"{{ locale.previousCentury }}\"\r\n    ></a>\r\n\r\n    <div class=\"{{ prefixCls }}-century\">\r\n      {{ startYear }}-{{ endYear }}\r\n    </div>\r\n    <a\r\n      class=\"{{ prefixCls }}-next-century-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextCentury()\"\r\n      title=\"{{ locale.nextCentury }}\"\r\n    ></a>\r\n  </div>\r\n  <div class=\"{{ prefixCls }}-body\">\r\n    <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n      <tbody class=\"{{ prefixCls }}-tbody\">\r\n        <tr *ngFor=\"let row of panelDecades\" role=\"row\">\r\n          <td *ngFor=\"let cell of row; trackBy: trackPanelDecade\"\r\n            role=\"gridcell\"\r\n            title=\"{{ cell.title }}\"\r\n            (click)=\"cell.onClick()\"\r\n            [ngClass]=\"cell.classMap\"\r\n          >\r\n            <a class=\"{{ prefixCls }}-decade\">{{ cell.content }}</a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"
            }]
    }], function () { return []; }, { valueChange: [{
            type: core.Output
        }], value: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }] }); })();
        return DecadePanelComponent;
    }());
    if (false) {
        /** @type {?} */
        DecadePanelComponent.prototype.locale;
        /** @type {?} */
        DecadePanelComponent.prototype.value;
        /** @type {?} */
        DecadePanelComponent.prototype.valueChange;
        /** @type {?} */
        DecadePanelComponent.prototype.prefixCls;
        /** @type {?} */
        DecadePanelComponent.prototype.panelDecades;
    }
    /**
     * @record
     */
    function PanelDecadeData() { }
    if (false) {
        /** @type {?} */
        PanelDecadeData.prototype.content;
        /** @type {?} */
        PanelDecadeData.prototype.title;
        /** @type {?} */
        PanelDecadeData.prototype.isCurrent;
        /** @type {?} */
        PanelDecadeData.prototype.isLowerThanStart;
        /** @type {?} */
        PanelDecadeData.prototype.isBiggerThanEnd;
        /** @type {?|undefined} */
        PanelDecadeData.prototype.classMap;
        /** @type {?} */
        PanelDecadeData.prototype.onClick;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MonthPanelComponent = /** @class */ (function () {
        function MonthPanelComponent() {
            this.valueChange = new core.EventEmitter();
            this.yearPanelShow = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-month-panel';
        }
        /**
         * @return {?}
         */
        MonthPanelComponent.prototype.previousYear = /**
         * @return {?}
         */
        function () {
            this.gotoYear(-1);
        };
        /**
         * @return {?}
         */
        MonthPanelComponent.prototype.nextYear = /**
         * @return {?}
         */
        function () {
            this.gotoYear(1);
        };
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        MonthPanelComponent.prototype.gotoYear = 
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        function (amount) {
            this.value = this.value.addYears(amount);
            // this.valueChange.emit(this.value); // Do not try to trigger final value change
        };
        MonthPanelComponent.propDecorators = {
            locale: [{ type: core.Input }],
            value: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            yearPanelShow: [{ type: core.Output }]
        };
MonthPanelComponent.ɵfac = function MonthPanelComponent_Factory(t) { return new (t || MonthPanelComponent)(); };
MonthPanelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MonthPanelComponent, selectors: [["month-panel"]], inputs: { value: "value", locale: "locale", disabledDate: "disabledDate" }, outputs: { valueChange: "valueChange", yearPanelShow: "yearPanelShow" }, exportAs: ["monthPanel"], decls: 12, vars: 31, consts: [["role", "button", 3, "title", "click"], [3, "prefixCls", "disabledDate", "value", "valueChange"]], template: function MonthPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "div");
        ɵngcc0.ɵɵelementStart(3, "a", 0);
        ɵngcc0.ɵɵlistener("click", function MonthPanelComponent_Template_a_click_3_listener() { return ctx.previousYear(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "a", 0);
        ɵngcc0.ɵɵlistener("click", function MonthPanelComponent_Template_a_click_4_listener() { return ctx.yearPanelShow.emit(); });
        ɵngcc0.ɵɵelementStart(5, "span");
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "span");
        ɵngcc0.ɵɵtext(8, "x");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "a", 0);
        ɵngcc0.ɵɵlistener("click", function MonthPanelComponent_Template_a_click_9_listener() { return ctx.nextYear(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div");
        ɵngcc0.ɵɵelementStart(11, "month-table", 1);
        ɵngcc0.ɵɵlistener("valueChange", function MonthPanelComponent_Template_month_table_valueChange_11_listener($event) { return ctx.valueChange.emit($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.prefixCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-year-btn");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.locale.previousYear);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-year-select");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.locale.yearSelect);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-year-select-content");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.value.getYear());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-year-select-arrow");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-year-btn");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.locale.nextYear);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("prefixCls", "ant-calendar")("disabledDate", ctx.disabledDate)("value", ctx.value);
    } }, directives: [ɵngcc3.MonthTableComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MonthPanelComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'month-panel',
                // tslint:disable-line:component-selector
                exportAs: 'monthPanel',
                template: "<div class=\"{{ prefixCls }}\">\r\n  <div>\r\n    <div class=\"{{ prefixCls }}-header\">\r\n      <a\r\n        class=\"{{ prefixCls }}-prev-year-btn\"\r\n        role=\"button\"\r\n        (click)=\"previousYear()\"\r\n        title=\"{{ locale.previousYear }}\"\r\n      ></a>\r\n\r\n      <a\r\n        class=\"{{ prefixCls }}-year-select\"\r\n        role=\"button\"\r\n        (click)=\"yearPanelShow.emit()\"\r\n        title=\"{{ locale.yearSelect }}\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-year-select-content\">{{ value.getYear() }}</span>\r\n        <span class=\"{{ prefixCls }}-year-select-arrow\">x</span>\r\n      </a>\r\n\r\n      <a\r\n        class=\"{{ prefixCls }}-next-year-btn\"\r\n        role=\"button\"\r\n        (click)=\"nextYear()\"\r\n        title=\"{{ locale.nextYear }}\"\r\n      ></a>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-body\">\r\n      <month-table [prefixCls]=\"'ant-calendar'\" [disabledDate]=\"disabledDate\" [value]=\"value\" (valueChange)=\"valueChange.emit($event)\"></month-table>\r\n    </div>\r\n  </div>\r\n</div>"
            }]
    }], function () { return []; }, { valueChange: [{
            type: core.Output
        }], yearPanelShow: [{
            type: core.Output
        }], value: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }] }); })();
        return MonthPanelComponent;
    }());
    if (false) {
        /** @type {?} */
        MonthPanelComponent.prototype.locale;
        /** @type {?} */
        MonthPanelComponent.prototype.value;
        /** @type {?} */
        MonthPanelComponent.prototype.disabledDate;
        /** @type {?} */
        MonthPanelComponent.prototype.valueChange;
        /** @type {?} */
        MonthPanelComponent.prototype.yearPanelShow;
        /** @type {?} */
        MonthPanelComponent.prototype.prefixCls;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /** @type {?} */
    var defaultDisabledTime = {
        nzDisabledHours: /**
         * @return {?}
         */
        function () {
            return [];
        },
        nzDisabledMinutes: /**
         * @return {?}
         */
        function () {
            return [];
        },
        nzDisabledSeconds: /**
         * @return {?}
         */
        function () {
            return [];
        }
    };
    /**
     * @param {?} value
     * @param {?} disabledTime
     * @return {?}
     */
    function getTimeConfig(value, disabledTime) {
        /** @type {?} */
        var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : ((/** @type {?} */ ({})));
        disabledTimeConfig = __assign({}, defaultDisabledTime, disabledTimeConfig);
        return disabledTimeConfig;
    }
    /**
     * @param {?} value
     * @param {?} disabledTimeConfig
     * @return {?}
     */
    function isTimeValidByConfig(value, disabledTimeConfig) {
        /** @type {?} */
        var invalidTime = false;
        if (value) {
            /** @type {?} */
            var hour = value.getHours();
            /** @type {?} */
            var minutes = value.getMinutes();
            /** @type {?} */
            var seconds = value.getSeconds();
            /** @type {?} */
            var disabledHours = disabledTimeConfig.nzDisabledHours();
            if (disabledHours.indexOf(hour) === -1) {
                /** @type {?} */
                var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
                if (disabledMinutes.indexOf(minutes) === -1) {
                    /** @type {?} */
                    var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                    invalidTime = disabledSeconds.indexOf(seconds) !== -1;
                }
                else {
                    invalidTime = true;
                }
            }
            else {
                invalidTime = true;
            }
        }
        return !invalidTime;
    }
    /**
     * @param {?} value
     * @param {?} disabledTime
     * @return {?}
     */
    function isTimeValid(value, disabledTime) {
        /** @type {?} */
        var disabledTimeConfig = getTimeConfig(value, disabledTime);
        return isTimeValidByConfig(value, disabledTimeConfig);
    }
    /**
     * @param {?} value
     * @param {?=} disabledDate
     * @param {?=} disabledTime
     * @return {?}
     */
    function isAllowedDate(value, disabledDate, disabledTime) {
        if (disabledDate) {
            if (disabledDate(value.nativeDate)) {
                return false;
            }
        }
        if (disabledTime) {
            if (!isTimeValid(value, disabledTime)) {
                return false;
            }
        }
        return true;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateRangePopupComponent = /** @class */ (function () {
        function DateRangePopupComponent() {
            var _this = this;
            this.panelModeChange = new core.EventEmitter();
            this.calendarChange = new core.EventEmitter();
            this.valueChange = new core.EventEmitter();
            this.inputChange = new core.EventEmitter();
            this.resultOk = new core.EventEmitter(); // Emitted when done with date selecting
            // Emitted when done with date selecting
            this.closePicker = new core.EventEmitter(); // Notify outside to close the picker panel
            // Notify outside to close the picker panel
            this.prefixCls = 'ant-calendar';
            this.showTimePicker = false;
            this.partTypeMap = { left: 0, right: 1 };
            this.disabledStartTime = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                return _this.disabledTime && _this.disabledTime(value, 'start');
            });
            this.disabledEndTime = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                return _this.disabledTime && _this.disabledTime(value, 'end');
            });
        }
        Object.defineProperty(DateRangePopupComponent.prototype, "hasTimePicker", {
            get: 
            // Range ONLY
            /**
             * @return {?}
             */
            function () {
                return !!this.showTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateRangePopupComponent.prototype, "hasFooter", {
            get: /**
             * @return {?}
             */
            function () {
                return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
            },
            enumerable: true,
            configurable: true
        });
        // tslint:disable-line:no-any
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.ngOnInit = 
        // tslint:disable-line:no-any
        /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Initialization for range properties to prevent errors while later assignment
            if (this.isRange) {
                ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach((/**
                 * @param {?} prop
                 * @return {?}
                 */
                function (prop) { return _this.initialArray(prop); }));
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        DateRangePopupComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (this.isRange) {
                if (changes.value) {
                    // Re-initialize all related values
                    this.clearHoverValue();
                    this.selectedValue = (/** @type {?} */ (this.value));
                    this.valueForRangeShow = this.normalizeRangeValue((/** @type {?} */ (this.value)));
                }
            }
            // Parse showTime options
            if (changes.showTime || changes.disabledTime) {
                if (this.showTime) {
                    this.buildTimeOptions();
                }
            }
            // Show time picker when assigned panel mode as "time"
            if (changes.panelMode && this.hasTimePicker) {
                this.showTimePicker = this.panelMode === 'time';
            }
        };
        /**
         * @param {?} show
         * @return {?}
         */
        DateRangePopupComponent.prototype.onShowTimePickerChange = /**
         * @param {?} show
         * @return {?}
         */
        function (show) {
            // this.panelMode = show ? 'time' : 'date';
            // this.panelModeChange.emit(this.panelMode);
            this.panelModeChange.emit(show ? 'time' : 'date');
        };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.onClickOk = /**
         * @return {?}
         */
        function () {
            this.setValue(this.value);
            this.resultOk.emit();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.onClickToday = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // if (this.isRange) { // Show today is not support by range
            //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
            // } else {
            if (!this.isRange) {
                // tslint:disable-next-line: no-any
                this.value = (/** @type {?} */ (null)); // Clear current value to not sync time by next step
                this.changeValueFromSelect(value);
            }
            this.closePickerPanel();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.onDayHover = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) {
                // When right value is selected, don't do hover
                /** @type {?} */
                var base = this.selectedValue[0];
                if (base.isBeforeDay(value)) {
                    this.hoverValue = [base, value];
                }
                else {
                    this.hoverValue = [value, base];
                }
            }
        };
        /**
         * @param {?} mode
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.onPanelModeChange = /**
         * @param {?} mode
         * @param {?=} partType
         * @return {?}
         */
        function (mode, partType) {
            if (this.isRange) {
                ((/** @type {?} */ (this.panelMode)))[this.getPartTypeIndex(partType)] = mode;
            }
            else {
                this.panelMode = mode;
            }
            this.panelModeChange.emit(this.panelMode);
        };
        /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.onHeaderChange = /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        function (value, partType) {
            if (this.isRange) {
                this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
                this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
            }
        };
        /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.onSelectTime = /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        function (value, partType) {
            if (this.isRange) {
                /** @type {?} */
                var newValue = this.cloneRangeDate((/** @type {?} */ (this.value)));
                /** @type {?} */
                var index = this.getPartTypeIndex(partType);
                newValue[index] = (/** @type {?} */ (this.overrideHms(value, newValue[index])));
                this.setValue(newValue);
            }
            else {
                this.setValue((/** @type {?} */ (this.overrideHms(value, ((/** @type {?} */ (this.value))) || new core$1.CandyDate())))); // If not select a date currently, use today
            }
        };
        /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.changeValueFromInput = /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        function (value, partType) {
            var date = value.date, isEnter = value.isEnter;
            if (this.isRange) {
                /** @type {?} */
                var newRangeValue = partType === 'left' ? [date, this.selectedValue[1]] : [this.selectedValue[0], date];
                /** @type {?} */
                var isValidRange = this.isValidRange(newRangeValue);
                if (isValidRange) {
                    newRangeValue = core$1.sortRangeValue(newRangeValue);
                    this.valueForRangeShow = this.normalizeRangeValue(newRangeValue);
                }
                // ? Why Can not use follow code
                // this.selectedValue[index] = date;
                this.selectedValue = this.cloneRangeDate(newRangeValue);
                this.setValueFromInput(this.cloneRangeDate(newRangeValue), isEnter && isValidRange);
            }
            else {
                this.setValueFromInput(date, isEnter);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.changeValueFromSelect = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.isRange) {
                var _a = __read((/** @type {?} */ (this.selectedValue)), 2), left = _a[0], right = _a[1];
                if ((!left && !right) || (left && right)) {
                    // If totally full or empty, clean up && re-assign left first
                    this.hoverValue = this.selectedValue = [value];
                    this.calendarChange.emit([value.clone()]);
                }
                else if (left && !right) {
                    // If one of them is empty, assign the other one and sort, then set the final values
                    this.clearHoverValue(); // Clean up
                    this.setRangeValue('right', value);
                    this.selectedValue = core$1.sortRangeValue(this.selectedValue); // Sort
                    this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                    this.setValue(this.cloneRangeDate(this.selectedValue));
                    this.calendarChange.emit(this.cloneRangeDate(this.selectedValue));
                }
            }
            else {
                this.setValue(value);
            }
            // this.selectDate.emit(value);
        };
        /**
         * @param {?} direction
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.enablePrevNext = /**
         * @param {?} direction
         * @param {?=} partType
         * @return {?}
         */
        function (direction, partType) {
            if (this.isRange) {
                var _a = __read(this.valueForRangeShow, 2), start = _a[0], end = _a[1];
                /** @type {?} */
                var showMiddle = !start.addMonths(1).isSame(end, 'month');
                if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                    return showMiddle;
                }
                return true;
            }
            else {
                return true;
            }
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getPanelMode = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            if (this.isRange) {
                return (/** @type {?} */ (this.panelMode[this.getPartTypeIndex(partType)]));
            }
            else {
                return (/** @type {?} */ (this.panelMode));
            }
        };
        // Get single value or part value of a range
        // Get single value or part value of a range
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getValue = 
        // Get single value or part value of a range
        /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            if (this.isRange) {
                return ((/** @type {?} */ (this.value)))[this.getPartTypeIndex(partType)];
            }
            else {
                return (/** @type {?} */ (this.value));
            }
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getValueBySelector = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            if (this.isRange) {
                /** @type {?} */
                var valueShow = this.showTimePicker ? this.value : this.valueForRangeShow;
                return ((/** @type {?} */ (valueShow)))[this.getPartTypeIndex(partType)];
            }
            else {
                return (/** @type {?} */ (this.value));
            }
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getPartTypeIndex = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            return this.partTypeMap[(/** @type {?} */ (partType))];
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getPlaceholder = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : ((/** @type {?} */ (this.placeholder)));
        };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.hasSelectedValue = /**
         * @return {?}
         */
        function () {
            return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
        };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.isAllowedSelectedValue = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var selectedValue = this.selectedValue;
            if (selectedValue && selectedValue[0] && selectedValue[1]) {
                return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                    isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
            }
            return false;
        };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.timePickerDisabled = /**
         * @return {?}
         */
        function () {
            if (!this.hasTimePicker) {
                return true;
            }
            if (this.isRange) {
                return !this.hasSelectedValue() || !!this.hoverValue.length;
            }
            else {
                return false;
            }
        };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.okDisabled = /**
         * @return {?}
         */
        function () {
            if (!this.hasTimePicker) {
                return true;
            }
            if (this.isRange) {
                return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
            }
            else {
                return this.value ? !isAllowedDate((/** @type {?} */ (this.value)), this.disabledDate, this.disabledTime) : false;
            }
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getTimeOptions = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            if (this.showTime && this.timeOptions) {
                return this.timeOptions instanceof Array ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
            }
            return null;
        };
        /**
         * @param {?} val
         * @return {?}
         */
        DateRangePopupComponent.prototype.onClickPresetRange = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var value = typeof val === 'function' ? val() : val;
            if (value) {
                this.setValue([new core$1.CandyDate(value[0]), new core$1.CandyDate(value[1])]);
                this.resultOk.emit();
            }
        };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.onPresetRangeMouseLeave = /**
         * @return {?}
         */
        function () {
            this.clearHoverValue();
        };
        /**
         * @param {?} val
         * @return {?}
         */
        DateRangePopupComponent.prototype.onHoverPresetRange = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (typeof val !== 'function') {
                this.hoverValue = [new core$1.CandyDate(val[0]), new core$1.CandyDate(val[1])];
            }
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        DateRangePopupComponent.prototype.getObjectKeys = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            return obj ? Object.keys(obj) : [];
        };
        /**
         * @private
         * @return {?}
         */
        DateRangePopupComponent.prototype.closePickerPanel = /**
         * @private
         * @return {?}
         */
        function () {
            this.closePicker.emit();
        };
        /**
         * @private
         * @return {?}
         */
        DateRangePopupComponent.prototype.clearHoverValue = /**
         * @private
         * @return {?}
         */
        function () {
            this.hoverValue = [];
        };
        /**
         * @private
         * @return {?}
         */
        DateRangePopupComponent.prototype.buildTimeOptions = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.showTime) {
                /** @type {?} */
                var showTime = typeof this.showTime === 'object' ? this.showTime : {};
                if (this.isRange) {
                    /** @type {?} */
                    var value = (/** @type {?} */ (this.value));
                    this.timeOptions = [
                        this.overrideTimeOptions(showTime, value[0], 'start'),
                        this.overrideTimeOptions(showTime, value[1], 'end')
                    ];
                }
                else {
                    this.timeOptions = this.overrideTimeOptions(showTime, (/** @type {?} */ (this.value)));
                }
            }
            else {
                this.timeOptions = null;
            }
        };
        /**
         * @private
         * @param {?} origin
         * @param {?} value
         * @param {?=} partial
         * @return {?}
         */
        DateRangePopupComponent.prototype.overrideTimeOptions = /**
         * @private
         * @param {?} origin
         * @param {?} value
         * @param {?=} partial
         * @return {?}
         */
        function (origin, value, partial) {
            /** @type {?} */
            var disabledTimeFn;
            if (partial) {
                disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
            }
            else {
                disabledTimeFn = this.disabledTime;
            }
            return __assign({}, origin, getTimeConfig(value, disabledTimeFn));
        };
        /**
         * @private
         * @param {?} value
         * @param {?=} emitValue
         * @return {?}
         */
        DateRangePopupComponent.prototype.setValueFromInput = /**
         * @private
         * @param {?} value
         * @param {?=} emitValue
         * @return {?}
         */
        function (value, emitValue) {
            if (emitValue === void 0) { emitValue = true; }
            this.value = value;
            if (emitValue) {
                this.inputChange.emit(this.value);
            }
            this.buildTimeOptions();
        };
        // Set value and trigger change event
        // Set value and trigger change event
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.setValue = 
        // Set value and trigger change event
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // TODO: Sync original time (NOTE: this should take more care of because it may depend on many change sources)
            // if (this.isRange) {
            //   // TODO: Sync time
            // } else {
            //   if (this.value) { // Sync time from the original one if it's available
            //     newValue = this.overrideHms(this.value as CandyDate, newValue as CandyDate);
            //   }
            // }
            this.value = value;
            this.valueChange.emit(this.value);
            this.buildTimeOptions();
        };
        /**
         * @private
         * @param {?} from
         * @param {?} to
         * @return {?}
         */
        DateRangePopupComponent.prototype.overrideHms = /**
         * @private
         * @param {?} from
         * @param {?} to
         * @return {?}
         */
        function (from, to) {
            if (!from || !to) {
                return null;
            }
            return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
        };
        // Check if it's a valid range value
        // Check if it's a valid range value
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.isValidRange = 
        // Check if it's a valid range value
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (Array.isArray(value)) {
                var _a = __read(value, 2), start = _a[0], end = _a[1];
                return !!(start && end);
            }
            return false;
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.normalizeRangeValue = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _a = __read(value, 2), start = _a[0], end = _a[1];
            /** @type {?} */
            var newStart = start || new core$1.CandyDate();
            /** @type {?} */
            var newEnd = end && end.isSameMonth(newStart) ? end.addMonths(1) : end || newStart.addMonths(1);
            return [newStart, newEnd];
        };
        // private isEmptyRangeValue(value: CandyDate[]): boolean {
        //   return !value || !Array.isArray(value) || value.every((val) => !val);
        // }
        // Renew and set a range value to trigger sub-component's change detection
        // private isEmptyRangeValue(value: CandyDate[]): boolean {
        //   return !value || !Array.isArray(value) || value.every((val) => !val);
        // }
        // Renew and set a range value to trigger sub-component's change detection
        /**
         * @private
         * @param {?} partType
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.setRangeValue = 
        // private isEmptyRangeValue(value: CandyDate[]): boolean {
        //   return !value || !Array.isArray(value) || value.every((val) => !val);
        // }
        // Renew and set a range value to trigger sub-component's change detection
        /**
         * @private
         * @param {?} partType
         * @param {?} value
         * @return {?}
         */
        function (partType, value) {
            /** @type {?} */
            var ref = (this.selectedValue = this.cloneRangeDate((/** @type {?} */ (this.selectedValue))));
            ref[this.getPartTypeIndex(partType)] = value;
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.cloneRangeDate = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return (/** @type {?} */ ([value[0] && value[0].clone(), value[1] && value[1].clone()]));
        };
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        DateRangePopupComponent.prototype.initialArray = /**
         * @private
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (!this[key] || !Array.isArray(this[key])) {
                this[key] = [];
            }
        };
        DateRangePopupComponent.propDecorators = {
            isRange: [{ type: core.Input }],
            showWeek: [{ type: core.Input }],
            locale: [{ type: core.Input }],
            format: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            disabledTime: [{ type: core.Input }],
            showToday: [{ type: core.Input }],
            showTime: [{ type: core.Input }],
            extraFooter: [{ type: core.Input }],
            ranges: [{ type: core.Input }],
            dateRender: [{ type: core.Input }],
            popupStyle: [{ type: core.Input }],
            dropdownClassName: [{ type: core.Input }],
            panelMode: [{ type: core.Input }],
            value: [{ type: core.Input }],
            panelModeChange: [{ type: core.Output }],
            calendarChange: [{ type: core.Output }],
            valueChange: [{ type: core.Output }],
            inputChange: [{ type: core.Output }],
            resultOk: [{ type: core.Output }],
            closePicker: [{ type: core.Output }]
        };
DateRangePopupComponent.ɵfac = function DateRangePopupComponent_Factory(t) { return new (t || DateRangePopupComponent)(); };
DateRangePopupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DateRangePopupComponent, selectors: [["date-range-popup"]], inputs: { value: "value", panelMode: "panelMode", isRange: "isRange", showWeek: "showWeek", locale: "locale", format: "format", placeholder: "placeholder", disabledDate: "disabledDate", disabledTime: "disabledTime", showToday: "showToday", showTime: "showTime", extraFooter: "extraFooter", ranges: "ranges", dateRender: "dateRender", popupStyle: "popupStyle", dropdownClassName: "dropdownClassName" }, outputs: { panelModeChange: "panelModeChange", calendarChange: "calendarChange", valueChange: "valueChange", inputChange: "inputChange", resultOk: "resultOk", closePicker: "closePicker" }, exportAs: ["dateRangePopup"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 20, vars: 23, consts: [[3, "ngStyle"], ["tabindex", "0"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["tplCalendarInput", ""], ["tplInnerPopup", ""], ["tplFooter", ""], ["tplSinglePart", ""], ["tplRangePart", ""], ["tplRangeQuickSelector", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-calendar-range-middle"], [3, "value", "locale", "disabledDate", "format", "autoFocus", "placeholder", "valueChange"], [3, "showWeek", "locale", "showTimePicker", "timeOptions", "panelMode", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue", "enablePrev", "enableNext", "panelModeChange", "dayHover", "selectDate", "selectTime", "headerChange"], [3, "locale", "showToday", "hasTimePicker", "timePickerDisabled", "okDisabled", "extraFooter", "rangeQuickSelector", "showTimePicker", "showTimePickerChange", "clickOk", "clickToday", 4, "ngIf"], [3, "locale", "showToday", "hasTimePicker", "timePickerDisabled", "okDisabled", "extraFooter", "rangeQuickSelector", "showTimePicker", "showTimePickerChange", "clickOk", "clickToday"], [2, "outline", "none"], [3, "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"]], template: function DateRangePopupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div");
        ɵngcc0.ɵɵtemplate(3, DateRangePopupComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵelementStart(4, "div");
        ɵngcc0.ɵɵtemplate(5, DateRangePopupComponent_ng_container_5_Template, 5, 6, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(6, DateRangePopupComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, DateRangePopupComponent_ng_container_7_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, DateRangePopupComponent_ng_template_8_Template, 1, 6, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(10, DateRangePopupComponent_ng_template_10_Template, 1, 12, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(12, DateRangePopupComponent_ng_template_12_Template, 1, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(14, DateRangePopupComponent_ng_template_14_Template, 1, 1, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(16, DateRangePopupComponent_ng_template_16_Template, 4, 13, "ng-template", null, 8, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(18, DateRangePopupComponent_ng_template_18_Template, 1, 1, "ng-template", null, 9, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r10 = ɵngcc0.ɵɵreference(15);
        ɵngcc0.ɵɵclassMapInterpolate3("", ctx.prefixCls, "-picker-container ", ctx.dropdownClassName, " ", ctx.prefixCls, "-picker-container-placement-bottomLeft");
        ɵngcc0.ɵɵproperty("ngStyle", ctx.popupStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate4("", ctx.prefixCls, " ", ctx.showWeek ? ctx.prefixCls + "-week-number" : "", " ", ctx.hasTimePicker ? ctx.prefixCls + "-time" : "", " ", ctx.isRange ? ctx.prefixCls + "-range" : "", "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-panel");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isRange);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-date-panel");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isRange)("ngIfElse", _r10);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isRange);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isRange);
    } }, directives: function () { return [ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, CalendarInputComponent,
        InnerPopupComponent,
        CalendarFooterComponent, ɵngcc1.NgForOf]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateRangePopupComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-range-popup',
                exportAs: 'dateRangePopup',
                template: "<div\r\n  class=\"{{ prefixCls }}-picker-container {{ dropdownClassName }} {{ prefixCls }}-picker-container-placement-bottomLeft\"\r\n  [ngStyle]=\"popupStyle\">\r\n\r\n  <div class=\"{{ prefixCls }} {{ showWeek ? prefixCls + '-week-number': '' }} {{ hasTimePicker ? prefixCls + '-time' : '' }} {{ isRange ? prefixCls + '-range' : '' }}\" tabindex=\"0\">\r\n    <div class=\"{{ prefixCls }}-panel\">\r\n      <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\r\n        <ng-container *ngTemplateOutlet=\"tplCalendarInput\"></ng-container>\r\n      </ng-container>\r\n      <div class=\"{{ prefixCls }}-date-panel\">\r\n        <ng-container *ngIf=\"isRange; else tplSinglePart\">\r\n          <!-- Range Selectors -->\r\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'left' }\"></ng-container>\r\n          <div class=\"ant-calendar-range-middle\">~</div>\r\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'right' }\"></ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\r\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n      <ng-container *ngIf=\"isRange\"> <!-- Range ONLY -->\r\n        <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #tplCalendarInput let-partType=\"partType\">\r\n  <calendar-input\r\n    [value]=\"getValue(partType)\"\r\n    (valueChange)=\"changeValueFromInput($event, partType)\"\r\n    [locale]=\"locale\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [format]=\"format\"\r\n    [autoFocus]=\"partType !== 'right'\"\r\n    [placeholder]=\"getPlaceholder(partType)\"\r\n  ></calendar-input>\r\n</ng-template>\r\n\r\n<ng-template #tplInnerPopup let-partType=\"partType\">\r\n  <inner-popup\r\n    [showWeek]=\"showWeek\"\r\n    [locale]=\"locale\"\r\n    [showTimePicker]=\"hasTimePicker && showTimePicker\"\r\n    [timeOptions]=\"getTimeOptions(partType)\"\r\n    [panelMode]=\"getPanelMode(partType)\"\r\n    (panelModeChange)=\"onPanelModeChange($event, partType)\"\r\n    [value]=\"getValueBySelector(partType)\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [dateRender]=\"dateRender\"\r\n    [selectedValue]=\"selectedValue\"\r\n    [hoverValue]=\"hoverValue\"\r\n    [enablePrev]=\"enablePrevNext('prev', partType)\"\r\n    [enableNext]=\"enablePrevNext('next', partType)\"\r\n    (dayHover)=\"onDayHover($event)\"\r\n    (selectDate)=\"changeValueFromSelect($event)\"\r\n    (selectTime)=\"onSelectTime($event, partType)\"\r\n    (headerChange)=\"onHeaderChange($event, partType)\"\r\n  ></inner-popup>\r\n</ng-template>\r\n\r\n<ng-template #tplFooter>\r\n  <calendar-footer\r\n    *ngIf=\"hasFooter\"\r\n    [locale]=\"locale\"\r\n    [showToday]=\"showToday\"\r\n    [hasTimePicker]=\"hasTimePicker\"\r\n    [timePickerDisabled]=\"timePickerDisabled()\"\r\n    [okDisabled]=\"okDisabled()\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\"\r\n    [(showTimePicker)]=\"showTimePicker\"\r\n    (showTimePickerChange)=\"onShowTimePickerChange($event)\"\r\n    (clickOk)=\"onClickOk()\"\r\n    (clickToday)=\"onClickToday($event)\"\r\n  ></calendar-footer>\r\n</ng-template>\r\n\r\n<!-- Single ONLY -->\r\n<ng-template #tplSinglePart>\r\n  <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container>\r\n</ng-template>\r\n\r\n<!-- Range ONLY -->\r\n<ng-template #tplRangePart let-partType=\"partType\">\r\n  <div class=\"{{ prefixCls }}-range-part {{ prefixCls }}-range-{{ partType }}\">\r\n    <ng-container *ngTemplateOutlet=\"tplCalendarInput; context: { partType: partType }\"></ng-container>\r\n    <div style=\"outline: none;\">\r\n      <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: partType }\"></ng-container>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Range ONLY: Range Quick Selector -->\r\n<ng-template #tplRangeQuickSelector>\r\n  <a *ngFor=\"let name of getObjectKeys(ranges)\"\r\n    (click)=\"onClickPresetRange(ranges[name])\"\r\n    (mouseenter)=\"onHoverPresetRange(ranges[name])\"\r\n    (mouseleave)=\"onPresetRangeMouseLeave()\"\r\n  >{{ name }}</a>\r\n</ng-template>"
            }]
    }], function () { return []; }, { panelModeChange: [{
            type: core.Output
        }], calendarChange: [{
            type: core.Output
        }], valueChange: [{
            type: core.Output
        }], inputChange: [{
            type: core.Output
        }], resultOk: [{
            type: core.Output
        }], closePicker: [{
            type: core.Output
        }], value: [{
            type: core.Input
        }], panelMode: [{
            type: core.Input
        }], isRange: [{
            type: core.Input
        }], showWeek: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], format: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }], disabledTime: [{
            type: core.Input
        }], showToday: [{
            type: core.Input
        }], showTime: [{
            type: core.Input
        }], extraFooter: [{
            type: core.Input
        }], ranges: [{
            type: core.Input
        }], dateRender: [{
            type: core.Input
        }], popupStyle: [{
            type: core.Input
        }], dropdownClassName: [{
            type: core.Input
        }] }); })();
        return DateRangePopupComponent;
    }());
    if (false) {
        /** @type {?} */
        DateRangePopupComponent.prototype.isRange;
        /** @type {?} */
        DateRangePopupComponent.prototype.showWeek;
        /** @type {?} */
        DateRangePopupComponent.prototype.locale;
        /** @type {?} */
        DateRangePopupComponent.prototype.format;
        /** @type {?} */
        DateRangePopupComponent.prototype.placeholder;
        /** @type {?} */
        DateRangePopupComponent.prototype.disabledDate;
        /** @type {?} */
        DateRangePopupComponent.prototype.disabledTime;
        /** @type {?} */
        DateRangePopupComponent.prototype.showToday;
        /** @type {?} */
        DateRangePopupComponent.prototype.showTime;
        /** @type {?} */
        DateRangePopupComponent.prototype.extraFooter;
        /** @type {?} */
        DateRangePopupComponent.prototype.ranges;
        /** @type {?} */
        DateRangePopupComponent.prototype.dateRender;
        /** @type {?} */
        DateRangePopupComponent.prototype.popupStyle;
        /** @type {?} */
        DateRangePopupComponent.prototype.dropdownClassName;
        /** @type {?} */
        DateRangePopupComponent.prototype.panelMode;
        /** @type {?} */
        DateRangePopupComponent.prototype.value;
        /** @type {?} */
        DateRangePopupComponent.prototype.panelModeChange;
        /** @type {?} */
        DateRangePopupComponent.prototype.calendarChange;
        /** @type {?} */
        DateRangePopupComponent.prototype.valueChange;
        /** @type {?} */
        DateRangePopupComponent.prototype.inputChange;
        /** @type {?} */
        DateRangePopupComponent.prototype.resultOk;
        /** @type {?} */
        DateRangePopupComponent.prototype.closePicker;
        /** @type {?} */
        DateRangePopupComponent.prototype.prefixCls;
        /** @type {?} */
        DateRangePopupComponent.prototype.showTimePicker;
        /** @type {?} */
        DateRangePopupComponent.prototype.timeOptions;
        /** @type {?} */
        DateRangePopupComponent.prototype.valueForRangeShow;
        /** @type {?} */
        DateRangePopupComponent.prototype.selectedValue;
        /** @type {?} */
        DateRangePopupComponent.prototype.hoverValue;
        /**
         * @type {?}
         * @private
         */
        DateRangePopupComponent.prototype.partTypeMap;
        /** @type {?} */
        DateRangePopupComponent.prototype.disabledStartTime;
        /** @type {?} */
        DateRangePopupComponent.prototype.disabledEndTime;
        /* Skipping unhandled member: [property: string]: any;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InnerPopupComponent = /** @class */ (function () {
        function InnerPopupComponent() {
            this.panelModeChange = new core.EventEmitter();
            this.headerChange = new core.EventEmitter(); // Emitted when user changed the header's value
            // Emitted when user changed the header's value
            this.selectDate = new core.EventEmitter(); // Emitted when the date is selected by click the date panel
            // Emitted when the date is selected by click the date panel
            this.selectTime = new core.EventEmitter();
            this.dayHover = new core.EventEmitter(); // Emitted when hover on a day by mouse enter
            // Emitted when hover on a day by mouse enter
            this.prefixCls = 'ant-calendar';
        }
        /**
         * @param {?} date
         * @return {?}
         */
        InnerPopupComponent.prototype.onSelectTime = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this.selectTime.emit(new core$1.CandyDate(date));
        };
        // The value real changed to outside
        // The value real changed to outside
        /**
         * @param {?} date
         * @return {?}
         */
        InnerPopupComponent.prototype.onSelectDate = 
        // The value real changed to outside
        /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var value = date instanceof core$1.CandyDate ? date : new core$1.CandyDate(date);
            this.selectDate.emit(value);
        };
        InnerPopupComponent.propDecorators = {
            showWeek: [{ type: core.Input }],
            locale: [{ type: core.Input }],
            showTimePicker: [{ type: core.Input }],
            timeOptions: [{ type: core.Input }],
            enablePrev: [{ type: core.Input }],
            enableNext: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            dateRender: [{ type: core.Input }],
            selectedValue: [{ type: core.Input }],
            hoverValue: [{ type: core.Input }],
            panelMode: [{ type: core.Input }],
            panelModeChange: [{ type: core.Output }],
            value: [{ type: core.Input }],
            headerChange: [{ type: core.Output }],
            selectDate: [{ type: core.Output }],
            selectTime: [{ type: core.Output }],
            dayHover: [{ type: core.Output }]
        };
InnerPopupComponent.ɵfac = function InnerPopupComponent_Factory(t) { return new (t || InnerPopupComponent)(); };
InnerPopupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InnerPopupComponent, selectors: [["inner-popup"]], inputs: { showWeek: "showWeek", locale: "locale", showTimePicker: "showTimePicker", timeOptions: "timeOptions", enablePrev: "enablePrev", enableNext: "enableNext", disabledDate: "disabledDate", dateRender: "dateRender", selectedValue: "selectedValue", hoverValue: "hoverValue", panelMode: "panelMode", value: "value" }, outputs: { panelModeChange: "panelModeChange", headerChange: "headerChange", selectDate: "selectDate", selectTime: "selectTime", dayHover: "dayHover" }, exportAs: ["innerPopup"], decls: 4, vars: 17, consts: [[3, "panelMode", "value", "locale", "showTimePicker", "enablePrev", "enableNext", "panelModeChange", "valueChange"], [4, "ngIf"], ["showWeekNumber", "false", 3, "locale", "showWeek", "value", "disabledDate", "dateCellRender", "selectedValue", "hoverValue", "valueChange", "dayHover"], [3, "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn", "opened", "ngModelChange"]], template: function InnerPopupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "calendar-header", 0);
        ɵngcc0.ɵɵlistener("panelModeChange", function InnerPopupComponent_Template_calendar_header_panelModeChange_0_listener($event) { return ctx.panelMode = $event; })("panelModeChange", function InnerPopupComponent_Template_calendar_header_panelModeChange_0_listener($event) { return ctx.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_Template_calendar_header_valueChange_0_listener($event) { return ctx.value = $event; })("valueChange", function InnerPopupComponent_Template_calendar_header_valueChange_0_listener($event) { return ctx.headerChange.emit($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(1, InnerPopupComponent_ng_container_1_Template, 2, 14, "ng-container", 1);
        ɵngcc0.ɵɵelementStart(2, "div");
        ɵngcc0.ɵɵelementStart(3, "date-table", 2);
        ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_Template_date_table_valueChange_3_listener($event) { return ctx.onSelectDate($event); })("dayHover", function InnerPopupComponent_Template_date_table_dayHover_3_listener($event) { return ctx.dayHover.emit($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("panelMode", ctx.panelMode)("value", ctx.value)("locale", ctx.locale)("showTimePicker", ctx.showTimePicker)("enablePrev", ctx.enablePrev)("enableNext", ctx.enableNext);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showTimePicker && ctx.timeOptions);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("locale", ctx.locale)("showWeek", ctx.showWeek)("value", ctx.value)("disabledDate", ctx.disabledDate)("dateCellRender", ctx.dateRender)("selectedValue", ctx.selectedValue)("hoverValue", ctx.hoverValue);
    } }, directives: [CalendarHeaderComponent, ɵngcc1.NgIf, ɵngcc3.DateTableComponent, ɵngcc4.NzTimePickerPanelComponent, ɵngcc5.NgControlStatus, ɵngcc5.NgModel], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InnerPopupComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'inner-popup',
                exportAs: 'innerPopup',
                template: "<calendar-header\r\n  [(panelMode)]=\"panelMode\"\r\n  (panelModeChange)=\"panelModeChange.emit($event)\"\r\n  [(value)]=\"value\"\r\n  (valueChange)=\"headerChange.emit($event)\"\r\n  [locale]=\"locale\"\r\n  [showTimePicker]=\"showTimePicker\"\r\n  [enablePrev]=\"enablePrev\"\r\n  [enableNext]=\"enableNext\"\r\n></calendar-header>\r\n\r\n<ng-container *ngIf=\"showTimePicker && timeOptions\">\r\n  <nz-time-picker-panel\r\n    [nzInDatePicker]=\"true\"\r\n    [ngModel]=\"value?.nativeDate\"\r\n    (ngModelChange)=\"onSelectTime($event)\"\r\n    [format]=\"timeOptions.nzFormat\"\r\n    [nzHourStep]=\"timeOptions.nzHourStep\"\r\n    [nzMinuteStep]=\"timeOptions.nzMinuteStep\"\r\n    [nzSecondStep]=\"timeOptions.nzSecondStep\"\r\n    [nzDisabledHours]=\"timeOptions.nzDisabledHours\"\r\n    [nzDisabledMinutes]=\"timeOptions.nzDisabledMinutes\"\r\n    [nzDisabledSeconds]=\"timeOptions.nzDisabledSeconds\"\r\n    [nzHideDisabledOptions]=\"timeOptions.nzHideDisabledOptions\"\r\n    [nzDefaultOpenValue]=\"timeOptions.nzDefaultOpenValue\"\r\n    [nzUse12Hours]=\"timeOptions.nzUse12Hours\"\r\n    [nzAddOn]=\"timeOptions.nzAddOn\"\r\n    [opened]=\"true\"\r\n  ></nz-time-picker-panel>\r\n  <!-- use [opened] to trigger time panel `initPosition()` -->\r\n</ng-container>\r\n\r\n<div class=\"{{ prefixCls }}-body\">\r\n  <date-table\r\n    [locale]=\"locale\"\r\n    [showWeek]=\"showWeek\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onSelectDate($event)\"\r\n    showWeekNumber=\"false\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [dateCellRender]=\"dateRender\"\r\n    [selectedValue]=\"selectedValue\"\r\n    [hoverValue]=\"hoverValue\"\r\n    (dayHover)=\"dayHover.emit($event)\"\r\n  ></date-table>\r\n</div>"
            }]
    }], function () { return []; }, { panelModeChange: [{
            type: core.Output
        }], headerChange: [{
            type: core.Output
        }], selectDate: [{
            type: core.Output
        }], selectTime: [{
            type: core.Output
        }], dayHover: [{
            type: core.Output
        }], showWeek: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], showTimePicker: [{
            type: core.Input
        }], timeOptions: [{
            type: core.Input
        }], enablePrev: [{
            type: core.Input
        }], enableNext: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }], dateRender: [{
            type: core.Input
        }], selectedValue: [{
            type: core.Input
        }], hoverValue: [{
            type: core.Input
        }], panelMode: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }] }); })();
        return InnerPopupComponent;
    }());
    if (false) {
        /** @type {?} */
        InnerPopupComponent.prototype.showWeek;
        /** @type {?} */
        InnerPopupComponent.prototype.locale;
        /** @type {?} */
        InnerPopupComponent.prototype.showTimePicker;
        /** @type {?} */
        InnerPopupComponent.prototype.timeOptions;
        /** @type {?} */
        InnerPopupComponent.prototype.enablePrev;
        /** @type {?} */
        InnerPopupComponent.prototype.enableNext;
        /** @type {?} */
        InnerPopupComponent.prototype.disabledDate;
        /** @type {?} */
        InnerPopupComponent.prototype.dateRender;
        /** @type {?} */
        InnerPopupComponent.prototype.selectedValue;
        /** @type {?} */
        InnerPopupComponent.prototype.hoverValue;
        /** @type {?} */
        InnerPopupComponent.prototype.panelMode;
        /** @type {?} */
        InnerPopupComponent.prototype.panelModeChange;
        /** @type {?} */
        InnerPopupComponent.prototype.value;
        /** @type {?} */
        InnerPopupComponent.prototype.headerChange;
        /** @type {?} */
        InnerPopupComponent.prototype.selectDate;
        /** @type {?} */
        InnerPopupComponent.prototype.selectTime;
        /** @type {?} */
        InnerPopupComponent.prototype.dayHover;
        /** @type {?} */
        InnerPopupComponent.prototype.prefixCls;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAX_ROW$1 = 4;
    /** @type {?} */
    var MAX_COL$1 = 3;
    var YearPanelComponent = /** @class */ (function () {
        function YearPanelComponent() {
            this.valueChange = new core.EventEmitter();
            this.decadePanelShow = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-year-panel';
        }
        Object.defineProperty(YearPanelComponent.prototype, "currentYear", {
            get: /**
             * @return {?}
             */
            function () {
                return this.value.getYear();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YearPanelComponent.prototype, "startYear", {
            get: /**
             * @return {?}
             */
            function () {
                return parseInt("" + this.currentYear / 10, 10) * 10;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YearPanelComponent.prototype, "endYear", {
            get: /**
             * @return {?}
             */
            function () {
                return this.startYear + 9;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        YearPanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.value || changes.disabledDate) {
                this.render();
            }
        };
        /**
         * @return {?}
         */
        YearPanelComponent.prototype.previousDecade = /**
         * @return {?}
         */
        function () {
            this.gotoYear(-10);
        };
        /**
         * @return {?}
         */
        YearPanelComponent.prototype.nextDecade = /**
         * @return {?}
         */
        function () {
            this.gotoYear(10);
        };
        /**
         * @param {?} _index
         * @param {?} yearData
         * @return {?}
         */
        YearPanelComponent.prototype.trackPanelYear = /**
         * @param {?} _index
         * @param {?} yearData
         * @return {?}
         */
        function (_index, yearData) {
            return yearData.content;
        };
        /**
         * @private
         * @return {?}
         */
        YearPanelComponent.prototype.render = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.value) {
                this.panelYears = this.makePanelYears();
            }
        };
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        YearPanelComponent.prototype.gotoYear = 
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        function (amount) {
            this.value = this.value.addYears(amount);
            // this.valueChange.emit(this.value); // Do not trigger final value change
            this.render();
        };
        /**
         * @private
         * @param {?} year
         * @return {?}
         */
        YearPanelComponent.prototype.chooseYear = /**
         * @private
         * @param {?} year
         * @return {?}
         */
        function (year) {
            this.value = this.value.setYear(year);
            this.valueChange.emit(this.value);
            this.render();
        };
        /**
         * @private
         * @return {?}
         */
        YearPanelComponent.prototype.makePanelYears = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var years = [];
            /** @type {?} */
            var currentYear = this.currentYear;
            /** @type {?} */
            var startYear = this.startYear;
            /** @type {?} */
            var endYear = this.endYear;
            /** @type {?} */
            var previousYear = startYear - 1;
            /** @type {?} */
            var index = 0;
            for (var rowIndex = 0; rowIndex < MAX_ROW$1; rowIndex++) {
                years[rowIndex] = [];
                var _loop_1 = function (colIndex) {
                    var _a;
                    /** @type {?} */
                    var year = previousYear + index;
                    /** @type {?} */
                    var content = String(year);
                    /** @type {?} */
                    var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setYear(year).nativeDate) : false;
                    /** @type {?} */
                    var cell = (years[rowIndex][colIndex] = {
                        disabled: disabled,
                        content: content,
                        year: year,
                        title: content,
                        isCurrent: year === currentYear,
                        isLowerThanStart: year < startYear,
                        isBiggerThanEnd: year > endYear,
                        classMap: null,
                        onClick: null
                    });
                    cell.classMap = (_a = {},
                        _a[this_1.prefixCls + "-cell"] = true,
                        _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                        _a[this_1.prefixCls + "-cell-disabled"] = disabled,
                        _a[this_1.prefixCls + "-last-decade-cell"] = cell.isLowerThanStart,
                        _a[this_1.prefixCls + "-next-decade-cell"] = cell.isBiggerThanEnd,
                        _a);
                    if (cell.isLowerThanStart) {
                        cell.onClick = (/**
                         * @return {?}
                         */
                        function () { return _this.previousDecade(); });
                    }
                    else if (cell.isBiggerThanEnd) {
                        cell.onClick = (/**
                         * @return {?}
                         */
                        function () { return _this.nextDecade(); });
                    }
                    else {
                        cell.onClick = (/**
                         * @return {?}
                         */
                        function () { return _this.chooseYear(cell.year); });
                    }
                    index++;
                };
                var this_1 = this;
                for (var colIndex = 0; colIndex < MAX_COL$1; colIndex++) {
                    _loop_1(colIndex);
                }
            }
            return years;
        };
        /** @nocollapse */
        YearPanelComponent.ctorParameters = function () { return []; };
        YearPanelComponent.propDecorators = {
            locale: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            disabledDate: [{ type: core.Input }],
            decadePanelShow: [{ type: core.Output }]
        };
YearPanelComponent.ɵfac = function YearPanelComponent_Factory(t) { return new (t || YearPanelComponent)(); };
YearPanelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: YearPanelComponent, selectors: [["year-panel"]], inputs: { value: "value", locale: "locale", disabledDate: "disabledDate" }, outputs: { valueChange: "valueChange", decadePanelShow: "decadePanelShow" }, exportAs: ["yearPanel"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 14, vars: 36, consts: [["role", "button", 3, "title", "click"], ["cellSpacing", "0", "role", "grid"], ["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], ["role", "gridcell", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell", 3, "title", "ngClass", "click"]], template: function YearPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "div");
        ɵngcc0.ɵɵelementStart(3, "a", 0);
        ɵngcc0.ɵɵlistener("click", function YearPanelComponent_Template_a_click_3_listener() { return ctx.previousDecade(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "a", 0);
        ɵngcc0.ɵɵlistener("click", function YearPanelComponent_Template_a_click_4_listener() { return ctx.decadePanelShow.emit(); });
        ɵngcc0.ɵɵelementStart(5, "span");
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "span");
        ɵngcc0.ɵɵtext(8, "x");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "a", 0);
        ɵngcc0.ɵɵlistener("click", function YearPanelComponent_Template_a_click_9_listener() { return ctx.nextDecade(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div");
        ɵngcc0.ɵɵelementStart(11, "table", 1);
        ɵngcc0.ɵɵelementStart(12, "tbody");
        ɵngcc0.ɵɵtemplate(13, YearPanelComponent_tr_13_Template, 2, 2, "tr", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.prefixCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-decade-btn");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.locale.previousDecade);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-decade-select");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.locale.decadeSelect);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-decade-select-content");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate2(" ", ctx.startYear, "-", ctx.endYear, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-decade-select-arrow");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-decade-btn");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.locale.nextDecade);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-table");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-tbody");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.panelYears);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass], styles: ["\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {\n        color: rgba(0, 0, 0, 0.25);\n        background: #f5f5f5;\n        cursor: not-allowed;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(YearPanelComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'year-panel',
                exportAs: 'yearPanel',
                template: "<div class=\"{{ prefixCls }}\">\r\n  <div>\r\n    <div class=\"{{ prefixCls }}-header\">\r\n      <a\r\n        class=\"{{ prefixCls }}-prev-decade-btn\"\r\n        role=\"button\"\r\n        (click)=\"previousDecade()\"\r\n        title=\"{{ locale.previousDecade }}\"\r\n      ></a>\r\n      <a\r\n        class=\"{{ prefixCls }}-decade-select\"\r\n        role=\"button\"\r\n        (click)=\"decadePanelShow.emit()\"\r\n        title=\"{{ locale.decadeSelect }}\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-decade-select-content\">\r\n          {{ startYear }}-{{ endYear }}\r\n        </span>\r\n        <span class=\"{{ prefixCls }}-decade-select-arrow\">x</span>\r\n      </a>\r\n\r\n      <a class=\"{{ prefixCls }}-next-decade-btn\" (click)=\"nextDecade()\" title=\"{{ locale.nextDecade }}\" role=\"button\"></a>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-body\">\r\n      <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n        <tbody class=\"{{ prefixCls }}-tbody\">\r\n          <tr *ngFor=\"let row of panelYears\" role=\"row\">\r\n            <td *ngFor=\"let yearCell of row; trackBy: trackPanelYear\"\r\n              role=\"gridcell\"\r\n              title=\"{{ yearCell.title }}\"\r\n              (click)=\"yearCell.disabled ? null : yearCell.onClick()\"\r\n              [ngClass]=\"yearCell.classMap\"\r\n            >\r\n              <a class=\"{{ prefixCls }}-year\">{{ yearCell.content }}</a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [
                    // Support disabledDate
                    "\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {\n        color: rgba(0, 0, 0, 0.25);\n        background: #f5f5f5;\n        cursor: not-allowed;\n      }\n    "
                ]
            }]
    }], function () { return []; }, { valueChange: [{
            type: core.Output
        }], decadePanelShow: [{
            type: core.Output
        }], value: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }] }); })();
        return YearPanelComponent;
    }());
    if (false) {
        /** @type {?} */
        YearPanelComponent.prototype.locale;
        /** @type {?} */
        YearPanelComponent.prototype.value;
        /** @type {?} */
        YearPanelComponent.prototype.valueChange;
        /** @type {?} */
        YearPanelComponent.prototype.disabledDate;
        /** @type {?} */
        YearPanelComponent.prototype.decadePanelShow;
        /** @type {?} */
        YearPanelComponent.prototype.prefixCls;
        /** @type {?} */
        YearPanelComponent.prototype.panelYears;
    }
    /**
     * @record
     */
    function PanelYearData() { }
    if (false) {
        /** @type {?} */
        PanelYearData.prototype.disabled;
        /** @type {?} */
        PanelYearData.prototype.content;
        /** @type {?} */
        PanelYearData.prototype.year;
        /** @type {?} */
        PanelYearData.prototype.title;
        /** @type {?} */
        PanelYearData.prototype.isCurrent;
        /** @type {?} */
        PanelYearData.prototype.isLowerThanStart;
        /** @type {?} */
        PanelYearData.prototype.isBiggerThanEnd;
        /** @type {?} */
        PanelYearData.prototype.classMap;
        /** @type {?} */
        PanelYearData.prototype.onClick;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LibPackerModule = /** @class */ (function () {
        function LibPackerModule() {
        }
LibPackerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LibPackerModule });
LibPackerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LibPackerModule_Factory(t) { return new (t || LibPackerModule)(); }, imports: [[common.CommonModule, forms.FormsModule, i18n.NzI18nModule, timePicker.NzTimePickerModule, calendar.NzCalendarModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LibPackerModule, { declarations: [CalendarHeaderComponent,
        CalendarInputComponent,
        CalendarFooterComponent,
        OkButtonComponent,
        TimePickerButtonComponent,
        TodayButtonComponent,
        YearPanelComponent,
        MonthPanelComponent,
        DecadePanelComponent,
        InnerPopupComponent,
        DateRangePopupComponent], imports: [ɵngcc1.CommonModule, ɵngcc5.FormsModule, ɵngcc2.NzI18nModule, ɵngcc4.NzTimePickerModule, ɵngcc3.NzCalendarModule], exports: [CalendarHeaderComponent,
        CalendarInputComponent,
        CalendarFooterComponent,
        OkButtonComponent,
        TimePickerButtonComponent,
        TodayButtonComponent,
        YearPanelComponent,
        MonthPanelComponent,
        DecadePanelComponent,
        InnerPopupComponent,
        DateRangePopupComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LibPackerModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, forms.FormsModule, i18n.NzI18nModule, timePicker.NzTimePickerModule, calendar.NzCalendarModule],
                exports: [
                    CalendarHeaderComponent,
                    CalendarInputComponent,
                    CalendarFooterComponent,
                    OkButtonComponent,
                    TimePickerButtonComponent,
                    TodayButtonComponent,
                    YearPanelComponent,
                    MonthPanelComponent,
                    DecadePanelComponent,
                    InnerPopupComponent,
                    DateRangePopupComponent
                ],
                declarations: [
                    CalendarHeaderComponent,
                    CalendarInputComponent,
                    CalendarFooterComponent,
                    OkButtonComponent,
                    TimePickerButtonComponent,
                    TodayButtonComponent,
                    YearPanelComponent,
                    MonthPanelComponent,
                    DecadePanelComponent,
                    InnerPopupComponent,
                    DateRangePopupComponent
                ]
            }]
    }], function () { return []; }, null); })();
        return LibPackerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPickerComponent = /** @class */ (function () {
        function NzPickerComponent(dateHelper, changeDetector) {
            this.dateHelper = dateHelper;
            this.changeDetector = changeDetector;
            this.noAnimation = false;
            this.isRange = false;
            this.open = undefined;
            this.valueChange = new core.EventEmitter();
            this.openChange = new core.EventEmitter(); // Emitted when overlay's open state change
            this.prefixCls = 'ant-calendar';
            this.animationOpenState = false;
            this.overlayOpen = false; // Available when "open"=undefined
            // Available when "open"=undefined
            this.overlayOffsetY = 0;
            this.overlayOffsetX = -2;
            this.overlayPositions = (/** @type {?} */ ([
                {
                    // offsetX: -10, // TODO: What a pity, cdk/overlay current not support offset configs even though it already provide these properties
                    // offsetY: -10,
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'top'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'bottom'
                }
            ]));
            this.dropdownAnimation = 'bottom';
            this.currentPositionX = 'start';
            this.currentPositionY = 'top';
        }
        Object.defineProperty(NzPickerComponent.prototype, "realOpenState", {
            get: /**
             * @return {?}
             */
            function () {
                // The value that really decide the open state of overlay
                return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (this.autoFocus) {
                this.focus();
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzPickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.open) {
                this.animationStart();
            }
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.focus = /**
         * @return {?}
         */
        function () {
            if (this.isRange) {
                /** @type {?} */
                var firstInput = (/** @type {?} */ (((/** @type {?} */ (this.pickerInput.nativeElement))).querySelector('input:first-child')));
                firstInput.focus(); // Focus on the first input
            }
            else {
                this.pickerInput.nativeElement.focus();
            }
        };
        // Show overlay content
        // Show overlay content
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.showOverlay = 
        // Show overlay content
        /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.realOpenState) {
                this.overlayOpen = true;
                this.animationStart();
                this.openChange.emit(this.overlayOpen);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                        _this.cdkConnectedOverlay.overlayRef.updatePosition();
                    }
                }));
            }
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.hideOverlay = /**
         * @return {?}
         */
        function () {
            if (this.realOpenState) {
                this.overlayOpen = false;
                this.openChange.emit(this.overlayOpen);
                this.focus();
            }
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.onClickInputBox = /**
         * @return {?}
         */
        function () {
            if (!this.disabled && !this.isOpenHandledByUser()) {
                this.showOverlay();
            }
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.onClickBackdrop = /**
         * @return {?}
         */
        function () {
            this.hideOverlay();
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.onOverlayDetach = /**
         * @return {?}
         */
        function () {
            this.hideOverlay();
        };
        // NOTE: A issue here, the first time position change, the animation will not be triggered.
        // Because the overlay's "positionChange" event is emitted after the content's full shown up.
        // All other components like "nz-dropdown" which depends on overlay also has the same issue.
        // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
        // NOTE: A issue here, the first time position change, the animation will not be triggered.
        // Because the overlay's "positionChange" event is emitted after the content's full shown up.
        // All other components like "nz-dropdown" which depends on overlay also has the same issue.
        // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
        /**
         * @param {?} position
         * @return {?}
         */
        NzPickerComponent.prototype.onPositionChange = 
        // NOTE: A issue here, the first time position change, the animation will not be triggered.
        // Because the overlay's "positionChange" event is emitted after the content's full shown up.
        // All other components like "nz-dropdown" which depends on overlay also has the same issue.
        // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
        /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.dropdownAnimation = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
            this.currentPositionX = (/** @type {?} */ (position.connectionPair.originX));
            this.currentPositionY = (/** @type {?} */ (position.connectionPair.originY));
            this.changeDetector.detectChanges(); // Take side-effects to position styles
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NzPickerComponent.prototype.onClickClear = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.value = this.isRange ? [] : null;
            this.valueChange.emit(this.value);
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        NzPickerComponent.prototype.getReadableValue = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            /** @type {?} */
            var value;
            if (this.isRange) {
                value = ((/** @type {?} */ (this.value)))[this.getPartTypeIndex((/** @type {?} */ (partType)))];
            }
            else {
                value = (/** @type {?} */ (this.value));
            }
            return value ? this.dateHelper.format(value.nativeDate, this.format) : null;
        };
        /**
         * @param {?} partType
         * @return {?}
         */
        NzPickerComponent.prototype.getPartTypeIndex = /**
         * @param {?} partType
         * @return {?}
         */
        function (partType) {
            return { left: 0, right: 1 }[partType];
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        NzPickerComponent.prototype.getPlaceholder = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            return this.isRange ? this.placeholder[this.getPartTypeIndex((/** @type {?} */ (partType)))] : ((/** @type {?} */ (this.placeholder)));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzPickerComponent.prototype.isEmptyValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === null) {
                return true;
            }
            else if (this.isRange) {
                return !value || !Array.isArray(value) || value.every((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return !val; }));
            }
            else {
                return !value;
            }
        };
        // Whether open state is permanently controlled by user himself
        // Whether open state is permanently controlled by user himself
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.isOpenHandledByUser = 
        // Whether open state is permanently controlled by user himself
        /**
         * @return {?}
         */
        function () {
            return this.open !== undefined;
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.animationStart = /**
         * @return {?}
         */
        function () {
            if (this.realOpenState) {
                this.animationOpenState = true;
            }
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.animationDone = /**
         * @return {?}
         */
        function () {
            if (!this.realOpenState) {
                this.animationOpenState = false;
            }
        };
        /** @nocollapse */
        NzPickerComponent.ctorParameters = function () { return [
            { type: i18n.DateHelperService },
            { type: core.ChangeDetectorRef }
        ]; };
        NzPickerComponent.propDecorators = {
            noAnimation: [{ type: core.Input }],
            isRange: [{ type: core.Input }],
            open: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            allowClear: [{ type: core.Input }],
            autoFocus: [{ type: core.Input }],
            className: [{ type: core.Input }],
            format: [{ type: core.Input }],
            size: [{ type: core.Input }],
            style: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            openChange: [{ type: core.Output }],
            origin: [{ type: core.ViewChild, args: ['origin', { static: false },] }],
            cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay, { static: false },] }],
            pickerInput: [{ type: core.ViewChild, args: ['pickerInput', { static: false },] }]
        };
NzPickerComponent.ɵfac = function NzPickerComponent_Factory(t) { return new (t || NzPickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzPickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPickerComponent, selectors: [["nz-picker"]], viewQuery: function NzPickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(overlay.CdkConnectedOverlay, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.origin = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.pickerInput = _t.first);
    } }, inputs: { noAnimation: "noAnimation", isRange: "isRange", open: "open", value: "value", disabled: "disabled", placeholder: "placeholder", allowClear: "allowClear", autoFocus: "autoFocus", className: "className", format: "format", size: "size", style: "style" }, outputs: { valueChange: "valueChange", openChange: "openChange" }, exportAs: ["nzPicker"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c6, decls: 9, vars: 12, consts: [["cdkOverlayOrigin", "", "tabindex", "0", 3, "ngStyle", "click", "keyup.enter"], ["origin", "cdkOverlayOrigin"], [4, "ngIf"], ["tplRangeInput", ""], ["tplRightRest", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "positionChange", "backdropClick", "detach"], ["readonly", "", 3, "disabled", "value", "placeholder"], ["pickerInput", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 3, "class", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "calendar"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 3, "click"], [2, "position", "relative", 3, "nzNoAnimation"]], template: function NzPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0, 1);
        ɵngcc0.ɵɵlistener("click", function NzPickerComponent_Template_span_click_0_listener() { return ctx.onClickInputBox(); })("keyup.enter", function NzPickerComponent_Template_span_keyup_enter_0_listener() { return ctx.onClickInputBox(); });
        ɵngcc0.ɵɵtemplate(2, NzPickerComponent_ng_container_2_Template, 4, 13, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(3, NzPickerComponent_ng_container_3_Template, 8, 19, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NzPickerComponent_ng_template_4_Template, 1, 6, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(6, NzPickerComponent_ng_template_6_Template, 3, 4, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(8, NzPickerComponent_ng_template_8_Template, 2, 6, "ng-template", 5);
        ɵngcc0.ɵɵlistener("positionChange", function NzPickerComponent_Template_ng_template_positionChange_8_listener($event) { return ctx.onPositionChange($event); })("backdropClick", function NzPickerComponent_Template_ng_template_backdropClick_8_listener() { return ctx.onClickBackdrop(); })("detach", function NzPickerComponent_Template_ng_template_detach_8_listener() { return ctx.onOverlayDetach(); });
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵclassMapInterpolate3("", ctx.prefixCls, "-picker ", ctx.size ? ctx.prefixCls + "-picker-" + ctx.size : "", " ", ctx.className, "");
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isRange);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isRange);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayHasBackdrop", !ctx.isOpenHandledByUser())("cdkConnectedOverlayPositions", ctx.overlayPositions);
    } }, directives: [ɵngcc6.CdkOverlayOrigin, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc6.CdkConnectedOverlay, ɵngcc7.NzConnectedOverlayDirective, ɵngcc1.NgTemplateOutlet, ɵngcc8.NzIconDirective, ɵngcc7.NzNoAnimationDirective], encapsulation: 2, data: { animation: [core$1.slideMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPickerComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-picker',
                exportAs: 'nzPicker',
                template: "<span\r\n  cdkOverlayOrigin\r\n  #origin=\"cdkOverlayOrigin\"\r\n  class=\"{{ prefixCls }}-picker {{ size ? prefixCls + '-picker-' + size : '' }} {{ className }}\"\r\n  [ngStyle]=\"style\"\r\n  tabindex=\"0\"\r\n  (click)=\"onClickInputBox()\"\r\n  (keyup.enter)=\"onClickInputBox()\"\r\n>\r\n  <!-- Content of single picker -->\r\n  <ng-container *ngIf=\"!isRange\">\r\n    <input\r\n      #pickerInput\r\n      class=\"{{ prefixCls }}-picker-input ant-input\"\r\n      [class.ant-input-lg]=\"size === 'large'\"\r\n      [class.ant-input-sm]=\"size === 'small'\"\r\n      [class.ant-input-disabled]=\"disabled\"\r\n\r\n      [disabled]=\"disabled\"\r\n      readonly\r\n      value=\"{{ getReadableValue() }}\"\r\n      placeholder=\"{{ getPlaceholder() }}\"\r\n    />\r\n    <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\r\n  </ng-container>\r\n\r\n  <!-- Content of range picker -->\r\n  <ng-container *ngIf=\"isRange\">\r\n    <span\r\n      #pickerInput\r\n      class=\"{{ prefixCls }}-picker-input ant-input\"\r\n      [class.ant-input-lg]=\"size === 'large'\"\r\n      [class.ant-input-sm]=\"size === 'small'\"\r\n      [class.ant-input-disabled]=\"disabled\"\r\n    >\r\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'left' }\"></ng-container>\r\n      <span class=\"{{ prefixCls }}-range-picker-separator\"> ~ </span>\r\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'right' }\"></ng-container>\r\n      <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\r\n    </span>\r\n  </ng-container>\r\n</span>\r\n\r\n<!-- Input for Range ONLY -->\r\n<ng-template #tplRangeInput let-partType=\"partType\">\r\n  <input\r\n    class=\"{{ prefixCls }}-range-picker-input\"\r\n    [disabled]=\"disabled\"\r\n    readonly\r\n    value=\"{{ getReadableValue(partType) }}\"\r\n    placeholder=\"{{ getPlaceholder(partType) }}\"\r\n  />\r\n</ng-template>\r\n\r\n<!-- Right operator icons -->\r\n<ng-template #tplRightRest>\r\n  <i\r\n    nz-icon\r\n    nzType=\"close-circle\"\r\n    nzTheme=\"fill\"\r\n    *ngIf=\"!disabled && !isEmptyValue(value) && allowClear\"\r\n    class=\"{{ prefixCls }}-picker-clear\"\r\n    (click)=\"onClickClear($event)\"\r\n  ></i>\r\n  <span class=\"{{ prefixCls }}-picker-icon\">\r\n    <i nz-icon nzType=\"calendar\"></i>\r\n  </span>\r\n</ng-template>\r\n\r\n<!-- Overlay -->\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayOpen]=\"realOpenState\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"!isOpenHandledByUser()\"\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  (backdropClick)=\"onClickBackdrop()\"\r\n  (detach)=\"onOverlayDetach()\"\r\n>\r\n  <div\r\n    [nzNoAnimation]=\"noAnimation\"\r\n    [@slideMotion]=\"dropdownAnimation\"\r\n    (@slideMotion.done)=\"animationDone()\"\r\n    style=\"position: relative;\"\r\n    [style.left]=\"currentPositionX === 'start' ? '-2px' : '2px'\"\r\n    [style.top]=\"currentPositionY === 'top' ? '-2px' : '2px'\"\r\n  > <!-- Compatible for overlay that not support offset dynamically and immediately -->\r\n    <ng-content></ng-content>\r\n  </div>\r\n</ng-template>\r\n",
                animations: [core$1.slideMotion],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc2.DateHelperService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { noAnimation: [{
            type: core.Input
        }], isRange: [{
            type: core.Input
        }], open: [{
            type: core.Input
        }], valueChange: [{
            type: core.Output
        }], openChange: [{
            type: core.Output
        }], value: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], allowClear: [{
            type: core.Input
        }], autoFocus: [{
            type: core.Input
        }], className: [{
            type: core.Input
        }], format: [{
            type: core.Input
        }], size: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], origin: [{
            type: core.ViewChild,
            args: ['origin', { static: false }]
        }], cdkConnectedOverlay: [{
            type: core.ViewChild,
            args: [overlay.CdkConnectedOverlay, { static: false }]
        }], pickerInput: [{
            type: core.ViewChild,
            args: ['pickerInput', { static: false }]
        }] }); })();
        return NzPickerComponent;
    }());
    if (false) {
        /** @type {?} */
        NzPickerComponent.prototype.noAnimation;
        /** @type {?} */
        NzPickerComponent.prototype.isRange;
        /** @type {?} */
        NzPickerComponent.prototype.open;
        /** @type {?} */
        NzPickerComponent.prototype.disabled;
        /** @type {?} */
        NzPickerComponent.prototype.placeholder;
        /** @type {?} */
        NzPickerComponent.prototype.allowClear;
        /** @type {?} */
        NzPickerComponent.prototype.autoFocus;
        /** @type {?} */
        NzPickerComponent.prototype.className;
        /** @type {?} */
        NzPickerComponent.prototype.format;
        /** @type {?} */
        NzPickerComponent.prototype.size;
        /** @type {?} */
        NzPickerComponent.prototype.style;
        /** @type {?} */
        NzPickerComponent.prototype.value;
        /** @type {?} */
        NzPickerComponent.prototype.valueChange;
        /** @type {?} */
        NzPickerComponent.prototype.openChange;
        /** @type {?} */
        NzPickerComponent.prototype.origin;
        /** @type {?} */
        NzPickerComponent.prototype.cdkConnectedOverlay;
        /** @type {?} */
        NzPickerComponent.prototype.pickerInput;
        /** @type {?} */
        NzPickerComponent.prototype.prefixCls;
        /** @type {?} */
        NzPickerComponent.prototype.animationOpenState;
        /** @type {?} */
        NzPickerComponent.prototype.overlayOpen;
        /** @type {?} */
        NzPickerComponent.prototype.overlayOffsetY;
        /** @type {?} */
        NzPickerComponent.prototype.overlayOffsetX;
        /** @type {?} */
        NzPickerComponent.prototype.overlayPositions;
        /** @type {?} */
        NzPickerComponent.prototype.dropdownAnimation;
        /** @type {?} */
        NzPickerComponent.prototype.currentPositionX;
        /** @type {?} */
        NzPickerComponent.prototype.currentPositionY;
        /**
         * @type {?}
         * @private
         */
        NzPickerComponent.prototype.dateHelper;
        /**
         * @type {?}
         * @private
         */
        NzPickerComponent.prototype.changeDetector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var POPUP_STYLE_PATCH = { position: 'relative' };
    // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
    /**
     * The base picker for all common APIs
     * @abstract
     */
    var AbstractPickerComponent = /** @class */ (function () {
        function AbstractPickerComponent(i18n, cdr, dateHelper, noAnimation) {
            this.i18n = i18n;
            this.cdr = cdr;
            this.dateHelper = dateHelper;
            this.noAnimation = noAnimation;
            // --- Common API
            this.nzAllowClear = true;
            this.nzAutoFocus = false;
            this.nzDisabled = false;
            this.nzPopupStyle = POPUP_STYLE_PATCH;
            this.nzOnOpenChange = new core.EventEmitter();
            this.isRange = false; // Indicate whether the value is a range value
            this.destroyed$ = new rxjs.Subject();
            this.isCustomPlaceHolder = false;
            // ------------------------------------------------------------------------
            // | Control value accessor implements
            // ------------------------------------------------------------------------
            // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
            this.onChangeFn = (/**
             * @return {?}
             */
            function () { return void 0; });
            this.onTouchedFn = (/**
             * @return {?}
             */
            function () { return void 0; });
        }
        Object.defineProperty(AbstractPickerComponent.prototype, "realOpenState", {
            get: 
            // Indicate whether the value is a range value
            /**
             * @return {?}
             */
            function () {
                return this.picker.animationOpenState;
            } // Use picker's real open state to let re-render the picker's content when shown up
            ,
            enumerable: true,
            configurable: true
        });
        // Use picker's real open state to let re-render the picker's content when shown up
        /**
         * @return {?}
         */
        AbstractPickerComponent.prototype.initValue = 
        // Use picker's real open state to let re-render the picker's content when shown up
        /**
         * @return {?}
         */
        function () {
            this.nzValue = this.isRange ? [] : null;
        };
        /**
         * @return {?}
         */
        AbstractPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Subscribe the every locale change if the nzLocale is not handled by user
            if (!this.nzLocale) {
                this.i18n.localeChange.pipe(operators.takeUntil(this.destroyed$)).subscribe((/**
                 * @return {?}
                 */
                function () { return _this.setLocale(); }));
            }
            // Default value
            this.initValue();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        AbstractPickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzPopupStyle) {
                // Always assign the popup style patch
                this.nzPopupStyle = this.nzPopupStyle ? __assign({}, this.nzPopupStyle, POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
            }
            // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
            if (changes.nzPlaceHolder && changes.nzPlaceHolder.firstChange && typeof this.nzPlaceHolder !== 'undefined') {
                this.isCustomPlaceHolder = true;
            }
            if (changes.nzLocale) {
                // The nzLocale is currently handled by user
                this.setDefaultPlaceHolder();
            }
        };
        /**
         * @return {?}
         */
        AbstractPickerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroyed$.next();
            this.destroyed$.complete();
        };
        /**
         * @return {?}
         */
        AbstractPickerComponent.prototype.closeOverlay = /**
         * @return {?}
         */
        function () {
            this.picker.hideOverlay();
        };
        /**
         * Common handle for value changes
         * @param value changed value
         */
        /**
         * Common handle for value changes
         * @param {?} value changed value
         * @return {?}
         */
        AbstractPickerComponent.prototype.onValueChange = /**
         * Common handle for value changes
         * @param {?} value changed value
         * @return {?}
         */
        function (value) {
            this.nzValue = value;
            if (this.isRange) {
                /** @type {?} */
                var vAsRange = (/** @type {?} */ (this.nzValue));
                if (vAsRange.length) {
                    this.onChangeFn([vAsRange[0].nativeDate, vAsRange[1].nativeDate]);
                }
                else {
                    this.onChangeFn([]);
                }
            }
            else {
                if (this.nzValue) {
                    this.onChangeFn(((/** @type {?} */ (this.nzValue))).nativeDate);
                }
                else {
                    this.onChangeFn(null);
                }
            }
            this.onTouchedFn();
        };
        /**
         * Triggered when overlayOpen changes (different with realOpenState)
         * @param open The overlayOpen in picker component
         */
        /**
         * Triggered when overlayOpen changes (different with realOpenState)
         * @param {?} open The overlayOpen in picker component
         * @return {?}
         */
        AbstractPickerComponent.prototype.onOpenChange = /**
         * Triggered when overlayOpen changes (different with realOpenState)
         * @param {?} open The overlayOpen in picker component
         * @return {?}
         */
        function (open) {
            this.nzOnOpenChange.emit(open);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        AbstractPickerComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setValue(value);
            this.cdr.markForCheck();
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} fn
         * @return {?}
         */
        AbstractPickerComponent.prototype.registerOnChange = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeFn = fn;
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} fn
         * @return {?}
         */
        AbstractPickerComponent.prototype.registerOnTouched = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchedFn = fn;
        };
        /**
         * @param {?} disabled
         * @return {?}
         */
        AbstractPickerComponent.prototype.setDisabledState = /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this.nzDisabled = disabled;
            this.cdr.markForCheck();
        };
        // ------------------------------------------------------------------------
        // | Internal methods
        // ------------------------------------------------------------------------
        // Reload locale from i18n with side effects
        // ------------------------------------------------------------------------
        // | Internal methods
        // ------------------------------------------------------------------------
        // Reload locale from i18n with side effects
        /**
         * @private
         * @return {?}
         */
        AbstractPickerComponent.prototype.setLocale = 
        // ------------------------------------------------------------------------
        // | Internal methods
        // ------------------------------------------------------------------------
        // Reload locale from i18n with side effects
        /**
         * @private
         * @return {?}
         */
        function () {
            this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
            this.setDefaultPlaceHolder();
            this.cdr.markForCheck();
        };
        /**
         * @private
         * @return {?}
         */
        AbstractPickerComponent.prototype.setDefaultPlaceHolder = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.isCustomPlaceHolder && this.nzLocale) {
                this.nzPlaceHolder = this.isRange ? this.nzLocale.lang.rangePlaceholder : this.nzLocale.lang.placeholder;
            }
        };
        // Safe way of setting value with default
        // Safe way of setting value with default
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        AbstractPickerComponent.prototype.setValue = 
        // Safe way of setting value with default
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.isRange) {
                this.nzValue = value ? ((/** @type {?} */ (value))).map((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return new core$1.CandyDate(val); })) : [];
            }
            else {
                this.nzValue = value ? new core$1.CandyDate((/** @type {?} */ (value))) : null;
            }
        };
        AbstractPickerComponent.propDecorators = {
            nzAllowClear: [{ type: core.Input }],
            nzAutoFocus: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzOpen: [{ type: core.Input }],
            nzClassName: [{ type: core.Input }],
            nzDisabledDate: [{ type: core.Input }],
            nzLocale: [{ type: core.Input }],
            nzPlaceHolder: [{ type: core.Input }],
            nzPopupStyle: [{ type: core.Input }],
            nzDropdownClassName: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzStyle: [{ type: core.Input }],
            nzFormat: [{ type: core.Input }],
            nzValue: [{ type: core.Input }],
            nzOnOpenChange: [{ type: core.Output }],
            picker: [{ type: core.ViewChild, args: [NzPickerComponent, { static: true },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzAutoFocus", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzOpen", void 0);
AbstractPickerComponent.ɵfac = function AbstractPickerComponent_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
AbstractPickerComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: AbstractPickerComponent, viewQuery: function AbstractPickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(NzPickerComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.picker = _t.first);
    } }, inputs: { nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzPopupStyle: "nzPopupStyle", nzValue: "nzValue", nzLocale: "nzLocale", nzPlaceHolder: "nzPlaceHolder", nzOpen: "nzOpen", nzClassName: "nzClassName", nzDisabledDate: "nzDisabledDate", nzDropdownClassName: "nzDropdownClassName", nzSize: "nzSize", nzStyle: "nzStyle", nzFormat: "nzFormat" }, outputs: { nzOnOpenChange: "nzOnOpenChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });

        return AbstractPickerComponent;
    }());
    if (false) {
        /** @type {?} */
        AbstractPickerComponent.prototype.nzAllowClear;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzAutoFocus;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzDisabled;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzOpen;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzClassName;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzDisabledDate;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzLocale;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzPlaceHolder;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzPopupStyle;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzDropdownClassName;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzSize;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzStyle;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzFormat;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzValue;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzOnOpenChange;
        /**
         * @type {?}
         * @protected
         */
        AbstractPickerComponent.prototype.picker;
        /** @type {?} */
        AbstractPickerComponent.prototype.isRange;
        /**
         * @type {?}
         * @protected
         */
        AbstractPickerComponent.prototype.destroyed$;
        /**
         * @type {?}
         * @protected
         */
        AbstractPickerComponent.prototype.isCustomPlaceHolder;
        /** @type {?} */
        AbstractPickerComponent.prototype.onChangeFn;
        /** @type {?} */
        AbstractPickerComponent.prototype.onTouchedFn;
        /**
         * @type {?}
         * @protected
         */
        AbstractPickerComponent.prototype.i18n;
        /**
         * @type {?}
         * @protected
         */
        AbstractPickerComponent.prototype.cdr;
        /**
         * @type {?}
         * @protected
         */
        AbstractPickerComponent.prototype.dateHelper;
        /** @type {?} */
        AbstractPickerComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateRangePickerComponent = /** @class */ (function (_super) {
        __extends(DateRangePickerComponent, _super);
        function DateRangePickerComponent(i18n, cdr, dateHelper, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.showWeek = false; // Should show as week picker
            _this.nzShowToday = true;
            _this.nzOnPanelChange = new core.EventEmitter();
            _this.nzOnCalendarChange = new core.EventEmitter();
            _this.nzOnOk = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(DateRangePickerComponent.prototype, "nzShowTime", {
            get: /**
             * @return {?}
             */
            function () {
                return this._showTime;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._showTime = typeof value === 'object' ? value : core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateRangePickerComponent.prototype, "realShowToday", {
            get: /**
             * @return {?}
             */
            function () {
                // Range not support nzShowToday currently
                return !this.isRange && this.nzShowToday;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DateRangePickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnInit.call(this);
            // Default format when it's empty
            if (!this.nzFormat) {
                if (this.showWeek) {
                    this.nzFormat = this.dateHelper.relyOnDatePipe ? 'yyyy-ww' : 'YYYY-WW'; // Format for week
                }
                else {
                    if (this.dateHelper.relyOnDatePipe) {
                        this.nzFormat = this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
                    }
                    else {
                        this.nzFormat = this.nzShowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
                    }
                }
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        DateRangePickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            if (changes.nzRenderExtraFooter) {
                this.extraFooter = core$1.valueFunctionProp(this.nzRenderExtraFooter);
            }
            if (changes.nzShowTime || changes.nzStyle) {
                this.setFixedPickerStyle();
            }
        };
        /**
         * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
         */
        /**
         * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
         * @param {?} value
         * @param {?=} isEnter
         * @return {?}
         */
        DateRangePickerComponent.prototype.onValueChange = /**
         * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
         * @param {?} value
         * @param {?=} isEnter
         * @return {?}
         */
        function (value, isEnter) {
            if (isEnter === void 0) { isEnter = false; }
            _super.prototype.onValueChange.call(this, value);
            if (!this.nzShowTime || isEnter) {
                this.closeOverlay();
            }
        };
        // Emit nzOnCalendarChange when select date by nz-range-picker
        // Emit nzOnCalendarChange when select date by nz-range-picker
        /**
         * @param {?} value
         * @return {?}
         */
        DateRangePickerComponent.prototype.onCalendarChange = 
        // Emit nzOnCalendarChange when select date by nz-range-picker
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.isRange) {
                /** @type {?} */
                var rangeValue = value.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.nativeDate; }));
                this.nzOnCalendarChange.emit(rangeValue);
            }
        };
        // Emitted when done with date selecting
        // Emitted when done with date selecting
        /**
         * @return {?}
         */
        DateRangePickerComponent.prototype.onResultOk = 
        // Emitted when done with date selecting
        /**
         * @return {?}
         */
        function () {
            if (this.isRange) {
                /** @type {?} */
                var value = (/** @type {?} */ (this.nzValue));
                if (value.length) {
                    this.nzOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
                }
                else {
                    this.nzOnOk.emit([]);
                }
            }
            else {
                if (this.nzValue) {
                    this.nzOnOk.emit(((/** @type {?} */ (this.nzValue))).nativeDate);
                }
                else {
                    this.nzOnOk.emit(null);
                }
            }
            this.closeOverlay();
        };
        /**
         * @param {?} open
         * @return {?}
         */
        DateRangePickerComponent.prototype.onOpenChange = /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            this.nzOnOpenChange.emit(open);
        };
        // Setup fixed style for picker
        // Setup fixed style for picker
        /**
         * @private
         * @return {?}
         */
        DateRangePickerComponent.prototype.setFixedPickerStyle = 
        // Setup fixed style for picker
        /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showTimeFixes = {};
            if (this.nzShowTime) {
                showTimeFixes.width = this.isRange ? '350px' : '195px';
            }
            this.pickerStyle = __assign({}, showTimeFixes, this.nzStyle);
        };
        /** @nocollapse */
        DateRangePickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core$1.NzNoAnimationDirective }
        ]; };
        DateRangePickerComponent.propDecorators = {
            nzDateRender: [{ type: core.Input }],
            nzDisabledTime: [{ type: core.Input }],
            nzRenderExtraFooter: [{ type: core.Input }],
            nzShowToday: [{ type: core.Input }],
            nzMode: [{ type: core.Input }],
            nzRanges: [{ type: core.Input }],
            nzOnPanelChange: [{ type: core.Output }],
            nzOnCalendarChange: [{ type: core.Output }],
            nzShowTime: [{ type: core.Input }],
            nzOnOk: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], DateRangePickerComponent.prototype, "nzShowToday", void 0);
DateRangePickerComponent.ɵfac = function DateRangePickerComponent_Factory(t) { return new (t || DateRangePickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.NzNoAnimationDirective)); };
DateRangePickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DateRangePickerComponent, selectors: [["ng-component"]], inputs: { nzShowTime: "nzShowTime", nzDateRender: "nzDateRender", nzDisabledTime: "nzDisabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", nzShowToday: "nzShowToday", nzMode: "nzMode", nzRanges: "nzRanges" }, outputs: { nzOnPanelChange: "nzOnPanelChange", nzOnCalendarChange: "nzOnCalendarChange", nzOnOk: "nzOnOk" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function DateRangePickerComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateRangePickerComponent, [{
        type: core.Component,
        args: [{
                template: "" // Just for rollup
            }]
    }], function () { return [{ type: ɵngcc2.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.DateHelperService }, { type: ɵngcc7.NzNoAnimationDirective }]; }, { nzShowTime: [{
            type: core.Input
        }], nzDateRender: [{
            type: core.Input
        }], nzDisabledTime: [{
            type: core.Input
        }], nzRenderExtraFooter: [{
            type: core.Input
        }], nzShowToday: [{
            type: core.Input
        }], nzMode: [{
            type: core.Input
        }], nzRanges: [{
            type: core.Input
        }], nzOnPanelChange: [{
            type: core.Output
        }], nzOnCalendarChange: [{
            type: core.Output
        }], nzOnOk: [{
            type: core.Output
        }] }); })();
        return DateRangePickerComponent;
    }(AbstractPickerComponent));
    if (false) {
        /** @type {?} */
        DateRangePickerComponent.prototype.showWeek;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzDateRender;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzDisabledTime;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzRenderExtraFooter;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzShowToday;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzMode;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzRanges;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzOnPanelChange;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzOnCalendarChange;
        /**
         * @type {?}
         * @private
         */
        DateRangePickerComponent.prototype._showTime;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzOnOk;
        /** @type {?} */
        DateRangePickerComponent.prototype.pickerStyle;
        /** @type {?} */
        DateRangePickerComponent.prototype.extraFooter;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The base picker for header panels, current support: Year/Month
     */
    var HeaderPickerComponent = /** @class */ (function (_super) {
        __extends(HeaderPickerComponent, _super);
        function HeaderPickerComponent(i18n, cdr, dateHelper, noAnimation) {
            return _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        }
        /**
         * @return {?}
         */
        HeaderPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnInit.call(this);
            this.panelMode = this.endPanelMode;
            /** @type {?} */
            var allHeaderPanels = ['decade', 'year', 'month'];
            this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        HeaderPickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            if (changes.nzRenderExtraFooter) {
                this.extraFooter = core$1.valueFunctionProp(this.nzRenderExtraFooter);
            }
        };
        /**
         * @param {?} mode
         * @return {?}
         */
        HeaderPickerComponent.prototype.onPanelModeChange = /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            if (this.supportPanels.indexOf(mode) > -1) {
                this.panelMode = mode;
            }
            else {
                // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
                this.panelMode = this.endPanelMode;
            }
        };
        /**
         * @param {?} mode
         * @param {?} value
         * @return {?}
         */
        HeaderPickerComponent.prototype.onChooseValue = /**
         * @param {?} mode
         * @param {?} value
         * @return {?}
         */
        function (mode, value) {
            if (this.endPanelMode === mode) {
                _super.prototype.onValueChange.call(this, value);
                this.closeOverlay();
            }
        };
        /**
         * @param {?} open
         * @return {?}
         */
        HeaderPickerComponent.prototype.onOpenChange = /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            if (!open) {
                this.cleanUp();
            }
            this.nzOnOpenChange.emit(open);
        };
        // Restore some initial props to let open as new in next time
        // Restore some initial props to let open as new in next time
        /**
         * @private
         * @return {?}
         */
        HeaderPickerComponent.prototype.cleanUp = 
        // Restore some initial props to let open as new in next time
        /**
         * @private
         * @return {?}
         */
        function () {
            this.panelMode = this.endPanelMode;
        };
        /** @nocollapse */
        HeaderPickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core$1.NzNoAnimationDirective }
        ]; };
        HeaderPickerComponent.propDecorators = {
            nzPlaceHolder: [{ type: core.Input }],
            nzRenderExtraFooter: [{ type: core.Input }],
            nzDefaultValue: [{ type: core.Input }],
            nzFormat: [{ type: core.Input }]
        };
HeaderPickerComponent.ɵfac = function HeaderPickerComponent_Factory(t) { return new (t || HeaderPickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.NzNoAnimationDirective)); };
HeaderPickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: HeaderPickerComponent, selectors: [["ng-component"]], inputs: { nzPlaceHolder: "nzPlaceHolder", nzRenderExtraFooter: "nzRenderExtraFooter", nzDefaultValue: "nzDefaultValue", nzFormat: "nzFormat" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function HeaderPickerComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HeaderPickerComponent, [{
        type: core.Component,
        args: [{
                template: ""
            }]
    }], function () { return [{ type: ɵngcc2.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.DateHelperService }, { type: ɵngcc7.NzNoAnimationDirective }]; }, { nzPlaceHolder: [{
            type: core.Input
        }], nzRenderExtraFooter: [{
            type: core.Input
        }], nzDefaultValue: [{
            type: core.Input
        }], nzFormat: [{
            type: core.Input
        }] }); })();
        return HeaderPickerComponent;
    }(AbstractPickerComponent));
    if (false) {
        /** @type {?} */
        HeaderPickerComponent.prototype.nzPlaceHolder;
        /** @type {?} */
        HeaderPickerComponent.prototype.nzRenderExtraFooter;
        /** @type {?} */
        HeaderPickerComponent.prototype.nzDefaultValue;
        /** @type {?} */
        HeaderPickerComponent.prototype.nzFormat;
        /** @type {?} */
        HeaderPickerComponent.prototype.endPanelMode;
        /** @type {?} */
        HeaderPickerComponent.prototype.panelMode;
        /** @type {?} */
        HeaderPickerComponent.prototype.extraFooter;
        /**
         * @type {?}
         * @private
         */
        HeaderPickerComponent.prototype.supportPanels;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDatePickerComponent = /** @class */ (function (_super) {
        __extends(NzDatePickerComponent, _super);
        function NzDatePickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.isRange = false;
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        /** @nocollapse */
        NzDatePickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
NzDatePickerComponent.ɵfac = function NzDatePickerComponent_Factory(t) { return new (t || NzDatePickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.NzNoAnimationDirective, 9)); };
NzDatePickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDatePickerComponent, selectors: [["nz-date-picker"]], exportAs: ["nzDatePicker"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: forms.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: core.forwardRef(( /**
                 * @return {?}
                 */function () { return NzDatePickerComponent; }))
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 14, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "className", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker", 4, "ngIf"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker"]], template: function NzDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-picker", 0);
        ɵngcc0.ɵɵlistener("valueChange", function NzDatePickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzDatePickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        ɵngcc0.ɵɵtemplate(1, NzDatePickerComponent_date_range_popup_1_Template, 1, 16, "date-range-popup", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleMap(ctx.pickerStyle);
        ɵngcc0.ɵɵproperty("isRange", ctx.isRange)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("className", ctx.nzClassName)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.realOpenState);
    } }, directives: [NzPickerComponent, ɵngcc1.NgIf, DateRangePopupComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDatePickerComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'nz-date-picker',
                exportAs: 'nzDatePicker',
                template: "<nz-picker\r\n  [isRange]=\"isRange\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"pickerStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <date-range-popup *ngIf=\"realOpenState\"\r\n    [isRange]=\"isRange\"\r\n    [showWeek]=\"showWeek\"\r\n    [panelMode]=\"nzMode\"\r\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\r\n    [value]=\"nzValue\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    (inputChange)=\"onValueChange($event, true)\"\r\n    (calendarChange)=\"onCalendarChange($event)\"\r\n    [locale]=\"nzLocale?.lang\"\r\n    [showToday]=\"realShowToday\"\r\n    [showTime]=\"nzShowTime\"\r\n    [format]=\"nzFormat\"\r\n    [dateRender]=\"nzDateRender\"\r\n    [disabledDate]=\"nzDisabledDate\"\r\n    [disabledTime]=\"nzDisabledTime\"\r\n    [placeholder]=\"nzPlaceHolder\"\r\n    [dropdownClassName]=\"nzDropdownClassName\"\r\n    [popupStyle]=\"nzPopupStyle\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [ranges]=\"nzRanges\"\r\n    (resultOk)=\"onResultOk()\"\r\n    (closePicker)=\"closeOverlay()\"\r\n  ></date-range-popup>\r\n</nz-picker>",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: core.forwardRef(( /**
                         * @return {?}
                         */function () { return NzDatePickerComponent; }))
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc2.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.DateHelperService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc7.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, null); })();
        return NzDatePickerComponent;
    }(DateRangePickerComponent));
    if (false) {
        /** @type {?} */
        NzDatePickerComponent.prototype.isRange;
        /** @type {?} */
        NzDatePickerComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzMonthPickerComponent = /** @class */ (function (_super) {
        __extends(NzMonthPickerComponent, _super);
        function NzMonthPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.nzFormat = 'yyyy-MM';
            _this.endPanelMode = 'month';
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        /** @nocollapse */
        NzMonthPickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzMonthPickerComponent.propDecorators = {
            nzFormat: [{ type: core.Input }]
        };
NzMonthPickerComponent.ɵfac = function NzMonthPickerComponent_Factory(t) { return new (t || NzMonthPickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.NzNoAnimationDirective, 9)); };
NzMonthPickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzMonthPickerComponent, selectors: [["nz-month-picker"]], inputs: { nzFormat: "nzFormat" }, exportAs: ["nzMonthPicker"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: forms.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: core.forwardRef(( /**
                 * @return {?}
                 */function () { return NzMonthPickerComponent; }))
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 14, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "className", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [4, "ngIf"], [3, "ngStyle"], ["tabindex", "0", 1, "ant-calendar", "ant-calendar-month", "ant-calendar-month-calendar"], [1, "ant-calendar-month-calendar-content"], [1, "ant-calendar-month-header-wrap"], [3, "disabledMonth", "disabledYear", "panelMode", "value", "locale", "enablePrev", "enableNext", "panelModeChange", "chooseYear", "chooseMonth"], [3, "extraFooter", 4, "ngIf"], [3, "extraFooter"]], template: function NzMonthPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-picker", 0);
        ɵngcc0.ɵɵlistener("valueChange", function NzMonthPickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzMonthPickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        ɵngcc0.ɵɵtemplate(1, NzMonthPickerComponent_div_1_Template, 7, 12, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleMap(ctx.nzStyle);
        ɵngcc0.ɵɵproperty("isRange", false)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("className", ctx.nzClassName)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.realOpenState);
    } }, directives: [NzPickerComponent, ɵngcc1.NgIf, ɵngcc1.NgStyle, CalendarHeaderComponent,
        CalendarFooterComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMonthPickerComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'nz-month-picker',
                exportAs: 'nzMonthPicker',
                template: "<nz-picker\r\n  [isRange]=\"false\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"nzStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <div *ngIf=\"realOpenState\">\r\n    <div class=\"ant-calendar-picker-container {{ nzDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"nzPopupStyle\">\r\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\r\n        <div class=\"ant-calendar-month-calendar-content\">\r\n          <div class=\"ant-calendar-month-header-wrap\">\r\n            <calendar-header\r\n              [disabledMonth]=\"nzDisabledDate\"\r\n              [disabledYear]=\"nzDisabledDate\"\r\n              [panelMode]=\"panelMode\"\r\n              (panelModeChange)=\"onPanelModeChange($event)\"\r\n              [value]=\"nzValue\"\r\n              (chooseYear)=\"onChooseValue('year', $event)\"\r\n              (chooseMonth)=\"onChooseValue('month', $event)\"\r\n              [locale]=\"nzLocale.lang\"\r\n              [enablePrev]=\"true\"\r\n              [enableNext]=\"true\"\r\n            ></calendar-header>\r\n          </div>\r\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nz-picker>",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: core.forwardRef(( /**
                         * @return {?}
                         */function () { return NzMonthPickerComponent; }))
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc2.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.DateHelperService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc7.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, { nzFormat: [{
            type: core.Input
        }] }); })();
        return NzMonthPickerComponent;
    }(HeaderPickerComponent));
    if (false) {
        /** @type {?} */
        NzMonthPickerComponent.prototype.nzFormat;
        /** @type {?} */
        NzMonthPickerComponent.prototype.endPanelMode;
        /** @type {?} */
        NzMonthPickerComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzRangePickerComponent = /** @class */ (function (_super) {
        __extends(NzRangePickerComponent, _super);
        function NzRangePickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.isRange = true;
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        /** @nocollapse */
        NzRangePickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
NzRangePickerComponent.ɵfac = function NzRangePickerComponent_Factory(t) { return new (t || NzRangePickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.NzNoAnimationDirective, 9)); };
NzRangePickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzRangePickerComponent, selectors: [["nz-range-picker"]], exportAs: ["nzRangePicker"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: forms.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: core.forwardRef(( /**
                 * @return {?}
                 */function () { return NzRangePickerComponent; }))
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 14, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "className", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker", 4, "ngIf"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker"]], template: function NzRangePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-picker", 0);
        ɵngcc0.ɵɵlistener("valueChange", function NzRangePickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzRangePickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        ɵngcc0.ɵɵtemplate(1, NzRangePickerComponent_date_range_popup_1_Template, 1, 16, "date-range-popup", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleMap(ctx.pickerStyle);
        ɵngcc0.ɵɵproperty("isRange", ctx.isRange)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("className", ctx.nzClassName)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.realOpenState);
    } }, directives: [NzPickerComponent, ɵngcc1.NgIf, DateRangePopupComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRangePickerComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'nz-range-picker',
                exportAs: 'nzRangePicker',
                template: "<nz-picker\r\n  [isRange]=\"isRange\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"pickerStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <date-range-popup *ngIf=\"realOpenState\"\r\n    [isRange]=\"isRange\"\r\n    [showWeek]=\"showWeek\"\r\n    [panelMode]=\"nzMode\"\r\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\r\n    [value]=\"nzValue\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    (inputChange)=\"onValueChange($event, true)\"\r\n    (calendarChange)=\"onCalendarChange($event)\"\r\n    [locale]=\"nzLocale?.lang\"\r\n    [showToday]=\"realShowToday\"\r\n    [showTime]=\"nzShowTime\"\r\n    [format]=\"nzFormat\"\r\n    [dateRender]=\"nzDateRender\"\r\n    [disabledDate]=\"nzDisabledDate\"\r\n    [disabledTime]=\"nzDisabledTime\"\r\n    [placeholder]=\"nzPlaceHolder\"\r\n    [dropdownClassName]=\"nzDropdownClassName\"\r\n    [popupStyle]=\"nzPopupStyle\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [ranges]=\"nzRanges\"\r\n    (resultOk)=\"onResultOk()\"\r\n    (closePicker)=\"closeOverlay()\"\r\n  ></date-range-popup>\r\n</nz-picker>",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: core.forwardRef(( /**
                         * @return {?}
                         */function () { return NzRangePickerComponent; }))
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc2.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.DateHelperService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc7.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, null); })();
        return NzRangePickerComponent;
    }(DateRangePickerComponent));
    if (false) {
        /** @type {?} */
        NzRangePickerComponent.prototype.isRange;
        /** @type {?} */
        NzRangePickerComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzWeekPickerComponent = /** @class */ (function (_super) {
        __extends(NzWeekPickerComponent, _super);
        function NzWeekPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.showWeek = true;
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        /** @nocollapse */
        NzWeekPickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
NzWeekPickerComponent.ɵfac = function NzWeekPickerComponent_Factory(t) { return new (t || NzWeekPickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.NzNoAnimationDirective, 9)); };
NzWeekPickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzWeekPickerComponent, selectors: [["nz-week-picker"]], exportAs: ["nzWeekPicker"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: forms.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: core.forwardRef(( /**
                 * @return {?}
                 */function () { return NzWeekPickerComponent; }))
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 14, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "className", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker", 4, "ngIf"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker"]], template: function NzWeekPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-picker", 0);
        ɵngcc0.ɵɵlistener("valueChange", function NzWeekPickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzWeekPickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        ɵngcc0.ɵɵtemplate(1, NzWeekPickerComponent_date_range_popup_1_Template, 1, 16, "date-range-popup", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleMap(ctx.pickerStyle);
        ɵngcc0.ɵɵproperty("isRange", ctx.isRange)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("className", ctx.nzClassName)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.realOpenState);
    } }, directives: [NzPickerComponent, ɵngcc1.NgIf, DateRangePopupComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzWeekPickerComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'nz-week-picker',
                exportAs: 'nzWeekPicker',
                template: "<nz-picker\r\n  [isRange]=\"isRange\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"pickerStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <date-range-popup *ngIf=\"realOpenState\"\r\n    [isRange]=\"isRange\"\r\n    [showWeek]=\"showWeek\"\r\n    [panelMode]=\"nzMode\"\r\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\r\n    [value]=\"nzValue\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    (inputChange)=\"onValueChange($event, true)\"\r\n    (calendarChange)=\"onCalendarChange($event)\"\r\n    [locale]=\"nzLocale?.lang\"\r\n    [showToday]=\"realShowToday\"\r\n    [showTime]=\"nzShowTime\"\r\n    [format]=\"nzFormat\"\r\n    [dateRender]=\"nzDateRender\"\r\n    [disabledDate]=\"nzDisabledDate\"\r\n    [disabledTime]=\"nzDisabledTime\"\r\n    [placeholder]=\"nzPlaceHolder\"\r\n    [dropdownClassName]=\"nzDropdownClassName\"\r\n    [popupStyle]=\"nzPopupStyle\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [ranges]=\"nzRanges\"\r\n    (resultOk)=\"onResultOk()\"\r\n    (closePicker)=\"closeOverlay()\"\r\n  ></date-range-popup>\r\n</nz-picker>",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: core.forwardRef(( /**
                         * @return {?}
                         */function () { return NzWeekPickerComponent; }))
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc2.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.DateHelperService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc7.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, null); })();
        return NzWeekPickerComponent;
    }(DateRangePickerComponent));
    if (false) {
        /** @type {?} */
        NzWeekPickerComponent.prototype.showWeek;
        /** @type {?} */
        NzWeekPickerComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzYearPickerComponent = /** @class */ (function (_super) {
        __extends(NzYearPickerComponent, _super);
        function NzYearPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.nzFormat = 'yyyy';
            _this.endPanelMode = 'year';
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        /** @nocollapse */
        NzYearPickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzYearPickerComponent.propDecorators = {
            nzFormat: [{ type: core.Input }]
        };
NzYearPickerComponent.ɵfac = function NzYearPickerComponent_Factory(t) { return new (t || NzYearPickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.NzNoAnimationDirective, 9)); };
NzYearPickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzYearPickerComponent, selectors: [["nz-year-picker"]], inputs: { nzFormat: "nzFormat" }, exportAs: ["nzYearPicker"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: forms.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: core.forwardRef(( /**
                 * @return {?}
                 */function () { return NzYearPickerComponent; }))
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 14, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "className", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [4, "ngIf"], [3, "ngStyle"], ["tabindex", "0", 1, "ant-calendar", "ant-calendar-month", "ant-calendar-month-calendar"], [1, "ant-calendar-month-calendar-content"], [1, "ant-calendar-month-header-wrap"], [3, "disabledMonth", "disabledYear", "panelMode", "value", "locale", "enablePrev", "enableNext", "panelModeChange", "chooseYear", "chooseMonth"], [3, "extraFooter", 4, "ngIf"], [3, "extraFooter"]], template: function NzYearPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-picker", 0);
        ɵngcc0.ɵɵlistener("valueChange", function NzYearPickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzYearPickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        ɵngcc0.ɵɵtemplate(1, NzYearPickerComponent_div_1_Template, 7, 12, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleMap(ctx.nzStyle);
        ɵngcc0.ɵɵproperty("isRange", false)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("className", ctx.nzClassName)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.realOpenState);
    } }, directives: [NzPickerComponent, ɵngcc1.NgIf, ɵngcc1.NgStyle, CalendarHeaderComponent,
        CalendarFooterComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzYearPickerComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'nz-year-picker',
                exportAs: 'nzYearPicker',
                template: "<nz-picker\r\n  [isRange]=\"false\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"nzStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <div *ngIf=\"realOpenState\">\r\n    <div class=\"ant-calendar-picker-container {{ nzDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"nzPopupStyle\">\r\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\r\n        <div class=\"ant-calendar-month-calendar-content\">\r\n          <div class=\"ant-calendar-month-header-wrap\">\r\n            <calendar-header\r\n              [disabledMonth]=\"nzDisabledDate\"\r\n              [disabledYear]=\"nzDisabledDate\"\r\n              [panelMode]=\"panelMode\"\r\n              (panelModeChange)=\"onPanelModeChange($event)\"\r\n              [value]=\"nzValue\"\r\n              (chooseYear)=\"onChooseValue('year', $event)\"\r\n              (chooseMonth)=\"onChooseValue('month', $event)\"\r\n              [locale]=\"nzLocale.lang\"\r\n              [enablePrev]=\"true\"\r\n              [enableNext]=\"true\"\r\n            ></calendar-header>\r\n          </div>\r\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nz-picker>",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: core.forwardRef(( /**
                         * @return {?}
                         */function () { return NzYearPickerComponent; }))
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc2.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.DateHelperService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc7.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, { nzFormat: [{
            type: core.Input
        }] }); })();
        return NzYearPickerComponent;
    }(HeaderPickerComponent));
    if (false) {
        /** @type {?} */
        NzYearPickerComponent.prototype.nzFormat;
        /** @type {?} */
        NzYearPickerComponent.prototype.endPanelMode;
        /** @type {?} */
        NzYearPickerComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDatePickerModule = /** @class */ (function () {
        function NzDatePickerModule() {
        }
NzDatePickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDatePickerModule });
NzDatePickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDatePickerModule_Factory(t) { return new (t || NzDatePickerModule)(); }, imports: [[common.CommonModule, overlay.OverlayModule, LibPackerModule, icon.NzIconModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzDatePickerModule, { declarations: [HeaderPickerComponent,
        DateRangePickerComponent,
        NzPickerComponent,
        NzDatePickerComponent,
        NzMonthPickerComponent,
        NzYearPickerComponent,
        NzWeekPickerComponent,
        NzRangePickerComponent], imports: [ɵngcc1.CommonModule, ɵngcc6.OverlayModule, LibPackerModule, ɵngcc8.NzIconModule, ɵngcc7.NzOverlayModule, ɵngcc7.NzNoAnimationModule], exports: [NzDatePickerComponent,
        NzRangePickerComponent,
        NzMonthPickerComponent,
        NzYearPickerComponent,
        NzWeekPickerComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDatePickerModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, overlay.OverlayModule, LibPackerModule, icon.NzIconModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule],
                exports: [
                    NzDatePickerComponent,
                    NzRangePickerComponent,
                    NzMonthPickerComponent,
                    NzYearPickerComponent,
                    NzWeekPickerComponent
                ],
                declarations: [
                    HeaderPickerComponent,
                    DateRangePickerComponent,
                    NzPickerComponent,
                    NzDatePickerComponent,
                    NzMonthPickerComponent,
                    NzYearPickerComponent,
                    NzWeekPickerComponent,
                    NzRangePickerComponent
                ]
            }]
    }], function () { return []; }, null); })();
        return NzDatePickerModule;
    }());

    exports.NzDatePickerComponent = NzDatePickerComponent;
    exports.NzDatePickerModule = NzDatePickerModule;
    exports.NzMonthPickerComponent = NzMonthPickerComponent;
    exports.NzRangePickerComponent = NzRangePickerComponent;
    exports.NzWeekPickerComponent = NzWeekPickerComponent;
    exports.NzYearPickerComponent = NzYearPickerComponent;
    exports.ɵa = LibPackerModule;
    exports.ɵb = CalendarHeaderComponent;
    exports.ɵc = CalendarInputComponent;
    exports.ɵd = CalendarFooterComponent;
    exports.ɵe = OkButtonComponent;
    exports.ɵf = TimePickerButtonComponent;
    exports.ɵg = TodayButtonComponent;
    exports.ɵh = YearPanelComponent;
    exports.ɵi = MonthPanelComponent;
    exports.ɵj = DecadePanelComponent;
    exports.ɵk = InnerPopupComponent;
    exports.ɵl = DateRangePopupComponent;
    exports.ɵm = DateRangePickerComponent;
    exports.ɵn = AbstractPickerComponent;
    exports.ɵo = NzPickerComponent;
    exports.ɵp = HeaderPickerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


//# sourceMappingURL=ng-zorro-antd-date-picker.umd.js.map