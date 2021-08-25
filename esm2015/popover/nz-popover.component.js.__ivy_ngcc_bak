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
export class NzPopoverComponent extends NzToolTipComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this._prefix = 'ant-popover-placement';
        this.nzShowPopoverCloseButton = false;
        this.nzPopoverCloseButtonLabel = 'close';
        this.nzPopoverForceRestoreFocus = false;
    }
    /**
     * @return {?}
     */
    get simpleHeader() {
        return typeof (this.nzTitle) == 'string';
    }
    /**
     * @return {?}
     */
    focusOnHeader() {
        if (this.simpleHeader && this.focusableHeader != null) {
            this.focusableHeader.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    afterAppearing() {
        this.focusOnHeader();
    }
}
NzPopoverComponent.decorators = [
    { type: Component, args: [{
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
                styles: [`
      .ant-popover {
        position: relative;
      }
    `]
            }] }
];
/** @nocollapse */
NzPopoverComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBd0J6RixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsa0JBQWtCOzs7OztJQXNCeEQsWUFBWSxHQUFzQixFQUE2QixXQUFvQztRQUNqRyxLQUFLLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRHFDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXJCbkcsWUFBTyxHQUFHLHVCQUF1QixDQUFDO1FBV3pCLDZCQUF3QixHQUFZLEtBQUssQ0FBQztRQUMxQyw4QkFBeUIsR0FBVyxPQUFPLENBQUM7UUFDNUMsK0JBQTBCLEdBQVksS0FBSyxDQUFDO0lBVXJELENBQUM7Ozs7SUFSRCxJQUFJLFlBQVk7UUFDZCxPQUFPLE9BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFRRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxFQUFFO1lBQ3JELElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUMzQixvNURBQTBDO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsNEJBQTRCO3dCQUNyQyxXQUFXLEVBQUUsa0JBQWtCO3FCQUNoQztpQkFDRjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO3lCQUV4Qjs7OztLQUlDO2FBRUo7Ozs7WUFwQ0MsaUJBQWlCO1lBWUssc0JBQXNCLHVCQStDUCxJQUFJLFlBQUksUUFBUTs7O3NCQWhCcEQsS0FBSzs4QkFDTCxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3dCQUVsRCxLQUFLO2dDQUNMLFlBQVksU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VDQUUzQyxLQUFLO3dDQUNMLEtBQUs7eUNBQ0wsS0FBSzs4QkFNTCxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBbkIvQyxxQ0FBa0M7Ozs7O0lBS2xDLHFDQUEyQjs7SUFDM0IsNkNBQXdGOztJQUV4Rix1Q0FBNkI7O0lBQzdCLCtDQUFtRjs7SUFFbkYsc0RBQW1EOztJQUNuRCx1REFBcUQ7O0lBQ3JELHdEQUFxRDs7SUFNckQsNkNBQTZFOztJQUV6Qyx5Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHpvb21CaWdNb3Rpb24sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSwgTnpUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotcG9wb3ZlcicsXHJcbiAgZXhwb3J0QXM6ICduelBvcG92ZXJDb21wb25lbnQnLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcG9wb3Zlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IE56UG9wb3ZlckNvbXBvbmVudFxyXG4gICAgfVxyXG4gIF0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtcG9wb3ZlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQb3BvdmVyQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sVGlwQ29tcG9uZW50IHtcclxuICBfcHJlZml4ID0gJ2FudC1wb3BvdmVyLXBsYWNlbWVudCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSBgbmV2ZXJVc2VkVGVtcGxhdGVgIHRvIGZvcmNlIGBuelRlbXBsYXRlYCB0byBiZSBjYXRjaGVkIGJ5IGBuelBvcG92ZXJDb250ZW50YC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuelRpdGxlOiBOelRTVHlwZTtcclxuICBAQ29udGVudENoaWxkKCduZXZlclVzZWRUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIG56Q29udGVudDogTnpUU1R5cGU7XHJcbiAgQENvbnRlbnRDaGlsZCgnbnpUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56Q29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgbnpTaG93UG9wb3ZlckNsb3NlQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpQb3BvdmVyQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nID0gJ2Nsb3NlJztcclxuICBASW5wdXQoKSBuelBvcG92ZXJGb3JjZVJlc3RvcmVGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBnZXQgc2ltcGxlSGVhZGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZih0aGlzLm56VGl0bGUpID09ICdzdHJpbmcnO1xyXG4gIH1cclxuICBcclxuICBAVmlld0NoaWxkKCdmb2N1c2FibGVIZWFkZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgZm9jdXNhYmxlSGVhZGVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHtcclxuICAgIHN1cGVyKGNkciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNPbkhlYWRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNpbXBsZUhlYWRlciAmJiB0aGlzLmZvY3VzYWJsZUhlYWRlciAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNhYmxlSGVhZGVyLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFmdGVyQXBwZWFyaW5nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c09uSGVhZGVyKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==