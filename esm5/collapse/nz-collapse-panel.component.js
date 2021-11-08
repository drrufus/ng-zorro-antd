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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, Output, Renderer2, ViewEncapsulation, ViewChild } from '@angular/core';
import { collapseMotion, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzCollapseComponent } from './nz-collapse.component';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/icon';

var _c0 = ["focusable"];
function NzCollapsePanelComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "a", 10);
    ɵngcc0.ɵɵelement(2, "i", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzType", ctx_r4.nzExpandedIcon || "right")("nzRotate", ctx_r4.nzActive ? 90 : 0);
} }
function NzCollapsePanelComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzCollapsePanelComponent_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzExpandedIcon);
} }
function NzCollapsePanelComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.nzHeader, " ");
} }
function NzCollapsePanelComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.nzExtra);
} }
function NzCollapsePanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtemplate(1, NzCollapsePanelComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzExtra);
} }
var _c1 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'collapsePanel';
var NzCollapsePanelComponent = /** @class */ (function () {
    function NzCollapsePanelComponent(nzConfigService, cdr, nzCollapseComponent, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzCollapseComponent = nzCollapseComponent;
        this.nzActive = false;
        this.nzDisabled = false;
        this.nzHeadingAriaLabel = null;
        this.nzHeadingAriaLevel = 4;
        this.nzRole = 'tab';
        this.nzActiveChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
    }
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.clickHeader = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    };
    /**
     * @param {?=} scrollTo
     * @param {?=} scrollOptions
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.focusOnHeader = /**
     * @param {?=} scrollTo
     * @param {?=} scrollOptions
     * @return {?}
     */
    function (scrollTo, scrollOptions) {
        if (scrollTo === void 0) { scrollTo = false; }
        if (scrollOptions === void 0) { scrollOptions = { behavior: 'smooth', block: 'center' }; }
        this._focusableHeader.nativeElement.focus();
        if (scrollTo) {
            this._focusableHeader.nativeElement.scrollIntoView(scrollOptions);
        }
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.nzCollapseComponent.addPanel(this);
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nzCollapseComponent.removePanel(this);
    };
    /** @nocollapse */
    NzCollapsePanelComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: NzCollapseComponent, decorators: [{ type: Host }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCollapsePanelComponent.propDecorators = {
        nzActive: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzShowArrow: [{ type: Input }],
        nzExtra: [{ type: Input }],
        nzHeader: [{ type: Input }],
        nzHeadingAriaLabel: [{ type: Input }],
        nzHeadingAriaLevel: [{ type: Input }],
        nzExpandedIcon: [{ type: Input }],
        nzRole: [{ type: Input }],
        nzActiveChange: [{ type: Output }],
        _focusableHeader: [{ type: ViewChild, args: ["focusable", { static: false },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCollapsePanelComponent.prototype, "nzActive", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
NzCollapsePanelComponent.ɵfac = function NzCollapsePanelComponent_Factory(t) { return new (t || NzCollapsePanelComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(NzCollapseComponent, 1), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzCollapsePanelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCollapsePanelComponent, selectors: [["nz-collapse-panel"]], viewQuery: function NzCollapsePanelComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._focusableHeader = _t.first);
    } }, hostVars: 6, hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
    } }, inputs: { nzActive: "nzActive", nzDisabled: "nzDisabled", nzHeadingAriaLabel: "nzHeadingAriaLabel", nzHeadingAriaLevel: "nzHeadingAriaLevel", nzRole: "nzRole", nzShowArrow: "nzShowArrow", nzExtra: "nzExtra", nzHeader: "nzHeader", nzExpandedIcon: "nzExpandedIcon" }, outputs: { nzActiveChange: "nzActiveChange" }, exportAs: ["nzCollapsePanel"], ngContentSelectors: _c1, decls: 12, vars: 15, consts: [[1, "ant-collapse-header", 2, "display", "flex", "justify-content", "space-between"], [2, "position", "absolute", "width", "1px", "height", "1px", "left", "-1000px"], [1, "ant-collapse-title"], [2, "flex", "1", 3, "keyup.enter", "keyup.Space", "click"], ["focusable", ""], [4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-collapse-extra", 4, "ngIf"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box", 3, "hidden"], ["aria-hidden", "true", 1, "ant-collapse-arrow-link"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"], [1, "ant-collapse-extra"]], template: function NzCollapsePanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3, 4);
        ɵngcc0.ɵɵlistener("keyup.enter", function NzCollapsePanelComponent_Template_div_keyup_enter_4_listener() { return ctx.clickHeader(); })("keyup.Space", function NzCollapsePanelComponent_Template_div_keyup_Space_4_listener() { return ctx.clickHeader(); })("click", function NzCollapsePanelComponent_Template_div_click_4_listener() { return ctx.clickHeader(); });
        ɵngcc0.ɵɵtemplate(6, NzCollapsePanelComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        ɵngcc0.ɵɵtemplate(7, NzCollapsePanelComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, NzCollapsePanelComponent_div_8_Template, 2, 1, "div", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 8);
        ɵngcc0.ɵɵelementStart(10, "div", 9);
        ɵngcc0.ɵɵprojection(11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("role", ctx.nzHeadingAriaLabel ? "heading" : null)("aria-level", ctx.nzHeadingAriaLabel ? ctx.nzHeadingAriaLevel : null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.nzHeader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("aria-label", ctx.nzHeadingAriaLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("role", ctx.nzRole)("aria-expanded", ctx.nzActive)("tabindex", ctx.nzDisabled ? null : 0)("aria-disabled", ctx.nzDisabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowArrow);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzHeader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzExtra);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ant-collapse-content-active", ctx.nzActive);
        ɵngcc0.ɵɵproperty("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("hidden", !ctx.nzActive);
    } }, directives: [ɵngcc2.NgIf, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc3.NzIconDirective], styles: ["\n      nz-collapse-panel {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [collapseMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCollapsePanelComponent, [{
        type: Component,
        args: [{
                selector: 'nz-collapse-panel',
                exportAs: 'nzCollapsePanel',
                template: "<div class=\"ant-collapse-header\" style=\"display: flex; justify-content: space-between;\">\r\n  <!--  Invisible heading for the sake of \"pure\" heading for screen reader-->\r\n  <span [attr.role]=\"nzHeadingAriaLabel ? 'heading' : null\" [attr.aria-level]=\"nzHeadingAriaLabel ? nzHeadingAriaLevel : null\"\r\n        style=\"position:absolute; width: 1px; height: 1px; left: -1000px;\">{{nzHeader}}</span>\r\n  <div class=\"ant-collapse-title\" [attr.aria-label]=\"nzHeadingAriaLabel\">\r\n    <div [attr.role]=\"nzRole\" [attr.aria-expanded]=\"nzActive\" style=\"flex: 1;\" (keyup.enter)=\"clickHeader()\"\r\n         (keyup.Space)=\"clickHeader()\" (click)=\"clickHeader()\" [attr.tabindex]=\"nzDisabled ? null : 0\"\r\n         [attr.aria-disabled]=\"nzDisabled\" #focusable>\r\n      <ng-container *ngIf=\"nzShowArrow\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzExpandedIcon\">\r\n          <a class=\"ant-collapse-arrow-link\" aria-hidden=\"true\">\r\n            <i nz-icon [nzType]=\"nzExpandedIcon || 'right'\" class=\"ant-collapse-arrow\" [nzRotate]=\"nzActive ? 90 : 0\"></i>\r\n          </a>\r\n        </ng-container>\r\n      </ng-container>\r\n      <ng-container *nzStringTemplateOutlet=\"nzHeader\">\r\n        {{ nzHeader }}\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-collapse-extra\" *ngIf=\"nzExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ant-collapse-content\" [class.ant-collapse-content-active]=\"nzActive\"\r\n  [@collapseMotion]=\"nzActive ? 'expanded' : 'hidden' \">\r\n  <div class=\"ant-collapse-content-box\" [hidden]=\"!nzActive\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [collapseMotion],
                host: {
                    '[class.ant-collapse-no-arrow]': '!nzShowArrow',
                    '[class.ant-collapse-item-active]': 'nzActive',
                    '[class.ant-collapse-item-disabled]': 'nzDisabled'
                },
                styles: ["\n      nz-collapse-panel {\n        display: block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: NzCollapseComponent, decorators: [{
                type: Host
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzActive: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzHeadingAriaLabel: [{
            type: Input
        }], nzHeadingAriaLevel: [{
            type: Input
        }], nzRole: [{
            type: Input
        }], nzActiveChange: [{
            type: Output
        }], nzShowArrow: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], nzHeader: [{
            type: Input
        }], nzExpandedIcon: [{
            type: Input
        }], _focusableHeader: [{
            type: ViewChild,
            args: ["focusable", { static: false }]
        }] }); })();
    return NzCollapsePanelComponent;
}());
export { NzCollapsePanelComponent };
if (false) {
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActive;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzExtra;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzHeader;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzHeadingAriaLabel;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzHeadingAriaLevel;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzRole;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActiveChange;
    /**
     * @type {?}
     * @private
     */
    NzCollapsePanelComponent.prototype._focusableHeader;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCollapsePanelComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCollapsePanelComponent.prototype.nzCollapseComponent;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9jb2xsYXBzZS9uei1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQVYsd0JBQXdCLEdBQUcsZUFBZTtBQUVoRDtJQW9ERSxrQ0FDUyxlQUFnQyxFQUMvQixHQUFzQixFQUNkLG1CQUF3QyxFQUN4RCxVQUFzQixFQUN0QixRQUFtQjtRQUpaLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNkLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFsQ2pDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQyx1QkFBa0IsR0FBa0IsSUFBSSxDQUFDO1FBQ3pDLHVCQUFrQixHQUFXLENBQUMsQ0FBQztRQUUvQixXQUFNLEdBQVcsS0FBSyxDQUFDO1FBQ2IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBNkI5RCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBekJELDhDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxnREFBYTs7Ozs7SUFBYixVQUFjLFFBQXlCLEVBQUUsYUFBOEU7UUFBekcseUJBQUEsRUFBQSxnQkFBeUI7UUFBRSw4QkFBQSxFQUFBLGtCQUF5QyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7UUFDckgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQVlELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUNILEFBakRROztxQ0FwQlAsU0FBUyxTQUFDO1FBQ1QsUUFBUSxFQUFFLEZBUDJCLGVBQWU7RUFPdkIsc0JBQzdCLFFBQVEsRUFBRSxsQkF2QlYsaUJBQWlCO2NBdUJVLHNCQUMzQixwQkFQTyxtQkFBbUIsdUJBMkR2QixJQUFJO2dCQTFFUCxVQUFVO2dCQU9WLFNBQVM7OzsyQkFpQ1IsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3FDQUNMLEtBQUs7cUNBQ0wsS0FBSztpQ0FDTCxLQUFLO3lCQUNMLEtBQUs7aUNBQ0wsTUFBTTttQ0FFTixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUFYaEI7UUFBZixZQUFZLEVBQUU7OzhEQUFrQjtJQUNqQjtRQUFmLFlBQVksRUFBRTs7Z0VBQW9CO0lBQ3lCO1FBQTNELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUU7O2lFQUFzQjs7O0VBcEJ6QyxzQkFDakQ7QUFBZSxFQUFFO0tBQXVCLENBQUMsTUFBTTtrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksc0JBQ3JDLFVBQVUsRUFBRSxDQUFDO1NBQWMsQ0FBQyxzQkFRNUIsSUFBSSxFQUFFLDBCQUNKLCtCQUErQixFQUFFO0dBQWMsMEJBQy9DLGtDQUFrQyxFQUFFLFVBQVUsMEJBQzlDLG9DQUFvQyxFQUFFLFlBQVk7Y0FDbkQsK0JBVkMscUVBSUMsbUJBT0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBS0Q7SUE2Q0EsK0JBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQWpEWSx3QkFBd0I7OztJQUNuQyw0Q0FBMEM7O0lBQzFDLDhDQUE0Qzs7SUFDNUMsK0NBQTBGOztJQUMxRiwyQ0FBNkM7O0lBQzdDLDRDQUE4Qzs7SUFDOUMsc0RBQWtEOztJQUNsRCxzREFBd0M7O0lBQ3hDLGtEQUFvRDs7SUFDcEQsMENBQWdDOztJQUNoQyxrREFBZ0U7Ozs7O0lBRWhFLG9EQUNxQzs7SUFvQm5DLG1EQUF1Qzs7Ozs7SUFDdkMsdUNBQThCOzs7OztJQUM5Qix1REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb2xsYXBzZU1vdGlvbiwgSW5wdXRCb29sZWFuLCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotY29sbGFwc2UuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjb2xsYXBzZVBhbmVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotY29sbGFwc2UtcGFuZWwnLFxyXG4gIGV4cG9ydEFzOiAnbnpDb2xsYXBzZVBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgYW5pbWF0aW9uczogW2NvbGxhcHNlTW90aW9uXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotY29sbGFwc2UtcGFuZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1uby1hcnJvd10nOiAnIW56U2hvd0Fycm93JyxcclxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW0tYWN0aXZlXSc6ICduekFjdGl2ZScsXHJcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1pdGVtLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBY3RpdmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56U2hvd0Fycm93OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56RXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56SGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekhlYWRpbmdBcmlhTGFiZWw6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56SGVhZGluZ0FyaWFMZXZlbDogbnVtYmVyID0gNDtcclxuICBASW5wdXQoKSBuekV4cGFuZGVkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpSb2xlOiBzdHJpbmcgPSAndGFiJztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJmb2N1c2FibGVcIiwgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgcHJpdmF0ZSBfZm9jdXNhYmxlSGVhZGVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBjbGlja0hlYWRlcigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubnpDb2xsYXBzZUNvbXBvbmVudC5jbGljayh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzT25IZWFkZXIoc2Nyb2xsVG86IGJvb2xlYW4gPSBmYWxzZSwgc2Nyb2xsT3B0aW9uczogU2Nyb2xsSW50b1ZpZXdPcHRpb25zID0geyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTogdm9pZCB7XHJcbiAgICB0aGlzLl9mb2N1c2FibGVIZWFkZXIubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgaWYgKHNjcm9sbFRvKSB7XHJcbiAgICAgIHRoaXMuX2ZvY3VzYWJsZUhlYWRlci5uYXRpdmVFbGVtZW50LnNjcm9sbEludG9WaWV3KHNjcm9sbE9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgcHJpdmF0ZSBuekNvbGxhcHNlQ29tcG9uZW50OiBOekNvbGxhcHNlQ29tcG9uZW50LFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jb2xsYXBzZS1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb2xsYXBzZUNvbXBvbmVudC5hZGRQYW5lbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbGxhcHNlQ29tcG9uZW50LnJlbW92ZVBhbmVsKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXX0=