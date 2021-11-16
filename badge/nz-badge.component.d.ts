/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentObserver } from '@angular/cdk/observers';
import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare type NzBadgeStatusType = 'success' | 'processing' | 'default' | 'error' | 'warning';
export declare class NzBadgeComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    nzConfigService: NzConfigService;
    private renderer;
    private elementRef;
    private contentObserver;
    private cdr;
    private ngZone;
    private destroy$;
    notWrapper: boolean;
    viewInit: boolean;
    maxNumberArray: string[];
    countArray: number[];
    countSingleArray: number[];
    colorArray: string[];
    presetColor: string | null;
    count: number;
    contentElement: ElementRef;
    nzShowZero: boolean;
    nzShowDot: boolean;
    nzDot: boolean;
    nzOverflowCount: number;
    nzText: string;
    nzColor: string;
    nzTitle: string;
    nzStyle: {
        [key: string]: string;
    };
    nzStatus: NzBadgeStatusType;
    nzCount: number | TemplateRef<void>;
    nzOffset: [number, number];
    checkContent(): void;
    readonly showSup: boolean;
    generateMaxNumberArray(): void;
    constructor(nzConfigService: NzConfigService, renderer: Renderer2, elementRef: ElementRef, contentObserver: ContentObserver, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzBadgeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzBadgeComponent, "nz-badge", ["nzBadge"], { "nzShowZero": "nzShowZero"; "nzShowDot": "nzShowDot"; "nzDot": "nzDot"; "nzOverflowCount": "nzOverflowCount"; "nzText": "nzText"; "nzColor": "nzColor"; "nzTitle": "nzTitle"; "nzStyle": "nzStyle"; "nzStatus": "nzStatus"; "nzCount": "nzCount"; "nzOffset": "nzOffset"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFkZ2UuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWJhZGdlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDb250ZW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE56QmFkZ2VTdGF0dXNUeXBlID0gJ3N1Y2Nlc3MnIHwgJ3Byb2Nlc3NpbmcnIHwgJ2RlZmF1bHQnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSBjb250ZW50T2JzZXJ2ZXI7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgbmdab25lO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDtcclxuICAgIG5vdFdyYXBwZXI6IGJvb2xlYW47XHJcbiAgICB2aWV3SW5pdDogYm9vbGVhbjtcclxuICAgIG1heE51bWJlckFycmF5OiBzdHJpbmdbXTtcclxuICAgIGNvdW50QXJyYXk6IG51bWJlcltdO1xyXG4gICAgY291bnRTaW5nbGVBcnJheTogbnVtYmVyW107XHJcbiAgICBjb2xvckFycmF5OiBzdHJpbmdbXTtcclxuICAgIHByZXNldENvbG9yOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gICAgbnpTaG93WmVybzogYm9vbGVhbjtcclxuICAgIG56U2hvd0RvdDogYm9vbGVhbjtcclxuICAgIG56RG90OiBib29sZWFuO1xyXG4gICAgbnpPdmVyZmxvd0NvdW50OiBudW1iZXI7XHJcbiAgICBuelRleHQ6IHN0cmluZztcclxuICAgIG56Q29sb3I6IHN0cmluZztcclxuICAgIG56VGl0bGU6IHN0cmluZztcclxuICAgIG56U3R5bGU6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgbnpTdGF0dXM6IE56QmFkZ2VTdGF0dXNUeXBlO1xyXG4gICAgbnpDb3VudDogbnVtYmVyIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuek9mZnNldDogW251bWJlciwgbnVtYmVyXTtcclxuICAgIGNoZWNrQ29udGVudCgpOiB2b2lkO1xyXG4gICAgcmVhZG9ubHkgc2hvd1N1cDogYm9vbGVhbjtcclxuICAgIGdlbmVyYXRlTWF4TnVtYmVyQXJyYXkoKTogdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjb250ZW50T2JzZXJ2ZXI6IENvbnRlbnRPYnNlcnZlciwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgbmdab25lOiBOZ1pvbmUpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==