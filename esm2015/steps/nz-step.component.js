import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "ng-zorro-antd/icon";
const _c0 = ["processDotTemplate"];
function NzStepComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} }
function NzStepComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵelementEnd();
} }
function NzStepComponent_ng_template_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵelementEnd();
} }
function NzStepComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r770 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r770.index + 1);
} }
function NzStepComponent_ng_template_3_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r772 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", !ctx_r772.oldAPIIcon && ctx_r772.nzIcon)("ngClass", ctx_r772.oldAPIIcon && ctx_r772.nzIcon);
} }
function NzStepComponent_ng_template_3_span_3_ng_template_2_ng_template_0_Template(rf, ctx) { }
function NzStepComponent_ng_template_3_span_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzStepComponent_ng_template_3_span_3_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 17);
} if (rf & 2) {
    const ctx_r774 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r774.nzIcon);
} }
function NzStepComponent_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtemplate(1, NzStepComponent_ng_template_3_span_3_ng_container_1_Template, 2, 2, "ng-container", 14);
    i0.ɵɵtemplate(2, NzStepComponent_ng_template_3_span_3_ng_template_2_Template, 1, 1, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r773 = i0.ɵɵreference(3);
    const ctx_r771 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r771.isIconString)("ngIfElse", _r773);
} }
function NzStepComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzStepComponent_ng_template_3_span_0_Template, 2, 0, "span", 10);
    i0.ɵɵtemplate(1, NzStepComponent_ng_template_3_span_1_Template, 2, 0, "span", 10);
    i0.ɵɵtemplate(2, NzStepComponent_ng_template_3_span_2_Template, 2, 1, "span", 10);
    i0.ɵɵtemplate(3, NzStepComponent_ng_template_3_span_3_Template, 4, 2, "span", 10);
} if (rf & 2) {
    const ctx_r763 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r763.nzStatus === "finish" && !ctx_r763.nzIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r763.nzStatus === "error");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r763.nzStatus === "process" || ctx_r763.nzStatus === "wait") && !ctx_r763.nzIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r763.nzIcon);
} }
function NzStepComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 20);
} }
function NzStepComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2) { return { $implicit: a0, status: a1, index: a2 }; };
function NzStepComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtemplate(1, NzStepComponent_ng_template_4_ng_template_1_Template, 1, 0, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, NzStepComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r776 = i0.ɵɵreference(2);
    const ctx_r764 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r764.customProcessTemplate || _r776)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c1, _r776, ctx_r764.nzStatus, ctx_r764.index));
} }
function NzStepComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r765 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r765.nzTitle);
} }
function NzStepComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r779 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r779.nzSubtitle);
} }
function NzStepComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, NzStepComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r766 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r766.nzSubtitle);
} }
function NzStepComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r767 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r767.nzDescription);
} }
export class NzStepComponent {
    constructor(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.nzDisabled = false;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.isIconString = true;
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this.clickable = false;
        this.click$ = new Subject();
        this._currentIndex = 0;
        renderer.addClass(elementRef.nativeElement, 'ant-steps-item');
    }
    get nzStatus() {
        return this._status;
    }
    set nzStatus(status) {
        this._status = status;
        this.isCustomStatus = true;
    }
    get nzIcon() {
        return this._icon;
    }
    set nzIcon(value) {
        if (!(value instanceof TemplateRef)) {
            this.isIconString = true;
            this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
        }
        else {
            this.isIconString = false;
        }
        this._icon = value;
    }
    get currentIndex() {
        return this._currentIndex;
    }
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
        }
    }
    onClick() {
        if (this.clickable && this.currentIndex !== this.index && !this.nzDisabled) {
            this.click$.next(this.index);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.click$.complete();
    }
}
/** @nocollapse */ NzStepComponent.ɵfac = function NzStepComponent_Factory(t) { return new (t || NzStepComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ NzStepComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzStepComponent, selectors: [["nz-step"]], viewQuery: function NzStepComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.processDotTemplate = _t.first);
    } }, hostBindings: function NzStepComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(8);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-steps-item-wait", ctx.nzStatus === "wait")("ant-steps-item-process", ctx.nzStatus === "process")("ant-steps-item-finish", ctx.nzStatus === "finish")("ant-steps-item-error", ctx.nzStatus === "error")("ant-steps-item-active", ctx.currentIndex === ctx.index)("ant-steps-item-disabled", ctx.nzDisabled)("ant-steps-item-custom", !!ctx.nzIcon)("ant-steps-next-error", ctx.outStatus === "error" && ctx.currentIndex === ctx.index + 1);
    } }, inputs: { nzTitle: "nzTitle", nzSubtitle: "nzSubtitle", nzDescription: "nzDescription", nzDisabled: "nzDisabled", nzStatus: "nzStatus", nzIcon: "nzIcon" }, exportAs: ["nzStep"], decls: 11, vars: 8, consts: [[1, "ant-steps-item-container", 3, "tabindex", "click"], ["class", "ant-steps-item-tail", 4, "ngIf"], [1, "ant-steps-item-icon"], [3, "ngIf"], [1, "ant-steps-item-content"], [1, "ant-steps-item-title"], [4, "nzStringTemplateOutlet"], ["class", "ant-steps-item-subtitle", 4, "ngIf"], [1, "ant-steps-item-description"], [1, "ant-steps-item-tail"], ["class", "ant-steps-icon", 4, "ngIf"], [1, "ant-steps-icon"], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "close"], [4, "ngIf", "ngIfElse"], ["iconTemplate", ""], ["nz-icon", "", 3, "nzType", "ngClass"], [3, "ngTemplateOutlet"], ["processDotTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-steps-icon-dot"], [1, "ant-steps-item-subtitle"]], template: function NzStepComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function NzStepComponent_Template_div_click_0_listener($event) { return ctx.onClick(); });
        i0.ɵɵtemplate(1, NzStepComponent_div_1_Template, 1, 0, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, NzStepComponent_ng_template_3_Template, 4, 4, "ng-template", 3);
        i0.ɵɵtemplate(4, NzStepComponent_ng_template_4_Template, 4, 6, "ng-template", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵtemplate(7, NzStepComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        i0.ɵɵtemplate(8, NzStepComponent_div_8_Template, 2, 1, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 8);
        i0.ɵɵtemplate(10, NzStepComponent_ng_container_10_Template, 2, 1, "ng-container", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("tabindex", ctx.clickable && !ctx.nzDisabled ? 0 : null);
        i0.ɵɵattribute("role", ctx.clickable && !ctx.nzDisabled ? "button" : null);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.last !== true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.showProcessDot);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showProcessDot);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSubtitle);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzDescription);
    } }, directives: [i1.NgIf, i2.NzStringTemplateOutletDirective, i3.NzIconDirective, i1.NgClass, i1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzStepComponent.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzStepComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-step',
                exportAs: 'nzStep',
                preserveWhitespaces: false,
                templateUrl: './nz-step.component.html',
                host: {
                    '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                    '[class.ant-steps-item-process]': 'nzStatus === "process"',
                    '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                    '[class.ant-steps-item-error]': 'nzStatus === "error"',
                    '[class.ant-steps-item-active]': 'currentIndex === index',
                    '[class.ant-steps-item-disabled]': 'nzDisabled',
                    '[class.ant-steps-item-custom]': '!!nzIcon',
                    '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { processDotTemplate: [{
            type: ViewChild,
            args: ['processDotTemplate', { static: false }]
        }], nzTitle: [{
            type: Input
        }], nzSubtitle: [{
            type: Input
        }], nzDescription: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3N0ZXBzLyIsInNvdXJjZXMiOlsibnotc3RlcC5jb21wb25lbnQudHMiLCJuei1zdGVwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7SUNoQjdCLHlCQUE2RDs7O0lBR3pELGdDQUNHO0lBQUEsd0JBQ0Y7SUFBQSxpQkFBTzs7O0lBQ1IsZ0NBQ0c7SUFBQSx3QkFDRjtJQUFBLGlCQUFPOzs7SUFDUixnQ0FHRztJQUFBLFlBQWU7SUFBQSxpQkFDakI7OztJQURFLGVBQWU7SUFBZix3Q0FBZTs7O0lBR2hCLDZCQUNFO0lBQUEsd0JBQWlGO0lBQ25GLDBCQUFlOzs7SUFERixlQUFnQztJQUFoQyxnRUFBZ0MsbURBQUE7Ozs7SUFHM0Msb0hBQXlDOzs7SUFBNUIsa0RBQTJCOzs7SUFMNUMsZ0NBQ0U7SUFBQSx3R0FDRTtJQUVGLHVJQUNFO0lBRUosaUJBQU87Ozs7SUFOUyxlQUF1QztJQUF2Qyw0Q0FBdUMsbUJBQUE7OztJQVp2RCxpRkFDRztJQUVILGlGQUNHO0lBRUgsaUZBR0c7SUFFSCxpRkFDRTs7O0lBWjJCLHlFQUF3QztJQUd4QyxlQUE0QjtJQUE1QixvREFBNEI7SUFLdkQsZUFBa0U7SUFBbEUsNEdBQWtFO0lBR3ZDLGVBQWM7SUFBZCxzQ0FBYzs7O0lBWXZDLDJCQUF3Qzs7Ozs7SUFGNUMsZ0NBQ0U7SUFBQSxnSUFDRTtJQUVGLCtGQVFBO0lBQ0YsaUJBQU87Ozs7SUFSSCxlQUFnRTtJQUFoRSwwRUFBZ0UsaUdBQUE7OztJQWFwRSw2QkFBZ0Q7SUFBQSxZQUFhO0lBQUEsMEJBQWU7OztJQUE1QixlQUFhO0lBQWIsc0NBQWE7OztJQUUzRCw2QkFBbUQ7SUFBQSxZQUFnQjtJQUFBLDBCQUFlOzs7SUFBL0IsZUFBZ0I7SUFBaEIseUNBQWdCOzs7SUFEckUsK0JBQ0U7SUFBQSx3RkFBbUQ7SUFDckQsaUJBQU07OztJQURVLGVBQW9DO0lBQXBDLDREQUFvQzs7O0lBSXBELDZCQUFzRDtJQUFBLFlBQW1CO0lBQUEsMEJBQWU7OztJQUFsQyxlQUFtQjtJQUFuQiw0Q0FBbUI7O0FEWi9FLE1BQU0sT0FBTyxlQUFlO0lBOEQxQixZQUFvQixHQUFzQixFQUFFLFFBQW1CLEVBQUUsVUFBc0I7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF4RGpCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFZNUMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBaUJ6QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBSXBCLGNBQVMsR0FBRyxZQUFZLENBQUM7UUFDekIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFhdkIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFHeEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQXhERCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksUUFBUSxDQUFDLE1BQWM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUtELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBc0M7UUFDL0MsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUU7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQWVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxZQUFZLENBQUMsT0FBZTtRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ3pHO0lBQ0gsQ0FBQztJQVFELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7OzhFQTlFVSxlQUFlO29EQUFmLGVBQWU7Ozs7Ozs7Ozs7UUMxQzVCLDhCQU1FO1FBRkEsK0ZBQVMsYUFBUyxJQUFDO1FBRW5CLGdFQUF1RDtRQUN2RCw4QkFDRTtRQUFBLGdGQUNFO1FBb0JGLGdGQUNFO1FBZUosaUJBQU07UUFDTiw4QkFDRTtRQUFBLDhCQUNFO1FBQUEsa0ZBQWdEO1FBQ2hELGdFQUNFO1FBRUosaUJBQU07UUFDTiw4QkFDRTtRQUFBLG9GQUFzRDtRQUN4RCxpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O1FBdERKLHNFQUFnRDtRQURoRCwwRUFBd0Q7UUFJdkIsZUFBcUI7UUFBckIsd0NBQXFCO1FBRXZDLGVBQXdCO1FBQXhCLDBDQUF3QjtRQXFCeEIsZUFBdUI7UUFBdkIseUNBQXVCO1FBbUJwQixlQUFpQztRQUFqQyxvREFBaUM7UUFDMUMsZUFBa0I7UUFBbEIscUNBQWtCO1FBS1QsZUFBdUM7UUFBdkMsMERBQXVDOztBRE5oQztJQUFmLFlBQVksRUFBRTs7bURBQW9CO2tEQU5qQyxlQUFlO2NBbEIzQixTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSiw2QkFBNkIsRUFBRSxxQkFBcUI7b0JBQ3BELGdDQUFnQyxFQUFFLHdCQUF3QjtvQkFDMUQsK0JBQStCLEVBQUUsdUJBQXVCO29CQUN4RCw4QkFBOEIsRUFBRSxzQkFBc0I7b0JBQ3RELCtCQUErQixFQUFFLHdCQUF3QjtvQkFDekQsaUNBQWlDLEVBQUUsWUFBWTtvQkFDL0MsK0JBQStCLEVBQUUsVUFBVTtvQkFDM0MsOEJBQThCLEVBQUUseURBQXlEO2lCQUMxRjthQUNGOztrQkFFRSxTQUFTO21CQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBRWpELEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQWFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTmdDbGFzc1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotc3RlcCcsXHJcbiAgZXhwb3J0QXM6ICduelN0ZXAnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zdGVwLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLXdhaXRdJzogJ256U3RhdHVzID09PSBcIndhaXRcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLXByb2Nlc3NdJzogJ256U3RhdHVzID09PSBcInByb2Nlc3NcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWZpbmlzaF0nOiAnbnpTdGF0dXMgPT09IFwiZmluaXNoXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1lcnJvcl0nOiAnbnpTdGF0dXMgPT09IFwiZXJyb3JcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWFjdGl2ZV0nOiAnY3VycmVudEluZGV4ID09PSBpbmRleCcsXHJcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tY3VzdG9tXSc6ICchIW56SWNvbicsXHJcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1uZXh0LWVycm9yXSc6ICcob3V0U3RhdHVzID09PSBcImVycm9yXCIpICYmIChjdXJyZW50SW5kZXggPT09IGluZGV4ICsgMSknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdwcm9jZXNzRG90VGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJvY2Vzc0RvdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpTdWJ0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpEZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgbnpTdGF0dXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XHJcbiAgfVxyXG5cclxuICBzZXQgbnpTdGF0dXMoc3RhdHVzOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcclxuICAgIHRoaXMuaXNDdXN0b21TdGF0dXMgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaXNDdXN0b21TdGF0dXMgPSBmYWxzZTtcclxuICBwcml2YXRlIF9zdGF0dXMgPSAnd2FpdCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG56SWNvbigpOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uO1xyXG4gIH1cclxuXHJcbiAgc2V0IG56SWNvbih2YWx1ZTogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xyXG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikpIHtcclxuICAgICAgdGhpcy5pc0ljb25TdHJpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLm9sZEFQSUljb24gPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0ljb25TdHJpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIG9sZEFQSUljb24gPSB0cnVlO1xyXG4gIGlzSWNvblN0cmluZyA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfaWNvbjogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY3VzdG9tUHJvY2Vzc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+OyAvLyBTZXQgYnkgcGFyZW50LlxyXG4gIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcclxuICBpbmRleCA9IDA7XHJcbiAgbGFzdCA9IGZhbHNlO1xyXG4gIG91dFN0YXR1cyA9ICdwcm9jZXNzJztcclxuICBzaG93UHJvY2Vzc0RvdCA9IGZhbHNlO1xyXG4gIGNsaWNrYWJsZSA9IGZhbHNlO1xyXG4gIGNsaWNrJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuXHJcbiAgZ2V0IGN1cnJlbnRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRJbmRleDtcclxuICB9XHJcblxyXG4gIHNldCBjdXJyZW50SW5kZXgoY3VycmVudDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50SW5kZXggPSBjdXJyZW50O1xyXG4gICAgaWYgKCF0aGlzLmlzQ3VzdG9tU3RhdHVzKSB7XHJcbiAgICAgIHRoaXMuX3N0YXR1cyA9IGN1cnJlbnQgPiB0aGlzLmluZGV4ID8gJ2ZpbmlzaCcgOiBjdXJyZW50ID09PSB0aGlzLmluZGV4ID8gdGhpcy5vdXRTdGF0dXMgfHwgJycgOiAnd2FpdCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jdXJyZW50SW5kZXggPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zdGVwcy1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2xpY2thYmxlICYmIHRoaXMuY3VycmVudEluZGV4ICE9PSB0aGlzLmluZGV4ICYmICF0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbGljayQubmV4dCh0aGlzLmluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS1jb250YWluZXJcIlxyXG4gIFthdHRyLnJvbGVdPVwiY2xpY2thYmxlICYmICFuekRpc2FibGVkID8gJ2J1dHRvbicgOiBudWxsXCJcclxuICBbdGFiaW5kZXhdPVwiY2xpY2thYmxlICYmICFuekRpc2FibGVkID8gMCA6IG51bGxcIlxyXG4gIChjbGljayk9XCJvbkNsaWNrKClcIlxyXG4+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1zdGVwcy1pdGVtLXRhaWxcIiAqbmdJZj1cImxhc3QgIT09IHRydWVcIj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0taWNvblwiPlxyXG4gICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIiFzaG93UHJvY2Vzc0RvdFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1zdGVwcy1pY29uXCIgKm5nSWY9XCJuelN0YXR1cyA9PT0gJ2ZpbmlzaCcgJiYgIW56SWNvblwiXHJcbiAgICAgICAgPjxpIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIj48L2lcclxuICAgICAgPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3RlcHMtaWNvblwiICpuZ0lmPVwibnpTdGF0dXMgPT09ICdlcnJvcidcIlxyXG4gICAgICAgID48aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCI+PC9pXHJcbiAgICAgID48L3NwYW4+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtc3RlcHMtaWNvblwiXHJcbiAgICAgICAgKm5nSWY9XCIobnpTdGF0dXMgPT09ICdwcm9jZXNzJyB8fCBuelN0YXR1cyA9PT0gJ3dhaXQnKSAmJiAhbnpJY29uXCJcclxuICAgICAgICA+e3sgaW5kZXggKyAxIH19PC9zcGFuXHJcbiAgICAgID5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3RlcHMtaWNvblwiICpuZ0lmPVwibnpJY29uXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzSWNvblN0cmluZzsgZWxzZSBpY29uVGVtcGxhdGVcIj5cclxuICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCIhb2xkQVBJSWNvbiAmJiBuekljb25cIiBbbmdDbGFzc109XCJvbGRBUElJY29uICYmIG56SWNvblwiPjwvaT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2ljb25UZW1wbGF0ZT5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuekljb25cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwic2hvd1Byb2Nlc3NEb3RcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3RlcHMtaWNvblwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjcHJvY2Vzc0RvdFRlbXBsYXRlPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3RlcHMtaWNvbi1kb3RcIj48L3NwYW4+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVByb2Nlc3NUZW1wbGF0ZSB8fCBwcm9jZXNzRG90VGVtcGxhdGVcIlxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcclxuICAgICAgICAgICAgJGltcGxpY2l0OiBwcm9jZXNzRG90VGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHN0YXR1czogbnpTdGF0dXMsXHJcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxyXG4gICAgICAgICAgfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1zdGVwcy1pdGVtLWNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS10aXRsZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUaXRsZVwiPnt7IG56VGl0bGUgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPGRpdiAqbmdJZj1cIm56U3VidGl0bGVcIiBjbGFzcz1cImFudC1zdGVwcy1pdGVtLXN1YnRpdGxlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56U3VidGl0bGVcIj57eyBuelN1YnRpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0tZGVzY3JpcHRpb25cIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RGVzY3JpcHRpb25cIj57eyBuekRlc2NyaXB0aW9uIH19PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==