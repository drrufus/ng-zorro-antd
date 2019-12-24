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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/cdk/scrolling";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/core";
export class NzMessageModule {
}
/** @nocollapse */ NzMessageModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzMessageModule });
/** @nocollapse */ NzMessageModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzMessageModule_Factory(t) { return new (t || NzMessageModule)(); }, providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER], imports: [[CommonModule, OverlayModule, NzIconModule, NzAddOnModule, NzMessageServiceModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzMessageModule, { declarations: [NzMessageContainerComponent, NzMessageComponent], imports: [CommonModule, OverlayModule, NzIconModule, NzAddOnModule, NzMessageServiceModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMessageModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, NzIconModule, NzAddOnModule, NzMessageServiceModule],
                declarations: [NzMessageContainerComponent, NzMessageComponent],
                providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER],
                entryComponents: [NzMessageContainerComponent]
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(NzMessageContainerComponent, [NzMessageContainerComponent, NzMessageComponent, i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.CdkConnectedOverlay, i2.CdkOverlayOrigin, i3.Dir, i4.CdkFixedSizeVirtualScroll, i4.CdkScrollable, i4.CdkVirtualForOf, i4.CdkVirtualScrollViewport, i5.NzIconDirective, i6.NzStringTemplateOutletDirective, i6.NzClassListAddDirective], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7QUFRckUsTUFBTSxPQUFPLGVBQWU7O21EQUFmLGVBQWU7NkdBQWYsZUFBZSxtQkFIZixDQUFDLGtDQUFrQyxDQUFDLFlBRnRDLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixDQUFDO3dGQUtoRixlQUFlLG1CQUpYLDJCQUEyQixFQUFFLGtCQUFrQixhQURwRCxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsc0JBQXNCO2tEQUsvRSxlQUFlO2NBTjNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsc0JBQXNCLENBQUM7Z0JBQzNGLFlBQVksRUFBRSxDQUFDLDJCQUEyQixFQUFFLGtCQUFrQixDQUFDO2dCQUMvRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDL0MsZUFBZSxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDL0M7O3VCQUhnQiwyQkFBMkIsR0FBM0IsMkJBQTJCLEVBQUUsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IE5aX01FU1NBR0VfREVGQVVMVF9DT05GSUdfUFJPVklERVIgfSBmcm9tICcuL256LW1lc3NhZ2UtY29uZmlnJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL256LW1lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotbWVzc2FnZS5zZXJ2aWNlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpBZGRPbk1vZHVsZSwgTnpNZXNzYWdlU2VydmljZU1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LCBOek1lc3NhZ2VDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW05aX01FU1NBR0VfREVGQVVMVF9DT05GSUdfUFJPVklERVJdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW056TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZU1vZHVsZSB7fVxyXG4iXX0=