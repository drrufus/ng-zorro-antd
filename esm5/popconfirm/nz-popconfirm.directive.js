import { __decorate, __extends, __metadata } from "tslib";
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
var NzPopconfirmDirective = /** @class */ (function (_super) {
    __extends(NzPopconfirmDirective, _super);
    function NzPopconfirmDirective(elementRef, hostView, resolver, renderer, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, noAnimation) || this;
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        _this.nzTrigger = 'click';
        _this.nzOnCancel = new EventEmitter();
        _this.nzOnConfirm = new EventEmitter();
        _this.componentFactory = _this.resolver.resolveComponentFactory(NzPopconfirmComponent);
        _this.needProxyProperties = [
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
        return _this;
    }
    /**
     * @override
     */
    NzPopconfirmDirective.prototype.createTooltipComponent = function () {
        var _this = this;
        _super.prototype.createTooltipComponent.call(this);
        this.tooltip.nzOnCancel.pipe(takeUntil(this.$destroy)).subscribe(function () {
            _this.nzOnCancel.emit();
        });
        this.tooltip.nzOnConfirm.pipe(takeUntil(this.$destroy)).subscribe(function () {
            _this.nzOnConfirm.emit();
        });
    };
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
    return NzPopconfirmDirective;
}(NzTooltipBaseDirective));
export { NzPopconfirmDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vIiwic291cmNlcyI6WyJuei1wb3Bjb25maXJtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxzQkFBc0IsRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBb0IsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRWxFO0lBTzJDLHlDQUFzQjtJQXFDL0QsK0JBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDQyxXQUFvQztRQUwxRCxZQU9FLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsU0FDN0Q7UUFsQ0Q7OztXQUdHO1FBQ00sZUFBUyxHQUFxQixPQUFPLENBQUM7UUFFNUIsZ0JBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3RDLGlCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUV2QyxzQkFBZ0IsR0FBNEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FDbEgscUJBQXFCLENBQ3RCLENBQUM7UUFFaUIseUJBQW1CLEdBQUc7WUFDdkMsb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtZQUNWLGNBQWM7WUFDZCxhQUFhO1lBQ2IsUUFBUTtTQUNULENBQUM7O0lBVUYsQ0FBQztJQUVEOztPQUVHO0lBQ08sc0RBQXNCLEdBQWhDO1FBQUEsaUJBU0M7UUFSQyxpQkFBTSxzQkFBc0IsV0FBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxPQUFpQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMxRixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQWlDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzNGLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhGQTNEVSxxQkFBcUI7OERBQXJCLHFCQUFxQjs7Ozs7SUFTUDtRQUFmLFlBQVksRUFBRTs7OERBQXNCO2dDQS9DaEQ7Q0FrR0MsQUFuRUQsQ0FPMkMsc0JBQXNCLEdBNERoRTtTQTVEWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQVBqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLElBQUksRUFBRTtvQkFDSiwwQkFBMEIsRUFBRSwyQkFBMkI7aUJBQ3hEO2FBQ0Y7O3NCQTJDSSxJQUFJOztzQkFBSSxRQUFROztrQkF6Q2xCLEtBQUs7bUJBQUMsbUJBQW1COztrQkFDekIsS0FBSzttQkFBQyxlQUFlOztrQkFDckIsS0FBSzttQkFBQyxxQkFBcUI7O2tCQUMzQixLQUFLO21CQUFDLHVCQUF1Qjs7a0JBQzdCLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQU1MLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VEaXJlY3RpdmUsIE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5cclxuaW1wb3J0IHsgTnpQb3Bjb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1wb3Bjb25maXJtLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei1wb3Bjb25maXJtXScsXHJcbiAgZXhwb3J0QXM6ICduelBvcGNvbmZpcm0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXBvcG92ZXItb3Blbl0nOiAnaXNUb29sdGlwQ29tcG9uZW50VmlzaWJsZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelBvcGNvbmZpcm1EaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ256UG9wY29uZmlybVRpdGxlJykgc3BlY2lmaWNUaXRsZTogTnpUU1R5cGU7XHJcbiAgQElucHV0KCduei1wb3Bjb25maXJtJykgZGlyZWN0aXZlTmFtZVRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcbiAgQElucHV0KCduelBvcGNvbmZpcm1UcmlnZ2VyJykgc3BlY2lmaWNUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gIEBJbnB1dCgnbnpQb3Bjb25maXJtUGxhY2VtZW50Jykgc3BlY2lmaWNQbGFjZW1lbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuek9rVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T2tUeXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpDYW5jZWxUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb25kaXRpb246IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDEwLjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRyaWdnZXJgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdjbGljayc7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpQb3Bjb25maXJtQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXHJcbiAgICBOelBvcGNvbmZpcm1Db21wb25lbnRcclxuICApO1xyXG5cclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbmVlZFByb3h5UHJvcGVydGllcyA9IFtcclxuICAgICduek92ZXJsYXlDbGFzc05hbWUnLFxyXG4gICAgJ256T3ZlcmxheVN0eWxlJyxcclxuICAgICduek1vdXNlRW50ZXJEZWxheScsXHJcbiAgICAnbnpNb3VzZUxlYXZlRGVsYXknLFxyXG4gICAgJ256VmlzaWJsZScsXHJcbiAgICAnbnpPa1RleHQnLFxyXG4gICAgJ256T2tUeXBlJyxcclxuICAgICduekNhbmNlbFRleHQnLFxyXG4gICAgJ256Q29uZGl0aW9uJyxcclxuICAgICduekljb24nXHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3ZlcnJpZGVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbHRpcENvbXBvbmVudCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLmNyZWF0ZVRvb2x0aXBDb21wb25lbnQoKTtcclxuXHJcbiAgICAodGhpcy50b29sdGlwIGFzIE56UG9wY29uZmlybUNvbXBvbmVudCkubnpPbkNhbmNlbC5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5uek9uQ2FuY2VsLmVtaXQoKTtcclxuICAgIH0pO1xyXG4gICAgKHRoaXMudG9vbHRpcCBhcyBOelBvcGNvbmZpcm1Db21wb25lbnQpLm56T25Db25maXJtLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm56T25Db25maXJtLmVtaXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=