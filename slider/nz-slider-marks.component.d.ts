/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges } from '@angular/core';
import { DisplayedMark, ExtendedMark } from './nz-slider-definitions';
import * as i0 from "@angular/core";
export declare class NzSliderMarksComponent implements OnChanges {
    nzLowerBound: number | null;
    nzUpperBound: number | null;
    nzMarksArray: ExtendedMark[];
    nzMin: number;
    nzMax: number;
    nzVertical: boolean;
    nzIncluded: boolean;
    marks: DisplayedMark[];
    ngOnChanges(changes: SimpleChanges): void;
    trackById(_index: number, mark: DisplayedMark): number;
    private buildMarks;
    private getMarkStyles;
    private togglePointActive;
    static ɵfac: i0.ɵɵFactoryDef<NzSliderMarksComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzSliderMarksComponent, "nz-slider-marks", ["nzSliderMarks"], { 'nzLowerBound': "nzLowerBound", 'nzUpperBound': "nzUpperBound", 'nzMarksArray': "nzMarksArray", 'nzMin': "nzMin", 'nzMax': "nzMax", 'nzVertical': "nzVertical", 'nzIncluded': "nzIncluded" }, {}, never>;
}
