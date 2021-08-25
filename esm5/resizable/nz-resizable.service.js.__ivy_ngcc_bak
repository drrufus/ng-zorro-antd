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
    NzResizableService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzResizableService.ctorParameters = function () { return [
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbIm56LXJlc2l6YWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdsRDtJQVVFLGtDQUFrQztJQUNsQyw0QkFBb0IsTUFBYyxFQUFvQixRQUFhO1FBQS9DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSMUIsY0FBUyxHQUFHLElBQUksR0FBRyxFQUFvRCxDQUFDO1FBRWhGLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFnQyxDQUFDO1FBQy9ELHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUEyQixDQUFDO1FBQzFELHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUEyQixDQUFDO1FBQzVELGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUlyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELDBDQUFhOzs7O0lBQWIsVUFBYyxLQUE4QjtRQUE1QyxpQkFxQkM7O1lBcEJPLGFBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7WUFDaEIsU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXOztZQUNyRCxPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVM7O1lBQ2hELGdCQUFnQjs7OztRQUFHLFVBQUMsQ0FBMEI7WUFDbEQsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUE7O1lBQ0ssY0FBYzs7OztRQUFHLFVBQUMsQ0FBMEI7WUFDaEQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFBO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQztZQUM1QixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxPQUFPLEVBQUUsSUFBSTtnQkFDbkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsbUJBQUEsT0FBTyxFQUFpQixDQUFDLENBQUM7WUFDakUsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sMkNBQWM7Ozs7SUFBdEI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLE9BQU8sRUFBRSxJQUFJO1lBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLG1CQUFBLE9BQU8sRUFBaUIsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBbkRGLFVBQVU7Ozs7Z0JBUGtCLE1BQU07Z0RBa0JJLE1BQU0sU0FBQyxRQUFROztJQXlDdEQseUJBQUM7Q0FBQSxBQXBERCxJQW9EQztTQW5EWSxrQkFBa0I7Ozs7OztJQUM3QixzQ0FBMkI7Ozs7O0lBQzNCLHVDQUFnRjs7SUFFaEYsOENBQStEOztJQUMvRCw4Q0FBMEQ7O0lBQzFELGdEQUE0RDs7SUFDNUQsMkNBQXVDOzs7OztJQUczQixvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgaXNUb3VjaEV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB9IGZyb20gJy4vbnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTnpSZXNpemFibGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcclxuICBwcml2YXRlIGxpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB2b2lkPigpO1xyXG5cclxuICBoYW5kbGVNb3VzZURvd24kID0gbmV3IFN1YmplY3Q8TnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudD4oKTtcclxuICBkb2N1bWVudE1vdXNlVXAkID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoRXZlbnQ+KCk7XHJcbiAgZG9jdW1lbnRNb3VzZU1vdmUkID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoRXZlbnQ+KCk7XHJcbiAgbW91c2VFbnRlcmVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lLCBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XHJcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzdGFydFJlc2l6aW5nKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgX2lzVG91Y2hFdmVudCA9IGlzVG91Y2hFdmVudChldmVudCk7XHJcbiAgICB0aGlzLmNsZWFyTGlzdGVuZXJzKCk7XHJcbiAgICBjb25zdCBtb3ZlRXZlbnQgPSBfaXNUb3VjaEV2ZW50ID8gJ3RvdWNobW92ZScgOiAnbW91c2Vtb3ZlJztcclxuICAgIGNvbnN0IHVwRXZlbnQgPSBfaXNUb3VjaEV2ZW50ID8gJ3RvdWNoZW5kJyA6ICdtb3VzZXVwJztcclxuICAgIGNvbnN0IG1vdmVFdmVudEhhbmRsZXIgPSAoZTogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5kb2N1bWVudE1vdXNlTW92ZSQubmV4dChlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCB1cEV2ZW50SGFuZGxlciA9IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmRvY3VtZW50TW91c2VVcCQubmV4dChlKTtcclxuICAgICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmxpc3RlbmVycy5zZXQobW92ZUV2ZW50LCBtb3ZlRXZlbnRIYW5kbGVyKTtcclxuICAgIHRoaXMubGlzdGVuZXJzLnNldCh1cEV2ZW50LCB1cEV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChoYW5kbGVyLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgoaGFuZGxlciwgbmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciBhcyBFdmVudExpc3RlbmVyKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVNb3VzZURvd24kLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmRvY3VtZW50TW91c2VVcCQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuZG9jdW1lbnRNb3VzZU1vdmUkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLm1vdXNlRW50ZXJlZCQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcclxuICB9XHJcbn1cclxuIl19