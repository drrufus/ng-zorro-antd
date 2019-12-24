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
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopoverComponent } from './nz-popover.component';
import { NzPopoverDirective } from './nz-popover.directive';
import * as i0 from "@angular/core";
export class NzPopoverModule {
}
/** @nocollapse */ NzPopoverModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzPopoverModule });
/** @nocollapse */ NzPopoverModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzPopoverModule_Factory(t) { return new (t || NzPopoverModule)(); }, imports: [[CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzPopoverModule, { declarations: [NzPopoverDirective, NzPopoverComponent], imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule], exports: [NzPopoverDirective, NzPopoverComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzPopoverModule, [{
        type: NgModule,
        args: [{
                entryComponents: [NzPopoverComponent],
                exports: [NzPopoverDirective, NzPopoverComponent],
                declarations: [NzPopoverDirective, NzPopoverComponent],
                imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBUTVELE1BQU0sT0FBTyxlQUFlOzttREFBZixlQUFlOzZHQUFmLGVBQWUsa0JBRmpCLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQzt3RkFFakcsZUFBZSxtQkFIWCxrQkFBa0IsRUFBRSxrQkFBa0IsYUFDM0MsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsYUFGakcsa0JBQWtCLEVBQUUsa0JBQWtCO2tEQUlyQyxlQUFlO2NBTjNCLFFBQVE7ZUFBQztnQkFDUixlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7Z0JBQ2pELFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO2dCQUN0RCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO2FBQzdHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IE56UG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vbnotcG9wb3Zlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LXBvcG92ZXIuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZW50cnlDb21wb25lbnRzOiBbTnpQb3BvdmVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpQb3BvdmVyRGlyZWN0aXZlLCBOelBvcG92ZXJDb21wb25lbnRdLFxyXG4gIGRlY2xhcmF0aW9uczogW056UG9wb3ZlckRpcmVjdGl2ZSwgTnpQb3BvdmVyQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOek92ZXJsYXlNb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56VG9vbFRpcE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UG9wb3Zlck1vZHVsZSB7fVxyXG4iXX0=