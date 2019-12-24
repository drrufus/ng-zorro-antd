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
var _c0 = [1, "ant-comment"];
function NzCommentComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r163 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r163.nzAuthor);
} }
function NzCommentComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtemplate(1, NzCommentComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r160 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r160.nzAuthor);
} }
function NzCommentComponent_span_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r164 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r164.nzDatetime);
} }
function NzCommentComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtemplate(1, NzCommentComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r161 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r161.nzDatetime);
} }
function NzCommentComponent_ul_8_li_1_ng_template_2_Template(rf, ctx) { }
function NzCommentComponent_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtemplate(2, NzCommentComponent_ul_8_li_1_ng_template_2_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var action_r166 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzCommentActionHost", action_r166.content);
} }
function NzCommentComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 11);
    i0.ɵɵtemplate(1, NzCommentComponent_ul_8_li_1_Template, 3, 1, "li", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r162 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r162.actions);
} }
var _c1 = [[["nz-avatar", "nz-comment-avatar", ""]], [["nz-comment-content"]], "*"];
var _c2 = ["nz-avatar[nz-comment-avatar]", "nz-comment-content", "*"];
var NzCommentComponent = /** @class */ (function () {
    function NzCommentComponent() {
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
    return NzCommentComponent;
}());
export { NzCommentComponent };
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
                    "\n      nz-comment {\n        display: block;\n      }\n\n      nz-comment-content {\n        display: block;\n      }\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvbW1lbnQvIiwic291cmNlcyI6WyJuei1jb21tZW50LmNvbXBvbmVudC50cyIsIm56LWNvbW1lbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0SSxPQUFPLEVBQUUsd0JBQXdCLElBQUksYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7SUNIdkUsNkJBQWlEO0lBQUEsWUFBYztJQUFBLDBCQUFlOzs7SUFBN0IsZUFBYztJQUFkLHVDQUFjOzs7SUFEakUsK0JBQ0U7SUFBQSw0RkFBaUQ7SUFDbkQsaUJBQU87OztJQURTLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBR2hELDZCQUFtRDtJQUFBLFlBQWdCO0lBQUEsMEJBQWU7OztJQUEvQixlQUFnQjtJQUFoQix5Q0FBZ0I7OztJQURyRSxnQ0FDRTtJQUFBLDRGQUFtRDtJQUNyRCxpQkFBTzs7O0lBRFMsZUFBb0M7SUFBcEMsNERBQW9DOzs7O0lBS3BELDBCQUNFO0lBQUEsNEJBQU07SUFBQSw4RkFBb0Q7SUFBYyxpQkFBTztJQUNqRixpQkFBSzs7O0lBRGdCLGVBQXNDO0lBQXRDLHlEQUFzQzs7O0lBRjdELDhCQUNFO0lBQUEsdUVBQ0U7SUFFSixpQkFBSzs7O0lBSEMsZUFBOEI7SUFBOUIsMENBQThCOzs7O0FESHhDO0lBMEJFO0lBQWUsQ0FBQzt3RkFMTCxrQkFBa0I7MkRBQWxCLGtCQUFrQjt3Q0FJWixhQUFhOzs7Ozs7OztZQ3JDaEMsOEJBQ0U7WUFBQSw4QkFDRTtZQUFBLGtCQUFrRDtZQUNwRCxpQkFBTTtZQUNOLDhCQUNFO1lBQUEsOEJBQ0U7WUFBQSxxRUFDRTtZQUVGLHFFQUNFO1lBRUosaUJBQU07WUFDTixxQkFBd0M7WUFDeEMsaUVBQ0U7WUFJSixpQkFBTTtZQUNSLGlCQUFNO1lBQ04sOEJBQ0U7WUFBQSxzQkFBWTtZQUNkLGlCQUFNOztZQWpCTSxlQUFnQjtZQUFoQixtQ0FBZ0I7WUFHaEIsZUFBa0I7WUFBbEIscUNBQWtCO1lBS00sZUFBdUI7WUFBdkIsc0VBQXVCOzs2QkRkM0Q7Q0F1Q0MsQUEzQkQsSUEyQkM7U0FOWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQXJCOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGFBQWE7aUJBQ3JCO2dCQUNELE1BQU0sRUFBRTtvQkFDTiw4SEFRQztpQkFDRjthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxlQUFlO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNvbW1lbnRBY3Rpb25Db21wb25lbnQgYXMgQ29tbWVudEFjdGlvbiB9IGZyb20gJy4vbnotY29tbWVudC1jZWxscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWNvbW1lbnQnLFxyXG4gIGV4cG9ydEFzOiAnbnpDb21tZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY29tbWVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1jb21tZW50J1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWNvbW1lbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuei1jb21tZW50LWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb21tZW50Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuekF1dGhvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpEYXRldGltZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29tbWVudEFjdGlvbikgYWN0aW9uczogUXVlcnlMaXN0PENvbW1lbnRBY3Rpb24+O1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LWNvbW1lbnQtaW5uZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWNvbW1lbnQtYXZhdGFyXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuei1hdmF0YXJbbnotY29tbWVudC1hdmF0YXJdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtY29tbWVudC1jb250ZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbW1lbnQtY29udGVudC1hdXRob3JcIj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJuekF1dGhvclwiIGNsYXNzPVwiYW50LWNvbW1lbnQtY29udGVudC1hdXRob3ItbmFtZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekF1dGhvclwiPnt7IG56QXV0aG9yIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJuekRhdGV0aW1lXCIgY2xhc3M9XCJhbnQtY29tbWVudC1jb250ZW50LWF1dGhvci10aW1lXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RGF0ZXRpbWVcIj57eyBuekRhdGV0aW1lIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotY29tbWVudC1jb250ZW50XCI+PC9uZy1jb250ZW50PlxyXG4gICAgPHVsIGNsYXNzPVwiYW50LWNvbW1lbnQtYWN0aW9uc1wiICpuZ0lmPVwiYWN0aW9ucz8ubGVuZ3RoXCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgYWN0aW9uIG9mIGFjdGlvbnNcIj5cclxuICAgICAgICA8c3Bhbj48bmctdGVtcGxhdGUgW256Q29tbWVudEFjdGlvbkhvc3RdPVwiYWN0aW9uLmNvbnRlbnRcIj48L25nLXRlbXBsYXRlPjwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYW50LWNvbW1lbnQtbmVzdGVkXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19