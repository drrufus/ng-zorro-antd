/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxGroupComponent } from './nz-checkbox-group.component';
import { NzCheckboxWrapperComponent } from './nz-checkbox-wrapper.component';
import { NzCheckboxComponent } from './nz-checkbox.component';
import * as i0 from "@angular/core";
var NzCheckboxModule = /** @class */ (function () {
    function NzCheckboxModule() {
    }
    /** @nocollapse */ NzCheckboxModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzCheckboxModule });
    /** @nocollapse */ NzCheckboxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzCheckboxModule_Factory(t) { return new (t || NzCheckboxModule)(); }, imports: [[CommonModule, FormsModule, ObserversModule]] });
    return NzCheckboxModule;
}());
export { NzCheckboxModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzCheckboxModule, { declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent], imports: [CommonModule, FormsModule, ObserversModule], exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, ObserversModule],
                declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
                exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jaGVja2JveC8iLCJzb3VyY2VzIjpbIm56LWNoZWNrYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUU5RDtJQUFBO0tBS2dDO3dEQUFuQixnQkFBZ0I7bUhBQWhCLGdCQUFnQixrQkFKbEIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQzsyQkFsQnZEO0NBc0JnQyxBQUxoQyxJQUtnQztTQUFuQixnQkFBZ0I7d0ZBQWhCLGdCQUFnQixtQkFIWixtQkFBbUIsRUFBRSx3QkFBd0IsRUFBRSwwQkFBMEIsYUFEOUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxlQUFlLGFBRTFDLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLDBCQUEwQjtrREFFeEUsZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQztnQkFDckQsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQUUsMEJBQTBCLENBQUM7Z0JBQ3pGLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLDBCQUEwQixDQUFDO2FBQ3JGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOekNoZWNrYm94R3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL256LWNoZWNrYm94LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBPYnNlcnZlcnNNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW056Q2hlY2tib3hDb21wb25lbnQsIE56Q2hlY2tib3hHcm91cENvbXBvbmVudCwgTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOekNoZWNrYm94Q29tcG9uZW50LCBOekNoZWNrYm94R3JvdXBDb21wb25lbnQsIE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDaGVja2JveE1vZHVsZSB7fVxyXG4iXX0=