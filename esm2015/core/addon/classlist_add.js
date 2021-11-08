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
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NzClassListAddDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classList = [];
    }
    /**
     * @param {?} list
     * @return {?}
     */
    set nzClassListAdd(list) {
        this.classList.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.renderer.removeClass(this.elementRef.nativeElement, name);
        }));
        list.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.renderer.addClass(this.elementRef.nativeElement, name);
        }));
        this.classList = list;
    }
}
NzClassListAddDirective.ɵfac = function NzClassListAddDirective_Factory(t) { return new (t || NzClassListAddDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzClassListAddDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzClassListAddDirective, selectors: [["", "nzClassListAdd", ""]], inputs: { nzClassListAdd: "nzClassListAdd" }, exportAs: ["nzClassListAdd"] });
/** @nocollapse */
NzClassListAddDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzClassListAddDirective.propDecorators = {
    nzClassListAdd: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzClassListAddDirective, [{
        type: Directive,
        args: [{
                selector: '[nzClassListAdd]',
                exportAs: 'nzClassListAdd'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzClassListAdd: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    NzClassListAddDirective.prototype.classList;
    /**
     * @type {?}
     * @private
     */
    NzClassListAddDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzClassListAddDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NsaXN0X2FkZC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvY29yZS9hZGRvbi9jbGFzc2xpc3RfYWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNeEUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFjbEMsWUFBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWJ2RSxjQUFTLEdBQWEsRUFBRSxDQUFDO0lBYWlELENBQUM7Ozs7O0lBWDNFLElBQ0ksY0FBYyxDQUFDLElBQWM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7O0NBRUgsb0RBbEJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsa0JBQWtCLGtCQUM1QixRQUFRLEVBQUUsZ0JBQWdCLGNBQzNCLGlDQUNJOzs7WUFOZSxVQUFVO1lBQVMsU0FBUzs7OzZCQVM3QyxLQUFLOzs7Ozs7Ozs7O29CQUNMOzs7SUFIRCw0Q0FBeUI7Ozs7O0lBYWIsNkNBQThCOzs7OztJQUFFLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuekNsYXNzTGlzdEFkZF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpDbGFzc0xpc3RBZGQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNsYXNzTGlzdEFkZERpcmVjdGl2ZSB7XHJcbiAgY2xhc3NMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekNsYXNzTGlzdEFkZChsaXN0OiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgbmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGxpc3QuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgbmFtZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2xhc3NMaXN0ID0gbGlzdDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxyXG59XHJcbiJdfQ==