/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { NzResizableService } from './nz-resizable.service';
import * as ɵngcc0 from '@angular/core';
export interface NzResizeEvent {
    width?: number;
    height?: number;
    col?: number;
    mouseEvent?: MouseEvent | TouchEvent;
}
export declare class NzResizableDirective implements AfterViewInit, OnDestroy {
    private elementRef;
    private renderer;
    private nzResizableService;
    private platform;
    private ngZone;
    nzBounds: 'window' | 'parent' | ElementRef<HTMLElement>;
    nzMaxHeight: number;
    nzMaxWidth: number;
    nzMinHeight: number;
    nzMinWidth: number;
    nzGridColumnCount: number;
    nzMaxColumn: number;
    nzMinColumn: number;
    nzLockAspectRatio: boolean;
    nzPreview: boolean;
    readonly nzResize: EventEmitter<NzResizeEvent>;
    readonly nzResizeEnd: EventEmitter<NzResizeEvent>;
    readonly nzResizeStart: EventEmitter<NzResizeEvent>;
    resizing: boolean;
    private elRect;
    private currentHandleEvent;
    private ghostElement;
    private el;
    private sizeCache;
    private destroy$;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2, nzResizableService: NzResizableService, platform: Platform, ngZone: NgZone);
    onMouseenter(): void;
    onMouseleave(): void;
    setPosition(): void;
    calcSize(width: number, height: number, ratio: number): NzResizeEvent;
    setCursor(): void;
    resize(event: MouseEvent | TouchEvent): void;
    endResize(event: MouseEvent | TouchEvent): void;
    previewResize({ width, height }: NzResizeEvent): void;
    createGhostElement(): void;
    removeGhostElement(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzResizableDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzResizableDirective, "[nz-resizable]", ["nzResizable"], { "nzBounds": "nzBounds"; "nzMinHeight": "nzMinHeight"; "nzMinWidth": "nzMinWidth"; "nzGridColumnCount": "nzGridColumnCount"; "nzMaxColumn": "nzMaxColumn"; "nzMinColumn": "nzMinColumn"; "nzLockAspectRatio": "nzLockAspectRatio"; "nzPreview": "nzPreview"; "nzMaxHeight": "nzMaxHeight"; "nzMaxWidth": "nzMaxWidth"; }, { "nzResize": "nzResize"; "nzResizeEnd": "nzResizeEnd"; "nzResizeStart": "nzResizeStart"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJuei1yZXNpemFibGUuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56UmVzaXphYmxlU2VydmljZSB9IGZyb20gJy4vbnotcmVzaXphYmxlLnNlcnZpY2UnO1xyXG5leHBvcnQgaW50ZXJmYWNlIE56UmVzaXplRXZlbnQge1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBjb2w/OiBudW1iZXI7XHJcbiAgICBtb3VzZUV2ZW50PzogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpSZXNpemFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcclxuICAgIHByaXZhdGUgbnpSZXNpemFibGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTtcclxuICAgIHByaXZhdGUgbmdab25lO1xyXG4gICAgbnpCb3VuZHM6ICd3aW5kb3cnIHwgJ3BhcmVudCcgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICAgIG56TWF4SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBuek1heFdpZHRoOiBudW1iZXI7XHJcbiAgICBuek1pbkhlaWdodDogbnVtYmVyO1xyXG4gICAgbnpNaW5XaWR0aDogbnVtYmVyO1xyXG4gICAgbnpHcmlkQ29sdW1uQ291bnQ6IG51bWJlcjtcclxuICAgIG56TWF4Q29sdW1uOiBudW1iZXI7XHJcbiAgICBuek1pbkNvbHVtbjogbnVtYmVyO1xyXG4gICAgbnpMb2NrQXNwZWN0UmF0aW86IGJvb2xlYW47XHJcbiAgICBuelByZXZpZXc6IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBuelJlc2l6ZTogRXZlbnRFbWl0dGVyPE56UmVzaXplRXZlbnQ+O1xyXG4gICAgcmVhZG9ubHkgbnpSZXNpemVFbmQ6IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PjtcclxuICAgIHJlYWRvbmx5IG56UmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PjtcclxuICAgIHJlc2l6aW5nOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBlbFJlY3Q7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRIYW5kbGVFdmVudDtcclxuICAgIHByaXZhdGUgZ2hvc3RFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBlbDtcclxuICAgIHByaXZhdGUgc2l6ZUNhY2hlO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuelJlc2l6YWJsZVNlcnZpY2U6IE56UmVzaXphYmxlU2VydmljZSwgcGxhdGZvcm06IFBsYXRmb3JtLCBuZ1pvbmU6IE5nWm9uZSk7XHJcbiAgICBvbk1vdXNlZW50ZXIoKTogdm9pZDtcclxuICAgIG9uTW91c2VsZWF2ZSgpOiB2b2lkO1xyXG4gICAgc2V0UG9zaXRpb24oKTogdm9pZDtcclxuICAgIGNhbGNTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByYXRpbzogbnVtYmVyKTogTnpSZXNpemVFdmVudDtcclxuICAgIHNldEN1cnNvcigpOiB2b2lkO1xyXG4gICAgcmVzaXplKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQ7XHJcbiAgICBlbmRSZXNpemUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZDtcclxuICAgIHByZXZpZXdSZXNpemUoeyB3aWR0aCwgaGVpZ2h0IH06IE56UmVzaXplRXZlbnQpOiB2b2lkO1xyXG4gICAgY3JlYXRlR2hvc3RFbGVtZW50KCk6IHZvaWQ7XHJcbiAgICByZW1vdmVHaG9zdEVsZW1lbnQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=