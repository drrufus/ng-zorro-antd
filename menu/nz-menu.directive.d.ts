/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { NzDirectionVHIType, NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzSubMenuComponent } from './nz-submenu.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzMenuDirective implements AfterContentInit, OnInit, OnChanges, OnDestroy {
    elementRef: ElementRef;
    private nzMenuService;
    private nzUpdateHostClassService;
    private destroy$;
    private cacheMode;
    private listOfOpenedNzSubMenuComponent;
    listOfNzMenuItemDirective: QueryList<NzMenuItemDirective>;
    listOfNzSubMenuComponent: QueryList<NzSubMenuComponent>;
    nzInlineIndent: number;
    nzTheme: 'light' | 'dark';
    nzMode: NzDirectionVHIType;
    nzInDropDown: boolean;
    nzInlineCollapsed: boolean;
    nzSelectable: boolean;
    readonly nzClick: EventEmitter<NzMenuItemDirective>;
    updateInlineCollapse(): void;
    setClassMap(): void;
    constructor(elementRef: ElementRef, nzMenuService: NzMenuBaseService, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzMenuDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzMenuDirective, "[nz-menu]", ["nzMenu"], { "nzInlineIndent": "nzInlineIndent"; "nzTheme": "nzTheme"; "nzMode": "nzMode"; "nzInDropDown": "nzInDropDown"; "nzInlineCollapsed": "nzInlineCollapsed"; "nzSelectable": "nzSelectable"; }, { "nzClick": "nzClick"; }, ["listOfNzMenuItemDirective", "listOfNzSubMenuComponent"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibnotbWVudS5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpEaXJlY3Rpb25WSElUeXBlLCBOek1lbnVCYXNlU2VydmljZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56U3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbnotc3VibWVudS5jb21wb25lbnQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOek1lbnVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIG56TWVudVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBwcml2YXRlIGNhY2hlTW9kZTtcclxuICAgIHByaXZhdGUgbGlzdE9mT3BlbmVkTnpTdWJNZW51Q29tcG9uZW50O1xyXG4gICAgbGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZTogUXVlcnlMaXN0PE56TWVudUl0ZW1EaXJlY3RpdmU+O1xyXG4gICAgbGlzdE9mTnpTdWJNZW51Q29tcG9uZW50OiBRdWVyeUxpc3Q8TnpTdWJNZW51Q29tcG9uZW50PjtcclxuICAgIG56SW5saW5lSW5kZW50OiBudW1iZXI7XHJcbiAgICBuelRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnO1xyXG4gICAgbnpNb2RlOiBOekRpcmVjdGlvblZISVR5cGU7XHJcbiAgICBuekluRHJvcERvd246IGJvb2xlYW47XHJcbiAgICBueklubGluZUNvbGxhcHNlZDogYm9vbGVhbjtcclxuICAgIG56U2VsZWN0YWJsZTogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxOek1lbnVJdGVtRGlyZWN0aXZlPjtcclxuICAgIHVwZGF0ZUlubGluZUNvbGxhcHNlKCk6IHZvaWQ7XHJcbiAgICBzZXRDbGFzc01hcCgpOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbnpNZW51U2VydmljZTogTnpNZW51QmFzZVNlcnZpY2UsIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=