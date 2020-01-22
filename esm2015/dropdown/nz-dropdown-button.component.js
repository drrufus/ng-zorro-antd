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
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZHJvcGRvd24vIiwic291cmNlcyI6WyJuei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFFSixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxXQUFXLEVBQ1gsZUFBZSxFQUNmLGlDQUFpQyxFQUNqQyxzQkFBc0IsRUFDdkIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztXQWFqRCxrQkFBa0I7QUF1QnBDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG1CQUFtQjs7Ozs7O0lBT2hFLFlBQ0UsR0FBc0IsRUFDdEIscUJBQTRDLEVBQ2pCLFdBQW9DO1FBRS9ELEtBQUssQ0FBQyxHQUFHLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFGcEIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBVHhELFdBQU0sR0FBRyxTQUFTLENBQUM7UUFDbkIsV0FBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQixXQUFNLEdBQStCLFVBQVUsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQVMxRCxlQUFlLENBQ2IsMEpBQTBKLENBQzNKLENBQUM7SUFDSixDQUFDOzs7OztJQUdELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDekIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUU7b0JBQ1QscUJBQXFCO29CQUNyQjt3QkFDRSxPQUFPLEVBQUUsaUNBQWlDO3dCQUMxQyxVQUFVLElBQW9CO3dCQUM5QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQy9CO2lCQUNGO2dCQUNELHFzREFBa0Q7eUJBRWhEOzs7Ozs7Ozs7Ozs7OztLQWNDO2FBRUo7Ozs7WUE1REMsaUJBQWlCO1lBeUJWLHFCQUFxQjtZQUw1QixzQkFBc0IsdUJBc0RuQixJQUFJLFlBQUksUUFBUTs7O3FCQVRsQixLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxNQUFNO2tDQUNOLFNBQVMsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFKaEQsMkNBQTRCOztJQUM1QiwyQ0FBNEI7O0lBQzVCLDJDQUF5RDs7SUFDekQsNENBQTREOztJQUM1RCx3REFBMkY7O0lBS3pGLGdEQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzbGlkZU1vdGlvbixcclxuICB3YXJuRGVwcmVjYXRpb24sXHJcbiAgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgbWVudVNlcnZpY2VGYWN0b3J5LCBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOek1lbnVEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUtZHJvcGRvd24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWRyb3Bkb3duLWJ1dHRvbicsXHJcbiAgZXhwb3J0QXM6ICduekRyb3Bkb3duQnV0dG9uJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOek1lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICAgICAgdXNlRmFjdG9yeTogbWVudVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cclxuICAgIH1cclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1kcm9wZG93bi1idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpyb290IC5hbnQtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgVXNlIGBOekRyb3Bkb3duRGlyZWN0aXZlYCBpbnN0ZWFkLCB3aWxsIHJlbW92ZSBpbiA5LjAuMC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOekRyb3BEb3duQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgTnpEcm9wRG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuelNpemUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnZWxsaXBzaXMnO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG4gIEBWaWV3Q2hpbGQoTnpEcm9wRG93bkRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgbnpEcm9wRG93bkRpcmVjdGl2ZTogTnpEcm9wRG93bkRpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgbnpNZW51RHJvcGRvd25TZXJ2aWNlOiBOek1lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGNkciwgbnpNZW51RHJvcGRvd25TZXJ2aWNlLCBub0FuaW1hdGlvbik7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgIGAnbnotZHJvcGRvd24tYnV0dG9uJyBDb21wb25lbnQgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnotZHJvcGRvd24tbWVudScgaW5zdGVhZC4gUmVhZCBodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcm9wZG93bi9lbmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogcmV3cml0ZSBhZnRlclZpZXdJbml0IGhvb2sgKi9cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXJ0U3Vic2NyaWJlKHRoaXMudmlzaWJsZSQpO1xyXG4gIH1cclxufVxyXG4iXX0=