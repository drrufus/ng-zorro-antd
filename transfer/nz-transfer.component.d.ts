/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { TransferCanMove, TransferChange, TransferDirection, TransferItem, TransferSearchChange, TransferSelectChange } from './interface';
import * as ɵngcc0 from '@angular/core';
export declare class NzTransferComponent implements OnInit, OnChanges, OnDestroy {
    private cdr;
    private i18n;
    private nzUpdateHostClassService;
    private elementRef;
    private unsubscribe$;
    private lists;
    locale: any;
    leftFilter: string;
    rightFilter: string;
    nzDisabled: boolean;
    nzDataSource: TransferItem[];
    nzTitles: string[];
    nzOperations: string[];
    nzListStyle: object;
    nzShowSelectAll: boolean;
    nzItemUnit: string;
    nzItemsUnit: string;
    nzCanMove: (arg: TransferCanMove) => Observable<TransferItem[]>;
    nzRenderList: Array<TemplateRef<void> | null>;
    nzRender: TemplateRef<void>;
    nzFooter: TemplateRef<void>;
    nzShowSearch: boolean;
    nzFilterOption: (inputValue: string, item: TransferItem) => boolean;
    nzSearchPlaceholder: string;
    nzNotFoundContent: string;
    readonly nzChange: EventEmitter<TransferChange>;
    readonly nzSearchChange: EventEmitter<TransferSearchChange>;
    readonly nzSelectChange: EventEmitter<TransferSelectChange>;
    leftDataSource: TransferItem[];
    rightDataSource: TransferItem[];
    private splitDataSource;
    private getCheckedData;
    handleLeftSelectAll: (checked: boolean) => void;
    handleRightSelectAll: (checked: boolean) => void;
    handleLeftSelect: (item: TransferItem) => void;
    handleRightSelect: (item: TransferItem) => void;
    handleSelect(direction: TransferDirection, checked: boolean, item?: TransferItem): void;
    handleFilterChange(ret: {
        direction: TransferDirection;
        value: string;
    }): void;
    leftActive: boolean;
    rightActive: boolean;
    private updateOperationStatus;
    moveToLeft: () => void;
    moveToRight: () => void;
    moveTo(direction: TransferDirection): void;
    private truthMoveTo;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService, nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, renderer: Renderer2);
    private setClassMap;
    private markForCheckAllList;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTransferComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTransferComponent, "nz-transfer", ["nzTransfer"], { "nzDisabled": "nzDisabled"; "nzDataSource": "nzDataSource"; "nzTitles": "nzTitles"; "nzOperations": "nzOperations"; "nzShowSelectAll": "nzShowSelectAll"; "nzCanMove": "nzCanMove"; "nzRenderList": "nzRenderList"; "nzShowSearch": "nzShowSearch"; "nzListStyle": "nzListStyle"; "nzItemUnit": "nzItemUnit"; "nzItemsUnit": "nzItemsUnit"; "nzRender": "nzRender"; "nzFooter": "nzFooter"; "nzFilterOption": "nzFilterOption"; "nzSearchPlaceholder": "nzSearchPlaceholder"; "nzNotFoundContent": "nzNotFoundContent"; }, { "nzChange": "nzChange"; "nzSearchChange": "nzSearchChange"; "nzSelectChange": "nzSelectChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXRyYW5zZmVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IFRyYW5zZmVyQ2FuTW92ZSwgVHJhbnNmZXJDaGFuZ2UsIFRyYW5zZmVyRGlyZWN0aW9uLCBUcmFuc2Zlckl0ZW0sIFRyYW5zZmVyU2VhcmNoQ2hhbmdlLCBUcmFuc2ZlclNlbGVjdENoYW5nZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpUcmFuc2ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIGkxOG47XHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTtcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgdW5zdWJzY3JpYmUkO1xyXG4gICAgcHJpdmF0ZSBsaXN0cztcclxuICAgIGxvY2FsZTogYW55O1xyXG4gICAgbGVmdEZpbHRlcjogc3RyaW5nO1xyXG4gICAgcmlnaHRGaWx0ZXI6IHN0cmluZztcclxuICAgIG56RGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBuekRhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdO1xyXG4gICAgbnpUaXRsZXM6IHN0cmluZ1tdO1xyXG4gICAgbnpPcGVyYXRpb25zOiBzdHJpbmdbXTtcclxuICAgIG56TGlzdFN0eWxlOiBvYmplY3Q7XHJcbiAgICBuelNob3dTZWxlY3RBbGw6IGJvb2xlYW47XHJcbiAgICBuekl0ZW1Vbml0OiBzdHJpbmc7XHJcbiAgICBuekl0ZW1zVW5pdDogc3RyaW5nO1xyXG4gICAgbnpDYW5Nb3ZlOiAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpID0+IE9ic2VydmFibGU8VHJhbnNmZXJJdGVtW10+O1xyXG4gICAgbnpSZW5kZXJMaXN0OiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw+O1xyXG4gICAgbnpSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpTaG93U2VhcmNoOiBib29sZWFuO1xyXG4gICAgbnpGaWx0ZXJPcHRpb246IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcclxuICAgIG56U2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBuekNoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zZmVyQ2hhbmdlPjtcclxuICAgIHJlYWRvbmx5IG56U2VhcmNoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8VHJhbnNmZXJTZWFyY2hDaGFuZ2U+O1xyXG4gICAgcmVhZG9ubHkgbnpTZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2ZlclNlbGVjdENoYW5nZT47XHJcbiAgICBsZWZ0RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW107XHJcbiAgICByaWdodERhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdO1xyXG4gICAgcHJpdmF0ZSBzcGxpdERhdGFTb3VyY2U7XHJcbiAgICBwcml2YXRlIGdldENoZWNrZWREYXRhO1xyXG4gICAgaGFuZGxlTGVmdFNlbGVjdEFsbDogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVSaWdodFNlbGVjdEFsbDogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVMZWZ0U2VsZWN0OiAoaXRlbTogVHJhbnNmZXJJdGVtKSA9PiB2b2lkO1xyXG4gICAgaGFuZGxlUmlnaHRTZWxlY3Q6IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVTZWxlY3QoZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbiwgY2hlY2tlZDogYm9vbGVhbiwgaXRlbT86IFRyYW5zZmVySXRlbSk6IHZvaWQ7XHJcbiAgICBoYW5kbGVGaWx0ZXJDaGFuZ2UocmV0OiB7XHJcbiAgICAgICAgZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbjtcclxuICAgICAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgfSk6IHZvaWQ7XHJcbiAgICBsZWZ0QWN0aXZlOiBib29sZWFuO1xyXG4gICAgcmlnaHRBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHVwZGF0ZU9wZXJhdGlvblN0YXR1cztcclxuICAgIG1vdmVUb0xlZnQ6ICgpID0+IHZvaWQ7XHJcbiAgICBtb3ZlVG9SaWdodDogKCkgPT4gdm9pZDtcclxuICAgIG1vdmVUbyhkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uKTogdm9pZDtcclxuICAgIHByaXZhdGUgdHJ1dGhNb3ZlVG87XHJcbiAgICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBpMThuOiBOekkxOG5TZXJ2aWNlLCBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMik7XHJcbiAgICBwcml2YXRlIHNldENsYXNzTWFwO1xyXG4gICAgcHJpdmF0ZSBtYXJrRm9yQ2hlY2tBbGxMaXN0O1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=