/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export interface NzSliderTrackStyle {
    bottom?: string | null;
    height?: string | null;
    left?: string | null;
    width?: string | null;
    visibility?: string;
}
export declare class NzSliderTrackComponent implements OnChanges {
    nzOffset: number;
    nzLength: number;
    nzVertical: boolean;
    nzIncluded: boolean;
    style: NzSliderTrackStyle;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<NzSliderTrackComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzSliderTrackComponent, "nz-slider-track", ["nzSliderTrack"], { 'nzOffset': "nzOffset", 'nzLength': "nzLength", 'nzVertical': "nzVertical", 'nzIncluded': "nzIncluded" }, {}, never>;
}
