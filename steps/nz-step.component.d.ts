/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2, TemplateRef } from '@angular/core';
import { NgClassType } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NzStepComponent implements OnDestroy {
    private cdr;
    processDotTemplate: TemplateRef<void>;
    nzTitle: string | TemplateRef<void>;
    nzSubtitle: string | TemplateRef<void>;
    nzDescription: string | TemplateRef<void>;
    nzDisabled: boolean;
    nzStatus: string;
    isCustomStatus: boolean;
    private _status;
    nzIcon: NgClassType | TemplateRef<void>;
    oldAPIIcon: boolean;
    isIconString: boolean;
    private _icon;
    customProcessTemplate: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    direction: string;
    index: number;
    last: boolean;
    outStatus: string;
    showProcessDot: boolean;
    clickable: boolean;
    click$: Subject<number>;
    currentIndex: number;
    private _currentIndex;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
    markForCheck(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzStepComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzStepComponent, "nz-step", ["nzStep"], { "nzDisabled": "nzDisabled"; "nzStatus": "nzStatus"; "nzIcon": "nzIcon"; "nzTitle": "nzTitle"; "nzSubtitle": "nzSubtitle"; "nzDescription": "nzDescription"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotc3RlcC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ2xhc3NUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcm9jZXNzRG90VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuelN1YnRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56RGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG56U3RhdHVzOiBzdHJpbmc7XHJcbiAgICBpc0N1c3RvbVN0YXR1czogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3N0YXR1cztcclxuICAgIG56SWNvbjogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG9sZEFQSUljb246IGJvb2xlYW47XHJcbiAgICBpc0ljb25TdHJpbmc6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9pY29uO1xyXG4gICAgY3VzdG9tUHJvY2Vzc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgICAgICBzdGF0dXM6IHN0cmluZztcclxuICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgfT47XHJcbiAgICBkaXJlY3Rpb246IHN0cmluZztcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBsYXN0OiBib29sZWFuO1xyXG4gICAgb3V0U3RhdHVzOiBzdHJpbmc7XHJcbiAgICBzaG93UHJvY2Vzc0RvdDogYm9vbGVhbjtcclxuICAgIGNsaWNrYWJsZTogYm9vbGVhbjtcclxuICAgIGNsaWNrJDogU3ViamVjdDxudW1iZXI+O1xyXG4gICAgY3VycmVudEluZGV4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50SW5kZXg7XHJcbiAgICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKTtcclxuICAgIG9uQ2xpY2soKTogdm9pZDtcclxuICAgIG1hcmtGb3JDaGVjaygpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=