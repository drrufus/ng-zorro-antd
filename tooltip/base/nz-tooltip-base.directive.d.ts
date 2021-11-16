/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { NgStyleInterface, NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzTooltipTrigger } from '../nz-tooltip.definitions';
import { NzTooltipBaseComponentLegacy } from './nz-tooltip-base-legacy.component';
import { NzTooltipBaseComponent } from './nz-tooltip-base.component';
import * as ɵngcc0 from '@angular/core';
export declare abstract class NzTooltipBaseDirective implements OnChanges, OnInit, OnDestroy, AfterViewInit {
    elementRef: ElementRef;
    protected hostView: ViewContainerRef;
    protected resolver: ComponentFactoryResolver;
    protected renderer: Renderer2;
    /**
     * @deprecated 9.0.0. This will always be `null`.
     */
    protected _tooltip?: NzTooltipBaseComponentLegacy | undefined;
    protected noAnimation?: NzNoAnimationDirective | undefined;
    directiveNameTitle?: NzTSType | null;
    specificTitle?: NzTSType | null;
    directiveNameContent?: NzTSType | null;
    specificContent?: NzTSType | null;
    specificTrigger?: NzTooltipTrigger;
    specificPlacement?: string;
    showPopoverCloseButton?: boolean;
    popoverCloseButtonLabel?: string;
    tooltipRef: ComponentRef<NzTooltipBaseComponent>;
    popoverForceRestoreFocus: boolean;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTitle`.
     */
    nzTitle: NzTSType | null;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzPopoverContent`.
     */
    nzContent: NzTSType | null;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     */
    nzTrigger: NzTooltipTrigger;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipPlacement`.
     */
    nzPlacement: string;
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzOverlayClassName: string;
    nzOverlayStyle: NgStyleInterface;
    nzVisible: boolean;
    nzShowPopoverCloseButton: boolean;
    nzPopoverCloseButtonLabel: string;
    nzPopoverForceRestoreFocus: boolean;
    /**
     * For create tooltip dynamically. This should be override for each different component.
     */
    protected componentFactory: ComponentFactory<NzTooltipBaseComponent>;
    /**
     * This true title that would be used in other parts on this component.
     */
    protected readonly title: NzTSType | null;
    protected readonly content: NzTSType | null;
    protected readonly placement: string;
    protected readonly trigger: NzTooltipTrigger;
    protected needProxyProperties: string[];
    readonly nzVisibleChange: EventEmitter<boolean>;
    tooltip: NzTooltipBaseComponent;
    isTooltipComponentVisible: boolean;
    /**
     * @deprecated 9.0.0. Tooltips would always be dynamic in 9.0.0.
     */
    protected isDynamicTooltip: boolean;
    protected readonly triggerUnlisteners: Array<() => void>;
    protected $destroy: Subject<void>;
    private delayTimer?;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, 
    /**
     * @deprecated 9.0.0. This will always be `null`.
     */
    _tooltip?: NzTooltipBaseComponentLegacy | undefined, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    /**
     * Force the component to update its position.
     */
    updatePosition(): void;
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    protected createDynamicTooltipComponent(): void;
    protected registerTriggers(): void;
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     */
    protected updateChangedProperties(propertiesOrChanges: string[] | SimpleChanges): void;
    private updateComponentValue;
    private delayEnterLeave;
    private removeTriggerListeners;
    private clearTogglingTimer;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTooltipBaseDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTooltipBaseDirective, never, never, { "nzTrigger": "nzTrigger"; "nzPlacement": "nzPlacement"; "nzTitle": "nzTitle"; "nzContent": "nzContent"; "nzMouseEnterDelay": "nzMouseEnterDelay"; "nzMouseLeaveDelay": "nzMouseLeaveDelay"; "nzOverlayClassName": "nzOverlayClassName"; "nzOverlayStyle": "nzOverlayStyle"; "nzVisible": "nzVisible"; "nzShowPopoverCloseButton": "nzShowPopoverCloseButton"; "nzPopoverCloseButtonLabel": "nzPopoverCloseButtonLabel"; "nzPopoverForceRestoreFocus": "nzPopoverForceRestoreFocus"; }, { "nzVisibleChange": "nzVisibleChange"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJuei10b29sdGlwLWJhc2UuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrR0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nU3R5bGVJbnRlcmZhY2UsIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi4vbnotdG9vbHRpcC5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kgfSBmcm9tICcuL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBwcm90ZWN0ZWQgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcclxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyB3aWxsIGFsd2F5cyBiZSBgbnVsbGAuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfdG9vbHRpcD86IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kgfCB1bmRlZmluZWQ7XHJcbiAgICBwcm90ZWN0ZWQgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xyXG4gICAgZGlyZWN0aXZlTmFtZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gICAgc3BlY2lmaWNUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcclxuICAgIGRpcmVjdGl2ZU5hbWVDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xyXG4gICAgc3BlY2lmaWNDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xyXG4gICAgc3BlY2lmaWNUcmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlcjtcclxuICAgIHNwZWNpZmljUGxhY2VtZW50Pzogc3RyaW5nO1xyXG4gICAgc2hvd1BvcG92ZXJDbG9zZUJ1dHRvbj86IGJvb2xlYW47XHJcbiAgICBwb3BvdmVyQ2xvc2VCdXR0b25MYWJlbD86IHN0cmluZztcclxuICAgIHRvb2x0aXBSZWY6IENvbXBvbmVudFJlZjxOelRvb2x0aXBCYXNlQ29tcG9uZW50PjtcclxuICAgIHBvcG92ZXJGb3JjZVJlc3RvcmVGb2N1czogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwVGl0bGVgLlxyXG4gICAgICovXHJcbiAgICBuelRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXHJcbiAgICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56UG9wb3ZlckNvbnRlbnRgLlxyXG4gICAgICovXHJcbiAgICBuekNvbnRlbnQ6IE56VFNUeXBlIHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwVHJpZ2dlcmAuXHJcbiAgICAgKi9cclxuICAgIG56VHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlcjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwUGxhY2VtZW50YC5cclxuICAgICAqL1xyXG4gICAgbnpQbGFjZW1lbnQ6IHN0cmluZztcclxuICAgIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXI7XHJcbiAgICBuek1vdXNlTGVhdmVEZWxheTogbnVtYmVyO1xyXG4gICAgbnpPdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBuek92ZXJsYXlTdHlsZTogTmdTdHlsZUludGVyZmFjZTtcclxuICAgIG56VmlzaWJsZTogYm9vbGVhbjtcclxuICAgIG56U2hvd1BvcG92ZXJDbG9zZUJ1dHRvbjogYm9vbGVhbjtcclxuICAgIG56UG9wb3ZlckNsb3NlQnV0dG9uTGFiZWw6IHN0cmluZztcclxuICAgIG56UG9wb3ZlckZvcmNlUmVzdG9yZUZvY3VzOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb3IgY3JlYXRlIHRvb2x0aXAgZHluYW1pY2FsbHkuIFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRlIGZvciBlYWNoIGRpZmZlcmVudCBjb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56VG9vbHRpcEJhc2VDb21wb25lbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHRydWUgdGl0bGUgdGhhdCB3b3VsZCBiZSB1c2VkIGluIG90aGVyIHBhcnRzIG9uIHRoaXMgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb250ZW50OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlcjtcclxuICAgIHByb3RlY3RlZCBuZWVkUHJveHlQcm9wZXJ0aWVzOiBzdHJpbmdbXTtcclxuICAgIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgdG9vbHRpcDogTnpUb29sdGlwQmFzZUNvbXBvbmVudDtcclxuICAgIGlzVG9vbHRpcENvbXBvbmVudFZpc2libGU6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUb29sdGlwcyB3b3VsZCBhbHdheXMgYmUgZHluYW1pYyBpbiA5LjAuMC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGlzRHluYW1pY1Rvb2x0aXA6IGJvb2xlYW47XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdHJpZ2dlclVubGlzdGVuZXJzOiBBcnJheTwoKSA9PiB2b2lkPjtcclxuICAgIHByb3RlY3RlZCAkZGVzdHJveTogU3ViamVjdDx2b2lkPjtcclxuICAgIHByaXZhdGUgZGVsYXlUaW1lcj87XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZiwgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIHdpbGwgYWx3YXlzIGJlIGBudWxsYC5cclxuICAgICAqL1xyXG4gICAgX3Rvb2x0aXA/OiBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5IHwgdW5kZWZpbmVkLCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCB1bmRlZmluZWQpO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgc2hvdygpOiB2b2lkO1xyXG4gICAgaGlkZSgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JjZSB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgcG9zaXRpb24uXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIGR5bmFtaWMgdG9vbHRpcCBjb21wb25lbnQuIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZS5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk6IHZvaWQ7XHJcbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJUcmlnZ2VycygpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTeW5jIGNoYW5nZWQgcHJvcGVydGllcyB0byB0aGUgY29tcG9uZW50IGFuZCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhhdCBjb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB1cGRhdGVDaGFuZ2VkUHJvcGVydGllcyhwcm9wZXJ0aWVzT3JDaGFuZ2VzOiBzdHJpbmdbXSB8IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb21wb25lbnRWYWx1ZTtcclxuICAgIHByaXZhdGUgZGVsYXlFbnRlckxlYXZlO1xyXG4gICAgcHJpdmF0ZSByZW1vdmVUcmlnZ2VyTGlzdGVuZXJzO1xyXG4gICAgcHJpdmF0ZSBjbGVhclRvZ2dsaW5nVGltZXI7XHJcbn1cclxuIl19