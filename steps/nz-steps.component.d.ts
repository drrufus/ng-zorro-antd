/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { NgClassType, NzSizeDSType } from 'ng-zorro-antd/core';
import { NzStepComponent } from './nz-step.component';
import * as i0 from "@angular/core";
export declare type NzDirectionType = 'horizontal' | 'vertical';
export declare type NzStatusType = 'wait' | 'process' | 'finish' | 'error';
export declare class NzStepsComponent implements OnChanges, OnInit, OnDestroy, AfterContentInit {
    steps: QueryList<NzStepComponent>;
    nzCurrent: number;
    nzDirection: NzDirectionType;
    nzLabelPlacement: 'horizontal' | 'vertical';
    nzType: 'default' | 'navigation';
    nzSize: NzSizeDSType;
    nzStartIndex: number;
    nzStatus: NzStatusType;
    nzProgressDot: boolean | TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    readonly nzIndexChange: EventEmitter<number>;
    private destroy$;
    private indexChangeSubscription;
    showProcessDot: boolean;
    customProcessDotTemplate: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    classMap: NgClassType;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    private updateChildrenSteps;
    private setClassMap;
    static ɵfac: i0.ɵɵFactoryDef<NzStepsComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzStepsComponent, "nz-steps", ["nzSteps"], { 'nzCurrent': "nzCurrent", 'nzDirection': "nzDirection", 'nzLabelPlacement': "nzLabelPlacement", 'nzType': "nzType", 'nzSize': "nzSize", 'nzStartIndex': "nzStartIndex", 'nzStatus': "nzStatus", 'nzProgressDot': "nzProgressDot" }, { 'nzIndexChange': "nzIndexChange" }, ["steps"]>;
}
