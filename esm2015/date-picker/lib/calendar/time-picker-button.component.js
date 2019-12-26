/**
 * @fileoverview added by tsickle
 * Generated from: lib/calendar/time-picker-button.component.ts
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
export class TimePickerButtonComponent {
    constructor() {
        this.timePickerDisabled = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @return {?}
     */
    onClick() {
        this.showTimePicker = !this.showTimePicker;
        this.showTimePickerChange.emit(this.showTimePicker);
    }
}
TimePickerButtonComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'time-picker-button',
                exportAs: 'timePickerButton',
                template: "<a\r\n  class=\"{{ prefixCls }}-time-picker-btn {{ timePickerDisabled ? prefixCls + '-time-picker-btn-disabled' : '' }}\"\r\n  role=\"button\"\r\n  (click)=\"timePickerDisabled ? null : onClick()\"\r\n>\r\n  {{ showTimePicker ? locale.dateSelect : locale.timeSelect }}\r\n</a>"
            }] }
];
TimePickerButtonComponent.propDecorators = {
    locale: [{ type: Input }],
    timePickerDisabled: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    showTimePickerChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TimePickerButtonComponent.prototype.locale;
    /** @type {?} */
    TimePickerButtonComponent.prototype.timePickerDisabled;
    /** @type {?} */
    TimePickerButtonComponent.prototype.showTimePicker;
    /** @type {?} */
    TimePickerButtonComponent.prototype.showTimePickerChange;
    /** @type {?} */
    TimePickerButtonComponent.prototype.prefixCls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXItYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvdGltZS1waWNrZXItYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWW5ILE1BQU0sT0FBTyx5QkFBeUI7SUFSdEM7UUFVVyx1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFFcEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDdEIseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV0RSxjQUFTLEdBQVcsY0FBYyxDQUFDO0lBTXJDLENBQUM7Ozs7SUFKQyxPQUFPO1FBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2dCQUUvQyxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixnU0FBZ0Q7YUFDakQ7OztxQkFFRSxLQUFLO2lDQUNMLEtBQUs7NkJBRUwsS0FBSzttQ0FDTCxNQUFNOzs7O0lBSlAsMkNBQXlDOztJQUN6Qyx1REFBNkM7O0lBRTdDLG1EQUF5Qzs7SUFDekMseURBQXNFOztJQUV0RSw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAndGltZS1waWNrZXItYnV0dG9uJyxcclxuICBleHBvcnRBczogJ3RpbWVQaWNrZXJCdXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAndGltZS1waWNrZXItYnV0dG9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZVBpY2tlckJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSB0aW1lUGlja2VyRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2hvd1RpbWVQaWNrZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcblxyXG4gIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3dUaW1lUGlja2VyID0gIXRoaXMuc2hvd1RpbWVQaWNrZXI7XHJcbiAgICB0aGlzLnNob3dUaW1lUGlja2VyQ2hhbmdlLmVtaXQodGhpcy5zaG93VGltZVBpY2tlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==