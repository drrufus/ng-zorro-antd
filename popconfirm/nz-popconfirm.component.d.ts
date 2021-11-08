/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipTrigger, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import { ElementRef } from '@angular/core';
import { FocusTrapFactory } from '@angular/cdk/a11y';
export declare class NzPopconfirmComponent extends NzToolTipComponent {
    private focusTrapFactory;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzOkText: string;
    nzOkType: string;
    nzCancelText: string;
    nzCondition: boolean;
    nzIcon: string | TemplateRef<void>;
    readonly nzOnCancel: EventEmitter<void>;
    readonly nzOnConfirm: EventEmitter<void>;
    popoverContainer: ElementRef;
    private focusTrap;
    private previouslyFocusedElement;
    private focusableTitle;
    _prefix: string;
    _trigger: NzTooltipTrigger;
    _hasBackdrop: boolean;
    constructor(cdr: ChangeDetectorRef, focusTrapFactory: FocusTrapFactory, noAnimation?: NzNoAnimationDirective | undefined);
    show(): void;
    close(): void;
    onCancel(): void;
    onConfirm(): void;
}
