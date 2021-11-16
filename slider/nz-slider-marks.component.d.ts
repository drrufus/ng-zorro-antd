/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges } from '@angular/core';
import { DisplayedMark, ExtendedMark } from './nz-slider-definitions';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSliderMarksComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSliderMarksComponent, "nz-slider-marks", ["nzSliderMarks"], { "nzLowerBound": "nzLowerBound"; "nzUpperBound": "nzUpperBound"; "nzVertical": "nzVertical"; "nzIncluded": "nzIncluded"; "nzMarksArray": "nzMarksArray"; "nzMin": "nzMin"; "nzMax": "nzMax"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1zbGlkZXItbWFya3MuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7OztBQWNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNwbGF5ZWRNYXJrLCBFeHRlbmRlZE1hcmsgfSBmcm9tICcuL256LXNsaWRlci1kZWZpbml0aW9ucyc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56U2xpZGVyTWFya3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgbnpMb3dlckJvdW5kOiBudW1iZXIgfCBudWxsO1xyXG4gICAgbnpVcHBlckJvdW5kOiBudW1iZXIgfCBudWxsO1xyXG4gICAgbnpNYXJrc0FycmF5OiBFeHRlbmRlZE1hcmtbXTtcclxuICAgIG56TWluOiBudW1iZXI7XHJcbiAgICBuek1heDogbnVtYmVyO1xyXG4gICAgbnpWZXJ0aWNhbDogYm9vbGVhbjtcclxuICAgIG56SW5jbHVkZWQ6IGJvb2xlYW47XHJcbiAgICBtYXJrczogRGlzcGxheWVkTWFya1tdO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICB0cmFja0J5SWQoX2luZGV4OiBudW1iZXIsIG1hcms6IERpc3BsYXllZE1hcmspOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJ1aWxkTWFya3M7XHJcbiAgICBwcml2YXRlIGdldE1hcmtTdHlsZXM7XHJcbiAgICBwcml2YXRlIHRvZ2dsZVBvaW50QWN0aXZlO1xyXG59XHJcbiJdfQ==