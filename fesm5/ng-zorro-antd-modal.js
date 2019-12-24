import { __extends, __assign, __decorate, __metadata } from 'tslib';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { ESCAPE } from '@angular/cdk/keycodes';
import { OverlayRef, Overlay, OverlayKeyboardDispatcher, OverlayModule } from '@angular/cdk/overlay';
import { DOCUMENT, NgIf, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgTemplateOutlet, NgSwitchDefault, NgForOf, CommonModule } from '@angular/common';
import { InjectionToken, ɵɵdefineNgModule, ɵɵdefineInjector, ɵsetClassMetadata, NgModule, ɵɵinject, ɵɵdefineInjectable, Injectable, Optional, SkipSelf, ɵɵdirectiveInject, TemplateRef, ɵɵdefineDirective, Directive, ɵɵprojection, ɵɵelement, ɵɵnextContext, ɵɵstyleProp, ɵɵclassProp, ɵɵproperty, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵadvance, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵtemplate, ɵɵelementEnd, ɵɵattribute, ɵɵelementContainer, ɵɵreference, ɵɵsanitizeHtml, ɵɵtext, ɵɵtextInterpolate1, EventEmitter, Type, Injector, ComponentFactoryResolver, ElementRef, ViewContainerRef, ChangeDetectorRef, ɵɵdefineComponent, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵstaticViewQuery, ɵɵviewQuery, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵtemplateRefExtractor, ɵɵpipe, ɵɵclassMapInterpolate1, ɵɵpipeBind1, Component, ChangeDetectionStrategy, Inject, Input, Output, ViewChild, ContentChild, ɵɵsetNgModuleScope } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { warnDeprecation, isPromise, getElementOffset, NzConfigService, NzNoAnimationDirective, NzStringTemplateOutletDirective, NzToCssUnitPipe, InputBoolean, WithConfig, NzAddOnModule, NzPipesModule, NzNoAnimationModule, warn } from 'ng-zorro-antd/core';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { ComponentPortal } from '@angular/cdk/portal';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NZ_MODAL_CONFIG = new InjectionToken('NZ_MODAL_CONFIG');

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzModalControlServiceModule = /** @class */ (function () {
    function NzModalControlServiceModule() {
    }
    /** @nocollapse */ NzModalControlServiceModule.ɵmod = ɵɵdefineNgModule({ type: NzModalControlServiceModule });
    /** @nocollapse */ NzModalControlServiceModule.ɵinj = ɵɵdefineInjector({ factory: function NzModalControlServiceModule_Factory(t) { return new (t || NzModalControlServiceModule)(); } });
    return NzModalControlServiceModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzModalControlServiceModule, [{
        type: NgModule
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzModalControlService = /** @class */ (function () {
    function NzModalControlService(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    Object.defineProperty(NzModalControlService.prototype, "afterAllClose", {
        // Track singleton afterAllClose through over the injection tree
        get: function () {
            return this.parentService ? this.parentService.afterAllClose : this.rootAfterAllClose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalControlService.prototype, "openModals", {
        // Track singleton openModals array through over the injection tree
        get: function () {
            return this.parentService ? this.parentService.openModals : this.rootOpenModals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalControlService.prototype, "registeredMetaMap", {
        get: function () {
            // Registered modal for later usage
            return this.parentService ? this.parentService.registeredMetaMap : this.rootRegisteredMetaMap;
        },
        enumerable: true,
        configurable: true
    });
    // Register a modal to listen its open/close
    NzModalControlService.prototype.registerModal = function (modalRef) {
        var _this = this;
        if (!this.hasRegistered(modalRef)) {
            var afterOpenSubscription = modalRef.afterOpen.subscribe(function () { return _this.openModals.push(modalRef); });
            var afterCloseSubscription = modalRef.afterClose.subscribe(function () { return _this.removeOpenModal(modalRef); });
            this.registeredMetaMap.set(modalRef, { modalRef: modalRef, afterOpenSubscription: afterOpenSubscription, afterCloseSubscription: afterCloseSubscription });
        }
    };
    // deregister modals
    NzModalControlService.prototype.deregisterModal = function (modalRef) {
        var registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    };
    NzModalControlService.prototype.hasRegistered = function (modalRef) {
        return this.registeredMetaMap.has(modalRef);
    };
    // Close all registered opened modals
    NzModalControlService.prototype.closeAll = function () {
        var i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    };
    NzModalControlService.prototype.removeOpenModal = function (modalRef) {
        var index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    };
    /** @nocollapse */ NzModalControlService.ɵfac = function NzModalControlService_Factory(t) { return new (t || NzModalControlService)(ɵɵinject(NzModalControlService, 12)); };
    /** @nocollapse */ NzModalControlService.ɵprov = ɵɵdefineInjectable({ token: NzModalControlService, factory: NzModalControlService.ɵfac, providedIn: NzModalControlServiceModule });
    return NzModalControlService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzModalControlService, [{
        type: Injectable,
        args: [{
                providedIn: NzModalControlServiceModule
            }]
    }], function () { return [{ type: NzModalControlService, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 */
// tslint:disable-next-line:no-any
var NzModalRef = /** @class */ (function () {
    function NzModalRef() {
    }
    return NzModalRef;
}());

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzModalFooterDirective = /** @class */ (function () {
    function NzModalFooterDirective(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.getInstance().setFooterWithTemplate(this.templateRef);
        }
    }
    /** @nocollapse */ NzModalFooterDirective.ɵfac = function NzModalFooterDirective_Factory(t) { return new (t || NzModalFooterDirective)(ɵɵdirectiveInject(NzModalRef, 8), ɵɵdirectiveInject(TemplateRef)); };
    /** @nocollapse */ NzModalFooterDirective.ɵdir = ɵɵdefineDirective({ type: NzModalFooterDirective, selectors: [["", "nzModalFooter", ""]], exportAs: ["nzModalFooter"] });
    return NzModalFooterDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzModalFooterDirective, [{
        type: Directive,
        args: [{
                selector: '[nzModalFooter]',
                exportAs: 'nzModalFooter'
            }]
    }], function () { return [{ type: NzModalRef, decorators: [{
                type: Optional
            }] }, { type: TemplateRef }]; }, null); })();

var _c0 = ["modalContainer"];
var _c1 = ["bodyContainer"];
var _c2 = ["autoFocusButtonOk"];
function NzModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
function NzModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 11);
} if (rf & 2) {
    var ctx_r1308 = ɵɵnextContext();
    ɵɵstyleProp("z-index", ctx_r1308.nzZIndex);
    ɵɵclassProp("ant-modal-mask-hidden", ctx_r1308.hidden);
    ɵɵproperty("ngClass", ctx_r1308.maskAnimationClassMap)("ngStyle", ctx_r1308.nzMaskStyle);
} }
function NzModalComponent_button_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "i", 15);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1316 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzType", ctx_r1316.nzCloseIcon);
} }
function NzModalComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r1318 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function NzModalComponent_button_9_Template_button_click_0_listener($event) { ɵɵrestoreView(_r1318); var ctx_r1317 = ɵɵnextContext(); return ctx_r1317.onClickCloseBtn(); });
    ɵɵelementStart(1, "span", 13);
    ɵɵtemplate(2, NzModalComponent_button_9_ng_container_2_Template, 2, 1, "ng-container", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1310 = ɵɵnextContext();
    ɵɵattribute("aria-label", ctx_r1310.nzAriaLabel);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1310.nzCloseIcon);
} }
function NzModalComponent_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 18);
} if (rf & 2) {
    ɵɵnextContext(2);
    var _r1312 = ɵɵreference(12);
    ɵɵproperty("ngTemplateOutlet", _r1312);
} }
function NzModalComponent_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 18);
} if (rf & 2) {
    ɵɵnextContext(2);
    var _r1314 = ɵɵreference(14);
    ɵɵproperty("ngTemplateOutlet", _r1314);
} }
function NzModalComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 16);
    ɵɵtemplate(1, NzModalComponent_ng_container_10_ng_container_1_Template, 1, 1, "ng-container", 17);
    ɵɵtemplate(2, NzModalComponent_ng_container_10_ng_container_2_Template, 1, 1, "ng-container", 17);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1311 = ɵɵnextContext();
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1311.isModalType("default"));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1311.isModalType("confirm"));
} }
function NzModalComponent_ng_template_11_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 18);
} if (rf & 2) {
    var ctx_r1325 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1325.nzTitle);
} }
function NzModalComponent_ng_template_11_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 26);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1326 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r1326.nzTitle, ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵelementStart(1, "div", 24);
    ɵɵelementContainerStart(2, 16);
    ɵɵtemplate(3, NzModalComponent_ng_template_11_div_0_ng_container_3_Template, 1, 1, "ng-container", 17);
    ɵɵtemplate(4, NzModalComponent_ng_template_11_div_0_ng_container_4_Template, 2, 1, "ng-container", 25);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1321 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1321.isTemplateRef(ctx_r1321.nzTitle));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1321.isNonEmptyString(ctx_r1321.nzTitle));
} }
function NzModalComponent_ng_template_11_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 18);
} if (rf & 2) {
    var ctx_r1327 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1327.nzContent);
} }
function NzModalComponent_ng_template_11_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 26);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1328 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r1328.nzContent, ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_11_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 18);
} if (rf & 2) {
    ɵɵnextContext(3);
    var _r1306 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", _r1306);
} }
function NzModalComponent_ng_template_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 16);
    ɵɵtemplate(1, NzModalComponent_ng_template_11_ng_container_4_ng_container_1_Template, 1, 1, "ng-container", 17);
    ɵɵtemplate(2, NzModalComponent_ng_template_11_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 25);
    ɵɵtemplate(3, NzModalComponent_ng_template_11_ng_container_4_ng_container_3_Template, 1, 1, "ng-container", 27);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1323 = ɵɵnextContext(2);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1323.isTemplateRef(ctx_r1323.nzContent));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1323.isNonEmptyString(ctx_r1323.nzContent));
} }
function NzModalComponent_ng_template_11_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 18);
} if (rf & 2) {
    var ctx_r1330 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1330.nzFooter);
} }
function NzModalComponent_ng_template_11_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 26);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1331 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r1331.nzFooter, ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r1337 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 31);
    ɵɵlistener("click", function NzModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template_button_click_0_listener($event) { ɵɵrestoreView(_r1337); var button_r1335 = ctx.$implicit; var ctx_r1336 = ɵɵnextContext(4); return ctx_r1336.onButtonClick(button_r1335); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var button_r1335 = ctx.$implicit;
    var ctx_r1334 = ɵɵnextContext(4);
    ɵɵproperty("hidden", !ctx_r1334.getButtonCallableProp(button_r1335, "show"))("nzLoading", ctx_r1334.getButtonCallableProp(button_r1335, "loading"))("disabled", ctx_r1334.getButtonCallableProp(button_r1335, "disabled"))("nzType", button_r1335.type)("nzShape", button_r1335.shape)("nzSize", button_r1335.size)("nzGhost", button_r1335.ghost);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", button_r1335.label, " ");
} }
function NzModalComponent_ng_template_11_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template, 2, 8, "button", 30);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1332 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1332.nzFooter);
} }
function NzModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r1341 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 34);
    ɵɵlistener("click", function NzModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template_button_click_0_listener($event) { ɵɵrestoreView(_r1341); var ctx_r1340 = ɵɵnextContext(4); return ctx_r1340.onClickOkCancel("cancel"); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1338 = ɵɵnextContext(4);
    ɵɵproperty("nzLoading", ctx_r1338.nzCancelLoading)("disabled", ctx_r1338.nzCancelDisabled);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1338.cancelText, " ");
} }
function NzModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r1343 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 35);
    ɵɵlistener("click", function NzModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template_button_click_0_listener($event) { ɵɵrestoreView(_r1343); var ctx_r1342 = ɵɵnextContext(4); return ctx_r1342.onClickOkCancel("ok"); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1339 = ɵɵnextContext(4);
    ɵɵproperty("nzType", ctx_r1339.nzOkType)("nzLoading", ctx_r1339.nzOkLoading)("disabled", ctx_r1339.nzOkDisabled);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1339.okText, " ");
} }
function NzModalComponent_ng_template_11_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template, 2, 3, "button", 32);
    ɵɵtemplate(2, NzModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template, 2, 4, "button", 33);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1333 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1333.nzCancelText !== null);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1333.nzOkText !== null);
} }
function NzModalComponent_ng_template_11_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵelementContainerStart(1, 16);
    ɵɵtemplate(2, NzModalComponent_ng_template_11_div_5_ng_container_2_Template, 1, 1, "ng-container", 17);
    ɵɵtemplate(3, NzModalComponent_ng_template_11_div_5_ng_container_3_Template, 2, 1, "ng-container", 25);
    ɵɵtemplate(4, NzModalComponent_ng_template_11_div_5_ng_container_4_Template, 2, 1, "ng-container", 25);
    ɵɵtemplate(5, NzModalComponent_ng_template_11_div_5_ng_container_5_Template, 3, 2, "ng-container", 29);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1324 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1324.isTemplateRef(ctx_r1324.nzFooter));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1324.isNonEmptyString(ctx_r1324.nzFooter));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1324.isModalButtons(ctx_r1324.nzFooter));
} }
function NzModalComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzModalComponent_ng_template_11_div_0_Template, 5, 3, "div", 19);
    ɵɵelementStart(1, "div", 20);
    ɵɵelementContainerStart(2, null, 21);
    ɵɵtemplate(4, NzModalComponent_ng_template_11_ng_container_4_Template, 4, 3, "ng-container", 8);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
    ɵɵtemplate(5, NzModalComponent_ng_template_11_div_5_Template, 6, 4, "div", 22);
} if (rf & 2) {
    var ctx_r1313 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1313.nzTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r1313.nzBodyStyle);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !ctx_r1313.isComponent(ctx_r1313.nzContent));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1313.nzFooter !== null);
} }
function NzModalComponent_ng_template_13_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 18);
} if (rf & 2) {
    var ctx_r1344 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1344.nzTitle);
} }
function NzModalComponent_ng_template_13_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 26);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1345 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r1345.nzTitle, ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_13_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 18);
} if (rf & 2) {
    var ctx_r1350 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1350.nzContent);
} }
function NzModalComponent_ng_template_13_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 26);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1351 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r1351.nzContent, ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_13_ng_container_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 18);
} if (rf & 2) {
    ɵɵnextContext(3);
    var _r1306 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", _r1306);
} }
function NzModalComponent_ng_template_13_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 16);
    ɵɵtemplate(1, NzModalComponent_ng_template_13_ng_container_11_ng_container_1_Template, 1, 1, "ng-container", 17);
    ɵɵtemplate(2, NzModalComponent_ng_template_13_ng_container_11_ng_container_2_Template, 2, 1, "ng-container", 25);
    ɵɵtemplate(3, NzModalComponent_ng_template_13_ng_container_11_ng_container_3_Template, 1, 1, "ng-container", 27);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1347 = ɵɵnextContext(2);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1347.isTemplateRef(ctx_r1347.nzContent));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1347.isNonEmptyString(ctx_r1347.nzContent));
} }
function NzModalComponent_ng_template_13_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r1354 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 34);
    ɵɵlistener("click", function NzModalComponent_ng_template_13_button_13_Template_button_click_0_listener($event) { ɵɵrestoreView(_r1354); var ctx_r1353 = ɵɵnextContext(2); return ctx_r1353.onClickOkCancel("cancel"); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1348 = ɵɵnextContext(2);
    ɵɵproperty("nzLoading", ctx_r1348.nzCancelLoading)("disabled", ctx_r1348.nzCancelDisabled);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1348.cancelText, " ");
} }
function NzModalComponent_ng_template_13_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r1357 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 35, 42);
    ɵɵlistener("click", function NzModalComponent_ng_template_13_button_14_Template_button_click_0_listener($event) { ɵɵrestoreView(_r1357); var ctx_r1356 = ɵɵnextContext(2); return ctx_r1356.onClickOkCancel("ok"); });
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1349 = ɵɵnextContext(2);
    ɵɵproperty("nzType", ctx_r1349.nzOkType)("nzLoading", ctx_r1349.nzOkLoading)("disabled", ctx_r1349.nzOkDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1349.okText, " ");
} }
function NzModalComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵelementStart(1, "div", 36);
    ɵɵelementStart(2, "div", 37);
    ɵɵelement(3, "i", 38);
    ɵɵelementStart(4, "span", 39);
    ɵɵelementContainerStart(5, 16);
    ɵɵtemplate(6, NzModalComponent_ng_template_13_ng_container_6_Template, 1, 1, "ng-container", 17);
    ɵɵtemplate(7, NzModalComponent_ng_template_13_ng_container_7_Template, 2, 1, "ng-container", 25);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 40);
    ɵɵelementContainerStart(9, null, 21);
    ɵɵtemplate(11, NzModalComponent_ng_template_13_ng_container_11_Template, 4, 3, "ng-container", 8);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(12, "div", 41);
    ɵɵtemplate(13, NzModalComponent_ng_template_13_button_13_Template, 2, 3, "button", 32);
    ɵɵtemplate(14, NzModalComponent_ng_template_13_button_14_Template, 3, 4, "button", 33);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1315 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r1315.nzBodyStyle);
    ɵɵadvance(3);
    ɵɵproperty("nzType", ctx_r1315.nzIconType);
    ɵɵadvance(2);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1315.isTemplateRef(ctx_r1315.nzTitle));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r1315.isNonEmptyString(ctx_r1315.nzTitle));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", !ctx_r1315.isComponent(ctx_r1315.nzContent));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1315.nzCancelText !== null);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1315.nzOkText !== null);
} }
var _c3 = ["*"];
var MODAL_ANIMATE_DURATION = 200; // Duration when perform animations (ms)
var WRAP_CLASS_NAME = 'ant-modal-wrap';
var NZ_CONFIG_COMPONENT_NAME = 'modal';
var NzModalComponent = /** @class */ (function (_super) {
    __extends(NzModalComponent, _super);
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
        _this.nzGetContainer = function () { return _this.overlay.create(); }; // [STATIC]
        _this.nzZIndex = 1000;
        _this.nzWidth = 520;
        _this.nzCloseIcon = 'close';
        _this.nzOkType = 'primary';
        _this.nzIconType = 'question-circle'; // Confirm Modal ONLY
        _this.nzModalType = 'default';
        _this.nzAriaLabel = 'Close';
        _this.nzOnOk = new EventEmitter();
        _this.nzOnCancel = new EventEmitter();
        _this.nzAfterOpen = new EventEmitter(); // Trigger when modal open(visible) after animations
        _this.nzAfterClose = new EventEmitter(); // Trigger when modal leave-animation over
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
        set: function (value) {
            if (value && value.templateRef) {
                this.setFooterWithTemplate(value.templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "afterOpen", {
        get: function () {
            // Observable alias for nzAfterOpen
            return this.nzAfterOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "afterClose", {
        get: function () {
            // Observable alias for nzAfterClose
            return this.nzAfterClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "cancelText", {
        get: function () {
            return this.nzCancelText || this.locale.cancelText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "okText", {
        get: function () {
            return this.nzOkText || this.locale.okText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "hidden", {
        get: function () {
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
        get: function () {
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
        get: function () {
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
    NzModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Modal');
        });
        if (this.isComponent(this.nzContent)) {
            this.createDynamicComponent(this.nzContent); // Create component along without View
        }
        if (this.isModalButtons(this.nzFooter)) {
            // Setup default button options
            this.nzFooter = this.formatModalButtons(this.nzFooter);
        }
        // Place the modal dom to elsewhere
        this.container = typeof this.nzGetContainer === 'function' ? this.nzGetContainer() : this.nzGetContainer;
        if (this.container instanceof HTMLElement) {
            this.container.appendChild(this.elementRef.nativeElement);
            fromEvent(this.document.body, 'keydown')
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(function (e) { return _this.keydownListener(e); });
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
                .subscribe(function (e) { return _this.keydownListener(e); });
        }
        // Register modal when afterOpen/afterClose is stable
        this.modalControl.registerModal(this);
    };
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "nzContent"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "nzContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    NzModalComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzVisible) {
            this.handleVisibleStateChange(this.nzVisible, !changes.nzVisible.firstChange); // Do not trigger animation while initializing
        }
    };
    NzModalComponent.prototype.ngAfterViewInit = function () {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            this.autoFocusButtonOk.nativeElement.focus();
        }
    };
    NzModalComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        // Close self before destructing
        this.changeVisibleFromInside(false).then(function () {
            _this.modalControl.deregisterModal(_this);
            if (_this.container instanceof OverlayRef) {
                _this.container.dispose();
            }
            _this.unsubscribe$.next();
            _this.unsubscribe$.complete();
        });
        clearTimeout(this.timeoutId);
    };
    NzModalComponent.prototype.setFooterWithTemplate = function (templateRef) {
        this.nzFooter = templateRef;
        this.cdr.markForCheck();
    };
    NzModalComponent.prototype.setOverlayRef = function (overlayRef) {
        this.overlayRef = overlayRef;
    };
    NzModalComponent.prototype.keydownListener = function (event) {
        if (event.keyCode === ESCAPE && this.nzKeyboard) {
            this.onClickOkCancel('cancel');
        }
    };
    NzModalComponent.prototype.open = function () {
        this.changeVisibleFromInside(true);
    };
    NzModalComponent.prototype.close = function (result) {
        this.changeVisibleFromInside(false, result);
    };
    NzModalComponent.prototype.destroy = function (result) {
        // Destroy equals Close
        this.close(result);
    };
    NzModalComponent.prototype.triggerOk = function () {
        this.onClickOkCancel('ok');
    };
    NzModalComponent.prototype.triggerCancel = function () {
        this.onClickOkCancel('cancel');
    };
    NzModalComponent.prototype.getInstance = function () {
        return this;
    };
    NzModalComponent.prototype.getContentComponentRef = function () {
        return this.contentComponentRef;
    };
    NzModalComponent.prototype.getContentComponent = function () {
        return this.contentComponentRef && this.contentComponentRef.instance;
    };
    NzModalComponent.prototype.getElement = function () {
        return this.elementRef && this.elementRef.nativeElement;
    };
    NzModalComponent.prototype.onMaskDialogDown = function () {
        this.dialogMouseDown = true;
    };
    NzModalComponent.prototype.onDialogUp = function () {
        var _this = this;
        if (this.dialogMouseDown) {
            this.timeoutId = setTimeout(function () {
                _this.dialogMouseDown = false;
            }, 0);
        }
    };
    NzModalComponent.prototype.onClickMask = function ($event) {
        if (this.mask &&
            this.maskClosable &&
            $event.target.classList.contains(WRAP_CLASS_NAME) &&
            this.nzVisible &&
            !this.dialogMouseDown) {
            this.onClickOkCancel('cancel');
        }
    };
    NzModalComponent.prototype.isModalType = function (type) {
        return this.nzModalType === type;
    };
    NzModalComponent.prototype.onClickCloseBtn = function () {
        if (this.nzVisible) {
            this.onClickOkCancel('cancel');
        }
    };
    NzModalComponent.prototype.onClickOkCancel = function (type) {
        var _this = this;
        var trigger = { ok: this.nzOnOk, cancel: this.nzOnCancel }[type];
        var loadingKey = { ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            var result = trigger(this.getContentComponent());
            var caseClose_1 = function (doClose) { return doClose !== false && _this.close(doClose); }; // Users can return "false" to prevent closing by default
            if (isPromise(result)) {
                this[loadingKey] = true;
                var handleThen = function (doClose) {
                    _this[loadingKey] = false;
                    caseClose_1(doClose);
                };
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose_1(result);
            }
        }
    };
    NzModalComponent.prototype.isNonEmptyString = function (value) {
        return typeof value === 'string' && value !== '';
    };
    NzModalComponent.prototype.isTemplateRef = function (value) {
        return value instanceof TemplateRef;
    };
    NzModalComponent.prototype.isComponent = function (value) {
        return value instanceof Type;
    };
    NzModalComponent.prototype.isModalButtons = function (value) {
        return Array.isArray(value) && value.length > 0;
    };
    // Do rest things when visible state changed
    NzModalComponent.prototype.handleVisibleStateChange = function (visible, animation, closeResult) {
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
        return Promise.resolve(animation ? this.animateTo(visible) : undefined).then(function () {
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
        });
    };
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    NzModalComponent.prototype.getButtonCallableProp = function (options, prop) {
        var value = options[prop];
        var args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    };
    // On nzFooter's modal button click
    NzModalComponent.prototype.onButtonClick = function (button) {
        var result = this.getButtonCallableProp(button, 'onClick'); // Call onClick directly
        if (isPromise(result)) {
            button.loading = true;
            result.then(function () { return (button.loading = false); }).catch(function () { return (button.loading = false); });
        }
    };
    // Change nzVisible from inside
    NzModalComponent.prototype.changeVisibleFromInside = function (visible, closeResult) {
        if (this.nzVisible !== visible) {
            // Change nzVisible value immediately
            this.nzVisible = visible;
            this.nzVisibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    };
    NzModalComponent.prototype.changeAnimationState = function (state) {
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
    NzModalComponent.prototype.animateTo = function (isVisible) {
        var _this = this;
        if (isVisible) {
            // Figure out the lastest click position when shows up
            setTimeout(function () { return _this.updateTransformOrigin(); }); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise(function (resolve) {
            return setTimeout(function () {
                // Return when animation is over
                _this.changeAnimationState(null);
                resolve();
            }, _this.nzNoAnimation ? 0 : MODAL_ANIMATE_DURATION);
        });
    };
    NzModalComponent.prototype.formatModalButtons = function (buttons) {
        return buttons.map(function (button) {
            return __assign({
                type: 'default',
                size: 'default',
                autoLoading: true,
                show: true,
                loading: false,
                disabled: false
            }, button);
        });
    };
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    NzModalComponent.prototype.createDynamicComponent = function (component) {
        var factory = this.cfr.resolveComponentFactory(component);
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
    NzModalComponent.prototype.updateTransformOrigin = function () {
        var modalElement = this.modalContainer.nativeElement;
        if (this.previouslyFocusedElement) {
            var previouslyDOMRect = this.previouslyFocusedElement.getBoundingClientRect();
            var lastPosition = getElementOffset(this.previouslyFocusedElement);
            var x = lastPosition.left + previouslyDOMRect.width / 2;
            var y = lastPosition.top + previouslyDOMRect.height / 2;
            this.transformOrigin = x - modalElement.offsetLeft + "px " + (y - modalElement.offsetTop) + "px 0px";
        }
    };
    NzModalComponent.prototype.savePreviouslyFocusedElement = function () {
        if (this.document) {
            this.previouslyFocusedElement = this.document.activeElement;
        }
    };
    NzModalComponent.prototype.trapFocus = function () {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    };
    NzModalComponent.prototype.restoreFocus = function () {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    };
    /** @nocollapse */ NzModalComponent.ɵfac = function NzModalComponent_Factory(t) { return new (t || NzModalComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(OverlayKeyboardDispatcher), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NzModalControlService), ɵɵdirectiveInject(FocusTrapFactory), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NZ_MODAL_CONFIG, 8), ɵɵdirectiveInject(DOCUMENT)); };
    /** @nocollapse */ NzModalComponent.ɵcmp = ɵɵdefineComponent({ type: NzModalComponent, selectors: [["nz-modal"]], contentQueries: function NzModalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzModalFooterDirective, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalFooter = _t.first);
        } }, viewQuery: function NzModalComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0, true);
            ɵɵviewQuery(_c1, true, ViewContainerRef);
            ɵɵviewQuery(_c2, true, ElementRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalContainer = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.bodyContainer = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.autoFocusButtonOk = _t.first);
        } }, inputs: { nzVisible: "nzVisible", nzClosable: "nzClosable", nzOkLoading: "nzOkLoading", nzOkDisabled: "nzOkDisabled", nzCancelDisabled: "nzCancelDisabled", nzCancelLoading: "nzCancelLoading", nzKeyboard: "nzKeyboard", nzNoAnimation: "nzNoAnimation", nzMask: "nzMask", nzMaskClosable: "nzMaskClosable", nzContent: "nzContent", nzComponentParams: "nzComponentParams", nzFooter: "nzFooter", nzGetContainer: "nzGetContainer", nzZIndex: "nzZIndex", nzWidth: "nzWidth", nzWrapClassName: "nzWrapClassName", nzClassName: "nzClassName", nzStyle: "nzStyle", nzTitle: "nzTitle", nzCloseIcon: "nzCloseIcon", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzOkText: "nzOkText", nzCancelText: "nzCancelText", nzOkType: "nzOkType", nzIconType: "nzIconType", nzModalType: "nzModalType", nzAriaLabel: "nzAriaLabel", nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel" }, outputs: { nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel", nzAfterOpen: "nzAfterOpen", nzAfterClose: "nzAfterClose", nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzModal"], features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], ngContentSelectors: _c3, decls: 15, vars: 18, consts: [["tplOriginContent", ""], [3, "nzNoAnimation"], ["class", "ant-modal-mask", 3, "ngClass", "ant-modal-mask-hidden", "ngStyle", "zIndex", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 3, "click", "mouseup"], ["role", "document", 3, "ngClass", "ngStyle", "mousedown"], ["modalContainer", ""], [1, "ant-modal-content"], ["class", "ant-modal-close", 3, "click", 4, "ngIf"], [3, "ngSwitch", 4, "ngIf"], ["tplContentDefault", ""], ["tplContentConfirm", ""], [1, "ant-modal-mask", 3, "ngClass", "ngStyle"], [1, "ant-modal-close", 3, "click"], [1, "ant-modal-close-x"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 1, "ant-modal-close-icon", 3, "nzType"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["class", "ant-modal-header", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], ["bodyContainer", ""], ["class", "ant-modal-footer", 4, "ngIf"], [1, "ant-modal-header"], [1, "ant-modal-title"], [4, "ngSwitchCase"], [3, "innerHTML"], [3, "ngTemplateOutlet", 4, "ngSwitchDefault"], [1, "ant-modal-footer"], [4, "ngSwitchDefault"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click"], [1, "ant-modal-confirm-body-wrapper"], [1, "ant-modal-confirm-body"], ["nz-icon", "", 3, "nzType"], [1, "ant-modal-confirm-title"], [1, "ant-modal-confirm-content"], [1, "ant-modal-confirm-btns"], ["autoFocusButtonOk", ""]], template: function NzModalComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzModalComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
            ɵɵelementStart(2, "div", 1);
            ɵɵtemplate(3, NzModalComponent_div_3_Template, 1, 4, "div", 2);
            ɵɵelementStart(4, "div", 3);
            ɵɵlistener("click", function NzModalComponent_Template_div_click_4_listener($event) { return ctx.onClickMask($event); })("mouseup", function NzModalComponent_Template_div_mouseup_4_listener($event) { return ctx.onDialogUp(); });
            ɵɵelementStart(5, "div", 4, 5);
            ɵɵlistener("mousedown", function NzModalComponent_Template_div_mousedown_5_listener($event) { return ctx.onMaskDialogDown(); });
            ɵɵpipe(7, "nzToCssUnit");
            ɵɵelementStart(8, "div", 6);
            ɵɵtemplate(9, NzModalComponent_button_9_Template, 3, 2, "button", 7);
            ɵɵtemplate(10, NzModalComponent_ng_container_10_Template, 3, 3, "ng-container", 8);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(11, NzModalComponent_ng_template_11_Template, 6, 4, "ng-template", null, 9, ɵɵtemplateRefExtractor);
            ɵɵtemplate(13, NzModalComponent_ng_template_13_Template, 15, 8, "ng-template", null, 10, ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("nzNoAnimation", ctx.nzNoAnimation);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.mask);
            ɵɵadvance(1);
            ɵɵclassMapInterpolate1("ant-modal-wrap ", ctx.nzWrapClassName, "");
            ɵɵstyleProp("z-index", ctx.nzZIndex)("visibility", ctx.hidden ? "hidden" : null);
            ɵɵadvance(1);
            ɵɵclassMapInterpolate1("ant-modal ", ctx.nzClassName, "");
            ɵɵstyleProp("width", ɵɵpipeBind1(7, 16, ctx.nzWidth))("transform-origin", ctx.transformOrigin);
            ɵɵproperty("ngClass", ctx.modalAnimationClassMap)("ngStyle", ctx.nzStyle);
            ɵɵadvance(4);
            ɵɵproperty("ngIf", ctx.nzClosable);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.hidden);
        } }, directives: [NzNoAnimationDirective, NgIf, NgClass, NgStyle, NzStringTemplateOutletDirective, NzIconDirective, NgSwitch, NgSwitchCase, NgTemplateOutlet, NgSwitchDefault, NgForOf, NzButtonComponent], pipes: [NzToCssUnitPipe], encapsulation: 2 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzVisible", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzClosable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzOkLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzOkDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCancelDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCancelLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzKeyboard", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzModalComponent.prototype, "nzNoAnimation", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzMask", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzMaskClosable", void 0);
    return NzModalComponent;
}(NzModalRef));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzModalComponent, [{
        type: Component,
        args: [{
                selector: 'nz-modal',
                exportAs: 'nzModal',
                templateUrl: './nz-modal.component.html',
                // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: NzConfigService }, { type: Overlay }, { type: OverlayKeyboardDispatcher }, { type: NzI18nService }, { type: ComponentFactoryResolver }, { type: ElementRef }, { type: ViewContainerRef }, { type: NzModalControlService }, { type: FocusTrapFactory }, { type: ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_MODAL_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { nzVisible: [{
            type: Input
        }], nzClosable: [{
            type: Input
        }], nzOkLoading: [{
            type: Input
        }], nzOkDisabled: [{
            type: Input
        }], nzCancelDisabled: [{
            type: Input
        }], nzCancelLoading: [{
            type: Input
        }], nzKeyboard: [{
            type: Input
        }], nzNoAnimation: [{
            type: Input
        }], nzMask: [{
            type: Input
        }], nzMaskClosable: [{
            type: Input
        }], nzContent: [{
            type: Input
        }], nzComponentParams: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzGetContainer: [{
            type: Input
        }], nzZIndex: [{
            type: Input
        }], nzWidth: [{
            type: Input
        }], nzWrapClassName: [{
            type: Input
        }], nzClassName: [{
            type: Input
        }], nzStyle: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzCloseIcon: [{
            type: Input
        }], nzMaskStyle: [{
            type: Input
        }], nzBodyStyle: [{
            type: Input
        }], nzOkText: [{
            type: Input
        }], nzCancelText: [{
            type: Input
        }], nzOkType: [{
            type: Input
        }], nzIconType: [{
            type: Input
        }], nzModalType: [{
            type: Input
        }], nzAriaLabel: [{
            type: Input
        }], nzOnOk: [{
            type: Input
        }, {
            type: Output
        }], nzOnCancel: [{
            type: Input
        }, {
            type: Output
        }], nzAfterOpen: [{
            type: Output
        }], nzAfterClose: [{
            type: Output
        }], nzVisibleChange: [{
            type: Output
        }], modalContainer: [{
            type: ViewChild,
            args: ['modalContainer', { static: true }]
        }], bodyContainer: [{
            type: ViewChild,
            args: ['bodyContainer', { static: false, read: ViewContainerRef }]
        }], autoFocusButtonOk: [{
            type: ViewChild,
            args: ['autoFocusButtonOk', { static: false, read: ElementRef }]
        }], modalFooter: [{
            type: ContentChild,
            args: [NzModalFooterDirective, { static: false }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzModalServiceModule = /** @class */ (function () {
    function NzModalServiceModule() {
    }
    /** @nocollapse */ NzModalServiceModule.ɵmod = ɵɵdefineNgModule({ type: NzModalServiceModule });
    /** @nocollapse */ NzModalServiceModule.ɵinj = ɵɵdefineInjector({ factory: function NzModalServiceModule_Factory(t) { return new (t || NzModalServiceModule)(); } });
    return NzModalServiceModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzModalServiceModule, [{
        type: NgModule
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzModalModule = /** @class */ (function () {
    function NzModalModule() {
    }
    /** @nocollapse */ NzModalModule.ɵmod = ɵɵdefineNgModule({ type: NzModalModule });
    /** @nocollapse */ NzModalModule.ɵinj = ɵɵdefineInjector({ factory: function NzModalModule_Factory(t) { return new (t || NzModalModule)(); }, imports: [[
                CommonModule,
                OverlayModule,
                NzAddOnModule,
                NzI18nModule,
                NzButtonModule,
                NzIconModule,
                NzPipesModule,
                NzNoAnimationModule,
                NzModalServiceModule,
                NzModalControlServiceModule
            ]] });
    return NzModalModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzModalModule, { declarations: [NzModalComponent, NzModalFooterDirective], imports: [CommonModule,
        OverlayModule,
        NzAddOnModule,
        NzI18nModule,
        NzButtonModule,
        NzIconModule,
        NzPipesModule,
        NzNoAnimationModule,
        NzModalServiceModule,
        NzModalControlServiceModule], exports: [NzModalComponent, NzModalFooterDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzModalModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    NzAddOnModule,
                    NzI18nModule,
                    NzButtonModule,
                    NzIconModule,
                    NzPipesModule,
                    NzNoAnimationModule,
                    NzModalServiceModule,
                    NzModalControlServiceModule
                ],
                exports: [NzModalComponent, NzModalFooterDirective],
                declarations: [NzModalComponent, NzModalFooterDirective],
                entryComponents: [NzModalComponent]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// A builder used for managing service creating modals
var ModalBuilderForService = /** @class */ (function () {
    function ModalBuilderForService(overlay, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.overlay = overlay;
        this.createModal();
        if (!('nzGetContainer' in options)) {
            // As we use CDK to create modal in service by force, there is no need to use nzGetContainer
            options.nzGetContainer = undefined; // Override nzGetContainer's default value to prevent creating another overlay
        }
        this.changeProps(options);
        this.modalRef.instance.setOverlayRef(this.overlayRef);
        this.modalRef.instance.open();
        this.modalRef.instance.nzAfterClose.subscribe(function () { return _this.destroyModal(); }); // [NOTE] By default, close equals destroy when using as Service
    }
    ModalBuilderForService.prototype.getInstance = function () {
        return this.modalRef && this.modalRef.instance;
    };
    ModalBuilderForService.prototype.destroyModal = function () {
        if (this.modalRef) {
            this.overlayRef.dispose();
            this.modalRef = null;
        }
    };
    ModalBuilderForService.prototype.changeProps = function (options) {
        if (this.modalRef) {
            Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
        }
    };
    // Create component to ApplicationRef
    ModalBuilderForService.prototype.createModal = function () {
        this.overlayRef = this.overlay.create();
        this.modalRef = this.overlayRef.attach(new ComponentPortal(NzModalComponent));
    };
    return ModalBuilderForService;
}());
var NzModalService = /** @class */ (function () {
    function NzModalService(overlay, modalControl) {
        this.overlay = overlay;
        this.modalControl = modalControl;
    }
    Object.defineProperty(NzModalService.prototype, "openModals", {
        // Track of the current close modals (we assume invisible is close this time)
        get: function () {
            return this.modalControl.openModals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalService.prototype, "afterAllClose", {
        get: function () {
            return this.modalControl.afterAllClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // Closes all of the currently-open dialogs
    NzModalService.prototype.closeAll = function () {
        this.modalControl.closeAll();
    };
    NzModalService.prototype.create = function (options) {
        if (options === void 0) { options = {}; }
        if (typeof options.nzOnCancel !== 'function') {
            options.nzOnCancel = function () { }; // Leave a empty function to close this modal by default
        }
        // NOTE: use NzModalComponent as the NzModalRef by now, we may need archive the real NzModalRef object in the future
        var modalRef = new ModalBuilderForService(this.overlay, options).getInstance();
        return modalRef;
    };
    NzModalService.prototype.confirm = function (options, confirmType) {
        if (options === void 0) { options = {}; }
        if (confirmType === void 0) { confirmType = 'confirm'; }
        if ('nzFooter' in options) {
            warn("The Confirm-Modal doesn't support \"nzFooter\", this property will be ignored.");
        }
        if (!('nzWidth' in options)) {
            options.nzWidth = 416;
        }
        if (!('nzMaskClosable' in options)) {
            options.nzMaskClosable = false;
        }
        if (typeof options.nzOnOk !== 'function') {
            // NOTE: only support function currently by calling confirm()
            options.nzOnOk = function () { }; // Leave a empty function to close this modal by default
        }
        options.nzModalType = 'confirm';
        options.nzClassName = "ant-modal-confirm ant-modal-confirm-" + confirmType + " " + (options.nzClassName || '');
        return this.create(options);
    };
    NzModalService.prototype.info = function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'info');
    };
    NzModalService.prototype.success = function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'success');
    };
    NzModalService.prototype.error = function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'error');
    };
    NzModalService.prototype.warning = function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'warning');
    };
    NzModalService.prototype.simpleConfirm = function (options, confirmType) {
        if (options === void 0) { options = {}; }
        var iconMap = {
            info: 'info-circle',
            success: 'check-circle',
            error: 'close-circle',
            warning: 'exclamation-circle'
        };
        if (!('nzIconType' in options)) {
            options.nzIconType = iconMap[confirmType];
        }
        if (!('nzCancelText' in options)) {
            // Remove the Cancel button if the user not specify a Cancel button
            options.nzCancelText = null;
        }
        return this.confirm(options, confirmType);
    };
    /** @nocollapse */ NzModalService.ɵfac = function NzModalService_Factory(t) { return new (t || NzModalService)(ɵɵinject(Overlay), ɵɵinject(NzModalControlService)); };
    /** @nocollapse */ NzModalService.ɵprov = ɵɵdefineInjectable({ token: NzModalService, factory: NzModalService.ɵfac, providedIn: NzModalServiceModule });
    return NzModalService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzModalService, [{
        type: Injectable,
        args: [{
                providedIn: NzModalServiceModule
            }]
    }], function () { return [{ type: Overlay }, { type: NzModalControlService }]; }, null); })();

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

export { NZ_MODAL_CONFIG, NzModalComponent, NzModalControlService, NzModalControlServiceModule, NzModalFooterDirective, NzModalModule, NzModalRef, NzModalService, NzModalServiceModule };
//# sourceMappingURL=ng-zorro-antd-modal.js.map
