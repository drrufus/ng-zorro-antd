/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, NgZone, Renderer2 } from '@angular/core';
import { NzTabPositionMode } from './nz-tabset.component';
import * as i0 from "@angular/core";
export declare class NzTabsInkBarDirective {
    private renderer;
    private elementRef;
    private ngZone;
    nzAnimated: boolean;
    nzPositionMode: NzTabPositionMode;
    constructor(renderer: Renderer2, elementRef: ElementRef, ngZone: NgZone);
    alignToElement(element: HTMLElement): void;
    setStyles(element: HTMLElement): void;
    getLeftPosition(element: HTMLElement): string;
    getElementWidth(element: HTMLElement): string;
    getTopPosition(element: HTMLElement): string;
    getElementHeight(element: HTMLElement): string;
    static ɵfac: i0.ɵɵFactoryDef<NzTabsInkBarDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzTabsInkBarDirective, "[nz-tabs-ink-bar]", ["nzTabsInkBar"], { 'nzAnimated': "nzAnimated", 'nzPositionMode': "nzPositionMode" }, {}, never>;
}
