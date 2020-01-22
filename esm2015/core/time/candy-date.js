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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRpbWUvY2FuZHktZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsMEJBQTBCLEVBQzFCLHlCQUF5QixFQUN6QixpQkFBaUIsRUFDakIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLFVBQVUsRUFDVixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxZQUFZLEVBQ1osV0FBVyxFQUNaLE1BQU0sVUFBVSxDQUFDO0FBQ2xCLE9BQU8sU0FBUyxNQUFNLHFCQUFxQixDQUFDO0FBQzVDLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sTUFBTSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RDLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7O0FBTWpDLE1BQU0sVUFBVSxjQUFjLENBQUMsVUFBdUI7SUFDcEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2NBQ3ZCLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFVBQVU7UUFDL0IsT0FBTyxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMvRTtJQUNELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7Ozs7Ozs7QUFPRCxNQUFNLE9BQU8sU0FBUzs7Ozs7SUFJcEIsWUFBWSxJQUE2QjtRQUN2QyxJQUFJLElB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bEMsQ0FBQzs7Ozs7OztJQUdPLFlBQVksQ0FBQyxJQUFTO1FBQzVCLE9BQU8sSUFBSSxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7Q0FDRjs7O0lBeFFDLCtCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMsXHJcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMsXHJcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyxcclxuICBkaWZmZXJlbmNlSW5Ib3VycyxcclxuICBkaWZmZXJlbmNlSW5NaW51dGVzLFxyXG4gIGRpZmZlcmVuY2VJblNlY29uZHMsXHJcbiAgaXNTYW1lRGF5LFxyXG4gIGlzU2FtZUhvdXIsXHJcbiAgaXNTYW1lTWludXRlLFxyXG4gIGlzU2FtZU1vbnRoLFxyXG4gIGlzU2FtZVNlY29uZCxcclxuICBpc1NhbWVZZWFyLFxyXG4gIGlzVG9kYXksXHJcbiAgaXNWYWxpZCxcclxuICBzZXRZZWFyLFxyXG4gIHN0YXJ0T2ZNb250aCxcclxuICBzdGFydE9mV2Vla1xyXG59IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IGFkZE1vbnRocyBmcm9tICdkYXRlLWZucy9hZGRfbW9udGhzJztcclxuaW1wb3J0IGFkZFllYXJzIGZyb20gJ2RhdGUtZm5zL2FkZF95ZWFycyc7XHJcbmltcG9ydCBzZXREYXkgZnJvbSAnZGF0ZS1mbnMvc2V0X2RheSc7XHJcbmltcG9ydCBzZXRNb250aCBmcm9tICdkYXRlLWZucy9zZXRfbW9udGgnO1xyXG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnLi4vbG9nZ2VyJztcclxuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2FuZHlEYXRlQ29tcGFyZUdyYWluID0gJ3llYXInIHwgJ21vbnRoJyB8ICdkYXknIHwgJ2hvdXInIHwgJ21pbnV0ZScgfCAnc2Vjb25kJztcclxuZXhwb3J0IHR5cGUgQ2FuZHlEYXRlVHlwZSA9IENhbmR5RGF0ZSB8IERhdGUgfCBudWxsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRSYW5nZVZhbHVlKHJhbmdlVmFsdWU6IENhbmR5RGF0ZVtdKTogQ2FuZHlEYXRlW10ge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHJhbmdlVmFsdWUpKSB7XHJcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSByYW5nZVZhbHVlO1xyXG4gICAgcmV0dXJuIHN0YXJ0ICYmIGVuZCAmJiBzdGFydC5pc0FmdGVyU2Vjb25kKGVuZCkgPyBbZW5kLCBzdGFydF0gOiBbc3RhcnQsIGVuZF07XHJcbiAgfVxyXG4gIHJldHVybiByYW5nZVZhbHVlO1xyXG59XHJcbi8qKlxyXG4gKiBXcmFwcGluZyBraW5kIEFQSXMgZm9yIGRhdGUgb3BlcmF0aW5nIGFuZCB1bmlmeVxyXG4gKiBOT1RFOiBldmVyeSBuZXcgQVBJIHJldHVybiBuZXcgQ2FuZHlEYXRlIG9iamVjdCB3aXRob3V0IHNpZGUgZWZmZWN0cyB0byB0aGUgZm9ybWVyIERhdGUgb2JqZWN0XHJcbiAqIE5PVEU6IG1vc3QgQVBJcyBhcmUgYmFzZWQgb24gbG9jYWwgdGltZSBvdGhlciB0aGFuIGN1c3RvbWl6ZWQgbG9jYWxlIGlkICh0aGlzIG5lZWRzIHRvYmUgc3VwcG9ydCBpbiBmdXR1cmUpXHJcbiAqIFRPRE86IHN1cHBvcnQgZm9ybWF0KCkgYWdhaW5zdCB0byBhbmd1bGFyJ3MgY29yZSBBUElcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDYW5keURhdGUgaW1wbGVtZW50cyBJbmRleGFibGVPYmplY3Qge1xyXG4gIG5hdGl2ZURhdGU6IERhdGU7XHJcbiAgLy8gbG9jYWxlOiBzdHJpbmc7IC8vIEN1c3RvbSBzcGVjaWZpZWQgbG9jYWxlIElEXHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGU/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBkYXRlO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICB3YXJuKCdUaGUgc3RyaW5nIHR5cGUgaXMgbm90IHJlY29tbWVuZGVkIGZvciBkYXRlLXBpY2tlciwgdXNlIFwiRGF0ZVwiIHR5cGUnKTtcclxuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbnB1dCBkYXRlIHR5cGUgaXMgbm90IHN1cHBvcnRlZCAoXCJEYXRlXCIgaXMgbm93IHJlY29tbWVuZGVkKScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5hdGl2ZURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZ2V0TG9jYWxlKCk6IHN0cmluZyB7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5sb2NhbGU7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBzZXRMb2NhbGUobG9jYWxlOiBzdHJpbmcpOiBDYW5keURhdGUge1xyXG4gIC8vICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XHJcbiAgLy8gICByZXR1cm4gdGhpcztcclxuICAvLyB9XHJcblxyXG4gIGNhbGVuZGFyU3RhcnQob3B0aW9ucz86IHsgd2Vla1N0YXJ0c09uOiBudW1iZXIgfCB1bmRlZmluZWQgfSk6IENhbmR5RGF0ZSB7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShzdGFydE9mV2VlayhzdGFydE9mTW9udGgodGhpcy5uYXRpdmVEYXRlKSwgb3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCBOYXRpdmUgc2hvcnRjdXRzXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIGdldFllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1vbnRoKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RGF5KCk7XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldFRpbWUoKTtcclxuICB9XHJcblxyXG4gIGdldERhdGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SG91cnMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0SG91cnMoKTtcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWludXRlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2Vjb25kcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaWxsaXNlY29uZHMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IE5ldyBpbXBsZW1lbnRpbmcgQVBJc1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBjbG9uZSgpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUobmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKSk7XHJcbiAgfVxyXG5cclxuICBzZXRIbXMoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlciwgc2Vjb25kOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSk7XHJcbiAgICBkYXRlLnNldEhvdXJzKGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgc2V0WWVhcih5ZWFyOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0WWVhcih0aGlzLm5hdGl2ZURhdGUsIHllYXIpKTtcclxuICB9XHJcblxyXG4gIGFkZFllYXJzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGFkZFllYXJzKHRoaXMubmF0aXZlRGF0ZSwgYW1vdW50KSk7XHJcbiAgfVxyXG5cclxuICAvLyBOT1RFOiBtb250aCBzdGFydHMgZnJvbSAwXHJcbiAgLy8gTk9URTogRG9uJ3QgdXNlIHRoZSBuYXRpdmUgQVBJIGZvciBtb250aCBtYW5pcHVsYXRpb24gYXMgaXQgbm90IHJlc3RyaWN0IHRoZSBkYXRlIHdoZW4gaXQgb3ZlcmZsb3dzLCBlZy4gKG5ldyBEYXRlKCcyMDE4LTctMzEnKSkuc2V0TW9udGgoMSkgd2lsbCBiZSBkYXRlIG9mIDIwMTgtMy0wMyBpbnN0ZWFkIG9mIDIwMTgtMi0yOFxyXG4gIHNldE1vbnRoKG1vbnRoOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0TW9udGgodGhpcy5uYXRpdmVEYXRlLCBtb250aCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkTW9udGhzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGFkZE1vbnRocyh0aGlzLm5hdGl2ZURhdGUsIGFtb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF5KGRheTogbnVtYmVyLCBvcHRpb25zPzogeyB3ZWVrU3RhcnRzT246IG51bWJlciB9KTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHNldERheSh0aGlzLm5hdGl2ZURhdGUsIGRheSwgb3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZShhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcclxuICAgIGRhdGUuc2V0RGF0ZShhbW91bnQpO1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBhZGREYXlzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgKyBhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lKGRhdGU6IENhbmR5RGF0ZVR5cGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAnZGF5Jyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGZuO1xyXG4gICAgc3dpdGNoIChncmFpbikge1xyXG4gICAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgICBmbiA9IGlzU2FtZVllYXI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICBmbiA9IGlzU2FtZU1vbnRoO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgIGZuID0gaXNTYW1lRGF5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdob3VyJzpcclxuICAgICAgICBmbiA9IGlzU2FtZUhvdXI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21pbnV0ZSc6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVNaW51dGU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVTZWNvbmQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZm4gPSBpc1NhbWVEYXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm4odGhpcy5uYXRpdmVEYXRlLCB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKSk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVZZWFyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAneWVhcicpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdtb250aCcpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnZGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVIb3VyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnaG91cicpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnbWludXRlJyk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdzZWNvbmQnKTtcclxuICB9XHJcblxyXG4gIGNvbXBhcmUoZGF0ZTogQ2FuZHlEYXRlVHlwZSwgZ3JhaW46IENhbmR5RGF0ZUNvbXBhcmVHcmFpbiA9ICdkYXknLCBpc0JlZm9yZTogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuIHtcclxuICAgIGlmIChkYXRlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBmbjtcclxuICAgIHN3aXRjaCAoZ3JhaW4pIHtcclxuICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaG91cic6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5Ib3VycztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbWludXRlJzpcclxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbk1pbnV0ZXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5TZWNvbmRzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzQmVmb3JlXHJcbiAgICAgID8gZm4odGhpcy5uYXRpdmVEYXRlLCB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKSkgPCAwXHJcbiAgICAgIDogZm4odGhpcy5uYXRpdmVEYXRlLCB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKSkgPiAwO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmVZZWFyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3llYXInKTtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbW9udGgnKTtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2RheScpO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmVIb3VyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2hvdXInKTtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21pbnV0ZScpO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmVTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnc2Vjb25kJyk7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBpc0JlZm9yZVxyXG4gIGlzQWZ0ZXJZZWFyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3llYXInLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpc0FmdGVyTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbW9udGgnLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpc0FmdGVyRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2RheScsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlzQWZ0ZXJIb3VyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2hvdXInLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpc0FmdGVyTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21pbnV0ZScsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlzQWZ0ZXJTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnc2Vjb25kJywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gRXF1YWwgdG8gdG9kYXkgYWNjdXJhdGUgdG8gXCJkYXlcIlxyXG4gIGlzVG9kYXkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNUb2RheSh0aGlzLm5hdGl2ZURhdGUpO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc1ZhbGlkKHRoaXMubmF0aXZlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gIHByaXZhdGUgdG9OYXRpdmVEYXRlKGRhdGU6IGFueSk6IERhdGUge1xyXG4gICAgcmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlLm5hdGl2ZURhdGUgOiBkYXRlO1xyXG4gIH1cclxufVxyXG4iXX0=