/**
 * @fileoverview added by tsickle
 * Generated from: nz-calendar.module.ts
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
export class NzCalendarModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLHdCQUF3QixFQUN6QixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBeUI5RCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUF2QjVCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1oseUJBQXlCO29CQUN6QixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsa0JBQWtCO29CQUNsQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsd0JBQXdCO29CQUN4QixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQzthQUNsRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYWRpbyc7XHJcbmltcG9ydCB7IE56U2VsZWN0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWxlY3QnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZVRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb250aFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9tb250aC10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gIE56RGF0ZUNlbGxEaXJlY3RpdmUsXHJcbiAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUsXHJcbiAgTnpNb250aENlbGxEaXJlY3RpdmUsXHJcbiAgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlXHJcbn0gZnJvbSAnLi9uei1jYWxlbmRhci1jZWxscyc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL256LWNhbGVuZGFyLWhlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYWxlbmRhci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQsXHJcbiAgICBOekNhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgTnpEYXRlQ2VsbERpcmVjdGl2ZSxcclxuICAgIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLFxyXG4gICAgTnpNb250aENlbGxEaXJlY3RpdmUsXHJcbiAgICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUsXHJcbiAgICBEYXRlVGFibGVDb21wb25lbnQsXHJcbiAgICBEYXRlVGFibGVDZWxsQ29tcG9uZW50LFxyXG4gICAgTW9udGhUYWJsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTnpDYWxlbmRhckNvbXBvbmVudCxcclxuICAgIE56RGF0ZUNlbGxEaXJlY3RpdmUsXHJcbiAgICBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSxcclxuICAgIE56TW9udGhDZWxsRGlyZWN0aXZlLFxyXG4gICAgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlLFxyXG4gICAgRGF0ZVRhYmxlQ29tcG9uZW50LFxyXG4gICAgTW9udGhUYWJsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56STE4bk1vZHVsZSwgTnpSYWRpb01vZHVsZSwgTnpTZWxlY3RNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFyTW9kdWxlIHt9XHJcbiJdfQ==