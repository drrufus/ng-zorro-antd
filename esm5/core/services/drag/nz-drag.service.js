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
function getPagePosition(event) {
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
    NzDragService.prototype.requestDraggingSequence = function (event) {
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
        return this.currentDraggingSequence.pipe(map(function (e) {
            return {
                x: e.pageX - _this.currentStartingPoint.x,
                y: e.pageY - _this.currentStartingPoint.y
            };
        }), filter(function (e) { return Math.abs(e.x) > _this.draggingThreshold || Math.abs(e.y) > _this.draggingThreshold; }), finalize(function () { return _this.teardownDraggingSequence(); }));
    };
    NzDragService.prototype.registerDraggingHandler = function (isTouch) {
        var _this = this;
        if (isTouch) {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchmove', function (e) {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
                    }
                })
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchend', function () {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.complete();
                    }
                })
            });
        }
        else {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mousemove', function (e) {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.next(e);
                    }
                })
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mouseup', function () {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.complete();
                    }
                })
            });
        }
    };
    NzDragService.prototype.teardownDraggingSequence = function () {
        this.currentDraggingSequence = null;
    };
    /** @nocollapse */ NzDragService.ɵfac = function NzDragService_Factory(t) { return new (t || NzDragService)(i0.ɵɵinject(i0.RendererFactory2)); };
    /** @nocollapse */ NzDragService.ɵprov = i0.ɵɵdefineInjectable({ token: NzDragService, factory: NzDragService.ɵfac, providedIn: 'root' });
    return NzDragService;
}());
export { NzDragService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDragService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.RendererFactory2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsic2VydmljZXMvZHJhZy9uei1kcmFnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFlaEUsU0FBUyxlQUFlLENBQUMsS0FBOEI7SUFDckQsSUFBTSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsT0FBTztRQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztRQUNWLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztLQUNYLENBQUM7QUFDSixDQUFDO0FBRUQ7O0dBRUc7QUFDSDtJQVVFLHVCQUFZLGdCQUFrQztRQU50QyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsNEJBQXVCLEdBQXVDLElBQUksQ0FBQztRQUNuRSx5QkFBb0IsR0FBaUIsSUFBSSxDQUFDO1FBQzFDLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztRQUk5QyxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELCtDQUF1QixHQUF2QixVQUF3QixLQUE4QjtRQUF0RCxpQkF1QkM7UUF0QkMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFO1lBQzdCLElBQUksQ0FBQyx1QkFBdUIsQ0FB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QixHQUFoQztRQUNFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQzs4RUF4RVUsYUFBYTt5REFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO3dCQXZDcEI7Q0FrSEMsQUE1RUQsSUE0RUM7U0F6RVksYUFBYTtrREFBYixhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBmaW5hbGl6ZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0RXZlbnRQb3NpdGlvbiwgaXNUb3VjaEV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbC9kb20nO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59XHJcblxyXG50eXBlIERlbHRhID0gUG9pbnQ7XHJcblxyXG5pbnRlcmZhY2UgSGFuZGxlckl0ZW0ge1xyXG4gIGhhbmRsZXI/KGU6IEV2ZW50KTogdm9pZDtcclxuXHJcbiAgdGVhcmRvd24oKTogdm9pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFnZVBvc2l0aW9uKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IFBvaW50IHtcclxuICBjb25zdCBlID0gZ2V0RXZlbnRQb3NpdGlvbihldmVudCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IGUucGFnZVgsXHJcbiAgICB5OiBlLnBhZ2VZXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGUgYSBnbG9iYWwgZHJhZ2dpbmcgc2VydmljZSB0byBvdGhlciBjb21wb25lbnRzLlxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEcmFnU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBkcmFnZ2luZ1RocmVzaG9sZCA9IDU7XHJcbiAgcHJpdmF0ZSBjdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZTogU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2g+IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBjdXJyZW50U3RhcnRpbmdQb2ludDogUG9pbnQgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGhhbmRsZVJlZ2lzdHJ5ID0gbmV3IFNldDxIYW5kbGVySXRlbT4oKTtcclxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcclxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdERyYWdnaW5nU2VxdWVuY2UoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogT2JzZXJ2YWJsZTxEZWx0YT4ge1xyXG4gICAgaWYgKCF0aGlzLmhhbmRsZVJlZ2lzdHJ5LnNpemUpIHtcclxuICAgICAgdGhpcy5yZWdpc3RlckRyYWdnaW5nSGFuZGxlcihpc1RvdWNoRXZlbnQoZXZlbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb21wbGV0ZSBsYXN0IGRyYWdnaW5nIHNlcXVlbmNlIGlmIGEgbmV3IHRhcmdldCBpcyBkcmFnZ2VkLlxyXG4gICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcclxuICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudFN0YXJ0aW5nUG9pbnQgPSBnZXRQYWdlUG9zaXRpb24oZXZlbnQpO1xyXG4gICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQgfCBUb3VjaD4oKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5waXBlKFxyXG4gICAgICBtYXAoKGU6IE1vdXNlRXZlbnQgfCBUb3VjaCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB4OiBlLnBhZ2VYIC0gdGhpcy5jdXJyZW50U3RhcnRpbmdQb2ludCEueCxcclxuICAgICAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmN1cnJlbnRTdGFydGluZ1BvaW50IS55XHJcbiAgICAgICAgfTtcclxuICAgICAgfSksXHJcbiAgICAgIGZpbHRlcigoZTogRGVsdGEpID0+IE1hdGguYWJzKGUueCkgPiB0aGlzLmRyYWdnaW5nVGhyZXNob2xkIHx8IE1hdGguYWJzKGUueSkgPiB0aGlzLmRyYWdnaW5nVGhyZXNob2xkKSxcclxuICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy50ZWFyZG93bkRyYWdnaW5nU2VxdWVuY2UoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRHJhZ2dpbmdIYW5kbGVyKGlzVG91Y2g6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChpc1RvdWNoKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcclxuICAgICAgICB0ZWFyZG93bjogdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNobW92ZScsIChlOiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLm5leHQoZS50b3VjaGVzWzBdIHx8IGUuY2hhbmdlZFRvdWNoZXNbMF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmhhbmRsZVJlZ2lzdHJ5LmFkZCh7XHJcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaGVuZCcsICgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UuY29tcGxldGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcclxuICAgICAgICB0ZWFyZG93bjogdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNlbW92ZScsIGUgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5uZXh0KGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmhhbmRsZVJlZ2lzdHJ5LmFkZCh7XHJcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0ZWFyZG93bkRyYWdnaW5nU2VxdWVuY2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlID0gbnVsbDtcclxuICB9XHJcbn1cclxuIl19