import { Injector } from '@angular/core';
import { NzDateConfig } from './date-config';
import { NzI18nService } from './nz-i18n.service';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<DateHelperService>;
    static ɵprov: i0.ɵɵInjectableDef<DateHelperService>;
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
