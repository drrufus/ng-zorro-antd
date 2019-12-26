/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-base-util.ts
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
 * @param {?} node
 * @return {?}
 */
export function isCheckDisabled(node) {
    var isDisabled = node.isDisabled, isDisableCheckbox = node.isDisableCheckbox;
    return !!(isDisabled || isDisableCheckbox);
}
// tslint:disable-next-line:no-any
/**
 * @param {?} needle
 * @param {?} haystack
 * @return {?}
 */
export function isInArray(needle, haystack) {
    return haystack.length > 0 && haystack.indexOf(needle) > -1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLXV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ0cmVlL256LXRyZWUtYmFzZS11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQWdCO0lBQ3RDLElBQUEsNEJBQVUsRUFBRSwwQ0FBaUI7SUFDckMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksaUJBQWlCLENBQUMsQ0FBQztBQUM3QyxDQUFDOzs7Ozs7O0FBR0QsTUFBTSxVQUFVLFNBQVMsQ0FBQyxNQUFXLEVBQUUsUUFBZTtJQUNwRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJy4vbnotdHJlZS1iYXNlLW5vZGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hlY2tEaXNhYmxlZChub2RlOiBOelRyZWVOb2RlKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgeyBpc0Rpc2FibGVkLCBpc0Rpc2FibGVDaGVja2JveCB9ID0gbm9kZTtcclxuICByZXR1cm4gISEoaXNEaXNhYmxlZCB8fCBpc0Rpc2FibGVDaGVja2JveCk7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5BcnJheShuZWVkbGU6IGFueSwgaGF5c3RhY2s6IGFueVtdKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGhheXN0YWNrLmxlbmd0aCA+IDAgJiYgaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpID4gLTE7XHJcbn1cclxuIl19