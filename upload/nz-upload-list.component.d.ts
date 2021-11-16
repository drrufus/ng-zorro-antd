/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, OnChanges } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { ShowUploadListInterface, UploadFile, UploadListType } from './interface';
import * as ɵngcc0 from '@angular/core';
export declare class NzUploadListComponent implements OnChanges {
    private el;
    private cdr;
    private updateHostClassService;
    private platform;
    private imageTypes;
    private _items;
    readonly showPic: boolean;
    locale: any;
    listType: UploadListType;
    items: UploadFile[];
    icons: ShowUploadListInterface;
    onPreview: (file: UploadFile) => void;
    onRemove: (file: UploadFile) => void;
    private prefixCls;
    private setClassMap;
    private extname;
    isImageUrl(file: UploadFile): boolean;
    private previewFile;
    private genThumb;
    showPreview(file: UploadFile): boolean;
    handlePreview(file: UploadFile, e: Event): void;
    handleRemove(file: UploadFile, e: Event): void;
    constructor(el: ElementRef, cdr: ChangeDetectorRef, updateHostClassService: NzUpdateHostClassService, platform: Platform);
    detectChanges(): void;
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzUploadListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzUploadListComponent, "nz-upload-list", ["nzUploadList"], { "locale": "locale"; "items": "items"; "listType": "listType"; "icons": "icons"; "onPreview": "onPreview"; "onRemove": "onRemove"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWxpc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXVwbG9hZC1saXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UsIFVwbG9hZEZpbGUsIFVwbG9hZExpc3RUeXBlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelVwbG9hZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBlbDtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTtcclxuICAgIHByaXZhdGUgaW1hZ2VUeXBlcztcclxuICAgIHByaXZhdGUgX2l0ZW1zO1xyXG4gICAgcmVhZG9ubHkgc2hvd1BpYzogYm9vbGVhbjtcclxuICAgIGxvY2FsZTogYW55O1xyXG4gICAgbGlzdFR5cGU6IFVwbG9hZExpc3RUeXBlO1xyXG4gICAgaXRlbXM6IFVwbG9hZEZpbGVbXTtcclxuICAgIGljb25zOiBTaG93VXBsb2FkTGlzdEludGVyZmFjZTtcclxuICAgIG9uUHJldmlldzogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XHJcbiAgICBvblJlbW92ZTogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIHByZWZpeENscztcclxuICAgIHByaXZhdGUgc2V0Q2xhc3NNYXA7XHJcbiAgICBwcml2YXRlIGV4dG5hbWU7XHJcbiAgICBpc0ltYWdlVXJsKGZpbGU6IFVwbG9hZEZpbGUpOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBwcmV2aWV3RmlsZTtcclxuICAgIHByaXZhdGUgZ2VuVGh1bWI7XHJcbiAgICBzaG93UHJldmlldyhmaWxlOiBVcGxvYWRGaWxlKTogYm9vbGVhbjtcclxuICAgIGhhbmRsZVByZXZpZXcoZmlsZTogVXBsb2FkRmlsZSwgZTogRXZlbnQpOiB2b2lkO1xyXG4gICAgaGFuZGxlUmVtb3ZlKGZpbGU6IFVwbG9hZEZpbGUsIGU6IEV2ZW50KTogdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHBsYXRmb3JtOiBQbGF0Zm9ybSk7XHJcbiAgICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkO1xyXG59XHJcbiJdfQ==