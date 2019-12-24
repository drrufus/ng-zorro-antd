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
const _c0 = ["nz-tab-body", ""];
function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r810 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r810.content);
} }
export class NzTabBodyComponent {
    constructor() {
        this.active = false;
        this.forceRender = false;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJzLyIsInNvdXJjZXMiOlsibnotdGFiLWJvZHkuY29tcG9uZW50LnRzIiwibnotdGFiLWJvZHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNSMUcsNkJBQ0U7SUFBQSxrR0FBMEM7SUFDNUMsMEJBQWU7OztJQURBLGVBQTRCO0lBQTVCLG1EQUE0Qjs7QURxQjNDLE1BQU0sT0FBTyxrQkFBa0I7SUFaL0I7UUFjVyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxLQUFLLENBQUM7S0FDOUI7O29GQUpZLGtCQUFrQjt1REFBbEIsa0JBQWtCOzs7OztRQ3RCL0IscUZBQ0U7O1FBRFksb0RBQTZCOztrRERzQjlCLGtCQUFrQjtjQVo5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLElBQUksRUFBRTtvQkFDSixpQ0FBaUMsRUFBRSxRQUFRO29CQUMzQyxtQ0FBbUMsRUFBRSxTQUFTO2lCQUMvQzthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuei10YWItYm9keV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpUYWJCb2R5JyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10YWItYm9keS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy10YWJwYW5lLWFjdGl2ZV0nOiAnYWN0aXZlJyxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtdGFicGFuZS1pbmFjdGl2ZV0nOiAnIWFjdGl2ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhYkJvZHlDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZvcmNlUmVuZGVyID0gZmFsc2U7XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImFjdGl2ZSB8fCBmb3JjZVJlbmRlclwiPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==