/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService, NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
export declare class TodayButtonComponent implements OnChanges {
    private dateHelper;
    locale: NzCalendarI18nInterface;
    hasTimePicker: boolean;
    disabledDate: (d: Date) => boolean;
    readonly clickToday: EventEmitter<CandyDate>;
    prefixCls: string;
    isDisabled: boolean;
    title: string;
    private now;
    constructor(dateHelper: DateHelperService);
    ngOnChanges(changes: SimpleChanges): void;
    onClickToday(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TodayButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TodayButtonComponent, "today-button", ["todayButton"], { "hasTimePicker": "hasTimePicker"; "locale": "locale"; "disabledDate": "disabledDate"; }, { "clickToday": "clickToday"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXktYnV0dG9uLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ0b2RheS1idXR0b24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7OztBQWFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRvZGF5QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIHByaXZhdGUgZGF0ZUhlbHBlcjtcclxuICAgIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgICBoYXNUaW1lUGlja2VyOiBib29sZWFuO1xyXG4gICAgZGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IGNsaWNrVG9kYXk6IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+O1xyXG4gICAgcHJlZml4Q2xzOiBzdHJpbmc7XHJcbiAgICBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgbm93O1xyXG4gICAgY29uc3RydWN0b3IoZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBvbkNsaWNrVG9kYXkoKTogdm9pZDtcclxufVxyXG4iXX0=