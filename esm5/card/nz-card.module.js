/**
 * @fileoverview added by tsickle
 * Generated from: nz-card.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var NzCardModule = /** @class */ (function () {
    function NzCardModule() {
    }
    NzCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule],
                    declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent],
                    exports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent]
                },] }
    ];
    return NzCardModule;
}());
export { NzCardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhcmQvIiwic291cmNlcyI6WyJuei1jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBQUE7SUFLMkIsQ0FBQzs7Z0JBTDNCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUN0QyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3JILE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsQ0FBQztpQkFDakg7O0lBQzBCLG1CQUFDO0NBQUEsQUFMNUIsSUFLNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q2FyZEdyaWREaXJlY3RpdmUgfSBmcm9tICcuL256LWNhcmQtZ3JpZC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOekNhcmRMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYXJkLWxvYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpDYXJkTWV0YUNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FyZC1tZXRhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Q2FyZFRhYkNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FyZC10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYXJkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56QWRkT25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW056Q2FyZENvbXBvbmVudCwgTnpDYXJkR3JpZERpcmVjdGl2ZSwgTnpDYXJkTWV0YUNvbXBvbmVudCwgTnpDYXJkTG9hZGluZ0NvbXBvbmVudCwgTnpDYXJkVGFiQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpDYXJkQ29tcG9uZW50LCBOekNhcmRHcmlkRGlyZWN0aXZlLCBOekNhcmRNZXRhQ29tcG9uZW50LCBOekNhcmRMb2FkaW5nQ29tcG9uZW50LCBOekNhcmRUYWJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhcmRNb2R1bGUge31cclxuIl19