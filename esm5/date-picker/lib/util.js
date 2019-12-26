/**
 * @fileoverview added by tsickle
 * Generated from: lib/util.ts
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
/** @type {?} */
var defaultDisabledTime = {
    nzDisabledHours: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledMinutes: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledSeconds: /**
     * @return {?}
     */
    function () {
        return [];
    }
};
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function getTimeConfig(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : ((/** @type {?} */ ({})));
    disabledTimeConfig = tslib_1.__assign({}, defaultDisabledTime, disabledTimeConfig);
    return disabledTimeConfig;
}
/**
 * @param {?} value
 * @param {?} disabledTimeConfig
 * @return {?}
 */
export function isTimeValidByConfig(value, disabledTimeConfig) {
    /** @type {?} */
    var invalidTime = false;
    if (value) {
        /** @type {?} */
        var hour = value.getHours();
        /** @type {?} */
        var minutes = value.getMinutes();
        /** @type {?} */
        var seconds = value.getSeconds();
        /** @type {?} */
        var disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            /** @type {?} */
            var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                /** @type {?} */
                var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function isTimeValid(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
/**
 * @param {?} value
 * @param {?=} disabledDate
 * @param {?=} disabledTime
 * @return {?}
 */
export function isAllowedDate(value, disabledDate, disabledTime) {
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQVdNLG1CQUFtQixHQUF1QjtJQUM5QyxlQUFlOzs7SUFBZjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELGlCQUFpQjs7O0lBQWpCO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsaUJBQWlCOzs7SUFBakI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDRjs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFnQixFQUFFLFlBQTRCOztRQUN0RSxrQkFBa0IsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLEVBQUUsRUFBc0IsQ0FBQztJQUM1RyxrQkFBa0Isd0JBQ2IsbUJBQW1CLEVBQ25CLGtCQUFrQixDQUN0QixDQUFDO0lBQ0YsT0FBTyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsS0FBZ0IsRUFBRSxrQkFBc0M7O1FBQ3RGLFdBQVcsR0FBRyxLQUFLO0lBQ3ZCLElBQUksS0FBSyxFQUFFOztZQUNILElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFOztZQUN2QixPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTs7WUFDNUIsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7O1lBQzVCLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUU7UUFDMUQsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztnQkFDaEMsZUFBZSxHQUFHLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUNsRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O29CQUNyQyxlQUFlLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztnQkFDM0UsV0FBVyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdkQ7aUJBQU07Z0JBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNGO2FBQU07WUFDTCxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0tBQ0Y7SUFDRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3RCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBZ0IsRUFBRSxZQUE0Qjs7UUFDbEUsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7SUFDN0QsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUN4RCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFnQixFQUFFLFlBQTZCLEVBQUUsWUFBNkI7SUFDMUcsSUFBSSxZQUFZLEVBQUU7UUFDaEIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELElBQUksWUFBWSxFQUFFO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIERpc2FibGVkVGltZUNvbmZpZywgRGlzYWJsZWRUaW1lRm4gfSBmcm9tICcuLi9zdGFuZGFyZC10eXBlcyc7XHJcblxyXG5jb25zdCBkZWZhdWx0RGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVDb25maWcgPSB7XHJcbiAgbnpEaXNhYmxlZEhvdXJzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9LFxyXG4gIG56RGlzYWJsZWRNaW51dGVzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9LFxyXG4gIG56RGlzYWJsZWRTZWNvbmRzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZUNvbmZpZyh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuKTogRGlzYWJsZWRUaW1lQ29uZmlnIHtcclxuICBsZXQgZGlzYWJsZWRUaW1lQ29uZmlnID0gZGlzYWJsZWRUaW1lID8gZGlzYWJsZWRUaW1lKHZhbHVlICYmIHZhbHVlLm5hdGl2ZURhdGUpIDogKHt9IGFzIERpc2FibGVkVGltZUNvbmZpZyk7XHJcbiAgZGlzYWJsZWRUaW1lQ29uZmlnID0ge1xyXG4gICAgLi4uZGVmYXVsdERpc2FibGVkVGltZSxcclxuICAgIC4uLmRpc2FibGVkVGltZUNvbmZpZ1xyXG4gIH07XHJcbiAgcmV0dXJuIGRpc2FibGVkVGltZUNvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVGltZVZhbGlkQnlDb25maWcodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWRUaW1lQ29uZmlnOiBEaXNhYmxlZFRpbWVDb25maWcpOiBib29sZWFuIHtcclxuICBsZXQgaW52YWxpZFRpbWUgPSBmYWxzZTtcclxuICBpZiAodmFsdWUpIHtcclxuICAgIGNvbnN0IGhvdXIgPSB2YWx1ZS5nZXRIb3VycygpO1xyXG4gICAgY29uc3QgbWludXRlcyA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSB2YWx1ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICBjb25zdCBkaXNhYmxlZEhvdXJzID0gZGlzYWJsZWRUaW1lQ29uZmlnLm56RGlzYWJsZWRIb3VycygpO1xyXG4gICAgaWYgKGRpc2FibGVkSG91cnMuaW5kZXhPZihob3VyKSA9PT0gLTEpIHtcclxuICAgICAgY29uc3QgZGlzYWJsZWRNaW51dGVzID0gZGlzYWJsZWRUaW1lQ29uZmlnLm56RGlzYWJsZWRNaW51dGVzKGhvdXIpO1xyXG4gICAgICBpZiAoZGlzYWJsZWRNaW51dGVzLmluZGV4T2YobWludXRlcykgPT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWRTZWNvbmRzID0gZGlzYWJsZWRUaW1lQ29uZmlnLm56RGlzYWJsZWRTZWNvbmRzKGhvdXIsIG1pbnV0ZXMpO1xyXG4gICAgICAgIGludmFsaWRUaW1lID0gZGlzYWJsZWRTZWNvbmRzLmluZGV4T2Yoc2Vjb25kcykgIT09IC0xO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGludmFsaWRUaW1lID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW52YWxpZFRpbWUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gIWludmFsaWRUaW1lO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lVmFsaWQodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbik6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGRpc2FibGVkVGltZUNvbmZpZyA9IGdldFRpbWVDb25maWcodmFsdWUsIGRpc2FibGVkVGltZSk7XHJcbiAgcmV0dXJuIGlzVGltZVZhbGlkQnlDb25maWcodmFsdWUsIGRpc2FibGVkVGltZUNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FsbG93ZWREYXRlKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkRGF0ZT86IERpc2FibGVkRGF0ZUZuLCBkaXNhYmxlZFRpbWU/OiBEaXNhYmxlZFRpbWVGbik6IGJvb2xlYW4ge1xyXG4gIGlmIChkaXNhYmxlZERhdGUpIHtcclxuICAgIGlmIChkaXNhYmxlZERhdGUodmFsdWUubmF0aXZlRGF0ZSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoZGlzYWJsZWRUaW1lKSB7XHJcbiAgICBpZiAoIWlzVGltZVZhbGlkKHZhbHVlLCBkaXNhYmxlZFRpbWUpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuIl19