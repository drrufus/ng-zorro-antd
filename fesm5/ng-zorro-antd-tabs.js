import { ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵproperty, ɵɵdefineComponent, ɵɵallocHostVars, ɵɵclassProp, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, Directive, Optional, Self, ɵɵprojection, EventEmitter, ɵɵcontentQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵstaticViewQuery, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵtemplateRefExtractor, ViewChild, ContentChild, Output, NgZone, ɵɵelementStart, ɵɵelementEnd, ChangeDetectorRef, ɵɵlistener, ɵɵelement, ContentChildren, ɵɵtext, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵstyleProp, ɵɵviewQuery, ɵɵProvidersFeature, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { NgIf, NgTemplateOutlet, CommonModule, NgClass, NgComponentOutlet, NgForOf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { __decorate, __metadata, __spread } from 'tslib';
import { InputBoolean, pxToNumber, NzDomEventService, toNumber, PREFIX, NzConfigService, NzUpdateHostClassService, WithConfig, NzAddOnModule, NzStringTemplateOutletDirective, NzClassListAddDirective } from 'ng-zorro-antd/core';
import { Subject, of, merge, Subscription } from 'rxjs';
import { RouterLink, RouterLinkWithHref, NavigationEnd, Router } from '@angular/router';
import { ObserversModule, CdkObserveContent } from '@angular/cdk/observers';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { NzIconModule, NzIconDirective } from 'ng-zorro-antd/icon';
import { Directionality } from '@angular/cdk/bidi';
import { takeUntil, finalize, startWith, filter } from 'rxjs/operators';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0 = ["nz-tab-body", ""];
function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r836 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r836.content);
} }
var NzTabBodyComponent = /** @class */ (function () {
    function NzTabBodyComponent() {
        this.active = false;
        this.forceRender = false;
    }
    /** @nocollapse */ NzTabBodyComponent.ɵfac = function NzTabBodyComponent_Factory(t) { return new (t || NzTabBodyComponent)(); };
    /** @nocollapse */ NzTabBodyComponent.ɵcmp = ɵɵdefineComponent({ type: NzTabBodyComponent, selectors: [["", "nz-tab-body", ""]], hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(2);
        } if (rf & 2) {
            ɵɵclassProp("ant-tabs-tabpane-active", ctx.active)("ant-tabs-tabpane-inactive", !ctx.active);
        } }, inputs: { content: "content", active: "active", forceRender: "forceRender" }, exportAs: ["nzTabBody"], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.active || ctx.forceRender);
        } }, directives: [NgIf, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    return NzTabBodyComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTabBodyComponent, [{
        type: Component,
        args: [{
                selector: '[nz-tab-body]',
                exportAs: 'nzTabBody',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-tab-body.component.html',
                host: {
                    '[class.ant-tabs-tabpane-active]': 'active',
                    '[class.ant-tabs-tabpane-inactive]': '!active'
                }
            }]
    }], null, { content: [{
            type: Input
        }], active: [{
            type: Input
        }], forceRender: [{
            type: Input
        }] }); })();

var NzTabLabelDirective = /** @class */ (function () {
    function NzTabLabelDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-tab');
    }
    NzTabLabelDirective.prototype.getOffsetLeft = function () {
        return this.elementRef.nativeElement.offsetLeft;
    };
    NzTabLabelDirective.prototype.getOffsetWidth = function () {
        return this.elementRef.nativeElement.offsetWidth;
    };
    NzTabLabelDirective.prototype.getOffsetTop = function () {
        return this.elementRef.nativeElement.offsetTop;
    };
    NzTabLabelDirective.prototype.getOffsetHeight = function () {
        return this.elementRef.nativeElement.offsetHeight;
    };
    /** @nocollapse */ NzTabLabelDirective.ɵfac = function NzTabLabelDirective_Factory(t) { return new (t || NzTabLabelDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzTabLabelDirective.ɵdir = ɵɵdefineDirective({ type: NzTabLabelDirective, selectors: [["", "nz-tab-label", ""]], hostBindings: function NzTabLabelDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-tabs-tab-disabled", ctx.disabled);
        } }, inputs: { disabled: "disabled" }, exportAs: ["nzTabLabel"] });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabLabelDirective.prototype, "disabled", void 0);
    return NzTabLabelDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTabLabelDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-tab-label]',
                exportAs: 'nzTabLabel',
                host: {
                    '[class.ant-tabs-tab-disabled]': 'disabled'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { disabled: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * This component is for catching `routerLink` directive.
 */
var NzTabLinkDirective = /** @class */ (function () {
    function NzTabLinkDirective(routerLink, routerLinkWithHref) {
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
    /** @nocollapse */ NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) { return new (t || NzTabLinkDirective)(ɵɵdirectiveInject(RouterLink, 10), ɵɵdirectiveInject(RouterLinkWithHref, 10)); };
    /** @nocollapse */ NzTabLinkDirective.ɵdir = ɵɵdefineDirective({ type: NzTabLinkDirective, selectors: [["a", "nz-tab-link", ""]], exportAs: ["nzTabLink"] });
    return NzTabLinkDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTabLinkDirective, [{
        type: Directive,
        args: [{
                selector: 'a[nz-tab-link]',
                exportAs: 'nzTabLink'
            }]
    }], function () { return [{ type: RouterLink, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: RouterLinkWithHref, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** Decorates the `ng-template` tags and reads out the template from it. */
var NzTabDirective = /** @class */ (function () {
    function NzTabDirective() {
    }
    /** @nocollapse */ NzTabDirective.ɵfac = function NzTabDirective_Factory(t) { return new (t || NzTabDirective)(); };
    /** @nocollapse */ NzTabDirective.ɵdir = ɵɵdefineDirective({ type: NzTabDirective, selectors: [["", "nz-tab", ""]], exportAs: ["nzTab"] });
    return NzTabDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTabDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-tab]',
                exportAs: 'nzTab'
            }]
    }], null, null); })();

var _c0$1 = ["bodyTpl"];
var _c1 = ["titleTpl"];
function NzTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
function NzTabComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 1);
} }
var _c2 = [[["", "nz-tab-link", ""]], "*"];
var _c3 = ["[nz-tab-link]", "*"];
var NzTabComponent = /** @class */ (function () {
    function NzTabComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.position = null;
        this.origin = null;
        this.isActive = false;
        this.stateChanges = new Subject();
        this.nzForceRender = false;
        this.nzDisabled = false;
        this.nzClick = new EventEmitter();
        this.nzSelect = new EventEmitter();
        this.nzDeselect = new EventEmitter();
        this.renderer.addClass(elementRef.nativeElement, 'ant-tabs-tabpane');
    }
    NzTabComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzTitle || changes.nzForceRender || changes.nzDisabled) {
            this.stateChanges.next();
        }
    };
    NzTabComponent.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
    };
    /** @nocollapse */ NzTabComponent.ɵfac = function NzTabComponent_Factory(t) { return new (t || NzTabComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzTabComponent.ɵcmp = ɵɵdefineComponent({ type: NzTabComponent, selectors: [["nz-tab"]], contentQueries: function NzTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzTabDirective, true, TemplateRef);
            ɵɵcontentQuery(dirIndex, NzTabLinkDirective, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.linkDirective = _t.first);
        } }, viewQuery: function NzTabComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0$1, true);
            ɵɵstaticViewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.title = _t.first);
        } }, inputs: { nzTitle: "nzTitle", nzRouterIdentifier: "nzRouterIdentifier", nzForceRender: "nzForceRender", nzDisabled: "nzDisabled" }, outputs: { nzClick: "nzClick", nzSelect: "nzSelect", nzDeselect: "nzDeselect" }, exportAs: ["nzTab"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c3, decls: 4, vars: 0, consts: [["titleTpl", ""], ["bodyTpl", ""]], template: function NzTabComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c2);
            ɵɵtemplate(0, NzTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
            ɵɵtemplate(2, NzTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabComponent.prototype, "nzForceRender", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabComponent.prototype, "nzDisabled", void 0);
    return NzTabComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTabComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tab',
                exportAs: 'nzTab',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-tab.component.html'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { content: [{
            type: ViewChild,
            args: ['bodyTpl', { static: true }]
        }], title: [{
            type: ViewChild,
            args: ['titleTpl', { static: true }]
        }], template: [{
            type: ContentChild,
            args: [NzTabDirective, { static: false, read: TemplateRef }]
        }], linkDirective: [{
            type: ContentChild,
            args: [NzTabLinkDirective, { static: false }]
        }], nzTitle: [{
            type: Input
        }], nzRouterIdentifier: [{
            type: Input
        }], nzForceRender: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzClick: [{
            type: Output
        }], nzSelect: [{
            type: Output
        }], nzDeselect: [{
            type: Output
        }] }); })();

var NzTabsInkBarDirective = /** @class */ (function () {
    function NzTabsInkBarDirective(renderer, elementRef, ngZone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.nzAnimated = false;
        this.nzPositionMode = 'horizontal';
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-ink-bar');
    }
    NzTabsInkBarDirective.prototype.alignToElement = function (element) {
        var _this = this;
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () { return _this.setStyles(element); });
            });
        }
        else {
            this.setStyles(element);
        }
    };
    NzTabsInkBarDirective.prototype.setStyles = function (element) {
        /** when horizontal remove height style and add transform left **/
        if (this.nzPositionMode === 'horizontal') {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(" + this.getLeftPosition(element) + ", 0px, 0px)");
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
        }
        else {
            /** when vertical remove width style and add transform top **/
            this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(0px, " + this.getTopPosition(element) + ", 0px)");
            this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
        }
    };
    NzTabsInkBarDirective.prototype.getLeftPosition = function (element) {
        return element ? element.offsetLeft + 'px' : '0';
    };
    NzTabsInkBarDirective.prototype.getElementWidth = function (element) {
        return element ? element.offsetWidth + 'px' : '0';
    };
    NzTabsInkBarDirective.prototype.getTopPosition = function (element) {
        return element ? element.offsetTop + 'px' : '0';
    };
    NzTabsInkBarDirective.prototype.getElementHeight = function (element) {
        return element ? element.offsetHeight + 'px' : '0';
    };
    /** @nocollapse */ NzTabsInkBarDirective.ɵfac = function NzTabsInkBarDirective_Factory(t) { return new (t || NzTabsInkBarDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
    /** @nocollapse */ NzTabsInkBarDirective.ɵdir = ɵɵdefineDirective({ type: NzTabsInkBarDirective, selectors: [["", "nz-tabs-ink-bar", ""]], hostBindings: function NzTabsInkBarDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(2);
        } if (rf & 2) {
            ɵɵclassProp("ant-tabs-ink-bar-animated", ctx.nzAnimated)("ant-tabs-ink-bar-no-animated", !ctx.nzAnimated);
        } }, inputs: { nzAnimated: "nzAnimated", nzPositionMode: "nzPositionMode" }, exportAs: ["nzTabsInkBar"] });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabsInkBarDirective.prototype, "nzAnimated", void 0);
    return NzTabsInkBarDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTabsInkBarDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-tabs-ink-bar]',
                exportAs: 'nzTabsInkBar',
                host: {
                    '[class.ant-tabs-ink-bar-animated]': 'nzAnimated',
                    '[class.ant-tabs-ink-bar-no-animated]': '!nzAnimated'
                }
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }, { type: NgZone }]; }, { nzAnimated: [{
            type: Input
        }], nzPositionMode: [{
            type: Input
        }] }); })();

var _c0$2 = ["navContainerElement"];
var _c1$1 = ["navListElement"];
var _c2$1 = ["scrollListElement"];
var _c3$1 = ["nz-tabs-nav", ""];
function NzTabsNavComponent_div_0_ng_template_1_Template(rf, ctx) { }
function NzTabsNavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, NzTabsNavComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r842 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r842.nzTabBarExtraContent);
} }
var _c4 = ["*"];
var EXAGGERATED_OVERSCROLL = 64;
var NzTabsNavComponent = /** @class */ (function () {
    function NzTabsNavComponent(elementRef, ngZone, renderer, cdr, platform, nzDomEventService, dir) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.cdr = cdr;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.dir = dir;
        this._tabPositionMode = 'horizontal';
        this._scrollDistance = 0;
        this._selectedIndex = 0;
        this.destroy$ = new Subject();
        this.showPaginationControls = false;
        this.disableScrollAfter = true;
        this.disableScrollBefore = true;
        this.selectedIndexChanged = false;
        this.realignInkBar = null;
        this.nzOnNextClick = new EventEmitter();
        this.nzOnPrevClick = new EventEmitter();
        this.nzAnimated = true;
        this.nzHideBar = false;
        this.nzShowPagination = true;
        this.nzType = 'line';
    }
    Object.defineProperty(NzTabsNavComponent.prototype, "nzPositionMode", {
        get: function () {
            return this._tabPositionMode;
        },
        set: function (value) {
            var _this = this;
            this._tabPositionMode = value;
            this.alignInkBarToSelectedTab();
            if (this.nzShowPagination) {
                Promise.resolve().then(function () {
                    _this.updatePagination();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabsNavComponent.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            this.selectedIndexChanged = this._selectedIndex !== value;
            this._selectedIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    NzTabsNavComponent.prototype.onContentChanges = function () {
        var _this = this;
        var textContent = this.elementRef.nativeElement.textContent;
        // We need to diff the text content of the header, because the MutationObserver callback
        // will fire even if the text content didn't change which is inefficient and is prone
        // to infinite loops if a poorly constructed expression is passed in (see #14249).
        if (textContent !== this.currentTextContent) {
            this.currentTextContent = textContent;
            this.ngZone.run(function () {
                if (_this.nzShowPagination) {
                    _this.updatePagination();
                }
                _this.alignInkBarToSelectedTab();
                _this.cdr.markForCheck();
            });
        }
    };
    NzTabsNavComponent.prototype.scrollHeader = function (scrollDir) {
        if (scrollDir === 'before' && !this.disableScrollBefore) {
            this.nzOnPrevClick.emit();
        }
        else if (scrollDir === 'after' && !this.disableScrollAfter) {
            this.nzOnNextClick.emit();
        }
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix) / 3;
    };
    NzTabsNavComponent.prototype.ngAfterContentChecked = function () {
        if (this.tabLabelCount !== this.listOfNzTabLabelDirective.length) {
            if (this.nzShowPagination) {
                this.updatePagination();
            }
            this.tabLabelCount = this.listOfNzTabLabelDirective.length;
            this.cdr.markForCheck();
        }
        if (this.selectedIndexChanged) {
            this.scrollToLabel(this._selectedIndex);
            if (this.nzShowPagination) {
                this.checkScrollingControls();
            }
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
            this.cdr.markForCheck();
        }
        if (this.scrollDistanceChanged) {
            if (this.nzShowPagination) {
                this.updateTabScrollPosition();
            }
            this.scrollDistanceChanged = false;
            this.cdr.markForCheck();
        }
    };
    NzTabsNavComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.realignInkBar = this.ngZone.runOutsideAngular(function () {
            var dirChange = _this.dir ? _this.dir.change : of(null);
            var resize = typeof window !== 'undefined'
                ? _this.nzDomEventService.registerResizeListener().pipe(takeUntil(_this.destroy$), finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                : of(null);
            return merge(dirChange, resize)
                .pipe(startWith(null))
                .subscribe(function () {
                if (_this.nzShowPagination) {
                    _this.updatePagination();
                }
                _this.alignInkBarToSelectedTab();
            });
        });
    };
    NzTabsNavComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.realignInkBar) {
            this.realignInkBar.unsubscribe();
        }
    };
    NzTabsNavComponent.prototype.updateTabScrollPosition = function () {
        var scrollDistance = this.scrollDistance;
        if (this.nzPositionMode === 'horizontal') {
            var translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(" + translateX + "px, 0, 0)");
        }
        else {
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(0," + -scrollDistance + "px, 0)");
        }
    };
    NzTabsNavComponent.prototype.updatePagination = function () {
        this.checkPaginationEnabled();
        this.checkScrollingControls();
        this.updateTabScrollPosition();
    };
    NzTabsNavComponent.prototype.checkPaginationEnabled = function () {
        var isEnabled = this.tabListScrollWidthHeightPix > this.tabListScrollOffSetWidthHeight;
        if (!isEnabled) {
            this.scrollDistance = 0;
        }
        if (isEnabled !== this.showPaginationControls) {
            this.cdr.markForCheck();
        }
        this.showPaginationControls = isEnabled;
    };
    NzTabsNavComponent.prototype.scrollToLabel = function (labelIndex) {
        var selectedLabel = this.listOfNzTabLabelDirective ? this.listOfNzTabLabelDirective.toArray()[labelIndex] : null;
        if (selectedLabel) {
            // The view length is the visible width of the tab labels.
            var labelBeforePos = void 0;
            var labelAfterPos = void 0;
            if (this.nzPositionMode === 'horizontal') {
                if (this.getLayoutDirection() === 'ltr') {
                    labelBeforePos = selectedLabel.getOffsetLeft();
                    labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
                }
                else {
                    labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                    labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
                }
            }
            else {
                labelBeforePos = selectedLabel.getOffsetTop();
                labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
            }
            var beforeVisiblePos = this.scrollDistance;
            var afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
            if (labelBeforePos < beforeVisiblePos) {
                // Scroll header to move label to the before direction
                this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            }
            else if (labelAfterPos > afterVisiblePos) {
                // Scroll header to move label to the after direction
                this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
        }
    };
    NzTabsNavComponent.prototype.checkScrollingControls = function () {
        // Check if the pagination arrows should be activated.
        this.disableScrollBefore = this.scrollDistance === 0;
        this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
        this.cdr.markForCheck();
    };
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    NzTabsNavComponent.prototype.getMaxScrollDistance = function () {
        return this.tabListScrollWidthHeightPix - this.viewWidthHeightPix || 0;
    };
    Object.defineProperty(NzTabsNavComponent.prototype, "scrollDistance", {
        get: function () {
            return this._scrollDistance;
        },
        /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
        set: function (v) {
            this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
            // Mark that the scroll distance has changed so that after the view is checked, the CSS
            // transformation can move the header.
            this.scrollDistanceChanged = true;
            this.checkScrollingControls();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabsNavComponent.prototype, "viewWidthHeightPix", {
        get: function () {
            var PAGINATION_PIX = 0;
            if (this.showPaginationControls) {
                PAGINATION_PIX = this.navContainerScrollPaddingPix;
            }
            if (this.nzPositionMode === 'horizontal') {
                return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
            }
            else {
                return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabsNavComponent.prototype, "navContainerScrollPaddingPix", {
        get: function () {
            if (this.platform.isBrowser) {
                var navContainer = this.navContainerElement.nativeElement;
                // tslint:disable: no-any
                var originStyle = window.getComputedStyle
                    ? window.getComputedStyle(navContainer)
                    : navContainer.currentStyle; // currentStyle for IE < 9
                if (this.nzPositionMode === 'horizontal') {
                    return pxToNumber(originStyle.paddingLeft) + pxToNumber(originStyle.paddingRight);
                }
                else {
                    return pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom);
                }
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabsNavComponent.prototype, "tabListScrollWidthHeightPix", {
        get: function () {
            if (this.nzPositionMode === 'horizontal') {
                return this.navListElement.nativeElement.scrollWidth;
            }
            else {
                return this.navListElement.nativeElement.scrollHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabsNavComponent.prototype, "tabListScrollOffSetWidthHeight", {
        get: function () {
            if (this.nzPositionMode === 'horizontal') {
                return this.scrollListElement.nativeElement.offsetWidth;
            }
            else {
                return this.elementRef.nativeElement.offsetHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzTabsNavComponent.prototype.getLayoutDirection = function () {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    NzTabsNavComponent.prototype.alignInkBarToSelectedTab = function () {
        if (this.nzType === 'line') {
            var selectedLabelWrapper = this.listOfNzTabLabelDirective && this.listOfNzTabLabelDirective.length
                ? this.listOfNzTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
            if (this.nzTabsInkBarDirective) {
                this.nzTabsInkBarDirective.alignToElement(selectedLabelWrapper);
            }
        }
    };
    /** @nocollapse */ NzTabsNavComponent.ɵfac = function NzTabsNavComponent_Factory(t) { return new (t || NzTabsNavComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzDomEventService), ɵɵdirectiveInject(Directionality, 8)); };
    /** @nocollapse */ NzTabsNavComponent.ɵcmp = ɵɵdefineComponent({ type: NzTabsNavComponent, selectors: [["", "nz-tabs-nav", ""]], contentQueries: function NzTabsNavComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzTabLabelDirective, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzTabLabelDirective = _t);
        } }, viewQuery: function NzTabsNavComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(NzTabsInkBarDirective, true);
            ɵɵstaticViewQuery(_c0$2, true);
            ɵɵstaticViewQuery(_c1$1, true);
            ɵɵstaticViewQuery(_c2$1, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTabsInkBarDirective = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navContainerElement = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navListElement = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollListElement = _t.first);
        } }, inputs: { nzTabBarExtraContent: "nzTabBarExtraContent", nzAnimated: "nzAnimated", nzHideBar: "nzHideBar", nzShowPagination: "nzShowPagination", nzType: "nzType", nzPositionMode: "nzPositionMode", selectedIndex: "selectedIndex" }, outputs: { nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick" }, exportAs: ["nzTabsNav"], attrs: _c3$1, ngContentSelectors: _c4, decls: 17, vars: 12, consts: [["style", "float:right;", "class", "ant-tabs-extra-content", 4, "ngIf"], [1, "ant-tabs-nav-container"], ["navContainerElement", ""], [1, "ant-tabs-tab-prev", 3, "click"], [1, "ant-tabs-tab-prev-icon"], ["nz-icon", "", 1, "ant-tabs-tab-prev-icon-target", 3, "nzType"], [1, "ant-tabs-tab-next", 3, "click"], [1, "ant-tabs-tab-next-icon"], ["nz-icon", "", 1, "ant-tabs-tab-next-icon-target", 3, "nzType"], [1, "ant-tabs-nav-wrap"], [1, "ant-tabs-nav-scroll"], ["scrollListElement", ""], [1, "ant-tabs-nav", 3, "cdkObserveContent"], ["navListElement", ""], ["nz-tabs-ink-bar", "", 2, "display", "block", 3, "hidden", "nzAnimated", "nzPositionMode"], [1, "ant-tabs-extra-content", 2, "float", "right"], [3, "ngTemplateOutlet"]], template: function NzTabsNavComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzTabsNavComponent_div_0_Template, 2, 1, "div", 0);
            ɵɵelementStart(1, "div", 1, 2);
            ɵɵelementStart(3, "span", 3);
            ɵɵlistener("click", function NzTabsNavComponent_Template_span_click_3_listener($event) { return ctx.scrollHeader("before"); });
            ɵɵelementStart(4, "span", 4);
            ɵɵelement(5, "i", 5);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(6, "span", 6);
            ɵɵlistener("click", function NzTabsNavComponent_Template_span_click_6_listener($event) { return ctx.scrollHeader("after"); });
            ɵɵelementStart(7, "span", 7);
            ɵɵelement(8, "i", 8);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(9, "div", 9);
            ɵɵelementStart(10, "div", 10, 11);
            ɵɵelementStart(12, "div", 12, 13);
            ɵɵlistener("cdkObserveContent", function NzTabsNavComponent_Template_div_cdkObserveContent_12_listener($event) { return ctx.onContentChanges(); });
            ɵɵelementStart(14, "div");
            ɵɵprojection(15);
            ɵɵelementEnd();
            ɵɵelement(16, "div", 14);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.nzTabBarExtraContent);
            ɵɵadvance(1);
            ɵɵclassProp("ant-tabs-nav-container-scrolling", ctx.showPaginationControls);
            ɵɵadvance(2);
            ɵɵclassProp("ant-tabs-tab-btn-disabled", ctx.disableScrollBefore)("ant-tabs-tab-arrow-show", ctx.showPaginationControls);
            ɵɵadvance(2);
            ɵɵproperty("nzType", ctx.nzPositionMode === "horizontal" ? "left" : "up");
            ɵɵadvance(1);
            ɵɵclassProp("ant-tabs-tab-btn-disabled", ctx.disableScrollAfter)("ant-tabs-tab-arrow-show", ctx.showPaginationControls);
            ɵɵadvance(2);
            ɵɵproperty("nzType", ctx.nzPositionMode === "horizontal" ? "right" : "down");
            ɵɵadvance(4);
            ɵɵclassProp("ant-tabs-nav-animated", ctx.nzAnimated);
            ɵɵadvance(4);
            ɵɵproperty("hidden", ctx.nzHideBar)("nzAnimated", ctx.nzAnimated)("nzPositionMode", ctx.nzPositionMode);
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabsNavComponent.prototype, "nzAnimated", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabsNavComponent.prototype, "nzHideBar", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabsNavComponent.prototype, "nzShowPagination", void 0);
    return NzTabsNavComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTabsNavComponent, [{
        type: Component,
        args: [{
                selector: '[nz-tabs-nav]',
                exportAs: 'nzTabsNav',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-tabs-nav.component.html'
            }]
    }], function () { return [{ type: ElementRef }, { type: NgZone }, { type: Renderer2 }, { type: ChangeDetectorRef }, { type: Platform }, { type: NzDomEventService }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { listOfNzTabLabelDirective: [{
            type: ContentChildren,
            args: [NzTabLabelDirective]
        }], nzTabsInkBarDirective: [{
            type: ViewChild,
            args: [NzTabsInkBarDirective, { static: true }]
        }], navContainerElement: [{
            type: ViewChild,
            args: ['navContainerElement', { static: true }]
        }], navListElement: [{
            type: ViewChild,
            args: ['navListElement', { static: true }]
        }], scrollListElement: [{
            type: ViewChild,
            args: ['scrollListElement', { static: true }]
        }], nzOnNextClick: [{
            type: Output
        }], nzOnPrevClick: [{
            type: Output
        }], nzTabBarExtraContent: [{
            type: Input
        }], nzAnimated: [{
            type: Input
        }], nzHideBar: [{
            type: Input
        }], nzShowPagination: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzPositionMode: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }] }); })();

var _c0$3 = ["tabContent"];
function NzTabSetComponent_ng_container_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var tab_r851 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(tab_r851.nzTitle);
} }
function NzTabSetComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r856 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function NzTabSetComponent_ng_container_0_div_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r856); var i_r852 = ctx.index; var tab_r851 = ctx.$implicit; var ctx_r855 = ɵɵnextContext(2); return ctx_r855.clickLabel(i_r852, tab_r851.nzDisabled); });
    ɵɵtemplate(1, NzTabSetComponent_ng_container_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    var tab_r851 = ctx.$implicit;
    var i_r852 = ctx.index;
    var ctx_r848 = ɵɵnextContext(2);
    ɵɵstyleProp("margin-right", ctx_r848.nzTabBarGutter, "px");
    ɵɵclassProp("ant-tabs-tab-active", ctx_r848.nzSelectedIndex == i_r852 && !ctx_r848.nzHideAll);
    ɵɵproperty("disabled", tab_r851.nzDisabled);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", tab_r851.nzTitle || tab_r851.title);
} }
function NzTabSetComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 8);
} if (rf & 2) {
    var tab_r857 = ctx.$implicit;
    var i_r858 = ctx.index;
    var ctx_r850 = ɵɵnextContext(2);
    ɵɵproperty("active", ctx_r850.nzSelectedIndex == i_r858 && !ctx_r850.nzHideAll)("forceRender", tab_r857.nzForceRender)("content", tab_r857.template || tab_r857.content);
} }
function NzTabSetComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r860 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1);
    ɵɵlistener("nzOnNextClick", function NzTabSetComponent_ng_container_0_Template_div_nzOnNextClick_1_listener($event) { ɵɵrestoreView(_r860); var ctx_r859 = ɵɵnextContext(); return ctx_r859.nzOnNextClick.emit(); })("nzOnPrevClick", function NzTabSetComponent_ng_container_0_Template_div_nzOnPrevClick_1_listener($event) { ɵɵrestoreView(_r860); var ctx_r861 = ɵɵnextContext(); return ctx_r861.nzOnPrevClick.emit(); });
    ɵɵtemplate(2, NzTabSetComponent_ng_container_0_div_2_Template, 2, 4, "div", 2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 3, 4);
    ɵɵtemplate(5, NzTabSetComponent_ng_container_0_div_5_Template, 1, 3, "div", 5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r847 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassProp("ant-tabs-card-bar", ctx_r847.nzType === "card")("ant-tabs-top-bar", ctx_r847.nzTabPosition === "top")("ant-tabs-bottom-bar", ctx_r847.nzTabPosition === "bottom")("ant-tabs-left-bar", ctx_r847.nzTabPosition === "left")("ant-tabs-right-bar", ctx_r847.nzTabPosition === "right")("ant-tabs-small-bar", ctx_r847.nzSize === "small")("ant-tabs-default-bar", ctx_r847.nzSize === "default")("ant-tabs-large-bar", ctx_r847.nzSize === "large");
    ɵɵproperty("nzType", ctx_r847.nzType)("nzShowPagination", ctx_r847.nzShowPagination)("nzPositionMode", ctx_r847.tabPositionMode)("nzAnimated", ctx_r847.inkBarAnimated)("ngStyle", ctx_r847.nzTabBarStyle)("nzHideBar", ctx_r847.nzHideAll)("nzTabBarExtraContent", ctx_r847.nzTabBarExtraContent)("selectedIndex", ctx_r847.nzSelectedIndex);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r847.listOfNzTabComponent);
    ɵɵadvance(1);
    ɵɵstyleProp("margin-left", ctx_r847.tabPositionMode === "horizontal" && ctx_r847.tabPaneAnimated && (0 - (ctx_r847.nzSelectedIndex || 0)) * 100, "%");
    ɵɵclassProp("ant-tabs-top-content", ctx_r847.nzTabPosition === "top")("ant-tabs-bottom-content", ctx_r847.nzTabPosition === "bottom")("ant-tabs-left-content", ctx_r847.nzTabPosition === "left")("ant-tabs-right-content", ctx_r847.nzTabPosition === "right")("ant-tabs-content-animated", ctx_r847.tabPaneAnimated)("ant-tabs-card-content", ctx_r847.nzType === "card")("ant-tabs-content-no-animated", !ctx_r847.tabPaneAnimated);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r847.listOfNzTabComponent);
} }
var NzTabChangeEvent = /** @class */ (function () {
    function NzTabChangeEvent() {
    }
    return NzTabChangeEvent;
}());
var NZ_CONFIG_COMPONENT_NAME = 'tabs';
var NzTabSetComponent = /** @class */ (function () {
    function NzTabSetComponent(nzConfigService, renderer, nzUpdateHostClassService, elementRef, cdr, router) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.router = router;
        this.indexToSelect = 0;
        this.el = this.elementRef.nativeElement;
        this._selectedIndex = null;
        /** Subscription to tabs being added/removed. */
        this.tabsSubscription = Subscription.EMPTY;
        /** Subscription to changes in the tab labels. */
        this.tabLabelSubscription = Subscription.EMPTY;
        this.destroy$ = new Subject();
        this.tabPositionMode = 'horizontal';
        this.nzHideAll = false;
        this.nzTabPosition = 'top';
        this.nzLinkRouter = false;
        this.nzLinkExact = true;
        this.nzOnNextClick = new EventEmitter();
        this.nzOnPrevClick = new EventEmitter();
        this.nzSelectChange = new EventEmitter(true);
        this.nzSelectedIndexChange = new EventEmitter();
    }
    Object.defineProperty(NzTabSetComponent.prototype, "nzSelectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            this.indexToSelect = value ? toNumber(value, null) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "inkBarAnimated", {
        get: function () {
            return this.nzAnimated === true || this.nzAnimated.inkBar === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "tabPaneAnimated", {
        get: function () {
            return this.nzAnimated === true || this.nzAnimated.tabPane === true;
        },
        enumerable: true,
        configurable: true
    });
    NzTabSetComponent.prototype.setPosition = function (value) {
        if (this.tabContent) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.nzTabsNavComponent.elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, this.nzTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    };
    NzTabSetComponent.prototype.setClassMap = function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a["ant-tabs"] = true,
            _a["ant-tabs-vertical"] = this.nzTabPosition === 'left' || this.nzTabPosition === 'right',
            _a["ant-tabs-" + this.nzTabPosition] = this.nzTabPosition,
            _a["ant-tabs-no-animation"] = this.nzAnimated === false || this.nzAnimated.tabPane === false,
            _a["ant-tabs-" + this.nzType] = this.nzType,
            _a["ant-tabs-large"] = this.nzSize === 'large',
            _a["ant-tabs-small"] = this.nzSize === 'small',
            _a));
    };
    NzTabSetComponent.prototype.clickLabel = function (index, disabled) {
        if (!disabled) {
            var tabs = this.listOfNzTabComponent.toArray();
            this.nzSelectedIndex = index;
            tabs[index].nzClick.emit();
        }
    };
    NzTabSetComponent.prototype.createChangeEvent = function (index) {
        var event = new NzTabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent.toArray()[index];
            this.listOfNzTabComponent.forEach(function (item, i) {
                if (i !== index) {
                    item.nzDeselect.emit();
                }
            });
            event.tab.nzSelect.emit();
        }
        return event;
    };
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    NzTabSetComponent.prototype.clampTabIndex = function (index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    };
    NzTabSetComponent.prototype.subscribeToTabLabels = function () {
        var _this = this;
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge.apply(void 0, __spread(this.listOfNzTabComponent.map(function (tab) { return tab.stateChanges; }))).subscribe(function () { return _this.cdr.markForCheck(); });
    };
    NzTabSetComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzTabPosition) {
            if (this.nzTabPosition === 'top' || this.nzTabPosition === 'bottom') {
                this.tabPositionMode = 'horizontal';
            }
            else {
                this.tabPositionMode = 'vertical';
            }
            this.setPosition(this.nzTabPosition);
        }
        if (changes.nzType) {
            if (this.nzType === 'card') {
                this.nzAnimated = false;
            }
        }
        if (changes.nzSize || changes.nzAnimated || changes.nzTabPosition || changes.nzType) {
            this.setClassMap();
        }
    };
    NzTabSetComponent.prototype.ngOnInit = function () {
        this.setClassMap();
    };
    NzTabSetComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            var indexToSelect_1 = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect_1) {
                var isFirstRun_1 = this._selectedIndex == null;
                if (!isFirstRun_1) {
                    this.nzSelectChange.emit(this.createChangeEvent(indexToSelect_1));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then(function () {
                    _this.listOfNzTabComponent.forEach(function (tab, index) { return (tab.isActive = index === indexToSelect_1); });
                    if (!isFirstRun_1) {
                        _this.nzSelectedIndexChange.emit(indexToSelect_1);
                    }
                });
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach(function (tab, index) {
                tab.position = index - indexToSelect_1;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (_this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect_1 - _this._selectedIndex;
                }
            });
            if (this._selectedIndex !== indexToSelect_1) {
                this._selectedIndex = indexToSelect_1;
                this.cdr.markForCheck();
            }
        }
    };
    NzTabSetComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.subscribeToTabLabels();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe(function () {
            var indexToSelect = _this.clampTabIndex(_this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === _this._selectedIndex) {
                var tabs = _this.listOfNzTabComponent.toArray();
                for (var i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        _this.indexToSelect = _this._selectedIndex = i;
                        break;
                    }
                }
            }
            _this.subscribeToTabLabels();
            _this.cdr.markForCheck();
        });
    };
    NzTabSetComponent.prototype.ngOnDestroy = function () {
        this.tabsSubscription.unsubscribe();
        this.tabLabelSubscription.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTabSetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setPosition(this.nzTabPosition);
        if (this.nzLinkRouter) {
            if (!this.router) {
                throw new Error(PREFIX + " you should import 'RouterModule' if you want to use 'nzLinkRouter'!");
            }
            this.router.events
                .pipe(takeUntil(this.destroy$), filter(function (e) { return e instanceof NavigationEnd; }), startWith(true))
                .subscribe(function () {
                _this.updateRouterActive();
                _this.cdr.markForCheck();
            });
        }
    };
    NzTabSetComponent.prototype.updateRouterActive = function () {
        if (this.router.navigated) {
            var index = this.findShouldActiveTabIndex();
            if (index !== this._selectedIndex) {
                this.nzSelectedIndex = index;
                this.nzSelectedIndexChange.emit(index);
            }
            this.nzHideAll = index === -1;
        }
    };
    NzTabSetComponent.prototype.findShouldActiveTabIndex = function () {
        var tabs = this.listOfNzTabComponent.toArray();
        var isActive = this.isLinkActive(this.router);
        return tabs.findIndex(function (tab) {
            var c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        });
    };
    NzTabSetComponent.prototype.isLinkActive = function (router) {
        var _this = this;
        return function (link) { return (link ? router.isActive(link.urlTree, _this.nzLinkExact) : false); };
    };
    /** @nocollapse */ NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) { return new (t || NzTabSetComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Router, 8)); };
    /** @nocollapse */ NzTabSetComponent.ɵcmp = ɵɵdefineComponent({ type: NzTabSetComponent, selectors: [["nz-tabset"]], contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzTabComponent, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzTabComponent = _t);
        } }, viewQuery: function NzTabSetComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(NzTabsNavComponent, true);
            ɵɵviewQuery(_c0$3, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTabsNavComponent = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabContent = _t.first);
        } }, inputs: { nzTabBarExtraContent: "nzTabBarExtraContent", nzShowPagination: "nzShowPagination", nzAnimated: "nzAnimated", nzHideAll: "nzHideAll", nzTabPosition: "nzTabPosition", nzSize: "nzSize", nzTabBarGutter: "nzTabBarGutter", nzTabBarStyle: "nzTabBarStyle", nzType: "nzType", nzLinkRouter: "nzLinkRouter", nzLinkExact: "nzLinkExact", nzSelectedIndex: "nzSelectedIndex" }, outputs: { nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick", nzSelectChange: "nzSelectChange", nzSelectedIndexChange: "nzSelectedIndexChange" }, exportAs: ["nzTabset"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[4, "ngIf"], ["nz-tabs-nav", "", "role", "tablist", "tabindex", "0", 1, "ant-tabs-bar", 3, "nzType", "nzShowPagination", "nzPositionMode", "nzAnimated", "ngStyle", "nzHideBar", "nzTabBarExtraContent", "selectedIndex", "nzOnNextClick", "nzOnPrevClick"], ["nz-tab-label", "", "role", "tab", 3, "margin-right", "ant-tabs-tab-active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "ant-tabs-content"], ["tabContent", ""], ["nz-tab-body", "", "class", "ant-tabs-tabpane", 3, "active", "forceRender", "content", 4, "ngFor", "ngForOf"], ["nz-tab-label", "", "role", "tab", 3, "disabled", "click"], [4, "nzStringTemplateOutlet"], ["nz-tab-body", "", 1, "ant-tabs-tabpane", 3, "active", "forceRender", "content"]], template: function NzTabSetComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzTabSetComponent_ng_container_0_Template, 6, 26, "ng-container", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.listOfNzTabComponent);
        } }, styles: ["\n      nz-tabset {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        __metadata("design:type", Boolean)
    ], NzTabSetComponent.prototype, "nzShowPagination", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        __metadata("design:type", Object)
    ], NzTabSetComponent.prototype, "nzAnimated", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", String)
    ], NzTabSetComponent.prototype, "nzSize", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Number)
    ], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'line'),
        __metadata("design:type", String)
    ], NzTabSetComponent.prototype, "nzType", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabSetComponent.prototype, "nzLinkExact", void 0);
    return NzTabSetComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTabSetComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tabset',
                exportAs: 'nzTabset',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                templateUrl: './nz-tabset.component.html',
                styles: [
                    "\n      nz-tabset {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: NzConfigService }, { type: Renderer2 }, { type: NzUpdateHostClassService }, { type: ElementRef }, { type: ChangeDetectorRef }, { type: Router, decorators: [{
                type: Optional
            }] }]; }, { listOfNzTabComponent: [{
            type: ContentChildren,
            args: [NzTabComponent]
        }], nzTabsNavComponent: [{
            type: ViewChild,
            args: [NzTabsNavComponent, { static: false }]
        }], tabContent: [{
            type: ViewChild,
            args: ['tabContent', { static: false }]
        }], nzTabBarExtraContent: [{
            type: Input
        }], nzShowPagination: [{
            type: Input
        }], nzAnimated: [{
            type: Input
        }], nzHideAll: [{
            type: Input
        }], nzTabPosition: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzTabBarGutter: [{
            type: Input
        }], nzTabBarStyle: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzLinkRouter: [{
            type: Input
        }], nzLinkExact: [{
            type: Input
        }], nzOnNextClick: [{
            type: Output
        }], nzOnPrevClick: [{
            type: Output
        }], nzSelectChange: [{
            type: Output
        }], nzSelectedIndexChange: [{
            type: Output
        }], nzSelectedIndex: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzTabsModule = /** @class */ (function () {
    function NzTabsModule() {
    }
    /** @nocollapse */ NzTabsModule.ɵmod = ɵɵdefineNgModule({ type: NzTabsModule });
    /** @nocollapse */ NzTabsModule.ɵinj = ɵɵdefineInjector({ factory: function NzTabsModule_Factory(t) { return new (t || NzTabsModule)(); }, imports: [[CommonModule, ObserversModule, NzIconModule, NzAddOnModule, PlatformModule]] });
    return NzTabsModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzTabsModule, { declarations: [NzTabComponent,
        NzTabDirective,
        NzTabSetComponent,
        NzTabsNavComponent,
        NzTabLabelDirective,
        NzTabsInkBarDirective,
        NzTabBodyComponent,
        NzTabLinkDirective], imports: [CommonModule, ObserversModule, NzIconModule, NzAddOnModule, PlatformModule], exports: [NzTabComponent,
        NzTabDirective,
        NzTabSetComponent,
        NzTabsNavComponent,
        NzTabLabelDirective,
        NzTabsInkBarDirective,
        NzTabBodyComponent,
        NzTabLinkDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTabsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzTabComponent,
                    NzTabDirective,
                    NzTabSetComponent,
                    NzTabsNavComponent,
                    NzTabLabelDirective,
                    NzTabsInkBarDirective,
                    NzTabBodyComponent,
                    NzTabLinkDirective
                ],
                exports: [
                    NzTabComponent,
                    NzTabDirective,
                    NzTabSetComponent,
                    NzTabsNavComponent,
                    NzTabLabelDirective,
                    NzTabsInkBarDirective,
                    NzTabBodyComponent,
                    NzTabLinkDirective
                ],
                imports: [CommonModule, ObserversModule, NzIconModule, NzAddOnModule, PlatformModule]
            }]
    }], null, null); })();
ɵɵsetComponentScope(NzTabSetComponent, [NzTabComponent,
    NzTabDirective,
    NzTabSetComponent,
    NzTabsNavComponent,
    NzTabLabelDirective,
    NzTabsInkBarDirective,
    NzTabBodyComponent,
    NzTabLinkDirective, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, CdkObserveContent, NzIconDirective, NzStringTemplateOutletDirective, NzClassListAddDirective], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);
ɵɵsetComponentScope(NzTabsNavComponent, [NzTabComponent,
    NzTabDirective,
    NzTabSetComponent,
    NzTabsNavComponent,
    NzTabLabelDirective,
    NzTabsInkBarDirective,
    NzTabBodyComponent,
    NzTabLinkDirective, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, CdkObserveContent, NzIconDirective, NzStringTemplateOutletDirective, NzClassListAddDirective], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);

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

export { NzTabBodyComponent, NzTabChangeEvent, NzTabComponent, NzTabDirective, NzTabLabelDirective, NzTabLinkDirective, NzTabSetComponent, NzTabsInkBarDirective, NzTabsModule, NzTabsNavComponent };
//# sourceMappingURL=ng-zorro-antd-tabs.js.map
