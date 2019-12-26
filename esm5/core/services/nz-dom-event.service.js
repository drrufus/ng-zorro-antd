/**
 * @fileoverview added by tsickle
 * Generated from: services/nz-dom-event.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZG9tLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1kb20tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFM0MsdUJBSUM7OztJQURDLG9DQUF5Qjs7Ozs7SUFGekIsOENBQXdCOzs7O0lBQ3hCLGlEQUFxQjs7QUFJdkI7SUFRRSwyQkFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUo3RCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7UUFJL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRUQsa0RBQXNCOzs7SUFBdEI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNuQyxPQUFPOzs7Z0JBQUU7b0JBQ1AsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQyxDQUFBO2dCQUNELGdCQUFnQixFQUFFLENBQUM7YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7O1lBRUssUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUM7UUFDdEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU1QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxvREFBd0I7OztJQUF4QjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLE9BQU87U0FDUjs7WUFFSyxRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBQztRQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7OztJQUVPLDhDQUFrQjs7Ozs7O0lBQTFCLFVBQTJCLENBQVcsRUFBRSxJQUFZO1FBQXBELGlCQU9DO1FBTkMsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDNUIsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pFO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyw2Q0FBaUI7Ozs7O0lBQXpCLFVBQTBCLENBQVc7UUFDbkMsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7WUFDNUIsbUJBQUEsQ0FBQyxDQUFDLFdBQVcsRUFBQyxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDM0I7SUFDSCxDQUFDOztnQkFwREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFab0IsTUFBTTtnQkFBYSxnQkFBZ0I7Ozs0QkFSeEQ7Q0F1RUMsQUFyREQsSUFxREM7U0FsRFksaUJBQWlCOzs7Ozs7SUFDNUIseUNBQW9EOzs7OztJQUNwRCw4Q0FBaUU7Ozs7O0lBQ2pFLHFDQUE0Qjs7Ozs7SUFFaEIsbUNBQXNCOzs7OztJQUFFLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbnRlcmZhY2UgTGlzdGVuZXIge1xyXG4gIGhhbmRsZXIoZTogRXZlbnQpOiB2b2lkO1xyXG4gIHVuc3Vic2NyaWJlPygpOiB2b2lkO1xyXG4gIGNvdW50T2ZMaXN0ZW5lcnM6IG51bWJlcjtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEb21FdmVudFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVzaXplU291cmNlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGRvbUV2ZW50TGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIExpc3RlbmVyPigpO1xyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSByZW5kZXJlckZhY3RvcnkyOiBSZW5kZXJlckZhY3RvcnkyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5kb21FdmVudExpc3RlbmVycy5oYXMoJ3Jlc2l6ZScpKSB7XHJcbiAgICAgIHRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuc2V0KCdyZXNpemUnLCB7XHJcbiAgICAgICAgaGFuZGxlcjogKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZXNpemVTb3VyY2UubmV4dCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY291bnRPZkxpc3RlbmVyczogMFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuZ2V0KCdyZXNpemUnKSE7XHJcbiAgICB0aGlzLnRyeVRvU3RhcnRMaXN0ZW5lcihsaXN0ZW5lciwgJ3Jlc2l6ZScpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc2l6ZVNvdXJjZS5waXBlKGF1ZGl0VGltZSgxNikpO1xyXG4gIH1cclxuXHJcbiAgdW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmhhcygncmVzaXplJykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5kb21FdmVudExpc3RlbmVycy5nZXQoJ3Jlc2l6ZScpITtcclxuICAgIHRoaXMudHJ5VG9TdG9wTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlUb1N0YXJ0TGlzdGVuZXIobDogTGlzdGVuZXIsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbC5jb3VudE9mTGlzdGVuZXJzICs9IDE7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmIChsLmNvdW50T2ZMaXN0ZW5lcnMgPT09IDEpIHtcclxuICAgICAgICBsLnVuc3Vic2NyaWJlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsIG5hbWUsIGwuaGFuZGxlcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlUb1N0b3BMaXN0ZW5lcihsOiBMaXN0ZW5lcik6IHZvaWQge1xyXG4gICAgbC5jb3VudE9mTGlzdGVuZXJzIC09IDE7XHJcbiAgICBpZiAobC5jb3VudE9mTGlzdGVuZXJzID09PSAwKSB7XHJcbiAgICAgIGwudW5zdWJzY3JpYmUhKCk7XHJcbiAgICAgIGwudW5zdWJzY3JpYmUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==