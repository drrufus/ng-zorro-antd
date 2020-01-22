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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRpbWUvY2FuZHktZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQix5QkFBeUIsRUFDekIsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixVQUFVLEVBQ1YsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsWUFBWSxFQUNaLFdBQVcsRUFDWixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLFNBQVMsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQztBQUN0QyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7OztBQU1qQyxNQUFNLFVBQVUsY0FBYyxDQUFDLFVBQXVCO0lBQ3BELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUN2QixJQUFBLGtDQUF5QixFQUF4QixhQUFLLEVBQUUsV0FBaUI7UUFDL0IsT0FBTyxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMvRTtJQUNELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7Ozs7Ozs7QUFPRDs7Ozs7OztJQUVFLGdEQUFnRDtJQUVoRCxtQkFBWSxJQUE2QjtRQUN2QyxJQUFJLElB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XHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyxcclxuICBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyxcclxuICBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzLFxyXG4gIGRpZmZlcmVuY2VJbkhvdXJzLFxyXG4gIGRpZmZlcmVuY2VJbk1pbnV0ZXMsXHJcbiAgZGlmZmVyZW5jZUluU2Vjb25kcyxcclxuICBpc1NhbWVEYXksXHJcbiAgaXNTYW1lSG91cixcclxuICBpc1NhbWVNaW51dGUsXHJcbiAgaXNTYW1lTW9udGgsXHJcbiAgaXNTYW1lU2Vjb25kLFxyXG4gIGlzU2FtZVllYXIsXHJcbiAgaXNUb2RheSxcclxuICBpc1ZhbGlkLFxyXG4gIHNldFllYXIsXHJcbiAgc3RhcnRPZk1vbnRoLFxyXG4gIHN0YXJ0T2ZXZWVrXHJcbn0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgYWRkTW9udGhzIGZyb20gJ2RhdGUtZm5zL2FkZF9tb250aHMnO1xyXG5pbXBvcnQgYWRkWWVhcnMgZnJvbSAnZGF0ZS1mbnMvYWRkX3llYXJzJztcclxuaW1wb3J0IHNldERheSBmcm9tICdkYXRlLWZucy9zZXRfZGF5JztcclxuaW1wb3J0IHNldE1vbnRoIGZyb20gJ2RhdGUtZm5zL3NldF9tb250aCc7XHJcbmltcG9ydCB7IHdhcm4gfSBmcm9tICcuLi9sb2dnZXInO1xyXG5pbXBvcnQgeyBJbmRleGFibGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5leHBvcnQgdHlwZSBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAneWVhcicgfCAnbW9udGgnIHwgJ2RheScgfCAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnO1xyXG5leHBvcnQgdHlwZSBDYW5keURhdGVUeXBlID0gQ2FuZHlEYXRlIHwgRGF0ZSB8IG51bGw7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydFJhbmdlVmFsdWUocmFuZ2VWYWx1ZTogQ2FuZHlEYXRlW10pOiBDYW5keURhdGVbXSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocmFuZ2VWYWx1ZSkpIHtcclxuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlVmFsdWU7XHJcbiAgICByZXR1cm4gc3RhcnQgJiYgZW5kICYmIHN0YXJ0LmlzQWZ0ZXJTZWNvbmQoZW5kKSA/IFtlbmQsIHN0YXJ0XSA6IFtzdGFydCwgZW5kXTtcclxuICB9XHJcbiAgcmV0dXJuIHJhbmdlVmFsdWU7XHJcbn1cclxuLyoqXHJcbiAqIFdyYXBwaW5nIGtpbmQgQVBJcyBmb3IgZGF0ZSBvcGVyYXRpbmcgYW5kIHVuaWZ5XHJcbiAqIE5PVEU6IGV2ZXJ5IG5ldyBBUEkgcmV0dXJuIG5ldyBDYW5keURhdGUgb2JqZWN0IHdpdGhvdXQgc2lkZSBlZmZlY3RzIHRvIHRoZSBmb3JtZXIgRGF0ZSBvYmplY3RcclxuICogTk9URTogbW9zdCBBUElzIGFyZSBiYXNlZCBvbiBsb2NhbCB0aW1lIG90aGVyIHRoYW4gY3VzdG9taXplZCBsb2NhbGUgaWQgKHRoaXMgbmVlZHMgdG9iZSBzdXBwb3J0IGluIGZ1dHVyZSlcclxuICogVE9ETzogc3VwcG9ydCBmb3JtYXQoKSBhZ2FpbnN0IHRvIGFuZ3VsYXIncyBjb3JlIEFQSVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENhbmR5RGF0ZSBpbXBsZW1lbnRzIEluZGV4YWJsZU9iamVjdCB7XHJcbiAgbmF0aXZlRGF0ZTogRGF0ZTtcclxuICAvLyBsb2NhbGU6IHN0cmluZzsgLy8gQ3VzdG9tIHNwZWNpZmllZCBsb2NhbGUgSURcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0ZT86IERhdGUgfCBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgIGlmIChkYXRlKSB7XHJcbiAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IGRhdGU7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHdhcm4oJ1RoZSBzdHJpbmcgdHlwZSBpcyBub3QgcmVjb21tZW5kZWQgZm9yIGRhdGUtcGlja2VyLCB1c2UgXCJEYXRlXCIgdHlwZScpO1xyXG4gICAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGlucHV0IGRhdGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkIChcIkRhdGVcIiBpcyBub3cgcmVjb21tZW5kZWQpJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBnZXRMb2NhbGUoKTogc3RyaW5nIHtcclxuICAvLyAgIHJldHVybiB0aGlzLmxvY2FsZTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHNldExvY2FsZShsb2NhbGU6IHN0cmluZyk6IENhbmR5RGF0ZSB7XHJcbiAgLy8gICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcclxuICAvLyAgIHJldHVybiB0aGlzO1xyXG4gIC8vIH1cclxuXHJcbiAgY2FsZW5kYXJTdGFydChvcHRpb25zPzogeyB3ZWVrU3RhcnRzT246IG51bWJlciB8IHVuZGVmaW5lZCB9KTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHN0YXJ0T2ZXZWVrKHN0YXJ0T2ZNb250aCh0aGlzLm5hdGl2ZURhdGUpLCBvcHRpb25zKSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IE5hdGl2ZSBzaG9ydGN1dHNcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgZ2V0WWVhcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TW9udGgoKTtcclxuICB9XHJcblxyXG4gIGdldERheSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXREYXkoKTtcclxuICB9XHJcblxyXG4gIGdldFRpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXREYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VycygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRIb3VycygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWludXRlcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWNvbmRzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldFNlY29uZHMoKTtcclxuICB9XHJcblxyXG4gIGdldE1pbGxpc2Vjb25kcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIHwgTmV3IGltcGxlbWVudGluZyBBUElzXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIGNsb25lKCk6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpKTtcclxuICB9XHJcblxyXG4gIHNldEhtcyhob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyLCBzZWNvbmQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcclxuICAgIGRhdGUuc2V0SG91cnMoaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBzZXRZZWFyKHllYXI6IG51bWJlcik6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShzZXRZZWFyKHRoaXMubmF0aXZlRGF0ZSwgeWVhcikpO1xyXG4gIH1cclxuXHJcbiAgYWRkWWVhcnMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoYWRkWWVhcnModGhpcy5uYXRpdmVEYXRlLCBhbW91bnQpKTtcclxuICB9XHJcblxyXG4gIC8vIE5PVEU6IG1vbnRoIHN0YXJ0cyBmcm9tIDBcclxuICAvLyBOT1RFOiBEb24ndCB1c2UgdGhlIG5hdGl2ZSBBUEkgZm9yIG1vbnRoIG1hbmlwdWxhdGlvbiBhcyBpdCBub3QgcmVzdHJpY3QgdGhlIGRhdGUgd2hlbiBpdCBvdmVyZmxvd3MsIGVnLiAobmV3IERhdGUoJzIwMTgtNy0zMScpKS5zZXRNb250aCgxKSB3aWxsIGJlIGRhdGUgb2YgMjAxOC0zLTAzIGluc3RlYWQgb2YgMjAxOC0yLTI4XHJcbiAgc2V0TW9udGgobW9udGg6IG51bWJlcik6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShzZXRNb250aCh0aGlzLm5hdGl2ZURhdGUsIG1vbnRoKSk7XHJcbiAgfVxyXG5cclxuICBhZGRNb250aHMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoYWRkTW9udGhzKHRoaXMubmF0aXZlRGF0ZSwgYW1vdW50KSk7XHJcbiAgfVxyXG5cclxuICBzZXREYXkoZGF5OiBudW1iZXIsIG9wdGlvbnM/OiB7IHdlZWtTdGFydHNPbjogbnVtYmVyIH0pOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0RGF5KHRoaXMubmF0aXZlRGF0ZSwgZGF5LCBvcHRpb25zKSk7XHJcbiAgfVxyXG5cclxuICBzZXREYXRlKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpO1xyXG4gICAgZGF0ZS5zZXREYXRlKGFtb3VudCk7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIGFkZERheXMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0RGF0ZSh0aGlzLmdldERhdGUoKSArIGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWUoZGF0ZTogQ2FuZHlEYXRlVHlwZSwgZ3JhaW46IENhbmR5RGF0ZUNvbXBhcmVHcmFpbiA9ICdkYXknKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgZm47XHJcbiAgICBzd2l0Y2ggKGdyYWluKSB7XHJcbiAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgIGZuID0gaXNTYW1lWWVhcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgIGZuID0gaXNTYW1lTW9udGg7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVEYXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2hvdXInOlxyXG4gICAgICAgIGZuID0gaXNTYW1lSG91cjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbWludXRlJzpcclxuICAgICAgICBmbiA9IGlzU2FtZU1pbnV0ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc2Vjb25kJzpcclxuICAgICAgICBmbiA9IGlzU2FtZVNlY29uZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBmbiA9IGlzU2FtZURheTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBmbih0aGlzLm5hdGl2ZURhdGUsIHRoaXMudG9OYXRpdmVEYXRlKGRhdGUpKTtcclxuICB9XHJcblxyXG4gIGlzU2FtZVllYXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICd5ZWFyJyk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVNb250aChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoZGF0ZSwgJ21vbnRoJyk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVEYXkoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdkYXknKTtcclxuICB9XHJcblxyXG4gIGlzU2FtZUhvdXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdob3VyJyk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVNaW51dGUoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdtaW51dGUnKTtcclxuICB9XHJcblxyXG4gIGlzU2FtZVNlY29uZChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoZGF0ZSwgJ3NlY29uZCcpO1xyXG4gIH1cclxuXHJcbiAgY29tcGFyZShkYXRlOiBDYW5keURhdGVUeXBlLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluID0gJ2RheScsIGlzQmVmb3JlOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGRhdGUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGZuO1xyXG4gICAgc3dpdGNoIChncmFpbikge1xyXG4gICAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdob3VyJzpcclxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkhvdXJzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdtaW51dGUnOlxyXG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluTWludXRlcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc2Vjb25kJzpcclxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJblNlY29uZHM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNCZWZvcmVcclxuICAgICAgPyBmbih0aGlzLm5hdGl2ZURhdGUsIHRoaXMudG9OYXRpdmVEYXRlKGRhdGUpKSA8IDBcclxuICAgICAgOiBmbih0aGlzLm5hdGl2ZURhdGUsIHRoaXMudG9OYXRpdmVEYXRlKGRhdGUpKSA+IDA7XHJcbiAgfVxyXG5cclxuICBpc0JlZm9yZVllYXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAneWVhcicpO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmVNb250aChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdtb250aCcpO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmVEYXkoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnZGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpc0JlZm9yZUhvdXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnaG91cicpO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmVNaW51dGUoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbWludXRlJyk7XHJcbiAgfVxyXG5cclxuICBpc0JlZm9yZVNlY29uZChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdzZWNvbmQnKTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IGlzQmVmb3JlXHJcbiAgaXNBZnRlclllYXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAneWVhcicsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlzQWZ0ZXJNb250aChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdtb250aCcsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlzQWZ0ZXJEYXkoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnZGF5JywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgaXNBZnRlckhvdXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnaG91cicsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlzQWZ0ZXJNaW51dGUoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbWludXRlJywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgaXNBZnRlclNlY29uZChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdzZWNvbmQnLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvLyBFcXVhbCB0byB0b2RheSBhY2N1cmF0ZSB0byBcImRheVwiXHJcbiAgaXNUb2RheSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc1RvZGF5KHRoaXMubmF0aXZlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzVmFsaWQodGhpcy5uYXRpdmVEYXRlKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgcHJpdmF0ZSB0b05hdGl2ZURhdGUoZGF0ZTogYW55KTogRGF0ZSB7XHJcbiAgICByZXR1cm4gZGF0ZSBpbnN0YW5jZW9mIENhbmR5RGF0ZSA/IGRhdGUubmF0aXZlRGF0ZSA6IGRhdGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==