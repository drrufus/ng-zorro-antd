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
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagComponent } from './nz-tag.component';
import * as i0 from "@angular/core";
var NzTagModule = /** @class */ (function () {
    function NzTagModule() {
    }
    /** @nocollapse */ NzTagModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzTagModule });
    /** @nocollapse */ NzTagModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzTagModule_Factory(t) { return new (t || NzTagModule)(); }, imports: [[CommonModule, FormsModule, NzIconModule]] });
    return NzTagModule;
}());
export { NzTagModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzTagModule, { declarations: [NzTagComponent], imports: [CommonModule, FormsModule, NzIconModule], exports: [NzTagComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTagModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzIconModule],
                declarations: [NzTagComponent],
                exports: [NzTagComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFnLyIsInNvdXJjZXMiOlsibnotdGFnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFcEQ7SUFBQTtLQUsyQjttREFBZCxXQUFXO3lHQUFYLFdBQVcsa0JBSmIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztzQkFoQnBEO0NBb0IyQixBQUwzQixJQUsyQjtTQUFkLFdBQVc7d0ZBQVgsV0FBVyxtQkFIUCxjQUFjLGFBRG5CLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxhQUV2QyxjQUFjO2tEQUViLFdBQVc7Y0FMdkIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO2dCQUNsRCxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOelRhZ0NvbXBvbmVudCB9IGZyb20gJy4vbnotdGFnLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOekljb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW056VGFnQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpUYWdDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhZ01vZHVsZSB7fVxyXG4iXX0=