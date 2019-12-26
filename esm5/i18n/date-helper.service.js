/**
 * @fileoverview added by tsickle
 * Generated from: date-helper.service.ts
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
import { formatDate } from '@angular/common';
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import fnsFormat from 'date-fns/format';
import fnsGetISOWeek from 'date-fns/get_iso_week';
import fnsParse from 'date-fns/parse';
import { mergeDateConfig, NZ_DATE_CONFIG } from './date-config';
import { NzI18nService } from './nz-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "./date-config";
/**
 * @param {?} injector
 * @param {?} config
 * @return {?}
 */
export function DATE_HELPER_SERVICE_FACTORY(injector, config) {
    /** @type {?} */
    var i18n = injector.get(NzI18nService);
    return i18n.getDateLocale() ? new DateHelperByDateFns(i18n, config) : new DateHelperByDatePipe(i18n, config);
}
/**
 * Abstract DateHelperService(Token via Class)
 * Compatibility: compact for original usage by default which using DatePipe
 * @abstract
 */
var DateHelperService = /** @class */ (function () {
    function DateHelperService(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.relyOnDatePipe = this instanceof DateHelperByDatePipe; // Indicate whether this service is rely on DatePipe
        this.config = mergeDateConfig(this.config);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    DateHelperService.prototype.parseDate = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (!text) {
            return;
        }
        return fnsParse(text);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    DateHelperService.prototype.parseTime = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (!text) {
            return;
        }
        return fnsParse("1970-01-01 " + text);
    };
    DateHelperService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                    useFactory: DATE_HELPER_SERVICE_FACTORY,
                    deps: [Injector, [new Optional(), NZ_DATE_CONFIG]]
                },] }
    ];
    /** @nocollapse */
    DateHelperService.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
    ]; };
    /** @nocollapse */ DateHelperService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DateHelperService_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperService, providedIn: "root" });
    return DateHelperService;
}());
export { DateHelperService };
if (false) {
    /** @type {?} */
    DateHelperService.prototype.relyOnDatePipe;
    /**
     * @type {?}
     * @protected
     */
    DateHelperService.prototype.i18n;
    /**
     * @type {?}
     * @protected
     */
    DateHelperService.prototype.config;
    /**
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateHelperService.prototype.getISOWeek = function (date) { };
    /**
     * @abstract
     * @return {?}
     */
    DateHelperService.prototype.getFirstDayOfWeek = function () { };
    /**
     * @abstract
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    DateHelperService.prototype.format = function (date, formatStr) { };
}
/**
 * DateHelper that handles date formats with date-fns
 */
var DateHelperByDateFns = /** @class */ (function (_super) {
    tslib_1.__extends(DateHelperByDateFns, _super);
    function DateHelperByDateFns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    DateHelperByDateFns.prototype.getISOWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return fnsGetISOWeek(date);
    };
    // TODO: Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // when v2.0 is ready: https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    // TODO: Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // when v2.0 is ready: https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    /**
     * @return {?}
     */
    DateHelperByDateFns.prototype.getFirstDayOfWeek = 
    // TODO: Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // when v2.0 is ready: https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    /**
     * @return {?}
     */
    function () {
        return this.config.firstDayOfWeek == null ? 1 : this.config.firstDayOfWeek;
    };
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param date Date
     * @param formatStr format string
     */
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param {?} date Date
     * @param {?} formatStr format string
     * @return {?}
     */
    DateHelperByDateFns.prototype.format = /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param {?} date Date
     * @param {?} formatStr format string
     * @return {?}
     */
    function (date, formatStr) {
        return date ? fnsFormat(date, formatStr, { locale: this.i18n.getDateLocale() }) : '';
    };
    /** @nocollapse */ DateHelperByDateFns.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DateHelperByDateFns_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperByDateFns, providedIn: "root" });
    return DateHelperByDateFns;
}(DateHelperService));
export { DateHelperByDateFns };
/**
 * DateHelper that handles date formats with angular's date-pipe
 *
 * @see https://github.com/NG-ZORRO/ng-zorro-antd/issues/2406 - DatePipe may cause non-standard week bug, see:
 *
 */
var DateHelperByDatePipe = /** @class */ (function (_super) {
    tslib_1.__extends(DateHelperByDatePipe, _super);
    function DateHelperByDatePipe(i18n, config) {
        return _super.call(this, i18n, config) || this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    DateHelperByDatePipe.prototype.getISOWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return +this.format(date, 'w');
    };
    /**
     * @return {?}
     */
    DateHelperByDatePipe.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        if (this.config.firstDayOfWeek === undefined) {
            /** @type {?} */
            var locale = this.i18n.getLocaleId();
            return locale && ['zh-cn', 'zh-tw'].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
        }
        return this.config.firstDayOfWeek;
    };
    /**
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    DateHelperByDatePipe.prototype.format = /**
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    function (date, formatStr) {
        return date ? (/** @type {?} */ (formatDate(date, formatStr, this.i18n.getLocaleId()))) : '';
    };
    /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/
     * @link https://angular.io/api/common/DatePipe#description
     * @param format input format pattern
     */
    /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/ / https://angular.io/api/common/DatePipe#description
     * @param {?} format input format pattern
     * @return {?}
     */
    DateHelperByDatePipe.prototype.transCompatFormat = /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/ / https://angular.io/api/common/DatePipe#description
     * @param {?} format input format pattern
     * @return {?}
     */
    function (format) {
        return (format &&
            format
                .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
                .replace(/D/g, 'd')); // d, dd represent of D, DD for momentjs, others are not support
    };
    /** @nocollapse */
    DateHelperByDatePipe.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
    ]; };
    /** @nocollapse */ DateHelperByDatePipe.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DateHelperByDatePipe_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperByDatePipe, providedIn: "root" });
    return DateHelperByDatePipe;
}(DateHelperService));
export { DateHelperByDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaTE4bi8iLCJzb3VyY2VzIjpbImRhdGUtaGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sYUFBYSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxlQUFlLEVBQWdCLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7O0FBRWxELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxRQUFrQixFQUFFLE1BQW9COztRQUM1RSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDeEMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMvRyxDQUFDOzs7Ozs7QUFNRDtJQVFFLDJCQUFzQixJQUFtQixFQUFnRCxNQUFvQjtRQUF2RixTQUFJLEdBQUosSUFBSSxDQUFlO1FBQWdELFdBQU0sR0FBTixNQUFNLENBQWM7UUFGN0csbUJBQWMsR0FBWSxJQUFJLFlBQVksb0JBQW9CLENBQUMsQ0FBQyxvREFBb0Q7UUFHbEgsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsSUFBSSxD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QUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNFLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7Ozs7Ozs7Ozs7O0lBQ0gsZ0RBQWlCOzs7Ozs7Ozs7O0lBQWpCLFVBQWtCLE1BQWM7UUFDOUIsT0FBTyxDQUNMLE1BQU07WUFDTixNQUFNO2lCQUNILE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsZ0NBQWdDO2lCQUNuRCxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUN0QixDQUFDLENBQUMsZ0VBQWdFO0lBQ3JFLENBQUM7OztnQkEvR00sYUFBYTtnREEwRWMsUUFBUSxZQUFJLE1BQU0sU0FBQyxjQUFjOzs7K0JBekZyRTtDQStIQyxBQXZDRCxDQUEwQyxpQkFBaUIsR0F1QzFEO1NBdkNZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBmbnNGb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcclxuaW1wb3J0IGZuc0dldElTT1dlZWsgZnJvbSAnZGF0ZS1mbnMvZ2V0X2lzb193ZWVrJztcclxuaW1wb3J0IGZuc1BhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcclxuXHJcbmltcG9ydCB7IG1lcmdlRGF0ZUNvbmZpZywgTnpEYXRlQ29uZmlnLCBOWl9EQVRFX0NPTkZJRyB9IGZyb20gJy4vZGF0ZS1jb25maWcnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi9uei1pMThuLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERBVEVfSEVMUEVSX1NFUlZJQ0VfRkFDVE9SWShpbmplY3RvcjogSW5qZWN0b3IsIGNvbmZpZzogTnpEYXRlQ29uZmlnKTogRGF0ZUhlbHBlclNlcnZpY2Uge1xyXG4gIGNvbnN0IGkxOG4gPSBpbmplY3Rvci5nZXQoTnpJMThuU2VydmljZSk7XHJcbiAgcmV0dXJuIGkxOG4uZ2V0RGF0ZUxvY2FsZSgpID8gbmV3IERhdGVIZWxwZXJCeURhdGVGbnMoaTE4biwgY29uZmlnKSA6IG5ldyBEYXRlSGVscGVyQnlEYXRlUGlwZShpMThuLCBjb25maWcpO1xyXG59XHJcblxyXG4vKipcclxuICogQWJzdHJhY3QgRGF0ZUhlbHBlclNlcnZpY2UoVG9rZW4gdmlhIENsYXNzKVxyXG4gKiBDb21wYXRpYmlsaXR5OiBjb21wYWN0IGZvciBvcmlnaW5hbCB1c2FnZSBieSBkZWZhdWx0IHdoaWNoIHVzaW5nIERhdGVQaXBlXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG4gIHVzZUZhY3Rvcnk6IERBVEVfSEVMUEVSX1NFUlZJQ0VfRkFDVE9SWSxcclxuICBkZXBzOiBbSW5qZWN0b3IsIFtuZXcgT3B0aW9uYWwoKSwgTlpfREFURV9DT05GSUddXVxyXG59KVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0ZUhlbHBlclNlcnZpY2Uge1xyXG4gIHJlbHlPbkRhdGVQaXBlOiBib29sZWFuID0gdGhpcyBpbnN0YW5jZW9mIERhdGVIZWxwZXJCeURhdGVQaXBlOyAvLyBJbmRpY2F0ZSB3aGV0aGVyIHRoaXMgc2VydmljZSBpcyByZWx5IG9uIERhdGVQaXBlXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlLCBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0RBVEVfQ09ORklHKSBwcm90ZWN0ZWQgY29uZmlnOiBOekRhdGVDb25maWcpIHtcclxuICAgIHRoaXMuY29uZmlnID0gbWVyZ2VEYXRlQ29uZmlnKHRoaXMuY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGFic3RyYWN0IGdldElTT1dlZWsoZGF0ZTogRGF0ZSk6IG51bWJlcjtcclxuICBhYnN0cmFjdCBnZXRGaXJzdERheU9mV2VlaygpOiBXZWVrRGF5SW5kZXg7XHJcbiAgYWJzdHJhY3QgZm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdFN0cjogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICBwYXJzZURhdGUodGV4dDogc3RyaW5nKTogRGF0ZSB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoIXRleHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZuc1BhcnNlKHRleHQpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VUaW1lKHRleHQ6IHN0cmluZyk6IERhdGUgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJldHVybiBmbnNQYXJzZShgMTk3MC0wMS0wMSAke3RleHR9YCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRGF0ZUhlbHBlciB0aGF0IGhhbmRsZXMgZGF0ZSBmb3JtYXRzIHdpdGggZGF0ZS1mbnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBEYXRlSGVscGVyQnlEYXRlRm5zIGV4dGVuZHMgRGF0ZUhlbHBlclNlcnZpY2Uge1xyXG4gIGdldElTT1dlZWsoZGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZm5zR2V0SVNPV2VlayhkYXRlKTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IFVzZSBkYXRlLWZucydzIFwid2Vla1N0YXJ0c09uXCIgdG8gc3VwcG9ydCBkaWZmZXJlbnQgbG9jYWxlIHdoZW4gXCJjb25maWcuZmlyc3REYXlPZldlZWtcIiBpcyBudWxsXHJcbiAgLy8gd2hlbiB2Mi4wIGlzIHJlYWR5OiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi92Mi4wLjAtYWxwaGEuMjcvc3JjL2xvY2FsZS9lbi1VUy9pbmRleC5qcyNMMjNcclxuICBnZXRGaXJzdERheU9mV2VlaygpOiAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5maXJzdERheU9mV2VlayA9PSBudWxsID8gMSA6IHRoaXMuY29uZmlnLmZpcnN0RGF5T2ZXZWVrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9ybWF0IGEgZGF0ZVxyXG4gICAqIEBzZWUgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9mb3JtYXQjZGVzY3JpcHRpb25cclxuICAgKiBAcGFyYW0gZGF0ZSBEYXRlXHJcbiAgICogQHBhcmFtIGZvcm1hdFN0ciBmb3JtYXQgc3RyaW5nXHJcbiAgICovXHJcbiAgZm9ybWF0KGRhdGU6IERhdGUgfCBudWxsLCBmb3JtYXRTdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZGF0ZSA/IGZuc0Zvcm1hdChkYXRlLCBmb3JtYXRTdHIsIHsgbG9jYWxlOiB0aGlzLmkxOG4uZ2V0RGF0ZUxvY2FsZSgpIH0pIDogJyc7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRGF0ZUhlbHBlciB0aGF0IGhhbmRsZXMgZGF0ZSBmb3JtYXRzIHdpdGggYW5ndWxhcidzIGRhdGUtcGlwZVxyXG4gKlxyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8yNDA2IC0gRGF0ZVBpcGUgbWF5IGNhdXNlIG5vbi1zdGFuZGFyZCB3ZWVrIGJ1Zywgc2VlOlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERhdGVIZWxwZXJCeURhdGVQaXBlIGV4dGVuZHMgRGF0ZUhlbHBlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UsIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfREFURV9DT05GSUcpIGNvbmZpZzogTnpEYXRlQ29uZmlnKSB7XHJcbiAgICBzdXBlcihpMThuLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SVNPV2VlayhkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiArdGhpcy5mb3JtYXQoZGF0ZSwgJ3cnKTtcclxuICB9XHJcblxyXG4gIGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleCB7XHJcbiAgICBpZiAodGhpcy5jb25maWcuZmlyc3REYXlPZldlZWsgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKTtcclxuICAgICAgcmV0dXJuIGxvY2FsZSAmJiBbJ3poLWNuJywgJ3poLXR3J10uaW5kZXhPZihsb2NhbGUudG9Mb3dlckNhc2UoKSkgPiAtMSA/IDEgOiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpcnN0RGF5T2ZXZWVrO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0KGRhdGU6IERhdGUgfCBudWxsLCBmb3JtYXRTdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZGF0ZSA/IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0U3RyLCB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKSkhIDogJyc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb21wYXRpYmxlIHRyYW5zbGF0ZSB0aGUgbW9tZW50LWxpa2UgZm9ybWF0IHBhdHRlcm4gdG8gYW5ndWxhcidzIHBhdHRlcm5cclxuICAgKiBXaHk/IEZvciBub3csIHdlIG5lZWQgdG8gc3VwcG9ydCB0aGUgZXhpc3RpbmcgbGFuZ3VhZ2UgZm9ybWF0cyBpbiBBbnRELCBhbmQgQW50RCB1c2VzIHRoZSBkZWZhdWx0IHRlbXBvcmFsIHN5bnRheC5cclxuICAgKlxyXG4gICAqIFRPRE86IGNvbXBhcmUgYW5kIGNvbXBsZXRlIGFsbCBmb3JtYXQgcGF0dGVybnNcclxuICAgKiBFYWNoIGZvcm1hdCBkb2NzIGFzIGJlbG93OlxyXG4gICAqIEBsaW5rIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9kaXNwbGF5aW5nL2Zvcm1hdC9cclxuICAgKiBAbGluayBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvbW1vbi9EYXRlUGlwZSNkZXNjcmlwdGlvblxyXG4gICAqIEBwYXJhbSBmb3JtYXQgaW5wdXQgZm9ybWF0IHBhdHRlcm5cclxuICAgKi9cclxuICB0cmFuc0NvbXBhdEZvcm1hdChmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBmb3JtYXQgJiZcclxuICAgICAgZm9ybWF0XHJcbiAgICAgICAgLnJlcGxhY2UoL1kvZywgJ3knKSAvLyBvbmx5IHN1cHBvcnQgeSwgeXksIHl5eSwgeXl5eVxyXG4gICAgICAgIC5yZXBsYWNlKC9EL2csICdkJylcclxuICAgICk7IC8vIGQsIGRkIHJlcHJlc2VudCBvZiBELCBERCBmb3IgbW9tZW50anMsIG90aGVycyBhcmUgbm90IHN1cHBvcnRcclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IHR5cGUgV2Vla0RheUluZGV4ID0gMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNjtcclxuIl19