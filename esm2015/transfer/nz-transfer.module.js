/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTransferListComponent } from './nz-transfer-list.component';
import { NzTransferSearchComponent } from './nz-transfer-search.component';
import { NzTransferComponent } from './nz-transfer.component';
import * as i0 from "@angular/core";
export class NzTransferModule {
}
/** @nocollapse */ NzTransferModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzTransferModule });
/** @nocollapse */ NzTransferModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzTransferModule_Factory(t) { return new (t || NzTransferModule)(); }, imports: [[CommonModule, FormsModule, NzCheckboxModule, NzButtonModule, NzInputModule, NzI18nModule, NzIconModule, NzEmptyModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzTransferModule, { declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent], imports: [CommonModule, FormsModule, NzCheckboxModule, NzButtonModule, NzInputModule, NzI18nModule, NzIconModule, NzEmptyModule], exports: [NzTransferComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTransferModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzCheckboxModule, NzButtonModule, NzInputModule, NzI18nModule, NzIconModule, NzEmptyModule],
                declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
                exports: [NzTransferComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmFuc2Zlci8iLCJzb3VyY2VzIjpbIm56LXRyYW5zZmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFPOUQsTUFBTSxPQUFPLGdCQUFnQjs7b0RBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGtCQUpsQixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQzt3RkFJckgsZ0JBQWdCLG1CQUhaLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixhQUQ1RSxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLGFBRXJILG1CQUFtQjtrREFFbEIsZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7Z0JBQ2hJLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixDQUFDO2dCQUN2RixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcclxuaW1wb3J0IHsgTnpDaGVja2JveE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBOekVtcHR5TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9lbXB0eSc7XHJcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcclxuXHJcbmltcG9ydCB7IE56VHJhbnNmZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9uei10cmFuc2Zlci1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VHJhbnNmZXJTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL256LXRyYW5zZmVyLXNlYXJjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRyYW5zZmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei10cmFuc2Zlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpDaGVja2JveE1vZHVsZSwgTnpCdXR0b25Nb2R1bGUsIE56SW5wdXRNb2R1bGUsIE56STE4bk1vZHVsZSwgTnpJY29uTW9kdWxlLCBOekVtcHR5TW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOelRyYW5zZmVyQ29tcG9uZW50LCBOelRyYW5zZmVyTGlzdENvbXBvbmVudCwgTnpUcmFuc2ZlclNlYXJjaENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW056VHJhbnNmZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRyYW5zZmVyTW9kdWxlIHt9XHJcbiJdfQ==