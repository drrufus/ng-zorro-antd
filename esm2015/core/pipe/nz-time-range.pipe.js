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
export class NzTimeRangePipe {
    transform(value, format = 'HH:mm:ss') {
        let duration = Number(value || 0);
        return timeUnits.reduce((current, [name, unit]) => {
            if (current.indexOf(name) !== -1) {
                const v = Math.floor(duration / unit);
                duration -= v * unit;
                return current.replace(new RegExp(`${name}+`, 'g'), (match) => {
                    return padStart(v.toString(), match.length, '0');
                });
            }
            return current;
        }, format);
    }
}
/** @nocollapse */ NzTimeRangePipe.ɵfac = function NzTimeRangePipe_Factory(t) { return new (t || NzTimeRangePipe)(); };
/** @nocollapse */ NzTimeRangePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nzTimeRange", type: NzTimeRangePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTimeRangePipe, [{
        type: Pipe,
        args: [{
                name: 'nzTimeRange',
                pure: true
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1yYW5nZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsicGlwZS9uei10aW1lLXJhbmdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQU1uQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsS0FBc0IsRUFBRSxTQUFpQixVQUFVO1FBQzNELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFbEMsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNoQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDdEMsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7b0JBQ3BFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7OEVBZFUsZUFBZTtxRUFBZixlQUFlO2tEQUFmLGVBQWU7Y0FKM0IsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsSUFBSTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRpbWVVbml0cyB9IGZyb20gJy4uL3RpbWUnO1xyXG5pbXBvcnQgeyBwYWRTdGFydCB9IGZyb20gJy4uL3V0aWwnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICduelRpbWVSYW5nZScsXHJcbiAgcHVyZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUaW1lUmFuZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGZvcm1hdDogc3RyaW5nID0gJ0hIOm1tOnNzJyk6IHN0cmluZyB7XHJcbiAgICBsZXQgZHVyYXRpb24gPSBOdW1iZXIodmFsdWUgfHwgMCk7XHJcblxyXG4gICAgcmV0dXJuIHRpbWVVbml0cy5yZWR1Y2UoKGN1cnJlbnQsIFtuYW1lLCB1bml0XSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudC5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IHYgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gdW5pdCk7XHJcbiAgICAgICAgZHVyYXRpb24gLT0gdiAqIHVuaXQ7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQucmVwbGFjZShuZXcgUmVnRXhwKGAke25hbWV9K2AsICdnJyksIChtYXRjaDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcGFkU3RhcnQodi50b1N0cmluZygpLCBtYXRjaC5sZW5ndGgsICcwJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgICB9LCBmb3JtYXQpO1xyXG4gIH1cclxufVxyXG4iXX0=