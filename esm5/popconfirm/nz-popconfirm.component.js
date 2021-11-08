/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import { ElementRef } from '@angular/core';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from 'ng-zorro-antd/core';
import * as ɵngcc3 from '@angular/cdk/overlay';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from 'ng-zorro-antd/button';
import * as ɵngcc6 from 'ng-zorro-antd/icon';
import * as ɵngcc7 from 'ng-zorro-antd/i18n';

var _c0 = ["popoverContainer"];
var _c1 = ["focusableTitle"];
function NzPopconfirmComponent_ng_template_1_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", ctx_r8.nzIcon || "exclamation-circle");
} }
function NzPopconfirmComponent_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzPopconfirmComponent_ng_template_1_ng_container_8_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵelementStart(2, "div", 14, 15);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzIcon);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.title);
} }
function NzPopconfirmComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.nzCancelText);
} }
function NzPopconfirmComponent_ng_template_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "nzI18n");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(2, 1, "Modal.cancelText"));
} }
function NzPopconfirmComponent_ng_template_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.nzOkText);
} }
function NzPopconfirmComponent_ng_template_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "nzI18n");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(2, 1, "Modal.okText"));
} }
function NzPopconfirmComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2, 3);
    ɵngcc0.ɵɵelementStart(2, "div", 4);
    ɵngcc0.ɵɵelement(3, "div", 5);
    ɵngcc0.ɵɵelementStart(4, "div", 6);
    ɵngcc0.ɵɵelementStart(5, "div");
    ɵngcc0.ɵɵelementStart(6, "div", 7);
    ɵngcc0.ɵɵelementStart(7, "div", 8);
    ɵngcc0.ɵɵtemplate(8, NzPopconfirmComponent_ng_template_1_ng_container_8_Template, 5, 2, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "div", 10);
    ɵngcc0.ɵɵelementStart(10, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NzPopconfirmComponent_ng_template_1_Template_button_click_10_listener() { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onCancel(); });
    ɵngcc0.ɵɵtemplate(11, NzPopconfirmComponent_ng_template_1_ng_container_11_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵtemplate(12, NzPopconfirmComponent_ng_template_1_ng_container_12_Template, 3, 3, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(13, "button", 13);
    ɵngcc0.ɵɵlistener("click", function NzPopconfirmComponent_ng_template_1_Template_button_click_13_listener() { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onConfirm(); });
    ɵngcc0.ɵɵtemplate(14, NzPopconfirmComponent_ng_template_1_ng_container_14_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵtemplate(15, NzPopconfirmComponent_ng_template_1_ng_container_15_Template, 3, 3, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵngcc0.ɵɵadvance(8);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.title);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzSize", "small");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzCancelText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.nzCancelText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzSize", "small")("nzType", ctx_r1.nzOkType);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzOkText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.nzOkText);
} }
var _c2 = ["*"];
var NzPopconfirmComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopconfirmComponent, _super);
    function NzPopconfirmComponent(cdr, focusTrapFactory, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.focusTrapFactory = focusTrapFactory;
        _this.noAnimation = noAnimation;
        _this.nzOkType = 'primary';
        _this.nzCondition = false;
        _this.nzOnCancel = new EventEmitter();
        _this.nzOnConfirm = new EventEmitter();
        _this.focusTrap = null;
        _this._prefix = 'ant-popover-placement';
        _this._trigger = 'click';
        _this._hasBackdrop = true;
        return _this;
    }
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.nzCondition) {
            this.previouslyFocusedElement = (/** @type {?} */ (document.activeElement));
            _super.prototype.show.call(this);
            this.focusTrap = this.focusTrapFactory.create(this.popoverContainer.nativeElement);
            this.focusTrap.focusFirstTabbableElementWhenReady();
            // focus on the title:
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.focusableTitle) {
                    _this.focusableTitle.nativeElement.focus();
                }
            }), 200);
        }
        else {
            this.onConfirm();
        }
    };
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.focusTrap && this.focusTrap.destroy();
        _super.prototype.hide.call(this);
        this.previouslyFocusedElement && this.previouslyFocusedElement.focus();
    };
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.nzOnCancel.emit();
        this.close();
    };
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.onConfirm = /**
     * @return {?}
     */
    function () {
        this.nzOnConfirm.emit();
        this.close();
    };
    /** @nocollapse */
    NzPopconfirmComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: FocusTrapFactory },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzPopconfirmComponent.propDecorators = {
        nzOkText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzCondition: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzOnCancel: [{ type: Output }],
        nzOnConfirm: [{ type: Output }],
        popoverContainer: [{ type: ViewChild, args: ['popoverContainer', { static: false },] }],
        focusableTitle: [{ type: ViewChild, args: ['focusableTitle', { static: false },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzPopconfirmComponent.prototype, "nzCondition", void 0);
NzPopconfirmComponent.ɵfac = function NzPopconfirmComponent_Factory(t) { return new (t || NzPopconfirmComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusTrapFactory), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzNoAnimationDirective, 9)); };
NzPopconfirmComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPopconfirmComponent, selectors: [["nz-popconfirm"]], viewQuery: function NzPopconfirmComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.popoverContainer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.focusableTitle = _t.first);
    } }, inputs: { nzOkText: "nzOkText", nzOkType: "nzOkType", nzCancelText: "nzCancelText", nzCondition: "nzCondition", nzIcon: "nzIcon" }, outputs: { nzOnCancel: "nzOnCancel", nzOnConfirm: "nzOnConfirm" }, exportAs: ["nzPopconfirmComponent"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NzTooltipBaseComponentLegacy,
                useExisting: NzPopconfirmComponent
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 3, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], ["role", "dialog", 1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], ["popoverContainer", ""], [1, "ant-popover-content"], [1, "ant-popover-arrow"], [1, "ant-popover-inner"], [1, "ant-popover-inner-content"], [1, "ant-popover-message"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-buttons"], ["nz-button", "", 3, "nzSize", "click"], [4, "ngIf"], ["nz-button", "", 3, "nzSize", "nzType", "click"], ["tabindex", "-1", "role", "alert", 1, "ant-popover-message-title"], ["focusableTitle", ""], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"]], template: function NzPopconfirmComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, NzPopconfirmComponent_ng_template_1_Template, 16, 13, "ng-template", 0, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵlistener("backdropClick", function NzPopconfirmComponent_Template_ng_template_backdropClick_1_listener() { return ctx.close(); })("detach", function NzPopconfirmComponent_Template_ng_template_detach_1_listener() { return ctx.close(); })("positionChange", function NzPopconfirmComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible);
    } }, directives: [ɵngcc3.CdkConnectedOverlay, ɵngcc2.NzConnectedOverlayDirective, ɵngcc4.NgClass, ɵngcc4.NgStyle, ɵngcc2.NzNoAnimationDirective, ɵngcc2.NzStringTemplateOutletDirective, ɵngcc5.NzButtonComponent, ɵngcc4.NgIf, ɵngcc6.NzIconDirective], pipes: [ɵngcc7.NzI18nPipe], styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopconfirmComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-popconfirm',
                exportAs: 'nzPopconfirmComponent',
                preserveWhitespaces: false,
                animations: [zoomBigMotion],
                template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  (backdropClick)=\"close()\"\r\n  (detach)=\"close()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOpen]=\"_visible\">\r\n  <div class=\"ant-popover\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\"\r\n    #popoverContainer\r\n    role=\"dialog\">\r\n    <div class=\"ant-popover-content\">\r\n      <div class=\"ant-popover-arrow\"></div>\r\n      <div class=\"ant-popover-inner\">\r\n        <div>\r\n          <div class=\"ant-popover-inner-content\">\r\n            <div class=\"ant-popover-message\">\r\n              <ng-container *nzStringTemplateOutlet=\"title\">\r\n                <ng-container *nzStringTemplateOutlet=\"nzIcon\">\r\n                  <i nz-icon [nzType]=\"nzIcon || 'exclamation-circle'\" nzTheme=\"fill\"></i>\r\n                </ng-container>\r\n                <div class=\"ant-popover-message-title\" #focusableTitle tabindex=\"-1\" role=\"alert\">{{ title }}</div>\r\n              </ng-container>\r\n            </div>\r\n            <div class=\"ant-popover-buttons\">\r\n              <button nz-button [nzSize]=\"'small'\" (click)=\"onCancel()\">\r\n                <ng-container *ngIf=\"nzCancelText\">{{ nzCancelText }}</ng-container>\r\n                <ng-container *ngIf=\"!nzCancelText\">{{ 'Modal.cancelText' | nzI18n }}</ng-container>\r\n              </button>\r\n              <button nz-button [nzSize]=\"'small'\" [nzType]=\"nzOkType\" (click)=\"onConfirm()\">\r\n                <ng-container *ngIf=\"nzOkText\">{{ nzOkText }}</ng-container>\r\n                <ng-container *ngIf=\"!nzOkText\">{{ 'Modal.okText' | nzI18n }}</ng-container>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                providers: [
                    {
                        provide: NzTooltipBaseComponentLegacy,
                        useExisting: NzPopconfirmComponent
                    }
                ],
                styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FocusTrapFactory }, { type: ɵngcc2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzOkText: [{
            type: Input
        }], nzOkType: [{
            type: Input
        }], nzCancelText: [{
            type: Input
        }], nzCondition: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], nzOnCancel: [{
            type: Output
        }], nzOnConfirm: [{
            type: Output
        }], popoverContainer: [{
            type: ViewChild,
            args: ['popoverContainer', { static: false }]
        }], focusableTitle: [{
            type: ViewChild,
            args: ['focusableTitle', { static: false }]
        }] }); })();
    return NzPopconfirmComponent;
}(NzToolTipComponent));
export { NzPopconfirmComponent };
if (false) {
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzCondition;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzIcon;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOnConfirm;
    /** @type {?} */
    NzPopconfirmComponent.prototype.popoverContainer;
    /**
     * @type {?}
     * @private
     */
    NzPopconfirmComponent.prototype.focusTrap;
    /**
     * @type {?}
     * @private
     */
    NzPopconfirmComponent.prototype.previouslyFocusedElement;
    /**
     * @type {?}
     * @private
     */
    NzPopconfirmComponent.prototype.focusableTitle;
    /** @type {?} */
    NzPopconfirmComponent.prototype._prefix;
    /** @type {?} */
    NzPopconfirmComponent.prototype._trigger;
    /** @type {?} */
    NzPopconfirmComponent.prototype._hasBackdrop;
    /**
     * @type {?}
     * @private
     */
    NzPopconfirmComponent.prototype.focusTrapFactory;
    /** @type {?} */
    NzPopconfirmComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vbnotcG9wY29uZmlybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSw0QkFBNEIsRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhFO0lBc0IyQyxpREFBa0I7SUF1QjNELCtCQUNFLEdBQXNCLEVBQ2QsZ0JBQWtDLEVBQ2YsV0FBb0M7UUFIakUsWUFLRSxrQkFBTSxHQUFHLEVBQUUsV0FBVyxDQUFDLFNBQ3hCO1FBSlMsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNmLGlCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXhCeEQsY0FBUSxHQUFXLFNBQVMsQ0FBQztRQUViLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRzFCLGdCQUFVLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEQsaUJBQVcsR0FBdUIsSUFBSSxZQUFZ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QUE0Qzs7SUFFNUMsMkNBQXVFOztJQUN2RSw0Q0FBd0U7O0lBR3hFLGlEQUM2Qjs7Ozs7SUFDN0IsMENBQTJDOzs7OztJQUMzQyx5REFBcUQ7Ozs7O0lBRXJELCtDQUNtQzs7SUFFbkMsd0NBQWtDOztJQUNsQyx5Q0FBcUM7O0lBQ3JDLDZDQUFvQjs7Ozs7SUFJbEIsaURBQTBDOztJQUMxQyw0Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHpvb21CaWdNb3Rpb24sIElucHV0Qm9vbGVhbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksIE56VG9vbHRpcFRyaWdnZXIsIE56VG9vbFRpcENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XHJcbmltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9jdXNUcmFwRmFjdG9yeSwgRm9jdXNUcmFwIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LXBvcGNvbmZpcm0nLFxyXG4gIGV4cG9ydEFzOiAnbnpQb3Bjb25maXJtQ29tcG9uZW50JyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbem9vbUJpZ01vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXBvcGNvbmZpcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LFxyXG4gICAgICB1c2VFeGlzdGluZzogTnpQb3Bjb25maXJtQ29tcG9uZW50XHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1wb3BvdmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelBvcGNvbmZpcm1Db21wb25lbnQgZXh0ZW5kcyBOelRvb2xUaXBDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG56T2tUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpPa1R5cGU6IHN0cmluZyA9ICdwcmltYXJ5JztcclxuICBASW5wdXQoKSBuekNhbmNlbFRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb25kaXRpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNhbmNlbDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ29uZmlybTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvLyBzb21lIHN0dWZmIGZvciBmb2N1cy10cmFwIChhMTF5KTpcclxuICBAVmlld0NoaWxkKCdwb3BvdmVyQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgcG9wb3ZlckNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIGZvY3VzVHJhcDogRm9jdXNUcmFwIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZm9jdXNhYmxlVGl0bGUnLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBwcml2YXRlIGZvY3VzYWJsZVRpdGxlOiBFbGVtZW50UmVmO1xyXG5cclxuICBfcHJlZml4ID0gJ2FudC1wb3BvdmVyLXBsYWNlbWVudCc7XHJcbiAgX3RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXIgPSAnY2xpY2snO1xyXG4gIF9oYXNCYWNrZHJvcCA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoY2RyLCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm56Q29uZGl0aW9uKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgc3VwZXIuc2hvdygpO1xyXG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5wb3BvdmVyQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICB0aGlzLmZvY3VzVHJhcC5mb2N1c0ZpcnN0VGFiYmFibGVFbGVtZW50V2hlblJlYWR5KCk7XHJcblxyXG4gICAgICAvLyBmb2N1cyBvbiB0aGUgdGl0bGU6XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmZvY3VzYWJsZVRpdGxlKSB7XHJcbiAgICAgICAgICB0aGlzLmZvY3VzYWJsZVRpdGxlLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uQ29uZmlybSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzVHJhcCAmJiB0aGlzLmZvY3VzVHJhcC5kZXN0cm95KCk7XHJcbiAgICBzdXBlci5oaWRlKCk7XHJcbiAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCAmJiB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25DYW5jZWwuZW1pdCgpO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Db25maXJtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek9uQ29uZmlybS5lbWl0KCk7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==