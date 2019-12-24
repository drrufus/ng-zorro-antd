/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzRateItemComponent } from './nz-rate-item.component';
import { NzRateComponent } from './nz-rate.component';
import * as i0 from "@angular/core";
var NzRateModule = /** @class */ (function () {
    function NzRateModule() {
    }
    /** @nocollapse */ NzRateModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzRateModule });
    /** @nocollapse */ NzRateModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzRateModule_Factory(t) { return new (t || NzRateModule)(); }, imports: [[CommonModule, NzIconModule, NzToolTipModule]] });
    return NzRateModule;
}());
export { NzRateModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzRateModule, { declarations: [NzRateComponent, NzRateItemComponent], imports: [CommonModule, NzIconModule, NzToolTipModule], exports: [NzRateComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzRateModule, [{
        type: NgModule,
        args: [{
                exports: [NzRateComponent],
                declarations: [NzRateComponent, NzRateItemComponent],
                imports: [CommonModule, NzIconModule, NzToolTipModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3JhdGUvIiwic291cmNlcyI6WyJuei1yYXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdEQ7SUFBQTtLQUs0QjtvREFBZixZQUFZOzJHQUFaLFlBQVksa0JBRmQsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQzt1QkFwQnhEO0NBc0I0QixBQUw1QixJQUs0QjtTQUFmLFlBQVk7d0ZBQVosWUFBWSxtQkFIUixlQUFlLEVBQUUsbUJBQW1CLGFBQ3pDLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxhQUYzQyxlQUFlO2tEQUlkLFlBQVk7Y0FMeEIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDMUIsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDO2dCQUNwRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQzthQUN2RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XHJcblxyXG5pbXBvcnQgeyBOelJhdGVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yYXRlLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpSYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yYXRlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtOelJhdGVDb21wb25lbnRdLFxyXG4gIGRlY2xhcmF0aW9uczogW056UmF0ZUNvbXBvbmVudCwgTnpSYXRlSXRlbUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpJY29uTW9kdWxlLCBOelRvb2xUaXBNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJhdGVNb2R1bGUge31cclxuIl19