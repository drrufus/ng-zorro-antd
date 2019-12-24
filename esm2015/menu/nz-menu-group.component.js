/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
const _c0 = ["nz-menu-group", ""];
function NzMenuGroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1234 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1234.nzTitle);
} }
function NzMenuGroupComponent_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "!nzTitle"]);
} }
const _c1 = ["*", [["", "title", ""]]];
const _c2 = ["*", "[title]"];
export class NzMenuGroupComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-menu-item-group');
    }
}
/** @nocollapse */ NzMenuGroupComponent.ɵfac = function NzMenuGroupComponent_Factory(t) { return new (t || NzMenuGroupComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzMenuGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzMenuGroupComponent, selectors: [["", "nz-menu-group", ""]], inputs: { nzTitle: "nzTitle" }, exportAs: ["nzMenuGroup"], attrs: _c0, ngContentSelectors: _c2, decls: 5, vars: 2, consts: [[1, "ant-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [4, "ngIf"], [1, "ant-menu-item-group-list"]], template: function NzMenuGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, NzMenuGroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, NzMenuGroupComponent_2_Template, 1, 0, undefined, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ul", 3);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.nzTitle);
    } }, directives: [i1.NzStringTemplateOutletDirective, i2.NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMenuGroupComponent, [{
        type: Component,
        args: [{
                selector: '[nz-menu-group]',
                exportAs: 'nzMenuGroup',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-menu-group.component.html',
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { nzTitle: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJuei1tZW51LWdyb3VwLmNvbXBvbmVudC50cyIsIm56LW1lbnUtZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDUC9ILDZCQUFnRDtJQUFBLFlBQWE7SUFBQSwwQkFBZTs7O0lBQTVCLGVBQWE7SUFBYix1Q0FBYTs7O0lBQzdELDRDQUE4Qzs7OztBRGdCaEQsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQixZQUFtQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUMxRSxDQUFDOzt3RkFMVSxvQkFBb0I7eURBQXBCLG9CQUFvQjs7UUNsQmpDLDhCQUNFO1FBQUEsdUZBQWdEO1FBQ2hELHFFQUE4QztRQUNoRCxpQkFBTTtRQUNOLDZCQUNFO1FBQUEsa0JBQVk7UUFDZCxpQkFBSzs7UUFMVyxlQUFpQztRQUFqQyxvREFBaUM7UUFDbEIsZUFBZ0I7UUFBaEIsbUNBQWdCOztrRERnQmxDLG9CQUFvQjtjQVJoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7a0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuei1tZW51LWdyb3VwXScsXHJcbiAgZXhwb3J0QXM6ICduek1lbnVHcm91cCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotbWVudS1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVudUdyb3VwQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtbWVudS1pdGVtLWdyb3VwJyk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtbWVudS1pdGVtLWdyb3VwLXRpdGxlXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIj57eyBuelRpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RpdGxlXVwiICpuZ0lmPVwiIW56VGl0bGVcIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48dWwgY2xhc3M9XCJhbnQtbWVudS1pdGVtLWdyb3VwLWxpc3RcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvdWw+XHJcbiJdfQ==