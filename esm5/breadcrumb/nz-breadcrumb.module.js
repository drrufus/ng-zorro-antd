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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "@angular/cdk/overlay";
import * as i4 from "@angular/cdk/bidi";
import * as i5 from "@angular/cdk/scrolling";
import * as i6 from "ng-zorro-antd/menu";
import * as i7 from "ng-zorro-antd/dropdown";
import * as i8 from "ng-zorro-antd/icon";
var NzBreadCrumbModule = /** @class */ (function () {
    function NzBreadCrumbModule() {
    }
    /** @nocollapse */ NzBreadCrumbModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzBreadCrumbModule });
    /** @nocollapse */ NzBreadCrumbModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzBreadCrumbModule_Factory(t) { return new (t || NzBreadCrumbModule)(); }, imports: [[CommonModule, NzAddOnModule, OverlayModule, NzOverlayModule, NzDropDownModule, NzIconModule]] });
    return NzBreadCrumbModule;
}());
export { NzBreadCrumbModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzBreadCrumbModule, { declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent], imports: [CommonModule, NzAddOnModule, OverlayModule, NzOverlayModule, NzDropDownModule, NzIconModule], exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzBreadCrumbModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule, OverlayModule, NzOverlayModule, NzDropDownModule, NzIconModule],
                declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent],
                exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent]
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(NzBreadCrumbComponent, [NzBreadCrumbComponent, NzBreadCrumbItemComponent, i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.NzStringTemplateOutletDirective, i2.NzClassListAddDirective, i3.CdkConnectedOverlay, i3.CdkOverlayOrigin, i4.Dir, i5.CdkFixedSizeVirtualScroll, i5.CdkScrollable, i5.CdkVirtualForOf, i5.CdkVirtualScrollViewport, i2.NzConnectedOverlayDirective, i6.NzMenuDirective, i6.NzMenuItemDirective, i6.NzSubMenuComponent, i6.NzMenuDividerDirective, i6.NzMenuGroupComponent, i7.NzDropDownDirective, i7.NzDropDownADirective, i7.NzDropdownMenuComponent, i8.NzIconDirective], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2JyZWFkY3J1bWIvIiwic291cmNlcyI6WyJuei1icmVhZGNydW1iLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7QUFFbEU7SUFBQTtLQUtrQzswREFBckIsa0JBQWtCO3VIQUFsQixrQkFBa0Isa0JBSnBCLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQzs2QkFwQnhHO0NBd0JrQyxBQUxsQyxJQUtrQztTQUFyQixrQkFBa0I7d0ZBQWxCLGtCQUFrQixtQkFIZCxxQkFBcUIsRUFBRSx5QkFBeUIsYUFEckQsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksYUFFM0YscUJBQXFCLEVBQUUseUJBQXlCO2tEQUUvQyxrQkFBa0I7Y0FMOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUM7Z0JBQ3RHLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLHlCQUF5QixDQUFDO2dCQUNoRSxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSx5QkFBeUIsQ0FBQzthQUM1RDs7dUJBRmdCLHFCQUFxQixHQUFyQixxQkFBcUIsRUFBRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlLCBOek92ZXJsYXlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOekJyZWFkQ3J1bWJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpCcmVhZENydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9uei1icmVhZGNydW1iLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56QWRkT25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE56T3ZlcmxheU1vZHVsZSwgTnpEcm9wRG93bk1vZHVsZSwgTnpJY29uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOekJyZWFkQ3J1bWJDb21wb25lbnQsIE56QnJlYWRDcnVtYkl0ZW1Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOekJyZWFkQ3J1bWJDb21wb25lbnQsIE56QnJlYWRDcnVtYkl0ZW1Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekJyZWFkQ3J1bWJNb2R1bGUge31cclxuIl19