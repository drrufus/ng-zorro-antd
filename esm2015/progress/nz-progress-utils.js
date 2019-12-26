/**
 * @fileoverview added by tsickle
 * Generated from: nz-progress-utils.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibnotcHJvZ3Jlc3MtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxTQUFTLG9CQUFvQixDQUFDLE9BQWU7SUFDM0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLENBQUM7O0FBRUQsTUFBTSxPQUFPLFlBQVk7Ozs7QUFBRyxDQUFDLFNBQXFDLEVBQUUsRUFBRTs7UUFDaEUsT0FBTyxHQUEwQyxFQUFFO0lBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTzs7OztJQUFDLEdBQUcsQ0FBQyxFQUFFOztjQUM3QixLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQzs7Y0FDdEIsU0FBUyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztRQUMzQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNwQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNYLEdBQUcsRUFBRSxTQUFTO1lBQ2QsS0FBSztTQUNOLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJOzs7OztJQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUM7SUFDaEQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxvQkFBb0I7Ozs7QUFBRyxDQUNsQyxXQUF1QyxFQUNHLEVBQUU7SUFDNUMsT0FBTyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRzs7OztJQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO0FBQ2xHLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sb0JBQW9COzs7O0FBQUcsQ0FBQyxXQUFvQyxFQUFFLEVBQUU7VUFDckUsRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsU0FBUyxHQUFHLFVBQVUsS0FBYyxXQUFXLEVBQXZCLCtEQUFPO0lBQ3pFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztjQUM1QixlQUFlLEdBQUcsWUFBWSxDQUFDLG1CQUFBLElBQUksRUFBOEIsQ0FBQzthQUNyRSxHQUFHOzs7O1FBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksR0FBRyxHQUFHLEVBQUM7YUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNiLE9BQU8sbUJBQW1CLFNBQVMsS0FBSyxlQUFlLEdBQUcsQ0FBQztLQUM1RDtJQUNELE9BQU8sbUJBQW1CLFNBQVMsS0FBSyxJQUFJLEtBQUssRUFBRSxHQUFHLENBQUM7QUFDekQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBOelByb2dyZXNzQ29sb3JHcmFkaWVudCwgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MgfSBmcm9tICcuL256LXByb2dyZXNzLmRlZmluaXRpb25zJztcclxuXHJcbmZ1bmN0aW9uIHN0cmlwUGVyY2VudFRvTnVtYmVyKHBlcmNlbnQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgcmV0dXJuICtwZXJjZW50LnJlcGxhY2UoJyUnLCAnJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzb3J0R3JhZGllbnQgPSAoZ3JhZGllbnRzOiBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcykgPT4ge1xyXG4gIGxldCB0ZW1wQXJyOiBBcnJheTx7IGtleTogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0+ID0gW107XHJcblxyXG4gIE9iamVjdC5rZXlzKGdyYWRpZW50cykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBncmFkaWVudHNba2V5XTtcclxuICAgIGNvbnN0IGZvcm1hdEtleSA9IHN0cmlwUGVyY2VudFRvTnVtYmVyKGtleSk7XHJcbiAgICBpZiAoaXNOYU4oZm9ybWF0S2V5KSkge1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbiAgICB0ZW1wQXJyLnB1c2goe1xyXG4gICAgICBrZXk6IGZvcm1hdEtleSxcclxuICAgICAgdmFsdWVcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICB0ZW1wQXJyID0gdGVtcEFyci5zb3J0KChhLCBiKSA9PiBhLmtleSAtIGIua2V5KTtcclxuICByZXR1cm4gdGVtcEFycjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVDaXJjbGVHcmFkaWVudCA9IChcclxuICBzdHJva2VDb2xvcjogTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3NcclxuKTogQXJyYXk8eyBvZmZzZXQ6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9PiA9PiB7XHJcbiAgcmV0dXJuIHNvcnRHcmFkaWVudChzdHJva2VDb2xvcikubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHsgb2Zmc2V0OiBgJHtrZXl9JWAsIGNvbG9yOiB2YWx1ZSB9KSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlTGluZWFyR3JhZGllbnQgPSAoc3Ryb2tlQ29sb3I6IE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50KSA9PiB7XHJcbiAgY29uc3QgeyBmcm9tID0gJyMxODkwZmYnLCB0byA9ICcjMTg5MGZmJywgZGlyZWN0aW9uID0gJ3RvIHJpZ2h0JywgLi4ucmVzdCB9ID0gc3Ryb2tlQ29sb3I7XHJcbiAgaWYgKE9iamVjdC5rZXlzKHJlc3QpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgY29uc3Qgc29ydGVkR3JhZGllbnRzID0gc29ydEdyYWRpZW50KHJlc3QgYXMgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpXHJcbiAgICAgIC5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gJHtrZXl9JWApXHJcbiAgICAgIC5qb2luKCcsICcpO1xyXG4gICAgcmV0dXJuIGBsaW5lYXItZ3JhZGllbnQoJHtkaXJlY3Rpb259LCAke3NvcnRlZEdyYWRpZW50c30pYDtcclxuICB9XHJcbiAgcmV0dXJuIGBsaW5lYXItZ3JhZGllbnQoJHtkaXJlY3Rpb259LCAke2Zyb219LCAke3RvfSlgO1xyXG59O1xyXG4iXX0=