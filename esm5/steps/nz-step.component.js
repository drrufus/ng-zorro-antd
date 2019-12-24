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
var _c0 = ["processDotTemplate"];
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
    var ctx_r788 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r788.index + 1);
} }
function NzStepComponent_ng_template_3_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r790 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", !ctx_r790.oldAPIIcon && ctx_r790.nzIcon)("ngClass", ctx_r790.oldAPIIcon && ctx_r790.nzIcon);
} }
function NzStepComponent_ng_template_3_span_3_ng_template_2_ng_template_0_Template(rf, ctx) { }
function NzStepComponent_ng_template_3_span_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzStepComponent_ng_template_3_span_3_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 17);
} if (rf & 2) {
    var ctx_r792 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r792.nzIcon);
} }
function NzStepComponent_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtemplate(1, NzStepComponent_ng_template_3_span_3_ng_container_1_Template, 2, 2, "ng-container", 14);
    i0.ɵɵtemplate(2, NzStepComponent_ng_template_3_span_3_ng_template_2_Template, 1, 1, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r791 = i0.ɵɵreference(3);
    var ctx_r789 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r789.isIconString)("ngIfElse", _r791);
} }
function NzStepComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzStepComponent_ng_template_3_span_0_Template, 2, 0, "span", 10);
    i0.ɵɵtemplate(1, NzStepComponent_ng_template_3_span_1_Template, 2, 0, "span", 10);
    i0.ɵɵtemplate(2, NzStepComponent_ng_template_3_span_2_Template, 2, 1, "span", 10);
    i0.ɵɵtemplate(3, NzStepComponent_ng_template_3_span_3_Template, 4, 2, "span", 10);
} if (rf & 2) {
    var ctx_r781 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r781.nzStatus === "finish" && !ctx_r781.nzIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r781.nzStatus === "error");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r781.nzStatus === "process" || ctx_r781.nzStatus === "wait") && !ctx_r781.nzIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r781.nzIcon);
} }
function NzStepComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 20);
} }
function NzStepComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
var _c1 = function (a0, a1, a2) { return { $implicit: a0, status: a1, index: a2 }; };
function NzStepComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtemplate(1, NzStepComponent_ng_template_4_ng_template_1_Template, 1, 0, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, NzStepComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r794 = i0.ɵɵreference(2);
    var ctx_r782 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r782.customProcessTemplate || _r794)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c1, _r794, ctx_r782.nzStatus, ctx_r782.index));
} }
function NzStepComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r783 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r783.nzTitle);
} }
function NzStepComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r797 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r797.nzSubtitle);
} }
function NzStepComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, NzStepComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r784 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r784.nzSubtitle);
} }
function NzStepComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r785 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r785.nzDescription);
} }
var NzStepComponent = /** @class */ (function () {
    function NzStepComponent(cdr, renderer, elementRef) {
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
    Object.defineProperty(NzStepComponent.prototype, "nzStatus", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
            this.isCustomStatus = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "nzIcon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            if (!(value instanceof TemplateRef)) {
                this.isIconString = true;
                this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
            }
            else {
                this.isIconString = false;
            }
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "currentIndex", {
        get: function () {
            return this._currentIndex;
        },
        set: function (current) {
            this._currentIndex = current;
            if (!this.isCustomStatus) {
                this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
            }
        },
        enumerable: true,
        configurable: true
    });
    NzStepComponent.prototype.onClick = function () {
        if (this.clickable && this.currentIndex !== this.index && !this.nzDisabled) {
            this.click$.next(this.index);
        }
    };
    NzStepComponent.prototype.markForCheck = function () {
        this.cdr.markForCheck();
    };
    NzStepComponent.prototype.ngOnDestroy = function () {
        this.click$.complete();
    };
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
    return NzStepComponent;
}());
export { NzStepComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3N0ZXBzLyIsInNvdXJjZXMiOlsibnotc3RlcC5jb21wb25lbnQudHMiLCJuei1zdGVwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7SUNoQjdCLHlCQUE2RDs7O0lBR3pELGdDQUNHO0lBQUEsd0JBQ0Y7SUFBQSxpQkFBTzs7O0lBQ1IsZ0NBQ0c7SUFBQSx3QkFDRjtJQUFBLGlCQUFPOzs7SUFDUixnQ0FHRztJQUFBLFlBQWU7SUFBQSxpQkFDakI7OztJQURFLGVBQWU7SUFBZix3Q0FBZTs7O0lBR2hCLDZCQUNFO0lBQUEsd0JBQWlGO0lBQ25GLDBCQUFlOzs7SUFERixlQUFnQztJQUFoQyxnRUFBZ0MsbURBQUE7Ozs7SUFHM0Msb0hBQXlDOzs7SUFBNUIsa0RBQTJCOzs7SUFMNUMsZ0NBQ0U7SUFBQSx3R0FDRTtJQUVGLHVJQUNFO0lBRUosaUJBQU87Ozs7SUFOUyxlQUF1QztJQUF2Qyw0Q0FBdUMsbUJBQUE7OztJQVp2RCxpRkFDRztJQUVILGlGQUNHO0lBRUgsaUZBR0c7SUFFSCxpRkFDRTs7O0lBWjJCLHlFQUF3QztJQUd4QyxlQUE0QjtJQUE1QixvREFBNEI7SUFLdkQsZUFBa0U7SUFBbEUsNEdBQWtFO0lBR3ZDLGVBQWM7SUFBZCxzQ0FBYzs7O0lBWXZDLDJCQUF3Qzs7Ozs7SUFGNUMsZ0NBQ0U7SUFBQSxnSUFDRTtJQUVGLCtGQVFBO0lBQ0YsaUJBQU87Ozs7SUFSSCxlQUFnRTtJQUFoRSwwRUFBZ0UsaUdBQUE7OztJQWFwRSw2QkFBZ0Q7SUFBQSxZQUFhO0lBQUEsMEJBQWU7OztJQUE1QixlQUFhO0lBQWIsc0NBQWE7OztJQUUzRCw2QkFBbUQ7SUFBQSxZQUFnQjtJQUFBLDBCQUFlOzs7SUFBL0IsZUFBZ0I7SUFBaEIseUNBQWdCOzs7SUFEckUsK0JBQ0U7SUFBQSx3RkFBbUQ7SUFDckQsaUJBQU07OztJQURVLGVBQW9DO0lBQXBDLDREQUFvQzs7O0lBSXBELDZCQUFzRDtJQUFBLFlBQW1CO0lBQUEsMEJBQWU7OztJQUFsQyxlQUFtQjtJQUFuQiw0Q0FBbUI7O0FEOUIvRTtJQWdGRSx5QkFBb0IsR0FBc0IsRUFBRSxRQUFtQixFQUFFLFVBQXNCO1FBQW5FLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBeERqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBWTVDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQWlCekIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUlwQixjQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBYXZCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBR3hCLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUF4REQsc0JBQ0kscUNBQVE7YUFEWjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDO2FBRUQsVUFBYSxNQUFjO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUM7OztPQUxBO0lBVUQsc0JBQ0ksbUNBQU07YUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO2FBRUQsVUFBVyxLQUFzQztZQUMvQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzlFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQzs7O09BVkE7SUF5QkQsc0JBQUkseUNBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWlCLE9BQWU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDekc7UUFDSCxDQUFDOzs7T0FQQTtJQWVELGlDQUFPLEdBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7a0ZBOUVVLGVBQWU7d0RBQWYsZUFBZTs7Ozs7Ozs7OztZQzFDNUIsOEJBTUU7WUFGQSwrRkFBUyxhQUFTLElBQUM7WUFFbkIsZ0VBQXVEO1lBQ3ZELDhCQUNFO1lBQUEsZ0ZBQ0U7WUFvQkYsZ0ZBQ0U7WUFlSixpQkFBTTtZQUNOLDhCQUNFO1lBQUEsOEJBQ0U7WUFBQSxrRkFBZ0Q7WUFDaEQsZ0VBQ0U7WUFFSixpQkFBTTtZQUNOLDhCQUNFO1lBQUEsb0ZBQXNEO1lBQ3hELGlCQUFNO1lBQ1IsaUJBQU07WUFDUixpQkFBTTs7WUF0REosc0VBQWdEO1lBRGhELDBFQUF3RDtZQUl2QixlQUFxQjtZQUFyQix3Q0FBcUI7WUFFdkMsZUFBd0I7WUFBeEIsMENBQXdCO1lBcUJ4QixlQUF1QjtZQUF2Qix5Q0FBdUI7WUFtQnBCLGVBQWlDO1lBQWpDLG9EQUFpQztZQUMxQyxlQUFrQjtZQUFsQixxQ0FBa0I7WUFLVCxlQUF1QztZQUF2QywwREFBdUM7O0lETmhDO1FBQWYsWUFBWSxFQUFFOzt1REFBb0I7MEJBaEQ5QztDQXlIQyxBQWpHRCxJQWlHQztTQS9FWSxlQUFlO2tEQUFmLGVBQWU7Y0FsQjNCLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsSUFBSSxFQUFFO29CQUNKLDZCQUE2QixFQUFFLHFCQUFxQjtvQkFDcEQsZ0NBQWdDLEVBQUUsd0JBQXdCO29CQUMxRCwrQkFBK0IsRUFBRSx1QkFBdUI7b0JBQ3hELDhCQUE4QixFQUFFLHNCQUFzQjtvQkFDdEQsK0JBQStCLEVBQUUsd0JBQXdCO29CQUN6RCxpQ0FBaUMsRUFBRSxZQUFZO29CQUMvQywrQkFBK0IsRUFBRSxVQUFVO29CQUMzQyw4QkFBOEIsRUFBRSx5REFBeUQ7aUJBQzFGO2FBQ0Y7O2tCQUVFLFNBQVM7bUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFFakQsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBYUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1zdGVwJyxcclxuICBleHBvcnRBczogJ256U3RlcCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0td2FpdF0nOiAnbnpTdGF0dXMgPT09IFwid2FpdFwiJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tcHJvY2Vzc10nOiAnbnpTdGF0dXMgPT09IFwicHJvY2Vzc1wiJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZmluaXNoXSc6ICduelN0YXR1cyA9PT0gXCJmaW5pc2hcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWVycm9yXSc6ICduelN0YXR1cyA9PT0gXCJlcnJvclwiJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tYWN0aXZlXSc6ICdjdXJyZW50SW5kZXggPT09IGluZGV4JyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1jdXN0b21dJzogJyEhbnpJY29uJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLW5leHQtZXJyb3JdJzogJyhvdXRTdGF0dXMgPT09IFwiZXJyb3JcIikgJiYgKGN1cnJlbnRJbmRleCA9PT0gaW5kZXggKyAxKSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ3Byb2Nlc3NEb3RUZW1wbGF0ZScsIHsgc3RhdGljOiBmYWxzZSB9KSBwcm9jZXNzRG90VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelN1YnRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBuelN0YXR1cygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcclxuICB9XHJcblxyXG4gIHNldCBuelN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgdGhpcy5pc0N1c3RvbVN0YXR1cyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBpc0N1c3RvbVN0YXR1cyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3N0YXR1cyA9ICd3YWl0JztcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgbnpJY29uKCk6IE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb247XHJcbiAgfVxyXG5cclxuICBzZXQgbnpJY29uKHZhbHVlOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XHJcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSkge1xyXG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMub2xkQVBJSWNvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignYW50aWNvbicpID4gLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb2xkQVBJSWNvbiA9IHRydWU7XHJcbiAgaXNJY29uU3RyaW5nID0gdHJ1ZTtcclxuICBwcml2YXRlIF9pY29uOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjdXN0b21Qcm9jZXNzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjsgc3RhdHVzOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfT47IC8vIFNldCBieSBwYXJlbnQuXHJcbiAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xyXG4gIGluZGV4ID0gMDtcclxuICBsYXN0ID0gZmFsc2U7XHJcbiAgb3V0U3RhdHVzID0gJ3Byb2Nlc3MnO1xyXG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XHJcbiAgY2xpY2thYmxlID0gZmFsc2U7XHJcbiAgY2xpY2skID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG5cclxuICBnZXQgY3VycmVudEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEluZGV4O1xyXG4gIH1cclxuXHJcbiAgc2V0IGN1cnJlbnRJbmRleChjdXJyZW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IGN1cnJlbnQ7XHJcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21TdGF0dXMpIHtcclxuICAgICAgdGhpcy5fc3RhdHVzID0gY3VycmVudCA+IHRoaXMuaW5kZXggPyAnZmluaXNoJyA6IGN1cnJlbnQgPT09IHRoaXMuaW5kZXggPyB0aGlzLm91dFN0YXR1cyB8fCAnJyA6ICd3YWl0JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2N1cnJlbnRJbmRleCA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXN0ZXBzLWl0ZW0nKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jbGlja2FibGUgJiYgdGhpcy5jdXJyZW50SW5kZXggIT09IHRoaXMuaW5kZXggJiYgIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNsaWNrJC5uZXh0KHRoaXMuaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2skLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXZcclxuICBjbGFzcz1cImFudC1zdGVwcy1pdGVtLWNvbnRhaW5lclwiXHJcbiAgW2F0dHIucm9sZV09XCJjbGlja2FibGUgJiYgIW56RGlzYWJsZWQgPyAnYnV0dG9uJyA6IG51bGxcIlxyXG4gIFt0YWJpbmRleF09XCJjbGlja2FibGUgJiYgIW56RGlzYWJsZWQgPyAwIDogbnVsbFwiXHJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soKVwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0tdGFpbFwiICpuZ0lmPVwibGFzdCAhPT0gdHJ1ZVwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS1pY29uXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiIXNob3dQcm9jZXNzRG90XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN0ZXBzLWljb25cIiAqbmdJZj1cIm56U3RhdHVzID09PSAnZmluaXNoJyAmJiAhbnpJY29uXCJcclxuICAgICAgICA+PGkgbnotaWNvbiBuelR5cGU9XCJjaGVja1wiPjwvaVxyXG4gICAgICA+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1zdGVwcy1pY29uXCIgKm5nSWY9XCJuelN0YXR1cyA9PT0gJ2Vycm9yJ1wiXHJcbiAgICAgICAgPjxpIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIj48L2lcclxuICAgICAgPjwvc3Bhbj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBjbGFzcz1cImFudC1zdGVwcy1pY29uXCJcclxuICAgICAgICAqbmdJZj1cIihuelN0YXR1cyA9PT0gJ3Byb2Nlc3MnIHx8IG56U3RhdHVzID09PSAnd2FpdCcpICYmICFuekljb25cIlxyXG4gICAgICAgID57eyBpbmRleCArIDEgfX08L3NwYW5cclxuICAgICAgPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1zdGVwcy1pY29uXCIgKm5nSWY9XCJuekljb25cIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNJY29uU3RyaW5nOyBlbHNlIGljb25UZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIiFvbGRBUElJY29uICYmIG56SWNvblwiIFtuZ0NsYXNzXT1cIm9sZEFQSUljb24gJiYgbnpJY29uXCI+PC9pPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjaWNvblRlbXBsYXRlPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56SWNvblwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJzaG93UHJvY2Vzc0RvdFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1zdGVwcy1pY29uXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNwcm9jZXNzRG90VGVtcGxhdGU+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zdGVwcy1pY29uLWRvdFwiPjwvc3Bhbj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tUHJvY2Vzc1RlbXBsYXRlIHx8IHByb2Nlc3NEb3RUZW1wbGF0ZVwiXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xyXG4gICAgICAgICAgICAkaW1wbGljaXQ6IHByb2Nlc3NEb3RUZW1wbGF0ZSxcclxuICAgICAgICAgICAgc3RhdHVzOiBuelN0YXR1cyxcclxuICAgICAgICAgICAgaW5kZXg6IGluZGV4XHJcbiAgICAgICAgICB9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0tY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1zdGVwcy1pdGVtLXRpdGxlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+e3sgbnpUaXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwibnpTdWJ0aXRsZVwiIGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0tc3VidGl0bGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpTdWJ0aXRsZVwiPnt7IG56U3VidGl0bGUgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS1kZXNjcmlwdGlvblwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpEZXNjcmlwdGlvblwiPnt7IG56RGVzY3JpcHRpb24gfX08L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19