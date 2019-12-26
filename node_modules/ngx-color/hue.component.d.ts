import { EventEmitter, OnChanges } from '@angular/core';
import { HSLA, HSLAsource } from './helpers/color.interfaces';
export declare class HueComponent implements OnChanges {
    hsl: HSLA;
    pointer: {
        [key: string]: string;
    };
    radius: number;
    shadow: string;
    hidePointer: boolean;
    direction: 'horizontal' | 'vertical';
    onChange: EventEmitter<{
        data: HSLAsource;
        $event: Event;
    }>;
    left: string;
    top: string;
    ngOnChanges(): void;
    handleChange({ top, left, containerHeight, containerWidth, $event }: {
        top: any;
        left: any;
        containerHeight: any;
        containerWidth: any;
        $event: any;
    }): any;
}
export declare class HueModule {
}
