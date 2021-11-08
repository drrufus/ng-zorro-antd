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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Host, Injector, Input, Optional, Output, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { slideMotion, warnDeprecation, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { menuServiceFactory, NzDropDownComponent } from './nz-dropdown.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from './nz-dropdown.directive';
import * as ɵngcc3 from 'ng-zorro-antd/button';
import * as ɵngcc4 from '@angular/cdk/overlay';
import * as ɵngcc5 from 'ng-zorro-antd/icon';

function NzDropDownButtonComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", ctx_r0.nzIcon);
} }
function NzDropDownButtonComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵlistener("mouseenter", function NzDropDownButtonComponent_ng_template_6_Template_div_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.setVisibleStateWhen(true, "hover"); })("mouseleave", function NzDropDownButtonComponent_ng_template_6_Template_div_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.setVisibleStateWhen(false, "hover"); });
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap("ant-dropdown ant-dropdown-placement-" + ctx_r1.nzPlacement);
    ɵngcc0.ɵɵstyleProp("min-width", ctx_r1.triggerWidth, "px");
    ɵngcc0.ɵɵproperty("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@slideMotion", ctx_r1.dropDownPosition);
} }
var _c0 = ["*", [["", "nz-menu", ""]]];
var _c1 = ["*", "[nz-menu]"];
var ɵ0 = menuServiceFactory;
var NzDropDownButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzDropDownButtonComponent, _super);
    function NzDropDownButtonComponent(cdr, nzMenuDropdownService, noAnimation) {
        var _this = _super.call(this, cdr, nzMenuDropdownService, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.nzSize = 'default';
        _this.nzType = 'default';
        _this.nzIcon = 'ellipsis';
        _this.nzClick = new EventEmitter();
        warnDeprecation("'nz-dropdown-button' Component is going to be removed in 9.0.0. Please use 'nz-dropdown-menu' instead. Read https://ng.ant.design/components/dropdown/en");
        return _this;
    }
    /** rewrite afterViewInit hook */
    /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    NzDropDownButtonComponent.prototype.ngAfterContentInit = /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    function () {
        this.startSubscribe(this.visible$);
    };
    /** @nocollapse */
    NzDropDownButtonComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzMenuDropdownService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzDropDownButtonComponent.propDecorators = {
        nzSize: [{ type: Input }],
        nzType: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzClick: [{ type: Output }],
        nzDropDownDirective: [{ type: ViewChild, args: [NzDropDownDirective, { static: true },] }]
    };
NzDropDownButtonComponent.ɵfac = function NzDropDownButtonComponent_Factory(t) { return new (t || NzDropDownButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(NzMenuDropdownService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzDropDownButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDropDownButtonComponent, selectors: [["nz-dropdown-button"]], viewQuery: function NzDropDownButtonComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(NzDropDownDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzDropDownDirective = _t.first);
    } }, inputs: { nzSize: "nzSize", nzType: "nzType", nzIcon: "nzIcon" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzDropdownButton"], features: [ɵngcc0.ɵɵProvidersFeature([
            NzMenuDropdownService,
            {
                provide: NzDropdownHigherOrderServiceToken,
                useFactory: ɵ0,
                deps: [[new Self(), Injector]]
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 7, vars: 12, consts: [["nz-dropdown", "", 1, "ant-btn-group", "ant-dropdown-button"], ["nz-button", "", "type", "button", 3, "disabled", "nzType", "nzSize", "click"], ["nz-button", "", "type", "button", 1, "ant-dropdown-trigger", 3, "nzType", "nzSize", "disabled", "click", "mouseenter", "mouseleave"], [4, "nzStringTemplateOutlet"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["nz-icon", "", 3, "nzType"], [3, "nzNoAnimation", "mouseenter", "mouseleave"]], template: function NzDropDownButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "button", 1);
        ɵngcc0.ɵɵlistener("click", function NzDropDownButtonComponent_Template_button_click_1_listener($event) { return ctx.nzClick.emit($event); });
        ɵngcc0.ɵɵelementStart(2, "span");
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "button", 2);
        ɵngcc0.ɵɵlistener("click", function NzDropDownButtonComponent_Template_button_click_4_listener() { return ctx.setVisibleStateWhen(true, "click"); })("mouseenter", function NzDropDownButtonComponent_Template_button_mouseenter_4_listener() { return ctx.setVisibleStateWhen(true, "hover"); })("mouseleave", function NzDropDownButtonComponent_Template_button_mouseleave_4_listener() { return ctx.setVisibleStateWhen(false, "hover"); });
        ɵngcc0.ɵɵtemplate(5, NzDropDownButtonComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NzDropDownButtonComponent_ng_template_6_Template, 2, 8, "ng-template", 4);
        ɵngcc0.ɵɵlistener("backdropClick", function NzDropDownButtonComponent_Template_ng_template_backdropClick_6_listener() { return ctx.setVisibleStateWhen(false); })("detach", function NzDropDownButtonComponent_Template_ng_template_detach_6_listener() { return ctx.setVisibleStateWhen(false); })("positionChange", function NzDropDownButtonComponent_Template_ng_template_positionChange_6_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.nzDisabled)("nzType", ctx.nzType)("nzSize", ctx.nzSize);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("nzType", ctx.nzType)("nzSize", ctx.nzSize)("disabled", ctx.nzDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzTrigger === "click")("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayOrigin", ctx.nzDropDownDirective)("cdkConnectedOverlayMinWidth", ctx.triggerWidth)("cdkConnectedOverlayOpen", ctx.nzVisible);
    } }, directives: [ɵngcc2.NzDropDownDirective, ɵngcc3.NzButtonComponent, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc4.CdkConnectedOverlay, ɵngcc1.NzConnectedOverlayDirective, ɵngcc5.NzIconDirective, ɵngcc1.NzNoAnimationDirective], styles: ["\n      nz-dropdown-button {\n        position: relative;\n        display: inline-block;\n      }\n\n      :root .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDropDownButtonComponent, [{
        type: Component,
        args: [{
                selector: 'nz-dropdown-button',
                exportAs: 'nzDropdownButton',
                preserveWhitespaces: false,
                animations: [slideMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    NzMenuDropdownService,
                    {
                        provide: NzDropdownHigherOrderServiceToken,
                        useFactory: ɵ0,
                        deps: [[new Self(), Injector]]
                    }
                ],
                template: "<div class=\"ant-btn-group ant-dropdown-button\" nz-dropdown>\r\n  <button nz-button\r\n    type=\"button\"\r\n    [disabled]=\"nzDisabled\"\r\n    [nzType]=\"nzType\"\r\n    [nzSize]=\"nzSize\"\r\n    (click)=\"nzClick.emit($event)\">\r\n    <span><ng-content></ng-content></span>\r\n  </button>\r\n  <button nz-button\r\n    type=\"button\"\r\n    class=\"ant-dropdown-trigger\"\r\n    [nzType]=\"nzType\"\r\n    [nzSize]=\"nzSize\"\r\n    [disabled]=\"nzDisabled\"\r\n    (click)=\"setVisibleStateWhen(true,'click')\"\r\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzIcon\"><i nz-icon [nzType]=\"nzIcon\"></i></ng-container>\r\n  </button>\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"nzTrigger === 'click'\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  [cdkConnectedOverlayOrigin]=\"nzDropDownDirective\"\r\n  (backdropClick)=\"setVisibleStateWhen(false)\"\r\n  (detach)=\"setVisibleStateWhen(false)\"\r\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"nzVisible\">\r\n  <div class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\"\r\n    [style.minWidth.px]=\"triggerWidth\">\r\n    <ng-content select=\"[nz-menu]\"></ng-content>\r\n  </div>\r\n</ng-template>",
                styles: ["\n      nz-dropdown-button {\n        position: relative;\n        display: inline-block;\n      }\n\n      :root .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: NzMenuDropdownService }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzSize: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], nzClick: [{
            type: Output
        }], nzDropDownDirective: [{
            type: ViewChild,
            args: [NzDropDownDirective, { static: true }]
        }] }); })();
    return NzDropDownButtonComponent;
}(NzDropDownComponent));
export { NzDropDownButtonComponent };
if (false) {
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzSize;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzType;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzIcon;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzClick;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzDropDownDirective;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.noAnimation;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvZHJvcGRvd24vbnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUVKLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsaUNBQWlDLEVBQ2pDLHNCQUFzQixFQUN2QixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ25FLFNBWWtCLGtCQUFrQjtBQVhwQztJQXFDK0MscURBQW1CO0lBT2hFLG1DQUNFLEdBQXNCLEVBQ3RCLHFCQUE0QyxFQUNqQixXQUFvQztRQUhqRSxZQUtFLGtCQUFNLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxXQUFXLENBQUMsU0FJL0M7UUFONEIsaUJBQVcsR0FBWCxXQUFXLENBQXlCO1FBVHhELFlBQU0sR0FBRyxTQUFTLENBQUM7UUFDbkIsWUFBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQixZQUFNLEdBQStCLFVBQVUsQ0FBQztRQUN0QyxhQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQVMxRCxlQUFlLENBQ2IsMEpBQTBKLENBQzNKLENBQUM7O0lBQ0osQ0FBQztJQUVELGlDQUFpQzs7Ozs7SUFDakMsc0RBQWtCOzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUNILEFBeEJJOztzQ0FuQ0gsU0FBUyxTQUFDO1FBQ1QsUUFBUSxFQUFFLEZBNUJWLGlCQUFpQjtDQTRCYSxzQkFDOUIsUUFBUSxFQUFFLGpCQUpILHFCQUFxQjtVQUlBLHNCQUM1QixtQkFBbUIsRUFBRSxLQUFLLHNCQUMxQixVQUFVLDFFQVhWLHNCQUFzQix1QkFzRG5CLElBQUksWUFBSSxRQUFRO0NBM0NQLENBQUM7R0FBVyxDQUFDLHNCQUN6QixhQUFhLEVBQUU7U0FBaUIsQ0FBQyxJQUFJLFdBaUNwQyxLQUFLO0NBaENOLGVBQWUsRUFBRSxPQWlDaEIsS0FBSztNQWpDa0MsQ0FBQyxNQUFNLFlBa0M5QyxLQUFLO0FBakNOLFNBQVMsRUFBRSxlQWtDVixNQUFNO0FBakNMLHFCQUFxQiwwQkFDckIsOEJBQ0UsT0FBTyxFQUFFLGhEQWdDWixTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzthQWhDRiw4QkFDMUMsVUFBVSxJQUFvQiw4QkFDOUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDLDBCQUMvQixzQkFDRixzQkFDRDs7Ozs7Ozs7Ozs7Ozs7aUJBQWtEO1dBRWhEOzs7O2tCQWNDO0tBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFTNkQ7SUFpQjlELGdDQUFDO0NBQUEsQUEzREQsQ0FxQytDLG1CQUFtQixHQXNCakU7U0F0QlkseUJBQXlCOzs7SUFDcEMsMkNBQTRCOztJQUM1QiwyQ0FBNEI7O0lBQzVCLDJDQUF5RDs7SUFDekQsNENBQTREOztJQUM1RCx3REFBMkY7O0lBS3pGLGdEQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzbGlkZU1vdGlvbixcclxuICB3YXJuRGVwcmVjYXRpb24sXHJcbiAgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgbWVudVNlcnZpY2VGYWN0b3J5LCBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOek1lbnVEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUtZHJvcGRvd24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWRyb3Bkb3duLWJ1dHRvbicsXHJcbiAgZXhwb3J0QXM6ICduekRyb3Bkb3duQnV0dG9uJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOek1lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICAgICAgdXNlRmFjdG9yeTogbWVudVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cclxuICAgIH1cclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1kcm9wZG93bi1idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpyb290IC5hbnQtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgVXNlIGBOekRyb3Bkb3duRGlyZWN0aXZlYCBpbnN0ZWFkLCB3aWxsIHJlbW92ZSBpbiA5LjAuMC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOekRyb3BEb3duQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgTnpEcm9wRG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuelNpemUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnZWxsaXBzaXMnO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG4gIEBWaWV3Q2hpbGQoTnpEcm9wRG93bkRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgbnpEcm9wRG93bkRpcmVjdGl2ZTogTnpEcm9wRG93bkRpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgbnpNZW51RHJvcGRvd25TZXJ2aWNlOiBOek1lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGNkciwgbnpNZW51RHJvcGRvd25TZXJ2aWNlLCBub0FuaW1hdGlvbik7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgIGAnbnotZHJvcGRvd24tYnV0dG9uJyBDb21wb25lbnQgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnotZHJvcGRvd24tbWVudScgaW5zdGVhZC4gUmVhZCBodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcm9wZG93bi9lbmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogcmV3cml0ZSBhZnRlclZpZXdJbml0IGhvb2sgKi9cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXJ0U3Vic2NyaWJlKHRoaXMudmlzaWJsZSQpO1xyXG4gIH1cclxufVxyXG4iXX0=