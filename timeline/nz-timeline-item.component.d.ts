/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NzTimelineMode } from './nz-timeline.component';
import * as ɵngcc0 from '@angular/core';
export declare type NzTimelineItemColor = 'red' | 'blue' | 'green' | 'gray' | string;
export declare class NzTimelineItemComponent implements OnInit, OnChanges {
    private renderer;
    private cdr;
    liTemplate: ElementRef;
    nzColor: NzTimelineItemColor;
    nzDot: string | TemplateRef<void>;
    isLast: boolean;
    position: NzTimelineMode | undefined;
    constructor(renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    detectChanges(): void;
    private tryUpdateCustomColor;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTimelineItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTimelineItemComponent, "nz-timeline-item, [nz-timeline-item]", ["nzTimelineItem"], { "nzColor": "nzColor"; "nzDot": "nzDot"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBY0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56VGltZWxpbmVNb2RlIH0gZnJvbSAnLi9uei10aW1lbGluZS5jb21wb25lbnQnO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE56VGltZWxpbmVJdGVtQ29sb3IgPSAncmVkJyB8ICdibHVlJyB8ICdncmVlbicgfCAnZ3JheScgfCBzdHJpbmc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VGltZWxpbmVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgbGlUZW1wbGF0ZTogRWxlbWVudFJlZjtcclxuICAgIG56Q29sb3I6IE56VGltZWxpbmVJdGVtQ29sb3I7XHJcbiAgICBuekRvdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBpc0xhc3Q6IGJvb2xlYW47XHJcbiAgICBwb3NpdGlvbjogTnpUaW1lbGluZU1vZGUgfCB1bmRlZmluZWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIGRldGVjdENoYW5nZXMoKTogdm9pZDtcclxuICAgIHByaXZhdGUgdHJ5VXBkYXRlQ3VzdG9tQ29sb3I7XHJcbn1cclxuIl19