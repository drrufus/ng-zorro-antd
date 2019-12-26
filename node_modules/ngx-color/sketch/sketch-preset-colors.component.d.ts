import { EventEmitter } from '@angular/core';
import { Shape } from 'ngx-color';
export declare class SketchPresetColorsComponent {
    colors: string[] | Shape[];
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    swatchStyle: {
        borderRadius: string;
        boxShadow: string;
    };
    handleClick({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
    normalizeValue(val: string | Shape): Shape | {
        color: string;
    };
    focusStyle(val: string | Shape): {
        boxShadow: string;
    };
}
