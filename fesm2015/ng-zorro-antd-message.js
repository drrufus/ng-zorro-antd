import { warnDeprecation, toCssPixel, NzConfigService, NzSingletonService, NzStringTemplateOutletDirective, moveUpMotion, NzAddOnModule, NzClassListAddDirective } from 'ng-zorro-antd/core';
import { Overlay, OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { InjectionToken, ɵɵelement, ɵɵproperty, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵstyleProp, ɵɵadvance, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵinject, Injector, ComponentFactoryResolver, ApplicationRef, ɵɵdefineInjectable, Injectable, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵsanitizeHtml, ɵɵlistener, Input, ɵɵsetNgModuleScope, ɵɵsetComponentScope } from '@angular/core';
import { Subject } from 'rxjs';
import { NgClass, NgSwitch, NgSwitchCase, CommonModule, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { Dir } from '@angular/cdk/bidi';
import { CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
let globalCounter = 0;
class NzMessageBaseService {
    constructor(nzSingletonService, overlay, containerClass, injector, cfr, appRef, name = '') {
        this.nzSingletonService = nzSingletonService;
        this.overlay = overlay;
        this.containerClass = containerClass;
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.name = name;
        this._container = this.withContainer();
        this.nzSingletonService.registerSingletonWithKey(this.name, this._container);
    }
    remove(messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    }
    createMessage(message, options) {
        const resultMessage = Object.assign(Object.assign({}, message), {
            createdAt: new Date(),
            messageId: this._generateMessageId(),
            options
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    }
    config(config) {
        warnDeprecation(`'config' of 'NzMessageService' and 'NzNotificationService' is deprecated and will be removed in 9.0.0. Please use 'set' of 'NzConfigService' instead.`);
        this._container.setConfig(config);
    }
    _generateMessageId() {
        return `${this.name}-${globalCounter++}`;
    }
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    withContainer() {
        const containerInstance = this.nzSingletonService.getSingletonWithKey(this.name);
        if (containerInstance) {
            return containerInstance;
        }
        const factory = this.cfr.resolveComponentFactory(this.containerClass);
        const componentRef = factory.create(this.injector); // Use root injector
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView); // Load view into app root
        const overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild(componentRef.hostView.rootNodes[0]);
        return componentRef.instance;
    }
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_MESSAGE_DEFAULT_CONFIG = new InjectionToken('NZ_MESSAGE_DEFAULT_CONFIG');
/**
 * @deprecated 9.0.0 - Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.
 */
const NZ_MESSAGE_CONFIG = new InjectionToken('NZ_MESSAGE_CONFIG');
const NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER = {
    provide: NZ_MESSAGE_DEFAULT_CONFIG,
    useValue: {
        nzAnimate: true,
        nzDuration: 3000,
        nzMaxStack: 7,
        nzPauseOnHover: true,
        nzTop: 24
    }
};

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzMessageContainerComponent_nz_message_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-message", 2);
} if (rf & 2) {
    const message_r601 = ctx.$implicit;
    const i_r602 = ctx.index;
    ɵɵproperty("nzMessage", message_r601)("nzIndex", i_r602);
} }
const NZ_CONFIG_COMPONENT_NAME = 'message';
class NzMessageContainerComponent {
    constructor(cdr, nzConfigService, defaultConfig, config) {
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.messages = [];
        if (!!config) {
            warnDeprecation(`Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.`);
        }
        this.setConfig(Object.assign(Object.assign({}, defaultConfig), config));
    }
    ngOnInit() {
        this.subscribeConfigChange();
    }
    setConfig(config) {
        this.config = this.mergeMessageConfig(config);
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    }
    /**
     * Create a new message.
     * @param message Parsed message configuration.
     */
    createMessage(message) {
        if (this.messages.length >= this.config.nzMaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        message.onClose = new Subject();
        this.messages.push(message);
        this.cdr.detectChanges();
    }
    /**
     * Remove a message by `messageId`.
     * @param messageId Id of the message to be removed.
     * @param userAction Whether this is closed by user interaction.
     */
    removeMessage(messageId, userAction = false) {
        this.messages.some((message, index) => {
            if (message.messageId === messageId) {
                this.messages.splice(index, 1);
                this.cdr.detectChanges();
                message.onClose.next(userAction);
                message.onClose.complete();
                return true;
            }
            return false;
        });
    }
    /**
     * Remove all messages.
     */
    removeMessageAll() {
        this.messages = [];
        this.cdr.detectChanges();
    }
    subscribeConfigChange() {
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe(() => this.setConfig());
    }
    mergeMessageConfig(config) {
        return Object.assign(Object.assign(Object.assign({}, this.config), config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
    }
    /**
     * Merge default options and custom message options
     * @param options
     */
    _mergeMessageOptions(options) {
        const defaultOptions = {
            nzDuration: this.config.nzDuration,
            nzAnimate: this.config.nzAnimate,
            nzPauseOnHover: this.config.nzPauseOnHover
        };
        return Object.assign(Object.assign({}, defaultOptions), options);
    }
}
/** @nocollapse */ NzMessageContainerComponent.ɵfac = function NzMessageContainerComponent_Factory(t) { return new (t || NzMessageContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NZ_MESSAGE_DEFAULT_CONFIG, 8), ɵɵdirectiveInject(NZ_MESSAGE_CONFIG, 8)); };
/** @nocollapse */ NzMessageContainerComponent.ɵcmp = ɵɵdefineComponent({ type: NzMessageContainerComponent, selectors: [["nz-message-container"]], exportAs: ["nzMessageContainer"], decls: 2, vars: 2, consts: [[1, "ant-message"], [3, "nzMessage", "nzIndex", 4, "ngFor", "ngForOf"], [3, "nzMessage", "nzIndex"]], template: function NzMessageContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, NzMessageContainerComponent_nz_message_1_Template, 1, 2, "nz-message", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleProp("top", ctx.top);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.messages);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMessageContainerComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message-container',
                exportAs: 'nzMessageContainer',
                preserveWhitespaces: false,
                templateUrl: './nz-message-container.component.html'
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: NzConfigService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_MESSAGE_DEFAULT_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_MESSAGE_CONFIG]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMessageServiceModule {
}
/** @nocollapse */ NzMessageServiceModule.ɵmod = ɵɵdefineNgModule({ type: NzMessageServiceModule });
/** @nocollapse */ NzMessageServiceModule.ɵinj = ɵɵdefineInjector({ factory: function NzMessageServiceModule_Factory(t) { return new (t || NzMessageServiceModule)(); } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMessageServiceModule, [{
        type: NgModule
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMessageService extends NzMessageBaseService {
    constructor(nzSingletonService, overlay, injector, cfr, appRef) {
        super(nzSingletonService, overlay, NzMessageContainerComponent, injector, cfr, appRef, 'message');
    }
    // Shortcut methods
    success(content, options) {
        return this.createMessage({ type: 'success', content }, options);
    }
    error(content, options) {
        return this.createMessage({ type: 'error', content }, options);
    }
    info(content, options) {
        return this.createMessage({ type: 'info', content }, options);
    }
    warning(content, options) {
        return this.createMessage({ type: 'warning', content }, options);
    }
    loading(content, options) {
        return this.createMessage({ type: 'loading', content }, options);
    }
    create(type, content, options) {
        return this.createMessage({ type, content }, options);
    }
}
/** @nocollapse */ NzMessageService.ɵfac = function NzMessageService_Factory(t) { return new (t || NzMessageService)(ɵɵinject(NzSingletonService), ɵɵinject(Overlay), ɵɵinject(Injector), ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef)); };
/** @nocollapse */ NzMessageService.ɵprov = ɵɵdefineInjectable({ token: NzMessageService, factory: NzMessageService.ɵfac, providedIn: NzMessageServiceModule });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMessageService, [{
        type: Injectable,
        args: [{
                providedIn: NzMessageServiceModule
            }]
    }], function () { return [{ type: NzSingletonService }, { type: Overlay }, { type: Injector }, { type: ComponentFactoryResolver }, { type: ApplicationRef }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzMessageComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 10);
} }
function NzMessageComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 11);
} }
function NzMessageComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 12);
} }
function NzMessageComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 13);
} }
function NzMessageComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 14);
} }
function NzMessageComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 15);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r608 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r608.nzMessage.content, ɵɵsanitizeHtml);
} }
class NzMessageComponent {
    constructor(_messageContainer, cdr) {
        this._messageContainer = _messageContainer;
        this.cdr = cdr;
        this._eraseTimer = null;
    }
    ngOnInit() {
        // `NzMessageContainer` does its job so all properties cannot be undefined.
        this._options = this.nzMessage.options;
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'enter';
        }
        this._autoErase = this._options.nzDuration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
    }
    ngOnDestroy() {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    }
    onEnter() {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    }
    onLeave() {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._startEraseTimeout();
        }
    }
    // Remove self
    _destroy(userAction = false) {
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'leave';
            this.cdr.detectChanges();
            setTimeout(() => this._messageContainer.removeMessage(this.nzMessage.messageId, userAction), 200);
        }
        else {
            this._messageContainer.removeMessage(this.nzMessage.messageId, userAction);
        }
    }
    _initErase() {
        this._eraseTTL = this._options.nzDuration;
        this._eraseTimingStart = Date.now();
    }
    _updateTTL() {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    }
    _startEraseTimeout() {
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout();
            this._eraseTimer = setTimeout(() => this._destroy(), this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    }
    _clearEraseTimeout() {
        if (this._eraseTimer !== null) {
            clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    }
}
/** @nocollapse */ NzMessageComponent.ɵfac = function NzMessageComponent_Factory(t) { return new (t || NzMessageComponent)(ɵɵdirectiveInject(NzMessageContainerComponent), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzMessageComponent.ɵcmp = ɵɵdefineComponent({ type: NzMessageComponent, selectors: [["nz-message"]], inputs: { nzMessage: "nzMessage", nzIndex: "nzIndex" }, exportAs: ["nzMessage"], decls: 10, vars: 9, consts: [[1, "ant-message-notice", 3, "mouseenter", "mouseleave"], [1, "ant-message-notice-content"], [1, "ant-message-custom-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "loading", 4, "ngSwitchCase"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "check-circle"], ["nz-icon", "", "nzType", "info-circle"], ["nz-icon", "", "nzType", "exclamation-circle"], ["nz-icon", "", "nzType", "close-circle"], ["nz-icon", "", "nzType", "loading"], [3, "innerHTML"]], template: function NzMessageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("mouseenter", function NzMessageComponent_Template_div_mouseenter_0_listener($event) { return ctx.onEnter(); })("mouseleave", function NzMessageComponent_Template_div_mouseleave_0_listener($event) { return ctx.onLeave(); });
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementContainerStart(3, 3);
        ɵɵtemplate(4, NzMessageComponent_i_4_Template, 1, 0, "i", 4);
        ɵɵtemplate(5, NzMessageComponent_i_5_Template, 1, 0, "i", 5);
        ɵɵtemplate(6, NzMessageComponent_i_6_Template, 1, 0, "i", 6);
        ɵɵtemplate(7, NzMessageComponent_i_7_Template, 1, 0, "i", 7);
        ɵɵtemplate(8, NzMessageComponent_i_8_Template, 1, 0, "i", 8);
        ɵɵelementContainerEnd();
        ɵɵtemplate(9, NzMessageComponent_ng_container_9_Template, 2, 1, "ng-container", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("@moveUpMotion", ctx.nzMessage.state);
        ɵɵadvance(2);
        ɵɵproperty("ngClass", "ant-message-" + ctx.nzMessage.type);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitch", ctx.nzMessage.type);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "success");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "info");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "warning");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "error");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "loading");
        ɵɵadvance(1);
        ɵɵproperty("nzStringTemplateOutlet", ctx.nzMessage.content);
    } }, directives: [NgClass, NgSwitch, NgSwitchCase, NzStringTemplateOutletDirective, NzIconDirective], encapsulation: 2, data: { animation: [moveUpMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMessageComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message',
                exportAs: 'nzMessage',
                preserveWhitespaces: false,
                animations: [moveUpMotion],
                templateUrl: './nz-message.component.html'
            }]
    }], function () { return [{ type: NzMessageContainerComponent }, { type: ChangeDetectorRef }]; }, { nzMessage: [{
            type: Input
        }], nzIndex: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMessageModule {
}
/** @nocollapse */ NzMessageModule.ɵmod = ɵɵdefineNgModule({ type: NzMessageModule });
/** @nocollapse */ NzMessageModule.ɵinj = ɵɵdefineInjector({ factory: function NzMessageModule_Factory(t) { return new (t || NzMessageModule)(); }, providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER], imports: [[CommonModule, OverlayModule, NzIconModule, NzAddOnModule, NzMessageServiceModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzMessageModule, { declarations: [NzMessageContainerComponent, NzMessageComponent], imports: [CommonModule, OverlayModule, NzIconModule, NzAddOnModule, NzMessageServiceModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMessageModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, NzIconModule, NzAddOnModule, NzMessageServiceModule],
                declarations: [NzMessageContainerComponent, NzMessageComponent],
                providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER],
                entryComponents: [NzMessageContainerComponent]
            }]
    }], null, null); })();
ɵɵsetComponentScope(NzMessageContainerComponent, [NzMessageContainerComponent, NzMessageComponent, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, CdkConnectedOverlay, CdkOverlayOrigin, Dir, CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport, NzIconDirective, NzStringTemplateOutletDirective, NzClassListAddDirective], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NZ_MESSAGE_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER, NzMessageBaseService, NzMessageComponent, NzMessageContainerComponent, NzMessageModule, NzMessageService, NzMessageServiceModule };
//# sourceMappingURL=ng-zorro-antd-message.js.map
