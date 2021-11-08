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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResultNotFoundComponent } from './partial/not-found';
import { NzResultServerErrorComponent } from './partial/server-error.component';
import { NzResultUnauthorizedComponent } from './partial/unauthorized';
import { NzResultContentDirective, NzResultExtraDirective, NzResultIconDirective, NzResultSubtitleDirective, NzResultTitleDirective } from './nz-result-cells';
import { NzResultComponent } from './nz-result.component';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
const partial = [NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent];
/** @type {?} */
const cellDirectives = [
    NzResultContentDirective,
    NzResultExtraDirective,
    NzResultIconDirective,
    NzResultSubtitleDirective,
    NzResultTitleDirective
];
export class NzResultModule {
}
NzResultModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzResultModule });
NzResultModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzResultModule_Factory(t) { return new (t || NzResultModule)(); }, imports: [[CommonModule, NzAddOnModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzResultModule, { declarations: function () { return [NzResultComponent,
        NzResultContentDirective,
        NzResultExtraDirective,
        NzResultIconDirective,
        NzResultSubtitleDirective,
        NzResultTitleDirective,
        NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent]; }, imports: function () { return [CommonModule, NzAddOnModule, NzIconModule]; }, exports: function () { return [NzResultComponent,
        NzResultContentDirective,
        NzResultExtraDirective,
        NzResultIconDirective,
        NzResultSubtitleDirective,
        NzResultTitleDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResultModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule, NzIconModule],
                declarations: [NzResultComponent, ...cellDirectives, ...partial],
                exports: [NzResultComponent, ...cellDirectives]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0Lm1vZHVsZS5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvcmVzdWx0L256LXJlc3VsdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZFLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLHFCQUFxQixFQUNyQix5QkFBeUIsRUFDekIsc0JBQXNCLEVBQ3ZCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUUxQyxNQUFWLE9BQU8sR0FBRyxDQUFDLHlCQUF5QixFQUFFLDRCQUE0QixFQUFFLDZCQUE2QixDQUFDOztNQUVsRyxjQUFjLEdBQUc7SUFDckIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHNCQUFzQjtDQUN2QjtBQU9ELE1BQU0sT0FBTyxjQUFjOzs7Q0FDM0IsMkNBTkMsUUFBUSxTQUFDLGtCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDLGtCQUNwRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHO1FBQWMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxrQkFDaEUsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxjQUFjLENBQUMsY0FDaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0kiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IE56UmVzdWx0Tm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvbm90LWZvdW5kJztcclxuaW1wb3J0IHsgTnpSZXN1bHRTZXJ2ZXJFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vcGFydGlhbC9zZXJ2ZXItZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpSZXN1bHRVbmF1dGhvcml6ZWRDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvdW5hdXRob3JpemVkJztcclxuXHJcbmltcG9ydCB7XHJcbiAgTnpSZXN1bHRDb250ZW50RGlyZWN0aXZlLFxyXG4gIE56UmVzdWx0RXh0cmFEaXJlY3RpdmUsXHJcbiAgTnpSZXN1bHRJY29uRGlyZWN0aXZlLFxyXG4gIE56UmVzdWx0U3VidGl0bGVEaXJlY3RpdmUsXHJcbiAgTnpSZXN1bHRUaXRsZURpcmVjdGl2ZVxyXG59IGZyb20gJy4vbnotcmVzdWx0LWNlbGxzJztcclxuaW1wb3J0IHsgTnpSZXN1bHRDb21wb25lbnQgfSBmcm9tICcuL256LXJlc3VsdC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgcGFydGlhbCA9IFtOelJlc3VsdE5vdEZvdW5kQ29tcG9uZW50LCBOelJlc3VsdFNlcnZlckVycm9yQ29tcG9uZW50LCBOelJlc3VsdFVuYXV0aG9yaXplZENvbXBvbmVudF07XHJcblxyXG5jb25zdCBjZWxsRGlyZWN0aXZlcyA9IFtcclxuICBOelJlc3VsdENvbnRlbnREaXJlY3RpdmUsXHJcbiAgTnpSZXN1bHRFeHRyYURpcmVjdGl2ZSxcclxuICBOelJlc3VsdEljb25EaXJlY3RpdmUsXHJcbiAgTnpSZXN1bHRTdWJ0aXRsZURpcmVjdGl2ZSxcclxuICBOelJlc3VsdFRpdGxlRGlyZWN0aXZlXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56QWRkT25Nb2R1bGUsIE56SWNvbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpSZXN1bHRDb21wb25lbnQsIC4uLmNlbGxEaXJlY3RpdmVzLCAuLi5wYXJ0aWFsXSxcclxuICBleHBvcnRzOiBbTnpSZXN1bHRDb21wb25lbnQsIC4uLmNlbGxEaXJlY3RpdmVzXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSZXN1bHRNb2R1bGUge31cclxuIl19