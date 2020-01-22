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
import { Subject } from 'rxjs';
import { NzCarouselBaseStrategy } from './base-strategy';
var NzCarouselTransformStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(NzCarouselTransformStrategy, _super);
    function NzCarouselTransformStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDragging = false;
        _this.isTransitioning = false;
        return _this;
    }
    Object.defineProperty(NzCarouselTransformStrategy.prototype, "vertical", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.carouselComponent)).vertical;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.dispose = /**
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        this.renderer.setStyle(this.slickTrackEl, 'transform', null);
    };
    /**
     * @param {?} contents
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.withCarouselContents = /**
     * @param {?} contents
     * @return {?}
     */
    function (contents) {
        var _this = this;
        _super.prototype.withCarouselContents.call(this, contents);
        /** @type {?} */
        var carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
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
            this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            function (content) {
                _this.renderer.setStyle(content.el, 'position', 'relative');
                _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                _this.renderer.setStyle(content.el, 'height', _this.unitHeight + "px");
            }));
        }
    };
    /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.switch = /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _this = this;
        var t = this.getFromToInBoundary(_f, _t).to;
        /** @type {?} */
        var complete$ = new Subject();
        this.renderer.setStyle(this.slickTrackEl, 'transition', "transform " + (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed + "ms ease");
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
        function () {
            _this.renderer.setStyle(_this.slickTrackEl, 'transition', null);
            _this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            function (content) {
                _this.renderer.setStyle(content.el, _this.vertical ? 'top' : 'left', null);
            }));
            if (_this.vertical) {
                _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(0, " + -t * _this.unitHeight + "px, 0)");
            }
            else {
                _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(" + -t * _this.unitWidth + "px, 0, 0)");
            }
            _this.isTransitioning = false;
            complete$.next();
            complete$.complete();
        }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
        return complete$.asObservable();
    };
    /**
     * @param {?} _vector
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.dragging = /**
     * @param {?} _vector
     * @return {?}
     */
    function (_vector) {
        if (this.isTransitioning) {
            return;
        }
        /** @type {?} */
        var activeIndex = (/** @type {?} */ (this.carouselComponent)).activeIndex;
        if ((/** @type {?} */ (this.carouselComponent)).vertical) {
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
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.verticalTransform = /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
        /** @type {?} */
        var needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareVerticalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -_t * this.unitHeight + "px, 0)");
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -t * this.unitHeight + "px, 0");
        }
    };
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.horizontalTransform = /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
        /** @type {?} */
        var needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareHorizontalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -_t * this.unitWidth + "px, 0, 0)");
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -t * this.unitWidth + "px, 0, 0");
        }
    };
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.prepareVerticalContext = /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    function (lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'top', this.length * this.unitHeight + "px");
            this.renderer.setStyle(this.lastEl, 'top', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'top', null);
            this.renderer.setStyle(this.lastEl, 'top', -this.unitHeight * this.length + "px");
        }
    };
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.prepareHorizontalContext = /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    function (lastToFirst) {
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
export { NzCarouselTransformStrategy };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbInN0cmF0ZWdpZXMvdHJhbnNmb3JtLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQ7SUFBaUQsdURBQXNCO0lBQXZFO1FBQUEscUVBcUtDO1FBcEtTLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLHFCQUFlLEdBQUcsS0FBSyxDQUFDOztJQW1LbEMsQ0FBQztJQWpLQyxzQkFBWSxpREFBUTs7Ozs7UUFBcEI7WUFDRSxPQUFPLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLFFBQVEsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTs7OztJQUVELDZDQUFPOzs7SUFBUDtRQUNFLGlCQUFNLE9BQU8sV0FBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBRUQsMERBQW9COzs7O0lBQXBCLFVBQXFCLFFBQXNEO1FBQTNFLGlCQTZCQztRQTVCQyxpQkFBTSxvQkFBb0IsWUFBQyxRQUFRLENBQUMsQ0FBQzs7WUFFL0IsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQzs7WUFDbEMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXO1FBRXhDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUssSUFBSSxDQUFDLFVBQVUsT0FBSSxDQUFDLENBQUM7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biAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi9uei1jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBvaW50ZXJWZWN0b3IgfSBmcm9tICcuLi9uei1jYXJvdXNlbC1kZWZpbml0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBOekNhcm91c2VsQmFzZVN0cmF0ZWd5IH0gZnJvbSAnLi9iYXNlLXN0cmF0ZWd5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOekNhcm91c2VsVHJhbnNmb3JtU3RyYXRlZ3kgZXh0ZW5kcyBOekNhcm91c2VsQmFzZVN0cmF0ZWd5IHtcclxuICBwcml2YXRlIGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIGlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGdldCB2ZXJ0aWNhbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNhcm91c2VsQ29tcG9uZW50IS52ZXJ0aWNhbDtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICBzdXBlci5kaXNwb3NlKCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgbnVsbCk7XHJcbiAgfVxyXG5cclxuICB3aXRoQ2Fyb3VzZWxDb250ZW50cyhjb250ZW50czogUXVlcnlMaXN0PE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlPiB8IG51bGwpOiB2b2lkIHtcclxuICAgIHN1cGVyLndpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCBjYXJvdXNlbCA9IHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhO1xyXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSBjYXJvdXNlbC5hY3RpdmVJbmRleDtcclxuXHJcbiAgICBpZiAodGhpcy5jb250ZW50cy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrTGlzdEVsLCAnaGVpZ2h0JywgYCR7dGhpcy51bml0SGVpZ2h0fXB4YCk7XHJcblxyXG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd3aWR0aCcsIGAke3RoaXMudW5pdFdpZHRofXB4YCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ2hlaWdodCcsIGAke3RoaXMubGVuZ3RoICogdGhpcy51bml0SGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuc2xpY2tUcmFja0VsLFxyXG4gICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICBgdHJhbnNsYXRlM2QoMCwgJHstYWN0aXZlSW5kZXggKiB0aGlzLnVuaXRIZWlnaHR9cHgsIDApYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ2hlaWdodCcsIGAke3RoaXMudW5pdEhlaWdodH1weGApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd3aWR0aCcsIGAke3RoaXMubGVuZ3RoICogdGhpcy51bml0V2lkdGh9cHhgKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7LWFjdGl2ZUluZGV4ICogdGhpcy51bml0V2lkdGh9cHgsIDAsIDApYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY29udGVudHMuZm9yRWFjaCgoY29udGVudDogTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUpID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ3dpZHRoJywgYCR7dGhpcy51bml0V2lkdGh9cHhgKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICdoZWlnaHQnLCBgJHt0aGlzLnVuaXRIZWlnaHR9cHhgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzd2l0Y2goX2Y6IG51bWJlciwgX3Q6IG51bWJlcik6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgY29uc3QgeyB0bzogdCB9ID0gdGhpcy5nZXRGcm9tVG9JbkJvdW5kYXJ5KF9mLCBfdCk7XHJcbiAgICBjb25zdCBjb21wbGV0ZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuc2xpY2tUcmFja0VsLFxyXG4gICAgICAndHJhbnNpdGlvbicsXHJcbiAgICAgIGB0cmFuc2Zvcm0gJHt0aGlzLmNhcm91c2VsQ29tcG9uZW50IS5uelRyYW5zaXRpb25TcGVlZH1tcyBlYXNlYFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xyXG4gICAgICB0aGlzLnZlcnRpY2FsVHJhbnNmb3JtKF9mLCBfdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhvcml6b250YWxUcmFuc2Zvcm0oX2YsIF90KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zaXRpb24nLCBudWxsKTtcclxuICAgICAgdGhpcy5jb250ZW50cy5mb3JFYWNoKChjb250ZW50OiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgdGhpcy52ZXJ0aWNhbCA/ICd0b3AnIDogJ2xlZnQnLCBudWxsKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMCwgJHstdCAqIHRoaXMudW5pdEhlaWdodH1weCwgMClgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7LXQgKiB0aGlzLnVuaXRXaWR0aH1weCwgMCwgMClgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgIGNvbXBsZXRlJC5uZXh0KCk7XHJcbiAgICAgIGNvbXBsZXRlJC5jb21wbGV0ZSgpO1xyXG4gICAgfSwgdGhpcy5jYXJvdXNlbENvbXBvbmVudCEubnpUcmFuc2l0aW9uU3BlZWQpO1xyXG5cclxuICAgIHJldHVybiBjb21wbGV0ZSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBkcmFnZ2luZyhfdmVjdG9yOiBQb2ludGVyVmVjdG9yKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1RyYW5zaXRpb25pbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5jYXJvdXNlbENvbXBvbmVudCEuYWN0aXZlSW5kZXg7XHJcblxyXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhLnZlcnRpY2FsKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nICYmIHRoaXMubGVuZ3RoID4gMikge1xyXG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gdGhpcy5tYXhJbmRleCkge1xyXG4gICAgICAgICAgdGhpcy5wcmVwYXJlVmVydGljYWxDb250ZXh0KHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlSW5kZXggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMucHJlcGFyZVZlcnRpY2FsQ29udGV4dChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5zbGlja1RyYWNrRWwsXHJcbiAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgYHRyYW5zbGF0ZTNkKDAsICR7LWFjdGl2ZUluZGV4ICogdGhpcy51bml0SGVpZ2h0ICsgX3ZlY3Rvci54fXB4LCAwKWBcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nICYmIHRoaXMubGVuZ3RoID4gMikge1xyXG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gdGhpcy5tYXhJbmRleCkge1xyXG4gICAgICAgICAgdGhpcy5wcmVwYXJlSG9yaXpvbnRhbENvbnRleHQodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5wcmVwYXJlSG9yaXpvbnRhbENvbnRleHQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuc2xpY2tUcmFja0VsLFxyXG4gICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgIGB0cmFuc2xhdGUzZCgkey1hY3RpdmVJbmRleCAqIHRoaXMudW5pdFdpZHRoICsgX3ZlY3Rvci54fXB4LCAwLCAwKWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJ0aWNhbFRyYW5zZm9ybShfZjogbnVtYmVyLCBfdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGZyb206IGYsIHRvOiB0IH0gPSB0aGlzLmdldEZyb21Ub0luQm91bmRhcnkoX2YsIF90KTtcclxuICAgIGNvbnN0IG5lZWRUb0FkanVzdCA9IHRoaXMubGVuZ3RoID4gMiAmJiBfdCAhPT0gdDtcclxuXHJcbiAgICBpZiAobmVlZFRvQWRqdXN0KSB7XHJcbiAgICAgIHRoaXMucHJlcGFyZVZlcnRpY2FsQ29udGV4dCh0IDwgZik7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMCwgJHstX3QgKiB0aGlzLnVuaXRIZWlnaHR9cHgsIDApYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDAsICR7LXQgKiB0aGlzLnVuaXRIZWlnaHR9cHgsIDBgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaG9yaXpvbnRhbFRyYW5zZm9ybShfZjogbnVtYmVyLCBfdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGZyb206IGYsIHRvOiB0IH0gPSB0aGlzLmdldEZyb21Ub0luQm91bmRhcnkoX2YsIF90KTtcclxuICAgIGNvbnN0IG5lZWRUb0FkanVzdCA9IHRoaXMubGVuZ3RoID4gMiAmJiBfdCAhPT0gdDtcclxuXHJcbiAgICBpZiAobmVlZFRvQWRqdXN0KSB7XHJcbiAgICAgIHRoaXMucHJlcGFyZUhvcml6b250YWxDb250ZXh0KHQgPCBmKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgkey1fdCAqIHRoaXMudW5pdFdpZHRofXB4LCAwLCAwKWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgkey10ICogdGhpcy51bml0V2lkdGh9cHgsIDAsIDBgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJlcGFyZVZlcnRpY2FsQ29udGV4dChsYXN0VG9GaXJzdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGxhc3RUb0ZpcnN0KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5maXJzdEVsLCAndG9wJywgYCR7dGhpcy5sZW5ndGggKiB0aGlzLnVuaXRIZWlnaHR9cHhgKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmxhc3RFbCwgJ3RvcCcsIG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZpcnN0RWwsICd0b3AnLCBudWxsKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmxhc3RFbCwgJ3RvcCcsIGAkey10aGlzLnVuaXRIZWlnaHQgKiB0aGlzLmxlbmd0aH1weGApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmVwYXJlSG9yaXpvbnRhbENvbnRleHQobGFzdFRvRmlyc3Q6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChsYXN0VG9GaXJzdCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlyc3RFbCwgJ2xlZnQnLCBgJHt0aGlzLmxlbmd0aCAqIHRoaXMudW5pdFdpZHRofXB4YCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5sYXN0RWwsICdsZWZ0JywgbnVsbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlyc3RFbCwgJ2xlZnQnLCBudWxsKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmxhc3RFbCwgJ2xlZnQnLCBgJHstdGhpcy51bml0V2lkdGggKiB0aGlzLmxlbmd0aH1weGApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=