/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule, NzHighlightModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTreeNodeComponent } from './nz-tree-node.component';
import { NzTreeComponent } from './nz-tree.component';
import * as i0 from "@angular/core";
var NzTreeModule = /** @class */ (function () {
    function NzTreeModule() {
    }
    /** @nocollapse */ NzTreeModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzTreeModule });
    /** @nocollapse */ NzTreeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzTreeModule_Factory(t) { return new (t || NzTreeModule)(); }, imports: [[CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule, NzHighlightModule]] });
    return NzTreeModule;
}());
export { NzTreeModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzTreeModule, { declarations: [NzTreeComponent, NzTreeNodeComponent], imports: [CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule, NzHighlightModule], exports: [NzTreeComponent, NzTreeNodeComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTreeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule, NzHighlightModule],
                declarations: [NzTreeComponent, NzTreeNodeComponent],
                exports: [NzTreeComponent, NzTreeNodeComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyZWUvIiwic291cmNlcyI6WyJuei10cmVlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdEQ7SUFBQTtLQUs0QjtvREFBZixZQUFZOzJHQUFaLFlBQVksa0JBSmQsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQzt1QkFsQjlGO0NBc0I0QixBQUw1QixJQUs0QjtTQUFmLFlBQVk7d0ZBQVosWUFBWSxtQkFIUixlQUFlLEVBQUUsbUJBQW1CLGFBRHpDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixhQUVqRixlQUFlLEVBQUUsbUJBQW1CO2tEQUVuQyxZQUFZO2NBTHhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQztnQkFDNUYsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDO2dCQUNwRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlLCBOekhpZ2hsaWdodE1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOelRyZWVOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10cmVlLW5vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10cmVlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56QWRkT25Nb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpIaWdobGlnaHRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW056VHJlZUNvbXBvbmVudCwgTnpUcmVlTm9kZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW056VHJlZUNvbXBvbmVudCwgTnpUcmVlTm9kZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VHJlZU1vZHVsZSB7fVxyXG4iXX0=