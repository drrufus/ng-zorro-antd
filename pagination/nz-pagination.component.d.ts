/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzPaginationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzPaginationComponent, "nz-pagination", ["nzPagination"], { "nzInTable": "nzInTable"; "nzSize": "nzSize"; "nzPageSizeOptions": "nzPageSizeOptions"; "nzDisabled": "nzDisabled"; "nzShowSizeChanger": "nzShowSizeChanger"; "nzHideOnSinglePage": "nzHideOnSinglePage"; "nzShowQuickJumper": "nzShowQuickJumper"; "nzSimple": "nzSimple"; "nzTotal": "nzTotal"; "nzPageIndex": "nzPageIndex"; "nzPageSize": "nzPageSize"; "nzShowTotal": "nzShowTotal"; "nzItemRender": "nzItemRender"; }, { "nzPageSizeChange": "nzPageSizeChange"; "nzPageIndexChange": "nzPageIndexChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnaW5hdGlvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotcGFnaW5hdGlvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0IHtcclxuICAgICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnO1xyXG4gICAgcGFnZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56UGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBpMThuO1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBsb2NhbGU6IGFueTtcclxuICAgIGZpcnN0SW5kZXg6IG51bWJlcjtcclxuICAgIHBhZ2VzOiBudW1iZXJbXTtcclxuICAgIHByaXZhdGUgJGRlc3Ryb3k7XHJcbiAgICByZWFkb25seSBuelBhZ2VTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuICAgIHJlYWRvbmx5IG56UGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuICAgIG56U2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBudW1iZXI7XHJcbiAgICAgICAgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICB9PjtcclxuICAgIG56SW5UYWJsZTogYm9vbGVhbjtcclxuICAgIG56U2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJztcclxuICAgIG56UGFnZVNpemVPcHRpb25zOiBudW1iZXJbXTtcclxuICAgIG56SXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PjtcclxuICAgIG56SXRlbVJlbmRlckNoaWxkOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+O1xyXG4gICAgcmVhZG9ubHkgaXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PjtcclxuICAgIG56RGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBuelNob3dTaXplQ2hhbmdlcjogYm9vbGVhbjtcclxuICAgIG56SGlkZU9uU2luZ2xlUGFnZTogYm9vbGVhbjtcclxuICAgIG56U2hvd1F1aWNrSnVtcGVyOiBib29sZWFuO1xyXG4gICAgbnpTaW1wbGU6IGJvb2xlYW47XHJcbiAgICBuelRvdGFsOiBudW1iZXI7XHJcbiAgICBuelBhZ2VJbmRleDogbnVtYmVyO1xyXG4gICAgbnpQYWdlU2l6ZTogbnVtYmVyO1xyXG4gICAgdmFsaWRhdGVQYWdlSW5kZXgodmFsdWU6IG51bWJlcik6IG51bWJlcjtcclxuICAgIHVwZGF0ZVBhZ2VJbmRleFZhbHVlKHBhZ2U6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBpc1BhZ2VJbmRleFZhbGlkKHZhbHVlOiBudW1iZXIpOiBib29sZWFuO1xyXG4gICAganVtcFBhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBqdW1wRGlmZihkaWZmOiBudW1iZXIpOiB2b2lkO1xyXG4gICAgb25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQ6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBoYW5kbGVLZXlEb3duKF86IEtleWJvYXJkRXZlbnQsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBjbGVhcklucHV0VmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgLyoqIGdlbmVyYXRlIGluZGV4ZXMgbGlzdCAqL1xyXG4gICAgYnVpbGRJbmRleGVzKCk6IHZvaWQ7XHJcbiAgICByZWFkb25seSBsYXN0SW5kZXg6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGlzTGFzdEluZGV4OiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgaXNGaXJzdEluZGV4OiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgcmFuZ2VzOiBudW1iZXJbXTtcclxuICAgIHJlYWRvbmx5IHNob3dBZGRPcHRpb246IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihpMThuOiBOekkxOG5TZXJ2aWNlLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbn1cclxuIl19