/**
 * @fileoverview added by tsickle
 * Generated from: strategies/opacity-strategy.ts
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
var NzCarouselOpacityStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(NzCarouselOpacityStrategy, _super);
    function NzCarouselOpacityStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} contents
     * @return {?}
     */
    NzCarouselOpacityStrategy.prototype.withCarouselContents = /**
     * @param {?} contents
     * @return {?}
     */
    function (contents) {
        var _this = this;
        _super.prototype.withCarouselContents.call(this, contents);
        if (this.contents) {
            this.slickTrackEl.style.width = this.length * this.unitWidth + "px";
            this.contents.forEach((/**
             * @param {?} content
             * @param {?} i
             * @return {?}
             */
            function (content, i) {
                _this.renderer.setStyle(content.el, 'opacity', (/** @type {?} */ (_this.carouselComponent)).activeIndex === i ? '1' : '0');
                _this.renderer.setStyle(content.el, 'position', 'relative');
                _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                _this.renderer.setStyle(content.el, 'left', -_this.unitWidth * i + "px");
                _this.renderer.setStyle(content.el, 'transition', ['opacity 500ms ease 0s', 'visibility 500ms ease 0s']);
            }));
        }
    };
    /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselOpacityStrategy.prototype.switch = /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _this = this;
        var t = this.getFromToInBoundary(_f, _t).to;
        /** @type {?} */
        var complete$ = new Subject();
        this.contents.forEach((/**
         * @param {?} content
         * @param {?} i
         * @return {?}
         */
        function (content, i) {
            _this.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
        }));
        setTimeout((/**
         * @return {?}
         */
        function () {
            complete$.next();
            complete$.complete();
        }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
        return complete$;
    };
    /**
     * @return {?}
     */
    NzCarouselOpacityStrategy.prototype.dispose = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.contents.forEach((/**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            _this.renderer.setStyle(content.el, 'transition', null);
        }));
        _super.prototype.dispose.call(this);
    };
    return NzCarouselOpacityStrategy;
}(NzCarouselBaseStrategy));
export { NzCarouselOpacityStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BhY2l0eS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL29wYWNpdHktc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQ7SUFBK0MscURBQXNCO0lBQXJFOztJQXdDQSxDQUFDOzs7OztJQXZDQyx3REFBb0I7Ozs7SUFBcEIsVUFBcUIsUUFBc0Q7UUFBM0UsaUJBY0M7UUFiQyxpQkFBTSxvQkFBb0IsWUFBQyxRQUFRLENBQUMsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsT0FBSSxDQUFDO1lBRXBFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7Ozs7WUFBQyxVQUFDLE9BQW1DLEVBQUUsQ0FBUztnQkFDbkUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsbUJBQUEsS0FBSSxDQUFDLGlCQUFpQixFQUFDLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFLLEtBQUksQ0FBQyxTQUFTLE9BQUksQ0FBQyxDQUFDO2dCQUNuRSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBSyxDQUFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxPQUFJLENBQUMsQ0FBQztnQkFDdkUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDLENBQUM7WUFDMUcsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7OztJQUVELDBDQUFNOzs7OztJQUFOLFVBQU8sRUFBVSxFQUFFLEVBQVU7UUFBN0IsaUJBY0M7UUFiUyxJQUFBLHVDQUFLOztZQUNQLFNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBUTtRQUVyQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxPQUFtQyxFQUFFLENBQVM7WUFDbkUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRSxDQUFDLEVBQUMsQ0FBQztRQUVILFVBQVU7OztRQUFDO1lBQ1QsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixDQUFDLEdBQUUsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixFQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUU5QyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsMkNBQU87OztJQUFQO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE9BQW1DO1lBQ3hELEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO1FBRUgsaUJBQU0sT0FBTyxXQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUErQyxzQkFBc0IsR0F3Q3BFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi9uei1jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBOekNhcm91c2VsQmFzZVN0cmF0ZWd5IH0gZnJvbSAnLi9iYXNlLXN0cmF0ZWd5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOekNhcm91c2VsT3BhY2l0eVN0cmF0ZWd5IGV4dGVuZHMgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB7XHJcbiAgd2l0aENhcm91c2VsQ29udGVudHMoY29udGVudHM6IFF1ZXJ5TGlzdDxOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZT4gfCBudWxsKTogdm9pZCB7XHJcbiAgICBzdXBlci53aXRoQ2Fyb3VzZWxDb250ZW50cyhjb250ZW50cyk7XHJcblxyXG4gICAgaWYgKHRoaXMuY29udGVudHMpIHtcclxuICAgICAgdGhpcy5zbGlja1RyYWNrRWwuc3R5bGUud2lkdGggPSBgJHt0aGlzLmxlbmd0aCAqIHRoaXMudW5pdFdpZHRofXB4YDtcclxuXHJcbiAgICAgIHRoaXMuY29udGVudHMuZm9yRWFjaCgoY29udGVudDogTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUsIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ29wYWNpdHknLCB0aGlzLmNhcm91c2VsQ29tcG9uZW50IS5hY3RpdmVJbmRleCA9PT0gaSA/ICcxJyA6ICcwJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCAncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICd3aWR0aCcsIGAke3RoaXMudW5pdFdpZHRofXB4YCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCAnbGVmdCcsIGAkey10aGlzLnVuaXRXaWR0aCAqIGl9cHhgKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICd0cmFuc2l0aW9uJywgWydvcGFjaXR5IDUwMG1zIGVhc2UgMHMnLCAndmlzaWJpbGl0eSA1MDBtcyBlYXNlIDBzJ10pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN3aXRjaChfZjogbnVtYmVyLCBfdDogbnVtYmVyKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICBjb25zdCB7IHRvOiB0IH0gPSB0aGlzLmdldEZyb21Ub0luQm91bmRhcnkoX2YsIF90KTtcclxuICAgIGNvbnN0IGNvbXBsZXRlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gICAgdGhpcy5jb250ZW50cy5mb3JFYWNoKChjb250ZW50OiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ29wYWNpdHknLCB0ID09PSBpID8gJzEnIDogJzAnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb21wbGV0ZSQubmV4dCgpO1xyXG4gICAgICBjb21wbGV0ZSQuY29tcGxldGUoKTtcclxuICAgIH0sIHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhLm56VHJhbnNpdGlvblNwZWVkKTtcclxuXHJcbiAgICByZXR1cm4gY29tcGxldGUkO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGVudHMuZm9yRWFjaCgoY29udGVudDogTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCAndHJhbnNpdGlvbicsIG51bGwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3VwZXIuZGlzcG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=