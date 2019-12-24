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
    var _r2390 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function CalendarHeaderComponent_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2390); var ctx_r2389 = i0.ɵɵnextContext(); return ctx_r2389.previousYear(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2381 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2381.prefixCls, "-prev-year-btn");
    i0.ɵɵpropertyInterpolate("title", ctx_r2381.locale.previousYear);
} }
function CalendarHeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r2392 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function CalendarHeaderComponent_a_3_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2392); var ctx_r2391 = i0.ɵɵnextContext(); return ctx_r2391.previousMonth(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2382 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2382.prefixCls, "-prev-month-btn");
    i0.ɵɵpropertyInterpolate("title", ctx_r2382.locale.previousMonth);
} }
function CalendarHeaderComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 5);
    i0.ɵɵlistener("click", function CalendarHeaderComponent_ng_container_5_Template_a_click_1_listener($event) { var selector_r2393 = ctx.$implicit; return selector_r2393.onClick ? selector_r2393.onClick() : null; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var selector_r2393 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(selector_r2393.className);
    i0.ɵɵpropertyInterpolate("title", selector_r2393.title || null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", selector_r2393.label, " ");
} }
function CalendarHeaderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    var _r2396 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function CalendarHeaderComponent_a_6_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2396); var ctx_r2395 = i0.ɵɵnextContext(); return ctx_r2395.nextMonth(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2384 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2384.prefixCls, "-next-month-btn");
    i0.ɵɵpropertyInterpolate("title", ctx_r2384.locale.nextMonth);
} }
function CalendarHeaderComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    var _r2398 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function CalendarHeaderComponent_a_7_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2398); var ctx_r2397 = i0.ɵɵnextContext(); return ctx_r2397.nextYear(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2385 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2385.prefixCls, "-next-year-btn");
    i0.ɵɵpropertyInterpolate("title", ctx_r2385.locale.nextYear);
} }
function CalendarHeaderComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    var _r2400 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "decade-panel", 6);
    i0.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_9_Template_decade_panel_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r2400); var ctx_r2399 = i0.ɵɵnextContext(); return ctx_r2399.onChooseDecade($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2386 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("locale", ctx_r2386.locale)("value", ctx_r2386.value);
} }
function CalendarHeaderComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    var _r2402 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "year-panel", 7);
    i0.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_10_Template_year_panel_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r2402); var ctx_r2401 = i0.ɵɵnextContext(); return ctx_r2401.onChooseYear($event); })("decadePanelShow", function CalendarHeaderComponent_ng_container_10_Template_year_panel_decadePanelShow_1_listener($event) { i0.ɵɵrestoreView(_r2402); var ctx_r2403 = i0.ɵɵnextContext(); return ctx_r2403.changePanel("decade"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2387 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("locale", ctx_r2387.locale)("value", ctx_r2387.value)("disabledDate", ctx_r2387.disabledYear);
} }
function CalendarHeaderComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    var _r2405 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "month-panel", 8);
    i0.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_11_Template_month_panel_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r2405); var ctx_r2404 = i0.ɵɵnextContext(); return ctx_r2404.onChooseMonth($event); })("yearPanelShow", function CalendarHeaderComponent_ng_container_11_Template_month_panel_yearPanelShow_1_listener($event) { i0.ɵɵrestoreView(_r2405); var ctx_r2406 = i0.ɵɵnextContext(); return ctx_r2406.changePanel("year"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2388 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("locale", ctx_r2388.locale)("value", ctx_r2388.value)("disabledDate", ctx_r2388.disabledMonth);
} }
var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent(dateHelper) {
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
    CalendarHeaderComponent.prototype.ngOnInit = function () {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
        this.render();
    };
    CalendarHeaderComponent.prototype.ngOnChanges = function (changes) {
        if (changes.value || changes.showTimePicker || changes.panelMode) {
            this.render();
        }
    };
    CalendarHeaderComponent.prototype.previousYear = function () {
        this.gotoYear(-1);
    };
    CalendarHeaderComponent.prototype.nextYear = function () {
        this.gotoYear(1);
    };
    CalendarHeaderComponent.prototype.previousMonth = function () {
        this.gotoMonth(-1);
    };
    CalendarHeaderComponent.prototype.nextMonth = function () {
        this.gotoMonth(1);
    };
    CalendarHeaderComponent.prototype.changePanel = function (mode, value) {
        this.panelModeChange.emit(mode);
        if (value) {
            this.changeValueFromInside(value);
        }
    };
    CalendarHeaderComponent.prototype.onChooseDecade = function (value) {
        this.changePanel('year', value);
        this.chooseDecade.emit(value);
    };
    CalendarHeaderComponent.prototype.onChooseYear = function (value) {
        this.changePanel(this.yearToMonth ? 'month' : 'date', value);
        this.yearToMonth = false; // Clear
        this.chooseYear.emit(value);
    };
    CalendarHeaderComponent.prototype.onChooseMonth = function (value) {
        this.changePanel('date', value);
        this.yearToMonth = false; // Clear
        this.chooseMonth.emit(value);
    };
    CalendarHeaderComponent.prototype.changeToMonthPanel = function () {
        this.changePanel('month');
        this.yearToMonth = true;
    };
    CalendarHeaderComponent.prototype.render = function () {
        if (this.value) {
            this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
        }
    };
    CalendarHeaderComponent.prototype.gotoMonth = function (amount) {
        this.changeValueFromInside(this.value.addMonths(amount));
    };
    CalendarHeaderComponent.prototype.gotoYear = function (amount) {
        this.changeValueFromInside(this.value.addYears(amount));
    };
    CalendarHeaderComponent.prototype.changeValueFromInside = function (value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    };
    CalendarHeaderComponent.prototype.formatDateTime = function (localeFormat) {
        return this.dateHelper.format(this.value.nativeDate, localeFormat);
    };
    CalendarHeaderComponent.prototype.createYearMonthDaySelectors = function () {
        var _this = this;
        var year;
        var month;
        var day;
        // NOTE: Compat for DatePipe formatting rules
        var yearFormat = this.locale.yearFormat;
        if (this.dateHelper.relyOnDatePipe) {
            yearFormat = this.dateHelper.transCompatFormat(yearFormat);
        }
        year = {
            className: this.prefixCls + "-year-select",
            title: this.locale.yearSelect,
            onClick: function () { return (_this.showTimePicker ? null : _this.changePanel('year')); },
            label: this.formatDateTime(yearFormat)
        };
        month = {
            className: this.prefixCls + "-month-select",
            title: this.locale.monthSelect,
            onClick: function () { return (_this.showTimePicker ? null : _this.changeToMonthPanel()); },
            label: this.formatDateTime(this.locale.monthFormat || 'MMM')
        };
        // NOTE: Compat for DatePipe formatting rules
        var dayFormat = this.locale.dayFormat;
        if (this.dateHelper.relyOnDatePipe) {
            dayFormat = this.dateHelper.transCompatFormat(dayFormat);
        }
        if (this.showTimePicker) {
            day = {
                className: this.prefixCls + "-day-select",
                label: this.formatDateTime(dayFormat)
            };
        }
        var result;
        if (this.locale.monthBeforeYear) {
            result = [month, day, year];
        }
        else {
            result = [year, month, day];
        }
        return result.filter(function (selector) { return !!selector; });
    };
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
    return CalendarHeaderComponent;
}());
export { CalendarHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC50cyIsImxpYi9jYWxlbmRhci9jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQTJCLE1BQU0sb0JBQW9CLENBQUM7QUFFdEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7SUNwQjNDLDRCQU1LO0lBRkgsbU1BQXdCO0lBRXpCLGlCQUFJOzs7SUFKSCxvRUFBcUM7SUFHckMsZ0VBQWlDOzs7O0lBRW5DLDRCQU1LO0lBRkgsb01BQXlCO0lBRTFCLGlCQUFJOzs7SUFKSCxxRUFBc0M7SUFHdEMsaUVBQWtDOzs7SUFJbEMsNkJBQ0U7SUFBQSw0QkFNRTtJQUhBLGlMQUE0Qix3QkFBbUIsR0FBRSxJQUFJLElBQUM7SUFHdEQsWUFDRjtJQUFBLGlCQUFJO0lBQ04sMEJBQWU7OztJQVBYLGVBQWdDO0lBQWhDLHVDQUFnQztJQUdoQywrREFBb0M7SUFFcEMsZUFDRjtJQURFLHFEQUNGOzs7O0lBSUosNEJBTUs7SUFGSCxnTUFBcUI7SUFFdEIsaUJBQUk7OztJQUpILHFFQUFzQztJQUd0Qyw2REFBOEI7Ozs7SUFFaEMsNEJBTUs7SUFGSCwrTEFBb0I7SUFFckIsaUJBQUk7OztJQUpILG9FQUFxQztJQUdyQyw0REFBNkI7Ozs7SUFLL0IsNkJBQ0U7SUFBQSx1Q0FJZ0I7SUFEZCw2T0FBc0M7SUFDdkMsaUJBQWU7SUFD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QUFnRjtZQUFoRiw2R0FBZ0Y7WUFDdEUsZUFBOEM7WUFBOUMsbURBQThDO1lBYTVELGVBQXFDO1lBQXJDLDREQUFxQztZQU9yQyxlQUFxQztZQUFyQyw0REFBcUM7WUFRM0IsZUFBc0I7WUFBdEIsd0NBQXNCO1lBQ3BCLGVBQXdCO1lBQXhCLHVDQUF3QjtZQU94QixlQUFzQjtZQUF0QixxQ0FBc0I7WUFTdEIsZUFBdUI7WUFBdkIsc0NBQXVCOztrQ0QvRHpDO0NBNExDLEFBbktELElBbUtDO1NBM0pZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBUm5DLFNBQVM7ZUFBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLGdDQUFnQzthQUM5Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBRU4sS0FBSzs7a0JBQ0wsTUFBTTs7a0JBRU4sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERhdGVIZWxwZXJCeURhdGVQaXBlLCBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgUGFuZWxNb2RlIH0gZnJvbSAnLi4vLi4vc3RhbmRhcmQtdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1oZWFkZXInLFxyXG4gIGV4cG9ydEFzOiAnY2FsZW5kYXJIZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBlbmFibGVQcmV2OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVOZXh0OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZE1vbnRoOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZFllYXI6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpIHBhbmVsTW9kZTogUGFuZWxNb2RlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBwYW5lbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNob29zZURlY2FkZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaG9vc2VZZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNob29zZU1vbnRoID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgeWVhck1vbnRoRGF5U2VsZWN0b3JzOiBZZWFyTW9udGhEYXlTZWxlY3RvcltdO1xyXG5cclxuICBwcml2YXRlIHllYXJUb01vbnRoOiBib29sZWFuID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgc2hvdWxkIGNoYW5nZSB0byBtb250aCBwYW5lbCB3aGVuIGN1cnJlbnQgaXMgeWVhciBwYW5lbCAoaWYgcmVmZXJlcj1tb250aCwgaXQgc2hvdWxkIHNob3cgbW9udGggcGFuZWwgd2hlbiBjaG9vc2VkIGEgeWVhcilcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG5ldyBDYW5keURhdGUoKTsgLy8gU2hvdyB0b2RheSBieSBkZWZhdWx0XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5zaG93VGltZVBpY2tlciB8fCBjaGFuZ2VzLnBhbmVsTW9kZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldmlvdXNZZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb3RvWWVhcigtMSk7XHJcbiAgfVxyXG5cclxuICBuZXh0WWVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b1llYXIoMSk7XHJcbiAgfVxyXG5cclxuICBwcmV2aW91c01vbnRoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb3RvTW9udGgoLTEpO1xyXG4gIH1cclxuXHJcbiAgbmV4dE1vbnRoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb3RvTW9udGgoMSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYW5lbChtb2RlOiBQYW5lbE1vZGUsIHZhbHVlPzogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KG1vZGUpO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hvb3NlRGVjYWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlUGFuZWwoJ3llYXInLCB2YWx1ZSk7XHJcbiAgICB0aGlzLmNob29zZURlY2FkZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uQ2hvb3NlWWVhcih2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVBhbmVsKHRoaXMueWVhclRvTW9udGggPyAnbW9udGgnIDogJ2RhdGUnLCB2YWx1ZSk7XHJcbiAgICB0aGlzLnllYXJUb01vbnRoID0gZmFsc2U7IC8vIENsZWFyXHJcbiAgICB0aGlzLmNob29zZVllYXIuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkNob29zZU1vbnRoKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlUGFuZWwoJ2RhdGUnLCB2YWx1ZSk7XHJcbiAgICB0aGlzLnllYXJUb01vbnRoID0gZmFsc2U7IC8vIENsZWFyXHJcbiAgICB0aGlzLmNob29zZU1vbnRoLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlVG9Nb250aFBhbmVsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VQYW5lbCgnbW9udGgnKTtcclxuICAgIHRoaXMueWVhclRvTW9udGggPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnllYXJNb250aERheVNlbGVjdG9ycyA9IHRoaXMuY3JlYXRlWWVhck1vbnRoRGF5U2VsZWN0b3JzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdvdG9Nb250aChhbW91bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUodGhpcy52YWx1ZS5hZGRNb250aHMoYW1vdW50KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdvdG9ZZWFyKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZSh0aGlzLnZhbHVlLmFkZFllYXJzKGFtb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VWYWx1ZUZyb21JbnNpZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXREYXRlVGltZShsb2NhbGVGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh0aGlzLnZhbHVlLm5hdGl2ZURhdGUsIGxvY2FsZUZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVllYXJNb250aERheVNlbGVjdG9ycygpOiBZZWFyTW9udGhEYXlTZWxlY3RvcltdIHtcclxuICAgIGxldCB5ZWFyOiBZZWFyTW9udGhEYXlTZWxlY3RvcjtcclxuICAgIGxldCBtb250aDogWWVhck1vbnRoRGF5U2VsZWN0b3I7XHJcbiAgICBsZXQgZGF5OiBZZWFyTW9udGhEYXlTZWxlY3RvcjtcclxuXHJcbiAgICAvLyBOT1RFOiBDb21wYXQgZm9yIERhdGVQaXBlIGZvcm1hdHRpbmcgcnVsZXNcclxuICAgIGxldCB5ZWFyRm9ybWF0OiBzdHJpbmcgPSB0aGlzLmxvY2FsZS55ZWFyRm9ybWF0O1xyXG4gICAgaWYgKHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSkge1xyXG4gICAgICB5ZWFyRm9ybWF0ID0gKHRoaXMuZGF0ZUhlbHBlciBhcyBEYXRlSGVscGVyQnlEYXRlUGlwZSkudHJhbnNDb21wYXRGb3JtYXQoeWVhckZvcm1hdCk7XHJcbiAgICB9XHJcbiAgICB5ZWFyID0ge1xyXG4gICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS15ZWFyLXNlbGVjdGAsXHJcbiAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS55ZWFyU2VsZWN0LFxyXG4gICAgICBvbkNsaWNrOiAoKSA9PiAodGhpcy5zaG93VGltZVBpY2tlciA/IG51bGwgOiB0aGlzLmNoYW5nZVBhbmVsKCd5ZWFyJykpLFxyXG4gICAgICBsYWJlbDogdGhpcy5mb3JtYXREYXRlVGltZSh5ZWFyRm9ybWF0KVxyXG4gICAgfTtcclxuXHJcbiAgICBtb250aCA9IHtcclxuICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30tbW9udGgtc2VsZWN0YCxcclxuICAgICAgdGl0bGU6IHRoaXMubG9jYWxlLm1vbnRoU2VsZWN0LFxyXG4gICAgICBvbkNsaWNrOiAoKSA9PiAodGhpcy5zaG93VGltZVBpY2tlciA/IG51bGwgOiB0aGlzLmNoYW5nZVRvTW9udGhQYW5lbCgpKSxcclxuICAgICAgbGFiZWw6IHRoaXMuZm9ybWF0RGF0ZVRpbWUodGhpcy5sb2NhbGUubW9udGhGb3JtYXQgfHwgJ01NTScpXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIE5PVEU6IENvbXBhdCBmb3IgRGF0ZVBpcGUgZm9ybWF0dGluZyBydWxlc1xyXG4gICAgbGV0IGRheUZvcm1hdDogc3RyaW5nID0gdGhpcy5sb2NhbGUuZGF5Rm9ybWF0O1xyXG4gICAgaWYgKHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSkge1xyXG4gICAgICBkYXlGb3JtYXQgPSAodGhpcy5kYXRlSGVscGVyIGFzIERhdGVIZWxwZXJCeURhdGVQaXBlKS50cmFuc0NvbXBhdEZvcm1hdChkYXlGb3JtYXQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hvd1RpbWVQaWNrZXIpIHtcclxuICAgICAgZGF5ID0ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LWRheS1zZWxlY3RgLFxyXG4gICAgICAgIGxhYmVsOiB0aGlzLmZvcm1hdERhdGVUaW1lKGRheUZvcm1hdClcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzdWx0OiBZZWFyTW9udGhEYXlTZWxlY3RvcltdO1xyXG5cclxuICAgIGlmICh0aGlzLmxvY2FsZS5tb250aEJlZm9yZVllYXIpIHtcclxuICAgICAgcmVzdWx0ID0gW21vbnRoLCBkYXkhLCB5ZWFyXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IFt5ZWFyLCBtb250aCwgZGF5IV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoc2VsZWN0b3IgPT4gISFzZWxlY3Rvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFllYXJNb250aERheVNlbGVjdG9yIHtcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/KCk6IHZvaWQ7XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1oZWFkZXJcIj5cclxuICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxyXG4gICAgPGFcclxuICAgICAgKm5nSWY9XCJlbmFibGVQcmV2ICYmICFzaG93VGltZVBpY2tlclwiXHJcbiAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXByZXYteWVhci1idG5cIlxyXG4gICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgKGNsaWNrKT1cInByZXZpb3VzWWVhcigpXCJcclxuICAgICAgdGl0bGU9XCJ7eyBsb2NhbGUucHJldmlvdXNZZWFyIH19XCJcclxuICAgID48L2E+XHJcbiAgICA8YVxyXG4gICAgICAqbmdJZj1cImVuYWJsZVByZXYgJiYgIXNob3dUaW1lUGlja2VyXCJcclxuICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcHJldi1tb250aC1idG5cIlxyXG4gICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgKGNsaWNrKT1cInByZXZpb3VzTW9udGgoKVwiXHJcbiAgICAgIHRpdGxlPVwie3sgbG9jYWxlLnByZXZpb3VzTW9udGggfX1cIlxyXG4gICAgPjwvYT5cclxuXHJcbiAgICA8c3BhbiBjbGFzcz1cInt7IHByZWZpeENscyB9fS17eyBsb2NhbGUubW9udGhCZWZvcmVZZWFyID8gJ215LXNlbGVjdCcgOiAneW0tc2VsZWN0JyB9fVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWxlY3RvciBvZiB5ZWFyTW9udGhEYXlTZWxlY3RvcnNcIj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3M9XCJ7eyBzZWxlY3Rvci5jbGFzc05hbWUgfX1cIlxyXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAoY2xpY2spPVwic2VsZWN0b3Iub25DbGljayA/IHNlbGVjdG9yLm9uQ2xpY2soKSA6IG51bGxcIlxyXG4gICAgICAgICAgdGl0bGU9XCJ7eyBzZWxlY3Rvci50aXRsZSB8fCBudWxsIH19XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7eyBzZWxlY3Rvci5sYWJlbCB9fVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L3NwYW4+XHJcblxyXG4gICAgPGFcclxuICAgICAgKm5nSWY9XCJlbmFibGVOZXh0ICYmICFzaG93VGltZVBpY2tlclwiXHJcbiAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW5leHQtbW9udGgtYnRuXCJcclxuICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgIChjbGljayk9XCJuZXh0TW9udGgoKVwiXHJcbiAgICAgIHRpdGxlPVwie3sgbG9jYWxlLm5leHRNb250aCB9fVwiXHJcbiAgICA+PC9hPlxyXG4gICAgPGFcclxuICAgICAgKm5nSWY9XCJlbmFibGVOZXh0ICYmICFzaG93VGltZVBpY2tlclwiXHJcbiAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW5leHQteWVhci1idG5cIlxyXG4gICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgKGNsaWNrKT1cIm5leHRZZWFyKClcIlxyXG4gICAgICB0aXRsZT1cInt7IGxvY2FsZS5uZXh0WWVhciB9fVwiXHJcbiAgICA+PC9hPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJwYW5lbE1vZGVcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkZWNhZGUnXCI+XHJcbiAgICAgIDxkZWNhZGUtcGFuZWxcclxuICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICAodmFsdWVDaGFuZ2UpPVwib25DaG9vc2VEZWNhZGUoJGV2ZW50KVwiXHJcbiAgICAgID48L2RlY2FkZS1wYW5lbD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3llYXInXCI+XHJcbiAgICAgIDx5ZWFyLXBhbmVsXHJcbiAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZFllYXJcIlxyXG4gICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvbkNob29zZVllYXIoJGV2ZW50KVwiXHJcbiAgICAgICAgKGRlY2FkZVBhbmVsU2hvdyk9XCJjaGFuZ2VQYW5lbCgnZGVjYWRlJylcIlxyXG4gICAgICA+PC95ZWFyLXBhbmVsPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCI+XHJcbiAgICAgIDxtb250aC1wYW5lbFxyXG4gICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcclxuICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgIFtkaXNhYmxlZERhdGVdPVwiZGlzYWJsZWRNb250aFwiXHJcbiAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uQ2hvb3NlTW9udGgoJGV2ZW50KVwiXHJcbiAgICAgICAgKHllYXJQYW5lbFNob3cpPVwiY2hhbmdlUGFuZWwoJ3llYXInKVwiXHJcbiAgICAgID48L21vbnRoLXBhbmVsPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG4iXX0=