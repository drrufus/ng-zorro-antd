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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MonthTableComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MonthTableComponent, "month-table", ["monthTable"], { "value": "value"; "prefixCls": "prefixCls"; "monthCellRender": "monthCellRender"; "monthFullCellRender": "monthFullCellRender"; "disabledDate": "disabledDate"; }, { "valueChange": "valueChange"; }, never, never>;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm1vbnRoLXRhYmxlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1vbnRoVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBkYXRlSGVscGVyO1xyXG4gICAgdmFsdWU6IENhbmR5RGF0ZTtcclxuICAgIHByZWZpeENsczogc3RyaW5nO1xyXG4gICAgbW9udGhDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBEYXRlO1xyXG4gICAgfT47XHJcbiAgICBtb250aEZ1bGxDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBEYXRlO1xyXG4gICAgfT47XHJcbiAgICByZWFkb25seSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT47XHJcbiAgICBkaXNhYmxlZERhdGU6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gICAgcGFuZWxNb250aHM6IFBhbmVsTW9udGhEYXRhW11bXTtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgdHJhY2tZZWFyKF9pbmRleDogbnVtYmVyKTogbnVtYmVyO1xyXG4gICAgdHJhY2tQYW5lbE1vbnRoKF9pbmRleDogbnVtYmVyLCBtb250aERhdGE6IFBhbmVsTW9udGhEYXRhKTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZW5kZXI7XHJcbiAgICBwcml2YXRlIG1ha2VQYW5lbE1vbnRocztcclxuICAgIHByaXZhdGUgY2hvb3NlTW9udGg7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQYW5lbE1vbnRoRGF0YSB7XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIG1vbnRoOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgY2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgICBvbkNsaWNrOiBWb2lkRnVuY3Rpb24gfCBudWxsO1xyXG4gICAgdmFsdWU6IERhdGU7XHJcbn1cclxuIl19