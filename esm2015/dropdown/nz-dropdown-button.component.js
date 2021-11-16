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
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", ctx_r0.nzIcon);
} }
function NzDropDownButtonComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵlistener("mouseenter", function NzDropDownButtonComponent_ng_template_6_Template_div_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.setVisibleStateWhen(true, "hover"); })("mouseleave", function NzDropDownButtonComponent_ng_template_6_Template_div_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.setVisibleStateWhen(false, "hover"); });
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap("ant-dropdown ant-dropdown-placement-" + ctx_r1.nzPlacement);
    ɵngcc0.ɵɵstyleProp("min-width", ctx_r1.triggerWidth, "px");
    ɵngcc0.ɵɵproperty("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@slideMotion", ctx_r1.dropDownPosition);
} }
const _c0 = ["*", [["", "nz-menu", ""]]];
const _c1 = ["*", "[nz-menu]"];
const ɵ0 = menuServiceFactory;
/**
 * @deprecated Use `NzDropdownDirective` instead, will remove in 9.0.0.
 */
export class NzDropDownButtonComponent extends NzDropDownComponent {
    /**
     * @param {?} cdr
     * @param {?} nzMenuDropdownService
     * @param {?=} noAnimation
     */
    constructor(cdr, nzMenuDropdownService, noAnimation) {
        super(cdr, nzMenuDropdownService, noAnimation);
        this.noAnimation = noAnimation;
        this.nzSize = 'default';
        this.nzType = 'default';
        this.nzIcon = 'ellipsis';
        this.nzClick = new EventEmitter();
        warnDeprecation(`'nz-dropdown-button' Component is going to be removed in 9.0.0. Please use 'nz-dropdown-menu' instead. Read https://ng.ant.design/components/dropdown/en`);
    }
    /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    ngAfterContentInit() {
        this.startSubscribe(this.visible$);
    }
}
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
/** @nocollapse */
NzDropDownButtonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzMenuDropdownService },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzDropDownButtonComponent.propDecorators = {
    nzSize: [{ type: Input }],
    nzType: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzClick: [{ type: Output }],
    nzDropDownDirective: [{ type: ViewChild, args: [NzDropDownDirective, { static: true },] }]
};
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
                styles: [`
      nz-dropdown-button {
        position: relative;
        display: inline-block;
      }

      :root .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvZHJvcGRvd24vbnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBRUosU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsV0FBVyxFQUNYLGVBQWUsRUFDZixpQ0FBaUMsRUFDakMsc0JBQXNCLEVBQ3ZCLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbkUsV0FZa0Isa0JBQWtCO0FBdUJwQzs7R0FFRztBQUNILE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxtQkFBbUI7Ozs7OztJQU9oRSxZQUNFLEdBQXNCLEVBQ3RCLHFCQUE0QyxFQUNqQixXQUFvQztRQUUvRCxLQUFLLENBQUMsR0FBRyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRnBCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQVR4RCxXQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ25CLFdBQU0sR0FBRyxTQUFTLENBQUM7UUFDbkIsV0FBTSxHQUErQixVQUFVLENBQUM7UUFDdEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFTMUQsZUFBZSxDQUNiLDBKQUEwSixDQUMzSixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFHRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNGLHNEQTNEQSxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG9CQUFvQixrQkFDOUIsUUFBUSxFQUFFLGtCQUFrQixrQkFDNUIsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUN6QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLFNBQVMsRUFBRSxzQkFDVCxxQkFBcUIsc0JBQ3JCLDBCQUNFLE9BQU8sRUFBRSxpQ0FBaUMsMEJBQzFDLFVBQVUsSUFBb0IsMEJBQzlCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxBQXVCbEI7R0F2QnNCLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDL0Isa0JBQ0Y7S0FDRCxPQTFDQSxpQkFBaUI7WUF5QlYscUJBQXFCO1lBTDVCLHNCQUFzQix1QkFzRG5CLElBQUksWUFBSSxRQUFROzs7cUJBVGxCLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLE1BQU07a0NBQ04sU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3a0JBM0JFLDJCQUVoRCxvUkFjQyxlQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFTeUQ7OztJQUp4RCwyQ0FBNEI7O0lBQzVCLDJDQUE0Qjs7SUFDNUIsMkNBQXlEOztJQUN6RCw0Q0FBNEQ7O0lBQzVELHdEQUEyRjs7SUFLekYsZ0RBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFNlbGYsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHNsaWRlTW90aW9uLFxyXG4gIHdhcm5EZXByZWNhdGlvbixcclxuICBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBtZW51U2VydmljZUZhY3RvcnksIE56RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICcuL256LWRyb3Bkb3duLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56TWVudURyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vbnotbWVudS1kcm9wZG93bi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZHJvcGRvd24tYnV0dG9uJyxcclxuICBleHBvcnRBczogJ256RHJvcGRvd25CdXR0b24nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE56TWVudURyb3Bkb3duU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gICAgICB1c2VGYWN0b3J5OiBtZW51U2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNlbGYoKSwgSW5qZWN0b3JdXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRyb3Bkb3duLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWRyb3Bkb3duLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgOnJvb3QgLmFudC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBVc2UgYE56RHJvcGRvd25EaXJlY3RpdmVgIGluc3RlYWQsIHdpbGwgcmVtb3ZlIGluIDkuMC4wLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE56RHJvcERvd25CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBOekRyb3BEb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56U2l6ZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelR5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICdlbGxpcHNpcyc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQFZpZXdDaGlsZChOekRyb3BEb3duRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBuekRyb3BEb3duRGlyZWN0aXZlOiBOekRyb3BEb3duRGlyZWN0aXZlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBuek1lbnVEcm9wZG93blNlcnZpY2U6IE56TWVudURyb3Bkb3duU2VydmljZSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoY2RyLCBuek1lbnVEcm9wZG93blNlcnZpY2UsIG5vQW5pbWF0aW9uKTtcclxuICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgYCduei1kcm9wZG93bi1idXR0b24nIENvbXBvbmVudCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduei1kcm9wZG93bi1tZW51JyBpbnN0ZWFkLiBSZWFkIGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2Ryb3Bkb3duL2VuYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiByZXdyaXRlIGFmdGVyVmlld0luaXQgaG9vayAqL1xyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhcnRTdWJzY3JpYmUodGhpcy52aXNpYmxlJCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==