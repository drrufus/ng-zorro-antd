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
var NzDomEventService = /** @class */ (function () {
    function NzDomEventService(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource = new Subject();
        this.domEventListeners = new Map();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    NzDomEventService.prototype.registerResizeListener = function () {
        var _this = this;
        if (!this.domEventListeners.has('resize')) {
            this.domEventListeners.set('resize', {
                handler: function () {
                    _this.resizeSource.next();
                },
                countOfListeners: 0
            });
        }
        var listener = this.domEventListeners.get('resize');
        this.tryToStartListener(listener, 'resize');
        return this.resizeSource.pipe(auditTime(16));
    };
    NzDomEventService.prototype.unregisterResizeListener = function () {
        if (!this.domEventListeners.has('resize')) {
            return;
        }
        var listener = this.domEventListeners.get('resize');
        this.tryToStopListener(listener);
    };
    NzDomEventService.prototype.tryToStartListener = function (l, name) {
        var _this = this;
        l.countOfListeners += 1;
        this.ngZone.runOutsideAngular(function () {
            if (l.countOfListeners === 1) {
                l.unsubscribe = _this.renderer.listen('window', name, l.handler);
            }
        });
    };
    NzDomEventService.prototype.tryToStopListener = function (l) {
        l.countOfListeners -= 1;
        if (l.countOfListeners === 0) {
            l.unsubscribe();
            l.unsubscribe = undefined;
        }
    };
    /** @nocollapse */ NzDomEventService.ɵfac = function NzDomEventService_Factory(t) { return new (t || NzDomEventService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2)); };
    /** @nocollapse */ NzDomEventService.ɵprov = i0.ɵɵdefineInjectable({ token: NzDomEventService, factory: NzDomEventService.ɵfac, providedIn: 'root' });
    return NzDomEventService;
}());
export { NzDomEventService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDomEventService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.RendererFactory2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZG9tLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1kb20tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFRM0M7SUFRRSwyQkFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUo3RCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7UUFJL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsa0RBQXNCLEdBQXRCO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDbkMsT0FBTyxFQUFFO29CQUNQLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBQ0QsZ0JBQWdCLEVBQUUsQ0FBQzthQUNwQixDQUFDLENBQUM7U0FDSjtRQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU1QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxvREFBd0IsR0FBeEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QyxPQUFPO1NBQ1I7UUFFRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU8sOENBQWtCLEdBQTFCLFVBQTJCLENBQVcsRUFBRSxJQUFZO1FBQXBELGlCQU9DO1FBTkMsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1lBQzVCLElBQUksQ0FBQyxDQUFDLGdCQUFnQixLQUFLLENBQUMsRUFBRTtnQkFDNUIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqRTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDZDQUFpQixHQUF6QixVQUEwQixDQUFXO1FBQ25DLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO1lBQzVCLENBQUMsQ0FBQyxXQUFZLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztTQUMzQjtJQUNILENBQUM7c0ZBakRVLGlCQUFpQjs2REFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTs0QkFuQnBCO0NBdUVDLEFBckRELElBcURDO1NBbERZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbnRlcmZhY2UgTGlzdGVuZXIge1xyXG4gIGhhbmRsZXIoZTogRXZlbnQpOiB2b2lkO1xyXG4gIHVuc3Vic2NyaWJlPygpOiB2b2lkO1xyXG4gIGNvdW50T2ZMaXN0ZW5lcnM6IG51bWJlcjtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEb21FdmVudFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVzaXplU291cmNlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGRvbUV2ZW50TGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIExpc3RlbmVyPigpO1xyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSByZW5kZXJlckZhY3RvcnkyOiBSZW5kZXJlckZhY3RvcnkyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5kb21FdmVudExpc3RlbmVycy5oYXMoJ3Jlc2l6ZScpKSB7XHJcbiAgICAgIHRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuc2V0KCdyZXNpemUnLCB7XHJcbiAgICAgICAgaGFuZGxlcjogKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZXNpemVTb3VyY2UubmV4dCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY291bnRPZkxpc3RlbmVyczogMFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuZ2V0KCdyZXNpemUnKSE7XHJcbiAgICB0aGlzLnRyeVRvU3RhcnRMaXN0ZW5lcihsaXN0ZW5lciwgJ3Jlc2l6ZScpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc2l6ZVNvdXJjZS5waXBlKGF1ZGl0VGltZSgxNikpO1xyXG4gIH1cclxuXHJcbiAgdW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmhhcygncmVzaXplJykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5kb21FdmVudExpc3RlbmVycy5nZXQoJ3Jlc2l6ZScpITtcclxuICAgIHRoaXMudHJ5VG9TdG9wTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlUb1N0YXJ0TGlzdGVuZXIobDogTGlzdGVuZXIsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbC5jb3VudE9mTGlzdGVuZXJzICs9IDE7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmIChsLmNvdW50T2ZMaXN0ZW5lcnMgPT09IDEpIHtcclxuICAgICAgICBsLnVuc3Vic2NyaWJlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsIG5hbWUsIGwuaGFuZGxlcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlUb1N0b3BMaXN0ZW5lcihsOiBMaXN0ZW5lcik6IHZvaWQge1xyXG4gICAgbC5jb3VudE9mTGlzdGVuZXJzIC09IDE7XHJcbiAgICBpZiAobC5jb3VudE9mTGlzdGVuZXJzID09PSAwKSB7XHJcbiAgICAgIGwudW5zdWJzY3JpYmUhKCk7XHJcbiAgICAgIGwudW5zdWJzY3JpYmUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==