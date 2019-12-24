/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
import { NzTimelineComponent } from './nz-timeline.component';
import * as i0 from "@angular/core";
export class NzTimelineModule {
}
/** @nocollapse */ NzTimelineModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzTimelineModule });
/** @nocollapse */ NzTimelineModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzTimelineModule_Factory(t) { return new (t || NzTimelineModule)(); }, imports: [[CommonModule, PlatformModule, NzIconModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzTimelineModule, { declarations: [NzTimelineItemComponent, NzTimelineComponent], imports: [CommonModule, PlatformModule, NzIconModule, NzAddOnModule], exports: [NzTimelineItemComponent, NzTimelineComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTimelineModule, [{
        type: NgModule,
        args: [{
                declarations: [NzTimelineItemComponent, NzTimelineComponent],
                exports: [NzTimelineItemComponent, NzTimelineComponent],
                imports: [CommonModule, PlatformModule, NzIconModule, NzAddOnModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lbGluZS8iLCJzb3VyY2VzIjpbIm56LXRpbWVsaW5lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFPOUQsTUFBTSxPQUFPLGdCQUFnQjs7b0RBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGtCQUZsQixDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQzt3RkFFekQsZ0JBQWdCLG1CQUpaLHVCQUF1QixFQUFFLG1CQUFtQixhQUVqRCxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxhQUFhLGFBRHpELHVCQUF1QixFQUFFLG1CQUFtQjtrREFHM0MsZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxtQkFBbUIsQ0FBQztnQkFDNUQsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3ZELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQzthQUNyRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgTnpUaW1lbGluZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUaW1lbGluZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGltZWxpbmUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTnpUaW1lbGluZUl0ZW1Db21wb25lbnQsIE56VGltZWxpbmVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOelRpbWVsaW5lSXRlbUNvbXBvbmVudCwgTnpUaW1lbGluZUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUGxhdGZvcm1Nb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpBZGRPbk1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGltZWxpbmVNb2R1bGUge31cclxuIl19