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
import { NzDescriptionsItemComponent } from './nz-descriptions-item.component';
import { NzDescriptionsComponent } from './nz-descriptions.component';
import * as i0 from "@angular/core";
var NzDescriptionsModule = /** @class */ (function () {
    function NzDescriptionsModule() {
    }
    /** @nocollapse */ NzDescriptionsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzDescriptionsModule });
    /** @nocollapse */ NzDescriptionsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzDescriptionsModule_Factory(t) { return new (t || NzDescriptionsModule)(); }, imports: [[CommonModule, NzAddOnModule, PlatformModule]] });
    return NzDescriptionsModule;
}());
export { NzDescriptionsModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzDescriptionsModule, { declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent], imports: [CommonModule, NzAddOnModule, PlatformModule], exports: [NzDescriptionsComponent, NzDescriptionsItemComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDescriptionsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule, PlatformModule],
                declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent],
                exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zLyIsInNvdXJjZXMiOlsibnotZGVzY3JpcHRpb25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUV0RTtJQUFBO0tBS29DOzREQUF2QixvQkFBb0I7MkhBQXBCLG9CQUFvQixrQkFKdEIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQzsrQkFoQnhEO0NBb0JvQyxBQUxwQyxJQUtvQztTQUF2QixvQkFBb0I7d0ZBQXBCLG9CQUFvQixtQkFIaEIsdUJBQXVCLEVBQUUsMkJBQTJCLGFBRHpELFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxhQUUzQyx1QkFBdUIsRUFBRSwyQkFBMkI7a0RBRW5ELG9CQUFvQjtjQUxoQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7Z0JBQ3RELFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLDJCQUEyQixDQUFDO2dCQUNwRSxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSwyQkFBMkIsQ0FBQzthQUNoRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kZXNjcmlwdGlvbnMtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekRlc2NyaXB0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vbnotZGVzY3JpcHRpb25zLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56QWRkT25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOekRlc2NyaXB0aW9uc0NvbXBvbmVudCwgTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpEZXNjcmlwdGlvbnNDb21wb25lbnQsIE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56RGVzY3JpcHRpb25zTW9kdWxlIHt9XHJcbiJdfQ==