import { __extends, __decorate, __metadata, __spread, __read } from 'tslib';
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

var NzMenuService = /** @class */ (function (_super) {
    __extends(NzMenuService, _super);
    function NzMenuService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInDropDown = false;
        return _this;
    }
    /** @nocollapse */ NzMenuService.ɵfac = function NzMenuService_Factory(t) { return ɵNzMenuService_BaseFactory(t || NzMenuService); };
    /** @nocollapse */ NzMenuService.ɵprov = ɵɵdefineInjectable({ token: NzMenuService, factory: NzMenuService.ɵfac });
    return NzMenuService;
}(NzMenuBaseService));
var ɵNzMenuService_BaseFactory = ɵɵgetInheritedFactory(NzMenuService);
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
var NzSubmenuService = /** @class */ (function () {
    function NzSubmenuService(nzHostSubmenuService, nzMenuService) {
        var _this = this;
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.disabled = false;
        this.mode = 'vertical';
        this.mode$ = this.nzMenuService.mode$.pipe(map(function (mode) {
            if (mode === 'inline') {
                return 'inline';
            }
            else if (mode === 'vertical' || _this.nzHostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        }), tap(function (mode) { return (_this.mode = mode); }));
        this.level = 1;
        this.level$ = new BehaviorSubject(1);
        this.subMenuOpen$ = new BehaviorSubject(false);
        this.open$ = new BehaviorSubject(false);
        this.mouseEnterLeave$ = new Subject();
        this.menuOpen$ = combineLatest(this.subMenuOpen$, this.mouseEnterLeave$).pipe(map(function (value) { return value[0] || value[1]; }), auditTime(150), distinctUntilChanged(), tap(function (data) {
            _this.setOpenState(data);
            if (_this.nzHostSubmenuService) {
                _this.nzHostSubmenuService.subMenuOpen$.next(data);
            }
        }));
        if (this.nzHostSubmenuService) {
            this.setLevel(this.nzHostSubmenuService.level + 1);
        }
    }
    NzSubmenuService.prototype.setOpenState = function (value) {
        this.open$.next(value);
    };
    NzSubmenuService.prototype.onMenuItemClick = function () {
        this.setMouseEnterState(false);
    };
    NzSubmenuService.prototype.setLevel = function (value) {
        this.level$.next(value);
        this.level = value;
    };
    NzSubmenuService.prototype.setMouseEnterState = function (value) {
        if ((this.mode === 'horizontal' || this.mode === 'vertical' || this.nzMenuService.isInDropDown) && !this.disabled) {
            this.mouseEnterLeave$.next(value);
        }
    };
    /** @nocollapse */ NzSubmenuService.ɵfac = function NzSubmenuService_Factory(t) { return new (t || NzSubmenuService)(ɵɵinject(NzSubmenuService, 12), ɵɵinject(NzMenuService)); };
    /** @nocollapse */ NzSubmenuService.ɵprov = ɵɵdefineInjectable({ token: NzSubmenuService, factory: NzSubmenuService.ɵfac });
    return NzSubmenuService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSubmenuService, [{
        type: Injectable
    }], function () { return [{ type: NzSubmenuService, decorators: [{
                type: SkipSelf
            }, {
                type: Optional
            }] }, { type: NzMenuService }]; }, null); })();

var NzMenuItemDirective = /** @class */ (function () {
    function NzMenuItemDirective(nzUpdateHostClassService, nzMenuService, nzSubmenuService, renderer, elementRef, routerLink, routerLinkWithHref, router) {
        var _this = this;
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
            this.router.events.pipe(takeUntil(this.destroy$), filter(function (e) { return e instanceof NavigationEnd; })).subscribe(function () {
                _this.updateRouterActive();
            });
        }
    }
    /** clear all item selected status except this */
    NzMenuItemDirective.prototype.clickMenuItem = function (e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.nzMenuService.onMenuItemClick(this);
        if (this.nzSubmenuService) {
            this.nzSubmenuService.onMenuItemClick();
        }
    };
    NzMenuItemDirective.prototype.setClassMap = function () {
        var _a;
        var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-item' : 'ant-menu-item';
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-selected"] = this.nzSelected,
            _a[prefixName + "-disabled"] = this.nzDisabled,
            _a));
    };
    NzMenuItemDirective.prototype.setSelectedState = function (value) {
        this.nzSelected = value;
        this.selected$.next(value);
        this.setClassMap();
    };
    NzMenuItemDirective.prototype.updateRouterActive = function () {
        var _this = this;
        if (!this.listOfRouterLink || !this.listOfRouterLinkWithHref || !this.router || !this.router.navigated || !this.nzMatchRouter) {
            return;
        }
        Promise.resolve().then(function () {
            var hasActiveLinks = _this.hasActiveLinks();
            if (_this.nzSelected !== hasActiveLinks) {
                _this.nzSelected = hasActiveLinks;
                _this.setSelectedState(_this.nzSelected);
            }
        });
    };
    NzMenuItemDirective.prototype.hasActiveLinks = function () {
        var isActiveCheckFn = this.isLinkActive(this.router);
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    };
    NzMenuItemDirective.prototype.isLinkActive = function (router) {
        var _this = this;
        return function (link) { return router.isActive(link.urlTree, _this.nzMatchRouterExact); };
    };
    NzMenuItemDirective.prototype.ngOnInit = function () {
        var _this = this;
        /** store origin padding in padding */
        var paddingLeft = this.el.style.paddingLeft;
        if (paddingLeft) {
            this.originalPadding = parseInt(paddingLeft, 10);
        }
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService ? this.nzSubmenuService.level$ : EMPTY)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () {
            var padding = null;
            if (_this.nzMenuService.mode === 'inline') {
                if (isNotNil(_this.nzPaddingLeft)) {
                    padding = _this.nzPaddingLeft;
                }
                else {
                    var level = _this.nzSubmenuService ? _this.nzSubmenuService.level + 1 : 1;
                    padding = level * _this.nzMenuService.inlineIndent;
                }
            }
            else {
                padding = _this.originalPadding;
            }
            if (padding) {
                _this.renderer.setStyle(_this.el, 'padding-left', padding + "px");
            }
            else {
                _this.renderer.removeStyle(_this.el, 'padding-left');
            }
        });
        this.setClassMap();
    };
    NzMenuItemDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this.updateRouterActive(); });
        this.listOfRouterLinkWithHref.changes.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this.updateRouterActive(); });
        this.updateRouterActive();
    };
    NzMenuItemDirective.prototype.ngOnChanges = function (changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
        if (changes.nzDisabled) {
            this.setClassMap();
        }
    };
    NzMenuItemDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
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
    return NzMenuItemDirective;
}());
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

var _c0 = ["nz-submenu", ""];
function NzSubMenuComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 10);
} if (rf & 2) {
    var ctx_r1237 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r1237.nzIcon);
} }
function NzSubMenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1238 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1238.nzTitle);
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
    var ctx_r1243 = ɵɵnextContext();
    var _r1245 = ɵɵreference(11);
    ɵɵproperty("@collapseMotion", ctx_r1243.expandState)("@.disabled", ctx_r1243.noAnimation == null ? null : ctx_r1243.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1243.noAnimation == null ? null : ctx_r1243.noAnimation.nzNoAnimation)("ngClass", ctx_r1243.nzMenuClassName);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1245);
} }
function NzSubMenuComponent_ng_template_9_ng_template_2_Template(rf, ctx) { }
function NzSubMenuComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    var _r1250 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16);
    ɵɵlistener("mouseleave", function NzSubMenuComponent_ng_template_9_Template_div_mouseleave_0_listener($event) { ɵɵrestoreView(_r1250); var ctx_r1249 = ɵɵnextContext(); return ctx_r1249.setMouseEnterState(false); })("mouseenter", function NzSubMenuComponent_ng_template_9_Template_div_mouseenter_0_listener($event) { ɵɵrestoreView(_r1250); var ctx_r1251 = ɵɵnextContext(); return ctx_r1251.setMouseEnterState(true); });
    ɵɵelementStart(1, "ul", 17);
    ɵɵtemplate(2, NzSubMenuComponent_ng_template_9_ng_template_2_Template, 0, 0, "ng-template", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1244 = ɵɵnextContext();
    var _r1245 = ɵɵreference(11);
    ɵɵclassProp("ant-menu-light", ctx_r1244.nzMenuService.theme === "light")("ant-menu-dark", ctx_r1244.nzMenuService.theme === "dark")("ant-menu-submenu-placement-bottomLeft", ctx_r1244.nzSubmenuService.mode === "horizontal")("ant-menu-submenu-placement-rightTop", ctx_r1244.nzSubmenuService.mode === "vertical" && ctx_r1244.placement === "rightTop")("ant-menu-submenu-placement-leftTop", ctx_r1244.nzSubmenuService.mode === "vertical" && ctx_r1244.placement === "leftTop");
    ɵɵproperty("@slideMotion", ctx_r1244.expandState)("@zoomBigMotion", ctx_r1244.expandState)("@.disabled", ctx_r1244.noAnimation == null ? null : ctx_r1244.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1244.noAnimation == null ? null : ctx_r1244.noAnimation.nzNoAnimation);
    ɵɵadvance(1);
    ɵɵclassProp("ant-dropdown-menu", ctx_r1244.nzMenuService.isInDropDown)("ant-menu", !ctx_r1244.nzMenuService.isInDropDown)("ant-dropdown-menu-vertical", ctx_r1244.nzMenuService.isInDropDown)("ant-menu-vertical", !ctx_r1244.nzMenuService.isInDropDown)("ant-dropdown-menu-sub", ctx_r1244.nzMenuService.isInDropDown)("ant-menu-sub", !ctx_r1244.nzMenuService.isInDropDown);
    ɵɵproperty("ngClass", ctx_r1244.nzMenuClassName);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1245);
} }
function NzSubMenuComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 1);
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
            var _r1236 = ɵɵreference(1);
            var _r1241 = ɵɵreference(7);
            ɵɵstyleProp("padding-left", ctx.nzMenuService.mode === "inline" ? ctx.nzPaddingLeft ? ctx.nzPaddingLeft : ctx.nzSubmenuService.level * ctx.nzMenuService.inlineIndent : null, "px");
            ɵɵclassProp("ant-dropdown-menu-submenu-title", ctx.nzMenuService.isInDropDown)("ant-menu-submenu-title", !ctx.nzMenuService.isInDropDown);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.nzIcon);
            ɵɵadvance(1);
            ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.nzTitle);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzMenuService.isInDropDown)("ngIfElse", _r1241);
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.nzMenuService.mode === "inline");
            ɵɵadvance(1);
            ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", _r1236)("cdkConnectedOverlayWidth", ctx.triggerWidth)("cdkConnectedOverlayOpen", ctx.nzOpen && ctx.nzMenuService.mode !== "inline");
        } }, directives: [CdkOverlayOrigin, NgIf, NzStringTemplateOutletDirective, CdkConnectedOverlay, NzIconDirective, NzNoAnimationDirective, NgClass, NgTemplateOutlet], styles: ["\n      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [collapseMotion, zoomBigMotion, slideMotion] }, changeDetection: 0 });
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
                    "\n      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "
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

var NzMenuDirective = /** @class */ (function () {
    function NzMenuDirective(elementRef, nzMenuService, nzUpdateHostClassService) {
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
    NzMenuDirective.prototype.updateInlineCollapse = function () {
        if (this.listOfNzMenuItemDirective) {
            if (this.nzInlineCollapsed) {
                this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter(function (submenu) { return submenu.nzOpen; });
                this.listOfNzSubMenuComponent.forEach(function (submenu) { return submenu.setOpenState(false); });
                this.nzMode = 'vertical';
            }
            else {
                this.listOfOpenedNzSubMenuComponent.forEach(function (submenu) { return submenu.setOpenState(true); });
                this.listOfOpenedNzSubMenuComponent = [];
                this.nzMode = this.cacheMode;
            }
            this.nzMenuService.setMode(this.nzMode);
        }
    };
    NzMenuDirective.prototype.setClassMap = function () {
        var _a;
        var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu' : 'ant-menu';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-root"] = true,
            _a[prefixName + "-" + this.nzTheme] = true,
            _a[prefixName + "-" + this.nzMode] = true,
            _a[prefixName + "-inline-collapsed"] = this.nzInlineCollapsed,
            _a));
    };
    NzMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.setClassMap();
        this.nzMenuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe(function (menu) {
            _this.nzClick.emit(menu);
            if (_this.nzSelectable) {
                _this.listOfNzMenuItemDirective.forEach(function (item) { return item.setSelectedState(item === menu); });
            }
        });
    };
    NzMenuDirective.prototype.ngAfterContentInit = function () {
        this.cacheMode = this.nzMode;
        this.updateInlineCollapse();
    };
    NzMenuDirective.prototype.ngOnChanges = function (changes) {
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
                this.listOfNzSubMenuComponent.forEach(function (submenu) { return submenu.setOpenState(false); });
            }
        }
        if (changes.nzTheme || changes.nzMode || changes.nzInlineCollapsed) {
            this.setClassMap();
        }
    };
    NzMenuDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
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
    return NzMenuDirective;
}());
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
var _c0$1 = ["nz-menu-group", ""];
function NzMenuGroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1252 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1252.nzTitle);
} }
function NzMenuGroupComponent_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 1, ["*ngIf", "!nzTitle"]);
} }
var _c1$1 = ["*", [["", "title", ""]]];
var _c2$1 = ["*", "[title]"];
var NzMenuGroupComponent = /** @class */ (function () {
    function NzMenuGroupComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-menu-item-group');
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
    return NzMenuGroupComponent;
}());
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
var NzMenuDividerDirective = /** @class */ (function () {
    function NzMenuDividerDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
    }
    /** @nocollapse */ NzMenuDividerDirective.ɵfac = function NzMenuDividerDirective_Factory(t) { return new (t || NzMenuDividerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzMenuDividerDirective.ɵdir = ɵɵdefineDirective({ type: NzMenuDividerDirective, selectors: [["", "nz-menu-divider", ""]], exportAs: ["nzMenuDivider"] });
    return NzMenuDividerDirective;
}());
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
var NzMenuModule = /** @class */ (function () {
    function NzMenuModule() {
    }
    /** @nocollapse */ NzMenuModule.ɵmod = ɵɵdefineNgModule({ type: NzMenuModule });
    /** @nocollapse */ NzMenuModule.ɵinj = ɵɵdefineInjector({ factory: function NzMenuModule_Factory(t) { return new (t || NzMenuModule)(); }, imports: [[CommonModule, FormsModule, PlatformModule, NzButtonModule, OverlayModule, NzIconModule, NzNoAnimationModule, NzAddOnModule]] });
    return NzMenuModule;
}());
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
