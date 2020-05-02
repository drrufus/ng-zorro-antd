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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzMenuItemDirective, [null, null, { optional: true; }, null, null, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzMenuItemDirective, "[nz-menu-item]", ["nzMenuItem"], { "nzDisabled": "nzDisabled"; "nzSelected": "nzSelected"; "nzMatchRouterExact": "nzMatchRouterExact"; "nzMatchRouter": "nzMatchRouter"; "nzPaddingLeft": "nzPaddingLeft"; }, {}, ["listOfRouterLink", "listOfRouterLinkWithHref"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJuei1tZW51LWl0ZW0uZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckxpbmssIFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE56TWVudUJhc2VTZXJ2aWNlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56U3VibWVudVNlcnZpY2UgfSBmcm9tICcuL256LXN1Ym1lbnUuc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56TWVudUl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBuek1lbnVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBuelN1Ym1lbnVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgcm91dGVyTGluaz87XHJcbiAgICBwcml2YXRlIHJvdXRlckxpbmtXaXRoSHJlZj87XHJcbiAgICBwcml2YXRlIHJvdXRlcj87XHJcbiAgICBwcml2YXRlIGVsO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDtcclxuICAgIHByaXZhdGUgb3JpZ2luYWxQYWRkaW5nO1xyXG4gICAgc2VsZWN0ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xyXG4gICAgbnpEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG56U2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBuelBhZGRpbmdMZWZ0OiBudW1iZXI7XHJcbiAgICBuek1hdGNoUm91dGVyRXhhY3Q6IGJvb2xlYW47XHJcbiAgICBuek1hdGNoUm91dGVyOiBib29sZWFuO1xyXG4gICAgbGlzdE9mUm91dGVyTGluazogUXVlcnlMaXN0PFJvdXRlckxpbms+O1xyXG4gICAgbGlzdE9mUm91dGVyTGlua1dpdGhIcmVmOiBRdWVyeUxpc3Q8Um91dGVyTGlua1dpdGhIcmVmPjtcclxuICAgIC8qKiBjbGVhciBhbGwgaXRlbSBzZWxlY3RlZCBzdGF0dXMgZXhjZXB0IHRoaXMgKi9cclxuICAgIGNsaWNrTWVudUl0ZW0oZTogTW91c2VFdmVudCk6IHZvaWQ7XHJcbiAgICBzZXRDbGFzc01hcCgpOiB2b2lkO1xyXG4gICAgc2V0U2VsZWN0ZWRTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBwcml2YXRlIHVwZGF0ZVJvdXRlckFjdGl2ZTtcclxuICAgIHByaXZhdGUgaGFzQWN0aXZlTGlua3M7XHJcbiAgICBwcml2YXRlIGlzTGlua0FjdGl2ZTtcclxuICAgIGNvbnN0cnVjdG9yKG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBuek1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSwgbnpTdWJtZW51U2VydmljZTogTnpTdWJtZW51U2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcm91dGVyTGluaz86IFJvdXRlckxpbmsgfCB1bmRlZmluZWQsIHJvdXRlckxpbmtXaXRoSHJlZj86IFJvdXRlckxpbmtXaXRoSHJlZiB8IHVuZGVmaW5lZCwgcm91dGVyPzogUm91dGVyIHwgdW5kZWZpbmVkKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=