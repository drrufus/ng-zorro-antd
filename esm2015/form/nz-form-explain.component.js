/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { helpMotion, warnDeprecation } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * @deprecated Use `[nzSuccessTip] | [nzWarningTip] | [nzErrorTip] | [nzValidatingTip]` in `NzFormControlComponent` instead, will remove in 9.0.0.
 */
export class NzFormExplainComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
        warnDeprecation(`'nz-form-explain' is going to be removed in 9.0.0. Use [nzSuccessTip] | [nzWarningTip] | [nzErrorTip] | [nzValidatingTip] in nz-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
}
/** @nocollapse */ NzFormExplainComponent.ɵfac = function NzFormExplainComponent_Factory(t) { return new (t || NzFormExplainComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzFormExplainComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzFormExplainComponent, selectors: [["nz-form-explain"]], exportAs: ["nzFormExplain"], ngContentSelectors: _c0, decls: 2, vars: 1, template: function NzFormExplainComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@helpMotion", undefined);
    } }, styles: ["\n      nz-form-explain {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzFormExplainComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-explain',
                exportAs: 'nzFormExplain',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [helpMotion],
                templateUrl: './nz-form-explain.component.html',
                styles: [
                    `
      nz-form-explain {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZm9ybS8iLCJzb3VyY2VzIjpbIm56LWZvcm0tZXhwbGFpbi5jb21wb25lbnQudHMiLCJuei1mb3JtLWV4cGxhaW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQWtCakU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFlBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUMxRSxlQUFlLENBQ2IscU1BQXFNLENBQ3RNLENBQUM7SUFDSixDQUFDOzs0RkFOVSxzQkFBc0I7MkRBQXRCLHNCQUFzQjs7UUM5Qm5DLDJCQUNFO1FBQUEsa0JBQVk7UUFDZCxpQkFBTTs7UUFGRCx1Q0FBYTs2SERpQkosQ0FBQyxVQUFVLENBQUM7a0RBYWIsc0JBQXNCO2NBbkJsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUN4QixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxNQUFNLEVBQUU7b0JBQ047Ozs7S0FJQztpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGhlbHBNb3Rpb24sIHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWZvcm0tZXhwbGFpbicsXHJcbiAgZXhwb3J0QXM6ICduekZvcm1FeHBsYWluJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGFuaW1hdGlvbnM6IFtoZWxwTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotZm9ybS1leHBsYWluIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIFVzZSBgW256U3VjY2Vzc1RpcF0gfCBbbnpXYXJuaW5nVGlwXSB8IFtuekVycm9yVGlwXSB8IFtuelZhbGlkYXRpbmdUaXBdYCBpbiBgTnpGb3JtQ29udHJvbENvbXBvbmVudGAgaW5zdGVhZCwgd2lsbCByZW1vdmUgaW4gOS4wLjAuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTnpGb3JtRXhwbGFpbkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWV4cGxhaW4nKTtcclxuICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgYCduei1mb3JtLWV4cGxhaW4nIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFVzZSBbbnpTdWNjZXNzVGlwXSB8IFtueldhcm5pbmdUaXBdIHwgW256RXJyb3JUaXBdIHwgW256VmFsaWRhdGluZ1RpcF0gaW4gbnotZm9ybS1jb250cm9sIGluc3RlYWQuIFJlYWQgaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZm9ybS9lbmBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgW0BoZWxwTW90aW9uXT5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=