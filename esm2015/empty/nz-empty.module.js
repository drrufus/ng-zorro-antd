/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzEmbedEmptyComponent } from './nz-embed-empty.component';
import { NzEmptyComponent } from './nz-empty.component';
import * as i0 from "@angular/core";
export class NzEmptyModule {
}
/** @nocollapse */ NzEmptyModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzEmptyModule });
/** @nocollapse */ NzEmptyModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzEmptyModule_Factory(t) { return new (t || NzEmptyModule)(); }, imports: [[CommonModule, PortalModule, NzAddOnModule, NzI18nModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzEmptyModule, { declarations: [NzEmptyComponent, NzEmbedEmptyComponent], imports: [CommonModule, PortalModule, NzAddOnModule, NzI18nModule], exports: [NzEmptyComponent, NzEmbedEmptyComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzEmptyModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PortalModule, NzAddOnModule, NzI18nModule],
                declarations: [NzEmptyComponent, NzEmbedEmptyComponent],
                exports: [NzEmptyComponent, NzEmbedEmptyComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbIm56LWVtcHR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFPeEQsTUFBTSxPQUFPLGFBQWE7O2lEQUFiLGFBQWE7eUdBQWIsYUFBYSxrQkFKZixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQzt3RkFJdkQsYUFBYSxtQkFIVCxnQkFBZ0IsRUFBRSxxQkFBcUIsYUFENUMsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxhQUV2RCxnQkFBZ0IsRUFBRSxxQkFBcUI7a0RBRXRDLGFBQWE7Y0FMekIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztnQkFDbEUsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUscUJBQXFCLENBQUM7Z0JBQ3ZELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHFCQUFxQixDQUFDO2FBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgTnpFbWJlZEVtcHR5Q29tcG9uZW50IH0gZnJvbSAnLi9uei1lbWJlZC1lbXB0eS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekVtcHR5Q29tcG9uZW50IH0gZnJvbSAnLi9uei1lbXB0eS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQb3J0YWxNb2R1bGUsIE56QWRkT25Nb2R1bGUsIE56STE4bk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpFbXB0eUNvbXBvbmVudCwgTnpFbWJlZEVtcHR5Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpFbXB0eUNvbXBvbmVudCwgTnpFbWJlZEVtcHR5Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpFbXB0eU1vZHVsZSB7fVxyXG4iXX0=