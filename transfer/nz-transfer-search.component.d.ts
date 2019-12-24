/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<NzTransferSearchComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzTransferSearchComponent, "[nz-transfer-search]", ["nzTransferSearch"], { 'placeholder': "placeholder", 'value': "value", 'disabled': "disabled" }, { 'valueChanged': "valueChanged", 'valueClear': "valueClear" }, never>;
}
