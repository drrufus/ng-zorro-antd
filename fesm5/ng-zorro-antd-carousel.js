import { Platform, PlatformModule } from '@angular/cdk/platform';
import { NgIf, NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, ɵsetClassMetadata, Directive, InjectionToken, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtemplate, ɵɵelementEnd, ɵɵreference, ɵɵclassProp, ɵɵadvance, ɵɵproperty, ɵɵpureFunction1, ɵɵtext, ɵɵtextInterpolate, EventEmitter, ChangeDetectorRef, ɵɵdefineComponent, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵviewQuery, ɵɵallocHostVars, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵprojection, ɵɵtemplateRefExtractor, Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, Inject, ContentChildren, ViewChild, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __extends, __decorate, __metadata } from 'tslib';
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { warnDeprecation, NzConfigService, NzDomEventService, NzDragService, WithConfig, InputBoolean, InputNumber } from 'ng-zorro-antd/core';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzCarouselContentDirective = /** @class */ (function () {
    function NzCarouselContentDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this._active = false;
        renderer.addClass(elementRef.nativeElement, 'slick-slide');
    }
    Object.defineProperty(NzCarouselContentDirective.prototype, "isActive", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
            if (this.isActive) {
                this.renderer.addClass(this.el, 'slick-active');
            }
            else {
                this.renderer.removeClass(this.el, 'slick-active');
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ NzCarouselContentDirective.ɵfac = function NzCarouselContentDirective_Factory(t) { return new (t || NzCarouselContentDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzCarouselContentDirective.ɵdir = ɵɵdefineDirective({ type: NzCarouselContentDirective, selectors: [["", "nz-carousel-content", ""]], exportAs: ["nzCarouselContent"] });
    return NzCarouselContentDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCarouselContentDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-carousel-content]',
                exportAs: 'nzCarouselContent'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NZ_CAROUSEL_CUSTOM_STRATEGIES = new InjectionToken('nz-carousel-custom-strategies');

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzCarouselBaseStrategy = /** @class */ (function () {
    function NzCarouselBaseStrategy(carouselComponent, cdr, renderer) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.carouselComponent = carouselComponent;
    }
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "maxIndex", {
        get: function () {
            return this.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "firstEl", {
        get: function () {
            return this.contents[0].el;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "lastEl", {
        get: function () {
            return this.contents[this.maxIndex].el;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize dragging sequences.
     * @param contents
     */
    NzCarouselBaseStrategy.prototype.withCarouselContents = function (contents) {
        // TODO: carousel and its contents should be separated.
        var carousel = this.carouselComponent;
        var rect = carousel.el.getBoundingClientRect();
        this.slickListEl = carousel.slickListEl;
        this.slickTrackEl = carousel.slickTrackEl;
        this.unitWidth = rect.width;
        this.unitHeight = rect.height;
        this.contents = contents ? contents.toArray() : [];
        this.length = this.contents.length;
    };
    /**
     * When user drag the carousel component.
     * @optional
     */
    NzCarouselBaseStrategy.prototype.dragging = function (_vector) { };
    /**
     * Destroy a scroll strategy.
     */
    NzCarouselBaseStrategy.prototype.dispose = function () { };
    NzCarouselBaseStrategy.prototype.getFromToInBoundary = function (f, t) {
        var length = this.maxIndex + 1;
        return { from: (f + length) % length, to: (t + length) % length };
    };
    return NzCarouselBaseStrategy;
}());

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzCarouselOpacityStrategy = /** @class */ (function (_super) {
    __extends(NzCarouselOpacityStrategy, _super);
    function NzCarouselOpacityStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NzCarouselOpacityStrategy.prototype.withCarouselContents = function (contents) {
        var _this = this;
        _super.prototype.withCarouselContents.call(this, contents);
        if (this.contents) {
            this.slickTrackEl.style.width = this.length * this.unitWidth + "px";
            this.contents.forEach(function (content, i) {
                _this.renderer.setStyle(content.el, 'opacity', _this.carouselComponent.activeIndex === i ? '1' : '0');
                _this.renderer.setStyle(content.el, 'position', 'relative');
                _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                _this.renderer.setStyle(content.el, 'left', -_this.unitWidth * i + "px");
                _this.renderer.setStyle(content.el, 'transition', ['opacity 500ms ease 0s', 'visibility 500ms ease 0s']);
            });
        }
    };
    NzCarouselOpacityStrategy.prototype.switch = function (_f, _t) {
        var _this = this;
        var t = this.getFromToInBoundary(_f, _t).to;
        var complete$ = new Subject();
        this.contents.forEach(function (content, i) {
            _this.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
        });
        setTimeout(function () {
            complete$.next();
            complete$.complete();
        }, this.carouselComponent.nzTransitionSpeed);
        return complete$;
    };
    NzCarouselOpacityStrategy.prototype.dispose = function () {
        var _this = this;
        this.contents.forEach(function (content) {
            _this.renderer.setStyle(content.el, 'transition', null);
        });
        _super.prototype.dispose.call(this);
    };
    return NzCarouselOpacityStrategy;
}(NzCarouselBaseStrategy));

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzCarouselTransformStrategy = /** @class */ (function (_super) {
    __extends(NzCarouselTransformStrategy, _super);
    function NzCarouselTransformStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDragging = false;
        _this.isTransitioning = false;
        return _this;
    }
    Object.defineProperty(NzCarouselTransformStrategy.prototype, "vertical", {
        get: function () {
            return this.carouselComponent.vertical;
        },
        enumerable: true,
        configurable: true
    });
    NzCarouselTransformStrategy.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.renderer.setStyle(this.slickTrackEl, 'transform', null);
    };
    NzCarouselTransformStrategy.prototype.withCarouselContents = function (contents) {
        var _this = this;
        _super.prototype.withCarouselContents.call(this, contents);
        var carousel = this.carouselComponent;
        var activeIndex = carousel.activeIndex;
        if (this.contents.length) {
            this.renderer.setStyle(this.slickListEl, 'height', this.unitHeight + "px");
            if (this.vertical) {
                this.renderer.setStyle(this.slickTrackEl, 'width', this.unitWidth + "px");
                this.renderer.setStyle(this.slickTrackEl, 'height', this.length * this.unitHeight + "px");
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -activeIndex * this.unitHeight + "px, 0)");
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'height', this.unitHeight + "px");
                this.renderer.setStyle(this.slickTrackEl, 'width', this.length * this.unitWidth + "px");
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -activeIndex * this.unitWidth + "px, 0, 0)");
            }
            this.contents.forEach(function (content) {
                _this.renderer.setStyle(content.el, 'position', 'relative');
                _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                _this.renderer.setStyle(content.el, 'height', _this.unitHeight + "px");
            });
        }
    };
    NzCarouselTransformStrategy.prototype.switch = function (_f, _t) {
        var _this = this;
        var t = this.getFromToInBoundary(_f, _t).to;
        var complete$ = new Subject();
        this.renderer.setStyle(this.slickTrackEl, 'transition', "transform " + this.carouselComponent.nzTransitionSpeed + "ms ease");
        if (this.vertical) {
            this.verticalTransform(_f, _t);
        }
        else {
            this.horizontalTransform(_f, _t);
        }
        this.isTransitioning = true;
        this.isDragging = false;
        setTimeout(function () {
            _this.renderer.setStyle(_this.slickTrackEl, 'transition', null);
            _this.contents.forEach(function (content) {
                _this.renderer.setStyle(content.el, _this.vertical ? 'top' : 'left', null);
            });
            if (_this.vertical) {
                _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(0, " + -t * _this.unitHeight + "px, 0)");
            }
            else {
                _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(" + -t * _this.unitWidth + "px, 0, 0)");
            }
            _this.isTransitioning = false;
            complete$.next();
            complete$.complete();
        }, this.carouselComponent.nzTransitionSpeed);
        return complete$.asObservable();
    };
    NzCarouselTransformStrategy.prototype.dragging = function (_vector) {
        if (this.isTransitioning) {
            return;
        }
        var activeIndex = this.carouselComponent.activeIndex;
        if (this.carouselComponent.vertical) {
            if (!this.isDragging && this.length > 2) {
                if (activeIndex === this.maxIndex) {
                    this.prepareVerticalContext(true);
                }
                else if (activeIndex === 0) {
                    this.prepareVerticalContext(false);
                }
            }
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + (-activeIndex * this.unitHeight + _vector.x) + "px, 0)");
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
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + (-activeIndex * this.unitWidth + _vector.x) + "px, 0, 0)");
        }
        this.isDragging = true;
    };
    NzCarouselTransformStrategy.prototype.verticalTransform = function (_f, _t) {
        var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
        var needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareVerticalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -_t * this.unitHeight + "px, 0)");
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -t * this.unitHeight + "px, 0");
        }
    };
    NzCarouselTransformStrategy.prototype.horizontalTransform = function (_f, _t) {
        var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
        var needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareHorizontalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -_t * this.unitWidth + "px, 0, 0)");
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -t * this.unitWidth + "px, 0, 0");
        }
    };
    NzCarouselTransformStrategy.prototype.prepareVerticalContext = function (lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'top', this.length * this.unitHeight + "px");
            this.renderer.setStyle(this.lastEl, 'top', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'top', null);
            this.renderer.setStyle(this.lastEl, 'top', -this.unitHeight * this.length + "px");
        }
    };
    NzCarouselTransformStrategy.prototype.prepareHorizontalContext = function (lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'left', this.length * this.unitWidth + "px");
            this.renderer.setStyle(this.lastEl, 'left', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'left', null);
            this.renderer.setStyle(this.lastEl, 'left', -this.unitWidth * this.length + "px");
        }
    };
    return NzCarouselTransformStrategy;
}(NzCarouselBaseStrategy));

var _c0 = ["slickList"];
var _c1 = ["slickTrack"];
function NzCarouselComponent_ul_6_li_1_ng_template_1_Template(rf, ctx) { }
var _c2 = function (a0) { return { $implicit: a0 }; };
function NzCarouselComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r134 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 9);
    ɵɵlistener("click", function NzCarouselComponent_ul_6_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r134); var i_r131 = ctx.index; var ctx_r133 = ɵɵnextContext(2); return ctx_r133.goTo(i_r131); });
    ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    var content_r130 = ctx.$implicit;
    var i_r131 = ctx.index;
    var ctx_r129 = ɵɵnextContext(2);
    var _r127 = ɵɵreference(8);
    ɵɵclassProp("slick-active", content_r130.isActive);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r129.nzDotRender || _r127)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c2, i_r131));
} }
function NzCarouselComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 7);
    ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_Template, 2, 5, "li", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r126 = ɵɵnextContext();
    ɵɵclassProp("slick-dots-top", ctx_r126.nzDotPosition === "top")("slick-dots-bottom", ctx_r126.nzDotPosition === "bottom")("slick-dots-left", ctx_r126.nzDotPosition === "left")("slick-dots-right", ctx_r126.nzDotPosition === "right");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r126.carouselContents);
} }
function NzCarouselComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var index_r135 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(index_r135 + 1);
} }
var _c3 = ["*"];
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
        this.pointerDown = function (event) {
            if (!_this.isDragging && !_this.isTransiting && _this.nzEnableSwipe) {
                _this.clearScheduledTransition();
                _this.gestureRect = _this.slickListEl.getBoundingClientRect();
                _this.nzDragService.requestDraggingSequence(event).subscribe(function (delta) {
                    _this.pointerDelta = delta;
                    _this.isDragging = true;
                    _this.strategy.dragging(_this.pointerDelta);
                }, function () { }, function () {
                    if (_this.nzEnableSwipe && _this.isDragging) {
                        var xDelta = _this.pointerDelta ? _this.pointerDelta.x : 0;
                        // Switch to another slide if delta is bigger than third of the width.
                        if (Math.abs(xDelta) > _this.gestureRect.width / 3) {
                            _this.goTo(xDelta > 0 ? _this.activeIndex - 1 : _this.activeIndex + 1);
                        }
                        else {
                            _this.goTo(_this.activeIndex);
                        }
                        _this.gestureRect = null;
                        _this.pointerDelta = null;
                    }
                    _this.isDragging = false;
                });
            }
        };
        this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(NzCarouselComponent.prototype, "nzVertical", {
        get: function () {
            return this.vertical;
        },
        set: function (value) {
            warnDeprecation("'nzVertical' is deprecated and will be removed in 9.0.0. Please use 'nzDotPosition' instead.");
            this.vertical = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzDotPosition", {
        get: function () {
            return this._dotPosition;
        },
        set: function (value) {
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
    NzCarouselComponent.prototype.ngAfterContentInit = function () {
        this.markContentActive(0);
    };
    NzCarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.slickListEl = this.slickList.nativeElement;
        this.slickTrackEl = this.slickTrack.nativeElement;
        this.carouselContents.changes.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.markContentActive(0);
            _this.syncStrategy();
        });
        this.nzDomEventService
            .registerResizeListener()
            .pipe(takeUntil(this.destroy$), finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
            .subscribe(function () {
            _this.syncStrategy();
        });
        this.switchStrategy();
        this.markContentActive(0);
        this.syncStrategy();
        // If embedded in an entry component, it may do initial render at a inappropriate time.
        // ngZone.onStable won't do this trick
        Promise.resolve().then(function () {
            _this.syncStrategy();
        });
    };
    NzCarouselComponent.prototype.ngOnChanges = function (changes) {
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
    NzCarouselComponent.prototype.ngOnDestroy = function () {
        this.clearScheduledTransition();
        if (this.strategy) {
            this.strategy.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzCarouselComponent.prototype.onKeyDown = function (e) {
        if (e.keyCode === LEFT_ARROW) {
            e.preventDefault();
            this.pre();
        }
        else if (e.keyCode === RIGHT_ARROW) {
            this.next();
            e.preventDefault();
        }
    };
    NzCarouselComponent.prototype.next = function () {
        this.goTo(this.activeIndex + 1);
    };
    NzCarouselComponent.prototype.pre = function () {
        this.goTo(this.activeIndex - 1);
    };
    NzCarouselComponent.prototype.goTo = function (index) {
        var _this = this;
        if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
            var length_1 = this.carouselContents.length;
            var from = this.activeIndex;
            var to = (index + length_1) % length_1;
            this.isTransiting = true;
            this.nzBeforeChange.emit({ from: from, to: to });
            this.strategy.switch(this.activeIndex, index).subscribe(function () {
                _this.scheduleNextTransition();
                _this.nzAfterChange.emit(index);
                _this.isTransiting = false;
            });
            this.markContentActive(to);
            this.cdr.markForCheck();
        }
    };
    NzCarouselComponent.prototype.switchStrategy = function () {
        var _this = this;
        if (this.strategy) {
            this.strategy.dispose();
        }
        // Load custom strategies first.
        var customStrategy = this.customStrategies ? this.customStrategies.find(function (s) { return s.name === _this.nzEffect; }) : null;
        if (customStrategy) {
            // tslint:disable-next-line:no-any
            this.strategy = new customStrategy.strategy(this, this.cdr, this.renderer);
            return;
        }
        this.strategy =
            this.nzEffect === 'scrollx'
                ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer)
                : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer);
    };
    NzCarouselComponent.prototype.scheduleNextTransition = function () {
        var _this = this;
        this.clearScheduledTransition();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
            this.transitionInProgress = setTimeout(function () {
                _this.goTo(_this.activeIndex + 1);
            }, this.nzAutoPlaySpeed);
        }
    };
    NzCarouselComponent.prototype.clearScheduledTransition = function () {
        if (this.transitionInProgress) {
            clearTimeout(this.transitionInProgress);
            this.transitionInProgress = null;
        }
    };
    NzCarouselComponent.prototype.markContentActive = function (index) {
        this.activeIndex = index;
        if (this.carouselContents) {
            this.carouselContents.forEach(function (slide, i) {
                slide.isActive = index === i;
            });
        }
        this.cdr.markForCheck();
    };
    NzCarouselComponent.prototype.syncStrategy = function () {
        if (this.strategy) {
            this.strategy.withCarouselContents(this.carouselContents);
        }
    };
    /** @nocollapse */ NzCarouselComponent.ɵfac = function NzCarouselComponent_Factory(t) { return new (t || NzCarouselComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzDomEventService), ɵɵdirectiveInject(NzDragService), ɵɵdirectiveInject(NZ_CAROUSEL_CUSTOM_STRATEGIES, 8)); };
    /** @nocollapse */ NzCarouselComponent.ɵcmp = ɵɵdefineComponent({ type: NzCarouselComponent, selectors: [["nz-carousel"]], contentQueries: function NzCarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzCarouselContentDirective, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.carouselContents = _t);
        } }, viewQuery: function NzCarouselComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
            ɵɵviewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slickList = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slickTrack = _t.first);
        } }, hostBindings: function NzCarouselComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-carousel-vertical", ctx.vertical);
        } }, inputs: { nzDotRender: "nzDotRender", nzEffect: "nzEffect", nzEnableSwipe: "nzEnableSwipe", nzDots: "nzDots", nzAutoPlay: "nzAutoPlay", nzAutoPlaySpeed: "nzAutoPlaySpeed", nzTransitionSpeed: "nzTransitionSpeed", nzVertical: "nzVertical", nzDotPosition: "nzDotPosition" }, outputs: { nzBeforeChange: "nzBeforeChange", nzAfterChange: "nzAfterChange" }, exportAs: ["nzCarousel"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c3, decls: 9, vars: 2, consts: [[1, "slick-initialized", "slick-slider"], ["tabindex", "-1", 1, "slick-list", 3, "keydown", "mousedown", "touchstart"], ["slickList", ""], [1, "slick-track"], ["slickTrack", ""], ["class", "slick-dots", 3, "slick-dots-top", "slick-dots-bottom", "slick-dots-left", "slick-dots-right", 4, "ngIf"], ["renderDotTemplate", ""], [1, "slick-dots"], [3, "slick-active", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzCarouselComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1, 2);
            ɵɵlistener("keydown", function NzCarouselComponent_Template_div_keydown_1_listener($event) { return ctx.onKeyDown($event); })("mousedown", function NzCarouselComponent_Template_div_mousedown_1_listener($event) { return ctx.pointerDown($event); })("touchstart", function NzCarouselComponent_Template_div_touchstart_1_listener($event) { return ctx.pointerDown($event); });
            ɵɵelementStart(3, "div", 3, 4);
            ɵɵprojection(5);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(6, NzCarouselComponent_ul_6_Template, 2, 5, "ul", 5);
            ɵɵelementEnd();
            ɵɵtemplate(7, NzCarouselComponent_ng_template_7_Template, 2, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            ɵɵclassProp("slick-vertical", ctx.nzVertical);
            ɵɵadvance(6);
            ɵɵproperty("ngIf", ctx.nzDots);
        } }, directives: [NgIf, NgForOf, NgTemplateOutlet], styles: ["\n      nz-carousel {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
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
    return NzCarouselComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCarouselComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-carousel',
                exportAs: 'nzCarousel',
                preserveWhitespaces: false,
                templateUrl: './nz-carousel.component.html',
                host: {
                    '[class.ant-carousel-vertical]': 'vertical'
                },
                styles: [
                    "\n      nz-carousel {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: NzConfigService }, { type: Renderer2 }, { type: ChangeDetectorRef }, { type: Platform }, { type: NzDomEventService }, { type: NzDragService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_CAROUSEL_CUSTOM_STRATEGIES]
            }] }]; }, { carouselContents: [{
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
        }], nzTransitionSpeed: [{
            type: Input
        }], nzVertical: [{
            type: Input
        }], nzDotPosition: [{
            type: Input
        }], nzBeforeChange: [{
            type: Output
        }], nzAfterChange: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzCarouselModule = /** @class */ (function () {
    function NzCarouselModule() {
    }
    /** @nocollapse */ NzCarouselModule.ɵmod = ɵɵdefineNgModule({ type: NzCarouselModule });
    /** @nocollapse */ NzCarouselModule.ɵinj = ɵɵdefineInjector({ factory: function NzCarouselModule_Factory(t) { return new (t || NzCarouselModule)(); }, imports: [[CommonModule, PlatformModule]] });
    return NzCarouselModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzCarouselModule, { declarations: [NzCarouselComponent, NzCarouselContentDirective], imports: [CommonModule, PlatformModule], exports: [NzCarouselComponent, NzCarouselContentDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCarouselModule, [{
        type: NgModule,
        args: [{
                declarations: [NzCarouselComponent, NzCarouselContentDirective],
                exports: [NzCarouselComponent, NzCarouselContentDirective],
                imports: [CommonModule, PlatformModule]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NZ_CAROUSEL_CUSTOM_STRATEGIES, NzCarouselBaseStrategy, NzCarouselComponent, NzCarouselContentDirective, NzCarouselModule };
//# sourceMappingURL=ng-zorro-antd-carousel.js.map
