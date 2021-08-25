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
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
var NzMentionService = /** @class */ (function () {
    function NzMentionService() {
        this.triggerChange$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzMentionService.prototype.triggerChanged = /**
     * @return {?}
     */
    function () {
        return this.triggerChange$.asObservable();
    };
    /**
     * @param {?} trigger
     * @return {?}
     */
    NzMentionService.prototype.registerTrigger = /**
     * @param {?} trigger
     * @return {?}
     */
    function (trigger) {
        if (this.trigger !== trigger) {
            this.trigger = trigger;
            this.triggerChange$.next(trigger);
        }
    };
    /**
     * @return {?}
     */
    NzMentionService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.triggerChange$.complete();
    };
NzMentionService.ɵfac = function NzMentionService_Factory(t) { return new (t || NzMentionService)(); };
NzMentionService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzMentionService, factory: function (t) { return NzMentionService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMentionService, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return NzMentionService;
}());
export { NzMentionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzMentionService.prototype.trigger;
    /**
     * @type {?}
     * @private
     */
    NzMentionService.prototype.triggerChange$;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9tZW50aW9uL256LW1lbnRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJM0M7SUFBQTtRQUdVLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQTZCLENBQUM7SUFnQnBFLENBQUM7Ozs7SUFkQyx5Q0FBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLE9BQWtDO1FBQ2hELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQ0g7b0RBbkJDLFVBQVU7Ozs7Z0RBQ0w7SUFrQk4sdUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSxnQkFBZ0I7Ozs7OztJQUMzQixtQ0FBMkM7Ozs7O0lBQzNDLDBDQUFrRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnRpb24tdHJpZ2dlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOek1lbnRpb25TZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHRyaWdnZXI6IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmU7XHJcbiAgcHJpdmF0ZSB0cmlnZ2VyQ2hhbmdlJCA9IG5ldyBTdWJqZWN0PE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmU+KCk7XHJcblxyXG4gIHRyaWdnZXJDaGFuZ2VkKCk6IE9ic2VydmFibGU8TnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlckNoYW5nZSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlclRyaWdnZXIodHJpZ2dlcjogTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHJpZ2dlciAhPT0gdHJpZ2dlcikge1xyXG4gICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2UkLm5leHQodHJpZ2dlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJpZ2dlckNoYW5nZSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19