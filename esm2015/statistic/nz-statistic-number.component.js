/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, LOCALE_ID, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = [1, "ant-statistic-content-value"];
const _c1 = function (a0) { return { $implicit: a0 }; };
function NzStatisticNumberComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 2);
} if (rf & 2) {
    const ctx_r293 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r293.nzValueTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r293.nzValue));
} }
function NzStatisticNumberComponent_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r295 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r295.displayInt);
} }
function NzStatisticNumberComponent_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r296 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r296.displayDecimal);
} }
function NzStatisticNumberComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzStatisticNumberComponent_ng_container_1_span_1_Template, 2, 1, "span", 3);
    i0.ɵɵtemplate(2, NzStatisticNumberComponent_ng_container_1_span_2_Template, 2, 1, "span", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r294 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r294.displayInt);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r294.displayDecimal);
} }
export class NzStatisticNumberComponent {
    constructor(locale_id) {
        this.locale_id = locale_id;
        this.displayInt = '';
        this.displayDecimal = '';
    }
    ngOnChanges() {
        this.formatNumber();
    }
    formatNumber() {
        const decimalSeparator = typeof this.nzValue === 'number' ? '.' : getLocaleNumberSymbol(this.locale_id, NumberSymbol.Decimal);
        const value = String(this.nzValue);
        const [int, decimal] = value.split(decimalSeparator);
        this.displayInt = int;
        this.displayDecimal = decimal ? `${decimalSeparator}${decimal}` : '';
    }
}
/** @nocollapse */ NzStatisticNumberComponent.ɵfac = function NzStatisticNumberComponent_Factory(t) { return new (t || NzStatisticNumberComponent)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
/** @nocollapse */ NzStatisticNumberComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzStatisticNumberComponent, selectors: [["nz-statistic-number"]], hostBindings: function NzStatisticNumberComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵelementHostAttrs(_c0);
    } }, inputs: { nzValue: "nzValue", nzValueTemplate: "nzValueTemplate" }, exportAs: ["nzStatisticNumber"], features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ant-statistic-content-value-int", 4, "ngIf"], ["class", "ant-statistic-content-value-decimal", 4, "ngIf"], [1, "ant-statistic-content-value-int"], [1, "ant-statistic-content-value-decimal"]], template: function NzStatisticNumberComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NzStatisticNumberComponent_ng_container_0_Template, 1, 4, "ng-container", 0);
        i0.ɵɵtemplate(1, NzStatisticNumberComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.nzValueTemplate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.nzValueTemplate);
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet], styles: ["nz-number { display: inline }"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzStatisticNumberComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-statistic-number',
                exportAs: 'nzStatisticNumber',
                templateUrl: './nz-statistic-number.component.html',
                host: {
                    class: 'ant-statistic-content-value'
                },
                styles: ['nz-number { display: inline }']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, { nzValue: [{
            type: Input
        }], nzValueTemplate: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3N0YXRpc3RpYy8iLCJzb3VyY2VzIjpbIm56LXN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50LnRzIiwibnotc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBYSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ1R4SSwyQkFLZTs7O0lBSGIsMkRBQW9DLHlFQUFBOzs7SUFLcEMsK0JBQWlFO0lBQUEsWUFBZ0I7SUFBQSxpQkFBTzs7O0lBQXZCLGVBQWdCO0lBQWhCLHlDQUFnQjs7O0lBQ2pGLCtCQUF5RTtJQUFBLFlBRXZFO0lBQUEsaUJBQU87OztJQUZnRSxlQUV2RTtJQUZ1RSw2Q0FFdkU7OztJQUpKLDZCQUNFO0lBQUEsNEZBQWlFO0lBQ2pFLDRGQUF5RTtJQUczRSwwQkFBZTs7O0lBSlAsZUFBa0I7SUFBbEIsMENBQWtCO0lBQ2xCLGVBQXNCO0lBQXRCLDhDQUFzQjs7QURnQjlCLE1BQU0sT0FBTywwQkFBMEI7SUFPckMsWUFBdUMsU0FBaUI7UUFBakIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUh4RCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO0lBRXVDLENBQUM7SUFFNUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sWUFBWTtRQUNsQixNQUFNLGdCQUFnQixHQUFXLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEksTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7O29HQXBCVSwwQkFBMEIsdUJBT2pCLFNBQVM7K0RBUGxCLDBCQUEwQjs7O1FDeEJ2Qyw2RkFLQTtRQUNBLDZGQUNFOztRQU5BLDBDQUF1QjtRQUtYLGVBQXdCO1FBQXhCLDJDQUF3Qjs7a0REa0J6QiwwQkFBMEI7Y0FadEMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSw2QkFBNkI7aUJBQ3JDO2dCQUNELE1BQU0sRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzFDOztzQkFRYyxNQUFNO3VCQUFDLFNBQVM7O2tCQU41QixLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBnZXRMb2NhbGVOdW1iZXJTeW1ib2wsIE51bWJlclN5bWJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIExPQ0FMRV9JRCwgT25DaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpTdGF0aXN0aWNWYWx1ZVR5cGUgfSBmcm9tICcuL256LXN0YXRpc3RpYy1kZWZpbml0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yOiAnbnotc3RhdGlzdGljLW51bWJlcicsXHJcbiAgZXhwb3J0QXM6ICduelN0YXRpc3RpY051bWJlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LXN0YXRpc3RpYy1jb250ZW50LXZhbHVlJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbJ256LW51bWJlciB7IGRpc3BsYXk6IGlubGluZSB9J11cclxufSlcclxuZXhwb3J0IGNsYXNzIE56U3RhdGlzdGljTnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuelZhbHVlOiBOelN0YXRpc3RpY1ZhbHVlVHlwZTtcclxuICBASW5wdXQoKSBuelZhbHVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9PjtcclxuXHJcbiAgZGlzcGxheUludCA9ICcnO1xyXG4gIGRpc3BsYXlEZWNpbWFsID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZV9pZDogc3RyaW5nKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9ybWF0TnVtYmVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdE51bWJlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRlY2ltYWxTZXBhcmF0b3I6IHN0cmluZyA9IHR5cGVvZiB0aGlzLm56VmFsdWUgPT09ICdudW1iZXInID8gJy4nIDogZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKHRoaXMubG9jYWxlX2lkLCBOdW1iZXJTeW1ib2wuRGVjaW1hbCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IFN0cmluZyh0aGlzLm56VmFsdWUpO1xyXG4gICAgY29uc3QgW2ludCwgZGVjaW1hbF0gPSB2YWx1ZS5zcGxpdChkZWNpbWFsU2VwYXJhdG9yKTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXlJbnQgPSBpbnQ7XHJcbiAgICB0aGlzLmRpc3BsYXlEZWNpbWFsID0gZGVjaW1hbCA/IGAke2RlY2ltYWxTZXBhcmF0b3J9JHtkZWNpbWFsfWAgOiAnJztcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lclxyXG4gICpuZ0lmPVwibnpWYWx1ZVRlbXBsYXRlXCJcclxuICBbbmdUZW1wbGF0ZU91dGxldF09XCJuelZhbHVlVGVtcGxhdGVcIlxyXG4gIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbnpWYWx1ZSB9XCJcclxuPlxyXG48L25nLWNvbnRhaW5lcj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuelZhbHVlVGVtcGxhdGVcIj5cclxuICA8c3BhbiAqbmdJZj1cImRpc3BsYXlJbnRcIiBjbGFzcz1cImFudC1zdGF0aXN0aWMtY29udGVudC12YWx1ZS1pbnRcIj57eyBkaXNwbGF5SW50IH19PC9zcGFuPlxyXG4gIDxzcGFuICpuZ0lmPVwiZGlzcGxheURlY2ltYWxcIiBjbGFzcz1cImFudC1zdGF0aXN0aWMtY29udGVudC12YWx1ZS1kZWNpbWFsXCI+e3tcclxuICAgIGRpc3BsYXlEZWNpbWFsXHJcbiAgfX08L3NwYW4+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=