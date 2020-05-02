/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, DoCheck, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { NzDomEventService } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}
export declare function isAutoSizeType(value: string | boolean | AutoSizeType): value is AutoSizeType;
export declare class NzAutosizeDirective implements AfterViewInit, OnDestroy, DoCheck {
    private elementRef;
    private ngZone;
    private platform;
    private nzDomEventService;
    private autosize;
    private el;
    private cachedLineHeight;
    private previousValue;
    private previousMinRows;
    private minRows;
    private maxRows;
    private destroy$;
    private inputGap;
    nzAutosize: string | boolean | AutoSizeType;
    resizeToFitContent(force?: boolean): void;
    private cacheTextareaLineHeight;
    setMinHeight(): void;
    setMaxHeight(): void;
    noopInputHandler(): void;
    constructor(elementRef: ElementRef, ngZone: NgZone, platform: Platform, nzDomEventService: NzDomEventService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzAutosizeDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzAutosizeDirective, "textarea[nzAutosize]", ["nzAutosize"], { "nzAutosize": "nzAutosize"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b3NpemUuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbIm56LWF1dG9zaXplLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgRWxlbWVudFJlZiwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpEb21FdmVudFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9TaXplVHlwZSB7XHJcbiAgICBtaW5Sb3dzPzogbnVtYmVyO1xyXG4gICAgbWF4Um93cz86IG51bWJlcjtcclxufVxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBpc0F1dG9TaXplVHlwZSh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IEF1dG9TaXplVHlwZSk6IHZhbHVlIGlzIEF1dG9TaXplVHlwZTtcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpBdXRvc2l6ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIG5nWm9uZTtcclxuICAgIHByaXZhdGUgcGxhdGZvcm07XHJcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBhdXRvc2l6ZTtcclxuICAgIHByaXZhdGUgZWw7XHJcbiAgICBwcml2YXRlIGNhY2hlZExpbmVIZWlnaHQ7XHJcbiAgICBwcml2YXRlIHByZXZpb3VzVmFsdWU7XHJcbiAgICBwcml2YXRlIHByZXZpb3VzTWluUm93cztcclxuICAgIHByaXZhdGUgbWluUm93cztcclxuICAgIHByaXZhdGUgbWF4Um93cztcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBwcml2YXRlIGlucHV0R2FwO1xyXG4gICAgbnpBdXRvc2l6ZTogc3RyaW5nIHwgYm9vbGVhbiB8IEF1dG9TaXplVHlwZTtcclxuICAgIHJlc2l6ZVRvRml0Q29udGVudChmb3JjZT86IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBjYWNoZVRleHRhcmVhTGluZUhlaWdodDtcclxuICAgIHNldE1pbkhlaWdodCgpOiB2b2lkO1xyXG4gICAgc2V0TWF4SGVpZ2h0KCk6IHZvaWQ7XHJcbiAgICBub29wSW5wdXRIYW5kbGVyKCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgcGxhdGZvcm06IFBsYXRmb3JtLCBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2UpO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQ7XHJcbn1cclxuIl19