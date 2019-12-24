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
    var ctx_r733 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r733.icon);
} }
function NzResultComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzResultComponent_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r731 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r731.icon);
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
    var ctx_r722 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r722.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r722.icon);
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
    var ctx_r724 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r724.nzStatus);
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
    var ctx_r737 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r737.nzTitle, " ");
} }
function NzResultComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzResultComponent_ng_container_4_div_1_Template, 2, 1, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r725 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r725.nzTitle);
} }
function NzResultComponent_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!nzTitle"]);
} }
function NzResultComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r738 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r738.nzSubTitle, " ");
} }
function NzResultComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzResultComponent_ng_container_6_div_1_Template, 2, 1, "div", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r727 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r727.nzSubTitle);
} }
function NzResultComponent_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 3, ["*ngIf", "!nzSubTitle"]);
} }
function NzResultComponent_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r739 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r739.nzExtra, " ");
} }
function NzResultComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, NzResultComponent_div_9_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r729 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r729.nzExtra);
} }
function NzResultComponent_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 4, ["*ngIf", "!nzExtra"]);
} }
var _c0 = [[["nz-result-content"], ["", "nz-result-content", ""]], [["", "nz-result-icon", ""]], [["div", "nz-result-title", ""]], [["div", "nz-result-subtitle", ""]], [["div", "nz-result-extra", ""]]];
var _c1 = ["nz-result-content, [nz-result-content]", "[nz-result-icon]", "div[nz-result-title]", "div[nz-result-subtitle]", "div[nz-result-extra]"];
var IconMap = {
    success: 'check-circle',
    error: 'close-circle',
    info: 'exclamation-circle',
    warning: 'warning'
};
var ExceptionStatus = ['404', '500', '403'];
var NzResultComponent = /** @class */ (function () {
    function NzResultComponent(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzStatus = 'info';
        this.isException = false;
    }
    NzResultComponent.prototype.ngOnChanges = function () {
        this.setStatusIcon();
        this.setClassMap();
    };
    NzResultComponent.prototype.setStatusIcon = function () {
        var icon = this.nzIcon;
        this.isException = ExceptionStatus.indexOf(this.nzStatus) !== -1;
        this.icon = icon
            ? typeof icon === 'string'
                ? IconMap[icon] || icon
                : icon
            : this.isException
                ? undefined
                : IconMap[this.nzStatus];
    };
    NzResultComponent.prototype.setClassMap = function () {
        var _a;
        var prefix = 'ant-result';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a[prefix] = true,
            _a[prefix + "-" + this.nzStatus] = true,
            _a));
    };
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
            var _r723 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isException)("ngIfElse", _r723);
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
    return NzResultComponent;
}());
export { NzResultComponent };
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
                    "\n      nz-result {\n        display: block;\n      }\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0LmNvbXBvbmVudC50cyIsIm56LXJlc3VsdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQTBCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pJLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7SUNMeEQsNkJBQ0U7SUFBQSx1QkFBOEM7SUFDaEQsMEJBQWU7OztJQURGLGVBQWU7SUFBZixzQ0FBZTs7O0lBRjlCLDZCQUNFO0lBQUEsa0hBQ0U7SUFFSiwwQkFBZTs7O0lBSEMsZUFBOEI7SUFBOUIsc0RBQThCOzs7SUFJOUMseUNBQW9EOzs7SUFOdEQsNkJBQ0U7SUFBQSxtR0FDRTtJQUlGLGlGQUFvRDtJQUN0RCwwQkFBZTs7O0lBTkMsZUFBWTtJQUFaLG9DQUFZO0lBS2QsZUFBYTtJQUFiLHFDQUFhOzs7SUFLdkIsc0NBQWlFOzs7SUFDakUseUNBQXVFOzs7SUFDdkUseUNBQXVFOzs7SUFIekUsZ0NBQ0U7SUFBQSxnSEFBMkM7SUFDM0Msc0hBQThDO0lBQzlDLHNIQUE4QztJQUNoRCwwQkFBZTs7O0lBSkQsNENBQXFCO0lBQ1osZUFBcUI7SUFBckIsb0NBQXFCO0lBQ2xCLGVBQXFCO0lBQXJCLG9DQUFxQjtJQUNyQixlQUFxQjtJQUFyQixvQ0FBcUI7OztJQU9qRCwrQkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTTs7O0lBREosZUFDRjtJQURFLGlEQUNGOzs7SUFIRiw2QkFDRTtJQUFBLGlGQUNFO0lBRUosMEJBQWU7OztJQUhpQixlQUFpQztJQUFqQyx5REFBaUM7OztJQUlqRSw0Q0FBMkQ7OztJQUd6RCwrQkFD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QVc7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsTUFBTSxFQUFFO29CQUNOLDZEQUlDO2lCQUNGO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpSZXN1bHRJY29uVHlwZSA9ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnaW5mbycgfCAnd2FybmluZyc7XHJcbmV4cG9ydCB0eXBlIE56RXhjZXB0aW9uU3RhdHVzVHlwZSA9ICc0MDQnIHwgJzUwMCcgfCAnNDAzJztcclxuZXhwb3J0IHR5cGUgTnpSZXN1bHRTdGF0dXNUeXBlID0gTnpFeGNlcHRpb25TdGF0dXNUeXBlIHwgTnpSZXN1bHRJY29uVHlwZTtcclxuXHJcbmNvbnN0IEljb25NYXAgPSB7XHJcbiAgc3VjY2VzczogJ2NoZWNrLWNpcmNsZScsXHJcbiAgZXJyb3I6ICdjbG9zZS1jaXJjbGUnLFxyXG4gIGluZm86ICdleGNsYW1hdGlvbi1jaXJjbGUnLFxyXG4gIHdhcm5pbmc6ICd3YXJuaW5nJ1xyXG59O1xyXG5jb25zdCBFeGNlcHRpb25TdGF0dXMgPSBbJzQwNCcsICc1MDAnLCAnNDAzJ107XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotcmVzdWx0JyxcclxuICBleHBvcnRBczogJ256UmVzdWx0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmVzdWx0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1yZXN1bHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56SWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56U3RhdHVzOiBOelJlc3VsdFN0YXR1c1R5cGUgPSAnaW5mbyc7XHJcbiAgQElucHV0KCkgbnpTdWJUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56RXh0cmE/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgaWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIGlzRXhjZXB0aW9uID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXR1c0ljb24oKTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3RhdHVzSWNvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGljb24gPSB0aGlzLm56SWNvbjtcclxuXHJcbiAgICB0aGlzLmlzRXhjZXB0aW9uID0gRXhjZXB0aW9uU3RhdHVzLmluZGV4T2YodGhpcy5uelN0YXR1cykgIT09IC0xO1xyXG4gICAgdGhpcy5pY29uID0gaWNvblxyXG4gICAgICA/IHR5cGVvZiBpY29uID09PSAnc3RyaW5nJ1xyXG4gICAgICAgID8gSWNvbk1hcFtpY29uIGFzIE56UmVzdWx0SWNvblR5cGVdIHx8IGljb25cclxuICAgICAgICA6IGljb25cclxuICAgICAgOiB0aGlzLmlzRXhjZXB0aW9uXHJcbiAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgIDogSWNvbk1hcFt0aGlzLm56U3RhdHVzIGFzIE56UmVzdWx0SWNvblR5cGVdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZWZpeCA9ICdhbnQtcmVzdWx0JztcclxuXHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW3ByZWZpeF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXh9LSR7dGhpcy5uelN0YXR1c31gXTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjwhLS0gSWNvbiAtLT5cclxuPGRpdiBjbGFzcz1cImFudC1yZXN1bHQtaWNvblwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNFeGNlcHRpb247IGVsc2UgZXhjZXB0aW9uVHBsXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaWNvblwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaWNvblwiPlxyXG4gICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uXCIgbnpUaGVtZT1cImZpbGxcIj48L2k+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFpY29uXCIgc2VsZWN0PVwiW256LXJlc3VsdC1pY29uXVwiPjwvbmctY29udGVudD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPG5nLXRlbXBsYXRlICNleGNlcHRpb25UcGw+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJuelN0YXR1c1wiPlxyXG4gICAgICA8bnotcmVzdWx0LW5vdC1mb3VuZCAqbmdTd2l0Y2hDYXNlPVwiJzQwNCdcIj48L256LXJlc3VsdC1ub3QtZm91bmQ+XHJcbiAgICAgIDxuei1yZXN1bHQtc2VydmVyLWVycm9yICpuZ1N3aXRjaENhc2U9XCInNTAwJ1wiPjwvbnotcmVzdWx0LXNlcnZlci1lcnJvcj5cclxuICAgICAgPG56LXJlc3VsdC11bmF1dGhvcml6ZWQgKm5nU3dpdGNoQ2FzZT1cIic0MDMnXCI+PC9uei1yZXN1bHQtdW5hdXRob3JpemVkPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcblxyXG48IS0tIFRpdGxlIGFuZCBzdWJUaXRsZSAtLT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56VGl0bGVcIj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXJlc3VsdC10aXRsZVwiICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUaXRsZVwiPlxyXG4gICAge3sgbnpUaXRsZSB9fVxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPG5nLWNvbnRlbnQgKm5nSWY9XCIhbnpUaXRsZVwiIHNlbGVjdD1cImRpdltuei1yZXN1bHQtdGl0bGVdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56U3ViVGl0bGVcIj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXJlc3VsdC1zdWJ0aXRsZVwiICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpTdWJUaXRsZVwiPlxyXG4gICAge3sgbnpTdWJUaXRsZSB9fVxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPG5nLWNvbnRlbnQgKm5nSWY9XCIhbnpTdWJUaXRsZVwiIHNlbGVjdD1cImRpdltuei1yZXN1bHQtc3VidGl0bGVdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuPCEtLSBDb250ZW50IC0tPlxyXG48bmctY29udGVudCBzZWxlY3Q9XCJuei1yZXN1bHQtY29udGVudCwgW256LXJlc3VsdC1jb250ZW50XVwiPjwvbmctY29udGVudD5cclxuXHJcbjwhLS0gRXh0cmEgLS0+XHJcbjxkaXYgY2xhc3M9XCJhbnQtcmVzdWx0LWV4dHJhXCIgKm5nSWY9XCJuekV4dHJhXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RXh0cmFcIj5cclxuICAgIHt7IG56RXh0cmEgfX1cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbjxuZy1jb250ZW50ICpuZ0lmPVwiIW56RXh0cmFcIiBzZWxlY3Q9XCJkaXZbbnotcmVzdWx0LWV4dHJhXVwiPjwvbmctY29udGVudD5cclxuIl19