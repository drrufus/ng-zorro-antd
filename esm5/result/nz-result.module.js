/**
 * @fileoverview added by tsickle
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
import * as ɵngcc0 from '@angular/core';
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
                declarations: tslib_1.__spread([NzResultComponent], cellDirectives, partial),
                exports: tslib_1.__spread([NzResultComponent], cellDirectives)
            }]
    }], function () { return []; }, null); })();
    return NzResultModule;
}());
export { NzResultModule };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0Lm1vZHVsZS5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvcmVzdWx0L256LXJlc3VsdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixxQkFBcUIsRUFDckIseUJBQXlCLEVBQ3pCLHNCQUFzQixFQUN2QixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFFMUMsSUFBVixPQUFPLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsQ0FBQzs7SUFFbEcsY0FBYyxHQUFHO0lBQ3JCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixzQkFBc0I7Q0FDdkI7QUFFRDtJQUFBO0lBSzZCLENBQUM7a0RBTDdCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQyxzQkFDcEQsWUFBWSxvQkFBRyxpQkFBaUIsR0FBSyxjQUFjLEVBQUssT0FBTyxDQUFDLHNCQUNoRTtHQUFPLG9CQUFHLGlCQUFpQixHQUFLLGNBQWMsQ0FBQyxrQkFDaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBQ1E7SUFBb0IscUJBQUM7Q0FBQSxBQUw5QixJQUs4QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOelJlc3VsdE5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJ0aWFsL25vdC1mb3VuZCc7XHJcbmltcG9ydCB7IE56UmVzdWx0U2VydmVyRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvc2VydmVyLWVycm9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56UmVzdWx0VW5hdXRob3JpemVkQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJ0aWFsL3VuYXV0aG9yaXplZCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIE56UmVzdWx0Q29udGVudERpcmVjdGl2ZSxcclxuICBOelJlc3VsdEV4dHJhRGlyZWN0aXZlLFxyXG4gIE56UmVzdWx0SWNvbkRpcmVjdGl2ZSxcclxuICBOelJlc3VsdFN1YnRpdGxlRGlyZWN0aXZlLFxyXG4gIE56UmVzdWx0VGl0bGVEaXJlY3RpdmVcclxufSBmcm9tICcuL256LXJlc3VsdC1jZWxscyc7XHJcbmltcG9ydCB7IE56UmVzdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1yZXN1bHQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHBhcnRpYWwgPSBbTnpSZXN1bHROb3RGb3VuZENvbXBvbmVudCwgTnpSZXN1bHRTZXJ2ZXJFcnJvckNvbXBvbmVudCwgTnpSZXN1bHRVbmF1dGhvcml6ZWRDb21wb25lbnRdO1xyXG5cclxuY29uc3QgY2VsbERpcmVjdGl2ZXMgPSBbXHJcbiAgTnpSZXN1bHRDb250ZW50RGlyZWN0aXZlLFxyXG4gIE56UmVzdWx0RXh0cmFEaXJlY3RpdmUsXHJcbiAgTnpSZXN1bHRJY29uRGlyZWN0aXZlLFxyXG4gIE56UmVzdWx0U3VidGl0bGVEaXJlY3RpdmUsXHJcbiAgTnpSZXN1bHRUaXRsZURpcmVjdGl2ZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOekljb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW056UmVzdWx0Q29tcG9uZW50LCAuLi5jZWxsRGlyZWN0aXZlcywgLi4ucGFydGlhbF0sXHJcbiAgZXhwb3J0czogW056UmVzdWx0Q29tcG9uZW50LCAuLi5jZWxsRGlyZWN0aXZlc11cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmVzdWx0TW9kdWxlIHt9XHJcbiJdfQ==