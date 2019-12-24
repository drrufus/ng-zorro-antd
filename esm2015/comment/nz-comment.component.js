/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { NzCommentActionComponent as CommentAction } from './nz-comment-cells';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "./nz-comment-cells";
const _c0 = [1, "ant-comment"];
function NzCommentComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r154 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r154.nzAuthor);
} }
function NzCommentComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtemplate(1, NzCommentComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r151 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r151.nzAuthor);
} }
function NzCommentComponent_span_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r155 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r155.nzDatetime);
} }
function NzCommentComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtemplate(1, NzCommentComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r152 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r152.nzDatetime);
} }
function NzCommentComponent_ul_8_li_1_ng_template_2_Template(rf, ctx) { }
function NzCommentComponent_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtemplate(2, NzCommentComponent_ul_8_li_1_ng_template_2_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r157 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzCommentActionHost", action_r157.content);
} }
function NzCommentComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 11);
    i0.ɵɵtemplate(1, NzCommentComponent_ul_8_li_1_Template, 3, 1, "li", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r153 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r153.actions);
} }
const _c1 = [[["nz-avatar", "nz-comment-avatar", ""]], [["nz-comment-content"]], "*"];
const _c2 = ["nz-avatar[nz-comment-avatar]", "nz-comment-content", "*"];
export class NzCommentComponent {
    constructor() {
    }
}
/** @nocollapse */ NzCommentComponent.ɵfac = function NzCommentComponent_Factory(t) { return new (t || NzCommentComponent)(); };
/** @nocollapse */ NzCommentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCommentComponent, selectors: [["nz-comment"]], contentQueries: function NzCommentComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CommentAction, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.actions = _t);
    } }, hostBindings: function NzCommentComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵelementHostAttrs(_c0);
    } }, inputs: { nzAuthor: "nzAuthor", nzDatetime: "nzDatetime" }, exportAs: ["nzComment"], ngContentSelectors: _c2, decls: 11, vars: 3, consts: [[1, "ant-comment-inner"], [1, "ant-comment-avatar"], [1, "ant-comment-content"], [1, "ant-comment-content-author"], ["class", "ant-comment-content-author-name", 4, "ngIf"], ["class", "ant-comment-content-author-time", 4, "ngIf"], ["class", "ant-comment-actions", 4, "ngIf"], [1, "ant-comment-nested"], [1, "ant-comment-content-author-name"], [4, "nzStringTemplateOutlet"], [1, "ant-comment-content-author-time"], [1, "ant-comment-actions"], [4, "ngFor", "ngForOf"], [3, "nzCommentActionHost"]], template: function NzCommentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵtemplate(5, NzCommentComponent_span_5_Template, 2, 1, "span", 4);
        i0.ɵɵtemplate(6, NzCommentComponent_span_6_Template, 2, 1, "span", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(7, 1);
        i0.ɵɵtemplate(8, NzCommentComponent_ul_8_Template, 2, 1, "ul", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵprojection(10, 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.nzAuthor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzDatetime);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.actions == null ? null : ctx.actions.length);
    } }, directives: [i1.NgIf, i2.NzStringTemplateOutletDirective, i1.NgForOf, i3.NzCommentActionHostDirective], styles: ["\n      nz-comment {\n        display: block;\n      }\n\n      nz-comment-content {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCommentComponent, [{
        type: Component,
        args: [{
                selector: 'nz-comment',
                exportAs: 'nzComment',
                templateUrl: './nz-comment.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ant-comment'
                },
                styles: [
                    `
      nz-comment {
        display: block;
      }

      nz-comment-content {
        display: block;
      }
    `
                ]
            }]
    }], function () { return []; }, { nzAuthor: [{
            type: Input
        }], nzDatetime: [{
            type: Input
        }], actions: [{
            type: ContentChildren,
            args: [CommentAction]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvbW1lbnQvIiwic291cmNlcyI6WyJuei1jb21tZW50LmNvbXBvbmVudC50cyIsIm56LWNvbW1lbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0SSxPQUFPLEVBQUUsd0JBQXdCLElBQUksYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7SUNIdkUsNkJBQWlEO0lBQUEsWUFBYztJQUFBLDBCQUFlOzs7SUFBN0IsZUFBYztJQUFkLHVDQUFjOzs7SUFEakUsK0JBQ0U7SUFBQSw0RkFBaUQ7SUFDbkQsaUJBQU87OztJQURTLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBR2hELDZCQUFtRDtJQUFBLFlBQWdCO0lBQUEsMEJBQWU7OztJQUEvQixlQUFnQjtJQUFoQix5Q0FBZ0I7OztJQURyRSxnQ0FDRTtJQUFBLDRGQUFtRDtJQUNyRCxpQkFBTzs7O0lBRFMsZUFBb0M7SUFBcEMsNERBQW9DOzs7O0lBS3BELDBCQUNFO0lBQUEsNEJBQU07SUFBQSw4RkFBb0Q7SUFBYyxpQkFBTztJQUNqRixpQkFBSzs7O0lBRGdCLGVBQXNDO0lBQXRDLHlEQUFzQzs7O0lBRjdELDhCQUNFO0lBQUEsdUVBQ0U7SUFFSixpQkFBSzs7O0lBSEMsZUFBOEI7SUFBOUIsMENBQThCOzs7O0FEa0J4QyxNQUFNLE9BQU8sa0JBQWtCO0lBSzdCO0lBQWUsQ0FBQzs7b0ZBTEwsa0JBQWtCO3VEQUFsQixrQkFBa0I7b0NBSVosYUFBYTs7Ozs7Ozs7UUNyQ2hDLDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSxrQkFBa0Q7UUFDcEQsaUJBQU07UUFDTiw4QkFDRTtRQUFBLDhCQUNFO1FBQUEscUVBQ0U7UUFFRixxRUFDRTtRQUVKLGlCQUFNO1FBQ04scUJBQXdDO1FBQ3hDLGlFQUNFO1FBSUosaUJBQU07UUFDUixpQkFBTTtRQUNOLDhCQUNFO1FBQUEsc0JBQVk7UUFDZCxpQkFBTTs7UUFqQk0sZUFBZ0I7UUFBaEIsbUNBQWdCO1FBR2hCLGVBQWtCO1FBQWxCLHFDQUFrQjtRQUtNLGVBQXVCO1FBQXZCLHNFQUF1Qjs7a0REbUI5QyxrQkFBa0I7Y0FyQjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxhQUFhO2lCQUNyQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ047Ozs7Ozs7O0tBUUM7aUJBQ0Y7YUFDRjs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsZUFBZTttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50IGFzIENvbW1lbnRBY3Rpb24gfSBmcm9tICcuL256LWNvbW1lbnQtY2VsbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1jb21tZW50JyxcclxuICBleHBvcnRBczogJ256Q29tbWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvbW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtY29tbWVudCdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1jb21tZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgbnotY29tbWVudC1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29tbWVudENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbnpBdXRob3I6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56RGF0ZXRpbWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKENvbW1lbnRBY3Rpb24pIGFjdGlvbnM6IFF1ZXJ5TGlzdDxDb21tZW50QWN0aW9uPjtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1jb21tZW50LWlubmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1jb21tZW50LWF2YXRhclwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotYXZhdGFyW256LWNvbW1lbnQtYXZhdGFyXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWNvbW1lbnQtY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb21tZW50LWNvbnRlbnQtYXV0aG9yXCI+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwibnpBdXRob3JcIiBjbGFzcz1cImFudC1jb21tZW50LWNvbnRlbnQtYXV0aG9yLW5hbWVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpBdXRob3JcIj57eyBuekF1dGhvciB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwibnpEYXRldGltZVwiIGNsYXNzPVwiYW50LWNvbW1lbnQtY29udGVudC1hdXRob3ItdGltZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekRhdGV0aW1lXCI+e3sgbnpEYXRldGltZSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LWNvbW1lbnQtY29udGVudFwiPjwvbmctY29udGVudD5cclxuICAgIDx1bCBjbGFzcz1cImFudC1jb21tZW50LWFjdGlvbnNcIiAqbmdJZj1cImFjdGlvbnM/Lmxlbmd0aFwiPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBhY3Rpb25zXCI+XHJcbiAgICAgICAgPHNwYW4+PG5nLXRlbXBsYXRlIFtuekNvbW1lbnRBY3Rpb25Ib3N0XT1cImFjdGlvbi5jb250ZW50XCI+PC9uZy10ZW1wbGF0ZT48L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImFudC1jb21tZW50LW5lc3RlZFwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==