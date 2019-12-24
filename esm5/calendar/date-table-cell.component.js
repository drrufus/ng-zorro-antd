/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Component, Input } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["date-table-cell", ""];
function DateTableCellComponent_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c1 = function (a0) { return { $implicit: a0 }; };
function DateTableCellComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DateTableCellComponent_ng_container_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2023 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2023.cell.dateCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r2023.cell.value));
} }
function DateTableCellComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2024 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r2024.cell.dateCellRender, i0.ɵɵsanitizeHtml);
} }
function DateTableCellComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2025 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2025.prefixCls, "-date");
    i0.ɵɵattribute("aria-selected", ctx_r2025.cell.isSelected)("aria-disabled", ctx_r2025.cell.isDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2025.cell.content, " ");
} }
function DateTableCellComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainerStart(1, 0);
    i0.ɵɵtemplate(2, DateTableCellComponent_ng_container_1_ng_container_2_Template, 2, 4, "ng-container", 1);
    i0.ɵɵtemplate(3, DateTableCellComponent_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 1);
    i0.ɵɵtemplate(4, DateTableCellComponent_ng_container_1_ng_container_4_Template, 3, 6, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2021 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r2021.isTemplateRef(ctx_r2021.cell.dateCellRender));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r2021.isNonEmptyString(ctx_r2021.cell.dateCellRender));
} }
function DateTableCellComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateTableCellComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DateTableCellComponent_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2027 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2027.cell.dateFullCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r2027.cell.value));
} }
function DateTableCellComponent_ng_container_2_ng_template_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateTableCellComponent_ng_container_2_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, DateTableCellComponent_ng_container_2_ng_template_3_div_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2031 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("", ctx_r2031.prefixCls, "-content");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2031.cell.dateCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c1, ctx_r2031.cell.value));
} }
function DateTableCellComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DateTableCellComponent_ng_container_2_ng_template_3_div_2_Template, 2, 7, "div", 8);
} if (rf & 2) {
    var ctx_r2029 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r2029.prefixCls, "-value");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2029.cell.content);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2029.cell.dateCellRender);
} }
function DateTableCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, DateTableCellComponent_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 6);
    i0.ɵɵtemplate(3, DateTableCellComponent_ng_container_2_ng_template_3_Template, 3, 5, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r2028 = i0.ɵɵreference(4);
    var ctx_r2022 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2022.cell.dateFullCellRender)("ngIfElse", _r2028);
} }
var DateTableCellComponent = /** @class */ (function () {
    function DateTableCellComponent() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    /** @nocollapse */ DateTableCellComponent.ɵfac = function DateTableCellComponent_Factory(t) { return new (t || DateTableCellComponent)(); };
    /** @nocollapse */ DateTableCellComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateTableCellComponent, selectors: [["", "date-table-cell", ""]], inputs: { prefixCls: "prefixCls", cell: "cell" }, exportAs: ["dateTableCell"], attrs: _c0, decls: 3, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [1, "ant-fullcalendar-date"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""], [3, "class", 4, "ngIf"]], template: function DateTableCellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, DateTableCellComponent_ng_container_1_Template, 5, 3, "ng-container", 1);
            i0.ɵɵtemplate(2, DateTableCellComponent_ng_container_2_Template, 5, 2, "ng-container", 1);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.prefixCls);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "ant-calendar");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "ant-fullcalendar");
        } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgTemplateOutlet, i1.NgIf], encapsulation: 2 });
    return DateTableCellComponent;
}());
export { DateTableCellComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateTableCellComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: '[date-table-cell]',
                exportAs: 'dateTableCell',
                templateUrl: './date-table-cell.component.html',
                styles: []
            }]
    }], null, { prefixCls: [{
            type: Input
        }], cell: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJkYXRlLXRhYmxlLWNlbGwuY29tcG9uZW50LnRzIiwiZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7SUNMN0Qsd0JBRWdCOzs7O0lBSGxCLDZCQUNFO0lBQUEsdUhBRUM7SUFDSCwwQkFBZTs7O0lBRlgsZUFBMkU7SUFBM0UsZ0VBQTJFLDZFQUFBOzs7SUFHL0UsNkJBQ0U7SUFBQSwwQkFBK0M7SUFDakQsMEJBQWU7OztJQURQLGVBQWlDO0lBQWpDLDRFQUFpQzs7O0lBRXpDLDZCQUNFO0lBQUEsMkJBS0U7SUFBQSxZQUNGO0lBQUEsaUJBQU07SUFDUiwwQkFBZTs7O0lBTlgsZUFBNEI7SUFBNUIsMkRBQTRCO0lBQzVCLDBEQUFzQyw0Q0FBQTtJQUd0QyxlQUNGO0lBREUsdURBQ0Y7OztJQWpCTiw2QkFDRTtJQUFBLGdDQUNFO0lBQUEsd0dBQ0U7SUFJRix3R0FDRTtJQUVGLHdHQUNFO0lBUUosMEJBQWU7SUFDakIsMEJBQWU7OztJQW5CQyxlQUFpQjtJQUFqQiwrQkFBaUI7SUFDZixlQUFrRDtJQUFsRCxxRkFBa0Q7SUFLbEQsZUFBcUQ7SUFBckQsd0ZBQXFEOzs7SUFpQmpFLHdCQUVnQjs7O0lBSGxCLDZCQUNFO0lBQUEsdUhBRUM7SUFDSCwwQkFBZTs7O0lBRlgsZUFBK0U7SUFBL0Usb0VBQStFLDZFQUFBOzs7SUFNL0Usd0JBRWdCOzs7SUFIbEIsMkJBQ0U7SUFBQSw0SEFFQztJQUNILGlCQUFNOzs7SUFKMkIsOERBQStCO0lBRTVELGVBQTJFO0lBQTNFLGdFQUEyRSw2RUFBQTs7O0lBSC9FLDJCQUFtQztJQUFBLFlBQWtCO0lBQUEsaUJBQU07SUFDM0Qsb0dBQ0U7OztJQUZHLDREQUE2QjtJQUFDLGVBQWtCO0lBQWxCLDRDQUFrQjtJQUNoRCxlQUEyQjtJQUEzQixvREFBMkI7OztJQVR0Qyw2QkFDRTtJQUFBLDhCQUNFO0lBQUEsd0dBQ0U7SUFJRix1SUFDRTtJQU9KLGlCQUFNO0lBQ1IsMEJBQWU7Ozs7SUFkRyxlQUFpRDtJQUFqRCx3REFBaUQsb0JBQUE7O0FEWnJFO0lBQUE7UUFRRSxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztLQUlyQztnR0FOWSxzQkFBc0I7K0RBQXRCLHNCQUFzQjtZQ25CbkMsZ0NBQ0U7WUFBQSx5RkFDRTtZQW9CRix5RkFDRTtZQWdCSiwwQkFBZTs7WUF2Q0Qsd0NBQXNCO1lBQ3BCLGVBQThCO1lBQTlCLDZDQUE4QjtZQXFCOUIsZUFBa0M7WUFBbEMsaURBQWtDOztpQ0R0QmxEO0NBeUJDLEFBYkQsSUFhQztTQU5ZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBUGxDLFNBQVM7ZUFBQztnQkFDVCwrQ0FBK0M7Z0JBQy9DLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxNQUFNLEVBQUUsRUFBRTthQUNYOztrQkFLRSxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTm9uRW1wdHlTdHJpbmcsIGlzVGVtcGxhdGVSZWYgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlQ2VsbCB9IGZyb20gJy4vZGF0ZS10YWJsZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tkYXRlLXRhYmxlLWNlbGxdJyxcclxuICBleHBvcnRBczogJ2RhdGVUYWJsZUNlbGwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXRhYmxlLWNlbGwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZUNlbGxDb21wb25lbnQge1xyXG4gIGlzVGVtcGxhdGVSZWYgPSBpc1RlbXBsYXRlUmVmO1xyXG4gIGlzTm9uRW1wdHlTdHJpbmcgPSBpc05vbkVtcHR5U3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwcmVmaXhDbHM6ICdhbnQtY2FsZW5kYXInIHwgJ2FudC1mdWxsY2FsZW5kYXInO1xyXG4gIEBJbnB1dCgpIGNlbGw6IERhdGVDZWxsO1xyXG59XHJcbiIsIjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInByZWZpeENsc1wiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidhbnQtY2FsZW5kYXInXCI+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY2VsbC5kYXRlQ2VsbFJlbmRlcilcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImNlbGwuZGF0ZUNlbGxSZW5kZXI7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxyXG4gICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoY2VsbC5kYXRlQ2VsbFJlbmRlcilcIj5cclxuICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImNlbGwuZGF0ZUNlbGxSZW5kZXJcIj48L3NwYW4+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZGF0ZVwiXHJcbiAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cImNlbGwuaXNTZWxlY3RlZFwiXHJcbiAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImNlbGwuaXNEaXNhYmxlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3sgY2VsbC5jb250ZW50IH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2FudC1mdWxsY2FsZW5kYXInXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZ1bGxjYWxlbmRhci1kYXRlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjZWxsLmRhdGVGdWxsQ2VsbFJlbmRlcjsgZWxzZSBkZWZhdWx0Q2VsbFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbC5kYXRlRnVsbENlbGxSZW5kZXI7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxyXG4gICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdENlbGw+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS12YWx1ZVwiPnt7IGNlbGwuY29udGVudCB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJjZWxsLmRhdGVDZWxsUmVuZGVyXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY29udGVudFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImNlbGwuZGF0ZUNlbGxSZW5kZXI7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxyXG4gICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=