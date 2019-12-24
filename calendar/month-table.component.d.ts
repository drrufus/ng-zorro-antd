/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export declare class MonthTableComponent implements OnChanges {
    private dateHelper;
    value: CandyDate;
    prefixCls: string;
    monthCellRender: TemplateRef<{
        $implicit: Date;
    }>;
    monthFullCellRender: TemplateRef<{
        $implicit: Date;
    }>;
    readonly valueChange: EventEmitter<CandyDate>;
    disabledDate: (date: Date) => boolean;
    panelMonths: PanelMonthData[][];
    constructor(dateHelper: DateHelperService);
    ngOnChanges(changes: SimpleChanges): void;
    trackYear(_index: number): number;
    trackPanelMonth(_index: number, monthData: PanelMonthData): string;
    private render;
    private makePanelMonths;
    private chooseMonth;
    static ɵfac: i0.ɵɵFactoryDef<MonthTableComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MonthTableComponent, "month-table", ["monthTable"], { 'value': "value", 'prefixCls': "prefixCls", 'monthCellRender': "monthCellRender", 'monthFullCellRender': "monthFullCellRender", 'disabledDate': "disabledDate" }, { 'valueChange': "valueChange" }, never>;
}
export interface PanelMonthData {
    disabled: boolean;
    content: string;
    month: number;
    title: string;
    classMap: object | null;
    onClick: VoidFunction | null;
    value: Date;
}
