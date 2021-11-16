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
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER } from './nz-message-config';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageComponent } from './nz-message.component';
import { NzMessageServiceModule } from './nz-message.service.module';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/cdk/overlay';
import * as ɵngcc3 from '@angular/cdk/bidi';
import * as ɵngcc4 from '@angular/cdk/scrolling';
import * as ɵngcc5 from 'ng-zorro-antd/icon';
import * as ɵngcc6 from 'ng-zorro-antd/core';
var NzMessageModule = /** @class */ (function () {
    function NzMessageModule() {
    }
NzMessageModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzMessageModule });
NzMessageModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzMessageModule_Factory(t) { return new (t || NzMessageModule)(); }, providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER], imports: [[CommonModule, OverlayModule, NzIconModule, NzAddOnModule, NzMessageServiceModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzMessageModule, { declarations: function () { return [NzMessageContainerComponent, NzMessageComponent]; }, imports: function () { return [CommonModule, OverlayModule, NzIconModule, NzAddOnModule, NzMessageServiceModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMessageModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, NzIconModule, NzAddOnModule, NzMessageServiceModule],
                declarations: [NzMessageContainerComponent, NzMessageComponent],
                providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER],
                entryComponents: [NzMessageContainerComponent]
            }]
    }], function () { return []; }, null); })();
ɵngcc0.ɵɵsetComponentScope(NzMessageContainerComponent, [ɵngcc1.NgClass, ɵngcc1.NgComponentOutlet, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgStyle, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, ɵngcc1.NgSwitchDefault, ɵngcc1.NgPlural, ɵngcc1.NgPluralCase, ɵngcc2.CdkConnectedOverlay, ɵngcc2.CdkOverlayOrigin, ɵngcc3.Dir, ɵngcc4.CdkFixedSizeVirtualScroll, ɵngcc4.CdkScrollable, ɵngcc4.CdkVirtualForOf, ɵngcc4.CdkVirtualScrollViewport, ɵngcc5.NzIconDirective, ɵngcc6.NzStringTemplateOutletDirective, ɵngcc6.NzClassListAddDirective, NzMessageContainerComponent, NzMessageComponent], [ɵngcc1.AsyncPipe, ɵngcc1.UpperCasePipe, ɵngcc1.LowerCasePipe, ɵngcc1.JsonPipe, ɵngcc1.SlicePipe, ɵngcc1.DecimalPipe, ɵngcc1.PercentPipe, ɵngcc1.TitleCasePipe, ɵngcc1.CurrencyPipe, ɵngcc1.DatePipe, ɵngcc1.I18nPluralPipe, ɵngcc1.I18nSelectPipe, ɵngcc1.KeyValuePipe]);
    return NzMessageModule;
}());
export { NzMessageModule };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL21lc3NhZ2UvbnotbWVzc2FnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7QUFFckU7SUFBQTtJQU04QixDQUFDO21EQU45QixRQUFRLFNBQUM7ZUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsc0JBQXNCLENBQUMsc0JBQzNGLFlBQVksRUFBRSxDQUFDLDJCQUEyQixFQUFFLGtCQUFrQixDQUFDLHNCQUMvRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQyxzQkFDL0M7Y0FBZSxFQUFFLENBQUMsMkJBQTJCLENBQUMsa0JBQy9DOzs7Ozs7Ozs7OzIxQkFDUTtJQUFxQixzQkFBQztDQUFBLEFBTi9CLElBTStCO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJR19QUk9WSURFUiB9IGZyb20gJy4vbnotbWVzc2FnZS1jb25maWcnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vbnotbWVzc2FnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1tZXNzYWdlLnNlcnZpY2UubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTnpJY29uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOek1lc3NhZ2VTZXJ2aWNlTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIE56TWVzc2FnZUNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJR19QUk9WSURFUl0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlTW9kdWxlIHt9XHJcbiJdfQ==