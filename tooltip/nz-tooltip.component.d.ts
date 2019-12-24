/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponent } from './nz-tooltip-base.component';
import * as i0 from "@angular/core";
export declare class NzToolTipComponent extends NzTooltipBaseComponent {
    noAnimation?: NzNoAnimationDirective | undefined;
    nzTitle: NzTSType | null;
    nzTitleTemplate: TemplateRef<void>;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    protected isEmpty(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<NzToolTipComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzToolTipComponent, "nz-tooltip", ["nzTooltipComponent"], { 'nzTitle': "nzTitle" }, {}, ["nzTitleTemplate"]>;
}
