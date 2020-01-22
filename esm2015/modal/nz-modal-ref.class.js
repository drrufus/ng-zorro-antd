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
/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
// tslint:disable-next-line:no-any
export class NzModalRef {
}
if (false) {
    /** @type {?} */
    NzModalRef.prototype.afterOpen;
    /** @type {?} */
    NzModalRef.prototype.afterClose;
    /**
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.open = function () { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    NzModalRef.prototype.close = function (result) { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    NzModalRef.prototype.destroy = function (result) { };
    /**
     * Trigger the nzOnOk/nzOnCancel by manual
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.triggerOk = function () { };
    /**
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.triggerCancel = function () { };
    /**
     * Return the component instance of nzContent when specify nzContent as a Component
     * Note: this method may return undefined if the Component has not ready yet. (it only available after Modal's ngOnInit)
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.getContentComponent = function () { };
    /**
     * Get the dom element of this Modal
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.getElement = function () { };
    /**
     * Get the instance of the Modal itself
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.getInstance = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLXJlZi5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsTUFBTSxPQUFnQixVQUFVO0NBbUMvQjs7O0lBbENDLCtCQUFxQzs7SUFDckMsZ0NBQW1DOzs7OztJQUVuQyw0Q0FBc0I7Ozs7OztJQUN0QixtREFBaUM7Ozs7OztJQUNqQyxxREFBbUM7Ozs7OztJQUtuQyxpREFBMkI7Ozs7O0lBQzNCLHFEQUErQjs7Ozs7OztJQVkvQiwyREFBa0M7Ozs7OztJQUtsQyxrREFBbUM7Ozs7OztJQUtuQyxtREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE56TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL256LW1vZGFsLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQVBJIGNsYXNzIHRoYXQgcHVibGljIHRvIHVzZXJzIHRvIGhhbmRsZSB0aGUgbW9kYWwgaW5zdGFuY2UuXHJcbiAqIE56TW9kYWxSZWYgaXMgYWltIHRvIGF2b2lkIGFjY2Vzc2luZyB0byB0aGUgbW9kYWwgaW5zdGFuY2UgZGlyZWN0bHkgYnkgdXNlcnMuXHJcbiAqL1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOek1vZGFsUmVmPFQgPSBhbnksIFIgPSBhbnk+IHtcclxuICBhYnN0cmFjdCBhZnRlck9wZW46IE9ic2VydmFibGU8dm9pZD47XHJcbiAgYWJzdHJhY3QgYWZ0ZXJDbG9zZTogT2JzZXJ2YWJsZTxSPjtcclxuXHJcbiAgYWJzdHJhY3Qgb3BlbigpOiB2b2lkO1xyXG4gIGFic3RyYWN0IGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkO1xyXG4gIGFic3RyYWN0IGRlc3Ryb3kocmVzdWx0PzogUik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgdGhlIG56T25Pay9uek9uQ2FuY2VsIGJ5IG1hbnVhbFxyXG4gICAqL1xyXG4gIGFic3RyYWN0IHRyaWdnZXJPaygpOiB2b2lkO1xyXG4gIGFic3RyYWN0IHRyaWdnZXJDYW5jZWwoKTogdm9pZDtcclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogUmV0dXJuIHRoZSBDb21wb25lbnRSZWYgb2YgbnpDb250ZW50IHdoZW4gc3BlY2lmeSBuekNvbnRlbnQgYXMgYSBDb21wb25lbnRcclxuICAvLyAgKiBOb3RlOiB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgQ29tcG9uZW50IGhhcyBub3QgcmVhZHkgeWV0LiAoaXQgb25seSBhdmFpbGFibGUgYWZ0ZXIgTW9kYWwncyBuZ09uSW5pdClcclxuICAvLyAgKi9cclxuICAvLyBhYnN0cmFjdCBnZXRDb250ZW50Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjx7fT47XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgY29tcG9uZW50IGluc3RhbmNlIG9mIG56Q29udGVudCB3aGVuIHNwZWNpZnkgbnpDb250ZW50IGFzIGEgQ29tcG9uZW50XHJcbiAgICogTm90ZTogdGhpcyBtZXRob2QgbWF5IHJldHVybiB1bmRlZmluZWQgaWYgdGhlIENvbXBvbmVudCBoYXMgbm90IHJlYWR5IHlldC4gKGl0IG9ubHkgYXZhaWxhYmxlIGFmdGVyIE1vZGFsJ3MgbmdPbkluaXQpXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUO1xyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGRvbSBlbGVtZW50IG9mIHRoaXMgTW9kYWxcclxuICAgKi9cclxuICBhYnN0cmFjdCBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBNb2RhbCBpdHNlbGZcclxuICAgKi9cclxuICBhYnN0cmFjdCBnZXRJbnN0YW5jZSgpOiBOek1vZGFsQ29tcG9uZW50O1xyXG59XHJcbiJdfQ==