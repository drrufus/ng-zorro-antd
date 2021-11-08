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
export class NzMentionService {
    constructor() {
        this.triggerChange$ = new Subject();
    }
    /**
     * @return {?}
     */
    triggerChanged() {
        return this.triggerChange$.asObservable();
    }
    /**
     * @param {?} trigger
     * @return {?}
     */
    registerTrigger(trigger) {
        if (this.trigger !== trigger) {
            this.trigger = trigger;
            this.triggerChange$.next(trigger);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.triggerChange$.complete();
    }
}
NzMentionService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW50aW9uLyIsInNvdXJjZXMiOlsibnotbWVudGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7UUFHVSxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUE2QixDQUFDO0lBZ0JwRSxDQUFDOzs7O0lBZEMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxPQUFrQztRQUNoRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7OztZQWxCRixVQUFVOzs7Ozs7O0lBRVQsbUNBQTJDOzs7OztJQUMzQywwQ0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW50aW9uLXRyaWdnZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTnpNZW50aW9uU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSB0cmlnZ2VyOiBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlO1xyXG4gIHByaXZhdGUgdHJpZ2dlckNoYW5nZSQgPSBuZXcgU3ViamVjdDxOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlPigpO1xyXG5cclxuICB0cmlnZ2VyQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmU+IHtcclxuICAgIHJldHVybiB0aGlzLnRyaWdnZXJDaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJUcmlnZ2VyKHRyaWdnZXI6IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRyaWdnZXIgIT09IHRyaWdnZXIpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcclxuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlJC5uZXh0KHRyaWdnZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2UkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==