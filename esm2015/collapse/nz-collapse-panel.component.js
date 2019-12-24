import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { collapseMotion, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzCollapseComponent } from './nz-collapse.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "./nz-collapse.component";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/icon";
function NzCollapsePanelComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r385 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r385.nzExpandedIcon || "right")("nzRotate", ctx_r385.nzActive ? 90 : 0);
} }
function NzCollapsePanelComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzCollapsePanelComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r382 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r382.nzExpandedIcon);
} }
function NzCollapsePanelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r383 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r383.nzHeader);
} }
function NzCollapsePanelComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r386 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r386.nzExtra);
} }
function NzCollapsePanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, NzCollapsePanelComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r384 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r384.nzExtra);
} }
const _c0 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'collapsePanel';
export class NzCollapsePanelComponent {
    constructor(nzConfigService, cdr, nzCollapseComponent, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzCollapseComponent = nzCollapseComponent;
        this.nzActive = false;
        this.nzDisabled = false;
        this.nzActiveChange = new EventEmitter();
        this.nzRole = "tab";
        renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
    }
    clickHeader() {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.nzCollapseComponent.addPanel(this);
    }
    ngOnDestroy() {
        this.nzCollapseComponent.removePanel(this);
    }
}
/** @nocollapse */ NzCollapsePanelComponent.ɵfac = function NzCollapsePanelComponent_Factory(t) { return new (t || NzCollapsePanelComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzCollapseComponent, 1), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzCollapsePanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCollapsePanelComponent, selectors: [["nz-collapse-panel"]], hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(3);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
    } }, inputs: { nzActive: "nzActive", nzDisabled: "nzDisabled", nzShowArrow: "nzShowArrow", nzExtra: "nzExtra", nzHeader: "nzHeader", nzExpandedIcon: "nzExpandedIcon", nzRole: "nzRole" }, outputs: { nzActiveChange: "nzActiveChange" }, exportAs: ["nzCollapsePanel"], ngContentSelectors: _c0, decls: 7, vars: 7, consts: [[1, "ant-collapse-header", 3, "click"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-collapse-extra", 4, "ngIf"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"], [1, "ant-collapse-extra"]], template: function NzCollapsePanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function NzCollapsePanelComponent_Template_div_click_0_listener($event) { return ctx.clickHeader(); });
        i0.ɵɵtemplate(1, NzCollapsePanelComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, NzCollapsePanelComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        i0.ɵɵtemplate(3, NzCollapsePanelComponent_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵprojection(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("role", ctx.nzRole)("aria-expanded", ctx.nzActive);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzShowArrow);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzHeader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzExtra);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ant-collapse-content-active", ctx.nzActive);
        i0.ɵɵproperty("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
    } }, directives: [i3.NgIf, i1.NzStringTemplateOutletDirective, i4.NzIconDirective], styles: ["\n      nz-collapse-panel {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [collapseMotion] }, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzActive", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    __metadata("design:type", Boolean)
], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCollapsePanelComponent, [{
        type: Component,
        args: [{
                selector: 'nz-collapse-panel',
                exportAs: 'nzCollapsePanel',
                templateUrl: './nz-collapse-panel.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [collapseMotion],
                styles: [
                    `
      nz-collapse-panel {
        display: block;
      }
    `
                ],
                host: {
                    '[class.ant-collapse-no-arrow]': '!nzShowArrow',
                    '[class.ant-collapse-item-active]': 'nzActive',
                    '[class.ant-collapse-item-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i2.NzCollapseComponent, decorators: [{
                type: Host
            }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { nzActive: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzShowArrow: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], nzHeader: [{
            type: Input
        }], nzExpandedIcon: [{
            type: Input
        }], nzActiveChange: [{
            type: Output
        }], nzRole: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC50cyIsIm56LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztJQ3hCMUQsNkJBQ0U7SUFBQSx1QkFLSztJQUNQLDBCQUFlOzs7SUFKWCxlQUFvQztJQUFwQywyREFBb0Msd0NBQUE7OztJQUoxQyw2QkFDRTtJQUFBLDBHQUNFO0lBT0osMEJBQWU7OztJQVJDLGVBQXdDO0lBQXhDLGdFQUF3Qzs7O0lBU3hELDZCQUFpRDtJQUFBLFlBQWM7SUFBQSwwQkFBZTs7O0lBQTdCLGVBQWM7SUFBZCx1Q0FBYzs7O0lBRTdELDZCQUFnRDtJQUFBLFlBQWE7SUFBQSwwQkFBZTs7O0lBQTVCLGVBQWE7SUFBYixzQ0FBYTs7O0lBRC9ELDhCQUNFO0lBQUEsaUdBQWdEO0lBQ2xELGlCQUFNOzs7SUFEVSxlQUFpQztJQUFqQyx5REFBaUM7OztBRGVuRCxNQUFNLHdCQUF3QixHQUFHLGVBQWUsQ0FBQztBQXNCakQsTUFBTSxPQUFPLHdCQUF3QjtJQW9CbkMsWUFDUyxlQUFnQyxFQUMvQixHQUFzQixFQUNkLG1CQUF3QyxFQUN4RCxVQUFzQixFQUN0QixRQUFtQjtRQUpaLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNkLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUF0QmpDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUt6QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDdkQsV0FBTSxHQUFXLEtBQUssQ0FBQztRQW1COUIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQWxCRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBWUQsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dHQXBDVSx3QkFBd0I7NkRBQXhCLHdCQUF3Qjs7Ozs7O1FDbERyQyw4QkFDRTtRQURvRix3R0FBUyxpQkFBYSxJQUFDO1FBQzNHLDJGQUNFO1FBU0YsMkZBQWlEO1FBQ2pELHlFQUNFO1FBRUosaUJBQU07UUFDTiw4QkFLRTtRQUFBLDhCQUNFO1FBQUEsa0JBQVk7UUFDZCxpQkFBTTtRQUNSLGlCQUFNOztRQXhCRCxrQ0FBb0IsK0JBQUE7UUFDVCxlQUFtQjtRQUFuQixzQ0FBbUI7UUFVbkIsZUFBa0M7UUFBbEMscURBQWtDO1FBQ2hCLGVBQWU7UUFBZixrQ0FBZTtRQU0vQyxlQUE4QztRQUE5QywyREFBOEM7UUFDOUMsc0VBQW9EOzhNRGlCeEMsQ0FBQyxjQUFjLENBQUM7QUFlSDtJQUFmLFlBQVksRUFBRTs7MERBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFOzs0REFBb0I7QUFDeUI7SUFBM0QsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRTs7NkRBQXNCO2tEQUgvRSx3QkFBd0I7Y0FwQnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDNUIsTUFBTSxFQUFFO29CQUNOOzs7O0tBSUM7aUJBQ0Y7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLCtCQUErQixFQUFFLGNBQWM7b0JBQy9DLGtDQUFrQyxFQUFFLFVBQVU7b0JBQzlDLG9DQUFvQyxFQUFFLFlBQVk7aUJBQ25EO2FBQ0Y7O3NCQXdCSSxJQUFJOztrQkF0Qk4sS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbGxhcHNlTW90aW9uLCBJbnB1dEJvb2xlYW4sIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNvbGxhcHNlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jb2xsYXBzZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2NvbGxhcHNlUGFuZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1jb2xsYXBzZS1wYW5lbCcsXHJcbiAgZXhwb3J0QXM6ICduekNvbGxhcHNlUGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBhbmltYXRpb25zOiBbY29sbGFwc2VNb3Rpb25dLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1jb2xsYXBzZS1wYW5lbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLW5vLWFycm93XSc6ICchbnpTaG93QXJyb3cnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2UtaXRlbS1hY3RpdmVdJzogJ256QWN0aXZlJyxcclxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW0tZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFjdGl2ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgbnpTaG93QXJyb3c6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpFeHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpIZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56RXhwYW5kZWRJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQElucHV0KCkgbnpSb2xlOiBzdHJpbmcgPSBcInRhYlwiO1xyXG5cclxuICBjbGlja0hlYWRlcigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubnpDb2xsYXBzZUNvbXBvbmVudC5jbGljayh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIHByaXZhdGUgbnpDb2xsYXBzZUNvbXBvbmVudDogTnpDb2xsYXBzZUNvbXBvbmVudCxcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY29sbGFwc2UtaXRlbScpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Q29sbGFwc2VDb21wb25lbnQuYWRkUGFuZWwodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb2xsYXBzZUNvbXBvbmVudC5yZW1vdmVQYW5lbCh0aGlzKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBbYXR0ci5yb2xlXT1cIm56Um9sZVwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwibnpBY3RpdmVcIiBjbGFzcz1cImFudC1jb2xsYXBzZS1oZWFkZXJcIiAoY2xpY2spPVwiY2xpY2tIZWFkZXIoKVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelNob3dBcnJvd1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RXhwYW5kZWRJY29uXCI+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgbnotaWNvblxyXG4gICAgICAgIFtuelR5cGVdPVwibnpFeHBhbmRlZEljb24gfHwgJ3JpZ2h0J1wiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtY29sbGFwc2UtYXJyb3dcIlxyXG4gICAgICAgIFtuelJvdGF0ZV09XCJuekFjdGl2ZSA/IDkwIDogMFwiXHJcbiAgICAgID48L2k+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpIZWFkZXJcIj57eyBuekhlYWRlciB9fTwvbmctY29udGFpbmVyPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtY29sbGFwc2UtZXh0cmFcIiAqbmdJZj1cIm56RXh0cmFcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekV4dHJhXCI+e3sgbnpFeHRyYSB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdlxyXG4gIGNsYXNzPVwiYW50LWNvbGxhcHNlLWNvbnRlbnRcIlxyXG4gIFtjbGFzcy5hbnQtY29sbGFwc2UtY29udGVudC1hY3RpdmVdPVwibnpBY3RpdmVcIlxyXG4gIFtAY29sbGFwc2VNb3Rpb25dPVwibnpBY3RpdmUgPyAnZXhwYW5kZWQnIDogJ2hpZGRlbidcIlxyXG4+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1jb2xsYXBzZS1jb250ZW50LWJveFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19