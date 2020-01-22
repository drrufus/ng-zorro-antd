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
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbComponent } from './nz-breadcrumb.component';
var NzBreadCrumbItemComponent = /** @class */ (function () {
    function NzBreadCrumbItemComponent(nzBreadCrumbComponent) {
        this.nzBreadCrumbComponent = nzBreadCrumbComponent;
    }
    NzBreadCrumbItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-breadcrumb-item',
                    exportAs: 'nzBreadcrumbItem',
                    preserveWhitespaces: false,
                    template: "<ng-container *ngIf=\"!!nzOverlay; else noMenuTpl\">\r\n  <span class=\"ant-breadcrumb-overlay-link\" nz-dropdown [nzDropdownMenu]=\"nzOverlay\">\r\n    <ng-template [ngTemplateOutlet]=\"noMenuTpl\"></ng-template>\r\n    <i *ngIf=\"!!nzOverlay\" nz-icon nzType=\"down\"></i>\r\n  </span>\r\n</ng-container>\r\n\r\n<ng-template #noMenuTpl>\r\n  <span class=\"ant-breadcrumb-link\">\r\n    <ng-content></ng-content>\r\n  </span>\r\n</ng-template>\r\n\r\n<span class=\"ant-breadcrumb-separator\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzBreadCrumbComponent.nzSeparator\">\r\n    {{ nzBreadCrumbComponent.nzSeparator }}\r\n  </ng-container>\r\n</span>\r\n",
                    styles: ["\n      nz-breadcrumb-item:last-child {\n        color: rgba(0, 0, 0, 0.65);\n      }\n\n      nz-breadcrumb-item:last-child .ant-breadcrumb-separator {\n        display: none;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzBreadCrumbItemComponent.ctorParameters = function () { return [
        { type: NzBreadCrumbComponent }
    ]; };
    NzBreadCrumbItemComponent.propDecorators = {
        nzOverlay: [{ type: Input }]
    };
    return NzBreadCrumbItemComponent;
}());
export { NzBreadCrumbItemComponent };
if (false) {
    /**
     * Dropdown content of a breadcrumb item.
     * @type {?}
     */
    NzBreadCrumbItemComponent.prototype.nzOverlay;
    /** @type {?} */
    NzBreadCrumbItemComponent.prototype.nzBreadCrumbComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYnJlYWRjcnVtYi8iLCJzb3VyY2VzIjpbIm56LWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQXlCRSxtQ0FBbUIscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFBRyxDQUFDOztnQkF6QnBFLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDhwQkFBa0Q7NkJBRWhELGlNQVFDO2lCQUVKOzs7O2dCQXBCUSxxQkFBcUI7Ozs0QkF5QjNCLEtBQUs7O0lBR1IsZ0NBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQVBZLHlCQUF5Qjs7Ozs7O0lBSXBDLDhDQUE2Qzs7SUFFakMsMERBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56RHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XHJcblxyXG5pbXBvcnQgeyBOekJyZWFkQ3J1bWJDb21wb25lbnQgfSBmcm9tICcuL256LWJyZWFkY3J1bWIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1icmVhZGNydW1iLWl0ZW0nLFxyXG4gIGV4cG9ydEFzOiAnbnpCcmVhZGNydW1iSXRlbScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWJyZWFkY3J1bWItaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbnotYnJlYWRjcnVtYi1pdGVtOmxhc3QtY2hpbGQgLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QnJlYWRDcnVtYkl0ZW1Db21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIERyb3Bkb3duIGNvbnRlbnQgb2YgYSBicmVhZGNydW1iIGl0ZW0uXHJcbiAgICovXHJcbiAgQElucHV0KCkgbnpPdmVybGF5PzogTnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekJyZWFkQ3J1bWJDb21wb25lbnQ6IE56QnJlYWRDcnVtYkNvbXBvbmVudCkge31cclxufVxyXG4iXX0=