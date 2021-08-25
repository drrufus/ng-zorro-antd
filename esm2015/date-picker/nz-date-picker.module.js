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
import * as ɵngcc0 from '@angular/core';
export class NzDatePickerModule {
}
NzDatePickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDatePickerModule });
NzDatePickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDatePickerModule_Factory(t) { return new (t || NzDatePickerModule)(); }, imports: [[CommonModule, OverlayModule, LibPackerModule, NzIconModule, NzOverlayModule, NzNoAnimationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzDatePickerModule, { declarations: function () { return [HeaderPickerComponent,
        DateRangePickerComponent,
        NzPickerComponent,
        NzDatePickerComponent,
        NzMonthPickerComponent,
        NzYearPickerComponent,
        NzWeekPickerComponent,
        NzRangePickerComponent]; }, imports: function () { return [CommonModule, OverlayModule, LibPackerModule, NzIconModule, NzOverlayModule, NzNoAnimationModule]; }, exports: function () { return [NzDatePickerComponent,
        NzRangePickerComponent,
        NzMonthPickerComponent,
        NzYearPickerComponent,
        NzWeekPickerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDatePickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, LibPackerModule, NzIconModule, NzOverlayModule, NzNoAnimationModule],
                exports: [
                    NzDatePickerComponent,
                    NzRangePickerComponent,
                    NzMonthPickerComponent,
                    NzYearPickerComponent,
                    NzWeekPickerComponent
                ],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci9uei1kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBc0J2RCxNQUFNLE9BQU8sa0JBQWtCOzs7Q0FDL0IsK0NBckJDLFFBQVEsU0FBQyxrQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDLGtCQUMzRyxPQUFPLEVBQUUsc0JBQ1A7Q0FBcUIsc0JBQ3JCLHNCQUFzQixzQkFDdEIsc0JBQXNCLHNCQUN0QixxQkFBcUIsc0JBQ3JCO0VBQXFCLGtCQUN0QjtJQUNELFlBQVksRUFBRTthQUNaO0dBQXFCLHNCQUNyQjtpQkFBd0I7UUFDeEIsaUJBQWlCO2dCQUNqQixxQkFBcUIsc0JBQ3JCLHNCQUFzQixzQkFDdEIscUJBQXFCLHNCQUNyQixxQkFBcUIsc0JBQ3JCLHNCQUFzQjtNQUN2QixjQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25Nb2R1bGUsIE56T3ZlcmxheU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBMaWJQYWNrZXJNb2R1bGUgfSBmcm9tICcuL2xpYi9saWItcGFja2VyLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekRhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL256LWRhdGUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56TW9udGhQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL256LW1vbnRoLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yYW5nZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpXZWVrUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uei13ZWVrLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelllYXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL256LXllYXItcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTGliUGFja2VyTW9kdWxlLCBOekljb25Nb2R1bGUsIE56T3ZlcmxheU1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTnpEYXRlUGlja2VyQ29tcG9uZW50LFxyXG4gICAgTnpSYW5nZVBpY2tlckNvbXBvbmVudCxcclxuICAgIE56TW9udGhQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOelllYXJQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOeldlZWtQaWNrZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgSGVhZGVyUGlja2VyQ29tcG9uZW50LFxyXG4gICAgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50LFxyXG4gICAgTnpQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOekRhdGVQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOek1vbnRoUGlja2VyQ29tcG9uZW50LFxyXG4gICAgTnpZZWFyUGlja2VyQ29tcG9uZW50LFxyXG4gICAgTnpXZWVrUGlja2VyQ29tcG9uZW50LFxyXG4gICAgTnpSYW5nZVBpY2tlckNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56RGF0ZVBpY2tlck1vZHVsZSB7fVxyXG4iXX0=