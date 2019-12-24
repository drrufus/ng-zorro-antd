import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, ɵɵgetInheritedFactory, ɵsetClassMetadata, Injectable, ɵɵinject, SkipSelf, Optional, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineDirective, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵlistener, ɵɵProvidersFeature, ɵɵNgOnChangesFeature, Directive, Input, ContentChildren, ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵelementContainerStart, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelementContainerEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵprojection, ɵɵtemplate, ɵɵreference, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵclassProp, EventEmitter, ChangeDetectorRef, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵprojectionDef, ɵɵtemplateRefExtractor, ɵɵstyleProp, Component, ViewEncapsulation, ChangeDetectionStrategy, Host, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { BehaviorSubject, Subject, combineLatest, merge, EMPTY } from 'rxjs';
import { map, tap, auditTime, distinctUntilChanged, takeUntil, filter, startWith, flatMap } from 'rxjs/operators';
import { NzMenuBaseService, isNotNil, NzUpdateHostClassService, InputBoolean, DEFAULT_SUBMENU_POSITIONS, getPlacementName, POSITION_MAP, NzNoAnimationDirective, NzStringTemplateOutletDirective, collapseMotion, zoomBigMotion, slideMotion, NzDropdownHigherOrderServiceToken, NzNoAnimationModule, NzAddOnModule } from 'ng-zorro-antd/core';
import { NavigationEnd, RouterLink, RouterLinkWithHref, Router } from '@angular/router';
import { CdkConnectedOverlay, CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { NgIf, NgClass, NgTemplateOutlet, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMenuService extends NzMenuBaseService {
    constructor() {
        super(...arguments);
        this.isInDropDown = false;
    }
}
/** @nocollapse */ NzMenuService.ɵfac = function NzMenuService_Factory(t) { return ɵNzMenuService_BaseFactory(t || NzMenuService); };
/** @nocollapse */ NzMenuService.ɵprov = ɵɵdefineInjectable({ token: NzMenuService, factory: NzMenuService.ɵfac });
const ɵNzMenuService_BaseFactory = ɵɵgetInheritedFactory(NzMenuService);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMenuService, [{
        type: Injectable
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSubmenuService {
    constructor(nzHostSubmenuService, nzMenuService) {
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.disabled = false;
        this.mode = 'vertical';
        this.mode$ = this.nzMenuService.mode$.pipe(map(mode => {
            if (mode === 'inline') {
                return 'inline';
            }
            else if (mode === 'vertical' || this.nzHostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        }), tap(mode => (this.mode = mode)));
        this.level = 1;
        this.level$ = new BehaviorSubject(1);
        this.subMenuOpen$ = new BehaviorSubject(false);
        this.open$ = new BehaviorSubject(false);
        this.mouseEnterLeave$ = new Subject();
        this.menuOpen$ = combineLatest(this.subMenuOpen$, this.mouseEnterLeave$).pipe(map(value => value[0] || value[1]), auditTime(150), distinctUntilChanged(), tap(data => {
            this.setOpenState(data);
            if (this.nzHostSubmenuService) {
                this.nzHostSubmenuService.subMenuOpen$.next(data);
            }
        }));
        if (this.nzHostSubmenuService) {
            this.setLevel(this.nzHostSubmenuService.level + 1);
        }
    }
    setOpenState(value) {
        this.open$.next(value);
    }
    onMenuItemClick() {
        this.setMouseEnterState(false);
    }
    setLevel(value) {
        this.level$.next(value);
        this.level = value;
    }
    setMouseEnterState(value) {
        if ((this.mode === 'horizontal' || this.mode === 'vertical' || this.nzMenuService.isInDropDown) && !this.disabled) {
            this.mouseEnterLeave$.next(value);
        }
    }
}
/** @nocollapse */ NzSubmenuService.ɵfac = function NzSubmenuService_Factory(t) { return new (t || NzSubmenuService)(ɵɵinject(NzSubmenuService, 12), ɵɵinject(NzMenuService)); };
/** @nocollapse */ NzSubmenuService.ɵprov = ɵɵdefineInjectable({ token: NzSubmenuService, factory: NzSubmenuService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSubmenuService, [{
        type: Injectable
    }], function () { return [{ type: NzSubmenuService, decorators: [{
                type: SkipSelf
            }, {
                type: Optional
            }] }, { type: NzMenuService }]; }, null); })();

class NzMenuItemDirective {
    constructor(nzUpdateHostClassService, nzMenuService, nzSubmenuService, renderer, elementRef, routerLink, routerLinkWithHref, router) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzMenuService = nzMenuService;
        this.nzSubmenuService = nzSubmenuService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
        this.router = router;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.originalPadding = null;
        this.selected$ = new Subject();
        this.nzDisabled = false;
        this.nzSelected = false;
        this.nzMatchRouterExact = false;
        this.nzMatchRouter = false;
        if (router) {
            this.router.events.pipe(takeUntil(this.destroy$), filter(e => e instanceof NavigationEnd)).subscribe(() => {
                this.updateRouterActive();
            });
        }
    }
    /** clear all item selected status except this */
    clickMenuItem(e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.nzMenuService.onMenuItemClick(this);
        if (this.nzSubmenuService) {
            this.nzSubmenuService.onMenuItemClick();
        }
    }
    setClassMap() {
        const prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-item' : 'ant-menu-item';
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`${prefixName}`]: true,
            [`${prefixName}-selected`]: this.nzSelected,
            [`${prefixName}-disabled`]: this.nzDisabled
        });
    }
    setSelectedState(value) {
        this.nzSelected = value;
        this.selected$.next(value);
        this.setClassMap();
    }
    updateRouterActive() {
        if (!this.listOfRouterLink || !this.listOfRouterLinkWithHref || !this.router || !this.router.navigated || !this.nzMatchRouter) {
            return;
        }
        Promise.resolve().then(() => {
            const hasActiveLinks = this.hasActiveLinks();
            if (this.nzSelected !== hasActiveLinks) {
                this.nzSelected = hasActiveLinks;
                this.setSelectedState(this.nzSelected);
            }
        });
    }
    hasActiveLinks() {
        const isActiveCheckFn = this.isLinkActive(this.router);
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    }
    isLinkActive(router) {
        return (link) => router.isActive(link.urlTree, this.nzMatchRouterExact);
    }
    ngOnInit() {
        /** store origin padding in padding */
        const paddingLeft = this.el.style.paddingLeft;
        if (paddingLeft) {
            this.originalPadding = parseInt(paddingLeft, 10);
        }
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService ? this.nzSubmenuService.level$ : EMPTY)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            let padding = null;
            if (this.nzMenuService.mode === 'inline') {
                if (isNotNil(this.nzPaddingLeft)) {
                    padding = this.nzPaddingLeft;
                }
                else {
                    const level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
                    padding = level * this.nzMenuService.inlineIndent;
                }
            }
            else {
                padding = this.originalPadding;
            }
            if (padding) {
                this.renderer.setStyle(this.el, 'padding-left', `${padding}px`);
            }
            else {
                this.renderer.removeStyle(this.el, 'padding-left');
            }
        });
        this.setClassMap();
    }
    ngAfterContentInit() {
        this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateRouterActive());
        this.listOfRouterLinkWithHref.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateRouterActive());
        this.updateRouterActive();
    }
    ngOnChanges(changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
        if (changes.nzDisabled) {
            this.setClassMap();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzMenuItemDirective.ɵfac = function NzMenuItemDirective_Factory(t) { return new (t || NzMenuItemDirective)(ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(NzMenuBaseService), ɵɵdirectiveInject(NzSubmenuService, 8), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(RouterLink, 8), ɵɵdirectiveInject(RouterLinkWithHref, 8), ɵɵdirectiveInject(Router, 8)); };
/** @nocollapse */ NzMenuItemDirective.ɵdir = ɵɵdefineDirective({ type: NzMenuItemDirective, selectors: [["", "nz-menu-item", ""]], contentQueries: function NzMenuItemDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, RouterLink, true);
        ɵɵcontentQuery(dirIndex, RouterLinkWithHref, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfRouterLink = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfRouterLinkWithHref = _t);
    } }, hostBindings: function NzMenuItemDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵlistener("click", function NzMenuItemDirective_click_HostBindingHandler($event) { return ctx.clickMenuItem($event); });
    } }, inputs: { nzDisabled: "nzDisabled", nzSelected: "nzSelected", nzPaddingLeft: "nzPaddingLeft", nzMatchRouterExact: "nzMatchRouterExact", nzMatchRouter: "nzMatchRouter" }, exportAs: ["nzMenuItem"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuItemDirective.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuItemDirective.prototype, "nzSelected", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuItemDirective.prototype, "nzMatchRouterExact", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuItemDirective.prototype, "nzMatchRouter", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMenuItemDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-menu-item]',
                exportAs: 'nzMenuItem',
                providers: [NzUpdateHostClassService],
                host: {
                    '(click)': 'clickMenuItem($event)'
                }
            }]
    }], function () { return [{ type: NzUpdateHostClassService }, { type: NzMenuBaseService }, { type: NzSubmenuService, decorators: [{
                type: Optional
            }] }, { type: Renderer2 }, { type: ElementRef }, { type: RouterLink, decorators: [{
                type: Optional
            }] }, { type: RouterLinkWithHref, decorators: [{
                type: Optional
            }] }, { type: Router, decorators: [{
                type: Optional
            }] }]; }, { nzDisabled: [{
            type: Input
        }], nzSelected: [{
            type: Input
        }], nzPaddingLeft: [{
            type: Input
        }], nzMatchRouterExact: [{
            type: Input
        }], nzMatchRouter: [{
            type: Input
        }], listOfRouterLink: [{
            type: ContentChildren,
            args: [RouterLink, { descendants: true }]
        }], listOfRouterLinkWithHref: [{
            type: ContentChildren,
            args: [RouterLinkWithHref, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzMenuServiceFactory(higherOrderService, menuService) {
    return higherOrderService ? higherOrderService : menuService;
}

const _c0 = ["nz-submenu", ""];
function NzSubMenuComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 10);
} if (rf & 2) {
    const ctx_r1219 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r1219.nzIcon);
} }
function NzSubMenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1220 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1220.nzTitle);
} }
function NzSubMenuComponent_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!nzTitle"]);
} }
function NzSubMenuComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵelement(1, "i", 12);
    ɵɵelementEnd();
} }
function NzSubMenuComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 13);
} }
function NzSubMenuComponent_ul_8_ng_template_1_Template(rf, ctx) { }
function NzSubMenuComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 14);
    ɵɵtemplate(1, NzSubMenuComponent_ul_8_ng_template_1_Template, 0, 0, "ng-template", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1225 = ɵɵnextContext();
    const _r1227 = ɵɵreference(11);
    ɵɵproperty("@collapseMotion", ctx_r1225.expandState)("@.disabled", ctx_r1225.noAnimation == null ? null : ctx_r1225.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1225.noAnimation == null ? null : ctx_r1225.noAnimation.nzNoAnimation)("ngClass", ctx_r1225.nzMenuClassName);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1227);
} }
function NzSubMenuComponent_ng_template_9_ng_template_2_Template(rf, ctx) { }
function NzSubMenuComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r1232 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16);
    ɵɵlistener("mouseleave", function NzSubMenuComponent_ng_template_9_Template_div_mouseleave_0_listener($event) { ɵɵrestoreView(_r1232); const ctx_r1231 = ɵɵnextContext(); return ctx_r1231.setMouseEnterState(false); })("mouseenter", function NzSubMenuComponent_ng_template_9_Template_div_mouseenter_0_listener($event) { ɵɵrestoreView(_r1232); const ctx_r1233 = ɵɵnextContext(); return ctx_r1233.setMouseEnterState(true); });
    ɵɵelementStart(1, "ul", 17);
    ɵɵtemplate(2, NzSubMenuComponent_ng_template_9_ng_template_2_Template, 0, 0, "ng-template", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1226 = ɵɵnextContext();
    const _r1227 = ɵɵreference(11);
    ɵɵclassProp("ant-menu-light", ctx_r1226.nzMenuService.theme === "light")("ant-menu-dark", ctx_r1226.nzMenuService.theme === "dark")("ant-menu-submenu-placement-bottomLeft", ctx_r1226.nzSubmenuService.mode === "horizontal")("ant-menu-submenu-placement-rightTop", ctx_r1226.nzSubmenuService.mode === "vertical" && ctx_r1226.placement === "rightTop")("ant-menu-submenu-placement-leftTop", ctx_r1226.nzSubmenuService.mode === "vertical" && ctx_r1226.placement === "leftTop");
    ɵɵproperty("@slideMotion", ctx_r1226.expandState)("@zoomBigMotion", ctx_r1226.expandState)("@.disabled", ctx_r1226.noAnimation == null ? null : ctx_r1226.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1226.noAnimation == null ? null : ctx_r1226.noAnimation.nzNoAnimation);
    ɵɵadvance(1);
    ɵɵclassProp("ant-dropdown-menu", ctx_r1226.nzMenuService.isInDropDown)("ant-menu", !ctx_r1226.nzMenuService.isInDropDown)("ant-dropdown-menu-vertical", ctx_r1226.nzMenuService.isInDropDown)("ant-menu-vertical", !ctx_r1226.nzMenuService.isInDropDown)("ant-dropdown-menu-sub", ctx_r1226.nzMenuService.isInDropDown)("ant-menu-sub", !ctx_r1226.nzMenuService.isInDropDown);
    ɵɵproperty("ngClass", ctx_r1226.nzMenuClassName);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1227);
} }
function NzSubMenuComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 1);
} }
const _c1 = [[["", "title", ""]], "*"];
const _c2 = ["[title]", "*"];
class NzSubMenuComponent {
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
/** @nocollapse */ NzSubMenuComponent.ɵfac = function NzSubMenuComponent_Factory(t) { return new (t || NzSubMenuComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzMenuBaseService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzSubmenuService), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzSubMenuComponent.ɵcmp = ɵɵdefineComponent({ type: NzSubMenuComponent, selectors: [["", "nz-submenu", ""]], contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzSubMenuComponent, true);
        ɵɵcontentQuery(dirIndex, NzMenuItemDirective, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
    } }, viewQuery: function NzSubMenuComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(CdkConnectedOverlay, true);
        ɵɵstaticViewQuery(CdkOverlayOrigin, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
    } }, inputs: { nzMenuClassName: "nzMenuClassName", nzPaddingLeft: "nzPaddingLeft", nzTitle: "nzTitle", nzIcon: "nzIcon", nzOpen: "nzOpen", nzDisabled: "nzDisabled" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzSubmenu"], features: [ɵɵProvidersFeature([NzSubmenuService, NzUpdateHostClassService]), ɵɵNgOnChangesFeature()], attrs: _c0, ngContentSelectors: _c2, decls: 12, vars: 13, consts: [["cdkOverlayOrigin", "", 3, "mouseenter", "mouseleave", "click"], ["origin", "cdkOverlayOrigin"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [4, "ngIf"], ["class", "ant-dropdown-menu-submenu-arrow", 4, "ngIf", "ngIfElse"], ["notDropdownTpl", ""], ["class", "ant-menu ant-menu-inline ant-menu-sub", 3, "nzNoAnimation", "ngClass", 4, "ngIf"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "positionChange"], ["subMenuTemplate", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-dropdown-menu-submenu-arrow"], ["nz-icon", "", "nzType", "right", 1, "anticon-right", "ant-dropdown-menu-submenu-arrow-icon"], [1, "ant-menu-submenu-arrow"], [1, "ant-menu", "ant-menu-inline", "ant-menu-sub", 3, "nzNoAnimation", "ngClass"], [3, "ngTemplateOutlet"], [1, "ant-menu-submenu", "ant-menu-submenu-popup", 3, "nzNoAnimation", "mouseleave", "mouseenter"], [3, "ngClass"]], template: function NzSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c1);
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵlistener("mouseenter", function NzSubMenuComponent_Template_div_mouseenter_0_listener($event) { return ctx.setMouseEnterState(true); })("mouseleave", function NzSubMenuComponent_Template_div_mouseleave_0_listener($event) { return ctx.setMouseEnterState(false); })("click", function NzSubMenuComponent_Template_div_click_0_listener($event) { return ctx.clickSubMenuTitle(); });
        ɵɵtemplate(2, NzSubMenuComponent_i_2_Template, 1, 1, "i", 2);
        ɵɵtemplate(3, NzSubMenuComponent_ng_container_3_Template, 3, 1, "ng-container", 3);
        ɵɵtemplate(4, NzSubMenuComponent_4_Template, 1, 0, undefined, 4);
        ɵɵtemplate(5, NzSubMenuComponent_span_5_Template, 2, 0, "span", 5);
        ɵɵtemplate(6, NzSubMenuComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵtemplate(8, NzSubMenuComponent_ul_8_Template, 2, 5, "ul", 7);
        ɵɵtemplate(9, NzSubMenuComponent_ng_template_9_Template, 3, 17, "ng-template", 8);
        ɵɵlistener("positionChange", function NzSubMenuComponent_Template_ng_template_positionChange_9_listener($event) { return ctx.onPositionChange($event); });
        ɵɵtemplate(10, NzSubMenuComponent_ng_template_10_Template, 1, 0, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1218 = ɵɵreference(1);
        const _r1223 = ɵɵreference(7);
        ɵɵstyleProp("padding-left", ctx.nzMenuService.mode === "inline" ? ctx.nzPaddingLeft ? ctx.nzPaddingLeft : ctx.nzSubmenuService.level * ctx.nzMenuService.inlineIndent : null, "px");
        ɵɵclassProp("ant-dropdown-menu-submenu-title", ctx.nzMenuService.isInDropDown)("ant-menu-submenu-title", !ctx.nzMenuService.isInDropDown);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.nzIcon);
        ɵɵadvance(1);
        ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.nzTitle);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzMenuService.isInDropDown)("ngIfElse", _r1223);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.nzMenuService.mode === "inline");
        ɵɵadvance(1);
        ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", _r1218)("cdkConnectedOverlayWidth", ctx.triggerWidth)("cdkConnectedOverlayOpen", ctx.nzOpen && ctx.nzMenuService.mode !== "inline");
    } }, directives: [CdkOverlayOrigin, NgIf, NzStringTemplateOutletDirective, CdkConnectedOverlay, NzIconDirective, NzNoAnimationDirective, NgClass, NgTemplateOutlet], styles: ["\n      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [collapseMotion, zoomBigMotion, slideMotion] }, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSubMenuComponent.prototype, "nzOpen", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSubMenuComponent.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSubMenuComponent, [{
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
    }], function () { return [{ type: ElementRef }, { type: NzMenuBaseService }, { type: ChangeDetectorRef }, { type: NzSubmenuService }, { type: NzUpdateHostClassService }, { type: Platform }, { type: NzNoAnimationDirective, decorators: [{
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

class NzMenuDirective {
    constructor(elementRef, nzMenuService, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzMenuService = nzMenuService;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.destroy$ = new Subject();
        this.listOfOpenedNzSubMenuComponent = [];
        this.nzInlineIndent = 24;
        this.nzTheme = 'light';
        this.nzMode = 'vertical';
        this.nzInDropDown = false;
        this.nzInlineCollapsed = false;
        this.nzSelectable = !this.nzMenuService.isInDropDown;
        this.nzClick = new EventEmitter();
    }
    updateInlineCollapse() {
        if (this.listOfNzMenuItemDirective) {
            if (this.nzInlineCollapsed) {
                this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter(submenu => submenu.nzOpen);
                this.listOfNzSubMenuComponent.forEach(submenu => submenu.setOpenState(false));
                this.nzMode = 'vertical';
            }
            else {
                this.listOfOpenedNzSubMenuComponent.forEach(submenu => submenu.setOpenState(true));
                this.listOfOpenedNzSubMenuComponent = [];
                this.nzMode = this.cacheMode;
            }
            this.nzMenuService.setMode(this.nzMode);
        }
    }
    setClassMap() {
        const prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu' : 'ant-menu';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefixName}`]: true,
            [`${prefixName}-root`]: true,
            [`${prefixName}-${this.nzTheme}`]: true,
            [`${prefixName}-${this.nzMode}`]: true,
            [`${prefixName}-inline-collapsed`]: this.nzInlineCollapsed
        });
    }
    ngOnInit() {
        this.setClassMap();
        this.nzMenuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe(menu => {
            this.nzClick.emit(menu);
            if (this.nzSelectable) {
                this.listOfNzMenuItemDirective.forEach(item => item.setSelectedState(item === menu));
            }
        });
    }
    ngAfterContentInit() {
        this.cacheMode = this.nzMode;
        this.updateInlineCollapse();
    }
    ngOnChanges(changes) {
        if (changes.nzInlineCollapsed) {
            this.updateInlineCollapse();
        }
        if (changes.nzInlineIndent) {
            this.nzMenuService.setInlineIndent(this.nzInlineIndent);
        }
        if (changes.nzInDropDown) {
            this.nzMenuService.isInDropDown = this.nzInDropDown;
        }
        if (changes.nzTheme) {
            this.nzMenuService.setTheme(this.nzTheme);
        }
        if (changes.nzMode) {
            this.nzMenuService.setMode(this.nzMode);
            if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                this.listOfNzSubMenuComponent.forEach(submenu => submenu.setOpenState(false));
            }
        }
        if (changes.nzTheme || changes.nzMode || changes.nzInlineCollapsed) {
            this.setClassMap();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzMenuDirective.ɵfac = function NzMenuDirective_Factory(t) { return new (t || NzMenuDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzMenuBaseService), ɵɵdirectiveInject(NzUpdateHostClassService)); };
/** @nocollapse */ NzMenuDirective.ɵdir = ɵɵdefineDirective({ type: NzMenuDirective, selectors: [["", "nz-menu", ""]], contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzMenuItemDirective, true);
        ɵɵcontentQuery(dirIndex, NzSubMenuComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
    } }, inputs: { nzInlineIndent: "nzInlineIndent", nzTheme: "nzTheme", nzMode: "nzMode", nzInDropDown: "nzInDropDown", nzInlineCollapsed: "nzInlineCollapsed", nzSelectable: "nzSelectable" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzMenu"], features: [ɵɵProvidersFeature([
            NzUpdateHostClassService,
            NzMenuService,
            {
                provide: NzMenuBaseService,
                useFactory: NzMenuServiceFactory,
                deps: [[new SkipSelf(), new Optional(), NzDropdownHigherOrderServiceToken], NzMenuService]
            }
        ]), ɵɵNgOnChangesFeature()] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuDirective.prototype, "nzInDropDown", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuDirective.prototype, "nzSelectable", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-menu]',
                exportAs: 'nzMenu',
                providers: [
                    NzUpdateHostClassService,
                    NzMenuService,
                    {
                        provide: NzMenuBaseService,
                        useFactory: NzMenuServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), NzDropdownHigherOrderServiceToken], NzMenuService]
                    }
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: NzMenuBaseService }, { type: NzUpdateHostClassService }]; }, { listOfNzMenuItemDirective: [{
            type: ContentChildren,
            args: [NzMenuItemDirective, { descendants: true }]
        }], listOfNzSubMenuComponent: [{
            type: ContentChildren,
            args: [NzSubMenuComponent, { descendants: true }]
        }], nzInlineIndent: [{
            type: Input
        }], nzTheme: [{
            type: Input
        }], nzMode: [{
            type: Input
        }], nzInDropDown: [{
            type: Input
        }], nzInlineCollapsed: [{
            type: Input
        }], nzSelectable: [{
            type: Input
        }], nzClick: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$1 = ["nz-menu-group", ""];
function NzMenuGroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1234 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1234.nzTitle);
} }
function NzMenuGroupComponent_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 1, ["*ngIf", "!nzTitle"]);
} }
const _c1$1 = ["*", [["", "title", ""]]];
const _c2$1 = ["*", "[title]"];
class NzMenuGroupComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-menu-item-group');
    }
}
/** @nocollapse */ NzMenuGroupComponent.ɵfac = function NzMenuGroupComponent_Factory(t) { return new (t || NzMenuGroupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzMenuGroupComponent.ɵcmp = ɵɵdefineComponent({ type: NzMenuGroupComponent, selectors: [["", "nz-menu-group", ""]], inputs: { nzTitle: "nzTitle" }, exportAs: ["nzMenuGroup"], attrs: _c0$1, ngContentSelectors: _c2$1, decls: 5, vars: 2, consts: [[1, "ant-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [4, "ngIf"], [1, "ant-menu-item-group-list"]], template: function NzMenuGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c1$1);
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, NzMenuGroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵɵtemplate(2, NzMenuGroupComponent_2_Template, 1, 0, undefined, 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "ul", 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.nzTitle);
    } }, directives: [NzStringTemplateOutletDirective, NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMenuGroupComponent, [{
        type: Component,
        args: [{
                selector: '[nz-menu-group]',
                exportAs: 'nzMenuGroup',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-menu-group.component.html',
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { nzTitle: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMenuDividerDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
    }
}
/** @nocollapse */ NzMenuDividerDirective.ɵfac = function NzMenuDividerDirective_Factory(t) { return new (t || NzMenuDividerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzMenuDividerDirective.ɵdir = ɵɵdefineDirective({ type: NzMenuDividerDirective, selectors: [["", "nz-menu-divider", ""]], exportAs: ["nzMenuDivider"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMenuDividerDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-menu-divider]',
                exportAs: 'nzMenuDivider'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMenuModule {
}
/** @nocollapse */ NzMenuModule.ɵmod = ɵɵdefineNgModule({ type: NzMenuModule });
/** @nocollapse */ NzMenuModule.ɵinj = ɵɵdefineInjector({ factory: function NzMenuModule_Factory(t) { return new (t || NzMenuModule)(); }, imports: [[CommonModule, FormsModule, PlatformModule, NzButtonModule, OverlayModule, NzIconModule, NzNoAnimationModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzMenuModule, { declarations: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent], imports: [CommonModule, FormsModule, PlatformModule, NzButtonModule, OverlayModule, NzIconModule, NzNoAnimationModule, NzAddOnModule], exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMenuModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, PlatformModule, NzButtonModule, OverlayModule, NzIconModule, NzNoAnimationModule, NzAddOnModule],
                declarations: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent],
                exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzMenuDirective, NzMenuDividerDirective, NzMenuGroupComponent, NzMenuItemDirective, NzMenuModule, NzMenuService, NzMenuServiceFactory, NzSubMenuComponent, NzSubmenuService };
//# sourceMappingURL=ng-zorro-antd-menu.js.map
