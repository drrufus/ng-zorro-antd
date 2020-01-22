/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
export class InnerPopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        this.headerChange = new EventEmitter(); // Emitted when user changed the header's value
        // Emitted when user changed the header's value
        this.selectDate = new EventEmitter(); // Emitted when the date is selected by click the date panel
        // Emitted when the date is selected by click the date panel
        this.selectTime = new EventEmitter();
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        // Emitted when hover on a day by mouse enter
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectTime(date) {
        this.selectTime.emit(new CandyDate(date));
    }
    // The value real changed to outside
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectDate(date) {
        /** @type {?} */
        const value = date instanceof CandyDate ? date : new CandyDate(date);
        this.selectDate.emit(value);
    }
}
InnerPopupComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'inner-popup',
                exportAs: 'innerPopup',
                template: "<calendar-header\r\n  [(panelMode)]=\"panelMode\"\r\n  (panelModeChange)=\"panelModeChange.emit($event)\"\r\n  [(value)]=\"value\"\r\n  (valueChange)=\"headerChange.emit($event)\"\r\n  [locale]=\"locale\"\r\n  [showTimePicker]=\"showTimePicker\"\r\n  [enablePrev]=\"enablePrev\"\r\n  [enableNext]=\"enableNext\"\r\n></calendar-header>\r\n\r\n<ng-container *ngIf=\"showTimePicker && timeOptions\">\r\n  <nz-time-picker-panel\r\n    [nzInDatePicker]=\"true\"\r\n    [ngModel]=\"value?.nativeDate\"\r\n    (ngModelChange)=\"onSelectTime($event)\"\r\n    [format]=\"timeOptions.nzFormat\"\r\n    [nzHourStep]=\"timeOptions.nzHourStep\"\r\n    [nzMinuteStep]=\"timeOptions.nzMinuteStep\"\r\n    [nzSecondStep]=\"timeOptions.nzSecondStep\"\r\n    [nzDisabledHours]=\"timeOptions.nzDisabledHours\"\r\n    [nzDisabledMinutes]=\"timeOptions.nzDisabledMinutes\"\r\n    [nzDisabledSeconds]=\"timeOptions.nzDisabledSeconds\"\r\n    [nzHideDisabledOptions]=\"timeOptions.nzHideDisabledOptions\"\r\n    [nzDefaultOpenValue]=\"timeOptions.nzDefaultOpenValue\"\r\n    [nzUse12Hours]=\"timeOptions.nzUse12Hours\"\r\n    [nzAddOn]=\"timeOptions.nzAddOn\"\r\n    [opened]=\"true\"\r\n  ></nz-time-picker-panel>\r\n  <!-- use [opened] to trigger time panel `initPosition()` -->\r\n</ng-container>\r\n\r\n<div class=\"{{ prefixCls }}-body\">\r\n  <date-table\r\n    [locale]=\"locale\"\r\n    [showWeek]=\"showWeek\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onSelectDate($event)\"\r\n    showWeekNumber=\"false\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [dateCellRender]=\"dateRender\"\r\n    [selectedValue]=\"selectedValue\"\r\n    [hoverValue]=\"hoverValue\"\r\n    (dayHover)=\"dayHover.emit($event)\"\r\n  ></date-table>\r\n</div>"
            }] }
];
InnerPopupComponent.propDecorators = {
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    timeOptions: [{ type: Input }],
    enablePrev: [{ type: Input }],
    enableNext: [{ type: Input }],
    disabledDate: [{ type: Input }],
    dateRender: [{ type: Input }],
    selectedValue: [{ type: Input }],
    hoverValue: [{ type: Input }],
    panelMode: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    value: [{ type: Input }],
    headerChange: [{ type: Output }],
    selectDate: [{ type: Output }],
    selectTime: [{ type: Output }],
    dayHover: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    InnerPopupComponent.prototype.showWeek;
    /** @type {?} */
    InnerPopupComponent.prototype.locale;
    /** @type {?} */
    InnerPopupComponent.prototype.showTimePicker;
    /** @type {?} */
    InnerPopupComponent.prototype.timeOptions;
    /** @type {?} */
    InnerPopupComponent.prototype.enablePrev;
    /** @type {?} */
    InnerPopupComponent.prototype.enableNext;
    /** @type {?} */
    InnerPopupComponent.prototype.disabledDate;
    /** @type {?} */
    InnerPopupComponent.prototype.dateRender;
    /** @type {?} */
    InnerPopupComponent.prototype.selectedValue;
    /** @type {?} */
    InnerPopupComponent.prototype.hoverValue;
    /** @type {?} */
    InnerPopupComponent.prototype.panelMode;
    /** @type {?} */
    InnerPopupComponent.prototype.panelModeChange;
    /** @type {?} */
    InnerPopupComponent.prototype.value;
    /** @type {?} */
    InnerPopupComponent.prototype.headerChange;
    /** @type {?} */
    InnerPopupComponent.prototype.selectDate;
    /** @type {?} */
    InnerPopupComponent.prototype.selectTime;
    /** @type {?} */
    InnerPopupComponent.prototype.dayHover;
    /** @type {?} */
    InnerPopupComponent.prototype.prefixCls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9wb3B1cHMvaW5uZXItcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFZN0QsTUFBTSxPQUFPLG1CQUFtQjtJQVJoQztRQXVCcUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBSWhELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQyxDQUFDLCtDQUErQzs7UUFDN0YsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUMsQ0FBQyw0REFBNEQ7O1FBQ3hHLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBQzNDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDLENBQUMsNkNBQTZDOztRQUUxRyxjQUFTLEdBQVcsY0FBYyxDQUFDO0lBV3JDLENBQUM7Ozs7O0lBVEMsWUFBWSxDQUFDLElBQVU7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFHRCxZQUFZLENBQUMsSUFBc0I7O2NBQzNCLEtBQUssR0FBRyxJQUFJLFlBQVksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQztRQUNwRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsMHNEQUF5QzthQUMxQzs7O3VCQUVFLEtBQUs7cUJBRUwsS0FBSzs2QkFDTCxLQUFLOzBCQUVMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBRUwsS0FBSzs4QkFDTCxNQUFNO29CQUVOLEtBQUs7MkJBRUwsTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07dUJBQ04sTUFBTTs7OztJQXJCUCx1Q0FBMkI7O0lBRTNCLHFDQUF5Qzs7SUFDekMsNkNBQWlDOztJQUVqQywwQ0FBMEI7O0lBQzFCLHlDQUE2Qjs7SUFDN0IseUNBQTZCOztJQUM3QiwyQ0FBc0M7O0lBQ3RDLHlDQUE4RDs7SUFDOUQsNENBQW9DOztJQUNwQyx5Q0FBaUM7O0lBRWpDLHdDQUE4Qjs7SUFDOUIsOENBQW1FOztJQUVuRSxvQ0FBMEI7O0lBRTFCLDJDQUFnRTs7SUFDaEUseUNBQThEOztJQUM5RCx5Q0FBOEQ7O0lBQzlELHVDQUE0RDs7SUFFNUQsd0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIFBhbmVsTW9kZSB9IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnaW5uZXItcG9wdXAnLFxyXG4gIGV4cG9ydEFzOiAnaW5uZXJQb3B1cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdpbm5lci1wb3B1cC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElubmVyUG9wdXBDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHNob3dXZWVrOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIHNob3dUaW1lUGlja2VyOiBib29sZWFuO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSB0aW1lT3B0aW9uczogYW55O1xyXG4gIEBJbnB1dCgpIGVuYWJsZVByZXY6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZW5hYmxlTmV4dDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IERpc2FibGVkRGF0ZUZuO1xyXG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuICBASW5wdXQoKSBob3ZlclZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG5cclxuICBASW5wdXQoKSBwYW5lbE1vZGU6IFBhbmVsTW9kZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBoZWFkZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTsgLy8gRW1pdHRlZCB3aGVuIHVzZXIgY2hhbmdlZCB0aGUgaGVhZGVyJ3MgdmFsdWVcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdGhlIGRhdGUgaXMgc2VsZWN0ZWQgYnkgY2xpY2sgdGhlIGRhdGUgcGFuZWxcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0VGltZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBkYXlIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gaG92ZXIgb24gYSBkYXkgYnkgbW91c2UgZW50ZXJcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcclxuXHJcbiAgb25TZWxlY3RUaW1lKGRhdGU6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0VGltZS5lbWl0KG5ldyBDYW5keURhdGUoZGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhlIHZhbHVlIHJlYWwgY2hhbmdlZCB0byBvdXRzaWRlXHJcbiAgb25TZWxlY3REYXRlKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gZGF0ZSBpbnN0YW5jZW9mIENhbmR5RGF0ZSA/IGRhdGUgOiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xyXG4gICAgdGhpcy5zZWxlY3REYXRlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=