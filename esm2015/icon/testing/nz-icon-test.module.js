/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import * as i0 from "@angular/core";
const antDesignIcons = AllIcons;
const icons = Object.keys(antDesignIcons).map(key => {
    const i = antDesignIcons[key];
    return i;
});
/**
 * Include this module in every testing spec, except `nz-icon.spec.ts`.
 */
// @dynamic
export class NzIconTestModule {
}
/** @nocollapse */ NzIconTestModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzIconTestModule });
/** @nocollapse */ NzIconTestModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzIconTestModule_Factory(t) { return new (t || NzIconTestModule)(); }, providers: [
        {
            provide: NZ_ICONS,
            useValue: icons
        }
    ], imports: [NzIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzIconTestModule, { exports: [NzIconModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzIconTestModule, [{
        type: NgModule,
        args: [{
                exports: [NzIconModule],
                providers: [
                    {
                        provide: NZ_ICONS,
                        useValue: icons
                    }
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi10ZXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaWNvbi90ZXN0aW5nLyIsInNvdXJjZXMiOlsibnotaWNvbi10ZXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sS0FBSyxRQUFRLE1BQU0saUNBQWlDLENBQUM7QUFFNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFNUQsTUFBTSxjQUFjLEdBQUcsUUFFdEIsQ0FBQztBQUVGLE1BQU0sS0FBSyxHQUFxQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNwRSxNQUFNLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsV0FBVztBQVVYLE1BQU0sT0FBTyxnQkFBZ0I7O29EQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixtQkFQaEI7UUFDVDtZQUNFLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCO0tBQ0YsWUFOUyxZQUFZO3dGQVFYLGdCQUFnQixjQVJqQixZQUFZO2tEQVFYLGdCQUFnQjtjQVQ1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLFFBQVE7d0JBQ2pCLFFBQVEsRUFBRSxLQUFLO3FCQUNoQjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xyXG5pbXBvcnQgKiBhcyBBbGxJY29ucyBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zJztcclxuXHJcbmltcG9ydCB7IE5aX0lDT05TLCBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5cclxuY29uc3QgYW50RGVzaWduSWNvbnMgPSBBbGxJY29ucyBhcyB7XHJcbiAgW2tleTogc3RyaW5nXTogSWNvbkRlZmluaXRpb247XHJcbn07XHJcblxyXG5jb25zdCBpY29uczogSWNvbkRlZmluaXRpb25bXSA9IE9iamVjdC5rZXlzKGFudERlc2lnbkljb25zKS5tYXAoa2V5ID0+IHtcclxuICBjb25zdCBpID0gYW50RGVzaWduSWNvbnNba2V5XTtcclxuICByZXR1cm4gaTtcclxufSk7XHJcblxyXG4vKipcclxuICogSW5jbHVkZSB0aGlzIG1vZHVsZSBpbiBldmVyeSB0ZXN0aW5nIHNwZWMsIGV4Y2VwdCBgbnotaWNvbi5zcGVjLnRzYC5cclxuICovXHJcbi8vIEBkeW5hbWljXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW056SWNvbk1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5aX0lDT05TLFxyXG4gICAgICB1c2VWYWx1ZTogaWNvbnNcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekljb25UZXN0TW9kdWxlIHt9XHJcbiJdfQ==