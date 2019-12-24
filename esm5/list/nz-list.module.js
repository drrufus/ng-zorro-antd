/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
import { NzListItemComponent } from './nz-list-item.component';
import { NzListComponent } from './nz-list.component';
import * as i0 from "@angular/core";
var NzListModule = /** @class */ (function () {
    function NzListModule() {
    }
    /** @nocollapse */ NzListModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzListModule });
    /** @nocollapse */ NzListModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzListModule_Factory(t) { return new (t || NzListModule)(); }, imports: [[CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzAddOnModule, NzEmptyModule]] });
    return NzListModule;
}());
export { NzListModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzListModule, { declarations: [NzListComponent, NzListItemComponent, NzListItemMetaComponent], imports: [CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzAddOnModule, NzEmptyModule], exports: [NzListComponent, NzListItemComponent, NzListItemMetaComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzListModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzAddOnModule, NzEmptyModule],
                declarations: [NzListComponent, NzListItemComponent, NzListItemMetaComponent],
                exports: [NzListComponent, NzListItemComponent, NzListItemMetaComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2xpc3QvIiwic291cmNlcyI6WyJuei1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdEQ7SUFBQTtLQUs0QjtvREFBZixZQUFZOzJHQUFaLFlBQVksa0JBSmQsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQzt1QkF0Qm5HO0NBMEI0QixBQUw1QixJQUs0QjtTQUFmLFlBQVk7d0ZBQVosWUFBWSxtQkFIUixlQUFlLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLGFBRGxFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsYUFBYSxhQUV0RixlQUFlLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCO2tEQUU1RCxZQUFZO2NBTHhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztnQkFDakcsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDO2dCQUM3RSxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUM7YUFDekUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekF2YXRhck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYXZhdGFyJztcclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56RW1wdHlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2VtcHR5JztcclxuaW1wb3J0IHsgTnpHcmlkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ncmlkJztcclxuaW1wb3J0IHsgTnpTcGluTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zcGluJztcclxuXHJcbmltcG9ydCB7IE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50IH0gZnJvbSAnLi9uei1saXN0LWl0ZW0tbWV0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1saXN0LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56U3Bpbk1vZHVsZSwgTnpHcmlkTW9kdWxlLCBOekF2YXRhck1vZHVsZSwgTnpBZGRPbk1vZHVsZSwgTnpFbXB0eU1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpMaXN0Q29tcG9uZW50LCBOekxpc3RJdGVtQ29tcG9uZW50LCBOekxpc3RJdGVtTWV0YUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW056TGlzdENvbXBvbmVudCwgTnpMaXN0SXRlbUNvbXBvbmVudCwgTnpMaXN0SXRlbU1ldGFDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekxpc3RNb2R1bGUge31cclxuIl19