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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQU14RCxPQUFPLEdBQUc7SUFDZCxPQUFPLEVBQUUsY0FBYztJQUN2QixLQUFLLEVBQUUsY0FBYztJQUNyQixJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLE9BQU8sRUFBRSxTQUFTO0NBQ25COztJQUNLLGVBQWUsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0FBRTdDO0lBeUJFLDJCQUFvQix3QkFBa0QsRUFBVSxVQUFzQjtRQUFsRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVA3RixhQUFRLEdBQXVCLE1BQU0sQ0FBQztRQUsvQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUVxRixDQUFDOzs7O0lBRTFHLHVDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTyx5Q0FBYTs7OztJQUFyQjs7WUFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFFeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7WUFDZCxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUTtnQkFDeEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW9CLENBQUMsSUFBSSxJQUFJO2dCQUMzQyxDQUFDLENBQUMsSUFBSTtZQUNSLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDbEIsQ0FBQyxDQUFDLFNBQVM7Z0JBQ1gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxFQUFvQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFTyx1Q0FBVzs7OztJQUFuQjs7O1lBQ1EsTUFBTSxHQUFHLFlBQVk7UUFFM0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDekUsR0FBQyxNQUFNLElBQUcsSUFBSTtZQUNkLEdBQUksTUFBTSxTQUFJLElBQUksQ0FBQyxRQUFVLElBQUcsSUFBSTtnQkFDcEMsQ0FBQztJQUNMLENBQUM7O2dCQXBERixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLG1yREFBeUM7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDOzZCQUVuQyw2REFJQztpQkFFSjs7OztnQkE1QlEsd0JBQXdCO2dCQU4vQixVQUFVOzs7eUJBb0NULEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUFpQ1Isd0JBQUM7Q0FBQSxBQXJERCxJQXFEQztTQXRDWSxpQkFBaUI7OztJQUM1QixtQ0FBNkM7O0lBQzdDLG9DQUE2Qzs7SUFDN0MscUNBQStDOztJQUMvQyx1Q0FBaUQ7O0lBQ2pELG9DQUE4Qzs7SUFFOUMsaUNBQWtDOztJQUNsQyx3Q0FBb0I7Ozs7O0lBRVIscURBQTBEOzs7OztJQUFFLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIE56UmVzdWx0SWNvblR5cGUgPSAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ2luZm8nIHwgJ3dhcm5pbmcnO1xyXG5leHBvcnQgdHlwZSBOekV4Y2VwdGlvblN0YXR1c1R5cGUgPSAnNDA0JyB8ICc1MDAnIHwgJzQwMyc7XHJcbmV4cG9ydCB0eXBlIE56UmVzdWx0U3RhdHVzVHlwZSA9IE56RXhjZXB0aW9uU3RhdHVzVHlwZSB8IE56UmVzdWx0SWNvblR5cGU7XHJcblxyXG5jb25zdCBJY29uTWFwID0ge1xyXG4gIHN1Y2Nlc3M6ICdjaGVjay1jaXJjbGUnLFxyXG4gIGVycm9yOiAnY2xvc2UtY2lyY2xlJyxcclxuICBpbmZvOiAnZXhjbGFtYXRpb24tY2lyY2xlJyxcclxuICB3YXJuaW5nOiAnd2FybmluZydcclxufTtcclxuY29uc3QgRXhjZXB0aW9uU3RhdHVzID0gWyc0MDQnLCAnNTAwJywgJzQwMyddO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LXJlc3VsdCcsXHJcbiAgZXhwb3J0QXM6ICduelJlc3VsdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXJlc3VsdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotcmVzdWx0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmVzdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuekljb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelN0YXR1czogTnpSZXN1bHRTdGF0dXNUeXBlID0gJ2luZm8nO1xyXG4gIEBJbnB1dCgpIG56U3ViVGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekV4dHJhPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIGljb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBpc0V4Y2VwdGlvbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0dXNJY29uKCk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0YXR1c0ljb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBpY29uID0gdGhpcy5uekljb247XHJcblxyXG4gICAgdGhpcy5pc0V4Y2VwdGlvbiA9IEV4Y2VwdGlvblN0YXR1cy5pbmRleE9mKHRoaXMubnpTdGF0dXMpICE9PSAtMTtcclxuICAgIHRoaXMuaWNvbiA9IGljb25cclxuICAgICAgPyB0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZydcclxuICAgICAgICA/IEljb25NYXBbaWNvbiBhcyBOelJlc3VsdEljb25UeXBlXSB8fCBpY29uXHJcbiAgICAgICAgOiBpY29uXHJcbiAgICAgIDogdGhpcy5pc0V4Y2VwdGlvblxyXG4gICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICA6IEljb25NYXBbdGhpcy5uelN0YXR1cyBhcyBOelJlc3VsdEljb25UeXBlXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcmVmaXggPSAnYW50LXJlc3VsdCc7XHJcblxyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtwcmVmaXhdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4fS0ke3RoaXMubnpTdGF0dXN9YF06IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=