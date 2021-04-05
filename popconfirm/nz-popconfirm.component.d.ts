/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipTrigger, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import { ElementRef } from '@angular/core';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import * as ɵngcc0 from '@angular/core';
export declare class NzPopconfirmComponent extends NzToolTipComponent {
    private focusTrapFactory;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzOkText: string;
    nzOkType: string;
    nzCancelText: string;
    nzCondition: boolean;
    nzIcon: string | TemplateRef<void>;
    readonly nzOnCancel: EventEmitter<void>;
    readonly nzOnConfirm: EventEmitter<void>;
    popoverContainer: ElementRef;
    private focusTrap;
    private previouslyFocusedElement;
    _prefix: string;
    _trigger: NzTooltipTrigger;
    _hasBackdrop: boolean;
    constructor(cdr: ChangeDetectorRef, focusTrapFactory: FocusTrapFactory, noAnimation?: NzNoAnimationDirective | undefined);
    show(): void;
    close(): void;
    onCancel(): void;
    onConfirm(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzPopconfirmComponent, [null, null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzPopconfirmComponent, "nz-popconfirm", ["nzPopconfirmComponent"], { "nzOkType": "nzOkType"; "nzCondition": "nzCondition"; "nzOkText": "nzOkText"; "nzCancelText": "nzCancelText"; "nzIcon": "nzIcon"; }, { "nzOnCancel": "nzOnCancel"; "nzOnConfirm": "nzOnConfirm"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotcG9wY29uZmlybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwVHJpZ2dlciwgTnpUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelBvcGNvbmZpcm1Db21wb25lbnQgZXh0ZW5kcyBOelRvb2xUaXBDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5O1xyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xyXG4gICAgbnpPa1RleHQ6IHN0cmluZztcclxuICAgIG56T2tUeXBlOiBzdHJpbmc7XHJcbiAgICBuekNhbmNlbFRleHQ6IHN0cmluZztcclxuICAgIG56Q29uZGl0aW9uOiBib29sZWFuO1xyXG4gICAgbnpJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IG56T25DYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IG56T25Db25maXJtOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICBwb3BvdmVyQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXA7XHJcbiAgICBwcml2YXRlIHByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDtcclxuICAgIF9wcmVmaXg6IHN0cmluZztcclxuICAgIF90cmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gICAgX2hhc0JhY2tkcm9wOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSwgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkKTtcclxuICAgIHNob3coKTogdm9pZDtcclxuICAgIGNsb3NlKCk6IHZvaWQ7XHJcbiAgICBvbkNhbmNlbCgpOiB2b2lkO1xyXG4gICAgb25Db25maXJtKCk6IHZvaWQ7XHJcbn1cclxuIl19