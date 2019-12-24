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
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSliderHandleComponent } from './nz-slider-handle.component';
import { NzSliderMarksComponent } from './nz-slider-marks.component';
import { NzSliderStepComponent } from './nz-slider-step.component';
import { NzSliderTrackComponent } from './nz-slider-track.component';
import { NzSliderComponent } from './nz-slider.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/tooltip";
export class NzSliderModule {
}
/** @nocollapse */ NzSliderModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzSliderModule });
/** @nocollapse */ NzSliderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzSliderModule_Factory(t) { return new (t || NzSliderModule)(); }, imports: [[CommonModule, PlatformModule, NzToolTipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzSliderModule, { declarations: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent], imports: [CommonModule, PlatformModule, NzToolTipModule], exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSliderModule, [{
        type: NgModule,
        args: [{
                exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                declarations: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                imports: [CommonModule, PlatformModule, NzToolTipModule]
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(NzSliderComponent, [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent, i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.NzToolTipComponent, i2.NzTooltipDirective], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBTzFELE1BQU0sT0FBTyxjQUFjOztrREFBZCxjQUFjOzJHQUFkLGNBQWMsa0JBRmhCLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUM7d0ZBRTdDLGNBQWMsbUJBSFYsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLGFBQ3RILFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxhQUY3QyxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0I7a0RBSWhILGNBQWM7Y0FMMUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixDQUFDO2dCQUM1SCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQztnQkFDakksT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUM7YUFDekQ7O3VCQUZnQixpQkFBaUIsR0FBakIsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IE56U2xpZGVySGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zbGlkZXItaGFuZGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56U2xpZGVyTWFya3NDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci1tYXJrcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelNsaWRlclN0ZXBDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci1zdGVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56U2xpZGVyVHJhY2tDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci10cmFjay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotc2xpZGVyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtOelNsaWRlckNvbXBvbmVudCwgTnpTbGlkZXJUcmFja0NvbXBvbmVudCwgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQsIE56U2xpZGVyU3RlcENvbXBvbmVudCwgTnpTbGlkZXJNYXJrc0NvbXBvbmVudF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpTbGlkZXJDb21wb25lbnQsIE56U2xpZGVyVHJhY2tDb21wb25lbnQsIE56U2xpZGVySGFuZGxlQ29tcG9uZW50LCBOelNsaWRlclN0ZXBDb21wb25lbnQsIE56U2xpZGVyTWFya3NDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBOelRvb2xUaXBNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlck1vZHVsZSB7fVxyXG4iXX0=