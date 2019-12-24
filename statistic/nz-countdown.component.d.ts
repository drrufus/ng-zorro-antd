/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NzStatisticComponent } from './nz-statistic.component';
import * as i0 from "@angular/core";
export declare class NzCountdownComponent extends NzStatisticComponent implements OnInit, OnChanges, OnDestroy {
    private cdr;
    private ngZone;
    private platform;
    /** @override */
    nzFormat: string;
    readonly nzCountdownFinish: EventEmitter<void>;
    diff: number;
    private target;
    private updater_;
    constructor(cdr: ChangeDetectorRef, ngZone: NgZone, platform: Platform);
    /** @override */
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    syncTimer(): void;
    startTimer(): void;
    stopTimer(): void;
    /**
     * Update time that should be displayed on the screen.
     */
    protected updateValue(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzCountdownComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzCountdownComponent, "nz-countdown", ["nzCountdown"], { 'nzFormat': "nzFormat" }, { 'nzCountdownFinish': "nzCountdownFinish" }, never>;
}
