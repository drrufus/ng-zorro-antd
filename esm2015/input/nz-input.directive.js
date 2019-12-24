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
export class NzInputDirective {
    constructor(renderer, elementRef) {
        this.nzSize = 'default';
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzInputDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-input]',
                exportAs: 'nzInput',
                host: {
                    '[class.ant-input-disabled]': 'disabled',
                    '[class.ant-input-lg]': `nzSize === 'large'`,
                    '[class.ant-input-sm]': `nzSize === 'small'`
                }
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { nzSize: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLG9CQUFvQixDQUFDOztBQVdqRSxNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCLFlBQVksUUFBbUIsRUFBRSxVQUFzQjtRQUg5QyxXQUFNLEdBQWtCLFNBQVMsQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR3hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnRkFOVSxnQkFBZ0I7cURBQWhCLGdCQUFnQjs7Ozs7QUFFRjtJQUFmLFlBQVksRUFBRTs7a0RBQWtCO2tEQUYvQixnQkFBZ0I7Y0FUNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsU0FBUztnQkFDbkIsSUFBSSxFQUFFO29CQUNKLDRCQUE0QixFQUFFLFVBQVU7b0JBQ3hDLHNCQUFzQixFQUFFLG9CQUFvQjtvQkFDNUMsc0JBQXNCLEVBQUUsb0JBQW9CO2lCQUM3QzthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LWlucHV0XScsXHJcbiAgZXhwb3J0QXM6ICdueklucHV0JyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbGddJzogYG56U2l6ZSA9PT0gJ2xhcmdlJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zbV0nOiBgbnpTaXplID09PSAnc21hbGwnYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56SW5wdXREaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWlucHV0Jyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==