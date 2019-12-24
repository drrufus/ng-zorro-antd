/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NgClassType, NzConfigService } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
export declare class NzAlertComponent implements OnChanges {
    nzConfigService: NzConfigService;
    nzCloseText: string | TemplateRef<void>;
    nzIconType: NgClassType;
    nzMessage: string | TemplateRef<void>;
    nzDescription: string | TemplateRef<void>;
    nzType: 'success' | 'info' | 'warning' | 'error';
    nzCloseable: boolean;
    nzShowIcon: boolean;
    nzBanner: boolean;
    readonly nzOnClose: EventEmitter<boolean>;
    readonly iconType: NgClassType;
    destroy: boolean;
    iconTheme: string;
    isIconTypeObject: boolean;
    private isTypeSet;
    private isShowIconSet;
    private inferredIconType;
    constructor(nzConfigService: NzConfigService);
    closeAlert(): void;
    onFadeAnimationDone(): void;
    updateIconClassMap(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<NzAlertComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzAlertComponent, "nz-alert", ["nzAlert"], { 'nzCloseText': "nzCloseText", 'nzIconType': "nzIconType", 'nzMessage': "nzMessage", 'nzDescription': "nzDescription", 'nzType': "nzType", 'nzCloseable': "nzCloseable", 'nzShowIcon': "nzShowIcon", 'nzBanner': "nzBanner" }, { 'nzOnClose': "nzOnClose" }, never>;
}
