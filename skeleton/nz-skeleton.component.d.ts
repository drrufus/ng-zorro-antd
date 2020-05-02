/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NzSkeletonAvatar, NzSkeletonParagraph, NzSkeletonTitle } from './nz-skeleton.type';
import * as ɵngcc0 from '@angular/core';
export declare class NzSkeletonComponent implements OnInit, OnChanges {
    private cdr;
    nzActive: boolean;
    nzLoading: boolean;
    nzTitle: NzSkeletonTitle | boolean;
    nzAvatar: NzSkeletonAvatar | boolean;
    nzParagraph: NzSkeletonParagraph | boolean;
    title: NzSkeletonTitle;
    avatar: NzSkeletonAvatar;
    paragraph: NzSkeletonParagraph;
    rowsList: number[];
    widthList: Array<number | string>;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef);
    toCSSUnit(value?: number | string): string;
    private getTitleProps;
    private getAvatarProps;
    private getParagraphProps;
    private getProps;
    private getWidthList;
    private updateProps;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSkeletonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSkeletonComponent, "nz-skeleton", ["nzSkeleton"], { "nzActive": "nzActive"; "nzLoading": "nzLoading"; "nzTitle": "nzTitle"; "nzAvatar": "nzAvatar"; "nzParagraph": "nzParagraph"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2tlbGV0b24uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXNrZWxldG9uLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelNrZWxldG9uQXZhdGFyLCBOelNrZWxldG9uUGFyYWdyYXBoLCBOelNrZWxldG9uVGl0bGUgfSBmcm9tICcuL256LXNrZWxldG9uLnR5cGUnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelNrZWxldG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBuekFjdGl2ZTogYm9vbGVhbjtcclxuICAgIG56TG9hZGluZzogYm9vbGVhbjtcclxuICAgIG56VGl0bGU6IE56U2tlbGV0b25UaXRsZSB8IGJvb2xlYW47XHJcbiAgICBuekF2YXRhcjogTnpTa2VsZXRvbkF2YXRhciB8IGJvb2xlYW47XHJcbiAgICBuelBhcmFncmFwaDogTnpTa2VsZXRvblBhcmFncmFwaCB8IGJvb2xlYW47XHJcbiAgICB0aXRsZTogTnpTa2VsZXRvblRpdGxlO1xyXG4gICAgYXZhdGFyOiBOelNrZWxldG9uQXZhdGFyO1xyXG4gICAgcGFyYWdyYXBoOiBOelNrZWxldG9uUGFyYWdyYXBoO1xyXG4gICAgcm93c0xpc3Q6IG51bWJlcltdO1xyXG4gICAgd2lkdGhMaXN0OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+O1xyXG4gICAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZik7XHJcbiAgICB0b0NTU1VuaXQodmFsdWU/OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGdldFRpdGxlUHJvcHM7XHJcbiAgICBwcml2YXRlIGdldEF2YXRhclByb3BzO1xyXG4gICAgcHJpdmF0ZSBnZXRQYXJhZ3JhcGhQcm9wcztcclxuICAgIHByaXZhdGUgZ2V0UHJvcHM7XHJcbiAgICBwcml2YXRlIGdldFdpZHRoTGlzdDtcclxuICAgIHByaXZhdGUgdXBkYXRlUHJvcHM7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbn1cclxuIl19