/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./today-button.component";
import * as i3 from "./time-picker-button.component";
import * as i4 from "./ok-button.component";
function CalendarFooterComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CalendarFooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CalendarFooterComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2365 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("", ctx_r2365.prefixCls, "-footer-extra ", ctx_r2365.prefixCls, "-range-quick-selector");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2365.rangeQuickSelector);
} }
function CalendarFooterComponent_div_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CalendarFooterComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CalendarFooterComponent_div_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2369 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2369.extraFooter);
} }
function CalendarFooterComponent_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2370 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r2370.extraFooter, i0.ɵɵsanitizeHtml);
} }
function CalendarFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementContainerStart(1, 2);
    i0.ɵɵtemplate(2, CalendarFooterComponent_div_2_ng_container_2_Template, 2, 1, "ng-container", 3);
    i0.ɵɵtemplate(3, CalendarFooterComponent_div_2_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2366 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("", ctx_r2366.prefixCls, "-footer-extra ", ctx_r2366.isRange ? ctx_r2366.prefixCls + "-range-quick-selector" : "", "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r2366.isTemplateRef(ctx_r2366.extraFooter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r2366.isNonEmptyString(ctx_r2366.extraFooter));
} }
function CalendarFooterComponent_span_3_today_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r2376 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "today-button", 8);
    i0.ɵɵlistener("clickToday", function CalendarFooterComponent_span_3_today_button_1_Template_today_button_clickToday_0_listener($event) { i0.ɵɵrestoreView(_r2376); var ctx_r2375 = i0.ɵɵnextContext(2); return ctx_r2375.clickToday.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2372 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("locale", ctx_r2372.locale)("disabledDate", ctx_r2372.disabledDate)("hasTimePicker", ctx_r2372.hasTimePicker);
} }
function CalendarFooterComponent_span_3_time_picker_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r2378 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "time-picker-button", 9);
    i0.ɵɵlistener("showTimePickerChange", function CalendarFooterComponent_span_3_time_picker_button_2_Template_time_picker_button_showTimePickerChange_0_listener($event) { i0.ɵɵrestoreView(_r2378); var ctx_r2377 = i0.ɵɵnextContext(2); return ctx_r2377.showTimePickerChange.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2373 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("locale", ctx_r2373.locale)("timePickerDisabled", ctx_r2373.timePickerDisabled)("showTimePicker", ctx_r2373.showTimePicker);
} }
function CalendarFooterComponent_span_3_ok_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r2380 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ok-button", 10);
    i0.ɵɵlistener("clickOk", function CalendarFooterComponent_span_3_ok_button_3_Template_ok_button_clickOk_0_listener($event) { i0.ɵɵrestoreView(_r2380); var ctx_r2379 = i0.ɵɵnextContext(2); return ctx_r2379.clickOk.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2374 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("okDisabled", ctx_r2374.okDisabled)("locale", ctx_r2374.locale);
} }
function CalendarFooterComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, CalendarFooterComponent_span_3_today_button_1_Template, 1, 3, "today-button", 5);
    i0.ɵɵtemplate(2, CalendarFooterComponent_span_3_time_picker_button_2_Template, 1, 3, "time-picker-button", 6);
    i0.ɵɵtemplate(3, CalendarFooterComponent_span_3_ok_button_3_Template, 1, 2, "ok-button", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2367 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2367.prefixCls, "-footer-btn");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2367.showToday);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2367.hasTimePicker);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2367.hasTimePicker);
} }
var CalendarFooterComponent = /** @class */ (function () {
    function CalendarFooterComponent() {
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
    /** @nocollapse */ CalendarFooterComponent.ɵfac = function CalendarFooterComponent_Factory(t) { return new (t || CalendarFooterComponent)(); };
    /** @nocollapse */ CalendarFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CalendarFooterComponent, selectors: [["calendar-footer"]], inputs: { locale: "locale", showToday: "showToday", hasTimePicker: "hasTimePicker", isRange: "isRange", showTimePicker: "showTimePicker", timePickerDisabled: "timePickerDisabled", okDisabled: "okDisabled", disabledDate: "disabledDate", extraFooter: "extraFooter", rangeQuickSelector: "rangeQuickSelector" }, outputs: { showTimePickerChange: "showTimePickerChange", clickOk: "clickOk", clickToday: "clickToday" }, exportAs: ["calendarFooter"], decls: 4, vars: 8, consts: [[3, "class", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "innerHTML"], [3, "locale", "disabledDate", "hasTimePicker", "clickToday", 4, "ngIf"], [3, "locale", "timePickerDisabled", "showTimePicker", "showTimePickerChange", 4, "ngIf"], [3, "okDisabled", "locale", "clickOk", 4, "ngIf"], [3, "locale", "disabledDate", "hasTimePicker", "clickToday"], [3, "locale", "timePickerDisabled", "showTimePicker", "showTimePickerChange"], [3, "okDisabled", "locale", "clickOk"]], template: function CalendarFooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, CalendarFooterComponent_div_1_Template, 2, 5, "div", 0);
            i0.ɵɵtemplate(2, CalendarFooterComponent_div_2_Template, 4, 7, "div", 0);
            i0.ɵɵtemplate(3, CalendarFooterComponent_span_3_Template, 4, 6, "span", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate3("", ctx.prefixCls, "-footer ", ctx.isRange ? ctx.prefixCls + "-range-bottom" : "", " ", ctx.hasTimePicker ? ctx.prefixCls + "-footer-show-ok" : "", "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.rangeQuickSelector);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.extraFooter);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showToday || ctx.hasTimePicker);
        } }, directives: [i1.NgIf, i1.NgTemplateOutlet, i1.NgSwitch, i1.NgSwitchCase, i2.TodayButtonComponent, i3.TimePickerButtonComponent, i4.OkButtonComponent], encapsulation: 2, changeDetection: 0 });
    return CalendarFooterComponent;
}());
export { CalendarFooterComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalendarFooterComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC50cyIsImxpYi9jYWxlbmRhci9jYWxlbmRhci1mb290ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEksT0FBTyxFQUFhLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0lDRDVFLHdCQUFvRTs7O0lBSnRFLDJCQUlFO0lBQUEsZ0dBQXFEO0lBQ3ZELGlCQUFNOzs7SUFISixrSEFBeUU7SUFFM0QsZUFBc0M7SUFBdEMsK0RBQXNDOzs7SUFRaEQsd0JBQTZEOzs7SUFEL0QsNkJBQ0U7SUFBQSwrR0FBOEM7SUFDaEQsMEJBQWU7OztJQURDLGVBQStCO0lBQS9CLHdEQUErQjs7O0lBRS9DLDZCQUNFO0lBQUEsMEJBQXVDO0lBQ3pDLDBCQUFlOzs7SUFEUCxlQUF5QjtJQUF6QixvRUFBeUI7OztJQVRyQywyQkFJRTtJQUFBLGdDQUNFO0lBQUEsZ0dBQ0U7SUFFRixnR0FDRTtJQUVKLDBCQUFlO0lBQ2pCLGlCQUFNOzs7SUFWSixnSkFBNkY7SUFFL0UsZUFBaUI7SUFBakIsK0JBQWlCO0lBQ2YsZUFBMEM7SUFBMUMsNkVBQTBDO0lBRzFDLGVBQTZDO0lBQTdDLGdGQUE2Qzs7OztJQU03RCx1Q0FNZ0I7SUFEZCwrTUFBYyxpQ0FBdUIsSUFBQztJQUN2QyxpQkFBZTs7O0lBSmQseUNBQWlCLHdDQUFBLDBDQUFBOzs7O0lBS25CLDZDQU1zQjtJQURwQiwrT0FBd0IsMkNBQWlDLElBQUM7SUFDM0QsaUJBQXFCOzs7SUFKcEIseUNBQWlCLG9EQUFBLDRDQUFBOzs7O0lBS25CLHFDQUthO0lBRFgsbU1BQVcsd0JBQWMsSUFBQztJQUMzQixpQkFBWTs7O0lBSFgsaURBQXlCLDRCQUFBOzs7SUFqQjdCLDRCQUNFO0lBQUEsaUdBTUM7SUFDRCw2R0FNQztJQUNELDJGQUtDO0lBQ0gsaUJBQU87OztJQXJCa0MsaUVBQWtDO0lBRXZFLGVBQWlCO0lBQWpCLDBDQUFpQjtJQU9qQixlQUFxQjtJQUFyQiw4Q0FBcUI7SUFPckIsZUFBcUI7SUFBckIsOENBQXFCOztBRDNCM0I7SUFBQTtRQVVXLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUN0Qix5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTdELHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBS2xCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRTlELGNBQVMsR0FBVyxjQUFjLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7S0FDckM7a0dBckJZLHVCQUF1QjtnRUFBdkIsdUJBQXVCO1lDckJwQywyQkFLRTtZQUFBLHdFQUlFO1lBRUYsd0VBSUU7WUFTRiwwRUFDRTtZQXFCSixpQkFBTTs7WUE3Q0osaUxBRUc7WUFHRCxlQUEwQjtZQUExQiw2Q0FBMEI7WUFNMUIsZUFBbUI7WUFBbkIsc0NBQW1CO1lBWWYsZUFBa0M7WUFBbEMseURBQWtDOztrQ0R4QjFDO0NBMENDLEFBN0JELElBNkJDO1NBckJZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBUm5DLFNBQVM7ZUFBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLGdDQUFnQzthQUM5Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBRU4sS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSwgaXNOb25FbXB0eVN0cmluZywgaXNUZW1wbGF0ZVJlZiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItZm9vdGVyJyxcclxuICBleHBvcnRBczogJ2NhbGVuZGFyRm9vdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NhbGVuZGFyLWZvb3Rlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRm9vdGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIHNob3dUb2RheTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhhc1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpc1JhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNob3dUaW1lUGlja2VyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKSB0aW1lUGlja2VyRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBva0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmFuZ2VRdWlja1NlbGVjdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrT2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrVG9kYXkgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcclxuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcclxuICBpc05vbkVtcHR5U3RyaW5nID0gaXNOb25FbXB0eVN0cmluZztcclxufVxyXG4iLCI8ZGl2XHJcbiAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZm9vdGVyIHt7IGlzUmFuZ2UgPyBwcmVmaXhDbHMgKyAnLXJhbmdlLWJvdHRvbScgOiAnJyB9fSB7e1xyXG4gICAgaGFzVGltZVBpY2tlciA/IHByZWZpeENscyArICctZm9vdGVyLXNob3ctb2snIDogJydcclxuICB9fVwiXHJcbj5cclxuICA8ZGl2XHJcbiAgICAqbmdJZj1cInJhbmdlUXVpY2tTZWxlY3RvclwiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1mb290ZXItZXh0cmEge3sgcHJlZml4Q2xzIH19LXJhbmdlLXF1aWNrLXNlbGVjdG9yXCJcclxuICA+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicmFuZ2VRdWlja1NlbGVjdG9yXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdlxyXG4gICAgKm5nSWY9XCJleHRyYUZvb3RlclwiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1mb290ZXItZXh0cmEge3sgaXNSYW5nZSA/IHByZWZpeENscyArICctcmFuZ2UtcXVpY2stc2VsZWN0b3InIDogJycgfX1cIlxyXG4gID5cclxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihleHRyYUZvb3RlcilcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZXh0cmFGb290ZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoZXh0cmFGb290ZXIpXCI+XHJcbiAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJleHRyYUZvb3RlclwiPjwvc3Bhbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuICA8c3BhbiAqbmdJZj1cInNob3dUb2RheSB8fCBoYXNUaW1lUGlja2VyXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZm9vdGVyLWJ0blwiPlxyXG4gICAgPHRvZGF5LWJ1dHRvblxyXG4gICAgICAqbmdJZj1cInNob3dUb2RheVwiXHJcbiAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcclxuICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxyXG4gICAgICBbaGFzVGltZVBpY2tlcl09XCJoYXNUaW1lUGlja2VyXCJcclxuICAgICAgKGNsaWNrVG9kYXkpPVwiY2xpY2tUb2RheS5lbWl0KCRldmVudClcIlxyXG4gICAgPjwvdG9kYXktYnV0dG9uPlxyXG4gICAgPHRpbWUtcGlja2VyLWJ1dHRvblxyXG4gICAgICAqbmdJZj1cImhhc1RpbWVQaWNrZXJcIlxyXG4gICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICAgIFt0aW1lUGlja2VyRGlzYWJsZWRdPVwidGltZVBpY2tlckRpc2FibGVkXCJcclxuICAgICAgW3Nob3dUaW1lUGlja2VyXT1cInNob3dUaW1lUGlja2VyXCJcclxuICAgICAgKHNob3dUaW1lUGlja2VyQ2hhbmdlKT1cInNob3dUaW1lUGlja2VyQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICA+PC90aW1lLXBpY2tlci1idXR0b24+XHJcbiAgICA8b2stYnV0dG9uXHJcbiAgICAgICpuZ0lmPVwiaGFzVGltZVBpY2tlclwiXHJcbiAgICAgIFtva0Rpc2FibGVkXT1cIm9rRGlzYWJsZWRcIlxyXG4gICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICAgIChjbGlja09rKT1cImNsaWNrT2suZW1pdCgpXCJcclxuICAgID48L29rLWJ1dHRvbj5cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=