import { __extends } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentFactoryResolver, Directive, ElementRef, Host, Input, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseDirective } from './nz-tooltip-base.directive';
import { NzToolTipComponent } from './nz-tooltip.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
var NzTooltipDirective = /** @class */ (function (_super) {
    __extends(NzTooltipDirective, _super);
    function NzTooltipDirective(elementRef, hostView, resolver, renderer, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, noAnimation) || this;
        _this.componentFactory = _this.resolver.resolveComponentFactory(NzToolTipComponent);
        return _this;
    }
    /** @nocollapse */ NzTooltipDirective.ɵfac = function NzTooltipDirective_Factory(t) { return new (t || NzTooltipDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzTooltipDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzTooltipDirective, selectors: [["", "nz-tooltip", ""]], hostBindings: function NzTooltipDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(1);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-tooltip-open", ctx.isTooltipComponentVisible);
        } }, inputs: { specificTitle: ["nzTooltipTitle", "specificTitle"], directiveNameTitle: ["nz-tooltip", "directiveNameTitle"], specificTrigger: ["nzTooltipTrigger", "specificTrigger"], specificPlacement: ["nzTooltipPlacement", "specificPlacement"] }, exportAs: ["nzTooltip"], features: [i0.ɵɵInheritDefinitionFeature] });
    return NzTooltipDirective;
}(NzTooltipBaseDirective));
export { NzTooltipDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-tooltip]',
                exportAs: 'nzTooltip',
                host: {
                    '[class.ant-tooltip-open]': 'isTooltipComponentVisible'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJuei10b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUc1RDtJQU93QyxzQ0FBc0I7SUFnQjVELDRCQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ0MsV0FBb0M7UUFMMUQsWUFPRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLFNBQzdEO1FBVkQsc0JBQWdCLEdBQXlDLEtBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7SUFVbkgsQ0FBQzt3RkF4QlUsa0JBQWtCOzJEQUFsQixrQkFBa0I7Ozs7OzZCQWpDL0I7Q0EwREMsQUFoQ0QsQ0FPd0Msc0JBQXNCLEdBeUI3RDtTQXpCWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQVA5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUU7b0JBQ0osMEJBQTBCLEVBQUUsMkJBQTJCO2lCQUN4RDthQUNGOztzQkFzQkksSUFBSTs7c0JBQUksUUFBUTs7a0JBakJsQixLQUFLO21CQUFDLGdCQUFnQjs7a0JBS3RCLEtBQUs7bUJBQUMsWUFBWTs7a0JBRWxCLEtBQUs7bUJBQUMsa0JBQWtCOztrQkFDeEIsS0FBSzttQkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB9IGZyb20gJy4vbnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56VG9vbFRpcENvbXBvbmVudCB9IGZyb20gJy4vbnotdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LXRvb2x0aXBdJyxcclxuICBleHBvcnRBczogJ256VG9vbHRpcCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdG9vbHRpcC1vcGVuXSc6ICdpc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VG9vbHRpcERpcmVjdGl2ZSBleHRlbmRzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUge1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aXRsZSB0aGF0IHNob3VsZCBoYXZlIGhpZ2hlc3QgcHJpb3JpdHkuXHJcbiAgICovXHJcbiAgQElucHV0KCduelRvb2x0aXBUaXRsZScpIHNwZWNpZmljVGl0bGU6IE56VFNUeXBlO1xyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhlIGRpcmVjdGl2ZSdzIG5hbWUgYXMgdGhlIHRpdGxlIHRoYXQgaGF2ZSBwcmlvcml0eSBpbiB0aGUgc2Vjb25kIHBsYWNlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnbnotdG9vbHRpcCcpIGRpcmVjdGl2ZU5hbWVUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xyXG5cclxuICBASW5wdXQoJ256VG9vbHRpcFRyaWdnZXInKSBzcGVjaWZpY1RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgQElucHV0KCduelRvb2x0aXBQbGFjZW1lbnQnKSBzcGVjaWZpY1BsYWNlbWVudDogc3RyaW5nO1xyXG5cclxuICBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56VG9vbFRpcENvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE56VG9vbFRpcENvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxufVxyXG4iXX0=