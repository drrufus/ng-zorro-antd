/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { ShowUploadListInterface, UploadChangeParam, UploadFile, UploadFilter, UploadListType, UploadType, UploadXHRArgs, ZipButtonOptions } from './interface';
import { NzUploadBtnComponent } from './nz-upload-btn.component';
import { NzUploadListComponent } from './nz-upload-list.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzUploadComponent implements OnInit, OnChanges, OnDestroy {
    private cdr;
    private i18n;
    private i18n$;
    uploadComp: NzUploadBtnComponent;
    listComp: NzUploadListComponent;
    locale: any;
    nzType: UploadType;
    nzLimit: number;
    nzSize: number;
    nzFileType: string;
    nzAccept: string | string[];
    nzAction: string;
    nzDirectory: boolean;
    nzOpenFileDialogOnClick: boolean;
    nzBeforeUpload: (file: UploadFile, fileList: UploadFile[]) => boolean | Observable<boolean>;
    nzCustomRequest: (item: UploadXHRArgs) => Subscription;
    nzData: {} | ((file: UploadFile) => {});
    nzFilter: UploadFilter[];
    nzFileList: UploadFile[];
    nzDisabled: boolean;
    nzHeaders: {} | ((file: UploadFile) => {});
    nzListType: UploadListType;
    nzMultiple: boolean;
    nzName: string;
    private _showUploadList;
    nzShowUploadList: boolean | ShowUploadListInterface;
    nzShowButton: boolean;
    nzWithCredentials: boolean;
    nzRemove: (file: UploadFile) => boolean | Observable<boolean>;
    nzPreview: (file: UploadFile) => void;
    readonly nzChange: EventEmitter<UploadChangeParam>;
    readonly nzFileListChange: EventEmitter<UploadFile[]>;
    _btnOptions: ZipButtonOptions;
    private zipOptions;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService);
    private fileToObject;
    private getFileItem;
    private removeFileItem;
    private genErr;
    private onStart;
    private onProgress;
    private onSuccess;
    private onError;
    private dragState;
    fileDrop(e: any): void;
    private detectChangesList;
    onRemove: (file: UploadFile) => void;
    private prefixCls;
    classList: string[];
    private setClassMap;
    ngOnInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzUploadComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzUploadComponent, "nz-upload", ["nzUpload"], { "nzType": "nzType"; "nzLimit": "nzLimit"; "nzSize": "nzSize"; "nzDirectory": "nzDirectory"; "nzOpenFileDialogOnClick": "nzOpenFileDialogOnClick"; "nzFilter": "nzFilter"; "nzFileList": "nzFileList"; "nzDisabled": "nzDisabled"; "nzListType": "nzListType"; "nzMultiple": "nzMultiple"; "nzName": "nzName"; "nzShowButton": "nzShowButton"; "nzWithCredentials": "nzWithCredentials"; "nzShowUploadList": "nzShowUploadList"; "nzFileType": "nzFileType"; "nzAccept": "nzAccept"; "nzAction": "nzAction"; "nzBeforeUpload": "nzBeforeUpload"; "nzCustomRequest": "nzCustomRequest"; "nzData": "nzData"; "nzHeaders": "nzHeaders"; "nzRemove": "nzRemove"; "nzPreview": "nzPreview"; }, { "nzChange": "nzChange"; "nzFileListChange": "nzFileListChange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei11cGxvYWQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UsIFVwbG9hZENoYW5nZVBhcmFtLCBVcGxvYWRGaWxlLCBVcGxvYWRGaWx0ZXIsIFVwbG9hZExpc3RUeXBlLCBVcGxvYWRUeXBlLCBVcGxvYWRYSFJBcmdzLCBaaXBCdXR0b25PcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOelVwbG9hZEJ0bkNvbXBvbmVudCB9IGZyb20gJy4vbnotdXBsb2FkLWJ0bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelVwbG9hZExpc3RDb21wb25lbnQgfSBmcm9tICcuL256LXVwbG9hZC1saXN0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgaTE4bjtcclxuICAgIHByaXZhdGUgaTE4biQ7XHJcbiAgICB1cGxvYWRDb21wOiBOelVwbG9hZEJ0bkNvbXBvbmVudDtcclxuICAgIGxpc3RDb21wOiBOelVwbG9hZExpc3RDb21wb25lbnQ7XHJcbiAgICBsb2NhbGU6IGFueTtcclxuICAgIG56VHlwZTogVXBsb2FkVHlwZTtcclxuICAgIG56TGltaXQ6IG51bWJlcjtcclxuICAgIG56U2l6ZTogbnVtYmVyO1xyXG4gICAgbnpGaWxlVHlwZTogc3RyaW5nO1xyXG4gICAgbnpBY2NlcHQ6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgbnpBY3Rpb246IHN0cmluZztcclxuICAgIG56RGlyZWN0b3J5OiBib29sZWFuO1xyXG4gICAgbnpPcGVuRmlsZURpYWxvZ09uQ2xpY2s6IGJvb2xlYW47XHJcbiAgICBuekJlZm9yZVVwbG9hZDogKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgbnpDdXN0b21SZXF1ZXN0OiAoaXRlbTogVXBsb2FkWEhSQXJncykgPT4gU3Vic2NyaXB0aW9uO1xyXG4gICAgbnpEYXRhOiB7fSB8ICgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pO1xyXG4gICAgbnpGaWx0ZXI6IFVwbG9hZEZpbHRlcltdO1xyXG4gICAgbnpGaWxlTGlzdDogVXBsb2FkRmlsZVtdO1xyXG4gICAgbnpEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG56SGVhZGVyczoge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcclxuICAgIG56TGlzdFR5cGU6IFVwbG9hZExpc3RUeXBlO1xyXG4gICAgbnpNdWx0aXBsZTogYm9vbGVhbjtcclxuICAgIG56TmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfc2hvd1VwbG9hZExpc3Q7XHJcbiAgICBuelNob3dVcGxvYWRMaXN0OiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2U7XHJcbiAgICBuelNob3dCdXR0b246IGJvb2xlYW47XHJcbiAgICBueldpdGhDcmVkZW50aWFsczogYm9vbGVhbjtcclxuICAgIG56UmVtb3ZlOiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgICBuelByZXZpZXc6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xyXG4gICAgcmVhZG9ubHkgbnpDaGFuZ2U6IEV2ZW50RW1pdHRlcjxVcGxvYWRDaGFuZ2VQYXJhbT47XHJcbiAgICByZWFkb25seSBuekZpbGVMaXN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VXBsb2FkRmlsZVtdPjtcclxuICAgIF9idG5PcHRpb25zOiBaaXBCdXR0b25PcHRpb25zO1xyXG4gICAgcHJpdmF0ZSB6aXBPcHRpb25zO1xyXG4gICAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgaTE4bjogTnpJMThuU2VydmljZSk7XHJcbiAgICBwcml2YXRlIGZpbGVUb09iamVjdDtcclxuICAgIHByaXZhdGUgZ2V0RmlsZUl0ZW07XHJcbiAgICBwcml2YXRlIHJlbW92ZUZpbGVJdGVtO1xyXG4gICAgcHJpdmF0ZSBnZW5FcnI7XHJcbiAgICBwcml2YXRlIG9uU3RhcnQ7XHJcbiAgICBwcml2YXRlIG9uUHJvZ3Jlc3M7XHJcbiAgICBwcml2YXRlIG9uU3VjY2VzcztcclxuICAgIHByaXZhdGUgb25FcnJvcjtcclxuICAgIHByaXZhdGUgZHJhZ1N0YXRlO1xyXG4gICAgZmlsZURyb3AoZTogYW55KTogdm9pZDtcclxuICAgIHByaXZhdGUgZGV0ZWN0Q2hhbmdlc0xpc3Q7XHJcbiAgICBvblJlbW92ZTogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIHByZWZpeENscztcclxuICAgIGNsYXNzTGlzdDogc3RyaW5nW107XHJcbiAgICBwcml2YXRlIHNldENsYXNzTWFwO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtcclxuICAgICAgICBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZTtcclxuICAgIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19