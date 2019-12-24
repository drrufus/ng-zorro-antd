/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzToCssUnitPipe } from './nz-css-unit.pipe';
import { NzTimeRangePipe } from './nz-time-range.pipe';
import * as i0 from "@angular/core";
var NzPipesModule = /** @class */ (function () {
    function NzPipesModule() {
    }
    /** @nocollapse */ NzPipesModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzPipesModule });
    /** @nocollapse */ NzPipesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzPipesModule_Factory(t) { return new (t || NzPipesModule)(); }, imports: [[CommonModule]] });
    return NzPipesModule;
}());
export { NzPipesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzPipesModule, { declarations: [NzTimeRangePipe, NzToCssUnitPipe], imports: [CommonModule], exports: [NzTimeRangePipe, NzToCssUnitPipe] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzPipesModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [NzTimeRangePipe, NzToCssUnitPipe],
                declarations: [NzTimeRangePipe, NzToCssUnitPipe]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJwaXBlL256LXBpcGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXZEO0lBQUE7S0FLNkI7cURBQWhCLGFBQWE7NkdBQWIsYUFBYSxrQkFKZixDQUFDLFlBQVksQ0FBQzt3QkFmekI7Q0FtQjZCLEFBTDdCLElBSzZCO1NBQWhCLGFBQWE7d0ZBQWIsYUFBYSxtQkFGVCxlQUFlLEVBQUUsZUFBZSxhQUZyQyxZQUFZLGFBQ1osZUFBZSxFQUFFLGVBQWU7a0RBRy9CLGFBQWE7Y0FMekIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQztnQkFDM0MsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VG9Dc3NVbml0UGlwZSB9IGZyb20gJy4vbnotY3NzLXVuaXQucGlwZSc7XHJcbmltcG9ydCB7IE56VGltZVJhbmdlUGlwZSB9IGZyb20gJy4vbnotdGltZS1yYW5nZS5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW056VGltZVJhbmdlUGlwZSwgTnpUb0Nzc1VuaXRQaXBlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOelRpbWVSYW5nZVBpcGUsIE56VG9Dc3NVbml0UGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UGlwZXNNb2R1bGUge31cclxuIl19