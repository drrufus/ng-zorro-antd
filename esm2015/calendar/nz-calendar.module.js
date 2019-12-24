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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/radio";
import * as i4 from "ng-zorro-antd/select";
import * as i5 from "ng-zorro-antd/i18n";
export class NzCalendarModule {
}
/** @nocollapse */ NzCalendarModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzCalendarModule });
/** @nocollapse */ NzCalendarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzCalendarModule_Factory(t) { return new (t || NzCalendarModule)(); }, imports: [[CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzCalendarModule, { declarations: [NzCalendarHeaderComponent,
        NzCalendarComponent,
        NzDateCellDirective,
        NzDateFullCellDirective,
        NzMonthCellDirective,
        NzMonthFullCellDirective,
        DateTableComponent,
        DateTableCellComponent,
        MonthTableComponent], imports: [CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule], exports: [NzCalendarComponent,
        NzDateCellDirective,
        NzDateFullCellDirective,
        NzMonthCellDirective,
        NzMonthFullCellDirective,
        DateTableComponent,
        MonthTableComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCalendarModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(DateTableComponent, [NzCalendarHeaderComponent,
    NzCalendarComponent,
    NzDateCellDirective,
    NzDateFullCellDirective,
    NzMonthCellDirective,
    NzMonthFullCellDirective,
    DateTableComponent,
    DateTableCellComponent,
    MonthTableComponent, i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i3.NzRadioComponent, i3.NzRadioButtonComponent, i3.NzRadioGroupComponent, i4.NzOptionComponent, i4.NzSelectComponent, i4.NzOptionContainerComponent, i4.NzOptionGroupComponent, i4.NzSelectTopControlComponent], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe, i5.NzI18nPipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLHdCQUF3QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7QUF5QjlELE1BQU0sT0FBTyxnQkFBZ0I7O29EQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixrQkFGbEIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFDO3dGQUV0RSxnQkFBZ0IsbUJBckJ6Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLG1CQUFtQixhQVdYLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLGFBUjlFLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtrREFJVixnQkFBZ0I7Y0F2QjVCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1oseUJBQXlCO29CQUN6QixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsa0JBQWtCO29CQUNsQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsd0JBQXdCO29CQUN4QixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQzthQUNsRjs7dUJBZEcsa0JBQWtCLEdBTmxCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE56UmFkaW9Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3JhZGlvJztcclxuaW1wb3J0IHsgTnpTZWxlY3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XHJcblxyXG5pbXBvcnQgeyBEYXRlVGFibGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXRhYmxlLWNlbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vbnRoVGFibGVDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56RGF0ZUNlbGxEaXJlY3RpdmUsIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLCBOek1vbnRoQ2VsbERpcmVjdGl2ZSwgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jYWxlbmRhci1jZWxscyc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL256LWNhbGVuZGFyLWhlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYWxlbmRhci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQsXHJcbiAgICBOekNhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgTnpEYXRlQ2VsbERpcmVjdGl2ZSxcclxuICAgIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLFxyXG4gICAgTnpNb250aENlbGxEaXJlY3RpdmUsXHJcbiAgICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUsXHJcbiAgICBEYXRlVGFibGVDb21wb25lbnQsXHJcbiAgICBEYXRlVGFibGVDZWxsQ29tcG9uZW50LFxyXG4gICAgTW9udGhUYWJsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTnpDYWxlbmRhckNvbXBvbmVudCxcclxuICAgIE56RGF0ZUNlbGxEaXJlY3RpdmUsXHJcbiAgICBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSxcclxuICAgIE56TW9udGhDZWxsRGlyZWN0aXZlLFxyXG4gICAgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlLFxyXG4gICAgRGF0ZVRhYmxlQ29tcG9uZW50LFxyXG4gICAgTW9udGhUYWJsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56STE4bk1vZHVsZSwgTnpSYWRpb01vZHVsZSwgTnpTZWxlY3RNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFyTW9kdWxlIHt9XHJcbiJdfQ==