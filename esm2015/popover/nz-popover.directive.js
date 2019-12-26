/**
 * @fileoverview added by tsickle
 * Generated from: nz-popover.directive.ts
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
import { NzTooltipBaseDirective } from 'ng-zorro-antd/tooltip';
import { NzPopoverComponent } from './nz-popover.component';
export class NzPopoverDirective extends NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?} tooltip
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        super(elementRef, hostView, resolver, renderer, tooltip, noAnimation);
        this.noAnimation = noAnimation;
        this.componentFactory = this.resolver.resolveComponentFactory(NzPopoverComponent);
    }
}
NzPopoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-popover]',
                exportAs: 'nzPopover',
                host: {
                    '[class.ant-popover-open]': 'isTooltipComponentVisible'
                }
            },] }
];
/** @nocollapse */
NzPopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzPopoverComponent, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzPopoverDirective.propDecorators = {
    specificTitle: [{ type: Input, args: ['nzPopoverTitle',] }],
    specificContent: [{ type: Input, args: ['nzPopoverContent',] }],
    directiveNameTitle: [{ type: Input, args: ['nz-popover',] }],
    specificTrigger: [{ type: Input, args: ['nzPopoverTrigger',] }],
    specificPlacement: [{ type: Input, args: ['nzPopoverPlacement',] }]
};
if (false) {
    /** @type {?} */
    NzPopoverDirective.prototype.specificTitle;
    /** @type {?} */
    NzPopoverDirective.prototype.specificContent;
    /** @type {?} */
    NzPopoverDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzPopoverDirective.prototype.specificTrigger;
    /** @type {?} */
    NzPopoverDirective.prototype.specificPlacement;
    /** @type {?} */
    NzPopoverDirective.prototype.componentFactory;
    /** @type {?} */
    NzPopoverDirective.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQW9CLE1BQU0sdUJBQXVCLENBQUM7QUFFakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFTNUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHNCQUFzQjs7Ozs7Ozs7O0lBUzVELFlBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDUCxPQUEyQixFQUNaLFdBQW9DO1FBRS9ELEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRjNDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQVJqRSxxQkFBZ0IsR0FBeUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBV25ILENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUU7b0JBQ0osMEJBQTBCLEVBQUUsMkJBQTJCO2lCQUN4RDthQUNGOzs7O1lBbkJDLFVBQVU7WUFLVixnQkFBZ0I7WUFQaEIsd0JBQXdCO1lBTXhCLFNBQVM7WUFPRixrQkFBa0IsdUJBdUJ0QixRQUFRO1lBMUJKLHNCQUFzQix1QkEyQjFCLElBQUksWUFBSSxRQUFROzs7NEJBZGxCLEtBQUssU0FBQyxnQkFBZ0I7OEJBQ3RCLEtBQUssU0FBQyxrQkFBa0I7aUNBQ3hCLEtBQUssU0FBQyxZQUFZOzhCQUNsQixLQUFLLFNBQUMsa0JBQWtCO2dDQUN4QixLQUFLLFNBQUMsb0JBQW9COzs7O0lBSjNCLDJDQUFpRDs7SUFDakQsNkNBQXFEOztJQUNyRCxnREFBeUQ7O0lBQ3pELDZDQUE2RDs7SUFDN0QsK0NBQXVEOztJQUV2RCw4Q0FBbUg7O0lBUWpILHlDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VEaXJlY3RpdmUsIE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5cclxuaW1wb3J0IHsgTnpQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1wb3BvdmVyLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei1wb3BvdmVyXScsXHJcbiAgZXhwb3J0QXM6ICduelBvcG92ZXInLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXBvcG92ZXItb3Blbl0nOiAnaXNUb29sdGlwQ29tcG9uZW50VmlzaWJsZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelBvcG92ZXJEaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ256UG9wb3ZlclRpdGxlJykgc3BlY2lmaWNUaXRsZTogTnpUU1R5cGU7XHJcbiAgQElucHV0KCduelBvcG92ZXJDb250ZW50Jykgc3BlY2lmaWNDb250ZW50OiBOelRTVHlwZTtcclxuICBASW5wdXQoJ256LXBvcG92ZXInKSBkaXJlY3RpdmVOYW1lVGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcclxuICBASW5wdXQoJ256UG9wb3ZlclRyaWdnZXInKSBzcGVjaWZpY1RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgQElucHV0KCduelBvcG92ZXJQbGFjZW1lbnQnKSBzcGVjaWZpY1BsYWNlbWVudDogc3RyaW5nO1xyXG5cclxuICBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56UG9wb3ZlckNvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE56UG9wb3ZlckNvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSB0b29sdGlwOiBOelBvcG92ZXJDb21wb25lbnQsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGhvc3RWaWV3LCByZXNvbHZlciwgcmVuZGVyZXIsIHRvb2x0aXAsIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcbn1cclxuIl19