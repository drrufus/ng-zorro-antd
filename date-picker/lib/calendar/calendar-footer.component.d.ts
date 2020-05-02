/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, TemplateRef } from '@angular/core';
import { isNonEmptyString, isTemplateRef, CandyDate } from 'ng-zorro-antd/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarFooterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarFooterComponent, "calendar-footer", ["calendarFooter"], { "showToday": "showToday"; "hasTimePicker": "hasTimePicker"; "isRange": "isRange"; "showTimePicker": "showTimePicker"; "timePickerDisabled": "timePickerDisabled"; "okDisabled": "okDisabled"; "locale": "locale"; "disabledDate": "disabledDate"; "extraFooter": "extraFooter"; "rangeQuickSelector": "rangeQuickSelector"; }, { "showTimePickerChange": "showTimePickerChange"; "clickOk": "clickOk"; "clickToday": "clickToday"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYWxlbmRhci1mb290ZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc05vbkVtcHR5U3RyaW5nLCBpc1RlbXBsYXRlUmVmLCBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbGVuZGFyRm9vdGVyQ29tcG9uZW50IHtcclxuICAgIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgICBzaG93VG9kYXk6IGJvb2xlYW47XHJcbiAgICBoYXNUaW1lUGlja2VyOiBib29sZWFuO1xyXG4gICAgaXNSYW5nZTogYm9vbGVhbjtcclxuICAgIHNob3dUaW1lUGlja2VyOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgc2hvd1RpbWVQaWNrZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIHRpbWVQaWNrZXJEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG9rRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gICAgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xyXG4gICAgcmFuZ2VRdWlja1NlbGVjdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IGNsaWNrT2s6IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IGNsaWNrVG9kYXk6IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+O1xyXG4gICAgcHJlZml4Q2xzOiBzdHJpbmc7XHJcbiAgICBpc1RlbXBsYXRlUmVmOiB0eXBlb2YgaXNUZW1wbGF0ZVJlZjtcclxuICAgIGlzTm9uRW1wdHlTdHJpbmc6IHR5cGVvZiBpc05vbkVtcHR5U3RyaW5nO1xyXG59XHJcbiJdfQ==