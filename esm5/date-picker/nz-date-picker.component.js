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
function NzDatePickerComponent_date_range_popup_1_Template(rf, ctx) { if (rf & 1) {
    var _r2490 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-range-popup", 2);
    i0.ɵɵlistener("panelModeChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_panelModeChange_0_listener($event) { i0.ɵɵrestoreView(_r2490); var ctx_r2489 = i0.ɵɵnextContext(); return ctx_r2489.nzOnPanelChange.emit($event); })("valueChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r2490); var ctx_r2491 = i0.ɵɵnextContext(); return ctx_r2491.onValueChange($event); })("inputChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_inputChange_0_listener($event) { i0.ɵɵrestoreView(_r2490); var ctx_r2492 = i0.ɵɵnextContext(); return ctx_r2492.onValueChange($event, true); })("calendarChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_calendarChange_0_listener($event) { i0.ɵɵrestoreView(_r2490); var ctx_r2493 = i0.ɵɵnextContext(); return ctx_r2493.onCalendarChange($event); })("resultOk", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_resultOk_0_listener($event) { i0.ɵɵrestoreView(_r2490); var ctx_r2494 = i0.ɵɵnextContext(); return ctx_r2494.onResultOk(); })("closePicker", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_closePicker_0_listener($event) { i0.ɵɵrestoreView(_r2490); var ctx_r2495 = i0.ɵɵnextContext(); return ctx_r2495.closeOverlay(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2488 = i0.ɵɵnextContext();
    i0.ɵɵproperty("isRange", ctx_r2488.isRange)("showWeek", ctx_r2488.showWeek)("panelMode", ctx_r2488.nzMode)("value", ctx_r2488.nzValue)("locale", ctx_r2488.nzLocale == null ? null : ctx_r2488.nzLocale.lang)("showToday", ctx_r2488.realShowToday)("showTime", ctx_r2488.nzShowTime)("format", ctx_r2488.nzFormat)("dateRender", ctx_r2488.nzDateRender)("disabledDate", ctx_r2488.nzDisabledDate)("disabledTime", ctx_r2488.nzDisabledTime)("placeholder", ctx_r2488.nzPlaceHolder)("dropdownClassName", ctx_r2488.nzDropdownClassName)("popupStyle", ctx_r2488.nzPopupStyle)("extraFooter", ctx_r2488.extraFooter)("ranges", ctx_r2488.nzRanges);
} }
var NzDatePickerComponent = /** @class */ (function (_super) {
    __extends(NzDatePickerComponent, _super);
    function NzDatePickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.isRange = false;
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
        return _this;
    }
    /** @nocollapse */ NzDatePickerComponent.ɵfac = function NzDatePickerComponent_Factory(t) { return new (t || NzDatePickerComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzDatePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzDatePickerComponent, selectors: [["nz-date-picker"]], exportAs: ["nzDatePicker"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    multi: true,
                    useExisting: forwardRef((function () { return NzDatePickerComponent; }))
                }
            ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker", 4, "ngIf"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker"]], template: function NzDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-picker", 0);
            i0.ɵɵlistener("valueChange", function NzDatePickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzDatePickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
            i0.ɵɵtemplate(1, NzDatePickerComponent_date_range_popup_1_Template, 1, 16, "date-range-popup", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleSanitizer(i0.ɵɵdefaultStyleSanitizer);
            i0.ɵɵstyleMap(ctx.pickerStyle);
            i0.ɵɵclassMap(ctx.nzClassName);
            i0.ɵɵproperty("isRange", ctx.isRange)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.realOpenState);
        } }, directives: [i3.NzPickerComponent, i4.NgIf, i5.DateRangePopupComponent], encapsulation: 2, changeDetection: 0 });
    return NzDatePickerComponent;
}(DateRangePickerComponent));
export { NzDatePickerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDatePickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-date-picker',
                exportAs: 'nzDatePicker',
                templateUrl: './date-range-picker.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((function () { return NzDatePickerComponent; }))
                    }
                ]
            }]
    }], function () { return [{ type: i1.NzI18nService }, { type: i0.ChangeDetectorRef }, { type: i1.DateHelperService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyIsImRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7SUNSdkUsMkNBd0JvQjtJQW5CbEIsdU5BQW1CLHNDQUE0QixJQUFDLHFPQUFBLGtPQUdYLElBQUksS0FITyw4T0FBQSxzTkFBQSw4TkFBQTtJQW1CakQsaUJBQW1COzs7SUF0QmxCLDJDQUFtQixnQ0FBQSwrQkFBQSw0QkFBQSx1RUFBQSxzQ0FBQSxrQ0FBQSw4QkFBQSxzQ0FBQSwwQ0FBQSwwQ0FBQSx3Q0FBQSxvREFBQSxzQ0FBQSxzQ0FBQSw4QkFBQTs7QURRdkI7SUFjMkMseUNBQXdCO0lBR2pFLCtCQUNFLElBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFVBQTZCLEVBQzdCLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ0ssV0FBb0M7UUFOakUsWUFRRSxrQkFBTSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsU0FFMUM7UUFKNEIsaUJBQVcsR0FBWCxXQUFXLENBQXlCO1FBUmpFLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFXdkIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7O0lBQ3JFLENBQUM7OEZBYlUscUJBQXFCOzhEQUFyQixxQkFBcUIsZ0dBUnJCO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLEtBQUssRUFBRSxJQUFJO29CQUNYLFdBQVcsRUFBRSxVQUFVLEVBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixFQUFDO2lCQUNyRDthQUNGO1lDdENILG9DQWdCRTtZQWJBLHVIQUFlLHlCQUFxQixJQUFDLHdHQVd2Qix3QkFBb0IsSUFYRztZQWFyQyxpR0F3QkM7WUFDSCxpQkFBWTs7WUFoQ1YsK0NBQXlCO1lBR3pCLDhCQUFxQjtZQUhyQiw4QkFBeUI7WUFSekIscUNBQW1CLHNCQUFBLG9CQUFBLDRCQUFBLHdCQUFBLGdDQUFBLDhCQUFBLGtDQUFBLG9CQUFBLCtFQUFBO1lBZ0JqQixlQUFxQjtZQUFyQix3Q0FBcUI7O2dDRGpCekI7Q0FzREMsQUE1QkQsQ0FjMkMsd0JBQXdCLEdBY2xFO1NBZFkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FkakMsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixLQUFLLEVBQUUsSUFBSTt3QkFDWCxXQUFXLEVBQUUsVUFBVSxFQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsRUFBQztxQkFDckQ7aUJBQ0Y7YUFDRjs7c0JBVUksSUFBSTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3QsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICduei1kYXRlLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICduekRhdGVQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpEYXRlUGlja2VyQ29tcG9uZW50KVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56RGF0ZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB7XHJcbiAgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoaTE4biwgY2RyLCBkYXRlSGVscGVyLCBub0FuaW1hdGlvbik7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FsZW5kYXItcGlja2VyJyk7XHJcbiAgfVxyXG59XHJcbiIsIjxuei1waWNrZXJcclxuICBbaXNSYW5nZV09XCJpc1JhbmdlXCJcclxuICBbdmFsdWVdPVwibnpWYWx1ZVwiXHJcbiAgKHZhbHVlQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgW29wZW5dPVwibnpPcGVuXCJcclxuICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXHJcbiAgW2Zvcm1hdF09XCJuekZvcm1hdFwiXHJcbiAgW2FsbG93Q2xlYXJdPVwibnpBbGxvd0NsZWFyXCJcclxuICBbYXV0b0ZvY3VzXT1cIm56QXV0b0ZvY3VzXCJcclxuICBbY2xhc3NOYW1lXT1cIm56Q2xhc3NOYW1lXCJcclxuICBbcGxhY2Vob2xkZXJdPVwibnpQbGFjZUhvbGRlclwiXHJcbiAgW3NpemVdPVwibnpTaXplXCJcclxuICBbc3R5bGVdPVwicGlja2VyU3R5bGVcIlxyXG4gIFtub0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgKG9wZW5DaGFuZ2UpPVwib25PcGVuQ2hhbmdlKCRldmVudClcIlxyXG4+XHJcbiAgPGRhdGUtcmFuZ2UtcG9wdXBcclxuICAgICpuZ0lmPVwicmVhbE9wZW5TdGF0ZVwiXHJcbiAgICBbaXNSYW5nZV09XCJpc1JhbmdlXCJcclxuICAgIFtzaG93V2Vla109XCJzaG93V2Vla1wiXHJcbiAgICBbcGFuZWxNb2RlXT1cIm56TW9kZVwiXHJcbiAgICAocGFuZWxNb2RlQ2hhbmdlKT1cIm56T25QYW5lbENoYW5nZS5lbWl0KCRldmVudClcIlxyXG4gICAgW3ZhbHVlXT1cIm56VmFsdWVcIlxyXG4gICAgKHZhbHVlQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAoaW5wdXRDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQsIHRydWUpXCJcclxuICAgIChjYWxlbmRhckNoYW5nZSk9XCJvbkNhbGVuZGFyQ2hhbmdlKCRldmVudClcIlxyXG4gICAgW2xvY2FsZV09XCJuekxvY2FsZT8ubGFuZ1wiXHJcbiAgICBbc2hvd1RvZGF5XT1cInJlYWxTaG93VG9kYXlcIlxyXG4gICAgW3Nob3dUaW1lXT1cIm56U2hvd1RpbWVcIlxyXG4gICAgW2Zvcm1hdF09XCJuekZvcm1hdFwiXHJcbiAgICBbZGF0ZVJlbmRlcl09XCJuekRhdGVSZW5kZXJcIlxyXG4gICAgW2Rpc2FibGVkRGF0ZV09XCJuekRpc2FibGVkRGF0ZVwiXHJcbiAgICBbZGlzYWJsZWRUaW1lXT1cIm56RGlzYWJsZWRUaW1lXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJuelBsYWNlSG9sZGVyXCJcclxuICAgIFtkcm9wZG93bkNsYXNzTmFtZV09XCJuekRyb3Bkb3duQ2xhc3NOYW1lXCJcclxuICAgIFtwb3B1cFN0eWxlXT1cIm56UG9wdXBTdHlsZVwiXHJcbiAgICBbZXh0cmFGb290ZXJdPVwiZXh0cmFGb290ZXJcIlxyXG4gICAgW3Jhbmdlc109XCJuelJhbmdlc1wiXHJcbiAgICAocmVzdWx0T2spPVwib25SZXN1bHRPaygpXCJcclxuICAgIChjbG9zZVBpY2tlcik9XCJjbG9zZU92ZXJsYXkoKVwiXHJcbiAgPjwvZGF0ZS1yYW5nZS1wb3B1cD5cclxuPC9uei1waWNrZXI+XHJcbiJdfQ==