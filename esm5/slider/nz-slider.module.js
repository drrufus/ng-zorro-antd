/**
 * @fileoverview added by tsickle
 * Generated from: nz-slider.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var NzSliderModule = /** @class */ (function () {
    function NzSliderModule() {
    }
    NzSliderModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        NzSliderComponent,
                        NzSliderTrackComponent,
                        NzSliderHandleComponent,
                        NzSliderStepComponent,
                        NzSliderMarksComponent
                    ],
                    declarations: [
                        NzSliderComponent,
                        NzSliderTrackComponent,
                        NzSliderHandleComponent,
                        NzSliderStepComponent,
                        NzSliderMarksComponent
                    ],
                    imports: [CommonModule, PlatformModule, NzToolTipModule]
                },] }
    ];
    return NzSliderModule;
}());
export { NzSliderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFEO0lBQUE7SUFpQjZCLENBQUM7O2dCQWpCN0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2QixxQkFBcUI7d0JBQ3JCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztpQkFDekQ7O0lBQzRCLHFCQUFDO0NBQUEsQUFqQjlCLElBaUI4QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IE56U2xpZGVySGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zbGlkZXItaGFuZGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56U2xpZGVyTWFya3NDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci1tYXJrcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelNsaWRlclN0ZXBDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci1zdGVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56U2xpZGVyVHJhY2tDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci10cmFjay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotc2xpZGVyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtcclxuICAgIE56U2xpZGVyQ29tcG9uZW50LFxyXG4gICAgTnpTbGlkZXJUcmFja0NvbXBvbmVudCxcclxuICAgIE56U2xpZGVySGFuZGxlQ29tcG9uZW50LFxyXG4gICAgTnpTbGlkZXJTdGVwQ29tcG9uZW50LFxyXG4gICAgTnpTbGlkZXJNYXJrc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOelNsaWRlckNvbXBvbmVudCxcclxuICAgIE56U2xpZGVyVHJhY2tDb21wb25lbnQsXHJcbiAgICBOelNsaWRlckhhbmRsZUNvbXBvbmVudCxcclxuICAgIE56U2xpZGVyU3RlcENvbXBvbmVudCxcclxuICAgIE56U2xpZGVyTWFya3NDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBOelRvb2xUaXBNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlck1vZHVsZSB7fVxyXG4iXX0=