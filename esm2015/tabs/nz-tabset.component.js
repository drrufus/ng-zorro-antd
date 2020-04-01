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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
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
export class NzTabChangeEvent {
}
if (false) {
    /** @type {?} */
    NzTabChangeEvent.prototype.index;
    /** @type {?} */
    NzTabChangeEvent.prototype.tab;
}
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'tabs';
export class NzTabSetComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} router
     */
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSelectedIndex(value) {
        this.indexToSelect = value ? toNumber(value, null) : null;
    }
    /**
     * @return {?}
     */
    get nzSelectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    get inkBarAnimated() {
        return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).inkBar === true;
    }
    /**
     * @return {?}
     */
    get tabPaneAnimated() {
        return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).tabPane === true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`ant-tabs`]: true,
            [`ant-tabs-vertical`]: this.nzTabPosition === 'left' || this.nzTabPosition === 'right',
            [`ant-tabs-${this.nzTabPosition}`]: this.nzTabPosition,
            [`ant-tabs-no-animation`]: this.nzAnimated === false || ((/** @type {?} */ (this.nzAnimated))).tabPane === false,
            [`ant-tabs-${this.nzType}`]: this.nzType,
            [`ant-tabs-large`]: this.nzSize === 'large',
            [`ant-tabs-small`]: this.nzSize === 'small'
        });
    }
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    clickLabel(index, disabled) {
        if (!disabled) {
            /** @type {?} */
            const tabs = this.listOfNzTabComponent.toArray();
            this.nzSelectedIndex = index;
            tabs[index].nzClick.emit();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    createChangeEvent(index) {
        /** @type {?} */
        const event = new NzTabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent.toArray()[index];
            this.listOfNzTabComponent.forEach((/**
             * @param {?} item
             * @param {?} i
             * @return {?}
             */
            (item, i) => {
                if (i !== index) {
                    item.nzDeselect.emit();
                }
            }));
            event.tab.nzSelect.emit();
        }
        return event;
    }
    /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @private
     * @param {?} index
     * @return {?}
     */
    clampTabIndex(index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeToTabLabels() {
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge(...this.listOfNzTabComponent.map((/**
         * @param {?} tab
         * @return {?}
         */
        tab => tab.stateChanges))).subscribe((/**
         * @return {?}
         */
        () => this.cdr.markForCheck()));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            /** @type {?} */
            const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect) {
                /** @type {?} */
                const isFirstRun = this._selectedIndex == null;
                if (!isFirstRun) {
                    this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    this.listOfNzTabComponent.forEach((/**
                     * @param {?} tab
                     * @param {?} index
                     * @return {?}
                     */
                    (tab, index) => (tab.isActive = index === indexToSelect)));
                    if (!isFirstRun) {
                        this.nzSelectedIndexChange.emit(indexToSelect);
                    }
                }));
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach((/**
             * @param {?} tab
             * @param {?} index
             * @return {?}
             */
            (tab, index) => {
                tab.position = index - indexToSelect;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect - this._selectedIndex;
                }
            }));
            if (this._selectedIndex !== indexToSelect) {
                this._selectedIndex = indexToSelect;
                this.cdr.markForCheck();
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.subscribeToTabLabels();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const indexToSelect = this.clampTabIndex(this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this._selectedIndex) {
                /** @type {?} */
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
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tabsSubscription.unsubscribe();
        this.tabLabelSubscription.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setPosition(this.nzTabPosition);
        if (this.nzLinkRouter) {
            if (!this.router) {
                throw new Error(`${PREFIX} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
            }
            this.router.events
                .pipe(takeUntil(this.destroy$), filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof NavigationEnd)), startWith(true))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.updateRouterActive();
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateRouterActive() {
        if (this.router.navigated) {
            /** @type {?} */
            const index = this.findShouldActiveTabIndex();
            if (index !== this._selectedIndex) {
                this.nzSelectedIndex = index;
                this.nzSelectedIndexChange.emit(index);
            }
            this.nzHideAll = index === -1;
        }
    }
    /**
     * @private
     * @return {?}
     */
    findShouldActiveTabIndex() {
        /** @type {?} */
        const tabs = this.listOfNzTabComponent.toArray();
        /** @type {?} */
        const isActive = this.isLinkActive(this.router);
        return tabs.findIndex((/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            /** @type {?} */
            const c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        }));
    }
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    isLinkActive(router) {
        return (/**
         * @param {?=} link
         * @return {?}
         */
        (link) => (link ? router.isActive(link.urlTree, this.nzLinkExact) : false));
    }
}
NzTabSetComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tabset',
                exportAs: 'nzTabset',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                template: "<ng-container *ngIf=\"listOfNzTabComponent\">\r\n  <div nz-tabs-nav\r\n    role=\"tablist\"\r\n    class=\"ant-tabs-bar\"\r\n    [class.ant-tabs-card-bar]=\"nzType === 'card'\"\r\n    [class.ant-tabs-top-bar]=\"nzTabPosition === 'top'\"\r\n    [class.ant-tabs-bottom-bar]=\"nzTabPosition === 'bottom'\"\r\n    [class.ant-tabs-left-bar]=\"nzTabPosition === 'left'\"\r\n    [class.ant-tabs-right-bar]=\"nzTabPosition === 'right'\"\r\n    [class.ant-tabs-small-bar]=\"nzSize === 'small'\"\r\n    [class.ant-tabs-default-bar]=\"nzSize === 'default'\"\r\n    [class.ant-tabs-large-bar]=\"nzSize === 'large'\"\r\n    [nzType]=\"nzType\"\r\n    [nzShowPagination]=\"nzShowPagination\"\r\n    [nzPositionMode]=\"tabPositionMode\"\r\n    [nzAnimated]=\"inkBarAnimated\"\r\n    [ngStyle]=\"nzTabBarStyle\"\r\n    [nzHideBar]=\"nzHideAll\"\r\n    [nzTabBarExtraContent]=\"nzTabBarExtraContent\"\r\n    [selectedIndex]=\"nzSelectedIndex\"\r\n    (nzOnNextClick)=\"nzOnNextClick.emit()\"\r\n    (nzOnPrevClick)=\"nzOnPrevClick.emit()\">\r\n    <div nz-tab-label\r\n      tabindex=\"0\"\r\n      role=\"tab\"\r\n      [attr.aria-selected]=\"nzSelectedIndex == i\"\r\n      [attr.aria-label]=\"tab.nzTitle\"\r\n      [style.margin-right.px]=\"nzTabBarGutter\"\r\n      [class.ant-tabs-tab-active]=\"(nzSelectedIndex == i) && !nzHideAll\"\r\n      [disabled]=\"tab.nzDisabled\"\r\n      (click)=\"clickLabel(i,tab.nzDisabled)\"\r\n      (keyup.enter)=\"clickLabel(i,tab.nzDisabled)\"\r\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\r\n      <ng-container *nzStringTemplateOutlet=\"tab.nzTitle || tab.title\">{{ tab.nzTitle }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <div #tabContent\r\n    class=\"ant-tabs-content\"\r\n    [class.ant-tabs-top-content]=\"nzTabPosition === 'top'\"\r\n    [class.ant-tabs-bottom-content]=\"nzTabPosition === 'bottom'\"\r\n    [class.ant-tabs-left-content]=\"nzTabPosition === 'left'\"\r\n    [class.ant-tabs-right-content]=\"nzTabPosition === 'right'\"\r\n    [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\r\n    [class.ant-tabs-card-content]=\"nzType === 'card'\"\r\n    [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\r\n    [style.margin-left.%]=\"(tabPositionMode === 'horizontal') && tabPaneAnimated && (-(nzSelectedIndex || 0 ) * 100)\">\r\n    <div nz-tab-body\r\n      class=\"ant-tabs-tabpane\"\r\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\r\n      [active]=\"(nzSelectedIndex == i) && !nzHideAll\"\r\n      [forceRender]=\"tab.nzForceRender\"\r\n      [content]=\"tab.template || tab.content\">\r\n    </div>\r\n  </div>\r\n</ng-container>",
                styles: [`
      nz-tabset {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzTabSetComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Router, decorators: [{ type: Optional }] }
];
NzTabSetComponent.propDecorators = {
    listOfNzTabComponent: [{ type: ContentChildren, args: [NzTabComponent,] }],
    nzTabsNavComponent: [{ type: ViewChild, args: [NzTabsNavComponent, { static: false },] }],
    tabContent: [{ type: ViewChild, args: ['tabContent', { static: false },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFicy8iLCJzb3VyY2VzIjpbIm56LXRhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFJTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFrQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwRCxPQUFPLEVBQ0wsUUFBUSxFQUNSLFlBQVksRUFDWixlQUFlLEVBR2Ysd0JBQXdCLEVBQ3hCLE1BQU0sRUFDTixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFN0QseUNBR0M7OztJQUZDLHFDQUFnQjs7SUFDaEIsc0NBQWlCOztBQUduQixNQUFNLE9BQU8sZ0JBQWdCO0NBRzVCOzs7SUFGQyxpQ0FBYzs7SUFDZCwrQkFBb0I7OztNQU9oQix3QkFBd0IsR0FBRyxNQUFNO0FBa0J2QyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7Ozs7SUEySDVCLFlBQ1MsZUFBZ0MsRUFDL0IsUUFBbUIsRUFDbkIsd0JBQWtELEVBQ2xELFVBQXNCLEVBQ3RCLEdBQXNCLEVBQ1YsTUFBYztRQUwzQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBL0g1QixrQkFBYSxHQUFrQixDQUFDLENBQUM7UUFDakMsT0FBRSxHQUFnQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxtQkFBYyxHQUFrQixJQUFJLENBQUM7Ozs7UUFFckMscUJBQWdCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQzs7OztRQUV0Qyx5QkFBb0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBRTFDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRXZDLG9CQUFlLEdBQXNCLFlBQVksQ0FBQztRQVF6QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQWtCLEtBQUssQ0FBQztRQU1yQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUV6QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDekMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3pDLG1CQUFjLEdBQW1DLElBQUksWUFBWSxDQUFtQixJQUFJLENBQUMsQ0FBQztRQUMxRiwwQkFBcUIsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQWlHekYsQ0FBQzs7Ozs7SUEvRkosSUFDSSxlQUFlLENBQUMsS0FBb0I7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsVUFBVSxFQUF1QixDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQztJQUM5RixDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsVUFBVSxFQUF1QixDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQztJQUMvRixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFvQjtRQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FDeEIsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQ2pELENBQUM7YUFDSDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FDeEIsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQzlCLENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDckQsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJO1lBQ2xCLENBQUMsbUJBQW1CLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLE9BQU87WUFDdEYsQ0FBQyxZQUFZLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ3RELENBQUMsdUJBQXVCLENBQUMsRUFDdkIsSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsVUFBVSxFQUF1QixDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUs7WUFDekYsQ0FBQyxZQUFZLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ3hDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87WUFDM0MsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTztTQUM1QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYSxFQUFFLFFBQWlCO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEVBQUU7O2tCQUNQLElBQUksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFO1lBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQWE7O2NBQ3ZCLEtBQUssR0FBRyxJQUFJLGdCQUFnQixFQUFFO1FBQ3BDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7WUFDakUsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU87Ozs7O1lBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtvQkFDZixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUN4QjtZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDM0I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7Ozs7SUFHTyxhQUFhLENBQUMsS0FBb0I7UUFDeEMsd0VBQXdFO1FBQ3hFLHNFQUFzRTtRQUN0RSxvQ0FBb0M7UUFDcEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7O0lBRU8sb0JBQW9CO1FBQzFCLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQzFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQ3hCLENBQUM7SUFDSixDQUFDOzs7OztJQVdELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVEsRUFBRTtnQkFDbkUsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUM7YUFDckM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO2dCQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN6QjtTQUNGO1FBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ25GLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRTs7OztrQkFHM0QsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNuRixxRkFBcUY7WUFDckYsbURBQW1EO1lBQ25ELElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxhQUFhLEVBQUU7O3NCQUNuQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJO2dCQUM5QyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2lCQUNqRTtnQkFFRCx1REFBdUQ7Z0JBQ3ZELDREQUE0RDtnQkFDNUQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztnQkFBQyxHQUFHLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPOzs7OztvQkFBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLEtBQUssYUFBYSxDQUFDLEVBQUMsQ0FBQztvQkFFNUYsSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDZixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUNoRDtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBRUQsMkZBQTJGO1lBQzNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPOzs7OztZQUFDLENBQUMsR0FBbUIsRUFBRSxLQUFhLEVBQUUsRUFBRTtnQkFDdkUsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsYUFBYSxDQUFDO2dCQUVyQyxzRkFBc0Y7Z0JBQ3RGLGtDQUFrQztnQkFDbEMsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7b0JBQ3BFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7aUJBQ2xEO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFFSCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssYUFBYSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6QjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUU1Qiw2REFBNkQ7UUFDN0Qsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ2pFLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFFNUQsd0ZBQXdGO1lBQ3hGLGdEQUFnRDtZQUNoRCxJQUFJLGFBQWEsS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFOztzQkFDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7Z0JBRWhELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNwQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7d0JBQ3BCLHNGQUFzRjt3QkFDdEYsdUZBQXVGO3dCQUN2Rix1REFBdUQ7d0JBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7d0JBQzdDLE1BQU07cUJBQ1A7aUJBQ0Y7YUFDRjtZQUVELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsTUFBTSxzRUFBc0UsQ0FBQyxDQUFDO2FBQ2xHO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2lCQUNmLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN4QixNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksYUFBYSxFQUFDLEVBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FDaEI7aUJBQ0EsU0FBUzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDSCxDQUFDOzs7OztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFOztrQkFDbkIsS0FBSyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUM3QyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDN0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7SUFFTyx3QkFBd0I7O2NBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFOztjQUMxQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRS9DLE9BQU8sSUFBSSxDQUFDLFNBQVM7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTs7a0JBQ3BCLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBYTtZQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM5RSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxNQUFjO1FBQ2pDOzs7O1FBQU8sQ0FBQyxJQUFzQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUM7SUFDdEgsQ0FBQzs7O1lBclNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLG1sRkFBeUM7eUJBRXZDOzs7O0tBSUM7YUFFSjs7OztZQTNDQyxlQUFlO1lBWmYsU0FBUztZQWVULHdCQUF3QjtZQXhCeEIsVUFBVTtZQUhWLGlCQUFpQjtZQWtCSyxNQUFNLHVCQW1MekIsUUFBUTs7O21DQXBIVixlQUFlLFNBQUMsY0FBYztpQ0FDOUIsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt5QkFDL0MsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7bUNBRXpDLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUVMLEtBQUs7MEJBQ0wsS0FBSzs0QkFFTCxNQUFNOzRCQUNOLE1BQU07NkJBQ04sTUFBTTtvQ0FDTixNQUFNOzhCQUVOLEtBQUs7O0FBakIrQztJQUEzQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDOzsyREFBMkI7QUFDMUI7SUFBM0MsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQzs7cURBQTJDO0FBR3JDO0lBQWhELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUM7O2lEQUF1QjtBQUNqQztJQUFyQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7O3lEQUF3QjtBQUVmO0lBQTdDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUM7O2lEQUFtQjtBQUVoRDtJQUFmLFlBQVksRUFBRTs7dURBQXNCO0FBQ3JCO0lBQWYsWUFBWSxFQUFFOztzREFBb0I7Ozs7OztJQTFCNUMsMENBQXlDOzs7OztJQUN6QywrQkFBd0Q7Ozs7O0lBQ3hELDJDQUE2Qzs7Ozs7O0lBRTdDLDZDQUE4Qzs7Ozs7O0lBRTlDLGlEQUFrRDs7Ozs7SUFFbEQscUNBQXVDOztJQUV2Qyw0Q0FBa0Q7O0lBQ2xELGlEQUFpRjs7SUFDakYsK0NBQXlGOztJQUN6Rix1Q0FBbUU7O0lBRW5FLGlEQUFpRDs7SUFDakQsNkNBQStFOztJQUMvRSx1Q0FBK0Y7O0lBQy9GLHNDQUEyQjs7SUFDM0IsMENBQThDOztJQUM5QyxtQ0FBZ0Y7O0lBQ2hGLDJDQUFzRTs7SUFDdEUsMENBQWtEOztJQUNsRCxtQ0FBeUU7O0lBRXpFLHlDQUE4Qzs7SUFDOUMsd0NBQTRDOztJQUU1QywwQ0FBNEQ7O0lBQzVELDBDQUE0RDs7SUFDNUQsMkNBQTZHOztJQUM3RyxrREFBNEY7O0lBMkYxRiw0Q0FBdUM7Ozs7O0lBQ3ZDLHFDQUEyQjs7Ozs7SUFDM0IscURBQTBEOzs7OztJQUMxRCx1Q0FBOEI7Ozs7O0lBQzlCLGdDQUE4Qjs7Ozs7SUFDOUIsbUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vKiogZ2V0IHNvbWUgY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICB0b051bWJlcixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIE56Rm91ckRpcmVjdGlvblR5cGUsXHJcbiAgTnpTaXplTERTVHlwZSxcclxuICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgUFJFRklYLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpUYWJDb21wb25lbnQgfSBmcm9tICcuL256LXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRhYnNOYXZDb21wb25lbnQgfSBmcm9tICcuL256LXRhYnMtbmF2LmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56QW5pbWF0ZWRJbnRlcmZhY2Uge1xyXG4gIGlua0JhcjogYm9vbGVhbjtcclxuICB0YWJQYW5lOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTnpUYWJDaGFuZ2VFdmVudCB7XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICB0YWI6IE56VGFiQ29tcG9uZW50O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOelRhYlBvc2l0aW9uID0gTnpGb3VyRGlyZWN0aW9uVHlwZTtcclxuZXhwb3J0IHR5cGUgTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xyXG5leHBvcnQgdHlwZSBOelRhYlR5cGUgPSAnbGluZScgfCAnY2FyZCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndGFicyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXRhYnNldCcsXHJcbiAgZXhwb3J0QXM6ICduelRhYnNldCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10YWJzZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei10YWJzZXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUYWJTZXRDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IDA7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHRhYnMgYmVpbmcgYWRkZWQvcmVtb3ZlZC4gKi9cclxuICBwcml2YXRlIHRhYnNTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBjaGFuZ2VzIGluIHRoZSB0YWIgbGFiZWxzLiAqL1xyXG4gIHByaXZhdGUgdGFiTGFiZWxTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICB0YWJQb3NpdGlvbk1vZGU6IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUYWJDb21wb25lbnQpIGxpc3RPZk56VGFiQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpUYWJDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoTnpUYWJzTmF2Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgbnpUYWJzTmF2Q29tcG9uZW50OiBOelRhYnNOYXZDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSB0YWJDb250ZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBuelRhYkJhckV4dHJhQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBuelNob3dQYWdpbmF0aW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgbnpBbmltYXRlZDogTnpBbmltYXRlZEludGVyZmFjZSB8IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpIaWRlQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpUYWJQb3NpdGlvbjogTnpUYWJQb3NpdGlvbiA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56U2l6ZUxEU1R5cGU7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelRhYkJhckd1dHRlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56VGFiQmFyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnbGluZScpIG56VHlwZTogTnpUYWJUeXBlO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMaW5rUm91dGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TGlua0V4YWN0ID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+KHRydWUpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdmFsdWUgPyB0b051bWJlcih2YWx1ZSwgbnVsbCkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2VsZWN0ZWRJbmRleCgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlua0JhckFuaW1hdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpBbmltYXRlZCA9PT0gdHJ1ZSB8fCAodGhpcy5uekFuaW1hdGVkIGFzIE56QW5pbWF0ZWRJbnRlcmZhY2UpLmlua0JhciA9PT0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCB0YWJQYW5lQW5pbWF0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekFuaW1hdGVkID09PSB0cnVlIHx8ICh0aGlzLm56QW5pbWF0ZWQgYXMgTnpBbmltYXRlZEludGVyZmFjZSkudGFiUGFuZSA9PT0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNldFBvc2l0aW9uKHZhbHVlOiBOelRhYlBvc2l0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50YWJDb250ZW50KSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShcclxuICAgICAgICAgIHRoaXMuZWwsXHJcbiAgICAgICAgICB0aGlzLnRhYkNvbnRlbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgIHRoaXMubnpUYWJzTmF2Q29tcG9uZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICB0aGlzLmVsLFxyXG4gICAgICAgICAgdGhpcy5uelRhYnNOYXZDb21wb25lbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgdGhpcy50YWJDb250ZW50Lm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCB7XHJcbiAgICAgIFtgYW50LXRhYnNgXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtdGFicy12ZXJ0aWNhbGBdOiB0aGlzLm56VGFiUG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLm56VGFiUG9zaXRpb24gPT09ICdyaWdodCcsXHJcbiAgICAgIFtgYW50LXRhYnMtJHt0aGlzLm56VGFiUG9zaXRpb259YF06IHRoaXMubnpUYWJQb3NpdGlvbixcclxuICAgICAgW2BhbnQtdGFicy1uby1hbmltYXRpb25gXTpcclxuICAgICAgICB0aGlzLm56QW5pbWF0ZWQgPT09IGZhbHNlIHx8ICh0aGlzLm56QW5pbWF0ZWQgYXMgTnpBbmltYXRlZEludGVyZmFjZSkudGFiUGFuZSA9PT0gZmFsc2UsXHJcbiAgICAgIFtgYW50LXRhYnMtJHt0aGlzLm56VHlwZX1gXTogdGhpcy5uelR5cGUsXHJcbiAgICAgIFtgYW50LXRhYnMtbGFyZ2VgXTogdGhpcy5uelNpemUgPT09ICdsYXJnZScsXHJcbiAgICAgIFtgYW50LXRhYnMtc21hbGxgXTogdGhpcy5uelNpemUgPT09ICdzbWFsbCdcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tMYWJlbChpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFkaXNhYmxlZCkge1xyXG4gICAgICBjb25zdCB0YWJzID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KCk7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRhYnNbaW5kZXhdLm56Q2xpY2suZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE56VGFiQ2hhbmdlRXZlbnQge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgTnpUYWJDaGFuZ2VFdmVudCgpO1xyXG4gICAgZXZlbnQuaW5kZXggPSBpbmRleDtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XHJcbiAgICAgIGV2ZW50LnRhYiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQudG9BcnJheSgpW2luZGV4XTtcclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICBpdGVtLm56RGVzZWxlY3QuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGV2ZW50LnRhYi5uelNlbGVjdC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXZlbnQ7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhbXBzIHRoZSBnaXZlbiBpbmRleCB0byB0aGUgYm91bmRzIG9mIDAgYW5kIHRoZSB0YWJzIGxlbmd0aC4gKi9cclxuICBwcml2YXRlIGNsYW1wVGFiSW5kZXgoaW5kZXg6IG51bWJlciB8IG51bGwpOiBudW1iZXIge1xyXG4gICAgLy8gTm90ZSB0aGUgYHx8IDBgLCB3aGljaCBlbnN1cmVzIHRoYXQgdmFsdWVzIGxpa2UgTmFOIGNhbid0IGdldCB0aHJvdWdoXHJcbiAgICAvLyBhbmQgd2hpY2ggd291bGQgb3RoZXJ3aXNlIHRocm93IHRoZSBjb21wb25lbnQgaW50byBhbiBpbmZpbml0ZSBsb29wXHJcbiAgICAvLyAoc2luY2UgTWF0aC5tYXgoTmFOLCAwKSA9PT0gTmFOKS5cclxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCAtIDEsIE1hdGgubWF4KGluZGV4IHx8IDAsIDApKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5tYXAodGFiID0+IHRhYi5zdGF0ZUNoYW5nZXMpKS5zdWJzY3JpYmUoKCkgPT5cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelRhYlBvc2l0aW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLm56VGFiUG9zaXRpb24gPT09ICd0b3AnIHx8IHRoaXMubnpUYWJQb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgICB0aGlzLnRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRhYlBvc2l0aW9uTW9kZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLm56VGFiUG9zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpUeXBlKSB7XHJcbiAgICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2NhcmQnKSB7XHJcbiAgICAgICAgdGhpcy5uekFuaW1hdGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56U2l6ZSB8fCBjaGFuZ2VzLm56QW5pbWF0ZWQgfHwgY2hhbmdlcy5uelRhYlBvc2l0aW9uIHx8IGNoYW5nZXMubnpUeXBlKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgICAgLy8gRG9uJ3QgY2xhbXAgdGhlIGBpbmRleFRvU2VsZWN0YCBpbW1lZGlhdGVseSBpbiB0aGUgc2V0dGVyIGJlY2F1c2UgaXQgY2FuIGhhcHBlbiB0aGF0XHJcbiAgICAgIC8vIHRoZSBhbW91bnQgb2YgdGFicyBjaGFuZ2VzIGJlZm9yZSB0aGUgYWN0dWFsIGNoYW5nZSBkZXRlY3Rpb24gcnVucy5cclxuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9ICh0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLmNsYW1wVGFiSW5kZXgodGhpcy5pbmRleFRvU2VsZWN0KSk7XHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHNlbGVjdGVkIGluZGV4LCBlbWl0IGEgY2hhbmdlIGV2ZW50LiBTaG91bGQgbm90IHRyaWdnZXIgaWZcclxuICAgICAgLy8gdGhlIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgaXNGaXJzdFJ1biA9IHRoaXMuX3NlbGVjdGVkSW5kZXggPT0gbnVsbDtcclxuICAgICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoYW5naW5nIHRoZXNlIHZhbHVlcyBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyBydW5cclxuICAgICAgICAvLyBzaW5jZSB0aGUgY2hlY2tlZCBjb250ZW50IG1heSBjb250YWluIHJlZmVyZW5jZXMgdG8gdGhlbS5cclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4gKHRhYi5pc0FjdGl2ZSA9IGluZGV4ID09PSBpbmRleFRvU2VsZWN0KSk7XHJcblxyXG4gICAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQoaW5kZXhUb1NlbGVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNldHVwIHRoZSBwb3NpdGlvbiBmb3IgZWFjaCB0YWIgYW5kIG9wdGlvbmFsbHkgc2V0dXAgYW4gb3JpZ2luIG9uIHRoZSBuZXh0IHNlbGVjdGVkIHRhYi5cclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKCh0YWI6IE56VGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGFiLnBvc2l0aW9uID0gaW5kZXggLSBpbmRleFRvU2VsZWN0O1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VsZWN0ZWQgdGFiLCB0aGVuIHNldCB1cCBhbiBvcmlnaW4gZm9yIHRoZSBuZXh0IHNlbGVjdGVkIHRhYlxyXG4gICAgICAgIC8vIGlmIGl0IGRvZXNuJ3QgaGF2ZSBvbmUgYWxyZWFkeS5cclxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHRhYi5wb3NpdGlvbiA9PT0gMCAmJiAhdGFiLm9yaWdpbikge1xyXG4gICAgICAgICAgdGFiLm9yaWdpbiA9IGluZGV4VG9TZWxlY3QgLSB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleFRvU2VsZWN0O1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XHJcblxyXG4gICAgLy8gU3Vic2NyaWJlIHRvIGNoYW5nZXMgaW4gdGhlIGFtb3VudCBvZiB0YWJzLCBpbiBvcmRlciB0byBiZVxyXG4gICAgLy8gYWJsZSB0byByZS1yZW5kZXIgdGhlIGNvbnRlbnQgYXMgbmV3IHRhYnMgYXJlIGFkZGVkIG9yIHJlbW92ZWQuXHJcbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24gPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpO1xyXG5cclxuICAgICAgLy8gTWFpbnRhaW4gdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgdGFiIGlmIGEgbmV3IHRhYiBpcyBhZGRlZCBvciByZW1vdmVkIGFuZCB0aGVyZSBpcyBub1xyXG4gICAgICAvLyBleHBsaWNpdCBjaGFuZ2UgdGhhdCBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYi5cclxuICAgICAgaWYgKGluZGV4VG9TZWxlY3QgPT09IHRoaXMuX3NlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICBjb25zdCB0YWJzID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRhYnNbaV0uaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgLy8gQXNzaWduIGJvdGggdG8gdGhlIGBfaW5kZXhUb1NlbGVjdGAgYW5kIGBfc2VsZWN0ZWRJbmRleGAgc28gd2UgZG9uJ3QgZmlyZSBhIGNoYW5nZWRcclxuICAgICAgICAgICAgLy8gZXZlbnQsIG90aGVyd2lzZSB0aGUgY29uc3VtZXIgbWF5IGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGluIHNvbWUgZWRnZSBjYXNlcyBsaWtlXHJcbiAgICAgICAgICAgIC8vIGFkZGluZyBhIHRhYiB3aXRoaW4gdGhlIGBzZWxlY3RlZEluZGV4Q2hhbmdlYCBldmVudC5cclxuICAgICAgICAgICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zdWJzY3JpYmVUb1RhYkxhYmVscygpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLm56VGFiUG9zaXRpb24pO1xyXG5cclxuICAgIGlmICh0aGlzLm56TGlua1JvdXRlcikge1xyXG4gICAgICBpZiAoIXRoaXMucm91dGVyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0geW91IHNob3VsZCBpbXBvcnQgJ1JvdXRlck1vZHVsZScgaWYgeW91IHdhbnQgdG8gdXNlICduekxpbmtSb3V0ZXInIWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcclxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUm91dGVyQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucm91dGVyLm5hdmlnYXRlZCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZFNob3VsZEFjdGl2ZVRhYkluZGV4KCk7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gdGhpcy5fc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5uekhpZGVBbGwgPSBpbmRleCA9PT0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRTaG91bGRBY3RpdmVUYWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQudG9BcnJheSgpO1xyXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmlzTGlua0FjdGl2ZSh0aGlzLnJvdXRlcik7XHJcblxyXG4gICAgcmV0dXJuIHRhYnMuZmluZEluZGV4KHRhYiA9PiB7XHJcbiAgICAgIGNvbnN0IGMgPSB0YWIubGlua0RpcmVjdGl2ZTtcclxuICAgICAgcmV0dXJuIGMgPyBpc0FjdGl2ZShjLnJvdXRlckxpbmspIHx8IGlzQWN0aXZlKGMucm91dGVyTGlua1dpdGhIcmVmKSA6IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTGlua0FjdGl2ZShyb3V0ZXI6IFJvdXRlcik6IChsaW5rPzogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKGxpbms/OiBSb3V0ZXJMaW5rIHwgUm91dGVyTGlua1dpdGhIcmVmKSA9PiAobGluayA/IHJvdXRlci5pc0FjdGl2ZShsaW5rLnVybFRyZWUsIHRoaXMubnpMaW5rRXhhY3QpIDogZmFsc2UpO1xyXG4gIH1cclxufVxyXG4iXX0=