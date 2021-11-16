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
import { NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
const antDesignIcons = (/** @type {?} */ (AllIcons));
const ɵ0 = /**
 * @param {?} key
 * @return {?}
 */
key => {
    /** @type {?} */
    const i = antDesignIcons[key];
    return i;
};
/** @type {?} */
const icons = Object.keys(antDesignIcons).map((ɵ0));
const ɵ1 = icons;
/**
 * Include this module in every testing spec, except `nz-icon.spec.ts`.
 */
// @dynamic
export class NzIconTestModule {
}
NzIconTestModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzIconTestModule });
NzIconTestModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzIconTestModule_Factory(t) { return new (t || NzIconTestModule)(); }, providers: [
        {
            provide: NZ_ICONS,
            useValue: ɵ1
        }
    ], imports: [NzIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzIconTestModule, { exports: function () { return [NzIconModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzIconTestModule, [{
        type: NgModule,
        args: [{
                exports: [NzIconModule],
                providers: [
                    {
                        provide: NZ_ICONS,
                        useValue: ɵ1
                    }
                ]
            }]
    }], null, null); })();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi10ZXN0Lm1vZHVsZS5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvaWNvbi90ZXN0aW5nL256LWljb24tdGVzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sS0FBSyxRQUFRLE1BQU0saUNBQWlDLENBQUM7QUFFNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBRTVDLE1BQVYsY0FBYyxHQUFHLG1CQUFBLFFBQVEsRUFFOUI7Ozs7O0FBRStELEdBQUcsQ0FBQyxFQUFFOztVQUM5RCxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztJQUM3QixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7O01BSEssS0FBSyxHQUFxQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsTUFHN0Q7V0FXYyxLQUFLOzs7OztBQUlyQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7OztDQUM3QjtXQVZDLFFBQVEsU0FBQyxrQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLFNBQVMsRUFBRSxzQkFDVCwwQkFDRSxPQUFPLEVBQUUsUUFBUTttQkFDakIsUUFBUSxJQUFPLHNCQUNoQixrQkFDRjtVQUNGOzs7Ozs7Ozs7OzBCQUNJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xyXG5pbXBvcnQgKiBhcyBBbGxJY29ucyBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zJztcclxuXHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSwgTlpfSUNPTlMgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5cclxuY29uc3QgYW50RGVzaWduSWNvbnMgPSBBbGxJY29ucyBhcyB7XHJcbiAgW2tleTogc3RyaW5nXTogSWNvbkRlZmluaXRpb247XHJcbn07XHJcblxyXG5jb25zdCBpY29uczogSWNvbkRlZmluaXRpb25bXSA9IE9iamVjdC5rZXlzKGFudERlc2lnbkljb25zKS5tYXAoa2V5ID0+IHtcclxuICBjb25zdCBpID0gYW50RGVzaWduSWNvbnNba2V5XTtcclxuICByZXR1cm4gaTtcclxufSk7XHJcblxyXG4vKipcclxuICogSW5jbHVkZSB0aGlzIG1vZHVsZSBpbiBldmVyeSB0ZXN0aW5nIHNwZWMsIGV4Y2VwdCBgbnotaWNvbi5zcGVjLnRzYC5cclxuICovXHJcbi8vIEBkeW5hbWljXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW056SWNvbk1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5aX0lDT05TLFxyXG4gICAgICB1c2VWYWx1ZTogaWNvbnNcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekljb25UZXN0TW9kdWxlIHt9XHJcbiJdfQ==