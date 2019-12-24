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
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPaginationComponent } from './nz-pagination.component';
import * as i0 from "@angular/core";
export class NzPaginationModule {
}
/** @nocollapse */ NzPaginationModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzPaginationModule });
/** @nocollapse */ NzPaginationModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzPaginationModule_Factory(t) { return new (t || NzPaginationModule)(); }, imports: [[CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzPaginationModule, { declarations: [NzPaginationComponent], imports: [CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule], exports: [NzPaginationComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzPaginationModule, [{
        type: NgModule,
        args: [{
                declarations: [NzPaginationComponent],
                exports: [NzPaginationComponent],
                imports: [CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJuei1wYWdpbmF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBT2xFLE1BQU0sT0FBTyxrQkFBa0I7O3NEQUFsQixrQkFBa0I7bUhBQWxCLGtCQUFrQixrQkFGcEIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDO3dGQUVyRSxrQkFBa0IsbUJBSmQscUJBQXFCLGFBRTFCLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxZQUFZLGFBRHJFLHFCQUFxQjtrREFHcEIsa0JBQWtCO2NBTDlCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7YUFDakYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuaW1wb3J0IHsgTnpTZWxlY3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XHJcblxyXG5pbXBvcnQgeyBOelBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL256LXBhZ2luYXRpb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTnpQYWdpbmF0aW9uQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpQYWdpbmF0aW9uQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpTZWxlY3RNb2R1bGUsIE56STE4bk1vZHVsZSwgTnpJY29uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQYWdpbmF0aW9uTW9kdWxlIHt9XHJcbiJdfQ==