/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, TemplateRef } from '@angular/core';
import { CandyDate, FunctionProp } from 'ng-zorro-antd/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { DisabledDateFn, PanelMode, SupportTimeOptions } from '../../standard-types';
import * as i0 from "@angular/core";
export declare class InnerPopupComponent {
    showWeek: boolean;
    locale: NzCalendarI18nInterface;
    showTimePicker: boolean;
    timeOptions: SupportTimeOptions;
    enablePrev: boolean;
    enableNext: boolean;
    disabledDate: DisabledDateFn;
    dateRender: FunctionProp<TemplateRef<Date> | string>;
    selectedValue: CandyDate[];
    hoverValue: CandyDate[];
    panelMode: PanelMode;
    readonly panelModeChange: EventEmitter<PanelMode>;
    value: CandyDate;
    readonly headerChange: EventEmitter<CandyDate>;
    readonly selectDate: EventEmitter<CandyDate>;
    readonly selectTime: EventEmitter<CandyDate>;
    readonly dayHover: EventEmitter<CandyDate>;
    prefixCls: string;
    onSelectTime(date: Date): void;
    onSelectDate(date: CandyDate | Date): void;
    static ɵfac: i0.ɵɵFactoryDef<InnerPopupComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<InnerPopupComponent, "inner-popup", ["innerPopup"], { 'showWeek': "showWeek", 'locale': "locale", 'showTimePicker': "showTimePicker", 'timeOptions': "timeOptions", 'enablePrev': "enablePrev", 'enableNext': "enableNext", 'disabledDate': "disabledDate", 'dateRender': "dateRender", 'selectedValue': "selectedValue", 'hoverValue': "hoverValue", 'panelMode': "panelMode", 'value': "value" }, { 'panelModeChange': "panelModeChange", 'headerChange': "headerChange", 'selectDate': "selectDate", 'selectTime': "selectTime", 'dayHover': "dayHover" }, never>;
}
