/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter } from '@angular/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export declare class TimePickerButtonComponent {
    locale: NzCalendarI18nInterface;
    timePickerDisabled: boolean;
    showTimePicker: boolean;
    readonly showTimePickerChange: EventEmitter<boolean>;
    prefixCls: string;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<TimePickerButtonComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TimePickerButtonComponent, "time-picker-button", ["timePickerButton"], { 'locale': "locale", 'timePickerDisabled': "timePickerDisabled", 'showTimePicker': "showTimePicker" }, { 'showTimePickerChange': "showTimePickerChange" }, never>;
}
