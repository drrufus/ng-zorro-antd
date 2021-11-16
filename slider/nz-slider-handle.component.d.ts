/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { NgStyleInterface } from 'ng-zorro-antd/core';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { SliderShowTooltip } from './nz-slider-definitions';
import { NzSliderComponent } from './nz-slider.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzSliderHandleComponent implements OnChanges, OnDestroy {
    private sliderComponent;
    private cdr;
    tooltip: NzTooltipDirective;
    nzVertical: string;
    nzOffset: number;
    nzValue: number;
    nzTooltipVisible: SliderShowTooltip;
    nzTooltipPlacement: string;
    nzTipFormatter: (value: number) => string;
    nzActive: boolean;
    tooltipTitle: string;
    style: NgStyleInterface;
    private hovers_;
    constructor(sliderComponent: NzSliderComponent, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    enterHandle: () => void;
    leaveHandle: () => void;
    private toggleTooltip;
    private updateTooltipTitle;
    private updateTooltipPosition;
    private updateStyle;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSliderHandleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSliderHandleComponent, "nz-slider-handle", ["nzSliderHandle"], { "nzTooltipVisible": "nzTooltipVisible"; "nzActive": "nzActive"; "nzVertical": "nzVertical"; "nzOffset": "nzOffset"; "nzValue": "nzValue"; "nzTooltipPlacement": "nzTooltipPlacement"; "nzTipFormatter": "nzTipFormatter"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ1N0eWxlSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuaW1wb3J0IHsgU2xpZGVyU2hvd1Rvb2x0aXAgfSBmcm9tICcuL256LXNsaWRlci1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56U2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zbGlkZXIuY29tcG9uZW50JztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIHNsaWRlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgdG9vbHRpcDogTnpUb29sdGlwRGlyZWN0aXZlO1xyXG4gICAgbnpWZXJ0aWNhbDogc3RyaW5nO1xyXG4gICAgbnpPZmZzZXQ6IG51bWJlcjtcclxuICAgIG56VmFsdWU6IG51bWJlcjtcclxuICAgIG56VG9vbHRpcFZpc2libGU6IFNsaWRlclNob3dUb29sdGlwO1xyXG4gICAgbnpUb29sdGlwUGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgICBuelRpcEZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgIG56QWN0aXZlOiBib29sZWFuO1xyXG4gICAgdG9vbHRpcFRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdHlsZTogTmdTdHlsZUludGVyZmFjZTtcclxuICAgIHByaXZhdGUgaG92ZXJzXztcclxuICAgIGNvbnN0cnVjdG9yKHNsaWRlckNvbXBvbmVudDogTnpTbGlkZXJDb21wb25lbnQsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgZW50ZXJIYW5kbGU6ICgpID0+IHZvaWQ7XHJcbiAgICBsZWF2ZUhhbmRsZTogKCkgPT4gdm9pZDtcclxuICAgIHByaXZhdGUgdG9nZ2xlVG9vbHRpcDtcclxuICAgIHByaXZhdGUgdXBkYXRlVG9vbHRpcFRpdGxlO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwUG9zaXRpb247XHJcbiAgICBwcml2YXRlIHVwZGF0ZVN0eWxlO1xyXG59XHJcbiJdfQ==