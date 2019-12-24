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
    const ctx_r2206 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("", ctx_r2206.prefixCls, "-footer-extra ", ctx_r2206.prefixCls, "-range-quick-selector");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2206.rangeQuickSelector);
} }
function CalendarFooterComponent_div_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CalendarFooterComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CalendarFooterComponent_div_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2210 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2210.extraFooter);
} }
function CalendarFooterComponent_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2211 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r2211.extraFooter, i0.ɵɵsanitizeHtml);
} }
function CalendarFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementContainerStart(1, 2);
    i0.ɵɵtemplate(2, CalendarFooterComponent_div_2_ng_container_2_Template, 2, 1, "ng-container", 3);
    i0.ɵɵtemplate(3, CalendarFooterComponent_div_2_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2207 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("", ctx_r2207.prefixCls, "-footer-extra ", ctx_r2207.isRange ? ctx_r2207.prefixCls + "-range-quick-selector" : "", "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r2207.isTemplateRef(ctx_r2207.extraFooter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r2207.isNonEmptyString(ctx_r2207.extraFooter));
} }
function CalendarFooterComponent_span_3_today_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2217 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "today-button", 8);
    i0.ɵɵlistener("clickToday", function CalendarFooterComponent_span_3_today_button_1_Template_today_button_clickToday_0_listener($event) { i0.ɵɵrestoreView(_r2217); const ctx_r2216 = i0.ɵɵnextContext(2); return ctx_r2216.clickToday.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2213 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("locale", ctx_r2213.locale)("disabledDate", ctx_r2213.disabledDate)("hasTimePicker", ctx_r2213.hasTimePicker);
} }
function CalendarFooterComponent_span_3_time_picker_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r2219 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "time-picker-button", 9);
    i0.ɵɵlistener("showTimePickerChange", function CalendarFooterComponent_span_3_time_picker_button_2_Template_time_picker_button_showTimePickerChange_0_listener($event) { i0.ɵɵrestoreView(_r2219); const ctx_r2218 = i0.ɵɵnextContext(2); return ctx_r2218.showTimePickerChange.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2214 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("locale", ctx_r2214.locale)("timePickerDisabled", ctx_r2214.timePickerDisabled)("showTimePicker", ctx_r2214.showTimePicker);
} }
function CalendarFooterComponent_span_3_ok_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2221 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ok-button", 10);
    i0.ɵɵlistener("clickOk", function CalendarFooterComponent_span_3_ok_button_3_Template_ok_button_clickOk_0_listener($event) { i0.ɵɵrestoreView(_r2221); const ctx_r2220 = i0.ɵɵnextContext(2); return ctx_r2220.clickOk.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2215 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("okDisabled", ctx_r2215.okDisabled)("locale", ctx_r2215.locale);
} }
function CalendarFooterComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, CalendarFooterComponent_span_3_today_button_1_Template, 1, 3, "today-button", 5);
    i0.ɵɵtemplate(2, CalendarFooterComponent_span_3_time_picker_button_2_Template, 1, 3, "time-picker-button", 6);
    i0.ɵɵtemplate(3, CalendarFooterComponent_span_3_ok_button_3_Template, 1, 2, "ok-button", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2208 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2208.prefixCls, "-footer-btn");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2208.showToday);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2208.hasTimePicker);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2208.hasTimePicker);
} }
export class CalendarFooterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC50cyIsImxpYi9jYWxlbmRhci9jYWxlbmRhci1mb290ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEksT0FBTyxFQUFhLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0lDRDVFLHdCQUFvRTs7O0lBSnRFLDJCQUlFO0lBQUEsZ0dBQXFEO0lBQ3ZELGlCQUFNOzs7SUFISixrSEFBeUU7SUFFM0QsZUFBc0M7SUFBdEMsK0RBQXNDOzs7SUFRaEQsd0JBQTZEOzs7SUFEL0QsNkJBQ0U7SUFBQSwrR0FBOEM7SUFDaEQsMEJBQWU7OztJQURDLGVBQStCO0lBQS9CLHdEQUErQjs7O0lBRS9DLDZCQUNFO0lBQUEsMEJBQXVDO0lBQ3pDLDBCQUFlOzs7SUFEUCxlQUF5QjtJQUF6QixvRUFBeUI7OztJQVRyQywyQkFJRTtJQUFBLGdDQUNFO0lBQUEsZ0dBQ0U7SUFFRixnR0FDRTtJQUVKLDBCQUFlO0lBQ2pCLGlCQUFNOzs7SUFWSixnSkFBNkY7SUFFL0UsZUFBaUI7SUFBakIsK0JBQWlCO0lBQ2YsZUFBMEM7SUFBMUMsNkVBQTBDO0lBRzFDLGVBQTZDO0lBQTdDLGdGQUE2Qzs7OztJQU03RCx1Q0FNZ0I7SUFEZCxpTkFBYyxpQ0FBdUIsSUFBQztJQUN2QyxpQkFBZTs7O0lBSmQseUNBQWlCLHdDQUFBLDBDQUFBOzs7O0lBS25CLDZDQU1zQjtJQURwQixpUEFBd0IsMkNBQWlDLElBQUM7SUFDM0QsaUJBQXFCOzs7SUFKcEIseUNBQWlCLG9EQUFBLDRDQUFBOzs7O0lBS25CLHFDQUthO0lBRFgscU1BQVcsd0JBQWMsSUFBQztJQUMzQixpQkFBWTs7O0lBSFgsaURBQXlCLDRCQUFBOzs7SUFqQjdCLDRCQUNFO0lBQUEsaUdBTUM7SUFDRCw2R0FNQztJQUNELDJGQUtDO0lBQ0gsaUJBQU87OztJQXJCa0MsaUVBQWtDO0lBRXZFLGVBQWlCO0lBQWpCLDBDQUFpQjtJQU9qQixlQUFxQjtJQUFyQiw4Q0FBcUI7SUFPckIsZUFBcUI7SUFBckIsOENBQXFCOztBRG5CM0IsTUFBTSxPQUFPLHVCQUF1QjtJQVJwQztRQVVXLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUN0Qix5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTdELHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBS2xCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRTlELGNBQVMsR0FBVyxjQUFjLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7S0FDckM7OzhGQXJCWSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ3JCcEMsMkJBS0U7UUFBQSx3RUFJRTtRQUVGLHdFQUlFO1FBU0YsMEVBQ0U7UUFxQkosaUJBQU07O1FBN0NKLGlMQUVHO1FBR0QsZUFBMEI7UUFBMUIsNkNBQTBCO1FBTTFCLGVBQW1CO1FBQW5CLHNDQUFtQjtRQVlmLGVBQWtDO1FBQWxDLHlEQUFrQzs7a0RESDdCLHVCQUF1QjtjQVJuQyxTQUFTO2VBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSxnQ0FBZ0M7YUFDOUM7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUVOLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUsIGlzTm9uRW1wdHlTdHJpbmcsIGlzVGVtcGxhdGVSZWYgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NhbGVuZGFyLWZvb3RlcicsXHJcbiAgZXhwb3J0QXM6ICdjYWxlbmRhckZvb3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdjYWxlbmRhci1mb290ZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckZvb3RlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBzaG93VG9kYXk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBoYXNUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBzaG93VGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzaG93VGltZVBpY2tlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KCkgdGltZVBpY2tlckRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgb2tEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJhbmdlUXVpY2tTZWxlY3RvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGlja09rID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGlja1RvZGF5ID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XHJcbiAgaXNOb25FbXB0eVN0cmluZyA9IGlzTm9uRW1wdHlTdHJpbmc7XHJcbn1cclxuIiwiPGRpdlxyXG4gIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWZvb3RlciB7eyBpc1JhbmdlID8gcHJlZml4Q2xzICsgJy1yYW5nZS1ib3R0b20nIDogJycgfX0ge3tcclxuICAgIGhhc1RpbWVQaWNrZXIgPyBwcmVmaXhDbHMgKyAnLWZvb3Rlci1zaG93LW9rJyA6ICcnXHJcbiAgfX1cIlxyXG4+XHJcbiAgPGRpdlxyXG4gICAgKm5nSWY9XCJyYW5nZVF1aWNrU2VsZWN0b3JcIlxyXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZm9vdGVyLWV4dHJhIHt7IHByZWZpeENscyB9fS1yYW5nZS1xdWljay1zZWxlY3RvclwiXHJcbiAgPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInJhbmdlUXVpY2tTZWxlY3RvclwiPjwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXZcclxuICAgICpuZ0lmPVwiZXh0cmFGb290ZXJcIlxyXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZm9vdGVyLWV4dHJhIHt7IGlzUmFuZ2UgPyBwcmVmaXhDbHMgKyAnLXJhbmdlLXF1aWNrLXNlbGVjdG9yJyA6ICcnIH19XCJcclxuICA+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoZXh0cmFGb290ZXIpXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhRm9vdGVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGV4dHJhRm9vdGVyKVwiPlxyXG4gICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZXh0cmFGb290ZXJcIj48L3NwYW4+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbiAgPHNwYW4gKm5nSWY9XCJzaG93VG9kYXkgfHwgaGFzVGltZVBpY2tlclwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWZvb3Rlci1idG5cIj5cclxuICAgIDx0b2RheS1idXR0b25cclxuICAgICAgKm5nSWY9XCJzaG93VG9kYXlcIlxyXG4gICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICAgIFtkaXNhYmxlZERhdGVdPVwiZGlzYWJsZWREYXRlXCJcclxuICAgICAgW2hhc1RpbWVQaWNrZXJdPVwiaGFzVGltZVBpY2tlclwiXHJcbiAgICAgIChjbGlja1RvZGF5KT1cImNsaWNrVG9kYXkuZW1pdCgkZXZlbnQpXCJcclxuICAgID48L3RvZGF5LWJ1dHRvbj5cclxuICAgIDx0aW1lLXBpY2tlci1idXR0b25cclxuICAgICAgKm5nSWY9XCJoYXNUaW1lUGlja2VyXCJcclxuICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxyXG4gICAgICBbdGltZVBpY2tlckRpc2FibGVkXT1cInRpbWVQaWNrZXJEaXNhYmxlZFwiXHJcbiAgICAgIFtzaG93VGltZVBpY2tlcl09XCJzaG93VGltZVBpY2tlclwiXHJcbiAgICAgIChzaG93VGltZVBpY2tlckNoYW5nZSk9XCJzaG93VGltZVBpY2tlckNoYW5nZS5lbWl0KCRldmVudClcIlxyXG4gICAgPjwvdGltZS1waWNrZXItYnV0dG9uPlxyXG4gICAgPG9rLWJ1dHRvblxyXG4gICAgICAqbmdJZj1cImhhc1RpbWVQaWNrZXJcIlxyXG4gICAgICBbb2tEaXNhYmxlZF09XCJva0Rpc2FibGVkXCJcclxuICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxyXG4gICAgICAoY2xpY2tPayk9XCJjbGlja09rLmVtaXQoKVwiXHJcbiAgICA+PC9vay1idXR0b24+XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj5cclxuIl19