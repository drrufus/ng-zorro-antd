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
var _c0 = ["role", "group", 1, "ant-select-dropdown-menu-item-group"];
function NzAutocompleteOptgroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r13.nzLabel);
} }
var _c1 = [[["nz-auto-option"]]];
var _c2 = ["nz-auto-option"];
var NzAutocompleteOptgroupComponent = /** @class */ (function () {
    function NzAutocompleteOptgroupComponent() {
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
    return NzAutocompleteOptgroupComponent;
}());
export { NzAutocompleteOptgroupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZS8iLCJzb3VyY2VzIjpbIm56LWF1dG9jb21wbGV0ZS1vcHRncm91cC5jb21wb25lbnQudHMiLCJuei1hdXRvY29tcGxldGUtb3B0Z3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDUHhHLDZCQUFnRDtJQUFBLFlBQWE7SUFBQSwwQkFBZTs7O0lBQTVCLGVBQWE7SUFBYixxQ0FBYTs7OztBRFMvRDtJQWVFO0lBQWUsQ0FBQztrSEFITCwrQkFBK0I7d0VBQS9CLCtCQUErQjs7OztZQ3RCNUMsOEJBQ0U7WUFBQSxrR0FBZ0Q7WUFDbEQsaUJBQU07WUFDTiw2QkFDRTtZQUFBLGtCQUFvQztZQUN0QyxpQkFBSzs7WUFKVyxlQUFpQztZQUFqQyxvREFBaUM7OzBDRERqRDtDQTBCQyxBQWhCRCxJQWdCQztTQUpZLCtCQUErQjtrREFBL0IsK0JBQStCO2NBWjNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFdBQVcsRUFBRSwyQ0FBMkM7Z0JBQ3hELElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUscUNBQXFDO2lCQUM3QzthQUNGOztrQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWF1dG8tb3B0Z3JvdXAnLFxyXG4gIGV4cG9ydEFzOiAnbnpBdXRvT3B0Z3JvdXAnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWF1dG9jb21wbGV0ZS1vcHRncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgcm9sZTogJ2dyb3VwJyxcclxuICAgIGNsYXNzOiAnYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbnpMYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAtdGl0bGVcIj5cclxuICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpMYWJlbFwiPnt7IG56TGFiZWwgfX08L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbjx1bCBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwLWxpc3RcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJuei1hdXRvLW9wdGlvblwiPjwvbmctY29udGVudD5cclxuPC91bD5cclxuIl19