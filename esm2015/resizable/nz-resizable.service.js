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
import * as i0 from "@angular/core";
export class NzResizableService {
    // tslint:disable-next-line:no-any
    constructor(ngZone, document) {
        this.ngZone = ngZone;
        this.listeners = new Map();
        this.handleMouseDown$ = new Subject();
        this.documentMouseUp$ = new Subject();
        this.documentMouseMove$ = new Subject();
        this.mouseEntered$ = new Subject();
        this.document = document;
    }
    startResizing(event) {
        const _isTouchEvent = isTouchEvent(event);
        this.clearListeners();
        const moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
        const upEvent = _isTouchEvent ? 'touchend' : 'mouseup';
        const moveEventHandler = (e) => {
            this.documentMouseMove$.next(e);
        };
        const upEventHandler = (e) => {
            this.documentMouseUp$.next(e);
            this.clearListeners();
        };
        this.listeners.set(moveEvent, moveEventHandler);
        this.listeners.set(upEvent, upEventHandler);
        this.ngZone.runOutsideAngular(() => {
            this.listeners.forEach((handler, name) => {
                this.document.addEventListener(name, handler);
            });
        });
    }
    clearListeners() {
        this.listeners.forEach((handler, name) => {
            this.document.removeEventListener(name, handler);
        });
        this.listeners.clear();
    }
    ngOnDestroy() {
        this.handleMouseDown$.complete();
        this.documentMouseUp$.complete();
        this.documentMouseMove$.complete();
        this.mouseEntered$.complete();
        this.clearListeners();
    }
}
/** @nocollapse */ NzResizableService.ɵfac = function NzResizableService_Factory(t) { return new (t || NzResizableService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(DOCUMENT)); };
/** @nocollapse */ NzResizableService.ɵprov = i0.ɵɵdefineInjectable({ token: NzResizableService, factory: NzResizableService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzResizableService, [{
        type: Injectable
    }], function () { return [{ type: i0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbIm56LXJlc2l6YWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBSWxELE1BQU0sT0FBTyxrQkFBa0I7SUFTN0Isa0NBQWtDO0lBQ2xDLFlBQW9CLE1BQWMsRUFBb0IsUUFBYTtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUjFCLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBb0QsQ0FBQztRQUVoRixxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBZ0MsQ0FBQztRQUMvRCxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBMkIsQ0FBQztRQUMxRCx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBMkIsQ0FBQztRQUM1RCxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFJckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUE4QjtRQUMxQyxNQUFNLGFBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDNUQsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN2RCxNQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBMEIsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUEwQixFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUF3QixDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE9BQXdCLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOztvRkFsRFUsa0JBQWtCLHNDQVVlLFFBQVE7MERBVnpDLGtCQUFrQixXQUFsQixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUQ5QixVQUFVOztzQkFXNEIsTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGlzVG91Y2hFdmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQgfSBmcm9tICcuL256LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE56UmVzaXphYmxlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XHJcbiAgcHJpdmF0ZSBsaXN0ZW5lcnMgPSBuZXcgTWFwPHN0cmluZywgKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZD4oKTtcclxuXHJcbiAgaGFuZGxlTW91c2VEb3duJCA9IG5ldyBTdWJqZWN0PE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQ+KCk7XHJcbiAgZG9jdW1lbnRNb3VzZVVwJCA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50PigpO1xyXG4gIGRvY3VtZW50TW91c2VNb3ZlJCA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50PigpO1xyXG4gIG1vdXNlRW50ZXJlZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xyXG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgc3RhcnRSZXNpemluZyhldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IF9pc1RvdWNoRXZlbnQgPSBpc1RvdWNoRXZlbnQoZXZlbnQpO1xyXG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xyXG4gICAgY29uc3QgbW92ZUV2ZW50ID0gX2lzVG91Y2hFdmVudCA/ICd0b3VjaG1vdmUnIDogJ21vdXNlbW92ZSc7XHJcbiAgICBjb25zdCB1cEV2ZW50ID0gX2lzVG91Y2hFdmVudCA/ICd0b3VjaGVuZCcgOiAnbW91c2V1cCc7XHJcbiAgICBjb25zdCBtb3ZlRXZlbnRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZU1vdmUkLm5leHQoZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXBFdmVudEhhbmRsZXIgPSAoZTogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5kb2N1bWVudE1vdXNlVXAkLm5leHQoZSk7XHJcbiAgICAgIHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5saXN0ZW5lcnMuc2V0KG1vdmVFdmVudCwgbW92ZUV2ZW50SGFuZGxlcik7XHJcbiAgICB0aGlzLmxpc3RlbmVycy5zZXQodXBFdmVudCwgdXBFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgoaGFuZGxlciwgbmFtZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyIGFzIEV2ZW50TGlzdGVuZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckxpc3RlbmVycygpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGhhbmRsZXIsIG5hbWUpID0+IHtcclxuICAgICAgdGhpcy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lcik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlTW91c2VEb3duJC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kb2N1bWVudE1vdXNlVXAkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmRvY3VtZW50TW91c2VNb3ZlJC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5tb3VzZUVudGVyZWQkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmNsZWFyTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==