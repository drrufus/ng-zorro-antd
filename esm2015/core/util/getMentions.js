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
 * @param {?} prefix
 * @return {?}
 */
export function getRegExp(prefix) {
    /** @type {?} */
    const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    /** @type {?} */
    let prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = `[${prefixToken}]`;
    }
    return new RegExp(`(\\s|^)(${prefixToken})[^\\s]*`, 'g');
}
/**
 * @param {?} value
 * @param {?=} prefix
 * @return {?}
 */
export function getMentions(value, prefix = '@') {
    if (typeof value !== 'string') {
        return [];
    }
    /** @type {?} */
    const regex = getRegExp(prefix);
    /** @type {?} */
    const mentions = value.match(regex);
    return mentions !== null ? mentions.map((/**
     * @param {?} e
     * @return {?}
     */
    e => e.trim())) : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWVudGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL2dldE1lbnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVFBLE1BQU0sVUFBVSxTQUFTLENBQUMsTUFBeUI7O1VBQzNDLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDOztRQUN6RCxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztJQUVsRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLFdBQVcsR0FBRyxJQUFJLFdBQVcsR0FBRyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxXQUFXLFdBQVcsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBYSxFQUFFLFNBQTRCLEdBQUc7SUFDeEUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsT0FBTyxFQUFFLENBQUM7S0FDWDs7VUFDSyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQzs7VUFDekIsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ25DLE9BQU8sUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7SUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDOUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZ0V4cChwcmVmaXg6IHN0cmluZyB8IHN0cmluZ1tdKTogUmVnRXhwIHtcclxuICBjb25zdCBwcmVmaXhBcnJheSA9IEFycmF5LmlzQXJyYXkocHJlZml4KSA/IHByZWZpeCA6IFtwcmVmaXhdO1xyXG4gIGxldCBwcmVmaXhUb2tlbiA9IHByZWZpeEFycmF5LmpvaW4oJycpLnJlcGxhY2UoLyhcXCR8XFxeKS9nLCAnXFxcXCQxJyk7XHJcblxyXG4gIGlmIChwcmVmaXhBcnJheS5sZW5ndGggPiAxKSB7XHJcbiAgICBwcmVmaXhUb2tlbiA9IGBbJHtwcmVmaXhUb2tlbn1dYDtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgUmVnRXhwKGAoXFxcXHN8XikoJHtwcmVmaXhUb2tlbn0pW15cXFxcc10qYCwgJ2cnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnRpb25zKHZhbHVlOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nIHwgc3RyaW5nW10gPSAnQCcpOiBzdHJpbmdbXSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgY29uc3QgcmVnZXggPSBnZXRSZWdFeHAocHJlZml4KTtcclxuICBjb25zdCBtZW50aW9ucyA9IHZhbHVlLm1hdGNoKHJlZ2V4KTtcclxuICByZXR1cm4gbWVudGlvbnMgIT09IG51bGwgPyBtZW50aW9ucy5tYXAoZSA9PiBlLnRyaW0oKSkgOiBbXTtcclxufVxyXG4iXX0=