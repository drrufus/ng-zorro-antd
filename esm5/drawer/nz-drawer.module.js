/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerComponent } from './nz-drawer.component';
import { NzDrawerServiceModule } from './nz-drawer.service.module';
import * as i0 from "@angular/core";
var NzDrawerModule = /** @class */ (function () {
    function NzDrawerModule() {
    }
    /** @nocollapse */ NzDrawerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzDrawerModule });
    /** @nocollapse */ NzDrawerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzDrawerModule_Factory(t) { return new (t || NzDrawerModule)(); }, imports: [[CommonModule, OverlayModule, PortalModule, NzIconModule, NzAddOnModule, NzNoAnimationModule, NzDrawerServiceModule]] });
    return NzDrawerModule;
}());
export { NzDrawerModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzDrawerModule, { declarations: [NzDrawerComponent], imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzAddOnModule, NzNoAnimationModule, NzDrawerServiceModule], exports: [NzDrawerComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDrawerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzAddOnModule, NzNoAnimationModule, NzDrawerServiceModule],
                exports: [NzDrawerComponent],
                declarations: [NzDrawerComponent],
                entryComponents: [NzDrawerComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZHJhd2VyLyIsInNvdXJjZXMiOlsibnotZHJhd2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBRW5FO0lBQUE7S0FNOEI7c0RBQWpCLGNBQWM7K0dBQWQsY0FBYyxrQkFMaEIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO3lCQXBCL0g7Q0F5QjhCLEFBTjlCLElBTThCO1NBQWpCLGNBQWM7d0ZBQWQsY0FBYyxtQkFIVixpQkFBaUIsYUFGdEIsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsYUFDbEgsaUJBQWlCO2tEQUloQixjQUFjO2NBTjFCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO2dCQUM3SCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgTnpEcmF3ZXJDb21wb25lbnQgfSBmcm9tICcuL256LWRyYXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekRyYXdlclNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LWRyYXdlci5zZXJ2aWNlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIFBvcnRhbE1vZHVsZSwgTnpJY29uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlLCBOekRyYXdlclNlcnZpY2VNb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtOekRyYXdlckNvbXBvbmVudF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpEcmF3ZXJDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW056RHJhd2VyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEcmF3ZXJNb2R1bGUge31cclxuIl19