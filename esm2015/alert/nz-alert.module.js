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
import { NzAlertComponent } from './nz-alert.component';
import * as i0 from "@angular/core";
export class NzAlertModule {
}
/** @nocollapse */ NzAlertModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzAlertModule });
/** @nocollapse */ NzAlertModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzAlertModule_Factory(t) { return new (t || NzAlertModule)(); }, imports: [[CommonModule, NzIconModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzAlertModule, { declarations: [NzAlertComponent], imports: [CommonModule, NzIconModule, NzAddOnModule], exports: [NzAlertComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAlertModule, [{
        type: NgModule,
        args: [{
                declarations: [NzAlertComponent],
                exports: [NzAlertComponent],
                imports: [CommonModule, NzIconModule, NzAddOnModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWxlcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hbGVydC8iLCJzb3VyY2VzIjpbIm56LWFsZXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU94RCxNQUFNLE9BQU8sYUFBYTs7aURBQWIsYUFBYTt5R0FBYixhQUFhLGtCQUZmLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7d0ZBRXpDLGFBQWEsbUJBSlQsZ0JBQWdCLGFBRXJCLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxhQUR6QyxnQkFBZ0I7a0RBR2YsYUFBYTtjQUx6QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQzthQUNyRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOekFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1hbGVydC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtOekFsZXJ0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpBbGVydENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpJY29uTW9kdWxlLCBOekFkZE9uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBbGVydE1vZHVsZSB7fVxyXG4iXX0=