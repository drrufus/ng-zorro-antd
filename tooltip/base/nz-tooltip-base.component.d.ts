/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { NgClassInterface, NgStyleInterface, NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzTooltipTrigger } from '../nz-tooltip.definitions';
/**
 * Tooltip component. Also the base component for legacy components.
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class NzTooltipBaseComponent {
    cdr: ChangeDetectorRef;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzTitle: NzTSType | null;
    nzContent: NzTSType | null;
    nzVisible: boolean;
    nzPlacement: string;
    nzOverlayClassName: string;
    nzOverlayStyle: NgStyleInterface;
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzTrigger: NzTooltipTrigger;
    nzTitleTemplate: TemplateRef<void>;
    nzContentTemplate: TemplateRef<void>;
    nzShowPopoverCloseButton: boolean;
    nzPopoverForceRestoreFocus: boolean;
    readonly nzVisibleChange: EventEmitter<boolean>;
    overlay: CdkConnectedOverlay;
    origin: CdkOverlayOrigin;
    _classMap: NgClassInterface;
    _hasBackdrop: boolean;
    _prefix: string;
    _visible: boolean;
    _positions: ConnectionPositionPair[];
    _placement: string;
    _trigger: NzTooltipTrigger;
    readonly content: string | TemplateRef<void> | null;
    readonly title: string | TemplateRef<void> | null;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    show(): void;
    hide(): void;
    restoreFocus(): void;
    updateByDirective(): void;
    /**
     * Force the component to update its position.
     */
    updatePosition(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    afterAppearing(): void;
    setClassMap(): void;
    setOverlayOrigin(origin: CdkOverlayOrigin): void;
    private isTitleEmpty;
    private isContentEmpty;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTooltipBaseComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTooltipBaseComponent, never, never, {}, { "nzVisibleChange": "nzVisibleChange"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei10b29sdGlwLWJhc2UuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NsYXNzSW50ZXJmYWNlLCBOZ1N0eWxlSW50ZXJmYWNlLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcclxuLyoqXHJcbiAqIFRvb2x0aXAgY29tcG9uZW50LiBBbHNvIHRoZSBiYXNlIGNvbXBvbmVudCBmb3IgbGVnYWN5IGNvbXBvbmVudHMuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IHtcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWY7XHJcbiAgICBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCB1bmRlZmluZWQ7XHJcbiAgICBuelRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcbiAgICBuekNvbnRlbnQ6IE56VFNUeXBlIHwgbnVsbDtcclxuICAgIG56VmlzaWJsZTogYm9vbGVhbjtcclxuICAgIG56UGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgICBuek92ZXJsYXlDbGFzc05hbWU6IHN0cmluZztcclxuICAgIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gICAgbnpNb3VzZUVudGVyRGVsYXk6IG51bWJlcjtcclxuICAgIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XHJcbiAgICBuelRyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgICBuelRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpDb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpTaG93UG9wb3ZlckNsb3NlQnV0dG9uOiBib29sZWFuO1xyXG4gICAgbnpQb3BvdmVyRm9yY2VSZXN0b3JlRm9jdXM6IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBuelZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIG92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgICBvcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgICBfY2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2U7XHJcbiAgICBfaGFzQmFja2Ryb3A6IGJvb2xlYW47XHJcbiAgICBfcHJlZml4OiBzdHJpbmc7XHJcbiAgICBfdmlzaWJsZTogYm9vbGVhbjtcclxuICAgIF9wb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXTtcclxuICAgIF9wbGFjZW1lbnQ6IHN0cmluZztcclxuICAgIF90cmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gICAgcmVhZG9ubHkgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB8IHVuZGVmaW5lZCk7XHJcbiAgICBzaG93KCk6IHZvaWQ7XHJcbiAgICBoaWRlKCk6IHZvaWQ7XHJcbiAgICByZXN0b3JlRm9jdXMoKTogdm9pZDtcclxuICAgIHVwZGF0ZUJ5RGlyZWN0aXZlKCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cclxuICAgICAqL1xyXG4gICAgdXBkYXRlUG9zaXRpb24oKTogdm9pZDtcclxuICAgIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQ7XHJcbiAgICBhZnRlckFwcGVhcmluZygpOiB2b2lkO1xyXG4gICAgc2V0Q2xhc3NNYXAoKTogdm9pZDtcclxuICAgIHNldE92ZXJsYXlPcmlnaW4ob3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luKTogdm9pZDtcclxuICAgIHByaXZhdGUgaXNUaXRsZUVtcHR5O1xyXG4gICAgcHJpdmF0ZSBpc0NvbnRlbnRFbXB0eTtcclxufVxyXG4iXX0=