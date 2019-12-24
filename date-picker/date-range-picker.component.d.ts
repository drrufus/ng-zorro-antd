/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { CandyDate, FunctionProp, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
import { DisabledTimeFn, PanelMode, PresetRanges } from './standard-types';
import * as i0 from "@angular/core";
export declare class DateRangePickerComponent extends AbstractPickerComponent implements OnInit, OnChanges {
    showWeek: boolean;
    nzDateRender: FunctionProp<TemplateRef<Date> | string>;
    nzDisabledTime: DisabledTimeFn;
    nzRenderExtraFooter: FunctionProp<TemplateRef<void> | string>;
    nzShowToday: boolean;
    nzMode: PanelMode | PanelMode[];
    nzRanges: PresetRanges;
    readonly nzOnPanelChange: EventEmitter<"decade" | "year" | "month" | "date" | "time" | PanelMode[]>;
    readonly nzOnCalendarChange: EventEmitter<Date[]>;
    private _showTime;
    nzShowTime: object | boolean;
    readonly nzOnOk: EventEmitter<Date | Date[] | null>;
    readonly realShowToday: boolean;
    pickerStyle: object;
    extraFooter: TemplateRef<void> | string;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
     */
    onValueChange(value: CandyDate, isEnter?: boolean): void;
    onCalendarChange(value: CandyDate[]): void;
    onResultOk(): void;
    onOpenChange(open: boolean): void;
    private setFixedPickerStyle;
    static ɵfac: i0.ɵɵFactoryDef<DateRangePickerComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DateRangePickerComponent, "ng-component", never, { 'nzDateRender': "nzDateRender", 'nzDisabledTime': "nzDisabledTime", 'nzRenderExtraFooter': "nzRenderExtraFooter", 'nzShowToday': "nzShowToday", 'nzMode': "nzMode", 'nzRanges': "nzRanges", 'nzShowTime': "nzShowTime" }, { 'nzOnPanelChange': "nzOnPanelChange", 'nzOnCalendarChange': "nzOnCalendarChange", 'nzOnOk': "nzOnOk" }, never>;
}
