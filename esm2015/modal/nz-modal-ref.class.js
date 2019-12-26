/**
 * @fileoverview added by tsickle
 * Generated from: nz-modal-ref.class.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLXJlZi5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE1BQU0sT0FBZ0IsVUFBVTtDQW1DL0I7OztJQWxDQywrQkFBcUM7O0lBQ3JDLGdDQUFtQzs7Ozs7SUFFbkMsNENBQXNCOzs7Ozs7SUFDdEIsbURBQWlDOzs7Ozs7SUFDakMscURBQW1DOzs7Ozs7SUFLbkMsaURBQTJCOzs7OztJQUMzQixxREFBK0I7Ozs7Ozs7SUFZL0IsMkRBQWtDOzs7Ozs7SUFLbEMsa0RBQW1DOzs7Ozs7SUFLbkMsbURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOek1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEFQSSBjbGFzcyB0aGF0IHB1YmxpYyB0byB1c2VycyB0byBoYW5kbGUgdGhlIG1vZGFsIGluc3RhbmNlLlxyXG4gKiBOek1vZGFsUmVmIGlzIGFpbSB0byBhdm9pZCBhY2Nlc3NpbmcgdG8gdGhlIG1vZGFsIGluc3RhbmNlIGRpcmVjdGx5IGJ5IHVzZXJzLlxyXG4gKi9cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpNb2RhbFJlZjxUID0gYW55LCBSID0gYW55PiB7XHJcbiAgYWJzdHJhY3QgYWZ0ZXJPcGVuOiBPYnNlcnZhYmxlPHZvaWQ+O1xyXG4gIGFic3RyYWN0IGFmdGVyQ2xvc2U6IE9ic2VydmFibGU8Uj47XHJcblxyXG4gIGFic3RyYWN0IG9wZW4oKTogdm9pZDtcclxuICBhYnN0cmFjdCBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZDtcclxuICBhYnN0cmFjdCBkZXN0cm95KHJlc3VsdD86IFIpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIHRoZSBuek9uT2svbnpPbkNhbmNlbCBieSBtYW51YWxcclxuICAgKi9cclxuICBhYnN0cmFjdCB0cmlnZ2VyT2soKTogdm9pZDtcclxuICBhYnN0cmFjdCB0cmlnZ2VyQ2FuY2VsKCk6IHZvaWQ7XHJcblxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIFJldHVybiB0aGUgQ29tcG9uZW50UmVmIG9mIG56Q29udGVudCB3aGVuIHNwZWNpZnkgbnpDb250ZW50IGFzIGEgQ29tcG9uZW50XHJcbiAgLy8gICogTm90ZTogdGhpcyBtZXRob2QgbWF5IHJldHVybiB1bmRlZmluZWQgaWYgdGhlIENvbXBvbmVudCBoYXMgbm90IHJlYWR5IHlldC4gKGl0IG9ubHkgYXZhaWxhYmxlIGFmdGVyIE1vZGFsJ3MgbmdPbkluaXQpXHJcbiAgLy8gICovXHJcbiAgLy8gYWJzdHJhY3QgZ2V0Q29udGVudENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8e30+O1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gdGhlIGNvbXBvbmVudCBpbnN0YW5jZSBvZiBuekNvbnRlbnQgd2hlbiBzcGVjaWZ5IG56Q29udGVudCBhcyBhIENvbXBvbmVudFxyXG4gICAqIE5vdGU6IHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdW5kZWZpbmVkIGlmIHRoZSBDb21wb25lbnQgaGFzIG5vdCByZWFkeSB5ZXQuIChpdCBvbmx5IGF2YWlsYWJsZSBhZnRlciBNb2RhbCdzIG5nT25Jbml0KVxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGdldENvbnRlbnRDb21wb25lbnQoKTogVDtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBkb20gZWxlbWVudCBvZiB0aGlzIE1vZGFsXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgTW9kYWwgaXRzZWxmXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgZ2V0SW5zdGFuY2UoKTogTnpNb2RhbENvbXBvbmVudDtcclxufVxyXG4iXX0=