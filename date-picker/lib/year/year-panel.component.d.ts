/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
export declare class YearPanelComponent implements OnChanges {
    locale: NzCalendarI18nInterface;
    value: CandyDate;
    readonly valueChange: EventEmitter<CandyDate>;
    disabledDate: (date: Date) => boolean;
    readonly decadePanelShow: EventEmitter<void>;
    readonly currentYear: number;
    readonly startYear: number;
    readonly endYear: number;
    prefixCls: string;
    panelYears: PanelYearData[][];
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    previousDecade(): void;
    nextDecade(): void;
    trackPanelYear(_index: number, yearData: PanelYearData): string;
    private render;
    private gotoYear;
    private chooseYear;
    private makePanelYears;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<YearPanelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<YearPanelComponent, "year-panel", ["yearPanel"], { "value": "value"; "locale": "locale"; "disabledDate": "disabledDate"; }, { "valueChange": "valueChange"; "decadePanelShow": "decadePanelShow"; }, never, never>;
}
export interface PanelYearData {
    disabled: boolean;
    content: string;
    year: number;
    title: string;
    isCurrent: boolean;
    isLowerThanStart: boolean;
    isBiggerThanEnd: boolean;
    classMap: object | null;
    onClick: VoidFunction | null;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1wYW5lbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsieWVhci1wYW5lbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFllYXJQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gICAgdmFsdWU6IENhbmR5RGF0ZTtcclxuICAgIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPjtcclxuICAgIGRpc2FibGVkRGF0ZTogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBkZWNhZGVQYW5lbFNob3c6IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IGN1cnJlbnRZZWFyOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBzdGFydFllYXI6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGVuZFllYXI6IG51bWJlcjtcclxuICAgIHByZWZpeENsczogc3RyaW5nO1xyXG4gICAgcGFuZWxZZWFyczogUGFuZWxZZWFyRGF0YVtdW107XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBwcmV2aW91c0RlY2FkZSgpOiB2b2lkO1xyXG4gICAgbmV4dERlY2FkZSgpOiB2b2lkO1xyXG4gICAgdHJhY2tQYW5lbFllYXIoX2luZGV4OiBudW1iZXIsIHllYXJEYXRhOiBQYW5lbFllYXJEYXRhKTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZW5kZXI7XHJcbiAgICBwcml2YXRlIGdvdG9ZZWFyO1xyXG4gICAgcHJpdmF0ZSBjaG9vc2VZZWFyO1xyXG4gICAgcHJpdmF0ZSBtYWtlUGFuZWxZZWFycztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbmVsWWVhckRhdGEge1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICB5ZWFyOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaXNDdXJyZW50OiBib29sZWFuO1xyXG4gICAgaXNMb3dlclRoYW5TdGFydDogYm9vbGVhbjtcclxuICAgIGlzQmlnZ2VyVGhhbkVuZDogYm9vbGVhbjtcclxuICAgIGNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xyXG4gICAgb25DbGljazogVm9pZEZ1bmN0aW9uIHwgbnVsbDtcclxufVxyXG4iXX0=