import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Host, Optional, Input, Output, ViewChild, Directive, ElementRef, ViewContainerRef, ComponentFactoryResolver, Renderer2, NgModule } from '@angular/core';
import { zoomBigMotion, NzNoAnimationDirective, InputBoolean, NzAddOnModule, NzOverlayModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzToolTipComponent, NzTooltipBaseComponentLegacy, NzTooltipBaseDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { takeUntil } from 'rxjs/operators';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class NzPopconfirmComponent extends NzToolTipComponent {
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
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPopconfirmComponent.prototype, "nzCondition", void 0);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPopconfirmDirective extends NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?} tooltip
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        super(elementRef, hostView, resolver, renderer, tooltip, noAnimation);
        this.noAnimation = noAnimation;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        this.nzTrigger = 'click';
        this.nzOnCancel = new EventEmitter();
        this.nzOnConfirm = new EventEmitter();
        this.componentFactory = this.resolver.resolveComponentFactory(NzPopconfirmComponent);
        this.needProxyProperties = [
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'nzOkText',
            'nzOkType',
            'nzCancelText',
            'nzCondition',
            'nzIcon'
        ];
    }
    /**
     * @override
     * @protected
     * @return {?}
     */
    createDynamicTooltipComponent() {
        super.createDynamicTooltipComponent();
        ((/** @type {?} */ (this.tooltip))).nzOnCancel.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            this.nzOnCancel.emit();
        }));
        ((/** @type {?} */ (this.tooltip))).nzOnConfirm.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            this.nzOnConfirm.emit();
        }));
    }
}
NzPopconfirmDirective.ɵfac = function NzPopconfirmDirective_Factory(t) { return new (t || NzPopconfirmDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzPopconfirmComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzNoAnimationDirective, 9)); };
NzPopconfirmDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzPopconfirmDirective, selectors: [["", "nz-popconfirm", ""]], hostVars: 2, hostBindings: function NzPopconfirmDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-popover-open", ctx.isTooltipComponentVisible);
    } }, inputs: { nzTrigger: "nzTrigger", specificTitle: ["nzPopconfirmTitle", "specificTitle"], directiveNameTitle: ["nz-popconfirm", "directiveNameTitle"], specificTrigger: ["nzPopconfirmTrigger", "specificTrigger"], specificPlacement: ["nzPopconfirmPlacement", "specificPlacement"], nzOkText: "nzOkText", nzOkType: "nzOkType", nzCancelText: "nzCancelText", nzIcon: "nzIcon", nzCondition: "nzCondition" }, outputs: { nzOnCancel: "nzOnCancel", nzOnConfirm: "nzOnConfirm" }, exportAs: ["nzPopconfirm"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
NzPopconfirmDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzPopconfirmComponent, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzPopconfirmDirective.propDecorators = {
    specificTitle: [{ type: Input, args: ['nzPopconfirmTitle',] }],
    directiveNameTitle: [{ type: Input, args: ['nz-popconfirm',] }],
    specificTrigger: [{ type: Input, args: ['nzPopconfirmTrigger',] }],
    specificPlacement: [{ type: Input, args: ['nzPopconfirmPlacement',] }],
    nzOkText: [{ type: Input }],
    nzOkType: [{ type: Input }],
    nzCancelText: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzCondition: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    nzOnCancel: [{ type: Output }],
    nzOnConfirm: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzPopconfirmDirective.prototype, "nzCondition", void 0);
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopconfirmDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-popconfirm]',
                exportAs: 'nzPopconfirm',
                host: {
                    '[class.ant-popover-open]': 'isTooltipComponentVisible'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.Renderer2 }, { type: NzPopconfirmComponent, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzTrigger: [{
            type: Input
        }], nzOnCancel: [{
            type: Output
        }], nzOnConfirm: [{
            type: Output
        }], specificTitle: [{
            type: Input,
            args: ['nzPopconfirmTitle']
        }], directiveNameTitle: [{
            type: Input,
            args: ['nz-popconfirm']
        }], specificTrigger: [{
            type: Input,
            args: ['nzPopconfirmTrigger']
        }], specificPlacement: [{
            type: Input,
            args: ['nzPopconfirmPlacement']
        }], nzOkText: [{
            type: Input
        }], nzOkType: [{
            type: Input
        }], nzCancelText: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], nzCondition: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificTitle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificTrigger;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificPlacement;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzIcon;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCondition;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     * @type {?}
     */
    NzPopconfirmDirective.prototype.nzTrigger;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnConfirm;
    /** @type {?} */
    NzPopconfirmDirective.prototype.componentFactory;
    /**
     * @type {?}
     * @protected
     */
    NzPopconfirmDirective.prototype.needProxyProperties;
    /** @type {?} */
    NzPopconfirmDirective.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPopconfirmModule {
}
NzPopconfirmModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzPopconfirmModule });
NzPopconfirmModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzPopconfirmModule_Factory(t) { return new (t || NzPopconfirmModule)(); }, imports: [[
            CommonModule,
            NzButtonModule,
            OverlayModule,
            NzI18nModule,
            NzIconModule,
            NzAddOnModule,
            NzOverlayModule,
            NzNoAnimationModule,
            NzToolTipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzPopconfirmModule, { declarations: function () { return [NzPopconfirmComponent,
        NzPopconfirmDirective]; }, imports: function () { return [CommonModule,
        NzButtonModule,
        OverlayModule,
        NzI18nModule,
        NzIconModule,
        NzAddOnModule,
        NzOverlayModule,
        NzNoAnimationModule,
        NzToolTipModule]; }, exports: function () { return [NzPopconfirmComponent,
        NzPopconfirmDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopconfirmModule, [{
        type: NgModule,
        args: [{
                declarations: [NzPopconfirmComponent, NzPopconfirmDirective],
                exports: [NzPopconfirmComponent, NzPopconfirmDirective],
                imports: [
                    CommonModule,
                    NzButtonModule,
                    OverlayModule,
                    NzI18nModule,
                    NzIconModule,
                    NzAddOnModule,
                    NzOverlayModule,
                    NzNoAnimationModule,
                    NzToolTipModule
                ],
                entryComponents: [NzPopconfirmComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzPopconfirmComponent, NzPopconfirmDirective, NzPopconfirmModule };

//# sourceMappingURL=ng-zorro-antd-popconfirm.js.map