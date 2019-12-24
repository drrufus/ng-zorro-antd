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
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<NzColDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzColDirective, "[nz-col],nz-col", ["nzCol"], { 'nzSpan': "nzSpan", 'nzOrder': "nzOrder", 'nzOffset': "nzOffset", 'nzPush': "nzPush", 'nzPull': "nzPull", 'nzXs': "nzXs", 'nzSm': "nzSm", 'nzMd': "nzMd", 'nzLg': "nzLg", 'nzXl': "nzXl", 'nzXXl': "nzXXl" }, {}, never>;
}
