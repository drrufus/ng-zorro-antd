/**
 * @fileoverview added by tsickle
 * Generated from: nz-popover.directive.ts
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
var NzPopoverDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopoverDirective, _super);
    function NzPopoverDirective(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.componentFactory = _this.resolver.resolveComponentFactory(NzPopoverComponent);
        return _this;
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
        specificPlacement: [{ type: Input, args: ['nzPopoverPlacement',] }]
    };
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
    NzPopoverDirective.prototype.componentFactory;
    /** @type {?} */
    NzPopoverDirective.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFvQixNQUFNLHVCQUF1QixDQUFDO0FBRWpGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEO0lBT3dDLDhDQUFzQjtJQVM1RCw0QkFDRSxVQUFzQixFQUN0QixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNQLE9BQTJCLEVBQ1osV0FBb0M7UUFOakUsWUFRRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxTQUN0RTtRQUg0QixpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFSakUsc0JBQWdCLEdBQXlDLEtBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7SUFXbkgsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLElBQUksRUFBRTt3QkFDSiwwQkFBMEIsRUFBRSwyQkFBMkI7cUJBQ3hEO2lCQUNGOzs7O2dCQW5CQyxVQUFVO2dCQUtWLGdCQUFnQjtnQkFQaEIsd0JBQXdCO2dCQU14QixTQUFTO2dCQU9GLGtCQUFrQix1QkF1QnRCLFFBQVE7Z0JBMUJKLHNCQUFzQix1QkEyQjFCLElBQUksWUFBSSxRQUFROzs7Z0NBZGxCLEtBQUssU0FBQyxnQkFBZ0I7a0NBQ3RCLEtBQUssU0FBQyxrQkFBa0I7cUNBQ3hCLEtBQUssU0FBQyxZQUFZO2tDQUNsQixLQUFLLFNBQUMsa0JBQWtCO29DQUN4QixLQUFLLFNBQUMsb0JBQW9COztJQWM3Qix5QkFBQztDQUFBLEFBMUJELENBT3dDLHNCQUFzQixHQW1CN0Q7U0FuQlksa0JBQWtCOzs7SUFDN0IsMkNBQWlEOztJQUNqRCw2Q0FBcUQ7O0lBQ3JELGdEQUF5RDs7SUFDekQsNkNBQTZEOztJQUM3RCwrQ0FBdUQ7O0lBRXZELDhDQUFtSDs7SUFRakgseUNBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSwgTnpUb29sdGlwVHJpZ2dlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XHJcblxyXG5pbXBvcnQgeyBOelBvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuL256LXBvcG92ZXIuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LXBvcG92ZXJdJyxcclxuICBleHBvcnRBczogJ256UG9wb3ZlcicsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtcG9wb3Zlci1vcGVuXSc6ICdpc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UG9wb3ZlckRpcmVjdGl2ZSBleHRlbmRzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgnbnpQb3BvdmVyVGl0bGUnKSBzcGVjaWZpY1RpdGxlOiBOelRTVHlwZTtcclxuICBASW5wdXQoJ256UG9wb3ZlckNvbnRlbnQnKSBzcGVjaWZpY0NvbnRlbnQ6IE56VFNUeXBlO1xyXG4gIEBJbnB1dCgnbnotcG9wb3ZlcicpIGRpcmVjdGl2ZU5hbWVUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xyXG4gIEBJbnB1dCgnbnpQb3BvdmVyVHJpZ2dlcicpIHNwZWNpZmljVHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlcjtcclxuICBASW5wdXQoJ256UG9wb3ZlclBsYWNlbWVudCcpIHNwZWNpZmljUGxhY2VtZW50OiBzdHJpbmc7XHJcblxyXG4gIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpQb3BvdmVyQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTnpQb3BvdmVyQ29tcG9uZW50KTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBPcHRpb25hbCgpIHRvb2x0aXA6IE56UG9wb3ZlckNvbXBvbmVudCxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgdG9vbHRpcCwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxufVxyXG4iXX0=