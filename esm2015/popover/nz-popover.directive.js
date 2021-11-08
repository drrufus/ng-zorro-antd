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
import { NzTooltipBaseDirective } from 'ng-zorro-antd/tooltip';
import { NzPopoverComponent } from './nz-popover.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
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
        this.showPopoverCloseButton = false;
        this.popoverCloseButtonLabel = 'сlose';
        this.popoverForceRestoreFocus = false;
        this.componentFactory = this.resolver.resolveComponentFactory(NzPopoverComponent);
    }
}
NzPopoverDirective.ɵfac = function NzPopoverDirective_Factory(t) { return new (t || NzPopoverDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzPopoverComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzPopoverDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzPopoverDirective, selectors: [["", "nz-popover", ""]], hostVars: 2, hostBindings: function NzPopoverDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-popover-open", ctx.isTooltipComponentVisible);
    } }, inputs: { showPopoverCloseButton: ["nzShowPopoverCloseButton", "showPopoverCloseButton"], popoverCloseButtonLabel: ["nzPopoverCloseButtonLabel", "popoverCloseButtonLabel"], popoverForceRestoreFocus: ["nzPopoverForceRestoreFocus", "popoverForceRestoreFocus"], specificTitle: ["nzPopoverTitle", "specificTitle"], specificContent: ["nzPopoverContent", "specificContent"], directiveNameTitle: ["nz-popover", "directiveNameTitle"], specificTrigger: ["nzPopoverTrigger", "specificTrigger"], specificPlacement: ["nzPopoverPlacement", "specificPlacement"] }, exportAs: ["nzPopover"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
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
    specificPlacement: [{ type: Input, args: ['nzPopoverPlacement',] }],
    showPopoverCloseButton: [{ type: Input, args: ['nzShowPopoverCloseButton',] }],
    popoverCloseButtonLabel: [{ type: Input, args: ['nzPopoverCloseButtonLabel',] }],
    popoverForceRestoreFocus: [{ type: Input, args: ['nzPopoverForceRestoreFocus',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopoverDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-popover]',
                exportAs: 'nzPopover',
                host: {
                    '[class.ant-popover-open]': 'isTooltipComponentVisible'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.Renderer2 }, { type: NzPopoverComponent, decorators: [{
                type: Optional
            }] }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { showPopoverCloseButton: [{
            type: Input,
            args: ['nzShowPopoverCloseButton']
        }], popoverCloseButtonLabel: [{
            type: Input,
            args: ['nzPopoverCloseButtonLabel']
        }], popoverForceRestoreFocus: [{
            type: Input,
            args: ['nzPopoverForceRestoreFocus']
        }], specificTitle: [{
            type: Input,
            args: ['nzPopoverTitle']
        }], specificContent: [{
            type: Input,
            args: ['nzPopoverContent']
        }], directiveNameTitle: [{
            type: Input,
            args: ['nz-popover']
        }], specificTrigger: [{
            type: Input,
            args: ['nzPopoverTrigger']
        }], specificPlacement: [{
            type: Input,
            args: ['nzPopoverPlacement']
        }] }); })();
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
    NzPopoverDirective.prototype.showPopoverCloseButton;
    /** @type {?} */
    NzPopoverDirective.prototype.popoverCloseButtonLabel;
    /** @type {?} */
    NzPopoverDirective.prototype.popoverForceRestoreFocus;
    /** @type {?} */
    NzPopoverDirective.prototype.componentFactory;
    /** @type {?} */
    NzPopoverDirective.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3BvcG92ZXIvbnotcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQW9CLE1BQU0sdUJBQXVCLENBQUM7QUFFakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQVM1RCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsc0JBQXNCOzs7Ozs7Ozs7SUFZNUQsWUFDRSxVQUFzQixFQUN0QixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNQLE9BQTJCLEVBQ1osV0FBb0M7UUFFL0QsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFGM0MsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBWjlCLDJCQUFzQixHQUFZLEtBQUssQ0FBQztRQUN2Qyw0QkFBdUIsR0FBVyxPQUFPLENBQUM7UUFDekMsNkJBQXdCLEdBQVksS0FBSyxDQUFDO1FBRS9FLHFCQUFnQixHQUF5QyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFXbkgsQ0FBQzs7Ozs7Q0FDRiwrQ0E3QkEsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxjQUFjLGtCQUN4QixRQUFRLEVBQUUsV0FBVyxrQkFDckIsSUFBSSxFQUFFLHNCQUNKLDBCQUEwQixFQUFFLDJCQUEyQixrQkFDeEQsY0FDRixrV0FDSTs7O1lBcEJILFVBQVU7WUFLVixnQkFBZ0I7WUFQaEIsd0JBQXdCO1lBTXhCLFNBQVM7WUFPRixrQkFBa0IsdUJBMEJ0QixRQUFRO1lBN0JKLHNCQUFzQix1QkE4QjFCLElBQUksWUFBSSxRQUFROzs7NEJBakJsQixLQUFLLFNBQUMsZ0JBQWdCOzhCQUN0QixLQUFLLFNBQUMsa0JBQWtCO2lDQUN4QixLQUFLLFNBQUMsWUFBWTs4QkFDbEIsS0FBSyxTQUFDLGtCQUFrQjtnQ0FDeEIsS0FBSyxTQUFDLG9CQUFvQjtxQ0FDMUIsS0FBSyxTQUFDLDBCQUEwQjtzQ0FDaEMsS0FBSyxTQUFDLDJCQUEyQjt1Q0FDakMsS0FBSyxTQUFDLDRCQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQVE7OztJQVAzQywyQ0FBaUQ7O0lBQ2pELDZDQUFxRDs7SUFDckQsZ0RBQXlEOztJQUN6RCw2Q0FBNkQ7O0lBQzdELCtDQUF1RDs7SUFDdkQsb0RBQTJFOztJQUMzRSxxREFBOEU7O0lBQzlFLHNEQUErRTs7SUFFL0UsOENBQW1IOztJQVFqSCx5Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlLCBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IE56UG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vbnotcG9wb3Zlci5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotcG9wb3Zlcl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpQb3BvdmVyJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1wb3BvdmVyLW9wZW5dJzogJ2lzVG9vbHRpcENvbXBvbmVudFZpc2libGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQb3BvdmVyRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCduelBvcG92ZXJUaXRsZScpIHNwZWNpZmljVGl0bGU6IE56VFNUeXBlO1xyXG4gIEBJbnB1dCgnbnpQb3BvdmVyQ29udGVudCcpIHNwZWNpZmljQ29udGVudDogTnpUU1R5cGU7XHJcbiAgQElucHV0KCduei1wb3BvdmVyJykgZGlyZWN0aXZlTmFtZVRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcbiAgQElucHV0KCduelBvcG92ZXJUcmlnZ2VyJykgc3BlY2lmaWNUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gIEBJbnB1dCgnbnpQb3BvdmVyUGxhY2VtZW50Jykgc3BlY2lmaWNQbGFjZW1lbnQ6IHN0cmluZztcclxuICBASW5wdXQoJ256U2hvd1BvcG92ZXJDbG9zZUJ1dHRvbicpIHNob3dQb3BvdmVyQ2xvc2VCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoJ256UG9wb3ZlckNsb3NlQnV0dG9uTGFiZWwnKSBwb3BvdmVyQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nID0gJ9GBbG9zZSc7XHJcbiAgQElucHV0KCduelBvcG92ZXJGb3JjZVJlc3RvcmVGb2N1cycpIHBvcG92ZXJGb3JjZVJlc3RvcmVGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56UG9wb3ZlckNvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE56UG9wb3ZlckNvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSB0b29sdGlwOiBOelBvcG92ZXJDb21wb25lbnQsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGhvc3RWaWV3LCByZXNvbHZlciwgcmVuZGVyZXIsIHRvb2x0aXAsIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcbn1cclxuIl19