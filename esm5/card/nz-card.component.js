import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzCardGridDirective } from './nz-card-grid.directive';
import { NzCardTabComponent } from './nz-card-tab.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "./nz-card-loading.component";
function NzCardComponent_div_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r98 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r98.nzTitle);
} }
function NzCardComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, NzCardComponent_div_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r95 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r95.nzTitle);
} }
function NzCardComponent_div_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r99 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r99.nzExtra);
} }
function NzCardComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, NzCardComponent_div_0_div_3_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r96 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r96.nzExtra);
} }
function NzCardComponent_div_0_ng_container_4_ng_template_1_Template(rf, ctx) { }
function NzCardComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzCardComponent_div_0_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r97 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r97.tab.template);
} }
function NzCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵtemplate(2, NzCardComponent_div_0_div_2_Template, 2, 1, "div", 7);
    i0.ɵɵtemplate(3, NzCardComponent_div_0_div_3_Template, 2, 1, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, NzCardComponent_div_0_ng_container_4_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r90 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r90.nzTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r90.nzExtra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r90.tab);
} }
function NzCardComponent_div_1_ng_template_1_Template(rf, ctx) { }
function NzCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, NzCardComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r91 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r91.nzCover);
} }
function NzCardComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function NzCardComponent_nz_card_loading_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-card-loading");
} }
function NzCardComponent_ul_5_li_1_ng_template_2_Template(rf, ctx) { }
function NzCardComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtemplate(2, NzCardComponent_ul_5_li_1_ng_template_2_Template, 0, 0, "ng-template", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var action_r103 = ctx.$implicit;
    var ctx_r102 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", 100 / ctx_r102.nzActions.length, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", action_r103);
} }
function NzCardComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 14);
    i0.ɵɵtemplate(1, NzCardComponent_ul_5_li_1_Template, 3, 2, "li", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r94 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r94.nzActions);
} }
var _c0 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'card';
var NzCardComponent = /** @class */ (function () {
    function NzCardComponent(nzConfigService, renderer, elementRef) {
        this.nzConfigService = nzConfigService;
        this.nzLoading = false;
        this.nzActions = [];
        renderer.addClass(elementRef.nativeElement, 'ant-card');
    }
    /** @nocollapse */ NzCardComponent.ɵfac = function NzCardComponent_Factory(t) { return new (t || NzCardComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ NzCardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCardComponent, selectors: [["nz-card"]], contentQueries: function NzCardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzCardTabComponent, true);
            i0.ɵɵcontentQuery(dirIndex, NzCardGridDirective, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tab = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.grids = _t);
        } }, hostBindings: function NzCardComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(7);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-card-loading", ctx.nzLoading)("ant-card-bordered", ctx.nzBordered)("ant-card-hoverable", ctx.nzHoverable)("ant-card-small", ctx.nzSize === "small")("ant-card-contain-grid", ctx.grids && ctx.grids.length)("ant-card-type-inner", ctx.nzType === "inner")("ant-card-contain-tabs", !!ctx.tab);
        } }, inputs: { nzBordered: "nzBordered", nzLoading: "nzLoading", nzHoverable: "nzHoverable", nzBodyStyle: "nzBodyStyle", nzCover: "nzCover", nzActions: "nzActions", nzType: "nzType", nzSize: "nzSize", nzTitle: "nzTitle", nzExtra: "nzExtra" }, exportAs: ["nzCard"], ngContentSelectors: _c0, decls: 6, vars: 6, consts: [["class", "ant-card-head", 4, "ngIf"], ["class", "ant-card-cover", 4, "ngIf"], [1, "ant-card-body", 3, "ngStyle"], [4, "ngIf"], ["class", "ant-card-actions", 4, "ngIf"], [1, "ant-card-head"], [1, "ant-card-head-wrapper"], ["class", "ant-card-head-title", 4, "ngIf"], ["class", "ant-card-extra", 4, "ngIf"], [1, "ant-card-head-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-extra"], [3, "ngTemplateOutlet"], [1, "ant-card-cover"], [1, "ant-card-actions"], [3, "width", 4, "ngFor", "ngForOf"]], template: function NzCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, NzCardComponent_div_0_Template, 5, 3, "div", 0);
            i0.ɵɵtemplate(1, NzCardComponent_div_1_Template, 2, 1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, NzCardComponent_ng_container_3_Template, 2, 0, "ng-container", 3);
            i0.ɵɵtemplate(4, NzCardComponent_nz_card_loading_4_Template, 1, 0, "nz-card-loading", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, NzCardComponent_ul_5_Template, 2, 1, "ul", 4);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzExtra || ctx.tab);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzCover);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", ctx.nzBodyStyle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.nzLoading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzLoading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzActions.length);
        } }, directives: [i2.NgIf, i2.NgStyle, i1.NzStringTemplateOutletDirective, i2.NgTemplateOutlet, i3.NzCardLoadingComponent, i2.NgForOf], styles: ["\n      nz-card {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzBordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCardComponent.prototype, "nzLoading", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzHoverable", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", String)
    ], NzCardComponent.prototype, "nzSize", void 0);
    return NzCardComponent;
}());
export { NzCardComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCardComponent, [{
        type: Component,
        args: [{
                selector: 'nz-card',
                exportAs: 'nzCard',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-card.component.html',
                styles: [
                    "\n      nz-card {\n        display: block;\n      }\n    "
                ],
                host: {
                    '[class.ant-card-loading]': 'nzLoading',
                    '[class.ant-card-bordered]': 'nzBordered',
                    '[class.ant-card-hoverable]': 'nzHoverable',
                    '[class.ant-card-small]': 'nzSize === "small"',
                    '[class.ant-card-contain-grid]': 'grids && grids.length',
                    '[class.ant-card-type-inner]': 'nzType === "inner"',
                    '[class.ant-card-contain-tabs]': '!!tab'
                }
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { nzBordered: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzHoverable: [{
            type: Input
        }], nzBodyStyle: [{
            type: Input
        }], nzCover: [{
            type: Input
        }], nzActions: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], tab: [{
            type: ContentChild,
            args: [NzCardTabComponent, { static: false }]
        }], grids: [{
            type: ContentChildren,
            args: [NzCardGridDirective]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhcmQvIiwic291cmNlcyI6WyJuei1jYXJkLmNvbXBvbmVudC50cyIsIm56LWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQWdCLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7SUNuQnZELDZCQUFnRDtJQUFBLFlBQWE7SUFBQSwwQkFBZTs7O0lBQTVCLGVBQWE7SUFBYixxQ0FBYTs7O0lBRC9ELDhCQUNFO0lBQUEsK0ZBQWdEO0lBQ2xELGlCQUFNOzs7SUFEVSxlQUFpQztJQUFqQyx3REFBaUM7OztJQUcvQyw2QkFBZ0Q7SUFBQSxZQUFhO0lBQUEsMEJBQWU7OztJQUE1QixlQUFhO0lBQWIscUNBQWE7OztJQUQvRCwrQkFDRTtJQUFBLCtGQUFnRDtJQUNsRCxpQkFBTTs7O0lBRFUsZUFBaUM7SUFBakMsd0RBQWlDOzs7O0lBR25ELDZCQUNFO0lBQUEsc0dBQStDO0lBQ2pELDBCQUFlOzs7SUFEQSxlQUFpQztJQUFqQyx1REFBaUM7OztJQVZsRCw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsc0VBQ0U7SUFFRixzRUFDRTtJQUVKLGlCQUFNO0lBQ04sd0ZBQ0U7SUFFSixpQkFBTTs7O0lBVitCLGVBQWU7SUFBZixzQ0FBZTtJQUdwQixlQUFlO0lBQWYsc0NBQWU7SUFJL0IsZUFBVztJQUFYLGtDQUFXOzs7O0lBSTNCLCtCQUNFO0lBQUEsdUZBQTBDO0lBQzVDLGlCQUFNOzs7SUFEUyxlQUE0QjtJQUE1QixrREFBNEI7OztJQUd6Qyw2QkFDRTtJQUFBLGtCQUFZO0lBQ2QsMEJBQWU7OztJQUNmLGtDQUFxRDs7OztJQUdyRCwwQkFDRTtJQUFBLDRCQUFNO0lBQUEsMkZBQXlDO0lBQWMsaUJBQU87SUFDdEUsaUJBQUs7Ozs7SUFGZ0MsNkRBQXdDO0lBQ3hELGVBQTJCO0lBQTNCLDhDQUEyQjs7O0lBRmxELDhCQUNFO0lBQUEsb0VBQ0U7SUFFSixpQkFBSzs7O0lBSEMsZUFBZ0M7SUFBaEMsMkNBQWdDOzs7QURDdEMsSUFBTSx3QkFBd0IsR0FBRyxNQUFNLENBQUM7QUFFeEM7SUFzQ0UseUJBQW1CLGVBQWdDLEVBQUUsUUFBbUIsRUFBRSxVQUFzQjtRQUE3RSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFaMUIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUlsQyxjQUFTLEdBQTZCLEVBQUUsQ0FBQztRQVNoRCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztrRkFoQlUsZUFBZTt3REFBZixlQUFlO3dDQVdaLGtCQUFrQjt3Q0FDZixtQkFBbUI7Ozs7Ozs7Ozs7O1lDOUR0QyxnRUFDRTtZQVlGLGdFQUNFO1lBRUYsOEJBQ0U7WUFBQSxrRkFDRTtZQUVGLHdGQUFtQztZQUNyQyxpQkFBTTtZQUNOLDhEQUNFOztZQXZCeUIsNERBQWlDO1lBYWhDLGVBQWU7WUFBZixrQ0FBZTtZQUdoQixlQUF1QjtZQUF2Qix5Q0FBdUI7WUFDbEMsZUFBa0I7WUFBbEIscUNBQWtCO1lBR2YsZUFBaUI7WUFBakIsb0NBQWlCO1lBRVAsZUFBd0I7WUFBeEIsMkNBQXdCOztJRDZCa0I7UUFBM0QsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRTs7dURBQXFCO0lBQ2hFO1FBQWYsWUFBWSxFQUFFOztzREFBbUI7SUFDMkI7UUFBNUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRTs7d0RBQXNCO0lBS2pDO1FBQWhELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUM7O21EQUFzQjswQkExRGpGO0NBbUVDLEFBekNELElBeUNDO1NBakJZLGVBQWU7a0RBQWYsZUFBZTtjQXhCM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxNQUFNLEVBQUU7b0JBQ04sMkRBSUM7aUJBQ0Y7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLDBCQUEwQixFQUFFLFdBQVc7b0JBQ3ZDLDJCQUEyQixFQUFFLFlBQVk7b0JBQ3pDLDRCQUE0QixFQUFFLGFBQWE7b0JBQzNDLHdCQUF3QixFQUFFLG9CQUFvQjtvQkFDOUMsK0JBQStCLEVBQUUsdUJBQXVCO29CQUN4RCw2QkFBNkIsRUFBRSxvQkFBb0I7b0JBQ25ELCtCQUErQixFQUFFLE9BQU87aUJBQ3pDO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLFlBQVk7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFDbEQsZUFBZTttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpDb25maWdTZXJ2aWNlLCBOelNpemVEU1R5cGUsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNhcmRHcmlkRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jYXJkLWdyaWQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpDYXJkVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYXJkLXRhYi5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2NhcmQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1jYXJkJyxcclxuICBleHBvcnRBczogJ256Q2FyZCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWxvYWRpbmddJzogJ256TG9hZGluZycsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWJvcmRlcmVkXSc6ICduekJvcmRlcmVkJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtaG92ZXJhYmxlXSc6ICduekhvdmVyYWJsZScsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLXNtYWxsXSc6ICduelNpemUgPT09IFwic21hbGxcIicsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWNvbnRhaW4tZ3JpZF0nOiAnZ3JpZHMgJiYgZ3JpZHMubGVuZ3RoJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtdHlwZS1pbm5lcl0nOiAnbnpUeXBlID09PSBcImlubmVyXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1jb250YWluLXRhYnNdJzogJyEhdGFiJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FyZENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgbnpCb3JkZXJlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56SG92ZXJhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56Qm9keVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIEBJbnB1dCgpIG56Q292ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56QWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XHJcbiAgQElucHV0KCkgbnpUeXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpTaXplRFNUeXBlO1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56RXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBDb250ZW50Q2hpbGQoTnpDYXJkVGFiQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgdGFiOiBOekNhcmRUYWJDb21wb25lbnQ7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOekNhcmRHcmlkRGlyZWN0aXZlKSBncmlkczogUXVlcnlMaXN0PE56Q2FyZEdyaWREaXJlY3RpdmU+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJkJyk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtY2FyZC1oZWFkXCIgKm5nSWY9XCJuelRpdGxlIHx8IG56RXh0cmEgfHwgdGFiXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWhlYWQtd3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWhlYWQtdGl0bGVcIiAqbmdJZj1cIm56VGl0bGVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIj57eyBuelRpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1leHRyYVwiICpuZ0lmPVwibnpFeHRyYVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpFeHRyYVwiPnt7IG56RXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0YWJcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0YWIudGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImFudC1jYXJkLWNvdmVyXCIgKm5nSWY9XCJuekNvdmVyXCI+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56Q292ZXJcIj48L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImFudC1jYXJkLWJvZHlcIiBbbmdTdHlsZV09XCJuekJvZHlTdHlsZVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpMb2FkaW5nXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG56LWNhcmQtbG9hZGluZyAqbmdJZj1cIm56TG9hZGluZ1wiPjwvbnotY2FyZC1sb2FkaW5nPlxyXG48L2Rpdj5cclxuPHVsIGNsYXNzPVwiYW50LWNhcmQtYWN0aW9uc1wiICpuZ0lmPVwibnpBY3Rpb25zLmxlbmd0aFwiPlxyXG4gIDxsaSAqbmdGb3I9XCJsZXQgYWN0aW9uIG9mIG56QWN0aW9uc1wiIFtzdHlsZS53aWR0aC4lXT1cIjEwMCAvIG56QWN0aW9ucy5sZW5ndGhcIj5cclxuICAgIDxzcGFuPjxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhY3Rpb25cIj48L25nLXRlbXBsYXRlPjwvc3Bhbj5cclxuICA8L2xpPlxyXG48L3VsPlxyXG4iXX0=