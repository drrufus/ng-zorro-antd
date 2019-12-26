/**
 * @fileoverview added by tsickle
 * Generated from: time/candy-date.ts
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
import { differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarYears, differenceInHours, differenceInMinutes, differenceInSeconds, isSameDay, isSameHour, isSameMinute, isSameMonth, isSameSecond, isSameYear, isToday, isValid, setYear, startOfMonth, startOfWeek } from 'date-fns';
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import setDay from 'date-fns/set_day';
import setMonth from 'date-fns/set_month';
import { warn } from '../logger';
/**
 * @param {?} rangeValue
 * @return {?}
 */
export function sortRangeValue(rangeValue) {
    if (Array.isArray(rangeValue)) {
        var _a = tslib_1.__read(rangeValue, 2), start = _a[0], end = _a[1];
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
var /**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
CandyDate = /** @class */ (function () {
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
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    /**
     * @param {?=} options
     * @return {?}
     */
    CandyDate.prototype.calendarStart = 
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new CandyDate(startOfWeek(startOfMonth(this.nativeDate), options));
    };
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.getYear = 
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getFullYear();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMonth = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMonth();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDay = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDay();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getTime = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getTime();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDate = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDate();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getHours = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getHours();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMinutes = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMinutes();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getSeconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getSeconds();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMilliseconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMilliseconds();
    };
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.clone = 
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        return new CandyDate(new Date(this.nativeDate));
    };
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    CandyDate.prototype.setHms = /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    function (hour, minute, second) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setHours(hour, minute, second);
        return new CandyDate(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CandyDate.prototype.setYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        return new CandyDate(setYear(this.nativeDate, year));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addYears = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    };
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    CandyDate.prototype.setMonth = 
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        return new CandyDate(setMonth(this.nativeDate, month));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addMonths = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    };
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    CandyDate.prototype.setDay = /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    function (day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.setDate = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addDays = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return this.setDate(this.getDate() + amount);
    };
    /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    CandyDate.prototype.isSame = /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    function (date, grain) {
        if (grain === void 0) { grain = 'day'; }
        /** @type {?} */
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
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'year');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'month');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'day');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'hour');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'minute');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'second');
    };
    /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    CandyDate.prototype.compare = /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    function (date, grain, isBefore) {
        if (grain === void 0) { grain = 'day'; }
        if (isBefore === void 0) { isBefore = true; }
        if (date === null) {
            return false;
        }
        /** @type {?} */
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
        return isBefore
            ? fn(this.nativeDate, this.toNativeDate(date)) < 0
            : fn(this.nativeDate, this.toNativeDate(date)) > 0;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'year');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'month');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'day');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'hour');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'minute');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'second');
    };
    // TODO: isBefore
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterYear = 
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'year', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'month', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'day', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'hour', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'minute', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'second', false);
    };
    // Equal to today accurate to "day"
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    CandyDate.prototype.isToday = 
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    function () {
        return isToday(this.nativeDate);
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return isValid(this.nativeDate);
    };
    // tslint:disable-next-line: no-any
    // tslint:disable-next-line: no-any
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.toNativeDate = 
    // tslint:disable-next-line: no-any
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date instanceof CandyDate ? date.nativeDate : date;
    };
    return CandyDate;
}());
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export { CandyDate };
if (false) {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRpbWUvY2FuZHktZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIseUJBQXlCLEVBQ3pCLGlCQUFpQixFQUNqQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osVUFBVSxFQUNWLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLFlBQVksRUFDWixXQUFXLEVBQ1osTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLENBQUM7QUFDdEMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7QUFNakMsTUFBTSxVQUFVLGNBQWMsQ0FBQyxVQUF1QjtJQUNwRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDdkIsSUFBQSxrQ0FBeUIsRUFBeEIsYUFBSyxFQUFFLFdBQWlCO1FBQy9CLE9BQU8sS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDL0U7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDOzs7Ozs7O0FBT0Q7Ozs7Ozs7SUFFRSxnREFBZ0Q7SUFFaEQsbUJBQVksSUFBNkI7UUFDdkMsSUFBSSxJ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ZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMsXHJcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMsXHJcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyxcclxuICBkaWZmZXJlbmNlSW5Ib3VycyxcclxuICBkaWZmZXJlbmNlSW5NaW51dGVzLFxyXG4gIGRpZmZlcmVuY2VJblNlY29uZHMsXHJcbiAgaXNTYW1lRGF5LFxyXG4gIGlzU2FtZUhvdXIsXHJcbiAgaXNTYW1lTWludXRlLFxyXG4gIGlzU2FtZU1vbnRoLFxyXG4gIGlzU2FtZVNlY29uZCxcclxuICBpc1NhbWVZZWFyLFxyXG4gIGlzVG9kYXksXHJcbiAgaXNWYWxpZCxcclxuICBzZXRZZWFyLFxyXG4gIHN0YXJ0T2ZNb250aCxcclxuICBzdGFydE9mV2Vla1xyXG59IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IGFkZE1vbnRocyBmcm9tICdkYXRlLWZucy9hZGRfbW9udGhzJztcclxuaW1wb3J0IGFkZFllYXJzIGZyb20gJ2RhdGUtZm5zL2FkZF95ZWFycyc7XHJcbmltcG9ydCBzZXREYXkgZnJvbSAnZGF0ZS1mbnMvc2V0X2RheSc7XHJcbmltcG9ydCBzZXRNb250aCBmcm9tICdkYXRlLWZucy9zZXRfbW9udGgnO1xyXG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnLi4vbG9nZ2VyJztcclxuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2FuZHlEYXRlQ29tcGFyZUdyYWluID0gJ3llYXInIHwgJ21vbnRoJyB8ICdkYXknIHwgJ2hvdXInIHwgJ21pbnV0ZScgfCAnc2Vjb25kJztcclxuZXhwb3J0IHR5cGUgQ2FuZHlEYXRlVHlwZSA9IENhbmR5RGF0ZSB8IERhdGUgfCBudWxsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRSYW5nZVZhbHVlKHJhbmdlVmFsdWU6IENhbmR5RGF0ZVtdKTogQ2FuZHlEYXRlW10ge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHJhbmdlVmFsdWUpKSB7XHJcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSByYW5nZVZhbHVlO1xyXG4gICAgcmV0dXJuIHN0YXJ0ICYmIGVuZCAmJiBzdGFydC5pc0FmdGVyU2Vjb25kKGVuZCkgPyBbZW5kLCBzdGFydF0gOiBbc3RhcnQsIGVuZF07XHJcbiAgfVxyXG4gIHJldHVybiByYW5nZVZhbHVlO1xyXG59XHJcbi8qKlxyXG4gKiBXcmFwcGluZyBraW5kIEFQSXMgZm9yIGRhdGUgb3BlcmF0aW5nIGFuZCB1bmlmeVxyXG4gKiBOT1RFOiBldmVyeSBuZXcgQVBJIHJldHVybiBuZXcgQ2FuZHlEYXRlIG9iamVjdCB3aXRob3V0IHNpZGUgZWZmZWN0cyB0byB0aGUgZm9ybWVyIERhdGUgb2JqZWN0XHJcbiAqIE5PVEU6IG1vc3QgQVBJcyBhcmUgYmFzZWQgb24gbG9jYWwgdGltZSBvdGhlciB0aGFuIGN1c3RvbWl6ZWQgbG9jYWxlIGlkICh0aGlzIG5lZWRzIHRvYmUgc3VwcG9ydCBpbiBmdXR1cmUpXHJcbiAqIFRPRE86IHN1cHBvcnQgZm9ybWF0KCkgYWdhaW5zdCB0byBhbmd1bGFyJ3MgY29yZSBBUElcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDYW5keURhdGUgaW1wbGVtZW50cyBJbmRleGFibGVPYmplY3Qge1xyXG4gIG5hdGl2ZURhdGU6IERhdGU7XHJcbiAgLy8gbG9jYWxlOiBzdHJpbmc7IC8vIEN1c3RvbSBzcGVjaWZpZWQgbG9jYWxlIElEXHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGU/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBkYXRlO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICB3YXJuKCdUaGUgc3RyaW5nIHR5cGUgaXMgbm90IHJlY29tbWVuZGVkIGZvciBkYXRlLXBpY2tlciwgdXNlIFwiRGF0ZVwiIHR5cGUnKTtcclxuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbnB1dCBkYXRlIHR5cGUgaXMgbm90IHN1cHBvcnRlZCAoXCJEYXRlXCIgaXMgbm93IHJlY29tbWVuZGVkKScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5hdGl2ZURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZ2V0TG9jYWxlKCk6IHN0cmluZyB7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5sb2NhbGU7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBzZXRMb2NhbGUobG9jYWxlOiBzdHJpbmcpOiBDYW5keURhdGUge1xyXG4gIC8vICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XHJcbiAgLy8gICByZXR1cm4gdGhpcztcclxuICAvLyB9XHJcblxyXG4gIGNhbGVuZGFyU3RhcnQob3B0aW9ucz86IHsgd2Vla1N0YXJ0c09uOiBudW1iZXIgfCB1bmRlZmluZWQgfSk6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShzdGFydE9mV2VlayhzdGFydE9mTW9udGgodGhpcy5uYXRpdmVEYXRlKSwgb3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCBOYXRpdmUgc2hvcnRjdXRzXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIGdldFllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1vbnRoKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RGF5KCk7XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldFRpbWUoKTtcclxuICB9XHJcblxyXG4gIGdldERhdGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SG91cnMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0SG91cnMoKTtcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWludXRlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2Vjb25kcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaWxsaXNlY29uZHMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IE5ldyBpbXBsZW1lbnRpbmcgQVBJc1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBjbG9uZSgpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUobmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKSk7XHJcbiAgfVxyXG5cclxuICBzZXRIbXMoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlciwgc2Vjb25kOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSk7XHJcbiAgICBkYXRlLnNldEhvdXJzKGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgc2V0WWVhcih5ZWFyOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0WWVhcih0aGlzLm5hdGl2ZURhdGUsIHllYXIpKTtcclxuICB9XHJcblxyXG4gIGFkZFllYXJzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGFkZFllYXJzKHRoaXMubmF0aXZlRGF0ZSwgYW1vdW50KSk7XHJcbiAgfVxyXG5cclxuICAvLyBOT1RFOiBtb250aCBzdGFydHMgZnJvbSAwXHJcbiAgLy8gTk9URTogRG9uJ3QgdXNlIHRoZSBuYXRpdmUgQVBJIGZvciBtb250aCBtYW5pcHVsYXRpb24gYXMgaXQgbm90IHJlc3RyaWN0IHRoZSBkYXRlIHdoZW4gaXQgb3ZlcmZsb3dzLCBlZy4gKG5ldyBEYXRlKCcyMDE4LTctMzEnKSkuc2V0TW9udGgoMSkgd2lsbCBiZSBkYXRlIG9mIDIwMTgtMy0wMyBpbnN0ZWFkIG9mIDIwMTgtMi0yOFxyXG4gIHNldE1vbnRoKG1vbnRoOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0TW9udGgodGhpcy5uYXRpdmVEYXRlLCBtb250aCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkTW9udGhzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGFkZE1vbnRocyh0aGlzLm5hdGl2ZURhdGUsIGFtb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF5KGRheTogbnVtYmVyLCBvcHRpb25zPzogeyB3ZWVrU3RhcnRzT246IG51bWJlciB9KTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHNldERheSh0aGlzLm5hdGl2ZURhdGUsIGRheSwgb3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZShhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcclxuICAgIGRhdGUuc2V0RGF0ZShhbW91bnQpO1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBhZGREYXlzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgKyBhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lKGRhdGU6IENhbmR5RGF0ZVR5cGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAnZGF5Jyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGZuO1xyXG4gICAgc3dpdGNoIChncmFpbikge1xyXG4gICAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgICBmbiA9IGlzU2FtZVllYXI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICBmbiA9IGlzU2FtZU1vbnRoO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgIGZuID0gaXNTYW1lRGF5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdob3VyJzpcclxuICAgICAgICBmbiA9IGlzU2FtZUhvdXI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21pbnV0ZSc6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVNaW51dGU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVTZWNvbmQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVEYXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm4odGhpcy5uYXRpdmVEYXRlLCB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKSk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVZZWFyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAneWVhcicpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdtb250aCcpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnZGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVIb3VyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnaG91cicpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnbWludXRlJyk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdzZWNvbmQnKTtcclxuICB9XHJcblxyXG4gIGNvbXBhcmUoZGF0ZTogQ2FuZHlEYXRlVHlwZSwgZ3JhaW46IENhbmR5RGF0ZUNvbXBhcmVHcmFpbiA9ICdkYXknLCBpc0JlZm9yZTogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuIHtcclxuICAgIGlmIChkYXRlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBmbjtcclxuICAgIHN3aXRjaCAoZ3JhaW4pIHtcclxuICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaG91cic6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5Ib3VycztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbWludXRlJzpcclxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbk1pbnV0ZXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5TZWNvbmRzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzQmVmb3JlXHJcbiAgICAgID8gZm4odGhpcy5uYXRpdmVEYXRlLCB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKSkgPCAwXHJcbiAgICAgIDogZm4odGhpcy5uYXRpdmVEYXRlLCB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKSkgPiAwO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmVZZWFyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3llYXInKTtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbW9udGgnKTtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2RheScpO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmVIb3VyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2hvdXInKTtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21pbnV0ZScpO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmVTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnc2Vjb25kJyk7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBpc0JlZm9yZVxyXG4gIGlzQWZ0ZXJZZWFyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3llYXInLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpc0FmdGVyTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbW9udGgnLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpc0FmdGVyRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2RheScsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlzQWZ0ZXJIb3VyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2hvdXInLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpc0FmdGVyTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21pbnV0ZScsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlzQWZ0ZXJTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnc2Vjb25kJywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gRXF1YWwgdG8gdG9kYXkgYWNjdXJhdGUgdG8gXCJkYXlcIlxyXG4gIGlzVG9kYXkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNUb2RheSh0aGlzLm5hdGl2ZURhdGUpO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc1ZhbGlkKHRoaXMubmF0aXZlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gIHByaXZhdGUgdG9OYXRpdmVEYXRlKGRhdGU6IGFueSk6IERhdGUge1xyXG4gICAgcmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlLm5hdGl2ZURhdGUgOiBkYXRlO1xyXG4gIH1cclxufVxyXG4iXX0=