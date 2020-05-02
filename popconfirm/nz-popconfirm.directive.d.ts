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
import * as ɵngcc0 from '@angular/core';
export declare class NzPopconfirmDirective extends NzTooltipBaseDirective implements OnInit {
    noAnimation?: NzNoAnimationDirective | undefined;
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
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     */
    nzTrigger: NzTooltipTrigger;
    readonly nzOnCancel: EventEmitter<void>;
    readonly nzOnConfirm: EventEmitter<void>;
    componentFactory: ComponentFactory<NzPopconfirmComponent>;
    protected needProxyProperties: string[];
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: NzPopconfirmComponent, noAnimation?: NzNoAnimationDirective | undefined);
    /**
     * @override
     */
    protected createDynamicTooltipComponent(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzPopconfirmDirective, [null, null, null, null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzPopconfirmDirective, "[nz-popconfirm]", ["nzPopconfirm"], { "nzTrigger": "nzTrigger"; "specificTitle": "nzPopconfirmTitle"; "directiveNameTitle": "nz-popconfirm"; "specificTrigger": "nzPopconfirmTrigger"; "specificPlacement": "nzPopconfirmPlacement"; "nzOkText": "nzOkText"; "nzOkType": "nzOkType"; "nzCancelText": "nzCancelText"; "nzIcon": "nzIcon"; "nzCondition": "nzCondition"; }, { "nzOnCancel": "nzOnCancel"; "nzOnConfirm": "nzOnConfirm"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibnotcG9wY29uZmlybS5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSwgTnpUb29sdGlwVHJpZ2dlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XHJcbmltcG9ydCB7IE56UG9wY29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vbnotcG9wY29uZmlybS5jb21wb25lbnQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelBvcGNvbmZpcm1EaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcclxuICAgIHNwZWNpZmljVGl0bGU6IE56VFNUeXBlO1xyXG4gICAgZGlyZWN0aXZlTmFtZVRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcbiAgICBzcGVjaWZpY1RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgICBzcGVjaWZpY1BsYWNlbWVudDogc3RyaW5nO1xyXG4gICAgbnpPa1RleHQ6IHN0cmluZztcclxuICAgIG56T2tUeXBlOiBzdHJpbmc7XHJcbiAgICBuekNhbmNlbFRleHQ6IHN0cmluZztcclxuICAgIG56SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuekNvbmRpdGlvbjogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwVHJpZ2dlcmAuXHJcbiAgICAgKi9cclxuICAgIG56VHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlcjtcclxuICAgIHJlYWRvbmx5IG56T25DYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IG56T25Db25maXJtOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56UG9wY29uZmlybUNvbXBvbmVudD47XHJcbiAgICBwcm90ZWN0ZWQgbmVlZFByb3h5UHJvcGVydGllczogc3RyaW5nW107XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZiwgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgdG9vbHRpcDogTnpQb3Bjb25maXJtQ29tcG9uZW50LCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCB1bmRlZmluZWQpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk6IHZvaWQ7XHJcbn1cclxuIl19