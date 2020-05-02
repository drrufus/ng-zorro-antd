/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormItemComponent } from './nz-form-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzFormLabelComponent extends NzColDirective implements OnDestroy, AfterViewInit {
    private cdr;
    nzFor: string;
    nzRequired: boolean;
    nzNoColon: boolean;
    defaultNoColon: boolean;
    noColon: boolean | string;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzFormItemComponent: NzFormItemComponent, nzRowDirective: NzRowDirective, renderer: Renderer2, cdr: ChangeDetectorRef);
    setDefaultNoColon(value: boolean): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzFormLabelComponent, [null, null, { optional: true; host: true; }, { optional: true; host: true; }, null, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzFormLabelComponent, "nz-form-label", ["nzFormLabel"], { "nzRequired": "nzRequired"; "nzNoColon": "nzNoColon"; "nzFor": "nzFor"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1sYWJlbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotZm9ybS1sYWJlbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpDb2xEaXJlY3RpdmUsIE56Um93RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ncmlkJztcclxuaW1wb3J0IHsgTnpGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS1pdGVtLmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Rm9ybUxhYmVsQ29tcG9uZW50IGV4dGVuZHMgTnpDb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBuekZvcjogc3RyaW5nO1xyXG4gICAgbnpSZXF1aXJlZDogYm9vbGVhbjtcclxuICAgIG56Tm9Db2xvbjogYm9vbGVhbjtcclxuICAgIGRlZmF1bHROb0NvbG9uOiBib29sZWFuO1xyXG4gICAgbm9Db2xvbjogYm9vbGVhbiB8IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuekZvcm1JdGVtQ29tcG9uZW50OiBOekZvcm1JdGVtQ29tcG9uZW50LCBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgc2V0RGVmYXVsdE5vQ29sb24odmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG59XHJcbiJdfQ==