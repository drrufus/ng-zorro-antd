/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __assign } from "tslib";
var defaultDisabledTime = {
    nzDisabledHours: function () {
        return [];
    },
    nzDisabledMinutes: function () {
        return [];
    },
    nzDisabledSeconds: function () {
        return [];
    }
};
export function getTimeConfig(value, disabledTime) {
    var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : {};
    disabledTimeConfig = __assign(__assign({}, defaultDisabledTime), disabledTimeConfig);
    return disabledTimeConfig;
}
export function isTimeValidByConfig(value, disabledTimeConfig) {
    var invalidTime = false;
    if (value) {
        var hour = value.getHours();
        var minutes = value.getMinutes();
        var seconds = value.getSeconds();
        var disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
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
export function isTimeValid(value, disabledTime) {
    var disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBS0gsSUFBTSxtQkFBbUIsR0FBdUI7SUFDOUMsZUFBZSxFQUFmO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsaUJBQWlCLEVBQWpCO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsaUJBQWlCLEVBQWpCO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBZ0IsRUFBRSxZQUE0QjtJQUMxRSxJQUFJLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLEVBQXlCLENBQUM7SUFDN0csa0JBQWtCLHlCQUNiLG1CQUFtQixHQUNuQixrQkFBa0IsQ0FDdEIsQ0FBQztJQUNGLE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUFnQixFQUFFLGtCQUFzQztJQUMxRixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDeEIsSUFBSSxLQUFLLEVBQUU7UUFDVCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25DLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQyxJQUFNLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzRCxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdEMsSUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkUsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxJQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzVFLFdBQVcsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNMLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRjthQUFNO1lBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNwQjtLQUNGO0lBQ0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUN0QixDQUFDO0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFnQixFQUFFLFlBQTRCO0lBQ3hFLElBQU0sa0JBQWtCLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5RCxPQUFPLG1CQUFtQixDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWdCLEVBQUUsWUFBNkIsRUFBRSxZQUE2QjtJQUMxRyxJQUFJLFlBQVksRUFBRTtRQUNoQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsSUFBSSxZQUFZLEVBQUU7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNhYmxlZERhdGVGbiwgRGlzYWJsZWRUaW1lQ29uZmlnLCBEaXNhYmxlZFRpbWVGbiB9IGZyb20gJy4uL3N0YW5kYXJkLXR5cGVzJztcclxuXHJcbmNvbnN0IGRlZmF1bHREaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUNvbmZpZyA9IHtcclxuICBuekRpc2FibGVkSG91cnMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH0sXHJcbiAgbnpEaXNhYmxlZE1pbnV0ZXMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH0sXHJcbiAgbnpEaXNhYmxlZFNlY29uZHMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lQ29uZmlnKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm4pOiBEaXNhYmxlZFRpbWVDb25maWcge1xyXG4gIGxldCBkaXNhYmxlZFRpbWVDb25maWcgPSBkaXNhYmxlZFRpbWUgPyBkaXNhYmxlZFRpbWUodmFsdWUgJiYgdmFsdWUubmF0aXZlRGF0ZSkgOiAoe30gYXMgRGlzYWJsZWRUaW1lQ29uZmlnKTtcclxuICBkaXNhYmxlZFRpbWVDb25maWcgPSB7XHJcbiAgICAuLi5kZWZhdWx0RGlzYWJsZWRUaW1lLFxyXG4gICAgLi4uZGlzYWJsZWRUaW1lQ29uZmlnXHJcbiAgfTtcclxuICByZXR1cm4gZGlzYWJsZWRUaW1lQ29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lVmFsaWRCeUNvbmZpZyh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWVDb25maWc6IERpc2FibGVkVGltZUNvbmZpZyk6IGJvb2xlYW4ge1xyXG4gIGxldCBpbnZhbGlkVGltZSA9IGZhbHNlO1xyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgY29uc3QgaG91ciA9IHZhbHVlLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gdmFsdWUuZ2V0TWludXRlcygpO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHZhbHVlLmdldFNlY29uZHMoKTtcclxuICAgIGNvbnN0IGRpc2FibGVkSG91cnMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZEhvdXJzKCk7XHJcbiAgICBpZiAoZGlzYWJsZWRIb3Vycy5pbmRleE9mKGhvdXIpID09PSAtMSkge1xyXG4gICAgICBjb25zdCBkaXNhYmxlZE1pbnV0ZXMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZE1pbnV0ZXMoaG91cik7XHJcbiAgICAgIGlmIChkaXNhYmxlZE1pbnV0ZXMuaW5kZXhPZihtaW51dGVzKSA9PT0gLTEpIHtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZFNlY29uZHMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZFNlY29uZHMoaG91ciwgbWludXRlcyk7XHJcbiAgICAgICAgaW52YWxpZFRpbWUgPSBkaXNhYmxlZFNlY29uZHMuaW5kZXhPZihzZWNvbmRzKSAhPT0gLTE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW52YWxpZFRpbWUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnZhbGlkVGltZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAhaW52YWxpZFRpbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVWYWxpZCh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgZGlzYWJsZWRUaW1lQ29uZmlnID0gZ2V0VGltZUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lKTtcclxuICByZXR1cm4gaXNUaW1lVmFsaWRCeUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lQ29uZmlnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxsb3dlZERhdGUodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWREYXRlPzogRGlzYWJsZWREYXRlRm4sIGRpc2FibGVkVGltZT86IERpc2FibGVkVGltZUZuKTogYm9vbGVhbiB7XHJcbiAgaWYgKGRpc2FibGVkRGF0ZSkge1xyXG4gICAgaWYgKGRpc2FibGVkRGF0ZSh2YWx1ZS5uYXRpdmVEYXRlKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChkaXNhYmxlZFRpbWUpIHtcclxuICAgIGlmICghaXNUaW1lVmFsaWQodmFsdWUsIGRpc2FibGVkVGltZSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iXX0=