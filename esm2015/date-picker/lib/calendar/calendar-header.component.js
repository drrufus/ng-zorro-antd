/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { CandyDate } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "../decade/decade-panel.component";
import * as i4 from "../year/year-panel.component";
import * as i5 from "../month/month-panel.component";
function CalendarHeaderComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2231 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function CalendarHeaderComponent_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2231); const ctx_r2230 = i0.ɵɵnextContext(); return ctx_r2230.previousYear(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2222 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2222.prefixCls, "-prev-year-btn");
    i0.ɵɵpropertyInterpolate("title", ctx_r2222.locale.previousYear);
} }
function CalendarHeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r2233 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function CalendarHeaderComponent_a_3_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2233); const ctx_r2232 = i0.ɵɵnextContext(); return ctx_r2232.previousMonth(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2223 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2223.prefixCls, "-prev-month-btn");
    i0.ɵɵpropertyInterpolate("title", ctx_r2223.locale.previousMonth);
} }
function CalendarHeaderComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 5);
    i0.ɵɵlistener("click", function CalendarHeaderComponent_ng_container_5_Template_a_click_1_listener($event) { const selector_r2234 = ctx.$implicit; return selector_r2234.onClick ? selector_r2234.onClick() : null; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selector_r2234 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(selector_r2234.className);
    i0.ɵɵpropertyInterpolate("title", selector_r2234.title || null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", selector_r2234.label, " ");
} }
function CalendarHeaderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r2237 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function CalendarHeaderComponent_a_6_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2237); const ctx_r2236 = i0.ɵɵnextContext(); return ctx_r2236.nextMonth(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2225 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2225.prefixCls, "-next-month-btn");
    i0.ɵɵpropertyInterpolate("title", ctx_r2225.locale.nextMonth);
} }
function CalendarHeaderComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r2239 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function CalendarHeaderComponent_a_7_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2239); const ctx_r2238 = i0.ɵɵnextContext(); return ctx_r2238.nextYear(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2226 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2226.prefixCls, "-next-year-btn");
    i0.ɵɵpropertyInterpolate("title", ctx_r2226.locale.nextYear);
} }
function CalendarHeaderComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r2241 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "decade-panel", 6);
    i0.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_9_Template_decade_panel_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r2241); const ctx_r2240 = i0.ɵɵnextContext(); return ctx_r2240.onChooseDecade($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2227 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("locale", ctx_r2227.locale)("value", ctx_r2227.value);
} }
function CalendarHeaderComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r2243 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "year-panel", 7);
    i0.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_10_Template_year_panel_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r2243); const ctx_r2242 = i0.ɵɵnextContext(); return ctx_r2242.onChooseYear($event); })("decadePanelShow", function CalendarHeaderComponent_ng_container_10_Template_year_panel_decadePanelShow_1_listener($event) { i0.ɵɵrestoreView(_r2243); const ctx_r2244 = i0.ɵɵnextContext(); return ctx_r2244.changePanel("decade"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2228 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("locale", ctx_r2228.locale)("value", ctx_r2228.value)("disabledDate", ctx_r2228.disabledYear);
} }
function CalendarHeaderComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r2246 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "month-panel", 8);
    i0.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_11_Template_month_panel_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r2246); const ctx_r2245 = i0.ɵɵnextContext(); return ctx_r2245.onChooseMonth($event); })("yearPanelShow", function CalendarHeaderComponent_ng_container_11_Template_month_panel_yearPanelShow_1_listener($event) { i0.ɵɵrestoreView(_r2246); const ctx_r2247 = i0.ɵɵnextContext(); return ctx_r2247.changePanel("year"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2229 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("locale", ctx_r2229.locale)("value", ctx_r2229.value)("disabledDate", ctx_r2229.disabledMonth);
} }
export class CalendarHeaderComponent {
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.enablePrev = true;
        this.enableNext = true;
        this.showTimePicker = false;
        this.valueChange = new EventEmitter();
        this.panelModeChange = new EventEmitter();
        this.chooseDecade = new EventEmitter();
        this.chooseYear = new EventEmitter();
        this.chooseMonth = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.yearToMonth = false; // Indicate whether should change to month panel when current is year panel (if referer=month, it should show month panel when choosed a year)
    }
    ngOnInit() {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
        this.render();
    }
    ngOnChanges(changes) {
        if (changes.value || changes.showTimePicker || changes.panelMode) {
            this.render();
        }
    }
    previousYear() {
        this.gotoYear(-1);
    }
    nextYear() {
        this.gotoYear(1);
    }
    previousMonth() {
        this.gotoMonth(-1);
    }
    nextMonth() {
        this.gotoMonth(1);
    }
    changePanel(mode, value) {
        this.panelModeChange.emit(mode);
        if (value) {
            this.changeValueFromInside(value);
        }
    }
    onChooseDecade(value) {
        this.changePanel('year', value);
        this.chooseDecade.emit(value);
    }
    onChooseYear(value) {
        this.changePanel(this.yearToMonth ? 'month' : 'date', value);
        this.yearToMonth = false; // Clear
        this.chooseYear.emit(value);
    }
    onChooseMonth(value) {
        this.changePanel('date', value);
        this.yearToMonth = false; // Clear
        this.chooseMonth.emit(value);
    }
    changeToMonthPanel() {
        this.changePanel('month');
        this.yearToMonth = true;
    }
    render() {
        if (this.value) {
            this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
        }
    }
    gotoMonth(amount) {
        this.changeValueFromInside(this.value.addMonths(amount));
    }
    gotoYear(amount) {
        this.changeValueFromInside(this.value.addYears(amount));
    }
    changeValueFromInside(value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    }
    formatDateTime(localeFormat) {
        return this.dateHelper.format(this.value.nativeDate, localeFormat);
    }
    createYearMonthDaySelectors() {
        let year;
        let month;
        let day;
        // NOTE: Compat for DatePipe formatting rules
        let yearFormat = this.locale.yearFormat;
        if (this.dateHelper.relyOnDatePipe) {
            yearFormat = this.dateHelper.transCompatFormat(yearFormat);
        }
        year = {
            className: `${this.prefixCls}-year-select`,
            title: this.locale.yearSelect,
            onClick: () => (this.showTimePicker ? null : this.changePanel('year')),
            label: this.formatDateTime(yearFormat)
        };
        month = {
            className: `${this.prefixCls}-month-select`,
            title: this.locale.monthSelect,
            onClick: () => (this.showTimePicker ? null : this.changeToMonthPanel()),
            label: this.formatDateTime(this.locale.monthFormat || 'MMM')
        };
        // NOTE: Compat for DatePipe formatting rules
        let dayFormat = this.locale.dayFormat;
        if (this.dateHelper.relyOnDatePipe) {
            dayFormat = this.dateHelper.transCompatFormat(dayFormat);
        }
        if (this.showTimePicker) {
            day = {
                className: `${this.prefixCls}-day-select`,
                label: this.formatDateTime(dayFormat)
            };
        }
        let result;
        if (this.locale.monthBeforeYear) {
            result = [month, day, year];
        }
        else {
            result = [year, month, day];
        }
        return result.filter(selector => !!selector);
    }
}
/** @nocollapse */ CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) { return new (t || CalendarHeaderComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService)); };
/** @nocollapse */ CalendarHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CalendarHeaderComponent, selectors: [["calendar-header"]], inputs: { locale: "locale", enablePrev: "enablePrev", enableNext: "enableNext", disabledMonth: "disabledMonth", disabledYear: "disabledYear", showTimePicker: "showTimePicker", value: "value", panelMode: "panelMode" }, outputs: { valueChange: "valueChange", panelModeChange: "panelModeChange", chooseDecade: "chooseDecade", chooseYear: "chooseYear", chooseMonth: "chooseMonth" }, exportAs: ["calendarHeader"], features: [i0.ɵɵNgOnChangesFeature()], decls: 12, vars: 16, consts: [[2, "position", "relative"], ["role", "button", 3, "class", "title", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["role", "button", 3, "title", "click"], [3, "locale", "value", "valueChange"], [3, "locale", "value", "disabledDate", "valueChange", "decadePanelShow"], [3, "locale", "value", "disabledDate", "valueChange", "yearPanelShow"]], template: function CalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵtemplate(2, CalendarHeaderComponent_a_2_Template, 1, 4, "a", 1);
        i0.ɵɵtemplate(3, CalendarHeaderComponent_a_3_Template, 1, 4, "a", 1);
        i0.ɵɵelementStart(4, "span");
        i0.ɵɵtemplate(5, CalendarHeaderComponent_ng_container_5_Template, 3, 5, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, CalendarHeaderComponent_a_6_Template, 1, 4, "a", 1);
        i0.ɵɵtemplate(7, CalendarHeaderComponent_a_7_Template, 1, 4, "a", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerStart(8, 3);
        i0.ɵɵtemplate(9, CalendarHeaderComponent_ng_container_9_Template, 2, 2, "ng-container", 4);
        i0.ɵɵtemplate(10, CalendarHeaderComponent_ng_container_10_Template, 2, 3, "ng-container", 4);
        i0.ɵɵtemplate(11, CalendarHeaderComponent_ng_container_11_Template, 2, 3, "ng-container", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.enablePrev && !ctx.showTimePicker);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.enablePrev && !ctx.showTimePicker);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-", ctx.locale.monthBeforeYear ? "my-select" : "ym-select", "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.yearMonthDaySelectors);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.enableNext && !ctx.showTimePicker);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.enableNext && !ctx.showTimePicker);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx.panelMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "decade");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "year");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "month");
    } }, directives: [i2.NgIf, i2.NgForOf, i2.NgSwitch, i2.NgSwitchCase, i3.DecadePanelComponent, i4.YearPanelComponent, i5.MonthPanelComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalendarHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-header',
                exportAs: 'calendarHeader',
                templateUrl: 'calendar-header.component.html'
            }]
    }], function () { return [{ type: i1.DateHelperService }]; }, { locale: [{
            type: Input
        }], enablePrev: [{
            type: Input
        }], enableNext: [{
            type: Input
        }], disabledMonth: [{
            type: Input
        }], disabledYear: [{
            type: Input
        }], showTimePicker: [{
            type: Input
        }], value: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], panelMode: [{
            type: Input
        }], panelModeChange: [{
            type: Output
        }], chooseDecade: [{
            type: Output
        }], chooseYear: [{
            type: Output
        }], chooseMonth: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC50cyIsImxpYi9jYWxlbmRhci9jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQTJCLE1BQU0sb0JBQW9CLENBQUM7QUFFdEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7SUNwQjNDLDRCQU1LO0lBRkgscU1BQXdCO0lBRXpCLGlCQUFJOzs7SUFKSCxvRUFBcUM7SUFHckMsZ0VBQWlDOzs7O0lBRW5DLDRCQU1LO0lBRkgsc01BQXlCO0lBRTFCLGlCQUFJOzs7SUFKSCxxRUFBc0M7SUFHdEMsaUVBQWtDOzs7SUFJbEMsNkJBQ0U7SUFBQSw0QkFNRTtJQUhBLG1MQUE0Qix3QkFBbUIsR0FBRSxJQUFJLElBQUM7SUFHdEQsWUFDRjtJQUFBLGlCQUFJO0lBQ04sMEJBQWU7OztJQVBYLGVBQWdDO0lBQWhDLHVDQUFnQztJQUdoQywrREFBb0M7SUFFcEMsZUFDRjtJQURFLHFEQUNGOzs7O0lBSUosNEJBTUs7SUFGSCxrTUFBcUI7SUFFdEIsaUJBQUk7OztJQUpILHFFQUFzQztJQUd0Qyw2REFBOEI7Ozs7SUFFaEMsNEJBTUs7SUFGSCxpTUFBb0I7SUFFckIsaUJBQUk7OztJQUpILG9FQUFxQztJQUdyQyw0REFBNkI7Ozs7SUFLL0IsNkJBQ0U7SUFBQSx1Q0FJZ0I7SUFEZCwrT0FBc0M7SUFDdkMsaUJBQWU7SUFD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QXNCO1FBQ3BCLGVBQXdCO1FBQXhCLHVDQUF3QjtRQU94QixlQUFzQjtRQUF0QixxQ0FBc0I7UUFTdEIsZUFBdUI7UUFBdkIsc0NBQXVCOztrREQ5QjVCLHVCQUF1QjtjQVJuQyxTQUFTO2VBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSxnQ0FBZ0M7YUFDOUM7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUVOLEtBQUs7O2tCQUNMLE1BQU07O2tCQUVOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRlSGVscGVyQnlEYXRlUGlwZSwgRGF0ZUhlbHBlclNlcnZpY2UsIE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFBhbmVsTW9kZSB9IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItaGVhZGVyJyxcclxuICBleHBvcnRBczogJ2NhbGVuZGFySGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NhbGVuZGFyLWhlYWRlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFySGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgZW5hYmxlUHJldjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgZW5hYmxlTmV4dDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgZGlzYWJsZWRNb250aDogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGlzYWJsZWRZZWFyOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93VGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBASW5wdXQoKSBwYW5lbE1vZGU6IFBhbmVsTW9kZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGU+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaG9vc2VEZWNhZGUgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hvb3NlWWVhciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaG9vc2VNb250aCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG4gIHllYXJNb250aERheVNlbGVjdG9yczogWWVhck1vbnRoRGF5U2VsZWN0b3JbXTtcclxuXHJcbiAgcHJpdmF0ZSB5ZWFyVG9Nb250aDogYm9vbGVhbiA9IGZhbHNlOyAvLyBJbmRpY2F0ZSB3aGV0aGVyIHNob3VsZCBjaGFuZ2UgdG8gbW9udGggcGFuZWwgd2hlbiBjdXJyZW50IGlzIHllYXIgcGFuZWwgKGlmIHJlZmVyZXI9bW9udGgsIGl0IHNob3VsZCBzaG93IG1vbnRoIHBhbmVsIHdoZW4gY2hvb3NlZCBhIHllYXIpXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBuZXcgQ2FuZHlEYXRlKCk7IC8vIFNob3cgdG9kYXkgYnkgZGVmYXVsdFxyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnZhbHVlIHx8IGNoYW5nZXMuc2hvd1RpbWVQaWNrZXIgfHwgY2hhbmdlcy5wYW5lbE1vZGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZpb3VzWWVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b1llYXIoLTEpO1xyXG4gIH1cclxuXHJcbiAgbmV4dFllYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9ZZWFyKDEpO1xyXG4gIH1cclxuXHJcbiAgcHJldmlvdXNNb250aCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b01vbnRoKC0xKTtcclxuICB9XHJcblxyXG4gIG5leHRNb250aCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b01vbnRoKDEpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFuZWwobW9kZTogUGFuZWxNb2RlLCB2YWx1ZT86IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdChtb2RlKTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNob29zZURlY2FkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVBhbmVsKCd5ZWFyJywgdmFsdWUpO1xyXG4gICAgdGhpcy5jaG9vc2VEZWNhZGUuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkNob29zZVllYXIodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VQYW5lbCh0aGlzLnllYXJUb01vbnRoID8gJ21vbnRoJyA6ICdkYXRlJywgdmFsdWUpO1xyXG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IGZhbHNlOyAvLyBDbGVhclxyXG4gICAgdGhpcy5jaG9vc2VZZWFyLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25DaG9vc2VNb250aCh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVBhbmVsKCdkYXRlJywgdmFsdWUpO1xyXG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IGZhbHNlOyAvLyBDbGVhclxyXG4gICAgdGhpcy5jaG9vc2VNb250aC5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVRvTW9udGhQYW5lbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlUGFuZWwoJ21vbnRoJyk7XHJcbiAgICB0aGlzLnllYXJUb01vbnRoID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy55ZWFyTW9udGhEYXlTZWxlY3RvcnMgPSB0aGlzLmNyZWF0ZVllYXJNb250aERheVNlbGVjdG9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb3RvTW9udGgoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHRoaXMudmFsdWUuYWRkTW9udGhzKGFtb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb3RvWWVhcihhbW91bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUodGhpcy52YWx1ZS5hZGRZZWFycyhhbW91bnQpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0RGF0ZVRpbWUobG9jYWxlRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodGhpcy52YWx1ZS5uYXRpdmVEYXRlLCBsb2NhbGVGb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVZZWFyTW9udGhEYXlTZWxlY3RvcnMoKTogWWVhck1vbnRoRGF5U2VsZWN0b3JbXSB7XHJcbiAgICBsZXQgeWVhcjogWWVhck1vbnRoRGF5U2VsZWN0b3I7XHJcbiAgICBsZXQgbW9udGg6IFllYXJNb250aERheVNlbGVjdG9yO1xyXG4gICAgbGV0IGRheTogWWVhck1vbnRoRGF5U2VsZWN0b3I7XHJcblxyXG4gICAgLy8gTk9URTogQ29tcGF0IGZvciBEYXRlUGlwZSBmb3JtYXR0aW5nIHJ1bGVzXHJcbiAgICBsZXQgeWVhckZvcm1hdDogc3RyaW5nID0gdGhpcy5sb2NhbGUueWVhckZvcm1hdDtcclxuICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcclxuICAgICAgeWVhckZvcm1hdCA9ICh0aGlzLmRhdGVIZWxwZXIgYXMgRGF0ZUhlbHBlckJ5RGF0ZVBpcGUpLnRyYW5zQ29tcGF0Rm9ybWF0KHllYXJGb3JtYXQpO1xyXG4gICAgfVxyXG4gICAgeWVhciA9IHtcclxuICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30teWVhci1zZWxlY3RgLFxyXG4gICAgICB0aXRsZTogdGhpcy5sb2NhbGUueWVhclNlbGVjdCxcclxuICAgICAgb25DbGljazogKCkgPT4gKHRoaXMuc2hvd1RpbWVQaWNrZXIgPyBudWxsIDogdGhpcy5jaGFuZ2VQYW5lbCgneWVhcicpKSxcclxuICAgICAgbGFiZWw6IHRoaXMuZm9ybWF0RGF0ZVRpbWUoeWVhckZvcm1hdClcclxuICAgIH07XHJcblxyXG4gICAgbW9udGggPSB7XHJcbiAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXNlbGVjdGAsXHJcbiAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS5tb250aFNlbGVjdCxcclxuICAgICAgb25DbGljazogKCkgPT4gKHRoaXMuc2hvd1RpbWVQaWNrZXIgPyBudWxsIDogdGhpcy5jaGFuZ2VUb01vbnRoUGFuZWwoKSksXHJcbiAgICAgIGxhYmVsOiB0aGlzLmZvcm1hdERhdGVUaW1lKHRoaXMubG9jYWxlLm1vbnRoRm9ybWF0IHx8ICdNTU0nKVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBOT1RFOiBDb21wYXQgZm9yIERhdGVQaXBlIGZvcm1hdHRpbmcgcnVsZXNcclxuICAgIGxldCBkYXlGb3JtYXQ6IHN0cmluZyA9IHRoaXMubG9jYWxlLmRheUZvcm1hdDtcclxuICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcclxuICAgICAgZGF5Rm9ybWF0ID0gKHRoaXMuZGF0ZUhlbHBlciBhcyBEYXRlSGVscGVyQnlEYXRlUGlwZSkudHJhbnNDb21wYXRGb3JtYXQoZGF5Rm9ybWF0KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNob3dUaW1lUGlja2VyKSB7XHJcbiAgICAgIGRheSA9IHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1kYXktc2VsZWN0YCxcclxuICAgICAgICBsYWJlbDogdGhpcy5mb3JtYXREYXRlVGltZShkYXlGb3JtYXQpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlc3VsdDogWWVhck1vbnRoRGF5U2VsZWN0b3JbXTtcclxuXHJcbiAgICBpZiAodGhpcy5sb2NhbGUubW9udGhCZWZvcmVZZWFyKSB7XHJcbiAgICAgIHJlc3VsdCA9IFttb250aCwgZGF5ISwgeWVhcl07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSBbeWVhciwgbW9udGgsIGRheSFdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQuZmlsdGVyKHNlbGVjdG9yID0+ICEhc2VsZWN0b3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBZZWFyTW9udGhEYXlTZWxlY3RvciB7XHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBvbkNsaWNrPygpOiB2b2lkO1xyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0taGVhZGVyXCI+XHJcbiAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cclxuICAgIDxhXHJcbiAgICAgICpuZ0lmPVwiZW5hYmxlUHJldiAmJiAhc2hvd1RpbWVQaWNrZXJcIlxyXG4gICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wcmV2LXllYXItYnRuXCJcclxuICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgIChjbGljayk9XCJwcmV2aW91c1llYXIoKVwiXHJcbiAgICAgIHRpdGxlPVwie3sgbG9jYWxlLnByZXZpb3VzWWVhciB9fVwiXHJcbiAgICA+PC9hPlxyXG4gICAgPGFcclxuICAgICAgKm5nSWY9XCJlbmFibGVQcmV2ICYmICFzaG93VGltZVBpY2tlclwiXHJcbiAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXByZXYtbW9udGgtYnRuXCJcclxuICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgIChjbGljayk9XCJwcmV2aW91c01vbnRoKClcIlxyXG4gICAgICB0aXRsZT1cInt7IGxvY2FsZS5wcmV2aW91c01vbnRoIH19XCJcclxuICAgID48L2E+XHJcblxyXG4gICAgPHNwYW4gY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0te3sgbG9jYWxlLm1vbnRoQmVmb3JlWWVhciA/ICdteS1zZWxlY3QnIDogJ3ltLXNlbGVjdCcgfX1cIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VsZWN0b3Igb2YgeWVhck1vbnRoRGF5U2VsZWN0b3JzXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzPVwie3sgc2VsZWN0b3IuY2xhc3NOYW1lIH19XCJcclxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgKGNsaWNrKT1cInNlbGVjdG9yLm9uQ2xpY2sgPyBzZWxlY3Rvci5vbkNsaWNrKCkgOiBudWxsXCJcclxuICAgICAgICAgIHRpdGxlPVwie3sgc2VsZWN0b3IudGl0bGUgfHwgbnVsbCB9fVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3sgc2VsZWN0b3IubGFiZWwgfX1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9zcGFuPlxyXG5cclxuICAgIDxhXHJcbiAgICAgICpuZ0lmPVwiZW5hYmxlTmV4dCAmJiAhc2hvd1RpbWVQaWNrZXJcIlxyXG4gICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1uZXh0LW1vbnRoLWJ0blwiXHJcbiAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAoY2xpY2spPVwibmV4dE1vbnRoKClcIlxyXG4gICAgICB0aXRsZT1cInt7IGxvY2FsZS5uZXh0TW9udGggfX1cIlxyXG4gICAgPjwvYT5cclxuICAgIDxhXHJcbiAgICAgICpuZ0lmPVwiZW5hYmxlTmV4dCAmJiAhc2hvd1RpbWVQaWNrZXJcIlxyXG4gICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1uZXh0LXllYXItYnRuXCJcclxuICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgIChjbGljayk9XCJuZXh0WWVhcigpXCJcclxuICAgICAgdGl0bGU9XCJ7eyBsb2NhbGUubmV4dFllYXIgfX1cIlxyXG4gICAgPjwvYT5cclxuICA8L2Rpdj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwicGFuZWxNb2RlXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZGVjYWRlJ1wiPlxyXG4gICAgICA8ZGVjYWRlLXBhbmVsXHJcbiAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uQ2hvb3NlRGVjYWRlKCRldmVudClcIlxyXG4gICAgICA+PC9kZWNhZGUtcGFuZWw+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIid5ZWFyJ1wiPlxyXG4gICAgICA8eWVhci1wYW5lbFxyXG4gICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcclxuICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgIFtkaXNhYmxlZERhdGVdPVwiZGlzYWJsZWRZZWFyXCJcclxuICAgICAgICAodmFsdWVDaGFuZ2UpPVwib25DaG9vc2VZZWFyKCRldmVudClcIlxyXG4gICAgICAgIChkZWNhZGVQYW5lbFNob3cpPVwiY2hhbmdlUGFuZWwoJ2RlY2FkZScpXCJcclxuICAgICAgPjwveWVhci1wYW5lbD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ21vbnRoJ1wiPlxyXG4gICAgICA8bW9udGgtcGFuZWxcclxuICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICBbZGlzYWJsZWREYXRlXT1cImRpc2FibGVkTW9udGhcIlxyXG4gICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvbkNob29zZU1vbnRoKCRldmVudClcIlxyXG4gICAgICAgICh5ZWFyUGFuZWxTaG93KT1cImNoYW5nZVBhbmVsKCd5ZWFyJylcIlxyXG4gICAgICA+PC9tb250aC1wYW5lbD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuIl19