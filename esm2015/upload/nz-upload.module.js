/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzUploadBtnComponent } from './nz-upload-btn.component';
import { NzUploadListComponent } from './nz-upload-list.component';
import { NzUploadComponent } from './nz-upload.component';
import * as i0 from "@angular/core";
export class NzUploadModule {
}
/** @nocollapse */ NzUploadModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzUploadModule });
/** @nocollapse */ NzUploadModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzUploadModule_Factory(t) { return new (t || NzUploadModule)(); }, imports: [[CommonModule, FormsModule, PlatformModule, NzToolTipModule, NzProgressModule, NzI18nModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzUploadModule, { declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent], imports: [CommonModule, FormsModule, PlatformModule, NzToolTipModule, NzProgressModule, NzI18nModule, NzIconModule], exports: [NzUploadComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzUploadModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, PlatformModule, NzToolTipModule, NzProgressModule, NzI18nModule, NzIconModule],
                declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
                exports: [NzUploadComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdXBsb2FkLyIsInNvdXJjZXMiOlsibnotdXBsb2FkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU8xRCxNQUFNLE9BQU8sY0FBYzs7a0RBQWQsY0FBYzsyR0FBZCxjQUFjLGtCQUpoQixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDO3dGQUl4RyxjQUFjLG1CQUhWLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixhQURuRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFlBQVksYUFFeEcsaUJBQWlCO2tEQUVoQixjQUFjO2NBTDFCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQztnQkFDbkgsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLENBQUM7Z0JBQzlFLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IE56UHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Byb2dyZXNzJztcclxuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IE56VXBsb2FkQnRuQ29tcG9uZW50IH0gZnJvbSAnLi9uei11cGxvYWQtYnRuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VXBsb2FkTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbnotdXBsb2FkLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL256LXVwbG9hZC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUGxhdGZvcm1Nb2R1bGUsIE56VG9vbFRpcE1vZHVsZSwgTnpQcm9ncmVzc01vZHVsZSwgTnpJMThuTW9kdWxlLCBOekljb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW056VXBsb2FkQ29tcG9uZW50LCBOelVwbG9hZEJ0bkNvbXBvbmVudCwgTnpVcGxvYWRMaXN0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpVcGxvYWRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelVwbG9hZE1vZHVsZSB7fVxyXG4iXX0=