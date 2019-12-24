/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzCardGridDirective } from './nz-card-grid.directive';
import { NzCardLoadingComponent } from './nz-card-loading.component';
import { NzCardMetaComponent } from './nz-card-meta.component';
import { NzCardTabComponent } from './nz-card-tab.component';
import { NzCardComponent } from './nz-card.component';
import * as i0 from "@angular/core";
var NzCardModule = /** @class */ (function () {
    function NzCardModule() {
    }
    /** @nocollapse */ NzCardModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzCardModule });
    /** @nocollapse */ NzCardModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzCardModule_Factory(t) { return new (t || NzCardModule)(); }, imports: [[CommonModule, NzAddOnModule]] });
    return NzCardModule;
}());
export { NzCardModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzCardModule, { declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent], imports: [CommonModule, NzAddOnModule], exports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCardModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule],
                declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent],
                exports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhcmQvIiwic291cmNlcyI6WyJuei1jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV0RDtJQUFBO0tBSzRCO29EQUFmLFlBQVk7MkdBQVosWUFBWSxrQkFKZCxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7dUJBbkJ4QztDQXVCNEIsQUFMNUIsSUFLNEI7U0FBZixZQUFZO3dGQUFaLFlBQVksbUJBSFIsZUFBZSxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixhQUQxRyxZQUFZLEVBQUUsYUFBYSxhQUUzQixlQUFlLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCO2tEQUVwRyxZQUFZO2NBTHhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO2dCQUN0QyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUM7Z0JBQ3JILE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsQ0FBQzthQUNqSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNhcmRHcmlkRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jYXJkLWdyaWQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpDYXJkTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbnotY2FyZC1sb2FkaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Q2FyZE1ldGFDb21wb25lbnQgfSBmcm9tICcuL256LWNhcmQtbWV0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekNhcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL256LWNhcmQtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vbnotY2FyZC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOekNhcmRDb21wb25lbnQsIE56Q2FyZEdyaWREaXJlY3RpdmUsIE56Q2FyZE1ldGFDb21wb25lbnQsIE56Q2FyZExvYWRpbmdDb21wb25lbnQsIE56Q2FyZFRhYkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW056Q2FyZENvbXBvbmVudCwgTnpDYXJkR3JpZERpcmVjdGl2ZSwgTnpDYXJkTWV0YUNvbXBvbmVudCwgTnpDYXJkTG9hZGluZ0NvbXBvbmVudCwgTnpDYXJkVGFiQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXJkTW9kdWxlIHt9XHJcbiJdfQ==