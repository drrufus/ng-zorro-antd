/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "ng-zorro-antd/core";
var _c0 = ["nz-cascader-option", ""];
function NzCascaderOptionComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
var _c1 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzCascaderOptionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzCascaderOptionComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1076 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1076.optionTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c1, ctx_r1076.option, ctx_r1076.columnIndex));
} }
function NzCascaderOptionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 4);
    i0.ɵɵpipe(1, "nzHighlight");
} if (rf & 2) {
    var ctx_r1078 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind4(1, 1, ctx_r1078.optionLabel, ctx_r1078.highlightText, "g", "ant-cascader-menu-item-keyword"), i0.ɵɵsanitizeHtml);
} }
function NzCascaderOptionComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵelement(1, "i", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1079 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r1079.option.loading ? "loading" : "right");
} }
var NzCascaderOptionComponent = /** @class */ (function () {
    function NzCascaderOptionComponent(cdr, elementRef, renderer) {
        this.cdr = cdr;
        this.optionTemplate = null;
        this.activated = false;
        this.nzLabelProperty = 'label';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
    }
    Object.defineProperty(NzCascaderOptionComponent.prototype, "optionLabel", {
        get: function () {
            return this.option[this.nzLabelProperty];
        },
        enumerable: true,
        configurable: true
    });
    NzCascaderOptionComponent.prototype.markForCheck = function () {
        this.cdr.markForCheck();
    };
    /** @nocollapse */ NzCascaderOptionComponent.ɵfac = function NzCascaderOptionComponent_Factory(t) { return new (t || NzCascaderOptionComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ NzCascaderOptionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCascaderOptionComponent, selectors: [["", "nz-cascader-option", ""]], hostBindings: function NzCascaderOptionComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(4);
        } if (rf & 2) {
            i0.ɵɵattribute("title", ctx.option.title || ctx.optionLabel);
            i0.ɵɵclassProp("ant-cascader-menu-item-active", ctx.activated)("ant-cascader-menu-item-expand", !ctx.option.isLeaf)("ant-cascader-menu-item-disabled", ctx.option.disabled);
        } }, inputs: { optionTemplate: "optionTemplate", option: "option", activated: "activated", highlightText: "highlightText", nzLabelProperty: "nzLabelProperty", columnIndex: "columnIndex" }, exportAs: ["nzCascaderOption"], attrs: _c0, decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["defaultOptionTemplate", ""], ["class", "ant-cascader-menu-item-expand-icon", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [1, "ant-cascader-menu-item-expand-icon"], ["nz-icon", "", 3, "nzType"]], template: function NzCascaderOptionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzCascaderOptionComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
            i0.ɵɵtemplate(1, NzCascaderOptionComponent_ng_template_1_Template, 2, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, NzCascaderOptionComponent_span_3_Template, 2, 1, "span", 2);
        } if (rf & 2) {
            var _r1077 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.optionTemplate)("ngIfElse", _r1077);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.option.isLeaf || (ctx.option.children == null ? null : ctx.option.children.length) || ctx.option.loading);
        } }, directives: [i1.NgIf, i1.NgTemplateOutlet, i2.NzIconDirective], pipes: [i3.NzHighlightPipe], encapsulation: 2, changeDetection: 0 });
    return NzCascaderOptionComponent;
}());
export { NzCascaderOptionComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCascaderOptionComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: '[nz-cascader-option]',
                exportAs: 'nzCascaderOption',
                templateUrl: './nz-cascader-li.component.html',
                host: {
                    '[attr.title]': 'option.title || optionLabel',
                    '[class.ant-cascader-menu-item-active]': 'activated',
                    '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                    '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { optionTemplate: [{
            type: Input
        }], option: [{
            type: Input
        }], activated: [{
            type: Input
        }], highlightText: [{
            type: Input
        }], nzLabelProperty: [{
            type: Input
        }], columnIndex: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItbGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLWxpLmNvbXBvbmVudC50cyIsIm56LWNhc2NhZGVyLWxpLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ2pCdkIsNkJBQ0U7SUFBQSx5R0FHQztJQUNILDBCQUFlOzs7SUFIWCxlQUFtQztJQUFuQywyREFBbUMsZ0dBQUE7OztJQUtyQywwQkFFUTs7OztJQUROLDBKQUEyRjs7O0lBRy9GLCtCQUlFO0lBQUEsdUJBQStEO0lBQ2pFLGlCQUFPOzs7SUFETSxlQUErQztJQUEvQyx1RUFBK0M7O0FETTVEO0lBcUJFLG1DQUFvQixHQUFzQixFQUFFLFVBQXNCLEVBQUUsUUFBbUI7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFQakMsbUJBQWMsR0FBeUMsSUFBSSxDQUFDO1FBRTVELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsb0JBQWUsR0FBRyxPQUFPLENBQUM7UUFJakMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELHNCQUFJLGtEQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBRUQsZ0RBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztzR0FsQlUseUJBQXlCO2tFQUF6Qix5QkFBeUI7Ozs7OztZQ2xDdEMsNEZBQ0U7WUFLRiwySEFDRTtZQUlGLDRFQUlFOzs7WUFmWSx5Q0FBa0Qsb0JBQUE7WUFZOUQsZUFBbUU7WUFBbkUsb0lBQW1FOztvQ0RackU7Q0FxREMsQUFoQ0QsSUFnQ0M7U0FuQlkseUJBQXlCO2tEQUF6Qix5QkFBeUI7Y0FickMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsSUFBSSxFQUFFO29CQUNKLGNBQWMsRUFBRSw2QkFBNkI7b0JBQzdDLHVDQUF1QyxFQUFFLFdBQVc7b0JBQ3BELHVDQUF1QyxFQUFFLGdCQUFnQjtvQkFDekQseUNBQXlDLEVBQUUsaUJBQWlCO2lCQUM3RDthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbiB9IGZyb20gJy4vbnotY2FzY2FkZXItZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ1tuei1jYXNjYWRlci1vcHRpb25dJyxcclxuICBleHBvcnRBczogJ256Q2FzY2FkZXJPcHRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYXNjYWRlci1saS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1thdHRyLnRpdGxlXSc6ICdvcHRpb24udGl0bGUgfHwgb3B0aW9uTGFiZWwnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1pdGVtLWFjdGl2ZV0nOiAnYWN0aXZhdGVkJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1leHBhbmRdJzogJyFvcHRpb24uaXNMZWFmJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnb3B0aW9uLmRpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG9wdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOekNhc2NhZGVyT3B0aW9uPiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbjtcclxuICBASW5wdXQoKSBhY3RpdmF0ZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBoaWdobGlnaHRUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpMYWJlbFByb3BlcnR5ID0gJ2xhYmVsJztcclxuICBASW5wdXQoKSBjb2x1bW5JbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXNjYWRlci1tZW51LWl0ZW0nKTtcclxuICB9XHJcblxyXG4gIGdldCBvcHRpb25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uW3RoaXMubnpMYWJlbFByb3BlcnR5XTtcclxuICB9XHJcblxyXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwib3B0aW9uVGVtcGxhdGU7IGVsc2UgZGVmYXVsdE9wdGlvblRlbXBsYXRlXCI+XHJcbiAgPG5nLXRlbXBsYXRlXHJcbiAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJvcHRpb25UZW1wbGF0ZVwiXHJcbiAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG9wdGlvbiwgaW5kZXg6IGNvbHVtbkluZGV4IH1cIlxyXG4gID48L25nLXRlbXBsYXRlPlxyXG48L25nLWNvbnRhaW5lcj5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0T3B0aW9uVGVtcGxhdGU+XHJcbiAgPHNwYW5cclxuICAgIFtpbm5lckhUTUxdPVwib3B0aW9uTGFiZWwgfCBuekhpZ2hsaWdodDogaGlnaGxpZ2h0VGV4dDonZyc6J2FudC1jYXNjYWRlci1tZW51LWl0ZW0ta2V5d29yZCdcIlxyXG4gID48L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxzcGFuXHJcbiAgKm5nSWY9XCIhb3B0aW9uLmlzTGVhZiB8fCBvcHRpb24uY2hpbGRyZW4/Lmxlbmd0aCB8fCBvcHRpb24ubG9hZGluZ1wiXHJcbiAgY2xhc3M9XCJhbnQtY2FzY2FkZXItbWVudS1pdGVtLWV4cGFuZC1pY29uXCJcclxuPlxyXG4gIDxpIG56LWljb24gW256VHlwZV09XCJvcHRpb24ubG9hZGluZyA/ICdsb2FkaW5nJyA6ICdyaWdodCdcIj48L2k+XHJcbjwvc3Bhbj5cclxuIl19