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
var NzGridModule = /** @class */ (function () {
    function NzGridModule() {
    }
    /** @nocollapse */ NzGridModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzGridModule });
    /** @nocollapse */ NzGridModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzGridModule_Factory(t) { return new (t || NzGridModule)(); }, imports: [[CommonModule, LayoutModule, PlatformModule]] });
    return NzGridModule;
}());
export { NzGridModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzGridModule, { declarations: [NzColDirective, NzRowDirective], imports: [CommonModule, LayoutModule, PlatformModule], exports: [NzColDirective, NzRowDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzGridModule, [{
        type: NgModule,
        args: [{
                declarations: [NzColDirective, NzRowDirective],
                exports: [NzColDirective, NzRowDirective],
                imports: [CommonModule, LayoutModule, PlatformModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2dyaWQvIiwic291cmNlcyI6WyJuei1ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXBEO0lBQUE7S0FLNEI7b0RBQWYsWUFBWTsyR0FBWixZQUFZLGtCQUZkLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7dUJBbkJ2RDtDQXFCNEIsQUFMNUIsSUFLNEI7U0FBZixZQUFZO3dGQUFaLFlBQVksbUJBSlIsY0FBYyxFQUFFLGNBQWMsYUFFbkMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLGFBRDFDLGNBQWMsRUFBRSxjQUFjO2tEQUc3QixZQUFZO2NBTHhCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDO2dCQUM5QyxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQzthQUN0RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q29sRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jb2wuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuL256LXJvdy5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtOekNvbERpcmVjdGl2ZSwgTnpSb3dEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtOekNvbERpcmVjdGl2ZSwgTnpSb3dEaXJlY3RpdmVdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIExheW91dE1vZHVsZSwgUGxhdGZvcm1Nb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekdyaWRNb2R1bGUge31cclxuIl19