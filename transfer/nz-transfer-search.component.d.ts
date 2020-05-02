/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzTransferSearchComponent implements OnChanges {
    private cdr;
    placeholder: string;
    value: string;
    disabled: boolean;
    readonly valueChanged: EventEmitter<string>;
    readonly valueClear: EventEmitter<void>;
    constructor(cdr: ChangeDetectorRef);
    _handle(): void;
    _clear(): void;
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTransferSearchComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTransferSearchComponent, "[nz-transfer-search]", ["nzTransferSearch"], { "value": "value"; "placeholder": "placeholder"; "disabled": "disabled"; }, { "valueChanged": "valueChanged"; "valueClear": "valueClear"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei10cmFuc2Zlci1zZWFyY2guY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7O0FBV0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VHJhbnNmZXJTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgdmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuICAgIHJlYWRvbmx5IHZhbHVlQ2xlYXI6IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgX2hhbmRsZSgpOiB2b2lkO1xyXG4gICAgX2NsZWFyKCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkO1xyXG59XHJcbiJdfQ==