/**
 * @fileoverview added by tsickle
 * Generated from: nz-cascader-utils.ts
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
 * @param {?} o
 * @return {?}
 */
export function isChildOption(o) {
    return o.isLeaf || !o.children || !o.children.length;
}
/**
 * @param {?} o
 * @return {?}
 */
export function isParentOption(o) {
    return !!o.children && !!o.children.length && !o.isLeaf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Nhc2NhZGVyLyIsInNvdXJjZXMiOlsibnotY2FzY2FkZXItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE1BQU0sVUFBVSxhQUFhLENBQUMsQ0FBbUI7SUFDL0MsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3ZELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxDQUFtQjtJQUNoRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDMUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbiB9IGZyb20gJy4vbnotY2FzY2FkZXItZGVmaW5pdGlvbnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hpbGRPcHRpb24obzogTnpDYXNjYWRlck9wdGlvbik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBvLmlzTGVhZiB8fCAhby5jaGlsZHJlbiB8fCAhby5jaGlsZHJlbi5sZW5ndGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BhcmVudE9wdGlvbihvOiBOekNhc2NhZGVyT3B0aW9uKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuICEhby5jaGlsZHJlbiAmJiAhIW8uY2hpbGRyZW4ubGVuZ3RoICYmICFvLmlzTGVhZjtcclxufVxyXG4iXX0=