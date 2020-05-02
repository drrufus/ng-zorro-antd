/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
export declare class NzEmptyComponent implements OnChanges, OnInit, OnDestroy {
    private sanitizer;
    private i18n;
    private cdr;
    nzNotFoundImage: string | TemplateRef<void>;
    nzNotFoundContent: string | TemplateRef<void>;
    nzNotFoundFooter: string | TemplateRef<void>;
    defaultSvg: import("@angular/platform-browser").SafeResourceUrl;
    isContentString: boolean;
    locale: {
        [key: string]: string;
    };
    readonly shouldRenderContent: boolean;
    private destroy$;
    constructor(sanitizer: DomSanitizer, i18n: NzI18nService, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzEmptyComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzEmptyComponent, "nz-empty", ["nzEmpty"], { "nzNotFoundImage": "nzNotFoundImage"; "nzNotFoundContent": "nzNotFoundContent"; "nzNotFoundFooter": "nzNotFoundFooter"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWVtcHR5LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekVtcHR5Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIHNhbml0aXplcjtcclxuICAgIHByaXZhdGUgaTE4bjtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgbnpOb3RGb3VuZEltYWdlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56Tm90Rm91bmRGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgZGVmYXVsdFN2ZzogaW1wb3J0KFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKS5TYWZlUmVzb3VyY2VVcmw7XHJcbiAgICBpc0NvbnRlbnRTdHJpbmc6IGJvb2xlYW47XHJcbiAgICBsb2NhbGU6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgcmVhZG9ubHkgc2hvdWxkUmVuZGVyQ29udGVudDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBjb25zdHJ1Y3RvcihzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgaTE4bjogTnpJMThuU2VydmljZSwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==