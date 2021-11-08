/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/core';
import * as ɵngcc3 from 'ng-zorro-antd/icon';

function NzPageHeaderComponent_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 9);
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzType", ctx_r5.nzBackIcon ? ctx_r5.nzBackIcon : "arrow-left");
} }
function NzPageHeaderComponent_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 10);
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.nzBackIcon);
} }
function NzPageHeaderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("click", function NzPageHeaderComponent_div_2_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onBack(); });
    ɵngcc0.ɵɵelementStart(1, "div", 6);
    ɵngcc0.ɵɵtemplate(2, NzPageHeaderComponent_div_2_i_2_Template, 1, 1, "i", 7);
    ɵngcc0.ɵɵtemplate(3, NzPageHeaderComponent_div_2_ng_container_3_Template, 1, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isStringBackIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isTemplateRefBackIcon);
} }
function NzPageHeaderComponent_span_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.nzTitle);
} }
function NzPageHeaderComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵtemplate(1, NzPageHeaderComponent_span_4_ng_container_1_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzTitle);
} }
function NzPageHeaderComponent_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 6, ["*ngIf", "!nzTitle"]);
} }
function NzPageHeaderComponent_span_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r10.nzSubtitle);
} }
function NzPageHeaderComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 13);
    ɵngcc0.ɵɵtemplate(1, NzPageHeaderComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzSubtitle);
} }
function NzPageHeaderComponent_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 7, ["*ngIf", "!nzSubtitle"]);
} }
var _c0 = [[["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], [["nz-avatar", "nz-page-header-avatar", ""]], [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], [["nz-page-header-content"], ["", "nz-page-header-content", ""]], [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], [["nz-page-header-title"], ["", "nz-page-header-title", ""]], [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]]];
var _c1 = ["nz-breadcrumb[nz-page-header-breadcrumb]", "nz-avatar[nz-page-header-avatar]", "nz-page-header-tags, [nz-page-header-tags]", "nz-page-header-extra, [nz-page-header-extra]", "nz-page-header-content, [nz-page-header-content]", "nz-page-header-footer, [nz-page-header-footer]", "nz-page-header-title, [nz-page-header-title]", "nz-page-header-subtitle, [nz-page-header-subtitle]"];
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
    /**
     * @param {?} changes
     * @return {?}
     */
    NzPageHeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzBackIcon')) {
            this.isTemplateRefBackIcon = changes.nzBackIcon.currentValue instanceof TemplateRef;
            this.isStringBackIcon = typeof changes.nzBackIcon.currentValue === 'string';
        }
    };
    /**
     * @return {?}
     */
    NzPageHeaderComponent.prototype.onBack = /**
     * @return {?}
     */
    function () {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            this.location.back();
        }
    };
    /** @nocollapse */
    NzPageHeaderComponent.ctorParameters = function () { return [
        { type: Location },
        { type: NzConfigService }
    ]; };
    NzPageHeaderComponent.propDecorators = {
        nzBackIcon: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzSubtitle: [{ type: Input }],
        nzGhost: [{ type: Input }],
        nzBack: [{ type: Output }],
        nzPageHeaderFooter: [{ type: ContentChild, args: [NzPageHeaderFooterDirective, { static: false },] }],
        nzPageHeaderBreadcrumb: [{ type: ContentChild, args: [NzPageHeaderBreadcrumbDirective, { static: false },] }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        tslib_1.__metadata("design:type", Boolean)
    ], NzPageHeaderComponent.prototype, "nzGhost", void 0);
NzPageHeaderComponent.ɵfac = function NzPageHeaderComponent_Factory(t) { return new (t || NzPageHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Location), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzConfigService)); };
NzPageHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPageHeaderComponent, selectors: [["nz-page-header"]], contentQueries: function NzPageHeaderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzPageHeaderFooterDirective, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzPageHeaderBreadcrumbDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzPageHeaderFooter = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzPageHeaderBreadcrumb = _t.first);
    } }, hostAttrs: [1, "ant-page-header"], hostVars: 6, hostBindings: function NzPageHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("has-footer", ctx.nzPageHeaderFooter)("ant-page-header-ghost", ctx.nzGhost)("has-breadcrumb", ctx.nzPageHeaderBreadcrumb);
    } }, inputs: { nzBackIcon: "nzBackIcon", nzTitle: "nzTitle", nzSubtitle: "nzSubtitle", nzGhost: "nzGhost" }, outputs: { nzBack: "nzBack" }, exportAs: ["nzPageHeader"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 12, vars: 5, consts: [[1, "ant-page-header-heading"], ["class", "ant-page-header-back", 3, "click", 4, "ngIf"], ["class", "ant-page-header-heading-title", 4, "ngIf"], [4, "ngIf"], ["class", "ant-page-header-heading-sub-title", 4, "ngIf"], [1, "ant-page-header-back", 3, "click"], ["role", "button", "tabindex", "0", 1, "ant-page-header-back-button"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [3, "ngTemplateOutlet"], [1, "ant-page-header-heading-title"], [4, "nzStringTemplateOutlet"], [1, "ant-page-header-heading-sub-title"]], template: function NzPageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵtemplate(2, NzPageHeaderComponent_div_2_Template, 4, 2, "div", 1);
        ɵngcc0.ɵɵprojection(3, 1);
        ɵngcc0.ɵɵtemplate(4, NzPageHeaderComponent_span_4_Template, 2, 1, "span", 2);
        ɵngcc0.ɵɵtemplate(5, NzPageHeaderComponent_5_Template, 1, 0, undefined, 3);
        ɵngcc0.ɵɵtemplate(6, NzPageHeaderComponent_span_6_Template, 2, 1, "span", 4);
        ɵngcc0.ɵɵtemplate(7, NzPageHeaderComponent_7_Template, 1, 0, undefined, 3);
        ɵngcc0.ɵɵprojection(8, 2);
        ɵngcc0.ɵɵprojection(9, 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(10, 4);
        ɵngcc0.ɵɵprojection(11, 5);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzBackIcon !== null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSubtitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzSubtitle);
    } }, directives: [ɵngcc1.NgIf, ɵngcc3.NzIconDirective, ɵngcc1.NgTemplateOutlet, ɵngcc2.NzStringTemplateOutletDirective], styles: ["nz-page-header,nz-page-header-content,nz-page-header-footer{display:block}", "\n      .ant-page-header-back-button {\n        border: 0px;\n        background: transparent;\n        padding: 0px;\n        line-height: inherit;\n        display: inline-block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPageHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'nz-page-header',
                exportAs: 'nzPageHeader',
                template: "<ng-content select=\"nz-breadcrumb[nz-page-header-breadcrumb]\"></ng-content>\r\n\r\n<div class=\"ant-page-header-heading\">\r\n  <!--back-->\r\n  <div *ngIf=\"nzBackIcon !== null\" (click)=\"onBack()\" class=\"ant-page-header-back\">\r\n    <div role=\"button\" tabindex=\"0\" class=\"ant-page-header-back-button\">\r\n      <i *ngIf=\"isStringBackIcon\" nz-icon [nzType]=\"nzBackIcon ? nzBackIcon : 'arrow-left'\" nzTheme=\"outline\"></i>\r\n      <ng-container *ngIf=\"isTemplateRefBackIcon\" [ngTemplateOutlet]=\"nzBackIcon\"></ng-container>\r\n    </div>\r\n  </div>\r\n  <!--avatar-->\r\n  <ng-content select=\"nz-avatar[nz-page-header-avatar]\"></ng-content>\r\n  <!--title-->\r\n  <span class=\"ant-page-header-heading-title\" *ngIf=\"nzTitle\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n  </span>\r\n  <ng-content *ngIf=\"!nzTitle\" select=\"nz-page-header-title, [nz-page-header-title]\"></ng-content>\r\n  <!--subtitle-->\r\n  <span class=\"ant-page-header-heading-sub-title\" *ngIf=\"nzSubtitle\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzSubtitle\">{{ nzSubtitle }}</ng-container>\r\n  </span>\r\n  <ng-content *ngIf=\"!nzSubtitle\" select=\"nz-page-header-subtitle, [nz-page-header-subtitle]\"></ng-content>\r\n  <ng-content select=\"nz-page-header-tags, [nz-page-header-tags]\"></ng-content>\r\n  <ng-content select=\"nz-page-header-extra, [nz-page-header-extra]\"></ng-content>\r\n</div>\r\n\r\n<ng-content select=\"nz-page-header-content, [nz-page-header-content]\"></ng-content>\r\n<ng-content select=\"nz-page-header-footer, [nz-page-header-footer]\"></ng-content>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ant-page-header',
                    '[class.has-footer]': 'nzPageHeaderFooter',
                    '[class.ant-page-header-ghost]': 'nzGhost',
                    '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb'
                },
                styles: ["nz-page-header,nz-page-header-content,nz-page-header-footer{display:block}", "\n      .ant-page-header-back-button {\n        border: 0px;\n        background: transparent;\n        padding: 0px;\n        line-height: inherit;\n        display: inline-block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc1.Location }, { type: ɵngcc2.NzConfigService }]; }, { nzBackIcon: [{
            type: Input
        }], nzBack: [{
            type: Output
        }], nzTitle: [{
            type: Input
        }], nzSubtitle: [{
            type: Input
        }], nzGhost: [{
            type: Input
        }], nzPageHeaderFooter: [{
            type: ContentChild,
            args: [NzPageHeaderFooterDirective, { static: false }]
        }], nzPageHeaderBreadcrumb: [{
            type: ContentChild,
            args: [NzPageHeaderBreadcrumbDirective, { static: false }]
        }] }); })();
    return NzPageHeaderComponent;
}());
export { NzPageHeaderComponent };
if (false) {
    /** @type {?} */
    NzPageHeaderComponent.prototype.isTemplateRefBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.isStringBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzTitle;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzSubtitle;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzGhost;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzBack;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzPageHeaderFooter;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzPageHeaderBreadcrumb;
    /**
     * @type {?}
     * @private
     */
    NzPageHeaderComponent.prototype.location;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci9uei1wYWdlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLElBQVYsd0JBQXdCLEdBQUcsWUFBWTtBQUU3QztJQTJDRSwrQkFBb0IsUUFBa0IsRUFBUyxlQUFnQztRQUEzRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBakIvRSwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGVBQVUsR0FBc0MsSUFBSSxDQUFDO1FBSTNDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBVTZCLENBQUM7Ozs7O0lBRW5GLDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxZQUFZLFdBQVcsQ0FBQztZQUNwRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUM7U0FDN0U7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQU07OztJQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUMsQ0FDSCxBQWxDUTs7a0NBekJQLFNBQVMsU0FBQztRQUNULFFBQVEsRUFBRSxGQVBILFFBQVE7TUFPVyxzQkFDMUIsWkFQTyxlQUFlO0VBT2QsRUFBRTtRQUFjLHNCQUN4Qjs2QkEwQkMsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxNQUFNO3FDQUVOLFlBQVksU0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUNBSTNELFlBQVksU0FBQywrQkFBK0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBUFg7UUFBM0MsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQzs7MERBQWtCOzs7Ozs7Ozs7OzBFQTdCeEIsc0JBRTlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2VBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLHNCQUNyQyxJQUFJLEVBQUUsMEJBQ0osS0FBSyxFQUFFLGlCQUFpQiwwQkFDeEIsb0JBQW9CLEVBQUUsb0JBQW9CLDBCQUMxQywrQkFBK0IsRUFBRSxTQUFTLDBCQUMxQyx3QkFBd0IsRUFBRSx3QkFBd0Isc0JBQ25ELDZHQUVDLHFNQVFDLG1CQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFTRDtJQTBCQSw0QkFBQztDQUFBLEFBM0RELElBMkRDO1NBbENZLHFCQUFxQjs7O0lBQ2hDLHNEQUE4Qjs7SUFDOUIsaURBQXlCOztJQUV6QiwyQ0FBOEQ7O0lBQzlELHdDQUE2Qzs7SUFDN0MsMkNBQWdEOztJQUNoRCx3Q0FBc0U7O0lBQ3RFLHVDQUFxRDs7SUFFckQsbURBRUU7O0lBRUYsdURBRUU7Ozs7O0lBRVUseUNBQTBCOztJQUFFLGdEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlLCBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LXBhZ2UtaGVhZGVyLWNlbGxzJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdwYWdlSGVhZGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotcGFnZS1oZWFkZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpQYWdlSGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcGFnZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL256LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5sZXNzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1wYWdlLWhlYWRlcicsXHJcbiAgICAnW2NsYXNzLmhhcy1mb290ZXJdJzogJ256UGFnZUhlYWRlckZvb3RlcicsXHJcbiAgICAnW2NsYXNzLmFudC1wYWdlLWhlYWRlci1naG9zdF0nOiAnbnpHaG9zdCcsXHJcbiAgICAnW2NsYXNzLmhhcy1icmVhZGNydW1iXSc6ICduelBhZ2VIZWFkZXJCcmVhZGNydW1iJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtcGFnZS1oZWFkZXItYmFjay1idXR0b24ge1xyXG4gICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelBhZ2VIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIGlzVGVtcGxhdGVSZWZCYWNrSWNvbiA9IGZhbHNlO1xyXG4gIGlzU3RyaW5nQmFja0ljb24gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbnpCYWNrSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelN1YnRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIG56R2hvc3Q6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QmFjayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBuelBhZ2VIZWFkZXJGb290ZXI6IEVsZW1lbnRSZWY8XHJcbiAgICBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmVcclxuICA+O1xyXG5cclxuICBAQ29udGVudENoaWxkKE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBuelBhZ2VIZWFkZXJCcmVhZGNydW1iOiBFbGVtZW50UmVmPFxyXG4gICAgTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZVxyXG4gID47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduekJhY2tJY29uJykpIHtcclxuICAgICAgdGhpcy5pc1RlbXBsYXRlUmVmQmFja0ljb24gPSBjaGFuZ2VzLm56QmFja0ljb24uY3VycmVudFZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgICAgIHRoaXMuaXNTdHJpbmdCYWNrSWNvbiA9IHR5cGVvZiBjaGFuZ2VzLm56QmFja0ljb24uY3VycmVudFZhbHVlID09PSAnc3RyaW5nJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmFjaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMubnpCYWNrLmVtaXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=