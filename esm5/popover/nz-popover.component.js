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
                    styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "]
                }] }
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUNyRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RjtJQXNCd0MsOENBQWtCO0lBc0J4RCw0QkFBWSxHQUFzQixFQUE2QixXQUFvQztRQUFuRyxZQUNFLGtCQUFNLEdBQUcsRUFBRSxXQUFXLENBQUMsU0FDeEI7UUFGOEQsaUJBQVcsR0FBWCxXQUFXLENBQXlCO1FBckJuRyxhQUFPLEdBQUcsdUJBQXVCLENBQUM7UUFXekIsOEJBQXdCLEdBQVksS0FBSyxDQUFDO1FBQzFDLCtCQUF5QixHQUFXLE9BQU8sQ0FBQztRQUM1QyxnQ0FBMEIsR0FBWSxLQUFLLENBQUM7O0lBVXJELENBQUM7SUFSRCxzQkFBSSw0Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sT0FBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7Ozs7SUFRRCwwQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLEVBQUU7WUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7O0lBRUQsMkNBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDM0IsbzVEQUEwQztvQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLDRCQUE0Qjs0QkFDckMsV0FBVyxFQUFFLGtCQUFrQjt5QkFDaEM7cUJBQ0Y7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSzs2QkFFeEIsb0VBSUM7aUJBRUo7Ozs7Z0JBcENDLGlCQUFpQjtnQkFZSyxzQkFBc0IsdUJBK0NQLElBQUksWUFBSSxRQUFROzs7MEJBaEJwRCxLQUFLO2tDQUNMLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBRWxELEtBQUs7b0NBQ0wsWUFBWSxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkNBRTNDLEtBQUs7NENBQ0wsS0FBSzs2Q0FDTCxLQUFLO2tDQU1MLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBZWpELHlCQUFDO0NBQUEsQUF6REQsQ0FzQndDLGtCQUFrQixHQW1DekQ7U0FuQ1ksa0JBQWtCOzs7SUFDN0IscUNBQWtDOzs7OztJQUtsQyxxQ0FBMkI7O0lBQzNCLDZDQUF3Rjs7SUFFeEYsdUNBQTZCOztJQUM3QiwrQ0FBbUY7O0lBRW5GLHNEQUFtRDs7SUFDbkQsdURBQXFEOztJQUNyRCx3REFBcUQ7O0lBTXJELDZDQUE2RTs7SUFFekMseUNBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB6b29tQmlnTW90aW9uLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksIE56VG9vbFRpcENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXBvcG92ZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpQb3BvdmVyQ29tcG9uZW50JyxcclxuICBhbmltYXRpb25zOiBbem9vbUJpZ01vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXBvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBOelBvcG92ZXJDb21wb25lbnRcclxuICAgIH1cclxuICBdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LXBvcG92ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UG9wb3ZlckNvbXBvbmVudCBleHRlbmRzIE56VG9vbFRpcENvbXBvbmVudCB7XHJcbiAgX3ByZWZpeCA9ICdhbnQtcG9wb3Zlci1wbGFjZW1lbnQnO1xyXG5cclxuICAvKipcclxuICAgKiBVc2UgYG5ldmVyVXNlZFRlbXBsYXRlYCB0byBmb3JjZSBgbnpUZW1wbGF0ZWAgdG8gYmUgY2F0Y2hlZCBieSBgbnpQb3BvdmVyQ29udGVudGAuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbnpUaXRsZTogTnpUU1R5cGU7XHJcbiAgQENvbnRlbnRDaGlsZCgnbmV2ZXJVc2VkVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuelRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuekNvbnRlbnQ6IE56VFNUeXBlO1xyXG4gIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuekNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIG56U2hvd1BvcG92ZXJDbG9zZUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56UG9wb3ZlckNsb3NlQnV0dG9uTGFiZWw6IHN0cmluZyA9ICdjbG9zZSc7XHJcbiAgQElucHV0KCkgbnpQb3BvdmVyRm9yY2VSZXN0b3JlRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgZ2V0IHNpbXBsZUhlYWRlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YodGhpcy5uelRpdGxlKSA9PSAnc3RyaW5nJztcclxuICB9XHJcbiAgXHJcbiAgQFZpZXdDaGlsZCgnZm9jdXNhYmxlSGVhZGVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIGZvY3VzYWJsZUhlYWRlcjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7XHJcbiAgICBzdXBlcihjZHIsIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcblxyXG4gIGZvY3VzT25IZWFkZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaW1wbGVIZWFkZXIgJiYgdGhpcy5mb2N1c2FibGVIZWFkZXIgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmZvY3VzYWJsZUhlYWRlci5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZnRlckFwcGVhcmluZygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNPbkhlYWRlcigpO1xyXG4gIH1cclxufVxyXG4iXX0=