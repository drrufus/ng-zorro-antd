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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJzLyIsInNvdXJjZXMiOlsibnotdGFicy1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztJQUc5RCxzQkFBc0IsR0FBRyxFQUFFO0FBR2pDO0lBNERFLDRCQUNTLFVBQXNCLEVBQ3JCLE1BQWMsRUFDZCxRQUFtQixFQUNuQixHQUFzQixFQUN0QixRQUFrQixFQUNsQixpQkFBb0MsRUFDeEIsR0FBbUI7UUFOaEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FB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N0Isb0NBQXNCOzs7OztJQUN0QixzQ0FBMkI7Ozs7O0lBQzNCLGlDQUE4Qjs7Ozs7SUFDOUIsc0NBQTBCOzs7OztJQUMxQiwrQ0FBNEM7Ozs7O0lBQzVDLGlDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLyoqIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIgKi9cclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHB4VG9OdW1iZXIsIElucHV0Qm9vbGVhbiwgTnpEb21FdmVudFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpUYWJMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGFiLWxhYmVsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56VGFic0lua0JhckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGFicy1pbmstYmFyLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56VGFiUG9zaXRpb25Nb2RlIH0gZnJvbSAnLi9uei10YWJzZXQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IEVYQUdHRVJBVEVEX09WRVJTQ1JPTEwgPSA2NDtcclxuZXhwb3J0IHR5cGUgU2Nyb2xsRGlyZWN0aW9uID0gJ2FmdGVyJyB8ICdiZWZvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbnotdGFicy1uYXZdJyxcclxuICBleHBvcnRBczogJ256VGFic05hdicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGFicy1uYXYuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhYnNOYXZDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3RhYlBvc2l0aW9uTW9kZTogTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XHJcbiAgcHJpdmF0ZSBfc2Nyb2xsRGlzdGFuY2UgPSAwO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXggPSAwO1xyXG4gIC8qKiBDYWNoZWQgdGV4dCBjb250ZW50IG9mIHRoZSBoZWFkZXIuICovXHJcbiAgcHJpdmF0ZSBjdXJyZW50VGV4dENvbnRlbnQ6IHN0cmluZztcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBzaG93UGFnaW5hdGlvbkNvbnRyb2xzID0gZmFsc2U7XHJcbiAgZGlzYWJsZVNjcm9sbEFmdGVyID0gdHJ1ZTtcclxuICBkaXNhYmxlU2Nyb2xsQmVmb3JlID0gdHJ1ZTtcclxuICBzZWxlY3RlZEluZGV4Q2hhbmdlZCA9IGZhbHNlO1xyXG4gIHJlYWxpZ25JbmtCYXI6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xyXG4gIHRhYkxhYmVsQ291bnQ6IG51bWJlcjtcclxuICBzY3JvbGxEaXN0YW5jZUNoYW5nZWQ6IGJvb2xlYW47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOelRhYkxhYmVsRGlyZWN0aXZlKSBsaXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlOiBRdWVyeUxpc3Q8TnpUYWJMYWJlbERpcmVjdGl2ZT47XHJcbiAgQFZpZXdDaGlsZChOelRhYnNJbmtCYXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIG56VGFic0lua0JhckRpcmVjdGl2ZTogTnpUYWJzSW5rQmFyRGlyZWN0aXZlO1xyXG4gIEBWaWV3Q2hpbGQoJ25hdkNvbnRhaW5lckVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuYXZDb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCduYXZMaXN0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIG5hdkxpc3RFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCdzY3JvbGxMaXN0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHNjcm9sbExpc3RFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblByZXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBASW5wdXQoKSBuelRhYkJhckV4dHJhQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QW5pbWF0ZWQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekhpZGVCYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpUeXBlID0gJ2xpbmUnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelBvc2l0aW9uTW9kZSh2YWx1ZTogTnpUYWJQb3NpdGlvbk1vZGUpIHtcclxuICAgIHRoaXMuX3RhYlBvc2l0aW9uTW9kZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcclxuICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56UG9zaXRpb25Nb2RlKCk6IE56VGFiUG9zaXRpb25Nb2RlIHtcclxuICAgIHJldHVybiB0aGlzLl90YWJQb3NpdGlvbk1vZGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQgPSB0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSB2YWx1ZTtcclxuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyOiBEaXJlY3Rpb25hbGl0eVxyXG4gICkge31cclxuXHJcbiAgb25Db250ZW50Q2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRleHRDb250ZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICAvLyBXZSBuZWVkIHRvIGRpZmYgdGhlIHRleHQgY29udGVudCBvZiB0aGUgaGVhZGVyLCBiZWNhdXNlIHRoZSBNdXRhdGlvbk9ic2VydmVyIGNhbGxiYWNrXHJcbiAgICAvLyB3aWxsIGZpcmUgZXZlbiBpZiB0aGUgdGV4dCBjb250ZW50IGRpZG4ndCBjaGFuZ2Ugd2hpY2ggaXMgaW5lZmZpY2llbnQgYW5kIGlzIHByb25lXHJcbiAgICAvLyB0byBpbmZpbml0ZSBsb29wcyBpZiBhIHBvb3JseSBjb25zdHJ1Y3RlZCBleHByZXNzaW9uIGlzIHBhc3NlZCBpbiAoc2VlICMxNDI0OSkuXHJcbiAgICBpZiAodGV4dENvbnRlbnQgIT09IHRoaXMuY3VycmVudFRleHRDb250ZW50KSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubnpTaG93UGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsSGVhZGVyKHNjcm9sbERpcjogU2Nyb2xsRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAoc2Nyb2xsRGlyID09PSAnYmVmb3JlJyAmJiAhdGhpcy5kaXNhYmxlU2Nyb2xsQmVmb3JlKSB7XHJcbiAgICAgIHRoaXMubnpPblByZXZDbGljay5lbWl0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHNjcm9sbERpciA9PT0gJ2FmdGVyJyAmJiAhdGhpcy5kaXNhYmxlU2Nyb2xsQWZ0ZXIpIHtcclxuICAgICAgdGhpcy5uek9uTmV4dENsaWNrLmVtaXQoKTtcclxuICAgIH1cclxuICAgIC8vIE1vdmUgdGhlIHNjcm9sbCBkaXN0YW5jZSBvbmUtdGhpcmQgdGhlIGxlbmd0aCBvZiB0aGUgdGFiIGxpc3QncyB2aWV3cG9ydC5cclxuICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgKz0gKChzY3JvbGxEaXIgPT09ICdiZWZvcmUnID8gLTEgOiAxKSAqIHRoaXMudmlld1dpZHRoSGVpZ2h0UGl4KSAvIDM7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50YWJMYWJlbENvdW50ICE9PSB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUubGVuZ3RoKSB7XHJcbiAgICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhYkxhYmVsQ291bnQgPSB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUubGVuZ3RoO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9MYWJlbCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcclxuICAgICAgaWYgKHRoaXMubnpTaG93UGFnaW5hdGlvbikge1xyXG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQpIHtcclxuICAgICAgaWYgKHRoaXMubnpTaG93UGFnaW5hdGlvbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGFiU2Nyb2xsUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNjcm9sbERpc3RhbmNlQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVhbGlnbklua0JhciA9IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgY29uc3QgZGlyQ2hhbmdlID0gdGhpcy5kaXIgPyB0aGlzLmRpci5jaGFuZ2UgOiBvYnNlcnZhYmxlT2YobnVsbCk7XHJcbiAgICAgIGNvbnN0IHJlc2l6ZSA9XHJcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgID8gdGhpcy5uekRvbUV2ZW50U2VydmljZS5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkucGlwZShcclxuICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5uekRvbUV2ZW50U2VydmljZS51bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgOiBvYnNlcnZhYmxlT2YobnVsbCk7XHJcbiAgICAgIHJldHVybiBtZXJnZShkaXJDaGFuZ2UsIHJlc2l6ZSlcclxuICAgICAgICAucGlwZShzdGFydFdpdGgobnVsbCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5uelNob3dQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5yZWFsaWduSW5rQmFyKSB7XHJcbiAgICAgIHRoaXMucmVhbGlnbklua0Jhci51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGFiU2Nyb2xsUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBzY3JvbGxEaXN0YW5jZSA9IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XHJcbiAgICBpZiAodGhpcy5uelBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVggPSB0aGlzLmdldExheW91dERpcmVjdGlvbigpID09PSAnbHRyJyA/IC1zY3JvbGxEaXN0YW5jZSA6IHNjcm9sbERpc3RhbmNlO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3RyYW5zbGF0ZVh9cHgsIDAsIDApYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgwLCR7LXNjcm9sbERpc3RhbmNlfXB4LCAwKWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGFnaW5hdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tQYWdpbmF0aW9uRW5hYmxlZCgpO1xyXG4gICAgdGhpcy5jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVRhYlNjcm9sbFBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja1BhZ2luYXRpb25FbmFibGVkKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNFbmFibGVkID0gdGhpcy50YWJMaXN0U2Nyb2xsV2lkdGhIZWlnaHRQaXggPiB0aGlzLnRhYkxpc3RTY3JvbGxPZmZTZXRXaWR0aEhlaWdodDtcclxuICAgIGlmICghaXNFbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRW5hYmxlZCAhPT0gdGhpcy5zaG93UGFnaW5hdGlvbkNvbnRyb2xzKSB7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93UGFnaW5hdGlvbkNvbnRyb2xzID0gaXNFbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9MYWJlbChsYWJlbEluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkTGFiZWwgPSB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUgPyB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUudG9BcnJheSgpW2xhYmVsSW5kZXhdIDogbnVsbDtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRMYWJlbCkge1xyXG4gICAgICAvLyBUaGUgdmlldyBsZW5ndGggaXMgdGhlIHZpc2libGUgd2lkdGggb2YgdGhlIHRhYiBsYWJlbHMuXHJcblxyXG4gICAgICBsZXQgbGFiZWxCZWZvcmVQb3M6IG51bWJlcjtcclxuICAgICAgbGV0IGxhYmVsQWZ0ZXJQb3M6IG51bWJlcjtcclxuICAgICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgIGlmICh0aGlzLmdldExheW91dERpcmVjdGlvbigpID09PSAnbHRyJykge1xyXG4gICAgICAgICAgbGFiZWxCZWZvcmVQb3MgPSBzZWxlY3RlZExhYmVsLmdldE9mZnNldExlZnQoKTtcclxuICAgICAgICAgIGxhYmVsQWZ0ZXJQb3MgPSBsYWJlbEJlZm9yZVBvcyArIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0V2lkdGgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGFiZWxBZnRlclBvcyA9IHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0TGVmdCgpO1xyXG4gICAgICAgICAgbGFiZWxCZWZvcmVQb3MgPSBsYWJlbEFmdGVyUG9zIC0gc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRXaWR0aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsYWJlbEJlZm9yZVBvcyA9IHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0VG9wKCk7XHJcbiAgICAgICAgbGFiZWxBZnRlclBvcyA9IGxhYmVsQmVmb3JlUG9zICsgc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRIZWlnaHQoKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBiZWZvcmVWaXNpYmxlUG9zID0gdGhpcy5zY3JvbGxEaXN0YW5jZTtcclxuICAgICAgY29uc3QgYWZ0ZXJWaXNpYmxlUG9zID0gdGhpcy5zY3JvbGxEaXN0YW5jZSArIHRoaXMudmlld1dpZHRoSGVpZ2h0UGl4O1xyXG5cclxuICAgICAgaWYgKGxhYmVsQmVmb3JlUG9zIDwgYmVmb3JlVmlzaWJsZVBvcykge1xyXG4gICAgICAgIC8vIFNjcm9sbCBoZWFkZXIgdG8gbW92ZSBsYWJlbCB0byB0aGUgYmVmb3JlIGRpcmVjdGlvblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgLT0gYmVmb3JlVmlzaWJsZVBvcyAtIGxhYmVsQmVmb3JlUG9zICsgRVhBR0dFUkFURURfT1ZFUlNDUk9MTDtcclxuICAgICAgfSBlbHNlIGlmIChsYWJlbEFmdGVyUG9zID4gYWZ0ZXJWaXNpYmxlUG9zKSB7XHJcbiAgICAgICAgLy8gU2Nyb2xsIGhlYWRlciB0byBtb3ZlIGxhYmVsIHRvIHRoZSBhZnRlciBkaXJlY3Rpb25cclxuICAgICAgICB0aGlzLnNjcm9sbERpc3RhbmNlICs9IGxhYmVsQWZ0ZXJQb3MgLSBhZnRlclZpc2libGVQb3MgKyBFWEFHR0VSQVRFRF9PVkVSU0NST0xMO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk6IHZvaWQge1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBhZ2luYXRpb24gYXJyb3dzIHNob3VsZCBiZSBhY3RpdmF0ZWQuXHJcbiAgICB0aGlzLmRpc2FibGVTY3JvbGxCZWZvcmUgPSB0aGlzLnNjcm9sbERpc3RhbmNlID09PSAwO1xyXG4gICAgdGhpcy5kaXNhYmxlU2Nyb2xsQWZ0ZXIgPSB0aGlzLnNjcm9sbERpc3RhbmNlID09PSB0aGlzLmdldE1heFNjcm9sbERpc3RhbmNlKCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hhdCBpcyB0aGUgbWF4aW11bSBsZW5ndGggaW4gcGl4ZWxzIHRoYXQgY2FuIGJlIHNldCBmb3IgdGhlIHNjcm9sbCBkaXN0YW5jZS4gVGhpc1xyXG4gICAqIGlzIGVxdWFsIHRvIHRoZSBkaWZmZXJlbmNlIGluIHdpZHRoIGJldHdlZW4gdGhlIHRhYiBsaXN0IGNvbnRhaW5lciBhbmQgdGFiIGhlYWRlciBjb250YWluZXIuXHJcbiAgICpcclxuICAgKiBUaGlzIGlzIGFuIGV4cGVuc2l2ZSBjYWxsIHRoYXQgZm9yY2VzIGEgbGF5b3V0IHJlZmxvdyB0byBjb21wdXRlIGJveCBhbmQgc2Nyb2xsIG1ldHJpY3MgYW5kXHJcbiAgICogc2hvdWxkIGJlIGNhbGxlZCBzcGFyaW5nbHkuXHJcbiAgICovXHJcbiAgZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnRhYkxpc3RTY3JvbGxXaWR0aEhlaWdodFBpeCAtIHRoaXMudmlld1dpZHRoSGVpZ2h0UGl4IHx8IDA7XHJcbiAgfVxyXG5cclxuICAvKiogU2V0cyB0aGUgZGlzdGFuY2UgaW4gcGl4ZWxzIHRoYXQgdGhlIHRhYiBoZWFkZXIgc2hvdWxkIGJlIHRyYW5zZm9ybWVkIGluIHRoZSBYLWF4aXMuICovXHJcbiAgc2V0IHNjcm9sbERpc3RhbmNlKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc2Nyb2xsRGlzdGFuY2UgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLmdldE1heFNjcm9sbERpc3RhbmNlKCksIHYpKTtcclxuXHJcbiAgICAvLyBNYXJrIHRoYXQgdGhlIHNjcm9sbCBkaXN0YW5jZSBoYXMgY2hhbmdlZCBzbyB0aGF0IGFmdGVyIHRoZSB2aWV3IGlzIGNoZWNrZWQsIHRoZSBDU1NcclxuICAgIC8vIHRyYW5zZm9ybWF0aW9uIGNhbiBtb3ZlIHRoZSBoZWFkZXIuXHJcbiAgICB0aGlzLnNjcm9sbERpc3RhbmNlQ2hhbmdlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2Nyb2xsRGlzdGFuY2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zY3JvbGxEaXN0YW5jZTtcclxuICB9XHJcblxyXG4gIGdldCB2aWV3V2lkdGhIZWlnaHRQaXgoKTogbnVtYmVyIHtcclxuICAgIGxldCBQQUdJTkFUSU9OX1BJWCA9IDA7XHJcbiAgICBpZiAodGhpcy5zaG93UGFnaW5hdGlvbkNvbnRyb2xzKSB7XHJcbiAgICAgIFBBR0lOQVRJT05fUElYID0gdGhpcy5uYXZDb250YWluZXJTY3JvbGxQYWRkaW5nUGl4O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5uYXZDb250YWluZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSBQQUdJTkFUSU9OX1BJWDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5hdkNvbnRhaW5lckVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgLSBQQUdJTkFUSU9OX1BJWDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuYXZDb250YWluZXJTY3JvbGxQYWRkaW5nUGl4KCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgY29uc3QgbmF2Q29udGFpbmVyID0gdGhpcy5uYXZDb250YWluZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlOiBuby1hbnlcclxuICAgICAgY29uc3Qgb3JpZ2luU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZVxyXG4gICAgICAgID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUobmF2Q29udGFpbmVyKVxyXG4gICAgICAgIDogKG5hdkNvbnRhaW5lciBhcyBhbnkpLmN1cnJlbnRTdHlsZTsgLy8gY3VycmVudFN0eWxlIGZvciBJRSA8IDlcclxuICAgICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgIHJldHVybiBweFRvTnVtYmVyKG9yaWdpblN0eWxlLnBhZGRpbmdMZWZ0KSArIHB4VG9OdW1iZXIob3JpZ2luU3R5bGUucGFkZGluZ1JpZ2h0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcHhUb051bWJlcihvcmlnaW5TdHlsZS5wYWRkaW5nVG9wKSArIHB4VG9OdW1iZXIob3JpZ2luU3R5bGUucGFkZGluZ0JvdHRvbSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRhYkxpc3RTY3JvbGxXaWR0aEhlaWdodFBpeCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdGFiTGlzdFNjcm9sbE9mZlNldFdpZHRoSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5uelBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGF5b3V0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXIgJiYgdGhpcy5kaXIudmFsdWUgPT09ICdydGwnID8gJ3J0bCcgOiAnbHRyJztcclxuICB9XHJcblxyXG4gIGFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2xpbmUnKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGFiZWxXcmFwcGVyID1cclxuICAgICAgICB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUgJiYgdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlLmxlbmd0aFxyXG4gICAgICAgICAgPyB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUudG9BcnJheSgpW3RoaXMuc2VsZWN0ZWRJbmRleF0uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgICA6IG51bGw7XHJcbiAgICAgIGlmICh0aGlzLm56VGFic0lua0JhckRpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMubnpUYWJzSW5rQmFyRGlyZWN0aXZlLmFsaWduVG9FbGVtZW50KHNlbGVjdGVkTGFiZWxXcmFwcGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=