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
import * as i2 from "ng-zorro-antd/core";
function NzCardMetaComponent_div_0_ng_template_1_Template(rf, ctx) { }
function NzCardMetaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, NzCardMetaComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r105 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r105.nzAvatar);
} }
function NzCardMetaComponent_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r110 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r110.nzTitle);
} }
function NzCardMetaComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, NzCardMetaComponent_div_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r108 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r108.nzTitle);
} }
function NzCardMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r111 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r111.nzDescription);
} }
function NzCardMetaComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, NzCardMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r109 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r109.nzDescription);
} }
function NzCardMetaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, NzCardMetaComponent_div_1_div_1_Template, 2, 1, "div", 5);
    i0.ɵɵtemplate(2, NzCardMetaComponent_div_1_div_2_Template, 2, 1, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r106 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r106.nzTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r106.nzDescription);
} }
var NzCardMetaComponent = /** @class */ (function () {
    function NzCardMetaComponent(elementRef, renderer) {
        renderer.addClass(elementRef.nativeElement, 'ant-card-meta');
    }
    /** @nocollapse */ NzCardMetaComponent.ɵfac = function NzCardMetaComponent_Factory(t) { return new (t || NzCardMetaComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ NzCardMetaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCardMetaComponent, selectors: [["nz-card-meta"]], inputs: { nzTitle: "nzTitle", nzDescription: "nzDescription", nzAvatar: "nzAvatar" }, exportAs: ["nzCardMeta"], decls: 2, vars: 2, consts: [["class", "ant-card-meta-avatar", 4, "ngIf"], ["class", "ant-card-meta-detail", 4, "ngIf"], [1, "ant-card-meta-avatar"], [3, "ngTemplateOutlet"], [1, "ant-card-meta-detail"], ["class", "ant-card-meta-title", 4, "ngIf"], ["class", "ant-card-meta-description", 4, "ngIf"], [1, "ant-card-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-meta-description"]], template: function NzCardMetaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzCardMetaComponent_div_0_Template, 2, 1, "div", 0);
            i0.ɵɵtemplate(1, NzCardMetaComponent_div_1_Template, 3, 2, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.nzAvatar);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzDescription);
        } }, directives: [i1.NgIf, i1.NgTemplateOutlet, i2.NzStringTemplateOutletDirective], styles: ["\n      nz-card-meta {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    return NzCardMetaComponent;
}());
export { NzCardMetaComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCardMetaComponent, [{
        type: Component,
        args: [{
                selector: 'nz-card-meta',
                exportAs: 'nzCardMeta',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-card-meta.component.html',
                styles: [
                    "\n      nz-card-meta {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { nzTitle: [{
            type: Input
        }], nzDescription: [{
            type: Input
        }], nzAvatar: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FyZC8iLCJzb3VyY2VzIjpbIm56LWNhcmQtbWV0YS5jb21wb25lbnQudHMiLCJuei1jYXJkLW1ldGEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ1JqSSw4QkFDRTtJQUFBLDBGQUEyQztJQUM3QyxpQkFBTTs7O0lBRFMsZUFBNkI7SUFBN0Isb0RBQTZCOzs7SUFJeEMsNkJBQWdEO0lBQUEsWUFBYTtJQUFBLDBCQUFlOzs7SUFBNUIsZUFBYTtJQUFiLHNDQUFhOzs7SUFEL0QsOEJBQ0U7SUFBQSxrR0FBZ0Q7SUFDbEQsaUJBQU07OztJQURVLGVBQWlDO0lBQWpDLHlEQUFpQzs7O0lBRy9DLDZCQUFzRDtJQUFBLFlBQW1CO0lBQUEsMEJBQWU7OztJQUFsQyxlQUFtQjtJQUFuQiw0Q0FBbUI7OztJQUQzRSw4QkFDRTtJQUFBLGtHQUFzRDtJQUN4RCxpQkFBTTs7O0lBRFUsZUFBdUM7SUFBdkMsK0RBQXVDOzs7SUFMekQsOEJBQ0U7SUFBQSwwRUFDRTtJQUVGLDBFQUNFO0lBRUosaUJBQU07OztJQU42QixlQUFlO0lBQWYsdUNBQWU7SUFHVCxlQUFxQjtJQUFyQiw2Q0FBcUI7O0FERzlEO0lBb0JFLDZCQUFZLFVBQXNCLEVBQUUsUUFBbUI7UUFDckQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7MEZBUFUsbUJBQW1COzREQUFuQixtQkFBbUI7WUN6QmhDLG9FQUNFO1lBRUYsb0VBQ0U7O1lBSmdDLG1DQUFnQjtZQUdoQixlQUFnQztZQUFoQyx1REFBZ0M7OzhCREhsRTtDQWlDQyxBQXZCRCxJQXVCQztTQVJZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBZi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsTUFBTSxFQUFFO29CQUNOLGdFQUlDO2lCQUNGO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1jYXJkLW1ldGEnLFxyXG4gIGV4cG9ydEFzOiAnbnpDYXJkTWV0YScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FyZC1tZXRhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotY2FyZC1tZXRhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FyZE1ldGFDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56RGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56QXZhdGFyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhcmQtbWV0YScpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbWV0YS1hdmF0YXJcIiAqbmdJZj1cIm56QXZhdGFyXCI+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56QXZhdGFyXCI+PC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJhbnQtY2FyZC1tZXRhLWRldGFpbFwiICpuZ0lmPVwibnpUaXRsZSB8fCBuekRlc2NyaXB0aW9uXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1jYXJkLW1ldGEtdGl0bGVcIiAqbmdJZj1cIm56VGl0bGVcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+e3sgbnpUaXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1tZXRhLWRlc2NyaXB0aW9uXCIgKm5nSWY9XCJuekRlc2NyaXB0aW9uXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpEZXNjcmlwdGlvblwiPnt7IG56RGVzY3JpcHRpb24gfX08L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==