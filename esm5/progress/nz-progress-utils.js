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
export var sortGradient = (/**
 * @param {?} gradients
 * @return {?}
 */
function (gradients) {
    /** @type {?} */
    var tempArr = [];
    Object.keys(gradients).forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = gradients[key];
        /** @type {?} */
        var formatKey = stripPercentToNumber(key);
        if (isNaN(formatKey)) {
            return {};
        }
        tempArr.push({
            key: formatKey,
            value: value
        });
    }));
    tempArr = tempArr.sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) { return a.key - b.key; }));
    return tempArr;
});
/** @type {?} */
export var handleCircleGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
function (strokeColor) {
    return sortGradient(strokeColor).map((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var key = _a.key, value = _a.value;
        return ({ offset: key + "%", color: value });
    }));
});
/** @type {?} */
export var handleLinearGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
function (strokeColor) {
    var _a = strokeColor.from, from = _a === void 0 ? '#1890ff' : _a, _b = strokeColor.to, to = _b === void 0 ? '#1890ff' : _b, _c = strokeColor.direction, direction = _c === void 0 ? 'to right' : _c, rest = tslib_1.__rest(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
        /** @type {?} */
        var sortedGradients = sortGradient((/** @type {?} */ (rest)))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var key = _a.key, value = _a.value;
            return value + " " + key + "%";
        }))
            .join(', ');
        return "linear-gradient(" + direction + ", " + sortedGradients + ")";
    }
    return "linear-gradient(" + direction + ", " + from + ", " + to + ")";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibnotcHJvZ3Jlc3MtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxTQUFTLG9CQUFvQixDQUFDLE9BQWU7SUFDM0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVk7Ozs7QUFBRyxVQUFDLFNBQXFDOztRQUM1RCxPQUFPLEdBQTBDLEVBQUU7SUFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQSxHQUFHOztZQUMxQixLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQzs7WUFDdEIsU0FBUyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztRQUMzQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNwQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNYLEdBQUcsRUFBRSxTQUFTO1lBQ2QsS0FBSyxPQUFBO1NBQ04sQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUM7SUFFSCxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUk7Ozs7O0lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFiLENBQWEsRUFBQyxDQUFDO0lBQ2hELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sb0JBQW9COzs7O0FBQUcsVUFDbEMsV0FBdUM7SUFFdkMsT0FBTyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRzs7OztJQUFDLFVBQUMsRUFBYztZQUFaLFlBQUcsRUFBRSxnQkFBSztRQUFPLE9BQUEsQ0FBQyxFQUFFLE1BQU0sRUFBSyxHQUFHLE1BQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFBckMsQ0FBcUMsRUFBQyxDQUFDO0FBQ2xHLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sb0JBQW9COzs7O0FBQUcsVUFBQyxXQUFvQztJQUMvRCxJQUFBLHFCQUFnQixFQUFoQixxQ0FBZ0IsRUFBRSxtQkFBYyxFQUFkLG1DQUFjLEVBQUUsMEJBQXNCLEVBQXRCLDJDQUFzQixFQUFFLCtEQUFPO0lBQ3pFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztZQUM1QixlQUFlLEdBQUcsWUFBWSxDQUFDLG1CQUFBLElBQUksRUFBOEIsQ0FBQzthQUNyRSxHQUFHOzs7O1FBQUMsVUFBQyxFQUFjO2dCQUFaLFlBQUcsRUFBRSxnQkFBSztZQUFPLE9BQUcsS0FBSyxTQUFJLEdBQUcsTUFBRztRQUFsQixDQUFrQixFQUFDO2FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDYixPQUFPLHFCQUFtQixTQUFTLFVBQUssZUFBZSxNQUFHLENBQUM7S0FDNUQ7SUFDRCxPQUFPLHFCQUFtQixTQUFTLFVBQUssSUFBSSxVQUFLLEVBQUUsTUFBRyxDQUFDO0FBQ3pELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQsIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzIH0gZnJvbSAnLi9uei1wcm9ncmVzcy5kZWZpbml0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBzdHJpcFBlcmNlbnRUb051bWJlcihwZXJjZW50OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gIHJldHVybiArcGVyY2VudC5yZXBsYWNlKCclJywgJycpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc29ydEdyYWRpZW50ID0gKGdyYWRpZW50czogTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpID0+IHtcclxuICBsZXQgdGVtcEFycjogQXJyYXk8eyBrZXk6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9PiA9IFtdO1xyXG5cclxuICBPYmplY3Qua2V5cyhncmFkaWVudHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZ3JhZGllbnRzW2tleV07XHJcbiAgICBjb25zdCBmb3JtYXRLZXkgPSBzdHJpcFBlcmNlbnRUb051bWJlcihrZXkpO1xyXG4gICAgaWYgKGlzTmFOKGZvcm1hdEtleSkpIHtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gICAgdGVtcEFyci5wdXNoKHtcclxuICAgICAga2V5OiBmb3JtYXRLZXksXHJcbiAgICAgIHZhbHVlXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgdGVtcEFyciA9IHRlbXBBcnIuc29ydCgoYSwgYikgPT4gYS5rZXkgLSBiLmtleSk7XHJcbiAgcmV0dXJuIHRlbXBBcnI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlQ2lyY2xlR3JhZGllbnQgPSAoXHJcbiAgc3Ryb2tlQ29sb3I6IE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzXHJcbik6IEFycmF5PHsgb2Zmc2V0OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT4gPT4ge1xyXG4gIHJldHVybiBzb3J0R3JhZGllbnQoc3Ryb2tlQ29sb3IpLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7IG9mZnNldDogYCR7a2V5fSVgLCBjb2xvcjogdmFsdWUgfSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUxpbmVhckdyYWRpZW50ID0gKHN0cm9rZUNvbG9yOiBOelByb2dyZXNzQ29sb3JHcmFkaWVudCkgPT4ge1xyXG4gIGNvbnN0IHsgZnJvbSA9ICcjMTg5MGZmJywgdG8gPSAnIzE4OTBmZicsIGRpcmVjdGlvbiA9ICd0byByaWdodCcsIC4uLnJlc3QgfSA9IHN0cm9rZUNvbG9yO1xyXG4gIGlmIChPYmplY3Qua2V5cyhyZXN0KS5sZW5ndGggIT09IDApIHtcclxuICAgIGNvbnN0IHNvcnRlZEdyYWRpZW50cyA9IHNvcnRHcmFkaWVudChyZXN0IGFzIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKVxyXG4gICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gYCR7dmFsdWV9ICR7a2V5fSVgKVxyXG4gICAgICAuam9pbignLCAnKTtcclxuICAgIHJldHVybiBgbGluZWFyLWdyYWRpZW50KCR7ZGlyZWN0aW9ufSwgJHtzb3J0ZWRHcmFkaWVudHN9KWA7XHJcbiAgfVxyXG4gIHJldHVybiBgbGluZWFyLWdyYWRpZW50KCR7ZGlyZWN0aW9ufSwgJHtmcm9tfSwgJHt0b30pYDtcclxufTtcclxuIl19