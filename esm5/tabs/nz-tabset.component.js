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
/** get some code from https://github.com/angular/material2 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, ViewChildren } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { merge, Subject, Subscription } from 'rxjs';
import { toNumber, InputBoolean, NzConfigService, NzUpdateHostClassService, PREFIX, WithConfig } from 'ng-zorro-antd/core';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { NzTabComponent } from './nz-tab.component';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/router';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from './nz-tabs-nav.component';
import * as ɵngcc5 from './nz-tab-label.directive';
import * as ɵngcc6 from './nz-tab-body.component';

var _c0 = ["tabContent"];
var _c1 = ["focusable"];
function NzTabSetComponent_ng_container_0_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var tab_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(tab_r5.nzTitle);
} }
function NzTabSetComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7, 8);
    ɵngcc0.ɵɵlistener("click", function NzTabSetComponent_ng_container_0_div_3_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); var i_r6 = ctx.index; var tab_r5 = ctx.$implicit; var ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.clickLabel(i_r6, tab_r5.nzDisabled); })("keyup.enter", function NzTabSetComponent_ng_container_0_div_3_Template_div_keyup_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); var i_r6 = ctx.index; var tab_r5 = ctx.$implicit; var ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.clickLabel(i_r6, tab_r5.nzDisabled); })("keyup.space", function NzTabSetComponent_ng_container_0_div_3_Template_div_keyup_space_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r13 = ɵngcc0.ɵɵnextContext(2); ctx_r13.clickPreselected(); return $event.preventDefault(); })("keydown.space", function NzTabSetComponent_ng_container_0_div_3_Template_div_keydown_space_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); return $event.preventDefault(); })("keydown.arrowright", function NzTabSetComponent_ng_container_0_div_3_Template_div_keydown_arrowright_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); return $event.preventDefault(); })("keydown.arrowleft", function NzTabSetComponent_ng_container_0_div_3_Template_div_keydown_arrowleft_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); return $event.preventDefault(); })("keyup.arrowright", function NzTabSetComponent_ng_container_0_div_3_Template_div_keyup_arrowright_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.moveRight($event); })("keyup.arrowleft", function NzTabSetComponent_ng_container_0_div_3_Template_div_keyup_arrowleft_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r18 = ɵngcc0.ɵɵnextContext(2); return ctx_r18.moveLeft($event); });
    ɵngcc0.ɵɵtemplate(2, NzTabSetComponent_ng_container_0_div_3_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var tab_r5 = ctx.$implicit;
    var i_r6 = ctx.index;
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("margin-right", ctx_r2.nzTabBarGutter, "px");
    ɵngcc0.ɵɵclassProp("ant-tabs-tab-active", ctx_r2.nzSelectedIndex == i_r6 && !ctx_r2.nzHideAll)("ant-tabs-tab-preselected", ctx_r2.preselectionIndex == i_r6);
    ɵngcc0.ɵɵproperty("disabled", tab_r5.nzDisabled);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r2.nzSelectedIndex == i_r6 ? 0 : 0 - 1)("aria-selected", ctx_r2.nzSelectedIndex == i_r6)("aria-label", tab_r5.nzTitleAriaLabel)("aria-disabled", tab_r5.nzDisabled);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", tab_r5.nzTitle || tab_r5.title);
} }
function NzTabSetComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 10);
} if (rf & 2) {
    var tab_r19 = ctx.$implicit;
    var i_r20 = ctx.index;
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("active", ctx_r4.nzSelectedIndex == i_r20 && !ctx_r4.nzHideAll)("forceRender", tab_r19.nzForceRender)("content", tab_r19.template || tab_r19.content);
} }
function NzTabSetComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 1, 2);
    ɵngcc0.ɵɵlistener("nzOnNextClick", function NzTabSetComponent_ng_container_0_Template_div_nzOnNextClick_1_listener() { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.nzOnNextClick.emit(); })("nzOnPrevClick", function NzTabSetComponent_ng_container_0_Template_div_nzOnPrevClick_1_listener() { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.nzOnPrevClick.emit(); });
    ɵngcc0.ɵɵtemplate(3, NzTabSetComponent_ng_container_0_div_3_Template, 3, 12, "div", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div", 4, 5);
    ɵngcc0.ɵɵtemplate(6, NzTabSetComponent_ng_container_0_div_6_Template, 1, 3, "div", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-tabs-card-bar", ctx_r0.nzType === "card")("ant-tabs-top-bar", ctx_r0.nzTabPosition === "top")("ant-tabs-bottom-bar", ctx_r0.nzTabPosition === "bottom")("ant-tabs-left-bar", ctx_r0.nzTabPosition === "left")("ant-tabs-right-bar", ctx_r0.nzTabPosition === "right")("ant-tabs-small-bar", ctx_r0.nzSize === "small")("ant-tabs-default-bar", ctx_r0.nzSize === "default")("ant-tabs-large-bar", ctx_r0.nzSize === "large");
    ɵngcc0.ɵɵproperty("nzType", ctx_r0.nzType)("nzShowPagination", ctx_r0.nzShowPagination)("nzPositionMode", ctx_r0.tabPositionMode)("nzAnimated", ctx_r0.inkBarAnimated)("ngStyle", ctx_r0.nzTabBarStyle)("nzHideBar", ctx_r0.nzHideAll)("nzTabBarExtraContent", ctx_r0.nzTabBarExtraContent)("selectedIndex", ctx_r0.nzSelectedIndex);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.listOfNzTabComponent);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("margin-left", ctx_r0.tabPositionMode === "horizontal" && ctx_r0.tabPaneAnimated && (0 - (ctx_r0.nzSelectedIndex || 0)) * 100, "%");
    ɵngcc0.ɵɵclassProp("ant-tabs-top-content", ctx_r0.nzTabPosition === "top")("ant-tabs-bottom-content", ctx_r0.nzTabPosition === "bottom")("ant-tabs-left-content", ctx_r0.nzTabPosition === "left")("ant-tabs-right-content", ctx_r0.nzTabPosition === "right")("ant-tabs-content-animated", ctx_r0.tabPaneAnimated)("ant-tabs-card-content", ctx_r0.nzType === "card")("ant-tabs-content-no-animated", !ctx_r0.tabPaneAnimated);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.listOfNzTabComponent);
} }
export function NzAnimatedInterface() { }
if (false) {
    /** @type {?} */
    NzAnimatedInterface.prototype.inkBar;
    /** @type {?} */
    NzAnimatedInterface.prototype.tabPane;
}
var NzTabChangeEvent = /** @class */ (function () {
    function NzTabChangeEvent() {
    }
    return NzTabChangeEvent;
}());
export { NzTabChangeEvent };
if (false) {
    /** @type {?} */
    NzTabChangeEvent.prototype.index;
    /** @type {?} */
    NzTabChangeEvent.prototype.tab;
}
/** @type {?} */
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
        /**
         * Subscription to tabs being added/removed.
         */
        this.tabsSubscription = Subscription.EMPTY;
        /**
         * Subscription to changes in the tab labels.
         */
        this.tabLabelSubscription = Subscription.EMPTY;
        this.destroy$ = new Subject();
        this.tabPositionMode = 'horizontal';
        this.nzHideAll = false;
        this.nzTabPosition = 'top';
        this.nzLinkRouter = false;
        this.nzLinkExact = true;
        this.nzPreselectionMode = false;
        this.preselectionIndex = null;
        this.nzOnNextClick = new EventEmitter();
        this.nzOnPrevClick = new EventEmitter();
        this.nzSelectChange = new EventEmitter(true);
        this.nzSelectedIndexChange = new EventEmitter();
    }
    Object.defineProperty(NzTabSetComponent.prototype, "nzSelectedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.indexToSelect = value ? toNumber(value, null) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "inkBarAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).inkBar === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "tabPaneAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).tabPane === true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    NzTabSetComponent.prototype.moveRight = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        $event.stopPropagation();
        $event.preventDefault();
        /** @type {?} */
        var selectedIndex = (/** @type {?} */ (this.nzSelectedIndex));
        /** @type {?} */
        var index = (this.nzPreselectionMode && this.preselectionIndex != null) ? this.preselectionIndex : selectedIndex;
        /** @type {?} */
        var tabs = this.listOfNzTabComponent.toArray();
        /** @type {?} */
        var count = tabs.length;
        if (index === (count - 1) || tabs.filter((/**
         * @param {?} tab
         * @param {?} idx
         * @return {?}
         */
        function (tab, idx) { return idx > index && !tab.nzDisabled; })).length === 0) {
            return;
        }
        /** @type {?} */
        var tab = null;
        while (index < (count - 1) && (!tab || (/** @type {?} */ (tab)).nzDisabled)) {
            index++;
            tab = tabs[index];
        }
        if (tab) {
            if (this.nzPreselectionMode) {
                this.preselectionIndex = index;
                this._nav.scrollToLabel(index);
            }
            else {
                this.nzSelectedIndex = index;
                tabs[index].nzClick.emit();
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._focusableDivs.toArray()[index].nativeElement.focus();
            }), 100);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzTabSetComponent.prototype.moveLeft = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        $event.stopPropagation();
        $event.preventDefault();
        /** @type {?} */
        var selectedIndex = (/** @type {?} */ (this.nzSelectedIndex));
        /** @type {?} */
        var index = (this.nzPreselectionMode && this.preselectionIndex != null) ? this.preselectionIndex : selectedIndex;
        /** @type {?} */
        var tabs = this.listOfNzTabComponent.toArray();
        if (index === 0 || tabs.filter((/**
         * @param {?} tab
         * @param {?} idx
         * @return {?}
         */
        function (tab, idx) { return idx < index && !tab.nzDisabled; })).length === 0) {
            return;
        }
        /** @type {?} */
        var tab = null;
        while (index > 0 && (!tab || (/** @type {?} */ (tab)).nzDisabled)) {
            index--;
            tab = tabs[index];
        }
        if (tab) {
            if (this.nzPreselectionMode) {
                this._nav.scrollToLabel(index);
                this.preselectionIndex = index;
            }
            else {
                this.nzSelectedIndex = index;
                tabs[index].nzClick.emit();
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._focusableDivs.toArray()[index].nativeElement.focus();
            }), 100);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTabSetComponent.prototype.setPosition = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.tabContent) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.nzTabsNavComponent.elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, this.nzTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a["ant-tabs"] = true,
            _a["ant-tabs-vertical"] = this.nzTabPosition === 'left' || this.nzTabPosition === 'right',
            _a["ant-tabs-" + this.nzTabPosition] = this.nzTabPosition,
            _a["ant-tabs-no-animation"] = this.nzAnimated === false || ((/** @type {?} */ (this.nzAnimated))).tabPane === false,
            _a["ant-tabs-" + this.nzType] = this.nzType,
            _a["ant-tabs-large"] = this.nzSize === 'large',
            _a["ant-tabs-small"] = this.nzSize === 'small',
            _a));
    };
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    NzTabSetComponent.prototype.clickLabel = /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    function (index, disabled) {
        this.preselectionIndex = null;
        if (!disabled) {
            /** @type {?} */
            var tabs = this.listOfNzTabComponent.toArray();
            this.nzSelectedIndex = index;
            tabs[index].nzClick.emit();
        }
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.clickPreselected = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzPreselectionMode && this.preselectionIndex != null) {
            /** @type {?} */
            var tabs = this.listOfNzTabComponent.toArray();
            /** @type {?} */
            var index_1 = this.preselectionIndex;
            this.nzSelectedIndex = index_1;
            tabs[index_1].nzClick.emit();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._focusableDivs.toArray()[index_1].nativeElement.focus();
            }), 500);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzTabSetComponent.prototype.createChangeEvent = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var event = new NzTabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent.toArray()[index];
            this.listOfNzTabComponent.forEach((/**
             * @param {?} item
             * @param {?} i
             * @return {?}
             */
            function (item, i) {
                if (i !== index) {
                    item.nzDeselect.emit();
                }
            }));
            event.tab.nzSelect.emit();
        }
        return event;
    };
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @private
     * @param {?} index
     * @return {?}
     */
    NzTabSetComponent.prototype.clampTabIndex = /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    };
    /**
     * @private
     * @return {?}
     */
    NzTabSetComponent.prototype.subscribeToTabLabels = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge.apply(void 0, tslib_1.__spread(this.listOfNzTabComponent.map((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) { return tab.stateChanges; })))).subscribe((/**
         * @return {?}
         */
        function () {
            return _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTabSetComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            /** @type {?} */
            var indexToSelect_1 = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect_1) {
                /** @type {?} */
                var isFirstRun_1 = this._selectedIndex == null;
                if (!isFirstRun_1) {
                    this.nzSelectChange.emit(this.createChangeEvent(indexToSelect_1));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this.listOfNzTabComponent.forEach((/**
                     * @param {?} tab
                     * @param {?} index
                     * @return {?}
                     */
                    function (tab, index) { return (tab.isActive = index === indexToSelect_1); }));
                    if (!isFirstRun_1) {
                        _this.nzSelectedIndexChange.emit(indexToSelect_1);
                    }
                }));
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach((/**
             * @param {?} tab
             * @param {?} index
             * @return {?}
             */
            function (tab, index) {
                tab.position = index - indexToSelect_1;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (_this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect_1 - _this._selectedIndex;
                }
            }));
            if (this._selectedIndex !== indexToSelect_1) {
                this._selectedIndex = indexToSelect_1;
                this.cdr.markForCheck();
            }
        }
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscribeToTabLabels();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var indexToSelect = _this.clampTabIndex(_this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === _this._selectedIndex) {
                /** @type {?} */
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
        }));
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabsSubscription.unsubscribe();
        this.tabLabelSubscription.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setPosition(this.nzTabPosition);
        if (this.nzLinkRouter) {
            if (!this.router) {
                throw new Error(PREFIX + " you should import 'RouterModule' if you want to use 'nzLinkRouter'!");
            }
            this.router.events
                .pipe(takeUntil(this.destroy$), filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof NavigationEnd; })), startWith(true))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateRouterActive();
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzTabSetComponent.prototype.updateRouterActive = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.router.navigated) {
            /** @type {?} */
            var index = this.findShouldActiveTabIndex();
            if (index !== this._selectedIndex) {
                this.nzSelectedIndex = index;
                this.nzSelectedIndexChange.emit(index);
            }
            this.nzHideAll = index === -1;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzTabSetComponent.prototype.findShouldActiveTabIndex = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tabs = this.listOfNzTabComponent.toArray();
        /** @type {?} */
        var isActive = this.isLinkActive(this.router);
        return tabs.findIndex((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            /** @type {?} */
            var c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        }));
    };
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    NzTabSetComponent.prototype.isLinkActive = /**
     * @private
     * @param {?} router
     * @return {?}
     */
    function (router) {
        var _this = this;
        return (/**
         * @param {?=} link
         * @return {?}
         */
        function (link) { return (link ? router.isActive(link.urlTree, _this.nzLinkExact) : false); });
    };
    /** @nocollapse */
    NzTabSetComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Router, decorators: [{ type: Optional }] }
    ]; };
    NzTabSetComponent.propDecorators = {
        listOfNzTabComponent: [{ type: ContentChildren, args: [NzTabComponent,] }],
        nzTabsNavComponent: [{ type: ViewChild, args: [NzTabsNavComponent, { static: false },] }],
        tabContent: [{ type: ViewChild, args: ['tabContent', { static: false },] }],
        _focusableDivs: [{ type: ViewChildren, args: ["focusable",] }],
        _nav: [{ type: ViewChild, args: [NzTabsNavComponent, { static: false },] }],
        nzTabBarExtraContent: [{ type: Input }],
        nzShowPagination: [{ type: Input }],
        nzAnimated: [{ type: Input }],
        nzHideAll: [{ type: Input }],
        nzTabPosition: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTabBarGutter: [{ type: Input }],
        nzTabBarStyle: [{ type: Input }],
        nzType: [{ type: Input }],
        nzLinkRouter: [{ type: Input }],
        nzLinkExact: [{ type: Input }],
        nzPreselectionMode: [{ type: Input }],
        nzOnNextClick: [{ type: Output }],
        nzOnPrevClick: [{ type: Output }],
        nzSelectChange: [{ type: Output }],
        nzSelectedIndexChange: [{ type: Output }],
        nzSelectedIndex: [{ type: Input }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTabSetComponent.prototype, "nzShowPagination", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        tslib_1.__metadata("design:type", Object)
    ], NzTabSetComponent.prototype, "nzAnimated", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        tslib_1.__metadata("design:type", String)
    ], NzTabSetComponent.prototype, "nzSize", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        tslib_1.__metadata("design:type", Number)
    ], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'line'),
        tslib_1.__metadata("design:type", String)
    ], NzTabSetComponent.prototype, "nzType", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabSetComponent.prototype, "nzLinkExact", void 0);
NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) { return new (t || NzTabSetComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzUpdateHostClassService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router, 8)); };
NzTabSetComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTabSetComponent, selectors: [["nz-tabset"]], contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzTabComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzTabComponent = _t);
    } }, viewQuery: function NzTabSetComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzTabsNavComponent, true);
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(NzTabsNavComponent, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzTabsNavComponent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabContent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._nav = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._focusableDivs = _t);
    } }, inputs: { nzHideAll: "nzHideAll", nzTabPosition: "nzTabPosition", nzLinkRouter: "nzLinkRouter", nzLinkExact: "nzLinkExact", nzPreselectionMode: "nzPreselectionMode", nzSelectedIndex: "nzSelectedIndex", nzAnimated: "nzAnimated", nzTabBarExtraContent: "nzTabBarExtraContent", nzShowPagination: "nzShowPagination", nzSize: "nzSize", nzTabBarGutter: "nzTabBarGutter", nzTabBarStyle: "nzTabBarStyle", nzType: "nzType" }, outputs: { nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick", nzSelectChange: "nzSelectChange", nzSelectedIndexChange: "nzSelectedIndexChange" }, exportAs: ["nzTabset"], features: [ɵngcc0.ɵɵProvidersFeature([NzUpdateHostClassService]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["nz-tabs-nav", "", "role", "tablist", 1, "ant-tabs-bar", 3, "nzType", "nzShowPagination", "nzPositionMode", "nzAnimated", "ngStyle", "nzHideBar", "nzTabBarExtraContent", "selectedIndex", "nzOnNextClick", "nzOnPrevClick"], ["nav", ""], ["nz-tab-label", "", "role", "tab", 3, "margin-right", "ant-tabs-tab-active", "disabled", "ant-tabs-tab-preselected", "click", "keyup.enter", "keyup.space", "keydown.space", "keydown.arrowright", "keydown.arrowleft", "keyup.arrowright", "keyup.arrowleft", 4, "ngFor", "ngForOf"], [1, "ant-tabs-content"], ["tabContent", ""], ["nz-tab-body", "", "class", "ant-tabs-tabpane", 3, "active", "forceRender", "content", 4, "ngFor", "ngForOf"], ["nz-tab-label", "", "role", "tab", 3, "disabled", "click", "keyup.enter", "keyup.space", "keydown.space", "keydown.arrowright", "keydown.arrowleft", "keyup.arrowright", "keyup.arrowleft"], ["focusable", ""], [4, "nzStringTemplateOutlet"], ["nz-tab-body", "", 1, "ant-tabs-tabpane", 3, "active", "forceRender", "content"]], template: function NzTabSetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTabSetComponent_ng_container_0_Template, 7, 42, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.listOfNzTabComponent);
    } }, directives: [ɵngcc3.NgIf, ɵngcc4.NzTabsNavComponent, ɵngcc3.NgStyle, ɵngcc3.NgForOf, ɵngcc5.NzTabLabelDirective, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc6.NzTabBodyComponent], styles: ["\n      nz-tabset {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabSetComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tabset',
                exportAs: 'nzTabset',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                template: "<ng-container *ngIf=\"listOfNzTabComponent\">\r\n  <div nz-tabs-nav\r\n    #nav\r\n    role=\"tablist\"\r\n    class=\"ant-tabs-bar\"\r\n    [class.ant-tabs-card-bar]=\"nzType === 'card'\"\r\n    [class.ant-tabs-top-bar]=\"nzTabPosition === 'top'\"\r\n    [class.ant-tabs-bottom-bar]=\"nzTabPosition === 'bottom'\"\r\n    [class.ant-tabs-left-bar]=\"nzTabPosition === 'left'\"\r\n    [class.ant-tabs-right-bar]=\"nzTabPosition === 'right'\"\r\n    [class.ant-tabs-small-bar]=\"nzSize === 'small'\"\r\n    [class.ant-tabs-default-bar]=\"nzSize === 'default'\"\r\n    [class.ant-tabs-large-bar]=\"nzSize === 'large'\"\r\n    [nzType]=\"nzType\"\r\n    [nzShowPagination]=\"nzShowPagination\"\r\n    [nzPositionMode]=\"tabPositionMode\"\r\n    [nzAnimated]=\"inkBarAnimated\"\r\n    [ngStyle]=\"nzTabBarStyle\"\r\n    [nzHideBar]=\"nzHideAll\"\r\n    [nzTabBarExtraContent]=\"nzTabBarExtraContent\"\r\n    [selectedIndex]=\"nzSelectedIndex\"\r\n    (nzOnNextClick)=\"nzOnNextClick.emit()\"\r\n    (nzOnPrevClick)=\"nzOnPrevClick.emit()\">\r\n    <div nz-tab-label\r\n      [attr.tabindex]=\"nzSelectedIndex == i ? 0 : -1\"\r\n      role=\"tab\"\r\n      [attr.aria-selected]=\"nzSelectedIndex == i\"\r\n      [attr.aria-label]=\"tab.nzTitleAriaLabel\"\r\n      [attr.aria-disabled]=\"tab.nzDisabled\"\r\n      [style.margin-right.px]=\"nzTabBarGutter\"\r\n      [class.ant-tabs-tab-active]=\"(nzSelectedIndex == i) && !nzHideAll\"\r\n      [disabled]=\"tab.nzDisabled\"\r\n      (click)=\"clickLabel(i,tab.nzDisabled)\"\r\n      (keyup.enter)=\"clickLabel(i,tab.nzDisabled)\"\r\n      (keyup.space)=\"clickPreselected(); $event.preventDefault()\"\r\n      (keydown.space)=\"$event.preventDefault()\"\r\n      (keydown.arrowright)=\"$event.preventDefault()\"\r\n      (keydown.arrowleft)=\"$event.preventDefault()\"\r\n      (keyup.arrowright)=\"moveRight($event)\"\r\n      (keyup.arrowleft)=\"moveLeft($event)\"\r\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\r\n      [class.ant-tabs-tab-preselected]=\"preselectionIndex == i\"\r\n      #focusable>\r\n      <ng-container *nzStringTemplateOutlet=\"tab.nzTitle || tab.title\">{{ tab.nzTitle }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <div #tabContent\r\n    class=\"ant-tabs-content\"\r\n    [class.ant-tabs-top-content]=\"nzTabPosition === 'top'\"\r\n    [class.ant-tabs-bottom-content]=\"nzTabPosition === 'bottom'\"\r\n    [class.ant-tabs-left-content]=\"nzTabPosition === 'left'\"\r\n    [class.ant-tabs-right-content]=\"nzTabPosition === 'right'\"\r\n    [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\r\n    [class.ant-tabs-card-content]=\"nzType === 'card'\"\r\n    [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\r\n    [style.margin-left.%]=\"(tabPositionMode === 'horizontal') && tabPaneAnimated && (-(nzSelectedIndex || 0 ) * 100)\">\r\n    <div nz-tab-body\r\n      class=\"ant-tabs-tabpane\"\r\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\r\n      [active]=\"(nzSelectedIndex == i) && !nzHideAll\"\r\n      [forceRender]=\"tab.nzForceRender\"\r\n      [content]=\"tab.template || tab.content\">\r\n    </div>\r\n  </div>\r\n</ng-container>",
                styles: ["\n      nz-tabset {\n        display: block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.NzUpdateHostClassService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Router, decorators: [{
                type: Optional
            }] }]; }, { nzHideAll: [{
            type: Input
        }], nzTabPosition: [{
            type: Input
        }], nzLinkRouter: [{
            type: Input
        }], nzLinkExact: [{
            type: Input
        }], nzPreselectionMode: [{
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
        }], nzAnimated: [{
            type: Input
        }], listOfNzTabComponent: [{
            type: ContentChildren,
            args: [NzTabComponent]
        }], nzTabsNavComponent: [{
            type: ViewChild,
            args: [NzTabsNavComponent, { static: false }]
        }], tabContent: [{
            type: ViewChild,
            args: ['tabContent', { static: false }]
        }], _focusableDivs: [{
            type: ViewChildren,
            args: ["focusable"]
        }], _nav: [{
            type: ViewChild,
            args: [NzTabsNavComponent, { static: false }]
        }], nzTabBarExtraContent: [{
            type: Input
        }], nzShowPagination: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzTabBarGutter: [{
            type: Input
        }], nzTabBarStyle: [{
            type: Input
        }], nzType: [{
            type: Input
        }] }); })();
    return NzTabSetComponent;
}());
export { NzTabSetComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.indexToSelect;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype._selectedIndex;
    /**
     * Subscription to tabs being added/removed.
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.tabsSubscription;
    /**
     * Subscription to changes in the tab labels.
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.tabLabelSubscription;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.destroy$;
    /** @type {?} */
    NzTabSetComponent.prototype.tabPositionMode;
    /** @type {?} */
    NzTabSetComponent.prototype.listOfNzTabComponent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabsNavComponent;
    /** @type {?} */
    NzTabSetComponent.prototype.tabContent;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype._focusableDivs;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype._nav;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarExtraContent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTabSetComponent.prototype.nzAnimated;
    /** @type {?} */
    NzTabSetComponent.prototype.nzHideAll;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabPosition;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSize;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarGutter;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarStyle;
    /** @type {?} */
    NzTabSetComponent.prototype.nzType;
    /** @type {?} */
    NzTabSetComponent.prototype.nzLinkRouter;
    /** @type {?} */
    NzTabSetComponent.prototype.nzLinkExact;
    /** @type {?} */
    NzTabSetComponent.prototype.nzPreselectionMode;
    /** @type {?} */
    NzTabSetComponent.prototype.preselectionIndex;
    /** @type {?} */
    NzTabSetComponent.prototype.nzOnNextClick;
    /** @type {?} */
    NzTabSetComponent.prototype.nzOnPrevClick;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSelectedIndexChange;
    /** @type {?} */
    NzTabSetComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvdGFicy9uei10YWJzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBSUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNqQixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQWtDLE1BQU0saUJBQWlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBELE9BQU8sRUFDTCxRQUFRLEVBQ1IsWUFBWSxFQUNaLGVBQWUsRUFHZix3QkFBd0IsRUFDeEIsTUFBTSxFQUNOLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELHlDQUdDOzs7SUFGQyxxQ0FBZ0I7O0lBQ2hCLHNDQUFpQjs7QUFHbkI7SUFBQTtJQUdBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsaUNBQWM7O0lBQ2QsK0JBQW9COzs7SUFPaEIsd0JBQXdCLEdB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OUMsaUNBQ2lDOztJQUVqQyxpREFBaUQ7O0lBQ2pELDZDQUErRTs7SUFDL0UsdUNBQStGOztJQUMvRixzQ0FBMkI7O0lBQzNCLDBDQUE4Qzs7SUFDOUMsbUNBQWdGOztJQUNoRiwyQ0FBc0U7O0lBQ3RFLDBDQUFrRDs7SUFDbEQsbUNBQXlFOztJQUV6RSx5Q0FBOEM7O0lBQzlDLHdDQUE0Qzs7SUFFNUMsK0NBQTZDOztJQUM3Qyw4Q0FBd0M7O0lBRXhDLDBDQUE0RDs7SUFDNUQsMENBQTREOztJQUM1RCwyQ0FBNkc7O0lBQzdHLGtEQUE0Rjs7SUEySzFGLDRDQUF1Qzs7Ozs7SUFDdkMscUNBQTJCOzs7OztJQUMzQixxREFBMEQ7Ozs7O0lBQzFELHVDQUE4Qjs7Ozs7SUFDOUIsZ0NBQThCOzs7OztJQUM5QixtQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKiBnZXQgc29tZSBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgVmlld0NoaWxkcmVuXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICB0b051bWJlcixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIE56Rm91ckRpcmVjdGlvblR5cGUsXHJcbiAgTnpTaXplTERTVHlwZSxcclxuICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgUFJFRklYLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpUYWJDb21wb25lbnQgfSBmcm9tICcuL256LXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRhYnNOYXZDb21wb25lbnQgfSBmcm9tICcuL256LXRhYnMtbmF2LmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56QW5pbWF0ZWRJbnRlcmZhY2Uge1xyXG4gIGlua0JhcjogYm9vbGVhbjtcclxuICB0YWJQYW5lOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTnpUYWJDaGFuZ2VFdmVudCB7XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICB0YWI6IE56VGFiQ29tcG9uZW50O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOelRhYlBvc2l0aW9uID0gTnpGb3VyRGlyZWN0aW9uVHlwZTtcclxuZXhwb3J0IHR5cGUgTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xyXG5leHBvcnQgdHlwZSBOelRhYlR5cGUgPSAnbGluZScgfCAnY2FyZCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndGFicyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXRhYnNldCcsXHJcbiAgZXhwb3J0QXM6ICduelRhYnNldCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10YWJzZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei10YWJzZXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUYWJTZXRDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IDA7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHRhYnMgYmVpbmcgYWRkZWQvcmVtb3ZlZC4gKi9cclxuICBwcml2YXRlIHRhYnNTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBjaGFuZ2VzIGluIHRoZSB0YWIgbGFiZWxzLiAqL1xyXG4gIHByaXZhdGUgdGFiTGFiZWxTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICB0YWJQb3NpdGlvbk1vZGU6IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUYWJDb21wb25lbnQpIGxpc3RPZk56VGFiQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpUYWJDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoTnpUYWJzTmF2Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgbnpUYWJzTmF2Q29tcG9uZW50OiBOelRhYnNOYXZDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSB0YWJDb250ZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkcmVuKFwiZm9jdXNhYmxlXCIpXHJcbiAgcHJpdmF0ZSBfZm9jdXNhYmxlRGl2czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG5cclxuICBAVmlld0NoaWxkKE56VGFic05hdkNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgcHJpdmF0ZSBfbmF2OiBOelRhYnNOYXZDb21wb25lbnQ7XHJcblxyXG4gIEBJbnB1dCgpIG56VGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIG56U2hvd1BhZ2luYXRpb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBuekFuaW1hdGVkOiBOekFuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbjtcclxuICBASW5wdXQoKSBuekhpZGVBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelRhYlBvc2l0aW9uOiBOelRhYlBvc2l0aW9uID0gJ3RvcCc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpTaXplTERTVHlwZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56VGFiQmFyR3V0dGVyOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpUYWJCYXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdsaW5lJykgbnpUeXBlOiBOelRhYlR5cGU7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxpbmtSb3V0ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMaW5rRXhhY3QgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBuelByZXNlbGVjdGlvbk1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcmVzZWxlY3Rpb25JbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uTmV4dENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uUHJldkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50Pih0cnVlKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlciB8IG51bGwpIHtcclxuICAgIHRoaXMuaW5kZXhUb1NlbGVjdCA9IHZhbHVlID8gdG9OdW1iZXIodmFsdWUsIG51bGwpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBuelNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICB9XHJcblxyXG4gIGdldCBpbmtCYXJBbmltYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56QW5pbWF0ZWQgPT09IHRydWUgfHwgKHRoaXMubnpBbmltYXRlZCBhcyBOekFuaW1hdGVkSW50ZXJmYWNlKS5pbmtCYXIgPT09IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdGFiUGFuZUFuaW1hdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpBbmltYXRlZCA9PT0gdHJ1ZSB8fCAodGhpcy5uekFuaW1hdGVkIGFzIE56QW5pbWF0ZWRJbnRlcmZhY2UpLnRhYlBhbmUgPT09IHRydWU7XHJcbiAgfVxyXG5cclxuICBtb3ZlUmlnaHQoJGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5uelNlbGVjdGVkSW5kZXghO1xyXG5cclxuICAgIGxldCBpbmRleCA9ICh0aGlzLm56UHJlc2VsZWN0aW9uTW9kZSAmJiB0aGlzLnByZXNlbGVjdGlvbkluZGV4ICE9IG51bGwpID8gdGhpcy5wcmVzZWxlY3Rpb25JbmRleCA6IHNlbGVjdGVkSW5kZXg7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KCk7XHJcbiAgICBjb25zdCBjb3VudCA9IHRhYnMubGVuZ3RoO1xyXG5cclxuICAgIGlmIChpbmRleCA9PT0gKGNvdW50IC0gMSkgfHwgdGFicy5maWx0ZXIoKHRhYiwgaWR4KSA9PiBpZHggPiBpbmRleCAmJiAhdGFiLm56RGlzYWJsZWQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRhYjogTnpUYWJDb21wb25lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHdoaWxlIChpbmRleCA8IChjb3VudCAtIDEpICYmICghdGFiIHx8IHRhYiEubnpEaXNhYmxlZCkpIHtcclxuICAgICAgaW5kZXgrKztcclxuICAgICAgdGFiID0gdGFic1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhYikge1xyXG4gICAgICBpZiAodGhpcy5uelByZXNlbGVjdGlvbk1vZGUpIHtcclxuICAgICAgICB0aGlzLnByZXNlbGVjdGlvbkluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5fbmF2LnNjcm9sbFRvTGFiZWwoaW5kZXgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGFic1tpbmRleF0ubnpDbGljay5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fZm9jdXNhYmxlRGl2cy50b0FycmF5KClbaW5kZXhdLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdmVMZWZ0KCRldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMubnpTZWxlY3RlZEluZGV4ITtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAodGhpcy5uelByZXNlbGVjdGlvbk1vZGUgJiYgdGhpcy5wcmVzZWxlY3Rpb25JbmRleCAhPSBudWxsKSA/IHRoaXMucHJlc2VsZWN0aW9uSW5kZXggOiBzZWxlY3RlZEluZGV4O1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQudG9BcnJheSgpO1xyXG5cclxuICAgIGlmIChpbmRleCA9PT0gMCB8fCB0YWJzLmZpbHRlcigodGFiLCBpZHgpID0+IGlkeCA8IGluZGV4ICYmICF0YWIubnpEaXNhYmxlZCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGFiOiBOelRhYkNvbXBvbmVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgd2hpbGUgKGluZGV4ID4gMCAmJiAoIXRhYiB8fCB0YWIhLm56RGlzYWJsZWQpKSB7XHJcbiAgICAgIGluZGV4LS07XHJcbiAgICAgIHRhYiA9IHRhYnNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YWIpIHtcclxuICAgICAgaWYgKHRoaXMubnpQcmVzZWxlY3Rpb25Nb2RlKSB7XHJcbiAgICAgICAgdGhpcy5fbmF2LnNjcm9sbFRvTGFiZWwoaW5kZXgpO1xyXG4gICAgICAgIHRoaXMucHJlc2VsZWN0aW9uSW5kZXggPSBpbmRleDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56U2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRhYnNbaW5kZXhdLm56Q2xpY2suZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2ZvY3VzYWJsZURpdnMudG9BcnJheSgpW2luZGV4XS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRQb3NpdGlvbih2YWx1ZTogTnpUYWJQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGFiQ29udGVudCkge1xyXG4gICAgICBpZiAodmFsdWUgPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICB0aGlzLmVsLFxyXG4gICAgICAgICAgdGhpcy50YWJDb250ZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICB0aGlzLm56VGFic05hdkNvbXBvbmVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgICAgdGhpcy5lbCxcclxuICAgICAgICAgIHRoaXMubnpUYWJzTmF2Q29tcG9uZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgIHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xyXG4gICAgICBbYGFudC10YWJzYF06IHRydWUsXHJcbiAgICAgIFtgYW50LXRhYnMtdmVydGljYWxgXTogdGhpcy5uelRhYlBvc2l0aW9uID09PSAnbGVmdCcgfHwgdGhpcy5uelRhYlBvc2l0aW9uID09PSAncmlnaHQnLFxyXG4gICAgICBbYGFudC10YWJzLSR7dGhpcy5uelRhYlBvc2l0aW9ufWBdOiB0aGlzLm56VGFiUG9zaXRpb24sXHJcbiAgICAgIFtgYW50LXRhYnMtbm8tYW5pbWF0aW9uYF06XHJcbiAgICAgICAgdGhpcy5uekFuaW1hdGVkID09PSBmYWxzZSB8fCAodGhpcy5uekFuaW1hdGVkIGFzIE56QW5pbWF0ZWRJbnRlcmZhY2UpLnRhYlBhbmUgPT09IGZhbHNlLFxyXG4gICAgICBbYGFudC10YWJzLSR7dGhpcy5uelR5cGV9YF06IHRoaXMubnpUeXBlLFxyXG4gICAgICBbYGFudC10YWJzLWxhcmdlYF06IHRoaXMubnpTaXplID09PSAnbGFyZ2UnLFxyXG4gICAgICBbYGFudC10YWJzLXNtYWxsYF06IHRoaXMubnpTaXplID09PSAnc21hbGwnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsaWNrTGFiZWwoaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMucHJlc2VsZWN0aW9uSW5kZXggPSBudWxsO1xyXG4gICAgaWYgKCFkaXNhYmxlZCkge1xyXG4gICAgICBjb25zdCB0YWJzID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KCk7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRhYnNbaW5kZXhdLm56Q2xpY2suZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xpY2tQcmVzZWxlY3RlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56UHJlc2VsZWN0aW9uTW9kZSAmJiB0aGlzLnByZXNlbGVjdGlvbkluZGV4ICE9IG51bGwpIHtcclxuICAgICAgY29uc3QgdGFicyA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQudG9BcnJheSgpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMucHJlc2VsZWN0aW9uSW5kZXg7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRhYnNbaW5kZXhdLm56Q2xpY2suZW1pdCgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9mb2N1c2FibGVEaXZzLnRvQXJyYXkoKVtpbmRleF0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE56VGFiQ2hhbmdlRXZlbnQge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgTnpUYWJDaGFuZ2VFdmVudCgpO1xyXG4gICAgZXZlbnQuaW5kZXggPSBpbmRleDtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XHJcbiAgICAgIGV2ZW50LnRhYiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQudG9BcnJheSgpW2luZGV4XTtcclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICBpdGVtLm56RGVzZWxlY3QuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGV2ZW50LnRhYi5uelNlbGVjdC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXZlbnQ7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhbXBzIHRoZSBnaXZlbiBpbmRleCB0byB0aGUgYm91bmRzIG9mIDAgYW5kIHRoZSB0YWJzIGxlbmd0aC4gKi9cclxuICBwcml2YXRlIGNsYW1wVGFiSW5kZXgoaW5kZXg6IG51bWJlciB8IG51bGwpOiBudW1iZXIge1xyXG4gICAgLy8gTm90ZSB0aGUgYHx8IDBgLCB3aGljaCBlbnN1cmVzIHRoYXQgdmFsdWVzIGxpa2UgTmFOIGNhbid0IGdldCB0aHJvdWdoXHJcbiAgICAvLyBhbmQgd2hpY2ggd291bGQgb3RoZXJ3aXNlIHRocm93IHRoZSBjb21wb25lbnQgaW50byBhbiBpbmZpbml0ZSBsb29wXHJcbiAgICAvLyAoc2luY2UgTWF0aC5tYXgoTmFOLCAwKSA9PT0gTmFOKS5cclxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCAtIDEsIE1hdGgubWF4KGluZGV4IHx8IDAsIDApKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5tYXAodGFiID0+IHRhYi5zdGF0ZUNoYW5nZXMpKS5zdWJzY3JpYmUoKCkgPT5cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelRhYlBvc2l0aW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLm56VGFiUG9zaXRpb24gPT09ICd0b3AnIHx8IHRoaXMubnpUYWJQb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgICB0aGlzLnRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRhYlBvc2l0aW9uTW9kZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLm56VGFiUG9zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpUeXBlKSB7XHJcbiAgICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2NhcmQnKSB7XHJcbiAgICAgICAgdGhpcy5uekFuaW1hdGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56U2l6ZSB8fCBjaGFuZ2VzLm56QW5pbWF0ZWQgfHwgY2hhbmdlcy5uelRhYlBvc2l0aW9uIHx8IGNoYW5nZXMubnpUeXBlKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgICAgLy8gRG9uJ3QgY2xhbXAgdGhlIGBpbmRleFRvU2VsZWN0YCBpbW1lZGlhdGVseSBpbiB0aGUgc2V0dGVyIGJlY2F1c2UgaXQgY2FuIGhhcHBlbiB0aGF0XHJcbiAgICAgIC8vIHRoZSBhbW91bnQgb2YgdGFicyBjaGFuZ2VzIGJlZm9yZSB0aGUgYWN0dWFsIGNoYW5nZSBkZXRlY3Rpb24gcnVucy5cclxuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9ICh0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLmNsYW1wVGFiSW5kZXgodGhpcy5pbmRleFRvU2VsZWN0KSk7XHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHNlbGVjdGVkIGluZGV4LCBlbWl0IGEgY2hhbmdlIGV2ZW50LiBTaG91bGQgbm90IHRyaWdnZXIgaWZcclxuICAgICAgLy8gdGhlIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgaXNGaXJzdFJ1biA9IHRoaXMuX3NlbGVjdGVkSW5kZXggPT0gbnVsbDtcclxuICAgICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoYW5naW5nIHRoZXNlIHZhbHVlcyBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyBydW5cclxuICAgICAgICAvLyBzaW5jZSB0aGUgY2hlY2tlZCBjb250ZW50IG1heSBjb250YWluIHJlZmVyZW5jZXMgdG8gdGhlbS5cclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4gKHRhYi5pc0FjdGl2ZSA9IGluZGV4ID09PSBpbmRleFRvU2VsZWN0KSk7XHJcblxyXG4gICAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQoaW5kZXhUb1NlbGVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNldHVwIHRoZSBwb3NpdGlvbiBmb3IgZWFjaCB0YWIgYW5kIG9wdGlvbmFsbHkgc2V0dXAgYW4gb3JpZ2luIG9uIHRoZSBuZXh0IHNlbGVjdGVkIHRhYi5cclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKCh0YWI6IE56VGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGFiLnBvc2l0aW9uID0gaW5kZXggLSBpbmRleFRvU2VsZWN0O1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VsZWN0ZWQgdGFiLCB0aGVuIHNldCB1cCBhbiBvcmlnaW4gZm9yIHRoZSBuZXh0IHNlbGVjdGVkIHRhYlxyXG4gICAgICAgIC8vIGlmIGl0IGRvZXNuJ3QgaGF2ZSBvbmUgYWxyZWFkeS5cclxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHRhYi5wb3NpdGlvbiA9PT0gMCAmJiAhdGFiLm9yaWdpbikge1xyXG4gICAgICAgICAgdGFiLm9yaWdpbiA9IGluZGV4VG9TZWxlY3QgLSB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleFRvU2VsZWN0O1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XHJcblxyXG4gICAgLy8gU3Vic2NyaWJlIHRvIGNoYW5nZXMgaW4gdGhlIGFtb3VudCBvZiB0YWJzLCBpbiBvcmRlciB0byBiZVxyXG4gICAgLy8gYWJsZSB0byByZS1yZW5kZXIgdGhlIGNvbnRlbnQgYXMgbmV3IHRhYnMgYXJlIGFkZGVkIG9yIHJlbW92ZWQuXHJcbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24gPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpO1xyXG5cclxuICAgICAgLy8gTWFpbnRhaW4gdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgdGFiIGlmIGEgbmV3IHRhYiBpcyBhZGRlZCBvciByZW1vdmVkIGFuZCB0aGVyZSBpcyBub1xyXG4gICAgICAvLyBleHBsaWNpdCBjaGFuZ2UgdGhhdCBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYi5cclxuICAgICAgaWYgKGluZGV4VG9TZWxlY3QgPT09IHRoaXMuX3NlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICBjb25zdCB0YWJzID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRhYnNbaV0uaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgLy8gQXNzaWduIGJvdGggdG8gdGhlIGBfaW5kZXhUb1NlbGVjdGAgYW5kIGBfc2VsZWN0ZWRJbmRleGAgc28gd2UgZG9uJ3QgZmlyZSBhIGNoYW5nZWRcclxuICAgICAgICAgICAgLy8gZXZlbnQsIG90aGVyd2lzZSB0aGUgY29uc3VtZXIgbWF5IGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGluIHNvbWUgZWRnZSBjYXNlcyBsaWtlXHJcbiAgICAgICAgICAgIC8vIGFkZGluZyBhIHRhYiB3aXRoaW4gdGhlIGBzZWxlY3RlZEluZGV4Q2hhbmdlYCBldmVudC5cclxuICAgICAgICAgICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zdWJzY3JpYmVUb1RhYkxhYmVscygpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLm56VGFiUG9zaXRpb24pO1xyXG5cclxuICAgIGlmICh0aGlzLm56TGlua1JvdXRlcikge1xyXG4gICAgICBpZiAoIXRoaXMucm91dGVyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0geW91IHNob3VsZCBpbXBvcnQgJ1JvdXRlck1vZHVsZScgaWYgeW91IHdhbnQgdG8gdXNlICduekxpbmtSb3V0ZXInIWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcclxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUm91dGVyQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucm91dGVyLm5hdmlnYXRlZCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZFNob3VsZEFjdGl2ZVRhYkluZGV4KCk7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gdGhpcy5fc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5uekhpZGVBbGwgPSBpbmRleCA9PT0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRTaG91bGRBY3RpdmVUYWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQudG9BcnJheSgpO1xyXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmlzTGlua0FjdGl2ZSh0aGlzLnJvdXRlcik7XHJcblxyXG4gICAgcmV0dXJuIHRhYnMuZmluZEluZGV4KHRhYiA9PiB7XHJcbiAgICAgIGNvbnN0IGMgPSB0YWIubGlua0RpcmVjdGl2ZTtcclxuICAgICAgcmV0dXJuIGMgPyBpc0FjdGl2ZShjLnJvdXRlckxpbmspIHx8IGlzQWN0aXZlKGMucm91dGVyTGlua1dpdGhIcmVmKSA6IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTGlua0FjdGl2ZShyb3V0ZXI6IFJvdXRlcik6IChsaW5rPzogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKGxpbms/OiBSb3V0ZXJMaW5rIHwgUm91dGVyTGlua1dpdGhIcmVmKSA9PiAobGluayA/IHJvdXRlci5pc0FjdGl2ZShsaW5rLnVybFRyZWUsIHRoaXMubnpMaW5rRXhhY3QpIDogZmFsc2UpO1xyXG4gIH1cclxufVxyXG4iXX0=