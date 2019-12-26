/**
 * @fileoverview added by tsickle
 * Generated from: util/scroll-into-view-if-needed.ts
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
export function scrollIntoView(node) {
    /** @type {?} */
    var nodeAsAny = (/** @type {?} */ (node));
    if (nodeAsAny.scrollIntoViewIfNeeded) {
        /* tslint:disable-next-line:no-string-literal */
        nodeAsAny.scrollIntoViewIfNeeded(false);
        return;
    }
    if (node.scrollIntoView) {
        node.scrollIntoView(false);
        return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsY0FBYyxDQUFDLElBQWlCOztRQUN4QyxTQUFTLEdBQUcsbUJBQUEsSUFBSSxFQUFPO0lBQzdCLElBQUksU0FBUyxDQUFDLHNCQUFzQixFQUFFO1FBQ3BDLGdEQUFnRDtRQUNoRCxTQUFTLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsT0FBTztLQUNSO0lBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsT0FBTztLQUNSO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KG5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgY29uc3Qgbm9kZUFzQW55ID0gbm9kZSBhcyBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgaWYgKG5vZGVBc0FueS5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKSB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cclxuICAgIG5vZGVBc0FueS5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKGZhbHNlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG5vZGUuc2Nyb2xsSW50b1ZpZXcpIHtcclxuICAgIG5vZGUuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=