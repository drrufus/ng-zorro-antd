/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injector } from '@angular/core';
import { NzDateConfig } from './date-config';
import { NzI18nService } from './nz-i18n.service';
import * as ɵngcc0 from '@angular/core';
export declare function DATE_HELPER_SERVICE_FACTORY(injector: Injector, config: NzDateConfig): DateHelperService;
/**
 * Abstract DateHelperService(Token via Class)
 * Compatibility: compact for original usage by default which using DatePipe
 */
export declare abstract class DateHelperService {
    protected i18n: NzI18nService;
    protected config: NzDateConfig;
    relyOnDatePipe: boolean;
    constructor(i18n: NzI18nService, config: NzDateConfig);
    abstract getISOWeek(date: Date): number;
    abstract getFirstDayOfWeek(): WeekDayIndex;
    abstract format(date: Date, formatStr: string): string;
    parseDate(text: string): Date | undefined;
    parseTime(text: string): Date | undefined;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DateHelperService, [null, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DateHelperService>;
}
/**
 * DateHelper that handles date formats with date-fns
 */
export declare class DateHelperByDateFns extends DateHelperService {
    getISOWeek(date: Date): number;
    getFirstDayOfWeek(): 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param date Date
     * @param formatStr format string
     */
    format(date: Date | null, formatStr: string): string;
}
/**
 * DateHelper that handles date formats with angular's date-pipe
 *
 * @see https://github.com/NG-ZORRO/ng-zorro-antd/issues/2406 - DatePipe may cause non-standard week bug, see:
 *
 */
export declare class DateHelperByDatePipe extends DateHelperService {
    constructor(i18n: NzI18nService, config: NzDateConfig);
    getISOWeek(date: Date): number;
    getFirstDayOfWeek(): WeekDayIndex;
    format(date: Date | null, formatStr: string): string;
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
    transCompatFormat(format: string): string;
}
export declare type WeekDayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxwZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJkYXRlLWhlbHBlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpEYXRlQ29uZmlnIH0gZnJvbSAnLi9kYXRlLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuL256LWkxOG4uc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERBVEVfSEVMUEVSX1NFUlZJQ0VfRkFDVE9SWShpbmplY3RvcjogSW5qZWN0b3IsIGNvbmZpZzogTnpEYXRlQ29uZmlnKTogRGF0ZUhlbHBlclNlcnZpY2U7XHJcbi8qKlxyXG4gKiBBYnN0cmFjdCBEYXRlSGVscGVyU2VydmljZShUb2tlbiB2aWEgQ2xhc3MpXHJcbiAqIENvbXBhdGliaWxpdHk6IGNvbXBhY3QgZm9yIG9yaWdpbmFsIHVzYWdlIGJ5IGRlZmF1bHQgd2hpY2ggdXNpbmcgRGF0ZVBpcGVcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIERhdGVIZWxwZXJTZXJ2aWNlIHtcclxuICAgIHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlO1xyXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogTnpEYXRlQ29uZmlnO1xyXG4gICAgcmVseU9uRGF0ZVBpcGU6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihpMThuOiBOekkxOG5TZXJ2aWNlLCBjb25maWc6IE56RGF0ZUNvbmZpZyk7XHJcbiAgICBhYnN0cmFjdCBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXI7XHJcbiAgICBhYnN0cmFjdCBnZXRGaXJzdERheU9mV2VlaygpOiBXZWVrRGF5SW5kZXg7XHJcbiAgICBhYnN0cmFjdCBmb3JtYXQoZGF0ZTogRGF0ZSwgZm9ybWF0U3RyOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBwYXJzZURhdGUodGV4dDogc3RyaW5nKTogRGF0ZSB8IHVuZGVmaW5lZDtcclxuICAgIHBhcnNlVGltZSh0ZXh0OiBzdHJpbmcpOiBEYXRlIHwgdW5kZWZpbmVkO1xyXG59XHJcbi8qKlxyXG4gKiBEYXRlSGVscGVyIHRoYXQgaGFuZGxlcyBkYXRlIGZvcm1hdHMgd2l0aCBkYXRlLWZuc1xyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGF0ZUhlbHBlckJ5RGF0ZUZucyBleHRlbmRzIERhdGVIZWxwZXJTZXJ2aWNlIHtcclxuICAgIGdldElTT1dlZWsoZGF0ZTogRGF0ZSk6IG51bWJlcjtcclxuICAgIGdldEZpcnN0RGF5T2ZXZWVrKCk6IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDY7XHJcbiAgICAvKipcclxuICAgICAqIEZvcm1hdCBhIGRhdGVcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9mb3JtYXQjZGVzY3JpcHRpb25cclxuICAgICAqIEBwYXJhbSBkYXRlIERhdGVcclxuICAgICAqIEBwYXJhbSBmb3JtYXRTdHIgZm9ybWF0IHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBmb3JtYXQoZGF0ZTogRGF0ZSB8IG51bGwsIGZvcm1hdFN0cjogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiBEYXRlSGVscGVyIHRoYXQgaGFuZGxlcyBkYXRlIGZvcm1hdHMgd2l0aCBhbmd1bGFyJ3MgZGF0ZS1waXBlXHJcbiAqXHJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzI0MDYgLSBEYXRlUGlwZSBtYXkgY2F1c2Ugbm9uLXN0YW5kYXJkIHdlZWsgYnVnLCBzZWU6XHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEYXRlSGVscGVyQnlEYXRlUGlwZSBleHRlbmRzIERhdGVIZWxwZXJTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UsIGNvbmZpZzogTnpEYXRlQ29uZmlnKTtcclxuICAgIGdldElTT1dlZWsoZGF0ZTogRGF0ZSk6IG51bWJlcjtcclxuICAgIGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleDtcclxuICAgIGZvcm1hdChkYXRlOiBEYXRlIHwgbnVsbCwgZm9ybWF0U3RyOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIENvbXBhdGlibGUgdHJhbnNsYXRlIHRoZSBtb21lbnQtbGlrZSBmb3JtYXQgcGF0dGVybiB0byBhbmd1bGFyJ3MgcGF0dGVyblxyXG4gICAgICogV2h5PyBGb3Igbm93LCB3ZSBuZWVkIHRvIHN1cHBvcnQgdGhlIGV4aXN0aW5nIGxhbmd1YWdlIGZvcm1hdHMgaW4gQW50RCwgYW5kIEFudEQgdXNlcyB0aGUgZGVmYXVsdCB0ZW1wb3JhbCBzeW50YXguXHJcbiAgICAgKlxyXG4gICAgICogVE9ETzogY29tcGFyZSBhbmQgY29tcGxldGUgYWxsIGZvcm1hdCBwYXR0ZXJuc1xyXG4gICAgICogRWFjaCBmb3JtYXQgZG9jcyBhcyBiZWxvdzpcclxuICAgICAqIEBsaW5rIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9kaXNwbGF5aW5nL2Zvcm1hdC9cclxuICAgICAqIEBsaW5rIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29tbW9uL0RhdGVQaXBlI2Rlc2NyaXB0aW9uXHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0IGlucHV0IGZvcm1hdCBwYXR0ZXJuXHJcbiAgICAgKi9cclxuICAgIHRyYW5zQ29tcGF0Rm9ybWF0KGZvcm1hdDogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgV2Vla0RheUluZGV4ID0gMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNjtcclxuIl19