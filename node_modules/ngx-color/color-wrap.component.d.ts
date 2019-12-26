import { EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Color, HSLA, HSVA, RGBA } from './helpers/color.interfaces';
export interface ColorEvent {
    $event: Event;
    color: Color;
}
export declare class ColorWrap implements OnInit, OnChanges, OnDestroy {
    className: string;
    color: HSLA | HSVA | RGBA | string;
    onChange: EventEmitter<ColorEvent>;
    onChangeComplete: EventEmitter<ColorEvent>;
    onSwatchHover: EventEmitter<ColorEvent>;
    oldHue: number;
    hsl: HSLA;
    hsv: HSVA;
    rgb: RGBA;
    hex: string;
    source: string;
    currentColor: string;
    changes: Subscription;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    setState(data: any): void;
    handleChange(data: any, $event: any): void;
    /** hook for components after a complete change */
    afterValidChange(): void;
    handleSwatchHover(data: any, $event: any): void;
}
export declare class ColorWrapModule {
}
