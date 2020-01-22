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
import { DateHelperService } from 'ng-zorro-antd/i18n';
var TodayButtonComponent = /** @class */ (function () {
    function TodayButtonComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.hasTimePicker = false;
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isDisabled = false;
        this.now = new CandyDate();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    TodayButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.disabledDate) {
            this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
        }
        if (changes.locale) {
            // NOTE: Compat for DatePipe formatting rules
            /** @type {?} */
            var dateFormat = this.locale.dateFormat;
            if (this.dateHelper.relyOnDatePipe) {
                dateFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dateFormat);
            }
            this.title = this.dateHelper.format(this.now.nativeDate, dateFormat);
        }
    };
    /**
     * @return {?}
     */
    TodayButtonComponent.prototype.onClickToday = /**
     * @return {?}
     */
    function () {
        this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
    };
    TodayButtonComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'today-button',
                    exportAs: 'todayButton',
                    template: "<a\r\n  class=\"{{ prefixCls }}-today-btn {{ isDisabled ? prefixCls + '-today-btn-disabled' : '' }}\"\r\n  role=\"button\"\r\n  (click)=\"isDisabled ? null : onClickToday()\"\r\n  title=\"{{ title }}\"\r\n>\r\n  {{ hasTimePicker ? locale.now : locale.today }}\r\n</a>"
                }] }
    ];
    /** @nocollapse */
    TodayButtonComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    TodayButtonComponent.propDecorators = {
        locale: [{ type: Input }],
        hasTimePicker: [{ type: Input }],
        disabledDate: [{ type: Input }],
        clickToday: [{ type: Output }]
    };
    return TodayButtonComponent;
}());
export { TodayButtonComponent };
if (false) {
    /** @type {?} */
    TodayButtonComponent.prototype.locale;
    /** @type {?} */
    TodayButtonComponent.prototype.hasTimePicker;
    /** @type {?} */
    TodayButtonComponent.prototype.disabledDate;
    /** @type {?} */
    TodayButtonComponent.prototype.clickToday;
    /** @type {?} */
    TodayButtonComponent.prototype.prefixCls;
    /** @type {?} */
    TodayButtonComponent.prototype.isDisabled;
    /** @type {?} */
    TodayButtonComponent.prototype.title;
    /**
     * @type {?}
     * @private
     */
    TodayButtonComponent.prototype.now;
    /**
     * @type {?}
     * @private
     */
    TodayButtonComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvdG9kYXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUF3QixpQkFBaUIsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RztJQXFCRSw4QkFBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFYeEMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFHckIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFOUQsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQUNuQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBR3BCLFFBQUcsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBRVcsQ0FBQzs7Ozs7SUFFckQsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9FO1FBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFOzs7Z0JBRWQsVUFBVSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUMvQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO2dCQUNsQyxVQUFVLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsVUFBVSxFQUF3QixDQUFDLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDdEY7WUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlFQUFpRTtJQUMzRyxDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsdVJBQTBDO2lCQUMzQzs7OztnQkFUOEIsaUJBQWlCOzs7eUJBVzdDLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzZCQUVMLE1BQU07O0lBMkJULDJCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FoQ1ksb0JBQW9COzs7SUFDL0Isc0NBQXlDOztJQUN6Qyw2Q0FBd0M7O0lBQ3hDLDRDQUE0Qzs7SUFFNUMsMENBQThEOztJQUU5RCx5Q0FBbUM7O0lBQ25DLDBDQUE0Qjs7SUFDNUIscUNBQWM7Ozs7O0lBRWQsbUNBQXlDOzs7OztJQUU3QiwwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJCeURhdGVQaXBlLCBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICd0b2RheS1idXR0b24nLFxyXG4gIGV4cG9ydEFzOiAndG9kYXlCdXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAndG9kYXktYnV0dG9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9kYXlCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgaGFzVGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGlja1RvZGF5ID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgbm93OiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkRGF0ZSkge1xyXG4gICAgICB0aGlzLmlzRGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkRGF0ZSAmJiB0aGlzLmRpc2FibGVkRGF0ZSh0aGlzLm5vdy5uYXRpdmVEYXRlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLmxvY2FsZSkge1xyXG4gICAgICAvLyBOT1RFOiBDb21wYXQgZm9yIERhdGVQaXBlIGZvcm1hdHRpbmcgcnVsZXNcclxuICAgICAgbGV0IGRhdGVGb3JtYXQ6IHN0cmluZyA9IHRoaXMubG9jYWxlLmRhdGVGb3JtYXQ7XHJcbiAgICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcclxuICAgICAgICBkYXRlRm9ybWF0ID0gKHRoaXMuZGF0ZUhlbHBlciBhcyBEYXRlSGVscGVyQnlEYXRlUGlwZSkudHJhbnNDb21wYXRGb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodGhpcy5ub3cubmF0aXZlRGF0ZSwgZGF0ZUZvcm1hdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrVG9kYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrVG9kYXkuZW1pdCh0aGlzLm5vdy5jbG9uZSgpKTsgLy8gVG8gcHJldmVudCB0aGUgXCJub3dcIiBiZWluZyBtb2RpZmllZCBmcm9tIG91dHNpZGUsIHdlIHVzZSBjbG9uZVxyXG4gIH1cclxufVxyXG4iXX0=