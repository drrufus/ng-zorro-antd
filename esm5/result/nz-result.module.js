/**
 * @fileoverview added by tsickle
 * Generated from: nz-result.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var partial = [NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent];
/** @type {?} */
var cellDirectives = [
    NzResultContentDirective,
    NzResultExtraDirective,
    NzResultIconDirective,
    NzResultSubtitleDirective,
    NzResultTitleDirective
];
var NzResultModule = /** @class */ (function () {
    function NzResultModule() {
    }
    NzResultModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule, NzIconModule],
                    declarations: tslib_1.__spread([NzResultComponent], cellDirectives, partial),
                    exports: tslib_1.__spread([NzResultComponent], cellDirectives)
                },] }
    ];
    return NzResultModule;
}());
export { NzResultModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixxQkFBcUIsRUFDckIseUJBQXlCLEVBQ3pCLHNCQUFzQixFQUN2QixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQUVwRCxPQUFPLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsQ0FBQzs7SUFFbEcsY0FBYyxHQUFHO0lBQ3JCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixzQkFBc0I7Q0FDdkI7QUFFRDtJQUFBO0lBSzZCLENBQUM7O2dCQUw3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7b0JBQ3BELFlBQVksb0JBQUcsaUJBQWlCLEdBQUssY0FBYyxFQUFLLE9BQU8sQ0FBQztvQkFDaEUsT0FBTyxvQkFBRyxpQkFBaUIsR0FBSyxjQUFjLENBQUM7aUJBQ2hEOztJQUM0QixxQkFBQztDQUFBLEFBTDlCLElBSzhCO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IE56UmVzdWx0Tm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvbm90LWZvdW5kJztcclxuaW1wb3J0IHsgTnpSZXN1bHRTZXJ2ZXJFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vcGFydGlhbC9zZXJ2ZXItZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpSZXN1bHRVbmF1dGhvcml6ZWRDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvdW5hdXRob3JpemVkJztcclxuXHJcbmltcG9ydCB7XHJcbiAgTnpSZXN1bHRDb250ZW50RGlyZWN0aXZlLFxyXG4gIE56UmVzdWx0RXh0cmFEaXJlY3RpdmUsXHJcbiAgTnpSZXN1bHRJY29uRGlyZWN0aXZlLFxyXG4gIE56UmVzdWx0U3VidGl0bGVEaXJlY3RpdmUsXHJcbiAgTnpSZXN1bHRUaXRsZURpcmVjdGl2ZVxyXG59IGZyb20gJy4vbnotcmVzdWx0LWNlbGxzJztcclxuaW1wb3J0IHsgTnpSZXN1bHRDb21wb25lbnQgfSBmcm9tICcuL256LXJlc3VsdC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgcGFydGlhbCA9IFtOelJlc3VsdE5vdEZvdW5kQ29tcG9uZW50LCBOelJlc3VsdFNlcnZlckVycm9yQ29tcG9uZW50LCBOelJlc3VsdFVuYXV0aG9yaXplZENvbXBvbmVudF07XHJcblxyXG5jb25zdCBjZWxsRGlyZWN0aXZlcyA9IFtcclxuICBOelJlc3VsdENvbnRlbnREaXJlY3RpdmUsXHJcbiAgTnpSZXN1bHRFeHRyYURpcmVjdGl2ZSxcclxuICBOelJlc3VsdEljb25EaXJlY3RpdmUsXHJcbiAgTnpSZXN1bHRTdWJ0aXRsZURpcmVjdGl2ZSxcclxuICBOelJlc3VsdFRpdGxlRGlyZWN0aXZlXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56QWRkT25Nb2R1bGUsIE56SWNvbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpSZXN1bHRDb21wb25lbnQsIC4uLmNlbGxEaXJlY3RpdmVzLCAuLi5wYXJ0aWFsXSxcclxuICBleHBvcnRzOiBbTnpSZXN1bHRDb21wb25lbnQsIC4uLmNlbGxEaXJlY3RpdmVzXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSZXN1bHRNb2R1bGUge31cclxuIl19