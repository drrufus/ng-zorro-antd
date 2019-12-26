import { EventEmitter, OnChanges } from '@angular/core';
import { HSLA, HSVA, HSVAsource } from './helpers/color.interfaces';
export declare class SaturationComponent implements OnChanges {
    hsl: HSLA;
    hsv: HSVA;
    radius: number;
    pointer: {
        [key: string]: string;
    };
    circle: {
        [key: string]: string;
    };
    onChange: EventEmitter<{
        data: HSVAsource;
        $event: Event;
    }>;
    background: string;
    pointerTop: string;
    pointerLeft: string;
    ngOnChanges(): void;
    handleChange({ top, left, containerHeight, containerWidth, $event }: {
        top: any;
        left: any;
        containerHeight: any;
        containerWidth: any;
        $event: any;
    }): void;
}
export declare class SaturationModule {
}
