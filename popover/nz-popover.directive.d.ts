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
import * as ɵngcc0 from '@angular/core';
export declare class NzPopoverDirective extends NzTooltipBaseDirective {
    noAnimation?: NzNoAnimationDirective | undefined;
    specificTitle: NzTSType;
    specificContent: NzTSType;
    directiveNameTitle: NzTSType | null;
    specificTrigger: NzTooltipTrigger;
    specificPlacement: string;
    showPopoverCloseButton: boolean;
    popoverCloseButtonLabel: string;
    popoverForceRestoreFocus: boolean;
    componentFactory: ComponentFactory<NzPopoverComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: NzPopoverComponent, noAnimation?: NzNoAnimationDirective | undefined);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzPopoverDirective, [null, null, null, null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzPopoverDirective, "[nz-popover]", ["nzPopover"], { "showPopoverCloseButton": "nzShowPopoverCloseButton"; "popoverCloseButtonLabel": "nzPopoverCloseButtonLabel"; "popoverForceRestoreFocus": "nzPopoverForceRestoreFocus"; "specificTitle": "nzPopoverTitle"; "specificContent": "nzPopoverContent"; "directiveNameTitle": "nz-popover"; "specificTrigger": "nzPopoverTrigger"; "specificPlacement": "nzPopoverPlacement"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibnotcG9wb3Zlci5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7O0FBWUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlLCBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuaW1wb3J0IHsgTnpQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1wb3BvdmVyLmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56UG9wb3ZlckRpcmVjdGl2ZSBleHRlbmRzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUge1xyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xyXG4gICAgc3BlY2lmaWNUaXRsZTogTnpUU1R5cGU7XHJcbiAgICBzcGVjaWZpY0NvbnRlbnQ6IE56VFNUeXBlO1xyXG4gICAgZGlyZWN0aXZlTmFtZVRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcbiAgICBzcGVjaWZpY1RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgICBzcGVjaWZpY1BsYWNlbWVudDogc3RyaW5nO1xyXG4gICAgc2hvd1BvcG92ZXJDbG9zZUJ1dHRvbjogYm9vbGVhbjtcclxuICAgIHBvcG92ZXJDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcbiAgICBwb3BvdmVyRm9yY2VSZXN0b3JlRm9jdXM6IGJvb2xlYW47XHJcbiAgICBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56UG9wb3ZlckNvbXBvbmVudD47XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZiwgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgdG9vbHRpcDogTnpQb3BvdmVyQ29tcG9uZW50LCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCB1bmRlZmluZWQpO1xyXG59XHJcbiJdfQ==