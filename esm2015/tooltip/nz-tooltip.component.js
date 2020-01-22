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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy } from './base/nz-tooltip-base-legacy.component';
export class NzToolTipComponent extends NzTooltipBaseComponentLegacy {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr);
        this.noAnimation = noAnimation;
    }
}
NzToolTipComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tooltip',
                exportAs: 'nzTooltipComponent',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [zoomBigMotion],
                template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayOpen]=\"_visible\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div\r\n    class=\"ant-tooltip\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\">\r\n    <div class=\"ant-tooltip-content\">\r\n      <div class=\"ant-tooltip-arrow\"></div>\r\n      <div class=\"ant-tooltip-inner\">\r\n        <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: NzTooltipBaseComponentLegacy,
                        useExisting: NzToolTipComponent
                    }
                ],
                styles: [`
      .ant-tooltip {
        position: relative;
      }
    `]
            }] }
];
/** @nocollapse */
NzToolTipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzToolTipComponent.propDecorators = {
    nzTitle: [{ type: Input }],
    nzTitleTemplate: [{ type: ContentChild, args: ['nzTemplate', { static: true },] }]
};
if (false) {
    /** @type {?} */
    NzToolTipComponent.prototype.nzTitle;
    /** @type {?} */
    NzToolTipComponent.prototype.nzTitleTemplate;
    /** @type {?} */
    NzToolTipComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJuei10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFFckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUF3QnZGLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSw0QkFBNEI7Ozs7O0lBSWxFLFlBQVksR0FBc0IsRUFBNkIsV0FBb0M7UUFDakcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRGtELGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtJQUVuRyxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDM0IsNjhCQUEwQztnQkFDMUMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSw0QkFBNEI7d0JBQ3JDLFdBQVcsRUFBRSxrQkFBa0I7cUJBQ2hDO2lCQUNGO3lCQUVDOzs7O0tBSUM7YUFFSjs7OztZQW5DQyxpQkFBaUI7WUFVSyxzQkFBc0IsdUJBOEJQLElBQUksWUFBSSxRQUFROzs7c0JBSHBELEtBQUs7OEJBQ0wsWUFBWSxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFENUMscUNBQWtDOztJQUNsQyw2Q0FBaUY7O0lBRTdDLHlDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHpvb21CaWdNb3Rpb24sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kgfSBmcm9tICcuL2Jhc2UvbnotdG9vbHRpcC1iYXNlLWxlZ2FjeS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei10b29sdGlwJyxcclxuICBleHBvcnRBczogJ256VG9vbHRpcENvbXBvbmVudCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBhbmltYXRpb25zOiBbem9vbUJpZ01vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LFxyXG4gICAgICB1c2VFeGlzdGluZzogTnpUb29sVGlwQ29tcG9uZW50XHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC10b29sdGlwIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRvb2xUaXBDb21wb25lbnQgZXh0ZW5kcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5IHtcclxuICBASW5wdXQoKSBuelRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcbiAgQENvbnRlbnRDaGlsZCgnbnpUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge1xyXG4gICAgc3VwZXIoY2RyKTtcclxuICB9XHJcbn1cclxuIl19