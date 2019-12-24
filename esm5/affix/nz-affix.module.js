/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SCROLL_SERVICE_PROVIDER } from 'ng-zorro-antd/core';
import { NzAffixComponent } from './nz-affix.component';
import * as i0 from "@angular/core";
var NzAffixModule = /** @class */ (function () {
    function NzAffixModule() {
    }
    /** @nocollapse */ NzAffixModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzAffixModule });
    /** @nocollapse */ NzAffixModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzAffixModule_Factory(t) { return new (t || NzAffixModule)(); }, providers: [SCROLL_SERVICE_PROVIDER], imports: [[CommonModule, PlatformModule]] });
    return NzAffixModule;
}());
export { NzAffixModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzAffixModule, { declarations: [NzAffixComponent], imports: [CommonModule, PlatformModule], exports: [NzAffixComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAffixModule, [{
        type: NgModule,
        args: [{
                declarations: [NzAffixComponent],
                exports: [NzAffixComponent],
                imports: [CommonModule, PlatformModule],
                providers: [SCROLL_SERVICE_PROVIDER]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hZmZpeC8iLCJzb3VyY2VzIjpbIm56LWFmZml4Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXhEO0lBQUE7S0FNNkI7cURBQWhCLGFBQWE7NkdBQWIsYUFBYSxtQkFGYixDQUFDLHVCQUF1QixDQUFDLFlBRDNCLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQzt3QkFqQnpDO0NBb0I2QixBQU43QixJQU02QjtTQUFoQixhQUFhO3dGQUFiLGFBQWEsbUJBTFQsZ0JBQWdCLGFBRXJCLFlBQVksRUFBRSxjQUFjLGFBRDVCLGdCQUFnQjtrREFJZixhQUFhO2NBTnpCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDaEMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzNCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU0NST0xMX1NFUlZJQ0VfUFJPVklERVIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBZmZpeENvbXBvbmVudCB9IGZyb20gJy4vbnotYWZmaXguY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTnpBZmZpeENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW056QWZmaXhDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtTQ1JPTExfU0VSVklDRV9QUk9WSURFUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QWZmaXhNb2R1bGUge31cclxuIl19