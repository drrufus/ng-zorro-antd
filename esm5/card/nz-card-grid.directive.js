import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
var NzCardGridDirective = /** @class */ (function () {
    function NzCardGridDirective(elementRef, renderer) {
        this.nzHoverable = true;
        renderer.addClass(elementRef.nativeElement, 'ant-card-grid');
    }
    /** @nocollapse */ NzCardGridDirective.ɵfac = function NzCardGridDirective_Factory(t) { return new (t || NzCardGridDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ NzCardGridDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzCardGridDirective, selectors: [["", "nz-card-grid", ""]], hostBindings: function NzCardGridDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(1);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-card-hoverable", ctx.nzHoverable);
        } }, inputs: { nzHoverable: "nzHoverable" }, exportAs: ["nzCardGrid"] });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardGridDirective.prototype, "nzHoverable", void 0);
    return NzCardGridDirective;
}());
export { NzCardGridDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCardGridDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-card-grid]',
                exportAs: 'nzCardGrid',
                host: {
                    '[class.ant-card-hoverable]': 'nzHoverable'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { nzHoverable: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC1ncmlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FyZC8iLCJzb3VyY2VzIjpbIm56LWNhcmQtZ3JpZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVsRDtJQVNFLDZCQUFZLFVBQXNCLEVBQUUsUUFBbUI7UUFEOUIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFbkQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7MEZBSlUsbUJBQW1COzREQUFuQixtQkFBbUI7Ozs7O0lBQ0w7UUFBZixZQUFZLEVBQUU7OzREQUE2Qjs4QkFuQnZEO0NBdUJDLEFBWkQsSUFZQztTQUxZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBUC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsSUFBSSxFQUFFO29CQUNKLDRCQUE0QixFQUFFLGFBQWE7aUJBQzVDO2FBQ0Y7O2tCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotY2FyZC1ncmlkXScsXHJcbiAgZXhwb3J0QXM6ICduekNhcmRHcmlkJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWhvdmVyYWJsZV0nOiAnbnpIb3ZlcmFibGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXJkR3JpZERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SG92ZXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FyZC1ncmlkJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==