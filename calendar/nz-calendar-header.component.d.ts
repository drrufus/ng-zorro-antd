/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnInit } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService as I18n } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
export declare class NzCalendarHeaderComponent implements OnInit {
    private i18n;
    private dateHelper;
    mode: 'month' | 'year';
    fullscreen: boolean;
    readonly modeChange: EventEmitter<'month' | 'year'>;
    activeDate: CandyDate;
    readonly yearChange: EventEmitter<number>;
    readonly monthChange: EventEmitter<number>;
    yearOffset: number;
    yearTotal: number;
    years: Array<{
        label: string;
        value: number;
    }>;
    months: Array<{
        label: string;
        value: number;
    }>;
    readonly activeYear: number;
    readonly activeMonth: number;
    readonly size: string;
    readonly yearTypeText: string;
    readonly monthTypeText: string;
    constructor(i18n: I18n, dateHelper: DateHelperService);
    ngOnInit(): void;
    updateYear(year: number): void;
    private setUpYears;
    private setUpMonths;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCalendarHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCalendarHeaderComponent, "nz-calendar-header", ["nzCalendarHeader"], { "mode": "mode"; "fullscreen": "fullscreen"; "activeDate": "activeDate"; }, { "modeChange": "modeChange"; "yearChange": "yearChange"; "monthChange": "monthChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgYXMgSTE4biB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBpMThuO1xyXG4gICAgcHJpdmF0ZSBkYXRlSGVscGVyO1xyXG4gICAgbW9kZTogJ21vbnRoJyB8ICd5ZWFyJztcclxuICAgIGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBtb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8J21vbnRoJyB8ICd5ZWFyJz47XHJcbiAgICBhY3RpdmVEYXRlOiBDYW5keURhdGU7XHJcbiAgICByZWFkb25seSB5ZWFyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuICAgIHJlYWRvbmx5IG1vbnRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuICAgIHllYXJPZmZzZXQ6IG51bWJlcjtcclxuICAgIHllYXJUb3RhbDogbnVtYmVyO1xyXG4gICAgeWVhcnM6IEFycmF5PHtcclxuICAgICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICB9PjtcclxuICAgIG1vbnRoczogQXJyYXk8e1xyXG4gICAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgICAgdmFsdWU6IG51bWJlcjtcclxuICAgIH0+O1xyXG4gICAgcmVhZG9ubHkgYWN0aXZlWWVhcjogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYWN0aXZlTW9udGg6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNpemU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IHllYXJUeXBlVGV4dDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgbW9udGhUeXBlVGV4dDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaTE4bjogSTE4biwgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIHVwZGF0ZVllYXIoeWVhcjogbnVtYmVyKTogdm9pZDtcclxuICAgIHByaXZhdGUgc2V0VXBZZWFycztcclxuICAgIHByaXZhdGUgc2V0VXBNb250aHM7XHJcbn1cclxuIl19