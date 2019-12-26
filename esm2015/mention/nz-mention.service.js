/**
 * @fileoverview added by tsickle
 * Generated from: nz-mention.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW50aW9uLyIsInNvdXJjZXMiOlsibnotbWVudGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUszQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBR1UsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBNkIsQ0FBQztJQWdCcEUsQ0FBQzs7OztJQWRDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsT0FBa0M7UUFDaEQsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7WUFsQkYsVUFBVTs7Ozs7OztJQUVULG1DQUEyQzs7Ozs7SUFDM0MsMENBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudGlvbi10cmlnZ2VyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE56TWVudGlvblNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgdHJpZ2dlcjogTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZTtcclxuICBwcml2YXRlIHRyaWdnZXJDaGFuZ2UkID0gbmV3IFN1YmplY3Q8TnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZT4oKTtcclxuXHJcbiAgdHJpZ2dlckNoYW5nZWQoKTogT2JzZXJ2YWJsZTxOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlPiB7XHJcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyQ2hhbmdlJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyVHJpZ2dlcih0cmlnZ2VyOiBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmlnZ2VyICE9PSB0cmlnZ2VyKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XHJcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZSQubmV4dCh0cmlnZ2VyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyQ2hhbmdlJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=