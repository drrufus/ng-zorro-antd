/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Portal } from '@angular/cdk/portal';
import { ChangeDetectorRef, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { NzEmptyCustomContent, NzEmptySize } from './nz-empty-config';
import { NzEmptyService } from './nz-empty.service';
import * as ɵngcc0 from '@angular/core';
export declare class NzEmbedEmptyComponent implements OnChanges, OnInit, OnDestroy {
    emptyService: NzEmptyService;
    private sanitizer;
    private viewContainerRef;
    private cdr;
    private injector;
    nzComponentName: string;
    specificContent: NzEmptyCustomContent;
    content?: NzEmptyCustomContent;
    contentType: 'component' | 'template' | 'string';
    contentPortal?: Portal<any>;
    defaultSvg: import("@angular/platform-browser").SafeResourceUrl;
    size: NzEmptySize;
    subs_: Subscription;
    constructor(emptyService: NzEmptyService, sanitizer: DomSanitizer, viewContainerRef: ViewContainerRef, cdr: ChangeDetectorRef, injector: Injector);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private getEmptySize;
    private renderEmpty;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzEmbedEmptyComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzEmbedEmptyComponent, "nz-embed-empty", ["nzEmbedEmpty"], { "nzComponentName": "nzComponentName"; "specificContent": "specificContent"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1iZWQtZW1wdHkuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWVtYmVkLWVtcHR5LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgSW5qZWN0b3IsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekVtcHR5Q3VzdG9tQ29udGVudCwgTnpFbXB0eVNpemUgfSBmcm9tICcuL256LWVtcHR5LWNvbmZpZyc7XHJcbmltcG9ydCB7IE56RW1wdHlTZXJ2aWNlIH0gZnJvbSAnLi9uei1lbXB0eS5zZXJ2aWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpFbWJlZEVtcHR5Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBlbXB0eVNlcnZpY2U6IE56RW1wdHlTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI7XHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgaW5qZWN0b3I7XHJcbiAgICBuekNvbXBvbmVudE5hbWU6IHN0cmluZztcclxuICAgIHNwZWNpZmljQ29udGVudDogTnpFbXB0eUN1c3RvbUNvbnRlbnQ7XHJcbiAgICBjb250ZW50PzogTnpFbXB0eUN1c3RvbUNvbnRlbnQ7XHJcbiAgICBjb250ZW50VHlwZTogJ2NvbXBvbmVudCcgfCAndGVtcGxhdGUnIHwgJ3N0cmluZyc7XHJcbiAgICBjb250ZW50UG9ydGFsPzogUG9ydGFsPGFueT47XHJcbiAgICBkZWZhdWx0U3ZnOiBpbXBvcnQoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLlNhZmVSZXNvdXJjZVVybDtcclxuICAgIHNpemU6IE56RW1wdHlTaXplO1xyXG4gICAgc3Vic186IFN1YnNjcmlwdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKGVtcHR5U2VydmljZTogTnpFbXB0eVNlcnZpY2UsIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBpbmplY3RvcjogSW5qZWN0b3IpO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIHByaXZhdGUgZ2V0RW1wdHlTaXplO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJFbXB0eTtcclxufVxyXG4iXX0=