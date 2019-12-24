/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnDestroy, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzToolTipComponent, NzTooltipTrigger } from 'ng-zorro-antd/tooltip';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NzPopconfirmComponent extends NzToolTipComponent implements OnDestroy {
    noAnimation?: NzNoAnimationDirective | undefined;
    nzCancelText: string;
    nzCondition: boolean;
    nzIcon: string | TemplateRef<void>;
    nzOkText: string;
    nzOkType: string;
    readonly nzOnCancel: Subject<void>;
    readonly nzOnConfirm: Subject<void>;
    protected _trigger: NzTooltipTrigger;
    _prefix: string;
    _hasBackdrop: boolean;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnDestroy(): void;
    show(): void;
    onCancel(): void;
    onConfirm(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzPopconfirmComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzPopconfirmComponent, "nz-popconfirm", ["nzPopconfirmComponent"], {}, {}, never>;
}
