/**
 * @fileoverview added by tsickle
 * Generated from: nz-card-grid.directive.ts
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
var NzCardGridDirective = /** @class */ (function () {
    function NzCardGridDirective(elementRef, renderer) {
        this.nzHoverable = true;
        renderer.addClass(elementRef.nativeElement, 'ant-card-grid');
    }
    NzCardGridDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-card-grid]',
                    exportAs: 'nzCardGrid',
                    host: {
                        '[class.ant-card-hoverable]': 'nzHoverable'
                    }
                },] }
    ];
    /** @nocollapse */
    NzCardGridDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCardGridDirective.propDecorators = {
        nzHoverable: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCardGridDirective.prototype, "nzHoverable", void 0);
    return NzCardGridDirective;
}());
export { NzCardGridDirective };
if (false) {
    /** @type {?} */
    NzCardGridDirective.prototype.nzHoverable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC1ncmlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FyZC8iLCJzb3VyY2VzIjpbIm56LWNhcmQtZ3JpZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxEO0lBU0UsNkJBQVksVUFBc0IsRUFBRSxRQUFtQjtRQUQ5QixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUVuRCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixJQUFJLEVBQUU7d0JBQ0osNEJBQTRCLEVBQUUsYUFBYTtxQkFDNUM7aUJBQ0Y7Ozs7Z0JBVG1CLFVBQVU7Z0JBQVMsU0FBUzs7OzhCQVc3QyxLQUFLOztJQUFtQjtRQUFmLFlBQVksRUFBRTs7NERBQTZCO0lBSXZELDBCQUFDO0NBQUEsQUFaRCxJQVlDO1NBTFksbUJBQW1COzs7SUFDOUIsMENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LWNhcmQtZ3JpZF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpDYXJkR3JpZCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGVdJzogJ256SG92ZXJhYmxlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FyZEdyaWREaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekhvdmVyYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhcmQtZ3JpZCcpO1xyXG4gIH1cclxufVxyXG4iXX0=