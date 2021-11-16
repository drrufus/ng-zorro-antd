/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { HttpClient } from '@angular/common/http';
import { ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { UploadFile, ZipButtonOptions } from './interface';
import * as ɵngcc0 from '@angular/core';
export declare class NzUploadBtnComponent implements OnInit, OnChanges, OnDestroy {
    private http;
    private el;
    private updateHostClassService;
    reqs: {
        [key: string]: Subscription;
    };
    private inited;
    private destroy;
    file: ElementRef;
    classes: {};
    options: ZipButtonOptions;
    onClick(): void;
    onKeyDown(e: KeyboardEvent): void;
    onFileDrop(e: any): void;
    onChange(e: Event): void;
    private traverseFileTree;
    private attrAccept;
    private attachUid;
    uploadFiles(fileList: FileList | File[]): void;
    private upload;
    private post;
    private xhr;
    private clean;
    abort(file?: UploadFile): void;
    private prefixCls;
    private setClassMap;
    constructor(http: HttpClient, el: ElementRef, updateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzUploadBtnComponent, [{ optional: true; }, null, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzUploadBtnComponent, "[nz-upload-btn]", ["nzUploadBtn"], { "classes": "classes"; "options": "options"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgVXBsb2FkRmlsZSwgWmlwQnV0dG9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpVcGxvYWRCdG5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgaHR0cDtcclxuICAgIHByaXZhdGUgZWw7XHJcbiAgICBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U7XHJcbiAgICByZXFzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogU3Vic2NyaXB0aW9uO1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgaW5pdGVkO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95O1xyXG4gICAgZmlsZTogRWxlbWVudFJlZjtcclxuICAgIGNsYXNzZXM6IHt9O1xyXG4gICAgb3B0aW9uczogWmlwQnV0dG9uT3B0aW9ucztcclxuICAgIG9uQ2xpY2soKTogdm9pZDtcclxuICAgIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZDtcclxuICAgIG9uRmlsZURyb3AoZTogYW55KTogdm9pZDtcclxuICAgIG9uQ2hhbmdlKGU6IEV2ZW50KTogdm9pZDtcclxuICAgIHByaXZhdGUgdHJhdmVyc2VGaWxlVHJlZTtcclxuICAgIHByaXZhdGUgYXR0ckFjY2VwdDtcclxuICAgIHByaXZhdGUgYXR0YWNoVWlkO1xyXG4gICAgdXBsb2FkRmlsZXMoZmlsZUxpc3Q6IEZpbGVMaXN0IHwgRmlsZVtdKTogdm9pZDtcclxuICAgIHByaXZhdGUgdXBsb2FkO1xyXG4gICAgcHJpdmF0ZSBwb3N0O1xyXG4gICAgcHJpdmF0ZSB4aHI7XHJcbiAgICBwcml2YXRlIGNsZWFuO1xyXG4gICAgYWJvcnQoZmlsZT86IFVwbG9hZEZpbGUpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBwcmVmaXhDbHM7XHJcbiAgICBwcml2YXRlIHNldENsYXNzTWFwO1xyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgZWw6IEVsZW1lbnRSZWYsIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSk7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19