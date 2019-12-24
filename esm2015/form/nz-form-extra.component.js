/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * @deprecated Use `[nzExtra]` in `NzFormControlComponent` instead, will remove in 9.0.0.
 */
export class NzFormExtraComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-extra');
        warnDeprecation(`'nz-form-extra' is going to be removed in 9.0.0. Use [nzExtra] in nz-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
}
/** @nocollapse */ NzFormExtraComponent.ɵfac = function NzFormExtraComponent_Factory(t) { return new (t || NzFormExtraComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzFormExtraComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzFormExtraComponent, selectors: [["nz-form-extra"]], exportAs: ["nzFormExtra"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzFormExtraComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["\n      nz-form-extra {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzFormExtraComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-extra',
                exportAs: 'nzFormExtra',
                templateUrl: './nz-form-extra.component.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [
                    `
      nz-form-extra {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1leHRyYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJuei1mb3JtLWV4dHJhLmNvbXBvbmVudC50cyIsIm56LWZvcm0tZXh0cmEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBaUJyRDs7R0FFRztBQUNILE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hFLGVBQWUsQ0FDYiwwSUFBMEksQ0FDM0ksQ0FBQztJQUNKLENBQUM7O3dGQU5VLG9CQUFvQjt5REFBcEIsb0JBQW9COztRQzdCakMsa0JBQVk7O2tERDZCQyxvQkFBb0I7Y0FsQmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsTUFBTSxFQUFFO29CQUNOOzs7O0tBSUM7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtLWV4dHJhJyxcclxuICBleHBvcnRBczogJ256Rm9ybUV4dHJhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZm9ybS1leHRyYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotZm9ybS1leHRyYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBVc2UgYFtuekV4dHJhXWAgaW4gYE56Rm9ybUNvbnRyb2xDb21wb25lbnRgIGluc3RlYWQsIHdpbGwgcmVtb3ZlIGluIDkuMC4wLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE56Rm9ybUV4dHJhQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0tZXh0cmEnKTtcclxuICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgYCduei1mb3JtLWV4dHJhJyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBVc2UgW256RXh0cmFdIGluIG56LWZvcm0tY29udHJvbCBpbnN0ZWFkLiBSZWFkIGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2Zvcm0vZW5gXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==