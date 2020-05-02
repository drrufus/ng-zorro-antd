/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzOptionSelectionChange {
    source: NzAutocompleteOptionComponent;
    isUserInput: boolean;
    constructor(source: NzAutocompleteOptionComponent, isUserInput?: boolean);
}
export declare class NzAutocompleteOptionComponent {
    private changeDetectorRef;
    private element;
    nzValue: any;
    nzLabel: string;
    nzDisabled: boolean;
    readonly selectionChange: EventEmitter<NzOptionSelectionChange>;
    active: boolean;
    selected: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, element: ElementRef);
    select(emit?: boolean): void;
    deselect(): void;
    /** Git display label */
    getLabel(): string;
    /** Set active (only styles) */
    setActiveStyles(): void;
    /** Unset active (only styles) */
    setInactiveStyles(): void;
    scrollIntoViewIfNeeded(): void;
    selectViaInteraction(): void;
    private emitSelectionChangeEvent;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzAutocompleteOptionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzAutocompleteOptionComponent, "nz-auto-option", ["nzAutoOption"], { "nzDisabled": "nzDisabled"; "nzValue": "nzValue"; "nzLabel": "nzLabel"; }, { "selectionChange": "selectionChange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSB7XHJcbiAgICBzb3VyY2U6IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50O1xyXG4gICAgaXNVc2VySW5wdXQ6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U6IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBpc1VzZXJJbnB1dD86IGJvb2xlYW4pO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ7XHJcbiAgICBuelZhbHVlOiBhbnk7XHJcbiAgICBuekxhYmVsOiBzdHJpbmc7XHJcbiAgICBuekRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpPcHRpb25TZWxlY3Rpb25DaGFuZ2U+O1xyXG4gICAgYWN0aXZlOiBib29sZWFuO1xyXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnQ6IEVsZW1lbnRSZWYpO1xyXG4gICAgc2VsZWN0KGVtaXQ/OiBib29sZWFuKTogdm9pZDtcclxuICAgIGRlc2VsZWN0KCk6IHZvaWQ7XHJcbiAgICAvKiogR2l0IGRpc3BsYXkgbGFiZWwgKi9cclxuICAgIGdldExhYmVsKCk6IHN0cmluZztcclxuICAgIC8qKiBTZXQgYWN0aXZlIChvbmx5IHN0eWxlcykgKi9cclxuICAgIHNldEFjdGl2ZVN0eWxlcygpOiB2b2lkO1xyXG4gICAgLyoqIFVuc2V0IGFjdGl2ZSAob25seSBzdHlsZXMpICovXHJcbiAgICBzZXRJbmFjdGl2ZVN0eWxlcygpOiB2b2lkO1xyXG4gICAgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpOiB2b2lkO1xyXG4gICAgc2VsZWN0VmlhSW50ZXJhY3Rpb24oKTogdm9pZDtcclxuICAgIHByaXZhdGUgZW1pdFNlbGVjdGlvbkNoYW5nZUV2ZW50O1xyXG59XHJcbiJdfQ==