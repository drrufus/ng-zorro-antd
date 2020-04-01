/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzToolTipComponent } from 'ng-zorro-antd/tooltip';
export declare class NzPopoverComponent extends NzToolTipComponent {
    noAnimation?: NzNoAnimationDirective | undefined;
    _prefix: string;
    /**
     * Use `neverUsedTemplate` to force `nzTemplate` to be catched by `nzPopoverContent`.
     */
    nzTitle: NzTSType;
    nzTitleTemplate: TemplateRef<void>;
    nzContent: NzTSType;
    nzContentTemplate: TemplateRef<void>;
    nzShowPopoverCloseButton: boolean;
    nzPopoverCloseButtonLabel: string;
    nzPopoverForceRestoreFocus: boolean;
    readonly simpleHeader: boolean;
    focusableHeader: ElementRef;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    focusOnHeader(): void;
    afterAppearing(): void;
}
