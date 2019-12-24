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
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAddOnModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { PlatformModule } from '@angular/cdk/platform';
import { NzContextMenuServiceModule } from './nz-context-menu.service.module';
import { NzDropDownADirective } from './nz-dropdown-a.directive';
import { NzDropdownMenuComponent } from './nz-dropdown-menu.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzDropdownServiceModule } from './nz-dropdown.service.module';
import * as i0 from "@angular/core";
export class NzDropDownModule {
}
/** @nocollapse */ NzDropDownModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzDropDownModule });
/** @nocollapse */ NzDropDownModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzDropDownModule_Factory(t) { return new (t || NzDropDownModule)(); }, imports: [[
            CommonModule,
            OverlayModule,
            FormsModule,
            NzButtonModule,
            NzMenuModule,
            NzIconModule,
            PlatformModule,
            NzNoAnimationModule,
            NzOverlayModule,
            NzDropdownServiceModule,
            NzContextMenuServiceModule,
            NzAddOnModule
        ],
        NzMenuModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzDropDownModule, { declarations: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent], imports: [CommonModule,
        OverlayModule,
        FormsModule,
        NzButtonModule,
        NzMenuModule,
        NzIconModule,
        PlatformModule,
        NzNoAnimationModule,
        NzOverlayModule,
        NzDropdownServiceModule,
        NzContextMenuServiceModule,
        NzAddOnModule], exports: [NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDropDownModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    FormsModule,
                    NzButtonModule,
                    NzMenuModule,
                    NzIconModule,
                    PlatformModule,
                    NzNoAnimationModule,
                    NzOverlayModule,
                    NzDropdownServiceModule,
                    NzContextMenuServiceModule,
                    NzAddOnModule
                ],
                entryComponents: [NzDropdownMenuComponent],
                declarations: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent],
                exports: [NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQXFCdkUsTUFBTSxPQUFPLGdCQUFnQjs7b0RBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGtCQWxCbEI7WUFDUCxZQUFZO1lBQ1osYUFBYTtZQUNiLFdBQVc7WUFDWCxjQUFjO1lBQ2QsWUFBWTtZQUNaLFlBQVk7WUFDWixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZix1QkFBdUI7WUFDdkIsMEJBQTBCO1lBQzFCLGFBQWE7U0FDZDtRQUdTLFlBQVk7d0ZBRVgsZ0JBQWdCLG1CQUhaLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixhQWQvRSxZQUFZO1FBQ1osYUFBYTtRQUNiLFdBQVc7UUFDWCxjQUFjO1FBQ2QsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsMEJBQTBCO1FBQzFCLGFBQWEsYUFJTCxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCO2tEQUUvRSxnQkFBZ0I7Y0FuQjVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsdUJBQXVCO29CQUN2QiwwQkFBMEI7b0JBQzFCLGFBQWE7aUJBQ2Q7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQzFDLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixDQUFDO2dCQUNsRixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLENBQUM7YUFDNUYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56T3ZlcmxheU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IE56TWVudU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudSc7XHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IE56Q29udGV4dE1lbnVTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1jb250ZXh0LW1lbnUuc2VydmljZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duQURpcmVjdGl2ZSB9IGZyb20gJy4vbnotZHJvcGRvd24tYS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOekRyb3Bkb3duU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotZHJvcGRvd24uc2VydmljZS5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBOekJ1dHRvbk1vZHVsZSxcclxuICAgIE56TWVudU1vZHVsZSxcclxuICAgIE56SWNvbk1vZHVsZSxcclxuICAgIFBsYXRmb3JtTW9kdWxlLFxyXG4gICAgTnpOb0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIE56T3ZlcmxheU1vZHVsZSxcclxuICAgIE56RHJvcGRvd25TZXJ2aWNlTW9kdWxlLFxyXG4gICAgTnpDb250ZXh0TWVudVNlcnZpY2VNb2R1bGUsXHJcbiAgICBOekFkZE9uTW9kdWxlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtOekRyb3Bkb3duTWVudUNvbXBvbmVudF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpEcm9wRG93bkRpcmVjdGl2ZSwgTnpEcm9wRG93bkFEaXJlY3RpdmUsIE56RHJvcGRvd25NZW51Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpNZW51TW9kdWxlLCBOekRyb3BEb3duRGlyZWN0aXZlLCBOekRyb3BEb3duQURpcmVjdGl2ZSwgTnpEcm9wZG93bk1lbnVDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRyb3BEb3duTW9kdWxlIHt9XHJcbiJdfQ==