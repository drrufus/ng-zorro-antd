import { Platform, PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { Directive, ElementRef, Renderer2, InjectionToken, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Optional, Inject, ContentChildren, ViewChild, Input, Output, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { warnDeprecation, NzConfigService, NzDomEventService, NzDragService, WithConfig, InputBoolean, InputNumber } from 'ng-zorro-antd/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/cdk/platform';
import * as ɵngcc3 from '@angular/common';

const _c0 = ["slickList"];
const _c1 = ["slickTrack"];
function NzCarouselComponent_ul_6_li_1_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { $implicit: a0 }; };
function NzCarouselComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 9);
    ɵngcc0.ɵɵlistener("click", function NzCarouselComponent_ul_6_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const i_r7 = ctx.index; const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.goTo(i_r7); });
    ɵngcc0.ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const content_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    const _r3 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵclassProp("slick-active", content_r6.isActive);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.nzDotRender || _r3)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(4, _c2, i_r7));
} }
function NzCarouselComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 7);
    ɵngcc0.ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_Template, 2, 6, "li", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("slick-dots-top", ctx_r2.nzDotPosition === "top")("slick-dots-bottom", ctx_r2.nzDotPosition === "bottom")("slick-dots-left", ctx_r2.nzDotPosition === "left")("slick-dots-right", ctx_r2.nzDotPosition === "right");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.carouselContents);
} }
function NzCarouselComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r11 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(index_r11 + 1);
} }
const _c3 = ["*"];
class NzCarouselContentDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this._active = false;
        renderer.addClass(elementRef.nativeElement, 'slick-slide');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isActive(value) {
        this._active = value;
        if (this.isActive) {
            this.renderer.addClass(this.el, 'slick-active');
        }
        else {
            this.renderer.removeClass(this.el, 'slick-active');
        }
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this._active;
    }
}
NzCarouselContentDirective.ɵfac = function NzCarouselContentDirective_Factory(t) { return new (t || NzCarouselContentDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzCarouselContentDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzCarouselContentDirective, selectors: [["", "nz-carousel-content", ""]], exportAs: ["nzCarouselContent"] });
/** @nocollapse */
NzCarouselContentDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    NzCarouselContentDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzCarouselContentDirective.prototype._active;
    /**
     * @type {?}
     * @private
     */
    NzCarouselContentDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzCarouselContentDirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzCarouselComponentAsSource() { }
if (false) {
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.carouselContents;
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.el;
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.nzTransitionSpeed;
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.vertical;
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.slickListEl;
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.slickTrackEl;
    /** @type {?} */
    NzCarouselComponentAsSource.prototype.activeIndex;
}
/**
 * @record
 */
function NzCarouselStrategyRegistryItem() { }
if (false) {
    /** @type {?} */
    NzCarouselStrategyRegistryItem.prototype.name;
    /** @type {?} */
    NzCarouselStrategyRegistryItem.prototype.strategy;
}
/** @type {?} */
const NZ_CAROUSEL_CUSTOM_STRATEGIES = new InjectionToken('nz-carousel-custom-strategies');
/**
 * @record
 */
function PointerVector() { }
if (false) {
    /** @type {?} */
    PointerVector.prototype.x;
    /** @type {?} */
    PointerVector.prototype.y;
}
/**
 * @record
 */
function FromToInterface() { }
if (false) {
    /** @type {?} */
    FromToInterface.prototype.from;
    /** @type {?} */
    FromToInterface.prototype.to;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @abstract
 */
class NzCarouselBaseStrategy {
    /**
     * @param {?} carouselComponent
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(carouselComponent, cdr, renderer) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.carouselComponent = carouselComponent;
    }
    /**
     * @protected
     * @return {?}
     */
    get maxIndex() {
        return this.length - 1;
    }
    /**
     * @protected
     * @return {?}
     */
    get firstEl() {
        return this.contents[0].el;
    }
    /**
     * @protected
     * @return {?}
     */
    get lastEl() {
        return this.contents[this.maxIndex].el;
    }
    /**
     * Initialize dragging sequences.
     * @param {?} contents
     * @return {?}
     */
    withCarouselContents(contents) {
        // TODO: carousel and its contents should be separated.
        /** @type {?} */
        const carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        const rect = carousel.el.getBoundingClientRect();
        this.slickListEl = carousel.slickListEl;
        this.slickTrackEl = carousel.slickTrackEl;
        this.unitWidth = rect.width;
        this.unitHeight = rect.height;
        this.contents = contents ? contents.toArray() : [];
        this.length = this.contents.length;
    }
    /**
     * When user drag the carousel component.
     * \@optional
     * @param {?} _vector
     * @return {?}
     */
    dragging(_vector) { }
    /**
     * Destroy a scroll strategy.
     * @return {?}
     */
    dispose() { }
    /**
     * @protected
     * @param {?} f
     * @param {?} t
     * @return {?}
     */
    getFromToInBoundary(f, t) {
        /** @type {?} */
        const length = this.maxIndex + 1;
        return { from: (f + length) % length, to: (t + length) % length };
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.carouselComponent;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.contents;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.slickListEl;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.slickTrackEl;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.length;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.unitWidth;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.unitHeight;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.renderer;
    /**
     * Trigger transition.
     * @abstract
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.switch = function (_f, _t) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCarouselOpacityStrategy extends NzCarouselBaseStrategy {
    /**
     * @param {?} contents
     * @return {?}
     */
    withCarouselContents(contents) {
        super.withCarouselContents(contents);
        if (this.contents) {
            this.slickTrackEl.style.width = `${this.length * this.unitWidth}px`;
            this.contents.forEach((/**
             * @param {?} content
             * @param {?} i
             * @return {?}
             */
            (content, i) => {
                this.renderer.setStyle(content.el, 'opacity', (/** @type {?} */ (this.carouselComponent)).activeIndex === i ? '1' : '0');
                this.renderer.setStyle(content.el, 'position', 'relative');
                this.renderer.setStyle(content.el, 'width', `${this.unitWidth}px`);
                this.renderer.setStyle(content.el, 'left', `${-this.unitWidth * i}px`);
                this.renderer.setStyle(content.el, 'transition', ['opacity 500ms ease 0s', 'visibility 500ms ease 0s']);
            }));
        }
    }
    /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    switch(_f, _t) {
        const { to: t } = this.getFromToInBoundary(_f, _t);
        /** @type {?} */
        const complete$ = new Subject();
        this.contents.forEach((/**
         * @param {?} content
         * @param {?} i
         * @return {?}
         */
        (content, i) => {
            this.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
        }));
        setTimeout((/**
         * @return {?}
         */
        () => {
            complete$.next();
            complete$.complete();
        }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
        return complete$;
    }
    /**
     * @return {?}
     */
    dispose() {
        this.contents.forEach((/**
         * @param {?} content
         * @return {?}
         */
        (content) => {
            this.renderer.setStyle(content.el, 'transition', null);
        }));
        super.dispose();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCarouselTransformStrategy extends NzCarouselBaseStrategy {
    constructor() {
        super(...arguments);
        this.isDragging = false;
        this.isTransitioning = false;
    }
    /**
     * @private
     * @return {?}
     */
    get vertical() {
        return (/** @type {?} */ (this.carouselComponent)).vertical;
    }
    /**
     * @return {?}
     */
    dispose() {
        super.dispose();
        this.renderer.setStyle(this.slickTrackEl, 'transform', null);
    }
    /**
     * @param {?} contents
     * @return {?}
     */
    withCarouselContents(contents) {
        super.withCarouselContents(contents);
        /** @type {?} */
        const carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        const activeIndex = carousel.activeIndex;
        if (this.contents.length) {
            this.renderer.setStyle(this.slickListEl, 'height', `${this.unitHeight}px`);
            if (this.vertical) {
                this.renderer.setStyle(this.slickTrackEl, 'width', `${this.unitWidth}px`);
                this.renderer.setStyle(this.slickTrackEl, 'height', `${this.length * this.unitHeight}px`);
                this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-activeIndex * this.unitHeight}px, 0)`);
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'height', `${this.unitHeight}px`);
                this.renderer.setStyle(this.slickTrackEl, 'width', `${this.length * this.unitWidth}px`);
                this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-activeIndex * this.unitWidth}px, 0, 0)`);
            }
            this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            (content) => {
                this.renderer.setStyle(content.el, 'position', 'relative');
                this.renderer.setStyle(content.el, 'width', `${this.unitWidth}px`);
                this.renderer.setStyle(content.el, 'height', `${this.unitHeight}px`);
            }));
        }
    }
    /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    switch(_f, _t) {
        const { to: t } = this.getFromToInBoundary(_f, _t);
        /** @type {?} */
        const complete$ = new Subject();
        this.renderer.setStyle(this.slickTrackEl, 'transition', `transform ${(/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed}ms ease`);
        if (this.vertical) {
            this.verticalTransform(_f, _t);
        }
        else {
            this.horizontalTransform(_f, _t);
        }
        this.isTransitioning = true;
        this.isDragging = false;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.renderer.setStyle(this.slickTrackEl, 'transition', null);
            this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            (content) => {
                this.renderer.setStyle(content.el, this.vertical ? 'top' : 'left', null);
            }));
            if (this.vertical) {
                this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-t * this.unitHeight}px, 0)`);
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-t * this.unitWidth}px, 0, 0)`);
            }
            this.isTransitioning = false;
            complete$.next();
            complete$.complete();
        }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
        return complete$.asObservable();
    }
    /**
     * @param {?} _vector
     * @return {?}
     */
    dragging(_vector) {
        if (this.isTransitioning) {
            return;
        }
        /** @type {?} */
        const activeIndex = (/** @type {?} */ (this.carouselComponent)).activeIndex;
        if ((/** @type {?} */ (this.carouselComponent)).vertical) {
            if (!this.isDragging && this.length > 2) {
                if (activeIndex === this.maxIndex) {
                    this.prepareVerticalContext(true);
                }
                else if (activeIndex === 0) {
                    this.prepareVerticalContext(false);
                }
            }
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-activeIndex * this.unitHeight + _vector.x}px, 0)`);
        }
        else {
            if (!this.isDragging && this.length > 2) {
                if (activeIndex === this.maxIndex) {
                    this.prepareHorizontalContext(true);
                }
                else if (activeIndex === 0) {
                    this.prepareHorizontalContext(false);
                }
            }
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-activeIndex * this.unitWidth + _vector.x}px, 0, 0)`);
        }
        this.isDragging = true;
    }
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    verticalTransform(_f, _t) {
        const { from: f, to: t } = this.getFromToInBoundary(_f, _t);
        /** @type {?} */
        const needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareVerticalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-_t * this.unitHeight}px, 0)`);
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-t * this.unitHeight}px, 0`);
        }
    }
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    horizontalTransform(_f, _t) {
        const { from: f, to: t } = this.getFromToInBoundary(_f, _t);
        /** @type {?} */
        const needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareHorizontalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-_t * this.unitWidth}px, 0, 0)`);
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-t * this.unitWidth}px, 0, 0`);
        }
    }
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    prepareVerticalContext(lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'top', `${this.length * this.unitHeight}px`);
            this.renderer.setStyle(this.lastEl, 'top', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'top', null);
            this.renderer.setStyle(this.lastEl, 'top', `${-this.unitHeight * this.length}px`);
        }
    }
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    prepareHorizontalContext(lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'left', `${this.length * this.unitWidth}px`);
            this.renderer.setStyle(this.lastEl, 'left', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'left', null);
            this.renderer.setStyle(this.lastEl, 'left', `${-this.unitWidth * this.length}px`);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCarouselTransformStrategy.prototype.isDragging;
    /**
     * @type {?}
     * @private
     */
    NzCarouselTransformStrategy.prototype.isTransitioning;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'carousel';
class NzCarouselComponent {
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
NzCarouselComponent.ɵfac = function NzCarouselComponent_Factory(t) { return new (t || NzCarouselComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzDomEventService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzDragService), ɵngcc0.ɵɵdirectiveInject(NZ_CAROUSEL_CUSTOM_STRATEGIES, 8)); };
NzCarouselComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCarouselComponent, selectors: [["nz-carousel"]], contentQueries: function NzCarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzCarouselContentDirective, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.carouselContents = _t);
    } }, viewQuery: function NzCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.slickList = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.slickTrack = _t.first);
    } }, hostVars: 2, hostBindings: function NzCarouselComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-carousel-vertical", ctx.vertical);
    } }, inputs: { nzTransitionSpeed: "nzTransitionSpeed", nzVertical: "nzVertical", nzDotPosition: "nzDotPosition", nzDotRender: "nzDotRender", nzEffect: "nzEffect", nzEnableSwipe: "nzEnableSwipe", nzDots: "nzDots", nzAutoPlay: "nzAutoPlay", nzAutoPlaySpeed: "nzAutoPlaySpeed" }, outputs: { nzBeforeChange: "nzBeforeChange", nzAfterChange: "nzAfterChange" }, exportAs: ["nzCarousel"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 9, vars: 3, consts: [[1, "slick-initialized", "slick-slider"], ["tabindex", "-1", 1, "slick-list", 3, "keydown", "mousedown", "touchstart"], ["slickList", ""], [1, "slick-track"], ["slickTrack", ""], ["class", "slick-dots", 3, "slick-dots-top", "slick-dots-bottom", "slick-dots-left", "slick-dots-right", 4, "ngIf"], ["renderDotTemplate", ""], [1, "slick-dots"], [3, "slick-active", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1, 2);
        ɵngcc0.ɵɵlistener("keydown", function NzCarouselComponent_Template_div_keydown_1_listener($event) { return ctx.onKeyDown($event); })("mousedown", function NzCarouselComponent_Template_div_mousedown_1_listener($event) { return ctx.pointerDown($event); })("touchstart", function NzCarouselComponent_Template_div_touchstart_1_listener($event) { return ctx.pointerDown($event); });
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NzCarouselComponent_ul_6_Template, 2, 9, "ul", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, NzCarouselComponent_ng_template_7_Template, 2, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("slick-vertical", ctx.nzVertical);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzDots);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc3.NgTemplateOutlet], styles: ["\n      nz-carousel {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
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
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'scrollx'),
    __metadata("design:type", String)
], NzCarouselComponent.prototype, "nzEffect", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    __metadata("design:type", Boolean)
], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    __metadata("design:type", Boolean)
], NzCarouselComponent.prototype, "nzDots", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 3000), InputNumber(),
    __metadata("design:type", Number)
], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NzCarouselComponent.prototype, "nzVertical", null);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'bottom'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NzCarouselComponent.prototype, "nzDotPosition", null);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCarouselContentDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-carousel-content]',
                exportAs: 'nzCarouselContent'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCarouselComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Platform }, { type: ɵngcc1.NzDomEventService }, { type: ɵngcc1.NzDragService }, { type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_CAROUSEL_CUSTOM_STRATEGIES]
            }] }]; }, { nzTransitionSpeed: [{
            type: Input
        }], nzBeforeChange: [{
            type: Output
        }], nzAfterChange: [{
            type: Output
        }], nzVertical: [{
            type: Input
        }], nzDotPosition: [{
            type: Input
        }], carouselContents: [{
            type: ContentChildren,
            args: [NzCarouselContentDirective]
        }], slickList: [{
            type: ViewChild,
            args: ['slickList', { static: false }]
        }], slickTrack: [{
            type: ViewChild,
            args: ['slickTrack', { static: false }]
        }], nzDotRender: [{
            type: Input
        }], nzEffect: [{
            type: Input
        }], nzEnableSwipe: [{
            type: Input
        }], nzDots: [{
            type: Input
        }], nzAutoPlay: [{
            type: Input
        }], nzAutoPlaySpeed: [{
            type: Input
        }] }); })();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCarouselModule {
}
NzCarouselModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCarouselModule });
NzCarouselModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCarouselModule_Factory(t) { return new (t || NzCarouselModule)(); }, imports: [[CommonModule, PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCarouselModule, { declarations: function () { return [NzCarouselComponent,
        NzCarouselContentDirective]; }, imports: function () { return [CommonModule, PlatformModule]; }, exports: function () { return [NzCarouselComponent,
        NzCarouselContentDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCarouselModule, [{
        type: NgModule,
        args: [{
                declarations: [NzCarouselComponent, NzCarouselContentDirective],
                exports: [NzCarouselComponent, NzCarouselContentDirective],
                imports: [CommonModule, PlatformModule]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NZ_CAROUSEL_CUSTOM_STRATEGIES, NzCarouselBaseStrategy, NzCarouselComponent, NzCarouselContentDirective, NzCarouselModule };

//# sourceMappingURL=ng-zorro-antd-carousel.js.map