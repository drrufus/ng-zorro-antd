/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzConfigService, NzSizeLDSType } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzSpinComponent implements OnChanges, OnDestroy, OnInit {
    nzConfigService: NzConfigService;
    private cdr;
    nzIndicator: TemplateRef<void>;
    nzSize: NzSizeLDSType;
    nzTip: string;
    nzDelay: number;
    nzSimple: boolean;
    nzSpinning: boolean;
    loading: boolean;
    private destroy$;
    private spinning$;
    private loading$;
    private loading_;
    subscribeLoading(): void;
    unsubscribeLoading(): void;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSpinComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSpinComponent, "nz-spin", ["nzSpin"], { "nzSize": "nzSize"; "nzDelay": "nzDelay"; "nzSimple": "nzSimple"; "nzSpinning": "nzSpinning"; "nzIndicator": "nzIndicator"; "nzTip": "nzTip"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3Bpbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotc3Bpbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelNwaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICAgIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBuekluZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuelNpemU6IE56U2l6ZUxEU1R5cGU7XHJcbiAgICBuelRpcDogc3RyaW5nO1xyXG4gICAgbnpEZWxheTogbnVtYmVyO1xyXG4gICAgbnpTaW1wbGU6IGJvb2xlYW47XHJcbiAgICBuelNwaW5uaW5nOiBib29sZWFuO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBwcml2YXRlIHNwaW5uaW5nJDtcclxuICAgIHByaXZhdGUgbG9hZGluZyQ7XHJcbiAgICBwcml2YXRlIGxvYWRpbmdfO1xyXG4gICAgc3Vic2NyaWJlTG9hZGluZygpOiB2b2lkO1xyXG4gICAgdW5zdWJzY3JpYmVMb2FkaW5nKCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==