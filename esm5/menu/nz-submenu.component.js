import { __decorate, __metadata, __read, __spread } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, Optional, Output, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest, merge, Subject } from 'rxjs';
import { flatMap, map, startWith, takeUntil } from 'rxjs/operators';
import { collapseMotion, DEFAULT_SUBMENU_POSITIONS, getPlacementName, InputBoolean, NzMenuBaseService, NzNoAnimationDirective, NzUpdateHostClassService, POSITION_MAP, slideMotion, zoomBigMotion } from 'ng-zorro-antd/core';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzSubmenuService } from './nz-submenu.service';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "./nz-submenu.service";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "@angular/cdk/overlay";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/icon";
var _c0 = ["nz-submenu", ""];
function NzSubMenuComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} if (rf & 2) {
    var ctx_r1237 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r1237.nzIcon);
} }
function NzSubMenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1238 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1238.nzTitle);
} }
function NzSubMenuComponent_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngIf", "!nzTitle"]);
} }
function NzSubMenuComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵelementEnd();
} }
function NzSubMenuComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 13);
} }
function NzSubMenuComponent_ul_8_ng_template_1_Template(rf, ctx) { }
function NzSubMenuComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 14);
    i0.ɵɵtemplate(1, NzSubMenuComponent_ul_8_ng_template_1_Template, 0, 0, "ng-template", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1243 = i0.ɵɵnextContext();
    var _r1245 = i0.ɵɵreference(11);
    i0.ɵɵproperty("@collapseMotion", ctx_r1243.expandState)("@.disabled", ctx_r1243.noAnimation == null ? null : ctx_r1243.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1243.noAnimation == null ? null : ctx_r1243.noAnimation.nzNoAnimation)("ngClass", ctx_r1243.nzMenuClassName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1245);
} }
function NzSubMenuComponent_ng_template_9_ng_template_2_Template(rf, ctx) { }
function NzSubMenuComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    var _r1250 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵlistener("mouseleave", function NzSubMenuComponent_ng_template_9_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r1250); var ctx_r1249 = i0.ɵɵnextContext(); return ctx_r1249.setMouseEnterState(false); })("mouseenter", function NzSubMenuComponent_ng_template_9_Template_div_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r1250); var ctx_r1251 = i0.ɵɵnextContext(); return ctx_r1251.setMouseEnterState(true); });
    i0.ɵɵelementStart(1, "ul", 17);
    i0.ɵɵtemplate(2, NzSubMenuComponent_ng_template_9_ng_template_2_Template, 0, 0, "ng-template", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1244 = i0.ɵɵnextContext();
    var _r1245 = i0.ɵɵreference(11);
    i0.ɵɵclassProp("ant-menu-light", ctx_r1244.nzMenuService.theme === "light")("ant-menu-dark", ctx_r1244.nzMenuService.theme === "dark")("ant-menu-submenu-placement-bottomLeft", ctx_r1244.nzSubmenuService.mode === "horizontal")("ant-menu-submenu-placement-rightTop", ctx_r1244.nzSubmenuService.mode === "vertical" && ctx_r1244.placement === "rightTop")("ant-menu-submenu-placement-leftTop", ctx_r1244.nzSubmenuService.mode === "vertical" && ctx_r1244.placement === "leftTop");
    i0.ɵɵproperty("@slideMotion", ctx_r1244.expandState)("@zoomBigMotion", ctx_r1244.expandState)("@.disabled", ctx_r1244.noAnimation == null ? null : ctx_r1244.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1244.noAnimation == null ? null : ctx_r1244.noAnimation.nzNoAnimation);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-dropdown-menu", ctx_r1244.nzMenuService.isInDropDown)("ant-menu", !ctx_r1244.nzMenuService.isInDropDown)("ant-dropdown-menu-vertical", ctx_r1244.nzMenuService.isInDropDown)("ant-menu-vertical", !ctx_r1244.nzMenuService.isInDropDown)("ant-dropdown-menu-sub", ctx_r1244.nzMenuService.isInDropDown)("ant-menu-sub", !ctx_r1244.nzMenuService.isInDropDown);
    i0.ɵɵproperty("ngClass", ctx_r1244.nzMenuClassName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1245);
} }
function NzSubMenuComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1);
} }
var _c1 = [[["", "title", ""]], "*"];
var _c2 = ["[title]", "*"];
var NzSubMenuComponent = /** @class */ (function () {
    function NzSubMenuComponent(elementRef, nzMenuService, cdr, nzSubmenuService, nzUpdateHostClassService, platform, noAnimation) {
        this.elementRef = elementRef;
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this.nzOpen = false;
        this.nzDisabled = false;
        this.nzOpenChange = new EventEmitter();
        this.placement = 'rightTop';
        this.expandState = 'collapsed';
        this.overlayPositions = __spread(DEFAULT_SUBMENU_POSITIONS);
        this.destroy$ = new Subject();
        this.isChildMenuSelected = false;
        this.isMouseHover = false;
    }
    NzSubMenuComponent.prototype.setOpenState = function (open) {
        this.nzSubmenuService.setOpenState(open);
    };
    NzSubMenuComponent.prototype.clickSubMenuTitle = function () {
        if (this.nzSubmenuService.mode === 'inline' && !this.nzMenuService.isInDropDown && !this.nzDisabled) {
            this.setOpenState(!this.nzOpen);
        }
    };
    NzSubMenuComponent.prototype.setMouseEnterState = function (value) {
        this.isMouseHover = value;
        this.setClassMap();
        this.nzSubmenuService.setMouseEnterState(value);
    };
    NzSubMenuComponent.prototype.setTriggerWidth = function () {
        if (this.nzSubmenuService.mode === 'horizontal' && this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
        }
    };
    NzSubMenuComponent.prototype.onPositionChange = function (position) {
        this.placement = getPlacementName(position);
        this.cdr.markForCheck();
    };
    NzSubMenuComponent.prototype.setClassMap = function () {
        var _a;
        var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-submenu' : 'ant-menu-submenu';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-disabled"] = this.nzDisabled,
            _a[prefixName + "-open"] = this.nzOpen,
            _a[prefixName + "-selected"] = this.isChildMenuSelected,
            _a[prefixName + "-" + this.nzSubmenuService.mode] = true,
            _a[prefixName + "-active"] = this.isMouseHover && !this.nzDisabled,
            _a));
    };
    NzSubMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        combineLatest([this.nzSubmenuService.mode$, this.nzSubmenuService.open$])
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (_a) {
            var _b = __read(_a, 2), mode = _b[0], open = _b[1];
            if (open && mode === 'inline') {
                _this.expandState = 'expanded';
            }
            else if (open && mode === 'horizontal') {
                _this.expandState = 'bottom';
            }
            else if (open && mode === 'vertical') {
                _this.expandState = 'active';
            }
            else {
                _this.isMouseHover = false;
                _this.expandState = 'collapsed';
            }
            _this.overlayPositions = mode === 'horizontal' ? [POSITION_MAP.bottomLeft] : [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
            if (open !== _this.nzOpen) {
                _this.setTriggerWidth();
                _this.nzOpen = open;
                _this.nzOpenChange.emit(_this.nzOpen);
            }
            _this.setClassMap();
        });
        this.nzSubmenuService.menuOpen$.pipe(takeUntil(this.destroy$)).subscribe(function (data) {
            _this.nzMenuService.menuOpen$.next(data);
        });
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService.level$, this.nzSubmenuService.open$, this.nzSubmenuService.mode$)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () {
            _this.cdr.markForCheck();
        });
    };
    NzSubMenuComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.setTriggerWidth();
        this.listOfNzMenuItemDirective.changes
            .pipe(startWith(true), flatMap(function () { return merge.apply(void 0, __spread([_this.listOfNzMenuItemDirective.changes], _this.listOfNzMenuItemDirective.map(function (menu) { return menu.selected$; }))); }), startWith(true), map(function () { return _this.listOfNzMenuItemDirective.some(function (e) { return e.nzSelected; }); }), takeUntil(this.destroy$))
            .subscribe(function (selected) {
            _this.isChildMenuSelected = selected;
            _this.setClassMap();
        });
    };
    NzSubMenuComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzOpen) {
            this.nzSubmenuService.setOpenState(this.nzOpen);
            this.setTriggerWidth();
        }
        if (changes.nzDisabled) {
            this.nzSubmenuService.disabled = this.nzDisabled;
            this.setClassMap();
        }
    };
    NzSubMenuComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzSubMenuComponent.ɵfac = function NzSubMenuComponent_Factory(t) { return new (t || NzSubMenuComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzMenuBaseService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzSubmenuService), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzSubMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSubMenuComponent, selectors: [["", "nz-submenu", ""]], contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzSubMenuComponent, true);
            i0.ɵɵcontentQuery(dirIndex, NzMenuItemDirective, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
        } }, viewQuery: function NzSubMenuComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(CdkConnectedOverlay, true);
            i0.ɵɵstaticViewQuery(CdkOverlayOrigin, true, ElementRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
        } }, inputs: { nzMenuClassName: "nzMenuClassName", nzPaddingLeft: "nzPaddingLeft", nzTitle: "nzTitle", nzIcon: "nzIcon", nzOpen: "nzOpen", nzDisabled: "nzDisabled" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzSubmenu"], features: [i0.ɵɵProvidersFeature([NzSubmenuService, NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], attrs: _c0, ngContentSelectors: _c2, decls: 12, vars: 13, consts: [["cdkOverlayOrigin", "", 3, "mouseenter", "mouseleave", "click"], ["origin", "cdkOverlayOrigin"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [4, "ngIf"], ["class", "ant-dropdown-menu-submenu-arrow", 4, "ngIf", "ngIfElse"], ["notDropdownTpl", ""], ["class", "ant-menu ant-menu-inline ant-menu-sub", 3, "nzNoAnimation", "ngClass", 4, "ngIf"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "positionChange"], ["subMenuTemplate", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-dropdown-menu-submenu-arrow"], ["nz-icon", "", "nzType", "right", 1, "anticon-right", "ant-dropdown-menu-submenu-arrow-icon"], [1, "ant-menu-submenu-arrow"], [1, "ant-menu", "ant-menu-inline", "ant-menu-sub", 3, "nzNoAnimation", "ngClass"], [3, "ngTemplateOutlet"], [1, "ant-menu-submenu", "ant-menu-submenu-popup", 3, "nzNoAnimation", "mouseleave", "mouseenter"], [3, "ngClass"]], template: function NzSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵlistener("mouseenter", function NzSubMenuComponent_Template_div_mouseenter_0_listener($event) { return ctx.setMouseEnterState(true); })("mouseleave", function NzSubMenuComponent_Template_div_mouseleave_0_listener($event) { return ctx.setMouseEnterState(false); })("click", function NzSubMenuComponent_Template_div_click_0_listener($event) { return ctx.clickSubMenuTitle(); });
            i0.ɵɵtemplate(2, NzSubMenuComponent_i_2_Template, 1, 1, "i", 2);
            i0.ɵɵtemplate(3, NzSubMenuComponent_ng_container_3_Template, 3, 1, "ng-container", 3);
            i0.ɵɵtemplate(4, NzSubMenuComponent_4_Template, 1, 0, undefined, 4);
            i0.ɵɵtemplate(5, NzSubMenuComponent_span_5_Template, 2, 0, "span", 5);
            i0.ɵɵtemplate(6, NzSubMenuComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, NzSubMenuComponent_ul_8_Template, 2, 5, "ul", 7);
            i0.ɵɵtemplate(9, NzSubMenuComponent_ng_template_9_Template, 3, 17, "ng-template", 8);
            i0.ɵɵlistener("positionChange", function NzSubMenuComponent_Template_ng_template_positionChange_9_listener($event) { return ctx.onPositionChange($event); });
            i0.ɵɵtemplate(10, NzSubMenuComponent_ng_template_10_Template, 1, 0, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r1236 = i0.ɵɵreference(1);
            var _r1241 = i0.ɵɵreference(7);
            i0.ɵɵstyleProp("padding-left", ctx.nzMenuService.mode === "inline" ? ctx.nzPaddingLeft ? ctx.nzPaddingLeft : ctx.nzSubmenuService.level * ctx.nzMenuService.inlineIndent : null, "px");
            i0.ɵɵclassProp("ant-dropdown-menu-submenu-title", ctx.nzMenuService.isInDropDown)("ant-menu-submenu-title", !ctx.nzMenuService.isInDropDown);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.nzIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.nzTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzMenuService.isInDropDown)("ngIfElse", _r1241);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.nzMenuService.mode === "inline");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", _r1236)("cdkConnectedOverlayWidth", ctx.triggerWidth)("cdkConnectedOverlayOpen", ctx.nzOpen && ctx.nzMenuService.mode !== "inline");
        } }, directives: [i4.CdkOverlayOrigin, i5.NgIf, i1.NzStringTemplateOutletDirective, i4.CdkConnectedOverlay, i6.NzIconDirective, i1.NzNoAnimationDirective, i5.NgClass, i5.NgTemplateOutlet], styles: ["\n      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [collapseMotion, zoomBigMotion, slideMotion] }, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSubMenuComponent.prototype, "nzOpen", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSubMenuComponent.prototype, "nzDisabled", void 0);
    return NzSubMenuComponent;
}());
export { NzSubMenuComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSubMenuComponent, [{
        type: Component,
        args: [{
                selector: '[nz-submenu]',
                exportAs: 'nzSubmenu',
                providers: [NzSubmenuService, NzUpdateHostClassService],
                animations: [collapseMotion, zoomBigMotion, slideMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                templateUrl: './nz-submenu.component.html',
                styles: [
                    "\n      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzMenuBaseService }, { type: i0.ChangeDetectorRef }, { type: i2.NzSubmenuService }, { type: i1.NzUpdateHostClassService }, { type: i3.Platform }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzMenuClassName: [{
            type: Input
        }], nzPaddingLeft: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzOpenChange: [{
            type: Output
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: true }]
        }], cdkOverlayOrigin: [{
            type: ViewChild,
            args: [CdkOverlayOrigin, { static: true, read: ElementRef }]
        }], listOfNzSubMenuComponent: [{
            type: ContentChildren,
            args: [NzSubMenuComponent, { descendants: true }]
        }], listOfNzMenuItemDirective: [{
            type: ContentChildren,
            args: [NzMenuItemDirective, { descendants: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJuei1zdWJtZW51LmNvbXBvbmVudC50cyIsIm56LXN1Ym1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBa0MsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFDTCxjQUFjLEVBQ2QseUJBQXlCLEVBQ3pCLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsWUFBWSxFQUNaLFdBQVcsRUFDWCxhQUFhLEVBQ2QsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7OztJQ2pDdEQsd0JBQWdEOzs7SUFBckMseUNBQWlCOzs7SUFDNUIsNkJBQ0c7SUFBQSw0QkFBTTtJQUFB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QUM7SUE2Qi9CO1FBQWYsWUFBWSxFQUFFOztzREFBZ0I7SUFDZjtRQUFmLFlBQVksRUFBRTs7MERBQW9COzZCQXJGOUM7Q0E4TkMsQUEzS0QsSUEyS0M7U0EvSVksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0E1QjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLHdCQUF3QixDQUFDO2dCQUN2RCxVQUFVLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQztnQkFDeEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxNQUFNLEVBQUU7b0JBQ04sMFlBZUM7aUJBQ0Y7YUFDRjs7c0JBd0VJLElBQUk7O3NCQUFJLFFBQVE7O2tCQXRFbEIsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBRU4sU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUMvQyxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOztrQkFDOUQsZUFBZTttQkFBQyxrQkFBa0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7O2tCQUV6RCxlQUFlO21CQUFDLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmxhdE1hcCwgbWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY29sbGFwc2VNb3Rpb24sXHJcbiAgREVGQVVMVF9TVUJNRU5VX1BPU0lUSU9OUyxcclxuICBnZXRQbGFjZW1lbnROYW1lLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOek1lbnVCYXNlU2VydmljZSxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICBQT1NJVElPTl9NQVAsXHJcbiAgc2xpZGVNb3Rpb24sXHJcbiAgem9vbUJpZ01vdGlvblxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpTdWJtZW51U2VydmljZSB9IGZyb20gJy4vbnotc3VibWVudS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LXN1Ym1lbnVdJyxcclxuICBleHBvcnRBczogJ256U3VibWVudScsXHJcbiAgcHJvdmlkZXJzOiBbTnpTdWJtZW51U2VydmljZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBhbmltYXRpb25zOiBbY29sbGFwc2VNb3Rpb24sIHpvb21CaWdNb3Rpb24sIHNsaWRlTW90aW9uXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zdWJtZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgOnJvb3QgLmFudC1tZW51LXN1Ym1lbnUuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtYm90dG9tTGVmdCB7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6cm9vdCAuYW50LW1lbnUtc3VibWVudS5hbnQtbWVudS1zdWJtZW51LXBsYWNlbWVudC1yaWdodFRvcCB7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgOnJvb3QgLmFudC1tZW51LXN1Ym1lbnUuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtbGVmdFRvcCB7XHJcbiAgICAgICAgcmlnaHQ6IDRweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelN1Yk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuek1lbnVDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuelBhZGRpbmdMZWZ0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiB0cnVlIH0pIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luLCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZiB9KSBjZGtPdmVybGF5T3JpZ2luOiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXHJcbiAgbGlzdE9mTnpTdWJNZW51Q29tcG9uZW50OiBRdWVyeUxpc3Q8TnpTdWJNZW51Q29tcG9uZW50PjtcclxuICBAQ29udGVudENoaWxkcmVuKE56TWVudUl0ZW1EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcclxuICBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlOiBRdWVyeUxpc3Q8TnpNZW51SXRlbURpcmVjdGl2ZT47XHJcblxyXG4gIHBsYWNlbWVudCA9ICdyaWdodFRvcCc7XHJcbiAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XHJcbiAgZXhwYW5kU3RhdGUgPSAnY29sbGFwc2VkJztcclxuICBvdmVybGF5UG9zaXRpb25zID0gWy4uLkRFRkFVTFRfU1VCTUVOVV9QT1NJVElPTlNdO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGlzQ2hpbGRNZW51U2VsZWN0ZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGlzTW91c2VIb3ZlciA9IGZhbHNlO1xyXG5cclxuICBzZXRPcGVuU3RhdGUob3BlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLnNldE9wZW5TdGF0ZShvcGVuKTtcclxuICB9XHJcblxyXG4gIGNsaWNrU3ViTWVudVRpdGxlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTdWJtZW51U2VydmljZS5tb2RlID09PSAnaW5saW5lJyAmJiAhdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93biAmJiAhdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKCF0aGlzLm56T3Blbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRNb3VzZUVudGVyU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNNb3VzZUhvdmVyID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uuc2V0TW91c2VFbnRlclN0YXRlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldFRyaWdnZXJXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56U3VibWVudVNlcnZpY2UubW9kZSA9PT0gJ2hvcml6b250YWwnICYmIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMucGxhY2VtZW50ID0gZ2V0UGxhY2VtZW50TmFtZShwb3NpdGlvbikhO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZWZpeE5hbWUgPSB0aGlzLm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUnIDogJ2FudC1tZW51LXN1Ym1lbnUnO1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tZGlzYWJsZWRgXTogdGhpcy5uekRpc2FibGVkLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tb3BlbmBdOiB0aGlzLm56T3BlbixcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LXNlbGVjdGVkYF06IHRoaXMuaXNDaGlsZE1lbnVTZWxlY3RlZCxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LSR7dGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1vZGV9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1hY3RpdmVgXTogdGhpcy5pc01vdXNlSG92ZXIgJiYgIXRoaXMubnpEaXNhYmxlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyBuek1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHB1YmxpYyBuelN1Ym1lbnVTZXJ2aWNlOiBOelN1Ym1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMubnpTdWJtZW51U2VydmljZS5tb2RlJCwgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm9wZW4kXSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKChbbW9kZSwgb3Blbl0pID0+IHtcclxuICAgICAgICBpZiAob3BlbiAmJiBtb2RlID09PSAnaW5saW5lJykge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdleHBhbmRlZCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcGVuICYmIG1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdib3R0b20nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3BlbiAmJiBtb2RlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2FjdGl2ZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaXNNb3VzZUhvdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2NvbGxhcHNlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3ZlcmxheVBvc2l0aW9ucyA9IG1vZGUgPT09ICdob3Jpem9udGFsJyA/IFtQT1NJVElPTl9NQVAuYm90dG9tTGVmdF0gOiBbUE9TSVRJT05fTUFQLnJpZ2h0VG9wLCBQT1NJVElPTl9NQVAubGVmdFRvcF07XHJcbiAgICAgICAgaWYgKG9wZW4gIT09IHRoaXMubnpPcGVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xyXG4gICAgICAgICAgdGhpcy5uek9wZW4gPSBvcGVuO1xyXG4gICAgICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLm56U3VibWVudVNlcnZpY2UubWVudU9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRhdGE6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLm1lbnVPcGVuJC5uZXh0KGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICBtZXJnZShcclxuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLm1vZGUkLFxyXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2UuaW5saW5lSW5kZW50JCxcclxuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLmxldmVsJCxcclxuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm9wZW4kLFxyXG4gICAgICB0aGlzLm56U3VibWVudVNlcnZpY2UubW9kZSRcclxuICAgIClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xyXG4gICAgdGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlLmNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgIGZsYXRNYXAoKCkgPT4gbWVyZ2UodGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlLmNoYW5nZXMsIC4uLnRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZS5tYXAobWVudSA9PiBtZW51LnNlbGVjdGVkJCkpKSxcclxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXHJcbiAgICAgICAgbWFwKCgpID0+IHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZS5zb21lKGUgPT4gZS5uelNlbGVjdGVkKSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0NoaWxkTWVudVNlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56T3Blbikge1xyXG4gICAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uuc2V0T3BlblN0YXRlKHRoaXMubnpPcGVuKTtcclxuICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56RGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLmRpc2FibGVkID0gdGhpcy5uekRpc2FibGVkO1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgY2RrT3ZlcmxheU9yaWdpblxyXG4gICNvcmlnaW49XCJjZGtPdmVybGF5T3JpZ2luXCJcclxuICBbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZV09XCJuek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93blwiXHJcbiAgW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtdGl0bGVdPVwiIW56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duXCJcclxuICBbc3R5bGUucGFkZGluZ0xlZnQucHhdPVwiXHJcbiAgICBuek1lbnVTZXJ2aWNlLm1vZGUgPT09ICdpbmxpbmUnXHJcbiAgICAgID8gbnpQYWRkaW5nTGVmdFxyXG4gICAgICAgID8gbnpQYWRkaW5nTGVmdFxyXG4gICAgICAgIDogbnpTdWJtZW51U2VydmljZS5sZXZlbCAqIG56TWVudVNlcnZpY2UuaW5saW5lSW5kZW50XHJcbiAgICAgIDogbnVsbFxyXG4gIFwiXHJcbiAgKG1vdXNlZW50ZXIpPVwic2V0TW91c2VFbnRlclN0YXRlKHRydWUpXCJcclxuICAobW91c2VsZWF2ZSk9XCJzZXRNb3VzZUVudGVyU3RhdGUoZmFsc2UpXCJcclxuICAoY2xpY2spPVwiY2xpY2tTdWJNZW51VGl0bGUoKVwiXHJcbj5cclxuICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpJY29uXCIgKm5nSWY9XCJuekljb25cIj48L2k+XHJcbiAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIlxyXG4gICAgPjxzcGFuPnt7IG56VGl0bGUgfX08L3NwYW4+PC9uZy1jb250YWluZXJcclxuICA+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RpdGxlXVwiICpuZ0lmPVwiIW56VGl0bGVcIj48L25nLWNvbnRlbnQ+XHJcbiAgPHNwYW5cclxuICAgICpuZ0lmPVwibnpNZW51U2VydmljZS5pc0luRHJvcERvd247IGVsc2Ugbm90RHJvcGRvd25UcGxcIlxyXG4gICAgY2xhc3M9XCJhbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWFycm93XCJcclxuICA+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cInJpZ2h0XCIgY2xhc3M9XCJhbnRpY29uLXJpZ2h0IGFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3ctaWNvblwiPjwvaT5cclxuICA8L3NwYW4+XHJcbiAgPG5nLXRlbXBsYXRlICNub3REcm9wZG93blRwbD5cclxuICAgIDxpIGNsYXNzPVwiYW50LW1lbnUtc3VibWVudS1hcnJvd1wiPjwvaT5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuPHVsXHJcbiAgKm5nSWY9XCJuek1lbnVTZXJ2aWNlLm1vZGUgPT09ICdpbmxpbmUnXCJcclxuICBbQGNvbGxhcHNlTW90aW9uXT1cImV4cGFuZFN0YXRlXCJcclxuICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gIFtuZ0NsYXNzXT1cIm56TWVudUNsYXNzTmFtZVwiXHJcbiAgY2xhc3M9XCJhbnQtbWVudSBhbnQtbWVudS1pbmxpbmUgYW50LW1lbnUtc3ViXCJcclxuPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJzdWJNZW51VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG48L3VsPlxyXG48bmctdGVtcGxhdGVcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwib3ZlcmxheVBvc2l0aW9uc1wiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cInRyaWdnZXJXaWR0aFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIm56T3BlbiAmJiBuek1lbnVTZXJ2aWNlLm1vZGUgIT09ICdpbmxpbmUnXCJcclxuPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiYW50LW1lbnUtc3VibWVudSBhbnQtbWVudS1zdWJtZW51LXBvcHVwXCJcclxuICAgIFtAc2xpZGVNb3Rpb25dPVwiZXhwYW5kU3RhdGVcIlxyXG4gICAgW0B6b29tQmlnTW90aW9uXT1cImV4cGFuZFN0YXRlXCJcclxuICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgIFtjbGFzcy5hbnQtbWVudS1saWdodF09XCJuek1lbnVTZXJ2aWNlLnRoZW1lID09PSAnbGlnaHQnXCJcclxuICAgIFtjbGFzcy5hbnQtbWVudS1kYXJrXT1cIm56TWVudVNlcnZpY2UudGhlbWUgPT09ICdkYXJrJ1wiXHJcbiAgICBbY2xhc3MuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtYm90dG9tTGVmdF09XCJuelN1Ym1lbnVTZXJ2aWNlLm1vZGUgPT09ICdob3Jpem9udGFsJ1wiXHJcbiAgICBbY2xhc3MuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtcmlnaHRUb3BdPVwiXHJcbiAgICAgIG56U3VibWVudVNlcnZpY2UubW9kZSA9PT0gJ3ZlcnRpY2FsJyAmJiBwbGFjZW1lbnQgPT09ICdyaWdodFRvcCdcclxuICAgIFwiXHJcbiAgICBbY2xhc3MuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtbGVmdFRvcF09XCJcclxuICAgICAgbnpTdWJtZW51U2VydmljZS5tb2RlID09PSAndmVydGljYWwnICYmIHBsYWNlbWVudCA9PT0gJ2xlZnRUb3AnXHJcbiAgICBcIlxyXG4gICAgKG1vdXNlbGVhdmUpPVwic2V0TW91c2VFbnRlclN0YXRlKGZhbHNlKVwiXHJcbiAgICAobW91c2VlbnRlcik9XCJzZXRNb3VzZUVudGVyU3RhdGUodHJ1ZSlcIlxyXG4gID5cclxuICAgIDx1bFxyXG4gICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnVdPVwibnpNZW51U2VydmljZS5pc0luRHJvcERvd25cIlxyXG4gICAgICBbY2xhc3MuYW50LW1lbnVdPVwiIW56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duXCJcclxuICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXZlcnRpY2FsXT1cIm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duXCJcclxuICAgICAgW2NsYXNzLmFudC1tZW51LXZlcnRpY2FsXT1cIiFuek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93blwiXHJcbiAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJdPVwibnpNZW51U2VydmljZS5pc0luRHJvcERvd25cIlxyXG4gICAgICBbY2xhc3MuYW50LW1lbnUtc3ViXT1cIiFuek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93blwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cIm56TWVudUNsYXNzTmFtZVwiXHJcbiAgICA+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJzdWJNZW51VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjc3ViTWVudVRlbXBsYXRlPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19