/**
 * @fileoverview added by tsickle
 * Generated from: lib/calendar/calendar-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
var CalendarFooterComponent = /** @class */ (function () {
    function CalendarFooterComponent() {
        this.showToday = false;
        this.hasTimePicker = false;
        this.isRange = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.timePickerDisabled = false;
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    CalendarFooterComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'calendar-footer',
                    exportAs: 'calendarFooter',
                    template: "<div class=\"{{ prefixCls }}-footer {{ isRange ? prefixCls + '-range-bottom' : '' }} {{ hasTimePicker ? prefixCls + '-footer-show-ok' : '' }}\">\r\n  <div *ngIf=\"rangeQuickSelector\" class=\"{{ prefixCls }}-footer-extra {{ prefixCls }}-range-quick-selector\">\r\n    <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container>\r\n  </div>\r\n  <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra {{ isRange ? prefixCls + '-range-quick-selector' : '' }}\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\">\r\n        <ng-container *ngTemplateOutlet=\"extraFooter\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\">\r\n        <span [innerHTML]=\"extraFooter\"></span>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <span *ngIf=\"showToday || hasTimePicker\" class=\"{{ prefixCls }}-footer-btn\">\r\n    <today-button\r\n      *ngIf=\"showToday\"\r\n      [locale]=\"locale\"\r\n      [disabledDate]=\"disabledDate\"\r\n      [hasTimePicker]=\"hasTimePicker\"\r\n      (clickToday)=\"clickToday.emit($event)\"\r\n    ></today-button>\r\n    <time-picker-button\r\n      *ngIf=\"hasTimePicker\"\r\n      [locale]=\"locale\"\r\n      [timePickerDisabled]=\"timePickerDisabled\"\r\n      [showTimePicker]=\"showTimePicker\"\r\n      (showTimePickerChange)=\"showTimePickerChange.emit($event)\"\r\n    ></time-picker-button>\r\n    <ok-button\r\n      *ngIf=\"hasTimePicker\"\r\n      [okDisabled]=\"okDisabled\"\r\n      [locale]=\"locale\"\r\n      (clickOk)=\"clickOk.emit()\"\r\n    ></ok-button>\r\n  </span>\r\n</div>"
                }] }
    ];
    CalendarFooterComponent.propDecorators = {
        locale: [{ type: Input }],
        showToday: [{ type: Input }],
        hasTimePicker: [{ type: Input }],
        isRange: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        showTimePickerChange: [{ type: Output }],
        timePickerDisabled: [{ type: Input }],
        okDisabled: [{ type: Input }],
        disabledDate: [{ type: Input }],
        extraFooter: [{ type: Input }],
        rangeQuickSelector: [{ type: Input }],
        clickOk: [{ type: Output }],
        clickToday: [{ type: Output }]
    };
    return CalendarFooterComponent;
}());
export { CalendarFooterComponent };
if (false) {
    /** @type {?} */
    CalendarFooterComponent.prototype.locale;
    /** @type {?} */
    CalendarFooterComponent.prototype.showToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.hasTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.isRange;
    /** @type {?} */
    CalendarFooterComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.showTimePickerChange;
    /** @type {?} */
    CalendarFooterComponent.prototype.timePickerDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.okDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarFooterComponent.prototype.extraFooter;
    /** @type {?} */
    CalendarFooterComponent.prototype.rangeQuickSelector;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickOk;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarFooterComponent.prototype.isTemplateRef;
    /** @type {?} */
    CalendarFooterComponent.prototype.isNonEmptyString;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQWEsTUFBTSxvQkFBb0IsQ0FBQztBQUdoRjtJQUFBO1FBVVcsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ3RCLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFN0QsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFLbEIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFOUQsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOztnQkE3QkEsU0FBUyxTQUFDO29CQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGdxREFBNkM7aUJBQzlDOzs7eUJBRUUsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FFTCxLQUFLO3VDQUNMLE1BQU07cUNBRU4sS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQ0FDTCxLQUFLOzBCQUVMLE1BQU07NkJBQ04sTUFBTTs7SUFLVCw4QkFBQztDQUFBLEFBN0JELElBNkJDO1NBckJZLHVCQUF1Qjs7O0lBQ2xDLHlDQUF5Qzs7SUFDekMsNENBQW9DOztJQUNwQyxnREFBd0M7O0lBQ3hDLDBDQUFrQzs7SUFFbEMsaURBQXlDOztJQUN6Qyx1REFBc0U7O0lBRXRFLHFEQUE2Qzs7SUFDN0MsNkNBQXFDOztJQUNyQywrQ0FBNEM7O0lBQzVDLDhDQUFpRDs7SUFDakQscURBQStDOztJQUUvQywwQ0FBc0Q7O0lBQ3RELDZDQUE4RDs7SUFFOUQsNENBQW1DOztJQUNuQyxnREFBOEI7O0lBQzlCLG1EQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNOb25FbXB0eVN0cmluZywgaXNUZW1wbGF0ZVJlZiwgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1mb290ZXInLFxyXG4gIGV4cG9ydEFzOiAnY2FsZW5kYXJGb290ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJGb290ZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgc2hvd1RvZGF5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGFzVGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2hvd1RpbWVQaWNrZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpIHRpbWVQaWNrZXJEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG9rRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcclxuICBASW5wdXQoKSByYW5nZVF1aWNrU2VsZWN0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tUb2RheSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG4gIGlzVGVtcGxhdGVSZWYgPSBpc1RlbXBsYXRlUmVmO1xyXG4gIGlzTm9uRW1wdHlTdHJpbmcgPSBpc05vbkVtcHR5U3RyaW5nO1xyXG59XHJcbiJdfQ==