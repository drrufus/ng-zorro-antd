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
function NzYearPickerComponent_div_1_calendar_footer_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "calendar-footer", 8);
} if (rf & 2) {
    var ctx_r2519 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("extraFooter", ctx_r2519.extraFooter);
} }
function NzYearPickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r2521 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "calendar-header", 6);
    i0.ɵɵlistener("panelModeChange", function NzYearPickerComponent_div_1_Template_calendar_header_panelModeChange_5_listener($event) { i0.ɵɵrestoreView(_r2521); var ctx_r2520 = i0.ɵɵnextContext(); return ctx_r2520.onPanelModeChange($event); })("chooseYear", function NzYearPickerComponent_div_1_Template_calendar_header_chooseYear_5_listener($event) { i0.ɵɵrestoreView(_r2521); var ctx_r2522 = i0.ɵɵnextContext(); return ctx_r2522.onChooseValue("year", $event); })("chooseMonth", function NzYearPickerComponent_div_1_Template_calendar_header_chooseMonth_5_listener($event) { i0.ɵɵrestoreView(_r2521); var ctx_r2523 = i0.ɵɵnextContext(); return ctx_r2523.onChooseValue("month", $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NzYearPickerComponent_div_1_calendar_footer_6_Template, 1, 1, "calendar-footer", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2518 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("ant-calendar-picker-container ", ctx_r2518.nzDropdownClassName, " ant-calendar-picker-container-placement-bottomLeft");
    i0.ɵɵproperty("ngStyle", ctx_r2518.nzPopupStyle);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabledMonth", ctx_r2518.nzDisabledDate)("disabledYear", ctx_r2518.nzDisabledDate)("panelMode", ctx_r2518.panelMode)("value", ctx_r2518.nzValue)("locale", ctx_r2518.nzLocale.lang)("enablePrev", true)("enableNext", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2518.extraFooter);
} }
var NzYearPickerComponent = /** @class */ (function (_super) {
    __extends(NzYearPickerComponent, _super);
    function NzYearPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.nzFormat = 'yyyy';
        _this.endPanelMode = 'year';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
        return _this;
    }
    /** @nocollapse */ NzYearPickerComponent.ɵfac = function NzYearPickerComponent_Factory(t) { return new (t || NzYearPickerComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzYearPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzYearPickerComponent, selectors: [["nz-year-picker"]], inputs: { nzFormat: "nzFormat" }, exportAs: ["nzYearPicker"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    multi: true,
                    useExisting: forwardRef((function () { return NzYearPickerComponent; }))
                }
            ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [4, "ngIf"], [3, "ngStyle"], ["tabindex", "0", 1, "ant-calendar", "ant-calendar-month", "ant-calendar-month-calendar"], [1, "ant-calendar-month-calendar-content"], [1, "ant-calendar-month-header-wrap"], [3, "disabledMonth", "disabledYear", "panelMode", "value", "locale", "enablePrev", "enableNext", "panelModeChange", "chooseYear", "chooseMonth"], [3, "extraFooter", 4, "ngIf"], [3, "extraFooter"]], template: function NzYearPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-picker", 0);
            i0.ɵɵlistener("valueChange", function NzYearPickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzYearPickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
            i0.ɵɵtemplate(1, NzYearPickerComponent_div_1_Template, 7, 12, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleSanitizer(i0.ɵɵdefaultStyleSanitizer);
            i0.ɵɵstyleMap(ctx.nzStyle);
            i0.ɵɵclassMap(ctx.nzClassName);
            i0.ɵɵproperty("isRange", false)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.realOpenState);
        } }, directives: [i3.NzPickerComponent, i4.NgIf, i4.NgStyle, i5.CalendarHeaderComponent, i6.CalendarFooterComponent], encapsulation: 2, changeDetection: 0 });
    return NzYearPickerComponent;
}(HeaderPickerComponent));
export { NzYearPickerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzYearPickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-year-picker',
                exportAs: 'nzYearPicker',
                templateUrl: './header-picker.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((function () { return NzYearPickerComponent; }))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnoteWVhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXllYXItcGlja2VyLmNvbXBvbmVudC50cyIsImhlYWRlci1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxxQkFBcUIsRUFBc0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7O0lDYzVFLHFDQUFtRjs7O0lBQTlDLG1EQUEyQjs7OztJQXZCeEUsMkJBQ0U7SUFBQSw4QkFNRTtJQUFBLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLDBDQVdtQjtJQVBqQixnUEFBNkMsME1BRWpCLE1BQU0sYUFGVyw0TUFHaEIsT0FBTyxhQUhTO0lBTzlDLGlCQUFrQjtJQUNyQixpQkFBTTtJQUNOLG9HQUFpRTtJQUNuRSxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTs7O0lBekJGLGVBRXNEO0lBRnRELGlKQUVzRDtJQUN0RCxnREFBd0I7SUFNaEIsZUFBZ0M7SUFBaEMsd0RBQWdDLDBDQUFBLGtDQUFBLDRCQUFBLG1DQUFBLG9CQUFBLG9CQUFBO0lBWW5CLGVBQW1CO0lBQW5CLDRDQUFtQjs7QURaOUM7SUFjMkMseUNBQXFCO0lBSzlELCtCQUNFLElBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFVBQTZCLEVBQzdCLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ0ssV0FBb0M7UUFOakUsWUFRRSxrQkFBTSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsU0FFMUM7UUFKNEIsaUJBQVcsR0FBWCxXQUFXLENBQXlCO1FBVnhELGNBQVEsR0FBVyxNQUFNLENBQUM7UUFFbkMsa0JBQVksR0FBdUIsTUFBTSxDQUFDO1FBV3hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDOztJQUNyRSxDQUFDOzhGQWZVLHFCQUFxQjs4REFBckIscUJBQXFCLGtJQVJyQjtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixLQUFLLEVBQUUsSUFBSTtvQkFDWCxXQUFXLEVBQUUsVUFBVSxFQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsRUFBQztpQkFDckQ7YUFDRjtZQ3ZDSCxvQ0FnQkU7WUFiQSx1SEFBZSx5QkFBcUIsSUFBQyx3R0FXdkIsd0JBQW9CLElBWEc7WUFhckMsdUVBQ0U7WUEyQkosaUJBQVk7O1lBbkNWLCtDQUF5QjtZQUd6QiwwQkFBaUI7WUFIakIsOEJBQXlCO1lBUnpCLCtCQUFpQixzQkFBQSxvQkFBQSw0QkFBQSx3QkFBQSxnQ0FBQSw4QkFBQSxrQ0FBQSxvQkFBQSwrRUFBQTtZQWVaLGVBQXFCO1lBQXJCLHdDQUFxQjs7Z0NEaEI1QjtDQXlEQyxBQTlCRCxDQWMyQyxxQkFBcUIsR0FnQi9EO1NBaEJZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBZGpDLFNBQVM7ZUFBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsV0FBVyxFQUFFLFVBQVUsRUFBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLEVBQUM7cUJBQ3JEO2lCQUNGO2FBQ0Y7O3NCQVlJLElBQUk7O3NCQUFJLFFBQVE7O2tCQVZsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyUGlja2VyQ29tcG9uZW50LCBTdXBwb3J0SGVhZGVyUGFuZWwgfSBmcm9tICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICduei15ZWFyLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICduelllYXJQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelllYXJQaWNrZXJDb21wb25lbnQpXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpZZWFyUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgSGVhZGVyUGlja2VyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuekZvcm1hdDogc3RyaW5nID0gJ3l5eXknO1xyXG5cclxuICBlbmRQYW5lbE1vZGU6IFN1cHBvcnRIZWFkZXJQYW5lbCA9ICd5ZWFyJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGkxOG4sIGNkciwgZGF0ZUhlbHBlciwgbm9BbmltYXRpb24pO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhbGVuZGFyLXBpY2tlcicpO1xyXG4gIH1cclxufVxyXG4iLCI8bnotcGlja2VyXHJcbiAgW2lzUmFuZ2VdPVwiZmFsc2VcIlxyXG4gIFt2YWx1ZV09XCJuelZhbHVlXCJcclxuICAodmFsdWVDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICBbb3Blbl09XCJuek9wZW5cIlxyXG4gIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcclxuICBbZm9ybWF0XT1cIm56Rm9ybWF0XCJcclxuICBbYWxsb3dDbGVhcl09XCJuekFsbG93Q2xlYXJcIlxyXG4gIFthdXRvRm9jdXNdPVwibnpBdXRvRm9jdXNcIlxyXG4gIFtjbGFzc05hbWVdPVwibnpDbGFzc05hbWVcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCJuelBsYWNlSG9sZGVyXCJcclxuICBbc2l6ZV09XCJuelNpemVcIlxyXG4gIFtzdHlsZV09XCJuelN0eWxlXCJcclxuICBbbm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gIChvcGVuQ2hhbmdlKT1cIm9uT3BlbkNoYW5nZSgkZXZlbnQpXCJcclxuPlxyXG4gIDxkaXYgKm5nSWY9XCJyZWFsT3BlblN0YXRlXCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiYW50LWNhbGVuZGFyLXBpY2tlci1jb250YWluZXIge3tcclxuICAgICAgICBuekRyb3Bkb3duQ2xhc3NOYW1lXHJcbiAgICAgIH19IGFudC1jYWxlbmRhci1waWNrZXItY29udGFpbmVyLXBsYWNlbWVudC1ib3R0b21MZWZ0XCJcclxuICAgICAgW25nU3R5bGVdPVwibnpQb3B1cFN0eWxlXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYWxlbmRhciBhbnQtY2FsZW5kYXItbW9udGggYW50LWNhbGVuZGFyLW1vbnRoLWNhbGVuZGFyXCIgdGFiaW5kZXg9XCIwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1jYWxlbmRhci1tb250aC1jYWxlbmRhci1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhbGVuZGFyLW1vbnRoLWhlYWRlci13cmFwXCI+XHJcbiAgICAgICAgICAgIDxjYWxlbmRhci1oZWFkZXJcclxuICAgICAgICAgICAgICBbZGlzYWJsZWRNb250aF09XCJuekRpc2FibGVkRGF0ZVwiXHJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkWWVhcl09XCJuekRpc2FibGVkRGF0ZVwiXHJcbiAgICAgICAgICAgICAgW3BhbmVsTW9kZV09XCJwYW5lbE1vZGVcIlxyXG4gICAgICAgICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwib25QYW5lbE1vZGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cIm56VmFsdWVcIlxyXG4gICAgICAgICAgICAgIChjaG9vc2VZZWFyKT1cIm9uQ2hvb3NlVmFsdWUoJ3llYXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAoY2hvb3NlTW9udGgpPVwib25DaG9vc2VWYWx1ZSgnbW9udGgnLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICBbbG9jYWxlXT1cIm56TG9jYWxlLmxhbmdcIlxyXG4gICAgICAgICAgICAgIFtlbmFibGVQcmV2XT1cInRydWVcIlxyXG4gICAgICAgICAgICAgIFtlbmFibGVOZXh0XT1cInRydWVcIlxyXG4gICAgICAgICAgICA+PC9jYWxlbmRhci1oZWFkZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxjYWxlbmRhci1mb290ZXIgKm5nSWY9XCJleHRyYUZvb3RlclwiIFtleHRyYUZvb3Rlcl09XCJleHRyYUZvb3RlclwiPjwvY2FsZW5kYXItZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L256LXBpY2tlcj5cclxuIl19