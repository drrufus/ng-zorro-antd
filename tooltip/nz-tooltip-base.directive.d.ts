import { AfterViewInit, ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { NgStyleInterface, NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzTooltipBaseComponent } from './nz-tooltip-base.component';
import { NzTooltipTrigger } from './nz-tooltip.definitions';
import * as i0 from "@angular/core";
export declare abstract class NzTooltipBaseDirective implements OnChanges, OnInit, OnDestroy, AfterViewInit {
    elementRef: ElementRef;
    protected hostView: ViewContainerRef;
    protected resolver: ComponentFactoryResolver;
    protected renderer: Renderer2;
    protected noAnimation?: NzNoAnimationDirective | undefined;
    directiveNameTitle?: NzTSType | null;
    specificTitle?: NzTSType | null;
    directiveNameContent?: NzTSType | null;
    specificContent?: NzTSType | null;
    specificTrigger?: NzTooltipTrigger;
    specificPlacement?: string;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * Please use a more specific API. Like `nzTooltipTitle`.
     */
    nzTitle: NzTSType | null;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * Please use a more specific API. Like `nzPopoverContent`.
     */
    nzContent: NzTSType | null;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     */
    nzTrigger: NzTooltipTrigger;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * Please use a more specific API. Like `nzTooltipPlacement`.
     */
    nzPlacement: string;
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzOverlayClassName: string;
    nzOverlayStyle: NgStyleInterface;
    nzVisible: boolean;
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
    isTooltipComponentVisible: boolean;
    tooltip: NzTooltipBaseComponent;
    protected readonly $destroy: Subject<void>;
    protected readonly triggerDisposables: Array<() => void>;
    private delayTimer?;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective | undefined);
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
    protected createTooltipComponent(): void;
    protected registerTriggers(): void;
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     */
    protected updateChangedProperties(propertiesOrChanges: string[] | SimpleChanges): void;
    private updateComponentValue;
    private delayEnterLeave;
    private removeTriggerListeners;
    private clearTogglingTimer;
    static ɵfac: i0.ɵɵFactoryDef<NzTooltipBaseDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzTooltipBaseDirective, never, never, { 'nzTitle': "nzTitle", 'nzContent': "nzContent", 'nzTrigger': "nzTrigger", 'nzPlacement': "nzPlacement", 'nzMouseEnterDelay': "nzMouseEnterDelay", 'nzMouseLeaveDelay': "nzMouseLeaveDelay", 'nzOverlayClassName': "nzOverlayClassName", 'nzOverlayStyle': "nzOverlayStyle", 'nzVisible': "nzVisible" }, { 'nzVisibleChange': "nzVisibleChange" }, never>;
}
