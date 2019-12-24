import { __decorate, __metadata } from "tslib";
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
const _c0 = ["tabContent"];
function NzTabSetComponent_ng_container_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r825 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tab_r825.nzTitle);
} }
function NzTabSetComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r830 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function NzTabSetComponent_ng_container_0_div_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r830); const i_r826 = ctx.index; const tab_r825 = ctx.$implicit; const ctx_r829 = i0.ɵɵnextContext(2); return ctx_r829.clickLabel(i_r826, tab_r825.nzDisabled); });
    i0.ɵɵtemplate(1, NzTabSetComponent_ng_container_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r825 = ctx.$implicit;
    const i_r826 = ctx.index;
    const ctx_r822 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("margin-right", ctx_r822.nzTabBarGutter, "px");
    i0.ɵɵclassProp("ant-tabs-tab-active", ctx_r822.nzSelectedIndex == i_r826 && !ctx_r822.nzHideAll);
    i0.ɵɵproperty("disabled", tab_r825.nzDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", tab_r825.nzTitle || tab_r825.title);
} }
function NzTabSetComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    const tab_r831 = ctx.$implicit;
    const i_r832 = ctx.index;
    const ctx_r824 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("active", ctx_r824.nzSelectedIndex == i_r832 && !ctx_r824.nzHideAll)("forceRender", tab_r831.nzForceRender)("content", tab_r831.template || tab_r831.content);
} }
function NzTabSetComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r834 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵlistener("nzOnNextClick", function NzTabSetComponent_ng_container_0_Template_div_nzOnNextClick_1_listener($event) { i0.ɵɵrestoreView(_r834); const ctx_r833 = i0.ɵɵnextContext(); return ctx_r833.nzOnNextClick.emit(); })("nzOnPrevClick", function NzTabSetComponent_ng_container_0_Template_div_nzOnPrevClick_1_listener($event) { i0.ɵɵrestoreView(_r834); const ctx_r835 = i0.ɵɵnextContext(); return ctx_r835.nzOnPrevClick.emit(); });
    i0.ɵɵtemplate(2, NzTabSetComponent_ng_container_0_div_2_Template, 2, 4, "div", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3, 4);
    i0.ɵɵtemplate(5, NzTabSetComponent_ng_container_0_div_5_Template, 1, 3, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r821 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-tabs-card-bar", ctx_r821.nzType === "card")("ant-tabs-top-bar", ctx_r821.nzTabPosition === "top")("ant-tabs-bottom-bar", ctx_r821.nzTabPosition === "bottom")("ant-tabs-left-bar", ctx_r821.nzTabPosition === "left")("ant-tabs-right-bar", ctx_r821.nzTabPosition === "right")("ant-tabs-small-bar", ctx_r821.nzSize === "small")("ant-tabs-default-bar", ctx_r821.nzSize === "default")("ant-tabs-large-bar", ctx_r821.nzSize === "large");
    i0.ɵɵproperty("nzType", ctx_r821.nzType)("nzShowPagination", ctx_r821.nzShowPagination)("nzPositionMode", ctx_r821.tabPositionMode)("nzAnimated", ctx_r821.inkBarAnimated)("ngStyle", ctx_r821.nzTabBarStyle)("nzHideBar", ctx_r821.nzHideAll)("nzTabBarExtraContent", ctx_r821.nzTabBarExtraContent)("selectedIndex", ctx_r821.nzSelectedIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r821.listOfNzTabComponent);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("margin-left", ctx_r821.tabPositionMode === "horizontal" && ctx_r821.tabPaneAnimated && (0 - (ctx_r821.nzSelectedIndex || 0)) * 100, "%");
    i0.ɵɵclassProp("ant-tabs-top-content", ctx_r821.nzTabPosition === "top")("ant-tabs-bottom-content", ctx_r821.nzTabPosition === "bottom")("ant-tabs-left-content", ctx_r821.nzTabPosition === "left")("ant-tabs-right-content", ctx_r821.nzTabPosition === "right")("ant-tabs-content-animated", ctx_r821.tabPaneAnimated)("ant-tabs-card-content", ctx_r821.nzType === "card")("ant-tabs-content-no-animated", !ctx_r821.tabPaneAnimated);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r821.listOfNzTabComponent);
} }
export class NzTabChangeEvent {
}
const NZ_CONFIG_COMPONENT_NAME = 'tabs';
export class NzTabSetComponent {
    constructor(nzConfigService, renderer, nzUpdateHostClassService, elementRef, cdr, router) {
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
    set nzSelectedIndex(value) {
        this.indexToSelect = value ? toNumber(value, null) : null;
    }
    get nzSelectedIndex() {
        return this._selectedIndex;
    }
    get inkBarAnimated() {
        return this.nzAnimated === true || this.nzAnimated.inkBar === true;
    }
    get tabPaneAnimated() {
        return this.nzAnimated === true || this.nzAnimated.tabPane === true;
    }
    setPosition(value) {
        if (this.tabContent) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.nzTabsNavComponent.elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, this.nzTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    }
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`ant-tabs`]: true,
            [`ant-tabs-vertical`]: this.nzTabPosition === 'left' || this.nzTabPosition === 'right',
            [`ant-tabs-${this.nzTabPosition}`]: this.nzTabPosition,
            [`ant-tabs-no-animation`]: this.nzAnimated === false || this.nzAnimated.tabPane === false,
            [`ant-tabs-${this.nzType}`]: this.nzType,
            [`ant-tabs-large`]: this.nzSize === 'large',
            [`ant-tabs-small`]: this.nzSize === 'small'
        });
    }
    clickLabel(index, disabled) {
        if (!disabled) {
            const tabs = this.listOfNzTabComponent.toArray();
            this.nzSelectedIndex = index;
            tabs[index].nzClick.emit();
        }
    }
    createChangeEvent(index) {
        const event = new NzTabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent.toArray()[index];
            this.listOfNzTabComponent.forEach((item, i) => {
                if (i !== index) {
                    item.nzDeselect.emit();
                }
            });
            event.tab.nzSelect.emit();
        }
        return event;
    }
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    clampTabIndex(index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    }
    subscribeToTabLabels() {
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge(...this.listOfNzTabComponent.map(tab => tab.stateChanges)).subscribe(() => this.cdr.markForCheck());
    }
    ngOnChanges(changes) {
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
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngAfterContentChecked() {
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect) {
                const isFirstRun = this._selectedIndex == null;
                if (!isFirstRun) {
                    this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then(() => {
                    this.listOfNzTabComponent.forEach((tab, index) => (tab.isActive = index === indexToSelect));
                    if (!isFirstRun) {
                        this.nzSelectedIndexChange.emit(indexToSelect);
                    }
                });
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach((tab, index) => {
                tab.position = index - indexToSelect;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect - this._selectedIndex;
                }
            });
            if (this._selectedIndex !== indexToSelect) {
                this._selectedIndex = indexToSelect;
                this.cdr.markForCheck();
            }
        }
    }
    ngAfterContentInit() {
        this.subscribeToTabLabels();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe(() => {
            const indexToSelect = this.clampTabIndex(this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this._selectedIndex) {
                const tabs = this.listOfNzTabComponent.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        this.indexToSelect = this._selectedIndex = i;
                        break;
                    }
                }
            }
            this.subscribeToTabLabels();
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.tabsSubscription.unsubscribe();
        this.tabLabelSubscription.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterViewInit() {
        this.setPosition(this.nzTabPosition);
        if (this.nzLinkRouter) {
            if (!this.router) {
                throw new Error(`${PREFIX} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
            }
            this.router.events
                .pipe(takeUntil(this.destroy$), filter(e => e instanceof NavigationEnd), startWith(true))
                .subscribe(() => {
                this.updateRouterActive();
                this.cdr.markForCheck();
            });
        }
    }
    updateRouterActive() {
        if (this.router.navigated) {
            const index = this.findShouldActiveTabIndex();
            if (index !== this._selectedIndex) {
                this.nzSelectedIndex = index;
                this.nzSelectedIndexChange.emit(index);
            }
            this.nzHideAll = index === -1;
        }
    }
    findShouldActiveTabIndex() {
        const tabs = this.listOfNzTabComponent.toArray();
        const isActive = this.isLinkActive(this.router);
        return tabs.findIndex(tab => {
            const c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        });
    }
    isLinkActive(router) {
        return (link) => (link ? router.isActive(link.urlTree, this.nzLinkExact) : false);
    }
}
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
                    `
      nz-tabset {
        display: block;
      }
    `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFicy8iLCJzb3VyY2VzIjpbIm56LXRhYnNldC5jb21wb25lbnQudHMiLCJuei10YWJzZXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILDhEQUE4RDtBQUU5RCxPQUFPLEVBSUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBa0MsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEQsT0FBTyxFQUNMLFlBQVksRUFDWixlQUFlLEVBR2Ysd0JBQXdCLEVBQ3hCLE1BQU0sRUFDTixRQUFRLEVBQ1IsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7SUNmdkQsNkJBQWlFO0lBQUEsWUFFL0Q7SUFBQSwwQkFBZTs7O0lBRmdELGVBRS9EO0lBRitELHNDQUUvRDs7OztJQVhKLDhCQVNFO0lBSEEsbVNBQXVDO0lBR3ZDLHlHQUFpRTtJQUduRSxpQkFBTTs7Ozs7SUFUSiw2REFBd0M7SUFDeEMsZ0dBQWdFO0lBQ2hFLDhDQUEy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ZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLyoqIGdldCBzb21lIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIsIFJvdXRlckxpbmssIFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOekZvdXJEaXJlY3Rpb25UeXBlLFxyXG4gIE56U2l6ZUxEU1R5cGUsXHJcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gIFBSRUZJWCxcclxuICB0b051bWJlcixcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56VGFiQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUYWJzTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJzLW5hdi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOekFuaW1hdGVkSW50ZXJmYWNlIHtcclxuICBpbmtCYXI6IGJvb2xlYW47XHJcbiAgdGFiUGFuZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE56VGFiQ2hhbmdlRXZlbnQge1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgdGFiOiBOelRhYkNvbXBvbmVudDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTnpUYWJQb3NpdGlvbiA9IE56Rm91ckRpcmVjdGlvblR5cGU7XHJcbmV4cG9ydCB0eXBlIE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcclxuZXhwb3J0IHR5cGUgTnpUYWJUeXBlID0gJ2xpbmUnIHwgJ2NhcmQnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3RhYnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei10YWJzZXQnLFxyXG4gIGV4cG9ydEFzOiAnbnpUYWJzZXQnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGFic2V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotdGFic2V0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGFiU2V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBpbmRleFRvU2VsZWN0OiBudW1iZXIgfCBudWxsID0gMDtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gdGFicyBiZWluZyBhZGRlZC9yZW1vdmVkLiAqL1xyXG4gIHByaXZhdGUgdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICAvKiogU3Vic2NyaXB0aW9uIHRvIGNoYW5nZXMgaW4gdGhlIHRhYiBsYWJlbHMuICovXHJcbiAgcHJpdmF0ZSB0YWJMYWJlbFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHRhYlBvc2l0aW9uTW9kZTogTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOelRhYkNvbXBvbmVudCkgbGlzdE9mTnpUYWJDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOelRhYkNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZChOelRhYnNOYXZDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBuelRhYnNOYXZDb21wb25lbnQ6IE56VGFic05hdkNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCd0YWJDb250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHRhYkNvbnRlbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIG56VGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIG56U2hvd1BhZ2luYXRpb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBuekFuaW1hdGVkOiBOekFuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbjtcclxuICBASW5wdXQoKSBuekhpZGVBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelRhYlBvc2l0aW9uOiBOelRhYlBvc2l0aW9uID0gJ3RvcCc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpTaXplTERTVHlwZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56VGFiQmFyR3V0dGVyOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpUYWJCYXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdsaW5lJykgbnpUeXBlOiBOelRhYlR5cGU7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxpbmtSb3V0ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMaW5rRXhhY3QgPSB0cnVlO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblByZXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4odHJ1ZSk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XHJcbiAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB2YWx1ZSA/IHRvTnVtYmVyKHZhbHVlLCBudWxsKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTZWxlY3RlZEluZGV4KCk6IG51bWJlciB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5rQmFyQW5pbWF0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekFuaW1hdGVkID09PSB0cnVlIHx8ICh0aGlzLm56QW5pbWF0ZWQgYXMgTnpBbmltYXRlZEludGVyZmFjZSkuaW5rQmFyID09PSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRhYlBhbmVBbmltYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56QW5pbWF0ZWQgPT09IHRydWUgfHwgKHRoaXMubnpBbmltYXRlZCBhcyBOekFuaW1hdGVkSW50ZXJmYWNlKS50YWJQYW5lID09PSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0UG9zaXRpb24odmFsdWU6IE56VGFiUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhYkNvbnRlbnQpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSAnYm90dG9tJykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50LCB0aGlzLm56VGFic05hdkNvbXBvbmVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHRoaXMubnpUYWJzTmF2Q29tcG9uZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy50YWJDb250ZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCB7XHJcbiAgICAgIFtgYW50LXRhYnNgXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtdGFicy12ZXJ0aWNhbGBdOiB0aGlzLm56VGFiUG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLm56VGFiUG9zaXRpb24gPT09ICdyaWdodCcsXHJcbiAgICAgIFtgYW50LXRhYnMtJHt0aGlzLm56VGFiUG9zaXRpb259YF06IHRoaXMubnpUYWJQb3NpdGlvbixcclxuICAgICAgW2BhbnQtdGFicy1uby1hbmltYXRpb25gXTogdGhpcy5uekFuaW1hdGVkID09PSBmYWxzZSB8fCAodGhpcy5uekFuaW1hdGVkIGFzIE56QW5pbWF0ZWRJbnRlcmZhY2UpLnRhYlBhbmUgPT09IGZhbHNlLFxyXG4gICAgICBbYGFudC10YWJzLSR7dGhpcy5uelR5cGV9YF06IHRoaXMubnpUeXBlLFxyXG4gICAgICBbYGFudC10YWJzLWxhcmdlYF06IHRoaXMubnpTaXplID09PSAnbGFyZ2UnLFxyXG4gICAgICBbYGFudC10YWJzLXNtYWxsYF06IHRoaXMubnpTaXplID09PSAnc21hbGwnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsaWNrTGFiZWwoaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghZGlzYWJsZWQpIHtcclxuICAgICAgY29uc3QgdGFicyA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQudG9BcnJheSgpO1xyXG4gICAgICB0aGlzLm56U2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICB0YWJzW2luZGV4XS5uekNsaWNrLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4OiBudW1iZXIpOiBOelRhYkNoYW5nZUV2ZW50IHtcclxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE56VGFiQ2hhbmdlRXZlbnQoKTtcclxuICAgIGV2ZW50LmluZGV4ID0gaW5kZXg7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICBldmVudC50YWIgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKVtpbmRleF07XHJcbiAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgaXRlbS5uekRlc2VsZWN0LmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBldmVudC50YWIubnpTZWxlY3QuZW1pdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIENsYW1wcyB0aGUgZ2l2ZW4gaW5kZXggdG8gdGhlIGJvdW5kcyBvZiAwIGFuZCB0aGUgdGFicyBsZW5ndGguICovXHJcbiAgcHJpdmF0ZSBjbGFtcFRhYkluZGV4KGluZGV4OiBudW1iZXIgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIC8vIE5vdGUgdGhlIGB8fCAwYCwgd2hpY2ggZW5zdXJlcyB0aGF0IHZhbHVlcyBsaWtlIE5hTiBjYW4ndCBnZXQgdGhyb3VnaFxyXG4gICAgLy8gYW5kIHdoaWNoIHdvdWxkIG90aGVyd2lzZSB0aHJvdyB0aGUgY29tcG9uZW50IGludG8gYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgLy8gKHNpbmNlIE1hdGgubWF4KE5hTiwgMCkgPT09IE5hTikuXHJcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGggLSAxLCBNYXRoLm1heChpbmRleCB8fCAwLCAwKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZVRvVGFiTGFiZWxzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubWFwKHRhYiA9PiB0YWIuc3RhdGVDaGFuZ2VzKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56VGFiUG9zaXRpb24pIHtcclxuICAgICAgaWYgKHRoaXMubnpUYWJQb3NpdGlvbiA9PT0gJ3RvcCcgfHwgdGhpcy5uelRhYlBvc2l0aW9uID09PSAnYm90dG9tJykge1xyXG4gICAgICAgIHRoaXMudGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFiUG9zaXRpb25Nb2RlID0gJ3ZlcnRpY2FsJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMubnpUYWJQb3NpdGlvbik7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uelR5cGUpIHtcclxuICAgICAgaWYgKHRoaXMubnpUeXBlID09PSAnY2FyZCcpIHtcclxuICAgICAgICB0aGlzLm56QW5pbWF0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpTaXplIHx8IGNoYW5nZXMubnpBbmltYXRlZCB8fCBjaGFuZ2VzLm56VGFiUG9zaXRpb24gfHwgY2hhbmdlcy5uelR5cGUpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICAvLyBEb24ndCBjbGFtcCB0aGUgYGluZGV4VG9TZWxlY3RgIGltbWVkaWF0ZWx5IGluIHRoZSBzZXR0ZXIgYmVjYXVzZSBpdCBjYW4gaGFwcGVuIHRoYXRcclxuICAgICAgLy8gdGhlIGFtb3VudCBvZiB0YWJzIGNoYW5nZXMgYmVmb3JlIHRoZSBhY3R1YWwgY2hhbmdlIGRldGVjdGlvbiBydW5zLlxyXG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gKHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBjaGFuZ2UgaW4gc2VsZWN0ZWQgaW5kZXgsIGVtaXQgYSBjaGFuZ2UgZXZlbnQuIFNob3VsZCBub3QgdHJpZ2dlciBpZlxyXG4gICAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cclxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgICBjb25zdCBpc0ZpcnN0UnVuID0gdGhpcy5fc2VsZWN0ZWRJbmRleCA9PSBudWxsO1xyXG4gICAgICAgIGlmICghaXNGaXJzdFJ1bikge1xyXG4gICAgICAgICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KHRoaXMuY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXhUb1NlbGVjdCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hhbmdpbmcgdGhlc2UgdmFsdWVzIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHJ1blxyXG4gICAgICAgIC8vIHNpbmNlIHRoZSBjaGVja2VkIGNvbnRlbnQgbWF5IGNvbnRhaW4gcmVmZXJlbmNlcyB0byB0aGVtLlxyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiAodGFiLmlzQWN0aXZlID0gaW5kZXggPT09IGluZGV4VG9TZWxlY3QpKTtcclxuXHJcbiAgICAgICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleFRvU2VsZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0dXAgdGhlIHBvc2l0aW9uIGZvciBlYWNoIHRhYiBhbmQgb3B0aW9uYWxseSBzZXR1cCBhbiBvcmlnaW4gb24gdGhlIG5leHQgc2VsZWN0ZWQgdGFiLlxyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYjogTnpUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXHJcbiAgICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9IG51bGwgJiYgdGFiLnBvc2l0aW9uID09PSAwICYmICF0YWIub3JpZ2luKSB7XHJcbiAgICAgICAgICB0YWIub3JpZ2luID0gaW5kZXhUb1NlbGVjdCAtIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4VG9TZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTtcclxuXHJcbiAgICAvLyBTdWJzY3JpYmUgdG8gY2hhbmdlcyBpbiB0aGUgYW1vdW50IG9mIHRhYnMsIGluIG9yZGVyIHRvIGJlXHJcbiAgICAvLyBhYmxlIHRvIHJlLXJlbmRlciB0aGUgY29udGVudCBhcyBuZXcgdGFicyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC5cclxuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gdGhpcy5jbGFtcFRhYkluZGV4KHRoaXMuaW5kZXhUb1NlbGVjdCk7XHJcblxyXG4gICAgICAvLyBNYWludGFpbiB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCB0YWIgaWYgYSBuZXcgdGFiIGlzIGFkZGVkIG9yIHJlbW92ZWQgYW5kIHRoZXJlIGlzIG5vXHJcbiAgICAgIC8vIGV4cGxpY2l0IGNoYW5nZSB0aGF0IHNlbGVjdHMgYSBkaWZmZXJlbnQgdGFiLlxyXG4gICAgICBpZiAoaW5kZXhUb1NlbGVjdCA9PT0gdGhpcy5fc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGFic1tpXS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBBc3NpZ24gYm90aCB0byB0aGUgYF9pbmRleFRvU2VsZWN0YCBhbmQgYF9zZWxlY3RlZEluZGV4YCBzbyB3ZSBkb24ndCBmaXJlIGEgY2hhbmdlZFxyXG4gICAgICAgICAgICAvLyBldmVudCwgb3RoZXJ3aXNlIHRoZSBjb25zdW1lciBtYXkgZW5kIHVwIGluIGFuIGluZmluaXRlIGxvb3AgaW4gc29tZSBlZGdlIGNhc2VzIGxpa2VcclxuICAgICAgICAgICAgLy8gYWRkaW5nIGEgdGFiIHdpdGhpbiB0aGUgYHNlbGVjdGVkSW5kZXhDaGFuZ2VgIGV2ZW50LlxyXG4gICAgICAgICAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMubnpUYWJQb3NpdGlvbik7XHJcblxyXG4gICAgaWYgKHRoaXMubnpMaW5rUm91dGVyKSB7XHJcbiAgICAgIGlmICghdGhpcy5yb3V0ZXIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7UFJFRklYfSB5b3Ugc2hvdWxkIGltcG9ydCAnUm91dGVyTW9kdWxlJyBpZiB5b3Ugd2FudCB0byB1c2UgJ256TGlua1JvdXRlcichYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxyXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVSb3V0ZXJBY3RpdmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yb3V0ZXIubmF2aWdhdGVkKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kU2hvdWxkQWN0aXZlVGFiSW5kZXgoKTtcclxuICAgICAgaWYgKGluZGV4ICE9PSB0aGlzLl9zZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLm56U2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm56SGlkZUFsbCA9IGluZGV4ID09PSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZFNob3VsZEFjdGl2ZVRhYkluZGV4KCk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KCk7XHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuaXNMaW5rQWN0aXZlKHRoaXMucm91dGVyKTtcclxuXHJcbiAgICByZXR1cm4gdGFicy5maW5kSW5kZXgodGFiID0+IHtcclxuICAgICAgY29uc3QgYyA9IHRhYi5saW5rRGlyZWN0aXZlO1xyXG4gICAgICByZXR1cm4gYyA/IGlzQWN0aXZlKGMucm91dGVyTGluaykgfHwgaXNBY3RpdmUoYy5yb3V0ZXJMaW5rV2l0aEhyZWYpIDogZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNMaW5rQWN0aXZlKHJvdXRlcjogUm91dGVyKTogKGxpbms/OiBSb3V0ZXJMaW5rIHwgUm91dGVyTGlua1dpdGhIcmVmKSA9PiBib29sZWFuIHtcclxuICAgIHJldHVybiAobGluaz86IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IChsaW5rID8gcm91dGVyLmlzQWN0aXZlKGxpbmsudXJsVHJlZSwgdGhpcy5uekxpbmtFeGFjdCkgOiBmYWxzZSk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJsaXN0T2ZOelRhYkNvbXBvbmVudFwiPlxyXG4gIDxkaXZcclxuICAgIG56LXRhYnMtbmF2XHJcbiAgICByb2xlPVwidGFibGlzdFwiXHJcbiAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgY2xhc3M9XCJhbnQtdGFicy1iYXJcIlxyXG4gICAgW2NsYXNzLmFudC10YWJzLWNhcmQtYmFyXT1cIm56VHlwZSA9PT0gJ2NhcmQnXCJcclxuICAgIFtjbGFzcy5hbnQtdGFicy10b3AtYmFyXT1cIm56VGFiUG9zaXRpb24gPT09ICd0b3AnXCJcclxuICAgIFtjbGFzcy5hbnQtdGFicy1ib3R0b20tYmFyXT1cIm56VGFiUG9zaXRpb24gPT09ICdib3R0b20nXCJcclxuICAgIFtjbGFzcy5hbnQtdGFicy1sZWZ0LWJhcl09XCJuelRhYlBvc2l0aW9uID09PSAnbGVmdCdcIlxyXG4gICAgW2NsYXNzLmFudC10YWJzLXJpZ2h0LWJhcl09XCJuelRhYlBvc2l0aW9uID09PSAncmlnaHQnXCJcclxuICAgIFtjbGFzcy5hbnQtdGFicy1zbWFsbC1iYXJdPVwibnpTaXplID09PSAnc21hbGwnXCJcclxuICAgIFtjbGFzcy5hbnQtdGFicy1kZWZhdWx0LWJhcl09XCJuelNpemUgPT09ICdkZWZhdWx0J1wiXHJcbiAgICBbY2xhc3MuYW50LXRhYnMtbGFyZ2UtYmFyXT1cIm56U2l6ZSA9PT0gJ2xhcmdlJ1wiXHJcbiAgICBbbnpUeXBlXT1cIm56VHlwZVwiXHJcbiAgICBbbnpTaG93UGFnaW5hdGlvbl09XCJuelNob3dQYWdpbmF0aW9uXCJcclxuICAgIFtuelBvc2l0aW9uTW9kZV09XCJ0YWJQb3NpdGlvbk1vZGVcIlxyXG4gICAgW256QW5pbWF0ZWRdPVwiaW5rQmFyQW5pbWF0ZWRcIlxyXG4gICAgW25nU3R5bGVdPVwibnpUYWJCYXJTdHlsZVwiXHJcbiAgICBbbnpIaWRlQmFyXT1cIm56SGlkZUFsbFwiXHJcbiAgICBbbnpUYWJCYXJFeHRyYUNvbnRlbnRdPVwibnpUYWJCYXJFeHRyYUNvbnRlbnRcIlxyXG4gICAgW3NlbGVjdGVkSW5kZXhdPVwibnpTZWxlY3RlZEluZGV4XCJcclxuICAgIChuek9uTmV4dENsaWNrKT1cIm56T25OZXh0Q2xpY2suZW1pdCgpXCJcclxuICAgIChuek9uUHJldkNsaWNrKT1cIm56T25QcmV2Q2xpY2suZW1pdCgpXCJcclxuICA+XHJcbiAgICA8ZGl2XHJcbiAgICAgIG56LXRhYi1sYWJlbFxyXG4gICAgICByb2xlPVwidGFiXCJcclxuICAgICAgW3N0eWxlLm1hcmdpbi1yaWdodC5weF09XCJuelRhYkJhckd1dHRlclwiXHJcbiAgICAgIFtjbGFzcy5hbnQtdGFicy10YWItYWN0aXZlXT1cIm56U2VsZWN0ZWRJbmRleCA9PSBpICYmICFuekhpZGVBbGxcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwidGFiLm56RGlzYWJsZWRcIlxyXG4gICAgICAoY2xpY2spPVwiY2xpY2tMYWJlbChpLCB0YWIubnpEaXNhYmxlZClcIlxyXG4gICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIGxpc3RPZk56VGFiQ29tcG9uZW50OyBsZXQgaSA9IGluZGV4XCJcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRhYi5uelRpdGxlIHx8IHRhYi50aXRsZVwiPnt7XHJcbiAgICAgICAgdGFiLm56VGl0bGVcclxuICAgICAgfX08L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXZcclxuICAgICN0YWJDb250ZW50XHJcbiAgICBjbGFzcz1cImFudC10YWJzLWNvbnRlbnRcIlxyXG4gICAgW2NsYXNzLmFudC10YWJzLXRvcC1jb250ZW50XT1cIm56VGFiUG9zaXRpb24gPT09ICd0b3AnXCJcclxuICAgIFtjbGFzcy5hbnQtdGFicy1ib3R0b20tY29udGVudF09XCJuelRhYlBvc2l0aW9uID09PSAnYm90dG9tJ1wiXHJcbiAgICBbY2xhc3MuYW50LXRhYnMtbGVmdC1jb250ZW50XT1cIm56VGFiUG9zaXRpb24gPT09ICdsZWZ0J1wiXHJcbiAgICBbY2xhc3MuYW50LXRhYnMtcmlnaHQtY29udGVudF09XCJuelRhYlBvc2l0aW9uID09PSAncmlnaHQnXCJcclxuICAgIFtjbGFzcy5hbnQtdGFicy1jb250ZW50LWFuaW1hdGVkXT1cInRhYlBhbmVBbmltYXRlZFwiXHJcbiAgICBbY2xhc3MuYW50LXRhYnMtY2FyZC1jb250ZW50XT1cIm56VHlwZSA9PT0gJ2NhcmQnXCJcclxuICAgIFtjbGFzcy5hbnQtdGFicy1jb250ZW50LW5vLWFuaW1hdGVkXT1cIiF0YWJQYW5lQW5pbWF0ZWRcIlxyXG4gICAgW3N0eWxlLm1hcmdpbi1sZWZ0LiVdPVwiXHJcbiAgICAgIHRhYlBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnICYmIHRhYlBhbmVBbmltYXRlZCAmJiAtKG56U2VsZWN0ZWRJbmRleCB8fCAwKSAqIDEwMFxyXG4gICAgXCJcclxuICA+XHJcbiAgICA8ZGl2XHJcbiAgICAgIG56LXRhYi1ib2R5XHJcbiAgICAgIGNsYXNzPVwiYW50LXRhYnMtdGFicGFuZVwiXHJcbiAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgbGlzdE9mTnpUYWJDb21wb25lbnQ7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICBbYWN0aXZlXT1cIm56U2VsZWN0ZWRJbmRleCA9PSBpICYmICFuekhpZGVBbGxcIlxyXG4gICAgICBbZm9yY2VSZW5kZXJdPVwidGFiLm56Rm9yY2VSZW5kZXJcIlxyXG4gICAgICBbY29udGVudF09XCJ0YWIudGVtcGxhdGUgfHwgdGFiLmNvbnRlbnRcIlxyXG4gICAgPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19