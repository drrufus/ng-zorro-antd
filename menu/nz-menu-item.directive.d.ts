/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzSubmenuService } from './nz-submenu.service';
import * as i0 from "@angular/core";
export declare class NzMenuItemDirective implements OnInit, OnChanges, OnDestroy, AfterContentInit {
    private nzUpdateHostClassService;
    private nzMenuService;
    private nzSubmenuService;
    private renderer;
    private elementRef;
    private routerLink?;
    private routerLinkWithHref?;
    private router?;
    private el;
    private destroy$;
    private originalPadding;
    selected$: Subject<boolean>;
    nzDisabled: boolean;
    nzSelected: boolean;
    nzPaddingLeft: number;
    nzMatchRouterExact: boolean;
    nzMatchRouter: boolean;
    listOfRouterLink: QueryList<RouterLink>;
    listOfRouterLinkWithHref: QueryList<RouterLinkWithHref>;
    /** clear all item selected status except this */
    clickMenuItem(e: MouseEvent): void;
    setClassMap(): void;
    setSelectedState(value: boolean): void;
    private updateRouterActive;
    private hasActiveLinks;
    private isLinkActive;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, nzMenuService: NzMenuBaseService, nzSubmenuService: NzSubmenuService, renderer: Renderer2, elementRef: ElementRef, routerLink?: RouterLink | undefined, routerLinkWithHref?: RouterLinkWithHref | undefined, router?: Router | undefined);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzMenuItemDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzMenuItemDirective, "[nz-menu-item]", ["nzMenuItem"], { 'nzDisabled': "nzDisabled", 'nzSelected': "nzSelected", 'nzPaddingLeft': "nzPaddingLeft", 'nzMatchRouterExact': "nzMatchRouterExact", 'nzMatchRouter': "nzMatchRouter" }, {}, ["listOfRouterLink", "listOfRouterLinkWithHref"]>;
}
