/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { NgClassType, NzSizeDSType } from 'ng-zorro-antd/core';
import { NzStepComponent } from './nz-step.component';
import * as ɵngcc0 from '@angular/core';
export declare type NzDirectionType = 'horizontal' | 'vertical';
export declare type NzStatusType = 'wait' | 'process' | 'finish' | 'error';
export declare class NzStepsComponent implements OnChanges, OnInit, OnDestroy, AfterContentInit {
    steps: QueryList<NzStepComponent>;
    nzCurrent: number;
    nzDirection: NzDirectionType;
    nzLabelPlacement: 'horizontal' | 'vertical';
    nzType: 'default' | 'navigation';
    nzSize: NzSizeDSType;
    nzStartIndex: number;
    nzStatus: NzStatusType;
    nzProgressDot: boolean | TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    readonly nzIndexChange: EventEmitter<number>;
    private destroy$;
    private indexChangeSubscription;
    showProcessDot: boolean;
    customProcessDotTemplate: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    classMap: NgClassType;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    private updateChildrenSteps;
    private setClassMap;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzStepsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzStepsComponent, "nz-steps", ["nzSteps"], { "nzCurrent": "nzCurrent"; "nzDirection": "nzDirection"; "nzLabelPlacement": "nzLabelPlacement"; "nzType": "nzType"; "nzSize": "nzSize"; "nzStartIndex": "nzStartIndex"; "nzStatus": "nzStatus"; "nzProgressDot": "nzProgressDot"; }, { "nzIndexChange": "nzIndexChange"; }, ["steps"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcHMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXN0ZXBzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NsYXNzVHlwZSwgTnpTaXplRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zdGVwLmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTnpEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOelN0YXR1c1R5cGUgPSAnd2FpdCcgfCAncHJvY2VzcycgfCAnZmluaXNoJyB8ICdlcnJvcic7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56U3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICAgIHN0ZXBzOiBRdWVyeUxpc3Q8TnpTdGVwQ29tcG9uZW50PjtcclxuICAgIG56Q3VycmVudDogbnVtYmVyO1xyXG4gICAgbnpEaXJlY3Rpb246IE56RGlyZWN0aW9uVHlwZTtcclxuICAgIG56TGFiZWxQbGFjZW1lbnQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XHJcbiAgICBuelR5cGU6ICdkZWZhdWx0JyB8ICduYXZpZ2F0aW9uJztcclxuICAgIG56U2l6ZTogTnpTaXplRFNUeXBlO1xyXG4gICAgbnpTdGFydEluZGV4OiBudW1iZXI7XHJcbiAgICBuelN0YXR1czogTnpTdGF0dXNUeXBlO1xyXG4gICAgbnpQcm9ncmVzc0RvdDogYm9vbGVhbiB8IFRlbXBsYXRlUmVmPHtcclxuICAgICAgICAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgICAgIHN0YXR1czogc3RyaW5nO1xyXG4gICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICB9PjtcclxuICAgIHJlYWRvbmx5IG56SW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDtcclxuICAgIHByaXZhdGUgaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb247XHJcbiAgICBzaG93UHJvY2Vzc0RvdDogYm9vbGVhbjtcclxuICAgIGN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8e1xyXG4gICAgICAgICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICAgICAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgICAgICAgaW5kZXg6IG51bWJlcjtcclxuICAgIH0+O1xyXG4gICAgY2xhc3NNYXA6IE5nQ2xhc3NUeXBlO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDaGlsZHJlblN0ZXBzO1xyXG4gICAgcHJpdmF0ZSBzZXRDbGFzc01hcDtcclxufVxyXG4iXX0=