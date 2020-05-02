/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ExtendedMark, NzMarks, SliderHandler, SliderShowTooltip, SliderValue } from './nz-slider-definitions';
import * as ɵngcc0 from '@angular/core';
export declare class NzSliderComponent implements ControlValueAccessor, OnInit, OnChanges, OnDestroy {
    private cdr;
    private platform;
    slider: ElementRef<HTMLDivElement>;
    nzDisabled: boolean;
    nzDots: boolean;
    nzIncluded: boolean;
    nzRange: boolean;
    nzVertical: boolean;
    nzDefaultValue: SliderValue | null;
    nzMarks: NzMarks | null;
    nzMax: number;
    nzMin: number;
    nzStep: number;
    nzTooltipVisible: SliderShowTooltip;
    nzTooltipPlacement: string;
    nzTipFormatter: (value: number) => string;
    readonly nzOnAfterChange: EventEmitter<SliderValue>;
    value: SliderValue | null;
    sliderDOM: HTMLDivElement;
    cacheSliderStart: number | null;
    cacheSliderLength: number | null;
    activeValueIndex: number | undefined;
    track: {
        offset: null | number;
        length: null | number;
    };
    handles: SliderHandler[];
    marksArray: ExtendedMark[] | null;
    bounds: {
        lower: SliderValue | null;
        upper: SliderValue | null;
    };
    isDragging: boolean;
    private dragStart$;
    private dragMove$;
    private dragEnd$;
    private dragStart_;
    private dragMove_;
    private dragEnd_;
    constructor(cdr: ChangeDetectorRef, platform: Platform);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    writeValue(val: SliderValue | null): void;
    onValueChange(_value: SliderValue): void;
    onTouched(): void;
    registerOnChange(fn: (value: SliderValue) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    private setValue;
    private getValue;
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    private getValueToOffset;
    /**
     * Find the closest value to be activated (only for range = true).
     */
    private setActiveValueIndex;
    private setActiveValue;
    /**
     * Update track and handles' position and length.
     */
    private updateTrackAndHandles;
    private onDragStart;
    private onDragMove;
    private onDragEnd;
    /**
     * Create user interactions handles.
     */
    private createDraggingObservables;
    private subscribeDrag;
    private unsubscribeDrag;
    private toggleDragMoving;
    private toggleDragDisabled;
    private findClosestValue;
    private valueToOffset;
    private getSliderStartPosition;
    private getSliderLength;
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    private cacheSliderProperty;
    private formatValue;
    /**
     * Check if value is valid and throw error if value-type/range not match.
     */
    private assertValueValid;
    /**
     * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
     */
    private assertValueTypeMatch;
    private valuesEqual;
    /**
     * Show one handle's tooltip and hide others'.
     */
    private showHandleTooltip;
    private hideAllHandleTooltip;
    private generateHandles;
    private generateMarkItems;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSliderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSliderComponent, "nz-slider", ["nzSlider"], { "nzDisabled": "nzDisabled"; "nzDots": "nzDots"; "nzIncluded": "nzIncluded"; "nzRange": "nzRange"; "nzVertical": "nzVertical"; "nzDefaultValue": "nzDefaultValue"; "nzMarks": "nzMarks"; "nzMax": "nzMax"; "nzMin": "nzMin"; "nzStep": "nzStep"; "nzTooltipVisible": "nzTooltipVisible"; "nzTooltipPlacement": "nzTooltipPlacement"; "nzTipFormatter": "nzTipFormatter"; }, { "nzOnAfterChange": "nzOnAfterChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1zbGlkZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUdBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRXh0ZW5kZWRNYXJrLCBOek1hcmtzLCBTbGlkZXJIYW5kbGVyLCBTbGlkZXJTaG93VG9vbHRpcCwgU2xpZGVyVmFsdWUgfSBmcm9tICcuL256LXNsaWRlci1kZWZpbml0aW9ucyc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56U2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIHBsYXRmb3JtO1xyXG4gICAgc2xpZGVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuICAgIG56RGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBuekRvdHM6IGJvb2xlYW47XHJcbiAgICBuekluY2x1ZGVkOiBib29sZWFuO1xyXG4gICAgbnpSYW5nZTogYm9vbGVhbjtcclxuICAgIG56VmVydGljYWw6IGJvb2xlYW47XHJcbiAgICBuekRlZmF1bHRWYWx1ZTogU2xpZGVyVmFsdWUgfCBudWxsO1xyXG4gICAgbnpNYXJrczogTnpNYXJrcyB8IG51bGw7XHJcbiAgICBuek1heDogbnVtYmVyO1xyXG4gICAgbnpNaW46IG51bWJlcjtcclxuICAgIG56U3RlcDogbnVtYmVyO1xyXG4gICAgbnpUb29sdGlwVmlzaWJsZTogU2xpZGVyU2hvd1Rvb2x0aXA7XHJcbiAgICBuelRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZztcclxuICAgIG56VGlwRm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgbnpPbkFmdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U2xpZGVyVmFsdWU+O1xyXG4gICAgdmFsdWU6IFNsaWRlclZhbHVlIHwgbnVsbDtcclxuICAgIHNsaWRlckRPTTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjYWNoZVNsaWRlclN0YXJ0OiBudW1iZXIgfCBudWxsO1xyXG4gICAgY2FjaGVTbGlkZXJMZW5ndGg6IG51bWJlciB8IG51bGw7XHJcbiAgICBhY3RpdmVWYWx1ZUluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICB0cmFjazoge1xyXG4gICAgICAgIG9mZnNldDogbnVsbCB8IG51bWJlcjtcclxuICAgICAgICBsZW5ndGg6IG51bGwgfCBudW1iZXI7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlczogU2xpZGVySGFuZGxlcltdO1xyXG4gICAgbWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW10gfCBudWxsO1xyXG4gICAgYm91bmRzOiB7XHJcbiAgICAgICAgbG93ZXI6IFNsaWRlclZhbHVlIHwgbnVsbDtcclxuICAgICAgICB1cHBlcjogU2xpZGVyVmFsdWUgfCBudWxsO1xyXG4gICAgfTtcclxuICAgIGlzRHJhZ2dpbmc6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGRyYWdTdGFydCQ7XHJcbiAgICBwcml2YXRlIGRyYWdNb3ZlJDtcclxuICAgIHByaXZhdGUgZHJhZ0VuZCQ7XHJcbiAgICBwcml2YXRlIGRyYWdTdGFydF87XHJcbiAgICBwcml2YXRlIGRyYWdNb3ZlXztcclxuICAgIHByaXZhdGUgZHJhZ0VuZF87XHJcbiAgICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwbGF0Zm9ybTogUGxhdGZvcm0pO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIHdyaXRlVmFsdWUodmFsOiBTbGlkZXJWYWx1ZSB8IG51bGwpOiB2b2lkO1xyXG4gICAgb25WYWx1ZUNoYW5nZShfdmFsdWU6IFNsaWRlclZhbHVlKTogdm9pZDtcclxuICAgIG9uVG91Y2hlZCgpOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBTbGlkZXJWYWx1ZSkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBzZXRWYWx1ZTtcclxuICAgIHByaXZhdGUgZ2V0VmFsdWU7XHJcbiAgICAvKipcclxuICAgICAqIENsb25lICYgc29ydCBjdXJyZW50IHZhbHVlIGFuZCBjb252ZXJ0IHRoZW0gdG8gb2Zmc2V0cywgdGhlbiByZXR1cm4gdGhlIG5ldyBvbmUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0VmFsdWVUb09mZnNldDtcclxuICAgIC8qKlxyXG4gICAgICogRmluZCB0aGUgY2xvc2VzdCB2YWx1ZSB0byBiZSBhY3RpdmF0ZWQgKG9ubHkgZm9yIHJhbmdlID0gdHJ1ZSkuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0QWN0aXZlVmFsdWVJbmRleDtcclxuICAgIHByaXZhdGUgc2V0QWN0aXZlVmFsdWU7XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0cmFjayBhbmQgaGFuZGxlcycgcG9zaXRpb24gYW5kIGxlbmd0aC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVUcmFja0FuZEhhbmRsZXM7XHJcbiAgICBwcml2YXRlIG9uRHJhZ1N0YXJ0O1xyXG4gICAgcHJpdmF0ZSBvbkRyYWdNb3ZlO1xyXG4gICAgcHJpdmF0ZSBvbkRyYWdFbmQ7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB1c2VyIGludGVyYWN0aW9ucyBoYW5kbGVzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZURyYWdnaW5nT2JzZXJ2YWJsZXM7XHJcbiAgICBwcml2YXRlIHN1YnNjcmliZURyYWc7XHJcbiAgICBwcml2YXRlIHVuc3Vic2NyaWJlRHJhZztcclxuICAgIHByaXZhdGUgdG9nZ2xlRHJhZ01vdmluZztcclxuICAgIHByaXZhdGUgdG9nZ2xlRHJhZ0Rpc2FibGVkO1xyXG4gICAgcHJpdmF0ZSBmaW5kQ2xvc2VzdFZhbHVlO1xyXG4gICAgcHJpdmF0ZSB2YWx1ZVRvT2Zmc2V0O1xyXG4gICAgcHJpdmF0ZSBnZXRTbGlkZXJTdGFydFBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSBnZXRTbGlkZXJMZW5ndGg7XHJcbiAgICAvKipcclxuICAgICAqIENhY2hlIERPTSBsYXlvdXQvcmVmbG93IG9wZXJhdGlvbnMgZm9yIHBlcmZvcm1hbmNlIChtYXkgbm90IG5lY2Vzc2FyeT8pXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2FjaGVTbGlkZXJQcm9wZXJ0eTtcclxuICAgIHByaXZhdGUgZm9ybWF0VmFsdWU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHZhbHVlIGlzIHZhbGlkIGFuZCB0aHJvdyBlcnJvciBpZiB2YWx1ZS10eXBlL3JhbmdlIG5vdCBtYXRjaC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3NlcnRWYWx1ZVZhbGlkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBc3NlcnQgdGhhdCBpZiBgdGhpcy5uelJhbmdlYCBpcyBgdHJ1ZWAsIHZhbHVlIGlzIGFsc28gYSByYW5nZSwgdmljZSB2ZXJzYS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3NlcnRWYWx1ZVR5cGVNYXRjaDtcclxuICAgIHByaXZhdGUgdmFsdWVzRXF1YWw7XHJcbiAgICAvKipcclxuICAgICAqIFNob3cgb25lIGhhbmRsZSdzIHRvb2x0aXAgYW5kIGhpZGUgb3RoZXJzJy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzaG93SGFuZGxlVG9vbHRpcDtcclxuICAgIHByaXZhdGUgaGlkZUFsbEhhbmRsZVRvb2x0aXA7XHJcbiAgICBwcml2YXRlIGdlbmVyYXRlSGFuZGxlcztcclxuICAgIHByaXZhdGUgZ2VuZXJhdGVNYXJrSXRlbXM7XHJcbn1cclxuIl19