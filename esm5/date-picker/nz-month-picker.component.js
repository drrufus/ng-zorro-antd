import { __extends } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { HeaderPickerComponent } from './header-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "./picker.component";
import * as i4 from "@angular/common";
import * as i5 from "./lib/calendar/calendar-header.component";
import * as i6 from "./lib/calendar/calendar-footer.component";
function NzMonthPickerComponent_div_1_calendar_footer_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "calendar-footer", 8);
} if (rf & 2) {
    var ctx_r2497 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("extraFooter", ctx_r2497.extraFooter);
} }
function NzMonthPickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r2499 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "calendar-header", 6);
    i0.ɵɵlistener("panelModeChange", function NzMonthPickerComponent_div_1_Template_calendar_header_panelModeChange_5_listener($event) { i0.ɵɵrestoreView(_r2499); var ctx_r2498 = i0.ɵɵnextContext(); return ctx_r2498.onPanelModeChange($event); })("chooseYear", function NzMonthPickerComponent_div_1_Template_calendar_header_chooseYear_5_listener($event) { i0.ɵɵrestoreView(_r2499); var ctx_r2500 = i0.ɵɵnextContext(); return ctx_r2500.onChooseValue("year", $event); })("chooseMonth", function NzMonthPickerComponent_div_1_Template_calendar_header_chooseMonth_5_listener($event) { i0.ɵɵrestoreView(_r2499); var ctx_r2501 = i0.ɵɵnextContext(); return ctx_r2501.onChooseValue("month", $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NzMonthPickerComponent_div_1_calendar_footer_6_Template, 1, 1, "calendar-footer", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2496 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("ant-calendar-picker-container ", ctx_r2496.nzDropdownClassName, " ant-calendar-picker-container-placement-bottomLeft");
    i0.ɵɵproperty("ngStyle", ctx_r2496.nzPopupStyle);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabledMonth", ctx_r2496.nzDisabledDate)("disabledYear", ctx_r2496.nzDisabledDate)("panelMode", ctx_r2496.panelMode)("value", ctx_r2496.nzValue)("locale", ctx_r2496.nzLocale.lang)("enablePrev", true)("enableNext", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2496.extraFooter);
} }
var NzMonthPickerComponent = /** @class */ (function (_super) {
    __extends(NzMonthPickerComponent, _super);
    function NzMonthPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.nzFormat = 'yyyy-MM';
        _this.endPanelMode = 'month';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
        return _this;
    }
    /** @nocollapse */ NzMonthPickerComponent.ɵfac = function NzMonthPickerComponent_Factory(t) { return new (t || NzMonthPickerComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzMonthPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzMonthPickerComponent, selectors: [["nz-month-picker"]], inputs: { nzFormat: "nzFormat" }, exportAs: ["nzMonthPicker"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    multi: true,
                    useExisting: forwardRef((function () { return NzMonthPickerComponent; }))
                }
            ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [4, "ngIf"], [3, "ngStyle"], ["tabindex", "0", 1, "ant-calendar", "ant-calendar-month", "ant-calendar-month-calendar"], [1, "ant-calendar-month-calendar-content"], [1, "ant-calendar-month-header-wrap"], [3, "disabledMonth", "disabledYear", "panelMode", "value", "locale", "enablePrev", "enableNext", "panelModeChange", "chooseYear", "chooseMonth"], [3, "extraFooter", 4, "ngIf"], [3, "extraFooter"]], template: function NzMonthPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-picker", 0);
            i0.ɵɵlistener("valueChange", function NzMonthPickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzMonthPickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
            i0.ɵɵtemplate(1, NzMonthPickerComponent_div_1_Template, 7, 12, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleSanitizer(i0.ɵɵdefaultStyleSanitizer);
            i0.ɵɵstyleMap(ctx.nzStyle);
            i0.ɵɵclassMap(ctx.nzClassName);
            i0.ɵɵproperty("isRange", false)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.realOpenState);
        } }, directives: [i3.NzPickerComponent, i4.NgIf, i4.NgStyle, i5.CalendarHeaderComponent, i6.CalendarFooterComponent], encapsulation: 2, changeDetection: 0 });
    return NzMonthPickerComponent;
}(HeaderPickerComponent));
export { NzMonthPickerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMonthPickerComponent, [{
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
                        useExisting: forwardRef((function () { return NzMonthPickerComponent; }))
                    }
                ]
            }]
    }], function () { return [{ type: i1.NzI18nService }, { type: i0.ChangeDetectorRef }, { type: i1.DateHelperService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzFormat: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJuei1tb250aC1waWNrZXIuY29tcG9uZW50LnRzIiwiaGVhZGVyLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFzQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7SUNjNUUscUNBQW1GOzs7SUFBOUMsbURBQTJCOzs7O0lBdkJ4RSwyQkFDRTtJQUFBLDhCQU1FO0lBQUEsOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsMENBV21CO0lBUGpCLGlQQUE2QywyTUFFakIsTUFBTSxhQUZXLDZNQUdoQixPQUFPLGFBSFM7SUFPOUMsaUJBQWtCO0lBQ3JCLGlCQUFNO0lBQ04scUdBQWlFO0lBQ25FLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFNOzs7SUF6QkYsZUFFc0Q7SUFGdEQsaUpBRXNEO0lBQ3RELGdEQUF3QjtJQU1oQixlQUFnQztJQUFoQyx3REFBZ0MsMENBQUEsa0NBQUEsNEJBQUEsbUNBQUEsb0JBQUEsb0JBQUE7SUFZbkIsZUFBbUI7SUFBbkIsNENBQW1COztBRFo5QztJQWM0QywwQ0FBcUI7SUFLL0QsZ0NBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsUUFBbUIsRUFDbkIsVUFBc0IsRUFDSyxXQUFvQztRQU5qRSxZQVFFLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxTQUUxQztRQUo0QixpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFWeEQsY0FBUSxHQUFXLFNBQVMsQ0FBQztRQUV0QyxrQkFBWSxHQUF1QixPQUFPLENBQUM7UUFXekMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7O0lBQ3JFLENBQUM7Z0dBZlUsc0JBQXNCOytEQUF0QixzQkFBc0Isb0lBUnRCO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLEtBQUssRUFBRSxJQUFJO29CQUNYLFdBQVcsRUFBRSxVQUFVLEVBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixFQUFDO2lCQUN0RDthQUNGO1lDdkNILG9DQWdCRTtZQWJBLHdIQUFlLHlCQUFxQixJQUFDLHlHQVd2Qix3QkFBb0IsSUFYRztZQWFyQyx3RUFDRTtZQTJCSixpQkFBWTs7WUFuQ1YsK0NBQXlCO1lBR3pCLDBCQUFpQjtZQUhqQiw4QkFBeUI7WUFSekIsK0JBQWlCLHNCQUFBLG9CQUFBLDRCQUFBLHdCQUFBLGdDQUFBLDhCQUFBLGtDQUFBLG9CQUFBLCtFQUFBO1lBZVosZUFBcUI7WUFBckIsd0NBQXFCOztpQ0RoQjVCO0NBeURDLEFBOUJELENBYzRDLHFCQUFxQixHQWdCaEU7U0FoQlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FkbEMsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixLQUFLLEVBQUUsSUFBSTt3QkFDWCxXQUFXLEVBQUUsVUFBVSxFQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsRUFBQztxQkFDdEQ7aUJBQ0Y7YUFDRjs7c0JBWUksSUFBSTs7c0JBQUksUUFBUTs7a0JBVmxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXJQaWNrZXJDb21wb25lbnQsIFN1cHBvcnRIZWFkZXJQYW5lbCB9IGZyb20gJy4vaGVhZGVyLXBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ256LW1vbnRoLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICduek1vbnRoUGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpNb250aFBpY2tlckNvbXBvbmVudClcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1vbnRoUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgSGVhZGVyUGlja2VyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuekZvcm1hdDogc3RyaW5nID0gJ3l5eXktTU0nO1xyXG5cclxuICBlbmRQYW5lbE1vZGU6IFN1cHBvcnRIZWFkZXJQYW5lbCA9ICdtb250aCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpMThuLCBjZHIsIGRhdGVIZWxwZXIsIG5vQW5pbWF0aW9uKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYWxlbmRhci1waWNrZXInKTtcclxuICB9XHJcbn1cclxuIiwiPG56LXBpY2tlclxyXG4gIFtpc1JhbmdlXT1cImZhbHNlXCJcclxuICBbdmFsdWVdPVwibnpWYWx1ZVwiXHJcbiAgKHZhbHVlQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgW29wZW5dPVwibnpPcGVuXCJcclxuICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXHJcbiAgW2Zvcm1hdF09XCJuekZvcm1hdFwiXHJcbiAgW2FsbG93Q2xlYXJdPVwibnpBbGxvd0NsZWFyXCJcclxuICBbYXV0b0ZvY3VzXT1cIm56QXV0b0ZvY3VzXCJcclxuICBbY2xhc3NOYW1lXT1cIm56Q2xhc3NOYW1lXCJcclxuICBbcGxhY2Vob2xkZXJdPVwibnpQbGFjZUhvbGRlclwiXHJcbiAgW3NpemVdPVwibnpTaXplXCJcclxuICBbc3R5bGVdPVwibnpTdHlsZVwiXHJcbiAgW25vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAob3BlbkNoYW5nZSk9XCJvbk9wZW5DaGFuZ2UoJGV2ZW50KVwiXHJcbj5cclxuICA8ZGl2ICpuZ0lmPVwicmVhbE9wZW5TdGF0ZVwiPlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImFudC1jYWxlbmRhci1waWNrZXItY29udGFpbmVyIHt7XHJcbiAgICAgICAgbnpEcm9wZG93bkNsYXNzTmFtZVxyXG4gICAgICB9fSBhbnQtY2FsZW5kYXItcGlja2VyLWNvbnRhaW5lci1wbGFjZW1lbnQtYm90dG9tTGVmdFwiXHJcbiAgICAgIFtuZ1N0eWxlXT1cIm56UG9wdXBTdHlsZVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FsZW5kYXIgYW50LWNhbGVuZGFyLW1vbnRoIGFudC1jYWxlbmRhci1tb250aC1jYWxlbmRhclwiIHRhYmluZGV4PVwiMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FsZW5kYXItbW9udGgtY2FsZW5kYXItY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1jYWxlbmRhci1tb250aC1oZWFkZXItd3JhcFwiPlxyXG4gICAgICAgICAgICA8Y2FsZW5kYXItaGVhZGVyXHJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkTW9udGhdPVwibnpEaXNhYmxlZERhdGVcIlxyXG4gICAgICAgICAgICAgIFtkaXNhYmxlZFllYXJdPVwibnpEaXNhYmxlZERhdGVcIlxyXG4gICAgICAgICAgICAgIFtwYW5lbE1vZGVdPVwicGFuZWxNb2RlXCJcclxuICAgICAgICAgICAgICAocGFuZWxNb2RlQ2hhbmdlKT1cIm9uUGFuZWxNb2RlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgIFt2YWx1ZV09XCJuelZhbHVlXCJcclxuICAgICAgICAgICAgICAoY2hvb3NlWWVhcik9XCJvbkNob29zZVZhbHVlKCd5ZWFyJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgKGNob29zZU1vbnRoKT1cIm9uQ2hvb3NlVmFsdWUoJ21vbnRoJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgW2xvY2FsZV09XCJuekxvY2FsZS5sYW5nXCJcclxuICAgICAgICAgICAgICBbZW5hYmxlUHJldl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBbZW5hYmxlTmV4dF09XCJ0cnVlXCJcclxuICAgICAgICAgICAgPjwvY2FsZW5kYXItaGVhZGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Y2FsZW5kYXItZm9vdGVyICpuZ0lmPVwiZXh0cmFGb290ZXJcIiBbZXh0cmFGb290ZXJdPVwiZXh0cmFGb290ZXJcIj48L2NhbGVuZGFyLWZvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uei1waWNrZXI+XHJcbiJdfQ==