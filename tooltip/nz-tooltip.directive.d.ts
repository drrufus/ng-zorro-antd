/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentFactory, ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzTooltipBaseDirective } from './nz-tooltip-base.directive';
import { NzToolTipComponent } from './nz-tooltip.component';
import { NzTooltipTrigger } from './nz-tooltip.definitions';
import * as i0 from "@angular/core";
export declare class NzTooltipDirective extends NzTooltipBaseDirective {
    /**
     * The title that should have highest priority.
     */
    specificTitle: NzTSType;
    /**
     * Use the directive's name as the title that have priority in the second place.
     */
    directiveNameTitle: NzTSType | null;
    specificTrigger: NzTooltipTrigger;
    specificPlacement: string;
    componentFactory: ComponentFactory<NzToolTipComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective);
    static ɵfac: i0.ɵɵFactoryDef<NzTooltipDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzTooltipDirective, "[nz-tooltip]", ["nzTooltip"], { 'specificTitle': "nzTooltipTitle", 'directiveNameTitle': "nz-tooltip", 'specificTrigger': "nzTooltipTrigger", 'specificPlacement': "nzTooltipPlacement" }, {}, never>;
}
