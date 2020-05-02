/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzDirectionVHType, NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Observable } from 'rxjs';
import { NzListGrid } from './interface';
import * as ɵngcc0 from '@angular/core';
export declare class NzListComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private updateHostClassService;
    nzDataSource: any[];
    nzBordered: boolean;
    nzGrid: NzListGrid;
    nzHeader: string | TemplateRef<void>;
    nzFooter: string | TemplateRef<void>;
    nzItemLayout: NzDirectionVHType;
    nzRenderItem: TemplateRef<void>;
    nzLoading: boolean;
    nzLoadMore: TemplateRef<void>;
    nzPagination: TemplateRef<void>;
    nzSize: NzSizeLDSType;
    nzSplit: boolean;
    nzNoResult: string | TemplateRef<void>;
    private prefixCls;
    private _setClassMap;
    private itemLayoutNotifySource;
    readonly itemLayoutNotify$: Observable<NzDirectionVHType>;
    constructor(el: ElementRef, updateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzListComponent, "nz-list, [nz-list]", ["nzList"], { "nzBordered": "nzBordered"; "nzItemLayout": "nzItemLayout"; "nzLoading": "nzLoading"; "nzSize": "nzSize"; "nzSplit": "nzSplit"; "nzDataSource": "nzDataSource"; "nzGrid": "nzGrid"; "nzHeader": "nzHeader"; "nzFooter": "nzFooter"; "nzRenderItem": "nzRenderItem"; "nzLoadMore": "nzLoadMore"; "nzPagination": "nzPagination"; "nzNoResult": "nzNoResult"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotbGlzdC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56RGlyZWN0aW9uVkhUeXBlLCBOelNpemVMRFNUeXBlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TGlzdEdyaWQgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBlbDtcclxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTtcclxuICAgIG56RGF0YVNvdXJjZTogYW55W107XHJcbiAgICBuekJvcmRlcmVkOiBib29sZWFuO1xyXG4gICAgbnpHcmlkOiBOekxpc3RHcmlkO1xyXG4gICAgbnpIZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpJdGVtTGF5b3V0OiBOekRpcmVjdGlvblZIVHlwZTtcclxuICAgIG56UmVuZGVySXRlbTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuekxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBuekxvYWRNb3JlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56UGFnaW5hdGlvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuelNpemU6IE56U2l6ZUxEU1R5cGU7XHJcbiAgICBuelNwbGl0OiBib29sZWFuO1xyXG4gICAgbnpOb1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBwcml2YXRlIHByZWZpeENscztcclxuICAgIHByaXZhdGUgX3NldENsYXNzTWFwO1xyXG4gICAgcHJpdmF0ZSBpdGVtTGF5b3V0Tm90aWZ5U291cmNlO1xyXG4gICAgcmVhZG9ubHkgaXRlbUxheW91dE5vdGlmeSQ6IE9ic2VydmFibGU8TnpEaXJlY3Rpb25WSFR5cGU+O1xyXG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSk7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==