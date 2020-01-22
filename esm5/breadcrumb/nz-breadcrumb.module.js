/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2JyZWFkY3J1bWIvIiwic291cmNlcyI6WyJuei1icmVhZGNydW1iLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQUFBO0lBS2lDLENBQUM7O2dCQUxqQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQztvQkFDdEcsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUseUJBQXlCLENBQUM7b0JBQ2hFLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLHlCQUF5QixDQUFDO2lCQUM1RDs7SUFDZ0MseUJBQUM7Q0FBQSxBQUxsQyxJQUtrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlLCBOek92ZXJsYXlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOekJyZWFkQ3J1bWJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpCcmVhZENydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9uei1icmVhZGNydW1iLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56QWRkT25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE56T3ZlcmxheU1vZHVsZSwgTnpEcm9wRG93bk1vZHVsZSwgTnpJY29uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOekJyZWFkQ3J1bWJDb21wb25lbnQsIE56QnJlYWRDcnVtYkl0ZW1Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOekJyZWFkQ3J1bWJDb21wb25lbnQsIE56QnJlYWRDcnVtYkl0ZW1Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekJyZWFkQ3J1bWJNb2R1bGUge31cclxuIl19