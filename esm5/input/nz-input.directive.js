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
var NzInputDirective = /** @class */ (function () {
    function NzInputDirective(renderer, elementRef) {
        this.nzSize = 'default';
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
    /** @nocollapse */ NzInputDirective.ɵfac = function NzInputDirective_Factory(t) { return new (t || NzInputDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ NzInputDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzInputDirective, selectors: [["", "nz-input", ""]], hostBindings: function NzInputDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(3);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-input-disabled", ctx.disabled)("ant-input-lg", ctx.nzSize === "large")("ant-input-sm", ctx.nzSize === "small");
        } }, inputs: { nzSize: "nzSize", disabled: "disabled" }, exportAs: ["nzInput"] });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzInputDirective.prototype, "disabled", void 0);
    return NzInputDirective;
}());
export { NzInputDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzInputDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-input]',
                exportAs: 'nzInput',
                host: {
                    '[class.ant-input-disabled]': 'disabled',
                    '[class.ant-input-lg]': "nzSize === 'large'",
                    '[class.ant-input-sm]': "nzSize === 'small'"
                }
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { nzSize: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLG9CQUFvQixDQUFDOztBQUVqRTtJQWFFLDBCQUFZLFFBQW1CLEVBQUUsVUFBc0I7UUFIOUMsV0FBTSxHQUFrQixTQUFTLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUd4QyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQztvRkFOVSxnQkFBZ0I7eURBQWhCLGdCQUFnQjs7Ozs7SUFFRjtRQUFmLFlBQVksRUFBRTs7c0RBQWtCOzJCQXRCNUM7Q0EyQkMsQUFoQkQsSUFnQkM7U0FQWSxnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQVQ1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixJQUFJLEVBQUU7b0JBQ0osNEJBQTRCLEVBQUUsVUFBVTtvQkFDeEMsc0JBQXNCLEVBQUUsb0JBQW9CO29CQUM1QyxzQkFBc0IsRUFBRSxvQkFBb0I7aUJBQzdDO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotaW5wdXRdJyxcclxuICBleHBvcnRBczogJ256SW5wdXQnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1sZ10nOiBgbnpTaXplID09PSAnbGFyZ2UnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNtXSc6IGBuelNpemUgPT09ICdzbWFsbCdgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJbnB1dERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtaW5wdXQnKTtcclxuICB9XHJcbn1cclxuIl19