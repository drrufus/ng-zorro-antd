/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { LayoutModule } from '@angular/cdk/layout';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzColDirective } from './nz-col.directive';
import { NzRowDirective } from './nz-row.directive';
import * as i0 from "@angular/core";
export class NzGridModule {
}
/** @nocollapse */ NzGridModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzGridModule });
/** @nocollapse */ NzGridModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzGridModule_Factory(t) { return new (t || NzGridModule)(); }, imports: [[CommonModule, LayoutModule, PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzGridModule, { declarations: [NzColDirective, NzRowDirective], imports: [CommonModule, LayoutModule, PlatformModule], exports: [NzColDirective, NzRowDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzGridModule, [{
        type: NgModule,
        args: [{
                declarations: [NzColDirective, NzRowDirective],
                exports: [NzColDirective, NzRowDirective],
                imports: [CommonModule, LayoutModule, PlatformModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2dyaWQvIiwic291cmNlcyI6WyJuei1ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBT3BELE1BQU0sT0FBTyxZQUFZOztnREFBWixZQUFZO3VHQUFaLFlBQVksa0JBRmQsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQzt3RkFFMUMsWUFBWSxtQkFKUixjQUFjLEVBQUUsY0FBYyxhQUVuQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsYUFEMUMsY0FBYyxFQUFFLGNBQWM7a0RBRzdCLFlBQVk7Y0FMeEIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7Z0JBQzlDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO2FBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDb2xEaXJlY3RpdmUgfSBmcm9tICcuL256LWNvbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vbnotcm93LmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW056Q29sRGlyZWN0aXZlLCBOelJvd0RpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW056Q29sRGlyZWN0aXZlLCBOelJvd0RpcmVjdGl2ZV0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTGF5b3V0TW9kdWxlLCBQbGF0Zm9ybU1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56R3JpZE1vZHVsZSB7fVxyXG4iXX0=