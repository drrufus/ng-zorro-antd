/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzResizableService } from './nz-resizable.service';
import * as ɵngcc0 from '@angular/core';
export declare type NzResizeDirection = 'top' | 'right' | 'bottom' | 'left' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft';
export declare class NzResizeHandleMouseDownEvent {
    direction: NzResizeDirection;
    mouseEvent: MouseEvent | TouchEvent;
    constructor(direction: NzResizeDirection, mouseEvent: MouseEvent | TouchEvent);
}
export declare class NzResizeHandleComponent implements OnInit, OnDestroy {
    private nzResizableService;
    private cdr;
    nzDirection: NzResizeDirection;
    readonly nzMouseDown: EventEmitter<NzResizeHandleMouseDownEvent>;
    entered: boolean;
    private destroy$;
    constructor(nzResizableService: NzResizableService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    onMousedown(event: MouseEvent | TouchEvent): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzResizeHandleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzResizeHandleComponent, "nz-resize-handle, [nz-resize-handle]", ["nzResizeHandle"], { "nzDirection": "nzDirection"; }, { "nzMouseDown": "nzMouseDown"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56UmVzaXphYmxlU2VydmljZSB9IGZyb20gJy4vbnotcmVzaXphYmxlLnNlcnZpY2UnO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE56UmVzaXplRGlyZWN0aW9uID0gJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAndG9wUmlnaHQnIHwgJ2JvdHRvbVJpZ2h0JyB8ICdib3R0b21MZWZ0JyB8ICd0b3BMZWZ0JztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB7XHJcbiAgICBkaXJlY3Rpb246IE56UmVzaXplRGlyZWN0aW9uO1xyXG4gICAgbW91c2VFdmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXJlY3Rpb246IE56UmVzaXplRGlyZWN0aW9uLCBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpSZXNpemVIYW5kbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIG56UmVzaXphYmxlU2VydmljZTtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgbnpEaXJlY3Rpb246IE56UmVzaXplRGlyZWN0aW9uO1xyXG4gICAgcmVhZG9ubHkgbnpNb3VzZURvd246IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50PjtcclxuICAgIGVudGVyZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkO1xyXG4gICAgY29uc3RydWN0b3IobnpSZXNpemFibGVTZXJ2aWNlOiBOelJlc2l6YWJsZVNlcnZpY2UsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==