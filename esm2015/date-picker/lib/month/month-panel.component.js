/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/calendar";
export class MonthPanelComponent {
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
/** @nocollapse */ MonthPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MonthPanelComponent, selectors: [["month-panel"]], inputs: { locale: "locale", value: "value", disabledDate: "disabledDate" }, outputs: { valueChange: "valueChange", yearPanelShow: "yearPanelShow" }, exportAs: ["monthPanel"], decls: 12, vars: 31, consts: [["role", "button", 3, "title", "click"], [3, "prefixCls", "disabledDate", "value", "valueChange"]], template: function MonthPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵelementStart(3, "a", 0);
        i0.ɵɵlistener("click", function MonthPanelComponent_Template_a_click_3_listener($event) { return ctx.previousYear(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "a", 0);
        i0.ɵɵlistener("click", function MonthPanelComponent_Template_a_click_4_listener($event) { return ctx.yearPanelShow.emit(); });
        i0.ɵɵelementStart(5, "span");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "span");
        i0.ɵɵtext(8, "x");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "a", 0);
        i0.ɵɵlistener("click", function MonthPanelComponent_Template_a_click_9_listener($event) { return ctx.nextYear(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div");
        i0.ɵɵelementStart(11, "month-table", 1);
        i0.ɵɵlistener("valueChange", function MonthPanelComponent_Template_month_table_valueChange_11_listener($event) { return ctx.valueChange.emit($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.prefixCls);
        i0.ɵɵadvance(2);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-year-btn");
        i0.ɵɵpropertyInterpolate("title", ctx.locale.previousYear);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-year-select");
        i0.ɵɵpropertyInterpolate("title", ctx.locale.yearSelect);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-year-select-content");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.value.getYear());
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-year-select-arrow");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-year-btn");
        i0.ɵɵpropertyInterpolate("title", ctx.locale.nextYear);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("prefixCls", "ant-calendar")("disabledDate", ctx.disabledDate)("value", ctx.value);
    } }, directives: [i1.MonthTableComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MonthPanelComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9tb250aC9tb250aC1wYW5lbC5jb21wb25lbnQudHMiLCJsaWIvbW9udGgvbW9udGgtcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQVUvQyxNQUFNLE9BQU8sbUJBQW1CO0lBUGhDO1FBWXFCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUM1QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFNUQsY0FBUyxHQUFXLDBCQUEwQixDQUFDO0tBZWhEO0lBYkMsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELG1HQUFtRztJQUMzRixRQUFRLENBQUMsTUFBYztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLGlGQUFpRjtJQUNuRixDQUFDOztzRkF0QlUsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNwQmhDLDJCQUNFO1FBQUEsMkJBQ0U7UUFBQSwyQkFDRTtRQUFBLDRCQUtLO1FBRkgsaUdBQVMsa0JBQWMsSUFBQztRQUV6QixpQkFBSTtRQUVMLDRCQU1FO1FBSEEsaUdBQVMsd0JBQW9CLElBQUM7UUFHOUIsNEJBQWtEO1FBQUEsWUFBcUI7UUFBQSxpQkFBTztRQUM5RSw0QkFBZ0Q7UUFBQSxpQkFBQztRQUFBLGlCQUFPO1FBQzFELGlCQUFJO1FBRUosNEJBS0s7UUFGSCxpR0FBUyxjQUFVLElBQUM7UUFFckIsaUJBQUk7UUFDUCxpQkFBTTtRQUNOLDRCQUNFO1FBQUEsdUNBS2U7UUFEYix3SEFBZSw0QkFBd0IsSUFBQztRQUN6QyxpQkFBYztRQUNqQixpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O1FBcENELDRCQUF1QjtRQUVuQixlQUE4QjtRQUE5Qix1REFBOEI7UUFFL0IsZUFBcUM7UUFBckMsOERBQXFDO1FBR3JDLDBEQUFpQztRQUlqQyxlQUFtQztRQUFuQyw0REFBbUM7UUFHbkMsd0RBQStCO1FBRXpCLGVBQTJDO1FBQTNDLG9FQUEyQztRQUFDLGVBQXFCO1FBQXJCLHlDQUFxQjtRQUNqRSxlQUF5QztRQUF6QyxrRUFBeUM7UUFJL0MsZUFBcUM7UUFBckMsOERBQXFDO1FBR3JDLHNEQUE2QjtRQUc1QixlQUE0QjtRQUE1QixxREFBNEI7UUFFN0IsZUFBNEI7UUFBNUIsMENBQTRCLGtDQUFBLG9CQUFBOztrRERUdkIsbUJBQW1CO2NBUC9CLFNBQVM7ZUFBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLDRCQUE0QjthQUMxQzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ21vbnRoLXBhbmVsJywgLy8gdHNsaW50OmRpc2FibGUtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBleHBvcnRBczogJ21vbnRoUGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbW9udGgtcGFuZWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb250aFBhbmVsQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHllYXJQYW5lbFNob3cgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhci1tb250aC1wYW5lbCc7XHJcblxyXG4gIHByZXZpb3VzWWVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b1llYXIoLTEpO1xyXG4gIH1cclxuXHJcbiAgbmV4dFllYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9ZZWFyKDEpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmUtcmVuZGVyIHBhbmVsIGNvbnRlbnQgYnkgdGhlIGhlYWRlcidzIGJ1dHRvbnMgKE5PVEU6IERvIG5vdCB0cnkgdG8gdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2UpXHJcbiAgcHJpdmF0ZSBnb3RvWWVhcihhbW91bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuYWRkWWVhcnMoYW1vdW50KTtcclxuICAgIC8vIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTsgLy8gRG8gbm90IHRyeSB0byB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19XCI+XHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0taGVhZGVyXCI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcHJldi15ZWFyLWJ0blwiXHJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzWWVhcigpXCJcclxuICAgICAgICB0aXRsZT1cInt7IGxvY2FsZS5wcmV2aW91c1llYXIgfX1cIlxyXG4gICAgICA+PC9hPlxyXG5cclxuICAgICAgPGFcclxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS15ZWFyLXNlbGVjdFwiXHJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgKGNsaWNrKT1cInllYXJQYW5lbFNob3cuZW1pdCgpXCJcclxuICAgICAgICB0aXRsZT1cInt7IGxvY2FsZS55ZWFyU2VsZWN0IH19XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXllYXItc2VsZWN0LWNvbnRlbnRcIj57eyB2YWx1ZS5nZXRZZWFyKCkgfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0teWVhci1zZWxlY3QtYXJyb3dcIj54PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcblxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW5leHQteWVhci1idG5cIlxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgIChjbGljayk9XCJuZXh0WWVhcigpXCJcclxuICAgICAgICB0aXRsZT1cInt7IGxvY2FsZS5uZXh0WWVhciB9fVwiXHJcbiAgICAgID48L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tYm9keVwiPlxyXG4gICAgICA8bW9udGgtdGFibGVcclxuICAgICAgICBbcHJlZml4Q2xzXT1cIidhbnQtY2FsZW5kYXInXCJcclxuICAgICAgICBbZGlzYWJsZWREYXRlXT1cImRpc2FibGVkRGF0ZVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICAodmFsdWVDaGFuZ2UpPVwidmFsdWVDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgPjwvbW9udGgtdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==