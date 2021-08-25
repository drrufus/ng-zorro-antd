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
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { isTouchEvent } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
var NzResizableService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzResizableService(ngZone, document) {
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
    NzResizableService.prototype.startResizing = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var _isTouchEvent = isTouchEvent(event);
        this.clearListeners();
        /** @type {?} */
        var moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
        /** @type {?} */
        var upEvent = _isTouchEvent ? 'touchend' : 'mouseup';
        /** @type {?} */
        var moveEventHandler = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.documentMouseMove$.next(e);
        });
        /** @type {?} */
        var upEventHandler = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.documentMouseUp$.next(e);
            _this.clearListeners();
        });
        this.listeners.set(moveEvent, moveEventHandler);
        this.listeners.set(upEvent, upEventHandler);
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.listeners.forEach((/**
             * @param {?} handler
             * @param {?} name
             * @return {?}
             */
            function (handler, name) {
                _this.document.addEventListener(name, (/** @type {?} */ (handler)));
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzResizableService.prototype.clearListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.listeners.forEach((/**
         * @param {?} handler
         * @param {?} name
         * @return {?}
         */
        function (handler, name) {
            _this.document.removeEventListener(name, (/** @type {?} */ (handler)));
        }));
        this.listeners.clear();
    };
    /**
     * @return {?}
     */
    NzResizableService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.handleMouseDown$.complete();
        this.documentMouseUp$.complete();
        this.documentMouseMove$.complete();
        this.mouseEntered$.complete();
        this.clearListeners();
    };
    /** @nocollapse */
    NzResizableService.ctorParameters = function () { return [
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
NzResizableService.ɵfac = function NzResizableService_Factory(t) { return new (t || NzResizableService)(ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(DOCUMENT)); };
NzResizableService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzResizableService, factory: function (t) { return NzResizableService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResizableService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
    return NzResizableService;
}());
export { NzResizableService };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS9uei1yZXNpemFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR2xEO0lBVUUsa0NBQWtDO0lBQ2xDLDRCQUFvQixNQUFjLEVBQW9CLFFBQWE7UUFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVIxQixjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQW9ELENBQUM7UUFFaEYscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQWdDLENBQUM7UUFDL0QscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQTJCLENBQUM7UUFDMUQsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQTJCLENBQUM7UUFDNUQsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBSXJDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsMENBQWE7Ozs7SUFBYixVQUFjLEtBQThCO1FBQTVDLGlCQXFCQzs7WUFwQk8sYUFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDOztZQUNoQixTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVc7O1lBQ3JELE9BQU8sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUzs7WUFDaEQsZ0JBQWdCOzs7O1FBQUcsVUFBQyxDQUEwQjtZQUNsRCxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQTs7WUFDSyxjQUFjOzs7O1FBQUcsVUFBQyxDQUEwQjtZQUNoRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUE7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDO1lBQzVCLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7Ozs7WUFBQyxVQUFDLE9BQU8sRUFBRSxJQUFJO2dCQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxtQkFBQSxPQUFPLEVBQWlCLENBQUMsQ0FBQztZQUNqRSxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTywyQ0FBYzs7OztJQUF0QjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLElBQUk7WUFDbkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsbUJBQUEsT0FBTyxFQUFpQixDQUFDLENBQUM7UUFDcEUsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQ0gsQUFuRE07OytCQURMLFVBQVU7Z0JBUGtCLE1BQU07Z0RBa0JJLE1BQU0sU0FBQyxRQUFROzs7Ozs7Ozs7a0NBQWlCO0lBeUN2RSx5QkFBQztDQUFBLEFBcERELElBb0RDO1NBbkRZLGtCQUFrQjs7Ozs7O0lBQzdCLHNDQUEyQjs7Ozs7SUFDM0IsdUNBQWdGOztJQUVoRiw4Q0FBK0Q7O0lBQy9ELDhDQUEwRDs7SUFDMUQsZ0RBQTREOztJQUM1RCwyQ0FBdUM7Ozs7O0lBRzNCLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBpc1RvdWNoRXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50IH0gZnJvbSAnLi9uei1yZXNpemUtaGFuZGxlLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelJlc2l6YWJsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xyXG4gIHByaXZhdGUgbGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ+KCk7XHJcblxyXG4gIGhhbmRsZU1vdXNlRG93biQgPSBuZXcgU3ViamVjdDxOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50PigpO1xyXG4gIGRvY3VtZW50TW91c2VVcCQgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oKTtcclxuICBkb2N1bWVudE1vdXNlTW92ZSQgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oKTtcclxuICBtb3VzZUVudGVyZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICB9XHJcblxyXG4gIHN0YXJ0UmVzaXppbmcoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBfaXNUb3VjaEV2ZW50ID0gaXNUb3VjaEV2ZW50KGV2ZW50KTtcclxuICAgIHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcclxuICAgIGNvbnN0IG1vdmVFdmVudCA9IF9pc1RvdWNoRXZlbnQgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xyXG4gICAgY29uc3QgdXBFdmVudCA9IF9pc1RvdWNoRXZlbnQgPyAndG91Y2hlbmQnIDogJ21vdXNldXAnO1xyXG4gICAgY29uc3QgbW92ZUV2ZW50SGFuZGxlciA9IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmRvY3VtZW50TW91c2VNb3ZlJC5uZXh0KGUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwRXZlbnRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZVVwJC5uZXh0KGUpO1xyXG4gICAgICB0aGlzLmNsZWFyTGlzdGVuZXJzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubGlzdGVuZXJzLnNldChtb3ZlRXZlbnQsIG1vdmVFdmVudEhhbmRsZXIpO1xyXG4gICAgdGhpcy5saXN0ZW5lcnMuc2V0KHVwRXZlbnQsIHVwRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGhhbmRsZXIsIG5hbWUpID0+IHtcclxuICAgICAgICB0aGlzLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciBhcyBFdmVudExpc3RlbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChoYW5kbGVyLCBuYW1lKSA9PiB7XHJcbiAgICAgIHRoaXMuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyIGFzIEV2ZW50TGlzdGVuZXIpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlRG93biQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuZG9jdW1lbnRNb3VzZVVwJC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kb2N1bWVudE1vdXNlTW92ZSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMubW91c2VFbnRlcmVkJC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG4iXX0=