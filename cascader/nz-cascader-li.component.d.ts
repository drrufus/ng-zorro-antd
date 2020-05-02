/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, Renderer2, TemplateRef } from '@angular/core';
import { NzCascaderOption } from './nz-cascader-definitions';
import * as ɵngcc0 from '@angular/core';
export declare class NzCascaderOptionComponent {
    private cdr;
    optionTemplate: TemplateRef<NzCascaderOption> | null;
    option: NzCascaderOption;
    activated: boolean;
    highlightText: string;
    nzLabelProperty: string;
    columnIndex: number;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    readonly optionLabel: string;
    markForCheck(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCascaderOptionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCascaderOptionComponent, "[nz-cascader-option]", ["nzCascaderOption"], { "optionTemplate": "optionTemplate"; "activated": "activated"; "nzLabelProperty": "nzLabelProperty"; "option": "option"; "highlightText": "highlightText"; "columnIndex": "columnIndex"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItbGkuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLWxpLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNhc2NhZGVyT3B0aW9uIH0gZnJvbSAnLi9uei1jYXNjYWRlci1kZWZpbml0aW9ucyc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBvcHRpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpDYXNjYWRlck9wdGlvbj4gfCBudWxsO1xyXG4gICAgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uO1xyXG4gICAgYWN0aXZhdGVkOiBib29sZWFuO1xyXG4gICAgaGlnaGxpZ2h0VGV4dDogc3RyaW5nO1xyXG4gICAgbnpMYWJlbFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMik7XHJcbiAgICByZWFkb25seSBvcHRpb25MYWJlbDogc3RyaW5nO1xyXG4gICAgbWFya0ZvckNoZWNrKCk6IHZvaWQ7XHJcbn1cclxuIl19