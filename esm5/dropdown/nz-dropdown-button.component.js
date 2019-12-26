/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown-button.component.ts
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
    NzDropDownButtonComponent.decorators = [
        { type: Component, args: [{
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
                }] }
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZHJvcGRvd24vIiwic291cmNlcyI6WyJuei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUVKLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsaUNBQWlDLEVBQ2pDLHNCQUFzQixFQUN2QixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO1NBYWpELGtCQUFrQjtBQVhwQztJQXFDK0MscURBQW1CO0lBT2hFLG1DQUNFLEdBQXNCLEVBQ3RCLHFCQUE0QyxFQUNqQixXQUFvQztRQUhqRSxZQUtFLGtCQUFNLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxXQUFXLENBQUMsU0FJL0M7UUFONEIsaUJBQVcsR0FBWCxXQUFXLENBQXlCO1FBVHhELFlBQU0sR0FBRyxTQUFTLENBQUM7UUFDbkIsWUFBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQixZQUFNLEdBQStCLFVBQVUsQ0FBQztRQUN0QyxhQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQVMxRCxlQUFlLENBQ2IsMEpBQTBKLENBQzNKLENBQUM7O0lBQ0osQ0FBQztJQUVELGlDQUFpQzs7Ozs7SUFDakMsc0RBQWtCOzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBMURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0JBQ3pCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULHFCQUFxQjt3QkFDckI7NEJBQ0UsT0FBTyxFQUFFLGlDQUFpQzs0QkFDMUMsVUFBVSxJQUFvQjs0QkFDOUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3lCQUMvQjtxQkFDRjtvQkFDRCxxc0RBQWtEOzZCQUVoRCxrU0FjQztpQkFFSjs7OztnQkE1REMsaUJBQWlCO2dCQXlCVixxQkFBcUI7Z0JBTDVCLHNCQUFzQix1QkFzRG5CLElBQUksWUFBSSxRQUFROzs7eUJBVGxCLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLE1BQU07c0NBQ04sU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFpQmxELGdDQUFDO0NBQUEsQUEzREQsQ0FxQytDLG1CQUFtQixHQXNCakU7U0F0QlkseUJBQXlCOzs7SUFDcEMsMkNBQTRCOztJQUM1QiwyQ0FBNEI7O0lBQzVCLDJDQUF5RDs7SUFDekQsNENBQTREOztJQUM1RCx3REFBMkY7O0lBS3pGLGdEQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzbGlkZU1vdGlvbixcclxuICB3YXJuRGVwcmVjYXRpb24sXHJcbiAgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgbWVudVNlcnZpY2VGYWN0b3J5LCBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOek1lbnVEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUtZHJvcGRvd24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWRyb3Bkb3duLWJ1dHRvbicsXHJcbiAgZXhwb3J0QXM6ICduekRyb3Bkb3duQnV0dG9uJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOek1lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICAgICAgdXNlRmFjdG9yeTogbWVudVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cclxuICAgIH1cclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1kcm9wZG93bi1idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpyb290IC5hbnQtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgVXNlIGBOekRyb3Bkb3duRGlyZWN0aXZlYCBpbnN0ZWFkLCB3aWxsIHJlbW92ZSBpbiA5LjAuMC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOekRyb3BEb3duQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgTnpEcm9wRG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuelNpemUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnZWxsaXBzaXMnO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG4gIEBWaWV3Q2hpbGQoTnpEcm9wRG93bkRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgbnpEcm9wRG93bkRpcmVjdGl2ZTogTnpEcm9wRG93bkRpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgbnpNZW51RHJvcGRvd25TZXJ2aWNlOiBOek1lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGNkciwgbnpNZW51RHJvcGRvd25TZXJ2aWNlLCBub0FuaW1hdGlvbik7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgIGAnbnotZHJvcGRvd24tYnV0dG9uJyBDb21wb25lbnQgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnotZHJvcGRvd24tbWVudScgaW5zdGVhZC4gUmVhZCBodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcm9wZG93bi9lbmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogcmV3cml0ZSBhZnRlclZpZXdJbml0IGhvb2sgKi9cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXJ0U3Vic2NyaWJlKHRoaXMudmlzaWJsZSQpO1xyXG4gIH1cclxufVxyXG4iXX0=