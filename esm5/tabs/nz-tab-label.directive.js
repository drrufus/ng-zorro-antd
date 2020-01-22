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
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
var NzTabLabelDirective = /** @class */ (function () {
    function NzTabLabelDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-tab');
    }
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetLeft = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetLeft;
    };
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetWidth = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetWidth;
    };
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetTop = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetTop;
    };
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetHeight = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetHeight;
    };
    NzTabLabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-tab-label]',
                    exportAs: 'nzTabLabel',
                    host: {
                        '[class.ant-tabs-tab-disabled]': 'disabled'
                    }
                },] }
    ];
    /** @nocollapse */
    NzTabLabelDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzTabLabelDirective.propDecorators = {
        disabled: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabLabelDirective.prototype, "disabled", void 0);
    return NzTabLabelDirective;
}());
export { NzTabLabelDirective };
if (false) {
    /** @type {?} */
    NzTabLabelDirective.prototype.disabled;
    /** @type {?} */
    NzTabLabelDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWxhYmVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFicy8iLCJzb3VyY2VzIjpbIm56LXRhYi1sYWJlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQ7SUFVRSw2QkFBbUIsVUFBc0IsRUFBRSxRQUFtQjtRQUEzQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRmhCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHeEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUFFRCwyQ0FBYTs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsNENBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELDBDQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUNwRCxDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixJQUFJLEVBQUU7d0JBQ0osK0JBQStCLEVBQUUsVUFBVTtxQkFDNUM7aUJBQ0Y7Ozs7Z0JBVm1CLFVBQVU7Z0JBQVMsU0FBUzs7OzJCQVk3QyxLQUFLOztJQUFtQjtRQUFmLFlBQVksRUFBRTs7eURBQWtCO0lBcUI1QywwQkFBQztDQUFBLEFBN0JELElBNkJDO1NBdEJZLG1CQUFtQjs7O0lBQzlCLHVDQUEwQzs7SUFFOUIseUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei10YWItbGFiZWxdJyxcclxuICBleHBvcnRBczogJ256VGFiTGFiZWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRhYnMtdGFiLWRpc2FibGVkXSc6ICdkaXNhYmxlZCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhYkxhYmVsRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJzLXRhYicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2Zmc2V0TGVmdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7XHJcbiAgfVxyXG5cclxuICBnZXRPZmZzZXRXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2Zmc2V0VG9wKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2Zmc2V0SGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gIH1cclxufVxyXG4iXX0=