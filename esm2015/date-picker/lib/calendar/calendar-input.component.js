/**
 * @fileoverview added by tsickle
 * Generated from: lib/calendar/calendar-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
export class CalendarInputComponent {
    /**
     * @param {?} dateHelper
     */
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.invalidInputClass = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoFocus) {
            setTimeout((/**
             * @return {?}
             */
            () => this.inputRef.nativeElement.focus()));
        }
    }
    /**
     * @param {?} event
     * @param {?=} isEnter
     * @return {?}
     */
    onInputKeyup(event, isEnter = false) {
        /** @type {?} */
        const date = this.checkValidInputDate(event);
        if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
            return;
        }
        this.value = date;
        this.valueChange.emit({ date, isEnter });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toReadableInput(value) {
        return value ? this.dateHelper.format(value.nativeDate, this.format) : '';
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    checkValidInputDate(event) {
        /** @type {?} */
        const input = ((/** @type {?} */ (event.target))).value;
        /** @type {?} */
        const date = new CandyDate(input);
        this.invalidInputClass = '';
        if (!date.isValid() || input !== this.toReadableInput(date)) {
            // Should also match the input format exactly
            this.invalidInputClass = `${this.prefixCls}-input-invalid`;
            return null;
        }
        return date;
    }
}
CalendarInputComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-input',
                exportAs: 'calendarInput',
                template: "<div class=\"{{ prefixCls }}-input-wrap\">\r\n  <div class=\"{{ prefixCls }}-date-input-wrap\">\r\n    <input\r\n      class=\"{{ prefixCls }}-input {{ invalidInputClass }}\"\r\n      placeholder=\"{{ placeholder || locale.dateSelect }}\"\r\n      value=\"{{ toReadableInput(value) }}\"\r\n      (input)=\"onInputKeyup($event)\"\r\n      (keyup.enter)=\"onInputKeyup($event, true)\"\r\n      #inputElement\r\n    />\r\n  </div>\r\n  <a class=\"{{ prefixCls }}-clear-btn\" role=\"button\" title=\"{{ locale.clear }}\"></a>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
CalendarInputComponent.ctorParameters = () => [
    { type: DateHelperService }
];
CalendarInputComponent.propDecorators = {
    locale: [{ type: Input }],
    format: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabledDate: [{ type: Input }],
    value: [{ type: Input }],
    autoFocus: [{ type: Input }],
    inputRef: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
    valueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CalendarInputComponent.prototype.locale;
    /** @type {?} */
    CalendarInputComponent.prototype.format;
    /** @type {?} */
    CalendarInputComponent.prototype.placeholder;
    /** @type {?} */
    CalendarInputComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarInputComponent.prototype.value;
    /** @type {?} */
    CalendarInputComponent.prototype.autoFocus;
    /** @type {?} */
    CalendarInputComponent.prototype.inputRef;
    /** @type {?} */
    CalendarInputComponent.prototype.valueChange;
    /** @type {?} */
    CalendarInputComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarInputComponent.prototype.invalidInputClass;
    /**
     * @type {?}
     * @private
     */
    CalendarInputComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQVVoRixNQUFNLE9BQU8sc0JBQXNCOzs7O0lBZWpDLFlBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBTDlCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQXlDLENBQUM7UUFFM0YsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQUNuQyxzQkFBaUIsR0FBVyxFQUFFLENBQUM7SUFFcUIsQ0FBQzs7OztJQUVyRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFVBQVU7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBb0IsRUFBRSxVQUFtQixLQUFLOztjQUNuRCxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztRQUU1QyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQ3RFLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBZ0I7UUFDOUIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUUsQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsS0FBWTs7Y0FDaEMsS0FBSyxHQUFHLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBb0IsQ0FBQyxDQUFDLEtBQUs7O2NBQ2hELElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNELDZDQUE2QztZQUM3QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxnQkFBZ0IsQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtaUJBQTRDO2FBQzdDOzs7O1lBVFEsaUJBQWlCOzs7cUJBV3ZCLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7b0JBRUwsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzBCQUUxQyxNQUFNOzs7O0lBVFAsd0NBQXlDOztJQUN6Qyx3Q0FBd0I7O0lBQ3hCLDZDQUE2Qjs7SUFDN0IsOENBQTRDOztJQUU1Qyx1Q0FBMEI7O0lBQzFCLDJDQUE0Qjs7SUFDNUIsMENBQWtFOztJQUVsRSw2Q0FBMkY7O0lBRTNGLDJDQUFtQzs7SUFDbkMsbURBQStCOzs7OztJQUVuQiw0Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1pbnB1dCcsXHJcbiAgZXhwb3J0QXM6ICdjYWxlbmRhcklucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJ2NhbGVuZGFyLWlucHV0LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XHJcbiAgQElucHV0KCkgYXV0b0ZvY3VzOiBib29sZWFuO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF0ZTogQ2FuZHlEYXRlOyBpc0VudGVyOiBib29sZWFuIH0+KCk7XHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgaW52YWxpZElucHV0Q2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRLZXl1cChldmVudDogS2V5Ym9hcmRFdmVudCwgaXNFbnRlcjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRlID0gdGhpcy5jaGVja1ZhbGlkSW5wdXREYXRlKGV2ZW50KTtcclxuXHJcbiAgICBpZiAoIWRhdGUgfHwgKHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKGRhdGUubmF0aXZlRGF0ZSkpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbHVlID0gZGF0ZTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh7IGRhdGUsIGlzRW50ZXIgfSk7XHJcbiAgfVxyXG5cclxuICB0b1JlYWRhYmxlSW5wdXQodmFsdWU6IENhbmR5RGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdmFsdWUgPyB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHZhbHVlLm5hdGl2ZURhdGUsIHRoaXMuZm9ybWF0KSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1ZhbGlkSW5wdXREYXRlKGV2ZW50OiBFdmVudCk6IENhbmR5RGF0ZSB8IG51bGwge1xyXG4gICAgY29uc3QgaW5wdXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBDYW5keURhdGUoaW5wdXQpO1xyXG5cclxuICAgIHRoaXMuaW52YWxpZElucHV0Q2xhc3MgPSAnJztcclxuICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkgfHwgaW5wdXQgIT09IHRoaXMudG9SZWFkYWJsZUlucHV0KGRhdGUpKSB7XHJcbiAgICAgIC8vIFNob3VsZCBhbHNvIG1hdGNoIHRoZSBpbnB1dCBmb3JtYXQgZXhhY3RseVxyXG4gICAgICB0aGlzLmludmFsaWRJbnB1dENsYXNzID0gYCR7dGhpcy5wcmVmaXhDbHN9LWlucHV0LWludmFsaWRgO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9XHJcbn1cclxuIl19