import { __read } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import { timeUnits } from '../time';
import { padStart } from '../util';
import * as i0 from "@angular/core";
var NzTimeRangePipe = /** @class */ (function () {
    function NzTimeRangePipe() {
    }
    NzTimeRangePipe.prototype.transform = function (value, format) {
        if (format === void 0) { format = 'HH:mm:ss'; }
        var duration = Number(value || 0);
        return timeUnits.reduce(function (current, _a) {
            var _b = __read(_a, 2), name = _b[0], unit = _b[1];
            if (current.indexOf(name) !== -1) {
                var v_1 = Math.floor(duration / unit);
                duration -= v_1 * unit;
                return current.replace(new RegExp(name + "+", 'g'), function (match) {
                    return padStart(v_1.toString(), match.length, '0');
                });
            }
            return current;
        }, format);
    };
    /** @nocollapse */ NzTimeRangePipe.ɵfac = function NzTimeRangePipe_Factory(t) { return new (t || NzTimeRangePipe)(); };
    /** @nocollapse */ NzTimeRangePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nzTimeRange", type: NzTimeRangePipe, pure: true });
    return NzTimeRangePipe;
}());
export { NzTimeRangePipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTimeRangePipe, [{
        type: Pipe,
        args: [{
                name: 'nzTimeRange',
                pure: true
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1yYW5nZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsicGlwZS9uei10aW1lLXJhbmdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFFbkM7SUFBQTtLQW1CQztJQWRDLG1DQUFTLEdBQVQsVUFBVSxLQUFzQixFQUFFLE1BQTJCO1FBQTNCLHVCQUFBLEVBQUEsbUJBQTJCO1FBQzNELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFbEMsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBTyxFQUFFLEVBQVk7Z0JBQVosa0JBQVksRUFBWCxZQUFJLEVBQUUsWUFBSTtZQUMzQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hDLElBQU0sR0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxRQUFRLElBQUksR0FBQyxHQUFHLElBQUksQ0FBQztnQkFDckIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFJLElBQUksTUFBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFVBQUMsS0FBYTtvQkFDaEUsT0FBTyxRQUFRLENBQUMsR0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ25ELENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDYixDQUFDO2tGQWRVLGVBQWU7eUVBQWYsZUFBZTswQkFoQjVCO0NBK0JDLEFBbkJELElBbUJDO1NBZlksZUFBZTtrREFBZixlQUFlO2NBSjNCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLElBQUk7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0aW1lVW5pdHMgfSBmcm9tICcuLi90aW1lJztcclxuaW1wb3J0IHsgcGFkU3RhcnQgfSBmcm9tICcuLi91dGlsJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbnpUaW1lUmFuZ2UnLFxyXG4gIHB1cmU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGltZVJhbmdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBmb3JtYXQ6IHN0cmluZyA9ICdISDptbTpzcycpOiBzdHJpbmcge1xyXG4gICAgbGV0IGR1cmF0aW9uID0gTnVtYmVyKHZhbHVlIHx8IDApO1xyXG5cclxuICAgIHJldHVybiB0aW1lVW5pdHMucmVkdWNlKChjdXJyZW50LCBbbmFtZSwgdW5pdF0pID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCB2ID0gTWF0aC5mbG9vcihkdXJhdGlvbiAvIHVuaXQpO1xyXG4gICAgICAgIGR1cmF0aW9uIC09IHYgKiB1bml0O1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50LnJlcGxhY2UobmV3IFJlZ0V4cChgJHtuYW1lfStgLCAnZycpLCAobWF0Y2g6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHBhZFN0YXJ0KHYudG9TdHJpbmcoKSwgbWF0Y2gubGVuZ3RoLCAnMCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjdXJyZW50O1xyXG4gICAgfSwgZm9ybWF0KTtcclxuICB9XHJcbn1cclxuIl19