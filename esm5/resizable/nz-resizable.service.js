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
    NzResizableService.prototype.startResizing = function (event) {
        var _this = this;
        var _isTouchEvent = isTouchEvent(event);
        this.clearListeners();
        var moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
        var upEvent = _isTouchEvent ? 'touchend' : 'mouseup';
        var moveEventHandler = function (e) {
            _this.documentMouseMove$.next(e);
        };
        var upEventHandler = function (e) {
            _this.documentMouseUp$.next(e);
            _this.clearListeners();
        };
        this.listeners.set(moveEvent, moveEventHandler);
        this.listeners.set(upEvent, upEventHandler);
        this.ngZone.runOutsideAngular(function () {
            _this.listeners.forEach(function (handler, name) {
                _this.document.addEventListener(name, handler);
            });
        });
    };
    NzResizableService.prototype.clearListeners = function () {
        var _this = this;
        this.listeners.forEach(function (handler, name) {
            _this.document.removeEventListener(name, handler);
        });
        this.listeners.clear();
    };
    NzResizableService.prototype.ngOnDestroy = function () {
        this.handleMouseDown$.complete();
        this.documentMouseUp$.complete();
        this.documentMouseMove$.complete();
        this.mouseEntered$.complete();
        this.clearListeners();
    };
    /** @nocollapse */ NzResizableService.ɵfac = function NzResizableService_Factory(t) { return new (t || NzResizableService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(DOCUMENT)); };
    /** @nocollapse */ NzResizableService.ɵprov = i0.ɵɵdefineInjectable({ token: NzResizableService, factory: NzResizableService.ɵfac });
    return NzResizableService;
}());
export { NzResizableService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzResizableService, [{
        type: Injectable
    }], function () { return [{ type: i0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbIm56LXJlc2l6YWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR2xEO0lBVUUsa0NBQWtDO0lBQ2xDLDRCQUFvQixNQUFjLEVBQW9CLFFBQWE7UUFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVIxQixjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQW9ELENBQUM7UUFFaEYscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQWdDLENBQUM7UUFDL0QscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQTJCLENBQUM7UUFDMUQsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQTJCLENBQUM7UUFDNUQsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBSXJDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsS0FBOEI7UUFBNUMsaUJBcUJDO1FBcEJDLElBQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUM1RCxJQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3ZELElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxDQUEwQjtZQUNsRCxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQztRQUNGLElBQU0sY0FBYyxHQUFHLFVBQUMsQ0FBMEI7WUFDaEQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDNUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsSUFBSTtnQkFDbkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBd0IsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sMkNBQWMsR0FBdEI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLElBQUk7WUFDbkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsT0FBd0IsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7d0ZBbERVLGtCQUFrQixzQ0FVZSxRQUFROzhEQVZ6QyxrQkFBa0IsV0FBbEIsa0JBQWtCOzZCQWpCL0I7Q0FvRUMsQUFwREQsSUFvREM7U0FuRFksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsVUFBVTs7c0JBVzRCLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBpc1RvdWNoRXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50IH0gZnJvbSAnLi9uei1yZXNpemUtaGFuZGxlLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelJlc2l6YWJsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xyXG4gIHByaXZhdGUgbGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ+KCk7XHJcblxyXG4gIGhhbmRsZU1vdXNlRG93biQgPSBuZXcgU3ViamVjdDxOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50PigpO1xyXG4gIGRvY3VtZW50TW91c2VVcCQgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oKTtcclxuICBkb2N1bWVudE1vdXNlTW92ZSQgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oKTtcclxuICBtb3VzZUVudGVyZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICB9XHJcblxyXG4gIHN0YXJ0UmVzaXppbmcoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBfaXNUb3VjaEV2ZW50ID0gaXNUb3VjaEV2ZW50KGV2ZW50KTtcclxuICAgIHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcclxuICAgIGNvbnN0IG1vdmVFdmVudCA9IF9pc1RvdWNoRXZlbnQgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xyXG4gICAgY29uc3QgdXBFdmVudCA9IF9pc1RvdWNoRXZlbnQgPyAndG91Y2hlbmQnIDogJ21vdXNldXAnO1xyXG4gICAgY29uc3QgbW92ZUV2ZW50SGFuZGxlciA9IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmRvY3VtZW50TW91c2VNb3ZlJC5uZXh0KGUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwRXZlbnRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZVVwJC5uZXh0KGUpO1xyXG4gICAgICB0aGlzLmNsZWFyTGlzdGVuZXJzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubGlzdGVuZXJzLnNldChtb3ZlRXZlbnQsIG1vdmVFdmVudEhhbmRsZXIpO1xyXG4gICAgdGhpcy5saXN0ZW5lcnMuc2V0KHVwRXZlbnQsIHVwRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGhhbmRsZXIsIG5hbWUpID0+IHtcclxuICAgICAgICB0aGlzLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciBhcyBFdmVudExpc3RlbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChoYW5kbGVyLCBuYW1lKSA9PiB7XHJcbiAgICAgIHRoaXMuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyIGFzIEV2ZW50TGlzdGVuZXIpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlRG93biQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuZG9jdW1lbnRNb3VzZVVwJC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kb2N1bWVudE1vdXNlTW92ZSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMubW91c2VFbnRlcmVkJC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG4iXX0=