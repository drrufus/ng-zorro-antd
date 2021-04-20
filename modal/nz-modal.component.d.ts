/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LW1vZGFsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1SUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEZvY3VzVHJhcEZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVHlwZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBOek1vZGFsQ29uZmlnIH0gZnJvbSAnLi9uei1tb2RhbC1jb25maWcnO1xyXG5pbXBvcnQgeyBOek1vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL256LW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IE56TW9kYWxGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LW1vZGFsLWZvb3Rlci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9uei1tb2RhbC1yZWYuY2xhc3MnO1xyXG5pbXBvcnQgeyBNb2RhbEJ1dHRvbk9wdGlvbnMsIE1vZGFsT3B0aW9ucywgTW9kYWxUeXBlLCBPbkNsaWNrQ2FsbGJhY2sgfSBmcm9tICcuL256LW1vZGFsLnR5cGUnO1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBNT0RBTF9BTklNQVRFX0RVUkFUSU9OID0gMjAwO1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBXUkFQX0NMQVNTX05BTUUgPSBcImFudC1tb2RhbC13cmFwXCI7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56TW9kYWxDb21wb25lbnQ8VCA9IGFueSwgUiA9IGFueT4gZXh0ZW5kcyBOek1vZGFsUmVmPFQsIFI+IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgTW9kYWxPcHRpb25zPFQ+IHtcclxuICAgIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5O1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyO1xyXG4gICAgcHJpdmF0ZSBpMThuO1xyXG4gICAgcHJpdmF0ZSBjZnI7XHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI7XHJcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbDtcclxuICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgcHJpdmF0ZSBuek1vZGFsR2xvYmFsQ29uZmlnO1xyXG4gICAgcHJpdmF0ZSBkb2N1bWVudDtcclxuICAgIG56VmlzaWJsZTogYm9vbGVhbjtcclxuICAgIG56Q2xvc2FibGU6IGJvb2xlYW47XHJcbiAgICBuek9rTG9hZGluZzogYm9vbGVhbjtcclxuICAgIG56T2tEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG56Q2FuY2VsRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBuekNhbmNlbExvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBuektleWJvYXJkOiBib29sZWFuO1xyXG4gICAgbnpOb0FuaW1hdGlvbjogYm9vbGVhbjtcclxuICAgIG56TWFzazogYm9vbGVhbjtcclxuICAgIG56TWFza0Nsb3NhYmxlOiBib29sZWFuO1xyXG4gICAgbnpDb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBUeXBlPFQ+O1xyXG4gICAgbnpDb21wb25lbnRQYXJhbXM6IFQ7XHJcbiAgICBuekZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB8IG51bGw7XHJcbiAgICBuekdldENvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmIHwgKCgpID0+IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZik7XHJcbiAgICBuelpJbmRleDogbnVtYmVyO1xyXG4gICAgbnpXaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgbnpXcmFwQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBuekNsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgbnpTdHlsZTogb2JqZWN0O1xyXG4gICAgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xyXG4gICAgbnpDbG9zZUljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpNYXNrU3R5bGU6IG9iamVjdDtcclxuICAgIG56Qm9keVN0eWxlOiBvYmplY3Q7XHJcbiAgICBuek9rVGV4dDogc3RyaW5nIHwgbnVsbDtcclxuICAgIG56Q2FuY2VsVGV4dDogc3RyaW5nIHwgbnVsbDtcclxuICAgIG56T2tUeXBlOiBzdHJpbmc7XHJcbiAgICBuekljb25UeXBlOiBzdHJpbmc7XHJcbiAgICBuek1vZGFsVHlwZTogTW9kYWxUeXBlO1xyXG4gICAgbnpDbG9zZUFyaWFMYWJlbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgbnpPbk9rOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD47XHJcbiAgICByZWFkb25seSBuek9uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD47XHJcbiAgICByZWFkb25seSBuekFmdGVyT3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgcmVhZG9ubHkgbnpBZnRlckNsb3NlOiBFdmVudEVtaXR0ZXI8Uj47XHJcbiAgICByZWFkb25seSBuelZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIG1vZGFsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgYm9keUNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICAgIGF1dG9Gb2N1c0J1dHRvbk9rOiBFbGVtZW50UmVmO1xyXG4gICAgbW9kYWxGb290ZXI6IE56TW9kYWxGb290ZXJEaXJlY3RpdmU7XHJcbiAgICByZWFkb25seSBhZnRlck9wZW46IE9ic2VydmFibGU8dm9pZD47XHJcbiAgICByZWFkb25seSBhZnRlckNsb3NlOiBPYnNlcnZhYmxlPFI+O1xyXG4gICAgcmVhZG9ubHkgY2FuY2VsVGV4dDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgb2tUZXh0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBoaWRkZW46IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvblxyXG4gICAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFzayB2YWx1ZVxyXG4gICAgICpcclxuICAgICAqIFdlaWdodCBvZiBkaWZmZXJlbnQgbWFzayBpbnB1dDpcclxuICAgICAqIGNvbXBvbmVudCBkZWZhdWx0IHZhbHVlIDwgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gPCBjb21wb25lbnQgaW5wdXQgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbWFzazogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uXHJcbiAgICAgKiBUaGUgY2FsY3VsYXRlZCBoaWdoZXN0IHdlaWdodCBvZiBtYXNrQ2xvc2FibGUgdmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBXZWlnaHQgb2YgZGlmZmVyZW50IG1hc2tDbG9zYWJsZSBpbnB1dDpcclxuICAgICAqIGNvbXBvbmVudCBkZWZhdWx0IHZhbHVlIDwgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gPCBjb21wb25lbnQgaW5wdXQgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbWFza0Nsb3NhYmxlOiBib29sZWFuO1xyXG4gICAgbG9jYWxlOiB7XHJcbiAgICAgICAgb2tUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIGNhbmNlbFRleHQ/OiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgbWFza0FuaW1hdGlvbkNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xyXG4gICAgbW9kYWxBbmltYXRpb25DbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcclxuICAgIHRyYW5zZm9ybU9yaWdpbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjb250ZW50Q29tcG9uZW50UmVmO1xyXG4gICAgcHJpdmF0ZSBhbmltYXRpb25TdGF0ZTtcclxuICAgIHByaXZhdGUgY29udGFpbmVyO1xyXG4gICAgcHJpdmF0ZSB1bnN1YnNjcmliZSQ7XHJcbiAgICBwcml2YXRlIHByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDtcclxuICAgIHByaXZhdGUgZm9jdXNUcmFwO1xyXG4gICAgcHJpdmF0ZSBzY3JvbGxTdHJhdGVneTtcclxuICAgIHByaXZhdGUgb3ZlcmxheVJlZjtcclxuICAgIHByaXZhdGUgZGlhbG9nTW91c2VEb3duO1xyXG4gICAgcHJpdmF0ZSB0aW1lb3V0SWQ7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgb3ZlcmxheTogT3ZlcmxheSwgb3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcjogT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgaTE4bjogTnpJMThuU2VydmljZSwgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIG1vZGFsQ29udHJvbDogTnpNb2RhbENvbnRyb2xTZXJ2aWNlLCBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBuek1vZGFsR2xvYmFsQ29uZmlnOiBOek1vZGFsQ29uZmlnLCBkb2N1bWVudDogYW55KTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIHNldEZvb3RlcldpdGhUZW1wbGF0ZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8e30+KTogdm9pZDtcclxuICAgIHNldE92ZXJsYXlSZWYob3ZlcmxheVJlZjogT3ZlcmxheVJlZik6IHZvaWQ7XHJcbiAgICBrZXlkb3duTGlzdGVuZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xyXG4gICAgb3BlbigpOiB2b2lkO1xyXG4gICAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQ7XHJcbiAgICBkZXN0cm95KHJlc3VsdD86IFIpOiB2b2lkO1xyXG4gICAgdHJpZ2dlck9rKCk6IHZvaWQ7XHJcbiAgICB0cmlnZ2VyQ2FuY2VsKCk6IHZvaWQ7XHJcbiAgICBnZXRJbnN0YW5jZSgpOiBOek1vZGFsQ29tcG9uZW50O1xyXG4gICAgZ2V0Q29udGVudENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8VD47XHJcbiAgICBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQ7XHJcbiAgICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xyXG4gICAgb25NYXNrRGlhbG9nRG93bigpOiB2b2lkO1xyXG4gICAgb25EaWFsb2dVcCgpOiB2b2lkO1xyXG4gICAgb25DbGlja01hc2soJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcclxuICAgIGlzTW9kYWxUeXBlKHR5cGU6IE1vZGFsVHlwZSk6IGJvb2xlYW47XHJcbiAgICBvbkNsaWNrQ2xvc2VCdG4oKTogdm9pZDtcclxuICAgIG9uQ2xpY2tPa0NhbmNlbCh0eXBlOiAnb2snIHwgJ2NhbmNlbCcpOiB2b2lkO1xyXG4gICAgaXNOb25FbXB0eVN0cmluZyh2YWx1ZToge30pOiBib29sZWFuO1xyXG4gICAgaXNUZW1wbGF0ZVJlZih2YWx1ZToge30pOiBib29sZWFuO1xyXG4gICAgaXNDb21wb25lbnQodmFsdWU6IHt9KTogYm9vbGVhbjtcclxuICAgIGlzTW9kYWxCdXR0b25zKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHwgbnVsbCk6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZTtcclxuICAgIGdldEJ1dHRvbkNhbGxhYmxlUHJvcChvcHRpb25zOiBNb2RhbEJ1dHRvbk9wdGlvbnM8VD4sIHByb3A6IHN0cmluZyk6IHt9O1xyXG4gICAgb25CdXR0b25DbGljayhidXR0b246IE1vZGFsQnV0dG9uT3B0aW9uczxUPik6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGNoYW5nZVZpc2libGVGcm9tSW5zaWRlO1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VBbmltYXRpb25TdGF0ZTtcclxuICAgIHByaXZhdGUgYW5pbWF0ZVRvO1xyXG4gICAgcHJpdmF0ZSBmb3JtYXRNb2RhbEJ1dHRvbnM7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIGNvbXBvbmVudCBkeW5hbWljYWxseSBidXQgbm90IGF0dGFjaCB0byBhbnkgVmlldyAodGhpcyBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIGJvZHlDb250YWluZXIgaXMgcmVhZHkpXHJcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBjbGFzc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZUR5bmFtaWNDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIHVwZGF0ZVRyYW5zZm9ybU9yaWdpbjtcclxuICAgIHByaXZhdGUgc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDtcclxuICAgIHByaXZhdGUgdHJhcEZvY3VzO1xyXG4gICAgcHJpdmF0ZSByZXN0b3JlRm9jdXM7XHJcbn1cclxuIl19