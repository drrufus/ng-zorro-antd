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
export declare class DecadePanelComponent implements OnChanges {
    locale: NzCalendarI18nInterface;
    value: CandyDate;
    readonly valueChange: EventEmitter<CandyDate>;
    readonly startYear: number;
    readonly endYear: number;
    prefixCls: string;
    panelDecades: PanelDecadeData[][];
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    previousCentury(): void;
    nextCentury(): void;
    trackPanelDecade(_index: number, decadeData: PanelDecadeData): string;
    private render;
    private gotoYear;
    private chooseDecade;
    private makePanelDecades;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DecadePanelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DecadePanelComponent, "decade-panel", ["decadePanel"], { "value": "value"; "locale": "locale"; }, { "valueChange": "valueChange"; }, never, never>;
}
export interface PanelDecadeData {
    content: string;
    title: string;
    isCurrent: boolean;
    isLowerThanStart: boolean;
    isBiggerThanEnd: boolean;
    classMap?: object | null;
    onClick: VoidFunction | null;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLXBhbmVsLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJkZWNhZGUtcGFuZWwuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEZWNhZGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gICAgdmFsdWU6IENhbmR5RGF0ZTtcclxuICAgIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPjtcclxuICAgIHJlYWRvbmx5IHN0YXJ0WWVhcjogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZW5kWWVhcjogbnVtYmVyO1xyXG4gICAgcHJlZml4Q2xzOiBzdHJpbmc7XHJcbiAgICBwYW5lbERlY2FkZXM6IFBhbmVsRGVjYWRlRGF0YVtdW107XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBwcmV2aW91c0NlbnR1cnkoKTogdm9pZDtcclxuICAgIG5leHRDZW50dXJ5KCk6IHZvaWQ7XHJcbiAgICB0cmFja1BhbmVsRGVjYWRlKF9pbmRleDogbnVtYmVyLCBkZWNhZGVEYXRhOiBQYW5lbERlY2FkZURhdGEpOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlbmRlcjtcclxuICAgIHByaXZhdGUgZ290b1llYXI7XHJcbiAgICBwcml2YXRlIGNob29zZURlY2FkZTtcclxuICAgIHByaXZhdGUgbWFrZVBhbmVsRGVjYWRlcztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbmVsRGVjYWRlRGF0YSB7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaXNDdXJyZW50OiBib29sZWFuO1xyXG4gICAgaXNMb3dlclRoYW5TdGFydDogYm9vbGVhbjtcclxuICAgIGlzQmlnZ2VyVGhhbkVuZDogYm9vbGVhbjtcclxuICAgIGNsYXNzTWFwPzogb2JqZWN0IHwgbnVsbDtcclxuICAgIG9uQ2xpY2s6IFZvaWRGdW5jdGlvbiB8IG51bGw7XHJcbn1cclxuIl19