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
 * @param {?} styleName
 * @return {?}
 */
export function isStyleSupport(styleName) {
    if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
        /** @type {?} */
        var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
        var documentElement_1 = window.document.documentElement;
        return styleNameList.some((/**
         * @param {?} name
         * @return {?}
         */
        function (name) { return name in documentElement_1.style; }));
    }
    return false;
}
/**
 * @param {?=} styles
 * @return {?}
 */
export function getStyleAsText(styles) {
    if (!styles) {
        return '';
    }
    return Object.keys(styles)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var val = styles[key];
        return key + ":" + (typeof val === 'string' ? val : val + 'px');
    }))
        .join(';');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL3N0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE1BQU0sVUFBVSxjQUFjLENBQUMsU0FBNEI7SUFDekQsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTs7WUFDakYsYUFBYSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDaEUsSUFBQSxtREFBZTtRQUV2QixPQUFPLGFBQWEsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLElBQUksaUJBQWUsQ0FBQyxLQUFLLEVBQTdCLENBQTZCLEVBQUMsQ0FBQztLQUNsRTtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLE1BQXlCO0lBQ3RELElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN2QixHQUFHOzs7O0lBQUMsVUFBQSxHQUFHOztZQUNBLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLE9BQVUsR0FBRyxVQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFFLENBQUM7SUFDaEUsQ0FBQyxFQUFDO1NBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTmdTdHlsZUludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0eWxlU3VwcG9ydChzdHlsZU5hbWU6IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBzdHlsZU5hbWVMaXN0ID0gQXJyYXkuaXNBcnJheShzdHlsZU5hbWUpID8gc3R5bGVOYW1lIDogW3N0eWxlTmFtZV07XHJcbiAgICBjb25zdCB7IGRvY3VtZW50RWxlbWVudCB9ID0gd2luZG93LmRvY3VtZW50O1xyXG5cclxuICAgIHJldHVybiBzdHlsZU5hbWVMaXN0LnNvbWUobmFtZSA9PiBuYW1lIGluIGRvY3VtZW50RWxlbWVudC5zdHlsZSk7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlQXNUZXh0KHN0eWxlcz86IE5nU3R5bGVJbnRlcmZhY2UpOiBzdHJpbmcge1xyXG4gIGlmICghc3R5bGVzKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVzKVxyXG4gICAgLm1hcChrZXkgPT4ge1xyXG4gICAgICBjb25zdCB2YWwgPSBzdHlsZXNba2V5XTtcclxuICAgICAgcmV0dXJuIGAke2tleX06JHt0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHZhbCA6IHZhbCArICdweCd9YDtcclxuICAgIH0pXHJcbiAgICAuam9pbignOycpO1xyXG59XHJcbiJdfQ==