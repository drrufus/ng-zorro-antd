import { EventEmitter } from '@angular/core';
import { RGBA } from 'ngx-color';
export declare class CompactFieldsComponent {
    hex: string;
    rgb: RGBA;
    onChange: EventEmitter<any>;
    HEXWrap: {
        [key: string]: string;
    };
    HEXinput: {
        [key: string]: string;
    };
    HEXlabel: {
        [key: string]: string;
    };
    RGBwrap: {
        [key: string]: string;
    };
    RGBinput: {
        [key: string]: string;
    };
    RGBlabel: {
        [key: string]: string;
    };
    handleChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
}
