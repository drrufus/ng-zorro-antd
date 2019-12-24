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
    const ctx_r1120 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSrc", ctx_r1120.avatarStr);
} }
function NzListItemMetaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, NzListItemMetaComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1118 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1118.avatarStr)("ngIfElse", ctx_r1118.avatarTpl);
} }
function NzListItemMetaComponent_div_1_h4_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1123 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1123.nzTitle);
} }
function NzListItemMetaComponent_div_1_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 8);
    i0.ɵɵtemplate(1, NzListItemMetaComponent_div_1_h4_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1121 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1121.nzTitle);
} }
function NzListItemMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1124 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1124.nzDescription);
} }
function NzListItemMetaComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, NzListItemMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1122 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1122.nzDescription);
} }
function NzListItemMetaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, NzListItemMetaComponent_div_1_h4_1_Template, 2, 1, "h4", 6);
    i0.ɵɵtemplate(2, NzListItemMetaComponent_div_1_div_2_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1119 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1119.nzTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1119.nzDescription);
} }
export class NzListItemMetaComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    set nzAvatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = '';
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
    }
}
/** @nocollapse */ NzListItemMetaComponent.ɵfac = function NzListItemMetaComponent_Factory(t) { return new (t || NzListItemMetaComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzListItemMetaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzListItemMetaComponent, selectors: [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], inputs: { nzAvatar: "nzAvatar", nzTitle: "nzTitle", nzDescription: "nzDescription" }, exportAs: ["nzListItemMeta"], decls: 2, vars: 2, consts: [["class", "ant-list-item-meta-avatar", 4, "ngIf"], ["class", "ant-list-item-meta-content", 4, "ngIf"], [1, "ant-list-item-meta-avatar"], [4, "ngIf", "ngIfElse"], [3, "nzSrc"], [1, "ant-list-item-meta-content"], ["class", "ant-list-item-meta-title", 4, "ngIf"], ["class", "ant-list-item-meta-description", 4, "ngIf"], [1, "ant-list-item-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-meta-description"]], template: function NzListItemMetaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NzListItemMetaComponent_div_0_Template, 2, 2, "div", 0);
        i0.ɵɵtemplate(1, NzListItemMetaComponent_div_1_Template, 3, 2, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.avatarStr || ctx.avatarTpl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzDescription);
    } }, directives: [i1.NgIf, i2.NzAvatarComponent, i3.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9saXN0LyIsInNvdXJjZXMiOlsibnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LnRzIiwibnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ1AvSCw2QkFDRTtJQUFBLCtCQUEyQztJQUM3QywwQkFBZTs7O0lBREYsZUFBbUI7SUFBbkIsMkNBQW1COzs7SUFGbEMsOEJBQ0U7SUFBQSxnR0FDRTtJQUVKLGlCQUFNOzs7SUFIVSxlQUFpQztJQUFqQywwQ0FBaUMsaUNBQUE7OztJQU03Qyw2QkFBZ0Q7SUFBQSxZQUFhO0lBQUEsMEJBQWU7OztJQUE1QixlQUFhO0lBQWIsdUNBQWE7OztJQUQvRCw2QkFDRTtJQUFBLHFHQUFnRDtJQUNsRCxpQkFBSzs7O0lBRFcsZUFBaUM7SUFBakMsMERBQWlDOzs7SUFHL0MsNkJBQXNEO0lBQUEsWUFBbUI7SUFBQSwwQkFBZTs7O0lBQWxDLGVBQW1CO0lBQW5CLDZDQUFtQjs7O0lBRDNFLCtCQUNFO0lBQUEsc0dBQXNEO0lBQ3hELGlCQUFNOzs7SUFEVSxlQUF1QztJQUF2QyxnRUFBdUM7OztJQUx6RCw4QkFDRTtJQUFBLDRFQUNFO0lBRUYsOEVBQ0U7SUFFSixpQkFBTTs7O0lBTkEsZUFBZTtJQUFmLHdDQUFlO0lBR2QsZUFBcUI7SUFBckIsOENBQXFCOztBRFM1QixNQUFNLE9BQU8sdUJBQXVCO0lBa0JsQyxZQUFtQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBakJ0RSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBa0JiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBaEJELElBQ0ksUUFBUSxDQUFDLEtBQWlDO1FBQzVDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs4RkFaVSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ2xCcEMsd0VBQ0U7UUFJRix3RUFDRTs7UUFORyxxREFBOEI7UUFLOUIsZUFBZ0M7UUFBaEMsdURBQWdDOztrRERheEIsdUJBQXVCO2NBUm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O2tCQUtFLEtBQUs7O2tCQVVMLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1saXN0LWl0ZW0tbWV0YSwgW256LWxpc3QtaXRlbS1tZXRhXScsXHJcbiAgZXhwb3J0QXM6ICduekxpc3RJdGVtTWV0YScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtTWV0YUNvbXBvbmVudCB7XHJcbiAgYXZhdGFyU3RyID0gJyc7XHJcbiAgYXZhdGFyVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpBdmF0YXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLmF2YXRhclN0ciA9ICcnO1xyXG4gICAgICB0aGlzLmF2YXRhclRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdmF0YXJTdHIgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuekRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtbGlzdC1pdGVtLW1ldGEnKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiAqbmdJZj1cImF2YXRhclN0ciB8fCBhdmF0YXJUcGxcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS1hdmF0YXJcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiYXZhdGFyU3RyOyBlbHNlIGF2YXRhclRwbFwiPlxyXG4gICAgPG56LWF2YXRhciBbbnpTcmNdPVwiYXZhdGFyU3RyXCI+PC9uei1hdmF0YXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwibnpUaXRsZSB8fCBuekRlc2NyaXB0aW9uXCIgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLW1ldGEtY29udGVudFwiPlxyXG4gIDxoNCAqbmdJZj1cIm56VGl0bGVcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS10aXRsZVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIj57eyBuelRpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgPC9oND5cclxuICA8ZGl2ICpuZ0lmPVwibnpEZXNjcmlwdGlvblwiIGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpEZXNjcmlwdGlvblwiPnt7IG56RGVzY3JpcHRpb24gfX08L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==