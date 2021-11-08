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
import { Injectable, NgZone, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
function Listener() { }
if (false) {
    /** @type {?} */
    Listener.prototype.countOfListeners;
    /**
     * @param {?} e
     * @return {?}
     */
    Listener.prototype.handler = function (e) { };
    /**
     * @return {?}
     */
    Listener.prototype.unsubscribe = function () { };
}
var NzDomEventService = /** @class */ (function () {
    function NzDomEventService(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource = new Subject();
        this.domEventListeners = new Map();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    NzDomEventService.prototype.registerResizeListener = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.domEventListeners.has('resize')) {
            this.domEventListeners.set('resize', {
                handler: (/**
                 * @return {?}
                 */
                function () {
                    _this.resizeSource.next();
                }),
                countOfListeners: 0
            });
        }
        /** @type {?} */
        var listener = (/** @type {?} */ (this.domEventListeners.get('resize')));
        this.tryToStartListener(listener, 'resize');
        return this.resizeSource.pipe(auditTime(16));
    };
    /**
     * @return {?}
     */
    NzDomEventService.prototype.unregisterResizeListener = /**
     * @return {?}
     */
    function () {
        if (!this.domEventListeners.has('resize')) {
            return;
        }
        /** @type {?} */
        var listener = (/** @type {?} */ (this.domEventListeners.get('resize')));
        this.tryToStopListener(listener);
    };
    /**
     * @private
     * @param {?} l
     * @param {?} name
     * @return {?}
     */
    NzDomEventService.prototype.tryToStartListener = /**
     * @private
     * @param {?} l
     * @param {?} name
     * @return {?}
     */
    function (l, name) {
        var _this = this;
        l.countOfListeners += 1;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (l.countOfListeners === 1) {
                l.unsubscribe = _this.renderer.listen('window', name, l.handler);
            }
        }));
    };
    /**
     * @private
     * @param {?} l
     * @return {?}
     */
    NzDomEventService.prototype.tryToStopListener = /**
     * @private
     * @param {?} l
     * @return {?}
     */
    function (l) {
        l.countOfListeners -= 1;
        if (l.countOfListeners === 0) {
            (/** @type {?} */ (l.unsubscribe))();
            l.unsubscribe = undefined;
        }
    };
    /** @nocollapse */
    NzDomEventService.ctorParameters = function () { return [
        { type: NgZone },
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ NzDomEventService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDomEventService_Factory() { return new NzDomEventService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2)); }, token: NzDomEventService, providedIn: "root" });
NzDomEventService.ɵfac = function NzDomEventService_Factory(t) { return new (t || NzDomEventService)(ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(ɵngcc0.RendererFactory2)); };
NzDomEventService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzDomEventService, factory: function (t) { return NzDomEventService.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDomEventService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.RendererFactory2 }]; }, null); })();
    return NzDomEventService;
}());
export { NzDomEventService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.resizeSource;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.domEventListeners;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.rendererFactory2;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZG9tLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMvbnotZG9tLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRTNDLHVCQUlDOzs7SUFEQyxvQ0FBeUI7Ozs7O0lBRnpCLDhDQUF3Qjs7OztJQUN4QixpREFBcUI7O0FBSXZCO0lBUUUsMkJBQW9CLE1BQWMsRUFBVSxnQkFBa0M7UUFBMUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFKN0QsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ25DLHNCQUFpQixHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO1FBSS9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELGtEQUFzQjs7O0lBQXRCO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDbkMsT0FBTzs7O2dCQUFFO29CQUNQLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzNCLENBQUMsQ0FBQTtnQkFDRCxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3BCLENBQUMsQ0FBQztTQUNKOztZQUVLLFFBQVEsR0FBRyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFDO1FBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsb0RBQXdCOzs7SUFBeEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QyxPQUFPO1NBQ1I7O1lBRUssUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUM7UUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7Ozs7SUFFTyw4Q0FBa0I7Ozs7OztJQUExQixVQUEyQixDQUFXLEVBQUUsSUFBWTtRQUFwRCxpQkFPQztRQU5DLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDO1lBQzVCLElBQUksQ0FBQyxDQUFDLGdCQUFnQixLQUFLLENBQUMsRUFBRTtnQkFDNUIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqRTtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sNkNBQWlCOzs7OztJQUF6QixVQUEwQixDQUFXO1FBQ25DLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO1lBQzVCLG1CQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUMsRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQyxDQUNILEFBbERTOzs4QkFIUixVQUFVLFNBQUM7U0FDVixVQUFVLEVBQUUsTEFYTyxNQUFNO0NBV1Asa0JBQ25CLEhBWnVDLGdCQUFnQjs7Ozs7Ozs7OzswR0FhNUI7NEJBckI1QjtDQXVFQyxBQXJERCxJQXFEQztTQWxEWSxpQkFBaUI7Ozs7OztJQUM1Qix5Q0FBb0Q7Ozs7O0lBQ3BELDhDQUFpRTs7Ozs7SUFDakUscUNBQTRCOzs7OztJQUVoQixtQ0FBc0I7Ozs7O0lBQUUsNkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmludGVyZmFjZSBMaXN0ZW5lciB7XHJcbiAgaGFuZGxlcihlOiBFdmVudCk6IHZvaWQ7XHJcbiAgdW5zdWJzY3JpYmU/KCk6IHZvaWQ7XHJcbiAgY291bnRPZkxpc3RlbmVyczogbnVtYmVyO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRvbUV2ZW50U2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSByZXNpemVTb3VyY2UgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZG9tRXZlbnRMaXN0ZW5lcnMgPSBuZXcgTWFwPHN0cmluZywgTGlzdGVuZXI+KCk7XHJcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcclxuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeTIuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgaWYgKCF0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmhhcygncmVzaXplJykpIHtcclxuICAgICAgdGhpcy5kb21FdmVudExpc3RlbmVycy5zZXQoJ3Jlc2l6ZScsIHtcclxuICAgICAgICBoYW5kbGVyOiAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlc2l6ZVNvdXJjZS5uZXh0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb3VudE9mTGlzdGVuZXJzOiAwXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5kb21FdmVudExpc3RlbmVycy5nZXQoJ3Jlc2l6ZScpITtcclxuICAgIHRoaXMudHJ5VG9TdGFydExpc3RlbmVyKGxpc3RlbmVyLCAncmVzaXplJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzaXplU291cmNlLnBpcGUoYXVkaXRUaW1lKDE2KSk7XHJcbiAgfVxyXG5cclxuICB1bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuaGFzKCdyZXNpemUnKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmdldCgncmVzaXplJykhO1xyXG4gICAgdGhpcy50cnlUb1N0b3BMaXN0ZW5lcihsaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeVRvU3RhcnRMaXN0ZW5lcihsOiBMaXN0ZW5lciwgbmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsLmNvdW50T2ZMaXN0ZW5lcnMgKz0gMTtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgaWYgKGwuY291bnRPZkxpc3RlbmVycyA9PT0gMSkge1xyXG4gICAgICAgIGwudW5zdWJzY3JpYmUgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgbmFtZSwgbC5oYW5kbGVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeVRvU3RvcExpc3RlbmVyKGw6IExpc3RlbmVyKTogdm9pZCB7XHJcbiAgICBsLmNvdW50T2ZMaXN0ZW5lcnMgLT0gMTtcclxuICAgIGlmIChsLmNvdW50T2ZMaXN0ZW5lcnMgPT09IDApIHtcclxuICAgICAgbC51bnN1YnNjcmliZSEoKTtcclxuICAgICAgbC51bnN1YnNjcmliZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19