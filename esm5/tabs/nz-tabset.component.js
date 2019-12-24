import { __decorate, __metadata, __read, __spread } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** get some code from https://github.com/angular/material2 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { merge, Subject, Subscription } from 'rxjs';
import { InputBoolean, NzConfigService, NzUpdateHostClassService, PREFIX, toNumber, WithConfig } from 'ng-zorro-antd/core';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { NzTabComponent } from './nz-tab.component';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/router";
var _c0 = ["tabContent"];
function NzTabSetComponent_ng_container_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var tab_r851 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tab_r851.nzTitle);
} }
function NzTabSetComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r856 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function NzTabSetComponent_ng_container_0_div_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r856); var i_r852 = ctx.index; var tab_r851 = ctx.$implicit; var ctx_r855 = i0.ɵɵnextContext(2); return ctx_r855.clickLabel(i_r852, tab_r851.nzDisabled); });
    i0.ɵɵtemplate(1, NzTabSetComponent_ng_container_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tab_r851 = ctx.$implicit;
    var i_r852 = ctx.index;
    var ctx_r848 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("margin-right", ctx_r848.nzTabBarGutter, "px");
    i0.ɵɵclassProp("ant-tabs-tab-active", ctx_r848.nzSelectedIndex == i_r852 && !ctx_r848.nzHideAll);
    i0.ɵɵproperty("disabled", tab_r851.nzDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", tab_r851.nzTitle || tab_r851.title);
} }
function NzTabSetComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    var tab_r857 = ctx.$implicit;
    var i_r858 = ctx.index;
    var ctx_r850 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("active", ctx_r850.nzSelectedIndex == i_r858 && !ctx_r850.nzHideAll)("forceRender", tab_r857.nzForceRender)("content", tab_r857.template || tab_r857.content);
} }
function NzTabSetComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r860 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵlistener("nzOnNextClick", function NzTabSetComponent_ng_container_0_Template_div_nzOnNextClick_1_listener($event) { i0.ɵɵrestoreView(_r860); var ctx_r859 = i0.ɵɵnextContext(); return ctx_r859.nzOnNextClick.emit(); })("nzOnPrevClick", function NzTabSetComponent_ng_container_0_Template_div_nzOnPrevClick_1_listener($event) { i0.ɵɵrestoreView(_r860); var ctx_r861 = i0.ɵɵnextContext(); return ctx_r861.nzOnPrevClick.emit(); });
    i0.ɵɵtemplate(2, NzTabSetComponent_ng_container_0_div_2_Template, 2, 4, "div", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3, 4);
    i0.ɵɵtemplate(5, NzTabSetComponent_ng_container_0_div_5_Template, 1, 3, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r847 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-tabs-card-bar", ctx_r847.nzType === "card")("ant-tabs-top-bar", ctx_r847.nzTabPosition === "top")("ant-tabs-bottom-bar", ctx_r847.nzTabPosition === "bottom")("ant-tabs-left-bar", ctx_r847.nzTabPosition === "left")("ant-tabs-right-bar", ctx_r847.nzTabPosition === "right")("ant-tabs-small-bar", ctx_r847.nzSize === "small")("ant-tabs-default-bar", ctx_r847.nzSize === "default")("ant-tabs-large-bar", ctx_r847.nzSize === "large");
    i0.ɵɵproperty("nzType", ctx_r847.nzType)("nzShowPagination", ctx_r847.nzShowPagination)("nzPositionMode", ctx_r847.tabPositionMode)("nzAnimated", ctx_r847.inkBarAnimated)("ngStyle", ctx_r847.nzTabBarStyle)("nzHideBar", ctx_r847.nzHideAll)("nzTabBarExtraContent", ctx_r847.nzTabBarExtraContent)("selectedIndex", ctx_r847.nzSelectedIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r847.listOfNzTabComponent);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("margin-left", ctx_r847.tabPositionMode === "horizontal" && ctx_r847.tabPaneAnimated && (0 - (ctx_r847.nzSelectedIndex || 0)) * 100, "%");
    i0.ɵɵclassProp("ant-tabs-top-content", ctx_r847.nzTabPosition === "top")("ant-tabs-bottom-content", ctx_r847.nzTabPosition === "bottom")("ant-tabs-left-content", ctx_r847.nzTabPosition === "left")("ant-tabs-right-content", ctx_r847.nzTabPosition === "right")("ant-tabs-content-animated", ctx_r847.tabPaneAnimated)("ant-tabs-card-content", ctx_r847.nzType === "card")("ant-tabs-content-no-animated", !ctx_r847.tabPaneAnimated);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r847.listOfNzTabComponent);
} }
var NzTabChangeEvent = /** @class */ (function () {
    function NzTabChangeEvent() {
    }
    return NzTabChangeEvent;
}());
export { NzTabChangeEvent };
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
    /** @nocollapse */ NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) { return new (t || NzTabSetComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Router, 8)); };
    /** @nocollapse */ NzTabSetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTabSetComponent, selectors: [["nz-tabset"]], contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzTabComponent, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzTabComponent = _t);
        } }, viewQuery: function NzTabSetComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(NzTabsNavComponent, true);
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzTabsNavComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabContent = _t.first);
        } }, inputs: { nzTabBarExtraContent: "nzTabBarExtraContent", nzShowPagination: "nzShowPagination", nzAnimated: "nzAnimated", nzHideAll: "nzHideAll", nzTabPosition: "nzTabPosition", nzSize: "nzSize", nzTabBarGutter: "nzTabBarGutter", nzTabBarStyle: "nzTabBarStyle", nzType: "nzType", nzLinkRouter: "nzLinkRouter", nzLinkExact: "nzLinkExact", nzSelectedIndex: "nzSelectedIndex" }, outputs: { nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick", nzSelectChange: "nzSelectChange", nzSelectedIndexChange: "nzSelectedIndexChange" }, exportAs: ["nzTabset"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[4, "ngIf"], ["nz-tabs-nav", "", "role", "tablist", "tabindex", "0", 1, "ant-tabs-bar", 3, "nzType", "nzShowPagination", "nzPositionMode", "nzAnimated", "ngStyle", "nzHideBar", "nzTabBarExtraContent", "selectedIndex", "nzOnNextClick", "nzOnPrevClick"], ["nz-tab-label", "", "role", "tab", 3, "margin-right", "ant-tabs-tab-active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "ant-tabs-content"], ["tabContent", ""], ["nz-tab-body", "", "class", "ant-tabs-tabpane", 3, "active", "forceRender", "content", 4, "ngFor", "ngForOf"], ["nz-tab-label", "", "role", "tab", 3, "disabled", "click"], [4, "nzStringTemplateOutlet"], ["nz-tab-body", "", 1, "ant-tabs-tabpane", 3, "active", "forceRender", "content"]], template: function NzTabSetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzTabSetComponent_ng_container_0_Template, 6, 26, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.listOfNzTabComponent);
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
export { NzTabSetComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTabSetComponent, [{
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
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.Renderer2 }, { type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.Router, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFicy8iLCJzb3VyY2VzIjpbIm56LXRhYnNldC5jb21wb25lbnQudHMiLCJuei10YWJzZXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILDhEQUE4RDtBQUU5RCxPQUFPLEVBSUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBa0MsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEQsT0FBTyxFQUNMLFlBQVksRUFDWixlQUFlLEVBR2Ysd0JBQXdCLEVBQ3hCLE1BQU0sRUFDTixRQUFRLEVBQ1IsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7SUNmdkQsNkJBQWlFO0lBQUEsWUFFL0Q7SUFBQSwwQkFBZTs7O0lBRmdELGVBRS9EO0lBRitELHNDQUUvRDs7OztJQVhKLDhCQVNFO0lBSEEsNlJBQXVDO0lBR3ZDLHlHQUFpRTtJQUduRSxpQkFBTTs7Ozs7SUFUSiw2REFBd0M7SUFDeEMsZ0dBQWdFO0lBQ2hFLDhDQUEyQjtJQUliLGVBQWtEO0lBQWxELDJFQUFrRDs7O0lBbUJsRSx5QkFPTzs7Ozs7SUFITCxrRkFBNkMsdUNBQUEsa0RBQUE7Ozs7SUF6RG5ELDZCQUNFO0lBQUEsOEJBd0JFO0lBSEEsNExBQWlCLDZCQUFvQixJQUFDLCtLQUNyQiw2QkFBb0IsSUFEQztJQUd0QyxpRkFTRTtJQUlKLGlCQUFNO0lBQ04saUNBY0U7SUFBQSxpRkFPQztJQUNILGlCQUFNO0lBQ1IsMEJBQWU7OztJQXhEWCxlQUE2QztJQUE3QywrREFBNkMsc0RBQUEsNERBQUEsd0RBQUEsMERBQUEsbURBQUEsdURBQUEsbURBQUE7SUFRN0Msd0NBQWlCLCtDQUFBLDRDQUFBLHVDQUFBLG1DQUFBLGlDQUFBLHVEQUFBLDJDQUFBO0lBa0JmLGVBQXVEO0lBQXZELHVEQUF1RDtJQWlCekQsZUFFQztJQUZELHdKQUVDO0lBVEQsd0VBQXNELGdFQUFBLDREQUFBLDhEQUFBLHVEQUFBLHFEQUFBLDJEQUFBO0lBY3BELGVBQXVEO0lBQXZELHVEQUF1RDs7QURBN0Q7SUFBQTtJQUdBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQU1ELElBQU0sd0JBQXdCLEdBQUcsTUFBTSxDQUFDO0FBRXhDO0lBK0hFLDJCQUNTLGVBQWdDLEVBQy9CLFFBQW1CLEVBQ25CLHdCQUFrRCxFQUNsRCxVQUFzQixFQUN0QixHQUFzQixFQUNWLE1BQWM7UUFMM0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXBINUIsa0JBQWEsR0FBa0IsQ0FBQyxDQUFDO1FBQ2pDLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEQsbUJBQWMsR0FBa0IsSUFBSSxDQUFDO1FBQzdDLGdEQUFnRDtRQUN4QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQzlDLGlEQUFpRDtRQUN6Qyx5QkFBb0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBRTFDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRXZDLG9CQUFlLEdBQXNCLFlBQVksQ0FBQztRQVF6QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQWtCLEtBQUssQ0FBQztRQU1yQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUV6QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDekMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3pDLG1CQUFjLEdBQW1DLElBQUksWUFBWSxDQUFtQixJQUFJLENBQUMsQ0FBQztRQUMxRiwwQkFBcUIsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQXNGekYsQ0FBQztJQXBGSixzQkFDSSw4Q0FBZTthQUluQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDO2FBUEQsVUFDb0IsS0FBb0I7WUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM1RCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLDZDQUFjO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSyxJQUFJLENBQUMsVUFBa0MsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDO1FBQzlGLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQWU7YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxJQUFLLElBQUksQ0FBQyxVQUFrQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7UUFDL0YsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBVyxHQUFYLFVBQVksS0FBb0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3RIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN0SDtTQUNGO0lBQ0gsQ0FBQztJQUVELHVDQUFXLEdBQVg7O1FBQ0UsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuRCxHQUFDLFVBQVUsSUFBRyxJQUFJO1lBQ2xCLEdBQUMsbUJBQW1CLElBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxPQUFPO1lBQ3RGLEdBQUMsY0FBWSxJQUFJLENBQUMsYUFBZSxJQUFHLElBQUksQ0FBQyxhQUFhO1lBQ3RELEdBQUMsdUJBQXVCLElBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLElBQUssSUFBSSxDQUFDLFVBQWtDLENBQUMsT0FBTyxLQUFLLEtBQUs7WUFDbEgsR0FBQyxjQUFZLElBQUksQ0FBQyxNQUFRLElBQUcsSUFBSSxDQUFDLE1BQU07WUFDeEMsR0FBQyxnQkFBZ0IsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87WUFDM0MsR0FBQyxnQkFBZ0IsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87Z0JBQzNDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLEtBQWEsRUFBRSxRQUFpQjtRQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLEtBQWE7UUFDN0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7WUFDakUsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDeEI7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQscUVBQXFFO0lBQzdELHlDQUFhLEdBQXJCLFVBQXNCLEtBQW9CO1FBQ3hDLHdFQUF3RTtRQUN4RSxzRUFBc0U7UUFDdEUsb0NBQW9DO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRU8sZ0RBQW9CLEdBQTVCO1FBQUEsaUJBS0M7UUFKQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyx3QkFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLFlBQVksRUFBaEIsQ0FBZ0IsQ0FBQyxHQUFFLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFXRCx1Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxRQUFRLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7U0FDRjtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNuRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaURBQXFCLEdBQXJCO1FBQUEsaUJBd0NDO1FBdkNDLElBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7WUFDakUsdUZBQXVGO1lBQ3ZGLHNFQUFzRTtZQUN0RSxJQUFNLGVBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNwRixxRkFBcUY7WUFDckYsbURBQW1EO1lBQ25ELElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxlQUFhLEVBQUU7Z0JBQ3pDLElBQU0sWUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDO2dCQUMvQyxJQUFJLENBQUMsWUFBVSxFQUFFO29CQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFhLENBQUMsQ0FBQyxDQUFDO2lCQUNqRTtnQkFFRCx1REFBdUQ7Z0JBQ3ZELDREQUE0RDtnQkFDNUQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDckIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxLQUFLLGVBQWEsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7b0JBRTVGLElBQUksQ0FBQyxZQUFVLEVBQUU7d0JBQ2YsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxlQUFhLENBQUMsQ0FBQztxQkFDaEQ7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUVELDJGQUEyRjtZQUMzRixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBbUIsRUFBRSxLQUFhO2dCQUNuRSxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxlQUFhLENBQUM7Z0JBRXJDLHNGQUFzRjtnQkFDdEYsa0NBQWtDO2dCQUNsQyxJQUFJLEtBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtvQkFDcEUsR0FBRyxDQUFDLE1BQU0sR0FBRyxlQUFhLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQztpQkFDbEQ7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxlQUFhLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBYSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3pCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsOENBQWtCLEdBQWxCO1FBQUEsaUJBMkJDO1FBMUJDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRTVCLDZEQUE2RDtRQUM3RCxrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2xFLElBQU0sYUFBYSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRTdELHdGQUF3RjtZQUN4RixnREFBZ0Q7WUFDaEQsSUFBSSxhQUFhLEtBQUssS0FBSSxDQUFDLGNBQWMsRUFBRTtnQkFDekMsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUVqRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO3dCQUNwQixzRkFBc0Y7d0JBQ3RGLHVGQUF1Rjt3QkFDdkYsdURBQXVEO3dCQUN2RCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO3dCQUM3QyxNQUFNO3FCQUNQO2lCQUNGO2FBQ0Y7WUFFRCxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsMkNBQWUsR0FBZjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUksTUFBTSx5RUFBc0UsQ0FBQyxDQUFDO2FBQ2xHO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2lCQUNmLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN4QixNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLFlBQVksYUFBYSxFQUExQixDQUEwQixDQUFDLEVBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FDaEI7aUJBQ0EsU0FBUyxDQUFDO2dCQUNULEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBRU8sOENBQWtCLEdBQTFCO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDN0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVPLG9EQUF3QixHQUFoQztRQUNFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ3ZCLElBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7WUFDNUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sd0NBQVksR0FBcEIsVUFBcUIsTUFBYztRQUFuQyxpQkFFQztRQURDLE9BQU8sVUFBQyxJQUFzQyxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFoRSxDQUFnRSxDQUFDO0lBQ3RILENBQUM7c0ZBelFVLGlCQUFpQjswREFBakIsaUJBQWlCO3dDQVlYLGNBQWM7Ozs7OzJCQUNwQixrQkFBa0I7Ozs7OzsybEJBdkJsQixDQUFDLHdCQUF3QixDQUFDO1lDekV2QyxxRkFDRTs7WUFEWSwrQ0FBNEI7O0lEb0dhO1FBQTNDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUM7OytEQUEyQjtJQUMxQjtRQUEzQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDOzt5REFBMkM7SUFHckM7UUFBaEQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQzs7cURBQXVCO0lBQ2pDO1FBQXJDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzs7NkRBQXdCO0lBRWY7UUFBN0MsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQzs7cURBQW1CO0lBRWhEO1FBQWYsWUFBWSxFQUFFOzsyREFBc0I7SUFDckI7UUFBZixZQUFZLEVBQUU7OzBEQUFvQjs0QkE5RzlDO0NBNlZDLEFBMVJELElBMFJDO1NBMVFZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBaEI3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxNQUFNLEVBQUU7b0JBQ04sNkRBSUM7aUJBQ0Y7YUFDRjs7c0JBc0hJLFFBQVE7O2tCQXpHVixlQUFlO21CQUFDLGNBQWM7O2tCQUM5QixTQUFTO21CQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBQy9DLFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBRXpDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUVOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKiBnZXQgc29tZSBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyLCBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIElucHV0Qm9vbGVhbixcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpGb3VyRGlyZWN0aW9uVHlwZSxcclxuICBOelNpemVMRFNUeXBlLFxyXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICBQUkVGSVgsXHJcbiAgdG9OdW1iZXIsXHJcbiAgV2l0aENvbmZpZ1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IGZpbHRlciwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOelRhYkNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VGFic05hdkNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFicy1uYXYuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpBbmltYXRlZEludGVyZmFjZSB7XHJcbiAgaW5rQmFyOiBib29sZWFuO1xyXG4gIHRhYlBhbmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOelRhYkNoYW5nZUV2ZW50IHtcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIHRhYjogTnpUYWJDb21wb25lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE56VGFiUG9zaXRpb24gPSBOekZvdXJEaXJlY3Rpb25UeXBlO1xyXG5leHBvcnQgdHlwZSBOelRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XHJcbmV4cG9ydCB0eXBlIE56VGFiVHlwZSA9ICdsaW5lJyB8ICdjYXJkJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0YWJzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotdGFic2V0JyxcclxuICBleHBvcnRBczogJ256VGFic2V0JyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRhYnNldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LXRhYnNldCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhYlNldENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IDA7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHRhYnMgYmVpbmcgYWRkZWQvcmVtb3ZlZC4gKi9cclxuICBwcml2YXRlIHRhYnNTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBjaGFuZ2VzIGluIHRoZSB0YWIgbGFiZWxzLiAqL1xyXG4gIHByaXZhdGUgdGFiTGFiZWxTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICB0YWJQb3NpdGlvbk1vZGU6IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUYWJDb21wb25lbnQpIGxpc3RPZk56VGFiQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpUYWJDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoTnpUYWJzTmF2Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgbnpUYWJzTmF2Q29tcG9uZW50OiBOelRhYnNOYXZDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSB0YWJDb250ZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBuelRhYkJhckV4dHJhQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBuelNob3dQYWdpbmF0aW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgbnpBbmltYXRlZDogTnpBbmltYXRlZEludGVyZmFjZSB8IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpIaWRlQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpUYWJQb3NpdGlvbjogTnpUYWJQb3NpdGlvbiA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56U2l6ZUxEU1R5cGU7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelRhYkJhckd1dHRlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56VGFiQmFyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnbGluZScpIG56VHlwZTogTnpUYWJUeXBlO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMaW5rUm91dGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TGlua0V4YWN0ID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+KHRydWUpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdmFsdWUgPyB0b051bWJlcih2YWx1ZSwgbnVsbCkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2VsZWN0ZWRJbmRleCgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlua0JhckFuaW1hdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpBbmltYXRlZCA9PT0gdHJ1ZSB8fCAodGhpcy5uekFuaW1hdGVkIGFzIE56QW5pbWF0ZWRJbnRlcmZhY2UpLmlua0JhciA9PT0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCB0YWJQYW5lQW5pbWF0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekFuaW1hdGVkID09PSB0cnVlIHx8ICh0aGlzLm56QW5pbWF0ZWQgYXMgTnpBbmltYXRlZEludGVyZmFjZSkudGFiUGFuZSA9PT0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNldFBvc2l0aW9uKHZhbHVlOiBOelRhYlBvc2l0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50YWJDb250ZW50KSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCB0aGlzLnRhYkNvbnRlbnQubmF0aXZlRWxlbWVudCwgdGhpcy5uelRhYnNOYXZDb21wb25lbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCB0aGlzLm56VGFic05hdkNvbXBvbmVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xyXG4gICAgICBbYGFudC10YWJzYF06IHRydWUsXHJcbiAgICAgIFtgYW50LXRhYnMtdmVydGljYWxgXTogdGhpcy5uelRhYlBvc2l0aW9uID09PSAnbGVmdCcgfHwgdGhpcy5uelRhYlBvc2l0aW9uID09PSAncmlnaHQnLFxyXG4gICAgICBbYGFudC10YWJzLSR7dGhpcy5uelRhYlBvc2l0aW9ufWBdOiB0aGlzLm56VGFiUG9zaXRpb24sXHJcbiAgICAgIFtgYW50LXRhYnMtbm8tYW5pbWF0aW9uYF06IHRoaXMubnpBbmltYXRlZCA9PT0gZmFsc2UgfHwgKHRoaXMubnpBbmltYXRlZCBhcyBOekFuaW1hdGVkSW50ZXJmYWNlKS50YWJQYW5lID09PSBmYWxzZSxcclxuICAgICAgW2BhbnQtdGFicy0ke3RoaXMubnpUeXBlfWBdOiB0aGlzLm56VHlwZSxcclxuICAgICAgW2BhbnQtdGFicy1sYXJnZWBdOiB0aGlzLm56U2l6ZSA9PT0gJ2xhcmdlJyxcclxuICAgICAgW2BhbnQtdGFicy1zbWFsbGBdOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGlja0xhYmVsKGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIWRpc2FibGVkKSB7XHJcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKTtcclxuICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgdGFic1tpbmRleF0ubnpDbGljay5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogTnpUYWJDaGFuZ2VFdmVudCB7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBOelRhYkNoYW5nZUV2ZW50KCk7XHJcbiAgICBldmVudC5pbmRleCA9IGluZGV4O1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgICAgZXZlbnQudGFiID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KClbaW5kZXhdO1xyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICBpZiAoaSAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgIGl0ZW0ubnpEZXNlbGVjdC5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnQudGFiLm56U2VsZWN0LmVtaXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcblxyXG4gIC8qKiBDbGFtcHMgdGhlIGdpdmVuIGluZGV4IHRvIHRoZSBib3VuZHMgb2YgMCBhbmQgdGhlIHRhYnMgbGVuZ3RoLiAqL1xyXG4gIHByaXZhdGUgY2xhbXBUYWJJbmRleChpbmRleDogbnVtYmVyIHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICAvLyBOb3RlIHRoZSBgfHwgMGAsIHdoaWNoIGVuc3VyZXMgdGhhdCB2YWx1ZXMgbGlrZSBOYU4gY2FuJ3QgZ2V0IHRocm91Z2hcclxuICAgIC8vIGFuZCB3aGljaCB3b3VsZCBvdGhlcndpc2UgdGhyb3cgdGhlIGNvbXBvbmVudCBpbnRvIGFuIGluZmluaXRlIGxvb3BcclxuICAgIC8vIChzaW5jZSBNYXRoLm1heChOYU4sIDApID09PSBOYU4pLlxyXG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1RhYkxhYmVscygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lm1hcCh0YWIgPT4gdGFiLnN0YXRlQ2hhbmdlcykpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelRhYlBvc2l0aW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLm56VGFiUG9zaXRpb24gPT09ICd0b3AnIHx8IHRoaXMubnpUYWJQb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgICB0aGlzLnRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRhYlBvc2l0aW9uTW9kZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLm56VGFiUG9zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpUeXBlKSB7XHJcbiAgICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2NhcmQnKSB7XHJcbiAgICAgICAgdGhpcy5uekFuaW1hdGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56U2l6ZSB8fCBjaGFuZ2VzLm56QW5pbWF0ZWQgfHwgY2hhbmdlcy5uelRhYlBvc2l0aW9uIHx8IGNoYW5nZXMubnpUeXBlKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgICAgLy8gRG9uJ3QgY2xhbXAgdGhlIGBpbmRleFRvU2VsZWN0YCBpbW1lZGlhdGVseSBpbiB0aGUgc2V0dGVyIGJlY2F1c2UgaXQgY2FuIGhhcHBlbiB0aGF0XHJcbiAgICAgIC8vIHRoZSBhbW91bnQgb2YgdGFicyBjaGFuZ2VzIGJlZm9yZSB0aGUgYWN0dWFsIGNoYW5nZSBkZXRlY3Rpb24gcnVucy5cclxuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9ICh0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLmNsYW1wVGFiSW5kZXgodGhpcy5pbmRleFRvU2VsZWN0KSk7XHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHNlbGVjdGVkIGluZGV4LCBlbWl0IGEgY2hhbmdlIGV2ZW50LiBTaG91bGQgbm90IHRyaWdnZXIgaWZcclxuICAgICAgLy8gdGhlIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgaXNGaXJzdFJ1biA9IHRoaXMuX3NlbGVjdGVkSW5kZXggPT0gbnVsbDtcclxuICAgICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoYW5naW5nIHRoZXNlIHZhbHVlcyBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyBydW5cclxuICAgICAgICAvLyBzaW5jZSB0aGUgY2hlY2tlZCBjb250ZW50IG1heSBjb250YWluIHJlZmVyZW5jZXMgdG8gdGhlbS5cclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4gKHRhYi5pc0FjdGl2ZSA9IGluZGV4ID09PSBpbmRleFRvU2VsZWN0KSk7XHJcblxyXG4gICAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQoaW5kZXhUb1NlbGVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNldHVwIHRoZSBwb3NpdGlvbiBmb3IgZWFjaCB0YWIgYW5kIG9wdGlvbmFsbHkgc2V0dXAgYW4gb3JpZ2luIG9uIHRoZSBuZXh0IHNlbGVjdGVkIHRhYi5cclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKCh0YWI6IE56VGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGFiLnBvc2l0aW9uID0gaW5kZXggLSBpbmRleFRvU2VsZWN0O1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VsZWN0ZWQgdGFiLCB0aGVuIHNldCB1cCBhbiBvcmlnaW4gZm9yIHRoZSBuZXh0IHNlbGVjdGVkIHRhYlxyXG4gICAgICAgIC8vIGlmIGl0IGRvZXNuJ3QgaGF2ZSBvbmUgYWxyZWFkeS5cclxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHRhYi5wb3NpdGlvbiA9PT0gMCAmJiAhdGFiLm9yaWdpbikge1xyXG4gICAgICAgICAgdGFiLm9yaWdpbiA9IGluZGV4VG9TZWxlY3QgLSB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleFRvU2VsZWN0O1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XHJcblxyXG4gICAgLy8gU3Vic2NyaWJlIHRvIGNoYW5nZXMgaW4gdGhlIGFtb3VudCBvZiB0YWJzLCBpbiBvcmRlciB0byBiZVxyXG4gICAgLy8gYWJsZSB0byByZS1yZW5kZXIgdGhlIGNvbnRlbnQgYXMgbmV3IHRhYnMgYXJlIGFkZGVkIG9yIHJlbW92ZWQuXHJcbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24gPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpO1xyXG5cclxuICAgICAgLy8gTWFpbnRhaW4gdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgdGFiIGlmIGEgbmV3IHRhYiBpcyBhZGRlZCBvciByZW1vdmVkIGFuZCB0aGVyZSBpcyBub1xyXG4gICAgICAvLyBleHBsaWNpdCBjaGFuZ2UgdGhhdCBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYi5cclxuICAgICAgaWYgKGluZGV4VG9TZWxlY3QgPT09IHRoaXMuX3NlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICBjb25zdCB0YWJzID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRhYnNbaV0uaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgLy8gQXNzaWduIGJvdGggdG8gdGhlIGBfaW5kZXhUb1NlbGVjdGAgYW5kIGBfc2VsZWN0ZWRJbmRleGAgc28gd2UgZG9uJ3QgZmlyZSBhIGNoYW5nZWRcclxuICAgICAgICAgICAgLy8gZXZlbnQsIG90aGVyd2lzZSB0aGUgY29uc3VtZXIgbWF5IGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGluIHNvbWUgZWRnZSBjYXNlcyBsaWtlXHJcbiAgICAgICAgICAgIC8vIGFkZGluZyBhIHRhYiB3aXRoaW4gdGhlIGBzZWxlY3RlZEluZGV4Q2hhbmdlYCBldmVudC5cclxuICAgICAgICAgICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zdWJzY3JpYmVUb1RhYkxhYmVscygpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLm56VGFiUG9zaXRpb24pO1xyXG5cclxuICAgIGlmICh0aGlzLm56TGlua1JvdXRlcikge1xyXG4gICAgICBpZiAoIXRoaXMucm91dGVyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0geW91IHNob3VsZCBpbXBvcnQgJ1JvdXRlck1vZHVsZScgaWYgeW91IHdhbnQgdG8gdXNlICduekxpbmtSb3V0ZXInIWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcclxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUm91dGVyQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucm91dGVyLm5hdmlnYXRlZCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZFNob3VsZEFjdGl2ZVRhYkluZGV4KCk7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gdGhpcy5fc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5uekhpZGVBbGwgPSBpbmRleCA9PT0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRTaG91bGRBY3RpdmVUYWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQudG9BcnJheSgpO1xyXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmlzTGlua0FjdGl2ZSh0aGlzLnJvdXRlcik7XHJcblxyXG4gICAgcmV0dXJuIHRhYnMuZmluZEluZGV4KHRhYiA9PiB7XHJcbiAgICAgIGNvbnN0IGMgPSB0YWIubGlua0RpcmVjdGl2ZTtcclxuICAgICAgcmV0dXJuIGMgPyBpc0FjdGl2ZShjLnJvdXRlckxpbmspIHx8IGlzQWN0aXZlKGMucm91dGVyTGlua1dpdGhIcmVmKSA6IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTGlua0FjdGl2ZShyb3V0ZXI6IFJvdXRlcik6IChsaW5rPzogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKGxpbms/OiBSb3V0ZXJMaW5rIHwgUm91dGVyTGlua1dpdGhIcmVmKSA9PiAobGluayA/IHJvdXRlci5pc0FjdGl2ZShsaW5rLnVybFRyZWUsIHRoaXMubnpMaW5rRXhhY3QpIDogZmFsc2UpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwibGlzdE9mTnpUYWJDb21wb25lbnRcIj5cclxuICA8ZGl2XHJcbiAgICBuei10YWJzLW5hdlxyXG4gICAgcm9sZT1cInRhYmxpc3RcIlxyXG4gICAgdGFiaW5kZXg9XCIwXCJcclxuICAgIGNsYXNzPVwiYW50LXRhYnMtYmFyXCJcclxuICAgIFtjbGFzcy5hbnQtdGFicy1jYXJkLWJhcl09XCJuelR5cGUgPT09ICdjYXJkJ1wiXHJcbiAgICBbY2xhc3MuYW50LXRhYnMtdG9wLWJhcl09XCJuelRhYlBvc2l0aW9uID09PSAndG9wJ1wiXHJcbiAgICBbY2xhc3MuYW50LXRhYnMtYm90dG9tLWJhcl09XCJuelRhYlBvc2l0aW9uID09PSAnYm90dG9tJ1wiXHJcbiAgICBbY2xhc3MuYW50LXRhYnMtbGVmdC1iYXJdPVwibnpUYWJQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcclxuICAgIFtjbGFzcy5hbnQtdGFicy1yaWdodC1iYXJdPVwibnpUYWJQb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiXHJcbiAgICBbY2xhc3MuYW50LXRhYnMtc21hbGwtYmFyXT1cIm56U2l6ZSA9PT0gJ3NtYWxsJ1wiXHJcbiAgICBbY2xhc3MuYW50LXRhYnMtZGVmYXVsdC1iYXJdPVwibnpTaXplID09PSAnZGVmYXVsdCdcIlxyXG4gICAgW2NsYXNzLmFudC10YWJzLWxhcmdlLWJhcl09XCJuelNpemUgPT09ICdsYXJnZSdcIlxyXG4gICAgW256VHlwZV09XCJuelR5cGVcIlxyXG4gICAgW256U2hvd1BhZ2luYXRpb25dPVwibnpTaG93UGFnaW5hdGlvblwiXHJcbiAgICBbbnpQb3NpdGlvbk1vZGVdPVwidGFiUG9zaXRpb25Nb2RlXCJcclxuICAgIFtuekFuaW1hdGVkXT1cImlua0JhckFuaW1hdGVkXCJcclxuICAgIFtuZ1N0eWxlXT1cIm56VGFiQmFyU3R5bGVcIlxyXG4gICAgW256SGlkZUJhcl09XCJuekhpZGVBbGxcIlxyXG4gICAgW256VGFiQmFyRXh0cmFDb250ZW50XT1cIm56VGFiQmFyRXh0cmFDb250ZW50XCJcclxuICAgIFtzZWxlY3RlZEluZGV4XT1cIm56U2VsZWN0ZWRJbmRleFwiXHJcbiAgICAobnpPbk5leHRDbGljayk9XCJuek9uTmV4dENsaWNrLmVtaXQoKVwiXHJcbiAgICAobnpPblByZXZDbGljayk9XCJuek9uUHJldkNsaWNrLmVtaXQoKVwiXHJcbiAgPlxyXG4gICAgPGRpdlxyXG4gICAgICBuei10YWItbGFiZWxcclxuICAgICAgcm9sZT1cInRhYlwiXHJcbiAgICAgIFtzdHlsZS5tYXJnaW4tcmlnaHQucHhdPVwibnpUYWJCYXJHdXR0ZXJcIlxyXG4gICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWFjdGl2ZV09XCJuelNlbGVjdGVkSW5kZXggPT0gaSAmJiAhbnpIaWRlQWxsXCJcclxuICAgICAgW2Rpc2FibGVkXT1cInRhYi5uekRpc2FibGVkXCJcclxuICAgICAgKGNsaWNrKT1cImNsaWNrTGFiZWwoaSwgdGFiLm56RGlzYWJsZWQpXCJcclxuICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiBsaXN0T2ZOelRhYkNvbXBvbmVudDsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0YWIubnpUaXRsZSB8fCB0YWIudGl0bGVcIj57e1xyXG4gICAgICAgIHRhYi5uelRpdGxlXHJcbiAgICAgIH19PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2XHJcbiAgICAjdGFiQ29udGVudFxyXG4gICAgY2xhc3M9XCJhbnQtdGFicy1jb250ZW50XCJcclxuICAgIFtjbGFzcy5hbnQtdGFicy10b3AtY29udGVudF09XCJuelRhYlBvc2l0aW9uID09PSAndG9wJ1wiXHJcbiAgICBbY2xhc3MuYW50LXRhYnMtYm90dG9tLWNvbnRlbnRdPVwibnpUYWJQb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgW2NsYXNzLmFudC10YWJzLWxlZnQtY29udGVudF09XCJuelRhYlBvc2l0aW9uID09PSAnbGVmdCdcIlxyXG4gICAgW2NsYXNzLmFudC10YWJzLXJpZ2h0LWNvbnRlbnRdPVwibnpUYWJQb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiXHJcbiAgICBbY2xhc3MuYW50LXRhYnMtY29udGVudC1hbmltYXRlZF09XCJ0YWJQYW5lQW5pbWF0ZWRcIlxyXG4gICAgW2NsYXNzLmFudC10YWJzLWNhcmQtY29udGVudF09XCJuelR5cGUgPT09ICdjYXJkJ1wiXHJcbiAgICBbY2xhc3MuYW50LXRhYnMtY29udGVudC1uby1hbmltYXRlZF09XCIhdGFiUGFuZUFuaW1hdGVkXCJcclxuICAgIFtzdHlsZS5tYXJnaW4tbGVmdC4lXT1cIlxyXG4gICAgICB0YWJQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJyAmJiB0YWJQYW5lQW5pbWF0ZWQgJiYgLShuelNlbGVjdGVkSW5kZXggfHwgMCkgKiAxMDBcclxuICAgIFwiXHJcbiAgPlxyXG4gICAgPGRpdlxyXG4gICAgICBuei10YWItYm9keVxyXG4gICAgICBjbGFzcz1cImFudC10YWJzLXRhYnBhbmVcIlxyXG4gICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIGxpc3RPZk56VGFiQ29tcG9uZW50OyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgW2FjdGl2ZV09XCJuelNlbGVjdGVkSW5kZXggPT0gaSAmJiAhbnpIaWRlQWxsXCJcclxuICAgICAgW2ZvcmNlUmVuZGVyXT1cInRhYi5uekZvcmNlUmVuZGVyXCJcclxuICAgICAgW2NvbnRlbnRdPVwidGFiLnRlbXBsYXRlIHx8IHRhYi5jb250ZW50XCJcclxuICAgID48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==