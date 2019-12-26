/**
 * @fileoverview added by tsickle
 * Generated from: nz-breadcrumb.module.ts
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
import { NzAddOnModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbItemComponent } from './nz-breadcrumb-item.component';
import { NzBreadCrumbComponent } from './nz-breadcrumb.component';
var NzBreadCrumbModule = /** @class */ (function () {
    function NzBreadCrumbModule() {
    }
    NzBreadCrumbModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule, OverlayModule, NzOverlayModule, NzDropDownModule, NzIconModule],
                    declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent],
                    exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent]
                },] }
    ];
    return NzBreadCrumbModule;
}());
export { NzBreadCrumbModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2JyZWFkY3J1bWIvIiwic291cmNlcyI6WyJuei1icmVhZGNydW1iLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEU7SUFBQTtJQUtpQyxDQUFDOztnQkFMakMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUM7b0JBQ3RHLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLHlCQUF5QixDQUFDO29CQUNoRSxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSx5QkFBeUIsQ0FBQztpQkFDNUQ7O0lBQ2dDLHlCQUFDO0NBQUEsQUFMbEMsSUFLa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgTnpCcmVhZENydW1iSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbnotYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56QnJlYWRDcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vbnotYnJlYWRjcnVtYi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOek92ZXJsYXlNb2R1bGUsIE56RHJvcERvd25Nb2R1bGUsIE56SWNvbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpCcmVhZENydW1iQ29tcG9uZW50LCBOekJyZWFkQ3J1bWJJdGVtQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpCcmVhZENydW1iQ29tcG9uZW50LCBOekJyZWFkQ3J1bWJJdGVtQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpCcmVhZENydW1iTW9kdWxlIHt9XHJcbiJdfQ==