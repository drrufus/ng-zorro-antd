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
var CalendarInputComponent = /** @class */ (function () {
    function CalendarInputComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.invalidInputClass = '';
    }
    /**
     * @return {?}
     */
    CalendarInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autoFocus) {
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.inputRef.nativeElement.focus(); }));
        }
    };
    /**
     * @param {?} event
     * @param {?=} isEnter
     * @return {?}
     */
    CalendarInputComponent.prototype.onInputKeyup = /**
     * @param {?} event
     * @param {?=} isEnter
     * @return {?}
     */
    function (event, isEnter) {
        if (isEnter === void 0) { isEnter = false; }
        /** @type {?} */
        var date = this.checkValidInputDate(event);
        if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
            return;
        }
        this.value = date;
        this.valueChange.emit({ date: date, isEnter: isEnter });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarInputComponent.prototype.toReadableInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value ? this.dateHelper.format(value.nativeDate, this.format) : '';
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    CalendarInputComponent.prototype.checkValidInputDate = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var input = ((/** @type {?} */ (event.target))).value;
        /** @type {?} */
        var date = new CandyDate(input);
        this.invalidInputClass = '';
        if (!date.isValid() || input !== this.toReadableInput(date)) {
            // Should also match the input format exactly
            this.invalidInputClass = this.prefixCls + "-input-invalid";
            return null;
        }
        return date;
    };
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
    CalendarInputComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
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
    return CalendarInputComponent;
}());
export { CalendarInputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRjtJQXVCRSxnQ0FBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFMOUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBeUMsQ0FBQztRQUUzRixjQUFTLEdBQVcsY0FBYyxDQUFDO1FBQ25DLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztJQUVxQixDQUFDOzs7O0lBRXJELHlDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFVBQVU7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBbkMsQ0FBbUMsRUFBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsNkNBQVk7Ozs7O0lBQVosVUFBYSxLQUFvQixFQUFFLE9BQXdCO1FBQXhCLHdCQUFBLEVBQUEsZUFBd0I7O1lBQ25ELElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1FBRTVDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7WUFDdEUsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxnREFBZTs7OztJQUFmLFVBQWdCLEtBQWdCO1FBQzlCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVFLENBQUM7Ozs7OztJQUVPLG9EQUFtQjs7Ozs7SUFBM0IsVUFBNEIsS0FBWTs7WUFDaEMsS0FBSyxHQUFHLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBb0IsQ0FBQyxDQUFDLEtBQUs7O1lBQ2hELElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNELDZDQUE2QztZQUM3QyxJQUFJLENBQUMsaUJBQWlCLEdBQU0sSUFBSSxDQUFDLFNBQVMsbUJBQWdCLENBQUM7WUFDM0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBMURGLFNBQVMsU0FBQztvQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O29CQUUvQyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsbWlCQUE0QztpQkFDN0M7Ozs7Z0JBVFEsaUJBQWlCOzs7eUJBV3ZCLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7d0JBRUwsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzhCQUUxQyxNQUFNOztJQXlDVCw2QkFBQztDQUFBLEFBM0RELElBMkRDO1NBbkRZLHNCQUFzQjs7O0lBQ2pDLHdDQUF5Qzs7SUFDekMsd0NBQXdCOztJQUN4Qiw2Q0FBNkI7O0lBQzdCLDhDQUE0Qzs7SUFFNUMsdUNBQTBCOztJQUMxQiwyQ0FBNEI7O0lBQzVCLDBDQUFrRTs7SUFFbEUsNkNBQTJGOztJQUUzRiwyQ0FBbUM7O0lBQ25DLG1EQUErQjs7Ozs7SUFFbkIsNENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItaW5wdXQnLFxyXG4gIGV4cG9ydEFzOiAnY2FsZW5kYXJJbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdjYWxlbmRhci1pbnB1dC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFySW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gIEBJbnB1dCgpIGF1dG9Gb2N1czogYm9vbGVhbjtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dFJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGU6IENhbmR5RGF0ZTsgaXNFbnRlcjogYm9vbGVhbiB9PigpO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG4gIGludmFsaWRJbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbklucHV0S2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGlzRW50ZXI6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuY2hlY2tWYWxpZElucHV0RGF0ZShldmVudCk7XHJcblxyXG4gICAgaWYgKCFkYXRlIHx8ICh0aGlzLmRpc2FibGVkRGF0ZSAmJiB0aGlzLmRpc2FibGVkRGF0ZShkYXRlLm5hdGl2ZURhdGUpKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52YWx1ZSA9IGRhdGU7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoeyBkYXRlLCBpc0VudGVyIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9SZWFkYWJsZUlucHV0KHZhbHVlOiBDYW5keURhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHZhbHVlID8gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh2YWx1ZS5uYXRpdmVEYXRlLCB0aGlzLmZvcm1hdCkgOiAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tWYWxpZElucHV0RGF0ZShldmVudDogRXZlbnQpOiBDYW5keURhdGUgfCBudWxsIHtcclxuICAgIGNvbnN0IGlucHV0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgQ2FuZHlEYXRlKGlucHV0KTtcclxuXHJcbiAgICB0aGlzLmludmFsaWRJbnB1dENsYXNzID0gJyc7XHJcbiAgICBpZiAoIWRhdGUuaXNWYWxpZCgpIHx8IGlucHV0ICE9PSB0aGlzLnRvUmVhZGFibGVJbnB1dChkYXRlKSkge1xyXG4gICAgICAvLyBTaG91bGQgYWxzbyBtYXRjaCB0aGUgaW5wdXQgZm9ybWF0IGV4YWN0bHlcclxuICAgICAgdGhpcy5pbnZhbGlkSW5wdXRDbGFzcyA9IGAke3RoaXMucHJlZml4Q2xzfS1pbnB1dC1pbnZhbGlkYDtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==