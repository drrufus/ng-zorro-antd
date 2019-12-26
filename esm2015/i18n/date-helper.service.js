/**
 * @fileoverview added by tsickle
 * Generated from: date-helper.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    const i18n = injector.get(NzI18nService);
    return i18n.getDateLocale() ? new DateHelperByDateFns(i18n, config) : new DateHelperByDatePipe(i18n, config);
}
/**
 * Abstract DateHelperService(Token via Class)
 * Compatibility: compact for original usage by default which using DatePipe
 * @abstract
 */
export class DateHelperService {
    // Indicate whether this service is rely on DatePipe
    /**
     * @param {?} i18n
     * @param {?} config
     */
    constructor(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.relyOnDatePipe = this instanceof DateHelperByDatePipe; // Indicate whether this service is rely on DatePipe
        this.config = mergeDateConfig(this.config);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseDate(text) {
        if (!text) {
            return;
        }
        return fnsParse(text);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseTime(text) {
        if (!text) {
            return;
        }
        return fnsParse(`1970-01-01 ${text}`);
    }
}
DateHelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
                useFactory: DATE_HELPER_SERVICE_FACTORY,
                deps: [Injector, [new Optional(), NZ_DATE_CONFIG]]
            },] }
];
/** @nocollapse */
DateHelperService.ctorParameters = () => [
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
];
/** @nocollapse */ DateHelperService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DateHelperService_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperService, providedIn: "root" });
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
export class DateHelperByDateFns extends DateHelperService {
    /**
     * @param {?} date
     * @return {?}
     */
    getISOWeek(date) {
        return fnsGetISOWeek(date);
    }
    // TODO: Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // when v2.0 is ready: https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        return this.config.firstDayOfWeek == null ? 1 : this.config.firstDayOfWeek;
    }
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param {?} date Date
     * @param {?} formatStr format string
     * @return {?}
     */
    format(date, formatStr) {
        return date ? fnsFormat(date, formatStr, { locale: this.i18n.getDateLocale() }) : '';
    }
}
/** @nocollapse */ DateHelperByDateFns.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DateHelperByDateFns_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperByDateFns, providedIn: "root" });
/**
 * DateHelper that handles date formats with angular's date-pipe
 *
 * @see https://github.com/NG-ZORRO/ng-zorro-antd/issues/2406 - DatePipe may cause non-standard week bug, see:
 *
 */
export class DateHelperByDatePipe extends DateHelperService {
    /**
     * @param {?} i18n
     * @param {?} config
     */
    constructor(i18n, config) {
        super(i18n, config);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getISOWeek(date) {
        return +this.format(date, 'w');
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        if (this.config.firstDayOfWeek === undefined) {
            /** @type {?} */
            const locale = this.i18n.getLocaleId();
            return locale && ['zh-cn', 'zh-tw'].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
        }
        return this.config.firstDayOfWeek;
    }
    /**
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    format(date, formatStr) {
        return date ? (/** @type {?} */ (formatDate(date, formatStr, this.i18n.getLocaleId()))) : '';
    }
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
    transCompatFormat(format) {
        return (format &&
            format
                .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
                .replace(/D/g, 'd')); // d, dd represent of D, DD for momentjs, others are not support
    }
}
/** @nocollapse */
DateHelperByDatePipe.ctorParameters = () => [
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
];
/** @nocollapse */ DateHelperByDatePipe.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DateHelperByDatePipe_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperByDatePipe, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaTE4bi8iLCJzb3VyY2VzIjpbImRhdGUtaGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxhQUFhLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxRQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7QUFFbEQsTUFBTSxVQUFVLDJCQUEyQixDQUFDLFFBQWtCLEVBQUUsTUFBb0I7O1VBQzVFLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUN4QyxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksb0JBQW9CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQy9HLENBQUM7Ozs7OztBQVdELE1BQU0sT0FBZ0IsaUJBQWlCOzs7Ozs7SUFHckMsWUFBc0IsSUFBbUIsRUFBZ0QsTUFBb0I7UUFBdkYsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFnRCxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBRjdHLG1CQUFjLEdBQVksSUFBSSxZQUFZLG9CQUFvQixDQUFDLENBQUMsb0RBQW9EO1FBR2xILElBQUksQ0FBQyxNQUFN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QUNILE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsZ0NBQWdDO2lCQUNuRCxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUN0QixDQUFDLENBQUMsZ0VBQWdFO0lBQ3JFLENBQUM7Ozs7WUEvR00sYUFBYTs0Q0EwRWMsUUFBUSxZQUFJLE1BQU0sU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGZuc0Zvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xyXG5pbXBvcnQgZm5zR2V0SVNPV2VlayBmcm9tICdkYXRlLWZucy9nZXRfaXNvX3dlZWsnO1xyXG5pbXBvcnQgZm5zUGFyc2UgZnJvbSAnZGF0ZS1mbnMvcGFyc2UnO1xyXG5cclxuaW1wb3J0IHsgbWVyZ2VEYXRlQ29uZmlnLCBOekRhdGVDb25maWcsIE5aX0RBVEVfQ09ORklHIH0gZnJvbSAnLi9kYXRlLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuL256LWkxOG4uc2VydmljZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gREFURV9IRUxQRVJfU0VSVklDRV9GQUNUT1JZKGluamVjdG9yOiBJbmplY3RvciwgY29uZmlnOiBOekRhdGVDb25maWcpOiBEYXRlSGVscGVyU2VydmljZSB7XHJcbiAgY29uc3QgaTE4biA9IGluamVjdG9yLmdldChOekkxOG5TZXJ2aWNlKTtcclxuICByZXR1cm4gaTE4bi5nZXREYXRlTG9jYWxlKCkgPyBuZXcgRGF0ZUhlbHBlckJ5RGF0ZUZucyhpMThuLCBjb25maWcpIDogbmV3IERhdGVIZWxwZXJCeURhdGVQaXBlKGkxOG4sIGNvbmZpZyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBYnN0cmFjdCBEYXRlSGVscGVyU2VydmljZShUb2tlbiB2aWEgQ2xhc3MpXHJcbiAqIENvbXBhdGliaWxpdHk6IGNvbXBhY3QgZm9yIG9yaWdpbmFsIHVzYWdlIGJ5IGRlZmF1bHQgd2hpY2ggdXNpbmcgRGF0ZVBpcGVcclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbiAgdXNlRmFjdG9yeTogREFURV9IRUxQRVJfU0VSVklDRV9GQUNUT1JZLFxyXG4gIGRlcHM6IFtJbmplY3RvciwgW25ldyBPcHRpb25hbCgpLCBOWl9EQVRFX0NPTkZJR11dXHJcbn0pXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRlSGVscGVyU2VydmljZSB7XHJcbiAgcmVseU9uRGF0ZVBpcGU6IGJvb2xlYW4gPSB0aGlzIGluc3RhbmNlb2YgRGF0ZUhlbHBlckJ5RGF0ZVBpcGU7IC8vIEluZGljYXRlIHdoZXRoZXIgdGhpcyBzZXJ2aWNlIGlzIHJlbHkgb24gRGF0ZVBpcGVcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGkxOG46IE56STE4blNlcnZpY2UsIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfREFURV9DT05GSUcpIHByb3RlY3RlZCBjb25maWc6IE56RGF0ZUNvbmZpZykge1xyXG4gICAgdGhpcy5jb25maWcgPSBtZXJnZURhdGVDb25maWcodGhpcy5jb25maWcpO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgZ2V0SVNPV2VlayhkYXRlOiBEYXRlKTogbnVtYmVyO1xyXG4gIGFic3RyYWN0IGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleDtcclxuICBhYnN0cmFjdCBmb3JtYXQoZGF0ZTogRGF0ZSwgZm9ybWF0U3RyOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gIHBhcnNlRGF0ZSh0ZXh0OiBzdHJpbmcpOiBEYXRlIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghdGV4dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm5zUGFyc2UodGV4dCk7XHJcbiAgfVxyXG5cclxuICBwYXJzZVRpbWUodGV4dDogc3RyaW5nKTogRGF0ZSB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoIXRleHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZuc1BhcnNlKGAxOTcwLTAxLTAxICR7dGV4dH1gKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEYXRlSGVscGVyIHRoYXQgaGFuZGxlcyBkYXRlIGZvcm1hdHMgd2l0aCBkYXRlLWZuc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERhdGVIZWxwZXJCeURhdGVGbnMgZXh0ZW5kcyBEYXRlSGVscGVyU2VydmljZSB7XHJcbiAgZ2V0SVNPV2VlayhkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBmbnNHZXRJU09XZWVrKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogVXNlIGRhdGUtZm5zJ3MgXCJ3ZWVrU3RhcnRzT25cIiB0byBzdXBwb3J0IGRpZmZlcmVudCBsb2NhbGUgd2hlbiBcImNvbmZpZy5maXJzdERheU9mV2Vla1wiIGlzIG51bGxcclxuICAvLyB3aGVuIHYyLjAgaXMgcmVhZHk6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL3YyLjAuMC1hbHBoYS4yNy9zcmMvbG9jYWxlL2VuLVVTL2luZGV4LmpzI0wyM1xyXG4gIGdldEZpcnN0RGF5T2ZXZWVrKCk6IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpcnN0RGF5T2ZXZWVrID09IG51bGwgPyAxIDogdGhpcy5jb25maWcuZmlyc3REYXlPZldlZWs7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3JtYXQgYSBkYXRlXHJcbiAgICogQHNlZSBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2Zvcm1hdCNkZXNjcmlwdGlvblxyXG4gICAqIEBwYXJhbSBkYXRlIERhdGVcclxuICAgKiBAcGFyYW0gZm9ybWF0U3RyIGZvcm1hdCBzdHJpbmdcclxuICAgKi9cclxuICBmb3JtYXQoZGF0ZTogRGF0ZSB8IG51bGwsIGZvcm1hdFN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBkYXRlID8gZm5zRm9ybWF0KGRhdGUsIGZvcm1hdFN0ciwgeyBsb2NhbGU6IHRoaXMuaTE4bi5nZXREYXRlTG9jYWxlKCkgfSkgOiAnJztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEYXRlSGVscGVyIHRoYXQgaGFuZGxlcyBkYXRlIGZvcm1hdHMgd2l0aCBhbmd1bGFyJ3MgZGF0ZS1waXBlXHJcbiAqXHJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzI0MDYgLSBEYXRlUGlwZSBtYXkgY2F1c2Ugbm9uLXN0YW5kYXJkIHdlZWsgYnVnLCBzZWU6XHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGF0ZUhlbHBlckJ5RGF0ZVBpcGUgZXh0ZW5kcyBEYXRlSGVscGVyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoaTE4bjogTnpJMThuU2VydmljZSwgQE9wdGlvbmFsKCkgQEluamVjdChOWl9EQVRFX0NPTkZJRykgY29uZmlnOiBOekRhdGVDb25maWcpIHtcclxuICAgIHN1cGVyKGkxOG4sIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuICt0aGlzLmZvcm1hdChkYXRlLCAndycpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3REYXlPZldlZWsoKTogV2Vla0RheUluZGV4IHtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5maXJzdERheU9mV2VlayA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVJZCgpO1xyXG4gICAgICByZXR1cm4gbG9jYWxlICYmIFsnemgtY24nLCAnemgtdHcnXS5pbmRleE9mKGxvY2FsZS50b0xvd2VyQ2FzZSgpKSA+IC0xID8gMSA6IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZmlyc3REYXlPZldlZWs7XHJcbiAgfVxyXG5cclxuICBmb3JtYXQoZGF0ZTogRGF0ZSB8IG51bGwsIGZvcm1hdFN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBkYXRlID8gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRTdHIsIHRoaXMuaTE4bi5nZXRMb2NhbGVJZCgpKSEgOiAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbXBhdGlibGUgdHJhbnNsYXRlIHRoZSBtb21lbnQtbGlrZSBmb3JtYXQgcGF0dGVybiB0byBhbmd1bGFyJ3MgcGF0dGVyblxyXG4gICAqIFdoeT8gRm9yIG5vdywgd2UgbmVlZCB0byBzdXBwb3J0IHRoZSBleGlzdGluZyBsYW5ndWFnZSBmb3JtYXRzIGluIEFudEQsIGFuZCBBbnREIHVzZXMgdGhlIGRlZmF1bHQgdGVtcG9yYWwgc3ludGF4LlxyXG4gICAqXHJcbiAgICogVE9ETzogY29tcGFyZSBhbmQgY29tcGxldGUgYWxsIGZvcm1hdCBwYXR0ZXJuc1xyXG4gICAqIEVhY2ggZm9ybWF0IGRvY3MgYXMgYmVsb3c6XHJcbiAgICogQGxpbmsgaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2Rpc3BsYXlpbmcvZm9ybWF0L1xyXG4gICAqIEBsaW5rIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29tbW9uL0RhdGVQaXBlI2Rlc2NyaXB0aW9uXHJcbiAgICogQHBhcmFtIGZvcm1hdCBpbnB1dCBmb3JtYXQgcGF0dGVyblxyXG4gICAqL1xyXG4gIHRyYW5zQ29tcGF0Rm9ybWF0KGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGZvcm1hdCAmJlxyXG4gICAgICBmb3JtYXRcclxuICAgICAgICAucmVwbGFjZSgvWS9nLCAneScpIC8vIG9ubHkgc3VwcG9ydCB5LCB5eSwgeXl5LCB5eXl5XHJcbiAgICAgICAgLnJlcGxhY2UoL0QvZywgJ2QnKVxyXG4gICAgKTsgLy8gZCwgZGQgcmVwcmVzZW50IG9mIEQsIEREIGZvciBtb21lbnRqcywgb3RoZXJzIGFyZSBub3Qgc3VwcG9ydFxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgdHlwZSBXZWVrRGF5SW5kZXggPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xyXG4iXX0=