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
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<NzTransferListComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzTransferListComponent, "nz-transfer-list", ["nzTransferList"], { 'direction': "direction", 'titleText': "titleText", 'showSelectAll': "showSelectAll", 'dataSource': "dataSource", 'itemUnit': "itemUnit", 'itemsUnit': "itemsUnit", 'filter': "filter", 'disabled': "disabled", 'showSearch': "showSearch", 'searchPlaceholder': "searchPlaceholder", 'notFoundContent': "notFoundContent", 'filterOption': "filterOption", 'renderList': "renderList", 'render': "render", 'footer': "footer" }, { 'handleSelectAll': "handleSelectAll", 'handleSelect': "handleSelect", 'filterChange': "filterChange" }, never>;
}
