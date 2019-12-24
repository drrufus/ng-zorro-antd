/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * A collection module of standard output for all lib components
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { CalendarFooterComponent } from './calendar/calendar-footer.component';
import { CalendarHeaderComponent } from './calendar/calendar-header.component';
import { CalendarInputComponent } from './calendar/calendar-input.component';
import { OkButtonComponent } from './calendar/ok-button.component';
import { TimePickerButtonComponent } from './calendar/time-picker-button.component';
import { TodayButtonComponent } from './calendar/today-button.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { DecadePanelComponent } from './decade/decade-panel.component';
import { MonthPanelComponent } from './month/month-panel.component';
import { DateRangePopupComponent } from './popups/date-range-popup.component';
import { InnerPopupComponent } from './popups/inner-popup.component';
import { YearPanelComponent } from './year/year-panel.component';
import * as i0 from "@angular/core";
var LibPackerModule = /** @class */ (function () {
    function LibPackerModule() {
    }
    /** @nocollapse */ LibPackerModule.ɵmod = i0.ɵɵdefineNgModule({ type: LibPackerModule });
    /** @nocollapse */ LibPackerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LibPackerModule_Factory(t) { return new (t || LibPackerModule)(); }, imports: [[CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzCalendarModule]] });
    return LibPackerModule;
}());
export { LibPackerModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LibPackerModule, { declarations: [CalendarHeaderComponent,
        CalendarInputComponent,
        CalendarFooterComponent,
        OkButtonComponent,
        TimePickerButtonComponent,
        TodayButtonComponent,
        YearPanelComponent,
        MonthPanelComponent,
        DecadePanelComponent,
        InnerPopupComponent,
        DateRangePopupComponent], imports: [CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzCalendarModule], exports: [CalendarHeaderComponent,
        CalendarInputComponent,
        CalendarFooterComponent,
        OkButtonComponent,
        TimePickerButtonComponent,
        TodayButtonComponent,
        YearPanelComponent,
        MonthPanelComponent,
        DecadePanelComponent,
        InnerPopupComponent,
        DateRangePopupComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LibPackerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzCalendarModule],
                exports: [
                    CalendarHeaderComponent,
                    CalendarInputComponent,
                    CalendarFooterComponent,
                    OkButtonComponent,
                    TimePickerButtonComponent,
                    TodayButtonComponent,
                    YearPanelComponent,
                    MonthPanelComponent,
                    DecadePanelComponent,
                    InnerPopupComponent,
                    DateRangePopupComponent
                ],
                declarations: [
                    CalendarHeaderComponent,
                    CalendarInputComponent,
                    CalendarFooterComponent,
                    OkButtonComponent,
                    TimePickerButtonComponent,
                    TodayButtonComponent,
                    YearPanelComponent,
                    MonthPanelComponent,
                    DecadePanelComponent,
                    InnerPopupComponent,
                    DateRangePopupComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXBhY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2xpYi1wYWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVIOztHQUVHO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFakU7SUFBQTtLQStCK0I7dURBQWxCLGVBQWU7aUhBQWYsZUFBZSxrQkE5QmpCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7MEJBbEMxRjtDQWdFK0IsQUEvQi9CLElBK0IrQjtTQUFsQixlQUFlO3dGQUFmLGVBQWUsbUJBZHhCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsb0JBQW9CO1FBRXBCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQix1QkFBdUIsYUEzQmYsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLGFBRXJGLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsb0JBQW9CO1FBRXBCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQix1QkFBdUI7a0RBaUJkLGVBQWU7Y0EvQjNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDeEYsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLGlCQUFpQjtvQkFDakIseUJBQXlCO29CQUN6QixvQkFBb0I7b0JBRXBCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUNqQix5QkFBeUI7b0JBQ3pCLG9CQUFvQjtvQkFFcEIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQix1QkFBdUI7aUJBQ3hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gbW9kdWxlIG9mIHN0YW5kYXJkIG91dHB1dCBmb3IgYWxsIGxpYiBjb21wb25lbnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBOelRpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyJztcclxuXHJcbmltcG9ydCB7IENhbGVuZGFyRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci9jYWxlbmRhci1mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyLWhlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYWxlbmRhcklucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci9jYWxlbmRhci1pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPa0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvb2stYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbWVQaWNrZXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL3RpbWUtcGlja2VyLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2RheUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvdG9kYXktYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBOekNhbGVuZGFyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYWxlbmRhcic7XHJcbmltcG9ydCB7IERlY2FkZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9kZWNhZGUvZGVjYWRlLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vbnRoUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL21vbnRoL21vbnRoLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVSYW5nZVBvcHVwQ29tcG9uZW50IH0gZnJvbSAnLi9wb3B1cHMvZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbm5lclBvcHVwQ29tcG9uZW50IH0gZnJvbSAnLi9wb3B1cHMvaW5uZXItcG9wdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgWWVhclBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi95ZWFyL3llYXItcGFuZWwuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56STE4bk1vZHVsZSwgTnpUaW1lUGlja2VyTW9kdWxlLCBOekNhbGVuZGFyTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDYWxlbmRhckhlYWRlckNvbXBvbmVudCxcclxuICAgIENhbGVuZGFySW5wdXRDb21wb25lbnQsXHJcbiAgICBDYWxlbmRhckZvb3RlckNvbXBvbmVudCxcclxuICAgIE9rQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgVGltZVBpY2tlckJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFRvZGF5QnV0dG9uQ29tcG9uZW50LFxyXG5cclxuICAgIFllYXJQYW5lbENvbXBvbmVudCxcclxuICAgIE1vbnRoUGFuZWxDb21wb25lbnQsXHJcbiAgICBEZWNhZGVQYW5lbENvbXBvbmVudCxcclxuICAgIElubmVyUG9wdXBDb21wb25lbnQsXHJcbiAgICBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDYWxlbmRhckhlYWRlckNvbXBvbmVudCxcclxuICAgIENhbGVuZGFySW5wdXRDb21wb25lbnQsXHJcbiAgICBDYWxlbmRhckZvb3RlckNvbXBvbmVudCxcclxuICAgIE9rQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgVGltZVBpY2tlckJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFRvZGF5QnV0dG9uQ29tcG9uZW50LFxyXG5cclxuICAgIFllYXJQYW5lbENvbXBvbmVudCxcclxuICAgIE1vbnRoUGFuZWxDb21wb25lbnQsXHJcbiAgICBEZWNhZGVQYW5lbENvbXBvbmVudCxcclxuICAgIElubmVyUG9wdXBDb21wb25lbnQsXHJcbiAgICBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYlBhY2tlck1vZHVsZSB7fVxyXG4iXX0=