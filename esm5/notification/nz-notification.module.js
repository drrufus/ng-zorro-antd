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
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER } from './nz-notification-config';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
import { NzNotificationComponent } from './nz-notification.component';
import { NzNotificationServiceModule } from './nz-notification.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/cdk/scrolling";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/core";
var NzNotificationModule = /** @class */ (function () {
    function NzNotificationModule() {
    }
    /** @nocollapse */ NzNotificationModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzNotificationModule });
    /** @nocollapse */ NzNotificationModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzNotificationModule_Factory(t) { return new (t || NzNotificationModule)(); }, providers: [NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER], imports: [[CommonModule, OverlayModule, NzIconModule, NzNotificationServiceModule, NzAddOnModule]] });
    return NzNotificationModule;
}());
export { NzNotificationModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzNotificationModule, { declarations: [NzNotificationComponent, NzNotificationContainerComponent], imports: [CommonModule, OverlayModule, NzIconModule, NzNotificationServiceModule, NzAddOnModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzNotificationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, NzIconModule, NzNotificationServiceModule, NzAddOnModule],
                declarations: [NzNotificationComponent, NzNotificationContainerComponent],
                providers: [NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER],
                entryComponents: [NzNotificationContainerComponent]
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(NzNotificationContainerComponent, [NzNotificationComponent, NzNotificationContainerComponent, i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.CdkConnectedOverlay, i2.CdkOverlayOrigin, i3.Dir, i4.CdkFixedSizeVirtualScroll, i4.CdkScrollable, i4.CdkVirtualForOf, i4.CdkVirtualScrollViewport, i5.NzIconDirective, i6.NzStringTemplateOutletDirective, i6.NzClassListAddDirective], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsibnotbm90aWZpY2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7QUFFL0U7SUFBQTtLQU1vQzs0REFBdkIsb0JBQW9COzJIQUFwQixvQkFBb0IsbUJBSHBCLENBQUMsdUNBQXVDLENBQUMsWUFGM0MsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSwyQkFBMkIsRUFBRSxhQUFhLENBQUM7K0JBcEJsRztDQXlCb0MsQUFOcEMsSUFNb0M7U0FBdkIsb0JBQW9CO3dGQUFwQixvQkFBb0IsbUJBSmhCLHVCQUF1QixFQUFFLGdDQUFnQyxhQUQ5RCxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSwyQkFBMkIsRUFBRSxhQUFhO2tEQUtwRixvQkFBb0I7Y0FOaEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLDJCQUEyQixFQUFFLGFBQWEsQ0FBQztnQkFDaEcsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsZ0NBQWdDLENBQUM7Z0JBQ3pFLFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2dCQUNwRCxlQUFlLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUNwRDs7dUJBSHlDLGdDQUFnQyxHQUF6RCx1QkFBdUIsRUFBRSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgTlpfTk9USUZJQ0FUSU9OX0RFRkFVTFRfQ09ORklHX1BST1ZJREVSIH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24tY29uZmlnJztcclxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvblNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5zZXJ2aWNlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpOb3RpZmljYXRpb25TZXJ2aWNlTW9kdWxlLCBOekFkZE9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOek5vdGlmaWNhdGlvbkNvbXBvbmVudCwgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW05aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJR19QUk9WSURFUl0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek5vdGlmaWNhdGlvbk1vZHVsZSB7fVxyXG4iXX0=