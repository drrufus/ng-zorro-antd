/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
export declare class NzPopoverComponent extends NzToolTipComponent {
    noAnimation?: NzNoAnimationDirective | undefined;
    _prefix: string;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    protected isEmpty(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<NzPopoverComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzPopoverComponent, "nz-popover", ["nzPopoverComponent"], {}, {}, never>;
}
