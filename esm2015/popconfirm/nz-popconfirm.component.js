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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Host, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
export class NzPopconfirmComponent extends NzToolTipComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this.nzOkType = 'primary';
        this.nzCondition = false;
        this.nzOnCancel = new EventEmitter();
        this.nzOnConfirm = new EventEmitter();
        this._prefix = 'ant-popover-placement';
        this._trigger = 'click';
        this._hasBackdrop = true;
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.nzCondition) {
            super.show();
        }
        else {
            this.onConfirm();
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.nzOnCancel.emit();
        super.hide();
    }
    /**
     * @return {?}
     */
    onConfirm() {
        this.nzOnConfirm.emit();
        super.hide();
    }
}
NzPopconfirmComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-popconfirm',
                exportAs: 'nzPopconfirmComponent',
                preserveWhitespaces: false,
                animations: [zoomBigMotion],
                template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOpen]=\"_visible\">\r\n  <div class=\"ant-popover\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\">\r\n    <div class=\"ant-popover-content\">\r\n      <div class=\"ant-popover-arrow\"></div>\r\n      <div class=\"ant-popover-inner\">\r\n        <div>\r\n          <div class=\"ant-popover-inner-content\">\r\n            <div class=\"ant-popover-message\">\r\n              <ng-container *nzStringTemplateOutlet=\"title\">\r\n                <ng-container *nzStringTemplateOutlet=\"nzIcon\">\r\n                  <i nz-icon [nzType]=\"nzIcon || 'exclamation-circle'\" nzTheme=\"fill\"></i>\r\n                </ng-container>\r\n                <div class=\"ant-popover-message-title\">{{ title }}</div>\r\n              </ng-container>\r\n            </div>\r\n            <div class=\"ant-popover-buttons\">\r\n              <button nz-button [nzSize]=\"'small'\" (click)=\"onCancel()\">\r\n                <ng-container *ngIf=\"nzCancelText\">{{ nzCancelText }}</ng-container>\r\n                <ng-container *ngIf=\"!nzCancelText\">{{ 'Modal.cancelText' | nzI18n }}</ng-container>\r\n              </button>\r\n              <button nz-button [nzSize]=\"'small'\" [nzType]=\"nzOkType\" (click)=\"onConfirm()\">\r\n                <ng-container *ngIf=\"nzOkText\">{{ nzOkText }}</ng-container>\r\n                <ng-container *ngIf=\"!nzOkText\">{{ 'Modal.okText' | nzI18n }}</ng-container>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
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
            }] }
];
/** @nocollapse */
NzPopconfirmComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzPopconfirmComponent.propDecorators = {
    nzOkText: [{ type: Input }],
    nzOkType: [{ type: Input }],
    nzCancelText: [{ type: Input }],
    nzCondition: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzOnCancel: [{ type: Output }],
    nzOnConfirm: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
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
    NzPopconfirmComponent.prototype._prefix;
    /** @type {?} */
    NzPopconfirmComponent.prototype._trigger;
    /** @type {?} */
    NzPopconfirmComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzPopconfirmComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vIiwic291cmNlcyI6WyJuei1wb3Bjb25maXJtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsNEJBQTRCLEVBQW9CLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUF3QjNHLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxrQkFBa0I7Ozs7O0lBYzNELFlBQVksR0FBc0IsRUFBNkIsV0FBb0M7UUFDakcsS0FBSyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQURxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFaMUYsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUViLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRzFCLGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxnQkFBVyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFLFlBQU8sR0FBRyx1QkFBdUIsQ0FBQztRQUNsQyxhQUFRLEdBQXFCLE9BQU8sQ0FBQztRQUNyQyxpQkFBWSxHQUFHLElBQUksQ0FBQztJQUlwQixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNkO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUMzQixnbEVBQTZDO2dCQUM3QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLDRCQUE0Qjt3QkFDckMsV0FBVyxFQUFFLHFCQUFxQjtxQkFDbkM7aUJBQ0Y7eUJBRUM7Ozs7S0FJQzthQUVKOzs7O1lBbkNDLGlCQUFpQjtZQVdtQixzQkFBc0IsdUJBdUNyQixJQUFJLFlBQUksUUFBUTs7O3VCQWJwRCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7eUJBRUwsTUFBTTswQkFDTixNQUFNOztBQUprQjtJQUFmLFlBQVksRUFBRTs7MERBQXFCOzs7SUFIN0MseUNBQTBCOztJQUMxQix5Q0FBc0M7O0lBQ3RDLDZDQUE4Qjs7SUFDOUIsNENBQTZDOztJQUM3Qyx1Q0FBNEM7O0lBRTVDLDJDQUF1RTs7SUFDdkUsNENBQXdFOztJQUV4RSx3Q0FBa0M7O0lBQ2xDLHlDQUFxQzs7SUFDckMsNkNBQW9COztJQUVnQiw0Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgem9vbUJpZ01vdGlvbiwgSW5wdXRCb29sZWFuLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSwgTnpUb29sdGlwVHJpZ2dlciwgTnpUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1wb3Bjb25maXJtJyxcclxuICBleHBvcnRBczogJ256UG9wY29uZmlybUNvbXBvbmVudCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1wb3Bjb25maXJtLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IE56UG9wY29uZmlybUNvbXBvbmVudFxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtcG9wb3ZlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQb3Bjb25maXJtQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sVGlwQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuek9rVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T2tUeXBlOiBzdHJpbmcgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCkgbnpDYW5jZWxUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29uZGl0aW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNvbmZpcm06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgX3ByZWZpeCA9ICdhbnQtcG9wb3Zlci1wbGFjZW1lbnQnO1xyXG4gIF90cmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyID0gJ2NsaWNrJztcclxuICBfaGFzQmFja2Ryb3AgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHtcclxuICAgIHN1cGVyKGNkciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekNvbmRpdGlvbikge1xyXG4gICAgICBzdXBlci5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uQ29uZmlybSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25DYW5jZWwuZW1pdCgpO1xyXG4gICAgc3VwZXIuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Db25maXJtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek9uQ29uZmlybS5lbWl0KCk7XHJcbiAgICBzdXBlci5oaWRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==