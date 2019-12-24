/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, OnDestroy, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NgClassInterface, NgStyleInterface, NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzTooltipTrigger } from './nz-tooltip.definitions';
import * as i0 from "@angular/core";
export declare abstract class NzTooltipBaseComponent implements OnDestroy {
    cdr: ChangeDetectorRef;
    noAnimation?: NzNoAnimationDirective | undefined;
    overlay: CdkConnectedOverlay;
    nzVisibleChange: Subject<boolean>;
    nzTitle: NzTSType | null;
    nzContent: NzTSType | null;
    nzOverlayClassName: string;
    nzOverlayStyle: NgStyleInterface;
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzVisible: boolean;
    _visible: boolean;
    nzTrigger: NzTooltipTrigger;
    protected _trigger: NzTooltipTrigger;
    nzPlacement: string;
    nzContentTemplate: TemplateRef<void>;
    nzTitleTemplate: TemplateRef<void>;
    origin: CdkOverlayOrigin;
    preferredPlacement: string;
    _classMap: NgClassInterface;
    _hasBackdrop: boolean;
    _prefix: string;
    _positions: ConnectionPositionPair[];
    readonly content: string | TemplateRef<void> | null;
    readonly title: string | TemplateRef<void> | null;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    updateByDirective(): void;
    /**
     * Force the component to update its position.
     */
    updatePosition(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    setClassMap(): void;
    setOverlayOrigin(origin: CdkOverlayOrigin): void;
    /**
     * Empty tooltip cannot be openned.
     */
    protected abstract isEmpty(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<NzTooltipBaseComponent>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzTooltipBaseComponent, never, never, {}, {}, never>;
}
export declare function isTooltipEmpty(value: string | TemplateRef<void> | null): boolean;
