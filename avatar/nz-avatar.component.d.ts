/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { NzConfigService, NzShapeSCType, NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzAvatarComponent implements OnChanges {
    nzConfigService: NzConfigService;
    private elementRef;
    private cd;
    private updateHostClassService;
    private renderer;
    private platform;
    nzShape: NzShapeSCType;
    nzSize: NzSizeLDSType | number;
    nzText: string;
    nzSrc: string;
    nzSrcSet: string;
    nzAlt: string;
    nzIcon: string;
    readonly nzError: EventEmitter<Event>;
    oldAPIIcon: boolean;
    hasText: boolean;
    hasSrc: boolean;
    hasIcon: boolean;
    textStyles: {};
    textEl: ElementRef;
    private el;
    private prefixCls;
    private sizeMap;
    constructor(nzConfigService: NzConfigService, elementRef: ElementRef, cd: ChangeDetectorRef, updateHostClassService: NzUpdateHostClassService, renderer: Renderer2, platform: Platform);
    setClass(): this;
    imgError($event: Event): void;
    ngOnChanges(changes: SimpleChanges): void;
    private calcStringSize;
    private notifyCalc;
    private setSizeStyle;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzAvatarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzAvatarComponent, "nz-avatar", ["nzAvatar"], { "nzShape": "nzShape"; "nzSize": "nzSize"; "nzText": "nzText"; "nzSrc": "nzSrc"; "nzSrcSet": "nzSrcSet"; "nzAlt": "nzAlt"; "nzIcon": "nzIcon"; }, { "nzError": "nzError"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1hdmF0YXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgTnpTaGFwZVNDVHlwZSwgTnpTaXplTERTVHlwZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIGNkO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcclxuICAgIHByaXZhdGUgcGxhdGZvcm07XHJcbiAgICBuelNoYXBlOiBOelNoYXBlU0NUeXBlO1xyXG4gICAgbnpTaXplOiBOelNpemVMRFNUeXBlIHwgbnVtYmVyO1xyXG4gICAgbnpUZXh0OiBzdHJpbmc7XHJcbiAgICBuelNyYzogc3RyaW5nO1xyXG4gICAgbnpTcmNTZXQ6IHN0cmluZztcclxuICAgIG56QWx0OiBzdHJpbmc7XHJcbiAgICBuekljb246IHN0cmluZztcclxuICAgIHJlYWRvbmx5IG56RXJyb3I6IEV2ZW50RW1pdHRlcjxFdmVudD47XHJcbiAgICBvbGRBUElJY29uOiBib29sZWFuO1xyXG4gICAgaGFzVGV4dDogYm9vbGVhbjtcclxuICAgIGhhc1NyYzogYm9vbGVhbjtcclxuICAgIGhhc0ljb246IGJvb2xlYW47XHJcbiAgICB0ZXh0U3R5bGVzOiB7fTtcclxuICAgIHRleHRFbDogRWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgZWw7XHJcbiAgICBwcml2YXRlIHByZWZpeENscztcclxuICAgIHByaXZhdGUgc2l6ZU1hcDtcclxuICAgIGNvbnN0cnVjdG9yKG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcGxhdGZvcm06IFBsYXRmb3JtKTtcclxuICAgIHNldENsYXNzKCk6IHRoaXM7XHJcbiAgICBpbWdFcnJvcigkZXZlbnQ6IEV2ZW50KTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBjYWxjU3RyaW5nU2l6ZTtcclxuICAgIHByaXZhdGUgbm90aWZ5Q2FsYztcclxuICAgIHByaXZhdGUgc2V0U2l6ZVN0eWxlO1xyXG59XHJcbiJdfQ==