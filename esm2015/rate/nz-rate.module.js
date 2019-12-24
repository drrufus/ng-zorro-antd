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
export class NzRateModule {
}
/** @nocollapse */ NzRateModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzRateModule });
/** @nocollapse */ NzRateModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzRateModule_Factory(t) { return new (t || NzRateModule)(); }, imports: [[CommonModule, NzIconModule, NzToolTipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzRateModule, { declarations: [NzRateComponent, NzRateItemComponent], imports: [CommonModule, NzIconModule, NzToolTipModule], exports: [NzRateComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzRateModule, [{
        type: NgModule,
        args: [{
                exports: [NzRateComponent],
                declarations: [NzRateComponent, NzRateItemComponent],
                imports: [CommonModule, NzIconModule, NzToolTipModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3JhdGUvIiwic291cmNlcyI6WyJuei1yYXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFPdEQsTUFBTSxPQUFPLFlBQVk7O2dEQUFaLFlBQVk7dUdBQVosWUFBWSxrQkFGZCxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO3dGQUUzQyxZQUFZLG1CQUhSLGVBQWUsRUFBRSxtQkFBbUIsYUFDekMsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLGFBRjNDLGVBQWU7a0RBSWQsWUFBWTtjQUx4QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMxQixZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3BELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO2FBQ3ZEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IE56UmF0ZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LXJhdGUtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelJhdGVDb21wb25lbnQgfSBmcm9tICcuL256LXJhdGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW056UmF0ZUNvbXBvbmVudF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpSYXRlQ29tcG9uZW50LCBOelJhdGVJdGVtQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekljb25Nb2R1bGUsIE56VG9vbFRpcE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmF0ZU1vZHVsZSB7fVxyXG4iXX0=