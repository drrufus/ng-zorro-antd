import { __extends } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName, NgControl, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { helpMotion, NzUpdateHostClassService, toBoolean } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormItemComponent } from './nz-form-item.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "./nz-form-item.component";
import * as i3 from "ng-zorro-antd/grid";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/icon";
function NzFormControlComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 7);
} if (rf & 2) {
    var ctx_r460 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r460.iconType);
} }
function NzFormControlComponent_div_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r469 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r469.nzSuccessTip);
} }
var _c0 = function (a0) { return { $implicit: a0 }; };
function NzFormControlComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r465 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r465.nzSuccessTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r465.validateControl));
} }
function NzFormControlComponent_div_5_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r470 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r470.nzWarningTip);
} }
function NzFormControlComponent_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r466 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r466.nzWarningTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r466.validateControl));
} }
function NzFormControlComponent_div_5_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r471 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r471.nzErrorTip);
} }
function NzFormControlComponent_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r467 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r467.nzErrorTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r467.validateControl));
} }
function NzFormControlComponent_div_5_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r472 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r472.nzValidatingTip);
} }
function NzFormControlComponent_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r468 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r468.nzValidatingTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r468.validateControl));
} }
function NzFormControlComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, NzFormControlComponent_div_5_ng_container_2_Template, 2, 4, "ng-container", 5);
    i0.ɵɵtemplate(3, NzFormControlComponent_div_5_ng_container_3_Template, 2, 4, "ng-container", 5);
    i0.ɵɵtemplate(4, NzFormControlComponent_div_5_ng_container_4_Template, 2, 4, "ng-container", 5);
    i0.ɵɵtemplate(5, NzFormControlComponent_div_5_ng_container_5_Template, 2, 4, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r461 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@helpMotion", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r461.showSuccessTip);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r461.showWarningTip);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r461.showErrorTip);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r461.showValidatingTip);
} }
function NzFormControlComponent_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "!hasTips"]);
} }
function NzFormControlComponent_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!nzExtra"]);
} }
function NzFormControlComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r473 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r473.nzExtra);
} }
function NzFormControlComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, NzFormControlComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r464 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r464.nzExtra);
} }
var _c1 = ["*", [["nz-form-explain"]], [["nz-form-extra"]]];
var _c2 = ["*", "nz-form-explain", "nz-form-extra"];
var NzFormControlComponent = /** @class */ (function (_super) {
    __extends(NzFormControlComponent, _super);
    function NzFormControlComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
        _this.nzFormItemComponent = nzFormItemComponent;
        _this.cdr = cdr;
        _this._hasFeedback = false;
        _this.validateChanges = Subscription.EMPTY;
        _this.status = null;
        _this.controlClassMap = {};
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
        return _this;
    }
    Object.defineProperty(NzFormControlComponent.prototype, "nzHasFeedback", {
        get: function () {
            return this._hasFeedback;
        },
        set: function (value) {
            this._hasFeedback = toBoolean(value);
            this.setControlClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "nzValidateStatus", {
        set: function (value) {
            if (value instanceof FormControl || value instanceof NgModel) {
                this.validateControl = value;
                this.validateString = null;
                this.watchControl();
            }
            else if (value instanceof FormControlName) {
                this.validateControl = value.control;
                this.validateString = null;
                this.watchControl();
            }
            else {
                this.validateString = value;
                this.validateControl = null;
                this.setControlClassMap();
            }
        },
        enumerable: true,
        configurable: true
    });
    NzFormControlComponent.prototype.removeSubscribe = function () {
        this.validateChanges.unsubscribe();
    };
    NzFormControlComponent.prototype.watchControl = function () {
        var _this = this;
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe(function () {
                _this.setControlClassMap();
                _this.cdr.markForCheck();
            });
        }
    };
    NzFormControlComponent.prototype.validateControlStatus = function (status) {
        return (!!this.validateControl &&
            (this.validateControl.dirty || this.validateControl.touched) &&
            this.validateControl.status === status);
    };
    NzFormControlComponent.prototype.setControlClassMap = function () {
        var _a;
        if (this.validateString === 'warning') {
            this.status = 'warning';
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.validateString === 'validating' || this.validateString === 'pending' || this.validateControlStatus('PENDING')) {
            this.status = 'validating';
            this.iconType = 'loading';
        }
        else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
            this.status = 'error';
            this.iconType = 'close-circle-fill';
        }
        else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
            this.status = 'success';
            this.iconType = 'check-circle-fill';
        }
        else {
            this.status = null;
            this.iconType = '';
        }
        if (this.hasTips) {
            this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
        }
        this.controlClassMap = (_a = {},
            _a["has-warning"] = this.status === 'warning',
            _a["is-validating"] = this.status === 'validating',
            _a["has-error"] = this.status === 'error',
            _a["has-success"] = this.status === 'success',
            _a["has-feedback"] = this.nzHasFeedback && this.status,
            _a);
    };
    Object.defineProperty(NzFormControlComponent.prototype, "hasTips", {
        get: function () {
            return !!(this.nzSuccessTip || this.nzWarningTip || this.nzErrorTip || this.nzValidatingTip);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showSuccessTip", {
        get: function () {
            return this.status === 'success' && !!this.nzSuccessTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showWarningTip", {
        get: function () {
            return this.status === 'warning' && !!this.nzWarningTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showErrorTip", {
        get: function () {
            return this.status === 'error' && !!this.nzErrorTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showValidatingTip", {
        get: function () {
            return this.status === 'validating' && !!this.nzValidatingTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showInnerTip", {
        get: function () {
            return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
        },
        enumerable: true,
        configurable: true
    });
    NzFormControlComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setControlClassMap();
    };
    NzFormControlComponent.prototype.ngOnDestroy = function () {
        this.removeSubscribe();
        _super.prototype.ngOnDestroy.call(this);
    };
    NzFormControlComponent.prototype.ngAfterContentInit = function () {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.nzValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.nzValidateStatus = this.defaultValidateControl;
            }
        }
    };
    NzFormControlComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    /** @nocollapse */ NzFormControlComponent.ɵfac = function NzFormControlComponent_Factory(t) { return new (t || NzFormControlComponent)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzFormItemComponent, 9), i0.ɵɵdirectiveInject(i3.NzRowDirective, 9), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ NzFormControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzFormControlComponent, selectors: [["nz-form-control"]], contentQueries: function NzFormControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NgControl, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultValidateControl = _t.first);
        } }, inputs: { nzSuccessTip: "nzSuccessTip", nzWarningTip: "nzWarningTip", nzErrorTip: "nzErrorTip", nzValidatingTip: "nzValidatingTip", nzExtra: "nzExtra", nzHasFeedback: "nzHasFeedback", nzValidateStatus: "nzValidateStatus" }, exportAs: ["nzFormControl"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 9, vars: 6, consts: [[1, "ant-form-item-control", 3, "ngClass"], [1, "ant-form-item-children"], [1, "ant-form-item-children-icon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["class", "ant-form-explain", 4, "ngIf"], [4, "ngIf"], ["class", "ant-form-extra", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [1, "ant-form-explain"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-form-extra"], [4, "nzStringTemplateOutlet"]], template: function NzFormControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementStart(3, "span", 2);
            i0.ɵɵtemplate(4, NzFormControlComponent_i_4_Template, 1, 1, "i", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, NzFormControlComponent_div_5_Template, 6, 5, "div", 4);
            i0.ɵɵtemplate(6, NzFormControlComponent_6_Template, 1, 0, undefined, 5);
            i0.ɵɵtemplate(7, NzFormControlComponent_7_Template, 1, 0, undefined, 5);
            i0.ɵɵtemplate(8, NzFormControlComponent_div_8_Template, 2, 1, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.controlClassMap);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.nzHasFeedback && ctx.iconType);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showSuccessTip || ctx.showWarningTip || ctx.showErrorTip || ctx.showValidatingTip);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.hasTips);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.nzExtra);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzExtra);
        } }, directives: [i4.NgClass, i4.NgIf, i5.NzIconDirective, i1.NzStringTemplateOutletDirective], styles: ["\n      nz-form-control {\n        display: block;\n      }\n      form .has-feedback .ant-input-suffix i {\n        margin-right: 18px;\n      }\n    "], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 });
    return NzFormControlComponent;
}(NzColDirective));
export { NzFormControlComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzFormControlComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-control',
                exportAs: 'nzFormControl',
                preserveWhitespaces: false,
                animations: [helpMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                templateUrl: './nz-form-control.component.html',
                styles: [
                    "\n      nz-form-control {\n        display: block;\n      }\n      form .has-feedback .ant-input-suffix i {\n        margin-right: 18px;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i2.NzFormItemComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i3.NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { defaultValidateControl: [{
            type: ContentChild,
            args: [NgControl, { static: false }]
        }], nzSuccessTip: [{
            type: Input
        }], nzWarningTip: [{
            type: Input
        }], nzErrorTip: [{
            type: Input
        }], nzValidatingTip: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], nzHasFeedback: [{
            type: Input
        }], nzValidateStatus: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZm9ybS8iLCJzb3VyY2VzIjpbIm56LWZvcm0tY29udHJvbC5jb21wb25lbnQudHMiLCJuei1mb3JtLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQWUsd0JBQXdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7SUMzQnpELHVCQUFxRTs7O0lBQXhCLDBDQUFtQjs7O0lBUzlELDZCQUVHO0lBQUEsWUFBa0I7SUFBQSwwQkFDcEI7OztJQURFLGVBQWtCO0lBQWxCLDJDQUFrQjs7OztJQUh2Qiw2QkFDRTtJQUFBLDhHQUVHO0lBRUwsMEJBQWU7OztJQUhYLGVBQStFO0lBQS9FLDhEQUErRSx1RkFBQTs7O0lBS2pGLDZCQUVHO0lBQUEsWUFBa0I7SUFBQSwwQkFDcEI7OztJQURFLGVBQWtCO0lBQWxCLDJDQUFrQjs7O0lBSHZCLDZCQUNFO0lBQUEsOEdBRUc7SUFFTCwwQkFBZTs7O0lBSFgsZUFBK0U7SUFBL0UsOERBQStFLHVGQUFBOzs7SUFLakYsNkJBRUc7SUFBQSxZQUFnQjtJQUFBLDBCQUNsQjs7O0lBREUsZUFBZ0I7SUFBaEIseUNBQWdCOzs7SUFIckIsNkJBQ0U7SUFBQSw4R0FFRztJQUVMLDBCQUFlOzs7SUFIWCxlQUE2RTtJQUE3RSw0REFBNkUsdUZBQUE7OztJQUsvRSw2QkFFRztJQUFBLFlBQXFCO0lBQUEsMEJBQ3ZCOzs7SUFERSxlQUFxQjtJQUFyQiw4Q0FBcUI7OztJQUgxQiw2QkFDRTtJQUFBLDhHQUVHO0lBRUwsMEJBQWU7OztJQUhYLGVBQWtGO0lBQWxGLGlFQUFrRix1RkFBQTs7O0lBekIxRiw4QkFJRTtJQUFBLDJCQUNFO0lBQUEsK0ZBQ0U7SUFLRiwrRkFDRTtJQUtGLCtGQUNFO0lBS0YsK0ZBQ0U7SUFLSixpQkFBTTtJQUNSLGlCQUFNOzs7SUExQkMsZUFBVztJQUFYLHVDQUFXO0lBQ0EsZUFBc0I7SUFBdEIsOENBQXNCO0lBTXRCLGVBQXNCO0lBQXRCLDhDQUFzQjtJQU10QixlQUFvQjtJQUFwQiw0Q0FBb0I7SUFNcEIsZUFBeUI7SUFBekIsaURBQXlCOzs7SUFRM0MsNENBQXNEOzs7SUFDdEQsNENBQW9EOzs7SUFFbEQsNkJBQWdEO0lBQUEsWUFBYTtJQUFBLDBCQUFlOzs7SUFBNUIsZUFBYTtJQUFiLHNDQUFhOzs7SUFEL0QsK0JBQ0U7SUFBQSxnR0FBZ0Q7SUFDbEQsaUJBQU07OztJQURVLGVBQWlDO0lBQWpDLHlEQUFpQzs7OztBRE5uRDtJQW9CNEMsMENBQWM7SUFvSHhELGdDQUNFLHdCQUFrRCxFQUNsRCxVQUFzQixFQUNNLG1CQUF3QyxFQUNoRCxjQUE4QixFQUMxQyxHQUFzQixFQUM5QixRQUFtQjtRQU5yQixZQVFFLGtCQUFNLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsSUFBSSxjQUFjLEVBQUUsUUFBUSxDQUFDLFNBRTdGO1FBUDZCLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFFNUQsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUF4SHhCLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHFCQUFlLEdBQWlCLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFHM0QsWUFBTSxHQUE0QixJQUFJLENBQUM7UUFDdkMscUJBQWUsR0FBZ0IsRUFBRSxDQUFDO1FBdUhoQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsK0JBQStCLENBQUMsQ0FBQzs7SUFDL0UsQ0FBQztJQS9HRCxzQkFDSSxpREFBYTthQUtqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDO2FBUkQsVUFDa0IsS0FBYztZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLG9EQUFnQjthQURwQixVQUNxQixLQUF1RDtZQUMxRSxJQUFJLEtBQUssWUFBWSxXQUFXLElBQUksS0FBSyxZQUFZLE9BQU8sRUFBRTtnQkFDNUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7aUJBQU0sSUFBSSxLQUFLLFlBQVksZUFBZSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjtRQUNILENBQUM7OztPQUFBO0lBRUQsZ0RBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDZDQUFZLEdBQVo7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixtRUFBbUU7UUFDbkUsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFO1lBQzlELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDeEYsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxzREFBcUIsR0FBckIsVUFBc0IsTUFBYztRQUNsQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlO1lBQzVCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7WUFDNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFZLENBQUM7SUFDdkQsQ0FBQztJQUVELG1EQUFrQixHQUFsQjs7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcseUJBQXlCLENBQUM7U0FDM0M7YUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM3SCxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztTQUMzQjthQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ25GLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUM7U0FDckM7YUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuRixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO1NBQ3JDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxDQUFDLGVBQWU7WUFDbEIsR0FBQyxhQUFhLElBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTO1lBQzFDLEdBQUMsZUFBZSxJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssWUFBWTtZQUMvQyxHQUFDLFdBQVcsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87WUFDdEMsR0FBQyxhQUFhLElBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTO1lBQzFDLEdBQUMsY0FBYyxJQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE1BQU07ZUFDcEQsQ0FBQztJQUNKLENBQUM7SUFFRCxzQkFBSSwyQ0FBTzthQUFYO1lBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0YsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBYzthQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBYzthQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnREFBWTthQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxREFBaUI7YUFBckI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssWUFBWSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0RBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRyxDQUFDOzs7T0FBQTtJQWNELHlDQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixpQkFBTSxXQUFXLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2pELElBQUksSUFBSSxDQUFDLHNCQUFzQixZQUFZLG9CQUFvQixFQUFFO2dCQUMvRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQzthQUM3RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO2FBQ3JEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsZ0RBQWUsR0FBZjtRQUNFLGlCQUFNLGVBQWUsV0FBRSxDQUFDO0lBQzFCLENBQUM7Z0dBdEpVLHNCQUFzQjsrREFBdEIsc0JBQXNCO3dDQVFuQixTQUFTOzs7OzJTQXJCWixDQUFDLHdCQUF3QixDQUFDOztZQzFDdkMsOEJBQ0U7WUFBQSwrQkFDRTtZQUFBLGtCQUFZO1lBQ1osK0JBQ0U7WUFBQSxtRUFBaUU7WUFDbkUsaUJBQU87WUFDVCxpQkFBTztZQUNQLHVFQUlFO1lBMkJGLHVFQUFzRDtZQUN0RCx1RUFBb0Q7WUFDcEQsdUVBQ0U7WUFFSixpQkFBTTs7WUEzQzZCLDZDQUEyQjtZQUlyRCxlQUFpQztZQUFqQyx3REFBaUM7WUFLdEMsZUFBNkU7WUFBN0UsNEdBQTZFO1lBNkJuRSxlQUFnQjtZQUFoQixtQ0FBZ0I7WUFDaEIsZUFBZ0I7WUFBaEIsbUNBQWdCO1lBQ0EsZUFBZTtZQUFmLGtDQUFlO2tUREQvQixDQUFDLFVBQVUsQ0FBQztpQ0F2QzFCO0NBOE1DLEFBM0tELENBb0I0QyxjQUFjLEdBdUp6RDtTQXZKWSxzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQXBCbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3hCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLE1BQU0sRUFBRTtvQkFDTix5SkFPQztpQkFDRjthQUNGOztzQkF3SEksUUFBUTs7c0JBQUksSUFBSTs7c0JBQ2hCLFFBQVE7O3NCQUFJLElBQUk7O2tCQWhIbEIsWUFBWTttQkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFDekMsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBVUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUsIE5nQ29udHJvbCwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGhlbHBNb3Rpb24sIE5nQ2xhc3NUeXBlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q29sRGlyZWN0aXZlLCBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZ3JpZCc7XHJcbmltcG9ydCB7IE56Rm9ybUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LWZvcm0taXRlbS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUgPSAnd2FybmluZycgfCAndmFsaWRhdGluZycgfCAnZXJyb3InIHwgJ3N1Y2Nlc3MnIHwgbnVsbDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybS1jb250cm9sJyxcclxuICBleHBvcnRBczogJ256Rm9ybUNvbnRyb2wnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFtoZWxwTW90aW9uXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWZvcm0tY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybSAuaGFzLWZlZWRiYWNrIC5hbnQtaW5wdXQtc3VmZml4IGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Rm9ybUNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBOekNvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX2hhc0ZlZWRiYWNrID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZUNoYW5nZXM6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIHZhbGlkYXRlU3RyaW5nOiBzdHJpbmcgfCBudWxsO1xyXG4gIHZhbGlkYXRlQ29udHJvbDogRm9ybUNvbnRyb2wgfCBOZ01vZGVsIHwgbnVsbDtcclxuICBzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gbnVsbDtcclxuICBjb250cm9sQ2xhc3NNYXA6IE5nQ2xhc3NUeXBlID0ge307XHJcbiAgaWNvblR5cGU6IHN0cmluZztcclxuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCwgeyBzdGF0aWM6IGZhbHNlIH0pIGRlZmF1bHRWYWxpZGF0ZUNvbnRyb2w6IEZvcm1Db250cm9sTmFtZSB8IEZvcm1Db250cm9sRGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIG56U3VjY2Vzc1RpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEZvcm1Db250cm9sIHwgTmdNb2RlbCB9PjtcclxuICBASW5wdXQoKSBueldhcm5pbmdUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBGb3JtQ29udHJvbCB8IE5nTW9kZWwgfT47XHJcbiAgQElucHV0KCkgbnpFcnJvclRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEZvcm1Db250cm9sIHwgTmdNb2RlbCB9PjtcclxuICBASW5wdXQoKSBuelZhbGlkYXRpbmdUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBGb3JtQ29udHJvbCB8IE5nTW9kZWwgfT47XHJcbiAgQElucHV0KCkgbnpFeHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SGFzRmVlZGJhY2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hhc0ZlZWRiYWNrID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpIYXNGZWVkYmFjaygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oYXNGZWVkYmFjaztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VmFsaWRhdGVTdGF0dXModmFsdWU6IHN0cmluZyB8IEZvcm1Db250cm9sIHwgRm9ybUNvbnRyb2xOYW1lIHwgTmdNb2RlbCkge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgfHwgdmFsdWUgaW5zdGFuY2VvZiBOZ01vZGVsKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSBudWxsO1xyXG4gICAgICB0aGlzLndhdGNoQ29udHJvbCgpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1Db250cm9sTmFtZSkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IHZhbHVlLmNvbnRyb2w7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSBudWxsO1xyXG4gICAgICB0aGlzLndhdGNoQ29udHJvbCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IG51bGw7XHJcbiAgICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVTdWJzY3JpYmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgd2F0Y2hDb250cm9sKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVTdWJzY3JpYmUoKTtcclxuICAgIC8qKiBtaXNzIGRldGVjdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDg4NyAqKi9cclxuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzID0gdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5waXBlKHN0YXJ0V2l0aChudWxsKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlQ29udHJvbFN0YXR1cyhzdGF0dXM6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghIXRoaXMudmFsaWRhdGVDb250cm9sICYmXHJcbiAgICAgICh0aGlzLnZhbGlkYXRlQ29udHJvbC5kaXJ0eSB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbC50b3VjaGVkKSAmJlxyXG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXMgPT09IHN0YXR1cykgYXMgYm9vbGVhbjtcclxuICB9XHJcblxyXG4gIHNldENvbnRyb2xDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnd2FybmluZycpIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSAnd2FybmluZyc7XHJcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnZXhjbGFtYXRpb24tY2lyY2xlLWZpbGwnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAndmFsaWRhdGluZycgfHwgdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3BlbmRpbmcnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdQRU5ESU5HJykpIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSAndmFsaWRhdGluZyc7XHJcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnbG9hZGluZyc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICdlcnJvcicgfHwgdGhpcy52YWxpZGF0ZUNvbnRyb2xTdGF0dXMoJ0lOVkFMSUQnKSkge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9ICdlcnJvcic7XHJcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnY2xvc2UtY2lyY2xlLWZpbGwnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnc3VjY2VzcycgfHwgdGhpcy52YWxpZGF0ZUNvbnRyb2xTdGF0dXMoJ1ZBTElEJykpIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSAnc3VjY2Vzcyc7XHJcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnY2hlY2stY2lyY2xlLWZpbGwnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSBudWxsO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJyc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5oYXNUaXBzKSB7XHJcbiAgICAgIHRoaXMubnpGb3JtSXRlbUNvbXBvbmVudC5zZXRXaXRoSGVscFZpYVRpcHModGhpcy5zaG93RXJyb3JUaXApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb250cm9sQ2xhc3NNYXAgPSB7XHJcbiAgICAgIFtgaGFzLXdhcm5pbmdgXTogdGhpcy5zdGF0dXMgPT09ICd3YXJuaW5nJyxcclxuICAgICAgW2Bpcy12YWxpZGF0aW5nYF06IHRoaXMuc3RhdHVzID09PSAndmFsaWRhdGluZycsXHJcbiAgICAgIFtgaGFzLWVycm9yYF06IHRoaXMuc3RhdHVzID09PSAnZXJyb3InLFxyXG4gICAgICBbYGhhcy1zdWNjZXNzYF06IHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycsXHJcbiAgICAgIFtgaGFzLWZlZWRiYWNrYF06IHRoaXMubnpIYXNGZWVkYmFjayAmJiB0aGlzLnN0YXR1c1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNUaXBzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhKHRoaXMubnpTdWNjZXNzVGlwIHx8IHRoaXMubnpXYXJuaW5nVGlwIHx8IHRoaXMubnpFcnJvclRpcCB8fCB0aGlzLm56VmFsaWRhdGluZ1RpcCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1N1Y2Nlc3NUaXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJyAmJiAhIXRoaXMubnpTdWNjZXNzVGlwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dXYXJuaW5nVGlwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnd2FybmluZycgJiYgISF0aGlzLm56V2FybmluZ1RpcDtcclxuICB9XHJcblxyXG4gIGdldCBzaG93RXJyb3JUaXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdlcnJvcicgJiYgISF0aGlzLm56RXJyb3JUaXA7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1ZhbGlkYXRpbmdUaXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICd2YWxpZGF0aW5nJyAmJiAhIXRoaXMubnpWYWxpZGF0aW5nVGlwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dJbm5lclRpcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNob3dTdWNjZXNzVGlwIHx8IHRoaXMuc2hvd1dhcm5pbmdUaXAgfHwgdGhpcy5zaG93RXJyb3JUaXAgfHwgdGhpcy5zaG93VmFsaWRhdGluZ1RpcDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIG56Rm9ybUl0ZW1Db21wb25lbnQ6IE56Rm9ybUl0ZW1Db21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHN1cGVyKG56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgZWxlbWVudFJlZiwgbnpGb3JtSXRlbUNvbXBvbmVudCB8fCBuelJvd0RpcmVjdGl2ZSwgcmVuZGVyZXIpO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlU3Vic2NyaWJlKCk7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiAhdGhpcy52YWxpZGF0ZVN0cmluZykge1xyXG4gICAgICBpZiAodGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xEaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLm56VmFsaWRhdGVTdGF0dXMgPSB0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2wuY29udHJvbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56VmFsaWRhdGVTdGF0dXMgPSB0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2w7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW25nQ2xhc3NdPVwiY29udHJvbENsYXNzTWFwXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNoaWxkcmVuXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY2hpbGRyZW4taWNvblwiPlxyXG4gICAgICA8aSAqbmdJZj1cIm56SGFzRmVlZGJhY2sgJiYgaWNvblR5cGVcIiBuei1pY29uIFtuelR5cGVdPVwiaWNvblR5cGVcIj48L2k+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9zcGFuPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiYW50LWZvcm0tZXhwbGFpblwiXHJcbiAgICAqbmdJZj1cInNob3dTdWNjZXNzVGlwIHx8IHNob3dXYXJuaW5nVGlwIHx8IHNob3dFcnJvclRpcCB8fCBzaG93VmFsaWRhdGluZ1RpcFwiXHJcbiAgPlxyXG4gICAgPGRpdiBAaGVscE1vdGlvbj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dTdWNjZXNzVGlwXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelN1Y2Nlc3NUaXA7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiB2YWxpZGF0ZUNvbnRyb2wgfVwiXHJcbiAgICAgICAgICA+e3sgbnpTdWNjZXNzVGlwIH19PC9uZy1jb250YWluZXJcclxuICAgICAgICA+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1dhcm5pbmdUaXBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56V2FybmluZ1RpcDsgY29udGV4dDogeyAkaW1wbGljaXQ6IHZhbGlkYXRlQ29udHJvbCB9XCJcclxuICAgICAgICAgID57eyBueldhcm5pbmdUaXAgfX08L25nLWNvbnRhaW5lclxyXG4gICAgICAgID5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93RXJyb3JUaXBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RXJyb3JUaXA7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiB2YWxpZGF0ZUNvbnRyb2wgfVwiXHJcbiAgICAgICAgICA+e3sgbnpFcnJvclRpcCB9fTwvbmctY29udGFpbmVyXHJcbiAgICAgICAgPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dWYWxpZGF0aW5nVGlwXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelZhbGlkYXRpbmdUaXA7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiB2YWxpZGF0ZUNvbnRyb2wgfVwiXHJcbiAgICAgICAgICA+e3sgbnpWYWxpZGF0aW5nVGlwIH19PC9uZy1jb250YWluZXJcclxuICAgICAgICA+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhaGFzVGlwc1wiIHNlbGVjdD1cIm56LWZvcm0tZXhwbGFpblwiPjwvbmctY29udGVudD5cclxuICA8bmctY29udGVudCAqbmdJZj1cIiFuekV4dHJhXCIgc2VsZWN0PVwibnotZm9ybS1leHRyYVwiPjwvbmctY29udGVudD5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0tZXh0cmFcIiAqbmdJZj1cIm56RXh0cmFcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekV4dHJhXCI+e3sgbnpFeHRyYSB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19