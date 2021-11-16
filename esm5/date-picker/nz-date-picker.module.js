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
var NzDatePickerModule = /** @class */ (function () {
    function NzDatePickerModule() {
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
    }], function () { return []; }, null); })();
    return NzDatePickerModule;
}());
export { NzDatePickerModule };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci9uei1kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXZEO0lBQUE7SUFvQmlDLENBQUM7c0RBcEJqQyxRQUFRLFNBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDLHNCQUMzRyxPQUFPLEVBQUUsMEJBQ1AscUJBQXFCLDBCQUNyQixzQkFBc0I7WUFDdEIsc0JBQXNCLDBCQUN0QixxQkFBcUIsMEJBQ3JCLHFCQUFxQixzQkFDdEIsc0JBQ0Q7V0FBWSxFQUFFO0tBQ1oscUJBQXFCO3lCQUNyQjtrQkFBd0I7WUFDeEIsaUJBQWlCO3dCQUNqQjtjQUFxQiwwQkFDckIsc0JBQXNCLDBCQUN0QixxQkFBcUIsMEJBQ3JCLHFCQUFxQiwwQkFDckIsc0JBQXNCO0dBQ3ZCLGtCQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFDUTtJQUF3Qix5QkFBQztDQUFBLEFBcEJsQyxJQW9Ca0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IExpYlBhY2tlck1vZHVsZSB9IGZyb20gJy4vbGliL2xpYi1wYWNrZXIubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVhZGVyUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXItcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56RGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbnotZGF0ZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNb250aFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbnotbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56UmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL256LXJhbmdlLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOeldlZWtQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL256LXdlZWstcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56WWVhclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbnoteWVhci1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBMaWJQYWNrZXJNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOekRhdGVQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOelJhbmdlUGlja2VyQ29tcG9uZW50LFxyXG4gICAgTnpNb250aFBpY2tlckNvbXBvbmVudCxcclxuICAgIE56WWVhclBpY2tlckNvbXBvbmVudCxcclxuICAgIE56V2Vla1BpY2tlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBIZWFkZXJQaWNrZXJDb21wb25lbnQsXHJcbiAgICBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOelBpY2tlckNvbXBvbmVudCxcclxuICAgIE56RGF0ZVBpY2tlckNvbXBvbmVudCxcclxuICAgIE56TW9udGhQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOelllYXJQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOeldlZWtQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOelJhbmdlUGlja2VyQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEYXRlUGlja2VyTW9kdWxlIHt9XHJcbiJdfQ==