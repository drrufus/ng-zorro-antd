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
import * as ɵngcc0 from '@angular/core';
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
    TimePickerButtonComponent.propDecorators = {
        locale: [{ type: Input }],
        timePickerDisabled: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        showTimePickerChange: [{ type: Output }]
    };
TimePickerButtonComponent.ɵfac = function TimePickerButtonComponent_Factory(t) { return new (t || TimePickerButtonComponent)(); };
TimePickerButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TimePickerButtonComponent, selectors: [["time-picker-button"]], inputs: { timePickerDisabled: "timePickerDisabled", showTimePicker: "showTimePicker", locale: "locale" }, outputs: { showTimePickerChange: "showTimePickerChange" }, exportAs: ["timePickerButton"], decls: 2, vars: 5, consts: [["role", "button", 3, "click"]], template: function TimePickerButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "a", 0);
        ɵngcc0.ɵɵlistener("click", function TimePickerButtonComponent_Template_a_click_0_listener() { return ctx.timePickerDisabled ? null : ctx.onClick(); });
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-time-picker-btn ", ctx.timePickerDisabled ? ctx.prefixCls + "-time-picker-btn-disabled" : "", "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.showTimePicker ? ctx.locale.dateSelect : ctx.locale.timeSelect, "\n");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TimePickerButtonComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'time-picker-button',
                exportAs: 'timePickerButton',
                template: "<a\r\n  class=\"{{ prefixCls }}-time-picker-btn {{ timePickerDisabled ? prefixCls + '-time-picker-btn-disabled' : '' }}\"\r\n  role=\"button\"\r\n  (click)=\"timePickerDisabled ? null : onClick()\"\r\n>\r\n  {{ showTimePicker ? locale.dateSelect : locale.timeSelect }}\r\n</a>"
            }]
    }], function () { return []; }, { timePickerDisabled: [{
            type: Input
        }], showTimePicker: [{
            type: Input
        }], showTimePickerChange: [{
            type: Output
        }], locale: [{
            type: Input
        }] }); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXItYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvbGliL2NhbGVuZGFyL3RpbWUtcGlja2VyLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUluSDtJQUFBO1FBVVcsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBRXBDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ3RCLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFdEUsY0FBUyxHQUFXLGNBQWMsQ0FBQztJQU1yQyxDQUFDOzs7O0lBSkMsMkNBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUNILEFBYlE7O1lBUlAsU0FBUyxTQUFDLExBU1IsS0FBSztpQkFSTixhQUFhLEVBQUUsS0FTZCxLQUFLO0VBVDBCLENBQUMsSUFBSSxzQkFDckMsSUFVQyxLQUFLO0NBVlMsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLE1BVzlDLE1BQU07O2tFQVRQLFFBQVEsRUFBRSxvQkFBb0Isc0JBQzlCLFFBQVEsRUFBRTtlQUFrQixzQkFDNUIsZ1NBQWdELGtCQUNqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFNa0I7SUFRbkIsZ0NBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWJZLHlCQUF5Qjs7O0lBQ3BDLDJDQUF5Qzs7SUFDekMsdURBQTZDOztJQUU3QyxtREFBeUM7O0lBQ3pDLHlEQUFzRTs7SUFFdEUsOENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3RpbWUtcGlja2VyLWJ1dHRvbicsXHJcbiAgZXhwb3J0QXM6ICd0aW1lUGlja2VyQnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJ3RpbWUtcGlja2VyLWJ1dHRvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVQaWNrZXJCdXR0b25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgdGltZVBpY2tlckRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNob3dUaW1lUGlja2VyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG5cclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93VGltZVBpY2tlciA9ICF0aGlzLnNob3dUaW1lUGlja2VyO1xyXG4gICAgdGhpcy5zaG93VGltZVBpY2tlckNoYW5nZS5lbWl0KHRoaXMuc2hvd1RpbWVQaWNrZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=