/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayKeyboardDispatcher, OverlayRef } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzConfigService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzModalConfig } from './nz-modal-config';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalFooterDirective } from './nz-modal-footer.directive';
import { NzModalRef } from './nz-modal-ref.class';
import { ModalButtonOptions, ModalOptions, ModalType, OnClickCallback } from './nz-modal.type';
import * as ɵngcc0 from '@angular/core';
export declare const MODAL_ANIMATE_DURATION = 200;
export declare const WRAP_CLASS_NAME = "ant-modal-wrap";
export declare class NzModalComponent<T = any, R = any> extends NzModalRef<T, R> implements OnInit, OnChanges, AfterViewInit, OnDestroy, ModalOptions<T> {
    nzConfigService: NzConfigService;
    private overlay;
    private overlayKeyboardDispatcher;
    private i18n;
    private cfr;
    private elementRef;
    private viewContainer;
    private modalControl;
    private focusTrapFactory;
    private cdr;
    private nzModalGlobalConfig;
    private document;
    nzVisible: boolean;
    nzClosable: boolean;
    nzOkLoading: boolean;
    nzOkDisabled: boolean;
    nzCancelDisabled: boolean;
    nzCancelLoading: boolean;
    nzKeyboard: boolean;
    nzNoAnimation: boolean;
    nzMask: boolean;
    nzMaskClosable: boolean;
    nzContent: string | TemplateRef<{}> | Type<T>;
    nzComponentParams: T;
    nzFooter: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null;
    nzGetContainer: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    nzZIndex: number;
    nzWidth: number | string;
    nzWrapClassName: string;
    nzClassName: string;
    nzStyle: object;
    nzTitle: string | TemplateRef<{}>;
    nzCloseIcon: string | TemplateRef<void>;
    nzMaskStyle: object;
    nzBodyStyle: object;
    nzOkText: string | null;
    nzCancelText: string | null;
    nzOkType: string;
    nzIconType: string;
    nzModalType: ModalType;
    nzCloseAriaLabel: string;
    readonly nzOnOk: EventEmitter<T> | OnClickCallback<T>;
    readonly nzOnCancel: EventEmitter<T> | OnClickCallback<T>;
    readonly nzAfterOpen: EventEmitter<void>;
    readonly nzAfterClose: EventEmitter<R>;
    readonly nzVisibleChange: EventEmitter<boolean>;
    modalContainer: ElementRef;
    bodyContainer: ViewContainerRef;
    autoFocusButtonOk: ElementRef;
    focusableHeader: ElementRef;
    modalFooter: NzModalFooterDirective;
    readonly afterOpen: Observable<void>;
    readonly afterClose: Observable<R>;
    readonly cancelText: string;
    readonly okText: string;
    readonly hidden: boolean;
    /**
     * @description
     * The calculated highest weight of mask value
     *
     * Weight of different mask input:
     * component default value < global configuration < component input value
     */
    readonly mask: boolean;
    /**
     * @description
     * The calculated highest weight of maskClosable value
     *
     * Weight of different maskClosable input:
     * component default value < global configuration < component input value
     */
    readonly maskClosable: boolean;
    locale: {
        okText?: string;
        cancelText?: string;
    };
    maskAnimationClassMap: object | null;
    modalAnimationClassMap: object | null;
    transformOrigin: string;
    private contentComponentRef;
    private animationState;
    private container;
    private unsubscribe$;
    private previouslyFocusedElement;
    private focusTrap;
    private scrollStrategy;
    private overlayRef;
    private dialogMouseDown;
    private timeoutId;
    [key: string]: any;
    constructor(nzConfigService: NzConfigService, overlay: Overlay, overlayKeyboardDispatcher: OverlayKeyboardDispatcher, i18n: NzI18nService, cfr: ComponentFactoryResolver, elementRef: ElementRef, viewContainer: ViewContainerRef, modalControl: NzModalControlService, focusTrapFactory: FocusTrapFactory, cdr: ChangeDetectorRef, nzModalGlobalConfig: NzModalConfig, document: any);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setFooterWithTemplate(templateRef: TemplateRef<{}>): void;
    setOverlayRef(overlayRef: OverlayRef): void;
    keydownListener(event: KeyboardEvent): void;
    open(): void;
    close(result?: R): void;
    destroy(result?: R): void;
    triggerOk(): void;
    triggerCancel(): void;
    getInstance(): NzModalComponent;
    getContentComponentRef(): ComponentRef<T>;
    getContentComponent(): T;
    getElement(): HTMLElement;
    onMaskDialogDown(): void;
    onDialogUp(): void;
    onClickMask($event: MouseEvent): void;
    isModalType(type: ModalType): boolean;
    onClickCloseBtn(): void;
    onClickOkCancel(type: 'ok' | 'cancel'): void;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    isComponent(value: {}): boolean;
    isModalButtons(value: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null): boolean;
    private handleVisibleStateChange;
    getButtonCallableProp(options: ModalButtonOptions<T>, prop: string): {};
    onButtonClick(button: ModalButtonOptions<T>): void;
    private changeVisibleFromInside;
    private changeAnimationState;
    private animateTo;
    private formatModalButtons;
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    private createDynamicComponent;
    private updateTransformOrigin;
    private savePreviouslyFocusedElement;
    private trapFocus;
    private restoreFocus;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzModalComponent<any, any>, [null, null, null, null, null, null, null, null, null, null, { optional: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzModalComponent<any, any>, "nz-modal", ["nzModal"], { "nzVisible": "nzVisible"; "nzClosable": "nzClosable"; "nzOkLoading": "nzOkLoading"; "nzOkDisabled": "nzOkDisabled"; "nzCancelDisabled": "nzCancelDisabled"; "nzCancelLoading": "nzCancelLoading"; "nzKeyboard": "nzKeyboard"; "nzNoAnimation": "nzNoAnimation"; "nzGetContainer": "nzGetContainer"; "nzZIndex": "nzZIndex"; "nzWidth": "nzWidth"; "nzCloseIcon": "nzCloseIcon"; "nzOkType": "nzOkType"; "nzIconType": "nzIconType"; "nzModalType": "nzModalType"; "nzCloseAriaLabel": "nzCloseAriaLabel"; "nzOnOk": "nzOnOk"; "nzOnCancel": "nzOnCancel"; "nzFooter": "nzFooter"; "nzMask": "nzMask"; "nzMaskClosable": "nzMaskClosable"; "nzContent": "nzContent"; "nzComponentParams": "nzComponentParams"; "nzWrapClassName": "nzWrapClassName"; "nzClassName": "nzClassName"; "nzStyle": "nzStyle"; "nzTitle": "nzTitle"; "nzMaskStyle": "nzMaskStyle"; "nzBodyStyle": "nzBodyStyle"; "nzOkText": "nzOkText"; "nzCancelText": "nzCancelText"; }, { "nzOnOk": "nzOnOk"; "nzOnCancel": "nzOnCancel"; "nzAfterOpen": "nzAfterOpen"; "nzAfterClose": "nzAfterClose"; "nzVisibleChange": "nzVisibleChange"; }, ["modalFooter"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LW1vZGFsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3SUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgRm9jdXNUcmFwRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE56TW9kYWxDb25maWcgfSBmcm9tICcuL256LW1vZGFsLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56TW9kYWxDb250cm9sU2VydmljZSB9IGZyb20gJy4vbnotbW9kYWwtY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpNb2RhbEZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotbW9kYWwtZm9vdGVyLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56TW9kYWxSZWYgfSBmcm9tICcuL256LW1vZGFsLXJlZi5jbGFzcyc7XHJcbmltcG9ydCB7IE1vZGFsQnV0dG9uT3B0aW9ucywgTW9kYWxPcHRpb25zLCBNb2RhbFR5cGUsIE9uQ2xpY2tDYWxsYmFjayB9IGZyb20gJy4vbnotbW9kYWwudHlwZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IE1PREFMX0FOSU1BVEVfRFVSQVRJT04gPSAyMDA7XHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IFdSQVBfQ0xBU1NfTkFNRSA9IFwiYW50LW1vZGFsLXdyYXBcIjtcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpNb2RhbENvbXBvbmVudDxUID0gYW55LCBSID0gYW55PiBleHRlbmRzIE56TW9kYWxSZWY8VCwgUj4gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBNb2RhbE9wdGlvbnM8VD4ge1xyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIG92ZXJsYXk7XHJcbiAgICBwcml2YXRlIG92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXI7XHJcbiAgICBwcml2YXRlIGkxOG47XHJcbiAgICBwcml2YXRlIGNmcjtcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjtcclxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sO1xyXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5O1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIG56TW9kYWxHbG9iYWxDb25maWc7XHJcbiAgICBwcml2YXRlIGRvY3VtZW50O1xyXG4gICAgbnpWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgbnpDbG9zYWJsZTogYm9vbGVhbjtcclxuICAgIG56T2tMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgbnpPa0Rpc2FibGVkOiBib29sZWFuO1xyXG4gICAgbnpDYW5jZWxEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG56Q2FuY2VsTG9hZGluZzogYm9vbGVhbjtcclxuICAgIG56S2V5Ym9hcmQ6IGJvb2xlYW47XHJcbiAgICBuek5vQW5pbWF0aW9uOiBib29sZWFuO1xyXG4gICAgbnpNYXNrOiBib29sZWFuO1xyXG4gICAgbnpNYXNrQ2xvc2FibGU6IGJvb2xlYW47XHJcbiAgICBuekNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IFR5cGU8VD47XHJcbiAgICBuekNvbXBvbmVudFBhcmFtczogVDtcclxuICAgIG56Rm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHwgbnVsbDtcclxuICAgIG56R2V0Q29udGFpbmVyOiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYgfCAoKCkgPT4gSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmKTtcclxuICAgIG56WkluZGV4OiBudW1iZXI7XHJcbiAgICBueldpZHRoOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICBueldyYXBDbGFzc05hbWU6IHN0cmluZztcclxuICAgIG56Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBuelN0eWxlOiBvYmplY3Q7XHJcbiAgICBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgICBuekNsb3NlSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuek1hc2tTdHlsZTogb2JqZWN0O1xyXG4gICAgbnpCb2R5U3R5bGU6IG9iamVjdDtcclxuICAgIG56T2tUZXh0OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgbnpDYW5jZWxUZXh0OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgbnpPa1R5cGU6IHN0cmluZztcclxuICAgIG56SWNvblR5cGU6IHN0cmluZztcclxuICAgIG56TW9kYWxUeXBlOiBNb2RhbFR5cGU7XHJcbiAgICBuekNsb3NlQXJpYUxhYmVsOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBuek9uT2s6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPjtcclxuICAgIHJlYWRvbmx5IG56T25DYW5jZWw6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPjtcclxuICAgIHJlYWRvbmx5IG56QWZ0ZXJPcGVuOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBuekFmdGVyQ2xvc2U6IEV2ZW50RW1pdHRlcjxSPjtcclxuICAgIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgbW9kYWxDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBib2R5Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gICAgYXV0b0ZvY3VzQnV0dG9uT2s6IEVsZW1lbnRSZWY7XHJcbiAgICBmb2N1c2FibGVIZWFkZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBtb2RhbEZvb3RlcjogTnpNb2RhbEZvb3RlckRpcmVjdGl2ZTtcclxuICAgIHJlYWRvbmx5IGFmdGVyT3BlbjogT2JzZXJ2YWJsZTx2b2lkPjtcclxuICAgIHJlYWRvbmx5IGFmdGVyQ2xvc2U6IE9ic2VydmFibGU8Uj47XHJcbiAgICByZWFkb25seSBjYW5jZWxUZXh0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBva1RleHQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IGhpZGRlbjogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uXHJcbiAgICAgKiBUaGUgY2FsY3VsYXRlZCBoaWdoZXN0IHdlaWdodCBvZiBtYXNrIHZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogV2VpZ2h0IG9mIGRpZmZlcmVudCBtYXNrIGlucHV0OlxyXG4gICAgICogY29tcG9uZW50IGRlZmF1bHQgdmFsdWUgPCBnbG9iYWwgY29uZmlndXJhdGlvbiA8IGNvbXBvbmVudCBpbnB1dCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBtYXNrOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb25cclxuICAgICAqIFRoZSBjYWxjdWxhdGVkIGhpZ2hlc3Qgd2VpZ2h0IG9mIG1hc2tDbG9zYWJsZSB2YWx1ZVxyXG4gICAgICpcclxuICAgICAqIFdlaWdodCBvZiBkaWZmZXJlbnQgbWFza0Nsb3NhYmxlIGlucHV0OlxyXG4gICAgICogY29tcG9uZW50IGRlZmF1bHQgdmFsdWUgPCBnbG9iYWwgY29uZmlndXJhdGlvbiA8IGNvbXBvbmVudCBpbnB1dCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBtYXNrQ2xvc2FibGU6IGJvb2xlYW47XHJcbiAgICBsb2NhbGU6IHtcclxuICAgICAgICBva1RleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgY2FuY2VsVGV4dD86IHN0cmluZztcclxuICAgIH07XHJcbiAgICBtYXNrQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgICBtb2RhbEFuaW1hdGlvbkNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xyXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNvbnRlbnRDb21wb25lbnRSZWY7XHJcbiAgICBwcml2YXRlIGFuaW1hdGlvblN0YXRlO1xyXG4gICAgcHJpdmF0ZSBjb250YWluZXI7XHJcbiAgICBwcml2YXRlIHVuc3Vic2NyaWJlJDtcclxuICAgIHByaXZhdGUgcHJldmlvdXNseUZvY3VzZWRFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXA7XHJcbiAgICBwcml2YXRlIHNjcm9sbFN0cmF0ZWd5O1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5UmVmO1xyXG4gICAgcHJpdmF0ZSBkaWFsb2dNb3VzZURvd247XHJcbiAgICBwcml2YXRlIHRpbWVvdXRJZDtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCBvdmVybGF5OiBPdmVybGF5LCBvdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyOiBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLCBpMThuOiBOekkxOG5TZXJ2aWNlLCBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgbW9kYWxDb250cm9sOiBOek1vZGFsQ29udHJvbFNlcnZpY2UsIGZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG56TW9kYWxHbG9iYWxDb25maWc6IE56TW9kYWxDb25maWcsIGRvY3VtZW50OiBhbnkpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgc2V0Rm9vdGVyV2l0aFRlbXBsYXRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx7fT4pOiB2b2lkO1xyXG4gICAgc2V0T3ZlcmxheVJlZihvdmVybGF5UmVmOiBPdmVybGF5UmVmKTogdm9pZDtcclxuICAgIGtleWRvd25MaXN0ZW5lcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XHJcbiAgICBvcGVuKCk6IHZvaWQ7XHJcbiAgICBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZDtcclxuICAgIGRlc3Ryb3kocmVzdWx0PzogUik6IHZvaWQ7XHJcbiAgICB0cmlnZ2VyT2soKTogdm9pZDtcclxuICAgIHRyaWdnZXJDYW5jZWwoKTogdm9pZDtcclxuICAgIGdldEluc3RhbmNlKCk6IE56TW9kYWxDb21wb25lbnQ7XHJcbiAgICBnZXRDb250ZW50Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjxUPjtcclxuICAgIGdldENvbnRlbnRDb21wb25lbnQoKTogVDtcclxuICAgIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XHJcbiAgICBvbk1hc2tEaWFsb2dEb3duKCk6IHZvaWQ7XHJcbiAgICBvbkRpYWxvZ1VwKCk6IHZvaWQ7XHJcbiAgICBvbkNsaWNrTWFzaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xyXG4gICAgaXNNb2RhbFR5cGUodHlwZTogTW9kYWxUeXBlKTogYm9vbGVhbjtcclxuICAgIG9uQ2xpY2tDbG9zZUJ0bigpOiB2b2lkO1xyXG4gICAgb25DbGlja09rQ2FuY2VsKHR5cGU6ICdvaycgfCAnY2FuY2VsJyk6IHZvaWQ7XHJcbiAgICBpc05vbkVtcHR5U3RyaW5nKHZhbHVlOiB7fSk6IGJvb2xlYW47XHJcbiAgICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW47XHJcbiAgICBpc0NvbXBvbmVudCh2YWx1ZToge30pOiBib29sZWFuO1xyXG4gICAgaXNNb2RhbEJ1dHRvbnModmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4gfCBudWxsKTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlO1xyXG4gICAgZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKG9wdGlvbnM6IE1vZGFsQnV0dG9uT3B0aW9uczxUPiwgcHJvcDogc3RyaW5nKToge307XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGJ1dHRvbjogTW9kYWxCdXR0b25PcHRpb25zPFQ+KTogdm9pZDtcclxuICAgIHByaXZhdGUgY2hhbmdlVmlzaWJsZUZyb21JbnNpZGU7XHJcbiAgICBwcml2YXRlIGNoYW5nZUFuaW1hdGlvblN0YXRlO1xyXG4gICAgcHJpdmF0ZSBhbmltYXRlVG87XHJcbiAgICBwcml2YXRlIGZvcm1hdE1vZGFsQnV0dG9ucztcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgY29tcG9uZW50IGR5bmFtaWNhbGx5IGJ1dCBub3QgYXR0YWNoIHRvIGFueSBWaWV3ICh0aGlzIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gYm9keUNvbnRhaW5lciBpcyByZWFkeSlcclxuICAgICAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IGNsYXNzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlRHluYW1pY0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgdXBkYXRlVHJhbnNmb3JtT3JpZ2luO1xyXG4gICAgcHJpdmF0ZSBzYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0cmFwRm9jdXM7XHJcbiAgICBwcml2YXRlIHJlc3RvcmVGb2N1cztcclxufVxyXG4iXX0=