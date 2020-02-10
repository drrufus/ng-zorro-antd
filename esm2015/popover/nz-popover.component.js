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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
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
    }
    /**
     * @return {?}
     */
    focusOnHeader() {
        if (this.focusableHeader != null) {
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
                template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOpen]=\"_visible\">\r\n  <div class=\"ant-popover\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\">\r\n    <div class=\"ant-popover-content\">\r\n      <div class=\"ant-popover-arrow\"></div>\r\n      <div class=\"ant-popover-inner\" role=\"tooltip\">\r\n        <div>\r\n          <div class=\"ant-popover-title\" *ngIf=\"title\" #focusableHeader tabindex=\"0\">\r\n            <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n          </div>\r\n          <div class=\"ant-popover-inner-content\">\r\n            <ng-container *nzStringTemplateOutlet=\"content\">{{ content }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
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
    NzPopoverComponent.prototype.focusableHeader;
    /** @type {?} */
    NzPopoverComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUNyRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQXdCekYsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGtCQUFrQjs7Ozs7SUFjeEQsWUFBWSxHQUFzQixFQUE2QixXQUFvQztRQUNqRyxLQUFLLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRHFDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQWJuRyxZQUFPLEdBQUcsdUJBQXVCLENBQUM7SUFlbEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUMzQiwweENBQTBDO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsNEJBQTRCO3dCQUNyQyxXQUFXLEVBQUUsa0JBQWtCO3FCQUNoQztpQkFDRjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO3lCQUV4Qjs7OztLQUlDO2FBRUo7Ozs7WUFwQ0MsaUJBQWlCO1lBWUssc0JBQXNCLHVCQXVDUCxJQUFJLFlBQUksUUFBUTs7O3NCQVJwRCxLQUFLOzhCQUNMLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7d0JBRWxELEtBQUs7Z0NBQ0wsWUFBWSxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7OEJBRTNDLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFYL0MscUNBQWtDOzs7OztJQUtsQyxxQ0FBMkI7O0lBQzNCLDZDQUF3Rjs7SUFFeEYsdUNBQTZCOztJQUM3QiwrQ0FBbUY7O0lBRW5GLDZDQUE2RTs7SUFFekMseUNBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgem9vbUJpZ01vdGlvbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LCBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1wb3BvdmVyJyxcclxuICBleHBvcnRBczogJ256UG9wb3ZlckNvbXBvbmVudCcsXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1wb3BvdmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LFxyXG4gICAgICB1c2VFeGlzdGluZzogTnpQb3BvdmVyQ29tcG9uZW50XHJcbiAgICB9XHJcbiAgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1wb3BvdmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelBvcG92ZXJDb21wb25lbnQgZXh0ZW5kcyBOelRvb2xUaXBDb21wb25lbnQge1xyXG4gIF9wcmVmaXggPSAnYW50LXBvcG92ZXItcGxhY2VtZW50JztcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIGBuZXZlclVzZWRUZW1wbGF0ZWAgdG8gZm9yY2UgYG56VGVtcGxhdGVgIHRvIGJlIGNhdGNoZWQgYnkgYG56UG9wb3ZlckNvbnRlbnRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IE56VFNUeXBlO1xyXG4gIEBDb250ZW50Q2hpbGQoJ25ldmVyVXNlZFRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgbnpUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgbnpDb250ZW50OiBOelRTVHlwZTtcclxuICBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgbnpDb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBAVmlld0NoaWxkKCdmb2N1c2FibGVIZWFkZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgZm9jdXNhYmxlSGVhZGVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHtcclxuICAgIHN1cGVyKGNkciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNPbkhlYWRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZvY3VzYWJsZUhlYWRlciAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNhYmxlSGVhZGVyLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFmdGVyQXBwZWFyaW5nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c09uSGVhZGVyKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==