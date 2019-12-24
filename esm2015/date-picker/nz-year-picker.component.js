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
    const ctx_r2360 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("extraFooter", ctx_r2360.extraFooter);
} }
function NzYearPickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2362 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "calendar-header", 6);
    i0.ɵɵlistener("panelModeChange", function NzYearPickerComponent_div_1_Template_calendar_header_panelModeChange_5_listener($event) { i0.ɵɵrestoreView(_r2362); const ctx_r2361 = i0.ɵɵnextContext(); return ctx_r2361.onPanelModeChange($event); })("chooseYear", function NzYearPickerComponent_div_1_Template_calendar_header_chooseYear_5_listener($event) { i0.ɵɵrestoreView(_r2362); const ctx_r2363 = i0.ɵɵnextContext(); return ctx_r2363.onChooseValue("year", $event); })("chooseMonth", function NzYearPickerComponent_div_1_Template_calendar_header_chooseMonth_5_listener($event) { i0.ɵɵrestoreView(_r2362); const ctx_r2364 = i0.ɵɵnextContext(); return ctx_r2364.onChooseValue("month", $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NzYearPickerComponent_div_1_calendar_footer_6_Template, 1, 1, "calendar-footer", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2359 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("ant-calendar-picker-container ", ctx_r2359.nzDropdownClassName, " ant-calendar-picker-container-placement-bottomLeft");
    i0.ɵɵproperty("ngStyle", ctx_r2359.nzPopupStyle);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabledMonth", ctx_r2359.nzDisabledDate)("disabledYear", ctx_r2359.nzDisabledDate)("panelMode", ctx_r2359.panelMode)("value", ctx_r2359.nzValue)("locale", ctx_r2359.nzLocale.lang)("enablePrev", true)("enableNext", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2359.extraFooter);
} }
export class NzYearPickerComponent extends HeaderPickerComponent {
    constructor(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.noAnimation = noAnimation;
        this.nzFormat = 'yyyy';
        this.endPanelMode = 'year';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
/** @nocollapse */ NzYearPickerComponent.ɵfac = function NzYearPickerComponent_Factory(t) { return new (t || NzYearPickerComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzYearPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzYearPickerComponent, selectors: [["nz-year-picker"]], inputs: { nzFormat: "nzFormat" }, exportAs: ["nzYearPicker"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: forwardRef((() => NzYearPickerComponent))
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
                        useExisting: forwardRef((() => NzYearPickerComponent))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnoteWVhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXllYXItcGlja2VyLmNvbXBvbmVudC50cyIsImhlYWRlci1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFzQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7SUNjNUUscUNBQW1GOzs7SUFBOUMsbURBQTJCOzs7O0lBdkJ4RSwyQkFDRTtJQUFBLDhCQU1FO0lBQUEsOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsMENBV21CO0lBUGpCLGtQQUE2Qyw0TUFFakIsTUFBTSxhQUZXLDhNQUdoQixPQUFPLGFBSFM7SUFPOUMsaUJBQWtCO0lBQ3JCLGlCQUFNO0lBQ04sb0dBQWlFO0lBQ25FLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFNOzs7SUF6QkYsZUFFc0Q7SUFGdEQsaUpBRXNEO0lBQ3RELGdEQUF3QjtJQU1oQixlQUFnQztJQUFoQyx3REFBZ0MsMENBQUEsa0NBQUEsNEJBQUEsbUNBQUEsb0JBQUEsb0JBQUE7SUFZbkIsZUFBbUI7SUFBbkIsNENBQW1COztBREU5QyxNQUFNLE9BQU8scUJBQXNCLFNBQVEscUJBQXFCO0lBSzlELFlBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsUUFBbUIsRUFDbkIsVUFBc0IsRUFDSyxXQUFvQztRQUUvRCxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFGZixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFWeEQsYUFBUSxHQUFXLE1BQU0sQ0FBQztRQUVuQyxpQkFBWSxHQUF1QixNQUFNLENBQUM7UUFXeEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDckUsQ0FBQzs7MEZBZlUscUJBQXFCOzBEQUFyQixxQkFBcUIsa0lBUnJCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsV0FBVyxFQUFFLFVBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBQzthQUNyRDtTQUNGO1FDdkNILG9DQWdCRTtRQWJBLHVIQUFlLHlCQUFxQixJQUFDLHdHQVd2Qix3QkFBb0IsSUFYRztRQWFyQyx1RUFDRTtRQTJCSixpQkFBWTs7UUFuQ1YsK0NBQXlCO1FBR3pCLDBCQUFpQjtRQUhqQiw4QkFBeUI7UUFSekIsK0JBQWlCLHNCQUFBLG9CQUFBLDRCQUFBLHdCQUFBLGdDQUFBLDhCQUFBLGtDQUFBLG9CQUFBLCtFQUFBO1FBZVosZUFBcUI7UUFBckIsd0NBQXFCOztrRER5QmYscUJBQXFCO2NBZGpDLFNBQVM7ZUFBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsV0FBVyxFQUFFLFVBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBQztxQkFDckQ7aUJBQ0Y7YUFDRjs7c0JBWUksSUFBSTs7c0JBQUksUUFBUTs7a0JBVmxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXJQaWNrZXJDb21wb25lbnQsIFN1cHBvcnRIZWFkZXJQYW5lbCB9IGZyb20gJy4vaGVhZGVyLXBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ256LXllYXItcGlja2VyJyxcclxuICBleHBvcnRBczogJ256WWVhclBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56WWVhclBpY2tlckNvbXBvbmVudClcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelllYXJQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBIZWFkZXJQaWNrZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBzdHJpbmcgPSAneXl5eSc7XHJcblxyXG4gIGVuZFBhbmVsTW9kZTogU3VwcG9ydEhlYWRlclBhbmVsID0gJ3llYXInO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoaTE4biwgY2RyLCBkYXRlSGVscGVyLCBub0FuaW1hdGlvbik7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FsZW5kYXItcGlja2VyJyk7XHJcbiAgfVxyXG59XHJcbiIsIjxuei1waWNrZXJcclxuICBbaXNSYW5nZV09XCJmYWxzZVwiXHJcbiAgW3ZhbHVlXT1cIm56VmFsdWVcIlxyXG4gICh2YWx1ZUNoYW5nZSk9XCJvblZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gIFtvcGVuXT1cIm56T3BlblwiXHJcbiAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4gIFtmb3JtYXRdPVwibnpGb3JtYXRcIlxyXG4gIFthbGxvd0NsZWFyXT1cIm56QWxsb3dDbGVhclwiXHJcbiAgW2F1dG9Gb2N1c109XCJuekF1dG9Gb2N1c1wiXHJcbiAgW2NsYXNzTmFtZV09XCJuekNsYXNzTmFtZVwiXHJcbiAgW3BsYWNlaG9sZGVyXT1cIm56UGxhY2VIb2xkZXJcIlxyXG4gIFtzaXplXT1cIm56U2l6ZVwiXHJcbiAgW3N0eWxlXT1cIm56U3R5bGVcIlxyXG4gIFtub0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgKG9wZW5DaGFuZ2UpPVwib25PcGVuQ2hhbmdlKCRldmVudClcIlxyXG4+XHJcbiAgPGRpdiAqbmdJZj1cInJlYWxPcGVuU3RhdGVcIj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJhbnQtY2FsZW5kYXItcGlja2VyLWNvbnRhaW5lciB7e1xyXG4gICAgICAgIG56RHJvcGRvd25DbGFzc05hbWVcclxuICAgICAgfX0gYW50LWNhbGVuZGFyLXBpY2tlci1jb250YWluZXItcGxhY2VtZW50LWJvdHRvbUxlZnRcIlxyXG4gICAgICBbbmdTdHlsZV09XCJuelBvcHVwU3R5bGVcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhbGVuZGFyIGFudC1jYWxlbmRhci1tb250aCBhbnQtY2FsZW5kYXItbW9udGgtY2FsZW5kYXJcIiB0YWJpbmRleD1cIjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhbGVuZGFyLW1vbnRoLWNhbGVuZGFyLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FsZW5kYXItbW9udGgtaGVhZGVyLXdyYXBcIj5cclxuICAgICAgICAgICAgPGNhbGVuZGFyLWhlYWRlclxyXG4gICAgICAgICAgICAgIFtkaXNhYmxlZE1vbnRoXT1cIm56RGlzYWJsZWREYXRlXCJcclxuICAgICAgICAgICAgICBbZGlzYWJsZWRZZWFyXT1cIm56RGlzYWJsZWREYXRlXCJcclxuICAgICAgICAgICAgICBbcGFuZWxNb2RlXT1cInBhbmVsTW9kZVwiXHJcbiAgICAgICAgICAgICAgKHBhbmVsTW9kZUNoYW5nZSk9XCJvblBhbmVsTW9kZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICBbdmFsdWVdPVwibnpWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgKGNob29zZVllYXIpPVwib25DaG9vc2VWYWx1ZSgneWVhcicsICRldmVudClcIlxyXG4gICAgICAgICAgICAgIChjaG9vc2VNb250aCk9XCJvbkNob29zZVZhbHVlKCdtb250aCcsICRldmVudClcIlxyXG4gICAgICAgICAgICAgIFtsb2NhbGVdPVwibnpMb2NhbGUubGFuZ1wiXHJcbiAgICAgICAgICAgICAgW2VuYWJsZVByZXZdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgW2VuYWJsZU5leHRdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgID48L2NhbGVuZGFyLWhlYWRlcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGNhbGVuZGFyLWZvb3RlciAqbmdJZj1cImV4dHJhRm9vdGVyXCIgW2V4dHJhRm9vdGVyXT1cImV4dHJhRm9vdGVyXCI+PC9jYWxlbmRhci1mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbnotcGlja2VyPlxyXG4iXX0=