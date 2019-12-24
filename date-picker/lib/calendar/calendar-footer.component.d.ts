/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, TemplateRef } from '@angular/core';
import { CandyDate, isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export declare class CalendarFooterComponent {
    locale: NzCalendarI18nInterface;
    showToday: boolean;
    hasTimePicker: boolean;
    isRange: boolean;
    showTimePicker: boolean;
    readonly showTimePickerChange: EventEmitter<boolean>;
    timePickerDisabled: boolean;
    okDisabled: boolean;
    disabledDate: (d: Date) => boolean;
    extraFooter: TemplateRef<void> | string;
    rangeQuickSelector: TemplateRef<void>;
    readonly clickOk: EventEmitter<void>;
    readonly clickToday: EventEmitter<CandyDate>;
    prefixCls: string;
    isTemplateRef: typeof isTemplateRef;
    isNonEmptyString: typeof isNonEmptyString;
    static ɵfac: i0.ɵɵFactoryDef<CalendarFooterComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CalendarFooterComponent, "calendar-footer", ["calendarFooter"], { 'locale': "locale", 'showToday': "showToday", 'hasTimePicker': "hasTimePicker", 'isRange': "isRange", 'showTimePicker': "showTimePicker", 'timePickerDisabled': "timePickerDisabled", 'okDisabled': "okDisabled", 'disabledDate': "disabledDate", 'extraFooter': "extraFooter", 'rangeQuickSelector': "rangeQuickSelector" }, { 'showTimePickerChange': "showTimePickerChange", 'clickOk': "clickOk", 'clickToday': "clickToday" }, never>;
}
