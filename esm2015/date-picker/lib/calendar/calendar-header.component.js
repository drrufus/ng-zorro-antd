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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { CandyDate } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../decade/decade-panel.component';
import * as ɵngcc4 from '../year/year-panel.component';
import * as ɵngcc5 from '../month/month-panel.component';

function CalendarHeaderComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_a_2_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.previousYear(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-prev-year-btn");
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r0.locale.previousYear);
} }
function CalendarHeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_a_3_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.previousMonth(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-prev-month-btn");
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r1.locale.previousMonth);
} }
function CalendarHeaderComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "a", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_ng_container_5_Template_a_click_1_listener() { const selector_r12 = ctx.$implicit; return selector_r12.onClick ? selector_r12.onClick() : null; });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selector_r12 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(selector_r12.className);
    ɵngcc0.ɵɵpropertyInterpolate("title", selector_r12.title || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", selector_r12.label, " ");
} }
function CalendarHeaderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_a_6_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.nextMonth(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-next-month-btn");
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r3.locale.nextMonth);
} }
function CalendarHeaderComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_a_7_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.nextYear(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-next-year-btn");
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r4.locale.nextYear);
} }
function CalendarHeaderComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "decade-panel", 6);
    ɵngcc0.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_9_Template_decade_panel_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onChooseDecade($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("locale", ctx_r5.locale)("value", ctx_r5.value);
} }
function CalendarHeaderComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "year-panel", 7);
    ɵngcc0.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_10_Template_year_panel_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.onChooseYear($event); })("decadePanelShow", function CalendarHeaderComponent_ng_container_10_Template_year_panel_decadePanelShow_1_listener() { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.changePanel("decade"); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("locale", ctx_r6.locale)("value", ctx_r6.value)("disabledDate", ctx_r6.disabledYear);
} }
function CalendarHeaderComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "month-panel", 8);
    ɵngcc0.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_11_Template_month_panel_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r24); const ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.onChooseMonth($event); })("yearPanelShow", function CalendarHeaderComponent_ng_container_11_Template_month_panel_yearPanelShow_1_listener() { ɵngcc0.ɵɵrestoreView(_r24); const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.changePanel("year"); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("locale", ctx_r7.locale)("value", ctx_r7.value)("disabledDate", ctx_r7.disabledMonth);
} }
export class CalendarHeaderComponent {
    // Indicate whether should change to month panel when current is year panel (if referer=month, it should show month panel when choosed a year)
    /**
     * @param {?} dateHelper
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
        this.render();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value || changes.showTimePicker || changes.panelMode) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    previousYear() {
        this.gotoYear(-1);
    }
    /**
     * @return {?}
     */
    nextYear() {
        this.gotoYear(1);
    }
    /**
     * @return {?}
     */
    previousMonth() {
        this.gotoMonth(-1);
    }
    /**
     * @return {?}
     */
    nextMonth() {
        this.gotoMonth(1);
    }
    /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    changePanel(mode, value) {
        this.panelModeChange.emit(mode);
        if (value) {
            this.changeValueFromInside(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChooseDecade(value) {
        this.changePanel('year', value);
        this.chooseDecade.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChooseYear(value) {
        this.changePanel(this.yearToMonth ? 'month' : 'date', value);
        this.yearToMonth = false; // Clear
        this.chooseYear.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChooseMonth(value) {
        this.changePanel('date', value);
        this.yearToMonth = false; // Clear
        this.chooseMonth.emit(value);
    }
    /**
     * @return {?}
     */
    changeToMonthPanel() {
        this.changePanel('month');
        this.yearToMonth = true;
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
        }
    }
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    gotoMonth(amount) {
        this.changeValueFromInside(this.value.addMonths(amount));
    }
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    gotoYear(amount) {
        this.changeValueFromInside(this.value.addYears(amount));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    changeValueFromInside(value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    }
    /**
     * @private
     * @param {?} localeFormat
     * @return {?}
     */
    formatDateTime(localeFormat) {
        return this.dateHelper.format(this.value.nativeDate, localeFormat);
    }
    /**
     * @private
     * @return {?}
     */
    createYearMonthDaySelectors() {
        /** @type {?} */
        let year;
        /** @type {?} */
        let month;
        /** @type {?} */
        let day;
        // NOTE: Compat for DatePipe formatting rules
        /** @type {?} */
        let yearFormat = this.locale.yearFormat;
        if (this.dateHelper.relyOnDatePipe) {
            yearFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(yearFormat);
        }
        year = {
            className: `${this.prefixCls}-year-select`,
            title: this.locale.yearSelect,
            onClick: (/**
             * @return {?}
             */
            () => (this.showTimePicker ? null : this.changePanel('year'))),
            label: this.formatDateTime(yearFormat)
        };
        month = {
            className: `${this.prefixCls}-month-select`,
            title: this.locale.monthSelect,
            onClick: (/**
             * @return {?}
             */
            () => (this.showTimePicker ? null : this.changeToMonthPanel())),
            label: this.formatDateTime(this.locale.monthFormat || 'MMM')
        };
        // NOTE: Compat for DatePipe formatting rules
        /** @type {?} */
        let dayFormat = this.locale.dayFormat;
        if (this.dateHelper.relyOnDatePipe) {
            dayFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dayFormat);
        }
        if (this.showTimePicker) {
            day = {
                className: `${this.prefixCls}-day-select`,
                label: this.formatDateTime(dayFormat)
            };
        }
        /** @type {?} */
        let result;
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
        selector => !!selector));
    }
}
CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) { return new (t || CalendarHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateHelperService)); };
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
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc3.DecadePanelComponent, ɵngcc4.YearPanelComponent, ɵngcc5.MonthPanelComponent], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
CalendarHeaderComponent.ctorParameters = () => [
    { type: DateHelperService }
];
CalendarHeaderComponent.propDecorators = {
    locale: [{ type: Input }],
    enablePrev: [{ type: Input }],
    enableNext: [{ type: Input }],
    disabledMonth: [{ type: Input }],
    disabledYear: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    panelMode: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    chooseDecade: [{ type: Output }],
    chooseYear: [{ type: Output }],
    chooseMonth: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-header',
                exportAs: 'calendarHeader',
                template: "<div class=\"{{ prefixCls }}-header\">\r\n  <div style=\"position: relative;\">\r\n    <a *ngIf=\"enablePrev && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-prev-year-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousYear()\"\r\n      title=\"{{ locale.previousYear }}\"\r\n    ></a>\r\n    <a *ngIf=\"enablePrev && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-prev-month-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousMonth()\"\r\n      title=\"{{ locale.previousMonth }}\"\r\n    ></a>\r\n\r\n    <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\">\r\n      <ng-container *ngFor=\"let selector of yearMonthDaySelectors\">\r\n        <a class=\"{{ selector.className }}\"\r\n          role=\"button\"\r\n          (click)=\"selector.onClick ? selector.onClick() : null\"\r\n          title=\"{{ selector.title || null }}\"\r\n        >\r\n          {{ selector.label }}\r\n        </a>\r\n      </ng-container>\r\n    </span>\r\n\r\n    <a *ngIf=\"enableNext && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-next-month-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextMonth()\"\r\n      title=\"{{ locale.nextMonth }}\"\r\n    ></a>\r\n    <a *ngIf=\"enableNext && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-next-year-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextYear()\"\r\n      title=\"{{ locale.nextYear }}\"\r\n    ></a>\r\n  </div>\r\n\r\n  <ng-container [ngSwitch]=\"panelMode\">\r\n    <ng-container *ngSwitchCase=\"'decade'\">\r\n      <decade-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        (valueChange)=\"onChooseDecade($event)\"\r\n      ></decade-panel>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'year'\">\r\n      <year-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        [disabledDate]=\"disabledYear\"\r\n        (valueChange)=\"onChooseYear($event)\"\r\n        (decadePanelShow)=\"changePanel('decade')\"\r\n      ></year-panel>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'month'\">\r\n      <month-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        [disabledDate]=\"disabledMonth\"\r\n        (valueChange)=\"onChooseMonth($event)\"\r\n        (yearPanelShow)=\"changePanel('year')\"\r\n      ></month-panel>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>"
            }]
    }], function () { return [{ type: ɵngcc1.DateHelperService }]; }, { enablePrev: [{
            type: Input
        }], enableNext: [{
            type: Input
        }], showTimePicker: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], panelModeChange: [{
            type: Output
        }], chooseDecade: [{
            type: Output
        }], chooseYear: [{
            type: Output
        }], chooseMonth: [{
            type: Output
        }], value: [{
            type: Input
        }], locale: [{
            type: Input
        }], disabledMonth: [{
            type: Input
        }], disabledYear: [{
            type: Input
        }], panelMode: [{
            type: Input
        }] }); })();
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
export function YearMonthDaySelector() { }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvbGliL2NhbGVuZGFyL2NhbGVuZGFyLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVcvQyxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQXVCbEMsWUFBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFyQnhDLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUczQixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUd0QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFHNUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRWhELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUM3QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUMzQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFL0QsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQUczQixnQkFBVyxHQUFZLEtBQUssQ0FBQyxDQUFDLDhJQUE4STtJQUVoSSxDQUFDOzs7O0lBRXJELFFBQVE7UUFDTixJQUFJLENBQUMsSUFB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Q0FKRixRQUFRLEVBQUU7Z0JBQWlCLEpBVEUsaUJBQWlCO0VBVTlDO09BQVEsRUFBRSxnQkFBZ0I7QUFDMUIscUJBR0MsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7b0JBRUwsS0FBSzswQkFDTCxNQUFNO3dCQUVOLEtBQUs7OEJBQ0wsTUFBTTsyQkFFTixNQUFNO3lCQUNOLE1BQU07MEJBQ04sTUFBTTs7Ozs7Ozs7OztvZ0RBbEJzQyxjQUM5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFpQmM7OztJQWZiLHlDQUF5Qzs7SUFDekMsNkNBQW9DOztJQUNwQyw2Q0FBb0M7O0lBQ3BDLGdEQUFnRDs7SUFDaEQsK0NBQStDOztJQUMvQyxpREFBeUM7O0lBRXpDLHdDQUEwQjs7SUFDMUIsOENBQStEOztJQUUvRCw0Q0FBOEI7O0lBQzlCLGtEQUFtRTs7SUFFbkUsK0NBQWdFOztJQUNoRSw2Q0FBOEQ7O0lBQzlELDhDQUErRDs7SUFFL0QsNENBQW1DOztJQUNuQyx3REFBOEM7Ozs7O0lBRTlDLDhDQUFxQzs7Ozs7SUFFekIsNkNBQXFDOzs7OztBQXNJbkQsMENBS0M7OztJQUpDLHlDQUFrQjs7SUFDbEIscUNBQWU7O0lBQ2YscUNBQWM7Ozs7SUFDZCx5REFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRlSGVscGVyQnlEYXRlUGlwZSwgRGF0ZUhlbHBlclNlcnZpY2UsIE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFBhbmVsTW9kZSB9IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItaGVhZGVyJyxcclxuICBleHBvcnRBczogJ2NhbGVuZGFySGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NhbGVuZGFyLWhlYWRlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFySGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgZW5hYmxlUHJldjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgZW5hYmxlTmV4dDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgZGlzYWJsZWRNb250aDogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGlzYWJsZWRZZWFyOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93VGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBASW5wdXQoKSBwYW5lbE1vZGU6IFBhbmVsTW9kZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGU+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaG9vc2VEZWNhZGUgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hvb3NlWWVhciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaG9vc2VNb250aCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG4gIHllYXJNb250aERheVNlbGVjdG9yczogWWVhck1vbnRoRGF5U2VsZWN0b3JbXTtcclxuXHJcbiAgcHJpdmF0ZSB5ZWFyVG9Nb250aDogYm9vbGVhbiA9IGZhbHNlOyAvLyBJbmRpY2F0ZSB3aGV0aGVyIHNob3VsZCBjaGFuZ2UgdG8gbW9udGggcGFuZWwgd2hlbiBjdXJyZW50IGlzIHllYXIgcGFuZWwgKGlmIHJlZmVyZXI9bW9udGgsIGl0IHNob3VsZCBzaG93IG1vbnRoIHBhbmVsIHdoZW4gY2hvb3NlZCBhIHllYXIpXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBuZXcgQ2FuZHlEYXRlKCk7IC8vIFNob3cgdG9kYXkgYnkgZGVmYXVsdFxyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnZhbHVlIHx8IGNoYW5nZXMuc2hvd1RpbWVQaWNrZXIgfHwgY2hhbmdlcy5wYW5lbE1vZGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZpb3VzWWVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b1llYXIoLTEpO1xyXG4gIH1cclxuXHJcbiAgbmV4dFllYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9ZZWFyKDEpO1xyXG4gIH1cclxuXHJcbiAgcHJldmlvdXNNb250aCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b01vbnRoKC0xKTtcclxuICB9XHJcblxyXG4gIG5leHRNb250aCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b01vbnRoKDEpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFuZWwobW9kZTogUGFuZWxNb2RlLCB2YWx1ZT86IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdChtb2RlKTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNob29zZURlY2FkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVBhbmVsKCd5ZWFyJywgdmFsdWUpO1xyXG4gICAgdGhpcy5jaG9vc2VEZWNhZGUuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkNob29zZVllYXIodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VQYW5lbCh0aGlzLnllYXJUb01vbnRoID8gJ21vbnRoJyA6ICdkYXRlJywgdmFsdWUpO1xyXG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IGZhbHNlOyAvLyBDbGVhclxyXG4gICAgdGhpcy5jaG9vc2VZZWFyLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25DaG9vc2VNb250aCh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVBhbmVsKCdkYXRlJywgdmFsdWUpO1xyXG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IGZhbHNlOyAvLyBDbGVhclxyXG4gICAgdGhpcy5jaG9vc2VNb250aC5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVRvTW9udGhQYW5lbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlUGFuZWwoJ21vbnRoJyk7XHJcbiAgICB0aGlzLnllYXJUb01vbnRoID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy55ZWFyTW9udGhEYXlTZWxlY3RvcnMgPSB0aGlzLmNyZWF0ZVllYXJNb250aERheVNlbGVjdG9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb3RvTW9udGgoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHRoaXMudmFsdWUuYWRkTW9udGhzKGFtb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb3RvWWVhcihhbW91bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUodGhpcy52YWx1ZS5hZGRZZWFycyhhbW91bnQpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0RGF0ZVRpbWUobG9jYWxlRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodGhpcy52YWx1ZS5uYXRpdmVEYXRlLCBsb2NhbGVGb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVZZWFyTW9udGhEYXlTZWxlY3RvcnMoKTogWWVhck1vbnRoRGF5U2VsZWN0b3JbXSB7XHJcbiAgICBsZXQgeWVhcjogWWVhck1vbnRoRGF5U2VsZWN0b3I7XHJcbiAgICBsZXQgbW9udGg6IFllYXJNb250aERheVNlbGVjdG9yO1xyXG4gICAgbGV0IGRheTogWWVhck1vbnRoRGF5U2VsZWN0b3I7XHJcblxyXG4gICAgLy8gTk9URTogQ29tcGF0IGZvciBEYXRlUGlwZSBmb3JtYXR0aW5nIHJ1bGVzXHJcbiAgICBsZXQgeWVhckZvcm1hdDogc3RyaW5nID0gdGhpcy5sb2NhbGUueWVhckZvcm1hdDtcclxuICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcclxuICAgICAgeWVhckZvcm1hdCA9ICh0aGlzLmRhdGVIZWxwZXIgYXMgRGF0ZUhlbHBlckJ5RGF0ZVBpcGUpLnRyYW5zQ29tcGF0Rm9ybWF0KHllYXJGb3JtYXQpO1xyXG4gICAgfVxyXG4gICAgeWVhciA9IHtcclxuICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30teWVhci1zZWxlY3RgLFxyXG4gICAgICB0aXRsZTogdGhpcy5sb2NhbGUueWVhclNlbGVjdCxcclxuICAgICAgb25DbGljazogKCkgPT4gKHRoaXMuc2hvd1RpbWVQaWNrZXIgPyBudWxsIDogdGhpcy5jaGFuZ2VQYW5lbCgneWVhcicpKSxcclxuICAgICAgbGFiZWw6IHRoaXMuZm9ybWF0RGF0ZVRpbWUoeWVhckZvcm1hdClcclxuICAgIH07XHJcblxyXG4gICAgbW9udGggPSB7XHJcbiAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXNlbGVjdGAsXHJcbiAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS5tb250aFNlbGVjdCxcclxuICAgICAgb25DbGljazogKCkgPT4gKHRoaXMuc2hvd1RpbWVQaWNrZXIgPyBudWxsIDogdGhpcy5jaGFuZ2VUb01vbnRoUGFuZWwoKSksXHJcbiAgICAgIGxhYmVsOiB0aGlzLmZvcm1hdERhdGVUaW1lKHRoaXMubG9jYWxlLm1vbnRoRm9ybWF0IHx8ICdNTU0nKVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBOT1RFOiBDb21wYXQgZm9yIERhdGVQaXBlIGZvcm1hdHRpbmcgcnVsZXNcclxuICAgIGxldCBkYXlGb3JtYXQ6IHN0cmluZyA9IHRoaXMubG9jYWxlLmRheUZvcm1hdDtcclxuICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcclxuICAgICAgZGF5Rm9ybWF0ID0gKHRoaXMuZGF0ZUhlbHBlciBhcyBEYXRlSGVscGVyQnlEYXRlUGlwZSkudHJhbnNDb21wYXRGb3JtYXQoZGF5Rm9ybWF0KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNob3dUaW1lUGlja2VyKSB7XHJcbiAgICAgIGRheSA9IHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1kYXktc2VsZWN0YCxcclxuICAgICAgICBsYWJlbDogdGhpcy5mb3JtYXREYXRlVGltZShkYXlGb3JtYXQpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlc3VsdDogWWVhck1vbnRoRGF5U2VsZWN0b3JbXTtcclxuXHJcbiAgICBpZiAodGhpcy5sb2NhbGUubW9udGhCZWZvcmVZZWFyKSB7XHJcbiAgICAgIHJlc3VsdCA9IFttb250aCwgZGF5ISwgeWVhcl07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSBbeWVhciwgbW9udGgsIGRheSFdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQuZmlsdGVyKHNlbGVjdG9yID0+ICEhc2VsZWN0b3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBZZWFyTW9udGhEYXlTZWxlY3RvciB7XHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBvbkNsaWNrPygpOiB2b2lkO1xyXG59XHJcbiJdfQ==