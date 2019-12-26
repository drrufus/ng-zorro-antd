/**
 * @fileoverview added by tsickle
 * Generated from: nz-tabs-nav.component.ts
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
/** code from https://github.com/angular/material2 */
import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { pxToNumber, InputBoolean, NzDomEventService } from 'ng-zorro-antd/core';
import { merge, of as observableOf, Subject } from 'rxjs';
import { finalize, startWith, takeUntil } from 'rxjs/operators';
import { NzTabLabelDirective } from './nz-tab-label.directive';
import { NzTabsInkBarDirective } from './nz-tabs-ink-bar.directive';
/** @type {?} */
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
        get: /**
         * @return {?}
         */
        function () {
            return this._tabPositionMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._tabPositionMode = value;
            this.alignInkBarToSelectedTab();
            if (this.nzShowPagination) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this.updatePagination();
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabsNavComponent.prototype, "selectedIndex", {
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
            this.selectedIndexChanged = this._selectedIndex !== value;
            this._selectedIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.onContentChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var textContent = this.elementRef.nativeElement.textContent;
        // We need to diff the text content of the header, because the MutationObserver callback
        // will fire even if the text content didn't change which is inefficient and is prone
        // to infinite loops if a poorly constructed expression is passed in (see #14249).
        if (textContent !== this.currentTextContent) {
            this.currentTextContent = textContent;
            this.ngZone.run((/**
             * @return {?}
             */
            function () {
                if (_this.nzShowPagination) {
                    _this.updatePagination();
                }
                _this.alignInkBarToSelectedTab();
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @param {?} scrollDir
     * @return {?}
     */
    NzTabsNavComponent.prototype.scrollHeader = /**
     * @param {?} scrollDir
     * @return {?}
     */
    function (scrollDir) {
        if (scrollDir === 'before' && !this.disableScrollBefore) {
            this.nzOnPrevClick.emit();
        }
        else if (scrollDir === 'after' && !this.disableScrollAfter) {
            this.nzOnNextClick.emit();
        }
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix) / 3;
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
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
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.realignInkBar = this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var dirChange = _this.dir ? _this.dir.change : observableOf(null);
            /** @type {?} */
            var resize = typeof window !== 'undefined'
                ? _this.nzDomEventService.registerResizeListener().pipe(takeUntil(_this.destroy$), finalize((/**
                 * @return {?}
                 */
                function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                : observableOf(null);
            return merge(dirChange, resize)
                .pipe(startWith(null))
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (_this.nzShowPagination) {
                    _this.updatePagination();
                }
                _this.alignInkBarToSelectedTab();
            }));
        }));
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.realignInkBar) {
            this.realignInkBar.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.updateTabScrollPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDistance = this.scrollDistance;
        if (this.nzPositionMode === 'horizontal') {
            /** @type {?} */
            var translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(" + translateX + "px, 0, 0)");
        }
        else {
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(0," + -scrollDistance + "px, 0)");
        }
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.updatePagination = /**
     * @return {?}
     */
    function () {
        this.checkPaginationEnabled();
        this.checkScrollingControls();
        this.updateTabScrollPosition();
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.checkPaginationEnabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isEnabled = this.tabListScrollWidthHeightPix > this.tabListScrollOffSetWidthHeight;
        if (!isEnabled) {
            this.scrollDistance = 0;
        }
        if (isEnabled !== this.showPaginationControls) {
            this.cdr.markForCheck();
        }
        this.showPaginationControls = isEnabled;
    };
    /**
     * @param {?} labelIndex
     * @return {?}
     */
    NzTabsNavComponent.prototype.scrollToLabel = /**
     * @param {?} labelIndex
     * @return {?}
     */
    function (labelIndex) {
        /** @type {?} */
        var selectedLabel = this.listOfNzTabLabelDirective ? this.listOfNzTabLabelDirective.toArray()[labelIndex] : null;
        if (selectedLabel) {
            // The view length is the visible width of the tab labels.
            /** @type {?} */
            var labelBeforePos = void 0;
            /** @type {?} */
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
            /** @type {?} */
            var beforeVisiblePos = this.scrollDistance;
            /** @type {?} */
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
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.checkScrollingControls = /**
     * @return {?}
     */
    function () {
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
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     * @return {?}
     */
    NzTabsNavComponent.prototype.getMaxScrollDistance = /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     * @return {?}
     */
    function () {
        return this.tabListScrollWidthHeightPix - this.viewWidthHeightPix || 0;
    };
    Object.defineProperty(NzTabsNavComponent.prototype, "scrollDistance", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollDistance;
        },
        /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
        set: /**
         * Sets the distance in pixels that the tab header should be transformed in the X-axis.
         * @param {?} v
         * @return {?}
         */
        function (v) {
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
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
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
        get: /**
         * @return {?}
         */
        function () {
            if (this.platform.isBrowser) {
                /** @type {?} */
                var navContainer = this.navContainerElement.nativeElement;
                // tslint:disable: no-any
                /** @type {?} */
                var originStyle = window.getComputedStyle
                    ? window.getComputedStyle(navContainer)
                    : ((/** @type {?} */ (navContainer))).currentStyle;
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
        get: /**
         * @return {?}
         */
        function () {
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
        get: /**
         * @return {?}
         */
        function () {
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
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.getLayoutDirection = /**
     * @return {?}
     */
    function () {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.alignInkBarToSelectedTab = /**
     * @return {?}
     */
    function () {
        if (this.nzType === 'line') {
            /** @type {?} */
            var selectedLabelWrapper = this.listOfNzTabLabelDirective && this.listOfNzTabLabelDirective.length
                ? this.listOfNzTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
            if (this.nzTabsInkBarDirective) {
                this.nzTabsInkBarDirective.alignToElement(selectedLabelWrapper);
            }
        }
    };
    NzTabsNavComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-tabs-nav]',
                    exportAs: 'nzTabsNav',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div style=\"float:right;\" *ngIf=\"nzTabBarExtraContent\" class=\"ant-tabs-extra-content\">\r\n  <ng-template [ngTemplateOutlet]=\"nzTabBarExtraContent\"></ng-template>\r\n</div>\r\n<div class=\"ant-tabs-nav-container\"\r\n  [class.ant-tabs-nav-container-scrolling]=\"showPaginationControls\"\r\n  #navContainerElement>\r\n  <span class=\"ant-tabs-tab-prev\"\r\n    (click)=\"scrollHeader('before')\"\r\n    [class.ant-tabs-tab-btn-disabled]=\"disableScrollBefore\"\r\n    [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\">\r\n    <span class=\"ant-tabs-tab-prev-icon\">\r\n      <i nz-icon [nzType]=\"nzPositionMode === 'horizontal' ? 'left' : 'up'\" class=\"ant-tabs-tab-prev-icon-target\"></i>\r\n    </span>\r\n  </span>\r\n  <span class=\"ant-tabs-tab-next\"\r\n    (click)=\"scrollHeader('after')\"\r\n    [class.ant-tabs-tab-btn-disabled]=\"disableScrollAfter\"\r\n    [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\">\r\n    <span class=\"ant-tabs-tab-next-icon\">\r\n      <i nz-icon [nzType]=\"nzPositionMode === 'horizontal' ? 'right' : 'down'\" class=\"ant-tabs-tab-next-icon-target\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-tabs-nav-wrap\">\r\n    <div class=\"ant-tabs-nav-scroll\" #scrollListElement>\r\n      <div class=\"ant-tabs-nav\"\r\n        [class.ant-tabs-nav-animated]=\"nzAnimated\"\r\n        #navListElement\r\n        (cdkObserveContent)=\"onContentChanges()\">\r\n        <div>\r\n          <ng-content></ng-content>\r\n        </div>\r\n        <div nz-tabs-ink-bar [hidden]=\"nzHideBar\" [nzAnimated]=\"nzAnimated\" [nzPositionMode]=\"nzPositionMode\" style=\"display: block;\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzTabsNavComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: Platform },
        { type: NzDomEventService },
        { type: Directionality, decorators: [{ type: Optional }] }
    ]; };
    NzTabsNavComponent.propDecorators = {
        listOfNzTabLabelDirective: [{ type: ContentChildren, args: [NzTabLabelDirective,] }],
        nzTabsInkBarDirective: [{ type: ViewChild, args: [NzTabsInkBarDirective, { static: true },] }],
        navContainerElement: [{ type: ViewChild, args: ['navContainerElement', { static: true },] }],
        navListElement: [{ type: ViewChild, args: ['navListElement', { static: true },] }],
        scrollListElement: [{ type: ViewChild, args: ['scrollListElement', { static: true },] }],
        nzOnNextClick: [{ type: Output }],
        nzOnPrevClick: [{ type: Output }],
        nzTabBarExtraContent: [{ type: Input }],
        nzAnimated: [{ type: Input }],
        nzHideBar: [{ type: Input }],
        nzShowPagination: [{ type: Input }],
        nzType: [{ type: Input }],
        nzPositionMode: [{ type: Input }],
        selectedIndex: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabsNavComponent.prototype, "nzAnimated", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabsNavComponent.prototype, "nzHideBar", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabsNavComponent.prototype, "nzShowPagination", void 0);
    return NzTabsNavComponent;
}());
export { NzTabsNavComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype._tabPositionMode;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype._scrollDistance;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype._selectedIndex;
    /**
     * Cached text content of the header.
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.currentTextContent;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.destroy$;
    /** @type {?} */
    NzTabsNavComponent.prototype.showPaginationControls;
    /** @type {?} */
    NzTabsNavComponent.prototype.disableScrollAfter;
    /** @type {?} */
    NzTabsNavComponent.prototype.disableScrollBefore;
    /** @type {?} */
    NzTabsNavComponent.prototype.selectedIndexChanged;
    /** @type {?} */
    NzTabsNavComponent.prototype.realignInkBar;
    /** @type {?} */
    NzTabsNavComponent.prototype.tabLabelCount;
    /** @type {?} */
    NzTabsNavComponent.prototype.scrollDistanceChanged;
    /** @type {?} */
    NzTabsNavComponent.prototype.listOfNzTabLabelDirective;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzTabsInkBarDirective;
    /** @type {?} */
    NzTabsNavComponent.prototype.navContainerElement;
    /** @type {?} */
    NzTabsNavComponent.prototype.navListElement;
    /** @type {?} */
    NzTabsNavComponent.prototype.scrollListElement;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzOnNextClick;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzOnPrevClick;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzTabBarExtraContent;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzAnimated;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzHideBar;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzType;
    /** @type {?} */
    NzTabsNavComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.nzDomEventService;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.dir;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJzLyIsInNvdXJjZXMiOlsibnotdGFicy1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN4RSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7SUFHOUQsc0JBQXNCLEdBQUcsRUFBRTtBQUdqQztJQTRERSw0QkFDUyxVQUFzQixFQUNyQixNQUFjLEVBQ2QsUUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsUUFBa0IsRUFDbEIsaUJBQW9DLEVBQ3hCLEdBQW1CO1FBTmhDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtR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QzdCLG9DQUFzQjs7Ozs7SUFDdEIsc0NBQTJCOzs7OztJQUMzQixpQ0FBOEI7Ozs7O0lBQzlCLHNDQUEwQjs7Ozs7SUFDMUIsK0NBQTRDOzs7OztJQUM1QyxpQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKiBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyICovXHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBweFRvTnVtYmVyLCBJbnB1dEJvb2xlYW4sIE56RG9tRXZlbnRTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56VGFiTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL256LXRhYi1sYWJlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelRhYnNJbmtCYXJEaXJlY3RpdmUgfSBmcm9tICcuL256LXRhYnMtaW5rLWJhci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelRhYlBvc2l0aW9uTW9kZSB9IGZyb20gJy4vbnotdGFic2V0LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBFWEFHR0VSQVRFRF9PVkVSU0NST0xMID0gNjQ7XHJcbmV4cG9ydCB0eXBlIFNjcm9sbERpcmVjdGlvbiA9ICdhZnRlcicgfCAnYmVmb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LXRhYnMtbmF2XScsXHJcbiAgZXhwb3J0QXM6ICduelRhYnNOYXYnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRhYnMtbmF2LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUYWJzTmF2Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF90YWJQb3NpdGlvbk1vZGU6IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xyXG4gIHByaXZhdGUgX3Njcm9sbERpc3RhbmNlID0gMDtcclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4ID0gMDtcclxuICAvKiogQ2FjaGVkIHRleHQgY29udGVudCBvZiB0aGUgaGVhZGVyLiAqL1xyXG4gIHByaXZhdGUgY3VycmVudFRleHRDb250ZW50OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgc2hvd1BhZ2luYXRpb25Db250cm9scyA9IGZhbHNlO1xyXG4gIGRpc2FibGVTY3JvbGxBZnRlciA9IHRydWU7XHJcbiAgZGlzYWJsZVNjcm9sbEJlZm9yZSA9IHRydWU7XHJcbiAgc2VsZWN0ZWRJbmRleENoYW5nZWQgPSBmYWxzZTtcclxuICByZWFsaWduSW5rQmFyOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcclxuICB0YWJMYWJlbENvdW50OiBudW1iZXI7XHJcbiAgc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkOiBib29sZWFuO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUYWJMYWJlbERpcmVjdGl2ZSkgbGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZTogUXVlcnlMaXN0PE56VGFiTGFiZWxEaXJlY3RpdmU+O1xyXG4gIEBWaWV3Q2hpbGQoTnpUYWJzSW5rQmFyRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBuelRhYnNJbmtCYXJEaXJlY3RpdmU6IE56VGFic0lua0JhckRpcmVjdGl2ZTtcclxuICBAVmlld0NoaWxkKCduYXZDb250YWluZXJFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgbmF2Q29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgnbmF2TGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuYXZMaXN0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgnc2Nyb2xsTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzY3JvbGxMaXN0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQElucHV0KCkgbnpUYWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFuaW1hdGVkID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlQmFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56VHlwZSA9ICdsaW5lJztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpQb3NpdGlvbk1vZGUodmFsdWU6IE56VGFiUG9zaXRpb25Nb2RlKSB7XHJcbiAgICB0aGlzLl90YWJQb3NpdGlvbk1vZGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XHJcbiAgICBpZiAodGhpcy5uelNob3dQYWdpbmF0aW9uKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelBvc2l0aW9uTW9kZSgpOiBOelRhYlBvc2l0aW9uTW9kZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGFiUG9zaXRpb25Nb2RlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkID0gdGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gdmFsdWU7XHJcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcjogRGlyZWN0aW9uYWxpdHlcclxuICApIHt9XHJcblxyXG4gIG9uQ29udGVudENoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgLy8gV2UgbmVlZCB0byBkaWZmIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGhlYWRlciwgYmVjYXVzZSB0aGUgTXV0YXRpb25PYnNlcnZlciBjYWxsYmFja1xyXG4gICAgLy8gd2lsbCBmaXJlIGV2ZW4gaWYgdGhlIHRleHQgY29udGVudCBkaWRuJ3QgY2hhbmdlIHdoaWNoIGlzIGluZWZmaWNpZW50IGFuZCBpcyBwcm9uZVxyXG4gICAgLy8gdG8gaW5maW5pdGUgbG9vcHMgaWYgYSBwb29ybHkgY29uc3RydWN0ZWQgZXhwcmVzc2lvbiBpcyBwYXNzZWQgaW4gKHNlZSAjMTQyNDkpLlxyXG4gICAgaWYgKHRleHRDb250ZW50ICE9PSB0aGlzLmN1cnJlbnRUZXh0Q29udGVudCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRUZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjcm9sbEhlYWRlcihzY3JvbGxEaXI6IFNjcm9sbERpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKHNjcm9sbERpciA9PT0gJ2JlZm9yZScgJiYgIXRoaXMuZGlzYWJsZVNjcm9sbEJlZm9yZSkge1xyXG4gICAgICB0aGlzLm56T25QcmV2Q2xpY2suZW1pdCgpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JvbGxEaXIgPT09ICdhZnRlcicgJiYgIXRoaXMuZGlzYWJsZVNjcm9sbEFmdGVyKSB7XHJcbiAgICAgIHRoaXMubnpPbk5leHRDbGljay5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIHRoZSBzY3JvbGwgZGlzdGFuY2Ugb25lLXRoaXJkIHRoZSBsZW5ndGggb2YgdGhlIHRhYiBsaXN0J3Mgdmlld3BvcnQuXHJcbiAgICB0aGlzLnNjcm9sbERpc3RhbmNlICs9ICgoc2Nyb2xsRGlyID09PSAnYmVmb3JlJyA/IC0xIDogMSkgKiB0aGlzLnZpZXdXaWR0aEhlaWdodFBpeCkgLyAzO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGFiTGFiZWxDb3VudCAhPT0gdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlLmxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5uelNob3dQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YWJMYWJlbENvdW50ID0gdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlLmxlbmd0aDtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlZCkge1xyXG4gICAgICB0aGlzLnNjcm9sbFRvTGFiZWwodGhpcy5fc2VsZWN0ZWRJbmRleCk7XHJcbiAgICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcclxuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkKSB7XHJcbiAgICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRhYlNjcm9sbFBvc2l0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlYWxpZ25JbmtCYXIgPSB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRpckNoYW5nZSA9IHRoaXMuZGlyID8gdGhpcy5kaXIuY2hhbmdlIDogb2JzZXJ2YWJsZU9mKG51bGwpO1xyXG4gICAgICBjb25zdCByZXNpemUgPVxyXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICA/IHRoaXMubnpEb21FdmVudFNlcnZpY2UucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpLnBpcGUoXHJcbiAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIDogb2JzZXJ2YWJsZU9mKG51bGwpO1xyXG4gICAgICByZXR1cm4gbWVyZ2UoZGlyQ2hhbmdlLCByZXNpemUpXHJcbiAgICAgICAgLnBpcGUoc3RhcnRXaXRoKG51bGwpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMubnpTaG93UGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMucmVhbGlnbklua0Jhcikge1xyXG4gICAgICB0aGlzLnJlYWxpZ25JbmtCYXIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVRhYlNjcm9sbFBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2Nyb2xsRGlzdGFuY2UgPSB0aGlzLnNjcm9sbERpc3RhbmNlO1xyXG4gICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICBjb25zdCB0cmFuc2xhdGVYID0gdGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicgPyAtc2Nyb2xsRGlzdGFuY2UgOiBzY3JvbGxEaXN0YW5jZTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHt0cmFuc2xhdGVYfXB4LCAwLCAwKWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMCwkey1zY3JvbGxEaXN0YW5jZX1weCwgMClgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhZ2luYXRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrUGFnaW5hdGlvbkVuYWJsZWQoKTtcclxuICAgIHRoaXMuY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xyXG4gICAgdGhpcy51cGRhdGVUYWJTY3JvbGxQb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQYWdpbmF0aW9uRW5hYmxlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzRW5hYmxlZCA9IHRoaXMudGFiTGlzdFNjcm9sbFdpZHRoSGVpZ2h0UGl4ID4gdGhpcy50YWJMaXN0U2Nyb2xsT2ZmU2V0V2lkdGhIZWlnaHQ7XHJcbiAgICBpZiAoIWlzRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLnNjcm9sbERpc3RhbmNlID0gMDtcclxuICAgIH1cclxuICAgIGlmIChpc0VuYWJsZWQgIT09IHRoaXMuc2hvd1BhZ2luYXRpb25Db250cm9scykge1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2hvd1BhZ2luYXRpb25Db250cm9scyA9IGlzRW5hYmxlZDtcclxuICB9XHJcblxyXG4gIHNjcm9sbFRvTGFiZWwobGFiZWxJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBzZWxlY3RlZExhYmVsID0gdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlID8gdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlLnRvQXJyYXkoKVtsYWJlbEluZGV4XSA6IG51bGw7XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkTGFiZWwpIHtcclxuICAgICAgLy8gVGhlIHZpZXcgbGVuZ3RoIGlzIHRoZSB2aXNpYmxlIHdpZHRoIG9mIHRoZSB0YWIgbGFiZWxzLlxyXG5cclxuICAgICAgbGV0IGxhYmVsQmVmb3JlUG9zOiBudW1iZXI7XHJcbiAgICAgIGxldCBsYWJlbEFmdGVyUG9zOiBudW1iZXI7XHJcbiAgICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicpIHtcclxuICAgICAgICAgIGxhYmVsQmVmb3JlUG9zID0gc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRMZWZ0KCk7XHJcbiAgICAgICAgICBsYWJlbEFmdGVyUG9zID0gbGFiZWxCZWZvcmVQb3MgKyBzZWxlY3RlZExhYmVsLmdldE9mZnNldFdpZHRoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxhYmVsQWZ0ZXJQb3MgPSB0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSBzZWxlY3RlZExhYmVsLmdldE9mZnNldExlZnQoKTtcclxuICAgICAgICAgIGxhYmVsQmVmb3JlUG9zID0gbGFiZWxBZnRlclBvcyAtIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0V2lkdGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGFiZWxCZWZvcmVQb3MgPSBzZWxlY3RlZExhYmVsLmdldE9mZnNldFRvcCgpO1xyXG4gICAgICAgIGxhYmVsQWZ0ZXJQb3MgPSBsYWJlbEJlZm9yZVBvcyArIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0SGVpZ2h0KCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYmVmb3JlVmlzaWJsZVBvcyA9IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XHJcbiAgICAgIGNvbnN0IGFmdGVyVmlzaWJsZVBvcyA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgKyB0aGlzLnZpZXdXaWR0aEhlaWdodFBpeDtcclxuXHJcbiAgICAgIGlmIChsYWJlbEJlZm9yZVBvcyA8IGJlZm9yZVZpc2libGVQb3MpIHtcclxuICAgICAgICAvLyBTY3JvbGwgaGVhZGVyIHRvIG1vdmUgbGFiZWwgdG8gdGhlIGJlZm9yZSBkaXJlY3Rpb25cclxuICAgICAgICB0aGlzLnNjcm9sbERpc3RhbmNlIC09IGJlZm9yZVZpc2libGVQb3MgLSBsYWJlbEJlZm9yZVBvcyArIEVYQUdHRVJBVEVEX09WRVJTQ1JPTEw7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFiZWxBZnRlclBvcyA+IGFmdGVyVmlzaWJsZVBvcykge1xyXG4gICAgICAgIC8vIFNjcm9sbCBoZWFkZXIgdG8gbW92ZSBsYWJlbCB0byB0aGUgYWZ0ZXIgZGlyZWN0aW9uXHJcbiAgICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZSArPSBsYWJlbEFmdGVyUG9zIC0gYWZ0ZXJWaXNpYmxlUG9zICsgRVhBR0dFUkFURURfT1ZFUlNDUk9MTDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tTY3JvbGxpbmdDb250cm9scygpOiB2b2lkIHtcclxuICAgIC8vIENoZWNrIGlmIHRoZSBwYWdpbmF0aW9uIGFycm93cyBzaG91bGQgYmUgYWN0aXZhdGVkLlxyXG4gICAgdGhpcy5kaXNhYmxlU2Nyb2xsQmVmb3JlID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gMDtcclxuICAgIHRoaXMuZGlzYWJsZVNjcm9sbEFmdGVyID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gdGhpcy5nZXRNYXhTY3JvbGxEaXN0YW5jZSgpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIHdoYXQgaXMgdGhlIG1heGltdW0gbGVuZ3RoIGluIHBpeGVscyB0aGF0IGNhbiBiZSBzZXQgZm9yIHRoZSBzY3JvbGwgZGlzdGFuY2UuIFRoaXNcclxuICAgKiBpcyBlcXVhbCB0byB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRoZSB0YWIgbGlzdCBjb250YWluZXIgYW5kIHRhYiBoZWFkZXIgY29udGFpbmVyLlxyXG4gICAqXHJcbiAgICogVGhpcyBpcyBhbiBleHBlbnNpdmUgY2FsbCB0aGF0IGZvcmNlcyBhIGxheW91dCByZWZsb3cgdG8gY29tcHV0ZSBib3ggYW5kIHNjcm9sbCBtZXRyaWNzIGFuZFxyXG4gICAqIHNob3VsZCBiZSBjYWxsZWQgc3BhcmluZ2x5LlxyXG4gICAqL1xyXG4gIGdldE1heFNjcm9sbERpc3RhbmNlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJMaXN0U2Nyb2xsV2lkdGhIZWlnaHRQaXggLSB0aGlzLnZpZXdXaWR0aEhlaWdodFBpeCB8fCAwO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldHMgdGhlIGRpc3RhbmNlIGluIHBpeGVscyB0aGF0IHRoZSB0YWIgaGVhZGVyIHNob3VsZCBiZSB0cmFuc2Zvcm1lZCBpbiB0aGUgWC1heGlzLiAqL1xyXG4gIHNldCBzY3JvbGxEaXN0YW5jZSh2OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3Njcm9sbERpc3RhbmNlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRNYXhTY3JvbGxEaXN0YW5jZSgpLCB2KSk7XHJcblxyXG4gICAgLy8gTWFyayB0aGF0IHRoZSBzY3JvbGwgZGlzdGFuY2UgaGFzIGNoYW5nZWQgc28gdGhhdCBhZnRlciB0aGUgdmlldyBpcyBjaGVja2VkLCB0aGUgQ1NTXHJcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbiBjYW4gbW92ZSB0aGUgaGVhZGVyLlxyXG4gICAgdGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjcm9sbERpc3RhbmNlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRGlzdGFuY2U7XHJcbiAgfVxyXG5cclxuICBnZXQgdmlld1dpZHRoSGVpZ2h0UGl4KCk6IG51bWJlciB7XHJcbiAgICBsZXQgUEFHSU5BVElPTl9QSVggPSAwO1xyXG4gICAgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb25Db250cm9scykge1xyXG4gICAgICBQQUdJTkFUSU9OX1BJWCA9IHRoaXMubmF2Q29udGFpbmVyU2Nyb2xsUGFkZGluZ1BpeDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmF2Q29udGFpbmVyRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gUEFHSU5BVElPTl9QSVg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5uYXZDb250YWluZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gUEFHSU5BVElPTl9QSVg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbmF2Q29udGFpbmVyU2Nyb2xsUGFkZGluZ1BpeCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IHRoaXMubmF2Q29udGFpbmVyRWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tYW55XHJcbiAgICAgIGNvbnN0IG9yaWdpblN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGVcclxuICAgICAgICA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5hdkNvbnRhaW5lcilcclxuICAgICAgICA6IChuYXZDb250YWluZXIgYXMgYW55KS5jdXJyZW50U3R5bGU7IC8vIGN1cnJlbnRTdHlsZSBmb3IgSUUgPCA5XHJcbiAgICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICByZXR1cm4gcHhUb051bWJlcihvcmlnaW5TdHlsZS5wYWRkaW5nTGVmdCkgKyBweFRvTnVtYmVyKG9yaWdpblN0eWxlLnBhZGRpbmdSaWdodCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHB4VG9OdW1iZXIob3JpZ2luU3R5bGUucGFkZGluZ1RvcCkgKyBweFRvTnVtYmVyKG9yaWdpblN0eWxlLnBhZGRpbmdCb3R0b20pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB0YWJMaXN0U2Nyb2xsV2lkdGhIZWlnaHRQaXgoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRhYkxpc3RTY3JvbGxPZmZTZXRXaWR0aEhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldExheW91dERpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlyICYmIHRoaXMuZGlyLnZhbHVlID09PSAncnRsJyA/ICdydGwnIDogJ2x0cic7XHJcbiAgfVxyXG5cclxuICBhbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelR5cGUgPT09ICdsaW5lJykge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZExhYmVsV3JhcHBlciA9XHJcbiAgICAgICAgdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlICYmIHRoaXMubGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZS5sZW5ndGhcclxuICAgICAgICAgID8gdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlLnRvQXJyYXkoKVt0aGlzLnNlbGVjdGVkSW5kZXhdLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxyXG4gICAgICAgICAgOiBudWxsO1xyXG4gICAgICBpZiAodGhpcy5uelRhYnNJbmtCYXJEaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLm56VGFic0lua0JhckRpcmVjdGl2ZS5hbGlnblRvRWxlbWVudChzZWxlY3RlZExhYmVsV3JhcHBlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19