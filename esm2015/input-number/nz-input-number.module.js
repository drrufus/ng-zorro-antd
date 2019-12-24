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
import { NzInputNumberComponent } from './nz-input-number.component';
import * as i0 from "@angular/core";
export class NzInputNumberModule {
}
/** @nocollapse */ NzInputNumberModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzInputNumberModule });
/** @nocollapse */ NzInputNumberModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzInputNumberModule_Factory(t) { return new (t || NzInputNumberModule)(); }, imports: [[CommonModule, FormsModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzInputNumberModule, { declarations: [NzInputNumberComponent], imports: [CommonModule, FormsModule, NzIconModule], exports: [NzInputNumberComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzInputNumberModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzIconModule],
                declarations: [NzInputNumberComponent],
                exports: [NzInputNumberComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtbnVtYmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaW5wdXQtbnVtYmVyLyIsInNvdXJjZXMiOlsibnotaW5wdXQtbnVtYmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQU9yRSxNQUFNLE9BQU8sbUJBQW1COzt1REFBbkIsbUJBQW1CO3FIQUFuQixtQkFBbUIsa0JBSnJCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7d0ZBSXZDLG1CQUFtQixtQkFIZixzQkFBc0IsYUFEM0IsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLGFBRXZDLHNCQUFzQjtrREFFckIsbUJBQW1CO2NBTC9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztnQkFDbEQsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOeklucHV0TnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1pbnB1dC1udW1iZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56SWNvbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpJbnB1dE51bWJlckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW056SW5wdXROdW1iZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOeklucHV0TnVtYmVyTW9kdWxlIHt9XHJcbiJdfQ==