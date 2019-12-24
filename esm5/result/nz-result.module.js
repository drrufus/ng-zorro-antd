import { __read, __spread } from "tslib";
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
import * as i0 from "@angular/core";
var partial = [NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent];
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
    /** @nocollapse */ NzResultModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzResultModule });
    /** @nocollapse */ NzResultModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzResultModule_Factory(t) { return new (t || NzResultModule)(); }, imports: [[CommonModule, NzAddOnModule, NzIconModule]] });
    return NzResultModule;
}());
export { NzResultModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzResultModule, { declarations: [NzResultComponent,
        NzResultContentDirective,
        NzResultExtraDirective,
        NzResultIconDirective,
        NzResultSubtitleDirective,
        NzResultTitleDirective,
        NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent], imports: [CommonModule, NzAddOnModule, NzIconModule], exports: [NzResultComponent,
        NzResultContentDirective,
        NzResultExtraDirective,
        NzResultIconDirective,
        NzResultSubtitleDirective,
        NzResultTitleDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzResultModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule, NzIconModule],
                declarations: __spread([NzResultComponent], cellDirectives, partial),
                exports: __spread([NzResultComponent], cellDirectives)
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixxQkFBcUIsRUFDckIseUJBQXlCLEVBQ3pCLHNCQUFzQixFQUN2QixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUUxRCxJQUFNLE9BQU8sR0FBRyxDQUFDLHlCQUF5QixFQUFFLDRCQUE0QixFQUFFLDZCQUE2QixDQUFDLENBQUM7QUFFekcsSUFBTSxjQUFjLEdBQUc7SUFDckIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHNCQUFzQjtDQUN2QixDQUFDO0FBRUY7SUFBQTtLQUs4QjtzREFBakIsY0FBYzsrR0FBZCxjQUFjLGtCQUpoQixDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO3lCQXRDdEQ7Q0EwQzhCLEFBTDlCLElBSzhCO1NBQWpCLGNBQWM7d0ZBQWQsY0FBYyxtQkFIVixpQkFBaUI7UUFUaEMsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQVBQLHlCQUF5QixFQUFFLDRCQUE0QixFQUFFLDZCQUE2QixhQVczRixZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksYUFFekMsaUJBQWlCO1FBVjNCLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixzQkFBc0I7a0RBUVgsY0FBYztjQUwxQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7Z0JBQ3BELFlBQVksWUFBRyxpQkFBaUIsR0FBSyxjQUFjLEVBQUssT0FBTyxDQUFDO2dCQUNoRSxPQUFPLFlBQUcsaUJBQWlCLEdBQUssY0FBYyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOelJlc3VsdE5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJ0aWFsL25vdC1mb3VuZCc7XHJcbmltcG9ydCB7IE56UmVzdWx0U2VydmVyRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvc2VydmVyLWVycm9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56UmVzdWx0VW5hdXRob3JpemVkQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJ0aWFsL3VuYXV0aG9yaXplZCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIE56UmVzdWx0Q29udGVudERpcmVjdGl2ZSxcclxuICBOelJlc3VsdEV4dHJhRGlyZWN0aXZlLFxyXG4gIE56UmVzdWx0SWNvbkRpcmVjdGl2ZSxcclxuICBOelJlc3VsdFN1YnRpdGxlRGlyZWN0aXZlLFxyXG4gIE56UmVzdWx0VGl0bGVEaXJlY3RpdmVcclxufSBmcm9tICcuL256LXJlc3VsdC1jZWxscyc7XHJcbmltcG9ydCB7IE56UmVzdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1yZXN1bHQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHBhcnRpYWwgPSBbTnpSZXN1bHROb3RGb3VuZENvbXBvbmVudCwgTnpSZXN1bHRTZXJ2ZXJFcnJvckNvbXBvbmVudCwgTnpSZXN1bHRVbmF1dGhvcml6ZWRDb21wb25lbnRdO1xyXG5cclxuY29uc3QgY2VsbERpcmVjdGl2ZXMgPSBbXHJcbiAgTnpSZXN1bHRDb250ZW50RGlyZWN0aXZlLFxyXG4gIE56UmVzdWx0RXh0cmFEaXJlY3RpdmUsXHJcbiAgTnpSZXN1bHRJY29uRGlyZWN0aXZlLFxyXG4gIE56UmVzdWx0U3VidGl0bGVEaXJlY3RpdmUsXHJcbiAgTnpSZXN1bHRUaXRsZURpcmVjdGl2ZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOekljb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW056UmVzdWx0Q29tcG9uZW50LCAuLi5jZWxsRGlyZWN0aXZlcywgLi4ucGFydGlhbF0sXHJcbiAgZXhwb3J0czogW056UmVzdWx0Q29tcG9uZW50LCAuLi5jZWxsRGlyZWN0aXZlc11cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmVzdWx0TW9kdWxlIHt9XHJcbiJdfQ==