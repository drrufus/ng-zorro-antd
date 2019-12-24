/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzRadioButtonComponent } from './nz-radio-button.component';
import { NzRadioGroupComponent } from './nz-radio-group.component';
import { NzRadioComponent } from './nz-radio.component';
import * as i0 from "@angular/core";
export class NzRadioModule {
}
/** @nocollapse */ NzRadioModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzRadioModule });
/** @nocollapse */ NzRadioModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzRadioModule_Factory(t) { return new (t || NzRadioModule)(); }, imports: [[CommonModule, FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzRadioModule, { declarations: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent], imports: [CommonModule, FormsModule], exports: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzRadioModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule],
                exports: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent],
                declarations: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9yYWRpby8iLCJzb3VyY2VzIjpbIm56LXJhZGlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBT3hELE1BQU0sT0FBTyxhQUFhOztpREFBYixhQUFhO3lHQUFiLGFBQWEsa0JBSmYsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO3dGQUl6QixhQUFhLG1CQUZULGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixhQUZwRSxZQUFZLEVBQUUsV0FBVyxhQUN6QixnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUI7a0RBRzlELGFBQWE7Y0FMekIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixDQUFDO2dCQUMxRSxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsQ0FBQzthQUNoRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOelJhZGlvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yYWRpby1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpSYWRpb0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yYWRpby1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yYWRpby5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgZXhwb3J0czogW056UmFkaW9Db21wb25lbnQsIE56UmFkaW9CdXR0b25Db21wb25lbnQsIE56UmFkaW9Hcm91cENvbXBvbmVudF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpSYWRpb0NvbXBvbmVudCwgTnpSYWRpb0J1dHRvbkNvbXBvbmVudCwgTnpSYWRpb0dyb3VwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSYWRpb01vZHVsZSB7fVxyXG4iXX0=