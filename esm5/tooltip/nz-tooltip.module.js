/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
// NOTE: the `t` is not uppercase in directives. Change this would however introduce breaking change.
import { NzToolTipComponent } from './nz-tooltip.component';
import { NzTooltipDirective } from './nz-tooltip.directive';
import * as i0 from "@angular/core";
var NzToolTipModule = /** @class */ (function () {
    function NzToolTipModule() {
    }
    /** @nocollapse */ NzToolTipModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzToolTipModule });
    /** @nocollapse */ NzToolTipModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzToolTipModule_Factory(t) { return new (t || NzToolTipModule)(); }, imports: [[CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule]] });
    return NzToolTipModule;
}());
export { NzToolTipModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzToolTipModule, { declarations: [NzToolTipComponent, NzTooltipDirective], imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule], exports: [NzToolTipComponent, NzTooltipDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzToolTipModule, [{
        type: NgModule,
        args: [{
                declarations: [NzToolTipComponent, NzTooltipDirective],
                exports: [NzToolTipComponent, NzTooltipDirective],
                imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule],
                entryComponents: [NzToolTipComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJuei10b29sdGlwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RixxR0FBcUc7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTVEO0lBQUE7S0FNK0I7dURBQWxCLGVBQWU7aUhBQWYsZUFBZSxrQkFIakIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLENBQUM7MEJBckI3RjtDQXdCK0IsQUFOL0IsSUFNK0I7U0FBbEIsZUFBZTt3RkFBZixlQUFlLG1CQUxYLGtCQUFrQixFQUFFLGtCQUFrQixhQUUzQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLGFBRGhGLGtCQUFrQixFQUFFLGtCQUFrQjtrREFJckMsZUFBZTtjQU4zQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7Z0JBQ3RELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO2dCQUNqRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLENBQUM7Z0JBQzNGLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbi8vIE5PVEU6IHRoZSBgdGAgaXMgbm90IHVwcGVyY2FzZSBpbiBkaXJlY3RpdmVzLiBDaGFuZ2UgdGhpcyB3b3VsZCBob3dldmVyIGludHJvZHVjZSBicmVha2luZyBjaGFuZ2UuXHJcbmltcG9ydCB7IE56VG9vbFRpcENvbXBvbmVudCB9IGZyb20gJy4vbnotdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL256LXRvb2x0aXAuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTnpUb29sVGlwQ29tcG9uZW50LCBOelRvb2x0aXBEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtOelRvb2xUaXBDb21wb25lbnQsIE56VG9vbHRpcERpcmVjdGl2ZV0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTnpBZGRPbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtOelRvb2xUaXBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRvb2xUaXBNb2R1bGUge31cclxuIl19