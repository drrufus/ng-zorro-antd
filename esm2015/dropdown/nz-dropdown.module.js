/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { NzDropDownButtonComponent } from './nz-dropdown-button.component';
import { NzDropdownContextComponent } from './nz-dropdown-context.component';
import { NzDropdownMenuComponent } from './nz-dropdown-menu.component';
import { NzDropDownComponent } from './nz-dropdown.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzDropdownServiceModule } from './nz-dropdown.service.module';
import * as ɵngcc0 from '@angular/core';
export class NzDropDownModule {
}
NzDropDownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDropDownModule });
NzDropDownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDropDownModule_Factory(t) { return new (t || NzDropDownModule)(); }, imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzDropDownModule, { declarations: function () { return [NzDropDownComponent,
        NzDropDownButtonComponent,
        NzDropDownDirective,
        NzDropDownADirective,
        NzDropdownContextComponent,
        NzDropdownMenuComponent]; }, imports: function () { return [CommonModule,
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
        NzAddOnModule]; }, exports: function () { return [NzMenuModule,
        NzDropDownComponent,
        NzDropDownButtonComponent,
        NzDropDownDirective,
        NzDropDownADirective,
        NzDropdownMenuComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDropDownModule, [{
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
                entryComponents: [NzDropdownContextComponent, NzDropdownMenuComponent],
                declarations: [
                    NzDropDownComponent,
                    NzDropDownButtonComponent,
                    NzDropDownDirective,
                    NzDropDownADirective,
                    NzDropdownContextComponent,
                    NzDropdownMenuComponent
                ],
                exports: [
                    NzMenuModule,
                    NzDropDownComponent,
                    NzDropDownButtonComponent,
                    NzDropDownDirective,
                    NzDropDownADirective,
                    NzDropdownMenuComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9kcm9wZG93bi9uei1kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQW1DdkUsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDN0I7b0JBbENDLFFBQVEsU0FBQyxrQkFDUixPQUFPLEVBQUUsc0JBQ1AsWUFBWSxzQkFDWixhQUFhLHNCQUNiLFdBQVc7bUJBQ1gsY0FBYztvQkFDZDtHQUFZLHNCQUNaO09BQVksc0JBQ1o7T0FBYyxzQkFDZCxtQkFBbUIsc0JBQ25CO0dBQWU7RUFDZjtJQUF1QjtFQUN2QjtNQUEwQjtNQUMxQixhQUFhO2FBQ2Q7RUFDRCxlQUFlLEVBQUUsQ0FBQztxQkFBMEIsRUFBRTthQUF1QixDQUFDLGtCQUN0RTtRQUFZLEVBQUUsc0JBQ1osbUJBQW1CO0NBQ25CLHlCQUF5QjttQkFDekI7R0FBbUIsc0JBQ25CO2dCQUFvQjtRQUNwQiwwQkFBMEI7VUFDMUIsdUJBQXVCLGtCQUN4QixrQkFDRDtDQUFPLEVBQUU7Q0FDUCxZQUFZO2tCQUNaO1VBQW1CLHNCQUNuQjt1QkFBeUI7VUFDekIsbUJBQW1CO2tCQUNuQjtFQUFvQixzQkFDcEI7YUFBdUIsa0JBQ3hCO1dBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0kiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56T3ZlcmxheU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IE56TWVudU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudSc7XHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IE56Q29udGV4dE1lbnVTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1jb250ZXh0LW1lbnUuc2VydmljZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duQURpcmVjdGl2ZSB9IGZyb20gJy4vbnotZHJvcGRvd24tYS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotZHJvcGRvd24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpEcm9wZG93blNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LWRyb3Bkb3duLnNlcnZpY2UubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTnpCdXR0b25Nb2R1bGUsXHJcbiAgICBOek1lbnVNb2R1bGUsXHJcbiAgICBOekljb25Nb2R1bGUsXHJcbiAgICBQbGF0Zm9ybU1vZHVsZSxcclxuICAgIE56Tm9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBOek92ZXJsYXlNb2R1bGUsXHJcbiAgICBOekRyb3Bkb3duU2VydmljZU1vZHVsZSxcclxuICAgIE56Q29udGV4dE1lbnVTZXJ2aWNlTW9kdWxlLFxyXG4gICAgTnpBZGRPbk1vZHVsZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQsIE56RHJvcGRvd25NZW51Q29tcG9uZW50XSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE56RHJvcERvd25Db21wb25lbnQsXHJcbiAgICBOekRyb3BEb3duQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgTnpEcm9wRG93bkRpcmVjdGl2ZSxcclxuICAgIE56RHJvcERvd25BRGlyZWN0aXZlLFxyXG4gICAgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQsXHJcbiAgICBOekRyb3Bkb3duTWVudUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTnpNZW51TW9kdWxlLFxyXG4gICAgTnpEcm9wRG93bkNvbXBvbmVudCxcclxuICAgIE56RHJvcERvd25CdXR0b25Db21wb25lbnQsXHJcbiAgICBOekRyb3BEb3duRGlyZWN0aXZlLFxyXG4gICAgTnpEcm9wRG93bkFEaXJlY3RpdmUsXHJcbiAgICBOekRyb3Bkb3duTWVudUNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56RHJvcERvd25Nb2R1bGUge31cclxuIl19