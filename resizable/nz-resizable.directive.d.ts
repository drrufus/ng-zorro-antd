/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { NzResizableService } from './nz-resizable.service';
import * as i0 from "@angular/core";
export interface NzResizeEvent {
    width?: number;
    height?: number;
    col?: number;
    mouseEvent?: MouseEvent | TouchEvent;
}
export declare class NzResizableDirective implements AfterViewInit, OnDestroy {
    private elementRef;
    private renderer;
    private nzResizableService;
    private platform;
    private ngZone;
    nzBounds: 'window' | 'parent' | ElementRef<HTMLElement>;
    nzMaxHeight: number;
    nzMaxWidth: number;
    nzMinHeight: number;
    nzMinWidth: number;
    nzGridColumnCount: number;
    nzMaxColumn: number;
    nzMinColumn: number;
    nzLockAspectRatio: boolean;
    nzPreview: boolean;
    readonly nzResize: EventEmitter<NzResizeEvent>;
    readonly nzResizeEnd: EventEmitter<NzResizeEvent>;
    readonly nzResizeStart: EventEmitter<NzResizeEvent>;
    resizing: boolean;
    private elRect;
    private currentHandleEvent;
    private ghostElement;
    private el;
    private sizeCache;
    private destroy$;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2, nzResizableService: NzResizableService, platform: Platform, ngZone: NgZone);
    onMouseenter(): void;
    onMouseleave(): void;
    setPosition(): void;
    calcSize(width: number, height: number, ratio: number): NzResizeEvent;
    setCursor(): void;
    resize(event: MouseEvent | TouchEvent): void;
    endResize(event: MouseEvent | TouchEvent): void;
    previewResize({ width, height }: NzResizeEvent): void;
    createGhostElement(): void;
    removeGhostElement(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzResizableDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzResizableDirective, "[nz-resizable]", ["nzResizable"], { 'nzBounds': "nzBounds", 'nzMaxHeight': "nzMaxHeight", 'nzMaxWidth': "nzMaxWidth", 'nzMinHeight': "nzMinHeight", 'nzMinWidth': "nzMinWidth", 'nzGridColumnCount': "nzGridColumnCount", 'nzMaxColumn': "nzMaxColumn", 'nzMinColumn': "nzMinColumn", 'nzLockAspectRatio': "nzLockAspectRatio", 'nzPreview': "nzPreview" }, { 'nzResize': "nzResize", 'nzResizeEnd': "nzResizeEnd", 'nzResizeStart': "nzResizeStart" }, never>;
}
