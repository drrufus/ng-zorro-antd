import { ɵɵelementContainerStart, ɵɵelement, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵproperty, ɵɵtemplate, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵtextInterpolate, ɵɵpipe, ɵɵpipeBind1, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵInheritDefinitionFeature, ɵɵprojectionDef, ɵɵprojection, ɵɵtemplateRefExtractor, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Host, Optional, EventEmitter, ElementRef, ViewContainerRef, ComponentFactoryResolver, Renderer2, ɵɵdefineDirective, ɵɵallocHostVars, ɵɵclassProp, Directive, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzNoAnimationDirective, NzConnectedOverlayDirective, NzStringTemplateOutletDirective, zoomBigMotion, InputBoolean, NzAddOnModule, NzOverlayModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzToolTipComponent, NzTooltipBaseDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { Subject } from 'rxjs';
import { CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { NgClass, NgStyle, NgIf, CommonModule } from '@angular/common';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzI18nPipe, NzI18nModule } from 'ng-zorro-antd/i18n';
import { __decorate, __metadata } from 'tslib';
import { takeUntil } from 'rxjs/operators';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzPopconfirmComponent_ng_template_1_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "i", 14);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1391 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzType", ctx_r1391.nzIcon || "exclamation-circle");
} }
function NzPopconfirmComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzPopconfirmComponent_ng_template_1_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementStart(2, "div", 13);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1386 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1386.nzIcon);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1386.title);
} }
function NzPopconfirmComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1387 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1387.nzCancelText);
} }
function NzPopconfirmComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "nzI18n");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "Modal.cancelText"));
} }
function NzPopconfirmComponent_ng_template_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1389 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1389.nzOkText);
} }
function NzPopconfirmComponent_ng_template_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "nzI18n");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "Modal.okText"));
} }
function NzPopconfirmComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r1393 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "div", 3);
    ɵɵelement(2, "div", 4);
    ɵɵelementStart(3, "div", 5);
    ɵɵelementStart(4, "div");
    ɵɵelementStart(5, "div", 6);
    ɵɵelementStart(6, "div", 7);
    ɵɵtemplate(7, NzPopconfirmComponent_ng_template_1_ng_container_7_Template, 4, 2, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 9);
    ɵɵelementStart(9, "button", 10);
    ɵɵlistener("click", function NzPopconfirmComponent_ng_template_1_Template_button_click_9_listener($event) { ɵɵrestoreView(_r1393); const ctx_r1392 = ɵɵnextContext(); return ctx_r1392.onCancel(); });
    ɵɵtemplate(10, NzPopconfirmComponent_ng_template_1_ng_container_10_Template, 2, 1, "ng-container", 11);
    ɵɵtemplate(11, NzPopconfirmComponent_ng_template_1_ng_container_11_Template, 3, 3, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵelementStart(12, "button", 12);
    ɵɵlistener("click", function NzPopconfirmComponent_ng_template_1_Template_button_click_12_listener($event) { ɵɵrestoreView(_r1393); const ctx_r1394 = ɵɵnextContext(); return ctx_r1394.onConfirm(); });
    ɵɵtemplate(13, NzPopconfirmComponent_ng_template_1_ng_container_13_Template, 2, 1, "ng-container", 11);
    ɵɵtemplate(14, NzPopconfirmComponent_ng_template_1_ng_container_14_Template, 3, 3, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1385 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1385._classMap)("ngStyle", ctx_r1385.nzOverlayStyle)("@.disabled", ctx_r1385.noAnimation == null ? null : ctx_r1385.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1385.noAnimation == null ? null : ctx_r1385.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵɵadvance(7);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1385.title);
    ɵɵadvance(2);
    ɵɵproperty("nzSize", "small");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1385.nzCancelText);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1385.nzCancelText);
    ɵɵadvance(1);
    ɵɵproperty("nzSize", "small")("nzType", ctx_r1385.nzOkType);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1385.nzOkText);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1385.nzOkText);
} }
const _c0 = ["*"];
class NzPopconfirmComponent extends NzToolTipComponent {
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this.nzCondition = false;
        this.nzOkType = 'primary';
        this.nzOnCancel = new Subject();
        this.nzOnConfirm = new Subject();
        this._trigger = 'click';
        this._prefix = 'ant-popover-placement';
        this._hasBackdrop = true;
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.nzOnCancel.complete();
        this.nzOnConfirm.complete();
    }
    show() {
        if (!this.nzCondition) {
            super.show();
        }
        else {
            this.onConfirm();
        }
    }
    onCancel() {
        this.nzOnCancel.next();
        super.hide();
    }
    onConfirm() {
        this.nzOnConfirm.next();
        super.hide();
    }
}
/** @nocollapse */ NzPopconfirmComponent.ɵfac = function NzPopconfirmComponent_Factory(t) { return new (t || NzPopconfirmComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzPopconfirmComponent.ɵcmp = ɵɵdefineComponent({ type: NzPopconfirmComponent, selectors: [["nz-popconfirm"]], exportAs: ["nzPopconfirmComponent"], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], [1, "ant-popover-inner"], [1, "ant-popover-inner-content"], [1, "ant-popover-message"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-buttons"], ["nz-button", "", 3, "nzSize", "click"], [4, "ngIf"], ["nz-button", "", 3, "nzSize", "nzType", "click"], [1, "ant-popover-message-title"], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"]], template: function NzPopconfirmComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵtemplate(1, NzPopconfirmComponent_ng_template_1_Template, 15, 13, "ng-template", 0, 1, ɵɵtemplateRefExtractor);
        ɵɵlistener("backdropClick", function NzPopconfirmComponent_Template_ng_template_backdropClick_1_listener($event) { return ctx.hide(); })("detach", function NzPopconfirmComponent_Template_ng_template_detach_1_listener($event) { return ctx.hide(); })("positionChange", function NzPopconfirmComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible);
    } }, directives: [CdkConnectedOverlay, NzConnectedOverlayDirective, NgClass, NgStyle, NzNoAnimationDirective, NzStringTemplateOutletDirective, NzButtonComponent, NgIf, NzIconDirective], pipes: [NzI18nPipe], styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPopconfirmComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-popconfirm',
                exportAs: 'nzPopconfirmComponent',
                preserveWhitespaces: false,
                animations: [zoomBigMotion],
                templateUrl: './nz-popconfirm.component.html',
                styles: [
                    `
      .ant-popover {
        position: relative;
      }
    `
                ]
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();

class NzPopconfirmDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
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
     */
    createTooltipComponent() {
        super.createTooltipComponent();
        this.tooltip.nzOnCancel.pipe(takeUntil(this.$destroy)).subscribe(() => {
            this.nzOnCancel.emit();
        });
        this.tooltip.nzOnConfirm.pipe(takeUntil(this.$destroy)).subscribe(() => {
            this.nzOnConfirm.emit();
        });
    }
}
/** @nocollapse */ NzPopconfirmDirective.ɵfac = function NzPopconfirmDirective_Factory(t) { return new (t || NzPopconfirmDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzPopconfirmDirective.ɵdir = ɵɵdefineDirective({ type: NzPopconfirmDirective, selectors: [["", "nz-popconfirm", ""]], hostBindings: function NzPopconfirmDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(1);
    } if (rf & 2) {
        ɵɵclassProp("ant-popover-open", ctx.isTooltipComponentVisible);
    } }, inputs: { specificTitle: ["nzPopconfirmTitle", "specificTitle"], directiveNameTitle: ["nz-popconfirm", "directiveNameTitle"], specificTrigger: ["nzPopconfirmTrigger", "specificTrigger"], specificPlacement: ["nzPopconfirmPlacement", "specificPlacement"], nzOkText: "nzOkText", nzOkType: "nzOkType", nzCancelText: "nzCancelText", nzIcon: "nzIcon", nzCondition: "nzCondition", nzTrigger: "nzTrigger" }, outputs: { nzOnCancel: "nzOnCancel", nzOnConfirm: "nzOnConfirm" }, exportAs: ["nzPopconfirm"], features: [ɵɵInheritDefinitionFeature] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzPopconfirmDirective.prototype, "nzCondition", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPopconfirmDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-popconfirm]',
                exportAs: 'nzPopconfirm',
                host: {
                    '[class.ant-popover-open]': 'isTooltipComponentVisible'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: ViewContainerRef }, { type: ComponentFactoryResolver }, { type: Renderer2 }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { specificTitle: [{
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
        }], nzTrigger: [{
            type: Input
        }], nzOnCancel: [{
            type: Output
        }], nzOnConfirm: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzPopconfirmModule {
}
/** @nocollapse */ NzPopconfirmModule.ɵmod = ɵɵdefineNgModule({ type: NzPopconfirmModule });
/** @nocollapse */ NzPopconfirmModule.ɵinj = ɵɵdefineInjector({ factory: function NzPopconfirmModule_Factory(t) { return new (t || NzPopconfirmModule)(); }, imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzPopconfirmModule, { declarations: [NzPopconfirmComponent, NzPopconfirmDirective], imports: [CommonModule,
        NzButtonModule,
        OverlayModule,
        NzI18nModule,
        NzIconModule,
        NzAddOnModule,
        NzOverlayModule,
        NzNoAnimationModule,
        NzToolTipModule], exports: [NzPopconfirmComponent, NzPopconfirmDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPopconfirmModule, [{
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
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzPopconfirmComponent, NzPopconfirmDirective, NzPopconfirmModule };
//# sourceMappingURL=ng-zorro-antd-popconfirm.js.map
