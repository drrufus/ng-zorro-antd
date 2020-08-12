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
        var index = (/** @type {?} */ (this.nzSelectedIndex));
        /** @type {?} */
        var tabs = this.listOfNzTabComponent.toArray();
        /** @type {?} */
        var count = tabs.length;
        if (index == (count - 1)) {
            return;
        }
        /** @type {?} */
        var tab = null;
        while (index < (count - 1) && (!tab || (/** @type {?} */ (tab)).nzDisabled)) {
            index++;
            tab = tabs[index];
        }
        if (tab) {
            this.nzSelectedIndex = index;
            tabs[index].nzClick.emit();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._focusableDivs.toArray()[index].nativeElement.focus();
            }), 500);
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
        var index = (/** @type {?} */ (this.nzSelectedIndex));
        /** @type {?} */
        var tabs = this.listOfNzTabComponent.toArray();
        if (index == 0) {
            return;
        }
        /** @type {?} */
        var tab = null;
        while (index > 0 && (!tab || (/** @type {?} */ (tab)).nzDisabled)) {
            index--;
            tab = tabs[index];
        }
        if (tab) {
            this.nzSelectedIndex = index;
            tabs[index].nzClick.emit();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._focusableDivs.toArray()[index].nativeElement.focus();
            }), 500);
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
        if (!disabled) {
            /** @type {?} */
            var tabs = this.listOfNzTabComponent.toArray();
            this.nzSelectedIndex = index;
            tabs[index].nzClick.emit();
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
    NzTabSetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tabset',
                    exportAs: 'nzTabset',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-container *ngIf=\"listOfNzTabComponent\">\r\n  <div nz-tabs-nav\r\n    role=\"tablist\"\r\n    class=\"ant-tabs-bar\"\r\n    [class.ant-tabs-card-bar]=\"nzType === 'card'\"\r\n    [class.ant-tabs-top-bar]=\"nzTabPosition === 'top'\"\r\n    [class.ant-tabs-bottom-bar]=\"nzTabPosition === 'bottom'\"\r\n    [class.ant-tabs-left-bar]=\"nzTabPosition === 'left'\"\r\n    [class.ant-tabs-right-bar]=\"nzTabPosition === 'right'\"\r\n    [class.ant-tabs-small-bar]=\"nzSize === 'small'\"\r\n    [class.ant-tabs-default-bar]=\"nzSize === 'default'\"\r\n    [class.ant-tabs-large-bar]=\"nzSize === 'large'\"\r\n    [nzType]=\"nzType\"\r\n    [nzShowPagination]=\"nzShowPagination\"\r\n    [nzPositionMode]=\"tabPositionMode\"\r\n    [nzAnimated]=\"inkBarAnimated\"\r\n    [ngStyle]=\"nzTabBarStyle\"\r\n    [nzHideBar]=\"nzHideAll\"\r\n    [nzTabBarExtraContent]=\"nzTabBarExtraContent\"\r\n    [selectedIndex]=\"nzSelectedIndex\"\r\n    (nzOnNextClick)=\"nzOnNextClick.emit()\"\r\n    (nzOnPrevClick)=\"nzOnPrevClick.emit()\">\r\n    <div nz-tab-label\r\n      [attr.tabindex]=\"nzSelectedIndex == i ? 0 : null\"\r\n      role=\"tab\"\r\n      [attr.aria-selected]=\"nzSelectedIndex == i\"\r\n      [attr.aria-label]=\"tab.nzTitleAriaLabel\"\r\n      [style.margin-right.px]=\"nzTabBarGutter\"\r\n      [class.ant-tabs-tab-active]=\"(nzSelectedIndex == i) && !nzHideAll\"\r\n      [disabled]=\"tab.nzDisabled\"\r\n      (click)=\"clickLabel(i,tab.nzDisabled)\"\r\n      (keyup.enter)=\"clickLabel(i,tab.nzDisabled)\"\r\n      (keydown.arrowright)=\"$event.preventDefault()\"\r\n      (keydown.arrowleft)=\"$event.preventDefault()\"\r\n      (keyup.arrowright)=\"moveRight($event)\"\r\n      (keyup.arrowleft)=\"moveLeft($event)\"\r\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\r\n      #focusable>\r\n      <ng-container *nzStringTemplateOutlet=\"tab.nzTitle || tab.title\">{{ tab.nzTitle }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <div #tabContent\r\n    class=\"ant-tabs-content\"\r\n    [class.ant-tabs-top-content]=\"nzTabPosition === 'top'\"\r\n    [class.ant-tabs-bottom-content]=\"nzTabPosition === 'bottom'\"\r\n    [class.ant-tabs-left-content]=\"nzTabPosition === 'left'\"\r\n    [class.ant-tabs-right-content]=\"nzTabPosition === 'right'\"\r\n    [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\r\n    [class.ant-tabs-card-content]=\"nzType === 'card'\"\r\n    [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\r\n    [style.margin-left.%]=\"(tabPositionMode === 'horizontal') && tabPaneAnimated && (-(nzSelectedIndex || 0 ) * 100)\">\r\n    <div nz-tab-body\r\n      class=\"ant-tabs-tabpane\"\r\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\r\n      [active]=\"(nzSelectedIndex == i) && !nzHideAll\"\r\n      [forceRender]=\"tab.nzForceRender\"\r\n      [content]=\"tab.template || tab.content\">\r\n    </div>\r\n  </div>\r\n</ng-container>",
                    styles: ["\n      nz-tabset {\n        display: block;\n      }\n    "]
                }] }
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFicy8iLCJzb3VyY2VzIjpbIm56LXRhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFJTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBa0MsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEQsT0FBTyxFQUNMLFFBQVEsRUFDUixZQUFZLEVBQ1osZUFBZSxFQUdmLHdCQUF3QixFQUN4QixNQUFNLEVBQ04sVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRTdELHlDQUdDOzs7SUFGQyxxQ0FBZ0I7O0lBQ2hCLHNDQUFpQjs7QUFHbkI7SUFBQTtJQUdBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsaUNBQWM7O0lBQ2QsK0JBQW9COzs7SUFPaEIsd0JBQXdCLEdBQUcsTUFBTTtBQUV2QztJQW1NRSwyQkFDUyxlQUFnQyxFQUMvQixRQUFtQixFQUNuQix3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OzJEQUFzQjtJQUNyQjtRQUFmLFlBQVksRUFBRTs7MERBQW9CO0lBK1M5Qyx3QkFBQztDQUFBLEFBOVZELElBOFZDO1NBOVVZLGlCQUFpQjs7Ozs7O0lBRTVCLDBDQUF5Qzs7Ozs7SUFDekMsK0JBQXdEOzs7OztJQUN4RCwyQ0FBNkM7Ozs7OztJQUU3Qyw2Q0FBOEM7Ozs7OztJQUU5QyxpREFBa0Q7Ozs7O0lBRWxELHFDQUF1Qzs7SUFFdkMsNENBQWtEOztJQUNsRCxpREFBaUY7O0lBQ2pGLCtDQUF5Rjs7SUFDekYsdUNBQW1FOzs7OztJQUVuRSwyQ0FDOEM7O0lBRTlDLGlEQUFpRDs7SUFDakQsNkNBQStFOztJQUMvRSx1Q0FBK0Y7O0lBQy9GLHNDQUEyQjs7SUFDM0IsMENBQThDOztJQUM5QyxtQ0FBZ0Y7O0lBQ2hGLDJDQUFzRTs7SUFDdEUsMENBQWtEOztJQUNsRCxtQ0FBeUU7O0lBRXpFLHlDQUE4Qzs7SUFDOUMsd0NBQTRDOztJQUU1QywwQ0FBNEQ7O0lBQzVELDBDQUE0RDs7SUFDNUQsMkNBQTZHOztJQUM3RyxrREFBNEY7O0lBZ0oxRiw0Q0FBdUM7Ozs7O0lBQ3ZDLHFDQUEyQjs7Ozs7SUFDM0IscURBQTBEOzs7OztJQUMxRCx1Q0FBOEI7Ozs7O0lBQzlCLGdDQUE4Qjs7Ozs7SUFDOUIsbUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vKiogZ2V0IHNvbWUgY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIFZpZXdDaGlsZHJlblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIsIFJvdXRlckxpbmssIFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgdG9OdW1iZXIsXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOekZvdXJEaXJlY3Rpb25UeXBlLFxyXG4gIE56U2l6ZUxEU1R5cGUsXHJcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gIFBSRUZJWCxcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56VGFiQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUYWJzTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJzLW5hdi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOekFuaW1hdGVkSW50ZXJmYWNlIHtcclxuICBpbmtCYXI6IGJvb2xlYW47XHJcbiAgdGFiUGFuZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE56VGFiQ2hhbmdlRXZlbnQge1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgdGFiOiBOelRhYkNvbXBvbmVudDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTnpUYWJQb3NpdGlvbiA9IE56Rm91ckRpcmVjdGlvblR5cGU7XHJcbmV4cG9ydCB0eXBlIE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcclxuZXhwb3J0IHR5cGUgTnpUYWJUeXBlID0gJ2xpbmUnIHwgJ2NhcmQnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3RhYnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei10YWJzZXQnLFxyXG4gIGV4cG9ydEFzOiAnbnpUYWJzZXQnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGFic2V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotdGFic2V0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGFiU2V0Q29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGluZGV4VG9TZWxlY3Q6IG51bWJlciB8IG51bGwgPSAwO1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgLyoqIFN1YnNjcmlwdGlvbiB0byB0YWJzIGJlaW5nIGFkZGVkL3JlbW92ZWQuICovXHJcbiAgcHJpdmF0ZSB0YWJzU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gY2hhbmdlcyBpbiB0aGUgdGFiIGxhYmVscy4gKi9cclxuICBwcml2YXRlIHRhYkxhYmVsU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgdGFiUG9zaXRpb25Nb2RlOiBOelRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcclxuICBAQ29udGVudENoaWxkcmVuKE56VGFiQ29tcG9uZW50KSBsaXN0T2ZOelRhYkNvbXBvbmVudDogUXVlcnlMaXN0PE56VGFiQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKE56VGFic05hdkNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIG56VGFic05hdkNvbXBvbmVudDogTnpUYWJzTmF2Q29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGFiQ29udGVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZHJlbihcImZvY3VzYWJsZVwiKVxyXG4gIHByaXZhdGUgX2ZvY3VzYWJsZURpdnM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuXHJcbiAgQElucHV0KCkgbnpUYWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgbnpTaG93UGFnaW5hdGlvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIG56QW5pbWF0ZWQ6IE56QW5pbWF0ZWRJbnRlcmZhY2UgfCBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56SGlkZUFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56VGFiUG9zaXRpb246IE56VGFiUG9zaXRpb24gPSAndG9wJztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiBOelNpemVMRFNUeXBlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpUYWJCYXJHdXR0ZXI6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelRhYkJhclN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2xpbmUnKSBuelR5cGU6IE56VGFiVHlwZTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TGlua1JvdXRlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxpbmtFeGFjdCA9IHRydWU7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uTmV4dENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uUHJldkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50Pih0cnVlKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlciB8IG51bGwpIHtcclxuICAgIHRoaXMuaW5kZXhUb1NlbGVjdCA9IHZhbHVlID8gdG9OdW1iZXIodmFsdWUsIG51bGwpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBuelNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICB9XHJcblxyXG4gIGdldCBpbmtCYXJBbmltYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56QW5pbWF0ZWQgPT09IHRydWUgfHwgKHRoaXMubnpBbmltYXRlZCBhcyBOekFuaW1hdGVkSW50ZXJmYWNlKS5pbmtCYXIgPT09IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdGFiUGFuZUFuaW1hdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpBbmltYXRlZCA9PT0gdHJ1ZSB8fCAodGhpcy5uekFuaW1hdGVkIGFzIE56QW5pbWF0ZWRJbnRlcmZhY2UpLnRhYlBhbmUgPT09IHRydWU7XHJcbiAgfVxyXG5cclxuICBtb3ZlUmlnaHQoJGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLm56U2VsZWN0ZWRJbmRleCE7XHJcbiAgICBsZXQgdGFicyA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQudG9BcnJheSgpO1xyXG4gICAgbGV0IGNvdW50ID0gdGFicy5sZW5ndGg7XHJcblxyXG4gICAgaWYgKGluZGV4ID09IChjb3VudCAtIDEpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGFiOiBOelRhYkNvbXBvbmVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgd2hpbGUoaW5kZXggPCAoY291bnQgLSAxKSAmJiAoIXRhYiB8fCB0YWIhLm56RGlzYWJsZWQpKSB7XHJcbiAgICAgIGluZGV4Kys7XHJcbiAgICAgIHRhYiA9IHRhYnNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YWIpIHtcclxuICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgdGFic1tpbmRleF0ubnpDbGljay5lbWl0KCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2ZvY3VzYWJsZURpdnMudG9BcnJheSgpW2luZGV4XS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3ZlTGVmdCgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBpbmRleCA9IHRoaXMubnpTZWxlY3RlZEluZGV4ITtcclxuICAgIGxldCB0YWJzID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KCk7XHJcblxyXG4gICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0YWI6IE56VGFiQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICB3aGlsZShpbmRleCA+IDAgJiYgKCF0YWIgfHwgdGFiIS5uekRpc2FibGVkKSkge1xyXG4gICAgICBpbmRleC0tO1xyXG4gICAgICB0YWIgPSB0YWJzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFiKSB7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRhYnNbaW5kZXhdLm56Q2xpY2suZW1pdCgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9mb2N1c2FibGVEaXZzLnRvQXJyYXkoKVtpbmRleF0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UG9zaXRpb24odmFsdWU6IE56VGFiUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhYkNvbnRlbnQpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSAnYm90dG9tJykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgICAgdGhpcy5lbCxcclxuICAgICAgICAgIHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgdGhpcy5uelRhYnNOYXZDb21wb25lbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShcclxuICAgICAgICAgIHRoaXMuZWwsXHJcbiAgICAgICAgICB0aGlzLm56VGFic05hdkNvbXBvbmVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICB0aGlzLnRhYkNvbnRlbnQubmF0aXZlRWxlbWVudFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIHtcclxuICAgICAgW2BhbnQtdGFic2BdOiB0cnVlLFxyXG4gICAgICBbYGFudC10YWJzLXZlcnRpY2FsYF06IHRoaXMubnpUYWJQb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMubnpUYWJQb3NpdGlvbiA9PT0gJ3JpZ2h0JyxcclxuICAgICAgW2BhbnQtdGFicy0ke3RoaXMubnpUYWJQb3NpdGlvbn1gXTogdGhpcy5uelRhYlBvc2l0aW9uLFxyXG4gICAgICBbYGFudC10YWJzLW5vLWFuaW1hdGlvbmBdOlxyXG4gICAgICAgIHRoaXMubnpBbmltYXRlZCA9PT0gZmFsc2UgfHwgKHRoaXMubnpBbmltYXRlZCBhcyBOekFuaW1hdGVkSW50ZXJmYWNlKS50YWJQYW5lID09PSBmYWxzZSxcclxuICAgICAgW2BhbnQtdGFicy0ke3RoaXMubnpUeXBlfWBdOiB0aGlzLm56VHlwZSxcclxuICAgICAgW2BhbnQtdGFicy1sYXJnZWBdOiB0aGlzLm56U2l6ZSA9PT0gJ2xhcmdlJyxcclxuICAgICAgW2BhbnQtdGFicy1zbWFsbGBdOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGlja0xhYmVsKGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIWRpc2FibGVkKSB7XHJcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKTtcclxuICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgdGFic1tpbmRleF0ubnpDbGljay5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogTnpUYWJDaGFuZ2VFdmVudCB7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBOelRhYkNoYW5nZUV2ZW50KCk7XHJcbiAgICBldmVudC5pbmRleCA9IGluZGV4O1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgICAgZXZlbnQudGFiID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KClbaW5kZXhdO1xyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICBpZiAoaSAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgIGl0ZW0ubnpEZXNlbGVjdC5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnQudGFiLm56U2VsZWN0LmVtaXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcblxyXG4gIC8qKiBDbGFtcHMgdGhlIGdpdmVuIGluZGV4IHRvIHRoZSBib3VuZHMgb2YgMCBhbmQgdGhlIHRhYnMgbGVuZ3RoLiAqL1xyXG4gIHByaXZhdGUgY2xhbXBUYWJJbmRleChpbmRleDogbnVtYmVyIHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICAvLyBOb3RlIHRoZSBgfHwgMGAsIHdoaWNoIGVuc3VyZXMgdGhhdCB2YWx1ZXMgbGlrZSBOYU4gY2FuJ3QgZ2V0IHRocm91Z2hcclxuICAgIC8vIGFuZCB3aGljaCB3b3VsZCBvdGhlcndpc2UgdGhyb3cgdGhlIGNvbXBvbmVudCBpbnRvIGFuIGluZmluaXRlIGxvb3BcclxuICAgIC8vIChzaW5jZSBNYXRoLm1heChOYU4sIDApID09PSBOYU4pLlxyXG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1RhYkxhYmVscygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lm1hcCh0YWIgPT4gdGFiLnN0YXRlQ2hhbmdlcykpLnN1YnNjcmliZSgoKSA9PlxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56VGFiUG9zaXRpb24pIHtcclxuICAgICAgaWYgKHRoaXMubnpUYWJQb3NpdGlvbiA9PT0gJ3RvcCcgfHwgdGhpcy5uelRhYlBvc2l0aW9uID09PSAnYm90dG9tJykge1xyXG4gICAgICAgIHRoaXMudGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFiUG9zaXRpb25Nb2RlID0gJ3ZlcnRpY2FsJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMubnpUYWJQb3NpdGlvbik7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uelR5cGUpIHtcclxuICAgICAgaWYgKHRoaXMubnpUeXBlID09PSAnY2FyZCcpIHtcclxuICAgICAgICB0aGlzLm56QW5pbWF0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpTaXplIHx8IGNoYW5nZXMubnpBbmltYXRlZCB8fCBjaGFuZ2VzLm56VGFiUG9zaXRpb24gfHwgY2hhbmdlcy5uelR5cGUpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICAvLyBEb24ndCBjbGFtcCB0aGUgYGluZGV4VG9TZWxlY3RgIGltbWVkaWF0ZWx5IGluIHRoZSBzZXR0ZXIgYmVjYXVzZSBpdCBjYW4gaGFwcGVuIHRoYXRcclxuICAgICAgLy8gdGhlIGFtb3VudCBvZiB0YWJzIGNoYW5nZXMgYmVmb3JlIHRoZSBhY3R1YWwgY2hhbmdlIGRldGVjdGlvbiBydW5zLlxyXG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gKHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBjaGFuZ2UgaW4gc2VsZWN0ZWQgaW5kZXgsIGVtaXQgYSBjaGFuZ2UgZXZlbnQuIFNob3VsZCBub3QgdHJpZ2dlciBpZlxyXG4gICAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cclxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgICBjb25zdCBpc0ZpcnN0UnVuID0gdGhpcy5fc2VsZWN0ZWRJbmRleCA9PSBudWxsO1xyXG4gICAgICAgIGlmICghaXNGaXJzdFJ1bikge1xyXG4gICAgICAgICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KHRoaXMuY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXhUb1NlbGVjdCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hhbmdpbmcgdGhlc2UgdmFsdWVzIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHJ1blxyXG4gICAgICAgIC8vIHNpbmNlIHRoZSBjaGVja2VkIGNvbnRlbnQgbWF5IGNvbnRhaW4gcmVmZXJlbmNlcyB0byB0aGVtLlxyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiAodGFiLmlzQWN0aXZlID0gaW5kZXggPT09IGluZGV4VG9TZWxlY3QpKTtcclxuXHJcbiAgICAgICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleFRvU2VsZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0dXAgdGhlIHBvc2l0aW9uIGZvciBlYWNoIHRhYiBhbmQgb3B0aW9uYWxseSBzZXR1cCBhbiBvcmlnaW4gb24gdGhlIG5leHQgc2VsZWN0ZWQgdGFiLlxyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYjogTnpUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXHJcbiAgICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9IG51bGwgJiYgdGFiLnBvc2l0aW9uID09PSAwICYmICF0YWIub3JpZ2luKSB7XHJcbiAgICAgICAgICB0YWIub3JpZ2luID0gaW5kZXhUb1NlbGVjdCAtIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4VG9TZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTtcclxuXHJcbiAgICAvLyBTdWJzY3JpYmUgdG8gY2hhbmdlcyBpbiB0aGUgYW1vdW50IG9mIHRhYnMsIGluIG9yZGVyIHRvIGJlXHJcbiAgICAvLyBhYmxlIHRvIHJlLXJlbmRlciB0aGUgY29udGVudCBhcyBuZXcgdGFicyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC5cclxuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gdGhpcy5jbGFtcFRhYkluZGV4KHRoaXMuaW5kZXhUb1NlbGVjdCk7XHJcblxyXG4gICAgICAvLyBNYWludGFpbiB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCB0YWIgaWYgYSBuZXcgdGFiIGlzIGFkZGVkIG9yIHJlbW92ZWQgYW5kIHRoZXJlIGlzIG5vXHJcbiAgICAgIC8vIGV4cGxpY2l0IGNoYW5nZSB0aGF0IHNlbGVjdHMgYSBkaWZmZXJlbnQgdGFiLlxyXG4gICAgICBpZiAoaW5kZXhUb1NlbGVjdCA9PT0gdGhpcy5fc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGFic1tpXS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBBc3NpZ24gYm90aCB0byB0aGUgYF9pbmRleFRvU2VsZWN0YCBhbmQgYF9zZWxlY3RlZEluZGV4YCBzbyB3ZSBkb24ndCBmaXJlIGEgY2hhbmdlZFxyXG4gICAgICAgICAgICAvLyBldmVudCwgb3RoZXJ3aXNlIHRoZSBjb25zdW1lciBtYXkgZW5kIHVwIGluIGFuIGluZmluaXRlIGxvb3AgaW4gc29tZSBlZGdlIGNhc2VzIGxpa2VcclxuICAgICAgICAgICAgLy8gYWRkaW5nIGEgdGFiIHdpdGhpbiB0aGUgYHNlbGVjdGVkSW5kZXhDaGFuZ2VgIGV2ZW50LlxyXG4gICAgICAgICAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMubnpUYWJQb3NpdGlvbik7XHJcblxyXG4gICAgaWYgKHRoaXMubnpMaW5rUm91dGVyKSB7XHJcbiAgICAgIGlmICghdGhpcy5yb3V0ZXIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7UFJFRklYfSB5b3Ugc2hvdWxkIGltcG9ydCAnUm91dGVyTW9kdWxlJyBpZiB5b3Ugd2FudCB0byB1c2UgJ256TGlua1JvdXRlcichYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxyXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVSb3V0ZXJBY3RpdmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yb3V0ZXIubmF2aWdhdGVkKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kU2hvdWxkQWN0aXZlVGFiSW5kZXgoKTtcclxuICAgICAgaWYgKGluZGV4ICE9PSB0aGlzLl9zZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLm56U2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm56SGlkZUFsbCA9IGluZGV4ID09PSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZFNob3VsZEFjdGl2ZVRhYkluZGV4KCk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KCk7XHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuaXNMaW5rQWN0aXZlKHRoaXMucm91dGVyKTtcclxuXHJcbiAgICByZXR1cm4gdGFicy5maW5kSW5kZXgodGFiID0+IHtcclxuICAgICAgY29uc3QgYyA9IHRhYi5saW5rRGlyZWN0aXZlO1xyXG4gICAgICByZXR1cm4gYyA/IGlzQWN0aXZlKGMucm91dGVyTGluaykgfHwgaXNBY3RpdmUoYy5yb3V0ZXJMaW5rV2l0aEhyZWYpIDogZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNMaW5rQWN0aXZlKHJvdXRlcjogUm91dGVyKTogKGxpbms/OiBSb3V0ZXJMaW5rIHwgUm91dGVyTGlua1dpdGhIcmVmKSA9PiBib29sZWFuIHtcclxuICAgIHJldHVybiAobGluaz86IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IChsaW5rID8gcm91dGVyLmlzQWN0aXZlKGxpbmsudXJsVHJlZSwgdGhpcy5uekxpbmtFeGFjdCkgOiBmYWxzZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==