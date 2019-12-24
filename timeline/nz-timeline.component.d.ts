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
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<NzTimelineComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzTimelineComponent, "nz-timeline", ["nzTimeline"], { 'nzMode': "nzMode", 'nzPending': "nzPending", 'nzPendingDot': "nzPendingDot", 'nzReverse': "nzReverse" }, {}, ["_pendingContent", "listOfTimeLine"]>;
}
