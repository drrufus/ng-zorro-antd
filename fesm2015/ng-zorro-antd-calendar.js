import { NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, NgIf, NgForOf, NgClass, CommonModule, NgComponentOutlet, NgStyle, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { ɵɵelementContainer, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵproperty, ɵɵpureFunction1, ɵɵelement, ɵɵsanitizeHtml, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵclassMapInterpolate1, ɵɵattribute, ɵɵtextInterpolate1, ɵɵtextInterpolate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵdefineComponent, ɵsetClassMetadata, Component, Input, ɵɵclassMapInterpolate2, ɵɵpropertyInterpolate, ɵɵlistener, EventEmitter, ɵɵdirectiveInject, ɵɵNgOnChangesFeature, ViewEncapsulation, ChangeDetectionStrategy, Output, ɵɵdefineDirective, Directive, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵallocHostVars, ɵɵstyleProp, ɵɵclassProp, ChangeDetectorRef, ɵɵcontentQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, forwardRef, ContentChild, HostBinding, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { NgControlStatus, NgModel, NG_VALUE_ACCESSOR, FormsModule, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModelGroup, NgForm } from '@angular/forms';
import { NzI18nService, DateHelperService, NzI18nModule, NzI18nPipe } from 'ng-zorro-antd/i18n';
import { NzRadioGroupComponent, NzRadioButtonComponent, NzRadioModule, NzRadioComponent } from 'ng-zorro-antd/radio';
import { NzSelectComponent, NzOptionComponent, NzSelectModule, NzOptionContainerComponent, NzOptionGroupComponent, NzSelectTopControlComponent } from 'ng-zorro-antd/select';
import { isTemplateRef, isNonEmptyString, CandyDate, valueFunctionProp, InputBoolean } from 'ng-zorro-antd/core';
import { __decorate, __metadata } from 'tslib';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["date-table-cell", ""];
function DateTableCellComponent_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
function DateTableCellComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DateTableCellComponent_ng_container_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1967 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1967.cell.dateCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r1967.cell.value));
} }
function DateTableCellComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1968 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r1968.cell.dateCellRender, ɵɵsanitizeHtml);
} }
function DateTableCellComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1969 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r1969.prefixCls, "-date");
    ɵɵattribute("aria-selected", ctx_r1969.cell.isSelected)("aria-disabled", ctx_r1969.cell.isDisabled);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1969.cell.content, " ");
} }
function DateTableCellComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainerStart(1, 0);
    ɵɵtemplate(2, DateTableCellComponent_ng_container_1_ng_container_2_Template, 2, 4, "ng-container", 1);
    ɵɵtemplate(3, DateTableCellComponent_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 1);
    ɵɵtemplate(4, DateTableCellComponent_ng_container_1_ng_container_4_Template, 3, 6, "ng-container", 2);
    ɵɵelementContainerEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1965 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1965.isTemplateRef(ctx_r1965.cell.dateCellRender));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1965.isNonEmptyString(ctx_r1965.cell.dateCellRender));
} }
function DateTableCellComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function DateTableCellComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DateTableCellComponent_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1971 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1971.cell.dateFullCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r1971.cell.value));
} }
function DateTableCellComponent_ng_container_2_ng_template_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function DateTableCellComponent_ng_container_2_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, DateTableCellComponent_ng_container_2_ng_template_3_div_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1975 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("", ctx_r1975.prefixCls, "-content");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1975.cell.dateCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c1, ctx_r1975.cell.value));
} }
function DateTableCellComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵtemplate(2, DateTableCellComponent_ng_container_2_ng_template_3_div_2_Template, 2, 7, "div", 8);
} if (rf & 2) {
    const ctx_r1973 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1973.prefixCls, "-value");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1973.cell.content);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1973.cell.dateCellRender);
} }
function DateTableCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵtemplate(2, DateTableCellComponent_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 6);
    ɵɵtemplate(3, DateTableCellComponent_ng_container_2_ng_template_3_Template, 3, 5, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r1972 = ɵɵreference(4);
    const ctx_r1966 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1966.cell.dateFullCellRender)("ngIfElse", _r1972);
} }
class DateTableCellComponent {
    constructor() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
}
/** @nocollapse */ DateTableCellComponent.ɵfac = function DateTableCellComponent_Factory(t) { return new (t || DateTableCellComponent)(); };
/** @nocollapse */ DateTableCellComponent.ɵcmp = ɵɵdefineComponent({ type: DateTableCellComponent, selectors: [["", "date-table-cell", ""]], inputs: { prefixCls: "prefixCls", cell: "cell" }, exportAs: ["dateTableCell"], attrs: _c0, decls: 3, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [1, "ant-fullcalendar-date"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""], [3, "class", 4, "ngIf"]], template: function DateTableCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, DateTableCellComponent_ng_container_1_Template, 5, 3, "ng-container", 1);
        ɵɵtemplate(2, DateTableCellComponent_ng_container_2_Template, 5, 2, "ng-container", 1);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.prefixCls);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "ant-calendar");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "ant-fullcalendar");
    } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateTableCellComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: '[date-table-cell]',
                exportAs: 'dateTableCell',
                templateUrl: './date-table-cell.component.html',
                styles: []
            }]
    }], null, { prefixCls: [{
            type: Input
        }], cell: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function DateTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 5);
    ɵɵelementStart(1, "span");
    ɵɵtext(2, "x");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1954 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("", ctx_r1954.prefixCls, "-column-header ", ctx_r1954.prefixCls, "-week-number-header");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r1954.prefixCls, "-column-header-inner");
} }
function DateTableComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 6);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const cell_r1957 = ctx.$implicit;
    const ctx_r1955 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1955.prefixCls, "-column-header");
    ɵɵpropertyInterpolate("title", cell_r1957.short);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r1955.prefixCls, "-column-header-inner");
    ɵɵadvance(1);
    ɵɵtextInterpolate(cell_r1957.veryShort);
} }
function DateTableComponent_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r1958 = ɵɵnextContext().$implicit;
    const ctx_r1959 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1959.prefixCls, "-week-number-cell");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", row_r1958.weekNum, " ");
} }
function DateTableComponent_tr_6_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵlistener("click", function DateTableComponent_tr_6_td_2_Template_td_click_0_listener($event) { const cell_r1962 = ctx.$implicit; return cell_r1962.isDisabled ? null : cell_r1962.onClick(); })("mouseenter", function DateTableComponent_tr_6_td_2_Template_td_mouseenter_0_listener($event) { const cell_r1962 = ctx.$implicit; return cell_r1962.isDisabled ? null : cell_r1962.onMouseEnter(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const cell_r1962 = ctx.$implicit;
    const ctx_r1960 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", cell_r1962.title);
    ɵɵproperty("ngClass", cell_r1962.classMap)("prefixCls", ctx_r1960.prefixCls)("cell", cell_r1962);
} }
function DateTableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 7);
    ɵɵtemplate(1, DateTableComponent_tr_6_td_1_Template, 2, 4, "td", 8);
    ɵɵtemplate(2, DateTableComponent_tr_6_td_2_Template, 1, 4, "td", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r1958 = ctx.$implicit;
    const ctx_r1956 = ɵɵnextContext();
    ɵɵproperty("ngClass", row_r1958.classMap);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", row_r1958.weekNum);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", row_r1958.dateCells)("ngForTrackBy", ctx_r1956.trackByDateFn);
} }
const DATE_ROW_NUM = 6;
const DATE_COL_NUM = 7;
class DateTableComponent {
    constructor(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.prefixCls = 'ant-calendar';
        this.showWeek = false;
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.valueChange = new EventEmitter();
    }
    set value(date) {
        // Show today by default
        this._value = this.activeDate = date || new CandyDate();
    }
    get value() {
        return this._value;
    }
    ngOnInit() {
        this.render();
    }
    ngOnChanges(changes) {
        if (this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    }
    isDateRealChange(change) {
        if (change) {
            const previousValue = change.previousValue;
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((value, index) => {
                        const previousCandyDate = previousValue[index];
                        return previousCandyDate instanceof CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                    }));
            }
            else {
                return !this.isSameDate(previousValue, currentValue);
            }
        }
        return false;
    }
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    }
    render() {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    }
    changeValueFromInside(value) {
        // Only change date not change time
        const newValue = this.value
            .setYear(value.getYear())
            .setMonth(value.getMonth())
            .setDate(value.getDate());
        this.valueChange.emit(newValue);
    }
    makeHeadWeekDays() {
        const weekDays = [];
        const start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            const day = start.addDays(colIndex);
            weekDays[colIndex] = {
                short: this.dateHelper.format(day.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                veryShort: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    }
    getVeryShortWeekFormat() {
        if (this.dateHelper.relyOnDatePipe) {
            return this.i18n
                .getLocaleId()
                .toLowerCase()
                .indexOf('zh') === 0
                ? 'EEEEE'
                : 'EEEEEE'; // Use extreme short for chinese
        }
        return 'dd';
    }
    makeWeekRows() {
        const weekRows = [];
        const firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let week = 0; week < DATE_ROW_NUM; week++) {
            const weekStart = firstDayOfMonth.addDays(week * 7);
            const row = {
                isActive: false,
                isCurrent: false,
                dateCells: [],
                year: weekStart.getYear()
            };
            for (let day = 0; day < 7; day++) {
                const date = weekStart.addDays(day);
                const dateFormat = this.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                const title = this.dateHelper.format(date.nativeDate, dateFormat);
                const label = this.dateHelper.format(date.nativeDate, this.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                const cell = {
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    dateCellRender: valueFunctionProp(this.dateCellRender, date),
                    dateFullCellRender: valueFunctionProp(this.dateFullCellRender, date),
                    content: `${date.getDate()}`,
                    onClick: () => this.changeValueFromInside(date),
                    onMouseEnter: () => this.dayHover.emit(date)
                };
                if (this.showWeek && !row.weekNum) {
                    row.weekNum = this.dateHelper.getISOWeek(date.nativeDate);
                }
                if (date.isToday()) {
                    cell.isToday = true;
                    row.isCurrent = true;
                }
                if (Array.isArray(this.selectedValue) && date.isSameMonth(this.activeDate)) {
                    // Range selections
                    const rangeValue = this.hoverValue && this.hoverValue.length ? this.hoverValue : this.selectedValue;
                    const start = rangeValue[0];
                    const end = rangeValue[1];
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
                else if (date.isSameDay(this.value)) {
                    cell.isSelected = true;
                    row.isActive = true;
                }
                if (this.disabledDate && this.disabledDate(date.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-today`]: cell.isToday,
                    [`${this.prefixCls}-last-month-cell`]: date.isBeforeMonth(this.activeDate),
                    [`${this.prefixCls}-next-month-btn-day`]: date.isAfterMonth(this.activeDate),
                    [`${this.prefixCls}-selected-day`]: cell.isSelected,
                    [`${this.prefixCls}-disabled-cell`]: cell.isDisabled,
                    [`${this.prefixCls}-selected-start-date`]: !!cell.isSelectedStartDate,
                    [`${this.prefixCls}-selected-end-date`]: !!cell.isSelectedEndDate,
                    [`${this.prefixCls}-in-range-cell`]: !!cell.isInRange
                };
                row.dateCells.push(cell);
            }
            row.classMap = {
                [`${this.prefixCls}-current-week`]: row.isCurrent,
                [`${this.prefixCls}-active-week`]: row.isActive
            };
            weekRows.push(row);
        }
        return weekRows;
    }
    trackByDateFn(_index, item) {
        return `${item.title}`;
    }
    trackByWeekFn(_index, item) {
        return `${item.year}-${item.weekNum}`;
    }
}
/** @nocollapse */ DateTableComponent.ɵfac = function DateTableComponent_Factory(t) { return new (t || DateTableComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(DateHelperService)); };
/** @nocollapse */ DateTableComponent.ɵcmp = ɵɵdefineComponent({ type: DateTableComponent, selectors: [["date-table"]], inputs: { prefixCls: "prefixCls", locale: "locale", selectedValue: "selectedValue", hoverValue: "hoverValue", value: "value", activeDate: "activeDate", showWeek: "showWeek", disabledDate: "disabledDate", dateCellRender: "dateCellRender", dateFullCellRender: "dateFullCellRender" }, outputs: { dayHover: "dayHover", valueChange: "valueChange" }, exportAs: ["dateTable"], features: [ɵɵNgOnChangesFeature()], decls: 7, vars: 10, consts: [["cellSpacing", "0", "role", "grid"], ["role", "row"], ["role", "columnheader", 3, "class", 4, "ngIf"], ["role", "columnheader", 3, "title", "class", 4, "ngFor", "ngForOf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", "date-table-cell", "", 3, "title", "ngClass", "prefixCls", "cell", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", "date-table-cell", "", 3, "title", "ngClass", "prefixCls", "cell", "click", "mouseenter"]], template: function DateTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementStart(1, "thead");
        ɵɵelementStart(2, "tr", 1);
        ɵɵtemplate(3, DateTableComponent_th_3_Template, 3, 7, "th", 2);
        ɵɵtemplate(4, DateTableComponent_th_4_Template, 3, 8, "th", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "tbody");
        ɵɵtemplate(6, DateTableComponent_tr_6_Template, 3, 4, "tr", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-table");
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.showWeek);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.headWeekDays);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-tbody");
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.weekRows)("ngForTrackBy", ctx.trackByWeekFn);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateTableComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-table',
                exportAs: 'dateTable',
                templateUrl: 'date-table.component.html'
            }]
    }], function () { return [{ type: NzI18nService }, { type: DateHelperService }]; }, { prefixCls: [{
            type: Input
        }], locale: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], hoverValue: [{
            type: Input
        }], value: [{
            type: Input
        }], activeDate: [{
            type: Input
        }], showWeek: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], dateCellRender: [{
            type: Input
        }], dateFullCellRender: [{
            type: Input
        }], dayHover: [{
            type: Output
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
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$1 = function (a0) { return { $implicit: a0 }; };
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const monthCell_r1980 = ɵɵnextContext(2).$implicit;
    const ctx_r1983 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1983.monthFullCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0$1, monthCell_r1980.value));
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const monthCell_r1980 = ɵɵnextContext(3).$implicit;
    const ctx_r1988 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1988.prefixCls, "-content");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1988.monthCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c0$1, monthCell_r1980.value));
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_Template, 2, 7, "div", 10);
} if (rf & 2) {
    const monthCell_r1980 = ɵɵnextContext(2).$implicit;
    const ctx_r1985 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1985.prefixCls, "-value");
    ɵɵadvance(1);
    ɵɵtextInterpolate(monthCell_r1980.content);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1985.monthCellRender);
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 7);
    ɵɵtemplate(3, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_Template, 3, 5, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r1984 = ɵɵreference(4);
    const ctx_r1981 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r1981.prefixCls, "-month");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1981.monthFullCellRender)("ngIfElse", _r1984);
} }
function MonthTableComponent_tr_2_td_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const monthCell_r1980 = ɵɵnextContext().$implicit;
    const ctx_r1982 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r1982.prefixCls, "-month-panel-month");
    ɵɵadvance(1);
    ɵɵtextInterpolate(monthCell_r1980.content);
} }
function MonthTableComponent_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 4);
    ɵɵlistener("click", function MonthTableComponent_tr_2_td_1_Template_td_click_0_listener($event) { const monthCell_r1980 = ctx.$implicit; return monthCell_r1980.disabled ? null : monthCell_r1980.onClick(); });
    ɵɵelementContainerStart(1, 5);
    ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_Template, 5, 5, "ng-container", 6);
    ɵɵtemplate(3, MonthTableComponent_tr_2_td_1_ng_container_3_Template, 3, 4, "ng-container", 6);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const monthCell_r1980 = ctx.$implicit;
    const ctx_r1979 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", monthCell_r1980.title);
    ɵɵproperty("ngClass", monthCell_r1980.classMap);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", ctx_r1979.prefixCls);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "ant-fullcalendar");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "ant-calendar");
} }
function MonthTableComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 2);
    ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_Template, 4, 5, "td", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r1978 = ctx.$implicit;
    const ctx_r1977 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", row_r1978)("ngForTrackBy", ctx_r1977.trackPanelMonth);
} }
const MAX_ROW = 4;
const MAX_COL = 3;
class MonthTableComponent {
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.value = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.valueChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    }
    trackYear(_index) {
        return this.value ? this.value.getYear() : _index;
    }
    trackPanelMonth(_index, monthData) {
        return monthData.content;
    }
    render() {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    }
    makePanelMonths() {
        const months = [];
        const currentMonth = this.value.getMonth();
        const today = new CandyDate();
        let monthValue = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                const month = this.value.setMonth(monthValue);
                const disabled = this.disabledDate ? this.disabledDate(this.value.setMonth(monthValue).nativeDate) : false;
                const content = this.dateHelper.format(month.nativeDate, 'MMM');
                const cell = (months[rowIndex][colIndex] = {
                    value: month.nativeDate,
                    disabled,
                    content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: () => this.chooseMonth(cell.month) // don't use monthValue here
                });
                cell.classMap = {
                    [`${this.prefixCls}-month-panel-cell`]: true,
                    [`${this.prefixCls}-month-panel-cell-disabled`]: disabled,
                    [`${this.prefixCls}-month-panel-selected-cell`]: monthValue === currentMonth,
                    [`${this.prefixCls}-month-panel-current-cell`]: today.getYear() === this.value.getYear() && monthValue === today.getMonth()
                };
                monthValue++;
            }
        }
        return months;
    }
    chooseMonth(month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    }
}
/** @nocollapse */ MonthTableComponent.ɵfac = function MonthTableComponent_Factory(t) { return new (t || MonthTableComponent)(ɵɵdirectiveInject(DateHelperService)); };
/** @nocollapse */ MonthTableComponent.ɵcmp = ɵɵdefineComponent({ type: MonthTableComponent, selectors: [["month-table"]], inputs: { value: "value", prefixCls: "prefixCls", monthCellRender: "monthCellRender", monthFullCellRender: "monthFullCellRender", disabledDate: "disabledDate" }, outputs: { valueChange: "valueChange" }, exportAs: ["monthTable"], features: [ɵɵNgOnChangesFeature()], decls: 3, vars: 8, consts: [["cellSpacing", "0", "role", "grid"], ["role", "row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "gridcell", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell", 3, "title", "ngClass", "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", 4, "ngIf"]], template: function MonthTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementStart(1, "tbody");
        ɵɵtemplate(2, MonthTableComponent_tr_2_Template, 2, 2, "tr", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-month-panel-table");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-month-panel-tbody");
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.panelMonths)("ngForTrackBy", ctx.trackYear);
    } }, directives: [NgForOf, NgClass, NgSwitch, NgSwitchCase, NgIf, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MonthTableComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'month-table',
                exportAs: 'monthTable',
                templateUrl: 'month-table.component.html'
            }]
    }], function () { return [{ type: DateHelperService }]; }, { value: [{
            type: Input
        }], prefixCls: [{
            type: Input
        }], monthCellRender: [{
            type: Input
        }], monthFullCellRender: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], disabledDate: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDateCellDirective {
}
/** @nocollapse */ NzDateCellDirective.ɵfac = function NzDateCellDirective_Factory(t) { return new (t || NzDateCellDirective)(); };
/** @nocollapse */ NzDateCellDirective.ɵdir = ɵɵdefineDirective({ type: NzDateCellDirective, selectors: [["", "nzDateCell", ""]], exportAs: ["nzDateCell"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDateCellDirective, [{
        type: Directive,
        args: [{
                selector: '[nzDateCell]',
                exportAs: 'nzDateCell'
            }]
    }], null, null); })();
class NzMonthCellDirective {
}
/** @nocollapse */ NzMonthCellDirective.ɵfac = function NzMonthCellDirective_Factory(t) { return new (t || NzMonthCellDirective)(); };
/** @nocollapse */ NzMonthCellDirective.ɵdir = ɵɵdefineDirective({ type: NzMonthCellDirective, selectors: [["", "nzMonthCell", ""]], exportAs: ["nzMonthCell"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMonthCellDirective, [{
        type: Directive,
        args: [{
                selector: '[nzMonthCell]',
                exportAs: 'nzMonthCell'
            }]
    }], null, null); })();
class NzDateFullCellDirective {
}
/** @nocollapse */ NzDateFullCellDirective.ɵfac = function NzDateFullCellDirective_Factory(t) { return new (t || NzDateFullCellDirective)(); };
/** @nocollapse */ NzDateFullCellDirective.ɵdir = ɵɵdefineDirective({ type: NzDateFullCellDirective, selectors: [["", "nzDateFullCell", ""]], exportAs: ["nzDateFullCell"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDateFullCellDirective, [{
        type: Directive,
        args: [{
                selector: '[nzDateFullCell]',
                exportAs: 'nzDateFullCell'
            }]
    }], null, null); })();
class NzMonthFullCellDirective {
}
/** @nocollapse */ NzMonthFullCellDirective.ɵfac = function NzMonthFullCellDirective_Factory(t) { return new (t || NzMonthFullCellDirective)(); };
/** @nocollapse */ NzMonthFullCellDirective.ɵdir = ɵɵdefineDirective({ type: NzMonthFullCellDirective, selectors: [["", "nzMonthFullCell", ""]], exportAs: ["nzMonthFullCell"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMonthFullCellDirective, [{
        type: Directive,
        args: [{
                selector: '[nzMonthFullCell]',
                exportAs: 'nzMonthFullCell'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzCalendarHeaderComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-option", 6);
} if (rf & 2) {
    const year_r1996 = ctx.$implicit;
    ɵɵproperty("nzLabel", year_r1996.label)("nzValue", year_r1996.value);
} }
function NzCalendarHeaderComponent_nz_select_2_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-option", 6);
} if (rf & 2) {
    const month_r1998 = ctx.$implicit;
    ɵɵproperty("nzLabel", month_r1998.label)("nzValue", month_r1998.value);
} }
function NzCalendarHeaderComponent_nz_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r2000 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select", 7);
    ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_nz_select_2_Template_nz_select_ngModelChange_0_listener($event) { ɵɵrestoreView(_r2000); const ctx_r1999 = ɵɵnextContext(); return ctx_r1999.monthChange.emit($event); });
    ɵɵtemplate(1, NzCalendarHeaderComponent_nz_select_2_nz_option_1_Template, 1, 2, "nz-option", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1995 = ɵɵnextContext();
    ɵɵproperty("nzSize", ctx_r1995.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r1995.activeMonth);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1995.months);
} }
class NzCalendarHeaderComponent {
    constructor(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.mode = 'month';
        this.fullscreen = true;
        this.modeChange = new EventEmitter();
        this.activeDate = new CandyDate();
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
        this.yearOffset = 10;
        this.yearTotal = 20;
    }
    get activeYear() {
        return this.activeDate.getYear();
    }
    get activeMonth() {
        return this.activeDate.getMonth();
    }
    get size() {
        return this.fullscreen ? 'default' : 'small';
    }
    get yearTypeText() {
        return this.i18n.getLocale().Calendar.year;
    }
    get monthTypeText() {
        return this.i18n.getLocale().Calendar.month;
    }
    ngOnInit() {
        this.setUpYears();
        this.setUpMonths();
    }
    updateYear(year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    }
    setUpYears(year) {
        const start = (year || this.activeYear) - this.yearOffset;
        const end = start + this.yearTotal;
        this.years = [];
        for (let i = start; i < end; i++) {
            this.years.push({ label: `${i}`, value: i });
        }
    }
    setUpMonths() {
        this.months = [];
        for (let i = 0; i < 12; i++) {
            const dateInMonth = this.activeDate.setMonth(i);
            const monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    }
}
/** @nocollapse */ NzCalendarHeaderComponent.ɵfac = function NzCalendarHeaderComponent_Factory(t) { return new (t || NzCalendarHeaderComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(DateHelperService)); };
/** @nocollapse */ NzCalendarHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: NzCalendarHeaderComponent, selectors: [["nz-calendar-header"]], hostBindings: function NzCalendarHeaderComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(2);
    } if (rf & 2) {
        ɵɵstyleProp("display", "block");
        ɵɵclassProp("ant-fullcalendar-header", true);
    } }, inputs: { mode: "mode", fullscreen: "fullscreen", activeDate: "activeDate" }, outputs: { modeChange: "modeChange", yearChange: "yearChange", monthChange: "monthChange" }, exportAs: ["nzCalendarHeader"], decls: 8, vars: 9, consts: [[1, "ant-fullcalendar-year-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["class", "ant-fullcalendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange", 4, "ngIf"], [3, "ngModel", "nzSize", "ngModelChange"], ["nz-radio-button", "", "nzValue", "month"], ["nz-radio-button", "", "nzValue", "year"], [3, "nzLabel", "nzValue"], [1, "ant-fullcalendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"]], template: function NzCalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-select", 0);
        ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.updateYear($event); });
        ɵɵtemplate(1, NzCalendarHeaderComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        ɵɵelementEnd();
        ɵɵtemplate(2, NzCalendarHeaderComponent_nz_select_2_Template, 2, 4, "nz-select", 2);
        ɵɵelementStart(3, "nz-radio-group", 3);
        ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_3_listener($event) { return ctx.mode = $event; })("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_3_listener($event) { return ctx.modeChange.emit($event); });
        ɵɵelementStart(4, "label", 4);
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelementStart(6, "label", 5);
        ɵɵtext(7);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("nzSize", ctx.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx.activeYear);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.years);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.mode === "month");
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.mode)("nzSize", ctx.size);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.monthTypeText);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.yearTypeText);
    } }, directives: [NzSelectComponent, NgControlStatus, NgModel, NgForOf, NgIf, NzRadioGroupComponent, NzRadioButtonComponent, NzOptionComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCalendarHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar-header',
                exportAs: 'nzCalendarHeader',
                templateUrl: './nz-calendar-header.component.html',
                host: {
                    '[style.display]': `'block'`,
                    '[class.ant-fullcalendar-header]': `true`
                }
            }]
    }], function () { return [{ type: NzI18nService }, { type: DateHelperService }]; }, { mode: [{
            type: Input
        }], fullscreen: [{
            type: Input
        }], modeChange: [{
            type: Output
        }], activeDate: [{
            type: Input
        }], yearChange: [{
            type: Output
        }], monthChange: [{
            type: Output
        }] }); })();

function NzCalendarComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function NzCalendarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r2007 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "date-table", 4);
    ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_4_Template_date_table_valueChange_0_listener($event) { ɵɵrestoreView(_r2007); const ctx_r2006 = ɵɵnextContext(); return ctx_r2006.onDateSelect($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2003 = ɵɵnextContext();
    ɵɵproperty("prefixCls", ctx_r2003.prefixCls)("value", ctx_r2003.activeDate)("dateCellRender", ctx_r2003.dateCell)("dateFullCellRender", ctx_r2003.dateFullCell);
} }
function NzCalendarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r2009 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "month-table", 5);
    ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_6_Template_month_table_valueChange_0_listener($event) { ɵɵrestoreView(_r2009); const ctx_r2008 = ɵɵnextContext(); return ctx_r2008.onDateSelect($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2005 = ɵɵnextContext();
    ɵɵproperty("prefixCls", ctx_r2005.prefixCls)("value", ctx_r2005.activeDate)("monthCellRender", ctx_r2005.monthCell)("monthFullCellRender", ctx_r2005.monthFullCell);
} }
class NzCalendarComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.activeDate = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.onChangeFn = () => { };
        this.onTouchFn = () => { };
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.nzFullscreen = true;
    }
    set nzValue(value) {
        this.updateDate(new CandyDate(value), false);
    }
    get dateCell() {
        return this.nzDateCell || this.nzDateCellChild;
    }
    get dateFullCell() {
        return this.nzDateFullCell || this.nzDateFullCellChild;
    }
    get monthCell() {
        return this.nzMonthCell || this.nzMonthCellChild;
    }
    get monthFullCell() {
        return this.nzMonthFullCell || this.nzMonthFullCellChild;
    }
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode });
    }
    onYearSelect(year) {
        const date = this.activeDate.setYear(year);
        this.updateDate(date);
    }
    onMonthSelect(month) {
        const date = this.activeDate.setMonth(month);
        this.updateDate(date);
    }
    onDateSelect(date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    }
    writeValue(value) {
        this.updateDate(new CandyDate(value), false);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    updateDate(date, touched = true) {
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    }
}
/** @nocollapse */ NzCalendarComponent.ɵfac = function NzCalendarComponent_Factory(t) { return new (t || NzCalendarComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzCalendarComponent.ɵcmp = ɵɵdefineComponent({ type: NzCalendarComponent, selectors: [["nz-calendar"]], contentQueries: function NzCalendarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzDateCellDirective, true, TemplateRef);
        ɵɵcontentQuery(dirIndex, NzDateFullCellDirective, true, TemplateRef);
        ɵɵcontentQuery(dirIndex, NzMonthCellDirective, true, TemplateRef);
        ɵɵcontentQuery(dirIndex, NzMonthFullCellDirective, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzDateCellChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzDateFullCellChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzMonthCellChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzMonthFullCellChild = _t.first);
    } }, hostBindings: function NzCalendarComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(1);
    } if (rf & 2) {
        ɵɵclassProp("ant-fullcalendar--fullscreen", ctx.nzFullscreen);
    } }, inputs: { nzMode: "nzMode", nzValue: "nzValue", nzDateCell: "nzDateCell", nzDateFullCell: "nzDateFullCell", nzMonthCell: "nzMonthCell", nzMonthFullCell: "nzMonthFullCell", nzFullscreen: "nzFullscreen" }, outputs: { nzModeChange: "nzModeChange", nzPanelChange: "nzPanelChange", nzSelectChange: "nzSelectChange", nzValueChange: "nzValueChange" }, exportAs: ["nzCalendar"], features: [ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((() => NzCalendarComponent)), multi: true }])], decls: 8, vars: 14, consts: [[3, "fullscreen", "activeDate", "mode", "modeChange", "yearChange", "monthChange"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["monthModeTable", ""], ["yearModeTable", ""], [3, "prefixCls", "value", "dateCellRender", "dateFullCellRender", "valueChange"], [3, "prefixCls", "value", "monthCellRender", "monthFullCellRender", "valueChange"]], template: function NzCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-calendar-header", 0);
        ɵɵlistener("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.nzMode = $event; })("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.onModeChange($event); })("yearChange", function NzCalendarComponent_Template_nz_calendar_header_yearChange_0_listener($event) { return ctx.onYearSelect($event); })("monthChange", function NzCalendarComponent_Template_nz_calendar_header_monthChange_0_listener($event) { return ctx.onMonthSelect($event); });
        ɵɵelementEnd();
        ɵɵelementStart(1, "div");
        ɵɵelementStart(2, "div");
        ɵɵtemplate(3, NzCalendarComponent_ng_container_3_Template, 1, 0, "ng-container", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(4, NzCalendarComponent_ng_template_4_Template, 1, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(6, NzCalendarComponent_ng_template_6_Template, 1, 4, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2002 = ɵɵreference(5);
        const _r2004 = ɵɵreference(7);
        ɵɵproperty("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("mode", ctx.nzMode);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate2("", ctx.prefixCls, " ", ctx.prefixCls, "-full");
        ɵɵclassProp("ant-fullcalendar-fullscreen", ctx.nzFullscreen);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixCls, "-calendar-body");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzMode === "month")("ngIfThen", _r2002)("ngIfElse", _r2004);
    } }, directives: [NzCalendarHeaderComponent, NgIf, DateTableComponent, MonthTableComponent], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzCalendarComponent.prototype, "nzFullscreen", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCalendarComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar',
                exportAs: 'nzCalendar',
                templateUrl: './nz-calendar.component.html',
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((() => NzCalendarComponent)), multi: true }]
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { nzMode: [{
            type: Input
        }], nzModeChange: [{
            type: Output
        }], nzPanelChange: [{
            type: Output
        }], nzSelectChange: [{
            type: Output
        }], nzValue: [{
            type: Input
        }], nzValueChange: [{
            type: Output
        }], nzDateCell: [{
            type: Input
        }], nzDateCellChild: [{
            type: ContentChild,
            args: [NzDateCellDirective, { static: false, read: TemplateRef }]
        }], nzDateFullCell: [{
            type: Input
        }], nzDateFullCellChild: [{
            type: ContentChild,
            args: [NzDateFullCellDirective, { static: false, read: TemplateRef }]
        }], nzMonthCell: [{
            type: Input
        }], nzMonthCellChild: [{
            type: ContentChild,
            args: [NzMonthCellDirective, { static: false, read: TemplateRef }]
        }], nzMonthFullCell: [{
            type: Input
        }], nzMonthFullCellChild: [{
            type: ContentChild,
            args: [NzMonthFullCellDirective, { static: false, read: TemplateRef }]
        }], nzFullscreen: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.ant-fullcalendar--fullscreen']
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCalendarModule {
}
/** @nocollapse */ NzCalendarModule.ɵmod = ɵɵdefineNgModule({ type: NzCalendarModule });
/** @nocollapse */ NzCalendarModule.ɵinj = ɵɵdefineInjector({ factory: function NzCalendarModule_Factory(t) { return new (t || NzCalendarModule)(); }, imports: [[CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzCalendarModule, { declarations: [NzCalendarHeaderComponent,
        NzCalendarComponent,
        NzDateCellDirective,
        NzDateFullCellDirective,
        NzMonthCellDirective,
        NzMonthFullCellDirective,
        DateTableComponent,
        DateTableCellComponent,
        MonthTableComponent], imports: [CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule], exports: [NzCalendarComponent,
        NzDateCellDirective,
        NzDateFullCellDirective,
        NzMonthCellDirective,
        NzMonthFullCellDirective,
        DateTableComponent,
        MonthTableComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCalendarModule, [{
        type: NgModule,
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
                imports: [CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule]
            }]
    }], null, null); })();
ɵɵsetComponentScope(DateTableComponent, [NzCalendarHeaderComponent,
    NzCalendarComponent,
    NzDateCellDirective,
    NzDateFullCellDirective,
    NzMonthCellDirective,
    NzMonthFullCellDirective,
    DateTableComponent,
    DateTableCellComponent,
    MonthTableComponent, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent, NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzSelectTopControlComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, NzI18nPipe]);

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

export { DateTableCellComponent, DateTableComponent, MonthTableComponent, NzCalendarComponent, NzCalendarHeaderComponent, NzCalendarModule, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective };
//# sourceMappingURL=ng-zorro-antd-calendar.js.map
