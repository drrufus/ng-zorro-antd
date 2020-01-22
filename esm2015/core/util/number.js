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
 * @param {?} min
 * @param {?} max
 * @param {?} value
 * @return {?}
 */
export function getPercent(min, max, value) {
    return ((value - min) / (max - min)) * 100;
}
/**
 * @param {?} num
 * @return {?}
 */
export function getPrecision(num) {
    /** @type {?} */
    const numStr = num.toString();
    /** @type {?} */
    const dotIndex = numStr.indexOf('.');
    return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
}
/**
 * @param {?} num
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
export function ensureNumberInRange(num, min, max) {
    if (isNaN(num) || num < min) {
        return min;
    }
    else if (num > max) {
        return max;
    }
    else {
        return num;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsVUFBVSxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYTtJQUNoRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDN0MsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEdBQVc7O1VBQ2hDLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFOztVQUN2QixRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDcEMsT0FBTyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUN2RSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO1FBQzNCLE9BQU8sR0FBRyxDQUFDO0tBQ1o7U0FBTSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUM7S0FDWjtTQUFNO1FBQ0wsT0FBTyxHQUFHLENBQUM7S0FDWjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQZXJjZW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgcmV0dXJuICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJlY2lzaW9uKG51bTogbnVtYmVyKTogbnVtYmVyIHtcclxuICBjb25zdCBudW1TdHIgPSBudW0udG9TdHJpbmcoKTtcclxuICBjb25zdCBkb3RJbmRleCA9IG51bVN0ci5pbmRleE9mKCcuJyk7XHJcbiAgcmV0dXJuIGRvdEluZGV4ID49IDAgPyBudW1TdHIubGVuZ3RoIC0gZG90SW5kZXggLSAxIDogMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZU51bWJlckluUmFuZ2UobnVtOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgaWYgKGlzTmFOKG51bSkgfHwgbnVtIDwgbWluKSB7XHJcbiAgICByZXR1cm4gbWluO1xyXG4gIH0gZWxzZSBpZiAobnVtID4gbWF4KSB7XHJcbiAgICByZXR1cm4gbWF4O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVtO1xyXG4gIH1cclxufVxyXG4iXX0=