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
import * as i0 from "@angular/core";
import * as i1 from "./nz-breadcrumb.component";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core";
import * as i4 from "ng-zorro-antd/dropdown";
import * as i5 from "ng-zorro-antd/icon";
function NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) { }
function NzBreadCrumbItemComponent_ng_container_0_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 7);
} }
function NzBreadCrumbItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 4);
    i0.ɵɵtemplate(2, NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 5);
    i0.ɵɵtemplate(3, NzBreadCrumbItemComponent_ng_container_0_i_3_Template, 1, 0, "i", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2189 = i0.ɵɵnextContext();
    const _r2190 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzDropdownMenu", ctx_r2189.nzOverlay);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2190);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!ctx_r2189.nzOverlay);
} }
function NzBreadCrumbItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
function NzBreadCrumbItemComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2192 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2192.nzBreadCrumbComponent.nzSeparator, " ");
} }
const _c0 = ["*"];
export class NzBreadCrumbItemComponent {
    constructor(nzBreadCrumbComponent) {
        this.nzBreadCrumbComponent = nzBreadCrumbComponent;
    }
}
/** @nocollapse */ NzBreadCrumbItemComponent.ɵfac = function NzBreadCrumbItemComponent_Factory(t) { return new (t || NzBreadCrumbItemComponent)(i0.ɵɵdirectiveInject(i1.NzBreadCrumbComponent)); };
/** @nocollapse */ NzBreadCrumbItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzBreadCrumbItemComponent, selectors: [["nz-breadcrumb-item"]], inputs: { nzOverlay: "nzOverlay" }, exportAs: ["nzBreadcrumbItem"], ngContentSelectors: _c0, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["noMenuTpl", ""], [1, "ant-breadcrumb-separator"], [4, "nzStringTemplateOutlet"], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], [1, "ant-breadcrumb-link"]], template: function NzBreadCrumbItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzBreadCrumbItemComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        i0.ɵɵtemplate(1, NzBreadCrumbItemComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(3, "span", 2);
        i0.ɵɵtemplate(4, NzBreadCrumbItemComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2190 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", !!ctx.nzOverlay)("ngIfElse", _r2190);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzBreadCrumbComponent.nzSeparator);
    } }, directives: [i2.NgIf, i3.NzStringTemplateOutletDirective, i4.NzDropDownDirective, i2.NgTemplateOutlet, i5.NzIconDirective], styles: ["\n      nz-breadcrumb-item:last-child {\n        color: rgba(0, 0, 0, 0.65);\n      }\n\n      nz-breadcrumb-item:last-child .ant-breadcrumb-separator {\n        display: none;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzBreadCrumbItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-breadcrumb-item',
                exportAs: 'nzBreadcrumbItem',
                preserveWhitespaces: false,
                templateUrl: './nz-breadcrumb-item.component.html',
                styles: [
                    `
      nz-breadcrumb-item:last-child {
        color: rgba(0, 0, 0, 0.65);
      }

      nz-breadcrumb-item:last-child .ant-breadcrumb-separator {
        display: none;
      }
    `
                ]
            }]
    }], function () { return [{ type: i1.NzBreadCrumbComponent }]; }, { nzOverlay: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYnJlYWRjcnVtYi8iLCJzb3VyY2VzIjpbIm56LWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQudHMiLCJuei1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztJQ1Q5RCx1QkFBaUQ7OztJQUhyRCw2QkFDRTtJQUFBLCtCQUNFO0lBQUEseUdBQTRDO0lBQzVDLHFGQUE2QztJQUMvQyxpQkFBTztJQUNULDBCQUFlOzs7O0lBSnlDLGVBQTRCO0lBQTVCLG9EQUE0QjtJQUNuRSxlQUE4QjtJQUE5Qix5Q0FBOEI7SUFDeEMsZUFBbUI7SUFBbkIsNENBQW1COzs7SUFLeEIsK0JBQ0U7SUFBQSxrQkFBWTtJQUNkLGlCQUFPOzs7SUFJUCw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSwwQkFBZTs7O0lBRGIsZUFDRjtJQURFLDRFQUNGOzs7QURpQkYsTUFBTSxPQUFPLHlCQUF5QjtJQU1wQyxZQUFtQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFHLENBQUM7O2tHQU54RCx5QkFBeUI7OERBQXpCLHlCQUF5Qjs7UUNqQ3RDLDRGQUNFO1FBTUYsMkhBQ0U7UUFLRiwrQkFDRTtRQUFBLDRGQUNFO1FBRUosaUJBQU87OztRQWpCTyxzQ0FBbUMsb0JBQUE7UUFjakMsZUFBMkQ7UUFBM0QsOEVBQTJEOztrRERtQjlELHlCQUF5QjtjQW5CckMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsTUFBTSxFQUFFO29CQUNOOzs7Ozs7OztLQVFDO2lCQUNGO2FBQ0Y7O2tCQUtFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcclxuXHJcbmltcG9ydCB7IE56QnJlYWRDcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vbnotYnJlYWRjcnVtYi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWJyZWFkY3J1bWItaXRlbScsXHJcbiAgZXhwb3J0QXM6ICduekJyZWFkY3J1bWJJdGVtJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotYnJlYWRjcnVtYi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuei1icmVhZGNydW1iLWl0ZW06bGFzdC1jaGlsZCAuYW50LWJyZWFkY3J1bWItc2VwYXJhdG9yIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpCcmVhZENydW1iSXRlbUNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogRHJvcGRvd24gY29udGVudCBvZiBhIGJyZWFkY3J1bWIgaXRlbS5cclxuICAgKi9cclxuICBASW5wdXQoKSBuek92ZXJsYXk/OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG56QnJlYWRDcnVtYkNvbXBvbmVudDogTnpCcmVhZENydW1iQ29tcG9uZW50KSB7fVxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCIhIW56T3ZlcmxheTsgZWxzZSBub01lbnVUcGxcIj5cclxuICA8c3BhbiBjbGFzcz1cImFudC1icmVhZGNydW1iLW92ZXJsYXktbGlua1wiIG56LWRyb3Bkb3duIFtuekRyb3Bkb3duTWVudV09XCJuek92ZXJsYXlcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJub01lbnVUcGxcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgPGkgKm5nSWY9XCIhIW56T3ZlcmxheVwiIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cclxuICA8L3NwYW4+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNub01lbnVUcGw+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtYnJlYWRjcnVtYi1saW5rXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPHNwYW4gY2xhc3M9XCJhbnQtYnJlYWRjcnVtYi1zZXBhcmF0b3JcIj5cclxuICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpCcmVhZENydW1iQ29tcG9uZW50Lm56U2VwYXJhdG9yXCI+XHJcbiAgICB7eyBuekJyZWFkQ3J1bWJDb21wb25lbnQubnpTZXBhcmF0b3IgfX1cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9zcGFuPlxyXG4iXX0=