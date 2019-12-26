/**
 * @fileoverview added by tsickle
 * Generated from: strategies/opacity-strategy.ts
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
export class NzCarouselOpacityStrategy extends NzCarouselBaseStrategy {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BhY2l0eS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL29wYWNpdHktc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUkzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsc0JBQXNCOzs7OztJQUNuRSxvQkFBb0IsQ0FBQyxRQUFzRDtRQUN6RSxLQUFLLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBRXBFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7Ozs7WUFBQyxDQUFDLE9BQW1DLEVBQUUsQ0FBUyxFQUFFLEVBQUU7Z0JBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO2dCQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLDBCQUEwQixDQUFDLENBQUMsQ0FBQztZQUMxRyxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEVBQVUsRUFBRSxFQUFVO2NBQ3JCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDOztjQUM1QyxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVE7UUFFckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsT0FBbUMsRUFBRSxDQUFTLEVBQUUsRUFBRTtZQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsRUFBQyxDQUFDO1FBRUgsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixDQUFDLEdBQUUsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixFQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUU5QyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLENBQUMsT0FBbUMsRUFBRSxFQUFFO1lBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB9IGZyb20gJy4vYmFzZS1zdHJhdGVneSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbE9wYWNpdHlTdHJhdGVneSBleHRlbmRzIE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kge1xyXG4gIHdpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+IHwgbnVsbCk6IHZvaWQge1xyXG4gICAgc3VwZXIud2l0aENhcm91c2VsQ29udGVudHMoY29udGVudHMpO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbnRlbnRzKSB7XHJcbiAgICAgIHRoaXMuc2xpY2tUcmFja0VsLnN0eWxlLndpZHRoID0gYCR7dGhpcy5sZW5ndGggKiB0aGlzLnVuaXRXaWR0aH1weGA7XHJcblxyXG4gICAgICB0aGlzLmNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQ6IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlLCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICdvcGFjaXR5JywgdGhpcy5jYXJvdXNlbENvbXBvbmVudCEuYWN0aXZlSW5kZXggPT09IGkgPyAnMScgOiAnMCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCAnd2lkdGgnLCBgJHt0aGlzLnVuaXRXaWR0aH1weGApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ2xlZnQnLCBgJHstdGhpcy51bml0V2lkdGggKiBpfXB4YCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCAndHJhbnNpdGlvbicsIFsnb3BhY2l0eSA1MDBtcyBlYXNlIDBzJywgJ3Zpc2liaWxpdHkgNTAwbXMgZWFzZSAwcyddKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzd2l0Y2goX2Y6IG51bWJlciwgX3Q6IG51bWJlcik6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgY29uc3QgeyB0bzogdCB9ID0gdGhpcy5nZXRGcm9tVG9JbkJvdW5kYXJ5KF9mLCBfdCk7XHJcbiAgICBjb25zdCBjb21wbGV0ZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAgIHRoaXMuY29udGVudHMuZm9yRWFjaCgoY29udGVudDogTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUsIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICdvcGFjaXR5JywgdCA9PT0gaSA/ICcxJyA6ICcwJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29tcGxldGUkLm5leHQoKTtcclxuICAgICAgY29tcGxldGUkLmNvbXBsZXRlKCk7XHJcbiAgICB9LCB0aGlzLmNhcm91c2VsQ29tcG9uZW50IS5uelRyYW5zaXRpb25TcGVlZCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBsZXRlJDtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQ6IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ3RyYW5zaXRpb24nLCBudWxsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHN1cGVyLmRpc3Bvc2UoKTtcclxuICB9XHJcbn1cclxuIl19