import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderFooterDirective } from './nz-page-header-cells';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "ng-zorro-antd/icon";
var _c0 = [1, "ant-page-header"];
function NzPageHeaderComponent_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} if (rf & 2) {
    var ctx_r634 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzType", ctx_r634.nzBackIcon ? ctx_r634.nzBackIcon : "arrow-left");
} }
function NzPageHeaderComponent_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 10);
} if (rf & 2) {
    var ctx_r635 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r635.nzBackIcon);
} }
function NzPageHeaderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r637 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function NzPageHeaderComponent_div_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r637); var ctx_r636 = i0.ɵɵnextContext(); return ctx_r636.onBack(); });
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵtemplate(2, NzPageHeaderComponent_div_2_i_2_Template, 1, 1, "i", 7);
    i0.ɵɵtemplate(3, NzPageHeaderComponent_div_2_ng_container_3_Template, 1, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r629 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r629.isStringBackIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r629.isTemplateRefBackIcon);
} }
function NzPageHeaderComponent_span_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r638 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r638.nzTitle);
} }
function NzPageHeaderComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtemplate(1, NzPageHeaderComponent_span_4_ng_container_1_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r630 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r630.nzTitle);
} }
function NzPageHeaderComponent_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 6, ["*ngIf", "!nzTitle"]);
} }
function NzPageHeaderComponent_span_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r639 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r639.nzSubtitle);
} }
function NzPageHeaderComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtemplate(1, NzPageHeaderComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r632 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r632.nzSubtitle);
} }
function NzPageHeaderComponent_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 7, ["*ngIf", "!nzSubtitle"]);
} }
var _c1 = [[["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], [["nz-avatar", "nz-page-header-avatar", ""]], [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], [["nz-page-header-content"], ["", "nz-page-header-content", ""]], [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], [["nz-page-header-title"], ["", "nz-page-header-title", ""]], [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]]];
var _c2 = ["nz-breadcrumb[nz-page-header-breadcrumb]", "nz-avatar[nz-page-header-avatar]", "nz-page-header-tags, [nz-page-header-tags]", "nz-page-header-extra, [nz-page-header-extra]", "nz-page-header-content, [nz-page-header-content]", "nz-page-header-footer, [nz-page-header-footer]", "nz-page-header-title, [nz-page-header-title]", "nz-page-header-subtitle, [nz-page-header-subtitle]"];
var NZ_CONFIG_COMPONENT_NAME = 'pageHeader';
var NzPageHeaderComponent = /** @class */ (function () {
    function NzPageHeaderComponent(location, nzConfigService) {
        this.location = location;
        this.nzConfigService = nzConfigService;
        this.isTemplateRefBackIcon = false;
        this.isStringBackIcon = false;
        this.nzBackIcon = null;
        this.nzBack = new EventEmitter();
    }
    NzPageHeaderComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('nzBackIcon')) {
            this.isTemplateRefBackIcon = changes.nzBackIcon.currentValue instanceof TemplateRef;
            this.isStringBackIcon = typeof changes.nzBackIcon.currentValue === 'string';
        }
    };
    NzPageHeaderComponent.prototype.onBack = function () {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            this.location.back();
        }
    };
    /** @nocollapse */ NzPageHeaderComponent.ɵfac = function NzPageHeaderComponent_Factory(t) { return new (t || NzPageHeaderComponent)(i0.ɵɵdirectiveInject(i1.Location), i0.ɵɵdirectiveInject(i2.NzConfigService)); };
    /** @nocollapse */ NzPageHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzPageHeaderComponent, selectors: [["nz-page-header"]], contentQueries: function NzPageHeaderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzPageHeaderFooterDirective, true);
            i0.ɵɵcontentQuery(dirIndex, NzPageHeaderBreadcrumbDirective, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzPageHeaderFooter = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzPageHeaderBreadcrumb = _t.first);
        } }, hostBindings: function NzPageHeaderComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(3);
            i0.ɵɵelementHostAttrs(_c0);
        } if (rf & 2) {
            i0.ɵɵclassProp("has-footer", ctx.nzPageHeaderFooter)("ant-page-header-ghost", ctx.nzGhost)("has-breadcrumb", ctx.nzPageHeaderBreadcrumb);
        } }, inputs: { nzBackIcon: "nzBackIcon", nzTitle: "nzTitle", nzSubtitle: "nzSubtitle", nzGhost: "nzGhost" }, outputs: { nzBack: "nzBack" }, exportAs: ["nzPageHeader"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c2, decls: 12, vars: 5, consts: [[1, "ant-page-header-heading"], ["class", "ant-page-header-back", 3, "click", 4, "ngIf"], ["class", "ant-page-header-heading-title", 4, "ngIf"], [4, "ngIf"], ["class", "ant-page-header-heading-sub-title", 4, "ngIf"], [1, "ant-page-header-back", 3, "click"], ["role", "button", "tabindex", "0", 1, "ant-page-header-back-button"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [3, "ngTemplateOutlet"], [1, "ant-page-header-heading-title"], [4, "nzStringTemplateOutlet"], [1, "ant-page-header-heading-sub-title"]], template: function NzPageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵprojection(0);
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵtemplate(2, NzPageHeaderComponent_div_2_Template, 4, 2, "div", 1);
            i0.ɵɵprojection(3, 1);
            i0.ɵɵtemplate(4, NzPageHeaderComponent_span_4_Template, 2, 1, "span", 2);
            i0.ɵɵtemplate(5, NzPageHeaderComponent_5_Template, 1, 0, undefined, 3);
            i0.ɵɵtemplate(6, NzPageHeaderComponent_span_6_Template, 2, 1, "span", 4);
            i0.ɵɵtemplate(7, NzPageHeaderComponent_7_Template, 1, 0, undefined, 3);
            i0.ɵɵprojection(8, 2);
            i0.ɵɵprojection(9, 3);
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(10, 4);
            i0.ɵɵprojection(11, 5);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.nzBackIcon !== null);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.nzTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.nzTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzSubtitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.nzSubtitle);
        } }, directives: [i1.NgIf, i3.NzIconDirective, i1.NgTemplateOutlet, i2.NzStringTemplateOutletDirective], styles: ["nz-page-header,nz-page-header-content,nz-page-header-footer{display:block}", "\n      .ant-page-header-back-button {\n        border: 0px;\n        background: transparent;\n        padding: 0px;\n        line-height: inherit;\n        display: inline-block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        __metadata("design:type", Boolean)
    ], NzPageHeaderComponent.prototype, "nzGhost", void 0);
    return NzPageHeaderComponent;
}());
export { NzPageHeaderComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzPageHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'nz-page-header',
                exportAs: 'nzPageHeader',
                templateUrl: './nz-page-header.component.html',
                styleUrls: ['./nz-page-header.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ant-page-header',
                    '[class.has-footer]': 'nzPageHeaderFooter',
                    '[class.ant-page-header-ghost]': 'nzGhost',
                    '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb'
                },
                styles: [
                    "\n      .ant-page-header-back-button {\n        border: 0px;\n        background: transparent;\n        padding: 0px;\n        line-height: inherit;\n        display: inline-block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i1.Location }, { type: i2.NzConfigService }]; }, { nzBackIcon: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzSubtitle: [{
            type: Input
        }], nzGhost: [{
            type: Input
        }], nzBack: [{
            type: Output
        }], nzPageHeaderFooter: [{
            type: ContentChild,
            args: [NzPageHeaderFooterDirective, { static: false }]
        }], nzPageHeaderBreadcrumb: [{
            type: ContentChild,
            args: [NzPageHeaderBreadcrumbDirective, { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbIm56LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyIsIm56LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLCtCQUErQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7SUNsQmhHLHVCQUtLOzs7SUFGSCxpRkFBaUQ7OztJQUduRCw0QkFBMkY7OztJQUEvQyxzREFBK0I7Ozs7SUFSL0UsOEJBQ0U7SUFEK0IsNExBQWtCO0lBQ2pELDhCQUNFO0lBQUEsd0VBS0M7SUFDRCw4RkFBNEU7SUFDOUUsaUJBQU07SUFDUixpQkFBTTs7O0lBUEEsZUFBd0I7SUFBeEIsZ0RBQXdCO0lBS1osZUFBNkI7SUFBN0IscURBQTZCOzs7SUFPN0MsNkJBQWdEO0lBQUEsWUFBYTtJQUFBLDBCQUFlOzs7SUFBNUIsZUFBYTtJQUFiLHNDQUFhOzs7SUFEL0QsZ0NBQ0U7SUFBQSxnR0FBZ0Q7SUFDbEQsaUJBQU87OztJQURTLGVBQWlDO0lBQWpDLHlEQUFpQzs7O0lBRWpELDRDQUFtRjs7O0lBR2pGLDZCQUFtRDtJQUFBLFlBQWdCO0lBQUEsMEJBQWU7OztJQUEvQixlQUFnQjtJQUFoQix5Q0FBZ0I7OztJQURyRSxnQ0FDRTtJQUFBLGdHQUFtRDtJQUNyRCxpQkFBTzs7O0lBRFMsZUFBb0M7SUFBcEMsNERBQW9DOzs7SUFFcEQsK0NBR0M7Ozs7QURISCxJQUFNLHdCQUF3QixHQUFHLFlBQVksQ0FBQztBQUU5QztJQXVDRSwrQkFBb0IsUUFBa0IsRUFBUyxlQUFnQztRQUEzRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBYi9FLDBCQUFxQixHQUFHLEtBQUssQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFaEIsZUFBVSxHQUFzQyxJQUFJLENBQUM7UUFJM0MsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFNNkIsQ0FBQztJQUVuRiwyQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksWUFBWSxXQUFXLENBQUM7WUFDcEYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDO1NBQzdFO0lBQ0gsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs4RkE3QlUscUJBQXFCOzhEQUFyQixxQkFBcUI7d0NBVWxCLDJCQUEyQjt3Q0FFM0IsK0JBQStCOzs7Ozs7Ozs7Ozs7WUNqRS9DLGtCQUE4RDtZQUU5RCw4QkFDRTtZQUNBLHNFQUNFO1lBV0YscUJBQXNEO1lBRXRELHdFQUNFO1lBRUYsc0VBQW1GO1lBRW5GLHdFQUNFO1lBRUYsc0VBR0M7WUFDRCxxQkFBZ0U7WUFDaEUscUJBQWtFO1lBQ3BFLGlCQUFNO1lBRU4sc0JBQXNFO1lBQ3RFLHNCQUFvRTs7WUEvQjdELGVBQTJCO1lBQTNCLDhDQUEyQjtZQWNZLGVBQWU7WUFBZixrQ0FBZTtZQUcvQyxlQUFnQjtZQUFoQixtQ0FBZ0I7WUFFb0IsZUFBa0I7WUFBbEIscUNBQWtCO1lBSWhFLGVBQW1CO1lBQW5CLHNDQUFtQjs7SURpQ2dDO1FBQTNDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUM7OzBEQUFrQjtnQ0E1RHhFO0NBbUZDLEFBdkRELElBdURDO1NBOUJZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBekJqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2dCQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixvQkFBb0IsRUFBRSxvQkFBb0I7b0JBQzFDLCtCQUErQixFQUFFLFNBQVM7b0JBQzFDLHdCQUF3QixFQUFFLHdCQUF3QjtpQkFDbkQ7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLHFNQVFDO2lCQUNGO2FBQ0Y7O2tCQUtFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUVOLFlBQVk7bUJBQUMsMkJBQTJCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFFM0QsWUFBWTttQkFBQywrQkFBK0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZSwgTnpQYWdlSGVhZGVyRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1wYWdlLWhlYWRlci1jZWxscyc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAncGFnZUhlYWRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXBhZ2UtaGVhZGVyJyxcclxuICBleHBvcnRBczogJ256UGFnZUhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uei1wYWdlLWhlYWRlci5jb21wb25lbnQubGVzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtcGFnZS1oZWFkZXInLFxyXG4gICAgJ1tjbGFzcy5oYXMtZm9vdGVyXSc6ICduelBhZ2VIZWFkZXJGb290ZXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtcGFnZS1oZWFkZXItZ2hvc3RdJzogJ256R2hvc3QnLFxyXG4gICAgJ1tjbGFzcy5oYXMtYnJlYWRjcnVtYl0nOiAnbnpQYWdlSGVhZGVyQnJlYWRjcnVtYidcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LXBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcclxuICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQYWdlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBpc1RlbXBsYXRlUmVmQmFja0ljb24gPSBmYWxzZTtcclxuICBpc1N0cmluZ0JhY2tJY29uID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56QmFja0ljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpTdWJ0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBuekdob3N0OiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTnpQYWdlSGVhZGVyRm9vdGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpQYWdlSGVhZGVyRm9vdGVyOiBFbGVtZW50UmVmPE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIG56UGFnZUhlYWRlckJyZWFkY3J1bWI6IEVsZW1lbnRSZWY8TnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduekJhY2tJY29uJykpIHtcclxuICAgICAgdGhpcy5pc1RlbXBsYXRlUmVmQmFja0ljb24gPSBjaGFuZ2VzLm56QmFja0ljb24uY3VycmVudFZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgICAgIHRoaXMuaXNTdHJpbmdCYWNrSWNvbiA9IHR5cGVvZiBjaGFuZ2VzLm56QmFja0ljb24uY3VycmVudFZhbHVlID09PSAnc3RyaW5nJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmFjaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMubnpCYWNrLmVtaXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudCBzZWxlY3Q9XCJuei1icmVhZGNydW1iW256LXBhZ2UtaGVhZGVyLWJyZWFkY3J1bWJdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuPGRpdiBjbGFzcz1cImFudC1wYWdlLWhlYWRlci1oZWFkaW5nXCI+XHJcbiAgPCEtLWJhY2stLT5cclxuICA8ZGl2ICpuZ0lmPVwibnpCYWNrSWNvbiAhPT0gbnVsbFwiIChjbGljayk9XCJvbkJhY2soKVwiIGNsYXNzPVwiYW50LXBhZ2UtaGVhZGVyLWJhY2tcIj5cclxuICAgIDxkaXYgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiYW50LXBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCI+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgKm5nSWY9XCJpc1N0cmluZ0JhY2tJY29uXCJcclxuICAgICAgICBuei1pY29uXHJcbiAgICAgICAgW256VHlwZV09XCJuekJhY2tJY29uID8gbnpCYWNrSWNvbiA6ICdhcnJvdy1sZWZ0J1wiXHJcbiAgICAgICAgbnpUaGVtZT1cIm91dGxpbmVcIlxyXG4gICAgICA+PC9pPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNUZW1wbGF0ZVJlZkJhY2tJY29uXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpCYWNrSWNvblwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLWF2YXRhci0tPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LWF2YXRhcltuei1wYWdlLWhlYWRlci1hdmF0YXJdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwhLS10aXRsZS0tPlxyXG4gIDxzcGFuIGNsYXNzPVwiYW50LXBhZ2UtaGVhZGVyLWhlYWRpbmctdGl0bGVcIiAqbmdJZj1cIm56VGl0bGVcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+e3sgbnpUaXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvc3Bhbj5cclxuICA8bmctY29udGVudCAqbmdJZj1cIiFuelRpdGxlXCIgc2VsZWN0PVwibnotcGFnZS1oZWFkZXItdGl0bGUsIFtuei1wYWdlLWhlYWRlci10aXRsZV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLXN1YnRpdGxlLS0+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtcGFnZS1oZWFkZXItaGVhZGluZy1zdWItdGl0bGVcIiAqbmdJZj1cIm56U3VidGl0bGVcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelN1YnRpdGxlXCI+e3sgbnpTdWJ0aXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvc3Bhbj5cclxuICA8bmctY29udGVudFxyXG4gICAgKm5nSWY9XCIhbnpTdWJ0aXRsZVwiXHJcbiAgICBzZWxlY3Q9XCJuei1wYWdlLWhlYWRlci1zdWJ0aXRsZSwgW256LXBhZ2UtaGVhZGVyLXN1YnRpdGxlXVwiXHJcbiAgPjwvbmctY29udGVudD5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJuei1wYWdlLWhlYWRlci10YWdzLCBbbnotcGFnZS1oZWFkZXItdGFnc11cIj48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotcGFnZS1oZWFkZXItZXh0cmEsIFtuei1wYWdlLWhlYWRlci1leHRyYV1cIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotcGFnZS1oZWFkZXItY29udGVudCwgW256LXBhZ2UtaGVhZGVyLWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxyXG48bmctY29udGVudCBzZWxlY3Q9XCJuei1wYWdlLWhlYWRlci1mb290ZXIsIFtuei1wYWdlLWhlYWRlci1mb290ZXJdXCI+PC9uZy1jb250ZW50PlxyXG4iXX0=