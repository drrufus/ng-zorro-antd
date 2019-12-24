import { CdkConnectedOverlay, CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgForOf, NgClass, NgStyle, CommonModule } from '@angular/common';
import { EventEmitter, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵɵelementStart, ɵɵlistener, ɵɵtext, ɵɵelementEnd, ɵɵclassMapInterpolate2, ɵɵpropertyInterpolate, ɵɵadvance, ɵɵtextInterpolate1, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, ɵɵelementContainer, ɵɵtemplate, ɵɵnextContext, ɵɵproperty, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵelement, ɵɵsanitizeHtml, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵclassMapInterpolate1, ɵɵclassMapInterpolate3, ɵɵtextInterpolate, ɵɵclassMap, ɵɵtextInterpolate2, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵreference, ɵɵpureFunction0, ɵɵpureFunction1, ɵɵtemplateRefExtractor, ɵɵclassMapInterpolate4, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵclassProp, ɵɵprojection, ɵɵstyleProp, ChangeDetectorRef, ɵɵviewQuery, ɵɵprojectionDef, ɵɵdefineDirective, ɵɵInheritDefinitionFeature, Renderer2, ElementRef, ɵɵProvidersFeature, forwardRef, ɵɵstyleSanitizer, ɵɵdefaultStyleSanitizer, ɵɵstyleMap, Host, Optional } from '@angular/core';
import { CandyDate, isTemplateRef, isNonEmptyString, sortRangeValue, NzConnectedOverlayDirective, NzNoAnimationDirective, slideMotion, InputBoolean, toBoolean, valueFunctionProp, NzOverlayModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NgControlStatus, NgModel, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateHelperService, NzI18nModule, NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTimePickerPanelComponent, NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { MonthTableComponent, DateTableComponent, NzCalendarModule } from 'ng-zorro-antd/calendar';
import { __decorate, __metadata } from 'tslib';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class TodayButtonComponent {
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.hasTimePicker = false;
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isDisabled = false;
        this.now = new CandyDate();
    }
    ngOnChanges(changes) {
        if (changes.disabledDate) {
            this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
        }
        if (changes.locale) {
            // NOTE: Compat for DatePipe formatting rules
            let dateFormat = this.locale.dateFormat;
            if (this.dateHelper.relyOnDatePipe) {
                dateFormat = this.dateHelper.transCompatFormat(dateFormat);
            }
            this.title = this.dateHelper.format(this.now.nativeDate, dateFormat);
        }
    }
    onClickToday() {
        this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
    }
}
/** @nocollapse */ TodayButtonComponent.ɵfac = function TodayButtonComponent_Factory(t) { return new (t || TodayButtonComponent)(ɵɵdirectiveInject(DateHelperService)); };
/** @nocollapse */ TodayButtonComponent.ɵcmp = ɵɵdefineComponent({ type: TodayButtonComponent, selectors: [["today-button"]], inputs: { locale: "locale", hasTimePicker: "hasTimePicker", disabledDate: "disabledDate" }, outputs: { clickToday: "clickToday" }, exportAs: ["todayButton"], features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 6, consts: [["role", "button", 3, "title", "click"]], template: function TodayButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "a", 0);
        ɵɵlistener("click", function TodayButtonComponent_Template_a_click_0_listener($event) { return ctx.isDisabled ? null : ctx.onClickToday(); });
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMapInterpolate2("", ctx.prefixCls, "-today-btn ", ctx.isDisabled ? ctx.prefixCls + "-today-btn-disabled" : "", "");
        ɵɵpropertyInterpolate("title", ctx.title);
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.hasTimePicker ? ctx.locale.now : ctx.locale.today, "\n");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TodayButtonComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'today-button',
                exportAs: 'todayButton',
                templateUrl: 'today-button.component.html'
            }]
    }], function () { return [{ type: DateHelperService }]; }, { locale: [{
            type: Input
        }], hasTimePicker: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], clickToday: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class TimePickerButtonComponent {
    constructor() {
        this.timePickerDisabled = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    onClick() {
        this.showTimePicker = !this.showTimePicker;
        this.showTimePickerChange.emit(this.showTimePicker);
    }
}
/** @nocollapse */ TimePickerButtonComponent.ɵfac = function TimePickerButtonComponent_Factory(t) { return new (t || TimePickerButtonComponent)(); };
/** @nocollapse */ TimePickerButtonComponent.ɵcmp = ɵɵdefineComponent({ type: TimePickerButtonComponent, selectors: [["time-picker-button"]], inputs: { locale: "locale", timePickerDisabled: "timePickerDisabled", showTimePicker: "showTimePicker" }, outputs: { showTimePickerChange: "showTimePickerChange" }, exportAs: ["timePickerButton"], decls: 2, vars: 5, consts: [["role", "button", 3, "click"]], template: function TimePickerButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "a", 0);
        ɵɵlistener("click", function TimePickerButtonComponent_Template_a_click_0_listener($event) { return ctx.timePickerDisabled ? null : ctx.onClick(); });
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMapInterpolate2("", ctx.prefixCls, "-time-picker-btn ", ctx.timePickerDisabled ? ctx.prefixCls + "-time-picker-btn-disabled" : "", "");
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.showTimePicker ? ctx.locale.dateSelect : ctx.locale.timeSelect, "\n");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TimePickerButtonComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'time-picker-button',
                exportAs: 'timePickerButton',
                templateUrl: 'time-picker-button.component.html'
            }]
    }], null, { locale: [{
            type: Input
        }], timePickerDisabled: [{
            type: Input
        }], showTimePicker: [{
            type: Input
        }], showTimePickerChange: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class OkButtonComponent {
    constructor() {
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
}
/** @nocollapse */ OkButtonComponent.ɵfac = function OkButtonComponent_Factory(t) { return new (t || OkButtonComponent)(); };
/** @nocollapse */ OkButtonComponent.ɵcmp = ɵɵdefineComponent({ type: OkButtonComponent, selectors: [["ok-button"]], inputs: { locale: "locale", okDisabled: "okDisabled" }, outputs: { clickOk: "clickOk" }, exportAs: ["okButton"], decls: 2, vars: 5, consts: [["role", "button", 3, "click"]], template: function OkButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "a", 0);
        ɵɵlistener("click", function OkButtonComponent_Template_a_click_0_listener($event) { return ctx.okDisabled ? null : ctx.clickOk.emit(); });
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMapInterpolate2("", ctx.prefixCls, "-ok-btn ", ctx.okDisabled ? ctx.prefixCls + "-ok-btn-disabled" : "", "");
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.locale.ok, "\n");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OkButtonComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'ok-button',
                exportAs: 'okButton',
                templateUrl: 'ok-button.component.html'
            }]
    }], null, { locale: [{
            type: Input
        }], okDisabled: [{
            type: Input
        }], clickOk: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function CalendarFooterComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function CalendarFooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, CalendarFooterComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2206 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("", ctx_r2206.prefixCls, "-footer-extra ", ctx_r2206.prefixCls, "-range-quick-selector");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2206.rangeQuickSelector);
} }
function CalendarFooterComponent_div_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function CalendarFooterComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CalendarFooterComponent_div_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2210 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2210.extraFooter);
} }
function CalendarFooterComponent_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2211 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r2211.extraFooter, ɵɵsanitizeHtml);
} }
function CalendarFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementContainerStart(1, 2);
    ɵɵtemplate(2, CalendarFooterComponent_div_2_ng_container_2_Template, 2, 1, "ng-container", 3);
    ɵɵtemplate(3, CalendarFooterComponent_div_2_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2207 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("", ctx_r2207.prefixCls, "-footer-extra ", ctx_r2207.isRange ? ctx_r2207.prefixCls + "-range-quick-selector" : "", "");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r2207.isTemplateRef(ctx_r2207.extraFooter));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r2207.isNonEmptyString(ctx_r2207.extraFooter));
} }
function CalendarFooterComponent_span_3_today_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2217 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "today-button", 8);
    ɵɵlistener("clickToday", function CalendarFooterComponent_span_3_today_button_1_Template_today_button_clickToday_0_listener($event) { ɵɵrestoreView(_r2217); const ctx_r2216 = ɵɵnextContext(2); return ctx_r2216.clickToday.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2213 = ɵɵnextContext(2);
    ɵɵproperty("locale", ctx_r2213.locale)("disabledDate", ctx_r2213.disabledDate)("hasTimePicker", ctx_r2213.hasTimePicker);
} }
function CalendarFooterComponent_span_3_time_picker_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r2219 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "time-picker-button", 9);
    ɵɵlistener("showTimePickerChange", function CalendarFooterComponent_span_3_time_picker_button_2_Template_time_picker_button_showTimePickerChange_0_listener($event) { ɵɵrestoreView(_r2219); const ctx_r2218 = ɵɵnextContext(2); return ctx_r2218.showTimePickerChange.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2214 = ɵɵnextContext(2);
    ɵɵproperty("locale", ctx_r2214.locale)("timePickerDisabled", ctx_r2214.timePickerDisabled)("showTimePicker", ctx_r2214.showTimePicker);
} }
function CalendarFooterComponent_span_3_ok_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2221 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ok-button", 10);
    ɵɵlistener("clickOk", function CalendarFooterComponent_span_3_ok_button_3_Template_ok_button_clickOk_0_listener($event) { ɵɵrestoreView(_r2221); const ctx_r2220 = ɵɵnextContext(2); return ctx_r2220.clickOk.emit(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2215 = ɵɵnextContext(2);
    ɵɵproperty("okDisabled", ctx_r2215.okDisabled)("locale", ctx_r2215.locale);
} }
function CalendarFooterComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, CalendarFooterComponent_span_3_today_button_1_Template, 1, 3, "today-button", 5);
    ɵɵtemplate(2, CalendarFooterComponent_span_3_time_picker_button_2_Template, 1, 3, "time-picker-button", 6);
    ɵɵtemplate(3, CalendarFooterComponent_span_3_ok_button_3_Template, 1, 2, "ok-button", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2208 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2208.prefixCls, "-footer-btn");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2208.showToday);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2208.hasTimePicker);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2208.hasTimePicker);
} }
class CalendarFooterComponent {
    constructor() {
        this.showToday = false;
        this.hasTimePicker = false;
        this.isRange = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.timePickerDisabled = false;
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
}
/** @nocollapse */ CalendarFooterComponent.ɵfac = function CalendarFooterComponent_Factory(t) { return new (t || CalendarFooterComponent)(); };
/** @nocollapse */ CalendarFooterComponent.ɵcmp = ɵɵdefineComponent({ type: CalendarFooterComponent, selectors: [["calendar-footer"]], inputs: { locale: "locale", showToday: "showToday", hasTimePicker: "hasTimePicker", isRange: "isRange", showTimePicker: "showTimePicker", timePickerDisabled: "timePickerDisabled", okDisabled: "okDisabled", disabledDate: "disabledDate", extraFooter: "extraFooter", rangeQuickSelector: "rangeQuickSelector" }, outputs: { showTimePickerChange: "showTimePickerChange", clickOk: "clickOk", clickToday: "clickToday" }, exportAs: ["calendarFooter"], decls: 4, vars: 8, consts: [[3, "class", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "innerHTML"], [3, "locale", "disabledDate", "hasTimePicker", "clickToday", 4, "ngIf"], [3, "locale", "timePickerDisabled", "showTimePicker", "showTimePickerChange", 4, "ngIf"], [3, "okDisabled", "locale", "clickOk", 4, "ngIf"], [3, "locale", "disabledDate", "hasTimePicker", "clickToday"], [3, "locale", "timePickerDisabled", "showTimePicker", "showTimePickerChange"], [3, "okDisabled", "locale", "clickOk"]], template: function CalendarFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵtemplate(1, CalendarFooterComponent_div_1_Template, 2, 5, "div", 0);
        ɵɵtemplate(2, CalendarFooterComponent_div_2_Template, 4, 7, "div", 0);
        ɵɵtemplate(3, CalendarFooterComponent_span_3_Template, 4, 6, "span", 0);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMapInterpolate3("", ctx.prefixCls, "-footer ", ctx.isRange ? ctx.prefixCls + "-range-bottom" : "", " ", ctx.hasTimePicker ? ctx.prefixCls + "-footer-show-ok" : "", "");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.rangeQuickSelector);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.extraFooter);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showToday || ctx.hasTimePicker);
    } }, directives: [NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, TodayButtonComponent, TimePickerButtonComponent, OkButtonComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CalendarFooterComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-footer',
                exportAs: 'calendarFooter',
                templateUrl: 'calendar-footer.component.html'
            }]
    }], null, { locale: [{
            type: Input
        }], showToday: [{
            type: Input
        }], hasTimePicker: [{
            type: Input
        }], isRange: [{
            type: Input
        }], showTimePicker: [{
            type: Input
        }], showTimePickerChange: [{
            type: Output
        }], timePickerDisabled: [{
            type: Input
        }], okDisabled: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], extraFooter: [{
            type: Input
        }], rangeQuickSelector: [{
            type: Input
        }], clickOk: [{
            type: Output
        }], clickToday: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function DecadePanelComponent_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 5);
    ɵɵlistener("click", function DecadePanelComponent_tr_9_td_1_Template_td_click_0_listener($event) { const cell_r2252 = ctx.$implicit; return cell_r2252.onClick(); });
    ɵɵelementStart(1, "a");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const cell_r2252 = ctx.$implicit;
    const ctx_r2251 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", cell_r2252.title);
    ɵɵproperty("ngClass", cell_r2252.classMap);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2251.prefixCls, "-decade");
    ɵɵadvance(1);
    ɵɵtextInterpolate(cell_r2252.content);
} }
function DecadePanelComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 3);
    ɵɵtemplate(1, DecadePanelComponent_tr_9_td_1_Template, 3, 6, "td", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r2250 = ctx.$implicit;
    const ctx_r2249 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", row_r2250)("ngForTrackBy", ctx_r2249.trackPanelDecade);
} }
const MAX_ROW = 4;
const MAX_COL = 3;
class DecadePanelComponent {
    constructor() {
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-decade-panel';
    }
    get startYear() {
        return parseInt(`${this.value.getYear() / 100}`, 10) * 100;
    }
    get endYear() {
        return this.startYear + 99;
    }
    ngOnChanges(changes) {
        if (changes.value) {
            this.render();
        }
    }
    previousCentury() {
        this.gotoYear(-100);
    }
    nextCentury() {
        this.gotoYear(100);
    }
    trackPanelDecade(_index, decadeData) {
        return decadeData.content;
    }
    render() {
        if (this.value) {
            this.panelDecades = this.makePanelDecades();
        }
    }
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    gotoYear(amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
        this.render();
    }
    chooseDecade(startYear) {
        this.value = this.value.setYear(startYear);
        this.valueChange.emit(this.value);
    }
    makePanelDecades() {
        const decades = [];
        const currentYear = this.value.getYear();
        const startYear = this.startYear;
        const endYear = this.endYear;
        const previousYear = startYear - 10;
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            decades[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                const start = previousYear + index * 10;
                const end = previousYear + index * 10 + 9;
                const content = `${start}-${end}`;
                const cell = (decades[rowIndex][colIndex] = {
                    content,
                    title: content,
                    isCurrent: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-selected-cell`]: cell.isCurrent,
                    [`${this.prefixCls}-last-century-cell`]: cell.isLowerThanStart,
                    [`${this.prefixCls}-next-century-cell`]: cell.isBiggerThanEnd
                };
                if (cell.isLowerThanStart) {
                    cell.onClick = () => this.previousCentury();
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = () => this.nextCentury();
                }
                else {
                    cell.onClick = () => this.chooseDecade(start);
                }
                index++;
            }
        }
        return decades;
    }
}
/** @nocollapse */ DecadePanelComponent.ɵfac = function DecadePanelComponent_Factory(t) { return new (t || DecadePanelComponent)(); };
/** @nocollapse */ DecadePanelComponent.ɵcmp = ɵɵdefineComponent({ type: DecadePanelComponent, selectors: [["decade-panel"]], inputs: { locale: "locale", value: "value" }, outputs: { valueChange: "valueChange" }, exportAs: ["decadePanel"], features: [ɵɵNgOnChangesFeature()], decls: 10, vars: 29, consts: [["role", "button", 3, "title", "click"], ["cellSpacing", "0", "role", "grid"], ["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], ["role", "gridcell", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell", 3, "title", "ngClass", "click"]], template: function DecadePanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div");
        ɵɵelementStart(2, "a", 0);
        ɵɵlistener("click", function DecadePanelComponent_Template_a_click_2_listener($event) { return ctx.previousCentury(); });
        ɵɵelementEnd();
        ɵɵelementStart(3, "div");
        ɵɵtext(4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "a", 0);
        ɵɵlistener("click", function DecadePanelComponent_Template_a_click_5_listener($event) { return ctx.nextCentury(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div");
        ɵɵelementStart(7, "table", 1);
        ɵɵelementStart(8, "tbody");
        ɵɵtemplate(9, DecadePanelComponent_tr_9_Template, 2, 2, "tr", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap(ctx.prefixCls);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-century-btn");
        ɵɵpropertyInterpolate("title", ctx.locale.previousCentury);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-century");
        ɵɵadvance(1);
        ɵɵtextInterpolate2("", ctx.startYear, "-", ctx.endYear, "");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-century-btn");
        ɵɵpropertyInterpolate("title", ctx.locale.nextCentury);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-table");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-tbody");
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.panelDecades);
    } }, directives: [NgForOf, NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DecadePanelComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'decade-panel',
                exportAs: 'decadePanel',
                templateUrl: 'decade-panel.component.html'
            }]
    }], function () { return []; }, { locale: [{
            type: Input
        }], value: [{
            type: Input
        }], valueChange: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function YearPanelComponent_tr_13_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 5);
    ɵɵlistener("click", function YearPanelComponent_tr_13_td_1_Template_td_click_0_listener($event) { const yearCell_r2307 = ctx.$implicit; return yearCell_r2307.disabled ? null : yearCell_r2307.onClick(); });
    ɵɵelementStart(1, "a");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const yearCell_r2307 = ctx.$implicit;
    const ctx_r2306 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", yearCell_r2307.title);
    ɵɵproperty("ngClass", yearCell_r2307.classMap);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2306.prefixCls, "-year");
    ɵɵadvance(1);
    ɵɵtextInterpolate(yearCell_r2307.content);
} }
function YearPanelComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 3);
    ɵɵtemplate(1, YearPanelComponent_tr_13_td_1_Template, 3, 6, "td", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r2305 = ctx.$implicit;
    const ctx_r2304 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", row_r2305)("ngForTrackBy", ctx_r2304.trackPanelYear);
} }
const MAX_ROW$1 = 4;
const MAX_COL$1 = 3;
class YearPanelComponent {
    constructor() {
        this.valueChange = new EventEmitter();
        this.decadePanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-year-panel';
    }
    get currentYear() {
        return this.value.getYear();
    }
    get startYear() {
        return parseInt(`${this.currentYear / 10}`, 10) * 10;
    }
    get endYear() {
        return this.startYear + 9;
    }
    ngOnChanges(changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    }
    previousDecade() {
        this.gotoYear(-10);
    }
    nextDecade() {
        this.gotoYear(10);
    }
    trackPanelYear(_index, yearData) {
        return yearData.content;
    }
    render() {
        if (this.value) {
            this.panelYears = this.makePanelYears();
        }
    }
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    gotoYear(amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not trigger final value change
        this.render();
    }
    chooseYear(year) {
        this.value = this.value.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    }
    makePanelYears() {
        const years = [];
        const currentYear = this.currentYear;
        const startYear = this.startYear;
        const endYear = this.endYear;
        const previousYear = startYear - 1;
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW$1; rowIndex++) {
            years[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL$1; colIndex++) {
                const year = previousYear + index;
                const content = String(year);
                const disabled = this.disabledDate ? this.disabledDate(this.value.setYear(year).nativeDate) : false;
                const cell = (years[rowIndex][colIndex] = {
                    disabled,
                    content,
                    year,
                    title: content,
                    isCurrent: year === currentYear,
                    isLowerThanStart: year < startYear,
                    isBiggerThanEnd: year > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-selected-cell`]: cell.isCurrent,
                    [`${this.prefixCls}-cell-disabled`]: disabled,
                    [`${this.prefixCls}-last-decade-cell`]: cell.isLowerThanStart,
                    [`${this.prefixCls}-next-decade-cell`]: cell.isBiggerThanEnd
                };
                if (cell.isLowerThanStart) {
                    cell.onClick = () => this.previousDecade();
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = () => this.nextDecade();
                }
                else {
                    cell.onClick = () => this.chooseYear(cell.year);
                }
                index++;
            }
        }
        return years;
    }
}
/** @nocollapse */ YearPanelComponent.ɵfac = function YearPanelComponent_Factory(t) { return new (t || YearPanelComponent)(); };
/** @nocollapse */ YearPanelComponent.ɵcmp = ɵɵdefineComponent({ type: YearPanelComponent, selectors: [["year-panel"]], inputs: { locale: "locale", value: "value", disabledDate: "disabledDate" }, outputs: { valueChange: "valueChange", decadePanelShow: "decadePanelShow" }, exportAs: ["yearPanel"], features: [ɵɵNgOnChangesFeature()], decls: 14, vars: 36, consts: [["role", "button", 3, "title", "click"], ["cellSpacing", "0", "role", "grid"], ["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], ["role", "gridcell", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell", 3, "title", "ngClass", "click"]], template: function YearPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div");
        ɵɵelementStart(2, "div");
        ɵɵelementStart(3, "a", 0);
        ɵɵlistener("click", function YearPanelComponent_Template_a_click_3_listener($event) { return ctx.previousDecade(); });
        ɵɵelementEnd();
        ɵɵelementStart(4, "a", 0);
        ɵɵlistener("click", function YearPanelComponent_Template_a_click_4_listener($event) { return ctx.decadePanelShow.emit(); });
        ɵɵelementStart(5, "span");
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementStart(7, "span");
        ɵɵtext(8, "x");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "a", 0);
        ɵɵlistener("click", function YearPanelComponent_Template_a_click_9_listener($event) { return ctx.nextDecade(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "div");
        ɵɵelementStart(11, "table", 1);
        ɵɵelementStart(12, "tbody");
        ɵɵtemplate(13, YearPanelComponent_tr_13_Template, 2, 2, "tr", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap(ctx.prefixCls);
        ɵɵadvance(2);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-decade-btn");
        ɵɵpropertyInterpolate("title", ctx.locale.previousDecade);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-decade-select");
        ɵɵpropertyInterpolate("title", ctx.locale.decadeSelect);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-decade-select-content");
        ɵɵadvance(1);
        ɵɵtextInterpolate2(" ", ctx.startYear, "-", ctx.endYear, " ");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-decade-select-arrow");
        ɵɵadvance(2);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-decade-btn");
        ɵɵpropertyInterpolate("title", ctx.locale.nextDecade);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-table");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-tbody");
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.panelYears);
    } }, directives: [NgForOf, NgClass], styles: ["\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {\n        color: rgba(0, 0, 0, 0.25);\n        background: #f5f5f5;\n        cursor: not-allowed;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(YearPanelComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'year-panel',
                exportAs: 'yearPanel',
                templateUrl: 'year-panel.component.html',
                styles: [
                    // Support disabledDate
                    `
      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,
      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {
        color: rgba(0, 0, 0, 0.25);
        background: #f5f5f5;
        cursor: not-allowed;
      }
    `
                ]
            }]
    }], function () { return []; }, { locale: [{
            type: Input
        }], value: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], disabledDate: [{
            type: Input
        }], decadePanelShow: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class MonthPanelComponent {
    constructor() {
        this.valueChange = new EventEmitter();
        this.yearPanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-month-panel';
    }
    previousYear() {
        this.gotoYear(-1);
    }
    nextYear() {
        this.gotoYear(1);
    }
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    gotoYear(amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
    }
}
/** @nocollapse */ MonthPanelComponent.ɵfac = function MonthPanelComponent_Factory(t) { return new (t || MonthPanelComponent)(); };
/** @nocollapse */ MonthPanelComponent.ɵcmp = ɵɵdefineComponent({ type: MonthPanelComponent, selectors: [["month-panel"]], inputs: { locale: "locale", value: "value", disabledDate: "disabledDate" }, outputs: { valueChange: "valueChange", yearPanelShow: "yearPanelShow" }, exportAs: ["monthPanel"], decls: 12, vars: 31, consts: [["role", "button", 3, "title", "click"], [3, "prefixCls", "disabledDate", "value", "valueChange"]], template: function MonthPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div");
        ɵɵelementStart(2, "div");
        ɵɵelementStart(3, "a", 0);
        ɵɵlistener("click", function MonthPanelComponent_Template_a_click_3_listener($event) { return ctx.previousYear(); });
        ɵɵelementEnd();
        ɵɵelementStart(4, "a", 0);
        ɵɵlistener("click", function MonthPanelComponent_Template_a_click_4_listener($event) { return ctx.yearPanelShow.emit(); });
        ɵɵelementStart(5, "span");
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementStart(7, "span");
        ɵɵtext(8, "x");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "a", 0);
        ɵɵlistener("click", function MonthPanelComponent_Template_a_click_9_listener($event) { return ctx.nextYear(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "div");
        ɵɵelementStart(11, "month-table", 1);
        ɵɵlistener("valueChange", function MonthPanelComponent_Template_month_table_valueChange_11_listener($event) { return ctx.valueChange.emit($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap(ctx.prefixCls);
        ɵɵadvance(2);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-year-btn");
        ɵɵpropertyInterpolate("title", ctx.locale.previousYear);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-year-select");
        ɵɵpropertyInterpolate("title", ctx.locale.yearSelect);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-year-select-content");
        ɵɵadvance(1);
        ɵɵtextInterpolate(ctx.value.getYear());
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-year-select-arrow");
        ɵɵadvance(2);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-year-btn");
        ɵɵpropertyInterpolate("title", ctx.locale.nextYear);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
        ɵɵadvance(1);
        ɵɵproperty("prefixCls", "ant-calendar")("disabledDate", ctx.disabledDate)("value", ctx.value);
    } }, directives: [MonthTableComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MonthPanelComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'month-panel',
                exportAs: 'monthPanel',
                templateUrl: 'month-panel.component.html'
            }]
    }], null, { locale: [{
            type: Input
        }], value: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], yearPanelShow: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function CalendarHeaderComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2231 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 5);
    ɵɵlistener("click", function CalendarHeaderComponent_a_2_Template_a_click_0_listener($event) { ɵɵrestoreView(_r2231); const ctx_r2230 = ɵɵnextContext(); return ctx_r2230.previousYear(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2222 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2222.prefixCls, "-prev-year-btn");
    ɵɵpropertyInterpolate("title", ctx_r2222.locale.previousYear);
} }
function CalendarHeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r2233 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 5);
    ɵɵlistener("click", function CalendarHeaderComponent_a_3_Template_a_click_0_listener($event) { ɵɵrestoreView(_r2233); const ctx_r2232 = ɵɵnextContext(); return ctx_r2232.previousMonth(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2223 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2223.prefixCls, "-prev-month-btn");
    ɵɵpropertyInterpolate("title", ctx_r2223.locale.previousMonth);
} }
function CalendarHeaderComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 5);
    ɵɵlistener("click", function CalendarHeaderComponent_ng_container_5_Template_a_click_1_listener($event) { const selector_r2234 = ctx.$implicit; return selector_r2234.onClick ? selector_r2234.onClick() : null; });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const selector_r2234 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵclassMap(selector_r2234.className);
    ɵɵpropertyInterpolate("title", selector_r2234.title || null);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", selector_r2234.label, " ");
} }
function CalendarHeaderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r2237 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 5);
    ɵɵlistener("click", function CalendarHeaderComponent_a_6_Template_a_click_0_listener($event) { ɵɵrestoreView(_r2237); const ctx_r2236 = ɵɵnextContext(); return ctx_r2236.nextMonth(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2225 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2225.prefixCls, "-next-month-btn");
    ɵɵpropertyInterpolate("title", ctx_r2225.locale.nextMonth);
} }
function CalendarHeaderComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r2239 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 5);
    ɵɵlistener("click", function CalendarHeaderComponent_a_7_Template_a_click_0_listener($event) { ɵɵrestoreView(_r2239); const ctx_r2238 = ɵɵnextContext(); return ctx_r2238.nextYear(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2226 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2226.prefixCls, "-next-year-btn");
    ɵɵpropertyInterpolate("title", ctx_r2226.locale.nextYear);
} }
function CalendarHeaderComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r2241 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "decade-panel", 6);
    ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_9_Template_decade_panel_valueChange_1_listener($event) { ɵɵrestoreView(_r2241); const ctx_r2240 = ɵɵnextContext(); return ctx_r2240.onChooseDecade($event); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2227 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("locale", ctx_r2227.locale)("value", ctx_r2227.value);
} }
function CalendarHeaderComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r2243 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "year-panel", 7);
    ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_10_Template_year_panel_valueChange_1_listener($event) { ɵɵrestoreView(_r2243); const ctx_r2242 = ɵɵnextContext(); return ctx_r2242.onChooseYear($event); })("decadePanelShow", function CalendarHeaderComponent_ng_container_10_Template_year_panel_decadePanelShow_1_listener($event) { ɵɵrestoreView(_r2243); const ctx_r2244 = ɵɵnextContext(); return ctx_r2244.changePanel("decade"); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2228 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("locale", ctx_r2228.locale)("value", ctx_r2228.value)("disabledDate", ctx_r2228.disabledYear);
} }
function CalendarHeaderComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r2246 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "month-panel", 8);
    ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_11_Template_month_panel_valueChange_1_listener($event) { ɵɵrestoreView(_r2246); const ctx_r2245 = ɵɵnextContext(); return ctx_r2245.onChooseMonth($event); })("yearPanelShow", function CalendarHeaderComponent_ng_container_11_Template_month_panel_yearPanelShow_1_listener($event) { ɵɵrestoreView(_r2246); const ctx_r2247 = ɵɵnextContext(); return ctx_r2247.changePanel("year"); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2229 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("locale", ctx_r2229.locale)("value", ctx_r2229.value)("disabledDate", ctx_r2229.disabledMonth);
} }
class CalendarHeaderComponent {
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
/** @nocollapse */ CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) { return new (t || CalendarHeaderComponent)(ɵɵdirectiveInject(DateHelperService)); };
/** @nocollapse */ CalendarHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: CalendarHeaderComponent, selectors: [["calendar-header"]], inputs: { locale: "locale", enablePrev: "enablePrev", enableNext: "enableNext", disabledMonth: "disabledMonth", disabledYear: "disabledYear", showTimePicker: "showTimePicker", value: "value", panelMode: "panelMode" }, outputs: { valueChange: "valueChange", panelModeChange: "panelModeChange", chooseDecade: "chooseDecade", chooseYear: "chooseYear", chooseMonth: "chooseMonth" }, exportAs: ["calendarHeader"], features: [ɵɵNgOnChangesFeature()], decls: 12, vars: 16, consts: [[2, "position", "relative"], ["role", "button", 3, "class", "title", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["role", "button", 3, "title", "click"], [3, "locale", "value", "valueChange"], [3, "locale", "value", "disabledDate", "valueChange", "decadePanelShow"], [3, "locale", "value", "disabledDate", "valueChange", "yearPanelShow"]], template: function CalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div", 0);
        ɵɵtemplate(2, CalendarHeaderComponent_a_2_Template, 1, 4, "a", 1);
        ɵɵtemplate(3, CalendarHeaderComponent_a_3_Template, 1, 4, "a", 1);
        ɵɵelementStart(4, "span");
        ɵɵtemplate(5, CalendarHeaderComponent_ng_container_5_Template, 3, 5, "ng-container", 2);
        ɵɵelementEnd();
        ɵɵtemplate(6, CalendarHeaderComponent_a_6_Template, 1, 4, "a", 1);
        ɵɵtemplate(7, CalendarHeaderComponent_a_7_Template, 1, 4, "a", 1);
        ɵɵelementEnd();
        ɵɵelementContainerStart(8, 3);
        ɵɵtemplate(9, CalendarHeaderComponent_ng_container_9_Template, 2, 2, "ng-container", 4);
        ɵɵtemplate(10, CalendarHeaderComponent_ng_container_10_Template, 2, 3, "ng-container", 4);
        ɵɵtemplate(11, CalendarHeaderComponent_ng_container_11_Template, 2, 3, "ng-container", 4);
        ɵɵelementContainerEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.enablePrev && !ctx.showTimePicker);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.enablePrev && !ctx.showTimePicker);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate2("", ctx.prefixCls, "-", ctx.locale.monthBeforeYear ? "my-select" : "ym-select", "");
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.yearMonthDaySelectors);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.enableNext && !ctx.showTimePicker);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.enableNext && !ctx.showTimePicker);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitch", ctx.panelMode);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "decade");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "year");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "month");
    } }, directives: [NgIf, NgForOf, NgSwitch, NgSwitchCase, DecadePanelComponent, YearPanelComponent, MonthPanelComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CalendarHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-header',
                exportAs: 'calendarHeader',
                templateUrl: 'calendar-header.component.html'
            }]
    }], function () { return [{ type: DateHelperService }]; }, { locale: [{
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["inputElement"];
class CalendarInputComponent {
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.invalidInputClass = '';
    }
    ngOnInit() {
        if (this.autoFocus) {
            setTimeout(() => this.inputRef.nativeElement.focus());
        }
    }
    onInputKeyup(event, isEnter = false) {
        const date = this.checkValidInputDate(event);
        if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
            return;
        }
        this.value = date;
        this.valueChange.emit({ date, isEnter });
    }
    toReadableInput(value) {
        return value ? this.dateHelper.format(value.nativeDate, this.format) : '';
    }
    checkValidInputDate(event) {
        const input = event.target.value;
        const date = new CandyDate(input);
        this.invalidInputClass = '';
        if (!date.isValid() || input !== this.toReadableInput(date)) {
            // Should also match the input format exactly
            this.invalidInputClass = `${this.prefixCls}-input-invalid`;
            return null;
        }
        return date;
    }
}
/** @nocollapse */ CalendarInputComponent.ɵfac = function CalendarInputComponent_Factory(t) { return new (t || CalendarInputComponent)(ɵɵdirectiveInject(DateHelperService)); };
/** @nocollapse */ CalendarInputComponent.ɵcmp = ɵɵdefineComponent({ type: CalendarInputComponent, selectors: [["calendar-input"]], viewQuery: function CalendarInputComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputRef = _t.first);
    } }, inputs: { locale: "locale", format: "format", placeholder: "placeholder", disabledDate: "disabledDate", value: "value", autoFocus: "autoFocus" }, outputs: { valueChange: "valueChange" }, exportAs: ["calendarInput"], decls: 5, vars: 16, consts: [[3, "placeholder", "value", "input", "keyup.enter"], ["inputElement", ""], ["role", "button", 3, "title"]], template: function CalendarInputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div");
        ɵɵelementStart(2, "input", 0, 1);
        ɵɵlistener("input", function CalendarInputComponent_Template_input_input_2_listener($event) { return ctx.onInputKeyup($event); })("keyup.enter", function CalendarInputComponent_Template_input_keyup_enter_2_listener($event) { return ctx.onInputKeyup($event, true); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(4, "a", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input-wrap");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-date-input-wrap");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate2("", ctx.prefixCls, "-input ", ctx.invalidInputClass, "");
        ɵɵpropertyInterpolate("placeholder", ctx.placeholder || ctx.locale.dateSelect);
        ɵɵpropertyInterpolate("value", ctx.toReadableInput(ctx.value));
        ɵɵadvance(2);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-clear-btn");
        ɵɵpropertyInterpolate("title", ctx.locale.clear);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CalendarInputComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-input',
                exportAs: 'calendarInput',
                templateUrl: 'calendar-input.component.html'
            }]
    }], function () { return [{ type: DateHelperService }]; }, { locale: [{
            type: Input
        }], format: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], value: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], inputRef: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], valueChange: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const defaultDisabledTime = {
    nzDisabledHours() {
        return [];
    },
    nzDisabledMinutes() {
        return [];
    },
    nzDisabledSeconds() {
        return [];
    }
};
function getTimeConfig(value, disabledTime) {
    let disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : {};
    disabledTimeConfig = Object.assign(Object.assign({}, defaultDisabledTime), disabledTimeConfig);
    return disabledTimeConfig;
}
function isTimeValidByConfig(value, disabledTimeConfig) {
    let invalidTime = false;
    if (value) {
        const hour = value.getHours();
        const minutes = value.getMinutes();
        const seconds = value.getSeconds();
        const disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            const disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                const disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
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
function isTimeValid(value, disabledTime) {
    const disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
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
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function InnerPopupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r2303 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "nz-time-picker-panel", 3);
    ɵɵlistener("ngModelChange", function InnerPopupComponent_ng_container_1_Template_nz_time_picker_panel_ngModelChange_1_listener($event) { ɵɵrestoreView(_r2303); const ctx_r2302 = ɵɵnextContext(); return ctx_r2302.onSelectTime($event); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2301 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzInDatePicker", true)("ngModel", ctx_r2301.value == null ? null : ctx_r2301.value.nativeDate)("format", ctx_r2301.timeOptions.nzFormat)("nzHourStep", ctx_r2301.timeOptions.nzHourStep)("nzMinuteStep", ctx_r2301.timeOptions.nzMinuteStep)("nzSecondStep", ctx_r2301.timeOptions.nzSecondStep)("nzDisabledHours", ctx_r2301.timeOptions.nzDisabledHours)("nzDisabledMinutes", ctx_r2301.timeOptions.nzDisabledMinutes)("nzDisabledSeconds", ctx_r2301.timeOptions.nzDisabledSeconds)("nzHideDisabledOptions", ctx_r2301.timeOptions.nzHideDisabledOptions)("nzDefaultOpenValue", ctx_r2301.timeOptions.nzDefaultOpenValue)("nzUse12Hours", ctx_r2301.timeOptions.nzUse12Hours)("nzAddOn", ctx_r2301.timeOptions.nzAddOn)("opened", true);
} }
class InnerPopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        this.headerChange = new EventEmitter(); // Emitted when user changed the header's value
        this.selectDate = new EventEmitter(); // Emitted when the date is selected by click the date panel
        this.selectTime = new EventEmitter();
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.prefixCls = 'ant-calendar';
    }
    onSelectTime(date) {
        this.selectTime.emit(new CandyDate(date));
    }
    // The value real changed to outside
    onSelectDate(date) {
        const value = date instanceof CandyDate ? date : new CandyDate(date);
        const timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue;
        // Display timeValue when value is null
        if (!this.value && timeValue) {
            value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
        }
        this.selectDate.emit(value);
    }
}
/** @nocollapse */ InnerPopupComponent.ɵfac = function InnerPopupComponent_Factory(t) { return new (t || InnerPopupComponent)(); };
/** @nocollapse */ InnerPopupComponent.ɵcmp = ɵɵdefineComponent({ type: InnerPopupComponent, selectors: [["inner-popup"]], inputs: { showWeek: "showWeek", locale: "locale", showTimePicker: "showTimePicker", timeOptions: "timeOptions", enablePrev: "enablePrev", enableNext: "enableNext", disabledDate: "disabledDate", dateRender: "dateRender", selectedValue: "selectedValue", hoverValue: "hoverValue", panelMode: "panelMode", value: "value" }, outputs: { panelModeChange: "panelModeChange", headerChange: "headerChange", selectDate: "selectDate", selectTime: "selectTime", dayHover: "dayHover" }, exportAs: ["innerPopup"], decls: 4, vars: 17, consts: [[3, "panelMode", "value", "locale", "showTimePicker", "enablePrev", "enableNext", "panelModeChange", "valueChange"], [4, "ngIf"], [3, "locale", "showWeek", "value", "disabledDate", "dateCellRender", "selectedValue", "hoverValue", "valueChange", "dayHover"], [3, "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn", "opened", "ngModelChange"]], template: function InnerPopupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "calendar-header", 0);
        ɵɵlistener("panelModeChange", function InnerPopupComponent_Template_calendar_header_panelModeChange_0_listener($event) { return ctx.panelMode = $event; })("panelModeChange", function InnerPopupComponent_Template_calendar_header_panelModeChange_0_listener($event) { return ctx.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_Template_calendar_header_valueChange_0_listener($event) { return ctx.value = $event; })("valueChange", function InnerPopupComponent_Template_calendar_header_valueChange_0_listener($event) { return ctx.headerChange.emit($event); });
        ɵɵelementEnd();
        ɵɵtemplate(1, InnerPopupComponent_ng_container_1_Template, 2, 14, "ng-container", 1);
        ɵɵelementStart(2, "div");
        ɵɵelementStart(3, "date-table", 2);
        ɵɵlistener("valueChange", function InnerPopupComponent_Template_date_table_valueChange_3_listener($event) { return ctx.onSelectDate($event); })("dayHover", function InnerPopupComponent_Template_date_table_dayHover_3_listener($event) { return ctx.dayHover.emit($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("panelMode", ctx.panelMode)("value", ctx.value)("locale", ctx.locale)("showTimePicker", ctx.showTimePicker)("enablePrev", ctx.enablePrev)("enableNext", ctx.enableNext);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showTimePicker && ctx.timeOptions);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
        ɵɵadvance(1);
        ɵɵproperty("locale", ctx.locale)("showWeek", ctx.showWeek)("value", ctx.value)("disabledDate", ctx.disabledDate)("dateCellRender", ctx.dateRender)("selectedValue", ctx.selectedValue)("hoverValue", ctx.hoverValue);
    } }, directives: [CalendarHeaderComponent, NgIf, DateTableComponent, NzTimePickerPanelComponent, NgControlStatus, NgModel], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(InnerPopupComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'inner-popup',
                exportAs: 'innerPopup',
                templateUrl: 'inner-popup.component.html'
            }]
    }], null, { showWeek: [{
            type: Input
        }], locale: [{
            type: Input
        }], showTimePicker: [{
            type: Input
        }], timeOptions: [{
            type: Input
        }], enablePrev: [{
            type: Input
        }], enableNext: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], dateRender: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], hoverValue: [{
            type: Input
        }], panelMode: [{
            type: Input
        }], panelModeChange: [{
            type: Output
        }], value: [{
            type: Input
        }], headerChange: [{
            type: Output
        }], selectDate: [{
            type: Output
        }], selectTime: [{
            type: Output
        }], dayHover: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function DateRangePopupComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DateRangePopupComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r2258 = ɵɵreference(9);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2258);
} }
function DateRangePopupComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$1 = function () { return { partType: "left" }; };
const _c1 = function () { return { partType: "right" }; };
function DateRangePopupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DateRangePopupComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementStart(2, "div", 12);
    ɵɵtext(3, "~");
    ɵɵelementEnd();
    ɵɵtemplate(4, DateRangePopupComponent_ng_container_5_ng_container_4_Template, 1, 0, "ng-container", 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r2266 = ɵɵreference(17);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2266)("ngTemplateOutletContext", ɵɵpureFunction0(4, _c0$1));
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", _r2266)("ngTemplateOutletContext", ɵɵpureFunction0(5, _c1));
} }
function DateRangePopupComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DateRangePopupComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r2262 = ɵɵreference(13);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2262);
} }
function DateRangePopupComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DateRangePopupComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r2262 = ɵɵreference(13);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2262);
} }
function DateRangePopupComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r2277 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "calendar-input", 13);
    ɵɵlistener("valueChange", function DateRangePopupComponent_ng_template_8_Template_calendar_input_valueChange_0_listener($event) { ɵɵrestoreView(_r2277); const partType_r2275 = ctx.partType; const ctx_r2276 = ɵɵnextContext(); return ctx_r2276.changeValueFromInput($event, partType_r2275); });
    ɵɵelementEnd();
} if (rf & 2) {
    const partType_r2275 = ctx.partType;
    const ctx_r2259 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r2259.getValue(partType_r2275))("locale", ctx_r2259.locale)("disabledDate", ctx_r2259.disabledDate)("format", ctx_r2259.format)("autoFocus", partType_r2275 !== "right")("placeholder", ctx_r2259.getPlaceholder(partType_r2275));
} }
function DateRangePopupComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r2280 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "inner-popup", 14);
    ɵɵlistener("panelModeChange", function DateRangePopupComponent_ng_template_10_Template_inner_popup_panelModeChange_0_listener($event) { ɵɵrestoreView(_r2280); const partType_r2278 = ctx.partType; const ctx_r2279 = ɵɵnextContext(); return ctx_r2279.onPanelModeChange($event, partType_r2278); })("dayHover", function DateRangePopupComponent_ng_template_10_Template_inner_popup_dayHover_0_listener($event) { ɵɵrestoreView(_r2280); const ctx_r2281 = ɵɵnextContext(); return ctx_r2281.onDayHover($event); })("selectDate", function DateRangePopupComponent_ng_template_10_Template_inner_popup_selectDate_0_listener($event) { ɵɵrestoreView(_r2280); const ctx_r2282 = ɵɵnextContext(); return ctx_r2282.changeValueFromSelect($event); })("selectTime", function DateRangePopupComponent_ng_template_10_Template_inner_popup_selectTime_0_listener($event) { ɵɵrestoreView(_r2280); const partType_r2278 = ctx.partType; const ctx_r2283 = ɵɵnextContext(); return ctx_r2283.onSelectTime($event, partType_r2278); })("headerChange", function DateRangePopupComponent_ng_template_10_Template_inner_popup_headerChange_0_listener($event) { ɵɵrestoreView(_r2280); const partType_r2278 = ctx.partType; const ctx_r2284 = ɵɵnextContext(); return ctx_r2284.onHeaderChange($event, partType_r2278); });
    ɵɵelementEnd();
} if (rf & 2) {
    const partType_r2278 = ctx.partType;
    const ctx_r2261 = ɵɵnextContext();
    ɵɵproperty("showWeek", ctx_r2261.showWeek)("locale", ctx_r2261.locale)("showTimePicker", ctx_r2261.hasTimePicker && ctx_r2261.showTimePicker)("timeOptions", ctx_r2261.getTimeOptions(partType_r2278))("panelMode", ctx_r2261.getPanelMode(partType_r2278))("value", ctx_r2261.getValueBySelector(partType_r2278))("disabledDate", ctx_r2261.disabledDate)("dateRender", ctx_r2261.dateRender)("selectedValue", ctx_r2261.selectedValue)("hoverValue", ctx_r2261.hoverValue)("enablePrev", ctx_r2261.enablePrevNext("prev", partType_r2278))("enableNext", ctx_r2261.enablePrevNext("next", partType_r2278));
} }
function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template(rf, ctx) { if (rf & 1) {
    const _r2287 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "calendar-footer", 16);
    ɵɵlistener("showTimePickerChange", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_showTimePickerChange_0_listener($event) { ɵɵrestoreView(_r2287); const ctx_r2286 = ɵɵnextContext(2); return ctx_r2286.showTimePicker = $event; })("showTimePickerChange", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_showTimePickerChange_0_listener($event) { ɵɵrestoreView(_r2287); const ctx_r2288 = ɵɵnextContext(2); return ctx_r2288.onShowTimePickerChange($event); })("clickOk", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_clickOk_0_listener($event) { ɵɵrestoreView(_r2287); const ctx_r2289 = ɵɵnextContext(2); return ctx_r2289.onClickOk(); })("clickToday", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_clickToday_0_listener($event) { ɵɵrestoreView(_r2287); const ctx_r2290 = ɵɵnextContext(2); return ctx_r2290.onClickToday($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2285 = ɵɵnextContext(2);
    const _r2268 = ɵɵreference(19);
    ɵɵproperty("locale", ctx_r2285.locale)("showToday", ctx_r2285.showToday)("hasTimePicker", ctx_r2285.hasTimePicker)("timePickerDisabled", ctx_r2285.timePickerDisabled())("okDisabled", ctx_r2285.okDisabled())("extraFooter", ctx_r2285.extraFooter)("rangeQuickSelector", ctx_r2285.ranges ? _r2268 : null)("showTimePicker", ctx_r2285.showTimePicker);
} }
function DateRangePopupComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, DateRangePopupComponent_ng_template_12_calendar_footer_0_Template, 1, 8, "calendar-footer", 15);
} if (rf & 2) {
    const ctx_r2263 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2263.hasFooter);
} }
function DateRangePopupComponent_ng_template_14_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, DateRangePopupComponent_ng_template_14_ng_container_0_Template, 1, 0, "ng-container", 10);
} if (rf & 2) {
    ɵɵnextContext();
    const _r2260 = ɵɵreference(11);
    ɵɵproperty("ngTemplateOutlet", _r2260);
} }
function DateRangePopupComponent_ng_template_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_template_16_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2 = function (a0) { return { partType: a0 }; };
function DateRangePopupComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, DateRangePopupComponent_ng_template_16_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementStart(2, "div", 17);
    ɵɵtemplate(3, DateRangePopupComponent_ng_template_16_ng_container_3_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const partType_r2292 = ctx.partType;
    const ctx_r2267 = ɵɵnextContext();
    const _r2258 = ɵɵreference(9);
    const _r2260 = ɵɵreference(11);
    ɵɵclassMapInterpolate3("", ctx_r2267.prefixCls, "-range-part ", ctx_r2267.prefixCls, "-range-", partType_r2292, "");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2258)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c2, partType_r2292));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r2260)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c2, partType_r2292));
} }
function DateRangePopupComponent_ng_template_18_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r2298 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 19);
    ɵɵlistener("click", function DateRangePopupComponent_ng_template_18_a_0_Template_a_click_0_listener($event) { ɵɵrestoreView(_r2298); const name_r2296 = ctx.$implicit; const ctx_r2297 = ɵɵnextContext(2); return ctx_r2297.onClickPresetRange(ctx_r2297.ranges[name_r2296]); })("mouseenter", function DateRangePopupComponent_ng_template_18_a_0_Template_a_mouseenter_0_listener($event) { ɵɵrestoreView(_r2298); const name_r2296 = ctx.$implicit; const ctx_r2299 = ɵɵnextContext(2); return ctx_r2299.onHoverPresetRange(ctx_r2299.ranges[name_r2296]); })("mouseleave", function DateRangePopupComponent_ng_template_18_a_0_Template_a_mouseleave_0_listener($event) { ɵɵrestoreView(_r2298); const ctx_r2300 = ɵɵnextContext(2); return ctx_r2300.onPresetRangeMouseLeave(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const name_r2296 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(name_r2296);
} }
function DateRangePopupComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, DateRangePopupComponent_ng_template_18_a_0_Template, 2, 1, "a", 18);
} if (rf & 2) {
    const ctx_r2269 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r2269.getObjectKeys(ctx_r2269.ranges));
} }
class DateRangePopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        this.calendarChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.resultOk = new EventEmitter(); // Emitted when done with date selecting
        this.closePicker = new EventEmitter(); // Notify outside to close the picker panel
        this.prefixCls = 'ant-calendar';
        this.showTimePicker = false;
        this.partTypeMap = { left: 0, right: 1 };
        this.disabledStartTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'start');
        };
        this.disabledEndTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'end');
        };
    }
    get hasTimePicker() {
        return !!this.showTime;
    }
    get hasFooter() {
        return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
    }
    ngOnInit() {
        // Initialization for range properties to prevent errors while later assignment
        if (this.isRange) {
            ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach(prop => this.initialArray(prop));
        }
    }
    ngOnChanges(changes) {
        if (this.isRange) {
            if (changes.value) {
                // Re-initialize all related values
                this.clearHoverValue();
                this.selectedValue = this.value;
                this.valueForRangeShow = this.normalizeRangeValue(this.value);
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
    }
    onShowTimePickerChange(show) {
        // this.panelMode = show ? 'time' : 'date';
        // this.panelModeChange.emit(this.panelMode);
        this.panelModeChange.emit(show ? 'time' : 'date');
    }
    onClickOk() {
        this.setValue(this.value);
        this.resultOk.emit();
    }
    onClickToday(value) {
        // if (this.isRange) { // Show today is not support by range
        //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
        // } else {
        if (!this.isRange) {
            // tslint:disable-next-line: no-any
            this.value = null; // Clear current value to not sync time by next step
            this.changeValueFromSelect(value);
        }
        this.closePickerPanel();
    }
    onDayHover(value) {
        if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) {
            // When right value is selected, don't do hover
            const base = this.selectedValue[0]; // Use the left of selected value as the base to decide later hoverValue
            if (base.isBeforeDay(value)) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    }
    onPanelModeChange(mode, partType) {
        if (this.isRange) {
            this.panelMode[this.getPartTypeIndex(partType)] = mode;
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    }
    onHeaderChange(value, partType) {
        if (this.isRange) {
            this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
            this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
        }
    }
    onSelectTime(value, partType) {
        if (this.isRange) {
            const newValue = this.cloneRangeDate(this.value);
            const index = this.getPartTypeIndex(partType);
            newValue[index] = this.overrideHms(value, newValue[index]);
            this.setValue(newValue);
        }
        else {
            this.setValue(this.overrideHms(value, this.value || new CandyDate())); // If not select a date currently, use today
        }
    }
    changeValueFromInput(value, partType) {
        const { date, isEnter } = value;
        if (this.isRange) {
            let newRangeValue = partType === 'left' ? [date, this.selectedValue[1]] : [this.selectedValue[0], date];
            const isValidRange = this.isValidRange(newRangeValue);
            if (isValidRange) {
                newRangeValue = sortRangeValue(newRangeValue);
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
    }
    changeValueFromSelect(value) {
        if (this.isRange) {
            const [left, right] = this.selectedValue; // NOTE: the left/right maybe not the sequence it select at the date panels
            if ((!left && !right) || (left && right)) {
                // If totally full or empty, clean up && re-assign left first
                this.hoverValue = this.selectedValue = [value];
                this.calendarChange.emit([value.clone()]);
            }
            else if (left && !right) {
                // If one of them is empty, assign the other one and sort, then set the final values
                this.clearHoverValue(); // Clean up
                this.setRangeValue('right', value);
                this.selectedValue = sortRangeValue(this.selectedValue); // Sort
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
                this.calendarChange.emit(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
        // this.selectDate.emit(value);
    }
    enablePrevNext(direction, partType) {
        if (this.isRange) {
            const [start, end] = this.valueForRangeShow;
            const showMiddle = !start.addMonths(1).isSame(end, 'month'); // One month diff then don't show middle prev/next
            if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                return showMiddle;
            }
            return true;
        }
        else {
            return true;
        }
    }
    getPanelMode(partType) {
        if (this.isRange) {
            return this.panelMode[this.getPartTypeIndex(partType)];
        }
        else {
            return this.panelMode;
        }
    }
    // Get single value or part value of a range
    getValue(partType) {
        if (this.isRange) {
            return this.value[this.getPartTypeIndex(partType)];
        }
        else {
            return this.value;
        }
    }
    getValueBySelector(partType) {
        if (this.isRange) {
            const valueShow = this.showTimePicker ? this.value : this.valueForRangeShow; // Use the real time value that without decorations when timepicker is shown up
            return valueShow[this.getPartTypeIndex(partType)];
        }
        else {
            return this.value;
        }
    }
    getPartTypeIndex(partType) {
        return this.partTypeMap[partType];
    }
    getPlaceholder(partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : this.placeholder;
    }
    hasSelectedValue() {
        return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
    }
    isAllowedSelectedValue() {
        const selectedValue = this.selectedValue;
        if (selectedValue && selectedValue[0] && selectedValue[1]) {
            return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
        }
        return false;
    }
    timePickerDisabled() {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return false;
        }
    }
    okDisabled() {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return this.value ? !isAllowedDate(this.value, this.disabledDate, this.disabledTime) : false;
        }
    }
    getTimeOptions(partType) {
        if (this.showTime && this.timeOptions) {
            return this.timeOptions instanceof Array ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
        }
        return null;
    }
    onClickPresetRange(val) {
        const value = typeof val === 'function' ? val() : val;
        if (value) {
            this.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
            this.resultOk.emit();
        }
    }
    onPresetRangeMouseLeave() {
        this.clearHoverValue();
    }
    onHoverPresetRange(val) {
        if (typeof val !== 'function') {
            this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
        }
    }
    getObjectKeys(obj) {
        return obj ? Object.keys(obj) : [];
    }
    closePickerPanel() {
        this.closePicker.emit();
    }
    clearHoverValue() {
        this.hoverValue = [];
    }
    buildTimeOptions() {
        if (this.showTime) {
            const showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                const value = this.value;
                this.timeOptions = [this.overrideTimeOptions(showTime, value[0], 'start'), this.overrideTimeOptions(showTime, value[1], 'end')];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, this.value);
            }
        }
        else {
            this.timeOptions = null;
        }
    }
    overrideTimeOptions(origin, value, partial) {
        let disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return Object.assign(Object.assign({}, origin), getTimeConfig(value, disabledTimeFn));
    }
    setValueFromInput(value, emitValue = true) {
        this.value = value;
        if (emitValue) {
            this.inputChange.emit(this.value);
        }
        this.buildTimeOptions();
    }
    // Set value and trigger change event
    setValue(value) {
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
    }
    overrideHms(from, to) {
        if (!from || !to) {
            return null;
        }
        return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
    }
    // Check if it's a valid range value
    isValidRange(value) {
        if (Array.isArray(value)) {
            const [start, end] = value;
            return !!(start && end);
        }
        return false;
    }
    normalizeRangeValue(value) {
        const [start, end] = value;
        const newStart = start || new CandyDate();
        const newEnd = end && end.isSameMonth(newStart) ? end.addMonths(1) : end || newStart.addMonths(1);
        return [newStart, newEnd];
    }
    // private isEmptyRangeValue(value: CandyDate[]): boolean {
    //   return !value || !Array.isArray(value) || value.every((val) => !val);
    // }
    // Renew and set a range value to trigger sub-component's change detection
    setRangeValue(partType, value) {
        const ref = (this.selectedValue = this.cloneRangeDate(this.selectedValue));
        ref[this.getPartTypeIndex(partType)] = value;
    }
    cloneRangeDate(value) {
        return [value[0] && value[0].clone(), value[1] && value[1].clone()];
    }
    initialArray(key) {
        if (!this[key] || !Array.isArray(this[key])) {
            this[key] = [];
        }
    }
}
/** @nocollapse */ DateRangePopupComponent.ɵfac = function DateRangePopupComponent_Factory(t) { return new (t || DateRangePopupComponent)(); };
/** @nocollapse */ DateRangePopupComponent.ɵcmp = ɵɵdefineComponent({ type: DateRangePopupComponent, selectors: [["date-range-popup"]], inputs: { isRange: "isRange", showWeek: "showWeek", locale: "locale", format: "format", placeholder: "placeholder", disabledDate: "disabledDate", disabledTime: "disabledTime", showToday: "showToday", showTime: "showTime", extraFooter: "extraFooter", ranges: "ranges", dateRender: "dateRender", popupStyle: "popupStyle", dropdownClassName: "dropdownClassName", panelMode: "panelMode", value: "value" }, outputs: { panelModeChange: "panelModeChange", calendarChange: "calendarChange", valueChange: "valueChange", inputChange: "inputChange", resultOk: "resultOk", closePicker: "closePicker" }, exportAs: ["dateRangePopup"], features: [ɵɵNgOnChangesFeature()], decls: 20, vars: 23, consts: [[3, "ngStyle"], ["tabindex", "0"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["tplCalendarInput", ""], ["tplInnerPopup", ""], ["tplFooter", ""], ["tplSinglePart", ""], ["tplRangePart", ""], ["tplRangeQuickSelector", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-calendar-range-middle"], [3, "value", "locale", "disabledDate", "format", "autoFocus", "placeholder", "valueChange"], [3, "showWeek", "locale", "showTimePicker", "timeOptions", "panelMode", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue", "enablePrev", "enableNext", "panelModeChange", "dayHover", "selectDate", "selectTime", "headerChange"], [3, "locale", "showToday", "hasTimePicker", "timePickerDisabled", "okDisabled", "extraFooter", "rangeQuickSelector", "showTimePicker", "showTimePickerChange", "clickOk", "clickToday", 4, "ngIf"], [3, "locale", "showToday", "hasTimePicker", "timePickerDisabled", "okDisabled", "extraFooter", "rangeQuickSelector", "showTimePicker", "showTimePickerChange", "clickOk", "clickToday"], [2, "outline", "none"], [3, "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"]], template: function DateRangePopupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div");
        ɵɵtemplate(3, DateRangePopupComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        ɵɵelementStart(4, "div");
        ɵɵtemplate(5, DateRangePopupComponent_ng_container_5_Template, 5, 6, "ng-container", 3);
        ɵɵtemplate(6, DateRangePopupComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
        ɵɵelementEnd();
        ɵɵtemplate(7, DateRangePopupComponent_ng_container_7_Template, 2, 1, "ng-container", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(8, DateRangePopupComponent_ng_template_8_Template, 1, 6, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        ɵɵtemplate(10, DateRangePopupComponent_ng_template_10_Template, 1, 12, "ng-template", null, 5, ɵɵtemplateRefExtractor);
        ɵɵtemplate(12, DateRangePopupComponent_ng_template_12_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        ɵɵtemplate(14, DateRangePopupComponent_ng_template_14_Template, 1, 1, "ng-template", null, 7, ɵɵtemplateRefExtractor);
        ɵɵtemplate(16, DateRangePopupComponent_ng_template_16_Template, 4, 13, "ng-template", null, 8, ɵɵtemplateRefExtractor);
        ɵɵtemplate(18, DateRangePopupComponent_ng_template_18_Template, 1, 1, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2264 = ɵɵreference(15);
        ɵɵclassMapInterpolate3("", ctx.prefixCls, "-picker-container ", ctx.dropdownClassName, " ", ctx.prefixCls, "-picker-container-placement-bottomLeft");
        ɵɵproperty("ngStyle", ctx.popupStyle);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate4("", ctx.prefixCls, " ", ctx.showWeek ? ctx.prefixCls + "-week-number" : "", " ", ctx.hasTimePicker ? ctx.prefixCls + "-time" : "", " ", ctx.isRange ? ctx.prefixCls + "-range" : "", "");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-panel");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isRange);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-date-panel");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isRange)("ngIfElse", _r2264);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isRange);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isRange);
    } }, directives: [NgStyle, NgIf, NgTemplateOutlet, CalendarInputComponent, InnerPopupComponent, CalendarFooterComponent, NgForOf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateRangePopupComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-range-popup',
                exportAs: 'dateRangePopup',
                templateUrl: 'date-range-popup.component.html'
            }]
    }], null, { isRange: [{
            type: Input
        }], showWeek: [{
            type: Input
        }], locale: [{
            type: Input
        }], format: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], disabledTime: [{
            type: Input
        }], showToday: [{
            type: Input
        }], showTime: [{
            type: Input
        }], extraFooter: [{
            type: Input
        }], ranges: [{
            type: Input
        }], dateRender: [{
            type: Input
        }], popupStyle: [{
            type: Input
        }], dropdownClassName: [{
            type: Input
        }], panelMode: [{
            type: Input
        }], value: [{
            type: Input
        }], panelModeChange: [{
            type: Output
        }], calendarChange: [{
            type: Output
        }], valueChange: [{
            type: Output
        }], inputChange: [{
            type: Output
        }], resultOk: [{
            type: Output
        }], closePicker: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class LibPackerModule {
}
/** @nocollapse */ LibPackerModule.ɵmod = ɵɵdefineNgModule({ type: LibPackerModule });
/** @nocollapse */ LibPackerModule.ɵinj = ɵɵdefineInjector({ factory: function LibPackerModule_Factory(t) { return new (t || LibPackerModule)(); }, imports: [[CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzCalendarModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(LibPackerModule, { declarations: [CalendarHeaderComponent,
        CalendarInputComponent,
        CalendarFooterComponent,
        OkButtonComponent,
        TimePickerButtonComponent,
        TodayButtonComponent,
        YearPanelComponent,
        MonthPanelComponent,
        DecadePanelComponent,
        InnerPopupComponent,
        DateRangePopupComponent], imports: [CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzCalendarModule], exports: [CalendarHeaderComponent,
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(LibPackerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzCalendarModule],
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
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$2 = ["origin"];
const _c1$1 = ["pickerInput"];
function NzPickerComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function NzPickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "input", 6, 7);
    ɵɵtemplate(3, NzPickerComponent_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 8);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2310 = ɵɵnextContext();
    const _r2314 = ɵɵreference(7);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2310.prefixCls, "-picker-input ant-input");
    ɵɵclassProp("ant-input-lg", ctx_r2310.size === "large")("ant-input-sm", ctx_r2310.size === "small")("ant-input-disabled", ctx_r2310.disabled);
    ɵɵpropertyInterpolate("value", ctx_r2310.getReadableValue());
    ɵɵpropertyInterpolate("placeholder", ctx_r2310.getPlaceholder());
    ɵɵproperty("disabled", ctx_r2310.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r2314);
} }
function NzPickerComponent_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function NzPickerComponent_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function NzPickerComponent_ng_container_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2$1 = function () { return { partType: "left" }; };
const _c3 = function () { return { partType: "right" }; };
function NzPickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", null, 7);
    ɵɵtemplate(3, NzPickerComponent_ng_container_3_ng_container_3_Template, 1, 0, "ng-container", 9);
    ɵɵelementStart(4, "span");
    ɵɵtext(5, " ~ ");
    ɵɵelementEnd();
    ɵɵtemplate(6, NzPickerComponent_ng_container_3_ng_container_6_Template, 1, 0, "ng-container", 9);
    ɵɵtemplate(7, NzPickerComponent_ng_container_3_ng_container_7_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2311 = ɵɵnextContext();
    const _r2312 = ɵɵreference(5);
    const _r2314 = ɵɵreference(7);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2311.prefixCls, "-picker-input ant-input");
    ɵɵclassProp("ant-input-lg", ctx_r2311.size === "large")("ant-input-sm", ctx_r2311.size === "small")("ant-input-disabled", ctx_r2311.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r2312)("ngTemplateOutletContext", ɵɵpureFunction0(14, _c2$1));
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2311.prefixCls, "-range-picker-separator");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r2312)("ngTemplateOutletContext", ɵɵpureFunction0(15, _c3));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2314);
} }
function NzPickerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "input", 6);
} if (rf & 2) {
    const partType_r2323 = ctx.partType;
    const ctx_r2313 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2313.prefixCls, "-range-picker-input");
    ɵɵpropertyInterpolate("value", ctx_r2313.getReadableValue(partType_r2323));
    ɵɵpropertyInterpolate("placeholder", ctx_r2313.getPlaceholder(partType_r2323));
    ɵɵproperty("disabled", ctx_r2313.disabled);
} }
function NzPickerComponent_ng_template_6_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r2326 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 12);
    ɵɵlistener("click", function NzPickerComponent_ng_template_6_i_0_Template_i_click_0_listener($event) { ɵɵrestoreView(_r2326); const ctx_r2325 = ɵɵnextContext(2); return ctx_r2325.onClickClear($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2324 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r2324.prefixCls, "-picker-clear");
} }
function NzPickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzPickerComponent_ng_template_6_i_0_Template, 1, 3, "i", 10);
    ɵɵelementStart(1, "span");
    ɵɵelement(2, "i", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2315 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r2315.disabled && !ctx_r2315.isEmptyValue(ctx_r2315.value) && ctx_r2315.allowClear);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2315.prefixCls, "-picker-icon");
} }
function NzPickerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r2328 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵlistener("@slideMotion.done", function NzPickerComponent_ng_template_8_Template_div_animation_slideMotion_done_0_listener($event) { ɵɵrestoreView(_r2328); const ctx_r2327 = ɵɵnextContext(); return ctx_r2327.animationDone(); });
    ɵɵprojection(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2316 = ɵɵnextContext();
    ɵɵstyleProp("left", ctx_r2316.currentPositionX === "start" ? "-2px" : "2px")("top", ctx_r2316.currentPositionY === "top" ? "-2px" : "2px");
    ɵɵproperty("nzNoAnimation", ctx_r2316.noAnimation)("@slideMotion", ctx_r2316.dropdownAnimation);
} }
const _c4 = ["*"];
class NzPickerComponent {
    constructor(dateHelper, changeDetector) {
        this.dateHelper = dateHelper;
        this.changeDetector = changeDetector;
        this.noAnimation = false;
        this.isRange = false;
        this.open = undefined;
        this.valueChange = new EventEmitter();
        this.openChange = new EventEmitter(); // Emitted when overlay's open state change
        this.prefixCls = 'ant-calendar';
        this.animationOpenState = false;
        this.overlayOpen = false; // Available when "open"=undefined
        this.overlayOffsetY = 0;
        this.overlayOffsetX = -2;
        this.overlayPositions = [
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
        ];
        this.dropdownAnimation = 'bottom';
        this.currentPositionX = 'start';
        this.currentPositionY = 'top';
    }
    get realOpenState() {
        // The value that really decide the open state of overlay
        return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    ngOnChanges(changes) {
        if (changes.open) {
            this.animationStart();
        }
    }
    focus() {
        if (this.isRange) {
            const firstInput = this.pickerInput.nativeElement.querySelector('input:first-child');
            firstInput.focus(); // Focus on the first input
        }
        else {
            this.pickerInput.nativeElement.focus();
        }
    }
    // Show overlay content
    showOverlay() {
        if (!this.realOpenState) {
            this.overlayOpen = true;
            this.animationStart();
            this.openChange.emit(this.overlayOpen);
            setTimeout(() => {
                if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                    this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            });
        }
    }
    hideOverlay() {
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.openChange.emit(this.overlayOpen);
            this.focus();
        }
    }
    onClickInputBox() {
        if (!this.disabled && !this.isOpenHandledByUser()) {
            this.showOverlay();
        }
    }
    onClickBackdrop() {
        this.hideOverlay();
    }
    onOverlayDetach() {
        this.hideOverlay();
    }
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    onPositionChange(position) {
        this.dropdownAnimation = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
        this.currentPositionX = position.connectionPair.originX;
        this.currentPositionY = position.connectionPair.originY;
        this.changeDetector.detectChanges(); // Take side-effects to position styles
    }
    onClickClear(event) {
        event.preventDefault();
        event.stopPropagation();
        this.value = this.isRange ? [] : null;
        this.valueChange.emit(this.value);
    }
    getReadableValue(partType) {
        let value;
        if (this.isRange) {
            value = this.value[this.getPartTypeIndex(partType)];
        }
        else {
            value = this.value;
        }
        return value ? this.dateHelper.format(value.nativeDate, this.format) : null;
    }
    getPartTypeIndex(partType) {
        return { left: 0, right: 1 }[partType];
    }
    getPlaceholder(partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : this.placeholder;
    }
    isEmptyValue(value) {
        if (value === null) {
            return true;
        }
        else if (this.isRange) {
            return !value || !Array.isArray(value) || value.every(val => !val);
        }
        else {
            return !value;
        }
    }
    // Whether open state is permanently controlled by user himself
    isOpenHandledByUser() {
        return this.open !== undefined;
    }
    animationStart() {
        if (this.realOpenState) {
            this.animationOpenState = true;
        }
    }
    animationDone() {
        if (!this.realOpenState) {
            this.animationOpenState = false;
            this.changeDetector.markForCheck();
        }
    }
}
/** @nocollapse */ NzPickerComponent.ɵfac = function NzPickerComponent_Factory(t) { return new (t || NzPickerComponent)(ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzPickerComponent.ɵcmp = ɵɵdefineComponent({ type: NzPickerComponent, selectors: [["nz-picker"]], viewQuery: function NzPickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, true);
        ɵɵviewQuery(CdkConnectedOverlay, true);
        ɵɵviewQuery(_c1$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.origin = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pickerInput = _t.first);
    } }, inputs: { noAnimation: "noAnimation", isRange: "isRange", open: "open", disabled: "disabled", placeholder: "placeholder", allowClear: "allowClear", autoFocus: "autoFocus", className: "className", format: "format", size: "size", style: "style", value: "value" }, outputs: { valueChange: "valueChange", openChange: "openChange" }, exportAs: ["nzPicker"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c4, decls: 9, vars: 12, consts: [["cdkOverlayOrigin", "", "tabindex", "0", 3, "ngStyle", "click", "keyup.enter"], ["origin", "cdkOverlayOrigin"], [4, "ngIf"], ["tplRangeInput", ""], ["tplRightRest", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "positionChange", "backdropClick", "detach"], ["readonly", "", 3, "disabled", "value", "placeholder"], ["pickerInput", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 3, "class", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "calendar"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 3, "click"], [2, "position", "relative", 3, "nzNoAnimation"]], template: function NzPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "span", 0, 1);
        ɵɵlistener("click", function NzPickerComponent_Template_span_click_0_listener($event) { return ctx.onClickInputBox(); })("keyup.enter", function NzPickerComponent_Template_span_keyup_enter_0_listener($event) { return ctx.onClickInputBox(); });
        ɵɵtemplate(2, NzPickerComponent_ng_container_2_Template, 4, 10, "ng-container", 2);
        ɵɵtemplate(3, NzPickerComponent_ng_container_3_Template, 8, 16, "ng-container", 2);
        ɵɵelementEnd();
        ɵɵtemplate(4, NzPickerComponent_ng_template_4_Template, 1, 6, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵtemplate(6, NzPickerComponent_ng_template_6_Template, 3, 4, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        ɵɵtemplate(8, NzPickerComponent_ng_template_8_Template, 2, 4, "ng-template", 5);
        ɵɵlistener("positionChange", function NzPickerComponent_Template_ng_template_positionChange_8_listener($event) { return ctx.onPositionChange($event); })("backdropClick", function NzPickerComponent_Template_ng_template_backdropClick_8_listener($event) { return ctx.onClickBackdrop(); })("detach", function NzPickerComponent_Template_ng_template_detach_8_listener($event) { return ctx.onOverlayDetach(); });
    } if (rf & 2) {
        const _r2309 = ɵɵreference(1);
        ɵɵclassMapInterpolate3("", ctx.prefixCls, "-picker ", ctx.size ? ctx.prefixCls + "-picker-" + ctx.size : "", " ", ctx.className, "");
        ɵɵproperty("ngStyle", ctx.style);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.isRange);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isRange);
        ɵɵadvance(5);
        ɵɵproperty("cdkConnectedOverlayOrigin", _r2309)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayHasBackdrop", !ctx.isOpenHandledByUser())("cdkConnectedOverlayPositions", ctx.overlayPositions);
    } }, directives: [CdkOverlayOrigin, NgStyle, NgIf, CdkConnectedOverlay, NzConnectedOverlayDirective, NgTemplateOutlet, NzIconDirective, NzNoAnimationDirective], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-picker',
                exportAs: 'nzPicker',
                templateUrl: './picker.component.html',
                animations: [slideMotion],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: DateHelperService }, { type: ChangeDetectorRef }]; }, { noAnimation: [{
            type: Input
        }], isRange: [{
            type: Input
        }], open: [{
            type: Input
        }], disabled: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], allowClear: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], className: [{
            type: Input
        }], format: [{
            type: Input
        }], size: [{
            type: Input
        }], style: [{
            type: Input
        }], value: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], openChange: [{
            type: Output
        }], origin: [{
            type: ViewChild,
            args: ['origin', { static: false }]
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: false }]
        }], pickerInput: [{
            type: ViewChild,
            args: ['pickerInput', { static: false }]
        }] }); })();

const POPUP_STYLE_PATCH = { position: 'relative' }; // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
/**
 * The base picker for all common APIs
 */
class AbstractPickerComponent {
    constructor(i18n, cdr, dateHelper, noAnimation) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.noAnimation = noAnimation;
        // --- Common API
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzPopupStyle = POPUP_STYLE_PATCH;
        this.nzOnOpenChange = new EventEmitter();
        this.isRange = false; // Indicate whether the value is a range value
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = () => void 0;
        this.onTouchedFn = () => void 0;
    }
    get realOpenState() {
        return this.picker.animationOpenState;
    } // Use picker's real open state to let re-render the picker's content when shown up
    initValue() {
        this.nzValue = this.isRange ? [] : null;
    }
    ngOnInit() {
        // Subscribe the every locale change if the nzLocale is not handled by user
        if (!this.nzLocale) {
            this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe(() => this.setLocale());
        }
        // Default value
        this.initValue();
    }
    ngOnChanges(changes) {
        if (changes.nzPopupStyle) {
            // Always assign the popup style patch
            this.nzPopupStyle = this.nzPopupStyle ? Object.assign(Object.assign({}, this.nzPopupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
        if (changes.nzPlaceHolder && changes.nzPlaceHolder.firstChange && typeof this.nzPlaceHolder !== 'undefined') {
            this.isCustomPlaceHolder = true;
        }
        if (changes.nzLocale) {
            // The nzLocale is currently handled by user
            this.setDefaultPlaceHolder();
        }
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    closeOverlay() {
        this.picker.hideOverlay();
    }
    /**
     * Common handle for value changes
     * @param value changed value
     */
    onValueChange(value) {
        this.nzValue = value;
        if (this.isRange) {
            const vAsRange = this.nzValue;
            if (vAsRange.length) {
                this.onChangeFn([vAsRange[0].nativeDate, vAsRange[1].nativeDate]);
            }
            else {
                this.onChangeFn([]);
            }
        }
        else {
            if (this.nzValue) {
                this.onChangeFn(this.nzValue.nativeDate);
            }
            else {
                this.onChangeFn(null);
            }
        }
        this.onTouchedFn();
    }
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    onOpenChange(open) {
        this.nzOnOpenChange.emit(open);
    }
    writeValue(value) {
        this.setValue(value);
        this.cdr.markForCheck();
    }
    // tslint:disable-next-line:no-any
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    // tslint:disable-next-line:no-any
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    }
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    setLocale() {
        this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
        this.cdr.markForCheck();
    }
    setDefaultPlaceHolder() {
        if (!this.isCustomPlaceHolder && this.nzLocale) {
            this.nzPlaceHolder = this.isRange ? this.nzLocale.lang.rangePlaceholder : this.nzLocale.lang.placeholder;
        }
    }
    // Safe way of setting value with default
    setValue(value) {
        if (this.isRange) {
            this.nzValue = value ? value.map(val => new CandyDate(val)) : [];
        }
        else {
            this.nzValue = value ? new CandyDate(value) : null;
        }
    }
}
/** @nocollapse */ AbstractPickerComponent.ɵfac = function AbstractPickerComponent_Factory(t) { return new (t || AbstractPickerComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(NzNoAnimationDirective)); };
/** @nocollapse */ AbstractPickerComponent.ɵdir = ɵɵdefineDirective({ type: AbstractPickerComponent, viewQuery: function AbstractPickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(NzPickerComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.picker = _t.first);
    } }, inputs: { nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzOpen: "nzOpen", nzClassName: "nzClassName", nzDisabledDate: "nzDisabledDate", nzLocale: "nzLocale", nzPlaceHolder: "nzPlaceHolder", nzPopupStyle: "nzPopupStyle", nzDropdownClassName: "nzDropdownClassName", nzSize: "nzSize", nzStyle: "nzStyle", nzFormat: "nzFormat", nzValue: "nzValue" }, outputs: { nzOnOpenChange: "nzOnOpenChange" }, features: [ɵɵNgOnChangesFeature()] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "nzAllowClear", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "nzAutoFocus", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "nzOpen", void 0);

class DateRangePickerComponent extends AbstractPickerComponent {
    constructor(i18n, cdr, dateHelper, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.showWeek = false; // Should show as week picker
        this.nzShowToday = true;
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnCalendarChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
    }
    get nzShowTime() {
        return this._showTime;
    }
    set nzShowTime(value) {
        this._showTime = typeof value === 'object' ? value : toBoolean(value);
    }
    get realShowToday() {
        // Range not support nzShowToday currently
        return !this.isRange && this.nzShowToday;
    }
    ngOnInit() {
        super.ngOnInit();
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
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
        if (changes.nzShowTime || changes.nzStyle) {
            this.setFixedPickerStyle();
        }
    }
    /**
     * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
     */
    onValueChange(value, isEnter = false) {
        super.onValueChange(value);
        if (!this.nzShowTime || isEnter) {
            this.closeOverlay();
        }
    }
    // Emit nzOnCalendarChange when select date by nz-range-picker
    onCalendarChange(value) {
        if (this.isRange) {
            const rangeValue = value.map(x => x.nativeDate);
            this.nzOnCalendarChange.emit(rangeValue);
        }
    }
    // Emitted when done with date selecting
    onResultOk() {
        if (this.isRange) {
            const value = this.nzValue;
            if (value.length) {
                this.nzOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.nzValue) {
                this.nzOnOk.emit(this.nzValue.nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
        this.closeOverlay();
    }
    onOpenChange(open) {
        this.nzOnOpenChange.emit(open);
    }
    // Setup fixed style for picker
    setFixedPickerStyle() {
        const showTimeFixes = {};
        if (this.nzShowTime) {
            showTimeFixes.width = this.isRange ? '350px' : '195px';
        }
        this.pickerStyle = Object.assign(Object.assign({}, showTimeFixes), this.nzStyle);
    }
}
/** @nocollapse */ DateRangePickerComponent.ɵfac = function DateRangePickerComponent_Factory(t) { return new (t || DateRangePickerComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(NzNoAnimationDirective)); };
/** @nocollapse */ DateRangePickerComponent.ɵcmp = ɵɵdefineComponent({ type: DateRangePickerComponent, selectors: [["ng-component"]], inputs: { nzDateRender: "nzDateRender", nzDisabledTime: "nzDisabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", nzShowToday: "nzShowToday", nzMode: "nzMode", nzRanges: "nzRanges", nzShowTime: "nzShowTime" }, outputs: { nzOnPanelChange: "nzOnPanelChange", nzOnCalendarChange: "nzOnCalendarChange", nzOnOk: "nzOnOk" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], decls: 0, vars: 0, template: function DateRangePickerComponent_Template(rf, ctx) { }, encapsulation: 2 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], DateRangePickerComponent.prototype, "nzShowToday", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateRangePickerComponent, [{
        type: Component,
        args: [{
                template: `` // Just for rollup
            }]
    }], function () { return [{ type: NzI18nService }, { type: ChangeDetectorRef }, { type: DateHelperService }, { type: NzNoAnimationDirective }]; }, { nzDateRender: [{
            type: Input
        }], nzDisabledTime: [{
            type: Input
        }], nzRenderExtraFooter: [{
            type: Input
        }], nzShowToday: [{
            type: Input
        }], nzMode: [{
            type: Input
        }], nzRanges: [{
            type: Input
        }], nzOnPanelChange: [{
            type: Output
        }], nzOnCalendarChange: [{
            type: Output
        }], nzShowTime: [{
            type: Input
        }], nzOnOk: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * The base picker for header panels, current support: Year/Month
 */
class HeaderPickerComponent extends AbstractPickerComponent {
    constructor(i18n, cdr, dateHelper, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
    }
    ngOnInit() {
        super.ngOnInit();
        this.panelMode = this.endPanelMode;
        const allHeaderPanels = ['decade', 'year', 'month'];
        this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
    }
    onPanelModeChange(mode) {
        if (this.supportPanels.indexOf(mode) > -1) {
            this.panelMode = mode;
        }
        else {
            // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            this.panelMode = this.endPanelMode;
        }
    }
    onChooseValue(mode, value) {
        if (this.endPanelMode === mode) {
            super.onValueChange(value);
            this.closeOverlay();
        }
    }
    onOpenChange(open) {
        if (!open) {
            this.cleanUp();
        }
        this.nzOnOpenChange.emit(open);
    }
    // Restore some initial props to let open as new in next time
    cleanUp() {
        this.panelMode = this.endPanelMode;
    }
}
/** @nocollapse */ HeaderPickerComponent.ɵfac = function HeaderPickerComponent_Factory(t) { return new (t || HeaderPickerComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(NzNoAnimationDirective)); };
/** @nocollapse */ HeaderPickerComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderPickerComponent, selectors: [["ng-component"]], inputs: { nzPlaceHolder: "nzPlaceHolder", nzRenderExtraFooter: "nzRenderExtraFooter", nzDefaultValue: "nzDefaultValue", nzFormat: "nzFormat" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], decls: 0, vars: 0, template: function HeaderPickerComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeaderPickerComponent, [{
        type: Component,
        args: [{
                template: ``
            }]
    }], function () { return [{ type: NzI18nService }, { type: ChangeDetectorRef }, { type: DateHelperService }, { type: NzNoAnimationDirective }]; }, { nzPlaceHolder: [{
            type: Input
        }], nzRenderExtraFooter: [{
            type: Input
        }], nzDefaultValue: [{
            type: Input
        }], nzFormat: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzDatePickerComponent_date_range_popup_1_Template(rf, ctx) { if (rf & 1) {
    const _r2331 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "date-range-popup", 2);
    ɵɵlistener("panelModeChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_panelModeChange_0_listener($event) { ɵɵrestoreView(_r2331); const ctx_r2330 = ɵɵnextContext(); return ctx_r2330.nzOnPanelChange.emit($event); })("valueChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_valueChange_0_listener($event) { ɵɵrestoreView(_r2331); const ctx_r2332 = ɵɵnextContext(); return ctx_r2332.onValueChange($event); })("inputChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_inputChange_0_listener($event) { ɵɵrestoreView(_r2331); const ctx_r2333 = ɵɵnextContext(); return ctx_r2333.onValueChange($event, true); })("calendarChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_calendarChange_0_listener($event) { ɵɵrestoreView(_r2331); const ctx_r2334 = ɵɵnextContext(); return ctx_r2334.onCalendarChange($event); })("resultOk", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_resultOk_0_listener($event) { ɵɵrestoreView(_r2331); const ctx_r2335 = ɵɵnextContext(); return ctx_r2335.onResultOk(); })("closePicker", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_closePicker_0_listener($event) { ɵɵrestoreView(_r2331); const ctx_r2336 = ɵɵnextContext(); return ctx_r2336.closeOverlay(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2329 = ɵɵnextContext();
    ɵɵproperty("isRange", ctx_r2329.isRange)("showWeek", ctx_r2329.showWeek)("panelMode", ctx_r2329.nzMode)("value", ctx_r2329.nzValue)("locale", ctx_r2329.nzLocale == null ? null : ctx_r2329.nzLocale.lang)("showToday", ctx_r2329.realShowToday)("showTime", ctx_r2329.nzShowTime)("format", ctx_r2329.nzFormat)("dateRender", ctx_r2329.nzDateRender)("disabledDate", ctx_r2329.nzDisabledDate)("disabledTime", ctx_r2329.nzDisabledTime)("placeholder", ctx_r2329.nzPlaceHolder)("dropdownClassName", ctx_r2329.nzDropdownClassName)("popupStyle", ctx_r2329.nzPopupStyle)("extraFooter", ctx_r2329.extraFooter)("ranges", ctx_r2329.nzRanges);
} }
class NzDatePickerComponent extends DateRangePickerComponent {
    constructor(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.noAnimation = noAnimation;
        this.isRange = false;
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
/** @nocollapse */ NzDatePickerComponent.ɵfac = function NzDatePickerComponent_Factory(t) { return new (t || NzDatePickerComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzDatePickerComponent.ɵcmp = ɵɵdefineComponent({ type: NzDatePickerComponent, selectors: [["nz-date-picker"]], exportAs: ["nzDatePicker"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: forwardRef((() => NzDatePickerComponent))
            }
        ]), ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker", 4, "ngIf"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker"]], template: function NzDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-picker", 0);
        ɵɵlistener("valueChange", function NzDatePickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzDatePickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        ɵɵtemplate(1, NzDatePickerComponent_date_range_popup_1_Template, 1, 16, "date-range-popup", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleSanitizer(ɵɵdefaultStyleSanitizer);
        ɵɵstyleMap(ctx.pickerStyle);
        ɵɵclassMap(ctx.nzClassName);
        ɵɵproperty("isRange", ctx.isRange)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.realOpenState);
    } }, directives: [NzPickerComponent, NgIf, DateRangePopupComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDatePickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-date-picker',
                exportAs: 'nzDatePicker',
                templateUrl: './date-range-picker.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((() => NzDatePickerComponent))
                    }
                ]
            }]
    }], function () { return [{ type: NzI18nService }, { type: ChangeDetectorRef }, { type: DateHelperService }, { type: Renderer2 }, { type: ElementRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzMonthPickerComponent_div_1_calendar_footer_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "calendar-footer", 8);
} if (rf & 2) {
    const ctx_r2338 = ɵɵnextContext(2);
    ɵɵproperty("extraFooter", ctx_r2338.extraFooter);
} }
function NzMonthPickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2340 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 2);
    ɵɵelementStart(2, "div", 3);
    ɵɵelementStart(3, "div", 4);
    ɵɵelementStart(4, "div", 5);
    ɵɵelementStart(5, "calendar-header", 6);
    ɵɵlistener("panelModeChange", function NzMonthPickerComponent_div_1_Template_calendar_header_panelModeChange_5_listener($event) { ɵɵrestoreView(_r2340); const ctx_r2339 = ɵɵnextContext(); return ctx_r2339.onPanelModeChange($event); })("chooseYear", function NzMonthPickerComponent_div_1_Template_calendar_header_chooseYear_5_listener($event) { ɵɵrestoreView(_r2340); const ctx_r2341 = ɵɵnextContext(); return ctx_r2341.onChooseValue("year", $event); })("chooseMonth", function NzMonthPickerComponent_div_1_Template_calendar_header_chooseMonth_5_listener($event) { ɵɵrestoreView(_r2340); const ctx_r2342 = ɵɵnextContext(); return ctx_r2342.onChooseValue("month", $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(6, NzMonthPickerComponent_div_1_calendar_footer_6_Template, 1, 1, "calendar-footer", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2337 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("ant-calendar-picker-container ", ctx_r2337.nzDropdownClassName, " ant-calendar-picker-container-placement-bottomLeft");
    ɵɵproperty("ngStyle", ctx_r2337.nzPopupStyle);
    ɵɵadvance(4);
    ɵɵproperty("disabledMonth", ctx_r2337.nzDisabledDate)("disabledYear", ctx_r2337.nzDisabledDate)("panelMode", ctx_r2337.panelMode)("value", ctx_r2337.nzValue)("locale", ctx_r2337.nzLocale.lang)("enablePrev", true)("enableNext", true);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2337.extraFooter);
} }
class NzMonthPickerComponent extends HeaderPickerComponent {
    constructor(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.noAnimation = noAnimation;
        this.nzFormat = 'yyyy-MM';
        this.endPanelMode = 'month';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
/** @nocollapse */ NzMonthPickerComponent.ɵfac = function NzMonthPickerComponent_Factory(t) { return new (t || NzMonthPickerComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzMonthPickerComponent.ɵcmp = ɵɵdefineComponent({ type: NzMonthPickerComponent, selectors: [["nz-month-picker"]], inputs: { nzFormat: "nzFormat" }, exportAs: ["nzMonthPicker"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: forwardRef((() => NzMonthPickerComponent))
            }
        ]), ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [4, "ngIf"], [3, "ngStyle"], ["tabindex", "0", 1, "ant-calendar", "ant-calendar-month", "ant-calendar-month-calendar"], [1, "ant-calendar-month-calendar-content"], [1, "ant-calendar-month-header-wrap"], [3, "disabledMonth", "disabledYear", "panelMode", "value", "locale", "enablePrev", "enableNext", "panelModeChange", "chooseYear", "chooseMonth"], [3, "extraFooter", 4, "ngIf"], [3, "extraFooter"]], template: function NzMonthPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-picker", 0);
        ɵɵlistener("valueChange", function NzMonthPickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzMonthPickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        ɵɵtemplate(1, NzMonthPickerComponent_div_1_Template, 7, 12, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleSanitizer(ɵɵdefaultStyleSanitizer);
        ɵɵstyleMap(ctx.nzStyle);
        ɵɵclassMap(ctx.nzClassName);
        ɵɵproperty("isRange", false)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.realOpenState);
    } }, directives: [NzPickerComponent, NgIf, NgStyle, CalendarHeaderComponent, CalendarFooterComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMonthPickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-month-picker',
                exportAs: 'nzMonthPicker',
                templateUrl: './header-picker.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((() => NzMonthPickerComponent))
                    }
                ]
            }]
    }], function () { return [{ type: NzI18nService }, { type: ChangeDetectorRef }, { type: DateHelperService }, { type: Renderer2 }, { type: ElementRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzFormat: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzRangePickerComponent_date_range_popup_1_Template(rf, ctx) { if (rf & 1) {
    const _r2345 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "date-range-popup", 2);
    ɵɵlistener("panelModeChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_panelModeChange_0_listener($event) { ɵɵrestoreView(_r2345); const ctx_r2344 = ɵɵnextContext(); return ctx_r2344.nzOnPanelChange.emit($event); })("valueChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_valueChange_0_listener($event) { ɵɵrestoreView(_r2345); const ctx_r2346 = ɵɵnextContext(); return ctx_r2346.onValueChange($event); })("inputChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_inputChange_0_listener($event) { ɵɵrestoreView(_r2345); const ctx_r2347 = ɵɵnextContext(); return ctx_r2347.onValueChange($event, true); })("calendarChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_calendarChange_0_listener($event) { ɵɵrestoreView(_r2345); const ctx_r2348 = ɵɵnextContext(); return ctx_r2348.onCalendarChange($event); })("resultOk", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_resultOk_0_listener($event) { ɵɵrestoreView(_r2345); const ctx_r2349 = ɵɵnextContext(); return ctx_r2349.onResultOk(); })("closePicker", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_closePicker_0_listener($event) { ɵɵrestoreView(_r2345); const ctx_r2350 = ɵɵnextContext(); return ctx_r2350.closeOverlay(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2343 = ɵɵnextContext();
    ɵɵproperty("isRange", ctx_r2343.isRange)("showWeek", ctx_r2343.showWeek)("panelMode", ctx_r2343.nzMode)("value", ctx_r2343.nzValue)("locale", ctx_r2343.nzLocale == null ? null : ctx_r2343.nzLocale.lang)("showToday", ctx_r2343.realShowToday)("showTime", ctx_r2343.nzShowTime)("format", ctx_r2343.nzFormat)("dateRender", ctx_r2343.nzDateRender)("disabledDate", ctx_r2343.nzDisabledDate)("disabledTime", ctx_r2343.nzDisabledTime)("placeholder", ctx_r2343.nzPlaceHolder)("dropdownClassName", ctx_r2343.nzDropdownClassName)("popupStyle", ctx_r2343.nzPopupStyle)("extraFooter", ctx_r2343.extraFooter)("ranges", ctx_r2343.nzRanges);
} }
class NzRangePickerComponent extends DateRangePickerComponent {
    constructor(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.noAnimation = noAnimation;
        this.isRange = true;
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
/** @nocollapse */ NzRangePickerComponent.ɵfac = function NzRangePickerComponent_Factory(t) { return new (t || NzRangePickerComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzRangePickerComponent.ɵcmp = ɵɵdefineComponent({ type: NzRangePickerComponent, selectors: [["nz-range-picker"]], exportAs: ["nzRangePicker"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: forwardRef((() => NzRangePickerComponent))
            }
        ]), ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker", 4, "ngIf"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker"]], template: function NzRangePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-picker", 0);
        ɵɵlistener("valueChange", function NzRangePickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzRangePickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        ɵɵtemplate(1, NzRangePickerComponent_date_range_popup_1_Template, 1, 16, "date-range-popup", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleSanitizer(ɵɵdefaultStyleSanitizer);
        ɵɵstyleMap(ctx.pickerStyle);
        ɵɵclassMap(ctx.nzClassName);
        ɵɵproperty("isRange", ctx.isRange)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.realOpenState);
    } }, directives: [NzPickerComponent, NgIf, DateRangePopupComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzRangePickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-range-picker',
                exportAs: 'nzRangePicker',
                templateUrl: './date-range-picker.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((() => NzRangePickerComponent))
                    }
                ]
            }]
    }], function () { return [{ type: NzI18nService }, { type: ChangeDetectorRef }, { type: DateHelperService }, { type: Renderer2 }, { type: ElementRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzWeekPickerComponent_date_range_popup_1_Template(rf, ctx) { if (rf & 1) {
    const _r2353 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "date-range-popup", 2);
    ɵɵlistener("panelModeChange", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_panelModeChange_0_listener($event) { ɵɵrestoreView(_r2353); const ctx_r2352 = ɵɵnextContext(); return ctx_r2352.nzOnPanelChange.emit($event); })("valueChange", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_valueChange_0_listener($event) { ɵɵrestoreView(_r2353); const ctx_r2354 = ɵɵnextContext(); return ctx_r2354.onValueChange($event); })("inputChange", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_inputChange_0_listener($event) { ɵɵrestoreView(_r2353); const ctx_r2355 = ɵɵnextContext(); return ctx_r2355.onValueChange($event, true); })("calendarChange", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_calendarChange_0_listener($event) { ɵɵrestoreView(_r2353); const ctx_r2356 = ɵɵnextContext(); return ctx_r2356.onCalendarChange($event); })("resultOk", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_resultOk_0_listener($event) { ɵɵrestoreView(_r2353); const ctx_r2357 = ɵɵnextContext(); return ctx_r2357.onResultOk(); })("closePicker", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_closePicker_0_listener($event) { ɵɵrestoreView(_r2353); const ctx_r2358 = ɵɵnextContext(); return ctx_r2358.closeOverlay(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2351 = ɵɵnextContext();
    ɵɵproperty("isRange", ctx_r2351.isRange)("showWeek", ctx_r2351.showWeek)("panelMode", ctx_r2351.nzMode)("value", ctx_r2351.nzValue)("locale", ctx_r2351.nzLocale == null ? null : ctx_r2351.nzLocale.lang)("showToday", ctx_r2351.realShowToday)("showTime", ctx_r2351.nzShowTime)("format", ctx_r2351.nzFormat)("dateRender", ctx_r2351.nzDateRender)("disabledDate", ctx_r2351.nzDisabledDate)("disabledTime", ctx_r2351.nzDisabledTime)("placeholder", ctx_r2351.nzPlaceHolder)("dropdownClassName", ctx_r2351.nzDropdownClassName)("popupStyle", ctx_r2351.nzPopupStyle)("extraFooter", ctx_r2351.extraFooter)("ranges", ctx_r2351.nzRanges);
} }
class NzWeekPickerComponent extends DateRangePickerComponent {
    constructor(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.noAnimation = noAnimation;
        this.showWeek = true;
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
/** @nocollapse */ NzWeekPickerComponent.ɵfac = function NzWeekPickerComponent_Factory(t) { return new (t || NzWeekPickerComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzWeekPickerComponent.ɵcmp = ɵɵdefineComponent({ type: NzWeekPickerComponent, selectors: [["nz-week-picker"]], exportAs: ["nzWeekPicker"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: forwardRef((() => NzWeekPickerComponent))
            }
        ]), ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker", 4, "ngIf"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker"]], template: function NzWeekPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-picker", 0);
        ɵɵlistener("valueChange", function NzWeekPickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzWeekPickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        ɵɵtemplate(1, NzWeekPickerComponent_date_range_popup_1_Template, 1, 16, "date-range-popup", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleSanitizer(ɵɵdefaultStyleSanitizer);
        ɵɵstyleMap(ctx.pickerStyle);
        ɵɵclassMap(ctx.nzClassName);
        ɵɵproperty("isRange", ctx.isRange)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.realOpenState);
    } }, directives: [NzPickerComponent, NgIf, DateRangePopupComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzWeekPickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-week-picker',
                exportAs: 'nzWeekPicker',
                templateUrl: './date-range-picker.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((() => NzWeekPickerComponent))
                    }
                ]
            }]
    }], function () { return [{ type: NzI18nService }, { type: ChangeDetectorRef }, { type: DateHelperService }, { type: Renderer2 }, { type: ElementRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzYearPickerComponent_div_1_calendar_footer_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "calendar-footer", 8);
} if (rf & 2) {
    const ctx_r2360 = ɵɵnextContext(2);
    ɵɵproperty("extraFooter", ctx_r2360.extraFooter);
} }
function NzYearPickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2362 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 2);
    ɵɵelementStart(2, "div", 3);
    ɵɵelementStart(3, "div", 4);
    ɵɵelementStart(4, "div", 5);
    ɵɵelementStart(5, "calendar-header", 6);
    ɵɵlistener("panelModeChange", function NzYearPickerComponent_div_1_Template_calendar_header_panelModeChange_5_listener($event) { ɵɵrestoreView(_r2362); const ctx_r2361 = ɵɵnextContext(); return ctx_r2361.onPanelModeChange($event); })("chooseYear", function NzYearPickerComponent_div_1_Template_calendar_header_chooseYear_5_listener($event) { ɵɵrestoreView(_r2362); const ctx_r2363 = ɵɵnextContext(); return ctx_r2363.onChooseValue("year", $event); })("chooseMonth", function NzYearPickerComponent_div_1_Template_calendar_header_chooseMonth_5_listener($event) { ɵɵrestoreView(_r2362); const ctx_r2364 = ɵɵnextContext(); return ctx_r2364.onChooseValue("month", $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(6, NzYearPickerComponent_div_1_calendar_footer_6_Template, 1, 1, "calendar-footer", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2359 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("ant-calendar-picker-container ", ctx_r2359.nzDropdownClassName, " ant-calendar-picker-container-placement-bottomLeft");
    ɵɵproperty("ngStyle", ctx_r2359.nzPopupStyle);
    ɵɵadvance(4);
    ɵɵproperty("disabledMonth", ctx_r2359.nzDisabledDate)("disabledYear", ctx_r2359.nzDisabledDate)("panelMode", ctx_r2359.panelMode)("value", ctx_r2359.nzValue)("locale", ctx_r2359.nzLocale.lang)("enablePrev", true)("enableNext", true);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2359.extraFooter);
} }
class NzYearPickerComponent extends HeaderPickerComponent {
    constructor(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.noAnimation = noAnimation;
        this.nzFormat = 'yyyy';
        this.endPanelMode = 'year';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
/** @nocollapse */ NzYearPickerComponent.ɵfac = function NzYearPickerComponent_Factory(t) { return new (t || NzYearPickerComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzYearPickerComponent.ɵcmp = ɵɵdefineComponent({ type: NzYearPickerComponent, selectors: [["nz-year-picker"]], inputs: { nzFormat: "nzFormat" }, exportAs: ["nzYearPicker"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: forwardRef((() => NzYearPickerComponent))
            }
        ]), ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [4, "ngIf"], [3, "ngStyle"], ["tabindex", "0", 1, "ant-calendar", "ant-calendar-month", "ant-calendar-month-calendar"], [1, "ant-calendar-month-calendar-content"], [1, "ant-calendar-month-header-wrap"], [3, "disabledMonth", "disabledYear", "panelMode", "value", "locale", "enablePrev", "enableNext", "panelModeChange", "chooseYear", "chooseMonth"], [3, "extraFooter", 4, "ngIf"], [3, "extraFooter"]], template: function NzYearPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-picker", 0);
        ɵɵlistener("valueChange", function NzYearPickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzYearPickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        ɵɵtemplate(1, NzYearPickerComponent_div_1_Template, 7, 12, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleSanitizer(ɵɵdefaultStyleSanitizer);
        ɵɵstyleMap(ctx.nzStyle);
        ɵɵclassMap(ctx.nzClassName);
        ɵɵproperty("isRange", false)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.realOpenState);
    } }, directives: [NzPickerComponent, NgIf, NgStyle, CalendarHeaderComponent, CalendarFooterComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzYearPickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-year-picker',
                exportAs: 'nzYearPicker',
                templateUrl: './header-picker.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((() => NzYearPickerComponent))
                    }
                ]
            }]
    }], function () { return [{ type: NzI18nService }, { type: ChangeDetectorRef }, { type: DateHelperService }, { type: Renderer2 }, { type: ElementRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzFormat: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDatePickerModule {
}
/** @nocollapse */ NzDatePickerModule.ɵmod = ɵɵdefineNgModule({ type: NzDatePickerModule });
/** @nocollapse */ NzDatePickerModule.ɵinj = ɵɵdefineInjector({ factory: function NzDatePickerModule_Factory(t) { return new (t || NzDatePickerModule)(); }, imports: [[CommonModule, OverlayModule, LibPackerModule, NzIconModule, NzOverlayModule, NzNoAnimationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzDatePickerModule, { declarations: [HeaderPickerComponent,
        DateRangePickerComponent,
        NzPickerComponent,
        NzDatePickerComponent,
        NzMonthPickerComponent,
        NzYearPickerComponent,
        NzWeekPickerComponent,
        NzRangePickerComponent], imports: [CommonModule, OverlayModule, LibPackerModule, NzIconModule, NzOverlayModule, NzNoAnimationModule], exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDatePickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, LibPackerModule, NzIconModule, NzOverlayModule, NzNoAnimationModule],
                exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent],
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

export { NzDatePickerComponent, NzDatePickerModule, NzMonthPickerComponent, NzRangePickerComponent, NzWeekPickerComponent, NzYearPickerComponent };
//# sourceMappingURL=ng-zorro-antd-date-picker.js.map
