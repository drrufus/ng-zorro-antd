/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/icon';
import * as ɵngcc4 from './partial/not-found';
import * as ɵngcc5 from './partial/server-error.component';
import * as ɵngcc6 from './partial/unauthorized';

function NzResultComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r11 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", ctx_r11.icon);
} }
function NzResultComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzResultComponent_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r9.icon);
} }
function NzResultComponent_ng_container_1_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngIf", "!icon"]);
} }
function NzResultComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzResultComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵngcc0.ɵɵtemplate(2, NzResultComponent_ng_container_1_2_Template, 1, 0, undefined, 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.icon);
} }
function NzResultComponent_ng_template_2_nz_result_not_found_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-result-not-found");
} }
function NzResultComponent_ng_template_2_nz_result_server_error_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-result-server-error");
} }
function NzResultComponent_ng_template_2_nz_result_unauthorized_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-result-unauthorized");
} }
function NzResultComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 7);
    ɵngcc0.ɵɵtemplate(1, NzResultComponent_ng_template_2_nz_result_not_found_1_Template, 1, 0, "nz-result-not-found", 8);
    ɵngcc0.ɵɵtemplate(2, NzResultComponent_ng_template_2_nz_result_server_error_2_Template, 1, 0, "nz-result-server-error", 8);
    ɵngcc0.ɵɵtemplate(3, NzResultComponent_ng_template_2_nz_result_unauthorized_3_Template, 1, 0, "nz-result-unauthorized", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r2.nzStatus);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "404");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "500");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "403");
} }
function NzResultComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r15.nzTitle, " ");
} }
function NzResultComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzResultComponent_ng_container_4_div_1_Template, 2, 1, "div", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzTitle);
} }
function NzResultComponent_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 2, ["*ngIf", "!nzTitle"]);
} }
function NzResultComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r16 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r16.nzSubTitle, " ");
} }
function NzResultComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzResultComponent_ng_container_6_div_1_Template, 2, 1, "div", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r5.nzSubTitle);
} }
function NzResultComponent_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 3, ["*ngIf", "!nzSubTitle"]);
} }
function NzResultComponent_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r17.nzExtra, " ");
} }
function NzResultComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵtemplate(1, NzResultComponent_div_9_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r7.nzExtra);
} }
function NzResultComponent_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 4, ["*ngIf", "!nzExtra"]);
} }
var _c0 = [[["nz-result-content"], ["", "nz-result-content", ""]], [["", "nz-result-icon", ""]], [["div", "nz-result-title", ""]], [["div", "nz-result-subtitle", ""]], [["div", "nz-result-extra", ""]]];
var _c1 = ["nz-result-content, [nz-result-content]", "[nz-result-icon]", "div[nz-result-title]", "div[nz-result-subtitle]", "div[nz-result-extra]"];
var IconMap = {
    success: 'check-circle',
    error: 'close-circle',
    info: 'exclamation-circle',
    warning: 'warning'
};
/** @type {?} */
var ExceptionStatus = ['404', '500', '403'];
var NzResultComponent = /** @class */ (function () {
    function NzResultComponent(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzStatus = 'info';
        this.isException = false;
    }
    /**
     * @return {?}
     */
    NzResultComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setStatusIcon();
        this.setClassMap();
    };
    /**
     * @private
     * @return {?}
     */
    NzResultComponent.prototype.setStatusIcon = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var icon = this.nzIcon;
        this.isException = ExceptionStatus.indexOf(this.nzStatus) !== -1;
        this.icon = icon
            ? typeof icon === 'string'
                ? IconMap[(/** @type {?} */ (icon))] || icon
                : icon
            : this.isException
                ? undefined
                : IconMap[(/** @type {?} */ (this.nzStatus))];
    };
    /**
     * @private
     * @return {?}
     */
    NzResultComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefix = 'ant-result';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a[prefix] = true,
            _a[prefix + "-" + this.nzStatus] = true,
            _a));
    };
    /** @nocollapse */
    NzResultComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef }
    ]; };
    NzResultComponent.propDecorators = {
        nzIcon: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzSubTitle: [{ type: Input }],
        nzExtra: [{ type: Input }]
    };
NzResultComponent.ɵfac = function NzResultComponent_Factory(t) { return new (t || NzResultComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzUpdateHostClassService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzResultComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzResultComponent, selectors: [["nz-result"]], inputs: { nzStatus: "nzStatus", nzIcon: "nzIcon", nzTitle: "nzTitle", nzSubTitle: "nzSubTitle", nzExtra: "nzExtra" }, exportAs: ["nzResult"], features: [ɵngcc0.ɵɵProvidersFeature([NzUpdateHostClassService]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 11, vars: 8, consts: [[1, "ant-result-icon"], [4, "ngIf", "ngIfElse"], ["exceptionTpl", ""], [4, "ngIf"], ["class", "ant-result-extra", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "ant-result-title", 4, "nzStringTemplateOutlet"], [1, "ant-result-title"], ["class", "ant-result-subtitle", 4, "nzStringTemplateOutlet"], [1, "ant-result-subtitle"], [1, "ant-result-extra"]], template: function NzResultComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzResultComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, NzResultComponent_ng_template_2_Template, 4, 4, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NzResultComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(5, NzResultComponent_5_Template, 1, 0, undefined, 3);
        ɵngcc0.ɵɵtemplate(6, NzResultComponent_ng_container_6_Template, 2, 1, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(7, NzResultComponent_7_Template, 1, 0, undefined, 3);
        ɵngcc0.ɵɵprojection(8);
        ɵngcc0.ɵɵtemplate(9, NzResultComponent_div_9_Template, 2, 1, "div", 4);
        ɵngcc0.ɵɵtemplate(10, NzResultComponent_10_Template, 1, 0, undefined, 3);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isException)("ngIfElse", _r1);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSubTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzSubTitle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzExtra);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzExtra);
    } }, directives: [ɵngcc2.NgIf, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc3.NzIconDirective, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc4.NzResultNotFoundComponent, ɵngcc5.NzResultServerErrorComponent, ɵngcc6.NzResultUnauthorizedComponent], styles: ["\n      nz-result {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResultComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-result',
                exportAs: 'nzResult',
                template: "<!-- Icon -->\r\n<div class=\"ant-result-icon\">\r\n  <ng-container *ngIf=\"!isException; else exceptionTpl\">\r\n    <ng-container *ngIf=\"icon\">\r\n      <ng-container *nzStringTemplateOutlet=\"icon\">\r\n        <i nz-icon [nzType]=\"icon\" nzTheme=\"fill\"></i>\r\n      </ng-container>\r\n    </ng-container>\r\n    <ng-content *ngIf=\"!icon\" select=\"[nz-result-icon]\"></ng-content>\r\n  </ng-container>\r\n\r\n  <ng-template #exceptionTpl>\r\n    <ng-container [ngSwitch]=\"nzStatus\">\r\n      <nz-result-not-found *ngSwitchCase=\"'404'\"></nz-result-not-found>\r\n      <nz-result-server-error *ngSwitchCase=\"'500'\"></nz-result-server-error>\r\n      <nz-result-unauthorized *ngSwitchCase=\"'403'\"></nz-result-unauthorized>\r\n    </ng-container>\r\n  </ng-template>\r\n</div>\r\n\r\n<!-- Title and subTitle -->\r\n<ng-container *ngIf=\"nzTitle\">\r\n  <div class=\"ant-result-title\" *nzStringTemplateOutlet=\"nzTitle\">\r\n    {{ nzTitle }}\r\n  </div>\r\n</ng-container>\r\n<ng-content *ngIf=\"!nzTitle\" select=\"div[nz-result-title]\"></ng-content>\r\n\r\n<ng-container *ngIf=\"nzSubTitle\">\r\n  <div class=\"ant-result-subtitle\" *nzStringTemplateOutlet=\"nzSubTitle\">\r\n    {{ nzSubTitle }}\r\n  </div>\r\n</ng-container>\r\n<ng-content *ngIf=\"!nzSubTitle\" select=\"div[nz-result-subtitle]\"></ng-content>\r\n\r\n<!-- Content -->\r\n<ng-content select=\"nz-result-content, [nz-result-content]\"></ng-content>\r\n\r\n<!-- Extra -->\r\n<div class=\"ant-result-extra\" *ngIf=\"nzExtra\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzExtra\">\r\n    {{ nzExtra }}\r\n  </ng-container>\r\n</div>\r\n<ng-content *ngIf=\"!nzExtra\" select=\"div[nz-result-extra]\"></ng-content>\r\n",
                providers: [NzUpdateHostClassService],
                styles: ["\n      nz-result {\n        display: block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc1.NzUpdateHostClassService }, { type: ɵngcc0.ElementRef }]; }, { nzStatus: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzSubTitle: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }] }); })();
    return NzResultComponent;
}());
export { NzResultComponent };
if (false) {
    /** @type {?} */
    NzResultComponent.prototype.nzIcon;
    /** @type {?} */
    NzResultComponent.prototype.nzTitle;
    /** @type {?} */
    NzResultComponent.prototype.nzStatus;
    /** @type {?} */
    NzResultComponent.prototype.nzSubTitle;
    /** @type {?} */
    NzResultComponent.prototype.nzExtra;
    /** @type {?} */
    NzResultComponent.prototype.icon;
    /** @type {?} */
    NzResultComponent.prototype.isException;
    /**
     * @type {?}
     * @private
     */
    NzResultComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzResultComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvcmVzdWx0L256LXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUlWLE9BQU8sR0FBRztJQUNkLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLEtBQUssRUFBRSxjQUFjO0lBQ3JCLElBQUksRUFBRSxvQkFBb0I7SUFDMUIsT0FBTyxFQUFFLFNBQVM7Q0FDbkI7O0lBQ0ssZUFBZSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7QUFFN0M7SUF5QkUsMkJBQW9CLHdCQUFrRCxFQUFVLFVBQXNCO1FBQWxGLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBUDdGLGFBQVEsR0FBdUIsTUFBTSxDQUFDO1FBSy9DLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRXFGLENBQUM7Ozs7SUFFMUcsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLHlDQUFhOzs7O0lBQXJCOztZQUNRLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTTtRQUV4QixJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtZQUNkLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRO2dCQUN4QixDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBb0IsQ0FBQyxJQUFJLElBQUk7Z0JBQzNDLENBQUMsQ0FBQyxJQUFJO1lBQ1IsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXO2dCQUNsQixDQUFDLENBQUMsU0FBUztnQkFDWCxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLEVBQW9CLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVPLHVDQUFXOzs7O0lBQW5COzs7WUFDUSxNQUFNLEdBQUcsWUFBWTtRQUUzQixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUN6RSxHQUFDLE1BQU0sSUFBRyxJQUFJO1lBQ2QsR0FBSSxNQUFNLFNBQUksSUFBSSxDQUFDLFFBQVUsSUFBRyxJQUFJO2dCQUNwQyxDQUFDO0lBQ0wsQ0FBQyxDQUNILEFBdENROzs4QkFmUCxTQUFTLFNBQUM7UUFDVCxlQUFlLEVBQUUsVEFmVix3QkFBd0I7SUFlUyxDQUFDLE1BQU0sS0FyQi9DLFVBQVU7SUFzQlY7T0FBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsUUFBUSxFQUFFLFdBQVcsUkFhcEIsS0FBSztvQkFaTixRQUFRLEVBQUUsSkFhVCxLQUFLO0lBYmMsc0JBQ3BCLENBYUMsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7Ozs7Ozs7MkRBZm1DO0NBQ3pDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLCtCQUVuQztnQ0FJQyxtQkFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQU1pQjtJQWlDbEIsd0JBQUM7Q0FBQSxBQXJERCxJQXFEQztTQXRDWSxpQkFBaUI7OztJQUM1QixtQ0FBNkM7O0lBQzdDLG9DQUE2Qzs7SUFDN0MscUNBQStDOztJQUMvQyx1Q0FBaUQ7O0lBQ2pELG9DQUE4Qzs7SUFFOUMsaUNBQWtDOztJQUNsQyx3Q0FBb0I7Ozs7O0lBRVIscURBQTBEOzs7OztJQUFFLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIE56UmVzdWx0SWNvblR5cGUgPSAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ2luZm8nIHwgJ3dhcm5pbmcnO1xyXG5leHBvcnQgdHlwZSBOekV4Y2VwdGlvblN0YXR1c1R5cGUgPSAnNDA0JyB8ICc1MDAnIHwgJzQwMyc7XHJcbmV4cG9ydCB0eXBlIE56UmVzdWx0U3RhdHVzVHlwZSA9IE56RXhjZXB0aW9uU3RhdHVzVHlwZSB8IE56UmVzdWx0SWNvblR5cGU7XHJcblxyXG5jb25zdCBJY29uTWFwID0ge1xyXG4gIHN1Y2Nlc3M6ICdjaGVjay1jaXJjbGUnLFxyXG4gIGVycm9yOiAnY2xvc2UtY2lyY2xlJyxcclxuICBpbmZvOiAnZXhjbGFtYXRpb24tY2lyY2xlJyxcclxuICB3YXJuaW5nOiAnd2FybmluZydcclxufTtcclxuY29uc3QgRXhjZXB0aW9uU3RhdHVzID0gWyc0MDQnLCAnNTAwJywgJzQwMyddO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LXJlc3VsdCcsXHJcbiAgZXhwb3J0QXM6ICduelJlc3VsdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXJlc3VsdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotcmVzdWx0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmVzdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuekljb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelN0YXR1czogTnpSZXN1bHRTdGF0dXNUeXBlID0gJ2luZm8nO1xyXG4gIEBJbnB1dCgpIG56U3ViVGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekV4dHJhPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIGljb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBpc0V4Y2VwdGlvbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0dXNJY29uKCk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0YXR1c0ljb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBpY29uID0gdGhpcy5uekljb247XHJcblxyXG4gICAgdGhpcy5pc0V4Y2VwdGlvbiA9IEV4Y2VwdGlvblN0YXR1cy5pbmRleE9mKHRoaXMubnpTdGF0dXMpICE9PSAtMTtcclxuICAgIHRoaXMuaWNvbiA9IGljb25cclxuICAgICAgPyB0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZydcclxuICAgICAgICA/IEljb25NYXBbaWNvbiBhcyBOelJlc3VsdEljb25UeXBlXSB8fCBpY29uXHJcbiAgICAgICAgOiBpY29uXHJcbiAgICAgIDogdGhpcy5pc0V4Y2VwdGlvblxyXG4gICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICA6IEljb25NYXBbdGhpcy5uelN0YXR1cyBhcyBOelJlc3VsdEljb25UeXBlXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcmVmaXggPSAnYW50LXJlc3VsdCc7XHJcblxyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtwcmVmaXhdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4fS0ke3RoaXMubnpTdGF0dXN9YF06IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=