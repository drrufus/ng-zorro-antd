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
import { Pipe } from '@angular/core';
import { timeUnits } from '../time';
import { padStart } from '../util';
var NzTimeRangePipe = /** @class */ (function () {
    function NzTimeRangePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    NzTimeRangePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    function (value, format) {
        if (format === void 0) { format = 'HH:mm:ss'; }
        /** @type {?} */
        var duration = Number(value || 0);
        return timeUnits.reduce((/**
         * @param {?} current
         * @param {?} __1
         * @return {?}
         */
        function (current, _a) {
            var _b = tslib_1.__read(_a, 2), name = _b[0], unit = _b[1];
            if (current.indexOf(name) !== -1) {
                /** @type {?} */
                var v_1 = Math.floor(duration / unit);
                duration -= v_1 * unit;
                return current.replace(new RegExp(name + "+", 'g'), (/**
                 * @param {?} match
                 * @return {?}
                 */
                function (match) {
                    return padStart(v_1.toString(), match.length, '0');
                }));
            }
            return current;
        }), format);
    };
    NzTimeRangePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'nzTimeRange',
                    pure: true
                },] }
    ];
    return NzTimeRangePipe;
}());
export { NzTimeRangePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1yYW5nZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsicGlwZS9uei10aW1lLXJhbmdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRW5DO0lBQUE7SUFtQkEsQ0FBQzs7Ozs7O0lBZEMsbUNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFzQixFQUFFLE1BQTJCO1FBQTNCLHVCQUFBLEVBQUEsbUJBQTJCOztZQUN2RCxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFFakMsT0FBTyxTQUFTLENBQUMsTUFBTTs7Ozs7UUFBQyxVQUFDLE9BQU8sRUFBRSxFQUFZO2dCQUFaLDBCQUFZLEVBQVgsWUFBSSxFQUFFLFlBQUk7WUFDM0MsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztvQkFDMUIsR0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckMsUUFBUSxJQUFJLEdBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBSSxJQUFJLE1BQUcsRUFBRSxHQUFHLENBQUM7Ozs7Z0JBQUUsVUFBQyxLQUFhO29CQUNoRSxPQUFPLFFBQVEsQ0FBQyxHQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsR0FBRSxNQUFNLENBQUMsQ0FBQztJQUNiLENBQUM7O2dCQWxCRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGFBQWE7b0JBQ25CLElBQUksRUFBRSxJQUFJO2lCQUNYOztJQWdCRCxzQkFBQztDQUFBLEFBbkJELElBbUJDO1NBZlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0aW1lVW5pdHMgfSBmcm9tICcuLi90aW1lJztcclxuaW1wb3J0IHsgcGFkU3RhcnQgfSBmcm9tICcuLi91dGlsJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbnpUaW1lUmFuZ2UnLFxyXG4gIHB1cmU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGltZVJhbmdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBmb3JtYXQ6IHN0cmluZyA9ICdISDptbTpzcycpOiBzdHJpbmcge1xyXG4gICAgbGV0IGR1cmF0aW9uID0gTnVtYmVyKHZhbHVlIHx8IDApO1xyXG5cclxuICAgIHJldHVybiB0aW1lVW5pdHMucmVkdWNlKChjdXJyZW50LCBbbmFtZSwgdW5pdF0pID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCB2ID0gTWF0aC5mbG9vcihkdXJhdGlvbiAvIHVuaXQpO1xyXG4gICAgICAgIGR1cmF0aW9uIC09IHYgKiB1bml0O1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50LnJlcGxhY2UobmV3IFJlZ0V4cChgJHtuYW1lfStgLCAnZycpLCAobWF0Y2g6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHBhZFN0YXJ0KHYudG9TdHJpbmcoKSwgbWF0Y2gubGVuZ3RoLCAnMCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjdXJyZW50O1xyXG4gICAgfSwgZm9ybWF0KTtcclxuICB9XHJcbn1cclxuIl19