/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { NzBreakPoint, NzDomEventService } from 'ng-zorro-antd/core';
import { NzLayoutComponent } from './nz-layout.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzSiderComponent implements OnInit, AfterViewInit, OnDestroy {
    private nzLayoutComponent;
    private mediaMatcher;
    private ngZone;
    private platform;
    private cdr;
    private nzDomEventService;
    private below;
    private destroy$;
    private dimensionMap;
    readonly nzCollapsedChange: EventEmitter<any>;
    nzWidth: string | number;
    nzTheme: 'light' | 'dark';
    nzCollapsedWidth: number;
    nzBreakpoint: NzBreakPoint;
    nzZeroTrigger: TemplateRef<void>;
    nzReverseArrow: boolean;
    nzCollapsible: boolean;
    nzCollapsed: boolean;
    nzTrigger: TemplateRef<void>;
    defaultTrigger: TemplateRef<void>;
    readonly trigger: TemplateRef<void>;
    readonly flexSetting: string;
    readonly widthSetting: string;
    watchMatchMedia(): void;
    toggleCollapse(): void;
    readonly isZeroTrigger: boolean;
    readonly isSiderTrigger: boolean;
    constructor(nzLayoutComponent: NzLayoutComponent, mediaMatcher: MediaMatcher, ngZone: NgZone, platform: Platform, cdr: ChangeDetectorRef, nzDomEventService: NzDomEventService, renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSiderComponent, [{ optional: true; host: true; }, null, null, null, null, null, null, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSiderComponent, "nz-sider", ["nzSider"], { "nzWidth": "nzWidth"; "nzTheme": "nzTheme"; "nzCollapsedWidth": "nzCollapsedWidth"; "nzReverseArrow": "nzReverseArrow"; "nzCollapsible": "nzCollapsible"; "nzCollapsed": "nzCollapsed"; "nzBreakpoint": "nzBreakpoint"; "nzZeroTrigger": "nzZeroTrigger"; "nzTrigger": "nzTrigger"; }, { "nzCollapsedChange": "nzCollapsedChange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2lkZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXNpZGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBOekJyZWFrUG9pbnQsIE56RG9tRXZlbnRTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL256LWxheW91dC5jb21wb25lbnQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelNpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBuekxheW91dENvbXBvbmVudDtcclxuICAgIHByaXZhdGUgbWVkaWFNYXRjaGVyO1xyXG4gICAgcHJpdmF0ZSBuZ1pvbmU7XHJcbiAgICBwcml2YXRlIHBsYXRmb3JtO1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBiZWxvdztcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBwcml2YXRlIGRpbWVuc2lvbk1hcDtcclxuICAgIHJlYWRvbmx5IG56Q29sbGFwc2VkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIG56V2lkdGg6IHN0cmluZyB8IG51bWJlcjtcclxuICAgIG56VGhlbWU6ICdsaWdodCcgfCAnZGFyayc7XHJcbiAgICBuekNvbGxhcHNlZFdpZHRoOiBudW1iZXI7XHJcbiAgICBuekJyZWFrcG9pbnQ6IE56QnJlYWtQb2ludDtcclxuICAgIG56WmVyb1RyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpSZXZlcnNlQXJyb3c6IGJvb2xlYW47XHJcbiAgICBuekNvbGxhcHNpYmxlOiBib29sZWFuO1xyXG4gICAgbnpDb2xsYXBzZWQ6IGJvb2xlYW47XHJcbiAgICBuelRyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgZGVmYXVsdFRyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgcmVhZG9ubHkgdHJpZ2dlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICByZWFkb25seSBmbGV4U2V0dGluZzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgd2lkdGhTZXR0aW5nOiBzdHJpbmc7XHJcbiAgICB3YXRjaE1hdGNoTWVkaWEoKTogdm9pZDtcclxuICAgIHRvZ2dsZUNvbGxhcHNlKCk6IHZvaWQ7XHJcbiAgICByZWFkb25seSBpc1plcm9UcmlnZ2VyOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgaXNTaWRlclRyaWdnZXI6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihuekxheW91dENvbXBvbmVudDogTnpMYXlvdXRDb21wb25lbnQsIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLCBuZ1pvbmU6IE5nWm9uZSwgcGxhdGZvcm06IFBsYXRmb3JtLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=