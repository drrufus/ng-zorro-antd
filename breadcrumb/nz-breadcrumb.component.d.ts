/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, Injector, NgZone, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Params } from '@angular/router';
import * as i0 from "@angular/core";
export interface BreadcrumbOption {
    label: string;
    params: Params;
    url: string;
}
export declare class NzBreadCrumbComponent implements OnInit, OnDestroy {
    private injector;
    private ngZone;
    private cdr;
    nzAutoGenerate: boolean;
    nzSeparator: string | TemplateRef<void>;
    nzRouteLabel: string;
    breadcrumbs: BreadcrumbOption[] | undefined;
    private destroy$;
    constructor(injector: Injector, ngZone: NgZone, cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    navigate(url: string, e: MouseEvent): void;
    private registerRouterChange;
    private getBreadcrumbs;
    static ɵfac: i0.ɵɵFactoryDef<NzBreadCrumbComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzBreadCrumbComponent, "nz-breadcrumb", ["nzBreadcrumb"], { 'nzAutoGenerate': "nzAutoGenerate", 'nzSeparator': "nzSeparator", 'nzRouteLabel': "nzRouteLabel" }, {}, never>;
}
