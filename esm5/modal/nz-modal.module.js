/**
 * @fileoverview added by tsickle
 * Generated from: nz-modal.module.ts
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
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAddOnModule, NzNoAnimationModule, NzPipesModule } from 'ng-zorro-antd/core';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalControlServiceModule } from './nz-modal-control.service.module';
import { NzModalFooterDirective } from './nz-modal-footer.directive';
import { NzModalComponent } from './nz-modal.component';
import { NzModalServiceModule } from './nz-modal.service.module';
var NzModalModule = /** @class */ (function () {
    function NzModalModule() {
    }
    NzModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        OverlayModule,
                        NzAddOnModule,
                        NzI18nModule,
                        NzButtonModule,
                        NzIconModule,
                        NzPipesModule,
                        NzNoAnimationModule,
                        NzModalServiceModule,
                        NzModalControlServiceModule
                    ],
                    exports: [NzModalComponent, NzModalFooterDirective],
                    declarations: [NzModalComponent, NzModalFooterDirective],
                    entryComponents: [NzModalComponent]
                },] }
    ];
    return NzModalModule;
}());
export { NzModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVqRTtJQUFBO0lBaUI0QixDQUFDOztnQkFqQjVCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQztvQkFDbkQsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7b0JBQ3hELGVBQWUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUNwQzs7SUFDMkIsb0JBQUM7Q0FBQSxBQWpCN0IsSUFpQjZCO1NBQWhCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpQaXBlc01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOek1vZGFsQ29udHJvbFNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LW1vZGFsLWNvbnRyb2wuc2VydmljZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOek1vZGFsRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tb2RhbC1mb290ZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbnotbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LW1vZGFsLnNlcnZpY2UubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZSxcclxuICAgIE56QWRkT25Nb2R1bGUsXHJcbiAgICBOekkxOG5Nb2R1bGUsXHJcbiAgICBOekJ1dHRvbk1vZHVsZSxcclxuICAgIE56SWNvbk1vZHVsZSxcclxuICAgIE56UGlwZXNNb2R1bGUsXHJcbiAgICBOek5vQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgTnpNb2RhbFNlcnZpY2VNb2R1bGUsXHJcbiAgICBOek1vZGFsQ29udHJvbFNlcnZpY2VNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtOek1vZGFsQ29tcG9uZW50LCBOek1vZGFsRm9vdGVyRGlyZWN0aXZlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOek1vZGFsQ29tcG9uZW50LCBOek1vZGFsRm9vdGVyRGlyZWN0aXZlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtOek1vZGFsQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNb2RhbE1vZHVsZSB7fVxyXG4iXX0=