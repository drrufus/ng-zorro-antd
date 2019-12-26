import { EventEmitter } from '@angular/core';
import { HSLA, RGBA } from 'ngx-color';
export declare class SketchFieldsComponent {
    hsl: HSLA;
    rgb: RGBA;
    hex: string;
    disableAlpha: boolean;
    onChange: EventEmitter<any>;
    input: {
        [key: string]: string;
    };
    label: {
        [key: string]: string;
    };
    round(value: any): number;
    handleChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
}
