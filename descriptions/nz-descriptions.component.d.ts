/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { NzBreakpoint, NzConfigService, NzDomEventService } from 'ng-zorro-antd/core';
import { NzDescriptionsItemRenderProps, NzDescriptionsLayout, NzDescriptionsSize } from './nz-descriptions-definitions';
import { NzDescriptionsItemComponent } from './nz-descriptions-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzDescriptionsComponent implements OnChanges, OnDestroy, AfterContentInit {
    nzConfigService: NzConfigService;
    private cdr;
    private mediaMatcher;
    private platform;
    private nzDomEventService;
    items: QueryList<NzDescriptionsItemComponent>;
    nzBordered: boolean;
    nzLayout: NzDescriptionsLayout;
    nzColumn: number | {
        [key in NzBreakpoint]: number;
    };
    nzSize: NzDescriptionsSize;
    nzTitle: string | TemplateRef<void>;
    nzColon: boolean;
    itemMatrix: NzDescriptionsItemRenderProps[][];
    realColumn: number;
    private destroy$;
    private resize$;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, mediaMatcher: MediaMatcher, platform: Platform, nzDomEventService: NzDomEventService);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Prepare the render matrix according to description items' spans.
     */
    private prepareMatrix;
    private matchMedia;
    private getColumn;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzDescriptionsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzDescriptionsComponent, "nz-descriptions", ["nzDescriptions"], { "nzLayout": "nzLayout"; "nzTitle": "nzTitle"; "nzBordered": "nzBordered"; "nzColumn": "nzColumn"; "nzSize": "nzSize"; "nzColon": "nzColon"; }, {}, ["items"], never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1kZXNjcmlwdGlvbnMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56QnJlYWtwb2ludCwgTnpDb25maWdTZXJ2aWNlLCBOekRvbUV2ZW50U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzLCBOekRlc2NyaXB0aW9uc0xheW91dCwgTnpEZXNjcmlwdGlvbnNTaXplIH0gZnJvbSAnLi9uei1kZXNjcmlwdGlvbnMtZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LWRlc2NyaXB0aW9ucy1pdGVtLmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56RGVzY3JpcHRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgbWVkaWFNYXRjaGVyO1xyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTtcclxuICAgIHByaXZhdGUgbnpEb21FdmVudFNlcnZpY2U7XHJcbiAgICBpdGVtczogUXVlcnlMaXN0PE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudD47XHJcbiAgICBuekJvcmRlcmVkOiBib29sZWFuO1xyXG4gICAgbnpMYXlvdXQ6IE56RGVzY3JpcHRpb25zTGF5b3V0O1xyXG4gICAgbnpDb2x1bW46IG51bWJlciB8IHtcclxuICAgICAgICBba2V5IGluIE56QnJlYWtwb2ludF06IG51bWJlcjtcclxuICAgIH07XHJcbiAgICBuelNpemU6IE56RGVzY3JpcHRpb25zU2l6ZTtcclxuICAgIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpDb2xvbjogYm9vbGVhbjtcclxuICAgIGl0ZW1NYXRyaXg6IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzW11bXTtcclxuICAgIHJlYWxDb2x1bW46IG51bWJlcjtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBwcml2YXRlIHJlc2l6ZSQ7XHJcbiAgICBjb25zdHJ1Y3RvcihuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsIHBsYXRmb3JtOiBQbGF0Zm9ybSwgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlKTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcmVwYXJlIHRoZSByZW5kZXIgbWF0cml4IGFjY29yZGluZyB0byBkZXNjcmlwdGlvbiBpdGVtcycgc3BhbnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJlcGFyZU1hdHJpeDtcclxuICAgIHByaXZhdGUgbWF0Y2hNZWRpYTtcclxuICAgIHByaXZhdGUgZ2V0Q29sdW1uO1xyXG59XHJcbiJdfQ==