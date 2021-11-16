/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges } from '@angular/core';
import { DisplayedStep, ExtendedMark } from './nz-slider-definitions';
import * as ɵngcc0 from '@angular/core';
export declare class NzSliderStepComponent implements OnChanges {
    nzLowerBound: number | null;
    nzUpperBound: number | null;
    nzMarksArray: ExtendedMark[];
    nzVertical: boolean;
    nzIncluded: boolean;
    steps: DisplayedStep[];
    ngOnChanges(changes: SimpleChanges): void;
    trackById(_index: number, step: DisplayedStep): number;
    private buildSteps;
    private togglePointActive;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSliderStepComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSliderStepComponent, "nz-slider-step", ["nzSliderStep"], { "nzLowerBound": "nzLowerBound"; "nzUpperBound": "nzUpperBound"; "nzVertical": "nzVertical"; "nzIncluded": "nzIncluded"; "nzMarksArray": "nzMarksArray"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXN0ZXAuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXNsaWRlci1zdGVwLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlzcGxheWVkU3RlcCwgRXh0ZW5kZWRNYXJrIH0gZnJvbSAnLi9uei1zbGlkZXItZGVmaW5pdGlvbnMnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelNsaWRlclN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgbnpMb3dlckJvdW5kOiBudW1iZXIgfCBudWxsO1xyXG4gICAgbnpVcHBlckJvdW5kOiBudW1iZXIgfCBudWxsO1xyXG4gICAgbnpNYXJrc0FycmF5OiBFeHRlbmRlZE1hcmtbXTtcclxuICAgIG56VmVydGljYWw6IGJvb2xlYW47XHJcbiAgICBuekluY2x1ZGVkOiBib29sZWFuO1xyXG4gICAgc3RlcHM6IERpc3BsYXllZFN0ZXBbXTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgdHJhY2tCeUlkKF9pbmRleDogbnVtYmVyLCBzdGVwOiBEaXNwbGF5ZWRTdGVwKTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBidWlsZFN0ZXBzO1xyXG4gICAgcHJpdmF0ZSB0b2dnbGVQb2ludEFjdGl2ZTtcclxufVxyXG4iXX0=