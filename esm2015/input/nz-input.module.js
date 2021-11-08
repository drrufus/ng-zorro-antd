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
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PlatformModule } from '@angular/cdk/platform';
import { NzAutosizeDirective } from './nz-autosize.directive';
import { NzInputGroupComponent } from './nz-input-group.component';
import { NzInputDirective } from './nz-input.directive';
import * as ɵngcc0 from '@angular/core';
export class NzInputModule {
}
NzInputModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzInputModule });
NzInputModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzInputModule_Factory(t) { return new (t || NzInputModule)(); }, imports: [[CommonModule, NzIconModule, PlatformModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzInputModule, { declarations: function () { return [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective]; }, imports: function () { return [CommonModule, NzIconModule, PlatformModule, NzAddOnModule]; }, exports: function () { return [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzInputModule, [{
        type: NgModule,
        args: [{
                declarations: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective],
                exports: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective],
                imports: [CommonModule, NzIconModule, PlatformModule, NzAddOnModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQubW9kdWxlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9pbnB1dC9uei1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFPeEQsTUFBTSxPQUFPLGFBQWE7OztDQUMxQiwwQ0FOQyxRQUFRLFNBQUMsa0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsa0JBQzVFLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFO2dCQUFxQixFQUFFLG1CQUFtQixDQUFDLGtCQUN2RSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLENBQUMsY0FDckU7Ozs7Ozs7OzBCQUNJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IE56QXV0b3NpemVEaXJlY3RpdmUgfSBmcm9tICcuL256LWF1dG9zaXplLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56SW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vbnotaW5wdXQuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTnpJbnB1dERpcmVjdGl2ZSwgTnpJbnB1dEdyb3VwQ29tcG9uZW50LCBOekF1dG9zaXplRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbTnpJbnB1dERpcmVjdGl2ZSwgTnpJbnB1dEdyb3VwQ29tcG9uZW50LCBOekF1dG9zaXplRGlyZWN0aXZlXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekljb25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBOekFkZE9uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJbnB1dE1vZHVsZSB7fVxyXG4iXX0=