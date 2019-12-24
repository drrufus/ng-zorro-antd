/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var NzMentionService = /** @class */ (function () {
    function NzMentionService() {
        this.triggerChange$ = new Subject();
    }
    NzMentionService.prototype.triggerChanged = function () {
        return this.triggerChange$.asObservable();
    };
    NzMentionService.prototype.registerTrigger = function (trigger) {
        if (this.trigger !== trigger) {
            this.trigger = trigger;
            this.triggerChange$.next(trigger);
        }
    };
    NzMentionService.prototype.ngOnDestroy = function () {
        this.triggerChange$.complete();
    };
    /** @nocollapse */ NzMentionService.ɵfac = function NzMentionService_Factory(t) { return new (t || NzMentionService)(); };
    /** @nocollapse */ NzMentionService.ɵprov = i0.ɵɵdefineInjectable({ token: NzMentionService, factory: NzMentionService.ɵfac });
    return NzMentionService;
}());
export { NzMentionService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMentionService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW50aW9uLyIsInNvdXJjZXMiOlsibnotbWVudGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJM0M7SUFBQTtRQUdVLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQTZCLENBQUM7S0FnQm5FO0lBZEMseUNBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMENBQWUsR0FBZixVQUFnQixPQUFrQztRQUNoRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7b0ZBakJVLGdCQUFnQjs0REFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjsyQkFkN0I7Q0FnQ0MsQUFuQkQsSUFtQkM7U0FsQlksZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnRpb24tdHJpZ2dlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOek1lbnRpb25TZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHRyaWdnZXI6IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmU7XHJcbiAgcHJpdmF0ZSB0cmlnZ2VyQ2hhbmdlJCA9IG5ldyBTdWJqZWN0PE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmU+KCk7XHJcblxyXG4gIHRyaWdnZXJDaGFuZ2VkKCk6IE9ic2VydmFibGU8TnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlckNoYW5nZSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlclRyaWdnZXIodHJpZ2dlcjogTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHJpZ2dlciAhPT0gdHJpZ2dlcikge1xyXG4gICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2UkLm5leHQodHJpZ2dlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJpZ2dlckNoYW5nZSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19