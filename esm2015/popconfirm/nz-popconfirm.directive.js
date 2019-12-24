import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseDirective } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
export class NzPopconfirmDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        this.nzTrigger = 'click';
        this.nzOnCancel = new EventEmitter();
        this.nzOnConfirm = new EventEmitter();
        this.componentFactory = this.resolver.resolveComponentFactory(NzPopconfirmComponent);
        this.needProxyProperties = [
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'nzOkText',
            'nzOkType',
            'nzCancelText',
            'nzCondition',
            'nzIcon'
        ];
    }
    /**
     * @override
     */
    createTooltipComponent() {
        super.createTooltipComponent();
        this.tooltip.nzOnCancel.pipe(takeUntil(this.$destroy)).subscribe(() => {
            this.nzOnCancel.emit();
        });
        this.tooltip.nzOnConfirm.pipe(takeUntil(this.$destroy)).subscribe(() => {
            this.nzOnConfirm.emit();
        });
    }
}
/** @nocollapse */ NzPopconfirmDirective.ɵfac = function NzPopconfirmDirective_Factory(t) { return new (t || NzPopconfirmDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzPopconfirmDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzPopconfirmDirective, selectors: [["", "nz-popconfirm", ""]], hostBindings: function NzPopconfirmDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(1);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-popover-open", ctx.isTooltipComponentVisible);
    } }, inputs: { specificTitle: ["nzPopconfirmTitle", "specificTitle"], directiveNameTitle: ["nz-popconfirm", "directiveNameTitle"], specificTrigger: ["nzPopconfirmTrigger", "specificTrigger"], specificPlacement: ["nzPopconfirmPlacement", "specificPlacement"], nzOkText: "nzOkText", nzOkType: "nzOkType", nzCancelText: "nzCancelText", nzIcon: "nzIcon", nzCondition: "nzCondition", nzTrigger: "nzTrigger" }, outputs: { nzOnCancel: "nzOnCancel", nzOnConfirm: "nzOnConfirm" }, exportAs: ["nzPopconfirm"], features: [i0.ɵɵInheritDefinitionFeature] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzPopconfirmDirective.prototype, "nzCondition", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzPopconfirmDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-popconfirm]',
                exportAs: 'nzPopconfirm',
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
            args: ['nzPopconfirmTitle']
        }], directiveNameTitle: [{
            type: Input,
            args: ['nz-popconfirm']
        }], specificTrigger: [{
            type: Input,
            args: ['nzPopconfirmTrigger']
        }], specificPlacement: [{
            type: Input,
            args: ['nzPopconfirmPlacement']
        }], nzOkText: [{
            type: Input
        }], nzOkType: [{
            type: Input
        }], nzCancelText: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], nzCondition: [{
            type: Input
        }], nzTrigger: [{
            type: Input
        }], nzOnCancel: [{
            type: Output
        }], nzOnConfirm: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vIiwic291cmNlcyI6WyJuei1wb3Bjb25maXJtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxzQkFBc0IsRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBb0IsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBU2xFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxzQkFBc0I7SUFxQy9ELFlBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDQyxXQUFvQztRQUV4RCxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBakMvRDs7O1dBR0c7UUFDTSxjQUFTLEdBQXFCLE9BQU8sQ0FBQztRQUU1QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFdkMscUJBQWdCLEdBQTRDLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQ2xILHFCQUFxQixDQUN0QixDQUFDO1FBRWlCLHdCQUFtQixHQUFHO1lBQ3ZDLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsVUFBVTtZQUNWLFVBQVU7WUFDVixjQUFjO1lBQ2QsYUFBYTtZQUNiLFFBQVE7U0FDVCxDQUFDO0lBVUYsQ0FBQztJQUVEOztPQUVHO0lBQ08sc0JBQXNCO1FBQzlCLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxPQUFpQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDL0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFpQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDaEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzBGQTNEVSxxQkFBcUI7MERBQXJCLHFCQUFxQjs7Ozs7QUFTUDtJQUFmLFlBQVksRUFBRTs7MERBQXNCO2tEQVRuQyxxQkFBcUI7Y0FQakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixJQUFJLEVBQUU7b0JBQ0osMEJBQTBCLEVBQUUsMkJBQTJCO2lCQUN4RDthQUNGOztzQkEyQ0ksSUFBSTs7c0JBQUksUUFBUTs7a0JBekNsQixLQUFLO21CQUFDLG1CQUFtQjs7a0JBQ3pCLEtBQUs7bUJBQUMsZUFBZTs7a0JBQ3JCLEtBQUs7bUJBQUMscUJBQXFCOztrQkFDM0IsS0FBSzttQkFBQyx1QkFBdUI7O2tCQUM3QixLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFNTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlLCBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IE56UG9wY29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vbnotcG9wY29uZmlybS5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotcG9wY29uZmlybV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpQb3Bjb25maXJtJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1wb3BvdmVyLW9wZW5dJzogJ2lzVG9vbHRpcENvbXBvbmVudFZpc2libGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQb3Bjb25maXJtRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCduelBvcGNvbmZpcm1UaXRsZScpIHNwZWNpZmljVGl0bGU6IE56VFNUeXBlO1xyXG4gIEBJbnB1dCgnbnotcG9wY29uZmlybScpIGRpcmVjdGl2ZU5hbWVUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xyXG4gIEBJbnB1dCgnbnpQb3Bjb25maXJtVHJpZ2dlcicpIHNwZWNpZmljVHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlcjtcclxuICBASW5wdXQoJ256UG9wY29uZmlybVBsYWNlbWVudCcpIHNwZWNpZmljUGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpPa1RleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuek9rVHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56Q2FuY2VsVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29uZGl0aW9uOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCAxMC4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuXHJcbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBUcmlnZ2VyYC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuelRyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXIgPSAnY2xpY2snO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIHByb3RlY3RlZCByZWFkb25seSBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56UG9wY29uZmlybUNvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxyXG4gICAgTnpQb3Bjb25maXJtQ29tcG9uZW50XHJcbiAgKTtcclxuXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IG5lZWRQcm94eVByb3BlcnRpZXMgPSBbXHJcbiAgICAnbnpPdmVybGF5Q2xhc3NOYW1lJyxcclxuICAgICduek92ZXJsYXlTdHlsZScsXHJcbiAgICAnbnpNb3VzZUVudGVyRGVsYXknLFxyXG4gICAgJ256TW91c2VMZWF2ZURlbGF5JyxcclxuICAgICduelZpc2libGUnLFxyXG4gICAgJ256T2tUZXh0JyxcclxuICAgICduek9rVHlwZScsXHJcbiAgICAnbnpDYW5jZWxUZXh0JyxcclxuICAgICduekNvbmRpdGlvbicsXHJcbiAgICAnbnpJY29uJ1xyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG92ZXJyaWRlXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2x0aXBDb21wb25lbnQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5jcmVhdGVUb29sdGlwQ29tcG9uZW50KCk7XHJcblxyXG4gICAgKHRoaXMudG9vbHRpcCBhcyBOelBvcGNvbmZpcm1Db21wb25lbnQpLm56T25DYW5jZWwucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubnpPbkNhbmNlbC5lbWl0KCk7XHJcbiAgICB9KTtcclxuICAgICh0aGlzLnRvb2x0aXAgYXMgTnpQb3Bjb25maXJtQ29tcG9uZW50KS5uek9uQ29uZmlybS5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5uek9uQ29uZmlybS5lbWl0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19