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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/menu';
import * as ɵngcc2 from '@angular/forms';
import * as ɵngcc3 from 'ng-zorro-antd/core';
import * as ɵngcc4 from 'ng-zorro-antd/radio';
import * as ɵngcc5 from 'ng-zorro-antd/checkbox';
import * as ɵngcc6 from 'ng-zorro-antd/dropdown';
import * as ɵngcc7 from '@angular/common';
import * as ɵngcc8 from 'ng-zorro-antd/pagination';
import * as ɵngcc9 from 'ng-zorro-antd/spin';
import * as ɵngcc10 from 'ng-zorro-antd/icon';
import * as ɵngcc11 from 'ng-zorro-antd/empty';
import * as ɵngcc12 from '@angular/cdk/bidi';
import * as ɵngcc13 from '@angular/cdk/scrolling';
import * as ɵngcc14 from 'ng-zorro-antd/i18n';
export class NzTableModule {
}
NzTableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTableModule });
NzTableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTableModule_Factory(t) { return new (t || NzTableModule)(); }, imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTableModule, { declarations: function () { return [NzTableComponent,
        NzThComponent,
        NzTdComponent,
        NzTheadComponent,
        NzTbodyDirective,
        NzTrDirective,
        NzVirtualScrollDirective]; }, imports: function () { return [NzMenuModule,
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
        ScrollingModule]; }, exports: function () { return [NzTableComponent,
        NzThComponent,
        NzTdComponent,
        NzTheadComponent,
        NzTbodyDirective,
        NzTrDirective,
        NzVirtualScrollDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTableModule, [{
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
                exports: [
                    NzTableComponent,
                    NzThComponent,
                    NzTdComponent,
                    NzTheadComponent,
                    NzTbodyDirective,
                    NzTrDirective,
                    NzVirtualScrollDirective
                ],
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
ɵngcc0.ɵɵsetComponentScope(NzTableComponent, [ɵngcc1.NzMenuDirective, ɵngcc1.NzMenuItemDirective, ɵngcc1.NzSubMenuComponent, ɵngcc1.NzMenuDividerDirective, ɵngcc1.NzMenuGroupComponent, ɵngcc2.ɵangular_packages_forms_forms_y, ɵngcc2.NgSelectOption, ɵngcc2.ɵangular_packages_forms_forms_x, ɵngcc2.DefaultValueAccessor, ɵngcc2.NumberValueAccessor, ɵngcc2.RangeValueAccessor, ɵngcc2.CheckboxControlValueAccessor, ɵngcc2.SelectControlValueAccessor, ɵngcc2.SelectMultipleControlValueAccessor, ɵngcc2.RadioControlValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgControlStatusGroup, ɵngcc2.RequiredValidator, ɵngcc2.MinLengthValidator, ɵngcc2.MaxLengthValidator, ɵngcc2.PatternValidator, ɵngcc2.CheckboxRequiredValidator, ɵngcc2.EmailValidator, ɵngcc2.NgModel, ɵngcc2.NgModelGroup, ɵngcc2.NgForm, ɵngcc3.NzStringTemplateOutletDirective, ɵngcc3.NzClassListAddDirective, ɵngcc4.NzRadioComponent, ɵngcc4.NzRadioButtonComponent, ɵngcc4.NzRadioGroupComponent, ɵngcc5.NzCheckboxComponent, ɵngcc5.NzCheckboxGroupComponent, ɵngcc5.NzCheckboxWrapperComponent, ɵngcc6.NzDropDownComponent, ɵngcc6.NzDropDownButtonComponent, ɵngcc6.NzDropDownDirective, ɵngcc6.NzDropDownADirective, ɵngcc6.NzDropdownMenuComponent, ɵngcc7.NgClass, ɵngcc7.NgComponentOutlet, ɵngcc7.NgForOf, ɵngcc7.NgIf, ɵngcc7.NgTemplateOutlet, ɵngcc7.NgStyle, ɵngcc7.NgSwitch, ɵngcc7.NgSwitchCase, ɵngcc7.NgSwitchDefault, ɵngcc7.NgPlural, ɵngcc7.NgPluralCase, ɵngcc8.NzPaginationComponent, ɵngcc9.NzSpinComponent, ɵngcc10.NzIconDirective, ɵngcc11.NzEmptyComponent, ɵngcc11.NzEmbedEmptyComponent, ɵngcc12.Dir, ɵngcc13.CdkFixedSizeVirtualScroll, ɵngcc13.CdkScrollable, ɵngcc13.CdkVirtualForOf, ɵngcc13.CdkVirtualScrollViewport, NzTableComponent,
    NzThComponent,
    NzTdComponent,
    NzTheadComponent,
    NzTbodyDirective,
    NzTrDirective,
    NzVirtualScrollDirective], [ɵngcc7.AsyncPipe, ɵngcc7.UpperCasePipe, ɵngcc7.LowerCasePipe, ɵngcc7.JsonPipe, ɵngcc7.SlicePipe, ɵngcc7.DecimalPipe, ɵngcc7.PercentPipe, ɵngcc7.TitleCasePipe, ɵngcc7.CurrencyPipe, ɵngcc7.DatePipe, ɵngcc7.I18nPluralPipe, ɵngcc7.I18nSelectPipe, ɵngcc7.KeyValuePipe, ɵngcc14.NzI18nPipe]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUubW9kdWxlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC90YWJsZS9uei10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ3pFLE1BQU0sT0FBTyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDMUI7NEJBckNDLFFBQVEsU0FBQyxrQkFDUixZQUFZLEVBQUUsc0JBQ1osZ0JBQWdCLHNCQUNoQixhQUFhO1NBQ2IsYUFBYTtxQkFDYjtjQUFnQjtVQUNoQjtBQUFnQixzQkFDaEI7WUFBYSxzQkFDYix3QkFBd0Isa0JBQ3pCO1dBQ0QsT0FBTyxFQUFFO3FCQUNQO2NBQWdCO2FBQ2hCO0FBQWEsc0JBQ2I7U0FBYTtTQUNiO0NBQWdCLHNCQUNoQjtXQUFnQjtXQUNoQjtFQUFhO0VBQ2I7R0FBd0Isa0JBQ3pCLGtCQUNELE9BQU8sRUFBRSxzQkFDUDtJQUFZO0dBQ1osV0FBVzthQUNYO0FBQWEsc0JBQ2I7U0FBYTtRQUNiLGdCQUFnQixzQkFDaEI7ZUFBZ0Isc0JBQ2hCLFlBQVksc0JBQ1o7YUFBYztXQUNkO1lBQWtCO0VBQ2xCLFlBQVksc0JBQ1o7VUFBWSxzQkFDWjtTQUFZLHNCQUNaO1NBQWEsc0JBQ2I7UUFBZSxrQkFDaEI7RUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZUQUNJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XHJcbmltcG9ydCB7IE56RW1wdHlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2VtcHR5JztcclxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuaW1wb3J0IHsgTnpNZW51TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcclxuaW1wb3J0IHsgTnpQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xyXG5pbXBvcnQgeyBOelNwaW5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NwaW4nO1xyXG5cclxuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUYm9keURpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGJvZHkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpUZENvbXBvbmVudCB9IGZyb20gJy4vbnotdGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUaENvbXBvbmVudCB9IGZyb20gJy4vbnotdGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vbnotdGhlYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdHIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlIH0gZnJvbSAnLi9uei12aXJ0dWFsLXNjcm9sbC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE56VGFibGVDb21wb25lbnQsXHJcbiAgICBOelRoQ29tcG9uZW50LFxyXG4gICAgTnpUZENvbXBvbmVudCxcclxuICAgIE56VGhlYWRDb21wb25lbnQsXHJcbiAgICBOelRib2R5RGlyZWN0aXZlLFxyXG4gICAgTnpUckRpcmVjdGl2ZSxcclxuICAgIE56VmlydHVhbFNjcm9sbERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTnpUYWJsZUNvbXBvbmVudCxcclxuICAgIE56VGhDb21wb25lbnQsXHJcbiAgICBOelRkQ29tcG9uZW50LFxyXG4gICAgTnpUaGVhZENvbXBvbmVudCxcclxuICAgIE56VGJvZHlEaXJlY3RpdmUsXHJcbiAgICBOelRyRGlyZWN0aXZlLFxyXG4gICAgTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOek1lbnVNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE56QWRkT25Nb2R1bGUsXHJcbiAgICBOelJhZGlvTW9kdWxlLFxyXG4gICAgTnpDaGVja2JveE1vZHVsZSxcclxuICAgIE56RHJvcERvd25Nb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBQbGF0Zm9ybU1vZHVsZSxcclxuICAgIE56UGFnaW5hdGlvbk1vZHVsZSxcclxuICAgIE56U3Bpbk1vZHVsZSxcclxuICAgIE56STE4bk1vZHVsZSxcclxuICAgIE56SWNvbk1vZHVsZSxcclxuICAgIE56RW1wdHlNb2R1bGUsXHJcbiAgICBTY3JvbGxpbmdNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhYmxlTW9kdWxlIHt9XHJcbiJdfQ==