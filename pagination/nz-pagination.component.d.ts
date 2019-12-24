/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export interface PaginationItemRenderContext {
    $implicit: 'page' | 'prev' | 'next';
    page: number;
}
export declare class NzPaginationComponent implements OnInit, OnDestroy, OnChanges {
    private i18n;
    private cdr;
    locale: any;
    firstIndex: number;
    pages: number[];
    private $destroy;
    readonly nzPageSizeChange: EventEmitter<number>;
    readonly nzPageIndexChange: EventEmitter<number>;
    nzShowTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }>;
    nzInTable: boolean;
    nzSize: 'default' | 'small';
    nzPageSizeOptions: number[];
    nzItemRender: TemplateRef<PaginationItemRenderContext>;
    nzItemRenderChild: TemplateRef<PaginationItemRenderContext>;
    readonly itemRender: TemplateRef<PaginationItemRenderContext>;
    nzDisabled: boolean;
    nzShowSizeChanger: boolean;
    nzHideOnSinglePage: boolean;
    nzShowQuickJumper: boolean;
    nzSimple: boolean;
    nzTotal: number;
    nzPageIndex: number;
    nzPageSize: number;
    validatePageIndex(value: number): number;
    updatePageIndexValue(page: number): void;
    isPageIndexValid(value: number): boolean;
    jumpPage(index: number): void;
    jumpDiff(diff: number): void;
    onPageSizeChange($event: number): void;
    handleKeyDown(_: KeyboardEvent, input: HTMLInputElement, clearInputValue: boolean): void;
    /** generate indexes list */
    buildIndexes(): void;
    readonly lastIndex: number;
    readonly isLastIndex: boolean;
    readonly isFirstIndex: boolean;
    readonly ranges: number[];
    readonly showAddOption: boolean;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<NzPaginationComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzPaginationComponent, "nz-pagination", ["nzPagination"], { 'nzShowTotal': "nzShowTotal", 'nzInTable': "nzInTable", 'nzSize': "nzSize", 'nzPageSizeOptions': "nzPageSizeOptions", 'nzItemRender': "nzItemRender", 'nzDisabled': "nzDisabled", 'nzShowSizeChanger': "nzShowSizeChanger", 'nzHideOnSinglePage': "nzHideOnSinglePage", 'nzShowQuickJumper': "nzShowQuickJumper", 'nzSimple': "nzSimple", 'nzTotal': "nzTotal", 'nzPageIndex': "nzPageIndex", 'nzPageSize': "nzPageSize" }, { 'nzPageSizeChange': "nzPageSizeChange", 'nzPageIndexChange': "nzPageIndexChange" }, never>;
}
