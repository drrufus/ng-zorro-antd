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
/** @type {?} */
const defaultDisabledTime = {
    /**
     * @return {?}
     */
    nzDisabledHours() {
        return [];
    },
    /**
     * @return {?}
     */
    nzDisabledMinutes() {
        return [];
    },
    /**
     * @return {?}
     */
    nzDisabledSeconds() {
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
    let disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : ((/** @type {?} */ ({})));
    disabledTimeConfig = Object.assign({}, defaultDisabledTime, disabledTimeConfig);
    return disabledTimeConfig;
}
/**
 * @param {?} value
 * @param {?} disabledTimeConfig
 * @return {?}
 */
export function isTimeValidByConfig(value, disabledTimeConfig) {
    /** @type {?} */
    let invalidTime = false;
    if (value) {
        /** @type {?} */
        const hour = value.getHours();
        /** @type {?} */
        const minutes = value.getMinutes();
        /** @type {?} */
        const seconds = value.getSeconds();
        /** @type {?} */
        const disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            /** @type {?} */
            const disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                /** @type {?} */
                const disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
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
    const disabledTimeConfig = getTimeConfig(value, disabledTime);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7TUFXTSxtQkFBbUIsR0FBdUI7Ozs7SUFDOUMsZUFBZTtRQUNiLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUNELGlCQUFpQjtRQUNmLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUNELGlCQUFpQjtRQUNmLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGOzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWdCLEVBQUUsWUFBNEI7O1FBQ3RFLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsRUFBRSxFQUFzQixDQUFDO0lBQzVHLGtCQUFrQixxQkFDYixtQkFBbUIsRUFDbkIsa0JBQWtCLENBQ3RCLENBQUM7SUFDRixPQUFPLGtCQUFrQixDQUFDO0FBQzVCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUFnQixFQUFFLGtCQUFzQzs7UUFDdEYsV0FBVyxHQUFHLEtBQUs7SUFDdkIsSUFBSSxLQUFLLEVBQUU7O2NBQ0gsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUU7O2NBQ3ZCLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFOztjQUM1QixPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTs7Y0FDNUIsYUFBYSxHQUFHLGtCQUFrQixDQUFDLGVBQWUsRUFBRTtRQUMxRCxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O2tCQUNoQyxlQUFlLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQ2xFLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7c0JBQ3JDLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO2dCQUMzRSxXQUFXLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN2RDtpQkFBTTtnQkFDTCxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7YUFBTTtZQUNMLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDcEI7S0FDRjtJQUNELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDdEIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFnQixFQUFFLFlBQTRCOztVQUNsRSxrQkFBa0IsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQztJQUM3RCxPQUFPLG1CQUFtQixDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3hELENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWdCLEVBQUUsWUFBNkIsRUFBRSxZQUE2QjtJQUMxRyxJQUFJLFlBQVksRUFBRTtRQUNoQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsSUFBSSxZQUFZLEVBQUU7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNhYmxlZERhdGVGbiwgRGlzYWJsZWRUaW1lQ29uZmlnLCBEaXNhYmxlZFRpbWVGbiB9IGZyb20gJy4uL3N0YW5kYXJkLXR5cGVzJztcclxuXHJcbmNvbnN0IGRlZmF1bHREaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUNvbmZpZyA9IHtcclxuICBuekRpc2FibGVkSG91cnMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH0sXHJcbiAgbnpEaXNhYmxlZE1pbnV0ZXMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH0sXHJcbiAgbnpEaXNhYmxlZFNlY29uZHMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lQ29uZmlnKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm4pOiBEaXNhYmxlZFRpbWVDb25maWcge1xyXG4gIGxldCBkaXNhYmxlZFRpbWVDb25maWcgPSBkaXNhYmxlZFRpbWUgPyBkaXNhYmxlZFRpbWUodmFsdWUgJiYgdmFsdWUubmF0aXZlRGF0ZSkgOiAoe30gYXMgRGlzYWJsZWRUaW1lQ29uZmlnKTtcclxuICBkaXNhYmxlZFRpbWVDb25maWcgPSB7XHJcbiAgICAuLi5kZWZhdWx0RGlzYWJsZWRUaW1lLFxyXG4gICAgLi4uZGlzYWJsZWRUaW1lQ29uZmlnXHJcbiAgfTtcclxuICByZXR1cm4gZGlzYWJsZWRUaW1lQ29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lVmFsaWRCeUNvbmZpZyh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWVDb25maWc6IERpc2FibGVkVGltZUNvbmZpZyk6IGJvb2xlYW4ge1xyXG4gIGxldCBpbnZhbGlkVGltZSA9IGZhbHNlO1xyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgY29uc3QgaG91ciA9IHZhbHVlLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gdmFsdWUuZ2V0TWludXRlcygpO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHZhbHVlLmdldFNlY29uZHMoKTtcclxuICAgIGNvbnN0IGRpc2FibGVkSG91cnMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZEhvdXJzKCk7XHJcbiAgICBpZiAoZGlzYWJsZWRIb3Vycy5pbmRleE9mKGhvdXIpID09PSAtMSkge1xyXG4gICAgICBjb25zdCBkaXNhYmxlZE1pbnV0ZXMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZE1pbnV0ZXMoaG91cik7XHJcbiAgICAgIGlmIChkaXNhYmxlZE1pbnV0ZXMuaW5kZXhPZihtaW51dGVzKSA9PT0gLTEpIHtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZFNlY29uZHMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZFNlY29uZHMoaG91ciwgbWludXRlcyk7XHJcbiAgICAgICAgaW52YWxpZFRpbWUgPSBkaXNhYmxlZFNlY29uZHMuaW5kZXhPZihzZWNvbmRzKSAhPT0gLTE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW52YWxpZFRpbWUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnZhbGlkVGltZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAhaW52YWxpZFRpbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVWYWxpZCh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgZGlzYWJsZWRUaW1lQ29uZmlnID0gZ2V0VGltZUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lKTtcclxuICByZXR1cm4gaXNUaW1lVmFsaWRCeUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lQ29uZmlnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxsb3dlZERhdGUodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWREYXRlPzogRGlzYWJsZWREYXRlRm4sIGRpc2FibGVkVGltZT86IERpc2FibGVkVGltZUZuKTogYm9vbGVhbiB7XHJcbiAgaWYgKGRpc2FibGVkRGF0ZSkge1xyXG4gICAgaWYgKGRpc2FibGVkRGF0ZSh2YWx1ZS5uYXRpdmVEYXRlKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChkaXNhYmxlZFRpbWUpIHtcclxuICAgIGlmICghaXNUaW1lVmFsaWQodmFsdWUsIGRpc2FibGVkVGltZSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iXX0=