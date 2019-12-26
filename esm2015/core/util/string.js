/**
 * @fileoverview added by tsickle
 * Generated from: util/string.ts
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
 * Much like lodash.
 * @param {?} toPad
 * @param {?} length
 * @param {?} element
 * @return {?}
 */
export function padStart(toPad, length, element) {
    if (toPad.length > length) {
        return toPad;
    }
    /** @type {?} */
    const joined = `${getRepeatedElement(length, element)}${toPad}`;
    return joined.slice(joined.length - length, joined.length);
}
/**
 * @param {?} toPad
 * @param {?} length
 * @param {?} element
 * @return {?}
 */
export function padEnd(toPad, length, element) {
    /** @type {?} */
    const joined = `${toPad}${getRepeatedElement(length, element)}`;
    return joined.slice(0, length);
}
/**
 * @param {?} length
 * @param {?} element
 * @return {?}
 */
export function getRepeatedElement(length, element) {
    return Array(length)
        .fill(element)
        .join('');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxPQUFlO0lBQ3JFLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7UUFDekIsT0FBTyxLQUFLLENBQUM7S0FDZDs7VUFFSyxNQUFNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsS0FBSyxFQUFFO0lBQy9ELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0QsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxPQUFlOztVQUM3RCxNQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFFO0lBQy9ELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakMsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLE1BQWMsRUFBRSxPQUFlO0lBQ2hFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE11Y2ggbGlrZSBsb2Rhc2guXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFkU3RhcnQodG9QYWQ6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGVsZW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgaWYgKHRvUGFkLmxlbmd0aCA+IGxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHRvUGFkO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgam9pbmVkID0gYCR7Z2V0UmVwZWF0ZWRFbGVtZW50KGxlbmd0aCwgZWxlbWVudCl9JHt0b1BhZH1gO1xyXG4gIHJldHVybiBqb2luZWQuc2xpY2Uoam9pbmVkLmxlbmd0aCAtIGxlbmd0aCwgam9pbmVkLmxlbmd0aCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWRFbmQodG9QYWQ6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGVsZW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgY29uc3Qgam9pbmVkID0gYCR7dG9QYWR9JHtnZXRSZXBlYXRlZEVsZW1lbnQobGVuZ3RoLCBlbGVtZW50KX1gO1xyXG4gIHJldHVybiBqb2luZWQuc2xpY2UoMCwgbGVuZ3RoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlcGVhdGVkRWxlbWVudChsZW5ndGg6IG51bWJlciwgZWxlbWVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gQXJyYXkobGVuZ3RoKVxyXG4gICAgLmZpbGwoZWxlbWVudClcclxuICAgIC5qb2luKCcnKTtcclxufVxyXG4iXX0=