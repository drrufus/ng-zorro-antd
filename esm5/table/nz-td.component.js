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
    var ctx_r2717 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("padding-left", ctx_r2717.nzIndentSize, "px");
} }
function NzTdComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    var _r2722 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 5);
    i0.ɵɵlistener("ngModelChange", function NzTdComponent_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2722); var ctx_r2721 = i0.ɵɵnextContext(); return ctx_r2721.nzChecked = $event; })("ngModelChange", function NzTdComponent_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2722); var ctx_r2723 = i0.ɵɵnextContext(); return ctx_r2723.nzCheckedChange.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2718 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzDisabled", ctx_r2718.nzDisabled)("ngModel", ctx_r2718.nzChecked)("nzIndeterminate", ctx_r2718.nzIndeterminate);
} }
function NzTdComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 6);
} }
function NzTdComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    var _r2725 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵlistener("click", function NzTdComponent_span_3_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r2725); var ctx_r2724 = i0.ɵɵnextContext(); return ctx_r2724.expandChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2720 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-table-row-expanded", ctx_r2720.nzExpand)("ant-table-row-collapsed", !ctx_r2720.nzExpand);
} }
var _c0 = ["*"];
var NzTdComponent = /** @class */ (function () {
    function NzTdComponent(elementRef, nzUpdateHostClassService) {
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
    NzTdComponent.prototype.expandChange = function (e) {
        e.stopPropagation();
        this.nzExpand = !this.nzExpand;
        this.nzExpandChange.emit(this.nzExpand);
    };
    NzTdComponent.prototype.setClassMap = function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["ant-table-row-expand-icon-cell"] = this.nzShowExpand && !isNotNil(this.nzIndentSize),
            _a["ant-table-selection-column"] = this.nzShowCheckbox,
            _a["ant-table-td-left-sticky"] = isNotNil(this.nzLeft),
            _a["ant-table-td-right-sticky"] = isNotNil(this.nzRight),
            _a));
    };
    NzTdComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzIndentSize || changes.nzShowExpand || changes.nzShowCheckbox || changes.nzRight || changes.nzLeft) {
            this.setClassMap();
        }
    };
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
    return NzTdComponent;
}());
export { NzTdComponent };
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
                    '[style.word-break]': "nzBreakWord ? 'break-all' : ''"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRkLmNvbXBvbmVudC50cyIsIm56LXRkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7SUNwQnRGLDBCQUlROzs7SUFETiw0REFBc0M7Ozs7SUFFeEMsZ0NBUVE7SUFKTixxTkFBdUIsd0tBRU4sc0NBQTRCLElBRnRCO0lBSXpCLGlCQUFROzs7SUFMTixpREFBeUIsZ0NBQUEsOENBQUE7OztJQU0zQiwwQkFJTzs7OztJQUNQLCtCQU9PO0lBRkwscU1BQThCO0lBRWhDLGlCQUFPOzs7SUFKTCw0REFBeUMsZ0RBQUE7OztBREEzQztJQTZDRSx1QkFBb0IsVUFBc0IsRUFBVSx3QkFBa0Q7UUFBbEYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUE3QjdGLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUtSLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDMUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzlDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQWlCeUMsQ0FBQztJQWYxRyxvQ0FBWSxHQUFaLFVBQWEsQ0FBUTtRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxtQ0FBVyxHQUFYOztRQUNFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO1lBQ3pFLEdBQUMsZ0NBQWdDLElBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3JGLEdBQUMsNEJBQTRCLElBQUcsSUFBSSxDQUFDLGNBQWM7WUFDbkQsR0FBQywwQkFBMEIsSUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNuRCxHQUFDLDJCQUEyQixJQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNyRCxDQUFDO0lBQ0wsQ0FBQztJQUlELG1DQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUMvRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzhFQXBDVSxhQUFhO3NEQUFiLGFBQWE7Ozs7NmFBWGIsQ0FBQyx3QkFBd0IsQ0FBQzs7WUMxQnZDLGdFQUlDO1lBQ0Qsa0VBUUE7WUFDQSxnRUFJQTtZQUNBLGdFQU9BO1lBQ0Esa0JBQVk7O1lBekJWLDRDQUF5QjtZQUl6QixlQUFzQjtZQUF0Qix5Q0FBc0I7WUFTdEIsZUFBMEM7WUFBMUMsaUVBQTBDO1lBSzFDLGVBQW9CO1lBQXBCLHVDQUFvQjs7SUR5Qks7UUFBZixZQUFZLEVBQUU7O21EQUFrQjtJQUNqQjtRQUFmLFlBQVksRUFBRTs7dURBQXNCO0lBQ3JCO1FBQWYsWUFBWSxFQUFFOzt5REFBd0I7SUFDdkI7UUFBZixZQUFZLEVBQUU7O3NEQUFxQjt3QkFoRC9DO0NBMEVDLEFBcERELElBb0RDO1NBckNZLGFBQWE7a0RBQWIsYUFBYTtjQWZ6QixTQUFTO2VBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osY0FBYyxFQUFFLFFBQVE7b0JBQ3hCLGVBQWUsRUFBRSxTQUFTO29CQUMxQixvQkFBb0IsRUFBRSxTQUFTO29CQUMvQixvQkFBb0IsRUFBRSxnQ0FBZ0M7aUJBQ3ZEO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc05vdE5pbCwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3RkOm5vdCgubnotZGlzYWJsZS10ZCk6bm90KFttYXQtY2VsbF0pJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRkLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW3N0eWxlLmxlZnRdJzogJ256TGVmdCcsXHJcbiAgICAnW3N0eWxlLnJpZ2h0XSc6ICduelJpZ2h0JyxcclxuICAgICdbc3R5bGUudGV4dC1hbGlnbl0nOiAnbnpBbGlnbicsXHJcbiAgICAnW3N0eWxlLndvcmQtYnJlYWtdJzogYG56QnJlYWtXb3JkID8gJ2JyZWFrLWFsbCcgOiAnJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuekNoZWNrZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpMZWZ0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpSaWdodDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56QWxpZ246ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJztcclxuICBASW5wdXQoKSBuekluZGVudFNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFeHBhbmQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0NoZWNrYm94ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QnJlYWtXb3JkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGV4cGFuZENoYW5nZShlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubnpFeHBhbmQgPSAhdGhpcy5uekV4cGFuZDtcclxuICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdCh0aGlzLm56RXhwYW5kKTtcclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbi1jZWxsYF06IHRoaXMubnpTaG93RXhwYW5kICYmICFpc05vdE5pbCh0aGlzLm56SW5kZW50U2l6ZSksXHJcbiAgICAgIFtgYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW5gXTogdGhpcy5uelNob3dDaGVja2JveCxcclxuICAgICAgW2BhbnQtdGFibGUtdGQtbGVmdC1zdGlja3lgXTogaXNOb3ROaWwodGhpcy5uekxlZnQpLFxyXG4gICAgICBbYGFudC10YWJsZS10ZC1yaWdodC1zdGlja3lgXTogaXNOb3ROaWwodGhpcy5uelJpZ2h0KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56SW5kZW50U2l6ZSB8fCBjaGFuZ2VzLm56U2hvd0V4cGFuZCB8fCBjaGFuZ2VzLm56U2hvd0NoZWNrYm94IHx8IGNoYW5nZXMubnpSaWdodCB8fCBjaGFuZ2VzLm56TGVmdCkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuXHJcbiAgY2xhc3M9XCJhbnQtdGFibGUtcm93LWluZGVudFwiXHJcbiAgKm5nSWY9XCJuekluZGVudFNpemUgPj0gMFwiXHJcbiAgW3N0eWxlLnBhZGRpbmctbGVmdC5weF09XCJuekluZGVudFNpemVcIlxyXG4+PC9zcGFuPlxyXG48bGFiZWxcclxuICAqbmdJZj1cIm56U2hvd0NoZWNrYm94XCJcclxuICBuei1jaGVja2JveFxyXG4gIFtuekRpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4gIFsobmdNb2RlbCldPVwibnpDaGVja2VkXCJcclxuICBbbnpJbmRldGVybWluYXRlXT1cIm56SW5kZXRlcm1pbmF0ZVwiXHJcbiAgKG5nTW9kZWxDaGFuZ2UpPVwibnpDaGVja2VkQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbj5cclxuPC9sYWJlbD5cclxuPHNwYW5cclxuICAqbmdJZj1cIiFuelNob3dFeHBhbmQgJiYgbnpJbmRlbnRTaXplID49IDBcIlxyXG4gIGNsYXNzPVwiYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbiBhbnQtdGFibGUtcm93LXNwYWNlZFwiXHJcbj5cclxuPC9zcGFuPlxyXG48c3BhblxyXG4gICpuZ0lmPVwibnpTaG93RXhwYW5kXCJcclxuICBjbGFzcz1cImFudC10YWJsZS1yb3ctZXhwYW5kLWljb25cIlxyXG4gIFtjbGFzcy5hbnQtdGFibGUtcm93LWV4cGFuZGVkXT1cIm56RXhwYW5kXCJcclxuICBbY2xhc3MuYW50LXRhYmxlLXJvdy1jb2xsYXBzZWRdPVwiIW56RXhwYW5kXCJcclxuICAoY2xpY2spPVwiZXhwYW5kQ2hhbmdlKCRldmVudClcIlxyXG4+XHJcbjwvc3Bhbj5cclxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4iXX0=