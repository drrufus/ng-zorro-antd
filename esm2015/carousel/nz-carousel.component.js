/**
 * @fileoverview added by tsickle
 * Generated from: nz-carousel.component.ts
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
const NZ_CONFIG_COMPONENT_NAME = 'carousel';
export class NzCarouselComponent {
    /**
     * @param {?} elementRef
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} platform
     * @param {?} nzDomEventService
     * @param {?} nzDragService
     * @param {?} customStrategies
     */
    constructor(elementRef, nzConfigService, renderer, cdr, platform, nzDomEventService, nzDragService, customStrategies) {
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
        (event) => {
            if (!this.isDragging && !this.isTransiting && this.nzEnableSwipe) {
                this.clearScheduledTransition();
                this.gestureRect = this.slickListEl.getBoundingClientRect();
                this.nzDragService.requestDraggingSequence(event).subscribe((/**
                 * @param {?} delta
                 * @return {?}
                 */
                delta => {
                    this.pointerDelta = delta;
                    this.isDragging = true;
                    this.strategy.dragging(this.pointerDelta);
                }), (/**
                 * @return {?}
                 */
                () => { }), (/**
                 * @return {?}
                 */
                () => {
                    if (this.nzEnableSwipe && this.isDragging) {
                        /** @type {?} */
                        const xDelta = this.pointerDelta ? this.pointerDelta.x : 0;
                        // Switch to another slide if delta is bigger than third of the width.
                        if (Math.abs(xDelta) > (/** @type {?} */ (this.gestureRect)).width / 3) {
                            this.goTo(xDelta > 0 ? this.activeIndex - 1 : this.activeIndex + 1);
                        }
                        else {
                            this.goTo(this.activeIndex);
                        }
                        this.gestureRect = null;
                        this.pointerDelta = null;
                    }
                    this.isDragging = false;
                }));
            }
        });
        this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
        this.el = elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get nzVertical() {
        return this.vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVertical(value) {
        warnDeprecation(`'nzVertical' is deprecated and will be removed in 9.0.0. Please use 'nzDotPosition' instead.`);
        this.vertical = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDotPosition(value) {
        this._dotPosition = value;
        if (value === 'left' || value === 'right') {
            this.vertical = true;
        }
        else {
            this.vertical = false;
        }
    }
    /**
     * @return {?}
     */
    get nzDotPosition() {
        return this._dotPosition;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.markContentActive(0);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.slickListEl = this.slickList.nativeElement;
        this.slickTrackEl = this.slickTrack.nativeElement;
        this.carouselContents.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.markContentActive(0);
            this.syncStrategy();
        }));
        this.nzDomEventService
            .registerResizeListener()
            .pipe(takeUntil(this.destroy$), finalize((/**
         * @return {?}
         */
        () => this.nzDomEventService.unregisterResizeListener())))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.syncStrategy();
        }));
        this.switchStrategy();
        this.markContentActive(0);
        this.syncStrategy();
        // If embedded in an entry component, it may do initial render at a inappropriate time.
        // ngZone.onStable won't do this trick
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.syncStrategy();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzEffect, nzDotPosition } = changes;
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearScheduledTransition();
        if (this.strategy) {
            this.strategy.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (e.keyCode === LEFT_ARROW) {
            e.preventDefault();
            this.pre();
        }
        else if (e.keyCode === RIGHT_ARROW) {
            this.next();
            e.preventDefault();
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.goTo(this.activeIndex + 1);
    }
    /**
     * @return {?}
     */
    pre() {
        this.goTo(this.activeIndex - 1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    goTo(index) {
        if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
            /** @type {?} */
            const length = this.carouselContents.length;
            /** @type {?} */
            const from = this.activeIndex;
            /** @type {?} */
            const to = (index + length) % length;
            this.isTransiting = true;
            this.nzBeforeChange.emit({ from, to });
            this.strategy.switch(this.activeIndex, index).subscribe((/**
             * @return {?}
             */
            () => {
                this.scheduleNextTransition();
                this.nzAfterChange.emit(index);
                this.isTransiting = false;
            }));
            this.markContentActive(to);
            this.cdr.markForCheck();
        }
    }
    /**
     * @private
     * @return {?}
     */
    switchStrategy() {
        if (this.strategy) {
            this.strategy.dispose();
        }
        // Load custom strategies first.
        /** @type {?} */
        const customStrategy = this.customStrategies ? this.customStrategies.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.name === this.nzEffect)) : null;
        if (customStrategy) {
            // tslint:disable-next-line:no-any
            this.strategy = new ((/** @type {?} */ (customStrategy.strategy)))(this, this.cdr, this.renderer);
            return;
        }
        this.strategy =
            this.nzEffect === 'scrollx'
                ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer)
                : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer);
    }
    /**
     * @private
     * @return {?}
     */
    scheduleNextTransition() {
        this.clearScheduledTransition();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
            this.transitionInProgress = setTimeout((/**
             * @return {?}
             */
            () => {
                this.goTo(this.activeIndex + 1);
            }), this.nzAutoPlaySpeed);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearScheduledTransition() {
        if (this.transitionInProgress) {
            clearTimeout(this.transitionInProgress);
            this.transitionInProgress = null;
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    markContentActive(index) {
        this.activeIndex = index;
        if (this.carouselContents) {
            this.carouselContents.forEach((/**
             * @param {?} slide
             * @param {?} i
             * @return {?}
             */
            (slide, i) => {
                slide.isActive = index === i;
            }));
        }
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    syncStrategy() {
        if (this.strategy) {
            this.strategy.withCarouselContents(this.carouselContents);
        }
    }
}
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
                styles: [`
      nz-carousel {
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      .slick-dots {
        display: block;
      }

      .slick-track {
        opacity: 1;
      }
    `]
            }] }
];
/** @nocollapse */
NzCarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: Platform },
    { type: NzDomEventService },
    { type: NzDragService },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_CAROUSEL_CUSTOM_STRATEGIES,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbIm56LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQ0wsZUFBZSxFQUNmLFlBQVksRUFDWixXQUFXLEVBQ1gsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUtMLDZCQUE2QixFQUU5QixNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztNQUV4RSx3QkFBd0IsR0FBRyxVQUFVO0FBZ0MzQyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7OztJQTJEOUIsWUFD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O0lBQ3BDLGtDQUF1Qzs7Ozs7SUFDdkMsdUNBQW1DOzs7OztJQUNuQyxnREFBcUQ7Ozs7O0lBQ3JELDRDQUE2Qzs7Ozs7SUFDN0MsK0NBQTZHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHdhcm5EZXByZWNhdGlvbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgSW5wdXROdW1iZXIsXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIE56RG9tRXZlbnRTZXJ2aWNlLFxyXG4gIE56RHJhZ1NlcnZpY2UsXHJcbiAgV2l0aENvbmZpZ1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1xyXG4gIEZyb21Ub0ludGVyZmFjZSxcclxuICBOekNhcm91c2VsRG90UG9zaXRpb24sXHJcbiAgTnpDYXJvdXNlbEVmZmVjdHMsXHJcbiAgTnpDYXJvdXNlbFN0cmF0ZWd5UmVnaXN0cnlJdGVtLFxyXG4gIE5aX0NBUk9VU0VMX0NVU1RPTV9TVFJBVEVHSUVTLFxyXG4gIFBvaW50ZXJWZWN0b3JcclxufSBmcm9tICcuL256LWNhcm91c2VsLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9iYXNlLXN0cmF0ZWd5JztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbE9wYWNpdHlTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9vcGFjaXR5LXN0cmF0ZWd5JztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbFRyYW5zZm9ybVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL3RyYW5zZm9ybS1zdHJhdGVneSc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnY2Fyb3VzZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWNhcm91c2VsJyxcclxuICBleHBvcnRBczogJ256Q2Fyb3VzZWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtY2Fyb3VzZWwtdmVydGljYWxdJzogJ3ZlcnRpY2FsJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWNhcm91c2VsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zbGljay1kb3RzIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNsaWNrLXRyYWNrIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBAQ29udGVudENoaWxkcmVuKE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSBjYXJvdXNlbENvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+O1xyXG5cclxuICBAVmlld0NoaWxkKCdzbGlja0xpc3QnLCB7IHN0YXRpYzogZmFsc2UgfSkgc2xpY2tMaXN0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3NsaWNrVHJhY2snLCB7IHN0YXRpYzogZmFsc2UgfSkgc2xpY2tUcmFjazogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgbnpEb3RSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXIgfT47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnc2Nyb2xseCcpIG56RWZmZWN0OiBOekNhcm91c2VsRWZmZWN0cztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuekVuYWJsZVN3aXBlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56RG90czogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvUGxheTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDMwMDApIEBJbnB1dE51bWJlcigpIG56QXV0b1BsYXlTcGVlZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56VHJhbnNpdGlvblNwZWVkID0gNTAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGdldCBuelZlcnRpY2FsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljYWw7XHJcbiAgfVxyXG5cclxuICBzZXQgbnpWZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpWZXJ0aWNhbCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduekRvdFBvc2l0aW9uJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy52ZXJ0aWNhbCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdib3R0b20nKVxyXG4gIHNldCBuekRvdFBvc2l0aW9uKHZhbHVlOiBOekNhcm91c2VsRG90UG9zaXRpb24pIHtcclxuICAgIHRoaXMuX2RvdFBvc2l0aW9uID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgPT09ICdsZWZ0JyB8fCB2YWx1ZSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICB0aGlzLnZlcnRpY2FsID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmVydGljYWwgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekRvdFBvc2l0aW9uKCk6IE56Q2Fyb3VzZWxEb3RQb3NpdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZG90UG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kb3RQb3NpdGlvbjogTnpDYXJvdXNlbERvdFBvc2l0aW9uO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpCZWZvcmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZyb21Ub0ludGVyZmFjZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBhY3RpdmVJbmRleCA9IDA7XHJcbiAgZWw6IEhUTUxFbGVtZW50O1xyXG4gIHNsaWNrTGlzdEVsOiBIVE1MRWxlbWVudDtcclxuICBzbGlja1RyYWNrRWw6IEhUTUxFbGVtZW50O1xyXG4gIHN0cmF0ZWd5OiBOekNhcm91c2VsQmFzZVN0cmF0ZWd5O1xyXG4gIHZlcnRpY2FsID0gZmFsc2U7XHJcbiAgdHJhbnNpdGlvbkluUHJvZ3Jlc3M6IG51bWJlciB8IG51bGw7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgZ2VzdHVyZVJlY3Q6IENsaWVudFJlY3QgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIHBvaW50ZXJEZWx0YTogUG9pbnRlclZlY3RvciB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgaXNUcmFuc2l0aW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc0RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyByZWFkb25seSBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG56RHJhZ1NlcnZpY2U6IE56RHJhZ1NlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0NBUk9VU0VMX0NVU1RPTV9TVFJBVEVHSUVTKSBwcml2YXRlIGN1c3RvbVN0cmF0ZWdpZXM6IE56Q2Fyb3VzZWxTdHJhdGVneVJlZ2lzdHJ5SXRlbVtdXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJvdXNlbCcpO1xyXG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2xpY2tMaXN0RWwgPSB0aGlzLnNsaWNrTGlzdC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5zbGlja1RyYWNrRWwgPSB0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudHMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcclxuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubnpEb21FdmVudFNlcnZpY2VcclxuICAgICAgLnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5uekRvbUV2ZW50U2VydmljZS51bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLnN3aXRjaFN0cmF0ZWd5KCk7XHJcbiAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xyXG4gICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcclxuXHJcbiAgICAvLyBJZiBlbWJlZGRlZCBpbiBhbiBlbnRyeSBjb21wb25lbnQsIGl0IG1heSBkbyBpbml0aWFsIHJlbmRlciBhdCBhIGluYXBwcm9wcmlhdGUgdGltZS5cclxuICAgIC8vIG5nWm9uZS5vblN0YWJsZSB3b24ndCBkbyB0aGlzIHRyaWNrXHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuekVmZmVjdCwgbnpEb3RQb3NpdGlvbiB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAobnpFZmZlY3QgJiYgIW56RWZmZWN0LmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnN3aXRjaFN0cmF0ZWd5KCk7XHJcbiAgICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XHJcbiAgICAgIHRoaXMuc3luY1N0cmF0ZWd5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56RG90UG9zaXRpb24gJiYgIW56RG90UG9zaXRpb24uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuc3dpdGNoU3RyYXRlZ3koKTtcclxuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcclxuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubnpBdXRvUGxheSB8fCAhdGhpcy5uekF1dG9QbGF5U3BlZWQpIHtcclxuICAgICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVOZXh0VHJhbnNpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpO1xyXG4gICAgaWYgKHRoaXMuc3RyYXRlZ3kpIHtcclxuICAgICAgdGhpcy5zdHJhdGVneS5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMucHJlKCk7XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcclxuICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCArIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb1RvKHRoaXMuYWN0aXZlSW5kZXggLSAxKTtcclxuICB9XHJcblxyXG4gIGdvVG8oaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50cyAmJiB0aGlzLmNhcm91c2VsQ29udGVudHMubGVuZ3RoICYmICF0aGlzLmlzVHJhbnNpdGluZykge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNhcm91c2VsQ29udGVudHMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBmcm9tID0gdGhpcy5hY3RpdmVJbmRleDtcclxuICAgICAgY29uc3QgdG8gPSAoaW5kZXggKyBsZW5ndGgpICUgbGVuZ3RoO1xyXG4gICAgICB0aGlzLmlzVHJhbnNpdGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMubnpCZWZvcmVDaGFuZ2UuZW1pdCh7IGZyb20sIHRvIH0pO1xyXG4gICAgICB0aGlzLnN0cmF0ZWd5LnN3aXRjaCh0aGlzLmFjdGl2ZUluZGV4LCBpbmRleCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlTmV4dFRyYW5zaXRpb24oKTtcclxuICAgICAgICB0aGlzLm56QWZ0ZXJDaGFuZ2UuZW1pdChpbmRleCk7XHJcbiAgICAgICAgdGhpcy5pc1RyYW5zaXRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUodG8pO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3dpdGNoU3RyYXRlZ3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdHJhdGVneSkge1xyXG4gICAgICB0aGlzLnN0cmF0ZWd5LmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2FkIGN1c3RvbSBzdHJhdGVnaWVzIGZpcnN0LlxyXG4gICAgY29uc3QgY3VzdG9tU3RyYXRlZ3kgPSB0aGlzLmN1c3RvbVN0cmF0ZWdpZXMgPyB0aGlzLmN1c3RvbVN0cmF0ZWdpZXMuZmluZChzID0+IHMubmFtZSA9PT0gdGhpcy5uekVmZmVjdCkgOiBudWxsO1xyXG4gICAgaWYgKGN1c3RvbVN0cmF0ZWd5KSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgdGhpcy5zdHJhdGVneSA9IG5ldyAoY3VzdG9tU3RyYXRlZ3kuc3RyYXRlZ3kgYXMgYW55KSh0aGlzLCB0aGlzLmNkciwgdGhpcy5yZW5kZXJlcik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0cmF0ZWd5ID1cclxuICAgICAgdGhpcy5uekVmZmVjdCA9PT0gJ3Njcm9sbHgnXHJcbiAgICAgICAgPyBuZXcgTnpDYXJvdXNlbFRyYW5zZm9ybVN0cmF0ZWd5KHRoaXMsIHRoaXMuY2RyLCB0aGlzLnJlbmRlcmVyKVxyXG4gICAgICAgIDogbmV3IE56Q2Fyb3VzZWxPcGFjaXR5U3RyYXRlZ3kodGhpcywgdGhpcy5jZHIsIHRoaXMucmVuZGVyZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzY2hlZHVsZU5leHRUcmFuc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcclxuICAgIGlmICh0aGlzLm56QXV0b1BsYXkgJiYgdGhpcy5uekF1dG9QbGF5U3BlZWQgPiAwICYmIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCArIDEpO1xyXG4gICAgICB9LCB0aGlzLm56QXV0b1BsYXlTcGVlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzKTtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1hcmtDb250ZW50QWN0aXZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnRzKSB7XHJcbiAgICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50cy5mb3JFYWNoKChzbGlkZSwgaSkgPT4ge1xyXG4gICAgICAgIHNsaWRlLmlzQWN0aXZlID0gaW5kZXggPT09IGk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHJhZyBjYXJvdXNlbC5cclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBwb2ludGVyRG93biA9IChldmVudDogVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmICghdGhpcy5pc0RyYWdnaW5nICYmICF0aGlzLmlzVHJhbnNpdGluZyAmJiB0aGlzLm56RW5hYmxlU3dpcGUpIHtcclxuICAgICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcclxuICAgICAgdGhpcy5nZXN0dXJlUmVjdCA9IHRoaXMuc2xpY2tMaXN0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICB0aGlzLm56RHJhZ1NlcnZpY2UucmVxdWVzdERyYWdnaW5nU2VxdWVuY2UoZXZlbnQpLnN1YnNjcmliZShcclxuICAgICAgICBkZWx0YSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBvaW50ZXJEZWx0YSA9IGRlbHRhO1xyXG4gICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc3RyYXRlZ3kuZHJhZ2dpbmcodGhpcy5wb2ludGVyRGVsdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge30sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMubnpFbmFibGVTd2lwZSAmJiB0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgY29uc3QgeERlbHRhID0gdGhpcy5wb2ludGVyRGVsdGEgPyB0aGlzLnBvaW50ZXJEZWx0YS54IDogMDtcclxuXHJcbiAgICAgICAgICAgIC8vIFN3aXRjaCB0byBhbm90aGVyIHNsaWRlIGlmIGRlbHRhIGlzIGJpZ2dlciB0aGFuIHRoaXJkIG9mIHRoZSB3aWR0aC5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHhEZWx0YSkgPiB0aGlzLmdlc3R1cmVSZWN0IS53aWR0aCAvIDMpIHtcclxuICAgICAgICAgICAgICB0aGlzLmdvVG8oeERlbHRhID4gMCA/IHRoaXMuYWN0aXZlSW5kZXggLSAxIDogdGhpcy5hY3RpdmVJbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuZ29Ubyh0aGlzLmFjdGl2ZUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXN0dXJlUmVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRlckRlbHRhID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBzeW5jU3RyYXRlZ3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdHJhdGVneSkge1xyXG4gICAgICB0aGlzLnN0cmF0ZWd5LndpdGhDYXJvdXNlbENvbnRlbnRzKHRoaXMuY2Fyb3VzZWxDb250ZW50cyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==