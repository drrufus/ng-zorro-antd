/**
 * @fileoverview added by tsickle
 * Generated from: nz-result.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
/** @type {?} */
const IconMap = {
    success: 'check-circle',
    error: 'close-circle',
    info: 'exclamation-circle',
    warning: 'warning'
};
/** @type {?} */
const ExceptionStatus = ['404', '500', '403'];
export class NzResultComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     */
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzStatus = 'info';
        this.isException = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setStatusIcon();
        this.setClassMap();
    }
    /**
     * @private
     * @return {?}
     */
    setStatusIcon() {
        /** @type {?} */
        const icon = this.nzIcon;
        this.isException = ExceptionStatus.indexOf(this.nzStatus) !== -1;
        this.icon = icon
            ? typeof icon === 'string'
                ? IconMap[(/** @type {?} */ (icon))] || icon
                : icon
            : this.isException
                ? undefined
                : IconMap[(/** @type {?} */ (this.nzStatus))];
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const prefix = 'ant-result';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [prefix]: true,
            [`${prefix}-${this.nzStatus}`]: true
        });
    }
}
NzResultComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-result',
                exportAs: 'nzResult',
                template: "<!-- Icon -->\r\n<div class=\"ant-result-icon\">\r\n  <ng-container *ngIf=\"!isException; else exceptionTpl\">\r\n    <ng-container *ngIf=\"icon\">\r\n      <ng-container *nzStringTemplateOutlet=\"icon\">\r\n        <i nz-icon [nzType]=\"icon\" nzTheme=\"fill\"></i>\r\n      </ng-container>\r\n    </ng-container>\r\n    <ng-content *ngIf=\"!icon\" select=\"[nz-result-icon]\"></ng-content>\r\n  </ng-container>\r\n\r\n  <ng-template #exceptionTpl>\r\n    <ng-container [ngSwitch]=\"nzStatus\">\r\n      <nz-result-not-found *ngSwitchCase=\"'404'\"></nz-result-not-found>\r\n      <nz-result-server-error *ngSwitchCase=\"'500'\"></nz-result-server-error>\r\n      <nz-result-unauthorized *ngSwitchCase=\"'403'\"></nz-result-unauthorized>\r\n    </ng-container>\r\n  </ng-template>\r\n</div>\r\n\r\n<!-- Title and subTitle -->\r\n<ng-container *ngIf=\"nzTitle\">\r\n  <div class=\"ant-result-title\" *nzStringTemplateOutlet=\"nzTitle\">\r\n    {{ nzTitle }}\r\n  </div>\r\n</ng-container>\r\n<ng-content *ngIf=\"!nzTitle\" select=\"div[nz-result-title]\"></ng-content>\r\n\r\n<ng-container *ngIf=\"nzSubTitle\">\r\n  <div class=\"ant-result-subtitle\" *nzStringTemplateOutlet=\"nzSubTitle\">\r\n    {{ nzSubTitle }}\r\n  </div>\r\n</ng-container>\r\n<ng-content *ngIf=\"!nzSubTitle\" select=\"div[nz-result-subtitle]\"></ng-content>\r\n\r\n<!-- Content -->\r\n<ng-content select=\"nz-result-content, [nz-result-content]\"></ng-content>\r\n\r\n<!-- Extra -->\r\n<div class=\"ant-result-extra\" *ngIf=\"nzExtra\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzExtra\">\r\n    {{ nzExtra }}\r\n  </ng-container>\r\n</div>\r\n<ng-content *ngIf=\"!nzExtra\" select=\"div[nz-result-extra]\"></ng-content>\r\n",
                providers: [NzUpdateHostClassService],
                styles: [`
      nz-result {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzResultComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef }
];
NzResultComponent.propDecorators = {
    nzIcon: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzSubTitle: [{ type: Input }],
    nzExtra: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzResultComponent.prototype.nzIcon;
    /** @type {?} */
    NzResultComponent.prototype.nzTitle;
    /** @type {?} */
    NzResultComponent.prototype.nzStatus;
    /** @type {?} */
    NzResultComponent.prototype.nzSubTitle;
    /** @type {?} */
    NzResultComponent.prototype.nzExtra;
    /** @type {?} */
    NzResultComponent.prototype.icon;
    /** @type {?} */
    NzResultComponent.prototype.isException;
    /**
     * @type {?}
     * @private
     */
    NzResultComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzResultComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFNeEQsT0FBTyxHQUFHO0lBQ2QsT0FBTyxFQUFFLGNBQWM7SUFDdkIsS0FBSyxFQUFFLGNBQWM7SUFDckIsSUFBSSxFQUFFLG9CQUFvQjtJQUMxQixPQUFPLEVBQUUsU0FBUztDQUNuQjs7TUFDSyxlQUFlLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztBQWlCN0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFVNUIsWUFBb0Isd0JBQWtELEVBQVUsVUFBc0I7UUFBbEYsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFQN0YsYUFBUSxHQUF1QixNQUFNLENBQUM7UUFLL0MsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFFcUYsQ0FBQzs7OztJQUUxRyxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLGFBQWE7O2NBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBRXhCLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ2QsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVE7Z0JBQ3hCLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFvQixDQUFDLElBQUksSUFBSTtnQkFDM0MsQ0FBQyxDQUFDLElBQUk7WUFDUixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2xCLENBQUMsQ0FBQyxTQUFTO2dCQUNYLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBb0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRU8sV0FBVzs7Y0FDWCxNQUFNLEdBQUcsWUFBWTtRQUUzQixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQzNFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSTtZQUNkLENBQUMsR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSTtTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixtckRBQXlDO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzt5QkFFbkM7Ozs7S0FJQzthQUVKOzs7O1lBNUJRLHdCQUF3QjtZQU4vQixVQUFVOzs7cUJBb0NULEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUpOLG1DQUE2Qzs7SUFDN0Msb0NBQTZDOztJQUM3QyxxQ0FBK0M7O0lBQy9DLHVDQUFpRDs7SUFDakQsb0NBQThDOztJQUU5QyxpQ0FBa0M7O0lBQ2xDLHdDQUFvQjs7Ozs7SUFFUixxREFBMEQ7Ozs7O0lBQUUsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpSZXN1bHRJY29uVHlwZSA9ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnaW5mbycgfCAnd2FybmluZyc7XHJcbmV4cG9ydCB0eXBlIE56RXhjZXB0aW9uU3RhdHVzVHlwZSA9ICc0MDQnIHwgJzUwMCcgfCAnNDAzJztcclxuZXhwb3J0IHR5cGUgTnpSZXN1bHRTdGF0dXNUeXBlID0gTnpFeGNlcHRpb25TdGF0dXNUeXBlIHwgTnpSZXN1bHRJY29uVHlwZTtcclxuXHJcbmNvbnN0IEljb25NYXAgPSB7XHJcbiAgc3VjY2VzczogJ2NoZWNrLWNpcmNsZScsXHJcbiAgZXJyb3I6ICdjbG9zZS1jaXJjbGUnLFxyXG4gIGluZm86ICdleGNsYW1hdGlvbi1jaXJjbGUnLFxyXG4gIHdhcm5pbmc6ICd3YXJuaW5nJ1xyXG59O1xyXG5jb25zdCBFeGNlcHRpb25TdGF0dXMgPSBbJzQwNCcsICc1MDAnLCAnNDAzJ107XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotcmVzdWx0JyxcclxuICBleHBvcnRBczogJ256UmVzdWx0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmVzdWx0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1yZXN1bHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56SWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56U3RhdHVzOiBOelJlc3VsdFN0YXR1c1R5cGUgPSAnaW5mbyc7XHJcbiAgQElucHV0KCkgbnpTdWJUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56RXh0cmE/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgaWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIGlzRXhjZXB0aW9uID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXR1c0ljb24oKTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3RhdHVzSWNvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGljb24gPSB0aGlzLm56SWNvbjtcclxuXHJcbiAgICB0aGlzLmlzRXhjZXB0aW9uID0gRXhjZXB0aW9uU3RhdHVzLmluZGV4T2YodGhpcy5uelN0YXR1cykgIT09IC0xO1xyXG4gICAgdGhpcy5pY29uID0gaWNvblxyXG4gICAgICA/IHR5cGVvZiBpY29uID09PSAnc3RyaW5nJ1xyXG4gICAgICAgID8gSWNvbk1hcFtpY29uIGFzIE56UmVzdWx0SWNvblR5cGVdIHx8IGljb25cclxuICAgICAgICA6IGljb25cclxuICAgICAgOiB0aGlzLmlzRXhjZXB0aW9uXHJcbiAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgIDogSWNvbk1hcFt0aGlzLm56U3RhdHVzIGFzIE56UmVzdWx0SWNvblR5cGVdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZWZpeCA9ICdhbnQtcmVzdWx0JztcclxuXHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW3ByZWZpeF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXh9LSR7dGhpcy5uelN0YXR1c31gXTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==