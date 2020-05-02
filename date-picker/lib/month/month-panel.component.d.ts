/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
export declare class MonthPanelComponent {
    locale: NzCalendarI18nInterface;
    value: CandyDate;
    disabledDate: (date: Date) => boolean;
    readonly valueChange: EventEmitter<CandyDate>;
    readonly yearPanelShow: EventEmitter<void>;
    prefixCls: string;
    previousYear(): void;
    nextYear(): void;
    private gotoYear;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MonthPanelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MonthPanelComponent, "month-panel", ["monthPanel"], { "value": "value"; "locale": "locale"; "disabledDate": "disabledDate"; }, { "valueChange": "valueChange"; "yearPanelShow": "yearPanelShow"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGFuZWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm1vbnRoLXBhbmVsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNb250aFBhbmVsQ29tcG9uZW50IHtcclxuICAgIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgICB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gICAgZGlzYWJsZWREYXRlOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPjtcclxuICAgIHJlYWRvbmx5IHllYXJQYW5lbFNob3c6IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIHByZWZpeENsczogc3RyaW5nO1xyXG4gICAgcHJldmlvdXNZZWFyKCk6IHZvaWQ7XHJcbiAgICBuZXh0WWVhcigpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBnb3RvWWVhcjtcclxufVxyXG4iXX0=