/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule, NzWaveModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchComponent } from './nz-switch.component';
import * as i0 from "@angular/core";
var NzSwitchModule = /** @class */ (function () {
    function NzSwitchModule() {
    }
    /** @nocollapse */ NzSwitchModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzSwitchModule });
    /** @nocollapse */ NzSwitchModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzSwitchModule_Factory(t) { return new (t || NzSwitchModule)(); }, imports: [[CommonModule, NzWaveModule, NzIconModule, NzAddOnModule]] });
    return NzSwitchModule;
}());
export { NzSwitchModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzSwitchModule, { declarations: [NzSwitchComponent], imports: [CommonModule, NzWaveModule, NzIconModule, NzAddOnModule], exports: [NzSwitchComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSwitchModule, [{
        type: NgModule,
        args: [{
                exports: [NzSwitchComponent],
                declarations: [NzSwitchComponent],
                imports: [CommonModule, NzWaveModule, NzIconModule, NzAddOnModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3dpdGNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3dpdGNoLyIsInNvdXJjZXMiOlsibnotc3dpdGNoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFMUQ7SUFBQTtLQUs4QjtzREFBakIsY0FBYzsrR0FBZCxjQUFjLGtCQUZoQixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQzt5QkFuQnBFO0NBcUI4QixBQUw5QixJQUs4QjtTQUFqQixjQUFjO3dGQUFkLGNBQWMsbUJBSFYsaUJBQWlCLGFBQ3RCLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsYUFGdkQsaUJBQWlCO2tEQUloQixjQUFjO2NBTDFCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQzthQUNuRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56V2F2ZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOelN3aXRjaENvbXBvbmVudCB9IGZyb20gJy4vbnotc3dpdGNoLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtOelN3aXRjaENvbXBvbmVudF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpTd2l0Y2hDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56V2F2ZU1vZHVsZSwgTnpJY29uTW9kdWxlLCBOekFkZE9uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTd2l0Y2hNb2R1bGUge31cclxuIl19