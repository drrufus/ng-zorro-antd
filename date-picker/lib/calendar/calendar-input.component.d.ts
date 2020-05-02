/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService, NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarInputComponent implements OnInit {
    private dateHelper;
    locale: NzCalendarI18nInterface;
    format: string;
    placeholder: string;
    disabledDate: (d: Date) => boolean;
    value: CandyDate;
    autoFocus: boolean;
    inputRef: ElementRef;
    readonly valueChange: EventEmitter<{
        date: CandyDate;
        isEnter: boolean;
    }>;
    prefixCls: string;
    invalidInputClass: string;
    constructor(dateHelper: DateHelperService);
    ngOnInit(): void;
    onInputKeyup(event: KeyboardEvent, isEnter?: boolean): void;
    toReadableInput(value: CandyDate): string;
    private checkValidInputDate;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarInputComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarInputComponent, "calendar-input", ["calendarInput"], { "value": "value"; "locale": "locale"; "format": "format"; "placeholder": "placeholder"; "disabledDate": "disabledDate"; "autoFocus": "autoFocus"; }, { "valueChange": "valueChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaW5wdXQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhbGVuZGFyLWlucHV0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbGVuZGFySW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBkYXRlSGVscGVyO1xyXG4gICAgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICAgIGZvcm1hdDogc3RyaW5nO1xyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgICB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gICAgYXV0b0ZvY3VzOiBib29sZWFuO1xyXG4gICAgaW5wdXRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICByZWFkb25seSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHtcclxuICAgICAgICBkYXRlOiBDYW5keURhdGU7XHJcbiAgICAgICAgaXNFbnRlcjogYm9vbGVhbjtcclxuICAgIH0+O1xyXG4gICAgcHJlZml4Q2xzOiBzdHJpbmc7XHJcbiAgICBpbnZhbGlkSW5wdXRDbGFzczogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG9uSW5wdXRLZXl1cChldmVudDogS2V5Ym9hcmRFdmVudCwgaXNFbnRlcj86IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgdG9SZWFkYWJsZUlucHV0KHZhbHVlOiBDYW5keURhdGUpOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNoZWNrVmFsaWRJbnB1dERhdGU7XHJcbn1cclxuIl19