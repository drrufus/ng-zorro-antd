/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
export declare type NzThFilterType = Array<{
    text: string;
    value: any;
    byDefault?: boolean;
}>;
export interface NzThItemInterface {
    text: string;
    value: any;
    checked: boolean;
}
export declare class NzThComponent implements OnChanges, OnInit, OnDestroy {
    private cdr;
    private i18n;
    hasFilterValue: boolean;
    filterVisible: boolean;
    multipleFilterList: NzThItemInterface[];
    singleFilterList: NzThItemInterface[];
    locale: NzI18nInterface['Table'];
    nzWidthChange$: Subject<unknown>;
    private destroy$;
    private hasDefaultFilter;
    nzDropdownMenuComponent: NzDropdownMenuComponent;
    nzSelections: Array<{
        text: string;
        onSelect(...args: any[]): any;
    }>;
    nzChecked: boolean;
    nzDisabled: boolean;
    nzIndeterminate: boolean;
    nzSortKey: string;
    nzFilterMultiple: boolean;
    nzWidth: string;
    nzLeft: string;
    nzRight: string;
    nzAlign: 'left' | 'right' | 'center';
    nzSort: 'ascend' | 'descend' | null;
    nzFilters: NzThFilterType;
    nzExpand: boolean;
    nzShowCheckbox: boolean;
    nzCustomFilter: boolean;
    nzShowSort: boolean;
    nzShowFilter: boolean;
    nzShowRowSelection: boolean;
    readonly nzCheckedChange: EventEmitter<boolean>;
    readonly nzSortChange: EventEmitter<string | null>;
    readonly nzSortChangeWithKey: EventEmitter<{
        key: string;
        value: string | null;
    }>;
    readonly nzFilterChange: EventEmitter<any>;
    updateSortValue(): void;
    setSortValue(value: 'ascend' | 'descend' | null): void;
    readonly filterList: NzThItemInterface[];
    readonly filterValue: any;
    updateFilterStatus(): void;
    search(): void;
    reset(): void;
    checkMultiple(filter: NzThItemInterface): void;
    checkSingle(filter: NzThItemInterface): void;
    hideDropDown(): void;
    dropDownVisibleChange(value: boolean): void;
    initMultipleFilterList(force?: boolean): void;
    initSingleFilterList(force?: boolean): void;
    checkDefaultFilters(): void;
    marForCheck(): void;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzThComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzThComponent, "th:not(.nz-disable-th):not([mat-sort-header]):not([mat-header-cell])", never, { "nzSelections": "nzSelections"; "nzChecked": "nzChecked"; "nzDisabled": "nzDisabled"; "nzIndeterminate": "nzIndeterminate"; "nzFilterMultiple": "nzFilterMultiple"; "nzSort": "nzSort"; "nzFilters": "nzFilters"; "nzExpand": "nzExpand"; "nzShowCheckbox": "nzShowCheckbox"; "nzCustomFilter": "nzCustomFilter"; "nzShowSort": "nzShowSort"; "nzShowFilter": "nzShowFilter"; "nzShowRowSelection": "nzShowRowSelection"; "nzSortKey": "nzSortKey"; "nzWidth": "nzWidth"; "nzLeft": "nzLeft"; "nzRight": "nzRight"; "nzAlign": "nzAlign"; }, { "nzCheckedChange": "nzCheckedChange"; "nzSortChange": "nzSortChange"; "nzSortChangeWithKey": "nzSortChangeWithKey"; "nzFilterChange": "nzFilterChange"; }, never, ["*", "nz-dropdown", "[nz-dropdown]", "[nz-th-extra]"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGguY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXRoLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56RHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XHJcbmltcG9ydCB7IE56STE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTnpUaEZpbHRlclR5cGUgPSBBcnJheTx7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogYW55O1xyXG4gICAgYnlEZWZhdWx0PzogYm9vbGVhbjtcclxufT47XHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpUaEl0ZW1JbnRlcmZhY2Uge1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgdmFsdWU6IGFueTtcclxuICAgIGNoZWNrZWQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpUaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIGkxOG47XHJcbiAgICBoYXNGaWx0ZXJWYWx1ZTogYm9vbGVhbjtcclxuICAgIGZpbHRlclZpc2libGU6IGJvb2xlYW47XHJcbiAgICBtdWx0aXBsZUZpbHRlckxpc3Q6IE56VGhJdGVtSW50ZXJmYWNlW107XHJcbiAgICBzaW5nbGVGaWx0ZXJMaXN0OiBOelRoSXRlbUludGVyZmFjZVtdO1xyXG4gICAgbG9jYWxlOiBOekkxOG5JbnRlcmZhY2VbJ1RhYmxlJ107XHJcbiAgICBueldpZHRoQ2hhbmdlJDogU3ViamVjdDx1bmtub3duPjtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBwcml2YXRlIGhhc0RlZmF1bHRGaWx0ZXI7XHJcbiAgICBuekRyb3Bkb3duTWVudUNvbXBvbmVudDogTnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XHJcbiAgICBuelNlbGVjdGlvbnM6IEFycmF5PHtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgb25TZWxlY3QoLi4uYXJnczogYW55W10pOiBhbnk7XHJcbiAgICB9PjtcclxuICAgIG56Q2hlY2tlZDogYm9vbGVhbjtcclxuICAgIG56RGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBuekluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XHJcbiAgICBuelNvcnRLZXk6IHN0cmluZztcclxuICAgIG56RmlsdGVyTXVsdGlwbGU6IGJvb2xlYW47XHJcbiAgICBueldpZHRoOiBzdHJpbmc7XHJcbiAgICBuekxlZnQ6IHN0cmluZztcclxuICAgIG56UmlnaHQ6IHN0cmluZztcclxuICAgIG56QWxpZ246ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJztcclxuICAgIG56U29ydDogJ2FzY2VuZCcgfCAnZGVzY2VuZCcgfCBudWxsO1xyXG4gICAgbnpGaWx0ZXJzOiBOelRoRmlsdGVyVHlwZTtcclxuICAgIG56RXhwYW5kOiBib29sZWFuO1xyXG4gICAgbnpTaG93Q2hlY2tib3g6IGJvb2xlYW47XHJcbiAgICBuekN1c3RvbUZpbHRlcjogYm9vbGVhbjtcclxuICAgIG56U2hvd1NvcnQ6IGJvb2xlYW47XHJcbiAgICBuelNob3dGaWx0ZXI6IGJvb2xlYW47XHJcbiAgICBuelNob3dSb3dTZWxlY3Rpb246IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBuekNoZWNrZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIHJlYWRvbmx5IG56U29ydENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bGw+O1xyXG4gICAgcmVhZG9ubHkgbnpTb3J0Q2hhbmdlV2l0aEtleTogRXZlbnRFbWl0dGVyPHtcclxuICAgICAgICBrZXk6IHN0cmluZztcclxuICAgICAgICB2YWx1ZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIH0+O1xyXG4gICAgcmVhZG9ubHkgbnpGaWx0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAgdXBkYXRlU29ydFZhbHVlKCk6IHZvaWQ7XHJcbiAgICBzZXRTb3J0VmFsdWUodmFsdWU6ICdhc2NlbmQnIHwgJ2Rlc2NlbmQnIHwgbnVsbCk6IHZvaWQ7XHJcbiAgICByZWFkb25seSBmaWx0ZXJMaXN0OiBOelRoSXRlbUludGVyZmFjZVtdO1xyXG4gICAgcmVhZG9ubHkgZmlsdGVyVmFsdWU6IGFueTtcclxuICAgIHVwZGF0ZUZpbHRlclN0YXR1cygpOiB2b2lkO1xyXG4gICAgc2VhcmNoKCk6IHZvaWQ7XHJcbiAgICByZXNldCgpOiB2b2lkO1xyXG4gICAgY2hlY2tNdWx0aXBsZShmaWx0ZXI6IE56VGhJdGVtSW50ZXJmYWNlKTogdm9pZDtcclxuICAgIGNoZWNrU2luZ2xlKGZpbHRlcjogTnpUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkO1xyXG4gICAgaGlkZURyb3BEb3duKCk6IHZvaWQ7XHJcbiAgICBkcm9wRG93blZpc2libGVDaGFuZ2UodmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgaW5pdE11bHRpcGxlRmlsdGVyTGlzdChmb3JjZT86IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgaW5pdFNpbmdsZUZpbHRlckxpc3QoZm9yY2U/OiBib29sZWFuKTogdm9pZDtcclxuICAgIGNoZWNrRGVmYXVsdEZpbHRlcnMoKTogdm9pZDtcclxuICAgIG1hckZvckNoZWNrKCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBpMThuOiBOekkxOG5TZXJ2aWNlKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19