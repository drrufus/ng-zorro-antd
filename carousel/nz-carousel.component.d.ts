import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, QueryList, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NzConfigService, NzDomEventService, NzDragService } from 'ng-zorro-antd/core';
import { NzCarouselContentDirective } from './nz-carousel-content.directive';
import { FromToInterface, NzCarouselDotPosition, NzCarouselEffects, NzCarouselStrategyRegistryItem } from './nz-carousel-definitions';
import { NzCarouselBaseStrategy } from './strategies/base-strategy';
import * as i0 from "@angular/core";
export declare class NzCarouselComponent implements AfterContentInit, AfterViewInit, OnDestroy, OnChanges {
    readonly nzConfigService: NzConfigService;
    private readonly renderer;
    private readonly cdr;
    private readonly platform;
    private readonly nzDomEventService;
    private readonly nzDragService;
    private customStrategies;
    carouselContents: QueryList<NzCarouselContentDirective>;
    slickList: ElementRef;
    slickTrack: ElementRef;
    nzDotRender: TemplateRef<{
        $implicit: number;
    }>;
    nzEffect: NzCarouselEffects;
    nzEnableSwipe: boolean;
    nzDots: boolean;
    nzAutoPlay: boolean;
    nzAutoPlaySpeed: number;
    nzTransitionSpeed: number;
    nzVertical: boolean;
    nzDotPosition: NzCarouselDotPosition;
    private _dotPosition;
    readonly nzBeforeChange: EventEmitter<FromToInterface>;
    readonly nzAfterChange: EventEmitter<number>;
    activeIndex: number;
    el: HTMLElement;
    slickListEl: HTMLElement;
    slickTrackEl: HTMLElement;
    strategy: NzCarouselBaseStrategy;
    vertical: boolean;
    transitionInProgress: number | null;
    private destroy$;
    private gestureRect;
    private pointerDelta;
    private isTransiting;
    private isDragging;
    constructor(elementRef: ElementRef, nzConfigService: NzConfigService, renderer: Renderer2, cdr: ChangeDetectorRef, platform: Platform, nzDomEventService: NzDomEventService, nzDragService: NzDragService, customStrategies: NzCarouselStrategyRegistryItem[]);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onKeyDown(e: KeyboardEvent): void;
    next(): void;
    pre(): void;
    goTo(index: number): void;
    private switchStrategy;
    private scheduleNextTransition;
    private clearScheduledTransition;
    private markContentActive;
    /**
     * Drag carousel.
     * @param event
     */
    pointerDown: (event: TouchEvent | MouseEvent) => void;
    private syncStrategy;
    static ɵfac: i0.ɵɵFactoryDef<NzCarouselComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzCarouselComponent, "nz-carousel", ["nzCarousel"], { 'nzDotRender': "nzDotRender", 'nzEffect': "nzEffect", 'nzEnableSwipe': "nzEnableSwipe", 'nzDots': "nzDots", 'nzAutoPlay': "nzAutoPlay", 'nzAutoPlaySpeed': "nzAutoPlaySpeed", 'nzTransitionSpeed': "nzTransitionSpeed", 'nzVertical': "nzVertical", 'nzDotPosition': "nzDotPosition" }, { 'nzBeforeChange': "nzBeforeChange", 'nzAfterChange': "nzAfterChange" }, ["carouselContents"]>;
}
