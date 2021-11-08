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

const _c0 = ["popoverContainer"];
const _c1 = ["focusableTitle"];
function NzPopconfirmComponent_ng_template_1_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(3);
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
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
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
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
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
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
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
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
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
    ɵngcc0.ɵɵlistener("click", function NzPopconfirmComponent_ng_template_1_Template_button_click_10_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onCancel(); });
    ɵngcc0.ɵɵtemplate(11, NzPopconfirmComponent_ng_template_1_ng_container_11_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵtemplate(12, NzPopconfirmComponent_ng_template_1_ng_container_12_Template, 3, 3, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(13, "button", 13);
    ɵngcc0.ɵɵlistener("click", function NzPopconfirmComponent_ng_template_1_Template_button_click_13_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onConfirm(); });
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
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
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
const _c2 = ["*"];
export class NzPopconfirmComponent extends NzToolTipComponent {
    /**
     * @param {?} cdr
     * @param {?} focusTrapFactory
     * @param {?=} noAnimation
     */
    constructor(cdr, focusTrapFactory, noAnimation) {
        super(cdr, noAnimation);
        this.focusTrapFactory = focusTrapFactory;
        this.noAnimation = noAnimation;
        this.nzOkType = 'primary';
        this.nzCondition = false;
        this.nzOnCancel = new EventEmitter();
        this.nzOnConfirm = new EventEmitter();
        this.focusTrap = null;
        this._prefix = 'ant-popover-placement';
        this._trigger = 'click';
        this._hasBackdrop = true;
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.nzCondition) {
            this.previouslyFocusedElement = (/** @type {?} */ (document.activeElement));
            super.show();
            this.focusTrap = this.focusTrapFactory.create(this.popoverContainer.nativeElement);
            this.focusTrap.focusFirstTabbableElementWhenReady();
            // focus on the title:
            setTimeout((/**
             * @return {?}
             */
            () => {
                if (this.focusableTitle) {
                    this.focusableTitle.nativeElement.focus();
                }
            }), 200);
        }
        else {
            this.onConfirm();
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.focusTrap && this.focusTrap.destroy();
        super.hide();
        this.previouslyFocusedElement && this.previouslyFocusedElement.focus();
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.nzOnCancel.emit();
        this.close();
    }
    /**
     * @return {?}
     */
    onConfirm() {
        this.nzOnConfirm.emit();
        this.close();
    }
}
NzPopconfirmComponent.ɵfac = function NzPopconfirmComponent_Factory(t) { return new (t || NzPopconfirmComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusTrapFactory), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzNoAnimationDirective, 9)); };
NzPopconfirmComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPopconfirmComponent, selectors: [["nz-popconfirm"]], viewQuery: function NzPopconfirmComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.popoverContainer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.focusableTitle = _t.first);
    } }, inputs: { nzOkType: "nzOkType", nzCondition: "nzCondition", nzOkText: "nzOkText", nzCancelText: "nzCancelText", nzIcon: "nzIcon" }, outputs: { nzOnCancel: "nzOnCancel", nzOnConfirm: "nzOnConfirm" }, exportAs: ["nzPopconfirmComponent"], features: [ɵngcc0.ɵɵProvidersFeature([
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
/** @nocollapse */
NzPopconfirmComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: FocusTrapFactory },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
                styles: [`
      .ant-popover {
        position: relative;
      }
    `]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FocusTrapFactory }, { type: ɵngcc2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzOkType: [{
            type: Input
        }], nzCondition: [{
            type: Input
        }], nzOnCancel: [{
            type: Output
        }], nzOnConfirm: [{
            type: Output
        }], nzOkText: [{
            type: Input
        }], nzCancelText: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], popoverContainer: [{
            type: ViewChild,
            args: ['popoverContainer', { static: false }]
        }], focusableTitle: [{
            type: ViewChild,
            args: ['focusableTitle', { static: false }]
        }] }); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vbnotcG9wY29uZmlybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSw0QkFBNEIsRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JoRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsa0JBQWtCOzs7Ozs7SUF1QjNELFlBQ0UsR0FBc0IsRUFDZCxnQkFBa0MsRUFDZixXQUFvQztRQUUvRCxLQUFLLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBSGhCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUF4QnhELGFBQVEsR0FBVyxTQUFTLENBQUM7UUFFYixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUcxQixlQUFVLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEQsZ0JB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Qzs7Ozs7SUFDM0MseURBQXFEOzs7OztJQUVyRCwrQ0FDbUM7O0lBRW5DLHdDQUFrQzs7SUFDbEMseUNBQXFDOztJQUNyQyw2Q0FBb0I7Ozs7O0lBSWxCLGlEQUEwQzs7SUFDMUMsNENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB6b29tQmlnTW90aW9uLCBJbnB1dEJvb2xlYW4sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LCBOelRvb2x0aXBUcmlnZ2VyLCBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvY3VzVHJhcEZhY3RvcnksIEZvY3VzVHJhcCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1wb3Bjb25maXJtJyxcclxuICBleHBvcnRBczogJ256UG9wY29uZmlybUNvbXBvbmVudCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1wb3Bjb25maXJtLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IE56UG9wY29uZmlybUNvbXBvbmVudFxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtcG9wb3ZlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQb3Bjb25maXJtQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sVGlwQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuek9rVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T2tUeXBlOiBzdHJpbmcgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCkgbnpDYW5jZWxUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29uZGl0aW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNvbmZpcm06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLy8gc29tZSBzdHVmZiBmb3IgZm9jdXMtdHJhcCAoYTExeSk6XHJcbiAgQFZpZXdDaGlsZCgncG9wb3ZlckNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHBvcG92ZXJDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBmb2N1c1RyYXA6IEZvY3VzVHJhcCB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgcHJldmlvdXNseUZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzYWJsZVRpdGxlJywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgcHJpdmF0ZSBmb2N1c2FibGVUaXRsZTogRWxlbWVudFJlZjtcclxuXHJcbiAgX3ByZWZpeCA9ICdhbnQtcG9wb3Zlci1wbGFjZW1lbnQnO1xyXG4gIF90cmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyID0gJ2NsaWNrJztcclxuICBfaGFzQmFja2Ryb3AgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGNkciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekNvbmRpdGlvbikge1xyXG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHN1cGVyLnNob3coKTtcclxuICAgICAgdGhpcy5mb2N1c1RyYXAgPSB0aGlzLmZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKHRoaXMucG9wb3ZlckNvbnRhaW5lci5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNGaXJzdFRhYmJhYmxlRWxlbWVudFdoZW5SZWFkeSgpO1xyXG5cclxuICAgICAgLy8gZm9jdXMgb24gdGhlIHRpdGxlOlxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5mb2N1c2FibGVUaXRsZSkge1xyXG4gICAgICAgICAgdGhpcy5mb2N1c2FibGVUaXRsZS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vbkNvbmZpcm0oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c1RyYXAgJiYgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xyXG4gICAgc3VwZXIuaGlkZSgpO1xyXG4gICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgJiYgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek9uQ2FuY2VsLmVtaXQoKTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIG9uQ29uZmlybSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpPbkNvbmZpcm0uZW1pdCgpO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=