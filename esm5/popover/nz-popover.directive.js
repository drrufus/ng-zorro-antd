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
import { ComponentFactoryResolver, Directive, ElementRef, Host, Input, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseDirective } from 'ng-zorro-antd/tooltip';
import { NzPopoverComponent } from './nz-popover.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
var NzPopoverDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopoverDirective, _super);
    function NzPopoverDirective(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.showPopoverCloseButton = false;
        _this.popoverCloseButtonLabel = 'сlose';
        _this.popoverForceRestoreFocus = false;
        _this.componentFactory = _this.resolver.resolveComponentFactory(NzPopoverComponent);
        return _this;
    }
    /** @nocollapse */
    NzPopoverDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzPopoverComponent, decorators: [{ type: Optional }] },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
NzPopoverDirective.ɵfac = function NzPopoverDirective_Factory(t) { return new (t || NzPopoverDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzPopoverComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzPopoverDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzPopoverDirective, selectors: [["", "nz-popover", ""]], hostVars: 2, hostBindings: function NzPopoverDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-popover-open", ctx.isTooltipComponentVisible);
    } }, inputs: { specificTitle: ["nzPopoverTitle", "specificTitle"], specificContent: ["nzPopoverContent", "specificContent"], directiveNameTitle: ["nz-popover", "directiveNameTitle"], specificTrigger: ["nzPopoverTrigger", "specificTrigger"], specificPlacement: ["nzPopoverPlacement", "specificPlacement"], showPopoverCloseButton: ["nzShowPopoverCloseButton", "showPopoverCloseButton"], popoverCloseButtonLabel: ["nzPopoverCloseButtonLabel", "popoverCloseButtonLabel"], popoverForceRestoreFocus: ["nzPopoverForceRestoreFocus", "popoverForceRestoreFocus"] }, exportAs: ["nzPopover"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
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
        }], showPopoverCloseButton: [{
            type: Input,
            args: ['nzShowPopoverCloseButton']
        }], popoverCloseButtonLabel: [{
            type: Input,
            args: ['nzPopoverCloseButtonLabel']
        }], popoverForceRestoreFocus: [{
            type: Input,
            args: ['nzPopoverForceRestoreFocus']
        }] }); })();
    return NzPopoverDirective;
}(NzTooltipBaseDirective));
export { NzPopoverDirective };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3BvcG92ZXIvbnotcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFvQixNQUFNLHVCQUF1QixDQUFDO0FBRWpGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFNUQ7SUFPd0MsOENBQXNCO0lBWTVELDRCQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ1AsT0FBMkIsRUFDWixXQUFvQztRQU5qRSxZQVFFLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLFNBQ3RFO1FBSDRCLGlCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQVo5Qiw0QkFBc0IsR0FBWSxLQUFLLENBQUM7UUFDdkMsNkJBQXVCLEdBQVcsT0FBTyxDQUFDO1FBQ3pDLDhCQUF3QixHQUFZLEtBQUssQ0FBQztRQUUvRSxzQkFBZ0IsR0FBeUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOztJQVduSCxDQUFDLEFBckJNOzsrQkFQUixTQUFTLFNBQUM7UUFDVCxRQUFRLEVBQUUsRkFkVixVQUFVO0VBY2Msc0JBQ3hCLFFBQVEsRUFBRSxsQkFWVixnQkFBZ0I7U0FVSyxzQkFDckIsSUFBSSxFQUFFLHJCQWxCTix3QkFBd0I7bUJBbUJ0QixIQWJGLFNBQVM7Z0JBYW1CLEVBQUUsMkJBQTJCLHNCQUN4RCxuREFQTSxrQkFBa0IsdUJBMEJ0QixRQUFRO2FBbEJaLEdBWFEsc0JBQXNCLHVCQThCMUIsSUFBSSxZQUFJLFFBQVE7OztnQ0FqQmxCLEtBQUssU0FBQyxnQkFBZ0I7a0NBQ3RCLEtBQUssU0FBQyxrQkFBa0I7cUNBQ3hCLEtBQUssU0FBQyxZQUFZO2tDQUNsQixLQUFLLFNBQUMsa0JBQWtCO29DQUN4QixLQUFLLFNBQUMsb0JBQW9CO3lDQUMxQixLQUFLLFNBQUMsMEJBQTBCOzBDQUNoQyxLQUFLLFNBQUMsMkJBQTJCOzJDQUNqQyxLQUFLLFNBQUMsNEJBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQVk7SUFjakQseUJBQUM7Q0FBQSxBQTdCRCxDQU93QyxzQkFBc0IsR0FzQjdEO1NBdEJZLGtCQUFrQjs7O0lBQzdCLDJDQUFpRDs7SUFDakQsNkNBQXFEOztJQUNyRCxnREFBeUQ7O0lBQ3pELDZDQUE2RDs7SUFDN0QsK0NBQXVEOztJQUN2RCxvREFBMkU7O0lBQzNFLHFEQUE4RTs7SUFDOUUsc0RBQStFOztJQUUvRSw4Q0FBbUg7O0lBUWpILHlDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VEaXJlY3RpdmUsIE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5cclxuaW1wb3J0IHsgTnpQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1wb3BvdmVyLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei1wb3BvdmVyXScsXHJcbiAgZXhwb3J0QXM6ICduelBvcG92ZXInLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXBvcG92ZXItb3Blbl0nOiAnaXNUb29sdGlwQ29tcG9uZW50VmlzaWJsZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelBvcG92ZXJEaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ256UG9wb3ZlclRpdGxlJykgc3BlY2lmaWNUaXRsZTogTnpUU1R5cGU7XHJcbiAgQElucHV0KCduelBvcG92ZXJDb250ZW50Jykgc3BlY2lmaWNDb250ZW50OiBOelRTVHlwZTtcclxuICBASW5wdXQoJ256LXBvcG92ZXInKSBkaXJlY3RpdmVOYW1lVGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcclxuICBASW5wdXQoJ256UG9wb3ZlclRyaWdnZXInKSBzcGVjaWZpY1RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgQElucHV0KCduelBvcG92ZXJQbGFjZW1lbnQnKSBzcGVjaWZpY1BsYWNlbWVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgnbnpTaG93UG9wb3ZlckNsb3NlQnV0dG9uJykgc2hvd1BvcG92ZXJDbG9zZUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgnbnpQb3BvdmVyQ2xvc2VCdXR0b25MYWJlbCcpIHBvcG92ZXJDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmcgPSAn0YFsb3NlJztcclxuICBASW5wdXQoJ256UG9wb3ZlckZvcmNlUmVzdG9yZUZvY3VzJykgcG9wb3ZlckZvcmNlUmVzdG9yZUZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpQb3BvdmVyQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTnpQb3BvdmVyQ29tcG9uZW50KTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBPcHRpb25hbCgpIHRvb2x0aXA6IE56UG9wb3ZlckNvbXBvbmVudCxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgdG9vbHRpcCwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxufVxyXG4iXX0=