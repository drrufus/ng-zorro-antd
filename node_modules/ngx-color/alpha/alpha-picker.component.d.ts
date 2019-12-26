import { OnChanges } from '@angular/core';
import { ColorWrap } from 'ngx-color';
export declare class AlphaPickerComponent extends ColorWrap implements OnChanges {
    /** Pixel value for picker width */
    width: string | number;
    /** Pixel value for picker height */
    height: string | number;
    direction: 'horizontal' | 'vertical';
    pointer: {
        [key: string]: string;
    };
    constructor();
    ngOnChanges(): void;
    handlePickerChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
}
export declare class ColorAlphaModule {
}
