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
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTabSetComponent, "nz-tabset", ["nzTabset"], { "nzHideAll": "nzHideAll"; "nzTabPosition": "nzTabPosition"; "nzLinkRouter": "nzLinkRouter"; "nzLinkExact": "nzLinkExact"; "nzSelectedIndex": "nzSelectedIndex"; "nzAnimated": "nzAnimated"; "nzTabBarExtraContent": "nzTabBarExtraContent"; "nzShowPagination": "nzShowPagination"; "nzSize": "nzSize"; "nzTabBarGutter": "nzTabBarGutter"; "nzTabBarStyle": "nzTabBarStyle"; "nzType": "nzType"; }, { "nzOnNextClick": "nzOnNextClick"; "nzOnPrevClick": "nzOnPrevClick"; "nzSelectChange": "nzSelectChange"; "nzSelectedIndexChange": "nzSelectedIndexChange"; }, ["listOfNzTabComponent"], never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFic2V0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei10YWJzZXQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNFQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG4vKiogZ2V0IHNvbWUgY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMiAqL1xyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBOekZvdXJEaXJlY3Rpb25UeXBlLCBOelNpemVMRFNUeXBlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRhYkNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VGFic05hdkNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFicy1uYXYuY29tcG9uZW50JztcclxuZXhwb3J0IGludGVyZmFjZSBOekFuaW1hdGVkSW50ZXJmYWNlIHtcclxuICAgIGlua0JhcjogYm9vbGVhbjtcclxuICAgIHRhYlBhbmU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpUYWJDaGFuZ2VFdmVudCB7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgdGFiOiBOelRhYkNvbXBvbmVudDtcclxufVxyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE56VGFiUG9zaXRpb24gPSBOekZvdXJEaXJlY3Rpb25UeXBlO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOelRhYlR5cGUgPSAnbGluZScgfCAnY2FyZCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VGFiU2V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZTtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTtcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI7XHJcbiAgICBwcml2YXRlIGluZGV4VG9TZWxlY3Q7XHJcbiAgICBwcml2YXRlIGVsO1xyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDtcclxuICAgIC8qKiBTdWJzY3JpcHRpb24gdG8gdGFicyBiZWluZyBhZGRlZC9yZW1vdmVkLiAqL1xyXG4gICAgcHJpdmF0ZSB0YWJzU3Vic2NyaXB0aW9uO1xyXG4gICAgLyoqIFN1YnNjcmlwdGlvbiB0byBjaGFuZ2VzIGluIHRoZSB0YWIgbGFiZWxzLiAqL1xyXG4gICAgcHJpdmF0ZSB0YWJMYWJlbFN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICB0YWJQb3NpdGlvbk1vZGU6IE56VGFiUG9zaXRpb25Nb2RlO1xyXG4gICAgbGlzdE9mTnpUYWJDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOelRhYkNvbXBvbmVudD47XHJcbiAgICBuelRhYnNOYXZDb21wb25lbnQ6IE56VGFic05hdkNvbXBvbmVudDtcclxuICAgIHRhYkNvbnRlbnQ6IEVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIF9mb2N1c2FibGVEaXZzO1xyXG4gICAgbnpUYWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpTaG93UGFnaW5hdGlvbjogYm9vbGVhbjtcclxuICAgIG56QW5pbWF0ZWQ6IE56QW5pbWF0ZWRJbnRlcmZhY2UgfCBib29sZWFuO1xyXG4gICAgbnpIaWRlQWxsOiBib29sZWFuO1xyXG4gICAgbnpUYWJQb3NpdGlvbjogTnpUYWJQb3NpdGlvbjtcclxuICAgIG56U2l6ZTogTnpTaXplTERTVHlwZTtcclxuICAgIG56VGFiQmFyR3V0dGVyOiBudW1iZXI7XHJcbiAgICBuelRhYkJhclN0eWxlOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIG56VHlwZTogTnpUYWJUeXBlO1xyXG4gICAgbnpMaW5rUm91dGVyOiBib29sZWFuO1xyXG4gICAgbnpMaW5rRXhhY3Q6IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBuek9uTmV4dENsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBuek9uUHJldkNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+O1xyXG4gICAgcmVhZG9ubHkgbnpTZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuICAgIG56U2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGlua0JhckFuaW1hdGVkOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgdGFiUGFuZUFuaW1hdGVkOiBib29sZWFuO1xyXG4gICAgbW92ZVJpZ2h0KCRldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XHJcbiAgICBtb3ZlTGVmdCgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xyXG4gICAgc2V0UG9zaXRpb24odmFsdWU6IE56VGFiUG9zaXRpb24pOiB2b2lkO1xyXG4gICAgc2V0Q2xhc3NNYXAoKTogdm9pZDtcclxuICAgIGNsaWNrTGFiZWwoaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE56VGFiQ2hhbmdlRXZlbnQ7XHJcbiAgICAvKiogQ2xhbXBzIHRoZSBnaXZlbiBpbmRleCB0byB0aGUgYm91bmRzIG9mIDAgYW5kIHRoZSB0YWJzIGxlbmd0aC4gKi9cclxuICAgIHByaXZhdGUgY2xhbXBUYWJJbmRleDtcclxuICAgIHByaXZhdGUgc3Vic2NyaWJlVG9UYWJMYWJlbHM7XHJcbiAgICBjb25zdHJ1Y3RvcihuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJvdXRlcjogUm91dGVyKTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkO1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIHVwZGF0ZVJvdXRlckFjdGl2ZTtcclxuICAgIHByaXZhdGUgZmluZFNob3VsZEFjdGl2ZVRhYkluZGV4O1xyXG4gICAgcHJpdmF0ZSBpc0xpbmtBY3RpdmU7XHJcbn1cclxuIl19