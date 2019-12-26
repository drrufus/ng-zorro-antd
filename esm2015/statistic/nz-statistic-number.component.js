/**
 * @fileoverview added by tsickle
 * Generated from: nz-statistic-number.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, LOCALE_ID, TemplateRef, ViewEncapsulation } from '@angular/core';
export class NzStatisticNumberComponent {
    /**
     * @param {?} locale_id
     */
    constructor(locale_id) {
        this.locale_id = locale_id;
        this.displayInt = '';
        this.displayDecimal = '';
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.formatNumber();
    }
    /**
     * @private
     * @return {?}
     */
    formatNumber() {
        /** @type {?} */
        const decimalSeparator = typeof this.nzValue === 'number' ? '.' : getLocaleNumberSymbol(this.locale_id, NumberSymbol.Decimal);
        /** @type {?} */
        const value = String(this.nzValue);
        const [int, decimal] = value.split(decimalSeparator);
        this.displayInt = int;
        this.displayDecimal = decimal ? `${decimalSeparator}${decimal}` : '';
    }
}
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
NzStatisticNumberComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NzStatisticNumberComponent.propDecorators = {
    nzValue: [{ type: Input }],
    nzValueTemplate: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3N0YXRpc3RpYy8iLCJzb3VyY2VzIjpbIm56LXN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBZXZCLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFPckMsWUFBdUMsU0FBaUI7UUFBakIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUh4RCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO0lBRXVDLENBQUM7Ozs7SUFFNUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVPLFlBQVk7O2NBQ1osZ0JBQWdCLEdBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDOztjQUNoRyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Y0FDNUIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztRQUVwRCxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixzY0FBbUQ7Z0JBQ25ELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsNkJBQTZCO2lCQUNyQzt5QkFDUSwrQkFBK0I7YUFDekM7Ozs7eUNBUWMsTUFBTSxTQUFDLFNBQVM7OztzQkFONUIsS0FBSzs4QkFDTCxLQUFLOzs7O0lBRE4sNkNBQXVDOztJQUN2QyxxREFBMkU7O0lBRTNFLGdEQUFnQjs7SUFDaEIsb0RBQW9COzs7OztJQUVSLCtDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sLCBOdW1iZXJTeW1ib2wgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTE9DQUxFX0lELFxyXG4gIE9uQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9IGZyb20gJy4vbnotc3RhdGlzdGljLWRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICduei1zdGF0aXN0aWMtbnVtYmVyJyxcclxuICBleHBvcnRBczogJ256U3RhdGlzdGljTnVtYmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtc3RhdGlzdGljLWNvbnRlbnQtdmFsdWUnXHJcbiAgfSxcclxuICBzdHlsZXM6IFsnbnotbnVtYmVyIHsgZGlzcGxheTogaW5saW5lIH0nXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTdGF0aXN0aWNOdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56VmFsdWU6IE56U3RhdGlzdGljVmFsdWVUeXBlO1xyXG4gIEBJbnB1dCgpIG56VmFsdWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56U3RhdGlzdGljVmFsdWVUeXBlIH0+O1xyXG5cclxuICBkaXNwbGF5SW50ID0gJyc7XHJcbiAgZGlzcGxheURlY2ltYWwgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlX2lkOiBzdHJpbmcpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JtYXROdW1iZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0TnVtYmVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGVjaW1hbFNlcGFyYXRvcjogc3RyaW5nID1cclxuICAgICAgdHlwZW9mIHRoaXMubnpWYWx1ZSA9PT0gJ251bWJlcicgPyAnLicgOiBnZXRMb2NhbGVOdW1iZXJTeW1ib2wodGhpcy5sb2NhbGVfaWQsIE51bWJlclN5bWJvbC5EZWNpbWFsKTtcclxuICAgIGNvbnN0IHZhbHVlID0gU3RyaW5nKHRoaXMubnpWYWx1ZSk7XHJcbiAgICBjb25zdCBbaW50LCBkZWNpbWFsXSA9IHZhbHVlLnNwbGl0KGRlY2ltYWxTZXBhcmF0b3IpO1xyXG5cclxuICAgIHRoaXMuZGlzcGxheUludCA9IGludDtcclxuICAgIHRoaXMuZGlzcGxheURlY2ltYWwgPSBkZWNpbWFsID8gYCR7ZGVjaW1hbFNlcGFyYXRvcn0ke2RlY2ltYWx9YCA6ICcnO1xyXG4gIH1cclxufVxyXG4iXX0=