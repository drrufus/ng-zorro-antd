/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PlatformModule } from '@angular/cdk/platform';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableComponent } from './nz-table.component';
import { NzTbodyDirective } from './nz-tbody.directive';
import { NzTdComponent } from './nz-td.component';
import { NzThComponent } from './nz-th.component';
import { NzTheadComponent } from './nz-thead.component';
import { NzTrDirective } from './nz-tr.directive';
import { NzVirtualScrollDirective } from './nz-virtual-scroll.directive';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/menu";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/core";
import * as i4 from "ng-zorro-antd/radio";
import * as i5 from "ng-zorro-antd/checkbox";
import * as i6 from "ng-zorro-antd/dropdown";
import * as i7 from "@angular/common";
import * as i8 from "ng-zorro-antd/pagination";
import * as i9 from "ng-zorro-antd/spin";
import * as i10 from "ng-zorro-antd/icon";
import * as i11 from "ng-zorro-antd/empty";
import * as i12 from "@angular/cdk/bidi";
import * as i13 from "@angular/cdk/scrolling";
import * as i14 from "ng-zorro-antd/i18n";
export class NzTableModule {
}
/** @nocollapse */ NzTableModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzTableModule });
/** @nocollapse */ NzTableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzTableModule_Factory(t) { return new (t || NzTableModule)(); }, imports: [[
            NzMenuModule,
            FormsModule,
            NzAddOnModule,
            NzRadioModule,
            NzCheckboxModule,
            NzDropDownModule,
            CommonModule,
            PlatformModule,
            NzPaginationModule,
            NzSpinModule,
            NzI18nModule,
            NzIconModule,
            NzEmptyModule,
            ScrollingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzTableModule, { declarations: [NzTableComponent,
        NzThComponent,
        NzTdComponent,
        NzTheadComponent,
        NzTbodyDirective,
        NzTrDirective,
        NzVirtualScrollDirective], imports: [NzMenuModule,
        FormsModule,
        NzAddOnModule,
        NzRadioModule,
        NzCheckboxModule,
        NzDropDownModule,
        CommonModule,
        PlatformModule,
        NzPaginationModule,
        NzSpinModule,
        NzI18nModule,
        NzIconModule,
        NzEmptyModule,
        ScrollingModule], exports: [NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective, NzVirtualScrollDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTableModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzTableComponent,
                    NzThComponent,
                    NzTdComponent,
                    NzTheadComponent,
                    NzTbodyDirective,
                    NzTrDirective,
                    NzVirtualScrollDirective
                ],
                exports: [NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective, NzVirtualScrollDirective],
                imports: [
                    NzMenuModule,
                    FormsModule,
                    NzAddOnModule,
                    NzRadioModule,
                    NzCheckboxModule,
                    NzDropDownModule,
                    CommonModule,
                    PlatformModule,
                    NzPaginationModule,
                    NzSpinModule,
                    NzI18nModule,
                    NzIconModule,
                    NzEmptyModule,
                    ScrollingModule
                ]
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(NzTableComponent, [NzTableComponent,
    NzThComponent,
    NzTdComponent,
    NzTheadComponent,
    NzTbodyDirective,
    NzTrDirective,
    NzVirtualScrollDirective, i1.NzMenuDirective, i1.NzMenuItemDirective, i1.NzSubMenuComponent, i1.NzMenuDividerDirective, i1.NzMenuGroupComponent, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i3.NzStringTemplateOutletDirective, i3.NzClassListAddDirective, i4.NzRadioComponent, i4.NzRadioButtonComponent, i4.NzRadioGroupComponent, i5.NzCheckboxComponent, i5.NzCheckboxGroupComponent, i5.NzCheckboxWrapperComponent, i6.NzDropDownDirective, i6.NzDropDownADirective, i6.NzDropdownMenuComponent, i7.NgClass, i7.NgComponentOutlet, i7.NgForOf, i7.NgIf, i7.NgTemplateOutlet, i7.NgStyle, i7.NgSwitch, i7.NgSwitchCase, i7.NgSwitchDefault, i7.NgPlural, i7.NgPluralCase, i8.NzPaginationComponent, i9.NzSpinComponent, i10.NzIconDirective, i11.NzEmptyComponent, i11.NzEmbedEmptyComponent, i12.Dir, i13.CdkFixedSizeVirtualScroll, i13.CdkScrollable, i13.CdkVirtualForOf, i13.CdkVirtualScrollViewport], [i7.AsyncPipe, i7.UpperCasePipe, i7.LowerCasePipe, i7.JsonPipe, i7.SlicePipe, i7.DecimalPipe, i7.PercentPipe, i7.TitleCasePipe, i7.CurrencyPipe, i7.DatePipe, i7.I18nPluralPipe, i7.I18nSelectPipe, i7.KeyValuePipe, i14.NzI18nPipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QnpFLE1BQU0sT0FBTyxhQUFhOztpREFBYixhQUFhO3lHQUFiLGFBQWEsa0JBakJmO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxhQUFhO1lBQ2IsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1lBQ1osYUFBYTtZQUNiLGVBQWU7U0FDaEI7d0ZBRVUsYUFBYSxtQkExQnRCLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHdCQUF3QixhQUl4QixZQUFZO1FBQ1osV0FBVztRQUNYLGFBQWE7UUFDYixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osY0FBYztRQUNkLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZSxhQWZQLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLHdCQUF3QjtrREFrQjFILGFBQWE7Y0E1QnpCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2Isd0JBQXdCO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQztnQkFDdEksT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxhQUFhO29CQUNiLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZUFBZTtpQkFDaEI7YUFDRjs7dUJBekJHLGdCQUFnQixHQUFoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBTY3JvbGxpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56Q2hlY2tib3hNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NoZWNrYm94JztcclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56RHJvcERvd25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgTnpFbXB0eU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZW1wdHknO1xyXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5pbXBvcnQgeyBOek1lbnVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnUnO1xyXG5pbXBvcnQgeyBOelBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYWRpbyc7XHJcbmltcG9ydCB7IE56U3Bpbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc3Bpbic7XHJcblxyXG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRib2R5RGlyZWN0aXZlIH0gZnJvbSAnLi9uei10Ym9keS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelRkQ29tcG9uZW50IH0gZnJvbSAnLi9uei10ZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRoQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRoZWFkQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aGVhZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10ci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelZpcnR1YWxTY3JvbGxEaXJlY3RpdmUgfSBmcm9tICcuL256LXZpcnR1YWwtc2Nyb2xsLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTnpUYWJsZUNvbXBvbmVudCxcclxuICAgIE56VGhDb21wb25lbnQsXHJcbiAgICBOelRkQ29tcG9uZW50LFxyXG4gICAgTnpUaGVhZENvbXBvbmVudCxcclxuICAgIE56VGJvZHlEaXJlY3RpdmUsXHJcbiAgICBOelRyRGlyZWN0aXZlLFxyXG4gICAgTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTnpUYWJsZUNvbXBvbmVudCwgTnpUaENvbXBvbmVudCwgTnpUZENvbXBvbmVudCwgTnpUaGVhZENvbXBvbmVudCwgTnpUYm9keURpcmVjdGl2ZSwgTnpUckRpcmVjdGl2ZSwgTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOek1lbnVNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE56QWRkT25Nb2R1bGUsXHJcbiAgICBOelJhZGlvTW9kdWxlLFxyXG4gICAgTnpDaGVja2JveE1vZHVsZSxcclxuICAgIE56RHJvcERvd25Nb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBQbGF0Zm9ybU1vZHVsZSxcclxuICAgIE56UGFnaW5hdGlvbk1vZHVsZSxcclxuICAgIE56U3Bpbk1vZHVsZSxcclxuICAgIE56STE4bk1vZHVsZSxcclxuICAgIE56SWNvbk1vZHVsZSxcclxuICAgIE56RW1wdHlNb2R1bGUsXHJcbiAgICBTY3JvbGxpbmdNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhYmxlTW9kdWxlIHt9XHJcbiJdfQ==