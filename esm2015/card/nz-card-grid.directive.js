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
export class NzCardGridDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.nzHoverable = true;
        renderer.addClass(elementRef.nativeElement, 'ant-card-grid');
    }
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
NzCardGridDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzCardGridDirective.propDecorators = {
    nzHoverable: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCardGridDirective.prototype, "nzHoverable", void 0);
if (false) {
    /** @type {?} */
    NzCardGridDirective.prototype.nzHoverable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC1ncmlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FyZC8iLCJzb3VyY2VzIjpbIm56LWNhcmQtZ3JpZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFTbEQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFFOUIsWUFBWSxVQUFzQixFQUFFLFFBQW1CO1FBRDlCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRW5ELFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLElBQUksRUFBRTtvQkFDSiw0QkFBNEIsRUFBRSxhQUFhO2lCQUM1QzthQUNGOzs7O1lBVG1CLFVBQVU7WUFBUyxTQUFTOzs7MEJBVzdDLEtBQUs7O0FBQW1CO0lBQWYsWUFBWSxFQUFFOzt3REFBNkI7OztJQUFyRCwwQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotY2FyZC1ncmlkXScsXHJcbiAgZXhwb3J0QXM6ICduekNhcmRHcmlkJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWhvdmVyYWJsZV0nOiAnbnpIb3ZlcmFibGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXJkR3JpZERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SG92ZXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FyZC1ncmlkJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==