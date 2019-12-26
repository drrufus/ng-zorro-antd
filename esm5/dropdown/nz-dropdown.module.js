/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown.module.ts
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
var NzDropDownModule = /** @class */ (function () {
    function NzDropDownModule() {
    }
    NzDropDownModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return NzDropDownModule;
}());
export { NzDropDownModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXZFO0lBQUE7SUFpQytCLENBQUM7O2dCQWpDL0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZix1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsYUFBYTtxQkFDZDtvQkFDRCxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx1QkFBdUIsQ0FBQztvQkFDdEUsWUFBWSxFQUFFO3dCQUNaLG1CQUFtQjt3QkFDbkIseUJBQXlCO3dCQUN6QixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsMEJBQTBCO3dCQUMxQix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIseUJBQXlCO3dCQUN6QixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsdUJBQXVCO3FCQUN4QjtpQkFDRjs7SUFDOEIsdUJBQUM7Q0FBQSxBQWpDaEMsSUFpQ2dDO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuaW1wb3J0IHsgTnpNZW51TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgTnpDb250ZXh0TWVudVNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LWNvbnRleHQtbWVudS5zZXJ2aWNlLm1vZHVsZSc7XHJcbmltcG9ydCB7IE56RHJvcERvd25BRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1kcm9wZG93bi1hLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56RHJvcERvd25CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vbnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOekRyb3Bkb3duU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotZHJvcGRvd24uc2VydmljZS5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBOekJ1dHRvbk1vZHVsZSxcclxuICAgIE56TWVudU1vZHVsZSxcclxuICAgIE56SWNvbk1vZHVsZSxcclxuICAgIFBsYXRmb3JtTW9kdWxlLFxyXG4gICAgTnpOb0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIE56T3ZlcmxheU1vZHVsZSxcclxuICAgIE56RHJvcGRvd25TZXJ2aWNlTW9kdWxlLFxyXG4gICAgTnpDb250ZXh0TWVudVNlcnZpY2VNb2R1bGUsXHJcbiAgICBOekFkZE9uTW9kdWxlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCwgTnpEcm9wZG93bk1lbnVDb21wb25lbnRdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTnpEcm9wRG93bkNvbXBvbmVudCxcclxuICAgIE56RHJvcERvd25CdXR0b25Db21wb25lbnQsXHJcbiAgICBOekRyb3BEb3duRGlyZWN0aXZlLFxyXG4gICAgTnpEcm9wRG93bkFEaXJlY3RpdmUsXHJcbiAgICBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCxcclxuICAgIE56RHJvcGRvd25NZW51Q29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOek1lbnVNb2R1bGUsXHJcbiAgICBOekRyb3BEb3duQ29tcG9uZW50LFxyXG4gICAgTnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCxcclxuICAgIE56RHJvcERvd25EaXJlY3RpdmUsXHJcbiAgICBOekRyb3BEb3duQURpcmVjdGl2ZSxcclxuICAgIE56RHJvcGRvd25NZW51Q29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEcm9wRG93bk1vZHVsZSB7fVxyXG4iXX0=