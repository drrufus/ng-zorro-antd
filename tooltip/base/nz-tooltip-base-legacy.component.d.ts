/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, OnChanges } from '@angular/core';
import { NgStyleInterface, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipTrigger } from '../nz-tooltip.definitions';
import { NzTooltipBaseComponent } from './nz-tooltip-base.component';
/**
 * This component overrides some properties of `NzTooltipBaseComponent` and make them
 * input properties.
 *
 * @deprecated 9.0.0 tooltip and other components deprecate the old API. This
 * would be removed in 9.0.0.
 *
 * @example This example is what going to be removed
 *
 * ```html
 * <nz-tooltip>
 *   <a nz-tooltip></a>
 * </nz-tooltip>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class NzTooltipBaseComponentLegacy extends NzTooltipBaseComponent implements OnChanges {
    noAnimation?: NzNoAnimationDirective | undefined;
    overlay: CdkConnectedOverlay;
    nzOverlayClassName: string;
    nzOverlayStyle: NgStyleInterface;
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzPlacement: string;
    nzVisible: boolean;
    nzTrigger: NzTooltipTrigger;
    readonly nzVisibleChange: EventEmitter<boolean>;
    nzShowPopoverCloseButton: boolean;
    nzPopoverCloseButtonLabel: string;
    nzPopoverForceRestoreFocus: boolean;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTooltipBaseComponentLegacy, [null, { optional: true; host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTooltipBaseComponentLegacy, never, never, { "nzOverlayClassName": "nzOverlayClassName"; "nzOverlayStyle": "nzOverlayStyle"; "nzMouseEnterDelay": "nzMouseEnterDelay"; "nzMouseLeaveDelay": "nzMouseLeaveDelay"; "nzShowPopoverCloseButton": "nzShowPopoverCloseButton"; "nzPopoverCloseButtonLabel": "nzPopoverCloseButtonLabel"; "nzPopoverForceRestoreFocus": "nzPopoverForceRestoreFocus"; "nzPlacement": "nzPlacement"; "nzVisible": "nzVisible"; "nzTrigger": "nzTrigger"; }, { "nzVisibleChange": "nzVisibleChange"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLWxlZ2FjeS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotdG9vbHRpcC1iYXNlLWxlZ2FjeS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ1N0eWxlSW50ZXJmYWNlLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwVHJpZ2dlciB9IGZyb20gJy4uL256LXRvb2x0aXAuZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10b29sdGlwLWJhc2UuY29tcG9uZW50JztcclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IG92ZXJyaWRlcyBzb21lIHByb3BlcnRpZXMgb2YgYE56VG9vbHRpcEJhc2VDb21wb25lbnRgIGFuZCBtYWtlIHRoZW1cclxuICogaW5wdXQgcHJvcGVydGllcy5cclxuICpcclxuICogQGRlcHJlY2F0ZWQgOS4wLjAgdG9vbHRpcCBhbmQgb3RoZXIgY29tcG9uZW50cyBkZXByZWNhdGUgdGhlIG9sZCBBUEkuIFRoaXNcclxuICogd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICpcclxuICogQGV4YW1wbGUgVGhpcyBleGFtcGxlIGlzIHdoYXQgZ29pbmcgdG8gYmUgcmVtb3ZlZFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxuei10b29sdGlwPlxyXG4gKiAgIDxhIG56LXRvb2x0aXA+PC9hPlxyXG4gKiA8L256LXRvb2x0aXA+XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSBleHRlbmRzIE56VG9vbHRpcEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xyXG4gICAgb3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICAgIG56T3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgbnpPdmVybGF5U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2U7XHJcbiAgICBuek1vdXNlRW50ZXJEZWxheTogbnVtYmVyO1xyXG4gICAgbnpNb3VzZUxlYXZlRGVsYXk6IG51bWJlcjtcclxuICAgIG56UGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgICBuelZpc2libGU6IGJvb2xlYW47XHJcbiAgICBuelRyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgICByZWFkb25seSBuelZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIG56U2hvd1BvcG92ZXJDbG9zZUJ1dHRvbjogYm9vbGVhbjtcclxuICAgIG56UG9wb3ZlckNsb3NlQnV0dG9uTGFiZWw6IHN0cmluZztcclxuICAgIG56UG9wb3ZlckZvcmNlUmVzdG9yZUZvY3VzOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkKTtcclxuICAgIG5nT25DaGFuZ2VzKCk6IHZvaWQ7XHJcbn1cclxuIl19