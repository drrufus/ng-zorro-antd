/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
function NzCardTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
var _c0 = ["*"];
var NzCardTabComponent = /** @class */ (function () {
    function NzCardTabComponent() {
    }
    /** @nocollapse */ NzCardTabComponent.ɵfac = function NzCardTabComponent_Factory(t) { return new (t || NzCardTabComponent)(); };
    /** @nocollapse */ NzCardTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCardTabComponent, selectors: [["nz-card-tab"]], viewQuery: function NzCardTabComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(TemplateRef, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
        } }, exportAs: ["nzCardTab"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCardTabComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, NzCardTabComponent_ng_template_0_Template, 1, 0, "ng-template");
        } }, encapsulation: 2, changeDetection: 0 });
    return NzCardTabComponent;
}());
export { NzCardTabComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCardTabComponent, [{
        type: Component,
        args: [{
                selector: 'nz-card-tab',
                exportAs: 'nzCardTab',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-card-tab.component.html'
            }]
    }], null, { template: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC10YWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJkLyIsInNvdXJjZXMiOlsibnotY2FyZC10YWIuY29tcG9uZW50LnRzIiwibnotY2FyZC10YWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUNQNUcsa0JBQVk7OztBRFNkO0lBQUE7S0FTQzt3RkFGWSxrQkFBa0I7MkRBQWxCLGtCQUFrQjtpQ0FDbEIsV0FBVzs7Ozs7O1lDbEJ4QixnRkFDRTs7NkJEREY7Q0FtQkMsQUFURCxJQVNDO1NBRlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FQOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsV0FBVztnQkFDckIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxXQUFXLEVBQUUsOEJBQThCO2FBQzVDOztrQkFFRSxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWNhcmQtdGFiJyxcclxuICBleHBvcnRBczogJ256Q2FyZFRhYicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FyZC10YWIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhcmRUYWJDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxufVxyXG4iLCI8bmctdGVtcGxhdGU+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=