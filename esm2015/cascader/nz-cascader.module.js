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
import { FormsModule } from '@angular/forms';
import { NzAddOnModule, NzHighlightModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCascaderOptionComponent } from './nz-cascader-li.component';
import { NzCascaderComponent } from './nz-cascader.component';
export class NzCascaderModule {
}
NzCascaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    OverlayModule,
                    NzAddOnModule,
                    NzEmptyModule,
                    NzHighlightModule,
                    NzIconModule,
                    NzInputModule,
                    NzNoAnimationModule,
                    NzOverlayModule
                ],
                declarations: [NzCascaderComponent, NzCascaderOptionComponent],
                exports: [NzCascaderComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWtCOUQsTUFBTSxPQUFPLGdCQUFnQjs7O1lBaEI1QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxhQUFhO29CQUNiLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixtQkFBbUI7b0JBQ25CLGVBQWU7aUJBQ2hCO2dCQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLHlCQUF5QixDQUFDO2dCQUM5RCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlLCBOekhpZ2hsaWdodE1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpFbXB0eU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZW1wdHknO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XHJcblxyXG5pbXBvcnQgeyBOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYXNjYWRlci1saS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekNhc2NhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYXNjYWRlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICBOekFkZE9uTW9kdWxlLFxyXG4gICAgTnpFbXB0eU1vZHVsZSxcclxuICAgIE56SGlnaGxpZ2h0TW9kdWxlLFxyXG4gICAgTnpJY29uTW9kdWxlLFxyXG4gICAgTnpJbnB1dE1vZHVsZSxcclxuICAgIE56Tm9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBOek92ZXJsYXlNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW056Q2FzY2FkZXJDb21wb25lbnQsIE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOekNhc2NhZGVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlck1vZHVsZSB7fVxyXG4iXX0=