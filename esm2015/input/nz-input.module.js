/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PlatformModule } from '@angular/cdk/platform';
import { NzAutosizeDirective } from './nz-autosize.directive';
import { NzInputGroupComponent } from './nz-input-group.component';
import { NzInputDirective } from './nz-input.directive';
import * as i0 from "@angular/core";
export class NzInputModule {
}
/** @nocollapse */ NzInputModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzInputModule });
/** @nocollapse */ NzInputModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzInputModule_Factory(t) { return new (t || NzInputModule)(); }, imports: [[CommonModule, NzIconModule, PlatformModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzInputModule, { declarations: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective], imports: [CommonModule, NzIconModule, PlatformModule, NzAddOnModule], exports: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzInputModule, [{
        type: NgModule,
        args: [{
                declarations: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective],
                exports: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective],
                imports: [CommonModule, NzIconModule, PlatformModule, NzAddOnModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFPeEQsTUFBTSxPQUFPLGFBQWE7O2lEQUFiLGFBQWE7eUdBQWIsYUFBYSxrQkFGZixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQzt3RkFFekQsYUFBYSxtQkFKVCxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsYUFFakUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxhQUR6RCxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUI7a0RBRzNELGFBQWE7Y0FMekIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixDQUFDO2dCQUM1RSxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsQ0FBQztnQkFDdkUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDO2FBQ3JFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IE56QXV0b3NpemVEaXJlY3RpdmUgfSBmcm9tICcuL256LWF1dG9zaXplLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56SW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vbnotaW5wdXQuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTnpJbnB1dERpcmVjdGl2ZSwgTnpJbnB1dEdyb3VwQ29tcG9uZW50LCBOekF1dG9zaXplRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbTnpJbnB1dERpcmVjdGl2ZSwgTnpJbnB1dEdyb3VwQ29tcG9uZW50LCBOekF1dG9zaXplRGlyZWN0aXZlXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekljb25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBOekFkZE9uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJbnB1dE1vZHVsZSB7fVxyXG4iXX0=