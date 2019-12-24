import { __extends } from "tslib";
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
    var _r2504 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-range-popup", 2);
    i0.ɵɵlistener("panelModeChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_panelModeChange_0_listener($event) { i0.ɵɵrestoreView(_r2504); var ctx_r2503 = i0.ɵɵnextContext(); return ctx_r2503.nzOnPanelChange.emit($event); })("valueChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r2504); var ctx_r2505 = i0.ɵɵnextContext(); return ctx_r2505.onValueChange($event); })("inputChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_inputChange_0_listener($event) { i0.ɵɵrestoreView(_r2504); var ctx_r2506 = i0.ɵɵnextContext(); return ctx_r2506.onValueChange($event, true); })("calendarChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_calendarChange_0_listener($event) { i0.ɵɵrestoreView(_r2504); var ctx_r2507 = i0.ɵɵnextContext(); return ctx_r2507.onCalendarChange($event); })("resultOk", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_resultOk_0_listener($event) { i0.ɵɵrestoreView(_r2504); var ctx_r2508 = i0.ɵɵnextContext(); return ctx_r2508.onResultOk(); })("closePicker", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_closePicker_0_listener($event) { i0.ɵɵrestoreView(_r2504); var ctx_r2509 = i0.ɵɵnextContext(); return ctx_r2509.closeOverlay(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2502 = i0.ɵɵnextContext();
    i0.ɵɵproperty("isRange", ctx_r2502.isRange)("showWeek", ctx_r2502.showWeek)("panelMode", ctx_r2502.nzMode)("value", ctx_r2502.nzValue)("locale", ctx_r2502.nzLocale == null ? null : ctx_r2502.nzLocale.lang)("showToday", ctx_r2502.realShowToday)("showTime", ctx_r2502.nzShowTime)("format", ctx_r2502.nzFormat)("dateRender", ctx_r2502.nzDateRender)("disabledDate", ctx_r2502.nzDisabledDate)("disabledTime", ctx_r2502.nzDisabledTime)("placeholder", ctx_r2502.nzPlaceHolder)("dropdownClassName", ctx_r2502.nzDropdownClassName)("popupStyle", ctx_r2502.nzPopupStyle)("extraFooter", ctx_r2502.extraFooter)("ranges", ctx_r2502.nzRanges);
} }
var NzRangePickerComponent = /** @class */ (function (_super) {
    __extends(NzRangePickerComponent, _super);
    function NzRangePickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.isRange = true;
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
        return _this;
    }
    /** @nocollapse */ NzRangePickerComponent.ɵfac = function NzRangePickerComponent_Factory(t) { return new (t || NzRangePickerComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzRangePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzRangePickerComponent, selectors: [["nz-range-picker"]], exportAs: ["nzRangePicker"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    multi: true,
                    useExisting: forwardRef((function () { return NzRangePickerComponent; }))
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
    return NzRangePickerComponent;
}(DateRangePickerComponent));
export { NzRangePickerComponent };
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
                        useExisting: forwardRef((function () { return NzRangePickerComponent; }))
                    }
                ]
            }]
    }], function () { return [{ type: i1.NzI18nService }, { type: i0.ChangeDetectorRef }, { type: i1.DateHelperService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJuei1yYW5nZS1waWNrZXIuY29tcG9uZW50LnRzIiwiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLElBQUksRUFDSixRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7OztJQ1J2RSwyQ0F3Qm9CO0lBbkJsQix3TkFBbUIsc0NBQTRCLElBQUMsc09BQUEsbU9BR1gsSUFBSSxLQUhPLCtPQUFBLHVOQUFBLCtOQUFBO0lBbUJqRCxpQkFBbUI7OztJQXRCbEIsMkNBQW1CLGdDQUFBLCtCQUFBLDRCQUFBLHVFQUFBLHNDQUFBLGtDQUFBLDhCQUFBLHNDQUFBLDBDQUFBLDBDQUFBLHdDQUFBLG9EQUFBLHNDQUFBLHNDQUFBLDhCQUFBOztBRFF2QjtJQWM0QywwQ0FBd0I7SUFHbEUsZ0NBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsUUFBbUIsRUFDbkIsVUFBc0IsRUFDSyxXQUFvQztRQU5qRSxZQVFFLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxTQUUxQztRQUo0QixpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFSakUsYUFBTyxHQUFZLElBQUksQ0FBQztRQVd0QixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQzs7SUFDckUsQ0FBQztnR0FiVSxzQkFBc0I7K0RBQXRCLHNCQUFzQixrR0FSdEI7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsV0FBVyxFQUFFLFVBQVUsRUFBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLEVBQUM7aUJBQ3REO2FBQ0Y7WUN0Q0gsb0NBZ0JFO1lBYkEsd0hBQWUseUJBQXFCLElBQUMseUdBV3ZCLHdCQUFvQixJQVhHO1lBYXJDLGtHQXdCQztZQUNILGlCQUFZOztZQWhDViwrQ0FBeUI7WUFHekIsOEJBQXFCO1lBSHJCLDhCQUF5QjtZQVJ6QixxQ0FBbUIsc0JBQUEsb0JBQUEsNEJBQUEsd0JBQUEsZ0NBQUEsOEJBQUEsa0NBQUEsb0JBQUEsK0VBQUE7WUFnQmpCLGVBQXFCO1lBQXJCLHdDQUFxQjs7aUNEakJ6QjtDQXNEQyxBQTVCRCxDQWM0Qyx3QkFBd0IsR0FjbkU7U0FkWSxzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQWRsQyxTQUFTO2VBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLEtBQUssRUFBRSxJQUFJO3dCQUNYLFdBQVcsRUFBRSxVQUFVLEVBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixFQUFDO3FCQUN0RDtpQkFDRjthQUNGOztzQkFVSSxJQUFJOztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ256LXJhbmdlLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICduelJhbmdlUGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFuZ2VQaWNrZXJDb21wb25lbnQpXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSYW5nZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB7XHJcbiAgaXNSYW5nZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpMThuLCBjZHIsIGRhdGVIZWxwZXIsIG5vQW5pbWF0aW9uKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYWxlbmRhci1waWNrZXInKTtcclxuICB9XHJcbn1cclxuIiwiPG56LXBpY2tlclxyXG4gIFtpc1JhbmdlXT1cImlzUmFuZ2VcIlxyXG4gIFt2YWx1ZV09XCJuelZhbHVlXCJcclxuICAodmFsdWVDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICBbb3Blbl09XCJuek9wZW5cIlxyXG4gIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcclxuICBbZm9ybWF0XT1cIm56Rm9ybWF0XCJcclxuICBbYWxsb3dDbGVhcl09XCJuekFsbG93Q2xlYXJcIlxyXG4gIFthdXRvRm9jdXNdPVwibnpBdXRvRm9jdXNcIlxyXG4gIFtjbGFzc05hbWVdPVwibnpDbGFzc05hbWVcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCJuelBsYWNlSG9sZGVyXCJcclxuICBbc2l6ZV09XCJuelNpemVcIlxyXG4gIFtzdHlsZV09XCJwaWNrZXJTdHlsZVwiXHJcbiAgW25vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAob3BlbkNoYW5nZSk9XCJvbk9wZW5DaGFuZ2UoJGV2ZW50KVwiXHJcbj5cclxuICA8ZGF0ZS1yYW5nZS1wb3B1cFxyXG4gICAgKm5nSWY9XCJyZWFsT3BlblN0YXRlXCJcclxuICAgIFtpc1JhbmdlXT1cImlzUmFuZ2VcIlxyXG4gICAgW3Nob3dXZWVrXT1cInNob3dXZWVrXCJcclxuICAgIFtwYW5lbE1vZGVdPVwibnpNb2RlXCJcclxuICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwibnpPblBhbmVsQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICBbdmFsdWVdPVwibnpWYWx1ZVwiXHJcbiAgICAodmFsdWVDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgIChpbnB1dENoYW5nZSk9XCJvblZhbHVlQ2hhbmdlKCRldmVudCwgdHJ1ZSlcIlxyXG4gICAgKGNhbGVuZGFyQ2hhbmdlKT1cIm9uQ2FsZW5kYXJDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICBbbG9jYWxlXT1cIm56TG9jYWxlPy5sYW5nXCJcclxuICAgIFtzaG93VG9kYXldPVwicmVhbFNob3dUb2RheVwiXHJcbiAgICBbc2hvd1RpbWVdPVwibnpTaG93VGltZVwiXHJcbiAgICBbZm9ybWF0XT1cIm56Rm9ybWF0XCJcclxuICAgIFtkYXRlUmVuZGVyXT1cIm56RGF0ZVJlbmRlclwiXHJcbiAgICBbZGlzYWJsZWREYXRlXT1cIm56RGlzYWJsZWREYXRlXCJcclxuICAgIFtkaXNhYmxlZFRpbWVdPVwibnpEaXNhYmxlZFRpbWVcIlxyXG4gICAgW3BsYWNlaG9sZGVyXT1cIm56UGxhY2VIb2xkZXJcIlxyXG4gICAgW2Ryb3Bkb3duQ2xhc3NOYW1lXT1cIm56RHJvcGRvd25DbGFzc05hbWVcIlxyXG4gICAgW3BvcHVwU3R5bGVdPVwibnpQb3B1cFN0eWxlXCJcclxuICAgIFtleHRyYUZvb3Rlcl09XCJleHRyYUZvb3RlclwiXHJcbiAgICBbcmFuZ2VzXT1cIm56UmFuZ2VzXCJcclxuICAgIChyZXN1bHRPayk9XCJvblJlc3VsdE9rKClcIlxyXG4gICAgKGNsb3NlUGlja2VyKT1cImNsb3NlT3ZlcmxheSgpXCJcclxuICA+PC9kYXRlLXJhbmdlLXBvcHVwPlxyXG48L256LXBpY2tlcj5cclxuIl19