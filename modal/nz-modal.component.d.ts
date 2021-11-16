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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LW1vZGFsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVJQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgTnpNb2RhbENvbmZpZyB9IGZyb20gJy4vbnotbW9kYWwtY29uZmlnJztcclxuaW1wb3J0IHsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9uei1tb2RhbC1jb250cm9sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOek1vZGFsRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tb2RhbC1mb290ZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbnotbW9kYWwtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgTW9kYWxCdXR0b25PcHRpb25zLCBNb2RhbE9wdGlvbnMsIE1vZGFsVHlwZSwgT25DbGlja0NhbGxiYWNrIH0gZnJvbSAnLi9uei1tb2RhbC50eXBlJztcclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgTU9EQUxfQU5JTUFURV9EVVJBVElPTiA9IDIwMDtcclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgV1JBUF9DTEFTU19OQU1FID0gXCJhbnQtbW9kYWwtd3JhcFwiO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOek1vZGFsQ29tcG9uZW50PFQgPSBhbnksIFIgPSBhbnk+IGV4dGVuZHMgTnpNb2RhbFJlZjxULCBSPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE1vZGFsT3B0aW9uczxUPiB7XHJcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZTtcclxuICAgIHByaXZhdGUgb3ZlcmxheTtcclxuICAgIHByaXZhdGUgb3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcjtcclxuICAgIHByaXZhdGUgaTE4bjtcclxuICAgIHByaXZhdGUgY2ZyO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyO1xyXG4gICAgcHJpdmF0ZSBtb2RhbENvbnRyb2w7XHJcbiAgICBwcml2YXRlIGZvY3VzVHJhcEZhY3Rvcnk7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgbnpNb2RhbEdsb2JhbENvbmZpZztcclxuICAgIHByaXZhdGUgZG9jdW1lbnQ7XHJcbiAgICBuelZpc2libGU6IGJvb2xlYW47XHJcbiAgICBuekNsb3NhYmxlOiBib29sZWFuO1xyXG4gICAgbnpPa0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBuek9rRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBuekNhbmNlbERpc2FibGVkOiBib29sZWFuO1xyXG4gICAgbnpDYW5jZWxMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgbnpLZXlib2FyZDogYm9vbGVhbjtcclxuICAgIG56Tm9BbmltYXRpb246IGJvb2xlYW47XHJcbiAgICBuek1hc2s6IGJvb2xlYW47XHJcbiAgICBuek1hc2tDbG9zYWJsZTogYm9vbGVhbjtcclxuICAgIG56Q29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgVHlwZTxUPjtcclxuICAgIG56Q29tcG9uZW50UGFyYW1zOiBUO1xyXG4gICAgbnpGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4gfCBudWxsO1xyXG4gICAgbnpHZXRDb250YWluZXI6IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZiB8ICgoKSA9PiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYpO1xyXG4gICAgbnpaSW5kZXg6IG51bWJlcjtcclxuICAgIG56V2lkdGg6IG51bWJlciB8IHN0cmluZztcclxuICAgIG56V3JhcENsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgbnpDbGFzc05hbWU6IHN0cmluZztcclxuICAgIG56U3R5bGU6IG9iamVjdDtcclxuICAgIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PjtcclxuICAgIG56Q2xvc2VJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56TWFza1N0eWxlOiBvYmplY3Q7XHJcbiAgICBuekJvZHlTdHlsZTogb2JqZWN0O1xyXG4gICAgbnpPa1RleHQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICBuekNhbmNlbFRleHQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICBuek9rVHlwZTogc3RyaW5nO1xyXG4gICAgbnpJY29uVHlwZTogc3RyaW5nO1xyXG4gICAgbnpNb2RhbFR5cGU6IE1vZGFsVHlwZTtcclxuICAgIG56Q2xvc2VBcmlhTGFiZWw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IG56T25PazogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+O1xyXG4gICAgcmVhZG9ubHkgbnpPbkNhbmNlbDogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+O1xyXG4gICAgcmVhZG9ubHkgbnpBZnRlck9wZW46IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IG56QWZ0ZXJDbG9zZTogRXZlbnRFbWl0dGVyPFI+O1xyXG4gICAgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcbiAgICBtb2RhbENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICAgIGJvZHlDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgICBhdXRvRm9jdXNCdXR0b25PazogRWxlbWVudFJlZjtcclxuICAgIG1vZGFsRm9vdGVyOiBOek1vZGFsRm9vdGVyRGlyZWN0aXZlO1xyXG4gICAgcmVhZG9ubHkgYWZ0ZXJPcGVuOiBPYnNlcnZhYmxlPHZvaWQ+O1xyXG4gICAgcmVhZG9ubHkgYWZ0ZXJDbG9zZTogT2JzZXJ2YWJsZTxSPjtcclxuICAgIHJlYWRvbmx5IGNhbmNlbFRleHQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IG9rVGV4dDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgaGlkZGVuOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb25cclxuICAgICAqIFRoZSBjYWxjdWxhdGVkIGhpZ2hlc3Qgd2VpZ2h0IG9mIG1hc2sgdmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBXZWlnaHQgb2YgZGlmZmVyZW50IG1hc2sgaW5wdXQ6XHJcbiAgICAgKiBjb21wb25lbnQgZGVmYXVsdCB2YWx1ZSA8IGdsb2JhbCBjb25maWd1cmF0aW9uIDwgY29tcG9uZW50IGlucHV0IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG1hc2s6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvblxyXG4gICAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFza0Nsb3NhYmxlIHZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogV2VpZ2h0IG9mIGRpZmZlcmVudCBtYXNrQ2xvc2FibGUgaW5wdXQ6XHJcbiAgICAgKiBjb21wb25lbnQgZGVmYXVsdCB2YWx1ZSA8IGdsb2JhbCBjb25maWd1cmF0aW9uIDwgY29tcG9uZW50IGlucHV0IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG1hc2tDbG9zYWJsZTogYm9vbGVhbjtcclxuICAgIGxvY2FsZToge1xyXG4gICAgICAgIG9rVGV4dD86IHN0cmluZztcclxuICAgICAgICBjYW5jZWxUZXh0Pzogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIG1hc2tBbmltYXRpb25DbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcclxuICAgIG1vZGFsQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgICB0cmFuc2Zvcm1PcmlnaW46IHN0cmluZztcclxuICAgIHByaXZhdGUgY29udGVudENvbXBvbmVudFJlZjtcclxuICAgIHByaXZhdGUgYW5pbWF0aW9uU3RhdGU7XHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjtcclxuICAgIHByaXZhdGUgdW5zdWJzY3JpYmUkO1xyXG4gICAgcHJpdmF0ZSBwcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGZvY3VzVHJhcDtcclxuICAgIHByaXZhdGUgc2Nyb2xsU3RyYXRlZ3k7XHJcbiAgICBwcml2YXRlIG92ZXJsYXlSZWY7XHJcbiAgICBwcml2YXRlIGRpYWxvZ01vdXNlRG93bjtcclxuICAgIHByaXZhdGUgdGltZW91dElkO1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgY29uc3RydWN0b3IobnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIG92ZXJsYXk6IE92ZXJsYXksIG92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXI6IE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIsIGkxOG46IE56STE4blNlcnZpY2UsIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBtb2RhbENvbnRyb2w6IE56TW9kYWxDb250cm9sU2VydmljZSwgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgbnpNb2RhbEdsb2JhbENvbmZpZzogTnpNb2RhbENvbmZpZywgZG9jdW1lbnQ6IGFueSk7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbiAgICBzZXRGb290ZXJXaXRoVGVtcGxhdGUodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHt9Pik6IHZvaWQ7XHJcbiAgICBzZXRPdmVybGF5UmVmKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkO1xyXG4gICAga2V5ZG93bkxpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcclxuICAgIG9wZW4oKTogdm9pZDtcclxuICAgIGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkO1xyXG4gICAgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZDtcclxuICAgIHRyaWdnZXJPaygpOiB2b2lkO1xyXG4gICAgdHJpZ2dlckNhbmNlbCgpOiB2b2lkO1xyXG4gICAgZ2V0SW5zdGFuY2UoKTogTnpNb2RhbENvbXBvbmVudDtcclxuICAgIGdldENvbnRlbnRDb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPFQ+O1xyXG4gICAgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUO1xyXG4gICAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudDtcclxuICAgIG9uTWFza0RpYWxvZ0Rvd24oKTogdm9pZDtcclxuICAgIG9uRGlhbG9nVXAoKTogdm9pZDtcclxuICAgIG9uQ2xpY2tNYXNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XHJcbiAgICBpc01vZGFsVHlwZSh0eXBlOiBNb2RhbFR5cGUpOiBib29sZWFuO1xyXG4gICAgb25DbGlja0Nsb3NlQnRuKCk6IHZvaWQ7XHJcbiAgICBvbkNsaWNrT2tDYW5jZWwodHlwZTogJ29rJyB8ICdjYW5jZWwnKTogdm9pZDtcclxuICAgIGlzTm9uRW1wdHlTdHJpbmcodmFsdWU6IHt9KTogYm9vbGVhbjtcclxuICAgIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbjtcclxuICAgIGlzQ29tcG9uZW50KHZhbHVlOiB7fSk6IGJvb2xlYW47XHJcbiAgICBpc01vZGFsQnV0dG9ucyh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB8IG51bGwpOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2U7XHJcbiAgICBnZXRCdXR0b25DYWxsYWJsZVByb3Aob3B0aW9uczogTW9kYWxCdXR0b25PcHRpb25zPFQ+LCBwcm9wOiBzdHJpbmcpOiB7fTtcclxuICAgIG9uQnV0dG9uQ2xpY2soYnV0dG9uOiBNb2RhbEJ1dHRvbk9wdGlvbnM8VD4pOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VWaXNpYmxlRnJvbUluc2lkZTtcclxuICAgIHByaXZhdGUgY2hhbmdlQW5pbWF0aW9uU3RhdGU7XHJcbiAgICBwcml2YXRlIGFuaW1hdGVUbztcclxuICAgIHByaXZhdGUgZm9ybWF0TW9kYWxCdXR0b25zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBjb21wb25lbnQgZHluYW1pY2FsbHkgYnV0IG5vdCBhdHRhY2ggdG8gYW55IFZpZXcgKHRoaXMgYWN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiBib2R5Q29udGFpbmVyIGlzIHJlYWR5KVxyXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgY2xhc3NcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVEeW5hbWljQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVUcmFuc2Zvcm1PcmlnaW47XHJcbiAgICBwcml2YXRlIHNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHRyYXBGb2N1cztcclxuICAgIHByaXZhdGUgcmVzdG9yZUZvY3VzO1xyXG59XHJcbiJdfQ==