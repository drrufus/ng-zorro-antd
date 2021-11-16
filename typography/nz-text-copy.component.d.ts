/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzCopyToClipboardService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
export declare class NzTextCopyComponent implements OnInit, OnDestroy {
    private host;
    private cdr;
    private copyToClipboard;
    private i18n;
    copied: boolean;
    copyId: number;
    locale: any;
    nativeElement: any;
    private destroy$;
    text: string;
    readonly textCopy: EventEmitter<string>;
    constructor(host: ElementRef, cdr: ChangeDetectorRef, copyToClipboard: NzCopyToClipboardService, i18n: NzI18nService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(): void;
    onCopied(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTextCopyComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTextCopyComponent, "nz-text-copy", ["nzTextCopy"], { "text": "text"; }, { "textCopy": "textCopy"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1jb3B5LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei10ZXh0LWNvcHkuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VGV4dENvcHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIGhvc3Q7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgY29weVRvQ2xpcGJvYXJkO1xyXG4gICAgcHJpdmF0ZSBpMThuO1xyXG4gICAgY29waWVkOiBib29sZWFuO1xyXG4gICAgY29weUlkOiBudW1iZXI7XHJcbiAgICBsb2NhbGU6IGFueTtcclxuICAgIG5hdGl2ZUVsZW1lbnQ6IGFueTtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSB0ZXh0Q29weTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0OiBFbGVtZW50UmVmLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBjb3B5VG9DbGlwYm9hcmQ6IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZSwgaTE4bjogTnpJMThuU2VydmljZSk7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIG9uQ2xpY2soKTogdm9pZDtcclxuICAgIG9uQ29waWVkKCk6IHZvaWQ7XHJcbn1cclxuIl19