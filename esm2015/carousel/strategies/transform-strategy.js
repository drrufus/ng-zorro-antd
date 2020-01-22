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
import { Subject } from 'rxjs';
import { NzCarouselBaseStrategy } from './base-strategy';
export class NzCarouselTransformStrategy extends NzCarouselBaseStrategy {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbInN0cmF0ZWdpZXMvdHJhbnNmb3JtLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUszQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsc0JBQXNCO0lBQXZFOztRQUNVLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFtS2xDLENBQUM7Ozs7O0lBaktDLElBQVksUUFBUTtRQUNsQixPQUFPLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLFFBQXNEO1FBQ3pFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Y0FFL0IsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQzs7Y0FDbEMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXO1FBRXhDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztZQUUzRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7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QUFNLElBQUksQ0FBQyxDQUFDO1NBQ25GO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7SUFwS0MsaURBQTJCOzs7OztJQUMzQixzREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uL256LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUG9pbnRlclZlY3RvciB9IGZyb20gJy4uL256LWNhcm91c2VsLWRlZmluaXRpb25zJztcclxuXHJcbmltcG9ydCB7IE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kgfSBmcm9tICcuL2Jhc2Utc3RyYXRlZ3knO1xyXG5cclxuZXhwb3J0IGNsYXNzIE56Q2Fyb3VzZWxUcmFuc2Zvcm1TdHJhdGVneSBleHRlbmRzIE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kge1xyXG4gIHByaXZhdGUgaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgZ2V0IHZlcnRpY2FsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhLnZlcnRpY2FsO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLmRpc3Bvc2UoKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBudWxsKTtcclxuICB9XHJcblxyXG4gIHdpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+IHwgbnVsbCk6IHZvaWQge1xyXG4gICAgc3VwZXIud2l0aENhcm91c2VsQ29udGVudHMoY29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IGNhcm91c2VsID0gdGhpcy5jYXJvdXNlbENvbXBvbmVudCE7XHJcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IGNhcm91c2VsLmFjdGl2ZUluZGV4O1xyXG5cclxuICAgIGlmICh0aGlzLmNvbnRlbnRzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tMaXN0RWwsICdoZWlnaHQnLCBgJHt0aGlzLnVuaXRIZWlnaHR9cHhgKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3dpZHRoJywgYCR7dGhpcy51bml0V2lkdGh9cHhgKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAnaGVpZ2h0JywgYCR7dGhpcy5sZW5ndGggKiB0aGlzLnVuaXRIZWlnaHR9cHhgKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5zbGlja1RyYWNrRWwsXHJcbiAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgIGB0cmFuc2xhdGUzZCgwLCAkey1hY3RpdmVJbmRleCAqIHRoaXMudW5pdEhlaWdodH1weCwgMClgXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAnaGVpZ2h0JywgYCR7dGhpcy51bml0SGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3dpZHRoJywgYCR7dGhpcy5sZW5ndGggKiB0aGlzLnVuaXRXaWR0aH1weGApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHstYWN0aXZlSW5kZXggKiB0aGlzLnVuaXRXaWR0aH1weCwgMCwgMClgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jb250ZW50cy5mb3JFYWNoKChjb250ZW50OiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCAnd2lkdGgnLCBgJHt0aGlzLnVuaXRXaWR0aH1weGApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ2hlaWdodCcsIGAke3RoaXMudW5pdEhlaWdodH1weGApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN3aXRjaChfZjogbnVtYmVyLCBfdDogbnVtYmVyKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICBjb25zdCB7IHRvOiB0IH0gPSB0aGlzLmdldEZyb21Ub0luQm91bmRhcnkoX2YsIF90KTtcclxuICAgIGNvbnN0IGNvbXBsZXRlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5zbGlja1RyYWNrRWwsXHJcbiAgICAgICd0cmFuc2l0aW9uJyxcclxuICAgICAgYHRyYW5zZm9ybSAke3RoaXMuY2Fyb3VzZWxDb21wb25lbnQhLm56VHJhbnNpdGlvblNwZWVkfW1zIGVhc2VgXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XHJcbiAgICAgIHRoaXMudmVydGljYWxUcmFuc2Zvcm0oX2YsIF90KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaG9yaXpvbnRhbFRyYW5zZm9ybShfZiwgX3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNpdGlvbicsIG51bGwpO1xyXG4gICAgICB0aGlzLmNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQ6IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCB0aGlzLnZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCcsIG51bGwpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgwLCAkey10ICogdGhpcy51bml0SGVpZ2h0fXB4LCAwKWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHstdCAqIHRoaXMudW5pdFdpZHRofXB4LCAwLCAwKWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgY29tcGxldGUkLm5leHQoKTtcclxuICAgICAgY29tcGxldGUkLmNvbXBsZXRlKCk7XHJcbiAgICB9LCB0aGlzLmNhcm91c2VsQ29tcG9uZW50IS5uelRyYW5zaXRpb25TcGVlZCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBsZXRlJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGRyYWdnaW5nKF92ZWN0b3I6IFBvaW50ZXJWZWN0b3IpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzVHJhbnNpdGlvbmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLmNhcm91c2VsQ29tcG9uZW50IS5hY3RpdmVJbmRleDtcclxuXHJcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbXBvbmVudCEudmVydGljYWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcgJiYgdGhpcy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSB0aGlzLm1heEluZGV4KSB7XHJcbiAgICAgICAgICB0aGlzLnByZXBhcmVWZXJ0aWNhbENvbnRleHQodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5wcmVwYXJlVmVydGljYWxDb250ZXh0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLnNsaWNrVHJhY2tFbCxcclxuICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICBgdHJhbnNsYXRlM2QoMCwgJHstYWN0aXZlSW5kZXggKiB0aGlzLnVuaXRIZWlnaHQgKyBfdmVjdG9yLnh9cHgsIDApYFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcgJiYgdGhpcy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSB0aGlzLm1heEluZGV4KSB7XHJcbiAgICAgICAgICB0aGlzLnByZXBhcmVIb3Jpem9udGFsQ29udGV4dCh0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZUluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnByZXBhcmVIb3Jpem9udGFsQ29udGV4dChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5zbGlja1RyYWNrRWwsXHJcbiAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgYHRyYW5zbGF0ZTNkKCR7LWFjdGl2ZUluZGV4ICogdGhpcy51bml0V2lkdGggKyBfdmVjdG9yLnh9cHgsIDAsIDApYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZlcnRpY2FsVHJhbnNmb3JtKF9mOiBudW1iZXIsIF90OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgZnJvbTogZiwgdG86IHQgfSA9IHRoaXMuZ2V0RnJvbVRvSW5Cb3VuZGFyeShfZiwgX3QpO1xyXG4gICAgY29uc3QgbmVlZFRvQWRqdXN0ID0gdGhpcy5sZW5ndGggPiAyICYmIF90ICE9PSB0O1xyXG5cclxuICAgIGlmIChuZWVkVG9BZGp1c3QpIHtcclxuICAgICAgdGhpcy5wcmVwYXJlVmVydGljYWxDb250ZXh0KHQgPCBmKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgwLCAkey1fdCAqIHRoaXMudW5pdEhlaWdodH1weCwgMClgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMCwgJHstdCAqIHRoaXMudW5pdEhlaWdodH1weCwgMGApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBob3Jpem9udGFsVHJhbnNmb3JtKF9mOiBudW1iZXIsIF90OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgZnJvbTogZiwgdG86IHQgfSA9IHRoaXMuZ2V0RnJvbVRvSW5Cb3VuZGFyeShfZiwgX3QpO1xyXG4gICAgY29uc3QgbmVlZFRvQWRqdXN0ID0gdGhpcy5sZW5ndGggPiAyICYmIF90ICE9PSB0O1xyXG5cclxuICAgIGlmIChuZWVkVG9BZGp1c3QpIHtcclxuICAgICAgdGhpcy5wcmVwYXJlSG9yaXpvbnRhbENvbnRleHQodCA8IGYpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7LV90ICogdGhpcy51bml0V2lkdGh9cHgsIDAsIDApYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7LXQgKiB0aGlzLnVuaXRXaWR0aH1weCwgMCwgMGApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmVwYXJlVmVydGljYWxDb250ZXh0KGxhc3RUb0ZpcnN0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAobGFzdFRvRmlyc3QpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZpcnN0RWwsICd0b3AnLCBgJHt0aGlzLmxlbmd0aCAqIHRoaXMudW5pdEhlaWdodH1weGApO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubGFzdEVsLCAndG9wJywgbnVsbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlyc3RFbCwgJ3RvcCcsIG51bGwpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubGFzdEVsLCAndG9wJywgYCR7LXRoaXMudW5pdEhlaWdodCAqIHRoaXMubGVuZ3RofXB4YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVIb3Jpem9udGFsQ29udGV4dChsYXN0VG9GaXJzdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGxhc3RUb0ZpcnN0KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5maXJzdEVsLCAnbGVmdCcsIGAke3RoaXMubGVuZ3RoICogdGhpcy51bml0V2lkdGh9cHhgKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmxhc3RFbCwgJ2xlZnQnLCBudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5maXJzdEVsLCAnbGVmdCcsIG51bGwpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubGFzdEVsLCAnbGVmdCcsIGAkey10aGlzLnVuaXRXaWR0aCAqIHRoaXMubGVuZ3RofXB4YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==