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
var _c0 = ["*"];
var NzFormExplainComponent = /** @class */ (function () {
    function NzFormExplainComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
        warnDeprecation("'nz-form-explain' is going to be removed in 9.0.0. Use [nzSuccessTip] | [nzWarningTip] | [nzErrorTip] | [nzValidatingTip] in nz-form-control instead. Read https://ng.ant.design/components/form/en");
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
    return NzFormExplainComponent;
}());
export { NzFormExplainComponent };
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
                    "\n      nz-form-explain {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZm9ybS8iLCJzb3VyY2VzIjpbIm56LWZvcm0tZXhwbGFpbi5jb21wb25lbnQudHMiLCJuei1mb3JtLWV4cGxhaW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUVqRTtJQW9CRSxnQ0FBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFFLGVBQWUsQ0FDYixxTUFBcU0sQ0FDdE0sQ0FBQztJQUNKLENBQUM7Z0dBTlUsc0JBQXNCOytEQUF0QixzQkFBc0I7O1lDOUJuQywyQkFDRTtZQUFBLGtCQUFZO1lBQ2QsaUJBQU07O1lBRkQsdUNBQWE7aUlEaUJKLENBQUMsVUFBVSxDQUFDO2lDQWpCMUI7Q0FxQ0MsQUExQkQsSUEwQkM7U0FQWSxzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQW5CbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDeEIsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsTUFBTSxFQUFFO29CQUNOLG1FQUlDO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaGVscE1vdGlvbiwgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybS1leHBsYWluJyxcclxuICBleHBvcnRBczogJ256Rm9ybUV4cGxhaW4nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgYW5pbWF0aW9uczogW2hlbHBNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1mb3JtLWV4cGxhaW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1mb3JtLWV4cGxhaW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgVXNlIGBbbnpTdWNjZXNzVGlwXSB8IFtueldhcm5pbmdUaXBdIHwgW256RXJyb3JUaXBdIHwgW256VmFsaWRhdGluZ1RpcF1gIGluIGBOekZvcm1Db250cm9sQ29tcG9uZW50YCBpbnN0ZWFkLCB3aWxsIHJlbW92ZSBpbiA5LjAuMC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOekZvcm1FeHBsYWluQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0tZXhwbGFpbicpO1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICBgJ256LWZvcm0tZXhwbGFpbicgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gVXNlIFtuelN1Y2Nlc3NUaXBdIHwgW256V2FybmluZ1RpcF0gfCBbbnpFcnJvclRpcF0gfCBbbnpWYWxpZGF0aW5nVGlwXSBpbiBuei1mb3JtLWNvbnRyb2wgaW5zdGVhZC4gUmVhZCBodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9mb3JtL2VuYFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBbQGhlbHBNb3Rpb25dPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==