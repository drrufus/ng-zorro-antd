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
export class NzMentionService {
    constructor() {
        this.triggerChange$ = new Subject();
    }
    triggerChanged() {
        return this.triggerChange$.asObservable();
    }
    registerTrigger(trigger) {
        if (this.trigger !== trigger) {
            this.trigger = trigger;
            this.triggerChange$.next(trigger);
        }
    }
    ngOnDestroy() {
        this.triggerChange$.complete();
    }
}
/** @nocollapse */ NzMentionService.ɵfac = function NzMentionService_Factory(t) { return new (t || NzMentionService)(); };
/** @nocollapse */ NzMentionService.ɵprov = i0.ɵɵdefineInjectable({ token: NzMentionService, factory: NzMentionService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMentionService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW50aW9uLyIsInNvdXJjZXMiOlsibnotbWVudGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUdVLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQTZCLENBQUM7S0FnQm5FO0lBZEMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQWtDO1FBQ2hELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Z0ZBakJVLGdCQUFnQjt3REFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW50aW9uLXRyaWdnZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTnpNZW50aW9uU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSB0cmlnZ2VyOiBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlO1xyXG4gIHByaXZhdGUgdHJpZ2dlckNoYW5nZSQgPSBuZXcgU3ViamVjdDxOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlPigpO1xyXG5cclxuICB0cmlnZ2VyQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmU+IHtcclxuICAgIHJldHVybiB0aGlzLnRyaWdnZXJDaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJUcmlnZ2VyKHRyaWdnZXI6IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRyaWdnZXIgIT09IHRyaWdnZXIpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcclxuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlJC5uZXh0KHRyaWdnZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2UkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==