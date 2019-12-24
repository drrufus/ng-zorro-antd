/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzResizableService } from './nz-resizable.service';
import * as i0 from "@angular/core";
export declare type NzResizeDirection = 'top' | 'right' | 'bottom' | 'left' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft';
export declare class NzResizeHandleMouseDownEvent {
    direction: NzResizeDirection;
    mouseEvent: MouseEvent | TouchEvent;
    constructor(direction: NzResizeDirection, mouseEvent: MouseEvent | TouchEvent);
}
export declare class NzResizeHandleComponent implements OnInit, OnDestroy {
    private nzResizableService;
    private cdr;
    nzDirection: NzResizeDirection;
    readonly nzMouseDown: EventEmitter<NzResizeHandleMouseDownEvent>;
    entered: boolean;
    private destroy$;
    constructor(nzResizableService: NzResizableService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    onMousedown(event: MouseEvent | TouchEvent): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzResizeHandleComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzResizeHandleComponent, "nz-resize-handle, [nz-resize-handle]", ["nzResizeHandle"], { 'nzDirection': "nzDirection" }, { 'nzMouseDown': "nzMouseDown" }, never>;
}
