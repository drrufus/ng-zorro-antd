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
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
import { NzTimelineComponent } from './nz-timeline.component';
import * as ɵngcc0 from '@angular/core';
export class NzTimelineModule {
}
NzTimelineModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTimelineModule });
NzTimelineModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTimelineModule_Factory(t) { return new (t || NzTimelineModule)(); }, imports: [[CommonModule, PlatformModule, NzIconModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTimelineModule, { declarations: function () { return [NzTimelineItemComponent, NzTimelineComponent]; }, imports: function () { return [CommonModule, PlatformModule, NzIconModule, NzAddOnModule]; }, exports: function () { return [NzTimelineItemComponent, NzTimelineComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTimelineModule, [{
        type: NgModule,
        args: [{
                declarations: [NzTimelineItemComponent, NzTimelineComponent],
                exports: [NzTimelineItemComponent, NzTimelineComponent],
                imports: [CommonModule, PlatformModule, NzIconModule, NzAddOnModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUubW9kdWxlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC90aW1lbGluZS9uei10aW1lbGluZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFPOUQsTUFBTSxPQUFPLGdCQUFnQjs7O0NBQzdCLDZDQU5DLFFBQVEsU0FBQyxrQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxtQkFBbUIsQ0FBQyxrQkFDNUQsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CO0FBQUMsa0JBQ3ZELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxjQUNyRTs7Ozs7Ozs7MEJBQ0kiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IE56VGltZWxpbmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aW1lbGluZS1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VGltZWxpbmVDb21wb25lbnQgfSBmcm9tICcuL256LXRpbWVsaW5lLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW056VGltZWxpbmVJdGVtQ29tcG9uZW50LCBOelRpbWVsaW5lQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpUaW1lbGluZUl0ZW1Db21wb25lbnQsIE56VGltZWxpbmVDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBOekljb25Nb2R1bGUsIE56QWRkT25Nb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lTW9kdWxlIHt9XHJcbiJdfQ==