/**
 * @fileoverview added by tsickle
 * Generated from: nz-resizable.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { isTouchEvent } from 'ng-zorro-antd/core';
export class NzResizableService {
    // tslint:disable-next-line:no-any
    /**
     * @param {?} ngZone
     * @param {?} document
     */
    constructor(ngZone, document) {
        this.ngZone = ngZone;
        this.listeners = new Map();
        this.handleMouseDown$ = new Subject();
        this.documentMouseUp$ = new Subject();
        this.documentMouseMove$ = new Subject();
        this.mouseEntered$ = new Subject();
        this.document = document;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    startResizing(event) {
        /** @type {?} */
        const _isTouchEvent = isTouchEvent(event);
        this.clearListeners();
        /** @type {?} */
        const moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
        /** @type {?} */
        const upEvent = _isTouchEvent ? 'touchend' : 'mouseup';
        /** @type {?} */
        const moveEventHandler = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.documentMouseMove$.next(e);
        });
        /** @type {?} */
        const upEventHandler = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.documentMouseUp$.next(e);
            this.clearListeners();
        });
        this.listeners.set(moveEvent, moveEventHandler);
        this.listeners.set(upEvent, upEventHandler);
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.listeners.forEach((/**
             * @param {?} handler
             * @param {?} name
             * @return {?}
             */
            (handler, name) => {
                this.document.addEventListener(name, (/** @type {?} */ (handler)));
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    clearListeners() {
        this.listeners.forEach((/**
         * @param {?} handler
         * @param {?} name
         * @return {?}
         */
        (handler, name) => {
            this.document.removeEventListener(name, (/** @type {?} */ (handler)));
        }));
        this.listeners.clear();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.handleMouseDown$.complete();
        this.documentMouseUp$.complete();
        this.documentMouseMove$.complete();
        this.mouseEntered$.complete();
        this.clearListeners();
    }
}
NzResizableService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzResizableService.ctorParameters = () => [
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzResizableService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    NzResizableService.prototype.listeners;
    /** @type {?} */
    NzResizableService.prototype.handleMouseDown$;
    /** @type {?} */
    NzResizableService.prototype.documentMouseUp$;
    /** @type {?} */
    NzResizableService.prototype.documentMouseMove$;
    /** @type {?} */
    NzResizableService.prototype.mouseEntered$;
    /**
     * @type {?}
     * @private
     */
    NzResizableService.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbIm56LXJlc2l6YWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJbEQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBVTdCLFlBQW9CLE1BQWMsRUFBb0IsUUFBYTtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUjFCLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBb0QsQ0FBQztRQUVoRixxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBZ0MsQ0FBQztRQUMvRCxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBMkIsQ0FBQztRQUMxRCx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBMkIsQ0FBQztRQUM1RCxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFJckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBOEI7O2NBQ3BDLGFBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Y0FDaEIsU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXOztjQUNyRCxPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVM7O2NBQ2hELGdCQUFnQjs7OztRQUFHLENBQUMsQ0FBMEIsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFBOztjQUNLLGNBQWM7Ozs7UUFBRyxDQUFDLENBQTBCLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUE7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7O1lBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLG1CQUFBLE9BQU8sRUFBaUIsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLG1CQUFBLE9BQU8sRUFBaUIsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQW5ERixVQUFVOzs7O1lBUGtCLE1BQU07NENBa0JJLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBVHBELHNDQUEyQjs7Ozs7SUFDM0IsdUNBQWdGOztJQUVoRiw4Q0FBK0Q7O0lBQy9ELDhDQUEwRDs7SUFDMUQsZ0RBQTREOztJQUM1RCwyQ0FBdUM7Ozs7O0lBRzNCLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBpc1RvdWNoRXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50IH0gZnJvbSAnLi9uei1yZXNpemUtaGFuZGxlLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelJlc2l6YWJsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xyXG4gIHByaXZhdGUgbGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ+KCk7XHJcblxyXG4gIGhhbmRsZU1vdXNlRG93biQgPSBuZXcgU3ViamVjdDxOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50PigpO1xyXG4gIGRvY3VtZW50TW91c2VVcCQgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oKTtcclxuICBkb2N1bWVudE1vdXNlTW92ZSQgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oKTtcclxuICBtb3VzZUVudGVyZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICB9XHJcblxyXG4gIHN0YXJ0UmVzaXppbmcoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBfaXNUb3VjaEV2ZW50ID0gaXNUb3VjaEV2ZW50KGV2ZW50KTtcclxuICAgIHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcclxuICAgIGNvbnN0IG1vdmVFdmVudCA9IF9pc1RvdWNoRXZlbnQgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xyXG4gICAgY29uc3QgdXBFdmVudCA9IF9pc1RvdWNoRXZlbnQgPyAndG91Y2hlbmQnIDogJ21vdXNldXAnO1xyXG4gICAgY29uc3QgbW92ZUV2ZW50SGFuZGxlciA9IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmRvY3VtZW50TW91c2VNb3ZlJC5uZXh0KGUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwRXZlbnRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZVVwJC5uZXh0KGUpO1xyXG4gICAgICB0aGlzLmNsZWFyTGlzdGVuZXJzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubGlzdGVuZXJzLnNldChtb3ZlRXZlbnQsIG1vdmVFdmVudEhhbmRsZXIpO1xyXG4gICAgdGhpcy5saXN0ZW5lcnMuc2V0KHVwRXZlbnQsIHVwRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGhhbmRsZXIsIG5hbWUpID0+IHtcclxuICAgICAgICB0aGlzLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciBhcyBFdmVudExpc3RlbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChoYW5kbGVyLCBuYW1lKSA9PiB7XHJcbiAgICAgIHRoaXMuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyIGFzIEV2ZW50TGlzdGVuZXIpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlRG93biQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuZG9jdW1lbnRNb3VzZVVwJC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kb2N1bWVudE1vdXNlTW92ZSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMubW91c2VFbnRlcmVkJC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG4iXX0=