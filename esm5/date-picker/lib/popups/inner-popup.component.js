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
import * as i1 from "../calendar/calendar-header.component";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/calendar";
import * as i4 from "ng-zorro-antd/time-picker";
import * as i5 from "@angular/forms";
function InnerPopupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r2462 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nz-time-picker-panel", 3);
    i0.ɵɵlistener("ngModelChange", function InnerPopupComponent_ng_container_1_Template_nz_time_picker_panel_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2462); var ctx_r2461 = i0.ɵɵnextContext(); return ctx_r2461.onSelectTime($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2460 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzInDatePicker", true)("ngModel", ctx_r2460.value == null ? null : ctx_r2460.value.nativeDate)("format", ctx_r2460.timeOptions.nzFormat)("nzHourStep", ctx_r2460.timeOptions.nzHourStep)("nzMinuteStep", ctx_r2460.timeOptions.nzMinuteStep)("nzSecondStep", ctx_r2460.timeOptions.nzSecondStep)("nzDisabledHours", ctx_r2460.timeOptions.nzDisabledHours)("nzDisabledMinutes", ctx_r2460.timeOptions.nzDisabledMinutes)("nzDisabledSeconds", ctx_r2460.timeOptions.nzDisabledSeconds)("nzHideDisabledOptions", ctx_r2460.timeOptions.nzHideDisabledOptions)("nzDefaultOpenValue", ctx_r2460.timeOptions.nzDefaultOpenValue)("nzUse12Hours", ctx_r2460.timeOptions.nzUse12Hours)("nzAddOn", ctx_r2460.timeOptions.nzAddOn)("opened", true);
} }
var InnerPopupComponent = /** @class */ (function () {
    function InnerPopupComponent() {
        this.panelModeChange = new EventEmitter();
        this.headerChange = new EventEmitter(); // Emitted when user changed the header's value
        this.selectDate = new EventEmitter(); // Emitted when the date is selected by click the date panel
        this.selectTime = new EventEmitter();
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.prefixCls = 'ant-calendar';
    }
    InnerPopupComponent.prototype.onSelectTime = function (date) {
        this.selectTime.emit(new CandyDate(date));
    };
    // The value real changed to outside
    InnerPopupComponent.prototype.onSelectDate = function (date) {
        var value = date instanceof CandyDate ? date : new CandyDate(date);
        var timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue;
        // Display timeValue when value is null
        if (!this.value && timeValue) {
            value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
        }
        this.selectDate.emit(value);
    };
    /** @nocollapse */ InnerPopupComponent.ɵfac = function InnerPopupComponent_Factory(t) { return new (t || InnerPopupComponent)(); };
    /** @nocollapse */ InnerPopupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InnerPopupComponent, selectors: [["inner-popup"]], inputs: { showWeek: "showWeek", locale: "locale", showTimePicker: "showTimePicker", timeOptions: "timeOptions", enablePrev: "enablePrev", enableNext: "enableNext", disabledDate: "disabledDate", dateRender: "dateRender", selectedValue: "selectedValue", hoverValue: "hoverValue", panelMode: "panelMode", value: "value" }, outputs: { panelModeChange: "panelModeChange", headerChange: "headerChange", selectDate: "selectDate", selectTime: "selectTime", dayHover: "dayHover" }, exportAs: ["innerPopup"], decls: 4, vars: 17, consts: [[3, "panelMode", "value", "locale", "showTimePicker", "enablePrev", "enableNext", "panelModeChange", "valueChange"], [4, "ngIf"], [3, "locale", "showWeek", "value", "disabledDate", "dateCellRender", "selectedValue", "hoverValue", "valueChange", "dayHover"], [3, "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn", "opened", "ngModelChange"]], template: function InnerPopupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "calendar-header", 0);
            i0.ɵɵlistener("panelModeChange", function InnerPopupComponent_Template_calendar_header_panelModeChange_0_listener($event) { return ctx.panelMode = $event; })("panelModeChange", function InnerPopupComponent_Template_calendar_header_panelModeChange_0_listener($event) { return ctx.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_Template_calendar_header_valueChange_0_listener($event) { return ctx.value = $event; })("valueChange", function InnerPopupComponent_Template_calendar_header_valueChange_0_listener($event) { return ctx.headerChange.emit($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(1, InnerPopupComponent_ng_container_1_Template, 2, 14, "ng-container", 1);
            i0.ɵɵelementStart(2, "div");
            i0.ɵɵelementStart(3, "date-table", 2);
            i0.ɵɵlistener("valueChange", function InnerPopupComponent_Template_date_table_valueChange_3_listener($event) { return ctx.onSelectDate($event); })("dayHover", function InnerPopupComponent_Template_date_table_dayHover_3_listener($event) { return ctx.dayHover.emit($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("panelMode", ctx.panelMode)("value", ctx.value)("locale", ctx.locale)("showTimePicker", ctx.showTimePicker)("enablePrev", ctx.enablePrev)("enableNext", ctx.enableNext);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showTimePicker && ctx.timeOptions);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("locale", ctx.locale)("showWeek", ctx.showWeek)("value", ctx.value)("disabledDate", ctx.disabledDate)("dateCellRender", ctx.dateRender)("selectedValue", ctx.selectedValue)("hoverValue", ctx.hoverValue);
        } }, directives: [i1.CalendarHeaderComponent, i2.NgIf, i3.DateTableComponent, i4.NzTimePickerPanelComponent, i5.NgControlStatus, i5.NgModel], encapsulation: 2, changeDetection: 0 });
    return InnerPopupComponent;
}());
export { InnerPopupComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InnerPopupComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'inner-popup',
                exportAs: 'innerPopup',
                templateUrl: 'inner-popup.component.html'
            }]
    }], null, { showWeek: [{
            type: Input
        }], locale: [{
            type: Input
        }], showTimePicker: [{
            type: Input
        }], timeOptions: [{
            type: Input
        }], enablePrev: [{
            type: Input
        }], enableNext: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], dateRender: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], hoverValue: [{
            type: Input
        }], panelMode: [{
            type: Input
        }], panelModeChange: [{
            type: Output
        }], value: [{
            type: Input
        }], headerChange: [{
            type: Output
        }], selectDate: [{
            type: Output
        }], selectTime: [{
            type: Output
        }], dayHover: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9wb3B1cHMvaW5uZXItcG9wdXAuY29tcG9uZW50LnRzIiwibGliL3BvcHVwcy9pbm5lci1wb3B1cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhJLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7OztJQ0M3RCw2QkFDRTtJQUFBLCtDQWdCd0I7SUFidEIsbVBBQXNDO0lBYXZDLGlCQUF1QjtJQUUxQiwwQkFBZTs7O0lBakJYLGVBQXVCO0lBQXZCLHFDQUF1Qix3RUFBQSwwQ0FBQSxnREFBQSxvREFBQSxvREFBQSwwREFBQSw4REFBQSw4REFBQSxzRUFBQSxnRUFBQSxvREFBQSwwQ0FBQSxnQkFBQTs7QURDM0I7SUFBQTtRQXNCcUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBSWhELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQyxDQUFDLCtDQUErQztRQUM3RixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQyxDQUFDLDREQUE0RDtRQUN4RyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUMzQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQyxDQUFDLDZDQUE2QztRQUUxRyxjQUFTLEdBQVcsY0FBYyxDQUFDO0tBa0JwQztJQWhCQywwQ0FBWSxHQUFaLFVBQWEsSUFBVTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsMENBQVksR0FBWixVQUFhLElBQXNCO1FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksWUFBWSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO1FBRTFFLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUU7WUFDNUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ3BGO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzswRkF4Q1UsbUJBQW1COzREQUFuQixtQkFBbUI7WUN0QmhDLDBDQVNtQjtZQVJqQiw2SkFBeUIsc0hBQ04sZ0NBQTRCLElBRHRCLG9JQUFBLDhHQUdWLDZCQUF5QixJQUhmO1lBUTFCLGlCQUFrQjtZQUVuQix1RkFDRTtZQW9CRiwyQkFDRTtZQUFBLHFDQVVjO1lBTlosc0hBQWUsd0JBQW9CLElBQUMsbUdBS3hCLHlCQUFxQixJQUxHO1lBTXJDLGlCQUFhO1lBQ2hCLGlCQUFNOztZQTNDSix5Q0FBeUIsb0JBQUEsc0JBQUEsc0NBQUEsOEJBQUEsOEJBQUE7WUFVYixlQUFxQztZQUFyQyw0REFBcUM7WUFxQjlDLGVBQTRCO1lBQTVCLHFEQUE0QjtZQUU3QixlQUFpQjtZQUFqQixtQ0FBaUIsMEJBQUEsb0JBQUEsa0NBQUEsa0NBQUEsb0NBQUEsOEJBQUE7OzhCRGxDckI7Q0ErREMsQUFqREQsSUFpREM7U0F6Q1ksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FSL0IsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw0QkFBNEI7YUFDMUM7O2tCQUVFLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUVOLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIFBhbmVsTW9kZSwgU3VwcG9ydFRpbWVPcHRpb25zIH0gZnJvbSAnLi4vLi4vc3RhbmRhcmQtdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdpbm5lci1wb3B1cCcsXHJcbiAgZXhwb3J0QXM6ICdpbm5lclBvcHVwJyxcclxuICB0ZW1wbGF0ZVVybDogJ2lubmVyLXBvcHVwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5uZXJQb3B1cENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGltZU9wdGlvbnM6IFN1cHBvcnRUaW1lT3B0aW9ucztcclxuICBASW5wdXQoKSBlbmFibGVQcmV2OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGVuYWJsZU5leHQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiBEaXNhYmxlZERhdGVGbjtcclxuICBASW5wdXQoKSBkYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcbiAgQElucHV0KCkgaG92ZXJWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuXHJcbiAgQElucHV0KCkgcGFuZWxNb2RlOiBQYW5lbE1vZGU7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBhbmVsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlPigpO1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaGVhZGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiB1c2VyIGNoYW5nZWQgdGhlIGhlYWRlcidzIHZhbHVlXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTsgLy8gRW1pdHRlZCB3aGVuIHRoZSBkYXRlIGlzIHNlbGVjdGVkIGJ5IGNsaWNrIHRoZSBkYXRlIHBhbmVsXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdFRpbWUgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGF5SG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTsgLy8gRW1pdHRlZCB3aGVuIGhvdmVyIG9uIGEgZGF5IGJ5IG1vdXNlIGVudGVyXHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcblxyXG4gIG9uU2VsZWN0VGltZShkYXRlOiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdFRpbWUuZW1pdChuZXcgQ2FuZHlEYXRlKGRhdGUpKTtcclxuICB9XHJcblxyXG4gIC8vIFRoZSB2YWx1ZSByZWFsIGNoYW5nZWQgdG8gb3V0c2lkZVxyXG4gIG9uU2VsZWN0RGF0ZShkYXRlOiBDYW5keURhdGUgfCBEYXRlKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlIDogbmV3IENhbmR5RGF0ZShkYXRlKTtcclxuICAgIGNvbnN0IHRpbWVWYWx1ZSA9IHRoaXMudGltZU9wdGlvbnMgJiYgdGhpcy50aW1lT3B0aW9ucy5uekRlZmF1bHRPcGVuVmFsdWU7XHJcblxyXG4gICAgLy8gRGlzcGxheSB0aW1lVmFsdWUgd2hlbiB2YWx1ZSBpcyBudWxsXHJcbiAgICBpZiAoIXRoaXMudmFsdWUgJiYgdGltZVZhbHVlKSB7XHJcbiAgICAgIHZhbHVlLnNldEhtcyh0aW1lVmFsdWUuZ2V0SG91cnMoKSwgdGltZVZhbHVlLmdldE1pbnV0ZXMoKSwgdGltZVZhbHVlLmdldFNlY29uZHMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZWxlY3REYXRlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCI8Y2FsZW5kYXItaGVhZGVyXHJcbiAgWyhwYW5lbE1vZGUpXT1cInBhbmVsTW9kZVwiXHJcbiAgKHBhbmVsTW9kZUNoYW5nZSk9XCJwYW5lbE1vZGVDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuICBbKHZhbHVlKV09XCJ2YWx1ZVwiXHJcbiAgKHZhbHVlQ2hhbmdlKT1cImhlYWRlckNoYW5nZS5lbWl0KCRldmVudClcIlxyXG4gIFtsb2NhbGVdPVwibG9jYWxlXCJcclxuICBbc2hvd1RpbWVQaWNrZXJdPVwic2hvd1RpbWVQaWNrZXJcIlxyXG4gIFtlbmFibGVQcmV2XT1cImVuYWJsZVByZXZcIlxyXG4gIFtlbmFibGVOZXh0XT1cImVuYWJsZU5leHRcIlxyXG4+PC9jYWxlbmRhci1oZWFkZXI+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1RpbWVQaWNrZXIgJiYgdGltZU9wdGlvbnNcIj5cclxuICA8bnotdGltZS1waWNrZXItcGFuZWxcclxuICAgIFtuekluRGF0ZVBpY2tlcl09XCJ0cnVlXCJcclxuICAgIFtuZ01vZGVsXT1cInZhbHVlPy5uYXRpdmVEYXRlXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uU2VsZWN0VGltZSgkZXZlbnQpXCJcclxuICAgIFtmb3JtYXRdPVwidGltZU9wdGlvbnMubnpGb3JtYXRcIlxyXG4gICAgW256SG91clN0ZXBdPVwidGltZU9wdGlvbnMubnpIb3VyU3RlcFwiXHJcbiAgICBbbnpNaW51dGVTdGVwXT1cInRpbWVPcHRpb25zLm56TWludXRlU3RlcFwiXHJcbiAgICBbbnpTZWNvbmRTdGVwXT1cInRpbWVPcHRpb25zLm56U2Vjb25kU3RlcFwiXHJcbiAgICBbbnpEaXNhYmxlZEhvdXJzXT1cInRpbWVPcHRpb25zLm56RGlzYWJsZWRIb3Vyc1wiXHJcbiAgICBbbnpEaXNhYmxlZE1pbnV0ZXNdPVwidGltZU9wdGlvbnMubnpEaXNhYmxlZE1pbnV0ZXNcIlxyXG4gICAgW256RGlzYWJsZWRTZWNvbmRzXT1cInRpbWVPcHRpb25zLm56RGlzYWJsZWRTZWNvbmRzXCJcclxuICAgIFtuekhpZGVEaXNhYmxlZE9wdGlvbnNdPVwidGltZU9wdGlvbnMubnpIaWRlRGlzYWJsZWRPcHRpb25zXCJcclxuICAgIFtuekRlZmF1bHRPcGVuVmFsdWVdPVwidGltZU9wdGlvbnMubnpEZWZhdWx0T3BlblZhbHVlXCJcclxuICAgIFtuelVzZTEySG91cnNdPVwidGltZU9wdGlvbnMubnpVc2UxMkhvdXJzXCJcclxuICAgIFtuekFkZE9uXT1cInRpbWVPcHRpb25zLm56QWRkT25cIlxyXG4gICAgW29wZW5lZF09XCJ0cnVlXCJcclxuICA+PC9uei10aW1lLXBpY2tlci1wYW5lbD5cclxuICA8IS0tIHVzZSBbb3BlbmVkXSB0byB0cmlnZ2VyIHRpbWUgcGFuZWwgYGluaXRQb3NpdGlvbigpYCAtLT5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWJvZHlcIj5cclxuICA8ZGF0ZS10YWJsZVxyXG4gICAgW2xvY2FsZV09XCJsb2NhbGVcIlxyXG4gICAgW3Nob3dXZWVrXT1cInNob3dXZWVrXCJcclxuICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAodmFsdWVDaGFuZ2UpPVwib25TZWxlY3REYXRlKCRldmVudClcIlxyXG4gICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxyXG4gICAgW2RhdGVDZWxsUmVuZGVyXT1cImRhdGVSZW5kZXJcIlxyXG4gICAgW3NlbGVjdGVkVmFsdWVdPVwic2VsZWN0ZWRWYWx1ZVwiXHJcbiAgICBbaG92ZXJWYWx1ZV09XCJob3ZlclZhbHVlXCJcclxuICAgIChkYXlIb3Zlcik9XCJkYXlIb3Zlci5lbWl0KCRldmVudClcIlxyXG4gID48L2RhdGUtdGFibGU+XHJcbjwvZGl2PlxyXG4iXX0=