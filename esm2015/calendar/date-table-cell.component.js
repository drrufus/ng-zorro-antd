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
const _c0 = ["date-table-cell", ""];
function DateTableCellComponent_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
function DateTableCellComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DateTableCellComponent_ng_container_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1967 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1967.cell.dateCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r1967.cell.value));
} }
function DateTableCellComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1968 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1968.cell.dateCellRender, i0.ɵɵsanitizeHtml);
} }
function DateTableCellComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1969 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r1969.prefixCls, "-date");
    i0.ɵɵattribute("aria-selected", ctx_r1969.cell.isSelected)("aria-disabled", ctx_r1969.cell.isDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1969.cell.content, " ");
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
    const ctx_r1965 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1965.isTemplateRef(ctx_r1965.cell.dateCellRender));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1965.isNonEmptyString(ctx_r1965.cell.dateCellRender));
} }
function DateTableCellComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateTableCellComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DateTableCellComponent_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1971 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1971.cell.dateFullCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r1971.cell.value));
} }
function DateTableCellComponent_ng_container_2_ng_template_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateTableCellComponent_ng_container_2_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, DateTableCellComponent_ng_container_2_ng_template_3_div_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1975 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("", ctx_r1975.prefixCls, "-content");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1975.cell.dateCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c1, ctx_r1975.cell.value));
} }
function DateTableCellComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DateTableCellComponent_ng_container_2_ng_template_3_div_2_Template, 2, 7, "div", 8);
} if (rf & 2) {
    const ctx_r1973 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r1973.prefixCls, "-value");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1973.cell.content);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1973.cell.dateCellRender);
} }
function DateTableCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, DateTableCellComponent_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 6);
    i0.ɵɵtemplate(3, DateTableCellComponent_ng_container_2_ng_template_3_Template, 3, 5, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r1972 = i0.ɵɵreference(4);
    const ctx_r1966 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1966.cell.dateFullCellRender)("ngIfElse", _r1972);
} }
export class DateTableCellComponent {
    constructor() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJkYXRlLXRhYmxlLWNlbGwuY29tcG9uZW50LnRzIiwiZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7SUNMN0Qsd0JBRWdCOzs7O0lBSGxCLDZCQUNFO0lBQUEsdUhBRUM7SUFDSCwwQkFBZTs7O0lBRlgsZUFBMkU7SUFBM0UsZ0VBQTJFLDZFQUFBOzs7SUFHL0UsNkJBQ0U7SUFBQSwwQkFBK0M7SUFDakQsMEJBQWU7OztJQURQLGVBQWlDO0lBQWpDLDRFQUFpQzs7O0lBRXpDLDZCQUNFO0lBQUEsMkJBS0U7SUFBQSxZQUNGO0lBQUEsaUJBQU07SUFDUiwwQkFBZTs7O0lBTlgsZUFBNEI7SUFBNUIsMkRBQTRCO0lBQzVCLDBEQUFzQyw0Q0FBQTtJQUd0QyxlQUNGO0lBREUsdURBQ0Y7OztJQWpCTiw2QkFDRTtJQUFBLGdDQUNFO0lBQUEsd0dBQ0U7SUFJRix3R0FDRTtJQUVGLHdHQUNFO0lBUUosMEJBQWU7SUFDakIsMEJBQWU7OztJQW5CQyxlQUFpQjtJQUFqQiwrQkFBaUI7SUFDZixlQUFrRDtJQUFsRCxxRkFBa0Q7SUFLbEQsZUFBcUQ7SUFBckQsd0ZBQXFEOzs7SUFpQmpFLHdCQUVnQjs7O0lBSGxCLDZCQUNFO0lBQUEsdUhBRUM7SUFDSCwwQkFBZTs7O0lBRlgsZUFBK0U7SUFBL0Usb0VBQStFLDZFQUFBOzs7SUFNL0Usd0JBRWdCOzs7SUFIbEIsMkJBQ0U7SUFBQSw0SEFFQztJQUNILGlCQUFNOzs7SUFKMkIsOERBQStCO0lBRTVELGVBQTJFO0lBQTNFLGdFQUEyRSw2RUFBQTs7O0lBSC9FLDJCQUFtQztJQUFBLFlBQWtCO0lBQUEsaUJBQU07SUFDM0Qsb0dBQ0U7OztJQUZHLDREQUE2QjtJQUFDLGVBQWtCO0lBQWxCLDRDQUFrQjtJQUNoRCxlQUEyQjtJQUEzQixvREFBMkI7OztJQVR0Qyw2QkFDRTtJQUFBLDhCQUNFO0lBQUEsd0dBQ0U7SUFJRix1SUFDRTtJQU9KLGlCQUFNO0lBQ1IsMEJBQWU7Ozs7SUFkRyxlQUFpRDtJQUFqRCx3REFBaUQsb0JBQUE7O0FETHJFLE1BQU0sT0FBTyxzQkFBc0I7SUFQbkM7UUFRRSxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztLQUlyQzs7NEZBTlksc0JBQXNCOzJEQUF0QixzQkFBc0I7UUNuQm5DLGdDQUNFO1FBQUEseUZBQ0U7UUFvQkYseUZBQ0U7UUFnQkosMEJBQWU7O1FBdkNELHdDQUFzQjtRQUNwQixlQUE4QjtRQUE5Qiw2Q0FBOEI7UUFxQjlCLGVBQWtDO1FBQWxDLGlEQUFrQzs7a0RESHJDLHNCQUFzQjtjQVBsQyxTQUFTO2VBQUM7Z0JBQ1QsK0NBQStDO2dCQUMvQyxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsTUFBTSxFQUFFLEVBQUU7YUFDWDs7a0JBS0UsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc05vbkVtcHR5U3RyaW5nLCBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUNlbGwgfSBmcm9tICcuL2RhdGUtdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbZGF0ZS10YWJsZS1jZWxsXScsXHJcbiAgZXhwb3J0QXM6ICdkYXRlVGFibGVDZWxsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDZWxsQ29tcG9uZW50IHtcclxuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcclxuICBpc05vbkVtcHR5U3RyaW5nID0gaXNOb25FbXB0eVN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcHJlZml4Q2xzOiAnYW50LWNhbGVuZGFyJyB8ICdhbnQtZnVsbGNhbGVuZGFyJztcclxuICBASW5wdXQoKSBjZWxsOiBEYXRlQ2VsbDtcclxufVxyXG4iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJwcmVmaXhDbHNcIj5cclxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYW50LWNhbGVuZGFyJ1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGNlbGwuZGF0ZUNlbGxSZW5kZXIpXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsLmRhdGVDZWxsUmVuZGVyOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY2VsbC52YWx1ZSB9XCJcclxuICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGNlbGwuZGF0ZUNlbGxSZW5kZXIpXCI+XHJcbiAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJjZWxsLmRhdGVDZWxsUmVuZGVyXCI+PC9zcGFuPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGVcIlxyXG4gICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJjZWxsLmlzU2VsZWN0ZWRcIlxyXG4gICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJjZWxsLmlzRGlzYWJsZWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IGNlbGwuY29udGVudCB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidhbnQtZnVsbGNhbGVuZGFyJ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1mdWxsY2FsZW5kYXItZGF0ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2VsbC5kYXRlRnVsbENlbGxSZW5kZXI7IGVsc2UgZGVmYXVsdENlbGxcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImNlbGwuZGF0ZUZ1bGxDZWxsUmVuZGVyOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY2VsbC52YWx1ZSB9XCJcclxuICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRDZWxsPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tdmFsdWVcIj57eyBjZWxsLmNvbnRlbnQgfX08L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY2VsbC5kYXRlQ2VsbFJlbmRlclwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsLmRhdGVDZWxsUmVuZGVyOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY2VsbC52YWx1ZSB9XCJcclxuICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19