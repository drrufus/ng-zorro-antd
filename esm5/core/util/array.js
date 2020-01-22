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
 * @template T
 * @param {?} value
 * @return {?}
 */
export function toArray(value) {
    /** @type {?} */
    var ret;
    if (value == null) {
        ret = [];
    }
    else if (!Array.isArray(value)) {
        ret = [value];
    }
    else {
        ret = value;
    }
    return ret;
}
/**
 * @template T
 * @param {?} array1
 * @param {?} array2
 * @return {?}
 */
export function arraysEqual(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }
    /** @type {?} */
    var len = array1.length;
    for (var i = 0; i < len; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
/**
 * @template T
 * @param {?} source
 * @return {?}
 */
export function shallowCopyArray(source) {
    return source.slice();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL2FycmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsT0FBTyxDQUFJLEtBQWM7O1FBQ25DLEdBQVE7SUFDWixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsR0FBRyxHQUFHLEVBQUUsQ0FBQztLQUNWO1NBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDaEMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDZjtTQUFNO1FBQ0wsR0FBRyxHQUFHLEtBQUssQ0FBQztLQUNiO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBSSxNQUFXLEVBQUUsTUFBVztJQUNyRCxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUN6RCxPQUFPLEtBQUssQ0FBQztLQUNkOztRQUVLLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTTtJQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMzQixPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBSSxNQUFXO0lBQzdDLE9BQU8sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5PFQ+KHZhbHVlOiBUIHwgVFtdKTogVFtdIHtcclxuICBsZXQgcmV0OiBUW107XHJcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgIHJldCA9IFtdO1xyXG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICByZXQgPSBbdmFsdWVdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXQgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5c0VxdWFsPFQ+KGFycmF5MTogVFtdLCBhcnJheTI6IFRbXSk6IGJvb2xlYW4ge1xyXG4gIGlmICghYXJyYXkxIHx8ICFhcnJheTIgfHwgYXJyYXkxLmxlbmd0aCAhPT0gYXJyYXkyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGVuID0gYXJyYXkxLmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICBpZiAoYXJyYXkxW2ldICE9PSBhcnJheTJbaV0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dDb3B5QXJyYXk8VD4oc291cmNlOiBUW10pOiBUW10ge1xyXG4gIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcclxufVxyXG4iXX0=