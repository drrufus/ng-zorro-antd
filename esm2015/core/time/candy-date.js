/**
 * @fileoverview added by tsickle
 * Generated from: time/candy-date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        const [start, end] = rangeValue;
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
export class CandyDate {
    // locale: string; // Custom specified locale ID
    /**
     * @param {?=} date
     */
    constructor(date) {
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
    /**
     * @param {?=} options
     * @return {?}
     */
    calendarStart(options) {
        return new CandyDate(startOfWeek(startOfMonth(this.nativeDate), options));
    }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    getYear() {
        return this.nativeDate.getFullYear();
    }
    /**
     * @return {?}
     */
    getMonth() {
        return this.nativeDate.getMonth();
    }
    /**
     * @return {?}
     */
    getDay() {
        return this.nativeDate.getDay();
    }
    /**
     * @return {?}
     */
    getTime() {
        return this.nativeDate.getTime();
    }
    /**
     * @return {?}
     */
    getDate() {
        return this.nativeDate.getDate();
    }
    /**
     * @return {?}
     */
    getHours() {
        return this.nativeDate.getHours();
    }
    /**
     * @return {?}
     */
    getMinutes() {
        return this.nativeDate.getMinutes();
    }
    /**
     * @return {?}
     */
    getSeconds() {
        return this.nativeDate.getSeconds();
    }
    /**
     * @return {?}
     */
    getMilliseconds() {
        return this.nativeDate.getMilliseconds();
    }
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    clone() {
        return new CandyDate(new Date(this.nativeDate));
    }
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    setHms(hour, minute, second) {
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setHours(hour, minute, second);
        return new CandyDate(date);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setYear(year) {
        return new CandyDate(setYear(this.nativeDate, year));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addYears(amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    }
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    setMonth(month) {
        return new CandyDate(setMonth(this.nativeDate, month));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addMonths(amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    }
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    setDay(day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    setDate(amount) {
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addDays(amount) {
        return this.setDate(this.getDate() + amount);
    }
    /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    isSame(date, grain = 'day') {
        /** @type {?} */
        let fn;
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
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameYear(date) {
        return this.isSame(date, 'year');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameMonth(date) {
        return this.isSame(date, 'month');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameDay(date) {
        return this.isSame(date, 'day');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameHour(date) {
        return this.isSame(date, 'hour');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameMinute(date) {
        return this.isSame(date, 'minute');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameSecond(date) {
        return this.isSame(date, 'second');
    }
    /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    compare(date, grain = 'day', isBefore = true) {
        if (date === null) {
            return false;
        }
        /** @type {?} */
        let fn;
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
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeYear(date) {
        return this.compare(date, 'year');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeMonth(date) {
        return this.compare(date, 'month');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeDay(date) {
        return this.compare(date, 'day');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeHour(date) {
        return this.compare(date, 'hour');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeMinute(date) {
        return this.compare(date, 'minute');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeSecond(date) {
        return this.compare(date, 'second');
    }
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterYear(date) {
        return this.compare(date, 'year', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterMonth(date) {
        return this.compare(date, 'month', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterDay(date) {
        return this.compare(date, 'day', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterHour(date) {
        return this.compare(date, 'hour', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterMinute(date) {
        return this.compare(date, 'minute', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterSecond(date) {
        return this.compare(date, 'second', false);
    }
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    isToday() {
        return isToday(this.nativeDate);
    }
    /**
     * @return {?}
     */
    isValid() {
        return isValid(this.nativeDate);
    }
    // tslint:disable-next-line: no-any
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    toNativeDate(date) {
        return date instanceof CandyDate ? date.nativeDate : date;
    }
}
if (false) {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRpbWUvY2FuZHktZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQix5QkFBeUIsRUFDekIsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixVQUFVLEVBQ1YsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsWUFBWSxFQUNaLFdBQVcsRUFDWixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLFNBQVMsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQztBQUN0QyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7OztBQU1qQyxNQUFNLFVBQVUsY0FBYyxDQUFDLFVBQXVCO0lBQ3BELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtjQUN2QixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxVQUFVO1FBQy9CLE9BQU8sS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDL0U7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDOzs7Ozs7O0FBT0QsTUFBTSxPQUFPLFNBQVM7Ozs7O0lBSXBCLFlBQVksSUFBNkI7UUFDdkMsSUFBSSxJ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Q2xDLENBQUM7Ozs7Ozs7SUFHTyxZQUFZLENBQUMsSUFBUztRQUM1QixPQUFPLElBQUksWUFBWSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDO0NBQ0Y7OztJQXhRQywrQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLFxyXG4gIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzLFxyXG4gIGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMsXHJcbiAgZGlmZmVyZW5jZUluSG91cnMsXHJcbiAgZGlmZmVyZW5jZUluTWludXRlcyxcclxuICBkaWZmZXJlbmNlSW5TZWNvbmRzLFxyXG4gIGlzU2FtZURheSxcclxuICBpc1NhbWVIb3VyLFxyXG4gIGlzU2FtZU1pbnV0ZSxcclxuICBpc1NhbWVNb250aCxcclxuICBpc1NhbWVTZWNvbmQsXHJcbiAgaXNTYW1lWWVhcixcclxuICBpc1RvZGF5LFxyXG4gIGlzVmFsaWQsXHJcbiAgc2V0WWVhcixcclxuICBzdGFydE9mTW9udGgsXHJcbiAgc3RhcnRPZldlZWtcclxufSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCBhZGRNb250aHMgZnJvbSAnZGF0ZS1mbnMvYWRkX21vbnRocyc7XHJcbmltcG9ydCBhZGRZZWFycyBmcm9tICdkYXRlLWZucy9hZGRfeWVhcnMnO1xyXG5pbXBvcnQgc2V0RGF5IGZyb20gJ2RhdGUtZm5zL3NldF9kYXknO1xyXG5pbXBvcnQgc2V0TW9udGggZnJvbSAnZGF0ZS1mbnMvc2V0X21vbnRoJztcclxuaW1wb3J0IHsgd2FybiB9IGZyb20gJy4uL2xvZ2dlcic7XHJcbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCB0eXBlIENhbmR5RGF0ZUNvbXBhcmVHcmFpbiA9ICd5ZWFyJyB8ICdtb250aCcgfCAnZGF5JyB8ICdob3VyJyB8ICdtaW51dGUnIHwgJ3NlY29uZCc7XHJcbmV4cG9ydCB0eXBlIENhbmR5RGF0ZVR5cGUgPSBDYW5keURhdGUgfCBEYXRlIHwgbnVsbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0UmFuZ2VWYWx1ZShyYW5nZVZhbHVlOiBDYW5keURhdGVbXSk6IENhbmR5RGF0ZVtdIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShyYW5nZVZhbHVlKSkge1xyXG4gICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gcmFuZ2VWYWx1ZTtcclxuICAgIHJldHVybiBzdGFydCAmJiBlbmQgJiYgc3RhcnQuaXNBZnRlclNlY29uZChlbmQpID8gW2VuZCwgc3RhcnRdIDogW3N0YXJ0LCBlbmRdO1xyXG4gIH1cclxuICByZXR1cm4gcmFuZ2VWYWx1ZTtcclxufVxyXG4vKipcclxuICogV3JhcHBpbmcga2luZCBBUElzIGZvciBkYXRlIG9wZXJhdGluZyBhbmQgdW5pZnlcclxuICogTk9URTogZXZlcnkgbmV3IEFQSSByZXR1cm4gbmV3IENhbmR5RGF0ZSBvYmplY3Qgd2l0aG91dCBzaWRlIGVmZmVjdHMgdG8gdGhlIGZvcm1lciBEYXRlIG9iamVjdFxyXG4gKiBOT1RFOiBtb3N0IEFQSXMgYXJlIGJhc2VkIG9uIGxvY2FsIHRpbWUgb3RoZXIgdGhhbiBjdXN0b21pemVkIGxvY2FsZSBpZCAodGhpcyBuZWVkcyB0b2JlIHN1cHBvcnQgaW4gZnV0dXJlKVxyXG4gKiBUT0RPOiBzdXBwb3J0IGZvcm1hdCgpIGFnYWluc3QgdG8gYW5ndWxhcidzIGNvcmUgQVBJXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2FuZHlEYXRlIGltcGxlbWVudHMgSW5kZXhhYmxlT2JqZWN0IHtcclxuICBuYXRpdmVEYXRlOiBEYXRlO1xyXG4gIC8vIGxvY2FsZTogc3RyaW5nOyAvLyBDdXN0b20gc3BlY2lmaWVkIGxvY2FsZSBJRFxyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRlPzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgaWYgKGRhdGUpIHtcclxuICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5uYXRpdmVEYXRlID0gZGF0ZTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGRhdGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgd2FybignVGhlIHN0cmluZyB0eXBlIGlzIG5vdCByZWNvbW1lbmRlZCBmb3IgZGF0ZS1waWNrZXIsIHVzZSBcIkRhdGVcIiB0eXBlJyk7XHJcbiAgICAgICAgdGhpcy5uYXRpdmVEYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaW5wdXQgZGF0ZSB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQgKFwiRGF0ZVwiIGlzIG5vdyByZWNvbW1lbmRlZCknKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uYXRpdmVEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGdldExvY2FsZSgpOiBzdHJpbmcge1xyXG4gIC8vICAgcmV0dXJuIHRoaXMubG9jYWxlO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nKTogQ2FuZHlEYXRlIHtcclxuICAvLyAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xyXG4gIC8vICAgcmV0dXJuIHRoaXM7XHJcbiAgLy8gfVxyXG5cclxuICBjYWxlbmRhclN0YXJ0KG9wdGlvbnM/OiB7IHdlZWtTdGFydHNPbjogbnVtYmVyIHwgdW5kZWZpbmVkIH0pOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc3RhcnRPZldlZWsoc3RhcnRPZk1vbnRoKHRoaXMubmF0aXZlRGF0ZSksIG9wdGlvbnMpKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIHwgTmF0aXZlIHNob3J0Y3V0c1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBnZXRZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRNb250aCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldERheSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldERhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldEhvdXJzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldEhvdXJzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaW51dGVzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1pbnV0ZXMoKTtcclxuICB9XHJcblxyXG4gIGdldFNlY29uZHMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0U2Vjb25kcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWlsbGlzZWNvbmRzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCBOZXcgaW1wbGVtZW50aW5nIEFQSXNcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgY2xvbmUoKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgc2V0SG1zKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIsIHNlY29uZDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpO1xyXG4gICAgZGF0ZS5zZXRIb3Vycyhob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIHNldFllYXIoeWVhcjogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHNldFllYXIodGhpcy5uYXRpdmVEYXRlLCB5ZWFyKSk7XHJcbiAgfVxyXG5cclxuICBhZGRZZWFycyhhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShhZGRZZWFycyh0aGlzLm5hdGl2ZURhdGUsIGFtb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gTk9URTogbW9udGggc3RhcnRzIGZyb20gMFxyXG4gIC8vIE5PVEU6IERvbid0IHVzZSB0aGUgbmF0aXZlIEFQSSBmb3IgbW9udGggbWFuaXB1bGF0aW9uIGFzIGl0IG5vdCByZXN0cmljdCB0aGUgZGF0ZSB3aGVuIGl0IG92ZXJmbG93cywgZWcuIChuZXcgRGF0ZSgnMjAxOC03LTMxJykpLnNldE1vbnRoKDEpIHdpbGwgYmUgZGF0ZSBvZiAyMDE4LTMtMDMgaW5zdGVhZCBvZiAyMDE4LTItMjhcclxuICBzZXRNb250aChtb250aDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHNldE1vbnRoKHRoaXMubmF0aXZlRGF0ZSwgbW9udGgpKTtcclxuICB9XHJcblxyXG4gIGFkZE1vbnRocyhhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShhZGRNb250aHModGhpcy5uYXRpdmVEYXRlLCBhbW91bnQpKTtcclxuICB9XHJcblxyXG4gIHNldERheShkYXk6IG51bWJlciwgb3B0aW9ucz86IHsgd2Vla1N0YXJ0c09uOiBudW1iZXIgfSk6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShzZXREYXkodGhpcy5uYXRpdmVEYXRlLCBkYXksIG9wdGlvbnMpKTtcclxuICB9XHJcblxyXG4gIHNldERhdGUoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSk7XHJcbiAgICBkYXRlLnNldERhdGUoYW1vdW50KTtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgYWRkRGF5cyhhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXREYXRlKHRoaXMuZ2V0RGF0ZSgpICsgYW1vdW50KTtcclxuICB9XHJcblxyXG4gIGlzU2FtZShkYXRlOiBDYW5keURhdGVUeXBlLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluID0gJ2RheScpOiBib29sZWFuIHtcclxuICAgIGxldCBmbjtcclxuICAgIHN3aXRjaCAoZ3JhaW4pIHtcclxuICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVZZWFyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVNb250aDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICBmbiA9IGlzU2FtZURheTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaG91cic6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVIb3VyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdtaW51dGUnOlxyXG4gICAgICAgIGZuID0gaXNTYW1lTWludXRlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzZWNvbmQnOlxyXG4gICAgICAgIGZuID0gaXNTYW1lU2Vjb25kO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGZuID0gaXNTYW1lRGF5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZuKHRoaXMubmF0aXZlRGF0ZSwgdGhpcy50b05hdGl2ZURhdGUoZGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lWWVhcihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoZGF0ZSwgJ3llYXInKTtcclxuICB9XHJcblxyXG4gIGlzU2FtZU1vbnRoKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnbW9udGgnKTtcclxuICB9XHJcblxyXG4gIGlzU2FtZURheShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoZGF0ZSwgJ2RheScpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lSG91cihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoZGF0ZSwgJ2hvdXInKTtcclxuICB9XHJcblxyXG4gIGlzU2FtZU1pbnV0ZShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoZGF0ZSwgJ21pbnV0ZScpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lU2Vjb25kKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnc2Vjb25kJyk7XHJcbiAgfVxyXG5cclxuICBjb21wYXJlKGRhdGU6IENhbmR5RGF0ZVR5cGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAnZGF5JywgaXNCZWZvcmU6IGJvb2xlYW4gPSB0cnVlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgZm47XHJcbiAgICBzd2l0Y2ggKGdyYWluKSB7XHJcbiAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2hvdXInOlxyXG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluSG91cnM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21pbnV0ZSc6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5NaW51dGVzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzZWNvbmQnOlxyXG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluU2Vjb25kcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBpc0JlZm9yZVxyXG4gICAgICA/IGZuKHRoaXMubmF0aXZlRGF0ZSwgdGhpcy50b05hdGl2ZURhdGUoZGF0ZSkpIDwgMFxyXG4gICAgICA6IGZuKHRoaXMubmF0aXZlRGF0ZSwgdGhpcy50b05hdGl2ZURhdGUoZGF0ZSkpID4gMDtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlWWVhcihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICd5ZWFyJyk7XHJcbiAgfVxyXG5cclxuICBpc0JlZm9yZU1vbnRoKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21vbnRoJyk7XHJcbiAgfVxyXG5cclxuICBpc0JlZm9yZURheShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdkYXknKTtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlSG91cihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdob3VyJyk7XHJcbiAgfVxyXG5cclxuICBpc0JlZm9yZU1pbnV0ZShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdtaW51dGUnKTtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlU2Vjb25kKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3NlY29uZCcpO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogaXNCZWZvcmVcclxuICBpc0FmdGVyWWVhcihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICd5ZWFyJywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgaXNBZnRlck1vbnRoKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21vbnRoJywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgaXNBZnRlckRheShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdkYXknLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpc0FmdGVySG91cihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdob3VyJywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgaXNBZnRlck1pbnV0ZShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdtaW51dGUnLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpc0FmdGVyU2Vjb25kKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3NlY29uZCcsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8vIEVxdWFsIHRvIHRvZGF5IGFjY3VyYXRlIHRvIFwiZGF5XCJcclxuICBpc1RvZGF5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzVG9kYXkodGhpcy5uYXRpdmVEYXRlKTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNWYWxpZCh0aGlzLm5hdGl2ZURhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICBwcml2YXRlIHRvTmF0aXZlRGF0ZShkYXRlOiBhbnkpOiBEYXRlIHtcclxuICAgIHJldHVybiBkYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gZGF0ZS5uYXRpdmVEYXRlIDogZGF0ZTtcclxuICB9XHJcbn1cclxuIl19