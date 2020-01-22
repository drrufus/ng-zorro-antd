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
var NzButtonGroupComponent = /** @class */ (function () {
    function NzButtonGroupComponent(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.isInDropdown = false;
    }
    Object.defineProperty(NzButtonGroupComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzButtonGroupComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixCls = 'ant-btn-group';
        /** @type {?} */
        var classMap = (_a = {},
            _a[prefixCls] = true,
            _a["ant-dropdown-button"] = this.isInDropdown,
            _a[prefixCls + "-lg"] = this.nzSize === 'large',
            _a[prefixCls + "-sm"] = this.nzSize === 'small',
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    };
    /**
     * @return {?}
     */
    NzButtonGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    NzButtonGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-button-group',
                    exportAs: 'nzButtonGroup',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-content></ng-content>\r\n"
                }] }
    ];
    /** @nocollapse */
    NzButtonGroupComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef }
    ]; };
    NzButtonGroupComponent.propDecorators = {
        nzSize: [{ type: Input }]
    };
    return NzButtonGroupComponent;
}());
export { NzButtonGroupComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzButtonGroupComponent.prototype._size;
    /** @type {?} */
    NzButtonGroupComponent.prototype.isInDropdown;
    /**
     * @type {?}
     * @private
     */
    NzButtonGroupComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzButtonGroupComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYnV0dG9uLyIsInNvdXJjZXMiOlsibnotYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQWlCLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0U7SUF1QkUsZ0NBQW9CLHdCQUFrRCxFQUFVLFVBQXNCO1FBQWxGLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBWnRHLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBWW9GLENBQUM7SUFWMUcsc0JBQ0ksMENBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQUVELFVBQVcsS0FBb0I7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7OztPQUxBOzs7O0lBU0QsNENBQVc7OztJQUFYOzs7WUFDUSxTQUFTLEdBQUcsZUFBZTs7WUFDM0IsUUFBUTtZQUNaLEdBQUMsU0FBUyxJQUFHLElBQUk7WUFDakIsR0FBQyxxQkFBcUIsSUFBRyxJQUFJLENBQUMsWUFBWTtZQUMxQyxHQUFJLFNBQVMsUUFBSyxJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTztZQUM1QyxHQUFJLFNBQVMsUUFBSyxJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTztlQUM3QztRQUNELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUNyQyx5Q0FBK0M7aUJBQ2hEOzs7O2dCQVZ1Qix3QkFBd0I7Z0JBREgsVUFBVTs7O3lCQWdCcEQsS0FBSzs7SUEwQlIsNkJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQTlCWSxzQkFBc0I7Ozs7OztJQUNqQyx1Q0FBNkI7O0lBQzdCLDhDQUFxQjs7Ozs7SUFZVCwwREFBMEQ7Ozs7O0lBQUUsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1idXR0b24tZ3JvdXAnLFxyXG4gIGV4cG9ydEFzOiAnbnpCdXR0b25Hcm91cCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekJ1dHRvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIF9zaXplOiBOelNpemVMRFNUeXBlO1xyXG4gIGlzSW5Ecm9wZG93biA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBuelNpemUoKTogTnpTaXplTERTVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIHNldCBuelNpemUodmFsdWU6IE56U2l6ZUxEU1R5cGUpIHtcclxuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcmVmaXhDbHMgPSAnYW50LWJ0bi1ncm91cCc7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3ByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFtgYW50LWRyb3Bkb3duLWJ1dHRvbmBdOiB0aGlzLmlzSW5Ecm9wZG93bixcclxuICAgICAgW2Ake3ByZWZpeENsc30tbGdgXTogdGhpcy5uelNpemUgPT09ICdsYXJnZScsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LXNtYF06IHRoaXMubnpTaXplID09PSAnc21hbGwnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcbn1cclxuIl19