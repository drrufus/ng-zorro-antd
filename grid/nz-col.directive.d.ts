/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzRowDirective } from './nz-row.directive';
import * as ɵngcc0 from '@angular/core';
export interface EmbeddedProperty {
    span?: number;
    pull?: number;
    push?: number;
    offset?: number;
    order?: number;
}
export declare class NzColDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private nzUpdateHostClassService;
    private elementRef;
    nzRowDirective: NzRowDirective;
    renderer: Renderer2;
    private el;
    private prefixCls;
    protected destroy$: Subject<unknown>;
    nzSpan: number;
    nzOrder: number;
    nzOffset: number;
    nzPush: number;
    nzPull: number;
    nzXs: number | EmbeddedProperty;
    nzSm: number | EmbeddedProperty;
    nzMd: number | EmbeddedProperty;
    nzLg: number | EmbeddedProperty;
    nzXl: number | EmbeddedProperty;
    nzXXl: number | EmbeddedProperty;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap(): void;
    generateClass(): object;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzRowDirective: NzRowDirective, renderer: Renderer2);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzColDirective, [null, null, { optional: true; host: true; }, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzColDirective, "[nz-col],nz-col", ["nzCol"], { "nzSpan": "nzSpan"; "nzOrder": "nzOrder"; "nzOffset": "nzOffset"; "nzPush": "nzPush"; "nzPull": "nzPull"; "nzXs": "nzXs"; "nzSm": "nzSm"; "nzMd": "nzMd"; "nzLg": "nzLg"; "nzXl": "nzXl"; "nzXXl": "nzXXl"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJuei1jb2wuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuL256LXJvdy5kaXJlY3RpdmUnO1xyXG5leHBvcnQgaW50ZXJmYWNlIEVtYmVkZGVkUHJvcGVydHkge1xyXG4gICAgc3Bhbj86IG51bWJlcjtcclxuICAgIHB1bGw/OiBudW1iZXI7XHJcbiAgICBwdXNoPzogbnVtYmVyO1xyXG4gICAgb2Zmc2V0PzogbnVtYmVyO1xyXG4gICAgb3JkZXI/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpDb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmO1xyXG4gICAgbnpSb3dEaXJlY3RpdmU6IE56Um93RGlyZWN0aXZlO1xyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuICAgIHByaXZhdGUgZWw7XHJcbiAgICBwcml2YXRlIHByZWZpeENscztcclxuICAgIHByb3RlY3RlZCBkZXN0cm95JDogU3ViamVjdDx1bmtub3duPjtcclxuICAgIG56U3BhbjogbnVtYmVyO1xyXG4gICAgbnpPcmRlcjogbnVtYmVyO1xyXG4gICAgbnpPZmZzZXQ6IG51bWJlcjtcclxuICAgIG56UHVzaDogbnVtYmVyO1xyXG4gICAgbnpQdWxsOiBudW1iZXI7XHJcbiAgICBuelhzOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gICAgbnpTbTogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICAgIG56TWQ6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XHJcbiAgICBuekxnOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gICAgbnpYbDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICAgIG56WFhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gICAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkqL1xyXG4gICAgc2V0Q2xhc3NNYXAoKTogdm9pZDtcclxuICAgIGdlbmVyYXRlQ2xhc3MoKTogb2JqZWN0O1xyXG4gICAgY29uc3RydWN0b3IobnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSwgcmVuZGVyZXI6IFJlbmRlcmVyMik7XHJcbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=