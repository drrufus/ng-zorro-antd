/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __rest } from "tslib";
function stripPercentToNumber(percent) {
    return +percent.replace('%', '');
}
export var sortGradient = function (gradients) {
    var tempArr = [];
    Object.keys(gradients).forEach(function (key) {
        var value = gradients[key];
        var formatKey = stripPercentToNumber(key);
        if (!isNaN(formatKey)) {
            tempArr.push({
                key: formatKey,
                value: value
            });
        }
    });
    tempArr = tempArr.sort(function (a, b) { return a.key - b.key; });
    return tempArr;
};
export var handleCircleGradient = function (strokeColor) {
    return sortGradient(strokeColor).map(function (_a) {
        var key = _a.key, value = _a.value;
        return ({ offset: key + "%", color: value });
    });
};
export var handleLinearGradient = function (strokeColor) {
    var _a = strokeColor.from, from = _a === void 0 ? '#1890ff' : _a, _b = strokeColor.to, to = _b === void 0 ? '#1890ff' : _b, _c = strokeColor.direction, direction = _c === void 0 ? 'to right' : _c, rest = __rest(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
        var sortedGradients = sortGradient(rest)
            .map(function (_a) {
            var key = _a.key, value = _a.value;
            return value + " " + key + "%";
        })
            .join(', ');
        return "linear-gradient(" + direction + ", " + sortedGradients + ")";
    }
    return "linear-gradient(" + direction + ", " + from + ", " + to + ")";
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibnotcHJvZ3Jlc3MtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUlILFNBQVMsb0JBQW9CLENBQUMsT0FBZTtJQUMzQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLFlBQVksR0FBRyxVQUFDLFNBQXFDO0lBQ2hFLElBQUksT0FBTyxHQUEwQyxFQUFFLENBQUM7SUFFeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1FBQ2hDLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFNLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsS0FBSyxPQUFBO2FBQ04sQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBYixDQUFhLENBQUMsQ0FBQztJQUNoRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLFdBQXVDO0lBQzFFLE9BQU8sWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWM7WUFBWixZQUFHLEVBQUUsZ0JBQUs7UUFBTyxPQUFBLENBQUMsRUFBRSxNQUFNLEVBQUssR0FBRyxNQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQXJDLENBQXFDLENBQUMsQ0FBQztBQUNsRyxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLFdBQW9DO0lBQy9ELElBQUEscUJBQWdCLEVBQWhCLHFDQUFnQixFQUFFLG1CQUFjLEVBQWQsbUNBQWMsRUFBRSwwQkFBc0IsRUFBdEIsMkNBQXNCLEVBQUUsdURBQU8sQ0FBaUI7SUFDMUYsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbEMsSUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFDLElBQWtDLENBQUM7YUFDckUsR0FBRyxDQUFDLFVBQUMsRUFBYztnQkFBWixZQUFHLEVBQUUsZ0JBQUs7WUFBTyxPQUFHLEtBQUssU0FBSSxHQUFHLE1BQUc7UUFBbEIsQ0FBa0IsQ0FBQzthQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxPQUFPLHFCQUFtQixTQUFTLFVBQUssZUFBZSxNQUFHLENBQUM7S0FDNUQ7SUFDRCxPQUFPLHFCQUFtQixTQUFTLFVBQUssSUFBSSxVQUFLLEVBQUUsTUFBRyxDQUFDO0FBQ3pELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQsIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzIH0gZnJvbSAnLi9uei1wcm9ncmVzcy5kZWZpbml0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBzdHJpcFBlcmNlbnRUb051bWJlcihwZXJjZW50OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gIHJldHVybiArcGVyY2VudC5yZXBsYWNlKCclJywgJycpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc29ydEdyYWRpZW50ID0gKGdyYWRpZW50czogTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpID0+IHtcclxuICBsZXQgdGVtcEFycjogQXJyYXk8eyBrZXk6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9PiA9IFtdO1xyXG5cclxuICBPYmplY3Qua2V5cyhncmFkaWVudHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZ3JhZGllbnRzW2tleV07XHJcbiAgICBjb25zdCBmb3JtYXRLZXkgPSBzdHJpcFBlcmNlbnRUb051bWJlcihrZXkpO1xyXG4gICAgaWYgKCFpc05hTihmb3JtYXRLZXkpKSB7XHJcbiAgICAgIHRlbXBBcnIucHVzaCh7XHJcbiAgICAgICAga2V5OiBmb3JtYXRLZXksXHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHRlbXBBcnIgPSB0ZW1wQXJyLnNvcnQoKGEsIGIpID0+IGEua2V5IC0gYi5rZXkpO1xyXG4gIHJldHVybiB0ZW1wQXJyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUNpcmNsZUdyYWRpZW50ID0gKHN0cm9rZUNvbG9yOiBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyk6IEFycmF5PHsgb2Zmc2V0OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT4gPT4ge1xyXG4gIHJldHVybiBzb3J0R3JhZGllbnQoc3Ryb2tlQ29sb3IpLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7IG9mZnNldDogYCR7a2V5fSVgLCBjb2xvcjogdmFsdWUgfSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUxpbmVhckdyYWRpZW50ID0gKHN0cm9rZUNvbG9yOiBOelByb2dyZXNzQ29sb3JHcmFkaWVudCkgPT4ge1xyXG4gIGNvbnN0IHsgZnJvbSA9ICcjMTg5MGZmJywgdG8gPSAnIzE4OTBmZicsIGRpcmVjdGlvbiA9ICd0byByaWdodCcsIC4uLnJlc3QgfSA9IHN0cm9rZUNvbG9yO1xyXG4gIGlmIChPYmplY3Qua2V5cyhyZXN0KS5sZW5ndGggIT09IDApIHtcclxuICAgIGNvbnN0IHNvcnRlZEdyYWRpZW50cyA9IHNvcnRHcmFkaWVudChyZXN0IGFzIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKVxyXG4gICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gYCR7dmFsdWV9ICR7a2V5fSVgKVxyXG4gICAgICAuam9pbignLCAnKTtcclxuICAgIHJldHVybiBgbGluZWFyLWdyYWRpZW50KCR7ZGlyZWN0aW9ufSwgJHtzb3J0ZWRHcmFkaWVudHN9KWA7XHJcbiAgfVxyXG4gIHJldHVybiBgbGluZWFyLWdyYWRpZW50KCR7ZGlyZWN0aW9ufSwgJHtmcm9tfSwgJHt0b30pYDtcclxufTtcclxuIl19