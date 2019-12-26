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
var TimePickerButtonComponent = /** @class */ (function () {
    function TimePickerButtonComponent() {
        this.timePickerDisabled = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @return {?}
     */
    TimePickerButtonComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.showTimePicker = !this.showTimePicker;
        this.showTimePickerChange.emit(this.showTimePicker);
    };
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
    return TimePickerButtonComponent;
}());
export { TimePickerButtonComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXItYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvdGltZS1waWNrZXItYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5IO0lBQUE7UUFVVyx1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFFcEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDdEIseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV0RSxjQUFTLEdBQVcsY0FBYyxDQUFDO0lBTXJDLENBQUM7Ozs7SUFKQywyQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGdTQUFnRDtpQkFDakQ7Ozt5QkFFRSxLQUFLO3FDQUNMLEtBQUs7aUNBRUwsS0FBSzt1Q0FDTCxNQUFNOztJQVFULGdDQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FiWSx5QkFBeUI7OztJQUNwQywyQ0FBeUM7O0lBQ3pDLHVEQUE2Qzs7SUFFN0MsbURBQXlDOztJQUN6Qyx5REFBc0U7O0lBRXRFLDhDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICd0aW1lLXBpY2tlci1idXR0b24nLFxyXG4gIGV4cG9ydEFzOiAndGltZVBpY2tlckJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICd0aW1lLXBpY2tlci1idXR0b24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lUGlja2VyQnV0dG9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIHRpbWVQaWNrZXJEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBzaG93VGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzaG93VGltZVBpY2tlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcclxuXHJcbiAgb25DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd1RpbWVQaWNrZXIgPSAhdGhpcy5zaG93VGltZVBpY2tlcjtcclxuICAgIHRoaXMuc2hvd1RpbWVQaWNrZXJDaGFuZ2UuZW1pdCh0aGlzLnNob3dUaW1lUGlja2VyKTtcclxuICB9XHJcbn1cclxuIl19