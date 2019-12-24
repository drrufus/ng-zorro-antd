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
import { NzAddOnModule, NzPipesModule } from 'ng-zorro-antd/core';
import { NzCountdownComponent } from './nz-countdown.component';
import { NzStatisticNumberComponent } from './nz-statistic-number.component';
import { NzStatisticComponent } from './nz-statistic.component';
import * as i0 from "@angular/core";
export class NzStatisticModule {
}
/** @nocollapse */ NzStatisticModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzStatisticModule });
/** @nocollapse */ NzStatisticModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzStatisticModule_Factory(t) { return new (t || NzStatisticModule)(); }, imports: [[CommonModule, PlatformModule, NzAddOnModule, NzPipesModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzStatisticModule, { declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent], imports: [CommonModule, PlatformModule, NzAddOnModule, NzPipesModule], exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzStatisticModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PlatformModule, NzAddOnModule, NzPipesModule],
                declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent],
                exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotc3RhdGlzdGljLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFPaEUsTUFBTSxPQUFPLGlCQUFpQjs7cURBQWpCLGlCQUFpQjtpSEFBakIsaUJBQWlCLGtCQUpuQixDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQzt3RkFJMUQsaUJBQWlCLG1CQUhiLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixhQUQzRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxhQUFhLGFBRTFELG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLDBCQUEwQjtrREFFckUsaUJBQWlCO2NBTDdCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7Z0JBQ3JFLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixDQUFDO2dCQUN0RixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSwwQkFBMEIsQ0FBQzthQUNsRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56UGlwZXNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDb3VudGRvd25Db21wb25lbnQgfSBmcm9tICcuL256LWNvdW50ZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelN0YXRpc3RpY051bWJlckNvbXBvbmVudCB9IGZyb20gJy4vbnotc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelN0YXRpc3RpY0NvbXBvbmVudCB9IGZyb20gJy4vbnotc3RhdGlzdGljLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOelBpcGVzTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOelN0YXRpc3RpY0NvbXBvbmVudCwgTnpDb3VudGRvd25Db21wb25lbnQsIE56U3RhdGlzdGljTnVtYmVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpTdGF0aXN0aWNDb21wb25lbnQsIE56Q291bnRkb3duQ29tcG9uZW50LCBOelN0YXRpc3RpY051bWJlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56U3RhdGlzdGljTW9kdWxlIHt9XHJcbiJdfQ==