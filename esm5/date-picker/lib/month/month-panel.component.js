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
var MonthPanelComponent = /** @class */ (function () {
    function MonthPanelComponent() {
        this.valueChange = new EventEmitter();
        this.yearPanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-month-panel';
    }
    MonthPanelComponent.prototype.previousYear = function () {
        this.gotoYear(-1);
    };
    MonthPanelComponent.prototype.nextYear = function () {
        this.gotoYear(1);
    };
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    MonthPanelComponent.prototype.gotoYear = function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
    };
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
    return MonthPanelComponent;
}());
export { MonthPanelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9tb250aC9tb250aC1wYW5lbC5jb21wb25lbnQudHMiLCJsaWIvbW9udGgvbW9udGgtcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUcvQztJQUFBO1FBWXFCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUM1QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFNUQsY0FBUyxHQUFXLDBCQUEwQixDQUFDO0tBZWhEO0lBYkMsMENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELG1HQUFtRztJQUMzRixzQ0FBUSxHQUFoQixVQUFpQixNQUFjO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsaUZBQWlGO0lBQ25GLENBQUM7MEZBdEJVLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lDcEJoQywyQkFDRTtZQUFBLDJCQUNFO1lBQUEsMkJBQ0U7WUFBQSw0QkFLSztZQUZILGlHQUFTLGtCQUFjLElBQUM7WUFFekIsaUJBQUk7WUFFTCw0QkFNRTtZQUhBLGlHQUFTLHdCQUFvQixJQUFDO1lBRzlCLDRCQUFrRDtZQUFBLFlBQXFCO1lBQUEsaUJBQU87WUFDOUUsNEJBQWdEO1lBQUEsaUJBQUM7WUFBQSxpQkFBTztZQUMxRCxpQkFBSTtZQUVKLDRCQUtLO1lBRkgsaUdBQVMsY0FBVSxJQUFDO1lBRXJCLGlCQUFJO1lBQ1AsaUJBQU07WUFDTiw0QkFDRTtZQUFBLHVDQUtlO1lBRGIsd0hBQWUsNEJBQXdCLElBQUM7WUFDekMsaUJBQWM7WUFDakIsaUJBQU07WUFDUixpQkFBTTtZQUNSLGlCQUFNOztZQXBDRCw0QkFBdUI7WUFFbkIsZUFBOEI7WUFBOUIsdURBQThCO1lBRS9CLGVBQXFDO1lBQXJDLDhEQUFxQztZQUdyQywwREFBaUM7WUFJakMsZUFBbUM7WUFBbkMsNERBQW1DO1lBR25DLHdEQUErQjtZQUV6QixlQUEyQztZQUEzQyxvRUFBMkM7WUFBQyxlQUFxQjtZQUFyQix5Q0FBcUI7WUFDakUsZUFBeUM7WUFBekMsa0VBQXlDO1lBSS9DLGVBQXFDO1lBQXJDLDhEQUFxQztZQUdyQyxzREFBNkI7WUFHNUIsZUFBNEI7WUFBNUIscURBQTRCO1lBRTdCLGVBQTRCO1lBQTVCLDBDQUE0QixrQ0FBQSxvQkFBQTs7OEJEN0JwQztDQTJDQyxBQTlCRCxJQThCQztTQXZCWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQVAvQixTQUFTO2VBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw0QkFBNEI7YUFDMUM7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICdtb250aC1wYW5lbCcsIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgZXhwb3J0QXM6ICdtb250aFBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJ21vbnRoLXBhbmVsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9udGhQYW5lbENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB5ZWFyUGFuZWxTaG93ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXItbW9udGgtcGFuZWwnO1xyXG5cclxuICBwcmV2aW91c1llYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9ZZWFyKC0xKTtcclxuICB9XHJcblxyXG4gIG5leHRZZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb3RvWWVhcigxKTtcclxuICB9XHJcblxyXG4gIC8vIFJlLXJlbmRlciBwYW5lbCBjb250ZW50IGJ5IHRoZSBoZWFkZXIncyBidXR0b25zIChOT1RFOiBEbyBub3QgdHJ5IHRvIHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlKVxyXG4gIHByaXZhdGUgZ290b1llYXIoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmFkZFllYXJzKGFtb3VudCk7XHJcbiAgICAvLyB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7IC8vIERvIG5vdCB0cnkgdG8gdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2VcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fVwiPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWhlYWRlclwiPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXByZXYteWVhci1idG5cIlxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgIChjbGljayk9XCJwcmV2aW91c1llYXIoKVwiXHJcbiAgICAgICAgdGl0bGU9XCJ7eyBsb2NhbGUucHJldmlvdXNZZWFyIH19XCJcclxuICAgICAgPjwvYT5cclxuXHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0teWVhci1zZWxlY3RcIlxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgIChjbGljayk9XCJ5ZWFyUGFuZWxTaG93LmVtaXQoKVwiXHJcbiAgICAgICAgdGl0bGU9XCJ7eyBsb2NhbGUueWVhclNlbGVjdCB9fVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInt7IHByZWZpeENscyB9fS15ZWFyLXNlbGVjdC1jb250ZW50XCI+e3sgdmFsdWUuZ2V0WWVhcigpIH19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXllYXItc2VsZWN0LWFycm93XCI+eDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG5cclxuICAgICAgPGFcclxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1uZXh0LXllYXItYnRuXCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAoY2xpY2spPVwibmV4dFllYXIoKVwiXHJcbiAgICAgICAgdGl0bGU9XCJ7eyBsb2NhbGUubmV4dFllYXIgfX1cIlxyXG4gICAgICA+PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWJvZHlcIj5cclxuICAgICAgPG1vbnRoLXRhYmxlXHJcbiAgICAgICAgW3ByZWZpeENsc109XCInYW50LWNhbGVuZGFyJ1wiXHJcbiAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgKHZhbHVlQ2hhbmdlKT1cInZhbHVlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgID48L21vbnRoLXRhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=