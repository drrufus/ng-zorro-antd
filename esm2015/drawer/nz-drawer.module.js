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
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerComponent } from './nz-drawer.component';
import { NzDrawerServiceModule } from './nz-drawer.service.module';
import * as ɵngcc0 from '@angular/core';
export class NzDrawerModule {
}
NzDrawerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDrawerModule });
NzDrawerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDrawerModule_Factory(t) { return new (t || NzDrawerModule)(); }, imports: [[
            CommonModule,
            OverlayModule,
            PortalModule,
            NzIconModule,
            NzAddOnModule,
            NzNoAnimationModule,
            NzDrawerServiceModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzDrawerModule, { declarations: function () { return [NzDrawerComponent]; }, imports: function () { return [CommonModule,
        OverlayModule,
        PortalModule,
        NzIconModule,
        NzAddOnModule,
        NzNoAnimationModule,
        NzDrawerServiceModule]; }, exports: function () { return [NzDrawerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDrawerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    PortalModule,
                    NzIconModule,
                    NzAddOnModule,
                    NzNoAnimationModule,
                    NzDrawerServiceModule
                ],
                exports: [NzDrawerComponent],
                declarations: [NzDrawerComponent],
                entryComponents: [NzDrawerComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvZHJhd2VyL256LWRyYXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBZ0JuRSxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7Ozs7Q0FDM0I7NkJBZkMsUUFBUSxTQUFDLGtCQUNSLE9BQU8sRUFBRSxzQkFDUCxZQUFZLHNCQUNaLGFBQWEsc0JBQ2IsWUFBWSxzQkFDWixZQUFZO2tCQUNaO1FBQWE7UUFDYjtLQUFtQjtJQUNuQixxQkFBcUI7Y0FDdEIsa0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUMsa0JBQzVCLFlBQVksRUFBRSxDQUFDO1lBQWlCLENBQUMsa0JBQ2pDLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7MEJBQ0kiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOekRyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJhd2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56RHJhd2VyU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotZHJhd2VyLnNlcnZpY2UubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZSxcclxuICAgIFBvcnRhbE1vZHVsZSxcclxuICAgIE56SWNvbk1vZHVsZSxcclxuICAgIE56QWRkT25Nb2R1bGUsXHJcbiAgICBOek5vQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgTnpEcmF3ZXJTZXJ2aWNlTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTnpEcmF3ZXJDb21wb25lbnRdLFxyXG4gIGRlY2xhcmF0aW9uczogW056RHJhd2VyQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtOekRyYXdlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56RHJhd2VyTW9kdWxlIHt9XHJcbiJdfQ==