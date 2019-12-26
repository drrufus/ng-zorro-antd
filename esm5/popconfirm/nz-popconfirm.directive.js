/**
 * @fileoverview added by tsickle
 * Generated from: nz-popconfirm.directive.ts
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
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseDirective } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
var NzPopconfirmDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopconfirmDirective, _super);
    function NzPopconfirmDirective(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip, noAnimation) || this;
        _this.noAnimation = noAnimation;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
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
    /**
     * @override
     * @protected
     * @return {?}
     */
    NzPopconfirmDirective.prototype.createDynamicTooltipComponent = /**
     * @override
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.createDynamicTooltipComponent.call(this);
        ((/** @type {?} */ (this.tooltip))).nzOnCancel.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzOnCancel.emit();
        }));
        ((/** @type {?} */ (this.tooltip))).nzOnConfirm.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzOnConfirm.emit();
        }));
    };
    NzPopconfirmDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-popconfirm]',
                    exportAs: 'nzPopconfirm',
                    host: {
                        '[class.ant-popover-open]': 'isTooltipComponentVisible'
                    }
                },] }
    ];
    /** @nocollapse */
    NzPopconfirmDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzPopconfirmComponent, decorators: [{ type: Optional }] },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzPopconfirmDirective.propDecorators = {
        specificTitle: [{ type: Input, args: ['nzPopconfirmTitle',] }],
        directiveNameTitle: [{ type: Input, args: ['nz-popconfirm',] }],
        specificTrigger: [{ type: Input, args: ['nzPopconfirmTrigger',] }],
        specificPlacement: [{ type: Input, args: ['nzPopconfirmPlacement',] }],
        nzOkText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzCondition: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzOnCancel: [{ type: Output }],
        nzOnConfirm: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzPopconfirmDirective.prototype, "nzCondition", void 0);
    return NzPopconfirmDirective;
}(NzTooltipBaseDirective));
export { NzPopconfirmDirective };
if (false) {
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificTitle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificTrigger;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificPlacement;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzIcon;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCondition;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     * @type {?}
     */
    NzPopconfirmDirective.prototype.nzTrigger;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnConfirm;
    /** @type {?} */
    NzPopconfirmDirective.prototype.componentFactory;
    /**
     * @type {?}
     * @protected
     */
    NzPopconfirmDirective.prototype.needProxyProperties;
    /** @type {?} */
    NzPopconfirmDirective.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vIiwic291cmNlcyI6WyJuei1wb3Bjb25maXJtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxzQkFBc0IsRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBb0IsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQU8yQyxpREFBc0I7SUFxQy9ELCtCQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ1AsT0FBOEIsRUFDZixXQUFvQztRQU5qRSxZQVFFLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLFNBQ3RFO1FBSDRCLGlCQUFXLEdBQVgsV0FBVyxDQUF5Qjs7Ozs7UUE1QnhELGVBQVMsR0FBcUIsT0FBTyxDQUFDO1FBRTVCLGdCQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxpQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFMUQsc0JBQWdCLEdBQTRDLEtBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQy9GLHFCQUFxQixDQUN0QixDQUFDO1FBRVEseUJBQW1CLEdBQUc7WUFDOUIsb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtZQUNWLGNBQWM7WUFDZCxhQUFhO1lBQ2IsUUFBUTtTQUNULENBQUM7O0lBV0YsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDTyw2REFBNkI7Ozs7O0lBQXZDO1FBQUEsaUJBU0M7UUFSQyxpQkFBTSw2QkFBNkIsV0FBRSxDQUFDO1FBRXRDLENBQUMsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBeUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQzFGLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7UUFDSCxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQXlCLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQztZQUMzRixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsSUFBSSxFQUFFO3dCQUNKLDBCQUEwQixFQUFFLDJCQUEyQjtxQkFDeEQ7aUJBQ0Y7Ozs7Z0JBekJDLFVBQVU7Z0JBU1YsZ0JBQWdCO2dCQVhoQix3QkFBd0I7Z0JBU3hCLFNBQVM7Z0JBVUYscUJBQXFCLHVCQW1EekIsUUFBUTtnQkF0RFUsc0JBQXNCLHVCQXVEeEMsSUFBSSxZQUFJLFFBQVE7OztnQ0ExQ2xCLEtBQUssU0FBQyxtQkFBbUI7cUNBQ3pCLEtBQUssU0FBQyxlQUFlO2tDQUNyQixLQUFLLFNBQUMscUJBQXFCO29DQUMzQixLQUFLLFNBQUMsdUJBQXVCOzJCQUM3QixLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBTUwsS0FBSzs2QkFFTCxNQUFNOzhCQUNOLE1BQU07O0lBVGtCO1FBQWYsWUFBWSxFQUFFOzs4REFBc0I7SUFvRGhELDRCQUFDO0NBQUEsQUFwRUQsQ0FPMkMsc0JBQXNCLEdBNkRoRTtTQTdEWSxxQkFBcUI7OztJQUNoQyw4Q0FBb0Q7O0lBQ3BELG1EQUE0RDs7SUFDNUQsZ0RBQWdFOztJQUNoRSxrREFBMEQ7O0lBQzFELHlDQUEwQjs7SUFDMUIseUNBQTBCOztJQUMxQiw2Q0FBOEI7O0lBQzlCLHVDQUE0Qzs7SUFDNUMsNENBQThDOzs7Ozs7SUFNOUMsMENBQStDOztJQUUvQywyQ0FBeUQ7O0lBQ3pELDRDQUEwRDs7SUFFMUQsaURBRUU7Ozs7O0lBRUYsb0RBV0U7O0lBUUEsNENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlLCBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IE56UG9wY29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vbnotcG9wY29uZmlybS5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotcG9wY29uZmlybV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpQb3Bjb25maXJtJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1wb3BvdmVyLW9wZW5dJzogJ2lzVG9vbHRpcENvbXBvbmVudFZpc2libGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQb3Bjb25maXJtRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCduelBvcGNvbmZpcm1UaXRsZScpIHNwZWNpZmljVGl0bGU6IE56VFNUeXBlO1xyXG4gIEBJbnB1dCgnbnotcG9wY29uZmlybScpIGRpcmVjdGl2ZU5hbWVUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xyXG4gIEBJbnB1dCgnbnpQb3Bjb25maXJtVHJpZ2dlcicpIHNwZWNpZmljVHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlcjtcclxuICBASW5wdXQoJ256UG9wY29uZmlybVBsYWNlbWVudCcpIHNwZWNpZmljUGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpPa1RleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuek9rVHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56Q2FuY2VsVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29uZGl0aW9uOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxyXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwVHJpZ2dlcmAuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbnpUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyID0gJ2NsaWNrJztcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Db25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56UG9wY29uZmlybUNvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxyXG4gICAgTnpQb3Bjb25maXJtQ29tcG9uZW50XHJcbiAgKTtcclxuXHJcbiAgcHJvdGVjdGVkIG5lZWRQcm94eVByb3BlcnRpZXMgPSBbXHJcbiAgICAnbnpPdmVybGF5Q2xhc3NOYW1lJyxcclxuICAgICduek92ZXJsYXlTdHlsZScsXHJcbiAgICAnbnpNb3VzZUVudGVyRGVsYXknLFxyXG4gICAgJ256TW91c2VMZWF2ZURlbGF5JyxcclxuICAgICduelZpc2libGUnLFxyXG4gICAgJ256T2tUZXh0JyxcclxuICAgICduek9rVHlwZScsXHJcbiAgICAnbnpDYW5jZWxUZXh0JyxcclxuICAgICduekNvbmRpdGlvbicsXHJcbiAgICAnbnpJY29uJ1xyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSB0b29sdGlwOiBOelBvcGNvbmZpcm1Db21wb25lbnQsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGhvc3RWaWV3LCByZXNvbHZlciwgcmVuZGVyZXIsIHRvb2x0aXAsIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvdmVycmlkZVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBjcmVhdGVEeW5hbWljVG9vbHRpcENvbXBvbmVudCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLmNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk7XHJcblxyXG4gICAgKHRoaXMudG9vbHRpcCBhcyBOelBvcGNvbmZpcm1Db21wb25lbnQpLm56T25DYW5jZWwucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubnpPbkNhbmNlbC5lbWl0KCk7XHJcbiAgICB9KTtcclxuICAgICh0aGlzLnRvb2x0aXAgYXMgTnpQb3Bjb25maXJtQ29tcG9uZW50KS5uek9uQ29uZmlybS5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5uek9uQ29uZmlybS5lbWl0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19