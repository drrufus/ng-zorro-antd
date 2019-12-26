/**
 * @fileoverview added by tsickle
 * Generated from: nz-input.directive.ts
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
var NzInputDirective = /** @class */ (function () {
    function NzInputDirective(renderer, elementRef) {
        this.nzSize = 'default';
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
    NzInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-input]',
                    exportAs: 'nzInput',
                    host: {
                        '[class.ant-input-disabled]': 'disabled',
                        '[class.ant-input-lg]': "nzSize === 'large'",
                        '[class.ant-input-sm]': "nzSize === 'small'"
                    }
                },] }
    ];
    /** @nocollapse */
    NzInputDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzInputDirective.propDecorators = {
        nzSize: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzInputDirective.prototype, "disabled", void 0);
    return NzInputDirective;
}());
export { NzInputDirective };
if (false) {
    /** @type {?} */
    NzInputDirective.prototype.nzSize;
    /** @type {?} */
    NzInputDirective.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBRWpFO0lBYUUsMEJBQVksUUFBbUIsRUFBRSxVQUFzQjtRQUg5QyxXQUFNLEdBQWtCLFNBQVMsQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR3hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxTQUFTO29CQUNuQixJQUFJLEVBQUU7d0JBQ0osNEJBQTRCLEVBQUUsVUFBVTt3QkFDeEMsc0JBQXNCLEVBQUUsb0JBQW9CO3dCQUM1QyxzQkFBc0IsRUFBRSxvQkFBb0I7cUJBQzdDO2lCQUNGOzs7O2dCQVhzQyxTQUFTO2dCQUE1QixVQUFVOzs7eUJBYTNCLEtBQUs7MkJBQ0wsS0FBSzs7SUFBbUI7UUFBZixZQUFZLEVBQUU7O3NEQUFrQjtJQUs1Qyx1QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBUFksZ0JBQWdCOzs7SUFDM0Isa0NBQTJDOztJQUMzQyxvQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotaW5wdXRdJyxcclxuICBleHBvcnRBczogJ256SW5wdXQnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1sZ10nOiBgbnpTaXplID09PSAnbGFyZ2UnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNtXSc6IGBuelNpemUgPT09ICdzbWFsbCdgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJbnB1dERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtaW5wdXQnKTtcclxuICB9XHJcbn1cclxuIl19