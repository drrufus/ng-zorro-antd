/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { IndexableObject, NzAlignType, NzDomEventService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare type NzJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
export declare type NzGridType = 'flex' | null;
export declare class NzRowDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    elementRef: ElementRef;
    renderer: Renderer2;
    nzUpdateHostClassService: NzUpdateHostClassService;
    mediaMatcher: MediaMatcher;
    ngZone: NgZone;
    platform: Platform;
    private nzDomEventService;
    nzType: NzGridType;
    nzAlign: NzAlignType;
    nzJustify: NzJustify;
    nzGutter: number | IndexableObject;
    private el;
    private prefixCls;
    private breakPoint;
    actualGutter: number;
    actualGutter$: Subject<number>;
    destroy$: Subject<unknown>;
    calculateGutter(): number;
    updateGutter(): void;
    watchMedia(): void;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, mediaMatcher: MediaMatcher, ngZone: NgZone, platform: Platform, nzDomEventService: NzDomEventService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzRowDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzRowDirective, "[nz-row],nz-row", ["nzRow"], { "nzAlign": "nzAlign"; "nzJustify": "nzJustify"; "nzType": "nzType"; "nzGutter": "nzGutter"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJuei1yb3cuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0LCBOekFsaWduVHlwZSwgTnpEb21FdmVudFNlcnZpY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOekp1c3RpZnkgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdzcGFjZS1hcm91bmQnIHwgJ3NwYWNlLWJldHdlZW4nO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE56R3JpZFR5cGUgPSAnZmxleCcgfCBudWxsO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjI7XHJcbiAgICBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZTtcclxuICAgIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyO1xyXG4gICAgbmdab25lOiBOZ1pvbmU7XHJcbiAgICBwbGF0Zm9ybTogUGxhdGZvcm07XHJcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlO1xyXG4gICAgbnpUeXBlOiBOekdyaWRUeXBlO1xyXG4gICAgbnpBbGlnbjogTnpBbGlnblR5cGU7XHJcbiAgICBuekp1c3RpZnk6IE56SnVzdGlmeTtcclxuICAgIG56R3V0dGVyOiBudW1iZXIgfCBJbmRleGFibGVPYmplY3Q7XHJcbiAgICBwcml2YXRlIGVsO1xyXG4gICAgcHJpdmF0ZSBwcmVmaXhDbHM7XHJcbiAgICBwcml2YXRlIGJyZWFrUG9pbnQ7XHJcbiAgICBhY3R1YWxHdXR0ZXI6IG51bWJlcjtcclxuICAgIGFjdHVhbEd1dHRlciQ6IFN1YmplY3Q8bnVtYmVyPjtcclxuICAgIGRlc3Ryb3kkOiBTdWJqZWN0PHVua25vd24+O1xyXG4gICAgY2FsY3VsYXRlR3V0dGVyKCk6IG51bWJlcjtcclxuICAgIHVwZGF0ZUd1dHRlcigpOiB2b2lkO1xyXG4gICAgd2F0Y2hNZWRpYSgpOiB2b2lkO1xyXG4gICAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkqL1xyXG4gICAgc2V0Q2xhc3NNYXAoKTogdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlciwgbmdab25lOiBOZ1pvbmUsIHBsYXRmb3JtOiBQbGF0Zm9ybSwgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=