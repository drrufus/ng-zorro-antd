/**
 * @fileoverview added by tsickle
 * Generated from: pipe/nz-time-range.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NzTimeRangePipe {
    /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    transform(value, format = 'HH:mm:ss') {
        /** @type {?} */
        let duration = Number(value || 0);
        return timeUnits.reduce((/**
         * @param {?} current
         * @param {?} __1
         * @return {?}
         */
        (current, [name, unit]) => {
            if (current.indexOf(name) !== -1) {
                /** @type {?} */
                const v = Math.floor(duration / unit);
                duration -= v * unit;
                return current.replace(new RegExp(`${name}+`, 'g'), (/**
                 * @param {?} match
                 * @return {?}
                 */
                (match) => {
                    return padStart(v.toString(), match.length, '0');
                }));
            }
            return current;
        }), format);
    }
}
NzTimeRangePipe.decorators = [
    { type: Pipe, args: [{
                name: 'nzTimeRange',
                pure: true
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1yYW5nZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsicGlwZS9uei10aW1lLXJhbmdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTW5DLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUFDMUIsU0FBUyxDQUFDLEtBQXNCLEVBQUUsU0FBaUIsVUFBVTs7WUFDdkQsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBRWpDLE9BQU8sU0FBUyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O3NCQUMxQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQyxRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDckIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDOzs7O2dCQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7b0JBQ3BFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxHQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7O1lBbEJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLElBQUk7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0aW1lVW5pdHMgfSBmcm9tICcuLi90aW1lJztcclxuaW1wb3J0IHsgcGFkU3RhcnQgfSBmcm9tICcuLi91dGlsJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbnpUaW1lUmFuZ2UnLFxyXG4gIHB1cmU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGltZVJhbmdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBmb3JtYXQ6IHN0cmluZyA9ICdISDptbTpzcycpOiBzdHJpbmcge1xyXG4gICAgbGV0IGR1cmF0aW9uID0gTnVtYmVyKHZhbHVlIHx8IDApO1xyXG5cclxuICAgIHJldHVybiB0aW1lVW5pdHMucmVkdWNlKChjdXJyZW50LCBbbmFtZSwgdW5pdF0pID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCB2ID0gTWF0aC5mbG9vcihkdXJhdGlvbiAvIHVuaXQpO1xyXG4gICAgICAgIGR1cmF0aW9uIC09IHYgKiB1bml0O1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50LnJlcGxhY2UobmV3IFJlZ0V4cChgJHtuYW1lfStgLCAnZycpLCAobWF0Y2g6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHBhZFN0YXJ0KHYudG9TdHJpbmcoKSwgbWF0Y2gubGVuZ3RoLCAnMCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjdXJyZW50O1xyXG4gICAgfSwgZm9ybWF0KTtcclxuICB9XHJcbn1cclxuIl19