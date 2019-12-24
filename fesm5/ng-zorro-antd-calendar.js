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
var _c0 = ["date-table-cell", ""];
function DateTableCellComponent_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var _c1 = function (a0) { return { $implicit: a0 }; };
function DateTableCellComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DateTableCellComponent_ng_container_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2023 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2023.cell.dateCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r2023.cell.value));
} }
function DateTableCellComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2024 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r2024.cell.dateCellRender, ɵɵsanitizeHtml);
} }
function DateTableCellComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2025 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2025.prefixCls, "-date");
    ɵɵattribute("aria-selected", ctx_r2025.cell.isSelected)("aria-disabled", ctx_r2025.cell.isDisabled);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r2025.cell.content, " ");
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
    var ctx_r2021 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r2021.isTemplateRef(ctx_r2021.cell.dateCellRender));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r2021.isNonEmptyString(ctx_r2021.cell.dateCellRender));
} }
function DateTableCellComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function DateTableCellComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DateTableCellComponent_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2027 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2027.cell.dateFullCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r2027.cell.value));
} }
function DateTableCellComponent_ng_container_2_ng_template_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function DateTableCellComponent_ng_container_2_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, DateTableCellComponent_ng_container_2_ng_template_3_div_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2031 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("", ctx_r2031.prefixCls, "-content");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2031.cell.dateCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c1, ctx_r2031.cell.value));
} }
function DateTableCellComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵtemplate(2, DateTableCellComponent_ng_container_2_ng_template_3_div_2_Template, 2, 7, "div", 8);
} if (rf & 2) {
    var ctx_r2029 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r2029.prefixCls, "-value");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2029.cell.content);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2029.cell.dateCellRender);
} }
function DateTableCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵtemplate(2, DateTableCellComponent_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 6);
    ɵɵtemplate(3, DateTableCellComponent_ng_container_2_ng_template_3_Template, 3, 5, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r2028 = ɵɵreference(4);
    var ctx_r2022 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2022.cell.dateFullCellRender)("ngIfElse", _r2028);
} }
var DateTableCellComponent = /** @class */ (function () {
    function DateTableCellComponent() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
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
    return DateTableCellComponent;
}());
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
    var ctx_r2010 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("", ctx_r2010.prefixCls, "-column-header ", ctx_r2010.prefixCls, "-week-number-header");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2010.prefixCls, "-column-header-inner");
} }
function DateTableComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 6);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var cell_r2013 = ctx.$implicit;
    var ctx_r2011 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2011.prefixCls, "-column-header");
    ɵɵpropertyInterpolate("title", cell_r2013.short);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2011.prefixCls, "-column-header-inner");
    ɵɵadvance(1);
    ɵɵtextInterpolate(cell_r2013.veryShort);
} }
function DateTableComponent_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r2014 = ɵɵnextContext().$implicit;
    var ctx_r2015 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2015.prefixCls, "-week-number-cell");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", row_r2014.weekNum, " ");
} }
function DateTableComponent_tr_6_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵlistener("click", function DateTableComponent_tr_6_td_2_Template_td_click_0_listener($event) { var cell_r2018 = ctx.$implicit; return cell_r2018.isDisabled ? null : cell_r2018.onClick(); })("mouseenter", function DateTableComponent_tr_6_td_2_Template_td_mouseenter_0_listener($event) { var cell_r2018 = ctx.$implicit; return cell_r2018.isDisabled ? null : cell_r2018.onMouseEnter(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var cell_r2018 = ctx.$implicit;
    var ctx_r2016 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", cell_r2018.title);
    ɵɵproperty("ngClass", cell_r2018.classMap)("prefixCls", ctx_r2016.prefixCls)("cell", cell_r2018);
} }
function DateTableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 7);
    ɵɵtemplate(1, DateTableComponent_tr_6_td_1_Template, 2, 4, "td", 8);
    ɵɵtemplate(2, DateTableComponent_tr_6_td_2_Template, 1, 4, "td", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r2014 = ctx.$implicit;
    var ctx_r2012 = ɵɵnextContext();
    ɵɵproperty("ngClass", row_r2014.classMap);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", row_r2014.weekNum);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", row_r2014.dateCells)("ngForTrackBy", ctx_r2012.trackByDateFn);
} }
var DATE_ROW_NUM = 6;
var DATE_COL_NUM = 7;
var DateTableComponent = /** @class */ (function () {
    function DateTableComponent(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.prefixCls = 'ant-calendar';
        this.showWeek = false;
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.valueChange = new EventEmitter();
    }
    Object.defineProperty(DateTableComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (date) {
            // Show today by default
            this._value = this.activeDate = date || new CandyDate();
        },
        enumerable: true,
        configurable: true
    });
    DateTableComponent.prototype.ngOnInit = function () {
        this.render();
    };
    DateTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    };
    DateTableComponent.prototype.isDateRealChange = function (change) {
        if (change) {
            var previousValue_1 = change.previousValue;
            var currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue_1) ||
                    currentValue.length !== previousValue_1.length ||
                    currentValue.some(function (value, index) {
                        var previousCandyDate = previousValue_1[index];
                        return previousCandyDate instanceof CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                    }));
            }
            else {
                return !this.isSameDate(previousValue_1, currentValue);
            }
        }
        return false;
    };
    DateTableComponent.prototype.isSameDate = function (left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    };
    DateTableComponent.prototype.render = function () {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    };
    DateTableComponent.prototype.changeValueFromInside = function (value) {
        // Only change date not change time
        var newValue = this.value
            .setYear(value.getYear())
            .setMonth(value.getMonth())
            .setDate(value.getDate());
        this.valueChange.emit(newValue);
    };
    DateTableComponent.prototype.makeHeadWeekDays = function () {
        var weekDays = [];
        var start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            var day = start.addDays(colIndex);
            weekDays[colIndex] = {
                short: this.dateHelper.format(day.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                veryShort: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    };
    DateTableComponent.prototype.getVeryShortWeekFormat = function () {
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
    DateTableComponent.prototype.makeWeekRows = function () {
        var _a;
        var _this = this;
        var weekRows = [];
        var firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var week = 0; week < DATE_ROW_NUM; week++) {
            var weekStart = firstDayOfMonth.addDays(week * 7);
            var row = {
                isActive: false,
                isCurrent: false,
                dateCells: [],
                year: weekStart.getYear()
            };
            var _loop_1 = function (day) {
                var _a;
                var date = weekStart.addDays(day);
                var dateFormat = this_1.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this_1.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                var title = this_1.dateHelper.format(date.nativeDate, dateFormat);
                var label = this_1.dateHelper.format(date.nativeDate, this_1.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                var cell = {
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    dateCellRender: valueFunctionProp(this_1.dateCellRender, date),
                    dateFullCellRender: valueFunctionProp(this_1.dateFullCellRender, date),
                    content: "" + date.getDate(),
                    onClick: function () { return _this.changeValueFromInside(date); },
                    onMouseEnter: function () { return _this.dayHover.emit(date); }
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
                    var rangeValue = this_1.hoverValue && this_1.hoverValue.length ? this_1.hoverValue : this_1.selectedValue;
                    var start = rangeValue[0];
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
    DateTableComponent.prototype.trackByDateFn = function (_index, item) {
        return "" + item.title;
    };
    DateTableComponent.prototype.trackByWeekFn = function (_index, item) {
        return item.year + "-" + item.weekNum;
    };
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
    return DateTableComponent;
}());
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
var _c0$1 = function (a0) { return { $implicit: a0 }; };
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var monthCell_r2036 = ɵɵnextContext(2).$implicit;
    var ctx_r2039 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2039.monthFullCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0$1, monthCell_r2036.value));
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var monthCell_r2036 = ɵɵnextContext(3).$implicit;
    var ctx_r2044 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r2044.prefixCls, "-content");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2044.monthCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c0$1, monthCell_r2036.value));
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_Template, 2, 7, "div", 10);
} if (rf & 2) {
    var monthCell_r2036 = ɵɵnextContext(2).$implicit;
    var ctx_r2041 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r2041.prefixCls, "-value");
    ɵɵadvance(1);
    ɵɵtextInterpolate(monthCell_r2036.content);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2041.monthCellRender);
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 7);
    ɵɵtemplate(3, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_Template, 3, 5, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r2040 = ɵɵreference(4);
    var ctx_r2037 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2037.prefixCls, "-month");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2037.monthFullCellRender)("ngIfElse", _r2040);
} }
function MonthTableComponent_tr_2_td_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var monthCell_r2036 = ɵɵnextContext().$implicit;
    var ctx_r2038 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2038.prefixCls, "-month-panel-month");
    ɵɵadvance(1);
    ɵɵtextInterpolate(monthCell_r2036.content);
} }
function MonthTableComponent_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 4);
    ɵɵlistener("click", function MonthTableComponent_tr_2_td_1_Template_td_click_0_listener($event) { var monthCell_r2036 = ctx.$implicit; return monthCell_r2036.disabled ? null : monthCell_r2036.onClick(); });
    ɵɵelementContainerStart(1, 5);
    ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_Template, 5, 5, "ng-container", 6);
    ɵɵtemplate(3, MonthTableComponent_tr_2_td_1_ng_container_3_Template, 3, 4, "ng-container", 6);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var monthCell_r2036 = ctx.$implicit;
    var ctx_r2035 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", monthCell_r2036.title);
    ɵɵproperty("ngClass", monthCell_r2036.classMap);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", ctx_r2035.prefixCls);
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
    var row_r2034 = ctx.$implicit;
    var ctx_r2033 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", row_r2034)("ngForTrackBy", ctx_r2033.trackPanelMonth);
} }
var MAX_ROW = 4;
var MAX_COL = 3;
var MonthTableComponent = /** @class */ (function () {
    function MonthTableComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.value = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.valueChange = new EventEmitter();
    }
    MonthTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    };
    MonthTableComponent.prototype.trackYear = function (_index) {
        return this.value ? this.value.getYear() : _index;
    };
    MonthTableComponent.prototype.trackPanelMonth = function (_index, monthData) {
        return monthData.content;
    };
    MonthTableComponent.prototype.render = function () {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    };
    MonthTableComponent.prototype.makePanelMonths = function () {
        var _this = this;
        var months = [];
        var currentMonth = this.value.getMonth();
        var today = new CandyDate();
        var monthValue = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                var month = this_1.value.setMonth(monthValue);
                var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setMonth(monthValue).nativeDate) : false;
                var content = this_1.dateHelper.format(month.nativeDate, 'MMM');
                var cell = (months[rowIndex][colIndex] = {
                    value: month.nativeDate,
                    disabled: disabled,
                    content: content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: function () { return _this.chooseMonth(cell.month); } // don't use monthValue here
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
    MonthTableComponent.prototype.chooseMonth = function (month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    };
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
    return MonthTableComponent;
}());
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
var NzDateCellDirective = /** @class */ (function () {
    function NzDateCellDirective() {
    }
    /** @nocollapse */ NzDateCellDirective.ɵfac = function NzDateCellDirective_Factory(t) { return new (t || NzDateCellDirective)(); };
    /** @nocollapse */ NzDateCellDirective.ɵdir = ɵɵdefineDirective({ type: NzDateCellDirective, selectors: [["", "nzDateCell", ""]], exportAs: ["nzDateCell"] });
    return NzDateCellDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDateCellDirective, [{
        type: Directive,
        args: [{
                selector: '[nzDateCell]',
                exportAs: 'nzDateCell'
            }]
    }], null, null); })();
var NzMonthCellDirective = /** @class */ (function () {
    function NzMonthCellDirective() {
    }
    /** @nocollapse */ NzMonthCellDirective.ɵfac = function NzMonthCellDirective_Factory(t) { return new (t || NzMonthCellDirective)(); };
    /** @nocollapse */ NzMonthCellDirective.ɵdir = ɵɵdefineDirective({ type: NzMonthCellDirective, selectors: [["", "nzMonthCell", ""]], exportAs: ["nzMonthCell"] });
    return NzMonthCellDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMonthCellDirective, [{
        type: Directive,
        args: [{
                selector: '[nzMonthCell]',
                exportAs: 'nzMonthCell'
            }]
    }], null, null); })();
var NzDateFullCellDirective = /** @class */ (function () {
    function NzDateFullCellDirective() {
    }
    /** @nocollapse */ NzDateFullCellDirective.ɵfac = function NzDateFullCellDirective_Factory(t) { return new (t || NzDateFullCellDirective)(); };
    /** @nocollapse */ NzDateFullCellDirective.ɵdir = ɵɵdefineDirective({ type: NzDateFullCellDirective, selectors: [["", "nzDateFullCell", ""]], exportAs: ["nzDateFullCell"] });
    return NzDateFullCellDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDateFullCellDirective, [{
        type: Directive,
        args: [{
                selector: '[nzDateFullCell]',
                exportAs: 'nzDateFullCell'
            }]
    }], null, null); })();
var NzMonthFullCellDirective = /** @class */ (function () {
    function NzMonthFullCellDirective() {
    }
    /** @nocollapse */ NzMonthFullCellDirective.ɵfac = function NzMonthFullCellDirective_Factory(t) { return new (t || NzMonthFullCellDirective)(); };
    /** @nocollapse */ NzMonthFullCellDirective.ɵdir = ɵɵdefineDirective({ type: NzMonthFullCellDirective, selectors: [["", "nzMonthFullCell", ""]], exportAs: ["nzMonthFullCell"] });
    return NzMonthFullCellDirective;
}());
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
    var year_r2052 = ctx.$implicit;
    ɵɵproperty("nzLabel", year_r2052.label)("nzValue", year_r2052.value);
} }
function NzCalendarHeaderComponent_nz_select_2_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-option", 6);
} if (rf & 2) {
    var month_r2054 = ctx.$implicit;
    ɵɵproperty("nzLabel", month_r2054.label)("nzValue", month_r2054.value);
} }
function NzCalendarHeaderComponent_nz_select_2_Template(rf, ctx) { if (rf & 1) {
    var _r2056 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select", 7);
    ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_nz_select_2_Template_nz_select_ngModelChange_0_listener($event) { ɵɵrestoreView(_r2056); var ctx_r2055 = ɵɵnextContext(); return ctx_r2055.monthChange.emit($event); });
    ɵɵtemplate(1, NzCalendarHeaderComponent_nz_select_2_nz_option_1_Template, 1, 2, "nz-option", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2051 = ɵɵnextContext();
    ɵɵproperty("nzSize", ctx_r2051.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r2051.activeMonth);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2051.months);
} }
var NzCalendarHeaderComponent = /** @class */ (function () {
    function NzCalendarHeaderComponent(i18n, dateHelper) {
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
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeYear", {
        get: function () {
            return this.activeDate.getYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeMonth", {
        get: function () {
            return this.activeDate.getMonth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "size", {
        get: function () {
            return this.fullscreen ? 'default' : 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "yearTypeText", {
        get: function () {
            return this.i18n.getLocale().Calendar.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "monthTypeText", {
        get: function () {
            return this.i18n.getLocale().Calendar.month;
        },
        enumerable: true,
        configurable: true
    });
    NzCalendarHeaderComponent.prototype.ngOnInit = function () {
        this.setUpYears();
        this.setUpMonths();
    };
    NzCalendarHeaderComponent.prototype.updateYear = function (year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    };
    NzCalendarHeaderComponent.prototype.setUpYears = function (year) {
        var start = (year || this.activeYear) - this.yearOffset;
        var end = start + this.yearTotal;
        this.years = [];
        for (var i = start; i < end; i++) {
            this.years.push({ label: "" + i, value: i });
        }
    };
    NzCalendarHeaderComponent.prototype.setUpMonths = function () {
        this.months = [];
        for (var i = 0; i < 12; i++) {
            var dateInMonth = this.activeDate.setMonth(i);
            var monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    };
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
    return NzCalendarHeaderComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCalendarHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar-header',
                exportAs: 'nzCalendarHeader',
                templateUrl: './nz-calendar-header.component.html',
                host: {
                    '[style.display]': "'block'",
                    '[class.ant-fullcalendar-header]': "true"
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
    var _r2063 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "date-table", 4);
    ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_4_Template_date_table_valueChange_0_listener($event) { ɵɵrestoreView(_r2063); var ctx_r2062 = ɵɵnextContext(); return ctx_r2062.onDateSelect($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2059 = ɵɵnextContext();
    ɵɵproperty("prefixCls", ctx_r2059.prefixCls)("value", ctx_r2059.activeDate)("dateCellRender", ctx_r2059.dateCell)("dateFullCellRender", ctx_r2059.dateFullCell);
} }
function NzCalendarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r2065 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "month-table", 5);
    ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_6_Template_month_table_valueChange_0_listener($event) { ɵɵrestoreView(_r2065); var ctx_r2064 = ɵɵnextContext(); return ctx_r2064.onDateSelect($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2061 = ɵɵnextContext();
    ɵɵproperty("prefixCls", ctx_r2061.prefixCls)("value", ctx_r2061.activeDate)("monthCellRender", ctx_r2061.monthCell)("monthFullCellRender", ctx_r2061.monthFullCell);
} }
var NzCalendarComponent = /** @class */ (function () {
    function NzCalendarComponent(cdr) {
        this.cdr = cdr;
        this.activeDate = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.onChangeFn = function () { };
        this.onTouchFn = function () { };
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.nzFullscreen = true;
    }
    Object.defineProperty(NzCalendarComponent.prototype, "nzValue", {
        set: function (value) {
            this.updateDate(new CandyDate(value), false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateCell", {
        get: function () {
            return this.nzDateCell || this.nzDateCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateFullCell", {
        get: function () {
            return this.nzDateFullCell || this.nzDateFullCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthCell", {
        get: function () {
            return this.nzMonthCell || this.nzMonthCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthFullCell", {
        get: function () {
            return this.nzMonthFullCell || this.nzMonthFullCellChild;
        },
        enumerable: true,
        configurable: true
    });
    NzCalendarComponent.prototype.onModeChange = function (mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode: mode });
    };
    NzCalendarComponent.prototype.onYearSelect = function (year) {
        var date = this.activeDate.setYear(year);
        this.updateDate(date);
    };
    NzCalendarComponent.prototype.onMonthSelect = function (month) {
        var date = this.activeDate.setMonth(month);
        this.updateDate(date);
    };
    NzCalendarComponent.prototype.onDateSelect = function (date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    };
    NzCalendarComponent.prototype.writeValue = function (value) {
        this.updateDate(new CandyDate(value), false);
        this.cdr.markForCheck();
    };
    NzCalendarComponent.prototype.registerOnChange = function (fn) {
        this.onChangeFn = fn;
    };
    NzCalendarComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchFn = fn;
    };
    NzCalendarComponent.prototype.updateDate = function (date, touched) {
        if (touched === void 0) { touched = true; }
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    };
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
        } }, inputs: { nzMode: "nzMode", nzValue: "nzValue", nzDateCell: "nzDateCell", nzDateFullCell: "nzDateFullCell", nzMonthCell: "nzMonthCell", nzMonthFullCell: "nzMonthFullCell", nzFullscreen: "nzFullscreen" }, outputs: { nzModeChange: "nzModeChange", nzPanelChange: "nzPanelChange", nzSelectChange: "nzSelectChange", nzValueChange: "nzValueChange" }, exportAs: ["nzCalendar"], features: [ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((function () { return NzCalendarComponent; })), multi: true }])], decls: 8, vars: 14, consts: [[3, "fullscreen", "activeDate", "mode", "modeChange", "yearChange", "monthChange"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["monthModeTable", ""], ["yearModeTable", ""], [3, "prefixCls", "value", "dateCellRender", "dateFullCellRender", "valueChange"], [3, "prefixCls", "value", "monthCellRender", "monthFullCellRender", "valueChange"]], template: function NzCalendarComponent_Template(rf, ctx) { if (rf & 1) {
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
            var _r2058 = ɵɵreference(5);
            var _r2060 = ɵɵreference(7);
            ɵɵproperty("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("mode", ctx.nzMode);
            ɵɵadvance(1);
            ɵɵclassMapInterpolate2("", ctx.prefixCls, " ", ctx.prefixCls, "-full");
            ɵɵclassProp("ant-fullcalendar-fullscreen", ctx.nzFullscreen);
            ɵɵadvance(1);
            ɵɵclassMapInterpolate1("", ctx.prefixCls, "-calendar-body");
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzMode === "month")("ngIfThen", _r2058)("ngIfElse", _r2060);
        } }, directives: [NzCalendarHeaderComponent, NgIf, DateTableComponent, MonthTableComponent], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCalendarComponent.prototype, "nzFullscreen", void 0);
    return NzCalendarComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCalendarComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar',
                exportAs: 'nzCalendar',
                templateUrl: './nz-calendar.component.html',
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((function () { return NzCalendarComponent; })), multi: true }]
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
var NzCalendarModule = /** @class */ (function () {
    function NzCalendarModule() {
    }
    /** @nocollapse */ NzCalendarModule.ɵmod = ɵɵdefineNgModule({ type: NzCalendarModule });
    /** @nocollapse */ NzCalendarModule.ɵinj = ɵɵdefineInjector({ factory: function NzCalendarModule_Factory(t) { return new (t || NzCalendarModule)(); }, imports: [[CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule]] });
    return NzCalendarModule;
}());
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
