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
const _c0 = function (a0) { return { $implicit: a0 }; };
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const monthCell_r1980 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1983 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1983.monthFullCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, monthCell_r1980.value));
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthCell_r1980 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1988 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r1988.prefixCls, "-content");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1988.monthCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, monthCell_r1980.value));
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_Template, 2, 7, "div", 10);
} if (rf & 2) {
    const monthCell_r1980 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1985 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r1985.prefixCls, "-value");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(monthCell_r1980.content);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1985.monthCellRender);
} }
function MonthTableComponent_tr_2_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 7);
    i0.ɵɵtemplate(3, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_Template, 3, 5, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r1984 = i0.ɵɵreference(4);
    const ctx_r1981 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r1981.prefixCls, "-month");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1981.monthFullCellRender)("ngIfElse", _r1984);
} }
function MonthTableComponent_tr_2_td_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const monthCell_r1980 = i0.ɵɵnextContext().$implicit;
    const ctx_r1982 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r1982.prefixCls, "-month-panel-month");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(monthCell_r1980.content);
} }
function MonthTableComponent_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 4);
    i0.ɵɵlistener("click", function MonthTableComponent_tr_2_td_1_Template_td_click_0_listener($event) { const monthCell_r1980 = ctx.$implicit; return monthCell_r1980.disabled ? null : monthCell_r1980.onClick(); });
    i0.ɵɵelementContainerStart(1, 5);
    i0.ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_Template, 5, 5, "ng-container", 6);
    i0.ɵɵtemplate(3, MonthTableComponent_tr_2_td_1_ng_container_3_Template, 3, 4, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthCell_r1980 = ctx.$implicit;
    const ctx_r1979 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", monthCell_r1980.title);
    i0.ɵɵproperty("ngClass", monthCell_r1980.classMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r1979.prefixCls);
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
    const row_r1978 = ctx.$implicit;
    const ctx_r1977 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r1978)("ngForTrackBy", ctx_r1977.trackPanelMonth);
} }
const MAX_ROW = 4;
const MAX_COL = 3;
export class MonthTableComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vbnRoLXRhYmxlLmNvbXBvbmVudC50cyIsIm1vbnRoLXRhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztJQ1B2Qyx3QkFHZTs7OztJQUpqQiw2QkFDRTtJQUFBLDhIQUdBO0lBQ0YsMEJBQWU7Ozs7SUFIWCxlQUFnRjtJQUFoRixnRUFBZ0YsOEVBQUE7OztJQU9oRix3QkFHZTs7O0lBSmpCLDJCQUNFO0lBQUEsbUlBR0E7SUFDRixpQkFBTTs7OztJQUx1Qiw4REFBK0I7SUFFeEQsZUFBNEU7SUFBNUUsNERBQTRFLDhFQUFBOzs7SUFIaEYsMkJBQW1DO0lBQUEsWUFBdUI7SUFBQSxpQkFBTTtJQUNoRSw0R0FDRTs7OztJQUZHLDREQUE2QjtJQUFDLGVBQXVCO0lBQXZCLDZDQUF1QjtJQUNyRCxlQUF1QjtJQUF2QixnREFBdUI7OztJQVZsQyw2QkFDRTtJQUFBLDJCQUNFO0lBQUEsK0dBQ0U7SUFLRiw4SUFDRTtJQVFKLGlCQUFNO0lBQ1IsMEJBQWU7Ozs7SUFqQlIsZUFBNkI7SUFBN0IsNERBQTZCO0lBQ2xCLGVBQTZDO0lBQTdDLG9EQUE2QyxvQkFBQTs7O0lBaUIvRCw2QkFDRTtJQUFBLHlCQUE2QztJQUFBLFlBQXVCO0lBQUEsaUJBQUk7SUFDMUUsMEJBQWU7Ozs7SUFEVixlQUF5QztJQUF6Qyx3RUFB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QjtjQVIvQixTQUFTO2VBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLDRCQUE0QjthQUMxQzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBRU4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuY29uc3QgTUFYX1JPVyA9IDQ7XHJcbmNvbnN0IE1BWF9DT0wgPSAzO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdtb250aC10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdtb250aFRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ21vbnRoLXRhYmxlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9udGhUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcclxuICBASW5wdXQoKSBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtZnVsbGNhbGVuZGFyJztcclxuICBASW5wdXQoKSBtb250aENlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+O1xyXG4gIEBJbnB1dCgpIG1vbnRoRnVsbENlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xyXG5cclxuICBwYW5lbE1vbnRoczogUGFuZWxNb250aERhdGFbXVtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSB8fCBjaGFuZ2VzLmRpc2FibGVkRGF0ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tZZWFyKF9pbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS5nZXRZZWFyKCkgOiBfaW5kZXg7XHJcbiAgfVxyXG5cclxuICB0cmFja1BhbmVsTW9udGgoX2luZGV4OiBudW1iZXIsIG1vbnRoRGF0YTogUGFuZWxNb250aERhdGEpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG1vbnRoRGF0YS5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnBhbmVsTW9udGhzID0gdGhpcy5tYWtlUGFuZWxNb250aHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVBhbmVsTW9udGhzKCk6IFBhbmVsTW9udGhEYXRhW11bXSB7XHJcbiAgICBjb25zdCBtb250aHM6IFBhbmVsTW9udGhEYXRhW11bXSA9IFtdO1xyXG4gICAgY29uc3QgY3VycmVudE1vbnRoID0gdGhpcy52YWx1ZS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcblxyXG4gICAgbGV0IG1vbnRoVmFsdWUgPSAwO1xyXG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IE1BWF9ST1c7IHJvd0luZGV4KyspIHtcclxuICAgICAgbW9udGhzW3Jvd0luZGV4XSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy52YWx1ZS5zZXRNb250aChtb250aFZhbHVlKTtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWREYXRlID8gdGhpcy5kaXNhYmxlZERhdGUodGhpcy52YWx1ZS5zZXRNb250aChtb250aFZhbHVlKS5uYXRpdmVEYXRlKSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KG1vbnRoLm5hdGl2ZURhdGUsICdNTU0nKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbDogUGFuZWxNb250aERhdGEgPSAobW9udGhzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB7XHJcbiAgICAgICAgICB2YWx1ZTogbW9udGgubmF0aXZlRGF0ZSxcclxuICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgIG1vbnRoOiBtb250aFZhbHVlLFxyXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICAgICAgICBjbGFzc01hcDogbnVsbCxcclxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hvb3NlTW9udGgoY2VsbC5tb250aCkgLy8gZG9uJ3QgdXNlIG1vbnRoVmFsdWUgaGVyZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjZWxsLmNsYXNzTWFwID0ge1xyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1tb250aC1wYW5lbC1jZWxsYF06IHRydWUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLWNlbGwtZGlzYWJsZWRgXTogZGlzYWJsZWQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLXNlbGVjdGVkLWNlbGxgXTogbW9udGhWYWx1ZSA9PT0gY3VycmVudE1vbnRoLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1tb250aC1wYW5lbC1jdXJyZW50LWNlbGxgXTogdG9kYXkuZ2V0WWVhcigpID09PSB0aGlzLnZhbHVlLmdldFllYXIoKSAmJiBtb250aFZhbHVlID09PSB0b2RheS5nZXRNb250aCgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbW9udGhWYWx1ZSsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9udGhzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaG9vc2VNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zZXRNb250aChtb250aCk7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYW5lbE1vbnRoRGF0YSB7XHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIG1vbnRoOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcclxuICBvbkNsaWNrOiBWb2lkRnVuY3Rpb24gfCBudWxsO1xyXG4gIHZhbHVlOiBEYXRlO1xyXG59XHJcbiIsIjx0YWJsZSBjbGFzcz1cInt7IHByZWZpeENscyB9fS1tb250aC1wYW5lbC10YWJsZVwiIGNlbGxTcGFjaW5nPVwiMFwiIHJvbGU9XCJncmlkXCI+XHJcbiAgPHRib2R5IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW1vbnRoLXBhbmVsLXRib2R5XCI+XHJcbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBwYW5lbE1vbnRoczsgdHJhY2tCeTogdHJhY2tZZWFyXCIgcm9sZT1cInJvd1wiPlxyXG4gICAgICA8dGRcclxuICAgICAgICAqbmdGb3I9XCJsZXQgbW9udGhDZWxsIG9mIHJvdzsgdHJhY2tCeTogdHJhY2tQYW5lbE1vbnRoXCJcclxuICAgICAgICByb2xlPVwiZ3JpZGNlbGxcIlxyXG4gICAgICAgIHRpdGxlPVwie3sgbW9udGhDZWxsLnRpdGxlIH19XCJcclxuICAgICAgICAoY2xpY2spPVwibW9udGhDZWxsLmRpc2FibGVkID8gbnVsbCA6IG1vbnRoQ2VsbC5vbkNsaWNrKClcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cIm1vbnRoQ2VsbC5jbGFzc01hcFwiXHJcbiAgICAgID5cclxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJwcmVmaXhDbHNcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidhbnQtZnVsbGNhbGVuZGFyJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW1vbnRoXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1vbnRoRnVsbENlbGxSZW5kZXI7IGVsc2UgZGVmYXVsdENlbGxcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtb250aEZ1bGxDZWxsUmVuZGVyOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogbW9udGhDZWxsLnZhbHVlIH1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0Q2VsbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tdmFsdWVcIj57eyBtb250aENlbGwuY29udGVudCB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm1vbnRoQ2VsbFJlbmRlclwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwibW9udGhDZWxsUmVuZGVyOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogbW9udGhDZWxsLnZhbHVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidhbnQtY2FsZW5kYXInXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW1vbnRoLXBhbmVsLW1vbnRoXCI+e3sgbW9udGhDZWxsLmNvbnRlbnQgfX08L2E+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgPC90Ym9keT5cclxuPC90YWJsZT5cclxuIl19