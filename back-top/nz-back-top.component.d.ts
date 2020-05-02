/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NzConfigService, NzScrollService } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzBackTopComponent implements OnInit, OnDestroy {
    nzConfigService: NzConfigService;
    private scrollSrv;
    private doc;
    private platform;
    private cd;
    private scroll$;
    private target;
    visible: boolean;
    nzTemplate: TemplateRef<void>;
    nzVisibilityHeight: number;
    nzTarget: string | HTMLElement;
    readonly nzClick: EventEmitter<boolean>;
    constructor(nzConfigService: NzConfigService, scrollSrv: NzScrollService, doc: any, platform: Platform, cd: ChangeDetectorRef);
    ngOnInit(): void;
    clickBackTop(): void;
    private getTarget;
    private handleScroll;
    private removeListen;
    private registerScrollEvent;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzBackTopComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzBackTopComponent, "nz-back-top", ["nzBackTop"], { "nzTarget": "nzTarget"; "nzTemplate": "nzTemplate"; "nzVisibilityHeight": "nzVisibilityHeight"; }, { "nzClick": "nzClick"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFjay10b3AuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWJhY2stdG9wLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIE56U2Nyb2xsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56QmFja1RvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBzY3JvbGxTcnY7XHJcbiAgICBwcml2YXRlIGRvYztcclxuICAgIHByaXZhdGUgcGxhdGZvcm07XHJcbiAgICBwcml2YXRlIGNkO1xyXG4gICAgcHJpdmF0ZSBzY3JvbGwkO1xyXG4gICAgcHJpdmF0ZSB0YXJnZXQ7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuO1xyXG4gICAgbnpUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuelZpc2liaWxpdHlIZWlnaHQ6IG51bWJlcjtcclxuICAgIG56VGFyZ2V0OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcclxuICAgIHJlYWRvbmx5IG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIGNvbnN0cnVjdG9yKG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCBzY3JvbGxTcnY6IE56U2Nyb2xsU2VydmljZSwgZG9jOiBhbnksIHBsYXRmb3JtOiBQbGF0Zm9ybSwgY2Q6IENoYW5nZURldGVjdG9yUmVmKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBjbGlja0JhY2tUb3AoKTogdm9pZDtcclxuICAgIHByaXZhdGUgZ2V0VGFyZ2V0O1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVTY3JvbGw7XHJcbiAgICBwcml2YXRlIHJlbW92ZUxpc3RlbjtcclxuICAgIHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxFdmVudDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19