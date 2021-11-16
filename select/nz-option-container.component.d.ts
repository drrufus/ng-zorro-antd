/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionLiComponent } from './nz-option-li.component';
import { NzOptionComponent } from './nz-option.component';
import { NzSelectService } from './nz-select.service';
import * as ɵngcc0 from '@angular/core';
export declare class NzOptionContainerComponent implements OnDestroy, OnInit, AfterViewInit {
    nzSelectService: NzSelectService;
    private cdr;
    private ngZone;
    private destroy$;
    private lastScrollTop;
    listOfNzOptionLiComponent: QueryList<NzOptionLiComponent>;
    dropdownUl: ElementRef<HTMLUListElement>;
    nzNotFoundContent: string;
    nzMenuItemSelectedIcon: TemplateRef<void>;
    readonly nzScrollToBottom: EventEmitter<void>;
    scrollIntoViewIfNeeded(option: NzOptionComponent): void;
    trackLabel(_index: number, option: NzOptionGroupComponent): string | TemplateRef<void>;
    trackValue(_index: number, option: NzOptionComponent): any;
    constructor(nzSelectService: NzSelectService, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzOptionContainerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzOptionContainerComponent, "[nz-option-container]", ["nzOptionContainer"], { "nzNotFoundContent": "nzNotFoundContent"; "nzMenuItemSelectedIcon": "nzMenuItemSelectedIcon"; }, { "nzScrollToBottom": "nzScrollToBottom"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek9wdGlvbkxpQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tbGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelNlbGVjdFNlcnZpY2UgfSBmcm9tICcuL256LXNlbGVjdC5zZXJ2aWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBuelNlbGVjdFNlcnZpY2U6IE56U2VsZWN0U2VydmljZTtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgcHJpdmF0ZSBuZ1pvbmU7XHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkO1xyXG4gICAgcHJpdmF0ZSBsYXN0U2Nyb2xsVG9wO1xyXG4gICAgbGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uTGlDb21wb25lbnQ+O1xyXG4gICAgZHJvcGRvd25VbDogRWxlbWVudFJlZjxIVE1MVUxpc3RFbGVtZW50PjtcclxuICAgIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgICBuek1lbnVJdGVtU2VsZWN0ZWRJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IG56U2Nyb2xsVG9Cb3R0b206IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIHNjcm9sbEludG9WaWV3SWZOZWVkZWQob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IHZvaWQ7XHJcbiAgICB0cmFja0xhYmVsKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56T3B0aW9uR3JvdXBDb21wb25lbnQpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihuelNlbGVjdFNlcnZpY2U6IE56U2VsZWN0U2VydmljZSwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgbmdab25lOiBOZ1pvbmUpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=