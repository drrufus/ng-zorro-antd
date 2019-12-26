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
export class NzInputDirective {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
        this.nzSize = 'default';
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
}
NzInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-input]',
                exportAs: 'nzInput',
                host: {
                    '[class.ant-input-disabled]': 'disabled',
                    '[class.ant-input-lg]': `nzSize === 'large'`,
                    '[class.ant-input-sm]': `nzSize === 'small'`
                }
            },] }
];
/** @nocollapse */
NzInputDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
NzInputDirective.propDecorators = {
    nzSize: [{ type: Input }],
    disabled: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzInputDirective.prototype, "disabled", void 0);
if (false) {
    /** @type {?} */
    NzInputDirective.prototype.nzSize;
    /** @type {?} */
    NzInputDirective.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBV2pFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBSTNCLFlBQVksUUFBbUIsRUFBRSxVQUFzQjtRQUg5QyxXQUFNLEdBQWtCLFNBQVMsQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR3hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixJQUFJLEVBQUU7b0JBQ0osNEJBQTRCLEVBQUUsVUFBVTtvQkFDeEMsc0JBQXNCLEVBQUUsb0JBQW9CO29CQUM1QyxzQkFBc0IsRUFBRSxvQkFBb0I7aUJBQzdDO2FBQ0Y7Ozs7WUFYc0MsU0FBUztZQUE1QixVQUFVOzs7cUJBYTNCLEtBQUs7dUJBQ0wsS0FBSzs7QUFBbUI7SUFBZixZQUFZLEVBQUU7O2tEQUFrQjs7O0lBRDFDLGtDQUEyQzs7SUFDM0Msb0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LWlucHV0XScsXHJcbiAgZXhwb3J0QXM6ICdueklucHV0JyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbGddJzogYG56U2l6ZSA9PT0gJ2xhcmdlJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zbV0nOiBgbnpTaXplID09PSAnc21hbGwnYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56SW5wdXREaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWlucHV0Jyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==