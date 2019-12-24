import { AfterViewInit, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NzNoAnimationDirective implements OnChanges, AfterViewInit {
    private element;
    private renderer;
    private animationType;
    nzNoAnimation: boolean;
    constructor(element: ElementRef, renderer: Renderer2, animationType: string);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    private updateClass;
    static ɵfac: i0.ɵɵFactoryDef<NzNoAnimationDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzNoAnimationDirective, "[nzNoAnimation]", ["nzNoAnimation"], { 'nzNoAnimation': "nzNoAnimation" }, {}, never>;
}
