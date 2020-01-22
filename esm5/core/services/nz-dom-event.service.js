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
    NzDomEventService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzDomEventService.ctorParameters = function () { return [
        { type: NgZone },
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ NzDomEventService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDomEventService_Factory() { return new NzDomEventService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2)); }, token: NzDomEventService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZG9tLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1kb20tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUUzQyx1QkFJQzs7O0lBREMsb0NBQXlCOzs7OztJQUZ6Qiw4Q0FBd0I7Ozs7SUFDeEIsaURBQXFCOztBQUl2QjtJQVFFLDJCQUFvQixNQUFjLEVBQVUsZ0JBQWtDO1FBQTFELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSjdELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUkvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxrREFBc0I7OztJQUF0QjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ25DLE9BQU87OztnQkFBRTtvQkFDUCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMzQixDQUFDLENBQUE7Z0JBQ0QsZ0JBQWdCLEVBQUUsQ0FBQzthQUNwQixDQUFDLENBQUM7U0FDSjs7WUFFSyxRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBQztRQUN0RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELG9EQUF3Qjs7O0lBQXhCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekMsT0FBTztTQUNSOztZQUVLLFFBQVEsR0FBRyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFDO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7O0lBRU8sOENBQWtCOzs7Ozs7SUFBMUIsVUFBMkIsQ0FBVyxFQUFFLElBQVk7UUFBcEQsaUJBT0M7UUFOQyxDQUFDLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQztZQUM1QixJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakU7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLDZDQUFpQjs7Ozs7SUFBekIsVUFBMEIsQ0FBVztRQUNuQyxDQUFDLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxDQUFDLGdCQUFnQixLQUFLLENBQUMsRUFBRTtZQUM1QixtQkFBQSxDQUFDLENBQUMsV0FBVyxFQUFDLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQXBERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVpvQixNQUFNO2dCQUFhLGdCQUFnQjs7OzRCQVJ4RDtDQXVFQyxBQXJERCxJQXFEQztTQWxEWSxpQkFBaUI7Ozs7OztJQUM1Qix5Q0FBb0Q7Ozs7O0lBQ3BELDhDQUFpRTs7Ozs7SUFDakUscUNBQTRCOzs7OztJQUVoQixtQ0FBc0I7Ozs7O0lBQUUsNkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmludGVyZmFjZSBMaXN0ZW5lciB7XHJcbiAgaGFuZGxlcihlOiBFdmVudCk6IHZvaWQ7XHJcbiAgdW5zdWJzY3JpYmU/KCk6IHZvaWQ7XHJcbiAgY291bnRPZkxpc3RlbmVyczogbnVtYmVyO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRvbUV2ZW50U2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSByZXNpemVTb3VyY2UgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZG9tRXZlbnRMaXN0ZW5lcnMgPSBuZXcgTWFwPHN0cmluZywgTGlzdGVuZXI+KCk7XHJcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcclxuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeTIuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgaWYgKCF0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmhhcygncmVzaXplJykpIHtcclxuICAgICAgdGhpcy5kb21FdmVudExpc3RlbmVycy5zZXQoJ3Jlc2l6ZScsIHtcclxuICAgICAgICBoYW5kbGVyOiAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlc2l6ZVNvdXJjZS5uZXh0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb3VudE9mTGlzdGVuZXJzOiAwXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5kb21FdmVudExpc3RlbmVycy5nZXQoJ3Jlc2l6ZScpITtcclxuICAgIHRoaXMudHJ5VG9TdGFydExpc3RlbmVyKGxpc3RlbmVyLCAncmVzaXplJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzaXplU291cmNlLnBpcGUoYXVkaXRUaW1lKDE2KSk7XHJcbiAgfVxyXG5cclxuICB1bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuaGFzKCdyZXNpemUnKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmdldCgncmVzaXplJykhO1xyXG4gICAgdGhpcy50cnlUb1N0b3BMaXN0ZW5lcihsaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeVRvU3RhcnRMaXN0ZW5lcihsOiBMaXN0ZW5lciwgbmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsLmNvdW50T2ZMaXN0ZW5lcnMgKz0gMTtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgaWYgKGwuY291bnRPZkxpc3RlbmVycyA9PT0gMSkge1xyXG4gICAgICAgIGwudW5zdWJzY3JpYmUgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgbmFtZSwgbC5oYW5kbGVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeVRvU3RvcExpc3RlbmVyKGw6IExpc3RlbmVyKTogdm9pZCB7XHJcbiAgICBsLmNvdW50T2ZMaXN0ZW5lcnMgLT0gMTtcclxuICAgIGlmIChsLmNvdW50T2ZMaXN0ZW5lcnMgPT09IDApIHtcclxuICAgICAgbC51bnN1YnNjcmliZSEoKTtcclxuICAgICAgbC51bnN1YnNjcmliZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19