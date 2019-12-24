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
import * as i0 from "@angular/core";
var NzModalModule = /** @class */ (function () {
    function NzModalModule() {
    }
    /** @nocollapse */ NzModalModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzModalModule });
    /** @nocollapse */ NzModalModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzModalModule_Factory(t) { return new (t || NzModalModule)(); }, imports: [[
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
            ]] });
    return NzModalModule;
}());
export { NzModalModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzModalModule, { declarations: [NzModalComponent, NzModalFooterDirective], imports: [CommonModule,
        OverlayModule,
        NzAddOnModule,
        NzI18nModule,
        NzButtonModule,
        NzIconModule,
        NzPipesModule,
        NzNoAnimationModule,
        NzModalServiceModule,
        NzModalControlServiceModule], exports: [NzModalComponent, NzModalFooterDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzModalModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFakU7SUFBQTtLQWlCNkI7cURBQWhCLGFBQWE7NkdBQWIsYUFBYSxrQkFoQmY7Z0JBQ1AsWUFBWTtnQkFDWixhQUFhO2dCQUNiLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLG9CQUFvQjtnQkFDcEIsMkJBQTJCO2FBQzVCO3dCQWxDSDtDQXVDNkIsQUFqQjdCLElBaUI2QjtTQUFoQixhQUFhO3dGQUFiLGFBQWEsbUJBSFQsZ0JBQWdCLEVBQUUsc0JBQXNCLGFBWnJELFlBQVk7UUFDWixhQUFhO1FBQ2IsYUFBYTtRQUNiLFlBQVk7UUFDWixjQUFjO1FBQ2QsWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLDJCQUEyQixhQUVuQixnQkFBZ0IsRUFBRSxzQkFBc0I7a0RBSXZDLGFBQWE7Y0FqQnpCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixjQUFjO29CQUNkLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsMkJBQTJCO2lCQUM1QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQztnQkFDbkQsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7Z0JBQ3hELGVBQWUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56UGlwZXNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1tb2RhbC1jb250cm9sLnNlcnZpY2UubW9kdWxlJztcclxuaW1wb3J0IHsgTnpNb2RhbEZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotbW9kYWwtZm9vdGVyLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL256LW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1tb2RhbC5zZXJ2aWNlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICBOekFkZE9uTW9kdWxlLFxyXG4gICAgTnpJMThuTW9kdWxlLFxyXG4gICAgTnpCdXR0b25Nb2R1bGUsXHJcbiAgICBOekljb25Nb2R1bGUsXHJcbiAgICBOelBpcGVzTW9kdWxlLFxyXG4gICAgTnpOb0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIE56TW9kYWxTZXJ2aWNlTW9kdWxlLFxyXG4gICAgTnpNb2RhbENvbnRyb2xTZXJ2aWNlTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTnpNb2RhbENvbXBvbmVudCwgTnpNb2RhbEZvb3RlckRpcmVjdGl2ZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpNb2RhbENvbXBvbmVudCwgTnpNb2RhbEZvb3RlckRpcmVjdGl2ZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTnpNb2RhbENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56TW9kYWxNb2R1bGUge31cclxuIl19