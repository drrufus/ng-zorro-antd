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
import { Injectable, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, finalize, map } from 'rxjs/operators';
import { getEventPosition, isTouchEvent } from '../../util/dom';
import * as i0 from "@angular/core";
/**
 * @record
 */
function Point() { }
if (false) {
    /** @type {?} */
    Point.prototype.x;
    /** @type {?} */
    Point.prototype.y;
}
/**
 * @record
 */
function HandlerItem() { }
if (false) {
    /**
     * @param {?} e
     * @return {?}
     */
    HandlerItem.prototype.handler = function (e) { };
    /**
     * @return {?}
     */
    HandlerItem.prototype.teardown = function () { };
}
/**
 * @param {?} event
 * @return {?}
 */
function getPagePosition(event) {
    /** @type {?} */
    var e = getEventPosition(event);
    return {
        x: e.pageX,
        y: e.pageY
    };
}
/**
 * This module provide a global dragging service to other components.
 */
var NzDragService = /** @class */ (function () {
    function NzDragService(rendererFactory2) {
        this.draggingThreshold = 5;
        this.currentDraggingSequence = null;
        this.currentStartingPoint = null;
        this.handleRegistry = new Set();
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NzDragService.prototype.requestDraggingSequence = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.handleRegistry.size) {
            this.registerDraggingHandler(isTouchEvent(event));
        }
        // Complete last dragging sequence if a new target is dragged.
        if (this.currentDraggingSequence) {
            this.currentDraggingSequence.complete();
        }
        this.currentStartingPoint = getPagePosition(event);
        this.currentDraggingSequence = new Subject();
        return this.currentDraggingSequence.pipe(map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return {
                x: e.pageX - (/** @type {?} */ (_this.currentStartingPoint)).x,
                y: e.pageY - (/** @type {?} */ (_this.currentStartingPoint)).y
            };
        })), filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return Math.abs(e.x) > _this.draggingThreshold || Math.abs(e.y) > _this.draggingThreshold; })), finalize((/**
         * @return {?}
         */
        function () { return _this.teardownDraggingSequence(); })));
    };
    /**
     * @private
     * @param {?} isTouch
     * @return {?}
     */
    NzDragService.prototype.registerDraggingHandler = /**
     * @private
     * @param {?} isTouch
     * @return {?}
     */
    function (isTouch) {
        var _this = this;
        if (isTouch) {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchmove', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchend', (/**
                 * @return {?}
                 */
                function () {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.complete();
                    }
                }))
            });
        }
        else {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mousemove', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.next(e);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mouseup', (/**
                 * @return {?}
                 */
                function () {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.complete();
                    }
                }))
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDragService.prototype.teardownDraggingSequence = /**
     * @private
     * @return {?}
     */
    function () {
        this.currentDraggingSequence = null;
    };
    NzDragService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzDragService.ctorParameters = function () { return [
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ NzDragService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDragService_Factory() { return new NzDragService(i0.ɵɵinject(i0.RendererFactory2)); }, token: NzDragService, providedIn: "root" });
    return NzDragService;
}());
export { NzDragService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.draggingThreshold;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.currentDraggingSequence;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.currentStartingPoint;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.handleRegistry;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsic2VydmljZXMvZHJhZy9uei1kcmFnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUVoRSxvQkFHQzs7O0lBRkMsa0JBQVU7O0lBQ1Ysa0JBQVU7Ozs7O0FBS1osMEJBSUM7Ozs7OztJQUhDLGlEQUF5Qjs7OztJQUV6QixpREFBaUI7Ozs7OztBQUduQixTQUFTLGVBQWUsQ0FBQyxLQUE4Qjs7UUFDL0MsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQztJQUNqQyxPQUFPO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBQ1YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO0tBQ1gsQ0FBQztBQUNKLENBQUM7Ozs7QUFLRDtJQVVFLHVCQUFZLGdCQUFrQztRQU50QyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsNEJBQXVCLEdBQXVDLElBQUksQ0FBQztRQUNuRSx5QkFBb0IsR0FBaUIsSUFBSSxDQUFDO1FBQzFDLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztRQUk5QyxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCwrQ0FBdUI7Ozs7SUFBdkIsVUFBd0IsS0FBOEI7UUFBdEQs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QUksS0FBSSxDQUFDLHVCQUF1QixFQUFFO3dCQUNoQyxLQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ3pDO2dCQUNILENBQUMsRUFBQzthQUNILENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxnREFBd0I7Ozs7SUFBaEM7UUFDRSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7O2dCQTNFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWhDK0IsZ0JBQWdCOzs7d0JBUmhEO0NBa0hDLEFBNUVELElBNEVDO1NBekVZLGFBQWE7Ozs7OztJQUN4QiwwQ0FBOEI7Ozs7O0lBQzlCLGdEQUEyRTs7Ozs7SUFDM0UsNkNBQWtEOzs7OztJQUNsRCx1Q0FBZ0Q7Ozs7O0lBQ2hELGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBmaW5hbGl6ZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0RXZlbnRQb3NpdGlvbiwgaXNUb3VjaEV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbC9kb20nO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59XHJcblxyXG50eXBlIERlbHRhID0gUG9pbnQ7XHJcblxyXG5pbnRlcmZhY2UgSGFuZGxlckl0ZW0ge1xyXG4gIGhhbmRsZXI/KGU6IEV2ZW50KTogdm9pZDtcclxuXHJcbiAgdGVhcmRvd24oKTogdm9pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFnZVBvc2l0aW9uKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IFBvaW50IHtcclxuICBjb25zdCBlID0gZ2V0RXZlbnRQb3NpdGlvbihldmVudCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IGUucGFnZVgsXHJcbiAgICB5OiBlLnBhZ2VZXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGUgYSBnbG9iYWwgZHJhZ2dpbmcgc2VydmljZSB0byBvdGhlciBjb21wb25lbnRzLlxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEcmFnU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBkcmFnZ2luZ1RocmVzaG9sZCA9IDU7XHJcbiAgcHJpdmF0ZSBjdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZTogU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2g+IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBjdXJyZW50U3RhcnRpbmdQb2ludDogUG9pbnQgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGhhbmRsZVJlZ2lzdHJ5ID0gbmV3IFNldDxIYW5kbGVySXRlbT4oKTtcclxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcclxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdERyYWdnaW5nU2VxdWVuY2UoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogT2JzZXJ2YWJsZTxEZWx0YT4ge1xyXG4gICAgaWYgKCF0aGlzLmhhbmRsZVJlZ2lzdHJ5LnNpemUpIHtcclxuICAgICAgdGhpcy5yZWdpc3RlckRyYWdnaW5nSGFuZGxlcihpc1RvdWNoRXZlbnQoZXZlbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb21wbGV0ZSBsYXN0IGRyYWdnaW5nIHNlcXVlbmNlIGlmIGEgbmV3IHRhcmdldCBpcyBkcmFnZ2VkLlxyXG4gICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcclxuICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudFN0YXJ0aW5nUG9pbnQgPSBnZXRQYWdlUG9zaXRpb24oZXZlbnQpO1xyXG4gICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQgfCBUb3VjaD4oKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5waXBlKFxyXG4gICAgICBtYXAoKGU6IE1vdXNlRXZlbnQgfCBUb3VjaCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB4OiBlLnBhZ2VYIC0gdGhpcy5jdXJyZW50U3RhcnRpbmdQb2ludCEueCxcclxuICAgICAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmN1cnJlbnRTdGFydGluZ1BvaW50IS55XHJcbiAgICAgICAgfTtcclxuICAgICAgfSksXHJcbiAgICAgIGZpbHRlcigoZTogRGVsdGEpID0+IE1hdGguYWJzKGUueCkgPiB0aGlzLmRyYWdnaW5nVGhyZXNob2xkIHx8IE1hdGguYWJzKGUueSkgPiB0aGlzLmRyYWdnaW5nVGhyZXNob2xkKSxcclxuICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy50ZWFyZG93bkRyYWdnaW5nU2VxdWVuY2UoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRHJhZ2dpbmdIYW5kbGVyKGlzVG91Y2g6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChpc1RvdWNoKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcclxuICAgICAgICB0ZWFyZG93bjogdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNobW92ZScsIChlOiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLm5leHQoZS50b3VjaGVzWzBdIHx8IGUuY2hhbmdlZFRvdWNoZXNbMF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmhhbmRsZVJlZ2lzdHJ5LmFkZCh7XHJcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaGVuZCcsICgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UuY29tcGxldGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcclxuICAgICAgICB0ZWFyZG93bjogdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNlbW92ZScsIGUgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5uZXh0KGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmhhbmRsZVJlZ2lzdHJ5LmFkZCh7XHJcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0ZWFyZG93bkRyYWdnaW5nU2VxdWVuY2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlID0gbnVsbDtcclxuICB9XHJcbn1cclxuIl19