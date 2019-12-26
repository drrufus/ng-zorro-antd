/**
 * @fileoverview added by tsickle
 * Generated from: services/drag/nz-drag.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsic2VydmljZXMvZHJhZy9uei1kcmFnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFaEUsb0JBR0M7OztJQUZDLGtCQUFVOztJQUNWLGtCQUFVOzs7OztBQUtaLDBCQUlDOzs7Ozs7SUFIQyxpREFBeUI7Ozs7SUFFekIsaURBQWlCOzs7Ozs7QUFHbkIsU0FBUyxlQUFlLENBQUMsS0FBOEI7O1FBQy9DLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7SUFDakMsT0FBTztRQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztRQUNWLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztLQUNYLENBQUM7QUFDSixDQUFDOzs7O0FBS0Q7SUFVRSx1QkFBWSxnQkFBa0M7UUFOdEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLDRCQUF1QixHQUF1QyxJQUFJLENBQUM7UUFDbkUseUJBQW9CLEdBQWlCLElBQUksQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksR0FBRyxFQUFlLENBQUM7UUFJOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsK0NBQXVCOzs7O0lBQXZCLFVBQXdCLEtBQThCO1FBQXRE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QUFJLEtBQUksQ0FBQyx1QkFBdUIsRUFBRTt3QkFDaEMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN6QztnQkFDSCxDQUFDLEVBQUM7YUFDSCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRU8sZ0RBQXdCOzs7O0lBQWhDO1FBQ0UsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDOztnQkEzRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFoQytCLGdCQUFnQjs7O3dCQVJoRDtDQWtIQyxBQTVFRCxJQTRFQztTQXpFWSxhQUFhOzs7Ozs7SUFDeEIsMENBQThCOzs7OztJQUM5QixnREFBMkU7Ozs7O0lBQzNFLDZDQUFrRDs7Ozs7SUFDbEQsdUNBQWdEOzs7OztJQUNoRCxpQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgZmluYWxpemUsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGdldEV2ZW50UG9zaXRpb24sIGlzVG91Y2hFdmVudCB9IGZyb20gJy4uLy4uL3V0aWwvZG9tJztcclxuXHJcbmludGVyZmFjZSBQb2ludCB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBEZWx0YSA9IFBvaW50O1xyXG5cclxuaW50ZXJmYWNlIEhhbmRsZXJJdGVtIHtcclxuICBoYW5kbGVyPyhlOiBFdmVudCk6IHZvaWQ7XHJcblxyXG4gIHRlYXJkb3duKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VQb3NpdGlvbihldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiBQb2ludCB7XHJcbiAgY29uc3QgZSA9IGdldEV2ZW50UG9zaXRpb24oZXZlbnQpO1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiBlLnBhZ2VYLFxyXG4gICAgeTogZS5wYWdlWVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlIGEgZ2xvYmFsIGRyYWdnaW5nIHNlcnZpY2UgdG8gb3RoZXIgY29tcG9uZW50cy5cclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56RHJhZ1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgZHJhZ2dpbmdUaHJlc2hvbGQgPSA1O1xyXG4gIHByaXZhdGUgY3VycmVudERyYWdnaW5nU2VxdWVuY2U6IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoPiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgY3VycmVudFN0YXJ0aW5nUG9pbnQ6IFBvaW50IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBoYW5kbGVSZWdpc3RyeSA9IG5ldyBTZXQ8SGFuZGxlckl0ZW0+KCk7XHJcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlckZhY3RvcnkyOiBSZW5kZXJlckZhY3RvcnkyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3REcmFnZ2luZ1NlcXVlbmNlKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IE9ic2VydmFibGU8RGVsdGE+IHtcclxuICAgIGlmICghdGhpcy5oYW5kbGVSZWdpc3RyeS5zaXplKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJEcmFnZ2luZ0hhbmRsZXIoaXNUb3VjaEV2ZW50KGV2ZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29tcGxldGUgbGFzdCBkcmFnZ2luZyBzZXF1ZW5jZSBpZiBhIG5ldyB0YXJnZXQgaXMgZHJhZ2dlZC5cclxuICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UuY29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRTdGFydGluZ1BvaW50ID0gZ2V0UGFnZVBvc2l0aW9uKGV2ZW50KTtcclxuICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2g+KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UucGlwZShcclxuICAgICAgbWFwKChlOiBNb3VzZUV2ZW50IHwgVG91Y2gpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgeDogZS5wYWdlWCAtIHRoaXMuY3VycmVudFN0YXJ0aW5nUG9pbnQhLngsXHJcbiAgICAgICAgICB5OiBlLnBhZ2VZIC0gdGhpcy5jdXJyZW50U3RhcnRpbmdQb2ludCEueVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pLFxyXG4gICAgICBmaWx0ZXIoKGU6IERlbHRhKSA9PiBNYXRoLmFicyhlLngpID4gdGhpcy5kcmFnZ2luZ1RocmVzaG9sZCB8fCBNYXRoLmFicyhlLnkpID4gdGhpcy5kcmFnZ2luZ1RocmVzaG9sZCksXHJcbiAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMudGVhcmRvd25EcmFnZ2luZ1NlcXVlbmNlKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckRyYWdnaW5nSGFuZGxlcihpc1RvdWNoOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoaXNUb3VjaCkge1xyXG4gICAgICB0aGlzLmhhbmRsZVJlZ2lzdHJ5LmFkZCh7XHJcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaG1vdmUnLCAoZTogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5uZXh0KGUudG91Y2hlc1swXSB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5oYW5kbGVSZWdpc3RyeS5hZGQoe1xyXG4gICAgICAgIHRlYXJkb3duOiB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZVJlZ2lzdHJ5LmFkZCh7XHJcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdtb3VzZW1vdmUnLCBlID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UubmV4dChlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5oYW5kbGVSZWdpc3RyeS5hZGQoe1xyXG4gICAgICAgIHRlYXJkb3duOiB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2V1cCcsICgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UuY29tcGxldGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGVhcmRvd25EcmFnZ2luZ1NlcXVlbmNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSA9IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==