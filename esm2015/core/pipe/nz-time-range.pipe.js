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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1yYW5nZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsicGlwZS9uei10aW1lLXJhbmdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFNbkMsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUMxQixTQUFTLENBQUMsS0FBc0IsRUFBRSxTQUFpQixVQUFVOztZQUN2RCxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFFakMsT0FBTyxTQUFTLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7c0JBQzFCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLFFBQVEsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUM7Ozs7Z0JBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtvQkFDcEUsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ25ELENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLEdBQUUsTUFBTSxDQUFDLENBQUM7SUFDYixDQUFDOzs7WUFsQkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsSUFBSTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRpbWVVbml0cyB9IGZyb20gJy4uL3RpbWUnO1xyXG5pbXBvcnQgeyBwYWRTdGFydCB9IGZyb20gJy4uL3V0aWwnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICduelRpbWVSYW5nZScsXHJcbiAgcHVyZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUaW1lUmFuZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGZvcm1hdDogc3RyaW5nID0gJ0hIOm1tOnNzJyk6IHN0cmluZyB7XHJcbiAgICBsZXQgZHVyYXRpb24gPSBOdW1iZXIodmFsdWUgfHwgMCk7XHJcblxyXG4gICAgcmV0dXJuIHRpbWVVbml0cy5yZWR1Y2UoKGN1cnJlbnQsIFtuYW1lLCB1bml0XSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudC5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IHYgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gdW5pdCk7XHJcbiAgICAgICAgZHVyYXRpb24gLT0gdiAqIHVuaXQ7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQucmVwbGFjZShuZXcgUmVnRXhwKGAke25hbWV9K2AsICdnJyksIChtYXRjaDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcGFkU3RhcnQodi50b1N0cmluZygpLCBtYXRjaC5sZW5ndGgsICcwJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgICB9LCBmb3JtYXQpO1xyXG4gIH1cclxufVxyXG4iXX0=