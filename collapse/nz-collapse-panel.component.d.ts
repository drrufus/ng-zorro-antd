/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core';
import { NzCollapseComponent } from './nz-collapse.component';
import * as i0 from "@angular/core";
export declare class NzCollapsePanelComponent implements OnInit, OnDestroy {
    nzConfigService: NzConfigService;
    private cdr;
    private nzCollapseComponent;
    nzActive: boolean;
    nzDisabled: boolean;
    nzShowArrow: boolean;
    nzExtra: string | TemplateRef<void>;
    nzHeader: string | TemplateRef<void>;
    nzExpandedIcon: string | TemplateRef<void>;
    readonly nzActiveChange: EventEmitter<boolean>;
    nzRole: string;
    clickHeader(): void;
    markForCheck(): void;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, nzCollapseComponent: NzCollapseComponent, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzCollapsePanelComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzCollapsePanelComponent, "nz-collapse-panel", ["nzCollapsePanel"], { 'nzActive': "nzActive", 'nzDisabled': "nzDisabled", 'nzShowArrow': "nzShowArrow", 'nzExtra': "nzExtra", 'nzHeader': "nzHeader", 'nzExpandedIcon': "nzExpandedIcon", 'nzRole': "nzRole" }, { 'nzActiveChange': "nzActiveChange" }, never>;
}
