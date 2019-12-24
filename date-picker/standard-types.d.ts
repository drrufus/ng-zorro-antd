/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
export declare type PickerResult = PickerResultSingle | PickerResultRange;
export declare type DisabledDateFn = (d: Date) => boolean;
export declare type DisabledTimePartial = 'start' | 'end';
export declare type PanelMode = 'decade' | 'year' | 'month' | 'date' | 'time';
export declare type CompatibleValue = CandyDate | CandyDate[];
export declare type CompatibleDate = Date | Date[];
export declare type DisabledTimeFn = (current: Date | Date[], partial?: DisabledTimePartial) => DisabledTimeConfig;
export interface PickerResultSingle {
    date: CandyDate;
    dateString: string;
}
export interface PickerResultRange {
    date: CandyDate[];
    dateString: string[];
}
export interface DisabledTimeConfig {
    nzDisabledHours(): number[];
    nzDisabledMinutes(hour: number): number[];
    nzDisabledSeconds(hour: number, minute: number): number[];
}
export interface SupportTimeOptions {
    nzFormat?: string;
    nzHourStep?: number;
    nzMinuteStep?: number;
    nzSecondStep?: number;
    nzDisabledHours?(): number[];
    nzDisabledMinutes?(hour: number): number[];
    nzDisabledSeconds?(hour: number, minute: number): number[];
    nzHideDisabledOptions?: boolean;
    nzDefaultOpenValue?: Date;
    nzAddOn?: TemplateRef<void>;
}
export interface PresetRanges {
    [key: string]: Date[] | (() => Date[]);
}
