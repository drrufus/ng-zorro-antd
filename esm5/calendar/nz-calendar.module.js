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
var NzCalendarModule = /** @class */ (function () {
    function NzCalendarModule() {
    }
    /** @nocollapse */ NzCalendarModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzCalendarModule });
    /** @nocollapse */ NzCalendarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzCalendarModule_Factory(t) { return new (t || NzCalendarModule)(); }, imports: [[CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule]] });
    return NzCalendarModule;
}());
export { NzCalendarModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLHdCQUF3QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7QUFFOUQ7SUFBQTtLQXVCZ0M7d0RBQW5CLGdCQUFnQjttSEFBaEIsZ0JBQWdCLGtCQUZsQixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7MkJBNUNuRjtDQThDZ0MsQUF2QmhDLElBdUJnQztTQUFuQixnQkFBZ0I7d0ZBQWhCLGdCQUFnQixtQkFyQnpCLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsbUJBQW1CLGFBV1gsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsYUFSOUUsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsbUJBQW1CO2tEQUlWLGdCQUFnQjtjQXZCNUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWix5QkFBeUI7b0JBQ3pCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsd0JBQXdCO29CQUN4QixrQkFBa0I7b0JBQ2xCLHNCQUFzQjtvQkFDdEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQix3QkFBd0I7b0JBQ3hCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFDO2FBQ2xGOzt1QkFkRyxrQkFBa0IsR0FObEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xyXG5pbXBvcnQgeyBOelNlbGVjdE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2VsZWN0JztcclxuXHJcbmltcG9ydCB7IERhdGVUYWJsZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGFibGUtY2VsbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9udGhUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpEYXRlQ2VsbERpcmVjdGl2ZSwgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUsIE56TW9udGhDZWxsRGlyZWN0aXZlLCBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUgfSBmcm9tICcuL256LWNhbGVuZGFyLWNlbGxzJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL256LWNhbGVuZGFyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTnpDYWxlbmRhckhlYWRlckNvbXBvbmVudCxcclxuICAgIE56Q2FsZW5kYXJDb21wb25lbnQsXHJcbiAgICBOekRhdGVDZWxsRGlyZWN0aXZlLFxyXG4gICAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUsXHJcbiAgICBOek1vbnRoQ2VsbERpcmVjdGl2ZSxcclxuICAgIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZSxcclxuICAgIERhdGVUYWJsZUNvbXBvbmVudCxcclxuICAgIERhdGVUYWJsZUNlbGxDb21wb25lbnQsXHJcbiAgICBNb250aFRhYmxlQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOekNhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgTnpEYXRlQ2VsbERpcmVjdGl2ZSxcclxuICAgIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLFxyXG4gICAgTnpNb250aENlbGxEaXJlY3RpdmUsXHJcbiAgICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUsXHJcbiAgICBEYXRlVGFibGVDb21wb25lbnQsXHJcbiAgICBNb250aFRhYmxlQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpJMThuTW9kdWxlLCBOelJhZGlvTW9kdWxlLCBOelNlbGVjdE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FsZW5kYXJNb2R1bGUge31cclxuIl19