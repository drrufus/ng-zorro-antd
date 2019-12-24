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
const _c0 = [1, "ant-statistic"];
function NzStatisticComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r286 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r286.nzTitle);
} }
function NzStatisticComponent_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r289 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r289.nzPrefix);
} }
function NzStatisticComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtemplate(1, NzStatisticComponent_span_3_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r287 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r287.nzPrefix);
} }
function NzStatisticComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r290 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r290.nzSuffix);
} }
function NzStatisticComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtemplate(1, NzStatisticComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r288 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r288.nzSuffix);
} }
export class NzStatisticComponent {
    constructor() {
        this.nzValueStyle = {};
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotc3RhdGlzdGljLmNvbXBvbmVudC50cyIsIm56LXN0YXRpc3RpYy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNQeEcsNkJBQWdEO0lBQUEsWUFBYTtJQUFBLDBCQUFlOzs7SUFBNUIsZUFBYTtJQUFiLHNDQUFhOzs7SUFJM0QsNkJBQWlEO0lBQUEsWUFBYztJQUFBLDBCQUFlOzs7SUFBN0IsZUFBYztJQUFkLHVDQUFjOzs7SUFEakUsK0JBQ0U7SUFBQSw4RkFBaUQ7SUFDbkQsaUJBQU87OztJQURTLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBS2hELDZCQUFpRDtJQUFBLFlBQWM7SUFBQSwwQkFBZTs7O0lBQTdCLGVBQWM7SUFBZCx1Q0FBYzs7O0lBRGpFLCtCQUNFO0lBQUEsOEZBQWlEO0lBQ25ELGlCQUFPOzs7SUFEUyxlQUFrQztJQUFsQywwREFBa0M7O0FEWXBELE1BQU0sT0FBTyxvQkFBb0I7SUFYakM7UUFnQlcsaUJBQVksR0FBRyxFQUFFLENBQUM7S0FFNUI7O3dGQVBZLG9CQUFvQjt5REFBcEIsb0JBQW9COzs7UUN0QmpDLDhCQUNFO1FBQUEsdUZBQWdEO1FBQ2xELGlCQUFNO1FBQ04sOEJBQ0U7UUFBQSx1RUFDRTtRQUVGLHlDQUNzQjtRQUN0Qix1RUFDRTtRQUVKLGlCQUFNOztRQVhVLGVBQWlDO1FBQWpDLG9EQUFpQztRQUVkLGVBQXdCO1FBQXhCLDBDQUF3QjtRQUNuRCxlQUFnQjtRQUFoQixtQ0FBZ0I7UUFHRCxlQUFtQjtRQUFuQixxQ0FBbUIsd0NBQUE7UUFFbEMsZUFBZ0I7UUFBaEIsbUNBQWdCOztrRERhWCxvQkFBb0I7Y0FYaEMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGVBQWU7aUJBQ3ZCO2dCQUNELE1BQU0sRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQzdDOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56U3RhdGlzdGljVmFsdWVUeXBlIH0gZnJvbSAnLi9uei1zdGF0aXN0aWMtZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LXN0YXRpc3RpYycsXHJcbiAgZXhwb3J0QXM6ICduelN0YXRpc3RpYycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXN0YXRpc3RpYy5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtc3RhdGlzdGljJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbJ256LXN0YXRpc3RpYyB7IGRpc3BsYXk6IGJsb2NrOyB9J11cclxufSlcclxuZXhwb3J0IGNsYXNzIE56U3RhdGlzdGljQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuelByZWZpeDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpTdWZmaXg6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56VmFsdWU6IE56U3RhdGlzdGljVmFsdWVUeXBlO1xyXG4gIEBJbnB1dCgpIG56VmFsdWVTdHlsZSA9IHt9O1xyXG4gIEBJbnB1dCgpIG56VmFsdWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56U3RhdGlzdGljVmFsdWVUeXBlIH0+O1xyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtc3RhdGlzdGljLXRpdGxlXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIj57eyBuelRpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYW50LXN0YXRpc3RpYy1jb250ZW50XCIgW25nU3R5bGVdPVwibnpWYWx1ZVN0eWxlXCI+XHJcbiAgPHNwYW4gKm5nSWY9XCJuelByZWZpeFwiIGNsYXNzPVwiYW50LXN0YXRpc3RpYy1jb250ZW50LXByZWZpeFwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56UHJlZml4XCI+e3sgbnpQcmVmaXggfX08L25nLWNvbnRhaW5lcj5cclxuICA8L3NwYW4+XHJcbiAgPG56LXN0YXRpc3RpYy1udW1iZXIgW256VmFsdWVdPVwibnpWYWx1ZVwiIFtuelZhbHVlVGVtcGxhdGVdPVwibnpWYWx1ZVRlbXBsYXRlXCI+XHJcbiAgPC9uei1zdGF0aXN0aWMtbnVtYmVyPlxyXG4gIDxzcGFuICpuZ0lmPVwibnpTdWZmaXhcIiBjbGFzcz1cImFudC1zdGF0aXN0aWMtY29udGVudC1zdWZmaXhcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelN1ZmZpeFwiPnt7IG56U3VmZml4IH19PC9uZy1jb250YWluZXI+XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj5cclxuIl19