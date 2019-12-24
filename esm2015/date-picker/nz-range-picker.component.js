/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Host, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { DateRangePickerComponent } from './date-range-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "./picker.component";
import * as i4 from "@angular/common";
import * as i5 from "./lib/popups/date-range-popup.component";
function NzRangePickerComponent_date_range_popup_1_Template(rf, ctx) { if (rf & 1) {
    const _r2345 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-range-popup", 2);
    i0.ɵɵlistener("panelModeChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_panelModeChange_0_listener($event) { i0.ɵɵrestoreView(_r2345); const ctx_r2344 = i0.ɵɵnextContext(); return ctx_r2344.nzOnPanelChange.emit($event); })("valueChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r2345); const ctx_r2346 = i0.ɵɵnextContext(); return ctx_r2346.onValueChange($event); })("inputChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_inputChange_0_listener($event) { i0.ɵɵrestoreView(_r2345); const ctx_r2347 = i0.ɵɵnextContext(); return ctx_r2347.onValueChange($event, true); })("calendarChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_calendarChange_0_listener($event) { i0.ɵɵrestoreView(_r2345); const ctx_r2348 = i0.ɵɵnextContext(); return ctx_r2348.onCalendarChange($event); })("resultOk", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_resultOk_0_listener($event) { i0.ɵɵrestoreView(_r2345); const ctx_r2349 = i0.ɵɵnextContext(); return ctx_r2349.onResultOk(); })("closePicker", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_closePicker_0_listener($event) { i0.ɵɵrestoreView(_r2345); const ctx_r2350 = i0.ɵɵnextContext(); return ctx_r2350.closeOverlay(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2343 = i0.ɵɵnextContext();
    i0.ɵɵproperty("isRange", ctx_r2343.isRange)("showWeek", ctx_r2343.showWeek)("panelMode", ctx_r2343.nzMode)("value", ctx_r2343.nzValue)("locale", ctx_r2343.nzLocale == null ? null : ctx_r2343.nzLocale.lang)("showToday", ctx_r2343.realShowToday)("showTime", ctx_r2343.nzShowTime)("format", ctx_r2343.nzFormat)("dateRender", ctx_r2343.nzDateRender)("disabledDate", ctx_r2343.nzDisabledDate)("disabledTime", ctx_r2343.nzDisabledTime)("placeholder", ctx_r2343.nzPlaceHolder)("dropdownClassName", ctx_r2343.nzDropdownClassName)("popupStyle", ctx_r2343.nzPopupStyle)("extraFooter", ctx_r2343.extraFooter)("ranges", ctx_r2343.nzRanges);
} }
export class NzRangePickerComponent extends DateRangePickerComponent {
    constructor(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.noAnimation = noAnimation;
        this.isRange = true;
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
/** @nocollapse */ NzRangePickerComponent.ɵfac = function NzRangePickerComponent_Factory(t) { return new (t || NzRangePickerComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzRangePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzRangePickerComponent, selectors: [["nz-range-picker"]], exportAs: ["nzRangePicker"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: forwardRef((() => NzRangePickerComponent))
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker", 4, "ngIf"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker"]], template: function NzRangePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-picker", 0);
        i0.ɵɵlistener("valueChange", function NzRangePickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzRangePickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        i0.ɵɵtemplate(1, NzRangePickerComponent_date_range_popup_1_Template, 1, 16, "date-range-popup", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleSanitizer(i0.ɵɵdefaultStyleSanitizer);
        i0.ɵɵstyleMap(ctx.pickerStyle);
        i0.ɵɵclassMap(ctx.nzClassName);
        i0.ɵɵproperty("isRange", ctx.isRange)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.realOpenState);
    } }, directives: [i3.NzPickerComponent, i4.NgIf, i5.DateRangePopupComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzRangePickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-range-picker',
                exportAs: 'nzRangePicker',
                templateUrl: './date-range-picker.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((() => NzRangePickerComponent))
                    }
                ]
            }]
    }], function () { return [{ type: i1.NzI18nService }, { type: i0.ChangeDetectorRef }, { type: i1.DateHelperService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJuei1yYW5nZS1waWNrZXIuY29tcG9uZW50LnRzIiwiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUNKLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7O0lDUnZFLDJDQXdCb0I7SUFuQmxCLDBOQUFtQixzQ0FBNEIsSUFBQyx3T0FBQSxxT0FHWCxJQUFJLEtBSE8saVBBQUEseU5BQUEsaU9BQUE7SUFtQmpELGlCQUFtQjs7O0lBdEJsQiwyQ0FBbUIsZ0NBQUEsK0JBQUEsNEJBQUEsdUVBQUEsc0NBQUEsa0NBQUEsOEJBQUEsc0NBQUEsMENBQUEsMENBQUEsd0NBQUEsb0RBQUEsc0NBQUEsc0NBQUEsOEJBQUE7O0FEc0J2QixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsd0JBQXdCO0lBR2xFLFlBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsUUFBbUIsRUFDbkIsVUFBc0IsRUFDSyxXQUFvQztRQUUvRCxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFGZixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFSakUsWUFBTyxHQUFZLElBQUksQ0FBQztRQVd0QixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs0RkFiVSxzQkFBc0I7MkRBQXRCLHNCQUFzQixrR0FSdEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxXQUFXLEVBQUUsVUFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixFQUFDO2FBQ3REO1NBQ0Y7UUN0Q0gsb0NBZ0JFO1FBYkEsd0hBQWUseUJBQXFCLElBQUMseUdBV3ZCLHdCQUFvQixJQVhHO1FBYXJDLGtHQXdCQztRQUNILGlCQUFZOztRQWhDViwrQ0FBeUI7UUFHekIsOEJBQXFCO1FBSHJCLDhCQUF5QjtRQVJ6QixxQ0FBbUIsc0JBQUEsb0JBQUEsNEJBQUEsd0JBQUEsZ0NBQUEsOEJBQUEsa0NBQUEsb0JBQUEsK0VBQUE7UUFnQmpCLGVBQXFCO1FBQXJCLHdDQUFxQjs7a0REdUJaLHNCQUFzQjtjQWRsQyxTQUFTO2VBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLEtBQUssRUFBRSxJQUFJO3dCQUNYLFdBQVcsRUFBRSxVQUFVLEVBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUM7cUJBQ3REO2lCQUNGO2FBQ0Y7O3NCQVVJLElBQUk7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnbnotcmFuZ2UtcGlja2VyJyxcclxuICBleHBvcnRBczogJ256UmFuZ2VQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpSYW5nZVBpY2tlckNvbXBvbmVudClcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJhbmdlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IHtcclxuICBpc1JhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGkxOG4sIGNkciwgZGF0ZUhlbHBlciwgbm9BbmltYXRpb24pO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhbGVuZGFyLXBpY2tlcicpO1xyXG4gIH1cclxufVxyXG4iLCI8bnotcGlja2VyXHJcbiAgW2lzUmFuZ2VdPVwiaXNSYW5nZVwiXHJcbiAgW3ZhbHVlXT1cIm56VmFsdWVcIlxyXG4gICh2YWx1ZUNoYW5nZSk9XCJvblZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gIFtvcGVuXT1cIm56T3BlblwiXHJcbiAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4gIFtmb3JtYXRdPVwibnpGb3JtYXRcIlxyXG4gIFthbGxvd0NsZWFyXT1cIm56QWxsb3dDbGVhclwiXHJcbiAgW2F1dG9Gb2N1c109XCJuekF1dG9Gb2N1c1wiXHJcbiAgW2NsYXNzTmFtZV09XCJuekNsYXNzTmFtZVwiXHJcbiAgW3BsYWNlaG9sZGVyXT1cIm56UGxhY2VIb2xkZXJcIlxyXG4gIFtzaXplXT1cIm56U2l6ZVwiXHJcbiAgW3N0eWxlXT1cInBpY2tlclN0eWxlXCJcclxuICBbbm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gIChvcGVuQ2hhbmdlKT1cIm9uT3BlbkNoYW5nZSgkZXZlbnQpXCJcclxuPlxyXG4gIDxkYXRlLXJhbmdlLXBvcHVwXHJcbiAgICAqbmdJZj1cInJlYWxPcGVuU3RhdGVcIlxyXG4gICAgW2lzUmFuZ2VdPVwiaXNSYW5nZVwiXHJcbiAgICBbc2hvd1dlZWtdPVwic2hvd1dlZWtcIlxyXG4gICAgW3BhbmVsTW9kZV09XCJuek1vZGVcIlxyXG4gICAgKHBhbmVsTW9kZUNoYW5nZSk9XCJuek9uUGFuZWxDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuICAgIFt2YWx1ZV09XCJuelZhbHVlXCJcclxuICAgICh2YWx1ZUNoYW5nZSk9XCJvblZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgKGlucHV0Q2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50LCB0cnVlKVwiXHJcbiAgICAoY2FsZW5kYXJDaGFuZ2UpPVwib25DYWxlbmRhckNoYW5nZSgkZXZlbnQpXCJcclxuICAgIFtsb2NhbGVdPVwibnpMb2NhbGU/LmxhbmdcIlxyXG4gICAgW3Nob3dUb2RheV09XCJyZWFsU2hvd1RvZGF5XCJcclxuICAgIFtzaG93VGltZV09XCJuelNob3dUaW1lXCJcclxuICAgIFtmb3JtYXRdPVwibnpGb3JtYXRcIlxyXG4gICAgW2RhdGVSZW5kZXJdPVwibnpEYXRlUmVuZGVyXCJcclxuICAgIFtkaXNhYmxlZERhdGVdPVwibnpEaXNhYmxlZERhdGVcIlxyXG4gICAgW2Rpc2FibGVkVGltZV09XCJuekRpc2FibGVkVGltZVwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwibnpQbGFjZUhvbGRlclwiXHJcbiAgICBbZHJvcGRvd25DbGFzc05hbWVdPVwibnpEcm9wZG93bkNsYXNzTmFtZVwiXHJcbiAgICBbcG9wdXBTdHlsZV09XCJuelBvcHVwU3R5bGVcIlxyXG4gICAgW2V4dHJhRm9vdGVyXT1cImV4dHJhRm9vdGVyXCJcclxuICAgIFtyYW5nZXNdPVwibnpSYW5nZXNcIlxyXG4gICAgKHJlc3VsdE9rKT1cIm9uUmVzdWx0T2soKVwiXHJcbiAgICAoY2xvc2VQaWNrZXIpPVwiY2xvc2VPdmVybGF5KClcIlxyXG4gID48L2RhdGUtcmFuZ2UtcG9wdXA+XHJcbjwvbnotcGlja2VyPlxyXG4iXX0=