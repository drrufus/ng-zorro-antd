import { OnChanges } from '@angular/core';
import { RGB } from 'ngx-color';
export declare class PhotoshopPreviewsComponent implements OnChanges {
    rgb: RGB;
    currentColor: string;
    backgroundNew: string;
    ngOnChanges(): void;
}
