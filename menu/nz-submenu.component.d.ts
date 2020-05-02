/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { NzMenuBaseService, NzNoAnimationDirective, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzSubmenuService } from './nz-submenu.service';
import * as ɵngcc0 from '@angular/core';
export declare class NzSubMenuComponent implements OnInit, OnDestroy, AfterContentInit, OnChanges {
    private elementRef;
    nzMenuService: NzMenuBaseService;
    private cdr;
    nzSubmenuService: NzSubmenuService;
    private nzUpdateHostClassService;
    private platform;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzMenuClassName: string;
    nzPaddingLeft: number;
    nzTitle: string | TemplateRef<void>;
    nzIcon: string;
    nzOpen: boolean;
    nzDisabled: boolean;
    nzTogglingLabel: string;
    readonly nzOpenChange: EventEmitter<boolean>;
    cdkConnectedOverlay: CdkConnectedOverlay;
    cdkOverlayOrigin: ElementRef;
    listOfNzSubMenuComponent: QueryList<NzSubMenuComponent>;
    listOfNzMenuItemDirective: QueryList<NzMenuItemDirective>;
    placement: string;
    triggerWidth: number;
    expandState: string;
    overlayPositions: import("@angular/cdk/overlay").ConnectionPositionPair[];
    private destroy$;
    private isChildMenuSelected;
    private isMouseHover;
    setOpenState(open: boolean): void;
    clickSubMenuTitle(): void;
    setMouseEnterState(value: boolean): void;
    setTriggerWidth(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    setClassMap(): void;
    constructor(elementRef: ElementRef, nzMenuService: NzMenuBaseService, cdr: ChangeDetectorRef, nzSubmenuService: NzSubmenuService, nzUpdateHostClassService: NzUpdateHostClassService, platform: Platform, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSubMenuComponent, [null, null, null, null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSubMenuComponent, "[nz-submenu]", ["nzSubmenu"], { "nzOpen": "nzOpen"; "nzDisabled": "nzDisabled"; "nzTogglingLabel": "nzTogglingLabel"; "nzMenuClassName": "nzMenuClassName"; "nzPaddingLeft": "nzPaddingLeft"; "nzTitle": "nzTitle"; "nzIcon": "nzIcon"; }, { "nzOpenChange": "nzOpenChange"; }, ["listOfNzSubMenuComponent", "listOfNzMenuItemDirective"], ["[title]", "*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotc3VibWVudS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1lbnVCYXNlU2VydmljZSwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56U3VibWVudVNlcnZpY2UgfSBmcm9tICcuL256LXN1Ym1lbnUuc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56U3ViTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmO1xyXG4gICAgbnpNZW51U2VydmljZTogTnpNZW51QmFzZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIG56U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTtcclxuICAgIHByaXZhdGUgcGxhdGZvcm07XHJcbiAgICBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCB1bmRlZmluZWQ7XHJcbiAgICBuek1lbnVDbGFzc05hbWU6IHN0cmluZztcclxuICAgIG56UGFkZGluZ0xlZnQ6IG51bWJlcjtcclxuICAgIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpJY29uOiBzdHJpbmc7XHJcbiAgICBuek9wZW46IGJvb2xlYW47XHJcbiAgICBuekRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgbnpUb2dnbGluZ0xhYmVsOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBuek9wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgICBjZGtPdmVybGF5T3JpZ2luOiBFbGVtZW50UmVmO1xyXG4gICAgbGlzdE9mTnpTdWJNZW51Q29tcG9uZW50OiBRdWVyeUxpc3Q8TnpTdWJNZW51Q29tcG9uZW50PjtcclxuICAgIGxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmU6IFF1ZXJ5TGlzdDxOek1lbnVJdGVtRGlyZWN0aXZlPjtcclxuICAgIHBsYWNlbWVudDogc3RyaW5nO1xyXG4gICAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XHJcbiAgICBleHBhbmRTdGF0ZTogc3RyaW5nO1xyXG4gICAgb3ZlcmxheVBvc2l0aW9uczogaW1wb3J0KFwiQGFuZ3VsYXIvY2RrL292ZXJsYXlcIikuQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDtcclxuICAgIHByaXZhdGUgaXNDaGlsZE1lbnVTZWxlY3RlZDtcclxuICAgIHByaXZhdGUgaXNNb3VzZUhvdmVyO1xyXG4gICAgc2V0T3BlblN0YXRlKG9wZW46IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgY2xpY2tTdWJNZW51VGl0bGUoKTogdm9pZDtcclxuICAgIHNldE1vdXNlRW50ZXJTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZDtcclxuICAgIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQ7XHJcbiAgICBzZXRDbGFzc01hcCgpOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbnpNZW51U2VydmljZTogTnpNZW51QmFzZVNlcnZpY2UsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG56U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2UsIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwbGF0Zm9ybTogUGxhdGZvcm0sIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB8IHVuZGVmaW5lZCk7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19