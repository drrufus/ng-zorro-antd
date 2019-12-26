/**
 * @fileoverview added by tsickle
 * Generated from: nz-tooltip.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
// NOTE: the `t` is not uppercase in directives. Change this would however introduce breaking change.
import { NzToolTipComponent } from './nz-tooltip.component';
import { NzTooltipDirective } from './nz-tooltip.directive';
var NzToolTipModule = /** @class */ (function () {
    function NzToolTipModule() {
    }
    NzToolTipModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzToolTipComponent, NzTooltipDirective],
                    exports: [NzToolTipComponent, NzTooltipDirective],
                    imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule],
                    entryComponents: [NzToolTipComponent]
                },] }
    ];
    return NzToolTipModule;
}());
export { NzToolTipModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJuei10b29sdGlwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHekYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUFBQTtJQU04QixDQUFDOztnQkFOOUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO29CQUN0RCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQztvQkFDakQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDO29CQUMzRixlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDdEM7O0lBQzZCLHNCQUFDO0NBQUEsQUFOL0IsSUFNK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56T3ZlcmxheU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG4vLyBOT1RFOiB0aGUgYHRgIGlzIG5vdCB1cHBlcmNhc2UgaW4gZGlyZWN0aXZlcy4gQ2hhbmdlIHRoaXMgd291bGQgaG93ZXZlciBpbnRyb2R1Y2UgYnJlYWtpbmcgY2hhbmdlLlxyXG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuL256LXRvb2x0aXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10b29sdGlwLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW056VG9vbFRpcENvbXBvbmVudCwgTnpUb29sdGlwRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbTnpUb29sVGlwQ29tcG9uZW50LCBOelRvb2x0aXBEaXJlY3RpdmVdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE56QWRkT25Nb2R1bGUsIE56T3ZlcmxheU1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTnpUb29sVGlwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUb29sVGlwTW9kdWxlIHt9XHJcbiJdfQ==