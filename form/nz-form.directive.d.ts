/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NzConfigService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzFormLabelComponent } from './nz-form-label.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzFormDirective implements OnInit, OnChanges, AfterContentInit, OnDestroy {
    nzConfigService: NzConfigService;
    private elementRef;
    private renderer;
    private nzUpdateHostClassService;
    nzLayout: string;
    nzNoColon: boolean;
    nzFormLabelComponent: QueryList<NzFormLabelComponent>;
    destroy$: Subject<unknown>;
    setClassMap(): void;
    updateItemsDefaultColon(): void;
    constructor(nzConfigService: NzConfigService, elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzFormDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzFormDirective, "[nz-form]", ["nzForm"], { "nzLayout": "nzLayout"; "nzNoColon": "nzNoColon"; }, {}, ["nzFormLabelComponent"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibnotZm9ybS5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpGb3JtTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL256LWZvcm0tbGFiZWwuY29tcG9uZW50JztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpGb3JtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZTtcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTtcclxuICAgIG56TGF5b3V0OiBzdHJpbmc7XHJcbiAgICBuek5vQ29sb246IGJvb2xlYW47XHJcbiAgICBuekZvcm1MYWJlbENvbXBvbmVudDogUXVlcnlMaXN0PE56Rm9ybUxhYmVsQ29tcG9uZW50PjtcclxuICAgIGRlc3Ryb3kkOiBTdWJqZWN0PHVua25vd24+O1xyXG4gICAgc2V0Q2xhc3NNYXAoKTogdm9pZDtcclxuICAgIHVwZGF0ZUl0ZW1zRGVmYXVsdENvbG9uKCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==