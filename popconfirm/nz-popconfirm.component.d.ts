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
import * as ɵngcc0 from '@angular/core';
export declare class NzPopconfirmComponent extends NzToolTipComponent {
    noAnimation?: NzNoAnimationDirective | undefined;
    nzOkText: string;
    nzOkType: string;
    nzCancelText: string;
    nzCondition: boolean;
    nzIcon: string | TemplateRef<void>;
    readonly nzOnCancel: EventEmitter<void>;
    readonly nzOnConfirm: EventEmitter<void>;
    _prefix: string;
    _trigger: NzTooltipTrigger;
    _hasBackdrop: boolean;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    show(): void;
    onCancel(): void;
    onConfirm(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzPopconfirmComponent, [null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzPopconfirmComponent, "nz-popconfirm", ["nzPopconfirmComponent"], { "nzOkType": "nzOkType"; "nzCondition": "nzCondition"; "nzOkText": "nzOkText"; "nzCancelText": "nzCancelText"; "nzIcon": "nzIcon"; }, { "nzOnCancel": "nzOnCancel"; "nzOnConfirm": "nzOnConfirm"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotcG9wY29uZmlybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyLCBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelBvcGNvbmZpcm1Db21wb25lbnQgZXh0ZW5kcyBOelRvb2xUaXBDb21wb25lbnQge1xyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xyXG4gICAgbnpPa1RleHQ6IHN0cmluZztcclxuICAgIG56T2tUeXBlOiBzdHJpbmc7XHJcbiAgICBuekNhbmNlbFRleHQ6IHN0cmluZztcclxuICAgIG56Q29uZGl0aW9uOiBib29sZWFuO1xyXG4gICAgbnpJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IG56T25DYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IG56T25Db25maXJtOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICBfcHJlZml4OiBzdHJpbmc7XHJcbiAgICBfdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlcjtcclxuICAgIF9oYXNCYWNrZHJvcDogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB8IHVuZGVmaW5lZCk7XHJcbiAgICBzaG93KCk6IHZvaWQ7XHJcbiAgICBvbkNhbmNlbCgpOiB2b2lkO1xyXG4gICAgb25Db25maXJtKCk6IHZvaWQ7XHJcbn1cclxuIl19