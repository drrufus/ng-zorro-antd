import { __decorate, __metadata } from "tslib";
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
const _c0 = ["nz-submenu", ""];
function NzSubMenuComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} if (rf & 2) {
    const ctx_r1219 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r1219.nzIcon);
} }
function NzSubMenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1220 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1220.nzTitle);
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
    const ctx_r1225 = i0.ɵɵnextContext();
    const _r1227 = i0.ɵɵreference(11);
    i0.ɵɵproperty("@collapseMotion", ctx_r1225.expandState)("@.disabled", ctx_r1225.noAnimation == null ? null : ctx_r1225.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1225.noAnimation == null ? null : ctx_r1225.noAnimation.nzNoAnimation)("ngClass", ctx_r1225.nzMenuClassName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1227);
} }
function NzSubMenuComponent_ng_template_9_ng_template_2_Template(rf, ctx) { }
function NzSubMenuComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r1232 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵlistener("mouseleave", function NzSubMenuComponent_ng_template_9_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r1232); const ctx_r1231 = i0.ɵɵnextContext(); return ctx_r1231.setMouseEnterState(false); })("mouseenter", function NzSubMenuComponent_ng_template_9_Template_div_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r1232); const ctx_r1233 = i0.ɵɵnextContext(); return ctx_r1233.setMouseEnterState(true); });
    i0.ɵɵelementStart(1, "ul", 17);
    i0.ɵɵtemplate(2, NzSubMenuComponent_ng_template_9_ng_template_2_Template, 0, 0, "ng-template", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1226 = i0.ɵɵnextContext();
    const _r1227 = i0.ɵɵreference(11);
    i0.ɵɵclassProp("ant-menu-light", ctx_r1226.nzMenuService.theme === "light")("ant-menu-dark", ctx_r1226.nzMenuService.theme === "dark")("ant-menu-submenu-placement-bottomLeft", ctx_r1226.nzSubmenuService.mode === "horizontal")("ant-menu-submenu-placement-rightTop", ctx_r1226.nzSubmenuService.mode === "vertical" && ctx_r1226.placement === "rightTop")("ant-menu-submenu-placement-leftTop", ctx_r1226.nzSubmenuService.mode === "vertical" && ctx_r1226.placement === "leftTop");
    i0.ɵɵproperty("@slideMotion", ctx_r1226.expandState)("@zoomBigMotion", ctx_r1226.expandState)("@.disabled", ctx_r1226.noAnimation == null ? null : ctx_r1226.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1226.noAnimation == null ? null : ctx_r1226.noAnimation.nzNoAnimation);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-dropdown-menu", ctx_r1226.nzMenuService.isInDropDown)("ant-menu", !ctx_r1226.nzMenuService.isInDropDown)("ant-dropdown-menu-vertical", ctx_r1226.nzMenuService.isInDropDown)("ant-menu-vertical", !ctx_r1226.nzMenuService.isInDropDown)("ant-dropdown-menu-sub", ctx_r1226.nzMenuService.isInDropDown)("ant-menu-sub", !ctx_r1226.nzMenuService.isInDropDown);
    i0.ɵɵproperty("ngClass", ctx_r1226.nzMenuClassName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1227);
} }
function NzSubMenuComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1);
} }
const _c1 = [[["", "title", ""]], "*"];
const _c2 = ["[title]", "*"];
export class NzSubMenuComponent {
    constructor(elementRef, nzMenuService, cdr, nzSubmenuService, nzUpdateHostClassService, platform, noAnimation) {
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
        this.overlayPositions = [...DEFAULT_SUBMENU_POSITIONS];
        this.destroy$ = new Subject();
        this.isChildMenuSelected = false;
        this.isMouseHover = false;
    }
    setOpenState(open) {
        this.nzSubmenuService.setOpenState(open);
    }
    clickSubMenuTitle() {
        if (this.nzSubmenuService.mode === 'inline' && !this.nzMenuService.isInDropDown && !this.nzDisabled) {
            this.setOpenState(!this.nzOpen);
        }
    }
    setMouseEnterState(value) {
        this.isMouseHover = value;
        this.setClassMap();
        this.nzSubmenuService.setMouseEnterState(value);
    }
    setTriggerWidth() {
        if (this.nzSubmenuService.mode === 'horizontal' && this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
        }
    }
    onPositionChange(position) {
        this.placement = getPlacementName(position);
        this.cdr.markForCheck();
    }
    setClassMap() {
        const prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-submenu' : 'ant-menu-submenu';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefixName}`]: true,
            [`${prefixName}-disabled`]: this.nzDisabled,
            [`${prefixName}-open`]: this.nzOpen,
            [`${prefixName}-selected`]: this.isChildMenuSelected,
            [`${prefixName}-${this.nzSubmenuService.mode}`]: true,
            [`${prefixName}-active`]: this.isMouseHover && !this.nzDisabled
        });
    }
    ngOnInit() {
        combineLatest([this.nzSubmenuService.mode$, this.nzSubmenuService.open$])
            .pipe(takeUntil(this.destroy$))
            .subscribe(([mode, open]) => {
            if (open && mode === 'inline') {
                this.expandState = 'expanded';
            }
            else if (open && mode === 'horizontal') {
                this.expandState = 'bottom';
            }
            else if (open && mode === 'vertical') {
                this.expandState = 'active';
            }
            else {
                this.isMouseHover = false;
                this.expandState = 'collapsed';
            }
            this.overlayPositions = mode === 'horizontal' ? [POSITION_MAP.bottomLeft] : [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
            if (open !== this.nzOpen) {
                this.setTriggerWidth();
                this.nzOpen = open;
                this.nzOpenChange.emit(this.nzOpen);
            }
            this.setClassMap();
        });
        this.nzSubmenuService.menuOpen$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            this.nzMenuService.menuOpen$.next(data);
        });
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService.level$, this.nzSubmenuService.open$, this.nzSubmenuService.mode$)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    ngAfterContentInit() {
        this.setTriggerWidth();
        this.listOfNzMenuItemDirective.changes
            .pipe(startWith(true), flatMap(() => merge(this.listOfNzMenuItemDirective.changes, ...this.listOfNzMenuItemDirective.map(menu => menu.selected$))), startWith(true), map(() => this.listOfNzMenuItemDirective.some(e => e.nzSelected)), takeUntil(this.destroy$))
            .subscribe(selected => {
            this.isChildMenuSelected = selected;
            this.setClassMap();
        });
    }
    ngOnChanges(changes) {
        if (changes.nzOpen) {
            this.nzSubmenuService.setOpenState(this.nzOpen);
            this.setTriggerWidth();
        }
        if (changes.nzDisabled) {
            this.nzSubmenuService.disabled = this.nzDisabled;
            this.setClassMap();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
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
        const _r1218 = i0.ɵɵreference(1);
        const _r1223 = i0.ɵɵreference(7);
        i0.ɵɵstyleProp("padding-left", ctx.nzMenuService.mode === "inline" ? ctx.nzPaddingLeft ? ctx.nzPaddingLeft : ctx.nzSubmenuService.level * ctx.nzMenuService.inlineIndent : null, "px");
        i0.ɵɵclassProp("ant-dropdown-menu-submenu-title", ctx.nzMenuService.isInDropDown)("ant-menu-submenu-title", !ctx.nzMenuService.isInDropDown);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.nzIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.nzTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzMenuService.isInDropDown)("ngIfElse", _r1223);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.nzMenuService.mode === "inline");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", _r1218)("cdkConnectedOverlayWidth", ctx.triggerWidth)("cdkConnectedOverlayOpen", ctx.nzOpen && ctx.nzMenuService.mode !== "inline");
    } }, directives: [i4.CdkOverlayOrigin, i5.NgIf, i1.NzStringTemplateOutletDirective, i4.CdkConnectedOverlay, i6.NzIconDirective, i1.NzNoAnimationDirective, i5.NgClass, i5.NgTemplateOutlet], styles: ["\n      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [collapseMotion, zoomBigMotion, slideMotion] }, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSubMenuComponent.prototype, "nzOpen", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSubMenuComponent.prototype, "nzDisabled", void 0);
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
                    `
      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {
        top: 6px;
        position: relative;
      }

      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {
        left: 4px;
        position: relative;
      }

      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {
        right: 4px;
        position: relative;
      }
    `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJuei1zdWJtZW51LmNvbXBvbmVudC50cyIsIm56LXN1Ym1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBa0MsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFDTCxjQUFjLEVBQ2QseUJBQXlCLEVBQ3pCLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsWUFBWSxFQUNaLFdBQVcsRUFDWCxhQUFhLEVBQ2QsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7OztJQ2pDdEQsd0JBQWdEOzs7SUFBckMseUNBQWlCOzs7SUFDNUIsNkJBQ0c7SUFBQSw0QkFBTTtJQUFB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LGFBQWEsRUFBRSxXQUFXLENBQUM7QUE2Qi9CO0lBQWYsWUFBWSxFQUFFOztrREFBZ0I7QUFDZjtJQUFmLFlBQVksRUFBRTs7c0RBQW9CO2tEQU5qQyxrQkFBa0I7Y0E1QjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLHdCQUF3QixDQUFDO2dCQUN2RCxVQUFVLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQztnQkFDeEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxNQUFNLEVBQUU7b0JBQ047Ozs7Ozs7Ozs7Ozs7OztLQWVDO2lCQUNGO2FBQ0Y7O3NCQXdFSSxJQUFJOztzQkFBSSxRQUFROztrQkF0RWxCLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUVOLFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFDL0MsU0FBUzttQkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7a0JBQzlELGVBQWU7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztrQkFFekQsZUFBZTttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZsYXRNYXAsIG1hcCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNvbGxhcHNlTW90aW9uLFxyXG4gIERFRkFVTFRfU1VCTUVOVV9QT1NJVElPTlMsXHJcbiAgZ2V0UGxhY2VtZW50TmFtZSxcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgUE9TSVRJT05fTUFQLFxyXG4gIHNsaWRlTW90aW9uLFxyXG4gIHpvb21CaWdNb3Rpb25cclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56U3VibWVudVNlcnZpY2UgfSBmcm9tICcuL256LXN1Ym1lbnUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuei1zdWJtZW51XScsXHJcbiAgZXhwb3J0QXM6ICduelN1Ym1lbnUnLFxyXG4gIHByb3ZpZGVyczogW056U3VibWVudVNlcnZpY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgYW5pbWF0aW9uczogW2NvbGxhcHNlTW90aW9uLCB6b29tQmlnTW90aW9uLCBzbGlkZU1vdGlvbl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc3VibWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIDpyb290IC5hbnQtbWVudS1zdWJtZW51LmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWJvdHRvbUxlZnQge1xyXG4gICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgOnJvb3QgLmFudC1tZW51LXN1Ym1lbnUuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtcmlnaHRUb3Age1xyXG4gICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpyb290IC5hbnQtbWVudS1zdWJtZW51LmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWxlZnRUb3Age1xyXG4gICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTdWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbnpNZW51Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpQYWRkaW5nTGVmdDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5LCB7IHN0YXRpYzogdHJ1ZSB9KSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gIEBWaWV3Q2hpbGQoQ2RrT3ZlcmxheU9yaWdpbiwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgY2RrT3ZlcmxheU9yaWdpbjogRWxlbWVudFJlZjtcclxuICBAQ29udGVudENoaWxkcmVuKE56U3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxyXG4gIGxpc3RPZk56U3ViTWVudUNvbXBvbmVudDogUXVlcnlMaXN0PE56U3ViTWVudUNvbXBvbmVudD47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOek1lbnVJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXHJcbiAgbGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZTogUXVlcnlMaXN0PE56TWVudUl0ZW1EaXJlY3RpdmU+O1xyXG5cclxuICBwbGFjZW1lbnQgPSAncmlnaHRUb3AnO1xyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xyXG4gIGV4cGFuZFN0YXRlID0gJ2NvbGxhcHNlZCc7XHJcbiAgb3ZlcmxheVBvc2l0aW9ucyA9IFsuLi5ERUZBVUxUX1NVQk1FTlVfUE9TSVRJT05TXTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBpc0NoaWxkTWVudVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc01vdXNlSG92ZXIgPSBmYWxzZTtcclxuXHJcbiAgc2V0T3BlblN0YXRlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5zZXRPcGVuU3RhdGUob3Blbik7XHJcbiAgfVxyXG5cclxuICBjbGlja1N1Yk1lbnVUaXRsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56U3VibWVudVNlcnZpY2UubW9kZSA9PT0gJ2lubGluZScgJiYgIXRoaXMubnpNZW51U2VydmljZS5pc0luRHJvcERvd24gJiYgIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZSghdGhpcy5uek9wZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TW91c2VFbnRlclN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzTW91c2VIb3ZlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLnNldE1vdXNlRW50ZXJTdGF0ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1vZGUgPT09ICdob3Jpem9udGFsJyAmJiB0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuY2RrT3ZlcmxheU9yaWdpbi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLnBsYWNlbWVudCA9IGdldFBsYWNlbWVudE5hbWUocG9zaXRpb24pITtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcmVmaXhOYW1lID0gdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1zdWJtZW51JyA6ICdhbnQtbWVudS1zdWJtZW51JztcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7cHJlZml4TmFtZX1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LWRpc2FibGVkYF06IHRoaXMubnpEaXNhYmxlZCxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LW9wZW5gXTogdGhpcy5uek9wZW4sXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1zZWxlY3RlZGBdOiB0aGlzLmlzQ2hpbGRNZW51U2VsZWN0ZWQsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS0ke3RoaXMubnpTdWJtZW51U2VydmljZS5tb2RlfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tYWN0aXZlYF06IHRoaXMuaXNNb3VzZUhvdmVyICYmICF0aGlzLm56RGlzYWJsZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgbnpNZW51U2VydmljZTogTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwdWJsaWMgbnpTdWJtZW51U2VydmljZTogTnpTdWJtZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLm56U3VibWVudVNlcnZpY2UubW9kZSQsIHRoaXMubnpTdWJtZW51U2VydmljZS5vcGVuJF0pXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoW21vZGUsIG9wZW5dKSA9PiB7XHJcbiAgICAgICAgaWYgKG9wZW4gJiYgbW9kZSA9PT0gJ2lubGluZScpIHtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnZXhwYW5kZWQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3BlbiAmJiBtb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnYm90dG9tJztcclxuICAgICAgICB9IGVsc2UgaWYgKG9wZW4gJiYgbW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdhY3RpdmUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmlzTW91c2VIb3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdjb2xsYXBzZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbnMgPSBtb2RlID09PSAnaG9yaXpvbnRhbCcgPyBbUE9TSVRJT05fTUFQLmJvdHRvbUxlZnRdIDogW1BPU0lUSU9OX01BUC5yaWdodFRvcCwgUE9TSVRJT05fTUFQLmxlZnRUb3BdO1xyXG4gICAgICAgIGlmIChvcGVuICE9PSB0aGlzLm56T3Blbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgICAgICAgIHRoaXMubnpPcGVuID0gb3BlbjtcclxuICAgICAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1lbnVPcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkYXRhOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5tZW51T3BlbiQubmV4dChkYXRhKTtcclxuICAgIH0pO1xyXG4gICAgbWVyZ2UoXHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5tb2RlJCxcclxuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLmlubGluZUluZGVudCQsXHJcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5sZXZlbCQsXHJcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5vcGVuJCxcclxuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1vZGUkXHJcbiAgICApXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgIHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZS5jaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICBmbGF0TWFwKCgpID0+IG1lcmdlKHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZS5jaGFuZ2VzLCAuLi50aGlzLmxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUubWFwKG1lbnUgPT4gbWVudS5zZWxlY3RlZCQpKSksXHJcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUuc29tZShlID0+IGUubnpTZWxlY3RlZCkpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWQgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNDaGlsZE1lbnVTZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uek9wZW4pIHtcclxuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLnNldE9wZW5TdGF0ZSh0aGlzLm56T3Blbik7XHJcbiAgICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5kaXNhYmxlZCA9IHRoaXMubnpEaXNhYmxlZDtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdlxyXG4gIGNka092ZXJsYXlPcmlnaW5cclxuICAjb3JpZ2luPVwiY2RrT3ZlcmxheU9yaWdpblwiXHJcbiAgW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGVdPVwibnpNZW51U2VydmljZS5pc0luRHJvcERvd25cIlxyXG4gIFtjbGFzcy5hbnQtbWVudS1zdWJtZW51LXRpdGxlXT1cIiFuek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93blwiXHJcbiAgW3N0eWxlLnBhZGRpbmdMZWZ0LnB4XT1cIlxyXG4gICAgbnpNZW51U2VydmljZS5tb2RlID09PSAnaW5saW5lJ1xyXG4gICAgICA/IG56UGFkZGluZ0xlZnRcclxuICAgICAgICA/IG56UGFkZGluZ0xlZnRcclxuICAgICAgICA6IG56U3VibWVudVNlcnZpY2UubGV2ZWwgKiBuek1lbnVTZXJ2aWNlLmlubGluZUluZGVudFxyXG4gICAgICA6IG51bGxcclxuICBcIlxyXG4gIChtb3VzZWVudGVyKT1cInNldE1vdXNlRW50ZXJTdGF0ZSh0cnVlKVwiXHJcbiAgKG1vdXNlbGVhdmUpPVwic2V0TW91c2VFbnRlclN0YXRlKGZhbHNlKVwiXHJcbiAgKGNsaWNrKT1cImNsaWNrU3ViTWVudVRpdGxlKClcIlxyXG4+XHJcbiAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIm56SWNvblwiICpuZ0lmPVwibnpJY29uXCI+PC9pPlxyXG4gIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCJcclxuICAgID48c3Bhbj57eyBuelRpdGxlIH19PC9zcGFuPjwvbmctY29udGFpbmVyXHJcbiAgPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0aXRsZV1cIiAqbmdJZj1cIiFuelRpdGxlXCI+PC9uZy1jb250ZW50PlxyXG4gIDxzcGFuXHJcbiAgICAqbmdJZj1cIm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duOyBlbHNlIG5vdERyb3Bkb3duVHBsXCJcclxuICAgIGNsYXNzPVwiYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1hcnJvd1wiXHJcbiAgPlxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJyaWdodFwiIGNsYXNzPVwiYW50aWNvbi1yaWdodCBhbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWFycm93LWljb25cIj48L2k+XHJcbiAgPC9zcGFuPlxyXG4gIDxuZy10ZW1wbGF0ZSAjbm90RHJvcGRvd25UcGw+XHJcbiAgICA8aSBjbGFzcz1cImFudC1tZW51LXN1Ym1lbnUtYXJyb3dcIj48L2k+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbjx1bFxyXG4gICpuZ0lmPVwibnpNZW51U2VydmljZS5tb2RlID09PSAnaW5saW5lJ1wiXHJcbiAgW0Bjb2xsYXBzZU1vdGlvbl09XCJleHBhbmRTdGF0ZVwiXHJcbiAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICBbbmdDbGFzc109XCJuek1lbnVDbGFzc05hbWVcIlxyXG4gIGNsYXNzPVwiYW50LW1lbnUgYW50LW1lbnUtaW5saW5lIGFudC1tZW51LXN1YlwiXHJcbj5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwic3ViTWVudVRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuPC91bD5cclxuPG5nLXRlbXBsYXRlXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIm92ZXJsYXlQb3NpdGlvbnNcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCJ0cmlnZ2VyV2lkdGhcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJuek9wZW4gJiYgbnpNZW51U2VydmljZS5tb2RlICE9PSAnaW5saW5lJ1wiXHJcbj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImFudC1tZW51LXN1Ym1lbnUgYW50LW1lbnUtc3VibWVudS1wb3B1cFwiXHJcbiAgICBbQHNsaWRlTW90aW9uXT1cImV4cGFuZFN0YXRlXCJcclxuICAgIFtAem9vbUJpZ01vdGlvbl09XCJleHBhbmRTdGF0ZVwiXHJcbiAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBbY2xhc3MuYW50LW1lbnUtbGlnaHRdPVwibnpNZW51U2VydmljZS50aGVtZSA9PT0gJ2xpZ2h0J1wiXHJcbiAgICBbY2xhc3MuYW50LW1lbnUtZGFya109XCJuek1lbnVTZXJ2aWNlLnRoZW1lID09PSAnZGFyaydcIlxyXG4gICAgW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWJvdHRvbUxlZnRdPVwibnpTdWJtZW51U2VydmljZS5tb2RlID09PSAnaG9yaXpvbnRhbCdcIlxyXG4gICAgW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LXJpZ2h0VG9wXT1cIlxyXG4gICAgICBuelN1Ym1lbnVTZXJ2aWNlLm1vZGUgPT09ICd2ZXJ0aWNhbCcgJiYgcGxhY2VtZW50ID09PSAncmlnaHRUb3AnXHJcbiAgICBcIlxyXG4gICAgW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWxlZnRUb3BdPVwiXHJcbiAgICAgIG56U3VibWVudVNlcnZpY2UubW9kZSA9PT0gJ3ZlcnRpY2FsJyAmJiBwbGFjZW1lbnQgPT09ICdsZWZ0VG9wJ1xyXG4gICAgXCJcclxuICAgIChtb3VzZWxlYXZlKT1cInNldE1vdXNlRW50ZXJTdGF0ZShmYWxzZSlcIlxyXG4gICAgKG1vdXNlZW50ZXIpPVwic2V0TW91c2VFbnRlclN0YXRlKHRydWUpXCJcclxuICA+XHJcbiAgICA8dWxcclxuICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1tZW51XT1cIm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duXCJcclxuICAgICAgW2NsYXNzLmFudC1tZW51XT1cIiFuek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93blwiXHJcbiAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tbWVudS12ZXJ0aWNhbF09XCJuek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93blwiXHJcbiAgICAgIFtjbGFzcy5hbnQtbWVudS12ZXJ0aWNhbF09XCIhbnpNZW51U2VydmljZS5pc0luRHJvcERvd25cIlxyXG4gICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3ViXT1cIm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duXCJcclxuICAgICAgW2NsYXNzLmFudC1tZW51LXN1Yl09XCIhbnpNZW51U2VydmljZS5pc0luRHJvcERvd25cIlxyXG4gICAgICBbbmdDbGFzc109XCJuek1lbnVDbGFzc05hbWVcIlxyXG4gICAgPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwic3ViTWVudVRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI3N1Yk1lbnVUZW1wbGF0ZT5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==