/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { TransferItem } from './interface';
import * as ɵngcc0 from '@angular/core';
export declare class NzTransferListComponent implements OnChanges, OnInit {
    private el;
    private updateHostClassService;
    private cdr;
    direction: string;
    titleText: string;
    showSelectAll: boolean;
    dataSource: TransferItem[];
    itemUnit: string;
    itemsUnit: string;
    filter: string;
    disabled: boolean;
    showSearch: boolean;
    searchPlaceholder: string;
    notFoundContent: string;
    filterOption: (inputValue: string, item: TransferItem) => boolean;
    renderList: TemplateRef<void>;
    render: TemplateRef<void>;
    footer: TemplateRef<void>;
    readonly handleSelectAll: EventEmitter<boolean>;
    readonly handleSelect: EventEmitter<TransferItem>;
    readonly filterChange: EventEmitter<{
        direction: string;
        value: string;
    }>;
    prefixCls: string;
    setClassMap(): void;
    stat: {
        checkAll: boolean;
        checkHalf: boolean;
        checkCount: number;
        shownCount: number;
    };
    onItemSelect: (item: TransferItem) => void;
    onItemSelectAll: (status: boolean) => void;
    private updateCheckStatus;
    handleFilter(value: string): void;
    handleClear(): void;
    private matchFilter;
    constructor(el: ElementRef, updateHostClassService: NzUpdateHostClassService, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    markForCheck(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTransferListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTransferListComponent, "nz-transfer-list", ["nzTransferList"], { "direction": "direction"; "titleText": "titleText"; "showSelectAll": "showSelectAll"; "dataSource": "dataSource"; "itemUnit": "itemUnit"; "itemsUnit": "itemsUnit"; "filter": "filter"; "disabled": "disabled"; "showSearch": "showSearch"; "searchPlaceholder": "searchPlaceholder"; "notFoundContent": "notFoundContent"; "filterOption": "filterOption"; "renderList": "renderList"; "render": "render"; "footer": "footer"; }, { "handleSelectAll": "handleSelectAll"; "handleSelect": "handleSelect"; "filterChange": "filterChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2Zlckl0ZW0gfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VHJhbnNmZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBlbDtcclxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgZGlyZWN0aW9uOiBzdHJpbmc7XHJcbiAgICB0aXRsZVRleHQ6IHN0cmluZztcclxuICAgIHNob3dTZWxlY3RBbGw6IGJvb2xlYW47XHJcbiAgICBkYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXTtcclxuICAgIGl0ZW1Vbml0OiBzdHJpbmc7XHJcbiAgICBpdGVtc1VuaXQ6IHN0cmluZztcclxuICAgIGZpbHRlcjogc3RyaW5nO1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBzaG93U2VhcmNoOiBib29sZWFuO1xyXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gICAgZmlsdGVyT3B0aW9uOiAoaW5wdXRWYWx1ZTogc3RyaW5nLCBpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IGJvb2xlYW47XHJcbiAgICByZW5kZXJMaXN0OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIHJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBmb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgcmVhZG9ubHkgaGFuZGxlU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcbiAgICByZWFkb25seSBoYW5kbGVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxUcmFuc2Zlckl0ZW0+O1xyXG4gICAgcmVhZG9ubHkgZmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8e1xyXG4gICAgICAgIGRpcmVjdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICB9PjtcclxuICAgIHByZWZpeENsczogc3RyaW5nO1xyXG4gICAgc2V0Q2xhc3NNYXAoKTogdm9pZDtcclxuICAgIHN0YXQ6IHtcclxuICAgICAgICBjaGVja0FsbDogYm9vbGVhbjtcclxuICAgICAgICBjaGVja0hhbGY6IGJvb2xlYW47XHJcbiAgICAgICAgY2hlY2tDb3VudDogbnVtYmVyO1xyXG4gICAgICAgIHNob3duQ291bnQ6IG51bWJlcjtcclxuICAgIH07XHJcbiAgICBvbkl0ZW1TZWxlY3Q6IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHZvaWQ7XHJcbiAgICBvbkl0ZW1TZWxlY3RBbGw6IChzdGF0dXM6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIHVwZGF0ZUNoZWNrU3RhdHVzO1xyXG4gICAgaGFuZGxlRmlsdGVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgaGFuZGxlQ2xlYXIoKTogdm9pZDtcclxuICAgIHByaXZhdGUgbWF0Y2hGaWx0ZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG1hcmtGb3JDaGVjaygpOiB2b2lkO1xyXG59XHJcbiJdfQ==