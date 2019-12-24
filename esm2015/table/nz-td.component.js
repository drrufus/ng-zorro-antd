import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean, isNotNil, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/checkbox";
import * as i4 from "@angular/forms";
function NzTdComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    const ctx_r2616 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("padding-left", ctx_r2616.nzIndentSize, "px");
} }
function NzTdComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r2621 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 5);
    i0.ɵɵlistener("ngModelChange", function NzTdComponent_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2621); const ctx_r2620 = i0.ɵɵnextContext(); return ctx_r2620.nzChecked = $event; })("ngModelChange", function NzTdComponent_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2621); const ctx_r2622 = i0.ɵɵnextContext(); return ctx_r2622.nzCheckedChange.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2617 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzDisabled", ctx_r2617.nzDisabled)("ngModel", ctx_r2617.nzChecked)("nzIndeterminate", ctx_r2617.nzIndeterminate);
} }
function NzTdComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 6);
} }
function NzTdComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r2624 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵlistener("click", function NzTdComponent_span_3_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r2624); const ctx_r2623 = i0.ɵɵnextContext(); return ctx_r2623.expandChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2619 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-table-row-expanded", ctx_r2619.nzExpand)("ant-table-row-collapsed", !ctx_r2619.nzExpand);
} }
const _c0 = ["*"];
export class NzTdComponent {
    constructor(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzExpand = false;
        this.nzShowExpand = false;
        this.nzShowCheckbox = false;
        this.nzBreakWord = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
    }
    expandChange(e) {
        e.stopPropagation();
        this.nzExpand = !this.nzExpand;
        this.nzExpandChange.emit(this.nzExpand);
    }
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`ant-table-row-expand-icon-cell`]: this.nzShowExpand && !isNotNil(this.nzIndentSize),
            [`ant-table-selection-column`]: this.nzShowCheckbox,
            [`ant-table-td-left-sticky`]: isNotNil(this.nzLeft),
            [`ant-table-td-right-sticky`]: isNotNil(this.nzRight)
        });
    }
    ngOnChanges(changes) {
        if (changes.nzIndentSize || changes.nzShowExpand || changes.nzShowCheckbox || changes.nzRight || changes.nzLeft) {
            this.setClassMap();
        }
    }
}
/** @nocollapse */ NzTdComponent.ɵfac = function NzTdComponent_Factory(t) { return new (t || NzTdComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService)); };
/** @nocollapse */ NzTdComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTdComponent, selectors: [["td", 9, "nz-disable-td", 3, "mat-cell", ""]], hostBindings: function NzTdComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(4);
    } if (rf & 2) {
        i0.ɵɵstyleProp("left", ctx.nzLeft)("right", ctx.nzRight)("text-align", ctx.nzAlign)("word-break", ctx.nzBreakWord ? "break-all" : "");
    } }, inputs: { nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzLeft: "nzLeft", nzRight: "nzRight", nzAlign: "nzAlign", nzIndentSize: "nzIndentSize", nzExpand: "nzExpand", nzShowExpand: "nzShowExpand", nzShowCheckbox: "nzShowCheckbox", nzBreakWord: "nzBreakWord" }, outputs: { nzCheckedChange: "nzCheckedChange", nzExpandChange: "nzExpandChange" }, features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 5, vars: 4, consts: [["class", "ant-table-row-indent", 3, "padding-left", 4, "ngIf"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange", 4, "ngIf"], ["class", "ant-table-row-expand-icon ant-table-row-spaced", 4, "ngIf"], ["class", "ant-table-row-expand-icon", 3, "ant-table-row-expanded", "ant-table-row-collapsed", "click", 4, "ngIf"], [1, "ant-table-row-indent"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange"], [1, "ant-table-row-expand-icon", "ant-table-row-spaced"], [1, "ant-table-row-expand-icon", 3, "click"]], template: function NzTdComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzTdComponent_span_0_Template, 1, 1, "span", 0);
        i0.ɵɵtemplate(1, NzTdComponent_label_1_Template, 1, 3, "label", 1);
        i0.ɵɵtemplate(2, NzTdComponent_span_2_Template, 1, 0, "span", 2);
        i0.ɵɵtemplate(3, NzTdComponent_span_3_Template, 1, 2, "span", 3);
        i0.ɵɵprojection(4);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.nzIndentSize >= 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzShowCheckbox);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.nzShowExpand && ctx.nzIndentSize >= 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzShowExpand);
    } }, directives: [i2.NgIf, i3.NzCheckboxComponent, i4.NgControlStatus, i4.NgModel], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTdComponent.prototype, "nzExpand", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTdComponent.prototype, "nzShowExpand", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTdComponent.prototype, "nzShowCheckbox", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTdComponent.prototype, "nzBreakWord", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTdComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'td:not(.nz-disable-td):not([mat-cell])',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-td.component.html',
                host: {
                    '[style.left]': 'nzLeft',
                    '[style.right]': 'nzRight',
                    '[style.text-align]': 'nzAlign',
                    '[style.word-break]': `nzBreakWord ? 'break-all' : ''`
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzUpdateHostClassService }]; }, { nzChecked: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzIndeterminate: [{
            type: Input
        }], nzLeft: [{
            type: Input
        }], nzRight: [{
            type: Input
        }], nzAlign: [{
            type: Input
        }], nzIndentSize: [{
            type: Input
        }], nzExpand: [{
            type: Input
        }], nzShowExpand: [{
            type: Input
        }], nzShowCheckbox: [{
            type: Input
        }], nzBreakWord: [{
            type: Input
        }], nzCheckedChange: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRkLmNvbXBvbmVudC50cyIsIm56LXRkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7SUNwQnRGLDBCQUlROzs7SUFETiw0REFBc0M7Ozs7SUFFeEMsZ0NBUVE7SUFKTix1TkFBdUIsMEtBRU4sc0NBQTRCLElBRnRCO0lBSXpCLGlCQUFROzs7SUFMTixpREFBeUIsZ0NBQUEsOENBQUE7OztJQU0zQiwwQkFJTzs7OztJQUNQLCtCQU9PO0lBRkwsdU1BQThCO0lBRWhDLGlCQUFPOzs7SUFKTCw0REFBeUMsZ0RBQUE7OztBRGUzQyxNQUFNLE9BQU8sYUFBYTtJQThCeEIsWUFBb0IsVUFBc0IsRUFBVSx3QkFBa0Q7UUFBbEYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUE3QjdGLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUtSLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDMUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzlDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQWlCeUMsQ0FBQztJQWYxRyxZQUFZLENBQUMsQ0FBUTtRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUMzRSxDQUFDLGdDQUFnQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3JGLENBQUMsNEJBQTRCLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuRCxDQUFDLDBCQUEwQixDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbkQsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3RELENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLGNBQWMsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDL0csSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7MEVBcENVLGFBQWE7a0RBQWIsYUFBYTs7Ozt5YUFYYixDQUFDLHdCQUF3QixDQUFDOztRQzFCdkMsZ0VBSUM7UUFDRCxrRUFRQTtRQUNBLGdFQUlBO1FBQ0EsZ0VBT0E7UUFDQSxrQkFBWTs7UUF6QlYsNENBQXlCO1FBSXpCLGVBQXNCO1FBQXRCLHlDQUFzQjtRQVN0QixlQUEwQztRQUExQyxpRUFBMEM7UUFLMUMsZUFBb0I7UUFBcEIsdUNBQW9COztBRHlCSztJQUFmLFlBQVksRUFBRTs7K0NBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFOzttREFBc0I7QUFDckI7SUFBZixZQUFZLEVBQUU7O3FEQUF3QjtBQUN2QjtJQUFmLFlBQVksRUFBRTs7a0RBQXFCO2tEQVhsQyxhQUFhO2NBZnpCLFNBQVM7ZUFBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixjQUFjLEVBQUUsUUFBUTtvQkFDeEIsZUFBZSxFQUFFLFNBQVM7b0JBQzFCLG9CQUFvQixFQUFFLFNBQVM7b0JBQy9CLG9CQUFvQixFQUFFLGdDQUFnQztpQkFDdkQ7YUFDRjs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzTm90TmlsLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAndGQ6bm90KC5uei1kaXNhYmxlLXRkKTpub3QoW21hdC1jZWxsXSknLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbc3R5bGUubGVmdF0nOiAnbnpMZWZ0JyxcclxuICAgICdbc3R5bGUucmlnaHRdJzogJ256UmlnaHQnLFxyXG4gICAgJ1tzdHlsZS50ZXh0LWFsaWduXSc6ICduekFsaWduJyxcclxuICAgICdbc3R5bGUud29yZC1icmVha10nOiBgbnpCcmVha1dvcmQgPyAnYnJlYWstYWxsJyA6ICcnYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56Q2hlY2tlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekxlZnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelJpZ2h0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpBbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInO1xyXG4gIEBJbnB1dCgpIG56SW5kZW50U2l6ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekV4cGFuZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93Q2hlY2tib3ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCcmVha1dvcmQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgZXhwYW5kQ2hhbmdlKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uekV4cGFuZCA9ICF0aGlzLm56RXhwYW5kO1xyXG4gICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KHRoaXMubnpFeHBhbmQpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW2BhbnQtdGFibGUtcm93LWV4cGFuZC1pY29uLWNlbGxgXTogdGhpcy5uelNob3dFeHBhbmQgJiYgIWlzTm90TmlsKHRoaXMubnpJbmRlbnRTaXplKSxcclxuICAgICAgW2BhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbmBdOiB0aGlzLm56U2hvd0NoZWNrYm94LFxyXG4gICAgICBbYGFudC10YWJsZS10ZC1sZWZ0LXN0aWNreWBdOiBpc05vdE5pbCh0aGlzLm56TGVmdCksXHJcbiAgICAgIFtgYW50LXRhYmxlLXRkLXJpZ2h0LXN0aWNreWBdOiBpc05vdE5pbCh0aGlzLm56UmlnaHQpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpJbmRlbnRTaXplIHx8IGNoYW5nZXMubnpTaG93RXhwYW5kIHx8IGNoYW5nZXMubnpTaG93Q2hlY2tib3ggfHwgY2hhbmdlcy5uelJpZ2h0IHx8IGNoYW5nZXMubnpMZWZ0KSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPHNwYW5cclxuICBjbGFzcz1cImFudC10YWJsZS1yb3ctaW5kZW50XCJcclxuICAqbmdJZj1cIm56SW5kZW50U2l6ZSA+PSAwXCJcclxuICBbc3R5bGUucGFkZGluZy1sZWZ0LnB4XT1cIm56SW5kZW50U2l6ZVwiXHJcbj48L3NwYW4+XHJcbjxsYWJlbFxyXG4gICpuZ0lmPVwibnpTaG93Q2hlY2tib3hcIlxyXG4gIG56LWNoZWNrYm94XHJcbiAgW256RGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXHJcbiAgWyhuZ01vZGVsKV09XCJuekNoZWNrZWRcIlxyXG4gIFtuekluZGV0ZXJtaW5hdGVdPVwibnpJbmRldGVybWluYXRlXCJcclxuICAobmdNb2RlbENoYW5nZSk9XCJuekNoZWNrZWRDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuPlxyXG48L2xhYmVsPlxyXG48c3BhblxyXG4gICpuZ0lmPVwiIW56U2hvd0V4cGFuZCAmJiBuekluZGVudFNpemUgPj0gMFwiXHJcbiAgY2xhc3M9XCJhbnQtdGFibGUtcm93LWV4cGFuZC1pY29uIGFudC10YWJsZS1yb3ctc3BhY2VkXCJcclxuPlxyXG48L3NwYW4+XHJcbjxzcGFuXHJcbiAgKm5nSWY9XCJuelNob3dFeHBhbmRcIlxyXG4gIGNsYXNzPVwiYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvblwiXHJcbiAgW2NsYXNzLmFudC10YWJsZS1yb3ctZXhwYW5kZWRdPVwibnpFeHBhbmRcIlxyXG4gIFtjbGFzcy5hbnQtdGFibGUtcm93LWNvbGxhcHNlZF09XCIhbnpFeHBhbmRcIlxyXG4gIChjbGljayk9XCJleHBhbmRDaGFuZ2UoJGV2ZW50KVwiXHJcbj5cclxuPC9zcGFuPlxyXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==