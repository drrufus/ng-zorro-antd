import { InjectionToken, ɵɵelement, ɵɵproperty, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵInheritDefinitionFeature, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵclassMapInterpolate1, ɵɵstyleProp, ɵɵadvance, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, Inject, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵpureFunction1, ɵɵclassProp, ɵɵsanitizeHtml, ɵɵlistener, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵpureFunction2, Input, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope, ɵɵsetComponentScope, ɵɵinject, Injector, ComponentFactoryResolver, ApplicationRef, ɵɵdefineInjectable, Injectable } from '@angular/core';
import { __extends, __assign } from 'tslib';
import { warnDeprecation, toCssPixel, NzConfigService, NzStringTemplateOutletDirective, notificationMotion, NzAddOnModule, NzClassListAddDirective, NzSingletonService } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent, NzMessageComponent, NzMessageBaseService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { NgStyle, NgClass, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, CommonModule, NgComponentOutlet, NgForOf, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { Dir } from '@angular/cdk/bidi';
import { CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NZ_NOTIFICATION_DEFAULT_CONFIG = new InjectionToken('NZ_NOTIFICATION_DEFAULT_CONFIG');
var NZ_NOTIFICATION_CONFIG = new InjectionToken('NZ_NOTIFICATION_CONFIG');
var NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER = {
    provide: NZ_NOTIFICATION_DEFAULT_CONFIG,
    useValue: {
        nzTop: '24px',
        nzBottom: '24px',
        nzPlacement: 'topRight',
        nzDuration: 4500,
        nzMaxStack: 7,
        nzPauseOnHover: true,
        nzAnimate: true
    }
};

function NzNotificationContainerComponent_nz_notification_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-notification", 1);
} if (rf & 2) {
    var message_r1372 = ctx.$implicit;
    var i_r1373 = ctx.index;
    ɵɵproperty("nzMessage", message_r1372)("nzIndex", i_r1373);
} }
var NZ_CONFIG_COMPONENT_NAME = 'notification';
var NzNotificationContainerComponent = /** @class */ (function (_super) {
    __extends(NzNotificationContainerComponent, _super);
    function NzNotificationContainerComponent(cdr, nzConfigService, defaultConfig, config) {
        var _this = _super.call(this, cdr, nzConfigService, defaultConfig, config) || this;
        /**
         * @override
         */
        _this.messages = [];
        if (!!config) {
            warnDeprecation("Injection token 'NZ_NOTIFICATION_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.");
        }
        return _this;
    }
    /**
     * @override
     */
    NzNotificationContainerComponent.prototype.setConfig = function (config) {
        var newConfig = (this.config = __assign(__assign(__assign({}, this.config), config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)));
        var placement = this.config.nzPlacement;
        this.top = placement === 'topLeft' || placement === 'topRight' ? toCssPixel(newConfig.nzTop) : null;
        this.bottom = placement === 'bottomLeft' || placement === 'bottomRight' ? toCssPixel(newConfig.nzBottom) : null;
        this.cdr.markForCheck();
    };
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param notification
     */
    NzNotificationContainerComponent.prototype.createMessage = function (notification) {
        notification.options = this._mergeMessageOptions(notification.options);
        notification.onClose = new Subject();
        var key = notification.options.nzKey;
        var notificationWithSameKey = this.messages.find(function (msg) { return msg.options.nzKey === notification.options.nzKey; });
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, notification);
        }
        else {
            if (this.messages.length >= this.config.nzMaxStack) {
                this.messages.splice(0, 1);
            }
            this.messages.push(notification);
        }
        this.cdr.detectChanges();
    };
    /**
     * @override
     */
    NzNotificationContainerComponent.prototype.subscribeConfigChange = function () {
        var _this = this;
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe(function () { return _this.setConfig(); });
    };
    NzNotificationContainerComponent.prototype.replaceNotification = function (old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
    };
    /** @nocollapse */ NzNotificationContainerComponent.ɵfac = function NzNotificationContainerComponent_Factory(t) { return new (t || NzNotificationContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NZ_NOTIFICATION_DEFAULT_CONFIG, 8), ɵɵdirectiveInject(NZ_NOTIFICATION_CONFIG, 8)); };
    /** @nocollapse */ NzNotificationContainerComponent.ɵcmp = ɵɵdefineComponent({ type: NzNotificationContainerComponent, selectors: [["nz-notification-container"]], exportAs: ["nzNotificationContainer"], features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 8, consts: [[3, "nzMessage", "nzIndex", 4, "ngFor", "ngForOf"], [3, "nzMessage", "nzIndex"]], template: function NzNotificationContainerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div");
            ɵɵtemplate(1, NzNotificationContainerComponent_nz_notification_1_Template, 1, 2, "nz-notification", 0);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassMapInterpolate1("ant-notification ant-notification-", ctx.config.nzPlacement, "");
            ɵɵstyleProp("top", ctx.config.nzPlacement === "topLeft" || ctx.config.nzPlacement === "topRight" ? ctx.top : null)("bottom", ctx.config.nzPlacement === "bottomLeft" || ctx.config.nzPlacement === "bottomRight" ? ctx.bottom : null)("right", ctx.config.nzPlacement === "bottomRight" || ctx.config.nzPlacement === "topRight" ? "0px" : null)("left", ctx.config.nzPlacement === "topLeft" || ctx.config.nzPlacement === "bottomLeft" ? "0px" : null);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.messages);
        } }, encapsulation: 2, changeDetection: 0 });
    return NzNotificationContainerComponent;
}(NzMessageContainerComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzNotificationContainerComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification-container',
                exportAs: 'nzNotificationContainer',
                preserveWhitespaces: false,
                templateUrl: './nz-notification-container.component.html'
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: NzConfigService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_NOTIFICATION_DEFAULT_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_NOTIFICATION_CONFIG]
            }] }]; }, null); })();

function NzNotificationComponent_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 16);
} }
function NzNotificationComponent_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 17);
} }
function NzNotificationComponent_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 18);
} }
function NzNotificationComponent_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 19);
} }
var _c0 = function (a0) { return { "ant-notification-notice-with-icon": a0 }; };
function NzNotificationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelementStart(1, "div", 8);
    ɵɵelementStart(2, "div");
    ɵɵelementContainerStart(3, 9);
    ɵɵtemplate(4, NzNotificationComponent_div_1_i_4_Template, 1, 0, "i", 10);
    ɵɵtemplate(5, NzNotificationComponent_div_1_i_5_Template, 1, 0, "i", 11);
    ɵɵtemplate(6, NzNotificationComponent_div_1_i_6_Template, 1, 0, "i", 12);
    ɵɵtemplate(7, NzNotificationComponent_div_1_i_7_Template, 1, 0, "i", 13);
    ɵɵelementContainerEnd();
    ɵɵelement(8, "div", 14);
    ɵɵelement(9, "div", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1374 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c0, ctx_r1374.nzMessage.type !== "blank"));
    ɵɵadvance(1);
    ɵɵclassProp("ant-notification-notice-with-icon", ctx_r1374.nzMessage.type !== "blank");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", ctx_r1374.nzMessage.type);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "success");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "info");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "warning");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "error");
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r1374.nzMessage.title, ɵɵsanitizeHtml);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r1374.nzMessage.content, ɵɵsanitizeHtml);
} }
function NzNotificationComponent_ng_template_2_Template(rf, ctx) { }
function NzNotificationComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "i", 21);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1383 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzType", ctx_r1383.nzMessage.options == null ? null : ctx_r1383.nzMessage.options.nzCloseIcon);
} }
function NzNotificationComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzNotificationComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 20);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1376 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1376.nzMessage.options == null ? null : ctx_r1376.nzMessage.options.nzCloseIcon);
} }
function NzNotificationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 22);
} }
var _c1 = function (a0, a1) { return { $implicit: a0, data: a1 }; };
var NzNotificationComponent = /** @class */ (function (_super) {
    __extends(NzNotificationComponent, _super);
    function NzNotificationComponent(container, cdr) {
        var _this = _super.call(this, container, cdr) || this;
        _this.container = container;
        _this.cdr = cdr;
        return _this;
    }
    NzNotificationComponent.prototype.close = function () {
        this._destroy(true);
    };
    Object.defineProperty(NzNotificationComponent.prototype, "state", {
        get: function () {
            if (this.nzMessage.state === 'enter') {
                if (this.container.config.nzPlacement === 'topLeft' || this.container.config.nzPlacement === 'bottomLeft') {
                    return 'enterLeft';
                }
                else {
                    return 'enterRight';
                }
            }
            else {
                return this.nzMessage.state;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ NzNotificationComponent.ɵfac = function NzNotificationComponent_Factory(t) { return new (t || NzNotificationComponent)(ɵɵdirectiveInject(NzNotificationContainerComponent), ɵɵdirectiveInject(ChangeDetectorRef)); };
    /** @nocollapse */ NzNotificationComponent.ɵcmp = ɵɵdefineComponent({ type: NzNotificationComponent, selectors: [["nz-notification"]], inputs: { nzMessage: "nzMessage" }, exportAs: ["nzNotification"], features: [ɵɵInheritDefinitionFeature], decls: 8, vars: 12, consts: [[1, "ant-notification-notice", "ant-notification-notice-closable", 3, "ngStyle", "ngClass", "mouseenter", "mouseleave"], ["class", "ant-notification-notice-content", 4, "ngIf"], [3, "ngIf", "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 1, "ant-notification-notice-close", 3, "click"], [1, "ant-notification-notice-close-x"], [4, "ngIf", "ngIfElse"], ["iconTpl", ""], [1, "ant-notification-notice-content"], [1, "ant-notification-notice-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-success", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-info", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-warning", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-error", 4, "ngSwitchCase"], [1, "ant-notification-notice-message", 3, "innerHTML"], [1, "ant-notification-notice-description", 3, "innerHTML"], ["nz-icon", "", "nzType", "check-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-success"], ["nz-icon", "", "nzType", "info-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-info"], ["nz-icon", "", "nzType", "exclamation-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-warning"], ["nz-icon", "", "nzType", "close-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-error"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "close", 1, "ant-notification-close-icon"]], template: function NzNotificationComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵlistener("mouseenter", function NzNotificationComponent_Template_div_mouseenter_0_listener($event) { return ctx.onEnter(); })("mouseleave", function NzNotificationComponent_Template_div_mouseleave_0_listener($event) { return ctx.onLeave(); });
            ɵɵtemplate(1, NzNotificationComponent_div_1_Template, 10, 11, "div", 1);
            ɵɵtemplate(2, NzNotificationComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
            ɵɵelementStart(3, "a", 3);
            ɵɵlistener("click", function NzNotificationComponent_Template_a_click_3_listener($event) { return ctx.close(); });
            ɵɵelementStart(4, "span", 4);
            ɵɵtemplate(5, NzNotificationComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
            ɵɵtemplate(6, NzNotificationComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r1377 = ɵɵreference(7);
            ɵɵproperty("ngStyle", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzStyle)("ngClass", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzClass)("@notificationMotion", ctx.state);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.nzMessage.template);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzMessage.template)("ngTemplateOutlet", ctx.nzMessage.template)("ngTemplateOutletContext", ɵɵpureFunction2(9, _c1, ctx, ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzData));
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzCloseIcon)("ngIfElse", _r1377);
        } }, directives: [NgStyle, NgClass, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, NzIconDirective, NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [notificationMotion] } });
    return NzNotificationComponent;
}(NzMessageComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzNotificationComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification',
                exportAs: 'nzNotification',
                preserveWhitespaces: false,
                animations: [notificationMotion],
                templateUrl: './nz-notification.component.html'
            }]
    }], function () { return [{ type: NzNotificationContainerComponent }, { type: ChangeDetectorRef }]; }, { nzMessage: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzNotificationServiceModule = /** @class */ (function () {
    function NzNotificationServiceModule() {
    }
    /** @nocollapse */ NzNotificationServiceModule.ɵmod = ɵɵdefineNgModule({ type: NzNotificationServiceModule });
    /** @nocollapse */ NzNotificationServiceModule.ɵinj = ɵɵdefineInjector({ factory: function NzNotificationServiceModule_Factory(t) { return new (t || NzNotificationServiceModule)(); } });
    return NzNotificationServiceModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzNotificationServiceModule, [{
        type: NgModule
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzNotificationModule = /** @class */ (function () {
    function NzNotificationModule() {
    }
    /** @nocollapse */ NzNotificationModule.ɵmod = ɵɵdefineNgModule({ type: NzNotificationModule });
    /** @nocollapse */ NzNotificationModule.ɵinj = ɵɵdefineInjector({ factory: function NzNotificationModule_Factory(t) { return new (t || NzNotificationModule)(); }, providers: [NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER], imports: [[CommonModule, OverlayModule, NzIconModule, NzNotificationServiceModule, NzAddOnModule]] });
    return NzNotificationModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzNotificationModule, { declarations: [NzNotificationComponent, NzNotificationContainerComponent], imports: [CommonModule, OverlayModule, NzIconModule, NzNotificationServiceModule, NzAddOnModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzNotificationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, NzIconModule, NzNotificationServiceModule, NzAddOnModule],
                declarations: [NzNotificationComponent, NzNotificationContainerComponent],
                providers: [NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER],
                entryComponents: [NzNotificationContainerComponent]
            }]
    }], null, null); })();
ɵɵsetComponentScope(NzNotificationContainerComponent, [NzNotificationComponent, NzNotificationContainerComponent, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, CdkConnectedOverlay, CdkOverlayOrigin, Dir, CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport, NzIconDirective, NzStringTemplateOutletDirective, NzClassListAddDirective], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);

var NzNotificationService = /** @class */ (function (_super) {
    __extends(NzNotificationService, _super);
    function NzNotificationService(nzSingletonService, overlay, injector, cfr, appRef) {
        return _super.call(this, nzSingletonService, overlay, NzNotificationContainerComponent, injector, cfr, appRef, 'notification-') || this;
    }
    // Shortcut methods
    NzNotificationService.prototype.success = function (title, content, options) {
        return this.createMessage({ type: 'success', title: title, content: content }, options);
    };
    NzNotificationService.prototype.error = function (title, content, options) {
        return this.createMessage({ type: 'error', title: title, content: content }, options);
    };
    NzNotificationService.prototype.info = function (title, content, options) {
        return this.createMessage({ type: 'info', title: title, content: content }, options);
    };
    NzNotificationService.prototype.warning = function (title, content, options) {
        return this.createMessage({ type: 'warning', title: title, content: content }, options);
    };
    NzNotificationService.prototype.blank = function (title, content, options) {
        return this.createMessage({ type: 'blank', title: title, content: content }, options);
    };
    NzNotificationService.prototype.create = function (type, title, content, options) {
        return this.createMessage({ type: type, title: title, content: content }, options);
    };
    // For content with template
    NzNotificationService.prototype.template = function (template, options) {
        return this.createMessage({ template: template }, options);
    };
    /** @nocollapse */ NzNotificationService.ɵfac = function NzNotificationService_Factory(t) { return new (t || NzNotificationService)(ɵɵinject(NzSingletonService), ɵɵinject(Overlay), ɵɵinject(Injector), ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef)); };
    /** @nocollapse */ NzNotificationService.ɵprov = ɵɵdefineInjectable({ token: NzNotificationService, factory: NzNotificationService.ɵfac, providedIn: NzNotificationServiceModule });
    return NzNotificationService;
}(NzMessageBaseService));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzNotificationService, [{
        type: Injectable,
        args: [{
                providedIn: NzNotificationServiceModule
            }]
    }], function () { return [{ type: NzSingletonService }, { type: Overlay }, { type: Injector }, { type: ComponentFactoryResolver }, { type: ApplicationRef }]; }, null); })();

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

export { NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER, NzNotificationComponent, NzNotificationContainerComponent, NzNotificationModule, NzNotificationService, NzNotificationServiceModule };
//# sourceMappingURL=ng-zorro-antd-notification.js.map
