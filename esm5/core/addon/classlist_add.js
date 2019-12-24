/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
var NzClassListAddDirective = /** @class */ (function () {
    function NzClassListAddDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classList = [];
    }
    Object.defineProperty(NzClassListAddDirective.prototype, "nzClassListAdd", {
        set: function (list) {
            var _this = this;
            this.classList.forEach(function (name) {
                _this.renderer.removeClass(_this.elementRef.nativeElement, name);
            });
            list.forEach(function (name) {
                _this.renderer.addClass(_this.elementRef.nativeElement, name);
            });
            this.classList = list;
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ NzClassListAddDirective.ɵfac = function NzClassListAddDirective_Factory(t) { return new (t || NzClassListAddDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ NzClassListAddDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzClassListAddDirective, selectors: [["", "nzClassListAdd", ""]], inputs: { nzClassListAdd: "nzClassListAdd" }, exportAs: ["nzClassListAdd"] });
    return NzClassListAddDirective;
}());
export { NzClassListAddDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzClassListAddDirective, [{
        type: Directive,
        args: [{
                selector: '[nzClassListAdd]',
                exportAs: 'nzClassListAdd'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { nzClassListAdd: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NsaXN0X2FkZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS9hZGRvbi8iLCJzb3VyY2VzIjpbImNsYXNzbGlzdF9hZGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFeEU7SUFrQkUsaUNBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFidkUsY0FBUyxHQUFhLEVBQUUsQ0FBQztJQWFpRCxDQUFDO0lBWDNFLHNCQUNJLG1EQUFjO2FBRGxCLFVBQ21CLElBQWM7WUFEakMsaUJBU0M7WUFQQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ3pCLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ2YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUQsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtrR0FaVSx1QkFBdUI7Z0VBQXZCLHVCQUF1QjtrQ0FkcEM7Q0E2QkMsQUFuQkQsSUFtQkM7U0FmWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUpuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7a0JBSUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuekNsYXNzTGlzdEFkZF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpDbGFzc0xpc3RBZGQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNsYXNzTGlzdEFkZERpcmVjdGl2ZSB7XHJcbiAgY2xhc3NMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekNsYXNzTGlzdEFkZChsaXN0OiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgbmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGxpc3QuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgbmFtZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2xhc3NMaXN0ID0gbGlzdDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxyXG59XHJcbiJdfQ==