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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { DateTableCellComponent } from './date-table-cell.component';
import { DateTableComponent } from './date-table.component';
import { MonthTableComponent } from './month-table.component';
import { NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective } from './nz-calendar-cells';
import { NzCalendarHeaderComponent } from './nz-calendar-header.component';
import { NzCalendarComponent } from './nz-calendar.component';
var NzCalendarModule = /** @class */ (function () {
    function NzCalendarModule() {
    }
    NzCalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzCalendarHeaderComponent,
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective,
                        DateTableComponent,
                        DateTableCellComponent,
                        MonthTableComponent
                    ],
                    exports: [
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective,
                        DateTableComponent,
                        MonthTableComponent
                    ],
                    imports: [CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule]
                },] }
    ];
    return NzCalendarModule;
}());
export { NzCalendarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsd0JBQXdCLEVBQ3pCLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQ7SUFBQTtJQXVCK0IsQ0FBQzs7Z0JBdkIvQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHlCQUF5Qjt3QkFDekIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3dCQUN0QixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7aUJBQ2xGOztJQUM4Qix1QkFBQztDQUFBLEFBdkJoQyxJQXVCZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE56UmFkaW9Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3JhZGlvJztcclxuaW1wb3J0IHsgTnpTZWxlY3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XHJcblxyXG5pbXBvcnQgeyBEYXRlVGFibGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXRhYmxlLWNlbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vbnRoVGFibGVDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgTnpEYXRlQ2VsbERpcmVjdGl2ZSxcclxuICBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSxcclxuICBOek1vbnRoQ2VsbERpcmVjdGl2ZSxcclxuICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmVcclxufSBmcm9tICcuL256LWNhbGVuZGFyLWNlbGxzJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL256LWNhbGVuZGFyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTnpDYWxlbmRhckhlYWRlckNvbXBvbmVudCxcclxuICAgIE56Q2FsZW5kYXJDb21wb25lbnQsXHJcbiAgICBOekRhdGVDZWxsRGlyZWN0aXZlLFxyXG4gICAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUsXHJcbiAgICBOek1vbnRoQ2VsbERpcmVjdGl2ZSxcclxuICAgIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZSxcclxuICAgIERhdGVUYWJsZUNvbXBvbmVudCxcclxuICAgIERhdGVUYWJsZUNlbGxDb21wb25lbnQsXHJcbiAgICBNb250aFRhYmxlQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOekNhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgTnpEYXRlQ2VsbERpcmVjdGl2ZSxcclxuICAgIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLFxyXG4gICAgTnpNb250aENlbGxEaXJlY3RpdmUsXHJcbiAgICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUsXHJcbiAgICBEYXRlVGFibGVDb21wb25lbnQsXHJcbiAgICBNb250aFRhYmxlQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpJMThuTW9kdWxlLCBOelJhZGlvTW9kdWxlLCBOelNlbGVjdE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FsZW5kYXJNb2R1bGUge31cclxuIl19