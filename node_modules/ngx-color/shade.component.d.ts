import { EventEmitter, OnChanges } from '@angular/core';
import { HSLA, RGBA } from './helpers/color.interfaces';
export declare class ShadeComponent implements OnChanges {
    hsl: HSLA;
    rgb: RGBA;
    pointer: {
        [key: string]: string;
    };
    shadow: string;
    radius: string;
    onChange: EventEmitter<any>;
    gradient: {
        [key: string]: string;
    };
    pointerLeft: number;
    pointerTop: number;
    ngOnChanges(): void;
    handleChange({ left, containerWidth, $event }: {
        left: any;
        containerWidth: any;
        $event: any;
    }): any;
}
export declare class ShadeModule {
}
