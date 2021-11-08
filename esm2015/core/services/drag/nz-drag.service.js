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
    const e = getEventPosition(event);
    return {
        x: e.pageX,
        y: e.pageY
    };
}
/**
 * This module provide a global dragging service to other components.
 */
export class NzDragService {
    /**
     * @param {?} rendererFactory2
     */
    constructor(rendererFactory2) {
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
    requestDraggingSequence(event) {
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
        (e) => {
            return {
                x: e.pageX - (/** @type {?} */ (this.currentStartingPoint)).x,
                y: e.pageY - (/** @type {?} */ (this.currentStartingPoint)).y
            };
        })), filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => Math.abs(e.x) > this.draggingThreshold || Math.abs(e.y) > this.draggingThreshold)), finalize((/**
         * @return {?}
         */
        () => this.teardownDraggingSequence())));
    }
    /**
     * @private
     * @param {?} isTouch
     * @return {?}
     */
    registerDraggingHandler(isTouch) {
        if (isTouch) {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchmove', (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchend', (/**
                 * @return {?}
                 */
                () => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.complete();
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
                e => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.next(e);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mouseup', (/**
                 * @return {?}
                 */
                () => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.complete();
                    }
                }))
            });
        }
    }
    /**
     * @private
     * @return {?}
     */
    teardownDraggingSequence() {
        this.currentDraggingSequence = null;
    }
}
NzDragService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzDragService.ctorParameters = () => [
    { type: RendererFactory2 }
];
/** @nocollapse */ NzDragService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDragService_Factory() { return new NzDragService(i0.ɵɵinject(i0.RendererFactory2)); }, token: NzDragService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsic2VydmljZXMvZHJhZy9uei1kcmFnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUVoRSxvQkFHQzs7O0lBRkMsa0JBQVU7O0lBQ1Ysa0JBQVU7Ozs7O0FBS1osMEJBSUM7Ozs7OztJQUhDLGlEQUF5Qjs7OztJQUV6QixpREFBaUI7Ozs7OztBQUduQixTQUFTLGVBQWUsQ0FBQyxLQUE4Qjs7VUFDL0MsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQztJQUNqQyxPQUFPO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBQ1YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO0tBQ1gsQ0FBQztBQUNKLENBQUM7Ozs7QUFRRCxNQUFNLE9BQU8sYUFBYTs7OztJQU94QixZQUFZLGdCQUFrQztRQU50QyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsNEJBQXVCLEdBQXVDLElBQUksQ0FBQztRQUNuRSx5QkFBb0IsR0FBaUIsSUFBSSxDQUFDO1FBQzFDLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztRQUk5QyxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxLQUE4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SUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7d0JBQ2hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDekM7Z0JBQ0gsQ0FBQyxFQUFDO2FBQ0gsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVPLHdCQUF3QjtRQUM5QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7OztZQTNFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFoQytCLGdCQUFnQjs7Ozs7Ozs7SUFrQzlDLDBDQUE4Qjs7Ozs7SUFDOUIsZ0RBQTJFOzs7OztJQUMzRSw2Q0FBa0Q7Ozs7O0lBQ2xELHVDQUFnRDs7Ozs7SUFDaEQsaUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIGZpbmFsaXplLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBnZXRFdmVudFBvc2l0aW9uLCBpc1RvdWNoRXZlbnQgfSBmcm9tICcuLi8uLi91dGlsL2RvbSc7XHJcblxyXG5pbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgRGVsdGEgPSBQb2ludDtcclxuXHJcbmludGVyZmFjZSBIYW5kbGVySXRlbSB7XHJcbiAgaGFuZGxlcj8oZTogRXZlbnQpOiB2b2lkO1xyXG5cclxuICB0ZWFyZG93bigpOiB2b2lkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYWdlUG9zaXRpb24oZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogUG9pbnQge1xyXG4gIGNvbnN0IGUgPSBnZXRFdmVudFBvc2l0aW9uKGV2ZW50KTtcclxuICByZXR1cm4ge1xyXG4gICAgeDogZS5wYWdlWCxcclxuICAgIHk6IGUucGFnZVlcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBtb2R1bGUgcHJvdmlkZSBhIGdsb2JhbCBkcmFnZ2luZyBzZXJ2aWNlIHRvIG90aGVyIGNvbXBvbmVudHMuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRyYWdTZXJ2aWNlIHtcclxuICBwcml2YXRlIGRyYWdnaW5nVGhyZXNob2xkID0gNTtcclxuICBwcml2YXRlIGN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlOiBTdWJqZWN0PE1vdXNlRXZlbnQgfCBUb3VjaD4gfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGN1cnJlbnRTdGFydGluZ1BvaW50OiBQb2ludCB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgaGFuZGxlUmVnaXN0cnkgPSBuZXcgU2V0PEhhbmRsZXJJdGVtPigpO1xyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuXHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mikge1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeTIuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0RHJhZ2dpbmdTZXF1ZW5jZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiBPYnNlcnZhYmxlPERlbHRhPiB7XHJcbiAgICBpZiAoIXRoaXMuaGFuZGxlUmVnaXN0cnkuc2l6ZSkge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyRHJhZ2dpbmdIYW5kbGVyKGlzVG91Y2hFdmVudChldmVudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbXBsZXRlIGxhc3QgZHJhZ2dpbmcgc2VxdWVuY2UgaWYgYSBuZXcgdGFyZ2V0IGlzIGRyYWdnZWQuXHJcbiAgICBpZiAodGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50U3RhcnRpbmdQb2ludCA9IGdldFBhZ2VQb3NpdGlvbihldmVudCk7XHJcbiAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoPigpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLnBpcGUoXHJcbiAgICAgIG1hcCgoZTogTW91c2VFdmVudCB8IFRvdWNoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHg6IGUucGFnZVggLSB0aGlzLmN1cnJlbnRTdGFydGluZ1BvaW50IS54LFxyXG4gICAgICAgICAgeTogZS5wYWdlWSAtIHRoaXMuY3VycmVudFN0YXJ0aW5nUG9pbnQhLnlcclxuICAgICAgICB9O1xyXG4gICAgICB9KSxcclxuICAgICAgZmlsdGVyKChlOiBEZWx0YSkgPT4gTWF0aC5hYnMoZS54KSA+IHRoaXMuZHJhZ2dpbmdUaHJlc2hvbGQgfHwgTWF0aC5hYnMoZS55KSA+IHRoaXMuZHJhZ2dpbmdUaHJlc2hvbGQpLFxyXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLnRlYXJkb3duRHJhZ2dpbmdTZXF1ZW5jZSgpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJEcmFnZ2luZ0hhbmRsZXIoaXNUb3VjaDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGlzVG91Y2gpIHtcclxuICAgICAgdGhpcy5oYW5kbGVSZWdpc3RyeS5hZGQoe1xyXG4gICAgICAgIHRlYXJkb3duOiB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2htb3ZlJywgKGU6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UubmV4dChlLnRvdWNoZXNbMF0gfHwgZS5jaGFuZ2VkVG91Y2hlc1swXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcclxuICAgICAgICB0ZWFyZG93bjogdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNoZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVSZWdpc3RyeS5hZGQoe1xyXG4gICAgICAgIHRlYXJkb3duOiB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2Vtb3ZlJywgZSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLm5leHQoZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcclxuICAgICAgICB0ZWFyZG93bjogdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNldXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRlYXJkb3duRHJhZ2dpbmdTZXF1ZW5jZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=