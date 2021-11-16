/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** get some code from https://github.com/angular/material2 */
import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NzConfigService, NzFourDirectionType, NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzTabComponent } from './nz-tab.component';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
import * as ɵngcc0 from '@angular/core';
export interface NzAnimatedInterface {
    inkBar: boolean;
    tabPane: boolean;
}
export declare class NzTabChangeEvent {
    index: number;
    tab: NzTabComponent;
}
export declare type NzTabPosition = NzFourDirectionType;
export declare type NzTabPositionMode = 'horizontal' | 'vertical';
export declare type NzTabType = 'line' | 'card';
export declare class NzTabSetComponent implements AfterContentChecked, OnInit, AfterViewInit, OnChanges, AfterContentInit, OnDestroy {
    nzConfigService: NzConfigService;
    private renderer;
    private nzUpdateHostClassService;
    private elementRef;
    private cdr;
    private router;
    private indexToSelect;
    private el;
    private _selectedIndex;
    /** Subscription to tabs being added/removed. */
    private tabsSubscription;
    /** Subscription to changes in the tab labels. */
    private tabLabelSubscription;
    private destroy$;
    tabPositionMode: NzTabPositionMode;
    listOfNzTabComponent: QueryList<NzTabComponent>;
    nzTabsNavComponent: NzTabsNavComponent;
    tabContent: ElementRef;
    private _focusableDivs;
    private _nav;
    nzTabBarExtraContent: TemplateRef<void>;
    nzShowPagination: boolean;
    nzAnimated: NzAnimatedInterface | boolean;
    nzHideAll: boolean;
    nzTabPosition: NzTabPosition;
    nzSize: NzSizeLDSType;
    nzTabBarGutter: number;
    nzTabBarStyle: {
        [key: string]: string;
    };
    nzType: NzTabType;
    nzLinkRouter: boolean;
    nzLinkExact: boolean;
    nzPreselectionMode: boolean;
    preselectionIndex: number | null;
    readonly nzOnNextClick: EventEmitter<void>;
    readonly nzOnPrevClick: EventEmitter<void>;
    readonly nzSelectChange: EventEmitter<NzTabChangeEvent>;
    readonly nzSelectedIndexChange: EventEmitter<number>;
    nzSelectedIndex: number | null;
    readonly inkBarAnimated: boolean;
    readonly tabPaneAnimated: boolean;
    moveRight($event: KeyboardEvent): void;
    moveLeft($event: KeyboardEvent): void;
    setPosition(value: NzTabPosition): void;
    setClassMap(): void;
    clickLabel(index: number, disabled: boolean): void;
    clickPreselected(): void;
    createChangeEvent(index: number): NzTabChangeEvent;
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    private clampTabIndex;
    private subscribeToTabLabels;
    constructor(nzConfigService: NzConfigService, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, cdr: ChangeDetectorRef, router: Router);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private updateRouterActive;
    private findShouldActiveTabIndex;
    private isLinkActive;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTabSetComponent, [null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTabSetComponent, "nz-tabset", ["nzTabset"], { "nzHideAll": "nzHideAll"; "nzTabPosition": "nzTabPosition"; "nzLinkRouter": "nzLinkRouter"; "nzLinkExact": "nzLinkExact"; "nzPreselectionMode": "nzPreselectionMode"; "nzSelectedIndex": "nzSelectedIndex"; "nzAnimated": "nzAnimated"; "nzTabBarExtraContent": "nzTabBarExtraContent"; "nzShowPagination": "nzShowPagination"; "nzSize": "nzSize"; "nzTabBarGutter": "nzTabBarGutter"; "nzTabBarStyle": "nzTabBarStyle"; "nzType": "nzType"; }, { "nzOnNextClick": "nzOnNextClick"; "nzOnPrevClick": "nzOnPrevClick"; "nzSelectChange": "nzSelectChange"; "nzSelectedIndexChange": "nzSelectedIndexChange"; }, ["listOfNzTabComponent"], never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFic2V0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei10YWJzZXQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuLyoqIGdldCBzb21lIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIgKi9cclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgTnpGb3VyRGlyZWN0aW9uVHlwZSwgTnpTaXplTERTVHlwZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUYWJDb21wb25lbnQgfSBmcm9tICcuL256LXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRhYnNOYXZDb21wb25lbnQgfSBmcm9tICcuL256LXRhYnMtbmF2LmNvbXBvbmVudCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpBbmltYXRlZEludGVyZmFjZSB7XHJcbiAgICBpbmtCYXI6IGJvb2xlYW47XHJcbiAgICB0YWJQYW5lOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VGFiQ2hhbmdlRXZlbnQge1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIHRhYjogTnpUYWJDb21wb25lbnQ7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOelRhYlBvc2l0aW9uID0gTnpGb3VyRGlyZWN0aW9uVHlwZTtcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOelRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTnpUYWJUeXBlID0gJ2xpbmUnIHwgJ2NhcmQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelRhYlNldENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgcm91dGVyO1xyXG4gICAgcHJpdmF0ZSBpbmRleFRvU2VsZWN0O1xyXG4gICAgcHJpdmF0ZSBlbDtcclxuICAgIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg7XHJcbiAgICAvKiogU3Vic2NyaXB0aW9uIHRvIHRhYnMgYmVpbmcgYWRkZWQvcmVtb3ZlZC4gKi9cclxuICAgIHByaXZhdGUgdGFic1N1YnNjcmlwdGlvbjtcclxuICAgIC8qKiBTdWJzY3JpcHRpb24gdG8gY2hhbmdlcyBpbiB0aGUgdGFiIGxhYmVscy4gKi9cclxuICAgIHByaXZhdGUgdGFiTGFiZWxTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkO1xyXG4gICAgdGFiUG9zaXRpb25Nb2RlOiBOelRhYlBvc2l0aW9uTW9kZTtcclxuICAgIGxpc3RPZk56VGFiQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpUYWJDb21wb25lbnQ+O1xyXG4gICAgbnpUYWJzTmF2Q29tcG9uZW50OiBOelRhYnNOYXZDb21wb25lbnQ7XHJcbiAgICB0YWJDb250ZW50OiBFbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSBfZm9jdXNhYmxlRGl2cztcclxuICAgIHByaXZhdGUgX25hdjtcclxuICAgIG56VGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56U2hvd1BhZ2luYXRpb246IGJvb2xlYW47XHJcbiAgICBuekFuaW1hdGVkOiBOekFuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbjtcclxuICAgIG56SGlkZUFsbDogYm9vbGVhbjtcclxuICAgIG56VGFiUG9zaXRpb246IE56VGFiUG9zaXRpb247XHJcbiAgICBuelNpemU6IE56U2l6ZUxEU1R5cGU7XHJcbiAgICBuelRhYkJhckd1dHRlcjogbnVtYmVyO1xyXG4gICAgbnpUYWJCYXJTdHlsZToge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICAgIH07XHJcbiAgICBuelR5cGU6IE56VGFiVHlwZTtcclxuICAgIG56TGlua1JvdXRlcjogYm9vbGVhbjtcclxuICAgIG56TGlua0V4YWN0OiBib29sZWFuO1xyXG4gICAgbnpQcmVzZWxlY3Rpb25Nb2RlOiBib29sZWFuO1xyXG4gICAgcHJlc2VsZWN0aW9uSW5kZXg6IG51bWJlciB8IG51bGw7XHJcbiAgICByZWFkb25seSBuek9uTmV4dENsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBuek9uUHJldkNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+O1xyXG4gICAgcmVhZG9ubHkgbnpTZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuICAgIG56U2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGlua0JhckFuaW1hdGVkOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgdGFiUGFuZUFuaW1hdGVkOiBib29sZWFuO1xyXG4gICAgbW92ZVJpZ2h0KCRldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XHJcbiAgICBtb3ZlTGVmdCgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xyXG4gICAgc2V0UG9zaXRpb24odmFsdWU6IE56VGFiUG9zaXRpb24pOiB2b2lkO1xyXG4gICAgc2V0Q2xhc3NNYXAoKTogdm9pZDtcclxuICAgIGNsaWNrTGFiZWwoaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgY2xpY2tQcmVzZWxlY3RlZCgpOiB2b2lkO1xyXG4gICAgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE56VGFiQ2hhbmdlRXZlbnQ7XHJcbiAgICAvKiogQ2xhbXBzIHRoZSBnaXZlbiBpbmRleCB0byB0aGUgYm91bmRzIG9mIDAgYW5kIHRoZSB0YWJzIGxlbmd0aC4gKi9cclxuICAgIHByaXZhdGUgY2xhbXBUYWJJbmRleDtcclxuICAgIHByaXZhdGUgc3Vic2NyaWJlVG9UYWJMYWJlbHM7XHJcbiAgICBjb25zdHJ1Y3RvcihuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJvdXRlcjogUm91dGVyKTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkO1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIHVwZGF0ZVJvdXRlckFjdGl2ZTtcclxuICAgIHByaXZhdGUgZmluZFNob3VsZEFjdGl2ZVRhYkluZGV4O1xyXG4gICAgcHJpdmF0ZSBpc0xpbmtBY3RpdmU7XHJcbn1cclxuIl19