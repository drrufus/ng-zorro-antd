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
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { warnDeprecation, InputBoolean, InputNumber, NzConfigService, NzDomEventService, NzDragService, WithConfig } from 'ng-zorro-antd/core';
import { NzCarouselContentDirective } from './nz-carousel-content.directive';
import { NZ_CAROUSEL_CUSTOM_STRATEGIES } from './nz-carousel-definitions';
import { NzCarouselOpacityStrategy } from './strategies/opacity-strategy';
import { NzCarouselTransformStrategy } from './strategies/transform-strategy';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'carousel';
var NzCarouselComponent = /** @class */ (function () {
    function NzCarouselComponent(elementRef, nzConfigService, renderer, cdr, platform, nzDomEventService, nzDragService, customStrategies) {
        var _this = this;
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.nzDragService = nzDragService;
        this.customStrategies = customStrategies;
        this.nzTransitionSpeed = 500;
        this.nzBeforeChange = new EventEmitter();
        this.nzAfterChange = new EventEmitter();
        this.activeIndex = 0;
        this.vertical = false;
        this.destroy$ = new Subject();
        this.gestureRect = null;
        this.pointerDelta = null;
        this.isTransiting = false;
        this.isDragging = false;
        /**
         * Drag carousel.
         * @param event
         */
        this.pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this.isDragging && !_this.isTransiting && _this.nzEnableSwipe) {
                _this.clearScheduledTransition();
                _this.gestureRect = _this.slickListEl.getBoundingClientRect();
                _this.nzDragService.requestDraggingSequence(event).subscribe((/**
                 * @param {?} delta
                 * @return {?}
                 */
                function (delta) {
                    _this.pointerDelta = delta;
                    _this.isDragging = true;
                    _this.strategy.dragging(_this.pointerDelta);
                }), (/**
                 * @return {?}
                 */
                function () { }), (/**
                 * @return {?}
                 */
                function () {
                    if (_this.nzEnableSwipe && _this.isDragging) {
                        /** @type {?} */
                        var xDelta = _this.pointerDelta ? _this.pointerDelta.x : 0;
                        // Switch to another slide if delta is bigger than third of the width.
                        if (Math.abs(xDelta) > (/** @type {?} */ (_this.gestureRect)).width / 3) {
                            _this.goTo(xDelta > 0 ? _this.activeIndex - 1 : _this.activeIndex + 1);
                        }
                        else {
                            _this.goTo(_this.activeIndex);
                        }
                        _this.gestureRect = null;
                        _this.pointerDelta = null;
                    }
                    _this.isDragging = false;
                }));
            }
        });
        this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(NzCarouselComponent.prototype, "nzVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this.vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnDeprecation("'nzVertical' is deprecated and will be removed in 9.0.0. Please use 'nzDotPosition' instead.");
            this.vertical = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzDotPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dotPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dotPosition = value;
            if (value === 'left' || value === 'right') {
                this.vertical = true;
            }
            else {
                this.vertical = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.markContentActive(0);
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.slickListEl = this.slickList.nativeElement;
        this.slickTrackEl = this.slickTrack.nativeElement;
        this.carouselContents.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.markContentActive(0);
            _this.syncStrategy();
        }));
        this.nzDomEventService
            .registerResizeListener()
            .pipe(takeUntil(this.destroy$), finalize((/**
         * @return {?}
         */
        function () { return _this.nzDomEventService.unregisterResizeListener(); })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.syncStrategy();
        }));
        this.switchStrategy();
        this.markContentActive(0);
        this.syncStrategy();
        // If embedded in an entry component, it may do initial render at a inappropriate time.
        // ngZone.onStable won't do this trick
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.syncStrategy();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzCarouselComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzEffect = changes.nzEffect, nzDotPosition = changes.nzDotPosition;
        if (nzEffect && !nzEffect.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
        }
        if (nzDotPosition && !nzDotPosition.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
        }
        if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
            this.clearScheduledTransition();
        }
        else {
            this.scheduleNextTransition();
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearScheduledTransition();
        if (this.strategy) {
            this.strategy.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzCarouselComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === LEFT_ARROW) {
            e.preventDefault();
            this.pre();
        }
        else if (e.keyCode === RIGHT_ARROW) {
            this.next();
            e.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.goTo(this.activeIndex + 1);
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.pre = /**
     * @return {?}
     */
    function () {
        this.goTo(this.activeIndex - 1);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCarouselComponent.prototype.goTo = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
            /** @type {?} */
            var length_1 = this.carouselContents.length;
            /** @type {?} */
            var from = this.activeIndex;
            /** @type {?} */
            var to = (index + length_1) % length_1;
            this.isTransiting = true;
            this.nzBeforeChange.emit({ from: from, to: to });
            this.strategy.switch(this.activeIndex, index).subscribe((/**
             * @return {?}
             */
            function () {
                _this.scheduleNextTransition();
                _this.nzAfterChange.emit(index);
                _this.isTransiting = false;
            }));
            this.markContentActive(to);
            this.cdr.markForCheck();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.switchStrategy = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.strategy) {
            this.strategy.dispose();
        }
        // Load custom strategies first.
        /** @type {?} */
        var customStrategy = this.customStrategies ? this.customStrategies.find((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.name === _this.nzEffect; })) : null;
        if (customStrategy) {
            // tslint:disable-next-line:no-any
            this.strategy = new ((/** @type {?} */ (customStrategy.strategy)))(this, this.cdr, this.renderer);
            return;
        }
        this.strategy =
            this.nzEffect === 'scrollx'
                ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer)
                : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer);
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.scheduleNextTransition = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearScheduledTransition();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
            this.transitionInProgress = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.goTo(_this.activeIndex + 1);
            }), this.nzAutoPlaySpeed);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.clearScheduledTransition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.transitionInProgress) {
            clearTimeout(this.transitionInProgress);
            this.transitionInProgress = null;
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NzCarouselComponent.prototype.markContentActive = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.activeIndex = index;
        if (this.carouselContents) {
            this.carouselContents.forEach((/**
             * @param {?} slide
             * @param {?} i
             * @return {?}
             */
            function (slide, i) {
                slide.isActive = index === i;
            }));
        }
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.syncStrategy = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.strategy) {
            this.strategy.withCarouselContents(this.carouselContents);
        }
    };
    NzCarouselComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-carousel',
                    exportAs: 'nzCarousel',
                    preserveWhitespaces: false,
                    template: "<div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzVertical\">\r\n  <div\r\n    #slickList\r\n    class=\"slick-list\"\r\n    tabindex=\"-1\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n    (mousedown)=\"pointerDown($event)\"\r\n    (touchstart)=\"pointerDown($event)\"\r\n  >\r\n    <!-- Render carousel items. -->\r\n    <div class=\"slick-track\" #slickTrack>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n  <!-- Render dots. -->\r\n  <ul\r\n    class=\"slick-dots\"\r\n    *ngIf=\"nzDots\"\r\n    [class.slick-dots-top]=\"nzDotPosition === 'top'\"\r\n    [class.slick-dots-bottom]=\"nzDotPosition === 'bottom'\"\r\n    [class.slick-dots-left]=\"nzDotPosition === 'left'\"\r\n    [class.slick-dots-right]=\"nzDotPosition === 'right'\"\r\n  >\r\n    <li\r\n      *ngFor=\"let content of carouselContents; let i = index\"\r\n      [class.slick-active]=\"content.isActive\"\r\n      (click)=\"goTo(i)\"\r\n    >\r\n      <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\">\r\n      </ng-template>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<ng-template #renderDotTemplate let-index>\r\n  <button>{{ index + 1 }}</button>\r\n</ng-template>\r\n",
                    host: {
                        '[class.ant-carousel-vertical]': 'vertical'
                    },
                    styles: ["\n      nz-carousel {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCarouselComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: Platform },
        { type: NzDomEventService },
        { type: NzDragService },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_CAROUSEL_CUSTOM_STRATEGIES,] }] }
    ]; };
    NzCarouselComponent.propDecorators = {
        carouselContents: [{ type: ContentChildren, args: [NzCarouselContentDirective,] }],
        slickList: [{ type: ViewChild, args: ['slickList', { static: false },] }],
        slickTrack: [{ type: ViewChild, args: ['slickTrack', { static: false },] }],
        nzDotRender: [{ type: Input }],
        nzEffect: [{ type: Input }],
        nzEnableSwipe: [{ type: Input }],
        nzDots: [{ type: Input }],
        nzAutoPlay: [{ type: Input }],
        nzAutoPlaySpeed: [{ type: Input }],
        nzTransitionSpeed: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzDotPosition: [{ type: Input }],
        nzBeforeChange: [{ type: Output }],
        nzAfterChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'scrollx'),
        tslib_1.__metadata("design:type", String)
    ], NzCarouselComponent.prototype, "nzEffect", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCarouselComponent.prototype, "nzDots", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 3000), InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], NzCarouselComponent.prototype, "nzVertical", null);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'bottom'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], NzCarouselComponent.prototype, "nzDotPosition", null);
    return NzCarouselComponent;
}());
export { NzCarouselComponent };
if (false) {
    /** @type {?} */
    NzCarouselComponent.prototype.carouselContents;
    /** @type {?} */
    NzCarouselComponent.prototype.slickList;
    /** @type {?} */
    NzCarouselComponent.prototype.slickTrack;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDotRender;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEffect;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEnableSwipe;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDots;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAutoPlay;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAutoPlaySpeed;
    /** @type {?} */
    NzCarouselComponent.prototype.nzTransitionSpeed;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype._dotPosition;
    /** @type {?} */
    NzCarouselComponent.prototype.nzBeforeChange;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAfterChange;
    /** @type {?} */
    NzCarouselComponent.prototype.activeIndex;
    /** @type {?} */
    NzCarouselComponent.prototype.el;
    /** @type {?} */
    NzCarouselComponent.prototype.slickListEl;
    /** @type {?} */
    NzCarouselComponent.prototype.slickTrackEl;
    /** @type {?} */
    NzCarouselComponent.prototype.strategy;
    /** @type {?} */
    NzCarouselComponent.prototype.vertical;
    /** @type {?} */
    NzCarouselComponent.prototype.transitionInProgress;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.gestureRect;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.pointerDelta;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.isTransiting;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.isDragging;
    /**
     * Drag carousel.
     * \@param event
     * @type {?}
     */
    NzCarouselComponent.prototype.pointerDown;
    /** @type {?} */
    NzCarouselComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.nzDomEventService;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.nzDragService;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.customStrategies;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbIm56LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFDTCxlQUFlLEVBQ2YsWUFBWSxFQUNaLFdBQVcsRUFDWCxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBS0wsNkJBQTZCLEVBRTlCLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0lBRXhFLHdCQUF3QixHQUFHLFVBQVU7QUFFM0M7SUF5RkUsNkJBQ0UsVUFBc0IsRUFDTixlQUFnQyxFQUMvQixRQUFt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LDBDQUE4Qzs7Ozs7SUFDOUMsMkNBQWtEOzs7OztJQUNsRCwyQ0FBNkI7Ozs7O0lBQzdCLHlDQUEyQjs7Ozs7O0lBMkszQiwwQ0ErQkU7O0lBdE1BLDhDQUFnRDs7Ozs7SUFDaEQsdUNBQW9DOzs7OztJQUNwQyxrQ0FBdUM7Ozs7O0lBQ3ZDLHVDQUFtQzs7Ozs7SUFDbkMsZ0RBQXFEOzs7OztJQUNyRCw0Q0FBNkM7Ozs7O0lBQzdDLCtDQUE2RyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTEVGVF9BUlJPVywgUklHSFRfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICB3YXJuRGVwcmVjYXRpb24sXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIElucHV0TnVtYmVyLFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOekRvbUV2ZW50U2VydmljZSxcclxuICBOekRyYWdTZXJ2aWNlLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL256LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtcclxuICBGcm9tVG9JbnRlcmZhY2UsXHJcbiAgTnpDYXJvdXNlbERvdFBvc2l0aW9uLFxyXG4gIE56Q2Fyb3VzZWxFZmZlY3RzLFxyXG4gIE56Q2Fyb3VzZWxTdHJhdGVneVJlZ2lzdHJ5SXRlbSxcclxuICBOWl9DQVJPVVNFTF9DVVNUT01fU1RSQVRFR0lFUyxcclxuICBQb2ludGVyVmVjdG9yXHJcbn0gZnJvbSAnLi9uei1jYXJvdXNlbC1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvYmFzZS1zdHJhdGVneSc7XHJcbmltcG9ydCB7IE56Q2Fyb3VzZWxPcGFjaXR5U3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvb3BhY2l0eS1zdHJhdGVneSc7XHJcbmltcG9ydCB7IE56Q2Fyb3VzZWxUcmFuc2Zvcm1TdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy90cmFuc2Zvcm0tc3RyYXRlZ3knO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2Nhcm91c2VsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1jYXJvdXNlbCcsXHJcbiAgZXhwb3J0QXM6ICduekNhcm91c2VsJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWNhcm91c2VsLXZlcnRpY2FsXSc6ICd2ZXJ0aWNhbCdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1jYXJvdXNlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2xpY2stZG90cyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zbGljay10cmFjayB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSkgY2Fyb3VzZWxDb250ZW50czogUXVlcnlMaXN0PE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlPjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnc2xpY2tMaXN0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHNsaWNrTGlzdDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdzbGlja1RyYWNrJywgeyBzdGF0aWM6IGZhbHNlIH0pIHNsaWNrVHJhY2s6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIG56RG90UmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyIH0+O1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ3Njcm9sbHgnKSBuekVmZmVjdDogTnpDYXJvdXNlbEVmZmVjdHM7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgbnpFbmFibGVTd2lwZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuekRvdHM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56QXV0b1BsYXk6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAzMDAwKSBASW5wdXROdW1iZXIoKSBuekF1dG9QbGF5U3BlZWQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelRyYW5zaXRpb25TcGVlZCA9IDUwMDtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsO1xyXG4gIH1cclxuXHJcbiAgc2V0IG56VmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ256VmVydGljYWwnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpEb3RQb3NpdGlvbicgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMudmVydGljYWwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnYm90dG9tJylcclxuICBzZXQgbnpEb3RQb3NpdGlvbih2YWx1ZTogTnpDYXJvdXNlbERvdFBvc2l0aW9uKSB7XHJcbiAgICB0aGlzLl9kb3RQb3NpdGlvbiA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlID09PSAnbGVmdCcgfHwgdmFsdWUgPT09ICdyaWdodCcpIHtcclxuICAgICAgdGhpcy52ZXJ0aWNhbCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEb3RQb3NpdGlvbigpOiBOekNhcm91c2VsRG90UG9zaXRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RvdFBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZG90UG9zaXRpb246IE56Q2Fyb3VzZWxEb3RQb3NpdGlvbjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QmVmb3JlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGcm9tVG9JbnRlcmZhY2U+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgYWN0aXZlSW5kZXggPSAwO1xyXG4gIGVsOiBIVE1MRWxlbWVudDtcclxuICBzbGlja0xpc3RFbDogSFRNTEVsZW1lbnQ7XHJcbiAgc2xpY2tUcmFja0VsOiBIVE1MRWxlbWVudDtcclxuICBzdHJhdGVneTogTnpDYXJvdXNlbEJhc2VTdHJhdGVneTtcclxuICB2ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gIHRyYW5zaXRpb25JblByb2dyZXNzOiBudW1iZXIgfCBudWxsO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGdlc3R1cmVSZWN0OiBDbGllbnRSZWN0IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBwb2ludGVyRGVsdGE6IFBvaW50ZXJWZWN0b3IgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGlzVHJhbnNpdGluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBuekRyYWdTZXJ2aWNlOiBOekRyYWdTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9DQVJPVVNFTF9DVVNUT01fU1RSQVRFR0lFUykgcHJpdmF0ZSBjdXN0b21TdHJhdGVnaWVzOiBOekNhcm91c2VsU3RyYXRlZ3lSZWdpc3RyeUl0ZW1bXVxyXG4gICkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2Fyb3VzZWwnKTtcclxuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNsaWNrTGlzdEVsID0gdGhpcy5zbGlja0xpc3QubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuc2xpY2tUcmFja0VsID0gdGhpcy5zbGlja1RyYWNrLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnRzLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XHJcbiAgICAgIHRoaXMuc3luY1N0cmF0ZWd5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlXHJcbiAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5zd2l0Y2hTdHJhdGVneSgpO1xyXG4gICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcclxuICAgIHRoaXMuc3luY1N0cmF0ZWd5KCk7XHJcblxyXG4gICAgLy8gSWYgZW1iZWRkZWQgaW4gYW4gZW50cnkgY29tcG9uZW50LCBpdCBtYXkgZG8gaW5pdGlhbCByZW5kZXIgYXQgYSBpbmFwcHJvcHJpYXRlIHRpbWUuXHJcbiAgICAvLyBuZ1pvbmUub25TdGFibGUgd29uJ3QgZG8gdGhpcyB0cmlja1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3luY1N0cmF0ZWd5KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpFZmZlY3QsIG56RG90UG9zaXRpb24gfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56RWZmZWN0ICYmICFuekVmZmVjdC5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5zd2l0Y2hTdHJhdGVneSgpO1xyXG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xyXG4gICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuekRvdFBvc2l0aW9uICYmICFuekRvdFBvc2l0aW9uLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnN3aXRjaFN0cmF0ZWd5KCk7XHJcbiAgICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XHJcbiAgICAgIHRoaXMuc3luY1N0cmF0ZWd5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm56QXV0b1BsYXkgfHwgIXRoaXMubnpBdXRvUGxheVNwZWVkKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNjaGVkdWxlTmV4dFRyYW5zaXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcclxuICAgIGlmICh0aGlzLnN0cmF0ZWd5KSB7XHJcbiAgICAgIHRoaXMuc3RyYXRlZ3kuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnByZSgpO1xyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XHJcbiAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb1RvKHRoaXMuYWN0aXZlSW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIHByZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ29Ubyh0aGlzLmFjdGl2ZUluZGV4IC0gMSk7XHJcbiAgfVxyXG5cclxuICBnb1RvKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNhcm91c2VsQ29udGVudHMgJiYgdGhpcy5jYXJvdXNlbENvbnRlbnRzLmxlbmd0aCAmJiAhdGhpcy5pc1RyYW5zaXRpbmcpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5jYXJvdXNlbENvbnRlbnRzLmxlbmd0aDtcclxuICAgICAgY29uc3QgZnJvbSA9IHRoaXMuYWN0aXZlSW5kZXg7XHJcbiAgICAgIGNvbnN0IHRvID0gKGluZGV4ICsgbGVuZ3RoKSAlIGxlbmd0aDtcclxuICAgICAgdGhpcy5pc1RyYW5zaXRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLm56QmVmb3JlQ2hhbmdlLmVtaXQoeyBmcm9tLCB0byB9KTtcclxuICAgICAgdGhpcy5zdHJhdGVneS5zd2l0Y2godGhpcy5hY3RpdmVJbmRleCwgaW5kZXgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU5leHRUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5uekFmdGVyQ2hhbmdlLmVtaXQoaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuaXNUcmFuc2l0aW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKHRvKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN3aXRjaFN0cmF0ZWd5KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RyYXRlZ3kpIHtcclxuICAgICAgdGhpcy5zdHJhdGVneS5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZCBjdXN0b20gc3RyYXRlZ2llcyBmaXJzdC5cclxuICAgIGNvbnN0IGN1c3RvbVN0cmF0ZWd5ID0gdGhpcy5jdXN0b21TdHJhdGVnaWVzID8gdGhpcy5jdXN0b21TdHJhdGVnaWVzLmZpbmQocyA9PiBzLm5hbWUgPT09IHRoaXMubnpFZmZlY3QpIDogbnVsbDtcclxuICAgIGlmIChjdXN0b21TdHJhdGVneSkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgIHRoaXMuc3RyYXRlZ3kgPSBuZXcgKGN1c3RvbVN0cmF0ZWd5LnN0cmF0ZWd5IGFzIGFueSkodGhpcywgdGhpcy5jZHIsIHRoaXMucmVuZGVyZXIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdHJhdGVneSA9XHJcbiAgICAgIHRoaXMubnpFZmZlY3QgPT09ICdzY3JvbGx4J1xyXG4gICAgICAgID8gbmV3IE56Q2Fyb3VzZWxUcmFuc2Zvcm1TdHJhdGVneSh0aGlzLCB0aGlzLmNkciwgdGhpcy5yZW5kZXJlcilcclxuICAgICAgICA6IG5ldyBOekNhcm91c2VsT3BhY2l0eVN0cmF0ZWd5KHRoaXMsIHRoaXMuY2RyLCB0aGlzLnJlbmRlcmVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2NoZWR1bGVOZXh0VHJhbnNpdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5uekF1dG9QbGF5ICYmIHRoaXMubnpBdXRvUGxheVNwZWVkID4gMCAmJiB0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nb1RvKHRoaXMuYWN0aXZlSW5kZXggKyAxKTtcclxuICAgICAgfSwgdGhpcy5uekF1dG9QbGF5U3BlZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcykge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcyk7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYXJrQ29udGVudEFjdGl2ZShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50cykge1xyXG4gICAgICB0aGlzLmNhcm91c2VsQ29udGVudHMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcclxuICAgICAgICBzbGlkZS5pc0FjdGl2ZSA9IGluZGV4ID09PSBpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERyYWcgY2Fyb3VzZWwuXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgcG9pbnRlckRvd24gPSAoZXZlbnQ6IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZyAmJiAhdGhpcy5pc1RyYW5zaXRpbmcgJiYgdGhpcy5uekVuYWJsZVN3aXBlKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuZ2VzdHVyZVJlY3QgPSB0aGlzLnNsaWNrTGlzdEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgdGhpcy5uekRyYWdTZXJ2aWNlLnJlcXVlc3REcmFnZ2luZ1NlcXVlbmNlKGV2ZW50KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgZGVsdGEgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wb2ludGVyRGVsdGEgPSBkZWx0YTtcclxuICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnN0cmF0ZWd5LmRyYWdnaW5nKHRoaXMucG9pbnRlckRlbHRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHt9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLm56RW5hYmxlU3dpcGUgJiYgdGhpcy5pc0RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHhEZWx0YSA9IHRoaXMucG9pbnRlckRlbHRhID8gdGhpcy5wb2ludGVyRGVsdGEueCA6IDA7XHJcblxyXG4gICAgICAgICAgICAvLyBTd2l0Y2ggdG8gYW5vdGhlciBzbGlkZSBpZiBkZWx0YSBpcyBiaWdnZXIgdGhhbiB0aGlyZCBvZiB0aGUgd2lkdGguXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4RGVsdGEpID4gdGhpcy5nZXN0dXJlUmVjdCEud2lkdGggLyAzKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5nb1RvKHhEZWx0YSA+IDAgPyB0aGlzLmFjdGl2ZUluZGV4IC0gMSA6IHRoaXMuYWN0aXZlSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZVJlY3QgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXJEZWx0YSA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc3luY1N0cmF0ZWd5KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RyYXRlZ3kpIHtcclxuICAgICAgdGhpcy5zdHJhdGVneS53aXRoQ2Fyb3VzZWxDb250ZW50cyh0aGlzLmNhcm91c2VsQ29udGVudHMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=