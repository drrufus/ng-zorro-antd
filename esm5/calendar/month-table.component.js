/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { $implicit: a0 }; };
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var monthCell_r2036 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r2039 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2039.monthFullCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, monthCell_r2036.value));
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var monthCell_r2036 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r2044 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r2044.prefixCls, "-content");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2044.monthCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, monthCell_r2036.value));
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_Template, 2, 7, "div", 10);
} if (rf & 2) {
    var monthCell_r2036 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r2041 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r2041.prefixCls, "-value");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(monthCell_r2036.content);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2041.monthCellRender);
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 7);
    i0.ɵɵtemplate(3, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_Template, 3, 5, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r2040 = i0.ɵɵreference(4);
    var ctx_r2037 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2037.prefixCls, "-month");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2037.monthFullCellRender)("ngIfElse", _r2040);
} }
function MonthTableComponent_tr_2_td_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var monthCell_r2036 = i0.ɵɵnextContext().$implicit;
    var ctx_r2038 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2038.prefixCls, "-month-panel-month");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(monthCell_r2036.content);
} }
function MonthTableComponent_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 4);
    i0.ɵɵlistener("click", function MonthTableComponent_tr_2_td_1_Template_td_click_0_listener($event) { var monthCell_r2036 = ctx.$implicit; return monthCell_r2036.disabled ? null : monthCell_r2036.onClick(); });
    i0.ɵɵelementContainerStart(1, 5);
    i0.ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_Template, 5, 5, "ng-container", 6);
    i0.ɵɵtemplate(3, MonthTableComponent_tr_2_td_1_ng_container_3_Template, 3, 4, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var monthCell_r2036 = ctx.$implicit;
    var ctx_r2035 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", monthCell_r2036.title);
    i0.ɵɵproperty("ngClass", monthCell_r2036.classMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r2035.prefixCls);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "ant-fullcalendar");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "ant-calendar");
} }
function MonthTableComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 2);
    i0.ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_Template, 4, 5, "td", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r2034 = ctx.$implicit;
    var ctx_r2033 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r2034)("ngForTrackBy", ctx_r2033.trackPanelMonth);
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
    /** @nocollapse */ MonthTableComponent.ɵfac = function MonthTableComponent_Factory(t) { return new (t || MonthTableComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService)); };
    /** @nocollapse */ MonthTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MonthTableComponent, selectors: [["month-table"]], inputs: { value: "value", prefixCls: "prefixCls", monthCellRender: "monthCellRender", monthFullCellRender: "monthFullCellRender", disabledDate: "disabledDate" }, outputs: { valueChange: "valueChange" }, exportAs: ["monthTable"], features: [i0.ɵɵNgOnChangesFeature()], decls: 3, vars: 8, consts: [["cellSpacing", "0", "role", "grid"], ["role", "row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "gridcell", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell", 3, "title", "ngClass", "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", 4, "ngIf"]], template: function MonthTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵelementStart(1, "tbody");
            i0.ɵɵtemplate(2, MonthTableComponent_tr_2_Template, 2, 2, "tr", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-month-panel-table");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-month-panel-tbody");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.panelMonths)("ngForTrackBy", ctx.trackYear);
        } }, directives: [i2.NgForOf, i2.NgClass, i2.NgSwitch, i2.NgSwitchCase, i2.NgIf, i2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    return MonthTableComponent;
}());
export { MonthTableComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MonthTableComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'month-table',
                exportAs: 'monthTable',
                templateUrl: 'month-table.component.html'
            }]
    }], function () { return [{ type: i1.DateHelperService }]; }, { value: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vbnRoLXRhYmxlLmNvbXBvbmVudC50cyIsIm1vbnRoLXRhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztJQ1B2Qyx3QkFHZTs7OztJQUpqQiw2QkFDRTtJQUFBLDhIQUdBO0lBQ0YsMEJBQWU7Ozs7SUFIWCxlQUFnRjtJQUFoRixnRUFBZ0YsOEVBQUE7OztJQU9oRix3QkFHZTs7O0lBSmpCLDJCQUNFO0lBQUEsbUlBR0E7SUFDRixpQkFBTTs7OztJQUx1Qiw4REFBK0I7SUFFeEQsZUFBNEU7SUFBNUUsNERBQTRFLDhFQUFBOzs7SUFIaEYsMkJBQW1DO0lBQUEsWUFBdUI7SUFBQSxpQkFBTTtJQUNoRSw0R0FDRTs7OztJQUZHLDREQUE2QjtJQUFDLGVBQXVCO0lBQXZCLDZDQUF1QjtJQUNyRCxlQUF1QjtJQUF2QixnREFBdUI7OztJQVZsQyw2QkFDRTtJQUFBLDJCQUNFO0lBQUEsK0dBQ0U7SUFLRiw4SUFDRTtJQVFKLGlCQUFNO0lBQ1IsMEJBQWU7Ozs7SUFqQlIsZUFBNkI7SUFBN0IsNERBQTZCO0lBQ2xCLGVBQTZDO0lBQTdDLG9EQUE2QyxvQkFBQTs7O0lBaUIvRCw2QkFDRTtJQUFBLHlCQUE2QztJQUFBLFlBQXVCO0lBQUEsaUJBQUk7SUFDMUUsMEJBQWU7Ozs7SUFEVixlQUF5QztJQUF6Qyx3RUFBeUM7SUFBQyxlQUF1QjtJQUF2Qiw2Q0FBdUI7OztJQTVCMUUsNkJBT0U7SUFIQSw0S0FBOEIsSUFBSyxHQUFFLHlCQUFtQixJQUFDO0lBR3pELGdDQUNFO0lBQUEsZ0dBQ0U7SUFrQkYsZ0dBQ0U7SUFFSiwwQkFBZTtJQUNqQixpQkFBSzs7OztJQTVCSCx3REFBNkI7SUFFN0Isa0RBQThCO0lBRWhCLGVBQXNCO0lBQXRCLDhDQUFzQjtJQUNwQixlQUFrQztJQUFsQyxpREFBa0M7SUFtQmxDLGVBQThCO0lBQTlCLDZDQUE4Qjs7O0lBNUJsRCw2QkFDRTtJQUFBLHVFQU9FO0lBeUJKLGlCQUFLOzs7O0lBL0JELGVBQXVEO0lBQXZELG1DQUF1RCwyQ0FBQTs7QURtQi9ELElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNsQixJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFbEI7SUFtQkUsNkJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBVnhDLFVBQUssR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ25DLGNBQVMsR0FBVyxrQkFBa0IsQ0FBQztRQUc3QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFNWCxDQUFDO0lBRXJELHlDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQVUsTUFBYztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNwRCxDQUFDO0lBRUQsNkNBQWUsR0FBZixVQUFnQixNQUFjLEVBQUUsU0FBeUI7UUFDdkQsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFTyxvQ0FBTSxHQUFkO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRU8sNkNBQWUsR0FBdkI7UUFBQSxpQkFrQ0M7UUFqQ0MsSUFBTSxNQUFNLEdBQXVCLEVBQUUsQ0FBQztRQUN0QyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLElBQU0sS0FBSyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFFOUIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLEtBQUssSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDckQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQ0FDYixRQUFROztnQkFDZixJQUFNLEtBQUssR0FBRyxPQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzlDLElBQU0sUUFBUSxHQUFHLE9BQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFLLFlBQVksQ0FBQyxPQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDM0csSUFBTSxPQUFPLEdBQUcsT0FBSyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRWhFLElBQU0sSUFBSSxHQUFtQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRztvQkFDekQsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVO29CQUN2QixRQUFRLFVBQUE7b0JBQ1IsT0FBTyxTQUFBO29CQUNQLEtBQUssRUFBRSxVQUFVO29CQUNqQixLQUFLLEVBQUUsT0FBTztvQkFDZCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixDQUFDLDRCQUE0QjtpQkFDekUsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxRQUFRO29CQUNYLEdBQUksT0FBSyxTQUFTLHNCQUFtQixJQUFHLElBQUk7b0JBQzVDLEdBQUksT0FBSyxTQUFTLCtCQUE0QixJQUFHLFFBQVE7b0JBQ3pELEdBQUksT0FBSyxTQUFTLCtCQUE0QixJQUFHLFVBQVUsS0FBSyxZQUFZO29CQUM1RSxHQUFJLE9BQUssU0FBUyw4QkFBMkIsSUFBRyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssT0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksVUFBVSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUU7dUJBQzVILENBQUM7Z0JBRUYsVUFBVSxFQUFFLENBQUM7OztZQXRCZixLQUFLLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFFLFFBQVEsRUFBRTt3QkFBNUMsUUFBUTthQXVCaEI7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx5Q0FBVyxHQUFuQixVQUFvQixLQUFhO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzBGQXpFVSxtQkFBbUI7NERBQW5CLG1CQUFtQjtZQ2xDaEMsZ0NBQ0U7WUFBQSw2QkFDRTtZQUFBLGtFQUNFO1lBaUNKLGlCQUFRO1lBQ1YsaUJBQVE7O1lBckNELGtFQUF5QztZQUN2QyxlQUF5QztZQUF6QyxrRUFBeUM7WUFDMUMsZUFBbUQ7WUFBbkQseUNBQW1ELCtCQUFBOzs4QkRGM0Q7Q0E0R0MsQUFsRkQsSUFrRkM7U0ExRVksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FSL0IsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw0QkFBNEI7YUFDMUM7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUVOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmNvbnN0IE1BWF9ST1cgPSA0O1xyXG5jb25zdCBNQVhfQ09MID0gMztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbW9udGgtdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnbW9udGhUYWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdtb250aC10YWJsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vbnRoVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcbiAgQElucHV0KCkgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWZ1bGxjYWxlbmRhcic7XHJcbiAgQElucHV0KCkgbW9udGhDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PjtcclxuICBASW5wdXQoKSBtb250aEZ1bGxDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgcGFuZWxNb250aHM6IFBhbmVsTW9udGhEYXRhW11bXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5kaXNhYmxlZERhdGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrWWVhcihfaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZ2V0WWVhcigpIDogX2luZGV4O1xyXG4gIH1cclxuXHJcbiAgdHJhY2tQYW5lbE1vbnRoKF9pbmRleDogbnVtYmVyLCBtb250aERhdGE6IFBhbmVsTW9udGhEYXRhKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBtb250aERhdGEuY29udGVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy5wYW5lbE1vbnRocyA9IHRoaXMubWFrZVBhbmVsTW9udGhzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VQYW5lbE1vbnRocygpOiBQYW5lbE1vbnRoRGF0YVtdW10ge1xyXG4gICAgY29uc3QgbW9udGhzOiBQYW5lbE1vbnRoRGF0YVtdW10gPSBbXTtcclxuICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IHRoaXMudmFsdWUuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IENhbmR5RGF0ZSgpO1xyXG5cclxuICAgIGxldCBtb250aFZhbHVlID0gMDtcclxuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCsrKSB7XHJcbiAgICAgIG1vbnRoc1tyb3dJbmRleF0gPSBbXTtcclxuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IE1BWF9DT0w7IGNvbEluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBtb250aCA9IHRoaXMudmFsdWUuc2V0TW9udGgobW9udGhWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkRGF0ZSA/IHRoaXMuZGlzYWJsZWREYXRlKHRoaXMudmFsdWUuc2V0TW9udGgobW9udGhWYWx1ZSkubmF0aXZlRGF0ZSkgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChtb250aC5uYXRpdmVEYXRlLCAnTU1NJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGw6IFBhbmVsTW9udGhEYXRhID0gKG1vbnRoc1tyb3dJbmRleF1bY29sSW5kZXhdID0ge1xyXG4gICAgICAgICAgdmFsdWU6IG1vbnRoLm5hdGl2ZURhdGUsXHJcbiAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICBtb250aDogbW9udGhWYWx1ZSxcclxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgICAgY2xhc3NNYXA6IG51bGwsXHJcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNob29zZU1vbnRoKGNlbGwubW9udGgpIC8vIGRvbid0IHVzZSBtb250aFZhbHVlIGhlcmVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbW9udGgtcGFuZWwtY2VsbGBdOiB0cnVlLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1tb250aC1wYW5lbC1jZWxsLWRpc2FibGVkYF06IGRpc2FibGVkLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1tb250aC1wYW5lbC1zZWxlY3RlZC1jZWxsYF06IG1vbnRoVmFsdWUgPT09IGN1cnJlbnRNb250aCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbW9udGgtcGFuZWwtY3VycmVudC1jZWxsYF06IHRvZGF5LmdldFllYXIoKSA9PT0gdGhpcy52YWx1ZS5nZXRZZWFyKCkgJiYgbW9udGhWYWx1ZSA9PT0gdG9kYXkuZ2V0TW9udGgoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1vbnRoVmFsdWUrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbnRocztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hvb3NlTW9udGgobW9udGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0TW9udGgobW9udGgpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxNb250aERhdGEge1xyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBtb250aDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgb25DbGljazogVm9pZEZ1bmN0aW9uIHwgbnVsbDtcclxuICB2YWx1ZTogRGF0ZTtcclxufVxyXG4iLCI8dGFibGUgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tbW9udGgtcGFuZWwtdGFibGVcIiBjZWxsU3BhY2luZz1cIjBcIiByb2xlPVwiZ3JpZFwiPlxyXG4gIDx0Ym9keSBjbGFzcz1cInt7IHByZWZpeENscyB9fS1tb250aC1wYW5lbC10Ym9keVwiPlxyXG4gICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgcGFuZWxNb250aHM7IHRyYWNrQnk6IHRyYWNrWWVhclwiIHJvbGU9XCJyb3dcIj5cclxuICAgICAgPHRkXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IG1vbnRoQ2VsbCBvZiByb3c7IHRyYWNrQnk6IHRyYWNrUGFuZWxNb250aFwiXHJcbiAgICAgICAgcm9sZT1cImdyaWRjZWxsXCJcclxuICAgICAgICB0aXRsZT1cInt7IG1vbnRoQ2VsbC50aXRsZSB9fVwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm1vbnRoQ2VsbC5kaXNhYmxlZCA/IG51bGwgOiBtb250aENlbGwub25DbGljaygpXCJcclxuICAgICAgICBbbmdDbGFzc109XCJtb250aENlbGwuY2xhc3NNYXBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwicHJlZml4Q2xzXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYW50LWZ1bGxjYWxlbmRhcidcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1tb250aFwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtb250aEZ1bGxDZWxsUmVuZGVyOyBlbHNlIGRlZmF1bHRDZWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwibW9udGhGdWxsQ2VsbFJlbmRlcjsgY29udGV4dDogeyAkaW1wbGljaXQ6IG1vbnRoQ2VsbC52YWx1ZSB9XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdENlbGw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXZhbHVlXCI+e3sgbW9udGhDZWxsLmNvbnRlbnQgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJtb250aENlbGxSZW5kZXJcIiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIm1vbnRoQ2VsbFJlbmRlcjsgY29udGV4dDogeyAkaW1wbGljaXQ6IG1vbnRoQ2VsbC52YWx1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYW50LWNhbGVuZGFyJ1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cInt7IHByZWZpeENscyB9fS1tb250aC1wYW5lbC1tb250aFwiPnt7IG1vbnRoQ2VsbC5jb250ZW50IH19PC9hPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbiJdfQ==