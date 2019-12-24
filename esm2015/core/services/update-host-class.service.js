/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable, RendererFactory2 } from '@angular/core';
import * as i0 from "@angular/core";
export class NzUpdateHostClassService {
    constructor(rendererFactory2) {
        this.classMap = {};
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    updateHostClass(el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = Object.assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    }
    removeClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    }
    addClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i) && classMap[i]) {
                renderer.addClass(el, i);
            }
        }
    }
}
/** @nocollapse */ NzUpdateHostClassService.ɵfac = function NzUpdateHostClassService_Factory(t) { return new (t || NzUpdateHostClassService)(i0.ɵɵinject(i0.RendererFactory2)); };
/** @nocollapse */ NzUpdateHostClassService.ɵprov = i0.ɵɵdefineInjectable({ token: NzUpdateHostClassService, factory: NzUpdateHostClassService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzUpdateHostClassService, [{
        type: Injectable
    }], function () { return [{ type: i0.RendererFactory2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLeEUsTUFBTSxPQUFPLHdCQUF3QjtJQTBCbkMsWUFBWSxnQkFBa0M7UUF6QnRDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUEwQnBCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBeEJELGVBQWUsQ0FBQyxFQUFlLEVBQUUsUUFBZ0I7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEscUJBQVEsUUFBUSxDQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLFdBQVcsQ0FBQyxFQUFlLEVBQUUsUUFBMEIsRUFBRSxRQUFtQjtRQUNsRixLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sUUFBUSxDQUFDLEVBQWUsRUFBRSxRQUEwQixFQUFFLFFBQW1CO1FBQy9FLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDOztnR0F4QlUsd0JBQXdCO2dFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOZ0NsYXNzSW50ZXJmYWNlIH0gZnJvbSAnLi4vdHlwZXMvbmctY2xhc3MnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIHtcclxuICBwcml2YXRlIGNsYXNzTWFwID0ge307XHJcbiAgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuXHJcbiAgdXBkYXRlSG9zdENsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NNYXA6IG9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhlbCwgdGhpcy5jbGFzc01hcCwgdGhpcy5yZW5kZXJlcik7XHJcbiAgICB0aGlzLmNsYXNzTWFwID0geyAuLi5jbGFzc01hcCB9O1xyXG4gICAgdGhpcy5hZGRDbGFzcyhlbCwgdGhpcy5jbGFzc01hcCwgdGhpcy5yZW5kZXJlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUNsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgaSBpbiBjbGFzc01hcCkge1xyXG4gICAgICBpZiAoY2xhc3NNYXAuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogTmdDbGFzc0ludGVyZmFjZSwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XHJcbiAgICAgIGlmIChjbGFzc01hcC5oYXNPd25Qcm9wZXJ0eShpKSAmJiBjbGFzc01hcFtpXSkge1xyXG4gICAgICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLCBpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mikge1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeTIuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==