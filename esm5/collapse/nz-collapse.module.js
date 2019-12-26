/**
 * @fileoverview added by tsickle
 * Generated from: nz-collapse.module.ts
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
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCollapsePanelComponent } from './nz-collapse-panel.component';
import { NzCollapseComponent } from './nz-collapse.component';
var NzCollapseModule = /** @class */ (function () {
    function NzCollapseModule() {
    }
    NzCollapseModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzCollapsePanelComponent, NzCollapseComponent],
                    exports: [NzCollapsePanelComponent, NzCollapseComponent],
                    imports: [CommonModule, NzIconModule, NzAddOnModule]
                },] }
    ];
    return NzCollapseModule;
}());
export { NzCollapseModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlEO0lBQUE7SUFLK0IsQ0FBQzs7Z0JBTC9CLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxtQkFBbUIsQ0FBQztvQkFDN0QsT0FBTyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsbUJBQW1CLENBQUM7b0JBQ3hELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO2lCQUNyRDs7SUFDOEIsdUJBQUM7Q0FBQSxBQUxoQyxJQUtnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekNvbGxhcHNlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jb2xsYXBzZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtOekNvbGxhcHNlUGFuZWxDb21wb25lbnQsIE56Q29sbGFwc2VDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOekNvbGxhcHNlUGFuZWxDb21wb25lbnQsIE56Q29sbGFwc2VDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpBZGRPbk1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VNb2R1bGUge31cclxuIl19