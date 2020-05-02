/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CandyDate } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare type ModeType = 'month' | 'year';
export declare type DateTemplate = TemplateRef<{
    $implicit: Date;
}>;
export declare class NzCalendarComponent implements ControlValueAccessor {
    private cdr;
    activeDate: CandyDate;
    prefixCls: string;
    private onChangeFn;
    private onTouchFn;
    nzMode: ModeType;
    readonly nzModeChange: EventEmitter<ModeType>;
    readonly nzPanelChange: EventEmitter<{
        date: Date;
        mode: ModeType;
    }>;
    readonly nzSelectChange: EventEmitter<Date>;
    nzValue: Date;
    readonly nzValueChange: EventEmitter<Date>;
    /**
     * Cannot use @Input and @ContentChild on one variable
     * because { static: false } will make @Input property get delayed
     **/
    nzDateCell: DateTemplate;
    nzDateCellChild: DateTemplate;
    readonly dateCell: DateTemplate;
    nzDateFullCell: DateTemplate;
    nzDateFullCellChild: DateTemplate;
    readonly dateFullCell: DateTemplate;
    nzMonthCell: DateTemplate;
    nzMonthCellChild: DateTemplate;
    readonly monthCell: DateTemplate;
    nzMonthFullCell: DateTemplate;
    nzMonthFullCellChild: DateTemplate;
    readonly monthFullCell: DateTemplate;
    nzFullscreen: boolean;
    /**
     * @deprecated use `[nzFullscreen]` instead.
     */
    nzCard: boolean;
    constructor(cdr: ChangeDetectorRef);
    onModeChange(mode: ModeType): void;
    onYearSelect(year: number): void;
    onMonthSelect(month: number): void;
    onDateSelect(date: CandyDate): void;
    writeValue(value: Date | null): void;
    registerOnChange(fn: (date: Date) => void): void;
    registerOnTouched(fn: () => void): void;
    private updateDate;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCalendarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCalendarComponent, "nz-calendar", ["nzCalendar"], { "nzMode": "nzMode"; "nzFullscreen": "nzFullscreen"; "nzValue": "nzValue"; "nzCard": "nzCard"; "nzDateCell": "nzDateCell"; "nzDateFullCell": "nzDateFullCell"; "nzMonthCell": "nzMonthCell"; "nzMonthFullCell": "nzMonthFullCell"; }, { "nzModeChange": "nzModeChange"; "nzPanelChange": "nzPanelChange"; "nzSelectChange": "nzSelectChange"; "nzValueChange": "nzValueChange"; }, ["nzDateCellChild", "nzDateFullCellChild", "nzMonthCellChild", "nzMonthFullCellChild"], never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTW9kZVR5cGUgPSAnbW9udGgnIHwgJ3llYXInO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIERhdGVUZW1wbGF0ZSA9IFRlbXBsYXRlUmVmPHtcclxuICAgICRpbXBsaWNpdDogRGF0ZTtcclxufT47XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIGFjdGl2ZURhdGU6IENhbmR5RGF0ZTtcclxuICAgIHByZWZpeENsczogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBvbkNoYW5nZUZuO1xyXG4gICAgcHJpdmF0ZSBvblRvdWNoRm47XHJcbiAgICBuek1vZGU6IE1vZGVUeXBlO1xyXG4gICAgcmVhZG9ubHkgbnpNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TW9kZVR5cGU+O1xyXG4gICAgcmVhZG9ubHkgbnpQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHtcclxuICAgICAgICBkYXRlOiBEYXRlO1xyXG4gICAgICAgIG1vZGU6IE1vZGVUeXBlO1xyXG4gICAgfT47XHJcbiAgICByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+O1xyXG4gICAgbnpWYWx1ZTogRGF0ZTtcclxuICAgIHJlYWRvbmx5IG56VmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPjtcclxuICAgIC8qKlxyXG4gICAgICogQ2Fubm90IHVzZSBASW5wdXQgYW5kIEBDb250ZW50Q2hpbGQgb24gb25lIHZhcmlhYmxlXHJcbiAgICAgKiBiZWNhdXNlIHsgc3RhdGljOiBmYWxzZSB9IHdpbGwgbWFrZSBASW5wdXQgcHJvcGVydHkgZ2V0IGRlbGF5ZWRcclxuICAgICAqKi9cclxuICAgIG56RGF0ZUNlbGw6IERhdGVUZW1wbGF0ZTtcclxuICAgIG56RGF0ZUNlbGxDaGlsZDogRGF0ZVRlbXBsYXRlO1xyXG4gICAgcmVhZG9ubHkgZGF0ZUNlbGw6IERhdGVUZW1wbGF0ZTtcclxuICAgIG56RGF0ZUZ1bGxDZWxsOiBEYXRlVGVtcGxhdGU7XHJcbiAgICBuekRhdGVGdWxsQ2VsbENoaWxkOiBEYXRlVGVtcGxhdGU7XHJcbiAgICByZWFkb25seSBkYXRlRnVsbENlbGw6IERhdGVUZW1wbGF0ZTtcclxuICAgIG56TW9udGhDZWxsOiBEYXRlVGVtcGxhdGU7XHJcbiAgICBuek1vbnRoQ2VsbENoaWxkOiBEYXRlVGVtcGxhdGU7XHJcbiAgICByZWFkb25seSBtb250aENlbGw6IERhdGVUZW1wbGF0ZTtcclxuICAgIG56TW9udGhGdWxsQ2VsbDogRGF0ZVRlbXBsYXRlO1xyXG4gICAgbnpNb250aEZ1bGxDZWxsQ2hpbGQ6IERhdGVUZW1wbGF0ZTtcclxuICAgIHJlYWRvbmx5IG1vbnRoRnVsbENlbGw6IERhdGVUZW1wbGF0ZTtcclxuICAgIG56RnVsbHNjcmVlbjogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIGBbbnpGdWxsc2NyZWVuXWAgaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgbnpDYXJkOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICBvbk1vZGVDaGFuZ2UobW9kZTogTW9kZVR5cGUpOiB2b2lkO1xyXG4gICAgb25ZZWFyU2VsZWN0KHllYXI6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBvbk1vbnRoU2VsZWN0KG1vbnRoOiBudW1iZXIpOiB2b2lkO1xyXG4gICAgb25EYXRlU2VsZWN0KGRhdGU6IENhbmR5RGF0ZSk6IHZvaWQ7XHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIHVwZGF0ZURhdGU7XHJcbn1cclxuIl19