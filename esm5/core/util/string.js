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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxPQUFlO0lBQ3JFLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7UUFDekIsT0FBTyxLQUFLLENBQUM7S0FDZDs7UUFFSyxNQUFNLEdBQUcsS0FBRyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsS0FBTztJQUMvRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdELENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWEsRUFBRSxNQUFjLEVBQUUsT0FBZTs7UUFDN0QsTUFBTSxHQUFHLEtBQUcsS0FBSyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUc7SUFDL0QsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqQyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsTUFBYyxFQUFFLE9BQWU7SUFDaEUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDYixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vKipcclxuICogTXVjaCBsaWtlIGxvZGFzaC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWRTdGFydCh0b1BhZDogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgZWxlbWVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICBpZiAodG9QYWQubGVuZ3RoID4gbGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gdG9QYWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBqb2luZWQgPSBgJHtnZXRSZXBlYXRlZEVsZW1lbnQobGVuZ3RoLCBlbGVtZW50KX0ke3RvUGFkfWA7XHJcbiAgcmV0dXJuIGpvaW5lZC5zbGljZShqb2luZWQubGVuZ3RoIC0gbGVuZ3RoLCBqb2luZWQubGVuZ3RoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZEVuZCh0b1BhZDogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgZWxlbWVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBqb2luZWQgPSBgJHt0b1BhZH0ke2dldFJlcGVhdGVkRWxlbWVudChsZW5ndGgsIGVsZW1lbnQpfWA7XHJcbiAgcmV0dXJuIGpvaW5lZC5zbGljZSgwLCBsZW5ndGgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVwZWF0ZWRFbGVtZW50KGxlbmd0aDogbnVtYmVyLCBlbGVtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBBcnJheShsZW5ndGgpXHJcbiAgICAuZmlsbChlbGVtZW50KVxyXG4gICAgLmpvaW4oJycpO1xyXG59XHJcbiJdfQ==