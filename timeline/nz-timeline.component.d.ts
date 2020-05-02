/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
import * as ɵngcc0 from '@angular/core';
export declare type NzTimelineMode = 'left' | 'alternate' | 'right';
export declare class NzTimelineComponent implements AfterContentInit, OnChanges, OnDestroy {
    private cdr;
    private platform;
    timeline: ElementRef<HTMLElement>;
    listOfTimeLine: QueryList<NzTimelineItemComponent>;
    _pendingContent: TemplateRef<void>;
    nzMode: NzTimelineMode;
    nzPending: string | boolean | TemplateRef<void>;
    nzPendingDot: string | TemplateRef<void>;
    nzReverse: boolean;
    isPendingBoolean: boolean;
    private destroy$;
    constructor(cdr: ChangeDetectorRef, platform: Platform);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private updateChildren;
    private reverseChildTimelineDots;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTimelineComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTimelineComponent, "nz-timeline", ["nzTimeline"], { "nzReverse": "nzReverse"; "nzMode": "nzMode"; "nzPending": "nzPending"; "nzPendingDot": "nzPendingDot"; }, {}, ["_pendingContent", "listOfTimeLine"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXRpbWVsaW5lLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFF1ZXJ5TGlzdCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpUaW1lbGluZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50JztcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOelRpbWVsaW5lTW9kZSA9ICdsZWZ0JyB8ICdhbHRlcm5hdGUnIHwgJ3JpZ2h0JztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTtcclxuICAgIHRpbWVsaW5lOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICAgIGxpc3RPZlRpbWVMaW5lOiBRdWVyeUxpc3Q8TnpUaW1lbGluZUl0ZW1Db21wb25lbnQ+O1xyXG4gICAgX3BlbmRpbmdDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56TW9kZTogTnpUaW1lbGluZU1vZGU7XHJcbiAgICBuelBlbmRpbmc6IHN0cmluZyB8IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56UGVuZGluZ0RvdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuelJldmVyc2U6IGJvb2xlYW47XHJcbiAgICBpc1BlbmRpbmdCb29sZWFuOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDtcclxuICAgIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHBsYXRmb3JtOiBQbGF0Zm9ybSk7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIHByaXZhdGUgdXBkYXRlQ2hpbGRyZW47XHJcbiAgICBwcml2YXRlIHJldmVyc2VDaGlsZFRpbWVsaW5lRG90cztcclxufVxyXG4iXX0=