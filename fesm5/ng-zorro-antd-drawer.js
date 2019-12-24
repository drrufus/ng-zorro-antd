import { __extends, __decorate, __metadata, __rest } from 'tslib';
import { ESCAPE } from '@angular/cdk/keycodes';
import { DOCUMENT, NgIf, NgStyle, NgTemplateOutlet, CommonModule } from '@angular/common';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵproperty, ɵɵelementContainerStart, ɵɵelement, ɵɵelementContainerEnd, ɵɵadvance, ɵɵsanitizeHtml, ɵɵtemplate, ɵɵclassProp, ɵɵelementContainer, ɵɵprojection, ɵɵstyleProp, ɵɵclassMapInterpolate1, EventEmitter, TemplateRef, Type, ɵɵdirectiveInject, Renderer2, Injector, ChangeDetectorRef, ViewContainerRef, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵtemplateRefExtractor, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Optional, Inject, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope, ɵɵinject, ɵɵdefineInjectable, Injectable } from '@angular/core';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { OverlayConfig, Overlay, OverlayKeyboardDispatcher, OverlayModule } from '@angular/cdk/overlay';
import { PortalInjector, ComponentPortal, TemplatePortal, CdkPortalOutlet, PortalModule } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { toCssPixel, NzConfigService, NzNoAnimationDirective, NzStringTemplateOutletDirective, InputBoolean, WithConfig, NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { takeUntil } from 'rxjs/operators';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:no-any
var NzDrawerRef = /** @class */ (function () {
    function NzDrawerRef() {
    }
    return NzDrawerRef;
}());

var _c0 = ["drawerTemplate"];
function NzDrawerComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r415 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("click", function NzDrawerComponent_ng_template_0_div_1_Template_div_click_0_listener($event) { ɵɵrestoreView(_r415); var ctx_r414 = ɵɵnextContext(2); return ctx_r414.maskClick(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r409 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r409.nzMaskStyle);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 14);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r418 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r418.nzTitle, ɵɵsanitizeHtml);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template, 2, 1, "ng-container", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r416 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r416.nzTitle);
} }
function NzDrawerComponent_ng_template_0_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r420 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function NzDrawerComponent_ng_template_0_div_5_button_2_Template_button_click_0_listener($event) { ɵɵrestoreView(_r420); var ctx_r419 = ɵɵnextContext(3); return ctx_r419.closeClick(); });
    ɵɵelement(1, "i", 16);
    ɵɵelementEnd();
} }
function NzDrawerComponent_ng_template_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_div_1_Template, 2, 1, "div", 10);
    ɵɵtemplate(2, NzDrawerComponent_ng_template_0_div_5_button_2_Template, 2, 0, "button", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r410 = ɵɵnextContext(2);
    ɵɵclassProp("ant-drawer-header", !!ctx_r410.nzTitle)("ant-drawer-header-no-title", !!ctx_r410.nzTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r410.nzTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r410.nzClosable);
} }
function NzDrawerComponent_ng_template_0_ng_template_7_Template(rf, ctx) { }
function NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function NzDrawerComponent_ng_template_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 17);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r412 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r412.nzContent)("ngTemplateOutletContext", ctx_r412.templateContext);
} }
function NzDrawerComponent_ng_template_0_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!nzContent"]);
} }
function NzDrawerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_1_Template, 1, 1, "div", 2);
    ɵɵelementStart(2, "div");
    ɵɵelementStart(3, "div", 3);
    ɵɵelementStart(4, "div", 4);
    ɵɵtemplate(5, NzDrawerComponent_ng_template_0_div_5_Template, 3, 4, "div", 5);
    ɵɵelementStart(6, "div", 6);
    ɵɵtemplate(7, NzDrawerComponent_ng_template_0_ng_template_7_Template, 0, 0, "ng-template", 7);
    ɵɵtemplate(8, NzDrawerComponent_ng_template_0_ng_container_8_Template, 2, 2, "ng-container", 8);
    ɵɵtemplate(9, NzDrawerComponent_ng_template_0_9_Template, 1, 0, undefined, 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r408 = ɵɵnextContext();
    ɵɵstyleProp("transform", ctx_r408.offsetTransform)("z-index", ctx_r408.nzZIndex);
    ɵɵclassProp("ant-drawer-open", ctx_r408.isOpen)("ant-drawer-top", ctx_r408.nzPlacement === "top")("ant-drawer-bottom", ctx_r408.nzPlacement === "bottom")("ant-drawer-right", ctx_r408.nzPlacement === "right")("ant-drawer-left", ctx_r408.nzPlacement === "left");
    ɵɵproperty("nzNoAnimation", ctx_r408.nzNoAnimation);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r408.nzMask);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("ant-drawer-content-wrapper ", ctx_r408.nzWrapClassName, "");
    ɵɵstyleProp("width", ctx_r408.width)("height", ctx_r408.height)("transform", ctx_r408.transform);
    ɵɵadvance(2);
    ɵɵstyleProp("height", ctx_r408.isLeftOrRight ? "100%" : null);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r408.nzTitle || ctx_r408.nzClosable);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r408.nzBodyStyle);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r408.isTemplateRef(ctx_r408.nzContent));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r408.nzContent);
} }
var _c1 = ["*"];
var DRAWER_ANIMATE_DURATION = 300;
var NZ_CONFIG_COMPONENT_NAME = 'drawer';
var NzDrawerComponent = /** @class */ (function (_super) {
    __extends(NzDrawerComponent, _super);
    function NzDrawerComponent(
    // tslint:disable-next-line:no-any
    document, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher) {
        var _this = _super.call(this) || this;
        _this.document = document;
        _this.nzConfigService = nzConfigService;
        _this.renderer = renderer;
        _this.overlay = overlay;
        _this.injector = injector;
        _this.changeDetectorRef = changeDetectorRef;
        _this.focusTrapFactory = focusTrapFactory;
        _this.viewContainerRef = viewContainerRef;
        _this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
        _this.nzClosable = true;
        _this.nzNoAnimation = false;
        _this.nzKeyboard = true;
        _this.nzPlacement = 'right';
        _this.nzMaskStyle = {};
        _this.nzBodyStyle = {};
        _this.nzWidth = 256;
        _this.nzHeight = 256;
        _this.nzZIndex = 1000;
        _this.nzOffsetX = 0;
        _this.nzOffsetY = 0;
        _this.nzOnViewInit = new EventEmitter();
        _this.nzOnClose = new EventEmitter();
        _this.destroy$ = new Subject();
        _this.isOpen = false;
        _this.templateContext = {
            $implicit: undefined,
            drawerRef: _this
        };
        _this.nzAfterOpen = new Subject();
        _this.nzAfterClose = new Subject();
        return _this;
    }
    Object.defineProperty(NzDrawerComponent.prototype, "nzVisible", {
        get: function () {
            return this.isOpen;
        },
        set: function (value) {
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "offsetTransform", {
        get: function () {
            if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) {
                return null;
            }
            switch (this.nzPlacement) {
                case 'left':
                    return "translateX(" + this.nzOffsetX + "px)";
                case 'right':
                    return "translateX(-" + this.nzOffsetX + "px)";
                case 'top':
                    return "translateY(" + this.nzOffsetY + "px)";
                case 'bottom':
                    return "translateY(-" + this.nzOffsetY + "px)";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "transform", {
        get: function () {
            if (this.isOpen) {
                return null;
            }
            switch (this.nzPlacement) {
                case 'left':
                    return "translateX(-100%)";
                case 'right':
                    return "translateX(100%)";
                case 'top':
                    return "translateY(-100%)";
                case 'bottom':
                    return "translateY(100%)";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "width", {
        get: function () {
            return this.isLeftOrRight ? toCssPixel(this.nzWidth) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "height", {
        get: function () {
            return !this.isLeftOrRight ? toCssPixel(this.nzHeight) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "isLeftOrRight", {
        get: function () {
            return this.nzPlacement === 'left' || this.nzPlacement === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "afterOpen", {
        get: function () {
            return this.nzAfterOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "afterClose", {
        get: function () {
            return this.nzAfterClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NzDrawerComponent.prototype.isTemplateRef = function (value) {
        return value instanceof TemplateRef;
    };
    NzDrawerComponent.prototype.ngOnInit = function () {
        this.attachOverlay();
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.templateContext = { $implicit: this.nzContentParams, drawerRef: this };
        this.changeDetectorRef.detectChanges();
    };
    NzDrawerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.attachBodyContent();
        setTimeout(function () {
            _this.nzOnViewInit.emit();
        });
    };
    NzDrawerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('nzVisible')) {
            var value = changes.nzVisible.currentValue;
            if (value) {
                this.open();
            }
            else {
                this.close();
            }
        }
    };
    NzDrawerComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.disposeOverlay();
    };
    NzDrawerComponent.prototype.getAnimationDuration = function () {
        return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
    };
    NzDrawerComponent.prototype.close = function (result) {
        var _this = this;
        this.isOpen = false;
        this.updateOverlayStyle();
        this.overlayKeyboardDispatcher.remove(this.overlayRef);
        this.changeDetectorRef.detectChanges();
        setTimeout(function () {
            _this.updateBodyOverflow();
            _this.restoreFocus();
            _this.nzAfterClose.next(result);
            _this.nzAfterClose.complete();
        }, this.getAnimationDuration());
    };
    NzDrawerComponent.prototype.open = function () {
        var _this = this;
        this.isOpen = true;
        this.overlayKeyboardDispatcher.add(this.overlayRef);
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.savePreviouslyFocusedElement();
        this.trapFocus();
        this.changeDetectorRef.detectChanges();
        setTimeout(function () {
            _this.nzAfterOpen.next();
        }, this.getAnimationDuration());
    };
    NzDrawerComponent.prototype.closeClick = function () {
        this.nzOnClose.emit();
    };
    NzDrawerComponent.prototype.maskClick = function () {
        if (this.nzMaskClosable && this.nzMask) {
            this.nzOnClose.emit();
        }
    };
    NzDrawerComponent.prototype.attachBodyContent = function () {
        this.bodyPortalOutlet.dispose();
        if (this.nzContent instanceof Type) {
            var childInjector = new PortalInjector(this.injector, new WeakMap([[NzDrawerRef, this]]));
            var componentPortal = new ComponentPortal(this.nzContent, null, childInjector);
            var componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
            Object.assign(componentRef.instance, this.nzContentParams);
            componentRef.changeDetectorRef.detectChanges();
        }
    };
    NzDrawerComponent.prototype.attachOverlay = function () {
        var _this = this;
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.drawerTemplate, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayRef.keydownEvents()
                .pipe(takeUntil(this.destroy$))
                .subscribe(function (event) {
                if (event.keyCode === ESCAPE && _this.isOpen && _this.nzKeyboard) {
                    _this.nzOnClose.emit();
                }
            });
        }
    };
    NzDrawerComponent.prototype.disposeOverlay = function () {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
        this.overlayRef = null;
    };
    NzDrawerComponent.prototype.getOverlayConfig = function () {
        return new OverlayConfig({
            positionStrategy: this.overlay.position().global(),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    };
    NzDrawerComponent.prototype.updateOverlayStyle = function () {
        if (this.overlayRef && this.overlayRef.overlayElement) {
            this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
        }
    };
    NzDrawerComponent.prototype.updateBodyOverflow = function () {
        if (this.overlayRef) {
            if (this.isOpen) {
                this.overlayRef.getConfig().scrollStrategy.enable();
            }
            else {
                this.overlayRef.getConfig().scrollStrategy.disable();
            }
        }
    };
    NzDrawerComponent.prototype.savePreviouslyFocusedElement = function () {
        if (this.document && !this.previouslyFocusedElement) {
            this.previouslyFocusedElement = this.document.activeElement;
            // We need the extra check, because IE's svg element has no blur method.
            if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === 'function') {
                this.previouslyFocusedElement.blur();
            }
        }
    };
    NzDrawerComponent.prototype.trapFocus = function () {
        if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
            this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
            this.focusTrap.focusInitialElement();
        }
    };
    NzDrawerComponent.prototype.restoreFocus = function () {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    };
    /** @nocollapse */ NzDrawerComponent.ɵfac = function NzDrawerComponent_Factory(t) { return new (t || NzDrawerComponent)(ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusTrapFactory), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(OverlayKeyboardDispatcher)); };
    /** @nocollapse */ NzDrawerComponent.ɵcmp = ɵɵdefineComponent({ type: NzDrawerComponent, selectors: [["nz-drawer"]], viewQuery: function NzDrawerComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0, true);
            ɵɵviewQuery(CdkPortalOutlet, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.drawerTemplate = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.bodyPortalOutlet = _t.first);
        } }, inputs: { nzContent: "nzContent", nzClosable: "nzClosable", nzMaskClosable: "nzMaskClosable", nzMask: "nzMask", nzNoAnimation: "nzNoAnimation", nzKeyboard: "nzKeyboard", nzTitle: "nzTitle", nzPlacement: "nzPlacement", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzWrapClassName: "nzWrapClassName", nzWidth: "nzWidth", nzHeight: "nzHeight", nzZIndex: "nzZIndex", nzOffsetX: "nzOffsetX", nzOffsetY: "nzOffsetY", nzVisible: "nzVisible" }, outputs: { nzOnViewInit: "nzOnViewInit", nzOnClose: "nzOnClose" }, exportAs: ["nzDrawer"], features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["drawerTemplate", ""], [1, "ant-drawer", 3, "nzNoAnimation"], ["class", "ant-drawer-mask", 3, "ngStyle", "click", 4, "ngIf"], [1, "ant-drawer-content"], [1, "ant-drawer-wrapper-body"], [3, "ant-drawer-header", "ant-drawer-header-no-title", 4, "ngIf"], [1, "ant-drawer-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [4, "ngIf"], [1, "ant-drawer-mask", 3, "ngStyle", "click"], ["class", "ant-drawer-title", 4, "ngIf"], ["aria-label", "Close", "class", "ant-drawer-close", 3, "click", 4, "ngIf"], [1, "ant-drawer-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"], ["aria-label", "Close", 1, "ant-drawer-close", 3, "click"], ["nz-icon", "", "nzType", "close"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzDrawerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Template, 10, 20, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        } }, directives: [NzNoAnimationDirective, NgIf, NgStyle, CdkPortalOutlet, NzStringTemplateOutletDirective, NzIconDirective, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDrawerComponent.prototype, "nzClosable", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDrawerComponent.prototype, "nzMaskClosable", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDrawerComponent.prototype, "nzMask", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDrawerComponent.prototype, "nzNoAnimation", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDrawerComponent.prototype, "nzKeyboard", void 0);
    return NzDrawerComponent;
}(NzDrawerRef));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDrawerComponent, [{
        type: Component,
        args: [{
                selector: 'nz-drawer',
                exportAs: 'nzDrawer',
                templateUrl: './nz-drawer.component.html',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: NzConfigService }, { type: Renderer2 }, { type: Overlay }, { type: Injector }, { type: ChangeDetectorRef }, { type: FocusTrapFactory }, { type: ViewContainerRef }, { type: OverlayKeyboardDispatcher }]; }, { nzContent: [{
            type: Input
        }], nzClosable: [{
            type: Input
        }], nzMaskClosable: [{
            type: Input
        }], nzMask: [{
            type: Input
        }], nzNoAnimation: [{
            type: Input
        }], nzKeyboard: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzPlacement: [{
            type: Input
        }], nzMaskStyle: [{
            type: Input
        }], nzBodyStyle: [{
            type: Input
        }], nzWrapClassName: [{
            type: Input
        }], nzWidth: [{
            type: Input
        }], nzHeight: [{
            type: Input
        }], nzZIndex: [{
            type: Input
        }], nzOffsetX: [{
            type: Input
        }], nzOffsetY: [{
            type: Input
        }], nzVisible: [{
            type: Input
        }], nzOnViewInit: [{
            type: Output
        }], nzOnClose: [{
            type: Output
        }], drawerTemplate: [{
            type: ViewChild,
            args: ['drawerTemplate', { static: true }]
        }], bodyPortalOutlet: [{
            type: ViewChild,
            args: [CdkPortalOutlet, { static: false }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzDrawerServiceModule = /** @class */ (function () {
    function NzDrawerServiceModule() {
    }
    /** @nocollapse */ NzDrawerServiceModule.ɵmod = ɵɵdefineNgModule({ type: NzDrawerServiceModule });
    /** @nocollapse */ NzDrawerServiceModule.ɵinj = ɵɵdefineInjector({ factory: function NzDrawerServiceModule_Factory(t) { return new (t || NzDrawerServiceModule)(); } });
    return NzDrawerServiceModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDrawerServiceModule, [{
        type: NgModule
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzDrawerModule = /** @class */ (function () {
    function NzDrawerModule() {
    }
    /** @nocollapse */ NzDrawerModule.ɵmod = ɵɵdefineNgModule({ type: NzDrawerModule });
    /** @nocollapse */ NzDrawerModule.ɵinj = ɵɵdefineInjector({ factory: function NzDrawerModule_Factory(t) { return new (t || NzDrawerModule)(); }, imports: [[CommonModule, OverlayModule, PortalModule, NzIconModule, NzAddOnModule, NzNoAnimationModule, NzDrawerServiceModule]] });
    return NzDrawerModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzDrawerModule, { declarations: [NzDrawerComponent], imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzAddOnModule, NzNoAnimationModule, NzDrawerServiceModule], exports: [NzDrawerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDrawerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzAddOnModule, NzNoAnimationModule, NzDrawerServiceModule],
                exports: [NzDrawerComponent],
                declarations: [NzDrawerComponent],
                entryComponents: [NzDrawerComponent]
            }]
    }], null, null); })();

var DrawerBuilderForService = /** @class */ (function () {
    function DrawerBuilderForService(overlay, options) {
        var _this = this;
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new Subject();
        /** pick {@link NzDrawerOptions.nzOnCancel} and omit this option */
        var _a = this.options, nzOnCancel = _a.nzOnCancel, componentOption = __rest(_a, ["nzOnCancel"]);
        this.createDrawer();
        this.updateOptions(componentOption);
        // Prevent repeatedly open drawer when tap focus element.
        this.drawerRef.instance.savePreviouslyFocusedElement();
        this.drawerRef.instance.nzOnViewInit.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
            _this.drawerRef.instance.open();
        });
        this.drawerRef.instance.nzOnClose.subscribe(function () {
            if (nzOnCancel) {
                nzOnCancel().then(function (canClose) {
                    if (canClose !== false) {
                        _this.drawerRef.instance.close();
                    }
                });
            }
            else {
                _this.drawerRef.instance.close();
            }
        });
        this.drawerRef.instance.afterClose.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
            _this.overlayRef.dispose();
            _this.drawerRef = null;
            _this.unsubscribe$.next();
            _this.unsubscribe$.complete();
        });
    }
    DrawerBuilderForService.prototype.getInstance = function () {
        return this.drawerRef && this.drawerRef.instance;
    };
    DrawerBuilderForService.prototype.createDrawer = function () {
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent));
    };
    DrawerBuilderForService.prototype.updateOptions = function (options) {
        Object.assign(this.drawerRef.instance, options);
    };
    return DrawerBuilderForService;
}());
var NzDrawerService = /** @class */ (function () {
    function NzDrawerService(overlay) {
        this.overlay = overlay;
    }
    // tslint:disable-next-line:no-any
    NzDrawerService.prototype.create = function (options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    };
    /** @nocollapse */ NzDrawerService.ɵfac = function NzDrawerService_Factory(t) { return new (t || NzDrawerService)(ɵɵinject(Overlay)); };
    /** @nocollapse */ NzDrawerService.ɵprov = ɵɵdefineInjectable({ token: NzDrawerService, factory: NzDrawerService.ɵfac, providedIn: NzDrawerServiceModule });
    return NzDrawerService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDrawerService, [{
        type: Injectable,
        args: [{ providedIn: NzDrawerServiceModule }]
    }], function () { return [{ type: Overlay }]; }, null); })();

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

export { DRAWER_ANIMATE_DURATION, DrawerBuilderForService, NzDrawerComponent, NzDrawerModule, NzDrawerRef, NzDrawerService, NzDrawerServiceModule };
//# sourceMappingURL=ng-zorro-antd-drawer.js.map
