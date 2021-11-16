/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, TemplateRef } from '@angular/core';
import { CandyDate, FunctionProp } from 'ng-zorro-antd/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { DisabledDateFn, PanelMode } from '../../standard-types';
import * as ɵngcc0 from '@angular/core';
export declare class InnerPopupComponent {
    showWeek: boolean;
    locale: NzCalendarI18nInterface;
    showTimePicker: boolean;
    timeOptions: any;
    enablePrev: boolean;
    enableNext: boolean;
    disabledDate: DisabledDateFn;
    dateRender: FunctionProp<TemplateRef<Date> | string>;
    selectedValue: CandyDate[];
    hoverValue: CandyDate[];
    panelMode: PanelMode;
    readonly panelModeChange: EventEmitter<PanelMode>;
    value: CandyDate;
    readonly headerChange: EventEmitter<CandyDate>;
    readonly selectDate: EventEmitter<CandyDate>;
    readonly selectTime: EventEmitter<CandyDate>;
    readonly dayHover: EventEmitter<CandyDate>;
    prefixCls: string;
    onSelectTime(date: Date): void;
    onSelectDate(date: CandyDate | Date): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InnerPopupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InnerPopupComponent, "inner-popup", ["innerPopup"], { "showWeek": "showWeek"; "locale": "locale"; "showTimePicker": "showTimePicker"; "timeOptions": "timeOptions"; "enablePrev": "enablePrev"; "enableNext": "enableNext"; "disabledDate": "disabledDate"; "dateRender": "dateRender"; "selectedValue": "selectedValue"; "hoverValue": "hoverValue"; "panelMode": "panelMode"; "value": "value"; }, { "panelModeChange": "panelModeChange"; "headerChange": "headerChange"; "selectDate": "selectDate"; "selectTime": "selectTime"; "dayHover": "dayHover"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItcG9wdXAuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImlubmVyLXBvcHVwLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIFBhbmVsTW9kZSB9IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW5uZXJQb3B1cENvbXBvbmVudCB7XHJcbiAgICBzaG93V2VlazogYm9vbGVhbjtcclxuICAgIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgICBzaG93VGltZVBpY2tlcjogYm9vbGVhbjtcclxuICAgIHRpbWVPcHRpb25zOiBhbnk7XHJcbiAgICBlbmFibGVQcmV2OiBib29sZWFuO1xyXG4gICAgZW5hYmxlTmV4dDogYm9vbGVhbjtcclxuICAgIGRpc2FibGVkRGF0ZTogRGlzYWJsZWREYXRlRm47XHJcbiAgICBkYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gICAgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107XHJcbiAgICBob3ZlclZhbHVlOiBDYW5keURhdGVbXTtcclxuICAgIHBhbmVsTW9kZTogUGFuZWxNb2RlO1xyXG4gICAgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlPjtcclxuICAgIHZhbHVlOiBDYW5keURhdGU7XHJcbiAgICByZWFkb25seSBoZWFkZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+O1xyXG4gICAgcmVhZG9ubHkgc2VsZWN0RGF0ZTogRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT47XHJcbiAgICByZWFkb25seSBzZWxlY3RUaW1lOiBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPjtcclxuICAgIHJlYWRvbmx5IGRheUhvdmVyOiBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPjtcclxuICAgIHByZWZpeENsczogc3RyaW5nO1xyXG4gICAgb25TZWxlY3RUaW1lKGRhdGU6IERhdGUpOiB2b2lkO1xyXG4gICAgb25TZWxlY3REYXRlKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUpOiB2b2lkO1xyXG59XHJcbiJdfQ==