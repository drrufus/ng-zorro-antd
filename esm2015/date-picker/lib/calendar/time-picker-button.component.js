/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class TimePickerButtonComponent {
    constructor() {
        this.timePickerDisabled = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    onClick() {
        this.showTimePicker = !this.showTimePicker;
        this.showTimePickerChange.emit(this.showTimePicker);
    }
}
/** @nocollapse */ TimePickerButtonComponent.ɵfac = function TimePickerButtonComponent_Factory(t) { return new (t || TimePickerButtonComponent)(); };
/** @nocollapse */ TimePickerButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimePickerButtonComponent, selectors: [["time-picker-button"]], inputs: { locale: "locale", timePickerDisabled: "timePickerDisabled", showTimePicker: "showTimePicker" }, outputs: { showTimePickerChange: "showTimePickerChange" }, exportAs: ["timePickerButton"], decls: 2, vars: 5, consts: [["role", "button", 3, "click"]], template: function TimePickerButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵlistener("click", function TimePickerButtonComponent_Template_a_click_0_listener($event) { return ctx.timePickerDisabled ? null : ctx.onClick(); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-time-picker-btn ", ctx.timePickerDisabled ? ctx.prefixCls + "-time-picker-btn-disabled" : "", "");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.showTimePicker ? ctx.locale.dateSelect : ctx.locale.timeSelect, "\n");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimePickerButtonComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'time-picker-button',
                exportAs: 'timePickerButton',
                templateUrl: 'time-picker-button.component.html'
            }]
    }], null, { locale: [{
            type: Input
        }], timePickerDisabled: [{
            type: Input
        }], showTimePicker: [{
            type: Input
        }], showTimePickerChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXItYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvdGltZS1waWNrZXItYnV0dG9uLmNvbXBvbmVudC50cyIsImxpYi9jYWxlbmRhci90aW1lLXBpY2tlci1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFZbkgsTUFBTSxPQUFPLHlCQUF5QjtJQVJ0QztRQVVXLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUVwQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUN0Qix5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRXRFLGNBQVMsR0FBVyxjQUFjLENBQUM7S0FNcEM7SUFKQyxPQUFPO1FBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7a0dBWlUseUJBQXlCOzhEQUF6Qix5QkFBeUI7UUNwQnRDLDRCQU9FO1FBRkEsZ0lBQThCLElBQUssR0FBRSxhQUFTLElBQUM7UUFFL0MsWUFDRjtRQUFBLGlCQUFJOztRQVBGLGdKQUVHO1FBSUgsZUFDRjtRQURFLG9HQUNGOztrRERZYSx5QkFBeUI7Y0FSckMsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsbUNBQW1DO2FBQ2pEOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3RpbWUtcGlja2VyLWJ1dHRvbicsXHJcbiAgZXhwb3J0QXM6ICd0aW1lUGlja2VyQnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJ3RpbWUtcGlja2VyLWJ1dHRvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVQaWNrZXJCdXR0b25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgdGltZVBpY2tlckRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNob3dUaW1lUGlja2VyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG5cclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93VGltZVBpY2tlciA9ICF0aGlzLnNob3dUaW1lUGlja2VyO1xyXG4gICAgdGhpcy5zaG93VGltZVBpY2tlckNoYW5nZS5lbWl0KHRoaXMuc2hvd1RpbWVQaWNrZXIpO1xyXG4gIH1cclxufVxyXG4iLCI8YVxyXG4gIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXRpbWUtcGlja2VyLWJ0biB7e1xyXG4gICAgdGltZVBpY2tlckRpc2FibGVkID8gcHJlZml4Q2xzICsgJy10aW1lLXBpY2tlci1idG4tZGlzYWJsZWQnIDogJydcclxuICB9fVwiXHJcbiAgcm9sZT1cImJ1dHRvblwiXHJcbiAgKGNsaWNrKT1cInRpbWVQaWNrZXJEaXNhYmxlZCA/IG51bGwgOiBvbkNsaWNrKClcIlxyXG4+XHJcbiAge3sgc2hvd1RpbWVQaWNrZXIgPyBsb2NhbGUuZGF0ZVNlbGVjdCA6IGxvY2FsZS50aW1lU2VsZWN0IH19XHJcbjwvYT5cclxuIl19