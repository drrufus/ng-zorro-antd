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
export class NzDomEventService {
    constructor(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource = new Subject();
        this.domEventListeners = new Map();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    registerResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            this.domEventListeners.set('resize', {
                handler: () => {
                    this.resizeSource.next();
                },
                countOfListeners: 0
            });
        }
        const listener = this.domEventListeners.get('resize');
        this.tryToStartListener(listener, 'resize');
        return this.resizeSource.pipe(auditTime(16));
    }
    unregisterResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            return;
        }
        const listener = this.domEventListeners.get('resize');
        this.tryToStopListener(listener);
    }
    tryToStartListener(l, name) {
        l.countOfListeners += 1;
        this.ngZone.runOutsideAngular(() => {
            if (l.countOfListeners === 1) {
                l.unsubscribe = this.renderer.listen('window', name, l.handler);
            }
        });
    }
    tryToStopListener(l) {
        l.countOfListeners -= 1;
        if (l.countOfListeners === 0) {
            l.unsubscribe();
            l.unsubscribe = undefined;
        }
    }
}
/** @nocollapse */ NzDomEventService.ɵfac = function NzDomEventService_Factory(t) { return new (t || NzDomEventService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2)); };
/** @nocollapse */ NzDomEventService.ɵprov = i0.ɵɵdefineInjectable({ token: NzDomEventService, factory: NzDomEventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDomEventService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.RendererFactory2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZG9tLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1kb20tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFXM0MsTUFBTSxPQUFPLGlCQUFpQjtJQUs1QixZQUFvQixNQUFjLEVBQVUsZ0JBQWtDO1FBQTFELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSjdELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUkvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ25DLE9BQU8sRUFBRSxHQUFTLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBQ0QsZ0JBQWdCLEVBQUUsQ0FBQzthQUNwQixDQUFDLENBQUM7U0FDSjtRQUVELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU1QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx3QkFBd0I7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekMsT0FBTztTQUNSO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLGtCQUFrQixDQUFDLENBQVcsRUFBRSxJQUFZO1FBQ2xELENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8saUJBQWlCLENBQUMsQ0FBVztRQUNuQyxDQUFDLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxDQUFDLGdCQUFnQixLQUFLLENBQUMsRUFBRTtZQUM1QixDQUFDLENBQUMsV0FBWSxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDM0I7SUFDSCxDQUFDOztrRkFqRFUsaUJBQWlCO3lEQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNO2tEQUVQLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW50ZXJmYWNlIExpc3RlbmVyIHtcclxuICBoYW5kbGVyKGU6IEV2ZW50KTogdm9pZDtcclxuICB1bnN1YnNjcmliZT8oKTogdm9pZDtcclxuICBjb3VudE9mTGlzdGVuZXJzOiBudW1iZXI7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56RG9tRXZlbnRTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZVNvdXJjZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBkb21FdmVudExpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCBMaXN0ZW5lcj4oKTtcclxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mikge1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICBpZiAoIXRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuaGFzKCdyZXNpemUnKSkge1xyXG4gICAgICB0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLnNldCgncmVzaXplJywge1xyXG4gICAgICAgIGhhbmRsZXI6ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAgIHRoaXMucmVzaXplU291cmNlLm5leHQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvdW50T2ZMaXN0ZW5lcnM6IDBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmdldCgncmVzaXplJykhO1xyXG4gICAgdGhpcy50cnlUb1N0YXJ0TGlzdGVuZXIobGlzdGVuZXIsICdyZXNpemUnKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNpemVTb3VyY2UucGlwZShhdWRpdFRpbWUoMTYpKTtcclxuICB9XHJcblxyXG4gIHVucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kb21FdmVudExpc3RlbmVycy5oYXMoJ3Jlc2l6ZScpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuZ2V0KCdyZXNpemUnKSE7XHJcbiAgICB0aGlzLnRyeVRvU3RvcExpc3RlbmVyKGxpc3RlbmVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5VG9TdGFydExpc3RlbmVyKGw6IExpc3RlbmVyLCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGwuY291bnRPZkxpc3RlbmVycyArPSAxO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBpZiAobC5jb3VudE9mTGlzdGVuZXJzID09PSAxKSB7XHJcbiAgICAgICAgbC51bnN1YnNjcmliZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCBuYW1lLCBsLmhhbmRsZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5VG9TdG9wTGlzdGVuZXIobDogTGlzdGVuZXIpOiB2b2lkIHtcclxuICAgIGwuY291bnRPZkxpc3RlbmVycyAtPSAxO1xyXG4gICAgaWYgKGwuY291bnRPZkxpc3RlbmVycyA9PT0gMCkge1xyXG4gICAgICBsLnVuc3Vic2NyaWJlISgpO1xyXG4gICAgICBsLnVuc3Vic2NyaWJlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=