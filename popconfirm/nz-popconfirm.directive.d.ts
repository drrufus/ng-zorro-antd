/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzTooltipBaseDirective, NzTooltipTrigger } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
import * as i0 from "@angular/core";
export declare class NzPopconfirmDirective extends NzTooltipBaseDirective implements OnInit {
    specificTitle: NzTSType;
    directiveNameTitle: NzTSType | null;
    specificTrigger: NzTooltipTrigger;
    specificPlacement: string;
    nzOkText: string;
    nzOkType: string;
    nzCancelText: string;
    nzIcon: string | TemplateRef<void>;
    nzCondition: boolean;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     */
    nzTrigger: NzTooltipTrigger;
    readonly nzOnCancel: EventEmitter<void>;
    readonly nzOnConfirm: EventEmitter<void>;
    protected readonly componentFactory: ComponentFactory<NzPopconfirmComponent>;
    protected readonly needProxyProperties: string[];
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective);
    /**
     * @override
     */
    protected createTooltipComponent(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzPopconfirmDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzPopconfirmDirective, "[nz-popconfirm]", ["nzPopconfirm"], { 'specificTitle': "nzPopconfirmTitle", 'directiveNameTitle': "nz-popconfirm", 'specificTrigger': "nzPopconfirmTrigger", 'specificPlacement': "nzPopconfirmPlacement", 'nzOkText': "nzOkText", 'nzOkType': "nzOkType", 'nzCancelText': "nzCancelText", 'nzIcon': "nzIcon", 'nzCondition': "nzCondition", 'nzTrigger': "nzTrigger" }, { 'nzOnCancel': "nzOnCancel", 'nzOnConfirm': "nzOnConfirm" }, never>;
}
