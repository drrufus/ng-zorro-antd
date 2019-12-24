import { __extends } from 'tslib';
import { ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵproperty, ɵɵelement, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵInheritDefinitionFeature, ɵɵprojectionDef, ɵɵprojection, ɵɵtemplateRefExtractor, ɵɵlistener, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Host, Optional, ElementRef, ViewContainerRef, ComponentFactoryResolver, Renderer2, ɵɵdefineDirective, ɵɵallocHostVars, ɵɵclassProp, Directive, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzNoAnimationDirective, NzConnectedOverlayDirective, NzStringTemplateOutletDirective, zoomBigMotion, NzAddOnModule, NzOverlayModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { isTooltipEmpty, NzToolTipComponent, NzTooltipBaseDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { NgClass, NgStyle, NgIf, CommonModule } from '@angular/common';

function NzPopoverComponent_ng_template_1_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r649 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r649.title);
} }
function NzPopoverComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, NzPopoverComponent_ng_template_1_div_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r647 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r647.title);
} }
function NzPopoverComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r648 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r648.content);
} }
function NzPopoverComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "div", 3);
    ɵɵelement(2, "div", 4);
    ɵɵelementStart(3, "div", 5);
    ɵɵelementStart(4, "div");
    ɵɵtemplate(5, NzPopoverComponent_ng_template_1_div_5_Template, 2, 1, "div", 6);
    ɵɵelementStart(6, "div", 7);
    ɵɵtemplate(7, NzPopoverComponent_ng_template_1_ng_container_7_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r646 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r646._classMap)("ngStyle", ctx_r646.nzOverlayStyle)("@.disabled", ctx_r646.noAnimation == null ? null : ctx_r646.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r646.noAnimation == null ? null : ctx_r646.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx_r646.title);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r646.content);
} }
var _c0 = ["*"];
var NzPopoverComponent = /** @class */ (function (_super) {
    __extends(NzPopoverComponent, _super);
    function NzPopoverComponent(cdr, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this._prefix = 'ant-popover-placement';
        return _this;
    }
    NzPopoverComponent.prototype.isEmpty = function () {
        return isTooltipEmpty(this.title) && isTooltipEmpty(this.content);
    };
    /** @nocollapse */ NzPopoverComponent.ɵfac = function NzPopoverComponent_Factory(t) { return new (t || NzPopoverComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzPopoverComponent.ɵcmp = ɵɵdefineComponent({ type: NzPopoverComponent, selectors: [["nz-popover"]], exportAs: ["nzPopoverComponent"], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"]], template: function NzPopoverComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
            ɵɵtemplate(1, NzPopoverComponent_ng_template_1_Template, 8, 7, "ng-template", 0, 1, ɵɵtemplateRefExtractor);
            ɵɵlistener("backdropClick", function NzPopoverComponent_Template_ng_template_backdropClick_1_listener($event) { return ctx.hide(); })("detach", function NzPopoverComponent_Template_ng_template_detach_1_listener($event) { return ctx.hide(); })("positionChange", function NzPopoverComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible);
        } }, directives: [CdkConnectedOverlay, NzConnectedOverlayDirective, NgClass, NgStyle, NzNoAnimationDirective, NgIf, NzStringTemplateOutletDirective], styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
    return NzPopoverComponent;
}(NzToolTipComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPopoverComponent, [{
        type: Component,
        args: [{
                selector: 'nz-popover',
                exportAs: 'nzPopoverComponent',
                animations: [zoomBigMotion],
                templateUrl: './nz-popover.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [
                    "\n      .ant-popover {\n        position: relative;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();

var NzPopoverDirective = /** @class */ (function (_super) {
    __extends(NzPopoverDirective, _super);
    function NzPopoverDirective(elementRef, hostView, resolver, renderer, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.componentFactory = _this.resolver.resolveComponentFactory(NzPopoverComponent);
        return _this;
    }
    /** @nocollapse */ NzPopoverDirective.ɵfac = function NzPopoverDirective_Factory(t) { return new (t || NzPopoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzPopoverDirective.ɵdir = ɵɵdefineDirective({ type: NzPopoverDirective, selectors: [["", "nz-popover", ""]], hostBindings: function NzPopoverDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-popover-open", ctx.isTooltipComponentVisible);
        } }, inputs: { specificTitle: ["nzPopoverTitle", "specificTitle"], specificContent: ["nzPopoverContent", "specificContent"], directiveNameTitle: ["nz-popover", "directiveNameTitle"], specificTrigger: ["nzPopoverTrigger", "specificTrigger"], specificPlacement: ["nzPopoverPlacement", "specificPlacement"] }, exportAs: ["nzPopover"], features: [ɵɵInheritDefinitionFeature] });
    return NzPopoverDirective;
}(NzTooltipBaseDirective));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPopoverDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-popover]',
                exportAs: 'nzPopover',
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
            args: ['nzPopoverTitle']
        }], specificContent: [{
            type: Input,
            args: ['nzPopoverContent']
        }], directiveNameTitle: [{
            type: Input,
            args: ['nz-popover']
        }], specificTrigger: [{
            type: Input,
            args: ['nzPopoverTrigger']
        }], specificPlacement: [{
            type: Input,
            args: ['nzPopoverPlacement']
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzPopoverModule = /** @class */ (function () {
    function NzPopoverModule() {
    }
    /** @nocollapse */ NzPopoverModule.ɵmod = ɵɵdefineNgModule({ type: NzPopoverModule });
    /** @nocollapse */ NzPopoverModule.ɵinj = ɵɵdefineInjector({ factory: function NzPopoverModule_Factory(t) { return new (t || NzPopoverModule)(); }, imports: [[CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule]] });
    return NzPopoverModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzPopoverModule, { declarations: [NzPopoverDirective, NzPopoverComponent], imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule], exports: [NzPopoverDirective, NzPopoverComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPopoverModule, [{
        type: NgModule,
        args: [{
                entryComponents: [NzPopoverComponent],
                exports: [NzPopoverDirective, NzPopoverComponent],
                declarations: [NzPopoverDirective, NzPopoverComponent],
                imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule]
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

export { NzPopoverComponent, NzPopoverDirective, NzPopoverModule };
//# sourceMappingURL=ng-zorro-antd-popover.js.map
