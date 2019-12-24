/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
const _c0 = ["role", "group", 1, "ant-select-dropdown-menu-item-group"];
function NzAutocompleteOptgroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.nzLabel);
} }
const _c1 = [[["nz-auto-option"]]];
const _c2 = ["nz-auto-option"];
export class NzAutocompleteOptgroupComponent {
    constructor() {
    }
}
/** @nocollapse */ NzAutocompleteOptgroupComponent.ɵfac = function NzAutocompleteOptgroupComponent_Factory(t) { return new (t || NzAutocompleteOptgroupComponent)(); };
/** @nocollapse */ NzAutocompleteOptgroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzAutocompleteOptgroupComponent, selectors: [["nz-auto-optgroup"]], hostBindings: function NzAutocompleteOptgroupComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵelementHostAttrs(_c0);
    } }, inputs: { nzLabel: "nzLabel" }, exportAs: ["nzAutoOptgroup"], ngContentSelectors: _c2, decls: 4, vars: 1, consts: [[1, "ant-select-dropdown-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function NzAutocompleteOptgroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, NzAutocompleteOptgroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ul", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzLabel);
    } }, directives: [i1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAutocompleteOptgroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-auto-optgroup',
                exportAs: 'nzAutoOptgroup',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-autocomplete-optgroup.component.html',
                host: {
                    role: 'group',
                    class: 'ant-select-dropdown-menu-item-group'
                }
            }]
    }], function () { return []; }, { nzLabel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZS8iLCJzb3VyY2VzIjpbIm56LWF1dG9jb21wbGV0ZS1vcHRncm91cC5jb21wb25lbnQudHMiLCJuei1hdXRvY29tcGxldGUtb3B0Z3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDUHhHLDZCQUFnRDtJQUFBLFlBQWE7SUFBQSwwQkFBZTs7O0lBQTVCLGVBQWE7SUFBYixvQ0FBYTs7OztBRHFCL0QsTUFBTSxPQUFPLCtCQUErQjtJQUcxQztJQUFlLENBQUM7OzhHQUhMLCtCQUErQjtvRUFBL0IsK0JBQStCOzs7O1FDdEI1Qyw4QkFDRTtRQUFBLGtHQUFnRDtRQUNsRCxpQkFBTTtRQUNOLDZCQUNFO1FBQUEsa0JBQW9DO1FBQ3RDLGlCQUFLOztRQUpXLGVBQWlDO1FBQWpDLG9EQUFpQzs7a0REcUJwQywrQkFBK0I7Y0FaM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsV0FBVyxFQUFFLDJDQUEyQztnQkFDeEQsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxxQ0FBcUM7aUJBQzdDO2FBQ0Y7O2tCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYXV0by1vcHRncm91cCcsXHJcbiAgZXhwb3J0QXM6ICduekF1dG9PcHRncm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICByb2xlOiAnZ3JvdXAnLFxyXG4gICAgY2xhc3M6ICdhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekF1dG9jb21wbGV0ZU9wdGdyb3VwQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuekxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cC10aXRsZVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekxhYmVsXCI+e3sgbnpMYWJlbCB9fTwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPHVsIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAtbGlzdFwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LWF1dG8tb3B0aW9uXCI+PC9uZy1jb250ZW50PlxyXG48L3VsPlxyXG4iXX0=