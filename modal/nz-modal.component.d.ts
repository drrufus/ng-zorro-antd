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
import * as i0 from "@angular/core";
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
    nzAriaLabel: string;
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
    static ɵfac: i0.ɵɵFactoryDef<NzModalComponent<any, any>>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzModalComponent<any, any>, "nz-modal", ["nzModal"], { 'nzVisible': "nzVisible", 'nzClosable': "nzClosable", 'nzOkLoading': "nzOkLoading", 'nzOkDisabled': "nzOkDisabled", 'nzCancelDisabled': "nzCancelDisabled", 'nzCancelLoading': "nzCancelLoading", 'nzKeyboard': "nzKeyboard", 'nzNoAnimation': "nzNoAnimation", 'nzMask': "nzMask", 'nzMaskClosable': "nzMaskClosable", 'nzContent': "nzContent", 'nzComponentParams': "nzComponentParams", 'nzFooter': "nzFooter", 'nzGetContainer': "nzGetContainer", 'nzZIndex': "nzZIndex", 'nzWidth': "nzWidth", 'nzWrapClassName': "nzWrapClassName", 'nzClassName': "nzClassName", 'nzStyle': "nzStyle", 'nzTitle': "nzTitle", 'nzCloseIcon': "nzCloseIcon", 'nzMaskStyle': "nzMaskStyle", 'nzBodyStyle': "nzBodyStyle", 'nzOkText': "nzOkText", 'nzCancelText': "nzCancelText", 'nzOkType': "nzOkType", 'nzIconType': "nzIconType", 'nzModalType': "nzModalType", 'nzAriaLabel': "nzAriaLabel", 'nzOnOk': "nzOnOk", 'nzOnCancel': "nzOnCancel" }, { 'nzOnOk': "nzOnOk", 'nzOnCancel': "nzOnCancel", 'nzAfterOpen': "nzAfterOpen", 'nzAfterClose': "nzAfterClose", 'nzVisibleChange': "nzVisibleChange" }, ["modalFooter"]>;
}
