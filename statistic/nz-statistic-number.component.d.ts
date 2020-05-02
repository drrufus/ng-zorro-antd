/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, TemplateRef } from '@angular/core';
import { NzStatisticValueType } from './nz-statistic-definitions';
import * as ɵngcc0 from '@angular/core';
export declare class NzStatisticNumberComponent implements OnChanges {
    private locale_id;
    nzValue: NzStatisticValueType;
    nzValueTemplate: TemplateRef<{
        $implicit: NzStatisticValueType;
    }>;
    displayInt: string;
    displayDecimal: string;
    constructor(locale_id: string);
    ngOnChanges(): void;
    private formatNumber;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzStatisticNumberComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzStatisticNumberComponent, "nz-statistic-number", ["nzStatisticNumber"], { "nzValue": "nzValue"; "nzValueTemplate": "nzValueTemplate"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7O0FBV0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgT25DaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9IGZyb20gJy4vbnotc3RhdGlzdGljLWRlZmluaXRpb25zJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpTdGF0aXN0aWNOdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBsb2NhbGVfaWQ7XHJcbiAgICBuelZhbHVlOiBOelN0YXRpc3RpY1ZhbHVlVHlwZTtcclxuICAgIG56VmFsdWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8e1xyXG4gICAgICAgICRpbXBsaWNpdDogTnpTdGF0aXN0aWNWYWx1ZVR5cGU7XHJcbiAgICB9PjtcclxuICAgIGRpc3BsYXlJbnQ6IHN0cmluZztcclxuICAgIGRpc3BsYXlEZWNpbWFsOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGVfaWQ6IHN0cmluZyk7XHJcbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBmb3JtYXROdW1iZXI7XHJcbn1cclxuIl19