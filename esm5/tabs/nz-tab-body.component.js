/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["nz-tab-body", ""];
function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r836 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r836.content);
} }
var NzTabBodyComponent = /** @class */ (function () {
    function NzTabBodyComponent() {
        this.active = false;
        this.forceRender = false;
    }
    /** @nocollapse */ NzTabBodyComponent.ɵfac = function NzTabBodyComponent_Factory(t) { return new (t || NzTabBodyComponent)(); };
    /** @nocollapse */ NzTabBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTabBodyComponent, selectors: [["", "nz-tab-body", ""]], hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(2);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-tabs-tabpane-active", ctx.active)("ant-tabs-tabpane-inactive", !ctx.active);
        } }, inputs: { content: "content", active: "active", forceRender: "forceRender" }, exportAs: ["nzTabBody"], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.active || ctx.forceRender);
        } }, directives: [i1.NgIf, i1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    return NzTabBodyComponent;
}());
export { NzTabBodyComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTabBodyComponent, [{
        type: Component,
        args: [{
                selector: '[nz-tab-body]',
                exportAs: 'nzTabBody',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-tab-body.component.html',
                host: {
                    '[class.ant-tabs-tabpane-active]': 'active',
                    '[class.ant-tabs-tabpane-inactive]': '!active'
                }
            }]
    }], null, { content: [{
            type: Input
        }], active: [{
            type: Input
        }], forceRender: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJzLyIsInNvdXJjZXMiOlsibnotdGFiLWJvZHkuY29tcG9uZW50LnRzIiwibnotdGFiLWJvZHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNSMUcsNkJBQ0U7SUFBQSxrR0FBMEM7SUFDNUMsMEJBQWU7OztJQURBLGVBQTRCO0lBQTVCLG1EQUE0Qjs7QURTM0M7SUFBQTtRQWNXLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixnQkFBVyxHQUFHLEtBQUssQ0FBQztLQUM5Qjt3RkFKWSxrQkFBa0I7MkRBQWxCLGtCQUFrQjs7Ozs7WUN0Qi9CLHFGQUNFOztZQURZLG9EQUE2Qjs7NkJEQTNDO0NBMEJDLEFBaEJELElBZ0JDO1NBSlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FaOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsV0FBVztnQkFDckIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxJQUFJLEVBQUU7b0JBQ0osaUNBQWlDLEVBQUUsUUFBUTtvQkFDM0MsbUNBQW1DLEVBQUUsU0FBUztpQkFDL0M7YUFDRjs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbnotdGFiLWJvZHldJyxcclxuICBleHBvcnRBczogJ256VGFiQm9keScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGFiLWJvZHkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRhYnMtdGFicGFuZS1hY3RpdmVdJzogJ2FjdGl2ZScsXHJcbiAgICAnW2NsYXNzLmFudC10YWJzLXRhYnBhbmUtaW5hY3RpdmVdJzogJyFhY3RpdmUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUYWJCb2R5Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBmb3JjZVJlbmRlciA9IGZhbHNlO1xyXG59XHJcbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJhY3RpdmUgfHwgZm9yY2VSZW5kZXJcIj5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiPjwvbmctdGVtcGxhdGU+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=