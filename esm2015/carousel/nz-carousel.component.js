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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbIm56LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFDTCxlQUFlLEVBQ2YsWUFBWSxFQUNaLFdBQVcsRUFDWCxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBS0wsNkJBQTZCLEVBRTlCLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O01BRXhFLHdCQUF3QixHQUFHLFVBQVU7QUFnQzNDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7Ozs7O0lBMkQ5QixZQUNF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SUFDcEMsa0NBQXVDOzs7OztJQUN2Qyx1Q0FBbUM7Ozs7O0lBQ25DLGdEQUFxRDs7Ozs7SUFDckQsNENBQTZDOzs7OztJQUM3QywrQ0FBNkciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IExFRlRfQVJST1csIFJJR0hUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgd2FybkRlcHJlY2F0aW9uLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBJbnB1dE51bWJlcixcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpEb21FdmVudFNlcnZpY2UsXHJcbiAgTnpEcmFnU2VydmljZSxcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7XHJcbiAgRnJvbVRvSW50ZXJmYWNlLFxyXG4gIE56Q2Fyb3VzZWxEb3RQb3NpdGlvbixcclxuICBOekNhcm91c2VsRWZmZWN0cyxcclxuICBOekNhcm91c2VsU3RyYXRlZ3lSZWdpc3RyeUl0ZW0sXHJcbiAgTlpfQ0FST1VTRUxfQ1VTVE9NX1NUUkFURUdJRVMsXHJcbiAgUG9pbnRlclZlY3RvclxyXG59IGZyb20gJy4vbnotY2Fyb3VzZWwtZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOekNhcm91c2VsQmFzZVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL2Jhc2Utc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBOekNhcm91c2VsT3BhY2l0eVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL29wYWNpdHktc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBOekNhcm91c2VsVHJhbnNmb3JtU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvdHJhbnNmb3JtLXN0cmF0ZWd5JztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjYXJvdXNlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotY2Fyb3VzZWwnLFxyXG4gIGV4cG9ydEFzOiAnbnpDYXJvdXNlbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1jYXJvdXNlbC12ZXJ0aWNhbF0nOiAndmVydGljYWwnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotY2Fyb3VzZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNsaWNrLWRvdHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2xpY2stdHJhY2sge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUpIGNhcm91c2VsQ29udGVudHM6IFF1ZXJ5TGlzdDxOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NsaWNrTGlzdCcsIHsgc3RhdGljOiBmYWxzZSB9KSBzbGlja0xpc3Q6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnc2xpY2tUcmFjaycsIHsgc3RhdGljOiBmYWxzZSB9KSBzbGlja1RyYWNrOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBuekRvdFJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlciB9PjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdzY3JvbGx4JykgbnpFZmZlY3Q6IE56Q2Fyb3VzZWxFZmZlY3RzO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56RW5hYmxlU3dpcGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgbnpEb3RzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9QbGF5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMzAwMCkgQElucHV0TnVtYmVyKCkgbnpBdXRvUGxheVNwZWVkOiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpUcmFuc2l0aW9uU3BlZWQgPSA1MDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgZ2V0IG56VmVydGljYWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbDtcclxuICB9XHJcblxyXG4gIHNldCBuelZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduelZlcnRpY2FsJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256RG90UG9zaXRpb24nIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLnZlcnRpY2FsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2JvdHRvbScpXHJcbiAgc2V0IG56RG90UG9zaXRpb24odmFsdWU6IE56Q2Fyb3VzZWxEb3RQb3NpdGlvbikge1xyXG4gICAgdGhpcy5fZG90UG9zaXRpb24gPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSA9PT0gJ2xlZnQnIHx8IHZhbHVlID09PSAncmlnaHQnKSB7XHJcbiAgICAgIHRoaXMudmVydGljYWwgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RG90UG9zaXRpb24oKTogTnpDYXJvdXNlbERvdFBvc2l0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLl9kb3RQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2RvdFBvc2l0aW9uOiBOekNhcm91c2VsRG90UG9zaXRpb247XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekJlZm9yZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RnJvbVRvSW50ZXJmYWNlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIGFjdGl2ZUluZGV4ID0gMDtcclxuICBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgc2xpY2tMaXN0RWw6IEhUTUxFbGVtZW50O1xyXG4gIHNsaWNrVHJhY2tFbDogSFRNTEVsZW1lbnQ7XHJcbiAgc3RyYXRlZ3k6IE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3k7XHJcbiAgdmVydGljYWwgPSBmYWxzZTtcclxuICB0cmFuc2l0aW9uSW5Qcm9ncmVzczogbnVtYmVyIHwgbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBnZXN0dXJlUmVjdDogQ2xpZW50UmVjdCB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgcG9pbnRlckRlbHRhOiBQb2ludGVyVmVjdG9yIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpc1RyYW5zaXRpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHJlYWRvbmx5IG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbnpEcmFnU2VydmljZTogTnpEcmFnU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfQ0FST1VTRUxfQ1VTVE9NX1NUUkFURUdJRVMpIHByaXZhdGUgY3VzdG9tU3RyYXRlZ2llczogTnpDYXJvdXNlbFN0cmF0ZWd5UmVnaXN0cnlJdGVtW11cclxuICApIHtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhcm91c2VsJyk7XHJcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zbGlja0xpc3RFbCA9IHRoaXMuc2xpY2tMaXN0Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLnNsaWNrVHJhY2tFbCA9IHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50cy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xyXG4gICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5uekRvbUV2ZW50U2VydmljZVxyXG4gICAgICAucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlLnVucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3luY1N0cmF0ZWd5KCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc3dpdGNoU3RyYXRlZ3koKTtcclxuICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XHJcbiAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xyXG5cclxuICAgIC8vIElmIGVtYmVkZGVkIGluIGFuIGVudHJ5IGNvbXBvbmVudCwgaXQgbWF5IGRvIGluaXRpYWwgcmVuZGVyIGF0IGEgaW5hcHByb3ByaWF0ZSB0aW1lLlxyXG4gICAgLy8gbmdab25lLm9uU3RhYmxlIHdvbid0IGRvIHRoaXMgdHJpY2tcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56RWZmZWN0LCBuekRvdFBvc2l0aW9uIH0gPSBjaGFuZ2VzO1xyXG5cclxuICAgIGlmIChuekVmZmVjdCAmJiAhbnpFZmZlY3QuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuc3dpdGNoU3RyYXRlZ3koKTtcclxuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcclxuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpEb3RQb3NpdGlvbiAmJiAhbnpEb3RQb3NpdGlvbi5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5zd2l0Y2hTdHJhdGVneSgpO1xyXG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xyXG4gICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5uekF1dG9QbGF5IHx8ICF0aGlzLm56QXV0b1BsYXlTcGVlZCkge1xyXG4gICAgICB0aGlzLmNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zY2hlZHVsZU5leHRUcmFuc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5zdHJhdGVneSkge1xyXG4gICAgICB0aGlzLnN0cmF0ZWd5LmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5wcmUoKTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xyXG4gICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ29Ubyh0aGlzLmFjdGl2ZUluZGV4ICsgMSk7XHJcbiAgfVxyXG5cclxuICBwcmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgZ29UbyhpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnRzICYmIHRoaXMuY2Fyb3VzZWxDb250ZW50cy5sZW5ndGggJiYgIXRoaXMuaXNUcmFuc2l0aW5nKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuY2Fyb3VzZWxDb250ZW50cy5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGZyb20gPSB0aGlzLmFjdGl2ZUluZGV4O1xyXG4gICAgICBjb25zdCB0byA9IChpbmRleCArIGxlbmd0aCkgJSBsZW5ndGg7XHJcbiAgICAgIHRoaXMuaXNUcmFuc2l0aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5uekJlZm9yZUNoYW5nZS5lbWl0KHsgZnJvbSwgdG8gfSk7XHJcbiAgICAgIHRoaXMuc3RyYXRlZ3kuc3dpdGNoKHRoaXMuYWN0aXZlSW5kZXgsIGluZGV4KS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVOZXh0VHJhbnNpdGlvbigpO1xyXG4gICAgICAgIHRoaXMubnpBZnRlckNoYW5nZS5lbWl0KGluZGV4KTtcclxuICAgICAgICB0aGlzLmlzVHJhbnNpdGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSh0byk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzd2l0Y2hTdHJhdGVneSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN0cmF0ZWd5KSB7XHJcbiAgICAgIHRoaXMuc3RyYXRlZ3kuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgY3VzdG9tIHN0cmF0ZWdpZXMgZmlyc3QuXHJcbiAgICBjb25zdCBjdXN0b21TdHJhdGVneSA9IHRoaXMuY3VzdG9tU3RyYXRlZ2llcyA/IHRoaXMuY3VzdG9tU3RyYXRlZ2llcy5maW5kKHMgPT4gcy5uYW1lID09PSB0aGlzLm56RWZmZWN0KSA6IG51bGw7XHJcbiAgICBpZiAoY3VzdG9tU3RyYXRlZ3kpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICB0aGlzLnN0cmF0ZWd5ID0gbmV3IChjdXN0b21TdHJhdGVneS5zdHJhdGVneSBhcyBhbnkpKHRoaXMsIHRoaXMuY2RyLCB0aGlzLnJlbmRlcmVyKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RyYXRlZ3kgPVxyXG4gICAgICB0aGlzLm56RWZmZWN0ID09PSAnc2Nyb2xseCdcclxuICAgICAgICA/IG5ldyBOekNhcm91c2VsVHJhbnNmb3JtU3RyYXRlZ3kodGhpcywgdGhpcy5jZHIsIHRoaXMucmVuZGVyZXIpXHJcbiAgICAgICAgOiBuZXcgTnpDYXJvdXNlbE9wYWNpdHlTdHJhdGVneSh0aGlzLCB0aGlzLmNkciwgdGhpcy5yZW5kZXJlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNjaGVkdWxlTmV4dFRyYW5zaXRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpO1xyXG4gICAgaWYgKHRoaXMubnpBdXRvUGxheSAmJiB0aGlzLm56QXV0b1BsYXlTcGVlZCA+IDAgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcyA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ29Ubyh0aGlzLmFjdGl2ZUluZGV4ICsgMSk7XHJcbiAgICAgIH0sIHRoaXMubnpBdXRvUGxheVNwZWVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MpO1xyXG4gICAgICB0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFya0NvbnRlbnRBY3RpdmUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xyXG5cclxuICAgIGlmICh0aGlzLmNhcm91c2VsQ29udGVudHMpIHtcclxuICAgICAgdGhpcy5jYXJvdXNlbENvbnRlbnRzLmZvckVhY2goKHNsaWRlLCBpKSA9PiB7XHJcbiAgICAgICAgc2xpZGUuaXNBY3RpdmUgPSBpbmRleCA9PT0gaTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmFnIGNhcm91c2VsLlxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIHBvaW50ZXJEb3duID0gKGV2ZW50OiBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcgJiYgIXRoaXMuaXNUcmFuc2l0aW5nICYmIHRoaXMubnpFbmFibGVTd2lwZSkge1xyXG4gICAgICB0aGlzLmNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpO1xyXG4gICAgICB0aGlzLmdlc3R1cmVSZWN0ID0gdGhpcy5zbGlja0xpc3RFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIHRoaXMubnpEcmFnU2VydmljZS5yZXF1ZXN0RHJhZ2dpbmdTZXF1ZW5jZShldmVudCkuc3Vic2NyaWJlKFxyXG4gICAgICAgIGRlbHRhID0+IHtcclxuICAgICAgICAgIHRoaXMucG9pbnRlckRlbHRhID0gZGVsdGE7XHJcbiAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zdHJhdGVneS5kcmFnZ2luZyh0aGlzLnBvaW50ZXJEZWx0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5uekVuYWJsZVN3aXBlICYmIHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICBjb25zdCB4RGVsdGEgPSB0aGlzLnBvaW50ZXJEZWx0YSA/IHRoaXMucG9pbnRlckRlbHRhLnggOiAwO1xyXG5cclxuICAgICAgICAgICAgLy8gU3dpdGNoIHRvIGFub3RoZXIgc2xpZGUgaWYgZGVsdGEgaXMgYmlnZ2VyIHRoYW4gdGhpcmQgb2YgdGhlIHdpZHRoLlxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoeERlbHRhKSA+IHRoaXMuZ2VzdHVyZVJlY3QhLndpZHRoIC8gMykge1xyXG4gICAgICAgICAgICAgIHRoaXMuZ29Ubyh4RGVsdGEgPiAwID8gdGhpcy5hY3RpdmVJbmRleCAtIDEgOiB0aGlzLmFjdGl2ZUluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5nb1RvKHRoaXMuYWN0aXZlSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlc3R1cmVSZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyRGVsdGEgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIHN5bmNTdHJhdGVneSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN0cmF0ZWd5KSB7XHJcbiAgICAgIHRoaXMuc3RyYXRlZ3kud2l0aENhcm91c2VsQ29udGVudHModGhpcy5jYXJvdXNlbENvbnRlbnRzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19