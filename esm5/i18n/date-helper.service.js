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
import * as ɵngcc0 from '@angular/core';
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
    /** @nocollapse */
    DateHelperService.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
    ]; };
    /** @nocollapse */ DateHelperService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DateHelperService_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperService, providedIn: "root" });
DateHelperService.ɵfac = function DateHelperService_Factory(t) { return new (t || DateHelperService)(ɵngcc0.ɵɵinject(NzI18nService), ɵngcc0.ɵɵinject(NZ_DATE_CONFIG, 8)); };
DateHelperService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DateHelperService, factory: function DateHelperService_Factory(t) { var r = null; if (t) {
        r = new t();
    }
    else {
        r = DATE_HELPER_SERVICE_FACTORY(ɵngcc0.ɵɵinject(Injector), ɵngcc0.ɵɵinject([new Optional(), NZ_DATE_CONFIG], 8));
    } return r; }, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateHelperService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
                useFactory: DATE_HELPER_SERVICE_FACTORY,
                deps: [Injector, [new Optional(), NZ_DATE_CONFIG]]
            }]
    }], function () { return [{ type: NzI18nService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_DATE_CONFIG]
            }] }]; }, null); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvaTE4bi9kYXRlLWhlbHBlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sYUFBYSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxlQUFlLEVBQWdCLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7OztBQUVsRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsUUFBa0IsRUFBRSxNQUFvQjs7UUFDNUUsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0csQ0FBQzs7Ozs7O0FBTUQ7SUFRRSwyQkFBc0IsSUFBbUIsRUFBZ0QsTUFBb0I7UUFBdkYsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFnRCxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBRjdHLG1CQUFjLEdBQVksSUFBSSxZQUFZLG9CQUFvQixDQUFDLENBQUMsb0RBQW9EO1FBR2xILElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FB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QUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHOzs7Ozs7Ozs7OztJQUNILGdEQUFpQjs7Ozs7Ozs7OztJQUFqQixVQUFrQixNQUFjO1FBQzlCLE9BQU8sQ0FDTCxNQUFNO1lBQ04sTUFBTTtpQkFDSCxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGdDQUFnQztpQkFDbkQsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FDdEIsQ0FBQyxDQUFDLGdFQUFnRTtJQUNyRSxDQUFDOzs7Z0JBL0dNLGFBQWE7Z0RBMEVjLFFBQVEsWUFBSSxNQUFNLFNBQUMsY0FBYzs7OytCQXpGckU7Q0ErSEMsQUF2Q0QsQ0FBMEMsaUJBQWlCLEdBdUMxRDtTQXZDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgZm5zRm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XHJcbmltcG9ydCBmbnNHZXRJU09XZWVrIGZyb20gJ2RhdGUtZm5zL2dldF9pc29fd2Vlayc7XHJcbmltcG9ydCBmbnNQYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XHJcblxyXG5pbXBvcnQgeyBtZXJnZURhdGVDb25maWcsIE56RGF0ZUNvbmZpZywgTlpfREFURV9DT05GSUcgfSBmcm9tICcuL2RhdGUtY29uZmlnJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4vbnotaTE4bi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEQVRFX0hFTFBFUl9TRVJWSUNFX0ZBQ1RPUlkoaW5qZWN0b3I6IEluamVjdG9yLCBjb25maWc6IE56RGF0ZUNvbmZpZyk6IERhdGVIZWxwZXJTZXJ2aWNlIHtcclxuICBjb25zdCBpMThuID0gaW5qZWN0b3IuZ2V0KE56STE4blNlcnZpY2UpO1xyXG4gIHJldHVybiBpMThuLmdldERhdGVMb2NhbGUoKSA/IG5ldyBEYXRlSGVscGVyQnlEYXRlRm5zKGkxOG4sIGNvbmZpZykgOiBuZXcgRGF0ZUhlbHBlckJ5RGF0ZVBpcGUoaTE4biwgY29uZmlnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0IERhdGVIZWxwZXJTZXJ2aWNlKFRva2VuIHZpYSBDbGFzcylcclxuICogQ29tcGF0aWJpbGl0eTogY29tcGFjdCBmb3Igb3JpZ2luYWwgdXNhZ2UgYnkgZGVmYXVsdCB3aGljaCB1c2luZyBEYXRlUGlwZVxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxuICB1c2VGYWN0b3J5OiBEQVRFX0hFTFBFUl9TRVJWSUNFX0ZBQ1RPUlksXHJcbiAgZGVwczogW0luamVjdG9yLCBbbmV3IE9wdGlvbmFsKCksIE5aX0RBVEVfQ09ORklHXV1cclxufSlcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhdGVIZWxwZXJTZXJ2aWNlIHtcclxuICByZWx5T25EYXRlUGlwZTogYm9vbGVhbiA9IHRoaXMgaW5zdGFuY2VvZiBEYXRlSGVscGVyQnlEYXRlUGlwZTsgLy8gSW5kaWNhdGUgd2hldGhlciB0aGlzIHNlcnZpY2UgaXMgcmVseSBvbiBEYXRlUGlwZVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaTE4bjogTnpJMThuU2VydmljZSwgQE9wdGlvbmFsKCkgQEluamVjdChOWl9EQVRFX0NPTkZJRykgcHJvdGVjdGVkIGNvbmZpZzogTnpEYXRlQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IG1lcmdlRGF0ZUNvbmZpZyh0aGlzLmNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXI7XHJcbiAgYWJzdHJhY3QgZ2V0Rmlyc3REYXlPZldlZWsoKTogV2Vla0RheUluZGV4O1xyXG4gIGFic3RyYWN0IGZvcm1hdChkYXRlOiBEYXRlLCBmb3JtYXRTdHI6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgcGFyc2VEYXRlKHRleHQ6IHN0cmluZyk6IERhdGUgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJldHVybiBmbnNQYXJzZSh0ZXh0KTtcclxuICB9XHJcblxyXG4gIHBhcnNlVGltZSh0ZXh0OiBzdHJpbmcpOiBEYXRlIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghdGV4dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm5zUGFyc2UoYDE5NzAtMDEtMDEgJHt0ZXh0fWApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERhdGVIZWxwZXIgdGhhdCBoYW5kbGVzIGRhdGUgZm9ybWF0cyB3aXRoIGRhdGUtZm5zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGF0ZUhlbHBlckJ5RGF0ZUZucyBleHRlbmRzIERhdGVIZWxwZXJTZXJ2aWNlIHtcclxuICBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGZuc0dldElTT1dlZWsoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBVc2UgZGF0ZS1mbnMncyBcIndlZWtTdGFydHNPblwiIHRvIHN1cHBvcnQgZGlmZmVyZW50IGxvY2FsZSB3aGVuIFwiY29uZmlnLmZpcnN0RGF5T2ZXZWVrXCIgaXMgbnVsbFxyXG4gIC8vIHdoZW4gdjIuMCBpcyByZWFkeTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvdjIuMC4wLWFscGhhLjI3L3NyYy9sb2NhbGUvZW4tVVMvaW5kZXguanMjTDIzXHJcbiAgZ2V0Rmlyc3REYXlPZldlZWsoKTogMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZmlyc3REYXlPZldlZWsgPT0gbnVsbCA/IDEgOiB0aGlzLmNvbmZpZy5maXJzdERheU9mV2VlaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdCBhIGRhdGVcclxuICAgKiBAc2VlIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZm9ybWF0I2Rlc2NyaXB0aW9uXHJcbiAgICogQHBhcmFtIGRhdGUgRGF0ZVxyXG4gICAqIEBwYXJhbSBmb3JtYXRTdHIgZm9ybWF0IHN0cmluZ1xyXG4gICAqL1xyXG4gIGZvcm1hdChkYXRlOiBEYXRlIHwgbnVsbCwgZm9ybWF0U3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGRhdGUgPyBmbnNGb3JtYXQoZGF0ZSwgZm9ybWF0U3RyLCB7IGxvY2FsZTogdGhpcy5pMThuLmdldERhdGVMb2NhbGUoKSB9KSA6ICcnO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERhdGVIZWxwZXIgdGhhdCBoYW5kbGVzIGRhdGUgZm9ybWF0cyB3aXRoIGFuZ3VsYXIncyBkYXRlLXBpcGVcclxuICpcclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMjQwNiAtIERhdGVQaXBlIG1heSBjYXVzZSBub24tc3RhbmRhcmQgd2VlayBidWcsIHNlZTpcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBEYXRlSGVscGVyQnlEYXRlUGlwZSBleHRlbmRzIERhdGVIZWxwZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihpMThuOiBOekkxOG5TZXJ2aWNlLCBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0RBVEVfQ09ORklHKSBjb25maWc6IE56RGF0ZUNvbmZpZykge1xyXG4gICAgc3VwZXIoaTE4biwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGdldElTT1dlZWsoZGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gK3RoaXMuZm9ybWF0KGRhdGUsICd3Jyk7XHJcbiAgfVxyXG5cclxuICBnZXRGaXJzdERheU9mV2VlaygpOiBXZWVrRGF5SW5kZXgge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLmZpcnN0RGF5T2ZXZWVrID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZUlkKCk7XHJcbiAgICAgIHJldHVybiBsb2NhbGUgJiYgWyd6aC1jbicsICd6aC10dyddLmluZGV4T2YobG9jYWxlLnRvTG93ZXJDYXNlKCkpID4gLTEgPyAxIDogMDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5maXJzdERheU9mV2VlaztcclxuICB9XHJcblxyXG4gIGZvcm1hdChkYXRlOiBEYXRlIHwgbnVsbCwgZm9ybWF0U3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGRhdGUgPyBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdFN0ciwgdGhpcy5pMThuLmdldExvY2FsZUlkKCkpISA6ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29tcGF0aWJsZSB0cmFuc2xhdGUgdGhlIG1vbWVudC1saWtlIGZvcm1hdCBwYXR0ZXJuIHRvIGFuZ3VsYXIncyBwYXR0ZXJuXHJcbiAgICogV2h5PyBGb3Igbm93LCB3ZSBuZWVkIHRvIHN1cHBvcnQgdGhlIGV4aXN0aW5nIGxhbmd1YWdlIGZvcm1hdHMgaW4gQW50RCwgYW5kIEFudEQgdXNlcyB0aGUgZGVmYXVsdCB0ZW1wb3JhbCBzeW50YXguXHJcbiAgICpcclxuICAgKiBUT0RPOiBjb21wYXJlIGFuZCBjb21wbGV0ZSBhbGwgZm9ybWF0IHBhdHRlcm5zXHJcbiAgICogRWFjaCBmb3JtYXQgZG9jcyBhcyBiZWxvdzpcclxuICAgKiBAbGluayBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvZGlzcGxheWluZy9mb3JtYXQvXHJcbiAgICogQGxpbmsgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb21tb24vRGF0ZVBpcGUjZGVzY3JpcHRpb25cclxuICAgKiBAcGFyYW0gZm9ybWF0IGlucHV0IGZvcm1hdCBwYXR0ZXJuXHJcbiAgICovXHJcbiAgdHJhbnNDb21wYXRGb3JtYXQoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZm9ybWF0ICYmXHJcbiAgICAgIGZvcm1hdFxyXG4gICAgICAgIC5yZXBsYWNlKC9ZL2csICd5JykgLy8gb25seSBzdXBwb3J0IHksIHl5LCB5eXksIHl5eXlcclxuICAgICAgICAucmVwbGFjZSgvRC9nLCAnZCcpXHJcbiAgICApOyAvLyBkLCBkZCByZXByZXNlbnQgb2YgRCwgREQgZm9yIG1vbWVudGpzLCBvdGhlcnMgYXJlIG5vdCBzdXBwb3J0XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCB0eXBlIFdlZWtEYXlJbmRleCA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDY7XHJcbiJdfQ==