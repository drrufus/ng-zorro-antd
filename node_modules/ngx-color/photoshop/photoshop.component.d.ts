import { EventEmitter } from '@angular/core';
import { ColorWrap } from 'ngx-color';
export declare class PhotoshopComponent extends ColorWrap {
    /** Title text */
    header: string;
    onAccept: EventEmitter<Event>;
    onCancel: EventEmitter<Event>;
    circle: {
        width: string;
        height: string;
        borderRadius: string;
        boxShadow: string;
        transform: string;
    };
    constructor();
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
}
export declare class ColorPhotoshopModule {
}
