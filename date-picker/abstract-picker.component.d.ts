/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzDatePickerI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import { NzPickerComponent } from './picker.component';
import { CompatibleDate, CompatibleValue } from './standard-types';
/**
 * The base picker for all common APIs
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class AbstractPickerComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
    protected i18n: NzI18nService;
    protected cdr: ChangeDetectorRef;
    protected dateHelper: DateHelperService;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzAllowClear: boolean;
    nzAutoFocus: boolean;
    nzDisabled: boolean;
    nzOpen: boolean;
    nzClassName: string;
    nzDisabledDate: (d: Date) => boolean;
    nzLocale: NzDatePickerI18nInterface;
    nzPlaceHolder: string | string[];
    nzPopupStyle: object;
    nzDropdownClassName: string;
    nzSize: 'large' | 'small';
    nzStyle: object;
    nzFormat: string;
    nzValue: CompatibleValue | null;
    readonly nzOnOpenChange: EventEmitter<boolean>;
    protected picker: NzPickerComponent;
    isRange: boolean;
    readonly realOpenState: boolean;
    initValue(): void;
    protected destroyed$: Subject<void>;
    protected isCustomPlaceHolder: boolean;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    closeOverlay(): void;
    /**
     * Common handle for value changes
     * @param value changed value
     */
    onValueChange(value: CompatibleValue): void;
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    onOpenChange(open: boolean): void;
    onChangeFn: (val: CompatibleDate | null) => void;
    onTouchedFn: () => void;
    writeValue(value: CompatibleDate): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    private setLocale;
    private setDefaultPlaceHolder;
    private setValue;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AbstractPickerComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AbstractPickerComponent, never, never, { "nzAllowClear": "nzAllowClear"; "nzAutoFocus": "nzAutoFocus"; "nzDisabled": "nzDisabled"; "nzPopupStyle": "nzPopupStyle"; "nzValue": "nzValue"; "nzLocale": "nzLocale"; "nzPlaceHolder": "nzPlaceHolder"; "nzOpen": "nzOpen"; "nzClassName": "nzClassName"; "nzDisabledDate": "nzDisabledDate"; "nzDropdownClassName": "nzDropdownClassName"; "nzSize": "nzSize"; "nzStyle": "nzStyle"; "nzFormat": "nzFormat"; }, { "nzOnOpenChange": "nzOnOpenChange"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhYnN0cmFjdC1waWNrZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpEYXRlUGlja2VySTE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE56UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcGF0aWJsZURhdGUsIENvbXBhdGlibGVWYWx1ZSB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xyXG4vKipcclxuICogVGhlIGJhc2UgcGlja2VyIGZvciBhbGwgY29tbW9uIEFQSXNcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgcHJvdGVjdGVkIGkxOG46IE56STE4blNlcnZpY2U7XHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZjtcclxuICAgIHByb3RlY3RlZCBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZTtcclxuICAgIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcclxuICAgIG56QWxsb3dDbGVhcjogYm9vbGVhbjtcclxuICAgIG56QXV0b0ZvY3VzOiBib29sZWFuO1xyXG4gICAgbnpEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG56T3BlbjogYm9vbGVhbjtcclxuICAgIG56Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBuekRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgICBuekxvY2FsZTogTnpEYXRlUGlja2VySTE4bkludGVyZmFjZTtcclxuICAgIG56UGxhY2VIb2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgbnpQb3B1cFN0eWxlOiBvYmplY3Q7XHJcbiAgICBuekRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBuelNpemU6ICdsYXJnZScgfCAnc21hbGwnO1xyXG4gICAgbnpTdHlsZTogb2JqZWN0O1xyXG4gICAgbnpGb3JtYXQ6IHN0cmluZztcclxuICAgIG56VmFsdWU6IENvbXBhdGlibGVWYWx1ZSB8IG51bGw7XHJcbiAgICByZWFkb25seSBuek9uT3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgcHJvdGVjdGVkIHBpY2tlcjogTnpQaWNrZXJDb21wb25lbnQ7XHJcbiAgICBpc1JhbmdlOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgcmVhbE9wZW5TdGF0ZTogYm9vbGVhbjtcclxuICAgIGluaXRWYWx1ZSgpOiB2b2lkO1xyXG4gICAgcHJvdGVjdGVkIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD47XHJcbiAgICBwcm90ZWN0ZWQgaXNDdXN0b21QbGFjZUhvbGRlcjogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCB1bmRlZmluZWQpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIGNsb3NlT3ZlcmxheSgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb21tb24gaGFuZGxlIGZvciB2YWx1ZSBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgY2hhbmdlZCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBvblZhbHVlQ2hhbmdlKHZhbHVlOiBDb21wYXRpYmxlVmFsdWUpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyZWQgd2hlbiBvdmVybGF5T3BlbiBjaGFuZ2VzIChkaWZmZXJlbnQgd2l0aCByZWFsT3BlblN0YXRlKVxyXG4gICAgICogQHBhcmFtIG9wZW4gVGhlIG92ZXJsYXlPcGVuIGluIHBpY2tlciBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgb25DaGFuZ2VGbjogKHZhbDogQ29tcGF0aWJsZURhdGUgfCBudWxsKSA9PiB2b2lkO1xyXG4gICAgb25Ub3VjaGVkRm46ICgpID0+IHZvaWQ7XHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQ7XHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZDtcclxuICAgIHByaXZhdGUgc2V0TG9jYWxlO1xyXG4gICAgcHJpdmF0ZSBzZXREZWZhdWx0UGxhY2VIb2xkZXI7XHJcbiAgICBwcml2YXRlIHNldFZhbHVlO1xyXG59XHJcbiJdfQ==