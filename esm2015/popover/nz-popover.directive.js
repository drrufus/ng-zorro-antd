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
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
export class NzPopoverDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        this.noAnimation = noAnimation;
        this.componentFactory = this.resolver.resolveComponentFactory(NzPopoverComponent);
    }
}
/** @nocollapse */ NzPopoverDirective.ɵfac = function NzPopoverDirective_Factory(t) { return new (t || NzPopoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzPopoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzPopoverDirective, selectors: [["", "nz-popover", ""]], hostBindings: function NzPopoverDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(1);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-popover-open", ctx.isTooltipComponentVisible);
    } }, inputs: { specificTitle: ["nzPopoverTitle", "specificTitle"], specificContent: ["nzPopoverContent", "specificContent"], directiveNameTitle: ["nz-popover", "directiveNameTitle"], specificTrigger: ["nzPopoverTrigger", "specificTrigger"], specificPlacement: ["nzPopoverPlacement", "specificPlacement"] }, exportAs: ["nzPopover"], features: [i0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzPopoverDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-popover]',
                exportAs: 'nzPopover',
                host: {
                    '[class.ant-popover-open]': 'isTooltipComponentVisible'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { specificTitle: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBRUwsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQW9CLE1BQU0sdUJBQXVCLENBQUM7QUFFakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQVM1RCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsc0JBQXNCO0lBUzVELFlBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDUSxXQUFvQztRQUUvRCxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRmxDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQVBqRSxxQkFBZ0IsR0FBeUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBVW5ILENBQUM7O29GQWpCVSxrQkFBa0I7dURBQWxCLGtCQUFrQjs7Ozs7a0RBQWxCLGtCQUFrQjtjQVA5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUU7b0JBQ0osMEJBQTBCLEVBQUUsMkJBQTJCO2lCQUN4RDthQUNGOztzQkFlSSxJQUFJOztzQkFBSSxRQUFROztrQkFibEIsS0FBSzttQkFBQyxnQkFBZ0I7O2tCQUN0QixLQUFLO21CQUFDLGtCQUFrQjs7a0JBQ3hCLEtBQUs7bUJBQUMsWUFBWTs7a0JBQ2xCLEtBQUs7bUJBQUMsa0JBQWtCOztrQkFDeEIsS0FBSzttQkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlLCBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IE56UG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vbnotcG9wb3Zlci5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotcG9wb3Zlcl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpQb3BvdmVyJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1wb3BvdmVyLW9wZW5dJzogJ2lzVG9vbHRpcENvbXBvbmVudFZpc2libGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQb3BvdmVyRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCduelBvcG92ZXJUaXRsZScpIHNwZWNpZmljVGl0bGU6IE56VFNUeXBlO1xyXG4gIEBJbnB1dCgnbnpQb3BvdmVyQ29udGVudCcpIHNwZWNpZmljQ29udGVudDogTnpUU1R5cGU7XHJcbiAgQElucHV0KCduei1wb3BvdmVyJykgZGlyZWN0aXZlTmFtZVRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcbiAgQElucHV0KCduelBvcG92ZXJUcmlnZ2VyJykgc3BlY2lmaWNUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gIEBJbnB1dCgnbnpQb3BvdmVyUGxhY2VtZW50Jykgc3BlY2lmaWNQbGFjZW1lbnQ6IHN0cmluZztcclxuXHJcbiAgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxOelBvcG92ZXJDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOelBvcG92ZXJDb21wb25lbnQpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==