/**
 * @fileoverview added by tsickle
 * Generated from: util/style.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL3N0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxNQUFNLFVBQVUsY0FBYyxDQUFDLFNBQTRCO0lBQ3pELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7O1lBQ2pGLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2hFLElBQUEsbURBQWU7UUFFdkIsT0FBTyxhQUFhLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxJQUFJLGlCQUFlLENBQUMsS0FBSyxFQUE3QixDQUE2QixFQUFDLENBQUM7S0FDbEU7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxNQUF5QjtJQUN0RCxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdkIsR0FBRzs7OztJQUFDLFVBQUEsR0FBRzs7WUFDQSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN2QixPQUFVLEdBQUcsVUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBRSxDQUFDO0lBQ2hFLENBQUMsRUFBQztTQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5nU3R5bGVJbnRlcmZhY2UgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHlsZVN1cHBvcnQoc3R5bGVOYW1lOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgY29uc3Qgc3R5bGVOYW1lTGlzdCA9IEFycmF5LmlzQXJyYXkoc3R5bGVOYW1lKSA/IHN0eWxlTmFtZSA6IFtzdHlsZU5hbWVdO1xyXG4gICAgY29uc3QgeyBkb2N1bWVudEVsZW1lbnQgfSA9IHdpbmRvdy5kb2N1bWVudDtcclxuXHJcbiAgICByZXR1cm4gc3R5bGVOYW1lTGlzdC5zb21lKG5hbWUgPT4gbmFtZSBpbiBkb2N1bWVudEVsZW1lbnQuc3R5bGUpO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZUFzVGV4dChzdHlsZXM/OiBOZ1N0eWxlSW50ZXJmYWNlKTogc3RyaW5nIHtcclxuICBpZiAoIXN0eWxlcykge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlcylcclxuICAgIC5tYXAoa2V5ID0+IHtcclxuICAgICAgY29uc3QgdmFsID0gc3R5bGVzW2tleV07XHJcbiAgICAgIHJldHVybiBgJHtrZXl9OiR7dHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB2YWwgOiB2YWwgKyAncHgnfWA7XHJcbiAgICB9KVxyXG4gICAgLmpvaW4oJzsnKTtcclxufVxyXG4iXX0=