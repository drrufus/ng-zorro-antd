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
import { ComponentFactoryResolver, Directive, ElementRef, Host, Input, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy } from './base/nz-tooltip-base-legacy.component';
import { NzTooltipBaseDirective } from './base/nz-tooltip-base.directive';
import { NzToolTipComponent } from './nz-tooltip.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
export class NzTooltipDirective extends NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?=} _tooltip
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
        super(elementRef, hostView, resolver, renderer, _tooltip, noAnimation);
        this.componentFactory = this.resolver.resolveComponentFactory(NzToolTipComponent);
    }
}
NzTooltipDirective.ɵfac = function NzTooltipDirective_Factory(t) { return new (t || NzTooltipDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzTooltipBaseComponentLegacy, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzTooltipDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTooltipDirective, selectors: [["", "nz-tooltip", ""]], hostVars: 2, hostBindings: function NzTooltipDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tooltip-open", ctx.isTooltipComponentVisible);
    } }, inputs: { specificTitle: ["nzTooltipTitle", "specificTitle"], directiveNameTitle: ["nz-tooltip", "directiveNameTitle"], specificTrigger: ["nzTooltipTrigger", "specificTrigger"], specificPlacement: ["nzTooltipPlacement", "specificPlacement"] }, exportAs: ["nzTooltip"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
NzTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzTooltipBaseComponentLegacy, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTooltipDirective.propDecorators = {
    specificTitle: [{ type: Input, args: ['nzTooltipTitle',] }],
    directiveNameTitle: [{ type: Input, args: ['nz-tooltip',] }],
    specificTrigger: [{ type: Input, args: ['nzTooltipTrigger',] }],
    specificPlacement: [{ type: Input, args: ['nzTooltipPlacement',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-tooltip]',
                exportAs: 'nzTooltip',
                host: {
                    '[class.ant-tooltip-open]': 'isTooltipComponentVisible'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.Renderer2 }, { type: NzTooltipBaseComponentLegacy, decorators: [{
                type: Optional
            }] }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { specificTitle: [{
            type: Input,
            args: ['nzTooltipTitle']
        }], directiveNameTitle: [{
            type: Input,
            args: ['nz-tooltip']
        }], specificTrigger: [{
            type: Input,
            args: ['nzTooltipTrigger']
        }], specificPlacement: [{
            type: Input,
            args: ['nzTooltipPlacement']
        }] }); })();
if (false) {
    /**
     * The title that should have highest priority.
     * @type {?}
     */
    NzTooltipDirective.prototype.specificTitle;
    /**
     * Use the directive's name as the title that have priority in the second place.
     * @type {?}
     */
    NzTooltipDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzTooltipDirective.prototype.specificTrigger;
    /** @type {?} */
    NzTooltipDirective.prototype.specificPlacement;
    /** @type {?} */
    NzTooltipDirective.prototype.componentFactory;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvbnotdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBVTVELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxzQkFBc0I7Ozs7Ozs7OztJQWdCNUQsWUFDRSxVQUFzQixFQUN0QixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNQLFFBQXVDLEVBQy9CLFdBQW9DO1FBRXhELEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBVnpFLHFCQUFnQixHQUF5QyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFXbkgsQ0FBQzs7Ozs7Q0FDRiwrQ0FqQ0EsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxjQUFjLGtCQUN4QixRQUFRLEVBQUUsV0FBVyxrQkFDckIsSUFBSSxFQUFFLHNCQUNKLDBCQUEwQixFQUFFLDJCQUEyQixrQkFDeEQsY0FDRiwrQ0FDSTs7O1lBdEJILFVBQVU7WUFLVixnQkFBZ0I7WUFQaEIsd0JBQXdCO1lBTXhCLFNBQVM7WUFNRiw0QkFBNEIsdUJBaUNoQyxRQUFRO1lBbkNKLHNCQUFzQix1QkFvQzFCLElBQUksWUFBSSxRQUFROzs7NEJBbEJsQixLQUFLLFNBQUMsZ0JBQWdCO2lDQUt0QixLQUFLLFNBQUMsWUFBWTs4QkFFbEIsS0FBSyxTQUFDLGtCQUFrQjtnQ0FDeEIsS0FBSyxTQUFDLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQVE7Ozs7OztJQVJuQywyQ0FBaUQ7Ozs7O0lBS2pELGdEQUF5RDs7SUFFekQsNkNBQTZEOztJQUM3RCwrQ0FBdUQ7O0lBRXZELDhDQUFtSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5IH0gZnJvbSAnLi9iYXNlL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB9IGZyb20gJy4vYmFzZS9uei10b29sdGlwLWJhc2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnLi9uei10b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuL256LXRvb2x0aXAuZGVmaW5pdGlvbnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotdG9vbHRpcF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpUb29sdGlwJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10b29sdGlwLW9wZW5dJzogJ2lzVG9vbHRpcENvbXBvbmVudFZpc2libGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUb29sdGlwRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpdGxlIHRoYXQgc2hvdWxkIGhhdmUgaGlnaGVzdCBwcmlvcml0eS5cclxuICAgKi9cclxuICBASW5wdXQoJ256VG9vbHRpcFRpdGxlJykgc3BlY2lmaWNUaXRsZTogTnpUU1R5cGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGUgZGlyZWN0aXZlJ3MgbmFtZSBhcyB0aGUgdGl0bGUgdGhhdCBoYXZlIHByaW9yaXR5IGluIHRoZSBzZWNvbmQgcGxhY2UuXHJcbiAgICovXHJcbiAgQElucHV0KCduei10b29sdGlwJykgZGlyZWN0aXZlTmFtZVRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcblxyXG4gIEBJbnB1dCgnbnpUb29sdGlwVHJpZ2dlcicpIHNwZWNpZmljVHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlcjtcclxuICBASW5wdXQoJ256VG9vbHRpcFBsYWNlbWVudCcpIHNwZWNpZmljUGxhY2VtZW50OiBzdHJpbmc7XHJcblxyXG4gIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpUb29sVGlwQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTnpUb29sVGlwQ29tcG9uZW50KTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBPcHRpb25hbCgpIF90b29sdGlwPzogTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCBfdG9vbHRpcCwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxufVxyXG4iXX0=