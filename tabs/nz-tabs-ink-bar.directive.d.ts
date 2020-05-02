/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, NgZone, Renderer2 } from '@angular/core';
import { NzTabPositionMode } from './nz-tabset.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzTabsInkBarDirective {
    private renderer;
    private elementRef;
    private ngZone;
    nzAnimated: boolean;
    nzPositionMode: NzTabPositionMode;
    constructor(renderer: Renderer2, elementRef: ElementRef, ngZone: NgZone);
    alignToElement(element: HTMLElement): void;
    setStyles(element: HTMLElement): void;
    getLeftPosition(element: HTMLElement): string;
    getElementWidth(element: HTMLElement): string;
    getTopPosition(element: HTMLElement): string;
    getElementHeight(element: HTMLElement): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTabsInkBarDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTabsInkBarDirective, "[nz-tabs-ink-bar]", ["nzTabsInkBar"], { "nzAnimated": "nzAnimated"; "nzPositionMode": "nzPositionMode"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy1pbmstYmFyLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJuei10YWJzLWluay1iYXIuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgRWxlbWVudFJlZiwgTmdab25lLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpUYWJQb3NpdGlvbk1vZGUgfSBmcm9tICcuL256LXRhYnNldC5jb21wb25lbnQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelRhYnNJbmtCYXJEaXJlY3RpdmUge1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgbmdab25lO1xyXG4gICAgbnpBbmltYXRlZDogYm9vbGVhbjtcclxuICAgIG56UG9zaXRpb25Nb2RlOiBOelRhYlBvc2l0aW9uTW9kZTtcclxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lKTtcclxuICAgIGFsaWduVG9FbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZDtcclxuICAgIHNldFN0eWxlcyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQ7XHJcbiAgICBnZXRMZWZ0UG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmc7XHJcbiAgICBnZXRFbGVtZW50V2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmc7XHJcbiAgICBnZXRUb3BQb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZztcclxuICAgIGdldEVsZW1lbnRIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmc7XHJcbn1cclxuIl19