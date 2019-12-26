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
var IconMap = {
    success: 'check-circle',
    error: 'close-circle',
    info: 'exclamation-circle',
    warning: 'warning'
};
/** @type {?} */
var ExceptionStatus = ['404', '500', '403'];
var NzResultComponent = /** @class */ (function () {
    function NzResultComponent(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzStatus = 'info';
        this.isException = false;
    }
    /**
     * @return {?}
     */
    NzResultComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setStatusIcon();
        this.setClassMap();
    };
    /**
     * @private
     * @return {?}
     */
    NzResultComponent.prototype.setStatusIcon = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var icon = this.nzIcon;
        this.isException = ExceptionStatus.indexOf(this.nzStatus) !== -1;
        this.icon = icon
            ? typeof icon === 'string'
                ? IconMap[(/** @type {?} */ (icon))] || icon
                : icon
            : this.isException
                ? undefined
                : IconMap[(/** @type {?} */ (this.nzStatus))];
    };
    /**
     * @private
     * @return {?}
     */
    NzResultComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefix = 'ant-result';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a[prefix] = true,
            _a[prefix + "-" + this.nzStatus] = true,
            _a));
    };
    NzResultComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-result',
                    exportAs: 'nzResult',
                    template: "<!-- Icon -->\r\n<div class=\"ant-result-icon\">\r\n  <ng-container *ngIf=\"!isException; else exceptionTpl\">\r\n    <ng-container *ngIf=\"icon\">\r\n      <ng-container *nzStringTemplateOutlet=\"icon\">\r\n        <i nz-icon [nzType]=\"icon\" nzTheme=\"fill\"></i>\r\n      </ng-container>\r\n    </ng-container>\r\n    <ng-content *ngIf=\"!icon\" select=\"[nz-result-icon]\"></ng-content>\r\n  </ng-container>\r\n\r\n  <ng-template #exceptionTpl>\r\n    <ng-container [ngSwitch]=\"nzStatus\">\r\n      <nz-result-not-found *ngSwitchCase=\"'404'\"></nz-result-not-found>\r\n      <nz-result-server-error *ngSwitchCase=\"'500'\"></nz-result-server-error>\r\n      <nz-result-unauthorized *ngSwitchCase=\"'403'\"></nz-result-unauthorized>\r\n    </ng-container>\r\n  </ng-template>\r\n</div>\r\n\r\n<!-- Title and subTitle -->\r\n<ng-container *ngIf=\"nzTitle\">\r\n  <div class=\"ant-result-title\" *nzStringTemplateOutlet=\"nzTitle\">\r\n    {{ nzTitle }}\r\n  </div>\r\n</ng-container>\r\n<ng-content *ngIf=\"!nzTitle\" select=\"div[nz-result-title]\"></ng-content>\r\n\r\n<ng-container *ngIf=\"nzSubTitle\">\r\n  <div class=\"ant-result-subtitle\" *nzStringTemplateOutlet=\"nzSubTitle\">\r\n    {{ nzSubTitle }}\r\n  </div>\r\n</ng-container>\r\n<ng-content *ngIf=\"!nzSubTitle\" select=\"div[nz-result-subtitle]\"></ng-content>\r\n\r\n<!-- Content -->\r\n<ng-content select=\"nz-result-content, [nz-result-content]\"></ng-content>\r\n\r\n<!-- Extra -->\r\n<div class=\"ant-result-extra\" *ngIf=\"nzExtra\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzExtra\">\r\n    {{ nzExtra }}\r\n  </ng-container>\r\n</div>\r\n<ng-content *ngIf=\"!nzExtra\" select=\"div[nz-result-extra]\"></ng-content>\r\n",
                    providers: [NzUpdateHostClassService],
                    styles: ["\n      nz-result {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzResultComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef }
    ]; };
    NzResultComponent.propDecorators = {
        nzIcon: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzSubTitle: [{ type: Input }],
        nzExtra: [{ type: Input }]
    };
    return NzResultComponent;
}());
export { NzResultComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFNeEQsT0FBTyxHQUFHO0lBQ2QsT0FBTyxFQUFFLGNBQWM7SUFDdkIsS0FBSyxFQUFFLGNBQWM7SUFDckIsSUFBSSxFQUFFLG9CQUFvQjtJQUMxQixPQUFPLEVBQUUsU0FBUztDQUNuQjs7SUFDSyxlQUFlLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztBQUU3QztJQXlCRSwyQkFBb0Isd0JBQWtELEVBQVUsVUFBc0I7UUFBbEYsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFQN0YsYUFBUSxHQUF1QixNQUFNLENBQUM7UUFLL0MsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFFcUYsQ0FBQzs7OztJQUUxRyx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8seUNBQWE7Ozs7SUFBckI7O1lBQ1EsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBRXhCLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ2QsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVE7Z0JBQ3hCLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFvQixDQUFDLElBQUksSUFBSTtnQkFDM0MsQ0FBQyxDQUFDLElBQUk7WUFDUixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2xCLENBQUMsQ0FBQyxTQUFTO2dCQUNYLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBb0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRU8sdUNBQVc7Ozs7SUFBbkI7OztZQUNRLE1BQU0sR0FBRyxZQUFZO1FBRTNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO1lBQ3pFLEdBQUMsTUFBTSxJQUFHLElBQUk7WUFDZCxHQUFJLE1BQU0sU0FBSSxJQUFJLENBQUMsUUFBVSxJQUFHLElBQUk7Z0JBQ3BDLENBQUM7SUFDTCxDQUFDOztnQkFwREYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxVQUFVO29CQUNwQixtckRBQXlDO29CQUN6QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzs2QkFFbkMsNkRBSUM7aUJBRUo7Ozs7Z0JBNUJRLHdCQUF3QjtnQkFOL0IsVUFBVTs7O3lCQW9DVCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7O0lBaUNSLHdCQUFDO0NBQUEsQUFyREQsSUFxREM7U0F0Q1ksaUJBQWlCOzs7SUFDNUIsbUNBQTZDOztJQUM3QyxvQ0FBNkM7O0lBQzdDLHFDQUErQzs7SUFDL0MsdUNBQWlEOztJQUNqRCxvQ0FBOEM7O0lBRTlDLGlDQUFrQzs7SUFDbEMsd0NBQW9COzs7OztJQUVSLHFEQUEwRDs7Ozs7SUFBRSx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBOelJlc3VsdEljb25UeXBlID0gJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICdpbmZvJyB8ICd3YXJuaW5nJztcclxuZXhwb3J0IHR5cGUgTnpFeGNlcHRpb25TdGF0dXNUeXBlID0gJzQwNCcgfCAnNTAwJyB8ICc0MDMnO1xyXG5leHBvcnQgdHlwZSBOelJlc3VsdFN0YXR1c1R5cGUgPSBOekV4Y2VwdGlvblN0YXR1c1R5cGUgfCBOelJlc3VsdEljb25UeXBlO1xyXG5cclxuY29uc3QgSWNvbk1hcCA9IHtcclxuICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlJyxcclxuICBlcnJvcjogJ2Nsb3NlLWNpcmNsZScsXHJcbiAgaW5mbzogJ2V4Y2xhbWF0aW9uLWNpcmNsZScsXHJcbiAgd2FybmluZzogJ3dhcm5pbmcnXHJcbn07XHJcbmNvbnN0IEV4Y2VwdGlvblN0YXR1cyA9IFsnNDA0JywgJzUwMCcsICc0MDMnXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1yZXN1bHQnLFxyXG4gIGV4cG9ydEFzOiAnbnpSZXN1bHQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LXJlc3VsdCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbnpJY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56UmVzdWx0U3RhdHVzVHlwZSA9ICdpbmZvJztcclxuICBASW5wdXQoKSBuelN1YlRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpFeHRyYT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBpY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgaXNFeGNlcHRpb24gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdHVzSWNvbigpO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdGF0dXNJY29uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaWNvbiA9IHRoaXMubnpJY29uO1xyXG5cclxuICAgIHRoaXMuaXNFeGNlcHRpb24gPSBFeGNlcHRpb25TdGF0dXMuaW5kZXhPZih0aGlzLm56U3RhdHVzKSAhPT0gLTE7XHJcbiAgICB0aGlzLmljb24gPSBpY29uXHJcbiAgICAgID8gdHlwZW9mIGljb24gPT09ICdzdHJpbmcnXHJcbiAgICAgICAgPyBJY29uTWFwW2ljb24gYXMgTnpSZXN1bHRJY29uVHlwZV0gfHwgaWNvblxyXG4gICAgICAgIDogaWNvblxyXG4gICAgICA6IHRoaXMuaXNFeGNlcHRpb25cclxuICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgOiBJY29uTWFwW3RoaXMubnpTdGF0dXMgYXMgTnpSZXN1bHRJY29uVHlwZV07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4ID0gJ2FudC1yZXN1bHQnO1xyXG5cclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbcHJlZml4XTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeH0tJHt0aGlzLm56U3RhdHVzfWBdOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19