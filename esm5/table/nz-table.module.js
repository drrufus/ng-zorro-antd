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
var NzTableModule = /** @class */ (function () {
    function NzTableModule() {
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
    return NzTableModule;
}());
export { NzTableModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekU7SUFBQTtLQTRCNkI7cURBQWhCLGFBQWE7NkdBQWIsYUFBYSxrQkFqQmY7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGFBQWE7Z0JBQ2IsYUFBYTtnQkFDYixnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGtCQUFrQjtnQkFDbEIsWUFBWTtnQkFDWixZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixlQUFlO2FBQ2hCO3dCQXpESDtDQTJENkIsQUE1QjdCLElBNEI2QjtTQUFoQixhQUFhO3dGQUFiLGFBQWEsbUJBMUJ0QixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYix3QkFBd0IsYUFJeEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxhQUFhO1FBQ2IsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLGVBQWUsYUFmUCxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSx3QkFBd0I7a0RBa0IxSCxhQUFhO2NBNUJ6QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsd0JBQXdCLENBQUM7Z0JBQ3RJLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixZQUFZO29CQUNaLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixhQUFhO29CQUNiLGVBQWU7aUJBQ2hCO2FBQ0Y7O3VCQXpCRyxnQkFBZ0IsR0FBaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XHJcbmltcG9ydCB7IE56RW1wdHlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2VtcHR5JztcclxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuaW1wb3J0IHsgTnpNZW51TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcclxuaW1wb3J0IHsgTnpQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xyXG5pbXBvcnQgeyBOelNwaW5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NwaW4nO1xyXG5cclxuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUYm9keURpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGJvZHkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpUZENvbXBvbmVudCB9IGZyb20gJy4vbnotdGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUaENvbXBvbmVudCB9IGZyb20gJy4vbnotdGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vbnotdGhlYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdHIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlIH0gZnJvbSAnLi9uei12aXJ0dWFsLXNjcm9sbC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE56VGFibGVDb21wb25lbnQsXHJcbiAgICBOelRoQ29tcG9uZW50LFxyXG4gICAgTnpUZENvbXBvbmVudCxcclxuICAgIE56VGhlYWRDb21wb25lbnQsXHJcbiAgICBOelRib2R5RGlyZWN0aXZlLFxyXG4gICAgTnpUckRpcmVjdGl2ZSxcclxuICAgIE56VmlydHVhbFNjcm9sbERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW056VGFibGVDb21wb25lbnQsIE56VGhDb21wb25lbnQsIE56VGRDb21wb25lbnQsIE56VGhlYWRDb21wb25lbnQsIE56VGJvZHlEaXJlY3RpdmUsIE56VHJEaXJlY3RpdmUsIE56VmlydHVhbFNjcm9sbERpcmVjdGl2ZV0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTnpNZW51TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBOekFkZE9uTW9kdWxlLFxyXG4gICAgTnpSYWRpb01vZHVsZSxcclxuICAgIE56Q2hlY2tib3hNb2R1bGUsXHJcbiAgICBOekRyb3BEb3duTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUGxhdGZvcm1Nb2R1bGUsXHJcbiAgICBOelBhZ2luYXRpb25Nb2R1bGUsXHJcbiAgICBOelNwaW5Nb2R1bGUsXHJcbiAgICBOekkxOG5Nb2R1bGUsXHJcbiAgICBOekljb25Nb2R1bGUsXHJcbiAgICBOekVtcHR5TW9kdWxlLFxyXG4gICAgU2Nyb2xsaW5nTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUYWJsZU1vZHVsZSB7fVxyXG4iXX0=