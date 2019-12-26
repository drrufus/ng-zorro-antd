/**
 * @fileoverview added by tsickle
 * Generated from: util/number.ts
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
    var numStr = num.toString();
    /** @type {?} */
    var dotIndex = numStr.indexOf('.');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsTUFBTSxVQUFVLFVBQVUsQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLEtBQWE7SUFDaEUsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzdDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxHQUFXOztRQUNoQyxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRTs7UUFDdkIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3BDLE9BQU8sUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUQsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDdkUsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtRQUMzQixPQUFPLEdBQUcsQ0FBQztLQUNaO1NBQU0sSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO1FBQ3BCLE9BQU8sR0FBRyxDQUFDO0tBQ1o7U0FBTTtRQUNMLE9BQU8sR0FBRyxDQUFDO0tBQ1o7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyY2VudChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIHJldHVybiAoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZWNpc2lvbihudW06IG51bWJlcik6IG51bWJlciB7XHJcbiAgY29uc3QgbnVtU3RyID0gbnVtLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgZG90SW5kZXggPSBudW1TdHIuaW5kZXhPZignLicpO1xyXG4gIHJldHVybiBkb3RJbmRleCA+PSAwID8gbnVtU3RyLmxlbmd0aCAtIGRvdEluZGV4IC0gMSA6IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVOdW1iZXJJblJhbmdlKG51bTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGlmIChpc05hTihudW0pIHx8IG51bSA8IG1pbikge1xyXG4gICAgcmV0dXJuIG1pbjtcclxuICB9IGVsc2UgaWYgKG51bSA+IG1heCkge1xyXG4gICAgcmV0dXJuIG1heDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bTtcclxuICB9XHJcbn1cclxuIl19