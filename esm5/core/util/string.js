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
    var joined = "" + getRepeatedElement(length, element) + toPad;
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
    var joined = "" + toPad + getRepeatedElement(length, element);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE9BQWU7SUFDckUsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtRQUN6QixPQUFPLEtBQUssQ0FBQztLQUNkOztRQUVLLE1BQU0sR0FBRyxLQUFHLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFPO0lBQy9ELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0QsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxPQUFlOztRQUM3RCxNQUFNLEdBQUcsS0FBRyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBRztJQUMvRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxNQUFjLEVBQUUsT0FBZTtJQUNoRSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBNdWNoIGxpa2UgbG9kYXNoLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZFN0YXJ0KHRvUGFkOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBlbGVtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGlmICh0b1BhZC5sZW5ndGggPiBsZW5ndGgpIHtcclxuICAgIHJldHVybiB0b1BhZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGpvaW5lZCA9IGAke2dldFJlcGVhdGVkRWxlbWVudChsZW5ndGgsIGVsZW1lbnQpfSR7dG9QYWR9YDtcclxuICByZXR1cm4gam9pbmVkLnNsaWNlKGpvaW5lZC5sZW5ndGggLSBsZW5ndGgsIGpvaW5lZC5sZW5ndGgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFkRW5kKHRvUGFkOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBlbGVtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGpvaW5lZCA9IGAke3RvUGFkfSR7Z2V0UmVwZWF0ZWRFbGVtZW50KGxlbmd0aCwgZWxlbWVudCl9YDtcclxuICByZXR1cm4gam9pbmVkLnNsaWNlKDAsIGxlbmd0aCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXBlYXRlZEVsZW1lbnQobGVuZ3RoOiBudW1iZXIsIGVsZW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIEFycmF5KGxlbmd0aClcclxuICAgIC5maWxsKGVsZW1lbnQpXHJcbiAgICAuam9pbignJyk7XHJcbn1cclxuIl19