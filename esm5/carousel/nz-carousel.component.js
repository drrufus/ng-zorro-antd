import { __decorate, __metadata } from "tslib";
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
import { InputBoolean, InputNumber, NzConfigService, NzDomEventService, NzDragService, warnDeprecation, WithConfig } from 'ng-zorro-antd/core';
import { NzCarouselContentDirective } from './nz-carousel-content.directive';
import { NZ_CAROUSEL_CUSTOM_STRATEGIES } from './nz-carousel-definitions';
import { NzCarouselOpacityStrategy } from './strategies/opacity-strategy';
import { NzCarouselTransformStrategy } from './strategies/transform-strategy';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/common";
var _c0 = ["slickList"];
var _c1 = ["slickTrack"];
function NzCarouselComponent_ul_6_li_1_ng_template_1_Template(rf, ctx) { }
var _c2 = function (a0) { return { $implicit: a0 }; };
function NzCarouselComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r134 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 9);
    i0.ɵɵlistener("click", function NzCarouselComponent_ul_6_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r134); var i_r131 = ctx.index; var ctx_r133 = i0.ɵɵnextContext(2); return ctx_r133.goTo(i_r131); });
    i0.ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var content_r130 = ctx.$implicit;
    var i_r131 = ctx.index;
    var ctx_r129 = i0.ɵɵnextContext(2);
    var _r127 = i0.ɵɵreference(8);
    i0.ɵɵclassProp("slick-active", content_r130.isActive);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r129.nzDotRender || _r127)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c2, i_r131));
} }
function NzCarouselComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 7);
    i0.ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_Template, 2, 5, "li", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r126 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("slick-dots-top", ctx_r126.nzDotPosition === "top")("slick-dots-bottom", ctx_r126.nzDotPosition === "bottom")("slick-dots-left", ctx_r126.nzDotPosition === "left")("slick-dots-right", ctx_r126.nzDotPosition === "right");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r126.carouselContents);
} }
function NzCarouselComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var index_r135 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(index_r135 + 1);
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
    /** @nocollapse */ NzCarouselComponent.ɵfac = function NzCarouselComponent_Factory(t) { return new (t || NzCarouselComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i1.NzDomEventService), i0.ɵɵdirectiveInject(i1.NzDragService), i0.ɵɵdirectiveInject(NZ_CAROUSEL_CUSTOM_STRATEGIES, 8)); };
    /** @nocollapse */ NzCarouselComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCarouselComponent, selectors: [["nz-carousel"]], contentQueries: function NzCarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzCarouselContentDirective, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.carouselContents = _t);
        } }, viewQuery: function NzCarouselComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slickList = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slickTrack = _t.first);
        } }, hostBindings: function NzCarouselComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(1);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-carousel-vertical", ctx.vertical);
        } }, inputs: { nzDotRender: "nzDotRender", nzEffect: "nzEffect", nzEnableSwipe: "nzEnableSwipe", nzDots: "nzDots", nzAutoPlay: "nzAutoPlay", nzAutoPlaySpeed: "nzAutoPlaySpeed", nzTransitionSpeed: "nzTransitionSpeed", nzVertical: "nzVertical", nzDotPosition: "nzDotPosition" }, outputs: { nzBeforeChange: "nzBeforeChange", nzAfterChange: "nzAfterChange" }, exportAs: ["nzCarousel"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c3, decls: 9, vars: 2, consts: [[1, "slick-initialized", "slick-slider"], ["tabindex", "-1", 1, "slick-list", 3, "keydown", "mousedown", "touchstart"], ["slickList", ""], [1, "slick-track"], ["slickTrack", ""], ["class", "slick-dots", 3, "slick-dots-top", "slick-dots-bottom", "slick-dots-left", "slick-dots-right", 4, "ngIf"], ["renderDotTemplate", ""], [1, "slick-dots"], [3, "slick-active", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzCarouselComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1, 2);
            i0.ɵɵlistener("keydown", function NzCarouselComponent_Template_div_keydown_1_listener($event) { return ctx.onKeyDown($event); })("mousedown", function NzCarouselComponent_Template_div_mousedown_1_listener($event) { return ctx.pointerDown($event); })("touchstart", function NzCarouselComponent_Template_div_touchstart_1_listener($event) { return ctx.pointerDown($event); });
            i0.ɵɵelementStart(3, "div", 3, 4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, NzCarouselComponent_ul_6_Template, 2, 5, "ul", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, NzCarouselComponent_ng_template_7_Template, 2, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵclassProp("slick-vertical", ctx.nzVertical);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.nzDots);
        } }, directives: [i3.NgIf, i3.NgForOf, i3.NgTemplateOutlet], styles: ["\n      nz-carousel {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
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
export { NzCarouselComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCarouselComponent, [{
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
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzConfigService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i2.Platform }, { type: i1.NzDomEventService }, { type: i1.NzDragService }, { type: undefined, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbIm56LWNhcm91c2VsLmNvbXBvbmVudC50cyIsIm56LWNhcm91c2VsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFDTCxZQUFZLEVBQ1osV0FBVyxFQUNYLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGVBQWUsRUFDZixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBRUwsNkJBQTZCLEVBSzlCLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7Ozs7O0lDakMxRSw2QkFLRTtJQUZBLDBOQUFpQjtJ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QUssRUFBRTs7a0JBRXpDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQVdMLEtBQUs7O2tCQWlCTCxNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIElucHV0Qm9vbGVhbixcclxuICBJbnB1dE51bWJlcixcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpEb21FdmVudFNlcnZpY2UsXHJcbiAgTnpEcmFnU2VydmljZSxcclxuICB3YXJuRGVwcmVjYXRpb24sXHJcbiAgV2l0aENvbmZpZ1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1xyXG4gIEZyb21Ub0ludGVyZmFjZSxcclxuICBOWl9DQVJPVVNFTF9DVVNUT01fU1RSQVRFR0lFUyxcclxuICBOekNhcm91c2VsRG90UG9zaXRpb24sXHJcbiAgTnpDYXJvdXNlbEVmZmVjdHMsXHJcbiAgTnpDYXJvdXNlbFN0cmF0ZWd5UmVnaXN0cnlJdGVtLFxyXG4gIFBvaW50ZXJWZWN0b3JcclxufSBmcm9tICcuL256LWNhcm91c2VsLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9iYXNlLXN0cmF0ZWd5JztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbE9wYWNpdHlTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9vcGFjaXR5LXN0cmF0ZWd5JztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbFRyYW5zZm9ybVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL3RyYW5zZm9ybS1zdHJhdGVneSc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnY2Fyb3VzZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWNhcm91c2VsJyxcclxuICBleHBvcnRBczogJ256Q2Fyb3VzZWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtY2Fyb3VzZWwtdmVydGljYWxdJzogJ3ZlcnRpY2FsJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWNhcm91c2VsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zbGljay1kb3RzIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNsaWNrLXRyYWNrIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBAQ29udGVudENoaWxkcmVuKE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSBjYXJvdXNlbENvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+O1xyXG5cclxuICBAVmlld0NoaWxkKCdzbGlja0xpc3QnLCB7IHN0YXRpYzogZmFsc2UgfSkgc2xpY2tMaXN0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3NsaWNrVHJhY2snLCB7IHN0YXRpYzogZmFsc2UgfSkgc2xpY2tUcmFjazogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgbnpEb3RSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXIgfT47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnc2Nyb2xseCcpIG56RWZmZWN0OiBOekNhcm91c2VsRWZmZWN0cztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuekVuYWJsZVN3aXBlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56RG90czogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvUGxheTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDMwMDApIEBJbnB1dE51bWJlcigpIG56QXV0b1BsYXlTcGVlZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56VHJhbnNpdGlvblNwZWVkID0gNTAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGdldCBuelZlcnRpY2FsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljYWw7XHJcbiAgfVxyXG5cclxuICBzZXQgbnpWZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpWZXJ0aWNhbCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduekRvdFBvc2l0aW9uJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy52ZXJ0aWNhbCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdib3R0b20nKVxyXG4gIHNldCBuekRvdFBvc2l0aW9uKHZhbHVlOiBOekNhcm91c2VsRG90UG9zaXRpb24pIHtcclxuICAgIHRoaXMuX2RvdFBvc2l0aW9uID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgPT09ICdsZWZ0JyB8fCB2YWx1ZSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICB0aGlzLnZlcnRpY2FsID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmVydGljYWwgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekRvdFBvc2l0aW9uKCk6IE56Q2Fyb3VzZWxEb3RQb3NpdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZG90UG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kb3RQb3NpdGlvbjogTnpDYXJvdXNlbERvdFBvc2l0aW9uO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpCZWZvcmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZyb21Ub0ludGVyZmFjZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBhY3RpdmVJbmRleCA9IDA7XHJcbiAgZWw6IEhUTUxFbGVtZW50O1xyXG4gIHNsaWNrTGlzdEVsOiBIVE1MRWxlbWVudDtcclxuICBzbGlja1RyYWNrRWw6IEhUTUxFbGVtZW50O1xyXG4gIHN0cmF0ZWd5OiBOekNhcm91c2VsQmFzZVN0cmF0ZWd5O1xyXG4gIHZlcnRpY2FsID0gZmFsc2U7XHJcbiAgdHJhbnNpdGlvbkluUHJvZ3Jlc3M6IG51bWJlciB8IG51bGw7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgZ2VzdHVyZVJlY3Q6IENsaWVudFJlY3QgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIHBvaW50ZXJEZWx0YTogUG9pbnRlclZlY3RvciB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgaXNUcmFuc2l0aW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc0RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyByZWFkb25seSBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG56RHJhZ1NlcnZpY2U6IE56RHJhZ1NlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0NBUk9VU0VMX0NVU1RPTV9TVFJBVEVHSUVTKSBwcml2YXRlIGN1c3RvbVN0cmF0ZWdpZXM6IE56Q2Fyb3VzZWxTdHJhdGVneVJlZ2lzdHJ5SXRlbVtdXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJvdXNlbCcpO1xyXG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2xpY2tMaXN0RWwgPSB0aGlzLnNsaWNrTGlzdC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5zbGlja1RyYWNrRWwgPSB0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudHMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcclxuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubnpEb21FdmVudFNlcnZpY2VcclxuICAgICAgLnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5uekRvbUV2ZW50U2VydmljZS51bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLnN3aXRjaFN0cmF0ZWd5KCk7XHJcbiAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xyXG4gICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcclxuXHJcbiAgICAvLyBJZiBlbWJlZGRlZCBpbiBhbiBlbnRyeSBjb21wb25lbnQsIGl0IG1heSBkbyBpbml0aWFsIHJlbmRlciBhdCBhIGluYXBwcm9wcmlhdGUgdGltZS5cclxuICAgIC8vIG5nWm9uZS5vblN0YWJsZSB3b24ndCBkbyB0aGlzIHRyaWNrXHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuekVmZmVjdCwgbnpEb3RQb3NpdGlvbiB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAobnpFZmZlY3QgJiYgIW56RWZmZWN0LmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnN3aXRjaFN0cmF0ZWd5KCk7XHJcbiAgICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XHJcbiAgICAgIHRoaXMuc3luY1N0cmF0ZWd5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56RG90UG9zaXRpb24gJiYgIW56RG90UG9zaXRpb24uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuc3dpdGNoU3RyYXRlZ3koKTtcclxuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcclxuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubnpBdXRvUGxheSB8fCAhdGhpcy5uekF1dG9QbGF5U3BlZWQpIHtcclxuICAgICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVOZXh0VHJhbnNpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpO1xyXG4gICAgaWYgKHRoaXMuc3RyYXRlZ3kpIHtcclxuICAgICAgdGhpcy5zdHJhdGVneS5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMucHJlKCk7XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcclxuICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCArIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb1RvKHRoaXMuYWN0aXZlSW5kZXggLSAxKTtcclxuICB9XHJcblxyXG4gIGdvVG8oaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50cyAmJiB0aGlzLmNhcm91c2VsQ29udGVudHMubGVuZ3RoICYmICF0aGlzLmlzVHJhbnNpdGluZykge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNhcm91c2VsQ29udGVudHMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBmcm9tID0gdGhpcy5hY3RpdmVJbmRleDtcclxuICAgICAgY29uc3QgdG8gPSAoaW5kZXggKyBsZW5ndGgpICUgbGVuZ3RoO1xyXG4gICAgICB0aGlzLmlzVHJhbnNpdGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMubnpCZWZvcmVDaGFuZ2UuZW1pdCh7IGZyb20sIHRvIH0pO1xyXG4gICAgICB0aGlzLnN0cmF0ZWd5LnN3aXRjaCh0aGlzLmFjdGl2ZUluZGV4LCBpbmRleCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlTmV4dFRyYW5zaXRpb24oKTtcclxuICAgICAgICB0aGlzLm56QWZ0ZXJDaGFuZ2UuZW1pdChpbmRleCk7XHJcbiAgICAgICAgdGhpcy5pc1RyYW5zaXRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUodG8pO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3dpdGNoU3RyYXRlZ3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdHJhdGVneSkge1xyXG4gICAgICB0aGlzLnN0cmF0ZWd5LmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2FkIGN1c3RvbSBzdHJhdGVnaWVzIGZpcnN0LlxyXG4gICAgY29uc3QgY3VzdG9tU3RyYXRlZ3kgPSB0aGlzLmN1c3RvbVN0cmF0ZWdpZXMgPyB0aGlzLmN1c3RvbVN0cmF0ZWdpZXMuZmluZChzID0+IHMubmFtZSA9PT0gdGhpcy5uekVmZmVjdCkgOiBudWxsO1xyXG4gICAgaWYgKGN1c3RvbVN0cmF0ZWd5KSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgdGhpcy5zdHJhdGVneSA9IG5ldyAoY3VzdG9tU3RyYXRlZ3kuc3RyYXRlZ3kgYXMgYW55KSh0aGlzLCB0aGlzLmNkciwgdGhpcy5yZW5kZXJlcik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0cmF0ZWd5ID1cclxuICAgICAgdGhpcy5uekVmZmVjdCA9PT0gJ3Njcm9sbHgnXHJcbiAgICAgICAgPyBuZXcgTnpDYXJvdXNlbFRyYW5zZm9ybVN0cmF0ZWd5KHRoaXMsIHRoaXMuY2RyLCB0aGlzLnJlbmRlcmVyKVxyXG4gICAgICAgIDogbmV3IE56Q2Fyb3VzZWxPcGFjaXR5U3RyYXRlZ3kodGhpcywgdGhpcy5jZHIsIHRoaXMucmVuZGVyZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzY2hlZHVsZU5leHRUcmFuc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcclxuICAgIGlmICh0aGlzLm56QXV0b1BsYXkgJiYgdGhpcy5uekF1dG9QbGF5U3BlZWQgPiAwICYmIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCArIDEpO1xyXG4gICAgICB9LCB0aGlzLm56QXV0b1BsYXlTcGVlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzKTtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1hcmtDb250ZW50QWN0aXZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnRzKSB7XHJcbiAgICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50cy5mb3JFYWNoKChzbGlkZSwgaSkgPT4ge1xyXG4gICAgICAgIHNsaWRlLmlzQWN0aXZlID0gaW5kZXggPT09IGk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHJhZyBjYXJvdXNlbC5cclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBwb2ludGVyRG93biA9IChldmVudDogVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmICghdGhpcy5pc0RyYWdnaW5nICYmICF0aGlzLmlzVHJhbnNpdGluZyAmJiB0aGlzLm56RW5hYmxlU3dpcGUpIHtcclxuICAgICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcclxuICAgICAgdGhpcy5nZXN0dXJlUmVjdCA9IHRoaXMuc2xpY2tMaXN0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICB0aGlzLm56RHJhZ1NlcnZpY2UucmVxdWVzdERyYWdnaW5nU2VxdWVuY2UoZXZlbnQpLnN1YnNjcmliZShcclxuICAgICAgICBkZWx0YSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBvaW50ZXJEZWx0YSA9IGRlbHRhO1xyXG4gICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc3RyYXRlZ3kuZHJhZ2dpbmcodGhpcy5wb2ludGVyRGVsdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge30sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMubnpFbmFibGVTd2lwZSAmJiB0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgY29uc3QgeERlbHRhID0gdGhpcy5wb2ludGVyRGVsdGEgPyB0aGlzLnBvaW50ZXJEZWx0YS54IDogMDtcclxuXHJcbiAgICAgICAgICAgIC8vIFN3aXRjaCB0byBhbm90aGVyIHNsaWRlIGlmIGRlbHRhIGlzIGJpZ2dlciB0aGFuIHRoaXJkIG9mIHRoZSB3aWR0aC5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHhEZWx0YSkgPiB0aGlzLmdlc3R1cmVSZWN0IS53aWR0aCAvIDMpIHtcclxuICAgICAgICAgICAgICB0aGlzLmdvVG8oeERlbHRhID4gMCA/IHRoaXMuYWN0aXZlSW5kZXggLSAxIDogdGhpcy5hY3RpdmVJbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuZ29Ubyh0aGlzLmFjdGl2ZUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXN0dXJlUmVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRlckRlbHRhID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBzeW5jU3RyYXRlZ3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdHJhdGVneSkge1xyXG4gICAgICB0aGlzLnN0cmF0ZWd5LndpdGhDYXJvdXNlbENvbnRlbnRzKHRoaXMuY2Fyb3VzZWxDb250ZW50cyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJzbGljay1pbml0aWFsaXplZCBzbGljay1zbGlkZXJcIiBbY2xhc3Muc2xpY2stdmVydGljYWxdPVwibnpWZXJ0aWNhbFwiPlxyXG4gIDxkaXZcclxuICAgICNzbGlja0xpc3RcclxuICAgIGNsYXNzPVwic2xpY2stbGlzdFwiXHJcbiAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAgIChtb3VzZWRvd24pPVwicG9pbnRlckRvd24oJGV2ZW50KVwiXHJcbiAgICAodG91Y2hzdGFydCk9XCJwb2ludGVyRG93bigkZXZlbnQpXCJcclxuICA+XHJcbiAgICA8IS0tIFJlbmRlciBjYXJvdXNlbCBpdGVtcy4gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIiAjc2xpY2tUcmFjaz5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBSZW5kZXIgZG90cy4gLS0+XHJcbiAgPHVsXHJcbiAgICBjbGFzcz1cInNsaWNrLWRvdHNcIlxyXG4gICAgKm5nSWY9XCJuekRvdHNcIlxyXG4gICAgW2NsYXNzLnNsaWNrLWRvdHMtdG9wXT1cIm56RG90UG9zaXRpb24gPT09ICd0b3AnXCJcclxuICAgIFtjbGFzcy5zbGljay1kb3RzLWJvdHRvbV09XCJuekRvdFBvc2l0aW9uID09PSAnYm90dG9tJ1wiXHJcbiAgICBbY2xhc3Muc2xpY2stZG90cy1sZWZ0XT1cIm56RG90UG9zaXRpb24gPT09ICdsZWZ0J1wiXHJcbiAgICBbY2xhc3Muc2xpY2stZG90cy1yaWdodF09XCJuekRvdFBvc2l0aW9uID09PSAncmlnaHQnXCJcclxuICA+XHJcbiAgICA8bGlcclxuICAgICAgKm5nRm9yPVwibGV0IGNvbnRlbnQgb2YgY2Fyb3VzZWxDb250ZW50czsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgIFtjbGFzcy5zbGljay1hY3RpdmVdPVwiY29udGVudC5pc0FjdGl2ZVwiXHJcbiAgICAgIChjbGljayk9XCJnb1RvKGkpXCJcclxuICAgID5cclxuICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpEb3RSZW5kZXIgfHwgcmVuZGVyRG90VGVtcGxhdGVcIlxyXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSB9XCJcclxuICAgICAgPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjcmVuZGVyRG90VGVtcGxhdGUgbGV0LWluZGV4PlxyXG4gIDxidXR0b24+e3sgaW5kZXggKyAxIH19PC9idXR0b24+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==