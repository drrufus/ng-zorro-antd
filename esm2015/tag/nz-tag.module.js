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
export class NzTagModule {
}
/** @nocollapse */ NzTagModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzTagModule });
/** @nocollapse */ NzTagModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzTagModule_Factory(t) { return new (t || NzTagModule)(); }, imports: [[CommonModule, FormsModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzTagModule, { declarations: [NzTagComponent], imports: [CommonModule, FormsModule, NzIconModule], exports: [NzTagComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTagModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzIconModule],
                declarations: [NzTagComponent],
                exports: [NzTagComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFnLyIsInNvdXJjZXMiOlsibnotdGFnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFPcEQsTUFBTSxPQUFPLFdBQVc7OytDQUFYLFdBQVc7cUdBQVgsV0FBVyxrQkFKYixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO3dGQUl2QyxXQUFXLG1CQUhQLGNBQWMsYUFEbkIsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLGFBRXZDLGNBQWM7a0RBRWIsV0FBVztjQUx2QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7Z0JBQ2xELFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IE56VGFnQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWcuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56SWNvbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpUYWdDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOelRhZ0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGFnTW9kdWxlIHt9XHJcbiJdfQ==