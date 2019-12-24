/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentFactory, ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzTooltipBaseDirective, NzTooltipTrigger } from 'ng-zorro-antd/tooltip';
import { NzPopoverComponent } from './nz-popover.component';
import * as i0 from "@angular/core";
export declare class NzPopoverDirective extends NzTooltipBaseDirective {
    noAnimation?: NzNoAnimationDirective | undefined;
    specificTitle: NzTSType;
    specificContent: NzTSType;
    directiveNameTitle: NzTSType | null;
    specificTrigger: NzTooltipTrigger;
    specificPlacement: string;
    componentFactory: ComponentFactory<NzPopoverComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective | undefined);
    static ɵfac: i0.ɵɵFactoryDef<NzPopoverDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzPopoverDirective, "[nz-popover]", ["nzPopover"], { 'specificTitle': "nzPopoverTitle", 'specificContent': "nzPopoverContent", 'directiveNameTitle': "nz-popover", 'specificTrigger': "nzPopoverTrigger", 'specificPlacement': "nzPopoverPlacement" }, {}, never>;
}
