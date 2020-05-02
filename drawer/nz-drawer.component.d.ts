/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, EventEmitter, Injector, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayKeyboardDispatcher, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { Observable, Subject } from 'rxjs';
import { NzConfigService } from 'ng-zorro-antd/core';
import { NzDrawerOptionsOfComponent, NzDrawerPlacement } from './nz-drawer-options';
import { NzDrawerRef } from './nz-drawer-ref';
import * as ɵngcc0 from '@angular/core';
export declare const DRAWER_ANIMATE_DURATION = 300;
export declare class NzDrawerComponent<T = any, R = any, D = any> extends NzDrawerRef<R> implements OnInit, OnDestroy, AfterViewInit, OnChanges, NzDrawerOptionsOfComponent {
    private document;
    nzConfigService: NzConfigService;
    private renderer;
    private overlay;
    private injector;
    private changeDetectorRef;
    private focusTrapFactory;
    private viewContainerRef;
    private overlayKeyboardDispatcher;
    nzContent: TemplateRef<{
        $implicit: D;
        drawerRef: NzDrawerRef<R>;
    }> | Type<T>;
    nzClosable: boolean;
    nzMaskClosable: boolean;
    nzMask: boolean;
    nzNoAnimation: boolean;
    nzKeyboard: boolean;
    nzTitle: string | TemplateRef<{}>;
    nzPlacement: NzDrawerPlacement;
    nzMaskStyle: object;
    nzBodyStyle: object;
    nzWrapClassName: string;
    nzWidth: number | string;
    nzHeight: number | string;
    nzZIndex: number;
    nzOffsetX: number;
    nzOffsetY: number;
    nzVisible: boolean;
    readonly nzOnViewInit: EventEmitter<void>;
    readonly nzOnClose: EventEmitter<MouseEvent>;
    drawerTemplate: TemplateRef<void>;
    bodyPortalOutlet: CdkPortalOutlet;
    destroy$: Subject<void>;
    previouslyFocusedElement: HTMLElement;
    nzContentParams: D;
    overlayRef: OverlayRef | null;
    portal: TemplatePortal;
    focusTrap: FocusTrap;
    isOpen: boolean;
    templateContext: {
        $implicit: D | undefined;
        drawerRef: NzDrawerRef<R>;
    };
    readonly offsetTransform: string | null;
    readonly transform: string | null;
    readonly width: string | null;
    readonly height: string | null;
    readonly isLeftOrRight: boolean;
    nzAfterOpen: Subject<void>;
    nzAfterClose: Subject<R>;
    readonly afterOpen: Observable<void>;
    readonly afterClose: Observable<R>;
    isTemplateRef(value: {}): boolean;
    constructor(document: any, nzConfigService: NzConfigService, renderer: Renderer2, overlay: Overlay, injector: Injector, changeDetectorRef: ChangeDetectorRef, focusTrapFactory: FocusTrapFactory, viewContainerRef: ViewContainerRef, overlayKeyboardDispatcher: OverlayKeyboardDispatcher);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private getAnimationDuration;
    close(result?: R): void;
    open(): void;
    closeClick(): void;
    maskClick(): void;
    private attachBodyContent;
    private attachOverlay;
    private disposeOverlay;
    private getOverlayConfig;
    private updateOverlayStyle;
    private updateBodyOverflow;
    savePreviouslyFocusedElement(): void;
    private trapFocus;
    private restoreFocus;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzDrawerComponent<any, any, any>, [{ optional: true; }, null, null, null, null, null, null, null, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzDrawerComponent<any, any, any>, "nz-drawer", ["nzDrawer"], { "nzClosable": "nzClosable"; "nzNoAnimation": "nzNoAnimation"; "nzKeyboard": "nzKeyboard"; "nzPlacement": "nzPlacement"; "nzMaskStyle": "nzMaskStyle"; "nzBodyStyle": "nzBodyStyle"; "nzWidth": "nzWidth"; "nzHeight": "nzHeight"; "nzZIndex": "nzZIndex"; "nzOffsetX": "nzOffsetX"; "nzOffsetY": "nzOffsetY"; "nzVisible": "nzVisible"; "nzContent": "nzContent"; "nzMaskClosable": "nzMaskClosable"; "nzMask": "nzMask"; "nzTitle": "nzTitle"; "nzWrapClassName": "nzWrapClassName"; }, { "nzOnViewInit": "nzOnViewInit"; "nzOnClose": "nzOnClose"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1kcmF3ZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDZGtQb3J0YWxPdXRsZXQsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpEcmF3ZXJPcHRpb25zT2ZDb21wb25lbnQsIE56RHJhd2VyUGxhY2VtZW50IH0gZnJvbSAnLi9uei1kcmF3ZXItb3B0aW9ucyc7XHJcbmltcG9ydCB7IE56RHJhd2VyUmVmIH0gZnJvbSAnLi9uei1kcmF3ZXItcmVmJztcclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgRFJBV0VSX0FOSU1BVEVfRFVSQVRJT04gPSAzMDA7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56RHJhd2VyQ29tcG9uZW50PFQgPSBhbnksIFIgPSBhbnksIEQgPSBhbnk+IGV4dGVuZHMgTnpEcmF3ZXJSZWY8Uj4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBOekRyYXdlck9wdGlvbnNPZkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGRvY3VtZW50O1xyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5O1xyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjtcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY7XHJcbiAgICBwcml2YXRlIGZvY3VzVHJhcEZhY3Rvcnk7XHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY7XHJcbiAgICBwcml2YXRlIG92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXI7XHJcbiAgICBuekNvbnRlbnQ6IFRlbXBsYXRlUmVmPHtcclxuICAgICAgICAkaW1wbGljaXQ6IEQ7XHJcbiAgICAgICAgZHJhd2VyUmVmOiBOekRyYXdlclJlZjxSPjtcclxuICAgIH0+IHwgVHlwZTxUPjtcclxuICAgIG56Q2xvc2FibGU6IGJvb2xlYW47XHJcbiAgICBuek1hc2tDbG9zYWJsZTogYm9vbGVhbjtcclxuICAgIG56TWFzazogYm9vbGVhbjtcclxuICAgIG56Tm9BbmltYXRpb246IGJvb2xlYW47XHJcbiAgICBuektleWJvYXJkOiBib29sZWFuO1xyXG4gICAgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xyXG4gICAgbnpQbGFjZW1lbnQ6IE56RHJhd2VyUGxhY2VtZW50O1xyXG4gICAgbnpNYXNrU3R5bGU6IG9iamVjdDtcclxuICAgIG56Qm9keVN0eWxlOiBvYmplY3Q7XHJcbiAgICBueldyYXBDbGFzc05hbWU6IHN0cmluZztcclxuICAgIG56V2lkdGg6IG51bWJlciB8IHN0cmluZztcclxuICAgIG56SGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICBuelpJbmRleDogbnVtYmVyO1xyXG4gICAgbnpPZmZzZXRYOiBudW1iZXI7XHJcbiAgICBuek9mZnNldFk6IG51bWJlcjtcclxuICAgIG56VmlzaWJsZTogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IG56T25WaWV3SW5pdDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgcmVhZG9ubHkgbnpPbkNsb3NlOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XHJcbiAgICBkcmF3ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBib2R5UG9ydGFsT3V0bGV0OiBDZGtQb3J0YWxPdXRsZXQ7XHJcbiAgICBkZXN0cm95JDogU3ViamVjdDx2b2lkPjtcclxuICAgIHByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBuekNvbnRlbnRQYXJhbXM6IEQ7XHJcbiAgICBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcclxuICAgIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw7XHJcbiAgICBmb2N1c1RyYXA6IEZvY3VzVHJhcDtcclxuICAgIGlzT3BlbjogYm9vbGVhbjtcclxuICAgIHRlbXBsYXRlQ29udGV4dDoge1xyXG4gICAgICAgICRpbXBsaWNpdDogRCB8IHVuZGVmaW5lZDtcclxuICAgICAgICBkcmF3ZXJSZWY6IE56RHJhd2VyUmVmPFI+O1xyXG4gICAgfTtcclxuICAgIHJlYWRvbmx5IG9mZnNldFRyYW5zZm9ybTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IHRyYW5zZm9ybTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IHdpZHRoOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgaGVpZ2h0OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgaXNMZWZ0T3JSaWdodDogYm9vbGVhbjtcclxuICAgIG56QWZ0ZXJPcGVuOiBTdWJqZWN0PHZvaWQ+O1xyXG4gICAgbnpBZnRlckNsb3NlOiBTdWJqZWN0PFI+O1xyXG4gICAgcmVhZG9ubHkgYWZ0ZXJPcGVuOiBPYnNlcnZhYmxlPHZvaWQ+O1xyXG4gICAgcmVhZG9ubHkgYWZ0ZXJDbG9zZTogT2JzZXJ2YWJsZTxSPjtcclxuICAgIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50OiBhbnksIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBvdmVybGF5OiBPdmVybGF5LCBpbmplY3RvcjogSW5qZWN0b3IsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgb3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcjogT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcik7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGdldEFuaW1hdGlvbkR1cmF0aW9uO1xyXG4gICAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQ7XHJcbiAgICBvcGVuKCk6IHZvaWQ7XHJcbiAgICBjbG9zZUNsaWNrKCk6IHZvaWQ7XHJcbiAgICBtYXNrQ2xpY2soKTogdm9pZDtcclxuICAgIHByaXZhdGUgYXR0YWNoQm9keUNvbnRlbnQ7XHJcbiAgICBwcml2YXRlIGF0dGFjaE92ZXJsYXk7XHJcbiAgICBwcml2YXRlIGRpc3Bvc2VPdmVybGF5O1xyXG4gICAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVPdmVybGF5U3R5bGU7XHJcbiAgICBwcml2YXRlIHVwZGF0ZUJvZHlPdmVyZmxvdztcclxuICAgIHNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTogdm9pZDtcclxuICAgIHByaXZhdGUgdHJhcEZvY3VzO1xyXG4gICAgcHJpdmF0ZSByZXN0b3JlRm9jdXM7XHJcbn1cclxuIl19