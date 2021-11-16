/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { CandyDate, FunctionProp, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
import { DisabledTimeFn, PanelMode, PresetRanges } from './standard-types';
import * as ɵngcc0 from '@angular/core';
export declare class DateRangePickerComponent extends AbstractPickerComponent implements OnInit, OnChanges {
    showWeek: boolean;
    nzDateRender: FunctionProp<TemplateRef<Date> | string>;
    nzDisabledTime: DisabledTimeFn;
    nzRenderExtraFooter: FunctionProp<TemplateRef<void> | string>;
    nzShowToday: boolean;
    nzMode: PanelMode | PanelMode[];
    nzRanges: PresetRanges;
    readonly nzOnPanelChange: EventEmitter<"decade" | "year" | "month" | "date" | "time" | PanelMode[]>;
    readonly nzOnCalendarChange: EventEmitter<Date[]>;
    private _showTime;
    nzShowTime: object | boolean;
    readonly nzOnOk: EventEmitter<Date | Date[] | null>;
    readonly realShowToday: boolean;
    pickerStyle: object;
    extraFooter: TemplateRef<void> | string;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
     */
    onValueChange(value: CandyDate, isEnter?: boolean): void;
    onCalendarChange(value: CandyDate[]): void;
    onResultOk(): void;
    onOpenChange(open: boolean): void;
    private setFixedPickerStyle;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DateRangePickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DateRangePickerComponent, "ng-component", never, { "nzShowToday": "nzShowToday"; "nzShowTime": "nzShowTime"; "nzDateRender": "nzDateRender"; "nzDisabledTime": "nzDisabledTime"; "nzRenderExtraFooter": "nzRenderExtraFooter"; "nzMode": "nzMode"; "nzRanges": "nzRanges"; }, { "nzOnPanelChange": "nzOnPanelChange"; "nzOnCalendarChange": "nzOnCalendarChange"; "nzOnOk": "nzOnOk"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2Fic3RyYWN0LXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXNhYmxlZFRpbWVGbiwgUGFuZWxNb2RlLCBQcmVzZXRSYW5nZXMgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBzaG93V2VlazogYm9vbGVhbjtcclxuICAgIG56RGF0ZVJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICAgIG56RGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjtcclxuICAgIG56UmVuZGVyRXh0cmFGb290ZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZz47XHJcbiAgICBuelNob3dUb2RheTogYm9vbGVhbjtcclxuICAgIG56TW9kZTogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XHJcbiAgICBuelJhbmdlczogUHJlc2V0UmFuZ2VzO1xyXG4gICAgcmVhZG9ubHkgbnpPblBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8XCJkZWNhZGVcIiB8IFwieWVhclwiIHwgXCJtb250aFwiIHwgXCJkYXRlXCIgfCBcInRpbWVcIiB8IFBhbmVsTW9kZVtdPjtcclxuICAgIHJlYWRvbmx5IG56T25DYWxlbmRhckNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGVbXT47XHJcbiAgICBwcml2YXRlIF9zaG93VGltZTtcclxuICAgIG56U2hvd1RpbWU6IG9iamVjdCB8IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBuek9uT2s6IEV2ZW50RW1pdHRlcjxEYXRlIHwgRGF0ZVtdIHwgbnVsbD47XHJcbiAgICByZWFkb25seSByZWFsU2hvd1RvZGF5OiBib29sZWFuO1xyXG4gICAgcGlja2VyU3R5bGU6IG9iamVjdDtcclxuICAgIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB1c2VyIHByZXNzICdFbnRlcicgaW4gaW5wdXQgYm94IG9yIGBuelNob3dUaW1lYCBpcyBmYWxzZSwgb3ZlcmxheSB3aWxsIGNsb3NlLlxyXG4gICAgICovXHJcbiAgICBvblZhbHVlQ2hhbmdlKHZhbHVlOiBDYW5keURhdGUsIGlzRW50ZXI/OiBib29sZWFuKTogdm9pZDtcclxuICAgIG9uQ2FsZW5kYXJDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZVtdKTogdm9pZDtcclxuICAgIG9uUmVzdWx0T2soKTogdm9pZDtcclxuICAgIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZDtcclxuICAgIHByaXZhdGUgc2V0Rml4ZWRQaWNrZXJTdHlsZTtcclxufVxyXG4iXX0=