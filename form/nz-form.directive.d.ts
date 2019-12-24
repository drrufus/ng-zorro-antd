/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NzConfigService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzFormLabelComponent } from './nz-form-label.component';
import * as i0 from "@angular/core";
export declare class NzFormDirective implements OnInit, OnChanges, AfterContentInit, OnDestroy {
    nzConfigService: NzConfigService;
    private elementRef;
    private renderer;
    private nzUpdateHostClassService;
    nzLayout: string;
    nzNoColon: boolean;
    nzFormLabelComponent: QueryList<NzFormLabelComponent>;
    destroy$: Subject<unknown>;
    setClassMap(): void;
    updateItemsDefaultColon(): void;
    constructor(nzConfigService: NzConfigService, elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzFormDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzFormDirective, "[nz-form]", ["nzForm"], { 'nzLayout': "nzLayout", 'nzNoColon': "nzNoColon" }, {}, ["nzFormLabelComponent"]>;
}
