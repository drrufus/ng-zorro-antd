/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __read } from "tslib";
import { differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarYears, differenceInHours, differenceInMinutes, differenceInSeconds, isSameDay, isSameHour, isSameMinute, isSameMonth, isSameSecond, isSameYear, isToday, isValid, setYear, startOfMonth, startOfWeek } from 'date-fns';
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import setDay from 'date-fns/set_day';
import setMonth from 'date-fns/set_month';
import { warn } from '../logger';
export function sortRangeValue(rangeValue) {
    if (Array.isArray(rangeValue)) {
        var _a = __read(rangeValue, 2), start = _a[0], end = _a[1];
        return start && end && start.isAfterSecond(end) ? [end, start] : [start, end];
    }
    return rangeValue;
}
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
var CandyDate = /** @class */ (function () {
    // locale: string; // Custom specified locale ID
    function CandyDate(date) {
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string' || typeof date === 'number') {
                warn('The string type is not recommended for date-picker, use "Date" type');
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    CandyDate.prototype.calendarStart = function (options) {
        return new CandyDate(startOfWeek(startOfMonth(this.nativeDate), options));
    };
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    CandyDate.prototype.getYear = function () {
        return this.nativeDate.getFullYear();
    };
    CandyDate.prototype.getMonth = function () {
        return this.nativeDate.getMonth();
    };
    CandyDate.prototype.getDay = function () {
        return this.nativeDate.getDay();
    };
    CandyDate.prototype.getTime = function () {
        return this.nativeDate.getTime();
    };
    CandyDate.prototype.getDate = function () {
        return this.nativeDate.getDate();
    };
    CandyDate.prototype.getHours = function () {
        return this.nativeDate.getHours();
    };
    CandyDate.prototype.getMinutes = function () {
        return this.nativeDate.getMinutes();
    };
    CandyDate.prototype.getSeconds = function () {
        return this.nativeDate.getSeconds();
    };
    CandyDate.prototype.getMilliseconds = function () {
        return this.nativeDate.getMilliseconds();
    };
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    CandyDate.prototype.clone = function () {
        return new CandyDate(new Date(this.nativeDate));
    };
    CandyDate.prototype.setHms = function (hour, minute, second) {
        return new CandyDate(this.nativeDate.setHours(hour, minute, second));
    };
    CandyDate.prototype.setYear = function (year) {
        return new CandyDate(setYear(this.nativeDate, year));
    };
    CandyDate.prototype.addYears = function (amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    };
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    CandyDate.prototype.setMonth = function (month) {
        return new CandyDate(setMonth(this.nativeDate, month));
    };
    CandyDate.prototype.addMonths = function (amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    };
    CandyDate.prototype.setDay = function (day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    };
    CandyDate.prototype.setDate = function (amount) {
        var date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    };
    CandyDate.prototype.addDays = function (amount) {
        return this.setDate(this.getDate() + amount);
    };
    CandyDate.prototype.isSame = function (date, grain) {
        if (grain === void 0) { grain = 'day'; }
        var fn;
        switch (grain) {
            case 'year':
                fn = isSameYear;
                break;
            case 'month':
                fn = isSameMonth;
                break;
            case 'day':
                fn = isSameDay;
                break;
            case 'hour':
                fn = isSameHour;
                break;
            case 'minute':
                fn = isSameMinute;
                break;
            case 'second':
                fn = isSameSecond;
                break;
            default:
                fn = isSameDay;
                break;
        }
        return fn(this.nativeDate, this.toNativeDate(date));
    };
    CandyDate.prototype.isSameYear = function (date) {
        return this.isSame(date, 'year');
    };
    CandyDate.prototype.isSameMonth = function (date) {
        return this.isSame(date, 'month');
    };
    CandyDate.prototype.isSameDay = function (date) {
        return this.isSame(date, 'day');
    };
    CandyDate.prototype.isSameHour = function (date) {
        return this.isSame(date, 'hour');
    };
    CandyDate.prototype.isSameMinute = function (date) {
        return this.isSame(date, 'minute');
    };
    CandyDate.prototype.isSameSecond = function (date) {
        return this.isSame(date, 'second');
    };
    CandyDate.prototype.compare = function (date, grain, isBefore) {
        if (grain === void 0) { grain = 'day'; }
        if (isBefore === void 0) { isBefore = true; }
        if (date === null) {
            return false;
        }
        var fn;
        switch (grain) {
            case 'year':
                fn = differenceInCalendarYears;
                break;
            case 'month':
                fn = differenceInCalendarMonths;
                break;
            case 'day':
                fn = differenceInCalendarDays;
                break;
            case 'hour':
                fn = differenceInHours;
                break;
            case 'minute':
                fn = differenceInMinutes;
                break;
            case 'second':
                fn = differenceInSeconds;
                break;
            default:
                fn = differenceInCalendarDays;
                break;
        }
        return isBefore ? fn(this.nativeDate, this.toNativeDate(date)) < 0 : fn(this.nativeDate, this.toNativeDate(date)) > 0;
    };
    CandyDate.prototype.isBeforeYear = function (date) {
        return this.compare(date, 'year');
    };
    CandyDate.prototype.isBeforeMonth = function (date) {
        return this.compare(date, 'month');
    };
    CandyDate.prototype.isBeforeDay = function (date) {
        return this.compare(date, 'day');
    };
    CandyDate.prototype.isBeforeHour = function (date) {
        return this.compare(date, 'hour');
    };
    CandyDate.prototype.isBeforeMinute = function (date) {
        return this.compare(date, 'minute');
    };
    CandyDate.prototype.isBeforeSecond = function (date) {
        return this.compare(date, 'second');
    };
    // TODO: isBefore
    CandyDate.prototype.isAfterYear = function (date) {
        return this.compare(date, 'year', false);
    };
    CandyDate.prototype.isAfterMonth = function (date) {
        return this.compare(date, 'month', false);
    };
    CandyDate.prototype.isAfterDay = function (date) {
        return this.compare(date, 'day', false);
    };
    CandyDate.prototype.isAfterHour = function (date) {
        return this.compare(date, 'hour', false);
    };
    CandyDate.prototype.isAfterMinute = function (date) {
        return this.compare(date, 'minute', false);
    };
    CandyDate.prototype.isAfterSecond = function (date) {
        return this.compare(date, 'second', false);
    };
    // Equal to today accurate to "day"
    CandyDate.prototype.isToday = function () {
        return isToday(this.nativeDate);
    };
    CandyDate.prototype.isValid = function () {
        return isValid(this.nativeDate);
    };
    // tslint:disable-next-line: no-any
    CandyDate.prototype.toNativeDate = function (date) {
        return date instanceof CandyDate ? date.nativeDate : date;
    };
    return CandyDate;
}());
export { CandyDate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRpbWUvY2FuZHktZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUNMLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIseUJBQXlCLEVBQ3pCLGlCQUFpQixFQUNqQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osVUFBVSxFQUNWLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLFlBQVksRUFDWixXQUFXLEVBQ1osTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLENBQUM7QUFDdEMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQU1qQyxNQUFNLFVBQVUsY0FBYyxDQUFDLFVBQXVCO0lBQ3BELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUN2QixJQUFBLDBCQUF5QixFQUF4QixhQUFLLEVBQUUsV0FBaUIsQ0FBQztRQUNoQyxPQUFPLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9FO0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQUNEOzs7OztHQUtHO0FBQ0g7SUFFRSxnREFBZ0Q7SUFFaEQsbUJBQVksSUFBNkI7UUFDdkMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLElBQUksWUFBWSxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO2lCQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDL0QsSUFBSSxDQUFDLHFFQUFxRSxDQUFDLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO2FBQ3JGO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCx3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLElBQUk7SUFFSix5Q0FBeUM7SUFDekMsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixJQUFJO0lBRUosaUNBQWEsR0FBYixVQUFjLE9BQThDO1FBQzFELE9BQU8sSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLHFCQUFxQjtJQUNyQix3RUFBd0U7SUFFeEUsMkJBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsbUNBQWUsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLDBCQUEwQjtJQUMxQix3RUFBd0U7SUFFeEUseUJBQUssR0FBTDtRQUNFLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBTyxJQUFZLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDakQsT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELDJCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2xCLE9BQU8sSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFTLE1BQWM7UUFDckIsT0FBTyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCw0QkFBNEI7SUFDNUIsOExBQThMO0lBQzlMLDRCQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ3BCLE9BQU8sSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFVLE1BQWM7UUFDdEIsT0FBTyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLE9BQWtDO1FBQ3BELE9BQU8sSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDJCQUFPLEdBQVAsVUFBUSxNQUFjO1FBQ3BCLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDJCQUFPLEdBQVAsVUFBUSxNQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBTyxJQUFtQixFQUFFLEtBQW9DO1FBQXBDLHNCQUFBLEVBQUEsYUFBb0M7UUFDOUQsSUFBSSxFQUFFLENBQUM7UUFDUCxRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssTUFBTTtnQkFDVCxFQUFFLEdBQUcsVUFBVSxDQUFDO2dCQUNoQixNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLEVBQUUsR0FBRyxXQUFXLENBQUM7Z0JBQ2pCLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsRUFBRSxHQUFHLFNBQVMsQ0FBQztnQkFDZixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULEVBQUUsR0FBRyxVQUFVLENBQUM7Z0JBQ2hCLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsRUFBRSxHQUFHLFlBQVksQ0FBQztnQkFDbEIsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxFQUFFLEdBQUcsWUFBWSxDQUFDO2dCQUNsQixNQUFNO1lBQ1I7Z0JBQ0UsRUFBRSxHQUFHLFNBQVMsQ0FBQztnQkFDZixNQUFNO1NBQ1Q7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsOEJBQVUsR0FBVixVQUFXLElBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxJQUFtQjtRQUM3QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw2QkFBUyxHQUFULFVBQVUsSUFBbUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsOEJBQVUsR0FBVixVQUFXLElBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGdDQUFZLEdBQVosVUFBYSxJQUFtQjtRQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsSUFBbUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMkJBQU8sR0FBUCxVQUFRLElBQW1CLEVBQUUsS0FBb0MsRUFBRSxRQUF3QjtRQUE5RCxzQkFBQSxFQUFBLGFBQW9DO1FBQUUseUJBQUEsRUFBQSxlQUF3QjtRQUN6RixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksRUFBRSxDQUFDO1FBQ1AsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLE1BQU07Z0JBQ1QsRUFBRSxHQUFHLHlCQUF5QixDQUFDO2dCQUMvQixNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLEVBQUUsR0FBRywwQkFBMEIsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixFQUFFLEdBQUcsd0JBQXdCLENBQUM7Z0JBQzlCLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsRUFBRSxHQUFHLGlCQUFpQixDQUFDO2dCQUN2QixNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQztnQkFDekIsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxFQUFFLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ3pCLE1BQU07WUFDUjtnQkFDRSxFQUFFLEdBQUcsd0JBQXdCLENBQUM7Z0JBQzlCLE1BQU07U0FDVDtRQUNELE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hILENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsSUFBbUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFjLElBQW1CO1FBQy9CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxJQUFtQjtRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsSUFBbUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsa0NBQWMsR0FBZCxVQUFlLElBQW1CO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGtDQUFjLEdBQWQsVUFBZSxJQUFtQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsK0JBQVcsR0FBWCxVQUFZLElBQW1CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsSUFBbUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxJQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLElBQW1CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxpQ0FBYSxHQUFiLFVBQWMsSUFBbUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGlDQUFhLEdBQWIsVUFBYyxJQUFtQjtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsbUNBQW1DO0lBQ25DLDJCQUFPLEdBQVA7UUFDRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDJCQUFPLEdBQVA7UUFDRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELG1DQUFtQztJQUMzQixnQ0FBWSxHQUFwQixVQUFxQixJQUFTO1FBQzVCLE9BQU8sSUFBSSxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFyUUQsSUFxUUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLFxyXG4gIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzLFxyXG4gIGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMsXHJcbiAgZGlmZmVyZW5jZUluSG91cnMsXHJcbiAgZGlmZmVyZW5jZUluTWludXRlcyxcclxuICBkaWZmZXJlbmNlSW5TZWNvbmRzLFxyXG4gIGlzU2FtZURheSxcclxuICBpc1NhbWVIb3VyLFxyXG4gIGlzU2FtZU1pbnV0ZSxcclxuICBpc1NhbWVNb250aCxcclxuICBpc1NhbWVTZWNvbmQsXHJcbiAgaXNTYW1lWWVhcixcclxuICBpc1RvZGF5LFxyXG4gIGlzVmFsaWQsXHJcbiAgc2V0WWVhcixcclxuICBzdGFydE9mTW9udGgsXHJcbiAgc3RhcnRPZldlZWtcclxufSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCBhZGRNb250aHMgZnJvbSAnZGF0ZS1mbnMvYWRkX21vbnRocyc7XHJcbmltcG9ydCBhZGRZZWFycyBmcm9tICdkYXRlLWZucy9hZGRfeWVhcnMnO1xyXG5pbXBvcnQgc2V0RGF5IGZyb20gJ2RhdGUtZm5zL3NldF9kYXknO1xyXG5pbXBvcnQgc2V0TW9udGggZnJvbSAnZGF0ZS1mbnMvc2V0X21vbnRoJztcclxuaW1wb3J0IHsgd2FybiB9IGZyb20gJy4uL2xvZ2dlcic7XHJcbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCB0eXBlIENhbmR5RGF0ZUNvbXBhcmVHcmFpbiA9ICd5ZWFyJyB8ICdtb250aCcgfCAnZGF5JyB8ICdob3VyJyB8ICdtaW51dGUnIHwgJ3NlY29uZCc7XHJcbmV4cG9ydCB0eXBlIENhbmR5RGF0ZVR5cGUgPSBDYW5keURhdGUgfCBEYXRlIHwgbnVsbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0UmFuZ2VWYWx1ZShyYW5nZVZhbHVlOiBDYW5keURhdGVbXSk6IENhbmR5RGF0ZVtdIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShyYW5nZVZhbHVlKSkge1xyXG4gICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gcmFuZ2VWYWx1ZTtcclxuICAgIHJldHVybiBzdGFydCAmJiBlbmQgJiYgc3RhcnQuaXNBZnRlclNlY29uZChlbmQpID8gW2VuZCwgc3RhcnRdIDogW3N0YXJ0LCBlbmRdO1xyXG4gIH1cclxuICByZXR1cm4gcmFuZ2VWYWx1ZTtcclxufVxyXG4vKipcclxuICogV3JhcHBpbmcga2luZCBBUElzIGZvciBkYXRlIG9wZXJhdGluZyBhbmQgdW5pZnlcclxuICogTk9URTogZXZlcnkgbmV3IEFQSSByZXR1cm4gbmV3IENhbmR5RGF0ZSBvYmplY3Qgd2l0aG91dCBzaWRlIGVmZmVjdHMgdG8gdGhlIGZvcm1lciBEYXRlIG9iamVjdFxyXG4gKiBOT1RFOiBtb3N0IEFQSXMgYXJlIGJhc2VkIG9uIGxvY2FsIHRpbWUgb3RoZXIgdGhhbiBjdXN0b21pemVkIGxvY2FsZSBpZCAodGhpcyBuZWVkcyB0b2JlIHN1cHBvcnQgaW4gZnV0dXJlKVxyXG4gKiBUT0RPOiBzdXBwb3J0IGZvcm1hdCgpIGFnYWluc3QgdG8gYW5ndWxhcidzIGNvcmUgQVBJXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2FuZHlEYXRlIGltcGxlbWVudHMgSW5kZXhhYmxlT2JqZWN0IHtcclxuICBuYXRpdmVEYXRlOiBEYXRlO1xyXG4gIC8vIGxvY2FsZTogc3RyaW5nOyAvLyBDdXN0b20gc3BlY2lmaWVkIGxvY2FsZSBJRFxyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRlPzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgaWYgKGRhdGUpIHtcclxuICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5uYXRpdmVEYXRlID0gZGF0ZTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGRhdGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgd2FybignVGhlIHN0cmluZyB0eXBlIGlzIG5vdCByZWNvbW1lbmRlZCBmb3IgZGF0ZS1waWNrZXIsIHVzZSBcIkRhdGVcIiB0eXBlJyk7XHJcbiAgICAgICAgdGhpcy5uYXRpdmVEYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaW5wdXQgZGF0ZSB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQgKFwiRGF0ZVwiIGlzIG5vdyByZWNvbW1lbmRlZCknKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uYXRpdmVEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGdldExvY2FsZSgpOiBzdHJpbmcge1xyXG4gIC8vICAgcmV0dXJuIHRoaXMubG9jYWxlO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nKTogQ2FuZHlEYXRlIHtcclxuICAvLyAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xyXG4gIC8vICAgcmV0dXJuIHRoaXM7XHJcbiAgLy8gfVxyXG5cclxuICBjYWxlbmRhclN0YXJ0KG9wdGlvbnM/OiB7IHdlZWtTdGFydHNPbjogbnVtYmVyIHwgdW5kZWZpbmVkIH0pOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc3RhcnRPZldlZWsoc3RhcnRPZk1vbnRoKHRoaXMubmF0aXZlRGF0ZSksIG9wdGlvbnMpKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIHwgTmF0aXZlIHNob3J0Y3V0c1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBnZXRZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRNb250aCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldERheSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldERhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldEhvdXJzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldEhvdXJzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaW51dGVzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1pbnV0ZXMoKTtcclxuICB9XHJcblxyXG4gIGdldFNlY29uZHMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0U2Vjb25kcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWlsbGlzZWNvbmRzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCBOZXcgaW1wbGVtZW50aW5nIEFQSXNcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgY2xvbmUoKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgc2V0SG1zKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIsIHNlY29uZDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHRoaXMubmF0aXZlRGF0ZS5zZXRIb3Vycyhob3VyLCBtaW51dGUsIHNlY29uZCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0WWVhcih5ZWFyOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0WWVhcih0aGlzLm5hdGl2ZURhdGUsIHllYXIpKTtcclxuICB9XHJcblxyXG4gIGFkZFllYXJzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGFkZFllYXJzKHRoaXMubmF0aXZlRGF0ZSwgYW1vdW50KSk7XHJcbiAgfVxyXG5cclxuICAvLyBOT1RFOiBtb250aCBzdGFydHMgZnJvbSAwXHJcbiAgLy8gTk9URTogRG9uJ3QgdXNlIHRoZSBuYXRpdmUgQVBJIGZvciBtb250aCBtYW5pcHVsYXRpb24gYXMgaXQgbm90IHJlc3RyaWN0IHRoZSBkYXRlIHdoZW4gaXQgb3ZlcmZsb3dzLCBlZy4gKG5ldyBEYXRlKCcyMDE4LTctMzEnKSkuc2V0TW9udGgoMSkgd2lsbCBiZSBkYXRlIG9mIDIwMTgtMy0wMyBpbnN0ZWFkIG9mIDIwMTgtMi0yOFxyXG4gIHNldE1vbnRoKG1vbnRoOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0TW9udGgodGhpcy5uYXRpdmVEYXRlLCBtb250aCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkTW9udGhzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGFkZE1vbnRocyh0aGlzLm5hdGl2ZURhdGUsIGFtb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF5KGRheTogbnVtYmVyLCBvcHRpb25zPzogeyB3ZWVrU3RhcnRzT246IG51bWJlciB9KTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHNldERheSh0aGlzLm5hdGl2ZURhdGUsIGRheSwgb3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZShhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcclxuICAgIGRhdGUuc2V0RGF0ZShhbW91bnQpO1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBhZGREYXlzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgKyBhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lKGRhdGU6IENhbmR5RGF0ZVR5cGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAnZGF5Jyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGZuO1xyXG4gICAgc3dpdGNoIChncmFpbikge1xyXG4gICAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgICBmbiA9IGlzU2FtZVllYXI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICBmbiA9IGlzU2FtZU1vbnRoO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgIGZuID0gaXNTYW1lRGF5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdob3VyJzpcclxuICAgICAgICBmbiA9IGlzU2FtZUhvdXI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21pbnV0ZSc6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVNaW51dGU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVTZWNvbmQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVEYXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm4odGhpcy5uYXRpdmVEYXRlLCB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKSk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVZZWFyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAneWVhcicpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdtb250aCcpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnZGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVIb3VyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnaG91cicpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnbWludXRlJyk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdzZWNvbmQnKTtcclxuICB9XHJcblxyXG4gIGNvbXBhcmUoZGF0ZTogQ2FuZHlEYXRlVHlwZSwgZ3JhaW46IENhbmR5RGF0ZUNvbXBhcmVHcmFpbiA9ICdkYXknLCBpc0JlZm9yZTogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuIHtcclxuICAgIGlmIChkYXRlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBmbjtcclxuICAgIHN3aXRjaCAoZ3JhaW4pIHtcclxuICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaG91cic6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5Ib3VycztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbWludXRlJzpcclxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbk1pbnV0ZXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5TZWNvbmRzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzQmVmb3JlID8gZm4odGhpcy5uYXRpdmVEYXRlLCB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKSkgPCAwIDogZm4odGhpcy5uYXRpdmVEYXRlLCB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKSkgPiAwO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmVZZWFyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3llYXInKTtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbW9udGgnKTtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2RheScpO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmVIb3VyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2hvdXInKTtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21pbnV0ZScpO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmVTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnc2Vjb25kJyk7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBpc0JlZm9yZVxyXG4gIGlzQWZ0ZXJZZWFyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3llYXInLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpc0FmdGVyTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbW9udGgnLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpc0FmdGVyRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2RheScsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlzQWZ0ZXJIb3VyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2hvdXInLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpc0FmdGVyTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21pbnV0ZScsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlzQWZ0ZXJTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnc2Vjb25kJywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gRXF1YWwgdG8gdG9kYXkgYWNjdXJhdGUgdG8gXCJkYXlcIlxyXG4gIGlzVG9kYXkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNUb2RheSh0aGlzLm5hdGl2ZURhdGUpO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc1ZhbGlkKHRoaXMubmF0aXZlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gIHByaXZhdGUgdG9OYXRpdmVEYXRlKGRhdGU6IGFueSk6IERhdGUge1xyXG4gICAgcmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlLm5hdGl2ZURhdGUgOiBkYXRlO1xyXG4gIH1cclxufVxyXG4iXX0=