/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} percent
 * @return {?}
 */
function stripPercentToNumber(percent) {
    return +percent.replace('%', '');
}
/** @type {?} */
export const sortGradient = (/**
 * @param {?} gradients
 * @return {?}
 */
(gradients) => {
    /** @type {?} */
    let tempArr = [];
    Object.keys(gradients).forEach((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        /** @type {?} */
        const value = gradients[key];
        /** @type {?} */
        const formatKey = stripPercentToNumber(key);
        if (isNaN(formatKey)) {
            return {};
        }
        tempArr.push({
            key: formatKey,
            value
        });
    }));
    tempArr = tempArr.sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => a.key - b.key));
    return tempArr;
});
/** @type {?} */
export const handleCircleGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
(strokeColor) => {
    return sortGradient(strokeColor).map((/**
     * @param {?} __0
     * @return {?}
     */
    ({ key, value }) => ({ offset: `${key}%`, color: value })));
});
/** @type {?} */
export const handleLinearGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
(strokeColor) => {
    const { from = '#1890ff', to = '#1890ff', direction = 'to right' } = strokeColor, rest = tslib_1.__rest(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
        /** @type {?} */
        const sortedGradients = sortGradient((/** @type {?} */ (rest)))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ key, value }) => `${value} ${key}%`))
            .join(', ');
        return `linear-gradient(${direction}, ${sortedGradients})`;
    }
    return `linear-gradient(${direction}, ${from}, ${to})`;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibnotcHJvZ3Jlc3MtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLFNBQVMsb0JBQW9CLENBQUMsT0FBZTtJQUMzQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWTs7OztBQUFHLENBQUMsU0FBcUMsRUFBRSxFQUFFOztRQUNoRSxPQUFPLEdBQTBDLEVBQUU7SUFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUU7O2NBQzdCLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDOztjQUN0QixTQUFTLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDO1FBQzNDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ1gsR0FBRyxFQUFFLFNBQVM7WUFDZCxLQUFLO1NBQ04sQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUM7SUFFSCxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUk7Ozs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQztJQUNoRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLG9CQUFvQjs7OztBQUFHLENBQ2xDLFdBQXVDLEVBQ0csRUFBRTtJQUM1QyxPQUFPLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHOzs7O0lBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7QUFDbEcsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxvQkFBb0I7Ozs7QUFBRyxDQUFDLFdBQW9DLEVBQUUsRUFBRTtVQUNyRSxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsRUFBRSxHQUFHLFNBQVMsRUFBRSxTQUFTLEdBQUcsVUFBVSxLQUFjLFdBQVcsRUFBdkIsK0RBQU87SUFDekUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O2NBQzVCLGVBQWUsR0FBRyxZQUFZLENBQUMsbUJBQUEsSUFBSSxFQUE4QixDQUFDO2FBQ3JFLEdBQUc7Ozs7UUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxHQUFHLEdBQUcsRUFBQzthQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2IsT0FBTyxtQkFBbUIsU0FBUyxLQUFLLGVBQWUsR0FBRyxDQUFDO0tBQzVEO0lBQ0QsT0FBTyxtQkFBbUIsU0FBUyxLQUFLLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQztBQUN6RCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50LCBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyB9IGZyb20gJy4vbnotcHJvZ3Jlc3MuZGVmaW5pdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gc3RyaXBQZXJjZW50VG9OdW1iZXIocGVyY2VudDogc3RyaW5nKTogbnVtYmVyIHtcclxuICByZXR1cm4gK3BlcmNlbnQucmVwbGFjZSgnJScsICcnKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNvcnRHcmFkaWVudCA9IChncmFkaWVudHM6IE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKSA9PiB7XHJcbiAgbGV0IHRlbXBBcnI6IEFycmF5PHsga2V5OiBudW1iZXI7IHZhbHVlOiBzdHJpbmcgfT4gPSBbXTtcclxuXHJcbiAgT2JqZWN0LmtleXMoZ3JhZGllbnRzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGdyYWRpZW50c1trZXldO1xyXG4gICAgY29uc3QgZm9ybWF0S2V5ID0gc3RyaXBQZXJjZW50VG9OdW1iZXIoa2V5KTtcclxuICAgIGlmIChpc05hTihmb3JtYXRLZXkpKSB7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICAgIHRlbXBBcnIucHVzaCh7XHJcbiAgICAgIGtleTogZm9ybWF0S2V5LFxyXG4gICAgICB2YWx1ZVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHRlbXBBcnIgPSB0ZW1wQXJyLnNvcnQoKGEsIGIpID0+IGEua2V5IC0gYi5rZXkpO1xyXG4gIHJldHVybiB0ZW1wQXJyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUNpcmNsZUdyYWRpZW50ID0gKFxyXG4gIHN0cm9rZUNvbG9yOiBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzc1xyXG4pOiBBcnJheTx7IG9mZnNldDogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0+ID0+IHtcclxuICByZXR1cm4gc29ydEdyYWRpZW50KHN0cm9rZUNvbG9yKS5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiAoeyBvZmZzZXQ6IGAke2tleX0lYCwgY29sb3I6IHZhbHVlIH0pKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVMaW5lYXJHcmFkaWVudCA9IChzdHJva2VDb2xvcjogTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQpID0+IHtcclxuICBjb25zdCB7IGZyb20gPSAnIzE4OTBmZicsIHRvID0gJyMxODkwZmYnLCBkaXJlY3Rpb24gPSAndG8gcmlnaHQnLCAuLi5yZXN0IH0gPSBzdHJva2VDb2xvcjtcclxuICBpZiAoT2JqZWN0LmtleXMocmVzdCkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBjb25zdCBzb3J0ZWRHcmFkaWVudHMgPSBzb3J0R3JhZGllbnQocmVzdCBhcyBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcylcclxuICAgICAgLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+IGAke3ZhbHVlfSAke2tleX0lYClcclxuICAgICAgLmpvaW4oJywgJyk7XHJcbiAgICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCgke2RpcmVjdGlvbn0sICR7c29ydGVkR3JhZGllbnRzfSlgO1xyXG4gIH1cclxuICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCgke2RpcmVjdGlvbn0sICR7ZnJvbX0sICR7dG99KWA7XHJcbn07XHJcbiJdfQ==