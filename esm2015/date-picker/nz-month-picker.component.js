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
    const ctx_r2338 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("extraFooter", ctx_r2338.extraFooter);
} }
function NzMonthPickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2340 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "calendar-header", 6);
    i0.ɵɵlistener("panelModeChange", function NzMonthPickerComponent_div_1_Template_calendar_header_panelModeChange_5_listener($event) { i0.ɵɵrestoreView(_r2340); const ctx_r2339 = i0.ɵɵnextContext(); return ctx_r2339.onPanelModeChange($event); })("chooseYear", function NzMonthPickerComponent_div_1_Template_calendar_header_chooseYear_5_listener($event) { i0.ɵɵrestoreView(_r2340); const ctx_r2341 = i0.ɵɵnextContext(); return ctx_r2341.onChooseValue("year", $event); })("chooseMonth", function NzMonthPickerComponent_div_1_Template_calendar_header_chooseMonth_5_listener($event) { i0.ɵɵrestoreView(_r2340); const ctx_r2342 = i0.ɵɵnextContext(); return ctx_r2342.onChooseValue("month", $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NzMonthPickerComponent_div_1_calendar_footer_6_Template, 1, 1, "calendar-footer", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2337 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("ant-calendar-picker-container ", ctx_r2337.nzDropdownClassName, " ant-calendar-picker-container-placement-bottomLeft");
    i0.ɵɵproperty("ngStyle", ctx_r2337.nzPopupStyle);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabledMonth", ctx_r2337.nzDisabledDate)("disabledYear", ctx_r2337.nzDisabledDate)("panelMode", ctx_r2337.panelMode)("value", ctx_r2337.nzValue)("locale", ctx_r2337.nzLocale.lang)("enablePrev", true)("enableNext", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2337.extraFooter);
} }
export class NzMonthPickerComponent extends HeaderPickerComponent {
    constructor(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.noAnimation = noAnimation;
        this.nzFormat = 'yyyy-MM';
        this.endPanelMode = 'month';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
/** @nocollapse */ NzMonthPickerComponent.ɵfac = function NzMonthPickerComponent_Factory(t) { return new (t || NzMonthPickerComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzMonthPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzMonthPickerComponent, selectors: [["nz-month-picker"]], inputs: { nzFormat: "nzFormat" }, exportAs: ["nzMonthPicker"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: forwardRef((() => NzMonthPickerComponent))
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
                        useExisting: forwardRef((() => NzMonthPickerComponent))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJuei1tb250aC1waWNrZXIuY29tcG9uZW50LnRzIiwiaGVhZGVyLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUscUJBQXFCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztJQ2M1RSxxQ0FBbUY7OztJQUE5QyxtREFBMkI7Ozs7SUF2QnhFLDJCQUNFO0lBQUEsOEJBTUU7SUFBQSw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSwwQ0FXbUI7SUFQakIsbVBBQTZDLDZNQUVqQixNQUFNLGFBRlcsK01BR2hCLE9BQU8sYUFIUztJQU85QyxpQkFBa0I7SUFDckIsaUJBQU07SUFDTixxR0FBaUU7SUFDbkUsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07OztJQXpCRixlQUVzRDtJQUZ0RCxpSkFFc0Q7SUFDdEQsZ0RBQXdCO0lBTWhCLGVBQWdDO0lBQWhDLHdEQUFnQywwQ0FBQSxrQ0FBQSw0QkFBQSxtQ0FBQSxvQkFBQSxvQkFBQTtJQVluQixlQUFtQjtJQUFuQiw0Q0FBbUI7O0FERTlDLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxxQkFBcUI7SUFLL0QsWUFDRSxJQUFtQixFQUNuQixHQUFzQixFQUN0QixVQUE2QixFQUM3QixRQUFtQixFQUNuQixVQUFzQixFQUNLLFdBQW9DO1FBRS9ELEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUZmLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQVZ4RCxhQUFRLEdBQVcsU0FBUyxDQUFDO1FBRXRDLGlCQUFZLEdBQXVCLE9BQU8sQ0FBQztRQVd6QyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs0RkFmVSxzQkFBc0I7MkRBQXRCLHNCQUFzQixvSUFSdEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxXQUFXLEVBQUUsVUFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixFQUFDO2FBQ3REO1NBQ0Y7UUN2Q0gsb0NBZ0JFO1FBYkEsd0hBQWUseUJBQXFCLElBQUMseUdBV3ZCLHdCQUFvQixJQVhHO1FBYXJDLHdFQUNFO1FBMkJKLGlCQUFZOztRQW5DViwrQ0FBeUI7UUFHekIsMEJBQWlCO1FBSGpCLDhCQUF5QjtRQVJ6QiwrQkFBaUIsc0JBQUEsb0JBQUEsNEJBQUEsd0JBQUEsZ0NBQUEsOEJBQUEsa0NBQUEsb0JBQUEsK0VBQUE7UUFlWixlQUFxQjtRQUFyQix3Q0FBcUI7O2tERHlCZixzQkFBc0I7Y0FkbEMsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixLQUFLLEVBQUUsSUFBSTt3QkFDWCxXQUFXLEVBQUUsVUFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixFQUFDO3FCQUN0RDtpQkFDRjthQUNGOztzQkFZSSxJQUFJOztzQkFBSSxRQUFROztrQkFWbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IEhlYWRlclBpY2tlckNvbXBvbmVudCwgU3VwcG9ydEhlYWRlclBhbmVsIH0gZnJvbSAnLi9oZWFkZXItcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnbnotbW9udGgtcGlja2VyJyxcclxuICBleHBvcnRBczogJ256TW9udGhQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOek1vbnRoUGlja2VyQ29tcG9uZW50KVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56TW9udGhQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBIZWFkZXJQaWNrZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBzdHJpbmcgPSAneXl5eS1NTSc7XHJcblxyXG4gIGVuZFBhbmVsTW9kZTogU3VwcG9ydEhlYWRlclBhbmVsID0gJ21vbnRoJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGkxOG4sIGNkciwgZGF0ZUhlbHBlciwgbm9BbmltYXRpb24pO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhbGVuZGFyLXBpY2tlcicpO1xyXG4gIH1cclxufVxyXG4iLCI8bnotcGlja2VyXHJcbiAgW2lzUmFuZ2VdPVwiZmFsc2VcIlxyXG4gIFt2YWx1ZV09XCJuelZhbHVlXCJcclxuICAodmFsdWVDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICBbb3Blbl09XCJuek9wZW5cIlxyXG4gIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcclxuICBbZm9ybWF0XT1cIm56Rm9ybWF0XCJcclxuICBbYWxsb3dDbGVhcl09XCJuekFsbG93Q2xlYXJcIlxyXG4gIFthdXRvRm9jdXNdPVwibnpBdXRvRm9jdXNcIlxyXG4gIFtjbGFzc05hbWVdPVwibnpDbGFzc05hbWVcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCJuelBsYWNlSG9sZGVyXCJcclxuICBbc2l6ZV09XCJuelNpemVcIlxyXG4gIFtzdHlsZV09XCJuelN0eWxlXCJcclxuICBbbm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gIChvcGVuQ2hhbmdlKT1cIm9uT3BlbkNoYW5nZSgkZXZlbnQpXCJcclxuPlxyXG4gIDxkaXYgKm5nSWY9XCJyZWFsT3BlblN0YXRlXCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiYW50LWNhbGVuZGFyLXBpY2tlci1jb250YWluZXIge3tcclxuICAgICAgICBuekRyb3Bkb3duQ2xhc3NOYW1lXHJcbiAgICAgIH19IGFudC1jYWxlbmRhci1waWNrZXItY29udGFpbmVyLXBsYWNlbWVudC1ib3R0b21MZWZ0XCJcclxuICAgICAgW25nU3R5bGVdPVwibnpQb3B1cFN0eWxlXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYWxlbmRhciBhbnQtY2FsZW5kYXItbW9udGggYW50LWNhbGVuZGFyLW1vbnRoLWNhbGVuZGFyXCIgdGFiaW5kZXg9XCIwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1jYWxlbmRhci1tb250aC1jYWxlbmRhci1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhbGVuZGFyLW1vbnRoLWhlYWRlci13cmFwXCI+XHJcbiAgICAgICAgICAgIDxjYWxlbmRhci1oZWFkZXJcclxuICAgICAgICAgICAgICBbZGlzYWJsZWRNb250aF09XCJuekRpc2FibGVkRGF0ZVwiXHJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkWWVhcl09XCJuekRpc2FibGVkRGF0ZVwiXHJcbiAgICAgICAgICAgICAgW3BhbmVsTW9kZV09XCJwYW5lbE1vZGVcIlxyXG4gICAgICAgICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwib25QYW5lbE1vZGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cIm56VmFsdWVcIlxyXG4gICAgICAgICAgICAgIChjaG9vc2VZZWFyKT1cIm9uQ2hvb3NlVmFsdWUoJ3llYXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAoY2hvb3NlTW9udGgpPVwib25DaG9vc2VWYWx1ZSgnbW9udGgnLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICBbbG9jYWxlXT1cIm56TG9jYWxlLmxhbmdcIlxyXG4gICAgICAgICAgICAgIFtlbmFibGVQcmV2XT1cInRydWVcIlxyXG4gICAgICAgICAgICAgIFtlbmFibGVOZXh0XT1cInRydWVcIlxyXG4gICAgICAgICAgICA+PC9jYWxlbmRhci1oZWFkZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxjYWxlbmRhci1mb290ZXIgKm5nSWY9XCJleHRyYUZvb3RlclwiIFtleHRyYUZvb3Rlcl09XCJleHRyYUZvb3RlclwiPjwvY2FsZW5kYXItZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L256LXBpY2tlcj5cclxuIl19