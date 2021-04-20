/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
import { ESCAPE } from '@angular/cdk/keycodes';
import { Overlay, OverlayKeyboardDispatcher, OverlayRef } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChild, ElementRef, EventEmitter, Inject, Injector, Input, Optional, Output, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getElementOffset, isPromise, warnDeprecation, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NZ_MODAL_CONFIG } from './nz-modal-config';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalFooterDirective } from './nz-modal-footer.directive';
import { NzModalRef } from './nz-modal-ref.class';
/** @type {?} */
export var MODAL_ANIMATE_DURATION = 200;
// Duration when perform animations (ms)
/** @type {?} */
export var WRAP_CLASS_NAME = 'ant-modal-wrap';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'modal';
/**
 * @template T, R
 */
var NzModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzModalComponent, _super);
    function NzModalComponent(nzConfigService, overlay, overlayKeyboardDispatcher, i18n, cfr, elementRef, viewContainer, modalControl, focusTrapFactory, cdr, nzModalGlobalConfig, document // tslint:disable-line:no-any
    ) {
        var _this = _super.call(this) || this;
        _this.nzConfigService = nzConfigService;
        _this.overlay = overlay;
        _this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
        _this.i18n = i18n;
        _this.cfr = cfr;
        _this.elementRef = elementRef;
        _this.viewContainer = viewContainer;
        _this.modalControl = modalControl;
        _this.focusTrapFactory = focusTrapFactory;
        _this.cdr = cdr;
        _this.nzModalGlobalConfig = nzModalGlobalConfig;
        _this.document = document;
        _this.nzVisible = false;
        _this.nzClosable = true;
        _this.nzOkLoading = false;
        _this.nzOkDisabled = false;
        _this.nzCancelDisabled = false;
        _this.nzCancelLoading = false;
        _this.nzKeyboard = true;
        _this.nzNoAnimation = false;
        // [STATIC] Default Modal ONLY
        _this.nzGetContainer = (/**
         * @return {?}
         */
        function () { return _this.overlay.create(); }); // [STATIC]
        // [STATIC]
        _this.nzZIndex = 1000;
        _this.nzWidth = 520;
        _this.nzCloseIcon = 'close';
        _this.nzOkType = 'primary';
        _this.nzIconType = 'question-circle'; // Confirm Modal ONLY
        // Confirm Modal ONLY
        _this.nzModalType = 'default';
        _this.nzCloseAriaLabel = 'Close';
        _this.nzOnOk = new EventEmitter();
        _this.nzOnCancel = new EventEmitter();
        _this.nzAfterOpen = new EventEmitter(); // Trigger when modal open(visible) after animations
        // Trigger when modal open(visible) after animations
        _this.nzAfterClose = new EventEmitter(); // Trigger when modal leave-animation over
        // Trigger when modal leave-animation over
        _this.nzVisibleChange = new EventEmitter();
        _this.locale = {};
        _this.transformOrigin = '0px 0px 0px'; // The origin point that animation based on
        _this.unsubscribe$ = new Subject();
        _this.dialogMouseDown = false;
        _this.scrollStrategy = _this.overlay.scrollStrategies.block();
        if (_this.nzModalGlobalConfig) {
            warnDeprecation('`NZ_MODAL_CONFIG` has been deprecated and will be removed in 9.0.0. Please use global config instead.');
        }
        return _this;
    }
    Object.defineProperty(NzModalComponent.prototype, "modalFooter", {
        set: 
        // Only aim to focus the ok button that needs to be auto focused
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.templateRef) {
                this.setFooterWithTemplate(value.templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "afterOpen", {
        get: /**
         * @return {?}
         */
        function () {
            // Observable alias for nzAfterOpen
            return this.nzAfterOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "afterClose", {
        get: /**
         * @return {?}
         */
        function () {
            // Observable alias for nzAfterClose
            return this.nzAfterClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "cancelText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzCancelText || (/** @type {?} */ (this.locale.cancelText));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "okText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzOkText || (/** @type {?} */ (this.locale.okText));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "hidden", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzVisible && !this.animationState;
        } // Indicate whether this dialog should hidden
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "mask", {
        /**
         * @description
         * The calculated highest weight of mask value
         *
         * Weight of different mask input:
         * component default value < global configuration < component input value
         */
        get: 
        // Indicate whether this dialog should hidden
        /**
         * \@description
         * The calculated highest weight of mask value
         *
         * Weight of different mask input:
         * component default value < global configuration < component input value
         * @return {?}
         */
        function () {
            if (this.nzMask != null) {
                return this.nzMask;
            }
            else if (this.nzModalGlobalConfig && this.nzModalGlobalConfig.nzMask != null) {
                return this.nzModalGlobalConfig.nzMask;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "maskClosable", {
        /**
         * @description
         * The calculated highest weight of maskClosable value
         *
         * Weight of different maskClosable input:
         * component default value < global configuration < component input value
         */
        get: /**
         * \@description
         * The calculated highest weight of maskClosable value
         *
         * Weight of different maskClosable input:
         * component default value < global configuration < component input value
         * @return {?}
         */
        function () {
            if (this.nzMaskClosable != null) {
                return this.nzMaskClosable;
            }
            else if (this.nzModalGlobalConfig && this.nzModalGlobalConfig.nzMaskClosable != null) {
                return this.nzModalGlobalConfig.nzMaskClosable;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Modal');
        }));
        if (this.isComponent(this.nzContent)) {
            this.createDynamicComponent((/** @type {?} */ (this.nzContent))); // Create component along without View
        }
        if (this.isModalButtons(this.nzFooter)) {
            // Setup default button options
            this.nzFooter = this.formatModalButtons((/** @type {?} */ (this.nzFooter)));
        }
        // Place the modal dom to elsewhere
        this.container = typeof this.nzGetContainer === 'function' ? this.nzGetContainer() : this.nzGetContainer;
        if (this.container instanceof HTMLElement) {
            this.container.appendChild(this.elementRef.nativeElement);
            fromEvent(this.document.body, 'keydown')
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this.keydownListener(e); }));
        }
        else if (this.container instanceof OverlayRef) {
            // NOTE: only attach the dom to overlay, the view container is not changed actually
            this.setOverlayRef(this.container);
            this.container.overlayElement.appendChild(this.elementRef.nativeElement);
        }
        if (this.overlayRef) {
            this.overlayRef
                .keydownEvents()
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this.keydownListener(e); }));
        }
        // Register modal when afterOpen/afterClose is stable
        this.modalControl.registerModal(this);
    };
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "nzContent"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "nzContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "nzContent"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "nzContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    /**
     * @param {?} changes
     * @return {?}
     */
    NzModalComponent.prototype.ngOnChanges = 
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "nzContent"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "nzContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzVisible) {
            this.handleVisibleStateChange(this.nzVisible, !changes.nzVisible.firstChange); // Do not trigger animation while initializing
        }
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            ((/** @type {?} */ (this.autoFocusButtonOk.nativeElement))).focus();
        }
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Close self before destructing
        this.changeVisibleFromInside(false).then((/**
         * @return {?}
         */
        function () {
            _this.modalControl.deregisterModal(_this);
            if (_this.container instanceof OverlayRef) {
                _this.container.dispose();
            }
            _this.unsubscribe$.next();
            _this.unsubscribe$.complete();
        }));
        clearTimeout(this.timeoutId);
    };
    /**
     * @param {?} templateRef
     * @return {?}
     */
    NzModalComponent.prototype.setFooterWithTemplate = /**
     * @param {?} templateRef
     * @return {?}
     */
    function (templateRef) {
        this.nzFooter = templateRef;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    NzModalComponent.prototype.setOverlayRef = /**
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        this.overlayRef = overlayRef;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzModalComponent.prototype.keydownListener = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === ESCAPE && this.nzKeyboard) {
            this.onClickOkCancel('cancel');
        }
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.changeVisibleFromInside(true);
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NzModalComponent.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        this.changeVisibleFromInside(false, result);
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NzModalComponent.prototype.destroy = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        // Destroy equals Close
        this.close(result);
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.triggerOk = /**
     * @return {?}
     */
    function () {
        this.onClickOkCancel('ok');
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.triggerCancel = /**
     * @return {?}
     */
    function () {
        this.onClickOkCancel('cancel');
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return this;
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.getContentComponentRef = /**
     * @return {?}
     */
    function () {
        return this.contentComponentRef;
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.getContentComponent = /**
     * @return {?}
     */
    function () {
        return this.contentComponentRef && this.contentComponentRef.instance;
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.getElement = /**
     * @return {?}
     */
    function () {
        return this.elementRef && this.elementRef.nativeElement;
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.onMaskDialogDown = /**
     * @return {?}
     */
    function () {
        this.dialogMouseDown = true;
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.onDialogUp = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dialogMouseDown) {
            this.timeoutId = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.dialogMouseDown = false;
            }), 0);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzModalComponent.prototype.onClickMask = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.mask &&
            this.maskClosable &&
            ((/** @type {?} */ ($event.target))).classList.contains(WRAP_CLASS_NAME) &&
            this.nzVisible &&
            !this.dialogMouseDown) {
            this.onClickOkCancel('cancel');
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NzModalComponent.prototype.isModalType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.nzModalType === type;
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.onClickCloseBtn = /**
     * @return {?}
     */
    function () {
        if (this.nzVisible) {
            this.onClickOkCancel('cancel');
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NzModalComponent.prototype.onClickOkCancel = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        /** @type {?} */
        var trigger = { ok: this.nzOnOk, cancel: this.nzOnCancel }[type];
        /** @type {?} */
        var loadingKey = { ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            /** @type {?} */
            var result = trigger(this.getContentComponent());
            /** @type {?} */
            var caseClose_1 = (/**
             * @param {?} doClose
             * @return {?}
             */
            function (doClose) { return doClose !== false && _this.close((/** @type {?} */ (doClose))); });
            if (isPromise(result)) {
                this[loadingKey] = true;
                /** @type {?} */
                var handleThen = (/**
                 * @param {?} doClose
                 * @return {?}
                 */
                function (doClose) {
                    _this[loadingKey] = false;
                    caseClose_1(doClose);
                });
                ((/** @type {?} */ (result))).then(handleThen).catch(handleThen);
            }
            else {
                caseClose_1(result);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzModalComponent.prototype.isNonEmptyString = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'string' && value !== '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzModalComponent.prototype.isTemplateRef = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof TemplateRef;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzModalComponent.prototype.isComponent = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof Type;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzModalComponent.prototype.isModalButtons = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Array.isArray(value) && value.length > 0;
    };
    // Do rest things when visible state changed
    // Do rest things when visible state changed
    /**
     * @private
     * @param {?} visible
     * @param {?=} animation
     * @param {?=} closeResult
     * @return {?}
     */
    NzModalComponent.prototype.handleVisibleStateChange = 
    // Do rest things when visible state changed
    /**
     * @private
     * @param {?} visible
     * @param {?=} animation
     * @param {?=} closeResult
     * @return {?}
     */
    function (visible, animation, closeResult) {
        var _this = this;
        if (animation === void 0) { animation = true; }
        if (visible) {
            // Hide scrollbar at the first time when shown up
            this.scrollStrategy.enable();
            this.savePreviouslyFocusedElement();
            this.trapFocus();
            if (this.container instanceof OverlayRef) {
                this.overlayKeyboardDispatcher.add(this.overlayRef);
            }
        }
        else {
            if (this.container instanceof OverlayRef) {
                this.overlayKeyboardDispatcher.remove(this.overlayRef);
            }
        }
        return Promise.resolve(animation ? this.animateTo(visible) : undefined).then((/**
         * @return {?}
         */
        function () {
            // Emit open/close event after animations over
            if (visible) {
                _this.nzAfterOpen.emit();
            }
            else {
                _this.nzAfterClose.emit(closeResult);
                _this.restoreFocus();
                _this.scrollStrategy.disable();
                // Mark the for check so it can react if the view container is using OnPush change detection.
                _this.cdr.markForCheck();
            }
        }));
    };
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    /**
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    NzModalComponent.prototype.getButtonCallableProp = 
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    /**
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    function (options, prop) {
        /** @type {?} */
        var value = options[prop];
        /** @type {?} */
        var args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    };
    // On nzFooter's modal button click
    // On nzFooter's modal button click
    /**
     * @param {?} button
     * @return {?}
     */
    NzModalComponent.prototype.onButtonClick = 
    // On nzFooter's modal button click
    /**
     * @param {?} button
     * @return {?}
     */
    function (button) {
        /** @type {?} */
        var result = this.getButtonCallableProp(button, 'onClick');
        if (isPromise(result)) {
            button.loading = true;
            ((/** @type {?} */ (result))).then((/**
             * @return {?}
             */
            function () { return (button.loading = false); })).catch((/**
             * @return {?}
             */
            function () { return (button.loading = false); }));
        }
    };
    // Change nzVisible from inside
    // Change nzVisible from inside
    /**
     * @private
     * @param {?} visible
     * @param {?=} closeResult
     * @return {?}
     */
    NzModalComponent.prototype.changeVisibleFromInside = 
    // Change nzVisible from inside
    /**
     * @private
     * @param {?} visible
     * @param {?=} closeResult
     * @return {?}
     */
    function (visible, closeResult) {
        if (this.nzVisible !== visible) {
            // Change nzVisible value immediately
            this.nzVisible = visible;
            this.nzVisibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    NzModalComponent.prototype.changeAnimationState = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        var _a, _b;
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = (_a = {},
                _a["fade-" + state] = true,
                _a["fade-" + state + "-active"] = true,
                _a);
            this.modalAnimationClassMap = (_b = {},
                _b["zoom-" + state] = true,
                _b["zoom-" + state + "-active"] = true,
                _b);
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
    };
    /**
     * @private
     * @param {?} isVisible
     * @return {?}
     */
    NzModalComponent.prototype.animateTo = /**
     * @private
     * @param {?} isVisible
     * @return {?}
     */
    function (isVisible) {
        var _this = this;
        if (isVisible) {
            // Figure out the lastest click position when shows up
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.updateTransformOrigin(); })); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            return setTimeout((/**
             * @return {?}
             */
            function () {
                // Return when animation is over
                _this.changeAnimationState(null);
                resolve();
            }), _this.nzNoAnimation ? 0 : MODAL_ANIMATE_DURATION);
        }));
    };
    /**
     * @private
     * @param {?} buttons
     * @return {?}
     */
    NzModalComponent.prototype.formatModalButtons = /**
     * @private
     * @param {?} buttons
     * @return {?}
     */
    function (buttons) {
        return buttons.map((/**
         * @param {?} button
         * @return {?}
         */
        function (button) {
            return tslib_1.__assign({
                type: 'default',
                size: 'default',
                autoLoading: true,
                show: true,
                loading: false,
                disabled: false
            }, button);
        }));
    };
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @private
     * @param {?} component Component class
     * @return {?}
     */
    NzModalComponent.prototype.createDynamicComponent = /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @private
     * @param {?} component Component class
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var factory = this.cfr.resolveComponentFactory(component);
        /** @type {?} */
        var childInjector = Injector.create({
            providers: [{ provide: NzModalRef, useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.nzComponentParams) {
            Object.assign(this.contentComponentRef.instance, this.nzComponentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    };
    // Update transform-origin to the last click position on document
    // Update transform-origin to the last click position on document
    /**
     * @private
     * @return {?}
     */
    NzModalComponent.prototype.updateTransformOrigin = 
    // Update transform-origin to the last click position on document
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modalElement = (/** @type {?} */ (this.modalContainer.nativeElement));
        if (this.previouslyFocusedElement) {
            /** @type {?} */
            var previouslyDOMRect = this.previouslyFocusedElement.getBoundingClientRect();
            /** @type {?} */
            var lastPosition = getElementOffset(this.previouslyFocusedElement);
            /** @type {?} */
            var x = lastPosition.left + previouslyDOMRect.width / 2;
            /** @type {?} */
            var y = lastPosition.top + previouslyDOMRect.height / 2;
            this.transformOrigin = x - modalElement.offsetLeft + "px " + (y - modalElement.offsetTop) + "px 0px";
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzModalComponent.prototype.savePreviouslyFocusedElement = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.document) {
            this.previouslyFocusedElement = (/** @type {?} */ (this.document.activeElement));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzModalComponent.prototype.trapFocus = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    };
    /**
     * @private
     * @return {?}
     */
    NzModalComponent.prototype.restoreFocus = /**
     * @private
     * @return {?}
     */
    function () {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
            this.focusTrap = null;
        }
    };
    NzModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-modal',
                    exportAs: 'nzModal',
                    template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\r\n\r\n<div [nzNoAnimation]=\"nzNoAnimation\">\r\n  <div *ngIf=\"mask\"\r\n    class=\"ant-modal-mask\"\r\n    [ngClass]=\"maskAnimationClassMap\"\r\n    [class.ant-modal-mask-hidden]=\"hidden\"\r\n    [ngStyle]=\"nzMaskStyle\"\r\n    [style.zIndex]=\"nzZIndex\"\r\n  ></div>\r\n  <div\r\n    (click)=\"onClickMask($event)\"\r\n    (mouseup)=\"onDialogUp()\"\r\n    class=\"ant-modal-wrap {{ nzWrapClassName }}\"\r\n    [style.zIndex]=\"nzZIndex\"\r\n    [style.visibility]=\"hidden ? 'hidden' : null\"\r\n  >\r\n    <div #modalContainer\r\n      class=\"ant-modal {{ nzClassName }}\"\r\n      (mousedown)=\"onMaskDialogDown()\"\r\n      [ngClass]=\"modalAnimationClassMap\"\r\n      [ngStyle]=\"nzStyle\"\r\n      [style.width]=\"nzWidth | nzToCssUnit\"\r\n      [style.transform-origin]=\"transformOrigin\"\r\n      role=\"region\"\r\n    >\r\n      <div class=\"ant-modal-content\" role=\"dialog\" aria-modal=\"true\">\r\n        <button *ngIf=\"nzClosable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" [attr.aria-label]=\"nzCloseAriaLabel\">\r\n          <span class=\"ant-modal-close-x\">\r\n            <ng-container *nzStringTemplateOutlet=\"nzCloseIcon\">\r\n              <i nz-icon [nzType]=\"nzCloseIcon\" class=\"ant-modal-close-icon\"></i>\r\n            </ng-container>\r\n          </span>\r\n        </button>\r\n        <ng-container *ngIf=\"!hidden\" [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isModalType('default')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentDefault>\r\n  <div *ngIf=\"nzTitle\" class=\"ant-modal-header\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(nzTitle)\" [ngTemplateOutlet]=\"nzTitle\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(nzTitle)\">\r\n          <h4 style=\"margin-bottom: 0;\" role=\"heading\" [innerHTML]=\"nzTitle\" class=\"modal-focusable-header\" cdkFocusInitial tabindex=\"0\"></h4>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"nzBodyStyle\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(nzContent)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(nzContent)\" [ngTemplateOutlet]=\"nzContent\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(nzContent)\"><div [innerHTML]=\"nzContent\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"nzFooter !== null\" class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(nzFooter)\" [ngTemplateOutlet]=\"nzFooter\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(nzFooter)\"><div [innerHTML]=\"nzFooter\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(nzFooter)\">\r\n        <button *ngFor=\"let button of nzFooter\" nz-button\r\n          (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n          [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n          [nzType]=\"button.type\"\r\n          [nzShape]=\"button.shape\"\r\n          [nzSize]=\"button.size\"\r\n          [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"nzCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"nzCancelLoading\" [disabled]=\"nzCancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"nzOkText!==null\" nz-button [nzType]=\"nzOkType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"nzOkLoading\" [disabled]=\"nzOkDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Default Modal Content -->\r\n\r\n<!-- [Predefined] Confirm Modal Content -->\r\n<ng-template #tplContentConfirm>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"nzBodyStyle\">\r\n    <div class=\"ant-modal-confirm-body-wrapper\">\r\n      <div class=\"ant-modal-confirm-body\">\r\n        <i nz-icon [nzType]=\"nzIconType\"></i>\r\n        <span class=\"ant-modal-confirm-title\">\r\n          <ng-container [ngSwitch]=\"true\">\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(nzTitle)\" [ngTemplateOutlet]=\"nzTitle\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"isNonEmptyString(nzTitle)\"><span [innerHTML]=\"nzTitle\"></span></ng-container>\r\n          </ng-container>\r\n        </span>\r\n        <div class=\"ant-modal-confirm-content\">\r\n          <ng-container #bodyContainer>\r\n            <ng-container *ngIf=\"!isComponent(nzContent)\" [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(nzContent)\" [ngTemplateOutlet]=\"nzContent\"></ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(nzContent)\"><div [innerHTML]=\"nzContent\"></div></ng-container>\r\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-confirm-btns\">\r\n        <button *ngIf=\"nzCancelText!==null\"\r\n          nz-button\r\n          (click)=\"onClickOkCancel('cancel')\"\r\n          [nzLoading]=\"nzCancelLoading\"\r\n          [disabled]=\"nzCancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button #autoFocusButtonOk\r\n          *ngIf=\"nzOkText!==null\"\r\n          nz-button\r\n          (click)=\"onClickOkCancel('ok')\"\r\n          [nzType]=\"nzOkType\"\r\n          [nzLoading]=\"nzOkLoading\"\r\n          [disabled]=\"nzOkDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </div>\r\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Confirm Modal Content -->\r\n",
                    // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                    changeDetection: ChangeDetectionStrategy.Default
                }] }
    ];
    /** @nocollapse */
    NzModalComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Overlay },
        { type: OverlayKeyboardDispatcher },
        { type: NzI18nService },
        { type: ComponentFactoryResolver },
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: NzModalControlService },
        { type: FocusTrapFactory },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MODAL_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    NzModalComponent.propDecorators = {
        nzVisible: [{ type: Input }],
        nzClosable: [{ type: Input }],
        nzOkLoading: [{ type: Input }],
        nzOkDisabled: [{ type: Input }],
        nzCancelDisabled: [{ type: Input }],
        nzCancelLoading: [{ type: Input }],
        nzKeyboard: [{ type: Input }],
        nzNoAnimation: [{ type: Input }],
        nzMask: [{ type: Input }],
        nzMaskClosable: [{ type: Input }],
        nzContent: [{ type: Input }],
        nzComponentParams: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzGetContainer: [{ type: Input }],
        nzZIndex: [{ type: Input }],
        nzWidth: [{ type: Input }],
        nzWrapClassName: [{ type: Input }],
        nzClassName: [{ type: Input }],
        nzStyle: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzCloseIcon: [{ type: Input }],
        nzMaskStyle: [{ type: Input }],
        nzBodyStyle: [{ type: Input }],
        nzOkText: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzIconType: [{ type: Input }],
        nzModalType: [{ type: Input }],
        nzCloseAriaLabel: [{ type: Input }],
        nzOnOk: [{ type: Input }, { type: Output }],
        nzOnCancel: [{ type: Input }, { type: Output }],
        nzAfterOpen: [{ type: Output }],
        nzAfterClose: [{ type: Output }],
        nzVisibleChange: [{ type: Output }],
        modalContainer: [{ type: ViewChild, args: ['modalContainer', { static: true },] }],
        bodyContainer: [{ type: ViewChild, args: ['bodyContainer', { static: false, read: ViewContainerRef },] }],
        autoFocusButtonOk: [{ type: ViewChild, args: ['autoFocusButtonOk', { static: false, read: ElementRef },] }],
        modalFooter: [{ type: ContentChild, args: [NzModalFooterDirective, { static: false },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzVisible", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzClosable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzOkLoading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzOkDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCancelDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCancelLoading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzKeyboard", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzModalComponent.prototype, "nzNoAnimation", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzMask", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzMaskClosable", void 0);
    return NzModalComponent;
}(NzModalRef));
export { NzModalComponent };
if (false) {
    /** @type {?} */
    NzModalComponent.prototype.nzVisible;
    /** @type {?} */
    NzModalComponent.prototype.nzClosable;
    /** @type {?} */
    NzModalComponent.prototype.nzOkLoading;
    /** @type {?} */
    NzModalComponent.prototype.nzOkDisabled;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelDisabled;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelLoading;
    /** @type {?} */
    NzModalComponent.prototype.nzKeyboard;
    /** @type {?} */
    NzModalComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzModalComponent.prototype.nzMask;
    /** @type {?} */
    NzModalComponent.prototype.nzMaskClosable;
    /** @type {?} */
    NzModalComponent.prototype.nzContent;
    /** @type {?} */
    NzModalComponent.prototype.nzComponentParams;
    /** @type {?} */
    NzModalComponent.prototype.nzFooter;
    /** @type {?} */
    NzModalComponent.prototype.nzGetContainer;
    /** @type {?} */
    NzModalComponent.prototype.nzZIndex;
    /** @type {?} */
    NzModalComponent.prototype.nzWidth;
    /** @type {?} */
    NzModalComponent.prototype.nzWrapClassName;
    /** @type {?} */
    NzModalComponent.prototype.nzClassName;
    /** @type {?} */
    NzModalComponent.prototype.nzStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzTitle;
    /** @type {?} */
    NzModalComponent.prototype.nzCloseIcon;
    /** @type {?} */
    NzModalComponent.prototype.nzMaskStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzOkText;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelText;
    /** @type {?} */
    NzModalComponent.prototype.nzOkType;
    /** @type {?} */
    NzModalComponent.prototype.nzIconType;
    /** @type {?} */
    NzModalComponent.prototype.nzModalType;
    /** @type {?} */
    NzModalComponent.prototype.nzCloseAriaLabel;
    /** @type {?} */
    NzModalComponent.prototype.nzOnOk;
    /** @type {?} */
    NzModalComponent.prototype.nzOnCancel;
    /** @type {?} */
    NzModalComponent.prototype.nzAfterOpen;
    /** @type {?} */
    NzModalComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzModalComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzModalComponent.prototype.modalContainer;
    /** @type {?} */
    NzModalComponent.prototype.bodyContainer;
    /** @type {?} */
    NzModalComponent.prototype.autoFocusButtonOk;
    /** @type {?} */
    NzModalComponent.prototype.locale;
    /** @type {?} */
    NzModalComponent.prototype.maskAnimationClassMap;
    /** @type {?} */
    NzModalComponent.prototype.modalAnimationClassMap;
    /** @type {?} */
    NzModalComponent.prototype.transformOrigin;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.contentComponentRef;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.animationState;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.previouslyFocusedElement;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.focusTrap;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.scrollStrategy;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.dialogMouseDown;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.timeoutId;
    /** @type {?} */
    NzModalComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.overlayKeyboardDispatcher;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.modalControl;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.focusTrapFactory;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.nzModalGlobalConfig;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.document;
    /* Skipping unhandled member: [key: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULHdCQUF3QixFQUV4QixZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFdBQVcsRUFDWCxJQUFJLEVBQ0osU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBaUIsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFF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O0lBQzVDLHNDQUErQjs7Ozs7SUFDL0IsMkNBQWdDOzs7OztJQUNoQyxxQ0FBMEI7O0lBS3hCLDJDQUF1Qzs7Ozs7SUFDdkMsbUNBQXdCOzs7OztJQUN4QixxREFBNEQ7Ozs7O0lBQzVELGdDQUEyQjs7Ozs7SUFDM0IsK0JBQXFDOzs7OztJQUNyQyxzQ0FBOEI7Ozs7O0lBQzlCLHlDQUF1Qzs7Ozs7SUFDdkMsd0NBQTJDOzs7OztJQUMzQyw0Q0FBMEM7Ozs7O0lBQzFDLCtCQUE4Qjs7Ozs7SUFDOUIsK0NBQStFOzs7OztJQUMvRSxvQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBGb2N1c1RyYXAsIEZvY3VzVHJhcEZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcblxyXG5pbXBvcnQgeyBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBCbG9ja1Njcm9sbFN0cmF0ZWd5LCBPdmVybGF5LCBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldEVsZW1lbnRPZmZzZXQsXHJcbiAgaXNQcm9taXNlLFxyXG4gIHdhcm5EZXByZWNhdGlvbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IE56TW9kYWxDb25maWcsIE5aX01PREFMX0NPTkZJRyB9IGZyb20gJy4vbnotbW9kYWwtY29uZmlnJztcclxuaW1wb3J0IHsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9uei1tb2RhbC1jb250cm9sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOek1vZGFsRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tb2RhbC1mb290ZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbnotbW9kYWwtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgTW9kYWxCdXR0b25PcHRpb25zLCBNb2RhbE9wdGlvbnMsIE1vZGFsVHlwZSwgT25DbGlja0NhbGxiYWNrIH0gZnJvbSAnLi9uei1tb2RhbC50eXBlJztcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RBTF9BTklNQVRFX0RVUkFUSU9OID0gMjAwOyAvLyBEdXJhdGlvbiB3aGVuIHBlcmZvcm0gYW5pbWF0aW9ucyAobXMpXHJcbmV4cG9ydCBjb25zdCBXUkFQX0NMQVNTX05BTUUgPSAnYW50LW1vZGFsLXdyYXAnO1xyXG5cclxudHlwZSBBbmltYXRpb25TdGF0ZSA9ICdlbnRlcicgfCAnbGVhdmUnIHwgbnVsbDtcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdtb2RhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LW1vZGFsJyxcclxuICBleHBvcnRBczogJ256TW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgLy8gVXNpbmcgT25QdXNoIGZvciBtb2RhbCBjYXVzZWQgZm9vdGVyIGNhbiBub3QgdG8gZGV0ZWN0IGNoYW5nZXMuIHdlIGNhbiBmaXggaXQgd2hlbiA4LnguXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XHJcbn0pXHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBjbGFzcyBOek1vZGFsQ29tcG9uZW50PFQgPSBhbnksIFIgPSBhbnk+IGV4dGVuZHMgTnpNb2RhbFJlZjxULCBSPlxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgTW9kYWxPcHRpb25zPFQ+IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9rTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9rRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDYW5jZWxEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNhbmNlbExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpLZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Tm9BbmltYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgLy8gVE9ETyhoc3Vhbnh5eik6IGFkZCBkZWZhdWx0IHZhbHVlIG9uY2Ugb2xkIEFQSSBpcyBkZXByZWNhdGVkLlxyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0Qm9vbGVhbigpIG56TWFzazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dEJvb2xlYW4oKSBuek1hc2tDbG9zYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgbnpDb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBUeXBlPFQ+OyAvLyBbU1RBVElDXSBJZiBub3Qgc3BlY2lmaWVkLCB3aWxsIHVzZSA8bmctY29udGVudD5cclxuICBASW5wdXQoKSBuekNvbXBvbmVudFBhcmFtczogVDsgLy8gW1NUQVRJQ10gT05MWSBhdmFsaWFibGUgd2hlbiBuekNvbnRlbnQgaXMgYSBjb21wb25lbnRcclxuICBASW5wdXQoKSBuekZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB8IG51bGw7IC8vIFtTVEFUSUNdIERlZmF1bHQgTW9kYWwgT05MWVxyXG4gIEBJbnB1dCgpIG56R2V0Q29udGFpbmVyOiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYgfCAoKCkgPT4gSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmKSA9ICgpID0+IHRoaXMub3ZlcmxheS5jcmVhdGUoKTsgLy8gW1NUQVRJQ11cclxuICBASW5wdXQoKSBuelpJbmRleDogbnVtYmVyID0gMTAwMDtcclxuICBASW5wdXQoKSBueldpZHRoOiBudW1iZXIgfCBzdHJpbmcgPSA1MjA7XHJcbiAgQElucHV0KCkgbnpXcmFwQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuelN0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xyXG4gIEBJbnB1dCgpIG56Q2xvc2VJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICdjbG9zZSc7XHJcbiAgQElucHV0KCkgbnpNYXNrU3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBuekJvZHlTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIG56T2tUZXh0OiBzdHJpbmcgfCBudWxsO1xyXG4gIEBJbnB1dCgpIG56Q2FuY2VsVGV4dDogc3RyaW5nIHwgbnVsbDtcclxuICBASW5wdXQoKSBuek9rVHlwZTogc3RyaW5nID0gJ3ByaW1hcnknO1xyXG4gIEBJbnB1dCgpIG56SWNvblR5cGU6IHN0cmluZyA9ICdxdWVzdGlvbi1jaXJjbGUnOyAvLyBDb25maXJtIE1vZGFsIE9OTFlcclxuICBASW5wdXQoKSBuek1vZGFsVHlwZTogTW9kYWxUeXBlID0gJ2RlZmF1bHQnO1xyXG5cclxuICBASW5wdXQoKSBuekNsb3NlQXJpYUxhYmVsOiBzdHJpbmcgPSAnQ2xvc2UnO1xyXG5cclxuICBASW5wdXQoKSBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9rOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQElucHV0KCkgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DYW5jZWw6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgb3Blbih2aXNpYmxlKSBhZnRlciBhbmltYXRpb25zXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Uj4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIGxlYXZlLWFuaW1hdGlvbiBvdmVyXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbW9kYWxDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBtb2RhbENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdib2R5Q29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGJvZHlDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYXV0b0ZvY3VzQnV0dG9uT2snLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgYXV0b0ZvY3VzQnV0dG9uT2s6IEVsZW1lbnRSZWY7IC8vIE9ubHkgYWltIHRvIGZvY3VzIHRoZSBvayBidXR0b24gdGhhdCBuZWVkcyB0byBiZSBhdXRvIGZvY3VzZWRcclxuXHJcbiAgQENvbnRlbnRDaGlsZChOek1vZGFsRm9vdGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBzZXQgbW9kYWxGb290ZXIodmFsdWU6IE56TW9kYWxGb290ZXJEaXJlY3RpdmUpIHtcclxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50ZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnNldEZvb3RlcldpdGhUZW1wbGF0ZSh2YWx1ZS50ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYWZ0ZXJPcGVuKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgbnpBZnRlck9wZW5cclxuICAgIHJldHVybiB0aGlzLm56QWZ0ZXJPcGVuLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFmdGVyQ2xvc2UoKTogT2JzZXJ2YWJsZTxSPiB7XHJcbiAgICAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBuekFmdGVyQ2xvc2VcclxuICAgIHJldHVybiB0aGlzLm56QWZ0ZXJDbG9zZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBjYW5jZWxUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNhbmNlbFRleHQgfHwgdGhpcy5sb2NhbGUuY2FuY2VsVGV4dCE7XHJcbiAgfVxyXG5cclxuICBnZXQgb2tUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uek9rVGV4dCB8fCB0aGlzLmxvY2FsZS5va1RleHQhO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5uelZpc2libGUgJiYgIXRoaXMuYW5pbWF0aW9uU3RhdGU7XHJcbiAgfSAvLyBJbmRpY2F0ZSB3aGV0aGVyIHRoaXMgZGlhbG9nIHNob3VsZCBoaWRkZW5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFzayB2YWx1ZVxyXG4gICAqXHJcbiAgICogV2VpZ2h0IG9mIGRpZmZlcmVudCBtYXNrIGlucHV0OlxyXG4gICAqIGNvbXBvbmVudCBkZWZhdWx0IHZhbHVlIDwgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gPCBjb21wb25lbnQgaW5wdXQgdmFsdWVcclxuICAgKi9cclxuICBnZXQgbWFzaygpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLm56TWFzayAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm56TWFzaztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5uek1vZGFsR2xvYmFsQ29uZmlnICYmIHRoaXMubnpNb2RhbEdsb2JhbENvbmZpZy5uek1hc2sgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uek1vZGFsR2xvYmFsQ29uZmlnLm56TWFzaztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFza0Nsb3NhYmxlIHZhbHVlXHJcbiAgICpcclxuICAgKiBXZWlnaHQgb2YgZGlmZmVyZW50IG1hc2tDbG9zYWJsZSBpbnB1dDpcclxuICAgKiBjb21wb25lbnQgZGVmYXVsdCB2YWx1ZSA8IGdsb2JhbCBjb25maWd1cmF0aW9uIDwgY29tcG9uZW50IGlucHV0IHZhbHVlXHJcbiAgICovXHJcbiAgZ2V0IG1hc2tDbG9zYWJsZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLm56TWFza0Nsb3NhYmxlICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpNYXNrQ2xvc2FibGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubnpNb2RhbEdsb2JhbENvbmZpZyAmJiB0aGlzLm56TW9kYWxHbG9iYWxDb25maWcubnpNYXNrQ2xvc2FibGUgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uek1vZGFsR2xvYmFsQ29uZmlnLm56TWFza0Nsb3NhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2NhbGU6IHsgb2tUZXh0Pzogc3RyaW5nOyBjYW5jZWxUZXh0Pzogc3RyaW5nIH0gPSB7fTtcclxuICBtYXNrQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgbW9kYWxBbmltYXRpb25DbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcclxuICB0cmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCAwcHgnOyAvLyBUaGUgb3JpZ2luIHBvaW50IHRoYXQgYW5pbWF0aW9uIGJhc2VkIG9uXHJcblxyXG4gIHByaXZhdGUgY29udGVudENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+OyAvLyBIYW5kbGUgdGhlIHJlZmVyZW5jZSB3aGVuIHVzaW5nIG56Q29udGVudCBhcyBDb21wb25lbnRcclxuICBwcml2YXRlIGFuaW1hdGlvblN0YXRlOiBBbmltYXRpb25TdGF0ZTsgLy8gQ3VycmVudCBhbmltYXRpb24gc3RhdGVcclxuICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmO1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBmb2N1c1RyYXA6IEZvY3VzVHJhcCB8IG51bGw7XHJcbiAgcHJpdmF0ZSBzY3JvbGxTdHJhdGVneTogQmxvY2tTY3JvbGxTdHJhdGVneTtcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcbiAgcHJpdmF0ZSBkaWFsb2dNb3VzZURvd24gPSBmYWxzZTtcclxuICBwcml2YXRlIHRpbWVvdXRJZDogbnVtYmVyO1xyXG5cclxuICBba2V5OiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyOiBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sOiBOek1vZGFsQ29udHJvbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX01PREFMX0NPTkZJRykgcHJpdmF0ZSBuek1vZGFsR2xvYmFsQ29uZmlnOiBOek1vZGFsQ29uZmlnLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XHJcblxyXG4gICAgaWYgKHRoaXMubnpNb2RhbEdsb2JhbENvbmZpZykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgJ2BOWl9NT0RBTF9DT05GSUdgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSBnbG9iYWwgY29uZmlnIGluc3RlYWQuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnTW9kYWwnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQ29tcG9uZW50KHRoaXMubnpDb250ZW50KSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUR5bmFtaWNDb21wb25lbnQodGhpcy5uekNvbnRlbnQgYXMgVHlwZTxUPik7IC8vIENyZWF0ZSBjb21wb25lbnQgYWxvbmcgd2l0aG91dCBWaWV3XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNNb2RhbEJ1dHRvbnModGhpcy5uekZvb3RlcikpIHtcclxuICAgICAgLy8gU2V0dXAgZGVmYXVsdCBidXR0b24gb3B0aW9uc1xyXG4gICAgICB0aGlzLm56Rm9vdGVyID0gdGhpcy5mb3JtYXRNb2RhbEJ1dHRvbnModGhpcy5uekZvb3RlciBhcyBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQbGFjZSB0aGUgbW9kYWwgZG9tIHRvIGVsc2V3aGVyZVxyXG4gICAgdGhpcy5jb250YWluZXIgPSB0eXBlb2YgdGhpcy5uekdldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMubnpHZXRDb250YWluZXIoKSA6IHRoaXMubnpHZXRDb250YWluZXI7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIGZyb21FdmVudDxLZXlib2FyZEV2ZW50Pih0aGlzLmRvY3VtZW50LmJvZHksICdrZXlkb3duJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLmtleWRvd25MaXN0ZW5lcihlKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICAvLyBOT1RFOiBvbmx5IGF0dGFjaCB0aGUgZG9tIHRvIG92ZXJsYXksIHRoZSB2aWV3IGNvbnRhaW5lciBpcyBub3QgY2hhbmdlZCBhY3R1YWxseVxyXG4gICAgICB0aGlzLnNldE92ZXJsYXlSZWYodGhpcy5jb250YWluZXIpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5vdmVybGF5RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWZcclxuICAgICAgICAua2V5ZG93bkV2ZW50cygpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5rZXlkb3duTGlzdGVuZXIoZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIG1vZGFsIHdoZW4gYWZ0ZXJPcGVuL2FmdGVyQ2xvc2UgaXMgc3RhYmxlXHJcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5yZWdpc3Rlck1vZGFsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gW05PVEVdIE5PVCBhdmFpbGFibGUgd2hlbiB1c2luZyBieSBzZXJ2aWNlIVxyXG4gIC8vIEJlY2F1c2UgbmdPbkNoYW5nZXMgbmV2ZXIgYmUgY2FsbGVkIHdoZW4gdXNpbmcgYnkgc2VydmljZSxcclxuICAvLyBoZXJlIHdlIGNhbid0IHN1cHBvcnQgXCJuekNvbnRlbnRcIihDb21wb25lbnQpIGV0Yy4gYXMgaW5wdXRzIHRoYXQgaW5pdGlhbGl6ZWQgZHluYW1pY2FsbHkuXHJcbiAgLy8gQlVUOiBVc2VyIGFsc28gY2FuIGNoYW5nZSBcIm56Q29udGVudFwiIGR5bmFtaWNhbGx5IHRvIHRyaWdnZXIgVUkgY2hhbmdlcyAocHJvdmlkZWQgeW91IGRvbid0IHVzZSBcYkNvbXBvbmVudCB0aGF0IG5lZWRzIGluaXRpYWxpemF0aW9ucylcclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelZpc2libGUpIHtcclxuICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodGhpcy5uelZpc2libGUsICFjaGFuZ2VzLm56VmlzaWJsZS5maXJzdENoYW5nZSk7IC8vIERvIG5vdCB0cmlnZ2VyIGFuaW1hdGlvbiB3aGlsZSBpbml0aWFsaXppbmdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIElmIHVzaW5nIENvbXBvbmVudCwgaXQgaXMgdGhlIHRpbWUgdG8gYXR0YWNoIFZpZXcgd2hpbGUgYm9keUNvbnRhaW5lciBpcyByZWFkeVxyXG4gICAgaWYgKHRoaXMuY29udGVudENvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLmJvZHlDb250YWluZXIuaW5zZXJ0KHRoaXMuY29udGVudENvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2spIHtcclxuICAgICAgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2submF0aXZlRWxlbWVudCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgLy8gQ2xvc2Ugc2VsZiBiZWZvcmUgZGVzdHJ1Y3RpbmdcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLm1vZGFsQ29udHJvbC5kZXJlZ2lzdGVyTW9kYWwodGhpcyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZGlzcG9zZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgICB9KTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XHJcbiAgfVxyXG5cclxuICBzZXRGb290ZXJXaXRoVGVtcGxhdGUodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHt9Pik6IHZvaWQge1xyXG4gICAgdGhpcy5uekZvb3RlciA9IHRlbXBsYXRlUmVmO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZXRPdmVybGF5UmVmKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IG92ZXJsYXlSZWY7XHJcbiAgfVxyXG5cclxuICBrZXlkb3duTGlzdGVuZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUgJiYgdGhpcy5uektleWJvYXJkKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZShmYWxzZSwgcmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3kocmVzdWx0PzogUik6IHZvaWQge1xyXG4gICAgLy8gRGVzdHJveSBlcXVhbHMgQ2xvc2VcclxuICAgIHRoaXMuY2xvc2UocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJPaygpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdvaycpO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckNhbmNlbCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICB9XHJcblxyXG4gIGdldEluc3RhbmNlKCk6IE56TW9kYWxDb21wb25lbnQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Q29tcG9uZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgJiYgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgb25NYXNrRGlhbG9nRG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nTW91c2VEb3duID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uRGlhbG9nVXAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaWFsb2dNb3VzZURvd24pIHtcclxuICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmRpYWxvZ01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tNYXNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm1hc2sgJiZcclxuICAgICAgdGhpcy5tYXNrQ2xvc2FibGUgJiZcclxuICAgICAgKCRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucyhXUkFQX0NMQVNTX05BTUUpICYmXHJcbiAgICAgIHRoaXMubnpWaXNpYmxlICYmXHJcbiAgICAgICF0aGlzLmRpYWxvZ01vdXNlRG93blxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzTW9kYWxUeXBlKHR5cGU6IE1vZGFsVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpNb2RhbFR5cGUgPT09IHR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGlja0Nsb3NlQnRuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrT2tDYW5jZWwodHlwZTogJ29rJyB8ICdjYW5jZWwnKTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0geyBvazogdGhpcy5uek9uT2ssIGNhbmNlbDogdGhpcy5uek9uQ2FuY2VsIH1bdHlwZV07XHJcbiAgICBjb25zdCBsb2FkaW5nS2V5ID0geyBvazogJ256T2tMb2FkaW5nJywgY2FuY2VsOiAnbnpDYW5jZWxMb2FkaW5nJyB9W3R5cGVdO1xyXG4gICAgaWYgKHRyaWdnZXIgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcclxuICAgICAgdHJpZ2dlci5lbWl0KHRoaXMuZ2V0Q29udGVudENvbXBvbmVudCgpKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRyaWdnZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdHJpZ2dlcih0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XHJcbiAgICAgIGNvbnN0IGNhc2VDbG9zZSA9IChkb0Nsb3NlOiBib29sZWFuIHwgdm9pZCB8IHt9KSA9PiBkb0Nsb3NlICE9PSBmYWxzZSAmJiB0aGlzLmNsb3NlKGRvQ2xvc2UgYXMgUik7IC8vIFVzZXJzIGNhbiByZXR1cm4gXCJmYWxzZVwiIHRvIHByZXZlbnQgY2xvc2luZyBieSBkZWZhdWx0XHJcbiAgICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xyXG4gICAgICAgIHRoaXNbbG9hZGluZ0tleV0gPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVRoZW4gPSAoZG9DbG9zZTogYm9vbGVhbiB8IHZvaWQgfCB7fSkgPT4ge1xyXG4gICAgICAgICAgdGhpc1tsb2FkaW5nS2V5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgY2FzZUNsb3NlKGRvQ2xvc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgKHJlc3VsdCBhcyBQcm9taXNlPHZvaWQ+KS50aGVuKGhhbmRsZVRoZW4pLmNhdGNoKGhhbmRsZVRoZW4pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhc2VDbG9zZShyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNOb25FbXB0eVN0cmluZyh2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNDb21wb25lbnQodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUeXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzTW9kYWxCdXR0b25zKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICAvLyBEbyByZXN0IHRoaW5ncyB3aGVuIHZpc2libGUgc3RhdGUgY2hhbmdlZFxyXG4gIHByaXZhdGUgaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGU6IGJvb2xlYW4sIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWUsIGNsb3NlUmVzdWx0PzogUik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgLy8gSGlkZSBzY3JvbGxiYXIgYXQgdGhlIGZpcnN0IHRpbWUgd2hlbiBzaG93biB1cFxyXG4gICAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5LmVuYWJsZSgpO1xyXG4gICAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcclxuICAgICAgdGhpcy50cmFwRm9jdXMoKTtcclxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlci5hZGQodGhpcy5vdmVybGF5UmVmKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlci5yZW1vdmUodGhpcy5vdmVybGF5UmVmKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYW5pbWF0aW9uID8gdGhpcy5hbmltYXRlVG8odmlzaWJsZSkgOiB1bmRlZmluZWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAvLyBFbWl0IG9wZW4vY2xvc2UgZXZlbnQgYWZ0ZXIgYW5pbWF0aW9ucyBvdmVyXHJcbiAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgdGhpcy5uekFmdGVyT3Blbi5lbWl0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uekFmdGVyQ2xvc2UuZW1pdChjbG9zZVJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5LmRpc2FibGUoKTtcclxuICAgICAgICAvLyBNYXJrIHRoZSBmb3IgY2hlY2sgc28gaXQgY2FuIHJlYWN0IGlmIHRoZSB2aWV3IGNvbnRhaW5lciBpcyB1c2luZyBPblB1c2ggY2hhbmdlIGRldGVjdGlvbi5cclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBMb29rdXAgYSBidXR0b24ncyBwcm9wZXJ0eSwgaWYgdGhlIHByb3AgaXMgYSBmdW5jdGlvbiwgY2FsbCAmIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQsIG90aGVyd2lzZSwgcmV0dXJuIGl0c2VsZi5cclxuICBwdWJsaWMgZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKG9wdGlvbnM6IE1vZGFsQnV0dG9uT3B0aW9uczxUPiwgcHJvcDogc3RyaW5nKToge30ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW3Byb3BdO1xyXG4gICAgY29uc3QgYXJnczogVFtdID0gW107XHJcbiAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGFyZ3MucHVzaCh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmFwcGx5KG9wdGlvbnMsIGFyZ3MpIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBPbiBuekZvb3RlcidzIG1vZGFsIGJ1dHRvbiBjbGlja1xyXG4gIHB1YmxpYyBvbkJ1dHRvbkNsaWNrKGJ1dHRvbjogTW9kYWxCdXR0b25PcHRpb25zPFQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdvbkNsaWNrJyk7IC8vIENhbGwgb25DbGljayBkaXJlY3RseVxyXG4gICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XHJcbiAgICAgIGJ1dHRvbi5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgKHJlc3VsdCBhcyBQcm9taXNlPHt9PikudGhlbigoKSA9PiAoYnV0dG9uLmxvYWRpbmcgPSBmYWxzZSkpLmNhdGNoKCgpID0+IChidXR0b24ubG9hZGluZyA9IGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDaGFuZ2UgbnpWaXNpYmxlIGZyb20gaW5zaWRlXHJcbiAgcHJpdmF0ZSBjaGFuZ2VWaXNpYmxlRnJvbUluc2lkZSh2aXNpYmxlOiBib29sZWFuLCBjbG9zZVJlc3VsdD86IFIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0aGlzLm56VmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICAvLyBDaGFuZ2UgbnpWaXNpYmxlIHZhbHVlIGltbWVkaWF0ZWx5XHJcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGUsIHRydWUsIGNsb3NlUmVzdWx0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlQW5pbWF0aW9uU3RhdGUoc3RhdGU6IEFuaW1hdGlvblN0YXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gc3RhdGU7XHJcbiAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgdGhpcy5tYXNrQW5pbWF0aW9uQ2xhc3NNYXAgPSB7XHJcbiAgICAgICAgW2BmYWRlLSR7c3RhdGV9YF06IHRydWUsXHJcbiAgICAgICAgW2BmYWRlLSR7c3RhdGV9LWFjdGl2ZWBdOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMubW9kYWxBbmltYXRpb25DbGFzc01hcCA9IHtcclxuICAgICAgICBbYHpvb20tJHtzdGF0ZX1gXTogdHJ1ZSxcclxuICAgICAgICBbYHpvb20tJHtzdGF0ZX0tYWN0aXZlYF06IHRydWVcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0gdGhpcy5tb2RhbEFuaW1hdGlvbkNsYXNzTWFwID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYW5pbWF0ZVRvKGlzVmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKGlzVmlzaWJsZSkge1xyXG4gICAgICAvLyBGaWd1cmUgb3V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uIHdoZW4gc2hvd3MgdXBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpKTsgLy8gW05PVEVdIFVzaW5nIHRpbWVvdXQgZHVlIHRvIHRoZSBkb2N1bWVudC5jbGljayBldmVudCBpcyBmaXJlZCBsYXRlciB0aGFuIHZpc2libGUgY2hhbmdlLCBzbyBpZiBub3QgcG9zdHBvbmVkIHRvIG5leHQgZXZlbnQtbG9vcCwgd2UgY2FuJ3QgZ2V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VBbmltYXRpb25TdGF0ZShpc1Zpc2libGUgPyAnZW50ZXInIDogJ2xlYXZlJyk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PlxyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIC8vIFJldHVybiB3aGVuIGFuaW1hdGlvbiBpcyBvdmVyXHJcbiAgICAgICAgICB0aGlzLmNoYW5nZUFuaW1hdGlvblN0YXRlKG51bGwpO1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5uek5vQW5pbWF0aW9uID8gMCA6IE1PREFMX0FOSU1BVEVfRFVSQVRJT05cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0TW9kYWxCdXR0b25zKGJ1dHRvbnM6IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4pOiBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHtcclxuICAgIHJldHVybiBidXR0b25zLm1hcChidXR0b24gPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLntcclxuICAgICAgICAgIHR5cGU6ICdkZWZhdWx0JyxcclxuICAgICAgICAgIHNpemU6ICdkZWZhdWx0JyxcclxuICAgICAgICAgIGF1dG9Mb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAuLi5idXR0b25cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgY29tcG9uZW50IGR5bmFtaWNhbGx5IGJ1dCBub3QgYXR0YWNoIHRvIGFueSBWaWV3ICh0aGlzIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gYm9keUNvbnRhaW5lciBpcyByZWFkeSlcclxuICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBjbGFzc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgY3JlYXRlRHluYW1pY0NvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8VD4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xyXG4gICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTnpNb2RhbFJlZiwgdXNlVmFsdWU6IHRoaXMgfV0sXHJcbiAgICAgIHBhcmVudDogdGhpcy52aWV3Q29udGFpbmVyLnBhcmVudEluamVjdG9yXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29udGVudENvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGNoaWxkSW5qZWN0b3IpO1xyXG4gICAgaWYgKHRoaXMubnpDb21wb25lbnRQYXJhbXMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UsIHRoaXMubnpDb21wb25lbnRQYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgLy8gRG8gdGhlIGZpcnN0IGNoYW5nZSBkZXRlY3Rpb24gaW1tZWRpYXRlbHkgKG9yIHdlIGRvIGRldGVjdGlvbiBhdCBuZ0FmdGVyVmlld0luaXQsIG11bHRpLWNoYW5nZXMgZXJyb3Igd2lsbCBiZSB0aHJvd24pXHJcbiAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlIHRyYW5zZm9ybS1vcmlnaW4gdG8gdGhlIGxhc3QgY2xpY2sgcG9zaXRpb24gb24gZG9jdW1lbnRcclxuICBwcml2YXRlIHVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IHRoaXMubW9kYWxDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c2x5RE9NUmVjdCA9IHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBsYXN0UG9zaXRpb24gPSBnZXRFbGVtZW50T2Zmc2V0KHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50KTtcclxuICAgICAgY29uc3QgeCA9IGxhc3RQb3NpdGlvbi5sZWZ0ICsgcHJldmlvdXNseURPTVJlY3Qud2lkdGggLyAyO1xyXG4gICAgICBjb25zdCB5ID0gbGFzdFBvc2l0aW9uLnRvcCArIHByZXZpb3VzbHlET01SZWN0LmhlaWdodCAvIDI7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gYCR7eCAtIG1vZGFsRWxlbWVudC5vZmZzZXRMZWZ0fXB4ICR7eSAtIG1vZGFsRWxlbWVudC5vZmZzZXRUb3B9cHggMHB4YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRvY3VtZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFwRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc3RvcmVGb2N1cygpOiB2b2lkIHtcclxuICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFIGNhbiBzZXQgdGhlIGBhY3RpdmVFbGVtZW50YCB0byBudWxsIGluIHNvbWUgY2FzZXMuXHJcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgJiYgdHlwZW9mIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb2N1c1RyYXApIHtcclxuICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==