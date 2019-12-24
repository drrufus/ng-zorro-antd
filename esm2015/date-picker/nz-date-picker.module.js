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
import { NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LibPackerModule } from './lib/lib-packer.module';
import { DateRangePickerComponent } from './date-range-picker.component';
import { HeaderPickerComponent } from './header-picker.component';
import { NzDatePickerComponent } from './nz-date-picker.component';
import { NzMonthPickerComponent } from './nz-month-picker.component';
import { NzRangePickerComponent } from './nz-range-picker.component';
import { NzWeekPickerComponent } from './nz-week-picker.component';
import { NzYearPickerComponent } from './nz-year-picker.component';
import { NzPickerComponent } from './picker.component';
import * as i0 from "@angular/core";
export class NzDatePickerModule {
}
/** @nocollapse */ NzDatePickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzDatePickerModule });
/** @nocollapse */ NzDatePickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzDatePickerModule_Factory(t) { return new (t || NzDatePickerModule)(); }, imports: [[CommonModule, OverlayModule, LibPackerModule, NzIconModule, NzOverlayModule, NzNoAnimationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzDatePickerModule, { declarations: [HeaderPickerComponent,
        DateRangePickerComponent,
        NzPickerComponent,
        NzDatePickerComponent,
        NzMonthPickerComponent,
        NzYearPickerComponent,
        NzWeekPickerComponent,
        NzRangePickerComponent], imports: [CommonModule, OverlayModule, LibPackerModule, NzIconModule, NzOverlayModule, NzNoAnimationModule], exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDatePickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, LibPackerModule, NzIconModule, NzOverlayModule, NzNoAnimationModule],
                exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent],
                declarations: [
                    HeaderPickerComponent,
                    DateRangePickerComponent,
                    NzPickerComponent,
                    NzDatePickerComponent,
                    NzMonthPickerComponent,
                    NzYearPickerComponent,
                    NzWeekPickerComponent,
                    NzRangePickerComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LWRhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBZ0J2RCxNQUFNLE9BQU8sa0JBQWtCOztzREFBbEIsa0JBQWtCO21IQUFsQixrQkFBa0Isa0JBYnBCLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQzt3RkFhaEcsa0JBQWtCLG1CQVYzQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsc0JBQXNCLGFBVmQsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsYUFDaEcscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCO2tEQVlsSCxrQkFBa0I7Y0FkOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsbUJBQW1CLENBQUM7Z0JBQzNHLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixDQUFDO2dCQUM5SCxZQUFZLEVBQUU7b0JBQ1oscUJBQXFCO29CQUNyQix3QkFBd0I7b0JBQ3hCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtvQkFDckIscUJBQXFCO29CQUNyQixzQkFBc0I7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uTW9kdWxlLCBOek92ZXJsYXlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgTGliUGFja2VyTW9kdWxlIH0gZnJvbSAnLi9saWIvbGliLXBhY2tlci5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZWFkZXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kYXRlLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek1vbnRoUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tb250aC1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbnotcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56V2Vla1BpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbnotd2Vlay1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpZZWFyUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uei15ZWFyLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIExpYlBhY2tlck1vZHVsZSwgTnpJY29uTW9kdWxlLCBOek92ZXJsYXlNb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtOekRhdGVQaWNrZXJDb21wb25lbnQsIE56UmFuZ2VQaWNrZXJDb21wb25lbnQsIE56TW9udGhQaWNrZXJDb21wb25lbnQsIE56WWVhclBpY2tlckNvbXBvbmVudCwgTnpXZWVrUGlja2VyQ29tcG9uZW50XSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEhlYWRlclBpY2tlckNvbXBvbmVudCxcclxuICAgIERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCxcclxuICAgIE56UGlja2VyQ29tcG9uZW50LFxyXG4gICAgTnpEYXRlUGlja2VyQ29tcG9uZW50LFxyXG4gICAgTnpNb250aFBpY2tlckNvbXBvbmVudCxcclxuICAgIE56WWVhclBpY2tlckNvbXBvbmVudCxcclxuICAgIE56V2Vla1BpY2tlckNvbXBvbmVudCxcclxuICAgIE56UmFuZ2VQaWNrZXJDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRhdGVQaWNrZXJNb2R1bGUge31cclxuIl19