/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, TemplateRef } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare type NzResultIconType = 'success' | 'error' | 'info' | 'warning';
export declare type NzExceptionStatusType = '404' | '500' | '403';
export declare type NzResultStatusType = NzExceptionStatusType | NzResultIconType;
export declare class NzResultComponent implements OnChanges {
    private nzUpdateHostClassService;
    private elementRef;
    nzIcon?: string | TemplateRef<void>;
    nzTitle: string | TemplateRef<void>;
    nzStatus: NzResultStatusType;
    nzSubTitle?: string | TemplateRef<void>;
    nzExtra?: string | TemplateRef<void>;
    icon?: string | TemplateRef<void>;
    isException: boolean;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef);
    ngOnChanges(): void;
    private setStatusIcon;
    private setClassMap;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzResultComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzResultComponent, "nz-result", ["nzResult"], { "nzStatus": "nzStatus"; "nzIcon": "nzIcon"; "nzTitle": "nzTitle"; "nzSubTitle": "nzSubTitle"; "nzExtra": "nzExtra"; }, {}, never, ["[nz-result-icon]", "div[nz-result-title]", "div[nz-result-subtitle]", "nz-result-content, [nz-result-content]", "div[nz-result-extra]"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1yZXN1bHQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTnpSZXN1bHRJY29uVHlwZSA9ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnaW5mbycgfCAnd2FybmluZyc7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTnpFeGNlcHRpb25TdGF0dXNUeXBlID0gJzQwNCcgfCAnNTAwJyB8ICc0MDMnO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE56UmVzdWx0U3RhdHVzVHlwZSA9IE56RXhjZXB0aW9uU3RhdHVzVHlwZSB8IE56UmVzdWx0SWNvblR5cGU7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56UmVzdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmO1xyXG4gICAgbnpJY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56U3RhdHVzOiBOelJlc3VsdFN0YXR1c1R5cGU7XHJcbiAgICBuelN1YlRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuekV4dHJhPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBpY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBpc0V4Y2VwdGlvbjogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKTtcclxuICAgIG5nT25DaGFuZ2VzKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIHNldFN0YXR1c0ljb247XHJcbiAgICBwcml2YXRlIHNldENsYXNzTWFwO1xyXG59XHJcbiJdfQ==