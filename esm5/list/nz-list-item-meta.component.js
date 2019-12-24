/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/avatar";
import * as i3 from "ng-zorro-antd/core";
function NzListItemMetaComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "nz-avatar", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1170 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSrc", ctx_r1170.avatarStr);
} }
function NzListItemMetaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, NzListItemMetaComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1168 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1168.avatarStr)("ngIfElse", ctx_r1168.avatarTpl);
} }
function NzListItemMetaComponent_div_1_h4_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1173 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1173.nzTitle);
} }
function NzListItemMetaComponent_div_1_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 8);
    i0.ɵɵtemplate(1, NzListItemMetaComponent_div_1_h4_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1171 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1171.nzTitle);
} }
function NzListItemMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1174 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1174.nzDescription);
} }
function NzListItemMetaComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, NzListItemMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1172 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1172.nzDescription);
} }
function NzListItemMetaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, NzListItemMetaComponent_div_1_h4_1_Template, 2, 1, "h4", 6);
    i0.ɵɵtemplate(2, NzListItemMetaComponent_div_1_div_2_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1169 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1169.nzTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1169.nzDescription);
} }
var NzListItemMetaComponent = /** @class */ (function () {
    function NzListItemMetaComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    Object.defineProperty(NzListItemMetaComponent.prototype, "nzAvatar", {
        set: function (value) {
            if (value instanceof TemplateRef) {
                this.avatarStr = '';
                this.avatarTpl = value;
            }
            else {
                this.avatarStr = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ NzListItemMetaComponent.ɵfac = function NzListItemMetaComponent_Factory(t) { return new (t || NzListItemMetaComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ NzListItemMetaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzListItemMetaComponent, selectors: [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], inputs: { nzAvatar: "nzAvatar", nzTitle: "nzTitle", nzDescription: "nzDescription" }, exportAs: ["nzListItemMeta"], decls: 2, vars: 2, consts: [["class", "ant-list-item-meta-avatar", 4, "ngIf"], ["class", "ant-list-item-meta-content", 4, "ngIf"], [1, "ant-list-item-meta-avatar"], [4, "ngIf", "ngIfElse"], [3, "nzSrc"], [1, "ant-list-item-meta-content"], ["class", "ant-list-item-meta-title", 4, "ngIf"], ["class", "ant-list-item-meta-description", 4, "ngIf"], [1, "ant-list-item-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-meta-description"]], template: function NzListItemMetaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzListItemMetaComponent_div_0_Template, 2, 2, "div", 0);
            i0.ɵɵtemplate(1, NzListItemMetaComponent_div_1_Template, 3, 2, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.avatarStr || ctx.avatarTpl);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzDescription);
        } }, directives: [i1.NgIf, i2.NzAvatarComponent, i3.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
    return NzListItemMetaComponent;
}());
export { NzListItemMetaComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzListItemMetaComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-meta, [nz-list-item-meta]',
                exportAs: 'nzListItemMeta',
                templateUrl: './nz-list-item-meta.component.html',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { nzAvatar: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzDescription: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9saXN0LyIsInNvdXJjZXMiOlsibnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LnRzIiwibnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ1AvSCw2QkFDRTtJQUFBLCtCQUEyQztJQUM3QywwQkFBZTs7O0lBREYsZUFBbUI7SUFBbkIsMkNBQW1COzs7SUFGbEMsOEJBQ0U7SUFBQSxnR0FDRTtJQUVKLGlCQUFNOzs7SUFIVSxlQUFpQztJQUFqQywwQ0FBaUMsaUNBQUE7OztJQU03Qyw2QkFBZ0Q7SUFBQSxZQUFhO0lBQUEsMEJBQWU7OztJQUE1QixlQUFhO0lBQWIsdUNBQWE7OztJQUQvRCw2QkFDRTtJQUFBLHFHQUFnRDtJQUNsRCxpQkFBSzs7O0lBRFcsZUFBaUM7SUFBakMsMERBQWlDOzs7SUFHL0MsNkJBQXNEO0lBQUEsWUFBbUI7SUFBQSwwQkFBZTs7O0lBQWxDLGVBQW1CO0lBQW5CLDZDQUFtQjs7O0lBRDNFLCtCQUNFO0lBQUEsc0dBQXNEO0lBQ3hELGlCQUFNOzs7SUFEVSxlQUF1QztJQUF2QyxnRUFBdUM7OztJQUx6RCw4QkFDRTtJQUFBLDRFQUNFO0lBRUYsOEVBQ0U7SUFFSixpQkFBTTs7O0lBTkEsZUFBZTtJQUFmLHdDQUFlO0lBR2QsZUFBcUI7SUFBckIsOENBQXFCOztBREM1QjtJQTBCRSxpQ0FBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWpCdEUsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQWtCYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDekUsQ0FBQztJQWhCRCxzQkFDSSw2Q0FBUTthQURaLFVBQ2EsS0FBaUM7WUFDNUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDOzs7T0FBQTtrR0FaVSx1QkFBdUI7Z0VBQXZCLHVCQUF1QjtZQ2xCcEMsd0VBQ0U7WUFJRix3RUFDRTs7WUFORyxxREFBOEI7WUFLOUIsZUFBZ0M7WUFBaEMsdURBQWdDOztrQ0RMckM7Q0F1Q0MsQUE3QkQsSUE2QkM7U0FyQlksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FSbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7a0JBS0UsS0FBSzs7a0JBVUwsS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWxpc3QtaXRlbS1tZXRhLCBbbnotbGlzdC1pdGVtLW1ldGFdJyxcclxuICBleHBvcnRBczogJ256TGlzdEl0ZW1NZXRhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50IHtcclxuICBhdmF0YXJTdHIgPSAnJztcclxuICBhdmF0YXJUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekF2YXRhcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuYXZhdGFyU3RyID0gJyc7XHJcbiAgICAgIHRoaXMuYXZhdGFyVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF2YXRhclN0ciA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIG56RGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1saXN0LWl0ZW0tbWV0YScpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwiYXZhdGFyU3RyIHx8IGF2YXRhclRwbFwiIGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tZXRhLWF2YXRhclwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdmF0YXJTdHI7IGVsc2UgYXZhdGFyVHBsXCI+XHJcbiAgICA8bnotYXZhdGFyIFtuelNyY109XCJhdmF0YXJTdHJcIj48L256LWF2YXRhcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbjxkaXYgKm5nSWY9XCJuelRpdGxlIHx8IG56RGVzY3JpcHRpb25cIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS1jb250ZW50XCI+XHJcbiAgPGg0ICpuZ0lmPVwibnpUaXRsZVwiIGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tZXRhLXRpdGxlXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUaXRsZVwiPnt7IG56VGl0bGUgfX08L25nLWNvbnRhaW5lcj5cclxuICA8L2g0PlxyXG4gIDxkaXYgKm5nSWY9XCJuekRlc2NyaXB0aW9uXCIgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLW1ldGEtZGVzY3JpcHRpb25cIj5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekRlc2NyaXB0aW9uXCI+e3sgbnpEZXNjcmlwdGlvbiB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19