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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
var NzPopoverComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopoverComponent, _super);
    function NzPopoverComponent(cdr, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this._prefix = 'ant-popover-placement';
        return _this;
    }
    NzPopoverComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-popover',
                    exportAs: 'nzPopoverComponent',
                    animations: [zoomBigMotion],
                    template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOpen]=\"_visible\">\r\n  <div class=\"ant-popover\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\">\r\n    <div class=\"ant-popover-content\">\r\n      <div class=\"ant-popover-arrow\"></div>\r\n      <div class=\"ant-popover-inner\" role=\"tooltip\">\r\n        <div>\r\n          <div class=\"ant-popover-title\" *ngIf=\"title\">\r\n            <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n          </div>\r\n          <div class=\"ant-popover-inner-content\">\r\n            <ng-container *nzStringTemplateOutlet=\"content\">{{ content }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
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
        nzContentTemplate: [{ type: ContentChild, args: ['nzTemplate', { static: true },] }]
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
    NzPopoverComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXpGO0lBc0J3Qyw4Q0FBa0I7SUFZeEQsNEJBQVksR0FBc0IsRUFBNkIsV0FBb0M7UUFBbkcsWUFDRSxrQkFBTSxHQUFHLEVBQUUsV0FBVyxDQUFDLFNBQ3hCO1FBRjhELGlCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQVhuRyxhQUFPLEdBQUcsdUJBQXVCLENBQUM7O0lBYWxDLENBQUM7O2dCQXBDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDM0IsMHZDQUEwQztvQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLDRCQUE0Qjs0QkFDckMsV0FBVyxFQUFFLGtCQUFrQjt5QkFDaEM7cUJBQ0Y7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSzs2QkFFeEIsb0VBSUM7aUJBRUo7Ozs7Z0JBbENDLGlCQUFpQjtnQkFVSyxzQkFBc0IsdUJBcUNQLElBQUksWUFBSSxRQUFROzs7MEJBTnBELEtBQUs7a0NBQ0wsWUFBWSxTQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs0QkFFbEQsS0FBSztvQ0FDTCxZQUFZLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFLOUMseUJBQUM7Q0FBQSxBQXJDRCxDQXNCd0Msa0JBQWtCLEdBZXpEO1NBZlksa0JBQWtCOzs7SUFDN0IscUNBQWtDOzs7OztJQUtsQyxxQ0FBMkI7O0lBQzNCLDZDQUF3Rjs7SUFFeEYsdUNBQTZCOztJQUM3QiwrQ0FBbUY7O0lBRS9DLHlDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHpvb21CaWdNb3Rpb24sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSwgTnpUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotcG9wb3ZlcicsXHJcbiAgZXhwb3J0QXM6ICduelBvcG92ZXJDb21wb25lbnQnLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcG9wb3Zlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IE56UG9wb3ZlckNvbXBvbmVudFxyXG4gICAgfVxyXG4gIF0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtcG9wb3ZlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQb3BvdmVyQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sVGlwQ29tcG9uZW50IHtcclxuICBfcHJlZml4ID0gJ2FudC1wb3BvdmVyLXBsYWNlbWVudCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSBgbmV2ZXJVc2VkVGVtcGxhdGVgIHRvIGZvcmNlIGBuelRlbXBsYXRlYCB0byBiZSBjYXRjaGVkIGJ5IGBuelBvcG92ZXJDb250ZW50YC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuelRpdGxlOiBOelRTVHlwZTtcclxuICBAQ29udGVudENoaWxkKCduZXZlclVzZWRUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIG56Q29udGVudDogTnpUU1R5cGU7XHJcbiAgQENvbnRlbnRDaGlsZCgnbnpUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56Q29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7XHJcbiAgICBzdXBlcihjZHIsIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcbn1cclxuIl19