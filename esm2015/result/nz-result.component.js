/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "./partial/not-found";
import * as i5 from "./partial/server-error.component";
import * as i6 from "./partial/unauthorized";
function NzResultComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r715 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r715.icon);
} }
function NzResultComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzResultComponent_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r713 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r713.icon);
} }
function NzResultComponent_ng_container_1_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "!icon"]);
} }
function NzResultComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzResultComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    i0.ɵɵtemplate(2, NzResultComponent_ng_container_1_2_Template, 1, 0, undefined, 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r704 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r704.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r704.icon);
} }
function NzResultComponent_ng_template_2_nz_result_not_found_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-result-not-found");
} }
function NzResultComponent_ng_template_2_nz_result_server_error_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-result-server-error");
} }
function NzResultComponent_ng_template_2_nz_result_unauthorized_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-result-unauthorized");
} }
function NzResultComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 7);
    i0.ɵɵtemplate(1, NzResultComponent_ng_template_2_nz_result_not_found_1_Template, 1, 0, "nz-result-not-found", 8);
    i0.ɵɵtemplate(2, NzResultComponent_ng_template_2_nz_result_server_error_2_Template, 1, 0, "nz-result-server-error", 8);
    i0.ɵɵtemplate(3, NzResultComponent_ng_template_2_nz_result_unauthorized_3_Template, 1, 0, "nz-result-unauthorized", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r706 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r706.nzStatus);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "404");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "500");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "403");
} }
function NzResultComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r719 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r719.nzTitle, " ");
} }
function NzResultComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzResultComponent_ng_container_4_div_1_Template, 2, 1, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r707 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r707.nzTitle);
} }
function NzResultComponent_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!nzTitle"]);
} }
function NzResultComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r720 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r720.nzSubTitle, " ");
} }
function NzResultComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzResultComponent_ng_container_6_div_1_Template, 2, 1, "div", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r709 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r709.nzSubTitle);
} }
function NzResultComponent_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 3, ["*ngIf", "!nzSubTitle"]);
} }
function NzResultComponent_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r721 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r721.nzExtra, " ");
} }
function NzResultComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, NzResultComponent_div_9_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r711 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r711.nzExtra);
} }
function NzResultComponent_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 4, ["*ngIf", "!nzExtra"]);
} }
const _c0 = [[["nz-result-content"], ["", "nz-result-content", ""]], [["", "nz-result-icon", ""]], [["div", "nz-result-title", ""]], [["div", "nz-result-subtitle", ""]], [["div", "nz-result-extra", ""]]];
const _c1 = ["nz-result-content, [nz-result-content]", "[nz-result-icon]", "div[nz-result-title]", "div[nz-result-subtitle]", "div[nz-result-extra]"];
const IconMap = {
    success: 'check-circle',
    error: 'close-circle',
    info: 'exclamation-circle',
    warning: 'warning'
};
const ExceptionStatus = ['404', '500', '403'];
export class NzResultComponent {
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzStatus = 'info';
        this.isException = false;
    }
    ngOnChanges() {
        this.setStatusIcon();
        this.setClassMap();
    }
    setStatusIcon() {
        const icon = this.nzIcon;
        this.isException = ExceptionStatus.indexOf(this.nzStatus) !== -1;
        this.icon = icon
            ? typeof icon === 'string'
                ? IconMap[icon] || icon
                : icon
            : this.isException
                ? undefined
                : IconMap[this.nzStatus];
    }
    setClassMap() {
        const prefix = 'ant-result';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [prefix]: true,
            [`${prefix}-${this.nzStatus}`]: true
        });
    }
}
/** @nocollapse */ NzResultComponent.ɵfac = function NzResultComponent_Factory(t) { return new (t || NzResultComponent)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ NzResultComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzResultComponent, selectors: [["nz-result"]], inputs: { nzIcon: "nzIcon", nzTitle: "nzTitle", nzStatus: "nzStatus", nzSubTitle: "nzSubTitle", nzExtra: "nzExtra" }, exportAs: ["nzResult"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 11, vars: 8, consts: [[1, "ant-result-icon"], [4, "ngIf", "ngIfElse"], ["exceptionTpl", ""], [4, "ngIf"], ["class", "ant-result-extra", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "ant-result-title", 4, "nzStringTemplateOutlet"], [1, "ant-result-title"], ["class", "ant-result-subtitle", 4, "nzStringTemplateOutlet"], [1, "ant-result-subtitle"], [1, "ant-result-extra"]], template: function NzResultComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, NzResultComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        i0.ɵɵtemplate(2, NzResultComponent_ng_template_2_Template, 4, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, NzResultComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        i0.ɵɵtemplate(5, NzResultComponent_5_Template, 1, 0, undefined, 3);
        i0.ɵɵtemplate(6, NzResultComponent_ng_container_6_Template, 2, 1, "ng-container", 3);
        i0.ɵɵtemplate(7, NzResultComponent_7_Template, 1, 0, undefined, 3);
        i0.ɵɵprojection(8);
        i0.ɵɵtemplate(9, NzResultComponent_div_9_Template, 2, 1, "div", 4);
        i0.ɵɵtemplate(10, NzResultComponent_10_Template, 1, 0, undefined, 3);
    } if (rf & 2) {
        const _r705 = i0.ɵɵreference(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isException)("ngIfElse", _r705);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.nzTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.nzTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSubTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.nzSubTitle);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.nzExtra);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.nzExtra);
    } }, directives: [i2.NgIf, i1.NzStringTemplateOutletDirective, i3.NzIconDirective, i2.NgSwitch, i2.NgSwitchCase, i4.NzResultNotFoundComponent, i5.NzResultServerErrorComponent, i6.NzResultUnauthorizedComponent], styles: ["\n      nz-result {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzResultComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-result',
                exportAs: 'nzResult',
                templateUrl: './nz-result.component.html',
                providers: [NzUpdateHostClassService],
                styles: [
                    `
      nz-result {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }]; }, { nzIcon: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }], nzSubTitle: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0LmNvbXBvbmVudC50cyIsIm56LXJlc3VsdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQTBCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pJLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7SUNMeEQsNkJBQ0U7SUFBQSx1QkFBOEM7SUFDaEQsMEJBQWU7OztJQURGLGVBQWU7SUFBZixzQ0FBZTs7O0lBRjlCLDZCQUNFO0lBQUEsa0hBQ0U7SUFFSiwwQkFBZTs7O0lBSEMsZUFBOEI7SUFBOUIsc0RBQThCOzs7SUFJOUMseUNBQW9EOzs7SUFOdEQsNkJBQ0U7SUFBQSxtR0FDRTtJQUlGLGlGQUFvRDtJQUN0RCwwQkFBZTs7O0lBTkMsZUFBWTtJQUFaLG9DQUFZO0lBS2QsZUFBYTtJQUFiLHFDQUFhOzs7SUFLdkIsc0NBQWlFOzs7SUFDakUseUNBQXVFOzs7SUFDdkUseUNBQXVFOzs7SUFIekUsZ0NBQ0U7SUFBQSxnSEFBMkM7SUFDM0Msc0hBQThDO0lBQzlDLHNIQUE4QztJQUNoRCwwQkFBZTs7O0lBSkQsNENBQXFCO0lBQ1osZUFBcUI7SUFBckIsb0NBQXFCO0lBQ2xCLGVBQXFCO0lBQXJCLG9DQUFxQjtJQUNyQixlQUFxQjtJQUFyQixvQ0FBcUI7OztJQU9qRCwrQkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTTs7O0lBREosZUFDRjtJQURFLGlEQUNGOzs7SUFIRiw2QkFDRTtJQUFBLGlGQUNFO0lBRUosMEJBQWU7OztJQUhpQixlQUFpQztJQUFqQyx5REFBaUM7OztJQUlqRSw0Q0FBMkQ7OztJQUd6RCwrQkFD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QVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsTUFBTSxFQUFFO29CQUNOOzs7O0tBSUM7aUJBQ0Y7YUFDRjs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBOelJlc3VsdEljb25UeXBlID0gJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICdpbmZvJyB8ICd3YXJuaW5nJztcclxuZXhwb3J0IHR5cGUgTnpFeGNlcHRpb25TdGF0dXNUeXBlID0gJzQwNCcgfCAnNTAwJyB8ICc0MDMnO1xyXG5leHBvcnQgdHlwZSBOelJlc3VsdFN0YXR1c1R5cGUgPSBOekV4Y2VwdGlvblN0YXR1c1R5cGUgfCBOelJlc3VsdEljb25UeXBlO1xyXG5cclxuY29uc3QgSWNvbk1hcCA9IHtcclxuICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlJyxcclxuICBlcnJvcjogJ2Nsb3NlLWNpcmNsZScsXHJcbiAgaW5mbzogJ2V4Y2xhbWF0aW9uLWNpcmNsZScsXHJcbiAgd2FybmluZzogJ3dhcm5pbmcnXHJcbn07XHJcbmNvbnN0IEV4Y2VwdGlvblN0YXR1cyA9IFsnNDA0JywgJzUwMCcsICc0MDMnXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1yZXN1bHQnLFxyXG4gIGV4cG9ydEFzOiAnbnpSZXN1bHQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LXJlc3VsdCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbnpJY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56UmVzdWx0U3RhdHVzVHlwZSA9ICdpbmZvJztcclxuICBASW5wdXQoKSBuelN1YlRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpFeHRyYT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBpY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgaXNFeGNlcHRpb24gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdHVzSWNvbigpO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdGF0dXNJY29uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaWNvbiA9IHRoaXMubnpJY29uO1xyXG5cclxuICAgIHRoaXMuaXNFeGNlcHRpb24gPSBFeGNlcHRpb25TdGF0dXMuaW5kZXhPZih0aGlzLm56U3RhdHVzKSAhPT0gLTE7XHJcbiAgICB0aGlzLmljb24gPSBpY29uXHJcbiAgICAgID8gdHlwZW9mIGljb24gPT09ICdzdHJpbmcnXHJcbiAgICAgICAgPyBJY29uTWFwW2ljb24gYXMgTnpSZXN1bHRJY29uVHlwZV0gfHwgaWNvblxyXG4gICAgICAgIDogaWNvblxyXG4gICAgICA6IHRoaXMuaXNFeGNlcHRpb25cclxuICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgOiBJY29uTWFwW3RoaXMubnpTdGF0dXMgYXMgTnpSZXN1bHRJY29uVHlwZV07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4ID0gJ2FudC1yZXN1bHQnO1xyXG5cclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbcHJlZml4XTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeH0tJHt0aGlzLm56U3RhdHVzfWBdOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPCEtLSBJY29uIC0tPlxyXG48ZGl2IGNsYXNzPVwiYW50LXJlc3VsdC1pY29uXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0V4Y2VwdGlvbjsgZWxzZSBleGNlcHRpb25UcGxcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpY29uXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpY29uXCI+XHJcbiAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImljb25cIiBuelRoZW1lPVwiZmlsbFwiPjwvaT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIWljb25cIiBzZWxlY3Q9XCJbbnotcmVzdWx0LWljb25dXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8bmctdGVtcGxhdGUgI2V4Y2VwdGlvblRwbD5cclxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIm56U3RhdHVzXCI+XHJcbiAgICAgIDxuei1yZXN1bHQtbm90LWZvdW5kICpuZ1N3aXRjaENhc2U9XCInNDA0J1wiPjwvbnotcmVzdWx0LW5vdC1mb3VuZD5cclxuICAgICAgPG56LXJlc3VsdC1zZXJ2ZXItZXJyb3IgKm5nU3dpdGNoQ2FzZT1cIic1MDAnXCI+PC9uei1yZXN1bHQtc2VydmVyLWVycm9yPlxyXG4gICAgICA8bnotcmVzdWx0LXVuYXV0aG9yaXplZCAqbmdTd2l0Y2hDYXNlPVwiJzQwMydcIj48L256LXJlc3VsdC11bmF1dGhvcml6ZWQ+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuXHJcbjwhLS0gVGl0bGUgYW5kIHN1YlRpdGxlIC0tPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibnpUaXRsZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtcmVzdWx0LXRpdGxlXCIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+XHJcbiAgICB7eyBuelRpdGxlIH19XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48bmctY29udGVudCAqbmdJZj1cIiFuelRpdGxlXCIgc2VsZWN0PVwiZGl2W256LXJlc3VsdC10aXRsZV1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibnpTdWJUaXRsZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtcmVzdWx0LXN1YnRpdGxlXCIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelN1YlRpdGxlXCI+XHJcbiAgICB7eyBuelN1YlRpdGxlIH19XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48bmctY29udGVudCAqbmdJZj1cIiFuelN1YlRpdGxlXCIgc2VsZWN0PVwiZGl2W256LXJlc3VsdC1zdWJ0aXRsZV1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG48IS0tIENvbnRlbnQgLS0+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIm56LXJlc3VsdC1jb250ZW50LCBbbnotcmVzdWx0LWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuPCEtLSBFeHRyYSAtLT5cclxuPGRpdiBjbGFzcz1cImFudC1yZXN1bHQtZXh0cmFcIiAqbmdJZj1cIm56RXh0cmFcIj5cclxuICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpFeHRyYVwiPlxyXG4gICAge3sgbnpFeHRyYSB9fVxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPG5nLWNvbnRlbnQgKm5nSWY9XCIhbnpFeHRyYVwiIHNlbGVjdD1cImRpdltuei1yZXN1bHQtZXh0cmFdXCI+PC9uZy1jb250ZW50PlxyXG4iXX0=