import { ColorWrap } from 'ngx-color';
export declare class SketchComponent extends ColorWrap {
    /** Remove alpha slider and options from picker */
    disableAlpha: boolean;
    /** Hex strings for default colors at bottom of picker */
    presetColors: string[];
    /** Width of picker */
    width: number;
    activeBackground: string;
    constructor();
    afterValidChange(): void;
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    handleBlockChange({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
}
export declare class ColorSketchModule {
}
