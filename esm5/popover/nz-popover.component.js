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
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/cdk/overlay';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'ng-zorro-antd/icon';

var _c0 = ["neverUsedTemplate"];
var _c1 = ["nzTemplate"];
var _c2 = ["focusableHeader"];
function NzPopoverComponent_ng_template_1_div_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.title);
} }
function NzPopoverComponent_ng_template_1_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzPopoverComponent_ng_template_1_div_5_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.title);
} }
function NzPopoverComponent_ng_template_1_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "h4", 12, 13);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.title);
} }
function NzPopoverComponent_ng_template_1_div_5_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function NzPopoverComponent_ng_template_1_div_5_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r9 = ɵngcc0.ɵɵnextContext(3); return ctx_r9.hide(); });
    ɵngcc0.ɵɵelementStart(1, "span", 15);
    ɵngcc0.ɵɵelement(2, "i", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r6.nzPopoverCloseButtonLabel);
} }
function NzPopoverComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, NzPopoverComponent_ng_template_1_div_5_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(2, NzPopoverComponent_ng_template_1_div_5_ng_container_2_Template, 4, 1, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(3, NzPopoverComponent_ng_template_1_div_5_button_3_Template, 3, 1, "button", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.simpleHeader);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.simpleHeader);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzShowPopoverCloseButton);
} }
function NzPopoverComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.content);
} }
function NzPopoverComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵelement(2, "div", 4);
    ɵngcc0.ɵɵelementStart(3, "div", 5);
    ɵngcc0.ɵɵelementStart(4, "div");
    ɵngcc0.ɵɵtemplate(5, NzPopoverComponent_ng_template_1_div_5_Template, 4, 3, "div", 6);
    ɵngcc0.ɵɵelementStart(6, "div", 7);
    ɵngcc0.ɵɵtemplate(7, NzPopoverComponent_ng_template_1_ng_container_7_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.title);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.content);
} }
var _c3 = ["*"];
var NzPopoverComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopoverComponent, _super);
    function NzPopoverComponent(cdr, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this._prefix = 'ant-popover-placement';
        _this.nzShowPopoverCloseButton = false;
        _this.nzPopoverCloseButtonLabel = 'close';
        _this.nzPopoverForceRestoreFocus = false;
        return _this;
    }
    Object.defineProperty(NzPopoverComponent.prototype, "simpleHeader", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof (this.nzTitle) == 'string';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzPopoverComponent.prototype.focusOnHeader = /**
     * @return {?}
     */
    function () {
        if (this.simpleHeader && this.focusableHeader != null) {
            this.focusableHeader.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    NzPopoverComponent.prototype.afterAppearing = /**
     * @return {?}
     */
    function () {
        this.focusOnHeader();
    };
    /** @nocollapse */
    NzPopoverComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzPopoverComponent.propDecorators = {
        nzTitle: [{ type: Input }],
        nzTitleTemplate: [{ type: ContentChild, args: ['neverUsedTemplate', { static: true },] }],
        nzContent: [{ type: Input }],
        nzContentTemplate: [{ type: ContentChild, args: ['nzTemplate', { static: true },] }],
        nzShowPopoverCloseButton: [{ type: Input }],
        nzPopoverCloseButtonLabel: [{ type: Input }],
        nzPopoverForceRestoreFocus: [{ type: Input }],
        focusableHeader: [{ type: ViewChild, args: ['focusableHeader', { static: false },] }]
    };
NzPopoverComponent.ɵfac = function NzPopoverComponent_Factory(t) { return new (t || NzPopoverComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzPopoverComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPopoverComponent, selectors: [["nz-popover"]], contentQueries: function NzPopoverComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, _c0, true);
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, _c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzTitleTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzContentTemplate = _t.first);
    } }, viewQuery: function NzPopoverComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.focusableHeader = _t.first);
    } }, inputs: { nzTitle: "nzTitle", nzContent: "nzContent", nzShowPopoverCloseButton: "nzShowPopoverCloseButton", nzPopoverCloseButtonLabel: "nzPopoverCloseButtonLabel", nzPopoverForceRestoreFocus: "nzPopoverForceRestoreFocus" }, exportAs: ["nzPopoverComponent"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NzTooltipBaseComponentLegacy,
                useExisting: NzPopoverComponent
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c3, decls: 3, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"], [4, "ngIf"], ["class", "ant-modal-close popover-close-button", 3, "click", 4, "ngIf"], ["tabindex", "0", 2, "margin", "0"], ["focusableHeader", ""], [1, "ant-modal-close", "popover-close-button", 3, "click"], [1, "ant-modal-close-x"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 1, "ant-modal-close-icon"]], template: function NzPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, NzPopoverComponent_ng_template_1_Template, 8, 7, "ng-template", 0, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵlistener("backdropClick", function NzPopoverComponent_Template_ng_template_backdropClick_1_listener() { return ctx.hide(); })("detach", function NzPopoverComponent_Template_ng_template_detach_1_listener() { return ctx.hide(); })("positionChange", function NzPopoverComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible);
    } }, directives: [ɵngcc2.CdkConnectedOverlay, ɵngcc1.NzConnectedOverlayDirective, ɵngcc3.NgClass, ɵngcc3.NgStyle, ɵngcc1.NzNoAnimationDirective, ɵngcc3.NgIf, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc4.NzIconDirective], styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopoverComponent, [{
        type: Component,
        args: [{
                selector: 'nz-popover',
                exportAs: 'nzPopoverComponent',
                animations: [zoomBigMotion],
                template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOpen]=\"_visible\">\r\n  <div class=\"ant-popover\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\">\r\n    <div class=\"ant-popover-content\">\r\n      <div class=\"ant-popover-arrow\"></div>\r\n      <div class=\"ant-popover-inner\" role=\"tooltip\">\r\n        <div>\r\n          <div class=\"ant-popover-title\" *ngIf=\"title\">\r\n\r\n            <ng-container *ngIf=\"!simpleHeader\">\r\n              <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"simpleHeader\">\r\n              <h4 style=\"margin: 0;\" #focusableHeader tabindex=\"0\">{{ title }}</h4>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"nzShowPopoverCloseButton\" (click)=\"hide()\" class=\"ant-modal-close popover-close-button\" [attr.aria-label]=\"nzPopoverCloseButtonLabel\">\r\n              <span class=\"ant-modal-close-x\">\r\n                <i nz-icon nzType=\"close\" nzTheme=\"outline\" class=\"ant-modal-close-icon\"></i>\r\n              </span>\r\n            </button>\r\n\r\n          </div>\r\n          \r\n          <div class=\"ant-popover-inner-content\">\r\n            <ng-container *nzStringTemplateOutlet=\"content\">{{ content }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NzTooltipBaseComponentLegacy,
                        useExisting: NzPopoverComponent
                    }
                ],
                preserveWhitespaces: false,
                styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzTitle: [{
            type: Input
        }], nzTitleTemplate: [{
            type: ContentChild,
            args: ['neverUsedTemplate', { static: true }]
        }], nzContent: [{
            type: Input
        }], nzContentTemplate: [{
            type: ContentChild,
            args: ['nzTemplate', { static: true }]
        }], nzShowPopoverCloseButton: [{
            type: Input
        }], nzPopoverCloseButtonLabel: [{
            type: Input
        }], nzPopoverForceRestoreFocus: [{
            type: Input
        }], focusableHeader: [{
            type: ViewChild,
            args: ['focusableHeader', { static: false }]
        }] }); })();
    return NzPopoverComponent;
}(NzToolTipComponent));
export { NzPopoverComponent };
if (false) {
    /** @type {?} */
    NzPopoverComponent.prototype._prefix;
    /**
     * Use `neverUsedTemplate` to force `nzTemplate` to be catched by `nzPopoverContent`.
     * @type {?}
     */
    NzPopoverComponent.prototype.nzTitle;
    /** @type {?} */
    NzPopoverComponent.prototype.nzTitleTemplate;
    /** @type {?} */
    NzPopoverComponent.prototype.nzContent;
    /** @type {?} */
    NzPopoverComponent.prototype.nzContentTemplate;
    /** @type {?} */
    NzPopoverComponent.prototype.nzShowPopoverCloseButton;
    /** @type {?} */
    NzPopoverComponent.prototype.nzPopoverCloseButtonLabel;
    /** @type {?} */
    NzPopoverComponent.prototype.nzPopoverForceRestoreFocus;
    /** @type {?} */
    NzPopoverComponent.prototype.focusableHeader;
    /** @type {?} */
    NzPopoverComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3BvcG92ZXIvbnotcG9wb3Zlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpGO0lBc0J3Qyw4Q0FBa0I7SUFzQnhELDRCQUFZLEdBQXNCLEVBQTZCLFdBQW9DO1FBQW5HLFlBQ0Usa0JBQU0sR0FBRyxFQUFFLFdBQVcsQ0FBQyxTQUN4QjtRQUY4RCxpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFyQm5HLGFBQU8sR0FBRyx1QkFBdUIsQ0FBQztRQVd6Qiw4QkFBd0IsR0FBWSxLQUFLLENBQUM7UUFDMUMsK0JBQXlCLEdBQVcsT0FBTyxDQUFDO1FBQzVDLGdDQUEwQixHQUFZLEtBQUssQ0FBQzs7SUFVckQsQ0FBQztJQVJELHNCQUFJLDRDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxPQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFFBQVEsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTs7OztJQVFELDBDQUFhOzs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksRUFBRTtZQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUM7Ozs7SUFFRCwyQ0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUNILEFBbkNROzsrQkF0QlAsU0FBUyxTQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVksZEFoQnRCLGlCQUFpQjtlQWlCakIsUUFBUSxFQUFFLG9CQUFvQixzQkFDOUIsVUFBVSxFQUFFLENBQUMsaEVBTlMsc0JBQXNCLHVCQStDUCxJQUFJLFlBQUksUUFBUTtFQXpDM0IsQ0FBQztlQUMzQjswQkF3QkMsS0FBSztrQ0FDTCxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzRCQUVsRCxLQUFLO29DQUNMLFlBQVksU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJDQUUzQyxLQUFLOzRDQUNMLEtBQUs7NkNBQ0wsS0FBSztrQ0FNTCxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzttREF0Q0w7a0JBQzFDLGVBQWUsRUFBRTtVQUF1QixDQUFDO0dBQU0sc0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLHNCQUNyQyxTQUFTLEVBQUUsMEJBQ1QsOEJBQ0UsT0FBTyxFQUFFLDRCQUE0Qiw4QkFDckMsV0FBVyxFQUFFLGtCQUFrQiwwQkFDaEMsc0JBQ0Ysc0JBQ0QsbUJBQW1CLEVBQUUsS0FBSywrQkFFeEIsb0VBSUMsbUJBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQXFCNEQ7SUFlN0QseUJBQUM7Q0FBQSxBQXpERCxDQXNCd0Msa0JBQWtCLEdBbUN6RDtTQW5DWSxrQkFBa0I7OztJQUM3QixxQ0FBa0M7Ozs7O0lBS2xDLHFDQUEyQjs7SUFDM0IsNkNBQXdGOztJQUV4Rix1Q0FBNkI7O0lBQzdCLCtDQUFtRjs7SUFFbkYsc0RBQW1EOztJQUNuRCx1REFBcUQ7O0lBQ3JELHdEQUFxRDs7SUFNckQsNkNBQTZFOztJQUV6Qyx5Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHpvb21CaWdNb3Rpb24sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSwgTnpUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotcG9wb3ZlcicsXHJcbiAgZXhwb3J0QXM6ICduelBvcG92ZXJDb21wb25lbnQnLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcG9wb3Zlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IE56UG9wb3ZlckNvbXBvbmVudFxyXG4gICAgfVxyXG4gIF0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtcG9wb3ZlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQb3BvdmVyQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sVGlwQ29tcG9uZW50IHtcclxuICBfcHJlZml4ID0gJ2FudC1wb3BvdmVyLXBsYWNlbWVudCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSBgbmV2ZXJVc2VkVGVtcGxhdGVgIHRvIGZvcmNlIGBuelRlbXBsYXRlYCB0byBiZSBjYXRjaGVkIGJ5IGBuelBvcG92ZXJDb250ZW50YC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuelRpdGxlOiBOelRTVHlwZTtcclxuICBAQ29udGVudENoaWxkKCduZXZlclVzZWRUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIG56Q29udGVudDogTnpUU1R5cGU7XHJcbiAgQENvbnRlbnRDaGlsZCgnbnpUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56Q29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgbnpTaG93UG9wb3ZlckNsb3NlQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpQb3BvdmVyQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nID0gJ2Nsb3NlJztcclxuICBASW5wdXQoKSBuelBvcG92ZXJGb3JjZVJlc3RvcmVGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBnZXQgc2ltcGxlSGVhZGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZih0aGlzLm56VGl0bGUpID09ICdzdHJpbmcnO1xyXG4gIH1cclxuICBcclxuICBAVmlld0NoaWxkKCdmb2N1c2FibGVIZWFkZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgZm9jdXNhYmxlSGVhZGVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHtcclxuICAgIHN1cGVyKGNkciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNPbkhlYWRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNpbXBsZUhlYWRlciAmJiB0aGlzLmZvY3VzYWJsZUhlYWRlciAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNhYmxlSGVhZGVyLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFmdGVyQXBwZWFyaW5nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c09uSGVhZGVyKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==