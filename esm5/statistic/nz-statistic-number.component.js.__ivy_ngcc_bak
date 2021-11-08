/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, LOCALE_ID, TemplateRef, ViewEncapsulation } from '@angular/core';
var NzStatisticNumberComponent = /** @class */ (function () {
    function NzStatisticNumberComponent(locale_id) {
        this.locale_id = locale_id;
        this.displayInt = '';
        this.displayDecimal = '';
    }
    /**
     * @return {?}
     */
    NzStatisticNumberComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.formatNumber();
    };
    /**
     * @private
     * @return {?}
     */
    NzStatisticNumberComponent.prototype.formatNumber = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var decimalSeparator = typeof this.nzValue === 'number' ? '.' : getLocaleNumberSymbol(this.locale_id, NumberSymbol.Decimal);
        /** @type {?} */
        var value = String(this.nzValue);
        var _a = tslib_1.__read(value.split(decimalSeparator), 2), int = _a[0], decimal = _a[1];
        this.displayInt = int;
        this.displayDecimal = decimal ? "" + decimalSeparator + decimal : '';
    };
    NzStatisticNumberComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-statistic-number',
                    exportAs: 'nzStatisticNumber',
                    template: "<ng-container\r\n  *ngIf=\"nzValueTemplate\"\r\n  [ngTemplateOutlet]=\"nzValueTemplate\"\r\n  [ngTemplateOutletContext]=\"{ $implicit: nzValue }\">\r\n</ng-container>\r\n<ng-container *ngIf=\"!nzValueTemplate\">\r\n  <span *ngIf=\"displayInt\" class=\"ant-statistic-content-value-int\">{{ displayInt }}</span>\r\n  <span *ngIf=\"displayDecimal\" class=\"ant-statistic-content-value-decimal\">{{ displayDecimal }}</span>\r\n</ng-container>\r\n",
                    host: {
                        class: 'ant-statistic-content-value'
                    },
                    styles: ['nz-number { display: inline }']
                }] }
    ];
    /** @nocollapse */
    NzStatisticNumberComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NzStatisticNumberComponent.propDecorators = {
        nzValue: [{ type: Input }],
        nzValueTemplate: [{ type: Input }]
    };
    return NzStatisticNumberComponent;
}());
export { NzStatisticNumberComponent };
if (false) {
    /** @type {?} */
    NzStatisticNumberComponent.prototype.nzValue;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.nzValueTemplate;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.displayInt;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.displayDecimal;
    /**
     * @type {?}
     * @private
     */
    NzStatisticNumberComponent.prototype.locale_id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3N0YXRpc3RpYy8iLCJzb3VyY2VzIjpbIm56LXN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBbUJFLG9DQUF1QyxTQUFpQjtRQUFqQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBSHhELGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFFdUMsQ0FBQzs7OztJQUU1RCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFTyxpREFBWTs7OztJQUFwQjs7WUFDUSxnQkFBZ0IsR0FDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUM7O1lBQ2hHLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFBLHFEQUE4QyxFQUE3QyxXQUFHLEVBQUUsZUFBd0M7UUFFcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUcsZ0JBQWdCLEdBQUcsT0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkUsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHNjQUFtRDtvQkFDbkQsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSw2QkFBNkI7cUJBQ3JDOzZCQUNRLCtCQUErQjtpQkFDekM7Ozs7NkNBUWMsTUFBTSxTQUFDLFNBQVM7OzswQkFONUIsS0FBSztrQ0FDTCxLQUFLOztJQW9CUixpQ0FBQztDQUFBLEFBbENELElBa0NDO1NBdEJZLDBCQUEwQjs7O0lBQ3JDLDZDQUF1Qzs7SUFDdkMscURBQTJFOztJQUUzRSxnREFBZ0I7O0lBQ2hCLG9EQUFvQjs7Ozs7SUFFUiwrQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGdldExvY2FsZU51bWJlclN5bWJvbCwgTnVtYmVyU3ltYm9sIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIExPQ0FMRV9JRCxcclxuICBPbkNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpTdGF0aXN0aWNWYWx1ZVR5cGUgfSBmcm9tICcuL256LXN0YXRpc3RpYy1kZWZpbml0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yOiAnbnotc3RhdGlzdGljLW51bWJlcicsXHJcbiAgZXhwb3J0QXM6ICduelN0YXRpc3RpY051bWJlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LXN0YXRpc3RpYy1jb250ZW50LXZhbHVlJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbJ256LW51bWJlciB7IGRpc3BsYXk6IGlubGluZSB9J11cclxufSlcclxuZXhwb3J0IGNsYXNzIE56U3RhdGlzdGljTnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuelZhbHVlOiBOelN0YXRpc3RpY1ZhbHVlVHlwZTtcclxuICBASW5wdXQoKSBuelZhbHVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9PjtcclxuXHJcbiAgZGlzcGxheUludCA9ICcnO1xyXG4gIGRpc3BsYXlEZWNpbWFsID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZV9pZDogc3RyaW5nKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9ybWF0TnVtYmVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdE51bWJlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRlY2ltYWxTZXBhcmF0b3I6IHN0cmluZyA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLm56VmFsdWUgPT09ICdudW1iZXInID8gJy4nIDogZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKHRoaXMubG9jYWxlX2lkLCBOdW1iZXJTeW1ib2wuRGVjaW1hbCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IFN0cmluZyh0aGlzLm56VmFsdWUpO1xyXG4gICAgY29uc3QgW2ludCwgZGVjaW1hbF0gPSB2YWx1ZS5zcGxpdChkZWNpbWFsU2VwYXJhdG9yKTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXlJbnQgPSBpbnQ7XHJcbiAgICB0aGlzLmRpc3BsYXlEZWNpbWFsID0gZGVjaW1hbCA/IGAke2RlY2ltYWxTZXBhcmF0b3J9JHtkZWNpbWFsfWAgOiAnJztcclxuICB9XHJcbn1cclxuIl19