/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "./nz-statistic-number.component";
var _c0 = [1, "ant-statistic"];
function NzStatisticComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r297 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r297.nzTitle);
} }
function NzStatisticComponent_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r300 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r300.nzPrefix);
} }
function NzStatisticComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtemplate(1, NzStatisticComponent_span_3_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r298 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r298.nzPrefix);
} }
function NzStatisticComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r301 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r301.nzSuffix);
} }
function NzStatisticComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtemplate(1, NzStatisticComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r299 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r299.nzSuffix);
} }
var NzStatisticComponent = /** @class */ (function () {
    function NzStatisticComponent() {
        this.nzValueStyle = {};
    }
    /** @nocollapse */ NzStatisticComponent.ɵfac = function NzStatisticComponent_Factory(t) { return new (t || NzStatisticComponent)(); };
    /** @nocollapse */ NzStatisticComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzStatisticComponent, selectors: [["nz-statistic"]], hostBindings: function NzStatisticComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵelementHostAttrs(_c0);
        } }, inputs: { nzPrefix: "nzPrefix", nzSuffix: "nzSuffix", nzTitle: "nzTitle", nzValue: "nzValue", nzValueStyle: "nzValueStyle", nzValueTemplate: "nzValueTemplate" }, exportAs: ["nzStatistic"], decls: 6, vars: 6, consts: [[1, "ant-statistic-title"], [4, "nzStringTemplateOutlet"], [1, "ant-statistic-content", 3, "ngStyle"], ["class", "ant-statistic-content-prefix", 4, "ngIf"], [3, "nzValue", "nzValueTemplate"], ["class", "ant-statistic-content-suffix", 4, "ngIf"], [1, "ant-statistic-content-prefix"], [1, "ant-statistic-content-suffix"]], template: function NzStatisticComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, NzStatisticComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, NzStatisticComponent_span_3_Template, 2, 1, "span", 3);
            i0.ɵɵelement(4, "nz-statistic-number", 4);
            i0.ɵɵtemplate(5, NzStatisticComponent_span_5_Template, 2, 1, "span", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", ctx.nzValueStyle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzPrefix);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzValue", ctx.nzValue)("nzValueTemplate", ctx.nzValueTemplate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzSuffix);
        } }, directives: [i1.NzStringTemplateOutletDirective, i2.NgStyle, i2.NgIf, i3.NzStatisticNumberComponent], styles: ["nz-statistic { display: block; }"], encapsulation: 2, changeDetection: 0 });
    return NzStatisticComponent;
}());
export { NzStatisticComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzStatisticComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-statistic',
                exportAs: 'nzStatistic',
                templateUrl: './nz-statistic.component.html',
                host: {
                    class: 'ant-statistic'
                },
                styles: ['nz-statistic { display: block; }']
            }]
    }], null, { nzPrefix: [{
            type: Input
        }], nzSuffix: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzValue: [{
            type: Input
        }], nzValueStyle: [{
            type: Input
        }], nzValueTemplate: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotc3RhdGlzdGljLmNvbXBvbmVudC50cyIsIm56LXN0YXRpc3RpYy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNQeEcsNkJBQWdEO0lBQUEsWUFBYTtJQUFBLDBCQUFlOzs7SUFBNUIsZUFBYTtJQUFiLHNDQUFhOzs7SUFJM0QsNkJBQWlEO0lBQUEsWUFBYztJQUFBLDBCQUFlOzs7SUFBN0IsZUFBYztJQUFkLHVDQUFjOzs7SUFEakUsK0JBQ0U7SUFBQSw4RkFBaUQ7SUFDbkQsaUJBQU87OztJQURTLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBS2hELDZCQUFpRDtJQUFBLFlBQWM7SUFBQSwwQkFBZTs7O0lBQTdCLGVBQWM7SUFBZCx1Q0FBYzs7O0lBRGpFLCtCQUNFO0lBQUEsOEZBQWlEO0lBQ25ELGlCQUFPOzs7SUFEUyxlQUFrQztJQUFsQywwREFBa0M7O0FEQ3BEO0lBQUE7UUFnQlcsaUJBQVksR0FBRyxFQUFFLENBQUM7S0FFNUI7NEZBUFksb0JBQW9COzZEQUFwQixvQkFBb0I7OztZQ3RCakMsOEJBQ0U7WUFBQSx1RkFBZ0Q7WUFDbEQsaUJBQU07WUFDTiw4QkFDRTtZQUFBLHVFQUNFO1lBRUYseUNBQ3NCO1lBQ3RCLHVFQUNFO1lBRUosaUJBQU07O1lBWFUsZUFBaUM7WUFBakMsb0RBQWlDO1lBRWQsZUFBd0I7WUFBeEIsMENBQXdCO1lBQ25ELGVBQWdCO1lBQWhCLG1DQUFnQjtZQUdELGVBQW1CO1lBQW5CLHFDQUFtQix3Q0FBQTtZQUVsQyxlQUFnQjtZQUFoQixtQ0FBZ0I7OytCRFR4QjtDQTZCQyxBQWxCRCxJQWtCQztTQVBZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBWGhDLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxlQUFlO2lCQUN2QjtnQkFDRCxNQUFNLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUM3Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9IGZyb20gJy4vbnotc3RhdGlzdGljLWRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1zdGF0aXN0aWMnLFxyXG4gIGV4cG9ydEFzOiAnbnpTdGF0aXN0aWMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zdGF0aXN0aWMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LXN0YXRpc3RpYydcclxuICB9LFxyXG4gIHN0eWxlczogWyduei1zdGF0aXN0aWMgeyBkaXNwbGF5OiBibG9jazsgfSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelN0YXRpc3RpY0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbnpQcmVmaXg6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56U3VmZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelZhbHVlOiBOelN0YXRpc3RpY1ZhbHVlVHlwZTtcclxuICBASW5wdXQoKSBuelZhbHVlU3R5bGUgPSB7fTtcclxuICBASW5wdXQoKSBuelZhbHVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9PjtcclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LXN0YXRpc3RpYy10aXRsZVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+e3sgbnpUaXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImFudC1zdGF0aXN0aWMtY29udGVudFwiIFtuZ1N0eWxlXT1cIm56VmFsdWVTdHlsZVwiPlxyXG4gIDxzcGFuICpuZ0lmPVwibnpQcmVmaXhcIiBjbGFzcz1cImFudC1zdGF0aXN0aWMtY29udGVudC1wcmVmaXhcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelByZWZpeFwiPnt7IG56UHJlZml4IH19PC9uZy1jb250YWluZXI+XHJcbiAgPC9zcGFuPlxyXG4gIDxuei1zdGF0aXN0aWMtbnVtYmVyIFtuelZhbHVlXT1cIm56VmFsdWVcIiBbbnpWYWx1ZVRlbXBsYXRlXT1cIm56VmFsdWVUZW1wbGF0ZVwiPlxyXG4gIDwvbnotc3RhdGlzdGljLW51bWJlcj5cclxuICA8c3BhbiAqbmdJZj1cIm56U3VmZml4XCIgY2xhc3M9XCJhbnQtc3RhdGlzdGljLWNvbnRlbnQtc3VmZml4XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpTdWZmaXhcIj57eyBuelN1ZmZpeCB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvc3Bhbj5cclxuPC9kaXY+XHJcbiJdfQ==