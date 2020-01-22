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
var /**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
// tslint:disable-next-line:no-any
NzModalRef = /** @class */ (function () {
    function NzModalRef() {
    }
    return NzModalRef;
}());
/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
// tslint:disable-next-line:no-any
export { NzModalRef };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLXJlZi5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7O0lBQUE7SUFtQ0EsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQzs7Ozs7Ozs7Ozs7SUFsQ0MsK0JBQXFDOztJQUNyQyxnQ0FBbUM7Ozs7O0lBRW5DLDRDQUFzQjs7Ozs7O0lBQ3RCLG1EQUFpQzs7Ozs7O0lBQ2pDLHFEQUFtQzs7Ozs7O0lBS25DLGlEQUEyQjs7Ozs7SUFDM0IscURBQStCOzs7Ozs7O0lBWS9CLDJEQUFrQzs7Ozs7O0lBS2xDLGtEQUFtQzs7Ozs7O0lBS25DLG1EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTnpNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbnotbW9kYWwuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBBUEkgY2xhc3MgdGhhdCBwdWJsaWMgdG8gdXNlcnMgdG8gaGFuZGxlIHRoZSBtb2RhbCBpbnN0YW5jZS5cclxuICogTnpNb2RhbFJlZiBpcyBhaW0gdG8gYXZvaWQgYWNjZXNzaW5nIHRvIHRoZSBtb2RhbCBpbnN0YW5jZSBkaXJlY3RseSBieSB1c2Vycy5cclxuICovXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56TW9kYWxSZWY8VCA9IGFueSwgUiA9IGFueT4ge1xyXG4gIGFic3RyYWN0IGFmdGVyT3BlbjogT2JzZXJ2YWJsZTx2b2lkPjtcclxuICBhYnN0cmFjdCBhZnRlckNsb3NlOiBPYnNlcnZhYmxlPFI+O1xyXG5cclxuICBhYnN0cmFjdCBvcGVuKCk6IHZvaWQ7XHJcbiAgYWJzdHJhY3QgY2xvc2UocmVzdWx0PzogUik6IHZvaWQ7XHJcbiAgYWJzdHJhY3QgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciB0aGUgbnpPbk9rL256T25DYW5jZWwgYnkgbWFudWFsXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgdHJpZ2dlck9rKCk6IHZvaWQ7XHJcbiAgYWJzdHJhY3QgdHJpZ2dlckNhbmNlbCgpOiB2b2lkO1xyXG5cclxuICAvLyAvKipcclxuICAvLyAgKiBSZXR1cm4gdGhlIENvbXBvbmVudFJlZiBvZiBuekNvbnRlbnQgd2hlbiBzcGVjaWZ5IG56Q29udGVudCBhcyBhIENvbXBvbmVudFxyXG4gIC8vICAqIE5vdGU6IHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdW5kZWZpbmVkIGlmIHRoZSBDb21wb25lbnQgaGFzIG5vdCByZWFkeSB5ZXQuIChpdCBvbmx5IGF2YWlsYWJsZSBhZnRlciBNb2RhbCdzIG5nT25Jbml0KVxyXG4gIC8vICAqL1xyXG4gIC8vIGFic3RyYWN0IGdldENvbnRlbnRDb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPHt9PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugb2YgbnpDb250ZW50IHdoZW4gc3BlY2lmeSBuekNvbnRlbnQgYXMgYSBDb21wb25lbnRcclxuICAgKiBOb3RlOiB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgQ29tcG9uZW50IGhhcyBub3QgcmVhZHkgeWV0LiAoaXQgb25seSBhdmFpbGFibGUgYWZ0ZXIgTW9kYWwncyBuZ09uSW5pdClcclxuICAgKi9cclxuICBhYnN0cmFjdCBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZG9tIGVsZW1lbnQgb2YgdGhpcyBNb2RhbFxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIE1vZGFsIGl0c2VsZlxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGdldEluc3RhbmNlKCk6IE56TW9kYWxDb21wb25lbnQ7XHJcbn1cclxuIl19