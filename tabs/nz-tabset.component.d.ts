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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFic2V0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei10YWJzZXQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbi8qKiBnZXQgc29tZSBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyICovXHJcbmltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIE56Rm91ckRpcmVjdGlvblR5cGUsIE56U2l6ZUxEU1R5cGUsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VGFiQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUYWJzTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJzLW5hdi5jb21wb25lbnQnO1xyXG5leHBvcnQgaW50ZXJmYWNlIE56QW5pbWF0ZWRJbnRlcmZhY2Uge1xyXG4gICAgaW5rQmFyOiBib29sZWFuO1xyXG4gICAgdGFiUGFuZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelRhYkNoYW5nZUV2ZW50IHtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICB0YWI6IE56VGFiQ29tcG9uZW50O1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTnpUYWJQb3NpdGlvbiA9IE56Rm91ckRpcmVjdGlvblR5cGU7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE56VGFiVHlwZSA9ICdsaW5lJyB8ICdjYXJkJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpUYWJTZXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICAgIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIHJvdXRlcjtcclxuICAgIHByaXZhdGUgaW5kZXhUb1NlbGVjdDtcclxuICAgIHByaXZhdGUgZWw7XHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZEluZGV4O1xyXG4gICAgLyoqIFN1YnNjcmlwdGlvbiB0byB0YWJzIGJlaW5nIGFkZGVkL3JlbW92ZWQuICovXHJcbiAgICBwcml2YXRlIHRhYnNTdWJzY3JpcHRpb247XHJcbiAgICAvKiogU3Vic2NyaXB0aW9uIHRvIGNoYW5nZXMgaW4gdGhlIHRhYiBsYWJlbHMuICovXHJcbiAgICBwcml2YXRlIHRhYkxhYmVsU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDtcclxuICAgIHRhYlBvc2l0aW9uTW9kZTogTnpUYWJQb3NpdGlvbk1vZGU7XHJcbiAgICBsaXN0T2ZOelRhYkNvbXBvbmVudDogUXVlcnlMaXN0PE56VGFiQ29tcG9uZW50PjtcclxuICAgIG56VGFic05hdkNvbXBvbmVudDogTnpUYWJzTmF2Q29tcG9uZW50O1xyXG4gICAgdGFiQ29udGVudDogRWxlbWVudFJlZjtcclxuICAgIG56VGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56U2hvd1BhZ2luYXRpb246IGJvb2xlYW47XHJcbiAgICBuekFuaW1hdGVkOiBOekFuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbjtcclxuICAgIG56SGlkZUFsbDogYm9vbGVhbjtcclxuICAgIG56VGFiUG9zaXRpb246IE56VGFiUG9zaXRpb247XHJcbiAgICBuelNpemU6IE56U2l6ZUxEU1R5cGU7XHJcbiAgICBuelRhYkJhckd1dHRlcjogbnVtYmVyO1xyXG4gICAgbnpUYWJCYXJTdHlsZToge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICAgIH07XHJcbiAgICBuelR5cGU6IE56VGFiVHlwZTtcclxuICAgIG56TGlua1JvdXRlcjogYm9vbGVhbjtcclxuICAgIG56TGlua0V4YWN0OiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgbnpPbk5leHRDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgcmVhZG9ubHkgbnpPblByZXZDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgcmVhZG9ubHkgbnpTZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50PjtcclxuICAgIHJlYWRvbmx5IG56U2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcbiAgICBuelNlbGVjdGVkSW5kZXg6IG51bWJlciB8IG51bGw7XHJcbiAgICByZWFkb25seSBpbmtCYXJBbmltYXRlZDogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IHRhYlBhbmVBbmltYXRlZDogYm9vbGVhbjtcclxuICAgIG1vdmVSaWdodCgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xyXG4gICAgbW92ZUxlZnQoJGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcclxuICAgIHNldFBvc2l0aW9uKHZhbHVlOiBOelRhYlBvc2l0aW9uKTogdm9pZDtcclxuICAgIHNldENsYXNzTWFwKCk6IHZvaWQ7XHJcbiAgICBjbGlja0xhYmVsKGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdm9pZDtcclxuICAgIGNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4OiBudW1iZXIpOiBOelRhYkNoYW5nZUV2ZW50O1xyXG4gICAgLyoqIENsYW1wcyB0aGUgZ2l2ZW4gaW5kZXggdG8gdGhlIGJvdW5kcyBvZiAwIGFuZCB0aGUgdGFicyBsZW5ndGguICovXHJcbiAgICBwcml2YXRlIGNsYW1wVGFiSW5kZXg7XHJcbiAgICBwcml2YXRlIHN1YnNjcmliZVRvVGFiTGFiZWxzO1xyXG4gICAgY29uc3RydWN0b3IobnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCByb3V0ZXI6IFJvdXRlcik7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVSb3V0ZXJBY3RpdmU7XHJcbiAgICBwcml2YXRlIGZpbmRTaG91bGRBY3RpdmVUYWJJbmRleDtcclxuICAgIHByaXZhdGUgaXNMaW5rQWN0aXZlO1xyXG59XHJcbiJdfQ==