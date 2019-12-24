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
const _c0 = ["slickList"];
const _c1 = ["slickTrack"];
function NzCarouselComponent_ul_6_li_1_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { $implicit: a0 }; };
function NzCarouselComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r122 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 9);
    i0.ɵɵlistener("click", function NzCarouselComponent_ul_6_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r122); const i_r119 = ctx.index; const ctx_r121 = i0.ɵɵnextContext(2); return ctx_r121.goTo(i_r119); });
    i0.ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const content_r118 = ctx.$implicit;
    const i_r119 = ctx.index;
    const ctx_r117 = i0.ɵɵnextContext(2);
    const _r115 = i0.ɵɵreference(8);
    i0.ɵɵclassProp("slick-active", content_r118.isActive);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r117.nzDotRender || _r115)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c2, i_r119));
} }
function NzCarouselComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 7);
    i0.ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_Template, 2, 5, "li", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r114 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("slick-dots-top", ctx_r114.nzDotPosition === "top")("slick-dots-bottom", ctx_r114.nzDotPosition === "bottom")("slick-dots-left", ctx_r114.nzDotPosition === "left")("slick-dots-right", ctx_r114.nzDotPosition === "right");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r114.carouselContents);
} }
function NzCarouselComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r123 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(index_r123 + 1);
} }
const _c3 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'carousel';
export class NzCarouselComponent {
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
        this.pointerDown = (event) => {
            if (!this.isDragging && !this.isTransiting && this.nzEnableSwipe) {
                this.clearScheduledTransition();
                this.gestureRect = this.slickListEl.getBoundingClientRect();
                this.nzDragService.requestDraggingSequence(event).subscribe(delta => {
                    this.pointerDelta = delta;
                    this.isDragging = true;
                    this.strategy.dragging(this.pointerDelta);
                }, () => { }, () => {
                    if (this.nzEnableSwipe && this.isDragging) {
                        const xDelta = this.pointerDelta ? this.pointerDelta.x : 0;
                        // Switch to another slide if delta is bigger than third of the width.
                        if (Math.abs(xDelta) > this.gestureRect.width / 3) {
                            this.goTo(xDelta > 0 ? this.activeIndex - 1 : this.activeIndex + 1);
                        }
                        else {
                            this.goTo(this.activeIndex);
                        }
                        this.gestureRect = null;
                        this.pointerDelta = null;
                    }
                    this.isDragging = false;
                });
            }
        };
        this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
        this.el = elementRef.nativeElement;
    }
    get nzVertical() {
        return this.vertical;
    }
    set nzVertical(value) {
        warnDeprecation(`'nzVertical' is deprecated and will be removed in 9.0.0. Please use 'nzDotPosition' instead.`);
        this.vertical = value;
    }
    set nzDotPosition(value) {
        this._dotPosition = value;
        if (value === 'left' || value === 'right') {
            this.vertical = true;
        }
        else {
            this.vertical = false;
        }
    }
    get nzDotPosition() {
        return this._dotPosition;
    }
    ngAfterContentInit() {
        this.markContentActive(0);
    }
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.slickListEl = this.slickList.nativeElement;
        this.slickTrackEl = this.slickTrack.nativeElement;
        this.carouselContents.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.markContentActive(0);
            this.syncStrategy();
        });
        this.nzDomEventService
            .registerResizeListener()
            .pipe(takeUntil(this.destroy$), finalize(() => this.nzDomEventService.unregisterResizeListener()))
            .subscribe(() => {
            this.syncStrategy();
        });
        this.switchStrategy();
        this.markContentActive(0);
        this.syncStrategy();
        // If embedded in an entry component, it may do initial render at a inappropriate time.
        // ngZone.onStable won't do this trick
        Promise.resolve().then(() => {
            this.syncStrategy();
        });
    }
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
    ngOnDestroy() {
        this.clearScheduledTransition();
        if (this.strategy) {
            this.strategy.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
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
    next() {
        this.goTo(this.activeIndex + 1);
    }
    pre() {
        this.goTo(this.activeIndex - 1);
    }
    goTo(index) {
        if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
            const length = this.carouselContents.length;
            const from = this.activeIndex;
            const to = (index + length) % length;
            this.isTransiting = true;
            this.nzBeforeChange.emit({ from, to });
            this.strategy.switch(this.activeIndex, index).subscribe(() => {
                this.scheduleNextTransition();
                this.nzAfterChange.emit(index);
                this.isTransiting = false;
            });
            this.markContentActive(to);
            this.cdr.markForCheck();
        }
    }
    switchStrategy() {
        if (this.strategy) {
            this.strategy.dispose();
        }
        // Load custom strategies first.
        const customStrategy = this.customStrategies ? this.customStrategies.find(s => s.name === this.nzEffect) : null;
        if (customStrategy) {
            // tslint:disable-next-line:no-any
            this.strategy = new customStrategy.strategy(this, this.cdr, this.renderer);
            return;
        }
        this.strategy =
            this.nzEffect === 'scrollx'
                ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer)
                : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer);
    }
    scheduleNextTransition() {
        this.clearScheduledTransition();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
            this.transitionInProgress = setTimeout(() => {
                this.goTo(this.activeIndex + 1);
            }, this.nzAutoPlaySpeed);
        }
    }
    clearScheduledTransition() {
        if (this.transitionInProgress) {
            clearTimeout(this.transitionInProgress);
            this.transitionInProgress = null;
        }
    }
    markContentActive(index) {
        this.activeIndex = index;
        if (this.carouselContents) {
            this.carouselContents.forEach((slide, i) => {
                slide.isActive = index === i;
            });
        }
        this.cdr.markForCheck();
    }
    syncStrategy() {
        if (this.strategy) {
            this.strategy.withCarouselContents(this.carouselContents);
        }
    }
}
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
                    `
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
    `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbIm56LWNhcm91c2VsLmNvbXBvbmVudC50cyIsIm56LWNhcm91c2VsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFDTCxZQUFZLEVBQ1osV0FBVyxFQUNYLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGVBQWUsRUFDZixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBRUwsNkJBQTZCLEVBSzlCLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7Ozs7O0lDakMxRSw2QkFLRTtJQUZBLDhOQUFpQjtJ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a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBV0wsS0FBSzs7a0JBaUJMLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IExFRlRfQVJST1csIFJJR0hUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIElucHV0TnVtYmVyLFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOekRvbUV2ZW50U2VydmljZSxcclxuICBOekRyYWdTZXJ2aWNlLFxyXG4gIHdhcm5EZXByZWNhdGlvbixcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7XHJcbiAgRnJvbVRvSW50ZXJmYWNlLFxyXG4gIE5aX0NBUk9VU0VMX0NVU1RPTV9TVFJBVEVHSUVTLFxyXG4gIE56Q2Fyb3VzZWxEb3RQb3NpdGlvbixcclxuICBOekNhcm91c2VsRWZmZWN0cyxcclxuICBOekNhcm91c2VsU3RyYXRlZ3lSZWdpc3RyeUl0ZW0sXHJcbiAgUG9pbnRlclZlY3RvclxyXG59IGZyb20gJy4vbnotY2Fyb3VzZWwtZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOekNhcm91c2VsQmFzZVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL2Jhc2Utc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBOekNhcm91c2VsT3BhY2l0eVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL29wYWNpdHktc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBOekNhcm91c2VsVHJhbnNmb3JtU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvdHJhbnNmb3JtLXN0cmF0ZWd5JztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjYXJvdXNlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotY2Fyb3VzZWwnLFxyXG4gIGV4cG9ydEFzOiAnbnpDYXJvdXNlbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1jYXJvdXNlbC12ZXJ0aWNhbF0nOiAndmVydGljYWwnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotY2Fyb3VzZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNsaWNrLWRvdHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2xpY2stdHJhY2sge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUpIGNhcm91c2VsQ29udGVudHM6IFF1ZXJ5TGlzdDxOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NsaWNrTGlzdCcsIHsgc3RhdGljOiBmYWxzZSB9KSBzbGlja0xpc3Q6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnc2xpY2tUcmFjaycsIHsgc3RhdGljOiBmYWxzZSB9KSBzbGlja1RyYWNrOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBuekRvdFJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlciB9PjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdzY3JvbGx4JykgbnpFZmZlY3Q6IE56Q2Fyb3VzZWxFZmZlY3RzO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56RW5hYmxlU3dpcGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgbnpEb3RzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9QbGF5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMzAwMCkgQElucHV0TnVtYmVyKCkgbnpBdXRvUGxheVNwZWVkOiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpUcmFuc2l0aW9uU3BlZWQgPSA1MDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgZ2V0IG56VmVydGljYWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbDtcclxuICB9XHJcblxyXG4gIHNldCBuelZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduelZlcnRpY2FsJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256RG90UG9zaXRpb24nIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLnZlcnRpY2FsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2JvdHRvbScpXHJcbiAgc2V0IG56RG90UG9zaXRpb24odmFsdWU6IE56Q2Fyb3VzZWxEb3RQb3NpdGlvbikge1xyXG4gICAgdGhpcy5fZG90UG9zaXRpb24gPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSA9PT0gJ2xlZnQnIHx8IHZhbHVlID09PSAncmlnaHQnKSB7XHJcbiAgICAgIHRoaXMudmVydGljYWwgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RG90UG9zaXRpb24oKTogTnpDYXJvdXNlbERvdFBvc2l0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLl9kb3RQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2RvdFBvc2l0aW9uOiBOekNhcm91c2VsRG90UG9zaXRpb247XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekJlZm9yZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RnJvbVRvSW50ZXJmYWNlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIGFjdGl2ZUluZGV4ID0gMDtcclxuICBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgc2xpY2tMaXN0RWw6IEhUTUxFbGVtZW50O1xyXG4gIHNsaWNrVHJhY2tFbDogSFRNTEVsZW1lbnQ7XHJcbiAgc3RyYXRlZ3k6IE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3k7XHJcbiAgdmVydGljYWwgPSBmYWxzZTtcclxuICB0cmFuc2l0aW9uSW5Qcm9ncmVzczogbnVtYmVyIHwgbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBnZXN0dXJlUmVjdDogQ2xpZW50UmVjdCB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgcG9pbnRlckRlbHRhOiBQb2ludGVyVmVjdG9yIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpc1RyYW5zaXRpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHJlYWRvbmx5IG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbnpEcmFnU2VydmljZTogTnpEcmFnU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfQ0FST1VTRUxfQ1VTVE9NX1NUUkFURUdJRVMpIHByaXZhdGUgY3VzdG9tU3RyYXRlZ2llczogTnpDYXJvdXNlbFN0cmF0ZWd5UmVnaXN0cnlJdGVtW11cclxuICApIHtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhcm91c2VsJyk7XHJcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zbGlja0xpc3RFbCA9IHRoaXMuc2xpY2tMaXN0Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLnNsaWNrVHJhY2tFbCA9IHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50cy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xyXG4gICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5uekRvbUV2ZW50U2VydmljZVxyXG4gICAgICAucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlLnVucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3luY1N0cmF0ZWd5KCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc3dpdGNoU3RyYXRlZ3koKTtcclxuICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XHJcbiAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xyXG5cclxuICAgIC8vIElmIGVtYmVkZGVkIGluIGFuIGVudHJ5IGNvbXBvbmVudCwgaXQgbWF5IGRvIGluaXRpYWwgcmVuZGVyIGF0IGEgaW5hcHByb3ByaWF0ZSB0aW1lLlxyXG4gICAgLy8gbmdab25lLm9uU3RhYmxlIHdvbid0IGRvIHRoaXMgdHJpY2tcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56RWZmZWN0LCBuekRvdFBvc2l0aW9uIH0gPSBjaGFuZ2VzO1xyXG5cclxuICAgIGlmIChuekVmZmVjdCAmJiAhbnpFZmZlY3QuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuc3dpdGNoU3RyYXRlZ3koKTtcclxuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcclxuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpEb3RQb3NpdGlvbiAmJiAhbnpEb3RQb3NpdGlvbi5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5zd2l0Y2hTdHJhdGVneSgpO1xyXG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xyXG4gICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5uekF1dG9QbGF5IHx8ICF0aGlzLm56QXV0b1BsYXlTcGVlZCkge1xyXG4gICAgICB0aGlzLmNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zY2hlZHVsZU5leHRUcmFuc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5zdHJhdGVneSkge1xyXG4gICAgICB0aGlzLnN0cmF0ZWd5LmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5wcmUoKTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xyXG4gICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ29Ubyh0aGlzLmFjdGl2ZUluZGV4ICsgMSk7XHJcbiAgfVxyXG5cclxuICBwcmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgZ29UbyhpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnRzICYmIHRoaXMuY2Fyb3VzZWxDb250ZW50cy5sZW5ndGggJiYgIXRoaXMuaXNUcmFuc2l0aW5nKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuY2Fyb3VzZWxDb250ZW50cy5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGZyb20gPSB0aGlzLmFjdGl2ZUluZGV4O1xyXG4gICAgICBjb25zdCB0byA9IChpbmRleCArIGxlbmd0aCkgJSBsZW5ndGg7XHJcbiAgICAgIHRoaXMuaXNUcmFuc2l0aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5uekJlZm9yZUNoYW5nZS5lbWl0KHsgZnJvbSwgdG8gfSk7XHJcbiAgICAgIHRoaXMuc3RyYXRlZ3kuc3dpdGNoKHRoaXMuYWN0aXZlSW5kZXgsIGluZGV4KS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVOZXh0VHJhbnNpdGlvbigpO1xyXG4gICAgICAgIHRoaXMubnpBZnRlckNoYW5nZS5lbWl0KGluZGV4KTtcclxuICAgICAgICB0aGlzLmlzVHJhbnNpdGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSh0byk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzd2l0Y2hTdHJhdGVneSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN0cmF0ZWd5KSB7XHJcbiAgICAgIHRoaXMuc3RyYXRlZ3kuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgY3VzdG9tIHN0cmF0ZWdpZXMgZmlyc3QuXHJcbiAgICBjb25zdCBjdXN0b21TdHJhdGVneSA9IHRoaXMuY3VzdG9tU3RyYXRlZ2llcyA/IHRoaXMuY3VzdG9tU3RyYXRlZ2llcy5maW5kKHMgPT4gcy5uYW1lID09PSB0aGlzLm56RWZmZWN0KSA6IG51bGw7XHJcbiAgICBpZiAoY3VzdG9tU3RyYXRlZ3kpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICB0aGlzLnN0cmF0ZWd5ID0gbmV3IChjdXN0b21TdHJhdGVneS5zdHJhdGVneSBhcyBhbnkpKHRoaXMsIHRoaXMuY2RyLCB0aGlzLnJlbmRlcmVyKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RyYXRlZ3kgPVxyXG4gICAgICB0aGlzLm56RWZmZWN0ID09PSAnc2Nyb2xseCdcclxuICAgICAgICA/IG5ldyBOekNhcm91c2VsVHJhbnNmb3JtU3RyYXRlZ3kodGhpcywgdGhpcy5jZHIsIHRoaXMucmVuZGVyZXIpXHJcbiAgICAgICAgOiBuZXcgTnpDYXJvdXNlbE9wYWNpdHlTdHJhdGVneSh0aGlzLCB0aGlzLmNkciwgdGhpcy5yZW5kZXJlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNjaGVkdWxlTmV4dFRyYW5zaXRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpO1xyXG4gICAgaWYgKHRoaXMubnpBdXRvUGxheSAmJiB0aGlzLm56QXV0b1BsYXlTcGVlZCA+IDAgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcyA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ29Ubyh0aGlzLmFjdGl2ZUluZGV4ICsgMSk7XHJcbiAgICAgIH0sIHRoaXMubnpBdXRvUGxheVNwZWVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MpO1xyXG4gICAgICB0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFya0NvbnRlbnRBY3RpdmUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xyXG5cclxuICAgIGlmICh0aGlzLmNhcm91c2VsQ29udGVudHMpIHtcclxuICAgICAgdGhpcy5jYXJvdXNlbENvbnRlbnRzLmZvckVhY2goKHNsaWRlLCBpKSA9PiB7XHJcbiAgICAgICAgc2xpZGUuaXNBY3RpdmUgPSBpbmRleCA9PT0gaTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmFnIGNhcm91c2VsLlxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIHBvaW50ZXJEb3duID0gKGV2ZW50OiBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcgJiYgIXRoaXMuaXNUcmFuc2l0aW5nICYmIHRoaXMubnpFbmFibGVTd2lwZSkge1xyXG4gICAgICB0aGlzLmNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpO1xyXG4gICAgICB0aGlzLmdlc3R1cmVSZWN0ID0gdGhpcy5zbGlja0xpc3RFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIHRoaXMubnpEcmFnU2VydmljZS5yZXF1ZXN0RHJhZ2dpbmdTZXF1ZW5jZShldmVudCkuc3Vic2NyaWJlKFxyXG4gICAgICAgIGRlbHRhID0+IHtcclxuICAgICAgICAgIHRoaXMucG9pbnRlckRlbHRhID0gZGVsdGE7XHJcbiAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zdHJhdGVneS5kcmFnZ2luZyh0aGlzLnBvaW50ZXJEZWx0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5uekVuYWJsZVN3aXBlICYmIHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICBjb25zdCB4RGVsdGEgPSB0aGlzLnBvaW50ZXJEZWx0YSA/IHRoaXMucG9pbnRlckRlbHRhLnggOiAwO1xyXG5cclxuICAgICAgICAgICAgLy8gU3dpdGNoIHRvIGFub3RoZXIgc2xpZGUgaWYgZGVsdGEgaXMgYmlnZ2VyIHRoYW4gdGhpcmQgb2YgdGhlIHdpZHRoLlxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoeERlbHRhKSA+IHRoaXMuZ2VzdHVyZVJlY3QhLndpZHRoIC8gMykge1xyXG4gICAgICAgICAgICAgIHRoaXMuZ29Ubyh4RGVsdGEgPiAwID8gdGhpcy5hY3RpdmVJbmRleCAtIDEgOiB0aGlzLmFjdGl2ZUluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5nb1RvKHRoaXMuYWN0aXZlSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlc3R1cmVSZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyRGVsdGEgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIHN5bmNTdHJhdGVneSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN0cmF0ZWd5KSB7XHJcbiAgICAgIHRoaXMuc3RyYXRlZ3kud2l0aENhcm91c2VsQ29udGVudHModGhpcy5jYXJvdXNlbENvbnRlbnRzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInNsaWNrLWluaXRpYWxpemVkIHNsaWNrLXNsaWRlclwiIFtjbGFzcy5zbGljay12ZXJ0aWNhbF09XCJuelZlcnRpY2FsXCI+XHJcbiAgPGRpdlxyXG4gICAgI3NsaWNrTGlzdFxyXG4gICAgY2xhc3M9XCJzbGljay1saXN0XCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxyXG4gICAgKG1vdXNlZG93bik9XCJwb2ludGVyRG93bigkZXZlbnQpXCJcclxuICAgICh0b3VjaHN0YXJ0KT1cInBvaW50ZXJEb3duKCRldmVudClcIlxyXG4gID5cclxuICAgIDwhLS0gUmVuZGVyIGNhcm91c2VsIGl0ZW1zLiAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiICNzbGlja1RyYWNrPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8IS0tIFJlbmRlciBkb3RzLiAtLT5cclxuICA8dWxcclxuICAgIGNsYXNzPVwic2xpY2stZG90c1wiXHJcbiAgICAqbmdJZj1cIm56RG90c1wiXHJcbiAgICBbY2xhc3Muc2xpY2stZG90cy10b3BdPVwibnpEb3RQb3NpdGlvbiA9PT0gJ3RvcCdcIlxyXG4gICAgW2NsYXNzLnNsaWNrLWRvdHMtYm90dG9tXT1cIm56RG90UG9zaXRpb24gPT09ICdib3R0b20nXCJcclxuICAgIFtjbGFzcy5zbGljay1kb3RzLWxlZnRdPVwibnpEb3RQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcclxuICAgIFtjbGFzcy5zbGljay1kb3RzLXJpZ2h0XT1cIm56RG90UG9zaXRpb24gPT09ICdyaWdodCdcIlxyXG4gID5cclxuICAgIDxsaVxyXG4gICAgICAqbmdGb3I9XCJsZXQgY29udGVudCBvZiBjYXJvdXNlbENvbnRlbnRzOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgW2NsYXNzLnNsaWNrLWFjdGl2ZV09XCJjb250ZW50LmlzQWN0aXZlXCJcclxuICAgICAgKGNsaWNrKT1cImdvVG8oaSlcIlxyXG4gICAgPlxyXG4gICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJuekRvdFJlbmRlciB8fCByZW5kZXJEb3RUZW1wbGF0ZVwiXHJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpIH1cIlxyXG4gICAgICA+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNyZW5kZXJEb3RUZW1wbGF0ZSBsZXQtaW5kZXg+XHJcbiAgPGJ1dHRvbj57eyBpbmRleCArIDEgfX08L2J1dHRvbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19